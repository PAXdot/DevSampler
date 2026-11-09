// Built with Remotion - https://remotion.pro/license
// Local helpers for the text group (text reveals + kinetic copy). Frame-pure, no DOM measuring.
import React, { useId } from "react";
import { AbsoluteFill } from "remotion";
import { withAlpha } from "../../kit/index";

/** Approximate advance widths (em) of a grotesk sans at 500-600 weight (Geist / Inter class). */
const GLYPH: Record<string, number> = {
  A: 0.7, B: 0.66, C: 0.7, D: 0.72, E: 0.6, F: 0.58, G: 0.73, H: 0.74, I: 0.3, J: 0.52, K: 0.67, L: 0.56, M: 0.87,
  N: 0.75, O: 0.76, P: 0.64, Q: 0.76, R: 0.66, S: 0.63, T: 0.62, U: 0.73, V: 0.69, W: 0.98, X: 0.67, Y: 0.65, Z: 0.63,
  a: 0.56, b: 0.6, c: 0.54, d: 0.6, e: 0.57, f: 0.36, g: 0.6, h: 0.59, i: 0.26, j: 0.27, k: 0.54, l: 0.26, m: 0.89,
  n: 0.59, o: 0.59, p: 0.6, q: 0.6, r: 0.38, s: 0.51, t: 0.36, u: 0.59, v: 0.54, w: 0.79, x: 0.53, y: 0.54, z: 0.51,
  " ": 0.26, ".": 0.27, ",": 0.27, ":": 0.27, ";": 0.27, "!": 0.3, "?": 0.52, "'": 0.22, '"': 0.4, "-": 0.4, "/": 0.4,
  "&": 0.7, "@": 0.95, "%": 0.86, "+": 0.6, "$": 0.6, "#": 0.66, "(": 0.34, ")": 0.34,
};

/** Estimated width of `text` in em (plus `tracking` em per glyph). Good to a few percent for grotesk fonts. */
export function textEm(text: string, tracking = 0): number {
  let w = 0;
  for (const ch of text) w += (GLYPH[ch] ?? (/\d/.test(ch) ? 0.6 : 0.58)) + tracking;
  return w;
}

/**
 * Width of a brand family relative to the grotesk table above, measured with
 * canvas at weights 500-700 (Libre Baskerville runs ~20% wider, monospace ~35%).
 */
export function familyWidth(family?: string): number {
  if (!family) return 1;
  if (/Mono/i.test(family)) return 1.35;
  if (/Baskerville/i.test(family)) return 1.22;
  if (/Bebas|Caveat|Instrument Serif/i.test(family)) return 0.8;
  return 1;
}

/**
 * Largest font size (px) at which the widest single word of `text` fits `boxW`,
 * so a wrapping title never breaks inside a word. Bold grotesks measure up to
 * ~7% wider than `textEm`; `pad` is extra em on the word (chip padding etc.).
 */
export function wordFitSize(text: string, boxW: number, opts: { tracking?: number; family?: string; pad?: number } = {}): number {
  const { tracking = 0, family, pad = 0 } = opts;
  const words = stripMarks(text).split(/\s+/).filter(Boolean);
  const widest = Math.max(1, ...words.map((w) => textEm(w) * familyWidth(family) * 1.08 + Array.from(w).length * tracking + pad));
  return boxW / widest;
}

export type Seg = { text: string; em: boolean };

/** "Ship the *edge*" -> words, starred runs flagged. */
export function markedWords(input: string): Seg[] {
  const out: Seg[] = [];
  for (const seg of input.split(/(\*[^*]+\*)/g)) {
    if (!seg) continue;
    const em = seg.length > 2 && seg.startsWith("*") && seg.endsWith("*");
    for (const w of (em ? seg.slice(1, -1) : seg).split(/\s+/)) if (w) out.push({ text: w, em });
  }
  return out;
}

export const stripMarks = (s: string) => s.replace(/\*/g, "");

/** Index range [start, end) of the first case-insensitive whole-ish match of `word` in `text`, or null. */
export function findWord(text: string, word: string): [number, number] | null {
  const w = word.trim();
  if (!w) return null;
  const i = text.toLowerCase().indexOf(w.toLowerCase());
  return i < 0 ? null : [i, i + w.length];
}

/** Hard 0/1 step that snaps on integer frames (no sub-pixel noise on held frames). */
export const on = (frame: number, at: number) => (frame >= at ? 1 : 0);

/** Safe CSS id from React's useId (which contains colons). */
export function useSafeId(prefix: string): string {
  return `${prefix}-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
}

/**
 * A zero-size SVG holding a horizontal (directional) blur filter. Reference it
 * with `filter: url(#id)`. stdDeviation "x 0" smears only along x, which is
 * what a whip pan looks like; CSS blur() is isotropic.
 */
export const DirBlur: React.FC<{ id: string; x: number; y?: number }> = ({ id, x, y = 0 }) => (
  <svg width={0} height={0} style={{ position: "absolute", width: 0, height: 0 }} aria-hidden>
    <defs>
      <filter id={id} x="-50%" y="-20%" width="200%" height="140%" colorInterpolationFilters="sRGB">
        <feGaussianBlur stdDeviation={`${Math.max(0, x)} ${Math.max(0, y)}`} />
      </filter>
    </defs>
  </svg>
);

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='11' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

/**
 * Scene ground for the text scenes: flat brand background, one soft accent glow
 * (position in 0..1 of the frame), static grain. No motion of its own.
 */
export const SceneGround: React.FC<{ background: string; accent: string; glow: number; x?: number; y?: number; portrait?: boolean }> = ({
  background,
  accent,
  glow,
  x = 0.5,
  y = 0.3,
  portrait,
}) => (
  <>
    <AbsoluteFill style={{ background }} />
    {glow > 0 ? (
      <AbsoluteFill
        style={{
          opacity: glow,
          background: `radial-gradient(ellipse ${portrait ? 110 : 64}% ${portrait ? 42 : 60}% at ${x * 100}% ${y * 100}%, ${withAlpha(accent, 0.26)}, ${withAlpha(accent, 0.07)} 42%, transparent 74%)`,
        }}
      />
    ) : null}
    <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: 0.045, mixBlendMode: "overlay" }} />
  </>
);
