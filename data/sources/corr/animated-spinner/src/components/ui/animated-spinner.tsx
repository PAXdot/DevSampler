"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

export type AnimatedSpinnerSize = "sm" | "default" | "lg";
export type AnimatedSpinnerTone =
  "neutral" | "primary" | "muted" | "success" | "warning" | "destructive";

const sizeClassName: Record<AnimatedSpinnerSize, string> = {
  sm: "size-4 border-2",
  default: "size-5 border-2",
  lg: "size-7 border-[3px]",
};

const toneClassName: Record<AnimatedSpinnerTone, string> = {
  neutral: "border-foreground/20 border-t-foreground",
  primary: "border-primary/20 border-t-primary",
  muted: "border-muted-foreground/20 border-t-muted-foreground",
  success: "border-emerald-500/20 border-t-emerald-600",
  warning: "border-amber-500/25 border-t-amber-600",
  destructive: "border-destructive/20 border-t-destructive",
};

export function AnimatedSpinner({
  size = "default",
  tone = "neutral",
  label = "Loading",
  className,
}: {
  size?: AnimatedSpinnerSize;
  tone?: AnimatedSpinnerTone;
  label?: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <span
      role="status"
      aria-label={label}
      className={cn("inline-flex items-center justify-center", className)}
    >
      <motion.span
        aria-hidden="true"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{
          duration: 0.9,
          ease: "linear",
          repeat: reduceMotion ? 0 : Infinity,
        }}
        className={cn(
          "block rounded-full",
          sizeClassName[size],
          toneClassName[tone],
        )}
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}

export default AnimatedSpinner;
