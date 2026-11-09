"use client";

import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";

import { cn } from "@/lib/utils";

const tabs = [
  {
    id: 0,
    label: "Homes",
    video_url:
      "https://cdn.21st.dev/assets/mirror/28/286525aad7b63f89a8ee3a905d8ca642637334845d9864ba0b9981187b252605.webm",
    initial_render_url:
      "https://cdn.21st.dev/assets/mirror/b3/b37e8c1b9dde4a501a96c6bee15fc7ccbc390826f998998a46d95b208c4e2bd9.webm",
  },
  {
    id: 1,
    label: "Experiences",
    video_url:
      "https://cdn.21st.dev/assets/mirror/ef/ef88a85845e2650bc471b470eff119ed04235323b9375929d0df0846dc951dc1.webm",
    initial_render_url:
      "https://cdn.21st.dev/assets/mirror/60/605831be6c59954dbcb62d30a627acc94c9982668bd277dbdcfb2945eac2b389.webm",
  },
  {
    id: 2,
    label: "Services",
    video_url:
      "https://cdn.21st.dev/assets/mirror/0f/0f6338ddf758cf9e9398d1cf0f346a52b3df5ae30880c8b54c85dd7a2e97dcb4.webm",
    initial_render_url:
      "https://cdn.21st.dev/assets/mirror/56/56c549f29cbc45904e4109a00749542494d257e7c2d65688ef9422ce1d1060be.webm",
  },
];

function NewBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-primary px-2 py-1 rounded-t-full rounded-br-full rounded-bl-sm text-xs font-bold text-primary-foreground transition-all duration-200 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:pointer-events-none before:z-[1] before:shadow-[inset_0_0_0_1px_rgba(170,202,255,0.2),inset_0_0_10px_0_rgba(170,202,255,0.3),inset_0_3px_7px_0_rgba(170,202,255,0.4),inset_0_-4px_3px_0_rgba(170,202,255,0.4),0_1px_3px_0_rgba(0,0,0,0.50),0_4px_12px_0_rgba(0,0,0,0.65)]  backdrop-blur-md",
        className
      )}
    >
      <span>NEW</span>
      <span
        className="absolute left-1/2 -translate-x-1/2 opacity-40 z-50 scale-y-[-1] translate-y-2.5"
        style={{
          maskImage: "linear-gradient(to top, white 20%, transparent 50%)",
          WebkitMaskImage:
            "linear-gradient(to top, white 10%, transparent 50%)",
        }}
      >
        NEW
      </span>
    </div>
  );
}

function Component({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState(0);
  // Create refs for each video
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  // Initialize refs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, tabs.length);
  }, []);
  const [tabClicked, setTabClicked] = useState(false);
  const handleTabClick = (newTabId: number) => {
    setTabClicked(true);
    if (newTabId !== activeTab) {
      setActiveTab(newTabId);
      // Reset all videos first
      videoRefs.current.forEach((video, index) => {
        if (video) {
          // Pause and reset any playing videos
          video.pause();
          video.currentTime = 0;
        }
      });

      // Then play only the selected tab's video
      const videoElement = videoRefs.current[newTabId];
      if (videoElement) {
        videoElement.currentTime = 0;
        videoElement.play();
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* <NewBadge /> */}
      <div className={cn("flex space-x-8 rounded-full", className)}>
        {tabs.map((tab, index) => (
          <motion.button
            key={tab.id}
            whileTap={"tapped"}
            whileHover={"hovered"}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              "relative px-2 tracking-[0.01em] cursor-pointer text-neutral-600 dark:text-neutral-300 transition focus-visible:outline-1 focus-visible:ring-1 focus-visible:outline-none flex gap-2 items-center",
              activeTab === tab.id
                ? "text-black dark:text-white font-medium tracking-normal"
                : "hover:text-neutral-800 dark:hover:text-neutral-200 text-neutral-500 dark:text-neutral-400"
            )}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute bottom-0 w-full left-0 z-10 bg-black dark:bg-white rounded-full h-1"
                transition={{ type: "spring", bounce: 0.19, duration: 0.4 }}
              />
            )}
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: {
                  type: "spring",
                  bounce: 0.2,
                  damping: 7,
                  duration: 0.4,
                  delay: index * 0.1,
                },
              }}
              variants={{
                default: { scale: 1 },
                ...(!(activeTab === tab.id) && { hovered: { scale: 1.1 } }),
                ...(!(activeTab === tab.id) && {
                  tapped: {
                    scale: 0.8,
                    transition: {
                      type: "spring",
                      bounce: 0.2,
                      damping: 7,
                      duration: 0.4,
                    },
                  },
                }),
              }}
              className="relative"
              transition={{ type: "spring" }}
            >
              {tab.id !== 0 && (
                <NewBadge className="absolute -top-2 -right-8 z-50" />
              )}

              <div className="relative size-20">
                <video
                  id="banner-video"
                  key={`initial-${tab.id}`}
                  ref={(el) => {
                    if (el) videoRefs.current[tab.id] = el;
                  }}
                  muted
                  playsInline
                  autoPlay
                  className={cn(
                    "absolute",
                    tabClicked ? "opacity-0" : "opacity-100"
                  )}
                >
                  <source src={tab.initial_render_url} type="video/webm" />
                </video>
                <video
                  id="banner-video"
                  key={`clicked-${tab.id}`}
                  ref={(el) => {
                    if (el) videoRefs.current[tab.id] = el;
                  }}
                  muted
                  playsInline
                  autoPlay
                  className={cn(
                    "absolute",
                    tabClicked ? "opacity-100" : "opacity-0"
                  )}
                >
                  <source src={tab.video_url} type="video/webm" />
                </video>
              </div>
            </motion.div>
            <span>{tab.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
export { Component };
