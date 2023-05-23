import { ethers } from 'ethers'
import { Islander } from '../islander'
import { Simulator } from '../simulator'
import { AggressiveBot, BalancedBot } from './bots'

const NO_BOTS = 8
const randomness = BigInt('1234567')
const simulator = new Simulator(
  [
    new AggressiveBot(),
    new AggressiveBot(),
    new BalancedBot(),
    new BalancedBot(),
    new BalancedBot(),
    new BalancedBot(),
    new BalancedBot(),
    new BalancedBot(),
  ],
  randomness,
)
simulator.step(1000)
console.log(simulator.islanders.map((e) => e.score))
