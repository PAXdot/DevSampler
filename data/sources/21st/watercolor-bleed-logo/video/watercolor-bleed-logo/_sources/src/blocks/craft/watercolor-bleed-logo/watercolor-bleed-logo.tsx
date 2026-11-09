// Built with Remotion - https://remotion.pro/license
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, continueRender, delayRender, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeOut, fitFontSize, ramp, useLayout, waitForBrandFonts } from "../../../kit/index";
import type { Aspect } from "../../../kit/spec";
import { hashString, rng } from "../_lib/noise";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./watercolor-bleed-logo.schema";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];

const TAU = Math.PI * 2;
/** Paint is soft: the sheet is simulated at half resolution; the crisp glaze and caption stay full res. */
const SCALE = 0.5;

/** Timeline (frames at 30 fps). */
const T_DROPS = [10, 15, 21, 27];
const FLOOD = 34;
const BLEED: [number, number] = [20, 104];
const BLOOMS = [52, 66, 82, 94];
const BLOOM_DUR = 36;
const DRY0 = 86;
const DRY_SPAN = 44;
const DRY_LEN = 16;
const GLAZE: [number, number] = [126, 156];
const CAPTION0 = 128;

// Full-res cold-press tooth: fractal noise lit from the top left. No colors, it is blended over the sheet.
const TOOTH =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='0.62' numOctaves='3' seed='23' stitchTiles='stitch'/><feDiffuseLighting surfaceScale='2.4' diffuseConstant='1.05'><feDistantLight azimuth='225' elevation='52'/></feDiffuseLighting></filter><rect width='100%' height='100%' filter='url(%23p)'/></svg>\")";

// ---------------------------------------------------------------- color

function rgbOf(color: string, fallback: RGB): RGB {
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
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const css = (c: RGB) => `rgb(${Math.round(c[0])} ${Math.round(c[1])} ${Math.round(c[2])})`;
const HI: RGB = [255, 255, 255];

// ---------------------------------------------------------------- math

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (x: number) => {
  const t = clamp01(x);
  return t * t * (3 - 2 * t);
};

/** Allocation-free seeded 2D gradient noise, about -1..1. Fields are baked once, so this only runs at setup. */
function noise2(seed: string) {
  const r = rng(seed);
  const perm = new Uint8Array(512);
  const base = Array.from({ length: 256 }, (_, i) => i);
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [base[i], base[j]] = [base[j]!, base[i]!];
  }
  for (let i = 0; i < 512; i++) perm[i] = base[i & 255]!;
  const gx = new Float32Array(256), gy = new Float32Array(256);
  for (let i = 0; i < 256; i++) {
    const a = r() * TAU;
    gx[i] = Math.cos(a);
    gy[i] = Math.sin(a);
  }
  return (x: number, y: number): number => {
    const xi = Math.floor(x), yi = Math.floor(y);
    const xf = x - xi, yf = y - yi;
    const X = xi & 255, Y = yi & 255;
    const a = perm[X + perm[Y]!]!, b = perm[X + 1 + perm[Y]!]!, c = perm[X + perm[Y + 1]!]!, d = perm[X + 1 + perm[Y + 1]!]!;
    const n00 = gx[a]! * xf + gy[a]! * yf;
    const n10 = gx[b]! * (xf - 1) + gy[b]! * yf;
    const n01 = gx[c]! * xf + gy[c]! * (yf - 1);
    const n11 = gx[d]! * (xf - 1) + gy[d]! * (yf - 1);
    const u = xf * xf * xf * (xf * (xf * 6 - 15) + 10), v = yf * yf * yf * (yf * (yf * 6 - 15) + 10);
    const top = n00 + (n10 - n00) * u, bot = n01 + (n11 - n01) * u;
    return (top + (bot - top) * v) * 1.5;
  };
}
function fbm(n: (x: number, y: number) => number, x: number, y: number, oct: number): number {
  let s = 0, a = 0.6, f = 1;
  for (let o = 0; o < oct; o++) {
    s += a * n(x * f + o * 17.3, y * f - o * 9.1);
    f *= 2.03;
    a *= 0.5;
  }
  return s;
}

