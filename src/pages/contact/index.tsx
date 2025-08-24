// import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Header from "@/components/layouts/Header";
import {
  BuildingIcon2,
  EnvelopeIcon,
  TelephoneIcon,
} from "@/Icons";
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

export default function Contact() {

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log(e.target)
  }
  return (
    <>
      <Head>
        <title>Contact :: Ramad Consultants Ltd.</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />

        {/* <!-- Favicons --> */}
        <link href="/images/favicon.png" rel="icon" />
      </Head>

      <Header />

      <section className="screenFrame lg:px-[50px] px-[12px] text-center flex flex-col lg:gap-y-8 gap-y-3 justify-center items-center py-14">
        <h1 className="lg:text-5xl text-3xl font-semibold">Reach out to us</h1>
        <div className="text-gray-500 text-lg font-light md:w-[600px]">
          Ready to discuss your next project or have questions about our
          services? We invite you to reach out to us anytime. Our team is always
          available to provide information, schedule a consultation, or welcome
          you to our office.
        </div>
      </section>

      <section className="screenFrame lg:px-[50px] px-[12px] lg:pb-28 py-5">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-content-center gap-5">
          <div className="border border-[#EAEDF0] rounded-lg p-5 space-y-4">
            <div>
              <BuildingIcon2 />
            </div>
            <div className="font-semibold text-xl">Office Addresses </div>
            <div>
              <div>
                <span className="font-bold">Abuja Office</span>
                <span className="text-gray-500">
                  : Suite 213, Elyon Plaza, 182 1st Avenue, Gwarinpa 900108, FCT
                  Abuja, Nigeria.
                </span>
              </div>
            </div>
          </div>

          <div className="border border-[#EAEDF0] rounded-lg p-5 space-y-4 break-words text-wrap">
            <div>
              <EnvelopeIcon />
            </div>
            <div className="font-semibold text-xl">E-Mail </div>
            <div className="text-gray-500 break-words text-wrap">
              <span className = "break-words text-wrap">info@ramadconsulting.com</span>
              <br />
              <span className="break-words text-wrap">rahman.shittu@ramadconsulting.com</span>
            </div>
          </div>

          <div className="border border-[#EAEDF0] rounded-lg p-5 space-y-4">
            <div>
              <TelephoneIcon />
            </div>
            <div className="font-semibold text-xl">Mobile Number </div>
            <div className="text-gray-500">
              +2348036412958
              <br />
              +2348036412958
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FBFAF8] screenFrame lg:px-[50px] px-[12px] lg:py-28 py-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <div className="lg:text-[40px] text-3xl mb-5 lg:mb-0 font-semibold">
              Book a{" "}
              <span className="text-[#A93E41] font-normal italic">
                Consultation
              </span>
            </div>
            <div className="text-gray-400 leading-[25px] text-base tracking-[-0.5px] font-light">
              You can also fill out our online contact form, and a
              representative will get back to you promptly. Let us help you
              kick-start your project with expert guidance we look forward to
              partnering with you on all your engineering and construction
              needs.
            </div>
          </div>

          <div>
            <div className="border border-gray-200 rounded-md p-5 space-y-6">
              <div className="text-[24px] font-semibold">
                Fill in the required information
              </div>
              <form className="space-y-6" onSubmit={(e) => handleFormSubmit(e)}>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="peer block w-full rounded-md border border-gray-200 bg-transparent px-3 pt-3.5 pb-2 text-sm text-gray-900 placeholder-transparent focus:border-[#A93E41] focus:ring-1 focus:ring-[#A93E41] focus:outline-none"
                    placeholder="Your Name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-2 top-[15px] bg-[#FBFAF8] px-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-[10px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-[#A93E41]"
                  >
                    Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="peer block w-full rounded-md border border-gray-200 bg-transparent px-3 pt-3.5 pb-2 text-sm text-gray-900 placeholder-transparent focus:border-[#A93E41] focus:ring-1 focus:ring-[#A93E41] focus:outline-none"
                    placeholder="Your Email"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-2 top-[15px] bg-[#FBFAF8] px-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-[10px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-[#A93E41]"
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    className="peer block w-full rounded-md border border-gray-200 bg-transparent px-3 pt-3.5 pb-2 text-sm text-gray-900 placeholder-transparent focus:border-[#A93E41] focus:ring-1 focus:ring-[#A93E41] focus:outline-none"
                    placeholder="Your enquiry subject"
                    required
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-2 top-[15px] bg-[#FBFAF8] px-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-[10px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-[#A93E41]"
                  >
                    Enquiry Subject
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    className="peer block w-full rounded-md border border-gray-200 bg-transparent px-3 pt-3.5 pb-2 text-sm text-gray-900 placeholder-transparent focus:border-[#A93E41] focus:ring-1 focus:ring-[#A93E41] focus:outline-none"
                    placeholder="Your message..."
                    rows={7}
                    required
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-2 top-[15px] bg-[#FBFAF8] px-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-[10px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-[#A93E41]"
                  >
                    Message
                  </label>
                </div>

                <div className="flex justify-end text-sm">
                  <button
                    type="submit"
                    className="bg-[#A93E41] rounded px-4 py-2 text-white"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <VisionHeroBanner />

      <Footer />
    </>
  );
}
