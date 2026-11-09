// Built with Remotion - https://remotion.pro/license
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, continueRender, delayRender, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeOut, fitFontSize, ramp, useLayout, waitForBrandFonts, withAlpha } from "../../../kit/index";
import type { Aspect } from "../../../kit/spec";
import { hashString } from "../_lib/noise";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./sand-logo-settle.schema";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];

const TAU = Math.PI * 2;
/** Grid cells across the short side of the frame (one cell = one grain, 4 px at 1080p). */
const SHORT = 270;
/** Gravity in cells per frame squared. */
const G0 = 0.55;
/** Pour schedule (frames). */
const T_POUR = 4;
const T_EMIT_END = 96;
const T_LATE = 116;
/** Strata: [band, frames]. Bands index the palette (0 primary, 1 blend, 2 secondary, 3 pale, 4 deep primary, 5 light secondary). */
const STRATA: [number, number][] = [[0, 16], [2, 14], [3, 5], [4, 15], [1, 9], [5, 13], [3, 4], [0, 30]];
function bandAt(tt: number): number {
  let acc = 0;
  for (const [b, len] of STRATA) {
    acc += len;
    if (tt < acc) return b;
  }
  return STRATA[STRATA.length - 1]![0];
}
const MAXF = 26000;
const CHECKPOINT = 10;
const SHIMMER: [number, number] = [134, 172];

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='7' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

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
const css = (c: RGB, a = 1) => `rgb(${Math.round(c[0])} ${Math.round(c[1])} ${Math.round(c[2])} / ${Math.max(0, Math.min(1, a)).toFixed(3)})`;
const HI: RGB = [255, 255, 255];
const LO: RGB = [0, 0, 0];

// ---------------------------------------------------------------- math

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (x: number) => {
  const t = clamp01(x);
  return t * t * (3 - 2 * t);
};

// ---------------------------------------------------------------- layout

type Box = { cx: number; cy: number; bw: number; bh: number };

/** Where the logo mold sits, as fractions of the frame. */
function logoBox(aspect: Aspect, caption: boolean): Box {
  // Portrait: a larger mold in the upper half, the caption anchored in the lower third (see capTop).
  if (aspect === "9:16") return { cx: 0.5, cy: caption ? 0.39 : 0.5, bw: 0.86, bh: 0.42 };
  if (aspect === "1:1") return { cx: 0.5, cy: caption ? 0.46 : 0.5, bw: 0.6, bh: 0.46 };
  return { cx: 0.5, cy: caption ? 0.45 : 0.5, bw: 0.4, bh: 0.5 };
}

// ---------------------------------------------------------------- logo mold

type Mold = {
  key: string;
  gw: number;
  gh: number;
  inside: Uint8Array;
  /** Inside cells, bottom row first; rows[] holds [start, end) spans into it. */
  list: Int32Array;
  rows: Int32Array;
  /** Per column, inside y's from the bottom up (flattened with colStart). */
  colStart: Int32Array;
  colYs: Int32Array;
  edges: Int32Array;
  capacity: number;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
};

