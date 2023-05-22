import { Islander } from '../islander'
import { World, IslanderInfo, Resources, Buildings, Action } from '../types'

export class BalancedBot implements Islander {
  constructor() {}
  name: string = 'Balanced Bot'
  planHarvest(world: World, islander: IslanderInfo): Resources {
    return {
      wood: 40n,
      animal: 10n,
      fish: 10n,
      fruit: 20n,
      pearl: 10n,
      rock: 10n,
    }
  }
  planCommunityBuild(world: World, islander: IslanderInfo): Buildings {
    const wood = islander.resources.wood
    const rock = islander.resources.rock
    console.log(`wood: ${wood}, rock: ${rock}`)
    return {
      atk: BigInt(0), // rock // mai mee
      def: BigInt(0), // rock // mai mee
      harvest: {
        food: wood / BigInt(10), // wood
        rock: wood / BigInt(10), // wood
        wood: wood / BigInt(10), // wood
      },
      protection: wood / BigInt(10), // wood
      statue: BigInt(0), // rock
      survival: wood / BigInt(10), // wood
    }
  }
  planPersonalBuild(world: World, islander: IslanderInfo): Buildings {
    const wood = islander.resources.wood
    const rock = islander.resources.rock
    console.log(`wood: ${wood}, rock: ${rock}`)
    return {
      atk: (BigInt(5) * rock) / BigInt(10),
      def: (BigInt(5) * rock) / BigInt(10),
      harvest: {
        food: (BigInt(2) * wood) / BigInt(10),
        rock: (BigInt(2) * wood) / BigInt(10),
        wood: (BigInt(2) * wood) / BigInt(10),
      },
      protection: (BigInt(2) * wood) / BigInt(10),
      statue: BigInt(0),
      survival: (BigInt(2) * wood) / BigInt(10),
    }
  }
  planVisit(
    world: World,
    self: IslanderInfo,
    other: IslanderInfo,
    damageDealtIfAttack: bigint,
    damageTakenIfAttack: bigint,
  ): Action {
    return Action.Attack
  }
}

export default {
  BalancedBot,
}
