// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, Easing, Img, continueRender, delayRender, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, easeOut, fitFontSize, luminance, ramp, useLayout, withAlpha } from "../../../kit/index";
import { hashString, simplex3 } from "../_lib/noise";
import { SAMPLE_SCREENSHOT } from "../_lib/samples";
import type { schema } from "./led-wall-pullback.schema";

type Props = z.infer<typeof schema>;
type Ctx = CanvasRenderingContext2D;
type RGB = [number, number, number];
type Rect = { x: number; y: number; w: number; h: number };

// ---------- timeline (30 fps) ----------
const S0 = 6; // close-up zoom at frame 0: a few dozen diodes across, big UI shapes already legible
const T_DRIFT: [number, number] = [0, 36];
const T_PULL: [number, number] = [0, 106]; // one continuous pullback from the first frame to rest
const T_REFRESH: [number, number] = [1, 9]; // brand wavefront sweeps the visible diodes, screenshot behind it
const T_TITLE: [number, number] = [90, 112];
const PULL_EASE = Easing.bezier(0.3, 0.25, 0.25, 1);
const TILE = 128;

/** Pure white / black, used only with alpha for glints, cores and shadows. */
const hexOf = (r: number, g: number, b: number) => "#" + [r, g, b].map((c) => Math.max(0, Math.min(255, Math.round(c))).toString(16).padStart(2, "0")).join("");
const WHITE = hexOf(255, 255, 255);
const BLACK = hexOf(0, 0, 0);

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (a: number, b: number, x: number) => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};

function logScale(f: number): number {
  const t = ramp(f, T_PULL, [0, 1]);
  const e = PULL_EASE(t);
  // A small overshoot past the rest position, then back (sin^2 keeps both ends smooth).
  const o = Math.sin(Math.PI * clamp01((t - 0.62) / 0.38));
  return Math.log(S0) * (1 - e) - 0.022 * o * o;
}

const rgbCache = new Map<string, RGB>();
function rgbOf(color: string): RGB {
  const hit = rgbCache.get(color);
  if (hit) return hit;
  let out: RGB = [128, 128, 128];
  const hex = /^#([0-9a-f]{3,8})$/i.exec(color)?.[1];
  if (hex) {
    const h = hex.length < 6 ? hex.slice(0, 3).split("").map((c) => c + c).join("") : hex.slice(0, 6);
    const n = parseInt(h, 16);
    out = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  } else if (typeof document !== "undefined") {
    const c = document.createElement("canvas");
    c.width = c.height = 1;
    const x = c.getContext("2d", { willReadFrequently: true })!;
    x.fillStyle = color;
    x.fillRect(0, 0, 1, 1);
    const d = x.getImageData(0, 0, 1, 1).data;
    out = [d[0]!, d[1]!, d[2]!];
  }
  rgbCache.set(color, out);
  return out;
}
const mixRGB = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const hexRGB = (c: RGB) => hexOf(c[0], c[1], c[2]);

function newCanvas(w: number, h: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = Math.max(1, Math.round(w));
  c.height = Math.max(1, Math.round(h));
  return c;
}
const ctx2d = (c: HTMLCanvasElement) => c.getContext("2d", { willReadFrequently: true })!;

type Geo = {
  u: number;
  wall: Rect;
  cell: number;
  cols: number;
  rows: number;
  wallAspect: number;
  titleY: number;
  titleBox: { w: number; h: number; lines: number; max: number; min: number };
};

function buildGeo(W: number, H: number, aspect: string, imgAspect: number, pitch: number): Geo {
  const u = Math.min(W, H) / 100;
  const box =
    aspect === "16:9" ? { w: 0.74 * W, h: 0.6 * H, cy: 0.5 * H, a: Math.max(1.3, Math.min(2, imgAspect)) }
    : aspect === "9:16" ? { w: 0.87 * W, h: 0.46 * H, cy: 0.49 * H, a: Math.max(1, Math.min(1.4, imgAspect)) }
    : { w: 0.84 * W, h: 0.54 * H, cy: 0.505 * H, a: Math.max(1.3, Math.min(1.65, imgAspect)) };
  let w = box.w, h = w / box.a;
  if (h > box.h) { h = box.h; w = h * box.a; }
  const cell = Math.max(3, pitch * u);
  const cols = Math.max(24, Math.round(w / cell));
  const rows = Math.max(16, Math.round(h / cell));
  w = cols * cell;
  h = rows * cell;
  const wall: Rect = { x: (W - w) / 2, y: box.cy - h / 2, w, h };
  const titleY = aspect === "16:9" ? 0.105 * H : aspect === "9:16" ? 0.17 * H : 0.12 * H;
  const titleBox =
    aspect === "16:9" ? { w: 0.72 * W, h: 0.1 * H, lines: 1, max: 0.056 * H, min: 0.03 * H }
    : aspect === "9:16" ? { w: 0.84 * W, h: 0.12 * H, lines: 2, max: 0.042 * H, min: 0.032 * H }
    : { w: 0.8 * W, h: 0.11 * H, lines: 1, max: 0.054 * H, min: 0.032 * H };
  return { u, wall, cell, cols, rows, wallAspect: w / h, titleY, titleBox };
}

