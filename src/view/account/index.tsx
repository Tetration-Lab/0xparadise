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

export const AccountPage: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: 'from tRPC' })
  const { data: botList, isLoading } = api.bot.listSelfBot.useQuery()
  type BotList = typeof botList

  const formatDataForTable = (data: BotList) => {
    if (!data?.list || !data) {
      return []
    }
    return data.list.map((item) => {
      console.log(item.name)
      return {
        botImageUrl: item.profileImageUrl,
        name: item.name,
        deployOn: item.createdAt.toDateString(),
        gamePlayTotal: item.gamePlayed ?? 0,
        totalPoint: item.totalPoint ?? 0,
      }
    })
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
          <div className="h-full bg-[#DBD7C6] p-4 text-black">
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
              <SummaryTable data={formatDataForTable(botList)} />
            </div>
          </div>
        </MainLayout>
      </main>
    </>
  )
}
