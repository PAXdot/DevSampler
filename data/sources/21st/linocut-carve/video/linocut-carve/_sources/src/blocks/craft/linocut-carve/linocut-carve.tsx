// Built with Remotion - https://remotion.pro/license
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, continueRender, delayRender, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, easeOut, fitFontSize, ramp, springSnap, useLayout, withAlpha } from "../../../kit/index";
import { fbm3, rng, simplex3 } from "../_lib/noise";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./linocut-carve.schema";

const TAU = Math.PI * 2;
const NIGHT: [number, number, number] = [0, 0, 0];
const DAY: [number, number, number] = [255, 255, 255];
/** Echo ridges left standing around the mark before the field is cleared. */
const RINGS = 7;

// ---------- timeline (frames at 30 fps) ----------
const ENTER = 14;
const CARVE0 = 12;
const CARVE_SPAN = 62;
const ROLL_DOWN = 100;
const ROLL0 = 106;
const ROLL1 = 130;
const ROLL_UP = 137;
const PAPER0 = 137;
const PAPER1 = 150;
/** A baren burnishes the back of the sheet; the print ghosts through behind it. */
const BURN0 = 150;
const BURN1 = 166;
const FLIP = 167;
const CAP0 = 193;
const CAP1 = 209;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='5' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")";
const FIBRE =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='f'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' seed='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 1.4 -0.35'/></filter><rect width='100%' height='100%' filter='url(%23f)'/></svg>\")";

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
const mixRGB = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const css = (c: RGB, a = 1) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${a.toFixed(3)})`;
function lum([r, g, b]: RGB): number {
  const ch = (v: number) => {
    const s = Math.max(0, Math.min(255, v)) / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * ch(r) + 0.7152 * ch(g) + 0.0722 * ch(b);
}
const contrast = (a: RGB, b: RGB) => {
  const la = lum(a), lb = lum(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
};
/** Pushes the ink toward `toward` until it separates from `ground`. */
function legibleInk(ink: RGB, ground: RGB, toward: RGB, min: number): RGB {
  let c = ink;
  for (let t = 0; t <= 0.7 && contrast(c, ground) < min; t += 0.05) c = mixRGB(ink, toward, t);
  return c;
}
const smooth = (a: number, b: number, x: number) => {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
const prog = (f: number, a: number, b: number) => ramp(f, [a, b], [0, 1]);

function canvasOf(ref: React.MutableRefObject<HTMLCanvasElement | null>, w: number, h: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  if (!ref.current) ref.current = document.createElement("canvas");
  const c = ref.current;
  if (c.width !== w || c.height !== h) {
    c.width = w;
    c.height = h;
  }
  const ctx = c.getContext("2d", { willReadFrequently: true })!;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = "source-over";
  ctx.filter = "none";
  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  return [c, ctx];
}

// ---------- logo loading ----------
function useLogo(src: string): { img: HTMLImageElement | null; ready: boolean } {
  const [handle] = useState(() => (src ? delayRender(`linocut-carve: loading ${src}`, { timeoutInMilliseconds: 25000 }) : null));
  const released = useRef(false);
  const [state, setState] = useState<{ src: string; img: HTMLImageElement | null }>({ src: "", img: null });
  useEffect(() => {
    if (!src) {
      setState({ src: "", img: null });
      return;
    }
    let live = true;
    const load = (cors: boolean) => {
      const im = new Image();
      if (cors) im.crossOrigin = "anonymous";
      const done = (ok: boolean) => live && setState({ src, img: ok ? im : null });
      im.onload = () => (typeof im.decode === "function" ? im.decode().then(() => done(true), () => done(true)) : done(true));
      im.onerror = () => (cors ? load(false) : done(false));
      im.src = src;
    };
    load(true);
    return () => {
      live = false;
    };
  }, [src]);
  const ready = !src || state.src === src;
  useLayoutEffect(() => {
    if (ready && handle !== null && !released.current) {
      released.current = true;
      continueRender(handle);
    }
  }, [ready, handle]);
  return { img: state.src === src ? state.img : null, ready };
}

// ---------- carve plan ----------
type Stroke = {
  xs: Float32Array;
  ys: Float32Array;
  cum: Float32Array;
  len: number;
  w: number;
  t0: number;
  dur: number;
  band: number;
  chip: boolean;
  seed: number;
  /** Moat cuts use a square-ended gouge so the mark gets a clean edge. */
  blunt: boolean;
};

type Plan = {
  /** Relief silhouette of the mark at block resolution (alpha). */
  sil: HTMLCanvasElement;
  /** The clean channel right round the mark; the moat gouges reveal it as they pass. */
  moat: HTMLCanvasElement;
  /** Thin cuts along the color boundaries inside the mark, so a multi-part logo keeps its parts. */
  inner: HTMLCanvasElement | null;
  strokes: Stroke[];
  pitch: number;
  inset: number;
};

/** Exact 1D squared distance transform (Felzenszwalb & Huttenlocher). */
function edt1d(f: Float64Array, n: number, d: Float64Array, v: Int32Array, z: Float64Array) {
  let k = 0;
  v[0] = 0;
  z[0] = -Infinity;
  z[1] = Infinity;
  for (let q = 1; q < n; q++) {
    let vk = v[k]!;
    let s = (f[q]! + q * q - (f[vk]! + vk * vk)) / (2 * q - 2 * vk);
    while (s <= z[k]!) {
      k--;
      vk = v[k]!;
      s = (f[q]! + q * q - (f[vk]! + vk * vk)) / (2 * q - 2 * vk);
    }
    k++;
    v[k] = q;
    z[k] = s;
    z[k + 1] = Infinity;
  }
  k = 0;
  for (let q = 0; q < n; q++) {
    while (z[k + 1]! < q) k++;
    const vk = v[k]!;
    d[q] = (q - vk) * (q - vk) + f[vk]!;
  }
}

function buildPlan(img: HTMLImageElement | null, bw: number, bh: number, density: number): Plan {
  const M = Math.min(bw, bh);
  const pitch = Math.max(5, (M * 0.03) / density);
  const inset = Math.max(3, pitch * 0.55);

  // --- the mark's silhouette ---
  const sil = document.createElement("canvas");
  sil.width = bw;
  sil.height = bh;
  const sctx = sil.getContext("2d", { willReadFrequently: true })!;
  let readable = true;
  let inner: HTMLCanvasElement | null = null;
  const boxW = bw * (bw < bh ? 0.8 : 0.72), boxH = bh * 0.5;
  let rx = bw / 2, ry = bh / 2, rw = 0, rh = 0;
  if (img) {
    // An SVG with only a viewBox can report 0x0; treat it as square.
    const nw = img.naturalWidth || 512, nh = img.naturalHeight || 512;
    const s = Math.min(boxW / nw, boxH / nh);
    rw = nw * s;
    rh = nh * s;
    rx = (bw - rw) / 2;
    ry = (bh - rh) / 2;
    sctx.drawImage(img, rx, ry, rw, rh);
    try {
      const x0 = Math.max(0, Math.floor(rx)), y0 = Math.max(0, Math.floor(ry));
      const x1 = Math.min(bw, Math.ceil(rx + rw)), y1 = Math.min(bh, Math.ceil(ry + rh));
      const id = sctx.getImageData(x0, y0, Math.max(1, x1 - x0), Math.max(1, y1 - y0));
      const d = id.data;
      let opaque = 0;
      for (let i = 3; i < d.length; i += 4) if (d[i]! > 240) opaque++;
      const n = d.length / 4;
      if (opaque > n * 0.97) {
        // Flat logo on a solid backdrop: the mark is whatever differs from the corner color.
        const cr = d[0]!, cg = d[1]!, cb = d[2]!;
        for (let i = 0; i < d.length; i += 4) {
          const diff = (Math.abs(d[i]! - cr) + Math.abs(d[i + 1]! - cg) + Math.abs(d[i + 2]! - cb)) / 3;
          d[i + 3] = Math.round(smooth(30, 70, diff) * 255);
        }
      } else {
        for (let i = 3; i < d.length; i += 4) d[i] = Math.round(smooth(70, 190, d[i]!) * 255);
      }
      // Inner cuts: where two solid parts of the mark meet in different colors, the
      // carver separates them with a thin V-cut so the print keeps the logo's structure.
      {
        const iw = Math.max(1, x1 - x0), ih = Math.max(1, y1 - y0);
        const k = Math.max(1, Math.round(pitch * 0.2));
        const cut = new Uint8Array(iw * ih);
        let cuts = 0;
        const solid = (q: number) => d[q * 4 + 3]! > 200;
        const diff = (a: number, b: number) =>
          (Math.abs(d[a * 4]! - d[b * 4]!) + Math.abs(d[a * 4 + 1]! - d[b * 4 + 1]!) + Math.abs(d[a * 4 + 2]! - d[b * 4 + 2]!)) / 3;
        for (let y = k; y < ih - k; y++)
          for (let x = k; x < iw - k; x++) {
            const q = y * iw + x;
            if (!solid(q)) continue;
            let hit = false;
            for (const o of [k, -k, k * iw, -k * iw]) {
              const n2 = q + o;
              if (solid(n2) && diff(q, n2) > 22) {
                hit = true;
                break;
              }
            }
            if (hit) {
              cut[q] = 1;
              cuts++;
            }
          }
        // Only worth it when the boundaries are real structure, not anti-aliasing or a gradient.
        if (cuts > 30 && cuts < iw * ih * 0.12) {
          inner = document.createElement("canvas");
          inner.width = bw;
          inner.height = bh;
          const ictx = inner.getContext("2d", { willReadFrequently: true })!;
          const cd = ictx.createImageData(iw, ih);
          for (let q = 0; q < iw * ih; q++) if (cut[q]) cd.data[q * 4 + 3] = 255;
          ictx.putImageData(cd, x0, y0);
          // Soften the stair-steps into a hand-cut line.
          const soft = document.createElement("canvas");
          soft.width = bw;
          soft.height = bh;
          const sx2 = soft.getContext("2d", { willReadFrequently: true })!;
          sx2.filter = `blur(${Math.max(0.6, k * 0.35).toFixed(2)}px)`;
          sx2.drawImage(inner, 0, 0);
          const sd2 = sx2.getImageData(0, 0, bw, bh);
          for (let i = 3; i < sd2.data.length; i += 4) sd2.data[i] = Math.round(smooth(70, 150, sd2.data[i]!) * 255);
          ictx.clearRect(0, 0, bw, bh);
          ictx.putImageData(sd2, 0, 0);
        }
      }
      for (let i = 0; i < d.length; i += 4) {
        d[i] = 0;
        d[i + 1] = 0;
        d[i + 2] = 0;
      }
      sctx.clearRect(0, 0, bw, bh);
      sctx.putImageData(id, x0, y0);
    } catch {
      readable = false;
      sctx.globalCompositeOperation = "source-in";
      sctx.fillStyle = css(NIGHT);
      sctx.fillRect(0, 0, bw, bh);
      sctx.globalCompositeOperation = "source-over";
    }
  } else {
    // Abstract fallback: a sun disc with a broken orbit, carved as a mark.
    const R = M * 0.15;
    sctx.fillStyle = css(NIGHT);
    sctx.beginPath();
    sctx.arc(bw / 2, bh / 2, R, 0, TAU);
    sctx.fill();
    sctx.lineWidth = M * 0.04;
    sctx.lineCap = "round";
    sctx.strokeStyle = css(NIGHT);
    sctx.beginPath();
    sctx.arc(bw / 2, bh / 2, R * 1.62, -2.35, 1.55);
    sctx.stroke();
    sctx.beginPath();
    sctx.arc(bw / 2 + Math.cos(2.1) * R * 1.62, bh / 2 + Math.sin(2.1) * R * 1.62, M * 0.03, 0, TAU);
    sctx.fill();
    rw = rh = R * 3.3;
  }

  // --- distance field (grid) ---
  const cell = Math.max(2, Math.round(M / 230));
  const gw = Math.ceil(bw / cell), gh = Math.ceil(bh / cell);
  const N = gw * gh;
  const inside = new Uint8Array(N);
  if (readable) {
    const sd = sctx.getImageData(0, 0, bw, bh).data;
    for (let j = 0; j < gh; j++)
      for (let i = 0; i < gw; i++) {
        const px = Math.min(bw - 1, Math.round((i + 0.5) * cell)), py = Math.min(bh - 1, Math.round((j + 0.5) * cell));
        inside[j * gw + i] = sd[(py * bw + px) * 4 + 3]! > 127 ? 1 : 0;
      }
  } else {
    for (let j = 0; j < gh; j++)
      for (let i = 0; i < gw; i++) {
        const ex = ((i + 0.5) * cell - bw / 2) / (rw / 2), ey = ((j + 0.5) * cell - bh / 2) / (rh / 2);
        inside[j * gw + i] = ex * ex + ey * ey <= 1 ? 1 : 0;
      }
  }
  const INF = 1e12;
  const grid = new Float64Array(N);
  for (let i = 0; i < N; i++) grid[i] = inside[i] ? 0 : INF;
  const L = Math.max(gw, gh);
  const f = new Float64Array(L), dd = new Float64Array(L), v = new Int32Array(L), zz = new Float64Array(L + 1);
  for (let i = 0; i < gw; i++) {
    for (let j = 0; j < gh; j++) f[j] = grid[j * gw + i]!;
    edt1d(f, gh, dd, v, zz);
    for (let j = 0; j < gh; j++) grid[j * gw + i] = dd[j]!;
  }
  for (let j = 0; j < gh; j++) {
    for (let i = 0; i < gw; i++) f[i] = grid[j * gw + i]!;
    edt1d(f, gw, dd, v, zz);
    for (let i = 0; i < gw; i++) grid[j * gw + i] = dd[i]!;
  }
  // Hand wobble: echo lines drift a little the further they are from the mark.
  const nz = simplex3("linocut-wobble");
  const D = new Float32Array(N);
  for (let j = 0; j < gh; j++)
    for (let i = 0; i < gw; i++) {
      const k = j * gw + i;
      const g = grid[k]!;
      const dist = g >= INF ? M : Math.sqrt(g) * cell;
      const x = (i + 0.5) * cell, y = (j + 0.5) * cell;
      const wob = fbm3(nz, x / (M * 0.45), y / (M * 0.45), 0.5, 2) * pitch * 0.4 * smooth(pitch * 2, pitch * 7, dist);
      const val = dist + wob;
      D[k] = val;
    }

  const sample = (x: number, y: number) => {
    const gx = Math.max(0, Math.min(gw - 1.001, x / cell - 0.5));
    const gy = Math.max(0, Math.min(gh - 1.001, y / cell - 0.5));
    const i0 = gx | 0, j0 = gy | 0, fx = gx - i0, fy = gy - j0;
    const a = D[j0 * gw + i0]!, b = D[j0 * gw + i0 + 1]!, c = D[(j0 + 1) * gw + i0]!, e = D[(j0 + 1) * gw + i0 + 1]!;
    return (a * (1 - fx) + b * fx) * (1 - fy) + (c * (1 - fx) + e * fx) * fy;
  };

  // --- gouge strokes ---
  // Rings: scoops riding the iso-distance bands round the mark (a clean moat, then echo
  // ridges that thin out). Field: parallel hatch along a gently warped direction, cut with
  // a wider gouge so only hand-cut chatter lines survive.
  const r = rng(`linocut-plan-${bw}x${bh}-${Math.round(pitch * 10)}`);
  const cov = new Int32Array(N);
  const strokes: Stroke[] = [];
  const step = pitch * 0.45;
  const ringEnd = pitch * (0.42 + 2 + RINGS + 0.5);
  const th = bw >= bh ? 0.62 : 0.95;
  const ca = Math.cos(th), sa = Math.sin(th);
  const nf = simplex3("linocut-hatch");
  const F = new Float32Array(N);
  for (let j = 0; j < gh; j++)
    for (let i = 0; i < gw; i++) {
      const x = (i + 0.5) * cell, y = (j + 0.5) * cell;
      F[j * gw + i] = x * ca + y * sa + fbm3(nf, x / (M * 0.6), y / (M * 0.6), 1.7, 2) * pitch * 2.2;
    }
  const sampler = (arr: Float32Array) => (x: number, y: number) => {
    const gx = Math.max(0, Math.min(gw - 1.001, x / cell - 0.5));
    const gy = Math.max(0, Math.min(gh - 1.001, y / cell - 0.5));
    const i0 = gx | 0, j0 = gy | 0, fx = gx - i0, fy = gy - j0;
    const a = arr[j0 * gw + i0]!, b = arr[j0 * gw + i0 + 1]!, c = arr[(j0 + 1) * gw + i0]!, e = arr[(j0 + 1) * gw + i0 + 1]!;
    return (a * (1 - fx) + b * fx) * (1 - fy) + (c * (1 - fx) + e * fx) * fy;
  };
  const sF = sampler(F);
  const x0 = inset - pitch, x1 = bw - inset + pitch, y0 = inset - pitch, y1 = bh - inset + pitch;
  const mark = (x: number, y: number, rad: number, id: number) => {
    const ci = x / cell - 0.5, cj = y / cell - 0.5, rr = rad / cell;
    for (let j = Math.max(0, Math.floor(cj - rr)); j <= Math.min(gh - 1, Math.ceil(cj + rr)); j++)
      for (let i = Math.max(0, Math.floor(ci - rr)); i <= Math.min(gw - 1, Math.ceil(ci + rr)); i++)
        if ((i - ci) * (i - ci) + (j - cj) * (j - cj) <= rr * rr) cov[j * gw + i] = id;
  };
  let maxMid = 1;
  const carveLevel = (
    field: (x: number, y: number) => number,
    arr: Float32Array,
    c: number,
    id: number,
    width: () => number,
    reach: number,
    zone: (x: number, y: number) => boolean,
    blunt = false,
  ) => {
    const cand: number[] = [];
    for (let q = 0; q < N; q++) if (!inside[q] && Math.abs(arr[q]! - c) < cell * 0.75) cand.push(q);
    for (let i = cand.length - 1; i > 0; i--) {
      const j = Math.floor(r() * (i + 1));
      const t = cand[i]!;
      cand[i] = cand[j]!;
      cand[j] = t;
    }
    for (const q of cand) {
      if (cov[q] === id) continue;
      const sx = ((q % gw) + 0.5) * cell, sy = (Math.floor(q / gw) + 0.5) * cell;
      if (sx < x0 || sx > x1 || sy < y0 || sy > y1 || !zone(sx, sy)) continue;
      const Lh = pitch * reach * (0.75 + 0.6 * r());
      const trace = (dir: number) => {
        const out: number[] = [];
        let x = sx, y = sy, ptx = 0, pty = 0;
        for (let s = 0; s * step < Lh; s++) {
          const gx = (field(x + cell, y) - field(x - cell, y)) / (2 * cell);
          const gy = (field(x, y + cell) - field(x, y - cell)) / (2 * cell);
          const gm = Math.hypot(gx, gy);
          if (gm < 0.35) break;
          const tx = (-gy / gm) * dir, ty = (gx / gm) * dir;
          if (s > 0 && tx * ptx + ty * pty < 0.55) break;
          ptx = tx;
          pty = ty;
          x += tx * step;
          y += ty * step;
          const err = field(x, y) - c;
          x -= (gx / gm) * err * 0.8;
          y -= (gy / gm) * err * 0.8;
          if (x < x0 || x > x1 || y < y0 || y > y1 || !zone(x, y)) break;
          const cq = Math.min(gh - 1, Math.max(0, Math.floor(y / cell))) * gw + Math.min(gw - 1, Math.max(0, Math.floor(x / cell)));
          if (s > 0 && cov[cq] === id) break;
          out.push(x, y);
        }
        return out;
      };
      const fw = trace(1), bk = trace(-1);
      const pts: number[] = [];
      for (let i = bk.length - 2; i >= 0; i -= 2) pts.push(bk[i]!, bk[i + 1]!);
      pts.push(sx, sy);
      for (let i = 0; i < fw.length; i += 2) pts.push(fw[i]!, fw[i + 1]!);
      for (let i = 0; i < pts.length; i += 2) mark(pts[i]!, pts[i + 1]!, pitch * 0.5, id);
      if (pts.length < 6) continue;
      // Catmull-Rom resample for smooth, unfaceted gouge edges.
      const n = pts.length / 2;
      const P = (i: number): [number, number] => {
        const ii = Math.max(0, Math.min(n - 1, i));
        return [pts[ii * 2]!, pts[ii * 2 + 1]!];
      };
      const xs: number[] = [], ys: number[] = [];
      const sub = Math.max(2, Math.ceil(step / Math.max(1.5, pitch * 0.12)));
      for (let i = 0; i < n - 1; i++) {
        const [ax, ay] = P(i - 1), [bx, by] = P(i), [cx, cy] = P(i + 1), [dx, dy] = P(i + 2);
        for (let s = 0; s < sub; s++) {
          const t = s / sub, t2 = t * t, t3 = t2 * t;
          xs.push(0.5 * (2 * bx + (-ax + cx) * t + (2 * ax - 5 * bx + 4 * cx - dx) * t2 + (-ax + 3 * bx - 3 * cx + dx) * t3));
          ys.push(0.5 * (2 * by + (-ay + cy) * t + (2 * ay - 5 * by + 4 * cy - dy) * t2 + (-ay + 3 * by - 3 * cy + dy) * t3));
        }
      }
      xs.push(pts[pts.length - 2]!);
      ys.push(pts[pts.length - 1]!);
      const cum = new Float32Array(xs.length);
      for (let i = 1; i < xs.length; i++) cum[i] = cum[i - 1]! + Math.hypot(xs[i]! - xs[i - 1]!, ys[i]! - ys[i - 1]!);
      const len = cum[xs.length - 1]!;
      if (len < pitch * 0.6) continue;
      const mid = Math.floor(xs.length / 2);
      const dMid = sample(xs[mid]!, ys[mid]!);
      maxMid = Math.max(maxMid, dMid);
      strokes.push({ xs: Float32Array.from(xs), ys: Float32Array.from(ys), cum, len, w: width(), t0: dMid, dur: 4 + r() * 3.5, band: dMid, chip: r() < 0.5, seed: r(), blunt });
    }
  };
  const all = () => true;
  const K = 2 + RINGS + 1;
  for (let k = 0; k < K; k++) {
    const c = pitch * (0.42 + k);
    const width =
      k < 2 ? () => pitch * 1.5 : k < 2 + RINGS ? () => pitch * (0.56 + 0.24 * ((k - 2) / (RINGS - 1))) : () => pitch * 1.45;
    carveLevel(sample, D, c, k + 1, width, k < 2 ? 5 : 6, all, k < 2);
  }
  // Hatch field beyond the rings.
  let fmin = Infinity, fmax = -Infinity;
  for (let q = 0; q < N; q++) {
    fmin = Math.min(fmin, F[q]!);
    fmax = Math.max(fmax, F[q]!);
  }
  const inField = (x: number, y: number) => sample(x, y) > ringEnd;
  let id = K + 1;
  for (let c = Math.ceil(fmin / pitch) * pitch; c < fmax; c += pitch, id++) {
    carveLevel(sF, F, c, id, () => pitch * (0.86 + 0.22 * r()), 5.5, inField);
  }
  // One outward wave: each scoop starts when the front reaches its middle.
  for (const s of strokes) {
    const band = Math.min(1, s.band / maxMid);
    s.band = band;
    s.t0 = CARVE0 + Math.pow(band, 0.85) * CARVE_SPAN + r() * 10;
  }
  strokes.sort((a, b) => a.t0 - b.t0);
  const moat = document.createElement("canvas");
  moat.width = bw;
  moat.height = bh;
  const mctx = moat.getContext("2d", { willReadFrequently: true })!;
  const md = mctx.createImageData(bw, bh);
  const edgeD = pitch * 2.75;
  for (let y = 0; y < bh; y++)
    for (let x = 0; x < bw; x++) {
      const dv = sample(x + 0.5, y + 0.5);
      if (dv > edgeD + 1) continue;
      md.data[(y * bw + x) * 4 + 3] = Math.round(Math.max(0, Math.min(1, edgeD - dv + 0.5)) * 255);
    }
  mctx.putImageData(md, 0, 0);
  return { sil, moat, inner, strokes, pitch, inset };
}

/** Gouge half-width along the stroke: a long entry, a fat belly, a quick lift out. */
const taper = (u: number) => Math.pow(Math.min(1, u / 0.22), 0.55) * Math.pow(Math.min(1, (1 - u) / 0.14), 0.5);
const bluntTaper = (u: number) => Math.pow(Math.min(1, u / 0.05), 0.35) * Math.pow(Math.min(1, (1 - u) / 0.05), 0.35);

function strokePath(ctx: CanvasRenderingContext2D, s: Stroke, upTo: number, widthMul = 1) {
  const n = s.xs.length;
  let last = n - 1;
  while (last > 0 && s.cum[last]! > upTo) last--;
  if (last < 1) return false;
  const L: number[] = [], R: number[] = [];
  for (let i = 0; i <= last; i++) {
    const a = Math.max(0, i - 1), b = Math.min(n - 1, i + 1);
    let tx = s.xs[b]! - s.xs[a]!, ty = s.ys[b]! - s.ys[a]!;
    const tl = Math.hypot(tx, ty) || 1;
    tx /= tl;
    ty /= tl;
    const hw = (s.w / 2) * widthMul * (s.blunt ? bluntTaper : taper)(s.cum[i]! / s.len);
    L.push(s.xs[i]! - ty * hw, s.ys[i]! + tx * hw);
    R.push(s.xs[i]! + ty * hw, s.ys[i]! - tx * hw);
  }
  ctx.moveTo(L[0]!, L[1]!);
  for (let i = 2; i < L.length; i += 2) ctx.lineTo(L[i]!, L[i + 1]!);
  for (let i = R.length - 2; i >= 0; i -= 2) ctx.lineTo(R[i]!, R[i + 1]!);
  ctx.closePath();
  if (s.blunt) {
    // Round the square ends so neighbouring cuts merge into one clean channel.
    const hw0 = (s.w / 2) * widthMul * 0.8;
    ctx.moveTo(s.xs[0]! + hw0, s.ys[0]!);
    ctx.arc(s.xs[0]!, s.ys[0]!, hw0, 0, TAU);
  }
  if (upTo < s.len || s.blunt) {
    // The gouge's U-shaped cutting edge at the tip.
    const hw = (s.w / 2) * widthMul * (s.blunt ? bluntTaper : taper)(s.cum[last]! / s.len);
    ctx.moveTo(s.xs[last]! + hw, s.ys[last]!);
    ctx.arc(s.xs[last]!, s.ys[last]!, hw, 0, TAU);
  }
  return true;
}

const strokeProgress = (s: Stroke, frame: number) => {
  const u = (frame - s.t0) / s.dur;
  if (u <= 0) return 0;
  if (u >= 1) return 1;
  return u * u * (3 - 2 * u) * 0.85 + u * 0.15;
};

// ---------- textures ----------
function textureField(w: number, h: number, seed: string, scale: number, octaves: number): Float32Array {
  // Low-frequency field at 1/4 res, bilinear-upsampled later by the caller's loop.
  const qw = Math.max(2, Math.ceil(w / 4) + 1), qh = Math.max(2, Math.ceil(h / 4) + 1);
  const nz = simplex3(seed);
  const out = new Float32Array(qw * qh);
  for (let j = 0; j < qh; j++) for (let i = 0; i < qw; i++) out[j * qw + i] = fbm3(nz, (i * 4) / scale, (j * 4) / scale, 0.3, octaves);
  return out;
}
function sampleField(fld: Float32Array, w: number, x: number, y: number): number {
  const qw = Math.max(2, Math.ceil(w / 4) + 1);
  const gx = x / 4, gy = y / 4;
  const i0 = gx | 0, j0 = gy | 0, fx = gx - i0, fy = gy - j0;
  const a = fld[j0 * qw + i0]!, b = fld[j0 * qw + i0 + 1]!, c = fld[(j0 + 1) * qw + i0]!, d = fld[(j0 + 1) * qw + i0 + 1]!;
  return (a * (1 - fx) + b * fx) * (1 - fy) + (c * (1 - fx) + d * fx) * fy;
}
const hash = (x: number, y: number) => {
  let h = (x * 374761393 + y * 668265263) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
};

/** Lino surface: soft mottling plus fine cork-like grain, in one color. */
function linoTexture(w: number, h: number, base: RGB, dark: boolean): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d", { willReadFrequently: true })!;
  const fld = textureField(w, h, "lino-mottle", Math.min(w, h) * 0.18, 3);
  const id = ctx.createImageData(w, h);
  const d = id.data;
  const amp = dark ? 0.09 : 0.06;
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const k = (y * w + x) * 4;
      const m = 1 + sampleField(fld, w, x, y) * amp * 1.4 + (hash(x, y) - 0.5) * amp;
      d[k] = base[0] * m;
      d[k + 1] = base[1] * m;
      d[k + 2] = base[2] * m;
      d[k + 3] = 255;
    }
  ctx.putImageData(id, 0, 0);
  return c;
}

/** Ink coverage: mostly solid, with the salt speckle a hand-inked relief leaves. */
function inkCoverage(w: number, h: number, seed: string, strength: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d", { willReadFrequently: true })!;
  const fld = textureField(w, h, seed, Math.min(w, h) * 0.05, 3);
  const big = textureField(w, h, `${seed}-big`, Math.min(w, h) * 0.35, 2);
  const id = ctx.createImageData(w, h);
  const d = id.data;
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const k = (y * w + x) * 4;
      const n = sampleField(fld, w, x, y) + sampleField(big, w, x, y) * 0.3;
      const salt = hash(x + 17, y * 3 + 5) < 0.05 * strength ? 0.6 : 0;
      const a = Math.max(0, Math.min(1, 1 - smooth(0.3, 0.55, n) * 0.4 * strength - salt - (hash(x * 7 + 3, y + 11) < 0.12 * strength ? 0.25 : 0)));
      d[k + 3] = Math.round(a * 255);
    }
  ctx.putImageData(id, 0, 0);
  return c;
}

/**
 * A lino block lands; U-gouges carve echo lines outward from the logo in quick,
 * tapered scoops (chips flying off each cut); a brayer rolls ink across the relief;
 * a sheet is laid down and turned over to reveal the pulled print, with the
 * carving's ridges printed as hand-cut lines around the mark.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ logo, caption, primary, secondary, color, background, density, grain, fontFamily }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: w, height: h, aspect } = useLayout();
  const S = Math.min(w, h);
  const transparent = background === "transparent";
  const { img, ready } = useLogo(logo.trim() || SAMPLE_LOGO);

  // ---- palette (all from props) ----
  const T = rgbOf(color, [245, 245, 245]);
  const dark = transparent ? lum(T) > 0.4 : lum(rgbOf(background, [0, 0, 0])) < 0.4;
    const base: RGB = transparent ? mixRGB(T, dark ? NIGHT : DAY, dark ? 0.9 : 0.94) : rgbOf(background);
  const Pc = rgbOf(primary, [255, 183, 3]);
  const Sc = rgbOf(secondary, [251, 86, 7]);
  const lino = dark ? mixRGB(mixRGB(base, Sc, 0.27), T, 0.06) : mixRGB(mixRGB(base, Sc, 0.3), T, 0.1);
  const groove = dark ? mixRGB(lino, base, 0.62) : mixRGB(lino, T, 0.2);
  const floor = mixRGB(groove, lino, 0.45);
  const fresh = dark ? mixRGB(lino, Sc, 0.55) : mixRGB(lino, base, 0.6);
  const edge = dark ? mixRGB(lino, base, 0.45) : mixRGB(lino, T, 0.32);
  const inkBlock = legibleInk(Pc, lino, dark ? T : T, 1.9);
  const paper = dark ? mixRGB(base, T, 0.085) : mixRGB(base, DAY, 0.55);
  const inkPrint = legibleInk(Pc, paper, dark ? T : T, 2.2);
  const metal = mixRGB(T, base, dark ? 0.35 : 0.5);

  // ---- layout: block (the plate) inside the sheet's image area ----
  const hasCaption = caption.trim().length > 0;
  let bw: number, bh: number;
  if (aspect === "16:9") {
    bh = h * 0.6;
    bw = bh * 1.32;
  } else if (aspect === "9:16") {
    bw = w * 0.76;
    bh = bw * 1.26;
  } else {
    bw = S * 0.62;
    bh = S * 0.58;
  }
  bw = Math.round(bw);
  bh = Math.round(bh);
  const M = Math.min(bw, bh);
  const margin = Math.round(M * 0.06);
  const capMax = aspect === "9:16" ? h * 0.034 : aspect === "1:1" ? h * 0.03 : h * 0.028;
  const capMin = aspect === "9:16" ? h * 0.031 : h * 0.019;
  const capLines = aspect === "9:16" ? 2 : 1;
  const capSize = hasCaption
    ? Math.max(capMin, fitFontSize({ chars: caption.length, boxW: bw, boxH: capMax * 1.3 * capLines, lines: capLines, charEm: 0.56, lineHeight: 1.3, max: capMax }))
    : 0;
  const capLineCount = hasCaption ? Math.min(capLines, Math.ceil((caption.length * capSize * 0.56 * 1.05) / bw)) : 0;
  const bottom = hasCaption ? Math.round(margin * 0.9 + capSize * 1.3 * Math.max(1, capLineCount) + margin * 0.9) : margin;
  const sheetW = bw + margin * 2, sheetH = bh + margin + bottom;
  const sheetX = Math.round((w - sheetW) / 2), sheetY = Math.round((h - sheetH) / 2);
  const bx = sheetX + margin, by = sheetY + margin;

  const plan = useMemo(() => (ready ? buildPlan(img, bw, bh, density) : null), [ready, img, bw, bh, density]);

  const linoKey = `${bw}x${bh}-${css(lino)}-${dark}`;
  const linoTex = useMemo(() => linoTexture(bw, bh, lino, dark), [linoKey]); // eslint-disable-line react-hooks/exhaustive-deps
  const inkTex = useMemo(() => inkCoverage(bw, bh, "ink-block", 0.35), [bw, bh]);
  const printTex = useMemo(() => inkCoverage(bw, bh, "ink-print", 0.7), [bw, bh]);

  const ref = useRef<HTMLCanvasElement>(null);
  const backRef = useRef<HTMLCanvasElement>(null);
  const frontRef = useRef<HTMLCanvasElement>(null);
  const carveRef = useRef<HTMLCanvasElement | null>(null);
  const grooveRef = useRef<HTMLCanvasElement | null>(null);
  const tmpRef = useRef<HTMLCanvasElement | null>(null);
  const burnRef = useRef<HTMLCanvasElement | null>(null);
  const moatRef = useRef<HTMLCanvasElement | null>(null);
  const blockRef = useRef<HTMLCanvasElement | null>(null);
  const inkRef = useRef<HTMLCanvasElement | null>(null);
  const lipRef = useRef<HTMLCanvasElement | null>(null);
  const cacheRef = useRef<{ key: string; carved: HTMLCanvasElement; lip: HTMLCanvasElement; mask: HTMLCanvasElement } | null>(null);
  const printRef = useRef<{ key: string; ink: HTMLCanvasElement } | null>(null);

  // ---- motion values ----
  const enter = easeOut(prog(frame, 0, ENTER));
  const carveDone = CARVE0 + CARVE_SPAN + 12 + 8;
  const rollHorizontal = aspect !== "9:16";
  const R = M * 0.075;
  const along0 = (rollHorizontal ? bx : by) - R * 0.2;
  const along1 = (rollHorizontal ? bx + bw : by + bh) + R * 0.2;
  const rollU = easeInOut(prog(frame, ROLL0, ROLL1));
  const contact = frame < ROLL0 ? along0 : frame <= ROLL1 ? along0 + (along1 - along0) * rollU : along1 + (frame - ROLL1) * R * 0.12;
  const rollerIn = easeOut(prog(frame, ROLL_DOWN, ROLL0));
  const rollerOut = easeInOut(prog(frame, ROLL1, ROLL_UP));
  const rollerVis = frame >= ROLL_DOWN && frame < ROLL_UP ? rollerIn * (1 - rollerOut) : 0;

  // Paper: laid on (scale down from the camera), pressed, then turned over.
  const lay = easeOut(prog(frame, PAPER0, PAPER1));
  const press = easeInOut(prog(frame, BURN0, BURN1));
  const flipS = frame < FLIP ? 0 : springSnap(frame, fps, FLIP, { damping: 15, stiffness: 72, mass: 1 });
  const angle = 180 * flipS;
  const lift = Math.sin(Math.PI * Math.min(1, flipS)) * S * 0.16;
  const settledPaper = flipS === 1;
  const paperVisible = frame >= PAPER0;

  useLayoutEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d", { willReadFrequently: true });
    if (!ctx || !plan) return;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, w, h);
    const { strokes, pitch, inset, sil } = plan;

    // ================= block composition (block resolution) =================
    const key = `${linoKey}-${strokes.length}-${css(groove)}-${css(fresh)}-${css(T)}`;
    let carved: HTMLCanvasElement, lip: HTMLCanvasElement, mask: HTMLCanvasElement;
    const useCache = frame >= carveDone && cacheRef.current?.key === key;
    if (useCache) {
      ({ carved, lip, mask } = cacheRef.current!);
    } else {
      const ff = frame >= carveDone ? 1e9 : frame;
      // 1. carve mask
      const [A, actx] = canvasOf(carveRef, bw, bh);
      actx.clearRect(0, 0, bw, bh);
      actx.save();
      actx.beginPath();
      actx.rect(inset, inset, bw - inset * 2, bh - inset * 2);
      actx.clip();
      actx.fillStyle = css(NIGHT);
      actx.beginPath();
      for (const s of strokes) {
        if (s.t0 >= ff) break;
        const p = strokeProgress(s, ff);
        if (p > 0) strokePath(actx, s, p * s.len);
      }
      actx.fill();
      actx.restore();
      // Moat: widened moat cuts, trimmed to the clean channel, so no islands survive.
      const [Mw, mwctx] = canvasOf(moatRef, bw, bh);
      mwctx.clearRect(0, 0, bw, bh);
      mwctx.fillStyle = css(NIGHT);
      mwctx.beginPath();
      for (const s of strokes) {
        if (s.t0 >= ff) break;
        if (!s.blunt) continue;
        const p = strokeProgress(s, ff);
        if (p > 0) strokePath(mwctx, s, p * s.len, 2.4);
      }
      mwctx.fill();
      mwctx.globalCompositeOperation = "destination-in";
      mwctx.drawImage(plan.moat, 0, 0);
      actx.drawImage(Mw, 0, 0);
      actx.globalCompositeOperation = "destination-out";
      actx.drawImage(sil, 0, 0);
      actx.globalCompositeOperation = "source-over";
      // The first job: split the mark's parts with thin cuts, opening out from its middle.
      if (plan.inner && ff >= CARVE0 - 4) {
        const u = ff >= 1e9 ? 1 : easeInOut(prog(ff, CARVE0 - 4, CARVE0 + 20));
        actx.save();
        actx.beginPath();
        actx.arc(bw / 2, bh / 2, Math.hypot(bw, bh) * 0.5 * u + 1, 0, TAU);
        actx.clip();
        actx.drawImage(plan.inner, 0, 0);
        actx.restore();
      }

      // 2. groove floor
      const [G, gctx] = canvasOf(grooveRef, bw, bh);
      gctx.fillStyle = css(groove);
      gctx.fillRect(0, 0, bw, bh);
      gctx.lineCap = "round";
      gctx.lineJoin = "round";
      gctx.strokeStyle = css(floor, dark ? 0.55 : 0.6);
      for (const s of strokes) {
        if (s.t0 >= ff) break;
        const p = strokeProgress(s, ff);
        if (p <= 0) continue;
        gctx.lineWidth = s.w * 0.3;
        gctx.beginPath();
        const upTo = p * s.len;
        gctx.moveTo(s.xs[0]!, s.ys[0]!);
        for (let i = 1; i < s.xs.length && s.cum[i]! <= upTo; i++) gctx.lineTo(s.xs[i]!, s.ys[i]!);
        gctx.stroke();
      }
      // Freshly cut lino is lighter for a moment, so the carving front glows.
      if (ff < 1e9) {
        for (const s of strokes) {
          if (s.t0 >= ff) break;
          const age = ff - (s.t0 + s.dur);
          if (age > 14) continue;
          const p = strokeProgress(s, ff);
          if (p <= 0) continue;
          gctx.fillStyle = css(fresh, (dark ? 0.85 : 0.75) * (1 - smooth(-2, 14, age)));
          gctx.beginPath();
          strokePath(gctx, s, p * s.len, 0.9);
          gctx.fill();
        }
      }
      gctx.globalCompositeOperation = "destination-in";
      gctx.drawImage(A, 0, 0);
      gctx.globalCompositeOperation = "source-over";

      // 3. lit block: surface, grooves, wall shading
      const [B, bctx] = canvasOf(blockRef, bw, bh);
      bctx.clearRect(0, 0, bw, bh);
      bctx.drawImage(linoTex, 0, 0);
      bctx.drawImage(G, 0, 0);
      const [Tm, tctx] = canvasOf(tmpRef, bw, bh);
      const ds = Math.max(1.5, pitch * 0.2), dh = Math.max(1, pitch * 0.09);
      // Shadow cast by the top-left wall into the groove.
      tctx.clearRect(0, 0, bw, bh);
      tctx.drawImage(A, 0, 0);
      tctx.globalCompositeOperation = "destination-out";
      tctx.drawImage(A, ds, ds);
      tctx.globalCompositeOperation = "source-in";
      tctx.fillStyle = css(NIGHT, dark ? 0.55 : 0.32);
      tctx.fillRect(0, 0, bw, bh);
      bctx.drawImage(Tm, 0, 0);
      // The bottom-right wall catches the light.
      tctx.globalCompositeOperation = "source-over";
      tctx.clearRect(0, 0, bw, bh);
      tctx.drawImage(A, 0, 0);
      tctx.globalCompositeOperation = "destination-out";
      tctx.drawImage(A, -dh * 1.6, -dh * 1.6);
      tctx.globalCompositeOperation = "source-in";
      tctx.fillStyle = dark ? css(mixRGB(T, Sc, 0.45), 0.22) : css(DAY, 0.4);
      tctx.fillRect(0, 0, bw, bh);
      bctx.drawImage(Tm, 0, 0);
      // Workshop lamp from the top left.
      tctx.globalCompositeOperation = "source-over";
      const lamp = bctx.createLinearGradient(0, 0, bw, bh);
      lamp.addColorStop(0, css(DAY, dark ? 0.07 : 0.12));
      lamp.addColorStop(0.5, css(DAY, 0));
      lamp.addColorStop(1, css(NIGHT, dark ? 0.22 : 0.08));
      bctx.fillStyle = lamp;
      bctx.fillRect(0, 0, bw, bh);

      // Lip highlight on the relief edges (drawn over the ink later).
      const [Lp, lctx] = canvasOf(lipRef, bw, bh);
      lctx.clearRect(0, 0, bw, bh);
      lctx.drawImage(A, dh, dh);
      lctx.globalCompositeOperation = "destination-out";
      lctx.drawImage(A, 0, 0);
      lctx.globalCompositeOperation = "source-in";
      lctx.fillStyle = dark ? css(mixRGB(T, Sc, 0.3), 0.3) : css(DAY, 0.55);
      lctx.fillRect(0, 0, bw, bh);
      lctx.globalCompositeOperation = "source-over";
      carved = B;
      lip = Lp;
      mask = A;
      if (frame >= carveDone) {
        // Freeze copies: the working canvases are reused by later frames.
        const freeze = (src: HTMLCanvasElement) => {
          const c = document.createElement("canvas");
          c.width = bw;
          c.height = bh;
          c.getContext("2d", { willReadFrequently: true })!.drawImage(src, 0, 0);
          return c;
        };
        cacheRef.current = { key, carved: freeze(B), lip: freeze(Lp), mask: freeze(A) };
        ({ carved, lip, mask } = cacheRef.current);
      }
    }

    // ================= stage =================
    const blockScale = 1.05 - 0.05 * enter;
    const cxB = bx + bw / 2, cyB = by + bh / 2;
    const thick = Math.max(3, M * 0.016);
    if (frame < PAPER1 + 30 || !settledPaper) {
      ctx.save();
      ctx.globalAlpha = enter;
      ctx.translate(cxB, cyB);
      ctx.scale(blockScale, blockScale);
      ctx.translate(-cxB, -cyB);
      // Slab shadow + edge.
      ctx.shadowColor = dark ? css(NIGHT, 0.6) : css(T, 0.22);
      ctx.shadowBlur = M * 0.07;
      ctx.shadowOffsetX = M * 0.012;
      ctx.shadowOffsetY = M * 0.03;
      ctx.fillStyle = css(edge);
      ctx.fillRect(bx + thick * 0.4, by + thick, bw, bh);
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.fillStyle = css(mixRGB(edge, NIGHT, 0.18));
      ctx.fillRect(bx + thick * 0.4, by + bh, bw, thick);
      ctx.drawImage(carved, bx, by);

      // Ink on the relief, up to the brayer's contact line.
      if (frame >= ROLL0) {
        const [I, ictx] = canvasOf(inkRef, bw, bh);
        ictx.clearRect(0, 0, bw, bh);
        const reach = contact - (rollHorizontal ? bx : by);
        ictx.fillStyle = css(inkBlock);
        if (rollHorizontal) ictx.fillRect(0, 0, Math.max(0, Math.min(bw, reach)), bh);
        else ictx.fillRect(0, 0, bw, Math.max(0, Math.min(bh, reach)));
        ictx.globalCompositeOperation = "destination-out";
        ictx.drawImage(mask, 0, 0);
        ictx.globalCompositeOperation = "destination-in";
        ictx.drawImage(inkTex, 0, 0);
        // Wet sheen, strongest right behind the roller, drying to satin.
        ictx.globalCompositeOperation = "source-atop";
        const g = rollHorizontal ? ictx.createLinearGradient(reach, 0, reach - bw * 0.9, 0) : ictx.createLinearGradient(0, reach, 0, reach - bh * 0.9);
        const wet = 1 - smooth(ROLL1, ROLL1 + 40, frame) * 0.6;
        g.addColorStop(0, css(DAY, 0.32 * wet));
        g.addColorStop(0.18, css(DAY, 0.1 * wet));
        g.addColorStop(1, css(DAY, 0.03));
        ictx.fillStyle = g;
        ictx.fillRect(0, 0, bw, bh);
        ictx.globalCompositeOperation = "source-over";
        ctx.drawImage(I, bx, by);
      }
      ctx.drawImage(lip, bx, by);
      ctx.restore();
    }

    // ================= chips =================
    if (frame >= CARVE0 && frame < carveDone + 30) {
      const g = S * 0.0016;
      for (const s of strokes) {
        if (!s.chip) continue;
        const tEnd = s.t0 + s.dur;
        if (tEnd > frame) break;
        const life = 16 + s.seed * 10;
        const age = frame - tEnd;
        if (age > life) continue;
        const n = s.xs.length - 1;
        const tx = s.xs[n]! - s.xs[Math.max(0, n - 3)]!, ty = s.ys[n]! - s.ys[Math.max(0, n - 3)]!;
        const tl = Math.hypot(tx, ty) || 1;
        const sp = S * (0.004 + 0.006 * s.seed);
        const vx = (tx / tl) * sp + (s.seed - 0.5) * S * 0.004;
        const vy = (ty / tl) * sp - S * (0.006 + 0.006 * ((s.seed * 7.3) % 1));
        const px = bx + s.xs[n]! + vx * age;
        const py = by + s.ys[n]! + vy * age + 0.5 * g * age * age;
        const rot = s.seed * TAU + age * (s.seed > 0.5 ? 0.32 : -0.32);
        const size = s.w * (0.55 + 0.5 * s.seed);
        const a = 1 - smooth(life * 0.55, life, age);
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(rot);
        ctx.globalAlpha = a;
        // A curled sliver: lit top face over a shaded underside.
        ctx.lineCap = "round";
        ctx.strokeStyle = css(groove);
        ctx.lineWidth = size * 0.42;
        ctx.beginPath();
        ctx.arc(0, size * 0.06, size * 0.5, Math.PI * 1.05, Math.PI * 1.95);
        ctx.stroke();
        ctx.strokeStyle = css(dark ? mixRGB(lino, Sc, 0.35) : lino);
        ctx.lineWidth = size * 0.3;
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.5, Math.PI * 1.08, Math.PI * 1.92);
        ctx.stroke();
        ctx.restore();
      }
    }

    // ================= brayer =================
    if (rollerVis > 0) {
      const cross = rollHorizontal ? cyB : cxB;
      const half = (rollHorizontal ? bh : bw) / 2 + M * 0.05;
      const sc = 1 + 0.08 * (1 - rollerIn) + 0.1 * rollerOut;
      ctx.save();
      if (rollHorizontal) ctx.translate(contact, cross);
      else {
        ctx.translate(cross, contact);
        ctx.rotate(Math.PI / 2);
      }
      ctx.scale(sc, sc);
      ctx.globalAlpha = rollerVis;
      // Local frame: motion is +x, the roller's axis is y.
      // Contact shadow on the block.
      ctx.fillStyle = css(NIGHT, dark ? 0.5 : 0.25);
      ctx.shadowColor = css(NIGHT, dark ? 0.6 : 0.3);
      ctx.shadowBlur = R * 0.9 * sc;
      ctx.shadowOffsetX = R * 0.35;
      ctx.shadowOffsetY = R * 0.45;
      ctx.fillRect(-R * 0.9, -half, R * 1.8, half * 2);
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      // Frame arms and handle (trailing behind).
      const arm = R * 0.16;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = css(metal);
      ctx.lineWidth = arm;
      ctx.beginPath();
      ctx.moveTo(0, -half - R * 0.28);
      ctx.lineTo(-R * 1.4, -half - R * 0.28);
      ctx.lineTo(-R * 3.4, -R * 0.2);
      ctx.lineTo(-R * 3.9, 0);
      ctx.moveTo(0, half + R * 0.28);
      ctx.lineTo(-R * 1.4, half + R * 0.28);
      ctx.lineTo(-R * 3.4, R * 0.2);
      ctx.lineTo(-R * 3.9, 0);
      ctx.stroke();
      // Handle: angled off the block and widening toward the camera, so it reads as
      // held from off-frame rather than lying on the print.
      const hl = S * 0.42, hw2 = R * 0.36;
      ctx.save();
      ctx.translate(-R * 3.9, 0);
      ctx.rotate(-0.55);
      ctx.strokeStyle = css(metal);
      ctx.lineWidth = arm * 1.15;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-R * 0.9, 0);
      ctx.stroke();
      ctx.shadowColor = css(NIGHT, dark ? 0.5 : 0.22);
      ctx.shadowBlur = R * 1.1;
      ctx.shadowOffsetX = R * 0.7;
      ctx.shadowOffsetY = R * 1.0;
      const hg = ctx.createLinearGradient(0, -hw2 * 1.8, 0, hw2 * 1.8);
      hg.addColorStop(0, css(mixRGB(Sc, DAY, 0.3)));
      hg.addColorStop(0.4, css(Sc));
      hg.addColorStop(1, css(mixRGB(Sc, NIGHT, 0.5)));
      ctx.fillStyle = hg;
      const h0 = -R * 0.8, h1 = h0 - hl, wEnd = hw2 * 1.75;
      ctx.beginPath();
      ctx.moveTo(h0, -hw2);
      ctx.lineTo(h1 + wEnd, -wEnd);
      ctx.quadraticCurveTo(h1, -wEnd, h1, 0);
      ctx.quadraticCurveTo(h1, wEnd, h1 + wEnd, wEnd);
      ctx.lineTo(h0, hw2);
      ctx.closePath();
      ctx.fill();
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      // A ferrule where the shank meets the grip.
      ctx.fillStyle = css(metal);
      ctx.beginPath();
      ctx.roundRect(h0 - R * 0.25, -hw2 * 1.08, R * 0.3, hw2 * 2.16, R * 0.06);
      ctx.fill();
      ctx.restore();
      // Axle caps.
      ctx.fillStyle = css(metal);
      ctx.beginPath();
      ctx.roundRect(-R * 0.32, -half - R * 0.42, R * 0.64, R * 0.3, R * 0.1);
      ctx.roundRect(-R * 0.32, half + R * 0.12, R * 0.64, R * 0.3, R * 0.1);
      ctx.fill();
      // The inked cylinder.
      const cg = ctx.createLinearGradient(-R, 0, R, 0);
      cg.addColorStop(0, css(mixRGB(inkBlock, NIGHT, 0.55)));
      cg.addColorStop(0.3, css(inkBlock));
      cg.addColorStop(0.42, css(mixRGB(inkBlock, DAY, 0.45)));
      cg.addColorStop(0.5, css(inkBlock));
      cg.addColorStop(0.82, css(mixRGB(inkBlock, NIGHT, 0.3)));
      cg.addColorStop(1, css(mixRGB(inkBlock, NIGHT, 0.65)));
      ctx.fillStyle = cg;
      ctx.beginPath();
      ctx.roundRect(-R, -half, R * 2, half * 2, R * 0.18);
      ctx.fill();
      // Ink texture rolling round the drum.
      const phi = (contact - along0) / R;
      const rr = rng("brayer-dots");
      ctx.fillStyle = css(DAY, 0.16);
      for (let i = 0; i < 70; i++) {
        const th = rr() * TAU, yy = (rr() * 2 - 1) * half * 0.97, sz = R * (0.03 + rr() * 0.05);
        const a = th + phi;
        const c = Math.cos(a);
        if (c < 0.15) continue;
        ctx.globalAlpha = rollerVis * c;
        ctx.beginPath();
        ctx.ellipse(-R * Math.sin(a), yy, sz * c, sz * 1.6, 0, 0, TAU);
        ctx.fill();
      }
      ctx.globalAlpha = rollerVis;
      // Specular line.
      ctx.fillStyle = css(DAY, 0.55);
      ctx.fillRect(-R * 0.22, -half + R * 0.15, R * 0.07, half * 2 - R * 0.3);
      ctx.restore();
    }

    // ================= paper faces =================
    if (frame >= PAPER0) {
      const pkey = `${key}-${css(paper)}-${css(inkPrint)}`;
      if (!printRef.current || printRef.current.key !== pkey) {
        const c = document.createElement("canvas");
        c.width = bw;
        c.height = bh;
        const pc = c.getContext("2d", { willReadFrequently: true })!;
        pc.fillStyle = css(inkPrint);
        pc.fillRect(0, 0, bw, bh);
        pc.globalCompositeOperation = "destination-out";
        pc.drawImage(mask, 0, 0);
        pc.globalCompositeOperation = "destination-in";
        pc.drawImage(printTex, 0, 0);
        // The mark itself is the biggest relief and takes the ink almost solid.
        const solid = document.createElement("canvas");
        solid.width = bw;
        solid.height = bh;
        const sc2 = solid.getContext("2d", { willReadFrequently: true })!;
        sc2.drawImage(plan.sil, 0, 0);
        sc2.globalCompositeOperation = "source-in";
        sc2.fillStyle = css(inkPrint);
        sc2.fillRect(0, 0, bw, bh);
        sc2.globalCompositeOperation = "destination-out";
        sc2.drawImage(mask, 0, 0);
        sc2.globalCompositeOperation = "destination-in";
        sc2.drawImage(inkTex, 0, 0);
        pc.globalCompositeOperation = "source-over";
        pc.drawImage(solid, 0, 0);
        printRef.current = { key: pkey, ink: c };
      }
      const inkLayer = printRef.current.ink;
      const front = frontRef.current?.getContext("2d", { willReadFrequently: true });
      if (front) {
        front.setTransform(1, 0, 0, 1, 0, 0);
        front.globalAlpha = 1;
        front.globalCompositeOperation = "source-over";
        front.fillStyle = css(paper);
        front.fillRect(0, 0, sheetW, sheetH);
        // Plate mark: the block's edge pressed into the sheet.
        front.strokeStyle = dark ? css(T, 0.06) : css(NIGHT, 0.07);
        front.lineWidth = Math.max(1, M * 0.004);
        front.strokeRect(margin - M * 0.006, margin - M * 0.006, bw + M * 0.012, bh + M * 0.012);
        front.strokeStyle = dark ? css(NIGHT, 0.25) : css(DAY, 0.8);
        front.strokeRect(margin - M * 0.002, margin - M * 0.002, bw + M * 0.004, bh + M * 0.004);
        front.drawImage(inkLayer, margin, margin);
      }
      const back = backRef.current?.getContext("2d", { willReadFrequently: true });
      if (back) {
        back.setTransform(1, 0, 0, 1, 0, 0);
        back.globalAlpha = 1;
        back.globalCompositeOperation = "source-over";
        back.fillStyle = css(paper);
        back.fillRect(0, 0, sheetW, sheetH);
        // Show-through: faint where the sheet only rests, strong where the baren has burnished.
        back.globalAlpha = dark ? 0.07 : 0.05;
        back.drawImage(inkLayer, margin, margin);
        back.globalAlpha = 1;
        if (press > 0) {
          const soft = 0.22;
          const pos = press * (1 + soft);
          const [Bn, bnctx] = canvasOf(burnRef, sheetW, sheetH);
          bnctx.clearRect(0, 0, sheetW, sheetH);
          bnctx.drawImage(inkLayer, margin, margin);
          bnctx.globalCompositeOperation = "destination-in";
          const wipe = bnctx.createLinearGradient(0, 0, sheetW, sheetH);
          const clamp = (v: number) => Math.max(0, Math.min(1, v));
          wipe.addColorStop(0, css(NIGHT, 1));
          wipe.addColorStop(clamp(pos - soft), css(NIGHT, 1));
          wipe.addColorStop(clamp(pos), css(NIGHT, 0));
          wipe.addColorStop(1, css(NIGHT, 0));
          bnctx.fillStyle = wipe;
          bnctx.fillRect(0, 0, sheetW, sheetH);
          bnctx.globalCompositeOperation = "source-over";
          back.globalAlpha = dark ? 0.34 : 0.26;
          back.drawImage(Bn, 0, 0);
          back.globalAlpha = 1;
          // The baren's sheen riding just ahead of the ghost.
          if (press < 1) {
            const band = back.createLinearGradient(0, 0, sheetW, sheetH);
            const c = clamp(pos - soft * 0.5);
            const wdt = 0.07;
            band.addColorStop(0, css(DAY, 0));
            band.addColorStop(clamp(c - wdt), css(DAY, 0));
            band.addColorStop(c, css(DAY, dark ? 0.1 : 0.32));
            band.addColorStop(clamp(c + wdt), css(DAY, 0));
            band.addColorStop(1, css(DAY, 0));
            back.fillStyle = band;
            back.fillRect(0, 0, sheetW, sheetH);
          }
        }
      }
    }
  }, [frame, plan, w, h, bw, bh, bx, by, M, linoKey, linoTex, inkTex, printTex, enter, contact, rollerVis, rollerIn, rollerOut, rollHorizontal, R, along0, settledPaper, press, sheetW, sheetH, margin, dark, S, carveDone, ...lino, ...groove, ...floor, ...fresh, ...edge, ...inkBlock, ...paper, ...inkPrint, ...metal, ...T, ...Sc]);

  // ---- sheet transform ----
  const persp = S * 3.2;
  const layScale = 1 + 0.16 * (1 - lay);
  const layY = -h * 0.05 * (1 - lay);
  const layRot = -3 * (1 - lay);
  const flipping = frame >= FLIP && !settledPaper;
  const sheetTransform = settledPaper
    ? undefined
    : `perspective(${persp.toFixed(1)}px) translateY(${(layY - Math.sin(Math.PI * Math.min(1, flipS)) * S * 0.03).toFixed(2)}px) translateZ(${lift.toFixed(2)}px) rotateX(${(-angle).toFixed(3)}deg) rotateZ(${layRot.toFixed(3)}deg) scale(${layScale.toFixed(4)})`;
  const cosA = Math.abs(Math.cos((angle * Math.PI) / 180));
  const shadowSpread = (1 - lay) * S * 0.06 + lift * 0.35;
  const shadowA = (dark ? 0.55 : 0.2) * lay;
  const shadowCol = dark ? css(NIGHT, shadowA) : withAlpha(color, shadowA);

  // ---- caption write-on ----
  const cap = easeInOut(prog(frame, CAP0, CAP1));
  const font = brandFontStack(fontFamily);
  const faceStyle: React.CSSProperties = { position: "absolute", left: 0, top: 0, width: sheetW, height: sheetH, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" };

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background, overflow: "hidden" }}>
      {!transparent ? (
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse 70% 60% at 38% 30%, ${css(T, dark ? 0.06 : 0.0)} 0%, transparent 70%), radial-gradient(ellipse 80% 80% at 50% 50%, transparent 55%, ${css(dark ? NIGHT : T, dark ? 0.45 : 0.06)} 100%)`,
          }}
        />
      ) : null}
      <canvas ref={ref} width={w} height={h} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      {paperVisible ? (
        <>
          <div
            style={{
              position: "absolute",
              left: sheetX,
              top: sheetY + (sheetH * (1 - Math.max(cosA, 0.08))) / 2 + lift * 0.25,
              width: sheetW,
              height: sheetH * Math.max(cosA, 0.08),
              opacity: lay,
              boxShadow: `0 ${(M * 0.02 + shadowSpread * 0.4).toFixed(1)}px ${(M * 0.05 + shadowSpread).toFixed(1)}px ${shadowCol}`,
              borderRadius: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: sheetX,
              top: sheetY,
              width: sheetW,
              height: sheetH,
              transform: sheetTransform,
              transformStyle: flipping || !settledPaper ? "preserve-3d" : undefined,
              opacity: Math.min(1, lay * 1.6),
            }}
          >
            <canvas ref={backRef} width={sheetW} height={sheetH} style={{ ...faceStyle, display: settledPaper ? "none" : "block" }} />
            <canvas
              ref={frontRef}
              data-21st-slot="logo"
              width={sheetW}
              height={sheetH}
              style={{ ...faceStyle, transform: settledPaper ? undefined : "rotateX(180deg)" }}
            />
            {grain ? (
              <div style={{ ...faceStyle, backgroundImage: FIBRE, backgroundSize: `${Math.round(S * 0.3)}px`, opacity: dark ? 0.08 : 0.12, mixBlendMode: dark ? "screen" : "multiply", transform: settledPaper ? undefined : angle > 90 ? "rotateX(180deg)" : undefined }} />
            ) : null}
            {hasCaption && settledPaper ? (
              <div
                data-21st-slot="caption"
                style={{
                  position: "absolute",
                  left: margin,
                  width: bw,
                  top: margin + bh + margin * 0.9,
                  fontFamily: font,
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: capSize,
                  lineHeight: 1.3,
                  letterSpacing: "0.03em",
                  color,
                  opacity: 0.82,
                  textAlign: "left",
                  overflowWrap: "anywhere",
                  clipPath: cap < 1 ? `inset(-20% ${((1 - cap) * 100).toFixed(2)}% -20% 0)` : undefined,
                }}
              >
                {caption}
              </div>
            ) : null}
          </div>
        </>
      ) : null}
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.07 : 0.09, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
