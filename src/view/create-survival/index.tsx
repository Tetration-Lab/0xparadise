import { type NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { api } from '~/utils/api'
import { useRef, useState } from 'react'
import { MainLayout } from '../../components/MainLayout'
import { UploadButton } from '@uploadthing/react'
import { type OurFileRouter } from '../../server/uploadthing'
import { FaImage } from 'react-icons/fa'

import { z } from 'zod'
import { useRouter } from 'next/router'
import { useUser } from '@clerk/nextjs'
import { sourceCodeToBytesCode } from '~/simulator/getBotFromChain'

interface Item {
  id: number
  name: string
  botName: string
  score: number
}

export const CreateSurvivalPage: NextPage = () => {
  const [imageUrl, setImageUrl] = useState('')
  const { mutateAsync: createBot } = api.bot.create.useMutation()
  const { mutateAsync: createSim } = api.simulate.simulate.useMutation()
  const { mutateAsync: check } = api.simulate.check.useMutation()
  const botNameRef = useRef<HTMLInputElement>(null)
  const yourCodeRef = useRef<HTMLTextAreaElement>(null)
  const router = useRouter()
  const onSubmit = async () => {
    // validate

    const schema = z.object({
      botName: z.string().nonempty(),
      botImageUrl: z.string().nonempty(),
      yourcode: z.string().nonempty(),
    })

    try {
      await check(yourCodeRef?.current?.value || '')
    } catch (error) {
      alert('Invalid code!')
      return
    }

    const payload = {
      botImageUrl: imageUrl,
      botName: botNameRef?.current?.value || '',
      yourcode: yourCodeRef?.current?.value || '',
    }
    const result = schema.safeParse(payload)
    console.log(result)
    if (!result.success) {
      const errMsg = result.error.errors
        .map((err) => {
          const pathErr = (err.path.length > 0 ? err.path[0] : '') as string
          return `♥ ${pathErr} ${err.message}`
        })
        .join('\n')
      alert(errMsg)
      return
    }
    try {
      const resp = await createBot(payload)
      await createSim()
      console.log('done')
      void router.push('/account')
    } catch (e) {
      alert('Create bot error!')
    }
  }
  const testSim = async () => {
    void (await createSim())
  }
  const user = useUser()
  return (
    <>
      <Head>
        <title>0xparadise 🏝️</title>
        <meta name="description" content="0xparadise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#DBD7C6] text-black">
        <MainLayout>
          <div className="mt-4 flex items-center space-x-2 p-4">
            {/* TODO: move to component */}
            {/* title */}
            <div>
              <Link href="/account">
                <button className="rounded-lg border bg-black p-2 text-white">Back</button>
              </Link>
            </div>
            <div className="">Create new survival</div>
          </div>
          {/* content */}
          <div className="bg-[#DBD7C6] p-4 pb-16">
            <div className="mt-4 space-y-4 rounded-lg bg-[#B1A6A0] p-4">
              {/*  */}
              <div className="space-y-2">
                <div>Name Your Character</div>
                <input ref={botNameRef} className="w-full max-w-xl border bg-[#FEF9EB] p-2" />
              </div>
              {/* uploader */}
              <div className="">
                <div className="mb-4">
                  <div className="text-lg">Upload your bot Avatar</div>
                </div>
                <div className="h-36 w-36 border-white">
                  <div className="relative h-full w-full bg-[#FEF9EB]">
                    <button className="absolute h-full w-full">
                      <div className="flex flex-col justify-start bg-blue-500"></div>
                      {/* // eslint-disable-next-line @next/next/no-img-element */}
                    </button>
                    {imageUrl ? (
                      <Image
                        className='w-full" absolute h-full object-cover'
                        src={imageUrl}
                        alt="Picture of the author"
                        width={320}
                        height={320}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <FaImage className="h-8 w-8" />
                      </div>
                    )}
                    <div className="absolute inset-0 z-10 h-full w-full bg-red-500 opacity-0">
                      <UploadButton<OurFileRouter>
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                          // Do something with the response
                          if (res && res?.length > 0) {
                            console.log('Files: ', res[0]?.fileUrl)
                            const imgUrl = res[0]?.fileUrl as unknown as string
                            setImageUrl(imgUrl)
                          }
                          alert('Upload Completed')
                        }}
                        onUploadError={(error: Error) => {
                          // Do something with the error.
                          alert(`ERROR! ${error.message}`)
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-4">Example Template</div>
                <textarea className="w-full max-w-xl bg-[#FEF9EB]" name="" id="" cols={30} rows={10}></textarea>
              </div>

              <div>
                <div className="mb-4">Deploy your code</div>
                <textarea
                  ref={yourCodeRef}
                  className="w-full max-w-xl bg-[#FEF9EB]"
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                ></textarea>
              </div>

              <div>
                Warning!: By creating new survivor you are deploying a new contract. Any changes to the contract cannot
                be made until redeployed again blah blah blah
              </div>

              <div className="space-x-2">
                <button
                  onClick={() => void onSubmit()}
                  className="rounded-lg border border-black bg-[#92C341] px-6 py-3 text-white"
                >
                  Create Now
                </button>
                <button
                  onClick={() => void testSim()}
                  className="rounded-lg border border-black bg-[#f11616] px-6 py-3 text-white"
                >
                  Test Sim
                </button>
              </div>
            </div>
          </div>
        </MainLayout>
      </main>
    </>
  )
}
