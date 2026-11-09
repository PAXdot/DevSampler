// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef } from "react";
import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { easeInOut, easeOut, ramp, springSnap, useLayout, withAlpha } from "../../../kit/index";
import { rng } from "../_lib/noise";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./ferrofluid-reach.schema";

/** Fluid is shaded per pixel at this fraction of the frame, then drawn up with smoothing. */
const Q = 0.75;
const NEG = -1e9;
const TAU = Math.PI * 2;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='23' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

type RGB = [number, number, number];

/** #rgb / #rrggbb(aa) / rgb(a)() to 0..1 channels. */
function rgbOf(color: string, fallback: RGB = [1, 1, 1]): RGB {
  let hex = /^#([0-9a-f]{3,8})$/i.exec(color)?.[1];
  if (hex) {
    if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
    const n = parseInt(hex.slice(0, 6), 16);
    return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
  }
  const m = /rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(color);
  if (m) return [Number(m[1]) / 255, Number(m[2]) / 255, Number(m[3]) / 255];
  return fallback;
}
const lumOf = ([r, g, b]: RGB) => {
  const ch = (s: number) => (s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4));
  return 0.2126 * ch(r) + 0.7152 * ch(g) + 0.0722 * ch(b);
};
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const mul = (a: RGB, k: number): RGB => [a[0] * k, a[1] * k, a[2] * k];
/** Builds a hex string from channels so every canvas color is derived, never a literal. */
const hexOf = (c: RGB) => "#" + c.map((v) => Math.round(Math.max(0, Math.min(1, v)) * 255).toString(16).padStart(2, "0")).join("");
const css = (c: RGB, a: number) => withAlpha(hexOf(c), a);
const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const sm = (a: number, b: number, x: number) => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};
/** Soft-edged rectangle in (azimuth, elevation): a softbox seen in the fluid's mirror. */
const box = (az: number, a0: number, a1: number, el: number, e0: number, e1: number, s: number) =>
  sm(a0 - s, a0 + s, az) * (1 - sm(a1 - s, a1 + s, az)) * sm(e0 - s, e0 + s, el) * (1 - sm(e1 - s, e1 + s, el));
/** Highlight roll-off: linear to 0.82, then a soft shoulder so speculars bloom instead of clipping flat. */
const tone = (v: number) => (v < 0.82 ? Math.max(0, v) : 0.82 + 0.18 * (1 - Math.exp(-(v - 0.82) * 4)));

type Pt = { x: number; y: number; z: number; r: number };
type SpikeSeed = { nx: number; up: number; nz: number; len: number; ph: number; w: number };

