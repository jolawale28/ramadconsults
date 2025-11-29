import { LinkedIn } from "@/Icons";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='screenFrame lg:px-[50px] px-[12px] pb-28 pt-10 border-t border-gray-200/70'>
      <div className='grid lg:grid-cols-4 grid-cols-1 md:gap-5 lg:gap-10'>
        <div className='order-3 md:order-1 mt-5 md:mt-0'>
          <div className='relative w-[150px] h-[50px]'>
            <Image
              src='/images/logo.png'
              fill
              objectFit='contain'
              alt='logo_footer'
            />
          </div>
          <div className='text-sm text-gray-500 mt-5'>
            RAMAD CONSULTS is a full service construction company offering
            engineering solutions from start to finish. We have been operating
            as leading experts for years providing excellent workmanship and
            quality delivery.
          </div>
          <div className='mt-5 flex gap-x-2'>
            {/* <Link href='' className=''>
              <FacebookIcon />
            </Link>
            <Link href='' className=''>
              <InstagramIcon />
            </Link> */}
            <Link href='https://www.linkedin.com/company/ramad-consultants-ltd/' className=''>
              <LinkedIn />
            </Link>
          </div>
        </div>
        <div className='lg:order-2 order-1 hidden md:inline-block'>
          <h3 className='text-xl text-gray-700 mt-5'>Office Address</h3>
          <div className='mt-3 text-sm text-gray-500'>
            <strong>Abuja Office:</strong> No 29, Tai Solarin Street, Gwarimpa 5th Avenue, Abuja.
          </div>
          <div className='mt-3 text-sm text-gray-500'>
            <strong>Lagos Office:</strong> Block 2A, Road 32, Empire Court,
            Ikota Villa Estate, Lekki, Lagos, Nigeria.
          </div>
          <div className='mt-3 text-sm text-gray-500'>
            <strong>Email:</strong> info@ramadconsulting.com
          </div>
          <div className='mt-3 text-sm text-gray-500'>
            <strong>Mobile:</strong> +234 803 641 2958
          </div>
        </div>
        <div className='md:order-3 order-2'>
          <h3 className='text-xl text-gray-700 mt-5'>Quick Links</h3>
          <div className='flex flex-col gap-y-3 mt-5 text-gray-400 text-sm'>
            <Link href='/' className='hover:text-[#A93E41]'>
              Home
            </Link>
            <Link href='/' className='hover:text-[#A93E41]'>
              About
            </Link>
            <Link href='/' className='hover:text-[#A93E41]'>
              Services
            </Link>
            <Link href='/' className='hover:text-[#A93E41]'>
              Projects
            </Link>
            <Link href='/' className='hover:text-[#A93E41]'>
              Contact
            </Link>
          </div>
        </div>
        <div className='md:order-4 order-4'>
          <h3 className='text-xl text-gray-700 mt-5'>Working Hours</h3>
          <div className='flex flex-col gap-y-3 mt-5 text-gray-400 text-sm'>
            <div className='text-sm text-gray-500'>
              <strong>Weekdays:</strong> 09:00 - 18:00
            </div>
            <div className='text-sm text-gray-500'>
              <strong>Weekend:</strong> 09:00 - 18:00
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
