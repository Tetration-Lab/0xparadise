import Image from 'next/image'
import { nthNumber } from '../utils'
// TODO: add props
interface Props {
  position: number
  avatarImage: string
}
export const PlayerStatisticItem: React.FC<Props> = ({ position }) => {
  return (
    <div className="flex w-full flex-shrink-0 bg-black bg-opacity-50 p-1">
      <div className="space-y-1 pr-1">
        <div className="relative h-8 w-8 bg-[#4E4B4B] p-1">
          <Image
            className="pixelated h-full w-full"
            src={'/image/item/timber-item.png'}
            width={16}
            height={16}
            alt={'logo'}
          />
          <div className="absolute bottom-0 right-0 bg-black bg-opacity-25 px-1 text-[8px] text-white">50</div>
        </div>

        <div className="relative h-8 w-8 bg-[#4E4B4B] p-1">
          <Image
            className="pixelated h-full w-full"
            src={'/image/item/stone-item.png'}
            width={16}
            height={16}
            alt={'logo'}
          />
          <div className="absolute bottom-0 right-0 bg-black bg-opacity-25 px-1 text-[8px] text-white">50</div>
        </div>
        <div className="relative h-8 w-8 bg-[#4E4B4B] p-1">
          <Image
            className="pixelated h-full w-full"
            src={'/image/item/fruit-item.png'}
            width={16}
            height={16}
            alt={'logo'}
          />
          <div className="absolute bottom-0 right-0 bg-black bg-opacity-25 px-1 text-[8px] text-white">50</div>
        </div>
      </div>

      <div className="relative h-auto w-16 flex-shrink-0">
        <Image className="h-full object-cover" src={'/image/stat-avatar.png'} width={64} height={86} alt="avatar" />
        <div className="absolute bottom-0 w-full bg-black bg-opacity-80">
          <div className="truncate text-xs text-white">0xANYA</div>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between">
        <div className="flex w-full text-sm text-white">
          <div className="w-1/2 flex-shrink-0">
            <div>
              {position}
              {nthNumber(position)}
            </div>
            <div className="text-[#FF626B]">HP: 10/10</div>
          </div>
          <div className="w-1/2 flex-shrink-0">
            <div className="text-[#FCB42B]">TP: 1,900</div>
            <div className="ml-2 text-xs text-[#FDD44E]">
              <div>PP: 1,900</div>
              <div>PP: 1,900</div>
            </div>
          </div>
        </div>
        <div className="w-full px-2 text-white">
          {/* items */}
          <div className="mb-1 text-xs">ITEMS:</div>
          <div className="flex w-full justify-between overflow-x-auto">
            <div className="relative h-8 w-8 bg-[#4E4B4B] p-1">
              <Image
                className="pixelated h-full w-full"
                src={'/image/item/sword-item.png'}
                width={16}
                height={16}
                alt={'logo'}
              />
              <div className="absolute bottom-0 right-0 bg-black bg-opacity-25 px-1 text-[8px] text-white">+1</div>
            </div>
            <div className="relative h-8 w-8 bg-[#4E4B4B] p-1">
              <Image
                className="pixelated h-full w-full"
                src={'/image/item/armor-item.png'}
                width={16}
                height={16}
                alt={'logo'}
              />
              <div className="absolute bottom-0 right-0 bg-black bg-opacity-25 px-1 text-[8px] text-white">+1</div>
            </div>
            <div className="relative h-8 w-8 bg-[#4E4B4B] p-1">
              <Image
                className="pixelated h-full w-full"
                src={'/image/item/pickaxe-item.png'}
                width={16}
                height={16}
                alt={'logo'}
              />
              <div className="absolute bottom-0 right-0 bg-black bg-opacity-25 px-1 text-[8px] text-white">+1</div>
            </div>
            <div className="relative h-8 w-8 bg-[#4E4B4B] p-1">
              <Image
                className="pixelated h-full w-full"
                src={'/image/item/shovel-item.png'}
                width={16}
                height={16}
                alt={'logo'}
              />
              <div className="absolute bottom-0 right-0 bg-black bg-opacity-25 px-1 text-[8px] text-white">+1</div>
            </div>
            <div className="relative h-8 w-8 bg-[#4E4B4B] p-1">
              <Image
                className="pixelated h-full w-full"
                src={'/image/item/bag-item.png'}
                width={16}
                height={16}
                alt={'logo'}
              />
              <div className="absolute bottom-0 right-0 bg-black bg-opacity-25 px-1 text-[8px] text-white">+1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
