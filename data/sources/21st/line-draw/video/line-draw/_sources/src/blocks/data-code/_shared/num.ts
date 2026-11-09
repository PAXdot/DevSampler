// Built with Remotion - https://remotion.pro/license
// Small, frame-pure helpers shared by the data-code blocks.

/** 1234567.8 -> "1,234,568" (or with decimals). */
export const fmtNum = (n: number, decimals = 0) =>
  n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

/** Quintic ease-out on a clamped 0..1 progress: the long-tail odometer settle. */
export function easeOutQuint(x: number): number {
  const t = Math.max(0, Math.min(1, x));
  return 1 - Math.pow(1 - t, 5);
}

/** Cubic ease-in on a clamped 0..1 progress (exits, scatter pulls). */
export function easeIn(x: number): number {
  const t = Math.max(0, Math.min(1, x));
  return t * t * t;
}

/** Clamped 0..1 progress of f through [a, b]. */
export const prog = (f: number, a: number, b: number) => Math.max(0, Math.min(1, (f - a) / Math.max(1e-6, b - a)));

const parseHex = (c: string): [number, number, number] | null => {
  let hex = /^#([0-9a-f]{3,8})$/i.exec(c)?.[1];
  if (!hex) return null;
  if (hex.length === 3) hex = hex.split("").map((x) => x + x).join("");
  if (hex.length !== 6 && hex.length !== 8) return null;
  const n = parseInt(hex.slice(0, 6), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

/** Linear mix of two colors (exact for hex, color-mix otherwise). */
export function mix(a: string, b: string, t: number): string {
  const k = Math.max(0, Math.min(1, t));
  const x = parseHex(a);
  const y = parseHex(b);
  if (x && y) {
    const c = x.map((v, i) => Math.round(v + (y[i]! - v) * k));
    return `rgb(${c[0]},${c[1]},${c[2]})`;
  }
  return `color-mix(in srgb, ${b} ${Math.round(k * 100)}%, ${a})`;
}

/** Snap a value to 0 or 1 when it is within 1e-3, so held frames carry no sub-pixel transforms. */
export const snap01 = (v: number) => (v < 1e-3 ? 0 : v > 1 - 1e-3 ? 1 : v);
