import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const emojiList = ['🙅‍♂️', '🏃‍♂️', '👩‍🦰']
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
          <div className="h-full">
            <div className="absolute z-0 flex h-full w-full justify-center  bg-[#98BBC5]">
              <div className="h-full w-full bg-[url('/image/game-bg.png')] bg-cover bg-center bg-no-repeat lg:w-[80%]"></div>
            </div>
            <div className="absolute left-1/2 top-24 -translate-x-1/2">
              <div className="h-36 w-36 rounded-full border bg-[#4E4B4B] bg-opacity-60 text-white">
                <div className="flex h-full w-full items-center justify-center">
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
                    <div>Meat</div>
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
                    <div>Fish</div>
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
          <div className="z-10 h-[30%] flex-shrink-0 bg-[#4E4B4B] bg-opacity-40  p-4">
            <div className="flex h-full flex-col">
              <div className="game-log-title text-lg font-semibold uppercase">Game log</div>
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
        <div className="w-[30rem] bg-gray-100 bg-[url('/image/right-sidebar-bg.png')] bg-cover bg-center bg-no-repeat">
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
                  {Array.from(Array(100).keys()).map((item) => (
                    <li className="" key={item}>
                      {/* random emoji */}
                      <div className="flex w-full flex-shrink-0 bg-black bg-opacity-50">
                        <div className="relative h-[86px] w-16 flex-shrink-0 bg-red-500">
                          <div className="absolute">
                            <Image src={'/image/stat-avatar.png'} width={64} height={86} alt="avatar" />
                          </div>
                          <div className="absolute bottom-0 w-full bg-black bg-opacity-80">
                            <div className="text-xs text-white">0xANYA</div>
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="flex w-full text-sm text-white">
                            <div className="w-1/2 flex-shrink-0">
                              <div>1st</div>
                              <div>HP: 10/10</div>
                            </div>
                            <div className="w-1/2 flex-shrink-0">
                              <div>TP: 1,900</div>
                              <div className="ml-2 text-xs">
                                <div>PP: 1,900</div>
                                <div>PP: 1,900</div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full">
                            <div className="flex w-full justify-between overflow-x-auto">
                              <div className="h-8 w-8 bg-blue-500">1</div>
                              <div className="h-8 w-8 bg-blue-500">1</div>
                              <div className="h-8 w-8 bg-blue-500">1</div>
                              <div className="h-8 w-8 bg-blue-500">1</div>
                              <div className="h-8 w-8 bg-blue-500">1</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center p-2 px-3 text-sm text-white">
              <span className="mx-2">
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
