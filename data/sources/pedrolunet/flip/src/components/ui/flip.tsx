import * as React from "react";

export interface FlipProps extends Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  "color"
> {
  /** Width and height in pixels. Defaults to `20`. */
  size?: number;
  /** Any CSS color. Defaults to `currentColor`. */
  color?: string;
  /** Length of one loop in milliseconds. Defaults to `1600`. */
  duration?: number;
  /** Pauses or resumes the animation. Defaults to `running`. */
  playState?: "running" | "paused";
}

const DEFAULT_SIZE = 20;
const DEFAULT_DURATION = 1600;

/**
 * A square flipping over on one axis, then the other.
 *
 * Ported to React from loadsv (https://loadsv.pedrolu.net) by Pedro Lunet, MIT licensed.
 */
export default function Flip({
  size = DEFAULT_SIZE,
  color,
  duration,
  playState,
  className,
  style,
  ...rest
}: FlipProps) {
  return (
    <span
      aria-hidden="true"
      {...rest}
      className={["lsv", "lsv-flip", className].filter(Boolean).join(" ")}
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
      <span />
    </span>
  );
}
