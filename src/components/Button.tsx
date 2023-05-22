interface Props {
  children?: any
  onClick?: () => void
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="rounded-md border border-black bg-primary-button p-2 font-bold text-black hover:bg-hover-button"
    >
      {children}
    </div>
  )
}