/** Felzenszwalb 1D squared distance transform. */
function edt1d(f: Float64Array, n: number, d: Float64Array, v: Int32Array, z: Float64Array) {
  let k = 0;
  v[0] = 0;
  z[0] = -Infinity;
  z[1] = Infinity;
  for (let q = 1; q < n; q++) {
    let s = (f[q]! + q * q - (f[v[k]!]! + v[k]! * v[k]!)) / (2 * q - 2 * v[k]!);
    while (s <= z[k]!) {
      k--;
      s = (f[q]! + q * q - (f[v[k]!]! + v[k]! * v[k]!)) / (2 * q - 2 * v[k]!);
    }
    k++;
    v[k] = q;
    z[k] = s;
    z[k + 1] = Infinity;
  }
  k = 0;
  for (let q = 0; q < n; q++) {
    while (z[k + 1]! < q) k++;
    d[q] = (q - v[k]!) * (q - v[k]!) + f[v[k]!]!;
  }
}
/** Euclidean distance (px) from every cell to the nearest cell where `on` is true. */
function edt(on: (i: number) => boolean, w: number, h: number): Float32Array {
  const INF = 1e12;
  const g = new Float64Array(w * h);
  for (let i = 0; i < w * h; i++) g[i] = on(i) ? 0 : INF;
  const n = Math.max(w, h);
  const f = new Float64Array(n), d = new Float64Array(n), z = new Float64Array(n + 1);
  const v = new Int32Array(n);
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) f[y] = g[y * w + x]!;
    edt1d(f, h, d, v, z);
    for (let y = 0; y < h; y++) g[y * w + x] = d[y]!;
  }
  const out = new Float32Array(w * h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) f[x] = g[y * w + x]!;
    edt1d(f, w, d, v, z);
    for (let x = 0; x < w; x++) out[y * w + x] = Math.sqrt(d[x]!);
  }
  return out;
}

// ---------------------------------------------------------------- layout

type Box = { cx: number; cy: number; bw: number; bh: number };

/** Where the painted logo sits, as fractions of the frame. */
function logoBox(aspect: Aspect, caption: boolean): Box {
  // Portrait: a big mark across the upper two thirds, caption under it.
  if (aspect === "9:16") return { cx: 0.5, cy: caption ? 0.41 : 0.47, bw: 0.84, bh: 0.5 };
  if (aspect === "1:1") return { cx: 0.5, cy: caption ? 0.45 : 0.5, bw: 0.62, bh: 0.54 };
  return { cx: 0.5, cy: caption ? 0.44 : 0.5, bw: 0.5, bh: 0.54 };
}

// ---------------------------------------------------------------- baked fields

type Crop = { src: HTMLCanvasElement | null; sx: number; sy: number; sw: number; sh: number };

/**
 * Rasterize the logo once (SVGs without a size included) and find its visible part
 * (alpha bounding box), so padded marks still fill the layout box.
 */
function rasterLogo(img: HTMLImageElement | null): Crop {
  const nw = img?.naturalWidth || 120, nh = img?.naturalHeight || 120;
  if (!img) return { src: null, sx: 0, sy: 0, sw: nw, sh: nh };
  const k = 1600 / Math.max(nw, nh);
  const pw = Math.max(1, Math.round(nw * k)), ph = Math.max(1, Math.round(nh * k));
  const c = document.createElement("canvas");
  c.width = pw;
  c.height = ph;
  const ctx = c.getContext("2d", { willReadFrequently: true });
  if (!ctx) return { src: null, sx: 0, sy: 0, sw: nw, sh: nh };
  ctx.drawImage(img, 0, 0, pw, ph);
  const data = ctx.getImageData(0, 0, pw, ph).data;
  let x0 = pw, y0 = ph, x1 = -1, y1 = -1;
  for (let y = 0; y < ph; y++) {
    for (let x = 0; x < pw; x++) {
      if (data[(y * pw + x) * 4 + 3]! < 16) continue;
      if (x < x0) x0 = x;
      if (y < y0) y0 = y;
      if (x > x1) x1 = x;
      if (y > y1) y1 = y;
    }
  }
  if (x1 < 0) return { src: c, sx: 0, sy: 0, sw: pw, sh: ph };
  x0 = Math.max(0, x0 - 2);
  y0 = Math.max(0, y0 - 2);
  x1 = Math.min(pw - 1, x1 + 2);
  y1 = Math.min(ph - 1, y1 + 2);
  return { src: c, sx: x0, sy: y0, sw: x1 - x0 + 1, sh: y1 - y0 + 1 };
}

type Bloom = { x: number; y: number; r: number; t: number };
type Fields = {
  key: string;
  /** Fitted logo rect on the half-res grid. */
  fx: number;
  fy: number;
  fw: number;
  fh: number;
  /** Simulated region on the grid (logo rect plus bleed margin). */
  rx: number;
  ry: number;
  rw: number;
  rh: number;
  /** Logo scale in grid px; every distance below is in these units. */
  ls: number;
  opaque: boolean;
  crop: Crop;
  sdf: Float32Array;
  tWater: Float32Array;
  tArr: Float32Array;
  tDry: Float32Array;
  bleed: Float32Array;
  jit: Float32Array;
  lowN: Float32Array;
  midN: Float32Array;
  hiN: Float32Array;
  frill: Float32Array;
  mixF: Float32Array;
  sheen: Float32Array;
  dot: Float32Array;
  dotT: Float32Array;
  blooms: Bloom[];
};

