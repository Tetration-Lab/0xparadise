import Image from 'next/image'
export interface Props {
  children: React.ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="">
        <div
          className="
          lg:fixed
          lg:inset-y-0 
          lg:left-0
          lg:z-40 lg:w-64"
        >
          <div className="flex h-full flex-col">
            <div className="mt-4">
              <div className="p-4">
                <div className="rounded-md bg-black bg-opacity-20">
                  <Image src={'/image/logo.png'} width={200} height={200} alt={'logo'} />
                </div>
              </div>
            </div>
            <div className="mt-20 flex flex-1 flex-col space-y-2 px-4">
              <div className="rounded-md border border-black p-2">Home</div>
              <div className="rounded-md border border-black p-2">My Account</div>
              <div className="rounded-md border border-black p-2">Tutorial</div>
              <div className="rounded-md border border-black p-2">Twitter</div>
            </div>
            <div className="p-2">
              <div>© 2023 Tetration lab.</div>
              <div>All Right Reserved.</div>
            </div>
          </div>
        </div>
        <div className="lg:pl-64">
          {/* hero section */}
          <div className="relative hidden h-40 border border-l-0 lg:block">
            <div className="absolute right-0 top-0 pr-4 pt-4">
              <button className="rounded-full border border-black p-2 px-4">Connect Wallet</button>
            </div>
            <div className="absolute bottom-0 w-1/2 pl-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam omnis, repellat, eligendi deserunt quas
              odit nisi ratione cum veniam nesciunt nemo deleniti iste natus non tempora ab ut dolore culpa.
            </div>
          </div>
          {/* content */}
          <div>{children}</div>
        </div>
      </div>
    </>
  )
}
