// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef } from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, springSnap, useLayout } from "../../../kit/index";
import type { Aspect } from "../../../kit/spec";
import { rng, simplex3 } from "../_lib/noise";
import type { schema } from "./riso-misregister-title.schema";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];

const TAU = Math.PI * 2;
/** Drum feeds (frames at 30 fps): the second drum starts before the first finishes. */
const FEED: [number, number][] = [
  [6, 28],
  [24, 48],
];
const SNAP = 58;
const LOCK = { damping: 13, stiffness: 190, mass: 0.9 };
/** Grain re-inks every few frames, like stop-motion paper. */
const BOIL = 3;
/** Average glyph width (em) of a bold grotesk; slightly generous so lines never overflow. */
const CHAR_EM = 0.6;
const LINE = 1.15;

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (x: number) => {
  const t = clamp01(x);
  return t * t * (3 - 2 * t);
};
const inOut = (x: number) => {
  const t = clamp01(x);
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};
const outCubic = (x: number) => 1 - Math.pow(1 - clamp01(x), 3);

function parse(c: string, fallback: RGB): RGB {
  let hex = /^#([0-9a-f]{3,8})$/i.exec(c.trim())?.[1];
  if (hex) {
    if (hex.length <= 4) hex = hex.slice(0, 3).split("").map((k) => k + k).join("");
    const n = parseInt(hex.slice(0, 6), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  const m = /^rgba?\(([^)]+)\)$/.exec(c.trim());
  if (m) {
    const p = m[1]!.split(/[\s,/]+/).filter(Boolean).map(parseFloat);
    return [p[0] ?? 0, p[1] ?? 0, p[2] ?? 0];
  }
  return fallback;
}
const css = (c: RGB, a = 1) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${a.toFixed(3)})`;
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const lin = (v: number) => {
  const s = v / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
};
const relLum = (c: RGB) => 0.2126 * lin(c[0]) + 0.7152 * lin(c[1]) + 0.0722 * lin(c[2]);
const contrast = (a: RGB, b: RGB) => {
  const x = relLum(a);
  const y = relLum(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
};
/** What two inks look like where they overprint: multiply on light stock, screen on dark stock. */
const overprint = (a: RGB, b: RGB, dark: boolean): RGB =>
  dark
    ? [255 - ((255 - a[0]) * (255 - b[0])) / 255, 255 - ((255 - a[1]) * (255 - b[1])) / 255, 255 - ((255 - a[2]) * (255 - b[2])) / 255]
    : [(a[0] * b[0]) / 255, (a[1] * b[1]) / 255, (a[2] * b[2]) / 255];
const DAY: RGB = [255, 255, 255];
const NIGHT: RGB = [0, 0, 0];

type Disc = { x: number; y: number; r: number };
type Geo = {
  p: Disc;
  s: Disc;
  /** Headline box. */
  tx: number;
  ty: number;
  tw: number;
  th: number;
  tAlign: "center" | "end";
  maxFont: number;
  kx: number;
  ky: number;
  kSize: number;
  kMaxW: number;
  /** Color bar: right edge and vertical center. */
  bx: number;
  by: number;
  patch: number;
  targets: [number, number][];
  cell: number;
};

function geometry(W: number, H: number, u: number, aspect: Aspect): Geo {
  const targets: [number, number][] = [
    [W - u * 6, u * 6],
    [u * 6, H - u * 6],
  ];
  if (aspect === "9:16") {
    const m = u * 8;
    return {
      p: { x: W * 0.4, y: H * 0.31, r: W * 0.33 },
      s: { x: W * 0.62, y: H * 0.41, r: W * 0.37 },
      tx: m,
      ty: H * 0.6,
      tw: W - m * 2,
      th: H * 0.29,
      tAlign: "end",
      maxFont: H * 0.12,
      kx: m,
      ky: u * 11,
      kSize: H * 0.031,
      kMaxW: W - m * 2 - u * 10,
      bx: W - m,
      by: H - u * 10,
      patch: u * 3,
      targets,
      cell: u * 1.5,
    };
  }
  if (aspect === "1:1") {
    const m = u * 8;
    return {
      p: { x: W * 0.6, y: H * 0.33, r: W * 0.25 },
      s: { x: W * 0.74, y: H * 0.45, r: W * 0.27 },
      tx: m,
      ty: H * 0.48,
      tw: W * 0.8 - m,
      th: H * 0.38,
      tAlign: "end",
      maxFont: H * 0.16,
      kx: m,
      ky: u * 10,
      kSize: u * 2.8,
      kMaxW: W * 0.4,
      bx: W - m,
      by: H - u * 7,
      patch: u * 2.4,
      targets,
      cell: u * 1.25,
    };
  }
  const m = u * 8;
  return {
    p: { x: W * 0.7, y: H * 0.4, r: H * 0.3 },
    s: { x: W * 0.8, y: H * 0.58, r: H * 0.34 },
    tx: m,
    ty: H * 0.2,
    tw: W * 0.6 - m,
    th: H * 0.62,
    tAlign: "center",
    maxFont: H * 0.24,
    kx: m,
    ky: u * 9,
    kSize: u * 2.7,
    kMaxW: W * 0.45,
    bx: W - u * 8,
    by: H - u * 7,
    patch: u * 2.4,
    targets,
    cell: u * 1.2,
  };
}

/** Split words into `n` lines, minimizing the longest line. */
function partition(words: string[], n: number): string[] {
  if (n <= 1 || words.length <= 1) return [words.join(" ")];
  let best: string[] = [words.join(" ")];
  let bestLen = Infinity;
  const rec = (start: number, left: number, acc: string[]) => {
    if (left === 1) {
      const lines = [...acc, words.slice(start).join(" ")];
      const len = Math.max(...lines.map((l) => l.length));
      if (len < bestLen) {
        bestLen = len;
        best = lines;
      }
      return;
    }
    for (let i = start + 1; i <= words.length - left + 1; i++) rec(i, left - 1, [...acc, words.slice(start, i).join(" ")]);
  };
  rec(0, n, []);
  return best;
}

function layoutText(text: string, g: Geo): { lines: string[]; size: number } {
  const words = text.trim().split(/\s+/).filter(Boolean);
  let pick = { lines: [text.trim()], size: 0 };
  for (let n = 1; n <= Math.min(3, Math.max(1, words.length)); n++) {
    const lines = partition(words, n);
    const longest = Math.max(...lines.map((l) => l.length), 1);
    const size = Math.min(g.maxFont, g.tw / (longest * CHAR_EM), g.th / (lines.length * LINE));
    if (size > pick.size * 1.04) pick = { lines, size };
  }
  return pick;
}

/** A disc printed as a rotated halftone screen; tone(nx, ny) gives ink coverage 0..1 across the disc. */
function halftoneDisc(ctx: CanvasRenderingContext2D, d: Disc, cell: number, angle: number, tone: (nx: number, ny: number) => number) {
  const ca = Math.cos(angle);
  const sa = Math.sin(angle);
  const n = Math.ceil(d.r / cell) + 2;
  ctx.save();
  ctx.beginPath();
  ctx.arc(d.x, d.y, d.r, 0, TAU);
  ctx.clip();
  ctx.beginPath();
  for (let i = -n; i <= n; i++) {
    for (let j = -n; j <= n; j++) {
      const lx = i * cell;
      const ly = j * cell;
      const x = d.x + lx * ca - ly * sa;
      const y = d.y + lx * sa + ly * ca;
      const nx = (x - d.x) / d.r;
      const ny = (y - d.y) / d.r;
      if (nx * nx + ny * ny > 1.2) continue;
      const t = tone(nx, ny);
      if (t < 0.015) continue;
      const rd = cell * 0.75 * Math.sqrt(t);
      ctx.moveTo(x + rd, y);
      ctx.arc(x, y, rd, 0, TAU);
    }
  }
  ctx.fill();
  ctx.restore();
}

/** Everything one ink drum prints besides the headline: its disc, the registration targets, its color-bar patches. */
function drawDrum(ctx: CanvasRenderingContext2D, g: Geo, u: number, drum: 0 | 1, ink: RGB) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = css(ink);
  ctx.strokeStyle = css(ink);
  if (drum === 0) {
    // Solid in the lower left, breaking into a 15 degree dot screen toward the upper right.
    halftoneDisc(ctx, g.p, g.cell, (15 * Math.PI) / 180, (nx, ny) => 0.05 + 0.95 * smooth((-nx * 0.6 + ny * 0.8 + 0.7) / 1.25));
  } else {
    // Dense at the top, fading out at the bottom, on a 75 degree screen.
    halftoneDisc(ctx, g.s, g.cell, (75 * Math.PI) / 180, (nx, ny) => 0.04 + 0.96 * smooth((nx * 0.45 - ny * 0.9 + 0.75) / 1.45) * 0.92);
  }
  // Registration targets, printed by both drums: doubled while out of register, one mark once locked.
  const tr = u * 1.25;
  ctx.lineWidth = Math.max(1, u * 0.16);
  for (const [x, y] of g.targets) {
    ctx.beginPath();
    ctx.arc(x, y, tr, 0, TAU);
    ctx.moveTo(x - tr * 1.75, y);
    ctx.lineTo(x + tr * 1.75, y);
    ctx.moveTo(x, y - tr * 1.75);
    ctx.lineTo(x, y + tr * 1.75);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, tr * 0.4, 0, TAU);
    ctx.fill();
  }
  // Color bar: [P 100][P 50][P+S][S 50][S 100], right-aligned.
  const sz = g.patch;
  const gap = sz * 0.28;
  const x0 = g.bx - (sz * 5 + gap * 4);
  const y0 = g.by - sz / 2;
  const own = drum === 0 ? [[0, 1], [1, 0.5], [2, 1]] : [[2, 1], [3, 0.5], [4, 1]];
  for (const [i, a] of own) {
    ctx.fillStyle = css(ink, a!);
    ctx.fillRect(x0 + i! * (sz + gap), y0, sz, sz);
  }
}

/** Paper stock: tooth, fibres and a soft light pool. Drawn at half resolution; it is soft by nature. */
function drawPaper(ctx: CanvasRenderingContext2D, w: number, h: number, paper: RGB, ink: RGB, primary: RGB, dark: boolean, seed: number) {
  const r = rng(`riso-paper-${seed}`);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = css(paper);
  ctx.fillRect(0, 0, w, h);
  // Light pool and falloff.
  const lp = ctx.createRadialGradient(w * 0.42, h * 0.38, 0, w * 0.5, h * 0.5, Math.max(w, h) * 0.75);
  lp.addColorStop(0, css(dark ? mix(paper, primary, 0.1) : mix(paper, DAY, 0.35)));
  lp.addColorStop(0.55, css(paper, 0));
  lp.addColorStop(1, css(mix(paper, NIGHT, dark ? 0.35 : 0.07)));
  ctx.fillStyle = lp;
  ctx.fillRect(0, 0, w, h);
  // Fibres: short curved hairs, a few darker, a few lighter than the stock.
  const m = Math.min(w, h);
  const count = Math.round((w * h) / 520);
  ctx.lineCap = "round";
  for (let i = 0; i < count; i++) {
    const x = r() * w;
    const y = r() * h;
    const len = m * (0.006 + r() * 0.022);
    const a = r() * TAU;
    const bend = (r() - 0.5) * len * 0.8;
    const lighter = r() < 0.45;
    const tone = lighter ? mix(paper, DAY, dark ? 0.16 : 0.6) : mix(paper, ink, dark ? 0.12 : 0.14);
    ctx.strokeStyle = css(tone, 0.22 + r() * 0.35);
    ctx.lineWidth = Math.max(0.5, m * (0.0006 + r() * 0.0009));
    const ex = x + Math.cos(a) * len;
    const ey = y + Math.sin(a) * len;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo((x + ex) / 2 - Math.sin(a) * bend, (y + ey) / 2 + Math.cos(a) * bend, ex, ey);
    ctx.stroke();
  }
  // Tooth: per-pixel noise.
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  const amp = dark ? 7 : 9;
  for (let i = 0; i < d.length; i += 4) {
    const n = (r() - 0.5) * amp;
    d[i] = d[i]! + n;
    d[i + 1] = d[i + 1]! + n;
    d[i + 2] = d[i + 2]! + n;
  }
  ctx.putImageData(img, 0, 0);
}

/** Periodic value noise on an L x L lattice (wraps, so the tile repeats seamlessly). */
function lattice(seed: string, L: number): (x: number, y: number) => number {
  const r = rng(seed);
  const v = new Float32Array(L * L);
  for (let i = 0; i < v.length; i++) v[i] = r();
  return (x: number, y: number) => {
    const fx = Math.floor(x);
    const fy = Math.floor(y);
    const tx = x - fx;
    const ty = y - fy;
    const sx = tx * tx * (3 - 2 * tx);
    const sy = ty * ty * (3 - 2 * ty);
    const x0 = ((fx % L) + L) % L;
    const y0 = ((fy % L) + L) % L;
    const x1 = (x0 + 1) % L;
    const y1 = (y0 + 1) % L;
    const a = v[y0 * L + x0]! + (v[y0 * L + x1]! - v[y0 * L + x0]!) * sx;
    const b = v[y1 * L + x0]! + (v[y1 * L + x1]! - v[y1 * L + x0]!) * sx;
    return a + (b - a) * sy;
  };
}

/**
 * One drum's ink grain as a tileable alpha bitmap: fine speckle voids where the
 * drum starved, times a slow mottle of ink density. Built once, used as a CSS
 * mask (a bitmap mask is far cheaper per frame than an SVG filter).
 */
function grainTile(seed: string, size: number, speck: number): string {
  if (typeof document === "undefined") return "";
  const cv = document.createElement("canvas");
  cv.width = size;
  cv.height = size;
  const ctx = cv.getContext("2d", { willReadFrequently: true });
  if (!ctx) return "";
  const L1 = Math.max(8, Math.round(size / speck));
  const o1 = lattice(`${seed}-a`, L1);
  const o2 = lattice(`${seed}-b`, L1 * 2);
  const mo = lattice(`${seed}-m`, 4);
  const img = ctx.createImageData(size, size);
  const d = img.data;
  const k1 = L1 / size;
  const k2 = (L1 * 2) / size;
  const km = 4 / size;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const f = 0.62 * o1(x * k1, y * k1) + 0.38 * o2(x * k2, y * k2);
      const a = clamp01((f - 0.21) / 0.14) * (0.84 + 0.16 * mo(x * km, y * km));
      d[(y * size + x) * 4 + 3] = Math.round(a * 255);
    }
  }
  ctx.putImageData(img, 0, 0);
  return `url("${cv.toDataURL("image/png")}")`;
}

/**
 * A headline printed like a two-drum risograph: the first ink drum feeds the
 * sheet out of register, the second slides across it so the overlap turns into
 * a third color, both wander, then lock into register with a spring. Ink grain
 * keeps re-inking. Paper and drum art are canvases drawn once; motion is CSS.
 */
export const Component: React.FC<Props> = ({ text, kicker, color, primary, secondary, background, fontFamily, misregister, grain, seed }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect } = useLayout();
  const transparent = background === "transparent";
  const T = parse(color, [240, 240, 240]);
  const P = parse(primary, [200, 120, 255]);
  const S = parse(secondary, [120, 255, 220]);
  const dark = transparent ? relLum(T) > 0.4 : relLum(parse(background, [20, 20, 20])) < 0.18;
  const paper: RGB = transparent ? (dark ? mix(T, NIGHT, 0.92) : mix(T, DAY, 0.95)) : parse(background, [20, 20, 20]);
  const blend = dark ? "screen" : "multiply";

  // Headline inks: each drum's own ink, nudged toward the text color only as far as the
  // registered overprint needs to stay legible on this paper.
  const titleInks = useMemo(() => {
    for (let k = 0; k <= 10; k++) {
      const a = mix(P, T, k / 10);
      const b = mix(S, T, k / 10);
      if (contrast(overprint(a, b, dark), paper) >= 4.5 || k === 10) return [css(a), css(b)];
    }
    return [css(P), css(S)];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [primary, secondary, color, background, dark]);

  const g = useMemo(() => geometry(W, H, u, aspect), [W, H, u, aspect]);
  const { lines, size } = useMemo(() => layoutText(text, g), [text, g]);
  const font = brandFontStack(fontFamily);

  // ---- canvases: paper (half res) and one per drum (full res), drawn once per size/colors ----
  const paperRef = useRef<HTMLCanvasElement>(null);
  const drumRefs = [useRef<HTMLCanvasElement>(null), useRef<HTMLCanvasElement>(null)];
  const pw = Math.max(2, Math.round(W / 2));
  const ph = Math.max(2, Math.round(H / 2));
  useLayoutEffect(() => {
    const cv = paperRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    drawPaper(ctx, pw, ph, paper, T, P, dark, seed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pw, ph, background, color, primary, dark, seed, transparent]);
  useLayoutEffect(() => {
    ([0, 1] as const).forEach((k) => {
      const cv = drumRefs[k]!.current;
      if (!cv) return;
      const ctx = cv.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;
      drawDrum(ctx, g, u, k, k === 0 ? P : S);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [g, u, primary, secondary]);

  // ---- motion ----
  const noise = useMemo(() => simplex3(`riso-drift-${seed}`), [seed]);
  const lock = springSnap(frame, fps, SNAP, LOCK);
  const loose = 1 - lock; // 1 before the snap, overshoots below 0, lands on 0.
  const wander = clamp01(1 - lock);
  const mis = misregister;
  // Where each drum sits out of register (layout units) and its paper skew (degrees).
  const MISS: [number, number, number][] = [
    [-2.8, -1.6, -0.45],
    [3.4, 2.0, 0.55],
  ];
  // A hairline of misregistration stays: real riso never lands perfectly.
  const REST: [number, number][] = [
    [-0.3, 0.18],
    [0.32, -0.2],
  ];

  const tileSize = Math.max(32, Math.round(u * 48));
  const tiles = useMemo(
    () => (grain ? [0, 1].map((k) => grainTile(`riso-grain-${seed}-${k}`, tileSize, Math.max(1.2, u * 0.24))) : ["", ""]),
    [grain, seed, tileSize, u],
  );

  const drums = ([0, 1] as const).map((k) => {
    const [a, b] = FEED[k]!;
    const fd = clamp01((frame - a) / (b - a));
    const feed = inOut(fd);
    const [mx, my, mr] = MISS[k]!;
    const slide = k === 1 ? u * 11 * mis * (1 - outCubic(fd)) : -u * 3 * mis * (1 - outCubic(fd));
    const nx = noise(frame * 0.035, k * 7.3, 0.5) * u * 1.4 * mis * wander;
    const ny = noise(frame * 0.035, k * 7.3 + 40, 1.5) * u * 0.9 * mis * wander;
    const feedY = (1 - outCubic(fd)) * u * 4;
    const settled = lock === 1 && fd >= 1;
    const x = settled ? Math.round(REST[k]![0] * u) : mx * u * mis * loose + REST[k]![0] * u + slide + nx;
    const y = settled ? Math.round(REST[k]![1] * u) : my * u * mis * loose + REST[k]![1] * u + feedY + ny;
    const rot = settled ? 0 : mr * mis * loose;
    const edge = 14;
    const p = -edge + feed * (100 + edge * 2);
    const visible = frame >= a;
    // Grain: fine speckle that re-inks every BOIL frames, plus a slow mottle of ink density.
    const tick = Math.floor(frame / BOIL);
    const rr = rng(`riso-boil-${seed}-${k}-${tick}`);
    const masks: string[] = [];
    const sizes: string[] = [];
    const positions: string[] = [];
    const repeats: string[] = [];
    if (grain && tiles[k]) {
      masks.push(tiles[k]!);
      sizes.push(`${tileSize}px ${tileSize}px`);
      positions.push(`${Math.round(rr() * tileSize)}px ${Math.round(rr() * tileSize)}px`);
      repeats.push("repeat");
    }
    if (fd < 1) {
      const solid = titleInks[k]!;
      masks.push(`linear-gradient(to bottom, ${solid} ${p.toFixed(2)}%, transparent ${(p + edge).toFixed(2)}%)`);
      sizes.push("100% 100%");
      positions.push("0px 0px");
      repeats.push("no-repeat");
    }
    const style: React.CSSProperties = {
      position: "absolute",
      inset: 0,
      mixBlendMode: blend,
      transform: x || y || rot ? `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) rotate(${rot.toFixed(3)}deg)` : undefined,
      transformOrigin: "50% 50%",
      maskImage: masks.length ? masks.join(", ") : undefined,
      maskSize: masks.length ? sizes.join(", ") : undefined,
      maskPosition: masks.length ? positions.join(", ") : undefined,
      maskRepeat: masks.length ? repeats.join(", ") : undefined,
      maskComposite: masks.length > 1 ? masks.map(() => "intersect").join(", ") : undefined,
      opacity: visible ? 1 : 0,
    };
    return { k, style };
  });

  // The sheet takes a small knock when the drums lock.
  const tk = frame - SNAP;
  const knock = tk >= 0 && tk < 12 ? Math.sin((tk / 12) * Math.PI) * (1 - tk / 12) : 0;
  const stage: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    isolation: "isolate",
    transform: knock ? `translateY(${(knock * u * 0.45).toFixed(2)}px) scale(${(1 + knock * 0.006).toFixed(4)})` : undefined,
  };

  // Kicker slides in like a pencil note, ahead of the print.
  const kIn = outCubic((frame - 4) / 14);
  const kickerSize = g.kSize;
  const kickerColor = css(T);
  const ruleColor = css(T, 0.45);
  const titleStyle: React.CSSProperties = {
    position: "absolute",
    left: g.tx,
    top: g.ty,
    width: g.tw,
    height: g.th,
    display: "flex",
    flexDirection: "column",
    justifyContent: g.tAlign === "center" ? "center" : "flex-end",
    alignItems: "flex-start",
  };

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background, overflow: "hidden" }}>
      <div style={stage}>
        {!transparent ? <canvas ref={paperRef} width={pw} height={ph} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} /> : null}
        {drums.map(({ k, style }) => (
          <div key={k} style={style}>
            <canvas ref={drumRefs[k]} width={W} height={H} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
            <div style={titleStyle}>
              <div
                data-21st-slot="text"
                style={{
                  fontFamily: font,
                  fontWeight: 700,
                  fontSize: size,
                  lineHeight: LINE,
                  letterSpacing: "-0.025em",
                  color: titleInks[k],
                  maxWidth: "100%",
                  overflowWrap: "anywhere",
                }}
              >
                {lines.map((l, i) => (
                  <span key={i} style={{ display: "block" }}>
                    {l}
                    {i < lines.length - 1 ? " " : ""}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        {kicker.trim() ? (
          <div
            style={{
              position: "absolute",
              left: g.kx,
              top: g.ky,
              maxWidth: g.kMaxW,
              display: "flex",
              alignItems: "center",
              gap: u * 1.6,
              opacity: kIn,
              transform: kIn < 1 ? `translateX(${(-(1 - kIn) * u * 3).toFixed(2)}px)` : undefined,
            }}
          >
            <div style={{ width: u * 4 * kIn, height: Math.max(1, u * 0.18), background: ruleColor, flex: "none" }} />
            <div
              data-21st-slot="kicker"
              style={{ fontFamily: font, fontWeight: 500, fontSize: kickerSize, lineHeight: 1.25, letterSpacing: "0.01em", color: kickerColor, overflowWrap: "anywhere" }}
            >
              {kicker}
            </div>
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
