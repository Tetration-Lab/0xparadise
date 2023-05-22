import { type Action, type Buildings, type IslanderInfo, type Resources, type World } from './types'

export interface Islander {
  name: string
  planHarvest(world: World, islander: IslanderInfo): Resources
  planCommunityBuild(world: World, islander: IslanderInfo): Buildings
  planPersonalBuild(world: World, islander: IslanderInfo): Buildings
  planVisit(
    world: World,
    self: IslanderInfo,
    other: IslanderInfo,
    damageDealtIfAttack: bigint,
    damageTakenIfAttack: bigint,
  ): Action
}
