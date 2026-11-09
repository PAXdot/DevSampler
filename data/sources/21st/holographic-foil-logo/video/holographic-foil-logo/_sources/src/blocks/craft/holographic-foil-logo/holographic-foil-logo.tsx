// Built with Remotion - https://remotion.pro/license
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, continueRender, delayRender, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeOut, fitFontSize, ramp, useLayout, waitForBrandFonts } from "../../../kit/index";
import type { Aspect } from "../../../kit/spec";
import { hashString, rng, simplex3 } from "../_lib/noise";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./holographic-foil-logo.schema";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='23' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

/** Timeline (frames at 30 fps). */
const T_PRESS = 12;
const T_SWEEP = 24;
const T_GLINT = 66;
const T_SETTLE = 126;

// ---------------------------------------------------------------- color

function rgbOf(color: string, fallback: RGB = [255, 255, 255]): RGB {
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
const mixRGB = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const css = (c: RGB, a = 1) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${Math.max(0, Math.min(1, a)).toFixed(3)})`;
const HOT: RGB = [255, 255, 255];
const SHADE: RGB = [0, 0, 0];

function toHsl([r0, g0, b0]: RGB): [number, number, number] {
  const r = r0 / 255, g = g0 / 255, b = b0 / 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
  const l = (mx + mn) / 2;
  if (mx === mn) return [0, 0, l];
  const d = mx - mn;
  const s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
  let h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
  h *= 60;
  return [h, s, l];
}
function fromHsl(h: number, s: number, l: number): RGB {
  const hh = (((h % 360) + 360) % 360) / 360;
  if (s <= 0) return [l * 255, l * 255, l * 255];
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const f = (t0: number) => {
    let t = t0;
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  return [f(hh + 1 / 3) * 255, f(hh) * 255, f(hh - 1 / 3) * 255];
}

/**
 * The diffraction spectrum, steered by the brand: it runs from a cooler cousin of the
 * secondary, through the secondary and the primary, to a warmer cousin of the primary.
 * Indexed by grating phase x in [0, 4): each whole number is one diffraction order,
 * dark at both ends like a real spectrum and fainter at higher orders.
 */
const LUT_N = 1024;
function spectrumAt(P: RGB, Q: RGB, dark: boolean, pastel: boolean): (p: number) => RGB {
  const hp = toHsl(P), hq = toHsl(Q);
  let delta = hp[0] - hq[0];
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  const sg = delta >= 0 ? 1 : -1;
  const spread = Math.max(55, 80 - Math.abs(delta) * 0.25);
  const hues = [hq[0] - sg * spread, hq[0], hq[0] + delta, hq[0] + delta + sg * spread];
  const satOf = (s: number) => (s < 0.06 ? s : Math.min(1, 0.45 * s + 0.55 * (dark ? 0.98 : 0.8)));
  const sats = [satOf(hq[1]), satOf(hq[1]), satOf(hp[1]), satOf(hp[1])];
  const litOf = (l: number) => (pastel ? Math.min(0.8, Math.max(0.64, l)) : dark ? Math.min(0.66, Math.max(0.52, l)) : Math.min(0.6, Math.max(0.46, l)));
  const lits = [litOf(hq[2]), litOf(hq[2]), litOf(hp[2]), litOf(hp[2])];
  return (p: number) => {
    const u = Math.max(0, Math.min(0.9999, p)) * 3;
    const k = Math.floor(u), f = u - k;
    const e = f * f * (3 - 2 * f);
    return fromHsl(hues[k]! + (hues[k + 1]! - hues[k]!) * e, sats[k]! + (sats[k + 1]! - sats[k]!) * e, lits[k]! + (lits[k + 1]! - lits[k]!) * e);
  };
}
function buildLut(at: (p: number) => RGB): Float32Array {
  const out = new Float32Array(LUT_N * 3);
  const gains = [0.4, 1, 0.85, 0.62];
  for (let i = 0; i < LUT_N; i++) {
    const x = (i / LUT_N) * 4;
    const band = Math.floor(x), p = x - band;
    const env = Math.pow(Math.sin(Math.PI * p), 0.55) * gains[band]!;
    const c = at(p);
    out[i * 3] = c[0] * env;
    out[i * 3 + 1] = c[1] * env;
    out[i * 3 + 2] = c[2] * env;
  }
  return out;
}

// ---------------------------------------------------------------- math

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (x: number) => {
  const t = clamp01(x);
  return t * t * (3 - 2 * t);
};

// ---------------------------------------------------------------- layout

type Plan = { cx: number; cy: number; cardW: number; cardH: number; capY: number; capW: number; capH: number; capLines: number; capMax: number; capMin: number };

function plan(aspect: Aspect, w: number, h: number, cap: boolean): Plan {
  if (aspect === "9:16")
    return { cx: w / 2, cy: h * (cap ? 0.4 : 0.46), cardW: w * 0.8, cardH: h * 0.58, capY: h * 0.755, capW: w * 0.84, capH: h * 0.11, capLines: 2, capMax: h * 0.042, capMin: h * 0.031 };
  if (aspect === "1:1")
    return { cx: w / 2, cy: h * (cap ? 0.41 : 0.47), cardW: w * 0.7, cardH: h * 0.58, capY: h * 0.79, capW: w * 0.8, capH: h * 0.1, capLines: 1, capMax: h * 0.05, capMin: h * 0.02 };
  return { cx: w / 2, cy: h * (cap ? 0.42 : 0.47), cardW: w * 0.46, cardH: h * 0.6, capY: h * 0.81, capW: w * 0.6, capH: h * 0.1, capLines: 1, capMax: h * 0.052, capMin: h * 0.02 };
}

// ---------------------------------------------------------------- geometry

type Geo = {
  key: string;
  k: number;
  cw: number;
  ch: number;
  pad: number;
  /** Card coverage, 0..255. */
  A: Uint8ClampedArray;
  /** Relief slopes of the stamped mark (scaled by the press depth each frame). */
  LS: Float32Array;
  /** Relief slopes of the card edge bevel and the stamped frame line. */
  ES: Float32Array;
  /** Grating vector per pixel (unit, in the card plane). */
  G: Float32Array;
  /** Grating gain: diamond micro tiles and fine groove lines. */
  GN: Float32Array;
  /** 1 on the mark, 0 on the foil field. */
  LM: Float32Array;
  /** Glitter specks: x, y, nx, ny, size, hue. */
  specks: Float32Array;
  shadow: HTMLCanvasElement;
  shadowPad: number;
};

function boxBlur(src: Float32Array, w: number, h: number, r: number): Float32Array {
  const tmp = new Float32Array(w * h), out = new Float32Array(w * h);
  const inv = 1 / (2 * r + 1);
  for (let y = 0; y < h; y++) {
    const o = y * w;
    let acc = 0;
    for (let x = -r; x <= r; x++) acc += src[o + Math.min(w - 1, Math.max(0, x))]!;
    for (let x = 0; x < w; x++) {
      tmp[o + x] = acc * inv;
      acc += src[o + Math.min(w - 1, x + r + 1)]! - src[o + Math.max(0, x - r)]!;
    }
  }
  for (let x = 0; x < w; x++) {
    let acc = 0;
    for (let y = -r; y <= r; y++) acc += tmp[Math.min(h - 1, Math.max(0, y)) * w + x]!;
    for (let y = 0; y < h; y++) {
      out[y * w + x] = acc * inv;
      acc += tmp[Math.min(h - 1, y + r + 1) * w + x]! - tmp[Math.max(0, y - r) * w + x]!;
    }
  }
  return out;
}

/** The logo rasterized into the card buffer: coverage and a height factor per tone. */
function rasterLogo(img: HTMLImageElement | null, cw: number, ch: number, boxW: number, boxH: number): { alpha: Float32Array; tone: Float32Array } | null {
  if (!img) return null;
  try {
    const nw0 = img.naturalWidth || 512, nh0 = img.naturalHeight || 512;
    const k0 = 1024 / Math.max(nw0, nh0);
    const tc = document.createElement("canvas");
    tc.width = Math.max(1, Math.round(nw0 * k0));
    tc.height = Math.max(1, Math.round(nh0 * k0));
    const tctx = tc.getContext("2d", { willReadFrequently: true })!;
    tctx.drawImage(img, 0, 0, tc.width, tc.height);
    const td = tctx.getImageData(0, 0, tc.width, tc.height).data;
    let tx0 = tc.width, ty0 = tc.height, tx1 = -1, ty1 = -1;
    for (let y = 0; y < tc.height; y++)
      for (let x = 0; x < tc.width; x++)
        if (td[(y * tc.width + x) * 4 + 3]! > 16) {
          if (x < tx0) tx0 = x;
          if (x > tx1) tx1 = x;
          if (y < ty0) ty0 = y;
          if (y > ty1) ty1 = y;
        }
    if (tx1 < 0) return null;
    const nw = tx1 - tx0 + 1, nh = ty1 - ty0 + 1;
    const kk = Math.min(boxW / nw, boxH / nh);
    const dw = nw * kk, dh = nh * kk;
    const c = document.createElement("canvas");
    c.width = cw;
    c.height = ch;
    const ctx = c.getContext("2d", { willReadFrequently: true })!;
    const ox = (cw - dw) / 2, oy = (ch - dh) / 2;
    ctx.drawImage(tc, tx0, ty0, nw, nh, ox, oy, dw, dh);
    const d = ctx.getImageData(0, 0, cw, ch).data;
    const n = cw * ch;
    const alpha = new Float32Array(n);
    const L = new Float32Array(n);
    // Opaque artwork (a logo on a white or colored square): the mark is what differs from its paper.
    const rx0 = Math.ceil(ox) + 1, ry0 = Math.ceil(oy) + 1, rx1 = Math.floor(ox + dw) - 2, ry1 = Math.floor(oy + dh) - 2;
    let clear = 0, total = 0;
    for (let y = ry0; y < ry1; y += 2)
      for (let x = rx0; x < rx1; x += 2) {
        total++;
        if (d[(y * cw + x) * 4 + 3]! < 250) clear++;
      }
    const opaque = total > 0 && clear < total * 0.03;
    const pc: [number, number, number] = [0, 0, 0];
    if (opaque)
      for (const [x, y] of [[rx0, ry0], [rx1, ry0], [rx0, ry1], [rx1, ry1]] as const) {
        const o = (y * cw + x) * 4;
        pc[0] += d[o]! / 4;
        pc[1] += d[o + 1]! / 4;
        pc[2] += d[o + 2]! / 4;
      }
    let area = 0, lmin = 1e9, lmax = -1e9;
    for (let i = 0; i < n; i++) {
      const o = i * 4;
      let a = d[o + 3]! / 255;
      if (opaque && a > 0) {
        const dist = Math.abs(d[o]! - pc[0]) + Math.abs(d[o + 1]! - pc[1]) + Math.abs(d[o + 2]! - pc[2]);
        a *= clamp01((dist - 50) / 60);
      }
      alpha[i] = a;
      const l = 0.299 * d[o]! + 0.587 * d[o + 1]! + 0.114 * d[o + 2]!;
      L[i] = l;
      if (a > 0.6) {
        area++;
        if (l < lmin) lmin = l;
        if (l > lmax) lmax = l;
      }
    }
    if (area < n * 0.003) return null;
    const tone = new Float32Array(n);
    const range = lmax - lmin;
    // Multi-tone marks become a stepped relief: darker parts stand higher.
    for (let i = 0; i < n; i++) tone[i] = range > 30 ? 1 - 0.42 * clamp01((L[i]! - lmin) / range) : 1;
    return { alpha, tone };
  } catch {
    return null;
  }
}

function buildGeo(img: HTMLImageElement | null, P: Plan, aspect: Aspect, key: string): Geo {
  const k = Math.min(1, Math.sqrt(600000 / (P.cardW * P.cardH)));
  const cw = Math.max(16, Math.round(P.cardW * k)), ch = Math.max(16, Math.round(P.cardH * k));
  const mn = Math.min(cw, ch);
  const pad = Math.round(mn * 0.08);
  const n = cw * ch;
  const hw = cw / 2, hh = ch / 2;
  const rr = mn * 0.065;

  // Card shape, edge bevel and the stamped double frame line.
  const A = new Uint8ClampedArray(n);
  const HS = new Float32Array(n);
  const be = Math.max(2, mn * 0.011), Hb = be * 0.6;
  const gw = Math.max(1, mn * 0.0034), Hg = gw * 1.3;
  const gi = mn * 0.05, gi2 = gi + gw * 3.4;
  const dist = new Float32Array(n);
  for (let y = 0; y < ch; y++)
    for (let x = 0; x < cw; x++) {
      const px = Math.abs(x + 0.5 - hw), py = Math.abs(y + 0.5 - hh);
      const qx = px - (hw - rr), qy = py - (hh - rr);
      const out = Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - rr;
      const d = -out;
      const i = y * cw + x;
      dist[i] = d;
      A[i] = Math.round(clamp01(d + 0.5) * 255);
      HS[i] = Hb * smooth(d / be) - Hg * (Math.exp(-(((d - gi) / gw) ** 2)) + Math.exp(-(((d - gi2) / gw) ** 2)));
    }

  // The mark.
  const boxW = cw * (aspect === "9:16" ? 0.68 : 0.64);
  const boxH = Math.min(ch * (aspect === "9:16" ? 0.44 : 0.52), boxW);
  let lg = rasterLogo(img, cw, ch, boxW, boxH);
  if (!lg) {
    // Abstract fallback: a ring around a disc.
    const alpha = new Float32Array(n), tone = new Float32Array(n);
    const R = Math.min(boxW, boxH) * 0.5;
    for (let y = 0; y < ch; y++)
      for (let x = 0; x < cw; x++) {
        const r = Math.hypot(x + 0.5 - hw, y + 0.5 - hh);
        const i = y * cw + x;
        const ring = clamp01(R - r + 0.5) * clamp01(r - R * 0.78 + 0.5);
        const disc = clamp01(R * 0.5 - r + 0.5);
        alpha[i] = Math.max(ring, disc);
        tone[i] = disc > 0 ? 1 : 0.7;
      }
    lg = { alpha, tone };
  }
  const raw = new Float32Array(n);
  for (let i = 0; i < n; i++) raw[i] = lg.alpha[i]! * lg.tone[i]!;
  const rb = Math.max(1, Math.round(mn * 0.0055));
  const bl = boxBlur(boxBlur(raw, cw, ch, rb), cw, ch, rb);
  const blA = boxBlur(boxBlur(lg.alpha, cw, ch, rb), cw, ch, rb);
  const HL = new Float32Array(n);
  const HLs = rb * 2.6;
  for (let i = 0; i < n; i++) {
    const b = bl[i]!;
    HL[i] = (b < 0 ? 0 : b > 1 ? 1 : b) * HLs;
  }
  const LS = new Float32Array(n * 2), ES = new Float32Array(n * 2);
  for (let y = 0; y < ch; y++)
    for (let x = 0; x < cw; x++) {
      const i = y * cw + x;
      const xl = x > 0 ? i - 1 : i, xr = x < cw - 1 ? i + 1 : i;
      const yu = y > 0 ? i - cw : i, yd = y < ch - 1 ? i + cw : i;
      LS[i * 2] = (HL[xr]! - HL[xl]!) * 0.5;
      LS[i * 2 + 1] = (HL[yd]! - HL[yu]!) * 0.5;
      ES[i * 2] = (HS[xr]! - HS[xl]!) * 0.5;
      ES[i * 2 + 1] = (HS[yd]! - HS[yu]!) * 0.5;
    }

  // Gratings: a warped concentric (radial grating vector) field cut into diamond micro tiles,
  // and a straight linear grating on the mark so it catches the light on its own beat.
  const LM = new Float32Array(n), G = new Float32Array(n * 2), GN = new Float32Array(n);
  const noise = simplex3(`foil-${key}`);
  const f = 1.7 / mn;
  const cell = Math.max(3, mn * 0.0085);
  const la = (-32 * Math.PI) / 180;
  const lgx = Math.cos(la), lgy = Math.sin(la);
  const ringP = Math.max(2.2, 3 * k);
  const lineP = Math.max(2, 2.5 * k);
  for (let y = 0; y < ch; y++)
    for (let x = 0; x < cw; x++) {
      const i = y * cw + x;
      const px = x + 0.5 - hw, py = y + 0.5 - hh;
      const m = clamp01((blA[i]! - 0.3) / 0.4);
      LM[i] = m;
      const u = Math.floor((px + py) / cell), v = Math.floor((px - py) / cell);
      const hsh = Math.imul(u * 73856093, 1) ^ Math.imul(v * 19349663, 1) ^ 0x9e3779b9;
      const r1 = ((Math.imul(hsh ^ (hsh >>> 13), 0x5bd1e995) >>> 0) % 10007) / 10007;
      const r2 = ((Math.imul(hsh ^ (hsh >>> 7), 0x27d4eb2d) >>> 0) % 10009) / 10009;
      const th = Math.atan2(py, px) + 0.9 * noise(px * f, py * f, 0.3) + (r1 - 0.5) * 0.34;
      let gx = Math.cos(th), gy = Math.sin(th);
      const ln = noise(px * f * 0.6, py * f * 0.6, 7.1) * 0.12;
      const mgx = lgx * Math.cos(ln) - lgy * Math.sin(ln), mgy = lgx * Math.sin(ln) + lgy * Math.cos(ln);
      gx = gx + (mgx - gx) * m;
      gy = gy + (mgy - gy) * m;
      const gl = Math.hypot(gx, gy) || 1;
      G[i * 2] = gx / gl;
      G[i * 2 + 1] = gy / gl;
      const rad = Math.hypot(px, py);
      const fieldGain = (0.8 + 0.36 * r2) * (0.9 + 0.1 * Math.sin((rad / ringP) * Math.PI * 2));
      const markGain = 0.94 + 0.06 * Math.sin(((px * lgx + py * lgy) / lineP) * Math.PI * 2);
      GN[i] = fieldGain + (markGain - fieldGain) * m;
    }

  // Glitter specks in the field, inside the frame line.
  const r = rng(hashString(`specks-${key}`));
  const count = Math.round(n / 2400);
  const sp: number[] = [];
  const s0 = Math.max(1.2, mn * 0.0042);
  for (let j = 0; j < count * 3 && sp.length < count * 6; j++) {
    const x = r() * cw, y = r() * ch;
    const i = Math.min(n - 1, Math.floor(y) * cw + Math.floor(x));
    if (dist[i]! < gi2 + gw * 3 || LM[i]! > 0.05 || bl[i]! > 0.1) continue;
    sp.push(x - hw, y - hh, (r() - 0.5) * 0.9, (r() - 0.5) * 0.9, s0 * (0.6 + r() * 1.2), r());
  }

  // Soft contact shadow sprite (quarter res, blurred once).
  const sq = 0.25;
  const blur = Math.max(2, Math.round(Math.min(P.cardW, P.cardH) * sq * 0.06));
  const shadowPad = blur * 3;
  const shadow = document.createElement("canvas");
  shadow.width = Math.max(4, Math.round(P.cardW * sq) + shadowPad * 2);
  shadow.height = Math.max(4, Math.round(P.cardH * sq) + shadowPad * 2);
  const sctx = shadow.getContext("2d", { willReadFrequently: true })!;
  sctx.filter = `blur(${blur}px)`;
  sctx.fillStyle = css(SHADE, 1);
  sctx.beginPath();
  sctx.roundRect(shadowPad, shadowPad, P.cardW * sq, P.cardH * sq, (rr / k) * sq);
  sctx.fill();
  sctx.filter = "none";

  return { key, k, cw, ch, pad, A, LS, ES, G, GN, LM, specks: Float32Array.from(sp), shadow, shadowPad: shadowPad / sq };
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("logo failed"));
    img.src = src;
  });
}

// ---------------------------------------------------------------- motion

/** Light position in units of the card half diagonal (x right, y down), and its strength. */
function lightAt(t: number): { x: number; y: number; on: number } {
  const on = 0.7 + 0.3 * smooth(t / 22);
  const s = clamp01((t - T_SWEEP) / (T_SETTLE - T_SWEEP));
  const u = smooth(Math.pow(s, 0.82));
  // One cubic bezier from upper left, low across the mark, up to rest at upper right.
  const P0 = [-1.08, -0.82], P1 = [-0.62, 0.42], P2 = [0.62, 0.12], P3 = [0.6, -0.8];
  const v = 1 - u;
  const a = v * v * v, b = 3 * v * v * u, c = 3 * v * u * u, d = u * u * u;
  let x = a * P0[0]! + b * P1[0]! + c * P2[0]! + d * P3[0]!;
  let y = a * P0[1]! + b * P1[1]! + c * P2[1]! + d * P3[1]!;
  if (t < T_SWEEP) x += -0.06 * (1 - t / T_SWEEP);
  // After the settle the light keeps breathing, so the foil never freezes.
  const q = Math.max(0, t - T_SETTLE + 20);
  const drift = smooth(q / 40);
  x += drift * 0.06 * Math.sin((q / 96) * Math.PI * 2);
  y += drift * 0.04 * Math.sin((q / 70) * Math.PI * 2);
  return { x, y, on };
}

/** Card drop (0 lifted .. 1 on the table) and the stamped relief depth. */
function pressAt(t: number): { lift: number; depth: number; impact: number; scale: number; rxPress: number } {
  const fall = clamp01(t / T_PRESS);
  const lift = t < T_PRESS ? 1 - fall * fall : 0;
  const k = t - T_PRESS;
  const impact = k >= 0 ? Math.exp(-k / 4) : 0;
  const bounce = k >= 0 ? Math.exp(-k / 3.5) * Math.cos(k * 0.62) : 0;
  const depth = k < 0 ? 0.12 : 1 - 0.88 * Math.exp(-k / 4.2) * Math.cos(k * 0.4);
  const scale = 1 + 0.15 * lift - 0.016 * bounce;
  const rxPress = 16 * lift + (k >= 0 ? -1.6 * Math.exp(-k / 5) * Math.sin(k * 0.55) : 0);
  return { lift, depth, impact, scale, rxPress };
}

// ---------------------------------------------------------------- component

/**
 * A foil card drops onto the table and the logo is stamped into it. A light then travels
 * across: the embossed relief catches it on its bevels, a diffraction rainbow in the brand's
 * hues rolls through the warped concentric grating of the field and the straight grating of
 * the mark, glitter specks flare, and the card tilts with the light before it settles.
 */
export const Component: React.FC<Props> = ({ logo, caption, primary, secondary, color, background, intensity, grain, fontFamily }) => {
  const frame = useCurrentFrame();
  const { width: w, height: h, aspect } = useLayout();
  const S = Math.min(w, h);
  const transparent = background === "transparent";
  const ink = rgbOf(color);
  const dark = transparent ? lum(ink) > 0.4 : lum(rgbOf(background, [0, 0, 0])) < 0.4;
  const hasCaption = caption.trim().length > 0;
  const font = brandFontStack(fontFamily);
  const P = useMemo(() => plan(aspect, w, h, hasCaption), [aspect, w, h, hasCaption]);

  const [asset, setAsset] = useState<{ img: HTMLImageElement | null } | null>(null);
  const [handle] = useState(() => delayRender("holographic-foil-logo logo and fonts", { timeoutInMilliseconds: 60000 }));
  useEffect(() => {
    let alive = true;
    (async () => {
      await waitForBrandFonts();
      let img: HTMLImageElement | null = null;
      try {
        img = await loadImage(logo.trim() || SAMPLE_LOGO);
      } catch {
        img = null;
      }
      if (alive) setAsset({ img });
    })()
      .catch(() => {
        if (alive) setAsset({ img: null });
      })
      .finally(() => continueRender(handle));
    return () => {
      alive = false;
    };
  }, [logo, handle]);

  const geo = useMemo(() => {
    if (!asset) return null;
    return buildGeo(asset.img, P, aspect, `${hashString(logo)}-${aspect}-${w}x${h}-${hasCaption ? 1 : 0}`);
  }, [asset, logo, P, aspect, w, h, hasCaption]);

  const PC = rgbOf(primary), QC = rgbOf(secondary);
  const BG: RGB = transparent ? mixRGB(ink, dark ? SHADE : HOT, 0.9) : rgbOf(background, dark ? [0, 0, 0] : [255, 255, 255]);
  const luts = useMemo(() => {
    const vivid = spectrumAt(rgbOf(primary), rgbOf(secondary), dark, false);
    const soft = spectrumAt(rgbOf(primary), rgbOf(secondary), dark, !dark);
    return { vivid, card: buildLut(soft) };
  }, [primary, secondary, dark]);

  const cardRef = useRef<HTMLCanvasElement>(null);
  const backRef = useRef<HTMLCanvasElement>(null);
  const imgData = useRef<{ key: string; data: ImageData } | null>(null);
  const spillRef = useRef<HTMLCanvasElement | null>(null);

  const t = frame;
  const L = lightAt(t);
  const pr = pressAt(t);
  const ry = 5.5 * L.x;
  const rx = -4 * (L.y + 0.45) + pr.rxPress;
  const tiltBreath = smooth((t - T_SETTLE) / 30);
  const ryF = ry + tiltBreath * 0.5 * Math.sin((t / 80) * Math.PI * 2);
  const rxF = rx + tiltBreath * 0.4 * Math.sin((t / 64) * Math.PI * 2);

  // ---------- the foil card (per-pixel diffraction shading) ----------
  useLayoutEffect(() => {
    const cv = cardRef.current;
    const ctx = cv?.getContext("2d", { willReadFrequently: true });
    if (!ctx || !geo) return;
    const { cw, ch, pad, k, A, LS, ES, G, GN, LM, specks } = geo;
    if (!imgData.current || imgData.current.key !== geo.key) imgData.current = { key: geo.key, data: ctx.createImageData(cw, ch) };
    const out = imgData.current.data.data;
    const lut = luts.card;
    const hw = cw / 2, hh = ch / 2;
    const D = Math.hypot(hw, hh);
    const Lx = L.x * D, Ly = L.y * D, Lz = 1.05 * D;
    const Ez = 3.2 * D;
    const Ex = -Ez * Math.sin((ryF * Math.PI) / 180), Ey = Ez * Math.sin((rxF * Math.PI) / 180);
    const depth = pr.depth;
    const on = L.on * (1 + 0.35 * pr.impact);
    const str = 0.35 + 0.65 * intensity;
    const fieldM = mixRGB(mixRGB(BG, ink, dark ? 0.2 : 0.1), QC, dark ? 0.14 : 0.06);
    const markM = mixRGB(BG, ink, dark ? 0.44 : 0.3);
    const hot = dark ? mixRGB(ink, HOT, 0.55) : HOT;
    const Rf2 = (0.95 * D) ** 2;
    const lz2 = Lz * Lz;
    const fR = fieldM[0], fG = fieldM[1], fB = fieldM[2];
    const dR = markM[0] - fR, dG = markM[1] - fG, dB = markM[2] - fB;
    const hR = hot[0], hG = hot[1], hB = hot[2];
    const iri = 0.17;
    const Gf = 3.05, Gl = 3.7;
    for (let y = 0; y < ch; y++) {
      const py = y + 0.5 - hh;
      const ly0 = Ly - py, ey0 = Ey - py;
      for (let x = 0; x < cw; x++) {
        const i = y * cw + x;
        const o = i * 4;
        const a = A[i]!;
        if (a === 0) {
          out[o + 3] = 0;
          continue;
        }
        const px = x + 0.5 - hw;
        const sx = LS[i * 2]! * depth + ES[i * 2]!, sy = LS[i * 2 + 1]! * depth + ES[i * 2 + 1]!;
        const nz = 1 / Math.sqrt(1 + sx * sx + sy * sy);
        const nx = -sx * nz, ny = -sy * nz;
        let lx = Lx - px, ly = ly0;
        const d2 = lx * lx + ly * ly;
        const il = 1 / Math.sqrt(d2 + lz2);
        lx *= il;
        ly *= il;
        const lz = Lz * il;
        let ex = Ex - px, ey = ey0;
        const ie = 1 / Math.sqrt(ex * ex + ey * ey + Ez * Ez);
        ex *= ie;
        ey *= ie;
        const ez = Ez * ie;
        const hx = lx + ex, hy = ly + ey, hz = lz + ez;
        const hn = hx * nx + hy * ny + hz * nz;
        const tx = hx - hn * nx, ty = hy - hn * ny;
        const gx = G[i * 2]!, gy = G[i * 2 + 1]!;
        const s = tx * gx + ty * gy;
        const q = ty * gx - tx * gy;
        const tl = Math.sqrt(tx * tx + ty * ty);
        const W = 0.1 + 0.28 * tl;
        let br = 1 / (1 + (q * q) / (W * W));
        br *= br;
        const m = LM[i]!;
        const xg = (s < 0 ? -s : s) * (Gf + (Gl - Gf) * m);
        const li = Math.min(LUT_N - 1, (xg * (LUT_N / 4)) | 0) * 3;
        const fo = 1 / (1 + d2 / Rf2);
        const rainK = (br * (1 - iri) + iri) * GN[i]! * str * (0.6 + 0.85 * fo) * on;
        // Specular: broad sheen and a tight hotspot.
        const ndh = hn / Math.sqrt(hx * hx + hy * hy + hz * hz);
        const c1 = ndh > 0 ? ndh : 0;
        const c2 = c1 * c1, c4 = c2 * c2, c8 = c4 * c4, c16 = c8 * c8;
        const c64 = c16 * c16 * c16 * c16;
        const c256 = c64 * c64 * c64 * c64;
        const nl = nx * lx + ny * ly + nz * lz;
        const sh0 = 1 + 1.9 * (nl - lz) * (dark ? 1 : 1.25);
        const sh = sh0 < 0.45 ? 0.45 : sh0;
        const lit = (0.42 + 0.78 * fo) * sh * on;
        let r = (fR + dR * m) * lit, g = (fG + dG * m) * lit, b = (fB + dB * m) * lit;
        const spec = ((dark ? 0.1 : 0.16) * c16 + 0.18 * c64 + 0.85 * c256) * on;
        if (dark) {
          r += lut[li]! * rainK + hR * spec;
          g += lut[li + 1]! * rainK + hG * spec;
          b += lut[li + 2]! * rainK + hB * spec;
        } else {
          const mx = Math.max(lut[li]!, lut[li + 1]!, lut[li + 2]!);
          const al = Math.min(0.85, rainK * 0.95 * Math.min(1, mx / 150));
          const inv = mx > 1 ? 255 / mx : 0;
          r = r * (1 - al) + lut[li]! * inv * sh * al + hR * spec;
          g = g * (1 - al) + lut[li + 1]! * inv * sh * al + hG * spec;
          b = b * (1 - al) + lut[li + 2]! * inv * sh * al + hB * spec;
        }
        out[o] = r;
        out[o + 1] = g;
        out[o + 2] = b;
        out[o + 3] = a;
      }
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, cv!.width, cv!.height);
    ctx.putImageData(imgData.current.data, pad, pad);

    // ---------- glitter specks ----------
    const add = dark ? "lighter" : "source-over";
    ctx.globalCompositeOperation = add;
    for (let j = 0; j < specks.length; j += 6) {
      const sx0 = specks[j]!, sy0 = specks[j + 1]!;
      const nx0 = specks[j + 2]!, ny0 = specks[j + 3]!;
      const nl0 = 1 / Math.sqrt(1 + nx0 * nx0 + ny0 * ny0);
      let lx = Lx - sx0, ly = Ly - sy0;
      const il = 1 / Math.sqrt(lx * lx + ly * ly + Lz * Lz);
      lx *= il;
      ly *= il;
      const lz = Lz * il;
      let ex = Ex - sx0, ey = Ey - sy0;
      const ie = 1 / Math.sqrt(ex * ex + ey * ey + Ez * Ez);
      ex *= ie;
      ey *= ie;
      const ez = Ez * ie;
      const hx = lx + ex, hy = ly + ey, hz = lz + ez;
      const ndh = ((hx * nx0 + hy * ny0 + hz) * nl0) / Math.sqrt(hx * hx + hy * hy + hz * hz);
      if (ndh < 0.97) continue;
      const v = Math.pow(ndh, 260) * on * str;
      if (v < 0.03) continue;
      const sz = specks[j + 4]! * (0.6 + 0.8 * v);
      const c = luts.vivid(specks[j + 5]!);
      const col = dark ? mixRGB(c, HOT, 0.35 * v) : c;
      const X = pad + sx0 + hw, Y = pad + sy0 + hh;
      ctx.fillStyle = css(col, Math.min(1, v * 1.2));
      ctx.beginPath();
      ctx.arc(X, Y, sz, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = css(dark ? HOT : col, Math.min(1, v) * 0.8);
      const ray = sz * 3.2;
      ctx.fillRect(X - ray, Y - sz * 0.16, ray * 2, sz * 0.32);
      ctx.fillRect(X - sz * 0.16, Y - ray, sz * 0.32, ray * 2);
    }

    // ---------- the glint: a star where the light mirrors in the card ----------
    const flash = Math.exp(-(((t - T_GLINT) / 5.5) ** 2)) + 0.18 * pr.impact;
    if (flash > 0.02) {
      const gx = (Lx * Ez + Ex * Lz) / (Lz + Ez), gy = (Ly * Ez + Ey * Lz) / (Lz + Ez);
      const X = pad + hw + Math.max(-hw * 0.9, Math.min(hw * 0.9, gx));
      const Y = pad + hh + Math.max(-hh * 0.9, Math.min(hh * 0.9, gy));
      const mn = Math.min(cw, ch);
      const core = dark ? mixRGB(hot, HOT, 0.6) : HOT;
      const tint = luts.vivid(0.35);
      const R = mn * (0.1 + 0.08 * flash);
      const rg = ctx.createRadialGradient(X, Y, 0, X, Y, R);
      rg.addColorStop(0, css(core, 0.95 * flash));
      rg.addColorStop(0.25, css(mixRGB(core, tint, 0.4), 0.45 * flash));
      rg.addColorStop(1, css(tint, 0));
      ctx.fillStyle = rg;
      ctx.fillRect(X - R, Y - R, R * 2, R * 2);
      const len = mn * (0.22 + 0.3 * flash);
      for (const [ang, lk, th] of [[0.32, 1, 1], [0.32 + Math.PI / 2, 0.75, 1], [0.32 + Math.PI / 4, 0.32, 0.6], [0.32 - Math.PI / 4, 0.32, 0.6]] as const) {
        ctx.save();
        ctx.translate(X, Y);
        ctx.rotate(ang);
        const ll = len * lk;
        const lgd = ctx.createLinearGradient(-ll, 0, ll, 0);
        lgd.addColorStop(0, css(core, 0));
        lgd.addColorStop(0.5, css(core, Math.min(1, 0.95 * flash)));
        lgd.addColorStop(1, css(core, 0));
        ctx.fillStyle = lgd;
        const tw = Math.max(1, mn * 0.006 * th * (0.6 + 0.6 * flash));
        ctx.beginPath();
        ctx.moveTo(-ll, 0);
        ctx.lineTo(0, -tw);
        ctx.lineTo(ll, 0);
        ctx.lineTo(0, tw);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }
    ctx.globalCompositeOperation = "source-over";
    void k;
  }, [geo, luts, t, L.x, L.y, L.on, pr.depth, pr.impact, ryF, rxF, intensity, dark, primary, color, background, transparent]);

  // ---------- the room: light pool, rainbow spill, shadow ----------
  const bw = Math.max(2, Math.round(w / 2)), bh = Math.max(2, Math.round(h / 2));
  useLayoutEffect(() => {
    const ctx = backRef.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx || !geo) return;
    const s = 0.5;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, bw, bh);
    const cx = P.cx * s, cy = P.cy * s;
    const D = Math.hypot(P.cardW, P.cardH) * 0.5 * s;
    const lx = cx + L.x * D * 1.15, ly = cy + L.y * D * 1.15;
    if (!transparent) {
      ctx.fillStyle = css(BG, 1);
      ctx.fillRect(0, 0, bw, bh);
      // The lamp's pool of light on the table.
      const R = Math.max(bw, bh) * 0.62;
      const pool = ctx.createRadialGradient(lx, ly, 0, lx, ly, R);
      const lampC = dark ? mixRGB(BG, mixRGB(ink, QC, 0.3), 0.2) : mixRGB(BG, HOT, 0.6);
      pool.addColorStop(0, css(lampC, (dark ? 0.9 : 0.8) * L.on));
      pool.addColorStop(1, css(lampC, 0));
      ctx.fillStyle = pool;
      ctx.fillRect(0, 0, bw, bh);
      // Diffracted light thrown back onto the table on the far side of the card.
      let dx = cx - lx, dy = cy - ly;
      const dl = Math.hypot(dx, dy) || 1;
      dx /= dl;
      dy /= dl;
      const ext = Math.abs(dx) * P.cardW * 0.5 * s + Math.abs(dy) * P.cardH * 0.5 * s;
      const spill = spillRef.current ?? document.createElement("canvas");
      spillRef.current = spill;
      if (spill.width !== 64) {
        spill.width = 64;
        spill.height = 16;
      }
      const sc = spill.getContext("2d", { willReadFrequently: true })!;
      sc.globalCompositeOperation = "source-over";
      sc.clearRect(0, 0, 64, 16);
      const lg = sc.createLinearGradient(4, 0, 60, 0);
      for (let i = 0; i <= 6; i++) lg.addColorStop(i / 6, css(luts.vivid(i / 6), Math.sin((Math.PI * (i + 0.5)) / 7)));
      sc.fillStyle = lg;
      sc.fillRect(0, 0, 64, 16);
      sc.globalCompositeOperation = "destination-in";
      sc.setTransform(28, 0, 0, 6, 32, 8);
      const em = sc.createRadialGradient(0, 0, 0, 0, 0, 1);
      em.addColorStop(0, css(SHADE, 1));
      em.addColorStop(1, css(SHADE, 0));
      sc.fillStyle = em;
      sc.fillRect(-1.2, -1.4, 2.4, 2.8);
      sc.setTransform(1, 0, 0, 1, 0, 0);
      const swing = Math.sin(t * 0.045) * 0.1;
      ctx.save();
      ctx.translate(cx + dx * (ext + D * 0.12), cy + dy * (ext + D * 0.12));
      ctx.rotate(Math.atan2(dy, dx) + Math.PI / 2 + swing);
      ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
      ctx.globalAlpha = (dark ? 0.42 : 0.3) * (0.35 + 0.65 * intensity) * L.on * (1 - pr.lift);
      ctx.drawImage(spill, -D * 0.95, -D * 0.22, D * 1.9, D * 0.44);
      ctx.restore();
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      // Vignette.
      const v = ctx.createRadialGradient(bw / 2, bh / 2, Math.min(bw, bh) * 0.3, bw / 2, bh / 2, Math.hypot(bw, bh) * 0.6);
      v.addColorStop(0, css(BG, 0));
      v.addColorStop(1, css(dark ? mixRGB(BG, SHADE, 0.45) : mixRGB(BG, ink, 0.07), dark ? 0.8 : 0.55));
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, bw, bh);
    }
    // Shadow, thrown away from the light; it widens and fades while the card is lifted.
    const lift = pr.lift;
    const offK = 0.035 + 0.16 * lift;
    const ox = -L.x * D * offK * 2, oy = -L.y * D * offK * 2 + D * 0.03;
    const grow = 1 + 0.12 * lift;
    const sw = geo.shadow.width / 0.25 * s * grow, sh = geo.shadow.height / 0.25 * s * grow;
    ctx.globalAlpha = (dark ? 0.85 : 0.32) * (1 - 0.55 * lift) * Math.min(1, t / 4 + 0.3);
    ctx.drawImage(geo.shadow, cx + ox - sw / 2, cy + oy - sh / 2, sw, sh);
    ctx.globalAlpha = 1;
  }, [geo, t, L.x, L.y, L.on, pr.lift, bw, bh, P, transparent, dark, background, color, secondary, intensity, luts]);

  // ---------- caption ----------
  const capSize = hasCaption
    ? Math.max(P.capMin, fitFontSize({ chars: caption.length, boxW: P.capW, boxH: P.capH, lines: P.capLines, charEm: 0.56, lineHeight: 1.22, max: P.capMax }))
    : 0;
  const capIn = easeOut(ramp(frame, [84, 112], [0, 1]));
  const opacity = ramp(frame, [0, 5], [0, 1]);
  const canW = geo ? geo.cw + geo.pad * 2 : 2, canH = geo ? geo.ch + geo.pad * 2 : 2;
  const padO = geo ? geo.pad / geo.k : 0;
  const persp = Math.hypot(P.cardW, P.cardH) * 0.5 * 3.2;

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <AbsoluteFill>
        <canvas ref={backRef} width={bw} height={bh} style={{ width: "100%", height: "100%", display: "block" }} />
      </AbsoluteFill>
      <div
        data-21st-slot="logo"
        style={{
          position: "absolute",
          left: P.cx - P.cardW / 2 - padO,
          top: P.cy - P.cardH / 2 - padO,
          width: P.cardW + padO * 2,
          height: P.cardH + padO * 2,
          opacity,
          transform: `perspective(${persp.toFixed(1)}px) rotateX(${rxF.toFixed(3)}deg) rotateY(${ryF.toFixed(3)}deg) scale(${pr.scale.toFixed(4)})`,
        }}
      >
        <canvas ref={cardRef} width={canW} height={canH} style={{ width: "100%", height: "100%", display: "block" }} />
      </div>
      {hasCaption && geo ? (
        <div
          data-21st-slot="caption"
          style={{
            position: "absolute",
            left: (w - P.capW) / 2,
            width: P.capW,
            top: P.capY,
            textAlign: "center",
            fontFamily: font,
            fontWeight: 600,
            fontSize: capSize,
            lineHeight: 1.22,
            letterSpacing: `${(0.01 + 0.08 * (1 - capIn)).toFixed(4)}em`,
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
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.06 : 0.08, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
