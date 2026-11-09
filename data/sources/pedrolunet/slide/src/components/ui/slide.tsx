import * as React from "react";

export interface SlideProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Width and height in pixels. Defaults to `20`. */
  size?: number;
  /** Any CSS color. Defaults to `currentColor`. */
  color?: string;
  /** Length of one loop in milliseconds. Defaults to `2400`. */
  duration?: number;
  /** Pauses or resumes the animation. Defaults to `running`. */
  playState?: "running" | "paused";
}

const DEFAULT_SIZE = 20;
/** Default loop length of the slide spinner, in milliseconds. */
const DEFAULT_DURATION = 2400;

/**
 * Three dots taking turns sliding into the empty corner of a square.
 *
 * Ported from the Svelte `Slide` spinner in loadsv (https://loadsv.pedrolu.net)
 * by Pedro Lunet, MIT licensed.
 */
export default function Slide({
  size = DEFAULT_SIZE,
  color,
  duration,
  playState,
  className,
  style,
  ...rest
}: SlideProps) {
  return (
    <span
      aria-hidden="true"
      {...rest}
      className={["lsv", "lsv-slide", className].filter(Boolean).join(" ")}
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
      {Array.from({ length: 3 }).map((_, i) => (
        <span key={i} style={{ "--i": i } as React.CSSProperties} />
      ))}
    </span>
  );
}
