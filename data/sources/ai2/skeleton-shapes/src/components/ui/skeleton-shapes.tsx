"use client";

import type * as React from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

/* Shapes skeleton family: 5 geometric primitives (circle, square, soft square, pill, bar). The Essentials family changes the ANIMATION; this family changes the SHAPE - the animation is the same calm token pulse in every variant. Colour comes ONLY from tokens; alpha via color-mix(in oklab). Skeletons are decorative: the root is aria-hidden. The pulse stops under reduced motion (a static placeholder). */

export type StyledSize = "sm" | "md" | "lg" | "xl";

type Props = React.ComponentProps<"div"> & { size?: StyledSize };

/* The whole family's shared calm pulse: a framer-motion opacity loop (NO keyframes). */
function Block({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={cn("block bg-secondary", className)}
      animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
      transition={
        reduce
          ? undefined
          : { duration: 1.6, ease: "easeInOut", repeat: Infinity, delay }
      }
    />
  );
}

/* Kare/daire olcegi (kenar uzunlugu). */
const box: Record<StyledSize, string> = {
  sm: "size-8",
  md: "size-10",
  lg: "size-12",
  xl: "size-16",
};

/* Cubuk/hap yuksekligi. */
const bar: Record<StyledSize, string> = {
  sm: "h-3",
  md: "h-4",
  lg: "h-5",
  xl: "h-6",
};

/* Hap genisligi. */
const pill: Record<StyledSize, string> = {
  sm: "w-16",
  md: "w-20",
  lg: "w-24",
  xl: "w-28",
};

const root = "inline-flex";

/* Circle: tam yuvarlak avatar/ikon yeri. */
export function CircleSkeleton({ className, size = "md", ...props }: Props) {
  return (
    <div
      data-slot="styled-skeleton"
      aria-hidden="true"
      className={cn(root, className)}
      {...props}
    >
      <Block className={cn("rounded-full", box[size])} />
    </div>
  );
}

/* Square: keskin kenarli kare (thumbnail yeri). */
export function SquareSkeleton({ className, size = "md", ...props }: Props) {
  return (
    <div
      data-slot="styled-skeleton"
      aria-hidden="true"
      className={cn(root, className)}
      {...props}
    >
      <Block className={cn("rounded-none", box[size])} />
    </div>
  );
}

/* Rounded: yumusak koseli kare (kart/tile yeri). */
export function RoundedSkeleton({ className, size = "md", ...props }: Props) {
  return (
    <div
      data-slot="styled-skeleton"
      aria-hidden="true"
      className={cn(root, className)}
      {...props}
    >
      <Block className={cn("rounded-xl", box[size])} />
    </div>
  );
}

/* Pill: tam yuvarlatilmis yatay hap (badge/chip yeri). */
export function PillSkeleton({ className, size = "md", ...props }: Props) {
  return (
    <div
      data-slot="styled-skeleton"
      aria-hidden="true"
      className={cn(root, className)}
      {...props}
    >
      <Block className={cn("rounded-full", bar[size], pill[size])} />
    </div>
  );
}

/* Bar: a single full-width bar (a line placeholder). */
export function BarSkeleton({ className, size = "md", ...props }: Props) {
  return (
    <div
      data-slot="styled-skeleton"
      aria-hidden="true"
      className={cn("flex w-full", className)}
      {...props}
    >
      <Block className={cn("w-full rounded-md", bar[size])} />
    </div>
  );
}

export default CircleSkeleton;
