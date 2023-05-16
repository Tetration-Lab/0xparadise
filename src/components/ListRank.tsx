import autoAnimate from '@formkit/auto-animate'
import { useEffect, useRef } from 'react'

export interface RankTableItem {
  id: number
  name: string
  botName: string
  score: number
}
interface Props {
  data: RankTableItem[]
}

export const ListRank: React.FC<Props> = ({ data }) => {
  const headers = ['Name', 'Box name', 'Score']
  const parent = useRef<HTMLUListElement>(null)
  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])
  return (
    <>
      <div className="mb-2 grid w-full grid-cols-3 bg-gray-100 py-2 text-lg shadow">
        {headers.map((header) => {
          return (
            <>
              <div className="text-center">{header}</div>
            </>
          )
        })}
      </div>
      <ul ref={parent} className="w-full">
        {data.map((item) => {
          return (
            <li className="my-4 grid w-full grid-cols-3 py-1 shadow" key={item.id}>
              <div className="text-center">{item.name}</div>
              <div className="text-center">{item.botName}</div>
              <div className="text-center">{item.score}</div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
