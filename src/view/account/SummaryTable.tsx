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
    cell: (info) => <img style={{ width: '50px', height: '50px' }} src={info.getValue()} />,
    header: () => <span></span>,
  }),
  columnHelper.accessor((row) => row.version, {
    id: 'version',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Version</span>,
  }),
  columnHelper.accessor('deployOn', {
    cell: (info) => info.getValue(),
    header: () => <span>Deployed On</span>,
  }),
  columnHelper.accessor('gamePlayTotal', {
    cell: (info) => info.getValue(),
    header: () => <span>Game Played</span>,
  }),
  columnHelper.accessor('maxSurvival', {
    cell: (info) => info.getValue(),
    header: () => <span>Max Survival</span>,
  }),
  columnHelper.accessor('totalPP', {
    cell: (info) => info.getValue(),
    header: () => <span>Total PP</span>,
  }),
  columnHelper.accessor('totalSP', {
    cell: (info) => info.getValue(),
    header: () => <span>Total SP</span>,
  }),
  columnHelper.accessor('totalPoint', {
    cell: (info) => info.getValue(),
    header: () => <span>Total Point</span>,
  }),
  columnHelper.accessor((row) => row.version, {
    id: 'management',
    cell: (info) => (
      <div>
        <div>
          <a>View Code</a>
        </div>
        <div>
          <a>Game History</a>
        </div>
      </div>
    ),
    header: () => <span>Management</span>,
  }),
]
export const SummaryTable = () => {
  return (
    <>
      <StandardTable columns={columns} data={defaultData} />
    </>
  )
}