/**
 * Ferrofluid in a studio. The fluid is a height field: a half-ellipsoid puddle plus a crown
 * of concave cones (real 3D directions on the dome, projected), smooth-maxed together so
 * spike bases fillet into the body. Every pixel is shaded as a black mirror reflecting a
 * softbox, a brand-colored gel, a strip light and the floor, with Fresnel at the edges.
 * The beat: a bead drops and spreads, the crown erupts twice, a tendril is pulled up to the
 * logo, touches it (the logo locks in) and snaps back into a crown that leans toward it.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ logo, primary, secondary, color, background, spikes, pull, fieldLines, reflection, grain }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: w, height: h, aspect } = useLayout();
  const S = Math.min(w, h);
  const transparent = background === "transparent";
  const TX = rgbOf(color, [0.09, 0.09, 0.11]);
  const dark = transparent ? lumOf(TX) > 0.4 : lumOf(rgbOf(background, [0, 0, 0])) < 0.4;

  // ---------- layout ----------
  const L =
    aspect === "9:16"
      ? { lx: 0.5 * w, ly: 0.35 * h, bw: 0.9 * w, bh: 0.64 * w, floor: 0.805 * h, rx: 0.42 * w, ry: 0.18 * w }
      : aspect === "1:1"
        ? { lx: 0.5 * w, ly: 0.32 * h, bw: 0.86 * S, bh: 0.5 * S, floor: 0.885 * h, rx: 0.34 * S, ry: 0.13 * S }
        : { lx: 0.5 * w, ly: 0.335 * h, bw: 1.15 * h, bh: 0.46 * h, floor: 0.885 * h, rx: 0.38 * h, ry: 0.13 * h };
  /** The logo is the hero: field lines, ripples and the spotlight are sized to its visual radius, not its (wide) box. */
  const LR = L.bh * 0.32;
  const cx = w / 2;
  const rz = L.rx * 0.9;

  // ---------- timeline ----------
  const SP = { damping: 9, stiffness: 170, mass: 0.7 };
  const sp = (d: number) => (frame < d ? 0 : springSnap(frame, fps, d, SP));
  const LAND = 12;
  const rb = Math.cbrt((L.rx * L.ry * rz) / 2) * 0.92;
  const fallT = clamp01(frame / LAND);
  const spread = frame < LAND ? 0 : springSnap(frame, fps, LAND, { damping: 7, stiffness: 120, mass: 0.9 });
  const wob = spread - 1;

  // Reach: an ooze, then the magnet wins and the tendril whips up; a recoiling retract.
  const reachRaw =
    frame < 100
      ? 0.25 * easeOut(ramp(frame, [58, 74], [0, 1])) + 0.75 * Math.pow(ramp(frame, [64, 92], [0, 1]), 2.3)
      : 1 - springSnap(frame, fps, 100, { damping: 10, stiffness: 95, mass: 1 });
  const ext = clamp01(reachRaw);
  const recoil = Math.max(0, -reachRaw);
  const contact = frame >= 92 && frame < 100 ? 1 : 0;

  let bRx: number, bRy: number, bRz: number, bCy: number;
  if (frame < LAND) {
    const g = fallT * fallT;
    bRx = rb * (1 - 0.07 * g);
    bRy = rb * (1 + 0.1 * g);
    bRz = rb;
    bCy = L.floor - rb - 0.3 * h * (1 - g) * 0.8;
  } else {
    const s = Math.min(1, spread);
    bRx = (rb + (L.rx - rb) * s) * (1 + 0.22 * wob);
    bRy = (rb + (L.ry - rb) * s) * (1 - 0.42 * wob);
    bRz = rb + (rz - rb) * s;
    bCy = L.floor - rb * (1 - s);
  }
  bRy *= 1 + 0.14 * ext + 0.22 * recoil;
  bRx *= 1 - 0.05 * ext;

  const A = 0.85 * sp(20) - 0.5 * sp(30) + 0.75 * sp(40) - 0.45 * sp(52) + 0.1 * sp(102);
  const lean = 0.1 + (pull - 0.1) * easeInOut(ramp(frame, [56, 96], [0, 1])) + 0.18 * Math.min(ramp(frame, [70, 92], [0, 1]), ramp(frame, [100, 122], [1, 0]));
  const flash = frame >= 92 ? Math.exp(-(frame - 92) / 5) : 0;
  const lock = frame < 92 ? 0 : springSnap(frame, fps, 92, { damping: 9, stiffness: 160, mass: 0.6 });

  // Logo motion: pulled a little toward the rising fluid, trembles, then snaps into place.
  const logoPull = S * 0.016 * Math.pow(ramp(frame, [66, 92], [0, 1]), 2) * (1 - Math.min(1, lock));
  const tremble = S * 0.0022 * ramp(frame, [78, 92], [0, 1]) * (frame < 92 ? Math.sin(frame * 2.9) : 0);
  const logoCy = L.ly + logoPull;
  const target = { x: L.lx, y: logoCy + LR * 0.85 };

  const seeds = useMemo(() => {
    const r = rng(`ferro-${spikes}`);
    const out: SpikeSeed[] = [];
    for (let i = 0; i < spikes; i++) {
      const up = 0.17 + 0.8 * (1 - (i + 0.5) / spikes);
      const rad = Math.sqrt(1 - up * up);
      const phi = i * 2.399963 + 0.4;
      out.push({ nx: rad * Math.cos(phi), up, nz: rad * Math.sin(phi), len: 0.62 + 0.38 * r(), ph: r() * TAU, w: 0.85 + 0.3 * r() });
    }
    return out;
  }, [spikes]);

  // ---------- geometry for this frame (frame pixels; y down, z toward the viewer) ----------
  const tubes: { pts: Pt[]; k: number }[] = [];
  const Lmax = L.rx * (aspect === "9:16" ? 0.8 : 0.72);
  const domeTop = L.floor - bRy;
  if (frame >= LAND - 1) {
    const ampOn = clamp01(A * 2.2);
    for (const s of seeds) {
      const bx = cx + bRx * s.nx * 0.88;
      const by = bCy - bRy * s.up * 0.88;
      const bz = bRz * s.nz * 0.88;
      if (by > L.floor) continue;
      let dx = s.nx, du = s.up * 1.2, dz = s.nz;
      let n = Math.hypot(dx, du, dz);
      dx /= n; du /= n; dz /= n;
      let mx = target.x - bx, mu = by - target.y, mz = -bz * 0.4;
      n = Math.hypot(mx, mu, mz) || 1;
      mx /= n; mu /= n; mz /= n;
      dx = dx * (1 - lean) + mx * lean;
      du = du * (1 - lean) + mu * lean;
      dz = dz * (1 - lean) + mz * lean;
      n = Math.hypot(dx, du, dz) || 1;
      dx /= n; du /= n; dz /= n;
      const topness = sm(0.55, 0.95, s.up);
      const breathe = 1 + 0.09 * Math.sin(frame * 0.12 + s.ph) * ramp(frame, [96, 128], [0.4, 1]);
      const len = A * Lmax * s.len * (0.72 + 0.28 * s.up) * breathe * (1 - 0.7 * ext * topness);
      const r0 = L.rx * 0.155 * s.w * Math.sqrt(ampOn) * (0.8 + 0.2 * s.len);
      if (r0 < 0.5) continue;
      const pts: Pt[] = [];
      const N = 7;
      for (let j = 0; j <= N; j++) {
        const t = Math.pow(j / N, 0.85);
        // Field-aligned spikes bend: the upper part of each cone curls further toward the magnet.
        const bend = t * t * lean * 0.35 * len;
        pts.push({
          x: bx + dx * len * t + mx * bend,
          y: by - du * len * t - mu * bend,
          z: bz + dz * len * t,
          r: Math.max(0.35, r0 * Math.pow(1 - t, 1.75)),
        });
      }
      tubes.push({ pts, k: r0 * 0.55 });
    }
  }
  // The tendril.
  if (ext > 0.002) {
    const bx = cx, by = domeTop + bRy * 0.22, bz = rz * 0.22;
    const tx = bx + (target.x - bx) * ext, ty = by + (target.y - by) * ext;
    const sway = L.rx * 0.07 * Math.sin(frame * 0.21) * ext * (1 - 0.6 * contact);
    const c1x = bx + sway, c1y = by + (ty - by) * 0.5;
    const grow = Math.min(1, ext * 3.5);
    const neck = L.rx * (0.085 - 0.03 * ext) * (0.6 + 0.4 * grow);
    const flare = L.rx * 0.4 * grow;
    const pts: Pt[] = [];
    const M = 18;
    for (let j = 0; j <= M; j++) {
      const t = j / M;
      const u = 1 - t;
      const x = u * u * bx + 2 * u * t * c1x + t * t * tx;
      const y = u * u * by + 2 * u * t * c1y + t * t * ty;
      const bulb = L.rx * 0.055 * grow * Math.exp(-Math.pow((1 - t) / 0.12, 2));
      pts.push({ x, y, z: bz * (1 - t) + rz * 0.05 * t, r: neck + (flare - neck) * Math.pow(u, 2.6) + bulb - (t > 0.97 ? (t - 0.97) * 10 * neck * 0.6 : 0) });
    }
    tubes.push({ pts, k: L.rx * 0.06 });
    // A tiny crown bursts from the tip where it meets the logo.
    const crown = Math.min(ramp(frame, [86, 93], [0, 1]), ramp(frame, [99, 108], [1, 0]));
    if (crown > 0.01) {
      for (let c = -2; c <= 2; c++) {
        const a = -Math.PI / 2 + c * 0.55;
        const l = L.rx * 0.13 * crown * (1 - Math.abs(c) * 0.18);
        const r0 = L.rx * 0.035 * Math.sqrt(crown);
        const sx = tx, sy = ty + L.rx * 0.02;
        const p2: Pt[] = [];
        for (let j = 0; j <= 4; j++) {
          const t = j / 4;
          p2.push({ x: sx + Math.cos(a) * l * t, y: sy + Math.sin(a) * l * t, z: rz * 0.06, r: Math.max(0.35, r0 * Math.pow(1 - t, 1.6)) });
        }
        tubes.push({ pts: p2, k: r0 * 0.6 });
      }
    }
  }

  const ref = useRef<HTMLCanvasElement>(null);
  const fluidRef = useRef<HTMLCanvasElement | null>(null);
  const reflRef = useRef<HTMLCanvasElement | null>(null);
  /** Reused buffers (sized to the frame at Q) so per-frame work allocates nothing and never stalls on GC. */
  const bufRef = useRef<{ W: number; H: number; Z: Float32Array; C: Float32Array; img: ImageData } | null>(null);

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    if (!fluidRef.current) fluidRef.current = document.createElement("canvas");
    if (!reflRef.current) reflRef.current = document.createElement("canvas");

    const P = rgbOf(primary), Qc = rgbOf(secondary), BG = transparent ? (dark ? mix(P, [0, 0, 0], 0.85) : [0.96, 0.96, 0.95] as RGB) : rgbOf(background, [0, 0, 0]);

    // ---------- fluid height field, in a bbox at Q scale ----------
    const floorQ = L.floor * Q;
    let x0 = cx - bRx, x1 = cx + bRx, y0 = bCy - bRy, y1 = Math.min(L.floor, bCy + bRy);
    for (const t of tubes) for (const p of t.pts) {
      x0 = Math.min(x0, p.x - p.r); x1 = Math.max(x1, p.x + p.r);
      y0 = Math.min(y0, p.y - p.r); y1 = Math.max(y1, p.y + p.r);
    }
    const ox = Math.max(0, Math.floor(x0 * Q) - 3), oy = Math.max(0, Math.floor(y0 * Q) - 3);
    const ex = Math.min(Math.ceil(w * Q), Math.ceil(x1 * Q) + 3), ey = Math.min(Math.ceil(h * Q), Math.ceil(Math.min(y1, L.floor) * Q) + 3);
    const bw = Math.max(2, ex - ox), bh = Math.max(2, ey - oy);
    const W0 = Math.ceil(w * Q) + 8, H0 = Math.ceil(h * Q) + 8;
    const fluid = fluidRef.current;
    if (!bufRef.current || bufRef.current.W !== W0 || bufRef.current.H !== H0) {
      fluid.width = W0;
      fluid.height = H0;
      bufRef.current = { W: W0, H: H0, Z: new Float32Array(W0 * H0), C: new Float32Array(W0 * H0), img: new ImageData(W0, H0) };
    }
    const { Z, C, img } = bufRef.current;
    Z.fill(NEG, 0, bw * bh);
    C.fill(0, 0, bw * bh);
    const floorCov = (py: number) => clamp01(floorQ - py);

    // Dome (half ellipsoid standing on the floor; a falling ball before it lands).
    {
      const qrx = bRx * Q, qry = bRy * Q, qrz = bRz * Q, qcx = cx * Q, qcy = bCy * Q;
      const ya = Math.max(oy, Math.floor(qcy - qry) - 1), yb = Math.min(oy + bh, Math.ceil(qcy + qry) + 2);
      const xa = Math.max(ox, Math.floor(qcx - qrx) - 1), xb = Math.min(ox + bw, Math.ceil(qcx + qrx) + 2);
      for (let py = ya; py < yb; py++) {
        const yc = py + 0.5;
        const fc = floorCov(yc);
        if (fc <= 0) continue;
        const ey2 = (yc - qcy) / qry;
        for (let px = xa; px < xb; px++) {
          const ex2 = (px + 0.5 - qcx) / qrx;
          const q = ex2 * ex2 + ey2 * ey2;
          const sq = Math.sqrt(q);
          const gl = Math.hypot(ex2 / qrx, ey2 / qry) / Math.max(1e-6, sq);
          const d = (sq - 1) / Math.max(1e-6, gl);
          const cov = clamp01(0.5 - d) * fc;
          if (cov <= 0) continue;
          const i = (py - oy) * bw + (px - ox);
          C[i] = Math.max(C[i]!, cov);
          Z[i] = q < 1 ? qrz * Math.sqrt(1 - q) : -d * 2;
        }
      }
    }
    // Tubes: concave cones and the tendril, smooth-maxed in height so bases fillet into the body.
    for (const t of tubes) {
      const k = t.k * Q;
      for (let s = 0; s < t.pts.length - 1; s++) {
        const a = t.pts[s]!, b = t.pts[s + 1]!;
        const ax = a.x * Q, ay = a.y * Q, az = a.z * Q, ar = a.r * Q;
        const bx = b.x * Q, by = b.y * Q, bz = b.z * Q, br = b.r * Q;
        const vx = bx - ax, vy = by - ay;
        const vv = vx * vx + vy * vy || 1e-6;
        const R = Math.max(ar, br) + 1.5;
        const xa = Math.max(ox, Math.floor(Math.min(ax, bx) - R)), xb = Math.min(ox + bw, Math.ceil(Math.max(ax, bx) + R));
        const ya = Math.max(oy, Math.floor(Math.min(ay, by) - R)), yb = Math.min(oy + bh, Math.ceil(Math.max(ay, by) + R));
        for (let py = ya; py < yb; py++) {
          const yc = py + 0.5;
          const fc = floorCov(yc);
          if (fc <= 0) continue;
          for (let px = xa; px < xb; px++) {
            const xc = px + 0.5;
            const wx = xc - ax, wy = yc - ay;
            const tt = clamp01((wx * vx + wy * vy) / vv);
            const dxp = wx - vx * tt, dyp = wy - vy * tt;
            const s2 = Math.sqrt(dxp * dxp + dyp * dyp);
            const r = ar + (br - ar) * tt;
            const dd = s2 - r;
            if (dd > 1) continue;
            const cov = clamp01(0.5 - dd) * fc;
            const zAxis = az + (bz - az) * tt;
            const zz = dd < 0 ? zAxis + Math.sqrt(r * r - s2 * s2) : zAxis - dd * 2;
            const i = (py - oy) * bw + (px - ox);
            if (cov > C[i]!) C[i] = cov;
            const z0 = Z[i]!;
            if (z0 <= NEG) Z[i] = zz;
            else {
              const hk = Math.max(k - Math.abs(z0 - zz), 0) / Math.max(1e-6, k);
              Z[i] = Math.max(z0, zz) + hk * hk * k * 0.25;
            }
          }
        }
      }
    }

    // ---------- shade: a black mirror in a lit studio ----------
    const fctx = fluid.getContext("2d", { willReadFrequently: true })!;
    const D = img.data;
    const ink: RGB = dark ? mix(mul(P, 0.2), [0.01, 0.01, 0.02], 0.3) : mix(mul(TX, 0.28), mul(P, 0.12), 0.25);
    const walls: RGB = dark ? mix(mul(BG, 1.2), mul(P, 0.35), 0.5) : mul(BG, 0.5);
    const floorC: RGB = dark ? mul(P, 0.75) : mix(BG, P, 0.1);
    const keyI = dark ? 2.6 : 2.3;
    const strip = mul(Qc, dark ? 1.9 : 1.7);
    const gel = mul(P, dark ? 2.1 : 1.5);
    const rimC = mul(P, dark ? 0.9 : 0.3);
    const E = 2.5;
    const hot = flash;
    for (let y = 0; y < bh; y++) {
      for (let x = 0; x < bw; x++) {
        const i = y * bw + x;
        const c = C[i]!;
        const k4 = (y * W0 + x) * 4;
        if (c <= 0.002) { D[k4 + 3] = 0; continue; }
        let zc = Z[i]!;
        if (zc <= NEG) zc = 0;
        const zl = x > 0 && Z[i - 1]! > NEG ? Z[i - 1]! : zc - E;
        const zr = x < bw - 1 && Z[i + 1]! > NEG ? Z[i + 1]! : zc - E;
        const zu = y > 0 && Z[i - bw]! > NEG ? Z[i - bw]! : zc - E;
        const zd = y < bh - 1 && Z[i + bw]! > NEG ? Z[i + bw]! : zc - E;
        const gx = (zr - zl) * 0.5, gy = (zd - zu) * 0.5;
        const inv = 1 / Math.sqrt(gx * gx + gy * gy + 1);
        const nx = -gx * inv, ny = -gy * inv, nz = inv;
        // Concave creases (spike bases) catch less light.
        const lap = zl + zr + zu + zd - 4 * zc;
        const ao = lap > 0 ? Math.exp(-lap * 0.06) : 1;
        const rx = 2 * nz * nx, ry = 2 * nz * ny, rzv = 2 * nz * nz - 1;
        const az = Math.atan2(rx, rzv);
        const el = Math.asin(Math.max(-1, Math.min(1, -ry)));
        const fres = 0.05 + 0.95 * Math.pow(1 - nz, 4);
        const fl = sm(0.02, -0.4, el);
        const aaz = Math.abs(az);
        const key = keyI * (box(az, -1.05, -0.42, el, 0.22, 1.3, 0.07) + 0.35 * sm(1.0, 1.35, el));
        const st = box(az, 0.66, 0.92, el, 0.02, 1.15, 0.05);
        const gl = box(az, -2.45, -1.7, el, -0.12, 0.75, 0.12);
        const rim = sm(2.45, 3.0, aaz) * (1 - fl);
        const spec = 0.32 + 0.68 * fres;
        const glint = hot * Math.pow(Math.max(0, -ry), 6) * 1.5;
        for (let ch = 0; ch < 3; ch++) {
          const env = walls[ch]! * (1 - fl) + floorC[ch]! * fl + rimC[ch]! * rim;
          const boxes = key + strip[ch]! * st + gel[ch]! * gl + glint;
          const v = (ink[ch]! * (1 - fres) + env * fres + boxes * spec) * ao;
          D[k4 + ch] = tone(v) * 255;
        }
        D[k4 + 3] = c * 255;
      }
    }
    fctx.putImageData(img, 0, 0, 0, 0, bw, bh);

    // ---------- compose ----------
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.filter = "none";
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, w, h);
    if (!transparent) {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, w, h);
      // Studio light: a soft pool behind the logo and the fluid, darker floor toward the edges.
      const halo = ctx.createRadialGradient(cx, L.ly + (L.floor - L.ly) * 0.3, 0, cx, L.ly + (L.floor - L.ly) * 0.3, Math.max(w, h) * 0.62);
      halo.addColorStop(0, css(dark ? P : mix(BG, [1, 1, 1], 0.6), dark ? 0.2 : 0.55));
      halo.addColorStop(0.5, css(dark ? P : mix(BG, [1, 1, 1], 0.6), dark ? 0.06 : 0.15));
      halo.addColorStop(1, css(BG, 0));
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, w, h);
      const fg = ctx.createLinearGradient(0, L.floor, 0, h);
      fg.addColorStop(0, css(dark ? BG : TX, 0));
      fg.addColorStop(1, css(dark ? [0, 0, 0] : TX, dark ? 0.35 : 0.06));
      ctx.fillStyle = fg;
      ctx.fillRect(0, L.floor, w, h - L.floor);
    }

    // Spotlight on the logo: the hero sits in its own pool of light, fluid below reaching for it.
    {
      const on = 0.35 + 0.65 * Math.min(1, lock);
      const sr = LR * 2.3;
      const g = ctx.createRadialGradient(L.lx, logoCy, 0, L.lx, logoCy, sr);
      // Over footage (transparent) only a faint brand-tinted aura; on a light studio a bright pool.
      const tint = dark || transparent;
      const sc = tint ? P : mix(BG, [1, 1, 1], 0.85);
      const a = (transparent ? 0.6 : 1) * on;
      g.addColorStop(0, css(sc, (tint ? 0.3 : 0.9) * a));
      g.addColorStop(0.45, css(tint ? P : mix(BG, P, 0.12), (tint ? 0.1 : 0.22) * a));
      g.addColorStop(1, css(tint ? P : BG, 0));
      ctx.fillStyle = g;
      ctx.fillRect(L.lx - sr, logoCy - sr, sr * 2, sr * 2);
    }

    // Magnetic field lines between the two poles (logo above, fluid below).
    const fieldA = fieldLines ? 0.16 * Math.min(ramp(frame, [44, 76], [0, 1]), 1) - 0.08 * ramp(frame, [100, 128], [0, 1]) : 0;
    if (fieldA > 0.004) {
      const p1x = L.lx, p1y = logoCy, p2x = cx, p2y = domeTop + bRy * 0.3;
      const lines = 16;
      const step = S * 0.006;
      const reveal = ramp(frame, [44, 90], [0.15, 1]);
      ctx.lineWidth = Math.max(1, S * 0.0015);
      ctx.lineCap = "round";
      const lc = dark ? mix(TX, P, 0.3) : TX;
      for (let l = 0; l < lines; l++) {
        const a0 = Math.PI * (0.12 + 0.76 * (l + 0.5) / lines);
        let x = p1x + Math.cos(a0) * LR * 1.15;
        let y = p1y + Math.sin(a0) * LR * 1.1;
        const pts: [number, number][] = [[x, y]];
        for (let st = 0; st < 420; st++) {
          const d1x = x - p1x, d1y = y - p1y, d2x = x - p2x, d2y = y - p2y;
          const r1 = Math.pow(d1x * d1x + d1y * d1y + 1, 1.5), r2 = Math.pow(d2x * d2x + d2y * d2y + 1, 1.5);
          let fx = d1x / r1 - d2x / r2, fy = d1y / r1 - d2y / r2;
          const fn = Math.hypot(fx, fy) || 1;
          fx /= fn; fy /= fn;
          x += fx * step; y += fy * step;
          pts.push([x, y]);
          if (Math.hypot(d2x, d2y) < bRx * 0.55 || y > L.floor || x < -S * 0.1 || x > w + S * 0.1 || y < -S * 0.1) break;
        }
        const n = Math.max(2, Math.floor(pts.length * reveal));
        const g = ctx.createLinearGradient(p1x, p1y, p2x, p2y);
        g.addColorStop(0, css(lc, 0));
        g.addColorStop(0.25, css(lc, fieldA));
        g.addColorStop(0.8, css(lc, fieldA));
        g.addColorStop(1, css(lc, 0));
        ctx.strokeStyle = g;
        ctx.setLineDash([S * 0.004, S * 0.009]);
        ctx.lineDashOffset = -frame * S * 0.0016;
        ctx.beginPath();
        for (let j = 0; j < n; j++) {
          const p = pts[j]!;
          // Fade lines that wander far from the pair so nothing reaches the frame edges.
          if (j === 0) ctx.moveTo(p[0], p[1]);
          else ctx.lineTo(p[0], p[1]);
        }
        ctx.stroke();
      }
      ctx.setLineDash([]);
    }

    // Contact shadow (light) or emission pool (dark) where the fluid meets the floor.
    const landed = frame < LAND ? Math.pow(fallT, 3) : 1;
    {
      const sr = bRx * 1.25;
      ctx.save();
      ctx.translate(cx, L.floor);
      ctx.scale(1, 0.09);
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, sr);
      const sc = dark ? P : TX;
      g.addColorStop(0, css(sc, (dark ? 0.55 : 0.4) * landed));
      g.addColorStop(0.55, css(sc, (dark ? 0.2 : 0.16) * landed));
      g.addColorStop(1, css(sc, 0));
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(0, 0, sr, 0, TAU);
      ctx.fill();
      ctx.restore();
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    const dx = ox / Q, dy = oy / Q, dw = bw / Q, dh = bh / Q;
    // Mirror on the floor.
    if (reflection) {
      const refl = reflRef.current;
      if (refl.width !== W0 || refl.height !== H0) { refl.width = W0; refl.height = H0; }
      const rctx = refl.getContext("2d", { willReadFrequently: true })!;
      rctx.setTransform(1, 0, 0, 1, 0, 0);
      rctx.globalCompositeOperation = "source-over";
      rctx.clearRect(0, 0, Math.min(W0, bw + 16), Math.min(H0, bh + 16));
      rctx.filter = `blur(${Math.max(1, Math.round(S * 0.003 * Q))}px)`;
      rctx.drawImage(fluid, 0, 0, bw, bh, 0, 0, bw, bh);
      rctx.filter = "none";
      rctx.globalCompositeOperation = "destination-in";
      const fade = rctx.createLinearGradient(0, bh, 0, Math.max(0, bh - L.ry * 1.6 * Q));
      const ac = TX;
      fade.addColorStop(0, css(ac, dark ? 0.42 : 0.3));
      fade.addColorStop(1, css(ac, 0));
      rctx.fillStyle = fade;
      rctx.fillRect(0, 0, bw, bh);
      ctx.save();
      ctx.translate(0, L.floor * 2);
      ctx.scale(1, -1);
      ctx.drawImage(refl, 0, 0, bw, bh, dx, dy, dw, dh);
      ctx.restore();
    }
    ctx.drawImage(fluid, 0, 0, bw, bh, dx, dy, dw, dh);

    // Touch: a flare at the contact point and a ripple through the field.
    if (flash > 0.01) {
      ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
      const fr = S * 0.16 * (0.6 + 0.4 * (1 - flash));
      const g = ctx.createRadialGradient(target.x, target.y, 0, target.x, target.y, fr);
      g.addColorStop(0, css(dark ? mix(P, [1, 1, 1], 0.6) : P, 0.5 * flash));
      g.addColorStop(0.3, css(P, 0.18 * flash));
      g.addColorStop(1, css(P, 0));
      ctx.fillStyle = g;
      ctx.fillRect(target.x - fr, target.y - fr, fr * 2, fr * 2);
      ctx.globalCompositeOperation = "source-over";
    }
    const rip = ramp(frame, [92, 122], [0, 1]);
    if (rip > 0 && rip < 1) {
      for (let k = 0; k < 2; k++) {
        const t = clamp01(rip * 1.15 - k * 0.15);
        if (t <= 0) continue;
        const e = easeOut(t);
        ctx.strokeStyle = css(dark ? mix(P, TX, 0.4) : P, 0.3 * (1 - t) * (1 - t));
        ctx.lineWidth = Math.max(1, S * 0.003 * (1 - t));
        ctx.beginPath();
        ctx.ellipse(L.lx, logoCy, LR * (1.1 + 1.0 * e), LR * (1.0 + 0.8 * e), 0, 0, TAU);
        ctx.stroke();
      }
    }
  }, [frame, w, h, S, L.floor, L.ry, L.ly, L.lx, LR, lock, cx, bRx, bRy, bRz, bCy, tubes, primary, secondary, background, transparent, dark, TX, fieldLines, reflection, logoCy, domeTop, target.x, target.y, flash, fallT]);

  // ---------- logo ----------
  const src = logo || SAMPLE_LOGO;
  const pre = ramp(frame, [6, 26], [0, 0.38]);
  const opacity = pre + (1 - pre) * Math.min(1, lock);
  const scale = 0.93 + 0.07 * lock;
  const blur = (1 - Math.min(1, lock)) * S * 0.0035;
  const P = rgbOf(primary);
  const glow = dark
    ? `drop-shadow(0 0 ${Math.round(S * 0.03)}px ${css(P, 0.25 + 0.5 * flash)})`
    : `drop-shadow(0 ${Math.round(S * 0.012)}px ${Math.round(S * 0.022)}px ${css(TX, 0.12 + 0.1 * Math.min(1, lock))})`;

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <canvas ref={ref} width={w} height={h} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      <Img
        data-21st-slot="logo"
        src={src}
        style={{
          position: "absolute",
          left: L.lx - L.bw / 2 + tremble,
          top: logoCy - L.bh / 2,
          width: L.bw,
          height: L.bh,
          objectFit: "contain",
          opacity,
          transform: scale === 1 ? undefined : `scale(${scale.toFixed(4)})`,
          filter: blur > 0.05 ? `blur(${blur.toFixed(2)}px) ${glow}` : glow,
        }}
      />
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.07 : 0.09, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
