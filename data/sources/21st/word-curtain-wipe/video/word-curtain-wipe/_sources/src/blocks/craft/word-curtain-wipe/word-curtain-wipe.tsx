// Built with Remotion - https://remotion.pro/license
import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import { AbsoluteFill, Img, continueRender, delayRender, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, easeOut, luminance, useLayout, waitForBrandFonts, withAlpha } from "../../../kit/index";
import { SAMPLE_SCREENSHOT } from "../_lib/samples";
import type { schema } from "./word-curtain-wipe.schema";

type Props = z.infer<typeof schema>;

/** Camera has pulled back onto the whole word. */
const IN = 26;
/** The dive into the last letter starts here (fixed, so any extra length is a hold on the landed scene). */
const DIVE_AT = 36;
/** Length of the dive into the last letter. */
const OUT = 24;
/** Frames the landed screenshot takes to ease into its final scale; then it holds to the end. */
const LAND = 8;
/** The giant word races in over this many frames; the pull-back starts at ZOOM_AT. */
const PAN = 24;
const ZOOM_AT = 9;
/** Settled tracking (em) and how much it opens up as the last letter dives. */
const TRACK = -0.022;
const TRACK_OPEN = 0.05;
/** Line pitch (em) for stacked rows. */
const PITCH = 0.94;
/** Speed echoes: how many, and how far back in time each one sits (frames). */
const ECHOES = 2;
const ECHO_STEP = 0.9;
/** Background curtain: faint outlined rows of the phrase drifting in alternate directions. */
const CURTAIN_SEP = "   /   ";

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='7' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")";

