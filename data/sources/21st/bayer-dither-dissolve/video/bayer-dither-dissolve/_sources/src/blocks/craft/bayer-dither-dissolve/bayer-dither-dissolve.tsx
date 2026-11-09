// Built with Remotion - https://remotion.pro/license
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, continueRender, delayRender, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, easeOut, fitFontSize, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { simplex3 } from "../_lib/noise";
import { SAMPLE_SCREENSHOT } from "../_lib/samples";
import type { schema } from "./bayer-dither-dissolve.schema";
import { meta } from "./bayer-dither-dissolve.meta";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];

const MK = meta.timing.markers;
const APPEAR = MK.appear ?? 0;
const APPEAR_END = APPEAR + 14;
const HEAD0 = 6;
const HEAD1 = 24;
const SWEEP = MK.sweep ?? 30;
const CLEAN = MK.clean ?? 90;
const SETTLE = MK.settled ?? 104;
/** Width of the dither ramp, in order-field units (the card spans 0..1). */
const RAMP = 1;
/** How long a freshly flipped pixel glows in the brand color, in progress units. */
const FRONT = 0.08;

/** Classic 8x8 Bayer index matrix: 64 thresholds, every stage a recognizable ordered pattern. */
const BAYER = [
  0, 32, 8, 40, 2, 34, 10, 42, 48, 16, 56, 24, 50, 18, 58, 26, 12, 44, 4, 36, 14, 46, 6, 38, 60, 28, 52, 20, 62, 30, 54, 22, 3, 35, 11, 43, 1, 33, 9, 41,
  51, 19, 59, 27, 49, 17, 57, 25, 15, 47, 7, 39, 13, 45, 5, 37, 63, 31, 55, 23, 61, 29, 53, 21,
];
const thr = (x: number, y: number) => (BAYER[((y & 7) << 3) | (x & 7)]! + 0.5) / 64;

const px = (n: number) => `${n}px`;
const clamp01 = (t: number) => Math.max(0, Math.min(1, t));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ---------- color helpers (brand props in, numbers out) ----------
let probe: CanvasRenderingContext2D | null = null;
function rgbOf(c: string): RGB {
  if (!probe) probe = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  if (!probe) return [128, 128, 128];
  probe.clearRect(0, 0, 1, 1);
  probe.fillStyle = c;
  probe.fillRect(0, 0, 1, 1);
  const d = probe.getImageData(0, 0, 1, 1).data;
  return [d[0]!, d[1]!, d[2]!];
}
const lumRGB = (c: RGB) => (0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2]) / 255;
const mixRGB = (a: RGB, b: RGB, t: number): RGB => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
const hex2 = (v: number) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
const css = (c: RGB, a = 1) => withAlpha(`#${hex2(c[0])}${hex2(c[1])}${hex2(c[2])}`, a);
/** Packs a color into one ImageData pixel (little-endian RGBA). */
const pack = (c: RGB, a: number) => ((Math.round(a) << 24) | (Math.round(c[2]) << 16) | (Math.round(c[1]) << 8) | Math.round(c[0])) >>> 0;

// ---------- canvases ----------
function makeCanvas(w: number, h: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = Math.max(1, Math.round(w));
  c.height = Math.max(1, Math.round(h));
  return c;
}
const ctx2d = (c: HTMLCanvasElement) => c.getContext("2d", { willReadFrequently: true })!;

/** Screenshot cropped to fill the card; keeps the top, where headers and headlines live. */
function coverCanvas(img: HTMLImageElement, w: number, h: number, ax: number, paper: RGB): HTMLCanvasElement {
  const c = makeCanvas(w, h);
  const ctx = ctx2d(c);
  ctx.fillStyle = css(paper);
  ctx.fillRect(0, 0, w, h);
  const iw = img.naturalWidth || img.width || 1600;
  const ih = img.naturalHeight || img.height || 1000;
  const s = Math.max(w / iw, h / ih);
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(img, (w - iw * s) * ax, Math.min(0, (h - ih * s) * 0.1), iw * s, ih * s);
  return c;
}

