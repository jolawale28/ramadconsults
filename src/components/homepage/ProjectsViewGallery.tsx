import { carouselData } from "@/data/Carousel";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProjectsViewGallery() {
  const [sortHandles] = useState<string[]>([
    'All', ...new Set(carouselData.map((ele) => ele.location)),
  ]);
  const [selectedHandle, setSelectedHandle] = useState(sortHandles[0]);
  return (
    <section className="screenFrame lg:px-[50px] px-[12px] lg:py-28 py-8">
      <h2 className="text-[40px] leading-[2.5rem] tracking-[-3%] m-0 mb-10">
        <span className="font-semibold">Projects</span>{" "}
        <span className="text-[#A93E41] italic">Gallery</span>
      </h2>

      <div className="space-y-5">
        <div className="flex md:justify-center items-center gap-5 text-nowrap flex-nowrap hide-scrollbar overflow-x-scroll w-full">
          {sortHandles.map((handle, idx) => (
            <button
              key={`wawesedtuy_${handle}_${idx}`}
              type="button"
              className={`text-xs hover:rounded-t px-2 py-0.5 ${selectedHandle === handle ? "text-[#A93E41] border-b-[#A93E41]": 'border-b-transparent'} border-b-[1.5px] hover:border-b-[#A93E41] hover:text-[#A93E41] transition-colors cursor-pointer inline-block shrink-0`}
              onClick={() => setSelectedHandle(handle)}
            >
              {handle}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
          {carouselData.slice(0, 9).filter(slide => selectedHandle === 'All' ? true: slide.location === selectedHandle).map((slide, idx) => (
            <Link
              href="/projects/123"
              className="border border-gray-200 rounded-lg overflow-hidden group"
              key={`hugfjyf_${idx}`}
            >
              <div className="h-[200px] overflow-hidden">
                <div className="relative h-full group-hover:scale-105 transition-transform duration-200">
                  <Image
                    src={slide.imageURL}
                    fill
                    objectFit="cover"
                    alt="project_image"
                  />
                </div>
              </div>
              <div className="p-3 space-y-3">
                <div className="border border-[#A93E41] rounded-full px-2 py-0.5 font-medium text-xs text-[#A93E41] w-fit">
                  {slide.location}
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-[20px] leading-[100%] tracking-[3%] group-hover:text-[#A93E41]">
                    {slide.title}
                  </div>
                  <div className="text-gray-500 text-sm tracking-[-0.5px] leading-[18px]">
                    {slide.desc}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