const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ---------- color helpers (all colors derive from props) ----------
function rgbOf(c: string): [number, number, number] | null {
  let hex = /^#([0-9a-f]{3,8})$/i.exec(c)?.[1];
  if (!hex) return null;
  if (hex.length === 3) hex = hex.split("").map((x) => x + x).join("");
  const n = parseInt(hex.slice(0, 6), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function hexOf([r, g, b]: [number, number, number]): string {
  const h = (v: number) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0");
  return `#${h(r)}${h(g)}${h(b)}`;
}
/** Scales a color toward zero (k < 1) or toward full (k > 1 mixes up to the max channel). */
function deepen(c: string, k: number): string {
  const rgb = rgbOf(c);
  return rgb ? hexOf([rgb[0] * k, rgb[1] * k, rgb[2] * k]) : c;
}
function brighten(c: string, t: number): string {
  const rgb = rgbOf(c);
  return rgb ? hexOf([rgb[0] + (255 - rgb[0]) * t, rgb[1] + (255 - rgb[1]) * t, rgb[2] + (255 - rgb[2]) * t]) : c;
}

/** Camera pull-back: slow to start, lands with a small overshoot, exactly 1 at t = 1. */
function pullBack(t: number): number {
  const u = Math.pow(clamp01(t), 1.7);
  const c1 = 1.15;
  return 1 + (c1 + 1) * Math.pow(u - 1, 3) + c1 * Math.pow(u - 1, 2);
}

// ---------- type measurement ----------
type Row = { chars: string[]; pos: number[]; w: number; asc: number; desc: number };
type Thick = { x: number; y: number; r: number };
const MEASURE_PX = 100;

function measureRows(rows: string[], font: string): Row[] {
  const ctx = document.createElement("canvas").getContext("2d", { willReadFrequently: true })!;
  ctx.font = font;
  return rows.map((row) => {
    const chars = Array.from(row);
    const pos: number[] = [];
    let acc = "";
    for (const ch of chars) {
      // Kerned position: width of the prefix including this glyph, minus the glyph's own advance.
      const withCh = ctx.measureText(acc + ch).width;
      pos.push(withCh - ctx.measureText(ch).width);
      acc += ch;
    }
    const m = ctx.measureText(row);
    const asc = m.actualBoundingBoxAscent || MEASURE_PX * 0.72;
    const desc = m.actualBoundingBoxDescent || MEASURE_PX * 0.2;
    return { chars, pos, w: m.width, asc, desc };
  });
}

/** The thickest point inside a glyph (chamfer distance transform), relative to its origin on the baseline, in MEASURE_PX units. */
function thickestPoint(ch: string, font: string): Thick {
  const S = 160;
  const scale = S / MEASURE_PX;
  const c = document.createElement("canvas");
  const probe = c.getContext("2d", { willReadFrequently: true })!;
  const big = font.replace(`${MEASURE_PX}px`, `${S}px`);
  probe.font = big;
  const adv = Math.max(S * 0.3, probe.measureText(ch).width);
  const pad = Math.round(S * 0.25);
  const w = Math.ceil(adv + pad * 2);
  const h = Math.ceil(S * 1.7);
  const base = Math.round(pad + S * 1.05);
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d", { willReadFrequently: true })!;
  // Resizing the canvas reset its state, font included.
  ctx.font = big;
  ctx.fillStyle = hexOf([0, 0, 0]);
  ctx.fillText(ch, pad, base);
  const data = ctx.getImageData(0, 0, w, h).data;
  const INF = 1e9;
  const d = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) d[i] = data[i * 4 + 3]! > 127 ? INF : 0;
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      if (!d[i]) continue;
      let v = d[i]!;
      if (x > 0) v = Math.min(v, d[i - 1]! + 3);
      if (y > 0) v = Math.min(v, d[i - w]! + 3);
      if (x > 0 && y > 0) v = Math.min(v, d[i - w - 1]! + 4);
      if (x < w - 1 && y > 0) v = Math.min(v, d[i - w + 1]! + 4);
      d[i] = v;
    }
  let best = 0;
  let bi = -1;
  for (let y = h - 1; y >= 0; y--)
    for (let x = w - 1; x >= 0; x--) {
      const i = y * w + x;
      if (!d[i]) continue;
      let v = d[i]!;
      if (x < w - 1) v = Math.min(v, d[i + 1]! + 3);
      if (y < h - 1) v = Math.min(v, d[i + w]! + 3);
      if (x < w - 1 && y < h - 1) v = Math.min(v, d[i + w + 1]! + 4);
      if (x > 0 && y < h - 1) v = Math.min(v, d[i + w - 1]! + 4);
      d[i] = v;
      if (v > best) {
        best = v;
        bi = i;
      }
    }
  if (bi < 0) return { x: adv / 2 / scale, y: -MEASURE_PX * 0.35, r: 0 };
  const bx = bi % w;
  const by = Math.floor(bi / w);
  return { x: (bx - pad) / scale, y: (by - base) / scale, r: best / 3 / scale };
}

// ---------- loading ----------
/** Font bytes must be registered before measuring glyph advances. */
function useFontsReady(family: string): boolean {
  const [handle] = useState(() => delayRender("word-curtain-wipe: fonts", { timeoutInMilliseconds: 25000 }));
  const done = useRef(false);
  const [ready, setReady] = useState<string | null>(null);
  useEffect(() => {
    let live = true;
    waitForBrandFonts()
      .then(() => document.fonts.ready)
      .then(() => live && setReady(family), () => live && setReady(family));
    return () => {
      live = false;
    };
  }, [family]);
  const ok = ready === family;
  useEffect(() => {
    if (ok && !done.current) {
      done.current = true;
      continueRender(handle);
    }
  }, [ok, handle]);
  return ok;
}

