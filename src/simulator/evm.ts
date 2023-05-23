import { Account, Address } from '@ethereumjs/util'
import { VM } from '@ethereumjs/vm'
import { hexToBytes } from 'ethereum-cryptography/utils'

export const keyPair = {
  secretKey: '0x3cd7232cd6f3fc66a57a6bedc1a8ed6c228fff0a327e169c2bcc5e869ed49511',
  privateKeyBytes: Buffer.from(hexToBytes('3cd7232cd6f3fc66a57a6bedc1a8ed6c228fff0a327e169c2bcc5e869ed49511')),
  publicKey:
    '0x0406cc661590d48ee972944b35ad13ff03c7876eae3fd191e8a2f77311b0a3c6613407b5005e63d7d8d76b89d5f900cde691497688bb281e07a5052ff61edebdc0',
  address: Address.fromPrivateKey(
    Buffer.from(hexToBytes('3cd7232cd6f3fc66a57a6bedc1a8ed6c228fff0a327e169c2bcc5e869ed49511')),
  ),
}

export const instantiateEVM = async () => {
  const vm = await VM.create({})
  await vm.stateManager.putAccount(
    keyPair.address,
    Account.fromAccountData({ nonce: 0, balance: 100000n * 10n ** 18n }),
  )
  return vm
}