type Cache = {
  key?: string;
  WI?: HTMLCanvasElement; // the screenshot cover-cropped at the wall's rest size
  G?: HTMLCanvasElement; // one pixel per diode
  gImg?: Uint8ClampedArray; // screenshot color of each diode
  gOut?: ImageData;
  avg?: RGB;
  focus?: [number, number]; // focus in wall uv
  flick?: Float32Array;
  noise?: (x: number, y: number, z: number) => number;
  L?: HTMLCanvasElement; D?: HTMLCanvasElement;
  R?: HTMLCanvasElement; B1?: HTMLCanvasElement; B2?: HTMLCanvasElement;
  back?: HTMLCanvasElement; backKey?: string;
  crowd?: HTMLCanvasElement; crowdKey?: string;
  final?: HTMLCanvasElement; finalKey?: string;
  tGap?: HTMLCanvasElement; tCore?: HTMLCanvasElement; tSpec?: HTMLCanvasElement;
};

/**
 * Diode tiles: one cell of the wall, scaled onto the grid with a pattern transform. Tiles are drawn at
 * about the on-screen cell size, so the full-frame pattern fills never have to minify a big tile.
 */
function sizeTile(c: HTMLCanvasElement, size: number): Ctx {
  if (c.width !== size) { c.width = size; c.height = size; }
  const x = ctx2d(c);
  x.setTransform(1, 0, 0, 1, 0, 0);
  x.globalCompositeOperation = "source-over";
  x.globalAlpha = 1;
  x.clearRect(0, 0, size, size);
  return x;
}

/** The wall face between the diodes: the PCB color, clear over each diode dome. */
function drawGapTile(c: HTMLCanvasElement, pcb: string, strength: number, soft: number, size: number) {
  const x = sizeTile(c, size);
  const g = x.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size * 0.72);
  const rr = 0.39 / 0.72;
  const e = soft / 0.72;
  g.addColorStop(0, withAlpha(pcb, 0));
  g.addColorStop(Math.max(0.01, rr - e), withAlpha(pcb, 0));
  g.addColorStop(Math.min(0.98, rr + e), withAlpha(pcb, strength));
  g.addColorStop(1, withAlpha(pcb, strength));
  x.fillStyle = g;
  x.fillRect(0, 0, size, size);
}

/** The hot core of a lit diode (alpha mask). */
function drawCoreTile(c: HTMLCanvasElement, size: number) {
  const x = sizeTile(c, size);
  const g = x.createRadialGradient(size * 0.5, size * 0.5, 0, size * 0.5, size * 0.5, size * 0.3);
  g.addColorStop(0, withAlpha(WHITE, 1));
  g.addColorStop(0.35, withAlpha(WHITE, 0.6));
  g.addColorStop(1, withAlpha(WHITE, 0));
  x.fillStyle = g;
  x.fillRect(0, 0, size, size);
}

/** Glints on the diode dome and its cup rim. */
function drawSpecTile(c: HTMLCanvasElement, size: number) {
  const x = sizeTile(c, size);
  x.save();
  x.translate(size * 0.405, size * 0.37);
  x.rotate(-0.6);
  x.scale(1, 0.62);
  const g = x.createRadialGradient(0, 0, 0, 0, 0, size * 0.085);
  g.addColorStop(0, withAlpha(WHITE, 0.75));
  g.addColorStop(0.5, withAlpha(WHITE, 0.3));
  g.addColorStop(1, withAlpha(WHITE, 0));
  x.fillStyle = g;
  x.fillRect(-size * 0.2, -size * 0.2, size * 0.4, size * 0.4);
  x.restore();
  const r = x.createRadialGradient(size / 2, size / 2, size * 0.4, size / 2, size / 2, size * 0.47);
  r.addColorStop(0, withAlpha(WHITE, 0));
  r.addColorStop(0.45, withAlpha(WHITE, 0.07));
  r.addColorStop(1, withAlpha(WHITE, 0));
  x.fillStyle = r;
  x.fillRect(0, 0, size, size);
  const sg = x.createRadialGradient(size * 0.6, size * 0.64, 0, size * 0.6, size * 0.64, size * 0.05);
  sg.addColorStop(0, withAlpha(WHITE, 0.2));
  sg.addColorStop(1, withAlpha(WHITE, 0));
  x.fillStyle = sg;
  x.fillRect(0, 0, size, size);
}

