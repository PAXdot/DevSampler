// Built with Remotion - https://remotion.pro/license
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, continueRender, delayRender, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, fitFontSize, luminance, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { SAMPLE_SCREENSHOT } from "../_lib/samples";
import type { schema } from "./slit-scan-smear.schema";
import { meta } from "./slit-scan-smear.meta";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];

const M = meta.timing.markers;
const T0 = M.launch ?? 26;
const LAND = M.land ?? 117;
const SETTLE = M.settled ?? 140;
/** Frames one row spends travelling: short, so the rows fly as streaks while the front walks down. */
const DUR = 30;
/** The caption slides in while the lower rows are still streaking. */
const CAP0 = 84;
/** Frames between the first and the last row leaving. */
const SPREAD = LAND - T0 - DUR;
/** Shutter: how much of a row's journey one exposure records (in row-progress units). */
const EXPO = 0.26;
/** How much longer the streak is than the distance travelled during the exposure. */
const TAIL_K = 1.9;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")";

const px = (n: number) => `${n}px`;
const clamp01 = (t: number) => Math.max(0, Math.min(1, t));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Row travel: a small wind-up to the left, a long accelerating pull, and a soft landing with a hair of overshoot. */
function travelEase(p: number): number {
  if (p <= 0) return 0;
  if (p >= 1) return 1;
  const c = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
  const wind = p < 0.3 ? -0.008 * Math.sin((Math.PI * p) / 0.3) : 0;
  const over = p > 0.84 ? 0.006 * Math.sin((Math.PI * (p - 0.84)) / 0.16) : 0;
  return c + wind + over;
}
/** Departure order down the picture: top first, the middle lags a little so the front bends. */
const delayOf = (v: number) => v + 0.09 * Math.sin(Math.PI * v) + 0.02 * Math.sin(3 * Math.PI * v);
/** Integer hash -> 0..1. */
const h01 = (a: number, b: number) => {
  let x = (Math.imul(a, 374761393) + Math.imul(b, 668265263)) >>> 0;
  x = Math.imul(x ^ (x >>> 13), 1274126177) >>> 0;
  return ((x ^ (x >>> 16)) >>> 0) / 4294967296;
};
/** Brightness of each scan line: a few hot filaments over many dim ones, like light recorded through a slit. */
const lineGain = (i: number) => {
  const fine = h01(i, 7);
  const coarse = h01(Math.floor(i / 3), 19);
  const broad = h01(Math.floor(i / 11), 31);
  return 0.12 + 0.88 * Math.pow(0.45 * fine + 0.35 * coarse + 0.2 * broad, 2.4) * 1.9;
};

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
const hex2 = (v: number) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
const css = (c: RGB, a = 1) => withAlpha(`#${hex2(c[0])}${hex2(c[1])}${hex2(c[2])}`, a);

// ---------- canvases ----------
function makeCanvas(w: number, h: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = Math.max(1, Math.round(w));
  c.height = Math.max(1, Math.round(h));
  return c;
}
const ctx2d = (c: HTMLCanvasElement) => c.getContext("2d", { willReadFrequently: true })!;

/** Screenshot cropped to fill the card, keeping its top (headers matter most). */
function cardCanvas(img: HTMLImageElement, w: number, h: number, r: number, paper: RGB, ax: number): HTMLCanvasElement {
  const c = makeCanvas(w, h);
  const ctx = ctx2d(c);
  ctx.beginPath();
  ctx.roundRect(0, 0, c.width, c.height, r);
  ctx.clip();
  ctx.fillStyle = css(paper);
  ctx.fillRect(0, 0, c.width, c.height);
  const iw = img.naturalWidth || img.width || 1600;
  const ih = img.naturalHeight || img.height || 1000;
  const s = Math.max(c.width / iw, c.height / ih);
  const dw = iw * s;
  const dh = ih * s;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(img, (c.width - dw) * ax, Math.min(0, (c.height - dh) * 0.12), dw, dh);
  return c;
}

