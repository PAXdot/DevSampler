// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, cancelRender, continueRender, delayRender, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, easeInOut, fitFontSize, luminance, rise, springIn, useLayout, withAlpha } from "../../../kit/index";
import { waitForBrandFonts } from "../../../kit/brand-fonts";
import { rng, simplex3 } from "../_lib/noise";
import type { schema } from "./bar-built-digits.schema";

type Props = z.infer<typeof schema>;
type Seg = { top: number; bot: number; dim: boolean };
type Col = { x: number; u: number; hA: number; hB: number; jitter: number; segs: Seg[] };
type Geo = {
  cols: Col[];
  barW: number;
  by: number;
  digitH: number;
  chartMax: number;
  fieldL: number;
  fieldR: number;
  ink: { x: number; y: number; w: number; h: number };
  labelTop: number;
  labelSize: number;
  labelW: number;
  reflH: number;
  /** Where the mask glyphs were cut: the DOM numeral sits on exactly the same ink. */
  glyph: { x: number; px: number; sy: number };
};

// Timeline (frames at 30 fps).
const RISE = 4; // bars climb out of the baseline
const RISE_STAGGER = 16;
const UPDATE = 28; // the chart "ticks": every bar retargets to fresher data
const SCAN = 50; // a beam sweeps left to right, each bar it passes rebuilds itself as part of the number
const SCAN_LEN = 32;
const LABEL = 88;
const SHEEN = 96;
const SHEEN_LEN = 22;

const RISE_SPRING = { damping: 13, stiffness: 110, mass: 0.8 } as const;
const SHAPE_SPRING = { damping: 13, stiffness: 165, mass: 0.7 } as const;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='7' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

/** Deterministic number formatting (no locale lookup, same string on every worker). */
function format(value: number, decimals: number, separators: boolean, prefix: string, suffix: string): string {
  const fixed = Math.abs(value).toFixed(decimals);
  const [int = "0", frac] = fixed.split(".");
  const grouped = separators ? int.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : int;
  return `${prefix}${value < 0 ? "-" : ""}${grouped}${frac ? `.${frac}` : ""}${suffix}`;
}

function ctx2d(c: HTMLCanvasElement): CanvasRenderingContext2D {
  // Software canvas: GPU promotion makes blur non bit-identical between renders.
  return c.getContext("2d", { willReadFrequently: true })!;
}

function sized(ref: React.MutableRefObject<HTMLCanvasElement | null>, w: number, h: number): HTMLCanvasElement {
  if (!ref.current) ref.current = document.createElement("canvas");
  if (ref.current.width !== w) ref.current.width = w;
  if (ref.current.height !== h) ref.current.height = h;
  return ref.current;
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * A bar chart rises out of a baseline, ticks once like live data, then a
 * scanning beam sweeps across and every bar retargets: its top and bottom
 * spring to the ink of the user's number (sampled from a text mask, one
 * column per bar), so the digits are built out of the chart itself.
 */
