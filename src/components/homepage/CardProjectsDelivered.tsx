import { CircleArrowOutUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PropsType = { title: string, desc: string, image: string, dest: string }

export default function CardProjectsDelivered({ title, desc, image, dest }: PropsType) {
  return (
    <div className='flex flex-col group'>
      <div className='w-full h-[320px] relative overflow-hidden rounded-t-xl'>
        <Image
          src={image}
          fill
          objectFit='cover'
          alt={`project_delivered_${title}`}
          className="group-hover:scale-105 transition-transform duration-1000"
        />
      </div>
      <div className='p-5 bg-white flex flex-col gap-y-2'>
        <div className='font-bold text-xl leading-[30px]'>
          {title}
        </div>
        <div className='text-base font-[350] tracking-[-0.5px] text-gray-500'>
          {desc}
        </div>
        <Link
          href={dest}
          className='flex gap-x-1.5 items-center text-[#A93E41] text-sm self-end hover:bg-gray-50 bg-white px-1.5 py-0.5 rounded'
        >
          <span>More</span>
          <CircleArrowOutUpRightIcon size={14} />
        </Link>
      </div>
    </div>
  )
}
