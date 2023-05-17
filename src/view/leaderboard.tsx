import { type NextPage } from 'next'
import Head from 'next/head'

import { api } from '~/utils/api'
import { useState } from 'react'
import { ListRank } from '../components/ListRank'
import { MainLayout } from '../components/MainLayout'

interface Item {
  id: number
  name: string
  botName: string
  score: number
}

export const LeaderBoardPage: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: 'from tRPC' })
  const [items, setItems] = useState<Item[]>([])
  const mock = () => {
    const random = Math.floor(Math.random() * 100)
    const mockItem = {
      id: items.length + 1,
      name: `test ${random}`,
      botName: `test botname ${random}`,
      score: random,
    }
    const newVal = [...items, mockItem].sort((a, b) => b.score - a.score)
    setItems(newVal)
  }

  const removeMock = () => {
    const newItems = items.slice(0, items.length - 1)
    setItems(newItems)
  }
  return (
    <>
      <Head>
        <title>0xparadise 🏝️</title>
        <meta name="description" content="0xparadise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <MainLayout>
          <div className="p-4">
            <div className="relative">
              <div className="abosolute">
                <button className="border px-2" onClick={() => mock()}>
                  add
                </button>
                <button className="border px-2" onClick={() => removeMock()}>
                  remove
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <h1 className="text-xl font-semibold">Leaderboard</h1>
            </div>
            <div className="flex justify-center"></div>
            <div className="px-20">
              <ListRank data={items} />
            </div>
          </div>
        </MainLayout>
      </main>
    </>
  )
}
