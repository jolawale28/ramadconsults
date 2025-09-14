import Image from "next/image";
import Link from "next/link";

export default function VisionHeroBanner () {
  return (
    <section className='screenFrame lg:px-[50px] px-[12px] lg:py-28 py-8'>
      <div className='h-[388px] relative'>
        <div className='bg-[#A93E41] w-full h-full relative overflow-hidden rounded-xl flex items-center justify-center text-white'>
          <div className='w-full h-full absolute inset-0'>
            <Image
              src='/images/patterns/flash_pattern.png'
              fill
              objectFit='cover'
              alt='pattern'
            />
          </div>
          <div className='text-center w-[550px] space-y-6 p-5 md:p-0 z-1'>
            <div className='font-semibold text-[40px] leading-[100%] tracking-[-4%]'>
              Let&apos;s Bring Your Vision to Life
            </div>
            <div className='text-[18px] leading-[100%] tracking-[-0.5px]'>
              From idea to execution, we&apos;re here to support every step.
              Reach out to start your project today.
            </div>
            <div className='text-sm flex gap-x-3 items-center justify-center'>
              <Link
                href='/contact'
                className='text-white bg-[#A93E41] border border-white rounded-[12px] py-[8px] px-[11px]'
              >
                Contact us
              </Link>
              <Link
                href='/projects'
                className='text-[#A93E41] bg-white rounded-[12px] py-[8px] px-[11px]'
              >
                View Projects
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
