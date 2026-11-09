// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef } from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, fitFontSize, luminance, ramp, springSnap, useEnterExit, useLayout, withAlpha, type Aspect } from "../../../kit/index";
import { rng } from "../_lib/noise";
import { meta } from "./differential-growth-frame.meta";
import type { schema } from "./differential-growth-frame.schema";

/*
 * Differential growth: one closed line whose nodes repel each other, pull
 * toward their neighbours and split when a segment stretches. The line has to
 * buckle to fit more length into the same space, so it folds into brain-coral
 * wrinkles. The headline window is a keep-out zone the line grows around.
 *
 * The simulation runs once per (aspect, seed) in plain typed arrays and keeps
 * one snapshot per frame in a module cache, so every frame is a lookup plus a
 * redraw, and the same frame always gets the same pixels on any worker.
 */

const TAU = Math.PI * 2;
/** Simulation units on the short side of the frame. Keeps fold size and cost the same at any resolution. */
const UNIT = 540;
/** Repulsion radius: the gap between neighbouring folds. */
const R = 12;
/** A segment longer than this splits in two. */
const SEG = R * 0.42;
const ALIGN = 0.35;
const REP = 0.9;
const MAX_STEP = 1.2;
/** Extra random splits, weighted toward the free outer edge, so the line spreads instead of only compressing. */
const INJECT = 0.03;
const ANISO = 3;
const CROWD = 9;
/** Node budget per unit area: the line stops growing once the frame is full. */
const FILL = 3.4;
/** Iterations over which the keep-out window opens around the seed circle. */
const WINDOW_OPEN = 260;
const WINDOW_RADIUS = 18;

const INTRO = meta.timing.markers.grow ?? 14;
const REVEAL = meta.timing.markers.reveal ?? 96;
const SETTLED = meta.timing.markers.settled ?? 132;
/** Growth ends here; the frames after it hold the last state. */
const GROW_END = 122;

type Win = { x: number; y: number; w: number; h: number; r: number };
type Snap = { it: number; n: number; x: Float32Array; y: Float32Array; u: Float32Array; b: Float32Array };
type Growth = { W: number; H: number; win: Win; total: number; snaps: Map<number, Snap> };

/** Window size (fraction of the frame) and total iterations per aspect: enough to fill the frame, no more. */
const PLAN: Record<Aspect, { w: number; h: number; iters: number }> = {
  "16:9": { w: 0.46, h: 0.34, iters: 1050 },
  "9:16": { w: 0.8, h: 0.28, iters: 1400 },
  "1:1": { w: 0.64, h: 0.36, iters: 900 },
};

/** Frame -> iteration. Fast while the seed circle opens, easing out as the line fills the frame. */
function iterAt(frame: number, total: number): number {
  const p = Math.max(0, Math.min(1, (frame - INTRO) / (GROW_END - INTRO)));
  return Math.round(total * (1 - Math.pow(1 - p, 1.35)));
}

function sdBox(px: number, py: number, cx: number, cy: number, hw: number, hh: number, r: number): number {
  const qx = Math.abs(px - cx) - hw + r;
  const qy = Math.abs(py - cy) - hh + r;
  const ox = qx > 0 ? qx : 0;
  const oy = qy > 0 ? qy : 0;
  return Math.sqrt(ox * ox + oy * oy) + Math.min(Math.max(qx, qy), 0) - r;
}

