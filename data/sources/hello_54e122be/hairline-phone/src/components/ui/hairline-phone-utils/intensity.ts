/**
 * `intensity`, for the Phone figure. Two straight lines that meet at 0.5,
 * where the number is the figure's default, with the figure's limits at 0
 * and 1. Trimmed from the shared table (intensity.ts) to Phone's own entry,
 * since this extraction ships Phone alone.
 */

export type FigureId = "phone";

/** Phone's number at intensity 0, 0.5 and 1: the gap, in viewBox units. */
export const TABLE: Record<FigureId, readonly [number, number, number]> = {
  phone: [16, 28, 40], // gap, viewBox units
};

export const DEFAULT = 0.5;

/** An intensity from anything: numeric strings are read, what is not a finite number is the default, the rest is clamped to 0…1. */
export function intensity(value: unknown): number {
  const n = typeof value === "string" && value.trim() !== "" ? Number(value) : value;
  if (typeof n !== "number" || !Number.isFinite(n)) return DEFAULT;
  return Math.min(1, Math.max(0, n));
}

/** The figure's own number for an intensity, rounded to three decimals so 0.7 gives Riffle 60 and not 59.99999999999999 (comment kept from upstream; Phone itself rounds the same way). */
export function parameter(figure: FigureId, value: unknown): number {
  const [lo, mid, hi] = TABLE[figure];
  const i = intensity(value);
  const v = i <= 0.5 ? lo + (i / 0.5) * (mid - lo) : mid + ((i - 0.5) / 0.5) * (hi - mid);
  return Math.round(v * 1000) / 1000;
}
