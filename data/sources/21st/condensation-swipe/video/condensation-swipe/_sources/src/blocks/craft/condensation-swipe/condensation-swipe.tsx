// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, Img, continueRender, delayRender, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, easeOut, fitFontSize, luminance, useLayout, withAlpha } from "../../../kit/index";
import { rng, simplex3 } from "../_lib/noise";
import { SAMPLE_SCREENSHOT } from "../_lib/samples";
import type { schema } from "./condensation-swipe.schema";

type Props = z.infer<typeof schema>;
type Ctx = CanvasRenderingContext2D;
type Rect = { x: number; y: number; w: number; h: number };
type RGB = [number, number, number];

const TAU = Math.PI * 2;
/** Pure white / black for glints and shadows only (alpha applied with withAlpha). */
const hexOf = (v: number) => "#" + [v, v, v].map((c) => c.toString(16).padStart(2, "0")).join("");
const WHITE = hexOf(255);
const BLACK = hexOf(0);

// Timeline (frames at 30 fps). Everything is still from SETTLED on.
const SW0 = 56;
const SW1 = 84;
const ON_LEN = 16;
const EVAP0 = 106;
const EVAP_SPAN = 32;
const EVAP_LEN = 22;
const DRIP_END = 164;
const GLINT: [number, number] = [126, 166];

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (a: number, b: number, x: number) => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const mixRgb = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

