import { type Action, type Buildings, type IslanderInfo, type Resources, type World } from './types'

export interface Islander {
  name: string
  planHarvest(world: World, islander: IslanderInfo): Promise<Resources>
  planCommunityBuild(world: World, islander: IslanderInfo): Promise<Buildings>
  planPersonalBuild(world: World, islander: IslanderInfo): Promise<Buildings>
  planVisit(
    world: World,
    self: IslanderInfo,
    other: IslanderInfo,
    damageDealtIfAttack: bigint,
    damageTakenIfAttack: bigint,
  ): Promise<Action>
}
