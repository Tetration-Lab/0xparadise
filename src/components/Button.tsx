interface Props {
  children?: any
  onClick?: () => void
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="rounded-md border text-black font-bold bg-primary-button border-black p-2 hover:bg-hover-button">
      {children}
    </div>
  )
}
