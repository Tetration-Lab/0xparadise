import { ethers } from 'ethers'
import { instantiateEVM } from '../evm'
import { getBotFromCode } from '../getBotFromChain'
import { Islander } from '../islander'
import { Simulator } from '../simulator'
import { emptyIslanderInfo, emptyWorld } from '../types'
import { AggressiveBot, BalancedBot } from './bots'

//const NO_BOTS = 8
//const randomness = BigInt('1234567')
//const simulator = new Simulator(
//[
//new AggressiveBot(),
//new AggressiveBot(),
//new BalancedBot(),
//new BalancedBot(),
//new BalancedBot(),
//new BalancedBot(),
//new BalancedBot(),
//new BalancedBot(),
//],
//randomness,
//)
//simulator.step(1000)
//console.log(simulator.islanders.map((e) => e.score))
;(async () => {
  const vm = await instantiateEVM()
  const bot = await getBotFromCode(vm)

  const NO_BOTS = 8
  const randomness = BigInt('1234567')
  const simulator = new Simulator([bot, bot, bot, bot, bot, bot, bot, bot], randomness)
  await simulator.step(1000)
  console.log(simulator.islanders.map((e) => e.score))
})()
