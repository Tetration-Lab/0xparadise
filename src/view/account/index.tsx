import { type NextPage } from 'next'
import Head from 'next/head'

import { api } from '~/utils/api'
import { useState } from 'react'
import { ListRank } from '../../components/ListRank'
import { MainLayout } from '../../components/MainLayout'

import { createColumnHelper } from '@tanstack/react-table'
import { SummaryTable } from './SummaryTable'
import { FaPlus } from 'react-icons/fa'
import Link from 'next/link'

interface Item {
  id: number
  name: string
  botName: string
  score: number
}
export const AccountPage: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: 'from tRPC' })
  const [items, setItems] = useState<Item[]>([])
  const { data, isLoading } = api.bot.listSelfBot.useQuery()
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
        <MainLayout heroSection={<>Account Page</>}>
          <div className="bg-[#DBD7C6] p-4 text-black">
            <div className="mb-4 space-x-2">
              <span>My Survivors</span>
              <Link href="/create-survival">
                <button className="rounded-lg border bg-black px-4 py-2 text-white">
                  <div className="flex items-center space-x-2">
                    <FaPlus />
                    <span>Create New</span>
                  </div>
                </button>
              </Link>
            </div>
            <div className="space-y-4 rounded-lg bg-[#B1A6A0] p-4 ">
              <div className="overflow-auto text-black">hello {JSON.stringify(data?.list)}</div>
              {data?.list.map((item, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.profileImageUrl} key={index} width={64} height={64} alt="avatar" />
              ))}
              {Array.from(Array(10).keys()).map((item) => (
                <>
                  <div className="mb-2 text-lg">BOT {item}</div>
                  <SummaryTable />
                </>
              ))}
            </div>
          </div>
        </MainLayout>
      </main>
    </>
  )
}