/** Natural aspect of the screenshot (null until known); `failed` falls back to the sample. */
function useImageAspect(src: string): { aspect: number | null; failed: boolean } {
  const [handle] = useState(() => delayRender("word-curtain-wipe: screenshot size", { timeoutInMilliseconds: 25000 }));
  const done = useRef(false);
  const [state, setState] = useState<{ src: string; aspect: number | null; failed: boolean } | null>(null);
  useEffect(() => {
    if (src === SAMPLE_SCREENSHOT) {
      setState({ src, aspect: 1.6, failed: false });
      return;
    }
    let live = true;
    const load = (cors: boolean) => {
      const im = new Image();
      if (cors) im.crossOrigin = "anonymous";
      im.onload = () => live && setState({ src, aspect: im.naturalWidth > 0 && im.naturalHeight > 0 ? im.naturalWidth / im.naturalHeight : 1.6, failed: false });
      im.onerror = () => (cors ? load(false) : live && setState({ src, aspect: 1.6, failed: true }));
      im.src = src;
    };
    load(true);
    return () => {
      live = false;
    };
  }, [src]);
  const ok = state?.src === src;
  useEffect(() => {
    if (ok && !done.current) {
      done.current = true;
      continueRender(handle);
    }
  }, [ok, handle]);
  return ok ? { aspect: state!.aspect, failed: state!.failed } : { aspect: null, failed: false };
}

type Cam = { s: number; fx: number; fy: number; track: number; covered: boolean };

/**
 * A giant word races in from the right with the next scene showing through its
 * letters, the camera pulls back onto the whole word, and then the last letter
 * grows until it swallows the frame: the type itself is the wipe. Everything is
 * DOM/SVG (clip-path text), so any frame renders on its own.
 */
