// Built with Remotion - https://remotion.pro/license
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, Img, continueRender, delayRender, random, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, fitFontSize, luminance, ramp, springSnap, useLayout, withAlpha } from "../../../kit/index";
import { SAMPLE_LOGO, SAMPLE_SCREENSHOT } from "../_lib/samples";
import type { schema } from "./sticker-bomb-slap.schema";

type Props = z.infer<typeof schema>;

/* ------------------------------------------------------------------ color helpers */
// Die-cut stickers are printed on white vinyl in every brand; it is tinted a hair toward
// the brand primary so it never reads as a UI white.
const VINYL_BASE = "#FFFFFF";
const DEEP = "#000000";

function rgbOf(c: string): [number, number, number] | null {
  let hex = /^#([0-9a-f]{3,8})$/i.exec(c)?.[1];
  if (!hex) return null;
  if (hex.length === 3) hex = hex.split("").map((x) => x + x).join("");
  const n = parseInt(hex.slice(0, 6), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function mix(a: string, b: string, t: number): string {
  const A = rgbOf(a);
  const B = rgbOf(b);
  if (!A) return b;
  if (!B) return a;
  const h = (i: number) => Math.round(A[i]! + (B[i]! - A[i]!) * t).toString(16).padStart(2, "0");
  return `#${h(0)}${h(1)}${h(2)}`;
}
function contrast(a: string, b: string): number {
  const la = luminance(a);
  const lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}
/** Whichever of the candidates reads best on `fill` (all candidates are brand props). */
function inkFor(fill: string, cands: string[]): string {
  let best = cands[0]!;
  let score = -1;
  for (const c of cands) {
    if (!rgbOf(c)) continue;
    const s = contrast(fill, c);
    if (s > score) {
      score = s;
      best = c;
    }
  }
  return best;
}

/* ------------------------------------------------------------------ motion helpers */
const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
/** Damped squash after contact: 1 on impact, rings out in ~12 frames. */
function squash(u: number, amp: number): number {
  if (u < 0) return 0;
  const s = amp * Math.exp(-u / 3.2) * Math.cos(u * 1.25);
  return Math.abs(s) < 1e-3 ? 0 : s;
}
/** One shake impulse (frame offset u since impact). */
function knock(u: number): number {
  if (u < 0) return 0;
  const k = Math.exp(-u / 2.6) * Math.sin(u * 2.3);
  return Math.abs(k) < 2e-3 ? 0 : k;
}

/** Rotates a screen-space shadow offset into a sticker's local frame, so light always comes from above. */
function toLocal(x: number, y: number, rotDeg: number, scale: number): [number, number] {
  const a = (-rotDeg * Math.PI) / 180;
  return [(x * Math.cos(a) - y * Math.sin(a)) / scale, (x * Math.sin(a) + y * Math.cos(a)) / scale];
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("logo failed"));
    img.src = src;
  });
}

/** Backing-store oversample for logo stickers, so the board's slow push never softens them. */
const RES = 1.25;

type Cut = { sticker: HTMLCanvasElement; tight: HTMLCanvasElement; soft: HTMLCanvasElement; box: number; tightBlur: number; softBlur: number };
const cutCache = new Map<string, Cut>();

/**
 * Die-cut a logo once: stamp its alpha around a circle of radius `b` (a true dilation, so
 * thin strokes and counters get one continuous vinyl edge), flood that with vinyl, put the
 * logo on top. Two pre-blurred silhouettes give the contact and the airborne shadow, so a
 * frame only composites cached bitmaps instead of running filter chains.
 */
function buildCut(img: HTMLImageElement, size: number, b: number, vinyl: string, shade: string, tightBlur: number, softBlur: number): Cut {
  const key = `${img.src.length}:${img.src.slice(-64)}|${size.toFixed(1)}|${b.toFixed(2)}|${vinyl}|${shade}|${tightBlur.toFixed(1)}|${softBlur.toFixed(1)}`;
  const hit = cutCache.get(key);
  if (hit) return hit;
  const box = size + b * 2 + 4;
  const px = Math.ceil(box * RES);
  const nw = img.naturalWidth || 512;
  const nh = img.naturalHeight || 512;
  const k = (size * RES) / Math.max(nw, nh);
  const dw = nw * k;
  const dh = nh * k;
  const ox = (px - dw) / 2;
  const oy = (px - dh) / 2;
  const sticker = document.createElement("canvas");
  sticker.width = px;
  sticker.height = px;
  const c = sticker.getContext("2d", { willReadFrequently: true })!;
  const br = b * RES;
  const steps = 36;
  for (let i = 0; i < steps; i++) {
    const a = (i / steps) * Math.PI * 2;
    c.drawImage(img, ox + Math.cos(a) * br, oy + Math.sin(a) * br, dw, dh);
    c.drawImage(img, ox + Math.cos(a) * br * 0.55, oy + Math.sin(a) * br * 0.55, dw, dh);
  }
  c.globalCompositeOperation = "source-in";
  c.fillStyle = vinyl;
  c.fillRect(0, 0, px, px);
  c.globalCompositeOperation = "source-over";
  c.drawImage(img, ox, oy, dw, dh);
  const blurred = (r: number, scale: number) => {
    const pad = Math.ceil(r * 2.2 + 2);
    const out = document.createElement("canvas");
    out.width = Math.ceil((box + pad * 2) * scale);
    out.height = out.width;
    const o = out.getContext("2d", { willReadFrequently: true })!;
    o.filter = `blur(${(r * scale).toFixed(2)}px)`;
    o.drawImage(sticker, pad * scale, pad * scale, box * scale, box * scale);
    o.filter = "none";
    o.globalCompositeOperation = "source-in";
    o.fillStyle = shade;
    o.fillRect(0, 0, out.width, out.height);
    return out;
  };
  const cut: Cut = { sticker, tight: blurred(tightBlur, 1), soft: blurred(softBlur, 0.5), box, tightBlur, softBlur };
  cutCache.set(key, cut);
  return cut;
}

