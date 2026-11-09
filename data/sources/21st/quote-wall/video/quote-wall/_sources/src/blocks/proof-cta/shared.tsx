// Built with Remotion - https://remotion.pro/license
// Helpers for the testimonial and finale blocks: brand-derived surfaces, native
// type floors, short-clip time scaling and a few exact lucide icons. Frame-pure.
import React from "react";
import { AbsoluteFill, Img, useVideoConfig } from "remotion";
import { inkOn, luminance, withAlpha } from "../../kit/index";

export const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
/** Clamped 0..1 progress of f through [a, b]. */
export const prog = (f: number, a: number, b: number) => clamp01((f - a) / Math.max(1e-6, b - a));
/** Snap to 1/100 px so held frames rerender bit-identically. */
export const px = (v: number) => Math.round(v * 100) / 100;

/** Smallest text a block draws: above the readability gate (3% of height in 9:16, 1.8% otherwise). */
export const typeFloor = (height: number, portrait: boolean) => height * (portrait ? 0.031 : 0.019);

/**
 * Authored timelines are written for the default length. A shorter clip plays
 * them faster so the settled state still lands at 80% of the clip.
 */
export function useAuthoredFrame(frame: number, settle: number): number {
  const { durationInFrames } = useVideoConfig();
  const k = Math.min(1, (durationInFrames * 0.8) / settle);
  return frame / k;
}

export type Surface = {
  dark: boolean;
  /** Card fill. */
  card: string;
  /** Inset rows and fields on the card. */
  raised: string;
  ink: string;
  muted: string;
  faint: string;
  line: string;
  /** The darker of ink and surface, for shadows on any brand. */
  deep: string;
  shadow: (u: number) => string;
};

/** Card colors from two brand colors: the scene background (as the card's material) and the text color. */
export function surfaceFor(surface: string, ink: string): Surface {
  const s = surface === "transparent" ? inkOn(ink) : surface;
  const dark = luminance(s) < luminance(ink) || (luminance(s) === 0 && luminance(ink) === 0);
  const deep = dark ? s : ink;
  const card = dark ? `color-mix(in srgb, ${ink} 6%, ${s})` : s;
  return {
    dark,
    card,
    raised: `color-mix(in srgb, ${ink} ${dark ? 11 : 5}%, ${s})`,
    ink,
    muted: withAlpha(ink, 0.64),
    faint: withAlpha(ink, 0.42),
    line: withAlpha(ink, dark ? 0.14 : 0.1),
    deep,
    shadow: (u) => `0 ${px(u * 2.6)}px ${px(u * 7)}px -${px(u * 1.4)}px ${withAlpha(deep, dark ? 0.75 : 0.24)}, 0 0 0 1px ${withAlpha(ink, dark ? 0.1 : 0.07)}`,
  };
}

/** Scene ground: the brand background a shade off the card, one accent glow, no motion of its own. */
export const Ground: React.FC<{ background: string; color: string; accent: string; x?: number; y?: number; portrait?: boolean; glow?: number }> = ({ background, color, accent, x = 0.5, y = 0.5, portrait, glow = 1 }) => {
  if (background === "transparent") return null;
  const dark = luminance(background) < luminance(color);
  return (
    <>
      <AbsoluteFill style={{ background: dark ? background : `color-mix(in srgb, ${color} 4%, ${background})` }} />
      <AbsoluteFill
        style={{
          opacity: glow,
          background: `radial-gradient(ellipse ${portrait ? 120 : 70}% ${portrait ? 50 : 70}% at ${x * 100}% ${y * 100}%, ${withAlpha(accent, dark ? 0.24 : 0.16)}, ${withAlpha(accent, dark ? 0.06 : 0.04)} 45%, transparent 75%)`,
        }}
      />
    </>
  );
};

/** "2481" -> "2,481"; frame-pure, locale fixed. */
export const fmtInt = (n: number) => Math.round(n).toLocaleString("en-US");

