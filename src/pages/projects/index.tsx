// import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Header from "@/components/layouts/Header";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layouts/Footer";
import {
  CircleChevronLeft,
  CircleChevronRight,
  MapPinCheckInsideIcon,
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

export default function Projects() {

  return (
    <>
      <Head>
        <title>Projects :: Ramad Consultants Ltd.</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />

        {/* <!-- Favicons --> */}
        <link href="/images/favicon.png" rel="icon" />
      </Head>

      <Header />

      <section className="screenFrame lg:px-[50px] px-[12px] text-center flex flex-col lg:gap-y-8 gap-y-3 justify-center items-center py-14">
        <h1 className="lg:text-5xl text-3xl font-semibold">Projects</h1>
        <div className="text-gray-500 text-lg font-light md:w-[600px]">
          Our diverse portfolio showcases the depth of our expertise and
          commitment to quality. We&apos;ve delivered innovative, high-impact
          projects across Nigeria from advanced healthcare facilities to major
          commercial developments. Below are highlights of our team&apos;s key
          contributions.
        </div>
      </section>

      <section className="">
        <div>
          <div className="h-[400px] relative">
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
        <div className="space-y-5">
          <h3 className="font-semibold text-[40px]">
            Featured <span className="text-[#A93E41] italic">Projects</span>
          </h3>
          <div className="relative lg:h-[574px] h-[430px]">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/project_grid_card.jpg"
                fill
                objectFit="cover"
                alt="project_gallery"
              />
              <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black flex flex-col justify-start lg:justify-end">
                <div className="lg:p-10 p-5">
                  <div className="md:w-[670px] w-full">
                    <div className="px-2 py-1 rounded-full border border-[#A93E41] text-white bg-[#A93E41] text-[10px] flex gap-x-1 w-fit items-center">
                      <MapPinCheckInsideIcon size={12} />
                      <span>Lagos</span>
                    </div>
                    <h2 className="text-white font-extrabold lg:text-[40px] text-[30px] lg:leading-[2.5rem] leading-[1.9rem] mt-3 mb-3">
                      Entertainment Parks (Abuja & Port Harcourt)
                    </h2>
                    <p className="text-base leading-[23px] tracking-[-0.5px] text-white">
                      Ongoing design of expansive recreational park projects in
                      both Abuja and Port Harcourt, delivering fun, safe, and
                      sustainable leisure environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Left to Right Control */}
            <div className="absolute right-5 bottom-5 lg:pb-10 lg:pe-10 pb-5 pe-5">
              <div className="flex gap-x-2 text-white">
                <button
                  type="button"
                  title="Slide left"
                  className="cursor-pointer"
                >
                  <CircleChevronLeft
                    size={40}
                    strokeWidth={1}
                    className="hover:bg-white/30 rounded-full transition-colors"
                  />
                </button>
                <button
                  type="button"
                  title="Slide right"
                  className="cursor-pointer"
                >
                  <CircleChevronRight
                    size={40}
                    strokeWidth={1}
                    className="hover:bg-white/30 rounded-full transition-colors"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white screenFrame lg:px-[50px] px-[12px] lg:py-28 py-8">
        <div className="space-y-5">
          <h3 className="font-semibold text-[40px]">
            Projects <span className="text-[#A93E41] italic">Gallery</span>
          </h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, idx) => (
              <Link
                href="/projects/123"
                className="border border-gray-200 rounded-lg overflow-hidden group"
                key={`hugfjyf_${idx}`}
              >
                <div className="h-[200px] overflow-hidden">
                  <div className="relative h-full group-hover:scale-105 transition-transform duration-200">
                    <Image
                      src="/images/clients_trust_1.jpg"
                      fill
                      objectFit="cover"
                      alt="project_image"
                    />
                  </div>
                </div>
                <div className="p-3 space-y-3">
                  <div className="border border-[#A93E41] rounded-full px-2 py-0.5 font-medium text-xs text-[#A93E41] w-fit">
                    Gombe
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-[20px] leading-[100%] tracking-[3%] group-hover:text-[#A93E41]">
                      Gombe State High Court & House of Assembly Complex (Gombe)
                    </div>
                    <div className="text-gray-500 text-sm tracking-[-0.5px] leading-[18px]">
                      Engineering design of a government judicial and
                      legislative complex
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FBFAF8] screenFrame lg:px-[50px] px-[12px] lg:py-28 py-8">
        <div className="lg:w-[900px] w-full text-center md:text-[30px] text-[20px] lg:leading-[40px] lg:tracking-[-3%] mx-auto">
          <span className="text-[#A93E41]">
            These are just a few examples of the diverse projects we have worked
            on.
          </span>{" "}
          We approach every project-big or small-with the same level of
          dedication and excellence. Our ability to adapt to different sectors
          (healthcare, commercial, public sector, industrial, residential)
          demonstrates our versatility as engineers and consultants.
        </div>
      </section>

      <VisionHeroBanner />

      <Footer />
    </>
  );
}