/**
 * The "before" picture when none is given: the same screenshot on a 1-bit monochrome monitor. Area-averaged
 * to the dot grid, contrast-stretched and sharpened so UI edges survive, then ordered-dithered as a negative:
 * the marks of the interface light up in the lit color on a deep screen, with a hairline gap between dots.
 */
function oneBit(src: HTMLCanvasElement, dot: number, lit: RGB, deep: RGB): HTMLCanvasElement {
  const gw = Math.ceil(src.width / dot);
  const gh = Math.ceil(src.height / dot);
  // Two-step downsample approximates a box filter.
  const mid = makeCanvas(gw * 2, gh * 2);
  const mctx = ctx2d(mid);
  mctx.imageSmoothingQuality = "high";
  mctx.drawImage(src, 0, 0, gw * 2, gh * 2);
  const small = makeCanvas(gw, gh);
  const sctx = ctx2d(small);
  sctx.imageSmoothingQuality = "high";
  sctx.drawImage(mid, 0, 0, gw, gh);
  const id = sctx.getImageData(0, 0, gw, gh);
  const d = id.data;
  const n = gw * gh;
  const L = new Float32Array(n);
  for (let i = 0; i < n; i++) L[i] = (0.299 * d[i * 4]! + 0.587 * d[i * 4 + 1]! + 0.114 * d[i * 4 + 2]!) / 255;
  const sorted = Float32Array.from(L).sort();
  const lo = sorted[Math.floor(n * 0.02)]!;
  const hi = sorted[Math.floor(n * 0.985)]!;
  const span = Math.max(0.08, hi - lo);
  const out = new Uint32Array(id.data.buffer);
  const P = pack(lit, 255);
  const I = pack(deep, 255);
  for (let y = 0; y < gh; y++)
    for (let x = 0; x < gw; x++) {
      const i = y * gw + x;
      // 3x3 unsharp: crisp UI edges are what make a 1-bit screen readable.
      let s = 0;
      for (let yy = -1; yy <= 1; yy++)
        for (let xx = -1; xx <= 1; xx++) s += L[Math.min(gh - 1, Math.max(0, y + yy)) * gw + Math.min(gw - 1, Math.max(0, x + xx))]!;
      const l = L[i]!;
      const sharp = l + 0.9 * (l - s / 9);
      const v = Math.pow(1 - clamp01((sharp - lo) / span), 0.9);
      out[i] = v > thr(x, y) ? P : I;
    }
  sctx.putImageData(id, 0, 0);
  const c = makeCanvas(src.width, src.height);
  const ctx = ctx2d(c);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(small, 0, 0, gw * dot, gh * dot);
  if (dot >= 4) {
    // Dot gaps: reads as a real phosphor or LCD grid, not as an upscaled image.
    ctx.fillStyle = css(deep, 0.55);
    const g = Math.max(1, Math.round(dot * 0.2));
    for (let x = dot - g; x < c.width; x += dot) ctx.fillRect(x, 0, g, c.height);
    for (let y = dot - g; y < c.height; y += dot) ctx.fillRect(0, y, c.width, g);
  }
  return c;
}

/** CSS mask of one 8x8 Bayer tile at progress p: the headline dithers in exactly like the screen. */
function tileMask(p: number): string | undefined {
  if (p >= 1) return undefined;
  let d = "";
  for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) if (p > thr(x, y)) d += `M${x} ${y}h1v1h-1z`;
  return `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='8' height='8' shape-rendering='crispEdges'><path d='${d || "M0 0h0"}'/></svg>")`;
}

