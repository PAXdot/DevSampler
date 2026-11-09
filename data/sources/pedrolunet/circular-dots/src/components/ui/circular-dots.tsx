"use client";

import * as React from "react";

const DEFAULT_SIZE = 20;
const DEFAULT_DURATION = 800;

export type CircularDotsPlayState = "running" | "paused";

export interface CircularDotsProps extends Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  "color"
> {
  /** Width and height in pixels. Defaults to `20`. */
  size?: number;
  /** Any CSS color. Defaults to `currentColor`. */
  color?: string;
  /** Length of one loop in milliseconds. Defaults to `800`. */
  duration?: number;
  /** Pauses or resumes the animation. Defaults to `running`. */
  playState?: CircularDotsPlayState;
}

/**
 * Eight dots in a ring, the brightest hopping from one to the next.
 *
 * Ported from the Svelte "loadsv" spinner library by Pedro Lunet
 * (https://loadsv.pedrolu.net). Original license: MIT.
 */
export default function CircularDots({
  size = DEFAULT_SIZE,
  color,
  duration,
  playState,
  className,
  style,
  ...rest
}: CircularDotsProps) {
  return (
    <span
      aria-hidden="true"
      {...rest}
      className={["lsv", "lsv-circular-dots", className]
        .filter(Boolean)
        .join(" ")}
      style={
        {
          "--lsv-size": `${size}px`,
          "--_duration":
            duration === undefined
              ? `var(--lsv-duration, ${DEFAULT_DURATION}ms)`
              : `${duration}ms`,
          "--_play-state": playState ?? "var(--lsv-play-state, running)",
          color,
          ...style,
        } as React.CSSProperties
      }
    >
      {Array.from({ length: 8 }, (_, i) => (
        <span key={i} style={{ "--i": i } as React.CSSProperties} />
      ))}
    </span>
  );
}
