// import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Header from "@/components/layouts/Header";
import Link from "next/link";
import Image from "next/image";
import { CircleChevronLeft, CircleChevronRight, MapPinCheckInsideIcon } from "lucide-react";
import SectionProjectsDelivered from "@/components/homepage/SectionProjectsDelivered";
import ProjectsViewGallery from "@/components/homepage/ProjectsViewGallery";
import { AgreementShakeIcon, BuildingIcon, UserGroupIcon, WorldGlobeIcon } from "@/Icons";
import Footer from "@/components/layouts/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home :: Ramad Consultants Ltd.</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />

        {/* <!-- Favicons --> */}
        <link href="/images/favicon.png" rel="icon" />
      </Head>

      <Header />

      <section className="screenFrame lg:px-[50px] px-[12px] text-center flex flex-col gap-y-8 justify-center items-center py-14">
        <div className="bg-[#F2F2F2] w-fit h-fit rounded-full flex flex-wrap gap-x-2 justify-between items-center md:text-sm text-[10px]">
          <div className="bg-[#000000] text-white w-fit py-0.5 px-[8px] md:py-1.5 md:px-[10px] rounded-full font-semibold">Introducing</div>
          <div className="me-3 text-wrap">Our newly revamped website 🥳 <Link href="/brochure" className="underline hidden md:inline-block">click here to see our brochure</Link> </div>
        </div>
        <h1 className="md:text-[54px] text-[42px] leading-[100%] tracking-[-4%] lg:w-[871px] w-full">
          <span className="font-semibold ">Building the future with</span> <span className="italic text-[#A93E41]">Innovative Engineering Solutions</span>
        </h1>
        <div className="md:w-[671px] w-full md:text-[18px] text-md leading-[25px] tracking-[-0.5px] text-[#404040]">
          At RAMAD Consultants Ltd, we specialize in delivering cost-effective, cutting-edge engineering design services across Nigeria and beyond.
        </div>
        <Link href="" className="bg-[#A93E41] hover:bg-[#8b3f41] text-white font-semibold px-3 py-2.5 md:text-sm text-xs rounded-xl text-nowrap">Contact our team</Link>
      </section>

      <section>
        <div className="relative w-full lg:h-[574px] h-[380px] overflow-hidden">
          <Image src="/images/hero_banner.jpg" fill objectFit="cover" alt="Hero banner 1" />
          <div className="absolute inset-0 w-full h-full bg-black/40 screenFrame lg:px-[50px] px-[12px] flex flex-col justify-between lg:p-14 p-5">
            <div className="md:w-[670px] w-full">
              <div className="px-2 py-1 rounded-full border border-[#A93E41] text-white bg-[#A93E41] text-[10px] flex gap-x-1 w-fit items-center">
                <MapPinCheckInsideIcon size={12} />
                <span>Lagos</span>
              </div>
              <h2 className="text-white font-extrabold md:text-[52px] text-4xl leading-[2.2rem] md:leading-[3.5rem] mt-5 mb-5">Entertainment Parks (Abuja & Port Harcourt)</h2>
              <p className="md:text-xl text-md leading-[22px] tracking-[-0.5px] text-white">Ongoing design of expansive recreational park projects in both Abuja and Port Harcourt, delivering fun, safe, and sustainable leisure environments.</p>
            </div>

          </div>
          <div className="flex justify-between items-center text-sm screenFrame lg:px-[50px] px-[12px] lg:p-14 p-5 absolute bottom-0 left-0 w-full">
            <div className="flex gap-x-1.5 items-end text-[10px] text-gray-400">
              <div className="text-white">01</div>
              <div>/</div>
              <div>05</div>
            </div>
            <div className="flex gap-x-2 text-white">
              <button type="button" title="Slide left" className="cursor-pointer"><CircleChevronLeft size={40} strokeWidth={1} className="hover:bg-white/30 rounded-full transition-colors" /></button>
              <button type="button" title="Slide right" className="cursor-pointer"><CircleChevronRight size={40} strokeWidth={1} className="hover:bg-white/30 rounded-full transition-colors" /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="screenFrame lg:px-[50px] px-[12px] grid md:grid-cols-2 grid-col-3 gap-10 lg:py-28 py-8">
        <div className="w-full md:h-full h-[250px] shrink-0 grow-0 basis-full relative rounded-[20px] overflow-hidden">
          <Image src="/images/about_section.jpg" fill objectFit="cover" alt="about image" />
        </div>
        <div className="space-y-2">
          <div className="border border-[#A93E41] rounded-full px-2.5 text-[#A93E41] py-0.5 font-semibold text-sm w-fit">About Us</div>
          <div className="text-2xl leading-[40px] tracking-[-3%]">
            <span className="text-[#A93E41] italic">With offices in Abuja and Lagos, RAMAD Consultants delivers</span> structural, civil, and MEP engineering solutions with a focus on innovation and excellence. Powered by advanced technologies like Building Information Modelling (BIM), our expert team ensures high-performance results that ensure success on every project.
          </div>
        </div>
      </section>

      <SectionProjectsDelivered />

      <ProjectsViewGallery />

      <section className="screenFrame lg:px-[50px] px-[12px] lg:py-28 py-8 bg-gray-50">
        <h2 className='text-[40px] leading-[2.5rem] tracking-[-3%] m-0 mb-24 lg:w-[576px] w-full text-center mx-auto'>
          <span className='font-semibold'>
            Why Clients trust
          </span>{' '}
          <span className='text-[#A93E41] italic'>Ramad Consultants Ltd.</span>
        </h2>

        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-24 gap-8 lg:mb-24 mb-12">
          <div className="md:h-full h-[300px] shrink-0 rounded-lg overflow-hidden w-full relative">
            <Image src="/images/clients_trust_1.jpg" fill objectFit="cover" alt="clientsTrust" />
          </div>
          <div className="space-y-5">
            <div className="text-[28px] leading-[36px] tracking-[-3%]">Engineered for Efficiency. <br />Trusted for Delivery.</div>
            <div>
              <BuildingIcon />
              <div>
                <div className="font-semibold text-[22px] leading-[100%] tracking-[-3%] mb-2 mt-1">Ready for Complex Builds</div>
                <div className="text-gray-500 text-[16px] leading-[25px] tracking-[-0.5px]">We design and manage structures, MEP systems, and infrastructure projects  no matter the scale or complexity.</div>
              </div>
            </div>
            <div>
              <UserGroupIcon />
              <div>
                <div className="font-semibold text-[22px] leading-[100%] tracking-[-3%] mb-2 mt-1">Powered by Precision</div>
                <div className="text-gray-500 text-[16px] leading-[25px] tracking-[-0.5px]">With tools like BIM and a detail-driven team, we deliver accuracy, speed, and seamless collaboration from day one.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-24 gap-8">

          <div className="space-y-5">
            <div className="text-[28px] leading-[36px] tracking-[-3%]">Built for Experience. <br />Designed for the World.</div>
            <div>
              <WorldGlobeIcon />
              <div>
                <div className="font-semibold text-[22px] leading-[100%] tracking-[-3%] mb-2 mt-1">Nationwide Expertise to International Standards</div>
                <div className="text-gray-500 text-[16px] leading-[25px] tracking-[-0.5px]">Our designs adhere to globally recognized standards, delivering quality, safety, and performance on every project.</div>
              </div>
            </div>
            <div>
              <AgreementShakeIcon />
              <div>
                <div className="font-semibold text-[22px] leading-[100%] tracking-[-3%] mb-2 mt-1">End-to-End Commitment</div>
                <div className="text-gray-500 text-[16px] leading-[25px] tracking-[-0.5px]">We stay involved from the first sketch to completion ensuring your project stays on time and on budget.</div>
              </div>
            </div>
          </div>

          <div className="h-full rounded-lg overflow-hidden w-full relative">
            <Image src="/images/team_walking.jpg" fill objectFit="cover" alt="clientsTrust" />
          </div>
        </div>
      </section>

      <section className="screenFrame lg:px-[50px] px-[12px] lg:py-28 py-8">
        <div className="h-[388px] relative">
          <div className="bg-[#A93E41] w-full h-full relative overflow-hidden rounded-xl flex items-center justify-center text-white">
            <div className="text-center w-[550px] space-y-6 p-5 md:p-0">
              <div className="font-semibold text-[40px] leading-[100%] tracking-[-4%]">Let&apos;s Bring Your Vision to Life</div>
              <div className="text-[18px] leading-[100%] tracking-[-0.5px]">From idea to execution, we&apos;re here to support every step. Reach out to start your project today.</div>
              <div className="text-sm flex gap-x-3 items-center justify-center">
                <Link href="/contact" className="text-white bg-[#A93E41] border border-white rounded-[12px] py-[8px] px-[11px]">Contact us</Link>
                <Link href="/projects" className="text-[#A93E41] bg-white rounded-[12px] py-[8px] px-[11px]">View Projects</Link>
              </div>
            </div>
            <div className="w-full h-full absolute inset-0">
              <Image src="/images/patterns/flash_pattern.png" fill objectFit="cover" alt="pattern" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
