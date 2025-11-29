// import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Header from "@/components/layouts/Header";
import Image from "next/image";
import Footer from "@/components/layouts/Footer";
import VisionHeroBanner from "@/components/VisionHeroBanner";
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

export default function Services() {

  const allServices = [
    {
      title: 'Structural Engineering Design',
      content: 'We provide thorough structural design for buildings and infrastructure, ensuring every project is safe, stable, and compliant with Nigerian and international building codes. Our structural engineers combine creativity with rigorous analysis to deliver designs for everything from residential complexes and high-rise towers to industrial facilities and bridges. The result is cost-effective, durable structures that stand the test of time.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Infrastructure Design',
      content: 'Our team plans and designs critical infrastructure projects across Nigeria, including roads, highways, drainage systems, and public utilities. We focus on sustainable and efficient infrastructure engineering that improves communities and supports economic growth. From transportation networks to urban development projects, we deliver infrastructure designs that meet the highest standards of safety and functionality.',
      image: '/images/services/infrastructure_design.jpg'
    },
    {
      title: 'Bridge Design',
      content: 'We offer comprehensive bridge design services, delivering safe, durable, and efficient structures tailored to site conditions and project needs. From concept development to detailed engineering, our team designs pedestrian, vehicular, and multi-span bridges that meet international standards. We prioritize structural integrity, environmental impact, and aesthetic value—ensuring every bridge enhances connectivity and stands the test of time.',
      image: '/images/services/bridge_design.jpg'
    },
    {
      title: 'MEP Design (Mechanical, Electrical and Plumbing)',
      content: 'We engineer state-of-the-art MEP systems from power and lighting to HVAC, plumbing and fire protection seamlessly integrated for peak performance, safety, energy efficiency and cost-effective reliability across projects from Lagos to Abuja.',
      image: '/images/services/mep_design.jpg'
    },
    {
      title: 'Project Management and Cost Estimation',
      content: 'We offer end-to-end project management services to keep your construction on track from inception to completion. Our certified project managers develop detailed plans, coordinate multidisciplinary teams, and manage schedules and budgets to ensure timely delivery within cost targets. By applying best practices in construction management, project schedule, planning, work preparation, dashboard and accurate cost estimation, we help mitigate risks and maximize value for our clients.',
      image: '/images/services/project_management.jpg'
    },
    {
      title: 'As-built Drawings & 3D Laser Scanning',
      content: 'We leverage cutting-edge 3D laser scanning to create precise as-built drawings and digital models of existing structures—ensuring clash-free renovations, seamless facility management, and accurate documentation.',
      image: 'https://plus.unsplash.com/premium_photo-1663047796379-0051d32be858?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Structural Assessment & Integrity Surveys',
      content: 'We perform non-destructive structural integrity assessments and condition surveys using advanced techniques to pinpoint weaknesses in buildings, bridges, and other structures and deliver expert repair and reinforcement recommendations to ensure safety, longevity, and regulatory compliance.',
      image: '/images/services/structural_assessment.png'
    },
    {
      title: 'Construction Supervision',
      content: 'We provide on-site construction supervision by experienced engineers who oversee contractors to ensure materials and workmanship meet quality standards, enforce strict safety protocols, and resolve technical issues guaranteeing your project is executed exactly as designed and in line with industry best practices.',
      image: '/images/services/construction_supervision.jpg'
    },
    {
      title: 'Post-Tensioned Floor Slab Design',
      content: 'Post-tensioned slabs use high-strength steel tendons to reinforce concrete, allowing thinner floor sections, longer spans, and reduced material costs. At RAMAD Consultants Ltd., we design PT systems that improve structural performance, minimize cracking, and provide flexible, efficient solutions for commercial, residential, and high-rise projects.',
      image: '/images/services/post_tensioned_slab_design.jpg'
    },
    {
      title: 'Ribbed Floor Slab Design',
      content: 'Ribbed slabs use closely spaced beams (ribs) with a thin topping to reduce floor weight while maintaining strength. This system provides longer spans, lower material use, and lighter loads on foundations. RAMAD Consultants Ltd. designs efficient ribbed slabs that deliver structural economy and flexibility for a wide range of building types.',
      image: '/images/services/ribbed_floor_slab_design.jpg'
    }
    
  ];

  const pathname = usePathname()

  return (
    <>
      <SEOMetadata
        title="Services :: Ramad Consultants Ltd."
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

      <section className="screenFrame lg:px-[50px] px-[12px] text-center flex flex-col gap-y-8 justify-center items-center py-14">
        <h1 className="md:text-[54px] text-[42px] leading-[100%] tracking-[-4%] lg:w-[871px] w-full">
          <span className="font-semibold ">Your Vision</span> <br />
          <span className="italic text-[#A93E41]">Our Engineering</span>
        </h1>

        <div className="text-xl font-normal text-[#404040]">
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
            <p>
              <span className="text-[#A93E41] italic">
                RAMAD Consultants Ltd.
              </span>{" "} delivers world-class engineering and project management solutions designed around your specific goals. We support every stage of the project lifecycle—transforming ideas into buildable concepts, developing robust engineering designs, and providing seamless oversight through execution and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FBFAF8] screenFrame lg:px-[50px] px-[12px] lg:py-28 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center">
          {allServices.map((service, idx) => (
            <div key={`jgytfdgh${idx}`} className="rounded-lg overflow-hidden border border-gray-200">
              <div className="relative h-[250px]">
                <Image
                  src={service.image}
                  alt="building"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="p-4 space-y-3">
                <div className="text-[28px] font-semibold leading-[1.2]">
                  {service.title}
                </div>
                <div className="text-[18px] text-[#404040]">
                  {service.content}
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
