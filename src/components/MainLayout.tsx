import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import { SideBar } from './Sidebar'
import { Carousel } from './Carousel'
import { Button } from './Button'

export interface Props {
  heroSection?: React.ReactNode
  children: React.ReactNode
}

const HeroSection = () => {
  const { user, isSignedIn } = useUser()
  return (
    <div className="relative bg-[#B3A69F]">
      <Carousel />
      <div className="absolute right-0 top-0 pr-4 pt-4">
        {!isSignedIn && (
          <Button>
            <SignInButton>Connect Wallet</SignInButton>
          </Button>
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
    </div>
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
        <div className="h-screen bg-[#DBD7C6] lg:pl-64">
          {/* hero section */}
          <HeroSection />
          {/* content */}
          <div>{children}</div>
        </div>
      </div>
    </>
  )
}
