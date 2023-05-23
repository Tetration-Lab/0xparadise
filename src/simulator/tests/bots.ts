import { Islander } from '../islander'
import { World, IslanderInfo, Resources, Buildings, Action, emptyBuildings } from '../types'

export class BalancedBot implements Islander {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  name = 'Balanced Bot'
  async planHarvest(world: World, islander: IslanderInfo) {
    return {
      wood: 40n,
      animal: 10n,
      fish: 10n,
      fruit: 20n,
      pearl: 10n,
      rock: 10n,
    }
  }
  async planCommunityBuild(world: World, islander: IslanderInfo) {
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
  async planPersonalBuild(world: World, islander: IslanderInfo) {
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
  async planVisit(
    world: World,
    self: IslanderInfo,
    other: IslanderInfo,
    damageDealtIfAttack: bigint,
    damageTakenIfAttack: bigint,
  ) {
    return Action.Attack
  }
}

export class AggressiveBot implements Islander {
  constructor() {}
  name: string = 'Aggressive Bot'
  async planHarvest(world: World, islander: IslanderInfo) {
    return {
      wood: 0n,
      animal: 25n,
      fish: 0n,
      fruit: 0n,
      pearl: 0n,
      rock: 75n,
    }
  }
  async planCommunityBuild(world: World, islander: IslanderInfo) {
    return { ...emptyBuildings }
  }
  async planPersonalBuild(world: World, islander: IslanderInfo) {
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
  async planVisit(
    world: World,
    self: IslanderInfo,
    other: IslanderInfo,
    damageDealtIfAttack: bigint,
    damageTakenIfAttack: bigint,
  ) {
    return Action.Attack
  }
}
