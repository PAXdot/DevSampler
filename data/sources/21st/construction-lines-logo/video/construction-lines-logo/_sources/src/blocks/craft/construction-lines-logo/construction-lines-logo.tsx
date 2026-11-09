// Built with Remotion - https://remotion.pro/license
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, continueRender, delayRender, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, springSnap, useLayout, waitForBrandFonts, withAlpha } from "../../../kit/index";
import type { Aspect } from "../../../kit/spec";
import { hashString, rng, simplex3 } from "../_lib/noise";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./construction-lines-logo.schema";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];
type Ctx = CanvasRenderingContext2D;

const TAU = Math.PI * 2;

/** Timeline (frames at 30 fps). */
const T_TRACE = 56; // the contour is traced in accent
const TRACE_LEN = 28;
const T_SNAP = 86; // the logo lands on the guides
const T_RECEDE = 100; // guides start to step back
const RECEDE_LEN = 40;
const T_TEXT = 104;

// ---------------------------------------------------------------- color

function rgbOf(color: string, fallback: RGB = [128, 128, 128]): RGB {
  let hex = /^#([0-9a-f]{3,8})$/i.exec(color.trim())?.[1];
  if (hex) {
    if (hex.length === 3 || hex.length === 4) hex = hex.slice(0, 3).split("").map((c) => c + c).join("");
    const n = parseInt(hex.slice(0, 6), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  const m = /rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(color);
  if (m) return [Number(m[1]), Number(m[2]), Number(m[3])];
  return fallback;
}
function lum([r, g, b]: RGB): number {
  const ch = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * ch(r) + 0.7152 * ch(g) + 0.0722 * ch(b);
}
function css(c: RGB, a = 1): string {
  return `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${a.toFixed(3)})`;
}
const ZERO: RGB = [0, 0, 0];

// ---------------------------------------------------------------- easing

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (x: number) => {
  const t = clamp01(x);
  return t * t * (3 - 2 * t);
};
const inOut = (x: number) => {
  const t = clamp01(x);
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};
const outExpo = (x: number) => {
  const t = clamp01(x);
  return t >= 1 ? 1 : 1 - Math.pow(2, -9 * t);
};
const outCubic = (x: number) => 1 - Math.pow(1 - clamp01(x), 3);

// ---------------------------------------------------------------- logo raster

type LogoAsset = { canvas: HTMLCanvasElement; aspect: number };

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("logo failed"));
    img.src = src;
  });
}

/** Rasterize the logo at up to 1024 px and trim transparent padding so guides hug the visible mark. */
function rasterLogo(img: HTMLImageElement): LogoAsset {
  const nw0 = img.naturalWidth || 512, nh0 = img.naturalHeight || 512;
  const k0 = 1024 / Math.max(nw0, nh0);
  const tc = document.createElement("canvas");
  tc.width = Math.max(1, Math.round(nw0 * k0));
  tc.height = Math.max(1, Math.round(nh0 * k0));
  const t = tc.getContext("2d", { willReadFrequently: true })!;
  t.drawImage(img, 0, 0, tc.width, tc.height);
  let x0 = tc.width, y0 = tc.height, x1 = -1, y1 = -1;
  try {
    const d = t.getImageData(0, 0, tc.width, tc.height).data;
    for (let y = 0; y < tc.height; y++)
      for (let x = 0; x < tc.width; x++)
        if (d[(y * tc.width + x) * 4 + 3]! > 16) {
          if (x < x0) x0 = x;
          if (x > x1) x1 = x;
          if (y < y0) y0 = y;
          if (y > y1) y1 = y;
        }
  } catch {
    x1 = -1;
  }
  if (x1 < 0) { x0 = 0; y0 = 0; x1 = tc.width - 1; y1 = tc.height - 1; }
  const tw = x1 - x0 + 1, th = y1 - y0 + 1;
  const c = document.createElement("canvas");
  c.width = tw;
  c.height = th;
  c.getContext("2d", { willReadFrequently: true })!.drawImage(tc, x0, y0, tw, th, 0, 0, tw, th);
  return { canvas: c, aspect: tw / th };
}

/** Tracing line along the logo's alpha edge, in the key color, at box size. */
function buildContour(logo: LogoAsset, bw: number, bh: number, S: number, key: RGB): HTMLCanvasElement {
  const W = Math.max(2, Math.round(bw)), H = Math.max(2, Math.round(bh));
  const c = document.createElement("canvas");
  c.width = W;
  c.height = H;
  const g = c.getContext("2d", { willReadFrequently: true })!;
  g.drawImage(logo.canvas, 0, 0, W, H);
  let src: Uint8ClampedArray;
  try {
    src = g.getImageData(0, 0, W, H).data;
  } catch {
    return c;
  }
  const out = g.createImageData(W, H);
  const o = out.data;
  const r = Math.max(1, Math.round(S * 0.0016));
  const inside = (x: number, y: number) => x >= 0 && y >= 0 && x < W && y < H && src[(y * W + x) * 4 + 3]! > 110;
  for (let y = 0; y < H; y++)
    for (let x = 0; x < W; x++) {
      if (!inside(x, y)) continue;
      if (inside(x - r, y) && inside(x + r, y) && inside(x, y - r) && inside(x, y + r) && inside(x - r, y - r) && inside(x + r, y + r) && inside(x + r, y - r) && inside(x - r, y + r)) continue;
      const i = (y * W + x) * 4;
      o[i] = key[0];
      o[i + 1] = key[1];
      o[i + 2] = key[2];
      o[i + 3] = 255;
    }
  g.clearRect(0, 0, W, H);
  g.putImageData(out, 0, 0);
  return c;
}

