// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef } from "react";
import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, easeOut, expoOut, luminance, ramp, springSnap, useLayout, withAlpha } from "../../../kit/index";
import type { schema } from "./polyrhythm-orbit-list.schema";

const TAU = Math.PI * 2;
const TOP = -Math.PI / 2;
/** Glow layer resolution relative to the frame: it is blurred, so half res is invisible. */
const GLOW_SCALE = 0.5;

// ---- The rhythm machine -------------------------------------------------
// Time runs on a warped clock `tau`. In tau, dot r turns LAPS[r] times every
// CYCLE frames, and all three sit at 12 o'clock when tau = T_ALIGN. Up to frame
// GLIDE the clock is linear (exact polyrhythm); after it a damped spring carries
// tau into T_ALIGN, so the dots decelerate together, overshoot and lock at the top.
const CYCLE = 160;
const T_ALIGN = 148;
const GLIDE = 128;
const LAPS = [5, 4, 3] as const; // inner, middle, outer
const RADII = [0.46, 0.73, 1] as const;
const ZETA_W = 0.085;
const W_D = 0.09;
const X0 = T_ALIGN - GLIDE;
const B0 = (ZETA_W * X0 - 1) / W_D;

function tauAt(f: number): number {
  if (f <= GLIDE) return f;
  const s = f - GLIDE;
  const x = Math.exp(-ZETA_W * s) * (X0 * Math.cos(W_D * s) + B0 * Math.sin(W_D * s));
  return Math.abs(x) < 0.003 ? T_ALIGN : T_ALIGN - x;
}

/** Frame at which the warped clock first reaches the alignment. */
const ALIGN_F = (() => {
  for (let f = GLIDE; f < GLIDE + 120; f += 0.02) if (tauAt(f) >= T_ALIGN) return f;
  return GLIDE + 22;
})();

type Hit = { f: number; ring: number };
/** Every 12 o'clock crossing before the glide, in frame order. */
const HITS: Hit[] = (() => {
  const out: Hit[] = [];
  LAPS.forEach((n, ring) => {
    for (let k = 1; k < n; k++) {
      const t = T_ALIGN - (k * CYCLE) / n;
      if (t > 4) out.push({ f: t, ring });
    }
  });
  return out.sort((a, b) => a.f - b.f);
})();

/** Connector between two steps, fading from one step's ring color into the next. */
function railPaint(from: string, to: string, a: number): string {
  return `linear-gradient(${withAlpha(from, a)}, ${withAlpha(to, a)})`;
}

const pulse = (frame: number, at: number, decay: number) => (frame < at ? 0 : Math.exp(-(frame - at) / decay));
const clamp01 = (x: number) => Math.max(0, Math.min(1, x));

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='7' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

type Geo = {
  cx: number;
  cy: number;
  R: number;
  /** List anchor: left edge (or center when `centered`) and vertical center. */
  list: { x: number; y: number; w: number; centered: boolean };
  fs: number;
  wrap: boolean;
  showNum: boolean;
  /** Label box width when wrapping in the side-by-side layouts. */
  labelMax?: number;
};

const PITCH = 1.72;
/** Step badge diameter in label ems: a numbered circle, the list reads as an ordered stepper. */
const BADGE = 0.9;

/**
 * Orbit and list placement per aspect. Landscape and square sit side by side and
 * the pair is centered as one group; portrait stacks the machine over the list.
 */
function geometry(width: number, height: number, aspect: string, longest: number, n: number): Geo {
  if (aspect === "9:16") {
    const R = width * 0.36;
    const w = width * 0.8;
    const min = height * 0.031;
    let fs = Math.min(height * 0.042, w / (longest * 0.6 + 1.6), (height * 0.3) / (n * PITCH));
    const wrap = fs < min;
    fs = Math.max(fs, min);
    return { cx: width * 0.5, cy: height * 0.315, R, list: { x: width * 0.5, y: height * 0.755, w, centered: true }, fs, wrap, showNum: false };
  }
  const square = aspect === "1:1";
  const g = sideBySide(width, height, square, square ? width * 0.24 : height * 0.355, longest, n);
  // Square with long steps: give the list room by shrinking the machine a little.
  return square && g.wrap ? sideBySide(width, height, square, width * 0.2, longest, n) : g;
}

