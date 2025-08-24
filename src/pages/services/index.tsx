// import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Header from "@/components/layouts/Header";
import Image from "next/image";
import Footer from "@/components/layouts/Footer";
import VisionHeroBanner from "@/components/VisionHeroBanner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Services() {

  return (
    <>
      <Head>
        <title>Services :: Ramad Consultants Ltd.</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />

        {/* <!-- Favicons --> */}
        <link href="/images/favicon.png" rel="icon" />
      </Head>

      <Header />

      <section className="screenFrame lg:px-[50px] px-[12px] text-center flex flex-col gap-y-8 justify-center items-center py-14">
        <h1 className="md:text-[54px] text-[42px] leading-[100%] tracking-[-4%] lg:w-[871px] w-full">
          <span className="font-semibold ">Your Vision</span> <br />
          <span className="italic text-[#A93E41]">Our Engineering</span>
        </h1>

        <div className="text-lg font-normal text-[#404040]">
          From Concept to Completion
        </div>
      </section>

      <section className="screenFrame lg:px-[50px] px-[12px] lg:py-28 py-8">
        <div className="grid md:grid-cols-2 grid-col-3 gap-10">
          <div className="w-full md:h-full h-[250px] shrink-0 grow-0 basis-full relative rounded-[20px] overflow-hidden">
            <Image
              src="/images/about_section.jpg"
              fill
              objectFit="cover"
              alt="about image"
            />
          </div>
          <div className="space-y-2 text-[30px]">
            <span className="text-[#A93E41] italic">
              RAMAD Consultants Ltd.
            </span>{" "}
            offers comprehensive engineering and project management services
            tailored to your needs. Our expertise spans every project lifecycle
            stage - from initial concept and design to execution and ongoing
            support. Below is an overview of our key services:
          </div>
        </div>
      </section>

      <section className="bg-[#FBFAF8] screenFrame lg:px-[50px] px-[12px] lg:py-28 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, idx) => (
            <div key = {`jgytfdgh${idx}`} className="rounded-lg overflow-hidden border border-gray-200">
              <div className="relative h-[250px]">
                <Image
                  src="/images/building.jpg"
                  alt="building"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="p-4 space-y-3">
                <div className="text-[28px] font-semibold leading-[1.2]">
                  Structural Assessments & Integrity Surveys
                </div>
                <div className="text-[18px] text-[#404040]">
                  We perform non-destructive structural integrity assessments
                  and condition surveys using advanced techniques to pinpoint
                  weaknesses in buildings, bridges, and other structures and
                  deliver expert repair and reinforcement recommendations to
                  ensure safety, longevity, and regulatory compliance.
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <VisionHeroBanner />

      <Footer />
    </>
  );
}