function buildMold(img: HTMLImageElement | null, gw: number, gh: number, box: Box, key: string): Mold {
  const bw = Math.max(8, Math.round(box.bw * gw)), bh = Math.max(8, Math.round(box.bh * gh));
  const SS = 3;
  let cells: Uint8Array | null = null;
  let lumc: Float32Array | null = null;
  if (img) {
    try {
      const nw0 = img.naturalWidth || 512, nh0 = img.naturalHeight || 512;
      const k0 = 768 / Math.max(nw0, nh0);
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
      const k = Math.min(bw / nw, bh / nh);
      const dw = Math.max(1, Math.round(nw * k)), dh = Math.max(1, Math.round(nh * k));
      // Supersample, then average coverage per grain cell.
      const sc = document.createElement("canvas");
      sc.width = dw * SS;
      sc.height = dh * SS;
      const sctx = sc.getContext("2d", { willReadFrequently: true })!;
      sctx.drawImage(tc, tx0, ty0, nw, nh, 0, 0, sc.width, sc.height);
      const d = sctx.getImageData(0, 0, sc.width, sc.height).data;
      let clear = 0;
      for (let i = 0; i < sc.width * sc.height; i++) if (d[i * 4 + 3]! < 250) clear++;
      const hasAlpha = clear > sc.width * sc.height * 0.03;
      // Opaque image: the mark is whatever differs from the corner (paper) color.
      const pc: [number, number, number] = [0, 0, 0];
      if (!hasAlpha) {
        for (const [x, y] of [[1, 1], [sc.width - 2, 1], [1, sc.height - 2], [sc.width - 2, sc.height - 2]]) {
          const o = (y! * sc.width + x!) * 4;
          pc[0] += d[o]! / 4; pc[1] += d[o + 1]! / 4; pc[2] += d[o + 2]! / 4;
        }
      }
      const m = new Uint8Array(gw * gh);
      const L = new Float32Array(gw * gh);
      const ox = Math.round(box.cx * gw - dw / 2), oy = Math.round(box.cy * gh - dh / 2);
      let area = 0;
      for (let cy = 0; cy < dh; cy++)
        for (let cx = 0; cx < dw; cx++) {
          let cov = 0, l = 0;
          for (let sy = 0; sy < SS; sy++)
            for (let sx = 0; sx < SS; sx++) {
              const o = ((cy * SS + sy) * sc.width + cx * SS + sx) * 4;
              const on = hasAlpha ? d[o + 3]! > 110 : d[o + 3]! > 110 && Math.abs(d[o]! - pc[0]!) + Math.abs(d[o + 1]! - pc[1]!) + Math.abs(d[o + 2]! - pc[2]!) > 90;
              if (on) { cov++; l += 0.299 * d[o]! + 0.587 * d[o + 1]! + 0.114 * d[o + 2]!; }
            }
          const gx = ox + cx, gy = oy + cy;
          if (gx < 2 || gy < 2 || gx >= gw - 2 || gy >= gh - 2) continue;
          if (cov * 2 >= SS * SS) { m[gy * gw + gx] = 1; L[gy * gw + gx] = l / cov; area++; }
        }
      if (area > bw * bh * 0.01) { cells = m; lumc = L; }
    } catch {
      cells = null; // tainted canvas or decode failure: abstract mark
    }
  }

  if (cells && lumc) {
    // Two-tone marks would fill as one blob: keep a one-grain gap where two parts meet at a clear tone step.
    const edges: number[] = [];
    let area = 0;
    for (let i = 0; i < gw * gh; i++) if (cells[i]) area++;
    for (let i = gw; i < gw * gh - 2 * gw - 2; i++) {
      if (!cells[i]) continue;
      if (cells[i + 2] && Math.abs(lumc[i + 2]! - lumc[i]!) > 30) edges.push(i + 1);
      if (cells[i + 2 * gw] && Math.abs(lumc[i + 2 * gw]! - lumc[i]!) > 30) edges.push(i + gw);
    }
    if (edges.length < area * 0.06) for (const i of edges) cells[i] = 0;
  }

  if (!cells) {
    // Abstract fallback: a ring around a disc.
    cells = new Uint8Array(gw * gh);
    const R = Math.min(bw, bh) * 0.47, cx = box.cx * gw, cy = box.cy * gh;
    for (let y = 2; y < gh - 2; y++)
      for (let x = 2; x < gw - 2; x++) {
        const r = Math.hypot(x + 0.5 - cx, y + 0.5 - cy);
        if ((r > R * 0.78 && r < R) || r < R * 0.44) cells[y * gw + x] = 1;
      }
  }

  const inside = cells;
  let minX = gw, maxX = 0, minY = gh, maxY = 0, capacity = 0;
  const list: number[] = [];
  const rows: number[] = [];
  for (let y = gh - 1; y >= 0; y--) {
    const start = list.length;
    for (let x = 0; x < gw; x++) {
      const i = y * gw + x;
      if (!inside[i]) continue;
      list.push(i);
      capacity++;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
    if (list.length > start) rows.push(start, list.length);
  }
  const colStart = new Int32Array(gw + 1);
  const colYs: number[] = [];
  for (let x = 0; x < gw; x++) {
    colStart[x] = colYs.length;
    for (let y = gh - 1; y >= 0; y--) if (inside[y * gw + x]) colYs.push(y);
  }
  colStart[gw] = colYs.length;
  const edges: number[] = [];
  for (const i of list) {
    if (!inside[i - 1] || !inside[i + 1] || !inside[i - gw] || !inside[i + gw]) edges.push(i);
  }
  return {
    key, gw, gh, inside,
    list: Int32Array.from(list), rows: Int32Array.from(rows),
    colStart, colYs: Int32Array.from(colYs), edges: Int32Array.from(edges),
    capacity, minX, maxX, minY, maxY,
  };
}

// ---------------------------------------------------------------- simulation

type State = {
  t: number;
  seed: number;
  grid: Uint8Array;
  colEmpty: Int32Array;
  colPending: Int32Array;
  filled: number;
  pending: number;
  nf: number;
  fx: Float32Array;
  fy: Float32Array;
  fvx: Float32Array;
  fvy: Float32Array;
  ftone: Uint8Array;
  ftarget: Int16Array;
  fbounce: Uint8Array;
};

type Sim = { mold: Mold; strata: boolean; st: State; checkpoints: Map<number, State> };

const SIMS = new Map<string, Sim>();

function freshState(mold: Mold): State {
  const colEmpty = new Int32Array(mold.gw);
  for (let x = 0; x < mold.gw; x++) colEmpty[x] = mold.colStart[x + 1]! - mold.colStart[x]!;
  return {
    t: -1,
    seed: hashString(`sand-${mold.key}`),
    grid: new Uint8Array(mold.gw * mold.gh),
    colEmpty,
    colPending: new Int32Array(mold.gw),
    filled: 0,
    pending: 0,
    nf: 0,
    fx: new Float32Array(MAXF),
    fy: new Float32Array(MAXF),
    fvx: new Float32Array(MAXF),
    fvy: new Float32Array(MAXF),
    ftone: new Uint8Array(MAXF),
    ftarget: new Int16Array(MAXF),
    fbounce: new Uint8Array(MAXF),
  };
}

function cloneState(s: State): State {
  return {
    t: s.t, seed: s.seed, filled: s.filled, pending: s.pending, nf: s.nf,
    grid: s.grid.slice(), colEmpty: s.colEmpty.slice(), colPending: s.colPending.slice(),
    fx: s.fx.slice(), fy: s.fy.slice(), fvx: s.fvx.slice(), fvy: s.fvy.slice(),
    ftone: s.ftone.slice(), ftarget: s.ftarget.slice(), fbounce: s.fbounce.slice(),
  };
}

/** Spray half-width (cells) around the nozzle: a thin stream that fans wide, then tapers back. */
function spreadAt(t: number, half: number): number {
  return 1.5 + (half + 8) * smooth((t - 8) / 30) * (1 - 0.92 * smooth((t - T_EMIT_END + 4) / 14));
}

function step(sim: Sim) {
  const { mold, strata } = sim;
  const s = sim.st;
  const t = s.t + 1;
  const { gw, gh, inside, colStart, colYs } = mold;
  const { grid, colEmpty, colPending, fx, fy, fvx, fvy, ftone, ftarget, fbounce } = s;
  let seed = s.seed;
  const R = () => {
    seed = (seed + 0x6d2b79f5) >>> 0;
    let q = seed;
    q = Math.imul(q ^ (q >>> 15), q | 1);
    q ^= q + Math.imul(q ^ (q >>> 7), q | 61);
    return ((q ^ (q >>> 14)) >>> 0) / 4294967296;
  };

  const G = G0 * Math.max(1, gh / SHORT);
  const half = (mold.maxX - mold.minX + 1) / 2;
  const lcx = (mold.minX + mold.maxX + 1) / 2;
  const nx = gw / 2 + Math.sin(t * 0.07) * 1.2;
  const sp = spreadAt(t, half);

  // ---------- emission ----------
  let nIn = 0;
  let nDecor = 0;
  if (t >= T_POUR && t <= T_LATE) {
    const rem = mold.capacity - s.filled - s.pending;
    const left = Math.max(4, T_EMIT_END - t);
    const cap = 1.5 + 0.4 * (t - T_POUR) * (t - T_POUR);
    nIn = Math.min(Math.ceil(Math.max(0, rem) / left), cap, 1200);
    if (t > T_EMIT_END) nIn = Math.min(nIn, 60);
    nDecor = Math.round(nIn * 0.06 + (t < 24 ? 2 : 0));
  }
  if (t > T_EMIT_END && t < T_EMIT_END + 20) nDecor += Math.round(6 * (1 - (t - T_EMIT_END) / 20));

  if (nIn > 0) {
    // Target columns weighted by their free capacity inside the current spray window.
    const x0 = mold.minX, x1 = mold.maxX;
    const cum = new Float64Array(x1 - x0 + 2);
    let wsum = 0;
    for (let x = x0; x <= x1; x++) {
      const free = colEmpty[x]! - colPending[x]!;
      let w = 0;
      if (free > 0) {
        const dx = Math.abs(x + 0.5 - nx) - sp;
        w = free * (dx <= 0 ? 1 : Math.exp(-(dx * dx) / 36));
      }
      wsum += w;
      cum[x - x0 + 1] = wsum;
    }
    if (wsum <= 1e-6) {
      nDecor += nIn;
    } else {
      for (let k = 0; k < nIn && s.nf < MAXF; k++) {
        const u = R() * wsum;
        let lo = 0, hi = x1 - x0;
        while (lo < hi) {
          const mid = (lo + hi) >> 1;
          if (cum[mid + 1]! < u) lo = mid + 1;
          else hi = mid;
        }
        const tx = x0 + lo;
        // Aim at the lowest empty cell in that column (the grain lands on whatever it meets first).
        let aimY = mold.minY;
        for (let j = colStart[tx]!; j < colStart[tx + 1]!; j++) {
          const y = colYs[j]!;
          if (!grid[y * gw + tx]) { aimY = y; break; }
        }
        launch(tx + 0.2 + R() * 0.6, aimY, tx);
      }
    }
  }
  for (let k = 0; k < nDecor && s.nf < MAXF; k++) {
    const reach = Math.min(sp * 1.3 + 2, half * 1.6 + 6);
    const tx = nx + (R() * 2 - 1) * reach;
    launch(tx, mold.maxY, -1);
  }

  function launch(tx: number, aimY: number, target: number) {
    const i = s.nf++;
    const x0 = nx + (R() - 0.5) * 1.4;
    const y0 = -6 - R() * 6;
    const vy0 = 0.25 + R() * 0.5;
    const dy = Math.max(4, aimY - y0);
    const tf = (-vy0 + Math.sqrt(vy0 * vy0 + 2 * G * dy)) / G;
    fx[i] = x0;
    fy[i] = y0;
    fvx[i] = (tx - x0) / tf + (R() - 0.5) * 0.04;
    fvy[i] = vy0;
    let band: number;
    if (R() < 0.022) band = 7;
    else if (strata) band = bandAt(t - T_POUR + (R() - 0.5) * 2.2);
    else band = R() < 0.5 ? 0 : R() < 0.5 ? 1 : 2;
    ftone[i] = 1 + band * 32 + Math.floor(R() * 31.99);
    ftarget[i] = target;
    fbounce[i] = 0;
    if (target >= 0) { colPending[target]!++; s.pending++; }
  }

  // ---------- flight ----------
  let w = 0;
  let landed = 0;
  for (let i = 0; i < s.nf; i++) {
    let x = fx[i]!, y = fy[i]!, vx = fvx[i]!, vy = fvy[i]! + G;
    vx *= 0.998;
    const n = Math.max(1, Math.ceil(Math.max(Math.abs(vx), Math.abs(vy))));
    const sx = vx / n, sy = vy / n;
    let dead = false, land = false;
    for (let k = 0; k < n; k++) {
      const px = x, py = y;
      x += sx;
      y += sy;
      if (y < 0) continue;
      const cx = Math.floor(x), cy = Math.floor(y);
      if (cy >= gh + 3 || cx < -6 || cx >= gw + 6) { dead = true; break; }
      if (cx < 0 || cx >= gw || cy >= gh) continue;
      const c = cy * gw + cx;
      if (!inside[c]) continue;
      if (!grid[c]) {
        const b = c + gw;
        if (cy + 1 >= gh || !inside[b] || grid[b]) {
          grid[c] = ftone[i]!;
          colEmpty[cx]!--;
          s.filled++;
          landed++;
          land = true;
          break;
        }
      } else if (!fbounce[i] && colEmpty[cx] === 0 && R() < 0.6) {
        // The mold is full here: the grain kicks off the surface and spills over the edge.
        x = px;
        y = py;
        const dir = x < lcx ? -1 : 1;
        vy = -Math.abs(vy) * (0.1 + 0.12 * R());
        vx = vx * 0.3 + dir * (0.35 + 1.1 * R());
        fbounce[i] = 1;
        const tg = ftarget[i]!;
        if (tg >= 0) { colPending[tg]!--; s.pending--; ftarget[i] = -1; }
        break;
      }
    }
    if (dead || land) {
      const tg = ftarget[i]!;
      if (tg >= 0) { colPending[tg]!--; s.pending--; }
      continue;
    }
    fx[w] = x; fy[w] = y; fvx[w] = vx; fvy[w] = vy;
    ftone[w] = ftone[i]!; ftarget[w] = ftarget[i]!; fbounce[w] = fbounce[i]!;
    w++;
  }
  s.nf = w;

  // ---------- settling (cellular automaton inside the mold) ----------
  const { list, rows } = mold;
  const passes = t < T_LATE + 30 || landed > 0 ? 2 : 0;
  for (let p = 0; p < passes; p++) {
    let moved = 0;
    const rev = (t + p) & 1;
    for (let r = 0; r < rows.length; r += 2) {
      const a = rows[r]!, b = rows[r + 1]!;
      for (let k = 0; k < b - a; k++) {
        const c = list[rev ? b - 1 - k : a + k]!;
        const v = grid[c]!;
        if (!v) continue;
        const below = c + gw;
        if (inside[below] && !grid[below]) {
          grid[below] = v;
          grid[c] = 0;
          moved++;
          continue;
        }
        if (R() > 0.7) continue;
        const d = R() < 0.5 ? -1 : 1;
        const c1 = below + d, c2 = below - d;
        let to = -1;
        if (inside[c1] && !grid[c1]) to = c1;
        else if (inside[c2] && !grid[c2]) to = c2;
        if (to < 0) continue;
        grid[to] = v;
        grid[c] = 0;
        const x = c % gw;
        colEmpty[x]!++;
        colEmpty[x + (to - below)]!--;
        moved++;
      }
    }
    if (!moved) break;
  }

  // ---------- late fill: any grain the spray never reached settles in quietly ----------
  if (t >= 112 && t < 150 && s.filled < mold.capacity) {
    let budget = 60;
    for (let k = 0; k < list.length && budget > 0; k++) {
      const c = list[k]!;
      if (grid[c]) continue;
      const b = c + gw;
      if (inside[b] && !grid[b]) continue;
      const band = strata ? bandAt(t - T_POUR) : 0;
      grid[c] = 1 + band * 32 + Math.floor(R() * 31.99);
      colEmpty[c % gw]!--;
      s.filled++;
      budget--;
    }
  }

  s.seed = seed;
  s.t = t;
}

function getState(key: string, mold: Mold, strata: boolean, frame: number): State {
  let sim = SIMS.get(key);
  if (!sim) {
    if (SIMS.size > 6) SIMS.clear();
    sim = { mold, strata, st: freshState(mold), checkpoints: new Map() };
    SIMS.set(key, sim);
  }
  if (sim.st.t > frame) {
    let best: State | null = null;
    for (const [t, cp] of sim.checkpoints) if (t <= frame && (!best || t > best.t)) best = cp;
    sim.st = best ? cloneState(best) : freshState(mold);
  }
  while (sim.st.t < frame) {
    step(sim);
    if (sim.st.t % CHECKPOINT === 0 && !sim.checkpoints.has(sim.st.t)) sim.checkpoints.set(sim.st.t, cloneState(sim.st));
  }
  return sim.st;
}

// ---------------------------------------------------------------- palette

/** 256-entry grain palette: 7 strata bands x 32 jitters, plus a band of bright sparkle grains. */
function buildLut(P: RGB, Q: RGB, T: RGB, B: RGB, dark: boolean): Float32Array {
  const bands: RGB[] = dark
    ? [P, mix(P, T, 0.35), Q, mix(T, P, 0.15), mix(P, B, 0.3), mix(Q, T, 0.3), P]
    : [P, mix(P, B, 0.4), Q, mix(T, P, 0.3), mix(P, T, 0.25), mix(Q, B, 0.35), P];
  const sparkle = dark ? mix(T, HI, 0.45) : mix(P, HI, 0.75);
  const lut = new Float32Array(256 * 3);
  for (let v = 1; v < 256; v++) {
    const band = (v - 1) >> 5, j = ((v - 1) & 31) / 31;
    const base = band === 7 ? sparkle : bands[band]!;
    const next = band === 7 ? sparkle : bands[(band + 1) % 7]!;
    const f = 0.86 + 0.26 * j;
    const c = mix(base, next, (1 - j) * 0.08);
    lut[v * 3] = c[0] * f;
    lut[v * 3 + 1] = c[1] * f;
    lut[v * 3 + 2] = c[2] * f;
  }
  return lut;
}

// ---------------------------------------------------------------- render

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("logo failed"));
    img.src = src;
  });
}