function sideBySide(width: number, height: number, square: boolean, R: number, longest: number, n: number): Geo {
  const showNum = !square;
  const reach = R * 1.1;
  const gap = R * (square ? 0.3 : 0.42);
  const margin = width * (square ? 0.06 : 0.07);
  const avail = width - margin * 2 - reach * 2 - gap;
  const extra = 1.6; // numbered step badge + gap
  const cap = height * (square ? 0.052 : 0.058);
  let fs = Math.min(cap, avail / (longest * 0.6 + extra), (height * 0.72) / (n * PITCH));
  // Long steps: wrap onto two lines rather than shrinking into fine print.
  let wrap = false;
  let chars = longest;
  if (fs < height * 0.032) {
    wrap = true;
    chars = Math.ceil(longest * 0.6);
    fs = Math.min(cap, avail / (chars * 0.6 + extra), (height * 0.72) / (n * PITCH * 1.55));
  }
  fs = Math.max(height * 0.02, fs);
  // Estimated list width (marker, numerals, longest label) to center the whole group.
  const estW = fs * (BADGE + 0.5 + chars * 0.56);
  const left = Math.max(margin, (width - (reach * 2 + gap + Math.min(avail, estW))) / 2);
  const cx = left + reach;
  return { cx, cy: height * 0.5, R, list: { x: cx + reach + gap, y: height * 0.5, w: avail, centered: false }, fs, wrap, showNum, labelMax: wrap ? Math.min(avail, fs * chars * 0.62) : undefined };
}