export const Component: React.FC<Props> = ({ value, decimals, separators, prefix, suffix, label, color, accent, accent2, background, fontFamily, reflection }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit, aspect, portrait } = useLayout();
  const family = brandFontStack(fontFamily);
  const text = format(value, decimals, separators, prefix, suffix);
  const transparent = background === "transparent";
  const dark = transparent ? luminance(color) > 0.45 : luminance(background) < 0.4;

  // Hold the render until the face is registered: the mask is cut from real glyphs.
  const [handle] = useState(() => delayRender("bar-built-digits: font"));
  const released = useRef(false);
  const [ready, setReady] = useState<string | null>(null);
  useLayoutEffect(() => {
    let on = true;
    waitForBrandFonts()
      .then(() => document.fonts.load(`600 100px ${family}`, text))
      .then(() => document.fonts.ready)
      .then(() => {
        if (on) setReady(family);
        if (!released.current) {
          released.current = true;
          continueRender(handle);
        }
      })
      .catch(cancelRender);
    return () => {
      on = false;
    };
  }, [family, handle, text]);

  const maskRef = useRef<HTMLCanvasElement | null>(null);
  const geo = useMemo<Geo | null>(() => {
    if (!ready || typeof document === "undefined") return null;
    const font = (px: number) => `600 ${px}px ${family}`;
    const m = ctx2d(sized(maskRef, W, H));
    m.setTransform(1, 0, 0, 1, 0, 0);
    m.font = font(100);
    m.textBaseline = "alphabetic";
    m.textAlign = "left";
    const mt = m.measureText(text);
    const cap = Math.max(40, m.measureText("0").actualBoundingBoxAscent);
    const inkL = mt.actualBoundingBoxLeft;
    const inkW = Math.max(10, mt.actualBoundingBoxLeft + mt.actualBoundingBoxRight);
    const desc = Math.max(0, mt.actualBoundingBoxDescent);

    // Each aspect is composed, not scaled: bars are vertical, so taller frames stretch the digits upward.
    const cfg =
      aspect === "9:16"
        ? { maxW: 0.88, maxH: 0.47, sy: 3.2, chart: 1.26, pad: 0.03 }
        : aspect === "1:1"
          ? { maxW: 0.8, maxH: 0.34, sy: 1.5, chart: 1.24, pad: 0.06 }
          : { maxW: 0.76, maxH: 0.42, sy: 1.22, chart: 1.16, pad: 0.07 };
    const fontPx = Math.min((cfg.maxW * W) / inkW, (cfg.maxH * H) / (cap * cfg.sy)) * 100;
    const k = fontPx / 100;
    const digitH = cap * k * cfg.sy;
    const chartMax = digitH * cfg.chart;
    const reflH = reflection ? digitH * (aspect === "9:16" ? 0.24 : 0.3) : 0;

    const hasLabel = label.trim().length > 0;
    const labelW = W * (portrait ? 0.84 : aspect === "1:1" ? 0.78 : 0.62);
    const labelSize = hasLabel
      ? fitFontSize({
          chars: label.length,
          boxW: labelW,
          boxH: H * (portrait ? 0.09 : 0.1),
          lines: portrait ? 2 : label.length > 34 ? 2 : 1,
          charEm: 0.5,
          lineHeight: 1.25,
          max: H * (portrait ? 0.04 : aspect === "1:1" ? 0.04 : 0.036),
          min: H * (portrait ? 0.032 : 0.019),
        })
      : 0;
    const labelLines = hasLabel ? (label.length * labelSize * 0.5 > labelW * 0.95 ? 2 : 1) : 0;
    const labelGap = hasLabel ? Math.max(digitH * 0.28, unit * (portrait ? 9 : 7)) : 0;
    const labelH = labelLines * labelSize * 1.25;

    // Center the settled read (digits + label), keep the taller chart inside the action-safe top.
    const total = digitH + labelGap + labelH;
    let by = (H - total) / 2 + digitH - H * 0.01;
    by = Math.max(by, H * 0.075 + chartMax);
    const cx = W / 2;
    const x0 = cx - inkW * k / 2 + inkL * k;

    m.clearRect(0, 0, W, H);
    m.save();
    m.translate(0, by);
    m.scale(1, cfg.sy);
    m.font = font(fontPx);
    m.fillStyle = "#fff";
    m.fillText(text, x0, 0);
    m.restore();

    const pitch = Math.max(unit * 0.62, fontPx * 0.03);
    const barW = pitch * 0.62;
    const fieldHalf = Math.min(W * 0.46, (inkW * k) / 2 + W * cfg.pad);
    const n = Math.max(8, Math.floor((fieldHalf * 2) / pitch));
    const fieldL = cx - ((n - 1) * pitch) / 2;
    const fieldR = fieldL + (n - 1) * pitch;

    const y0 = Math.max(0, Math.floor(by - digitH * 1.25));
    const y1 = Math.min(H - 1, Math.ceil(by + (desc * k + 6) * cfg.sy));
    const sx0 = Math.max(0, Math.floor(fieldL - pitch));
    const sw = Math.min(W, Math.ceil(fieldR + pitch)) - sx0;
    const img = m.getImageData(sx0, y0, Math.max(1, sw), Math.max(1, y1 - y0 + 1));
    const alphaAt = (x: number, y: number) => {
      const ix = Math.round(x) - sx0;
      if (ix < 0 || ix >= img.width) return 0;
      return img.data[((y - y0) * img.width + ix) * 4 + 3]!;
    };

    const noiseA = simplex3("bbd-chart-a");
    const noiseB = simplex3("bbd-chart-b");
    const r = rng("bbd-jitter");
    const cols: Col[] = [];
    for (let i = 0; i < n; i++) {
      const x = fieldL + i * pitch;
      const u = n > 1 ? i / (n - 1) : 0.5;
      // Ink runs down this column (three taps across the bar width so thin strokes are not missed).
      const runs: Seg[] = [];
      let start = -1;
      for (let y = y0; y <= y1; y++) {
        const a = Math.max(alphaAt(x - barW * 0.32, y), alphaAt(x, y), alphaAt(x + barW * 0.32, y));
        if (a >= 110 && start < 0) start = y;
        if ((a < 110 || y === y1) && start >= 0) {
          runs.push({ top: start, bot: y, dim: false });
          start = -1;
        }
      }
      const merged: Seg[] = [];
      for (const run of runs) {
        const last = merged[merged.length - 1];
        if (last && run.top - last.bot < barW * 0.7) last.bot = run.bot;
        else merged.push({ ...run });
      }
      // Curve extremes leave slivers a bar cannot draw cleanly: drop them.
      for (let j = merged.length - 1; j >= 0; j--) if (merged[j]!.bot - merged[j]!.top < barW * 0.9) merged.splice(j, 1);
      // A lone short dash floating mid-air is the side of a bowl grazing the column: it reads as noise.
      if (merged.length === 1 && merged[0]!.bot - merged[0]!.top < barW * 2.2 && merged[0]!.bot < by - barW * 2) merged.length = 0;
      for (const s of merged) {
        if (s.bot - s.top < barW) {
          const mid = (s.top + s.bot) / 2;
          s.top = mid - barW / 2;
          s.bot = mid + barW / 2;
        }
      }
      // Bottom-most first, so chart slices map onto segments in stacking order.
      merged.sort((a, b) => b.bot - a.bot);
      const lowest = merged[0];
      if (!lowest || lowest.bot < by - barW * 2.2) merged.unshift({ top: by - barW, bot: by, dim: true });
      const trendA = 0.22 + 0.56 * Math.pow(u, 1.35);
      const trendB = 0.3 + 0.62 * Math.pow(u, 1.15);
      const hA = Math.min(1, Math.max(0.07, trendA + 0.2 * noiseA(u * 4.2, 0.3, 0.7) + 0.09 * (r() - 0.5)));
      const hB = Math.min(1, Math.max(0.09, trendB + 0.17 * noiseB(u * 5.1, 1.7, 0.2) + 0.08 * (r() - 0.5)));
      cols.push({ x, u, hA: hA * chartMax, hB: hB * chartMax, jitter: r(), segs: merged });
    }

    return {
      cols,
      barW,
      by,
      digitH,
      chartMax,
      fieldL,
      fieldR,
      ink: { x: fieldL - barW, y: by - chartMax, w: fieldR - fieldL + barW * 2, h: chartMax + Math.max(0, desc * k * cfg.sy) },
      labelTop: by + labelGap,
      labelSize,
      labelW,
      reflH,
      glyph: { x: x0, px: fontPx, sy: cfg.sy },
    };
  }, [ready, family, text, W, H, unit, aspect, portrait, label, reflection]);

  const ref = useRef<HTMLCanvasElement>(null);
  const layerRef = useRef<HTMLCanvasElement | null>(null);
  const glowRef = useRef<HTMLCanvasElement | null>(null);
  const bloomRef = useRef<HTMLCanvasElement | null>(null);
  const reflRef = useRef<HTMLCanvasElement | null>(null);

  useLayoutEffect(() => {
    const canvas = ref.current;
    if (!canvas || !geo) return;
    const ctx = ctx2d(canvas);
    const { cols, barW, by, chartMax, fieldL, fieldR, reflH, digitH } = geo;
    const fieldW = fieldR - fieldL;
    const f = frame;

    // ---- Bars layer (full res) ----------------------------------------
    const layer = sized(layerRef, W, H);
    const l = ctx2d(layer);
    l.setTransform(1, 0, 0, 1, 0, 0);
    l.globalCompositeOperation = "source-over";
    l.globalAlpha = 1;
    l.filter = "none";
    l.clearRect(0, 0, W, H);
    const fill = l.createLinearGradient(fieldL, 0, fieldR, 0);
    fill.addColorStop(0, accent);
    fill.addColorStop(1, accent2);
    l.fillStyle = fill;

    const inkPath = new Path2D();
    const upd = (c: Col) => easeInOut((f - UPDATE - c.u * 8) / 16);
    const scanAt = (c: Col) => SCAN + c.u * SCAN_LEN - 1;
    for (const c of cols) {
      const grow = springIn(f, fps, RISE + c.u * RISE_STAGGER + c.jitter * 3, RISE_SPRING);
      const h = Math.max(0, lerp(c.hA, c.hB, upd(c)) * grow);
      const raw = spring({ frame: f - scanAt(c), fps, config: SHAPE_SPRING });
      const p = Math.abs(1 - raw) < 1e-3 ? 1 : raw;
      const nSeg = c.segs.length;
      for (let k = 0; k < nSeg; k++) {
        const s = c.segs[k]!;
        const sliceBot = by - (h * k) / nSeg;
        const sliceTop = by - (h * (k + 1)) / nSeg;
        // Before the split, slices overlap a hair so abutting anti-aliased edges leave no seam.
        const overlap = k > 0 ? Math.max(0, 1 - p) * 1.5 : 0;
        let top = lerp(sliceTop, s.top, p) - (k < nSeg - 1 ? Math.max(0, 1 - p) * 1.5 : 0);
        let bot = lerp(sliceBot, s.bot, p) + overlap;
        if (bot - top < 0.6) continue;
        if (bot - top < barW * 0.5 && p > 0.5) {
          const mid = (top + bot) / 2;
          top = mid - barW * 0.25;
          bot = mid + barW * 0.25;
        }
        // Slices of one bar meet flush until they split, so seams stay square at first.
        const rad = Math.min(barW / 2, (bot - top) / 2);
        const seam = rad * Math.min(1, Math.max(0, p) * 4);
        const rTop = k === nSeg - 1 ? rad : seam;
        const rBot = k === 0 ? rad : seam;
        const radii = [rTop, rTop, rBot, rBot];
        if (s.dim) {
          // Columns that carry no ink sink back to a dotted axis.
          l.globalAlpha = lerp(1, 0.26, Math.min(1, Math.max(0, p)));
          l.beginPath();
          l.roundRect(c.x - barW / 2, top, barW, bot - top, radii);
          l.fill();
          l.globalAlpha = 1;
        } else {
          inkPath.roundRect(c.x - barW / 2, top, barW, bot - top, radii);
        }
      }
    }
    l.fill(inkPath);

    // Light: tops run hot (dark brand) or the base lifts toward paper (light brand).
    l.globalCompositeOperation = "source-atop";
    const vg = l.createLinearGradient(0, by - chartMax, 0, by);
    if (dark) {
      vg.addColorStop(0, withAlpha(color, 0.55));
      vg.addColorStop(0.45, withAlpha(color, 0.08));
      vg.addColorStop(1, withAlpha(color, 0));
    } else {
      vg.addColorStop(0, withAlpha(color, 0.1));
      vg.addColorStop(0.6, withAlpha(color, 0));
      vg.addColorStop(1, transparent ? withAlpha(color, 0) : withAlpha(background, 0.22));
    }
    l.fillStyle = vg;
    l.fillRect(fieldL - barW * 2, by - chartMax * 1.3, fieldW + barW * 4, chartMax * 1.3 + digitH);

    // The beam ignites the bars it passes.
    const beamX = fieldL + ((f - SCAN) / SCAN_LEN) * fieldW;
    const beamA = band(f, SCAN - 6, SCAN + 2, SCAN + SCAN_LEN - 2, SCAN + SCAN_LEN + 8);
    const beamW = Math.max(unit * 4, fieldW * 0.045);
    const flash = dark ? color : transparent ? color : background;
    if (beamA > 0) {
      const bg = l.createLinearGradient(beamX - beamW, 0, beamX + beamW, 0);
      bg.addColorStop(0, withAlpha(flash, 0));
      bg.addColorStop(0.5, withAlpha(flash, (dark ? 0.85 : 0.55) * beamA));
      bg.addColorStop(1, withAlpha(flash, 0));
      l.fillStyle = bg;
      l.fillRect(beamX - beamW, 0, beamW * 2, H);
    }

    // One sheen across the finished number.
    const sh = (f - SHEEN) / SHEEN_LEN;
    if (sh > 0 && sh < 1) {
      const sx = lerp(fieldL - fieldW * 0.3, fieldR + fieldW * 0.3, easeInOut(sh));
      const tilt = digitH * 0.5;
      const sg = l.createLinearGradient(sx - tilt - beamW * 1.6, by, sx + tilt + beamW * 1.6, by - digitH);
      const a = (dark ? 0.5 : 0.42) * Math.sin(Math.PI * sh);
      sg.addColorStop(0, withAlpha(flash, 0));
      sg.addColorStop(0.5, withAlpha(flash, a));
      sg.addColorStop(1, withAlpha(flash, 0));
      l.fillStyle = sg;
      l.fillRect(0, 0, W, H);
    }
    l.globalCompositeOperation = "source-over";

    // ---- Composite ---------------------------------------------------
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.filter = "none";
    ctx.clearRect(0, 0, W, H);
    if (!transparent) {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, W, H);
    }

    // Ambient pool of brand light behind the chart.
    const amb = band(f, 0, 40);
    const cx = (fieldL + fieldR) / 2;
    const cy = by - digitH * 0.5;
    const pool = (col: string, a: number, ox: number, rx: number) => {
      ctx.save();
      ctx.translate(cx + ox, cy);
      ctx.scale(1, 0.62);
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, rx);
      g.addColorStop(0, withAlpha(col, a * amb));
      g.addColorStop(1, withAlpha(col, 0));
      ctx.fillStyle = g;
      ctx.fillRect(-rx, -rx, rx * 2, rx * 2);
      ctx.restore();
    };
    const rx = Math.min(W, H / 0.62) * 0.44;
    // As a layer over someone else's footage, no haze: only the bars and their light.
    if (!transparent) {
      pool(accent, dark ? 0.2 : 0.08, -fieldW * 0.16, rx);
      pool(accent2, dark ? 0.16 : 0.07, fieldW * 0.16, rx);
    }

    // Chart scaffolding: gridlines draw in, then retire as the number forms.
    const gridDraw = easeInOut((f - 2) / 18);
    const gridFade = 1 - band(f, SCAN, SCAN + SCAN_LEN + 6);
    ctx.lineWidth = Math.max(1, unit * 0.1);
    const gx0 = fieldL - barW * 2;
    const gx1 = lerp(gx0, fieldR + barW * 2, gridDraw);
    if (gridFade > 0 && gridDraw > 0) {
      ctx.strokeStyle = withAlpha(color, (dark ? 0.08 : 0.1) * gridFade);
      ctx.setLineDash([unit * 0.5, unit * 0.7]);
      for (const q of [0.25, 0.5, 0.75, 1]) {
        const y = Math.round(by - chartMax * q) + 0.5;
        ctx.beginPath();
        ctx.moveTo(gx0, y);
        ctx.lineTo(gx1, y);
        ctx.stroke();
      }
      ctx.setLineDash([]);
    }
    const axisDraw = easeInOut(f / 16);
    if (axisDraw > 0) {
      ctx.strokeStyle = withAlpha(color, lerp(dark ? 0.26 : 0.3, dark ? 0.1 : 0.12, band(f, SCAN + 10, SCAN + SCAN_LEN + 20)));
      const ax0 = cx - (fieldW / 2 + barW * 3) * axisDraw;
      const ax1 = cx + (fieldW / 2 + barW * 3) * axisDraw;
      ctx.beginPath();
      ctx.moveTo(ax0, Math.round(by + barW * 0.9) + 0.5);
      ctx.lineTo(ax1, Math.round(by + barW * 0.9) + 0.5);
      ctx.stroke();
    }

    // Glow (dark) or a soft colored contact shadow (light), both from a half-res blurred copy.
    const gw = Math.max(2, Math.round(W / 2));
    const gh = Math.max(2, Math.round(H / 2));
    const glow = sized(glowRef, gw, gh);
    const g = ctx2d(glow);
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.filter = "none";
    g.clearRect(0, 0, gw, gh);
    g.filter = `blur(${Math.max(1, Math.round(unit * 0.7))}px)`;
    g.drawImage(layer, 0, 0, gw, gh);
    g.filter = "none";
    if (dark) {
      const bloom = sized(bloomRef, gw, gh);
      const b = ctx2d(bloom);
      b.setTransform(1, 0, 0, 1, 0, 0);
      b.filter = "none";
      b.clearRect(0, 0, gw, gh);
      b.filter = `blur(${Math.max(2, Math.round(unit * 3))}px)`;
      b.drawImage(layer, 0, 0, gw, gh);
      b.filter = "none";
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = 0.55;
      ctx.drawImage(bloom, 0, 0, W, H);
      ctx.globalAlpha = 0.75;
      ctx.drawImage(glow, 0, 0, W, H);
    } else {
      ctx.globalAlpha = 0.32;
      ctx.drawImage(glow, 0, unit * 0.9, W, H);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";

    // Glossy floor: the bars mirrored under the baseline, fading out.
    if (reflH > 0) {
      const refl = sized(reflRef, gw, gh);
      const rc = ctx2d(refl);
      const floor = by + barW * 1.6;
      rc.setTransform(1, 0, 0, 1, 0, 0);
      rc.globalCompositeOperation = "source-over";
      rc.filter = "none";
      rc.clearRect(0, 0, gw, gh);
      rc.setTransform(0.5, 0, 0, -0.5, 0, floor);
      rc.drawImage(layer, 0, 0);
      rc.setTransform(1, 0, 0, 1, 0, 0);
      rc.globalCompositeOperation = "destination-in";
      const fg = rc.createLinearGradient(0, floor / 2, 0, (floor + reflH) / 2);
      fg.addColorStop(0, "rgba(0,0,0,1)");
      fg.addColorStop(1, "rgba(0,0,0,0)");
      rc.fillStyle = fg;
      rc.fillRect(0, 0, gw, gh);
      rc.clearRect(0, 0, gw, Math.floor(floor / 2));
      rc.globalCompositeOperation = "source-over";
      ctx.globalAlpha = dark ? 0.3 : 0.18;
      ctx.drawImage(refl, 0, 0, W, H);
      ctx.globalAlpha = 1;
    }

    // Beam core and halo in the air above the bars.
    if (beamA > 0) {
      const top = by - chartMax * 1.12;
      const bot = by + reflH * 0.8 + barW * 2;
      const vgrad = ctx.createLinearGradient(0, top, 0, bot);
      vgrad.addColorStop(0, withAlpha(dark ? color : accent, 0));
      vgrad.addColorStop(0.5, withAlpha(dark ? color : accent, (dark ? 0.75 : 0.55) * beamA));
      vgrad.addColorStop(1, withAlpha(dark ? color : accent, 0));
      ctx.fillStyle = vgrad;
      ctx.fillRect(Math.round(beamX - unit * 0.09), top, Math.max(1, unit * 0.18), bot - top);
      ctx.save();
      ctx.translate(beamX, (top + bot) / 2);
      ctx.scale(beamW / ((bot - top) / 2), 1);
      const halo = ctx.createRadialGradient(0, 0, 0, 0, 0, (bot - top) / 2);
      halo.addColorStop(0, withAlpha(accent, (dark ? 0.22 : 0.12) * beamA));
      halo.addColorStop(1, withAlpha(accent, 0));
      ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
      ctx.fillStyle = halo;
      ctx.fillRect(-(bot - top) / 2, -(bot - top) / 2, bot - top, bot - top);
      ctx.restore();
      ctx.globalCompositeOperation = "source-over";
    }

    ctx.drawImage(layer, 0, 0);
  }, [geo, frame, fps, W, H, unit, color, accent, accent2, background, dark, transparent]);

  const labelIn = band(frame, LABEL, LABEL + 14);
  const labelY = rise(frame, fps, LABEL, unit * 2.4);
  const bodyFont = family;
  const ghostIn = band(frame, SHEEN, SHEEN + SHEEN_LEN);
  const ghostFill = withAlpha(accent, dark ? 0.16 : 0.12);

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <canvas ref={ref} width={W} height={H} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      {geo ? (
        // The number as real text, cut from the same face at the same spot as the bar mask.
        // Once the bars have formed it fills in faintly between them so the figure reads as one solid numeral.
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0, overflow: "visible", pointerEvents: "none" }}>
          <text
            data-21st-slot="value"
            x={geo.glyph.x}
            y={0}
            transform={`translate(0 ${geo.by}) scale(1 ${geo.glyph.sy})`}
            fontFamily={family}
            fontWeight={600}
            fontSize={geo.glyph.px}
            fill={ghostFill}
            opacity={ghostIn}
            style={{ whiteSpace: "pre" }}
          >
            {text}
          </text>
        </svg>
      ) : null}
      {geo && label.trim() ? (
        <div
          style={{
            position: "absolute",
            left: (W - geo.labelW) / 2,
            top: geo.labelTop,
            width: geo.labelW,
            display: "flex",
            justifyContent: "center",
            opacity: labelIn,
            transform: `translateY(${labelY}px)`,
          }}
        >
          <div
            data-21st-slot="label"
            style={{
              fontFamily: bodyFont,
              fontWeight: 500,
              fontSize: geo.labelSize,
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              color,
              opacity: 0.74,
              textAlign: "center",
              maxWidth: "100%",
              overflowWrap: "anywhere",
            }}
          >
            {label}
          </div>
        </div>
      ) : null}
      {!transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.05 : 0.04, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
