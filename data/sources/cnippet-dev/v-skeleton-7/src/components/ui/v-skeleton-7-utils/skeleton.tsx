"use client";

import type React from "react";
import { cn } from "@/lib/utils";

export function Skeleton({
  className,
  ...props
}: React.ComponentProps<"div">): React.ReactElement {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-sm bg-muted",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-[skeleton-shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-foreground/10 before:to-transparent",
        className,
      )}
      data-slot="skeleton"
      {...props}
    />
  );
}

export default Skeleton;
