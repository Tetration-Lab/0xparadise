import { createColumnHelper } from '@tanstack/table-core'
import { StandardTable } from '../../components/StandardTable'

type SummaryDataProps = {
  botImageUrl: string
  version: string
  deployOn: number
  gamePlayTotal: number
  maxSurvival: number
  totalPP: number
  totalSP: number
  totalPoint: number
}

const defaultData: SummaryDataProps[] = [
  {
    botImageUrl: '',
    version: 'v1',
    deployOn: 24,
    gamePlayTotal: 100,
    maxSurvival: 0,
    totalPP: 100,
    totalSP: 100,
    totalPoint: 100,
  },
]

const columnHelper = createColumnHelper<SummaryDataProps>()

const columns = [
  columnHelper.accessor('botImageUrl', {
    cell: (info) => info.getValue(),
    header: () => <span></span>,
  }),
  columnHelper.accessor((row) => row.version, {
    id: 'version',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Version</span>,
  }),
  columnHelper.accessor('deployOn', {
    cell: (info) => info.getValue(),
    header: () => 'deployOn',
  }),
  columnHelper.accessor('gamePlayTotal', {
    cell: (info) => info.getValue(),
    header: () => 'gamePlayTotal',
  }),
  columnHelper.accessor('maxSurvival', {
    cell: (info) => info.getValue(),
    header: () => 'maxSurvival',
  }),
  columnHelper.accessor('totalPP', {
    cell: (info) => info.getValue(),
    header: () => 'totalPP',
  }),
  columnHelper.accessor('totalSP', {
    cell: (info) => info.getValue(),
    header: () => 'totalSP',
  }),
  columnHelper.accessor('totalPoint', {
    cell: (info) => info.getValue(),
    header: () => 'totalPoint',
  }),
]
export const SummaryTable = () => {
  return (
    <>
      <StandardTable columns={columns} data={defaultData} />
    </>
  )
}
