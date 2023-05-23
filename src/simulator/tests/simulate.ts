/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { ethers } from 'ethers'
import { instantiateEVM } from '../evm'
import { getBotFromCode, sourceCodeToBytesCode } from '../getBotFromChain'
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
const bytesCode = sourceCodeToBytesCode(`
contract Bot is IIslander {
function planHarvest(
World memory,
IslanderInfo memory
) external pure override returns (Resources memory) {
// spend time equally on all resources
return Resources(10, 10, 10, 10, 10, 10);
}

function planCommunityBuild(
World memory,
IslanderInfo memory self
) external pure override returns (Buildings memory) {
uint32 woodPerStuff = self.resources.wood / 10;
uint32 rockPerStuff = self.resources.rock / 6;
return
Buildings(
ResourcesUnit(woodPerStuff, woodPerStuff, woodPerStuff),
woodPerStuff,
woodPerStuff,
rockPerStuff,
rockPerStuff,
rockPerStuff
);
}

function planPersonalBuild(
World memory,
IslanderInfo memory self
) external pure override returns (Buildings memory) {
uint32 woodPerStuff = self.resources.wood / 5;
uint32 rockPerStuff = self.resources.rock / 3;
return
Buildings(
ResourcesUnit(woodPerStuff, woodPerStuff, woodPerStuff),
woodPerStuff,
woodPerStuff,
rockPerStuff,
rockPerStuff,
rockPerStuff
);
}

function planVisit(
World memory,
IslanderInfo calldata,
IslanderInfo calldata,
uint32,
uint32
) external pure override returns (Action) {
// never attack
return Action.Nothing;
}
}
`)
//console.log(bytesCode)
;(async () => {
  const vm = await instantiateEVM()
  const bot = await getBotFromCode(vm, bytesCode!)
  const plan = await bot.planHarvest({ ...emptyWorld }, { ...emptyIslanderInfo })
  console.log(plan)
  //const NO_BOTS = 8
  //const randomness = BigInt('1234567')
  //const simulator = new Simulator([bot, bot, bot, bot, bot, bot, bot, bot], randomness)
  //await simulator.step(1000)
  //console.log(simulator.islanders.map((e) => e.score))
})()
