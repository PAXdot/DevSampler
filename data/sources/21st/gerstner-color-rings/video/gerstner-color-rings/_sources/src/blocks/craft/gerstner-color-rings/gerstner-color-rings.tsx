// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef } from "react";
import { AbsoluteFill, Img, random, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, brandFontStack, easeInOut, easeOut, fitFontSize, ramp, springSnap, useLayout, withAlpha } from "../../../kit/index";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./gerstner-color-rings.schema";

const TAU = Math.PI * 2;
/** First ring (the outermost) starts its last three ticks here; the innermost one last. */
const CLICK0 = 57;
const CLICK_SPREAD = 40;
const TICK_GAP = 6;
const TICK_LEN = 4;
/** Innermost ring lands: the wheel is whole. */
const LOCK = CLICK0 + CLICK_SPREAD + 3 + TICK_GAP * 2 + TICK_LEN;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='7' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")";

type RGB = [number, number, number];
const ZERO: RGB = [0, 0, 0];
const FULL: RGB = [255, 255, 255];

function rgbOf(color: string, fallback: RGB): RGB {
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
function lum([r, g, b]: RGB): number {
  const ch = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * ch(r) + 0.7152 * ch(g) + 0.0722 * ch(b);
}
function mixRGB(a: RGB, b: RGB, t: number): RGB {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}
/** Perceptual (OKLab) mix, so two brand hues meet without a muddy gray in between. */
function toLab([r, g, b]: RGB): RGB {
  const lin = (v: number) => { const x = v / 255; return x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4); };
  const R = lin(r), G = lin(g), B = lin(b);
  const l = Math.cbrt(0.4122214708 * R + 0.5363325363 * G + 0.0514459929 * B);
  const m = Math.cbrt(0.2119034982 * R + 0.6806995451 * G + 0.1073969566 * B);
  const s = Math.cbrt(0.0883024619 * R + 0.2817188376 * G + 0.6299787005 * B);
  return [0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s, 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s, 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s];
}
function fromLab([L, A, Bb]: RGB): RGB {
  const l = Math.pow(L + 0.3963377774 * A + 0.2158037573 * Bb, 3);
  const m = Math.pow(L - 0.1055613458 * A - 0.0638541728 * Bb, 3);
  const s = Math.pow(L - 0.0894841775 * A - 1.291485548 * Bb, 3);
  const enc = (x: number) => 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(Math.max(0, x), 1 / 2.4) - 0.055);
  return [enc(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s), enc(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s), enc(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s)].map((v) => Math.max(0, Math.min(255, v))) as RGB;
}
function mixLab(a: RGB, b: RGB, t: number): RGB {
  return fromLab(mixRGB(toLab(a), toLab(b), t));
}
const rgba = (c: RGB, a: number) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${Math.max(0, Math.min(1, a)).toFixed(3)})`;
const hexOf = (c: RGB) => `#${c.map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0")).join("")}`;
const clamp01 = (x: number) => Math.max(0, Math.min(1, x));

/** The shared sample mark is neutral gray; with no logo given it is printed in the brand:
 * its light part takes the secondary, its dark part the primary. A user's logo keeps its colors. */
const SAMPLE_LIGHT = "%239AA0AA";
const SAMPLE_DARK = "%235E6470";
const brandSample = (light: RGB, dark: RGB) => SAMPLE_LOGO.replace(SAMPLE_LIGHT, `%23${hexOf(light).slice(1)}`).replace(SAMPLE_DARK, `%23${hexOf(dark).slice(1)}`);

