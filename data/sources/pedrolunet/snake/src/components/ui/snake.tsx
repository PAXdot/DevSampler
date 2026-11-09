"use client";

import * as React from "react";

export type PlayState = "running" | "paused";
export type Cap = "round" | "flat";

export interface SnakeProps extends Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  "color"
> {
  /** Width and height in pixels. Defaults to `20`. */
  size?: number;
  /** Any CSS color. Defaults to `currentColor`. */
  color?: string;
  /** Length of one loop in milliseconds. Defaults to `1500`. */
  duration?: number;
  /** Pauses or resumes the animation. Defaults to `running`. */
  playState?: PlayState;
  /** How the ends of the stroke are drawn. Defaults to `round`. */
  cap?: Cap;
}

const DEFAULT_SIZE = 20;
const DEFAULT_DURATION = 1500;

/**
 * An arc chasing its own tail, stretching out and shrinking back as it turns.
 *
 * The one spinner that animates more than transform and opacity: the stretch is
 * `stroke-dasharray` and `stroke-dashoffset`, which repaint the arc every frame.
 *
 * Ported from the `Snake` spinner in loadsv (https://loadsv.pedrolu.net) by Pedro Lunet.
 * Original: Root.svelte + spinners/Snake.svelte, MIT licensed.
 */
export default function Snake({
  cap = "round",
  size = DEFAULT_SIZE,
  color,
  duration,
  playState,
  className,
  style,
  ...rest
}: SnakeProps) {
  return (
    <span
      aria-hidden="true"
      {...rest}
      className={["lsv", "lsv-snake", className].filter(Boolean).join(" ")}
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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <circle
          cx="12"
          cy="12"
          r="9.5"
          strokeLinecap={cap === "round" ? "round" : "butt"}
        />
      </svg>
    </span>
  );
}
