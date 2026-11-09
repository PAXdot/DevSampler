"use client";

import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps {
  className?: string;
}

export function AnimatedGradientBackground({
  className,
}: AnimatedGradientBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-white dark:bg-background" />
      <div className="absolute -top-1/4 -left-1/4 h-[60%] w-[60%] rounded-full bg-rose-200/70 blur-3xl animate-gradient-blob-1" />
      <div className="absolute top-0 right-0 h-[55%] w-[55%] rounded-full bg-amber-200/70 blur-3xl animate-gradient-blob-2" />
      <div className="absolute bottom-0 left-1/4 h-[50%] w-[50%] rounded-full bg-emerald-200/70 blur-3xl animate-gradient-blob-3" />
      <div className="absolute bottom-0 right-0 h-[55%] w-[55%] rounded-full bg-sky-200/60 blur-3xl animate-gradient-blob-1" />
    </div>
  );
}

export default AnimatedGradientBackground;
