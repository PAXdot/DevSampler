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

const IMAGES = [
  { src: "https://cdn.21st.dev/assets/mirror/ed/edd7770890e0692a1297d92fcc312451fcc2fbd91e33352745ba545ef621559f.jpg", alt: "Plane" },
  { src: "https://cdn.21st.dev/assets/mirror/fa/fabd4a9ba3fb9e4f11c4d33794a4d3c51c4d4795e0dc6b304ede48e607a429c6.jpg", alt: "Painting" },
  { src: "https://cdn.21st.dev/assets/mirror/9e/9e861b98e4ece3e3e5780aebefa1f187d3a54dcf09fa07bf6f5f25a088a79d2e.jpg", alt: "Breaker" },
  { src: "https://cdn.21st.dev/assets/mirror/6d/6d85cf558c98134c388bd3e9d85e7b85f986a62b9b96f33a66e33305049fce85.jpg", alt: "Dog" },
  { src: "https://cdn.21st.dev/assets/mirror/ce/ce99901abda11cd71d801b879a90f623f5a1c68c63f8aa6d34c2415b35bd76b4.jpg", alt: "Footballer" },
  { src: "https://cdn.21st.dev/assets/mirror/8d/8d1a3f0cd728cdb261a08e10075c2ee23c5f5b3655738400314907d4fa0987a9.jpg", alt: "Jacket" },
  { src: "https://cdn.21st.dev/assets/mirror/2d/2d59816e20fa11843e20f244bca14f9f4c55dd058e98ed87d779c83c23b9f325.jpg", alt: "Meadow" },
  { src: "https://cdn.21st.dev/assets/mirror/96/9626c87f656eaa15e08486db4e7ecc217c0243440a21d301a3af6c8092b22a9b.jpg", alt: "Stripes" },
];

// Dynamically generate a diagonal slant layout
const generateSlantedCards = () => {
  const total = IMAGES.length;

  return IMAGES.map((item, i) => {
    const progress = i / (total - 1); // 0 to 1
    const centeredProgress = progress - 0.5; // -0.5 to 0.5

    // Desktop positioning (Bottom-Left to Top-Right)
    const x = centeredProgress * 65; // vw
    const y = -centeredProgress * 55; // vh (negative means up)
    const rotate = centeredProgress * 40; // fan out rotation

    return {
      item,
      // Initial stacked offset
      linearOffset: { x: centeredProgress * 15, y: -centeredProgress * 10 },
      linearRotate: centeredProgress * 10,
      
      target: { x, y, rotate, scale: 0.9, w: 14, h: 22 },
      targetSm: { 
        x: centeredProgress * 80, 
        y: -centeredProgress * 70, 
        rotate, 
        scale: 0.85, 
        w: 30, 
        h: 24 
      },
      z: i + 1,
    };
  });
};

const CARDS = generateSlantedCards();
const SPRING_CONFIG = { stiffness: 60, damping: 20, mass: 0.5 };
const PROGRESS_SPRING = { stiffness: 80, damping: 25, restDelta: 0.001 };

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

function Card({ card, progress, pointer, index, total, isSpreadActive, isMobile }: any) {
  const { item, linearOffset, linearRotate } = card;
  const activeTarget = isMobile ? card.targetSm : card.target;
  const depthFactor = 0.4 + (index / total) * 0.6;

  const translate = useTransform(
    [progress, pointer.x, pointer.y],
    ([p, px, py]: number[]) => {
      const easeP = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      const tx = linearOffset.x + (activeTarget.x - linearOffset.x) * easeP;
      const ty = linearOffset.y + (activeTarget.y - linearOffset.y) * easeP;

      const dx = tx - px * 3 * depthFactor * p;
      const dy = ty - py * 3 * depthFactor * p;
      return `calc(-50% + ${dx}vw) calc(-50% + ${dy}vh)`;
    }
  );

  const rotate = useTransform(progress, [0, 1], [linearRotate, activeTarget.rotate]);
  const scale = useTransform(progress, [0, 1], [0.7, activeTarget.scale]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 will-change-transform cursor-pointer"
      style={{
        width: `${activeTarget.w}vw`,
        height: `${activeTarget.h}vh`,
        zIndex: card.z,
        translate,
        rotate,
        scale,
      }}
      whileHover={
        isSpreadActive
          ? { scale: activeTarget.scale * 1.1, zIndex: 100, transition: SPRING_CONFIG }
          : undefined
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

export default function SlantedSpreadHero() {
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

  return (
    <section ref={wrapRef} className="relative w-full h-[350vh] bg-slate-50 dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-500">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden flex items-center justify-center">
        
        <motion.div
          className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-60 dark:opacity-40 blur-[100px] md:blur-[120px]"
          style={{ scale: textScale }}
        >
          <div className="w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] rounded-full bg-purple-300/40 dark:bg-purple-500/20 mix-blend-multiply dark:mix-blend-screen" />
        </motion.div>

        <motion.div
          className="pointer-events-none z-[5] flex flex-col items-center text-center px-6"
          style={{ opacity: textOpacity, scale: textScale }}
        >
          <h2 className="text-4xl md:text-[6vw] font-medium tracking-tighter">
            Dynamic Cascade.
          </h2>
          <p className="mt-4 max-w-[50ch] text-sm md:text-[1.2vw] font-light opacity-80 dark:opacity-60">
            A mathematically calculated diagonal distribution across the viewport.
          </p>
        </motion.div>

        <div className="absolute inset-0 z-10">
          {CARDS.map((card, i) => (
            <Card key={i} card={card} progress={progress} pointer={pointer} index={i} total={CARDS.length} isSpreadActive={spread} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
}