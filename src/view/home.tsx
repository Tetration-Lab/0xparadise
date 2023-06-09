import { useUser } from '@clerk/nextjs'
import { type NextPage } from 'next'
import Head from 'next/head'

export const Home: NextPage = () => {
  const user = useUser()
  return (
    <>
      <Head>
        <title>Survival Island 🏝️</title>
        <meta name="description" content="Survival Island" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">Home</main>
    </>
  )
}
