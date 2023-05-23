import { Constants } from './constants'

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
  rock: 0n,
  wood: 0n,
  fruit: 0n,
  animal: 0n,
  fish: 0n,
  pearl: 0n,
}

export const emptyBuildings: Buildings = {
  harvest: {
    rock: 0n,
    wood: 0n,
    food: 0n,
  },
  survival: 0n,
  protection: 0n,
  statue: 0n,
  atk: 0n,
  def: 0n,
}

export const emptyResourcesUnit: ResourcesUnit = {
  rock: 0n,
  wood: 0n,
  food: 0n,
}

export const emptyIslanderInfo: IslanderInfo = {
  idx: 0,
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
}

export const emptyWorld: World = {
  buildings: { ...emptyBuildings },
  rock: {
    supply: Constants.INITIAL_ROCK,
    prevHarvest: 0n,
    prevRegen: 0n,
  },
  wood: {
    supply: Constants.INITIAL_TREE,
    prevHarvest: 0n,
    prevRegen: 0n,
  },
  fruit: {
    supply: Constants.INITIAL_FRUIT,
    prevHarvest: 0n,
    prevRegen: 0n,
  },
  animal: {
    supply: Constants.INITIAL_ANIMAL,
    prevHarvest: 0n,
    prevRegen: 0n,
  },
  fish: {
    supply: Constants.INITIAL_FISH,
    prevHarvest: 0n,
    prevRegen: 0n,
  },
  pearl: {
    supply: Constants.INITIAL_PEARL,
    prevHarvest: 0n,
    prevRegen: 0n,
  },
}
