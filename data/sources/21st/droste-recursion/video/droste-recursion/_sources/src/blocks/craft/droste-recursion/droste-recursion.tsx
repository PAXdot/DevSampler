// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, Img, continueRender, delayRender, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { loopPhase, luminance, useLayout } from "../../../kit/index";
import { rng } from "../_lib/noise";
import { SAMPLE_SCREENSHOT } from "../_lib/samples";
import type { schema } from "./droste-recursion.schema";

type Props = z.infer<typeof schema>;
type Rect = { x: number; y: number; w: number; h: number };
type Level = { w: number; h: number; d: Uint8ClampedArray };

const TAU = Math.PI * 2;
/** Resolution of the source plate relative to the frame: the outer level is magnified up to 1/ratio, so keep headroom. */
const FS = 1.5;
/** Output resolution relative to the frame (85%: invisible on a moving map, keeps trilinear under budget). */
const OS = 0.85;
/** Mip levels of the plate: deep levels are minified hard and would shimmer without them. */
const MIPS = 5;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='7' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

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
function alpha(c: string, a: number): string {
  const [r, g, b] = rgbOf(c);
  return `rgba(${r},${g},${b},${Math.max(0, Math.min(1, a)).toFixed(3)})`;
}
function lum(c: string): number {
  if (/^#/.test(c)) return luminance(c);
  const [r, g, b] = rgbOf(c);
  const ch = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * ch(r) + 0.7152 * ch(g) + 0.0722 * ch(b);
}

function rr(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const k = Math.max(0, Math.min(r, w / 2, h / 2));
  ctx.beginPath();
  ctx.moveTo(x + k, y);
  ctx.arcTo(x + w, y, x + w, y + h, k);
  ctx.arcTo(x + w, y + h, x, y + h, k);
  ctx.arcTo(x, y + h, x, y, k);
  ctx.arcTo(x, y, x + w, y, k);
  ctx.closePath();
}

// ---------- layout ----------
type Geo = { u: number; card: Rect; win: Rect; s: number; P: { x: number; y: number }; C: { x: number; y: number }; radius: number; bezel: number };

function buildGeo(W: number, H: number, aspect: string, imgAspect: number, ratio: number, ax: number, ay: number, twist: number): Geo {
  const u = Math.min(W, H) / 100;
  const box = aspect === "16:9" ? { w: 0.66 * W, h: 0.7 * H } : aspect === "9:16" ? { w: 0.86 * W, h: 0.46 * H } : { w: 0.78 * W, h: 0.64 * H };
  let w = box.w, h = w / imgAspect;
  if (h > box.h) { h = box.h; w = h * imgAspect; }
  const card: Rect = { x: (W - w) / 2, y: (H - h) / 2 + (aspect === "9:16" ? -0.02 * H : 0), w, h };
  // The inner copy is the whole frame scaled by s, so it must fit inside the card with a margin.
  const s = Math.max(0.12, Math.min(ratio, (0.76 * card.w) / W, (0.76 * card.h) / H));
  const ww = s * W, wh = s * H;
  const m = 3 * u;
  const cx = Math.max(card.x + m + ww / 2, Math.min(card.x + card.w - m - ww / 2, card.x + ax * card.w));
  const cy = Math.max(card.y + m + wh / 2, Math.min(card.y + card.h - m - wh / 2, card.y + ay * card.h));
  const win: Rect = { x: cx - ww / 2, y: cy - wh / 2, w: ww, h: wh };
  // Fixed point of z -> win.xy + s z: the camera dives toward it forever.
  const P = { x: win.x / (1 - s), y: win.y / (1 - s) };
  // Straight zoom keeps the frame as authored at t=0; the spiral turns around the frame's optical center.
  const C = twist === 0 ? P : { x: W * 0.5, y: H * (aspect === "9:16" ? 0.48 : 0.5) };
  return { u, card, win, s, P, C, radius: Math.min(2.2 * u, card.h * 0.05), bezel: Math.max(2, 0.5 * u) };
}

// ---------- the plate: one level of the recursion (frame with a hole where the next level goes) ----------
function paintFallback(ctx: CanvasRenderingContext2D, r: Rect, u: number, accent: string, secondary: string, color: string, bg: string, dark: boolean) {
  const base = bg === "transparent" ? (dark ? "#101014" : "#f4f4f4") : bg;
  const g = ctx.createLinearGradient(r.x, r.y, r.x + r.w, r.y + r.h);
  g.addColorStop(0, mix(base, accent, dark ? 0.32 : 0.18));
  g.addColorStop(0.55, mix(base, accent, dark ? 0.12 : 0.06));
  g.addColorStop(1, mix(base, secondary, dark ? 0.3 : 0.22));
  ctx.fillStyle = g;
  ctx.fillRect(r.x, r.y, r.w, r.h);
  // Soft brand blooms.
  const R = rng("droste-fallback");
  const blobs: [string, number, number, number][] = [
    [accent, 0.18, 0.28, 0.55],
    [secondary, 0.82, 0.78, 0.5],
    [accent, 0.62, 0.12, 0.3],
    [secondary, 0.3, 0.9, 0.28],
  ];
  for (const [c, bx, by, br] of blobs) {
    const x = r.x + bx * r.w, y = r.y + by * r.h, rad = br * Math.max(r.w, r.h) * (0.85 + 0.3 * R());
    const rg = ctx.createRadialGradient(x, y, 0, x, y, rad);
    rg.addColorStop(0, alpha(c, dark ? 0.55 : 0.4));
    rg.addColorStop(1, alpha(c, 0));
    ctx.fillStyle = rg;
    ctx.fillRect(r.x, r.y, r.w, r.h);
  }
  // Contour lines: concentric rounded rects around the plate's center give the recursion a texture to rhyme with.
  ctx.save();
  ctx.lineWidth = Math.max(1, 0.12 * u);
  ctx.strokeStyle = alpha(dark ? "#ffffff" : color, dark ? 0.1 : 0.08);
  const n = 14;
  for (let i = 1; i <= n; i++) {
    const k = i / n;
    const w = r.w * k, h = r.h * k;
    rr(ctx, r.x + (r.w - w) * 0.42, r.y + (r.h - h) * 0.4, w, h, Math.min(w, h) * 0.18);
    ctx.stroke();
  }
  // Dot grid.
  ctx.fillStyle = alpha(dark ? "#ffffff" : color, dark ? 0.12 : 0.1);
  const step = 2.4 * u;
  for (let y = r.y + step / 2; y < r.y + r.h; y += step) for (let x = r.x + step / 2; x < r.x + r.w; x += step) ctx.fillRect(x, y, Math.max(1, 0.18 * u), Math.max(1, 0.18 * u));
  ctx.restore();
}

function buildPlate(
  W: number, H: number, geo: Geo, img: HTMLImageElement | null,
  p: { accent: string; secondary: string; color: string; background: string; dark: boolean },
): Level[] {
  const { accent, secondary, color, background, dark } = p;
  const cw = Math.round(W * FS), ch = Math.round(H * FS);
  const cv = document.createElement("canvas");
  cv.width = cw; cv.height = ch;
  const ctx = cv.getContext("2d", { willReadFrequently: true })!;
  ctx.setTransform(FS, 0, 0, FS, 0, 0);
  const { u, card, win, P, radius, bezel } = geo;
  const transparent = background === "transparent";

  if (!transparent) {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, W, H);
    // Light pools: primary near the dive point, secondary across the frame. They repeat on every level.
    const g1 = ctx.createRadialGradient(P.x, P.y, 0, P.x, P.y, Math.max(W, H) * 0.75);
    g1.addColorStop(0, alpha(accent, dark ? 0.2 : 0.2));
    g1.addColorStop(1, alpha(accent, 0));
    ctx.fillStyle = g1;
    ctx.fillRect(0, 0, W, H);
    const qx = W - P.x, qy = H - P.y;
    const g2 = ctx.createRadialGradient(qx, qy, 0, qx, qy, Math.max(W, H) * 0.6);
    g2.addColorStop(0, alpha(secondary, dark ? 0.12 : 0.1));
    g2.addColorStop(1, alpha(secondary, 0));
    ctx.fillStyle = g2;
    ctx.fillRect(0, 0, W, H);
  }

  // Card shadow.
  ctx.save();
  rr(ctx, card.x, card.y, card.w, card.h, radius);
  ctx.shadowColor = dark ? "rgba(0,0,0,0.55)" : alpha(color, 0.3);
  ctx.shadowBlur = 5 * u * FS;
  ctx.shadowOffsetY = 1.6 * u * FS;
  ctx.fillStyle = transparent ? (dark ? "#000000" : "#ffffff") : background;
  ctx.fill();
  ctx.restore();

  // Screenshot (or abstract plate).
  ctx.save();
  rr(ctx, card.x, card.y, card.w, card.h, radius);
  ctx.clip();
  if (img && img.naturalWidth > 0) {
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    // Cover-fit in destination space (already clipped to the card): source-rect crops
    // break on SVGs without an intrinsic size.
    const k = Math.max(card.w / img.naturalWidth, card.h / img.naturalHeight);
    const dw = img.naturalWidth * k, dh = img.naturalHeight * k;
    ctx.drawImage(img, card.x + (card.w - dw) / 2, card.y + (card.h - dh) / 2, dw, dh);
  } else {
    paintFallback(ctx, card, u, accent, secondary, color, background, dark);
  }
  // Glass sheen across the top of the card.
  const sh = ctx.createLinearGradient(0, card.y, 0, card.y + card.h);
  sh.addColorStop(0, `rgba(255,255,255,${dark ? 0.07 : 0.1})`);
  sh.addColorStop(0.35, "rgba(255,255,255,0)");
  ctx.fillStyle = sh;
  ctx.fillRect(card.x, card.y, card.w, card.h);
  // The screenshot dims a touch around the inner copy, so the copy reads as a lit window.
  const dimR = Math.max(win.w, win.h) * 1.1;
  const dg = ctx.createRadialGradient(win.x + win.w / 2, win.y + win.h / 2, dimR * 0.4, win.x + win.w / 2, win.y + win.h / 2, dimR);
  dg.addColorStop(0, dark ? "rgba(0,0,0,0.38)" : alpha(color, 0.2));
  dg.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = dg;
  ctx.fillRect(card.x, card.y, card.w, card.h);
  ctx.restore();

  // Card hairline.
  ctx.save();
  rr(ctx, card.x + 0.5, card.y + 0.5, card.w - 1, card.h - 1, radius);
  ctx.lineWidth = Math.max(1, 0.12 * u);
  ctx.strokeStyle = dark ? "rgba(255,255,255,0.14)" : alpha(color, 0.14);
  ctx.stroke();
  ctx.restore();

  // Window bezel: the mark every nested level carries.
  const b = bezel;
  const bx = win.x - b, by = win.y - b, bw = win.w + 2 * b, bh = win.h + 2 * b;
  ctx.save();
  rr(ctx, bx, by, bw, bh, b * 1.8);
  if (dark) {
    ctx.shadowColor = alpha(accent, 0.95);
    ctx.shadowBlur = 3.2 * u * FS;
  } else {
    ctx.shadowColor = alpha(color, 0.28);
    ctx.shadowBlur = 2.6 * u * FS;
    ctx.shadowOffsetY = 0.7 * u * FS;
  }
  ctx.fillStyle = dark ? mix(accent, "#ffffff", 0.18) : accent;
  ctx.fill();
  if (dark) {
    // Second pass: tighter, hotter core of the glow.
    ctx.shadowBlur = 1 * u * FS;
    ctx.fill();
  }
  ctx.restore();
  // Inner hairline in the secondary color.
  ctx.save();
  ctx.lineWidth = Math.max(1, b * 0.36);
  ctx.strokeStyle = dark ? alpha(mix(secondary, "#ffffff", 0.3), 0.9) : alpha(secondary, 0.95);
  ctx.strokeRect(win.x - b * 0.3, win.y - b * 0.3, win.w + b * 0.6, win.h + b * 0.6);
  ctx.restore();
  // The hole the next level shows through (never sampled, but keep it clean).
  ctx.clearRect(win.x, win.y, win.w, win.h);

  // Mip chain.
  const levels: Level[] = [];
  let src: HTMLCanvasElement = cv;
  for (let l = 0; l < MIPS; l++) {
    if (l > 0) {
      const n = document.createElement("canvas");
      n.width = Math.max(2, Math.round(src.width / 2));
      n.height = Math.max(2, Math.round(src.height / 2));
      const nc = n.getContext("2d", { willReadFrequently: true })!;
      nc.imageSmoothingEnabled = true;
      nc.imageSmoothingQuality = "high";
      nc.drawImage(src, 0, 0, n.width, n.height);
      src = n;
    }
    const c2 = src.getContext("2d", { willReadFrequently: true })!;
    levels.push({ w: src.width, h: src.height, d: c2.getImageData(0, 0, src.width, src.height).data });
  }
  return levels;
}

