// Built with Remotion - https://remotion.pro/license
// Small frame-pure helpers shared by the brand-motion blocks (logos, backgrounds, transitions).

/** Clamped 0..1 progress of f through [a, b]. */
export const prog = (f: number, a: number, b: number) => Math.max(0, Math.min(1, (f - a) / Math.max(1e-6, b - a)));

/** Cubic ease-in on a clamped 0..1 progress (exits, zoom-throughs). */
export function easeIn(x: number): number {
  const t = Math.max(0, Math.min(1, x));
  return t * t * t;
}

/** Exponential ease-in: slow start, hard finish (the inverse of expoOut). */
export function expoIn(x: number): number {
  const t = Math.max(0, Math.min(1, x));
  return t <= 0 ? 0 : Math.pow(2, 10 * t - 10);
}

/** Sine ease-in-out on a clamped 0..1 progress (very calm, for drifts and blur dissolves). */
export function sineInOut(x: number): number {
  const t = Math.max(0, Math.min(1, x));
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

/** Characters of `text` visible when typing starts at `start`, one char every `per` frames. */
export const typed = (text: string, frame: number, start: number, per: number) =>
  text.slice(0, Math.max(0, Math.min(text.length, Math.floor((frame - start) / Math.max(0.25, per)) + 1)));

/** Snap to 1/100 px: sub-sub-pixel transforms are invisible but break bit-identical rerenders. */
export const px = (v: number) => Math.round(v * 100) / 100;

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
  return `color-mix(in srgb, ${a} ${Math.round((1 - k) * 100)}%, ${b})`;
}

/** Color at `t` along a list of stops (evenly spaced). */
export function along(stops: string[], t: number): string {
  if (stops.length === 0) return "#ffffff";
  if (stops.length === 1) return stops[0]!;
  const x = Math.max(0, Math.min(1, t)) * (stops.length - 1);
  const i = Math.min(stops.length - 2, Math.floor(x));
  return mix(stops[i]!, stops[i + 1]!, x - i);
}

/** Up to two letters for a monogram: "Northwind Labs" -> "NL", "acme" -> "A". */
export function monogram(name: string, max = 1): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  const letters = words.slice(0, max).map((w) => [...w][0] ?? "");
  return letters.join("").toLocaleUpperCase("en-US");
}
