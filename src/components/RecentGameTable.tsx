import { createColumnHelper } from '@tanstack/table-core'
import { StandardTable } from './StandardTable'

type RecentGame = {
  place: number
  team: string
  submission: string
  latestHash: string
}

const defaultData: RecentGame[] = [
  {
    place: 1,
    team: '0xIsagi',
    submission: '0x31e10bdd7a6de25414e5a41485b5a9b294bea4cf03f8f328666f1bf24cfe393d',
    latestHash: '0x31e10bdd7a6de25414e5a41485b5a9b294bea4cf03f8f328666f1bf24cfe393d',
  },
]

const columnHelper = createColumnHelper<RecentGame>()

const columns = [
  columnHelper.accessor('place', {
    cell: (info) => info.getValue(),
    header: () => <span>Place</span>,
  }),
  columnHelper.accessor('team', {
    cell: (info) => info.getValue(),
    header: () => <span>Team</span>,
  }),
  columnHelper.accessor('submission', {
    cell: (info) => (
      <a href="" target="_blank">
        {info.getValue().substring(0, 4)}
      </a>
    ),
    header: () => <span>Submission #</span>,
  }),
  columnHelper.accessor('latestHash', {
    cell: (info) => (
      <a href="" target="_blank">
        {info.getValue().substring(0, 4)}
      </a>
    ),
    header: () => <span>Latest Hash</span>,
  }),
]
export const RecentGameTable = () => {
  return (
    <>
      <StandardTable columns={columns} data={defaultData} />
    </>
  )
}
