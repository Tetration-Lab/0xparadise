// simulate lotka volterra equation aka predator prey model
// https://en.m.wikipedia.org/wiki/Lotka%E2%80%93Volterra_equations
// reuturn dX, dY
//function lotkaVolterra(
//uint x, // prey
//uint y, // predator
//uint alpha, // prey growth rate
//uint beta, // predation rate
//uint gramma, // predator growth rate
//uint delta // predator decay rate
//) public pure returns (int, int) {
//int dx = int((alpha * x) / Constants.ONE) -
//int((((beta * x) / Constants.ONE) * y) / Constants.ONE);
//int dy = int((((gramma * x) / Constants.ONE) * y) / Constants.ONE) -
//int((delta * y) / Constants.ONE);
//return (dx, dy);
//}

import { communityHarvestBonus, individualHarvestBonus } from './bonus'
import { Constants } from './constants'
import { Resources, ResourcesUnit } from './types'

export const min = (x: bigint, y: bigint) => {
  return x < y ? x : y
}

export const max = (x: bigint, y: bigint) => {
  return x > y ? x : y
}

export const sqrt = (value: bigint) => {
  if (value < 0n) {
    throw 'square root of negative numbers is not supported'
  }

  if (value < 2n) {
    return value
  }

  const newtonIteration = (n: bigint, x0: bigint): bigint => {
    const x1 = (n / x0 + x0) >> 1n
    if (x0 === x1 || x0 === x1 - 1n) {
      return x0
    }
    return newtonIteration(n, x1)
  }

  return newtonIteration(value, 1n)
}

export const lotkaVolterra = (x: bigint, y: bigint, aX: bigint, aY: bigint) => {
  return (aX * x) / Constants.ONE - (aY * y) / Constants.ONE
}

// simulate logistic growth. reuturn dX
export const logisticGrowth = (
  x: bigint, // population
  r: bigint, // growth rate
  k: bigint, // carrying capacity
) => {
  return ((r * x) / Constants.ONE) * ((k - x) / k)
}

// simulate production growth with carrying capacity
// similar to logistic growth but with different formula
// reuturn dX
export const productionGrowth = (
  x: bigint, // population producer
  y: bigint, // population target
  r: bigint, // growth rate
  k: bigint, // carrying capacity
) => {
  return (((r * x) / Constants.ONE) * (k - y)) / k
}

// simmulate player battle damage
// return attackerHPLoss, defenderDamage
export const battleDamage = (
  attackerAtk: bigint, // attacker atk
  attackerDef: bigint, // attacker def
  defenderAtk: bigint, // defender atk
  defenderDef: bigint, // defender def
) => {
  const attackerHPLoss =
    defenderAtk > attackerDef + Constants.BASE_DAMAGE ? defenderAtk - attackerDef : Constants.BASE_DAMAGE
  const defenderHPLoss =
    (attackerAtk * Constants.INITIATIVE_BONUS_PCT) / Constants.ONE > defenderDef + Constants.BASE_DAMAGE
      ? (attackerAtk * Constants.INITIATIVE_BONUS_PCT) / Constants.ONE - defenderDef
      : Constants.BASE_DAMAGE
  return [attackerHPLoss, defenderHPLoss] as const
}

//// simulate disaster. if hit return damage in range. else return 0. cal prob by hash of block
//function disasterFunction(
//uint damageMin,
//uint damageMax,
//uint hitProb,
//uint randomness
//) public pure returns (bool, uint) {
//if (probHit(hitProb, randomness + 420)) {
//return (
//true,
//((randomness + 1337) % (damageMax - damageMin)) + damageMin
//);
//}
//return (false, 0);
//}

//// distribute damage to player. similar to battle damage but with different formula
//function distributeDamage(
//uint communityDef, // community def,
//uint personalDef, // personal def
//uint damage // damage to distribute
//) public pure returns (uint) {
//uint totalDef = communityDef + personalDef;
//uint finalDamage = damage > totalDef
//? damage - totalDef
//: Constants.BASE_DAMAGE;
//return finalDamage;
//}

// harvest reusult per work unit
// if low resource compare to demand, will reduce harvest and harvest per share
// if supply higher than EFFECTIVE_MINING_RATIO x totalHarvastPoint will get full harvest.
// otherwise will get harvest per share pernalty
export const harvestPerShare = (supply: bigint, totalHarvestPoint: bigint) => {
  return min((supply * Constants.ONE) / (totalHarvestPoint * Constants.EFFECTIVE_MINING_RATIO), Constants.ONE)
}

export const probHit = (prob: bigint, randomness: bigint) => {
  return randomness % BigInt(100) < BigInt(prob)
}

