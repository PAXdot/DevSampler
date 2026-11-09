import type { CSSProperties, HTMLAttributes } from "react";
import type { Options } from "roughjs/bin/core";

/**
 * rough.js fill pattern for sketch shapes that have a `fill` color set.
 * @see https://roughjs.com/
 */
export type FillStyle =
  | "hachure"
  | "solid"
  | "zigzag"
  | "cross-hatch"
  | "dots"
  | "dashed"
  | "zigzag-line";

/**
 * Primitive shape drawn by {@link RoughSvg} / rough.js behind HTML content.
 */
export type RoughShape = "rectangle" | "ellipse" | "line" | "line-vertical" | "path";

/**
 * Shared sketch styling props passed to doodle-ui components and {@link RoughSvg}.
 * Unset fields inherit {@link DoodleUIProvider} defaults, then CSS variables
 * (`--doodle-ui-*`), then library constants such as {@link DEFAULT_ROUGHNESS}.
 */
export interface SketchProps {
  roughness?: number;
  seed?: number;
  sketchColor?: string;
  bowing?: number;
  fillStyle?: FillStyle;
  strokeWidth?: number;
  hachureGap?: number;
  hachureAngle?: number;
  fillWeight?: number;
}

/**
 * Props for the low-level {@link RoughSvg} sketch layer.
 */
export interface RoughSvgProps extends SketchProps {
  shape?: RoughShape;
  width?: number;
  height?: number;
  fill?: string;
  inset?: number;
  path?: string;
  className?: string;
  style?: CSSProperties;
}

export type PolymorphicClassName = Pick<HTMLAttributes<HTMLElement>, "className" | "style">;

/**
 * Maps doodle-ui sketch props to rough.js `Options` for a single draw call.
 */
export function toRoughOptions(
  props: SketchProps & { fill?: string; stroke?: string },
): Options {
  const stroke = props.stroke ?? props.sketchColor ?? DEFAULT_INK;
  const options: Options = {
    roughness: props.roughness ?? DEFAULT_ROUGHNESS,
    bowing: props.bowing ?? DEFAULT_BOWING,
    stroke,
    strokeWidth: props.strokeWidth ?? DEFAULT_STROKE_WIDTH,
    seed: props.seed,
  };
  if (props.fill) {
    options.fill = props.fill;
    options.fillStyle = props.fillStyle ?? "hachure";
    if (props.hachureGap !== undefined) options.hachureGap = props.hachureGap;
    if (props.hachureAngle !== undefined) options.hachureAngle = props.hachureAngle;
    if (props.fillWeight !== undefined) options.fillWeight = props.fillWeight;
  }
  return options;
}

/** Default roughness when no prop, provider, or CSS override is set. */
export const DEFAULT_ROUGHNESS = 1.5;
/** Default bowing when no prop, provider, or CSS override is set. */
export const DEFAULT_BOWING = 1;
/** Default stroke width when no prop, provider, or CSS override is set. */
export const DEFAULT_STROKE_WIDTH = 1.75;
/** Default light-mode ink / stroke color. */
export const DEFAULT_INK = "#1f1d1a";
/** Default dark-mode ink / stroke color. */
export const DEFAULT_DARK_INK = "#f3f4f6";
/** Default light-mode paper background token. */
export const DEFAULT_PAPER = "#f7f6f2";
/** Default dark-mode page background token. */
export const DEFAULT_DARK_PAPER = "#131923";
/** Default dark-mode card surface token. */
export const DEFAULT_DARK_CARD_BG = "#131923";
/** Default inset for {@link RoughSvg} stroke clipping. */
export const DEFAULT_INSET = 3;

/** Semantic sketch colors for light mode (ink, accent, status, paper). */
export const SKETCH_COLORS = {
  ink: DEFAULT_INK,
  accent: "#e24b3b",
  accentFill: "#fce8e4",
  secondaryFill: "#d7e3d4",
  paper: "#eef0ea",
  info: "#1d4e89",
  warning: "#8a5200",
  error: "#b91c1c",
  success: "#2d6a4f",
  accentInk: "#9b2c20",
} as const;

/** Semantic sketch colors for dark mode. */
export const DARK_SKETCH_COLORS = {
  ink: DEFAULT_DARK_INK,
  accent: "#f87171",
  accentInk: "#f87171",
  accentFill: "rgba(248, 113, 113, 0.22)",
  secondaryFill: "rgba(255, 255, 255, 0.08)",
  paper: DEFAULT_DARK_PAPER,
  cardBg: DEFAULT_DARK_CARD_BG,
  shadow: "#000000",
  info: "#60a5fa",
  warning: "#fbbf24",
  error: "#f87171",
  success: "#34d399",
} as const;
