"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface StaggerRevealGridProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  columns?: number;
  stagger?: number;
  duration?: number;
  fromY?: number;
  fromScale?: number;
  fromOpacity?: number;
  start?: string;
  ease?: string;
}

export function StaggerRevealGrid({
  children,
  className,
  itemClassName,
  columns = 3,
  stagger = 0.08,
  duration = 0.5,
  fromY = 40,
  fromScale = 0.9,
  fromOpacity = 0,
  start = "top 85%",
  ease = "back.out(1.2)",
}: StaggerRevealGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const els = containerRef.current?.querySelectorAll("[data-reveal]");
      if (!els?.length) {
        return;
      }
      gsap.fromTo(
        els,
        { opacity: fromOpacity, scale: fromScale, y: fromY },
        {
          duration,
          ease,
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            start,
            trigger: containerRef.current,
          },
          stagger,
          y: 0,
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, [duration, stagger, fromY, fromScale, fromOpacity, start, ease]);

  return (
    <div
      ref={containerRef}
      className={cn("grid gap-3", className)}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {React.Children.map(children, (child, i) =>
        child ? (
          <div
            key={
              React.isValidElement(child) && child.key != null
                ? child.key
                : `reveal-${i}`
            }
            data-reveal={true}
            className={cn(itemClassName)}
          >
            {child}
          </div>
        ) : null,
      )}
    </div>
  );
}

export default StaggerRevealGrid;
