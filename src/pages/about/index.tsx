// import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Header from "@/components/layouts/Header";
import Link from "next/link";
import Image from "next/image";
import { CheckMarkIcon, HandShakeIcon, HumanBrainIcon, TimeManagementIcon, UserHeartIcon } from "@/Icons";
import Footer from "@/components/layouts/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function About() {

  const coreValues = [
    {
      icon: <HumanBrainIcon />,
      title: 'Innovation & Adaptability',
      content: 'By embracing emerging technologies and flexible methodologies, we continuously refine our approaches to deliver solutions that evolve with project needs and industry advancements.'
    },
    {
      icon: <CheckMarkIcon />,
      title: 'Quality Assurance',
      content: 'We uphold the highest standards of quality and craftsmanship in every deliverable by ensuring designs consistently meet international best practices and client expectations.'
    },
    {
      icon: <UserHeartIcon />,
      title: 'Integrity & Ethics',
      content: 'We conduct all our operations with complete transparency and honor our commitments, fostering trust through honest communication and ethical decision-making at every stage.'
    },
    {
      icon: <HandShakeIcon />,
      title: 'Collaborative Partnership',
      content: 'We prioritize open dialogue and active listening, working hand-in-hand with clients to tailor solutions, overcome challenges, and build long-term relationships rooted in mutual success.'
    },
    {
      icon: <TimeManagementIcon />,
      title: 'Timely Delivery',
      content: 'Through proactive planning, clear milestones, and efficient resource management, we ensure projects stay on track and are completed within—or even ahead of—the established timelines.'
    }
  ]
  return (
    <>
      <Head>
        <title>About :: Ramad Consultants Ltd.</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />

        {/* <!-- Favicons --> */}
        <link href="/images/favicon.png" rel="icon" />
      </Head>

      <Header />

      <section className="screenFrame lg:px-[50px] px-[12px] text-center flex flex-col gap-y-8 justify-center items-center py-14">
        <div className="bg-[#F2F2F2] w-fit h-fit rounded-full flex flex-wrap gap-x-2 justify-between items-center md:text-sm text-[10px]">
          <div className="bg-[#000000] text-white w-fit py-0.5 px-[8px] md:py-1.5 md:px-[10px] rounded-full font-semibold">About</div>
          <div className="me-3 text-wrap"><Link href="/brochure" className="underline md:inline-block">click here to see our brochure</Link> </div>
        </div>
        <h1 className="md:text-[54px] text-[42px] leading-[100%] tracking-[-4%] lg:w-[871px] w-full">
          <span className="font-semibold ">Engineering</span> <span className="italic text-[#A93E41]">Excellence</span>
        </h1>
        <div className="md:w-[671px] w-full md:text-[18px] text-md leading-[25px] tracking-[-0.5px] text-[#404040]">
          Founded in 2020 by Forward-thinking engineers, RAMAD Consultants Ltd. is COREN-registered and headquartered in Abuja (with a Lagos branch), trusted by private developers and public-sector clients for innovative, professional structural, civil and MEP design solutions.
        </div>
      </section>

      <section>
        <div className="relative w-full lg:h-[574px] h-[380px] overflow-hidden screenFrame lg:px-[50px] px-[12px]">
          <Image src="/images/team_in_a_conference.jpg" fill objectFit="cover" alt="Hero banner 1" />

        </div>
      </section>

      <section className="screenFrame lg:px-[50px] px-[12px] lg:py-28 py-8">
        <div className="grid md:grid-cols-2 grid-col-3 gap-10">
          <div className="w-full md:h-full h-[250px] shrink-0 grow-0 basis-full relative rounded-[20px] overflow-hidden order-2">
            <Image src="/images/md_supervising.jpg" fill objectFit="cover" alt="about image" />
          </div>
          <div className="space-y-2 order-1">
            <div className="font-semibold text-[40px]">Our Vision</div>
            <div className="text-[25px] leading-[40px] tracking-[-3%]">
              <span className="text-[#A93E41] italic font-light">To be a leading choice for engineering design services</span> your one-stop destination for structural, civil, and MEP engineering needs.
            </div>

            <div className="font-semibold text-[40px] mt-20">Our Vision</div>
            <div className="text-[25px] leading-[40px] tracking-[-3%]">
              <span className="text-[#A93E41] italic font-light">To deliver outstanding, efficient, and cost-effective engineering design solutions that meet  international safety and quality standards</span> by leveraging cutting-edge technology, continuous professional development, and an unwavering commitment to credibility, integrity, and client trust in every project.
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex justify-center">
            <div className="w-fit border border-[#A93E41] text-xs font-semibold px-4 py-1.5 rounded-full text-[#A93E41]">Our Numbers</div>
          </div>
          <div className="flex justify-center border-y border-gray-100 pb-5 pt-5 w-full lg:w-[800px] mx-auto mt-5">
            <div className="text-center basis-1/2 grow-0 shrink-0">
              <div className="font-bold text-3xl lg:text-[54px] font-consolas">200+</div>
              <div className="text-[16px] font-normal text-[#404040]">Projects</div>
            </div>

            <div className="text-center basis-1/2 grow-0 shrink-0">
              <div className="font-bold text-3xl lg:text-[54px] font-consolas">647+</div>
              <div className="text-[16px] font-normal text-[#404040]">Design Plans</div>
            </div>
          </div>
        </div>

      </section>

      <section className="bg-[#FBFAF8] screenFrame lg:px-[50px] px-[12px] lg:py-28 py-8">
        <div className="text-[40px] text-center">
          Our Core <span className="text-[#A93E41] italic">Values</span>
        </div>
        <div className="text-center text-[#404040]/70 leading-[25px] text-[18px] font-[350] w-full md:w-[498px] mx-auto">
          These values guide every decision we make, ensuring every project succeeds with integrity and excellence.
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_350px)] gap-5 justify-center justify-items-center mt-16">
          {
            coreValues.map(ele => (
              <div key = {`sersgfh_${ele.title.replaceAll(' ', '')}`} className="border border-gray-200 p-5 rounded-md space-y-2">
                <div>
                  {ele.icon}
                </div>
                <div className="font-semibold text-[24px]">{ele.title}</div>
                <div className="font-normal text-sm leading-[20px] text-[#404040]">
                  {ele.content}
                </div>
              </div>
            ))
          }
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
