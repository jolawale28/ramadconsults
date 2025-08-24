// import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Header from "@/components/layouts/Header";
import Image from "next/image";
import Footer from "@/components/layouts/Footer";
import {
  ChevronRight
} from "lucide-react";
import VisionHeroBanner from "@/components/VisionHeroBanner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function ProjectView() {
  return (
    <>
      <Head>
        <title>Lagos Project :: Ramad Consultants Ltd.</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />

        {/* <!-- Favicons --> */}
        <link href="/images/favicon.png" rel="icon" />
      </Head>

      <Header />

      <section className="screenFrame lg:px-[50px] px-[12px] text-center flex flex-col lg:gap-y-8 gap-y-3 justify-center items-center py-14">
        <div className="flex items-center gap-x-2 text-xs">
          <div>Projects</div>
          <div>
            <ChevronRight size={14} />
          </div>
          <div className="font-bold">
            Entertainment Parks (Abuja & Port Harcourt)
          </div>
        </div>
        <h1 className="lg:text-5xl text-3xl font-semibold lg:w-[600px]">
          Entertainment Parks (Abuja & Port Harcourt)
        </h1>
        <div className="text-gray-500 text-lg font-light md:w-[600px]">
          Ongoing design of expansive recreational park projects in both Abuja
          and Port Harcourt, delivering fun, safe, and sustainable leisure
          environments.
        </div>
      </section>

      <section className="">
        <div>
          <div className="h-[600px] relative">
            <Image
              src="/images/building.jpg"
              fill
              objectFit="cover"
              alt="building"
            />
          </div>
        </div>
      </section>

      <section className="bg-white screenFrame lg:px-[50px] px-[12px] lg:py-28 py-8">
        <div className="border border-gray-200 rounded-lg p-5 flex lg:flex-row flex-col justify-between items-center text-center lg:text-start gap-y-5 lg:gap-y-0 px-10">
          <div className="md:space-y-2 space-y-1">
            <div className="text-[#404040] text-xs">Architect</div>
            <div className="text-[#404040] font-semibold">Mr. Michael</div>
          </div>
          <div className="md:space-y-2 space-y-1">
            <div className="text-[#404040] text-xs">Location</div>
            <div className="text-[#404040] font-semibold">Abuja, Nigeria</div>
          </div>
          <div className="md:space-y-2 space-y-1">
            <div className="text-[#404040] text-xs">Project Type</div>
            <div className="text-[#404040] font-semibold">
              Commercial, Recreation
            </div>
          </div>
          <div className="md:space-y-2 space-y-1">
            <div className="text-[#404040] text-xs">Status</div>
            <div className="text-[#404040] font-semibold flex gap-x-2 items-center">
              <div className="size-[15px] rounded-full bg-green-400/15 flex items-center justify-center">
                <div className="size-[8px] rounded-full bg-green-400 animate-pulse duration-100">
                  &nbsp;
                </div>
              </div>
              <div>Ongoing</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FBFAF8] screenFrame lg:px-[50px] px-[12px] lg:py-28 py-8">
        <div className="space-y-10">
          <div className="space-y-5">
            <h3 className="font-semibold text-[40px]">
              Planning -{" "}
              <span className="text-[#A93E41] italic">
                Architectural Designs
              </span>
            </h3>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
              <div className="relative h-[380px] rounded-lg overflow-hidden">
                <Image
                  src="/images/project_grid_card3.jpg"
                  fill
                  objectFit="cover"
                  alt="supervising"
                />
              </div>
              <div className="relative h-[380px] rounded-lg overflow-hidden">
                <Image
                  src="/images/project_grid_card3.jpg"
                  fill
                  objectFit="cover"
                  alt="supervising"
                />
              </div>
              <div className="relative h-[380px] rounded-lg overflow-hidden">
                <Image
                  src="/images/project_grid_card3.jpg"
                  fill
                  objectFit="cover"
                  alt="supervising"
                />
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="font-semibold text-[40px]">
              Landscaping -{" "}
              <span className="text-[#A93E41] italic">
                Site Pictures
              </span>
            </h3>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
              <div className="relative h-[380px] rounded-lg overflow-hidden">
                <Image
                  src="/images/md_supervising.jpg"
                  fill
                  objectFit="cover"
                  alt="supervising"
                />
              </div>
              <div className="relative h-[380px] rounded-lg overflow-hidden">
                <Image
                  src="/images/md_supervising.jpg"
                  fill
                  objectFit="cover"
                  alt="supervising"
                />
              </div>
              <div className="relative h-[380px] rounded-lg overflow-hidden">
                <Image
                  src="/images/md_supervising.jpg"
                  fill
                  objectFit="cover"
                  alt="supervising"
                />
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="font-semibold text-[40px]">
              Completion
            </h3>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
              <div className="relative h-[380px] rounded-lg overflow-hidden">
                <Image
                  src="/images/md_supervising.jpg"
                  fill
                  objectFit="cover"
                  alt="supervising"
                />
              </div>
              <div className="relative h-[380px] rounded-lg overflow-hidden">
                <Image
                  src="/images/md_supervising.jpg"
                  fill
                  objectFit="cover"
                  alt="supervising"
                />
              </div>
              <div className="relative h-[380px] rounded-lg overflow-hidden">
                <Image
                  src="/images/md_supervising.jpg"
                  fill
                  objectFit="cover"
                  alt="supervising"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <VisionHeroBanner />

      <Footer />
    </>
  );
}
