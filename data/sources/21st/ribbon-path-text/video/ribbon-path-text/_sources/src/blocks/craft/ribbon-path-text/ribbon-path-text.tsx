// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useRef, useState } from "react";
import { AbsoluteFill, cancelRender, continueRender, delayRender, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, useLayout, waitForBrandFonts } from "../../../kit/index";
import type { Aspect } from "../../../kit/spec";
import type { schema } from "./ribbon-path-text.schema";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];

const TAU = Math.PI * 2;
/** Turning rate of the ribbon at full curl, radians per em of ribbon. */
const OMEGA = 0.38;
/** Each turn of the coil is this much smaller than the one outside it (logarithmic spiral). */
const Q = 0.5;
const LAMBDA = (-Math.log(Q) * OMEGA) / TAU;
/** Turns of coil inside the headline. */
const TURNS = 3.2;
/** Curve sampling step, in em of ribbon (self-similar coil, so every turn gets the same sample count). */
const DU = 0.12;
/** Ribbon half width and stripe inset, in em. */
const HW = 0.74;
const STRIPE = 0.64;
/** Gap between repeated copies (a star sits in the middle), in em. */
const SEP = 1.7;
/** Frames: spool-out ends, uncurl starts, everything rests. */
const EMERGE = 52;
const UNCURL = 42;
const OPENED = 104;
const SETTLE = 112;
/** Share of the coil's spin cancelled while the headline spools out: the vortex reads as a zoom, not a strobe. */
const COUNTER = 0.8;