/** Back-out ease: the detent overshoot of one mechanical step. */
function tickEase(x: number): number {
  const t = clamp01(x);
  const c1 = 1.9, c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

/** Ring rotation (radians) at frame f: a decelerating spin, a pause, then three clicked steps to zero. */
function ringAngle(f: number, i: number, n: number, seg: number): number {
  const order = n - 1 - i; // outer rings lock first
  const L = CLICK0 + (n > 1 ? (order / (n - 1)) * CLICK_SPREAD : 0);
  const dir = i % 2 === 0 ? 1 : -1;
  const D = TAU * (0.7 + 0.5 * random(`gerstner-ring-${i}`) + 0.35 * (1 - i / Math.max(1, n - 1)));
  let r: number;
  if (f < L) {
    const u = clamp01(f / L);
    r = 3 * seg + D * Math.pow(1 - u, 3);
  } else {
    let done = 0;
    for (let k = 0; k < 3; k++) done += tickEase((f - (L + 3 + k * TICK_GAP)) / TICK_LEN);
    r = (3 - done) * seg;
    if (f >= L + 3 + 2 * TICK_GAP + TICK_LEN) r = 0;
  }
  return dir * r;
}
function landFrame(i: number, n: number): number {
  const order = n - 1 - i;
  return CLICK0 + (n > 1 ? (order / (n - 1)) * CLICK_SPREAD : 0) + 3 + 2 * TICK_GAP + TICK_LEN * 0.55;
}

function annulus(c: CanvasRenderingContext2D, cx: number, cy: number, r0: number, r1: number) {
  c.beginPath();
  c.arc(cx, cy, r1, 0, TAU);
  c.moveTo(cx + r0, cy);
  c.arc(cx, cy, r0, 0, TAU, true);
  c.closePath();
}

/**
 * Karl Gerstner style color rings: the logo sits large on a clean center plate; concentric
 * rings cut into brand color steps spin around it independently, decelerate at their own
 * rates, click the last three steps into place from the outside in and lock into one stepped
 * color emblem framing the logo.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ logo, caption, primary, secondary, color, background, rings, steps, grain, fontFamily }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: w, height: h, aspect, portrait } = useLayout();
  const S = Math.min(w, h);
  const transparent = background === "transparent";
  const hasCaption = caption.trim().length > 0;
  const n = rings;
  const K = steps;
  const seg = TAU / K;

  // ---------- palette ----------
  const pal = useMemo(() => {
    const T = rgbOf(color, [235, 235, 235]);
    const P = rgbOf(primary, [60, 200, 160]);
    const Q = rgbOf(secondary, [120, 200, 255]);
    const dark = transparent ? lum(T) > 0.4 : lum(rgbOf(background, ZERO)) < 0.4;
    const B = transparent ? (dark ? mixRGB(P, ZERO, 0.88) : mixRGB(P, FULL, 0.92)) : rgbOf(background, dark ? ZERO : FULL);
    const hi = dark ? mixRGB(T, FULL, 0.15) : mixRGB(B, FULL, 0.4);
    const lo = dark ? mixRGB(B, ZERO, 0.45) : mixRGB(T, B, 0.25);
    // Cyclic wheel: primary at twelve o'clock, a light step, secondary opposite, a deep step.
    const anchors: RGB[] = [P, mixLab(mixLab(P, Q, 0.5), hi, dark ? 0.5 : 0.4), Q, mixLab(mixLab(Q, P, 0.5), lo, dark ? 0.6 : 0.34)];
    const wheel = (t: number): RGB => {
      const x = (((t % 1) + 1) % 1) * 4;
      const k = Math.floor(x);
      return mixLab(anchors[k % 4]!, anchors[(k + 1) % 4]!, x - k);
    };
    // Ring tones: the inner ring is the pure wheel, outer rings step toward the backdrop.
    const cols: RGB[][] = [];
    for (let i = 0; i < n; i++) {
      const tone = n > 1 ? i / (n - 1) : 0;
      const row: RGB[] = [];
      // One step of twist per ring: the locked wheel reads as a stepped spiral, Gerstner's color sound.
      for (let j = 0; j < K; j++) row.push(mixLab(wheel((j + i) / K), B, 0.02 + (dark ? 0.46 : 0.24) * Math.pow(tone, 1.2)));
      cols.push(row);
    }
    const full = cols.map((row) => row.map((c) => rgba(c, 1)));
    const none = cols.map((row) => row.map((c) => rgba(c, 0)));
    // The center plate: a clean enamel disc, lifted off a dark backdrop or near white on a light one.
    const plate = dark ? mixRGB(B, hi, 0.08) : mixRGB(B, FULL, 0.78);
    return { dark, B, hi, lo, cols, full, none, P, Q, plate };
  }, [primary, secondary, color, background, transparent, n, K]);

  // ---------- layout ----------
  let cx = w / 2, cy = h / 2, Ro: number;
  if (aspect === "16:9") {
    Ro = 0.42 * h;
    cx = hasCaption ? w * 0.34 : w / 2;
  } else if (aspect === "1:1") {
    Ro = hasCaption ? 0.33 * S : 0.4 * S;
    cy = hasCaption ? h * 0.41 : h / 2;
  } else {
    Ro = 0.45 * w;
    cy = hasCaption ? h * 0.41 : h * 0.47;
  }
  // The plate (and the logo on it) is the hero; the rings are its frame.
  const rIn = Ro * 0.56;
  const ringGap = Math.max(1.5, S * 0.003);
  const th = (Ro - rIn - n * ringGap) / n;
  const seamPx = Math.max(1, S * 0.0012);

  const ref = useRef<HTMLCanvasElement>(null);
  const bufs = useRef<{ rc: HTMLCanvasElement; q: HTMLCanvasElement } | null>(null);

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    if (!bufs.current) bufs.current = { rc: document.createElement("canvas"), q: document.createElement("canvas") };
    const Bf = bufs.current;
    if (Bf.rc.width !== w || Bf.rc.height !== h) { Bf.rc.width = w; Bf.rc.height = h; }
    const qw = Math.max(2, Math.round(w / 4)), qh = Math.max(2, Math.round(h / 4));
    if (Bf.q.width !== qw || Bf.q.height !== qh) { Bf.q.width = qw; Bf.q.height = qh; }
    const rc = Bf.rc.getContext("2d", { willReadFrequently: true })!;
    const q = Bf.q.getContext("2d", { willReadFrequently: true })!;
    const { dark, hi, lo, cols, full, none } = pal;

    // ---------- rings into their own layer ----------
    rc.setTransform(1, 0, 0, 1, 0, 0);
    rc.globalCompositeOperation = "source-over";
    rc.globalAlpha = 1;
    rc.clearRect(0, 0, w, h);
    const geo: { r0: number; r1: number; a: number; open: number }[] = [];
    for (let i = 0; i < n; i++) {
      const open = Math.min(1.03, springSnap(frame, fps, 1 + i * 1.7, { damping: 13, stiffness: 150, mass: 0.7 }));
      if (open <= 0.002) { geo.push({ r0: 0, r1: 0, a: 0, open: 0 }); continue; }
      const base0 = rIn + ringGap + i * (th + ringGap);
      const rm = base0 + th / 2;
      const r0 = rm - (th / 2) * open, r1 = rm + (th / 2) * open;
      const a = ringAngle(frame, i, n, seg);
      const omega = Math.abs(a - ringAngle(frame - 0.5, i, n, seg)) * 2;
      geo.push({ r0, r1, a, open });
      const bw = omega * 0.5; // 180 degree shutter
      const gs = seamPx / rm;
      const aa = 1.1 / Math.max(1, r0);
      const tw = Math.min(Math.max(aa, bw), (seg - gs) * 0.45);
      const aMid = bw > gs ? clamp01(1 - gs / bw) : 0;
      const start = -Math.PI / 2 + a; // middle of step 0 sits at twelve o'clock when locked
      const g = rc.createConicGradient(start, cx, cy);
      const F = full[i]!, C = cols[i]!;
      // Once a ring has landed its seams close to a faint hairline: the locked emblem reads as
      // flat color steps, not as a grid.
      const seamA = 0.8 * easeOut(clamp01((frame - landFrame(i, n)) / 10));
      const Z = seamA > 0 ? C.map((c) => rgba(c, seamA)) : none[i]!;
      const put = (x: number, c: string) => g.addColorStop(Math.max(0, Math.min(1, x / TAU)), c);
      put(0, F[0]!);
      for (let j = 0; j < K; j++) {
        const Bd = (j + 0.5) * seg;
        const nx = (j + 1) % K;
        if (aMid <= 0) {
          put(Bd - gs / 2 - tw, F[j]!);
          put(Bd - gs / 2, Z[j]!);
          put(Bd + gs / 2, Z[nx]!);
          put(Bd + gs / 2 + tw, F[nx]!);
        } else {
          const half = (gs + tw) / 2;
          put(Bd - half, F[j]!);
          put(Bd, rgba(mixRGB(C[j]!, C[nx]!, 0.5), aMid));
          put(Bd + half, F[nx]!);
        }
      }
      put(TAU, F[0]!);
      rc.globalAlpha = clamp01(open * 2.5);
      rc.fillStyle = g;
      annulus(rc, cx, cy, r0, r1);
      rc.fill("evenodd");
    }
    rc.globalAlpha = 1;

    // Machined bevel per ring and one key light, only where the rings are.
    rc.globalCompositeOperation = "source-atop";
    for (let i = 0; i < n; i++) {
      const { r0, r1, open } = geo[i]!;
      if (open <= 0.002) continue;
      const bv = rc.createRadialGradient(cx, cy, r0, cx, cy, r1);
      bv.addColorStop(0, rgba(hi, dark ? 0.1 : 0.12));
      bv.addColorStop(0.4, rgba(hi, 0));
      bv.addColorStop(0.75, rgba(lo, 0));
      bv.addColorStop(1, rgba(lo, dark ? 0.22 : 0.08));
      rc.fillStyle = bv;
      annulus(rc, cx, cy, r0, r1);
      rc.fill("evenodd");
    }
    const key = rc.createRadialGradient(cx - Ro * 0.5, cy - Ro * 0.6, 0, cx - Ro * 0.5, cy - Ro * 0.6, Ro * 1.7);
    key.addColorStop(0, rgba(hi, dark ? 0.08 : 0.07));
    key.addColorStop(1, rgba(hi, 0));
    rc.fillStyle = key;
    rc.fillRect(cx - Ro, cy - Ro, Ro * 2, Ro * 2);
    const shade = rc.createRadialGradient(cx + Ro * 0.55, cy + Ro * 0.65, 0, cx + Ro * 0.55, cy + Ro * 0.65, Ro * 1.5);
    shade.addColorStop(0, rgba(lo, dark ? 0.24 : 0.06));
    shade.addColorStop(1, rgba(lo, 0));
    rc.fillStyle = shade;
    rc.fillRect(cx - Ro, cy - Ro, Ro * 2, Ro * 2);

    // Click flash as each ring lands its last step.
    for (let i = 0; i < n; i++) {
      const { r0, r1, open } = geo[i]!;
      const dt = frame - landFrame(i, n);
      if (open <= 0.002 || dt < 0 || dt > 16) continue;
      rc.fillStyle = rgba(hi, (dark ? 0.42 : 0.5) * Math.exp(-dt / 3.2));
      annulus(rc, cx, cy, r0, r1);
      rc.fill("evenodd");
    }

    // Shine: one band of light sweeps around the finished wheel.
    const st = (frame - LOCK) / 34;
    if (st > 0 && st < 1) {
      const sa = -Math.PI / 2 + TAU * easeInOut(st) - 0.35;
      const sg = rc.createConicGradient(sa, cx, cy);
      const amp = (dark ? 0.32 : 0.5) * Math.sin(Math.PI * clamp01(st * 1.15));
      sg.addColorStop(0, rgba(hi, 0));
      sg.addColorStop(0.055, rgba(hi, amp));
      sg.addColorStop(0.11, rgba(hi, 0));
      sg.addColorStop(1, rgba(hi, 0));
      rc.fillStyle = sg;
      rc.fillRect(cx - Ro, cy - Ro, Ro * 2, Ro * 2);
    }
    rc.globalCompositeOperation = "source-over";

    // ---------- compose ----------
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.filter = "none";
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, w, h);
    if (!transparent) {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, w, h);
      // Two faint construction circles, the printed guides the emblem was set on.
      const gIn = easeOut(frame / 30);
      ctx.strokeStyle = withAlpha(color, 0.05 * gIn);
      ctx.lineWidth = Math.max(1, S * 0.0012);
      ctx.beginPath();
      for (const k of [1.22, 1.55]) { ctx.moveTo(cx + Ro * k, cy); ctx.arc(cx, cy, Ro * k, 0, TAU); }
      ctx.stroke();
    }

    // Depth: a glow of the ring colors on dark brands, a soft cast shadow on light ones.
    q.setTransform(1, 0, 0, 1, 0, 0);
    q.clearRect(0, 0, qw, qh);
    q.filter = `blur(${Math.max(2, Math.round(S * 0.022 / 4))}px)`;
    if (dark) {
      q.drawImage(Bf.rc, 0, 0, qw, qh);
    } else {
      q.fillStyle = rgba(lo, 1);
      q.beginPath();
      q.arc(cx / 4, (cy + S * 0.018) / 4, (Ro * 1.0) / 4, 0, TAU);
      q.fill();
    }
    q.filter = "none";
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    const openAll = geo[n - 1]?.open ?? 0;
    if (dark) {
      ctx.globalCompositeOperation = transparent ? "source-over" : "lighter";
      ctx.globalAlpha = (transparent ? 0.3 : 0.42) * clamp01(openAll);
    } else {
      ctx.globalAlpha = 0.2 * clamp01(openAll);
    }
    ctx.drawImage(Bf.q, 0, 0, w, h);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";

    ctx.drawImage(Bf.rc, 0, 0);

    // The center plate the logo sits on: a clean enamel disc with a fine rim, it springs open first.
    const plateIn = springSnap(frame, fps, 0, { damping: 14, stiffness: 140, mass: 0.8 });
    const pr = (rIn - ringGap) * Math.max(0, plateIn);
    if (pr > 1) {
      // Flat printed disc (no gloss): Gerstner's color fields are flat.
      ctx.fillStyle = rgba(pal.plate, 1);
      ctx.beginPath();
      ctx.arc(cx, cy, pr, 0, TAU);
      ctx.fill();
      ctx.strokeStyle = withAlpha(color, (dark ? 0.3 : 0.22) * clamp01(plateIn));
      ctx.lineWidth = Math.max(1, S * 0.0018);
      ctx.beginPath();
      ctx.arc(cx, cy, pr - S * 0.001, 0, TAU);
      ctx.stroke();
      ctx.strokeStyle = withAlpha(color, (dark ? 0.1 : 0.08) * clamp01(plateIn));
      ctx.lineWidth = Math.max(1, S * 0.0012);
      ctx.beginPath();
      ctx.arc(cx, cy, pr * 0.93, 0, TAU);
      ctx.stroke();
    }

    // Lock: the aligned seams flash as straight radial lines.
    const lt = frame - LOCK + 2;
    if (lt >= 0 && lt < 24) {
      const fa = Math.exp(-lt / 6);
      ctx.strokeStyle = dark ? rgba(hi, 0.95 * fa) : withAlpha(color, 0.8 * fa);
      ctx.lineWidth = Math.max(1, seamPx * 1.1);
      ctx.beginPath();
      const reach = rIn + (Ro - rIn) * easeOut(lt / 7);
      for (let j = 0; j < K; j++) {
        const ang = -Math.PI / 2 + (j + 0.5) * seg;
        ctx.moveTo(cx + Math.cos(ang) * rIn, cy + Math.sin(ang) * rIn);
        ctx.lineTo(cx + Math.cos(ang) * reach, cy + Math.sin(ang) * reach);
      }
      ctx.stroke();
    }

    if (!transparent) {
      const v = ctx.createRadialGradient(cx, cy, Ro * 1.1, cx, cy, Math.hypot(w, h) * 0.62);
      v.addColorStop(0, rgba(lo, 0));
      v.addColorStop(1, rgba(lo, dark ? 0.5 : 0.08));
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, w, h);
    }
  }, [frame, fps, w, h, S, cx, cy, Ro, rIn, ringGap, th, seamPx, n, K, seg, pal, transparent, background, color]);

  // ---------- logo ----------
  const lIn = springSnap(frame, fps, 5, APPLE);
  const ld = frame - LOCK;
  const lockPop = ld >= 0 && ld < 40 ? 0.075 * Math.exp(-ld / 7) * Math.sin(ld * 0.42 + 0.9) / Math.sin(0.9) * (ld < 1 ? ld : 1) : 0;
  const lScale = (0.72 + 0.28 * lIn) * (1 + lockPop);
  const box = rIn * 1.6;
  const src = useMemo(() => logo || brandSample(pal.Q, pal.P), [logo, pal]);
  const lShadow = pal.dark
    ? `drop-shadow(0 0 ${Math.round(rIn * 0.08)}px ${withAlpha(primary, 0.3)})`
    : `drop-shadow(0 ${Math.round(rIn * 0.025)}px ${Math.round(rIn * 0.05)}px ${withAlpha(color, 0.14)})`;

  // ---------- caption ----------
  const font = brandFontStack(fontFamily);
  const side = aspect === "16:9";
  const colW = side ? w * 0.31 : w * (portrait ? 0.84 : 0.8);
  const capSize = hasCaption
    ? side
      ? Math.max(h * 0.03, fitFontSize({ chars: caption.length, boxW: colW, boxH: h * 0.42, lines: 3, charEm: 0.56, lineHeight: 1.15, max: h * 0.086 }))
      : Math.max(h * (portrait ? 0.031 : 0.021), fitFontSize({ chars: caption.length, boxW: colW, boxH: h * (portrait ? 0.16 : 0.1), lines: portrait ? 3 : 2, charEm: 0.56, lineHeight: 1.15, max: portrait ? h * 0.046 : h * 0.05 }))
    : 0;
  const capIn = easeOut(ramp(frame, [LOCK + 4, LOCK + 24], [0, 1]));
  const capText = hasCaption ? (
    <div
      data-21st-slot="caption"
      style={{
        fontFamily: font,
        fontWeight: 600,
        fontSize: capSize,
        lineHeight: 1.15,
        letterSpacing: side ? "-0.025em" : "-0.01em",
        color,
        textAlign: side ? "left" : "center",
        width: colW,
        whiteSpace: "normal",
        overflowWrap: "anywhere",
        opacity: capIn,
        transform: capIn < 1 ? `translateY(${((1 - capIn) * S * 0.03).toFixed(2)}px)` : undefined,
      }}
    >
      {caption}
    </div>
  ) : null;

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <canvas ref={ref} width={w} height={h} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      {frame >= 5 ? (
        <Img
          data-21st-slot="logo"
          src={src}
          style={{
            position: "absolute",
            left: cx - box / 2,
            top: cy - box / 2,
            width: box,
            height: box,
            objectFit: "contain",
            opacity: clamp01(lIn * 1.6),
            transform: Math.abs(lScale - 1) < 1e-4 ? undefined : `scale(${lScale.toFixed(4)})`,
            filter: lShadow,
          }}
        />
      ) : null}
      {hasCaption && side ? (
        <div style={{ position: "absolute", left: w * 0.615, top: 0, bottom: 0, width: colW, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {capText}
        </div>
      ) : null}
      {hasCaption && !side ? (
        <div style={{ position: "absolute", left: (w - colW) / 2, width: colW, top: cy + Ro + h * (portrait ? 0.045 : 0.04), display: "flex", flexDirection: "column", alignItems: "center" }}>
          {capText}
        </div>
      ) : null}
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: pal.dark ? 0.08 : 0.1, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
