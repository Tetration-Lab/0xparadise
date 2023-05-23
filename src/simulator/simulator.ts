/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ethers } from 'ethers'
import { communitySurvivalBonus, individualAttackBonus, individualDefenseBonus, individualSurvivalBonus } from './bonus'
import { Constants } from './constants'
import { type Islander } from './islander'
import {
  Action,
  emptyBuildings,
  emptyResources,
  emptyResourcesUnit,
  emptyWorld,
  type IslanderInfo,
  type Resources,
  type World,
} from './types'
import {
  battleDamage,
  calculateAnimalRegen,
  calculateFishRegen,
  calculateFoodToEat,
  calculateFruitRegen,
  calculateTreeRegen,
  harvestPerShare,
  isDisasterHit,
  normalizeWithBonus,
} from './utils'

export class Simulator {
  deadPplAmt: number
  isEnded: boolean
  randomness: bigint
  round: number
  islanders: {
    itf: Islander
    info: IslanderInfo
    score: number
  }[]
  world: World

  constructor(islanders: Islander[], randomness: bigint) {
    this.deadPplAmt = 0
    this.isEnded = false
    this.randomness = randomness
    this.round = 0

    // Initialize world
    this.world = { ...emptyWorld }

    // Initialize islanders
    this.islanders = islanders.map((itf, i) => ({
      itf,
      score: 0,
      info: {
        idx: i,
        hp: Constants.INITIAL_HP,
        pearl: 0n,
        dayLived: 0,
        resources: { ...emptyResourcesUnit },
        buildings: { ...emptyBuildings },
        harvestPlan: [],
        communityBuildingPlan: [],
        personalBuildingPlan: [],
        kills: [],
        attacks: [],
        attacked: [],
        heals: [],
      },
    }))
  }

  nextRandomness() {
    this.randomness = BigInt(ethers.solidityPackedKeccak256(['uint256', 'uint256'], [this.randomness, this.round]))
    return this.randomness
  }

  async step(nStep: number) {
    for (let i = 0; i < nStep; i++) {
      if (!this.isEnded) {
        console.log(`Start day ${this.round + 1}`)
        await this.harvestPhase()
        await this.communityBuildPhase()
        await this.personalBuildPhase()
        await this.visitPhase()
        this.worldUpdate()
        console.log(`Survivors: ${this.islanders.length - this.deadPplAmt}`)
      } else {
        break
      }
    }
  }

  async harvestPhase() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const harvestPlans: Resources[] = Array(this.islanders.length).fill({ ...emptyResources })
    const totalHarvestPoint: Resources = { ...emptyResources }
    // Get harvest plan for each islander
    for (let i = 0; i < this.islanders.length; ++i) {
      //// Skip dead islanders
      if (this.islanders[i]!.info.hp == 0n) continue
      try {
        const plan = await this.islanders[i]!.itf.planHarvest(this.world, this.islanders[i]!.info)
        // Save islander latest harvest plan
        this.islanders[i]!.info.harvestPlan.push(plan)
        // Normalize harvest plan with bonus
        harvestPlans[i] = normalizeWithBonus(
          plan,
          this.islanders[i]!.info.buildings.harvest,
          this.world.buildings.harvest,
        )
        totalHarvestPoint.rock += harvestPlans[i]!.rock
        totalHarvestPoint.wood += harvestPlans[i]!.wood
        totalHarvestPoint.fruit += harvestPlans[i]!.fruit
        totalHarvestPoint.animal += harvestPlans[i]!.animal
        totalHarvestPoint.fish += harvestPlans[i]!.fish
        totalHarvestPoint.pearl += harvestPlans[i]!.pearl
      } catch {}
    }

    // Calculate harvest per share for each resource
    // and update world supply and previous harvest stat
    const rockHarvestPerShare = harvestPerShare(this.world.rock.supply, totalHarvestPoint.rock)
    this.world.rock.prevHarvest = (rockHarvestPerShare * totalHarvestPoint.rock) / Constants.ONE
    this.world.rock.supply -= this.world.rock.prevHarvest

    const woodHarvestPerShare = harvestPerShare(this.world.wood.supply, totalHarvestPoint.wood)
    this.world.wood.prevHarvest = (woodHarvestPerShare * totalHarvestPoint.wood) / Constants.ONE
    this.world.wood.supply -= this.world.wood.prevHarvest

