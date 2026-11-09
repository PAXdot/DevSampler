// Built with Remotion - https://remotion.pro/license
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, Img, continueRender, delayRender, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, easeInOut, easeOut, ramp, springSnap, useLayout, withAlpha } from "../../../kit/index";
import type { Aspect } from "../../../kit/spec";
import { rng, simplex3 } from "../_lib/noise";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./reaction-diffusion-bloom.schema";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];

/** Pattern layer resolution relative to the frame. Ridges are thresholded per pixel, so 0.5 keeps them crisp. */
const SCALE = 0.5;
/** Simulation grid per aspect: about 7.5 px per cell at 1080p, so one ridge is ~5 cells wide. */
const GRID: Record<Aspect, [number, number]> = { "16:9": [256, 144], "9:16": [144, 256], "1:1": [184, 184] };
/** Gray-Scott feed / kill per regime (Pearson classes): parallel ridges vs maze-and-spots. */
const REGIME = {
  fingerprint: { f: [0.025, 0.027], k: [0.055, 0.056] },
  labyrinth: { f: [0.029, 0.031], k: [0.057, 0.0575] },
} as const;
const DU = 0.8;
const DV = 0.4;
const SNAP_EVERY = 6;
/** Natural ridge spacing (cells) of both regimes; the settled rings are locked to it. */
const LAMBDA = 13;
/** Inner ring center, cells beyond the clean gap around the logo. */
const RING0 = 2.5;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='19' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

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
const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (a: number, b: number, x: number) => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};

// ---------------------------------------------------------------- timeline
/** Simulation steps run during frame f (an eased rate, so growth starts gently and the ring settles). */
function rate(f: number): number {
  if (f < 22) return 5;
  if (f < 44) return 5 + 55 * easeInOut((f - 22) / 22);
  if (f < 168) return 60;
  if (f < 196) return 60 - 52 * easeInOut((f - 168) / 28);
  return 8;
}
/** Seed sweep: the chemical line traces the outline from the top down both sides. */
const sweepAt = (f: number) => (f < 2 ? -1 : easeInOut(clamp01((f - 2) / 20)) * 1.001);
/** Outer kill radius in cells (Infinity while growing). */
/** Strength of the concentric feed modulation that combs the surviving ridges into contour rings. */
const forceAt = (f: number) => 0.005 * smooth(116, 160, f);
function reachAt(f: number, rMax: number, rRing: number): number {
  if (f < 120) return Infinity;
  return rRing + (rMax - rRing) * (1 - easeInOut(clamp01((f - 120) / 56)));
}

// ---------------------------------------------------------------- field setup
type Field = {
  gw: number;
  gh: number;
  /** Distance (cells) from the logo silhouette, 0 inside it. */
  dist: Float32Array;
  /** Organic wobble added to the distance for the receding edge. */
  wob: Float32Array;
  /** Seed phase 0..1 for outline cells, -1 elsewhere. */
  seed: Float32Array;
  F: Float32Array;
  /** cos() of the distance in ridge periods: the contour-ring template. */
  ring: Float32Array;
  K: Float32Array;
  gap: number;
  rRing: number;
  rMax: number;
  key: string;
};

