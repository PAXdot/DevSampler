// Built with Remotion - https://remotion.pro/license
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, continueRender, delayRender, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeOut, fitFontSize, ramp, useLayout, waitForBrandFonts } from "../../../kit/index";
import type { Aspect } from "../../../kit/spec";
import { hashString, rng, simplex3 } from "../_lib/noise";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./fiber-optic-logo.schema";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='17' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

/** Timeline (frames at 30 fps). */
const T_SPREAD = 26;
const T_PULSE = 54;
const PULSE_WAVE = 46;
const T_DIM = 108;
const T_HOLD = 128;

// ---------------------------------------------------------------- color

function rgbOf(color: string, fallback: RGB = [255, 255, 255]): RGB {
  let hex = /^#([0-9a-f]{3,8})$/i.exec(color)?.[1];
  if (hex) {
    if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
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
const mixRGB = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const css = (c: RGB, a = 1) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${Math.max(0, Math.min(1, a)).toFixed(3)})`;
const HOT: RGB = [255, 255, 255];
const SHADE: RGB = [0, 0, 0];

// ---------------------------------------------------------------- math

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (x: number) => {
  const t = clamp01(x);
  return t * t * (3 - 2 * t);
};
const backOut = (x: number, k = 1.5) => {
  const t = clamp01(x) - 1;
  return 1 + t * t * ((k + 1) * t + k);
};

/** Cubic bezier sub-segment [a, b] of P (x0 y0 x1 y1 x2 y2 x3 y3, at offset po) into o. */
function segment(P: Float64Array, po: number, a: number, b: number, o: Float64Array) {
  let x0 = P[po]!, y0 = P[po + 1]!, x1 = P[po + 2]!, y1 = P[po + 3]!, x2 = P[po + 4]!, y2 = P[po + 5]!, x3 = P[po + 6]!, y3 = P[po + 7]!;
  if (b < 1) {
    const t = b;
    const ax = x0 + (x1 - x0) * t, ay = y0 + (y1 - y0) * t;
    const bx = x1 + (x2 - x1) * t, by = y1 + (y2 - y1) * t;
    const cx = x2 + (x3 - x2) * t, cy = y2 + (y3 - y2) * t;
    const dx = ax + (bx - ax) * t, dy = ay + (by - ay) * t;
    const ex = bx + (cx - bx) * t, ey = by + (cy - by) * t;
    x1 = ax; y1 = ay; x2 = dx; y2 = dy; x3 = dx + (ex - dx) * t; y3 = dy + (ey - dy) * t;
  }
  if (a > 0 && b > 0) {
    const t = a / b;
    const ax = x0 + (x1 - x0) * t, ay = y0 + (y1 - y0) * t;
    const bx = x1 + (x2 - x1) * t, by = y1 + (y2 - y1) * t;
    const cx = x2 + (x3 - x2) * t, cy = y2 + (y3 - y2) * t;
    const dx = ax + (bx - ax) * t, dy = ay + (by - ay) * t;
    const ex = bx + (cx - bx) * t, ey = by + (cy - by) * t;
    x0 = dx + (ex - dx) * t; y0 = dy + (ey - dy) * t; x1 = ex; y1 = ey; x2 = cx; y2 = cy;
  }
  o[0] = x0; o[1] = y0; o[2] = x1; o[3] = y1; o[4] = x2; o[5] = y2; o[6] = x3; o[7] = y3;
}
function pointAt(P: Float64Array, po: number, u: number): [number, number] {
  const v = 1 - u;
  const a = v * v * v, b = 3 * v * v * u, c = 3 * v * u * u, d = u * u * u;
  return [a * P[po]! + b * P[po + 2]! + c * P[po + 4]! + d * P[po + 6]!, a * P[po + 1]! + b * P[po + 3]! + c * P[po + 5]! + d * P[po + 7]!];
}

// ---------------------------------------------------------------- layout

type Box = { cx: number; cy: number; bw: number; bh: number };
type Plan = { box: Box; capY: number; capW: number; capH: number; capLines: number; collarX: number; collarY: number; collarW: number };

function plan(aspect: Aspect, w: number, h: number, cap: boolean): Plan {
  if (aspect === "9:16")
    return { box: { cx: w / 2, cy: h * (cap ? 0.4 : 0.37), bw: w * 0.8, bh: h * 0.3 }, capY: h * 0.115, capW: w * 0.84, capH: h * 0.08, capLines: 2, collarX: w / 2, collarY: h * 0.855, collarW: w * 0.14 };
  if (aspect === "1:1")
    return { box: { cx: w / 2, cy: h * (cap ? 0.43 : 0.4), bw: w * 0.58, bh: h * 0.38 }, capY: h * 0.11, capW: w * 0.8, capH: h * 0.06, capLines: 1, collarX: w / 2, collarY: h * 0.865, collarW: w * 0.08 };
  return { box: { cx: w / 2, cy: h * (cap ? 0.43 : 0.4), bw: w * 0.36, bh: h * 0.4 }, capY: h * 0.12, capW: w * 0.6, capH: h * 0.06, capLines: 1, collarX: w / 2, collarY: h * 0.86, collarW: w * 0.042 };
}

// ---------------------------------------------------------------- logo mask

type Mask = { inside: Uint8Array; mw: number; mh: number; ms: number; mx0: number; my0: number; mx1: number; my1: number; area: number };

function rasterMask(img: HTMLImageElement | null, box: Box): Mask {
  const ms = Math.min(1, 520 / Math.max(box.bw, box.bh));
  const mw = Math.max(8, Math.round(box.bw * ms));
  const mh = Math.max(8, Math.round(box.bh * ms));
  let inside: Uint8Array | null = null;
  if (img) {
    try {
      const c = document.createElement("canvas");
      c.width = mw;
      c.height = mh;
      const ctx = c.getContext("2d", { willReadFrequently: true })!;
      // Rasterize once, trim the transparent artboard so the mark itself fills the box.
      const nw0 = img.naturalWidth || 512, nh0 = img.naturalHeight || 512;
      const k0 = 1024 / Math.max(nw0, nh0);
      const tc = document.createElement("canvas");
      tc.width = Math.max(1, Math.round(nw0 * k0));
      tc.height = Math.max(1, Math.round(nh0 * k0));
      const tctx = tc.getContext("2d", { willReadFrequently: true })!;
      tctx.drawImage(img, 0, 0, tc.width, tc.height);
      const td = tctx.getImageData(0, 0, tc.width, tc.height).data;
      let tx0 = tc.width, ty0 = tc.height, tx1 = -1, ty1 = -1;
      for (let y = 0; y < tc.height; y++)
        for (let x = 0; x < tc.width; x++)
          if (td[(y * tc.width + x) * 4 + 3]! > 16) { if (x < tx0) tx0 = x; if (x > tx1) tx1 = x; if (y < ty0) ty0 = y; if (y > ty1) ty1 = y; }
      if (tx1 < 0) { tx0 = 0; ty0 = 0; tx1 = tc.width - 1; ty1 = tc.height - 1; }
      const nw = tx1 - tx0 + 1, nh = ty1 - ty0 + 1;
      const k = Math.min(mw / nw, mh / nh);
      const dw = nw * k, dh = nh * k;
      ctx.drawImage(tc, tx0, ty0, nw, nh, (mw - dw) / 2, (mh - dh) / 2, dw, dh);
      const d = ctx.getImageData(0, 0, mw, mh).data;
      const rx0 = Math.ceil((mw - dw) / 2) + 1, ry0 = Math.ceil((mh - dh) / 2) + 1;
      const rx1 = Math.floor((mw + dw) / 2) - 1, ry1 = Math.floor((mh + dh) / 2) - 1;
      let clear = 0, total = 0;
      for (let y = ry0; y < ry1; y++)
        for (let x = rx0; x < rx1; x++) { total++; if (d[(y * mw + x) * 4 + 3]! < 250) clear++; }
      const m = new Uint8Array(mw * mh);
      let area = 0;
      if (clear > total * 0.03) {
        for (let i = 0; i < mw * mh; i++) if (d[i * 4 + 3]! > 110) { m[i] = 1; area++; }
      } else {
        // Opaque image: the mark is whatever differs from the paper (corner) color.
        const pc: [number, number, number] = [0, 0, 0];
        for (const [x, y] of [[rx0, ry0], [rx1, ry0], [rx0, ry1], [rx1, ry1]] as const) {
          const o = (y * mw + x) * 4;
          pc[0] += d[o]! / 4; pc[1] += d[o + 1]! / 4; pc[2] += d[o + 2]! / 4;
        }
        for (let i = 0; i < mw * mh; i++) {
          const o = i * 4;
          if (d[o + 3]! < 110) continue;
          if (Math.abs(d[o]! - pc[0]!) + Math.abs(d[o + 1]! - pc[1]!) + Math.abs(d[o + 2]! - pc[2]!) > 90) { m[i] = 1; area++; }
        }
      }
      // Where two parts of a multi-tone mark meet, carve a hairline gap so each part reads.
      if (area > 0) {
        const L = (i: number) => 0.299 * d[i * 4]! + 0.587 * d[i * 4 + 1]! + 0.114 * d[i * 4 + 2]!;
        const edges: number[] = [];
        for (let y = 0; y < mh - 2; y++)
          for (let x = 0; x < mw - 2; x++) {
            const i = y * mw + x;
            if (!m[i]) continue;
            const l0 = L(i);
            if ((m[i + 2] && Math.abs(L(i + 2) - l0) > 36) || (m[i + 2 * mw] && Math.abs(L(i + 2 * mw) - l0) > 36)) edges.push(x + 1, y + 1);
          }
        if (edges.length / 2 < area * 0.05) {
          const gr = Math.max(1.5, Math.min(mw, mh) * 0.022);
          const gi = Math.ceil(gr);
          const carved = m.slice();
          let left = area;
          for (let e = 0; e < edges.length; e += 2) {
            const ex = edges[e]!, ey = edges[e + 1]!;
            for (let dy = -gi; dy <= gi; dy++)
              for (let dx = -gi; dx <= gi; dx++) {
                if (dx * dx + dy * dy > gr * gr) continue;
                const x = ex + dx, y = ey + dy;
                if (x < 0 || y < 0 || x >= mw || y >= mh) continue;
                const j = y * mw + x;
                if (carved[j]) { carved[j] = 0; left--; }
              }
          }
          if (left > area * 0.7) { m.set(carved); area = left; }
        }
      }
      if (area > mw * mh * 0.004) inside = m;
    } catch {
      inside = null;
    }
  }
  if (!inside) {
    // Abstract fallback: a ring around a disc.
    inside = new Uint8Array(mw * mh);
    const R = Math.min(mw, mh) * 0.47, cx = mw / 2, cy = mh / 2;
    for (let y = 0; y < mh; y++)
      for (let x = 0; x < mw; x++) {
        const r = Math.hypot(x + 0.5 - cx, y + 0.5 - cy);
        if ((r > R * 0.78 && r < R) || r < R * 0.44) inside[y * mw + x] = 1;
      }
  }
  let area = 0, mx0 = mw, my0 = mh, mx1 = 0, my1 = 0;
  for (let y = 0; y < mh; y++)
    for (let x = 0; x < mw; x++) {
      if (!inside[y * mw + x]) continue;
      area++;
      if (x < mx0) mx0 = x;
      if (x > mx1) mx1 = x;
      if (y < my0) my0 = y;
      if (y > my1) my1 = y;
    }
  return { inside, mw, mh, ms, mx0, my0, mx1, my1, area };
}

// ---------------------------------------------------------------- fibers

type Geo = {
  key: string;
  n: number;
  /** Logo tips first, strays after. */
  nT: number;
  tx: Float32Array;
  ty: Float32Array;
  bx: Float32Array;
  by: Float32Array;
  colX: Float32Array;
  colY: Float32Array;
  wave: Float32Array;
  grow: Float32Array;
  launch: Float32Array;
  dur: Float32Array;
  tone: Uint8Array;
  hold: Float32Array;
  holdP: Float32Array;
  seed: Float32Array;
  dot: number;
  /** The mark's silhouette at mask resolution and where it sits in the frame. */
  sil: HTMLCanvasElement;
  sx: number;
  sy: number;
  sw: number;
  sh: number;
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  bulgeX: number;
};

function buildGeo(img: HTMLImageElement | null, p: Plan, aspect: Aspect, w: number, h: number, target: number, key: string): Geo {
  const { box } = p;
  const M = rasterMask(img, box);
  const r = rng(`fiber-${key}`);
  // Hex grid over the mark: a dot-matrix of fiber ends.
  const s = Math.max(1.2, Math.sqrt(M.area / (target * 0.866)));
  const pts: number[] = [];
  const rowH = s * 0.866;
  let row = 0;
  for (let y = M.my0 + rowH / 2; y <= M.my1 + 1; y += rowH, row++)
    for (let x = M.mx0 + (row % 2 ? s / 2 : s / 4); x <= M.mx1 + 1; x += s) {
      const xi = Math.floor(x), yi = Math.floor(y);
      if (xi < 0 || yi < 0 || xi >= M.mw || yi >= M.mh || !M.inside[yi * M.mw + xi]) continue;
      pts.push(x, y);
    }
  const bx0 = box.cx - box.bw / 2, by0 = box.cy - box.bh / 2;
  const ox = box.cx - (bx0 + (M.mx0 + M.mx1 + 1) / 2 / M.ms);
  const oy = box.cy - (by0 + (M.my0 + M.my1 + 1) / 2 / M.ms);
  const toX = (x: number) => bx0 + ox + x / M.ms;
  const toY = (y: number) => by0 + oy + y / M.ms;
  const x0 = toX(M.mx0), x1 = toX(M.mx1 + 1), y0 = toY(M.my0), y1 = toY(M.my1 + 1);
  const nT = pts.length / 2;
  // Strays: loose fibers whose tips spray out to the sides of the mark, like a fiber lamp.
  const nS = aspect === "9:16" ? Math.round(nT * 0.05) : Math.round(nT * 0.1);
  const n = nT + nS;
  const tx = new Float32Array(n), ty = new Float32Array(n);
  for (let i = 0; i < nT; i++) { tx[i] = toX(pts[i * 2]!); ty[i] = toY(pts[i * 2 + 1]!); }
  const mw2 = (x1 - x0) / 2, mh2 = (y1 - y0) / 2, mcx = (x0 + x1) / 2, mcy = (y0 + y1) / 2;
  for (let k = 0; k < nS; k++) {
    const i = nT + k;
    const side = k % 2 ? 1 : -1;
    if (aspect === "9:16") {
      tx[i] = mcx + side * mw2 * (0.25 + 0.75 * r());
      ty[i] = y1 + h * (0.03 + 0.07 * r());
    } else {
      const reach = Math.min(w * 0.44 - mw2, mw2 * 1.1);
      tx[i] = mcx + side * (mw2 + w * 0.025 + reach * Math.pow(r(), 0.8));
      ty[i] = mcy + mh2 * (-0.5 + 1.25 * r());
    }
  }
  const dy0 = p.collarY - y0;
  const order = Array.from({ length: n }, (_, i) => i).sort((a, b) => tx[a]! - tx[b]!);
  const bx = new Float32Array(n), by = new Float32Array(n), colX = new Float32Array(n), colY = new Float32Array(n);
  const wave = new Float32Array(n), grow = new Float32Array(n), launch = new Float32Array(n), dur = new Float32Array(n);
  const tone = new Uint8Array(n), hold = new Float32Array(n), holdP = new Float32Array(n), seed = new Float32Array(n);
  const cw = p.collarW * 0.84;
  for (let k = 0; k < n; k++) {
    const i = order[k]!;
    const across = (k + 0.5) / n - 0.5 + (r() - 0.5) * 0.04;
    bx[i] = p.collarX + across * cw;
    by[i] = p.collarY - p.collarW * 0.22;
  }
  for (let i = 0; i < n; i++) {
    const stray = i >= nT;
    // The bundle rises as one column with a ragged, brush-like top.
    colX[i] = p.collarX + (bx[i]! - p.collarX) * 1.25;
    colY[i] = by[i]! - dy0 * (0.38 + 0.22 * r());
    // Light reaches the bottom-center of the mark first and climbs outward in an arc.
    const wv = stray ? 0.25 + 0.7 * r() : Math.hypot((tx[i]! - mcx) / Math.max(1, mw2 * 2), (ty[i]! - y1) / Math.max(1, mh2 * 2)) / 1.05;
    wave[i] = clamp01(wv + (r() - 0.5) * 0.08);
    grow[i] = r() * 8;
    const len = (by[i]! - ty[i]!) / Math.max(1, dy0);
    launch[i] = T_PULSE + wave[i]! * PULSE_WAVE + (r() - 0.5) * 5;
    dur[i] = 14 + 9 * clamp01(len);
    const g = clamp01(((tx[i]! - x0) / Math.max(1, x1 - x0)) * 0.6 + ((y1 - ty[i]!) / Math.max(1, y1 - y0)) * 0.4);
    tone[i] = g < 0.34 ? 0 : g < 0.67 ? 1 : 2;
    // Some fibers keep carrying slow pulses after the mark has formed.
    hold[i] = r() < (stray ? 0.5 : 0.22) ? T_HOLD + r() * 70 : -1;
    holdP[i] = 58 + r() * 50;
    seed[i] = r() * 100;
  }
  // Silhouette canvas (opaque white) used for the solid fill and its halo.
  const sil = document.createElement("canvas");
  sil.width = M.mw;
  sil.height = M.mh;
  const sctx = sil.getContext("2d", { willReadFrequently: true })!;
  const id = sctx.createImageData(M.mw, M.mh);
  for (let i = 0; i < M.mw * M.mh; i++) if (M.inside[i]) { id.data[i * 4] = 255; id.data[i * 4 + 1] = 255; id.data[i * 4 + 2] = 255; id.data[i * 4 + 3] = 255; }
  sctx.putImageData(id, 0, 0);
  return {
    key, n, nT, tx, ty, bx, by, colX, colY, wave, grow, launch, dur, tone, hold, holdP, seed,
    dot: (s / M.ms) * 0.34,
    sil, sx: bx0 + ox, sy: by0 + oy, sw: M.mw / M.ms, sh: M.mh / M.ms,
    x0, y0, x1, y1,
    bulgeX: mcx,
  };
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

// ---------------------------------------------------------------- component

/**
 * A fiber optic bundle climbs out of its cable as one column, fans into the shape of
 * the logo with a little overshoot, then light is injected at the ferrule and races up
 * every strand. Each pulse lights its fiber's tip; the tips form the mark as a glowing
 * dot matrix, the strands dim and the mark fills solid while stray pulses keep twinkling.
 */
export const Component: React.FC<Props> = ({ logo, caption, primary, secondary, color, background, density, grain, fontFamily }) => {
  const frame = useCurrentFrame();
  const { width: w, height: h, aspect, portrait } = useLayout();
  const S = Math.min(w, h);
  const transparent = background === "transparent";
  const ink = rgbOf(color);
  const dark = transparent ? lum(ink) > 0.4 : lum(rgbOf(background, [0, 0, 0])) < 0.4;
  const hasCaption = caption.trim().length > 0;
  const font = brandFontStack(fontFamily);
  const P = useMemo(() => plan(aspect, w, h, hasCaption), [aspect, w, h, hasCaption]);

  const [asset, setAsset] = useState<{ img: HTMLImageElement | null } | null>(null);
  const [handle] = useState(() => delayRender("fiber-optic-logo logo and fonts", { timeoutInMilliseconds: 60000 }));
  useEffect(() => {
    let alive = true;
    (async () => {
      await waitForBrandFonts();
      let img: HTMLImageElement | null = null;
      try { img = await loadImage(logo.trim() || SAMPLE_LOGO); } catch { img = null; }
      if (alive) setAsset({ img });
    })()
      .catch(() => { if (alive) setAsset({ img: null }); })
      .finally(() => continueRender(handle));
    return () => { alive = false; };
  }, [logo, handle]);

  const target = Math.round((aspect === "16:9" ? 620 : aspect === "9:16" ? 700 : 640) * density);
  const geo = useMemo(() => {
    if (!asset) return null;
    return buildGeo(asset.img, P, aspect, w, h, target, `${hashString(logo)}-${aspect}-${w}x${h}-${hasCaption ? 1 : 0}-${target}`);
  }, [asset, logo, P, aspect, w, h, hasCaption, target]);

  const ref = useRef<HTMLCanvasElement>(null);
  const bufs = useRef<{ glow?: HTMLCanvasElement; b1?: HTMLCanvasElement; b2?: HTMLCanvasElement; fill?: { key: string; solid: HTMLCanvasElement; halo: HTMLCanvasElement } }>({});
  const noise = useMemo(() => simplex3("fiber-sway"), []);

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx || !geo) return;
    const B = bufs.current;
    const mk = (c: HTMLCanvasElement | undefined, cw: number, ch: number) => {
      const cv = c ?? document.createElement("canvas");
      if (cv.width !== cw || cv.height !== ch) { cv.width = cw; cv.height = ch; }
      return cv;
    };
    B.glow = mk(B.glow, w, h);
    B.b1 = mk(B.b1, Math.max(2, Math.round(w / 2)), Math.max(2, Math.round(h / 2)));
    B.b2 = mk(B.b2, Math.max(2, Math.round(w / 6)), Math.max(2, Math.round(h / 6)));
    const gctx = B.glow.getContext("2d", { willReadFrequently: true })!;
    const b1 = B.b1.getContext("2d", { willReadFrequently: true })!;
    const b2 = B.b2.getContext("2d", { willReadFrequently: true })!;

    const PC = rgbOf(primary), QC = rgbOf(secondary), BG = rgbOf(background, dark ? [0, 0, 0] : [255, 255, 255]);
    const t = frame;
    const { n, nT } = geo;

    // ---------- the solid mark (cached per colors) ----------
    const fkey = `${geo.key}|${primary}|${secondary}|${dark}`;
    if (!B.fill || B.fill.key !== fkey) {
      const sw = geo.sil.width, sh = geo.sil.height;
      const solid = document.createElement("canvas");
      solid.width = sw;
      solid.height = sh;
      const sc = solid.getContext("2d", { willReadFrequently: true })!;
      sc.drawImage(geo.sil, 0, 0);
      sc.globalCompositeOperation = "source-in";
      const g = sc.createLinearGradient(0, sh, sw, 0);
      const a = dark ? mixRGB(PC, SHADE, 0.08) : PC, b = dark ? mixRGB(PC, QC, 0.55) : QC;
      g.addColorStop(0, css(a));
      g.addColorStop(1, css(b));
      sc.fillStyle = g;
      sc.fillRect(0, 0, sw, sh);
      const pad = Math.round(Math.max(sw, sh) * 0.18);
      const halo = document.createElement("canvas");
      halo.width = sw + pad * 2;
      halo.height = sh + pad * 2;
      const hc = halo.getContext("2d", { willReadFrequently: true })!;
      hc.filter = `blur(${Math.max(2, Math.round(pad * 0.45))}px)`;
      hc.drawImage(solid, pad, pad);
      hc.filter = "none";
      B.fill = { key: fkey, solid, halo };
    }

    // ---------- timeline ----------
    const dim = smooth((t - T_DIM) / 40);
    const fill = smooth((t - (T_DIM + 4)) / 36);
    const charge = t >= 28 && t <= 62 ? clamp01((t - 28) / 26) : -1;
    let lit = 0;
    for (let i = 0; i < nT; i += 7) lit += smooth((t - geo.launch[i]! - geo.dur[i]!) / 6);
    lit /= Math.ceil(nT / 7);
    const inject = smooth((t - T_PULSE + 6) / 8) * (1 - 0.55 * smooth((t - (T_PULSE + PULSE_WAVE + 20)) / 30));

    // ---------- per-fiber geometry ----------
    const cur = new Float64Array(n * 8);
    const L = P.collarY - geo.y0;
    const sway = S * 0.012;
    for (let i = 0; i < n; i++) {
      const sp = backOut((t - T_SPREAD - geo.wave[i]! * 22) / 36, 1.25);
      const ex = geo.colX[i]! + (geo.tx[i]! - geo.colX[i]!) * sp;
      const ey = geo.colY[i]! + (geo.ty[i]! - geo.colY[i]!) * sp;
      const sx = geo.bx[i]!, sy = geo.by[i]!;
      const dy = sy - ey;
      const sd = geo.seed[i]!;
      const nx1 = noise(sd, t * 0.012, 0.5) * sway, nx2 = noise(sd + 17, t * 0.012, 2.5) * sway * 0.7;
      const o = i * 8;
      cur[o] = sx; cur[o + 1] = sy;
      cur[o + 2] = sx + (ex - sx) * 0.06 + nx1; cur[o + 3] = sy - dy * 0.46;
      cur[o + 4] = ex + (ex - geo.bulgeX) * 0.5 + nx2; cur[o + 5] = ey + Math.max(dy * 0.34, L * 0.12);
      cur[o + 6] = ex; cur[o + 7] = ey;
    }

    // ---------- backdrop ----------
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.filter = "none";
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, w, h);
    const mcx = (geo.x0 + geo.x1) / 2, mcy = (geo.y0 + geo.y1) / 2;
    if (!transparent) {
      ctx.fillStyle = css(BG);
      ctx.fillRect(0, 0, w, h);
      // Warm light pooling around the mark and the ferrule.
      const R = Math.max(w, h) * 0.6;
      const g = ctx.createRadialGradient(mcx, mcy, 0, mcx, mcy, R);
      g.addColorStop(0, css(PC, (dark ? 0.06 : 0.07) + (dark ? 0.1 : 0.06) * fill));
      g.addColorStop(0.5, css(QC, dark ? 0.03 : 0.03));
      g.addColorStop(1, css(QC, 0));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }
    const lw = Math.max(0.9, S * (dark ? 0.00105 : 0.0013));
    const add = dark ? "lighter" : "source-over";

    // ---------- halo of the solid mark ----------
    if (fill > 0) {
      const hl = B.fill.halo, k = geo.sw / geo.sil.width, pad = ((hl.width - geo.sil.width) / 2) * k;
      ctx.globalCompositeOperation = add;
      ctx.globalAlpha = fill * (dark ? 0.32 : 0.2);
      ctx.drawImage(hl, geo.sx - pad, geo.sy - pad, hl.width * k, hl.height * k);
      ctx.globalAlpha = 1;
    }

    // ---------- strands ----------
    const tones: RGB[] = dark ? [PC, mixRGB(PC, QC, 0.5), QC] : [mixRGB(PC, ink, 0.28), mixRGB(mixRGB(PC, QC, 0.5), ink, 0.34), mixRGB(QC, ink, 0.4)];
    const SA = dark ? [0.05, 0.1, 0.17, 0.27, 0.4] : [0.1, 0.17, 0.26, 0.38, 0.52];
    const seg = new Float64Array(8);
    const strandPaths: Path2D[] = Array.from({ length: 15 }, () => new Path2D());
    const growOf = (i: number) => easeOut(clamp01((t - 1 - geo.grow[i]!) / 26));
    for (let i = 0; i < n; i++) {
      const g = growOf(i);
      if (g <= 0.001) continue;
      const lt = smooth((t - geo.launch[i]! - geo.dur[i]! * 0.4) / (geo.dur[i]! * 0.9));
      const level = (0.32 + 0.68 * lt) * (1 - 0.45 * dim) * (i >= nT ? 0.75 : 1);
      const ab = Math.min(4, Math.floor(level * 5));
      segment(cur, i * 8, 0, g, seg);
      const pth = strandPaths[geo.tone[i]! * 5 + ab]!;
      pth.moveTo(seg[0]!, seg[1]!);
      pth.bezierCurveTo(seg[2]!, seg[3]!, seg[4]!, seg[5]!, seg[6]!, seg[7]!);
    }
    ctx.globalCompositeOperation = add;
    ctx.lineWidth = lw;
    ctx.lineCap = "round";
    for (let b = 0; b < 15; b++) {
      ctx.strokeStyle = css(tones[Math.floor(b / 5)]!, SA[b % 5]!);
      ctx.stroke(strandPaths[b]!);
    }

    // ---------- the mark fills solid ----------
    if (fill > 0) {
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = fill * (dark ? 0.82 : 0.94);
      ctx.drawImage(B.fill.solid, geo.sx, geo.sy, geo.sw, geo.sh);
      ctx.globalAlpha = 1;
    }

    // ---------- cable and ferrule ----------
    {
      ctx.globalCompositeOperation = "source-over";
      const cx = P.collarX, cw = P.collarW * 0.9, top = P.collarY;
      const jk: RGB = dark ? mixRGB(BG, ink, 0.1) : mixRGB(ink, BG, 0.12);
      const jh: RGB = dark ? mixRGB(BG, ink, 0.34) : mixRGB(ink, BG, 0.5);
      const jg = ctx.createLinearGradient(cx - cw / 2, 0, cx + cw / 2, 0);
      jg.addColorStop(0, css(mixRGB(jk, SHADE, 0.35)));
      jg.addColorStop(0.28, css(jh));
      jg.addColorStop(0.42, css(jk));
      jg.addColorStop(0.85, css(mixRGB(jk, SHADE, 0.2)));
      jg.addColorStop(1, css(mixRGB(jk, SHADE, 0.45)));
      ctx.fillStyle = jg;
      ctx.fillRect(cx - cw / 2, top, cw, h - top + 2);
      // Light charging up the cable before it reaches the strands.
      if (charge >= 0) {
        const y = h + cw - (h + cw - top) * Math.pow(charge, 1.4);
        const bg2 = ctx.createLinearGradient(0, y - cw * 1.2, 0, y + cw * 1.2);
        bg2.addColorStop(0, css(PC, 0));
        bg2.addColorStop(0.5, css(dark ? mixRGB(QC, HOT, 0.3) : PC, dark ? 0.8 : 0.65));
        bg2.addColorStop(1, css(PC, 0));
        ctx.globalCompositeOperation = add;
        ctx.fillStyle = bg2;
        ctx.fillRect(cx - cw / 2, Math.max(top, y - cw * 1.2), cw, cw * 2.4);
        ctx.globalCompositeOperation = "source-over";
      }
      // Ferrule: a machined collar at the mouth of the bundle.
      const fw = P.collarW * 1.1, fh = P.collarW * 0.46, fy = top - P.collarW * 0.24;
      const fg = ctx.createLinearGradient(cx - fw / 2, 0, cx + fw / 2, 0);
      const metal: RGB = dark ? mixRGB(BG, ink, 0.42) : mixRGB(ink, BG, 0.35);
      fg.addColorStop(0, css(mixRGB(metal, SHADE, 0.45)));
      fg.addColorStop(0.22, css(mixRGB(metal, QC, 0.35)));
      fg.addColorStop(0.32, css(mixRGB(metal, HOT, dark ? 0.35 : 0.5)));
      fg.addColorStop(0.5, css(metal));
      fg.addColorStop(0.86, css(mixRGB(metal, SHADE, 0.3)));
      fg.addColorStop(1, css(mixRGB(metal, SHADE, 0.55)));
      ctx.fillStyle = fg;
      const rr = fh * 0.22;
      ctx.beginPath();
      ctx.roundRect(cx - fw / 2, fy, fw, fh, rr);
      ctx.fill();
      ctx.strokeStyle = css(mixRGB(metal, SHADE, 0.5), 0.8);
      ctx.lineWidth = Math.max(1, S * 0.0012);
      ctx.beginPath();
      ctx.moveTo(cx - fw / 2 + rr, fy + fh * 0.62);
      ctx.lineTo(cx + fw / 2 - rr, fy + fh * 0.62);
      ctx.stroke();
    }

    // ---------- glow layer: pulses and tips ----------
    gctx.setTransform(1, 0, 0, 1, 0, 0);
    gctx.globalCompositeOperation = "source-over";
    gctx.globalAlpha = 1;
    gctx.clearRect(0, 0, w, h);
    gctx.lineCap = "round";
    const tail1 = new Path2D(), tail2 = new Path2D(), head = new Path2D(), heads = new Path2D();
    const pulse = (i: number, u: number) => {
      const o = i * 8;
      const a0 = Math.max(0, u - 0.24), a1 = Math.max(0, u - 0.09), a2 = Math.max(0, u - 0.025), a3 = Math.min(1, u);
      if (a1 > a0) { segment(cur, o, a0, Math.min(1, a1), seg); tail1.moveTo(seg[0]!, seg[1]!); tail1.bezierCurveTo(seg[2]!, seg[3]!, seg[4]!, seg[5]!, seg[6]!, seg[7]!); }
      if (a2 > a1 && a1 < 1) { segment(cur, o, a1, Math.min(1, a2), seg); tail2.moveTo(seg[0]!, seg[1]!); tail2.bezierCurveTo(seg[2]!, seg[3]!, seg[4]!, seg[5]!, seg[6]!, seg[7]!); }
      if (a3 > a2 && a2 < 1) { segment(cur, o, a2, a3, seg); head.moveTo(seg[0]!, seg[1]!); head.bezierCurveTo(seg[2]!, seg[3]!, seg[4]!, seg[5]!, seg[6]!, seg[7]!); }
      if (u <= 1) {
        const [hx, hy] = pointAt(cur, o, u);
        heads.moveTo(hx + lw * 2.2, hy);
        heads.arc(hx, hy, lw * 2.2, 0, Math.PI * 2);
      }
    };
    const fillT = fill;
    const tipLevel = new Float32Array(n);
    const flashes = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const D = geo.dur[i]!;
      let pp = (t - geo.launch[i]!) / D;
      if (pp >= 0 && pp < 1.3) pulse(i, Math.pow(pp, 1.35));
      const arr = geo.launch[i]! + D;
      let on = smooth((t - arr) / 3);
      let fl = t >= arr ? Math.exp(-(t - arr) / 7) : 0;
      const h0 = geo.hold[i]!;
      if (h0 > 0 && t >= h0) {
        const per = geo.holdP[i]!, k = (t - h0) % per;
        pp = k / D;
        if (pp < 1.3) pulse(i, Math.pow(pp, 1.35));
        if (k >= D) fl = Math.max(fl, 0.55 * Math.exp(-(k - D) / 8));
      }
      // Before the light arrives the fiber end is a faint dot that rides the strand.
      const g = growOf(i);
      on = Math.max(on, 0);
      tipLevel[i] = g > 0.98 ? (0.16 + 0.84 * on) * (i >= nT ? 0.6 : 1 - 0.38 * fillT) : 0;
      flashes[i] = fl;
    }
    const hot: RGB = dark ? mixRGB(QC, HOT, 0.6) : mixRGB(PC, ink, 0.25);
    gctx.lineWidth = lw * 1.5;
    gctx.strokeStyle = css(PC, dark ? 0.35 : 0.4);
    gctx.stroke(tail1);
    gctx.lineWidth = lw * 2;
    gctx.strokeStyle = css(mixRGB(PC, QC, 0.5), dark ? 0.7 : 0.75);
    gctx.stroke(tail2);
    gctx.lineWidth = lw * 2.6;
    gctx.strokeStyle = css(hot, 1);
    gctx.stroke(head);
    gctx.fillStyle = css(hot, 1);
    gctx.fill(heads);

    // Tips: 3 tones x 5 levels, plus hot cores where a pulse just arrived.
    const tipPaths: Path2D[] = Array.from({ length: 15 }, () => new Path2D());
    const core = new Path2D(), core2 = new Path2D();
    const r0 = Math.max(lw * 1.4, geo.dot);
    for (let i = 0; i < n; i++) {
      const lv = tipLevel[i]!;
      const fl = flashes[i]!;
      let x: number, y: number;
      const g = growOf(i);
      if (g < 0.98 && g > 0.02) {
        // Riding column tips during the climb.
        [x, y] = pointAt(cur, i * 8, g);
        const pth = tipPaths[geo.tone[i]! * 5 + 1]!;
        pth.moveTo(x + r0 * 0.6, y);
        pth.arc(x, y, r0 * 0.6, 0, Math.PI * 2);
        continue;
      }
      if (lv <= 0) continue;
      x = cur[i * 8 + 6]!;
      y = cur[i * 8 + 7]!;
      const rad = r0 * (i >= nT ? 0.7 : 1) * (0.62 + 0.38 * lv + 0.45 * fl);
      const ab = Math.min(4, Math.floor(lv * 5));
      const pth = tipPaths[geo.tone[i]! * 5 + ab]!;
      pth.moveTo(x + rad, y);
      pth.arc(x, y, rad, 0, Math.PI * 2);
      if (lv > 0.5) {
        const cr = rad * (fl > 0.3 ? 0.62 : 0.42);
        const cp = fl > 0.3 ? core : core2;
        cp.moveTo(x + cr, y);
        cp.arc(x, y, cr, 0, Math.PI * 2);
      }
    }
    const TA = dark ? [0.25, 0.45, 0.65, 0.85, 1] : [0.3, 0.5, 0.7, 0.85, 1];
    const tipTones: RGB[] = dark ? [PC, mixRGB(PC, QC, 0.5), QC] : [PC, mixRGB(PC, QC, 0.5), QC].map((c) => mixRGB(c, HOT, 0.42 * fillT));
    for (let b = 0; b < 15; b++) {
      gctx.fillStyle = css(tipTones[Math.floor(b / 5)]!, TA[b % 5]!);
      gctx.fill(tipPaths[b]!);
    }
    gctx.fillStyle = css(dark ? mixRGB(QC, HOT, 0.75) : mixRGB(PC, ink, 0.45), 1);
    gctx.fill(core);
    gctx.fillStyle = css(dark ? mixRGB(QC, HOT, 0.35) : mixRGB(mixRGB(PC, QC, 0.5), HOT, 0.35), dark ? 0.9 : 0.75);
    gctx.fill(core2);
    // Light pouring out of the ferrule mouth.
    if (inject > 0) {
      const fx = P.collarX, fy = P.collarY - P.collarW * 0.24, R = Math.min(P.collarW, S * 0.07) * 1.4;
      const mg = gctx.createRadialGradient(fx, fy, 0, fx, fy, R);
      mg.addColorStop(0, css(dark ? mixRGB(QC, HOT, 0.4) : PC, 0.75 * inject));
      mg.addColorStop(0.35, css(PC, 0.35 * inject));
      mg.addColorStop(1, css(PC, 0));
      gctx.fillStyle = mg;
      gctx.fillRect(fx - R, fy - R, R * 2, R * 2);
    }

    // ---------- bloom ----------
    b1.setTransform(1, 0, 0, 1, 0, 0);
    b1.filter = "none";
    b1.clearRect(0, 0, B.b1.width, B.b1.height);
    b1.filter = `blur(${Math.max(1, Math.round(S * 0.0035))}px)`;
    b1.drawImage(B.glow, 0, 0, B.b1.width, B.b1.height);
    b1.filter = "none";
    b2.setTransform(1, 0, 0, 1, 0, 0);
    b2.filter = "none";
    b2.clearRect(0, 0, B.b2.width, B.b2.height);
    b2.filter = `blur(${Math.max(1, Math.round(S * 0.0045))}px)`;
    b2.drawImage(B.b1, 0, 0, B.b2.width, B.b2.height);
    b2.filter = "none";
    const swell = Math.exp(-Math.pow((t - (T_PULSE + PULSE_WAVE + 18)) / 22, 2));
    ctx.globalCompositeOperation = add;
    ctx.globalAlpha = (dark ? 0.9 + 0.3 * swell + 0.2 * lit : 0.4) * (1 - 0.4 * fill);
    ctx.drawImage(B.b2, 0, 0, w, h);
    ctx.globalAlpha = dark ? 0.85 : 0.35;
    ctx.drawImage(B.b1, 0, 0, w, h);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
    ctx.drawImage(B.glow, 0, 0);
    ctx.globalCompositeOperation = "source-over";

    // ---------- vignette / transparent edge ----------
    if (!transparent) {
      const v = ctx.createRadialGradient(w / 2, h * 0.46, S * 0.38, w / 2, h * 0.46, Math.hypot(w, h) * 0.62);
      v.addColorStop(0, css(BG, 0));
      v.addColorStop(1, css(dark ? mixRGB(BG, SHADE, 0.35) : mixRGB(BG, ink, 0.06), dark ? 0.75 : 0.5));
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, w, h);
    } else {
      ctx.globalCompositeOperation = "destination-in";
      ctx.setTransform(w / 2, 0, 0, h / 2, w / 2, h / 2);
      const m = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
      m.addColorStop(0, css(SHADE, 1));
      m.addColorStop(0.8, css(SHADE, 1));
      m.addColorStop(1, css(SHADE, 0));
      ctx.fillStyle = m;
      ctx.fillRect(-1.5, -1.5, 3, 3);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = "source-over";
    }
  }, [frame, geo, P, w, h, S, primary, secondary, background, transparent, dark, ink, noise]);

  // ---------- caption ----------
  const capSize = hasCaption
    ? Math.max(
        h * (portrait ? 0.031 : 0.02),
        fitFontSize({ chars: caption.length, boxW: P.capW, boxH: P.capH, lines: P.capLines, charEm: 0.56, lineHeight: 1.22, max: aspect === "16:9" ? h * 0.042 : aspect === "1:1" ? h * 0.04 : h * 0.034 }),
      )
    : 0;
  const capIn = easeOut(ramp(frame, [124, 150], [0, 1]));
  const capShadow = dark && !transparent ? `0 0 ${Math.round(S * 0.03)}px ${css(rgbOf(primary), 0.35 * capIn)}` : undefined;

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <AbsoluteFill data-21st-slot="logo">
        <canvas ref={ref} width={w} height={h} style={{ width: "100%", height: "100%", display: "block" }} />
      </AbsoluteFill>
      {hasCaption && geo ? (
        <div
          data-21st-slot="caption"
          style={{
            position: "absolute",
            left: (w - P.capW) / 2,
            width: P.capW,
            top: P.capY - (capSize * 1.22 * (portrait ? 1 : 0.5)),
            textAlign: "center",
            fontFamily: font,
            fontWeight: 500,
            fontSize: capSize,
            lineHeight: 1.22,
            letterSpacing: "0.01em",
            color,
            opacity: capIn,
            textShadow: capShadow,
            transform: capIn < 1 ? `translateY(${((1 - capIn) * S * 0.02).toFixed(2)}px)` : undefined,
            whiteSpace: "normal",
            overflowWrap: "anywhere",
          }}
        >
          {caption}
        </div>
      ) : null}
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.06 : 0.08, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
