import * as React from "react";

export type PlayState = "running" | "paused";
/** How a rotating spinner moves through each turn. */
export type Easing = "linear" | "ease-in-out" | "stacked";
/** How the ends of a stroke are drawn. */
export type Cap = "round" | "flat";

/** Props the Ring spinner accepts. Extra attributes land on the root <span>. */
export interface RingProps extends Omit<
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
  playState?: PlayState;
  /** How it moves through each turn. Defaults to `linear`. */
  easing?: Easing;
  /** How the ends of the stroke are drawn. Defaults to `round`. */
  cap?: Cap;
}

const DEFAULT_SIZE = 20;
/** Default loop length of the ring spinner, in milliseconds. */
const RING_DURATION = 800;

/**
 * An arc rotating in a faint circle.
 *
 * Ported from loadsv (Svelte) by Pedro Lunet — https://loadsv.pedrolu.net
 */
function Ring({
  size = DEFAULT_SIZE,
  color,
  duration,
  playState,
  easing = "linear",
  cap = "round",
  className,
  style,
  ...rest
}: RingProps) {
  const classes = ["lsv", "lsv-ring", className].filter(Boolean).join(" ");

  return (
    <span
      aria-hidden="true"
      {...rest}
      className={classes}
      style={{
        ["--lsv-size" as any]: `${size}px`,
        ["--_duration" as any]:
          duration === undefined
            ? `var(--lsv-duration, ${RING_DURATION}ms)`
            : `${duration}ms`,
        ["--_play-state" as any]: playState ?? "var(--lsv-play-state, running)",
        color,
        ...style,
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        data-easing={easing}
      >
        <circle cx="12" cy="12" r="9.5" strokeOpacity={0.2} />
        <circle
          cx="12"
          cy="12"
          r="9.5"
          strokeDasharray="15 60"
          strokeLinecap={cap === "round" ? "round" : "butt"}
        />
      </svg>
    </span>
  );
}

export default Ring;