/** Small graphite tile: per-pixel alpha grain so every pencil stroke has tooth. */
function grainTile(color: RGB, seed: number, lo: number, hi: number): HTMLCanvasElement {
  const N = 128;
  const c = document.createElement("canvas");
  c.width = N;
  c.height = N;
  const g = c.getContext("2d", { willReadFrequently: true })!;
  const img = g.createImageData(N, N);
  const r = rng(seed);
  for (let i = 0; i < N * N; i++) {
    const v = r();
    img.data[i * 4] = color[0];
    img.data[i * 4 + 1] = color[1];
    img.data[i * 4 + 2] = color[2];
    img.data[i * 4 + 3] = Math.round(255 * (lo + (hi - lo) * v * v));
  }
  g.putImageData(img, 0, 0);
  return c;
}

// ---------------------------------------------------------------- layout

type Box = { x0: number; y0: number; x1: number; y1: number; cx: number; cy: number; bw: number; bh: number };
type TextLayout = {
  ebSize: number;
  ebTop: number;
  titleSize: number;
  titleTop: number;
  lines: string[];
  lineW: number[];
  baselines: number[];
  capY: number;
  textW: number;
};
type Plan = { box: Box; p: number; text: TextLayout | null; groupCy: number };

let measureCtx: Ctx | null = null;
function measurer(): Ctx {
  if (!measureCtx) measureCtx = document.createElement("canvas").getContext("2d", { willReadFrequently: true })!;
  return measureCtx;
}

function aspectParams(aspect: Aspect, w: number, h: number) {
  if (aspect === "9:16") return { area: (0.5 * w) ** 2, maxW: 0.66 * w, maxH: 0.3 * h, textW: 0.86 * w, tMax: 0.062 * h, tMin: 0.032 * h, maxLines: 3, eb: 0.031 * h, gap: 0.07 * w };
  if (aspect === "1:1") return { area: (0.36 * w) ** 2, maxW: 0.6 * w, maxH: 0.38 * h, textW: 0.84 * w, tMax: 0.066 * h, tMin: 0.03 * h, maxLines: 2, eb: 0.026 * h, gap: 0.062 * h };
  return { area: (0.33 * h) ** 2, maxW: 0.52 * w, maxH: 0.36 * h, textW: 0.66 * w, tMax: 0.072 * h, tMin: 0.03 * h, maxLines: 2, eb: 0.024 * h, gap: 0.062 * h };
}

function wrapLines(words: string[], ww: number[], space: number, maxW: number): { lines: string[]; widths: number[] } {
  const lines: string[] = [];
  const widths: number[] = [];
  let cur = "", cw = 0;
  words.forEach((wd, i) => {
    const add = cur ? cw + space + ww[i]! : ww[i]!;
    if (cur && add > maxW) {
      lines.push(cur);
      widths.push(cw);
      cur = wd;
      cw = ww[i]!;
    } else {
      cur = cur ? `${cur} ${wd}` : wd;
      cw = add;
    }
  });
  if (cur) { lines.push(cur); widths.push(cw); }
  return { lines, widths };
}

function planLayout(w: number, h: number, aspect: Aspect, portrait: boolean, logoAspect: number, eyebrow: string, title: string, titleFont: string, ebFont: string): Plan {
  const S = Math.min(w, h);
  const P = aspectParams(aspect, w, h);
  let bw = Math.min(P.maxW, Math.sqrt(P.area * logoAspect));
  let bh = bw / logoAspect;
  if (bh > P.maxH) { bh = P.maxH; bw = bh * logoAspect; }
  const p = Math.max(S * 0.035, Math.min(S * 0.07, Math.min(bw, bh) / 5));
  const g = S * 0.04;
  const labelH = S * 0.035;
  const topExtra = p + g + labelH;

  const hasEb = eyebrow.trim().length > 0;
  const hasTitle = title.trim().length > 0;
  let text: TextLayout | null = null;
  let textH = 0;
  let ebSize = 0, titleSize = 0;
  let lines: string[] = [], lineW: number[] = [];
  const m = measurer();
  if (hasEb) {
    m.font = `500 100px ${ebFont}`;
    const wEb = m.measureText(eyebrow).width + eyebrow.length * 6;
    ebSize = Math.max(Math.min(P.eb, (P.textW / wEb) * 100), aspect === "9:16" ? 0.03 * h : 0.019 * h);
  }
  if (hasTitle) {
    m.font = `400 100px ${titleFont}`;
    const words = title.trim().split(/\s+/);
    const ww = words.map((wd) => m.measureText(wd).width);
    const space = m.measureText(" ").width;
    let size = P.tMax;
    for (let guard = 0; guard < 60; guard++) {
      const k = size / 100;
      const r = wrapLines(words, ww.map((v) => v * k), space * k, P.textW);
      lines = r.lines;
      lineW = r.widths;
      if ((lines.length <= P.maxLines && Math.max(...lineW) <= P.textW) || size <= P.tMin) break;
      size = Math.max(P.tMin, size * 0.95);
    }
    titleSize = size;
    // Balance the rag: narrowest measure that keeps the same line count (no orphans).
    if (lines.length > 1) {
      const k = size / 100;
      const sw = ww.map((v) => v * k);
      let best = { lines, widths: lineW };
      for (let mw = Math.max(...lineW) * 0.98; mw > 0; mw *= 0.98) {
        const r = wrapLines(words, sw, space * k, mw);
        if (r.lines.length > lines.length || Math.max(...r.widths) > mw) break;
        best = r;
      }
      lines = best.lines;
      lineW = best.widths;
    }
  }
  const ebGap = hasEb && hasTitle ? ebSize * 0.5 : 0;
  const LH = 1.18;
  if (hasEb || hasTitle) textH = (hasEb ? ebSize * 1.3 : 0) + ebGap + lines.length * titleSize * LH;
  const bottomExtra = p + (hasEb || hasTitle ? P.gap + textH : S * 0.04);
  const total = topExtra + bh + bottomExtra;
  const groupTop = (h - total) / 2 * (portrait ? 0.97 : 1);
  const y0 = groupTop + topExtra;
  const cx = w / 2;
  const box: Box = { x0: cx - bw / 2, x1: cx + bw / 2, y0, y1: y0 + bh, cx, cy: y0 + bh / 2, bw, bh };

  if (hasEb || hasTitle) {
    const ebTop = box.y1 + p + P.gap;
    const titleTop = ebTop + (hasEb ? ebSize * 1.3 : 0) + ebGap;
    const baselines: number[] = [];
    let capY = titleTop;
    if (hasTitle) {
      m.font = `400 ${titleSize}px ${titleFont}`;
      const mm = m.measureText("Hg");
      const fa = mm.fontBoundingBoxAscent || titleSize * 0.92;
      const fd = mm.fontBoundingBoxDescent || titleSize * 0.24;
      const cap = m.measureText("H").actualBoundingBoxAscent || titleSize * 0.7;
      for (let i = 0; i < lines.length; i++) baselines.push(titleTop + i * titleSize * LH + (titleSize * LH - (fa + fd)) / 2 + fa);
      capY = baselines[0]! - cap;
      // DOM uses slight negative tracking; keep guide labels clear of the real line ends.
      lineW = lineW.map((v, i) => v - lines[i]!.length * titleSize * 0.005);
    }
    text = { ebSize, ebTop, titleSize, titleTop, lines, lineW, baselines, capY, textW: P.textW };
  }
  return { box, p, text, groupCy: groupTop + total / 2 };
}

