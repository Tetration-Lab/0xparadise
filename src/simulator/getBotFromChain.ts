import { Transaction } from '@ethereumjs/tx'
import { VM } from '@ethereumjs/vm'
import { hexToBytes } from 'ethereum-cryptography/utils'
import { ethers } from 'ethers'
import { INTERFACE } from './abi'
import { keyPair } from './evm'
import { Islander } from './islander'
import { IslanderInfo, World } from './types'

const solc = require('solc')

//export const getBotFromChain = async (vm: VM, provider: ethers.Provider, botAddress: string) => {
//const code = await provider.getCode(botAddress)
//return await getBotFromCode(vm, code)
//}
export const sourceCodeToBytesCode = (sourceCode: string) => {
  const header = `
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

enum Action {
    Attack,
    // Heal,
    Nothing
}

struct IslanderInfo {
    uint8 idx;
    uint32 hp;
    uint32 pearl;
    uint32 dayLived;
    ResourcesUnit resources;
    Buildings buildings;
    Resources[] harvestPlan;
    Buildings[] communityBuildingPlan;
    Buildings[] personalBuildingPlan;
    uint32[] kills;
    uint32[] attacks;
    uint32[] attacked;
    uint32[] heals;
}

struct ResourcesUnit {
    uint32 rock;
    uint32 wood;
    uint32 food;
}

struct Resources {
    uint32 rock;
    uint32 wood;
    uint32 fruit;
    uint32 animal;
    uint32 fish;
    uint32 pearl;
}

struct Buildings {
    ResourcesUnit harvest; // Wood
    uint32 survival; // Wood
    uint32 protection; // Wood
    uint32 statue; // Rock
    uint32 atk; // Rock
    uint32 def; // Rock
}

struct Resource {
    uint32 supply; // just suppy
    // uint32 baseHarvest; // base harvest per time unit spend
    uint32 prevHarvest; // harvest last turn
    uint32 prevRegen; // regen last turn
}

struct World {
    Buildings buildings;
    Resource rock;
    Resource wood;
    Resource fruit;
    Resource animal;
    Resource fish;
    Resource pearl;
}

interface IIslander {
    function planHarvest(
        World memory w,
        IslanderInfo memory self
    ) external pure returns (Resources memory);

    function planCommunityBuild(
        World memory w,
        IslanderInfo memory self
    ) external pure returns (Buildings memory);

    function planPersonalBuild(
        World memory w,
        IslanderInfo memory self
    ) external pure returns (Buildings memory);

    function planVisit(
        World memory w,
        IslanderInfo calldata self,
        IslanderInfo calldata other,
        uint32 damageDealtIfAttack,
        uint32 damageTakenIfAttack
    ) external pure returns (Action);
}

  `

  const output = JSON.parse(
    solc.compile(
      JSON.stringify({
        language: 'Solidity',
        sources: {
          'Bot.sol': {
            content: header + sourceCode,
          },
          // If more contracts were to be compiled, they should have their own entries here
        },
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          evmVersion: 'paris',
          outputSelection: {
            '*': {
              '*': ['*'],
            },
          },
        },
      }),
    ),
  )

  let compilationFailed = false

  if (output.errors) {
    for (const error of output.errors) {
      if (error.severity === 'error') {
        console.error(error.formattedMessage)
        compilationFailed = true
      } else {
        console.warn(error.formattedMessage)
      }
    }
  }

  if (compilationFailed) {
    return undefined
  }

  return `0x${output.contracts['Bot.sol'].Bot.evm.bytecode.object}`
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