/**
 * Sand Logo: a thin stream of sand pours from the top center, fans into a wide spray and
 * piles up only inside the logo's silhouette (a falling-sand automaton with the logo as
 * the mold). Grains that miss or kick off full surfaces drain out of frame. The colors
 * pour in layers like a sand-art bottle; a shimmer sweeps the settled mark and a few
 * grains keep glinting while the clip holds.
 */
export const Component: React.FC<Props> = ({ logo, caption, primary, secondary, color, background, strata, grain, fontFamily }) => {
  const frame = useCurrentFrame();
  const { width: w, height: h, aspect, portrait } = useLayout();
  const S = Math.min(w, h);
  const transparent = background === "transparent";
  const ink = rgbOf(color);
  const dark = transparent ? lum(ink) > 0.4 : lum(rgbOf(background, [0, 0, 0])) < 0.4;
  const hasCaption = caption.trim().length > 0;
  const font = brandFontStack(fontFamily);

  const cell = S / SHORT;
  const gw = Math.max(16, Math.round(w / cell));
  const gh = Math.max(16, Math.round(h / cell));

  const [asset, setAsset] = useState<{ img: HTMLImageElement | null } | null>(null);
  const [handle] = useState(() => delayRender("sand-logo-settle logo and fonts", { timeoutInMilliseconds: 60000 }));
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

  const box = logoBox(aspect, hasCaption);
  const mold = useMemo(() => {
    if (!asset) return null;
    const key = `${hashString(logo)}-${aspect}-${gw}x${gh}-${hasCaption ? 1 : 0}`;
    return buildMold(asset.img, gw, gh, box, key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asset, logo, aspect, gw, gh, hasCaption]);

  const sandRef = useRef<HTMLCanvasElement>(null);
  const lightRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLCanvasElement | null>(null);
  const tintRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<ImageData | null>(null);
  const lw = Math.max(2, Math.round(w / 2)), lh = Math.max(2, Math.round(h / 2));

  useLayoutEffect(() => {
    const sctx = sandRef.current?.getContext("2d", { willReadFrequently: true });
    const lctx = lightRef.current?.getContext("2d", { willReadFrequently: true });
    if (!sctx || !lctx || !mold) return;
    const st = getState(`${mold.key}|${strata ? 1 : 0}`, mold, strata, frame);
    const { grid } = st;
    const { inside, minX, maxX, minY, maxY } = mold;
    const P = rgbOf(primary), Q = rgbOf(secondary), BG = rgbOf(background, dark ? [0, 0, 0] : [255, 255, 255]);
    const lut = buildLut(P, Q, ink, BG, dark);
    const fillFrac = st.filled / Math.max(1, mold.capacity);

    // ---------- sand layer: 2x2 pixels per grain, lit from the top left ----------
    const W2 = gw * 2, H2 = gh * 2;
    if (!imgRef.current || imgRef.current.width !== W2 || imgRef.current.height !== H2) imgRef.current = sctx.createImageData(W2, H2);
    const id = imgRef.current;
    const px = new Uint32Array(id.data.buffer);
    px.fill(0);
    const pack = (r: number, g: number, b: number, a = 255) =>
      (((a & 255) << 24) | ((Math.max(0, Math.min(255, b)) & 255) << 16) | ((Math.max(0, Math.min(255, g)) & 255) << 8) | (Math.max(0, Math.min(255, r)) & 255)) >>> 0;

    const shimT = (frame - SHIMMER[0]) / (SHIMMER[1] - SHIMMER[0]);
    const shimOn = shimT > -0.1 && shimT < 1.1;
    const shimPos = -0.25 + 1.6 * shimT;
    const settled = smooth((frame - SHIMMER[0]) / 20);
    const iw = 1 / Math.max(1, maxX - minX), ih = 1 / Math.max(1, maxY - minY);
    const depth = new Uint8Array(gw);
    for (let y = Math.max(0, minY - 1); y <= Math.min(gh - 1, maxY + 1); y++) {
      for (let x = Math.max(0, minX - 1); x <= Math.min(gw - 1, maxX + 1); x++) {
        const c = y * gw + x;
        const v = grid[c]!;
        if (!v) { depth[x] = 0; continue; }
        const above = depth[x]!;
        depth[x] = Math.min(250, above + 1);
        const top = above === 0;
        const leftOpen = !grid[c - 1];
        const rightOpen = !grid[c + 1];
        const lit = 1.1 - 0.04 * Math.min(above, 6);
        let r = lut[v * 3]!, g = lut[v * 3 + 1]!, b = lut[v * 3 + 2]!;
        const hsh = (Math.imul(c, 2654435761) >>> 0) / 4294967296;
        // Glints: sparkle grains twinkle, and a few ordinary grains catch the light while the clip holds.
        let glint = 0;
        if (v > 224) glint = 0.25 + 0.35 * (0.5 + 0.5 * Math.sin(frame * 0.23 + hsh * TAU * 5));
        else if (hsh < 0.012) glint = settled * 0.7 * Math.pow(Math.max(0, Math.sin(frame * 0.11 + hsh * 900)), 10);
        if (shimOn) {
          const u = (x - minX) * iw * 0.8 + (y - minY) * ih * 0.35;
          const dd = (u - shimPos) / 0.07;
          glint += 0.5 * Math.exp(-dd * dd);
        }
        if (glint > 0) {
          const gl = Math.min(0.85, glint);
          r += (255 - r) * gl; g += (255 - g) * gl; b += (255 - b) * gl;
        }
        const h2 = (Math.imul(c ^ 0x5bd1e995, 1540483477) >>> 0) / 4294967296;
        const h3 = (Math.imul(c + 7919, 2246822519) >>> 0) / 4294967296;
        const fTL = lit * (top ? 1.22 : 1.06) * (leftOpen ? 1.08 : 1) * (0.94 + 0.12 * hsh);
        const fTR = lit * (top ? 1.12 : 1) * (0.9 + 0.14 * h2);
        const fBL = lit * 0.93 * (leftOpen ? 1.04 : 1) * (0.9 + 0.14 * h3);
        const fBR = lit * (0.8 + 0.1 * h2) * (rightOpen ? 0.9 : 1);
        const o = y * 2 * W2 + x * 2;
        px[o] = pack(r * fTL, g * fTL, b * fTL);
        px[o + 1] = pack(r * fTR, g * fTR, b * fTR);
        px[o + W2] = pack(r * fBL, g * fBL, b * fBL);
        px[o + W2 + 1] = pack(r * fBR, g * fBR, b * fBR);
      }
    }

    // Dotted mold outline: shows where the sand will go, then disappears under it.
    const guideA = smooth(frame / 14) * (1 - smooth((frame - 100) / 30)) * (dark ? 0.5 : 0.55);
    if (guideA > 0.01) {
      const ga = Math.round(guideA * 255);
      const gc = pack(ink[0], ink[1], ink[2], ga);
      for (let k = 0; k < mold.edges.length; k++) {
        const c = mold.edges[k]!;
        if (grid[c]) continue;
        const x = c % gw, y = (c - x) / gw;
        if ((x + y) % 3 !== 0) continue;
        const o = y * 2 * W2 + x * 2;
        px[o] = gc; px[o + 1] = gc; px[o + W2] = gc; px[o + W2 + 1] = gc;
      }
    }

    // Grains in flight: short motion streaks.
    const d8 = id.data;
    const blend = (xi: number, yi: number, r: number, g: number, b: number, a: number) => {
      if (xi < 0 || yi < 0 || xi >= W2 || yi >= H2 || a <= 0) return;
      const o = (yi * W2 + xi) * 4;
      const da = d8[o + 3]! / 255;
      const oa = a + da * (1 - a);
      if (oa <= 0) return;
      const k = da * (1 - a);
      d8[o] = (r * a + d8[o]! * k) / oa;
      d8[o + 1] = (g * a + d8[o + 1]! * k) / oa;
      d8[o + 2] = (b * a + d8[o + 2]! * k) / oa;
      d8[o + 3] = oa * 255;
    };
    const flightA = 1 - smooth((frame - 138) / 16);
    for (let i = 0; i < (flightA > 0 ? st.nf : 0); i++) {
      const x = st.fx[i]! * 2, y = st.fy[i]! * 2;
      if (y < -2) continue;
      const vx = st.fvx[i]!, vy = st.fvy[i]!;
      const sp = Math.hypot(vx, vy) || 1;
      const v = st.ftone[i]!;
      const r = Math.min(255, lut[v * 3]! * 1.08), g = Math.min(255, lut[v * 3 + 1]! * 1.08), b = Math.min(255, lut[v * 3 + 2]! * 1.08);
      const len = Math.min(9, 1 + sp * 1.1);
      const ux = -vx / sp, uy = -vy / sp;
      const hx = Math.floor(x), hy = Math.floor(y);
      blend(hx, hy, r, g, b, flightA);
      blend(hx + 1, hy, r, g, b, 0.85 * flightA);
      blend(hx, hy + 1, r * 0.85, g * 0.85, b * 0.85, 0.85 * flightA);
      for (let k = 1; k <= len; k++) blend(Math.floor(x + ux * k), Math.floor(y + uy * k), r, g, b, 0.75 * flightA * (1 - k / (len + 1)));
    }
    sctx.putImageData(id, 0, 0);

    // ---------- light layer (half res): backdrop, light field, glow of the sand ----------
    if (!glowRef.current) glowRef.current = document.createElement("canvas");
    if (!tintRef.current) tintRef.current = document.createElement("canvas");
    const glow = glowRef.current, tint = tintRef.current;
    if (glow.width !== gw || glow.height !== gh) { glow.width = gw; glow.height = gh; }
    if (tint.width !== gw || tint.height !== gh) { tint.width = gw; tint.height = gh; }
    const gctx = glow.getContext("2d", { willReadFrequently: true })!;
    gctx.setTransform(1, 0, 0, 1, 0, 0);
    gctx.filter = "none";
    gctx.globalCompositeOperation = "source-over";
    gctx.clearRect(0, 0, gw, gh);
    gctx.filter = `blur(${Math.max(2, Math.round(SHORT * 0.018))}px)`;
    gctx.drawImage(sandRef.current!, 0, 0, gw, gh);
    gctx.filter = "none";

    lctx.setTransform(1, 0, 0, 1, 0, 0);
    lctx.globalAlpha = 1;
    lctx.filter = "none";
    lctx.globalCompositeOperation = "source-over";
    lctx.clearRect(0, 0, lw, lh);
    const pour = smooth((frame - T_POUR) / 10) * (1 - smooth((frame - T_EMIT_END) / 24));
    const breathe = 0.5 + 0.5 * Math.sin(frame * 0.045);
    const lcxp = (box.cx) * lw, lcyp = (box.cy) * lh;
    const R0 = Math.max(lw, lh);
    if (!transparent) {
      lctx.fillStyle = background;
      lctx.fillRect(0, 0, lw, lh);
      // Warm shaft of light along the pour.
      lctx.save();
      lctx.translate(lw / 2, 0);
      lctx.scale(portrait ? 0.55 : 0.32, 1);
      const shaft = lctx.createRadialGradient(0, 0, 0, 0, 0, lh * 1.05);
      shaft.addColorStop(0, css(P, (dark ? 0.26 : 0.16) * (0.35 + 0.65 * pour)));
      shaft.addColorStop(0.5, css(P, (dark ? 0.07 : 0.05) * (0.35 + 0.65 * pour)));
      shaft.addColorStop(1, css(P, 0));
      lctx.fillStyle = shaft;
      lctx.fillRect(-lw * 2, 0, lw * 4, lh);
      lctx.restore();
      // Soft light field that grows with the pile.
      const aura = lctx.createRadialGradient(lcxp, lcyp, 0, lcxp, lcyp, R0 * 0.62);
      const ac = mix(P, Q, 0.4);
      const amt = (dark ? 0.2 : 0.12) * (0.3 + 0.7 * fillFrac) * (0.88 + 0.12 * breathe);
      aura.addColorStop(0, css(ac, amt));
      aura.addColorStop(0.45, css(Q, amt * 0.4));
      aura.addColorStop(1, css(Q, 0));
      lctx.fillStyle = aura;
      lctx.fillRect(0, 0, lw, lh);
      // Floor bounce light.
      const fl = lctx.createRadialGradient(lw / 2, lh * 1.08, 0, lw / 2, lh * 1.08, R0 * 0.7);
      fl.addColorStop(0, css(Q, dark ? 0.16 : 0.1));
      fl.addColorStop(1, css(Q, 0));
      lctx.fillStyle = fl;
      lctx.fillRect(0, 0, lw, lh);
    }
    if (dark) {
      lctx.globalCompositeOperation = "lighter";
      lctx.globalAlpha = 0.5 + 0.12 * breathe * fillFrac;
      lctx.drawImage(glow, 0, 0, lw, lh);
    } else {
      // Light brands: the pile casts a soft tinted shadow instead of glowing.
      const tctx = tint.getContext("2d", { willReadFrequently: true })!;
      tctx.globalCompositeOperation = "source-over";
      tctx.clearRect(0, 0, gw, gh);
      tctx.drawImage(glow, 0, 0);
      tctx.globalCompositeOperation = "source-in";
      tctx.fillStyle = css(mix(ink, P, 0.3));
      tctx.fillRect(0, 0, gw, gh);
      tctx.globalCompositeOperation = "source-over";
      lctx.globalAlpha = 0.22;
      lctx.drawImage(tint, 0, lh * 0.012, lw, lh);
      lctx.globalAlpha = 0.35;
      lctx.globalCompositeOperation = "multiply";
      lctx.drawImage(glow, 0, lh * 0.006, lw, lh);
    }
    lctx.globalAlpha = 1;
    lctx.globalCompositeOperation = "source-over";
    if (!transparent) {
      const v = lctx.createRadialGradient(lw / 2, lh * 0.48, Math.min(lw, lh) * 0.35, lw / 2, lh * 0.48, Math.hypot(lw, lh) * 0.62);
      v.addColorStop(0, css(dark ? mix(BG, LO, 0.4) : mix(BG, ink, 0.08), 0));
      v.addColorStop(1, css(dark ? mix(BG, LO, 0.4) : mix(BG, ink, 0.08), dark ? 0.7 : 0.5));
      lctx.fillStyle = v;
      lctx.fillRect(0, 0, lw, lh);
    }
  }, [frame, mold, strata, gw, gh, lw, lh, primary, secondary, background, transparent, dark, ink, portrait, box.cx, box.cy]);

  // ---------- caption ----------
  const capW = w * (portrait ? 0.84 : aspect === "1:1" ? 0.8 : 0.62);
  const capSize = hasCaption
    ? Math.max(
        h * (portrait ? 0.031 : 0.022),
        fitFontSize({ chars: caption.length, boxW: capW, boxH: h * (portrait ? 0.1 : 0.08), lines: portrait ? 2 : 1, charEm: 0.56, lineHeight: 1.25, max: aspect === "16:9" ? h * 0.044 : aspect === "1:1" ? h * 0.042 : h * 0.04 }),
      )
    : 0;
  const capTop = mold
    ? portrait
      ? Math.max((mold.maxY + 1) * cell + h * 0.05, h * 0.7)
      : (mold.maxY + 1) * cell + h * 0.055
    : (box.cy + box.bh / 2) * h;
  const words = caption.split(/\s+/).filter(Boolean);
  let ci = 0;

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <canvas ref={lightRef} width={lw} height={lh} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      <AbsoluteFill data-21st-slot="logo">
        <canvas ref={sandRef} width={gw * 2} height={gh * 2} style={{ position: "absolute", left: 0, top: 0, width: gw * cell, height: gh * cell, display: "block", imageRendering: "pixelated" }} />
      </AbsoluteFill>
      {hasCaption && mold ? (
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
            letterSpacing: "0.03em",
            color,
            whiteSpace: "normal",
            overflowWrap: "anywhere",
          }}
        >
          {words.map((word, wi) => (
            <React.Fragment key={wi}>
              {wi > 0 ? " " : null}
              <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                {Array.from(word).map((ch, k) => {
                  const idx = ci++;
                  // Letters trickle in one by one, like the last grains settling.
                  const dl = Math.min(idx * 1.2, 12);
                  const p = easeOut(ramp(frame, [130 + dl, 146 + dl], [0, 1]));
                  return (
                    <span
                      key={k}
                      style={{
                        display: "inline-block",
                        opacity: p,
                        transform: p < 1 ? `translateY(${(-(1 - p) * S * 0.03).toFixed(2)}px)` : undefined,
                        filter: p < 1 ? `blur(${((1 - p) * S * 0.004).toFixed(2)}px)` : undefined,
                      }}
                    >
                      {ch}
                    </span>
                  );
                })}
              </span>
            </React.Fragment>
          ))}
        </div>
      ) : null}
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.08 : 0.1, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
