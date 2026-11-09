// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, Img, continueRender, delayRender, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { easeInOut, easeOut, expoOut, luminance, ramp, useLayout } from "../../../kit/index";
import { fbm3, rng, simplex3 } from "../_lib/noise";
import { SAMPLE_SCREENSHOT } from "../_lib/samples";
import type { schema } from "./emulsion-brush-develop.schema";

type Props = z.infer<typeof schema>;
type Rect = { x: number; y: number; w: number; h: number };
type Ctx = CanvasRenderingContext2D;

/** Samples along each brush stroke. */
const S = 84;
/** Bristles per stroke. */
const K = 60;
/** Develop field resolution (1/DS of the frame): the develop front is soft, so this is free. */
const DS = 4;

// Timeline (frames at 30 fps). The clip holds after SETTLED.
const T_STROKE0 = 4;
const STROKE_DUR = 27;
const T_GHOST: [number, number] = [40, 72];
const T_DEVELOP: [number, number] = [52, 126];
const T_COLOR: [number, number] = [88, 136];
const T_PEAK: [number, number, number] = [110, 126, 154];
const T_WAVE: [number, number] = [60, 146];
const SETTLED = 150;

// ---------- color helpers (brand props only) ----------
function rgbOf(c: string): [number, number, number] {
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
function mix(a: string, b: string, t: number): string {
  const A = rgbOf(a), B = rgbOf(b);
  const k = Math.max(0, Math.min(1, t));
  return `rgb(${Math.round(A[0] + (B[0] - A[0]) * k)},${Math.round(A[1] + (B[1] - A[1]) * k)},${Math.round(A[2] + (B[2] - A[2]) * k)})`;
}
/** Any brand color (hex or rgb()) at an opacity, as rgba() so canvas parses it everywhere. */
function alpha(c: string, a: number): string {
  const [r, g, b] = rgbOf(c);
  return `rgba(${r},${g},${b},${Math.max(0, Math.min(1, a)).toFixed(3)})`;
}
function lum(c: string): number {
  const [r, g, b] = rgbOf(c);
  const ch = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return /^#/.test(c) ? luminance(c) : 0.2126 * ch(r) + 0.7152 * ch(g) + 0.0722 * ch(b);
}
const smooth = (a: number, b: number, x: number) => {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

// ---------- geometry ----------
type Bristle = {
  /** x,y pairs for S+1 samples. */
  pts: Float32Array;
  /** 1 when the segment k -> k+1 carries paint. */
  vis: Uint8Array;
  s0: number;
  s1: number;
  lag: number;
  lw: number;
  aInk: number;
  aMask: number;
};
/** Solid body of a stroke: top and bottom edge (x,y pairs per sample), so thin bristles never leave holes. */
type Core = { top: Float32Array; bot: Float32Array; s0: number; s1: number };
type Stroke = { dir: 1 | -1; xa: number; xb: number; start: number; bristles: Bristle[]; spec: number[]; core: Core };
type Geo = { u: number; img: Rect; E: Rect; F: Rect; BB: Rect; strokes: Stroke[]; hn: number };

function buildGeometry(width: number, height: number, aspect: string, imgAspect: number): Geo {
  const u = Math.min(width, height) / 100;
  const box =
    aspect === "16:9" ? { w: 0.74 * width, h: 0.54 * height }
    : aspect === "9:16" ? { w: 0.66 * width, h: 0.58 * height }
    : { w: 0.64 * width, h: 0.56 * height };
  let w = box.w, h = w / imgAspect;
  if (h > box.h) { h = box.h; w = h * imgAspect; }
  w = Math.round(w); h = Math.round(h);
  const img: Rect = { x: Math.round((width - w) / 2), y: Math.round((height - h) / 2), w, h };
  const m = 5 * u, mx = 8.5 * u;
  const E: Rect = { x: img.x - mx, y: img.y - m, w: img.w + 2 * mx, h: img.h + 2 * m };
  const n = Math.max(3, Math.min(6, Math.round(E.h / (19 * u))));
  const hn = E.h / n;
  const noise = simplex3("emulsion-brush");
  const strokes: Stroke[] = [];
  const gap = n <= 3 ? 12 : n === 4 ? 10 : 8;
  const CLUMPS = 16;
  for (let i = 0; i < n; i++) {
    const r = rng(`emulsion-stroke-${i}`);
    const dir: 1 | -1 = i % 2 === 0 ? 1 : -1;
    const xa = E.x - mx * (0.1 + 0.9 * r());
    const xb = E.x + E.w + mx * (0.1 + 0.9 * r());
    const L = xb - xa;
    const startRoom = Math.max(4, (dir > 0 ? img.x - xa : xb - (img.x + img.w)) - 0.6 * u) / L;
    const endRoom = Math.max(4, (dir > 0 ? xb - (img.x + img.w) : img.x - xa) - 0.6 * u) / L;
    const yc = E.y + (i + 0.5) * hn;
    const wid = hn * 1.56;
    const tilt = (r() - 0.5) * hn * 0.22;
    const bend = (r() - 0.5) * hn * 0.16;
    const cy = (s: number) => yc + tilt * (s - 0.5) * dir + bend * Math.sin(Math.PI * s) + noise(s * 1.6, i * 7.3, 0.5) * hn * 0.035;
    // Pressure: the stroke breathes along its length, a little thinner as the brush unloads.
    const hw = (s: number) => (wid / 2) * (0.93 + 0.06 * Math.sin(Math.PI * s) - 0.05 * s + 0.035 * noise(s * 3.1, i * 2.9, 7.7));
    const xAt = (s: number) => (dir > 0 ? xa + s * L : xb - s * L);
    const bristles: Bristle[] = [];
    // Wet hairs clump: each clump shares its wobble, its dry skips and its tail.
    for (let c = 0; c < CLUMPS; c++) {
      const oc = -1 + (2 * (c + 0.5)) / CLUMPS;
      const ec = Math.abs(oc);
      const clumpTail = Math.pow(r(), 1.3) * (0.3 + 0.7 * ec);
      const clumpSeed = c * 3.7 + i * 17.3;
      const count = 6;
      for (let q = 0; q < count; q++) {
        const o = Math.max(-1, Math.min(1, oc + (r() - 0.5) * (2.3 / CLUMPS)));
        bristles.push(makeBristle(o, clumpTail * (0.7 + 0.3 * r()), clumpSeed, q, 1));
      }
    }
    // Loose hairs past both edges: fine dry streaks that make the edge read as a brush.
    for (let q = 0; q < 16; q++) {
      const side = q % 2 === 0 ? -1 : 1;
      const o = side * (0.97 + r() * 0.1);
      bristles.push(makeBristle(o, Math.pow(r(), 0.8), 100 + q * 5.1 + i * 9, q, 0.45));
    }
    function makeBristle(o: number, tail: number, clumpSeed: number, q: number, thick: number): Bristle {
      const e = Math.abs(o);
      const s0 = startRoom * ((1 - Math.sqrt(Math.max(0, 1 - Math.min(1, e) ** 2))) * 0.8 + r() * 0.2);
      const s1 = 1 - endRoom * Math.min(1, tail);
      const wobA = u * 0.3 * (0.3 + e);
      const pts = new Float32Array((S + 1) * 2);
      const vis = new Uint8Array(S + 1);
      const edgeDry = smooth(0.84, 1.04, e) * 0.9;
      for (let k = 0; k <= S; k++) {
        const s = k / S;
        pts[k * 2] = xAt(s);
        pts[k * 2 + 1] = cy(s) + o * hw(s) + noise(s * 2.2, clumpSeed, 3.3) * wobA + noise(s * 6, clumpSeed + q, 5.5) * u * 0.08;
        const tailDry = smooth(1 - endRoom * 0.9, 1, s) * 0.75;
        const n1 = (noise(s * 8 + clumpSeed, clumpSeed, 9.1) * 0.7 + noise(s * 21, clumpSeed + q * 0.5, 2.2) * 0.3) * 0.5 + 0.5;
        vis[k] = n1 < Math.max(edgeDry, tailDry) * 0.8 ? 0 : 1;
      }
      return {
        pts, vis, s0, s1,
        lag: r() * 0.01,
        lw: Math.max(1, (wid / (CLUMPS * 6)) * (1.5 + r() * 1.5) * thick * (1 - 0.4 * smooth(0.85, 1, e))),
        aInk: (0.25 + 0.75 * r()) * (1 - 0.3 * smooth(0.75, 1, e)),
        aMask: e > 0.9 ? 0.55 + 0.4 * r() : 1,
      };
    }
    const pick = (t: number) => Math.max(0, Math.min(CLUMPS * 6 - 1, Math.round(((t + 1) / 2) * CLUMPS * 6)));
    const top = new Float32Array((S + 1) * 2), bot = new Float32Array((S + 1) * 2);
    for (let k = 0; k <= S; k++) {
      const s = k / S;
      top[k * 2] = bot[k * 2] = xAt(s);
      top[k * 2 + 1] = cy(s) - 0.84 * hw(s);
      bot[k * 2 + 1] = cy(s) + 0.84 * hw(s);
    }
    const core: Core = { top, bot, s0: startRoom * 0.45, s1: 1 - endRoom * 0.92 };
    strokes.push({ dir, xa, xb, start: T_STROKE0 + i * gap, bristles, spec: [pick(-0.52), pick(-0.44), pick(0.18)], core });
  }
  const yTop = E.y - hn * 0.42 - u;
  const yBot = E.y + E.h + hn * 0.42 + u;
  const BB: Rect = { x: E.x - mx * 0.85, y: yTop, w: E.w + mx * 1.7, h: yBot - yTop };
  const F: Rect = { x: BB.x - 0.6 * u, y: BB.y - 0.4 * u, w: BB.w + 1.2 * u, h: BB.h + 0.8 * u };
  return { u, img, E, F, BB, strokes, hn };
}

function brushEase(x: number): number {
  const t = Math.max(0, Math.min(1, x));
  return 0.55 * easeInOut(t) + 0.45 * (1 - Math.pow(1 - t, 2.4));
}

/** Path for one bristle from its start to the brush head (fraction of the stroke). */
function traceBristle(ctx: Ctx, b: Bristle, head: number): boolean {
  const end = Math.min(b.s1, head - b.lag);
  if (end <= b.s0) return false;
  const k0 = Math.ceil(b.s0 * S);
  const kf = end * S;
  const k1 = Math.min(S, Math.floor(kf));
  let pen = false;
  let any = false;
  for (let k = k0; k <= k1; k++) {
    const x = b.pts[k * 2]!, y = b.pts[k * 2 + 1]!;
    if (!pen) { ctx.moveTo(x, y); pen = true; } else { ctx.lineTo(x, y); any = true; }
    if (!b.vis[k]) pen = false;
  }
  if (pen && k1 < S && b.vis[k1]) {
    const f = kf - k1;
    const x = b.pts[k1 * 2]! + (b.pts[(k1 + 1) * 2]! - b.pts[k1 * 2]!) * f;
    const y = b.pts[k1 * 2 + 1]! + (b.pts[(k1 + 1) * 2 + 1]! - b.pts[k1 * 2 + 1]!) * f;
    ctx.lineTo(x, y);
    any = true;
  }
  return any;
}

function fillCore(ctx: Ctx, c: Core, head: number): boolean {
  const end = Math.min(c.s1, head);
  if (end <= c.s0) return false;
  const k0 = Math.ceil(c.s0 * S), k1 = Math.floor(end * S);
  if (k1 <= k0) return false;
  ctx.beginPath();
  for (let k = k0; k <= k1; k++) {
    if (k === k0) ctx.moveTo(c.top[k * 2]!, c.top[k * 2 + 1]!);
    else ctx.lineTo(c.top[k * 2]!, c.top[k * 2 + 1]!);
  }
  for (let k = k1; k >= k0; k--) ctx.lineTo(c.bot[k * 2]!, c.bot[k * 2 + 1]!);
  ctx.closePath();
  ctx.fill();
  return true;
}

// ---------- artwork ----------
function newCanvas(w: number, h: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = Math.max(1, Math.round(w));
  c.height = Math.max(1, Math.round(h));
  return c;
}
const ctx2d = (c: HTMLCanvasElement) => c.getContext("2d", { willReadFrequently: true })!;

type Cache = {
  key?: string;
  L?: HTMLCanvasElement; M?: HTMLCanvasElement; ink?: HTMLCanvasElement; wet?: HTMLCanvasElement;
  strokeKey?: string;
  artKey?: string; mono?: HTMLCanvasElement; color?: HTMLCanvasElement; glow?: HTMLCanvasElement; T?: HTMLCanvasElement;
  fieldKey?: string; field?: Float32Array; D?: HTMLCanvasElement; Dimg?: ImageData; dKey?: string;
  grain?: HTMLCanvasElement;
};

/**
 * Liquid emulsion brushed onto paper in a few wide strokes, then the screenshot
 * develops inside it like a darkroom print: a toned ghost, an uneven developer
 * front, density overshoot, color, and the rough brushed edges stay as its frame.
 */
export const Component: React.FC<Props> = ({ image, color, accent, paperColor, background, tone, marks }) => {
  const frame = useCurrentFrame();
    const { width, height, aspect } = useLayout();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const cache = useRef<Cache>({});
  const [loaded, setLoaded] = useState<{ src: string; w: number; h: number } | null>(null);
  const [failed, setFailed] = useState("");
  const [handle] = useState(() => delayRender("emulsion-brush-develop image", { timeoutInMilliseconds: 60000 }));
  const released = useRef(false);

  // Empty or broken slot: the shared sample page, so the poster reads as a screenshot reveal.
  const src = image && failed !== image ? image : SAMPLE_SCREENSHOT;
  const isSample = src === SAMPLE_SCREENSHOT;
  const ready = loaded?.src === src;
  const imgAspect = !isSample && ready && loaded ? Math.max(0.4, Math.min(3, loaded.w / loaded.h)) : 16 / 10;
  const geo = useMemo(() => buildGeometry(width, height, aspect, imgAspect), [width, height, aspect, imgAspect]);

  const paper = paperColor !== "transparent" ? paperColor : background !== "transparent" ? background : lum(color) > 0.4 ? mix(color, "#000000", 0.95) : mix(color, "#ffffff", 0.95);
  const dark = lum(paper) < 0.4;
  // The brushed rim is paint in the brand tone, so the stroke edge reads against any backdrop.
  const ink = dark ? mix(accent, color, 0.22) : mix(accent, color, 0.32);
  const spec = lum(color) > lum(paper) ? color : paper;

  useLayoutEffect(() => {
    const main = canvasRef.current;
    const mctx = main?.getContext("2d", { willReadFrequently: true });
    if (!main || !mctx) return;
    const imgEl = imgRef.current;
    if (!(ready && imgEl && imgEl.naturalWidth > 0)) return;
    const C = cache.current;
    const { img, BB, F, u, strokes } = geo;
    const t = frame;

    // Offscreen canvases (per size).
    const sizeKey = `${width}x${height}`;
    if (C.key !== sizeKey) {
      C.key = sizeKey;
      C.L = newCanvas(width, height); C.M = newCanvas(width, height);
      C.ink = newCanvas(width, height); C.wet = newCanvas(width, height);
      C.strokeKey = undefined; C.artKey = undefined; C.fieldKey = undefined; C.dKey = undefined;
    }
    if (!C.grain) {
      const g = newCanvas(160, 160);
      const gx = ctx2d(g);
      const data = gx.createImageData(160, 160);
      const r = rng("emulsion-grain");
      for (let i = 0; i < 160 * 160; i++) {
        const v = Math.round(128 + (r() + r() - 1) * 120);
        data.data[i * 4] = v; data.data[i * 4 + 1] = v; data.data[i * 4 + 2] = v; data.data[i * 4 + 3] = 255;
      }
      gx.putImageData(data, 0, 0);
      C.grain = g;
    }
    const L = C.L!, M = C.M!, inkC = C.ink!, wetC = C.wet!;
    const lx = ctx2d(L), mx = ctx2d(M), ix = ctx2d(inkC), wx = ctx2d(wetC);

    // ---- strokes: mask, ink streaks, wet coat ----
    const heads = strokes.map((s) => brushEase((t - s.start) / STROKE_DUR) * 1.02);
    const wetness = strokes.map((s) => 1 - ramp(t, [s.start + STROKE_DUR * 0.6, s.start + STROKE_DUR + 38], [0, 1]));
    const strokeKey = `${geo.img.x},${geo.img.w},${geo.img.h}|${heads.map((h) => h.toFixed(4)).join(",")}|${ink}|${dark}`;
    if (C.strokeKey !== strokeKey) {
      C.strokeKey = strokeKey;
      for (const x of [mx, ix]) { x.setTransform(1, 0, 0, 1, 0, 0); x.globalCompositeOperation = "source-over"; x.clearRect(0, 0, width, height); x.lineCap = "round"; x.lineJoin = "round"; }
      mx.strokeStyle = "#000";
      ix.strokeStyle = ink;
      strokes.forEach((s, i) => {
        const head = heads[i]!;
        if (head <= 0) return;
        mx.fillStyle = "#000"; mx.globalAlpha = 1;
        fillCore(mx, s.core, head);
        ix.fillStyle = ink; ix.globalAlpha = dark ? 0.5 : 0.82;
        fillCore(ix, s.core, head);
        for (const b of s.bristles) {
          mx.beginPath();
          if (!traceBristle(mx, b, head)) continue;
          mx.globalAlpha = b.aMask; mx.lineWidth = b.lw; mx.stroke();
          ix.beginPath(); traceBristle(ix, b, head);
          ix.globalAlpha = b.aInk; ix.lineWidth = b.lw * 0.8; ix.stroke();
        }
      });
      mx.globalAlpha = 1; ix.globalAlpha = 1;
    }
    // Wet coat: brighter right behind the brush head, drying as it goes.
    const wetOn = wetness.some((w, i) => w > 0.002 && heads[i]! > 0);
    wx.setTransform(1, 0, 0, 1, 0, 0);
    wx.globalCompositeOperation = "source-over";
    wx.clearRect(0, 0, width, height);
    if (wetOn) {
      wx.lineCap = "round"; wx.lineJoin = "round";
      strokes.forEach((s, i) => {
        const head = heads[i]!, wet = wetness[i]!;
        if (head <= 0 || wet <= 0.002) return;
        const L0 = s.xb - s.xa;
        const hx = s.dir > 0 ? s.xa + Math.min(1, head) * L0 : s.xb - Math.min(1, head) * L0;
        const tx = hx - s.dir * L0 * 0.55;
        const g = wx.createLinearGradient(tx, 0, hx, 0);
        g.addColorStop(0, alpha(accent, (dark ? 0.16 : 0.12) * wet));
        g.addColorStop(0.8, alpha(accent, (dark ? 0.5 : 0.42) * wet));
        g.addColorStop(1, alpha(accent, (dark ? 0.62 : 0.55) * wet));
        wx.strokeStyle = g;
        for (const b of s.bristles) {
          wx.beginPath();
          if (!traceBristle(wx, b, head)) continue;
          wx.globalAlpha = 0.55 + 0.45 * b.aInk; wx.lineWidth = b.lw * 0.9; wx.stroke();
        }
        const gs = wx.createLinearGradient(tx, 0, hx, 0);
        gs.addColorStop(0, alpha(spec, 0));
        gs.addColorStop(0.85, alpha(spec, 0.55 * wet));
        gs.addColorStop(1, alpha(spec, 0.8 * wet));
        wx.strokeStyle = gs;
        for (const k of s.spec) {
          const b = s.bristles[k]!;
          wx.beginPath();
          if (!traceBristle(wx, b, head)) continue;
          wx.globalAlpha = 1; wx.lineWidth = Math.max(1, b.lw * 0.45); wx.stroke();
        }
      });
      wx.globalAlpha = 1;
    }

    // ---- artwork: color + brand-toned monochrome (cached) ----
    const artKey = `${src}|${img.w}x${img.h}|${accent}|${paper}|${ink}|${color}`;
    if (C.artKey !== artKey) {
      C.artKey = artKey;
      const col = newCanvas(img.w, img.h);
      const cx = ctx2d(col);
      cx.drawImage(imgEl, 0, 0, img.w, img.h);
      const mono = newCanvas(img.w, img.h);
      const mo = ctx2d(mono);
      mo.drawImage(col, 0, 0);
      mo.globalCompositeOperation = "saturation";
      mo.fillStyle = "#808080";
      mo.fillRect(0, 0, img.w, img.h);
      mo.globalCompositeOperation = dark ? "screen" : "multiply";
      mo.globalAlpha = 0.55;
      mo.fillStyle = accent;
      mo.fillRect(0, 0, img.w, img.h);
      mo.globalAlpha = 1;
      mo.globalCompositeOperation = "source-over";
      const glow = newCanvas(Math.ceil(img.w / 8), Math.ceil(img.h / 8));
      const gx = ctx2d(glow);
      gx.filter = `blur(${Math.max(1, Math.round(u * 0.35))}px)`;
      gx.drawImage(col, 0, 0, glow.width, glow.height);
      gx.filter = "none";
      C.color = col; C.mono = mono; C.glow = glow; C.T = newCanvas(img.w, img.h);
    }

    // ---- develop field: static noise + diagonal developer front (cached per size) ----
    const dw = Math.ceil(BB.w / DS), dh = Math.ceil(BB.h / DS);
    const fieldKey = `${dw}x${dh}`;
    if (C.fieldKey !== fieldKey) {
      C.fieldKey = fieldKey;
      const nz = simplex3("emulsion-develop");
      const f = new Float32Array(dw * dh);
      const sc = 3.2 / Math.max(dw, dh);
      for (let y = 0; y < dh; y++) {
        for (let x = 0; x < dw; x++) {
          const fu = x / dw, fv = y / dh;
          const front = fu * 0.62 + fv * 0.38;
          const n = fbm3(nz, x * sc, y * sc, 0.7, 3) * 0.5 + 0.5;
          f[y * dw + x] = 0.58 * front + 0.42 * n;
        }
      }
      C.field = f;
      C.D = newCanvas(dw, dh);
      C.Dimg = ctx2d(C.D).createImageData(dw, dh);
      C.dKey = undefined;
    }
    const g = -0.3 + 1.65 * easeInOut((t - T_DEVELOP[0]) / (T_DEVELOP[1] - T_DEVELOP[0]));
    const ghost = 0.2 * easeOut((t - T_GHOST[0]) / (T_GHOST[1] - T_GHOST[0]));
    const dKey = `${g.toFixed(4)}|${ghost.toFixed(4)}`;
    if (C.dKey !== dKey) {
      C.dKey = dKey;
      const data = C.Dimg!.data, f = C.field!;
      for (let i = 0; i < f.length; i++) {
        const fi = f[i]!;
        const d = Math.max(ghost, smooth(fi - 0.24, fi + 0.04, g));
        data[i * 4 + 3] = Math.round(d * 255);
      }
      ctx2d(C.D!).putImageData(C.Dimg!, 0, 0);
    }
    const D = C.D!;

    // ---- compose the print in L ----
    lx.setTransform(1, 0, 0, 1, 0, 0);
    lx.globalAlpha = 1;
    lx.filter = "none";
    lx.globalCompositeOperation = "source-over";
    lx.clearRect(0, 0, width, height);
    // Rim density: brush-streaked ink that develops with the same front as the image.
    lx.globalAlpha = dark ? 0.92 : 1;
    lx.drawImage(inkC, 0, 0);
    lx.globalAlpha = 1;
    lx.globalCompositeOperation = "destination-in";
    lx.imageSmoothingEnabled = true;
    lx.drawImage(D, BB.x, BB.y, BB.w, BB.h);
    // The emulsion thins toward the brushed edge: dense at the image, translucent at the bristle tips.
    lx.globalCompositeOperation = "destination-out";
    const thin = dark ? 0.3 : 0.14;
    const bands: [number, number, number, number, number, number, number, number][] = [
      [BB.x, BB.y, BB.w, img.y - BB.y, 0, BB.y, 0, img.y],
      [BB.x, img.y + img.h, BB.w, BB.y + BB.h - img.y - img.h, 0, BB.y + BB.h, 0, img.y + img.h],
      [BB.x, BB.y, img.x - BB.x, BB.h, BB.x, 0, img.x, 0],
      [img.x + img.w, BB.y, BB.x + BB.w - img.x - img.w, BB.h, BB.x + BB.w, 0, img.x + img.w, 0],
    ];
    for (const [rx, ry, rw, rh, gx0, gy0, gx1, gy1] of bands) {
      const gr = lx.createLinearGradient(gx0, gy0, gx1, gy1);
      gr.addColorStop(0, `rgba(0,0,0,${thin})`);
      gr.addColorStop(0.55, `rgba(0,0,0,${thin * 0.25})`);
      gr.addColorStop(1, "rgba(0,0,0,0)");
      lx.fillStyle = gr;
      lx.fillRect(rx, ry, rw, rh);
    }
    lx.globalCompositeOperation = "destination-over";
    lx.fillStyle = paper;
    lx.fillRect(0, 0, width, height);
    lx.globalCompositeOperation = "source-over";
    // The image area: paper, then density builds.
    lx.fillStyle = paper;
    lx.fillRect(img.x, img.y, img.w, img.h);
    const colorAmt = (1 - tone) * easeInOut((t - T_COLOR[0]) / (T_COLOR[1] - T_COLOR[0]));
    const T = C.T!, tx = ctx2d(T);
    tx.globalCompositeOperation = "source-over";
    tx.globalAlpha = 1;
    tx.clearRect(0, 0, img.w, img.h);
    tx.drawImage(C.mono!, 0, 0);
    if (colorAmt > 0) { tx.globalAlpha = colorAmt; tx.drawImage(C.color!, 0, 0); tx.globalAlpha = 1; }
    tx.globalCompositeOperation = "destination-in";
    tx.drawImage(D, BB.x - img.x, BB.y - img.y, BB.w, BB.h);
    tx.globalCompositeOperation = "source-over";
    lx.globalCompositeOperation = dark ? "source-over" : "multiply";
    lx.drawImage(T, img.x, img.y);
    // Density overshoot: the print goes a touch too far, then clears.
    const peak = t < T_PEAK[1] ? easeOut((t - T_PEAK[0]) / (T_PEAK[1] - T_PEAK[0])) : 1 - easeInOut((t - T_PEAK[1]) / (T_PEAK[2] - T_PEAK[1]));
    if (peak > 0.001) {
      if (dark) {
        lx.globalCompositeOperation = "lighter";
        lx.globalAlpha = 0.45 * peak;
        lx.drawImage(C.glow!, img.x - img.w * 0.03, img.y - img.h * 0.03, img.w * 1.06, img.h * 1.06);
        lx.globalAlpha = 0.12 * peak;
        lx.drawImage(T, img.x, img.y);
      } else {
        lx.globalCompositeOperation = "multiply";
        lx.globalAlpha = 0.32 * peak;
        lx.drawImage(T, img.x, img.y);
      }
      lx.globalAlpha = 1;
    }
    // Wet coat on top.
    lx.globalCompositeOperation = dark ? "screen" : "source-over";
    if (wetOn) lx.drawImage(wetC, 0, 0);
    // Tray rock: a soft reflection band slides over the wet print.
    const wave = ramp(t, [T_WAVE[0], T_WAVE[1]], [0, 1]);
    const waveA = Math.sin(Math.PI * wave);
    if (waveA > 0.002) {
      const p = -0.25 + 1.5 * easeInOut(wave);
      const ax = BB.x, ay = BB.y, bx = BB.x + BB.w, by = BB.y + BB.h * 0.6;
      const gr = lx.createLinearGradient(ax, ay, bx, by);
      const st = (v: number) => Math.max(0, Math.min(1, v));
      gr.addColorStop(0, alpha(spec, 0));
      gr.addColorStop(st(p - 0.16), alpha(spec, 0));
      gr.addColorStop(st(p), alpha(spec, (dark ? 0.1 : 0.2) * waveA));
      gr.addColorStop(st(p + 0.16), alpha(spec, 0));
      gr.addColorStop(1, alpha(spec, 0));
      lx.globalCompositeOperation = "screen";
      lx.fillStyle = gr;
      lx.fillRect(BB.x, BB.y, BB.w, BB.h);
    }
    // Silver grain.
    lx.globalCompositeOperation = "overlay";
    lx.globalAlpha = dark ? 0.1 : 0.12;
    lx.fillStyle = lx.createPattern(C.grain!, "repeat")!;
    lx.fillRect(BB.x, BB.y, BB.w, BB.h);
    lx.globalAlpha = 1;
    // Only the brushed emulsion survives.
    lx.globalCompositeOperation = "destination-in";
    lx.drawImage(M, 0, 0);
    lx.globalCompositeOperation = "source-over";

    // ---- frame ----
    mctx.setTransform(1, 0, 0, 1, 0, 0);
    mctx.globalAlpha = 1;
    mctx.globalCompositeOperation = "source-over";
    mctx.clearRect(0, 0, width, height);
    if (background !== "transparent") {
      mctx.fillStyle = background;
      mctx.fillRect(0, 0, width, height);
      mctx.globalCompositeOperation = "overlay";
      mctx.globalAlpha = 0.05;
      mctx.fillStyle = mctx.createPattern(C.grain!, "repeat")!;
      mctx.fillRect(0, 0, width, height);
      mctx.globalAlpha = 1;
      mctx.globalCompositeOperation = "source-over";
    }
    const push = 1 + 0.035 * (1 - expoOut(t / SETTLED));
    const pcx = img.x + img.w / 2, pcy = img.y + img.h / 2;
    mctx.setTransform(push, 0, 0, push, pcx * (1 - push), pcy * (1 - push));
    mctx.drawImage(L, 0, 0);
    if (marks) {
      const k = easeInOut((t - 2) / 22);
      if (k > 0) {
        mctx.strokeStyle = alpha(color, 0.5);
        mctx.lineWidth = Math.max(1.5, u * 0.16);
        mctx.lineCap = "butt";
        const gap = 1 * u, len = 2.8 * u * k;
        const corners: [number, number, number, number][] = [[F.x, F.y, -1, -1], [F.x + F.w, F.y, 1, -1], [F.x, F.y + F.h, -1, 1], [F.x + F.w, F.y + F.h, 1, 1]];
        mctx.beginPath();
        for (const [cx, cy, sx, sy] of corners) {
          mctx.moveTo(cx + sx * gap, cy); mctx.lineTo(cx + sx * (gap + len), cy);
          mctx.moveTo(cx, cy + sy * gap); mctx.lineTo(cx, cy + sy * (gap + len));
        }
        mctx.stroke();
      }
    }
    mctx.setTransform(1, 0, 0, 1, 0, 0);

    if (!released.current) { released.current = true; continueRender(handle); }
  }, [frame, geo, width, height, src, ready, accent, paper, dark, ink, spec, color, background, tone, marks, handle]);

  return (
    <AbsoluteFill style={{ background: background === "transparent" ? "transparent" : background }}>
      <canvas ref={canvasRef} width={width} height={height} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      <Img
        key={src}
        ref={imgRef}
        src={src}
        onLoad={(e) => {
          const el = e.currentTarget;
          setLoaded({ src, w: el.naturalWidth || 16, h: el.naturalHeight || 10 });
        }}
        onError={() => {
          if (!isSample) setFailed(image);
          else if (!released.current) { released.current = true; continueRender(handle); }
        }}
        style={{ position: "absolute", left: 0, top: 0, width: 2, height: 2, opacity: 0, pointerEvents: "none" }}
      />
    </AbsoluteFill>
  );
};