/** A 16-spike burst badge as a clip-path polygon. */
const STAR = (() => {
  const pts: string[] = [];
  const n = 16;
  for (let i = 0; i < n * 2; i++) {
    const a = (i / (n * 2)) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? 50 : 43;
    pts.push(`${(50 + r * Math.cos(a)).toFixed(2)}% ${(50 + r * Math.sin(a)).toFixed(2)}%`);
  }
  return `polygon(${pts.join(", ")})`;
})();

/** A scalloped seal (24 lobes) for the sticker the hero logo lands on. */
const SCALLOP = (() => {
  const pts: string[] = [];
  const n = 144;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const r = 47.5 + 2.5 * Math.cos(a * 24);
    pts.push(`${(50 + r * Math.cos(a)).toFixed(2)}% ${(50 + r * Math.sin(a)).toFixed(2)}%`);
  }
  return `polygon(${pts.join(", ")})`;
})();

/* ------------------------------------------------------------------ layout */
type Aspect = "16:9" | "9:16" | "1:1";
type Anchor = [number, number];
// Composition anchors (fractions of the frame): keywords sit on the screenshot's
// corners and edges, small logos fill the gaps, the hero owns the middle.
const LABEL_ANCHORS: Record<Aspect, Anchor[]> = {
  "16:9": [[0.27, 0.24], [0.75, 0.17], [0.8, 0.75], [0.25, 0.8], [0.58, 0.885], [0.47, 0.115]],
  "9:16": [[0.33, 0.2], [0.67, 0.14], [0.74, 0.775], [0.32, 0.825], [0.6, 0.9], [0.4, 0.07]],
  "1:1": [[0.28, 0.225], [0.74, 0.16], [0.8, 0.79], [0.27, 0.845], [0.6, 0.925], [0.5, 0.085]],
};
const LOGO_ANCHORS: Record<Aspect, Anchor[]> = {
  "16:9": [[0.145, 0.5], [0.865, 0.45], [0.33, 0.6], [0.69, 0.66]],
  "9:16": [[0.84, 0.25], [0.16, 0.67], [0.85, 0.63], [0.19, 0.34]],
  "1:1": [[0.1, 0.42], [0.9, 0.47], [0.2, 0.63], [0.78, 0.64]],
};
// Landing order: L = keyword index, G = small logo index. Interleaved so the frame fills evenly.
const ORDER: ([ "L", number ] | [ "G", number ])[] = [["L", 0], ["G", 0], ["L", 1], ["L", 2], ["G", 1], ["L", 3], ["G", 3], ["L", 4], ["G", 2], ["L", 5]];

const FIRST = 16;
const STEP = 7;
const APPROACH = 6;
const BACKER_LAND = 90;
const HERO_LAND = 98;
const HERO_APPROACH = 12;
const SETTLED = 126;

type LabelStyle = { shape: "pill" | "rect" | "star"; fill: string; peel: "tr" | "bl" | null };

type Sticker = {
  key: string;
  kind: "label" | "logo" | "badge" | "backer" | "hero";
  text?: string;
  x: number;
  y: number;
  rot: number;
  land: number;
  approach: number;
  throwX: number;
  throwY: number;
  spin: number;
  lift: number;
  size: number; // font size for labels, box size for logos
  style?: LabelStyle;
  shake: number;
  /** Half extents of the rotated footprint, for keeping keyword text clear of neighbours. */
  hw: number;
  hh: number;
};

