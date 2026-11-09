"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

// The base path remains the same for easy integration
const IMAGES = [
  { 
    src: "https://cdn.21st.dev/assets/mirror/8d/8d977413e33d13b57b479928aaca7fa615349b474571111cee15c6b4c34f2610.jpg", 
    alt: "Cityscape at dusk" 
  },
  { 
    src: "https://cdn.21st.dev/assets/mirror/ac/ac9898cfaa05a97dd2f761001df77089b2d5c9a7ef314334ed8a365066c85731.jpg", 
    alt: "Vintage polaroid camera" 
  },
  { 
    src: "https://cdn.21st.dev/assets/mirror/43/43f7be43a5101374e8985553e60ae006fc2bbe0d0ec3bc63704dc63223ff751f.jpg", 
    alt: "Dramatic waterfall in forest" 
  },
  { 
    src: "https://cdn.21st.dev/assets/mirror/46/469ae1c35478b9e73601eb794cea6c165f46272adedba602bc9f840297958d00.jpg", 
    alt: "Portrait of a woman" 
  },
  { 
    src: "https://cdn.21st.dev/assets/mirror/43/43295ef5e54f2fb0feacfbea50a1ec931cd3e6035a639161d0f9cab2fd2c9883.jpg", 
    alt: "Basketball hoop against blue sky" 
  },
  { 
    src: "https://cdn.21st.dev/assets/mirror/39/3976b74adfe9797661c579160d9d74c15796f22e8a95d403eb65fb862dfdf146.jpg", 
    alt: "Artisan ceramic pottery" 
  },
  { 
    src: "https://cdn.21st.dev/assets/mirror/57/57e96de163ac4590642aa7394a0f881da10ddfc0040f617a563c8e8b9d5e63e2.jpg", 
    alt: "Vintage sports car" 
  },
  { 
    src: "https://cdn.21st.dev/assets/mirror/7e/7e50eacbe7a777eecd57647eba3689a92231910e98f09d767e09044fde890a18.jpg", 
    alt: "Cyclist racing in motion blur" 
  },
];

// Dynamically generate an even deeper, wider U-shape (inverted arc) layout
const generateInvertedArcCards = () => {
  const radiusX = 45; // widened vw
  const radiusY = 35; // deeper vh
  const total = IMAGES.length;

  return IMAGES.map((item, i) => {
    // Math.PI is left (180 deg), 0 is right (0 deg).
    const angle = Math.PI - (i / (total - 1)) * Math.PI;

    // Positive Y is downwards, creating the U-shape
    const x = Math.cos(angle) * radiusX;
    const y = Math.sin(angle) * radiusY + 10; // slightly lowered

    // Rotate cards following the curve
    const rotate = ((Math.PI / 2 - angle) * 180) / Math.PI;

    return {
      item,
      // Initial stagger when in a stack
      linearOffset: { x: (i - total / 2) * 5, y: -5 },
      linearRotate: (i - total / 2) * 2,

      target: { x, y, rotate, scale: 0.9, w: 14, h: 22 },
      targetSm: {
        x: Math.cos(angle) * 50,
        y: Math.sin(angle) * 40 + 20,
        rotate,
        scale: 0.85,
        w: 26,
        h: 22,
      },
      z: i + 1,
    };
  });
};

const CARDS = generateInvertedArcCards();

// --- REVISED: Adjusted springs for a much smoother animation experience ---
const SPRING_CONFIG = { stiffness: 40, damping: 25, mass: 0.5 }; // Softer springs
const PROGRESS_SPRING = { stiffness: 60, damping: 20, restDelta: 0.001 }; // Softer progress

function usePointerParallax(active: boolean, enabled: boolean) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, SPRING_CONFIG);
  const y = useSpring(rawY, SPRING_CONFIG);

  useEffect(() => {
    if (!enabled || !active) return;
    const onMove = (e: PointerEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 2);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [active, enabled, rawX, rawY]);

  return { x, y };
}