    const fruitHarvestPerShare = harvestPerShare(this.world.fruit.supply, totalHarvestPoint.fruit)
    this.world.fruit.prevHarvest = (fruitHarvestPerShare * totalHarvestPoint.fruit) / Constants.ONE
    this.world.fruit.supply -= this.world.fruit.prevHarvest

    const animalHarvestPerShare = harvestPerShare(this.world.animal.supply, totalHarvestPoint.animal)
    this.world.animal.prevHarvest = (animalHarvestPerShare * totalHarvestPoint.animal) / Constants.ONE
    this.world.animal.supply -= this.world.animal.prevHarvest

    const fishHarvestPerShare = harvestPerShare(this.world.fish.supply, totalHarvestPoint.fish) / Constants.ONE
    this.world.fish.prevHarvest = (fishHarvestPerShare * totalHarvestPoint.fish) / Constants.ONE
    this.world.fish.supply -= this.world.fish.prevHarvest

    const pearlHarvestPerShare = harvestPerShare(this.world.pearl.supply, totalHarvestPoint.pearl)
    this.world.pearl.prevHarvest = (pearlHarvestPerShare * totalHarvestPoint.pearl) / Constants.ONE
    this.world.pearl.supply -= this.world.pearl.prevHarvest

    // Update islander resources
    for (let i = 0; i < this.islanders.length; ++i) {
      const islander = this.islanders[i]!
      // Skip dead islanders
      if (islander.info.hp == 0n) continue
      const harvestPlan = harvestPlans[i]!
      islander.info.pearl += (harvestPlan.pearl * pearlHarvestPerShare) / Constants.ONE
      islander.info.resources.rock += (harvestPlan.rock * rockHarvestPerShare) / Constants.ONE
      islander.info.resources.wood += (harvestPlan.wood * woodHarvestPerShare) / Constants.ONE
      islander.info.resources.food +=
        (Constants.FOOD_UNIT_PER_FRUIT_PCT * harvestPlan.fruit * fruitHarvestPerShare +
          Constants.FOOD_UNIT_PER_MEAT_PCT * harvestPlan.animal * animalHarvestPerShare +
          Constants.FOOD_UNIT_PER_FISH_PCT * harvestPlan.fish * fishHarvestPerShare) /
        (Constants.ONE * Constants.ONE)

      this.islanders[i] = islander
    }

