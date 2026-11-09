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

const IMG_BASE =
  "https://pub-8abee449136941f5b0a1cd2c014534e9.r2.dev/vault-listing-images/assets-images/stack-spread";

const IMAGES = [
  { src: `${IMG_BASE}/img8.png`, alt: "Plane" },
  { src: `${IMG_BASE}/img2.png`, alt: "Painting" },
  { src: `${IMG_BASE}/img7.png`, alt: "Breaker" },
  { src: `${IMG_BASE}/img3.png`, alt: "Dog" },
  { src: `${IMG_BASE}/img5.png`, alt: "Footballer" },
  { src: `${IMG_BASE}/img6.png`, alt: "Jacket" },
  { src: `${IMG_BASE}/img1.png`, alt: "Meadow" },
  { src: `${IMG_BASE}/img4.png`, alt: "Stripes" },
];

// Dynamically generate a perfect radial layout with both Desktop and Mobile coordinates
const generateRadialCards = () => {
  const radiusX = 35; // vw for desktop
  const radiusY = 32; // vh for desktop
  const total = IMAGES.length;

  return IMAGES.map((item, i) => {
    const angle = (i * (Math.PI * 2)) / total;
    // Offset by -90 degrees so the first card is at 12 o'clock
    const x = Math.cos(angle - Math.PI / 2) * radiusX;
    const y = Math.sin(angle - Math.PI / 2) * radiusY;
    const rotate = (angle * 180) / Math.PI;

    return {
      item,
      // Initial stacked offset (slight stagger)
      linearOffset: { x: (i - total / 2) * 5, y: (i - total / 2) * 2 },
      linearRotate: (i - total / 2) * 2,
      // Desktop positioning & sizing
      target: { x, y, rotate, scale: 0.85, w: 15, h: 22 },
      // Mobile positioning & sizing (tighter X, wider Y, larger cards)
      targetSm: { 
        x: x * 0.6, 
        y: y * 1.2, 
        rotate, 
        scale: 0.85, 
        w: 35, 
        h: 28 
      },
      z: i + 1,
    };
  });
};

const CARDS = generateRadialCards();

// Ultra-smooth physics tuning
const SPRING_CONFIG = { stiffness: 60, damping: 20, mass: 0.5 };
const PROGRESS_SPRING = { stiffness: 80, damping: 25, restDelta: 0.001 };

function usePointerParallax(active: boolean, enabled: boolean) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, SPRING_CONFIG);
  const y = useSpring(rawY, SPRING_CONFIG);

  useEffect(() => {
    if (!enabled || !active) {
      rawX.set(0);
      rawY.set(0);
      return;
    }

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
  
  // Pick target based on screen size
  const activeTarget = isMobile ? card.targetSm : card.target;
  const depthFactor = 0.4 + (index / total) * 0.6; // Creates parallax depth tiers

  const translate = useTransform(
    [progress, pointer.x, pointer.y],
    ([p, px, py]: number[]) => {
      // Custom cubic ease for snappier deployment
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

export default function RadialSpreadHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive layout detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check immediately on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, PROGRESS_SPRING);

  // Compress the animation into the middle 60% of the scroll
  const progress = useTransform(smoothProgress, [0.1, 0.9], [0, 1]);

  const [spread, setSpread] = useState(false);
  useMotionValueEvent(progress, "change", (p) => setSpread(p > 0.95));

  const pointer = usePointerParallax(spread, !reduce);

  // Text animations now start hidden/scaled down and fade IN as the user scrolls
  const textScale = useTransform(progress, [0, 1], [0.85, 1]);
  const textOpacity = useTransform(progress, [0.2, 0.8], [0, 1]);

  return (
    <section 
      ref={wrapRef} 
      className="relative w-full h-[350vh] bg-slate-50 dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-500"
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden flex items-center justify-center">
        
        {/* Ambient Backlight (Responsive to Light/Dark Modes) */}
        <motion.div
          className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-60 dark:opacity-40 blur-[100px] md:blur-[120px]"
          style={{ scale: textScale }}
        >
          <div className="w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] rounded-full bg-blue-300/40 dark:bg-blue-500/20 mix-blend-multiply dark:mix-blend-screen" />
        </motion.div>

        {/* Central Typography */}
        <motion.div
          className="pointer-events-none z-[5] flex flex-col items-center text-center px-6"
          style={{ opacity: textOpacity, scale: textScale }}
        >
          <h2 className="text-4xl md:text-[6vw] font-medium tracking-tighter">
            Perfect Symmetry.
          </h2>
          <p className="mt-4 max-w-[50ch] text-sm md:text-[1.2vw] font-light opacity-80 dark:opacity-60">
            Scroll down to watch the rigid stack expand into a calculated orbit.
            Math replaces manual placement for flawless responsive scaling.
          </p>
        </motion.div>

        {/* Cards rendering */}
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