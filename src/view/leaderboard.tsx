import { type NextPage } from 'next'
import Head from 'next/head'

import { api } from '~/utils/api'
import { useState } from 'react'
import { ListRank } from '../components/ListRank'
import { MainLayout } from '../components/MainLayout'
import { useAuth } from '@clerk/nextjs'
import { LatestGameTable } from '~/components/LatestGameTable'
import { LeaderboardGameTable } from '~/components/LeaderboardTable'
import { RecentGameTable } from '~/components/RecentGameTable'
import Link from 'next/link'

interface Item {
  id: number
  name: string
  botName: string
  score: number
}

export const LeaderBoardPage: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: 'from tRPC' })
  const [items, setItems] = useState<Item[]>([])
  const { isSignedIn } = useAuth()
  const { data: secretMessage } = api.example.getSecretMessage.useQuery(undefined, { enabled: isSignedIn })
  const { data: recentGames } = api.game.list.useQuery()
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
          <div className="bg-[#B3A69F] p-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-semibold uppercase text-black">My Latest Game</h1>
              <div className="my-4">
                <LatestGameTable />
              </div>
            </div>
          </div>
          <div className="flex min-h-screen bg-[#E0DACF] p-8">
            <div className="w-3/5">
              <h1 className="text-xl font-semibold uppercase text-black">Leaderboard</h1>
              <div className="my-4 px-4">
                <LeaderboardGameTable />
                {recentGames?.list.map((game, index) => {
                  return (
                    <div key={game.id}>
                      <Link className="text-black" href={`/game?id=${game.id}`}>
                        game {`${index + 1}`}
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="w-2/5">
              <h1 className="text-xl font-semibold uppercase text-black">All Recent Games</h1>
              <div className="my-4 px-4">
                <RecentGameTable />
              </div>
            </div>
          </div>
        </MainLayout>
      </main>
    </>
  )
}