/** Bilinear tap into one mip level, scaled by `w`, written to TAP[0..3] (straight alpha RGBA). */
const TAP = new Float64Array(4);
function sample(lv: Level, fxIn: number, fyIn: number, w: number) {
  const lw = lv.w, lh = lv.h, d = lv.d;
  let fx = fxIn - 0.5, fy = fyIn - 0.5;
  if (fx < 0) fx = 0; else if (fx > lw - 1.001) fx = lw - 1.001;
  if (fy < 0) fy = 0; else if (fy > lh - 1.001) fy = lh - 1.001;
  const x0 = fx | 0, y0 = fy | 0;
  const ax = fx - x0, ay = fy - y0;
  const i00 = (y0 * lw + x0) << 2, i01 = i00 + (lw << 2);
  const w11 = ax * ay * w, w01 = ay * w - w11, w10 = ax * w - w11, w00 = w - w10 - w01 - w11;
  TAP[0] = d[i00]! * w00 + d[i00 + 4]! * w10 + d[i01]! * w01 + d[i01 + 4]! * w11;
  TAP[1] = d[i00 + 1]! * w00 + d[i00 + 5]! * w10 + d[i01 + 1]! * w01 + d[i01 + 5]! * w11;
  TAP[2] = d[i00 + 2]! * w00 + d[i00 + 6]! * w10 + d[i01 + 2]! * w01 + d[i01 + 6]! * w11;
  TAP[3] = d[i00 + 3]! * w00 + d[i00 + 7]! * w10 + d[i01 + 3]! * w01 + d[i01 + 7]! * w11;
}

