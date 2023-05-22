import { Constants } from './constants'
import { sqrt } from './utils'

// calculate building bonus pct in sqrt scale
export const building = (resource: bigint, divider: bigint) => {
  return sqrt((resource * Constants.ONE) / divider) * Constants.SQRT_ONE
}

// calculate personal building bonus pct in sqrt scale
export const personalBuilding = (resource: bigint) => {
  return building(resource, Constants.PERSONAL_BUILDING_DIVIDER)
}

// calculate community building bonus pct in sqrt scale
export const communityBuilding = (resource: bigint) => {
  return building(resource, Constants.COMMUNITY_BUILDING_DIVIDER)
}

// Bonus attack from individual building
export const individualAttackBonus = (resource: bigint) => {
  return (personalBuilding(resource) * Constants.ATTACK_BUILDING_MULTIPLIER) / Constants.ONE
}

// Bonus defense from individual building
export const individualDefenseBonus = (resource: bigint) => {
  return (personalBuilding(resource) * Constants.DEFENSE_BUILDING_MULTIPLIER) / Constants.ONE
}

// Bonus function for harvest by individual building, returns bonus action point for that harvest
export const individualHarvestBonus = (resource: bigint) => {
  return (personalBuilding(resource) * Constants.HARVEST_BUILDING_MULTIPLIER) / Constants.ONE
}

// Bonus function for harvest by community building, returns bonus action point for that harvest
export const communityHarvestBonus = (resource: bigint) => {
  return (communityBuilding(resource) * Constants.HARVEST_BUILDING_MULTIPLIER) / Constants.ONE
}

export const individualSurvivalBonus = (resource: bigint) => {
  return (personalBuilding(resource) * Constants.SURVIVAL_BUILDING_MULTIPLIER) / Constants.ONE
}

export const communitySurvivalBonus = (resource: bigint) => {
  return (communityBuilding(resource) * Constants.SURVIVAL_BUILDING_MULTIPLIER) / Constants.ONE
}