    console.log(
      `World: ${this.world.rock.supply} rock, ${this.world.wood.supply} wood, ${this.world.fruit.supply} fruit, ${this.world.animal.supply} animal, ${this.world.fish.supply} fish, ${this.world.pearl.supply} pearl`,
    )
  }

  async communityBuildPhase() {
    // Get community building plan for each islander
    for (let i = 0; i < this.islanders.length; ++i) {
      if (this.islanders[i]!.info.hp == 0n) continue

      try {
        const plan = await this.islanders[i]!.itf.planCommunityBuild(this.world, this.islanders[i]!.info)
        // Save islander latest community building plan
        this.islanders[i]!.info.communityBuildingPlan.push(plan)
        // Upgrade rock harvest using wood
        if (this.islanders[i]!.info.resources.wood >= plan.harvest.rock) {
          this.world.buildings.harvest.rock += plan.harvest.rock
          this.islanders[i]!.info.resources.wood -= plan.harvest.rock
        }
        // Upgrade wood harvest using wood
        if (this.islanders[i]!.info.resources.wood >= plan.harvest.wood) {
          this.world.buildings.harvest.wood += plan.harvest.wood
          this.islanders[i]!.info.resources.wood -= plan.harvest.wood
        }
        // Upgrade food harvest using wood
        if (this.islanders[i]!.info.resources.wood >= plan.harvest.food) {
          this.world.buildings.harvest.food += plan.harvest.food
          this.islanders[i]!.info.resources.wood -= plan.harvest.food
        }
        // Upgrade survival using wood
        if (this.islanders[i]!.info.resources.wood >= plan.survival) {
          this.world.buildings.survival += plan.survival
          this.islanders[i]!.info.resources.wood -= plan.survival
        }
        // Upgrade protection using wood
        if (this.islanders[i]!.info.resources.wood >= plan.protection) {
          this.world.buildings.protection += plan.protection
          this.islanders[i]!.info.resources.wood -= plan.protection
        }
        // Upgrade statue using rock
        if (this.islanders[i]!.info.resources.rock >= plan.statue) {
          this.world.buildings.statue += plan.statue
          this.islanders[i]!.info.resources.rock -= plan.statue
        }
        // Upgrade atk using rock
        //if (this.islanders[i]!.info.resources.rock >= plan.atk) {
        //this.world.buildings.atk += plan.atk
        //this.islanders[i]!.info.resources.rock -= plan.atk
        //}
        //// Upgrade def using rock
        //if (this.islanders[i]!.info.resources.rock >= plan.def) {
        //this.world.buildings.def += plan.def
        //this.islanders[i]!.info.resources.rock -= plan.def
        //}
      } catch {}
    }
    console.log(
      `World Building: ${this.world.buildings.atk} atk, ${this.world.buildings.def} def, ${this.world.buildings.statue} statue, ${this.world.buildings.harvest.rock} rock, ${this.world.buildings.harvest.wood} wood, ${this.world.buildings.harvest.food} food, ${this.world.buildings.survival} survival, ${this.world.buildings.protection} protection`,
    )
  }

  async personalBuildPhase() {
    // Get personal building plan for each islander
    for (let i = 0; i < this.islanders.length; ++i) {
      if (this.islanders[i]!.info.hp == 0n) continue

      try {
        const plan = await this.islanders[i]!.itf.planPersonalBuild(this.world, this.islanders[i]!.info)
        // Save islander latest personal building plan
        this.islanders[i]!.info.personalBuildingPlan.push(plan)
        // Upgrade rock harvest using wood
        if (this.islanders[i]!.info.resources.wood >= plan.harvest.rock) {
          this.islanders[i]!.info.buildings.harvest.rock += plan.harvest.rock
          this.islanders[i]!.info.resources.wood -= plan.harvest.rock
        }
        // Upgrade wood harvest using wood
        if (this.islanders[i]!.info.resources.wood >= plan.harvest.wood) {
          this.islanders[i]!.info.buildings.harvest.wood += plan.harvest.wood
          this.islanders[i]!.info.resources.wood -= plan.harvest.wood
        }
        // Upgrade food harvest using wood
        if (this.islanders[i]!.info.resources.wood >= plan.harvest.food) {
          this.islanders[i]!.info.buildings.harvest.food += plan.harvest.food
          this.islanders[i]!.info.resources.wood -= plan.harvest.food
        }
        // Upgrade survival using wood
        if (this.islanders[i]!.info.resources.wood >= plan.survival) {
          this.islanders[i]!.info.buildings.survival += plan.survival
          this.islanders[i]!.info.resources.wood -= plan.survival
        }
        // Upgrade protection using wood
        if (this.islanders[i]!.info.resources.wood >= plan.protection) {
          this.islanders[i]!.info.buildings.protection += plan.protection
          this.islanders[i]!.info.resources.wood -= plan.protection
        }
        //// Upgrade statue using rock
        //if (this.islanders[i]!.info.resources.rock >= plan.statue) {
        //this.islanders[i]!.info.buildings.statue += plan.statue
        //this.islanders[i]!.info.resources.rock -= plan.statue
        //}
        // Upgrade atk using rock
        if (this.islanders[i]!.info.resources.rock >= plan.atk) {
          this.islanders[i]!.info.buildings.atk += plan.atk
          this.islanders[i]!.info.resources.rock -= plan.atk
        }
        // Upgrade def using rock
        if (this.islanders[i]!.info.resources.rock >= plan.def) {
          this.islanders[i]!.info.buildings.def += plan.def
          this.islanders[i]!.info.resources.rock -= plan.def
        }
      } catch {}
    }
  }

  async visitPhase() {
    let healthDiffs: bigint[] = Array(this.islanders.length).fill(0n)
    for (let i = 0; i < this.islanders.length; ++i) {
      for (let j = 0; j < this.islanders.length; ++j) {
        if (i == j) continue
        // Skip dead islanders
        if (this.islanders[i]!.info.hp == 0n || this.islanders[j]!.info.hp == 0n) continue

        const [damageTakenIfAttack, damageDealtIfAttack] = battleDamage(
          individualAttackBonus(this.islanders[i]!.info.buildings.atk),
          individualDefenseBonus(this.islanders[i]!.info.buildings.def),
          individualAttackBonus(this.islanders[j]!.info.buildings.atk),
          individualDefenseBonus(this.islanders[j]!.info.buildings.def),
        )

        try {
          const action = await this.islanders[i]!.itf.planVisit(
            this.world,
            this.islanders[i]!.info,
            this.islanders[j]!.info,
            damageDealtIfAttack,
            damageTakenIfAttack,
          )
          // TODO: handle other type of action
          if (action == Action.Attack) {
            // Attack
            // Add damage to self and other islander
            healthDiffs[i] += damageTakenIfAttack
            healthDiffs[j] += damageDealtIfAttack
          }
        } catch {}
      }
    }

    for (let i = 0; i < this.islanders.length; ++i) {
      //// Skip dead islanders
      if (this.islanders[i]!.info.hp == 0n) continue

      const diff = healthDiffs[i]!
      if (healthDiffs[i]! >= this.islanders[i]!.info.hp) {
        // Dead
        this.islanders[i]!.info.hp = 0n
      } else {
        // Survive
        this.islanders[i]!.info.hp -= diff
      }
    }
  }

  worldUpdate() {
    const [isHit, disasterDamage] = isDisasterHit(this.round, this.nextRandomness())
    // Eat food and take disaster
    for (let i = 0; i < this.islanders.length; ++i) {
      const islander = this.islanders[i]!.info
      // Skip dead islanders
      if (islander.hp == 0n) continue
      // Eat food
      const maxHp =
        Constants.INITIAL_HP +
        individualSurvivalBonus(islander.buildings.survival) +
        communitySurvivalBonus(this.world.buildings.survival)
      // Eat 1 unit of food to prevent hp loss
      if (islander.resources.food == 0n) {
        // Lose HEALTH_PER_FOOD_UNIT hp if no food
        islander.hp -= Constants.HEALTH_PER_FOOD_UNIT
      } else {
        islander.resources.food -= Constants.ONE
        // Eat some food proportional to max hp to recover hp
        if (islander.resources.food > Constants.ONE) {
          const foodAbleToEat = calculateFoodToEat(maxHp)
          const foodToEat = foodAbleToEat > islander.resources.food ? islander.resources.food : foodAbleToEat
          islander.resources.food -= foodToEat
          islander.hp += foodToEat * Constants.HEALTH_PER_FOOD_UNIT
        }
      }

      // Handle Disaster
      if (isHit) {
        if (disasterDamage >= islander.hp) {
          // Dead
          islander.hp = 0n
        } else {
          // Survive
          islander.hp -= disasterDamage
        }
      }

      this.islanders[i]!.info = islander
    }

    let deadPplAmt = 0
    for (let i = 0; i < this.islanders.length; ++i) {
      const islander = this.islanders[i]!
      if (islander.info.hp == 0n) {
        deadPplAmt += 1
      } else {
        // Increase day lived
        islander.info.dayLived += 1
      }

      this.islanders[i]! = islander
    }
    this.deadPplAmt = deadPplAmt
    if (deadPplAmt == this.islanders.length) {
      this.isEnded = true
      this.end()
      return
    }

    // Update world and regen
    this.round += 1
    const woodRegen = calculateTreeRegen(this.world.wood.supply, this.world.fruit.supply)
    const fruitRegen = calculateFruitRegen(this.world.wood.supply, this.world.fruit.supply, this.world.animal.supply)
    const animalRegen = calculateAnimalRegen(this.world.fruit.supply, this.world.animal.supply)
    const fishRegen = calculateFishRegen(this.world.fish.supply)
    this.world.wood.supply += woodRegen
    this.world.wood.prevRegen = woodRegen
    this.world.fruit.supply += fruitRegen
    this.world.fruit.prevRegen = fruitRegen
    this.world.animal.supply += animalRegen
    this.world.animal.prevRegen = animalRegen
    this.world.fish.supply += fishRegen
    this.world.fish.prevRegen = fishRegen
  }

  end() {
    const communityScore =
      this.world.buildings.statue * Constants.POINT_PER_STATUE +
      (this.world.buildings.survival +
        this.world.buildings.protection +
        this.world.buildings.harvest.food +
        this.world.buildings.harvest.rock +
        this.world.buildings.harvest.wood) *
        Constants.POINT_PER_BUILDING
    for (let i = 0; i < this.islanders.length; ++i) {
      const islander = this.islanders[i]!.info
      const personalScore =
        islander.pearl * Constants.POINT_PER_PEARL + BigInt(islander.dayLived) * Constants.POINT_PER_DAY_LIVED
      this.islanders[i]!.score = Number(communityScore + personalScore)
    }
  }

  formatIlanderInfosResult() {
    return this.islanders
      .map((e) => e.info)
      .map((e) => ({
        idx: e.idx,
        hp: Number(e.hp),
        pearl: Number(e.pearl),
        dayLived: e.dayLived,
        resources: {
          food: Number(e.resources.food),
          wood: Number(e.resources.wood),
          rock: Number(e.resources.rock),
        },
        buildings: {
          survival: Number(e.buildings.survival),
          protection: Number(e.buildings.protection),
          statue: Number(e.buildings.statue),
          atk: Number(e.buildings.atk),
          def: Number(e.buildings.def),
          harvest: {
            food: Number(e.buildings.harvest.food),
            wood: Number(e.buildings.harvest.wood),
            rock: Number(e.buildings.harvest.rock),
          },
        },
        harvestPlan: e.harvestPlan.map((ee) => ({
          rock: Number(ee.rock),
          wood: Number(ee.wood),
          fruit: Number(ee.fruit),
          animal: Number(ee.animal),
          fish: Number(ee.fish),
          pearl: Number(ee.pearl),
        })),
        communityBuildingPlan: e.communityBuildingPlan.map((ee) => ({
          survival: Number(ee.survival),
          protection: Number(ee.protection),
          statue: Number(ee.statue),
          atk: Number(ee.atk),
          def: Number(ee.def),
          harvest: {
            food: Number(ee.harvest.food),
            wood: Number(ee.harvest.wood),
            rock: Number(ee.harvest.rock),
          },
        })),
        personalBuildingPlan: e.personalBuildingPlan.map((ee) => ({
          survival: Number(ee.survival),
          protection: Number(ee.protection),
          statue: Number(ee.statue),
          atk: Number(ee.atk),
          def: Number(ee.def),
          harvest: {
            food: Number(ee.harvest.food),
            wood: Number(ee.harvest.wood),
            rock: Number(ee.harvest.rock),
          },
        })),
        kills: e.kills.map((ee) => Number(ee)),
        attacks: e.attacks.map((ee) => Number(ee)),
        attacked: e.attacked.map((ee) => Number(ee)),
        heals: e.heals.map((ee) => Number(ee)),
      }))
  }

  formatWorldResult() {
    return {
      animal: {
        prevHarvest: Number(this.world.animal.prevHarvest),
        prevRegen: Number(this.world.animal.prevRegen),
        supply: Number(this.world.animal.supply),
      },
      rock: {
        prevHarvest: Number(this.world.rock.prevHarvest),
        prevRegen: Number(this.world.rock.prevRegen),
        supply: Number(this.world.rock.supply),
      },
      wood: {
        prevHarvest: Number(this.world.wood.prevHarvest),
        prevRegen: Number(this.world.wood.prevRegen),
        supply: Number(this.world.wood.supply),
      },
      fruit: {
        prevHarvest: Number(this.world.fruit.prevHarvest),
        prevRegen: Number(this.world.fruit.prevRegen),
        supply: Number(this.world.fruit.supply),
      },
      pearl: {
        prevHarvest: Number(this.world.pearl.prevHarvest),
        prevRegen: Number(this.world.pearl.prevRegen),
        supply: Number(this.world.pearl.supply),
      },
      buildings: {
        harvest: {
          food: Number(this.world.buildings.harvest.food),
          wood: Number(this.world.buildings.harvest.wood),
          rock: Number(this.world.buildings.harvest.rock),
        },
        survival: Number(this.world.buildings.survival),
        protection: Number(this.world.buildings.protection),
        statue: Number(this.world.buildings.statue),
        atk: Number(this.world.buildings.atk),
        def: Number(this.world.buildings.def),
      },
    }
  }
}
