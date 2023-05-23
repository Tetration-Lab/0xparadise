import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { nthNumber } from '../utils'
import { PlayerStatisticItem } from '../components/PlayerStatisticItem'

export const GameViewPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>0xparadise 🏝️</title>
        <meta name="description" content="0xparadise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen max-h-screen">
        <div className="relative flex w-full flex-col bg-gray-50">
          <div className="absolute z-10">
            <div className="z-10 pl-4 pt-4">
              <Link className="rounded-lg bg-black p-2 px-4 text-white" href="/">
                Quit
              </Link>
            </div>
          </div>
          <div className="min-win-full absolute right-0 z-10 flex w-96 justify-end">
            <div className="z-10 pr-4 pt-4">
              <div className="mb-2 font-semibold uppercase text-black">Community build stat</div>
              <div className=" game-text-shadow grid grid-cols-2 text-[#00FFA3]">
                <div className="">Max Health</div>
                <div className="text-right">+5</div>
              </div>
              <div className=" game-text-shadow grid grid-cols-2 text-[#FF9356]">
                <div className="">Disasters Damage</div>
                <div className="text-right">-10</div>
              </div>

              <div className=" game-text-shadow grid grid-cols-2 text-[#FFD600]">
                <div className="">Prestige</div>
                <div className="text-right">+500</div>
              </div>
            </div>
          </div>
          <div className="h-full bg-red-500">
            <div className="absolute z-0 flex h-full w-full justify-center  bg-[#98BBC5]">
              <div className="-z-10 h-full w-full bg-[url('/image/game-bg.png')] bg-cover bg-center bg-no-repeat lg:w-[80%]"></div>
            </div>
            <div className="absolute left-1/2 top-24 -translate-x-1/2">
              <div className="h-36 w-36 rounded-full border bg-[#4E4B4B] bg-opacity-60 text-white">
                <div className="z-20 flex h-full w-full items-center justify-center">
                  <Image className="pb-8" alt="stone" src="/image/stone.png" width={64} height={64} />
                </div>
                <div className="absolute bottom-0 flex w-full justify-center pb-4 text-sm">
                  <div className="flex flex-col">
                    <div>Stone</div>
                    <div>25/25</div>
                  </div>
                </div>
              </div>
            </div>
            {/* meat */}
            <div className="absolute left-[40%] top-[28rem] -translate-x-1/2">
              <div className="h-36 w-36 rounded-full border bg-[#4E4B4B] bg-opacity-60 text-white">
                <div className="flex h-full w-full items-center justify-center">
                  <Image className="pb-8" alt="meat" src="/image/meat.png" width={64} height={64} />
                </div>
                <div className="absolute bottom-0 flex w-full justify-center pb-4 text-sm">
                  <div className="flex flex-col">
                    <div className="text-center">Meat</div>
                    <div>25/25</div>
                  </div>
                </div>
              </div>
            </div>

            {/* fish */}
            <div className="absolute left-[60%] top-[28rem] -translate-x-1/2">
              <div className="h-36 w-36 rounded-full border bg-[#4E4B4B] bg-opacity-60 text-white">
                <div className="flex h-full w-full items-center justify-center">
                  <Image className="pb-8" alt="fish" src="/image/fish.png" width={64} height={64} />
                </div>
                <div className="absolute bottom-0 flex w-full justify-center pb-4 text-sm">
                  <div className="flex flex-col">
                    <div className="text-center">Fish</div>
                    <div>25/25</div>
                  </div>
                </div>
              </div>
            </div>

            {/* pearl */}
            <div className="absolute left-3/4 top-96 -translate-x-1/2">
              <div className="h-36 w-36 rounded-full border bg-[#4E4B4B] bg-opacity-60 text-white">
                <div className="flex h-full w-full items-center justify-center">
                  <Image className="pb-8" alt="perl" src="/image/perl.png" width={64} height={64} />
                </div>
                <div className="absolute bottom-0 flex w-full justify-center pb-4 text-sm">
                  <div className="flex flex-col">
                    <div>Pearl</div>
                    <div>25/25</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-1/4 top-96 -translate-x-1/2 ">
              <div className="h-36 w-36 rounded-full border bg-[#4E4B4B] bg-opacity-60 text-white">
                <div className="flex h-full w-full items-center justify-center">
                  <Image className="pb-8" alt="timber" src="/image/timber.png" width={64} height={64} />
                </div>
                <div className="absolute bottom-0 flex w-full justify-center pb-4 text-sm">
                  <div className="flex flex-col">
                    <div>Timber</div>
                    <div>25/25</div>
                  </div>
                </div>
              </div>
            </div>

            {/* fruit */}
            <div className="absolute left-3/4 top-48 -translate-x-1/2 ">
              <div className="h-36 w-36 rounded-full border bg-[#4E4B4B] bg-opacity-60 text-white">
                <div className="flex h-full w-full items-center justify-center">
                  <Image className="pb-8" alt="fruit" src="/image/fruit.png" width={64} height={64} />
                </div>
                <div className="absolute bottom-0 flex w-full justify-center pb-4 text-sm">
                  <div className="flex flex-col">
                    <div>Fruit</div>
                    <div>25/25</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-0 h-[30%] flex-shrink-0 bg-[#4E4B4B] bg-opacity-40 p-4">
            <div className="flex h-full flex-col">
              <div className="game-log-title game-title text-lg font-semibold uppercase">Game log</div>
              <div className="relative overflow-y-auto bg-[#1C1C1C] px-2 text-white">
                <ul className="my-2 space-y-2">
                  {/* mock array 100 item */}
                  <li className=" text-white underline">Action Log:</li>
                  {Array.from(Array(100).keys()).map((item) => (
                    <li className="py-2" key={item}>
                      {item} hello
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[36rem] bg-gray-100 bg-[url('/image/right-sidebar-bg.png')] bg-cover bg-center bg-no-repeat">
          <div className="flex h-full flex-col">
            <div className="p-4">
              <div className="rounded-md border border-black bg-[#4E4B4B] bg-opacity-70">
                <Image src={'/image/logo.png'} className="h-full" width={630} height={136} alt={'logo'} />
              </div>
            </div>
            <div className="px-4">
              <div className="item-center game-title flex  w-full justify-center rounded-md rounded-b-none border border-b-0 border-black bg-[#4E4B4B] bg-opacity-70 pt-2 text-lg font-semibold">
                MATCH STATISTICS
              </div>
            </div>
            <div className="mx-4 flex-1 overflow-auto rounded-md rounded-t-none border border-t-0 border-black bg-[#4E4B4B] bg-opacity-70 px-4">
              <div className="h-full">
                <ul className="flex flex-1 flex-col space-y-1 p-2">
                  {/* mock array 100 item */}
                  {Array.from(Array(8).keys()).map((item, index) => (
                    <li className="" key={item}>
                      <PlayerStatisticItem
                        key={index}
                        position={index + 1}
                        hp={100}
                        maxHp={100}
                        avatarImage={'/image/item/timber-item.png'}
                        tp={1900}
                        sp={100}
                        pp={1900}
                        sword={10}
                        armor={100}
                        pickaxe={100}
                        shovel={100}
                        bag={100}
                        timber={100}
                        fruit={10}
                        stone={100}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center p-2 px-3 pb-6 pt-4 text-sm text-white">
              <span className="mx-2 mr-6">
                <Image src={'/image/t3l-mini-logo.png'} width={34} height={34} alt={'logo'} />
              </span>
              <div>
                <div>Ⓒ 2023 Tetration Lab.</div>
                <div>All Rights Reserved.</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
