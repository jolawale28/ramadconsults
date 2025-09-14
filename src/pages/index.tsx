// import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Header from "@/components/layouts/Header";
import Link from "next/link";
import Image from "next/image";
import SectionProjectsDelivered from "@/components/homepage/SectionProjectsDelivered";
import ProjectsViewGallery from "@/components/homepage/ProjectsViewGallery";
import {
  AgreementShakeIcon,
  BuildingIcon,
  UserGroupIcon,
  WorldGlobeIcon,
} from "@/Icons";
import Footer from "@/components/layouts/Footer";
import VisionHeroBanner from "@/components/VisionHeroBanner";
import HomepageCarousel from "@/components/HomepageCarousel";

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
          <div className="bg-[#000000] text-white w-fit py-0.5 px-[8px] md:py-1.5 md:px-[10px] rounded-full font-semibold">
            Introducing
          </div>
          <div className="me-3 text-wrap">
            Our newly revamped website 🥳{" "}
            <Link href='/docs/RAMAD_BROCHURE.pdf' className="underline hidden md:inline-block">
              click here to see our brochure
            </Link>{" "}
          </div>
        </div>
        <h1 className="md:text-[54px] text-[42px] leading-[100%] tracking-[-4%] lg:w-[871px] w-full">
          <span className="font-semibold ">Building the future with</span>{" "}
          <span className="italic text-[#A93E41]">
            Innovative Engineering Solutions
          </span>
        </h1>
        <div className="md:w-[671px] w-full md:text-[18px] text-md leading-[25px] tracking-[-0.5px] text-[#404040]">
          At RAMAD Consultants Ltd, we specialize in delivering cost-effective,
          cutting-edge engineering design services across Nigeria and beyond.
        </div>
        <Link
          href="/contact"
          className="bg-[#A93E41] hover:bg-[#8b3f41] text-white font-semibold px-3 py-2.5 md:text-sm text-xs rounded-xl text-nowrap"
        >
          Contact our team
        </Link>
      </section>

      <section>
        <HomepageCarousel />
      </section>

      <section className="screenFrame lg:px-[50px] px-[12px] grid md:grid-cols-2 grid-col-3 gap-10 lg:py-28 py-8">
        <div className="w-full md:h-full h-[250px] shrink-0 grow-0 basis-full relative rounded-[20px] overflow-hidden">
          <Image
            src="/images/about_section.jpg"
            fill
            objectFit="cover"
            alt="about image"
          />
        </div>
        <div className="space-y-2">
          <div className="border border-[#A93E41] rounded-full px-2.5 text-[#A93E41] py-0.5 font-semibold text-sm w-fit">
            About Us
          </div>
          <div className="text-2xl leading-[40px] tracking-[-3%]">
            <span className="text-[#A93E41] italic">
              With offices in Abuja and Lagos, RAMAD Consultants delivers
            </span>{" "}
            structural, civil, and MEP engineering solutions with a focus on
            innovation and excellence. Powered by advanced technologies like
            Building Information Modelling (BIM), our expert team ensures
            high-performance results that ensure success on every project.
          </div>
        </div>
      </section>

      <SectionProjectsDelivered />

      <ProjectsViewGallery />

      <section className="screenFrame lg:px-[50px] px-[12px] lg:py-28 py-8 bg-gray-50">
        <h2 className="text-[40px] leading-[2.5rem] tracking-[-3%] m-0 mb-24 lg:w-[576px] w-full text-center mx-auto">
          <span className="font-semibold">Why Clients trust</span>{" "}
          <span className="text-[#A93E41] italic">Ramad Consultants Ltd.</span>
        </h2>

        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-24 gap-8 lg:mb-24 mb-12">
          <div className="md:h-full h-[300px] shrink-0 rounded-lg overflow-hidden w-full relative">
            <Image
              src="/images/clients_trust_1.jpg"
              fill
              objectFit="cover"
              alt="clientsTrust"
            />
          </div>
          <div className="space-y-5">
            <div className="text-[28px] leading-[36px] tracking-[-3%]">
              Engineered for Efficiency. <br />
              Trusted for Delivery.
            </div>
            <div>
              <BuildingIcon />
              <div>
                <div className="font-semibold text-[22px] leading-[100%] tracking-[-3%] mb-2 mt-1">
                  Ready for Complex Builds
                </div>
                <div className="text-gray-500 text-[16px] leading-[25px] tracking-[-0.5px]">
                  We design and manage structures, MEP systems, and
                  infrastructure projects no matter the scale or complexity.
                </div>
              </div>
            </div>
            <div>
              <UserGroupIcon />
              <div>
                <div className="font-semibold text-[22px] leading-[100%] tracking-[-3%] mb-2 mt-1">
                  Powered by Precision
                </div>
                <div className="text-gray-500 text-[16px] leading-[25px] tracking-[-0.5px]">
                  With tools like BIM and a detail-driven team, we deliver
                  accuracy, speed, and seamless collaboration from day one.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-24 gap-8">
          <div className="space-y-5">
            <div className="text-[28px] leading-[36px] tracking-[-3%]">
              Built for Experience. <br />
              Designed for the World.
            </div>
            <div>
              <WorldGlobeIcon />
              <div>
                <div className="font-semibold text-[22px] leading-[100%] tracking-[-3%] mb-2 mt-1">
                  Nationwide Expertise to International Standards
                </div>
                <div className="text-gray-500 text-[16px] leading-[25px] tracking-[-0.5px]">
                  Our designs adhere to globally recognized standards,
                  delivering quality, safety, and performance on every project.
                </div>
              </div>
            </div>
            <div>
              <AgreementShakeIcon />
              <div>
                <div className="font-semibold text-[22px] leading-[100%] tracking-[-3%] mb-2 mt-1">
                  End-to-End Commitment
                </div>
                <div className="text-gray-500 text-[16px] leading-[25px] tracking-[-0.5px]">
                  We stay involved from the first sketch to completion ensuring
                  your project stays on time and on budget.
                </div>
              </div>
            </div>
          </div>

          <div className="h-full rounded-lg overflow-hidden w-full relative">
            <Image
              src="/images/team_walking.jpg"
              fill
              objectFit="cover"
              alt="clientsTrust"
            />
          </div>
        </div>
      </section>

      <VisionHeroBanner />

      <Footer />
    </>
  );
}
