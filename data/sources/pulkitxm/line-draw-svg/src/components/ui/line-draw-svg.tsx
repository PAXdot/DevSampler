"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const PRESET_PATHS: Record<string, string> = {
  arrow: "M50 10 L90 50 L70 50 L70 90 L30 90 L30 50 L10 50 Z",
  circle: "M50 5 A45 45 0 1 1 49.99 5",
  diamond: "M50 10 L90 50 L50 90 L10 50 Z",
  heart:
    "M50 85 C20 60 5 35 25 15 C40 0 50 15 50 15 C50 15 60 0 75 15 C95 35 80 60 50 85 Z",
  star: "M50 5 L61 40 L98 40 L68 60 L79 95 L50 75 L21 95 L32 60 L2 40 L39 40 Z",
};

type TriggerMode = "scroll" | "hover" | "mount";

type GsapEase =
  | "power1.inOut"
  | "power2.inOut"
  | "power3.inOut"
  | "power1.in"
  | "power2.in"
  | "elastic.out"
  | "back.out";

interface LineDrawSvgProps {
  path?: string;
  preset?: keyof typeof PRESET_PATHS;
  trigger?: TriggerMode;
  className?: string;
  strokeClassName?: string;
  duration?: number;
  ease?: GsapEase | string;
  scrub?: boolean | number;
  start?: string;
  end?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
}

export function LineDrawSvg({
  path: pathProp,
  preset = "diamond",
  trigger = "scroll",
  className,
  strokeClassName,
  duration = 1,
  ease = "power2.inOut",
  scrub = 1,
  start = "top 80%",
  end = "top 20%",
  width = 120,
  height = 120,
  strokeWidth = 2,
}: LineDrawSvgProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [hovered, setHovered] = useState(false);

  const path = pathProp ?? PRESET_PATHS[preset] ?? PRESET_PATHS.diamond;

  useLayoutEffect(() => {
    const pathEl = pathRef.current;
    if (!pathEl) {
      return;
    }

    const length = pathEl.getTotalLength();
    pathEl.style.strokeDasharray = `${length}`;
    pathEl.style.strokeDashoffset = `${length}`;

    if (trigger === "mount") {
      gsap.to(pathEl, {
        duration,
        ease,
        strokeDashoffset: 0,
      });
      return;
    }

    if (trigger === "hover") {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(pathEl, {
        duration,
        ease,
        scrollTrigger: {
          end,
          start,
          trigger: svgRef.current,
        },
        scrub,
        strokeDashoffset: 0,
      });
    });
    return () => ctx.revert();
  }, [trigger, duration, ease, scrub, start, end]);

  useEffect(() => {
    if (trigger !== "hover") {
      return;
    }
    const pathEl = pathRef.current;
    if (!pathEl) {
      return;
    }
    const pathLength = pathEl.getTotalLength();
    if (hovered) {
      pathEl.style.strokeDasharray = `${pathLength}`;
      gsap.to(pathEl, { duration, ease, strokeDashoffset: 0 });
    } else {
      gsap.to(pathEl, {
        duration: duration * 0.5,
        ease: "power2.in",
        strokeDashoffset: pathLength,
      });
    }
  }, [trigger, hovered, duration, ease]);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox="0 0 100 100"
      className={cn("overflow-visible", className)}
      onMouseEnter={() => trigger === "hover" && setHovered(true)}
      onMouseLeave={() => trigger === "hover" && setHovered(false)}
      aria-hidden={true}
    >
      <title>Line draw SVG</title>
      <path
        ref={pathRef}
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className={cn("text-violet-500", strokeClassName)}
      />
    </svg>
  );
}

export default LineDrawSvg;