/**
 * No second screenshot: the first one developed as a brand duotone. Its light surfaces take a
 * diagonal primary-to-secondary wash, its ink drops to the deep brand tone, colored details turn
 * to light chips. Same layout, new look, unmistakably the brand.
 */
function regrade(src: HTMLCanvasElement, deep: RGB, light: RGB, primary: RGB, secondary: RGB): HTMLCanvasElement {
  const c = makeCanvas(src.width, src.height);
  const ctx = ctx2d(c);
  ctx.drawImage(src, 0, 0);
  const id = ctx.getImageData(0, 0, c.width, c.height);
  const d = id.data;
  const w = c.width, h = c.height;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      if (d[i + 3] === 0) continue;
      const r = d[i]!, g = d[i + 1]!, b = d[i + 2]!;
      const l = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      const sat = (Math.max(r, g, b) - Math.min(r, g, b)) / 255;
      const gx = clamp01(0.62 * (x / w) + 0.38 * (y / h));
      const br0 = primary[0] + (secondary[0] - primary[0]) * gx;
      const br1 = primary[1] + (secondary[1] - primary[1]) * gx;
      const br2 = primary[2] + (secondary[2] - primary[2]) * gx;
      const t = Math.pow(clamp01((l - 0.12) / 0.8), 1.25);
      let o0 = deep[0] + (br0 - deep[0]) * t;
      let o1 = deep[1] + (br1 - deep[1]) * t;
      let o2 = deep[2] + (br2 - deep[2]) * t;
      // The brightest surfaces (cards on a page) lift a touch toward the light tone so they stay distinct.
      const lift = 0.22 * clamp01((l - 0.985) / 0.015);
      o0 += (light[0] - o0) * lift; o1 += (light[1] - o1) * lift; o2 += (light[2] - o2) * lift;
      const accW = clamp01((sat - 0.12) * 2.6) * 0.9;
      if (accW > 0) { o0 += (light[0] - o0) * accW; o1 += (light[1] - o1) * accW; o2 += (light[2] - o2) * accW; }
      d[i] = o0; d[i + 1] = o1; d[i + 2] = o2;
    }
  }
  ctx.putImageData(id, 0, 0);
  return c;
}

/**
 * The light a row leaves on the film: the card at half resolution, re-lit in bands of the
 * two brand colors (dark pixels still glow a little), fading to nothing at its left edge so
 * that stretching a row draws a streak that is brightest at its head.
 */
function streakSource(card: HTMLCanvasElement, primary: string, secondary: string): HTMLCanvasElement {
  const c = makeCanvas(card.width / 2, card.height / 2);
  const ctx = ctx2d(c);
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(card, 0, 0, c.width, c.height);
  const bands = ctx.createLinearGradient(0, 0, 0, c.height);
  const stops = 7;
  for (let k = 0; k <= stops; k++) bands.addColorStop(k / stops, k % 2 === 0 ? primary : secondary);
  ctx.globalCompositeOperation = "multiply";
  ctx.fillStyle = bands;
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.globalCompositeOperation = "lighter";
  ctx.globalAlpha = 0.14;
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.globalAlpha = 1;
  // Back to the card's own silhouette (rounded corners), then the exposure fade.
  ctx.globalCompositeOperation = "destination-in";
  ctx.drawImage(card, 0, 0, c.width, c.height);
  const fade = ctx.createLinearGradient(0, 0, c.width, 0);
  for (let k = 0; k <= 8; k++) fade.addColorStop(k / 8, withAlpha(primary, Math.pow(k / 8, 1.5)));
  ctx.fillStyle = fade;
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.globalCompositeOperation = "source-over";
  return c;
}

