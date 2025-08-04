import { CircleChevronLeft, CircleChevronRight, MapPinCheckInsideIcon } from "lucide-react";
import Image from "next/image";

export default function ProjectsViewGallery() {
    return (
        <section className="screenFrame lg:px-[50px] px-[12px] lg:py-28 py-8">
            <h2 className='text-[40px] leading-[2.5rem] tracking-[-3%] m-0 mb-10'>
                <span className='font-semibold'>
                    Projects
                </span>{' '}
                <span className='text-[#A93E41] italic'>Gallery</span>
            </h2>

            <div className="relative lg:h-[574px] h-[430px]">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <Image src="/images/project_grid_card.jpg" fill objectFit="cover" alt="project_gallery" />
                    <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black flex flex-col justify-start lg:justify-end">
                        <div className="lg:p-10 p-5">
                            <div className="md:w-[670px] w-full">
                                <div className="px-2 py-1 rounded-full border border-[#A93E41] text-white bg-[#A93E41] text-[10px] flex gap-x-1 w-fit items-center">
                                    <MapPinCheckInsideIcon size={12} />
                                    <span>Lagos</span>
                                </div>
                                <h2 className="text-white font-extrabold lg:text-[40px] text-[30px] lg:leading-[2.5rem] leading-[1.9rem] mt-3 mb-3">Entertainment Parks (Abuja & Port Harcourt)</h2>
                                <p className="text-base leading-[23px] tracking-[-0.5px] text-white">Ongoing design of expansive recreational park projects in both Abuja and Port Harcourt, delivering fun, safe, and sustainable leisure environments.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Left to Right Control */}
                <div className="absolute right-5 bottom-5 lg:pb-10 lg:pe-10 pb-5 pe-5">
                    <div className="flex gap-x-2 text-white">
                        <button type="button" title="Slide left" className="cursor-pointer"><CircleChevronLeft size={40} strokeWidth={1} className="hover:bg-white/30 rounded-full transition-colors" /></button>
                        <button type="button" title="Slide right" className="cursor-pointer"><CircleChevronRight size={40} strokeWidth={1} className="hover:bg-white/30 rounded-full transition-colors" /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}