const fieldCache = new Map<string, Fields>();

function buildFields(img: HTMLImageElement | null, gw: number, gh: number, box: Box, key: string): Fields {
  const hit = fieldCache.get(key);
  if (hit) return hit;
  // Fit the logo (contain) into the box.
  const crop = rasterLogo(img);
  const iw = crop.sw, ih = crop.sh;
  const bw = box.bw * gw, bh = box.bh * gh;
  const k = Math.min(bw / iw, bh / ih);
  const fw = Math.max(8, Math.round(iw * k)), fh = Math.max(8, Math.round(ih * k));
  const fx = Math.round(box.cx * gw - fw / 2), fy = Math.round(box.cy * gh - fh / 2);
  const ls = Math.max(Math.min(fw, fh), Math.max(fw, fh) * 0.34);
  const margin = Math.round(ls * 0.17);
  const rx = Math.max(2, fx - margin), ry = Math.max(2, fy - margin);
  const rw = Math.min(gw - 2, fx + fw + margin) - rx, rh = Math.min(gh - 2, fy + fh + margin) - ry;
  const N = rw * rh;

  // Logo alpha + luminance on the region grid.
  const alpha = new Float32Array(N);
  const lumL = new Float32Array(N);
  let opaque = false;
  if (crop.src) {
    const c = document.createElement("canvas");
    c.width = rw;
    c.height = rh;
    const ctx = c.getContext("2d", { willReadFrequently: true })!;
    ctx.drawImage(crop.src, crop.sx, crop.sy, crop.sw, crop.sh, fx - rx, fy - ry, fw, fh);
    const data = ctx.getImageData(0, 0, rw, rh).data;
    let solid = 0, inRect = 0;
    for (let i = 0; i < N; i++) {
      const a = data[i * 4 + 3]! / 255;
      alpha[i] = a;
      lumL[i] = (0.2126 * data[i * 4]! + 0.7152 * data[i * 4 + 1]! + 0.0722 * data[i * 4 + 2]!) / 255;
      const x = i % rw, y = (i / rw) | 0;
      if (x >= fx - rx + 1 && x < fx - rx + fw - 1 && y >= fy - ry + 1 && y < fy - ry + fh - 1) {
        inRect++;
        if (a > 0.98) solid++;
      }
    }
    // A flat image with no transparency: separate the mark from its backdrop by luminance.
    if (inRect > 0 && solid / inRect > 0.96) {
      opaque = true;
      const corner = lumL[(fy - ry + 1) * rw + (fx - rx + 1)]!;
      for (let i = 0; i < N; i++) alpha[i] = alpha[i]! > 0.5 ? clamp01((Math.abs(lumL[i]! - corner) - 0.08) * 6) : 0;
    }
  } else {
    // No image at all: a soft round wash.
    const cx = fx - rx + fw / 2, cy = fy - ry + fh / 2;
    for (let i = 0; i < N; i++) {
      const x = i % rw, y = (i / rw) | 0;
      alpha[i] = Math.hypot(x - cx, y - cy) < ls * 0.42 ? 1 : 0;
      lumL[i] = 0.5;
    }
  }

  // Signed distance, normalized by the logo scale (negative inside).
  const dOut = edt((i) => alpha[i]! >= 0.5, rw, rh);
  const dIn = edt((i) => alpha[i]! < 0.5, rw, rh);
  const sdf = new Float32Array(N);
  let maxDepth = 1e-6, lumSum = 0, inside = 0;
  for (let i = 0; i < N; i++) {
    const s = alpha[i]! >= 0.5 ? -(dIn[i]! - 0.5) : dOut[i]! - 0.5;
    sdf[i] = s / ls;
    if (s < 0) {
      maxDepth = Math.max(maxDepth, -s / ls);
      lumSum += lumL[i]!;
      inside++;
    }
  }
  const lumMean = inside ? lumSum / inside : 0.5;

  // Noise fields in logo units, so the look scales with the mark.
  const nA = noise2("wbl-a"), nB = noise2("wbl-b"), nC = noise2("wbl-c"), nD = noise2("wbl-d"), nE = noise2("wbl-e");
  const lowN = new Float32Array(N), midN = new Float32Array(N), hiN = new Float32Array(N), frill = new Float32Array(N), mixF = new Float32Array(N);
  const bleed = new Float32Array(N), jit = new Float32Array(N), sheen = new Float32Array(N);
  const L = ls;
  for (let i = 0; i < N; i++) {
    const x = i % rw, y = (i / rw) | 0;
    const u = x / L, v = y / L;
    const lo = fbm(nA, u * 2.1, v * 2.1, 2);
    const mid = fbm(nB, u * 7.5, v * 7.5, 3);
    const hi = nC(x * 0.32, y * 0.32) * 0.7 + nC(x * 0.7 + 31, y * 0.7 - 7) * 0.3;
    lowN[i] = lo;
    midN[i] = mid;
    hiN[i] = hi;
    frill[i] = fbm(nC, u * 19 + 7, v * 19 - 3, 2);
    // Bleed potential: a few lobes where the wet paint escapes the edge, with fine tendrils.
    const b = Math.max(0, fbm(nD, u * 2.6 + 3, v * 2.6 - 5, 2) * 1.5 + 0.12);
    bleed[i] = Math.pow(b, 1.5) * 0.085;
    jit[i] = 0.004 + 0.006 * mid;
    // Pigment mix: darker logo parts take the primary, lighter the secondary, with wet-in-wet patches.
    const bias = (lumL[i]! - lumMean) * 3.2;
    mixF[i] = smooth((0.4 + bias + 0.62 * fbm(nE, u * 1.7 - 4, v * 1.7 + 2, 2) - 0.18) / 0.64);
    sheen[i] = (x / rw) * 0.62 + (y / rh) * 0.38 + 0.08 * lo;
  }

  // Pigment drops: spread-out seeds inside the mark (farthest point sampling).
  const r = rng(`wbl-seeds-${key}`);
  const insideIdx: number[] = [];
  for (let i = 0; i < N; i += 3) if (sdf[i]! < -0.004) insideIdx.push(i);
  if (!insideIdx.length) insideIdx.push(Math.floor(N / 2));
  const pick = (count: number, first: number): number[] => {
    const out = [first];
    const best = new Float32Array(insideIdx.length).fill(Infinity);
    while (out.length < count) {
      const last = out[out.length - 1]!;
      const lx = last % rw, ly = (last / rw) | 0;
      let far = -1, farD = -1;
      for (let j = 0; j < insideIdx.length; j++) {
        const p = insideIdx[j]!;
        const dd = Math.hypot((p % rw) - lx, ((p / rw) | 0) - ly);
        if (dd < best[j]!) best[j] = dd;
        // Prefer deep points a little, so drops land in the body of the mark.
        const score = best[j]! * (0.7 + 0.3 * clamp01(-sdf[p]! / maxDepth)) * (0.85 + 0.3 * r());
        if (score > farD) {
          farD = score;
          far = p;
        }
      }
      out.push(far);
    }
    return out;
  };
  const seeds = pick(T_DROPS.length, insideIdx[Math.floor(r() * insideIdx.length)]!);
  const raw = new Float32Array(N).fill(Infinity);
  let maxRaw = 1e-6;
  for (let i = 0; i < N; i++) {
    const x = i % rw, y = (i / rw) | 0;
    const wob = 1 + 0.38 * midN[i]! + 0.2 * lowN[i]!;
    for (let s = 0; s < seeds.length; s++) {
      const p = seeds[s]!;
      const dd = (Math.hypot(x - (p % rw), y - ((p / rw) | 0)) / L) * wob;
      if (dd < raw[i]!) raw[i] = dd;
    }
    if (sdf[i]! < 0.02 && raw[i]! > maxRaw) maxRaw = raw[i]!;
  }
  const tWater = new Float32Array(N), tArr = new Float32Array(N), tDry = new Float32Array(N);
  const speed = maxRaw / FLOOD;
  for (let i = 0; i < N; i++) {
    const x = i % rw, y = (i / rw) | 0;
    let best = Infinity;
    const wob = 1 + 0.38 * midN[i]! + 0.2 * lowN[i]!;
    for (let s = 0; s < seeds.length; s++) {
      const p = seeds[s]!;
      const dd = (Math.hypot(x - (p % rw), y - ((p / rw) | 0)) / L) * wob;
      best = Math.min(best, T_DROPS[s]! + dd / speed);
    }
    tArr[i] = best;
    tWater[i] = 1 + (raw[i]! / maxRaw) * 13;
    const depth = clamp01(-sdf[i]! / maxDepth);
    tDry[i] = DRY0 + DRY_SPAN * Math.sqrt(depth) + 9 * lowN[i]! + 5 * midN[i]!;
  }

  // Blooms (backruns) inside the mark.
  const bloomIdx = pick(BLOOMS.length + 1, seeds[seeds.length - 1]!).slice(1);
  const blooms: Bloom[] = bloomIdx.map((p, j) => ({
    x: p % rw,
    y: (p / rw) | 0,
    r: (0.08 + 0.17 * r() * r() + 0.04 * j) * Math.min(1, maxDepth * 4.5 + 0.35),
    t: BLOOMS[j]!,
  }));

  // Spatter: a few drops flicked around the mark.
  const dot = new Float32Array(N).fill(-1);
  const dotT = new Float32Array(N).fill(1e9);
  const ring: number[] = [];
  for (let i = 0; i < N; i += 7) if (sdf[i]! > 0.05 && sdf[i]! < 0.15) ring.push(i);
  const nDots = ring.length ? 13 : 0;
  for (let k2 = 0; k2 < nDots; k2++) {
    const p = ring[Math.floor(r() * ring.length)]!;
    const cx = p % rw, cy = (p / rw) | 0;
    const rad = (0.005 + 0.017 * r() * r()) * L;
    const t0 = 12 + r() * 26;
    const ext = Math.ceil(rad * 2.4);
    for (let y = Math.max(0, cy - ext); y < Math.min(rh, cy + ext); y++) {
      for (let x = Math.max(0, cx - ext); x < Math.min(rw, cx + ext); x++) {
        const i = y * rw + x;
        const wob = 1 + 0.12 * midN[i]!;
        const dlt = (rad - Math.hypot(x - cx, y - cy) * wob) / L;
        if (dlt > dot[i]!) {
          dot[i] = dlt;
          dotT[i] = t0;
        }
      }
    }
  }

  const f: Fields = { key, fx, fy, fw, fh, rx, ry, rw, rh, ls, opaque, crop, sdf, tWater, tArr, tDry, bleed, jit, lowN, midN, hiN, frill, mixF, sheen, dot, dotT, blooms };
  if (fieldCache.size > 6) fieldCache.delete(fieldCache.keys().next().value!);
  fieldCache.set(key, f);
  return f;
}

