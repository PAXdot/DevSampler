// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, cancelRender, continueRender, delayRender, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, easeInOut, easeOut, expoOut, fitFontSize, luminance, rise, springSnap, useLayout, withAlpha } from "../../../kit/index";
import { waitForBrandFonts } from "../../../kit/brand-fonts";
import { simplex3 } from "../_lib/noise";
import type { schema } from "./ridgeline-waves.schema";

type Props = z.infer<typeof schema>;

// Timeline (frames at 30 fps).
const WAKE = 6; // rows wake front to back
const LIFT = 72; // the front ridge lifts into the peak
const COUNT = 76; // number rides up with the tip
const COUNT_LEN = 42;
const LAND = 92; // tip lands, first pulse ring
const LABEL = 102;
const PULSE = 152; // heartbeat pulses after the settle (every 60 frames)
const PULSE_EVERY = 60;

const PEAK_SPRING = { damping: 12, stiffness: 88, mass: 1 } as const;
const DOT_SPRING = { damping: 10, stiffness: 190, mass: 0.7 } as const;
/** Gradient stops per ridgeline: enough to carry a moving ring of light without banding. */
const STOPS = 32;
const LH = 1.16;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='31' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

type Geo = {
  cx: number;
  halfW: number;
  fieldTop: number;
  fieldBot: number;
  tipY: number;
  numTop: number;
  numSize: number;
  labelSize: number;
  blockW: number;
  n: number; // rows actually drawn
  s: number; // samples per row (even, so u = 0 is a sample: the peak is a true cusp)
  gap: number; // mean row spacing, px
  pw: number; // peak cusp width (u)
  sw: number; // peak shoulder width (u)
};

type Ring = { t0: number; k: number };

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