/** "4.9" or "12,400" at progress p: counts the first number, keeps prefix, suffix and decimals. */
export function countText(value: string, p: number): string {
  const m = /^([^\d]*)([\d][\d,]*(?:\.\d+)?)(.*)$/.exec(value);
  if (!m) return value;
  const [, pre, num, post] = m as unknown as [string, string, string, string];
  const decimals = num.includes(".") ? num.split(".")[1]!.length : 0;
  const target = parseFloat(num.replace(/,/g, ""));
  const v = target * clamp01(p);
  const out = num.includes(",") ? v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) : v.toFixed(decimals);
  return `${pre}${out}${post}`;
}

/** "Mara Lind" -> "ML". */
export const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => Array.from(w)[0]!.toUpperCase())
    .join("");

type Node = [string, Record<string, string>];
/** Exact icon nodes from lucide (ISC), the ones the ui group's set lacks. */
const GLYPHS = {
  heart: [["path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" }]],
  "message-circle": [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }]],
  "repeat-2": [["path", { d: "m2 9 3-3 3 3" }], ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6" }], ["path", { d: "m22 15-3 3-3-3" }], ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10" }]],
  "badge-check": [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "m9 12 2 2 4-4" }]],
  star: [["polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }]],
  copy: [["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]],
  check: [["path", { d: "M20 6 9 17l-5-5" }]],
  search: [["circle", { cx: "11", cy: "11", r: "8" }], ["path", { d: "m21 21-4.3-4.3" }]],
  lock: [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }]],
  "rotate-cw": [["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" }], ["path", { d: "M21 3v5h-5" }]],
  "arrow-right": [["path", { d: "M5 12h14" }], ["path", { d: "m12 5 7 7-7 7" }]],
  "corner-down-left": [["polyline", { points: "9 10 4 15 9 20" }], ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4" }]],
  "chevron-left": [["path", { d: "m15 18-6-6 6-6" }]],
  "chevron-right": [["path", { d: "m9 18 6-6-6-6" }]],
  "scan-line": [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }], ["path", { d: "M7 12h10" }]],
} satisfies Record<string, Node[]>;

export type GlyphName = keyof typeof GLYPHS;

export const Glyph: React.FC<{ name: GlyphName; size: number; color: string; strokeWidth?: number; fill?: string; style?: React.CSSProperties }> = ({ name, size, color, strokeWidth = 2, fill = "none", style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: 0, overflow: "visible", ...style }}>
    {(GLYPHS[name] as Node[]).map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))}
  </svg>
);

/** A five-star row whose fill runs to `value` (0..5, fractional stars clip). */
export const StarRow: React.FC<{ value: number; size: number; gap?: number; color: string; empty: string; pop?: (i: number) => number }> = ({ value, size, gap = size * 0.18, color, empty, pop }) => (
  <div style={{ display: "flex", gap, flexShrink: 0 }}>
    {[0, 1, 2, 3, 4].map((i) => {
      const fill = clamp01(value - i);
      const s = pop ? pop(i) : 1;
      return (
        <div key={i} style={{ position: "relative", width: size, height: size, transform: s < 1 ? `scale(${px(s)})` : undefined, opacity: pop ? clamp01(s * 1.4) : 1 }}>
          <Glyph name="star" size={size} color={empty} fill={empty} strokeWidth={1.5} />
          {fill > 0 ? (
            <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${px((1 - fill) * 100)}% 0 0)` }}>
              <Glyph name="star" size={size} color={color} fill={color} strokeWidth={1.5} />
            </div>
          ) : null}
        </div>
      );
    })}
  </div>
);

/** Initials (or a picture) in a circle tinted with the accent. */
export const Avatar: React.FC<{ name: string; src?: string; size: number; accent: string; font: string; ring?: string }> = ({ name, src, size, accent, font, ring }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      flexShrink: 0,
      overflow: "hidden",
      display: "grid",
      placeItems: "center",
      background: src ? undefined : `linear-gradient(140deg, ${accent}, color-mix(in srgb, ${accent} 55%, ${inkOn(accent)}))`,
      boxShadow: ring ? `0 0 0 ${px(size * 0.05)}px ${ring}` : undefined,
    }}
  >
    {src ? (
      <Img src={src} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    ) : (
      <span style={{ fontFamily: font, fontWeight: 600, fontSize: size * 0.38, color: inkOn(accent), letterSpacing: "-0.02em", lineHeight: 1 }}>{initials(name)}</span>
    )}
  </div>
);