// ---------- color helpers (every color derives from props) ----------
const LIGHT: RGB = [255, 255, 255];
const SHADE: RGB = [0, 0, 0];
function rgbOf(c: string, fallback: RGB): RGB {
  let hex = /^#([0-9a-f]{3,8})$/i.exec(c)?.[1];
  if (hex) {
    if (hex.length === 3 || hex.length === 4) hex = hex.slice(0, 3).split("").map((h) => h + h).join("");
    const n = parseInt(hex.slice(0, 6), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  const m = /^rgba?\(([^)]+)\)$/i.exec(c);
  if (m) {
    const p = m[1]!.split(/[ ,/]+/).filter(Boolean).map(Number);
    if (p.length >= 3 && p.slice(0, 3).every(Number.isFinite)) return [p[0]!, p[1]!, p[2]!];
  }
  return fallback;
}
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const css = (c: RGB, a = 1) => `rgb(${Math.round(c[0])} ${Math.round(c[1])} ${Math.round(c[2])} / ${Math.max(0, Math.min(1, a)).toFixed(3)})`;
function relLum(c: RGB): number {
  const ch = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * ch(c[0]) + 0.7152 * ch(c[1]) + 0.0722 * ch(c[2]);
}
const contrast = (a: RGB, b: RGB) => {
  const x = relLum(a), y = relLum(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
};

const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
function smooth(e0: number, e1: number, x: number): number {
  const t = clamp01((x - e0) / (e1 - e0));
  return t * t * (3 - 2 * t);
}
const cubicOut = (x: number) => 1 - Math.pow(1 - clamp01(x), 3);
/** Back-ease with a small overshoot that lands exactly on 1 with zero velocity. */
function backOut(u: number, c1: number): number {
  const x = clamp01(u) - 1;
  return 1 + (c1 + 1) * x * x * x + c1 * x * x;
}

// ---------- layout ----------
type Geo = { cx: number; cy: number; tilt: number; fitW: number; fMax: number; kicker: number; minFont: number };
function geometry(aspect: Aspect, W: number, H: number): Geo {
  // Portrait: the ribbon settles as a five-row serpentine (see `Fold`), so the stack spans the frame height.
  if (aspect === "9:16") return { cx: W * 0.5, cy: H * 0.5, tilt: -4 * (Math.PI / 180), fitW: W * 0.88, fMax: W * 0.15, kicker: H * 0.036, minFont: H * 0.031 };
  if (aspect === "1:1") return { cx: W * 0.5, cy: H * 0.56, tilt: -4 * (Math.PI / 180), fitW: W * 0.78, fMax: H * 0.135, kicker: H * 0.036, minFont: H * 0.019 };
  return { cx: W * 0.5, cy: H * 0.56, tilt: 0, fitW: W * 0.72, fMax: H * 0.145, kicker: H * 0.036, minFont: H * 0.019 };
}

/**
 * Portrait fold: once flat, the ribbon runs as a serpentine of five stacked rows joined by
 * U-turns of radius R (em) inside the frame. Row 0 (the headline) is L em long between its turns.
 * w blends the fold in as the coil opens.
 */
type Fold = { L: number; R: number; w: number };
/** Extra heading (radians) the fold adds at arc position u: rows alternate 0 / -PI. */
function foldAngle(u: number, f: Fold | null): number {
  if (!f || f.w <= 0) return 0;
  const arc = Math.PI * f.R;
  const r = (s: number) => clamp01((u - s) / arc);
  const right = r(f.L / 2) - r(f.L / 2 + arc + f.L);
  const left = 1 - r(-f.L / 2 - arc) - (1 - r(-f.L / 2 - 2 * arc - f.L));
  return -Math.PI * f.w * (right + left);
}

type Measure = { chars: string[]; centers: number[]; widths: number[]; total: number; cap: number; asc: number; desc: number };

/** Glyph advances at 1px font size (kerning-aware prefix widths) plus vertical metrics. */
function measure(text: string, font: (px: number) => string, track: number): Measure {
  const chars = Array.from(text);
  const c = document.createElement("canvas").getContext("2d");
  if (!c) return { chars, centers: chars.map((_, i) => i * 0.55 + 0.275), widths: chars.map(() => 0.55), total: chars.length * 0.55, cap: 0.7, asc: 0.95, desc: 0.25 };
  c.font = font(100);
  const centers: number[] = [];
  const widths: number[] = [];
  let prev = 0;
  for (let i = 0; i < chars.length; i++) {
    const w = c.measureText(chars.slice(0, i + 1).join("")).width / 100;
    const adv = w - prev;
    centers.push(prev + i * track + adv / 2);
    widths.push(adv);
    prev = w;
  }
  const h = c.measureText("H");
  const cap = (h.actualBoundingBoxAscent || 70) / 100;
  const asc = (h.fontBoundingBoxAscent || 95) / 100;
  const desc = (h.fontBoundingBoxDescent || 25) / 100;
  return { chars, centers, widths, total: prev + Math.max(0, chars.length - 1) * track, cap, asc, desc };
}

type Glyph = { key: string; ch: string; x: number; y: number; rot: number; s: number; w: number; opacity: number };
type Curve = { uMin: number; n: number; xs: Float64Array; ys: Float64Array; theta: (u: number) => number; sigma: (u: number) => number };

/**
 * The ribbon's centre line, built from curvature so its length never changes:
 * the turning rate and the shrink rate both scale with `a` (1 = coiled, 0 = flat),
 * so glyph spacing stays exact while the coil opens.
 */
function buildCurve(a: number, psi: number, u0: number, uMin: number, uMax: number, F: number, fold: Fold | null = null): Curve {
  const ap = Math.max(0, a);
  const theta = (u: number) => psi + (u > u0 ? a * OMEGA * (u - u0) : 0) + foldAngle(u, fold);
  const sigma = (u: number) => (u > u0 ? Math.exp(-ap * LAMBDA * (u - u0)) : 1);
  const n = Math.round((uMax - uMin) / DU) + 1;
  const i0 = Math.round(-uMin / DU);
  const xs = new Float64Array(n);
  const ys = new Float64Array(n);
  for (let i = i0; i < n - 1; i++) {
    const m = uMin + (i + 0.5) * DU;
    const s = sigma(m) * F * DU;
    const t = theta(m);
    xs[i + 1] = xs[i]! + s * Math.cos(t);
    ys[i + 1] = ys[i]! + s * Math.sin(t);
  }
  for (let i = i0; i > 0; i--) {
    const m = uMin + (i - 0.5) * DU;
    const s = sigma(m) * F * DU;
    const t = theta(m);
    xs[i - 1] = xs[i]! - s * Math.cos(t);
    ys[i - 1] = ys[i]! - s * Math.sin(t);
  }
  return { uMin, n, xs, ys, theta, sigma };
}

function at(c: Curve, u: number): [number, number] {
  const f = (u - c.uMin) / DU;
  const i = Math.max(0, Math.min(c.n - 2, Math.floor(f)));
  const t = Math.max(0, Math.min(1, f - i));
  return [c.xs[i]! + (c.xs[i + 1]! - c.xs[i]!) * t, c.ys[i]! + (c.ys[i + 1]! - c.ys[i]!) * t];
}

export const Component: React.FC<Props> = ({ text, kicker, color, primary, secondary, background, fontFamily, bodyFontFamily, ghosts }) => {
  const frame = useCurrentFrame();
  const { width: W, height: H, aspect } = useLayout();
  const transparent = background === "transparent";
  const family = brandFontStack(fontFamily);
  const body = brandFontStack(bodyFontFamily);
  const weight = /Serif|Bebas|Caveat/.test(fontFamily) ? 400 : 600;
  const track = /Bebas/.test(fontFamily) ? 0.02 : -0.01;
  const g = geometry(aspect, W, H);
  const headline = text.trim() || text;

  // Hold the render until the face is registered: glyphs are placed from real advances.
  const [handle] = useState(() => delayRender("ribbon-path-text: font"));
  const released = useRef(false);
  const [ready, setReady] = useState<string | null>(null);
  useLayoutEffect(() => {
    let on = true;
    waitForBrandFonts()
      .then(() => Promise.all([document.fonts.load(`${weight} 100px ${family}`, headline), document.fonts.load(`500 40px ${body}`, kicker || "a")]))
      .then(() => document.fonts.ready)
      .then(() => {
        if (on) setReady(`${family}|${weight}`);
        if (!released.current) {
          released.current = true;
          continueRender(handle);
        }
      })
      .catch(cancelRender);
    return () => {
      on = false;
    };
  }, [family, body, weight, handle, headline, kicker]);

  const m = ready ? measure(headline, (px) => `${weight} ${px}px ${family}`, track) : null;

  // ---------- palette ----------
  const T = rgbOf(color, LIGHT);
  const P = rgbOf(primary, [15, 118, 110]);
  const S = rgbOf(secondary, [180, 83, 9]);
  const darkInk = relLum(T) < 0.4;
  const BG: RGB = transparent ? (darkInk ? mix(P, LIGHT, 0.9) : mix(P, SHADE, 0.88)) : rgbOf(background, darkInk ? LIGHT : SHADE);
  // Ribbon face: as much of the primary as the headline's contrast allows.
  let face: RGB = P;
  for (let t = 0; t <= 0.9 && contrast(face, T) < 4.6; t += 0.04) face = mix(P, BG, t);
  if (contrast(face, T) < 4.6) face = mix(P, BG, 0.9);
  const faceLum = relLum(face);
  const stripe: RGB = contrast(S, face) < 1.6 ? mix(S, faceLum > 0.4 ? SHADE : LIGHT, 0.35) : S;

  // ---------- time ----------
  const emerge = 1 - cubicOut(frame / EMERGE);
  // Curl: slow to let go, opens through the middle, flicks a hair past flat and lands exactly on it.
  const open = clamp01((frame - UNCURL) / (OPENED - UNCURL));
  const a = open >= 1 ? 0 : 1 - backOut(Math.pow(open, 1.6), 1.3);
  const kIn = cubicOut((frame - 88) / 24);

  // ---------- geometry ----------
  const glyphs: Glyph[] = [];
  const ghostGlyphs: Glyph[] = [];
  type Star = { x: number; y: number; rot: number; s: number };
  const stars: Star[] = [];
  let scene: null | {
    curve: Curve;
    ox: number;
    oy: number;
    h: number;
    iEnd: number;
    F: number;
    curl: number;
  } = null;
  let F = g.fMax;
  let Lt = 1;
  let LH = 1;
  let cc = 0;
  /** Portrait serpentine: straight row length and U-turn radius (em), kicker lines in the channel above the headline. */
  const folded = aspect === "9:16";
  const FOLD_MARGIN = 0.5;
  let rowL = 0;
  let turnR = 1.3;
  let kLines = 0;
  if (m) {
    Lt = m.total;
    F = Math.max(Math.min(g.fMax, g.fitW / Lt), Math.min(g.minFont, g.fitW / Lt));
    if (folded) {
      // The headline row and both of its U-turns fit across the frame; the turn radius leaves
      // room for the kicker in the channel between the headline row and the row above it.
      rowL = Lt + 2 * FOLD_MARGIN;
      for (let it = 0; it < 3; it++) {
        F = Math.max(g.minFont, Math.min(g.fMax, g.fitW / (rowL + 2 * (turnR + HW))));
        const kf = Math.max(g.minFont, Math.min(g.kicker, F * 0.5));
        kLines = kicker.trim() ? Math.max(1, Math.ceil((kicker.trim().length * 0.56 * kf) / (rowL * F))) : 0;
        turnR = Math.max(1.3, (2 * HW * F + kLines * kf * 1.25 + 0.36 * F) / (2 * F));
      }
    }
    LH = F * 1.25;
    const baseY = (LH - (m.asc + m.desc) * F) / 2 + m.asc * F;
    cc = baseY - (m.cap * F) / 2;
    const u0 = -Lt / 2 - 0.25;
    const per = Lt + SEP;
    const reach = Math.hypot(W, H) / 2 / F;
    const uMin = -Math.ceil(Math.max(reach + Lt / 2 + per + 2, folded ? rowL * 1.5 + 2 * Math.PI * turnR + W / F + per + 2 : 0) / DU) * DU;
    const uMax = u0 + (TURNS * TAU) / OMEGA;
    // Content slides along the ribbon from deep in the coil; the tip of the ribbon leads the headline.
    const o0 = uMax - 0.6 + Lt / 2 + 0.9;
    const o = o0 * emerge;
    const extend = easeInOut(clamp01((frame - 36) / 64));
    const h = Math.max(uMin, o - Lt / 2 - 0.9 - extend * (Lt / 2 + 0.9 - uMin));
    const psi = -a * OMEGA * -u0 - COUNTER * Math.max(0, a) * OMEGA * o;
    const curve = buildCurve(a, psi, u0, uMin, uMax, F, folded ? { L: rowL, R: turnR, w: 1 - clamp01(a) } : null);
    // Coiled: the vortex's pole sits a little below centre. Flat: the headline's centre sits at centre.
    const wv = Math.pow(clamp01(a), 2);
    const pole = [curve.xs[curve.n - 1]!, curve.ys[curve.n - 1]!];
    const poleY = H * 0.5 + (F / OMEGA) * 0.16 - g.cy;
    const ox = g.cx - wv * pole[0]!;
    const oy = g.cy + wv * (poleY - pole[1]!);
    let iEnd = curve.n - 1;
    while (iEnd > 2 && curve.sigma(uMin + iEnd * DU) * F < 2.5) iEnd--;
    scene = { curve, ox, oy, h, iEnd, F, curl: Math.min(1, Math.abs(a) * 2.5) };

    const cos = Math.cos(g.tilt), sin = Math.sin(g.tilt);
    const onScreen = (x: number, y: number, pad: number) => {
      const dx = x - g.cx, dy = y - g.cy;
      const sx = g.cx + dx * cos - dy * sin, sy = g.cy + dx * sin + dy * cos;
      return sx > -pad && sx < W + pad && sy > -pad && sy < H + pad ? sx : null;
    };
    const kLo = ghosts ? Math.floor((uMin - o - Lt) / per) : 0;
    const kHi = ghosts ? Math.ceil((uMax - o) / per) : 0;
    const ghostAlpha = 0.3 + 0.55 * smooth(0, 0.6, a);
    for (let k = kLo; k <= kHi; k++) {
      for (let i = 0; i < m.chars.length; i++) {
        const ch = m.chars[i]!;
        const u = k * per + m.centers[i]! - Lt / 2 + o;
        if (u < h + 0.15 || u > uMax - 0.5) continue;
        const s = curve.sigma(u);
        if (s * F < 3) continue;
        const [px, py] = at(curve, u);
        const x = px + ox, y = py + oy;
        const sx = onScreen(x, y, F * 1.5 * s);
        if (sx === null) continue;
        const reveal = smooth(h + 0.15, h + 0.8, u);
        const tiny = smooth(3, 9, s * F);
        let opacity = reveal * tiny;
        if (k !== 0) opacity *= ghostAlpha * (0.35 + 0.65 * Math.exp(-Math.pow((sx - g.cx) / (W * 0.62), 2)));
        if (opacity < 0.01 && k !== 0) continue;
        const gl = { key: `${k}-${i}`, ch, x, y, rot: curve.theta(u), s, w: m.widths[i]! * F, opacity };
        (k === 0 ? glyphs : ghostGlyphs).push(gl);
      }
      // Star separator after copy k (only the two around the headline when ghosts are off).
      if (!ghosts && k !== 0) continue;
      for (const kk of ghosts ? [k] : [-1, 0]) {
        const u = kk * per + Lt / 2 + SEP / 2 + o;
        if (u < h + 0.3 || u > uMax - 0.5) continue;
        const s = curve.sigma(u);
        if (s * F < 4) continue;
        const [px, py] = at(curve, u);
        stars.push({ x: px + ox, y: py + oy, rot: curve.theta(u), s: s * smooth(h + 0.3, h + 1, u) });
      }
    }
  }

  // ---------- canvas: the ribbon ----------
  const ref = useRef<HTMLCanvasElement>(null);
  useLayoutEffect(() => {
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
    ctx.shadowColor = "transparent";
    ctx.clearRect(0, 0, W, H);
    if (!scene) return;
    const { curve, ox, oy, h, iEnd, F: f, curl } = scene;
    ctx.translate(g.cx, g.cy);
    ctx.rotate(g.tilt);
    ctx.translate(-g.cx, -g.cy);

    const iStart = Math.ceil((h - curve.uMin) / DU);
    if (iStart >= iEnd - 1) return;
    const N = iEnd - iStart + 2;
    const cxs = new Float64Array(N), cys = new Float64Array(N), th = new Float64Array(N), sg = new Float64Array(N);
    const put = (j: number, u: number) => {
      const [x, y] = at(curve, u);
      cxs[j] = x + ox;
      cys[j] = y + oy;
      th[j] = curve.theta(u);
      sg[j] = curve.sigma(u);
    };
    put(0, h);
    for (let i = iStart; i <= iEnd; i++) put(i - iStart + 1, curve.uMin + i * DU);
    const edge = (j: number, off: number): [number, number] => {
      const r = off * sg[j]! * f;
      return [cxs[j]! + Math.sin(th[j]!) * r, cys[j]! - Math.cos(th[j]!) * r];
    };
    const outline = () => {
      ctx.beginPath();
      for (let j = 0; j < N; j++) {
        const [x, y] = edge(j, HW);
        if (j === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      for (let j = N - 1; j >= 0; j--) {
        const [x, y] = edge(j, -HW);
        ctx.lineTo(x, y);
      }
      // Swallowtail notch at the leading tip.
      const notch = 0.5 * sg[0]! * f;
      ctx.lineTo(cxs[0]! + Math.cos(th[0]!) * notch, cys[0]! + Math.sin(th[0]!) * notch);
      ctx.closePath();
    };

    // Soft cast shadow, then the face.
    const dark = relLum(BG) < 0.3;
    outline();
    ctx.shadowColor = css(mix(BG, SHADE, dark ? 0.85 : 0.55), dark ? 0.55 : 0.22);
    ctx.shadowBlur = f * 0.22;
    ctx.shadowOffsetY = f * 0.08;
    ctx.fillStyle = css(face);
    ctx.fill();
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;

    // Satin shading while coiled: the lit side of each turn brightens, the far side dips.
    if (curl > 0.01) {
      const CH = 3;
      for (let j = 0; j < N - 1; j += CH) {
        const e = Math.min(N - 1, j + CH);
        const mid = (j + e) >> 1;
        const k = 0.75 * Math.sin(th[mid]! + g.tilt + 0.5) * curl;
        if (Math.abs(k) < 0.03) continue;
        const ext = 0.8;
        const [tx0, ty0] = [Math.cos(th[j]!) * ext, Math.sin(th[j]!) * ext];
        const [tx1, ty1] = [Math.cos(th[e]!) * ext, Math.sin(th[e]!) * ext];
        ctx.beginPath();
        let [x, y] = edge(j, HW);
        ctx.moveTo(x - tx0, y - ty0);
        for (let q = j + 1; q < e; q++) {
          [x, y] = edge(q, HW);
          ctx.lineTo(x, y);
        }
        [x, y] = edge(e, HW);
        ctx.lineTo(x + tx1, y + ty1);
        [x, y] = edge(e, -HW);
        ctx.lineTo(x + tx1, y + ty1);
        for (let q = e - 1; q > j; q--) {
          [x, y] = edge(q, -HW);
          ctx.lineTo(x, y);
        }
        [x, y] = edge(j, -HW);
        ctx.lineTo(x - tx0, y - ty0);
        ctx.closePath();
        ctx.fillStyle = css(k > 0 ? mix(face, LIGHT, k * 0.28) : mix(face, SHADE, -k * 0.34));
        ctx.fill();
      }
    }

    // Edge stripes in the secondary color.
    ctx.strokeStyle = css(stripe);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    for (const side of [STRIPE, -STRIPE]) {
      const CH = 10;
      for (let j = 0; j < N - 1; j += CH) {
        const e = Math.min(N - 1, j + CH);
        const lw = 0.034 * f * sg[(j + e) >> 1]!;
        if (lw < 0.5) break;
        ctx.lineWidth = lw;
        ctx.beginPath();
        for (let q = j; q <= e; q++) {
          const [x, y] = edge(q, side);
          if (q === j) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }

    // Four-point stars between the copies.
    ctx.fillStyle = css(stripe);
    for (const st of stars) {
      const r = 0.2 * f * st.s;
      if (r < 0.8) continue;
      ctx.save();
      ctx.translate(st.x, st.y);
      ctx.rotate(st.rot);
      ctx.beginPath();
      for (let q = 0; q < 8; q++) {
        const ang = (q / 8) * TAU - Math.PI / 2;
        const rr = q % 2 === 0 ? r : r * 0.3;
        ctx.lineTo(Math.cos(ang) * rr, Math.sin(ang) * rr);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // Once flat, one satin glint runs along the ribbon.
    const gl = (frame - (SETTLE - 14)) / 40;
    if (gl > 0 && gl < 1) {
      const gx = g.cx + (gl * 2 - 1) * W * 0.75;
      const gw = W * 0.18;
      ctx.save();
      outline();
      ctx.clip();
      const grad = ctx.createLinearGradient(gx - gw, 0, gx + gw, 0);
      const peak = (faceLum > 0.5 ? 0.35 : 0.22) * Math.sin(gl * Math.PI);
      grad.addColorStop(0, css(LIGHT, 0));
      grad.addColorStop(0.5, css(LIGHT, peak));
      grad.addColorStop(1, css(LIGHT, 0));
      ctx.fillStyle = grad;
      ctx.fillRect(gx - gw, folded ? -H : g.cy - f * 3, gw * 2, folded ? H * 3 : f * 6);
      ctx.restore();
    }
  });

  // ---------- DOM: the headline (real text) ----------
  const ink = css(T);
  const wrapLeft = g.cx - (Lt * F) / 2;
  const wrapTop = g.cy - cc;
  const glyphStyle = (gl: Glyph, dx: number, dy: number): React.CSSProperties => ({
    position: "absolute",
    left: 0,
    top: 0,
    whiteSpace: "pre",
    transformOrigin: `${gl.w / 2}px ${cc}px`,
    transform: `translate(${(gl.x - dx - gl.w / 2).toFixed(2)}px, ${(gl.y - dy - cc).toFixed(2)}px) rotate(${gl.rot.toFixed(4)}rad) scale(${gl.s.toFixed(4)})`,
    opacity: gl.opacity,
  });
  const kickerFont = Math.max(g.minFont, Math.min(g.kicker, F * 0.5));

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background, overflow: "hidden" }}>
      <canvas ref={ref} width={W} height={H} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      {m ? (
        <AbsoluteFill style={{ transform: `rotate(${g.tilt}rad)`, transformOrigin: `${g.cx}px ${g.cy}px` }}>
          <div aria-hidden style={{ position: "absolute", left: 0, top: 0, fontFamily: family, fontWeight: weight, fontSize: F, lineHeight: `${LH}px`, color: ink, letterSpacing: 0 }}>
            {ghostGlyphs.map((gl) => (
              <span key={gl.key} style={glyphStyle(gl, 0, 0)}>
                {gl.ch}
              </span>
            ))}
          </div>
          <div
            data-21st-slot="text"
            style={{ position: "absolute", left: wrapLeft, top: wrapTop, width: Lt * F, height: LH, fontFamily: family, fontWeight: weight, fontSize: F, lineHeight: `${LH}px`, color: ink, letterSpacing: 0 }}
          >
            {glyphs.map((gl) => (
              <span key={gl.key} style={glyphStyle(gl, wrapLeft, wrapTop)}>
                {gl.ch}
              </span>
            ))}
          </div>
          {kicker.trim() && folded ? (
            // Portrait: the kicker rides the channel between the headline row and the row above it.
            <div
              style={{
                position: "absolute",
                left: g.cx - (rowL * F) / 2,
                width: rowL * F,
                top: g.cy - 2 * turnR * F + HW * F,
                height: 2 * (turnR - HW) * F,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                data-21st-slot="kicker"
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontFamily: body,
                  fontWeight: 500,
                  fontSize: kickerFont,
                  lineHeight: 1.25,
                  letterSpacing: "0.01em",
                  color: ink,
                  opacity: kIn * 0.82,
                  transform: `translateY(${((1 - kIn) * kickerFont * 0.7).toFixed(2)}px)`,
                  overflowWrap: "anywhere",
                }}
              >
                {kicker}
              </div>
            </div>
          ) : kicker.trim() ? (
            <div
              data-21st-slot="kicker"
              style={{
                position: "absolute",
                left: g.cx - W * 0.4,
                width: W * 0.8,
                bottom: H - (g.cy - HW * F - kickerFont * 0.7),
                textAlign: "center",
                fontFamily: body,
                fontWeight: 500,
                fontSize: kickerFont,
                lineHeight: 1.25,
                letterSpacing: "0.01em",
                color: ink,
                opacity: kIn * 0.82,
                transform: `translateY(${((1 - kIn) * kickerFont * 0.7).toFixed(2)}px)`,
                overflowWrap: "anywhere",
              }}
            >
              {kicker}
            </div>
          ) : null}
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
};
