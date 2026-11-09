"use client";

import type { CSSProperties, HTMLAttributes } from "react";

export type PlayState = "running" | "paused";

/** Props the Ribbon spinner accepts. Extra attributes land on the root `<span>`. */
export interface RibbonProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  "children" | "color"
> {
  /** Width and height in pixels. Defaults to `20`. */
  size?: number;
  /** Any CSS color. Defaults to `currentColor`. */
  color?: string;
  /** Length of one loop in milliseconds. Defaults to `1600`. */
  duration?: number;
  /** Pauses or resumes the animation. Defaults to `running`. */
  playState?: PlayState;
}

const DEFAULT_SIZE = 20;
const DEFAULT_DURATION = 1600;

/**
 * Three pills in an S, flowing into its mirror and back like a ribbon.
 *
 * Ported from the Svelte `Ribbon` spinner in the loadsv library
 * (https://loadsv.pedrolu.net) by Pedro Lunet, MIT licensed.
 */
export default function Ribbon({
  size = DEFAULT_SIZE,
  color,
  duration,
  playState,
  className,
  style,
  ...rest
}: RibbonProps) {
  const rootStyle: CSSProperties = {
    ["--lsv-size" as any]: `${size}px`,
    ["--_duration" as any]:
      duration === undefined
        ? `var(--lsv-duration, ${DEFAULT_DURATION}ms)`
        : `${duration}ms`,
    ["--_play-state" as any]: playState ?? "var(--lsv-play-state, running)",
    color,
    ...style,
  };

  return (
    <span
      aria-hidden="true"
      {...rest}
      className={["lsv", "lsv-ribbon", className].filter(Boolean).join(" ")}
      style={rootStyle}
    >
      {Array.from({ length: 3 }, (_, i) => (
        <span key={i} style={{ ["--i" as any]: i } as CSSProperties} />
      ))}
    </span>
  );
}
