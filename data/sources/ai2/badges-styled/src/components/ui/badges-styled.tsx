"use client";

import type * as React from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

/* Badge family: 5 decorative badges. Colour comes ONLY from tokens (alpha via color-mix), the size is aligned with the base badge scale (+xl). framer-motion is used only for the Pulse dot; the pulse stops under reduced-motion. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

const box: Record<StyledSize, string> = {
  sm: "h-5 gap-1 rounded-md px-1.5 text-xs",
  md: "h-6 gap-1.5 rounded-md px-2 text-xs",
  lg: "h-7 gap-1.5 rounded-lg px-2.5 text-sm",
  xl: "h-8 gap-2 rounded-lg px-3 text-sm",
};

const base =
  "inline-flex w-fit shrink-0 items-center justify-center whitespace-nowrap font-medium [&_svg]:size-3 [&_svg]:shrink-0 [&_i]:text-xs [&_i]:leading-none";

type Props = React.ComponentProps<"span"> & { size?: StyledSize };

/* Dot: bastaki token durum noktasi. */
export function DotBadge({
  className,
  size = "md",
  children,
  ...props
}: Props) {
  return (
    <span
      data-slot="styled-badge"
      className={cn(
        base,
        box[size],
        "border border-border bg-secondary text-secondary-foreground",
        className,
      )}
      {...props}
    >
      <span className="size-1.5 rounded-full bg-success" />
      {children}
    </span>
  );
}

/* Gradient: token gradyan dolgu. */
export function GradientBadge({
  className,
  size = "md",
  children,
  ...props
}: Props) {
  return (
    <span
      data-slot="styled-badge"
      className={cn(
        base,
        box[size],
        "text-info-foreground [background-image:linear-gradient(135deg,var(--info),var(--brand))]",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

/* Glow: token isima (box-shadow) ile parlayan rozet. */
export function GlowBadge({
  className,
  size = "md",
  children,
  ...props
}: Props) {
  return (
    <span
      data-slot="styled-badge"
      className={cn(
        base,
        box[size],
        "bg-info text-info-foreground shadow-[0_0_12px_-2px_var(--info)]",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

/* Pulse: canli gostergesi - token nokta halkasi nabiz atar. */
export function PulseBadge({
  className,
  size = "md",
  children,
  ...props
}: Props) {
  const reduce = useReducedMotion();
  return (
    <span
      data-slot="styled-badge"
      className={cn(
        base,
        box[size],
        "border border-border bg-secondary text-secondary-foreground",
        className,
      )}
      {...props}
    >
      <span className="relative inline-flex size-1.5">
        {!reduce && (
          <motion.span
            className="absolute inset-0 rounded-full bg-danger"
            animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
            transition={{ duration: 1.4, ease: "easeOut", repeat: Infinity }}
          />
        )}
        <span className="relative inline-flex size-1.5 rounded-full bg-danger" />
      </span>
      {children}
    </span>
  );
}

/* Outline: token gradyan kenar, saydam govde. */
export function OutlineBadge({
  className,
  size = "md",
  children,
  ...props
}: Props) {
  return (
    <span
      data-slot="styled-badge"
      className={cn(
        base,
        box[size],
        "border-0 bg-[linear-gradient(var(--background),var(--background)),linear-gradient(120deg,var(--info),var(--brand))] bg-origin-border text-foreground [background-clip:padding-box,border-box] [border:1px_solid_transparent]",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

const StyledBadges = {
  DotBadge,
  GradientBadge,
  GlowBadge,
  PulseBadge,
  OutlineBadge,
};

export default StyledBadges;