function Card({
  card,
  progress,
  pointer,
  index,
  total,
  isSpreadActive,
  isMobile,
}: any) {
  const { item, linearOffset, linearRotate } = card;
  const activeTarget = isMobile ? card.targetSm : card.target;

  // --- REVISED: Enhanced depth factor differences ---
  const depthFactor = 0.3 + (index / total) * 0.7;

  // Split into X axis for Framer Motion compatibility
  const x = useTransform([progress, pointer.x], ([p, px]: number[]) => {
    const easeP = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
    const tx = linearOffset.x + (activeTarget.x - linearOffset.x) * easeP;
    const dx = tx - px * 3 * depthFactor * p;
    return `calc(-50% + ${dx}vw)`;
  });

  // Split into Y axis for Framer Motion compatibility
  const y = useTransform([progress, pointer.y], ([p, py]: number[]) => {
    const easeP = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
    const ty = linearOffset.y + (activeTarget.y - linearOffset.y) * easeP;
    const dy = ty - py * 3 * depthFactor * p;
    return `calc(-50% + ${dy}vh)`;
  });

  const rotate = useTransform(progress, [0, 1], [linearRotate, activeTarget.rotate]);
  const scale = useTransform(progress, [0, 1], [0.7, activeTarget.scale]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 will-change-transform cursor-pointer"
      style={{
        width: `${activeTarget.w}vw`,
        height: `${activeTarget.h}vh`,
        zIndex: card.z,
        x,
        y,
        rotate,
        scale,
      }}
      // --- REVISED: Updated whileHover for a more dynamic and animated response ---
      whileHover={
        isSpreadActive
          ? {
              scale: activeTarget.scale * 1.15,
              rotate: activeTarget.rotate * 1.05,
              zIndex: 100,
              transition: SPRING_CONFIG,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
            }
          : {
              scale: 0.75,
              transition: SPRING_CONFIG,
              rotate: linearRotate * 1.1,
            }
      }
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl shadow-black/10 ring-1 ring-black/5 dark:shadow-black/40 dark:ring-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-black/60">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5 dark:to-white/10 opacity-60 z-10" />
        <img
          src={item.src}
          alt={item.alt}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
    </motion.div>
  );
}

export default function ArcSpreadHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, PROGRESS_SPRING);
  const progress = useTransform(smoothProgress, [0.1, 0.9], [0, 1]);

  const [spread, setSpread] = useState(false);
  useMotionValueEvent(progress, "change", (p) => setSpread(p > 0.95));

  const pointer = usePointerParallax(spread, !reduce);
  const textScale = useTransform(progress, [0, 1], [0.85, 1]);
  const textOpacity = useTransform(progress, [0.2, 0.8], [0, 1]);
  const textYOffset = useTransform(progress, [0, 1], ["-5vh", "0vh"]); // Subtle text entry animation

  return (
    <section
      ref={wrapRef}
      className="relative w-full h-[350vh] bg-slate-50 dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-500"
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden flex items-center justify-center">
        {/* --- REVISED: Broad non-colored background atmosphere (green central light removed) --- */}
        <motion.div
          className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-70 dark:opacity-50 blur-[200px] md:blur-[250px]" // Broadened blur, removed colored div
          style={{ scale: textScale }}
        />

        {/* REVISED: Hero text block with staggered, smoother entry */}
        <motion.div
          className="pointer-events-none z-[5] flex flex-col items-center text-center px-6 mt-[-15vh]" // Text lifted slightly above the U-Shape
          style={{ opacity: textOpacity, scale: textScale, y: textYOffset }}
        >
          <h2 className="text-4xl md:text-[6vw] font-medium tracking-tighter stagger-item">
            Crescent Arch.
          </h2>
          <p className="mt-4 max-w-[50ch] text-sm md:text-[1.2vw] font-light opacity-80 dark:opacity-60 stagger-item">
            Expanding into a perfectly calculated inverted semi-circle layout.
          </p>
        </motion.div>

        <div className="absolute inset-0 z-10">
          {CARDS.map((card, i) => (
            <Card
              key={i}
              card={card}
              progress={progress}
              pointer={pointer}
              index={i}
              total={CARDS.length}
              isSpreadActive={spread}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}