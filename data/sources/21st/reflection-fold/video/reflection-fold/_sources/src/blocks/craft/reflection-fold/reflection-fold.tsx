// Built with Remotion - https://remotion.pro/license
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, continueRender, delayRender, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeOut, useLayout, waitForBrandFonts } from "../../../kit/index";
import { fbm3, rng, simplex3 } from "../_lib/noise";
import type { schema } from "./reflection-fold.schema";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];

// ---------- timeline (frames at 30 fps; the clip holds after SETTLED) ----------
/** Only the rippling reflection shows until the fold starts. */
const T_FOLD = 36;
/** The reflection has folded flat onto the water; the title starts to stand up. */
const T_FLAT = 48;
const SETTLED = 96;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='9' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")";

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
function lum(c: RGB): number {
  const ch = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * ch(c[0]) + 0.7152 * ch(c[1]) + 0.0722 * ch(c[2]);
}
const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const ss = (a: number, b: number, x: number) => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};

/**
 * Fold angle of the title around the waterline, in degrees (CSS rotateX).
 * 180 = hanging upside down under the water (the reflection), 90 = lying flat on
 * the water, 0 = standing. The reflection folds flat with an ease-in, then the
 * title swings up with the same speed and settles with a damped overshoot.
 */
function foldAngle(f: number): number {
  if (f < T_FOLD) return 180;
  const T1 = T_FLAT - T_FOLD;
  if (f < T_FLAT) {
    const t = (f - T_FOLD) / T1;
    return 180 - 90 * t * t;
  }
  const t = f - T_FLAT;
  const v0 = -2 / T1; // matches the ease-in's exit speed, in units of 90 degrees per frame
  const lam = 0.16;
  const om = 0.17;
  const B = (v0 + lam) / om;
  const a = 90 * Math.exp(-lam * t) * (Math.cos(om * t) + B * Math.sin(om * t));
  return Math.abs(a) < 0.03 ? 0 : a;
}

/** Balanced split of `words` into `n` lines, scored by the widest measured line. */
function splitLines(words: string[], n: number, width: (s: string) => number): string[] {
  const W = words.length;
  const join = (a: number, b: number) => words.slice(a, b).join(" ");
  if (n <= 1 || W < 2) return [words.join(" ")];
  let best: string[] = [words.join(" ")];
  let score = Infinity;
  if (n === 2 || W === 2) {
    for (let i = 1; i < W; i++) {
      const ls = [join(0, i), join(i, W)];
      const s = Math.max(...ls.map(width));
      if (s < score) { score = s; best = ls; }
    }
    return best;
  }
  for (let i = 1; i < W - 1; i++)
    for (let j = i + 1; j < W; j++) {
      const ls = [join(0, i), join(i, j), join(j, W)];
      const s = Math.max(...ls.map(width));
      if (s < score) { score = s; best = ls; }
    }
  return best;
}

type Wave = { ku: number; kv: number; sA: number; su: number; sv: number; om: number; ph: number; lam: number; glitter: boolean };

/**
 * A title rises out of its own water reflection. At first only the rippling
 * reflection shows on a lake under a low sun; it folds flat onto the
 * waterline, the real title swings up through the surface with a damped
 * overshoot, sends a wake across the water, and the ripple calms to a faint
 * reflection. The water is a small per-pixel renderer (half resolution):
 * perspective waves displace the mirrored sky and the mirrored title, the
 * title stays real DOM text folding with CSS 3D.
 */
