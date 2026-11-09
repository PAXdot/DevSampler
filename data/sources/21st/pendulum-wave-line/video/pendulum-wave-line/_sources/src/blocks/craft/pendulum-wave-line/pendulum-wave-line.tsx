// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useRef } from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, easeOut, fitFontSize, ramp, useLayout } from "../../../kit/index";
import type { schema } from "./pendulum-wave-line.schema";

const TAU = Math.PI * 2;
/** Frame on which every bob reaches the same extreme of its swing (zero velocity). */
const SYNC = 150;
/** Frame by which the row hangs perfectly still. */
const SETTLED = 200;
/** The clip opens part-way through the apparatus' cycle, just before the two-row split. */
const U0 = 0.42;
/** Swings of the slowest pendulum per full cycle; pendulum k makes N0 + k. */
const N0 = 8;
/** Shutter: fraction of a frame the bobs smear over, sampled this many times. */
const SHUTTER = 0.5;
const MAX_SAMPLES = 9;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='23' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

type RGB = [number, number, number];
const HI: RGB = [255, 255, 255];
const LO: RGB = [0, 0, 0];

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
const css = (c: RGB, a = 1) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${Math.max(0, Math.min(1, a)).toFixed(3)})`;
const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
const smooth = (x: number) => {
  const t = clamp01(x);
  return t * t * (3 - 2 * t);
};

/**
 * Signed swing of bob k (world px along its swing direction) at a fractional frame.
 * Before SYNC each bob is a true harmonic pendulum: N0 + k whole swings per cycle, so
 * their phases realign exactly on SYNC, where all of them sit at the same extreme with
 * zero velocity. From there the row returns as one damped swing and comes to rest.
 */
function swing(k: number, f: number, amp: number, fps: number): number {
  if (f >= SETTLED) return 0;
  if (f <= SYNC) {
    const u = U0 + ((1 - U0) * f) / SYNC;
    const env = 1 - 0.1 * clamp01(f / SYNC);
    return -amp * env * Math.cos(TAU * (N0 + k) * u);
  }
  const t = (f - SYNC) / fps;
  const w = TAU * 1.05;
  const z = 0.42;
  const wd = w * Math.sqrt(1 - z * z);
  const x = Math.exp(-z * w * t) * (Math.cos(wd * t) + ((z * w) / wd) * Math.sin(wd * t));
  const fade = 1 - smooth((f - SYNC - 30) / (SETTLED - SYNC - 30));
  return -amp * 0.9 * x * fade;
}

type Sprites = { key: string; bobs: HTMLCanvasElement[]; glows: HTMLCanvasElement[]; shadow: HTMLCanvasElement; glint: HTMLCanvasElement; R: number; pad: number };

/** A polished metal sphere lit by a soft key from upper left, with its thread eyelet. */
function paintBob(base: RGB, R: number, pad: number, dark: boolean): HTMLCanvasElement {
  const S = Math.ceil(2 * (R + pad));
  const cv = document.createElement("canvas");
  cv.width = S;
  cv.height = S;
  const c = cv.getContext("2d", { willReadFrequently: true })!;
  const o = S / 2;
  // Eyelet and crimp the threads tie into.
  c.fillStyle = css(mix(base, LO, 0.45));
  c.beginPath();
  c.ellipse(o, o - R * 0.96, R * 0.15, R * 0.11, 0, 0, TAU);
  c.fill();
  c.lineWidth = Math.max(1, R * 0.05);
  c.strokeStyle = css(mix(base, LO, 0.35));
  c.beginPath();
  c.arc(o, o - R * 1.11, R * 0.075, 0, TAU);
  c.stroke();
  c.fillStyle = css(mix(base, HI, 0.5), 0.8);
  c.beginPath();
  c.ellipse(o - R * 0.05, o - R * 0.99, R * 0.06, R * 0.035, 0, 0, TAU);
  c.fill();

  // Body: the metal's own color, falling off from the key into a deep terminator.
  const g = c.createRadialGradient(o - R * 0.3, o - R * 0.38, R * 0.02, o - R * 0.05, o - R * 0.05, R * 1.08);
  g.addColorStop(0, css(mix(base, HI, 0.35)));
  g.addColorStop(0.28, css(base));
  g.addColorStop(0.62, css(mix(base, LO, 0.38)));
  g.addColorStop(0.88, css(mix(base, LO, 0.72)));
  g.addColorStop(1, css(mix(base, LO, 0.62)));
  c.fillStyle = g;
  c.beginPath();
  c.arc(o, o, R, 0, TAU);
  c.fill();

  c.save();
  c.beginPath();
  c.arc(o, o, R, 0, TAU);
  c.clip();
  // Polished metal mirrors the studio. Upper half: the bright ceiling, bent around the curve.
  const hzY = o + R * 0.08;
  c.save();
  c.beginPath();
  c.ellipse(o, hzY, R * 1.02, R * 0.3, 0, Math.PI, TAU);
  c.lineTo(o + R, o - R * 1.1);
  c.lineTo(o - R, o - R * 1.1);
  c.closePath();
  c.clip();
  const sky = c.createLinearGradient(0, o - R, 0, hzY);
  sky.addColorStop(0, css(mix(base, HI, 0.55), 0.55));
  sky.addColorStop(0.55, css(mix(base, HI, 0.35), 0.28));
  sky.addColorStop(1, css(mix(base, HI, 0.3), 0.06));
  c.fillStyle = sky;
  c.fillRect(o - R, o - R * 1.1, 2 * R, R * 1.2 + R * 0.3);
  c.restore();
  // A crisp dark horizon right under it (the far wall), softening downward into the floor.
  c.save();
  c.translate(o, hzY);
  const hz = c.createLinearGradient(0, -R * 0.02, 0, R * 0.42);
  hz.addColorStop(0, css(mix(base, LO, 0.75), 0.7));
  hz.addColorStop(0.35, css(mix(base, LO, 0.7), 0.35));
  hz.addColorStop(1, css(mix(base, LO, 0.6), 0));
  c.fillStyle = hz;
  c.beginPath();
  c.ellipse(0, 0, R * 1.02, R * 0.3, 0, 0, Math.PI);
  c.lineTo(-R * 1.02, R * 0.5);
  c.lineTo(R * 1.02, R * 0.5);
  c.closePath();
  c.fill();
  c.restore();
  // The lit floor as a bright crescent along the lower rim (fresnel bounce).
  const rim = c.createRadialGradient(o - R * 0.1, o - R * 0.3, R * 0.7, o, o, R * 1.02);
  rim.addColorStop(0, css(mix(base, HI, 0.4), 0));
  rim.addColorStop(0.7, css(mix(base, HI, 0.4), 0));
  rim.addColorStop(1, css(mix(base, HI, 0.45), dark ? 0.75 : 0.6));
  c.fillStyle = rim;
  c.fillRect(o - R, o - R, 2 * R, 2 * R);
  // Softbox reflection: a crisp rounded window, squashed by the curvature.
  c.save();
  c.translate(o - R * 0.34, o - R * 0.45);
  c.rotate(-0.6);
  c.scale(1, 0.5);
  const sb = c.createRadialGradient(0, 0, 0, 0, 0, R * 0.36);
  sb.addColorStop(0, css(HI, 0.95));
  sb.addColorStop(0.7, css(HI, 0.85));
  sb.addColorStop(0.9, css(HI, 0.25));
  sb.addColorStop(1, css(HI, 0));
  c.fillStyle = sb;
  c.fillRect(-R * 0.4, -R * 0.4, R * 0.8, R * 0.8);
  c.restore();
  // Second, dimmer window on the right (fill light).
  c.save();
  c.translate(o + R * 0.46, o - R * 0.3);
  c.rotate(0.7);
  c.scale(1, 0.34);
  const sb2 = c.createRadialGradient(0, 0, 0, 0, 0, R * 0.22);
  sb2.addColorStop(0, css(HI, 0.45));
  sb2.addColorStop(0.7, css(HI, 0.35));
  sb2.addColorStop(1, css(HI, 0));
  c.fillStyle = sb2;
  c.fillRect(-R * 0.25, -R * 0.25, R * 0.5, R * 0.5);
  c.restore();
  // Hot spot.
  const hs = c.createRadialGradient(o - R * 0.38, o - R * 0.48, 0, o - R * 0.38, o - R * 0.48, R * 0.09);
  hs.addColorStop(0, css(HI, 1));
  hs.addColorStop(1, css(HI, 0));
  c.fillStyle = hs;
  c.fillRect(o - R * 0.5, o - R * 0.6, R * 0.3, R * 0.3);
  c.restore();
  return cv;
}

function paintGlow(base: RGB, R: number): HTMLCanvasElement {
  const S = Math.ceil(R * 6);
  const cv = document.createElement("canvas");
  cv.width = S;
  cv.height = S;
  const c = cv.getContext("2d", { willReadFrequently: true })!;
  const g = c.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  g.addColorStop(0, css(base, 0.5));
  g.addColorStop(0.3, css(base, 0.2));
  g.addColorStop(0.6, css(base, 0.05));
  g.addColorStop(1, css(base, 0));
  c.fillStyle = g;
  c.fillRect(0, 0, S, S);
  return cv;
}

function paintSoftDisc(col: RGB, S: number, stops: [number, number][]): HTMLCanvasElement {
  const cv = document.createElement("canvas");
  cv.width = S;
  cv.height = S;
  const c = cv.getContext("2d", { willReadFrequently: true })!;
  const g = c.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  for (const [p, a] of stops) g.addColorStop(p, css(col, a));
  c.fillStyle = g;
  c.fillRect(0, 0, S, S);
  return cv;
}

type Rig = {
  n: number;
  rowW: number;
  rowY: number;
  amp: number;
  phi: number;
  dist: number;
  floor: number;
  r: number;
  textW: number;
  textH: number;
  lines: number;
  maxFont: number;
  minFont: number;
  gap: number;
};

function rigFor(aspect: string, w: number, h: number, count: number): Rig {
  if (aspect === "9:16") {
    const n = Math.max(7, Math.min(13, count - 6));
    const rowW = w * 0.76;
    return { n, rowW, rowY: h * 0.63, amp: h * 0.11, phi: 0.74, dist: w * 2.1, floor: h * 0.2, r: Math.min(w * 0.052, (rowW / (n - 1)) * 0.42), textW: w * 0.86, textH: h * 0.32, lines: 3, maxFont: h * 0.09, minFont: h * 0.031, gap: h * 0.045 };
  }
  if (aspect === "1:1") {
    const n = Math.max(7, Math.min(15, count - 4));
    const rowW = w * 0.82;
    return { n, rowW, rowY: h * 0.63, amp: h * 0.15, phi: 0.62, dist: h * 1.9, floor: h * 0.2, r: Math.min(h * 0.045, (rowW / (n - 1)) * 0.4), textW: w * 0.84, textH: h * 0.3, lines: 3, maxFont: h * 0.14, minFont: h * 0.02, gap: h * 0.06 };
  }
  const n = count;
  const rowW = w * 0.76;
  return { n, rowW, rowY: h * 0.63, amp: h * 0.17, phi: 0.56, dist: h * 1.9, floor: h * 0.22, r: Math.min(h * 0.046, (rowW / (n - 1)) * 0.4), textW: w * 0.74, textH: h * 0.36, lines: 2, maxFont: h * 0.18, minFont: h * 0.02, gap: h * 0.07 };
}

/**
 * The classic pendulum-wave apparatus, filmed. A row of polished metal bobs hangs on
 * V-shaped threads (so each swings in one plane) from pivots above the frame. Each bob
 * is a true harmonic pendulum; the slow drift of their phases draws snakes, split rows
 * and ripples, until every bob arrives at the same extreme at once. The row then swings
 * back as one, settles into a dead-straight line and the headline lands on top of it.
 * Canvas2D at full resolution with cached sphere sprites, real perspective, floor shadows
 * and shutter motion blur.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ text, primary, secondary, color, background, count, grain, fontFamily }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: w, height: h, aspect } = useLayout();
  const transparent = background === "transparent";
  const ink = rgbOf(color, [20, 20, 20]);
  const dark = transparent ? lum(ink) > 0.4 : lum(rgbOf(background, [0, 0, 0])) < 0.4;
  const rig = rigFor(aspect, w, h, count);
  const cx = w / 2;
  const ref = useRef<HTMLCanvasElement>(null);
  const cache = useRef<{ sprites: Sprites | null; scratch: HTMLCanvasElement | null }>({ sprites: null, scratch: null });

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    const P = rgbOf(primary, [40, 120, 220]);
    const Q = rgbOf(secondary, [210, 60, 130]);
    const BG = rgbOf(background, dark ? [10, 10, 14] : [250, 248, 242]);
    const { n, rowW, rowY, amp, floor, r } = rig;
    const spacing = rowW / (n - 1);
    const colors: RGB[] = Array.from({ length: n }, (_, k) => mix(P, Q, n > 1 ? k / (n - 1) : 0));

    // ---------- sprites (built once per brand and size) ----------
    const R = Math.ceil(r * 1.18);
    const pad = Math.ceil(R * 0.25);
    const key = `${primary}|${secondary}|${color}|${background}|${n}|${R}|${dark}`;
    if (!cache.current.sprites || cache.current.sprites.key !== key) {
      const shadowCol: RGB = dark ? LO : mix(ink, LO, 0.35);
      cache.current.sprites = {
        key,
        R,
        pad,
        bobs: colors.map((c) => paintBob(c, R, pad, dark)),
        glows: colors.map((c) => paintGlow(mix(c, HI, 0.15), R)),
        shadow: paintSoftDisc(shadowCol, 128, [[0, 1], [0.35, 0.75], [0.7, 0.25], [1, 0]]),
        glint: paintSoftDisc(HI, 128, [[0, 1], [0.12, 0.7], [0.4, 0.18], [1, 0]]),
      };
    }
    const SP = cache.current.sprites;
    if (!cache.current.scratch) cache.current.scratch = document.createElement("canvas");
    const scratch = cache.current.scratch;

    // ---------- camera: a slow push-in that ends on the settle ----------
    const cam = 1 - easeInOut(clamp01(frame / SETTLED));
    const phi = rig.phi + 0.08 * cam;
    const D = rig.dist * (1 + 0.1 * cam);
    const sinP = Math.sin(phi), cosP = Math.cos(phi);
    const beta = 0.14;
    const dirX = Math.sin(beta), dirZ = Math.cos(beta);
    const axX = Math.cos(beta), axZ = -Math.sin(beta);
    const L = h * 2.6;
    const sep = L * Math.tan(0.1);
    const proj = (X: number, Y: number, Z: number) => {
      const depth = Math.max(D * 0.2, D - Y * sinP - Z * cosP);
      const s = D / depth;
      return { x: cx + X * s, y: rowY - (Y * cosP - Z * sinP) * s, s };
    };

    type Pose = { x: number; y: number; s: number; ax: number; ay: number; t1x: number; t1y: number; t2x: number; t2y: number; fx: number; fy: number; fs: number; depth: number };
    const pose = (k: number, f: number): Pose => {
      const X = (k - (n - 1) / 2) * spacing;
      const d = swing(k, f, amp, fps);
      const th = Math.asin(Math.max(-0.99, Math.min(0.99, d / L)));
      const rise = L * (1 - Math.cos(th));
      const bx = X + d * dirX, by = rise, bz = d * dirZ;
      const c = proj(bx, by, bz);
      // Eyelet: up along the thread plane toward the pivot axis.
      const ux = -d * dirX / L, uy = (L - rise) / L, uz = -d * dirZ / L;
      const ex = bx + ux * r * 1.12, ey = by + uy * r * 1.12, ez = bz + uz * r * 1.12;
      const a = proj(ex, ey, ez);
      // Threads run to two pivots far above the frame; a point 45% of the way is already off-screen.
      const tt = 0.45;
      const p1 = proj(ex + (X + sep * axX - ex) * tt, ey + (L - ey) * tt, ez + (sep * axZ - ez) * tt);
      const p2 = proj(ex + (X - sep * axX - ex) * tt, ey + (L - ey) * tt, ez + (-sep * axZ - ez) * tt);
      const fl = proj(bx, -floor, bz);
      return { x: c.x, y: c.y, s: c.s, ax: a.x, ay: a.y, t1x: p1.x, t1y: p1.y, t2x: p2.x, t2y: p2.y, fx: fl.x, fy: fl.y, fs: fl.s, depth: bz };
    };

    const mid = Array.from({ length: n }, (_, k) => pose(k, frame));
    // Shutter samples per bob: as many as its travel during the exposure needs.
    const poses = mid.map((m, k) => {
      const a = pose(k, frame - SHUTTER / 2), b = pose(k, frame + SHUTTER / 2);
      const travel = Math.hypot(a.x - b.x, a.y - b.y);
      const cnt = Math.max(1, Math.min(MAX_SAMPLES, Math.ceil(travel / (r * 0.09))));
      if (cnt === 1) return [m];
      return Array.from({ length: cnt }, (_, i) => pose(k, frame + (SHUTTER * (i + 0.5)) / cnt - SHUTTER / 2));
    });

    // ---------- backdrop ----------
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
    ctx.filter = "none";
    ctx.clearRect(0, 0, w, h);
    const floorC = proj(0, -floor, 0);
    if (!transparent) {
      ctx.fillStyle = css(BG);
      ctx.fillRect(0, 0, w, h);
      // Studio cyc: the floor plane falls off slightly darker toward the lens.
      const cyc = ctx.createLinearGradient(0, rowY, 0, h);
      cyc.addColorStop(0, css(mix(BG, dark ? LO : ink, 0), 0));
      cyc.addColorStop(1, css(mix(BG, dark ? LO : ink, dark ? 0.5 : 0.08), 1));
      ctx.fillStyle = cyc;
      ctx.fillRect(0, rowY, w, h - rowY);
      // Brand key light washing the backdrop behind the row.
      const kl = ctx.createRadialGradient(cx, rowY - h * 0.12, 0, cx, rowY - h * 0.12, Math.max(w, h) * 0.7);
      kl.addColorStop(0, css(P, dark ? 0.2 : 0.09));
      kl.addColorStop(0.45, css(mix(P, Q, 0.5), dark ? 0.07 : 0.035));
      kl.addColorStop(1, css(Q, 0));
      ctx.fillStyle = kl;
      ctx.fillRect(0, 0, w, h);
    }
    // Light pool on the floor under the row (also on transparent: it is local).
    {
      const rx = rowW * 0.64;
      const ry = rx * Math.sin(phi) * 0.55;
      ctx.save();
      ctx.translate(floorC.x, floorC.y);
      ctx.scale(1, ry / rx);
      const pool = ctx.createRadialGradient(0, 0, 0, 0, 0, rx);
      const pc = mix(P, Q, 0.45);
      pool.addColorStop(0, css(dark ? mix(pc, HI, 0.1) : pc, dark ? 0.26 : 0.1));
      pool.addColorStop(0.55, css(pc, dark ? 0.1 : 0.04));
      pool.addColorStop(1, css(pc, 0));
      ctx.fillStyle = pool;
      ctx.fillRect(-rx, -rx, rx * 2, rx * 2);
      ctx.restore();
    }

    // ---------- floor: soft shadows (and a glossy reflection on dark brands) ----------
    const settle = easeOut(clamp01((frame - SYNC) / (SETTLED - SYNC)));
    for (let k = 0; k < n; k++) {
      const m = mid[k]!;
      const rr = r * m.fs;
      // Penumbra from a big overhead softbox, then the darker umbra.
      const sw = rr * 4.6, shh = sw * Math.sin(phi) * 0.75;
      ctx.globalAlpha = dark ? 0.5 : 0.26;
      ctx.drawImage(SP.shadow, m.fx - sw / 2, m.fy - shh / 2, sw, shh);
      ctx.globalAlpha = dark ? 0.4 : 0.24;
      ctx.drawImage(SP.shadow, m.fx - sw * 0.24, m.fy - shh * 0.24, sw * 0.48, shh * 0.48);
    }
    ctx.globalAlpha = 1;

    // ---------- threads ----------
    const tg = ctx.createLinearGradient(0, h * 0.03, 0, rowY - r);
    const tc = ink;
    const tA = dark ? 0.34 : 0.42;
    tg.addColorStop(0, css(tc, 0));
    tg.addColorStop(0.35, css(tc, tA * 0.35));
    tg.addColorStop(1, css(tc, tA));
    ctx.strokeStyle = tg;
    ctx.lineWidth = Math.max(1, h * 0.0011);
    ctx.lineCap = "round";
    for (let k = 0; k < n; k++) {
      const ps = poses[k]!;
      const moving = ps.length > 1;
      const list = moving ? ps.filter((_, i) => i % 2 === 0) : ps;
      ctx.globalAlpha = 1 / list.length + (moving ? 0.08 : 0);
      ctx.beginPath();
      for (const p of list) {
        ctx.moveTo(p.ax, p.ay);
        ctx.lineTo(p.t1x, p.t1y);
        ctx.moveTo(p.ax, p.ay);
        ctx.lineTo(p.t2x, p.t2y);
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // ---------- bobs, far to near ----------
    const order = Array.from({ length: n }, (_, k) => k).sort((a, b) => mid[a]!.depth - mid[b]!.depth);
    const glintAt = (k: number) => {
      const c = SYNC - 4 + k * (18 / Math.max(1, n - 1));
      const late = SETTLED - 8 + k * (14 / Math.max(1, n - 1));
      return Math.exp(-Math.pow((frame - c) / 3.2, 2)) + 0.6 * Math.exp(-Math.pow((frame - late) / 4, 2));
    };
    const SPR = SP.R + SP.pad;
    for (const k of order) {
      const ps = poses[k]!;
      const m = mid[k]!;
      const scaleK = (m.s * r) / SP.R;
      const half = SPR * scaleK;
      if (dark) {
        const gs = SP.glows[k]!.width * (r / SP.R) * m.s;
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = 0.18 + 0.45 * glintAt(k) + 0.1 * settle;
        ctx.drawImage(SP.glows[k]!, m.x - gs / 2, m.y - gs / 2, gs, gs);
        ctx.globalCompositeOperation = "source-over";
        ctx.globalAlpha = 1;
      }
      if (ps.length === 1) {
        ctx.drawImage(SP.bobs[k]!, m.x - half, m.y - half, half * 2, half * 2);
      } else {
        // Shutter blur: average the samples in a small scratch buffer (additive = exact mean).
        let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
        for (const p of ps) {
          const hh = SPR * ((p.s * r) / SP.R);
          x0 = Math.min(x0, p.x - hh); y0 = Math.min(y0, p.y - hh);
          x1 = Math.max(x1, p.x + hh); y1 = Math.max(y1, p.y + hh);
        }
        x0 = Math.floor(x0); y0 = Math.floor(y0);
        const bw = Math.ceil(x1 - x0) + 1, bh = Math.ceil(y1 - y0) + 1;
        if (scratch.width < bw || scratch.height < bh) {
          scratch.width = Math.max(scratch.width, bw);
          scratch.height = Math.max(scratch.height, bh);
        }
        const sc = scratch.getContext("2d", { willReadFrequently: true })!;
        sc.setTransform(1, 0, 0, 1, 0, 0);
        sc.globalCompositeOperation = "source-over";
        sc.globalAlpha = 1;
        sc.clearRect(0, 0, bw, bh);
        sc.globalCompositeOperation = "lighter";
        sc.globalAlpha = 1 / ps.length;
        for (const p of ps) {
          const hh = SPR * ((p.s * r) / SP.R);
          sc.drawImage(SP.bobs[k]!, p.x - hh - x0, p.y - hh - y0, hh * 2, hh * 2);
        }
        ctx.drawImage(scratch, 0, 0, bw, bh, x0, y0, bw, bh);
      }
      // Glint: the key light catches each bob in turn as the row locks.
      const gl = glintAt(k);
      if (gl > 0.01) {
        const gsz = r * m.s * 1.5;
        const hx = m.x - r * m.s * 0.36, hy = m.y - r * m.s * 0.46;
        ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
        ctx.globalAlpha = Math.min(1, gl * (dark ? 0.9 : 0.75));
        ctx.drawImage(SP.glint, hx - gsz / 2, hy - gsz / 2, gsz, gsz);
        ctx.globalAlpha = Math.min(1, gl * 0.5);
        const streak = r * m.s * 3.2;
        ctx.drawImage(SP.glint, hx - streak / 2, hy - streak * 0.035, streak, streak * 0.07);
        ctx.globalCompositeOperation = "source-over";
        ctx.globalAlpha = 1;
      }
    }

    // ---------- vignette ----------
    if (!transparent) {
      const v = ctx.createRadialGradient(cx, h * 0.52, Math.min(w, h) * 0.38, cx, h * 0.52, Math.hypot(w, h) * 0.62);
      v.addColorStop(0, css(BG, 0));
      v.addColorStop(1, css(mix(BG, dark ? LO : ink, dark ? 0.45 : 0.12), dark ? 0.8 : 0.45));
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, w, h);
    }
  }, [frame, fps, w, h, cx, rig, primary, secondary, color, background, transparent, dark, ink]);

  // ---------- headline ----------
  const hasText = text.trim().length > 0;
  const words = hasText ? text.trim().split(/\s+/) : [];
  const fontSize = hasText
    ? Math.max(rig.minFont, fitFontSize({ chars: text.trim().length, boxW: rig.textW, boxH: rig.textH, lines: rig.lines, charEm: 0.56, lineHeight: 1.16, max: rig.maxFont, min: rig.minFont }))
    : 0;
  const textBottom = rig.rowY - rig.r * 1.25 - rig.gap;
  const stagger = words.length > 1 ? Math.min(4, 22 / (words.length - 1)) : 0;
  const font = brandFontStack(fontFamily);

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <canvas ref={ref} width={w} height={h} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      {hasText ? (
        <div
          data-21st-slot="text"
          style={{
            position: "absolute",
            left: (w - rig.textW) / 2,
            width: rig.textW,
            bottom: h - textBottom,
            textAlign: "center",
            fontFamily: font,
            fontWeight: 600,
            fontSize,
            lineHeight: 1.16,
            letterSpacing: "-0.02em",
            color,
            textWrap: "balance",
            overflowWrap: "anywhere",
            whiteSpace: "normal",
          }}
        >
          {words.map((word, i) => {
            const start = SYNC + 10 + i * stagger;
            const p = easeOut(clamp01(ramp(frame, [start, start + 16], [0, 1])));
            const done = p >= 0.999;
            return (
              <React.Fragment key={i}>
                <span
                  style={{
                    display: "inline-block",
                    opacity: done ? 1 : p,
                    transform: done ? undefined : `translateY(${((1 - p) * fontSize * 0.35).toFixed(2)}px)`,
                    filter: done || p <= 0 ? undefined : `blur(${((1 - p) * fontSize * 0.12).toFixed(2)}px)`,
                  }}
                >
                  {word}
                </span>
                {i < words.length - 1 ? " " : null}
              </React.Fragment>
            );
          })}
        </div>
      ) : null}
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.08 : 0.1, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
