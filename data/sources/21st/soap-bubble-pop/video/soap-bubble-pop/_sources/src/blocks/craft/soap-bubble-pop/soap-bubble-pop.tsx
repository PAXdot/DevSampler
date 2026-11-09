// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef } from "react";
import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeOut, fitFontSize, ramp, springSnap, useLayout, withAlpha } from "../../../kit/index";
import { fbm3, rng, simplex3 } from "../_lib/noise";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./soap-bubble-pop.schema";

/** The film is smooth color: half resolution is invisible and four times cheaper. */
const SCALE = 0.5;
const TEX = 192;
const TAU = Math.PI * 2;
/** Frame the film starts tearing, and how many frames the tear needs to run around the sphere. */
const POP = 44;
const POP_LEN = 15;
const THIN_FROM = 30;

type RGB = [number, number, number];

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
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const css = (c: RGB, a = 1) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${a.toFixed(3)})`;
const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (a: number, b: number, x: number) => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};

/** Tileable film-thickness noise, built once per worker. */
let NOISE: Float32Array | null = null;
function noiseTex(): Float32Array {
  if (NOISE) return NOISE;
  const n = simplex3("soap-film");
  const out = new Float32Array(TEX * TEX);
  const P = 3;
  let lo = Infinity, hi = -Infinity;
  for (let y = 0; y < TEX; y++) {
    const v = y / TEX;
    for (let x = 0; x < TEX; x++) {
      const u = x / TEX;
      const f = (fx: number, fy: number) => fbm3(n, fx, fy, 0.41, 2);
      const a = f(u * P, v * P), b = f((u - 1) * P, v * P), c = f(u * P, (v - 1) * P), d = f((u - 1) * P, (v - 1) * P);
      const val = (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
      out[y * TEX + x] = val;
      if (val < lo) lo = val;
      if (val > hi) hi = val;
    }
  }
  for (let i = 0; i < out.length; i++) out[i] = (out[i]! - lo) / (hi - lo);
  NOISE = out;
  return out;
}
function sampleTex(tex: Float32Array, u: number, v: number): number {
  u = u % TEX; if (u < 0) u += TEX;
  v = v % TEX; if (v < 0) v += TEX;
  const x0 = u | 0, y0 = v | 0, fx = u - x0, fy = v - y0;
  const x1 = x0 + 1 === TEX ? 0 : x0 + 1, y1 = y0 + 1 === TEX ? 0 : y0 + 1;
  const r0 = y0 * TEX, r1 = y1 * TEX;
  return (tex[r0 + x0]! * (1 - fx) + tex[r0 + x1]! * fx) * (1 - fy) + (tex[r1 + x0]! * (1 - fx) + tex[r1 + x1]! * fx) * fy;
}

/** One bubble for this frame: center, radius (px) and its membrane modes. */
type Bubble = {
  x: number;
  y: number;
  R: number;
  /** Membrane modes l=2,3,4: amplitude (fraction of R) and orientation. */
  a2: number; t2: number; a3: number; t3: number; a4: number; t4: number;
  /** Film swirl (radians of differential rotation) and texture offset. */
  swirl: number; ox: number; oy: number;
  /** Overall opacity. */
  alpha: number;
  /** Tear: cos of the hole's angular radius around T (2 = no hole). */
  holeCos: number;
  /** 0..1 thin dark spot growing around T before the pop. */
  thin: number;
  time: number;
};

const T_DIR: [number, number, number] = (() => {
  const v = [0.56, -0.6, 0.57];
  const l = Math.hypot(v[0]!, v[1]!, v[2]!);
  return [v[0]! / l, v[1]! / l, v[2]! / l];
})();

function wobbleAt(b: Bubble, c: number, s: number): number {
  const c2 = c * c - s * s, s2 = 2 * c * s;
  const c3 = c * (4 * c * c - 3), s3 = s * (3 - 4 * s * s);
  const c4 = c2 * c2 - s2 * s2, s4 = 2 * s2 * c2;
  return b.a2 * (c2 * Math.cos(2 * b.t2) + s2 * Math.sin(2 * b.t2)) + b.a3 * (c3 * Math.cos(3 * b.t3) + s3 * Math.sin(3 * b.t3)) + b.a4 * (c4 * Math.cos(4 * b.t4) + s4 * Math.sin(4 * b.t4));
}

/** Premultiplied "over" accumulator for one pixel (r, g, b, a). */
const ACC = new Float64Array(4);
function over(acc: Float64Array, r: number, g: number, b: number, a: number) {
  if (a <= 0) return;
  const ia = 1 - a;
  acc[0] = r * a + acc[0]! * ia; acc[1] = g * a + acc[1]! * ia; acc[2] = b * a + acc[2]! * ia; acc[3] = a + acc[3]! * ia;
}

type Shade = { P: RGB; Q: RGB; M: RGB; L: RGB; ink: RGB; dark: boolean; irid: number };

/**
 * Per-pixel thin-film bubble. Each pixel sees the front and the back film; both reflect
 * with the real interference term sin^2(2 pi n d cos(theta_t) / lambda) at three
 * wavelengths, and the three intensities are re-tinted into the brand (red -> primary,
 * green -> secondary, blue -> their light mix). Film thickness drains downward and swirls.
 * The front reflects a four-pane window; the inside of the back wall shows it inverted.
 */
function shadeBubble(d: Uint8ClampedArray, W: number, H: number, b: Bubble, tex: Float32Array, sh: Shade) {
  const s = SCALE;
  const cx = b.x * s, cy = b.y * s, R = b.R * s;
  const rmax = R * (1 + Math.abs(b.a2) + Math.abs(b.a3) + Math.abs(b.a4)) + 2;
  const x0 = Math.max(0, Math.floor(cx - rmax)), x1 = Math.min(W - 1, Math.ceil(cx + rmax));
  const y0 = Math.max(0, Math.floor(cy - rmax)), y1 = Math.min(H - 1, Math.ceil(cy + rmax));
  const cos2 = Math.cos(2 * b.t2), sin2 = Math.sin(2 * b.t2), cos3 = Math.cos(3 * b.t3), sin3 = Math.sin(3 * b.t3), cos4 = Math.cos(4 * b.t4), sin4 = Math.sin(4 * b.t4);
  const { P, Q, M, L, ink, dark, irid } = sh;
  const [Tx, Ty, Tz] = T_DIR;
  const tScale = TEX * 0.3;
  const oxF = b.ox * TEX, oyF = b.oy * TEX, oxB = oxF + TEX * 0.37, oyB = oyF + TEX * 0.61;
  const fine = b.time * 0.9;
  const film = (dark ? 1.25 : 0.9) * Math.min(1.3, irid) * b.alpha;
  const winA = (dark ? 0.95 : 0.85) * b.alpha;
  const hole = b.holeCos < 1.5;
  const sat = dark ? 1.55 : 1.3;
  for (let j = y0; j <= y1; j++) {
    const dy = j + 0.5 - cy;
    for (let i = x0; i <= x1; i++) {
      const dx = i + 0.5 - cx;
      const r2 = dx * dx + dy * dy;
      if (r2 > rmax * rmax) continue;
      const r = Math.sqrt(r2) + 1e-6;
      const c = dx / r, sn = dy / r;
      const c2 = c * c - sn * sn, s2 = 2 * c * sn;
      const c3 = c * (4 * c * c - 3), s3 = sn * (3 - 4 * sn * sn);
      const c4 = c2 * c2 - s2 * s2, s4 = 2 * s2 * c2;
      const w = b.a2 * (c2 * cos2 + s2 * sin2) + b.a3 * (c3 * cos3 + s3 * sin3) + b.a4 * (c4 * cos4 + s4 * sin4);
      const Rw = R * (1 + w);
      if (r >= Rw) continue;
      const aa = Math.min(1, Rw - r);
      const q = r / Rw;
      const nz = Math.sqrt(1 - q * q);
      const nx = c * q, ny = sn * q;
      const f = 1 - nz;
      const fres = 0.2 + 0.8 * f * f * (1.6 - 0.6 * f);
      const cosT = Math.sqrt(1 - (1 - nz * nz) / 1.769);
      const k = 8.357 * cosT;

      // Swirl: differential rotation, faster toward the middle of the disc.
      const rr = q * q;
      const ang = b.swirl * (1.5 - rr);
      const ca = Math.cos(ang), sa = Math.sin(ang);
      const rx = nx * ca - ny * sa, ry = nx * sa + ny * ca;
      const nF = sampleTex(tex, rx * tScale + oxF, ry * tScale + oyF);
      const nB = sampleTex(tex, -rx * tScale * 0.9 + oxB, ry * tScale * 0.9 + oyB);
      const drain = 400 + 190 * ny + 45 * Math.sin(ny * 9 + fine);
      let dF = drain + 640 * (nF - 0.5);
      const dB = Math.max(40, drain + 640 * (nB - 0.5));
      const dotF = nx * Tx + ny * Ty + nz * Tz;
      if (b.thin > 0) dF *= 1 - b.thin * smooth(0.7, 0.97, dotF);
      if (dF < 25) dF = 25;

      ACC[0] = 0; ACC[1] = 0; ACC[2] = 0; ACC[3] = 0;

      // Back wall (seen through the front), then the front wall.
      const dotB = nx * Tx + ny * Ty - nz * Tz;
      const holeB = hole ? dotB - (b.holeCos - 0.09 * (nB - 0.5)) : -9;
      if (holeB <= 0) {
        const sr = Math.sin(k * dB / 650), sg = Math.sin(k * dB / 540), sb = Math.sin(k * dB / 450);
        const E = (sr * sr + sg * sg + sb * sb) / 3;
        const Ir = sr * sr * sr * sr, Ig = sg * sg * sg * sg, Ib = sb * sb * sb * sb, nrm = 1 / (Ir + Ig + Ib + 0.08);
        const a = Math.min(1, fres * 0.55 * film * Math.min(1, 0.12 + 1.5 * E * E));
        over(ACC, (Ir * P[0] + Ig * Q[0] + Ib * M[0]) * nrm, (Ir * P[1] + Ig * Q[1] + Ib * M[1]) * nrm, (Ir * P[2] + Ig * Q[2] + Ib * M[2]) * nrm, a);
        // Window seen in the concave inside of the back wall: inverted, lower right.
        const wb = nz > 0.7071 ? windowAt(-2 * nz * nx, -2 * nz * ny) * 0.38 * winA : 0;
        if (wb > 0) over(ACC, L[0], L[1], L[2], wb);
        if (hole && holeB > -0.14) { const e = 1 + holeB / 0.14; over(ACC, L[0] * 0.6 + P[0] * 0.4, L[1] * 0.6 + P[1] * 0.4, L[2] * 0.6 + P[2] * 0.4, e * e * 0.7 * b.alpha); }
      }
      const holeF = hole ? dotF - (b.holeCos - 0.09 * (nF - 0.5)) : -9;
      if (holeF <= 0) {
        const sr = Math.sin(k * dF / 650), sg = Math.sin(k * dF / 540), sb = Math.sin(k * dF / 450);
        const E = (sr * sr + sg * sg + sb * sb) / 3;
        const Ir = sr * sr * sr * sr, Ig = sg * sg * sg * sg, Ib = sb * sb * sb * sb, nrm = 1 / (Ir + Ig + Ib + 0.08);
        const a = Math.min(1, fres * film * Math.min(1, 0.12 + 1.5 * E * E));
        over(ACC, (Ir * P[0] + Ig * Q[0] + Ib * M[0]) * nrm, (Ir * P[1] + Ig * Q[1] + Ib * M[1]) * nrm, (Ir * P[2] + Ig * Q[2] + Ib * M[2]) * nrm, a);
        if (!dark) {
          // On paper the silhouette reads by a hairline of refracted ink.
          const edge = smooth(0.9, 1, q) * 0.3 * b.alpha;
          over(ACC, ink[0], ink[1], ink[2], edge);
        }
        const wf = nz > 0.7071 ? windowAt(2 * nz * nx, 2 * nz * ny) * winA : 0;
        if (wf > 0) over(ACC, L[0], L[1], L[2], wf);
        if (hole && holeF > -0.14) { const e = 1 + holeF / 0.14; over(ACC, L[0] * 0.55 + P[0] * 0.45, L[1] * 0.55 + P[1] * 0.45, L[2] * 0.55 + P[2] * 0.45, e * e * 0.95 * b.alpha); }
      }
      let A = ACC[3]!;
      if (A <= 0.002) continue;
      const inv = 1 / A;
      A *= aa;
      const o = (j * W + i) * 4;
      if (d[o + 3]! > A * 255) continue;
      // Push the film away from gray so the brand hues stay clean.
      const r0 = ACC[0]! * inv, g0 = ACC[1]! * inv, b0 = ACC[2]! * inv;
      const Y = 0.3 * r0 + 0.55 * g0 + 0.15 * b0;
      d[o] = Y + (r0 - Y) * sat; d[o + 1] = Y + (g0 - Y) * sat; d[o + 2] = Y + (b0 - Y) * sat; d[o + 3] = A * 255;
    }
  }
}

/** Four-pane window (soft edges, two mullions) in reflection-direction space. */
function windowAt(rx: number, ry: number): number {
  const u = (rx + 0.58) / 0.14, v = (ry + 0.55) / 0.12;
  const ax = Math.abs(u), ay = Math.abs(v);
  if (ax >= 1 || ay >= 1) return 0;
  const inside = Math.min(1, (1 - ax) * 7) * Math.min(1, (1 - ay) * 7);
  const mull = smooth(0.035, 0.085, ax) * smooth(0.035, 0.085, Math.abs(v + 0.06));
  return inside * mull * (0.62 + 0.38 * (1 - (v + 1) / 2));
}

type Particle = { x: number; y: number; z: number; vx: number; vy: number; spawn: number; size: number; tone: number; life: number; mist: boolean; ph: number };

const ballistic = (x0: number, v0: number, g: number, k: number, a: number) => {
  const e = 1 - Math.exp(-k * a);
  return x0 + (g / k) * a + ((v0 - g / k) * e) / k;
};

/**
 * A thin-film soap bubble rises in with the logo inside, wobbling. Its film thins to a dark
 * spot, tears open from that spot and the hole runs around the sphere in a few frames,
 * flinging droplets off the retracting rim; the logo is released and a fine mist hangs.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ logo, caption, primary, secondary, color, background, iridescence, wobble, droplets, companions, fontFamily }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: w, height: h, aspect, portrait } = useLayout();
  const S = Math.min(w, h);
  const transparent = background === "transparent";
  const inkRGB = rgbOf(color);
  const dark = transparent ? lum(inkRGB) > 0.4 : lum(rgbOf(background, [0, 0, 0])) < 0.4;
  const hasCaption = caption.trim().length > 0;

  // ---------- layout ----------
  const R = aspect === "9:16" ? 0.43 * w : aspect === "1:1" ? 0.3 * S : 0.335 * h;
  const cx = w / 2;
  const cy = aspect === "9:16" ? h * (hasCaption ? 0.41 : 0.46) : h * (hasCaption ? (aspect === "1:1" ? 0.43 : 0.44) : 0.5);
  const sats = aspect === "9:16"
    ? [{ dx: 0.56, dy: -1.25, r: 0.18 }, { dx: -0.64, dy: 1.92, r: 0.13 }, { dx: 0.7, dy: 1.86, r: 0.085 }, { dx: -0.74, dy: -1.12, r: 0.08 }]
    : aspect === "1:1"
      ? [{ dx: 1.2, dy: -0.9, r: 0.17 }, { dx: -1.22, dy: 0.62, r: 0.13 }, { dx: 1.26, dy: 0.5, r: 0.08 }, { dx: -1.12, dy: -0.95, r: 0.07 }]
      : [{ dx: 1.62, dy: -0.5, r: 0.2 }, { dx: -1.72, dy: 0.32, r: 0.14 }, { dx: 1.3, dy: 0.7, r: 0.09 }, { dx: -1.28, dy: -0.78, r: 0.075 }];

  // ---------- main bubble path: rises in from below, decelerates, hovers ----------
  const startX = aspect === "9:16" ? -0.16 * w : aspect === "1:1" ? -0.26 * S : -0.3 * w;
  const startY = h - cy + R * 1.2;
  const pathAt = (f: number): [number, number] => {
    const u = clamp01(f / 40);
    const e = 1 - Math.pow(1 - u, 3);
    const over = -0.07 * R * Math.sin(Math.PI * clamp01((f - 26) / 26));
    const sway = 0.14 * R * Math.sin(f * 0.14) * (1 - e);
    const bob = 0.012 * R * Math.sin(f * 0.11) * smooth(30, 46, f);
    return [cx + startX * (1 - e) + sway, cy + startY * (1 - e) + over + bob];
  };
  const [bx, by] = pathAt(frame);
  const [px_, py_] = pathAt(frame - 1);
  const spd = Math.hypot(bx - px_, by - py_) / R; // R per frame
  const time = frame / fps;
  const W = wobble;

  // Pop state.
  const pf = frame - POP;
  const holeAngle = pf < 0 ? -1 : Math.PI * Math.pow(Math.min(1, pf / POP_LEN), 1.5);
  const popped = pf >= POP_LEN;
  const thin = smooth(THIN_FROM, POP, frame) * 0.9;
  const tPop = Math.max(0, (frame - POP) / fps);

  const main: Bubble = {
    x: bx,
    y: by,
    R,
    a2: W * (0.014 + Math.min(0.035, spd * 1.4)) * Math.sin(TAU * 1.25 * time + 0.4) + W * Math.min(0.02, spd * 0.8),
    t2: 0.25 * Math.sin(time * 0.8),
    a3: W * 0.009 * Math.sin(TAU * 1.85 * time + 1.2),
    t3: 1.1 + 0.5 * time,
    a4: W * 0.0055 * Math.sin(TAU * 2.55 * time + 2.1),
    t4: -0.4 * time,
    swirl: 0.35 + time * 0.5 + spd * 4,
    ox: 0.13 + time * 0.035,
    oy: 0.71 - time * 0.02,
    alpha: 1,
    holeCos: pf < 0 ? 2 : Math.cos(holeAngle),
    thin,
    time,
  };

  // Companions: small bubbles that drift in, get shoved by the pop and float on.
  const satBubbles: Bubble[] = companions
    ? sats.map((s, i) => {
        const delay = 4 + i * 5;
        const ein = springSnap(frame, fps, delay, { damping: 14, stiffness: 60, mass: 1 });
        const dist = Math.hypot(s.dx, s.dy);
        const tHit = Math.max(0, tPop - dist * 0.05);
        const shove = frame >= POP ? easeOut(clamp01(tHit / 0.8)) : 0;
        const jig = frame >= POP ? 0.1 * Math.exp(-tHit / 0.35) * Math.sin(TAU * 3.2 * tHit) * (tHit > 0 ? 1 : 0) : 0;
        const fx = 0.06 * R * Math.sin(time * 0.62 + i * 1.7) + (s.dx / dist) * R * 0.13 * shove;
        const fy = 0.05 * R * Math.cos(time * 0.51 + i * 2.3) + (s.dy / dist) * R * 0.13 * shove + R * 0.7 * (1 - ein);
        return {
          x: cx + s.dx * R + fx,
          y: cy + s.dy * R + fy,
          R: R * s.r * (0.6 + 0.4 * ein),
          a2: W * (0.02 * Math.sin(TAU * 1.6 * time + i) + jig),
          t2: i * 0.7,
          a3: W * 0.012 * Math.sin(TAU * 2.2 * time + i * 2),
          t3: i,
          a4: 0,
          t4: 0,
          swirl: 0.6 + time * 0.7 + i,
          ox: 0.31 * (i + 1),
          oy: 0.17 * (i + 2) + time * 0.03,
          alpha: clamp01(ein * 1.4),
          holeCos: 2,
          thin: 0,
          time,
        };
      })
    : [];

  // ---------- particles (unit space: R units around the pop center) ----------
  const parts = useMemo(() => {
    const rand = rng("soap-pop");
    const out: Particle[] = [];
    const nDrops = Math.round(250 * droplets), nMist = Math.round(190 * droplets);
    for (let i = 0; i < nDrops + nMist; i++) {
      const mist = i >= nDrops;
      const z = rand() * 2 - 1, ph = rand() * TAU, rxy = Math.sqrt(1 - z * z);
      const dxs = rxy * Math.cos(ph), dys = rxy * Math.sin(ph);
      const dot = dxs * T_DIR[0] + dys * T_DIR[1] + z * T_DIR[2];
      const angle = Math.acos(Math.max(-1, Math.min(1, dot)));
      const spawn = POP_LEN * Math.pow(angle / Math.PI, 1 / 1.5);
      // Rim runs away from the tear point: tangent (d (d.T) - T), plus a little outward kick.
      let tx = dxs * dot - T_DIR[0], ty = dys * dot - T_DIR[1];
      const tl = Math.hypot(tx, ty, z * dot - T_DIR[2]) || 1;
      tx /= tl; ty /= tl;
      const r1 = rand(), r2 = rand();
      const sp = mist ? 0.18 + 0.32 * r1 : 0.55 + 1.5 * r1 * r1;
      const big = !mist && r2 > 0.95;
      out.push({
        x: dxs,
        y: dys,
        z,
        vx: sp * (0.78 * tx + 0.62 * dxs) + (mist ? 0 : (rand() - 0.5) * 0.4),
        vy: sp * (0.78 * ty + 0.62 * dys) + (mist ? 0 : (rand() - 0.5) * 0.4) - (mist ? 0.05 : 0.25),
        spawn,
        size: mist ? 0.003 + 0.005 * rand() : big ? 0.018 + 0.008 * rand() : 0.004 + 0.011 * Math.pow(rand(), 2.5),
        tone: rand(),
        life: mist ? 999 : 0.8 + 0.9 * rand(),
        mist,
        ph: rand() * TAU,
      });
    }
    return out;
  }, [droplets]);

  // ---------- logo ----------
  const release = frame >= POP ? springSnap(frame, fps, POP + 1, { damping: 9, stiffness: 140, mass: 0.8 }) : 0;
  const logoScale = 0.9 + 0.1 * release;
  // Inside the bubble the logo hangs a little behind the film's motion and shares its squash.
  const lagX = frame < POP ? (bx - px_) * -0.6 : 0;
  const lagY = frame < POP ? (by - py_) * -0.6 : 0;
  const settle = frame >= POP ? Math.exp(-(frame - POP) / 22) : 1;
  const logoX = (frame < POP ? bx : cx) + lagX;
  const logoY = (frame < POP ? by : cy) + lagY + (frame >= POP ? -0.012 * R * Math.sin((frame - POP) * 0.2) * settle : 0);
  const sqX = frame < POP ? 1 + main.a2 * Math.cos(2 * main.t2) * 0.8 : 1;
  const sqY = frame < POP ? 1 - main.a2 * Math.cos(2 * main.t2) * 0.8 : 1;
  const logoBoxW = R * 1.62, logoBoxH = R * 1.18;

  const ref = useRef<HTMLCanvasElement>(null);
  const filmRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<ImageData | null>(null);
  const fw = Math.max(2, Math.round(w * SCALE));
  const fh = Math.max(2, Math.round(h * SCALE));

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    if (!filmRef.current) filmRef.current = document.createElement("canvas");
    const fc = filmRef.current;
    if (fc.width !== fw || fc.height !== fh) { fc.width = fw; fc.height = fh; imgRef.current = null; }
    const fctx = fc.getContext("2d", { willReadFrequently: true })!;
    if (!imgRef.current || imgRef.current.width !== fw || imgRef.current.height !== fh) imgRef.current = fctx.createImageData(fw, fh);
    const img = imgRef.current;
    img.data.fill(0);

    const P = rgbOf(primary), Q = rgbOf(secondary);
    const L: RGB = dark ? mix(inkRGB, [255, 255, 255], 0.35) : [255, 255, 255];
    const M: RGB = dark ? mix(Q, L, 0.5) : mix(P, Q, 0.3);
    const sh: Shade = { P, Q, M, L, ink: inkRGB, dark, irid: iridescence };
    const tex = noiseTex();

    if (!popped) shadeBubble(img.data, fw, fh, main, tex, sh);
    for (const sb of satBubbles) if (sb.alpha > 0.01) shadeBubble(img.data, fw, fh, sb, tex, sh);
    fctx.putImageData(img, 0, 0);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.filter = "none";
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, w, h);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
    ctx.drawImage(fc, 0, 0, w, h);

    // Crisp rims at full resolution (the film is half-res). Missing where the tear has run.
    const rim = (b: Bubble, holeCos: number) => {
      const N = Math.max(48, Math.min(160, Math.round(b.R * 0.4)));
      const lw = Math.max(1, b.R * 0.006);
      const pass = (style: string, width: number) => {
        ctx.strokeStyle = style;
        ctx.lineWidth = width;
        ctx.beginPath();
        let open = false;
        for (let k = 0; k <= N; k++) {
          const th = (k / N) * TAU;
          const c = Math.cos(th), s = Math.sin(th);
          if (holeCos < 1.5 && c * T_DIR[0] + s * T_DIR[1] > holeCos) { open = false; continue; }
          const rr = b.R * (1 + wobbleAt(b, c, s)) - lw * 0.5;
          const x = b.x + c * rr, y = b.y + s * rr;
          if (!open) { ctx.moveTo(x, y); open = true; } else ctx.lineTo(x, y);
        }
        ctx.stroke();
      };
      ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
      ctx.globalAlpha = b.alpha;
      if (dark) {
        pass(css(P, 0.16), lw * 5);
        pass(css(L, 0.5), lw);
      } else {
        pass(css(P, 0.22), lw * 3);
        pass(css(inkRGB, 0.3), lw * 0.8);
      }
      ctx.globalAlpha = 1;
    };
    if (!popped) rim(main, pf < 0 ? 2 : Math.cos(holeAngle));
    for (const sb of satBubbles) if (sb.alpha > 0.01) rim(sb, 2);

    // Tear flash and the pressure ring.
    if (pf >= 0 && pf < 16) {
      const tx = cx + T_DIR[0] * R, ty = cy + T_DIR[1] * R;
      const fl = Math.exp(-pf / 2.2);
      ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
      const g = ctx.createRadialGradient(tx, ty, 0, tx, ty, R * 0.4);
      g.addColorStop(0, css(dark ? L : P, 0.75 * fl));
      g.addColorStop(1, css(dark ? L : P, 0));
      ctx.fillStyle = g;
      ctx.fillRect(tx - R * 0.4, ty - R * 0.4, R * 0.8, R * 0.8);
      const e = easeOut(clamp01(pf / 15));
      ctx.strokeStyle = css(dark ? P : Q, 0.32 * (1 - e));
      ctx.lineWidth = Math.max(1, R * 0.014 * (1 - e));
      ctx.beginPath();
      ctx.arc(cx, cy, R * (1.02 + 0.5 * e), 0, TAU);
      ctx.stroke();
    }

    // Droplets and mist.
    if (pf >= 0) {
      const tones: RGB[] = [P, Q, M];
      const hl = dark ? L : ([255, 255, 255] as RGB);
      for (const p of parts) {
        const age = (pf - p.spawn) / fps;
        if (age < 0) continue;
        let x: number, y: number, vx: number, vy: number, a: number;
        if (p.mist) {
          const k = 3, g = 0.16;
          x = ballistic(p.x, p.vx, 0, k, age) + 0.05 * Math.sin(age * 0.55 + p.ph) * (1 - Math.exp(-age));
          y = ballistic(p.y, p.vy, g, k, age) + 0.035 * Math.cos(age * 0.43 + p.ph * 1.3) * (1 - Math.exp(-age));
          vx = p.vx * Math.exp(-k * age); vy = g / k + (p.vy - g / k) * Math.exp(-k * age);
          a = Math.min(1, age * 10) * (0.5 + 0.5 * Math.exp(-age / 1.2)) * (0.55 + 0.45 * Math.sin(age * 2.6 + p.ph));
        } else {
          const k = 1.2, g = 2.6;
          x = ballistic(p.x, p.vx, 0, k, age);
          y = ballistic(p.y, p.vy, g, k, age);
          vx = p.vx * Math.exp(-k * age); vy = g / k + (p.vy - g / k) * Math.exp(-k * age);
          a = Math.min(1, age * 25) * (1 - smooth(p.life * 0.55, p.life, age));
        }
        if (a <= 0.01) continue;
        const sx = cx + x * R, sy = cy + y * R;
        if (sx < -20 || sx > w + 20 || sy < -20 || sy > h + 20) continue;
        const depth = 0.75 + 0.25 * p.z;
        const rad = Math.max(0.7, p.size * R * depth);
        const col = tones[p.tone < 0.4 ? 0 : p.tone < 0.8 ? 1 : 2]!;
        const sp = Math.hypot(vx, vy) * R; // px per second
        ctx.globalCompositeOperation = "source-over";
        const streak = p.mist ? 0 : sp * 0.012;
        if (streak > rad * 2.2) {
          ctx.strokeStyle = css(col, (dark ? 0.75 : 0.85) * a * depth);
          ctx.lineCap = "round";
          ctx.lineWidth = rad * 1.7;
          ctx.beginPath();
          ctx.moveTo(sx - (vx * R * 0.012), sy - (vy * R * 0.012));
          ctx.lineTo(sx, sy);
          ctx.stroke();
        } else {
          ctx.fillStyle = css(col, (p.mist ? 0.7 : dark ? 0.8 : 0.9) * a * depth);
          ctx.beginPath();
          ctx.arc(sx, sy, rad, 0, TAU);
          ctx.fill();
          if (!dark && !p.mist && rad > 2) {
            ctx.strokeStyle = css(inkRGB, 0.18 * a);
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        if (rad > 1.4) {
          // Each drop is a tiny lens: one hot glint.
          ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
          ctx.fillStyle = css(hl, 0.9 * a * depth);
          ctx.beginPath();
          ctx.arc(sx - rad * 0.32, sy - rad * 0.34, Math.max(0.5, rad * 0.36), 0, TAU);
          ctx.fill();
        }
      }
      ctx.globalCompositeOperation = "source-over";
    }
  }, [frame, fps, w, h, fw, fh, cx, cy, R, dark, primary, secondary, iridescence, popped, pf, holeAngle, parts, inkRGB, main, satBubbles]);

  // ---------- DOM ----------
  const src = logo || SAMPLE_LOGO;
  const glowFlash = frame >= POP ? Math.exp(-(frame - POP) / 8) : 0;
  const glow = dark
    ? `drop-shadow(0 0 ${Math.round(R * (0.05 + 0.08 * glowFlash))}px ${withAlpha(primary, 0.22 + 0.4 * glowFlash)})`
    : `drop-shadow(0 ${Math.round(R * 0.02)}px ${Math.round(R * 0.05)}px ${withAlpha(color, 0.14)})`;
  const logoOpacity = frame < POP ? 0.94 : 1;

  const capW = w * (portrait ? 0.86 : aspect === "1:1" ? 0.84 : 0.7);
  const capSize = hasCaption
    ? Math.max(
        h * (portrait ? 0.031 : 0.02),
        fitFontSize({ chars: caption.length, boxW: capW, boxH: h * (portrait ? 0.1 : aspect === "1:1" ? 0.1 : 0.06), lines: aspect === "16:9" ? 1 : 2, charEm: 0.54, lineHeight: 1.25, max: aspect === "16:9" ? h * 0.044 : aspect === "1:1" ? h * 0.044 : h * 0.036 }),
      )
    : 0;
  const capIn = easeOut(ramp(frame, [14, 34], [0, 1]));
  const capTop = cy + R * 1.06 + h * (portrait ? 0.035 : 0.04);

  const solid = withAlpha(color, 1);
  const mask = transparent ? `radial-gradient(ellipse 68% 68% at 50% 50%, ${solid} 56%, transparent 100%)` : undefined;
  const aura = transparent
    ? undefined
    : `radial-gradient(ellipse ${Math.round(R * 2.1)}px ${Math.round(R * 1.7)}px at ${Math.round(cx - R * 0.35)}px ${Math.round(cy + R * 0.45)}px, ${withAlpha(primary, dark ? 0.16 : 0.12)} 0%, ${withAlpha(primary, 0)} 100%), radial-gradient(ellipse ${Math.round(R * 2)}px ${Math.round(R * 1.6)}px at ${Math.round(cx + R * 0.5)}px ${Math.round(cy - R * 0.5)}px, ${withAlpha(secondary, dark ? 0.13 : 0.12)} 0%, ${withAlpha(secondary, 0)} 100%)`;

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      {aura ? <AbsoluteFill style={{ background: aura }} /> : null}
      <Img
        data-21st-slot="logo"
        src={src}
        style={{
          position: "absolute",
          left: logoX - logoBoxW / 2,
          top: logoY - logoBoxH / 2,
          width: logoBoxW,
          height: logoBoxH,
          objectFit: "contain",
          opacity: logoOpacity,
          transform: `scale(${(logoScale * sqX).toFixed(4)}, ${(logoScale * sqY).toFixed(4)})`,
          filter: glow,
        }}
      />
      <AbsoluteFill style={{ maskImage: mask, WebkitMaskImage: mask, pointerEvents: "none" }}>
        <canvas ref={ref} width={w} height={h} style={{ width: "100%", height: "100%", display: "block" }} />
      </AbsoluteFill>
      {hasCaption ? (
        <div
          data-21st-slot="caption"
          style={{
            position: "absolute",
            left: (w - capW) / 2,
            width: capW,
            top: capTop,
            textAlign: "center",
            fontFamily: brandFontStack(fontFamily),
            fontWeight: 500,
            fontSize: capSize,
            lineHeight: 1.25,
            letterSpacing: "0.005em",
            color,
            opacity: capIn,
            transform: capIn < 1 ? `translateY(${((1 - capIn) * S * 0.02).toFixed(2)}px)` : undefined,
            whiteSpace: "normal",
            overflowWrap: "anywhere",
          }}
        >
          {caption}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