// calculate normalized harvest action points
export const normalizeWithBonus = (plan: Resources, individualBonus: ResourcesUnit, communityBonus: ResourcesUnit) => {
  var base = BigInt(0)

  base += plan.rock
  base += plan.wood
  base += plan.fruit
  base += plan.animal
  base += plan.fish
  base += plan.pearl

  const rock =
    (plan.rock *
      Constants.ACTION_POINT *
      (Constants.ONE_HUNDRED +
        individualHarvestBonus(individualBonus.rock) +
        communityHarvestBonus(communityBonus.rock))) /
    Constants.ONE_HUNDRED
  const wood =
    (plan.wood *
      Constants.ACTION_POINT *
      (Constants.ONE_HUNDRED +
        individualHarvestBonus(individualBonus.wood) +
        communityHarvestBonus(communityBonus.wood))) /
    Constants.ONE_HUNDRED
  const fruit =
    (plan.fruit *
      Constants.ACTION_POINT *
      (Constants.ONE_HUNDRED +
        individualHarvestBonus(individualBonus.food) +
        communityHarvestBonus(communityBonus.food))) /
    Constants.ONE_HUNDRED
  const animal =
    (plan.animal *
      Constants.ACTION_POINT *
      (Constants.ONE_HUNDRED +
        individualHarvestBonus(individualBonus.food) +
        communityHarvestBonus(communityBonus.food))) /
    Constants.ONE_HUNDRED
  const fish =
    (plan.fish *
      Constants.ACTION_POINT *
      (Constants.ONE_HUNDRED +
        individualHarvestBonus(individualBonus.food) +
        communityHarvestBonus(communityBonus.food))) /
    Constants.ONE_HUNDRED
  const pearl = plan.pearl * Constants.ACTION_POINT

  return {
    rock: rock / base,
    wood: wood / base,
    fruit: fruit / base,
    animal: animal / base,
    fish: fish / base,
    pearl: pearl / base,
  }
}

// calculate how many unit of food able to eat
export const calculateFoodToEat = (maxHp: bigint) => {
  // linear
  return min(
    Constants.MAX_FOOD_UNIT_CONSUME,
    Constants.MIN_FOOD_UNIT_CONSUME + (maxHp - Constants.INITIAL_HP) * Constants.FOOD_CONSUME_PER_MAX_HEALTH_SLOPE,
  )
}

// calculate disaster damage
export const disasterDamage = (day: number) => {
  return Constants.DISASTER_BASE_DAMAGE * (BigInt(day) / Constants.DISASTER_DAY_DAMAGE_STEP)
}

// calculate whether disaster hit or not and damage
export const isDisasterHit = (day: number, randomness: bigint) => {
  const hitChance = Constants.DISASTER_BASE_CHANCE + BigInt(day) * Constants.DISASTER_CHANCE_PER_DAY_SLOPE
  return [BigInt(randomness) % BigInt(Constants.ONE_HUNDRED) < BigInt(hitChance), disasterDamage(day)] as const
}

// calculate tree regen using logistic growth from tree and fruit
export const calculateTreeRegen = (currentTree: bigint, currentFruit: bigint) => {
  const regen =
    logisticGrowth(currentTree, Constants.TREE_GROWTH_RATE_R_T, Constants.TREE_CAPACITY_K_T) +
    logisticGrowth(currentFruit, Constants.TREE_GROWTH_RATE_FROM_FRUIT_R_F, Constants.TREE_CAPACITY_FROM_FRUIT_K_F)
  if (regen > BigInt(0)) {
    return regen
  } else {
    return BigInt(0)
  }
}

// calculate fruit regen using lotkavolterra between tree population and animal population
export const calculateFruitRegen = (currentTree: bigint, currentFruit: bigint, currentAnimal: bigint) => {
  const regen =
    lotkaVolterra(
      currentTree,
      currentAnimal,
      Constants.FRUIT_REGEN_RATE_LAMBDA,
      Constants.ANIMAL_FRUIT_CONSUMPTION_RATE_ALPHA,
    ) + logisticGrowth(currentFruit, Constants.TREE_GROWTH_RATE_FROM_FRUIT_R_F, Constants.TREE_CAPACITY_FROM_FRUIT_K_F)
  if (regen > BigInt(0)) {
    return regen
  } else {
    return BigInt(0)
  }
}

// calculate animal regen using lotkavolterra between fruit population and animal population
export const calculateAnimalRegen = (currentFruit: bigint, currentAnimal: bigint) => {
  const regen = lotkaVolterra(
    currentFruit,
    currentAnimal,
    Constants.ANIMAL_REPRODUCTION_RATE_BETA,
    Constants.ANIMAL_DEATH_RATE_GAMMA,
  )
  if (regen > BigInt(0)) {
    return regen
  } else {
    return BigInt(0)
  }
}

// calculate fish regen using logistic growth from fish
export const calculateFishRegen = (currentFish: bigint) => {
  const regen = logisticGrowth(currentFish, Constants.FISH_GROWTH_RATE_R_V, Constants.FISH_CAPACITY_K_V)
  if (regen > BigInt(0)) {
    return regen
  } else {
    return BigInt(0)
  }
}