function buildField(mask: Uint8Array, gw: number, gh: number, pattern: Props["pattern"], gap: number, rRing: number, key: string): Field {
  const n = gw * gh;
  const dist = new Float32Array(n);
  const BIG = 1e6;
  for (let i = 0; i < n; i++) dist[i] = mask[i] ? 0 : BIG;
  const D1 = 1, D2 = Math.SQRT2;
  for (let y = 0; y < gh; y++)
    for (let x = 0; x < gw; x++) {
      const i = y * gw + x;
      let d = dist[i]!;
      if (x > 0) d = Math.min(d, dist[i - 1]! + D1);
      if (y > 0) {
        d = Math.min(d, dist[i - gw]! + D1);
        if (x > 0) d = Math.min(d, dist[i - gw - 1]! + D2);
        if (x < gw - 1) d = Math.min(d, dist[i - gw + 1]! + D2);
      }
      dist[i] = d;
    }
  for (let y = gh - 1; y >= 0; y--)
    for (let x = gw - 1; x >= 0; x--) {
      const i = y * gw + x;
      let d = dist[i]!;
      if (x < gw - 1) d = Math.min(d, dist[i + 1]! + D1);
      if (y < gh - 1) {
        d = Math.min(d, dist[i + gw]! + D1);
        if (x < gw - 1) d = Math.min(d, dist[i + gw + 1]! + D2);
        if (x > 0) d = Math.min(d, dist[i + gw - 1]! + D2);
      }
      dist[i] = d;
    }
  // Silhouette centroid: the seed line sweeps around it.
  let sx = 0, sy = 0, sc = 0;
  for (let y = 0; y < gh; y++) for (let x = 0; x < gw; x++) if (mask[y * gw + x]) { sx += x; sy += y; sc++; }
  const cx = sc ? sx / sc : gw / 2, cy = sc ? sy / sc : gh / 2;
  const seed = new Float32Array(n).fill(-1);
  const F = new Float32Array(n), K = new Float32Array(n), wob = new Float32Array(n), ring = new Float32Array(n);
  const nz = simplex3("rd-bloom-params");
  const nw = simplex3("rd-bloom-wobble");
  const R = REGIME[pattern];
  let rMax = 0;
  for (let y = 0; y < gh; y++)
    for (let x = 0; x < gw; x++) {
      const i = y * gw + x;
      const d = dist[i]!;
      if (d >= gap && d < gap + 4) seed[i] = Math.abs(Math.atan2(x - cx, -(y - cy))) / Math.PI;
      // Low-frequency drift of feed/kill so the pattern changes character across the frame.
      const t = 0.5 + 0.5 * nz(x * 0.021, y * 0.021, 0.3);
      F[i] = R.f[0] + (R.f[1] - R.f[0]) * t;
      K[i] = R.k[0] + (R.k[1] - R.k[0]) * t;
      wob[i] = 1.6 * nw(x * 0.05, y * 0.05, 1.7) + 0.6 * nw(x * 0.15, y * 0.15, 4.1);
      ring[i] = Math.cos((2 * Math.PI * (d - gap - RING0)) / LAMBDA);
      if (d < BIG) rMax = Math.max(rMax, d);
    }
  return { gw, gh, dist, wob, seed, F, K, ring, gap, rRing, rMax: rMax + 8, key };
}

// ---------------------------------------------------------------- simulation (memoized replay)
type State = { frame: number; U: Float32Array; V: Float32Array; A: Float32Array };
type Sim = { live: State; snaps: Map<number, State>; key: string; U2: Float32Array; V2: Float32Array; kill: Float32Array };
const SIMS = new Map<string, Sim>();

const cloneState = (s: State): State => ({ frame: s.frame, U: s.U.slice(), V: s.V.slice(), A: s.A.slice() });

function initState(fd: Field): State {
  const n = fd.gw * fd.gh;
  const U = new Float32Array(n).fill(1);
  const V = new Float32Array(n);
  const A = new Float32Array(n).fill(1e6);
  return { frame: -1, U, V, A };
}

