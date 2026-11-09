// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef } from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, expoOut, fitFontSize, luminance, ramp, springSnap, useLayout, withAlpha } from "../../../kit/index";
import type { Aspect } from "../../../kit/spec";
import { rng, simplex3 } from "../_lib/noise";
import type { schema } from "./prism-spectrum-list.schema";

type Props = z.infer<typeof schema>;
type Pt = { x: number; y: number };
/** One sample of a band's centre line: position plus band width there. */
type S = { x: number; y: number; w: number };

/** The soft light layer is drawn at half resolution and blurred; nobody can tell, and it is 4x cheaper. */
const GLOW_SCALE = 0.5;
const NOISE = simplex3("prism-spectrum-list");
/** Labels and band sweeps land with a small, quick overshoot. */
const LOCK = { damping: 14, stiffness: 160, mass: 0.7 } as const;

/** Timeline (frames at 30fps). */
const T = {
  edges: [0, 22] as const,
  beam: [4, 26] as const,
  impact: 26,
  internal: [26, 34] as const,
  slit: [22, 46] as const,
  band0: 34,
  fan: 13,
  rowDelay: 12,
  row: 40,
  label: 13,
  dim: [106, 130] as const,
};

// ---------------------------------------------------------------------------
// Color: brand colors mixed in OKLCH so any two hues blend through clean
// spectral steps, never through gray.

type Lch = { L: number; C: number; h: number };

