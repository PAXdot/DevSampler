"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Pen } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

// your testimonials. add, remove, or edit any of these.
const testimonials = [
  {
    image:
      "https://cdn.21st.dev/assets/mirror/64/640a5a830c2b62ad0646f9330dd12c2f020cc8c072be04c35f86334640831454.jpg",
    text: "Using this component library has significantly speed up our development process. The quality and ease of integration are remarkable!",
    name: "David Smith",
    jobtitle: "UI Designer",
    audio: "David.mp3", // matching audio file, keep it in /public/audio
  },
  {
    image:
      "https://cdn.21st.dev/assets/mirror/19/19c822dc07e59cd5843528dd1226e2f801c39aa60be5d903c3fcf91d7fc957b2.jpg",
    text: "The components are highly responsive and work seamlessly across different devices and screen sizes.",
    name: "Emily Chen",
    jobtitle: "Mobile App Developer",
    audio: "Emily.mp3",
  },
  {
    image:
      "https://cdn.21st.dev/assets/mirror/21/2103ad299a4d07b8c05fdd1e77c566a7ad84ac69b05bb0843c8fd79008df73bc.jpg",
    text: "This library has saved us a significant amount of time and effort. The components are well-documented and easy to integrate.",
    name: "Sarah Taylor",
    jobtitle: "Backend Developer",
    audio: "Sarah.mp3",
  },
  {
    image:
      "https://cdn.21st.dev/assets/mirror/94/942ca3144074d6de8e353022c9017ea2e6c18ae03e969ee1860167ab1632eaba.jpg",
    text: "I appreciate the attention to detail in the design. The components are visually appealing and professional.",
    name: "Kevin White",
    jobtitle: "UI/UX Designer",
    audio: "Kevin.mp3",
  },
  {
    image:
      "https://cdn.21st.dev/assets/mirror/46/460baab8abf8a42de9f4966072cbf129a5f3ab72b6bf4e09ba59d2a650d4cf1c.jpg",
    text: "I love how the components are designed to be highly responsive and work well across different screen sizes.",
    name: "Brian Kim",
    jobtitle: "Mobile App Developer",
    audio: "Brian.mp3",
  },
];

// quick settings. change these to restyle it, no need to touch the code below.
const TYPE_SPEED_MS = 60; // typing speed. higher number means slower typing
const AUDIO_FOLDER = "/audio"; // folder inside /public where voice clips live
const AVATAR_SIZE = "w-9 h-9"; // avatar size
const AVATAR_OVERLAP = "-10px"; // how much each avatar overlaps the one before it

export const TypewriterTestimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

  const stopCurrentAudio = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
      audioPlayerRef.current.currentTime = 0;
      audioPlayerRef.current = null;
    }
  };

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const fullText = testimonials[activeIndex].text;
    let current = 0;

    const interval = setInterval(() => {
      current++;
      if (current <= fullText.length) {
        setTypedText(fullText.slice(0, current));
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, TYPE_SPEED_MS);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const handleProfileSelect = useCallback((index: number) => {
    stopCurrentAudio();
    setActiveIndex(index);
    setTypedText("");
    setIsTyping(true);

    const clip = testimonials[index].audio;
    if (typeof window !== "undefined" && clip) {
      try {
        const audio = new Audio(`${AUDIO_FOLDER}/${clip}`);
        audio.play().catch(() => {});
        audioPlayerRef.current = audio;
      } catch {}
    }
  }, []);

  const handleStackLeave = useCallback(() => {
    stopCurrentAudio();
    setActiveIndex(null);
    setTypedText("");
    setIsTyping(false);
  }, []);

  useEffect(() => {
    return () => {
      stopCurrentAudio();
    };
  }, []);

  const active = activeIndex !== null ? testimonials[activeIndex] : null;

  return (
    <div className="p-4 sm:p-8 rounded-2xl w-full max-w-sm mx-auto select-none">
      <div className="relative flex flex-col items-center translate-y-16 sm:translate-y-20">
        <AnimatePresence>
          {active && (
            <motion.div
              key={activeIndex}
              className="absolute bottom-full left-0 right-0 mb-4 rounded-[26px] bg-white dark:bg-neutral-950 border border-neutral-200/80 dark:border-white/[0.07] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_28px_-14px_rgba(0,0,0,0.18)] dark:shadow-[0_10px_28px_-14px_rgba(0,0,0,0.6)] px-5 py-4"
              initial={{ opacity: 0, y: 6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.97 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="min-h-14.5 flex items-start">
                <p className="text-[13px] sm:text-sm leading-[1.55] text-neutral-600 dark:text-neutral-300 font-normal">
                  {typedText}
                  <AnimatePresence>
                    {isTyping && (
                      <motion.span
                        key="pen"
                        className="inline-flex ml-1 -mb-0.5 align-middle text-neutral-400 dark:text-neutral-500"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          rotate: [-16, -6, -16],
                          y: [0, -1.5, 0],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                          opacity: { duration: 0.15 },
                          rotate: {
                            duration: 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                          y: {
                            duration: 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        {/* pen icon, wiggles a little to look like it's writing */}
                        <Pen className="w-3.5 h-3.5" strokeWidth={2.25} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-neutral-100 dark:border-white/6">
                <p className="text-[13px] font-semibold leading-tight text-neutral-900 dark:text-white">
                  {active.name}
                </p>
                <p className="text-[11px] leading-tight text-neutral-400 dark:text-neutral-500 mt-0.5">
                  {active.jobtitle}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className="flex items-center relative py-1"
          onMouseLeave={handleStackLeave}
        >
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.button
                key={index}
                type="button"
                onMouseEnter={() => handleProfileSelect(index)}
                onFocus={() => handleProfileSelect(index)}
                onBlur={handleStackLeave}
                aria-label={`View testimonial from ${testimonial.name}`}
                className="relative focus:outline-none rounded-full cursor-pointer"
                style={{
                  marginLeft: index > 0 ? AVATAR_OVERLAP : "0",
                  zIndex: isActive ? 30 : index,
                }}
                whileHover={{ zIndex: 35 }}
                transition={{ duration: 0.2 }}
              >
                <span
                  className={`relative block overflow-hidden rounded-full ${AVATAR_SIZE} transition-all duration-300 ${
                    isActive
                      ? "scale-110 shadow-[0_2px_10px_rgba(0,0,0,0.18)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                      : "hover:scale-105"
                  }`}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TypewriterTestimonial;
