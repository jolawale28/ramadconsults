import { CarouselType } from "@/types/Carousel";
import {
  CircleChevronLeft,
  CircleChevronRight,
  MapPinCheckInsideIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { carouselData as slideData } from "@/data/Carousel";

export default function HomepageCarousel() {
  const [carouselData] = useState<CarouselType[]>(slideData);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(activeIndexRef.current);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const slideWidth = container.firstElementChild?.clientWidth || 1;

    // Round to nearest slide index
    const index = Math.round(scrollLeft / slideWidth);
    activeIndexRef.current = index;
    setActiveIndex(index);
  };

  const scrollNext = () => {
    const container = containerRef.current;
    if (!container) return;

    const itemWidth = container.firstElementChild?.clientWidth || 0;
    container.scrollBy({ left: itemWidth, behavior: "smooth" });
  };

  const scrollPrev = () => {
    const container = containerRef.current;
    if (!container) return;

    const itemWidth = container.firstElementChild?.clientWidth || 0;
    container.scrollBy({ left: -itemWidth, behavior: "smooth" });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full lg:h-[574px] h-[380px] overflow-hidden">
      <div
        className="h-full flex overflow-x-scroll hide-scrollbar snap-x snap-mandatory"
        ref={containerRef}
      >
        {carouselData.map((slide, idx) => (
          <div
            className="relative w-full h-full overflow-hidden basis-full shrink-0 snap-center"
            key={idx}
          >
            <Image
              src={slide.imageURL}
              fill
              objectFit="cover"
              alt="Hero banner 1"
            />
            <div className="absolute inset-0 w-full h-full bg-black/30 screenFrame lg:px-[50px] px-[12px] flex flex-col justify-between lg:p-14 p-5">
              <div className="md:w-[670px] w-full">
                <div className="px-2 py-1 rounded-full border border-[#A93E41] text-white bg-[#A93E41] text-[10px] flex gap-x-1 w-fit items-center">
                  <MapPinCheckInsideIcon size={12} />
                  <span>{slide.location}</span>
                </div>
                <h2 className="text-white font-extrabold md:text-[64px] text-4xl leading-[2.2rem] md:leading-[3.5rem] mt-5 mb-5 drop-shadow-[0px_0px_3px_rgb(100,100,100)]">
                  {slide.title}
                </h2>
                <p className="md:text-xl text-md leading-[22px] tracking-[-0.5px] text-white drop-shadow-[0px_0px_3px_black]">
                  {slide.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center text-sm screenFrame lg:px-[50px] px-[12px] lg:p-14 p-5 absolute bottom-0 left-0 w-full">
        <div className="flex gap-x-1.5 items-end text-[16px] text-gray-300">
          <div className="text-white">
            {activeIndex < 9 ? `0${activeIndex + 1}` : activeIndex + 1}
          </div>
          <div>/</div>
          <div>{carouselData.length}</div>
        </div>
        <div className="flex gap-x-2 text-white">
          <button
            type="button"
            title="Slide left"
            className="cursor-pointer"
            onClick={() => scrollPrev()}
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
            onClick={() => scrollNext()}
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
  );
}
