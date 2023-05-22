import { createColumnHelper } from '@tanstack/table-core'
import { StandardTable } from './StandardTable'

type Score = {
  rank: number
  player: string
  totalPoint: number
  latestHash: string
  gamePlayed: number
  totalPoints: number
}

const defaultData: Score[] = [
  {
    rank: 1,
    player: 'Tetration Lab',
    totalPoint: 1000,
    latestHash: '0x31e10bdd7a6de25414e5a41485b5a9b294bea4cf03f8f328666f1bf24cfe393d',
    gamePlayed: 3,
    totalPoints: 3000,
  },
]

const columnHelper = createColumnHelper<Score>()

const columns = [
  columnHelper.accessor('rank', {
    cell: (info) => info.getValue(),
    header: () => <span>Rank</span>,
  }),
  columnHelper.accessor('player', {
    cell: (info) => info.getValue(),
    header: () => <span>PLAYER</span>,
  }),
  columnHelper.accessor('totalPoint', {
    cell: (info) => info.getValue(),
    header: () => <span>Total Point</span>,
  }),
  columnHelper.accessor('gamePlayed', {
    cell: (info) => info.getValue(),
    header: () => <span>Game Played</span>,
  }),
  columnHelper.accessor('totalPoints', {
    cell: (info) => info.getValue(),
    header: () => <span>Total Points</span>,
  })
]
export const LeaderboardGameTable = () => {
  return (
    <>
      <StandardTable columns={columns} data={defaultData} />
    </>
  )
}
