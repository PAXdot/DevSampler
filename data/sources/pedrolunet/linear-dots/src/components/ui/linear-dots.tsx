import * as React from "react";

const DEFAULT_SIZE = 20;
/** Default loop length for this spinner, in milliseconds. */
const DEFAULT_DURATION = 1000;

export type PlayState = "running" | "paused";

/** Props every loadsv spinner accepts. Extra attributes land on the root `<span>`. */
export interface LinearDotsProps extends Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  "children" | "color"
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

/**
 * Three dots lighting up in turn from left to right.
 *
 * Ported from the Svelte original (loadsv by Pedro Lunet, MIT).
 * `--lsv-duration` and `--lsv-play-state` cascade from any ancestor, the `duration`
 * and `playState` props override them on this single spinner, and the spinner's own
 * default comes last.
 */
export default function LinearDots({
  size = DEFAULT_SIZE,
  color,
  duration,
  playState,
  className,
  style,
  ...rest
}: LinearDotsProps) {
  return (
    <span
      aria-hidden="true"
      {...rest}
      className={["lsv", "lsv-linear-dots", className]
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
      {[0, 1, 2].map((i) => (
        <span key={i} style={{ "--i": i } as React.CSSProperties} />
      ))}
    </span>
  );
}
