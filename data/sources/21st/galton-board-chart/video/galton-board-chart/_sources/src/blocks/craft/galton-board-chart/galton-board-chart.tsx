// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef } from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, band, brandFontStack, fitFontSize, luminance, rise, springSnap, useLayout, withAlpha } from "../../../kit/index";
import { rng } from "../_lib/noise";
import type { schema } from "./galton-board-chart.schema";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];
type Rect = { x: number; y: number; w: number; h: number };

/** Glow layer resolution relative to the frame: glow is soft, half res is invisible. */
const GLOW = 0.5;
/** Frames from the funnel to the first peg. */
const DROP = 6;
/** First ball leaves the funnel; the last one leaves at SPAWN0 + SPAWN_LEN. */
const SPAWN0 = 8;
const SPAWN_LEN = 96;
/** Frames the closing curve takes to draw across the stacks. */
const CURVE_LEN = 24;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='5' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

// ---------- color: parse, OKLab blend (clean hues between any two brand colors) ----------

function parseColor(c: string): RGB | null {
  let hex = /^#([0-9a-f]{3,8})$/i.exec(c)?.[1];
  if (hex) {
    if (hex.length < 6) hex = hex.slice(0, 3).split("").map((x) => x + x).join("");
    const n = parseInt(hex.slice(0, 6), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  const m = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(c);
  return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : null;
}
const toLin = (v: number) => {
  const s = v / 255;
  return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
};
const fromLin = (v: number) => {
  const s = v <= 0.0031308 ? 12.92 * v : 1.055 * Math.pow(Math.max(0, v), 1 / 2.4) - 0.055;
  return Math.round(clamp01(s) * 255);
};
function toOklab([r, g, b]: RGB): RGB {
  const R = toLin(r), G = toLin(g), B = toLin(b);
  const l = Math.cbrt(0.4122214708 * R + 0.5363325363 * G + 0.0514459929 * B);
  const m = Math.cbrt(0.2119034982 * R + 0.6806995451 * G + 0.1073969566 * B);
  const s = Math.cbrt(0.0883024619 * R + 0.2817188376 * G + 0.6299787005 * B);
  return [0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s, 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s, 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s];
}
function fromOklab([L, a, b]: RGB): RGB {
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [fromLin(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s), fromLin(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s), fromLin(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s)];
}
function mixOk(a: RGB, b: RGB, t: number): RGB {
  const A = toOklab(a), B = toOklab(b);
  return fromOklab([A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t, A[2] + (B[2] - A[2]) * t]);
}
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const css = (c: RGB, a = 1) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${a.toFixed(3)})`;
const WHITE: RGB = [255, 255, 255];
const BLACK: RGB = [0, 0, 0];
/** Legend swatch: a tiny lit bead in the bin's brand-derived color. */
function beadSwatch(c: RGB): string {
  const hi = css(mix(c, WHITE, 0.5));
  const mid = css(c);
  const lo = css(mix(c, BLACK, 0.4));
  return `radial-gradient(circle at 35% 30%, ${hi}, ${mid} 55%, ${lo})`;
}

// ---------- numbers ----------

function fmt(v: number): string {
  const a = Math.abs(v);
  if (a >= 1e6) return `${(v / 1e6).toFixed(a >= 1e7 ? 0 : 1)}M`;
  if (a >= 1e4) return `${(v / 1e3).toFixed(a >= 1e5 ? 0 : 1)}k`;
  if (a < 100 && Math.round(v) !== v) return v.toFixed(1);
  return Math.round(v).toLocaleString("en-US");
}
function fmtTotal(v: number, decimals: number): string {
  return v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

// ---------- board geometry ----------

type Geo = {
  N: number; m: number; R: number; s: number; rowH: number; p: number; rb: number;
  cx: number; funnelTop: number; mouthY: number; row0Y: number; floorY: number; binsTop: number;
  binW: number; binsLeft: number; cols: number; colGap: number; rowStep: number; rowsMax: number;
  g: number; hop: number;
};

function buildGeo(rect: Rect, N: number, pegF: number, valueSpace: number): Geo {
  // Slots per bin: at least two, and enough rows that the board reads as a Galton board.
  const m = Math.max(2, Math.ceil(10 / N));
  const R = N * m - 1;
  const spoutH = rect.h * 0.075;
  const pegH = rect.h * pegF;
  const gapH = rect.h * 0.03;
  const binsH = rect.h - spoutH - pegH - gapH;
  const s = Math.min(rect.w / (R + 1), pegH / ((R - 0.3) * 0.5));
  const rowH = Math.min(0.84 * s, pegH / (R - 0.3));
  const used = spoutH + (R - 0.3) * rowH + gapH + binsH;
  const top = rect.y + (rect.h - used) / 2;
  const p = s * 0.085;
  const rb = s * 0.22;
  const binW = m * s;
  // Balls pack into one tight bar per bin, with air between neighbouring bars.
  const pad = s * 0.24;
  const cols = Math.max(1, Math.floor((binW - pad * 2) / (rb * 2.04)));
  const colGap = rb * 2.04;
  const rowStep = rb * 2 * 0.95;
  const fillH = binsH - valueSpace - rb * 0.4;
  const rowsMax = Math.max(2, Math.floor((fillH - rb * 2) / rowStep) + 1);
  const row0Y = top + spoutH;
  const floorY = top + used;
  return {
    N, m, R, s, rowH, p, rb,
    cx: rect.x + rect.w / 2,
    funnelTop: top,
    mouthY: top + spoutH * 0.55,
    row0Y,
    floorY,
    binsTop: floorY - binsH,
    binW,
    binsLeft: rect.x + rect.w / 2 - ((R + 1) / 2) * s,
    cols, colGap, rowStep, rowsMax,
    g: rowH * 0.075,
    hop: Math.max(1.9, Math.min(3.2, 30 / R)),
  };
}
const pegX = (g: Geo, r: number, j: number) => g.cx + (j - r / 2) * g.s;
const pegY = (g: Geo, r: number) => g.row0Y + r * g.rowH;
const binCenter = (g: Geo, b: number) => g.binsLeft + (b + 0.5) * g.binW;

// ---------- precomputed run: every ball's path, every peg hit ----------

type Ball = {
  bin: number; spawn: number; hop: number; sx: number;
  X: Float32Array; Y: Float32Array; bh: Float32Array; // contacts 0..R-1, exit at R
  entry: number; land: number; restX: number; restY: number; row: number; v0: number;
};
type Run = {
  balls: Ball[];
  counts: number[];
  /** Per bin: land times sorted, with the stack row of each landing. */
  lands: { t: number; row: number }[][];
  done: number[];
  allDone: number;
  hits: { t: number; c: number }[][];
};

function simulate(g: Geo, values: number[], seed: number): Run {
  const r = rng(`galton-${seed}-${g.N}-${g.R}`);
  const maxV = Math.max(...values, 1e-9);
  const maxBalls = g.rowsMax * g.cols;
  const counts = values.map((v) => (v <= 0 ? 0 : Math.max(1, Math.round((v / maxV) * maxBalls))));
  // Bin of every ball, shuffled so all bins fill at once.
  const order: number[] = [];
  counts.forEach((c, b) => { for (let i = 0; i < c; i++) order.push(b); });
  for (let i = order.length - 1; i > 0; i--) { const k = Math.floor(r() * (i + 1)); [order[i], order[k]] = [order[k]!, order[i]!]; }
  const B = order.length;
  const pegCount = (g.R * (g.R + 1)) / 2;
  const hits: { t: number; c: number }[][] = Array.from({ length: pegCount }, () => []);
  const balls: Ball[] = order.map((bin, i) => {
    const u = B > 1 ? i / (B - 1) : 0.5;
    // A trickle, a torrent, a trickle: arcsine spacing thins both ends of the stream.
    const shape = 0.65 * u + 0.35 * (0.5 + Math.asin(2 * u - 1) / Math.PI);
    const spawn = SPAWN0 + SPAWN_LEN * shape + (r() - 0.5) * 0.4;
    const hop = g.hop * (0.95 + 0.1 * r());
    // Exit slot inside the target bin, then a seeded order of exactly that many right turns.
    const slot = bin * g.m + Math.floor(r() * g.m);
    const steps: number[] = [];
    for (let k = 0; k < g.R; k++) steps.push(k < slot ? 1 : 0);
    for (let k = steps.length - 1; k > 0; k--) { const q = Math.floor(r() * (k + 1)); [steps[k], steps[q]] = [steps[q]!, steps[k]!]; }
    const X = new Float32Array(g.R + 1);
    const Y = new Float32Array(g.R + 1);
    const bh = new Float32Array(g.R);
    let j = 0;
    for (let row = 0; row < g.R; row++) {
      const dir = steps[row] ? 1 : -1;
      X[row] = pegX(g, row, j) + dir * g.s * (0.03 + 0.06 * r());
      Y[row] = pegY(g, row) - (g.p + g.rb) * 0.94;
      bh[row] = g.rowH * (0.12 + 0.16 * r());
      hits[(row * (row + 1)) / 2 + j]!.push({ t: spawn + DROP + row * hop, c: bin });
      j += steps[row]!;
    }
    X[g.R] = g.cx + (j - g.R / 2) * g.s;
    Y[g.R] = pegY(g, g.R - 1) + g.rowH * 0.7;
    const last = g.R - 1;
    const v0 = (2 * (Y[g.R]! - Y[last]!) + 4 * bh[last]!) / hop;
    return { bin, spawn, hop, sx: g.cx + (r() - 0.5) * g.rb * 0.5, X, Y, bh, entry: spawn + DROP + g.R * hop, land: 0, restX: 0, restY: 0, row: 0, v0 };
  });
  // Stack in arrival order; a later ball never lands before the one under it.
  const lands: { t: number; row: number }[][] = [];
  const done: number[] = [];
  for (let b = 0; b < g.N; b++) {
    const mine = balls.filter((x) => x.bin === b).sort((a, c) => a.entry - c.entry);
    let prev = -Infinity;
    const list: { t: number; row: number }[] = [];
    mine.forEach((ball, k) => {
      const row = Math.floor(k / g.cols);
      const col = k % g.cols;
      // The top row may be partial: keep it centred on the bar.
      const inRow = Math.min(g.cols, mine.length - row * g.cols);
      const jx = (r() - 0.5) * g.rb * 0.06;
      ball.row = row;
      ball.restX = binCenter(g, b) + (col - (inRow - 1) / 2) * g.colGap + jx;
      ball.restY = g.floorY - g.rb - row * g.rowStep;
      const d = Math.max(1, ball.restY - ball.Y[g.R]!);
      const natural = (-ball.v0 + Math.sqrt(ball.v0 * ball.v0 + 2 * g.g * d)) / g.g;
      ball.land = Math.max(ball.entry + natural, prev + 0.35);
      prev = ball.land;
      list.push({ t: ball.land, row });
    });
    lands.push(list);
    done.push(list.length ? list[list.length - 1]!.t + 3 : SPAWN0 + SPAWN_LEN);
  }
  for (const h of hits) h.sort((a, b) => a.t - b.t);
  return { balls, counts, lands, done, allDone: Math.max(...done), hits };
}

/** Ball center at fractional frame t, or null before it spawns. */
function ballAt(g: Geo, b: Ball, t: number): { x: number; y: number; a: number; k: number; flying: boolean } | null {
  if (t < b.spawn) return null;
  const u = t - b.spawn;
  if (u < DROP) {
    const k = u / DROP;
    return { x: b.sx + (b.X[0]! - b.sx) * k, y: g.funnelTop + g.rb + (b.Y[0]! - g.funnelTop - g.rb) * k * k, a: clamp01(u / 2.5), k: 0.55 + 0.45 * clamp01(u / 3), flying: true };
  }
  if (t < b.entry) {
    const q = (u - DROP) / b.hop;
    const i = Math.min(g.R - 1, Math.floor(q));
    const tt = q - i;
    const x0 = b.X[i]!, x1 = b.X[i + 1]!, y0 = b.Y[i]!, y1 = b.Y[i + 1]!;
    return { x: x0 + (x1 - x0) * tt * (2 - tt), y: y0 + (y1 - y0) * tt * tt - b.bh[i]! * 4 * tt * (1 - tt), a: 1, k: 1, flying: true };
  }
  const ex = b.X[g.R]!, ey = b.Y[g.R]!;
  if (t < b.land) {
    const T = b.land - b.entry;
    const tau = (t - b.entry) / T;
    const d = b.restY - ey;
    const lin = clamp01((b.v0 * T) / Math.max(1, d));
    return { x: ex + (b.restX - ex) * tau * (2 - tau), y: ey + d * (lin * tau + (1 - lin) * tau * tau), a: 1, k: 1, flying: true };
  }
  const dt = t - b.land;
  const bounce = dt < 10 ? g.rb * 0.5 * Math.abs(Math.sin((Math.PI * dt) / 3.4)) * Math.exp(-dt / 2.4) : 0;
  return { x: b.restX, y: b.restY - bounce, a: 1, k: 1, flying: false };
}

// ---------- sprites ----------

function makeCanvas(size: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = size;
  c.height = size;
  return c;
}
/** A lit sphere: highlight top-left, rim light bottom-right, a specular dot. */
function ballSprite(col: RGB, radius: number, dark: boolean): HTMLCanvasElement {
  const pad = 2;
  const size = Math.ceil(radius * 2 + pad * 2);
  const c = makeCanvas(size);
  const ctx = c.getContext("2d")!;
  const o = size / 2;
  const body = ctx.createRadialGradient(o - radius * 0.38, o - radius * 0.42, radius * 0.05, o, o, radius * 1.08);
  body.addColorStop(0, css(mix(col, WHITE, dark ? 0.62 : 0.5)));
  body.addColorStop(0.32, css(mix(col, WHITE, 0.12)));
  body.addColorStop(0.72, css(col));
  body.addColorStop(1, css(mix(col, BLACK, dark ? 0.5 : 0.38)));
  ctx.fillStyle = body;
  ctx.beginPath();
  ctx.arc(o, o, radius, 0, Math.PI * 2);
  ctx.fill();
  const rim = ctx.createRadialGradient(o + radius * 0.5, o + radius * 0.6, 0, o + radius * 0.5, o + radius * 0.6, radius * 0.75);
  rim.addColorStop(0, css(mix(col, WHITE, 0.45), dark ? 0.55 : 0.3));
  rim.addColorStop(1, css(col, 0));
  ctx.fillStyle = rim;
  ctx.beginPath();
  ctx.arc(o, o, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.beginPath();
  ctx.ellipse(o - radius * 0.36, o - radius * 0.42, radius * 0.2, radius * 0.13, -0.6, 0, Math.PI * 2);
  ctx.fill();
  return c;
}
function glowSprite(col: RGB, radius: number): HTMLCanvasElement {
  const size = Math.max(4, Math.ceil(radius * 2));
  const c = makeCanvas(size);
  const ctx = c.getContext("2d")!;
  const o = size / 2;
  const gr = ctx.createRadialGradient(o, o, 0, o, o, o);
  gr.addColorStop(0, css(mix(col, WHITE, 0.25), 0.9));
  gr.addColorStop(0.25, css(col, 0.45));
  gr.addColorStop(1, css(col, 0));
  ctx.fillStyle = gr;
  ctx.fillRect(0, 0, size, size);
  return c;
}

// ---------- spline for the closing curve ----------

function splinePoints(pts: { x: number; y: number }[], per = 24): { x: number; y: number }[] {
  if (pts.length < 2) return pts;
  const out: { x: number; y: number }[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)]!, p1 = pts[i]!, p2 = pts[i + 1]!, p3 = pts[Math.min(pts.length - 1, i + 2)]!;
    for (let k = 0; k < per; k++) {
      const t = k / per;
      const cr = (a: number, b: number, c: number, d: number) => 0.5 * (2 * b + (c - a) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (3 * b - a - 3 * c + d) * t * t * t);
      out.push({ x: cr(p0.x, p1.x, p2.x, p3.x), y: cr(p0.y, p1.y, p2.y, p3.y) });
    }
  }
  out.push(pts[pts.length - 1]!);
  return out;
}

export const Component: React.FC<Props> = ({ title, total, totalLabel, items, color, primary, secondary, background, fontFamily, monoFontFamily, curve, seed, grain }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: W, height: H, aspect, portrait } = useLayout();
  const glowRef = useRef<HTMLCanvasElement>(null);
  const mainRef = useRef<HTMLCanvasElement>(null);
  const heading = brandFontStack(fontFamily);
  const mono = brandFontStack(monoFontFamily);
  const transparent = background === "transparent";
  const dark = transparent ? luminance(color) > 0.4 : luminance(background) < 0.4;
  const floorFs = portrait ? H * 0.031 : H * 0.0195;
  const N = items.length;
  const values = items.map((it) => Math.max(0, it.value));
  const valuesKey = values.join(",");

  // Regions per aspect: a text column beside the board (16:9), a title band over it (1:1, 9:16).
  const valueStrs = values.map(fmt);
  const longestVal = Math.max(3, ...valueStrs.map((v) => v.length));
  // 9:16 legend: three columns of name over value; the board takes what is left above it.
  const legCols = Math.min(3, N);
  const legRows = Math.ceil(N / legCols);
  const legCellW = (W * 0.86) / legCols;
  const legValFs = Math.max(floorFs, Math.min(H * 0.034, (legCellW * 0.88) / (longestVal * 0.62)));
  const legCellH = floorFs * 1.2 + legValFs * 1.2 + H * 0.014;
  const legTop = H * 0.962 - legRows * legCellH;
  const boardRect: Rect =
    aspect === "16:9" ? { x: W * 0.37, y: H * 0.05, w: W * 0.58, h: H * 0.8 }
      : aspect === "1:1" ? { x: W * 0.06, y: H * 0.235, w: W * 0.88, h: H * 0.635 }
        : { x: W * 0.05, y: H * 0.205, w: W * 0.9, h: legTop - H * 0.03 - H * 0.205 };
  const pegF = portrait ? 0.5 : aspect === "1:1" ? 0.44 : 0.46;
  const geo0 = useMemo(() => buildGeo(boardRect, N, pegF, 0), [boardRect.x, boardRect.y, boardRect.w, boardRect.h, N, pegF]);
  // Value labels ride on the stacks (not in 9:16, where the legend carries them).
  const valFs = portrait ? 0 : Math.max(floorFs, Math.min(H * (aspect === "1:1" ? 0.03 : 0.028), (geo0.binW * 0.92) / (longestVal * 0.62)));
  const geo = useMemo(() => buildGeo(boardRect, N, pegF, portrait ? 0 : valFs * 1.7), [geo0, valFs, portrait]);
  const run = useMemo(() => simulate(geo, values, seed), [geo, valuesKey, seed]);

  const rgbP = parseColor(primary) ?? [79, 124, 255];
  const rgbS = parseColor(secondary) ?? rgbP;
  const rgbT = parseColor(color) ?? (dark ? WHITE : BLACK);
  const binCols = useMemo(() => Array.from({ length: N }, (_, b) => mixOk(rgbP, rgbS, N > 1 ? b / (N - 1) : 0)), [primary, secondary, N]);
  const sprites = useMemo(() => {
    if (typeof document === "undefined") return null;
    return {
      ball: binCols.map((c) => ballSprite(c, Math.max(2, geo.rb), dark)),
      glow: binCols.map((c) => glowSprite(c, Math.max(4, geo.rb * 3.2 * GLOW))),
    };
  }, [binCols, geo.rb, dark]);

  const maxV = Math.max(...values, 1e-9);
  const capY = values.map((v) => geo.floorY - (2 * geo.rb - geo.rowStep) - (v / maxV) * geo.rowsMax * geo.rowStep);
  const curveStart = run.allDone + 2;

  const gw = Math.max(2, Math.round(W * GLOW));
  const gh = Math.max(2, Math.round(H * GLOW));

  useLayoutEffect(() => {
    const gctx = glowRef.current?.getContext("2d", { willReadFrequently: true });
    const ctx = mainRef.current?.getContext("2d", { willReadFrequently: true });
    if (!gctx || !ctx || !sprites) return;
    const f = frame;
    const g = geo;

    // ---------- glow layer ----------
    gctx.setTransform(1, 0, 0, 1, 0, 0);
    gctx.globalCompositeOperation = "source-over";
    gctx.globalAlpha = 1;
    gctx.filter = "none";
    gctx.clearRect(0, 0, gw, gh);
    gctx.setTransform(GLOW, 0, 0, GLOW, 0, 0);
    if (!transparent) {
      // Ambient pool of brand light under the board.
      const amb = gctx.createRadialGradient(g.cx, g.binsTop, 0, g.cx, g.binsTop, Math.max(boardRect.w, boardRect.h) * 0.62);
      amb.addColorStop(0, css(mixOk(rgbP, rgbS, 0.5), dark ? 0.16 : 0.08));
      amb.addColorStop(1, css(mixOk(rgbP, rgbS, 0.5), 0));
      gctx.fillStyle = amb;
      gctx.fillRect(0, 0, W, H);
    }
    gctx.globalCompositeOperation = dark ? "lighter" : "source-over";
    const glowK = dark ? 1 : 0.45;
    // Mouth of the funnel breathes with the stream.
    const streaming = clamp01((f - SPAWN0 + 4) / 6) * clamp01((SPAWN0 + SPAWN_LEN + 8 - f) / 14);
    if (streaming > 0) {
      const gs = sprites.glow[Math.floor(N / 2)]!;
      const R0 = g.s * 1.1;
      gctx.globalAlpha = 0.7 * streaming * glowK;
      gctx.drawImage(gs, g.cx - R0, g.mouthY - R0, R0 * 2, R0 * 2);
    }

    // ---------- main layer ----------
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, W, H);

    const boardIn = clamp01(f / 10);
    // Bin walls and floor, fading up into the board.
    const wallTop = g.binsTop - g.rowH * 0.2;
    const lw = Math.max(1, g.s * 0.028);
    ctx.lineWidth = lw;
    for (let b = 0; b <= N; b++) {
      const x = g.binsLeft + b * g.binW;
      const grd = ctx.createLinearGradient(0, wallTop, 0, g.floorY);
      grd.addColorStop(0, css(rgbT, 0));
      grd.addColorStop(1, css(rgbT, (dark ? 0.22 : 0.3) * boardIn));
      ctx.strokeStyle = grd;
      const grow = clamp01((f - 2 - b * 0.6) / 10);
      ctx.beginPath();
      ctx.moveTo(x, g.floorY - (g.floorY - wallTop) * grow);
      ctx.lineTo(x, g.floorY);
      ctx.stroke();
    }
    const left = g.binsLeft - g.s * 0.4, right = g.binsLeft + N * g.binW + g.s * 0.4;
    const fl = ctx.createLinearGradient(left, 0, right, 0);
    fl.addColorStop(0, css(rgbT, 0));
    fl.addColorStop(0.12, css(rgbT, (dark ? 0.4 : 0.5) * boardIn));
    fl.addColorStop(0.88, css(rgbT, (dark ? 0.4 : 0.5) * boardIn));
    fl.addColorStop(1, css(rgbT, 0));
    ctx.strokeStyle = fl;
    ctx.lineWidth = Math.max(1.5, g.s * 0.035);
    ctx.beginPath();
    ctx.moveTo(left, g.floorY + ctx.lineWidth / 2);
    ctx.lineTo(right, g.floorY + ctx.lineWidth / 2);
    ctx.stroke();

    // Funnel.
    const fIn = clamp01(f / 8);
    if (fIn > 0) {
      const mouth = g.rb * 1.45;
      const lip = g.s * 1.35;
      ctx.lineWidth = Math.max(1.5, g.s * 0.04);
      ctx.lineCap = "round";
      for (const side of [-1, 1]) {
        const grd = ctx.createLinearGradient(0, g.funnelTop, 0, g.mouthY);
        grd.addColorStop(0, css(rgbT, 0));
        grd.addColorStop(1, css(rgbT, (dark ? 0.6 : 0.65) * fIn));
        ctx.strokeStyle = grd;
        ctx.beginPath();
        ctx.moveTo(g.cx + side * lip, g.funnelTop);
        ctx.quadraticCurveTo(g.cx + side * mouth, g.mouthY - (g.mouthY - g.funnelTop) * 0.25, g.cx + side * mouth, g.mouthY);
        ctx.stroke();
      }
    }

    // Pegs: pop in row by row, ping on every hit, keep the color of the last ball through.
    const pegBase = css(rgbT, dark ? 0.3 : 0.5);
    for (let r = 0; r < g.R; r++) {
      const pop = springSnap(f, fps, r * 0.55, { damping: 14, stiffness: 220, mass: 0.6 });
      if (pop <= 0.001) continue;
      for (let j = 0; j <= r; j++) {
        const hs = run.hits[(r * (r + 1)) / 2 + j]!;
        let I = 0, ping = 0, c = -1;
        for (let k = 0; k < hs.length; k++) {
          const h = hs[k]!;
          if (h.t > f) break;
          const dt = f - h.t;
          I += Math.exp(-dt / 6);
          ping += Math.exp(-dt / 2.2);
          c = h.c;
        }
        const x = pegX(g, r, j), y = pegY(g, r);
        const rad = g.p * pop * (1 + 0.55 * Math.min(1, ping));
        ctx.globalAlpha = 1;
        ctx.fillStyle = pegBase;
        ctx.beginPath();
        ctx.arc(x, y, rad, 0, Math.PI * 2);
        ctx.fill();
        if (c >= 0 && I > 0.02) {
          const a = Math.min(1, I);
          ctx.globalAlpha = a;
          ctx.drawImage(sprites.ball[c]!, x - rad * 1.05, y - rad * 1.05, rad * 2.1, rad * 2.1);
          const G = g.s * (0.5 + 0.25 * Math.min(1, ping));
          gctx.globalAlpha = Math.min(0.45, I * 0.3) * glowK;
          gctx.drawImage(sprites.glow[c]!, x - G, y - G, G * 2, G * 2);
        }
      }
    }
    ctx.globalAlpha = 1;

    // Sheen: the curve's pen, then a slow sweep across the finished stacks.
    const curveP = curve ? clamp01((f - curveStart) / CURVE_LEN) : 0;
    const penEase = curveP < 0.5 ? 2 * curveP * curveP : 1 - Math.pow(-2 * curveP + 2, 2) / 2;
    const xL = g.binsLeft, xR = g.binsLeft + N * g.binW;
    let sheenX = -1e9, sheenA = 0;
    if (curve && curveP > 0 && curveP < 1) { sheenX = xL + (xR - xL) * penEase; sheenA = 1; }
    const idle = f - (curveStart + CURVE_LEN + 18);
    if (idle > 0) {
      const per = 96;
      const ph = (idle % per) / per;
      sheenX = xL - g.binW + (xR - xL + g.binW * 2) * ph;
      sheenA = 0.55 * Math.sin(Math.PI * ph);
    }

    // Balls: settled ones first, then the ones in the air with a short motion trail.
    const flying: { b: Ball; x: number; y: number; a: number; k: number }[] = [];
    const rb = g.rb;
    for (const b of run.balls) {
      const at = ballAt(g, b, f);
      if (!at) continue;
      if (at.flying) { flying.push({ b, ...at }); continue; }
      ctx.drawImage(sprites.ball[b.bin]!, at.x - rb - 2, at.y - rb - 2, rb * 2 + 4, rb * 2 + 4);
      const sinceLand = f - b.land;
      let gl = sinceLand < 12 ? Math.exp(-sinceLand / 3) * 0.9 : 0;
      if (sheenA > 0) gl += sheenA * Math.exp(-(((at.x - sheenX) / (g.binW * 0.7)) ** 2)) * 0.6;
      gl += dark ? 0.1 : 0;
      if (gl > 0.02) {
        const G = rb * 2.6;
        gctx.globalAlpha = Math.min(1, gl) * glowK;
        gctx.drawImage(sprites.glow[b.bin]!, at.x - G, at.y - G, G * 2, G * 2);
      }
    }
    for (const fb of flying) {
      const { b } = fb;
      for (let k = 3; k >= 1; k--) {
        const tp = ballAt(g, b, f - k * 0.33);
        if (!tp) continue;
        const kk = (1 - k * 0.07) * tp.k;
        ctx.globalAlpha = (0.3 - k * 0.075) * tp.a;
        ctx.drawImage(sprites.ball[b.bin]!, tp.x - rb * kk - 2, tp.y - rb * kk - 2, (rb * kk + 2) * 2, (rb * kk + 2) * 2);
      }
      ctx.globalAlpha = fb.a;
      const rr = rb * fb.k;
      ctx.drawImage(sprites.ball[b.bin]!, fb.x - rr - 2, fb.y - rr - 2, (rr + 2) * 2, (rr + 2) * 2);
      const G = rb * 2.5;
      gctx.globalAlpha = 0.32 * fb.a * glowK;
      gctx.drawImage(sprites.glow[b.bin]!, fb.x - G, fb.y - G, G * 2, G * 2);
    }
    ctx.globalAlpha = 1;

    // Closing curve through every bin's exact value.
    if (curve && curveP > 0) {
      const pts = values.map((_, b) => ({ x: binCenter(g, b), y: capY[b]! }));
      const path = splinePoints(pts, 28);
      const lens = [0];
      for (let i = 1; i < path.length; i++) lens.push(lens[i - 1]! + Math.hypot(path[i]!.x - path[i - 1]!.x, path[i]!.y - path[i - 1]!.y));
      const L = lens[lens.length - 1]! * penEase;
      const grad = ctx.createLinearGradient(pts[0]!.x, 0, pts[pts.length - 1]!.x, 0);
      grad.addColorStop(0, css(mix(binCols[0]!, dark ? WHITE : BLACK, dark ? 0.25 : 0.1)));
      grad.addColorStop(1, css(mix(binCols[N - 1]!, dark ? WHITE : BLACK, dark ? 0.25 : 0.1)));
      const trace = (c: CanvasRenderingContext2D) => {
        c.beginPath();
        c.moveTo(path[0]!.x, path[0]!.y);
        let tip = path[0]!;
        for (let i = 1; i < path.length; i++) {
          if (lens[i]! <= L) { c.lineTo(path[i]!.x, path[i]!.y); tip = path[i]!; continue; }
          const k = (L - lens[i - 1]!) / Math.max(1e-6, lens[i]! - lens[i - 1]!);
          tip = { x: path[i - 1]!.x + (path[i]!.x - path[i - 1]!.x) * k, y: path[i - 1]!.y + (path[i]!.y - path[i - 1]!.y) * k };
          c.lineTo(tip.x, tip.y);
          break;
        }
        return tip;
      };
      gctx.globalAlpha = 0.5 * glowK;
      gctx.strokeStyle = grad;
      gctx.lineWidth = Math.max(4, g.s * 0.22);
      gctx.lineCap = "round";
      gctx.lineJoin = "round";
      trace(gctx);
      gctx.stroke();
      ctx.strokeStyle = grad;
      ctx.lineWidth = Math.max(2, g.s * 0.05);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      const tip = trace(ctx);
      ctx.stroke();
      // Cap dots pop as the pen passes each bin.
      pts.forEach((pt, b) => {
        const passed = pt.x <= tip.x + 0.5 || curveP >= 1;
        if (!passed) return;
        const tPass = curveStart + CURVE_LEN * (N > 1 ? b / (N - 1) : 1) * 0.92;
        const pop = springSnap(f, fps, tPass, APPLE);
        const rr = g.s * 0.085 * pop;
        ctx.fillStyle = css(rgbT);
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, rr * 1.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = css(binCols[b]!);
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, rr, 0, Math.PI * 2);
        ctx.fill();
      });
      if (curveP < 1) {
        const G = g.s * 0.9;
        gctx.globalAlpha = glowK;
        gctx.drawImage(sprites.glow[Math.min(N - 1, Math.floor(penEase * N))]!, tip.x - G, tip.y - G, G * 2, G * 2);
      }
    }
    gctx.globalAlpha = 1;
    ctx.globalAlpha = 1;
  }, [frame, fps, geo, run, sprites, W, H, gw, gh, transparent, dark, curve, curveStart, valuesKey, N, primary, secondary, color, boardRect.x, boardRect.y, boardRect.w, boardRect.h]);

  // ---------- DOM text (slots) ----------
  const landedIn = (b: number) => {
    const l = run.lands[b]!;
    let n = 0;
    while (n < l.length && l[n]!.t <= frame) n++;
    return n;
  };
  const landed = values.map((_, b) => landedIn(b));
  const fracs = values.map((_, b) => (run.counts[b]! ? landed[b]! / run.counts[b]! : frame >= run.done[b]! ? 1 : 0));
  const sumV = values.reduce((a, v) => a + v, 0) || 1;
  const weighted = values.reduce((a, v, b) => a + v * fracs[b]!, 0) / sumV;
  const allIn = frame >= run.allDone;
  const decimals = Number.isInteger(total) ? 0 : 1;
  const totalNow = allIn ? total : total * weighted;
  const totalStr = fmtTotal(totalNow, decimals);
  const totalFinalStr = fmtTotal(total, decimals);
  const totalPop = allIn ? 1 + 0.05 * Math.sin(Math.PI * clamp01((frame - run.allDone) / 9)) : 1;

  const tIn = band(frame, 2, 16);
  const tRise = rise(frame, fps, 2, H * 0.02);

  /** Stack height in rows; a fresh row eases in so the label above it glides. */
  const stackRows = (b: number) => {
    const l = run.lands[b]!;
    let h = 0;
    for (const e of l) {
      if (e.t > frame) break;
      h = Math.max(h, e.row + Math.min(1, (frame - e.t) / 4) * (2 - Math.min(1, (frame - e.t) / 4)));
    }
    return h;
  };

  const titleChars = Math.max(8, Array.from(title).length);
  const totChars = Math.max(4, totalFinalStr.length);

  let textBlock: React.ReactNode;
  if (aspect === "16:9") {
    const colW = W * 0.27;
    const titleFs = Math.max(floorFs, fitFontSize({ chars: titleChars, boxW: colW, boxH: H * 0.22, lines: 3, charEm: 0.52, lineHeight: 1.18, max: H * 0.058 }));
    const totFs = Math.max(floorFs, fitFontSize({ chars: totChars, boxW: colW, boxH: H * 0.2, lines: 1, charEm: 0.6, lineHeight: 1.15, max: H * 0.15 }));
    textBlock = (
      <div style={{ position: "absolute", left: W * 0.07, top: 0, height: H, width: colW, display: "flex", flexDirection: "column", justifyContent: "center", gap: H * 0.03, opacity: tIn, transform: `translateY(${tRise}px)` }}>
        <div data-21st-slot="title" style={{ fontFamily: heading, fontWeight: 500, fontSize: titleFs, lineHeight: 1.18, letterSpacing: "-0.02em", color, overflowWrap: "anywhere" }}>{title}</div>
        <div>
          <div data-21st-slot="total" style={{ fontFamily: heading, fontWeight: 300, fontSize: totFs, lineHeight: 1.15, letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums", color, whiteSpace: "nowrap", transform: `scale(${totalPop})`, transformOrigin: "left center" }}>{totalStr}</div>
          <div data-21st-slot="totalLabel" style={{ fontFamily: heading, fontWeight: 400, fontSize: Math.max(floorFs, H * 0.024), lineHeight: 1.2, color: withAlpha(color, 0.6), marginTop: H * 0.006 }}>{totalLabel}</div>
        </div>
      </div>
    );
  } else if (aspect === "1:1") {
    const titleFs = Math.max(floorFs, fitFontSize({ chars: titleChars, boxW: W * 0.44, boxH: H * 0.13, lines: 2, charEm: 0.52, lineHeight: 1.18, max: H * 0.05 }));
    const totFs = Math.max(floorFs, fitFontSize({ chars: totChars, boxW: W * 0.38, boxH: H * 0.11, lines: 1, charEm: 0.6, lineHeight: 1.15, max: H * 0.095 }));
    textBlock = (
      <div style={{ position: "absolute", left: W * 0.07, right: W * 0.07, top: H * 0.065, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: W * 0.04, opacity: tIn, transform: `translateY(${tRise}px)` }}>
        <div data-21st-slot="title" style={{ maxWidth: W * 0.44, fontFamily: heading, fontWeight: 500, fontSize: titleFs, lineHeight: 1.18, letterSpacing: "-0.02em", color, overflowWrap: "anywhere", paddingTop: totFs * 0.12 }}>{title}</div>
        <div style={{ textAlign: "right", maxWidth: W * 0.4 }}>
          <div data-21st-slot="total" style={{ fontFamily: heading, fontWeight: 300, fontSize: totFs, lineHeight: 1.15, letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums", color, whiteSpace: "nowrap", transform: `scale(${totalPop})`, transformOrigin: "right center" }}>{totalStr}</div>
          <div data-21st-slot="totalLabel" style={{ fontFamily: heading, fontSize: Math.max(floorFs, H * 0.022), lineHeight: 1.2, color: withAlpha(color, 0.6), overflowWrap: "anywhere" }}>{totalLabel}</div>
        </div>
      </div>
    );
  } else {
    const titleFs = Math.max(floorFs, fitFontSize({ chars: titleChars, boxW: W * 0.86, boxH: H * 0.08, lines: 2, charEm: 0.52, lineHeight: 1.18, max: H * 0.04 }));
    const totFs = Math.max(floorFs, fitFontSize({ chars: totChars, boxW: W * 0.86, boxH: H * 0.08, lines: 1, charEm: 0.6, lineHeight: 1.15, max: H * 0.07 }));
    textBlock = (
      <div style={{ position: "absolute", left: W * 0.07, right: W * 0.07, top: H * 0.05, opacity: tIn, transform: `translateY(${tRise}px)` }}>
        <div data-21st-slot="title" style={{ fontFamily: heading, fontWeight: 500, fontSize: titleFs, lineHeight: 1.18, letterSpacing: "-0.02em", color, overflowWrap: "anywhere" }}>{title}</div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", columnGap: W * 0.03, marginTop: H * 0.008 }}>
          <div data-21st-slot="total" style={{ fontFamily: heading, fontWeight: 300, fontSize: totFs, lineHeight: 1.15, letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums", color, whiteSpace: "nowrap", transform: `scale(${totalPop})`, transformOrigin: "left center" }}>{totalStr}</div>
          <div data-21st-slot="totalLabel" style={{ fontFamily: heading, fontSize: floorFs, lineHeight: 1.2, color: withAlpha(color, 0.6), overflowWrap: "anywhere" }}>{totalLabel}</div>
        </div>
      </div>
    );
  }

  // Per-bin labels: values ride the stacks, names sit under the floor (16:9, 1:1); a legend in 9:16.
  const pops = values.map((_, b) => springSnap(frame, fps, run.done[b]!, APPLE));
  const liveStr = (b: number) => (frame >= run.done[b]! ? valueStrs[b]! : fmt(Math.round(values[b]! * fracs[b]!)));
  let binText: React.ReactNode = null;
  if (!portrait) {
    const longestName = Math.max(3, ...items.map((it) => Array.from(it.label).length));
    const nameFs = Math.max(floorFs, Math.min(H * 0.024, (geo.binW * 0.94) / (longestName * 0.56)));
    binText = items.map((it, b) => {
      const cx = binCenter(geo, b);
      const top = geo.floorY - (2 * geo.rb - geo.rowStep) - stackRows(b) * geo.rowStep;
      const y = Math.min(top, frame >= run.done[b]! ? Math.min(top, capY[b]!) : top) - valFs * 0.5;
      const started = landed[b]! > 0 || frame >= run.done[b]!;
      const pop = pops[b]!;
      const nameIn = band(frame, 10 + b * 1.5, 22 + b * 1.5);
      return (
        <React.Fragment key={b}>
          <div data-21st-slot="items" style={{ position: "absolute", left: cx - geo.binW / 2, width: geo.binW, top: y - valFs * 1.2, textAlign: "center", fontFamily: mono, fontWeight: 500, fontSize: valFs, lineHeight: 1.2, fontVariantNumeric: "tabular-nums", color, whiteSpace: "nowrap", opacity: started ? 0.42 + 0.58 * Math.min(1, pop) : 0, transform: `scale(${0.82 + 0.18 * pop})`, transformOrigin: "center bottom" }}>{liveStr(b)}</div>
          <div data-21st-slot="items" style={{ position: "absolute", left: cx - geo.binW / 2, width: geo.binW, top: geo.floorY + H * 0.016, textAlign: "center", fontFamily: heading, fontWeight: 400, fontSize: nameFs, lineHeight: 1.2, color: withAlpha(color, 0.45 + 0.4 * Math.min(1, pop)), overflowWrap: "anywhere", opacity: nameIn, transform: `translateY(${(1 - nameIn) * H * 0.01}px)` }}>{it.label}</div>
        </React.Fragment>
      );
    });
  } else {
    const colsL = legCols;
    const lx = W * 0.07, lw = W * 0.86;
    const cellW = legCellW;
    const lblFs = floorFs;
    const vFs = legValFs;
    const cellH = legCellH;
    const ly = legTop;
    binText = items.map((it, b) => {
      const row = Math.floor(b / colsL);
      const inRow = Math.min(colsL, N - row * colsL);
      const col = b - row * colsL;
      const x = lx + (lw - inRow * cellW) / 2 + col * cellW;
      const started = landed[b]! > 0 || frame >= run.done[b]!;
      const pop = pops[b]!;
      const nameIn = band(frame, 10 + b * 1.5, 22 + b * 1.5);
      return (
        <div key={b} style={{ position: "absolute", left: x, top: ly + row * cellH, width: cellW, paddingRight: W * 0.02, boxSizing: "border-box", opacity: nameIn }}>
          <div style={{ display: "flex", alignItems: "center", gap: lblFs * 0.35 }}>
            <div style={{ flex: "none", width: lblFs * 0.5, height: lblFs * 0.5, borderRadius: "50%", background: beadSwatch(binCols[b]!) }} />
            <div data-21st-slot="items" style={{ minWidth: 0, fontFamily: heading, fontSize: lblFs, lineHeight: 1.2, color: withAlpha(color, 0.5 + 0.35 * Math.min(1, pop)), overflowWrap: "anywhere" }}>{it.label}</div>
          </div>
          <div data-21st-slot="items" style={{ fontFamily: mono, fontWeight: 500, fontSize: vFs, lineHeight: 1.2, fontVariantNumeric: "tabular-nums", color, whiteSpace: "nowrap", opacity: started ? 0.4 + 0.6 * Math.min(1, pop) : 0.25, transform: `scale(${0.88 + 0.12 * pop})`, transformOrigin: "left center" }}>{started ? liveStr(b) : "0"}</div>
        </div>
      );
    });
  }

  return (
    <AbsoluteFill style={{ background }}>
      <canvas ref={glowRef} width={gw} height={gh} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
      <canvas ref={mainRef} width={W} height={H} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
      {binText}
      {textBlock}
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.05 : 0.07, mixBlendMode: "overlay" }} /> : null}
    </AbsoluteFill>
  );
};
