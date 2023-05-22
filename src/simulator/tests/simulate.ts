import { ethers } from 'ethers'
import { Islander } from '../islander'
import { Simulator } from '../simulator'
import { BalancedBot } from './bots'

const NO_BOTS = 8
const randomness = BigInt('1234567')
const simulator = new Simulator(
  [...Array(NO_BOTS)].map(() => new BalancedBot()),
  randomness,
)
var i = 0
while (i < 2) {
  simulator.step(1)
  i++
}
