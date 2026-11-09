"use client";

import * as React from "react";
import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ─── Types ─────────────────────────────────────────────────── */

export type ScrollAreaOrientation = "vertical" | "horizontal" | "both";
export type ScrollAreaHideStrategy = "auto" | "never";

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: ScrollAreaOrientation;
  hideScrollbar?: ScrollAreaHideStrategy;
}

/* ─── Scrollbar chrome ──────────────────────────────────────── */

/**
 * Auto-hide uses opacity only (~150ms). Opacity fades are fine under
 * prefers-reduced-motion, they do not convey essential motion.
 */
const scrollbarTrackClass = cn(
  "flex touch-none select-none p-0.5 transition-opacity duration-150",
  "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2.5",
  "data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:w-full",
);

const scrollbarThumbClass = cn(
  "relative flex-1 rounded-full bg-[color:var(--border-strong,color-mix(in_srgb,var(--foreground)_16%,transparent))]",
  "before:absolute before:content-[''] before:left-1/2 before:top-1/2 before:size-full",
  "before:min-h-11 before:min-w-11 before:-translate-x-1/2 before:-translate-y-1/2",
);

function Scrollbar({
  orientation,
  hideScrollbar,
}: {
  orientation: "vertical" | "horizontal";
  hideScrollbar: ScrollAreaHideStrategy;
}) {
  return (
    <BaseScrollArea.Scrollbar
      orientation={orientation}
      className={cn(
        scrollbarTrackClass,
        hideScrollbar === "auto" &&
          "opacity-0 data-[hovering]:opacity-100 data-[scrolling]:opacity-100",
        hideScrollbar === "never" && "opacity-100",
      )}
    >
      <BaseScrollArea.Thumb className={scrollbarThumbClass} />
    </BaseScrollArea.Scrollbar>
  );
}

/* ─── <ScrollArea> ──────────────────────────────────────────── */

export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  (
    {
      className,
      orientation = "vertical",
      hideScrollbar = "auto",
      children,
      ...props
    },
    ref,
  ) => {
    const showVertical = orientation === "vertical" || orientation === "both";
    const showHorizontal = orientation === "horizontal" || orientation === "both";

    return (
      <BaseScrollArea.Root
        ref={ref}
        data-slot="scroll-area"
        data-orientation={orientation}
        data-hide-scrollbar={hideScrollbar}
        className={cn("relative", className)}
        {...props}
      >
        <BaseScrollArea.Viewport
          // Focusable when scrollable so keyboard users can arrow/Page scroll.
          tabIndex={0}
          className={cn(
            "size-full rounded-[inherit] outline-none",
            "focus-visible:ring-2 focus-visible:ring-[color:var(--primitive-ring,color-mix(in_srgb,var(--foreground)_45%,transparent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
          )}
        >
          <BaseScrollArea.Content className="min-w-full">
            {children}
          </BaseScrollArea.Content>
        </BaseScrollArea.Viewport>
        {showVertical ? (
          <Scrollbar orientation="vertical" hideScrollbar={hideScrollbar} />
        ) : null}
        {showHorizontal ? (
          <Scrollbar orientation="horizontal" hideScrollbar={hideScrollbar} />
        ) : null}
        {orientation === "both" ? <BaseScrollArea.Corner /> : null}
      </BaseScrollArea.Root>
    );
  },
);
ScrollArea.displayName = "ScrollArea";
