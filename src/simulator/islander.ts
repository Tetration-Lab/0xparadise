import { Action, Buildings, IslanderInfo, Resources, World } from './types'

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
