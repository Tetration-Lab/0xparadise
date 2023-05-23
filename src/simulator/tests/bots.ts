/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Islander } from '../islander'
import { World, IslanderInfo, Resources, Buildings, Action, emptyBuildings } from '../types'

export class BalancedBot implements Islander {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  name = 'Balanced Bot'
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
    return {
      atk: 0n, // rock // mai mee
      def: 0n, // rock // mai mee
      harvest: {
        food: wood / 10n, // wood
        rock: wood / 10n, // wood
        wood: wood / 10n, // wood
      },
      protection: wood / 10n, // wood
      statue: 0n, // rock
      survival: wood / 10n, // wood
    }
  }
  planPersonalBuild(world: World, islander: IslanderInfo): Buildings {
    const wood = islander.resources.wood
    const rock = islander.resources.rock
    return {
      atk: rock / 2n,
      def: rock / 2n,
      harvest: {
        food: wood / 5n,
        rock: wood / 5n,
        wood: wood / 5n,
      },
      protection: wood / 5n,
      statue: 0n,
      survival: wood / 5n,
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

export class AggressiveBot implements Islander {
  constructor() {}
  name: string = 'Aggressive Bot'
  planHarvest(world: World, islander: IslanderInfo): Resources {
    return {
      wood: 0n,
      animal: 25n,
      fish: 0n,
      fruit: 0n,
      pearl: 0n,
      rock: 75n,
    }
  }
  planCommunityBuild(world: World, islander: IslanderInfo): Buildings {
    return { ...emptyBuildings }
  }
  planPersonalBuild(world: World, islander: IslanderInfo): Buildings {
    const wood = islander.resources.wood
    const rock = islander.resources.rock
    return {
      atk: (7n * rock) / 10n,
      def: (3n * rock) / 10n,
      harvest: {
        food: 0n,
        rock: 0n,
        wood: 0n,
      },
      protection: 0n,
      statue: 0n,
      survival: 0n,
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
