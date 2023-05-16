import Image from 'next/image'
import Link from 'next/link'

export const SideBar = () => {
  return (
    <>
      <div className="hidden h-full flex-col lg:flex">
        <div className="mt-4">
          <div className="p-4">
            <div className="rounded-md bg-black bg-opacity-20">
              <Image src={'/image/logo.png'} className="h-full" width={630} height={136} alt={'logo'} />
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-1 flex-col space-y-2 px-4">
          <Link href="/" className="rounded-md border border-black p-2">
            Home
          </Link>
          <Link href="/account" className="rounded-md border border-black p-2">
            My Account
          </Link>
          <div className="rounded-md border border-black p-2">Tutorial</div>
          <Link href="https://twitter.com/Tetration_Lab" target="_blank" className="rounded-md border border-black p-2">
            Twitter
          </Link>
          <Link href="/game" className="rounded-md border border-black p-2">
            Game
          </Link>
        </div>
        <div className="p-2">
          <div>© 2023 Tetration lab.</div>
          <div>All Right Reserved.</div>
        </div>
      </div>
    </>
  )
}
