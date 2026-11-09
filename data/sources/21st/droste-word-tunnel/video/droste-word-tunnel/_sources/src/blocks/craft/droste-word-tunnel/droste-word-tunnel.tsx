// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, fitFontSize, luminance, ramp, useLayout, withAlpha } from "../../../kit/index";
import type { Aspect } from "../../../kit/spec";
import type { schema } from "./droste-word-tunnel.schema";

/** Frame the dive lands on (eased, with a small overshoot past the target level). */
const LAND = 104;
/** Exposures of the whole tunnel spread along the zoom: a real shutter blur, not a filter. */
const SHUTTER = 10;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='260' height='260'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")";

/**
 * Dive profile as a velocity curve: a long build into a sustained rush, braking,
 * then a short reverse lobe so the camera passes the landing level by a hair and
 * eases back. Integrated once into a lookup table (normalised to exactly 1).
 */
const TABLE = (() => {
  const N = 1200, END = 0.86, OVER = 0.014;
  const push = (u: number) => (u < END ? Math.pow(u, 1.6) * Math.pow(1 - u / END, 1.4) : 0);
  const back = (u: number) => (u > 0.78 && u < 1 ? Math.sin((Math.PI * (u - 0.78)) / 0.22) ** 2 : 0);
  let i1 = 0, i2 = 0;
  for (let k = 0; k < N; k++) { const u = (k + 0.5) / N; i1 += push(u) / N; i2 += back(u) / N; }
  const out = [0];
  let acc = 0;
  for (let k = 0; k < N; k++) { const u = (k + 0.5) / N; acc += (((1 + OVER) / i1) * push(u) - (OVER / i2) * back(u)) / N; out.push(acc); }
  out[N] = 1;
  return out;
})();
function dive(u: number): number {
  const x = Math.max(0, Math.min(1, u)) * (TABLE.length - 1);
  const k = Math.min(TABLE.length - 2, Math.floor(x));
  return TABLE[k]! + (TABLE[k + 1]! - TABLE[k]!) * (x - k);
}

type Geo = { r: number; cx: number; cy: number; box: { x: number; y: number; w: number; h: number } };

/**
 * Each level is a full frame "print": the word across the top and, below it, the
 * next level shrunk by `r` around the fixed point (cx, cy). Zooming by 1/r about
 * that point is exactly one level, so the dive never runs out.
 */
function geometry(aspect: Aspect, W: number, H: number): Geo {
  // The landed word is the title card; the next level is a small echo of it below, not a second card.
  if (aspect === "9:16") return { r: 0.34, cx: W * 0.5, cy: H * 0.915, box: { x: W * 0.06, y: H * 0.07, w: W * 0.88, h: H * 0.5 } };
  if (aspect === "1:1") return { r: 0.32, cx: W * 0.5, cy: H * 0.94, box: { x: W * 0.06, y: H * 0.06, w: W * 0.88, h: H * 0.52 } };
  return { r: 0.3, cx: W * 0.5, cy: H * 0.94, box: { x: W * 0.05, y: H * 0.06, w: W * 0.9, h: H * 0.56 } };
}

/** Neutral light and shade (glints, shadows, vignette) as rgb triples, mixed at an alpha. */
const LIGHT_RGB = "255,255,255";
const SHADE_RGB = "0,0,0";
const tint = (rgb: string, a: number) => `rgba(${rgb},${a})`;
/** The glint's hot core: the secondary color pushed most of the way to light. */
const glintCore = (secondary: string) => `color-mix(in srgb, ${secondary} 70%, rgb(${LIGHT_RGB}))`;

