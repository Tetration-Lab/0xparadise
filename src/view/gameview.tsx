import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

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
          <div className="h-full">
            <div className="pl-4 pt-4">
              <Link className="rounded-lg border border-gray-700 bg-white p-2 px-4" href="/">
                Goto home
              </Link>
            </div>
            <div className="absolute left-1/2 top-24 -translate-x-1/2">
              <div className="h-36 w-36 rounded-full border bg-white"></div>
              <div className="flex items-center justify-center">World Resource</div>
            </div>
            <div className="absolute left-3/4 top-96 -translate-x-1/2">
              <div className="h-36 w-36 rounded-full border bg-white"></div>
              <div className="flex items-center justify-center">Community Building</div>
            </div>
            <div className="absolute left-1/4 top-96 -translate-x-1/2">
              <div className="h-36 w-36 rounded-full border bg-white"></div>
              <div className="flex items-center justify-center">Personal Building</div>
            </div>
          </div>
          <div className="h-[30%] flex-shrink-0 overflow-y-auto bg-gray-200">
            <div className="px-2">
              <ul className="my-2 space-y-2">
                {/* mock array 100 item */}
                {Array.from(Array(100).keys()).map((item) => (
                  <li className="bg-white py-2" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-64 bg-gray-100">
          <div className="flex h-full flex-col">
            <div className="bg-white py-3">Citilizen Live</div>
            <ul className="mt-2 flex flex-1 flex-col space-y-2 overflow-auto  px-2">
              {/* mock array 100 item */}
              {Array.from(Array(100).keys()).map((item) => (
                <li className="bg-white py-2" key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <div>hello</div>
          </div>
        </div>
      </main>
    </>
  )
}
