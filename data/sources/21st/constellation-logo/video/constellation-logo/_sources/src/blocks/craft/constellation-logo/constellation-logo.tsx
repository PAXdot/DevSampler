// Built with Remotion - https://remotion.pro/license
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, continueRender, delayRender, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, fitFontSize, useLayout, waitForBrandFonts } from "../../../kit/index";
import type { Aspect } from "../../../kit/spec";
import { hashString, rng } from "../_lib/noise";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./constellation-logo.schema";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];
type Ctx = CanvasRenderingContext2D;

const TAU = Math.PI * 2;

/** Timeline (frames at 30 fps). */
const T_STAR0 = 12; // first key star brightens
const STAR_SPAN = 40; // all key stars lit by T_STAR0 + STAR_SPAN
const T_PEN0 = 52; // the pen leaves the first star
const PEN_LEN = 66; // and closes the figure at T_PEN0 + PEN_LEN
const T_CLOSE = T_PEN0 + PEN_LEN;
const T_SETTLED = 165;

const GREEK = ["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι"];

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='23' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")";

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
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const css = (c: RGB, a = 1) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${Math.max(0, Math.min(1, a)).toFixed(3)})`;
const ZERO: RGB = [0, 0, 0];
const FULL: RGB = [255, 255, 255];

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
const outCubic = (x: number) => 1 - Math.pow(1 - clamp01(x), 3);
/** Ease out with a small overshoot; lands exactly on 1. */
const outBack = (x: number) => {
  const t = clamp01(x);
  if (t >= 1) return 1;
  const c = 2.1;
  return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2);
};
/** 0 -> 1 -> 0 hump over [a, b]. */
const hump = (t: number, a: number, b: number) => (t <= a || t >= b ? 0 : Math.sin(Math.PI * ((t - a) / (b - a))));

// ---------------------------------------------------------------- layout

type Box = { cx: number; cy: number; bw: number; bh: number };

function figureBox(aspect: Aspect, w: number, h: number, text: boolean): Box {
  // The logo is the hero: it takes the middle of the plate, the atlas is the setting around it.
  if (aspect === "9:16") return { cx: w / 2, cy: h * (text ? 0.4 : 0.46), bw: w * 0.88, bh: h * 0.44 };
  if (aspect === "1:1") return { cx: w / 2, cy: h * (text ? 0.4 : 0.48), bw: w * 0.7, bh: h * 0.56 };
  return { cx: w / 2, cy: h * (text ? 0.41 : 0.48), bw: w * 0.5, bh: h * 0.6 };
}

// ---------------------------------------------------------------- logo -> constellation

type Star = { x: number; y: number; mag: number; label: string; nx: number; ny: number; contour: number };
type Edge = { a: number; b: number; c0: number; c1: number };
type Chart = {
  key: string;
  stars: Star[];
  edges: Edge[];
  tour: number;
  /** Smoothed full outlines of the mark in frame px (x, y pairs). */
  outlines: Float32Array[];
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  cx: number;
  cy: number;
  /** Mark silhouette (alpha) and the rect it maps to in frame px. */
  sil: HTMLCanvasElement;
  rx: number;
  ry: number;
  rw: number;
  rh: number;
  /** The real logo rasterized at 1024 px (only when it carries its own transparency; SVGs without an
   * intrinsic size cannot be cropped with drawImage directly), its trimmed source rect and target rect. */
  img: HTMLCanvasElement | null;
  src: [number, number, number, number];
  dst: [number, number, number, number];
};

const DIRS: [number, number][] = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];

/** Radial-sweep boundary trace of the region whose label is `id`. Returns pixel centers, clockwise. */
function trace(lab: Int32Array, mw: number, mh: number, id: number, sx: number, sy: number, area: number): number[] {
  const at = (x: number, y: number) => x >= 0 && y >= 0 && x < mw && y < mh && lab[y * mw + x] === id;
  const out: number[] = [];
  let cx = sx, cy = sy, back = 4;
  let second = -1;
  const cap = area * 4 + 64;
  for (let step = 0; step < cap; step++) {
    out.push(cx, cy);
    let moved = false;
    for (let k = 1; k <= 8; k++) {
      const d = (back + k) % 8;
      const nx = cx + DIRS[d]![0], ny = cy + DIRS[d]![1];
      if (at(nx, ny)) {
        back = (d + 4) % 8;
        cx = nx;
        cy = ny;
        moved = true;
        break;
      }
    }
    if (!moved) break;
    const here = cy * mw + cx;
    if (step === 0) second = here;
    else if (out.length >= 4 && out[out.length - 2] === sx && out[out.length - 1] === sy && here === second) {
      out.pop();
      out.pop();
      break;
    }
  }
  return out;
}

function label(m: Uint8Array, mw: number, mh: number, value: number, lab: Int32Array, sizes: number[], starts: number[], touches: boolean[]) {
  const q = new Int32Array(mw * mh);
  for (let i = 0; i < mw * mh; i++) {
    if (m[i] !== value || lab[i] !== 0) continue;
    const id = sizes.length + 1;
    let head = 0, tail = 0, size = 0, edge = false;
    q[tail++] = i;
    lab[i] = id;
    while (head < tail) {
      const j = q[head++]!;
      size++;
      const x = j % mw, y = (j - x) / mw;
      if (x === 0 || y === 0 || x === mw - 1 || y === mh - 1) edge = true;
      const nb = [x > 0 ? j - 1 : -1, x < mw - 1 ? j + 1 : -1, y > 0 ? j - mw : -1, y < mh - 1 ? j + mw : -1];
      for (const k of nb) if (k >= 0 && m[k] === value && lab[k] === 0) { lab[k] = id; q[tail++] = k; }
    }
    sizes.push(size);
    starts.push(i);
    touches.push(edge);
  }
}

function buildChart(img: HTMLImageElement | null, box: Box, S: number, key: string): Chart {
  const ms = Math.min(1, 300 / Math.max(box.bw, box.bh));
  const mw = Math.max(16, Math.round(box.bw * ms));
  const mh = Math.max(16, Math.round(box.bh * ms));
  const c = document.createElement("canvas");
  c.width = mw;
  c.height = mh;
  const ctx = c.getContext("2d", { willReadFrequently: true })!;
  let inside: Uint8Array | null = null;
  let keepImg: HTMLCanvasElement | null = null;
  let src: [number, number, number, number] = [0, 0, 1, 1];
  let drawn: [number, number, number, number] = [0, 0, mw, mh];

  if (img) {
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
      if (tx1 < 0) { tx0 = 0; ty0 = 0; tx1 = tc.width - 1; ty1 = tc.height - 1; }
      const nw = tx1 - tx0 + 1, nh = ty1 - ty0 + 1;
      // Leave a margin so outer stars and their labels stay inside the box.
      const k = Math.min((mw * 0.9) / nw, (mh * 0.9) / nh);
      const dw = nw * k, dh = nh * k;
      drawn = [(mw - dw) / 2, (mh - dh) / 2, dw, dh];
      src = [tx0, ty0, nw, nh];
      ctx.clearRect(0, 0, mw, mh);
      ctx.drawImage(tc, tx0, ty0, nw, nh, drawn[0], drawn[1], dw, dh);
      const d = ctx.getImageData(0, 0, mw, mh).data;
      const rx0 = Math.ceil(drawn[0]) + 1, ry0 = Math.ceil(drawn[1]) + 1;
      const rx1 = Math.floor(drawn[0] + dw) - 1, ry1 = Math.floor(drawn[1] + dh) - 1;
      let clear = 0, total = 0;
      for (let y = ry0; y < ry1; y++)
        for (let x = rx0; x < rx1; x++) { total++; if (d[(y * mw + x) * 4 + 3]! < 250) clear++; }
      const m = new Uint8Array(mw * mh);
      let area = 0;
      if (clear > total * 0.03) {
        keepImg = tc;
        for (let i = 0; i < mw * mh; i++) if (d[i * 4 + 3]! > 110) { m[i] = 1; area++; }
      } else {
        // Opaque image: the mark is whatever differs from the paper (corner) color.
        const pc: [number, number, number] = [0, 0, 0];
        for (const [x, y] of [[rx0, ry0], [rx1 - 1, ry0], [rx0, ry1 - 1], [rx1 - 1, ry1 - 1]]) {
          const o = (y! * mw + x!) * 4;
          pc[0] += d[o]! / 4; pc[1] += d[o + 1]! / 4; pc[2] += d[o + 2]! / 4;
        }
        for (let i = 0; i < mw * mh; i++) {
          const o = i * 4;
          if (d[o + 3]! < 110) continue;
          if (Math.abs(d[o]! - pc[0]) + Math.abs(d[o + 1]! - pc[1]) + Math.abs(d[o + 2]! - pc[2]) > 90) { m[i] = 1; area++; }
        }
      }
      // Two-tone marks (overlapping shapes) would trace as one blob. Where parts meet at a
      // clear tone step, cut a thin gap so each part becomes its own outline.
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
        if (edges.length / 2 < area * 0.05 && edges.length > 0) {
          const gr = Math.max(1.5, Math.min(mw, mh) * 0.016);
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
      inside = null;
    }
  }
  if (!inside) {
    // Abstract fallback: a ring around a disc.
    keepImg = null;
    const m = new Uint8Array(mw * mh);
    const R = Math.min(mw, mh) * 0.42;
    for (let y = 0; y < mh; y++)
      for (let x = 0; x < mw; x++) {
        const r = Math.hypot(x + 0.5 - mw / 2, y + 0.5 - mh / 2);
        if ((r > R * 0.78 && r < R) || r < R * 0.4) m[y * mw + x] = 1;
      }
    inside = m;
  }
  // Pixels on the frame of the mask would break the trace; clear a 1px border.
  for (let x = 0; x < mw; x++) { inside[x] = 0; inside[(mh - 1) * mw + x] = 0; }
  for (let y = 0; y < mh; y++) { inside[y * mw] = 0; inside[y * mw + mw - 1] = 0; }

  // ---- regions: solid parts and the holes inside them
  const labF = new Int32Array(mw * mh);
  const fs: number[] = [], fst: number[] = [], ft: boolean[] = [];
  label(inside, mw, mh, 1, labF, fs, fst, ft);
  const labH = new Int32Array(mw * mh);
  const hs: number[] = [], hst: number[] = [], ht: boolean[] = [];
  label(inside, mw, mh, 0, labH, hs, hst, ht);
  const fgArea = fs.reduce((a, b) => a + b, 0);
  const maxPart = Math.max(1, ...fs);
  type Raw = { pts: number[]; hole: boolean };
  const raws: Raw[] = [];
  fs.forEach((size, i) => {
    if (size < maxPart * 0.03 || size < 12) return;
    const s = fst[i]!;
    raws.push({ pts: trace(labF, mw, mh, i + 1, s % mw, Math.floor(s / mw), size), hole: false });
  });
  hs.forEach((size, i) => {
    if (ht[i] || size < fgArea * 0.05 || size < 12) return;
    const s = hst[i]!;
    raws.push({ pts: trace(labH, mw, mh, i + 1, s % mw, Math.floor(s / mw), size), hole: true });
  });
  // Keep the six longest outlines.
  raws.sort((a, b) => b.pts.length - a.pts.length);
  raws.length = Math.min(raws.length, 6);

  // ---- smooth each outline, then pick its stars (global Visvalingam-Whyatt)
  type Poly = { x: number[]; y: number[]; hole: boolean };
  const polys: Poly[] = [];
  for (const r of raws) {
    const n0 = r.pts.length / 2;
    if (n0 < 6) continue;
    const step = Math.max(1, Math.floor(n0 / 260));
    const xs: number[] = [], ys: number[] = [];
    const R = 2;
    for (let i = 0; i < n0; i += step) {
      let sx = 0, sy = 0;
      for (let k = -R; k <= R; k++) {
        const j = (((i + k) % n0) + n0) % n0;
        sx += r.pts[j * 2]!;
        sy += r.pts[j * 2 + 1]!;
      }
      xs.push(sx / (2 * R + 1) + 0.5);
      ys.push(sy / (2 * R + 1) + 0.5);
    }
    if (xs.length >= 6) polys.push({ x: xs, y: ys, hole: r.hole });
  }
  let bx0 = Infinity, by0 = Infinity, bx1 = -Infinity, by1 = -Infinity;
  for (const p of polys) for (let i = 0; i < p.x.length; i++) { bx0 = Math.min(bx0, p.x[i]!); bx1 = Math.max(bx1, p.x[i]!); by0 = Math.min(by0, p.y[i]!); by1 = Math.max(by1, p.y[i]!); }
  const markArea = Math.max(1, (bx1 - bx0) * (by1 - by0));

  const alive = polys.map((p) => new Uint8Array(p.x.length).fill(1));
  const prev = polys.map((p) => Int32Array.from({ length: p.x.length }, (_, i) => (i - 1 + p.x.length) % p.x.length));
  const next = polys.map((p) => Int32Array.from({ length: p.x.length }, (_, i) => (i + 1) % p.x.length));
  const count = polys.map((p) => p.x.length);
  const tri = (p: Poly, a: number, b: number, c2: number) => Math.abs((p.x[b]! - p.x[a]!) * (p.y[c2]! - p.y[a]!) - (p.x[c2]! - p.x[a]!) * (p.y[b]! - p.y[a]!)) * 0.5;
  const areas = polys.map((p, pi) => Float64Array.from({ length: p.x.length }, (_, i) => tri(p, prev[pi]![i]!, i, next[pi]![i]!)));
  let totalPts = count.reduce((a, b) => a + b, 0);
  const THR = markArea * 0.0062;
  const MAXN = 20, MINN = 7;
  for (;;) {
    let best = Infinity, bp = -1, bi = -1;
    for (let pi = 0; pi < polys.length; pi++) {
      if (count[pi]! <= 3) continue;
      const ar = areas[pi]!, al = alive[pi]!;
      for (let i = 0; i < ar.length; i++) if (al[i] && ar[i]! < best) { best = ar[i]!; bp = pi; bi = i; }
    }
    if (bp < 0) break;
    if (totalPts <= MINN) break;
    if (best >= THR && totalPts <= MAXN) break;
    const p = polys[bp]!, pv = prev[bp]!, nx = next[bp]!, ar = areas[bp]!;
    alive[bp]![bi] = 0;
    const a = pv[bi]!, b = nx[bi]!;
    nx[a] = b;
    pv[b] = a;
    ar[a] = tri(p, pv[a]!, a, nx[a]!);
    ar[b] = tri(p, pv[b]!, b, nx[b]!);
    count[bp]!--;
    totalPts--;
  }

  // ---- to frame px, tour order: outlines left to right, each from its topmost star
  const ox = box.cx - box.bw / 2, oy = box.cy - box.bh / 2;
  const fx = (x: number) => ox + x / ms, fy = (y: number) => oy + y / ms;
  type Ring = { idx: number[]; poly: number; cxm: number };
  const rings: Ring[] = polys.map((p, pi) => {
    const idx: number[] = [];
    for (let i = 0; i < p.x.length; i++) if (alive[pi]![i]) idx.push(i);
    let top = 0;
    for (let k = 1; k < idx.length; k++) if (p.y[idx[k]!]! + p.x[idx[k]!]! * 0.15 < p.y[idx[top]!]! + p.x[idx[top]!]! * 0.15) top = k;
    const ordered = idx.slice(top).concat(idx.slice(0, top));
    const cxm = ordered.reduce((s, i) => s + p.x[i]!, 0) / Math.max(1, ordered.length);
    return { idx: ordered, poly: pi, cxm };
  });
  rings.sort((a, b) => (polys[a.poly]!.hole === polys[b.poly]!.hole ? a.cxm - b.cxm : polys[a.poly]!.hole ? 1 : -1));

  // Corner candidates per outline, in frame px.
  type Pre = { x: number; y: number; nx: number; ny: number; turn: number; ring: number };
  const pre: Pre[] = [];
  const ringIdx: number[][] = [];
  rings.forEach((ring, ri) => {
    const p = polys[ring.poly]!;
    const n = ring.idx.length;
    let mx = 0, my = 0;
    for (const i of ring.idx) { mx += fx(p.x[i]!); my += fy(p.y[i]!); }
    mx /= n;
    my /= n;
    const list: number[] = [];
    for (let k = 0; k < n; k++) {
      const i = ring.idx[k]!, ip = ring.idx[(k - 1 + n) % n]!, inx = ring.idx[(k + 1) % n]!;
      const x = fx(p.x[i]!), y = fy(p.y[i]!);
      const a1 = Math.atan2(y - fy(p.y[ip]!), x - fx(p.x[ip]!));
      const a2 = Math.atan2(fy(p.y[inx]!) - y, fx(p.x[inx]!) - x);
      let da = Math.abs(a2 - a1);
      if (da > Math.PI) da = TAU - da;
      let nxv = x - mx, nyv = y - my;
      if (p.hole) { nxv = -nxv; nyv = -nyv; }
      const l = Math.hypot(nxv, nyv) || 1;
      list.push(pre.length);
      pre.push({ x, y, nx: nxv / l, ny: nyv / l, turn: da + (hashString(`${key}-${ri}-${k}`) / 4294967296) * 0.2, ring: ri });
    }
    ringIdx.push(list);
  });
  // Outlines that meet (parts of a two-tone mark) share their stars, like real constellations.
  const parent = pre.map((_, i) => i);
  const find = (i: number): number => {
    while (parent[i] !== i) { parent[i] = parent[parent[i]!]!; i = parent[i]!; }
    return i;
  };
  const mr = S * 0.05;
  for (let i = 0; i < pre.length; i++)
    for (let j = i + 1; j < pre.length; j++) {
      if (pre[i]!.ring === pre[j]!.ring) continue;
      if (Math.hypot(pre[i]!.x - pre[j]!.x, pre[i]!.y - pre[j]!.y) > mr) continue;
      const a = find(i), b = find(j);
      if (a !== b) parent[Math.max(a, b)] = Math.min(a, b);
    }
  const acc = new Map<number, { x: number; y: number; nx: number; ny: number; turn: number; c: number; ring: number }>();
  for (let i = 0; i < pre.length; i++) {
    const r = find(i), q = pre[i]!;
    const e = acc.get(r) ?? { x: 0, y: 0, nx: 0, ny: 0, turn: 0, c: 0, ring: q.ring };
    e.x += q.x; e.y += q.y; e.nx += q.nx; e.ny += q.ny; e.turn = Math.max(e.turn, q.turn) + (e.c ? 0.6 : 0); e.c++;
    acc.set(r, e);
  }
  const stars: Star[] = [];
  const turn: number[] = [];
  const map = new Int32Array(pre.length).fill(-1);
  for (let i = 0; i < pre.length; i++) {
    const r = find(i);
    if (map[r]! < 0) {
      const e = acc.get(r)!;
      const l = Math.hypot(e.nx, e.ny) || 1;
      map[r] = stars.length;
      stars.push({ x: e.x / e.c, y: e.y / e.c, mag: 2, label: "", nx: e.nx / l, ny: e.ny / l, contour: e.ring });
      turn.push(e.turn);
    }
    map[i] = map[r]!;
  }
  const edges: Edge[] = [];
  const seen = new Set<number>();
  let tour = 0;
  for (const list of ringIdx) {
    const n = list.length;
    for (let k = 0; k < n; k++) {
      const a = map[list[k]!]!, b = map[list[(k + 1) % n]!]!;
      if (a === b) continue;
      const id = Math.min(a, b) * 4096 + Math.max(a, b);
      if (seen.has(id)) continue;
      seen.add(id);
      const len = Math.hypot(stars[b]!.x - stars[a]!.x, stars[b]!.y - stars[a]!.y);
      edges.push({ a, b, c0: tour, c1: tour + len });
      tour += len;
    }
    // The pen lifts between outlines; give the jump a little time.
    tour += S * 0.04;
  }
  // Brightness: the sharpest corners are the brightest stars.
  const rank = stars.map((_, i) => i).sort((a, b) => turn[b]! - turn[a]!);
  rank.forEach((si, r) => {
    const s = stars[si]!;
    s.mag = r < Math.max(2, Math.round(stars.length * 0.25)) ? 0 : r < Math.round(stars.length * 0.6) ? 1 : 2;
    // Only the three brightest stars carry a Bayer letter: a quiet nod to the atlas, not a chart.
    if (r < 3) s.label = GREEK[r]!;
  });

  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const outlines = polys.map((p) => {
    const f = new Float32Array(p.x.length * 2);
    for (let i = 0; i < p.x.length; i++) {
      f[i * 2] = fx(p.x[i]!);
      f[i * 2 + 1] = fy(p.y[i]!);
      x0 = Math.min(x0, f[i * 2]!); x1 = Math.max(x1, f[i * 2]!); y0 = Math.min(y0, f[i * 2 + 1]!); y1 = Math.max(y1, f[i * 2 + 1]!);
    }
    return f;
  });
  if (!isFinite(x0)) { x0 = box.cx - box.bw / 4; x1 = box.cx + box.bw / 4; y0 = box.cy - box.bh / 4; y1 = box.cy + box.bh / 4; }

  // Silhouette canvas (alpha = mark).
  const sil = document.createElement("canvas");
  sil.width = mw;
  sil.height = mh;
  const sctx = sil.getContext("2d", { willReadFrequently: true })!;
  const id = sctx.createImageData(mw, mh);
  for (let i = 0; i < mw * mh; i++) if (inside[i]) { id.data[i * 4] = 255; id.data[i * 4 + 1] = 255; id.data[i * 4 + 2] = 255; id.data[i * 4 + 3] = 255; }
  sctx.putImageData(id, 0, 0);

  return {
    key, stars, edges, tour, outlines,
    x0, y0, x1, y1, cx: (x0 + x1) / 2, cy: (y0 + y1) / 2,
    sil, rx: ox, ry: oy, rw: mw / ms, rh: mh / ms,
    img: keepImg, src,
    dst: [ox + drawn[0] / ms, oy + drawn[1] / ms, drawn[2] / ms, drawn[3] / ms],
  };
}

function shiftChart(ch: Chart, dy: number) {
  for (const s of ch.stars) s.y += dy;
  for (const o of ch.outlines) for (let i = 1; i < o.length; i += 2) o[i] = o[i]! + dy;
  ch.y0 += dy;
  ch.y1 += dy;
  ch.cy += dy;
  ch.ry += dy;
  ch.dst[1] += dy;
}

// ---------------------------------------------------------------- sky

type Sky = {
  key: string;
  /** Background stars: x, y, radius, phase, rate, appear, tint (0 ink, 1 primary, 2 secondary), dim. */
  st: Float32Array;
  n: number;
};
const SKY_STRIDE = 8;

function buildSky(key: string, w: number, h: number, S: number, density: number, ch: Chart, band: (x: number) => number, avoid: [number, number, number, number]): Sky {
  const r = rng(`constellation-sky-${key}`);
  const m = Math.max(w, h) * 0.16;
  const W = w + 2 * m, H = h + 2 * m;
  const n = Math.round(((W * H) / (S * S)) * 150 * density);
  const st = new Float32Array(n * SKY_STRIDE);
  const pad = S * 0.035;
  for (let i = 0; i < n; i++) {
    let x = -m + r() * W, y = -m + r() * H;
    if (r() < 0.32) {
      // Milky Way: crowd toward the band.
      const g = (r() + r() + r() - 1.5) * 0.5;
      y = band(x) + g * S * 0.28;
    }
    const mg = Math.pow(r(), 2.7);
    let rad = S * (0.0011 + 0.0052 * Math.pow(mg, 1.25));
    let dim = 1;
    if (x > ch.x0 - pad && x < ch.x1 + pad && y > ch.y0 - pad && y < ch.y1 + pad) { dim = 0.25; rad *= 0.6; }
    if (x > avoid[0] && x < avoid[2] && y > avoid[1] && y < avoid[3]) { dim = Math.min(dim, 0.35); rad *= 0.7; }
    const o = i * SKY_STRIDE;
    st[o] = x;
    st[o + 1] = y;
    st[o + 2] = rad;
    st[o + 3] = r() * TAU;
    st[o + 4] = 0.07 + r() * 0.16;
    st[o + 5] = 2 + r() * 42 + (1 - mg) * 6;
    const tr = r();
    st[o + 6] = tr < 0.86 ? 0 : tr < 0.94 ? 1 : 2;
    st[o + 7] = dim;
  }
  return { key, st, n };
}

/** Milky Way, painted once at quarter resolution and reused every frame. */
function buildBand(w: number, h: number, S: number, band: (x: number) => number, P: RGB, Q: RGB, dark: boolean): { c: HTMLCanvasElement; m: number; k: number } {
  const k = 0.25;
  const m = Math.max(w, h) * 0.16;
  const c = document.createElement("canvas");
  c.width = Math.max(2, Math.round((w + 2 * m) * k));
  c.height = Math.max(2, Math.round((h + 2 * m) * k));
  const g = c.getContext("2d", { willReadFrequently: true })!;
  g.setTransform(k, 0, 0, k, m * k, m * k);
  const path = () => {
    g.beginPath();
    for (let i = 0; i <= 48; i++) {
      const x = -m + ((w + 2 * m) * i) / 48;
      if (i === 0) g.moveTo(x, band(x));
      else g.lineTo(x, band(x));
    }
  };
  g.lineCap = "round";
  g.filter = `blur(${Math.round(S * 0.05 * k)}px)`;
  g.strokeStyle = css(mix(Q, P, 0.3), 0.5);
  g.lineWidth = S * 0.36;
  path();
  g.stroke();
  g.strokeStyle = css(mix(Q, P, 0.15), 0.7);
  g.lineWidth = S * 0.16;
  path();
  g.stroke();
  // Clumps along the band.
  const r = rng("constellation-band");
  for (let i = 0; i < 34; i++) {
    const x = -m + r() * (w + 2 * m);
    const y = band(x) + (r() - 0.5) * S * 0.22;
    g.fillStyle = css(r() < 0.5 ? Q : mix(P, Q, 0.5), 0.25 + 0.35 * r());
    g.beginPath();
    g.ellipse(x, y, S * (0.03 + 0.06 * r()), S * (0.02 + 0.04 * r()), r() * Math.PI, 0, TAU);
    g.fill();
  }
  // Dark rift through the middle of the band.
  g.globalCompositeOperation = "destination-out";
  g.filter = `blur(${Math.round(S * 0.025 * k)}px)`;
  g.lineWidth = S * (dark ? 0.05 : 0.035);
  g.strokeStyle = css(ZERO, 0.75);
  g.beginPath();
  for (let i = 0; i <= 48; i++) {
    const x = -m + ((w + 2 * m) * i) / 48;
    const y = band(x) + S * 0.025 * Math.sin(x / (S * 0.18));
    if (i === 0) g.moveTo(x, y);
    else g.lineTo(x, y);
  }
  g.stroke();
  g.globalCompositeOperation = "source-over";
  g.filter = "none";
  return { c, m, k };
}

/** Engraved figure of the mark: hatching clipped to the silhouette, cached per chart and colors. */
function buildFigure(ch: Chart, S: number, ink: string): { hatch: HTMLCanvasElement; tint: HTMLCanvasElement } {
  const k = Math.min(1, 900 / Math.max(ch.rw, ch.rh));
  const c = document.createElement("canvas");
  c.width = Math.max(2, Math.round(ch.rw * k));
  c.height = Math.max(2, Math.round(ch.rh * k));
  const g = c.getContext("2d", { willReadFrequently: true })!;
  g.imageSmoothingEnabled = true;
  g.filter = `blur(${Math.max(1, Math.round((c.width / ch.sil.width) * 0.6))}px)`;
  g.drawImage(ch.sil, 0, 0, c.width, c.height);
  g.filter = "none";
  g.globalCompositeOperation = "source-in";
  g.strokeStyle = ink;
  g.lineWidth = Math.max(1, S * 0.0013 * k);
  const gap = S * 0.0085 * k;
  g.beginPath();
  for (let d = -c.height; d < c.width + c.height; d += gap) {
    g.moveTo(d, 0);
    g.lineTo(d - c.height * 0.7, c.height);
  }
  g.stroke();
  const tint = document.createElement("canvas");
  tint.width = c.width;
  tint.height = c.height;
  const tg = tint.getContext("2d", { willReadFrequently: true })!;
  tg.filter = `blur(${Math.max(1, Math.round((c.width / ch.sil.width) * 0.6))}px)`;
  tg.drawImage(ch.sil, 0, 0, c.width, c.height);
  tg.filter = "none";
  tg.globalCompositeOperation = "source-in";
  tg.fillStyle = ink;
  tg.fillRect(0, 0, c.width, c.height);
  return { hatch: c, tint };
}

/** The shared sample mark is neutral gray. Recolor it in the brand, keeping its two tones:
 * light parts take the secondary, dark parts the primary. A user's own logo keeps its colors. */
function brandMark(img: HTMLCanvasElement, P: RGB, Q: RGB): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = img.width;
  c.height = img.height;
  const g = c.getContext("2d", { willReadFrequently: true })!;
  g.drawImage(img, 0, 0);
  const id = g.getImageData(0, 0, c.width, c.height);
  const d = id.data;
  for (let i = 0; i < d.length; i += 4) {
    if (d[i + 3] === 0) continue;
    const l = (0.299 * d[i]! + 0.587 * d[i + 1]! + 0.114 * d[i + 2]!) / 255;
    const u = clamp01((l - 0.42) / 0.16);
    const k = u * u * (3 - 2 * u);
    d[i] = P[0] + (Q[0] - P[0]) * k;
    d[i + 1] = P[1] + (Q[1] - P[1]) * k;
    d[i + 2] = P[2] + (Q[2] - P[2]) * k;
  }
  g.putImageData(id, 0, 0);
  return c;
}

// ---------------------------------------------------------------- drawing helpers

/** Stroke the first `p` (0..1) of a polyline's length. */
function partial(ctx: Ctx, pts: number[], p: number, closed: boolean) {
  const n = pts.length / 2;
  const segs = closed ? n : n - 1;
  let total = 0;
  const lens: number[] = [];
  for (let i = 0; i < segs; i++) {
    const j = (i + 1) % n;
    const l = Math.hypot(pts[j * 2]! - pts[i * 2]!, pts[j * 2 + 1]! - pts[i * 2 + 1]!);
    lens.push(l);
    total += l;
  }
  let left = total * clamp01(p);
  ctx.beginPath();
  ctx.moveTo(pts[0]!, pts[1]!);
  for (let i = 0; i < segs && left > 0; i++) {
    const j = (i + 1) % n;
    const f = Math.min(1, left / Math.max(1e-6, lens[i]!));
    ctx.lineTo(pts[i * 2]! + (pts[j * 2]! - pts[i * 2]!) * f, pts[i * 2 + 1]! + (pts[j * 2 + 1]! - pts[i * 2 + 1]!) * f);
    left -= lens[i]!;
  }
  ctx.stroke();
}

/** A four-point star: reads as starlight, not as a plotted data point. */
function sparkle(c: Ctx, x: number, y: number, r: number) {
  const L = r * 2.4, k = r * 0.38;
  c.beginPath();
  c.moveTo(x, y - L);
  c.quadraticCurveTo(x + k, y - k, x + L, y);
  c.quadraticCurveTo(x + k, y + k, x, y + L);
  c.quadraticCurveTo(x - k, y + k, x - L, y);
  c.quadraticCurveTo(x - k, y - k, x, y - L);
  c.closePath();
  c.moveTo(x + r * 0.62, y);
  c.arc(x, y, r * 0.62, 0, TAU);
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

// ---------------------------------------------------------------- component

/**
 * A night sky turns into place (faint parallels, Milky Way, field stars), the logo's
 * corners brighten one by one as stars, a pen joins them into the mark's outline,
 * the figure closes with a pulse, and the logo itself inks in large and brand-colored
 * as the hero over its own constellation. The name is set under it.
 * Light brands read as ink on paper, dark brands as a night chart.
 */
export const Component: React.FC<Props> = ({ logo, eyebrow, title, primary, secondary, color, background, density, grid, grain, fontFamily, monoFamily }) => {
  const frame = useCurrentFrame();
  const { width: w, height: h, aspect, portrait } = useLayout();
  const S = Math.min(w, h);
  const transparent = background === "transparent";
  const INK = rgbOf(color);
  const dark = transparent ? lum(INK) > 0.4 : lum(rgbOf(background, [0, 0, 0])) < 0.4;
  const hasEyebrow = eyebrow.trim().length > 0;
  const hasTitle = title.trim().length > 0;
  const hasText = hasEyebrow || hasTitle;
  const serif = brandFontStack(fontFamily);
  const mono = brandFontStack(monoFamily);

  const [asset, setAsset] = useState<{ img: HTMLImageElement | null } | null>(null);
  const [handle] = useState(() => delayRender("constellation-logo logo and fonts", { timeoutInMilliseconds: 60000 }));
  useEffect(() => {
    let alive = true;
    (async () => {
      await waitForBrandFonts();
      let img: HTMLImageElement | null = null;
      try { img = await loadImage(logo.trim() || SAMPLE_LOGO); } catch { img = null; }
      if (alive) setAsset({ img });
    })()
      .catch(() => { if (alive) setAsset({ img: null }); })
      .finally(() => continueRender(handle));
    return () => { alive = false; };
  }, [logo, handle]);

  // ---- text sizes (independent of the chart)
  const boundPad = S * 0.055;
  const textGap = h * (portrait ? 0.035 : 0.04);
  const textW = w * (portrait ? 0.86 : aspect === "1:1" ? 0.8 : 0.62);
  const ebTrack = portrait ? 0.14 : 0.22;
  const ebSize = Math.max(h * (portrait ? 0.031 : 0.021), fitFontSize({ chars: eyebrow.length * (1 + ebTrack / 0.6) + 6, boxW: textW, boxH: h * 0.05, lines: 1, charEm: 0.6, lineHeight: 1.3, max: h * (portrait ? 0.033 : 0.024) }));
  const titleMax = aspect === "16:9" ? h * 0.047 : aspect === "1:1" ? h * 0.045 : h * 0.04;
  const titleSize = hasTitle
    ? Math.max(h * (portrait ? 0.032 : 0.03), fitFontSize({ chars: title.length, boxW: textW, boxH: h * (portrait ? 0.15 : 0.12), lines: portrait ? 2 : 1, charEm: 0.46, lineHeight: 1.18, max: titleMax }))
    : 0;
  const titleLines = hasTitle ? Math.min(portrait ? 2 : 3, Math.max(1, Math.ceil((title.length * 0.47 * titleSize) / textW))) : 0;
  const textH = (hasEyebrow ? ebSize * 1.3 : 0) + (hasEyebrow && hasTitle ? h * 0.014 : 0) + titleLines * titleSize * 1.18;

  const box = figureBox(aspect, w, h, hasText);
  const chart = useMemo(() => {
    if (!asset) return null;
    const ch = buildChart(asset.img, box, S, `${hashString(logo)}-${aspect}-${w}x${h}-${hasText ? 1 : 0}-${Math.round(textH)}`);
    // Center the whole plate group (boundary + name) vertically.
    const top = ch.y0 - boundPad;
    const bottom = hasText ? ch.y1 + boundPad + textGap + textH : ch.y1 + boundPad;
    let dy = h * (portrait ? 0.48 : 0.5) - (top + bottom) / 2;
    dy = Math.max(dy, S * 0.12 - top);
    shiftChart(ch, dy);
    return ch;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asset, logo, aspect, w, h, hasText, textH]);
  const textTop = chart ? chart.y1 + boundPad + textGap : h * 0.72;
  const textBottom = textTop + textH;

  // Ecliptic and Milky Way paths in sky coordinates.
  const band = useMemo(() => {
    if (aspect === "9:16") return (x: number) => h * 0.9 - (x / w) * h * 0.55 + S * 0.08 * Math.sin((x / w) * 3.4 + 0.6);
    return (x: number) => h * 1.02 - (x / w) * h * 0.95 + S * 0.08 * Math.sin((x / w) * 3.1 + 0.4);
  }, [aspect, w, h, S]);

  const sky = useMemo(() => {
    if (!chart) return null;
    const avoid: [number, number, number, number] = [w / 2 - textW / 2, textTop - S * 0.02, w / 2 + textW / 2, textBottom + S * 0.02];
    return buildSky(chart.key, w, h, S, density, chart, band, hasText ? avoid : [0, 0, 0, 0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart, w, h, S, density, band, hasText]);

  const ref = useRef<HTMLCanvasElement>(null);
  const bandRef = useRef<{ key: string; v: ReturnType<typeof buildBand> } | null>(null);
  const figRef = useRef<{ key: string; c: ReturnType<typeof buildFigure> } | null>(null);
  const markRef = useRef<{ key: string; c: HTMLCanvasElement } | null>(null);
  const isSample = !logo.trim();

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx || !chart || !sky) return;
    const t = frame;
    const P = rgbOf(primary), Q = rgbOf(secondary), BG = rgbOf(background, dark ? [8, 8, 12] : [250, 248, 242]);
    const lineRGB = dark ? mix(P, INK, 0.28) : P;
    const starRGB = INK;

    // ---------- paper / night
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.filter = "none";
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, w, h);
    if (!transparent) {
      // Flat paper (or flat night sky): the plate is printed, not lit.
      ctx.fillStyle = css(BG);
      ctx.fillRect(0, 0, w, h);
    }

    // ---------- sky transform: the plate turns about a pole below the frame and eases to rest
    const z = 1 + 0.07 * (1 - smoother(t / T_SETTLED));
    const th = -0.075 * (1 - smoother(t / 160));
    const R0 = Math.max(w, h) * 1.25;
    const PX = w / 2, PY = h / 2 + R0;
    const skyT = (c: Ctx, k: number) => {
      c.setTransform(k * z, 0, 0, k * z, k * chart.cx * (1 - z), k * chart.cy * (1 - z));
      c.translate(PX, PY);
      c.rotate(th);
      c.translate(-PX, -PY);
    };
    skyT(ctx, 1);

    // ---------- Milky Way
    const bkey = `${w}x${h}|${aspect}|${primary}|${secondary}|${dark}`;
    if (!bandRef.current || bandRef.current.key !== bkey) bandRef.current = { key: bkey, v: buildBand(w, h, S, band, P, Q, dark) };
    if (!transparent) {
      const { c, m } = bandRef.current.v;
      ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
      ctx.globalAlpha = smooth((t - 2) / 40) * (dark ? 0.2 : 0.16);
      ctx.drawImage(c, -m, -m, w + 2 * m, h + 2 * m);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    }

    // ---------- faint parallels
    if (grid) {
      // A few faint parallels: the sky turning, not a chart.
      const gridA = dark ? 0.08 : 0.07;
      ctx.strokeStyle = css(dark ? mix(INK, P, 0.4) : INK, gridA);
      ctx.lineWidth = Math.max(1, S * 0.0011);
      const marg = Math.max(w, h) * 0.2;
      const rIn = R0 - h / 2 - marg, rOut = Math.hypot(R0 + h / 2 + marg, w / 2 + marg);
      const dStep = S * 0.17;
      let li = 0;
      for (let r = rOut - ((rOut - R0) % dStep); r > rIn; r -= dStep) {
        const span = Math.asin(Math.min(1, (w / 2 + marg) / r)) * 1.05;
        const p = smoother((t - 1 - li * 1.6) / 30);
        li++;
        if (p <= 0) continue;
        ctx.beginPath();
        ctx.arc(PX, PY, r, -Math.PI / 2 - span * p, -Math.PI / 2 + span * p);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    // ---------- field stars
    {
      const B = 6;
      const tints: RGB[] = dark ? [starRGB, mix(starRGB, P, 0.55), mix(starRGB, Q, 0.55)] : [starRGB, mix(starRGB, P, 0.5), mix(starRGB, Q, 0.4)];
      const buckets: Path2D[] = [];
      for (let i = 0; i < 3 * B; i++) buckets.push(new Path2D());
      const st = sky.st;
      for (let i = 0; i < sky.n; i++) {
        const o = i * SKY_STRIDE;
        const app = smooth((t - st[o + 5]!) / 14);
        if (app <= 0) continue;
        let a = app * st[o + 7]!;
        const rad = st[o + 2]!;
        if (dark) a *= 0.72 + 0.28 * Math.sin(t * st[o + 4]! + st[o + 3]!);
        else a *= 0.55;
        // Small stars are fainter.
        a *= 0.45 + 0.55 * clamp01(rad / (S * 0.0035));
        const ab = Math.min(B - 1, Math.floor(a * B));
        if (ab < 0 || a < 0.03) continue;
        const pth = buckets[st[o + 6]! * B + ab]!;
        const x = st[o]!, y = st[o + 1]!;
        pth.moveTo(x + rad, y);
        pth.arc(x, y, rad, 0, TAU);
      }
      for (let c = 0; c < 3; c++)
        for (let b = 0; b < B; b++) {
          ctx.fillStyle = css(tints[c]!, (b + 1) / B);
          ctx.fill(buckets[c * B + b]!);
        }
    }

    // ---------- engraved figure of the real mark
    const figA = smooth((t - 100) / 46);
    // The mark inks in once the figure has closed and holds as the hero of the settled frame.
    const inkA = smoother((t - (T_CLOSE - 2)) / 36);
    if (figA > 0) {
      const fkey = `${chart.key}|${primary}|${dark}`;
      if (!figRef.current || figRef.current.key !== fkey) figRef.current = { key: fkey, c: buildFigure(chart, S, css(P, 1)) };
      // tint
      ctx.globalAlpha = figA * (dark ? 0.1 : 0.07);
      ctx.drawImage(figRef.current.c.tint, chart.rx, chart.ry, chart.rw, chart.rh);
      // hatching, revealed by a soft diagonal sweep
      const sweep = smoother((t - 100) / 40);
      ctx.save();
      ctx.beginPath();
      const span = chart.rw + chart.rh;
      const edge = chart.rx - chart.rh + span * 1.15 * sweep;
      ctx.moveTo(chart.rx - chart.rh, chart.ry - 2);
      ctx.lineTo(edge, chart.ry - 2);
      ctx.lineTo(edge - chart.rh * 0.6, chart.ry + chart.rh + 2);
      ctx.lineTo(chart.rx - chart.rh * 2, chart.ry + chart.rh + 2);
      ctx.closePath();
      ctx.clip();
      ctx.globalAlpha = figA * (dark ? 0.3 : 0.34);
      ctx.drawImage(figRef.current.c.hatch, chart.rx, chart.ry, chart.rw, chart.rh);
      ctx.restore();
      skyT(ctx, 1);
      // The mark itself inks in over the engraving: the settled frame is the logo, drawn by its own stars.
      if (chart.img) {
        ctx.globalAlpha = Math.max(figA * 0.1, inkA);
        const [sx, sy, sw, sh] = chart.src;
        const [dx, dy, dw, dh] = chart.dst;
        let mark = chart.img;
        if (isSample) {
          const mkey = `${chart.key}|${primary}|${secondary}`;
          if (!markRef.current || markRef.current.key !== mkey) markRef.current = { key: mkey, c: brandMark(chart.img, P, Q) };
          mark = markRef.current.c;
        }
        ctx.drawImage(mark, sx, sy, sw, sh, dx, dy, dw, dh);
      } else if (inkA > 0) {
        // Opaque image or no image: the silhouette is printed in the brand color.
        ctx.globalAlpha = inkA * 0.92;
        ctx.drawImage(figRef.current.c.tint, chart.rx, chart.ry, chart.rw, chart.rh);
      }
      // fine outline of the true shape
      ctx.globalAlpha = figA * (dark ? 0.32 : 0.38) * (1 - 0.6 * inkA);
      ctx.strokeStyle = css(P, 1);
      ctx.lineWidth = Math.max(1, S * 0.0011);
      for (const o of chart.outlines) {
        ctx.beginPath();
        for (let i = 0; i < o.length; i += 2) (i ? ctx.lineTo(o[i]!, o[i + 1]!) : ctx.moveTo(o[i]!, o[i + 1]!));
        ctx.closePath();
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    // ---------- the constellation
    const N = chart.stars.length;
    const starT = (i: number) => T_STAR0 + (i * STAR_SPAN) / Math.max(1, N - 1);
    const pen = chart.tour * smoother((t - T_PEN0) / PEN_LEN);
    const gap = S * 0.011;
    const rOf = (m: number) => S * (m === 0 ? 0.0118 : m === 1 ? 0.0086 : 0.0064);
    const pulse = (i: number) => hump(t, T_CLOSE - 6 + i * 0.9, T_CLOSE + 12 + i * 0.9);
    const drawLines = (c: Ctx, widthK: number, alpha: number) => {
      c.strokeStyle = css(lineRGB, alpha);
      c.lineWidth = Math.max(1, S * (dark ? 0.0022 : 0.0026) * widthK);
      c.lineCap = "round";
      c.beginPath();
      let head: [number, number] | null = null;
      for (const e of chart.edges) {
        if (pen <= e.c0) break;
        const A = chart.stars[e.a]!, Bs = chart.stars[e.b]!;
        const len = e.c1 - e.c0;
        const ux = (Bs.x - A.x) / Math.max(1e-6, len), uy = (Bs.y - A.y) / Math.max(1e-6, len);
        const s0 = rOf(A.mag) + gap, s1 = len - rOf(Bs.mag) - gap;
        const f = Math.min(len, pen - e.c0);
        if (s1 <= s0) continue;
        const end = Math.min(s1, f);
        if (end > s0) {
          c.moveTo(A.x + ux * s0, A.y + uy * s0);
          c.lineTo(A.x + ux * end, A.y + uy * end);
        }
        if (f < len) head = [A.x + ux * f, A.y + uy * f];
      }
      c.stroke();
      return head;
    };

    // Lines.
    // Once the logo has inked in, the lines step back so the mark leads.
    const head = drawLines(ctx, 1, (dark ? 0.9 : 0.92) * (1 - 0.45 * inkA));
    // Pen head.
    if (head) {
      ctx.fillStyle = css(dark ? INK : P, 1);
      ctx.beginPath();
      ctx.arc(head[0], head[1], S * 0.0034, 0, TAU);
      ctx.fill();
      ctx.strokeStyle = css(P, 0.45);
      ctx.lineWidth = Math.max(1, S * 0.0012);
      ctx.beginPath();
      ctx.arc(head[0], head[1], S * 0.009, 0, TAU);
      ctx.stroke();
    }

    // Key stars.
    const labelSize = S * 0.02;
    ctx.font = `italic ${labelSize.toFixed(1)}px ${serif}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (let i = 0; i < N; i++) {
      const s = chart.stars[i]!;
      const e = (t - starT(i)) / 11;
      if (e <= 0) continue;
      const pop = outBack(e);
      const pl = pulse(i);
      const r = rOf(s.mag) * pop * (1 + 0.42 * pl) * (1 - 0.25 * inkA);
      // Stamp ring as the star lands.
      const ringT = clamp01((t - starT(i)) / 18);
      if (ringT < 1) {
        ctx.strokeStyle = css(P, (1 - ringT) * 0.7);
        ctx.lineWidth = Math.max(1, S * 0.0014);
        ctx.beginPath();
        ctx.arc(s.x, s.y, rOf(s.mag) + S * 0.032 * outCubic(ringT), 0, TAU);
        ctx.stroke();
      }
      {
        ctx.fillStyle = css(starRGB, 1);
        sparkle(ctx, s.x, s.y, r * 0.8);
        ctx.fill();
        if (s.mag === 0) {
          ctx.strokeStyle = css(P, 0.55 * clamp01(e));
          ctx.lineWidth = Math.max(1, S * 0.0013);
          ctx.beginPath();
          ctx.arc(s.x, s.y, r + S * 0.0055, 0, TAU);
          ctx.stroke();
        }
      }
      if (s.label && inkA < 0.9) {
        const la = smooth((t - starT(i) - 6) / 14);
        if (la > 0) {
          ctx.fillStyle = css(INK, la * (dark ? 0.45 : 0.5));
          const off = rOf(s.mag) + S * 0.024;
          ctx.fillText(s.label, s.x + s.nx * off, s.y + s.ny * off);
        }
      }
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
  }, [frame, chart, sky, w, h, S, aspect, portrait, primary, secondary, background, transparent, dark, INK, grid, band, boundPad, serif, mono, isSample]);

  // ---------- DOM text
  const ebIn = smooth((frame - 126) / 22);
  const titleIn = smoother((frame - 132) / 30);
  const fade = transparent ? "radial-gradient(ellipse 62% 62% at 50% 50%, #000 52%, transparent 100%)" : undefined;
  const textColor = color;
  const ruleColor = css(INK, 0.45);
  const ruleW = S * 0.05 * ebIn;

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <AbsoluteFill data-21st-slot="logo" style={{ maskImage: fade, WebkitMaskImage: fade }}>
        <canvas ref={ref} width={w} height={h} style={{ width: "100%", height: "100%", display: "block" }} />
      </AbsoluteFill>
      {chart && hasText ? (
        <div style={{ position: "absolute", left: (w - textW) / 2, width: textW, top: textTop, display: "flex", flexDirection: "column", alignItems: "center", gap: h * 0.014 }}>
          {hasEyebrow ? (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: S * 0.016, maxWidth: "100%", opacity: ebIn }}>
              <div style={{ width: ruleW, height: Math.max(1, S * 0.0014), background: ruleColor, flexShrink: 0 }} />
              <div
                data-21st-slot="eyebrow"
                style={{
                  fontFamily: mono,
                  fontWeight: 500,
                  fontSize: ebSize,
                  lineHeight: 1.3,
                  letterSpacing: `${(ebTrack + 0.16 * (1 - ebIn)).toFixed(3)}em`,
                  color: textColor,
                  opacity: 0.78,
                  textAlign: "center",
                  minWidth: 0,
                  whiteSpace: "normal",
                  overflowWrap: "anywhere",
                }}
              >
                {eyebrow}
              </div>
              <div style={{ width: ruleW, height: Math.max(1, S * 0.0014), background: ruleColor, flexShrink: 0 }} />
            </div>
          ) : null}
          {hasTitle ? (
            <div
              data-21st-slot="title"
              style={{
                fontFamily: serif,
                fontWeight: 400,
                fontSize: titleSize,
                lineHeight: 1.18,
                letterSpacing: `${(0.015 + 0.07 * (1 - titleIn)).toFixed(3)}em`,
                color: textColor,
                textAlign: "center",
                maxWidth: "100%",
                whiteSpace: "normal",
                overflowWrap: "anywhere",
                opacity: titleIn,
                transform: titleIn < 1 ? `translateY(${((1 - titleIn) * S * 0.022).toFixed(2)}px)` : undefined,
              }}
            >
              {title}
            </div>
          ) : null}
        </div>
      ) : null}
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.06 : 0.1, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
