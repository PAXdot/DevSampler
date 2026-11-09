import * as React from "react";

/**
 * Default width and height of the spinner, in pixels.
 * (loadsv: DEFAULT_SIZE from motion.ts)
 */
const DEFAULT_SIZE = 20;

/**
 * Default loop length of the Swirl spinner, in milliseconds.
 * (loadsv: durations.swirl from motion.ts)
 */
const DEFAULT_DURATION = 1000;

export type PlayState = "running" | "paused";

/** Props the Swirl spinner accepts. Extra attributes land on the root `<span>`. */
export interface SwirlProps extends Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  "color"
> {
  /** Width and height in pixels. Defaults to `20`. */
  size?: number;
  /** Any CSS color. Defaults to `currentColor`. */
  color?: string;
  /** Length of one loop in milliseconds. Defaults to `1000`. */
  duration?: number;
  /** Pauses or resumes the animation. Defaults to `running`. */
  playState?: PlayState;
}

/** The eight edge cells of a 3x3 grid, clockwise from the top left. */
const cells: Array<[number, number]> = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 2],
  [2, 1],
  [2, 0],
  [1, 0],
];

/**
 * Swirl — a bright cell gliding round the edge of a grid, trailing light.
 *
 * Ported faithfully to React from the Svelte original (`Swirl.svelte`) in
 * Pedro Lunet's loadsv library (https://loadsv.pedrolu.net). Same visual
 * result, same behaviour, same public options.
 *
 * - `--lsv-duration` and `--lsv-play-state` cascade from any ancestor, the
 *   `duration` and `playState` props override them on this spinner, and the
 *   spinner's own default (`1000ms`) comes last.
 * - Paints with `currentColor` by default; pass `color` to tint it directly.
 * - Respects `prefers-reduced-motion`: holds a still pose and gently breathes
 *   instead of animating (see global.css).
 */
export default function Swirl({
  size = DEFAULT_SIZE,
  color,
  duration,
  playState,
  className,
  style,
  ...rest
}: SwirlProps) {
  return (
    <span
      aria-hidden="true"
      {...rest}
      className={["lsv", "lsv-swirl", className].filter(Boolean).join(" ")}
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
      {cells.map(([row, col], k) => (
        <span
          key={k}
          style={
            {
              "--row": row,
              "--col": col,
              "--k": k,
            } as React.CSSProperties
          }
        />
      ))}
    </span>
  );
}