// ---------- component ----------
export const Component: React.FC<Props> = ({ screenshot, fromScreenshot, headline, color, primary, secondary, background, fontFamily, pixelSize, glow }) => {
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: f } = useEnterExit(meta.timing);
  // The dither updates on twos, like an old machine pushing pixels; camera and light stay smooth.
  const fq = f - (f & 1);
  const tq = Math.min(fq, SETTLE);
  const transparent = background === "transparent";
  const font = brandFontStack(fontFamily);

  // ---- Grid: one dissolve pixel = two 1-bit dots, so both lattices line up.
  const dot = Math.max(2, Math.round(Math.min(W, H) * 0.0046 * pixelSize));
  const cell = dot * 2;
  const snap = (v: number) => Math.max(cell * 8, Math.round(v / cell) * cell);

  // ---- Layout per aspect.
  const head = headline.trim();
  const chars = Math.max(1, Array.from(head).length);
  let cardW: number, cardH: number, cardX: number, cardY: number;
  let textX: number, textY: number, textW: number, textH: number, fs: number;
  const barGap = u * (portrait ? 3.2 : 2.6);
  const barRows = 2;
  if (aspect === "16:9") {
    cardH = snap(H * 0.62);
    cardW = snap(cardH * 1.6);
    cardX = Math.round(head ? W * 0.94 - cardW : (W - cardW) / 2);
    cardY = Math.round((H - cardH) / 2);
    textX = Math.round(W * 0.07);
    textW = Math.round(cardX - W * 0.04 - textX);
    textY = cardY;
    textH = cardH;
    fs = Math.max(H * 0.022, fitFontSize({ chars, boxW: textW, boxH: H * 0.42, lines: 3, charEm: 0.56, lineHeight: 1.15, max: u * 9.6 }));
  } else {
    cardW = snap(W * (portrait ? 0.86 : 0.8));
    cardH = snap(cardW * (portrait ? 1.16 : 0.6));
    cardX = Math.round((W - cardW) / 2);
    textW = cardW;
    fs = Math.max(
      H * (portrait ? 0.032 : 0.022),
      fitFontSize({ chars, boxW: textW, boxH: H * (portrait ? 0.17 : 0.16), lines: portrait ? 3 : 2, charEm: 0.56, lineHeight: 1.15, max: u * (portrait ? 12 : 8.4) }),
    );
    const estLines = head ? Math.min(3, Math.max(1, Math.ceil((chars * 0.56 * fs * 1.04) / textW))) : 0;
    textH = head ? estLines * fs * 1.15 + barGap + cell * barRows : 0;
    const gap = head ? u * (portrait ? 6 : 4.6) : 0;
    const total = textH + gap + cardH;
    textY = Math.round((H - total) / 2 - (portrait ? H * 0.015 : 0));
    textX = cardX;
    cardY = Math.round(textY + textH + gap);
  }
  const radius = Math.round(u * (portrait ? 1.6 : 1.2));
  // Where the headline block sits, so the halo leaves it clean.
  const blockLines = head ? Math.min(3, Math.max(1, Math.ceil((chars * 0.56 * fs * 1.04) / textW))) : 0;
  const blockH = head ? blockLines * fs * 1.15 + barGap + cell * barRows : 0;
  const blockY = aspect === "16:9" ? cardY + cardH / 2 - blockH / 2 : textY + textH - blockH;
  const keepOut = head
    ? { x0: textX - cell * 3, x1: textX + Math.min(textW, chars * 0.6 * fs) + cell * 3, y0: blockY - cell * 3, y1: blockY + blockH + cell * 2 }
    : null;
  const cgw = Math.round(cardW / cell);
  const cgh = Math.round(cardH / cell);
  // Halo lattice: the dissolve grid extended across the frame, anchored on the card.
  const ox0 = cardX - Math.ceil(cardX / cell) * cell;
  const oy0 = cardY - Math.ceil(cardY / cell) * cell;
  const fgw = Math.ceil((W - ox0) / cell);
  const fgh = Math.ceil((H - oy0) / cell);
  const barCells = Math.max(8, Math.round((aspect === "16:9" ? textW * 0.62 : cardW * 0.34) / cell));

  // ---- Colors, all from props.
  const pal = useMemo(() => {
    const ink0 = rgbOf(color);
    const pri = rgbOf(primary);
    const sec = rgbOf(secondary);
    let paper: RGB, ink: RGB;
    if (transparent) {
      // No backdrop to borrow from: the text color is one end, a near-tone of it the other.
      if (lumRGB(ink0) > 0.5) { paper = ink0; ink = mixRGB(ink0, [0, 0, 0], 0.93); }
      else { ink = ink0; paper = mixRGB(ink0, [255, 255, 255], 0.96); }
    } else {
      const bg = rgbOf(background);
      paper = lumRGB(ink0) > lumRGB(bg) ? ink0 : bg;
      ink = lumRGB(ink0) > lumRGB(bg) ? bg : ink0;
    }
    const dark = transparent ? lumRGB(ink0) > 0.5 : lumRGB(rgbOf(background)) < 0.4;
    // The 1-bit screen: a deep brand panel lit in the primary (or the paper tone when the primary is too dark to glow).
    const screen = mixRGB(ink, pri, 0.06);
    const lit = Math.abs(lumRGB(pri) - lumRGB(screen)) > 0.28 ? pri : paper;
    return { ink0, pri, sec, paper, ink, dark, screen, lit };
  }, [color, primary, secondary, background, transparent]);

  // ---- Images.
  const bSrc = screenshot || SAMPLE_SCREENSHOT;
  const [imgs, setImgs] = useState<{ a: HTMLImageElement | null; b: HTMLImageElement | null; key: string } | null>(null);
  const [handle] = useState(() => delayRender("bayer-dither-dissolve: screenshots"));
  const released = useRef(false);
  useEffect(() => {
    let alive = true;
    const h = delayRender("bayer-dither-dissolve: decode");
    const load = (src: string) =>
      new Promise<HTMLImageElement | null>((res) => {
        if (!src) return res(null);
        const im = new Image();
        im.crossOrigin = "anonymous";
        im.onload = () => res(im);
        im.onerror = () => res(null);
        im.src = src;
      });
    void Promise.all([load(bSrc), load(fromScreenshot)]).then(async ([b, a]) => {
      const b2 = b ?? (await load(SAMPLE_SCREENSHOT));
      if (alive) setImgs({ a, b: b2, key: `${bSrc.length}:${bSrc.slice(-24)}|${fromScreenshot.length}:${fromScreenshot.slice(-24)}` });
      continueRender(h);
      if (!released.current) {
        released.current = true;
        continueRender(handle);
      }
    });
    return () => {
      alive = false;
      continueRender(h);
    };
  }, [bSrc, fromScreenshot, handle]);

  const cards = useMemo(() => {
    if (!imgs?.b) return null;
    // Portrait and square crop toward the left, where logos and headlines usually sit.
    const ax = portrait ? 0.06 : aspect === "1:1" ? 0.3 : 0.5;
    const b = coverCanvas(imgs.b, cardW, cardH, ax, pal.paper);
    const a = imgs.a ? coverCanvas(imgs.a, cardW, cardH, ax, pal.paper) : oneBit(b, dot, pal.lit, pal.screen);
    return { a, b };
  }, [imgs, cardW, cardH, dot, pal, portrait, aspect]);

  // ---- Static fields: dissolve order per card pixel, halo falloff per frame pixel.
  const fields = useMemo(() => {
    const n = simplex3("bayer-dither-dissolve");
    const order = new Float32Array(cgw * cgh);
    // The ramp sweeps along the reading direction: left to right in landscape, top to bottom in portrait.
    const wx = portrait ? 0.3 : 0.68;
    const wy = 1 - wx;
    let mn = Infinity, mx = -Infinity;
    for (let y = 0; y < cgh; y++)
      for (let x = 0; x < cgw; x++) {
        const v = wx * (x / cgw) + wy * (y / cgh) + 0.16 * n(x * 0.06, y * 0.06, 0.5) + 0.05 * n(x * 0.2, y * 0.2, 3.1);
        order[y * cgw + x] = v;
        mn = Math.min(mn, v);
        mx = Math.max(mx, v);
      }
    for (let i = 0; i < order.length; i++) order[i] = (order[i]! - mn) / Math.max(1e-6, mx - mn);

    const halo = new Float32Array(fgw * fgh);
    const R = Math.min(W, H) * (0.035 + 0.075 * glow);
    const edge = u * 9;
    for (let y = 0; y < fgh; y++)
      for (let x = 0; x < fgw; x++) {
        const cx = ox0 + (x + 0.5) * cell;
        const cy = oy0 + (y + 0.5) * cell;
        const dx = Math.max(cardX - cx, 0, cx - (cardX + cardW));
        const dy = Math.max(cardY - cy, 0, cy - (cardY + cardH));
        const i = y * fgw + x;
        if (dx === 0 && dy === 0) { halo[i] = -1; continue; }
        const d = Math.hypot(dx, dy);
        // Fades to nothing before the frame edge, so transparent corners stay empty.
        const e = clamp01(Math.min(cx, W - cx, cy, H - cy) / edge);
        // Finite reach: the faintest Bayer stages would otherwise sprinkle single pixels across the frame.
        const reach = clamp01(1 - d / (R * 3.4));
        const ko = keepOut ? Math.hypot(Math.max(keepOut.x0 - cx, 0, cx - keepOut.x1), Math.max(keepOut.y0 - cy, 0, cy - keepOut.y1)) : Infinity;
        if (ko < cell * 0.5) { halo[i] = -1; continue; }
        halo[i] = Math.exp(-d / R) * reach * reach * e * e * (3 - 2 * e) * clamp01(ko / (cell * 5)) * (0.85 + 0.3 * n(x * 0.05, y * 0.05, 9.2));
      }
    return { order, halo, n };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cgw, cgh, fgw, fgh, ox0, oy0, cell, cardX, cardY, cardW, cardH, W, H, u, glow, portrait, keepOut?.x0, keepOut?.x1, keepOut?.y0, keepOut?.y1]);

  const scratch = useMemo(
    () => ({
      comp: makeCanvas(cardW, cardH),
      tmp: makeCanvas(cardW, cardH),
      maskB: makeCanvas(cgw, cgh),
      front: makeCanvas(cgw, cgh),
      appear: makeCanvas(cgw, cgh),
    }),
    [cardW, cardH, cgw, cgh],
  );

  // ---- Timeline values.
  const appearP = ramp(fq, [APPEAR, APPEAR_END], [0, 1.02]);
  const headP = ramp(fq, [HEAD0, HEAD1], [0, 1.02]);
  // Half linear, half eased: the mid-stages (the 50% checker) get real screen time instead of rushing past.
  const sweepL = ramp(fq, [SWEEP, CLEAN], [0, 1]);
  const sweepE = 0.55 * sweepL + 0.45 * easeInOut(sweepL);
  const T = -0.02 + sweepE * (1 + RAMP + 0.04);
  const pAt = (s: number) => clamp01((T - s) / RAMP);
  const heroBump = Math.sin(Math.PI * ramp(f, [SWEEP, CLEAN + 6], [0, 1]));
  const haloAmp = easeOut(ramp(fq, [2, 22], [0, 1])) * (0.34 + 0.4 * glow) * (1 + 0.45 * heroBump);
  const gridA = Math.min(ramp(f, [SWEEP - 6, SWEEP + 6], [0, 1]), ramp(f, [CLEAN - 8, CLEAN + 4], [1, 0])) * (pal.dark ? 0.1 : 0.08);

  const ref = useRef<HTMLCanvasElement>(null);
  const barRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const canvas = ref.current;
    if (!canvas || !cards) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, W, H);

    // 1. Halo: a glow drawn with nothing but ordered-dither pixels.
    {
      const z = tq * 0.05;
      const g = Math.max(1, Math.round(cell * 0.1));
      const lit = new Path2D();
      // The sparse outer fringe is lit in the secondary, so both brand colors build the halo.
      const outer = new Path2D();
      for (let y = 0; y < fgh; y++)
        for (let x = 0; x < fgw; x++) {
          const i = y * fgw + x;
          const b = fields.halo[i]!;
          if (b < 0) continue;
          const I = b * haloAmp * (1 + 0.3 * fields.n(x * 0.09, y * 0.09, z));
          if (I > thr(x, y)) (I < 0.3 ? outer : lit).rect(ox0 + x * cell + g, oy0 + y * cell + g, cell - 2 * g, cell - 2 * g);
        }
      ctx.fillStyle = css(pal.pri);
      ctx.fill(lit);
      ctx.fillStyle = css(pal.sec);
      ctx.fill(outer);
    }

    // 2. The screen.
    const comp = ctx2d(scratch.comp);
    comp.setTransform(1, 0, 0, 1, 0, 0);
    comp.globalCompositeOperation = "source-over";
    comp.imageSmoothingEnabled = false;
    comp.clearRect(0, 0, cardW, cardH);
    if (f >= CLEAN) comp.drawImage(cards.b, 0, 0);
    else if (f < SWEEP) comp.drawImage(cards.a, 0, 0);
    else {
      const mb = ctx2d(scratch.maskB);
      const fr = ctx2d(scratch.front);
      const idB = mb.createImageData(cgw, cgh);
      const idF = fr.createImageData(cgw, cgh);
      const ob = new Uint32Array(idB.data.buffer);
      const of = new Uint32Array(idF.data.buffer);
      const ON = pack([255, 255, 255], 255);
      const HOT = pack(pal.sec, 255);
      const WARM = pack(pal.pri, 255);
      for (let y = 0; y < cgh; y++)
        for (let x = 0; x < cgw; x++) {
          const i = y * cgw + x;
          const d = pAt(fields.order[i]!) - thr(x, y);
          if (d <= 0) continue;
          ob[i] = ON;
          // Only the leading edge sparkles: the first pixels of the new picture arrive hot.
          const p = d + thr(x, y);
          if (d < FRONT && p < 0.42) of[i] = d < FRONT * 0.5 ? HOT : WARM;
        }
      mb.putImageData(idB, 0, 0);
      fr.putImageData(idF, 0, 0);
      const tmp = ctx2d(scratch.tmp);
      tmp.globalCompositeOperation = "source-over";
      tmp.imageSmoothingEnabled = false;
      tmp.clearRect(0, 0, cardW, cardH);
      tmp.drawImage(scratch.maskB, 0, 0, cardW, cardH);
      tmp.globalCompositeOperation = "source-in";
      tmp.drawImage(cards.b, 0, 0);
      tmp.globalCompositeOperation = "source-over";
      comp.drawImage(cards.a, 0, 0);
      comp.drawImage(scratch.tmp, 0, 0);
      comp.drawImage(scratch.front, 0, 0, cardW, cardH);
    }
    // Pixel grid, tinted with the text color, only while pixels are flipping.
    if (gridA > 0.001) {
      comp.globalCompositeOperation = "source-over";
      comp.strokeStyle = css(pal.ink0, gridA);
      comp.lineWidth = Math.max(1, cell * 0.12);
      comp.beginPath();
      for (let x = 1; x < cgw; x++) { comp.moveTo(x * cell, 0); comp.lineTo(x * cell, cardH); }
      for (let y = 1; y < cgh; y++) { comp.moveTo(0, y * cell); comp.lineTo(cardW, y * cell); }
      comp.stroke();
    }
    // Entrance: the card itself dithers in from nothing.
    if (appearP < 1) {
      const ac = ctx2d(scratch.appear);
      const id = ac.createImageData(cgw, cgh);
      const o = new Uint32Array(id.data.buffer);
      const ON = pack([255, 255, 255], 255);
      for (let y = 0; y < cgh; y++) for (let x = 0; x < cgw; x++) if (appearP > thr(x, y)) o[y * cgw + x] = ON;
      ac.putImageData(id, 0, 0);
      comp.globalCompositeOperation = "destination-in";
      comp.drawImage(scratch.appear, 0, 0, cardW, cardH);
      comp.globalCompositeOperation = "source-over";
    }
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardW, cardH, radius);
    ctx.clip();
    ctx.drawImage(scratch.comp, cardX, cardY);
    ctx.restore();

    // 3. Headline bar: a 1-bit progress strip that fills with the same dither as the screen.
    const bar = barRef.current;
    const bc = bar?.getContext("2d", { willReadFrequently: true });
    if (bar && bc) {
      bc.clearRect(0, 0, barCells, barRows);
      bc.fillStyle = css(pal.pri);
      for (let x = 0; x < barCells; x++) {
        const p = Math.max(0.13 * Math.min(1, headP), pAt((x / barCells) * 0.999));
        for (let y = 0; y < barRows; y++) if (p > thr(x, y)) bc.fillRect(x, y, 1, 1);
      }
    }
  }, [f, fq, tq, cards, fields, scratch, pal, W, H, cardX, cardY, cardW, cardH, cgw, cgh, fgw, fgh, ox0, oy0, cell, radius, appearP, headP, T, haloAmp, gridA, barCells]);

  // ---- Light and entrance motion (whole-pixel steps keep the pixels crisp).
  const rise = Math.round((1 - easeOut(ramp(fq, [APPEAR, APPEAR_END + 4], [0, 1]))) * 3) * cell;
  const settle = springSnap(f, fps, CLEAN, { damping: 12, stiffness: 140, mass: 0.8 });
  const flash = f >= CLEAN ? Math.max(0, 1 - settle) + Math.exp(-(f - CLEAN) / 6) * 0.9 : 0;
  const heroGlow = 0.35 * heroBump;
  const deep = pal.dark ? pal.ink : pal.ink0;
  const mask = tileMask(headP);
  const headVisible = head && headP > 0;
  const rimA = (pal.dark ? 0.14 : 0.1) * clamp01(appearP);

  return (
    <AbsoluteFill style={{ background: transparent ? "transparent" : background, overflow: "hidden" }}>
      {/* Soft lift under the card plus the brand light that blooms when the picture resolves. */}
      <div
        style={{
          position: "absolute",
          left: px(cardX),
          top: px(cardY - rise),
          width: px(cardW),
          height: px(cardH),
          borderRadius: px(radius),
          opacity: clamp01(appearP),
          boxShadow: `0 ${px(u * 2)} ${px(u * 6)} ${css(deep, pal.dark ? 0.55 : 0.18)}, 0 0 ${px(u * (3 + 6 * (flash + heroGlow)))} ${withAlpha(primary, 0.1 + 0.32 * Math.min(1, flash + heroGlow))}`,
        }}
      />
      <canvas
        ref={ref}
        width={W}
        height={H}
        style={{ position: "absolute", left: 0, top: px(-rise), width: px(W), height: px(H), display: "block", imageRendering: "pixelated" }}
      />
      <div
        style={{
          position: "absolute",
          left: px(cardX),
          top: px(cardY - rise),
          width: px(cardW),
          height: px(cardH),
          borderRadius: px(radius),
          boxShadow: `inset 0 0 0 1px ${css(pal.dark ? pal.ink0 : deep, rimA)}`,
        }}
      />

      {head ? (
        <div
          style={{
            position: "absolute",
            left: px(textX),
            top: px(textY),
            width: px(textW),
            height: px(textH),
            display: "flex",
            flexDirection: "column",
            justifyContent: aspect === "16:9" ? "center" : "flex-end",
            alignItems: "flex-start",
          }}
        >
          <div
            data-21st-slot="headline"
            style={{
              fontFamily: font,
              fontWeight: 600,
              fontSize: px(fs),
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color,
              maxWidth: px(textW),
              overflowWrap: "break-word",
              textWrap: "balance",
              opacity: headVisible ? 1 : 0,
              maskImage: mask,
              WebkitMaskImage: mask,
              maskSize: px(cell * 8),
              WebkitMaskSize: px(cell * 8),
              maskRepeat: "repeat",
              WebkitMaskRepeat: "repeat",
            }}
          >
            {head}
          </div>
          <canvas
            ref={barRef}
            width={barCells}
            height={barRows}
            style={{ marginTop: px(barGap), width: px(barCells * cell), height: px(barRows * cell), imageRendering: "pixelated", display: "block" }}
          />
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
