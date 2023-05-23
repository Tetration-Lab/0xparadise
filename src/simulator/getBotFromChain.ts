import { Transaction } from '@ethereumjs/tx'
import { VM } from '@ethereumjs/vm'
import { hexToBytes } from 'ethereum-cryptography/utils'
import { ethers } from 'ethers'
import { INTERFACE } from './abi'
import { keyPair } from './evm'
import { Islander } from './islander'
import { IslanderInfo, World } from './types'

export const getBotFromChain = async (vm: VM, provider: ethers.Provider, botAddress: string) => {
  const code = await provider.getCode(botAddress)
  return await getBotFromCode(vm, code)
}

export const getBotFromCode = async (vm: VM, code: string) => {
  const tx = await vm.runTx({
    tx: Transaction.fromTxData({
      data: code,
      nonce: (await vm.stateManager.getAccount(keyPair.address).then((e) => e.nonce)) ?? 0n,
      gasLimit: 20000000,
      gasPrice: 7,
    }).sign(keyPair.privateKeyBytes),
  })
  const address = tx.createdAddress!

  const islander: Islander = {
    name: 'Code Islander',
    planHarvest: async (world: World, islander: IslanderInfo) => {
      const harvestTxData = INTERFACE.encodeFunctionData('planHarvest', [world, islander])
      const result = await vm.evm.runCall({
        to: address,
        caller: keyPair.address,
        origin: keyPair.address,
        data: Buffer.from(hexToBytes(harvestTxData.slice(2))),
      })
      const harvestResult = INTERFACE.decodeFunctionResult('planHarvest', result.execResult.returnValue)

      return {
        rock: harvestResult[0][0],
        wood: harvestResult[0][1],
        fruit: harvestResult[0][2],
        animal: harvestResult[0][3],
        fish: harvestResult[0][4],
        pearl: harvestResult[0][5],
      }
    },
    planCommunityBuild: async (world: World, islander: IslanderInfo) => {
      const txData = INTERFACE.encodeFunctionData('planCommunityBuild', [world, islander])
      const result = await vm.evm.runCall({
        to: address,
        caller: keyPair.address,
        origin: keyPair.address,
        data: Buffer.from(hexToBytes(txData.slice(2))),
      })
      const decodedResult = INTERFACE.decodeFunctionResult('planCommunityBuild', result.execResult.returnValue)

      return {
        harvest: {
          rock: decodedResult[0][0][0],
          wood: decodedResult[0][0][1],
          food: decodedResult[0][0][2],
        },
        survival: decodedResult[0][1],
        protection: decodedResult[0][2],
        statue: decodedResult[0][3],
        atk: decodedResult[0][4],
        def: decodedResult[0][5],
      }
    },
    planPersonalBuild: async (world: World, islander: IslanderInfo) => {
      const txData = INTERFACE.encodeFunctionData('planPersonalBuild', [world, islander])
      const result = await vm.evm.runCall({
        to: address,
        caller: keyPair.address,
        origin: keyPair.address,
        data: Buffer.from(hexToBytes(txData.slice(2))),
      })
      const decodedResult = INTERFACE.decodeFunctionResult('planPersonalBuild', result.execResult.returnValue)

      return {
        harvest: {
          rock: decodedResult[0][0][0],
          wood: decodedResult[0][0][1],
          food: decodedResult[0][0][2],
        },
        survival: decodedResult[0][1],
        protection: decodedResult[0][2],
        statue: decodedResult[0][3],
        atk: decodedResult[0][4],
        def: decodedResult[0][5],
      }
    },
    planVisit: async (
      world: World,
      self: IslanderInfo,
      other: IslanderInfo,
      damageDealtIfAttack: bigint,
      damageTakenIfAttack: bigint,
    ) => {
      const txData = INTERFACE.encodeFunctionData('planVisit', [
        world,
        self,
        other,
        damageDealtIfAttack,
        damageTakenIfAttack,
      ])
      const result = await vm.evm.runCall({
        to: address,
        caller: keyPair.address,
        origin: keyPair.address,
        data: Buffer.from(hexToBytes(txData.slice(2))),
      })
      const decodedResult = Number(INTERFACE.decodeFunctionResult('planVisit', result.execResult.returnValue)[0])
      return decodedResult
    },
  }

  return islander
}