/** Advance the state by one video frame (frame f's injection + rate(f) RD steps). */
function advance(sim: Sim, fd: Field, f: number) {
  const { gw, gh, dist, seed, F, K, wob, gap, ring } = fd;
  const force = forceAt(f);
  const s = sim.live;
  let U = s.U, V = s.V;
  let U2 = sim.U2, V2 = sim.V2;
  const n = gw * gh;
  // Seed injection: outline cells the sweep crossed this frame get a dose of V.
  const a = sweepAt(f - 1), b = sweepAt(f);
  if (b > a) {
    const r = rng(`rd-seed-${f}`);
    for (let i = 0; i < n; i++) {
      const p = seed[i]!;
      if (p > a && p <= b) {
        U[i] = 0.5;
        V[i] = 0.25 + 0.1 * r();
      }
    }
  }
  // Kill field for this frame: interior of the logo is held clean, outside the reach recedes.
  const reach = reachAt(f, fd.rMax, fd.rRing);
  const kill = sim.kill;
  for (let i = 0; i < n; i++) {
    const d = dist[i]!;
    let k = 0;
    if (d < 0.5) k = -1;
    else if (d < gap) k = 0.018 + 0.08 * (1 - d / gap);
    else if (reach !== Infinity) {
      const over = d + wob[i]! - reach;
      k = over <= 0 ? 0 : over < 4 ? 0.018 * (over / 4) : 0.018 + 0.06 * Math.min(1, (over - 4) / 4);
    }
    kill[i] = k;
  }
  const steps = Math.round(rate(f));
  for (let st = 0; st < steps; st++) {
    for (let y = 0; y < gh; y++) {
      const up = y > 0 ? -gw : 0, dn = y < gh - 1 ? gw : 0;
      for (let x = 0; x < gw; x++) {
        const i = y * gw + x;
        const kl = kill[i]!;
        if (kl < 0) {
          U2[i] = 1;
          V2[i] = 0;
          continue;
        }
        const l = x > 0 ? -1 : 0, rr = x < gw - 1 ? 1 : 0;
        const u = U[i]!, v = V[i]!;
        const lu = 0.2 * (U[i + l]! + U[i + rr]! + U[i + up]! + U[i + dn]!) + 0.05 * (U[i + up + l]! + U[i + up + rr]! + U[i + dn + l]! + U[i + dn + rr]!) - u;
        const lv = 0.2 * (V[i + l]! + V[i + rr]! + V[i + up]! + V[i + dn]!) + 0.05 * (V[i + up + l]! + V[i + up + rr]! + V[i + dn + l]! + V[i + dn + rr]!) - v;
        const re = u * v * v;
        const fe = F[i]! + force * ring[i]!;
        U2[i] = u + DU * lu - re + fe * (1 - u);
        let nv = v + DV * lv + re - (K[i]! + fe + (kl > 0.018 ? 0.018 : kl)) * v;
        if (kl > 0.018) nv -= (kl - 0.018) * nv;
        V2[i] = nv < 0 ? 0 : nv;
      }
    }
    const tu = U; U = U2; U2 = tu;
    const tv = V; V = V2; V2 = tv;
  }
  s.U = U; s.V = V; sim.U2 = U2; sim.V2 = V2;
  const A = s.A;
  for (let i = 0; i < n; i++) if (A[i]! > 1e5 && V[i]! > 0.16) A[i] = f;
  s.frame = f;
}

function stateAt(fd: Field, frame: number): State {
  let sim = SIMS.get(fd.key);
  if (!sim) {
    const n = fd.gw * fd.gh;
    sim = { live: initState(fd), snaps: new Map(), key: fd.key, U2: new Float32Array(n), V2: new Float32Array(n), kill: new Float32Array(n) };
    if (SIMS.size > 4) SIMS.clear();
    SIMS.set(fd.key, sim);
  }
  if (sim.live.frame > frame || frame - sim.live.frame > SNAP_EVERY * 2) {
    let best: State | null = null;
    for (const [f, st] of sim.snaps) if (f <= frame && (!best || f > best.frame)) best = st;
    if (best && (sim.live.frame > frame || best.frame > sim.live.frame)) sim.live = cloneState(best);
    else if (sim.live.frame > frame) sim.live = initState(fd);
  }
  while (sim.live.frame < frame) {
    advance(sim, fd, sim.live.frame + 1);
    if (sim.live.frame % SNAP_EVERY === 0 && !sim.snaps.has(sim.live.frame)) sim.snaps.set(sim.live.frame, cloneState(sim.live));
  }
  return sim.live;
}

// ---------------------------------------------------------------- logo mask
type Mask = { key: string; data: Uint8Array; rect: { x: number; y: number; w: number; h: number } | null; content: { w: number; h: number } | null };

/** Counters and holes inside the mark count as the mark, so the pattern never grows inside a letter. */
function fillHoles(m: Uint8Array, gw: number, gh: number): Uint8Array {
  const out = m.slice();
  const seen = new Uint8Array(gw * gh);
  const stack: number[] = [];
  for (let x = 0; x < gw; x++) stack.push(x, (gh - 1) * gw + x);
  for (let y = 0; y < gh; y++) stack.push(y * gw, y * gw + gw - 1);
  while (stack.length) {
    const i = stack.pop()!;
    if (seen[i] || m[i]) continue;
    seen[i] = 1;
    const x = i % gw, y = (i / gw) | 0;
    if (x > 0) stack.push(i - 1);
    if (x < gw - 1) stack.push(i + 1);
    if (y > 0) stack.push(i - gw);
    if (y < gh - 1) stack.push(i + gw);
  }
  for (let i = 0; i < out.length; i++) if (!seen[i]) out[i] = 1;
  return out;
}

