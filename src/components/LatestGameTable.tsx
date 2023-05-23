import { createColumnHelper } from '@tanstack/table-core'
import { StandardTable } from './StandardTable'
import Link from 'next/link'

type Game = {
  id: string
  place: number
  team: string
  submission: string
  hash: string
  gamePlayed: string
  elo: number
  version: string
}

const defaultData: Game[] = [
  {
    id: '1',
    place: 1,
    team: 'Tetration Lab',
    submission: '0x31e10bdd7a6de25414e5a41485b5a9b294bea4cf03f8f328666f1bf24cfe393d',
    hash: '0x31e10bdd7a6de25414e5a41485b5a9b294bea4cf03f8f328666f1bf24cfe393d',
    gamePlayed: '3',
    elo: 8000,
    version: '0.1.0',
  },
]

const columnHelper = createColumnHelper<Game>()

const columns = [
  columnHelper.accessor('place', {
    cell: (info) => info.getValue(),
    header: () => <span>PLACE</span>,
  }),
  columnHelper.accessor('team', {
    cell: (info) => info.getValue(),
    header: () => <span>TEAM</span>,
  }),
  columnHelper.accessor('submission', {
    cell: (info) => info.getValue().substring(0, 4),
    header: () => <span>SUBMISSION #</span>,
  }),
  columnHelper.accessor('hash', {
    cell: (info) => (
      <a href="" target="_blank">
        {info.getValue().substring(0, 4)}
      </a>
    ),
    header: () => <span>LATEST HASH</span>,
  }),
  columnHelper.accessor('gamePlayed', {
    cell: (info) => info.getValue(),
    header: () => <span>GAME PLAYED</span>,
  }),
  columnHelper.accessor('elo', {
    cell: (info) => info.getValue(),
    header: () => <span>ELO</span>,
  }),
  columnHelper.accessor((row) => row.version, {
    id: 'version',
    cell: (info) => (
      <span className="w-full p-1 text-center" style={{ backgroundColor: '#F79C1C' }}>
        <Link href="/game">VIEW GAME</Link>
      </span>
    ),
    header: () => <span>VIEW</span>,
  }),
]
export const LatestGameTable = () => {
  return (
    <>
      <StandardTable columns={columns} data={defaultData} />
    </>
  )
}
