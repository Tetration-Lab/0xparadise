import { createColumnHelper } from '@tanstack/table-core'
import { StandardTable } from '../../components/StandardTable'
import Image from 'next/image'
import Link from 'next/link'

type SummaryDataProps = {
  botImageUrl: string
  name: string
  deployOn: string
  gamePlayTotal: number
  maxSurvival: number
  totalPP: number
  totalSP: number
  totalPoint: number
}

const defaultData: SummaryDataProps[] = [
  {
    botImageUrl: '',
    name: 'v1',
    deployOn: 'yesterday',
    gamePlayTotal: 100,
    maxSurvival: 0,
    totalPP: 100,
    totalSP: 100,
    totalPoint: 100,
  },
]

const columnHelper = createColumnHelper<Partial<SummaryDataProps>>()

const columns = [
  columnHelper.accessor('botImageUrl', {
    cell: (info) => (
      <div className="flex h-full w-16 justify-center">
        <Image className=" object-cover" src={info.getValue() || ''} width={128} height={128} alt="botimage" />
      </div>
    ),
    header: () => <span></span>,
  }),
  columnHelper.accessor((row) => row.name, {
    id: 'name',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Name</span>,
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
  columnHelper.accessor('management', {
    cell: (info) => (
      <>
        <div className="flex flex-col">
          <div className="bg-[#F6D666] text-center">
            <Link href="/">View code</Link>
          </div>
          <div className="bg-[#EAA040] text-center">
            <Link href="/game">Game history</Link>
          </div>
        </div>
      </>
    ),
    header: () => 'Management',
  }),
]

interface Props {
  data: SummaryDataProps[]
}
export const SummaryTable: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <StandardTable columns={columns} data={data} />
      </div>
    </>
  )
}