// ---------------------------------------------------------------- strokes

/** 0 sheet grid, 1 pencil ink, 2 key accent, 3 dimensions and type guides. */
type Kind = 0 | 1 | 2 | 3;
type Stroke = {
  xs: Float32Array;
  ys: Float32Array;
  n: number;
  kind: Kind;
  t0: number;
  dur: number;
  w: number;
  ease: 0 | 1;
  dash: number[] | null;
  taper: boolean;
  nib: boolean;
};
type Label = { text: string; x: number; y: number; rot: number; size: number; align: CanvasTextAlign; kind: Kind; t0: number; dur: number; mono: boolean };
type Pin = { x: number; y: number; t0: number };
type Drawing = { strokes: Stroke[]; labels: Label[]; pins: Pin[]; R: number };

function buildDrawing(plan: Plan, w: number, h: number, S: number, seedKey: string, ratioUnit: string): Drawing {
  const { box, p } = plan;
  const { x0, y0, x1, y1, cx, cy, bw, bh } = box;
  const r = rng(hashString(seedKey));
  const noise = simplex3(hashString(seedKey) ^ 0x5bd1);
  const strokes: Stroke[] = [];
  const labels: Label[] = [];
  const pins: Pin[] = [];
  const amp = S * 0.0008;
  let sid = 0;

  const line = (ax: number, ay: number, bx: number, by: number, o: { e0?: number; e1?: number; kind: Kind; t0: number; dur: number; w?: number; dash?: number[] | null; nib?: boolean; step?: number; ease?: 0 | 1; taper?: boolean }) => {
    const L0 = Math.hypot(bx - ax, by - ay) || 1;
    const dx = (bx - ax) / L0, dy = (by - ay) / L0;
    const e0 = o.e0 ?? 0, e1 = o.e1 ?? 0;
    const sx = ax - dx * e0, sy = ay - dy * e0;
    const L = L0 + e0 + e1;
    const n = Math.max(2, Math.ceil(L / (o.step ?? 7)));
    const xs = new Float32Array(n), ys = new Float32Array(n);
    const bow = (r() * 2 - 1) * S * 0.0018;
    const z = sid++ * 7.31;
    for (let i = 0; i < n; i++) {
      const s = i / (n - 1);
      const u = s * L;
      const off = bow * Math.sin(Math.PI * s) + amp * noise(u * 0.011, z, 0.5);
      xs[i] = sx + dx * u - dy * off;
      ys[i] = sy + dy * u + dx * off;
    }
    strokes.push({ xs, ys, n, kind: o.kind, t0: o.t0, dur: o.dur, w: o.w ?? 1, ease: o.ease ?? 0, dash: o.dash ?? null, taper: o.taper ?? !o.dash, nib: o.nib ?? false });
  };
  const circle = (ccx: number, ccy: number, rad: number, o: { a0: number; turns?: number; kind: Kind; t0: number; dur: number; w?: number; nib?: boolean; spiral?: number }) => {
    const turns = o.turns ?? 1.035;
    const n = Math.max(24, Math.min(720, Math.ceil((TAU * rad * turns) / 7)));
    const xs = new Float32Array(n), ys = new Float32Array(n);
    const z = sid++ * 7.31;
    const spiral = o.spiral ?? 0.006;
    for (let i = 0; i < n; i++) {
      const s = i / (n - 1);
      const a = o.a0 + s * turns * TAU;
      const rr = rad * (1 - spiral / 2 + spiral * s) + amp * 1.2 * noise(Math.cos(a) * 1.3, Math.sin(a) * 1.3, z);
      xs[i] = ccx + Math.cos(a) * rr;
      ys[i] = ccy + Math.sin(a) * rr;
    }
    strokes.push({ xs, ys, n, kind: o.kind, t0: o.t0, dur: o.dur, w: o.w ?? 1, ease: 1, dash: null, taper: true, nib: o.nib ?? true });
  };

  // Sheet grid ruled on the clear-space unit, aligned to the mark, drawn from the center out.
  const gx: number[] = [], gy: number[] = [];
  for (let x = x0 - Math.ceil(x0 / p) * p; x <= w + 1; x += p) gx.push(x);
  for (let y = y0 - Math.ceil(y0 / p) * p; y <= h + 1; y += p) gy.push(y);
  gx.forEach((x) => {
    const d = Math.abs(x - cx) / (w / 2);
    line(x, -S * 0.02, x, h + S * 0.02, { kind: 0, t0: 1 + d * 12, dur: 34, w: 0.8, step: 22, taper: false, ease: 1 });
  });
  gy.forEach((y) => {
    const d = Math.abs(y - cy) / (h / 2);
    line(-S * 0.02, y, w + S * 0.02, y, { kind: 0, t0: 3 + d * 12, dur: 36, w: 0.8, step: 22, taper: false, ease: 1 });
  });

  // Axis lines through the box edges and center, shot past the mark at hand-picked lengths.
  const hx = [y0, cy, y1];
  hx.forEach((y, i) => {
    const e0 = w * (0.22 + r() * 0.2), e1 = w * (0.22 + r() * 0.2);
    line(x0, y, x1, y, { e0, e1, kind: 1, t0: 4 + i * 4, dur: 30, nib: true, ease: 1 });
  });
  const vx = [x0, cx, x1];
  vx.forEach((x, i) => {
    const e0 = h * (0.24 + r() * 0.2), e1 = h * (0.24 + r() * 0.2);
    line(x, y0, x, y1, { e0, e1, kind: 1, t0: 7 + i * 4, dur: 30, nib: true, ease: 1 });
  });

  // Compass work: inscribed, bounding (key, sketched twice), the two side circles and golden circles.
  const R0 = Math.min(bw, bh) / 2;
  const R = Math.hypot(bw, bh) / 2;
  circle(cx, cy, R0, { a0: -Math.PI * 0.7, kind: 1, t0: 10, dur: 30 });
  pins.push({ x: cx, y: cy, t0: 8 });
  circle(cx, cy, R, { a0: -Math.PI * 0.5, kind: 2, t0: 12, dur: 34, w: 1.25 });
  circle(cx, cy, R * 1.004, { a0: Math.PI * 0.35, turns: 0.42, kind: 2, t0: 34, dur: 20, w: 0.8, nib: false, spiral: 0.01 });
  circle(x0, cy, R0, { a0: Math.PI * 0.2, kind: 1, t0: 26, dur: 26 });
  circle(x1, cy, R0, { a0: Math.PI * 1.2, kind: 1, t0: 30, dur: 26 });
  pins.push({ x: x0, y: cy, t0: 25 }, { x: x1, y: cy, t0: 29 });
  const golden = [
    { k: 0.618, a: Math.PI * 1.25, kind: 2 as Kind },
    { k: 0.382, a: Math.PI * 0.25, kind: 1 as Kind },
    { k: 0.236, a: -Math.PI * 0.25, kind: 1 as Kind },
  ];
  golden.forEach((gd, i) => {
    const rr = R0 * gd.k;
    const gcx = cx + Math.cos(gd.a) * (R0 - rr), gcy = cy + Math.sin(gd.a) * (R0 - rr);
    circle(gcx, gcy, rr, { a0: gd.a + Math.PI, kind: gd.kind, t0: 32 + i * 5, dur: 22, w: gd.kind === 2 ? 1.1 : 1 });
    pins.push({ x: gcx, y: gcy, t0: 31 + i * 5 });
  });

  // Diagonals corner to corner, run past the box.
  line(x0, y0, x1, y1, { e0: p * 1.4, e1: p * 2.6, kind: 1, t0: 24, dur: 18, nib: true });
  line(x1, y0, x0, y1, { e0: p * 1.4, e1: p * 1.4, kind: 1, t0: 28, dur: 18, nib: true });

  // Clear-space box (key, dashed) and its x modules on each side.
  const cs = [x0 - p, y0 - p, x1 + p, y1 + p] as const;
  const dash = [S * 0.012, S * 0.009];
  const ov = S * 0.014;
  line(cs[0], cs[1], cs[2], cs[1], { e0: ov, e1: ov, kind: 2, t0: 44, dur: 14, dash });
  line(cs[2], cs[1], cs[2], cs[3], { e0: ov, e1: ov, kind: 2, t0: 47, dur: 14, dash });
  line(cs[2], cs[3], cs[0], cs[3], { e0: ov, e1: ov, kind: 2, t0: 50, dur: 14, dash });
  line(cs[0], cs[3], cs[0], cs[1], { e0: ov, e1: ov, kind: 2, t0: 53, dur: 14, dash });
  const mods: [number, number][] = [
    [cx - p / 2, y0 - p],
    [x1, cy - p / 2],
    [cx - p / 2, y1],
    [x0 - p, cy - p / 2],
  ];
  const mo = p * 0.12;
  mods.forEach(([mx, my], i) => {
    const t0 = 56 + i * 2.5;
    line(mx, my, mx + p, my, { e0: mo, e1: mo, kind: 3, t0, dur: 8, w: 0.9 });
    line(mx + p, my, mx + p, my + p, { e0: mo, e1: mo, kind: 3, t0: t0 + 2, dur: 8, w: 0.9 });
    line(mx + p, my + p, mx, my + p, { e0: mo, e1: mo, kind: 3, t0: t0 + 4, dur: 8, w: 0.9 });
    line(mx, my + p, mx, my, { e0: mo, e1: mo, kind: 3, t0: t0 + 6, dur: 8, w: 0.9 });
    labels.push({ text: "x", x: mx + p / 2, y: my + p * 0.5, rot: 0, size: Math.min(p * 0.62, S * 0.04), align: "center", kind: 2, t0: t0 + 7, dur: 6, mono: false });
  });

  // Dimension lines with witness lines, architect ticks and handwritten values in clear-space units.
  const g = S * 0.04;
  const tick = S * 0.011;
  const dimY = y0 - p - g;
  const dimX = x0 - p - g;
  line(x0, y0 - S * 0.012, x0, dimY - S * 0.014, { kind: 3, t0: 46, dur: 10, w: 0.9 });
  line(x1, y0 - S * 0.012, x1, dimY - S * 0.014, { kind: 3, t0: 47, dur: 10, w: 0.9 });
  line(x0, dimY, x1, dimY, { e0: S * 0.01, e1: S * 0.01, kind: 3, t0: 50, dur: 16, nib: true });
  line(x0 - tick, dimY + tick, x0 + tick, dimY - tick, { kind: 3, t0: 52, dur: 5, w: 1.3, taper: false });
  line(x1 - tick, dimY + tick, x1 + tick, dimY - tick, { kind: 3, t0: 64, dur: 5, w: 1.3, taper: false });
  line(x0 - S * 0.012, y0, dimX - S * 0.014, y0, { kind: 3, t0: 50, dur: 10, w: 0.9 });
  line(x0 - S * 0.012, y1, dimX - S * 0.014, y1, { kind: 3, t0: 51, dur: 10, w: 0.9 });
  line(dimX, y0, dimX, y1, { e0: S * 0.01, e1: S * 0.01, kind: 3, t0: 54, dur: 16, nib: true });
  line(dimX - tick, y0 + tick, dimX + tick, y0 - tick, { kind: 3, t0: 56, dur: 5, w: 1.3, taper: false });
  line(dimX - tick, y1 + tick, dimX + tick, y1 - tick, { kind: 3, t0: 68, dur: 5, w: 1.3, taper: false });
  const hand = S * 0.036;
  const fmt = (v: number) => (Math.abs(v - Math.round(v)) < 0.05 ? `${Math.round(v)}` : v.toFixed(1));
  labels.push({ text: `${fmt(bw / p)}${ratioUnit}`, x: cx, y: dimY - S * 0.02, rot: 0, size: hand, align: "center", kind: 1, t0: 62, dur: 10, mono: false });
  labels.push({ text: `${fmt(bh / p)}${ratioUnit}`, x: dimX - S * 0.02, y: cy, rot: -Math.PI / 2, size: hand, align: "center", kind: 1, t0: 66, dur: 10, mono: false });

  // Bounding diameter note and the diagonal's angle, both outside the mark.
  const la = -0.42;
  labels.push({ text: `ø ${fmt((2 * R) / p)}${ratioUnit}`, x: cx + Math.cos(la) * (R + S * 0.03), y: cy + Math.sin(la) * (R + S * 0.03), rot: 0, size: hand * 0.92, align: "left", kind: 2, t0: 58, dur: 10, mono: false });
  const th = Math.atan2(bh, bw);
  const ra = p * 1.25;
  circle(x1, y1, ra, { a0: 0, turns: th / TAU, kind: 3, t0: 66, dur: 10, nib: false, spiral: 0 });
  labels.push({ text: `${((th * 180) / Math.PI).toFixed(1)}°`, x: x1 + Math.cos(th / 2) * (ra + S * 0.012), y: y1 + Math.sin(th / 2) * (ra + S * 0.012) + S * 0.006, rot: 0, size: hand * 0.8, align: "left", kind: 1, t0: 72, dur: 8, mono: false });

  // Type guides: every baseline and the first cap height, ruled across the sheet.
  const tx = plan.text;
  if (tx && tx.lines.length) {
    const half = tx.lineW[0]! / 2;
    tx.baselines.forEach((b, i) => {
      line(w * 0.5 - w * 0.55, b, w * 0.5 + w * 0.55, b, { kind: 3, t0: 100 + i * 4, dur: 22, w: 0.9, nib: i === 0 });
    });
    line(w * 0.5 + w * 0.55, tx.capY, w * 0.5 - w * 0.55, tx.capY, { kind: 3, t0: 104, dur: 22, w: 0.8, dash: [S * 0.006, S * 0.006] });
    const lsz = Math.max(S * 0.03, tx.titleSize * 0.42);
    const gap = S * 0.018;
    const m = measurer();
    m.font = `600 ${lsz}px sans-serif`;
    const need = m.measureText("base").width * 1.1;
    const rightOk = w / 2 + half + gap + need <= w - S * 0.03;
    const leftOk = w / 2 - half - gap - need >= S * 0.03;
    const right = rightOk;
    const fits = rightOk || leftOk;
    if (fits) {
      const lx = right ? w / 2 + half + gap : w / 2 - half - gap;
      const al: CanvasTextAlign = right ? "left" : "right";
      labels.push({ text: "cap", x: lx, y: tx.capY - lsz * 0.05, rot: 0, size: lsz, align: al, kind: 3, t0: 116, dur: 8, mono: false });
      labels.push({ text: "base", x: lx, y: tx.baselines[0]! - lsz * 0.05, rot: 0, size: lsz, align: al, kind: 3, t0: 118, dur: 8, mono: false });
    }
  }
  return { strokes, labels, pins, R };
}

