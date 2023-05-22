import Image from 'next/image'
import Link from 'next/link'
import { menuItems } from '../constant/menuItem'
import { useAuth } from '@clerk/clerk-react'
import { Button } from './Button'

export const SideBar = () => {
  const { isSignedIn } = useAuth()
  return (
    <>
      <div className="hidden h-full flex-col lg:flex bg-[url('/image/sidebar.png')] bg-center bg-no-repeat bg-cover">
        <div className="mt-4">
          <div className="p-4">
            <div className="rounded-md bg-black bg-opacity-20">
              <Image src={'/image/logo.png'} className="h-full" width={630} height={136} alt={'logo'} />
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-1 flex-col space-y-2 px-4 ">
          {menuItems.map((item, index) => {
            if (item.url === '/account') {
              // check
              if (!isSignedIn) {
                return null
              }
            }
            return (
              <Link key={`${item?.text}:${index}`} href={item.url} target={item?.target}>
                <Button>{item.text}</Button>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