// ---------- static per-pixel map (log-polar coordinates of the output) ----------
type MapData = { ow: number; oh: number; A: Float32Array; G: Float32Array; CB: Float32Array; SB: Float32Array; K: Float32Array; L: number };

function buildMap(W: number, H: number, geo: Geo, twist: number): MapData {
  const ow = Math.round(W * OS), oh = Math.round(H * OS);
  const n = ow * oh;
  const A = new Float32Array(n), G = new Float32Array(n), CB = new Float32Array(n), SB = new Float32Array(n), K = new Float32Array(n);
  const { s, P, C } = geo;
  const L = Math.log(1 / s);
  const q = twist;
  const tw = (q * L) / TAU;
  const betaAbs = Math.sqrt(1 + tw * tw);
  // Spiral: a gentle pull-back so the outermost turn still reads as the full card.
  const pull = q === 0 ? 0 : Math.log(0.92);
  // Content orientation is fixed per screen position; turn it so the ring at ~1/3 of the short side reads upright.
  const rot = q === 0 ? 0 : tw * Math.log(0.34 * Math.min(W, H)) + Math.atan(tw);
  const exR = W - P.x, exL = P.x, eyB = H - P.y, eyT = P.y;
  for (let py = 0; py < oh; py++) {
    const y = (py + 0.5) / OS - C.y;
    for (let px = 0; px < ow; px++) {
      const x = (px + 0.5) / OS - C.x;
      const i = py * ow + px;
      const r2 = Math.max(1e-6, x * x + y * y);
      const lr = 0.5 * Math.log(r2);
      const th = Math.atan2(y, x);
      // Escher map: w_src = (1 - i q L / 2pi) * w_out. Integer q keeps the branch cut seamless.
      const a = lr + tw * th + pull;
      const b = th - tw * lr + rot;
      const cb = Math.cos(b), sb = Math.sin(b);
      const nx = cb > 0 ? cb / exR : -cb / exL;
      const ny = sb > 0 ? sb / eyB : -sb / eyT;
      A[i] = a;
      G[i] = a + Math.log(Math.max(nx, ny, 1e-9));
      CB[i] = cb;
      SB[i] = sb;
      // log2 of (plate texels per output pixel) minus the per-frame radius term.
      K[i] = Math.log2((FS * betaAbs) / (Math.sqrt(r2) * OS));
    }
  }
  return { ow, oh, A, G, CB, SB, K, L };
}