/** Two rows of generic head-and-shoulder silhouettes along the bottom edge, rim-lit in the brand colors. */
function buildCrowd(W: number, H: number, aspect: string, u0: number, ink: string, p: string, s: string): HTMLCanvasElement {
  const ch = Math.round(H * (aspect === "9:16" ? 0.2 : 0.17));
  const u = aspect === "9:16" ? u0 * 1.6 : u0;
  const c = newCanvas(W, ch);
  const x = ctx2d(c);
  const r = (k: string) => (hashString(`crowd-${k}`) % 10000) / 10000;
  const person = (cx: number, base: number, sc: number) => {
    const hw = 2.7 * u * sc, hh = 3.4 * u * sc;
    const sw = 8.6 * u * sc;
    const hy = base - 7.4 * u * sc;
    x.beginPath();
    x.ellipse(cx, hy, hw, hh, 0, 0, Math.PI * 2);
    // neck into sloped shoulders
    x.moveTo(cx - sw, base + 6 * u * sc);
    x.bezierCurveTo(cx - sw, base - 2.4 * u * sc, cx - sw * 0.6, base - 3.1 * u * sc, cx - hw * 0.7, base - 3.6 * u * sc);
    x.lineTo(cx - hw * 0.62, hy + hh * 0.6);
    x.lineTo(cx + hw * 0.62, hy + hh * 0.6);
    x.lineTo(cx + hw * 0.7, base - 3.6 * u * sc);
    x.bezierCurveTo(cx + sw * 0.6, base - 3.1 * u * sc, cx + sw, base - 2.4 * u * sc, cx + sw, base + 6 * u * sc);
    x.closePath();
  };
  const rows = [
    { n: aspect === "9:16" ? 5 : aspect === "1:1" ? 7 : 11, base: ch * 0.74, sc: 0.8, a: 0.88 },
    { n: aspect === "9:16" ? 4 : aspect === "1:1" ? 5 : 8, base: ch * 1.04, sc: 1.12, a: 1 },
  ];
  rows.forEach((row, ri) => {
    for (let i = 0; i < row.n; i++) {
      const t = (i + 0.5 + (ri ? 0.5 : 0) + (r(`${ri}-${i}`) - 0.5) * 0.5) / row.n;
      const cx = t * W;
      const sc = row.sc * (0.9 + 0.22 * r(`s${ri}-${i}`));
      const base = row.base + (r(`b${ri}-${i}`) - 0.5) * u * 1.6;
      // rim light: the same shape a touch higher, in the stage light from that side
      x.save();
      x.filter = `blur(${((ri ? 0.7 : 0.4) * u).toFixed(1)}px)`;
      const rim = x.createLinearGradient(0, 0, W, 0);
      rim.addColorStop(0, withAlpha(p, 0.95));
      rim.addColorStop(0.5, withAlpha(p, 0.35));
      rim.addColorStop(0.5, withAlpha(s, 0.35));
      rim.addColorStop(1, withAlpha(s, 0.95));
      x.fillStyle = rim;
      x.translate(0, -0.45 * u * sc);
      person(cx, base, sc);
      x.fill();
      x.restore();
      x.save();
      x.filter = `blur(${((ri ? 0.6 : 0.3) * u).toFixed(1)}px)`;
      x.globalAlpha = row.a;
      x.fillStyle = ink;
      person(cx, base, sc);
      x.fill();
      x.restore();
    }
  });
  return c;
}

/**
 * A stage LED wall, drawn with Canvas2D. The clip opens macro on a handful of glowing diodes
 * running the brand boot pattern; the screenshot refreshes outward from the focus diode behind a
 * brand-colored wavefront while the camera rushes back 40x, and the wall lands on a glossy stage
 * with its reflection, bloom and light spill. Every diode is one cell of a sampled grid; masks,
 * cores and glints are pattern fills, so the cost does not depend on how many diodes are on screen.
 */