export const Component: React.FC<Props> = ({
  logo,
  screenshot,
  items,
  primary,
  secondary,
  color,
  background,
  fontFamily,
  border,
  chaos,
  seed,
  mat,
  grain,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit, aspect } = useLayout();
  const font = brandFontStack(fontFamily);
  const transparent = background === "transparent";

  // Palette, all derived from brand props.
  const pal = useMemo(() => {
    const vinyl = mix(VINYL_BASE, rgbOf(primary) ? primary : color, 0.035);
    const darker = transparent || luminance(color) < luminance(background) ? color : background;
    const isLight = transparent ? luminance(color) < 0.35 : luminance(background) > 0.35;
    const shade = mix(darker, DEEP, 0.55);
    const textCands = transparent ? [color, mix(color, DEEP, 0.9), mix(color, VINYL_BASE, 0.9)] : [color, background];
    // The "dark vinyl" sticker: the text color when it is dark, otherwise the backdrop
    // (a near-black sticker on a dark brand), so it never melts into its white border.
    const darkVinyl = contrast(color, vinyl) > 3 ? color : transparent || !rgbOf(background) ? mix(color, DEEP, 0.88) : background;
    return { vinyl, shade, isLight, textCands, darkVinyl, crease: mix(vinyl, shade, 0.32), tip: mix(vinyl, shade, 0.12) };
  }, [primary, color, background, transparent]);

  // Screenshot card geometry.
  const card = useMemo(() => {
    const w = aspect === "16:9" ? W * 0.56 : aspect === "9:16" ? W * 0.84 : W * 0.72;
    const h = aspect === "9:16" ? w * 1.12 : w * 0.625;
    const cy = aspect === "9:16" ? H * 0.49 : aspect === "16:9" ? H * 0.52 : H * 0.53;
    return { w, h, cx: W / 2, cy };
  }, [W, H, aspect]);

  const stickers = useMemo<Sticker[]>(() => {
    const list = items.filter((s) => s.trim().length > 0).slice(0, 6);
    const out: Sticker[] = [];
    // Keyword type size per aspect; floors keep text above the readability minimum.
    const base = aspect === "9:16" ? H * 0.031 : aspect === "16:9" ? H * 0.037 : H * 0.034;
    const floor = aspect === "9:16" ? H * 0.0305 : H * 0.0195;
    const maxW = aspect === "9:16" ? W * 0.62 : aspect === "16:9" ? W * 0.26 : W * 0.4;
    const logoSize = aspect === "9:16" ? W * 0.17 : aspect === "16:9" ? H * 0.125 : W * 0.145;
    const margin = unit * 2.2;
    const styles = (i: number, text: string): LabelStyle => {
      const short = text.length <= 7;
      switch (i % 6) {
        case 0:
          return { shape: "pill", fill: primary, peel: null };
        case 1:
          return { shape: "rect", fill: secondary, peel: "tr" };
        case 2:
          return short ? { shape: "star", fill: primary, peel: null } : { shape: "pill", fill: secondary, peel: null };
        case 3:
          return { shape: "rect", fill: primary, peel: "bl" };
        case 4:
          return { shape: "pill", fill: pal.vinyl, peel: null };
        default:
          return { shape: "rect", fill: secondary, peel: "tr" };
      }
    };
    let slot = 0;
    for (const [type, idx] of ORDER) {
      if (type === "L" && idx >= list.length) continue;
      const land = FIRST + slot * STEP + APPROACH;
      const s = `sb-${seed}-${type}${idx}`;
      const r1 = random(`${s}-a`) * 2 - 1;
      const r2 = random(`${s}-b`) * 2 - 1;
      const r3 = random(`${s}-c`) * 2 - 1;
      const r4 = random(`${s}-d`);
      const throwAng = r4 * Math.PI * 2;
      const common = {
        land,
        approach: APPROACH,
        throwX: Math.cos(throwAng) * unit * 7,
        throwY: Math.sin(throwAng) * unit * 5 + unit * 4,
        spin: (r3 > 0 ? 1 : -1) * (14 + 10 * Math.abs(r3)),
        lift: 0.55,
      };
      if (type === "L") {
        const text = list[idx]!;
        const st = styles(idx, text);
        const fs = Math.max(floor, fitFontSize({ chars: text.length, boxW: maxW * 0.8, boxH: base * 1.4, max: base, min: floor, charEm: 0.56, lineHeight: 1.2 }));
        const textW = text.length * 0.56 * fs;
        const lines = st.shape !== "star" && textW + fs * 2.1 > maxW ? 2 : 1;
        const bw = st.shape === "star" ? Math.max(textW / 0.68, fs * 3.4) + fs * 0.6 : Math.min(maxW, textW + fs * 2.1);
        const bh = st.shape === "star" ? bw : fs * (1.2 * lines + 0.84 + 0.55);
        const [ax, ay] = LABEL_ANCHORS[aspect][idx]!;
        const rot = r1 * (4 + 12 * chaos);
        const ext = Math.abs(Math.sin((rot * Math.PI) / 180)) * bh * 0.5;
        const x = Math.min(W - bw / 2 - margin - ext, Math.max(bw / 2 + margin + ext, ax * W + r2 * unit * 1.5));
        const y = Math.min(H - bh / 2 - margin, Math.max(bh / 2 + margin, ay * H + r1 * unit * 1.2));
        const cr = Math.abs(Math.cos((rot * Math.PI) / 180));
        const sr = Math.abs(Math.sin((rot * Math.PI) / 180));
        out.push({ key: `L${idx}`, kind: "label", text, x, y, rot, size: fs, style: st, shake: 0.22, hw: (bw * cr + bh * sr) / 2, hh: (bw * sr + bh * cr) / 2, ...common });
      } else {
        const [ax, ay] = LOGO_ANCHORS[aspect][idx]!;
        const size = logoSize * (idx === 1 ? 1.1 : 1);
        const rot = r1 * (6 + 16 * chaos);
        const x = Math.min(W - size / 2 - margin, Math.max(size / 2 + margin, ax * W + r2 * unit));
        const y = Math.min(H - size / 2 - margin, Math.max(size / 2 + margin, ay * H + r1 * unit));
        const ext = size * (idx === 1 ? 0.6 : 0.56);
        out.push({ key: `G${idx}`, kind: idx === 1 ? "badge" : "logo", x, y, rot, size, shake: 0.28, hw: ext, hh: ext, ...common });
      }
      slot++;
    }
    const heroSize = aspect === "9:16" ? W * 0.42 : aspect === "16:9" ? H * 0.36 : W * 0.37;
    // Keyword text must stay readable: nudge overlapping stickers apart along the axis of
    // least penetration (logos may tuck under each other, never over a keyword), and keep
    // keywords off the center seal.
    const seal = { x: card.cx, y: card.cy, hw: heroSize * 0.62, hh: heroSize * 0.62 };
    for (let iter = 0; iter < 48; iter++) {
      let moved = false;
      for (let i = 0; i < out.length; i++) {
        for (let j = i + 1; j < out.length; j++) {
          const a = out[i]!;
          const b = out[j]!;
          if (a.kind !== "label" && b.kind !== "label") continue;
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const px = a.hw + b.hw - Math.abs(dx);
          const py = a.hh + b.hh - Math.abs(dy);
          if (px <= 0 || py <= 0) continue;
          moved = true;
          if (py < px) {
            const m = (py / 2 + 1) * (dy >= 0 ? 1 : -1);
            a.y -= m;
            b.y += m;
          } else {
            const m = (px / 2 + 1) * (dx >= 0 ? 1 : -1);
            a.x -= m;
            b.x += m;
          }
        }
      }
      for (const a of out) {
        if (a.kind === "label") {
          const dx = a.x - seal.x;
          const dy = a.y - seal.y;
          const px = a.hw + seal.hw - Math.abs(dx);
          const py = a.hh + seal.hh - Math.abs(dy);
          if (px > 0 && py > 0) {
            moved = true;
            if (py < px) a.y += (py + 1) * (dy >= 0 ? 1 : -1);
            else a.x += (px + 1) * (dx >= 0 ? 1 : -1);
          }
        }
        a.x = Math.min(W - a.hw - margin * 0.9, Math.max(a.hw + margin * 0.9, a.x));
        a.y = Math.min(H - a.hh - margin * 0.5, Math.max(a.hh + margin * 0.5, a.y));
      }
      if (!moved) break;
    }
    out.push({
      key: "backer",
      kind: "backer",
      x: card.cx + unit * 1.2,
      y: card.cy + unit * 0.6,
      rot: (random(`sb-${seed}-backer`) * 2 - 1) * 10 + 8,
      land: BACKER_LAND,
      approach: 8,
      throwX: -unit * 10,
      throwY: unit * 8,
      spin: 26,
      lift: 0.7,
      size: heroSize * 1.34,
      shake: 0.55,
      hw: heroSize * 0.67,
      hh: heroSize * 0.67,
    });
    out.push({
      key: "hero",
      kind: "hero",
      x: card.cx,
      y: card.cy,
      rot: (random(`sb-${seed}-hero`) * 2 - 1) * (2 + 5 * chaos) - 3,
      land: HERO_LAND,
      approach: HERO_APPROACH,
      throwX: unit * 6,
      throwY: -H * 0.42,
      spin: -32,
      lift: 0.9,
      size: heroSize,
      shake: 1,
      hw: heroSize * 0.5,
      hh: heroSize * 0.5,
    });
    return out;
  }, [items, aspect, W, H, unit, seed, chaos, primary, secondary, color, pal.vinyl, pal.darkVinyl, card.cx, card.cy]);

  // Board: shake on every impact, slow camera push while the frame fills.
  let shx = 0;
  let shy = 0;
  for (const s of stickers) {
    const k = knock(frame - s.land);
    if (k === 0) continue;
    shx += k * unit * 0.35 * s.shake * (random(`${s.key}-sx`) * 2 - 1);
    shy += k * unit * 0.9 * s.shake;
  }
  const push = 1 + 0.035 * easeInOut(ramp(frame, [0, SETTLED], [0, 1]));
  const cardIn = springSnap(frame, fps, 0, { damping: 15, stiffness: 110, mass: 0.9 });
  const cardDip = 1 - 0.006 * knock(frame - HERO_LAND);

  const shadowBase = pal.isLight ? 0.36 : 0.62;

  /**
   * Lift-aware shadows: far and soft in the air, tight and dark on contact.
   * Shapes with a known outline (pills, rects, circles) cast box-shadows from an empty
   * plate, which Chrome draws analytically; only free-form logo silhouettes pay for one
   * blurred drop-shadow filter.
   */
  const boxShadowOf = (h: number, scale: number, rot: number, sc: number) => {
    const cOff = unit * (0.18 + 3.4 * h) * scale;
    const cBlur = (unit * (0.4 + 4.2 * h) * scale) / sc;
    const aOff = unit * (0.7 + 5 * h) * scale;
    const aBlur = (unit * (1.6 + 7 * h) * scale) / sc;
    const [cx, cy] = toLocal(cOff * 0.3, cOff, rot, sc);
    const [ax, ay] = toLocal(aOff * 0.25, aOff, rot, sc);
    return [
      `${cx.toFixed(2)}px ${cy.toFixed(2)}px ${cBlur.toFixed(2)}px ${withAlpha(pal.shade, shadowBase * (1 - 0.55 * h))}`,
      `${ax.toFixed(2)}px ${ay.toFixed(2)}px ${aBlur.toFixed(2)}px ${withAlpha(pal.shade, shadowBase * 0.4)}`,
    ].join(", ");
  };

  const motionOf = (s: Sticker) => {
    const a0 = s.land - s.approach;
    const t = clamp01((frame - a0) / s.approach);
    const e = t * t; // accelerate into the slap
    const h = 1 - e;
    const u = frame - s.land;
    const q = squash(u, s.kind === "hero" ? 0.16 : 0.13);
    const sc = 1 + h * s.lift;
    return {
      visible: frame >= a0,
      h,
      u,
      sc,
      sx: sc * (1 + q),
      sy: sc * (1 - q * 0.85),
      dx: h * s.throwX,
      dy: h * s.throwY,
      rot: s.rot + h * s.spin,
      opacity: clamp01(t * 3.5),
    };
  };

  // Logo stickers are die-cut on canvas once, then composited per frame.
  const [logoImg, setLogoImg] = useState<HTMLImageElement | null>(null);
  const [handle] = useState(() => delayRender("sticker-bomb logo", { timeoutInMilliseconds: 60000 }));
  useEffect(() => {
    let alive = true;
    const src = logo.trim() || SAMPLE_LOGO;
    loadImage(src)
      .catch(() => loadImage(SAMPLE_LOGO))
      .then((img) => {
        if (alive) setLogoImg(img);
      })
      .catch(() => undefined)
      .finally(() => continueRender(handle));
    return () => {
      alive = false;
    };
  }, [logo, handle]);
  const cuts = useMemo(() => {
    const out: Record<string, Cut> = {};
    if (!logoImg) return out;
    for (const s of stickers) {
      if (s.kind !== "logo" && s.kind !== "hero") continue;
      const isHero = s.kind === "hero";
      const b = s.size * (isHero ? 0.045 : 0.06) * border;
      const sc = isHero ? 1.5 : 1;
      out[s.key] = buildCut(logoImg, s.size, b, pal.vinyl, pal.shade, unit * 0.5 * sc, unit * 4.5 * sc);
    }
    return out;
  }, [logoImg, stickers, border, pal.vinyl, pal.shade, unit]);
  const canvasRefs = useRef<Record<string, HTMLCanvasElement | null>>({});
  const logoMargin = (s: Sticker) => (s.kind === "hero" ? unit * 15 : unit * 9);

  useLayoutEffect(() => {
    for (const s of stickers) {
      const cut = cuts[s.key];
      const cv = canvasRefs.current[s.key];
      if (!cut || !cv) continue;
      const ctx = cv.getContext("2d", { willReadFrequently: true });
      if (!ctx) continue;
      const m = motionOf(s);
      const scale = s.kind === "hero" ? 1.5 : 1;
      const M = logoMargin(s);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, cv.width, cv.height);
      ctx.setTransform(RES, 0, 0, RES, 0, 0);
      const drawShadow = (src: HTMLCanvasElement, blur: number, ox: number, oy: number, alpha: number) => {
        if (alpha <= 0.002) return;
        const pad = Math.ceil(blur * 2.2 + 2);
        const [lx, ly] = toLocal(ox, oy, m.rot, m.sc);
        ctx.globalAlpha = Math.min(1, alpha);
        ctx.drawImage(src, M - pad + lx, M - pad + ly, cut.box + pad * 2, cut.box + pad * 2);
      };
      const cOff = unit * (0.22 + 4 * m.h) * scale;
      const aOff = unit * (0.8 + 5 * m.h) * scale;
      drawShadow(cut.tight, cut.tightBlur, cOff * 0.3, cOff, shadowBase * 1.1 * (1 - m.h));
      drawShadow(cut.soft, cut.softBlur, aOff * 0.25, aOff, shadowBase * (0.4 + 0.4 * m.h));
      ctx.globalAlpha = 1;
      ctx.drawImage(cut.sticker, M, M, cut.box, cut.box);
    }
  });

  const renderSticker = (s: Sticker, z: number) => {
    const { visible, h, u, sx, sy, dx, dy, rot, opacity, sc } = motionOf(s);
    if (!visible) return null;
    const boxShadow = boxShadowOf(h, s.kind === "backer" ? 1.5 : 1, rot, sc);
    const plate = (radius: string | number, inset: string | number = 0) => (
      <div style={{ position: "absolute", inset, borderRadius: radius, boxShadow }} />
    );
    const glossX = ramp(u, [1, 13], [-40, 140]);
    const wrap: React.CSSProperties = {
      position: "absolute",
      left: 0,
      top: 0,
      width: "max-content",
      transform: `translate(${(s.x + dx).toFixed(2)}px, ${(s.y + dy).toFixed(2)}px) translate(-50%, -50%) rotate(${rot.toFixed(3)}deg) scale(${sx.toFixed(4)}, ${sy.toFixed(4)})`,
      opacity,
      zIndex: 10 + z,
    };

    if (s.kind === "label" && s.style) {
      const fs = s.size;
      const st = s.style;
      const b = fs * 0.26 * border;
      const ink = inkFor(st.fill, pal.textCands);
      const textEl = (
        <span
          data-21st-slot="items"
          style={{
            display: "block",
            fontFamily: font,
            fontWeight: 700,
            fontSize: fs,
            lineHeight: 1.2,
            letterSpacing: "-0.015em",
            color: ink,
            textAlign: "center",
            whiteSpace: st.shape === "star" ? "nowrap" : "normal",
            overflowWrap: "anywhere",
          }}
        >
          {s.text}
        </span>
      );
      if (st.shape === "star") {
        const d = Math.max((s.text!.length * 0.56 * fs) / 0.68, fs * 3.4);
        return (
          <div key={s.key} style={wrap}>
            <div style={{ position: "relative", width: d + b * 2, height: d + b * 2 }}>
              {plate("50%", "4%")}
              <div style={{ position: "absolute", inset: 0, clipPath: STAR, background: pal.vinyl }} />
              <div style={{ position: "absolute", inset: b, clipPath: STAR, background: st.fill, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                {textEl}
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(115deg, ${withAlpha(pal.vinyl, 0)} ${glossX - 14}%, ${withAlpha(pal.vinyl, 0.5)} ${glossX}%, ${withAlpha(pal.vinyl, 0)} ${glossX + 14}%)` }} />
              </div>
            </div>
          </div>
        );
      }
      const innerR = st.shape === "pill" ? fs * 2 : fs * 0.28;
      const maxW = aspect === "9:16" ? W * 0.62 : aspect === "16:9" ? W * 0.26 : W * 0.4;
      // Peel: the corner lifts a little after landing as the adhesive relaxes.
      const pMax = fs * 0.95;
      const p = st.peel ? pMax * easeInOut(ramp(frame, [s.land + 4, Math.max(s.land + 20, SETTLED - 2)], [0.12, 1])) : 0;
      const P = `${p.toFixed(2)}px`;
      const cut =
        st.peel === "tr"
          ? `polygon(0 0, calc(100% - ${P}) 0, 100% ${P}, 100% 100%, 0 100%)`
          : st.peel === "bl"
            ? `polygon(0 0, 100% 0, 100% 100%, ${P} 100%, 0 calc(100% - ${P}))`
            : undefined;
      const flapGrad = (deg: number) =>
        `linear-gradient(${deg}deg, ${pal.crease} 50%, ${pal.vinyl} 64%, ${pal.vinyl} 78%, ${pal.tip} 100%)`;
      return (
        <div key={s.key} style={wrap}>
          <div style={{ position: "relative" }}>
            {plate(innerR + b)}
            <div
              style={{
                padding: b,
                background: pal.vinyl,
                borderRadius: innerR + b,
                clipPath: cut,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ background: st.fill, borderRadius: innerR, padding: `${fs * 0.42}px ${fs * 0.78}px`, maxWidth: maxW - b * 2, boxSizing: "border-box", boxShadow: st.fill === pal.vinyl ? `inset 0 0 0 ${Math.max(1, fs * 0.05)}px ${withAlpha(pal.shade, 0.12)}` : undefined }}>
                {textEl}
              </div>
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(115deg, ${withAlpha(pal.vinyl, 0)} ${glossX - 12}%, ${withAlpha(pal.vinyl, 0.55)} ${glossX}%, ${withAlpha(pal.vinyl, 0)} ${glossX + 12}%)` }} />
            </div>
            {st.peel && p > 0.5 ? (
              <div
                style={{
                  position: "absolute",
                  width: p,
                  height: p,
                  ...(st.peel === "tr" ? { top: 0, right: 0 } : { bottom: 0, left: 0 }),
                  clipPath: st.peel === "tr" ? "polygon(0 0, 100% 100%, 0 100%)" : "polygon(0 0, 100% 0, 100% 100%)",
                  background: flapGrad(st.peel === "tr" ? 225 : 45),
                  borderRadius: st.peel === "tr" ? `0 0 0 ${(p * 0.35).toFixed(1)}px` : `0 ${(p * 0.35).toFixed(1)}px 0 0`,
                }}
              />
            ) : null}
          </div>
        </div>
      );
    }

    const src = logo || SAMPLE_LOGO;
    if (s.kind === "backer") {
      const b = s.size * 0.034 * border;
      const ring = withAlpha(inkFor(secondary, pal.textCands), 0.22);
      return (
        <div key={s.key} style={wrap}>
          <div style={{ position: "relative", width: s.size + b * 2, height: s.size + b * 2 }}>
            {plate("50%", "3%")}
            <div style={{ position: "absolute", inset: 0, clipPath: SCALLOP, background: pal.vinyl }} />
            <div style={{ position: "absolute", inset: b, clipPath: SCALLOP, background: secondary }}>
              <div style={{ position: "absolute", inset: "9%", borderRadius: "50%", border: `${Math.max(1, s.size * 0.008).toFixed(2)}px dashed ${ring}` }} />
              <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 34% 28%, ${withAlpha(pal.vinyl, 0.28)} 0%, ${withAlpha(pal.vinyl, 0)} 55%)` }} />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(115deg, ${withAlpha(pal.vinyl, 0)} ${glossX - 12}%, ${withAlpha(pal.vinyl, 0.4)} ${glossX}%, ${withAlpha(pal.vinyl, 0)} ${glossX + 12}%)` }} />
            </div>
          </div>
        </div>
      );
    }
    if (s.kind === "badge") {
      const b = s.size * 0.06 * border;
      return (
        <div key={s.key} style={wrap}>
          <div style={{ position: "relative", padding: b, borderRadius: "50%", background: pal.vinyl }}>
            {plate("50%")}
            <div style={{ width: s.size, height: s.size, borderRadius: "50%", background: primary, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ width: s.size * 0.7, height: s.size * 0.7, borderRadius: "50%", background: pal.vinyl, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Img src={src} crossOrigin="anonymous" style={{ width: "72%", height: "72%", objectFit: "contain" }} />
              </div>
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(115deg, ${withAlpha(pal.vinyl, 0)} ${glossX - 14}%, ${withAlpha(pal.vinyl, 0.45)} ${glossX}%, ${withAlpha(pal.vinyl, 0)} ${glossX + 14}%)` }} />
            </div>
          </div>
        </div>
      );
    }
    const cut = cuts[s.key];
    const M = logoMargin(s);
    const inner = cut ? cut.box : s.size;
    const css = inner + M * 2;
    return (
      <div key={s.key} style={{ ...wrap, width: inner, height: inner }}>
        <canvas
          ref={(el) => {
            canvasRefs.current[s.key] = el;
          }}
          data-21st-slot={s.kind === "hero" ? "logo" : undefined}
          width={Math.ceil(css * RES)}
          height={Math.ceil(css * RES)}
          style={{ position: "absolute", left: -M, top: -M, width: css, height: css, display: "block" }}
        />
      </div>
    );
  };

  // Impact strokes around the hero slap.
  const hu = frame - HERO_LAND;
  const hero = stickers[stickers.length - 1]!;
  const strokes =
    hu >= 0 && hu <= 12 ? (
      <svg width={W} height={H} style={{ position: "absolute", left: 0, top: 0, overflow: "visible", zIndex: 100 }}>
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i / 12) * Math.PI * 2 + random(`sb-${seed}-st-${i}`) * 0.35;
          const k = hu / 12;
          const r0 = hero.size * (0.74 + 0.08 * random(`sb-${seed}-sr-${i}`)) + unit * 6 * easeInOut(k);
          const len = unit * (3.4 + 2.2 * random(`sb-${seed}-sl-${i}`)) * (1 - k);
          const x1 = hero.x + Math.cos(a) * r0;
          const y1 = hero.y + Math.sin(a) * r0;
          const x2 = hero.x + Math.cos(a) * (r0 + len);
          const y2 = hero.y + Math.sin(a) * (r0 + len);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={i % 3 === 1 ? secondary : primary}
              strokeWidth={unit * 0.75 * (1 - k * 0.6)}
              strokeLinecap="round"
              opacity={1 - k * k}
            />
          );
        })}
      </svg>
    ) : null;

  const shotSrc = screenshot || SAMPLE_SCREENSHOT;
  const cardRot = aspect === "9:16" ? -1.6 : -1.2;
  const maskOn = withAlpha(color, 1);
  const maskOff = withAlpha(color, 0);
  const g = unit * 4.2;
  const minor = withAlpha(color, pal.isLight ? 0.05 : 0.06);
  const major = withAlpha(color, pal.isLight ? 0.09 : 0.1);
  const glow = withAlpha(primary, pal.isLight ? 0.1 : 0.16);
  const glow2 = withAlpha(secondary, pal.isLight ? 0.08 : 0.1);

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background, overflow: "hidden" }}>
      {!transparent ? (
        <>
          <AbsoluteFill
            style={{
              background: `radial-gradient(ellipse 55% 50% at 38% 40%, ${glow} 0%, ${withAlpha(primary, 0)} 100%), radial-gradient(ellipse 50% 45% at 66% 66%, ${glow2} 0%, ${withAlpha(secondary, 0)} 100%)`,
            }}
          />
          {mat ? (
            <AbsoluteFill
              style={{
                backgroundImage: `linear-gradient(${major} 1px, transparent 1px), linear-gradient(90deg, ${major} 1px, transparent 1px), linear-gradient(${minor} 1px, transparent 1px), linear-gradient(90deg, ${minor} 1px, transparent 1px)`,
                backgroundSize: `${g * 5}px ${g * 5}px, ${g * 5}px ${g * 5}px, ${g}px ${g}px, ${g}px ${g}px`,
                backgroundPosition: `${(W / 2) % (g * 5)}px ${(H / 2) % (g * 5)}px`,
                maskImage: `radial-gradient(ellipse 75% 70% at 50% 50%, ${maskOn} 25%, ${maskOff} 100%)`,
                WebkitMaskImage: `radial-gradient(ellipse 75% 70% at 50% 50%, ${maskOn} 25%, ${maskOff} 100%)`,
              }}
            />
          ) : null}
        </>
      ) : null}

      <AbsoluteFill style={{ transform: `translate(${shx.toFixed(2)}px, ${shy.toFixed(2)}px) scale(${push.toFixed(4)})` }}>
        {/* The screenshot the stickers slap onto: a bordered print held down by two strips of brand tape. */}
        <div
          style={{
            position: "absolute",
            left: card.cx - card.w / 2,
            top: card.cy - card.h / 2,
            width: card.w,
            height: card.h,
            opacity: clamp01(cardIn * 1.6),
            transform: `translateY(${((1 - cardIn) * unit * 5).toFixed(2)}px) rotate(${cardRot}deg) scale(${((0.92 + 0.08 * cardIn) * cardDip).toFixed(4)})`,
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              padding: unit * 1.1,
              borderRadius: unit * 0.5,
              boxSizing: "border-box",
              boxShadow: `0 0 0 ${Math.max(1, unit * 0.12)}px ${withAlpha(color, 0.12)}, 0 ${unit * 1.4}px ${unit * 3}px ${withAlpha(pal.shade, shadowBase * 0.4)}, 0 ${unit * 4}px ${unit * 10}px ${withAlpha(pal.shade, shadowBase * 0.45)}`,
              background: pal.vinyl,
            }}
          >
            <div style={{ width: "100%", height: "100%", overflow: "hidden", borderRadius: unit * 0.3 }}>
              <Img data-21st-slot="screenshot" src={shotSrc} crossOrigin="anonymous" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
            </div>
          </div>
          {[
            { left: -card.w * 0.035, rot: -38, fill: primary },
            { left: card.w * 0.865, rot: 36, fill: secondary },
          ].map((t, k) => (
            <div
              key={k}
              aria-hidden
              style={{
                position: "absolute",
                left: t.left,
                top: -unit * 1.2,
                width: card.w * 0.17,
                height: unit * 3.4,
                transform: `rotate(${t.rot}deg)`,
                background: withAlpha(t.fill, 0.72),
                clipPath: TAPE,
                boxShadow: `inset 0 0 0 ${Math.max(1, unit * 0.1)}px ${withAlpha(pal.vinyl, 0.25)}`,
              }}
            />
          ))}
        </div>
        {strokes}
        {stickers.map((s, i) => renderSticker(s, i))}
      </AbsoluteFill>

      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: pal.isLight ? 0.09 : 0.06, mixBlendMode: "overlay", zIndex: 50 }} /> : null}
    </AbsoluteFill>
  );
};

/** Masking tape with torn ends. */
const TAPE = "polygon(2% 0%, 98% 0%, 100% 18%, 97% 34%, 100% 52%, 97% 70%, 100% 86%, 98% 100%, 2% 100%, 0% 84%, 3% 66%, 0% 50%, 3% 32%, 0% 16%)";

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='23' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")";
