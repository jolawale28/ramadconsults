// import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Header from "@/components/layouts/Header";
import Image from "next/image";
import Footer from "@/components/layouts/Footer";
import VisionHeroBanner from "@/components/VisionHeroBanner";
import ProjectsViewGallery from "@/components/homepage/ProjectsViewGallery";
import HomepageCarousel from "@/components/HomepageCarousel";
import SEOMetadata from "@/components/SEOMetadata";
import { usePathname } from "next/navigation";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Projects() {

  const pathname = usePathname()

  return (
    <>
      <SEOMetadata
        title="Projects :: Ramad Consultants Ltd."
        description="Ramad Engineering Consultants, best practitioners of architectural and engineering excellence."
        keywords="Engineering, Consultants, Nigeria, Ramad, Architecture, Structural, Civil, Mechanical, Electrical, Plumbing, Design, Construction, Project Management, Projects Management, Building, Infrastructure, Sustainable, Innovative, Solutions"
        url={process.env.NEXT_PUBLIC_SITE_URL + pathname}
        image="https://ramadconsulting.com/assets/images/favicon.png"
      />
      <Head>
        <meta content="" name="description" />
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
          <div className="overflow-hidden rounded-lg">
            <HomepageCarousel />
          </div>
        </div>
      </section>

      <ProjectsViewGallery />

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