type Paper = { key: string; height: Float32Array; rgba: Uint8ClampedArray };
const paperCache = new Map<string, Paper>();

/** Cold-press sheet: tooth height (for granulation) and the lit paper color, baked once per size and color. */
function buildPaper(gw: number, gh: number, bg: RGB | null, dark: boolean): Paper {
  const key = `${gw}x${gh}-${bg ? bg.join(",") : "none"}-${dark ? 1 : 0}`;
  const hit = paperCache.get(key);
  if (hit) return hit;
  const N = gw * gh;
  const height = new Float32Array(N);
  const n1 = noise2("paper-1"), n2 = noise2("paper-2"), n3 = noise2("paper-3");
  for (let i = 0; i < N; i++) {
    const x = i % gw, y = (i / gw) | 0;
    const h = 0.5 * n1(x / 2.3, y / 2.3) + 0.28 * n1(x / 1.15 + 50, y / 1.15) + 0.4 * Math.abs(n2(x / 6.5, y / 6.5));
    height[i] = clamp01(0.5 + h * 0.7);
  }
  const rgba = new Uint8ClampedArray(N * 4);
  if (bg) {
    const amp = dark ? 22 : 30;
    for (let i = 0; i < N; i++) {
      const x = i % gw, y = (i / gw) | 0;
      const hl = x > 0 ? height[i - 1]! : height[i]!, hr = x < gw - 1 ? height[i + 1]! : height[i]!;
      const hu = y > 0 ? height[i - gw]! : height[i]!, hd = y < gh - 1 ? height[i + gw]! : height[i]!;
      const shade = (hl - hr) * 0.5 + (hu - hd) * 0.5;
      const mottle = fbm(n3, x / 70, y / 70, 2);
      const vx = x / gw - 0.5, vy = y / gh - 0.5;
      const vig = (vx * vx + vy * vy) * (dark ? 0.35 : 0.1);
      const add = shade * amp + mottle * (dark ? 3 : 5);
      for (let c = 0; c < 3; c++) {
        const v = bg[c]! * (1 - vig) + add;
        rgba[i * 4 + c] = v;
      }
      rgba[i * 4 + 3] = 255;
    }
  }
  const p: Paper = { key, height, rgba };
  if (paperCache.size > 4) paperCache.delete(paperCache.keys().next().value!);
  paperCache.set(key, p);
  return p;
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

/**
 * Watercolor Logo: clear water lays the logo's shape on cold-press paper, drops of the two
 * brand pigments hit it and flood the mark wet-in-wet, backruns push the paint into
 * cauliflower blooms and the edges feather out. Then a drying front moves from the edges
 * inward: rims darken, pigment granulates into the paper tooth, and a faint clean glaze of
 * the logo settles on top with the caption.
 */
export const Component: React.FC<Props> = ({ logo, caption, primary, secondary, color, background, granulation, bleed, paper, fontFamily }) => {
  const frame = useCurrentFrame();
  const { width: w, height: h, aspect, portrait } = useLayout();
  const S = Math.min(w, h);
  const transparent = background === "transparent";
  const ink = rgbOf(color, [30, 27, 24]);
  const bgRGB = transparent ? null : rgbOf(background, [244, 239, 230]);
  const dark = bgRGB ? lum(bgRGB) < 0.4 : lum(ink) > 0.4;
  const hasCaption = caption.trim().length > 0;
  const font = brandFontStack(fontFamily);

  const gw = Math.max(16, Math.round(w * SCALE));
  const gh = Math.max(16, Math.round(h * SCALE));

  const [asset, setAsset] = useState<{ img: HTMLImageElement | null } | null>(null);
  const [handle] = useState(() => delayRender("watercolor-bleed-logo logo and fonts", { timeoutInMilliseconds: 60000 }));
  useEffect(() => {
    let alive = true;
    (async () => {
      await waitForBrandFonts();
      let img: HTMLImageElement | null = null;
      try {
        img = await loadImage(logo.trim() || SAMPLE_LOGO);
      } catch {
        img = null;
      }
      if (alive) setAsset({ img });
    })()
      .catch(() => {
        if (alive) setAsset({ img: null });
      })
      .finally(() => continueRender(handle));
    return () => {
      alive = false;
    };
  }, [logo, handle]);

  const box = logoBox(aspect, hasCaption);
  const fields = useMemo(() => {
    if (!asset) return null;
    return buildFields(asset.img, gw, gh, box, `${hashString(logo)}-${aspect}-${gw}x${gh}-${hasCaption ? 1 : 0}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asset, logo, aspect, gw, gh, hasCaption]);
  const sheet = useMemo(() => buildPaper(gw, gh, bgRGB, dark), [gw, gh, background, dark]); // eslint-disable-line react-hooks/exhaustive-deps

  // Pigment constants.
  const P0 = rgbOf(primary, [228, 87, 46]), Q0 = rgbOf(secondary, [243, 167, 18]);
  // Keep pigments visible on their paper: pale pigments deepen toward the ink on light paper,
  // dim ones lift toward the ink on dark paper.
  const guard = (c: RGB): RGB => (dark ? (lum(c) < 0.16 ? mix(c, ink, 0.4) : c) : lum(c) > 0.72 ? mix(c, ink, 0.3) : c);
  const P = guard(P0), Q = guard(Q0);
  const glazeColor = dark ? mix(P, HI, 0.25) : mix(P, ink, 0.4);

  const ref = useRef<HTMLCanvasElement>(null);
  const bufRef = useRef<ImageData | null>(null);

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx || !fields) return;
    if (!bufRef.current || bufRef.current.width !== gw || bufRef.current.height !== gh) bufRef.current = ctx.createImageData(gw, gh);
    const img = bufRef.current;
    const out = img.data;
    if (transparent) out.fill(0);
    else out.set(sheet.rgba);

    const f = frame;
    const { rx, ry, rw, rh, sdf, tWater, tArr, tDry, jit, lowN, midN, hiN, frill, mixF, sheen, dot, dotT, blooms, ls } = fields;
    const bleedAmt = 0.25 + 1.1 * bleed;
    const B = easeOut(ramp(f, BLEED, [0, 1])) * bleedAmt;
    const gran = 0.15 + 1.1 * granulation;
    const tooth = sheet.height;
    // Log transmittance of each pigment (subtractive mixing on light paper).
    const lnP = P.map((c) => Math.log(Math.max(0.035, c / 255))) as RGB;
    const lnQ = Q.map((c) => Math.log(Math.max(0.035, c / 255))) as RGB;
    const sweep = -0.25 + f / 62;

    // Active blooms this frame.
    const act: { x: number; y: number; R: number; prog: number }[] = [];
    for (const b of blooms) {
      if (f <= b.t) continue;
      const prog = clamp01((f - b.t) / BLOOM_DUR);
      const R = b.r * (1 - Math.pow(1 - prog, 3)) * ls;
      if (R > 0.5) act.push({ x: b.x, y: b.y, R, prog });
    }

    for (let y = 0; y < rh; y++) {
      for (let x = 0; x < rw; x++) {
        const i = y * rw + x;
        const d = sdf[i]!;
        const bp = fields.bleed[i]! * bleedAmt;
        const edge = jit[i]! + fields.bleed[i]! * B * (1 + 0.9 * midN[i]!);
        const delta = edge - d;
        let D = 0;
        let water = 0;
        let dr = 1;
        let rimLift = 0;
        if (delta > -0.05) {
          const dryT = (f - tDry[i]!) / DRY_LEN;
          dr = smooth(dryT);
          if (f > tWater[i]! && d < jit[i]! + 0.003) water = smooth((f - tWater[i]!) / 6) * smooth((jit[i]! + 0.003 - d) / 0.006);
          const ta = tArr[i]!;
          if (f > ta) {
            const feather = 0.003 + bp * 0.42 * (1 - 0.55 * dr);
            const cov = smooth((delta + feather) / (2 * feather));
            if (cov > 0) {
              const age = f - ta;
              const arrive = 1 - Math.exp(-age / 3.5);
              let dens = (0.6 + 0.2 * lowN[i]! + 0.06 * hiN[i]! + 0.14 * (y / rh)) * arrive * (1 + 0.85 * Math.exp(-age / 7));
              // Blooms: pigment pushed out of the center to a frilly ridge.
              for (let k = 0; k < act.length; k++) {
                const a = act[k]!;
                const dx = x - a.x, dy = y - a.y;
                const dist2 = dx * dx + dy * dy;
                const lim = a.R * 1.5;
                if (dist2 > lim * lim) continue;
                const rr = Math.sqrt(dist2) * (1 + 0.42 * midN[i]! + 0.16 * frill[i]!);
                const t = rr / a.R;
                if (t < 1) dens *= 0.52 + 0.48 * t * t * t;
                const ridge = (rr - a.R) / (0.016 * ls);
                dens += 0.5 * Math.exp(-ridge * ridge) * (0.5 + 0.5 * a.prog);
              }
              // Drying rim: wet-on-dry edges darken, feathered bleeds stay soft.
              const crisp = 1 - clamp01(bp / 0.05);
              const rim = dr * (0.78 + 0.35 * lowN[i]!) * crisp * Math.exp(-Math.max(0, delta) / 0.0115);
              dens += rim;
              rimLift = rim;
              dens *= 1 - 0.17 * dr;
              // Granulation: pigment settles in the paper valleys and clumps.
              const g = (0.5 - tooth[(ry + y) * gw + (rx + x)]!) * 1.3 + 0.5 * hiN[i]!;
              dens *= Math.max(0.2, 1 + gran * dr * g);
              D = Math.max(0, dens) * cov;
            }
          }
        }
        // Spatter drops.
        const dd = dot[i]!;
        if (dd > -0.004 && f > dotT[i]!) {
          const age = f - dotT[i]!;
          const cov = smooth((dd + 0.002) / 0.004) * (1 - Math.exp(-age / 2));
          const ddr = smooth((age - 22) / 14);
          let dens = (0.62 + 0.2 * lowN[i]!) + ddr * 0.8 * Math.exp(-Math.max(0, dd) / 0.006);
          const g = (0.5 - tooth[(ry + y) * gw + (rx + x)]!) * 1.3 + 0.5 * hiN[i]!;
          dens *= Math.max(0.2, 1 + gran * ddr * g) * (1 - 0.15 * ddr);
          if (dens * cov > D) {
            D = dens * cov;
            dr = Math.min(dr, ddr);
          }
        }
        if (D <= 0.002 && water <= 0.002) continue;

        const o = ((ry + y) * gw + (rx + x)) * 4;
        const m = mixF[i]!;
        const wet = water * (1 - dr);
        const sh = sheen[i]! - sweep;
        const gloss = wet * Math.exp(-(sh * sh) / 0.012) * (0.55 + 0.45 * lowN[i]!);
        if (!transparent && !dark) {
          const kD = 1.3 * D;
          const dim = 1 - 0.035 * wet;
          for (let c = 0; c < 3; c++) {
            const lt = lnP[c]! + (lnQ[c]! - lnP[c]!) * m;
            out[o + c] = out[o + c]! * Math.exp(kD * lt) * dim + gloss * 70;
          }
        } else if (!transparent) {
          const a = 1 - Math.exp(-1.8 * D);
          const lift = 1 + 0.22 * rimLift;
          for (let c = 0; c < 3; c++) {
            const pc = (P[c]! + (Q[c]! - P[c]!) * m) * lift;
            const base = out[o + c]! * (1 + 0.1 * wet);
            out[o + c] = base + (pc - base) * a + gloss * 60;
          }
        } else {
          // Transparent: paint only, with its own alpha.
          const a = clamp01(1 - Math.exp(-(dark ? 1.5 : 2.2) * D) + gloss * 0.25 + wet * 0.05);
          for (let c = 0; c < 3; c++) {
            if (dark) out[o + c] = (P[c]! + (Q[c]! - P[c]!) * m) * (1 + 0.22 * rimLift) + gloss * 60;
            else out[o + c] = 255 * Math.exp(Math.max(1, 1.3 * D) * (lnP[c]! + (lnQ[c]! - lnP[c]!) * m)) + gloss * 60;
          }
          out[o + 3] = a * 255;
        }
      }
    }
    ctx.putImageData(img, 0, 0);
  }, [frame, fields, sheet, gw, gh, transparent, dark, bleed, granulation, P[0], P[1], P[2], Q[0], Q[1], Q[2]]); // eslint-disable-line react-hooks/exhaustive-deps

  // ---------- crisp glaze: the clean logo, full res, tinted with a deep pigment ----------
  const glazeRef = useRef<HTMLCanvasElement>(null);
  const cell = 1 / SCALE;
  const gx = fields ? fields.fx * cell : 0, gy = fields ? fields.fy * cell : 0;
  const gW = fields ? Math.max(2, Math.round(fields.fw * cell)) : 2, gH = fields ? Math.max(2, Math.round(fields.fh * cell)) : 2;
  const glazeCss = css(glazeColor);
  useLayoutEffect(() => {
    const ctx = glazeRef.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, gW, gH);
    if (!fields?.crop.src || fields.opaque) return;
    const c = fields.crop;
    ctx.drawImage(c.src!, c.sx, c.sy, c.sw, c.sh, 0, 0, gW, gH);
    ctx.globalCompositeOperation = "source-in";
    ctx.fillStyle = glazeCss;
    ctx.fillRect(0, 0, gW, gH);
    ctx.globalCompositeOperation = "source-over";
  }, [asset, fields, gW, gH, glazeCss, frame]);
  const glazeOn = smooth(ramp(frame, GLAZE, [0, 1]));

  // ---------- caption ----------
  const capW = w * (portrait ? 0.86 : aspect === "1:1" ? 0.8 : 0.62);
  const capSize = hasCaption
    ? Math.max(
        h * (portrait ? 0.031 : 0.021),
        fitFontSize({ chars: caption.length, boxW: capW, boxH: h * (portrait ? 0.12 : 0.1), lines: portrait ? 2 : 1, charEm: 0.48, lineHeight: 1.2, max: aspect === "16:9" ? h * 0.056 : aspect === "1:1" ? h * 0.05 : h * 0.042 }),
      )
    : 0;
  const capTop = fields ? (fields.fy + fields.fh) * cell + h * (portrait ? 0.045 : 0.05) : (box.cy + box.bh / 2) * h;
  const words = caption.split(/\s+/).filter(Boolean);
  let ci = 0;

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <canvas ref={ref} width={gw} height={gh} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      {paper && !transparent ? (
        <AbsoluteFill style={{ backgroundImage: TOOTH, backgroundSize: `${Math.round(S * 0.3)}px`, opacity: dark ? 0.1 : 0.16, mixBlendMode: dark ? "soft-light" : "multiply", pointerEvents: "none" }} />
      ) : null}
      <div
        data-21st-slot="logo"
        style={{ position: "absolute", left: (box.cx - box.bw / 2) * w, top: (box.cy - box.bh / 2) * h, width: box.bw * w, height: box.bh * h, pointerEvents: "none" }}
      >
        <canvas
          ref={glazeRef}
          width={gW}
          height={gH}
          style={{
            position: "absolute",
            left: gx - (box.cx - box.bw / 2) * w,
            top: gy - (box.cy - box.bh / 2) * h,
            width: gW,
            height: gH,
            opacity: 0.2 * glazeOn,
            mixBlendMode: transparent ? "normal" : dark ? "screen" : "multiply",
            display: "block",
          }}
        />
      </div>
      {hasCaption && fields ? (
        <div
          data-21st-slot="caption"
          style={{
            position: "absolute",
            left: (w - capW) / 2,
            width: capW,
            top: capTop,
            textAlign: "center",
            fontFamily: font,
            fontWeight: 400,
            fontSize: capSize,
            lineHeight: 1.2,
            letterSpacing: "0.01em",
            color,
            whiteSpace: "normal",
            overflowWrap: "anywhere",
          }}
        >
          {words.map((word, wi) => (
            <React.Fragment key={wi}>
              {wi > 0 ? " " : null}
              <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                {Array.from(word).map((ch, k) => {
                  const idx = ci++;
                  // Letters soak into the paper one after another.
                  const dl = Math.min(idx * 1.1, 16);
                  const p = easeOut(ramp(frame, [CAPTION0 + dl, CAPTION0 + 14 + dl], [0, 1]));
                  return (
                    <span
                      key={k}
                      style={{
                        display: "inline-block",
                        opacity: p,
                        filter: p < 1 ? `blur(${((1 - p) * S * 0.006).toFixed(2)}px)` : undefined,
                        transform: p < 1 ? `scale(${(1 + (1 - p) * 0.06).toFixed(4)})` : undefined,
                      }}
                    >
                      {ch}
                    </span>
                  );
                })}
              </span>
            </React.Fragment>
          ))}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
