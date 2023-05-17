import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import { SideBar } from './Sidebar'

export interface Props {
  heroSection?: React.ReactNode
  children: React.ReactNode
}

const MockSection = () => {
  const { user, isSignedIn } = useUser()
  return (
    <>
      <div className="absolute right-0 top-0 pr-4 pt-4">
        {!isSignedIn && (
          <button className="rounded-full border border-black p-2 px-4">
            <SignInButton>Connect Wallet</SignInButton>
          </button>
        )}
        {isSignedIn && (
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: 32,
                  height: 32,
                },
              },
            }}
          />
        )}
      </div>
      <div className="absolute bottom-0 w-1/2 pl-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam omnis, repellat, eligendi deserunt quas odit
        nisi ratione cum veniam nesciunt nemo deleniti iste natus non tempora ab ut dolore culpa.
      </div>
    </>
  )
}

export const MainLayout: React.FC<Props> = ({ children, heroSection }) => {
  return (
    <>
      <div>
        <div
          className="
          lg:fixed
          lg:inset-y-0 
          lg:left-0
          lg:z-40 lg:w-64"
        >
          <SideBar />
        </div>
        <div className="lg:pl-64">
          {/* hero section */}
          <div className="relative hidden h-40 bg-gray-100 lg:block">{heroSection ? heroSection : <MockSection />}</div>
          {/* content */}
          <div>{children}</div>
        </div>
      </div>
    </>
  )
}
