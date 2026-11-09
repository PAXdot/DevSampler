import React, { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DEFAULT_ASSETS = [
  {
    src: "https://cdn.21st.dev/assets/mirror/05/05af951d88399d8cc432f2f9321b2937df6019d8af228755da069dffd8cc7c5e.jpg",
    title: "Sunset Beach",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/bd/bdd8b88267434941802099d2bde330f871b4e127ebbf36b638d2df810240570f.jpg",
    title: "Misty Mountains",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/bb/bbb047cd3f0c8539848ed66c57790f386be21cd37869ed84789578e4704adc20.jpg",
    title: "Forest Trail",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/0d/0def68746ecacd2381a33b40eadc376018986173c768ca2d3aff676b0e8c40dc.jpg",
    title: "Sunlight in Woods",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/ed/ed86de8142becc63e0f703b6446623de4d8148ea3f262a72b31d3b4a988be73b.jpg",
    title: "Green Hills",
  },
];

interface CardCarouselProps {
  hovered?: boolean;
  className?: string;
  images?: { src: string; title: string }[];
  isMonochrome?: boolean;
}

export const CardCarousel = React.memo(function CardCarousel({
  hovered,
  className = "",
  images = DEFAULT_ASSETS,
  isMonochrome = false,
}: CardCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isHovered, setIsHovered] = useState(false);
  const active = hovered !== undefined ? hovered : isHovered;

  const toPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const toNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => Math.min(images.length - 1, prev + 1));
  };

  const toSlide = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setActiveIndex(index);
  };

  const slideWidth = 160;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full h-full flex flex-col items-center justify-center relative overflow-hidden select-none ${className}`}
    >
      {/* carousel wrapper */}
      <div
        className="relative h-[180px] flex items-center justify-start overflow-visible"
        style={{ width: `${slideWidth}px` }}
      >
        {/* slides container */}
        <motion.div
          className="flex w-fit items-center"
          animate={{ x: -activeIndex * slideWidth }}
          transition={{ type: "spring", bounce: 0.1, duration: 0.8 }}
        >
          {images.map((item, i) => {
            const isActive = activeIndex === i;
            const diff = i - activeIndex;

            const targetRotate = active ? diff * 20 : diff * 5;
            const targetScale = isActive ? 1.05 : active ? 0.65 : 0.8;
            const targetY = active ? diff * 24 : 0;

            return (
              <motion.div
                key={i}
                className="shrink-0 flex flex-col items-center gap-1.5 will-change-[transform,scale]"
                style={{ width: `${slideWidth}px` }}
                animate={{
                  rotate: targetRotate,
                  scale: targetScale,
                  y: targetY,
                }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
              >
                <div
                  className={`text-[10px] md:text-xs font-semibold whitespace-nowrap transition-all duration-300 ${isActive ? "opacity-100 scale-100 text-white" : "opacity-0 scale-75 text-neutral-400"}`}
                >
                  {isMonochrome ? `Card ${i + 1}` : item.title}
                </div>

                {isMonochrome ? (
                  <div
                    onClick={(e) => toSlide(e, i)}
                    className="w-[110px] h-[110px] rounded-xl bg-neutral-400 dark:bg-neutral-800 border border-neutral-200/20 shadow-lg flex items-center justify-center text-neutral-600 dark:text-neutral-400 font-bold text-sm cursor-pointer"
                  >
                    {i + 1}
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-[110px] h-[110px] object-cover rounded-xl shadow-lg border border-white/10 cursor-pointer"
                    onClick={(e) => toSlide(e, i)}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* controls */}
      <div className="mt-4 px-1.5 py-0.5 flex items-center gap-2 justify-center text-neutral-400 rounded-full bg-neutral-900/60 backdrop-blur-md border border-white/5 shadow-md z-20">
        {/* prev button */}
        <button
          onClick={toPrev}
          className="p-1 cursor-pointer hover:bg-white/5 rounded-full transition-colors border-0 bg-transparent text-neutral-400 hover:text-white"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>
        {/* slide dots */}
        <div className="flex justify-center items-center gap-1">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={(e) => toSlide(e, i)}
              className={`rounded-full cursor-pointer h-1 transition-all duration-300 ${activeIndex === i ? "w-4 bg-white" : "w-1 bg-white/30 hover:bg-white/50"}`}
            ></div>
          ))}
        </div>
        {/* next button */}
        <button
          onClick={toNext}
          className="p-1 cursor-pointer hover:bg-white/5 rounded-full transition-colors border-0 bg-transparent text-neutral-400 hover:text-white"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
});

export default CardCarousel;
