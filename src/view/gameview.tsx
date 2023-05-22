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
            <div className="absolute z-0 flex h-full w-full justify-center  bg-[#9FBAC4]">
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
              <div className="flex items-center justify-center"></div>
            </div>
            <div className="absolute left-3/4 top-96 -translate-x-1/2">
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 bg-gray-100 bg-[url('/image/right-sidebar-bg.png')] bg-cover bg-center bg-no-repeat">
          <div className="flex h-full flex-col">
            <div className="p-4">
              <div className="rounded-md border border-black bg-[#4E4B4B] bg-opacity-70">
                <Image src={'/image/logo.png'} className="h-full" width={630} height={136} alt={'logo'} />
              </div>
            </div>
            <div className="item-center game-title flex w-full justify-center text-lg font-semibold">
              MATCH STATISTICS
            </div>
            <div className="overflow-auto p-4">
              <div className="rounded-md border border-black bg-[#4E4B4B] bg-opacity-70 p-2  px-1">
                <ul className="mt-2 flex flex-1 flex-col space-y-2 px-2">
                  {/* mock array 100 item */}
                  {Array.from(Array(100).keys()).map((item) => (
                    <li className="bg-white py-2" key={item}>
                      {/* random emoji */}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center p-2 px-6 text-sm text-white">
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