function contrast(a: string, b: string): number {
  const la = luminance(a), lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

function smooth(e0: number, e1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

/** Camera depth in levels at a (fractional) frame. */
function depthAt(f: number, depth: number): number {
  if (f <= 0) return 0;
  if (f >= LAND) return depth;
  return depth * dive(f / LAND);
}

export const Component: React.FC<z.infer<typeof schema>> = ({ text, color, primary, secondary, background, fontFamily, depth, twist, grain }) => {
  const frame = useCurrentFrame();
  const { width: W, height: H, aspect, unit } = useLayout();
  const transparent = background === "transparent";
  const family = brandFontStack(fontFamily);
  const weight = /Serif|Bebas|Caveat/.test(fontFamily) ? 400 : 700;
  const g = geometry(aspect, W, H);
  const K = depth;

  // Type: largest size that fits the word box. Portrait and square stack a phrase on two
  // balanced lines (a taller, more poster-like block); explicit lines, so nothing reflows mid-zoom.
  const minFont = aspect === "9:16" ? H * 0.03 : H * 0.018;
  const words = text.trim().split(/\s+/);
  const sizeFor = (rows: string[]) =>
    Math.max(minFont, Math.min(g.box.h * 0.8, (g.box.w * 0.96) / (Math.max(...rows.map((l) => l.length)) * 0.56), (g.box.h * 0.94) / (rows.length * 1.15)));
  let rows = [words.join(" ")];
  if (aspect !== "16:9" && words.length > 1) {
    let best: string[] = rows;
    for (let k = 1; k < words.length; k++) {
      const cand = [words.slice(0, k).join(" "), words.slice(k).join(" ")];
      if (Math.max(...cand.map((l) => l.length)) < Math.max(...best.map((l) => l.length))) best = cand;
    }
    if (sizeFor(best) >= sizeFor(rows) * 0.95) rows = best;
  }
  const fontSize = sizeFor(rows);

  // Palette cycles background -> primary -> secondary, counted from the level we land on.
  const panelOf = (i: number) => [background, primary, secondary][(((i - K) % 3) + 3) % 3]!;
  const inkOf = (panel: string) => {
    if (panel === "transparent" || transparent) return color;
    return contrast(color, panel) >= contrast(background, panel) ? color : background;
  };

  const t0 = depthAt(frame, K);
  const t = Math.abs(t0 - K) < 1e-4 ? K : t0;
  const v = Math.abs(depthAt(frame + 0.5, K) - depthAt(frame - 0.5, K));
  const spread = v * 0.5;
  const shots = v > 0.003 ? SHUTTER : 1;

  // Glint across the landed word once the camera has settled.
  const glint = ramp(frame, [LAND + 2, LAND + 34], [0, 1]);
  const glintOn = glint > 0 && glint < 1;

  const R0 = unit * 6;
  const rad = (Math.PI / 180) * twist;

  const stack = (tc: number, base: boolean) => {
    const out: React.ReactNode[] = [];
    const first = Math.floor(tc) - 1;
    for (let i = first; i < first + 14; i++) {
      const s = Math.pow(g.r, i - tc);
      if (s * W < (base ? 3 : 14)) break;
      const rot = twist * (i - tc);
      const panel = panelOf(i);
      const ink = inkOf(panel);
      const clear = panel === "transparent";
      // Transparent backdrops: levels the camera has flown past dissolve, so no full-frame paint remains.
      const opacity = transparent && i < tc ? 1 - smooth(0.35, 1, tc - i) : 1;
      if (opacity <= 0.001) continue;
      // Corners square up as a level grows to fill the frame (and the landed one is a clean full-bleed).
      const radius = R0 * smooth(0.97, 0.55, s);
      const wordPx = fontSize * s;

      // Readability probe: tag the copies that are big enough and fully on screen.
      let tag = false;
      if (base && wordPx >= minFont * 1.01 && opacity > 0.9) {
        const ca = Math.cos(rad * (i - tc)), sa = Math.sin(rad * (i - tc));
        const pts = [
          [g.box.x, g.box.y], [g.box.x + g.box.w, g.box.y], [g.box.x, g.box.y + g.box.h], [g.box.x + g.box.w, g.box.y + g.box.h],
        ].map(([x, y]) => {
          const dx = (x! - g.cx) * s, dy = (y! - g.cy) * s;
          return [g.cx + dx * ca - dy * sa, g.cy + dx * sa + dy * ca];
        });
        tag = pts.every(([x, y]) => x! >= 1 && y! >= 1 && x! <= W - 1 && y! <= H - 1);
      }
      const hero = base && i === K && glintOn;
      const showWord = wordPx > 1.2;
      const mark = unit * 3.4;
      const markW = Math.max(1, unit * 0.22);
      // Crop marks belong to the nested prints; they fade out as a level grows into the full frame.
      const markA = 0.4 * (1 - smooth(0.55, 0.97, s));
      const inset = unit * 3.2;
      out.push(
        <div
          key={i}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: W,
            height: H,
            transformOrigin: `${g.cx}px ${g.cy}px`,
            transform: Math.abs(s - 1) < 1e-6 && Math.abs(rot) < 1e-6 ? undefined : `rotate(${rot}deg) scale(${s})`,
            background: clear ? undefined : panel,
            borderRadius: radius,
            opacity,
            boxShadow: clear || i <= Math.floor(tc) ? undefined : base ? `0 ${H * 0.008}px ${H * 0.018}px ${tint(SHADE_RGB, 0.22)}` : `0 ${H * 0.008}px ${H * 0.02}px ${tint(SHADE_RGB, 0.26)}`,
            overflow: "visible",
          }}
        >
          {clear ? null : (
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: radius,
                // Flat printed stock: only a fine edge rule in the level's own ink, no gloss.
                boxShadow: `inset 0 0 0 ${Math.max(1, unit * 0.16)}px ${withAlpha(ink, 0.12)}`,
              }}
            />
          )}
          {/* Crop marks: every copy is a framed print of the one before it. */}
          {!base || markA < 0.01 ? null : [[0, 0], [1, 0], [0, 1], [1, 1]].map(([mx, my], k) => (
            <div
              key={k}
              style={{
                position: "absolute",
                left: mx ? undefined : inset,
                right: mx ? inset : undefined,
                top: my ? undefined : inset,
                bottom: my ? inset : undefined,
                width: mark,
                height: mark,
                borderLeft: mx ? undefined : `${markW}px solid ${withAlpha(ink, markA)}`,
                borderRight: mx ? `${markW}px solid ${withAlpha(ink, markA)}` : undefined,
                borderTop: my ? undefined : `${markW}px solid ${withAlpha(ink, markA)}`,
                borderBottom: my ? `${markW}px solid ${withAlpha(ink, markA)}` : undefined,
              }}
            />
          ))}
          {showWord ? (
            <div
              style={{
                position: "absolute",
                left: g.box.x,
                top: g.box.y,
                width: g.box.w,
                height: g.box.h,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                data-21st-slot={tag ? "text" : undefined}
                style={{
                  fontFamily: family,
                  fontWeight: weight,
                  fontSize,
                  lineHeight: 1.15,
                  letterSpacing: "-0.045em",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  padding: `0 ${fontSize * 0.04}px`,
                  color: hero ? "transparent" : ink,
                  backgroundImage: hero
                    ? `linear-gradient(105deg, ${ink} 0%, ${ink} 43%, ${glintCore(secondary)} 50%, ${ink} 57%, ${ink} 100%)`
                    : undefined,
                  backgroundSize: hero ? "320% 100%" : undefined,
                  backgroundPosition: hero ? `${100 - glint * 100}% 0` : undefined,
                  WebkitBackgroundClip: hero ? "text" : undefined,
                  backgroundClip: hero ? "text" : undefined,
                  textShadow: hero || !base ? undefined : `0 ${fontSize * 0.012}px ${fontSize * 0.03}px ${tint(SHADE_RGB, 0.14)}`,
                }}
              >
                {rows.map((row, k) => (
                  <React.Fragment key={k}>
                    {k ? <br /> : null}
                    {row}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ) : null}
        </div>,
      );
    }
    return out;
  };

  // Centre exposure first, then the others averaged on top (opacity 1/n gives an equal-weight mean).
  const offsets = shots === 1 ? [0] : Array.from({ length: SHUTTER }, (_, n) => ((n % 2 ? -1 : 1) * Math.ceil(n / 2) * spread) / SHUTTER);

  return (
    <AbsoluteFill
      style={{
        background: transparent ? undefined : background,
        overflow: "hidden",
        maskImage: transparent ? "radial-gradient(ellipse 68% 68% at 50% 50%, #000 72%, transparent 100%)" : undefined,
        WebkitMaskImage: transparent ? "radial-gradient(ellipse 68% 68% at 50% 50%, #000 72%, transparent 100%)" : undefined,
      }}
    >
      {offsets.map((o, n) => (
        <AbsoluteFill key={n} style={{ opacity: n === 0 ? 1 : 1 / (n + 1) }}>
          {stack(t + o, n === 0)}
        </AbsoluteFill>
      ))}
      {transparent ? null : (
        <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 85% at 50% 45%, ${tint(SHADE_RGB, 0)} 55%, ${tint(SHADE_RGB, luminance(background) < 0.3 ? 0.35 : 0.14)} 100%)` }} />
      )}
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: 0.08, mixBlendMode: "overlay" }} /> : null}
    </AbsoluteFill>
  );
};
