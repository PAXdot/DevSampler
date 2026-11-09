/**
 * One option, `intensity`, for the Phosphor figure. It is turned into the
 * one number its engine takes: two straight lines that meet at 0.5, where the
 * number is the figure's default, with the figure's limits at 0 and 1.
 *
 * Trimmed from the upstream package's intensity.ts, which keeps this table
 * for all 27 figures; only Phosphor's row is kept here, scoped to this
 * standalone component.
 */

export type FigureId = "phosphor";

/** Phosphor's number at intensity 0, 0.5 and 1: the afterglow persistence, in ms. */
export const TABLE: Record<FigureId, readonly [number, number, number]> = {
  phosphor: [150, 520, 1500], // afterglow, ms
};

export const DEFAULT = 0.5;

/** An intensity from anything: numeric strings are read, what is not a finite number is the default, the rest is clamped to 0…1. */
export function intensity(value: unknown): number {
  const n = typeof value === "string" && value.trim() !== "" ? Number(value) : value;
  if (typeof n !== "number" || !Number.isFinite(n)) return DEFAULT;
  return Math.min(1, Math.max(0, n));
}

/** The figure's own number for an intensity, rounded to three decimals so 0.7 gives Phosphor 1251 and not 1250.9999999999998. */
export function parameter(figure: FigureId, value: unknown): number {
  const [lo, mid, hi] = TABLE[figure];
  const i = intensity(value);
  const v = i <= 0.5 ? lo + (i / 0.5) * (mid - lo) : mid + ((i - 0.5) / 0.5) * (hi - mid);
  return Math.round(v * 1000) / 1000;
}
