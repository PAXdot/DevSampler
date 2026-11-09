"use client";

import type * as React from "react";

import { cn } from "@/lib/utils";

/* Scroll-area gutter family: 5 decorative scroll areas. They draw a VISIBLE rail or gutter (track) for the scrollbar, and the thumb slides inside that rail. Track and thumb colours come ONLY from tokens (alpha via color-mix). size -> the viewport height. */

export type StyledSize = "sm" | "md" | "lg" | "xl";

const height: Record<StyledSize, string> = {
  sm: "h-40",
  md: "h-56",
  lg: "h-72",
  xl: "h-96",
};

const base =
  "w-full overflow-y-auto rounded-lg border border-border bg-surface-2 p-3";

/* Varsayilan icerik: kaydirmayi tetikleyecek kadar uzun, token-stilli satirlar. */
function DefaultRows({ count = 16 }: { count?: number }) {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
        >
          <span className="font-medium">Satir {i + 1}</span>
          <span className="text-xs text-muted-foreground">token</span>
        </div>
      ))}
    </div>
  );
}

type Props = {
  className?: string;
  size?: StyledSize;
  children?: React.ReactNode;
};

/* Rail: dolu, hap seklinde ray; thumb border-transparent + bg-clip-content ile iceride. */
export function RailScrollArea({ className, size = "md", children }: Props) {
  return (
    <div
      data-slot="styled-scroll-area"
      className={cn(
        base,
        height[size],
        "[scrollbar-width:thin] [scrollbar-color:var(--color-border)_var(--color-surface-3)]",
        "[&::-webkit-scrollbar]:w-3.5",
        "[&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[color-mix(in_oklab,var(--color-foreground)_6%,transparent)]",
        "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-[3px] [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:bg-clip-content",
        className,
      )}
    >
      {children ?? <DefaultRows />}
    </div>
  );
}

/* Groove: cerceveli, oyuk goruntulu ray (border + ic bg); thumb dolu. */
export function GrooveScrollArea({ className, size = "md", children }: Props) {
  return (
    <div
      data-slot="styled-scroll-area"
      className={cn(
        base,
        height[size],
        "[scrollbar-width:thin] [scrollbar-color:var(--color-border)_var(--color-surface-3)]",
        "[&::-webkit-scrollbar]:w-3.5",
        "[&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:border [&::-webkit-scrollbar-track]:border-solid [&::-webkit-scrollbar-track]:border-border [&::-webkit-scrollbar-track]:bg-[color-mix(in_oklab,var(--color-foreground)_4%,transparent)]",
        "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-[3px] [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:bg-clip-content",
        className,
      )}
    >
      {children ?? <DefaultRows />}
    </div>
  );
}

/* Wide: genis, belirgin ray + thumb. */
export function WideScrollArea({ className, size = "md", children }: Props) {
  return (
    <div
      data-slot="styled-scroll-area"
      className={cn(
        base,
        height[size],
        "[scrollbar-width:auto] [scrollbar-color:var(--color-border)_var(--color-surface-3)]",
        "[&::-webkit-scrollbar]:w-5",
        "[&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[color-mix(in_oklab,var(--color-foreground)_8%,transparent)]",
        "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-4 [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-[color-mix(in_oklab,var(--color-foreground)_35%,transparent)] [&::-webkit-scrollbar-thumb]:bg-clip-content",
        className,
      )}
    >
      {children ?? <DefaultRows />}
    </div>
  );
}

/* Inset: the rail leaves a gap at the top and bottom (margin) and the thumb slides inside it. */
export function InsetScrollArea({ className, size = "md", children }: Props) {
  return (
    <div
      data-slot="styled-scroll-area"
      className={cn(
        base,
        height[size],
        "[scrollbar-width:thin] [scrollbar-color:var(--color-border)_var(--color-surface-3)]",
        "[&::-webkit-scrollbar]:w-3",
        "[&::-webkit-scrollbar-track]:my-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[color-mix(in_oklab,var(--color-foreground)_6%,transparent)]",
        "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:bg-clip-content",
        className,
      )}
    >
      {children ?? <DefaultRows />}
    </div>
  );
}

/* Bordered: ray seffaf, thumb token cerceveli (hollow-ish). */
export function BorderedScrollArea({
  className,
  size = "md",
  children,
}: Props) {
  return (
    <div
      data-slot="styled-scroll-area"
      className={cn(
        base,
        height[size],
        "[scrollbar-width:thin] [scrollbar-color:var(--color-border)_transparent]",
        "[&::-webkit-scrollbar]:w-3.5",
        "[&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[color-mix(in_oklab,var(--color-foreground)_3%,transparent)]",
        "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-border [&::-webkit-scrollbar-thumb]:bg-[color-mix(in_oklab,var(--color-foreground)_10%,transparent)]",
        className,
      )}
    >
      {children ?? <DefaultRows />}
    </div>
  );
}

export default RailScrollArea;