const easeOf = (s: Stroke, x: number) => (s.ease === 0 ? outExpo(x) : inOut(x));

function strokePath(ctx: Ctx, s: Stroke, from: number, to: number, tipX: number, tipY: number, tipAt: number) {
  ctx.beginPath();
  ctx.moveTo(s.xs[from]!, s.ys[from]!);
  for (let i = from + 1; i <= to; i++) ctx.lineTo(s.xs[i]!, s.ys[i]!);
  if (tipAt >= 0) ctx.lineTo(tipX, tipY);
  ctx.stroke();
}

/** Draw a stroke up to progress p, tapering the pencil in and out. Returns the tip. */
function drawStroke(ctx: Ctx, s: Stroke, p: number, lw: number): [number, number] {
  const m = p * (s.n - 1);
  const k = Math.min(s.n - 1, Math.floor(m));
  const f = m - k;
  const tipX = k + 1 < s.n ? s.xs[k]! + (s.xs[k + 1]! - s.xs[k]!) * f : s.xs[k]!;
  const tipY = k + 1 < s.n ? s.ys[k]! + (s.ys[k + 1]! - s.ys[k]!) * f : s.ys[k]!;
  if (m <= 0) return [tipX, tipY];
  if (s.dash) {
    ctx.setLineDash(s.dash);
    ctx.lineWidth = lw * s.w;
    strokePath(ctx, s, 0, k, tipX, tipY, f > 0 ? 1 : -1);
    ctx.setLineDash([]);
    return [tipX, tipY];
  }
  if (!s.taper || s.n < 8) {
    ctx.lineWidth = lw * s.w;
    strokePath(ctx, s, 0, k, tipX, tipY, f > 0 ? 1 : -1);
    return [tipX, tipY];
  }
  const e = Math.max(2, Math.min(14, Math.round(s.n * 0.1)));
  const midEnd = s.n - 1 - e;
  // Lead-in taper.
  for (let i = 0; i < e && i < k; i++) {
    ctx.lineWidth = lw * s.w * (0.3 + (0.7 * (i + 0.5)) / e);
    ctx.beginPath();
    ctx.moveTo(s.xs[i]!, s.ys[i]!);
    ctx.lineTo(s.xs[i + 1]!, s.ys[i + 1]!);
    ctx.stroke();
  }
  if (k > e) {
    ctx.lineWidth = lw * s.w;
    const to = Math.min(k, midEnd);
    strokePath(ctx, s, e, to, tipX, tipY, k < midEnd && f > 0 ? 1 : -1);
  }
  // Lift-off taper.
  for (let i = Math.max(midEnd, e); i < k; i++) {
    ctx.lineWidth = lw * s.w * (0.3 + (0.7 * (s.n - 1 - i - 0.5)) / e);
    ctx.beginPath();
    ctx.moveTo(s.xs[i]!, s.ys[i]!);
    ctx.lineTo(s.xs[i + 1]!, s.ys[i + 1]!);
    ctx.stroke();
  }
  return [tipX, tipY];
}

