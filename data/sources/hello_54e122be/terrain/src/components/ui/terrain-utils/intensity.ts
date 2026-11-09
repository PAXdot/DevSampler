/**
 * One option, `intensity`, for Terrain. It turns it into the one number the
 * engine takes: two straight lines that meet at 0.5, where the number is the
 * figure's default, with the figure's limits at 0 and 1.
 *
 * Excerpted from @lucasmarkes/hairline's shared intensity table (every other
 * figure's row removed; the terrain row and every function are copied verbatim).
 */

export type FigureId = "terrain";

/** Terrain's number at intensity 0, 0.5 and 1: radius, in cells. */
export const TABLE: Record<FigureId, readonly [number, number, number]> = {
  terrain: [1.5, 3, 5],
};

export const DEFAULT = 0.5;

/** An intensity from anything: numeric strings are read, what is not a finite number is the default, the rest is clamped to 0…1. */
export function intensity(value: unknown): number {
  const n = typeof value === "string" && value.trim() !== "" ? Number(value) : value;
  if (typeof n !== "number" || !Number.isFinite(n)) return DEFAULT;
  return Math.min(1, Math.max(0, n));
}

/** The figure's own number for an intensity, rounded to three decimals so 0.7 gives Terrain the right radius and not a long float. */
export function parameter(figure: FigureId, value: unknown): number {
  const [lo, mid, hi] = TABLE[figure];
  const i = intensity(value);
  const v = i <= 0.5 ? lo + (i / 0.5) * (mid - lo) : mid + ((i - 0.5) / 0.5) * (hi - mid);
  return Math.round(v * 1000) / 1000;
}