function parseRgb(c: string): [number, number, number] | null {
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
const toGam = (v: number) => (v <= 0.0031308 ? 12.92 * v : 1.055 * Math.pow(Math.max(0, v), 1 / 2.4) - 0.055);

function toLch(rgb: [number, number, number]): Lch {
  const [r, g, b] = rgb.map(toLin) as [number, number, number];
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  return { L, C: Math.hypot(A, B), h: (Math.atan2(B, A) * 180) / Math.PI };
}

function lchToRgb(L: number, C: number, h: number): [number, number, number] {
  const a = C * Math.cos((h * Math.PI) / 180);
  const b = C * Math.sin((h * Math.PI) / 180);
  const l = Math.pow(L + 0.3963377774 * a + 0.2158037573 * b, 3);
  const m = Math.pow(L - 0.1055613458 * a - 0.0638541728 * b, 3);
  const s = Math.pow(L - 0.0894841775 * a - 1.291485548 * b, 3);
  return [
    toGam(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
    toGam(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
    toGam(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
  ];
}

const inGamut = (c: [number, number, number]) => c.every((v) => v >= -0.001 && v <= 1.001);

/** OKLCH -> #rrggbb, pulling chroma in until the color fits sRGB. */
function lchHex(L: number, C: number, h: number): string {
  let rgb = lchToRgb(L, C, h);
  if (!inGamut(rgb)) {
    let lo = 0;
    let hi = C;
    for (let k = 0; k < 16; k++) {
      const mid = (lo + hi) / 2;
      if (inGamut(lchToRgb(L, mid, h))) lo = mid;
      else hi = mid;
    }
    rgb = lchToRgb(L, lo, h);
  }
  return `#${rgb.map((v) => Math.round(Math.max(0, Math.min(1, v)) * 255).toString(16).padStart(2, "0")).join("")}`;
}

/** n band colors from primary to secondary, plus a deeper "ink" of each for small type. */
function spectrum(primary: string, secondary: string, n: number, dark: boolean): { light: string[]; ink: string[] } {
  const a = toLch(parseRgb(primary) ?? [79, 123, 255]);
  const b = toLch(parseRgb(secondary) ?? [255, 106, 61]);
  let ha = a.h;
  let hb = b.h;
  if (a.C < 0.03) ha = hb;
  if (b.C < 0.03) hb = ha;
  const dh = ((((hb - ha) % 360) + 540) % 360) - 180;
  const cMax = Math.max(a.C, b.C, 0.02);
  const light: string[] = [];
  const ink: string[] = [];
  for (let i = 0; i < n; i++) {
    const t = n > 1 ? i / (n - 1) : 0.5;
    const L0 = a.L + (b.L - a.L) * t;
    const C = Math.max(a.C + (b.C - a.C) * t, cMax * 0.82);
    const h = ha + dh * t;
    light.push(lchHex(dark ? Math.max(L0, 0.68) : Math.min(Math.max(L0, 0.55), 0.76), C, h));
    ink.push(lchHex(dark ? Math.max(L0, 0.78) : Math.min(L0, 0.5), C, h));
  }
  return { light, ink };
}

// ---------------------------------------------------------------------------
// Geometry

type Geo = {
  mode: "aim" | "comb";
  A: Pt;
  BL: Pt;
  BR: Pt;
  centroid: Pt;
  E: Pt;
  beam0: Pt;
  exitA: Pt;
  exitB: Pt;
  exitDir: Pt;
  Lx: number;
  rowTop: number;
  rowBot: number;
  textRight: number;
  rowEnd: number;
  w0: number;
  k2: number;
  trunkX: number;
  trunkW: number;
  trunkTop: number;
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerpPt = (a: Pt, b: Pt, t: number): Pt => ({ x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t) });

function cubic(p0: Pt, p1: Pt, p2: Pt, p3: Pt, t: number): Pt {
  const u = 1 - t;
  return {
    x: u * u * u * p0.x + 3 * u * u * t * p1.x + 3 * u * t * t * p2.x + t * t * t * p3.x,
    y: u * u * u * p0.y + 3 * u * u * t * p1.y + 3 * u * t * t * p2.y + t * t * t * p3.y,
  };
}

function buildGeo(W: number, H: number, aspect: Aspect, n: number): Geo {
  const portrait = aspect === "9:16";
  const cfg =
    aspect === "16:9"
      ? { cx: 0.2 * W, cy: 0.5 * H, s: 0.34 * H, phi: 0, top: 0.15 * H, bot: 0.85 * H }
      : aspect === "1:1"
        ? { cx: 0.19 * W, cy: 0.5 * H, s: 0.27 * H, phi: 0, top: 0.17 * H, bot: 0.83 * H }
        : { cx: 0.17 * W, cy: 0.135 * H, s: 0.34 * W, phi: Math.PI / 2, top: 0.31 * H, bot: 0.885 * H };
  const { cx, cy, s, phi } = cfg;
  const R = s / Math.sqrt(3);
  const cos = Math.cos(phi);
  const sin = Math.sin(phi);
  const rot = (p: Pt): Pt => ({ x: cx + p.x * cos - p.y * sin, y: cy + p.x * sin + p.y * cos });
  const rotV = (p: Pt): Pt => ({ x: p.x * cos - p.y * sin, y: p.x * sin + p.y * cos });
  const Al = { x: 0, y: -R };
  const BLl = { x: -s / 2, y: R / 2 };
  const BRl = { x: s / 2, y: R / 2 };
  const E = rot(lerpPt(BLl, Al, 0.42));
  const exitA = rot(lerpPt(BRl, Al, 0.66));
  const exitB = rot(lerpPt(BRl, Al, 0.36));
  // The incoming beam rises 12 degrees in the prism's own frame.
  const dir = rotV({ x: Math.cos((-12 * Math.PI) / 180), y: Math.sin((-12 * Math.PI) / 180) });
  let tEdge = Infinity;
  if (dir.x > 0) tEdge = Math.min(tEdge, E.x / dir.x);
  if (dir.y > 0) tEdge = Math.min(tEdge, E.y / dir.y);
  if (!Number.isFinite(tEdge)) tEdge = Math.hypot(W, H);
  const beam0 = { x: E.x - dir.x * tEdge, y: E.y - dir.y * tEdge };
  const exitDir = rotV({ x: 0.97, y: 0.24 });
  const exitLen = Math.hypot(exitA.x - exitB.x, exitA.y - exitB.y);
  const w0 = (exitLen / Math.max(1, n)) * 1.25;
  if (!portrait) {
    return {
      mode: "aim",
      A: rot(Al),
      BL: rot(BLl),
      BR: rot(BRl),
      centroid: { x: cx, y: cy },
      E,
      beam0,
      exitA,
      exitB,
      exitDir,
      Lx: aspect === "16:9" ? 0.48 * W : 0.44 * W,
      rowTop: cfg.top,
      rowBot: cfg.bot,
      textRight: 0.95 * W,
      rowEnd: 0.985 * W,
      w0,
      k2: aspect === "16:9" ? 0.075 * W : 0.08 * W,
      trunkX: 0,
      trunkW: 0,
      trunkTop: 0,
    };
  }
  // Portrait: the spectrum falls as a ribbon cable and each band peels off into its row.
  const mid = lerpPt(exitA, exitB, 0.5);
  const trunkW = 0.03 * W;
  const trunkX = mid.x + 0.01 * W;
  const Lx = trunkX + ((n - 1) / 2) * trunkW + 0.1 * W;
  return {
    mode: "comb",
    A: rot(Al),
    BL: rot(BLl),
    BR: rot(BRl),
    centroid: { x: cx, y: cy },
    E,
    beam0,
    exitA,
    exitB,
    exitDir,
    Lx,
    rowTop: cfg.top,
    rowBot: cfg.bot,
    textRight: 0.95 * W,
    rowEnd: 0.985 * W,
    w0,
    k2: 0,
    trunkX,
    trunkW,
    trunkTop: mid.y + 0.06 * H,
  };
}

/** Centre line of band i, ending at the slit (Lx, y). */
function bandPath(g: Geo, i: number, n: number, y: number, w1: number): S[] {
  const t = n > 1 ? i / (n - 1) : 0.5;
  const O = lerpPt(g.exitA, g.exitB, t);
  const out: S[] = [];
  if (g.mode === "aim") {
    const P3 = { x: g.Lx, y };
    const P2 = { x: g.Lx - g.k2, y };
    const P1 = lerpPt(O, P2, 0.42);
    const K = 44;
    for (let k = 0; k <= K; k++) {
      const u = k / K;
      const p = cubic(O, P1, P2, P3, u);
      out.push({ ...p, w: lerp(g.w0, w1, u) });
    }
    return out;
  }
  const xi = g.trunkX + ((n - 1) / 2 - i) * g.trunkW;
  const wT = g.trunkW * 0.92;
  const T0 = { x: xi, y: g.trunkTop };
  const drop = g.trunkTop - O.y;
  const P1 = { x: O.x + g.exitDir.x * drop * 0.45, y: O.y + g.exitDir.y * drop * 0.45 };
  const P2 = { x: xi, y: g.trunkTop - drop * 0.4 };
  const K1 = 14;
  for (let k = 0; k <= K1; k++) {
    const u = k / K1;
    out.push({ ...cubic(O, P1, P2, T0, u), w: lerp(g.w0, wT, u) });
  }
  const r = g.Lx - xi;
  const turnY = Math.max(g.trunkTop + 1, y - r);
  const ry = y - turnY;
  out.push({ x: xi, y: turnY, w: wT });
  const Q0 = { x: xi, y: turnY };
  const Q1 = { x: xi, y: turnY + ry * 0.5523 };
  const Q2 = { x: g.Lx - r * 0.5523, y };
  const Q3 = { x: g.Lx, y };
  const K2 = 22;
  for (let k = 1; k <= K2; k++) {
    const u = k / K2;
    out.push({ ...cubic(Q0, Q1, Q2, Q3, u), w: lerp(wT, w1, easeInOut(u)) });
  }
  return out;
}

/** The path up to fraction p of its length (the band's travelling head). */
function cut(path: S[], p: number): S[] {
  if (p >= 1) return path;
  if (p <= 0) return path.slice(0, 1);
  let total = 0;
  for (let i = 1; i < path.length; i++) total += Math.hypot(path[i]!.x - path[i - 1]!.x, path[i]!.y - path[i - 1]!.y);
  let left = total * p;
  const out: S[] = [path[0]!];
  for (let i = 1; i < path.length; i++) {
    const a = path[i - 1]!;
    const b = path[i]!;
    const d = Math.hypot(b.x - a.x, b.y - a.y);
    if (d >= left) {
      const k = d > 0 ? left / d : 0;
      out.push({ x: lerp(a.x, b.x, k), y: lerp(a.y, b.y, k), w: lerp(a.w, b.w, k) });
      return out;
    }
    out.push(b);
    left -= d;
  }
  return out;
}

/**
 * Gradient along a band from its exit point to the slit. While the band is
 * still travelling its head fades out, so it reads as light arriving.
 */
function fanGrad(ctx: CanvasRenderingContext2D, path: S[], part: S[], done: boolean, Lx: number, y: number, col: string, a0: number, a1: number): CanvasGradient {
  const O = path[0]!;
  const ax = Lx - O.x;
  const ay = y - O.y;
  const l2 = ax * ax + ay * ay || 1;
  const head = part[part.length - 1]!;
  const hu = done ? Infinity : ((head.x - O.x) * ax + (head.y - O.y) * ay) / l2;
  const fade = Math.max(0.02, Math.min(0.22, hu * 0.7));
  const grad = ctx.createLinearGradient(O.x, O.y, Lx, y);
  for (let k = 0; k <= 16; k++) {
    const u = k / 16;
    const h = Math.max(0, Math.min(1, (hu - u) / fade));
    grad.addColorStop(u, withAlpha(col, lerp(a0, a1, u) * h * h));
  }
  return grad;
}

/** One side of a band, at `side` (-1..1) of its half width. */
function offset(path: S[], side: number, vertical: boolean): Pt[] {
  return path.map((p, i) => {
    if (vertical) return { x: p.x, y: p.y + (side * p.w) / 2 };
    const a = path[Math.max(0, i - 1)]!;
    const b = path[Math.min(path.length - 1, i + 1)]!;
    const tx = b.x - a.x;
    const ty = b.y - a.y;
    const l = Math.hypot(tx, ty) || 1;
    return { x: p.x + (-ty / l) * side * (p.w / 2), y: p.y + (tx / l) * side * (p.w / 2) };
  });
}

function ribbon(ctx: CanvasRenderingContext2D, path: S[], scale: number, vertical: boolean) {
  const l = offset(path, scale, vertical);
  const r = offset(path, -scale, vertical).reverse();
  ctx.beginPath();
  l.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
  r.forEach((p) => ctx.lineTo(p.x, p.y));
  ctx.closePath();
}

function polyline(ctx: CanvasRenderingContext2D, pts: Pt[]) {
  ctx.beginPath();
  pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
}

function radial(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string, a: number) {
  if (a <= 0.002 || r <= 0) return;
  const g = ctx.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, withAlpha(color, a));
  g.addColorStop(0.35, withAlpha(color, a * 0.35));
  g.addColorStop(1, withAlpha(color, 0));
  ctx.fillStyle = g;
  ctx.fillRect(x - r, y - r, r * 2, r * 2);
}

/** Horizontal anamorphic streak, the cinematic flare a bright point throws. */
function streak(ctx: CanvasRenderingContext2D, x: number, y: number, len: number, thick: number, color: string, a: number) {
  if (a <= 0.002) return;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(1, thick / len);
  radial(ctx, 0, 0, len, color, a);
  ctx.restore();
}

// ---------------------------------------------------------------------------

type BandState = {
  color: string;
  ink: string;
  y: number;
  path: S[];
  fanP: number;
  rowP: number;
  alive: number;
  flash: number;
  label: number;
  labelOpacity: number;
};

type Mote = { band: number; u: number; v: number; speed: number; phase: number; size: number };

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='7' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

/**
 * A white beam meets a glass prism and fans into one brand-colored band per
 * list item. Each band sweeps out, passes a slit and runs on as a row of
 * light; its item slides out of the slit along it and locks. Then the prism
 * dims and the list holds. Canvas2D, deterministic, half-res bloom.
 */
export const Component: React.FC<Props> = ({ items, color, primary, secondary, background, fontFamily, monoFontFamily, showIndex, intensity }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: W, height: H, aspect, portrait, unit } = useLayout();
  const crispRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLCanvasElement>(null);
  const offRef = useRef<HTMLCanvasElement | null>(null);

  const list = items.length ? items : ["Item"];
  const n = list.length;
  const transparent = background === "transparent";
  const dark = transparent ? luminance(color) > 0.45 : luminance(background) < 0.4;
  const I = 0.35 + 0.65 * intensity;

  const g = useMemo(() => buildGeo(W, H, aspect, n), [W, H, aspect, n]);
  const pal = useMemo(() => spectrum(primary, secondary, n, dark), [primary, secondary, n, dark]);
  const motes = useMemo<Mote[]>(() => {
    const r = rng("prism-motes");
    return Array.from({ length: 96 }, (_, k) => ({ band: k, u: r(), v: r() * 2 - 1, speed: 0.0008 + r() * 0.0016, phase: r() * Math.PI * 2, size: 0.6 + r() * 1.4 }));
  }, []);

  const rowH = (g.rowBot - g.rowTop) / n;
  const w1 = rowH * (portrait ? 0.8 : 0.78);
  const yc = (g.rowTop + g.rowBot) / 2;
  const stagger = n > 1 ? Math.min(10, 44 / (n - 1)) : 0;

  const beamP = easeInOut(ramp(frame, [T.beam[0], T.beam[1]], [0, 1]));
  const intP = easeInOut(ramp(frame, [T.internal[0], T.internal[1]], [0, 1]));
  const impact = frame >= T.impact ? Math.exp(-(frame - T.impact) / 7) : 0;
  const edgeP = easeInOut(ramp(frame, [T.edges[0], T.edges[1]], [0, 1]));
  const slitP = expoOut(ramp(frame, [T.slit[0], T.slit[1]], [0, 1]));
  const dim = easeInOut(ramp(frame, [T.dim[0], T.dim[1]], [0, 1]));

  const bands: BandState[] = list.map((_, i) => {
    const b = T.band0 + i * stagger;
    const sweep = springSnap(frame, fps, b, LOCK);
    const yi = g.rowTop + rowH * (i + 0.5);
    const y = g.mode === "aim" ? yc + (yi - yc) * sweep : yi - (1 - sweep) * rowH * 0.45;
    const labelAt = b + T.label;
    const lock = labelAt + 9;
    return {
      color: pal.light[i]!,
      ink: pal.ink[i]!,
      y,
      path: bandPath(g, i, n, y, w1),
      fanP: easeInOut(ramp(frame, [b, b + T.fan], [0, 1])),
      rowP: expoOut(ramp(frame, [b + T.rowDelay, b + T.rowDelay + T.row], [0, 1])),
      alive: ramp(frame, [b, b + 4], [0, 1]),
      flash: frame >= lock ? Math.exp(-(frame - lock) / 8) : 0,
      label: springSnap(frame, fps, labelAt, LOCK),
      labelOpacity: ramp(frame, [labelAt, labelAt + 6], [0, 1]),
    };
  });

  useLayoutEffect(() => {
    const crisp = crispRef.current?.getContext("2d", { willReadFrequently: true });
    const glow = glowRef.current?.getContext("2d", { willReadFrequently: true });
    if (!crisp || !glow) return;
    if (!offRef.current) offRef.current = document.createElement("canvas");
    const off = offRef.current;
    const gw = Math.max(2, Math.round(W * GLOW_SCALE));
    const gh = Math.max(2, Math.round(H * GLOW_SCALE));
    if (off.width !== gw || off.height !== gh) {
      off.width = gw;
      off.height = gh;
    }
    const octx = off.getContext("2d", { willReadFrequently: true });
    if (!octx) return;

    const add = dark ? "lighter" : "multiply";
    const vertical = g.mode === "aim";
    const beamA = 1 - 0.5 * dim;
    const prismA = edgeP * (1 - 0.4 * dim);
    const fanDim = 1 - 0.3 * dim;
    const mid = lerpPt(g.exitA, g.exitB, 0.5);
    const time = frame / 30;
    const beamHead = lerpPt(g.beam0, g.E, beamP);
    const bandsOn = Math.max(...bands.map((b) => b.alive));

    // Row alpha along x: bright at the slit, gone at the frame edge.
    const rowBase = (u: number) => (u < 0.18 ? lerp(1, 0.8, u / 0.18) : u < 0.55 ? lerp(0.8, 0.38, (u - 0.18) / 0.37) : lerp(0.38, 0, (u - 0.55) / 0.45));
    const fadeLen = W * 0.14;
    const rowStops = (grad: CanvasGradient, col: string, a: number, xh = g.rowEnd) => {
      for (let k = 0; k <= 16; k++) {
        const u = k / 16;
        const x = lerp(g.Lx, g.rowEnd, u);
        const head = xh >= g.rowEnd ? 1 : Math.max(0, Math.min(1, (xh - x) / fadeLen));
        grad.addColorStop(u, withAlpha(col, a * rowBase(u) * head * head));
      }
    };

    // ---------------- glow layer (half res, blurred) ----------------
    for (const ctx of [octx]) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = "source-over";
      ctx.filter = "none";
      ctx.clearRect(0, 0, gw, gh);
      ctx.setTransform(GLOW_SCALE, 0, 0, GLOW_SCALE, 0, 0);
      ctx.globalCompositeOperation = add;
      const ga = dark ? 1 : 0.45;

      // Beam halo.
      if (beamP > 0) {
        const bg = ctx.createLinearGradient(g.beam0.x, g.beam0.y, g.E.x, g.E.y);
        bg.addColorStop(0, withAlpha(color, 0));
        bg.addColorStop(0.4, withAlpha(color, (dark ? 0.55 : 0.12) * beamA * I));
        bg.addColorStop(1, withAlpha(color, (dark ? 0.7 : 0.14) * beamA * I));
        ctx.strokeStyle = bg;
        ctx.lineCap = "round";
        ctx.lineWidth = H * 0.026;
        polyline(ctx, [g.beam0, beamHead]);
        ctx.stroke();
        if (dark && beamP < 1) radial(ctx, beamHead.x, beamHead.y, H * 0.05, color, 0.9 * I);
      }
      if (dark) {
        // Impact on the entry face, then the hot exit point.
        radial(ctx, g.E.x, g.E.y, H * 0.11, color, impact * 0.9 * I + 0.25 * beamP * beamA * I);
        streak(ctx, g.E.x, g.E.y, W * 0.16, H * 0.012, color, impact * 0.7 * I);
        const hot = intP * (0.55 + 0.45 * impact) * (1 - 0.45 * dim) * I;
        radial(ctx, mid.x, mid.y, H * 0.08, color, hot * 0.8);
        streak(ctx, mid.x, mid.y, W * 0.12, H * 0.008, color, hot * 0.45 * (1 - bandsOn * 0.4));
      }
      // Bands and rows.
      bands.forEach((b) => {
        if (b.fanP <= 0) return;
        const part = cut(b.path, b.fanP);
        const done = b.fanP >= 1;
        ctx.fillStyle = fanGrad(ctx, b.path, part, done, g.Lx, b.y, b.color, 0.7 * ga * b.alive * fanDim * I, 0.42 * ga * b.alive * fanDim * I);
        ribbon(ctx, part, 1, vertical);
        ctx.fill();
        const head = part[part.length - 1]!;
        if (b.fanP < 1 && dark) radial(ctx, head.x, head.y, H * 0.06, b.color, 0.9 * b.alive * I);
        if (b.rowP > 0) {
          const xh = lerp(g.Lx, g.rowEnd, b.rowP);
          const rg = ctx.createLinearGradient(g.Lx, 0, g.rowEnd, 0);
          rowStops(rg, b.color, 0.5 * ga * I, xh);
          ctx.fillStyle = rg;
          ctx.fillRect(g.Lx, b.y - w1 / 2, xh - g.Lx, w1);
          if (b.rowP < 1 && dark) radial(ctx, xh, b.y, H * 0.05, b.color, 0.55 * (1 - b.rowP) * I);
        }
        if (dark) {
          radial(ctx, g.Lx, b.y, H * 0.07, b.color, (0.25 * Math.min(1, b.rowP * 4) + 0.75 * b.flash) * I);
          streak(ctx, g.Lx, b.y, W * 0.09, H * 0.006, color, 0.55 * b.flash * I);
        }
      });
    }

    glow.setTransform(1, 0, 0, 1, 0, 0);
    glow.globalCompositeOperation = "source-over";
    glow.filter = "none";
    glow.clearRect(0, 0, gw, gh);
    glow.filter = `blur(${Math.round(H * 0.03 * GLOW_SCALE)}px)`;
    glow.drawImage(off, 0, 0);
    if (dark) {
      glow.globalCompositeOperation = "lighter";
      glow.filter = `blur(${Math.max(1, Math.round(H * 0.008 * GLOW_SCALE))}px)`;
      glow.globalAlpha = 0.6;
      glow.drawImage(off, 0, 0);
      glow.globalAlpha = 1;
    }
    glow.filter = "none";

    // ---------------- crisp layer (full res) ----------------
    const ctx = crisp;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.filter = "none";
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = add;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    const hair = Math.max(1, H * 0.0011);

    // Incoming beam.
    if (beamP > 0) {
      const bg = ctx.createLinearGradient(g.beam0.x, g.beam0.y, g.E.x, g.E.y);
      const a = (dark ? 0.95 : 0.8) * beamA;
      bg.addColorStop(0, withAlpha(color, 0));
      bg.addColorStop(0.3, withAlpha(color, a));
      bg.addColorStop(1, withAlpha(color, a));
      ctx.strokeStyle = bg;
      ctx.lineWidth = Math.max(1.5, H * 0.0034);
      polyline(ctx, [g.beam0, beamHead]);
      ctx.stroke();
      const sg = ctx.createLinearGradient(g.beam0.x, g.beam0.y, g.E.x, g.E.y);
      sg.addColorStop(0, withAlpha(color, 0));
      sg.addColorStop(1, withAlpha(color, (dark ? 0.2 : 0.08) * beamA));
      ctx.strokeStyle = sg;
      ctx.lineWidth = H * 0.012;
      polyline(ctx, [g.beam0, beamHead]);
      ctx.stroke();
    }

    // Light inside the glass: a white ray, then the spectrum already opening.
    if (intP > 0) {
      const tip = lerpPt(g.E, mid, intP);
      const fg = ctx.createLinearGradient(g.exitA.x, g.exitA.y, g.exitB.x, g.exitB.y);
      bands.forEach((b, i) => fg.addColorStop(n > 1 ? i / (n - 1) : 0.5, withAlpha(b.color, (dark ? 0.42 : 0.3) * intP * (1 - 0.4 * dim))));
      ctx.fillStyle = fg;
      ctx.beginPath();
      ctx.moveTo(g.E.x, g.E.y);
      ctx.lineTo(lerp(g.E.x, g.exitA.x, intP), lerp(g.E.y, g.exitA.y, intP));
      ctx.lineTo(lerp(g.E.x, g.exitB.x, intP), lerp(g.E.y, g.exitB.y, intP));
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = withAlpha(color, (dark ? 0.75 : 0.5) * beamA);
      ctx.lineWidth = Math.max(1, H * 0.0022);
      polyline(ctx, [g.E, tip]);
      ctx.stroke();
    }

    // Bands: soft body, brighter core, fine striations, crisp edges.
    bands.forEach((b, i) => {
      if (b.fanP <= 0) return;
      const part = cut(b.path, b.fanP);
        const done = b.fanP >= 1;
      const aF0 = (dark ? 0.5 : 0.62) * b.alive * fanDim * I;
      const aF1 = (dark ? 0.3 : 0.5) * b.alive * I;
      const fan = (k0: number, k1: number) => fanGrad(ctx, b.path, part, done, g.Lx, b.y, b.color, k0, k1);
      ctx.fillStyle = fan(aF0, aF1);
      ribbon(ctx, part, 1, vertical);
      ctx.fill();
      if (dark) {
        ribbon(ctx, part, 0.55, vertical);
        ctx.fill();
      }
      ctx.lineWidth = hair;
      for (const s of [-1, 1]) {
        ctx.strokeStyle = fan((dark ? 0.55 : 0.7) * b.alive * I, (dark ? 0.55 : 0.7) * b.alive * I);
        polyline(ctx, offset(part, s * 0.98, vertical));
        ctx.stroke();
      }
      for (let k = 0; k < 4; k++) {
        const side = [-0.62, -0.22, 0.24, 0.6][k]!;
        const a = 0.5 + 0.5 * NOISE(i * 3.1 + k * 1.7, time * 0.6, k);
        const sa = (dark ? 0.32 : 0.22) * a * b.alive * fanDim * I;
        ctx.strokeStyle = fan(sa, sa);
        polyline(ctx, offset(part, side, vertical));
        ctx.stroke();
      }

      if (b.rowP > 0) {
        const xh = lerp(g.Lx, g.rowEnd, b.rowP);
        const top = b.y - w1 / 2;
        const aR = (dark ? 0.3 : 0.5) * I;
        const rg = ctx.createLinearGradient(g.Lx, 0, g.rowEnd, 0);
        rowStops(rg, b.color, aR, xh);
        ctx.fillStyle = rg;
        ctx.fillRect(g.Lx, top, xh - g.Lx, w1);
        if (dark) ctx.fillRect(g.Lx, b.y - w1 * 0.275, xh - g.Lx, w1 * 0.55);
        // Edges.
        const eg = ctx.createLinearGradient(g.Lx, 0, g.rowEnd, 0);
        rowStops(eg, b.color, (dark ? 0.6 : 0.75) * I, xh);
        ctx.strokeStyle = eg;
        ctx.lineWidth = hair;
        for (const yy of [top + hair / 2, top + w1 - hair / 2]) {
          polyline(ctx, [{ x: g.Lx, y: yy }, { x: xh, y: yy }]);
          ctx.stroke();
        }
        // Striations that shimmer along the row.
        for (let k = 0; k < 4; k++) {
          const yy = b.y + [-0.31, -0.11, 0.12, 0.3][k]! * w1;
          const a = 0.5 + 0.5 * NOISE(i * 3.1 + k * 1.7, time * 0.6, k);
          const sg = ctx.createLinearGradient(g.Lx, 0, g.rowEnd, 0);
          rowStops(sg, b.color, (dark ? 0.4 : 0.25) * a * I, xh);
          ctx.strokeStyle = sg;
          polyline(ctx, [{ x: g.Lx, y: yy }, { x: xh, y: yy }]);
          ctx.stroke();
        }
        // Lock pulse runs down the row.
        if (b.flash > 0.01) {
          const pg = ctx.createLinearGradient(g.Lx, 0, lerp(g.Lx, g.rowEnd, 0.5), 0);
          pg.addColorStop(0, withAlpha(b.color, (dark ? 0.35 : 0.25) * b.flash * I));
          pg.addColorStop(1, withAlpha(b.color, 0));
          ctx.fillStyle = pg;
          ctx.fillRect(g.Lx, top, (g.rowEnd - g.Lx) * 0.5, w1);
        }
      }
    });

    // Dust in the light: only where a row is lit, drifting, twinkling.
    if (dark) {
      for (const m of motes) {
        const bi = m.band % n;
        const b = bands[bi]!;
        if (b.rowP <= 0) continue;
        const u = (m.u + frame * m.speed) % 1;
        const x = lerp(g.Lx + unit * 2, g.rowEnd, u * 0.85);
        if (x > lerp(g.Lx, g.rowEnd, b.rowP)) continue;
        const ux = (x - g.Lx) / (g.rowEnd - g.Lx);
        const y = b.y + m.v * w1 * 0.42 + NOISE(m.u * 9, m.v * 9, time * 0.4) * w1 * 0.06;
        const tw = 0.5 + 0.5 * Math.sin(frame * 0.11 + m.phase);
        const a = (1 - ux) * (1 - ux) * tw * 0.75 * I;
        if (a < 0.02) continue;
        ctx.fillStyle = withAlpha(color, a);
        ctx.beginPath();
        ctx.arc(x, y, m.size * H * 0.0011, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // The slit plate the bands pass through.
    if (slitP > 0) {
      const top = g.rowTop - H * 0.025;
      const bot = g.rowBot + H * 0.025;
      const cy = (top + bot) / 2;
      const h2 = ((bot - top) / 2) * slitP;
      ctx.strokeStyle = withAlpha(color, dark ? 0.22 : 0.3);
      ctx.lineWidth = hair;
      polyline(ctx, [{ x: g.Lx, y: cy - h2 }, { x: g.Lx, y: cy + h2 }]);
      ctx.stroke();
      const tick = unit * 0.9 * slitP;
      for (const yy of [cy - h2, cy + h2]) {
        polyline(ctx, [{ x: g.Lx - tick, y: yy }, { x: g.Lx + tick, y: yy }]);
        ctx.stroke();
      }
    }
    // Glints where each band crosses the slit.
    bands.forEach((b) => {
      if (b.rowP <= 0) return;
      const on = Math.min(1, b.rowP * 3);
      if (dark) {
        radial(ctx, g.Lx, b.y, H * (0.012 + 0.02 * b.flash), color, (0.55 + 0.45 * b.flash) * on * I);
        const len = W * (0.025 + 0.06 * b.flash);
        const hg = ctx.createLinearGradient(g.Lx - len, 0, g.Lx + len, 0);
        hg.addColorStop(0, withAlpha(color, 0));
        hg.addColorStop(0.5, withAlpha(color, (0.5 + 0.5 * b.flash) * on * I));
        hg.addColorStop(1, withAlpha(color, 0));
        ctx.strokeStyle = hg;
        ctx.lineWidth = hair;
        polyline(ctx, [{ x: g.Lx - len, y: b.y }, { x: g.Lx + len, y: b.y }]);
        ctx.stroke();
        const vl = w1 * (0.3 + 0.25 * b.flash);
        const vg = ctx.createLinearGradient(0, b.y - vl, 0, b.y + vl);
        vg.addColorStop(0, withAlpha(color, 0));
        vg.addColorStop(0.5, withAlpha(color, (0.4 + 0.5 * b.flash) * on * I));
        vg.addColorStop(1, withAlpha(color, 0));
        ctx.strokeStyle = vg;
        polyline(ctx, [{ x: g.Lx, y: b.y - vl }, { x: g.Lx, y: b.y + vl }]);
        ctx.stroke();
      }
    });

    // The prism: glass body, bevel, edges drawn in, a specular streak.
    if (prismA > 0) {
      const { A, BL, BR, centroid } = g;
      const tri = () => {
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(BR.x, BR.y);
        ctx.lineTo(BL.x, BL.y);
        ctx.closePath();
      };
      const baseMid = lerpPt(BL, BR, 0.5);
      const gf = ctx.createLinearGradient(A.x, A.y, baseMid.x, baseMid.y);
      gf.addColorStop(0, withAlpha(color, (dark ? 0.16 : 0.07) * prismA));
      gf.addColorStop(0.6, withAlpha(color, (dark ? 0.06 : 0.03) * prismA));
      gf.addColorStop(1, withAlpha(color, (dark ? 0.1 : 0.05) * prismA));
      ctx.fillStyle = gf;
      tri();
      ctx.fill();

      const ins = (p: Pt) => lerpPt(centroid, p, 0.86);
      ctx.strokeStyle = withAlpha(color, (dark ? 0.14 : 0.16) * prismA);
      ctx.lineWidth = hair;
      polyline(ctx, [ins(A), ins(BR), ins(BL), ins(A)]);
      ctx.stroke();

      const per = 3 * Math.hypot(A.x - BL.x, A.y - BL.y);
      const eg = ctx.createLinearGradient(A.x, A.y, baseMid.x, baseMid.y);
      eg.addColorStop(0, withAlpha(color, (dark ? 0.9 : 0.75) * prismA));
      eg.addColorStop(1, withAlpha(color, (dark ? 0.35 : 0.45) * prismA));
      ctx.strokeStyle = eg;
      ctx.lineWidth = Math.max(1.2, H * 0.0017);
      ctx.setLineDash([per * edgeP, per]);
      ctx.beginPath();
      ctx.moveTo(A.x, A.y);
      ctx.lineTo(BR.x, BR.y);
      ctx.lineTo(BL.x, BL.y);
      ctx.closePath();
      ctx.stroke();
      ctx.setLineDash([]);

      if (dark) {
        const s0 = lerpPt(A, BL, 0.06);
        const s1 = lerpPt(A, BL, 0.5);
        const sg = ctx.createLinearGradient(s0.x, s0.y, s1.x, s1.y);
        sg.addColorStop(0, withAlpha(color, 0));
        sg.addColorStop(0.35, withAlpha(color, 0.85 * prismA));
        sg.addColorStop(1, withAlpha(color, 0));
        ctx.strokeStyle = sg;
        ctx.lineWidth = Math.max(1.5, H * 0.0028);
        polyline(ctx, [s0, s1]);
        ctx.stroke();
        radial(ctx, A.x, A.y, H * 0.018, color, 0.6 * prismA);
      }
    }
    ctx.globalCompositeOperation = "source-over";
  });

  // ---------------- labels ----------------
  const heading = brandFontStack(fontFamily);
  const mono = brandFontStack(monoFontFamily);
  const minFont = H * (portrait ? 0.031 : 0.019);
  const pad = unit * (portrait ? 3 : 2.6);
  const longest = Math.max(4, ...list.map((s) => s.length));
  const boxW0 = g.textRight - g.Lx - pad;
  const fit = (boxW: number) =>
    fitFontSize({ chars: longest, boxW, boxH: rowH * (portrait ? 0.8 : 0.62), lines: portrait ? 2 : 1, charEm: 0.56, lineHeight: 1.18, max: Math.min(rowH * 0.4, H * (portrait ? 0.05 : 0.066)), min: minFont });
  let fontSize = fit(boxW0);
  const idxFont = Math.max(minFont, fontSize * 0.42);
  const idxGap = idxFont * 0.9;
  const idxW = showIndex ? idxFont * 0.62 * 2 + idxGap : 0;
  if (showIndex) fontSize = fit(boxW0 - idxW);
  const textW = boxW0 - idxW;

  return (
    <AbsoluteFill style={{ background, overflow: "hidden" }}>
      <canvas
        ref={glowRef}
        width={Math.max(2, Math.round(W * GLOW_SCALE))}
        height={Math.max(2, Math.round(H * GLOW_SCALE))}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", mixBlendMode: transparent ? "normal" : dark ? "screen" : "multiply" }}
      />
      <canvas ref={crispRef} width={W} height={H} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", mixBlendMode: transparent ? "normal" : dark ? "screen" : "multiply" }} />
      {!transparent && dark ? (
        <AbsoluteFill style={{ background: `radial-gradient(ellipse 75% 75% at 50% 50%, ${withAlpha(background, 0)} 55%, ${withAlpha(background, 0.55)} 100%)` }} />
      ) : null}
      {bands.map((b, i) => {
        const slide = (1 - b.label) * -(textW * 0.55 + idxW + pad);
        const blur = Math.max(0, 1 - b.label) * fontSize * 0.1;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: g.Lx,
              top: b.y - rowH / 2,
              width: g.textRight - g.Lx,
              height: rowH,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: idxGap,
                paddingLeft: pad,
                transform: slide !== 0 ? `translateX(${slide}px)` : undefined,
                opacity: b.labelOpacity,
                filter: blur > 0.05 ? `blur(${blur}px)` : undefined,
              }}
            >
              {showIndex ? (
                <span style={{ fontFamily: mono, fontSize: idxFont, lineHeight: 1.2, letterSpacing: "0.02em", color: b.ink, fontWeight: 500, flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
              ) : null}
              <span
                data-21st-slot="items"
                style={{
                  fontFamily: heading,
                  fontSize,
                  lineHeight: 1.18,
                  fontWeight: 500,
                  letterSpacing: "-0.022em",
                  color,
                  maxWidth: textW,
                  whiteSpace: portrait ? "normal" : "nowrap",
                  overflowWrap: "anywhere",
                  textShadow: dark && b.flash > 0.02 ? `0 0 ${fontSize * 0.5}px ${withAlpha(b.color, 0.9 * b.flash)}` : undefined,
                }}
              >
                {list[i]}
              </span>
            </div>
          </div>
        );
      })}
      {!transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.06 : 0.05, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
