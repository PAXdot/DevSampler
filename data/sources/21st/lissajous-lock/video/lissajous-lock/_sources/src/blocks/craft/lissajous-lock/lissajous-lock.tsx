// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef } from "react";
import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, brandFontStack, easeInOut, easeOut, fitFontSize, ramp, springSnap, useLayout, withAlpha } from "../../../kit/index";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./lissajous-lock.schema";

const TAU = Math.PI * 2;
/** Samples along the visible trace (one window of beam history). */
const M = 1500;
/** Beam history window: a little more than one full period, so the tail fades over the head. */
const U = TAU * 1.14;
/** Older parts of the trace were drawn with parameters this many frames old (phosphor persistence). */
const PERSIST = 7;
/** Frame the two oscillators lock 1:1 at a quarter-period phase (a circle). */
const LOCK = 100;
const CONV0 = 38;
const CONV1 = 94;
const BUCKETS = 22;
const TICKS = 120;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='19' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

type RGB = [number, number, number];

function rgbOf(color: string, fallback: RGB = [128, 128, 128]): RGB {
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

/** Mix two brand colors in sRGB; returns a hex built at runtime. */
function mix(a: RGB, b: RGB, t: number): string {
  const c = (i: number) => Math.round(a[i]! + (b[i]! - a[i]!) * t).toString(16).padStart(2, "0");
  return `#${c(0)}${c(1)}${c(2)}`;
}

const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
const prog = (f: number, a: number, b: number) => ramp(f, [a, b], [0, 1]);

/**
 * Per-frame oscillator state, built once. Two oscillators drive the beam: y runs at
 * nu_y, x at nu_x with a relative phase D. They start at (lobes+1):lobes with D
 * spinning, slide to 1:1 while the spin slows, and D lands on a quarter period
 * (a circle) with a damped overshoot, the "hunt" of a phase-locked loop.
 */
type Tables = { phy: Float64Array; d: Float64Array; nx: Float64Array; ny: Float64Array; conv: Float64Array };
function buildTables(n: number, lobes: number): Tables {
  const phy = new Float64Array(n), d = new Float64Array(n), nx = new Float64Array(n), ny = new Float64Array(n), conv = new Float64Array(n);
  const omega = (f: number) => 0.24 + (0.07 - 0.24) * easeInOut((f - 30) / (LOCK + 20 - 30));
  const r0 = 0.15, v0 = 0.05;
  const rate = (f: number) => v0 + (r0 - v0) * Math.pow(1 - easeInOut((f - 26) / (LOCK - 26)), 2);
  for (let f = 0; f < n; f++) {
    const u = easeInOut((f - CONV0) / (CONV1 - CONV0));
    conv[f] = u;
    nx[f] = 1 + lobes * (1 - u);
    ny[f] = 1 + (lobes - 1) * (1 - u);
    phy[f] = f === 0 ? 0 : phy[f - 1]! + omega(f - 0.5) * (ny[f - 1]! + ny[f]!) * 0.5;
  }
  // Relative phase: integrate the spin backwards from the lock so it lands exactly on TAU/4.
  const wd = 0.42, zeta = 0.11;
  let acc = 0;
  for (let f = Math.min(n - 1, LOCK); f >= 0; f--) {
    if (f < LOCK) acc += (rate(f) + rate(f + 1)) * 0.5;
    if (f <= LOCK) d[f] = TAU / 4 - acc;
  }
  for (let f = LOCK + 1; f < n; f++) {
    const t = f - LOCK;
    d[f] = t > 48 ? TAU / 4 : TAU / 4 + (v0 / wd) * Math.exp(-zeta * t) * Math.sin(wd * t);
  }
  return { phy, d, nx, ny, conv };
}

function at(arr: Float64Array, f: number): number {
  const n = arr.length;
  if (f <= 0) return arr[0]!;
  if (f >= n - 1) return arr[n - 1]!;
  const i = Math.floor(f), t = f - i;
  return arr[i]! + (arr[i + 1]! - arr[i]!) * t;
}

/**
 * An oscilloscope in XY mode. The beam traces a many-lobed Lissajous figure with
 * phosphor persistence (brighter where the beam slows, older trace drawn with older
 * parameters, fading tail), the frequencies converge to 1:1 and the figure locks into
 * a ring. A dial of ticks sweeps around the ring and the logo focuses in inside it.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ logo, caption, primary, secondary, color, background, lobes, intensity, grid, grain, fontFamily }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const { width: w, height: h, aspect, portrait } = useLayout();
  const S = Math.min(w, h);
  const transparent = background === "transparent";
  const cRGB = rgbOf(color, [240, 240, 240]);
  const dark = transparent ? lum(cRGB) > 0.4 : lum(rgbOf(background, [0, 0, 0])) < 0.4;
  const hasCaption = caption.trim().length > 0;

  // ---------- layout ----------
  const R = aspect === "9:16" ? 0.32 * w : aspect === "1:1" ? 0.235 * S : 0.25 * h;
  const cx = w / 2;
  const cy = hasCaption ? h * (aspect === "9:16" ? 0.43 : aspect === "1:1" ? 0.445 : 0.44) : h / 2;
  // Opening figure is wider on landscape, taller on portrait.
  const ax0 = aspect === "16:9" ? Math.min(w * 0.4, R * 2.5) : aspect === "9:16" ? R * 1.22 : R * 1.6;
  const ay0 = aspect === "16:9" ? R * 1.42 : aspect === "9:16" ? R * 2.05 : R * 1.6;

  const tables = useMemo(() => buildTables(Math.max(durationInFrames, LOCK + 60) + 2, lobes), [durationInFrames, lobes]);

  // ---------- timing ----------
  // Spring tables are sampled thousands of times per frame: build them once, then lerp.
  const powerT = useMemo(() => {
    const n = Math.max(durationInFrames, LOCK + 60) + 2;
    const out = new Float64Array(n);
    for (let f = 0; f < n; f++) out[f] = springSnap(f, fps, 1, { damping: 11, stiffness: 70, mass: 0.9 });
    return out;
  }, [durationInFrames, fps]);
  const power = (f: number) => (f < 0 ? 0 : at(powerT, f));
  const shrink = (f: number) => easeInOut((f - 46) / (CONV1 + 2 - 46));
  const lockAmt = easeOut(prog(frame, LOCK - 6, LOCK + 10));
  const flash = Math.exp(-Math.pow((frame - LOCK - 1) / 4.5, 2));
  const lockT = frame - LOCK;
  const logoIn = easeOut(prog(frame, LOCK + 4, LOCK + 26));

  const ref = useRef<HTMLCanvasElement>(null);
  const bufs = useRef<{ g: HTMLCanvasElement; b1: HTMLCanvasElement; b2: HTMLCanvasElement; grid: HTMLCanvasElement; gridKey: string } | null>(null);

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    if (!bufs.current) {
      const mk = () => document.createElement("canvas");
      bufs.current = { g: mk(), b1: mk(), b2: mk(), grid: mk(), gridKey: "" };
    }
    const B = bufs.current;
    const gw = Math.max(2, Math.round(w / 2)), gh = Math.max(2, Math.round(h / 2));
    const qw = Math.max(2, Math.round(w / 4)), qh = Math.max(2, Math.round(h / 4));
    if (B.g.width !== gw || B.g.height !== gh) { B.g.width = gw; B.g.height = gh; B.b1.width = gw; B.b1.height = gh; }
    if (B.b2.width !== qw || B.b2.height !== qh) { B.b2.width = qw; B.b2.height = qh; }
    const gctx = B.g.getContext("2d", { willReadFrequently: true })!;
    const b1 = B.b1.getContext("2d", { willReadFrequently: true })!;
    const b2 = B.b2.getContext("2d", { willReadFrequently: true })!;

    const P = rgbOf(primary, [255, 120, 40]);
    const Q = rgbOf(secondary, [40, 40, 40]);
    const bgRGB = rgbOf(background, dark ? [0, 0, 0] : [255, 255, 255]);
    const hot = mix(P, cRGB, dark ? 0.55 : 0);
    const ink = lum(Q) < 0.45 ? secondary : color;
    const after = lum(Q) > 0.12 ? secondary : primary;
    const I0 = 0.55 + 0.45 * intensity;

    // ---------- graticule (cached) ----------
    const cell = R / 2;
    const gridKey = `${w}x${h}|${cx}|${cy}|${R}|${color}|${primary}|${dark}|${transparent}`;
    if (grid && B.gridKey !== gridKey) {
      B.grid.width = w; B.grid.height = h;
      const c = B.grid.getContext("2d", { willReadFrequently: true })!;
      c.clearRect(0, 0, w, h);
      const lineCol = dark ? color : mix(cRGB, P, 0.55);
      const minor = withAlpha(lineCol, dark ? 0.07 : 0.1);
      const major = withAlpha(lineCol, dark ? 0.15 : 0.2);
      const lw = Math.max(1, S * 0.0011);
      c.lineWidth = lw;
      const nxC = Math.ceil(w / 2 / cell) + 1, nyC = Math.ceil(h / 2 / cell) + 1;
      c.strokeStyle = minor;
      c.beginPath();
      for (let k = -nxC; k <= nxC; k++) { if (k === 0) continue; const x = Math.round(cx + k * cell) + 0.5; c.moveTo(x, 0); c.lineTo(x, h); }
      for (let k = -nyC; k <= nyC; k++) { if (k === 0) continue; const y = Math.round(cy + k * cell) + 0.5; c.moveTo(0, y); c.lineTo(w, y); }
      c.stroke();
      // Center axes with fifth-division ticks, like a scope's graticule.
      c.strokeStyle = major;
      c.beginPath();
      c.moveTo(0, Math.round(cy) + 0.5); c.lineTo(w, Math.round(cy) + 0.5);
      c.moveTo(Math.round(cx) + 0.5, 0); c.lineTo(Math.round(cx) + 0.5, h);
      const tl = cell * 0.07;
      for (let k = -nxC * 5; k <= nxC * 5; k++) { const x = Math.round(cx + (k * cell) / 5) + 0.5; const L = k % 5 === 0 ? tl * 1.8 : tl; c.moveTo(x, cy - L); c.lineTo(x, cy + L); }
      for (let k = -nyC * 5; k <= nyC * 5; k++) { const y = Math.round(cy + (k * cell) / 5) + 0.5; const L = k % 5 === 0 ? tl * 1.8 : tl; c.moveTo(cx - L, y); c.lineTo(cx + L, y); }
      c.stroke();
      // Fade the grid out toward the frame edges.
      c.globalCompositeOperation = "destination-in";
      const fade = c.createRadialGradient(cx, cy, R * 1.2, cx, cy, Math.hypot(w, h) * 0.52);
      fade.addColorStop(0, withAlpha(color, 1));
      fade.addColorStop(1, withAlpha(color, transparent ? 0 : 0.25));
      c.fillStyle = fade;
      c.fillRect(0, 0, w, h);
      c.globalCompositeOperation = "source-over";
      B.gridKey = gridKey;
    }

    // ---------- trace geometry ----------
    const T = tables;
    const trace = (fb: number) => {
      const phyNow = at(T.phy, fb);
      const paths: Path2D[] = Array.from({ length: BUCKETS }, () => new Path2D());
      const lk = easeOut(prog(fb, LOCK - 6, LOCK + 10));
      const floorA = 0.3 + 0.32 * lk;
      const tau = 2.4 - 0.9 * lk;
      let px = 0, py = 0, pa = 0, hx = cx, hy = cy;
      for (let i = 0; i <= M; i++) {
        const s = (i / M) * U;
        const fp = Math.max(0, fb - (PERSIST * s) / U);
        const nX = at(T.nx, fp), nY = at(T.ny, fp), dd = at(T.d, fp);
        const pw = power(fp);
        const sh = shrink(fp);
        const Ax = (R + (ax0 - R) * (1 - sh)) * pw;
        const Ay = (R + (ay0 - R) * (1 - sh)) * pw;
        const phX = phyNow + dd - nX * s;
        const phY = phyNow - nY * s;
        // The opening figure is centered in the frame; it drifts up to the ring's spot as it shrinks.
        const x = cx + Ax * Math.sin(phX);
        const y = cy + (h / 2 - cy) * (1 - sh) - Ay * Math.sin(phY);
        // Beam slows at the folds of the figure: phosphor gets brighter there.
        const vx = Ax * nX * Math.cos(phX), vy = Ay * nY * Math.cos(phY);
        const v = Math.hypot(vx, vy);
        const vref = Math.sqrt((Ax * Ax * nX * nX + Ay * Ay * nY * nY) / 2) + 1e-3;
        const bright = Math.max(0.5, Math.min(2.1, Math.pow(vref / (v + vref * 0.05), 0.55)));
        const trail = (floorA + (1 - floorA) * Math.exp(-s / tau)) * (1 - Math.pow(clamp01((s - U * 0.78) / (U * 0.22)), 1.6));
        const a = clamp01(trail * bright * 0.62);
        if (i === 0) { hx = x; hy = y; }
        if (i > 0) {
          const am = (a + pa) * 0.5;
          const bkt = Math.min(BUCKETS - 1, Math.floor(am * BUCKETS));
          if (bkt > 0) { const p = paths[bkt]!; p.moveTo(px, py); p.lineTo(x, y); }
        }
        px = x; py = y; pa = a;
      }
      return { paths, hx, hy };
    };
    const cur = trace(frame);
    const paths = cur.paths;
    const headX = cur.hx, headY = cur.hy;
    // Afterglow: the figures of the last few frames, still fading on the phosphor.
    const ghostW = (1 - lockAmt) * clamp01(frame / 6);
    const ghosts = ghostW > 0.01 ? [3, 6, 10].map((g, k) => ({ paths: trace(Math.max(0, frame - g)).paths, a: ghostW * 0.55 * Math.pow(0.6, k) })) : [];
    const pwNow = power(frame);
    const strokeAll = (c: CanvasRenderingContext2D, col: string, alphaK: number, lw: number, set: Path2D[] = paths) => {
      c.lineWidth = lw;
      c.lineCap = "round";
      c.lineJoin = "round";
      for (let k = 1; k < BUCKETS; k++) {
        const a = clamp01(((k + 0.5) / BUCKETS) * alphaK);
        if (a < 0.004) continue;
        c.strokeStyle = withAlpha(col, a);
        c.stroke(set[k]!);
      }
    };
    const intensityNow = I0 * (0.35 + 0.65 * easeOut(frame / 10)) * (1 + 0.85 * flash);

    // ---------- compose ----------
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.filter = "none";
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, w, h);
    if (!transparent) {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, w, h);
      // The screen's faint warm center.
      const sg = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 2.4);
      sg.addColorStop(0, withAlpha(primary, dark ? 0.09 : 0.05));
      sg.addColorStop(1, withAlpha(primary, 0));
      ctx.fillStyle = sg;
      ctx.fillRect(0, 0, w, h);
    }
    if (grid) {
      ctx.globalAlpha = Math.min(1, (0.55 + 0.45 * easeOut(frame / 14)) * (1 + 0.6 * flash));
      ctx.drawImage(B.grid, 0, 0);
      ctx.globalAlpha = 1;
    }
    // Quiet pocket inside the ring so the logo reads over the grid.
    if (lockAmt > 0) {
      const pk = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.98);
      const pa0 = transparent ? 0 : 0.92 * lockAmt;
      pk.addColorStop(0, withAlpha(background, pa0));
      pk.addColorStop(0.82, withAlpha(background, pa0 * 0.9));
      pk.addColorStop(1, withAlpha(background, 0));
      ctx.fillStyle = pk;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, TAU);
      ctx.fill();
      if (dark) {
        const inner = ctx.createRadialGradient(cx, cy, R * 0.55, cx, cy, R);
        inner.addColorStop(0, withAlpha(primary, 0));
        inner.addColorStop(1, withAlpha(primary, 0.1 * lockAmt));
        ctx.fillStyle = inner;
        ctx.fill();
      }
    }

    // Glow source at half resolution (shared by both brands).
    gctx.setTransform(1, 0, 0, 1, 0, 0);
    gctx.clearRect(0, 0, gw, gh);
    gctx.globalCompositeOperation = dark ? "lighter" : "source-over";
    gctx.setTransform(gw / w, 0, 0, gh / h, 0, 0);
    strokeAll(gctx, primary, intensityNow * (dark ? 0.9 : 0.7), S * (dark ? 0.0065 : 0.006) * (1 + 0.35 * lockAmt));
    if (dark) strokeAll(gctx, after, intensityNow * 0.18, S * 0.016);
    for (const g of ghosts) strokeAll(gctx, dark ? primary : after, intensityNow * g.a * (dark ? 0.9 : 0.5), S * 0.006, g.paths);
    gctx.setTransform(1, 0, 0, 1, 0, 0);
    b1.setTransform(1, 0, 0, 1, 0, 0);
    b1.clearRect(0, 0, gw, gh);
    b1.filter = `blur(${Math.max(1, Math.round(S * 0.0035))}px)`;
    b1.drawImage(B.g, 0, 0);
    b1.filter = "none";
    b2.setTransform(1, 0, 0, 1, 0, 0);
    b2.clearRect(0, 0, qw, qh);
    b2.filter = `blur(${Math.max(2, Math.round(S * 0.011))}px)`;
    b2.drawImage(B.g, 0, 0, qw, qh);
    b2.filter = "none";
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    if (dark) {
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = 0.95;
      ctx.drawImage(B.b2, 0, 0, w, h);
      ctx.globalAlpha = 0.9;
      ctx.drawImage(B.b1, 0, 0, w, h);
      ctx.globalAlpha = 1;
      for (const g of ghosts) strokeAll(ctx, primary, intensityNow * g.a * 0.7, Math.max(1, S * 0.0014), g.paths);
      strokeAll(ctx, hot, intensityNow * 1.15, Math.max(1, S * 0.0019 * (1 + 0.45 * lockAmt)));
    } else {
      // Paper: a whisper of accent bleed, then thin ink.
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.32;
      ctx.drawImage(B.b2, 0, 0, w, h);
      ctx.globalAlpha = 0.5;
      ctx.drawImage(B.g, 0, 0, w, h);
      ctx.globalAlpha = 1;
      for (const g of ghosts) strokeAll(ctx, primary, intensityNow * g.a * 0.75, Math.max(1, S * 0.0012), g.paths);
      strokeAll(ctx, ink, intensityNow * 1.35, Math.max(1, S * 0.0017 * (1 + 0.85 * lockAmt)));
    }

    // Beam head: the moving spot that writes the trace.
    if (pwNow >= 0) {
      const hr = S * (dark ? 0.05 : 0.03) * (1 + 0.6 * flash);
      const hg = ctx.createRadialGradient(headX, headY, 0, headX, headY, hr);
      hg.addColorStop(0, withAlpha(dark ? hot : primary, dark ? 0.85 : 0.5));
      hg.addColorStop(0.12, withAlpha(primary, dark ? 0.45 : 0.22));
      hg.addColorStop(1, withAlpha(primary, 0));
      ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
      ctx.fillStyle = hg;
      ctx.fillRect(headX - hr, headY - hr, hr * 2, hr * 2);
      ctx.fillStyle = dark ? hot : primary;
      ctx.beginPath();
      ctx.arc(headX, headY, Math.max(1.2, S * (dark ? 0.0042 : 0.0048)), 0, TAU);
      ctx.fill();
    }

    // ---------- lock: dial ticks sweep around the ring, one shock ring ----------
    ctx.globalCompositeOperation = "source-over";
    if (lockT >= 0) {
      const sweep = easeOut(lockT / 26) * TAU;
      ctx.lineCap = "round";
      for (let k = 0; k < TICKS; k++) {
        const rel = (k / TICKS) * TAU;
        if (rel > sweep + 1e-6) break;
        const ang = -Math.PI / 2 + rel;
        const major = k % 10 === 0;
        const cardinal = k % 30 === 0;
        const r0 = R * 1.1;
        const r1 = R * (cardinal ? 1.2 : major ? 1.17 : 1.135);
        const fresh = Math.exp(-(sweep - rel) / 0.35) * (1 - easeOut(lockT / 40));
        const base = cardinal ? 0.75 : major ? 0.5 : 0.24;
        ctx.strokeStyle = fresh > 0.02 ? withAlpha(mix(cRGB, P, Math.min(1, fresh * 1.2)), Math.min(1, base + fresh * 0.7)) : withAlpha(color, base);
        ctx.lineWidth = Math.max(1, S * (cardinal ? 0.0028 : major ? 0.0022 : 0.0015));
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(ang) * r0, cy + Math.sin(ang) * r0);
        ctx.lineTo(cx + Math.cos(ang) * r1, cy + Math.sin(ang) * r1);
        ctx.stroke();
      }
      if (lockT < 26) {
        const e = easeOut(lockT / 26);
        ctx.strokeStyle = withAlpha(primary, 0.55 * (1 - e) * (1 - e));
        ctx.lineWidth = Math.max(1, S * 0.003 * (1 - e) + 1);
        ctx.beginPath();
        ctx.arc(cx, cy, R * (1.02 + 0.55 * e), 0, TAU);
        ctx.stroke();
      }
    }

    if (!transparent) {
      const v = ctx.createRadialGradient(cx, cy, S * 0.35, cx, cy, Math.hypot(w, h) * 0.6);
      v.addColorStop(0, withAlpha(background, 0));
      v.addColorStop(1, dark ? withAlpha(background, 0.75) : withAlpha(mix(bgRGB, cRGB, 0.12), 0.5));
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, w, h);
    }
  }, [frame, fps, w, h, S, R, cx, cy, ax0, ay0, tables, powerT, lockAmt, flash, lockT, primary, secondary, color, background, transparent, dark, intensity, grid, cRGB]);

  // ---------- logo focus-in ----------
  const pop = springSnap(frame, fps, LOCK + 4, APPLE);
  const blur = (1 - easeOut(prog(frame, LOCK + 4, LOCK + 24))) * R * 0.08;
  const scale = 0.86 + 0.14 * pop;
  const box = R * 1.16;
  const src = logo || SAMPLE_LOGO;
  const glow = dark ? `drop-shadow(0 0 ${Math.round(R * 0.09)}px ${withAlpha(primary, 0.4)})` : `drop-shadow(0 ${Math.round(R * 0.02)}px ${Math.round(R * 0.05)}px ${withAlpha(color, 0.14)})`;

  const capSize = hasCaption
    ? Math.max(
        h * (portrait ? 0.031 : 0.02),
        fitFontSize({ chars: caption.length, boxW: w * (portrait ? 0.84 : 0.7), boxH: h * (portrait ? 0.09 : 0.07), lines: portrait ? 2 : 1, charEm: 0.56, lineHeight: 1.25, max: aspect === "16:9" ? h * 0.044 : aspect === "1:1" ? h * 0.042 : h * 0.034 }),
      )
    : 0;
  const capIn = easeOut(prog(frame, LOCK + 16, LOCK + 36));
  const font = brandFontStack(fontFamily);
  const capW = w * (portrait ? 0.84 : 0.7);
  const opaque = withAlpha(color, 1);
  const mask = transparent ? `radial-gradient(ellipse 68% 68% at 50% 50%, ${opaque} 50%, transparent 100%)` : undefined;

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <AbsoluteFill style={{ maskImage: mask, WebkitMaskImage: mask }}>
        <canvas ref={ref} width={w} height={h} style={{ width: "100%", height: "100%", display: "block" }} />
      </AbsoluteFill>
      {frame >= LOCK + 4 ? (
        <Img
          data-21st-slot="logo"
          src={src}
          style={{
            position: "absolute",
            left: cx - box / 2,
            top: cy - box / 2,
            width: box,
            height: box,
            objectFit: "contain",
            opacity: logoIn,
            transform: scale === 1 ? undefined : `scale(${scale.toFixed(4)})`,
            filter: blur > 0.05 ? `blur(${blur.toFixed(2)}px) ${glow}` : glow,
          }}
        />
      ) : null}
      {hasCaption ? (
        <div
          data-21st-slot="caption"
          style={{
            position: "absolute",
            left: (w - capW) / 2,
            width: capW,
            top: cy + R * 1.2 + (portrait ? h * 0.03 : h * 0.035),
            textAlign: "center",
            fontFamily: font,
            fontWeight: 500,
            fontSize: capSize,
            lineHeight: 1.25,
            letterSpacing: "0.02em",
            color,
            opacity: capIn,
            transform: capIn < 1 ? `translateY(${((1 - capIn) * S * 0.025).toFixed(2)}px)` : undefined,
            whiteSpace: "normal",
            overflowWrap: "anywhere",
          }}
        >
          {caption}
        </div>
      ) : null}
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.07 : 0.09, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