function simulate(W: number, H: number, win: Win, seed: number, targets: number[]): Map<number, Snap> {
  const rand = rng(seed * 7919 + 13);
  const cap = Math.round((FILL * W * H) / (R * R));
  const size = cap + 8;
  let X = new Float64Array(size), Y = new Float64Array(size), U = new Float64Array(size), B = new Float64Array(size);
  let X2 = new Float64Array(size), Y2 = new Float64Array(size), U2 = new Float64Array(size), B2 = new Float64Array(size);
  const NX = new Float64Array(size), NY = new Float64Array(size), SX = new Float64Array(size), SY = new Float64Array(size), G = new Float64Array(size);
  const cx = win.x + win.w / 2;
  const cy = win.y + win.h / 2;
  const r0 = R * 2.2;
  let n = Math.ceil((TAU * r0) / (SEG * 0.7));
  const wob = rand() * TAU;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * TAU;
    const rr = r0 * (1 + 0.06 * Math.sin(a * 3 + wob));
    X[i] = cx + Math.cos(a) * rr;
    Y[i] = cy + Math.sin(a) * rr;
    U[i] = i / n;
    B[i] = -1e4;
  }
  // The line may bleed just past the frame so the folds read as cropped, not fenced.
  const bleed = R * 0.5;
  const ox = -bleed - 2 * R;
  const oy = -bleed - 2 * R;
  const gw = Math.ceil((W + 2 * bleed + 4 * R) / R);
  const gh = Math.ceil((H + 2 * bleed + 4 * R) / R);
  const cells = gw * gh;
  const cellCount = new Int32Array(cells + 1);
  const cellStart = new Int32Array(cells + 1);
  const nodeCell = new Int32Array(size);
  const R2 = R * R;
  const pad = R * 0.55;
  const snaps = new Map<number, Snap>();
  const last = targets[targets.length - 1] ?? 0;
  let ti = 0;
  for (let it = 0; it <= last; it++) {
    while (ti < targets.length && targets[ti] === it) {
      snaps.set(it, { it, n, x: new Float32Array(X.subarray(0, n)), y: new Float32Array(Y.subarray(0, n)), u: new Float32Array(U.subarray(0, n)), b: new Float32Array(B.subarray(0, n)) });
      ti++;
    }
    if (it === last) break;

    const open = 1 - Math.pow(1 - Math.min(1, it / WINDOW_OPEN), 2);
    const hw = Math.max(1, (win.w / 2) * open);
    const hh = Math.max(1, (win.h / 2) * open);
    const wr = Math.min(win.r, hw, hh);

    // Spatial hash (cell = repulsion radius), positions copied in cell order so each row of 3 cells is one contiguous run.
    cellCount.fill(0);
    for (let i = 0; i < n; i++) {
      let gx = Math.floor((X[i]! - ox) / R);
      let gy = Math.floor((Y[i]! - oy) / R);
      gx = gx < 0 ? 0 : gx >= gw ? gw - 1 : gx;
      gy = gy < 0 ? 0 : gy >= gh ? gh - 1 : gy;
      const c = gy * gw + gx;
      nodeCell[i] = c;
      cellCount[c]!++;
    }
    let acc = 0;
    for (let c = 0; c < cells; c++) {
      cellStart[c] = acc;
      acc += cellCount[c]!;
      cellCount[c] = 0;
    }
    cellStart[cells] = acc;
    for (let i = 0; i < n; i++) {
      const c = nodeCell[i]!;
      const k = cellStart[c]! + cellCount[c]!++;
      SX[k] = X[i]!;
      SY[k] = Y[i]!;
    }

    for (let i = 0; i < n; i++) {
      const px = X[i]!, py = Y[i]!;
      const ip = i === 0 ? n - 1 : i - 1;
      const inx = i === n - 1 ? 0 : i + 1;
      let fx = ((X[ip]! + X[inx]!) * 0.5 - px) * ALIGN;
      let fy = ((Y[ip]! + Y[inx]!) * 0.5 - py) * ALIGN;
      const c = nodeCell[i]!;
      const gx = c % gw, gy = (c / gw) | 0;
      const x0 = gx > 0 ? gx - 1 : 0, x1 = gx < gw - 1 ? gx + 1 : gw - 1;
      let rx = 0, ry = 0, crowd = 0;
      for (let yy = gy > 0 ? gy - 1 : 0, ye = gy < gh - 1 ? gy + 1 : gh - 1; yy <= ye; yy++) {
        const end = cellStart[yy * gw + x1 + 1]!;
        for (let k = cellStart[yy * gw + x0]!; k < end; k++) {
          const dx = px - SX[k]!, dy = py - SY[k]!, d2 = dx * dx + dy * dy;
          if (d2 < R2 && d2 > 1e-9) {
            const d = Math.sqrt(d2);
            const s = (R - d) / (R * d);
            rx += dx * s;
            ry += dy * s;
            crowd++;
          }
        }
      }
      fx += rx * REP;
      fy += ry * REP;
      if (px < -bleed) fx += (-bleed - px) * 0.5;
      else if (px > W + bleed) fx -= (px - W - bleed) * 0.5;
      if (py < -bleed) fy += (-bleed - py) * 0.5;
      else if (py > H + bleed) fy -= (py - H - bleed) * 0.5;
      if (Math.abs(px - cx) < hw + pad && Math.abs(py - cy) < hh + pad) {
        const sd = sdBox(px, py, cx, cy, hw, hh, wr);
        if (sd < pad) {
          const gxs = (sdBox(px + 0.5, py, cx, cy, hw, hh, wr) - sdBox(px - 0.5, py, cx, cy, hw, hh, wr));
          const gys = (sdBox(px, py + 0.5, cx, cy, hw, hh, wr) - sdBox(px, py - 0.5, cx, cy, hw, hh, wr));
          const push = (pad - sd) * 0.45;
          fx += gxs * push;
          fy += gys * push;
        }
      }
      const m = Math.sqrt(fx * fx + fy * fy);
      if (m > MAX_STEP) {
        fx *= MAX_STEP / m;
        fy *= MAX_STEP / m;
      }
      NX[i] = px + fx;
      NY[i] = py + fy;
      // Free edge grows faster, and faster still toward the far sides of a wide or tall frame.
      const ax = (px - cx) / (W * 0.5), ay = (py - cy) / (H * 0.5);
      const reach = (W > H * 1.2 ? ax * ax : H > W * 1.2 ? ay * ay : 0) + 2 * ax * ax * ay * ay;
      G[i] = (crowd < CROWD ? 1 - crowd / CROWD : 0) * (1 + ANISO * reach);
    }

    // Growth eases out near the node budget, so the line decelerates instead of stopping dead.
    const gate = Math.min(1, Math.max(0, (cap - n) / (cap * 0.18)));
    const seg = SEG * (1 + 1.4 * (1 - gate));
    const seg2 = seg * seg;
    const inject = INJECT * gate * gate;
    let m = 0, added = 0;
    for (let i = 0; i < n; i++) {
      const j = i === n - 1 ? 0 : i + 1;
      X2[m] = NX[i]!; Y2[m] = NY[i]!; U2[m] = U[i]!; B2[m] = B[i]!;
      m++;
      const dx = NX[j]! - NX[i]!, dy = NY[j]! - NY[i]!, d2 = dx * dx + dy * dy;
      if (n + added < cap && (d2 > seg2 || (d2 > SEG * SEG * 0.2 && rand() < inject * G[i]!))) {
        X2[m] = NX[i]! + dx * 0.5;
        Y2[m] = NY[i]! + dy * 0.5;
        // Material coordinate: a new node sits between its parents, so colors stretch with the line instead of sliding.
        const u1 = U[i]!;
        let u2 = U[j]!;
        if (u2 < u1 - 0.5) u2 += 1;
        else if (u2 > u1 + 0.5) u2 -= 1;
        let uu = (u1 + u2) * 0.5;
        if (uu < 0) uu += 1;
        else if (uu >= 1) uu -= 1;
        U2[m] = uu;
        B2[m] = it;
        m++;
        added++;
      }
    }
    let t = X; X = X2; X2 = t;
    t = Y; Y = Y2; Y2 = t;
    t = U; U = U2; U2 = t;
    t = B; B = B2; B2 = t;
    n = m;
  }
  return snaps;
}

