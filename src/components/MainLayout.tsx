export interface Props {
  children: React.ReactNode
}
export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="">
        <div
          className="
        bg-red-500 
        lg:fixed
        lg:inset-y-0 
        lg:left-0
        lg:z-40 lg:w-64"
        >
          <div className="flex h-full flex-col">
            <div className="mt-4">LOGO</div>
            <div className="mt-20 flex flex-1 flex-col space-y-2">
              <div className="bg-blue-500 p-2">menu 1</div>
              <div className="bg-blue-500 p-2">menu 1</div>
              <div className="bg-blue-500 p-2">menu 1</div>
              <div className="bg-blue-500 p-2">menu 1</div>
              <div className="bg-blue-500 p-2">menu 1</div>
              <div className="bg-blue-500 p-2">menu 1</div>
              <div className="bg-blue-500 p-2">menu 1</div>
              <div className="bg-blue-500 p-2">menu 1</div>
              <div className="bg-blue-500 p-2">menu 1</div>
              <div>2</div>
            </div>
            <div className="p-2">
              <div>© 2023 Tetration lab.</div>
              <div>All Right Reserved.</div>
            </div>
          </div>
        </div>
        <div className="lg:pl-64">
          <div className="h-40 bg-green-500">Hero Section</div>
          <div>{children}</div>
        </div>
      </div>
    </>
  )
}
