import { createColumnHelper } from '@tanstack/table-core'
import { StandardTable } from '../../components/StandardTable'
import Image from 'next/image'
import Link from 'next/link'

type SummaryDataProps = {
  botImageUrl: string
  name: string
  deployOn: string
  gamePlayTotal: number
  totalPoint: number
  gameIds: string[]
}

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
    header: () => 'Name',
  }),
  columnHelper.accessor('deployOn', {
    cell: (info) => info.getValue(),
    header: () => 'Created At',
  }),
  // columnHelper.accessor('gamePlayTotal', {
  //   cell: (info) => info.getValue(),
  //   header: () => 'Game Played',
  // }),
  columnHelper.accessor('totalPoint', {
    cell: (info) => info.getValue(),
    header: () => 'Total Point',
  }),
  columnHelper.accessor('gameIds', {
    cell: (info) => (
      <>
        <div className="flex flex-col">
          {/* <div className="bg-[#F6D666] text-center">
            <Link href="/">View code</Link>
          </div> */}
          {/* <div className="bg-[#EAA040] text-center">
            <Link href="/game">Game history</Link>
          </div> */}
          {info.getValue()?.map((gameId, index) => (
            <div key={gameId} className="my-1 bg-[#EAA040] text-center">
              <Link href={`/game?id=${gameId}`}>Game history: {`${index + 1}`}</Link>
            </div>
          ))}
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