const CACHE = new Map<string, Growth>();

function growth(aspect: Aspect, width: number, height: number, seed: number): Growth {
  const s = UNIT / Math.min(width, height);
  const W = Math.round(width * s);
  const H = Math.round(height * s);
  const key = `${W}x${H}:${seed}`;
  const hit = CACHE.get(key);
  if (hit) return hit;
  const plan = PLAN[aspect];
  const win: Win = { x: (W * (1 - plan.w)) / 2, y: (H * (1 - plan.h)) / 2, w: W * plan.w, h: H * plan.h, r: WINDOW_RADIUS };
  const targets: number[] = [0];
  for (let f = INTRO; f <= GROW_END; f++) {
    const it = iterAt(f, plan.iters);
    if (it !== targets[targets.length - 1]) targets.push(it);
  }
  const g: Growth = { W, H, win, total: plan.iters, snaps: simulate(W, H, win, seed, targets) };
  if (CACHE.size >= 6) CACHE.delete(CACHE.keys().next().value!);
  CACHE.set(key, g);
  return g;
}

type RGB = [number, number, number];

function parse(color: string, fallback: RGB): RGB {
  let hex = /^#([0-9a-f]{3,8})$/i.exec(color)?.[1];
  if (hex) {
    if (hex.length === 3 || hex.length === 4) hex = hex.slice(0, 3).split("").map((c) => c + c).join("");
    const v = parseInt(hex.slice(0, 6), 16);
    return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
  }
  const m = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(color);
  if (m) return [Number(m[1]), Number(m[2]), Number(m[3])];
  return fallback;
}

