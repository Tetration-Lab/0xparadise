// To be used
export interface Day {
  world: World
  islanders: IslanderInfo[]
}

export interface Round {
  id: string
  days: Day[]
  islanderAddresses: string[]
}

export enum Action {
  Attack,
  // Heal,
  Nothing,
}

export interface IslanderInfo {
  idx: number
  hp: bigint
  pearl: bigint
  dayLived: number
  resources: ResourcesUnit
  buildings: Buildings
  harvestPlan: Resources[]
  communityBuildingPlan: Buildings[]
  personalBuildingPlan: Buildings[]
  kills: bigint[]
  attacks: bigint[]
  attacked: bigint[]
  heals: bigint[]
}

export interface ResourcesUnit {
  rock: bigint
  wood: bigint
  food: bigint
}

export interface Resources {
  rock: bigint
  wood: bigint
  fruit: bigint
  animal: bigint
  fish: bigint
  pearl: bigint
}

export interface Buildings {
  harvest: ResourcesUnit // Wood
  survival: bigint // Wood
  protection: bigint // Wood
  statue: bigint // Rock
  atk: bigint // Rock
  def: bigint // Rock
}

export interface Resource {
  supply: bigint // just suppy
  // uint32 baseHarvest; // base harvest per time unit spend
  prevHarvest: bigint // harvest last turn
  prevRegen: bigint // regen last turn
}

export interface World {
  buildings: Buildings
  rock: Resource
  wood: Resource
  fruit: Resource
  animal: Resource
  fish: Resource
  pearl: Resource
}

export const emptyResources: Resources = {
  rock: BigInt(0),
  wood: BigInt(0),
  fruit: BigInt(0),
  animal: BigInt(0),
  fish: BigInt(0),
  pearl: BigInt(0),
}

export const emptyBuildings: Buildings = {
  harvest: {
    rock: BigInt(0),
    wood: BigInt(0),
    food: BigInt(0),
  },
  survival: BigInt(0),
  protection: BigInt(0),
  statue: BigInt(0),
  atk: BigInt(0),
  def: BigInt(0),
}

export const emptyResourcesUnit: ResourcesUnit = {
  rock: BigInt(0),
  wood: BigInt(0),
  food: BigInt(0),
}
