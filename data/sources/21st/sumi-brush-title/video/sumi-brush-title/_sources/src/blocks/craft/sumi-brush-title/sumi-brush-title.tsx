// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef } from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, APPLE_SNAPPY, brandFontStack, easeOut, ramp, springSnap, useLayout, withAlpha } from "../../../kit/index";
import { rng, simplex3 } from "../_lib/noise";
import type { schema } from "./sumi-brush-title.schema";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];

// ---------- timeline (frames at 30 fps; the clip holds after SETTLED) ----------
const T0 = 4; // brush lands
const DUR = 28; // brush leaves the paper
const T_KICK = 30;
const T_SEAL = 46;
const SETTLED = 72;
/** Where along the stroke (0..1) the title sits. */
const ST = 0.4;
/** Samples along the stroke. */
const M = 240;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='5' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")";

// ---------- color helpers (brand props only; pure dark/light only as shade and glint) ----------
const DARK: RGB = [0, 0, 0];
const LIGHT: RGB = [255, 255, 255];
function rgbOf(c: string): RGB {
  let hex = /^#([0-9a-f]{3,8})$/i.exec(c)?.[1];
  if (hex) {
    if (hex.length === 3 || hex.length === 4) hex = hex.slice(0, 3).split("").map((x) => x + x).join("");
    const n = parseInt(hex.slice(0, 6), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  const m = /rgba?\(([^)]+)\)/i.exec(c);
  if (m) {
    const p = m[1]!.split(/[ ,/]+/).filter(Boolean).map(Number);
    return [p[0] ?? 0, p[1] ?? 0, p[2] ?? 0];
  }
  return [128, 128, 128];
}
function mix(a: RGB, b: RGB, t: number): RGB {
  const k = Math.max(0, Math.min(1, t));
  return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k];
}
function css(c: RGB, a = 1): string {
  return `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${Math.max(0, Math.min(1, a)).toFixed(3)})`;
}
function lum(c: RGB): number {
  const ch = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * ch(c[0]) + 0.7152 * ch(c[1]) + 0.0722 * ch(c[2]);
}
function contrast(a: RGB, b: RGB): number {
  const la = lum(a), lb = lum(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}
const ss = (a: number, b: number, x: number) => {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

/** Balanced line break into `n` lines (by characters). */
function splitLines(text: string, n: number): string[] {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (n <= 1 || words.length < 2) return [words.join(" ")];
  const join = (a: number, b: number) => words.slice(a, b).join(" ");
  let best: string[] = [words.join(" ")];
  let bestScore = Infinity;
  const W = words.length;
  if (n === 2 || W === 2) {
    for (let i = 1; i < W; i++) {
      const ls = [join(0, i), join(i, W)];
      const sc = Math.max(...ls.map((l) => l.length));
      if (sc < bestScore) { bestScore = sc; best = ls; }
    }
    return best;
  }
  for (let i = 1; i < W - 1; i++)
    for (let j = i + 1; j < W; j++) {
      const ls = [join(0, i), join(i, j), join(j, W)];
      const sc = Math.max(...ls.map((l) => l.length));
      if (sc < bestScore) { bestScore = sc; best = ls; }
    }
  return best;
}

function charEmFor(font: string): number {
  if (/Bebas/.test(font)) return 0.42;
  if (/Mono/.test(font)) return 0.62;
  if (/Caveat/.test(font)) return 0.44;
  if (/Serif|Baskerville/.test(font)) return 0.54;
  return 0.6;
}

/** Brush head position along the stroke: lands fast, slows into the tail. */
function headAt(f: number): number {
  const t = Math.max(0, Math.min(1, (f - T0) / DUR));
  return 1.035 * (1 - Math.pow(1 - t, 3));
}

/** Frames between one line's stroke and the next. */
const STAGGER = 8;

type Hair = { o: number; w: number; a: number; tone: number; s0: number; s1: number; lag: number; xs: Float32Array; ys: Float32Array; on: Uint8Array };
type Drop = { s: number; o: number; r: number; e: number; tail: boolean };
type Geo = {
  at: (s: number) => [number, number];
  cx: Float32Array; cy: Float32Array; nx: Float32Array; ny: Float32Array; top: Float32Array; bot: Float32Array;
  hwAt: (j: number, o: number) => number;
};
type StrokeSpec = { L: number; HW: number; px: number; py: number; tilt: number; dryStart: number; seed: number; delay: number; lead: boolean };
type Stroke = StrokeSpec & { geo: Geo; hairs: Hair[]; cuts: Hair[]; drops: Drop[] };

/** Centre line, normals and two ragged edges of one stroke. Frame-independent. */
function buildGeo(sp: StrokeSpec, theta: number): Geo {
  const { L, HW, px, py, tilt, seed } = sp;
  const cos = Math.cos(theta), sin = Math.sin(theta);
  const at = (s: number): [number, number] => {
    const d = s - ST;
    const lx = L * d;
    const ly = L * (0.05 * d * d + tilt * d + 0.012 * Math.sin(d * 5.2 + 0.6 + seed)) - L * 0.03 * Math.pow(ss(0.82, 1.15, s), 2);
    return [px + lx * cos - ly * sin, py + lx * sin + ly * cos];
  };
  const en = simplex3(seed * 7 + 3);
  const cx = new Float32Array(M + 1), cy = new Float32Array(M + 1), nx = new Float32Array(M + 1), ny = new Float32Array(M + 1);
  const top = new Float32Array(M + 1), bot = new Float32Array(M + 1);
  for (let j = 0; j <= M; j++) {
    const s = j / M;
    const [x, y] = at(s);
    const [xa, ya] = at(s - 0.002);
    const [xb, yb] = at(s + 0.002);
    const tx = xb - xa, ty = yb - ya, tl = Math.hypot(tx, ty) || 1;
    cx[j] = x; cy[j] = y; nx[j] = -ty / tl; ny[j] = tx / tl;
    // Pressed blot at the start, full body, then the brush lifts.
    const press = 0.84 + 0.3 * ss(0, 0.05, s) - 0.14 * ss(0.05, 0.2, s);
    const lift = 1 - 0.3 * ss(0.5, 1.0, s);
    top[j] = HW * press * lift * (1 + 0.085 * en(s * 2.4, 0, 0) + 0.03 * en(s * 10, 1, 0));
    bot[j] = HW * press * lift * (1 + 0.085 * en(s * 2.4, 4, 0) + 0.03 * en(s * 10, 5, 0));
  }
  return { at, cx, cy, nx, ny, top, bot, hwAt: (j, o) => (o < 0 ? top[j]! : bot[j]!) };
}

/** Bristles (with clumps and dry gaps), kasure scratches and splatter of one stroke. Frame-independent. */
function buildStroke(sp: StrokeSpec, theta: number): Stroke {
  const geo = buildGeo(sp, theta);
  const { HW, seed, dryStart } = sp;
  const r = rng(`sumi-${seed}`);
  const nA = simplex3(seed * 7 + 1);
  const nB = simplex3(seed * 7 + 2);
  const N = Math.round(Math.max(70, Math.min(170, (HW * 2) / 2.4)));
  const spacing = (2 * HW) / N;
  const CL = 13;
  const clumps = Array.from({ length: CL }, () => ({ s1: r(), load: r() }));

  const build = (o: number, w: number, a: number, tone: number, load: number, s1: number, own: number, kasure: boolean): Hair => {
    const edge = Math.pow(Math.abs(o), 4);
    const cap = 0.065 * (1 - Math.sqrt(Math.max(0, 1 - o * o)));
    const s0 = 0.004 + cap + 0.028 * ((o + 1) / 2) + 0.01 * r();
    const lag = 0.02 * (1 - (o + 1) / 2) + 0.07 * r() * r();
    const fq = kasure ? 1.5 + 2.5 * r() : 4 + 10 * r();
    const ph = r() * 50;
    const xs = new Float32Array(M + 1), ys = new Float32Array(M + 1), on = new Uint8Array(M + 1);
    for (let j = 0; j <= M; j++) {
      const s = j / M;
      const dry = ss(dryStart, 1.0, s);
      const oe = o * (1 + 0.22 * dry) + 0.06 * dry * Math.sin(own * 9 + seed);
      const hw = geo.hwAt(j, o);
      xs[j] = geo.cx[j]! + geo.nx[j]! * oe * hw;
      ys[j] = geo.cy[j]! + geo.ny[j]! * oe * hw;
      const v1 = 0.5 + 0.5 * nA(s * fq + ph, own * 3.1, 0);
      if (kasure) {
        // Long dry scratches, more of them as the brush runs out; never inside the title band.
        on[j] = v1 > 0.62 - 0.18 * ss(0.25, dryStart + 0.1, s) && s > 0.08 ? 1 : 0;
      } else {
        const v2 = 0.5 + 0.5 * nB(s * 5, o * 2.2, 3);
        const v = 0.5 * v1 + 0.5 * v2;
        const thr = dry * (0.38 + 0.7 * (1 - load)) + edge * (0.2 + 0.35 * dry) - 0.08;
        on[j] = v > thr ? 1 : 0;
      }
    }
    return { o, w, a, tone, s0, s1, lag, xs, ys, on };
  };

  const hairs: Hair[] = [];
  for (let i = 0; i < N; i++) {
    const o = -1 + (2 * (i + 0.15 + 0.7 * r())) / N;
    const cl = clumps[Math.min(CL - 1, Math.floor(((o + 1) / 2) * CL))]!;
    const edge = Math.pow(Math.abs(o), 3);
    const load = Math.max(0, Math.min(1, 0.55 * cl.load + 0.45 * r() + 0.1 - edge * 0.3));
    const w = Math.max(1.2, spacing * (1.4 + 1.5 * r()));
    const a = 0.86 + 0.14 * r();
    // Edges pool darker pigment, some hairs catch light, some carry more ink.
    const tone = Math.abs(o) > 0.92 ? -(0.06 + 0.1 * r()) : r() < 0.2 ? 0.06 + 0.12 * r() : r() < 0.3 ? -(0.05 + 0.1 * r()) : (r() - 0.5) * 0.05;
    const s1 = Math.min(1, 0.76 + 0.24 * Math.pow(0.6 * cl.s1 + 0.4 * r(), 0.7) - edge * 0.08 * r());
    hairs.push(build(o, w, a, tone, load, s1, i / N, false));
  }
  const cuts: Hair[] = [];
  const nCuts = Math.round(HW / 7);
  for (let k = 0; k < nCuts; k++) {
    const o = (k % 2 ? 1 : -1) * (0.6 + 0.38 * r());
    cuts.push(build(o, Math.max(1, spacing * (0.4 + 1.0 * r())), 0.45 + 0.5 * r(), 0, 1, 0.55 + 0.45 * r(), 2 + k * 0.37, true));
  }
  const drops: Drop[] = [];
  const many = sp.lead ? 1 : 0.5;
  for (let k = 0; k < Math.round(9 * many); k++) drops.push({ s: 0.005 + 0.06 * r(), o: (r() < 0.5 ? -1 : 1) * (1.12 + 0.7 * r()), r: HW * (0.012 + 0.03 * r() * r()), e: 1 + r(), tail: false });
  for (let k = 0; k < Math.round(6 * many); k++) drops.push({ s: 0.12 + 0.5 * r(), o: (r() < 0.5 ? -1 : 1) * (1.08 + 0.25 * r()), r: HW * (0.006 + 0.012 * r()), e: 1, tail: false });
  for (let k = 0; k < 12; k++) drops.push({ s: 1.0 + 0.11 * r(), o: (r() - 0.5) * 1.3, r: HW * (0.006 + 0.016 * r()), e: 2 + 3 * r(), tail: true });
  return { ...sp, geo, hairs, cuts, drops };
}

function tracePath(ctx: CanvasRenderingContext2D, h: Hair, from: number, to: number) {
  ctx.beginPath();
  let pen = false;
  for (let j = from; j <= to; j++) {
    if (h.on[j]) {
      if (!pen) { ctx.moveTo(h.xs[j]!, h.ys[j]!); pen = true; }
      else ctx.lineTo(h.xs[j]!, h.ys[j]!);
    } else pen = false;
  }
  ctx.stroke();
}

/**
 * Sumi ink brush strokes paint across the frame, one per title line: a
 * pressed blot, a wet body of overlapping bristles, then the ink runs out
 * and the bristles split into dry streaks. Each line of the title lands on
 * its wet stroke; a seal with the first letter stamps by the tail.
 * Canvas2D, everything seeded.
 */
export const Component: React.FC<Props> = ({ text, kicker, color, primary, secondary, background, fontFamily, titleInk, seal, grain, seed }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: W, height: H, aspect } = useLayout();
  const backRef = useRef<HTMLCanvasElement>(null);
  const inkRef = useRef<HTMLCanvasElement>(null);
  const sealCanvas = useMemo(() => (typeof document === "undefined" ? null : document.createElement("canvas")), []);
  const transparent = background === "transparent";
  const family = brandFontStack(fontFamily);
  const weight = /Serif|Bebas|Caveat|Instrument/.test(fontFamily) ? 400 : 700;
  const minFont = aspect === "9:16" ? H * 0.03 : H * 0.018;

  // ---------- layout ----------
  const L_MAX = aspect === "9:16" ? W * 1.12 : aspect === "1:1" ? W * 0.96 : W * 0.9;
  // Portrait: the title and its strokes fill most of the safe area (bigger type, wider title box).
  const maxF = aspect === "9:16" ? W * 0.235 : aspect === "1:1" ? W * 0.15 : H * 0.14;
  const boxH = aspect === "9:16" ? H * 0.38 : aspect === "1:1" ? H * 0.36 : H * 0.36;
  const em = charEmFor(fontFamily);
  const LH = 1.18;
  const boxW = aspect === "9:16" ? W * 0.74 : L_MAX * 0.5;
  let lines = [text.trim()];
  let F = 0;
  let bestScore = -1;
  for (let n = 1; n <= 3; n++) {
    const ls = splitLines(text, n);
    if (ls.length !== n && n > 1) continue;
    const longest = Math.max(...ls.map((l) => l.length), 1);
    const f = Math.max(minFont, Math.min(maxF, boxW / (longest * em), boxH / (n * LH)));
    const score = f * (n === 1 ? 1 : n === 2 ? 0.93 : 0.86);
    if (score > bestScore) { bestScore = score; F = f; lines = ls; }
  }
  const n = lines.length;
  const lineH = F * LH;
  const blockH = n * lineH;
  const HW = n === 1 ? lineH / 2 + F * 0.52 : lineH / 2 + F * 0.36;
  const lineW = lines.map((l) => Math.max(1, l.length) * em * F);
  const Ls = lineW.map((w) => Math.min(L_MAX, Math.max(L_MAX * (n === 1 ? 0.8 : 0.72), (w + F * 0.6) / 0.56)));
  const Lbig = Math.max(...Ls);
  const PX = Math.max(W * 0.035, W / 2 - 0.46 * Lbig) + ST * Lbig;
  const PY = H * (aspect === "9:16" ? 0.5 : 0.52) + (kicker.trim() ? 0 : -H * 0.015);
  const theta = (aspect === "9:16" ? -4.5 : -3) * (Math.PI / 180);
  const kickF = Math.max(minFont, Math.min(Math.max(F * 0.3, minFont * 1.3), (W * 0.8) / (Math.max(1, kicker.length) * 0.56)));
  const sealSide = Math.max(minFont * 2.6, Math.min(HW * 0.6, F * 0.95));

  const specs: StrokeSpec[] = useMemo(() => {
    const cos = Math.cos(theta), sin = Math.sin(theta);
    return lines.map((_, k) => {
      const L = Ls[k]!;
      const dx = n === 1 ? 0 : (k % 2 ? 1 : -1) * 0.025 * L;
      const dy = (k - (n - 1) / 2) * lineH;
      return {
        L,
        HW,
        px: PX + dx * cos - dy * sin,
        py: PY + dx * sin + dy * cos,
        tilt: n === 1 ? 0 : (k % 2 ? 0.012 : -0.008),
        dryStart: Math.min(0.86, Math.max(0.6, ST + (lineW[k]! / 2 + Math.abs(dx) + F * 0.35) / L)),
        seed: seed * 31 + k * 7,
        delay: k * STAGGER,
        lead: k === 0,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lines.join("\n"), Ls.join(","), HW, PX, PY, theta, lineH, F, seed]);
  const strokes = useMemo(() => specs.map((sp) => buildStroke(sp, theta)), [specs, theta]);

  // ---------- title ink: reads on the brush, not on the paper ----------
  const P = rgbOf(primary);
  const C = rgbOf(color);
  const B = transparent ? null : rgbOf(background);
  let ink = color;
  if (titleInk === "background" && B) ink = background;
  else if (titleInk === "auto" && contrast(C, P) < 3) {
    if (B && contrast(B, P) >= contrast(C, P)) ink = background;
    else ink = css(mix(C, lum(P) > 0.35 ? DARK : LIGHT, 0.85));
  }

  // ---------- timing ----------
  const lastDelay = (n - 1) * STAGGER;
  const tSeal = T_SEAL + lastDelay;
  const settled = SETTLED + lastDelay;
  const kickIn = springSnap(frame, fps, T_KICK, APPLE);
  const kickOpacity = ramp(frame, [T_KICK, T_KICK + 8], [0, 1]);
  const sealIn = springSnap(frame, fps, tSeal, APPLE_SNAPPY);
  const lineAnim = strokes.map((st, k) => {
    const u = headAt(frame - st.delay);
    const startS = ST - (lineW[k]! / 2) / st.L;
    let t = T0 + st.delay;
    for (let f = t; f < T0 + st.delay + DUR; f++) if (headAt(f - st.delay) < startS + 0.03) t = f + 1;
    const cw = 2 * ST * st.L;
    const dx = n === 1 ? 0 : (k % 2 ? 1 : -1) * 0.025 * st.L;
    return {
      u,
      cw,
      dx,
      clipRight: Math.max(0, cw - ((u - 0.06) * st.L + dx)),
      scale: 1.07 - 0.07 * springSnap(frame, fps, t, APPLE),
      opacity: ramp(frame, [t, t + 3], [0, 1]),
    };
  });
  const heads = lineAnim.map((a) => a.u);

  // ---------- draw ----------
  const bw = Math.max(2, Math.round(W / 2));
  const bh = Math.max(2, Math.round(H / 2));
  useLayoutEffect(() => {
    const back = backRef.current?.getContext("2d", { willReadFrequently: true });
    const ctx = inkRef.current?.getContext("2d", { willReadFrequently: true });
    if (!back || !ctx) return;
    const dark = B ? lum(B) < 0.35 : lum(C) > 0.5;
    const r = rng(`paper-${seed}`);

    // Back layer (half res): paper, fibres, vignette, ink bleeding into the paper.
    back.setTransform(1, 0, 0, 1, 0, 0);
    back.globalCompositeOperation = "source-over";
    back.filter = "none";
    back.globalAlpha = 1;
    back.clearRect(0, 0, bw, bh);
    if (B) {
      back.fillStyle = css(B);
      back.fillRect(0, 0, bw, bh);
      back.strokeStyle = css(mix(B, C, 0.5), dark ? 0.04 : 0.032);
      back.lineWidth = Math.max(0.6, bh * 0.0012);
      for (let k = 0; k < 160; k++) {
        const x = r() * bw, y = r() * bh, len = Math.min(bw, bh) * (0.015 + 0.04 * r()), ang = r() * Math.PI * 2, bend = (r() - 0.5) * len;
        back.beginPath();
        back.moveTo(x, y);
        back.quadraticCurveTo(x + Math.cos(ang) * len * 0.5 - Math.sin(ang) * bend, y + Math.sin(ang) * len * 0.5 + Math.cos(ang) * bend, x + Math.cos(ang) * len, y + Math.sin(ang) * len);
        back.stroke();
      }
      const vg = back.createRadialGradient(bw / 2, bh / 2, Math.min(bw, bh) * 0.25, bw / 2, bh / 2, Math.hypot(bw, bh) * 0.6);
      const shade = dark ? mix(B, DARK, 0.55) : mix(B, C, 0.1);
      vg.addColorStop(0, css(shade, 0));
      vg.addColorStop(1, css(shade, dark ? 0.75 : 0.5));
      back.fillStyle = vg;
      back.fillRect(0, 0, bw, bh);
    }
    strokes.forEach((st, k) => {
      const u = heads[k]!;
      const end = Math.min(u, 1);
      if (end <= 0.01) return;
      const g = st.geo;
      const grow = ss(T0 + st.delay + 4, SETTLED + st.delay, frame);
      back.filter = `blur(${Math.round((st.HW * (0.12 + 0.22 * grow)) / 2)}px)`;
      back.fillStyle = css(P, (dark ? 0.2 : 0.12) * (0.6 + 0.4 * grow));
      const jEnd = Math.floor(end * M);
      back.beginPath();
      for (let j = 0; j <= jEnd; j++) back.lineTo((g.cx[j]! - g.nx[j]! * g.top[j]! * 1.04) / 2, (g.cy[j]! - g.ny[j]! * g.top[j]! * 1.04) / 2);
      for (let j = jEnd; j >= 0; j--) back.lineTo((g.cx[j]! + g.nx[j]! * g.bot[j]! * 1.04) / 2, (g.cy[j]! + g.ny[j]! * g.bot[j]! * 1.04) / 2);
      back.closePath();
      back.fill();
      back.filter = "none";
    });

    // Ink layer (full res).
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.filter = "none";
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, W, H);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    strokes.forEach((st, k) => {
      const u = heads[k]!;
      if (u <= 0) return;
      const g = st.geo;
      // Each stroke is painted on its own layer so the kasure scratches only cut this stroke.
      // Wet body: solid ink under the title, fading out where the brush runs dry.
      const bodyEnd = Math.min(u - 0.07, st.dryStart + 0.04);
      if (bodyEnd > 0.04) {
        const j0 = Math.round(0.035 * M), j1 = Math.floor(bodyEnd * M);
        const fadeFrom = Math.min(bodyEnd - 0.005, Math.max(0.04, st.dryStart - 0.1));
        const [ax, ay] = g.at(0.035);
        const [ex, ey] = g.at(bodyEnd);
        const grad = ctx.createLinearGradient(ax, ay, ex, ey);
        const span = Math.max(1e-3, bodyEnd - 0.035);
        grad.addColorStop(0, css(P));
        grad.addColorStop(Math.max(0, Math.min(1, (fadeFrom - 0.035) / span)), css(P));
        grad.addColorStop(1, css(P, u < st.dryStart ? 1 : 0));
        ctx.fillStyle = grad;
        ctx.beginPath();
        for (let j = j0; j <= j1; j++) ctx.lineTo(g.cx[j]! - g.nx[j]! * g.top[j]! * 0.8, g.cy[j]! - g.ny[j]! * g.top[j]! * 0.8);
        for (let j = j1; j >= j0; j--) ctx.lineTo(g.cx[j]! + g.nx[j]! * g.bot[j]! * 0.8, g.cy[j]! + g.ny[j]! * g.bot[j]! * 0.8);
        ctx.closePath();
        ctx.fill();
      }
      for (const h of st.hairs) {
        const end = Math.min(h.s1, u - h.lag);
        if (end <= h.s0) continue;
        const ja = Math.ceil(h.s0 * M), jb = Math.floor(end * M);
        if (jb <= ja) continue;
        const taperFrom = h.s1 <= u - h.lag ? Math.max(ja, jb - Math.round(0.035 * M)) : jb;
        ctx.strokeStyle = css(h.tone < 0 ? mix(P, DARK, -h.tone) : mix(P, LIGHT, h.tone), h.a);
        if (taperFrom > ja) { ctx.lineWidth = h.w; tracePath(ctx, h, ja, taperFrom); }
        if (jb > taperFrom) { ctx.lineWidth = h.w * 0.45; tracePath(ctx, h, taperFrom, jb); }
      }
      // Later strokes cover earlier ones; scratches cut only where this stroke is.
      ctx.globalCompositeOperation = k === 0 ? "destination-out" : "source-atop";
      for (const h of st.cuts) {
        const end = Math.min(h.s1, u - 0.04);
        const ja = Math.ceil(0.08 * M), jb = Math.floor(end * M);
        if (jb <= ja) continue;
        ctx.strokeStyle = k === 0 ? css(DARK, h.a) : css(mix(P, DARK, 0.35), h.a * 0.6);
        ctx.lineWidth = h.w;
        tracePath(ctx, h, ja, jb);
      }
      // Ink density: the loaded start reads deeper, the dry tail paler.
      ctx.globalCompositeOperation = "source-atop";
      {
        const [ax, ay] = g.at(0);
        const [ex, ey] = g.at(1);
        const grad = ctx.createLinearGradient(ax, ay, ex, ey);
        grad.addColorStop(0, css(mix(P, DARK, 0.5), 0.32));
        grad.addColorStop(0.3, css(mix(P, DARK, 0.5), 0));
        grad.addColorStop(0.6, css(mix(P, LIGHT, 0.5), 0));
        grad.addColorStop(1, css(mix(P, LIGHT, 0.5), 0.22));
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
      }
      ctx.globalCompositeOperation = "source-over";

      // Wet sheen along the upper ridge, drying off as the ink sinks in.
      const sheenEnd = Math.min(u - 0.03, st.dryStart);
      if (sheenEnd > 0.08) {
        const wet = 1 - 0.7 * ss(T0 + DUR + st.delay, SETTLED + 10 + st.delay, frame);
        const kk = (dark ? 1 : 0.7) * wet * (lum(P) > 0.6 ? 0.5 : 1);
        const j0 = Math.round(0.05 * M), j1 = Math.floor(sheenEnd * M);
        for (const [wf, a, o] of [[0.26, 0.05, -0.5], [0.13, 0.08, -0.54], [0.045, 0.16, -0.56], [0.03, 0.06, 0.62]] as const) {
          const grad = ctx.createLinearGradient(g.cx[j0]!, g.cy[j0]!, g.cx[j1]!, g.cy[j1]!);
          grad.addColorStop(0, css(LIGHT, 0));
          grad.addColorStop(0.18, css(LIGHT, a * kk));
          grad.addColorStop(0.7, css(LIGHT, a * kk * 0.8));
          grad.addColorStop(1, css(LIGHT, 0));
          ctx.strokeStyle = grad;
          ctx.lineWidth = st.HW * wf;
          ctx.beginPath();
          for (let j = j0; j <= j1; j++) {
            const wv = Math.sin(j * 0.09 + st.seed) * 0.04;
            const hw = g.hwAt(j, o) * (o + wv);
            ctx.lineTo(g.cx[j]! + g.nx[j]! * hw, g.cy[j]! + g.ny[j]! * hw);
          }
          ctx.stroke();
        }
      }

      // Splatter.
      ctx.fillStyle = css(P, 0.95);
      const tEnd = T0 + st.delay + DUR * 0.62;
      for (const d of st.drops) {
        let s = d.s;
        let sc = 1;
        if (d.tail) {
          const fly = ss(tEnd, tEnd + 6, frame);
          if (fly <= 0) continue;
          s = 0.99 + (d.s - 0.99) * fly;
          sc = 0.5 + 0.5 * fly;
        } else if (u < d.s + 0.04) continue;
        const [x, y] = g.at(s);
        const [x2, y2] = g.at(s + 0.002);
        const j = Math.max(0, Math.min(M, Math.round(Math.min(1, s) * M)));
        const off = d.o * g.hwAt(j, d.o);
        ctx.beginPath();
        ctx.ellipse(x + g.nx[j]! * off, y + g.ny[j]! * off, d.r * d.e * sc, d.r * sc, Math.atan2(y2 - y, x2 - x), 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Seal: carved stamp with the title's first letter, drawn off-canvas then stamped.
    if (seal && sealCanvas && sealIn > 0.001) {
      const side = Math.round(sealSide);
      const pad = Math.ceil(side * 0.1);
      const sw = side + pad * 2;
      if (sealCanvas.width !== sw) { sealCanvas.width = sw; sealCanvas.height = sw; }
      const sc = sealCanvas.getContext("2d", { willReadFrequently: true });
      if (sc) {
        sc.setTransform(1, 0, 0, 1, 0, 0);
        sc.globalCompositeOperation = "source-over";
        sc.globalAlpha = 1;
        sc.clearRect(0, 0, sw, sw);
        sc.fillStyle = css(rgbOf(secondary), 0.96);
        sc.beginPath();
        sc.roundRect(pad, pad, side, side, side * 0.07);
        sc.fill();
        sc.globalCompositeOperation = "destination-out";
        sc.strokeStyle = css(DARK, 1);
        sc.lineWidth = Math.max(1, side * 0.045);
        sc.beginPath();
        sc.roundRect(pad + side * 0.1, pad + side * 0.1, side * 0.8, side * 0.8, side * 0.04);
        sc.stroke();
        sc.fillStyle = css(DARK, 1);
        sc.font = `${weight} ${Math.round(side * 0.58)}px ${family}`;
        sc.textAlign = "center";
        sc.textBaseline = "middle";
        sc.fillText(Array.from(text.trim())[0] ?? "", sw / 2, sw / 2 + side * 0.03);
        // Uneven pressure: speckles and bitten edges.
        const sn = simplex3(seed * 13 + 5);
        const cell = Math.max(1, side / 34);
        for (let y = pad; y < pad + side; y += cell)
          for (let x = pad; x < pad + side; x += cell) {
            const ed = Math.min(x - pad, y - pad, pad + side - x, pad + side - y) / side;
            const v = sn(x / (side * 0.09), y / (side * 0.09), 0) * 0.5 + 0.5 + 0.25 * sn(x / (side * 0.02), y / (side * 0.02), 2);
            const thr = 0.92 - 0.55 * (1 - ss(0, 0.07, ed));
            if (v > thr) {
              sc.globalAlpha = Math.min(1, (v - thr) * 6);
              sc.fillRect(x, y, cell * 1.1, cell * 1.1);
            }
          }
        sc.globalAlpha = 1;
        sc.globalCompositeOperation = "source-over";
        const last = strokes[strokes.length - 1]!;
        const sl = 0.76;
        const [bx, by] = last.geo.at(sl);
        const j = Math.round(sl * M);
        const offN = last.geo.bot[j]! + side * 0.66;
        const m = side * 0.75 + W * 0.03;
        const gx = Math.max(m, Math.min(W - m, bx + last.geo.nx[j]! * offN));
        const gy = Math.max(m, Math.min(H - m, by + last.geo.ny[j]! * offN));
        const k = 1.45 - 0.45 * sealIn;
        ctx.save();
        ctx.globalAlpha = ramp(frame, [tSeal, tSeal + 2], [0, 1]);
        ctx.translate(gx, gy);
        ctx.rotate(theta + 0.07);
        ctx.scale(k, k);
        ctx.drawImage(sealCanvas, -sw / 2, -sw / 2);
        ctx.restore();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frame, heads.join(","), W, H, bw, bh, strokes, primary, secondary, color, background, seed, seal, sealSide, sealIn, tSeal, text, family, weight, theta, sealCanvas]);

  const rot = `rotate(${theta}rad)`;
  // Slow push-out: the camera eases back as the ink settles, landing exactly on 1.
  const cam = 1 + 0.04 * (1 - easeOut(frame / settled));
  const cwMax = Math.max(...lineAnim.map((a) => a.cw));
  const dy0 = -((n - 1) / 2) * lineH;
  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background, overflow: "hidden" }}>
      <AbsoluteFill style={{ transform: `scale(${cam})`, transformOrigin: `${PX}px ${PY}px` }}>
        <canvas ref={backRef} width={bw} height={bh} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
        <canvas ref={inkRef} width={W} height={H} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
        <div style={{ position: "absolute", left: PX, top: PY, width: 0, height: 0, transform: rot }}>
          {kicker.trim() ? (
            <div
              data-21st-slot="kicker"
              style={{
                position: "absolute",
                left: -Math.max(...lineW) / 2,
                bottom: HW * 1.12 - dy0,
                whiteSpace: "nowrap",
                fontFamily: family,
                fontWeight: weight,
                fontSize: kickF,
                lineHeight: 1.25,
                letterSpacing: "0.03em",
                color: withAlpha(color, 0.82),
                opacity: kickOpacity,
                transform: `translateY(${(1 - kickIn) * kickF * 0.9}px)`,
              }}
            >
              {kicker}
            </div>
          ) : null}
          <div
            data-21st-slot="text"
            style={{
              position: "absolute",
              left: -cwMax / 2,
              top: -blockH / 2,
              width: cwMax,
              height: blockH,
              fontFamily: family,
              fontWeight: weight,
              fontSize: F,
              lineHeight: LH,
              letterSpacing: "-0.01em",
              color: ink,
            }}
          >
            {lines.map((l, k) => {
              const a = lineAnim[k]!;
              return (
                <div
                  key={k}
                  style={{
                    position: "absolute",
                    left: cwMax / 2 - a.cw / 2,
                    top: k * lineH - F * 0.05,
                    width: a.cw,
                    height: lineH,
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    opacity: a.opacity,
                    transform: `scale(${a.scale})`,
                    clipPath: `inset(-40% ${a.clipRight}px -40% -10%)`,
                  }}
                >
                  {l}
                </div>
              );
            })}
          </div>
        </div>
      </AbsoluteFill>
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: 0.07, mixBlendMode: "overlay" }} /> : null}
    </AbsoluteFill>
  );
};