export const Component: React.FC<Props> = ({ text, screenshot, color, primary, secondary, background, fontFamily, fit, grain }) => {
  const frame = useCurrentFrame();
  const { width: W, height: H, unit, aspect } = useLayout();
  const rawId = useId();
  const clipId = `wcw-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const transparent = background === "transparent";
  const family = brandFontStack(fontFamily);
  const weight = /Serif|Bebas|Caveat/.test(fontFamily) ? 400 : /^Geist/.test(fontFamily) ? 600 : 700;
  const fontsReady = useFontsReady(family);
  const src = screenshot.trim() || SAMPLE_SCREENSHOT;
  const { aspect: imgAspect, failed } = useImageAspect(src);
  const shotSrc = failed ? SAMPLE_SCREENSHOT : src;

  // ---------- palette ----------
  const dark = transparent ? luminance(color) > 0.45 : luminance(background) < 0.4;
  const shade = transparent
    ? luminance(color) < 0.3 ? color : deepen(primary, 0.16)
    : deepen(luminance(background) < luminance(color) ? background : color, dark ? 0.5 : 0.85);
  const light = transparent ? (luminance(color) > 0.5 ? color : brighten(primary, 0.85)) : luminance(background) > luminance(color) ? background : color;

  // ---------- rows + type size ----------
  const rows = useMemo(() => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    const one = [words.join(" ")];
    const twoRows = aspect !== "16:9" ? words.length > 1 : words.length > 1 && one[0]!.length > 14;
    if (!twoRows) return one;
    let best = one;
    let bestLen = Infinity;
    for (let k = 1; k < words.length; k++) {
      const cand = [words.slice(0, k).join(" "), words.slice(k).join(" ")];
      const len = Math.max(...cand.map((l) => l.length));
      if (len < bestLen) {
        bestLen = len;
        best = cand;
      }
    }
    return best;
  }, [text, aspect]);

  const font100 = `${weight} ${MEASURE_PX}px ${family}`;
  const geo = useMemo(() => {
    if (!fontsReady || typeof document === "undefined") return null;
    const m = measureRows(rows, font100);
    const [bw, bh] = aspect === "9:16" ? [W * 0.9, H * 0.5] : aspect === "1:1" ? [W * 0.84, H * 0.62] : [W * 0.9, H * 0.6];
    const unitsW = Math.max(...m.map((r) => r.w / MEASURE_PX + TRACK * (r.chars.length - 1)));
    const asc = Math.max(...m.map((r) => r.asc)) / MEASURE_PX;
    const desc = m[m.length - 1]!.desc / MEASURE_PX;
    const unitsH = asc + desc + (m.length - 1) * PITCH;
    const minFont = aspect === "9:16" ? H * 0.03 : H * 0.018;
    const F = Math.max(minFont, Math.min(bw / unitsW, bh / unitsH));
    const blockH = unitsH * F;
    const top = H / 2 - blockH / 2 - H * 0.008;
    const baselines = m.map((_, i) => top + asc * F + i * PITCH * F);
    // The letter the camera dives into: the last one on the last row with a stem at least
    // 60% as thick as the thickest on that row (so "faster." still dives into the r).
    const last = m[m.length - 1]!;
    const thick = last.chars.map((ch) => (ch.trim() ? thickestPoint(ch, font100) : { x: 0, y: 0, r: 0 }));
    const maxR = Math.max(...thick.map((t) => t.r));
    let j = last.chars.length - 1;
    while (j > 0 && thick[j]!.r < maxR * 0.6) j--;
    // One unit of the background curtain: the phrase plus a separator.
    const curtainUnit = measureRows([`${rows.join(" ")}${CURTAIN_SEP}`], font100)[0]!.w / MEASURE_PX;
    // Portrait: the word is width-bound and would sit as a thin band in a tall frame, so it is
    // set as stretched poster type, drawn tall to own most of the frame height.
    const sy = aspect === "9:16" ? Math.max(1, Math.min(1.75, (H * 0.6) / blockH)) : 1;
    return { m, F, top, blockH, asc, baselines, sy, Bc: { x: W / 2, y: top + blockH / 2 }, dive: { j, ...thick[j]! }, curtainUnit };
  }, [fontsReady, rows, font100, aspect, W, H]);

  const outStart = DIVE_AT;

  /** Glyph x positions for row r at a tracking value (em). */
  const rowXs = (r: number, track: number): number[] => {
    if (!geo) return [];
    const row = geo.m[r]!;
    const n = row.chars.length;
    const rowW = geo.F * (row.w / MEASURE_PX + track * (n - 1));
    const left = W / 2 - rowW / 2;
    return row.pos.map((p, j) => left + geo.F * (p / MEASURE_PX + track * j));
  };

  const camAt = (f: number): Cam => {
    if (!geo) return { s: 1, fx: W / 2, fy: H / 2, track: TRACK, covered: false };
    const { F, Bc, sy } = geo;
    /** Text-space y to stretched (screen at rest) y. */
    const Y = (y: number) => Bc.y + (y - Bc.y) * sy;
    const capH = geo.asc * F * sy;
    const s0 = Math.max(2.2, Math.min(6.5, (0.86 * Math.min(W, H)) / capH));
    const xs0 = rowXs(0, TRACK);
    const row0 = geo.m[0]!;
    const row0Left = xs0[0]!;
    const row0Right = W / 2 + (F * (row0.w / MEASURE_PX + TRACK * (row0.chars.length - 1))) / 2;
    const fy0 = Y(geo.baselines[0]!) - capH * 0.5;
    const push = 1 + 0.014 * easeInOut((f - IN) / Math.max(1, outStart - IN));
    if (f < outStart) {
      // Entrance: the word races in huge (first letter enters at the right edge), then a
      // pull-back curve brings the camera back onto the whole word with a small overshoot.
      const pan = 1 - Math.pow(1 - clamp01(f / PAN), 2.1);
      const startFx = row0Left - (0.5 * W) / s0;
      const endFx = row0Right - (0.28 * W) / s0;
      const sx = lerp(startFx, endFx, pan);
      const q = pullBack(clamp01((f - ZOOM_AT) / (IN - ZOOM_AT)));
      const s = Math.pow(s0, 1 - q) * (f > IN ? push : 1);
      return { s, fx: lerp(sx, Bc.x, q), fy: lerp(fy0, Bc.y, q), track: TRACK, covered: false };
    }
    // Dive: tracking opens, a breath back, the camera slides onto the last letter's
    // thickest stem and zooms (accelerating, on a log scale) until that stem covers the frame.
    const ou = clamp01((f - outStart) / OUT);
    const track = TRACK + TRACK_OPEN * easeInOut(clamp01(ou / 0.55));
    const lastRow = geo.m.length - 1;
    const xs = rowXs(lastRow, track);
    const px = xs[geo.dive.j]! + (geo.dive.x * F) / MEASURE_PX;
    const py = Y(geo.baselines[lastRow]! + (geo.dive.y * F) / MEASURE_PX);
    const pr = Math.max(F * 0.01, (geo.dive.r * F) / MEASURE_PX);
    const far = Math.max(Math.hypot(Bc.x, Bc.y), Math.hypot(W - Bc.x, Bc.y), Math.hypot(Bc.x, H - Bc.y), Math.hypot(W - Bc.x, H - Bc.y));
    const sEnd = (1.12 * far) / pr;
    const pan = easeInOut(clamp01((ou - 0.02) / 0.46));
    const ant = 1 - 0.045 * Math.sin(Math.PI * clamp01(ou / 0.26));
    const zt = clamp01((ou - 0.16) / 0.6);
    const z = Math.pow(zt, 2.4);
    const base = 1.014 * ant;
    const s = base * Math.exp(z * Math.log(sEnd / base));
    return { s, fx: lerp(Bc.x, px, pan), fy: lerp(Bc.y, py, pan), track, covered: zt >= 1 };
  };

  if (!geo || imgAspect === null) {
    return <AbsoluteFill style={{ background: transparent ? undefined : background }} />;
  }

  const { F, Bc } = geo;
  const cam = camAt(frame);
  const stretch = geo.sy !== 1 ? ` translate(0 ${Bc.y}) scale(1 ${geo.sy}) translate(0 ${-Bc.y})` : "";
  const tf = (c: Cam) => `translate(${Bc.x} ${Bc.y}) scale(${c.s}) translate(${-c.fx} ${-c.fy})${stretch}`;

  // Speed of the word on screen (px/frame), from its outer edges one frame apart.
  const edgeX = (c: Cam): [number, number] => {
    const xs = rowXs(0, c.track);
    const right = xs[xs.length - 1]! + F * 0.5;
    return [Bc.x + c.s * (xs[0]! - c.fx), Bc.x + c.s * (right - c.fx)];
  };
  const prev = camAt(Math.max(0, frame - 1));
  const [a0, a1] = edgeX(cam);
  const [b0, b1] = edgeX(prev);
  const speed = frame === 0 ? 1 : clamp01(Math.max(Math.abs(a0 - b0), Math.abs(a1 - b1)) / (W * 0.018));

  const rowEls = (c: Cam, props: React.SVGProps<SVGTextElement>, slot = false) =>
    geo.m.map((row, r) => (
      <text
        key={r}
        {...(slot ? { "data-21st-slot": "text" } : {})}
        x={rowXs(r, c.track).join(" ")}
        y={geo.baselines[r]}
        transform={tf(c)}
        style={{ whiteSpace: "pre", fontKerning: "none", fontFamily: family, fontWeight: weight, fontSize: F }}
        {...props}
      >
        {row.chars.join("")}
      </text>
    ));

  // ---------- the next scene (B) ----------
  const frameAspect = W / H;
  const fitsFrame = imgAspect / frameAspect < 1.08 && frameAspect / imgAspect < 1.08;
  const full = !transparent && (fit === "full" || (fit === "auto" && fitsFrame));
  const card = (() => {
    if (full) return { x: 0, y: 0, w: W, h: H, r: 0 };
    const [bw, bh] = aspect === "9:16" ? [W * 0.86, H * 0.62] : aspect === "1:1" ? [W * 0.8, H * 0.72] : [W * 0.78, H * 0.74];
    const w = Math.min(bw, bh * imgAspect);
    const h = w / imgAspect;
    return { x: (W - w) / 2, y: (H - h) / 2, w, h, r: unit * 1.8 };
  })();
  const coverAt = outStart + Math.ceil(OUT * 0.76);
  const shotScale = frame < coverAt ? 1.025 + 0.065 * (1 - easeOut(frame / coverAt)) : 1 + 0.025 * (1 - easeOut(clamp01((frame - coverAt) / LAND)));
  // On a transparent backdrop the plate around the card dissolves once the wipe lands,
  // so nothing full-frame remains.
  // A framed card waits lower and larger while it is seen through the letters, its top edge
  // just above the last row's baseline, so the letters show plate over a strip of page; it glides
  // into place as the last letter swallows the frame.
  const lift = card.r > 0 ? 1 - easeInOut(clamp01((frame - outStart - OUT * 0.1) / (coverAt - outStart - OUT * 0.1))) : 0;
  const lastBase = Bc.y + (geo.baselines[geo.baselines.length - 1]! - Bc.y) * geo.sy;
  const liftY = lift * Math.max(0, lastBase - geo.asc * F * geo.sy * 0.3 - card.y);
  const liftS = 1 + lift * 0.14;
  const plateOpacity = transparent ? 1 - clamp01((frame - (coverAt - 6)) / 10) : 1;
  const depthFade = frame < outStart ? 1 : 1 - clamp01((cam.s - 1.2) / 1.4);

  const plate = `radial-gradient(90% 80% at 22% 18%, ${withAlpha(light, dark ? 0.32 : 0.45)} 0%, ${withAlpha(light, 0)} 60%), radial-gradient(80% 80% at 85% 92%, ${withAlpha(shade, 0.35)} 0%, ${withAlpha(shade, 0)} 65%), linear-gradient(135deg, ${secondary} 0%, ${deepen(secondary, dark ? 0.5 : 0.72)} 100%)`;
  // On a light backdrop a light screenshot would vanish inside the letters: while the next
  // scene is only seen through them it gets a brand wash, which lifts as the wipe lands.
  const tint = `linear-gradient(120deg, ${primary} 0%, ${primary} 55%, ${secondary} 100%)`;
  const tintAlpha = dark ? 0 : 0.5;

  const B = (
    <AbsoluteFill>
      {card.r > 0 ? <AbsoluteFill style={{ background: plate, opacity: plateOpacity }} /> : null}
      <div
        style={{
          position: "absolute",
          left: card.x,
          top: card.y,
          width: card.w,
          height: card.h,
          borderRadius: card.r,
          overflow: "hidden",
          transform: `translateY(${liftY.toFixed(2)}px) scale(${(shotScale * liftS).toFixed(4)})`,
          transformOrigin: "50% 0%",
          boxShadow: card.r > 0 ? `0 ${unit * 1.6}px ${unit * 5}px ${withAlpha(shade, dark ? 0.55 : 0.3)}` : undefined,
        }}
      >
        <Img src={shotSrc} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
      {cam.covered || tintAlpha === 0 ? null : <AbsoluteFill style={{ background: tint, mixBlendMode: "multiply", opacity: tintAlpha * depthFade }} />}
    </AbsoluteFill>
  );

  // ---------- strokes, in text space (they scale with the camera like the letters do) ----------
  const rim = F * 0.014;
  const shadowBlur = Math.min(40, F * 0.045 * cam.s);

  const echoes: React.ReactNode[] = [];
  if (!cam.covered && speed > 0.04 && frame < ZOOM_AT + 6) {
    for (let k = ECHOES; k >= 1; k--) {
      const c = camAt(Math.max(0, frame - k * ECHO_STEP * (1 + speed)));
      const a = speed * [0, 0.42, 0.2][k]!;
      echoes.push(
        <g key={k} opacity={a}>
          {rowEls(c, { fill: withAlpha(secondary, 0.2), stroke: secondary, strokeWidth: rim, strokeLinejoin: "round" })}
        </g>,
      );
    }
  }

  // The curtain behind the word: rows of the phrase in hairline outline, moving in alternate
  // directions; it zooms a little with the camera (parallax) so the dive has depth.
  let curtain: React.ReactNode = null;
  if (!transparent && !cam.covered) {
    const n = aspect === "9:16" ? 9 : aspect === "1:1" ? 7 : 5;
    const fsz = (H / n) * 0.74;
    const unitPx = geo.curtainUnit * fsz;
    const v = W * 0.0032;
    const reps = Math.ceil((W * 2.2) / unitPx) + 2;
    const phrase = `${rows.join(" ")}${CURTAIN_SEP}`.repeat(reps);
    const sb = Math.pow(cam.s, 0.16);
    const ink = withAlpha(color, dark ? 0.075 : 0.085);
    curtain = (
      <svg width={W} height={H} style={{ position: "absolute", inset: 0, opacity: 1 - 0.6 * clamp01((cam.s - 2) / 6) }}>
        <g transform={`translate(${Bc.x} ${Bc.y}) scale(${sb}) translate(${-Bc.x} ${-Bc.y})`}>
          {Array.from({ length: n }, (_, k) => {
            const dir = k % 2 ? 1 : -1;
            const shift = (((dir * frame * v + k * unitPx * 0.37) % unitPx) + unitPx) % unitPx;
            return (
              <text
                key={k}
                x={-W * 0.6 - unitPx + shift}
                y={(k + 0.5) * (H / n) + fsz * 0.36}
                style={{ whiteSpace: "pre", fontFamily: family, fontWeight: weight, fontSize: fsz }}
                fill="none"
                stroke={ink}
                strokeWidth={Math.max(1, fsz * 0.012)}
              >
                {phrase}
              </text>
            );
          })}
        </g>
      </svg>
    );
  }

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background, overflow: "hidden" }}>
      {/* Scene A: the brand backdrop, a low glow behind the word and a soft vignette. */}
      {transparent ? null : (
        <AbsoluteFill
          style={{
            background: `radial-gradient(60% 55% at 50% 50%, ${withAlpha(primary, dark ? 0.1 : 0.12)} 0%, ${withAlpha(primary, 0)} 70%), radial-gradient(120% 120% at 50% 50%, ${withAlpha(shade, 0)} 55%, ${withAlpha(shade, dark ? 0.45 : 0.14)} 100%)`,
          }}
        />
      )}

      {curtain}

      <svg width={0} height={0} style={{ position: "absolute" }} aria-hidden>
        <defs>
          <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
            {rowEls(cam, {})}
          </clipPath>
        </defs>
      </svg>

      {cam.covered ? (
        B
      ) : (
        <>
          {/* Cast shadow under the word. */}
          {depthFade > 0 ? (
            <svg width={W} height={H} style={{ position: "absolute", inset: 0, filter: `blur(${shadowBlur.toFixed(1)}px)`, opacity: depthFade }}>
              <g transform={`translate(${(F * 0.008 * cam.s).toFixed(2)} ${(F * 0.035 * cam.s).toFixed(2)})`}>{rowEls(cam, { fill: withAlpha(shade, dark ? 0.6 : 0.24) })}</g>
            </svg>
          ) : null}
          {/* Speed echoes trailing the word. */}
          {echoes.length ? (
            <svg width={W} height={H} style={{ position: "absolute", inset: 0 }}>
              {echoes}
            </svg>
          ) : null}
          {/* Rim: filled letters plus a wide stroke; the window covers the inner half, leaving the outer edge. */}
          <svg width={W} height={H} style={{ position: "absolute", inset: 0 }}>
            {rowEls(cam, { fill: primary, stroke: primary, strokeWidth: rim * 2, strokeLinejoin: "round", paintOrder: "stroke" }, true)}
          </svg>
          {/* The window: scene B seen through the letters. */}
          <AbsoluteFill style={{ clipPath: `url(#${clipId})`, WebkitClipPath: `url(#${clipId})` }}>
            {B}
          </AbsoluteFill>
        </>
      )}

      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: 0.07, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