export const Component: React.FC<Props> = ({ screenshot, title, color, primary, secondary, background, fontFamily, pitch, focusX, focusY, glow, reflection }) => {
  const frame = useCurrentFrame();
  const { width: W, height: H, aspect, unit } = useLayout();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const cache = useRef<Cache>({});
  const [failed, setFailed] = useState("");
  const src = screenshot && failed !== screenshot ? screenshot : SAMPLE_SCREENSHOT;
  const [nat, setNat] = useState<{ src: string; w: number; h: number } | null>(null);
  const [handle] = useState(() => delayRender("led-wall-pullback image", { timeoutInMilliseconds: 60000 }));
  const released = useRef(false);
  const ready = nat?.src === src;
  const imgAspect = ready && nat ? nat.w / Math.max(1, nat.h) : 1.6;
  const geo = useMemo(() => buildGeo(W, H, aspect, imgAspect, pitch), [W, H, aspect, imgAspect, pitch]);
  const font = brandFontStack(fontFamily);

  const transparent = background === "transparent";
  const dark = transparent ? luminance(color) > 0.45 : luminance(background) < 0.4;

  const logS = logScale(frame);

  useLayoutEffect(() => {
    const out = canvasRef.current;
    const img = imgRef.current;
    if (!out || !img || !ready || !img.complete || img.naturalWidth === 0) return;
    const ctx = ctx2d(out);
    const c = cache.current;
    const { wall, cell, cols, rows, u } = geo;

    // ---------- per-geometry caches ----------
    const key = [src, W, H, cols, rows, cell, focusX, focusY].join("|");
    if (c.key !== key) {
      c.key = key;
      const ww = Math.round(wall.w), wh = Math.round(wall.h);
      c.WI = newCanvas(ww, wh);
      const wi = ctx2d(c.WI);
      // Rasterize the whole image first (SVG sources ignore source rects in their intrinsic units).
      const iw0 = Math.max(16, nat?.w || img.naturalWidth), ih0 = Math.max(10, nat?.h || img.naturalHeight);
      const up = Math.max(1, Math.min(4, Math.max(wall.w, 1600) / iw0));
      const iw = Math.round(iw0 * up), ih = Math.round(ih0 * up);
      const full = newCanvas(iw, ih);
      ctx2d(full).drawImage(img, 0, 0, iw, ih);
      const ia = iw / ih, wa = ww / wh;
      let sw = iw, sh = ih, sx = 0, sy = 0;
      if (ia > wa) { sw = ih * wa; sx = (iw - sw) / 2; } else { sh = iw / wa; sy = (ih - sh) / 2; }
      wi.imageSmoothingQuality = "high";
      wi.filter = "saturate(1.12) contrast(1.04)"; // LED punch
      wi.drawImage(full, sx, sy, sw, sh, 0, 0, ww, wh);
      wi.filter = "none";
      // Downsample in halving steps so each diode is the true average of its patch.
      let srcC: HTMLCanvasElement = c.WI;
      while (srcC.width / 2 > cols * 1.5) {
        const nx = newCanvas(srcC.width / 2, srcC.height / 2);
        const nc = ctx2d(nx);
        nc.imageSmoothingQuality = "high";
        nc.drawImage(srcC, 0, 0, nx.width, nx.height);
        srcC = nx;
      }
      c.G = newCanvas(cols, rows);
      const gx = ctx2d(c.G);
      gx.imageSmoothingQuality = "high";
      gx.drawImage(srcC, 0, 0, cols, rows);
      c.gImg = new Uint8ClampedArray(gx.getImageData(0, 0, cols, rows).data);
      c.gOut = gx.createImageData(cols, rows);
      let ar = 0, ag = 0, ab = 0;
      for (let i = 0; i < cols * rows; i++) { ar += c.gImg[i * 4]!; ag += c.gImg[i * 4 + 1]!; ab += c.gImg[i * 4 + 2]!; }
      const n = cols * rows;
      c.avg = [ar / n, ag / n, ab / n];
      const fu = Math.max(0.08, Math.min(0.92, (focusX * iw - sx) / sw));
      const fv = Math.max(0.1, Math.min(0.9, (focusY * ih - sy) / sh));
      c.focus = [fu, fv];
      c.flick = new Float32Array(n);
      for (let i = 0; i < n; i++) c.flick[i] = ((hashString(`led-${i}`) % 10007) / 10007) * 7 - 3;
      c.noise = simplex3("led-wall");
      c.L = newCanvas(W, H);
      c.D = newCanvas(W / 2, H / 2); // soft hot cores: half resolution is plenty
      c.R = newCanvas(W / 4, H / 4);
      c.B1 = newCanvas(W / 6, H / 6);
      c.B2 = newCanvas(W / 16, H / 16);
      c.tGap = newCanvas(TILE, TILE);
      c.tCore = newCanvas(TILE, TILE);
      c.tSpec = newCanvas(TILE, TILE);
      c.backKey = "";
    }
    const avg = c.avg!;

    // Once the camera is at rest nothing on the canvas moves: reuse the finished frame.
    const staticKey = frame >= T_PULL[1] ? [c.key, color, primary, secondary, background, glow, reflection, dark].join("|") : "";
    if (staticKey && c.final && c.finalKey === staticKey) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      ctx.filter = "none";
      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(c.final, 0, 0);
      if (!released.current) { released.current = true; continueRender(handle); }
      return;
    }
    const [fu, fv] = c.focus!;

    // ---------- colors (all from props) ----------
    const P = rgbOf(primary), Sx = rgbOf(secondary), T = rgbOf(color);
    const BG = transparent ? (dark ? mixRGB(P, [0, 0, 0], 0.9) : [255, 255, 255] as RGB) : rgbOf(background);
    const pcb: RGB = dark ? mixRGB(transparent ? P : BG, [0, 0, 0], transparent ? 0.88 : 0.55) : mixRGB(T, [0, 0, 0], 0.4);
    const ring: RGB = mixRGB(P, [255, 255, 255], 0.45);
    const off: RGB = mixRGB(pcb, [255, 255, 255], 0.05); // an unlit diode: a dim dome

    // ---------- camera ----------
    const s = Math.exp(logS);
    // One camera: a uniform zoom about the wall's rest center, looking at a point that glides from
    // the focus (close-up) to the wall center (rest). Every pixel scales continuously, no cut.
    // k eases the look-at point home early, so mid-pullback the whole wall is centered with its edges in view.
    const k = Math.pow(clamp01(logS / Math.log(S0)), 1.6);
    const drift = 1 - easeInOut(ramp(frame, T_DRIFT, [0, 1]));
    const A = { x: wall.x + wall.w / 2, y: wall.y + wall.h / 2 }; // screen point the camera looks through
    const Pw = {
      x: A.x + (wall.x + fu * wall.w - A.x) * k + cell * 1.8 * drift,
      y: A.y + (wall.y + fv * wall.h - A.y) * k - cell * 0.7 * drift,
    };
    const wS: Rect = { x: A.x + (wall.x - Pw.x) * s, y: A.y + (wall.y - Pw.y) * s, w: wall.w * s, h: wall.h * s };
    const cS = cell * s;
    const vis = {
      x0: Math.max(0, Math.floor(wS.x)), y0: Math.max(0, Math.floor(wS.y)),
      x1: Math.min(W, Math.ceil(wS.x + wS.w)), y1: Math.min(H, Math.ceil(wS.y + wS.h)),
    };
    const hasWall = vis.x1 > vis.x0 && vis.y1 > vis.y0;
    const macro = smooth(2.4, 9, s);
    const maskK = 0.22 + 0.78 * smooth(1, 4, s);
    const sharp = 1 - smooth(1.15, 3.2, s);

    // ---------- 1. diode colors: brand boot pattern -> screenshot, behind a wavefront ----------
    const gImg = c.gImg!, od = c.gOut!.data, flick = c.flick!, noise = c.noise!;
    const fcx = fu * cols, fcy = fv * rows;
    const maxD = Math.max(Math.hypot(fcx, fcy), Math.hypot(cols - fcx, fcy), Math.hypot(fcx, rows - fcy), Math.hypot(cols - fcx, rows - fcy));
    // The wavefront starts on the focus diode and clears every visible diode by T_REFRESH[1].
    const fsx = wS.x + fu * wS.w, fsy = wS.y + fv * wS.h;
    const reach = Math.min(maxD, Math.max(Math.hypot(fsx, fsy), Math.hypot(W - fsx, fsy), Math.hypot(fsx, H - fsy), Math.hypot(W - fsx, H - fsy)) / cS) + 3;
    const R = (reach * 1.25 + 2) * easeOut(ramp(frame, T_REFRESH, [0, 1]));
    const band = Math.max(1.2, R * 0.16);
    const done = frame >= T_REFRESH[1];
    const tz = frame * 0.018;
    for (let y = 0, i = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++, i++) {
        const o = i * 4;
        if (done) {
          od[o] = gImg[o]!; od[o + 1] = gImg[o + 1]!; od[o + 2] = gImg[o + 2]!; od[o + 3] = 255;
          continue;
        }
        const d = Math.hypot(x + 0.5 - fcx, y + 0.5 - fcy);
        // power-on flicker
        const ft = frame - flick[i]!;
        let on = clamp01(ft / 3);
        if (ft > 0.5 && ft < 2.5) on *= 0.35;
        const rev = clamp01((R - d) / Math.max(0.6, band * 0.35));
        let r: number, g: number, b: number;
        if (rev >= 1) { r = gImg[o]!; g = gImg[o + 1]!; b = gImg[o + 2]!; }
        else {
          const n1 = noise(x * 0.045, y * 0.045, tz);
          const n2 = noise(x * 0.16 + 9, y * 0.16, tz * 1.7);
          const m = smooth(-0.55, 0.55, n1 + 0.35 * Math.sin((x + y) * 0.03 + frame * 0.05));
          const lum = 0.72 + 0.28 * n2;
          let br = P[0] + (Sx[0] - P[0]) * m, bgc = P[1] + (Sx[1] - P[1]) * m, bb = P[2] + (Sx[2] - P[2]) * m;
          br *= lum; bgc *= lum; bb *= lum;
          r = br + (gImg[o]! - br) * rev; g = bgc + (gImg[o + 1]! - bgc) * rev; b = bb + (gImg[o + 2]! - bb) * rev;
        }
        // wavefront: a bright ring just inside the refresh radius
        const w = R > 0.2 ? clamp01(1 - Math.abs(d - (R - band * 0.5)) / (band * 0.5)) : 0;
        if (w > 0) {
          const ww = w * w * (0.85 - 0.55 * (1 - smooth(0, 6, R)));
          r += (ring[0] * 1.15 - r) * ww; g += (ring[1] * 1.15 - g) * ww; b += (ring[2] * 1.15 - b) * ww;
        }
        od[o] = off[0] + (r - off[0]) * on; od[o + 1] = off[1] + (g - off[1]) * on; od[o + 2] = off[2] + (b - off[2]) * on; od[o + 3] = 255;
      }
    }
    ctx2d(c.G!).putImageData(c.gOut!, 0, 0);

    const L = c.L!, D = c.D!;
    const lx = ctx2d(L), dx = ctx2d(D);
    const reset = (x: Ctx) => {
      x.setTransform(1, 0, 0, 1, 0, 0);
      x.globalCompositeOperation = "source-over";
      x.globalAlpha = 1;
      x.filter = "none";
      x.imageSmoothingEnabled = true;
      x.imageSmoothingQuality = "low";
    };
    reset(lx);
    lx.clearRect(0, 0, W, H);

    if (hasWall) {
      const vw = vis.x1 - vis.x0, vh = vis.y1 - vis.y0;
      const c0 = Math.max(0, Math.floor((vis.x0 - wS.x) / cS)), c1 = Math.min(cols, Math.ceil((vis.x1 - wS.x) / cS));
      const r0 = Math.max(0, Math.floor((vis.y0 - wS.y) / cS)), r1 = Math.min(rows, Math.ceil((vis.y1 - wS.y) / cS));
      const ts = Math.max(8, Math.min(TILE, Math.round(cS)));
      const pm = new DOMMatrix().translateSelf(wS.x, wS.y).scaleSelf(cS / ts, cS / ts);
      const drawGrid = (x: Ctx) => {
        x.imageSmoothingEnabled = false;
        x.drawImage(c.G!, c0, r0, c1 - c0, r1 - r0, wS.x + c0 * cS, wS.y + r0 * cS, (c1 - c0) * cS, (r1 - r0) * cS);
        x.imageSmoothingEnabled = true;
      };

      // 2. diode colors: the grid (and the sharp screenshot near rest), then the dark face between the domes
      lx.fillStyle = hexRGB(pcb);
      lx.fillRect(vis.x0, vis.y0, vw, vh);
      if (sharp < 1) drawGrid(lx);
      if (sharp > 0) {
        lx.globalAlpha = sharp;
        lx.drawImage(c.WI!, wS.x, wS.y, wS.w, wS.h);
        lx.globalAlpha = 1;
      }
      drawGapTile(c.tGap!, hexRGB(pcb), maskK, 0.035 + 0.1 * (1 - macro), ts);
      const gp = lx.createPattern(c.tGap!, "repeat")!;
      gp.setTransform(pm);
      lx.fillStyle = gp;
      lx.fillRect(vis.x0, vis.y0, vw, vh);

      // 3. the wall: module seams, hot cores, dome glints
      const seamA = 0.55 * smooth(1.2, 3, s) * (1 - smooth(10, 22, s)) + 0.12;
      if (seamA > 0.01) {
        lx.fillStyle = withAlpha(hexRGB(mixRGB(pcb, [0, 0, 0], 0.5)), seamA);
        const sw = Math.max(1, cS * 0.14);
        for (let m = 16; m < cols; m += 16) {
          const x = wS.x + m * cS - sw / 2;
          if (x > -sw && x < W) lx.fillRect(x, vis.y0, sw, vh);
        }
        for (let m = 16; m < rows; m += 16) {
          const y = wS.y + m * cS - sw / 2;
          if (y > -sw && y < H) lx.fillRect(vis.x0, y, vw, sw);
        }
      }
      if (macro > 0.02) {
        drawCoreTile(c.tCore!, ts);
        drawSpecTile(c.tSpec!, ts);
        reset(dx);
        dx.clearRect(0, 0, D.width, D.height);
        dx.setTransform(D.width / W, 0, 0, D.height / H, 0, 0);
        drawGrid(dx);
        const cp = dx.createPattern(c.tCore!, "repeat")!;
        cp.setTransform(pm);
        dx.globalCompositeOperation = "destination-in";
        dx.fillStyle = cp;
        dx.fillRect(vis.x0, vis.y0, vw, vh);
        lx.globalCompositeOperation = "lighter";
        lx.globalAlpha = 0.95 * macro;
        lx.drawImage(D, 0, 0, W, H);
        const sp = lx.createPattern(c.tSpec!, "repeat")!;
        sp.setTransform(pm);
        lx.globalAlpha = macro;
        lx.fillStyle = sp;
        lx.fillRect(vis.x0, vis.y0, vw, vh);
        reset(lx);
      }

      // Bezel around the panel, visible once the wall is in view.
      const b = 0.85 * u * s;
      const bez = dark ? hexRGB(mixRGB(BG, T, 0.09)) : hexRGB(mixRGB(BG, [255, 255, 255], 0.6));
      lx.beginPath();
      lx.roundRect(wS.x - b, wS.y - b, wS.w + 2 * b, wS.h + 2 * b, b * 0.9);
      lx.rect(wS.x + wS.w, wS.y, -wS.w, wS.h);
      lx.fillStyle = bez;
      lx.fill("evenodd");
      lx.lineWidth = Math.max(1, 0.08 * u * s);
      lx.strokeStyle = dark ? withAlpha(color, 0.16) : withAlpha(color, 0.2);
      lx.beginPath();
      lx.roundRect(wS.x - b, wS.y - b, wS.w + 2 * b, wS.h + 2 * b, b * 0.9);
      lx.stroke();
      lx.strokeStyle = withAlpha(BLACK, dark ? 0.5 : 0.25);
      lx.strokeRect(wS.x, wS.y, wS.w, wS.h);
    }

    // ---------- 4. stage ----------
    reset(ctx);
    ctx.clearRect(0, 0, W, H);
    if (!transparent) {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, W, H);
    }
    const wake = 1 - smooth(4, 14, s); // the stage reads only once the wall is pulling back
    if (!c.back || c.backKey !== [W, H, primary, secondary, background, color, glow, avg.join(",")].join("|")) {
      c.backKey = [W, H, primary, secondary, background, color, glow, avg.join(",")].join("|");
      const bw = Math.round(W / 4), bh = Math.round(H / 4);
      c.back = newCanvas(bw, bh);
      const bx = ctx2d(c.back);
      const sc = bw / W;
      bx.scale(sc, sc);
      const wcx = wall.x + wall.w / 2, wcy = wall.y + wall.h / 2;
      const a = (dark ? 1 : 0.85) * (0.4 + 0.6 * glow);
      const blob = (x: number, y: number, rx: number, ry: number, col: string, al: number) => {
        bx.save();
        bx.translate(x, y);
        bx.scale(1, ry / rx);
        const g = bx.createRadialGradient(0, 0, 0, 0, 0, rx);
        g.addColorStop(0, withAlpha(col, al));
        g.addColorStop(0.45, withAlpha(col, al * 0.45));
        g.addColorStop(1, withAlpha(col, 0));
        bx.fillStyle = g;
        bx.fillRect(-rx, -rx, 2 * rx, 2 * rx);
        bx.restore();
      };
      // Light the wall throws on the set behind and around it.
      blob(wcx, wcy, wall.w * 0.82, wall.h * 0.95, hexRGB(avg), 0.32 * a);
      blob(wall.x, wall.y + wall.h * 0.2, wall.w * 0.5, wall.h * 0.9, primary, 0.42 * a);
      blob(wall.x + wall.w, wall.y + wall.h * 0.8, wall.w * 0.5, wall.h * 0.9, secondary, 0.38 * a);
      // Two stage beams from above, crossing behind the wall.
      const beam = (x0: number, x1: number, col: string, al: number) => {
        const top = -0.08 * H, bot = wall.y + wall.h;
        const g = bx.createLinearGradient(x0, top, x1, bot);
        g.addColorStop(0, withAlpha(col, al));
        g.addColorStop(1, withAlpha(col, 0));
        bx.fillStyle = g;
        bx.beginPath();
        bx.moveTo(x0 - 0.01 * W, top);
        bx.lineTo(x0 + 0.01 * W, top);
        bx.lineTo(x1 + 0.13 * W, bot);
        bx.lineTo(x1 - 0.13 * W, bot);
        bx.closePath();
        bx.fill();
      };
      bx.filter = `blur(${Math.max(2, Math.round(bw * 0.012))}px)`;
      beam(0.16 * W, wcx - wall.w * 0.18, primary, (dark ? 0.4 : 0.42) * (0.5 + 0.5 * glow));
      beam(0.84 * W, wcx + wall.w * 0.18, secondary, (dark ? 0.36 : 0.4) * (0.5 + 0.5 * glow));
      bx.filter = "none";
    }
    if (wake > 0.001 && !transparent) {
      ctx.globalAlpha = wake;
      ctx.drawImage(c.back, A.x - Pw.x * s, A.y - Pw.y * s, W * s, H * s);
      ctx.globalAlpha = 1;
    }

    const yb = wS.y + wS.h + 0.85 * u * s; // floor line under the bezel
    if (yb < H && wake > 0.001) {
      // Floor: a faint plane that darkens (or warms) toward the viewer, and the wall's light pool.
      if (!transparent) {
        const fg = ctx.createLinearGradient(0, yb, 0, H);
        fg.addColorStop(0, withAlpha(color, dark ? 0.03 : 0.045));
        fg.addColorStop(1, withAlpha(color, dark ? 0.08 : 0.1));
        ctx.globalAlpha = wake;
        ctx.fillStyle = fg;
        ctx.fillRect(0, yb, W, H - yb);
        ctx.fillStyle = withAlpha(color, dark ? 0.12 : 0.16);
        ctx.fillRect(0, yb, W, Math.max(1, 0.08 * u));
      }
      ctx.save();
      ctx.globalAlpha = wake;
      ctx.translate(wS.x + wS.w / 2, yb);
      ctx.scale(1, 0.09);
      const pr = wS.w * 0.62;
      const pg = ctx.createRadialGradient(0, 0, 0, 0, 0, pr);
      if (dark) {
        pg.addColorStop(0, withAlpha(hexRGB(mixRGB(avg, P, 0.4)), 0.5 * glow));
        pg.addColorStop(1, withAlpha(hexRGB(avg), 0));
      } else {
        pg.addColorStop(0, withAlpha(color, 0.22));
        pg.addColorStop(0.5, withAlpha(color, 0.08));
        pg.addColorStop(1, withAlpha(color, 0));
      }
      ctx.fillStyle = pg;
      ctx.fillRect(-pr, -pr, 2 * pr, 2 * pr);
      ctx.restore();

      // Glossy floor reflection.
      if (reflection && hasWall) {
        const R2 = c.R!, rx = ctx2d(R2);
        reset(rx);
        rx.clearRect(0, 0, R2.width, R2.height);
        rx.setTransform(0.25, 0, 0, -0.25, 0, yb / 2);
        rx.drawImage(L, 0, 0);
        reset(rx);
        rx.globalCompositeOperation = "destination-in";
        const rh = Math.min(wS.h * 0.42, H * 0.16);
        const rg = rx.createLinearGradient(0, yb / 4, 0, (yb + rh) / 4);
        rg.addColorStop(0, withAlpha(WHITE, dark ? 0.34 : 0.24));
        rg.addColorStop(0.4, withAlpha(WHITE, dark ? 0.12 : 0.08));
        rg.addColorStop(1, withAlpha(WHITE, 0));
        rx.fillStyle = rg;
        rx.fillRect(0, 0, R2.width, R2.height);
        const ry = Math.max(0, Math.floor(yb / 4));
        if (ry < R2.height) {
          ctx.globalAlpha = wake;
          ctx.drawImage(R2, 0, ry, R2.width, R2.height - ry, 0, ry * 4, W, H - ry * 4);
          ctx.globalAlpha = 1;
        }
      }
    }

    // Light brands: a soft contact shadow lifts the wall off the pale stage.
    if (!dark && hasWall && wake > 0.001) {
      const sh = 2.6 * u * Math.min(2, s);
      const sg = ctx.createLinearGradient(0, yb - 0.3 * sh, 0, yb + sh);
      sg.addColorStop(0, withAlpha(color, 0.2 * wake));
      sg.addColorStop(1, withAlpha(color, 0));
      ctx.fillStyle = sg;
      ctx.fillRect(wS.x - 0.6 * u * s, yb - 0.3 * sh, wS.w + 1.2 * u * s, 1.3 * sh);
    }

    // ---------- 5. bloom under the wall (light spill), the wall, motion blur ----------
    const bloomReady = hasWall && glow > 0;
    if (bloomReady) {
      const B1 = c.B1!, B2 = c.B2!;
      const b1 = ctx2d(B1), b2 = ctx2d(B2);
      reset(b1); reset(b2);
      b1.clearRect(0, 0, B1.width, B1.height);
      b1.filter = `blur(${Math.max(1, B1.width * 0.004 + macro * B1.width * 0.006).toFixed(1)}px)`;
      b1.drawImage(L, 0, 0, B1.width, B1.height);
      b2.clearRect(0, 0, B2.width, B2.height);
      b2.filter = `blur(${Math.max(1.5, B2.width * 0.014).toFixed(1)}px)`;
      b2.drawImage(L, 0, 0, B2.width, B2.height);
      // Light spill around the wall only: the opaque wall covers the rest, so skip those pixels.
      const covers = wS.x <= 0 && wS.y <= 0 && wS.x + wS.w >= W && wS.y + wS.h >= H;
      if (!covers) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, W, H);
        ctx.rect(wS.x + 1, wS.y + 1, wS.w - 2, wS.h - 2);
        ctx.clip("evenodd");
        ctx.globalCompositeOperation = dark ? "lighter" : "screen";
        ctx.globalAlpha = glow * (dark ? 0.75 : 0.5);
        ctx.drawImage(B2, 0, 0, W, H);
        ctx.globalAlpha = glow * (dark ? 0.45 : 0.3);
        ctx.drawImage(B1, 0, 0, W, H);
        ctx.restore();
        reset(ctx);
      }
    }
    ctx.drawImage(L, 0, 0);
    // Bloom over the wall: only in the close-up (glowing diodes); the screenshot stays clean once it reads.
    if (bloomReady && macro > 0.02) {
      ctx.globalCompositeOperation = "screen";
      ctx.globalAlpha = glow * (0.1 + 0.7 * macro);
      ctx.drawImage(c.B1!, 0, 0, W, H);
      ctx.globalAlpha = glow * (0.08 + 0.4 * macro);
      ctx.drawImage(c.B2!, 0, 0, W, H);
      reset(ctx);
    }

    // ---------- 6. the audience: foreground silhouettes rim-lit by the stage lights ----------
    const crowdIn = 1 - smooth(1, 3.4, s);
    if (crowdIn > 0.001) {
      const ck = [W, H, aspect, primary, secondary, background, color, dark].join("|");
      if (!c.crowd || c.crowdKey !== ck) {
        c.crowdKey = ck;
        c.crowd = buildCrowd(W, H, aspect, u, dark ? hexRGB(mixRGB(BG, [0, 0, 0], 0.62)) : hexRGB(mixRGB(T, BG, 0.08)), primary, secondary);
      }
      const lift = (1 - easeOut(crowdIn)) * H * 0.22;
      const cs = 1 + 0.08 * (1 - crowdIn);
      ctx.save();
      ctx.translate(W / 2, H);
      ctx.scale(cs, cs);
      ctx.drawImage(c.crowd, -W / 2, -c.crowd.height + lift);
      ctx.restore();
    }

    // Transparent backdrop: fade the edges so the corners are empty.
    if (transparent) {
      ctx.save();
      ctx.globalCompositeOperation = "destination-in";
      ctx.translate(W / 2, H / 2);
      ctx.scale(W / 2, H / 2);
      const m = ctx.createRadialGradient(0, 0, 0, 0, 0, 1.38);
      m.addColorStop(0, withAlpha(WHITE, 1));
      m.addColorStop(0.72, withAlpha(WHITE, 1));
      m.addColorStop(1, withAlpha(WHITE, 0));
      ctx.fillStyle = m;
      ctx.fillRect(-1, -1, 2, 2);
      ctx.restore();
    }

    if (staticKey) {
      c.final = c.final && c.final.width === W && c.final.height === H ? c.final : newCanvas(W, H);
      const fx = ctx2d(c.final);
      fx.clearRect(0, 0, W, H);
      fx.drawImage(out, 0, 0);
      c.finalKey = staticKey;
    }
    if (!released.current) {
      released.current = true;
      continueRender(handle);
    }
  }, [frame, W, H, geo, ready, nat, src, dark, transparent, background, color, primary, secondary, focusX, focusY, glow, reflection, logS, handle]);

  // ---------- caption ----------
  const tb = geo.titleBox;
  const fs = fitFontSize({ chars: title.length, boxW: tb.w, boxH: tb.h, lines: tb.lines, charEm: 0.54, lineHeight: 1.18, max: tb.max, min: tb.min });
  const tIn = easeOut(ramp(frame, T_TITLE, [0, 1]));

  return (
    <AbsoluteFill style={{ background: transparent ? "transparent" : background, overflow: "hidden" }}>
      <div
        data-21st-slot="screenshot"
        style={{ position: "absolute", left: geo.wall.x, top: geo.wall.y, width: geo.wall.w, height: geo.wall.h, overflow: "hidden" }}
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
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      <canvas ref={canvasRef} width={W} height={H} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      {title ? (
        <div
          style={{
            position: "absolute",
            left: (W - tb.w) / 2,
            width: tb.w,
            top: geo.titleY - (fs * 1.18 * tb.lines) / 2,
            display: "flex",
            justifyContent: "center",
            opacity: tIn,
            transform: `translateY(${((1 - tIn) * unit * 2.2).toFixed(2)}px)`,
            filter: tIn < 1 ? `blur(${((1 - tIn) * unit * 0.6).toFixed(2)}px)` : undefined,
          }}
        >
          <div
            data-21st-slot="title"
            style={{
              fontFamily: font,
              fontWeight: 600,
              fontSize: fs,
              lineHeight: 1.18,
              letterSpacing: "-0.02em",
              color,
              textAlign: "center",
              maxWidth: "100%",
              overflowWrap: "break-word",
            }}
          >
            {title}
          </div>
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
