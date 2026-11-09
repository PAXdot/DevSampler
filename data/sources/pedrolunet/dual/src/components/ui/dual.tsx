import * as React from "react";

export type Cap = "round" | "flat";
export type PlayState = "running" | "paused";

/** Props every spinner accepts. Extra attributes land on the root `<span>`. */
export interface DualProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
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
  /** How the ends of the strokes are drawn. Defaults to `round`. */
  cap?: Cap;
}

const DEFAULT_SIZE = 20;
const DEFAULT_DURATION = 1000;

/**
 * Dual — two arcs turning in opposite directions.
 * Ported from loadsv (Svelte) by Pedro Lunet, MIT licensed.
 * https://github.com/PedroLunet/loadsv
 */
export default function Dual({
  size = DEFAULT_SIZE,
  color,
  duration,
  playState,
  cap = "round",
  className,
  style,
  ...rest
}: DualProps) {
  const linecap = cap === "round" ? "round" : "butt";

  const rootStyle: React.CSSProperties = {
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
      className={["lsv", "lsv-dual", className].filter(Boolean).join(" ")}
      style={rootStyle}
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
          strokeDasharray="20 60"
          strokeLinecap={linecap}
        />
      </svg>
      <svg
        className="lsv-dual-inner"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <circle
          cx="12"
          cy="12"
          r="5"
          strokeDasharray="10.5 32"
          strokeDashoffset="-15.7"
          strokeLinecap={linecap}
        />
      </svg>
    </span>
  );
}
