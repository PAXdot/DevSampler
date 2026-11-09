import * as React from "react";

const DEFAULT_SIZE = 20;
const DEFAULT_DURATION = 1000;

export type PlayState = "running" | "paused";

/** Props the Wave spinner accepts. Extra attributes land on the root `<span>`. */
export interface WaveProps extends Omit<
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

/**
 * Wave — five bars rising and falling in a wave.
 * Ported from loadsv (Svelte) by Pedro Lunet, MIT licensed.
 */
export default function Wave({
  size = DEFAULT_SIZE,
  color,
  duration,
  playState,
  className,
  style,
  ...rest
}: WaveProps) {
  return (
    <span
      aria-hidden="true"
      {...rest}
      className={["lsv", "lsv-wave", className].filter(Boolean).join(" ")}
      style={{
        ...style,
        ["--lsv-size" as any]: `${size}px`,
        ["--_duration" as any]:
          duration === undefined
            ? `var(--lsv-duration, ${DEFAULT_DURATION}ms)`
            : `${duration}ms`,
        ["--_play-state" as any]: playState ?? "var(--lsv-play-state, running)",
        color,
      }}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ ["--i" as any]: i } as React.CSSProperties} />
      ))}
    </span>
  );
}