/**
 * Droste Loop: the screenshot holds a copy of the whole frame inside itself, and
 * that copy holds another, forever. Rendered as a per-pixel log-polar map on
 * Canvas2D (CPU), so the camera can dive straight in or, Escher style, spiral in
 * with each level one turn deeper. The dive is one level per loop: frame N = frame 0.
 */
export const Component: React.FC<Props> = ({ image, color, accent, secondary, background, twist, anchorX, anchorY, ratio, cycles, grain }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const { width, height, aspect } = useLayout();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState<{ src: string; w: number; h: number } | null>(null);
  const [failed, setFailed] = useState("");
  const [handle] = useState(() => delayRender("droste-recursion plate", { timeoutInMilliseconds: 60000 }));
  const released = useRef(false);
  const plateRef = useRef<{ key: string; levels: Level[] } | null>(null);
  const outRef = useRef<{ key: string; img: ImageData } | null>(null);

  // Empty slot: the shared neutral sample page, so the poster reads as a screenshot loop.
  const src = image.trim() || SAMPLE_SCREENSHOT;
  const ready = loaded?.src === src;
  const useArt = failed === src;
  const imgAspect = ready && loaded ? Math.max(0.5, Math.min(2.6, loaded.w / loaded.h)) : 16 / 10;
  const q = Math.max(0, Math.min(2, Math.round(twist)));
  const geo = useMemo(() => buildGeo(width, height, aspect, imgAspect, ratio, anchorX, anchorY, q), [width, height, aspect, imgAspect, ratio, anchorX, anchorY, q]);
  const map = useMemo(() => buildMap(width, height, geo, q), [width, height, geo, q]);

  const transparent = background === "transparent";
  const dark = transparent ? lum(color) > 0.4 : lum(background) < 0.4;

  useLayoutEffect(() => {
    const cv = canvasRef.current;
    const ctx = cv?.getContext("2d", { willReadFrequently: true });
    if (!cv || !ctx) return;
    const imgEl = imgRef.current;
    if (!useArt && !(ready && imgEl && imgEl.naturalWidth > 0)) return;

    const pkey = [width, height, JSON.stringify(geo), useArt ? "art" : src, accent, secondary, color, background, dark].join("|");
    if (plateRef.current?.key !== pkey) {
      plateRef.current = { key: pkey, levels: buildPlate(width, height, geo, useArt ? null : imgEl, { accent, secondary, color, background, dark }) };
    }
    const levels = plateRef.current.levels;
    const { ow, oh, A, G, CB, SB, K, L } = map;
    const okey = `${ow}x${oh}`;
    if (outRef.current?.key !== okey) outRef.current = { key: okey, img: ctx.createImageData(ow, oh) };
    const out = outRef.current.img.data;

    const shift = loopPhase(frame, durationInFrames, 1) * cycles * L;
    const invL = 1 / L;
    const Px = geo.P.x, Py = geo.P.y;
    const LOG2E = Math.LOG2E;
    const n = ow * oh;
    for (let i = 0; i < n; i++) {
      // Which nested level this pixel lands on, then where inside that level.
      const j = Math.floor(-(G[i]! - shift) * invL);
      const a = A[i]! - shift + j * L;
      const rho = Math.exp(a);
      const sx = Px + rho * CB[i]!;
      const sy = Py + rho * SB[i]!;
      // Trilinear: blend the two nearest mip levels so detail never pops as the camera dives.
      let lf = a * LOG2E + K[i]!;
      if (lf < 0) lf = 0;
      let l = lf | 0;
      let fr = lf - l;
      if (l >= MIPS - 1) { l = MIPS - 1; fr = 0; }
      const o = i << 2;
      // Blend weight ramps over the middle of each octave only: still continuous (no popping),
      // but most pixels need a single tap.
      fr = (fr - 0.3) * 2.5;
      if (fr <= 0 || fr >= 1) {
        const ll = fr >= 1 && l < MIPS - 1 ? l + 1 : l;
        sample(levels[ll]!, sx * (FS / (1 << ll)), sy * (FS / (1 << ll)), 1);
        out[o] = TAP[0]!; out[o + 1] = TAP[1]!; out[o + 2] = TAP[2]!; out[o + 3] = TAP[3]!;
      } else {
        sample(levels[l]!, sx * (FS / (1 << l)), sy * (FS / (1 << l)), 1 - fr);
        const r0 = TAP[0]!, g0 = TAP[1]!, b0 = TAP[2]!, a0 = TAP[3]!;
        sample(levels[l + 1]!, sx * (FS / (2 << l)), sy * (FS / (2 << l)), fr);
        out[o] = r0 + TAP[0]!; out[o + 1] = g0 + TAP[1]!; out[o + 2] = b0 + TAP[2]!; out[o + 3] = a0 + TAP[3]!;
      }
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.putImageData(outRef.current.img, 0, 0);

    // Screen-space light: the vanishing point glows on dark brands, fogs into the paper on light ones.
    // Static in screen space, so the loop stays seamless.
    const cx = geo.C.x * OS, cy = geo.C.y * OS;
    const R = Math.min(ow, oh);
    if (dark) {
      ctx.globalCompositeOperation = "lighter";
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.16);
      g.addColorStop(0, alpha(mix(accent, "#ffffff", 0.35), 0.75));
      g.addColorStop(0.35, alpha(accent, 0.3));
      g.addColorStop(1, alpha(accent, 0));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, ow, oh);
      ctx.globalCompositeOperation = "source-over";
    } else if (!transparent) {
      // Light brands: a soft accent lens over the vanishing point instead of a glow.
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.14);
      g.addColorStop(0, alpha(mix(background, accent, 0.35), 0.7));
      g.addColorStop(0.4, alpha(mix(background, accent, 0.2), 0.3));
      g.addColorStop(1, alpha(background, 0));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, ow, oh);
    }
    if (!transparent) {
      const v = ctx.createRadialGradient(ow / 2, oh / 2, Math.min(ow, oh) * 0.35, ow / 2, oh / 2, Math.max(ow, oh) * 0.78);
      v.addColorStop(0, alpha(background, 0));
      v.addColorStop(1, alpha(dark ? "#000000" : mix(background, color, 0.06), dark ? 0.5 : 0.5));
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, ow, oh);
    }

    if (!released.current) { released.current = true; continueRender(handle); }
  }, [frame, durationInFrames, cycles, map, geo, width, height, src, ready, useArt, accent, secondary, color, background, dark, transparent, handle]);

  const mask = transparent ? "radial-gradient(ellipse 62% 62% at 50% 50%, #000 58%, transparent 100%)" : undefined;
  return (
    <AbsoluteFill style={{ background: transparent ? "transparent" : background }}>
      <AbsoluteFill style={{ maskImage: mask, WebkitMaskImage: mask }}>
        <canvas ref={canvasRef} width={map.ow} height={map.oh} style={{ width: "100%", height: "100%", display: "block" }} />
      </AbsoluteFill>
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.07 : 0.05, mixBlendMode: "overlay" }} /> : null}
      {failed !== src ? (
        <Img
          ref={imgRef}
          src={src}
          crossOrigin="anonymous"
          onLoad={(e) => {
            const el = e.currentTarget;
            setLoaded({ src, w: el.naturalWidth || 16, h: el.naturalHeight || 10 });
          }}
          onError={() => setFailed(src)}
          style={{ position: "absolute", left: 0, top: 0, width: 2, height: 2, opacity: 0, pointerEvents: "none" }}
        />
      ) : null}
    </AbsoluteFill>
  );
};