export const Component: React.FC<Props> = ({ text, color, primary, secondary, background, fontFamily, ripple, reflection, glow, grain, seed }) => {
  const frame = useCurrentFrame();
  const { width: W, height: H, aspect } = useLayout();
  const transparent = background === "transparent";
  const family = brandFontStack(fontFamily);
  const weight = /Serif|Bebas|Caveat|Instrument/.test(fontFamily) ? 400 : 700;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<ImageData | null>(null);

  const [ready, setReady] = useState(false);
  const [handle] = useState(() => delayRender("reflection-fold fonts", { timeoutInMilliseconds: 60000 }));
  useEffect(() => {
    let alive = true;
    (async () => {
      await waitForBrandFonts();
      await document.fonts.load(`${weight} 100px ${family}`);
    })()
      .catch(() => undefined)
      .finally(() => {
        if (alive) setReady(true);
        continueRender(handle);
      });
    return () => { alive = false; };
  }, [family, weight, handle]);

  // ---------- layout: one per aspect, sized from measured glyphs ----------
  const L = useMemo(() => {
    if (!ready || typeof document === "undefined") return null;
    const mc = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
    if (!mc) return null;
    mc.font = `${weight} 100px ${family}`;
    const mm = mc.measureText("Hg");
    const asc = mm.fontBoundingBoxAscent || 92;
    const desc = mm.fontBoundingBoxDescent || 26;
    const capM = mc.measureText("H").actualBoundingBoxAscent || 70;
    const width = (s: string) => mc.measureText(s).width;
    const LH = Math.max(1.18, (asc + desc) / 100 + 0.02);
    const portrait = aspect === "9:16";
    const square = aspect === "1:1";
    const maxW = W * (portrait ? 0.86 : square ? 0.82 : 0.8);
    // Portrait: the title and its mirror image fill the tall frame, so the block may be much taller.
    const maxBH = H * (portrait ? 0.43 : square ? 0.34 : 0.34);
    const cap = H * (portrait ? 0.3 : square ? 0.24 : 0.26);
    const minF = H * (portrait ? 0.03 : 0.018);
    const words = text.trim().split(/\s+/).filter(Boolean);
    let lines = [words.join(" ")];
    let F = minF;
    let best = -1;
    for (let n = 1; n <= 3; n++) {
      if (n > 1 && words.length < n) break;
      const ls = splitLines(words, n, width);
      const widest = Math.max(1, ...ls.map(width));
      const f = Math.max(minF, Math.min(cap, (maxW / widest) * 100, maxBH / (n * LH)));
      // Landscape and square favour one big line; portrait picks the stack that covers the most
      // of the frame (width x height), so narrow display faces stack instead of leaving a thin strip.
      const score = portrait ? Math.min(maxW, (widest * f) / 100) * n * LH * f : f * (n === 1 ? 1 : n === 2 ? 0.9 : 0.8);
      if (score > best) { best = score; F = f; lines = ls; }
    }
    const n = lines.length;
    const k = F / 100;
    const lineH = LH * F;
    const halfLead = (lineH - (asc + desc) * k) / 2;
    const hingeY = (n - 1) * lineH + halfLead + asc * k; // last baseline, from block top
    const widths = lines.map((l) => width(l) * k);
    const blockW = Math.min(W * 0.96, Math.max(...widths) + F * 0.2);
    // Portrait keeps room for the full mirror image under the waterline.
    const WL = portrait ? Math.max(hingeY + H * 0.07, Math.min(H * 0.585, H * 0.95 - hingeY)) : H * (square ? 0.6 : 0.62);
    const capPx = capM * k;
    const oy = WL - Math.max(H * 0.04, Math.min(H * 0.1, capPx * 0.42));
    const ox = W / 2;
    const P = 1.15 * Math.max(W, H);
    const blockTop = WL - hingeY;
    const bx = W / 2 - blockW / 2;
    return { lines, F, LH, lineH, halfLead, asc: asc * k, desc: desc * k, hingeY, blockW, blockTop, bx, WL, oy, ox, P, n, widths };
  }, [ready, text, W, H, aspect, family, weight]);

  // ---------- title mask (half res), sampled by the water for the reflection ----------
  const mask = useMemo(() => {
    if (!L || typeof document === "undefined") return null;
    const pad = Math.ceil(L.F * 0.15);
    const x0 = L.bx - pad;
    const y0 = L.blockTop - pad;
    const mw = Math.ceil((L.blockW + pad * 2) / 2);
    const mh = Math.ceil((L.hingeY + L.desc + pad * 2) / 2);
    const c = document.createElement("canvas");
    c.width = mw;
    c.height = mh;
    const ctx = c.getContext("2d", { willReadFrequently: true });
    if (!ctx) return null;
    ctx.scale(0.5, 0.5);
    ctx.font = `${weight} ${L.F}px ${family}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = `rgb(${LIGHT.join(",")})`;
    L.lines.forEach((l, i) => ctx.fillText(l, L.blockW / 2 + pad, i * L.lineH + L.halfLead + L.asc + pad));
    const d = ctx.getImageData(0, 0, mw, mh).data;
    const a = new Float32Array(mw * mh);
    for (let i = 0; i < mw * mh; i++) a[i] = d[i * 4 + 3]! / 255;
    return { a, mw, mh, x0, y0 };
  }, [L, family, weight]);

  // ---------- colors ----------
  const C = useMemo(() => {
    const B: RGB = transparent ? DARK : rgbOf(background);
    const T = rgbOf(color);
    const Pc = rgbOf(primary);
    const S = rgbOf(secondary);
    const dark = transparent ? lum(T) > 0.5 : lum(B) < 0.35;
    const top = mix(B, Pc, dark ? 0.16 : 0.1);
    const horizon = mix(B, S, dark ? 0.3 : 0.26);
    const halo = mix(S, B, dark ? 0.12 : 0.18);
    const core = mix(S, LIGHT, dark ? 0.62 : 0.72);
    const deep = dark ? mix(mix(B, Pc, 0.3), DARK, 0.15) : mix(B, Pc, 0.3);
    const deepLow = dark ? mix(deep, DARK, 0.4) : mix(deep, Pc, 0.38);
    const reflTint = mix(T, deep, 0.12);
    const vig = dark ? mix(B, DARK, 0.55) : mix(B, Pc, 0.3);
    return { B, T, Pc, S, dark, top, horizon, halo, core, deep, deepLow, reflTint, vig };
  }, [background, color, primary, secondary, transparent]);

  // ---------- sky (half res), drawn once per layout; the water mirrors it ----------
  const hw = Math.max(2, Math.round(W / 2));
  const hh = Math.max(2, Math.round(H / 2));
  const sky = useMemo(() => {
    if (!L) return null;
    const rows = Math.min(hh, Math.ceil(L.oy / 2) + 2);
    const buf = new Float32Array(hw * rows * 3);
    const nz = simplex3(seed * 13 + 1);
    const g = glow;
    const coreR = H * 0.04;
    for (let j = 0; j < rows; j++) {
      const y = (j + 0.5) * 2;
      const t = clamp01((L.oy - y) / L.oy);
      const base = mix(C.horizon, C.top, Math.pow(t, 0.5));
      const dy = Math.max(0, L.oy - y) / H;
      for (let i = 0; i < hw; i++) {
        const x = (i + 0.5) * 2;
        const dx = (x - L.ox) / W;
        let col = base;
        const halo = Math.exp(-(dx * dx) / 0.09 - (dy * dy) / 0.026) * g * (C.dark ? 0.62 : 0.5);
        const band = Math.exp(-(dx * dx) / 0.5 - (dy * dy) / 0.0035) * g * 0.45;
        col = mix(col, C.halo, halo + band);
        // Thin cloud streaks lit by the low sun.
        const cl = fbm3(nz, x / (W * 0.55), y / (H * 0.03), 0.5, 3);
        const cloud = ss(0.05, 0.55, cl) * ss(0, 0.25, dy) * (1 - ss(0.15, 0.6, dy)) * 0.22;
        col = mix(col, mix(C.halo, C.core, Math.exp(-(dx * dx) / 0.05)), cloud * (0.4 + 0.6 * g));
        const r2 = ((x - L.ox) ** 2 + (y - L.oy) ** 2) / (coreR * coreR);
        const core = Math.exp(-r2) * g + Math.exp(-r2 / 9) * 0.25 * g;
        col = mix(col, C.core, core);
        // The horizon line catches the light.
        const line = Math.exp(-(((y - L.oy) / (H * 0.003)) ** 2)) * Math.exp(-(dx * dx) / 0.2) * 0.55 * g;
        col = mix(col, C.core, line);
        col = mix(col, C.vig, ss(0.32, 0.95, Math.hypot(dx * 1.1, (y / H - 0.5) * 1.2)) * 0.55);
        const o = (j * hw + i) * 3;
        buf[o] = col[0];
        buf[o + 1] = col[1];
        buf[o + 2] = col[2];
      }
    }
    return { buf, rows };
  }, [L, hw, hh, W, H, C, glow, seed]);

  // ---------- waves (world units: px at the bottom edge of the frame) ----------
  const waves = useMemo<Wave[]>(() => {
    const r = rng(`reflection-${seed}`);
    const s = H / 1080;
    const spec: [number, number, number, boolean][] = [
      // wavelength, direction from straight-on, slope amplitude, glitter-only
      [190, 0.06, 0.011, false],
      [112, -0.14, 0.009, false],
      [66, 0.2, 0.007, false],
      [38, -0.28, 0.005, false],
      [22, 0.34, 0.004, false],
    ];
    return spec.map(([len, dir, sA, glitter]) => {
      const lam = len * s * (0.9 + 0.2 * r());
      const k = (2 * Math.PI) / lam;
      const th = dir + (r() - 0.5) * 0.1;
      return { ku: k * Math.sin(th), kv: k * Math.cos(th), sA, su: Math.sin(th), sv: Math.cos(th), om: 0.6 * Math.sqrt(k * (1080 / H)) , ph: r() * Math.PI * 2, lam, glitter };
    });
  }, [H, seed]);

  const noise = useMemo(() => simplex3(seed * 7 + 3), [seed]);

  // ---------- timing ----------
  const a = foldAngle(frame);
  const standing = a < 90;
  const b = standing ? 180 - a : a; // angle of whatever is under the water
  const calm = 0.12 + 0.88 * ripple;
  const amp = frame < T_FOLD ? 1 + 0.9 * (1 - easeOut(frame / 34)) : calm + (1 - calm) * Math.exp(-(frame - T_FOLD) / 20);
  const reflA = standing ? 0.2 + 0.7 * reflection : 0.95 * ss(1, 24, frame);

  useLayoutEffect(() => {
    const cv = canvasRef.current;
    const ctx = cv?.getContext("2d", { willReadFrequently: true });
    if (!cv || !ctx) return;
    if (!L || !sky || !mask) {
      ctx.clearRect(0, 0, hw, hh);
      return;
    }
    if (!imgRef.current || imgRef.current.width !== hw || imgRef.current.height !== hh) imgRef.current = ctx.createImageData(hw, hh);
    const img = imgRef.current;
    const out = img.data;
    const { oy, ox, WL, P } = L;
    const skyRows = sky.rows;
    const sb = sky.buf;
    // Sky.
    const skyEnd = Math.min(hh, Math.ceil(oy / 2));
    if (!transparent) {
      for (let j = 0; j < skyEnd; j++)
        for (let i = 0; i < hw; i++) {
          const o = (j * hw + i) * 3;
          const p = (j * hw + i) * 4;
          out[p] = sb[o]!;
          out[p + 1] = sb[o + 1]!;
          out[p + 2] = sb[o + 2]!;
          out[p + 3] = 255;
        }
    }
    // Water.
    const Db = H - oy;
    const C2 = Db * Db;
    const D = H; // reflected-ray offset per unit slope
    const t = frame;
    const br = (b * Math.PI) / 180;
    const sinb = Math.sin(br);
    const cosb = Math.cos(br);
    const hTop = L.hingeY;
    const fadeK = L.n > 1 ? 0.8 : 0.6;
    const rxMin = L.bx - W * 0.08;
    const rxMax = L.bx + L.blockW + W * 0.08;
    const ryMax = WL + hTop * 1.15 + H * 0.08;
    const nW = waves.length;
    const rowPh = new Float64Array(nW);
    const att = new Float64Array(nW);
    // Wake: the title standing up pushes one wave toward the viewer.
    const tau = frame - T_FLAT - 4;
    const vWL = C2 / Math.max(1, WL - oy);
    const wakeOn = tau > 0 && tau < 80;
    const vf = vWL - ((vWL - Db) / 34) * tau;
    const wakeW = H * (0.025 + 0.0006 * tau);
    const wakeK = (2 * Math.PI) / (H * 0.05);
    const wakeA = 0.05 * Math.exp(-tau / 26) * (0.5 + 0.5 * ripple);
    const uW = (L.blockW / 2) * (Db / Math.max(1, WL - oy)) * (1 + tau / 30);
    const { a: ma, mw, mh, x0: mx0, y0: my0 } = mask;
    const warpS = 1 / (H * 0.3);
    const warpV = 1 / (H * 0.09);
    const tz = t * 0.014;
    const STEP = 4;
    const nCoarse = Math.ceil(hw / STEP) + 2;
    const warpRow = new Float64Array(nCoarse);
    const patchRow = new Float64Array(nCoarse);
    const spU = 1 / (H * 0.03);
    const spV = 1 / (H * 0.0065);
    const T = C.reflTint;
    const core = C.core;
    const dlr = C.deepLow[0], dlg = C.deepLow[1], dlb = C.deepLow[2];
    const vgc = C.vig;
    const halo = C.halo;
    const contact = standing ? ss(T_FLAT + 4, T_FLAT + 14, frame) : 0;
    for (let j = Math.max(0, skyEnd); j < hh; j++) {
      const y = (j + 0.5) * 2;
      const dist = y - oy;
      if (dist <= 0.5) continue;
      const tW = clamp01(dist / Db);
      const R = 0.22 + 0.68 * Math.pow(1 - tW, 2.4);
      const dr = C.deep[0] + (C.deepLow[0] - C.deep[0]) * tW;
      const dg = C.deep[1] + (C.deepLow[1] - C.deep[1]) * tW;
      const db = C.deep[2] + (C.deepLow[2] - C.deep[2]) * tW;
      const v = C2 / dist;
      const su = Db / dist;
      const depthK = (dist / Db) * (dist / Db);
      for (let w = 0; w < nW; w++) {
        const wv = waves[w]!;
        rowPh[w] = wv.kv * v - wv.om * t + wv.ph;
        // Fade waves that would alias near the horizon.
        att[w] = ss(1.2, 4, (wv.lam * depthK) / 2);
      }
      let rowWake = 0;
      if (wakeOn) {
        const dv = (v - vf) * (1 / (su * su)); // back to screen-ish units
        rowWake = wakeA * Math.cos(wakeK * dv) * Math.exp(-((dv / wakeW) ** 2));
      }
      const glintRow = glow * Math.pow(1 - tW, 0.6) * ss(0, 0.04, tW) * (0.75 + 0.25 * Math.min(1.5, amp));
      // Warp noise on a coarse grid along the row (it is smooth), lerped per pixel.
      for (let q = 0; q < nCoarse; q++) {
        const uq = ((q * STEP + 0.5) * 2 - ox) * su;
        warpRow[q] = noise(uq * warpS, v * warpV, tz) * 2.6;
        patchRow[q] = 0.7 + 0.3 * noise(uq * warpS * 0.5 + 9, v * warpV * 0.5, tz * 0.7);
      }
      const contactRow = contact > 0 ? Math.exp(-(((y - WL) / (H * 0.004)) ** 2)) * contact : 0;
      for (let i = 0; i < hw; i++) {
        const x = (i + 0.5) * 2;
        const u = (x - ox) * su;
        // Domain warp: breaks the wave lattice into organic, wind-blown patches.
        const qf = i / STEP;
        const q0 = Math.floor(qf);
        const qa = qf - q0;
        const wp = warpRow[q0]! + (warpRow[q0 + 1]! - warpRow[q0]!) * qa;
        const patch = patchRow[q0]! + (patchRow[q0 + 1]! - patchRow[q0]!) * qa;
        let sU = 0;
        let sV = 0;
        let gU = 0;
        let gV = 0;
        let wob = 0;
        for (let w = 0; w < nW; w++) {
          const at = att[w]!;
          if (at < 0.01) continue;
          const wv = waves[w]!;
          const ph = wv.ku * u + rowPh[w]! + (wv.glitter ? wp * 1.6 : wp);
          const c = Math.cos(ph) * wv.sA * at * patch;
          if (wv.glitter) {
            gU += c * wv.su;
            gV += c * wv.sv;
          } else {
            sU += c * wv.su;
            sV += c * wv.sv;
            if (w === 0) wob = Math.sin(ph) * wv.sA * at;
          }
        }
        if (rowWake !== 0) sV += rowWake * Math.exp(-((u / uW) ** 2));
        const dyW = D * sV * amp;
        const dxW = D * (sU * 0.8 + wob * 0.9) * amp;
        let r = 0;
        let g = 0;
        let bl = 0;
        let alpha = 0;
        if (!transparent) {
          // Mirrored sky, pushed around by the slopes (the fine waves only scatter glints).
          const gk = 0.55 + 0.45 * amp;
          const yr = oy - dist + dyW + D * gV * gk * 1.3;
          const xr = x + dxW + D * gU * gk * 0.6;
          const sj = Math.max(0, Math.min(skyRows - 1, Math.floor(Math.min(yr, oy - 1) / 2)));
          const si = Math.max(0, Math.min(hw - 1, Math.floor(xr / 2)));
          const so = (sj * hw + si) * 3;
          r = dr + (sb[so]! - dr) * R;
          g = dg + (sb[so + 1]! - dg) * R;
          bl = db + (sb[so + 2]! - db) * R;
          alpha = 255;
        }
        if (!transparent) {
          // Ripple shading: crests catch the sky, troughs show the deep water.
          const sh = sV * amp * 14;
          if (sh > 0) {
            const k = Math.min(0.5, sh) * (0.35 + 0.3 * glow);
            r += (core[0] - r) * k;
            g += (core[1] - g) * k;
            bl += (core[2] - bl) * k;
          } else {
            const k = Math.min(0.4, -sh) * 0.6;
            r += (dlr - r) * k;
            g += (dlg - g) * k;
            bl += (dlb - bl) * k;
          }
          // Sun glitter: fine-wave crests inside a column that widens toward the viewer.
          const gx = (x - ox) / (W * 0.04 + dist * 0.5);
          const col = Math.exp(-gx * gx) * glintRow;
          if (col > 0.01) {
            // Sparkles: short horizontal dashes, bigger toward the viewer (world-space noise).
            const spN = noise(u * spU, v * spV, t * 0.085) + 0.5 * (sV / 0.03) * Math.min(1.4, amp);
            const sp = ss(0.42, 0.8, spN);
            const pk = Math.min(1, col * 0.55);
            r += (halo[0] - r) * pk;
            g += (halo[1] - g) * pk;
            bl += (halo[2] - bl) * pk;
            const k = Math.min(1, col * sp * 2.4);
            r += (core[0] - r) * k;
            g += (core[1] - g) * k;
            bl += (core[2] - bl) * k;
          }
          const vk = ss(0.32, 0.95, Math.hypot(((x - ox) / W) * 1.1, (y / H - 0.5) * 1.2)) * 0.55;
          r += (vgc[0] - r) * vk;
          g += (vgc[1] - g) * vk;
          bl += (vgc[2] - bl) * vk;
        }
        // Mirrored title (or the title itself while it is still under the water).
        const ys = y + dyW * 0.7;
        const xs = x + dxW * 0.7;
        const den = (ys - oy) * sinb + P * cosb;
        if (x > rxMin && x < rxMax && y < ryMax && (den < -1e-6 || den > 1e-6)) {
          const h = (P * (WL - ys)) / den;
          if (h > 0 && h < hTop + 4) {
            const X = ox + ((xs - ox) * (P + h * sinb)) / P;
            const fx = (X - mx0) / 2 - 0.5;
            const fy = (WL - h - my0) / 2 - 0.5;
            const ix = Math.floor(fx);
            const iy = Math.floor(fy);
            if (ix >= 0 && iy >= 0 && ix < mw - 1 && iy < mh - 1) {
              const ax = fx - ix;
              const ay = fy - iy;
              const q = iy * mw + ix;
              const m = (ma[q]! * (1 - ax) + ma[q + 1]! * ax) * (1 - ay) + (ma[q + mw]! * (1 - ax) + ma[q + mw + 1]! * ax) * ay;
              if (m > 0.002) {
                const k = m * reflA * (1 - fadeK * ss(0, hTop, h));
                if (transparent) {
                  r = T[0];
                  g = T[1];
                  bl = T[2];
                  alpha = Math.max(alpha, k * 255);
                } else {
                  r += (T[0] - r) * k;
                  g += (T[1] - g) * k;
                  bl += (T[2] - bl) * k;
                }
              }
            }
          }
        }
        // A bright meniscus where the standing title meets the water.
        if (contactRow > 0.01) {
          const inX = Math.exp(-(((x - ox) / (L.blockW * 0.5)) ** 8));
          const k = contactRow * inX * 0.45;
          if (transparent) {
            if (alpha < k * 255) { r = core[0]; g = core[1]; bl = core[2]; alpha = k * 255; }
          } else {
            r += (core[0] - r) * k;
            g += (core[1] - g) * k;
            bl += (core[2] - bl) * k;
          }
        }
        const p = (j * hw + i) * 4;
        out[p] = r;
        out[p + 1] = g;
        out[p + 2] = bl;
        out[p + 3] = alpha;
      }
    }
    ctx.putImageData(img, 0, 0);
  }, [frame, L, sky, mask, waves, C, hw, hh, W, H, transparent, b, amp, reflA, ripple, glow, noise]);

  // ---------- DOM title: folds up around the waterline with CSS 3D ----------
  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background, overflow: "hidden" }}>
      <canvas ref={canvasRef} width={hw} height={hh} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
      {L ? (
        <AbsoluteFill style={{ perspective: `${L.P}px`, perspectiveOrigin: `${L.ox}px ${L.oy}px` }}>
          <div
            data-21st-slot="text"
            style={{
              position: "absolute",
              left: L.bx,
              top: L.blockTop,
              width: L.blockW,
              height: L.n * L.lineH,
              fontFamily: family,
              fontWeight: weight,
              fontSize: L.F,
              lineHeight: L.LH,
              textAlign: "center",
              whiteSpace: "nowrap",
              color,
              transformOrigin: `50% ${L.hingeY}px`,
              transform: `rotateX(${a.toFixed(3)}deg)`,
              backfaceVisibility: "hidden",
              opacity: standing ? 1 : 0,
            }}
          >
            {L.lines.map((l, i) => (
              <div key={i} style={{ height: L.lineH }}>
                {l}
              </div>
            ))}
          </div>
        </AbsoluteFill>
      ) : null}
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: 0.06, mixBlendMode: "overlay" }} /> : null}
    </AbsoluteFill>
  );
};
