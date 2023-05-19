import { type NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { api } from '~/utils/api'
import { useState } from 'react'
import { useAuth } from '@clerk/nextjs'
import { MainLayout } from '../../components/MainLayout'
import { UploadButton } from '@uploadthing/react'
import { type OurFileRouter } from '../../server/uploadthing'

interface Item {
  id: number
  name: string
  botName: string
  score: number
}

export const CreateSurvivalPage: NextPage = () => {
  const [imageUrl, setImageUrl] = useState('')
  return (
    <>
      <Head>
        <title>0xparadise 🏝️</title>
        <meta name="description" content="0xparadise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <MainLayout>
          <div className="mt-4 flex items-center space-x-2">
            {/* TODO: move to component */}
            {/* title */}
            <div>
              <Link href="/account">
                <button className="rounded-lg border p-2">Back</button>
              </Link>
            </div>
            <div className=" uppercase">Create new survival</div>
          </div>
          {/* content */}
          <div className="p-10 pb-16">
            <div className="mt-4 space-y-4 rounded-lg border border-dashed p-4">
              {/* uploader */}
              <div className="">
                <div className="mb-4">
                  <div className="text-lg">Upload your bot Avatar</div>
                </div>
                <div className="h-36 w-36 border-2 border-dashed">
                  <div className="relative h-full w-full">
                    <button className="absolute h-full w-full">
                      <div className="flex flex-col justify-start bg-blue-500">hello</div>
                      {/* // eslint-disable-next-line @next/next/no-img-element */}
                    </button>
                    {imageUrl && (
                      <Image
                        className='w-full" absolute h-full object-cover'
                        src={imageUrl}
                        alt="Picture of the author"
                        width={320}
                        height={320}
                      />
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
                <textarea className="w-1/2 bg-gray-100" name="" id="" cols={30} rows={10}></textarea>
              </div>

              <div>
                <div className="mb-4">Deploy your code</div>
                <textarea className="w-1/2 bg-gray-100" name="" id="" cols={30} rows={10}></textarea>
              </div>

              <div>
                Warning!: By creating new survivor you are deploying a new contract. Any changes to the contract cannot
                be made until redeployed again blah blah blah
              </div>

              <div>
                <button className="rounded-lg border px-6 py-3">Create Now</button>
              </div>
            </div>
          </div>
        </MainLayout>
      </main>
    </>
  )
}