function discMask(gw: number, gh: number, cx: number, cy: number, r: number): Uint8Array {
  const m = new Uint8Array(gw * gh);
  for (let y = 0; y < gh; y++) for (let x = 0; x < gw; x++) if ((x + 0.5 - cx) ** 2 + (y + 0.5 - cy) ** 2 <= r * r) m[y * gw + x] = 1;
  return m;
}

/**
 * Turing patterns (Gray-Scott reaction-diffusion) grow from the logo silhouette. A thin
 * line of chemical traces the outline, ridges spread until the frame is a living
 * fingerprint, then a rising kill rate sweeps in from the edges and leaves a ring that
 * keeps breathing around the clean logo. The simulation replays deterministically from
 * frame 0 with memoized snapshots, so any frame on any worker gives the same pixels.
 */
export const Component: React.FC<Props> = ({ logo: logoProp, primary, secondary, color, background, pattern, rings, grain }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  // Empty slot shows the shared neutral sample mark, so the block still reads as a logo reveal.
  const logo = logoProp.trim() || SAMPLE_LOGO;
  const { width: w, height: h, aspect, portrait } = useLayout();
  const S = Math.min(w, h);
  const transparent = background === "transparent";
  const dark = transparent ? lum(rgbOf(color)) > 0.4 : lum(rgbOf(background, [0, 0, 0])) < 0.4;
  const [gw, gh] = GRID[aspect];
  const cs = w / gw;

  // Logo box: wordmarks get width, marks get height.
  const box = aspect === "16:9" ? { w: 0.52 * S, h: 0.25 * S } : aspect === "9:16" ? { w: 0.6 * S, h: 0.3 * S } : { w: 0.5 * S, h: 0.26 * S };
  const cx = w / 2, cy = h / 2;
  const discR = (aspect === "9:16" ? 0.13 : 0.115) * S;

  // ---- load the logo once to read its silhouette (alpha) at grid resolution.
  const maskKey = `${logo}|${gw}x${gh}|${w}x${h}`;
  const [mask, setMask] = useState<Mask | null>(null);
  const [handle] = useState(() => delayRender("reaction-diffusion-bloom: logo silhouette"));
  const released = useRef(false);
  useEffect(() => {
    let done = false;
    const finish = (m: Mask) => {
      if (done) return;
      done = true;
      setMask(m);
      if (!released.current) {
        released.current = true;
        continueRender(handle);
      }
    };
    const disc = () => finish({ key: maskKey, data: discMask(gw, gh, cx / cs, cy / cs, discR / cs), rect: null, content: null });
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const nw = img.naturalWidth || 1, nh = img.naturalHeight || 1;
      // Fit the mark itself, not its artboard: trim transparent padding (when the pixels are readable).
      let fx0 = 0, fy0 = 0, fx1 = 1, fy1 = 1;
      try {
        const tk = 512 / Math.max(nw, nh);
        const tw = Math.max(1, Math.round(nw * tk)), th = Math.max(1, Math.round(nh * tk));
        const tc = document.createElement("canvas");
        tc.width = tw;
        tc.height = th;
        const tctx = tc.getContext("2d", { willReadFrequently: true })!;
        tctx.drawImage(img, 0, 0, tw, th);
        const td = tctx.getImageData(0, 0, tw, th).data;
        let x0 = tw, y0 = th, x1 = -1, y1 = -1;
        for (let y = 0; y < th; y++)
          for (let x = 0; x < tw; x++)
            if (td[(y * tw + x) * 4 + 3]! > 16) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
        if (x1 >= x0 && y1 >= y0) { fx0 = x0 / tw; fy0 = y0 / th; fx1 = (x1 + 1) / tw; fy1 = (y1 + 1) / th; }
      } catch {
        // Cross-origin image without CORS: fit the whole artboard.
      }
      const k = Math.min(box.w / ((fx1 - fx0) * nw), box.h / ((fy1 - fy0) * nh));
      const rect = { w: nw * k, h: nh * k, x: cx - ((fx0 + fx1) / 2) * nw * k, y: cy - ((fy0 + fy1) / 2) * nh * k };
      const content = { w: (fx1 - fx0) * nw * k, h: (fy1 - fy0) * nh * k };
      const SS = 3;
      const c = document.createElement("canvas");
      c.width = gw * SS;
      c.height = gh * SS;
      const ctx = c.getContext("2d", { willReadFrequently: true })!;
      const g = (SS * gw) / w;
      const data = new Uint8Array(gw * gh);
      try {
        ctx.drawImage(img, rect.x * g, rect.y * g, rect.w * g, rect.h * g);
        const px = ctx.getImageData(0, 0, c.width, c.height).data;
        for (let y = 0; y < gh; y++)
          for (let x = 0; x < gw; x++) {
            let a = 0;
            for (let j = 0; j < SS; j++) for (let i = 0; i < SS; i++) a += px[((y * SS + j) * c.width + x * SS + i) * 4 + 3]!;
            if (a / (SS * SS) > 70) data[y * gw + x] = 1;
          }
      } catch {
        // Cross-origin image without CORS: fall back to its bounding box.
        for (let y = 0; y < gh; y++)
          for (let x = 0; x < gw; x++) {
            const X = (x + 0.5) * cs, Y = (y + 0.5) * cs;
            if (X >= rect.x && X <= rect.x + rect.w && Y >= rect.y && Y <= rect.y + rect.h) data[y * gw + x] = 1;
          }
      }
      let any = false;
      for (let i = 0; i < data.length && !any; i++) any = data[i] === 1;
      if (!any) data.set(discMask(gw, gh, cx / cs, cy / cs, Math.min(rect.w, rect.h) / 2 / cs));
      finish({ key: maskKey, data: fillHoles(data, gw, gh), rect, content });
    };
    img.onerror = () => disc();
    img.src = logo;
    return () => {
      done = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maskKey]);

  const gap = Math.max(2.2, (0.022 * S) / cs);
  // Settled ring: whole ridge periods (so no ridge is cut in half), as many as asked
  // while the outermost one still clears the frame edge.
  const halfW = mask?.content ? mask.content.w / 2 : discR, halfH = mask?.content ? mask.content.h / 2 : discR;
  // Portrait is width-bound: the rings may run closer to the side edges so they fill the tall frame.
  const room = (Math.min(w / 2 - halfW, h / 2 - halfH) - (portrait ? 0.012 : 0.05) * S) / cs - gap;
  let nRings = rings;
  while (nRings > 1 && RING0 + (nRings - 0.5) * LAMBDA > room) nRings--;
  const rRing = gap + RING0 + (nRings - 0.5) * LAMBDA;
  const field = useMemo(
    () => (mask && mask.key === maskKey ? buildField(mask.data, gw, gh, pattern, gap, rRing, `${maskKey}|${pattern}|${rRing.toFixed(2)}`) : null),
    [mask, maskKey, gw, gh, pattern, gap, rRing],
  );

  const ref = useRef<HTMLCanvasElement>(null);
  const layerRef = useRef<HTMLCanvasElement | null>(null);
  const smoothRef = useRef<Float32Array | null>(null);
  const bloomRef = useRef<HTMLCanvasElement | null>(null);
  const cw = Math.max(2, Math.round(w * SCALE));
  const ch = Math.max(2, Math.round(h * SCALE));

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx || !field) return;
    const st = stateAt(field, frame);
    const { U, A } = st;
    // Render from a lightly smoothed copy of V: rounder contours, no grid stair-steps.
    const n = gw * gh;
    if (!smoothRef.current || smoothRef.current.length !== n) smoothRef.current = new Float32Array(n);
    const V = smoothRef.current, V0 = st.V;
    for (let y = 0; y < gh; y++) {
      const up = y > 0 ? -gw : 0, dn = y < gh - 1 ? gw : 0;
      for (let x = 0; x < gw; x++) {
        const i = y * gw + x, l = x > 0 ? -1 : 0, r = x < gw - 1 ? 1 : 0;
        V[i] = 0.25 * V0[i]! + 0.125 * (V0[i + l]! + V0[i + r]! + V0[i + up]! + V0[i + dn]!) + 0.0625 * (V0[i + up + l]! + V0[i + up + r]! + V0[i + dn + l]! + V0[i + dn + r]!);
      }
    }
    const Dist = field.dist;
    // Bioluminescent pulses: a wave of light leaves the logo every two seconds.
    const waves: { r: number; a: number }[] = [];
    for (let s0 = 24; s0 <= frame; s0 += 60) {
      const r = field.gap + (frame - s0) * 2.4;
      if (r < field.rMax + 12) waves.push({ r, a: Math.exp(-(r - field.gap) / 110) * Math.min(1, (frame - s0) / 6) });
    }
    if (!layerRef.current) layerRef.current = document.createElement("canvas");
    if (!bloomRef.current) bloomRef.current = document.createElement("canvas");
    const layer = layerRef.current, bloom = bloomRef.current;
    if (layer.width !== cw || layer.height !== ch) { layer.width = cw; layer.height = ch; }
    const bw = Math.max(2, Math.round(cw / 3)), bh = Math.max(2, Math.round(ch / 3));
    if (bloom.width !== bw || bloom.height !== bh) { bloom.width = bw; bloom.height = bh; }
    const lctx = layer.getContext("2d", { willReadFrequently: true })!;
    const bctx = bloom.getContext("2d", { willReadFrequently: true })!;

    const P = rgbOf(primary), Q = rgbOf(secondary), T = rgbOf(color);
    const img = lctx.createImageData(cw, ch);
    const d = img.data;
    const sx = gw / cw, sy = gh / ch;
    const TH = 0.25;
    // Light from the upper left; the ridges are treated as a height field.
    const Lx = -0.45, Ly = -0.6, Lz = 0.66;
    const Hx = Lx, Hy = Ly, Hz = Lz + 1;
    const Hn = Math.hypot(Hx, Hy, Hz);
    const hx = Hx / Hn, hy = Hy / Hn, hz = Hz / Hn;
    const relief = 9;
    // Shadow offset (grid cells) for the printed relief on light backdrops.
    const shOff = 0.9;
    let k = 0;
    for (let j = 0; j < ch; j++) {
      let gy = (j + 0.5) * sy - 0.5;
      if (gy < 0) gy = 0;
      if (gy > gh - 1.001) gy = gh - 1.001;
      const y0 = gy | 0, fy = gy - y0;
      const ys = Math.min(gh - 2, Math.max(0, (gy - shOff) | 0));
      const fys = Math.min(1, Math.max(0, gy - shOff - ys));
      for (let i = 0; i < cw; i++, k += 4) {
        let gx = (i + 0.5) * sx - 0.5;
        if (gx < 0) gx = 0;
        if (gx > gw - 1.001) gx = gw - 1.001;
        const x0 = gx | 0, fx = gx - x0;
        const i00 = y0 * gw + x0, i10 = i00 + 1, i01 = i00 + gw, i11 = i01 + 1;
        const v00 = V[i00]!, v10 = V[i10]!, v01 = V[i01]!, v11 = V[i11]!;
        const v = (v00 * (1 - fx) + v10 * fx) * (1 - fy) + (v01 * (1 - fx) + v11 * fx) * fy;
        const u = (U[i00]! * (1 - fx) + U[i10]! * fx) * (1 - fy) + (U[i01]! * (1 - fx) + U[i11]! * fx) * fy;
        // Gradient of the bilinear patch (per cell).
        const dvx = (v10 - v00) * (1 - fy) + (v11 - v01) * fy;
        const dvy = (v01 - v00) * (1 - fx) + (v11 - v10) * fx;
        const gm = Math.hypot(dvx, dvy);
        // Anti-aliased threshold: edge softness = one output pixel.
        const aa = Math.max(0.006, gm * sx * 0.75);
        const body = smooth(TH - aa, TH + aa, v);
        const haze = clamp01((1 - u) * 1.6);
        let pulse = 0;
        if (waves.length) {
          const dd = (Dist[i00]! * (1 - fx) + Dist[i10]! * fx) * (1 - fy) + (Dist[i01]! * (1 - fx) + Dist[i11]! * fx) * fy;
          for (const wv of waves) {
            const q = (dd - wv.r) / 6;
            if (q > -3 && q < 3) pulse += wv.a * Math.exp(-q * q);
          }
        }
        if (dark && body < 0.004 && haze < 0.01) { d[k + 3] = 0; continue; }
        // Age: fresh growth glows in secondary, settles into primary.
        const age = A[i00]! < 1e5 ? clamp01((frame - A[i00]!) / 48) : 0;
        const m = dark ? 0.4 + 0.6 * age : 0.45 + 0.55 * age;
        let R = Q[0] + (P[0] - Q[0]) * m;
        let G = Q[1] + (P[1] - Q[1]) * m;
        let B = Q[2] + (P[2] - Q[2]) * m;
        // Normal of the ridge height field.
        const nx = -dvx * relief, ny = -dvy * relief;
        const nl = Math.hypot(nx, ny, 1);
        const ndl = (nx * Lx + ny * Ly + Lz) / nl;
        const ndh = Math.max(0, (nx * hx + ny * hy + hz) / nl);
        const spec = Math.pow(ndh, 28) * smooth(TH, TH + 0.06, v);
        const crest = smooth(TH + 0.04, TH + 0.13, v);
        if (dark) {
          // Shadow side leans into the primary instead of darkening, so yellows never go olive.
          const sh = clamp01(0.5 - 0.6 * ndl) * 0.7;
          R += (P[0] * 0.8 - R) * sh; G += (P[1] * 0.8 - G) * sh; B += (P[2] * 0.8 - B) * sh;
          const core = Math.min(1, 0.3 * crest + 0.45 * pulse);
          R += (T[0] - R) * core; G += (T[1] - G) * core; B += (T[2] - B) * core;
          const sp = spec * 0.8;
          R += (T[0] - R) * sp; G += (T[1] - G) * sp; B += (T[2] - B) * sp;
          // Haze: depleted substrate around the ridges glows faintly.
          const hz = haze * (0.09 + 0.3 * pulse) * (1 - body);
          const a = body + hz;
          if (a < 0.004) { d[k + 3] = 0; continue; }
          d[k] = R; d[k + 1] = G; d[k + 2] = B; d[k + 3] = Math.min(1, a) * 255;
        } else {
          // Printed specimen: ink pools darker at the rims, a soft cast shadow lifts the relief.
          const rim = body * (1 - crest);
          const ink = Math.min(0.8, 0.22 * rim + 0.1 * (1 - ndl) + 0.35 * pulse * body);
          R += (T[0] - R) * ink; G += (T[1] - G) * ink; B += (T[2] - B) * ink;
          const sp = spec * 0.55;
          R += (255 - R) * sp; G += (255 - G) * sp; B += (255 - B) * sp;
          const sxi = Math.min(gw - 2, Math.max(0, (gx - shOff) | 0));
          const fxs = Math.min(1, Math.max(0, gx - shOff - sxi));
          const s00 = ys * gw + sxi;
          const vs = (V[s00]! * (1 - fxs) + V[s00 + 1]! * fxs) * (1 - fys) + (V[s00 + gw]! * (1 - fxs) + V[s00 + gw + 1]! * fxs) * fys;
          const shadow = smooth(TH - 0.05, TH + 0.05, vs) * (1 - body) * 0.2;
          const hz = haze * 0.05 * (1 - body);
          if (body < 0.004 && shadow < 0.004 && hz < 0.004) { d[k + 3] = 0; continue; }
          // Composite over: shadow (text color) and haze (primary) under the ink body.
          const ua = shadow + hz * (1 - shadow);
          let ur = 0, ug = 0, ub = 0;
          if (ua > 0) {
            ur = (T[0] * shadow + P[0] * hz * (1 - shadow)) / ua;
            ug = (T[1] * shadow + P[1] * hz * (1 - shadow)) / ua;
            ub = (T[2] * shadow + P[2] * hz * (1 - shadow)) / ua;
          }
          const a = body + ua * (1 - body);
          d[k] = (R * body + ur * ua * (1 - body)) / a;
          d[k + 1] = (G * body + ug * ua * (1 - body)) / a;
          d[k + 2] = (B * body + ub * ua * (1 - body)) / a;
          d[k + 3] = a * 255;
        }
      }
    }
    lctx.putImageData(img, 0, 0);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.filter = "none";
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, cw, ch);

    if (dark) {
      // Bioluminescent bloom under and over the ridges.
      bctx.setTransform(1, 0, 0, 1, 0, 0);
      bctx.clearRect(0, 0, bw, bh);
      bctx.filter = `blur(${Math.max(1.5, (S * 0.016 * SCALE) / 3).toFixed(1)}px)`;
      bctx.drawImage(layer, 0, 0, bw, bh);
      bctx.filter = "none";
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.globalAlpha = 0.9;
      ctx.drawImage(bloom, 0, 0, cw, ch);
      ctx.globalAlpha = 1;
      ctx.drawImage(layer, 0, 0);
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = 0.45;
      ctx.drawImage(bloom, 0, 0, cw, ch);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    } else {
      ctx.drawImage(layer, 0, 0);
    }

    // Quiet pocket and vignette.
    if (!transparent) {
      const v = ctx.createRadialGradient(cw / 2, ch / 2, Math.min(cw, ch) * 0.32, cw / 2, ch / 2, Math.hypot(cw, ch) * 0.56);
      v.addColorStop(0, withAlpha(background, 0));
      v.addColorStop(1, withAlpha(background, dark ? 0.55 : 0.45));
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, cw, ch);
    }
  }, [field, frame, cw, ch, gw, gh, S, primary, secondary, color, background, transparent, dark]);

  // ---- logo
  const logoIn = springSnap(frame, fps, 0, APPLE);
  const fade = easeOut(clamp01(frame / 14));
  const blur = (1 - easeOut(clamp01(frame / 16))) * S * 0.01;
  const push = 1 + 0.06 * (1 - easeOut(ramp(frame, [0, 190], [0, 1])));
  const glow = dark
    ? `drop-shadow(0 0 ${Math.round(S * 0.025)}px ${withAlpha(primary, 0.35)})`
    : `drop-shadow(0 ${Math.round(S * 0.004)}px ${Math.round(S * 0.01)}px ${withAlpha(color, 0.18)})`;
  const rect = mask?.rect ?? null;
  const orb = discR * 2;
  const mark = rect ? (
      <Img
        data-21st-slot="logo"
        src={logo}
        style={{
          position: "absolute",
          left: rect.x,
          top: rect.y,
          width: rect.w,
          height: rect.h,
          opacity: fade,
          transform: logoIn === 1 ? undefined : `scale(${(0.94 + 0.06 * logoIn).toFixed(4)})`,
          filter: blur > 0.05 ? `blur(${blur.toFixed(2)}px) ${glow}` : glow,
        }}
      />
  ) : mask ? (
    <div
      data-21st-slot="logo"
      style={{
        position: "absolute",
        left: cx - orb / 2,
        top: cy - orb / 2,
        width: orb,
        height: orb,
        borderRadius: "50%",
        opacity: fade,
        transform: logoIn === 1 ? undefined : `scale(${(0.9 + 0.1 * logoIn).toFixed(4)})`,
        // Abstract fallback: a glossy seed drop of the two brand chemicals.
        background: `radial-gradient(circle at 34% 30%, ${withAlpha(color, dark ? 0.9 : 0.75)} 0%, ${withAlpha(secondary, 0.95)} 18%, ${withAlpha(primary, 1)} 62%, ${withAlpha(primary, 0.85)} 100%)`,
        boxShadow: dark ? `0 0 ${orb * 0.3}px ${withAlpha(primary, 0.45)}` : `0 ${orb * 0.04}px ${orb * 0.12}px ${withAlpha(color, 0.18)}`,
        filter: blur > 0.05 ? `blur(${blur.toFixed(2)}px)` : undefined,
      }}
    />
  ) : null;

  const solid = withAlpha(color, 1);
  const maskCss = transparent ? `radial-gradient(ellipse ${portrait ? "70% 62%" : "64% 68%"} at 50% 50%, ${solid} 50%, transparent 100%)` : undefined;

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <AbsoluteFill style={{ transform: push === 1 ? undefined : `scale(${push.toFixed(5)})` }}>
        <AbsoluteFill style={{ maskImage: maskCss, WebkitMaskImage: maskCss }}>
          <canvas ref={ref} width={cw} height={ch} style={{ width: "100%", height: "100%", display: "block" }} />
        </AbsoluteFill>
        {mark}
      </AbsoluteFill>
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.06 : 0.09, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
