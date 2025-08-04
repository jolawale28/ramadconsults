import { AlignRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react";
import { FacebookIcon, InstagramIcon, LinkedIn } from '../../Icons'
import { usePathname } from "next/navigation";

export default function Header() {

  const pathname = usePathname()
  console.log(pathname.includes('about'));

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <>
      <header className='py-4 text-[#404040] shadow shadow-[#EAECF0]/35'>
        <div className='flex items-center justify-between screenFrame lg:px-[50px] px-[12px] text-sm'>
          <div className='shrink-0'>
            <Image
              src={'/images/logo.png'}
              width={105}
              height={24}
              alt='Ramad logo'
            />
          </div>
          <div className='basis-[436px] shrink-0 grow-0 hidden lg:inline-block'>
            <ul className='flex justify-between'>
              <li className={`${pathname === '/' && 'text-primaryColor font-bold'} hover:text-primaryColor`}>
                <Link href='/' className=''>
                  Home
                </Link>
              </li>
              <li className={`${pathname.includes('about') && 'text-primaryColor font-bold'} hover:text-primaryColor`}>
                <Link href='/about' className=''>
                  About
                </Link>
              </li>
              <li className={`${pathname.includes('services') && 'text-primaryColor font-bold'} hover:text-primaryColor`}>
                <Link href='/services' className=''>
                  Services
                </Link>
              </li>
              <li className={`${pathname.includes('contact') && 'text-primaryColor font-bold'} hover:text-primaryColor`}>
                <Link href='/contact' className=''>
                  Contact
                </Link>
              </li>
              <li className={`${pathname.includes('projects') && 'text-primaryColor font-bold'} hover:text-primaryColor`}>
                <Link href='/projects' className=''>
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex items-center gap-x-3'>
            <Link
              href='/projects'
              className='border border-[#EAECF0] hover:border-[#8b3f41] hover:text-[#8b3f41] transition-colors text-[#404040] font-semibold px-3 py-2.5 rounded-xl hidden md:inline-block text-nowrap'
            >
              View Projects
            </Link>
            <Link
              href='/brochure'
              className='bg-[#A93E41] hover:bg-[#8b3f41] text-white font-semibold px-3 py-2.5 md:text-sm text-xs rounded-xl text-nowrap'
            >
              Download Brochure
            </Link>
            <button
              title='Menu'
              type='button'
              className='border border-[#EAECF0] p-2 rounded-lg cursor-pointer lg:hidden'
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <AlignRight />
            </button>
          </div>
        </div>

        <AnimatePresence>

          {
            showMobileMenu && (
              <motion.div
                initial={{ right: -375 }}
                animate={{ right: 0 }}
                exit={{ right: -375 }}
                className="fixed top-0 right-0 md:w-[375px] w-full h-screen bg-white border border-[#EAECF0] flex flex-col lg:hidden overscroll-contain z-50">
                <div className="py-4 px-4 flex justify-between items-center text-[#404040] border border-bottom border-[#EAECF0]">
                  <div className='shrink-0'>
                    <Image
                      src={'/images/logo.png'}
                      width={105}
                      height={24}
                      alt='Ramad logo'
                    />
                  </div>
                  <div className="flex items-center gap-x-3">
                    <Link
                      href='/'
                      className='bg-[#A93E41] hover:bg-[#8b3f41] text-white font-semibold px-3 py-2.5 md:text-sm text-xs rounded-xl text-nowrap'
                    >
                      Download Brochure
                    </Link>
                    <button type="button" title="Close" className="cursor-pointer"
                      onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                      <X />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-between grow">
                  <div>
                    <div className="text-[#404040]">
                      <div className="font-bold text-base py-5 px-4 border-[#EAECF0] border-b"><Link href="/" className="text-[#A93E41]">Home</Link></div>
                      <div className="border-[#EAECF0] border-b px-4 py-5"><Link href="/about" className="hover:text-[#A93E41]">About</Link></div>
                      <div className="border-[#EAECF0] border-b px-4 py-5"><Link href="/services" className="hover:text-[#A93E41]">Services</Link></div>
                      <div className="border-[#EAECF0] border-b px-4 py-5"><Link href="/contact" className="hover:text-[#A93E41]">Contact</Link></div>
                      <div className="border-[#EAECF0] border-b px-4 py-5"><Link href="/projects" className="hover:text-[#A93E41]">Projects</Link></div>
                    </div>

                    <div className="px-4 py-5 space-y-2">
                      <div className="uppercase text-[8px] text-gray-500">Socials:</div>
                      <div className="flex gap-x-2 items-center -ms-1">
                        <Link href="/ramadinstagram"><InstagramIcon stylingClass="hover:text-[#A93E41]" /></Link>
                        <Link href="/facebookramad"><FacebookIcon stylingClass="hover:text-[#A93E41]" /></Link>
                        <Link href=""><LinkedIn stylingClass="hover:text-[#A93E41]" /></Link>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-4 text-xs">&copy;{(new Date()).getFullYear()} Ramad Consultants Ltd.&trade;</div>
                </div>
              </motion.div>
            )
          }

        </AnimatePresence>
      </header>
    </>
  )
}
