// Built with Remotion - https://remotion.pro/license
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, continueRender, delayRender, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeOut, fitFontSize, ramp, useLayout, waitForBrandFonts, withAlpha } from "../../../kit/index";
import type { Aspect } from "../../../kit/spec";
import { hashString, rng, simplex3 } from "../_lib/noise";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./murmuration-logo.schema";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];

const TAU = Math.PI * 2;
/** Frame the flock starts pouring into the mark, and how the pour is staggered. */
const T_CONVERGE = 84;
const STAGGER = 22;
const LAND = 26;
/** Frames simulated before frame 0 so the flock is already in its stride on the first frame. */
const PREROLL = 40;
const STRAGGLERS = 0.06;
const WARP_G = 12;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='5' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

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
const css = (c: RGB, a = 1) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${a.toFixed(3)})`;

// ---------------------------------------------------------------- math

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (x: number) => {
  const t = clamp01(x);
  return t * t * (3 - 2 * t);
};
const smoother = (x: number) => {
  const t = clamp01(x);
  return t * t * t * (t * (t * 6 - 15) + 10);
};
/** 0 -> 1 -> 0 hump between a, peak, b. */
const bump = (t: number, a: number, p: number, b: number) => (t < p ? smooth((t - a) / (p - a)) : 1 - smooth((t - p) / (b - p)));

type Key = [number, number, number, number];
/** Catmull-Rom through timed keys [t, x, y, z]. */
function spline(keys: Key[], t: number): [number, number, number] {
  if (t <= keys[0]![0]) return [keys[0]![1], keys[0]![2], keys[0]![3]];
  const last = keys[keys.length - 1]!;
  if (t >= last[0]) return [last[1], last[2], last[3]];
  let i = 0;
  while (i < keys.length - 2 && t > keys[i + 1]![0]) i++;
  const k0 = keys[Math.max(0, i - 1)]!, k1 = keys[i]!, k2 = keys[i + 1]!, k3 = keys[Math.min(keys.length - 1, i + 2)]!;
  const u = (t - k1[0]) / (k2[0] - k1[0]);
  const u2 = u * u, u3 = u2 * u;
  const out: [number, number, number] = [0, 0, 0];
  for (let c = 1; c <= 3; c++) {
    const p0 = k0[c]!, p1 = k1[c]!, p2 = k2[c]!, p3 = k3[c]!;
    out[c - 1] = 0.5 * (2 * p1 + (-p0 + p2) * u + (2 * p0 - 5 * p1 + 4 * p2 - p3) * u2 + (-p0 + 3 * p1 - 3 * p2 + p3) * u3);
  }
  return out;
}

// ---------------------------------------------------------------- layout

type Box = { cx: number; cy: number; bw: number; bh: number };

function logoBox(aspect: Aspect, w: number, h: number, caption: boolean): Box {
  if (aspect === "9:16") return { cx: w / 2, cy: h * (caption ? 0.41 : 0.47), bw: w * 0.88, bh: h * 0.42 };
  if (aspect === "1:1") return { cx: w / 2, cy: h * (caption ? 0.45 : 0.5), bw: w * 0.64, bh: h * 0.44 };
  return { cx: w / 2, cy: h * (caption ? 0.44 : 0.5), bw: w * 0.46, bh: h * 0.48 };
}

/** The flight plan per aspect: path keys in (w, h, S) units from the frame center, sheet size, roll. */
function flight(aspect: Aspect) {
  if (aspect === "9:16")
    return {
      keys: [[-40, 0.3, 0.42, 0.3], [0, 0.12, 0.24, 0.2], [30, -0.12, 0.06, 0.12], [58, 0.08, -0.1, 0.05], [84, 0.02, -0.03, 0], [112, 0, 0, 0]] as Key[],
      len: 0.34, // of h
      wide: 0.5,
      roll: -1.25,
    };
  if (aspect === "1:1")
    return {
      keys: [[-40, -0.55, 0.3, 0.3], [0, -0.24, 0.14, 0.2], [30, 0.0, -0.12, 0.12], [58, 0.16, -0.02, 0.05], [84, 0.04, 0.04, 0], [112, 0, 0, 0]] as Key[],
      len: 0.42, // of w
      wide: 0.4,
      roll: -0.55,
    };
  return {
    keys: [[-40, -0.55, 0.0, 0.3], [0, -0.24, -0.1, 0.2], [30, 0.02, -0.14, 0.12], [58, 0.17, -0.02, 0.05], [84, 0.04, 0.04, 0], [112, 0, 0, 0]] as Key[],
    len: 0.38, // of w
    wide: 0.36,
    roll: -0.12,
  };
}

// ---------------------------------------------------------------- logo mask

type Mask = {
  key: string;
  /** Target points in frame px (x, y pairs). */
  pts: Float32Array;
  /** Bounding box of the formed mark in frame px. */
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  /** Alpha silhouette of the mark at mask resolution, drawn into (bx, by, bw, bh). */
  sil: HTMLCanvasElement;
  bx: number;
  by: number;
  bw: number;
  bh: number;
};

function buildMask(img: HTMLImageElement | null, box: Box, targets: number, key: string): Mask {
  const ms = Math.min(1, 560 / Math.max(box.bw, box.bh));
  const mw = Math.max(8, Math.round(box.bw * ms));
  const mh = Math.max(8, Math.round(box.bh * ms));
  const c = document.createElement("canvas");
  c.width = mw;
  c.height = mh;
  const ctx = c.getContext("2d", { willReadFrequently: true })!;
  let inside: Uint8Array | null = null;

  if (img) {
    try {
      // Rasterize the whole image once, then trim its transparent padding so the
      // mark itself (not its artboard) fills the landing box.
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
          if (td[(y * tc.width + x) * 4 + 3]! > 16) { if (x < tx0) tx0 = x; if (x > tx1) tx1 = x; if (y < ty0) ty0 = y; if (y > ty1) ty1 = y; }
      if (tx1 < 0) { tx0 = 0; ty0 = 0; tx1 = tc.width - 1; ty1 = tc.height - 1; }
      const nw = tx1 - tx0 + 1, nh = ty1 - ty0 + 1;
      const k = Math.min(mw / nw, mh / nh);
      const dw = nw * k, dh = nh * k;
      ctx.clearRect(0, 0, mw, mh);
      ctx.drawImage(tc, tx0, ty0, nw, nh, (mw - dw) / 2, (mh - dh) / 2, dw, dh);
      const d = ctx.getImageData(0, 0, mw, mh).data;
      // Does the image carry its own transparency? Then the alpha is the mark.
      // Count clear pixels only inside the drawn rect (the letterbox around it is always clear).
      const rx0 = Math.ceil((mw - dw) / 2) + 1, ry0 = Math.ceil((mh - dh) / 2) + 1;
      const rx1 = Math.floor((mw + dw) / 2) - 1, ry1 = Math.floor((mh + dh) / 2) - 1;
      let clear = 0, total = 0;
      for (let y = ry0; y < ry1; y++)
        for (let x = rx0; x < rx1; x++) { total++; if (d[(y * mw + x) * 4 + 3]! < 250) clear++; }
      const m = new Uint8Array(mw * mh);
      let area = 0;
      if (clear > total * 0.03) {
        for (let i = 0; i < mw * mh; i++) if (d[i * 4 + 3]! > 110) { m[i] = 1; area++; }
      } else {
        // Opaque image: the mark is whatever differs from the corner (paper) color.
        const x0 = Math.round((mw - dw) / 2) + 1, y0 = Math.round((mh - dh) / 2) + 1;
        const x1 = Math.round((mw + dw) / 2) - 2, y1 = Math.round((mh + dh) / 2) - 2;
        const corners = [[x0, y0], [x1, y0], [x0, y1], [x1, y1]];
        const pc: [number, number, number] = [0, 0, 0];
        for (const [x, y] of corners) {
          const o = (y! * mw + x!) * 4;
          pc[0] += d[o]! / 4; pc[1] += d[o + 1]! / 4; pc[2] += d[o + 2]! / 4;
        }
        for (let y = 0; y < mh; y++)
          for (let x = 0; x < mw; x++) {
            const i = y * mw + x, o = i * 4;
            if (d[o + 3]! < 110) continue;
            if (Math.abs(d[o]! - pc[0]!) + Math.abs(d[o + 1]! - pc[1]!) + Math.abs(d[o + 2]! - pc[2]!) > 90) { m[i] = 1; area++; }
          }
      }
      // Multi-part marks (two tones, overlapping shapes) would fill as one blob. Where two
      // parts of the mark meet at a clear tone step, keep a thin gap of sky so the flock
      // draws each part. Busy photographic images (too many steps) keep their plain fill.
      if (area > 0) {
        const L = (i: number) => 0.299 * d[i * 4]! + 0.587 * d[i * 4 + 1]! + 0.114 * d[i * 4 + 2]!;
        const edges: number[] = [];
        for (let y = 0; y < mh - 2; y++)
          for (let x = 0; x < mw - 2; x++) {
            const i = y * mw + x;
            if (!m[i]) continue;
            const l0 = L(i);
            if ((m[i + 2] && Math.abs(L(i + 2) - l0) > 36) || (m[i + 2 * mw] && Math.abs(L(i + 2 * mw) - l0) > 36)) edges.push(x + 1, y + 1);
          }
        if (edges.length / 2 < area * 0.05) {
          const gr = Math.max(1.5, Math.min(mw, mh) * 0.02);
          const gi = Math.ceil(gr);
          const carved = m.slice();
          let left = area;
          for (let e = 0; e < edges.length; e += 2) {
            const ex = edges[e]!, ey = edges[e + 1]!;
            for (let dy = -gi; dy <= gi; dy++)
              for (let dx = -gi; dx <= gi; dx++) {
                if (dx * dx + dy * dy > gr * gr) continue;
                const x = ex + dx, y = ey + dy;
                if (x < 0 || y < 0 || x >= mw || y >= mh) continue;
                const j = y * mw + x;
                if (carved[j]) { carved[j] = 0; left--; }
              }
          }
          if (left > area * 0.7) { m.set(carved); area = left; }
        }
      }
      if (area > mw * mh * 0.004) inside = m;
    } catch {
      inside = null; // tainted canvas or decode failure: abstract mark
    }
  }

  if (!inside) {
    // Abstract fallback: a ring around a disc, a mark any flock can hold.
    const m = new Uint8Array(mw * mh);
    const R = Math.min(mw, mh) * 0.47;
    const cx = mw / 2, cy = mh / 2;
    for (let y = 0; y < mh; y++)
      for (let x = 0; x < mw; x++) {
        const r = Math.hypot(x + 0.5 - cx, y + 0.5 - cy);
        if ((r > R * 0.8 && r < R) || r < R * 0.46) m[y * mw + x] = 1;
      }
    inside = m;
  }

  // Silhouette canvas (white with mask alpha) for the glow under the formed mark.
  const sil = document.createElement("canvas");
  sil.width = mw;
  sil.height = mh;
  const sctx = sil.getContext("2d", { willReadFrequently: true })!;
  const id = sctx.createImageData(mw, mh);
  let area = 0, mx0 = mw, my0 = mh, mx1 = 0, my1 = 0;
  for (let y = 0; y < mh; y++)
    for (let x = 0; x < mw; x++) {
      const i = y * mw + x;
      if (!inside[i]) continue;
      area++;
      if (x < mx0) mx0 = x;
      if (x > mx1) mx1 = x;
      if (y < my0) my0 = y;
      if (y > my1) my1 = y;
      id.data[i * 4] = 255; id.data[i * 4 + 1] = 255; id.data[i * 4 + 2] = 255; id.data[i * 4 + 3] = 255;
    }
  sctx.putImageData(id, 0, 0);

  // Jittered grid over the mark, slightly denser than needed, then a seeded pick.
  const r = rng(`murm-mask-${key}`);
  const s = Math.max(0.6, Math.sqrt(area / targets) * 0.9);
  const cand: number[] = [];
  for (let gy = my0; gy <= my1 + 1; gy += s)
    for (let gx = mx0; gx <= mx1 + 1; gx += s) {
      const x = gx + (r() - 0.5) * s * 0.8, y = gy + (r() - 0.5) * s * 0.8;
      const xi = Math.floor(x), yi = Math.floor(y);
      if (xi < 0 || yi < 0 || xi >= mw || yi >= mh || !inside[yi * mw + xi]) continue;
      cand.push(x, y);
    }
  const n = cand.length / 2;
  const order = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [order[i], order[j]] = [order[j]!, order[i]!]; }
  const pts = new Float32Array(targets * 2);
  const bx = box.cx - box.bw / 2, by = box.cy - box.bh / 2;
  // Center the mark's actual extent on the box center.
  const ox = box.cx - (bx + ((mx0 + mx1 + 1) / 2) / ms), oy = box.cy - (by + ((my0 + my1 + 1) / 2) / ms);
  for (let i = 0; i < targets; i++) {
    const o = order[i % Math.max(1, n)] ?? 0;
    const dup = i >= n ? s * 0.45 : 0;
    pts[i * 2] = bx + ox + ((cand[o * 2] ?? mw / 2) + (r() - 0.5) * dup) / ms;
    pts[i * 2 + 1] = by + oy + ((cand[o * 2 + 1] ?? mh / 2) + (r() - 0.5) * dup) / ms;
  }
  return {
    key, pts, sil,
    x0: bx + ox + mx0 / ms, y0: by + oy + my0 / ms, x1: bx + ox + (mx1 + 1) / ms, y1: by + oy + (my1 + 1) / ms,
    bx: bx + ox, by: by + oy, bw: mw / ms, bh: mh / ms,
  };
}

// ---------------------------------------------------------------- simulation

type Sim = {
  n: number;
  /** Per frame: x, y, z, vx, vy for every bird (world px, origin at the frame center). */
  frames: Float32Array[];
  step: () => void;
  /** Per-bird constants used by the renderer. */
  q: Float32Array;
  size: Float32Array;
  flapPh: Float32Array;
  flapRate: Float32Array;
  jit: Float32Array;
};

const SIMS = new Map<string, Sim>();

function createSim(key: string, aspect: Aspect, w: number, h: number, n: number, mask: Mask): Sim {
  const S = Math.min(w, h);
  const F = flight(aspect);
  const L = F.len * (aspect === "9:16" ? h : w);
  const r = rng(`murm-birds-${n}`);
  const ns = Math.round(n * STRAGGLERS);
  const u = new Float32Array(n), v = new Float32Array(n), d = new Float32Array(n);
  const kk = new Float32Array(n), q = new Float32Array(n), size = new Float32Array(n);
  const flapPh = new Float32Array(n), flapRate = new Float32Array(n), jit = new Float32Array(n);
  const wf = new Float32Array(n * 6);
  const strag = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    const rr = Math.pow(r(), 0.72), th = r() * TAU;
    u[i] = rr * Math.cos(th);
    v[i] = rr * Math.sin(th);
    const g1 = Math.max(1e-6, r()), g2 = r();
    d[i] = Math.sqrt(-2 * Math.log(g1)) * Math.cos(TAU * g2);
    kk[i] = 0.8 + 0.4 * r();
    q[i] = clamp01((u[i]! + 1) / 2 + (r() - 0.5) * 0.35);
    size[i] = 0.75 + 0.5 * r() * r() + 0.15 * r();
    flapPh[i] = r() * TAU;
    flapRate[i] = 0.55 + 0.35 * r();
    jit[i] = (r() - 0.5) * 0.5;
    for (let c = 0; c < 6; c++) wf[i * 6 + c] = c % 2 === 0 ? 0.03 + 0.05 * r() : r() * TAU;
  }
  // Stragglers: a seeded handful that never land and keep circling the mark.
  for (let c = 0; c < ns; ) {
    const i = Math.floor(r() * n);
    if (!strag[i]) { strag[i] = 1; c++; }
  }

  const noise = simplex3("murm-warp");
  const warp = new Float32Array(WARP_G * WARP_G * 3);
  const sheet = new Float64Array(n * 3);

  /** The choreographed 3D sheet every bird is steering toward at time t. */
  const sheetAt = (t: number, out: Float64Array) => {
    const c = spline(F.keys, t);
    const Cx = c[0] * w, Cy = c[1] * h, Cz = c[2] * S;
    const pulse = 1 - 0.32 * bump(t, 48, 64, 78) - 0.16 * smooth((t - 74) / 22);
    const ex = L * pulse * (1 + 0.1 * Math.sin(t * 0.045));
    const fold = 0.3 + 0.7 * bump(t, 40, 64, 92);
    const yaw = 0.2 + 0.95 * Math.sin(t * 0.03 + 0.5);
    const pitch = 0.3 + 0.6 * Math.sin(t * 0.026 + 2.2);
    const roll = F.roll + 0.35 * Math.sin(t * 0.021 + 1.0);
    const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch), cr = Math.cos(roll), sr = Math.sin(roll);
    for (let gy = 0; gy < WARP_G; gy++)
      for (let gx = 0; gx < WARP_G; gx++) {
        const o = (gy * WARP_G + gx) * 3;
        const a = (gx / (WARP_G - 1)) * 2.2, b = (gy / (WARP_G - 1)) * 2.2, tt = t * 0.016;
        warp[o] = noise(a, b, tt);
        warp[o + 1] = noise(a + 7.1, b - 3.3, tt + 4);
        warp[o + 2] = noise(a - 5.7, b + 9.2, tt + 8);
      }
    const ph = t * 0.05;
    for (let i = 0; i < n; i++) {
      const uu = u[i]!, vv = v[i]!;
      // Bilinear sample of the coarse warp field.
      const fx = ((uu + 1) / 2) * (WARP_G - 1), fy = ((vv + 1) / 2) * (WARP_G - 1);
      const x0 = Math.min(WARP_G - 2, Math.floor(fx)), y0 = Math.min(WARP_G - 2, Math.floor(fy));
      const ax = fx - x0, ay = fy - y0;
      const o00 = (y0 * WARP_G + x0) * 3, o10 = o00 + 3, o01 = o00 + WARP_G * 3, o11 = o01 + 3;
      const wx = (warp[o00]! * (1 - ax) + warp[o10]! * ax) * (1 - ay) + (warp[o01]! * (1 - ax) + warp[o11]! * ax) * ay;
      const wy = (warp[o00 + 1]! * (1 - ax) + warp[o10 + 1]! * ax) * (1 - ay) + (warp[o01 + 1]! * (1 - ax) + warp[o11 + 1]! * ax) * ay;
      const wz = (warp[o00 + 2]! * (1 - ax) + warp[o10 + 2]! * ax) * (1 - ay) + (warp[o01 + 2]! * (1 - ax) + warp[o11 + 2]! * ax) * ay;
      const taper = 1 - 0.6 * uu * uu;
      let lx = uu * ex + wx * ex * 0.16;
      let ly = vv * ex * F.wide * taper + wy * ex * 0.14;
      let lz = d[i]! * ex * 0.03 * taper + fold * ex * 0.5 * Math.sin(Math.PI * uu * 1.6 + ph) + 0.25 * ex * uu * vv + wz * ex * 0.3;
      // Each bird's own small wander.
      const o6 = i * 6;
      lx += S * 0.006 * Math.sin(t * wf[o6]! + wf[o6 + 1]!);
      ly += S * 0.006 * Math.sin(t * wf[o6 + 2]! + wf[o6 + 3]!);
      lz += S * 0.006 * Math.sin(t * wf[o6 + 4]! + wf[o6 + 5]!);
      // yaw (around Y), pitch (around X), roll (in the picture plane)
      const x1 = lx * cy + lz * sy, z1 = -lx * sy + lz * cy;
      const y2 = ly * cp - z1 * sp, z2 = ly * sp + z1 * cp;
      out[i * 3] = Cx + x1 * cr - y2 * sr;
      out[i * 3 + 1] = Cy + x1 * sr + y2 * cr;
      out[i * 3 + 2] = Cz + z2;
    }
  };

  // Assignment: match birds to targets by strips across, then order along, the flock's heading.
  const ox = w / 2, oy = h / 2;
  const tx = new Float32Array(n), ty = new Float32Array(n), delay = new Float32Array(n);
  {
    sheetAt(T_CONVERGE, sheet);
    const a0 = spline(F.keys, T_CONVERGE - 6), a1 = spline(F.keys, T_CONVERGE + 6);
    let hx = (a1[0] - a0[0]) * w, hy = (a1[1] - a0[1]) * h;
    const hl = Math.hypot(hx, hy);
    if (hl < 1e-3) { hx = 1; hy = 0; } else { hx /= hl; hy /= hl; }
    const px = -hy, py = hx;
    const flock: number[] = [];
    for (let i = 0; i < n; i++) if (!strag[i]) flock.push(i);
    const m = flock.length;
    const tgt = Array.from({ length: m }, (_, i) => i);
    const bAlong = (i: number) => sheet[i * 3]! * hx + sheet[i * 3 + 1]! * hy;
    const bAcross = (i: number) => sheet[i * 3]! * px + sheet[i * 3 + 1]! * py;
    const tAlong = (j: number) => (mask.pts[j * 2]! - ox) * hx + (mask.pts[j * 2 + 1]! - oy) * hy;
    const tAcross = (j: number) => (mask.pts[j * 2]! - ox) * px + (mask.pts[j * 2 + 1]! - oy) * py;
    flock.sort((a, b) => bAcross(a) - bAcross(b));
    tgt.sort((a, b) => tAcross(a) - tAcross(b));
    const strips = Math.max(1, Math.round(Math.sqrt(m) * 0.5));
    for (let s = 0; s < strips; s++) {
      const lo = Math.floor((s * m) / strips), hi = Math.floor(((s + 1) * m) / strips);
      const bs = flock.slice(lo, hi).sort((a, b) => bAlong(a) - bAlong(b));
      const ts = tgt.slice(lo, hi).sort((a, b) => tAlong(a) - tAlong(b));
      for (let k = 0; k < bs.length; k++) {
        const i = bs[k]!, j = ts[k]!;
        tx[i] = mask.pts[j * 2]! - ox;
        ty[i] = mask.pts[j * 2 + 1]! - oy;
      }
    }
    // The head of the flock lands first; the wave of landing runs back down its body.
    const byAlong = flock.slice().sort((a, b) => bAlong(b) - bAlong(a));
    for (let k = 0; k < m; k++) delay[byAlong[k]!] = (k / Math.max(1, m - 1)) * STAGGER + (r() - 0.5) * 4;
  }

  const mcx = (mask.x0 + mask.x1) / 2 - ox, mcy = (mask.y0 + mask.y1) / 2 - oy;
  const mR = Math.max(mask.x1 - mask.x0, (mask.y1 - mask.y0) * 1.2) * 0.5;
  const ringR = Math.min(Math.max(mR * 1.3, S * 0.22), w * 0.44);

  const px = new Float64Array(n), py = new Float64Array(n), pz = new Float64Array(n);
  const vx = new Float64Array(n), vy = new Float64Array(n), vz = new Float64Array(n);
  const prev = new Float64Array(n * 3);
  let t = -PREROLL;
  sheetAt(t - 1, prev);
  sheetAt(t, sheet);
  for (let i = 0; i < n; i++) {
    px[i] = sheet[i * 3]!; py[i] = sheet[i * 3 + 1]!; pz[i] = sheet[i * 3 + 2]!;
    vx[i] = sheet[i * 3]! - prev[i * 3]!; vy[i] = sheet[i * 3 + 1]! - prev[i * 3 + 1]!; vz[i] = sheet[i * 3 + 2]! - prev[i * 3 + 2]!;
  }
  const vmax = S * 0.05;
  const frames: Float32Array[] = [];

  const advance = () => {
    // Desired positions for frame t+1.
    const tn = t + 1;
    sheetAt(tn, sheet);
    const breath = bump(tn, 150, 172, 200);
    const holdOn = smooth((tn - 112) / 30);
    for (let i = 0; i < n; i++) {
      let dx = sheet[i * 3]!, dy = sheet[i * 3 + 1]!, dz = sheet[i * 3 + 2]!;
      let zeta = 0.62;
      if (strag[i]) {
        // Loose mini-flocks orbiting behind the mark.
        const s = smoother((tn - T_CONVERGE - (i % 7) * 3) / 40);
        if (s > 0) {
          const g = i % 3;
          const ang = g * 2.1 + tn * (g === 1 ? -0.017 : 0.021) + v[i]! * 0.35;
          const rad = ringR * (1.0 + 0.12 * g) + u[i]! * S * 0.05;
          const ex = mcx + Math.cos(ang) * rad;
          // Portrait skies are tall: the loose flocks loop above and below the mark.
          const ey = mcy + Math.sin(ang) * rad * (aspect === "9:16" ? 0.95 : 0.42) - S * 0.04 + d[i]! * S * 0.01;
          const ez = S * (0.32 + 0.1 * g) + Math.sin(ang) * S * 0.18;
          dx += (ex - dx) * s; dy += (ey - dy) * s; dz += (ez - dz) * s;
        }
      } else {
        const s = smoother((tn - T_CONVERGE - delay[i]!) / LAND);
        if (s > 0) {
          let gx = tx[i]!, gy = ty[i]!, gz = 0;
          if (holdOn > 0) {
            // The held mark breathes: a slow ripple in depth and a soft outward swell.
            const wave = Math.sin((gx * 0.8 + gy * 0.6) / (S * 0.07) - tn * 0.11);
            gz += holdOn * S * (0.012 * wave + 0.05 * breath * (0.6 + 0.4 * Math.sin(u[i]! * 9 + v[i]! * 7)));
            gx += (gx - mcx) * 0.035 * breath;
            gy += (gy - mcy) * 0.035 * breath;
          }
          const ddx = gx - dx, ddy = gy - dy;
          const swirl = 0.38 * Math.sin(Math.PI * s);
          dx += ddx * s - ddy * swirl;
          dy += ddy * s + ddx * swirl;
          dz += (gz - dz) * s;
          zeta = 0.62 + 0.4 * smooth((tn - T_CONVERGE - delay[i]! - LAND + 4) / 16);
        }
      }
      const k = 0.05 * kk[i]!;
      const c = 2 * zeta * Math.sqrt(k);
      for (let sub = 0; sub < 2; sub++) {
        const h2 = 0.5;
        vx[i] = vx[i]! + (k * (dx - px[i]!) - c * vx[i]!) * h2;
        vy[i] = vy[i]! + (k * (dy - py[i]!) - c * vy[i]!) * h2;
        vz[i] = vz[i]! + (k * (dz - pz[i]!) - c * vz[i]!) * h2;
        const sp = Math.hypot(vx[i]!, vy[i]!, vz[i]!);
        if (sp > vmax) { const f = vmax / sp; vx[i] = vx[i]! * f; vy[i] = vy[i]! * f; vz[i] = vz[i]! * f; }
        px[i] = px[i]! + vx[i]! * h2;
        py[i] = py[i]! + vy[i]! * h2;
        pz[i] = pz[i]! + vz[i]! * h2;
      }
    }
    t = tn;
    if (t >= 0) {
      const out = new Float32Array(n * 5);
      for (let i = 0; i < n; i++) {
        out[i * 5] = px[i]!; out[i * 5 + 1] = py[i]!; out[i * 5 + 2] = pz[i]!; out[i * 5 + 3] = vx[i]!; out[i * 5 + 4] = vy[i]!;
      }
      frames.push(out);
    }
  };
  // Advance from the pre-roll to frame 0.
  while (t < -1) advance();
  return { n, frames, step: advance, q, size, flapPh, flapRate, jit };
}

function getSim(key: string, aspect: Aspect, w: number, h: number, n: number, mask: Mask, upTo: number): Sim {
  let sim = SIMS.get(key);
  if (!sim) {
    if (SIMS.size > 3) SIMS.delete(SIMS.keys().next().value!);
    sim = createSim(key, aspect, w, h, n, mask);
    SIMS.set(key, sim);
  }
  while (sim.frames.length <= upTo) sim.step();
  return sim;
}

function loadImage(src: string, cors: boolean): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    if (cors) img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("logo failed"));
    img.src = src;
  });
}

// ---------------------------------------------------------------- component

/**
 * A starling murmuration: thousands of birds ride a folding 3D sheet across the sky
 * (density waves appear wherever the sheet turns edge-on), bunch and pulse, then each
 * bird steers onto its own point of the logo with inertia, so the flock pours in from
 * its head, spirals, overshoots and settles. The held mark keeps breathing.
 */
export const Component: React.FC<Props> = ({ logo, caption, primary, secondary, color, background, density, grain, fontFamily }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: w, height: h, aspect, portrait } = useLayout();
  const S = Math.min(w, h);
  const transparent = background === "transparent";
  const ink = rgbOf(color);
  const dark = transparent ? lum(ink) > 0.4 : lum(rgbOf(background, [0, 0, 0])) < 0.4;
  const hasCaption = caption.trim().length > 0;
  const font = brandFontStack(fontFamily);

  const [asset, setAsset] = useState<{ img: HTMLImageElement | null } | null>(null);
  const [handle] = useState(() => delayRender("murmuration-logo logo and fonts", { timeoutInMilliseconds: 60000 }));
  useEffect(() => {
    let alive = true;
    (async () => {
      await waitForBrandFonts();
      let img: HTMLImageElement | null = null;
      // Empty slot: the shared neutral sample mark, so the poster reads as a logo reveal.
      const src = logo.trim() || SAMPLE_LOGO;
      {
        try { img = await loadImage(src, true); } catch { img = null; }
      }
      if (alive) setAsset({ img });
    })()
      .catch(() => { if (alive) setAsset({ img: null }); })
      .finally(() => continueRender(handle));
    return () => { alive = false; };
  }, [logo, handle]);

  const n = Math.round((aspect === "16:9" ? 4400 : aspect === "9:16" ? 4000 : 3600) * density);
  const box = logoBox(aspect, w, h, hasCaption);
  const mask = useMemo(() => {
    if (!asset) return null;
    const key = `${hashString(logo)}-${aspect}-${w}x${h}-${hasCaption ? 1 : 0}-${n}`;
    return buildMask(asset.img, box, n - Math.round(n * STRAGGLERS), key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asset, logo, aspect, w, h, hasCaption, n]);

  const ref = useRef<HTMLCanvasElement>(null);
  const layerRef = useRef<HTMLCanvasElement | null>(null);
  const bloomRef = useRef<HTMLCanvasElement | null>(null);
  const glowRef = useRef<{ key: string; c: HTMLCanvasElement } | null>(null);

  const formed = smooth((frame - 108) / 26);
  const swell = bump(frame, 112, 132, 170);

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx || !mask) return;
    const sim = getSim(mask.key, aspect, w, h, n, mask, frame);
    const st = sim.frames[Math.max(0, Math.min(frame, sim.frames.length - 1))]!;
    if (!layerRef.current) layerRef.current = document.createElement("canvas");
    if (!bloomRef.current) bloomRef.current = document.createElement("canvas");
    const layer = layerRef.current, bloom = bloomRef.current;
    if (layer.width !== w || layer.height !== h) { layer.width = w; layer.height = h; }
    const bw = Math.max(2, Math.round(w / 2)), bh = Math.max(2, Math.round(h / 2));
    if (bloom.width !== bw || bloom.height !== bh) { bloom.width = bw; bloom.height = bh; }
    const lctx = layer.getContext("2d", { willReadFrequently: true })!;
    const bctx = bloom.getContext("2d", { willReadFrequently: true })!;

    const P = rgbOf(primary), Q = rgbOf(secondary), BG = rgbOf(background, dark ? [0, 0, 0] : [255, 255, 255]);

    // ---------- sky ----------
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.filter = "none";
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, w, h);
    if (!transparent) {
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, css(mixRGB(BG, [0, 0, 0], dark ? 0.25 : 0)));
      g.addColorStop(0.55, css(BG));
      g.addColorStop(0.85, css(mixRGB(BG, Q, dark ? 0.12 : 0.14)));
      g.addColorStop(1, css(mixRGB(BG, P, dark ? 0.2 : 0.16)));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      // Low sun behind the horizon.
      const sx = w * (portrait ? 0.5 : 0.62), sy = h * 1.04;
      const sun = ctx.createRadialGradient(sx, sy, 0, sx, sy, Math.max(w, h) * 0.75);
      sun.addColorStop(0, withAlpha(primary, dark ? 0.22 : 0.18));
      sun.addColorStop(0.35, withAlpha(secondary, dark ? 0.08 : 0.08));
      sun.addColorStop(1, withAlpha(secondary, 0));
      ctx.fillStyle = sun;
      ctx.fillRect(0, 0, w, h);
    }

    // ---------- glow of the formed mark ----------
    if (formed > 0) {
      const gkey = `${mask.key}|${primary}|${dark}`;
      if (!glowRef.current || glowRef.current.key !== gkey) {
        const c = document.createElement("canvas");
        const pad = Math.round(Math.max(mask.sil.width, mask.sil.height) * 0.12);
        c.width = mask.sil.width + pad * 2;
        c.height = mask.sil.height + pad * 2;
        const gc = c.getContext("2d", { willReadFrequently: true })!;
        gc.filter = `blur(${Math.max(2, Math.round(pad * 0.4))}px)`;
        gc.drawImage(mask.sil, pad, pad);
        gc.filter = "none";
        gc.globalCompositeOperation = "source-in";
        gc.fillStyle = dark ? primary : secondary;
        gc.fillRect(0, 0, c.width, c.height);
        glowRef.current = { key: gkey, c };
      }
      const gc = glowRef.current.c;
      const k = mask.bw / mask.sil.width;
      const padPx = ((gc.width - mask.sil.width) / 2) * k;
      ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
      ctx.globalAlpha = formed * (dark ? 0.22 + 0.22 * swell : 0.14 + 0.1 * swell);
      ctx.drawImage(gc, mask.bx - padPx, mask.by - padPx, gc.width * k, gc.height * k);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    }

    // ---------- birds ----------
    const Fz = S * 3.2;
    const cxp = w / 2, cyp = h / 2;
    const NB = 12; // 3 colors x 4 alphas
    const bucket = new Uint8Array(sim.n);
    const geo = new Float32Array(sim.n * 8);
    const wind = -0.42;
    const slow = S * 0.006;
    const t = frame;
    for (let i = 0; i < sim.n; i++) {
      const o = i * 5;
      const z = Math.max(-0.55 * Fz, st[o + 2]!);
      const sc = Fz / (Fz + z);
      const x = cxp + st[o]! * sc, y = cyp + st[o + 1]! * sc;
      const vxx = st[o + 3]!, vyy = st[o + 4]!;
      const speed = Math.hypot(vxx, vyy);
      const calm = 1 - clamp01(speed / slow);
      let hd = Math.atan2(vyy, vxx);
      const target = wind + sim.jit[i]!;
      let dd = target - hd;
      dd = ((((dd + Math.PI) % TAU) + TAU) % TAU) - Math.PI;
      hd += dd * calm * calm;
      // Density wave rolling through the flock: birds banking edge-on read darker/thinner.
      const wave = 0.5 + 0.5 * Math.sin((x * 0.9 + y * 0.45) / (S * 0.09) - t * 0.16);
      const flap = (1 - calm) * Math.sin(sim.flapPh[i]! + t * sim.flapRate[i]!) + calm * 0.6 * Math.sin(sim.flapPh[i]! * 0.5 + t * 0.12 - (x + y) / (S * 0.12));
      const span = 0.55 + 0.3 * flap;
      const l = S * (dark ? 0.0058 : 0.0064) * sim.size[i]! * Math.pow(sc, 1.15) * (0.82 + 0.3 * wave);
      const depthA = clamp01(0.25 + 0.75 * (sc - 0.55) / 0.5);
      const a = depthA * (0.55 + 0.45 * wave);
      const ab = Math.min(3, Math.floor(a * 4));
      const cb = sim.q[i]! < 0.36 ? 0 : sim.q[i]! < 0.68 ? 1 : 2;
      bucket[i] = cb * 4 + ab;
      const cx = Math.cos(hd), sn = Math.sin(hd);
      const sw = Math.sin(span * 1.4) * l, bk = Math.cos(span * 1.4) * l * 0.9;
      const g = i * 8;
      geo[g] = x + cx * l * 0.4; geo[g + 1] = y + sn * l * 0.4; // beak
      geo[g + 2] = x - cx * bk - sn * sw; geo[g + 3] = y - sn * bk + cx * sw; // wing tip
      geo[g + 4] = x - cx * l * 0.2; geo[g + 5] = y - sn * l * 0.2; // tail notch
      geo[g + 6] = x - cx * bk + sn * sw; geo[g + 7] = y - sn * bk - cx * sw; // other wing tip
    }
    lctx.setTransform(1, 0, 0, 1, 0, 0);
    lctx.globalCompositeOperation = "source-over";
    lctx.clearRect(0, 0, w, h);
    lctx.globalCompositeOperation = dark ? "lighter" : "source-over";
    const ALPHAS = dark ? [0.2, 0.36, 0.6, 0.88] : [0.6, 0.74, 0.88, 1];
    const cols: RGB[] = dark ? [P, mixRGB(P, Q, 0.5), Q] : [mixRGB(ink, P, 0.12), mixRGB(ink, mixRGB(P, Q, 0.5), 0.2), mixRGB(ink, Q, 0.12)];
    for (let b = 0; b < NB; b++) {
      lctx.fillStyle = css(cols[Math.floor(b / 4)]!, ALPHAS[b % 4]!);
      lctx.beginPath();
      for (let i = 0; i < sim.n; i++) {
        if (bucket[i] !== b) continue;
        const g = i * 8;
        lctx.moveTo(geo[g]!, geo[g + 1]!);
        lctx.lineTo(geo[g + 2]!, geo[g + 3]!);
        lctx.lineTo(geo[g + 4]!, geo[g + 5]!);
        lctx.lineTo(geo[g + 6]!, geo[g + 7]!);
        lctx.closePath();
      }
      lctx.fill();
    }

    if (dark) {
      bctx.setTransform(1, 0, 0, 1, 0, 0);
      bctx.filter = "none";
      bctx.clearRect(0, 0, bw, bh);
      bctx.filter = `blur(${Math.max(2, Math.round(S * 0.006))}px)`;
      bctx.drawImage(layer, 0, 0, bw, bh);
      bctx.filter = "none";
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = 0.85 + 0.4 * swell;
      ctx.drawImage(bloom, 0, 0, w, h);
      ctx.globalAlpha = 1;
      ctx.drawImage(layer, 0, 0);
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(layer, 0, 0);
    }
    ctx.globalCompositeOperation = "source-over";

    if (!transparent) {
      const v = ctx.createRadialGradient(w / 2, h * 0.48, S * 0.35, w / 2, h * 0.48, Math.hypot(w, h) * 0.6);
      v.addColorStop(0, withAlpha(background, 0));
      v.addColorStop(1, withAlpha(background, dark ? 0.6 : 0.45));
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, w, h);
    }
  }, [frame, mask, aspect, w, h, n, S, portrait, primary, secondary, background, transparent, dark, ink, formed, swell]);

  // ---------- caption ----------
  const capW = w * (portrait ? 0.84 : aspect === "1:1" ? 0.8 : 0.6);
  const capSize = hasCaption
    ? Math.max(
        h * (portrait ? 0.031 : 0.02),
        fitFontSize({ chars: caption.length, boxW: capW, boxH: h * (portrait ? 0.09 : 0.07), lines: portrait ? 2 : 1, charEm: 0.56, lineHeight: 1.25, max: aspect === "16:9" ? h * 0.04 : aspect === "1:1" ? h * 0.038 : h * 0.032 }),
      )
    : 0;
  const capIn = easeOut(ramp(frame, [126, 150], [0, 1]));
  const capTop = Math.max((mask ? mask.y1 : box.cy + box.bh / 2) + h * (portrait ? 0.045 : 0.05), aspect === "9:16" ? h * 0.68 : 0);
  const fade = transparent ? "radial-gradient(ellipse 68% 68% at 50% 50%, #000 55%, transparent 100%)" : undefined;
  void fps;

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <AbsoluteFill data-21st-slot="logo" style={{ maskImage: fade, WebkitMaskImage: fade }}>
        <canvas ref={ref} width={w} height={h} style={{ width: "100%", height: "100%", display: "block" }} />
      </AbsoluteFill>
      {hasCaption && mask ? (
        <div
          data-21st-slot="caption"
          style={{
            position: "absolute",
            left: (w - capW) / 2,
            width: capW,
            top: capTop,
            textAlign: "center",
            fontFamily: font,
            fontWeight: 500,
            fontSize: capSize,
            lineHeight: 1.25,
            letterSpacing: "0.02em",
            color,
            opacity: capIn * 0.92,
            transform: capIn < 1 ? `translateY(${((1 - capIn) * S * 0.02).toFixed(2)}px)` : undefined,
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