// ---------- component ----------
export const Component: React.FC<Props> = ({ screenshot, nextScreenshot, caption, color, primary, secondary, background, fontFamily, intensity }) => {
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: f } = useEnterExit(meta.timing);
  const transparent = background === "transparent";
  const dark = transparent ? luminance(color) > 0.45 : luminance(background) < 0.4;
  const font = brandFontStack(fontFamily);

  // ---- Layout: the screen card, with the caption under it.
  const cardW = Math.round(aspect === "16:9" ? H * 0.64 * 1.6 : aspect === "1:1" ? W * 0.78 : W * 0.86);
  const cardH = Math.round(aspect === "16:9" ? H * 0.64 : cardW * (portrait ? 1.3 : 0.7));
  const capText = caption.trim();
  const floor = portrait ? H * 0.031 : H * 0.02;
  const capLinesMax = aspect === "16:9" ? 1 : 2;
  const capFs = Math.max(
    floor,
    fitFontSize({ chars: Array.from(capText).length, boxW: cardW * (portrait ? 1 : 0.92), boxH: portrait ? H * 0.12 : H * 0.1, lines: capLinesMax, charEm: 0.55, lineHeight: 1.2, max: u * (aspect === "16:9" ? 4.2 : aspect === "1:1" ? 5.2 : 7.2) }),
  );
  const capGap = u * (portrait ? 5.5 : 4);
  const capLines = capLinesMax > 1 && Array.from(capText).length * 0.55 * capFs > cardW * 0.98 ? 2 : 1;
  const capH = capText ? capGap + capFs * 1.2 * capLines : 0;
  const cardX = Math.round((W - cardW) / 2);
  const cardY = Math.round((H - cardH - capH) / 2);
  const radius = u * (portrait ? 2.4 : 1.7);
  const rowPx = Math.max(2, Math.round(H / 540));
  // Distance a row travels: the first screen leaves the frame completely.
  const travel = W - cardX + u * 4;

  // ---- Colors, all from props.
  const pal = useMemo(() => {
    const ink = rgbOf(color);
    const pri = rgbOf(primary);
    const sec = rgbOf(secondary);
    const paper: RGB = transparent ? (ink.map((v) => 255 - v) as RGB) : rgbOf(background);
    const deep = lumRGB(ink) < lumRGB(paper) ? ink : paper;
    const light = lumRGB(ink) < lumRGB(paper) ? paper : ink;
    return { ink, pri, sec, paper, deep, light };
  }, [color, primary, secondary, background, transparent]);

  // ---- Images.
  const aSrc = screenshot || SAMPLE_SCREENSHOT;
  const [imgs, setImgs] = useState<{ a: HTMLImageElement | null; b: HTMLImageElement | null; key: string } | null>(null);
  const [handle] = useState(() => delayRender("slit-scan-smear: screenshots"));
  const released = useRef(false);
  useEffect(() => {
    let alive = true;
    const h = delayRender("slit-scan-smear: decode");
    const load = (src: string) =>
      new Promise<HTMLImageElement | null>((res) => {
        if (!src) return res(null);
        const im = new Image();
        im.crossOrigin = "anonymous";
        im.onload = () => res(im);
        im.onerror = () => res(null);
        im.src = src;
      });
    void Promise.all([load(aSrc), load(nextScreenshot)]).then(async ([a, b]) => {
      const a2 = a ?? (await load(SAMPLE_SCREENSHOT));
      if (alive) setImgs({ a: a2, b, key: `${aSrc.length}:${aSrc.slice(-24)}|${nextScreenshot.length}:${nextScreenshot.slice(-24)}` });
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
  }, [aSrc, nextScreenshot, handle]);

  // ---- Clean cards (display resolution) and their streak light (half resolution).
  const cards = useMemo(() => {
    if (!imgs?.a) return null;
    const ax = portrait ? 0.06 : aspect === "1:1" ? 0.3 : 0.5;
    const a = cardCanvas(imgs.a, cardW, cardH, radius, pal.paper, ax);
    const b = imgs.b ? cardCanvas(imgs.b, cardW, cardH, radius, pal.paper, ax) : regrade(a, pal.deep, pal.light, pal.pri, pal.sec);
    return { a, b, la: streakSource(a, primary, secondary), lb: streakSource(b, secondary, primary) };
  }, [imgs, cardW, cardH, radius, pal, portrait, aspect, primary, secondary]);

  // Scratch layers: streak film at half resolution, and a tiny one for the anamorphic bloom.
  const layers = useMemo(() => ({ film: makeCanvas(W / 2, H / 2), mid: makeCanvas(W / 6, H / 6), bloom: makeCanvas(W / 16, H / 16) }), [W, H]);

  const ref = useRef<HTMLCanvasElement>(null);
  useLayoutEffect(() => {
    const canvas = ref.current;
    if (!canvas || !cards) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, W, H);

    const rows = Math.ceil(cardH / rowPx);
    const film = layers.film;
    const fctx = ctx2d(film);
    fctx.setTransform(1, 0, 0, 1, 0, 0);
    fctx.globalAlpha = 1;
    fctx.globalCompositeOperation = dark ? "lighter" : "source-over";
    fctx.clearRect(0, 0, film.width, film.height);
    const fs = film.width / W;
    let moving = 0;

    // Static rows are drawn as runs: 0 = still the first screen, 2 = the second screen at rest.
    let runKind = -1;
    let runStart = 0;
    const flush = (end: number) => {
      if (runKind === 1 || runKind < 0 || end <= runStart) return;
      const sy = runStart * rowPx;
      const sh = Math.min(cardH, end * rowPx) - sy;
      if (sh > 0) ctx.drawImage(runKind === 0 ? cards.a : cards.b, 0, sy, cardW, sh, cardX, cardY + sy, cardW, sh);
    };
    const peak = 0.55 * travel;

    for (let i = 0; i < rows; i++) {
      const v = (i + 0.5) / rows;
      const pr = (f - T0 - SPREAD * delayOf(v)) / DUR;
      const kind = pr <= 0 ? 0 : pr >= 1 + EXPO ? 2 : 1;
      if (kind !== runKind) {
        flush(i);
        runKind = kind;
        runStart = i;
      }
      if (kind !== 1) continue;
      moving++;
      const sy = i * rowPx;
      const h = Math.min(rowPx, cardH - sy);
      const y = cardY + sy;
      const e = travelEase(pr);
      const xa = cardX + travel * e;
      const xb = xa - travel;
      // Instantaneous speed sets how sharp the row itself still is.
      const sp = (travelEase(Math.min(1, pr + 0.02)) - travelEase(Math.max(0, pr - 0.02))) / 0.04;
      const blur = clamp01(Math.abs(sp) / 1.5);
      const head = 1 - 0.92 * Math.pow(blur, 1.6);
      if (head > 0.01) {
        ctx.globalAlpha = head;
        if (xa < W) ctx.drawImage(cards.a, 0, sy, cardW, h, xa, y, cardW, h);
        if (xb + cardW > 0) ctx.drawImage(cards.b, 0, sy, cardW, h, xb, y, cardW, h);
      }
      // The exposure: everywhere the row has been during the shutter window, stretched into light.
      const tail = Math.max(0, TAIL_K * travel * (e - travelEase(Math.max(0, pr - EXPO))));
      if (tail > 1) {
        fctx.globalAlpha = clamp01(clamp01(tail / peak) * (0.5 + 0.5 * intensity) * (dark ? lineGain(i) : Math.pow(lineGain(i), 0.6)));
        const ly = sy / 2;
        const lh = Math.max(1, h / 2);
        if (xa - tail < W) fctx.drawImage(cards.la, 0, ly, cards.la.width, lh, (xa - tail) * fs, y * fs, (cardW + tail) * fs, h * fs);
        if (xb + cardW > 0) fctx.drawImage(cards.lb, 0, ly, cards.lb.width, lh, (xb - tail) * fs, y * fs, (cardW + tail) * fs, h * fs);
      }
    }
    ctx.globalAlpha = 1;
    flush(rows);

    if (moving > 0) {
      // Develop the film over the sharp rows: additive light on dark brands, ink-like on light ones.
      ctx.imageSmoothingEnabled = true;
      ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
      ctx.globalAlpha = dark ? 0.95 : 0.9;
      ctx.drawImage(film, 0, 0, W, H);
      if (dark) {
        // Second pass: overlapping streaks clip toward white-hot cores.
        ctx.globalAlpha = 0.3 * intensity;
        ctx.drawImage(film, 0, 0, W, H);
      }
      // Anamorphic bloom: the film shrunk to a few pixels and spread wide, like a lens flare along the streaks.
      const mctx = ctx2d(layers.mid);
      mctx.globalCompositeOperation = "source-over";
      mctx.clearRect(0, 0, layers.mid.width, layers.mid.height);
      mctx.drawImage(film, 0, 0, layers.mid.width, layers.mid.height);
      const bctx = ctx2d(layers.bloom);
      bctx.clearRect(0, 0, layers.bloom.width, layers.bloom.height);
      bctx.drawImage(layers.mid, 0, 0, layers.bloom.width, layers.bloom.height);
      ctx.globalAlpha = (dark ? 0.5 : 0.25) * intensity;
      ctx.drawImage(layers.bloom, -W * 0.18, -H * 0.03, W * 1.36, H * 1.06);
      ctx.globalAlpha = (dark ? 0.22 : 0.12) * intensity;
      ctx.drawImage(layers.mid, -W * 0.05, 0, W * 1.1, H);
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
    }
  }, [f, cards, layers, W, H, cardX, cardY, cardW, cardH, rowPx, travel, dark, intensity]);

  // ---- Camera, light and caption.
  const journey = clamp01((f - T0) / (LAND + DUR * EXPO - T0));
  const hump = Math.sin(Math.PI * journey);
  const camScale = f >= SETTLE ? 1 : 1 + 0.03 * hump;
  const camX = f >= SETTLE ? 0 : u * 1.2 * hump;
  const camT = camScale === 1 && camX === 0 ? undefined : `translateX(${camX.toFixed(2)}px) scale(${camScale.toFixed(5)})`;
  const restA = 1 - ramp(f, [T0, T0 + 10], [0, 1]);
  const restB = ramp(f, [LAND - 8, LAND + 6], [0, 1]);
  const rest = Math.max(restA, restB);
  const flash = f >= LAND - 2 && f < LAND + 16 ? (f < LAND + 2 ? (f - LAND + 2) / 4 : Math.max(0, 1 - (f - LAND - 2) / 14)) : 0;
  const glowA = (dark ? 0.26 : 0.18) * (0.55 + 0.45 * restB) + (dark ? 0.22 : 0.12) * Math.max(hump * 0.6, flash);
  const capIn = springSnap(f, fps, CAP0, { damping: 20, stiffness: 110, mass: 1 });
  const gloss = ramp(f, [LAND + 4, LAND + 30], [0, 1]);
  const lineIn = easeInOut(ramp(f, [CAP0 + 8, SETTLE - 4], [0, 1]));
  const lightCss = css(pal.light);
  // Transparent backdrop: the glow, streaks and bloom fade out well before the frame corners,
  // so all four corners stay alpha 0 at every frame (the screen itself sits inside the opaque core).
  const cornerMask = transparent
    ? `radial-gradient(ellipse ${px(W * 0.68)} ${px(H * 0.68)} at 50% 50%, ${withAlpha(color, 1)} 84%, ${withAlpha(color, 0)} 100%)`
    : undefined;

  return (
    <AbsoluteFill style={{ background: transparent ? "transparent" : background, overflow: "hidden" }}>
      <AbsoluteFill style={{ maskImage: cornerMask, WebkitMaskImage: cornerMask }}>
      {/* Brand light pooled behind the screen; it swells while the streaks fly. */}
      <div
        style={{
          position: "absolute",
          left: px(cardX + cardW / 2 - cardW * 0.85),
          top: px(cardY + cardH / 2 - cardH * 0.95),
          width: px(cardW * 1.7),
          height: px(cardH * 1.9),
          background: `radial-gradient(closest-side, ${withAlpha(primary, glowA)} 0%, ${withAlpha(secondary, glowA * 0.55)} 45%, ${withAlpha(secondary, 0)} 100%)`,
          filter: `blur(${px(u * 2)})`,
        }}
      />
      {!transparent ? (
        <>
          <AbsoluteFill style={{ background: `radial-gradient(ellipse 80% 80% at 50% 45%, transparent 55%, ${css(pal.deep, dark ? 0.38 : 0.06)} 100%)` }} />
          <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.07 : 0.05, mixBlendMode: "overlay" }} />
        </>
      ) : null}

      <div style={{ position: "absolute", left: 0, top: 0, width: px(W), height: px(H), transform: camT, transformOrigin: `${px(cardX + cardW / 2)} ${px(cardY + cardH / 2)}` }}>
        {/* Card shadow and brand rim, only while a screen is at rest. */}
        <div
          style={{
            position: "absolute",
            left: px(cardX),
            top: px(cardY),
            width: px(cardW),
            height: px(cardH),
            borderRadius: px(radius),
            opacity: rest,
            boxShadow: `0 ${px(u * 2.2)} ${px(u * 6.5)} ${css(pal.deep, dark ? 0.6 : 0.2)}, 0 0 ${px(u * (3 + 7 * flash))} ${withAlpha(primary, (dark ? 0.2 : 0.12) + 0.45 * flash)}`,
          }}
        />
        <canvas ref={ref} width={W} height={H} style={{ position: "absolute", left: 0, top: 0, width: px(W), height: px(H), display: "block" }} />
        <div style={{ position: "absolute", left: px(cardX), top: px(cardY), width: px(cardW), height: px(cardH), borderRadius: px(radius), overflow: "hidden", opacity: rest, boxShadow: `inset 0 0 0 1px ${css(dark ? pal.light : pal.deep, dark ? 0.12 : 0.1)}` }}>
          {gloss > 0 && gloss < 1 ? (
            <div
              style={{
                position: "absolute",
                top: px(-cardH * 0.2),
                left: px(lerp(-cardW * 0.5, cardW * 1.2, easeInOut(gloss))),
                width: px(cardW * 0.35),
                height: px(cardH * 1.4),
                transform: "rotate(16deg)",
                background: `linear-gradient(90deg, transparent, ${css(pal.light, 0.3)} 50%, transparent)`,
                mixBlendMode: "soft-light",
              }}
            />
          ) : null}
          {flash > 0 ? <div style={{ position: "absolute", inset: 0, background: lightCss, opacity: 0.2 * flash, mixBlendMode: dark ? "screen" : "soft-light" }} /> : null}
        </div>
      </div>
      </AbsoluteFill>

      {capText ? (
        <div style={{ position: "absolute", left: px(cardX), width: px(cardW), top: px(cardY + cardH + capGap), display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            data-21st-slot="caption"
            style={{
              width: "100%",
              fontFamily: font,
              fontWeight: 600,
              fontSize: px(capFs),
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color,
              textAlign: "center",
              overflowWrap: "break-word",
              textWrap: "balance",
              opacity: clamp01(capIn * 1.4),
              transform: `translateX(${((1 - capIn) * -u * 4).toFixed(2)}px)`,
              filter: capIn < 0.999 ? `blur(${((1 - capIn) * u * 0.9).toFixed(2)}px)` : undefined,
            }}
          >
            {capText}
          </div>
          {/* A last streak of light settles under the line. */}
          <div
            style={{
              marginTop: px(capFs * 0.32),
              width: px(Math.min(cardW * 0.5, capFs * 9) * lineIn),
              height: px(Math.max(2, u * 0.32)),
              borderRadius: px(u),
              background: `linear-gradient(90deg, ${withAlpha(secondary, 0)}, ${withAlpha(secondary, 0.9)} 35%, ${withAlpha(primary, 1)})`,
              boxShadow: `0 0 ${px(u * 1.4)} ${withAlpha(primary, dark ? 0.7 : 0.35)}`,
              opacity: lineIn,
            }}
          />
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