const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const rgba = (c: RGB, a: number) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${a.toFixed(3)})`;
const WHITE: RGB = [255, 255, 255];

/** Smooth curve through the midpoints of nodes a..b-1 (indices wrap), continuous across adjacent chunks. */
function trace(ctx: CanvasRenderingContext2D, s: Snap, a: number, b: number, k: number, ox: number, oy: number) {
  const n = s.n;
  const pi = (a - 1 + n) % n;
  const ai = a % n;
  ctx.moveTo(ox + ((s.x[pi]! + s.x[ai]!) / 2) * k, oy + ((s.y[pi]! + s.y[ai]!) / 2) * k);
  for (let i = a; i < b; i++) {
    const c = i % n;
    const d = (i + 1) % n;
    ctx.quadraticCurveTo(ox + s.x[c]! * k, oy + s.y[c]! * k, ox + ((s.x[c]! + s.x[d]!) / 2) * k, oy + ((s.y[c]! + s.y[d]!) / 2) * k);
  }
}

export const Component: React.FC<z.infer<typeof schema>> = ({ headline, color, primary, secondary, background, fontFamily, seed }) => {
  const { fps } = useVideoConfig();
  const { width, height, aspect } = useLayout();
  const { frame } = useEnterExit(meta.timing);
  const soft = useRef<HTMLCanvasElement>(null);
  const crisp = useRef<HTMLCanvasElement>(null);
  const glowBuffer = useMemo(() => (typeof document === "undefined" ? null : document.createElement("canvas")), []);
  const g = growth(aspect, width, height, seed);
  /** px per simulation unit. */
  const S = width / g.W;
  const transparent = background === "transparent";
  // Light paper or dark night: from the backdrop, or from the text color when the backdrop is transparent.
  const dark = transparent ? luminance(color) > 0.4 : luminance(background) < 0.4;
  const cw = Math.max(2, Math.round(width / 2));
  const ch = Math.max(2, Math.round(height / 2));

  useLayoutEffect(() => {
    const sctx = soft.current?.getContext("2d", { willReadFrequently: true });
    const cctx = crisp.current?.getContext("2d", { willReadFrequently: true });
    if (!sctx || !cctx || !glowBuffer) return;
    if (glowBuffer.width !== cw || glowBuffer.height !== ch) {
      glowBuffer.width = cw;
      glowBuffer.height = ch;
    }
    const gctx = glowBuffer.getContext("2d", { willReadFrequently: true });
    if (!gctx) return;

    const P = parse(primary, [61, 99, 255]);
    const Q = parse(secondary, P);
    const ink = parse(color, dark ? [245, 245, 247] : [23, 23, 23]);
    const phase = rng(seed * 31 + 5)();

    const intro = frame < INTRO;
    const snap = intro ? g.snaps.get(0)! : g.snaps.get(iterAt(Math.min(frame, GROW_END), g.total))!;
    const n = snap.n;
    const it = snap.it;
    const cx = (g.win.x + g.win.w / 2) * S;
    const cy = (g.win.y + g.win.h / 2) * S;

    // Seed circle: pops in with a little overshoot and draws itself on.
    const pop = intro ? springSnap(frame, fps, 0, { damping: 11, stiffness: 140, mass: 0.7 }) : 1;
    const drawn = intro ? Math.min(1, frame / (INTRO - 4)) : 1;
    const zoom = 0.35 + 0.65 * pop;
    const fillUpTo = Math.max(2, Math.ceil(n * drawn));
    const closed = drawn >= 1;

    // Per-chunk colors: material position along the line, fresh growth runs hot, then light pulses travel the settled line.
    const L = Math.max(2, Math.ceil(n / 300));
    const chunks = Math.ceil(fillUpTo / L);
    const after = Math.max(0, frame - GROW_END) * 24;
    const pulseAmp = ramp(frame, [GROW_END - 14, SETTLED + 6], [0, 1]);
    const PULSES = 5;
    const travel = frame / (fps * 14);
    const colors: { base: RGB; hot: number; lit: number }[] = [];
    const reachD = Math.hypot(g.W, g.H) / 2;
    const wcx = g.win.x + g.win.w / 2;
    const wcy = g.win.y + g.win.h / 2;
    for (let k = 0; k < chunks; k++) {
      const a = k * L;
      const b = Math.min(fillUpTo, a + L);
      const mid = (a + b) >> 1;
      const u = snap.u[mid]!;
      // Light falls off away from the headline, so the window is the brightest place in the frame.
      const dd = Math.min(1, Math.max(0, (Math.hypot(snap.x[mid]! - wcx, snap.y[mid]! - wcy) / reachD - 0.3) / 0.7));
      const lit = 1 - 0.6 * dd * dd * (3 - 2 * dd);
      let heat = 0;
      for (let i = a; i < b; i++) heat += Math.exp(-(it - snap.b[i]! + after) / 45);
      heat = Math.min(1, (heat / (b - a)) * 1.6);
      let pulse = 0;
      if (pulseAmp > 0) {
        for (let p = 0; p < PULSES; p++) {
          let d = Math.abs(u - ((p / PULSES + travel + phase) % 1));
          if (d > 0.5) d = 1 - d;
          pulse += Math.exp(-(d * d) / (2 * 0.006 * 0.006));
        }
        pulse = Math.min(1, pulse) * pulseAmp;
      }
      const base = mix(P, Q, 0.5 - 0.5 * Math.cos(TAU * (u * 3 + phase)));
      colors.push({ base, hot: Math.min(1, heat * 0.75 + pulse), lit });
    }

    const grown = intro ? 0 : Math.min(1, (frame - INTRO) / (GROW_END - INTRO));
    const reveal = ramp(frame, [REVEAL - 6, SETTLED], [0, 1]);

    // ---- Soft layer (half resolution): atmosphere, inner wash, bloom.
    const k2 = (S * zoom) / 2;
    const ox2 = cx / 2 - (cx / 2) * zoom;
    const oy2 = cy / 2 - (cy / 2) * zoom;
    sctx.setTransform(1, 0, 0, 1, 0, 0);
    sctx.globalCompositeOperation = "source-over";
    sctx.globalAlpha = 1;
    sctx.filter = "none";
    sctx.clearRect(0, 0, cw, ch);
    if (!transparent) {
      sctx.fillStyle = background;
      sctx.fillRect(0, 0, cw, ch);
    }
    const reachR = Math.max(cw, ch) * (0.2 + 0.7 * Math.sqrt(grown));
    const amb = sctx.createRadialGradient(cx / 2, cy / 2, 0, cx / 2, cy / 2, reachR);
    amb.addColorStop(0, rgba(P, (dark ? 0.16 : 0.07) * (0.4 + 0.6 * grown)));
    amb.addColorStop(0.55, rgba(Q, (dark ? 0.06 : 0.03) * grown));
    amb.addColorStop(1, rgba(Q, 0));
    sctx.fillStyle = amb;
    sctx.fillRect(0, 0, cw, ch);

    // Inner wash: the inside of the closed line, so folds read as alternating ridges and channels.
    if (closed) {
      const wash = sctx.createLinearGradient(0, 0, cw, ch);
      wash.addColorStop(0, rgba(P, dark ? 0.07 : 0.1));
      wash.addColorStop(1, rgba(Q, dark ? 0.07 : 0.1));
      sctx.fillStyle = wash;
      sctx.beginPath();
      trace(sctx, snap, 0, n, k2, ox2, oy2);
      sctx.closePath();
      sctx.fill();
    }

    // Window glow when the headline lands.
    if (reveal > 0) {
      sctx.save();
      sctx.translate(cx / 2, cy / 2);
      sctx.scale(1, (g.win.h / g.win.w) * 1.15);
      const halo = sctx.createRadialGradient(0, 0, 0, 0, 0, (g.win.w * S) / 2 / 2 * 1.1);
      halo.addColorStop(0, rgba(dark ? mix(P, WHITE, 0.2) : P, (dark ? 0.2 : 0.06) * reveal));
      halo.addColorStop(1, rgba(P, 0));
      sctx.fillStyle = halo;
      sctx.fillRect(-cw, -ch * 4, cw * 2, ch * 8);
      sctx.restore();
    }

    // Bloom source: the line in its own colors, blurred twice on the way in.
    gctx.setTransform(1, 0, 0, 1, 0, 0);
    gctx.clearRect(0, 0, cw, ch);
    gctx.lineCap = "round";
    gctx.lineJoin = "round";
    gctx.lineWidth = Math.max(1, (dark ? 2.6 : 2.2) * k2);
    for (let k = 0; k < chunks; k++) {
      const c = colors[k]!;
      gctx.strokeStyle = rgba(dark ? mix(c.base, WHITE, c.hot * 0.5) : mix(c.base, P, 0.4), (dark ? 0.75 + 0.25 * c.hot : 0.5 + 0.5 * c.hot) * c.lit);
      gctx.beginPath();
      trace(gctx, snap, k * L, Math.min(fillUpTo, k * L + L), k2, ox2, oy2);
      gctx.stroke();
    }
    sctx.globalCompositeOperation = dark ? "lighter" : "source-over";
    const glowBoost = intro ? 1 + 1.5 * (1 - pop) : 1;
    sctx.globalAlpha = Math.min(1, (dark ? 0.55 : 0.22) * glowBoost);
    sctx.filter = `blur(${Math.max(1, Math.round(ch * 0.012))}px)`;
    sctx.drawImage(glowBuffer, 0, 0);
    if (dark) {
      sctx.globalAlpha = 0.5;
      sctx.filter = `blur(${Math.max(2, Math.round(ch * 0.035))}px)`;
      sctx.drawImage(glowBuffer, 0, 0);
    }
    sctx.filter = "none";
    sctx.globalAlpha = 1;
    sctx.globalCompositeOperation = "source-over";

    // ---- Crisp layer (full resolution): the line itself.
    const k1 = S * zoom;
    const ox1 = cx - cx * zoom;
    const oy1 = cy - cy * zoom;
    cctx.setTransform(1, 0, 0, 1, 0, 0);
    cctx.clearRect(0, 0, width, height);
    cctx.lineCap = "round";
    cctx.lineJoin = "round";
    cctx.lineWidth = Math.max(1, (dark ? 1.05 : 0.95) * k1);
    for (let k = 0; k < chunks; k++) {
      const c = colors[k]!;
      const col = dark ? mix(c.base, WHITE, 0.2 + c.hot * 0.6) : mix(ink, c.base, Math.min(1, 0.15 + c.hot * 0.85));
      cctx.strokeStyle = rgba(col, dark ? Math.min(1, c.lit + c.hot * 0.4) : 0.75 + 0.25 * c.lit);
      cctx.beginPath();
      trace(cctx, snap, k * L, Math.min(fillUpTo, k * L + L), k1, ox1, oy1);
      cctx.stroke();
    }
  }, [frame, fps, g, S, cw, ch, width, height, dark, transparent, background, primary, secondary, color, seed, glowBuffer]);

  // ---- Headline in the window.
  const resolvedFont = brandFontStack(fontFamily);
  const portrait = aspect === "9:16";
  const boxW = g.win.w * S * 0.84;
  const boxH = g.win.h * S * 0.76;
  const fontSize = fitFontSize({
    chars: Math.max(8, headline.length),
    boxW,
    boxH,
    lines: 2,
    charEm: 0.5,
    lineHeight: 1.18,
    max: height * (portrait ? 0.07 : aspect === "1:1" ? 0.085 : 0.1),
    min: height * (portrait ? 0.031 : 0.019),
  });
  const words = headline.split(/\s+/).filter(Boolean);
  const mask = transparent ? "radial-gradient(ellipse 62% 62% at 50% 50%, #000 58%, transparent 100%)" : undefined;

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background, maskImage: mask, WebkitMaskImage: mask }}>
      <canvas ref={soft} width={cw} height={ch} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      <canvas ref={crisp} width={width} height={height} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      {transparent ? null : (
        <AbsoluteFill style={{ background: `radial-gradient(ellipse 75% 75% at 50% 50%, transparent 55%, ${withAlpha(background, 0.6)} 100%)` }} />
      )}
      <div
        style={{
          position: "absolute",
          left: g.win.x * S,
          top: g.win.y * S,
          width: g.win.w * S,
          height: g.win.h * S,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          data-21st-slot="headline"
          style={{
            maxWidth: boxW,
            fontFamily: resolvedFont,
            fontSize,
            lineHeight: 1.18,
            letterSpacing: "-0.01em",
            color,
            textAlign: "center",
            overflowWrap: "anywhere",
            textWrap: "balance",
          }}
        >
          {words.map((w, i) => {
            const s = springSnap(frame, fps, REVEAL + i * 4, { damping: 17, stiffness: 105, mass: 0.9 });
            const blur = (1 - s) * fontSize * 0.14;
            return (
              <React.Fragment key={i}>
                <span
                  style={{
                    display: "inline-block",
                    opacity: Math.max(0, Math.min(1, s * 1.15)),
                    transform: `translateY(${((1 - s) * fontSize * 0.42).toFixed(2)}px)`,
                    filter: blur > 0.05 ? `blur(${blur.toFixed(2)}px)` : undefined,
                  }}
                >
                  {w}
                </span>
                {i < words.length - 1 ? " " : null}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
