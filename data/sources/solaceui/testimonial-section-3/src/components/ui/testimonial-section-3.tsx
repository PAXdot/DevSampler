"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: "1",
    name: "Marcus Rodriguez",
    role: "Product Lead",
    image:
      "https://res.cloudinary.com/harshitproject/image/upload/v1746774430/member-one.png",
    quote:
      "The best investment we've made for our frontend architecture in years.",
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "CEO of DataFlow",
    image:
      "https://res.cloudinary.com/harshitproject/image/upload/v1746774430/member-five.png",
    quote:
      "SolaceUI transformed our design workflow. What used to take weeks now takes days.",
  },

  {
    id: "3",
    name: "Olivia Koe",
    role: "Design Director",
    image:
      "https://res.cloudinary.com/harshitproject/image/upload/v1774017708/member-six.png",
    quote:
      "Simply beautiful components that are easy to customize and integrate.",
  },
  {
    id: "4",
    name: "David Kim",
    role: "Founder",
    image:
      "https://res.cloudinary.com/harshitproject/image/upload/v1746774430/member-two.png",
    quote: "Our development velocity has doubled since adopting SolaceUI.",
  },
  {
    id: "5",
    name: "Amara Okonkwo",
    role: "CTO",
    image:
      "https://res.cloudinary.com/harshitproject/image/upload/v1746774430/member-three.png",
    quote:
      "Accessibility and performance out of the box. Truly impressive work.",
  },
];

export default function Testimonial3() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with index 1 so 0 is left, 1 is center, 2 is right (conceptually)

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const visibleItems = useMemo(() => {
    const total = testimonials.length;
    const leftIndex = (currentIndex - 1 + total) % total;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % total;

    return [
      { ...testimonials[leftIndex], position: "left" },
      { ...testimonials[centerIndex], position: "center" },
      { ...testimonials[rightIndex], position: "right" },
    ];
  }, [currentIndex]);

  return (
    <section
      className="w-full py-20 bg-background flex flex-col items-center justify-center overflow-hidden"
      style={{ "--color-primary": "#003AF9" } as React.CSSProperties}
    >
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Trusted By The
          <br />
          Best People
        </h2>
      </div>

      <div className="relative w-full max-w-7xl px-4 flex items-stretch justify-center">
        <div className="flex flex-row items-stretch justify-center w-full">
          {visibleItems.map((item, index) => {
            const isCenter = item.position === "center";

            return (
              <React.Fragment key={item.id}>
                {/* Render Gap before center and after center (so between left-center and center-right) */}
                {index > 0 && (
                  <div className="hidden md:block w-[10px] sm:w-[20px] relative shrink-0">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] text-neutral-300 dark:text-neutral-700 opacity-50 h-full w-full" />
                  </div>
                )}

                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  style={{ willChange: "transform, opacity" }}
                  className={cn(
                    "relative flex flex-col justify-between border p-8 w-full md:w-[300px] shrink-0 rounded-none overflow-hidden",
                    isCenter
                      ? "bg-(--color-primary) border-(--color-primary) text-white z-20"
                      : "hidden md:flex bg-white dark:bg-neutral-950 border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 z-0",
                  )}
                >
                  {/* Overlay for side divs */}
                  {!isCenter && item.position === "left" && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent dark:from-black/90 dark:via-black/40 dark:to-transparent z-10 pointer-events-none transition-all duration-300" />
                  )}
                  {!isCenter && item.position === "right" && (
                    <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/40 to-transparent dark:from-black/90 dark:via-black/40 dark:to-transparent z-10 pointer-events-none transition-all duration-300" />
                  )}

                  <div
                    className={cn(
                      "text-xl md:text-[1.6rem] font-medium mb-8",
                      !isCenter && "blur-[1px] opacity-70",
                    )}
                  >
                    "{item.quote}"
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <div
                      className={cn(
                        "relative w-12 h-12 overflow-hidden",
                        isCenter
                          ? "border-2 border-black"
                          : "border-2 border-(--color-primary)",
                      )}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={48}
                        height={48}
                        loading="lazy"
                        sizes="48px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <span
                        className={cn(
                          "font-bold text-lg",
                          isCenter
                            ? "text-white"
                            : "text-neutral-900 dark:text-white",
                        )}
                      >
                        {item.name}
                      </span>
                      <span
                        className={cn(
                          "text-sm",
                          isCenter ? "text-blue-100" : "text-neutral-500",
                        )}
                      >
                        {item.role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Navigation Actions */}
      <div className="flex items-center gap-6 mt-12 bg-transparent">
        <button
          onClick={handlePrev}
          className="group p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="w-6 h-6 text-neutral-400 dark:text-neutral-400 group-hover:text-(--color-primary) transition-colors" />
        </button>
        <button
          onClick={handleNext}
          className="group p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Next testimonial"
        >
          <ArrowRight className="w-6 h-6 text-neutral-400 dark:text-neutral-400 group-hover:text-(--color-primary) transition-colors" />
        </button>
      </div>
    </section>
  );
}