function parseRgb(c: string): RGB | null {
  let hex = /^#([0-9a-f]{3,8})$/i.exec(c)?.[1];
  if (hex) {
    if (hex.length < 6) hex = hex.slice(0, 3).split("").map((ch) => ch + ch).join("");
    const n = parseInt(hex.slice(0, 6), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  const m = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(c);
  return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : null;
}

/** One hand swipe: sine in-out, 0..1 along the path. */
const swipeProg = (f: number) => 0.5 - 0.5 * Math.cos(Math.PI * clamp01((f - SW0) / (SW1 - SW0)));
/** Frame at which the swipe reaches path parameter s. */
const passFrame = (s: number) => SW0 + ((SW1 - SW0) * Math.acos(1 - 2 * clamp01(s))) / Math.PI;

/** Stick-slip run of a drip: it surges, catches, surges again and stops (monotonic, zero speed at each catch). */
const stickSlip = (v: number, n: number) => v - Math.sin(TAU * n * v) / (TAU * n);

function newCanvas(w: number, h: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = Math.max(1, Math.round(w));
  c.height = Math.max(1, Math.round(h));
  return c;
}
const ctx2d = (c: HTMLCanvasElement) => c.getContext("2d", { willReadFrequently: true })!;

// ---------------------------------------------------------------- geometry

type Geo = { u: number; card: Rect; radius: number; title: Rect; titleLines: number; titleMax: number; titleMin: number };

function buildGeo(W: number, H: number, aspect: string, imgAspect: number): Geo {
  const u = Math.min(W, H) / 100;
  let box: { w: number; h: number; cx: number; cy: number };
  let title: Rect;
  let titleLines = 1, titleMax = 0.08 * H, maxA = 2.4;
  const titleMin = (aspect === "9:16" ? 0.032 : 0.02) * H;
  if (aspect === "9:16") {
    box = { w: 0.86 * W, h: 0.4 * H, cx: 0.5 * W, cy: 0.52 * H };
    title = { x: 0.08 * W, y: 0.11 * H, w: 0.84 * W, h: 0.18 * H };
    titleLines = 2;
    titleMax = 0.062 * H;
    maxA = 1.3;
  } else if (aspect === "1:1") {
    box = { w: 0.78 * W, h: 0.6 * H, cx: 0.5 * W, cy: 0.6 * H };
    title = { x: 0.08 * W, y: 0.07 * H, w: 0.84 * W, h: 0.15 * H };
    titleMax = 0.074 * H;
  } else {
    box = { w: 0.64 * W, h: 0.64 * H, cx: 0.5 * W, cy: 0.6 * H };
    title = { x: 0.12 * W, y: 0.065 * H, w: 0.76 * W, h: 0.16 * H };
  }
  const a = Math.max(0.6, Math.min(maxA, imgAspect));
  let w = box.w, h = w / a;
  if (h > box.h) { h = box.h; w = h * a; }
  const card: Rect = { x: Math.round(box.cx - w / 2), y: Math.round(box.cy - h / 2), w: Math.round(w), h: Math.round(h) };
  return { u, card, radius: Math.round(1.4 * u), title, titleLines, titleMax, titleMin };
}

/** The swipe: a quadratic arc across the card, sampled densely, with a living half width. */
type Path = { n: number; px: Float32Array; py: Float32Array; nx: Float32Array; ny: Float32Array; hw: Float32Array; len: Float32Array };

function buildPath(W: number, aspect: string, card: Rect, seed: number): Path {
  // Enters and leaves the frame: the hand sweeps clean across the pane.
  const ax = -0.06 * W, ay = card.y + 0.74 * card.h;
  const mx = W * 0.5, my = card.y + 0.12 * card.h;
  const bx = 1.06 * W, by = card.y + 0.44 * card.h;
  const hw0 = (aspect === "9:16" ? 0.25 : 0.24) * card.h;
  const n = 257;
  const px = new Float32Array(n), py = new Float32Array(n), nx = new Float32Array(n), ny = new Float32Array(n), hw = new Float32Array(n), len = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const s = i / (n - 1), t = 1 - s;
    px[i] = t * t * ax + 2 * t * s * mx + s * s * bx;
    py[i] = t * t * ay + 2 * t * s * my + s * s * by;
    const dx = 2 * t * (mx - ax) + 2 * s * (bx - mx), dy = 2 * t * (my - ay) + 2 * s * (by - my);
    const l = Math.hypot(dx, dy) || 1;
    nx[i] = -dy / l;
    ny[i] = dx / l;
    // A palm presses harder mid-swipe; the edge of the streak is never ruler-straight.
    hw[i] = hw0 * (0.86 + 0.14 * Math.sin(Math.PI * s)) * (1 + 0.06 * Math.sin(s * 17.3 + seed * 0.37) + 0.035 * Math.sin(s * 43.1 + seed * 1.3));
    len[i] = i === 0 ? 0 : len[i - 1]! + Math.hypot(px[i]! - px[i - 1]!, py[i]! - py[i - 1]!);
  }
  return { n, px, py, nx, ny, hw, len };
}

// ---------------------------------------------------------------- droplets

type Look = { dark: boolean; sh: string; shA: number };

/**
 * One water bead on the glass: a tiny fisheye lens. Inside it the scene behind the pane shows
 * shrunk and upside down; total internal reflection darkens the rim (heavier on top), light
 * focuses into a bright caustic at the bottom and onto the mist just below, and a sharp
 * specular sits upper left.
 */
function drawDrop(c: Ctx, S: HTMLCanvasElement, wx: number, wy: number, lx: number, ly: number, r: number, stretch: number, L: Look) {
  const rx = r, ry = r * (1.05 + stretch);
  const cy = ly + (ry - r) * 0.5;
  if (r > 1.6) {
    const g = c.createRadialGradient(lx, cy + ry * 0.98, 0, lx, cy + ry * 0.98, r * 0.85);
    g.addColorStop(0, withAlpha(WHITE, L.dark ? 0.16 : 0.32));
    g.addColorStop(1, withAlpha(WHITE, 0));
    c.fillStyle = g;
    c.fillRect(lx - r, cy + ry * 0.1, 2 * r, ry * 1.8);
  }
  c.beginPath();
  c.ellipse(lx, cy + r * 0.07, rx * 1.03, ry * 1.03, 0, 0, TAU);
  c.fillStyle = withAlpha(L.sh, L.shA * 0.22);
  c.fill();

  c.save();
  c.beginPath();
  c.ellipse(lx, cy, rx, ry, 0, 0, TAU);
  c.clip();
  // A drop is a wide-angle lens: it shows a big patch of the scene, shrunk and upside down.
  const R = r * 5.5;
  c.save();
  c.translate(lx, cy);
  c.scale(-1, -1);
  // Water is a strong lens: the inverted view comes out punchier than the scene around it.
  c.filter = "saturate(1.45) contrast(1.22)";
  c.drawImage(S, wx - R, wy - R, 2 * R, 2 * R, -rx * 1.06, -ry * 1.06, rx * 2.12, ry * 2.12);
  c.filter = "none";
  c.restore();
  // Lit from above: the inverted view puts the dark ground in the top of the drop, the light at the bottom.
  const v = c.createLinearGradient(0, cy - ry, 0, cy + ry);
  v.addColorStop(0, withAlpha(L.sh, L.shA * 0.55));
  v.addColorStop(0.45, withAlpha(L.sh, 0));
  v.addColorStop(0.7, withAlpha(WHITE, L.dark ? 0.04 : 0.1));
  v.addColorStop(1, withAlpha(WHITE, L.dark ? 0.22 : 0.4));
  c.fillStyle = v;
  c.fillRect(lx - rx, cy - ry, 2 * rx, 2 * ry);
  const e = c.createRadialGradient(lx - r * 0.08, cy + ry * 0.14, r * 0.3, lx, cy, r * 1.02);
  e.addColorStop(0, withAlpha(L.sh, 0));
  e.addColorStop(0.52, withAlpha(L.sh, L.shA * 0.1));
  e.addColorStop(0.78, withAlpha(L.sh, L.shA * 0.42));
  e.addColorStop(0.92, withAlpha(L.sh, L.shA * 0.82));
  e.addColorStop(1, withAlpha(L.sh, L.shA));
  c.fillStyle = e;
  c.fillRect(lx - rx, cy - ry, 2 * rx, 2 * ry);
  const k = c.createRadialGradient(lx + r * 0.06, cy + ry * 0.64, 0, lx + r * 0.06, cy + ry * 0.64, r * 0.66);
  k.addColorStop(0, withAlpha(WHITE, L.dark ? 0.55 : 0.75));
  k.addColorStop(0.45, withAlpha(WHITE, L.dark ? 0.16 : 0.26));
  k.addColorStop(1, withAlpha(WHITE, 0));
  c.fillStyle = k;
  c.fillRect(lx - rx, cy - ry, 2 * rx, 2 * ry);
  c.restore();

  c.beginPath();
  c.ellipse(lx, cy, rx, ry, 0, 0, TAU);
  c.lineWidth = Math.max(0.5, r * 0.06);
  c.strokeStyle = withAlpha(L.sh, L.shA * 0.32);
  c.stroke();
  c.beginPath();
  c.ellipse(lx, cy, rx * 0.93, ry * 0.93, 0, Math.PI * 0.18, Math.PI * 0.82);
  c.lineWidth = Math.max(0.5, r * 0.07);
  c.strokeStyle = withAlpha(WHITE, L.dark ? 0.3 : 0.5);
  c.stroke();

  c.save();
  c.translate(lx - r * 0.34, cy - ry * 0.44);
  c.rotate(-0.62);
  c.scale(1, 0.55);
  const sr = Math.max(0.8, r * 0.3);
  const sg = c.createRadialGradient(0, 0, 0, 0, 0, sr);
  sg.addColorStop(0, withAlpha(WHITE, 0.95));
  sg.addColorStop(0.45, withAlpha(WHITE, 0.6));
  sg.addColorStop(1, withAlpha(WHITE, 0));
  c.fillStyle = sg;
  c.fillRect(-sr, -sr, 2 * sr, 2 * sr);
  c.restore();
  if (r > 3) {
    c.beginPath();
    c.arc(lx - r * 0.4, cy - ry * 0.47, Math.max(0.6, r * 0.075), 0, TAU);
    c.fillStyle = withAlpha(WHITE, 1);
    c.fill();
  }
}

type Sprite = { sx: number; sy: number; sw: number; sh: number; ox: number; oy: number };
type Drop = { x: number; y: number; r: number; born: number; grow: number; wipe: number; evap: number; small: boolean; pop: boolean; sp: Sprite };
type Bead = { x: number; y: number; r: number; pass: number; sp: Sprite };
type Drip = {
  x0: number; y0: number; r0: number; pf: number; start: number; dur: number; L: number; n: number; ph1: number; ph2: number;
  beads: Bead[];
};

/** Packs sprites for every precomputed bead into one atlas, each lensing the scene at its own spot. */
function buildAtlas(S: HTMLCanvasElement, items: { x: number; y: number; r: number; sp?: Sprite }[], look: Look): HTMLCanvasElement {
  const AW = 2048;
  let x = 0, y = 0, rowH = 0;
  for (const it of items) {
    const sw = Math.ceil(it.r * 2.3 + 4), sh = Math.ceil(it.r * 3.3 + 4);
    if (x + sw > AW) { x = 0; y += rowH; rowH = 0; }
    it.sp = { sx: x, sy: y, sw, sh, ox: sw / 2, oy: Math.ceil(it.r * 1.15 + 2) };
    x += sw;
    rowH = Math.max(rowH, sh);
  }
  const A = newCanvas(AW, Math.max(1, y + rowH));
  const a = ctx2d(A);
  for (const it of items) {
    const sp = it.sp!;
    drawDrop(a, S, it.x, it.y, sp.sx + sp.ox, sp.sy + sp.oy, it.r, 0, look);
  }
  return A;
}

// ---------------------------------------------------------------- static field (built once per props)

type Field = {
  key: string;
  S: HTMLCanvasElement;
  F: HTMLCanvasElement;
  img: ImageData;
  FC: Uint8ClampedArray;
  T0: Float32Array; T1: Float32Array; AM: Float32Array; RES: Float32Array; SP: Float32Array; CLR: Float32Array;
  RIDX: Int32Array; RVAL: Float32Array; hi: RGB;
  hw2: number; hh2: number;
  path: Path;
  drops: Drop[]; rims: Bead[]; drips: Drip[];
  atlas: HTMLCanvasElement;
};

type Env = {
  W: number; H: number; geo: Geo; aspect: string; seed: number; dropAmt: number; imgAspect: number;
  background: string; color: string; primary: string; secondary: string; transparent: boolean; dark: boolean; look: Look;
};

function paintScene(S: HTMLCanvasElement, img: HTMLImageElement | null, env: Env) {
  const { W, H, geo, background, color, primary, secondary, transparent, dark } = env;
  const { card, u } = geo;
  const s = ctx2d(S);
  s.setTransform(1, 0, 0, 1, 0, 0);
  s.clearRect(0, 0, W, H);
  if (!transparent) {
    s.fillStyle = background;
    s.fillRect(0, 0, W, H);
  }
  // Two brand lights behind the glass. They glow through the fog and fill every droplet.
  const big = Math.max(card.w, card.h);
  const glow = (gx: number, gy: number, gr: number, col: string, a: number) => {
    const g = s.createRadialGradient(gx, gy, 0, gx, gy, gr);
    g.addColorStop(0, withAlpha(col, a));
    g.addColorStop(0.4, withAlpha(col, a * 0.6));
    g.addColorStop(0.75, withAlpha(col, a * 0.18));
    g.addColorStop(1, withAlpha(col, 0));
    s.fillStyle = g;
    s.fillRect(0, 0, W, H);
  };
  const ga = dark ? 0.62 : 0.5;
  glow(card.x + card.w * 0.12, card.y + card.h * 0.05, big * 0.85, primary, ga);
  glow(card.x + card.w * 0.92, card.y + card.h * 1.0, big * 0.8, secondary, ga * 0.95);
  glow(card.x + card.w * 0.5, card.y - card.h * 0.3, big * 0.55, primary, ga * 0.4);

  if (img && img.complete) {
    // Rasterize at a known size first (SVGs without width/height report no usable natural size),
    // then cover-fit top aligned from the raster.
    const RW = 1600, RH = Math.max(1, Math.round(RW / env.imgAspect));
    const raster = newCanvas(RW, RH);
    ctx2d(raster).drawImage(img, 0, 0, RW, RH);
    const ca = card.w / card.h;
    let sx = 0, sw = RW, sh = RH;
    if (RW / RH > ca) { sw = RH * ca; sx = (RW - sw) / 2; } else { sh = RW / ca; }
    s.save();
    s.shadowColor = dark ? withAlpha(BLACK, 0.6) : withAlpha(color, 0.24);
    s.shadowBlur = 6 * u;
    s.shadowOffsetY = 2.2 * u;
    s.beginPath();
    s.roundRect(card.x, card.y, card.w, card.h, geo.radius);
    s.fillStyle = dark ? (transparent ? BLACK : background) : WHITE;
    s.fill();
    s.shadowColor = withAlpha(BLACK, 0);
    s.clip();
    s.drawImage(raster, sx, 0, sw, sh, card.x, card.y, card.w, card.h);
    s.restore();
    s.beginPath();
    s.roundRect(card.x + 0.5, card.y + 0.5, card.w - 1, card.h - 1, geo.radius);
    s.strokeStyle = dark ? withAlpha(WHITE, 0.16) : withAlpha(color, 0.14);
    s.lineWidth = 1;
    s.stroke();
  }
}

function buildField(key: string, img: HTMLImageElement | null, env: Env): Field {
  const { W, H, geo, aspect, seed, dropAmt, background, color, primary, transparent, dark, look } = env;
  const { u, card } = geo;
  const S = newCanvas(W, H);
  paintScene(S, img, env);

  const hw2 = Math.ceil(W / 2), hh2 = Math.ceil(H / 2), N = hw2 * hh2;
  // Fog color: the scene behind, heavily blurred (half res) and veiled by mist from the brand background.
  const B = newCanvas(hw2, hh2);
  const b = ctx2d(B);
  b.filter = `blur(${(2.3 * u).toFixed(2)}px)`;
  b.drawImage(S, 0, 0, hw2, hh2);
  b.filter = "none";
  let bd: Uint8ClampedArray | null = null;
  try { bd = b.getImageData(0, 0, hw2, hh2).data; } catch { bd = null; }

  const textRgb = parseRgb(color) ?? (dark ? [240, 240, 240] : [24, 24, 24]);
  const bgRgb: RGB = transparent ? (dark ? mixRgb(textRgb, [0, 0, 0], 0.86) : mixRgb(textRgb, [255, 255, 255], 0.92)) : (parseRgb(background) ?? [128, 128, 128]);
  const priRgb = parseRgb(primary) ?? bgRgb;
  let mist = dark ? mixRgb(bgRgb, [255, 255, 255], 0.15) : mixRgb(bgRgb, [255, 255, 255], 0.28);
  mist = mixRgb(mist, priRgb, dark ? 0.12 : 0.09);
  const veil = dark ? 0.54 : 0.64;
  const hi: RGB = dark ? mixRgb(mist, [255, 255, 255], 0.55) : [255, 255, 255];

  // Coarse noise fields (every 8 half-res px), sampled bilinearly.
  const G = 8, gw = Math.ceil(hw2 / G) + 2, gh = Math.ceil(hh2 / G) + 2;
  const nz = simplex3(`cs-fog-${seed}`);
  const sc = 1 / (14 * u);
  const grid = (z: number, f: number, oct: number) => {
    const a = new Float32Array(gw * gh);
    for (let j = 0; j < gh; j++) for (let i = 0; i < gw; i++) {
      const X = i * G * 2 * sc * f, Y = j * G * 2 * sc * f;
      let v = 0, amp = 0.5, fr = 1;
      for (let o = 0; o < oct; o++) { v += amp * nz(X * fr, Y * fr, z + o * 7.1); fr *= 2.03; amp *= 0.5; }
      a[j * gw + i] = v * 1.6;
    }
    return a;
  };
  const gOn = grid(1.3, 1, 3), gEv = grid(9.7, 0.8, 2), gDen = grid(4.1, 1.6, 3), gDx = grid(17.2, 2.2, 2), gDy = grid(23.9, 2.2, 2);
  const samp = (a: Float32Array, x: number, y: number) => {
    const fx = x / G, fy = y / G, ix = fx | 0, iy = fy | 0, tx = fx - ix, ty = fy - iy, k = iy * gw + ix;
    const a0 = a[k]! + (a[k + 1]! - a[k]!) * tx, a1 = a[k + gw]! + (a[k + gw + 1]! - a[k + gw]!) * tx;
    return a0 + (a1 - a0) * ty;
  };

  const T0 = new Float32Array(N), T1 = new Float32Array(N), AM = new Float32Array(N), RES = new Float32Array(N);
  const FC = new Uint8ClampedArray(N * 3);
  const img2 = new ImageData(hw2, hh2);
  const D = img2.data;
  const ccx = card.x + card.w / 2, ccy = card.y + card.h / 2;
  const cs = Math.max(2.5, 0.36 * u); // micro-bead cell (half-res px)
  const disp = 0.55 * u;
  const hr = rng(`cs-bead-${seed}`);
  const hashTab = new Float32Array(4096);
  for (let i = 0; i < 4096; i++) hashTab[i] = hr();
  for (let y = 0; y < hh2; y++) {
    const Y = (y + 0.5) * 2;
    for (let x = 0; x < hw2; x++) {
      const i = y * hw2 + x, X = (x + 0.5) * 2;
      // Onset: mist creeps in from the frame edges, in blotches.
      const edge = Math.min(1, (Math.min(X / W, 1 - X / W, Y / H, 1 - Y / H) * 2) / 0.8);
      T0[i] = Math.min(36, -16 + 38 * Math.pow(edge, 0.8) + 13 * samp(gOn, x, y));
      // Evaporation spreads from the screenshot outward; the far corners keep a breath of fog.
      const ed = Math.hypot((X - ccx) / (W * 0.62), (Y - ccy) / (H * 0.62));
      T1[i] = EVAP0 + EVAP_SPAN * Math.min(1, ed) + 7 * samp(gEv, x, y);
      const ec = Math.hypot((X - W / 2) / (W / 2), (Y - H / 2) / (H / 2));
      RES[i] = 0.72 * smooth(0.62, 1.32, ec) * (0.8 + 0.2 * samp(gDen, x, y));
      // Micro-beads: the fog itself is countless tiny drops. Two jittered layers, not every cell filled.
      let lum = (hashTab[(i * 7 + (i >> 9)) & 4095]! - 0.5) * 0.03, am = 1;
      for (let L = 0; L < 2; L++) {
        const c0 = L === 0 ? cs : cs * 2.3;
        const cx = Math.floor(x / c0), cy = Math.floor(y / c0);
        const h0 = ((cx * 73856093) ^ (cy * 19349663) ^ ((seed + L * 31) * 83492791)) & 4095;
        if (hashTab[(h0 + 3) & 4095]! > (L === 0 ? 0.62 : 0.4)) continue;
        const rr = c0 * (0.12 + 0.2 * hashTab[(h0 + 2) & 4095]!);
        const jx = (cx + 0.5 + (hashTab[h0]! - 0.5) * (1 - 2.2 * rr / c0)) * c0;
        const jy = (cy + 0.5 + (hashTab[(h0 + 1) & 4095]! - 0.5) * (1 - 2.2 * rr / c0)) * c0;
        const dx = x + 0.5 - jx, dy = y + 0.5 - jy, dd = Math.hypot(dx, dy);
        if (dd < rr + 0.5) {
          const cover = Math.min(1, rr + 0.5 - dd);
          const lit = Math.max(0, -(dx * 0.6 + dy * 0.8) / rr);
          lum += cover * (-0.04 + 0.2 * lit * lit + (dy > rr * 0.4 ? 0.06 : 0));
          am = Math.min(am, 1 - 0.16 * cover);
        }
      }
      AM[i] = (0.84 + 0.16 * samp(gDen, x, y)) * am;
      // Color: blurred scene, nudged by the uneven film (refraction), veiled by mist.
      let r = mist[0], g = mist[1], bb = mist[2];
      if (bd) {
        const sx = Math.max(0, Math.min(hw2 - 1, Math.round(x + disp * samp(gDx, x, y))));
        const sy = Math.max(0, Math.min(hh2 - 1, Math.round(y + disp * samp(gDy, x, y))));
        const k = (sy * hw2 + sx) * 4, sa = bd[k + 3]! / 255;
        r = bd[k]! * sa + mist[0] * (1 - sa);
        g = bd[k + 1]! * sa + mist[1] * (1 - sa);
        bb = bd[k + 2]! * sa + mist[2] * (1 - sa);
      }
      const lk = lum * (dark ? 150 : 255);
      r = r * (1 - veil) + mist[0] * veil + lk;
      g = g * (1 - veil) + mist[1] * veil + lk;
      bb = bb * (1 - veil) + mist[2] * veil + lk;
      FC[i * 3] = r; FC[i * 3 + 1] = g; FC[i * 3 + 2] = bb;
      D[i * 4] = r; D[i * 4 + 1] = g; D[i * 4 + 2] = bb; D[i * 4 + 3] = 0;
    }
  }

  // The swiped streak: nearest point on the path for every half-res pixel near it.
  const path = buildPath(W, aspect, card, seed);
  const SP = new Float32Array(N).fill(-1), CLR = new Float32Array(N), SD = new Float32Array(N);
  const ridgeIdx: number[] = [], ridgeVal: number[] = [];
  let maxHw = 0, minY = Infinity, maxY = -Infinity;
  for (let i = 0; i < path.n; i++) { maxHw = Math.max(maxHw, path.hw[i]!); minY = Math.min(minY, path.py[i]!); maxY = Math.max(maxY, path.py[i]!); }
  const reach = maxHw + 2.4 * u;
  const y0 = Math.max(0, Math.floor((minY - reach) / 2)), y1 = Math.min(hh2 - 1, Math.ceil((maxY + reach) / 2));
  const edgeSoft = 0.5 * u, stria = 1.6 / u, ridgeW = 0.55 * u;
  for (let y = y0; y <= y1; y++) {
    const Y = (y + 0.5) * 2;
    let guess = 0;
    for (let x = 0; x < hw2; x++) {
      const X = (x + 0.5) * 2;
      while (guess < path.n - 1 && path.px[guess + 1]! < X) guess++;
      let best = -1, bd2 = Infinity;
      const lo = Math.max(0, guess - 34), hi2 = Math.min(path.n - 1, guess + 34);
      for (let k = lo; k <= hi2; k++) {
        const dx = X - path.px[k]!, dy = Y - path.py[k]!, d2 = dx * dx + dy * dy;
        if (d2 < bd2) { bd2 = d2; best = k; }
      }
      if (bd2 > reach * reach) continue;
      // Refine on the neighbouring segments for a continuous parameter.
      let s = best / (path.n - 1), dist = Math.sqrt(bd2);
      for (const k of [best - 1, best]) {
        if (k < 0 || k >= path.n - 1) continue;
        const ax = path.px[k]!, ay = path.py[k]!, vx = path.px[k + 1]! - ax, vy = path.py[k + 1]! - ay;
        const t = clamp01(((X - ax) * vx + (Y - ay) * vy) / (vx * vx + vy * vy));
        const d = Math.hypot(X - ax - vx * t, Y - ay - vy * t);
        if (d < dist) { dist = d; s = (k + t) / (path.n - 1); }
      }
      const kk = Math.min(path.n - 1, Math.round(s * (path.n - 1)));
      const sd = (X - path.px[kk]!) * path.nx[kk]! + (Y - path.py[kk]!) * path.ny[kk]!;
      const hws = path.hw[kk]!;
      const i = y * hw2 + x;
      SP[i] = s;
      SD[i] = sd;
      const band = 1 - smooth(hws - edgeSoft, hws + edgeSoft, dist);
      // Skin leaves faint parallel smears, wetter toward the edges of the streak.
      const st = 0.5 + 0.5 * Math.sin(sd * stria + 2.6 * Math.sin(s * 11.0 + seed));
      const smear = (0.025 + 0.2 * Math.pow(Math.min(1, dist / hws), 4)) * st * st * st;
      CLR[i] = band * (1 - smear);
      // Water pushed aside by the swipe piles up just outside the edge, heavier below.
      const q = (dist - hws - 0.35 * u) / ridgeW;
      const ridge = Math.exp(-q * q) * (sd > 0 ? 1 : 0.65);
      if (ridge > 0.02) { ridgeIdx.push(i); ridgeVal.push(ridge); }
    }
  }

  // ---------- droplets ----------
  const R = rng(`cs-drops-${seed}`);
  const half = (x: number, y: number) => Math.max(0, Math.min(hh2 - 1, Math.floor(y / 2))) * hw2 + Math.max(0, Math.min(hw2 - 1, Math.floor(x / 2)));
  const rMax = 2.2 * u;
  const target = Math.round(dropAmt * 900 * (W * H) / (1920 * 1080));
  const cell = rMax * 2.4, cols = Math.ceil(W / cell) + 1;
  const buckets = new Map<number, Drop[]>();
  const drops: Drop[] = [];
  const t = geo.title;
  for (let tries = 0; tries < target * 6 && drops.length < target; tries++) {
    const x = R() * W, y = R() * H, q = R();
    const r = u * (0.22 + 1.98 * Math.pow(q, 2.7));
    const inCard = x > card.x && x < card.x + card.w && y > card.y && y < card.y + card.h;
    if (inCard && R() > 0.6) continue;
    if (x > t.x && x < t.x + t.w && y > t.y && y < t.y + t.h && R() > 0.25) continue;
    const bx = Math.floor(x / cell), by = Math.floor(y / cell);
    let hit = false;
    for (let j = by - 1; j <= by + 1 && !hit; j++) for (let i = bx - 1; i <= bx + 1 && !hit; i++) {
      for (const o of buckets.get(j * cols + i) ?? []) if (Math.hypot(o.x - x, o.y - y) < (o.r + r) * 1.2 + 0.35 * u) { hit = true; break; }
    }
    if (hit) continue;
    const hi = half(x, y);
    const sp = SP[hi]!;
    let wipe = -1;
    if (sp >= 0) {
      const kk = Math.round(sp * (path.n - 1));
      if (Math.abs(SD[hi]!) < path.hw[kk]! + 1.5 * u + r) wipe = passFrame(sp);
    }
    const born = Math.max(T0[hi]! + 6, 4 + 46 * R() * (1 - 0.45 * r / rMax));
    const d: Drop = { x, y, r, born, grow: 14 + 26 * R(), wipe, evap: T1[hi]!, small: r < 0.75 * u, pop: R() < 0.5, sp: { sx: 0, sy: 0, sw: 0, sh: 0, ox: 0, oy: 0 } };
    drops.push(d);
    const key2 = by * cols + bx;
    const arr = buckets.get(key2);
    if (arr) arr.push(d); else buckets.set(key2, [d]);
  }

  // Drips: heavy beads on the lower edge of the streak that break away and run down.
  const drips: Drip[] = [];
  const K = aspect === "16:9" ? 7 : 6;
  for (let k = 0; k < K; k++) {
    const s = 0.08 + 0.84 * (k + 0.2 + 0.6 * R()) / K;
    const kk = Math.round(s * (path.n - 1));
    const off = path.hw[kk]! + 0.45 * u;
    const x0 = path.px[kk]! + path.nx[kk]! * off, y0 = path.py[kk]! + path.ny[kk]! * off;
    if (x0 < 2 * u || x0 > W - 2 * u) continue;
    const r0 = u * (1.25 + 0.8 * R());
    const pf = passFrame(s);
    const start = Math.min(DRIP_END - 34, pf + 6 + 16 * R());
    const dur = Math.min(DRIP_END - start, 40 + 34 * R());
    const L = Math.min(H * (0.1 + 0.44 * Math.pow(R(), 0.9)), H - y0 + 4 * r0);
    const dr: Drip = { x0, y0, r0, pf, start, dur, L, n: 2 + Math.floor(R() * 3), ph1: R() * TAU, ph2: R() * TAU, beads: [] };
    let yy = y0 + 1.6 * r0;
    while (yy < y0 + L - r0) {
      const v = dripV(dr, yy);
      dr.beads.push({ x: dripX(dr, yy) + (R() - 0.5) * 0.5 * r0, y: yy, r: r0 * (0.14 + 0.3 * Math.pow(R(), 1.5)), pass: v, sp: { sx: 0, sy: 0, sw: 0, sh: 0, ox: 0, oy: 0 } });
      yy += u * (0.9 + 2.6 * R());
    }
    drips.push(dr);
  }

  // Rim beads: the water the swipe pushed aside, strung along both edges.
  const rims: Bead[] = [];
  const total = path.len[path.n - 1]!;
  for (const side of [1, -1]) {
    let dist = R() * u;
    let k = 0;
    while (dist < total) {
      while (k < path.n - 1 && path.len[k + 1]! < dist) k++;
      const off = path.hw[k]! + (0.2 + 1.0 * R()) * u;
      const x = path.px[k]! + path.nx[k]! * off * side, y = path.py[k]! + path.ny[k]! * off * side;
      const r = u * (0.24 + (side > 0 ? 1.35 : 0.95) * Math.pow(R(), 2.2));
      const nearDrip = side > 0 && drips.some((d) => Math.hypot(d.x0 - x, d.y0 - y) < d.r0 * 2.2);
      if (!nearDrip && x > -r && x < W + r && y > -r && y < H + r) {
        rims.push({ x, y, r, pass: passFrame(k / (path.n - 1)) + 1 + 3 * R(), sp: { sx: 0, sy: 0, sw: 0, sh: 0, ox: 0, oy: 0 } });
      }
      dist += r * 1.6 + u * (0.5 + 1.9 * R());
    }
  }

  const items: { x: number; y: number; r: number; sp?: Sprite }[] = [...drops, ...rims, ...drips.flatMap((d) => d.beads)];
  const atlas = buildAtlas(S, items, look);

  const F = newCanvas(hw2, hh2);
  return {
    key, S, F, img: img2, FC, T0, T1, AM, RES, SP, CLR,
    RIDX: Int32Array.from(ridgeIdx), RVAL: Float32Array.from(ridgeVal), hi,
    hw2, hh2, path, drops, rims, drips, atlas,
  };
}

// ---------------------------------------------------------------- drips (pure functions of frame)

function dripX(d: Drip, y: number): number {
  const u = d.r0 / 1.2, dy = y - d.y0;
  return d.x0 + u * 0.5 * (Math.sin(dy / (5.5 * u) + d.ph1) - Math.sin(d.ph1)) + u * 0.22 * (Math.sin(dy / (2.1 * u) + d.ph2) - Math.sin(d.ph2));
}
/** Run progress (0..1 of the stick-slip curve) at which the head passes height y. */
function dripV(d: Drip, y: number): number {
  return clamp01((y - d.y0) / d.L);
}
function dripHead(d: Drip, f: number): { y: number; g: number; speed: number } {
  const v = clamp01((f - d.start) / d.dur);
  const g = stickSlip(v, d.n);
  const g2 = stickSlip(clamp01((f + 1 - d.start) / d.dur), d.n);
  return { y: d.y0 + d.L * g, g, speed: (d.L * (g2 - g)) / (d.r0 * 1.4) };
}

// ---------------------------------------------------------------- component

/**
 * A pane of glass in front of the screenshot. Mist creeps in from the edges until the page is
 * a soft glow, droplets bead and lens the scene upside down, one swipe clears a streak and piles
 * the water along its edges, heavy beads break away and run down in stick-slip drips, then the
 * fog lifts from the screenshot outward and leaves the beaded glass over a crisp page.
 */
export const Component: React.FC<Props> = ({ screenshot, title, color, primary, secondary, background, fontFamily, fog, droplets, seed }) => {
  const frame = useCurrentFrame();
  const { width: W, height: H, aspect } = useLayout();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const field = useRef<Field | null>(null);
  const [failed, setFailed] = useState("");
  const src = screenshot && failed !== screenshot ? screenshot : SAMPLE_SCREENSHOT;
  const [nat, setNat] = useState<{ src: string; w: number; h: number } | null>(null);
  const [handle] = useState(() => delayRender("condensation-swipe image", { timeoutInMilliseconds: 60000 }));
  const released = useRef(false);
  const ready = nat?.src === src;
  const imgAspect = ready && nat ? nat.w / nat.h : 1.6;
  const geo = useMemo(() => buildGeo(W, H, aspect, imgAspect), [W, H, aspect, imgAspect]);
  const font = brandFontStack(fontFamily);

  const transparent = background === "transparent";
  const dark = transparent ? luminance(color) > 0.45 : luminance(background) < 0.4;
  const fogAmt = Math.max(0.4, Math.min(1, fog));

  useLayoutEffect(() => {
    const out = canvasRef.current;
    if (!out || !ready) return;
    const ctx = ctx2d(out);
    const { u } = geo;
    const look: Look = { dark, sh: dark ? BLACK : color, shA: dark ? 0.7 : 0.5 };
    const key = [W, H, aspect, src, geo.card.x, geo.card.y, geo.card.w, geo.card.h, background, color, primary, secondary, seed, droplets, imgAspect].join("|");
    if (field.current?.key !== key) {
      field.current = buildField(key, imgRef.current, { W, H, geo, aspect, seed, dropAmt: droplets, imgAspect, background, color, primary, secondary, transparent, dark, look });
    }
    const fd = field.current;
    const f = frame;

    // ---------- 1. the fog film (half res, per pixel) ----------
    const { T0, T1, AM, RES, SP, CLR, FC, RIDX, RVAL } = fd;
    const D = fd.img.data;
    const p = swipeProg(f);
    const pw = 0.014;
    const n = T0.length;
    for (let i = 0, j = 3; i < n; i++, j += 4) {
      let on = (f - T0[i]!) / ON_LEN;
      if (on <= 0) { D[j] = 0; continue; }
      if (on > 1) on = 1;
      let ev = (f - T1[i]!) / EVAP_LEN;
      ev = ev < 0 ? 0 : ev > 1 ? 1 : ev;
      let keep = 1 - ev;
      const rs = RES[i]!;
      if (rs > keep) keep = rs;
      let a = AM[i]! * on * keep * fogAmt;
      const sp = SP[i]!;
      if (p > 0 && sp >= 0 && sp < p + pw) {
        let w = (p + pw - sp) / (2 * pw);
        if (w > 1) w = 1;
        a *= 1 - CLR[i]! * w;
      }
      D[j] = a * 255;
    }
    const hi = fd.hi;
    for (let k = 0; k < RIDX.length; k++) {
      const i = RIDX[k]!, j = i * 4;
      const sp = SP[i]!;
      let w = p > 0 ? (p + pw - sp) / (2 * pw) : 0;
      w = w < 0 ? 0 : w > 1 ? 1 : w;
      const on = clamp01((f - T0[i]!) / ON_LEN);
      const keep = Math.max(1 - clamp01((f - T1[i]!) / EVAP_LEN), RES[i]! * 0.6);
      const amt = RVAL[k]! * w * on * keep * fogAmt;
      const m = amt * 0.8;
      D[j] = FC[i * 3]! + (hi[0] - FC[i * 3]!) * m;
      D[j + 1] = FC[i * 3 + 1]! + (hi[1] - FC[i * 3 + 1]!) * m;
      D[j + 2] = FC[i * 3 + 2]! + (hi[2] - FC[i * 3 + 2]!) * m;
      const a = amt * 0.85 * 255;
      if (a > D[j + 3]!) D[j + 3] = a;
    }
    const fx = ctx2d(fd.F);
    fx.setTransform(1, 0, 0, 1, 0, 0);
    fx.globalCompositeOperation = "source-over";
    fx.putImageData(fd.img, 0, 0);
    // Drip trails wipe narrow channels through the mist.
    fx.globalCompositeOperation = "destination-out";
    fx.lineCap = "round";
    fx.lineJoin = "round";
    fx.strokeStyle = withAlpha(WHITE, 0.92);
    const trails: { d: Drip; y: number }[] = [];
    for (const d of fd.drips) {
      if (f < d.start) continue;
      const head = dripHead(d, f);
      if (head.y - d.y0 < 1) continue;
      trails.push({ d, y: head.y });
      fx.lineWidth = (d.r0 * 1.15) / 2;
      fx.beginPath();
      const step = Math.max(2, d.r0 * 0.5);
      for (let y = d.y0; y <= head.y; y += step) {
        const x = dripX(d, y);
        if (y === d.y0) fx.moveTo(x / 2, y / 2); else fx.lineTo(x / 2, y / 2);
      }
      fx.lineTo(dripX(d, head.y) / 2, head.y / 2);
      fx.stroke();
    }
    fx.globalCompositeOperation = "source-over";

    // ---------- 2. composite ----------
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.filter = "none";
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(fd.S, 0, 0);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(fd.F, 0, 0, fd.hw2, fd.hh2, 0, 0, fd.hw2 * 2, fd.hh2 * 2);

    // Wet trails catch a hairline of light on one side and shade on the other.
    const evapAll = clamp01((f - EVAP0) / (EVAP_SPAN + EVAP_LEN));
    for (const { d, y: hy } of trails) {
      const sheen = (dark ? 0.26 : 0.5) * (1 - 0.55 * evapAll);
      for (const [dx, col, a, lw] of [[-0.46, WHITE, sheen, 0.16], [0.46, look.sh, look.shA * 0.3 * (1 - 0.5 * evapAll), 0.14]] as const) {
        ctx.beginPath();
        const step = Math.max(2, d.r0 * 0.5);
        for (let y = d.y0 + d.r0; y <= hy; y += step) {
          const x = dripX(d, y) + dx * d.r0;
          if (y === d.y0 + d.r0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = withAlpha(col, a);
        ctx.lineWidth = Math.max(1, lw * u);
        ctx.stroke();
      }
    }

    // ---------- 3. droplets ----------
    const A = fd.atlas;
    const blit = (sp: Sprite, x: number, y: number, k: number, alpha: number) => {
      if (k <= 0.02 || alpha <= 0.01) return;
      ctx.globalAlpha = alpha;
      ctx.drawImage(A, sp.sx, sp.sy, sp.sw, sp.sh, x - sp.ox * k, y - sp.oy * k, sp.sw * k, sp.sh * k);
    };
    for (const d of fd.drops) {
      if (f < d.born) continue;
      if (d.wipe >= 0 && f >= d.wipe) continue;
      const g = clamp01((f - d.born) / d.grow);
      let k = 0.3 + 0.7 * easeOut(g);
      let alpha = clamp01(g * 4);
      const e = clamp01((f - d.evap) / 18);
      if (d.small) { alpha *= 1 - e; k *= 1 - 0.35 * e; } else k *= 1 - 0.1 * e;
      blit(d.sp, d.x, d.y, k, alpha);
    }
    for (const b of fd.rims) {
      if (f < b.pass) continue;
      const g = clamp01((f - b.pass) / 7);
      const k = g < 1 ? 0.2 + 0.8 * (1 + 0.16 * Math.sin(g * Math.PI)) * easeOut(g) : 1;
      blit(b.sp, b.x, b.y, k, clamp01(g * 3));
    }
    for (const d of fd.drips) {
      if (f < d.start) continue;
      const v = clamp01((f - d.start) / d.dur), g = stickSlip(v, d.n);
      for (const b of d.beads) {
        if (g < b.pass) continue;
        blit(b.sp, b.x, b.y, 1, 1);
      }
    }
    ctx.globalAlpha = 1;
    // Drip heads, lensing live as they run.
    for (const d of fd.drips) {
      if (f < d.pf) continue;
      let y = d.y0, r = d.r0, stretch = 0;
      if (f < d.start) {
        r = d.r0 * (0.4 + 0.6 * easeOut((f - d.pf) / Math.max(1, d.start - d.pf)));
      } else {
        const h = dripHead(d, f);
        y = h.y;
        r = d.r0 * (1 - 0.3 * h.g);
        stretch = 0.5 * clamp01(h.speed);
      }
      if (y - r > H) continue;
      const x = dripX(d, y);
      drawDrop(ctx, fd.S, x, y, x, y - r * stretch * 0.5, r, stretch, look);
    }

    // ---------- 4. the swipe front: a bow wave of pushed water across the streak ----------
    if (p > 0 && p < 1) {
      const act = Math.pow(Math.sin(Math.PI * p), 0.6);
      const path = fd.path;
      const k = Math.min(path.n - 1, Math.round(p * (path.n - 1)));
      const px = path.px[k]!, py = path.py[k]!, nx = path.nx[k]!, ny = path.ny[k]!, tx = ny, ty = -nx, h = path.hw[k]! * 0.97;
      const front = (back: number, bulge: number) => {
        ctx.beginPath();
        ctx.moveTo(px - nx * h - tx * back, py - ny * h - ty * back);
        ctx.quadraticCurveTo(px + tx * (bulge - back), py + ty * (bulge - back), px + nx * h - tx * back, py + ny * h - ty * back);
      };
      // Fresh wet glass just behind the front.
      const film = ctx.createLinearGradient(px - tx * 9 * u, py - ty * 9 * u, px, py);
      film.addColorStop(0, withAlpha(WHITE, 0));
      film.addColorStop(1, withAlpha(WHITE, (dark ? 0.1 : 0.18) * act));
      ctx.fillStyle = film;
      ctx.beginPath();
      ctx.moveTo(px - nx * h - tx * 9 * u, py - ny * h - ty * 9 * u);
      ctx.lineTo(px - nx * h, py - ny * h);
      ctx.quadraticCurveTo(px + tx * h * 0.3, py + ty * h * 0.3, px + nx * h, py + ny * h);
      ctx.lineTo(px + nx * h - tx * 9 * u, py + ny * h - ty * 9 * u);
      ctx.closePath();
      ctx.fill();
      // The water pushed ahead of the palm: a soft glowing ridge, not a drawn line.
      ctx.save();
      front(0.5 * u, h * 0.3);
      ctx.shadowColor = withAlpha(WHITE, (dark ? 0.5 : 0.8) * act);
      ctx.shadowBlur = 2.2 * u;
      ctx.strokeStyle = withAlpha(WHITE, (dark ? 0.32 : 0.5) * act);
      ctx.lineWidth = 0.9 * u;
      ctx.stroke();
      ctx.restore();
      front(1.3 * u, h * 0.3);
      ctx.strokeStyle = withAlpha(look.sh, look.shA * 0.18 * act);
      ctx.lineWidth = 0.6 * u;
      ctx.stroke();
    }

    // ---------- 5. the pane itself: a faint standing reflection and one glint as it dries ----------
    const diag = Math.hypot(W, H);
    const ang = 0.62, cx = Math.cos(ang), cy = Math.sin(ang);
    const sheen = ctx.createLinearGradient(0, 0, cx * diag, cy * diag);
    const sa = dark ? 0.05 : 0.09;
    sheen.addColorStop(0, withAlpha(WHITE, 0));
    sheen.addColorStop(0.22, withAlpha(WHITE, sa));
    sheen.addColorStop(0.3, withAlpha(WHITE, 0));
    sheen.addColorStop(0.34, withAlpha(WHITE, sa * 0.6));
    sheen.addColorStop(0.38, withAlpha(WHITE, 0));
    sheen.addColorStop(1, withAlpha(WHITE, 0));
    ctx.fillStyle = sheen;
    ctx.fillRect(0, 0, W, H);
    const gl = clamp01((f - GLINT[0]) / (GLINT[1] - GLINT[0]));
    if (gl > 0 && gl < 1) {
      const pos = (-0.2 + 1.4 * easeInOut(gl)) * diag, half = 7 * u;
      const g = ctx.createLinearGradient(cx * (pos - half), cy * (pos - half), cx * (pos + half), cy * (pos + half));
      const ga = (dark ? 0.12 : 0.22) * Math.sin(Math.PI * gl);
      g.addColorStop(0, withAlpha(WHITE, 0));
      g.addColorStop(0.5, withAlpha(WHITE, ga));
      g.addColorStop(1, withAlpha(WHITE, 0));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    }

    // Transparent backdrop: fade the pane out toward the edges so the corners are empty.
    if (transparent) {
      ctx.save();
      ctx.globalCompositeOperation = "destination-in";
      ctx.translate(W / 2, H / 2);
      ctx.scale(W / 2, H / 2);
      const m = ctx.createRadialGradient(0, 0, 0, 0, 0, 1.36);
      m.addColorStop(0, withAlpha(WHITE, 1));
      m.addColorStop(0.72, withAlpha(WHITE, 1));
      m.addColorStop(1, withAlpha(WHITE, 0));
      ctx.fillStyle = m;
      ctx.fillRect(-1, -1, 2, 2);
      ctx.restore();
    }

    if (!released.current) {
      released.current = true;
      continueRender(handle);
    }
  }, [frame, W, H, aspect, geo, imgAspect, ready, src, dark, transparent, background, color, primary, secondary, seed, droplets, fogAmt, handle]);

  // The title sits behind the same pane: blurred by the mist, sharpening as it lifts.
  const titleFog = fogAmt * clamp01((frame + 12) / 26) * (1 - easeInOut(clamp01((frame - 124) / 30)));
  const lift = (1 - easeOut(clamp01((frame - 124) / 34))) * 0.8 * geo.u;
  const fontSize = fitFontSize({
    chars: title.length,
    boxW: geo.title.w,
    boxH: geo.title.h,
    lines: geo.titleLines,
    charEm: 0.56,
    lineHeight: 1.18,
    max: geo.titleMax,
    min: geo.titleMin,
  });

  return (
    <AbsoluteFill style={{ background: transparent ? "transparent" : background }}>
      <div
        data-21st-slot="screenshot"
        style={{ position: "absolute", left: geo.card.x, top: geo.card.y, width: geo.card.w, height: geo.card.h, borderRadius: geo.radius, overflow: "hidden" }}
      >
        <Img
          ref={imgRef}
          src={src}
          crossOrigin="anonymous"
          onLoad={(e) => {
            const el = e.currentTarget;
            setNat({ src, w: el.naturalWidth || 16, h: el.naturalHeight || 10 });
          }}
          onError={() => { if (screenshot) setFailed(screenshot); }}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
        />
      </div>
      <canvas ref={canvasRef} width={W} height={H} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      <div
        style={{
          position: "absolute",
          left: geo.title.x,
          top: geo.title.y,
          width: geo.title.w,
          height: geo.title.h,
          display: "flex",
          alignItems: geo.titleLines > 1 ? "flex-end" : "center",
          justifyContent: "center",
        }}
      >
        <div
          data-21st-slot="title"
          style={{
            fontFamily: font,
            fontWeight: 600,
            fontSize,
            lineHeight: 1.18,
            letterSpacing: "-0.02em",
            color,
            textAlign: "center",
            maxWidth: "100%",
            overflowWrap: "break-word",
            opacity: 1 - 0.62 * titleFog,
            filter: titleFog > 0.005 ? `blur(${(titleFog * 0.95 * geo.u).toFixed(2)}px)` : undefined,
            transform: lift > 0.01 ? `translateY(${lift.toFixed(2)}px)` : undefined,
          }}
        >
          {title}
        </div>
      </div>
    </AbsoluteFill>
  );
};
