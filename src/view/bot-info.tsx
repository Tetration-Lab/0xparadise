import { type NextPage } from 'next'
import Head from 'next/head'

import { api } from '~/utils/api'
import { useState } from 'react'
import { MainLayout } from '../components/MainLayout'

import { createColumnHelper } from '@tanstack/react-table'
import { SummaryTable } from './account/SummaryTable'
import Link from 'next/link'
import { LatestGameTable } from '~/components/LatestGameTable'

interface Item {
  id: number
  name: string
  botName: string
  score: number
}
export const BotInfoPage: NextPage = () => {
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
        <MainLayout >
          <div className="p-4 bg-[#E0DACF]">
            <div className="flex items-center mb-4 space-x-2">
              <Link href="/create-survival">
                <button className="rounded-lg border px-4 py-2">Create New</button>
              </Link>
              <h1 className="text-xl text-black font-semibold uppercase">Bot History </h1>
            </div>
            <div className="space-y-4">
                <div className="mb-2 text-lg">BOT 1 Summary</div>
                <SummaryTable />
            </div>
            <h1 className="text-xl text-black font-semibold uppercase m-8">All Game Plays</h1>
            <LatestGameTable />
          </div>
        </MainLayout>
      </main>
    </>
  )
}
