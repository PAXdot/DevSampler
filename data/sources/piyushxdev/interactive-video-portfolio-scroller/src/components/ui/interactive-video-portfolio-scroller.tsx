import { cn } from "@/lib/utils";
import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export const Component = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const loadedCountRef = useRef(0);
  const [isIOSDevice, setIsIOSDevice] = useState(false);

  const outerContainerRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // 1. UPDATED TEXT CONTENT
  const menuItems = [
    { name: "Cinematic Branding", location: "NEW YORK, USA", number: "01" },
    { name: "Digital Experiences", location: "LONDON, UK", number: "02" },
    { name: "Immersive 3D Design", location: "TOKYO, JAPAN", number: "03" },
    { name: "Motion Graphics", location: "BERLIN, GERMANY", number: "04" },
    { name: "Creative Direction", location: "PARIS, FRANCE", number: "05" },
    { name: "Visual Effects (VFX)", location: "SEOUL, SK", number: "06" },
    { name: "Sonic Landscapes", location: "TORONTO, CA", number: "07" },
  ];

  // 2. FIXED VIDEO FETCHING (Removed Cloudinary params that broke standard URLs)
  const videos = [
    "https://cdn.21st.dev/assets/mirror/34/34bbd52a4b89fdf63c8ace50b268da26653a59508288100cd3c23de276db7931.mp4",
    "https://cdn.21st.dev/assets/mirror/3b/3bb938fb70049e3e45f533b37ccae995ae96516e04c2f35b0c1142e47b2a39c1.mp4",
    "https://cdn.21st.dev/assets/mirror/b2/b2ded9ae5a20fa36ca8cec49ef923bffb5e1a51d9e8c1f8336273d2fa9d35ff0.mp4",
    "https://cdn.21st.dev/assets/mirror/80/80c548058688a577ce9ca501cf9807311b95cc526cc82d292ec7e138e42257de.mp4",
    "https://cdn.21st.dev/assets/mirror/34/34bbd52a4b89fdf63c8ace50b268da26653a59508288100cd3c23de276db7931.mp4",
    "https://cdn.21st.dev/assets/mirror/3b/3bb938fb70049e3e45f533b37ccae995ae96516e04c2f35b0c1142e47b2a39c1.mp4",
    "https://cdn.21st.dev/assets/mirror/b2/b2ded9ae5a20fa36ca8cec49ef923bffb5e1a51d9e8c1f8336273d2fa9d35ff0.mp4",
  ];

  const [mutedStates, setMutedStates] = useState<boolean[]>(() =>
    new Array(videos.length).fill(true),
  );

  const ITEM_HEIGHT = 70; // Slightly taller for the new elegant font

  const handleVideoLoad = () => {
    loadedCountRef.current += 1;
    if (!isReady && loadedCountRef.current >= 1) {
      setIsReady(true);
    }
  };

  useEffect(() => {
    // Fallback timer just in case videos take too long to load metadata
    const timer = setTimeout(() => setIsReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isiPhone = /iphone|ipod/.test(ua);
    const isiPad =
      /ipad/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    setIsIOSDevice(isiPhone || isiPad);
  }, []);

  useEffect(() => {
    setMutedStates(new Array(videos.length).fill(true));
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, [videos.length]);

  const handleToggleMute = (index: number) => {
    setMutedStates((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  // Scroll logic strictly mapping to activeIndex
  useEffect(() => {
    const handleWindowScroll = () => {
      if (!outerContainerRef.current) return;

      const { top, height } = outerContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollableDistance = height - windowHeight;
      const scrolledPastTop = -top;

      let progress = scrolledPastTop / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));

      const newActiveIndex = Math.round(progress * (menuItems.length - 1));
      setActiveIndex(newActiveIndex);
    };

    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    handleWindowScroll();

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, [menuItems.length]);

  // Unified Playback Control
  useEffect(() => {
    videoRefs.current.forEach((videoEl, index) => {
      if (!videoEl) return;

      videoEl.setAttribute("playsinline", "true");
      videoEl.setAttribute("webkit-playsinline", "true");

      if (index === activeIndex) {
        videoEl.muted = mutedStates[index] ?? true;

        const playPromise = videoEl.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            if (
              error.name === "NotAllowedError" ||
              error.name === "NotSupportedError"
            ) {
              videoEl.muted = true;
              videoEl.play().catch(() => {});

              setMutedStates((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }
          });
        }
      } else {
        videoEl.pause();
        if (videoEl.readyState >= 2) {
          videoEl.currentTime = 0;
        }
      }
    });
  }, [activeIndex, mutedStates]);

  const handleMenuClick = (index: number) => {
    if (!outerContainerRef.current) return;

    const targetProgress = index / (menuItems.length - 1);
    const outerRect = outerContainerRef.current.getBoundingClientRect();
    const scrollableDistance =
      outerContainerRef.current.clientHeight - window.innerHeight;
    const absoluteTop = window.scrollY + outerRect.top;
    const targetWindowScrollY =
      absoluteTop + targetProgress * scrollableDistance;

    window.scrollTo({ top: targetWindowScrollY, behavior: "smooth" });
  };

  return (
    <>
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

          .mask-y {
            mask-image: linear-gradient(to bottom, black 0%, black 75%, transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom, black 0%, black 75%, transparent 100%);
          }

          .mask-y-video {
            mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
          }

          .video-track-container {
            --video-height: 250px;
          }
          @media (min-width: 768px) {
            .video-track-container {
              --video-height: 380px;
            }
          }
        `}
      </style>

      <div
        ref={outerContainerRef}
        className={cn("w-full h-[400vh] bg-[#f8f9fa] relative my-12")}
      >
        {!isReady && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111]">
            <div className="text-center px-6">
              <p className="text-[12px] tracking-[0.4em] uppercase text-gray-400 font-sans">
                Loading Experience
              </p>
              {/* 3. CHANGED FONT STYLE (font-serif) */}
              <p className="mt-4 text-3xl sm:text-4xl md:text-5xl italic font-serif text-white tracking-wide">
                Lumina Studio
              </p>
            </div>
          </div>
        )}

        <section className="sticky top-0 w-full h-screen flex items-center justify-center p-4 md:p-10 font-sans overflow-hidden">
          <div className="relative w-full max-w-[1100px] h-[85vh] md:h-[750px] bg-[#ebebeb] border-[1px] md:border-[2px] border-[#d1d1d1] flex flex-col md:flex-row overflow-hidden shadow-2xl rounded-sm">
            {/* Left Vertical Brand Info */}
            <div className="hidden md:flex w-14 flex-col justify-between items-center py-10 border-r-[1px] border-[#d1d1d1] z-10 flex-shrink-0 bg-[#f4f4f4]">
              <div
                className="text-sm font-medium text-gray-500 tracking-[0.3em] uppercase"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Est. 2026
              </div>
              <div
                className="text-sm font-medium text-gray-800 tracking-[0.3em] uppercase"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Creative Studio
              </div>
            </div>

            {/* Middle Section: Text Titles */}
            <div className="w-full md:flex-1 h-[50%] md:h-full px-6 md:px-16 z-10 flex flex-col justify-end pb-[10%] border-b-[1px] md:border-b-0 border-[#d1d1d1] pointer-events-auto bg-gradient-to-r from-[#f4f4f4] to-transparent">
              <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden mask-y">
                <ul
                  className="absolute left-0 w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{
                    top: "50%",
                    marginTop: `-${ITEM_HEIGHT / 2}px`,
                    transform: `translateY(-${activeIndex * ITEM_HEIGHT}px)`,
                  }}
                >
                  {menuItems.map((item, index) => {
                    const isActive = activeIndex === index;
                    const isPast = index < activeIndex;

                    return (
                      <li
                        key={index}
                        onClick={() => !isPast && handleMenuClick(index)}
                        style={{ height: `${ITEM_HEIGHT}px` }}
                        className={`flex items-center cursor-pointer transition-all duration-500 w-full
                          ${isActive ? "opacity-100 scale-100" : ""}
                          ${isPast ? "opacity-0 pointer-events-none scale-95" : ""}
                          ${
                            !isActive && !isPast
                              ? "opacity-30 scale-[0.98] origin-left hover:opacity-50"
                              : ""
                          }`}
                      >
                        {/* 3. CHANGED FONT STYLE TO SERIF */}
                        <span
                          className={`text-[22px] sm:text-[28px] md:text-[38px] font-serif transition-colors duration-500
                            ${
                              isActive
                                ? "text-black italic tracking-normal"
                                : "text-gray-500 tracking-tight"
                            }`}
                        >
                          {item.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Right Section: Centered Video Carousel */}
            <div className="w-full md:w-[45%] h-[50%] md:h-full overflow-hidden relative z-0 md:border-l-[1px] border-[#d1d1d1] bg-[#1a1a1a] mask-y-video video-track-container">
              <div
                className="absolute top-1/2 left-0 w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col"
                style={{
                  marginTop: "calc(var(--video-height) / -2)",
                  transform: `translateY(calc(-${activeIndex} * var(--video-height)))`,
                }}
              >
                {videos.map((src, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={index}
                      data-portfolio-item="true"
                      className={`w-full shrink-0 relative group transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] p-4 flex justify-center items-center ${
                        isActive
                          ? "opacity-100 scale-100 blur-none z-10"
                          : "opacity-30 scale-[0.85] blur-[4px] md:blur-[6px] z-0 pointer-events-none"
                      }`}
                      style={{ height: "var(--video-height)" }}
                    >
                      <div className="w-full h-full relative overflow-hidden bg-black shadow-2xl rounded-sm">
                        <video
                          ref={(el) => {
                            videoRefs.current[index] = el;
                            if (el) {
                              el.defaultMuted = true;
                              el.playsInline = true;
                            }
                          }}
                          src={src}
                          muted={mutedStates[index] ?? true}
                          loop
                          playsInline
                          preload="auto"
                          onLoadedMetadata={handleVideoLoad}
                          className="w-full h-full object-cover transition-transform duration-700"
                          style={{
                            WebkitBackfaceVisibility: "hidden",
                            backfaceVisibility: "hidden",
                            transform: "translateZ(0)",
                          }}
                        />

                        {/* Text Overlay matching new style */}
                        {isActive && (
                          <div className="absolute top-4 left-4 z-20">
                             <span className="text-white/80 text-xs tracking-[0.2em] uppercase font-sans drop-shadow-md">
                               {menuItems[index].location}
                             </span>
                          </div>
                        )}

                        {isActive && (
                          <button
                            onClick={() => handleToggleMute(index)}
                            className="absolute bottom-4 right-4 z-20 bg-black/40 backdrop-blur-sm hover:bg-black/70 text-white rounded-full p-2.5 transition-all duration-200 border border-white/10"
                            aria-label="Toggle mute"
                          >
                            {mutedStates[index] ? (
                              <VolumeX className="h-4 w-4" />
                            ) : (
                              <Volume2 className="h-4 w-4" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};