function reset(c: CanvasRenderingContext2D) {
  c.setTransform(1, 0, 0, 1, 0, 0);
  c.globalCompositeOperation = "source-over";
  c.globalAlpha = 1;
  c.filter = "none";
  c.setLineDash([]);
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (x: number) => Math.max(0, Math.min(1, x));

/** Parse #rgb / #rrggbb(aa) to [r,g,b]; null for anything else. */
function rgbOf(color: string): [number, number, number] | null {
  let hex = /^#([0-9a-f]{3,8})$/i.exec(color)?.[1];
  if (!hex) return null;
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
  if (hex.length !== 6 && hex.length !== 8) return null;
  const n = parseInt(hex.slice(0, 6), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** Mix two brand colors (hex) and return a hex string; non-hex colors fall back to the nearer end. */
function mixer(a: string, b: string): (t: number) => string {
  const ra = rgbOf(a);
  const rb = rgbOf(b);
  if (!ra || !rb) return (t) => (t < 0.5 ? a : b);
  return (t) => {
    const k = clamp01(t);
    const r = Math.round(lerp(ra[0], rb[0], k));
    const g = Math.round(lerp(ra[1], rb[1], k));
    const bl = Math.round(lerp(ra[2], rb[2], k));
    return `#${((1 << 24) | (r << 16) | (g << 8) | bl).toString(16).slice(1)}`;
  };
}

/**
 * A field of stacked ridgelines (a pulse record seen in perspective). The rows
 * roll with seeded noise and wake from front to back; then the front ridge
 * dips, lifts into one sharp peak with overshoot, and the user's number rides
 * up and lands on top. The landing sends a ring of light and lift through the
 * whole field, front to back, and the peak keeps a slow heartbeat.
 */
export const Component: React.FC<Props> = ({
  value,
  decimals,
  separators,
  prefix,
  suffix,
  label,
  color,
  accent,
  accent2,
  background,
  fontFamily,
  labelFontFamily,
  rows,
  seed,
  grain,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit, aspect } = useLayout();
  const family = brandFontStack(fontFamily);
  const labelFamily = brandFontStack(labelFontFamily);
  const finalText = format(value, decimals, separators, prefix, suffix);
  const transparent = background === "transparent";
  const dark = transparent ? luminance(color) > 0.45 : luminance(background) < 0.4;
  const hasLabel = label.trim().length > 0;

  // Hold the render until the faces are registered: the number is fitted from real glyph widths.
  const [handle] = useState(() => delayRender("ridgeline-waves: font"));
  const released = useRef(false);
  const [ready, setReady] = useState<string | null>(null);
  useLayoutEffect(() => {
    let on = true;
    waitForBrandFonts()
      .then(() => document.fonts.load(`600 100px ${family}`, finalText))
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
  }, [family, handle, finalText]);

  const measureRef = useRef<HTMLCanvasElement | null>(null);
  const geo = useMemo<Geo | null>(() => {
    if (!ready || typeof document === "undefined") return null;
    const m = ctx2d(sized(measureRef, 8, 8));
    m.font = `600 100px ${family}`;
    const w100 = Math.max(1, m.measureText(finalText).width);
    const portrait = aspect === "9:16";
    const wide = aspect === "16:9";
    const blockW = W * (portrait ? 0.86 : wide ? 0.7 : 0.84);
    const numSize = Math.min(H * (portrait ? 0.105 : wide ? 0.17 : 0.15), (blockW * 0.97 * 100) / w100);
    const labelMax = H * (portrait ? 0.033 : wide ? 0.034 : 0.036);
    const labelMin = H * (portrait ? 0.031 : 0.02);
    const labelSize = hasLabel
      ? fitFontSize({ chars: label.length, boxW: blockW, boxH: H * (portrait ? 0.08 : 0.09), lines: 2, charEm: 0.52, lineHeight: 1.25, max: labelMax, min: labelMin })
      : 0;
    const labelLines = hasLabel ? (label.length * labelSize * 0.52 > blockW * 0.96 ? 2 : 1) : 0;
    const blockH = numSize * LH + (hasLabel ? unit * 0.7 + labelLines * labelSize * 1.25 : 0);
    const numTop = H * (portrait ? 0.1 : wide ? 0.075 : 0.075);
    const tipY = numTop + blockH + unit * 4.6;
    const fieldTop = tipY + unit * (portrait ? 10 : 7.5);
    const fieldBot = H * (portrait ? 0.885 : wide ? 0.855 : 0.875);
    const span = fieldBot - fieldTop;
    const n = Math.max(16, Math.min(96, Math.round(rows * Math.pow(span / (unit * 41), 0.8))));
    const halfW = W * (portrait ? 0.44 : wide ? 0.42 : 0.43);
    const s = Math.max(100, Math.min(220, Math.round(halfW / 11) * 2));
    return {
      cx: W / 2,
      halfW,
      fieldTop,
      fieldBot,
      tipY,
      numTop,
      numSize,
      labelSize,
      blockW,
      n,
      s,
      gap: span / n,
      pw: portrait ? 0.1 : wide ? 0.062 : 0.08,
      sw: portrait ? 0.3 : wide ? 0.2 : 0.25,
    };
  }, [ready, family, finalText, W, H, unit, aspect, label, hasLabel, rows]);

  const noise = useMemo(() => simplex3(`ridgeline-${seed}`), [seed]);

  const ref = useRef<HTMLCanvasElement>(null);
  const layerRef = useRef<HTMLCanvasElement | null>(null);
  const bloomRef = useRef<HTMLCanvasElement | null>(null);
  const ghostRef = useRef<HTMLCanvasElement | null>(null);

  // Shared motion terms (also drive the DOM text).
  const anticip = frame > 58 && frame < LIFT + 4 ? 0.04 * Math.sin((Math.PI * (frame - 58)) / (LIFT + 4 - 58)) : 0;
  const liftAt = (t: number) => springSnap(t, fps, LIFT, PEAK_SPRING);
  let beat = 0;
  for (let b = PULSE; b <= frame + 8; b += PULSE_EVERY) beat += 0.03 * Math.exp(-Math.pow((frame - b) / 3.2, 2));
  const lift = liftAt(frame) - anticip + beat;

  useLayoutEffect(() => {
    const canvas = ref.current;
    if (!canvas || !geo) return;
    const f = frame;
    const { cx, halfW, fieldTop, fieldBot, tipY, n, s, gap, pw, sw } = geo;
    const span = fieldBot - fieldTop;
    const hpk = fieldBot - tipY;
    const mixRow = dark ? mixer(accent2, color) : mixer(color, color);
    const toAccent = (base: string) => mixer(base, accent);
    const hotMix = mixer(accent, color);

    // Pulse rings: the landing, a quick echo, then one heartbeat per second-and-a-bit.
    const rings: Ring[] = [];
    if (f >= LAND) rings.push({ t0: LAND, k: 1 });
    if (f >= LAND + 14) rings.push({ t0: LAND + 14, k: 0.45 });
    for (let b = PULSE; b <= f; b += PULSE_EVERY) rings.push({ t0: b, k: 0.55 });
    const ringState = rings
      .map((r) => {
        const age = f - r.t0;
        return { R: age * 0.024, fade: r.k * Math.exp(-age / 38) * clamp01(age / 3) };
      })
      .filter((r) => r.fade > 0.01);

    const ringAt = (u: number, w: number, sigma: number) => {
      if (ringState.length === 0) return 0;
      const d = Math.sqrt((u / 0.8) * (u / 0.8) + w * w);
      let sum = 0;
      for (const r of ringState) {
        const e = (d - r.R) / sigma;
        if (e > -3.5 && e < 3.5) sum += r.fade * Math.exp(-e * e);
      }
      return sum;
    };

    const calm = 1 - 0.18 * easeInOut((f - 98) / 40);
    const peakLight = easeOut((f - 80) / 30);
    const hero = easeInOut((f - 46) / 30);

    // ---- Layer: ridgelines with occlusion (full res) ------------------------
    const layer = sized(layerRef, W, H);
    const l = ctx2d(layer);
    reset(l);
    l.clearRect(0, 0, W, H);
    l.lineJoin = "round";
    l.lineCap = "round";

    const xs = new Float32Array(s + 1);
    const ys = new Float32Array(s + 1);
    let tipActual = fieldBot;

    for (let i = 0; i < n; i++) {
      const zz = n > 1 ? i / (n - 1) : 1;
      const front = i === n - 1;
      const j = n - 1 - i; // rows from the front
      const w = 1 - zz; // depth distance from the front
      const base = fieldTop + span * (0.35 * zz + 0.65 * Math.pow(zz, 1.7));
      const hw = halfW * (0.86 + 0.14 * zz);
      const appear = easeOut((f - w * 16) / 12);
      if (appear <= 0.001) continue;
      const energy = (0.28 + 0.72 * easeInOut((f - WAKE - w * 34) / 42)) * calm;
      const amp = gap * 6.2 * (0.45 + 0.55 * zz) * appear;
      const rc = zz * rows * 0.16 + 3.7;
      const echo = j > 0 && j < 8 ? hpk * 0.13 * Math.pow(0.66, j - 1) * (liftAt(f - 2.5 * j) - anticip) : 0;
      const pk = front ? hpk * lift : 0;

      for (let k = 0; k <= s; k++) {
        const u = -1 + (2 * k) / s;
        const au = Math.abs(u);
        const env = 0.05 + 0.95 * Math.pow(Math.cos(Math.min(1, au / 0.86) * Math.PI * 0.5), 2);
        const n1 = noise(u * 1.5 - f * 0.009, rc, f * 0.005);
        const n2 = noise(u * 5.2 - f * 0.022, rc * 2.3 + 50, f * 0.012);
        const v = Math.max(0, 0.38 + 0.66 * n1 + 0.3 * n2);
        let h = amp * env * energy * v * v * 1.3;
        if (pk !== 0) h += pk * (0.7 * Math.exp(-au / pw) + 0.3 * Math.exp(-(u / sw) * (u / sw))) + pk * 0.018 * n2 * Math.exp(-au / 0.15);
        if (echo !== 0) h += echo * (0.55 * Math.exp(-(u / (sw * 1.3)) * (u / (sw * 1.3))) + 0.45 * Math.exp(-au / (pw * 1.8)));
        h += amp * 1.05 * ringAt(u, w, 0.06) * env;
        xs[k] = cx + u * hw;
        ys[k] = base - h;
      }
      if (front) tipActual = ys[s / 2]!;

      // The rows the peak is about to hide, kept (half res) to ghost through its translucent body.
      const gw2 = Math.max(2, Math.round(W / 2));
      const gh2 = Math.max(2, Math.round(H / 2));
      if (front && hero > 0) {
        const gc = ctx2d(sized(ghostRef, gw2, gh2));
        reset(gc);
        gc.clearRect(0, 0, gw2, gh2);
        gc.drawImage(layer, 0, 0, gw2, gh2);
      }
      // Occlusion: erase everything behind this ridge, down to its baseline.
      const pad = Math.max(1, unit * 0.25);
      l.globalCompositeOperation = "destination-out";
      l.beginPath();
      l.moveTo(xs[0]!, base + pad);
      for (let k = 0; k <= s; k++) l.lineTo(xs[k]!, ys[k]!);
      l.lineTo(xs[s]!, base + pad);
      l.closePath();
      l.fillStyle = accent;
      l.fill();
      l.globalCompositeOperation = "source-over";

      if (front) {
        // The hero ridge: a lit mountain of brand color under the peak.
        const fg = l.createLinearGradient(0, tipActual, 0, base);
        fg.addColorStop(0, withAlpha(accent, (dark ? 0.5 : 0.32) * hero));
        fg.addColorStop(0.55, withAlpha(accent, (dark ? 0.16 : 0.1) * hero));
        fg.addColorStop(1, withAlpha(accent, 0));
        l.fillStyle = fg;
        l.fill();
        if (ghostRef.current) {
          l.save();
          l.clip();
          l.globalAlpha = (dark ? 0.3 : 0.24) * hero;
          l.drawImage(ghostRef.current, 0, 0, W, H);
          l.restore();
        }
      }

      // Stroke: brand ink with a moving ring of light and the glow of the peak.
      const baseCol = front ? toAccent(color)(hero) : mixRow(0.2 + 0.8 * zz);
      const tint = toAccent(baseCol);
      const baseA = front ? lerp(dark ? 0.85 : 0.7, 1, hero) : dark ? 0.2 + 0.62 * zz : 0.16 + 0.56 * zz;
      const g = l.createLinearGradient(xs[0]!, 0, xs[s]!, 0);
      for (let k = 0; k < STOPS; k++) {
        const gp = k / (STOPS - 1);
        const u = -1 + 2 * gp;
        const edge = easeInOut(gp / 0.08) * easeInOut((1 - gp) / 0.08);
        let L = ringAt(u, w, 0.075) * (0.6 + 0.4 * zz);
        L += peakLight * Math.exp(-(u / 0.2) * (u / 0.2)) * (0.15 + 0.85 * zz * zz) * 0.75;
        let col: string;
        if (dark) col = L < 0.6 ? tint(L / 0.6) : hotMix(Math.min(1, (L - 0.6) / 0.8) * 0.65);
        else col = tint(Math.min(1, L * 1.4));
        const a = Math.min(1, baseA * appear + L * (dark ? 0.75 : 0.55)) * edge;
        g.addColorStop(gp, withAlpha(col, a));
      }
      l.strokeStyle = g;
      l.lineWidth = front ? unit * lerp(0.22, 0.38, hero) : Math.max(0.8, unit * (0.08 + 0.12 * zz));
      l.beginPath();
      l.moveTo(xs[0]!, ys[0]!);
      for (let k = 1; k <= s; k++) l.lineTo(xs[k]!, ys[k]!);
      l.stroke();
      if (front && dark && hero > 0) {
        // Hot core: the hero line reads as light, not paint.
        const cg = l.createLinearGradient(xs[0]!, 0, xs[s]!, 0);
        cg.addColorStop(0, withAlpha(color, 0));
        cg.addColorStop(0.3, withAlpha(color, 0.12 * hero));
        cg.addColorStop(0.5, withAlpha(color, 0.75 * hero));
        cg.addColorStop(0.7, withAlpha(color, 0.12 * hero));
        cg.addColorStop(1, withAlpha(color, 0));
        l.strokeStyle = cg;
        l.lineWidth = unit * 0.12;
        l.stroke();
      }
    }

    // Peak marker: the dot lands on the tip with a shock ring, then breathes with the pulse.
    const pop = springSnap(f, fps, LAND - 6, DOT_SPRING);
    const dotR = unit * 1.05;
    if (pop > 0.001) {
      const dx = cx;
      const dy = tipActual;
      for (const r of ringState) {
        const p = clamp01(r.R / 0.9);
        if (p <= 0 || p >= 1) continue;
        l.lineWidth = Math.max(1, unit * 0.2 * (1 - p));
        l.strokeStyle = withAlpha(accent, 0.75 * r.fade * Math.pow(1 - p, 1.4));
        l.beginPath();
        l.arc(dx, dy, dotR * (1.3 + 7 * expoOut(p)), 0, Math.PI * 2);
        l.stroke();
      }
      const halo = l.createRadialGradient(dx, dy, 0, dx, dy, dotR * 6);
      halo.addColorStop(0, withAlpha(accent, (dark ? 0.6 : 0.3) * Math.min(1, pop)));
      halo.addColorStop(1, withAlpha(accent, 0));
      l.fillStyle = halo;
      l.fillRect(dx - dotR * 6, dy - dotR * 6, dotR * 12, dotR * 12);
      l.fillStyle = accent;
      l.beginPath();
      l.arc(dx, dy, dotR * pop, 0, Math.PI * 2);
      l.fill();
      l.fillStyle = dark || transparent ? color : background;
      l.beginPath();
      l.arc(dx, dy, dotR * 0.42 * pop, 0, Math.PI * 2);
      l.fill();
    }

    // ---- Composite -------------------------------------------------------------
    const ctx = ctx2d(canvas);
    reset(ctx);
    ctx.clearRect(0, 0, W, H);
    if (!transparent) {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, W, H);
    }
    // Light field: brand light pools behind the peak and swells with each pulse.
    const swell = ringState.reduce((acc, r) => acc + r.fade * Math.exp(-r.R * 2.2), 0);
    const glow = (0.3 + 0.7 * easeInOut((f - 50) / 50)) * (1 + 0.35 * swell);
    const gy = lerp(tipY, fieldBot, 0.62);
    const corner = Math.min(Math.hypot(cx, gy), Math.hypot(cx, H - gy));
    const gr = Math.min(corner * 0.94, Math.max(W, H) * 0.62);
    const pg = ctx.createRadialGradient(cx, gy, 0, cx, gy, gr);
    pg.addColorStop(0, withAlpha(accent, (dark ? 0.24 : 0.1) * glow));
    pg.addColorStop(0.45, withAlpha(accent2, (dark ? 0.08 : 0.05) * glow));
    pg.addColorStop(1, withAlpha(accent2, 0));
    ctx.fillStyle = pg;
    ctx.fillRect(0, 0, W, H);

    // Scale: ticks under the front ridge draw out from the centre (the field is a chart).
    const tickIn = easeInOut((f - 12) / 34);
    if (tickIn > 0) {
      const ty = fieldBot + unit * 3.4;
      const count = 30;
      ctx.lineWidth = Math.max(1, unit * 0.1);
      for (let k = 0; k <= count; k++) {
        const u = -1 + (2 * k) / count;
        if (Math.abs(u) > tickIn) continue;
        const major = k % 5 === 0;
        const x = Math.round(cx + u * halfW) + 0.5;
        ctx.strokeStyle = withAlpha(color, (major ? 0.34 : 0.18) * (1 - 0.5 * Math.abs(u)));
        ctx.beginPath();
        ctx.moveTo(x, ty);
        ctx.lineTo(x, ty + unit * (major ? 1.3 : 0.65));
        ctx.stroke();
      }
    }
    // Peak level guide: a dashed rule at the height of the number's tip.
    const guide = band(f, LAND, LAND + 16);
    if (guide > 0) {
      const gx = halfW * easeInOut((f - LAND) / 26);
      const lg = ctx.createLinearGradient(cx - gx, 0, cx + gx, 0);
      lg.addColorStop(0, withAlpha(color, 0));
      lg.addColorStop(0.5, withAlpha(color, (dark ? 0.2 : 0.24) * guide));
      lg.addColorStop(1, withAlpha(color, 0));
      ctx.strokeStyle = lg;
      ctx.lineWidth = Math.max(1, unit * 0.1);
      ctx.setLineDash([unit * 0.4, unit * 0.7]);
      const y = Math.round(tipY) + 0.5;
      ctx.beginPath();
      ctx.moveTo(cx - gx, y);
      ctx.lineTo(cx + gx, y);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    if (dark) {
      // Bloom from a quarter-res blurred copy of the ridges.
      const bw = Math.max(2, Math.round(W / 4));
      const bh = Math.max(2, Math.round(H / 4));
      const bloom = sized(bloomRef, bw, bh);
      const b = ctx2d(bloom);
      reset(b);
      b.clearRect(0, 0, bw, bh);
      b.filter = `blur(${Math.max(1, Math.round(unit * 0.5))}px)`;
      b.drawImage(layer, 0, 0, bw, bh);
      b.filter = "none";
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = transparent ? 0.5 : 0.85;
      ctx.drawImage(bloom, 0, 0, W, H);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    }
    ctx.drawImage(layer, 0, 0);

    if (!transparent) {
      // Vignette settles the edges into the brand background.
      const v = ctx.createRadialGradient(cx, H * 0.55, Math.min(W, H) * 0.3, cx, H * 0.55, Math.max(W, H) * 0.8);
      v.addColorStop(0, withAlpha(background, 0));
      v.addColorStop(1, withAlpha(background, 0.6));
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, W, H);
    }
  }, [geo, noise, frame, fps, W, H, unit, color, accent, accent2, background, dark, transparent, rows, lift, anticip]);

  // ---- Text ------------------------------------------------------------------
  const count = expoOut((frame - COUNT) / COUNT_LEN);
  const shown = frame >= COUNT + COUNT_LEN ? finalText : format(value * count, decimals, separators, prefix, suffix);
  const numIn = band(frame, COUNT, COUNT + 12);
  const numY = (1 - lift) * unit * 9;
  const labelIn = band(frame, LABEL, LABEL + 14);
  const labelY = rise(frame, fps, LABEL, unit * 1.8);

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <canvas ref={ref} width={W} height={H} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      {geo ? (
        <div
          style={{
            position: "absolute",
            top: geo.numTop,
            left: (W - geo.blockW) / 2,
            width: geo.blockW,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            data-21st-slot="value"
            style={{
              fontFamily: family,
              fontWeight: 600,
              fontSize: geo.numSize,
              lineHeight: LH,
              letterSpacing: "-0.03em",
              fontVariantNumeric: "tabular-nums",
              whiteSpace: "nowrap",
              color,
              opacity: numIn,
              transform: `translateY(${numY}px)`,
            }}
          >
            {shown}
          </div>
          {hasLabel ? (
            <div
              data-21st-slot="label"
              style={{
                marginTop: unit * 0.7,
                fontFamily: labelFamily,
                fontWeight: 500,
                fontSize: geo.labelSize,
                lineHeight: 1.25,
                letterSpacing: "0.005em",
                color,
                opacity: 0.74 * labelIn,
                transform: `translateY(${labelY}px)`,
                maxWidth: "100%",
                overflowWrap: "anywhere",
              }}
            >
              {label}
            </div>
          ) : null}
        </div>
      ) : null}
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.07 : 0.05, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
