export interface UserWebHookReq {
  data: Data
  object: string
  type: string
}

export interface Data {
  birthday: string
  created_at: number
  email_addresses: EmailAddress[]
  external_accounts: any[]
  external_id: string
  first_name: string
  gender: string
  id: string
  last_name: string
  last_sign_in_at: number
  object: string
  password_enabled: boolean
  phone_numbers: any[]
  primary_email_address_id: string
  primary_phone_number_id: null
  primary_web3_wallet_id: null | string
  private_metadata: Metadata
  profile_image_url: string
  public_metadata: Metadata
  two_factor_enabled: boolean
  unsafe_metadata: Metadata
  updated_at: number
  username: null
  web3_wallets: Web3Wallet[]
}

export interface EmailAddress {
  email_address: string
  id: string
  linked_to: any[]
  object: string
  verification: Verification
}

export interface Verification {
  status: string
  strategy: string
}

type Metadata = Record<string, string> | unknown | null

export interface Web3Wallet {
  id: string
  object: string
  verification: Verification
  web3_wallet: string
}

export interface Verification {
  attempts: number
  expire_at: number
  nonce: string
  status: string
  strategy: string
}
