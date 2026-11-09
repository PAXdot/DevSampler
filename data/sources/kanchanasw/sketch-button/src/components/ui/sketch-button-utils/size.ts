import type { CSSProperties } from "react";

export type DoodleSize = "sm" | "md" | "lg";

export const DOODLE_SIZES: readonly DoodleSize[] = ["sm", "md", "lg"] as const;

export interface SizeTokens {
  fontSize: number;
  paddingY: number;
  paddingX: number;
  minHeight: number;
  strokeWidth: number;
  iconSize: number;
  gap: number;
  controlBox: number;
}

export const SIZE_TOKENS: Record<DoodleSize, SizeTokens> = {
  sm: {
    fontSize: 13,
    paddingY: 4,
    paddingX: 12,
    minHeight: 30,
    strokeWidth: 1.5,
    iconSize: 14,
    gap: 6,
    controlBox: 16,
  },
  md: {
    fontSize: 15,
    paddingY: 8,
    paddingX: 16,
    minHeight: 38,
    strokeWidth: 1.75,
    iconSize: 16,
    gap: 8,
    controlBox: 20,
  },
  lg: {
    fontSize: 17,
    paddingY: 11,
    paddingX: 22,
    minHeight: 46,
    strokeWidth: 2,
    iconSize: 20,
    gap: 10,
    controlBox: 24,
  },
};

export const BADGE_SIZE_STYLES: Record<DoodleSize, CSSProperties> = {
  sm: { fontSize: 11, padding: "1px 8px", lineHeight: 1.35 },
  md: { fontSize: 12, padding: "2px 10px", lineHeight: 1.4 },
  lg: { fontSize: 14, padding: "3px 12px", lineHeight: 1.45 },
};

export const CONTROL_SIZE_STYLES: Record<DoodleSize, CSSProperties> = {
  sm: {
    fontSize: SIZE_TOKENS.sm.fontSize,
    padding: `${SIZE_TOKENS.sm.paddingY}px ${SIZE_TOKENS.sm.paddingX}px`,
    minHeight: SIZE_TOKENS.sm.minHeight,
    gap: SIZE_TOKENS.sm.gap,
  },
  md: {
    fontSize: SIZE_TOKENS.md.fontSize,
    padding: `${SIZE_TOKENS.md.paddingY}px ${SIZE_TOKENS.md.paddingX}px`,
    minHeight: SIZE_TOKENS.md.minHeight,
    gap: SIZE_TOKENS.md.gap,
  },
  lg: {
    fontSize: SIZE_TOKENS.lg.fontSize,
    padding: `${SIZE_TOKENS.lg.paddingY}px ${SIZE_TOKENS.lg.paddingX}px`,
    minHeight: SIZE_TOKENS.lg.minHeight,
    gap: SIZE_TOKENS.lg.gap,
  },
};

export const FIELD_SIZE_STYLES: Record<DoodleSize, CSSProperties> = {
  sm: {
    fontSize: SIZE_TOKENS.sm.fontSize,
    padding: `${SIZE_TOKENS.sm.paddingY}px 10px`,
    minHeight: SIZE_TOKENS.sm.minHeight,
  },
  md: {
    fontSize: SIZE_TOKENS.md.fontSize,
    padding: `${SIZE_TOKENS.md.paddingY}px 12px`,
    minHeight: SIZE_TOKENS.md.minHeight,
  },
  lg: {
    fontSize: SIZE_TOKENS.lg.fontSize,
    padding: `${SIZE_TOKENS.lg.paddingY}px 14px`,
    minHeight: SIZE_TOKENS.lg.minHeight,
  },
};

export const AVATAR_SIZE_PX: Record<DoodleSize, number> = {
  sm: 32,
  md: 40,
  lg: 48,
};

export const SWITCH_SIZE: Record<
  DoodleSize,
  { trackW: number; trackH: number; thumb: number }
> = {
  sm: { trackW: 36, trackH: 20, thumb: 14 },
  md: { trackW: 44, trackH: 24, thumb: 18 },
  lg: { trackW: 52, trackH: 28, thumb: 22 },
};

export function resolveSize(size?: DoodleSize): DoodleSize {
  return size ?? "md";
}

export function resolveAvatarPx(size?: DoodleSize | number): number {
  if (typeof size === "number") return size;
  return AVATAR_SIZE_PX[resolveSize(size)];
}
