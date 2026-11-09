// Built with Remotion - https://remotion.pro/license
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, continueRender, delayRender, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { useLayout } from "../../../kit/index";
import { rng, simplex3 } from "../_lib/noise";
import { SAMPLE_SCREENSHOT } from "../_lib/samples";
import type { schema } from "./cmyk-pass-print.schema";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];

/** Press rhythm (frames at 30 fps): each pass is shorter as the press comes up to speed. */
const PASSES: [number, number][] = [
  [2, 28],
  [28, 50],
  [50, 68],
  [68, 84],
];
const SNAP = 86;
const RES0 = 98;
const RES1 = 120;
const SETTLE = 122;
/** Screen angles of the four plates (C 15, M 75, Y 0, K 45), the classic rosette. */
const ANGLES = [15, 75, 0, 45].map((d) => (d * Math.PI) / 180);
/** Where each plate lands before registration, in layout units, plus a small twist (radians). */
const MISS: [number, number, number][] = [
  [-1.8, -1.1, -0.006],
  [1.6, 1.25, 0.005],
  [-0.9, 1.8, 0.0035],
  [1.25, -1.5, -0.0045],
];
/** Control strip: tints of each plate, then overprints. Each entry lists the plates that print it. */
const STRIP: { plates: number[]; tint: number; group: number }[] = [
  ...[0, 1, 2, 3].flatMap((p) => [1, 0.6, 0.3].map((tint) => ({ plates: [p], tint, group: p }))),
  { plates: [0, 1], tint: 1, group: 4 },
  { plates: [1, 2], tint: 1, group: 4 },
  { plates: [0, 2], tint: 1, group: 4 },
  { plates: [0, 1, 2, 3], tint: 1, group: 4 },
];

/** Process inks of the three color plates (the separation's own content, like the image's pixels). Key ink comes from the brand. */
const PROCESS: RGB[] = [
  [0, 158, 224],
  [226, 0, 122],
  [255, 226, 0],
];

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (x: number) => {
  const t = clamp01(x);
  return t * t * (3 - 2 * t);
};
const inOut = (x: number) => {
  const t = clamp01(x);
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};
const outCubic = (x: number) => 1 - Math.pow(1 - clamp01(x), 3);