// ---------------------------------------------------------------- component

/**
 * A designer's construction sheet. A grid is ruled on the logo's clear-space unit, axis lines
 * shoot past the mark, compass circles and diagonals are swung, clear space and dimensions are
 * measured and annotated by hand, the contour is traced in accent, and then the logo snaps onto
 * the guides. The pencil work steps back to a faint overlay and the title lands on its ruled baseline.
 */
export const Component: React.FC<Props> = ({ logo, eyebrow, title, primary, secondary, color, background, guides, grain, fontFamily, monoFamily }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: w, height: h, aspect, portrait } = useLayout();
  const S = Math.min(w, h);
  const transparent = background === "transparent";
  const INK = rgbOf(color, [237, 237, 237]);
  const KEY = rgbOf(primary, [255, 59, 48]);
  const SEC = rgbOf(secondary, INK);
  const BG = rgbOf(background, [11, 11, 11]);
  const dark = transparent ? lum(INK) > 0.4 : lum(BG) < 0.4;
  const titleFont = brandFontStack(fontFamily);
  const ebFont = brandFontStack(monoFamily);
  // Measurement notes are set in the title serif, like the numbered notes on a drafting sheet.
  const noteFont = titleFont;

  const [asset, setAsset] = useState<{ logo: LogoAsset | null } | null>(null);
  const [handle] = useState(() => delayRender("construction-lines-logo logo and fonts", { timeoutInMilliseconds: 60000 }));
  useEffect(() => {
    let alive = true;
    (async () => {
      await waitForBrandFonts();
      let l: LogoAsset | null = null;
      try {
        l = rasterLogo(await loadImage(logo.trim() || SAMPLE_LOGO));
      } catch {
        try { l = rasterLogo(await loadImage(SAMPLE_LOGO)); } catch { l = null; }
      }
      if (alive) setAsset({ logo: l });
    })()
      .catch(() => { if (alive) setAsset({ logo: null }); })
      .finally(() => continueRender(handle));
    return () => { alive = false; };
  }, [logo, handle]);

  const logoAspect = asset?.logo?.aspect ?? 1;
  // Planned on the first render too (re-planned once the logo and fonts are in), so the
  // text slots are always in the DOM, never only after an async load.
  const plan = useMemo(
    () => planLayout(w, h, aspect, portrait, logoAspect, eyebrow, title, titleFont, ebFont),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [asset, w, h, aspect, portrait, logoAspect, eyebrow, title, titleFont, ebFont],
  );
  const drawing = useMemo(() => buildDrawing(plan, w, h, S, `${hashString(logo)}-${aspect}`, "x"), [plan, w, h, S, logo, aspect]);
  const contour = useMemo(
    () => (asset?.logo ? buildContour(asset.logo, plan.box.bw, plan.box.bh, S, KEY) : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [plan, asset, S, primary],
  );
  const tiles = useMemo(
    () => ({ ink: grainTile(INK, 11, 0.45, 1), key: grainTile(KEY, 23, 0.6, 1), sec: grainTile(SEC, 37, 0.4, 1), paper: grainTile(INK, 51, 0, 1) }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [color, primary, secondary],
  );

  const paperRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLCanvasElement>(null);
  const guideRef = useRef<HTMLCanvasElement>(null);

  // ---------- paper (static)
  useLayoutEffect(() => {
    const ctx = paperRef.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, w, h);
    // Flat drafting paper: one even tone, the tooth comes from the grain below.
    ctx.fillStyle = css(BG);
    ctx.fillRect(0, 0, w, h);
    if (grain) {
      const pat = ctx.createPattern(tiles.paper, "repeat");
      if (pat) {
        ctx.globalAlpha = dark ? 0.045 : 0.06;
        ctx.fillStyle = pat;
        ctx.fillRect(0, 0, w, h);
        ctx.globalAlpha = 1;
      }
    }
  }, [plan, w, h, dark, background, color, primary, grain, tiles]);

  // ---------- logo raster (static)
  useLayoutEffect(() => {
    const c = logoRef.current;
    const ctx = c?.getContext("2d", { willReadFrequently: true });
    if (!c || !ctx) return;
    ctx.clearRect(0, 0, c.width, c.height);
    if (asset?.logo) {
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(asset.logo.canvas, 0, 0, c.width, c.height);
    }
  }, [plan, asset]);

  // ---------- pencil work (every frame)
  const g = Math.max(0.4, Math.min(1.6, guides));
  useLayoutEffect(() => {
    const ctx = guideRef.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    const t = frame;
    const { box } = plan;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
    ctx.setLineDash([]);
    ctx.clearRect(0, 0, w, h);
    ctx.lineJoin = "round";
    ctx.lineCap = "butt";

    const recede = smooth((t - T_RECEDE) / RECEDE_LEN);
    const flash = Math.exp(-(((t - (T_SNAP + 2)) / 7) ** 2));
    const lift = dark ? 1 : 1.12;
    const peak = [0.17, 0.5, 0.95, 0.55];
    const rest = [0.05 * g, 0.12 * g, 0.5 * g, 0.24 * g];
    const alphaOf = (k: Kind) => Math.min(1, (peak[k]! + (rest[k]! - peak[k]!) * recede) * lift * (1 + (k === 1 || k === 0 ? 0.55 : 0.12) * flash));
    const pats = [ctx.createPattern(tiles.sec, "repeat"), ctx.createPattern(tiles.ink, "repeat"), ctx.createPattern(tiles.key, "repeat"), ctx.createPattern(tiles.sec, "repeat")];
    const solid = [css(SEC), css(INK), css(KEY), css(SEC)];
    const lw = Math.max(1, S * 0.00115);
    const tips: [number, number, number][] = [];

    for (const kind of [0, 1, 3, 2] as Kind[]) {
      ctx.strokeStyle = pats[kind] ?? solid[kind]!;
      ctx.globalAlpha = alphaOf(kind);
      for (const s of drawing.strokes) {
        if (s.kind !== kind || t < s.t0) continue;
        const q = clamp01((t - s.t0) / s.dur);
        const pr = easeOf(s, q);
        const [tx, ty] = drawStroke(ctx, s, pr, lw);
        if (s.nib && q < 1 && q > 0) tips.push([tx, ty, Math.sin(Math.PI * q)]);
      }
    }

    // Compass pivots: a ring and a cross at every center.
    ctx.globalAlpha = alphaOf(2);
    ctx.strokeStyle = solid[2]!;
    for (const pin of drawing.pins) {
      if (t < pin.t0) continue;
      const sc = springSnap(t, fps, pin.t0, { damping: 11, stiffness: 220, mass: 0.6 });
      const pr = S * 0.0042 * sc, arm = S * 0.011 * sc;
      ctx.lineWidth = lw * 1.1;
      ctx.beginPath();
      ctx.arc(pin.x, pin.y, pr, 0, TAU);
      ctx.moveTo(pin.x - arm, pin.y);
      ctx.lineTo(pin.x + arm, pin.y);
      ctx.moveTo(pin.x, pin.y - arm);
      ctx.lineTo(pin.x, pin.y + arm);
      ctx.stroke();
    }

    // Handwritten notes, written in left to right.
    ctx.textBaseline = "middle";
    for (const lb of drawing.labels) {
      if (t < lb.t0) continue;
      const q = outCubic((t - lb.t0) / lb.dur);
      ctx.font = `italic 400 ${(lb.size * 1.04).toFixed(1)}px ${noteFont}`;
      ctx.textAlign = lb.align;
      const tw = ctx.measureText(lb.text).width;
      const left = lb.align === "center" ? -tw / 2 : lb.align === "right" ? -tw : 0;
      ctx.save();
      ctx.translate(lb.x, lb.y);
      ctx.rotate(lb.rot);
      ctx.beginPath();
      ctx.rect(left - lb.size * 0.2, -lb.size, (tw + lb.size * 0.4) * q, lb.size * 2);
      ctx.clip();
      ctx.globalAlpha = Math.min(1, alphaOf(lb.kind) * (lb.kind === 2 ? 1 : 1.5));
      ctx.fillStyle = solid[lb.kind]!;
      ctx.fillText(lb.text, 0, 0);
      ctx.restore();
    }

    // The contour traced around the mark with a compass sweep, then released.
    if (contour && t >= T_TRACE) {
      const q = inOut((t - T_TRACE) / TRACE_LEN);
      const fade = 1 - smooth((t - (T_SNAP + 4)) / 22);
      if (fade > 0.001) {
        const a0 = -Math.PI / 2;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(box.cx, box.cy);
        ctx.arc(box.cx, box.cy, drawing.R * 2 + S * 0.1, a0, a0 + TAU * q);
        ctx.closePath();
        ctx.clip();
        ctx.globalAlpha = 0.95 * fade;
        ctx.drawImage(contour, box.x0, box.y0, box.bw, box.bh);
        ctx.restore();
        if (q > 0 && q < 1) {
          // The compass arm sweeping the trace.
          const a = a0 + TAU * q;
          ctx.globalAlpha = 0.5 * Math.sin(Math.PI * q);
          ctx.strokeStyle = solid[2]!;
          ctx.lineWidth = lw;
          ctx.beginPath();
          ctx.moveTo(box.cx, box.cy);
          ctx.lineTo(box.cx + Math.cos(a) * drawing.R, box.cy + Math.sin(a) * drawing.R);
          ctx.stroke();
          tips.push([box.cx + Math.cos(a) * drawing.R, box.cy + Math.sin(a) * drawing.R, Math.sin(Math.PI * q)]);
        }
      }
    }

    // Registration corners close onto the box as the logo lands.
    if (t >= T_SNAP - 8) {
      const sc = springSnap(t, fps, T_SNAP - 4, { damping: 13, stiffness: 200, mass: 0.7 });
      const d = (1 - sc) * S * 0.07;
      const arm = S * 0.026;
      const gap = S * 0.008;
      ctx.globalAlpha = Math.min(1, alphaOf(2) * 1.05) * clamp01((t - (T_SNAP - 8)) / 5);
      ctx.strokeStyle = solid[2]!;
      ctx.lineWidth = lw * 1.8;
      ctx.lineCap = "square";
      const cs: [number, number, number, number][] = [
        [box.x0, box.y0, -1, -1],
        [box.x1, box.y0, 1, -1],
        [box.x1, box.y1, 1, 1],
        [box.x0, box.y1, -1, 1],
      ];
      ctx.beginPath();
      for (const [x, y, sx, sy] of cs) {
        const ox = x + sx * (gap + d), oy = y + sy * (gap + d);
        ctx.moveTo(ox - sx * arm, oy);
        ctx.lineTo(ox, oy);
        ctx.lineTo(ox, oy - sy * arm);
      }
      ctx.stroke();
      ctx.lineCap = "butt";
    }

    // One ring of light off the bounding circle on impact.
    if (t >= T_SNAP && t < T_SNAP + 26) {
      const q = (t - T_SNAP) / 26;
      ctx.globalAlpha = 0.75 * (1 - q) * (1 - q);
      ctx.strokeStyle = solid[2]!;
      ctx.lineWidth = lw * (0.6 + 2.2 * (1 - q));
      ctx.beginPath();
      ctx.arc(box.cx, box.cy, drawing.R * (1 + 0.14 * outCubic(q)), 0, TAU);
      ctx.stroke();
    }

    // The pen nib at the head of every line still being ruled: a crisp ring and dot, no glow.
    ctx.globalAlpha = 1;
    for (const [x, y, k] of tips) {
      const a = Math.min(1, 0.35 + k);
      ctx.fillStyle = css(KEY, a);
      ctx.beginPath();
      ctx.arc(x, y, S * 0.0034, 0, TAU);
      ctx.fill();
      ctx.strokeStyle = css(KEY, 0.6 * a);
      ctx.lineWidth = lw;
      ctx.beginPath();
      ctx.arc(x, y, S * 0.0085, 0, TAU);
      ctx.stroke();
    }

    // Fade the sheet out before the frame edges (corners always clear).
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "destination-in";
    const rx = portrait ? w * 0.62 : w * 0.58, ry = portrait ? h * 0.55 : h * 0.6;
    ctx.setTransform(rx, 0, 0, ry, w / 2, plan.groupCy);
    const mg = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
    mg.addColorStop(0, css(ZERO, 1));
    mg.addColorStop(0.58, css(ZERO, 1));
    mg.addColorStop(1, css(ZERO, 0));
    ctx.fillStyle = mg;
    ctx.fillRect(-w / 2 / rx - 0.1, -plan.groupCy / ry - 0.1, w / rx + 0.2, h / ry + 0.2);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
  }, [frame, fps, plan, drawing, contour, tiles, w, h, S, portrait, dark, g, color, primary, secondary, noteFont]);

  // ---------- DOM
  const { box, text } = plan;
  const cam = 1 + 0.04 * (1 - inOut(frame / 140));
  const snap = springSnap(frame, fps, T_SNAP, { damping: 12, stiffness: 190, mass: 0.75 });
  const logoOp = clamp01((frame - T_SNAP + 1) / 5);
  const logoScale = 1.12 - 0.12 * snap;
  const logoRot = -2.2 * (1 - snap);
  const logoDx = S * 0.014 * (1 - snap), logoDy = -S * 0.01 * (1 - snap);
  const blur = Math.max(0, (1 - snap) * S * 0.006);
  const ebIn = outCubic((frame - T_TEXT) / 20);
  const ebColor = withAlpha(color, 0.72);

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <AbsoluteFill style={{ transform: cam !== 1 ? `scale(${cam.toFixed(5)})` : undefined, transformOrigin: `${box.cx.toFixed(1)}px ${box.cy.toFixed(1)}px` }}>
        {!transparent ? <canvas ref={paperRef} width={w} height={h} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} /> : null}
        <canvas
          ref={logoRef}
          data-21st-slot="logo"
          width={Math.max(2, Math.round(box.bw))}
          height={Math.max(2, Math.round(box.bh))}
          style={{
            position: "absolute",
            left: box.x0,
            top: box.y0,
            width: box.bw,
            height: box.bh,
            opacity: logoOp,
            transform: snap < 1 ? `translate(${logoDx.toFixed(2)}px, ${logoDy.toFixed(2)}px) rotate(${logoRot.toFixed(3)}deg) scale(${logoScale.toFixed(4)})` : undefined,
            filter: blur > 0.05 ? `blur(${blur.toFixed(2)}px)` : undefined,
          }}
        />
        <canvas ref={guideRef} width={w} height={h} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
        {text ? (
          <>
            {eyebrow.trim() ? (
              <div
                data-21st-slot="eyebrow"
                style={{
                  position: "absolute",
                  left: (w - text.textW) / 2,
                  width: text.textW,
                  top: text.ebTop,
                  textAlign: "center",
                  fontFamily: ebFont,
                  fontWeight: 500,
                  fontSize: text.ebSize,
                  lineHeight: 1.3,
                  letterSpacing: "0.06em",
                  color: ebColor,
                  whiteSpace: "nowrap",
                  opacity: ebIn,
                  transform: ebIn < 1 ? `translateY(${((1 - ebIn) * S * 0.014).toFixed(2)}px)` : undefined,
                }}
              >
                {eyebrow}
              </div>
            ) : null}
            {text.lines.length ? (
              <div
                data-21st-slot="title"
                style={{
                  position: "absolute",
                  left: (w - text.textW) / 2,
                  width: text.textW,
                  top: text.titleTop,
                  textAlign: "center",
                  fontFamily: titleFont,
                  fontWeight: 400,
                  fontSize: text.titleSize,
                  lineHeight: 1.18,
                  letterSpacing: "-0.005em",
                  color,
                }}
              >
                {text.lines.map((ln, i) => {
                  const q = outCubic((frame - (T_TEXT + 6 + i * 5)) / 24);
                  return (
                    <span
                      key={i}
                      style={{
                        display: "block",
                        whiteSpace: "nowrap",
                        opacity: q,
                        transform: q < 1 ? `translateY(${((1 - q) * text.titleSize * 0.35).toFixed(2)}px)` : undefined,
                      }}
                    >
                      {ln}
                      {i < text.lines.length - 1 ? " " : ""}
                    </span>
                  );
                })}
              </div>
            ) : null}
          </>
        ) : null}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
