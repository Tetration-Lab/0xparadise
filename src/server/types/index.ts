enum Phase {
  HARVEST = 'HARVEST',
  BUILD_COMMUNITY = 'BUILD_COMMUNITY',
  BUILD_PERSONAL = 'BUILD_PERSONAL',
  VISIT = 'VISIT',
  WORLD_UPDATE = 'WORLD_UPDATE',
}

export interface PhaseResource {
  phase: Phase
  seq: number // may be Havest will be 1, Build = 2
  user: ILander
  name: string // fish, wood, fruit
  amount: number
}

export interface ILander {
  id: string
  wallet: string
  botName: string
}

export interface Round {
  id: string
  phaseResources: PhaseResource[]
  createdDate: Date // for timestamp
}
