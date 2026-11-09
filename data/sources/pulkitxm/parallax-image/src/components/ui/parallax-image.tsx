"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  children: React.ReactNode;
  className?: string;
  childrenClassName?: string;
  intensity?: number;
  containerRef?: React.RefObject<HTMLElement | null>;
}

export function ParallaxImage({
  children,
  className,
  childrenClassName,
  intensity = 50,
  containerRef,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const scrollEl: HTMLElement | Window = containerRef?.current ?? window;

    const update = () => {
      const containerTop = containerRef?.current
        ? containerRef.current.getBoundingClientRect().top
        : 0;
      const containerHeight = containerRef?.current
        ? containerRef.current.clientHeight
        : window.innerHeight;

      const rect = el.getBoundingClientRect();
      const elCenter = rect.top + rect.height / 2 - containerTop;
      const normalized = (elCenter / containerHeight - 0.5) * 2;

      y.set(normalized * intensity);
    };

    scrollEl.addEventListener("scroll", update, { passive: true });
    update();

    return () => scrollEl.removeEventListener("scroll", update);
  }, [containerRef, intensity, y]);

  return (
    <motion.div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        style={{
          bottom: -intensity,
          left: 0,
          position: "absolute",
          right: 0,
          top: -intensity,
          y,
        }}
        className={cn(
          "[&_img]:size-full [&_img]:object-cover",
          childrenClassName,
        )}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default ParallaxImage;