function parse(c: string): RGB | null {
  let hex = /^#([0-9a-f]{3,8})$/i.exec(c.trim())?.[1];
  if (hex) {
    if (hex.length <= 4) hex = hex.split("").map((k) => k + k).join("");
    const n = parseInt(hex.slice(0, 6), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  const m = /^rgba?\(([^)]+)\)$/.exec(c.trim());
  if (m) {
    const p = m[1]!.split(/[\s,/]+/).filter(Boolean).map(parseFloat);
    return [p[0] ?? 0, p[1] ?? 0, p[2] ?? 0];
  }
  return null;
}
const css = (c: RGB, a = 1) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${a.toFixed(3)})`;
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const lum = (c: RGB) => (0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]) / 255;
const WHITE: RGB = [255, 255, 255];
const BLACK: RGB = [0, 0, 0];

/**
 * Cover-fit an image into a rect using destination-space math only. Source-rect
 * crops break on SVGs without an intrinsic size (Chrome crops a 300x150 box).
 */
function drawCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, x: number, y: number, w: number, h: number) {
  const iw = img.naturalWidth || w;
  const ih = img.naturalHeight || h;
  const k = Math.max(w / iw, h / ih);
  const dw = iw * k;
  const dh = ih * k;
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();
  ctx.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
  ctx.restore();
}

function canvas2d(w: number, h: number): [HTMLCanvasElement, CanvasRenderingContext2D] | null {
  if (typeof document === "undefined") return null;
  const cv = document.createElement("canvas");
  cv.width = Math.max(1, Math.round(w));
  cv.height = Math.max(1, Math.round(h));
  const ctx = cv.getContext("2d", { willReadFrequently: true });
  return ctx ? [cv, ctx] : null;
}

/** Empty-prop artwork: a brand-colored still life (light field, lit sphere, rings) that separates into rich plates. */
function paintFallback(ctx: CanvasRenderingContext2D, w: number, h: number, primary: RGB, secondary: RGB, paper: RGB, key: RGB) {
  const m = Math.min(w, h);
  // Field in the second color, deepening toward the lower right.
  const g = ctx.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, css(mix(secondary, paper, 0.22)));
  g.addColorStop(0.55, css(secondary));
  g.addColorStop(1, css(mix(secondary, key, 0.35)));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  // Rings.
  ctx.strokeStyle = css(paper, 0.32);
  ctx.lineWidth = Math.max(1, m * 0.008);
  for (let i = 1; i <= 9; i++) {
    ctx.beginPath();
    ctx.arc(w * 0.26, h * 0.62, m * 0.055 * i, 0, Math.PI * 2);
    ctx.stroke();
  }
  // The sphere, lit from the upper left, in the first color.
  const cx = w * 0.64;
  const cy = h * 0.52;
  const r = m * 0.34;
  const sg = ctx.createRadialGradient(cx - r * 0.38, cy - r * 0.42, r * 0.03, cx - r * 0.1, cy - r * 0.08, r * 1.08);
  sg.addColorStop(0, css(mix(primary, paper, 0.78)));
  sg.addColorStop(0.3, css(mix(primary, paper, 0.12)));
  sg.addColorStop(0.75, css(primary));
  sg.addColorStop(1, css(mix(primary, secondary, 0.55)));
  ctx.fillStyle = sg;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  // A small pale sphere.
  const c2x = w * 0.2;
  const c2y = h * 0.3;
  const r2 = m * 0.12;
  const s2 = ctx.createRadialGradient(c2x - r2 * 0.4, c2y - r2 * 0.4, 0, c2x, c2y, r2);
  s2.addColorStop(0, css(paper));
  s2.addColorStop(0.6, css(mix(paper, primary, 0.35)));
  s2.addColorStop(1, css(mix(primary, secondary, 0.4)));
  ctx.fillStyle = s2;
  ctx.beginPath();
  ctx.arc(c2x, c2y, r2, 0, Math.PI * 2);
  ctx.fill();
}

type Geo = {
  SW: number;
  SH: number;
  ix: number;
  iy: number;
  iw: number;
  ih: number;
  pa: number;
  mSide: number;
  mTop: number;
  mBot: number;
};

/** Printer's marks of one plate, in sheet coordinates: crop marks, registration targets, its control-strip patches. */
function drawMarks(ctx: CanvasRenderingContext2D, g: Geo, u: number, p: number, ink: RGB) {
  const lw = Math.max(1, u * 0.13);
  ctx.strokeStyle = css(ink);
  ctx.fillStyle = css(ink);
  ctx.lineWidth = lw;
  ctx.lineCap = "butt";
  // Crop marks at the four image corners.
  const gap = u * 0.8;
  const len = Math.max(u, Math.min(u * 2.8, g.mSide - gap - u * 0.5));
  const lenV = Math.max(u, Math.min(u * 2.8, g.mTop - gap - u * 0.5));
  ctx.beginPath();
  for (const [x, sx] of [[g.ix, -1], [g.ix + g.iw, 1]] as const) {
    for (const [y, sy] of [[g.iy, -1], [g.iy + g.ih, 1]] as const) {
      ctx.moveTo(x + sx * gap, y);
      ctx.lineTo(x + sx * (gap + len), y);
      ctx.moveTo(x, y + sy * gap);
      ctx.lineTo(x, y + sy * (gap + lenV));
    }
  }
  ctx.stroke();
  // Registration targets.
  const tr = Math.min(u * 1.25, g.mSide * 0.3, g.mTop * 0.3);
  for (const [x, y] of targets(g)) {
    ctx.beginPath();
    ctx.arc(x, y, tr, 0, Math.PI * 2);
    ctx.moveTo(x - tr * 1.7, y);
    ctx.lineTo(x + tr * 1.7, y);
    ctx.moveTo(x, y - tr * 1.7);
    ctx.lineTo(x, y + tr * 1.7);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, tr * 0.42, 0, Math.PI * 2);
    ctx.fill();
  }
  // Control strip.
  for (const s of strip(g, u)) {
    if (!s.plates.includes(p)) continue;
    ctx.fillStyle = css(ink, s.tint);
    ctx.fillRect(s.x, s.y, s.size, s.size);
  }
}

function targets(g: Geo): [number, number][] {
  return [
    [g.ix / 2, g.iy + g.ih / 2],
    [g.ix + g.iw + g.mSide / 2, g.iy + g.ih / 2],
    [g.ix + g.iw / 2, g.iy / 2],
  ];
}

function strip(g: Geo, u: number) {
  const units = STRIP.length + 11 * 0.3 + 4 * 0.9;
  const size = Math.min(u * 2, (g.iw * 0.86) / units, g.mBot * 0.42);
  let x = g.ix + (g.iw - units * size) / 2;
  const y = g.iy + g.ih + (g.mBot - size) / 2;
  const out: { x: number; y: number; size: number; plates: number[]; tint: number }[] = [];
  STRIP.forEach((s, i) => {
    if (i > 0) x += STRIP[i - 1]!.group === s.group ? size * 0.3 : size * 0.9;
    out.push({ x, y, size, plates: s.plates, tint: s.tint });
    x += size;
  });
  return out;
}

/**
 * The user's image printed like a press run: four halftone separations (cyan,
 * magenta, yellow, key) land one pass after another out of register, then the
 * plates spring into register with a click and the dots resolve into the image.
 * Canvas2D, deterministic.
 */
export const Component: React.FC<Props> = ({ screenshot, primary, secondary, color, background, misregister, screen, marks }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect } = useLayout();
  const ref = useRef<HTMLCanvasElement>(null);

  // ---- image loading (CORS so pixels can be separated) ----
  // Empty slot: the shared neutral sample page, so the poster reads as a printed screenshot.
  const url = screenshot.trim() || SAMPLE_SCREENSHOT;
  const [loaded, setLoaded] = useState<{ url: string; img: HTMLImageElement | null; cors: boolean }>({ url: "", img: null, cors: true });
  const [first] = useState(() => (url ? delayRender(`cmyk-pass-print: ${url.slice(0, 80)}`, { timeoutInMilliseconds: 25000 }) : null));
  const pending = useRef<number | null>(first);
  useEffect(() => {
    if (!url) {
      setLoaded({ url: "", img: null, cors: true });
      return;
    }
    let alive = true;
    if (pending.current === null) pending.current = delayRender(`cmyk-pass-print: ${url.slice(0, 80)}`, { timeoutInMilliseconds: 25000 });
    const im = new Image();
    im.crossOrigin = "anonymous";
    im.onload = () => alive && setLoaded({ url, img: im, cors: true });
    im.onerror = () => {
      // No CORS: separate the brand artwork, then resolve onto the real image at the end.
      const plain = new Image();
      plain.onload = () => alive && setLoaded({ url, img: plain, cors: false });
      plain.onerror = () => alive && setLoaded({ url, img: null, cors: true });
      plain.src = url;
    };
    im.src = url;
    return () => {
      alive = false;
    };
  }, [url]);
  const ready = loaded.url === url;
  const img = ready ? loaded.img : null;
  const readable = !img || loaded.cors;

  // ---- theme: paper is the light end of the brand, key ink the dark end ----
  const transparent = background === "transparent";
  const cBg = parse(background) ?? WHITE;
  const cText = parse(color) ?? BLACK;
  const cPri = parse(primary) ?? cText;
  const cSec = parse(secondary) ?? cText;
  const dark = transparent ? lum(cText) > 0.5 : lum(cBg) < 0.42;
  // Without a backdrop the stock takes a faint tint of the second brand color, so the sheet stays on-brand.
  const stock: RGB = dark ? (lum(cText) > 0.8 ? cText : mix(cText, WHITE, 0.6)) : transparent ? mix(cText, WHITE, 0.965) : mix(cBg, WHITE, 0.5);
  const paper: RGB = transparent ? mix(stock, cSec, 0.08) : stock;
  const keyInk: RGB = dark
    ? transparent
      ? mix(cText, BLACK, 0.93)
      : lum(cBg) < 0.1
        ? cBg
        : mix(cBg, BLACK, 0.75)
    : lum(cText) < 0.3
      ? cText
      : mix(cText, BLACK, 0.65);
  const inks: RGB[] = [...PROCESS, keyInk];
  const paperKey = paper.join(",");
  const keyKey = keyInk.join(",");

  // ---- layout: a press sheet around the image, designed per aspect ----
  const geo: Geo = useMemo(() => {
    const natural = img && img.naturalWidth > 0 ? img.naturalWidth / Math.max(1, img.naturalHeight) : aspect === "9:16" ? 0.86 : aspect === "16:9" ? 1.5 : 1.15;
    const [amin, amax, maxW, maxH] = aspect === "16:9" ? [1.15, 2.1, 0.7, 0.66] : aspect === "9:16" ? [0.7, 1.0, 0.82, 0.56] : [0.85, 1.45, 0.72, 0.64];
    const pa = Math.min(amax, Math.max(amin, natural));
    let iw = W * maxW;
    let ih = iw / pa;
    if (ih > H * maxH) {
      ih = H * maxH;
      iw = ih * pa;
    }
    iw = Math.round(iw);
    ih = Math.round(ih);
    const mSide = Math.round(u * (aspect === "9:16" ? 4 : 5));
    const mTop = Math.round(u * 5);
    const mBot = Math.round(u * 7.5);
    return { SW: iw + 2 * mSide, SH: ih + mTop + mBot, ix: mSide, iy: mTop, iw, ih, pa, mSide, mTop, mBot };
  }, [img, aspect, W, H, u]);
  const sx0 = Math.round((W - geo.SW) / 2);
  const sy0 = Math.round((H - geo.SH) / 2);
  const axisY = aspect === "9:16";

  // ---- the image, cover-cropped into the print area ----
  const art = useMemo(() => {
    const made = canvas2d(geo.iw, geo.ih);
    if (!made || !ready) return null;
    const [cv, ctx] = made;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    if (img && readable) {
      drawCover(ctx, img, 0, 0, geo.iw, geo.ih);
    } else {
      paintFallback(ctx, geo.iw, geo.ih, cPri, cSec, paper, keyInk);
    }
    return cv;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [img, ready, readable, geo, primary, secondary, paperKey, keyKey]);

  // ---- separations: four halftone plates plus the in-register continuous proof ----
  const plates = useMemo(() => {
    if (!art) return null;
    const s = Math.max(3, Math.min(geo.iw, geo.ih) / screen);
    // Sample the art at half a cell so each dot reads the average tone under it.
    const gw = Math.max(2, Math.ceil(geo.iw / (s * 0.5)));
    const gh = Math.max(2, Math.ceil(geo.ih / (s * 0.5)));
    const sm = canvas2d(gw, gh);
    if (!sm) return null;
    sm[1].imageSmoothingEnabled = true;
    sm[1].imageSmoothingQuality = "high";
    sm[1].fillStyle = css(WHITE);
    sm[1].fillRect(0, 0, gw, gh);
    sm[1].drawImage(art, 0, 0, gw, gh);
    let data: Uint8ClampedArray;
    try {
      data = sm[1].getImageData(0, 0, gw, gh).data;
    } catch {
      return null;
    }
    const sep = [0, 1, 2, 3].map(() => new Float32Array(gw * gh));
    for (let i = 0; i < gw * gh; i++) {
      const r = data[i * 4]! / 255;
      const g = data[i * 4 + 1]! / 255;
      const b = data[i * 4 + 2]! / 255;
      // Gray component replacement: most of the shared darkness moves to the key plate.
      const k = 0.82 * (1 - Math.max(r, g, b));
      const d = Math.max(1e-4, 1 - k);
      sep[0]![i] = clamp01((1 - r - k) / d);
      sep[1]![i] = clamp01((1 - g - k) / d);
      sep[2]![i] = clamp01((1 - b - k) / d);
      sep[3]![i] = k;
    }
    const cx = geo.ix + geo.iw / 2;
    const cy = geo.iy + geo.ih / 2;
    const reach = Math.hypot(geo.iw, geo.ih) / 2 / s + 1;
    const out = [0, 1, 2, 3].map((p) => {
      const made = canvas2d(geo.SW, geo.SH);
      if (!made) return null;
      const [cv, ctx] = made;
      ctx.fillStyle = css(WHITE);
      ctx.fillRect(0, 0, geo.SW, geo.SH);
      if (marks) drawMarks(ctx, geo, u, p, inks[p]!);
      ctx.save();
      ctx.beginPath();
      ctx.rect(geo.ix, geo.iy, geo.iw, geo.ih);
      ctx.clip();
      const ca = Math.cos(ANGLES[p]!);
      const sa = Math.sin(ANGLES[p]!);
      const v = sep[p]!;
      ctx.fillStyle = css(inks[p]!);
      ctx.beginPath();
      const n = Math.ceil(reach);
      for (let j = -n; j <= n; j++) {
        for (let i = -n; i <= n; i++) {
          const x = cx + (i * ca - j * sa) * s;
          const y = cy + (i * sa + j * ca) * s;
          if (x < geo.ix - s || x > geo.ix + geo.iw + s || y < geo.iy - s || y > geo.iy + geo.ih + s) continue;
          const gx = Math.min(gw - 1, Math.max(0, Math.floor(((x - geo.ix) / geo.iw) * gw)));
          const gy = Math.min(gh - 1, Math.max(0, Math.floor(((y - geo.iy) / geo.ih) * gh)));
          const t = v[gy * gw + gx]!;
          const r = s * Math.sqrt(t / Math.PI) * (1 + 0.27 * t * t);
          if (r < 0.3) continue;
          ctx.moveTo(x + r, y);
          ctx.arc(x, y, r, 0, Math.PI * 2);
        }
      }
      ctx.fill();
      ctx.restore();
      return cv;
    });
    if (out.some((c) => !c)) return null;
    // The proof: marks in register, the real image in the print area.
    const proof = canvas2d(geo.SW, geo.SH);
    if (!proof) return null;
    const [pcv, pctx] = proof;
    pctx.fillStyle = css(WHITE);
    pctx.fillRect(0, 0, geo.SW, geo.SH);
    if (marks) {
      pctx.globalCompositeOperation = "multiply";
      for (let p = 0; p < 4; p++) drawMarks(pctx, geo, u, p, inks[p]!);
      pctx.globalCompositeOperation = "source-over";
    }
    pctx.imageSmoothingEnabled = true;
    pctx.imageSmoothingQuality = "high";
    if (img && !readable) {
      drawCover(pctx, img, geo.ix, geo.iy, geo.iw, geo.ih);
    } else {
      // The continuous proof prints its blacks in the same key ink as the K plate, so the
      // resolved image keeps the brand's key instead of snapping back to neutral black.
      let keyed: HTMLCanvasElement = art;
      const kc = canvas2d(geo.iw, geo.ih);
      if (kc) {
        try {
          kc[1].drawImage(art, 0, 0);
          const im = kc[1].getImageData(0, 0, geo.iw, geo.ih);
          const px = im.data;
          const kr = inks[3]![0] / 255, kg = inks[3]![1] / 255, kb = inks[3]![2] / 255;
          for (let i = 0; i < px.length; i += 4) {
            const r = px[i]! / 255, g = px[i + 1]! / 255, b = px[i + 2]! / 255;
            const t = 1 - Math.max(r, g, b);
            if (t < 0.02) continue;
            // Lift the gray component out (as the separation does), then lay it back down in key ink.
            const lift = 1 / Math.max(0.18, 1 - 0.82 * t);
            px[i] = Math.min(1, r * lift) * (1 - t + t * kr) * 255;
            px[i + 1] = Math.min(1, g * lift) * (1 - t + t * kg) * 255;
            px[i + 2] = Math.min(1, b * lift) * (1 - t + t * kb) * 255;
          }
          kc[1].putImageData(im, 0, 0);
          keyed = kc[0];
        } catch {
          keyed = art;
        }
      }
      pctx.drawImage(keyed, geo.ix, geo.iy);
    }
    return { halftone: out as HTMLCanvasElement[], proof: pcv };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [art, geo, screen, marks, u, keyKey, img, readable]);

  // ---- paper fibre: speckle plus a slow cloud, multiplied over paper and ink ----
  const grain = useMemo(() => {
    const gw = Math.max(2, Math.round(geo.SW / 2));
    const gh = Math.max(2, Math.round(geo.SH / 2));
    const made = canvas2d(gw, gh);
    if (!made) return null;
    const [cv, ctx] = made;
    const im = ctx.createImageData(gw, gh);
    const r = rng("cmyk-pass-paper");
    const nz = simplex3("cmyk-pass-cloud");
    for (let y = 0; y < gh; y++) {
      for (let x = 0; x < gw; x++) {
        const cloud = nz((x / gw) * 3.2, (y / gw) * 3.2, 0.4) * 0.5 + nz((x / gw) * 11, (y / gw) * 11, 1.7) * 0.25;
        const v = 255 - 9 * r() - 7 * (cloud * 0.5 + 0.5);
        const i = (y * gw + x) * 4;
        im.data[i] = v;
        im.data[i + 1] = v;
        im.data[i + 2] = v;
        im.data[i + 3] = 255;
      }
    }
    ctx.putImageData(im, 0, 0);
    return cv;
  }, [geo.SW, geo.SH]);

  const layer = useMemo(() => canvas2d(geo.SW, geo.SH), [geo.SW, geo.SH]);
  const proofLayer = useMemo(() => canvas2d(geo.SW, geo.SH), [geo.SW, geo.SH]);

  useLayoutEffect(() => {
    const cv = ref.current;
    const ctx = cv?.getContext("2d", { willReadFrequently: true });
    if (!ctx || !layer || !plates || !grain) return;
    const [lcv, lc] = layer;
    const f = frame;
    const { SW, SH } = geo;
    const L = axisY ? SH : SW;
    const C = axisY ? SW : SH;

    // Registration spring: overshoots past zero so the fringes flip once, then lock.
    const snap = f < SNAP ? 0 : spring({ frame: f - SNAP, fps, config: { damping: 9, stiffness: 210, mass: 0.6 } });
    const miss = misregister * (1 - snap);
    const res = smooth((f - RES0) / (RES1 - RES0));

    // Print head travel: boustrophedon, one plate per stroke.
    const hw = u * 3.2;
    const over = hw * 1.3;
    const headAt = (p: number) => {
      const [a, b] = PASSES[p]!;
      const t = (f - a) / (b - a);
      const e = inOut(t);
      return p % 2 === 0 ? -over + e * (L + 2 * over) : L + over - e * (L + 2 * over);
    };
    let active = -1;
    for (let p = 0; p < 4; p++) if (f >= PASSES[p]![0] && f < PASSES[p]![1]) active = p;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.filter = "none";
    ctx.shadowColor = "transparent";
    ctx.clearRect(0, 0, W, H);
    if (!transparent) {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, W, H);
      // A pool of brand light under the sheet; fades out well before the corners.
      const halo = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.5);
      halo.addColorStop(0, css(cSec, dark ? 0.32 : 0.1));
      halo.addColorStop(0.55, css(cPri, dark ? 0.08 : 0.035));
      halo.addColorStop(1, css(cPri, 0));
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, W, H);
    }

    // Camera: a slow push that lands at the settle, with a small jolt on the registration click.
    const jolt = f >= SNAP ? 0.007 * Math.exp(-(f - SNAP) / 5) * Math.cos((f - SNAP) * 0.95) : 0;
    const cam = 1 + 0.05 * (1 - outCubic(f / SETTLE)) + jolt;
    // Press rhythm: the sheet nudges as each unit grabs it.
    let nudge = 0;
    for (let p = 0; p < 4; p++) {
      const d = f - PASSES[p]![0];
      if (d >= 0 && d < 14) nudge += u * 0.22 * Math.exp(-d / 3) * Math.sin(d * 1.3);
    }
    // The sheet feeds in a touch skewed and squares up with the registration click.
    const tilt = -0.016 * (1 - snap) * (0.4 + 0.6 * misregister);
    const toSheet = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.translate(W / 2, H / 2);
      ctx.rotate(tilt);
      ctx.scale(cam, cam);
      ctx.translate(-W / 2, -H / 2);
      ctx.translate(sx0, sy0 + (axisY ? 0 : nudge));
      if (axisY) ctx.translate(nudge, 0);
    };

    // ---- the sheet ----
    toSheet();
    ctx.save();
    ctx.shadowColor = css(BLACK, dark ? 0.5 : 0.16);
    ctx.shadowBlur = u * 3.2;
    ctx.shadowOffsetY = u * 1.1;
    ctx.fillStyle = css(paper);
    ctx.fillRect(0, 0, SW, SH);
    ctx.restore();
    ctx.save();
    ctx.shadowColor = css(BLACK, dark ? 0.3 : 0.1);
    ctx.shadowBlur = u * 0.4;
    ctx.shadowOffsetY = u * 0.15;
    ctx.fillStyle = css(paper);
    ctx.fillRect(0, 0, SW, SH);
    ctx.restore();

    // ---- ink: compose the plates on a white layer, then multiply it onto the paper ----
    lc.setTransform(1, 0, 0, 1, 0, 0);
    lc.globalCompositeOperation = "source-over";
    lc.globalAlpha = 1;
    lc.fillStyle = css(WHITE);
    lc.fillRect(0, 0, SW, SH);
    lc.globalCompositeOperation = "multiply";
    for (let p = 0; p < 4; p++) {
      const [a, b] = PASSES[p]!;
      if (f < a) continue;
      const pos = f >= b ? null : headAt(p);
      lc.save();
      if (pos !== null) {
        const lo = p % 2 === 0 ? 0 : Math.max(0, pos);
        const hi = p % 2 === 0 ? Math.min(L, pos) : L;
        if (hi <= lo) {
          lc.restore();
          continue;
        }
        lc.beginPath();
        if (axisY) lc.rect(0, lo, SW, hi - lo);
        else lc.rect(lo, 0, hi - lo, SH);
        lc.clip();
      }
      const [mx, my, rot] = MISS[p]!;
      // Paper wander while the sheet runs through the press.
      const drift = (1 - snap) * u * 0.25 * Math.sin(f * 0.17 + p * 1.9);
      lc.translate(SW / 2 + (mx * u + drift) * miss, SH / 2 + (my * u - drift * 0.6) * miss);
      lc.rotate(rot * miss);
      lc.translate(-SW / 2, -SH / 2);
      lc.drawImage(plates.halftone[p]!, 0, 0);
      lc.restore();
    }
    lc.globalCompositeOperation = "source-over";
    // Resolve: a soft diagonal front turns the dots into the continuous image.
    const band = 0.28;
    const front = -band + res * (1 + 2 * band);
    const diag = (g: CanvasGradient) => {
      // 0 at the top-left corner of the sheet, 1 at the bottom-right.
      g.addColorStop(clamp01(front - band), css(WHITE, 1));
      g.addColorStop(clamp01(front), css(WHITE, 0.5));
      g.addColorStop(clamp01(front + band), css(WHITE, 0));
      return g;
    };
    if (res >= 1) {
      lc.drawImage(plates.proof, 0, 0);
    } else if (res > 0 && proofLayer) {
      const [pcv, pc] = proofLayer;
      pc.globalCompositeOperation = "source-over";
      pc.clearRect(0, 0, SW, SH);
      pc.drawImage(plates.proof, 0, 0);
      pc.globalCompositeOperation = "destination-in";
      pc.fillStyle = diag(pc.createLinearGradient(0, 0, SW, SH));
      pc.fillRect(0, 0, SW, SH);
      pc.globalCompositeOperation = "source-over";
      lc.drawImage(pcv, 0, 0);
    }
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, SW, SH);
    ctx.clip();
    ctx.globalCompositeOperation = "multiply";
    ctx.drawImage(lcv, 0, 0);
    ctx.globalAlpha = 0.55;
    ctx.drawImage(grain, 0, 0, SW, SH);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";

    // A glint rides the resolve front.
    if (res > 0 && res < 1) {
      const g = ctx.createLinearGradient(0, 0, SW, SH);
      const a = Math.sin(Math.PI * res);
      g.addColorStop(clamp01(front - band * 0.5), css(WHITE, 0));
      g.addColorStop(clamp01(front), css(WHITE, 0.3 * a));
      g.addColorStop(clamp01(front + band * 0.5), css(WHITE, 0));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, SW, SH);
    }

    // Wet ink: a gloss trailing the head, and the roller's ink pooling at the contact line.
    if (active >= 0) {
      const pos = headAt(active);
      const dir = active % 2 === 0 ? 1 : -1;
      const tail = u * 14;
      if (axisY) ctx.transform(0, 1, 1, 0, 0, 0);
      const gl = ctx.createLinearGradient(pos, 0, pos - dir * tail, 0);
      gl.addColorStop(0, css(WHITE, 0.22));
      gl.addColorStop(0.25, css(WHITE, 0.08));
      gl.addColorStop(1, css(WHITE, 0));
      ctx.fillStyle = gl;
      ctx.fillRect(Math.min(pos, pos - dir * tail), 0, tail, C);
      ctx.globalCompositeOperation = "multiply";
      const ig = ctx.createLinearGradient(pos - dir * u * 3, 0, pos + dir * u * 0.5, 0);
      ig.addColorStop(0, css(inks[active]!, 0));
      ig.addColorStop(0.8, css(inks[active]!, 0.35));
      ig.addColorStop(1, css(inks[active]!, 0));
      ctx.fillStyle = ig;
      ctx.fillRect(Math.min(pos - dir * u * 3, pos + dir * u * 0.5), 0, u * 3.5, C);
      ctx.globalCompositeOperation = "source-over";
    }
    ctx.restore();

    // Sheet edge.
    toSheet();
    ctx.lineWidth = Math.max(1, u * 0.08);
    ctx.strokeStyle = css(dark ? WHITE : BLACK, dark ? 0.25 : 0.07);
    ctx.strokeRect(0, 0, SW, SH);

    // ---- the registration click: each target rings out in the press light ----
    if (marks && f >= SNAP + 1 && f < SNAP + 20) {
      const t = (f - SNAP - 1) / 19;
      const tr = Math.min(u * 1.25, geo.mSide * 0.3, geo.mTop * 0.3);
      ctx.strokeStyle = css(cPri, 0.85 * (1 - t) * (1 - t));
      ctx.lineWidth = Math.max(1, u * 0.28 * (1 - t));
      for (const [x, y] of targets(geo)) {
        ctx.beginPath();
        ctx.arc(x, y, tr * (1.2 + 3.2 * outCubic(t)), 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    // ---- the print head ----
    const exit = clamp01((f - PASSES[3]![1]) / 14);
    const enter = clamp01(f / 4);
    if (exit < 1) {
      let pos: number;
      let ink = 3;
      if (f < PASSES[0]![0]) {
        pos = -over - (1 - enter) * over * 2;
        ink = 0;
      } else if (f >= PASSES[3]![1]) {
        pos = -over - outCubic(exit) * over * 2.5;
      } else {
        const p = active >= 0 ? active : 3;
        pos = headAt(p);
        ink = p;
      }
      const a = (1 - smooth(exit)) * smooth(enter + 0.25);
      const ext = u * 2.2;
      const printing = active >= 0 && pos > 0 && pos < L;
      toSheet();
      if (axisY) ctx.transform(0, 1, 1, 0, 0, 0);
      ctx.globalAlpha = a;
      // Cast shadow ahead of the roller.
      const sh = ctx.createLinearGradient(pos, 0, pos + hw * 2.4, 0);
      sh.addColorStop(0, css(BLACK, dark ? 0.32 : 0.2));
      sh.addColorStop(1, css(BLACK, 0));
      ctx.fillStyle = sh;
      ctx.fillRect(pos, -ext * 0.6, hw * 2.4, C + ext * 1.2);
      // Roller body: brushed metal in the second brand color.
      const deep = mix(cSec, BLACK, 0.55);
      const body = ctx.createLinearGradient(pos - hw / 2, 0, pos + hw / 2, 0);
      body.addColorStop(0, css(deep));
      body.addColorStop(0.2, css(cSec));
      body.addColorStop(0.36, css(mix(cSec, WHITE, 0.6)));
      body.addColorStop(0.44, css(mix(cSec, WHITE, 0.25)));
      body.addColorStop(0.75, css(cSec));
      body.addColorStop(1, css(deep));
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.roundRect(pos - hw / 2, -ext, hw, C + ext * 2, hw * 0.22);
      ctx.fill();
      // Inked face on the trailing side, the color of the plate it is laying down.
      const trail = p0Dir(ink) > 0 ? pos - hw / 2 : pos + hw / 2 - hw * 0.2;
      ctx.fillStyle = css(inks[ink]!, 0.95);
      ctx.fillRect(trail, -ext * 0.55, hw * 0.2, C + ext * 1.1);
      // End caps with the press light.
      for (const y of [-ext, C + ext]) {
        ctx.fillStyle = css(deep);
        ctx.beginPath();
        ctx.roundRect(pos - hw * 0.85, y - u * 1.1, hw * 1.7, u * 2.2, u * 0.5);
        ctx.fill();
        ctx.fillStyle = css(WHITE, 0.14);
        ctx.fillRect(pos - hw * 0.7, y - u * 0.95, hw * 1.4, u * 0.3);
      }
      const led = printing ? 1 : 0.35;
      for (const y of [-ext, C + ext]) {
        const lg = ctx.createRadialGradient(pos, y, 0, pos, y, u * 2.4);
        lg.addColorStop(0, css(mix(cPri, WHITE, 0.5), 0.9 * led));
        lg.addColorStop(0.18, css(cPri, 0.7 * led));
        lg.addColorStop(1, css(cPri, 0));
        ctx.fillStyle = lg;
        ctx.fillRect(pos - u * 2.4, y - u * 2.4, u * 4.8, u * 4.8);
        ctx.fillStyle = css(mix(cPri, WHITE, 0.35 * led));
        ctx.beginPath();
        ctx.arc(pos, y, u * 0.42, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    if (pending.current !== null && ready && plates) {
      continueRender(pending.current);
      pending.current = null;
    }
  }, [frame, fps, W, H, u, geo, sx0, sy0, axisY, layer, proofLayer, plates, grain, misregister, marks, transparent, background, dark, paperKey, keyKey, primary, secondary, ready]);

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <canvas ref={ref} width={W} height={H} style={{ width: "100%", height: "100%", display: "block" }} />
    </AbsoluteFill>
  );
};

/** Stroke direction of a plate's pass: even plates run forward, odd ones back. */
function p0Dir(p: number) {
  return p % 2 === 0 ? 1 : -1;
}