/**
 * Three dots circle on three orbits at 5:4:3 speeds. Every time one crosses
 * 12 o'clock the ring rings, a ripple opens at the crossing and the next list
 * item flashes in. On the last beat the clock glides, all three dots lock into
 * a vertical line at the top and every item lights at once.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ items, logo, color, primary, secondary, background, fontFamily, monoFontFamily }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width, height, aspect } = useLayout();
  const crispRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLCanvasElement>(null);
  const scratch = useMemo(() => (typeof document === "undefined" ? null : document.createElement("canvas")), []);
  const heading = brandFontStack(fontFamily);
  const mono = brandFontStack(monoFontFamily);

  const transparent = background === "transparent";
  const dark = transparent ? luminance(color) > 0.4 : luminance(background) < 0.4;
  const ringColors = [primary, secondary, color];
  const longest = Math.max(6, ...items.map((t) => t.length));
  const geo = geometry(width, height, aspect, longest, items.length);
  const { cx, cy, R } = geo;
  const dotR = Math.max(4, Math.min(width, height) * 0.0125);
  const gw = Math.max(2, Math.round(width * GLOW_SCALE));
  const gh = Math.max(2, Math.round(height * GLOW_SCALE));
  const n = items.length;

  const tau = tauAt(frame);
  const tauVel = tauAt(frame + 0.5) - tauAt(frame - 0.5);
  const finalP = pulse(frame, ALIGN_F, 14);
  const hitPulse = HITS.reduce((s, h) => s + pulse(frame, h.f, 7), 0);

  useLayoutEffect(() => {
    const crisp = crispRef.current?.getContext("2d", { willReadFrequently: true });
    const glowCv = glowRef.current?.getContext("2d", { willReadFrequently: true });
    if (!crisp || !glowCv || !scratch) return;
    scratch.width = gw;
    scratch.height = gh;
    const glow = scratch.getContext("2d", { willReadFrequently: true });
    if (!glow) return;

    const base = Math.max(1, height * 0.0013);
    const ringR = RADII.map((k) => R * k);
    // On a light page an ink-colored bloom reads as smudge: keep ink glows faint there.
    const gk = (col: string) => (!dark && col === color ? 0.25 : 1);
    const angleOf = (r: number) => TOP + (TAU * LAPS[r]! * (tau - T_ALIGN)) / CYCLE;

    // Shared painter: draws onto the crisp canvas (1:1) and the glow scratch (scaled, fatter).
    type Painter = (ctx: CanvasRenderingContext2D, s: number, fat: number) => void;
    const both = (p: Painter) => {
      p(crisp, 1, 1);
      glow.save();
      glow.scale(GLOW_SCALE, GLOW_SCALE);
      p(glow, GLOW_SCALE, 2.6);
      glow.restore();
    };

    crisp.setTransform(1, 0, 0, 1, 0, 0);
    crisp.globalCompositeOperation = "source-over";
    crisp.clearRect(0, 0, width, height);
    glow.setTransform(1, 0, 0, 1, 0, 0);
    glow.clearRect(0, 0, gw, gh);

    // Backdrop lift behind the machine (never full-frame when transparent).
    if (!transparent) {
      const lift = crisp.createRadialGradient(cx, cy, 0, cx, cy, R * 1.9);
      lift.addColorStop(0, withAlpha(primary, dark ? 0.1 : 0.07));
      lift.addColorStop(0.55, withAlpha(secondary, dark ? 0.035 : 0.025));
      lift.addColorStop(1, withAlpha(secondary, 0));
      crisp.fillStyle = lift;
      crisp.fillRect(0, 0, width, height);
    }

    // ---- Orbit lines, drawn on clockwise from 12 o'clock.
    const lineA = dark ? 0.17 : 0.2;
    for (let r = 0; r < 3; r++) {
      const d = easeInOut(ramp(frame, [r * 3, 20 + r * 3], [0, 1]));
      if (d <= 0) continue;
      crisp.strokeStyle = withAlpha(color, lineA);
      crisp.lineWidth = base;
      crisp.beginPath();
      crisp.arc(cx, cy, ringR[r]!, TOP, TOP + TAU * d);
      crisp.stroke();
    }

    // ---- Dial ticks outside the outer orbit.
    const tickD = easeInOut(ramp(frame, [6, 30], [0, 1]));
    const TICKS = 72;
    crisp.lineCap = "round";
    for (let i = 0; i < TICKS; i++) {
      if (i / TICKS > tickD) break;
      const a = TOP + (i / TICKS) * TAU;
      const major = i % 6 === 0;
      const r0 = R * 1.045;
      const r1 = R * (major ? 1.085 : 1.065);
      crisp.strokeStyle = withAlpha(color, major ? lineA * 0.95 : lineA * 0.55);
      crisp.lineWidth = base;
      crisp.beginPath();
      crisp.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0);
      crisp.lineTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
      crisp.stroke();
    }

    // ---- Trigger: hairline through 12 o'clock and a notch above the dial.
    const trig = easeOut(ramp(frame, [10, 26], [0, 1]));
    const lastHit = [...HITS].reverse().find((h) => h.f <= frame);
    const notchFlash = HITS.reduce((s, h) => s + pulse(frame, h.f, 6), 0) + finalP * 1.5;
    const notchColor = frame >= ALIGN_F ? color : lastHit ? ringColors[lastHit.ring]! : color;
    if (trig > 0) {
      const g = crisp.createLinearGradient(0, cy - ringR[0]!, 0, cy - R * 1.13);
      g.addColorStop(0, withAlpha(color, 0));
      g.addColorStop(1, withAlpha(color, lineA * 1.1 * trig));
      crisp.strokeStyle = g;
      crisp.lineWidth = base;
      crisp.beginPath();
      crisp.moveTo(cx, cy - ringR[0]! * 0.8);
      crisp.lineTo(cx, cy - R * 1.12);
      crisp.stroke();
    }
    both((ctx, _s, fat) => {
      if (trig <= 0) return;
      const ny = cy - R * 1.12;
      const nw = dotR * 0.75 * (1 + 0.25 * Math.min(1, notchFlash));
      ctx.fillStyle = fat > 1 ? withAlpha(notchColor, Math.min(1, notchFlash) * 0.9 * gk(notchColor)) : withAlpha(Math.min(1, notchFlash) > 0.05 ? notchColor : color, (0.55 + 0.45 * Math.min(1, notchFlash)) * trig);
      ctx.beginPath();
      ctx.moveTo(cx - nw, ny - nw * 1.5);
      ctx.lineTo(cx + nw, ny - nw * 1.5);
      ctx.lineTo(cx, ny);
      ctx.closePath();
      ctx.fill();
    });

    // ---- Ring pings: two light fronts run from 12 o'clock around the ring and meet at 6.
    const ping = (r: number, at: number, strength: number) => {
      const p = (frame - at) / 30;
      if (p < 0 || p >= 1) return;
      const phi = Math.PI * expoOut(p);
      const I = Math.pow(1 - p, 1.6) * strength;
      const col = ringColors[r]!;
      const SEG = 36;
      both((ctx, _s, fat) => {
        ctx.lineCap = "round";
        ctx.lineWidth = base * (fat > 1 ? 7 : 1.8);
        for (const dir of [1, -1]) {
          for (let i = 0; i < SEG; i++) {
            const u0 = i / SEG;
            const u1 = (i + 1) / SEG;
            const a = Math.pow(u1, 2.2) * I * (fat > 1 ? 0.8 * gk(col) : 0.95);
            if (a < 0.01) continue;
            ctx.strokeStyle = withAlpha(col, a);
            ctx.beginPath();
            const a0 = TOP + dir * phi * u0;
            const a1 = TOP + dir * phi * u1;
            ctx.arc(cx, cy, ringR[r]!, Math.min(a0, a1), Math.max(a0, a1));
            ctx.stroke();
          }
        }
      });
    };
    // Light pools: every hit floods its crossing with the ring's color for a moment.
    const pool = (x: number, y: number, at: number, col: string, size: number, strength: number) => {
      // An ink-colored pool on a light page reads as smudge, not light.
      const p = pulse(frame, at, 11) * strength * (!dark && col === color ? 0.25 : 1);
      if (p < 0.01) return;
      glow.save();
      glow.scale(GLOW_SCALE, GLOW_SCALE);
      const g = glow.createRadialGradient(x, y, 0, x, y, size);
      g.addColorStop(0, withAlpha(col, (col === color ? 0.22 : 0.36) * p));
      g.addColorStop(1, withAlpha(col, 0));
      glow.fillStyle = g;
      glow.fillRect(x - size, y - size, size * 2, size * 2);
      glow.restore();
    };
    for (const h of HITS) pool(cx, cy - ringR[h.ring]!, h.f, ringColors[h.ring]!, R * 0.45, 1);
    for (let r = 0; r < 3; r++) pool(cx, cy - ringR[r]!, ALIGN_F, ringColors[r]!, R * 0.5, 1);
    for (const h of HITS) ping(h.ring, h.f, 1);
    for (let r = 0; r < 3; r++) ping(r, ALIGN_F + r * 1.5, 1.15);

    // ---- Ripples at the crossing point.
    const ripple = (x: number, y: number, at: number, col: string, size: number, len: number, strength: number) => {
      for (const [delay, k] of [[0, 1], [4, 0.4]] as const) {
        const p = (frame - at - delay) / len;
        if (p < 0 || p >= 1) continue;
        const rr = dotR * 1.3 + size * expoOut(p);
        const a = Math.pow(1 - p, 2) * 0.8 * k * strength;
        both((ctx, _s, fat) => {
          ctx.strokeStyle = withAlpha(col, a * (fat > 1 ? 0.7 * gk(col) : 1));
          ctx.lineWidth = base * (fat > 1 ? 5 : 1.4);
          ctx.beginPath();
          ctx.arc(x, y, rr, 0, TAU);
          ctx.stroke();
        });
      }
    };
    for (const h of HITS) ripple(cx, cy - ringR[h.ring]!, h.f, ringColors[h.ring]!, R * 0.13, 22, 1);
    // Final shockwave from the hub out past the dial.
    {
      const p = (frame - ALIGN_F) / 48;
      if (p >= 0 && p < 1) {
        const rr = R * (0.15 + 1.25 * expoOut(p));
        const a = Math.pow(1 - p, 2.2) * 0.7;
        both((ctx, _s, fat) => {
          ctx.strokeStyle = withAlpha(color, a * (fat > 1 ? 0.5 * gk(color) : dark ? 0.8 : 0.45));
          ctx.lineWidth = base * (fat > 1 ? 8 : 1.6);
          ctx.beginPath();
          ctx.arc(cx, cy, rr, 0, TAU);
          ctx.stroke();
        });
      }
      for (let r = 0; r < 3; r++) ripple(cx, cy - ringR[r]!, ALIGN_F, ringColors[r]!, R * 0.32, 40, 1.2);
    }

    // ---- Alignment beam: once the dots lock, a line of light joins them.
    {
      const grow = easeOut(ramp(frame, [ALIGN_F - 2, ALIGN_F + 8], [0, 1]));
      if (grow > 0) {
        const rest = 0.55 + 0.45 * finalP;
        const y0 = cy - ringR[0]!;
        const y1 = cy - ringR[0]! - (ringR[2]! - ringR[0]!) * grow;
        both((ctx, _s, fat) => {
          const g = ctx.createLinearGradient(0, cy - ringR[0]!, 0, cy - ringR[2]!);
          g.addColorStop(0, withAlpha(primary, rest));
          g.addColorStop(0.5, withAlpha(secondary, rest));
          g.addColorStop(1, withAlpha(color, rest));
          ctx.strokeStyle = g;
          ctx.lineCap = "round";
          ctx.lineWidth = base * (fat > 1 ? 9 : 2);
          ctx.beginPath();
          ctx.moveTo(cx, y0);
          ctx.lineTo(cx, y1);
          ctx.stroke();
        });
      }
    }

    // ---- Trails and dots.
    const dotIn = (r: number) => springSnap(frame, fps, 4 + r * 3, { damping: 13, stiffness: 160, mass: 0.7 });
    for (let r = 0; r < 3; r++) {
      const vis = dotIn(r);
      if (vis <= 0.001) continue;
      const col = ringColors[r]!;
      const rr = ringR[r]!;
      const theta = angleOf(r);
      const omega = (TAU * LAPS[r]! * tauVel) / CYCLE; // rad per frame
      const span = Math.max(-1.5, Math.min(1.5, omega * 8)) * vis;
      // Hits on this ring make its dot flare.
      const flare = HITS.filter((h) => h.ring === r).reduce((s, h) => s + pulse(frame, h.f, 6), 0) + finalP;
      const tail = (ctx: CanvasRenderingContext2D, fat: number) => {
        if (Math.abs(span) < 0.02) return;
        const STEPS = 40;
        const hw0 = dotR * (fat > 1 ? 1.8 : 0.85);
        const pts: Array<[number, number]> = [];
        const inner: Array<[number, number]> = [];
        for (let i = 0; i <= STEPS; i++) {
          const u = i / STEPS;
          const a = theta - span * u;
          const hw = hw0 * Math.pow(1 - u, 1.3);
          pts.push([cx + Math.cos(a) * (rr + hw), cy + Math.sin(a) * (rr + hw)]);
          inner.push([cx + Math.cos(a) * (rr - hw), cy + Math.sin(a) * (rr - hw)]);
        }
        const start = span > 0 ? theta - span : theta;
        const g = ctx.createConicGradient(start, cx, cy);
        const k = Math.min(0.999, Math.abs(span) / TAU);
        const head = withAlpha(col, (fat > 1 ? 0.55 * gk(col) : 0.9) * vis);
        const end = withAlpha(col, 0);
        g.addColorStop(0, span > 0 ? end : head);
        g.addColorStop(k, span > 0 ? head : end);
        g.addColorStop(Math.min(1, k + 0.0005), end);
        g.addColorStop(1, end);
        ctx.fillStyle = g;
        ctx.beginPath();
        pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
        for (let i = inner.length - 1; i >= 0; i--) ctx.lineTo(inner[i]![0], inner[i]![1]);
        ctx.closePath();
        ctx.fill();
      };
      const x = cx + Math.cos(theta) * rr;
      const y = cy + Math.sin(theta) * rr;
      both((ctx, _s, fat) => {
        tail(ctx, fat);
        const core = dotR * vis * (1 + 0.35 * Math.min(1, flare));
        if (fat > 1) {
          ctx.fillStyle = withAlpha(col, Math.min(0.9, 0.35 + 0.5 * flare) * gk(col));
          ctx.beginPath();
          ctx.arc(x, y, core * (1.25 + 0.6 * Math.min(1, flare)), 0, TAU);
          ctx.fill();
          return;
        }
        // Thin halo ring around the dot.
        ctx.strokeStyle = withAlpha(col, 0.38 * vis);
        ctx.lineWidth = base;
        ctx.beginPath();
        ctx.arc(x, y, core * 1.9, 0, TAU);
        ctx.stroke();
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.arc(x, y, core, 0, TAU);
        ctx.fill();
        // Specular pinpoint keeps the dot reading as a light, on any brand.
        ctx.fillStyle = withAlpha(dark ? "#ffffff" : color, (dark ? 0.75 : 0.2) * Math.min(1, flare * 0.8 + 0.3));
        ctx.beginPath();
        ctx.arc(x, y, core * 0.38, 0, TAU);
        ctx.fill();
      });
    }

    // ---- Hub (abstract fallback when there is no logo).
    {
      const hubIn = springSnap(frame, fps, 2, { damping: 14, stiffness: 120, mass: 0.9 });
      const hubR = ringR[0]! * 0.42 * hubIn * (1 + 0.035 * Math.min(1.5, hitPulse) + 0.12 * finalP);
      if (hubR > 0.5) {
        crisp.strokeStyle = withAlpha(color, lineA * 1.2);
        crisp.lineWidth = base;
        crisp.beginPath();
        crisp.arc(cx, cy, hubR, 0, TAU);
        crisp.stroke();
        if (!logo) {
          const spin = tau * 0.012;
          both((ctx, _s, fat) => {
            const g = ctx.createConicGradient(spin + TOP, cx, cy);
            g.addColorStop(0, primary);
            g.addColorStop(0.5, secondary);
            g.addColorStop(1, primary);
            ctx.fillStyle = g;
            ctx.globalAlpha = fat > 1 ? 0.5 + 0.4 * finalP : 1;
            ctx.beginPath();
            ctx.arc(cx, cy, hubR * 0.66, 0, TAU);
            ctx.arc(cx, cy, hubR * 0.5, 0, TAU, true);
            ctx.fill("evenodd");
            ctx.globalAlpha = 1;
            if (fat > 1) return;
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(cx, cy, hubR * 0.13, 0, TAU);
            ctx.fill();
          });
        }
      }
    }

    // ---- Bloom: blur the scratch layer once onto the glow canvas.
    glowCv.setTransform(1, 0, 0, 1, 0, 0);
    glowCv.globalCompositeOperation = "source-over";
    glowCv.filter = "none";
    glowCv.clearRect(0, 0, gw, gh);
    glowCv.filter = `blur(${Math.max(1, Math.round(gh * 0.011))}px)`;
    glowCv.drawImage(scratch, 0, 0);
    glowCv.filter = `blur(${Math.max(1, Math.round(gh * 0.004))}px)`;
    glowCv.globalAlpha = 0.6;
    glowCv.drawImage(scratch, 0, 0);
    glowCv.globalAlpha = 1;
    glowCv.filter = "none";
  }, [frame, fps, tau, tauVel, finalP, hitPulse, width, height, gw, gh, cx, cy, R, dotR, color, primary, secondary, transparent, dark, logo, scratch]);

  // ---- List typography per aspect.
  const L = geo.list;
  const { fs, wrap, labelMax } = geo;
  const pitch = PITCH;
  const lineH = fs * 1.22;
  const rowGap = fs * (pitch - 1.22);
  const m = fs * BADGE;
  const mt = (lineH - m) / 2;
  const numFs = m * 0.46;
  const border = Math.max(1, height * 0.0012);
  const rail = border * 2;
  const railGap = fs * 0.1;

  // Which hit lights which item: hit k -> item k mod n. The final beat lights them all.
  const rows = items.map((label, j) => {
    const mine = HITS.map((h, k) => ({ ...h, k })).filter((h) => h.k % n === j);
    const reveal = mine[0]?.f ?? ALIGN_F;
    const past = mine.filter((h) => h.f <= frame);
    const ringNow = past.length ? past[past.length - 1]!.ring : (mine[0]?.ring ?? j % 3);
    const fin = pulse(frame, ALIGN_F + j * 1.5, 16);
    const flash = Math.min(1, mine.reduce((s, h) => s + pulse(frame, h.f, 9), 0) + fin);
    const lit = ramp(frame, [ALIGN_F, ALIGN_F + 12 + j * 1.5], [0, 1]);
    const e = springSnap(frame, fps, reveal - 1, { damping: 13, stiffness: 180, mass: 0.7 });
    const next = j < n - 1 ? (HITS[j + 1]?.f ?? ALIGN_F) : null;
    const railE = next == null ? 0 : easeOut(ramp(frame, [next - 6, next + 2], [0, 1]));
    return { label, j, reveal, ring: ringNow, flash, lit, e, railE };
  });

  const blurIn = (e: number) => Math.max(0, 1 - e) * fs * 0.18;

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background, overflow: "hidden" }}>
      <canvas
        ref={glowRef}
        width={gw}
        height={gh}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", mixBlendMode: dark && !transparent ? "screen" : "normal", opacity: dark ? 0.95 : 0.55 }}
      />
      <canvas ref={crispRef} width={width} height={height} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />

      {logo ? (
        (() => {
          const hubIn = springSnap(frame, fps, 2, { damping: 14, stiffness: 120, mass: 0.9 });
          const s = hubIn * (1 + 0.035 * Math.min(1.5, hitPulse) + 0.12 * finalP);
          const box = R * RADII[0] * 0.42 * 2 * 0.62;
          return (
            <div
              data-21st-slot="logo"
              style={{ position: "absolute", left: cx - box / 2, top: cy - box / 2, width: box, height: box, display: "flex", alignItems: "center", justifyContent: "center", transform: `scale(${s})`, opacity: Math.min(1, hubIn * 1.4) }}
            >
              <Img src={logo} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
            </div>
          );
        })()
      ) : null}

      <div
        style={
          L.centered
            ? { position: "absolute", left: 0, right: 0, top: L.y, transform: "translateY(-50%)", display: "flex", justifyContent: "center" }
            : { position: "absolute", left: L.x, top: L.y, transform: "translateY(-50%)" }
        }
      >
      <div style={{ maxWidth: L.w, display: "flex", flexDirection: "column", gap: rowGap }}>
        {rows.map((row) => {
          const rc = ringColors[row.ring]!;
          const revealed = row.e > 0.001;
          const b = revealed ? Math.max(0.42 + 0.58 * row.flash, row.lit) : 0;
          const fill = Math.max(0.18 + 0.82 * row.flash, row.lit * 0.9);
          const glowA = Math.max(row.flash, row.lit * 0.35);
          const nudge = row.flash * fs * 0.1 * (frame >= ALIGN_F ? 0.5 : 1);
          const blur = blurIn(row.e);
          return (
            <div
              key={row.j}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "flex-start",
                gap: fs * 0.5,
                opacity: Math.min(1, row.e * 1.3),
                transform: `translateX(${(1 - row.e) * -fs * 0.7}px)`,
                filter: blur > 0.05 ? `blur(${blur}px)` : undefined,
              }}
            >
              {row.j < n - 1 ? (
                <div
                  style={{
                    position: "absolute",
                    left: m / 2 - rail / 2,
                    top: mt + m + railGap,
                    width: rail,
                    height: `calc(100% + ${rowGap - m - railGap * 2}px)`,
                    borderRadius: rail,
                    background: railPaint(rc, ringColors[rows[row.j + 1]!.ring]!, 0.3 + 0.55 * Math.max(row.lit, row.flash * 0.6)),
                    transformOrigin: "top",
                    transform: `scaleY(${row.railE})`,
                  }}
                />
              ) : null}
              <div
                style={{
                  position: "relative",
                  flex: "none",
                  width: m,
                  height: m,
                  marginTop: mt,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: `${border * 1.4}px solid ${withAlpha(rc, 0.45 + 0.55 * fill)}`,
                    background: withAlpha(rc, 0.08 + 0.2 * fill),
                    boxShadow: glowA > 0.02 ? `0 0 ${fs * 0.55}px ${withAlpha(rc, 0.6 * glowA)}` : undefined,
                    transform: `scale(${1 + 0.18 * row.flash})`,
                  }}
                />
                <span style={{ position: "relative", fontFamily: mono, fontWeight: 600, fontSize: numFs, lineHeight: 1.2, color: withAlpha(color, 0.45 + 0.55 * b), fontVariantNumeric: "tabular-nums" }}>
                  {row.j + 1}
                </span>
              </div>
              <span
                data-21st-slot="items"
                style={{
                  fontFamily: heading,
                  fontWeight: 500,
                  fontSize: fs,
                  lineHeight: `${lineH}px`,
                  letterSpacing: "-0.02em",
                  color: withAlpha(color, b),
                  whiteSpace: wrap ? "normal" : "nowrap",
                  maxWidth: labelMax,
                  minWidth: 0,
                  overflowWrap: "anywhere",
                  transform: `translateX(${nudge}px)`,
                  textShadow: row.flash > 0.05 && dark ? `0 0 ${fs * 0.5}px ${withAlpha(rc, 0.45 * row.flash)}` : undefined,
                }}
              >
                {row.label}
              </span>
            </div>
          );
        })}
      </div>
      </div>

      {!transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.05 : 0.04, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
