// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useRef, useState } from "react";
import { AbsoluteFill, cancelRender, continueRender, delayRender, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, easeOut, expoOut, luminance, ramp, useLayout, waitForBrandFonts } from "../../../kit/index";
import type { Aspect } from "../../../kit/spec";
import { rng, simplex3 } from "../_lib/noise";
import type { schema } from "./planet-ring-headline.schema";

type Props = z.infer<typeof schema>;
type V3 = { x: number; y: number; z: number };
type RGB = [number, number, number];

/** Frame the ring lands on, headline front and centre. */
const LAND = 120;
/** Planet texture resolution relative to the frame (it is soft; the silhouette is clipped at full res). */
const TEX = 0.55;
const TAU = Math.PI * 2;
const DEG = Math.PI / 180;
/** No copy of the headline may start inside this front window once landed, so exactly one reads. */
const FRONT_WINDOW = 70 * DEG;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='7' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

const NOISE = simplex3("planet-ring-headline");

// ---------- color helpers (all colors derive from props) ----------
const LIGHT: RGB = [255, 255, 255];
const SHADE: RGB = [0, 0, 0];
function rgbOf(c: string, fallback: RGB): RGB {
  let hex = /^#([0-9a-f]{3,8})$/i.exec(c)?.[1];
  if (hex) {
    if (hex.length === 3 || hex.length === 4) hex = hex.slice(0, 3).split("").map((h) => h + h).join("");
    const n = parseInt(hex.slice(0, 6), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  const m = /^rgba?\(([^)]+)\)$/i.exec(c);
  if (m) {
    const p = m[1]!.split(/[ ,/]+/).filter(Boolean).map(Number);
    if (p.length >= 3 && p.slice(0, 3).every(Number.isFinite)) return [p[0]!, p[1]!, p[2]!];
  }
  return fallback;
}
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const css = (c: RGB, a = 1) => `rgb(${Math.round(c[0])} ${Math.round(c[1])} ${Math.round(c[2])} / ${Math.max(0, Math.min(1, a)).toFixed(3)})`;

function smooth(e0: number, e1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}
const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
const norm = (v: V3): V3 => {
  const l = Math.hypot(v.x, v.y, v.z) || 1;
  return { x: v.x / l, y: v.y / l, z: v.z / l };
};
const dot = (a: V3, b: V3) => a.x * b.x + a.y * b.y + a.z * b.z;

/** Back-ease with a small overshoot that lands exactly on 1 with zero velocity. */
function backOut(u: number, c1: number): number {
  const x = clamp01(u) - 1;
  return 1 + (c1 + 1) * x * x * x + c1 * x * x;
}

/** Density of the fine dust rings, 0..1 across the annulus (with a Cassini-like gap). */
function dust(u: number): number {
  if (u <= 0 || u >= 1) return 0;
  const edge = smooth(0, 0.1, u) * smooth(1, 0.86, u);
  const gap = smooth(0.02, 0.055, Math.abs(u - 0.63));
  const fine = 0.5 + 0.5 * Math.sin(u * 47 + Math.sin(u * 11) * 2.4);
  const coarse = 0.5 + 0.5 * Math.sin(u * 13 + 1.7);
  return edge * gap * (0.25 + 0.75 * fine * (0.4 + 0.6 * coarse));
}

// ---------- layout ----------
type Geo = {
  cx: number;
  cy: number;
  rp: number;
  R: number;
  tilt: number;
  roll: number;
  persp: number;
  fontMax: number;
  minFont: number;
  kickerY: number;
  kickerSize: number;
};

function geometry(aspect: Aspect, W: number, H: number): Geo {
  if (aspect === "9:16")
    return { cx: W * 0.5, cy: H * 0.47, rp: W * 0.145, R: W * 0.44, tilt: 30, roll: -8, persp: 3.0, fontMax: H * 0.085, minFont: H * 0.03 * 1.08, kickerY: H * 0.15, kickerSize: H * 0.033 };
  if (aspect === "1:1")
    return { cx: W * 0.5, cy: H * 0.5, rp: H * 0.105, R: W * 0.4, tilt: 24, roll: -7, persp: 3.2, fontMax: H * 0.145, minFont: H * 0.018 * 1.08, kickerY: H * 0.085, kickerSize: H * 0.028 };
  return { cx: W * 0.5, cy: H * 0.47, rp: H * 0.105, R: W * 0.36, tilt: 18, roll: -6, persp: 3.4, fontMax: H * 0.19, minFont: H * 0.018 * 1.08, kickerY: H * 0.075, kickerSize: H * 0.024 };
}

type Measure = { chars: string[]; centers: number[]; widths: number[]; total: number };

/** Glyph advances at 1px font size (kerning-aware prefix widths). */
function measure(text: string, font: (px: number) => string, track: number): Measure {
  const chars = Array.from(text);
  const c = document.createElement("canvas").getContext("2d");
  if (!c) return { chars, centers: chars.map((_, i) => i * 0.55 + 0.275), widths: chars.map(() => 0.55), total: chars.length * 0.55 };
  c.font = font(100);
  const centers: number[] = [];
  const widths: number[] = [];
  let prev = 0;
  for (let i = 0; i < chars.length; i++) {
    const w = c.measureText(chars.slice(0, i + 1).join("")).width / 100;
    const adv = w - prev;
    centers.push(prev + i * track + adv / 2);
    widths.push(adv);
    prev = w;
  }
  return { chars, centers, widths, total: prev + Math.max(0, chars.length - 1) * track };
}

type GlyphDraw = { key: string; ch: string; w: number; m: number[]; opacity: number; front: boolean; tag: boolean; color: string; blur: number; onCanvas: boolean };
type Mark = { kind: "dot" | "star"; phi: number; trail: number; alpha: number };

export const Component: React.FC<Props> = ({ text, kicker, color, primary, secondary, background, fontFamily, turns, grain }) => {
  const frame = useCurrentFrame();
  const { width: W, height: H, aspect } = useLayout();
  const transparent = background === "transparent";
  const family = brandFontStack(fontFamily);
  const weight = /Serif|Bebas|Caveat/.test(fontFamily) ? 400 : 600;
  const track = 0.02;
  const g = geometry(aspect, W, H);
  /** The readability gate's floor for this aspect. */
  const gateFont = aspect === "9:16" ? H * 0.03 : H * 0.018;

  // Hold the render until the face is registered: the ring is laid out from real glyph advances.
  const [handle] = useState(() => delayRender("planet-ring-headline: font"));
  const released = useRef(false);
  const [ready, setReady] = useState<string | null>(null);
  useLayoutEffect(() => {
    let on = true;
    waitForBrandFonts()
      .then(() => document.fonts.load(`${weight} 100px ${family}`, text))
      .then(() => document.fonts.ready)
      .then(() => {
        if (on) setReady(`${family}|${weight}`);
        if (!released.current) {
          released.current = true;
          continueRender(handle);
        }
      })
      .catch(cancelRender);
    return () => {
      on = false;
    };
  }, [family, weight, handle, text]);

  const fontStr = (px: number) => `${weight} ${px}px ${family}`;
  const m = ready ? measure(text.trim() || text, fontStr, track) : null;

  // ---------- palette ----------
  const T = rgbOf(color, LIGHT);
  const P = rgbOf(primary, [60, 90, 255]);
  const S = rgbOf(secondary, [0, 180, 130]);
  const dark = transparent ? luminance(color) > 0.45 : luminance(background) < 0.4;
  const BG = transparent ? (dark ? mix(P, SHADE, 0.92) : mix(P, LIGHT, 0.92)) : rgbOf(background, dark ? SHADE : LIGHT);

  // ---------- time ----------
  const zoom = 1 + 0.07 * (1 - easeInOut(frame / LAND));
  const rise = (1 - easeOut(frame / 44)) * H * 0.05;
  const cx = g.cx;
  const cy = g.cy + rise;
  const rp = g.rp * zoom;
  const ringK = 0.62 + 0.38 * expoOut((frame - 4) / 54);
  const R = g.R * zoom * ringK;
  const tiltDeg = 5 + (g.tilt - 5) * backOut((frame - 16) / 84, 1.1);
  const t = tiltDeg * DEG;
  const roll = (g.roll * (0.4 + 0.6 * easeInOut((frame - 10) / 90))) * DEG;
  const Pd = g.persp * g.R;
  // Remaining spin (radians): a fast whip that brakes, overshoots a hair and lands on 0.
  const spinAt = (f: number) => turns * TAU * (1 - backOut((f - 2) / (LAND - 2), 0.8));
  const spin = Math.abs(spinAt(frame)) < 1e-6 || frame >= LAND ? 0 : spinAt(frame);
  const omega = Math.abs(spinAt(frame + 0.5) - spinAt(frame - 0.5));

  // Ring basis in screen space (x right, y down, z toward the viewer).
  const cr = Math.cos(roll), sr = Math.sin(roll);
  const rot = (x: number, y: number, zz: number): V3 => ({ x: x * cr - y * sr, y: x * sr + y * cr, z: zz });
  const A = rot(1, 0, 0);
  const B = rot(0, Math.sin(t), Math.cos(t));
  const U = rot(0, -Math.cos(t), Math.sin(t));
  const proj = (p: V3) => {
    const s = Pd / (Pd - p.z);
    return { x: cx + p.x * s, y: cy + p.y * s, s };
  };
  const ringPoint = (r: number, phi: number, h: number): V3 => ({
    x: r * (Math.sin(phi) * A.x + Math.cos(phi) * B.x) + h * U.x,
    y: r * (Math.sin(phi) * A.y + Math.cos(phi) * B.y) + h * U.y,
    z: r * (Math.sin(phi) * A.z + Math.cos(phi) * B.z) + h * U.z,
  });
  /** Affine (CSS matrix order a,b,c,d,e,f) of the cylinder's tangent plane at a ring point. */
  const affine = (p: V3, right: V3, down: V3) => {
    const s = Pd / (Pd - p.z);
    const k = s / (Pd - p.z);
    const pr = proj(p);
    return [s * right.x + p.x * k * right.z, s * right.y + p.y * k * right.z, s * down.x + p.x * k * down.z, s * down.y + p.y * k * down.z, pr.x, pr.y];
  };

  // Light swings from behind the planet (a thin crescent) to the upper left front.
  const dawn = easeInOut(frame / 50);
  const L = norm({ x: 0.8 + (-0.55 - 0.8) * dawn, y: -0.3 + (-0.62 + 0.3) * dawn, z: -0.55 + (0.58 + 0.55) * dawn });
  const planetIn = easeOut(frame / 26);
  const rs = rp * Pd / Math.sqrt(Pd * Pd - rp * rp);
  const shadowOn = (p: V3) => {
    // Planet's shadow on ring parts: the ray toward the light passes through the planet.
    const b = dot(p, L);
    if (b >= 0) return 0;
    const d2 = dot(p, p) - b * b;
    return 1 - smooth(rp * 0.92, rp * 1.04, Math.sqrt(Math.max(0, d2)));
  };

  // ---------- typography on the ring ----------
  let font = g.minFont;
  let copies = 1;
  let spacing = TAU;
  const glyphs: GlyphDraw[] = [];
  const marks: Mark[] = [];
  const hairH: number[] = [];
  if (m) {
    const arcMax = 150 * DEG * g.R;
    font = Math.max(g.minFont, Math.min(g.fontMax, arcMax / Math.max(0.5, m.total)));
    const span = (m.total * font) / g.R;
    const minSpacing = Math.max(span + (2.2 * font) / g.R, FRONT_WINDOW + span / 2);
    copies = Math.max(1, Math.floor(TAU / minSpacing));
    spacing = TAU / copies;
    hairH.push(font * 0.62, -font * 0.66);
    const hl = dark ? mix(S, LIGHT, 0.45) : S;
    const ink = T;
    const echoes = (speedPx: number) => Math.max(1, Math.min(7, Math.round(speedPx / (font * 0.14))));
    const sheen = ramp(frame, [LAND + 4, LAND + 40], [-0.35, 1.35]);
    const sheenOn = frame > LAND + 4 && frame < LAND + 40;

    for (let c = 0; c < copies; c++) {
      for (let i = 0; i < m.chars.length; i++) {
        const ch = m.chars[i]!;
        if (!ch.trim()) continue;
        const a0 = ((m.centers[i]! - m.total / 2) * font) / g.R + c * spacing;
        // Glyphs materialise around the ring in reading order while it whips round.
        const order = (c + (m.centers[i]! / Math.max(0.01, m.total))) / copies;
        const appear = easeOut((frame - (8 + order * 34)) / 16);
        if (appear <= 0.001) continue;
        const sc = 0.55 + 0.45 * appear;
        const gw = m.widths[i]! * font;
        const speedPx = omega * R * 1.3;
        const n = echoes(speedPx);
        for (let e = 0; e < n; e++) {
          const phi = a0 + spin + (n > 1 ? (omega * 0.6 * e) / (n - 1) : 0);
          const p = ringPoint(R, phi, 0);
          const front = p.z > 0;
          const right: V3 = { x: (Math.cos(phi) * A.x - Math.sin(phi) * B.x) * sc * zoom * ringK, y: (Math.cos(phi) * A.y - Math.sin(phi) * B.y) * sc * zoom * ringK, z: (Math.cos(phi) * A.z - Math.sin(phi) * B.z) * sc * zoom * ringK };
          const down: V3 = { x: -U.x * sc * zoom * ringK, y: -U.y * sc * zoom * ringK, z: -U.z * sc * zoom * ringK };
          const facing = Math.cos(phi);
          const base = n === 1 ? 1 : e === 0 ? 0.62 : 0.5 * (1 - e / n);
          const depth = front ? 0.62 + 0.38 * smooth(0, 0.5, facing) : 0.2 + 0.22 * smooth(0, -0.7, facing);
          const shaded = 1 - 0.55 * shadowOn(p);
          let col: RGB = front ? ink : mix(ink, BG, 0.25);
          if (front && sheenOn && e === 0) {
            const x = Math.sin(phi) / Math.sin(75 * DEG);
            const k = Math.exp(-Math.pow((x - (sheen * 2 - 1)) / 0.22, 2));
            col = mix(col, hl, 0.85 * k);
          }
          col = mix(BG, col, shaded);
          const mtx = affine(p, right, down);
          // Tag every copy a viewer can read: front glyphs and the mirrored back ones beside the planet.
          const pc = proj(p);
          const hidden = !front && Math.hypot(pc.x - cx, pc.y - cy) < rs + font * 0.6 * pc.s;
          const tall = font * Math.hypot(mtx[2]!, mtx[3]!) >= gateFont * 1.04;
          const tag = frame >= LAND && e === 0 && n === 1 && appear > 0.99 && Math.abs(facing) > 0.3 && tall && !hidden && (front || shaded > 0.6);
          glyphs.push({
            key: `${c}-${i}-${e}`,
            ch,
            w: gw,
            m: mtx,
            opacity: base * depth * appear,
            front,
            tag,
            color: css(col),
            blur: (1 - appear) * font * 0.12,
            // Determinism: Chrome GPU-rasterizes big DOM glyphs (~150px+) as cached paths, and the
            // result depends on what earlier renders left in the GPU caches; skewed, half-transparent
            // or blurred glyphs (edge-on slivers, motion echoes, back copies) turn that into visible
            // per-render differences. Only slot-tagged glyphs stay real DOM text; every other copy is
            // painted on the CPU canvas, which rasterizes identically every time.
            // During rotation every glyph uses Canvas; real DOM text takes over
            // only after the ring settles, when its affine transform is fixed.
            onCanvas: !tag,
          });
        }
      }
      // Dot leaders and a star marker fill the arc between copies, so the ring reads as one band.
      const gapStart = (m.total * font) / 2 / g.R + (0.9 * font) / g.R;
      const gapEnd = spacing - (m.total * font) / 2 / g.R - (0.9 * font) / g.R;
      const mid = (gapStart + gapEnd) / 2;
      const step = (0.62 * font) / g.R;
      if (gapEnd - gapStart > step) {
        const count = Math.floor((gapEnd - gapStart) / step);
        const off = (gapEnd - gapStart - count * step) / 2;
        for (let k = 0; k <= count; k++) {
          const a = gapStart + off + k * step;
          if (Math.abs(a - mid) < (0.75 * font) / g.R) continue;
          const order = (c + (a + spacing / 2) / spacing) / copies;
          marks.push({ kind: "dot", phi: c * spacing + a + spin, trail: omega * 0.6, alpha: easeOut((frame - (8 + order * 34)) / 16) });
        }
        marks.push({ kind: "star", phi: c * spacing + mid + spin, trail: omega * 0.6, alpha: easeOut((frame - (8 + ((c + 0.5) / copies) * 34)) / 16) });
      }
    }
  }

  // ---------- canvases ----------
  const backRef = useRef<HTMLCanvasElement>(null);
  const frontRef = useRef<HTMLCanvasElement>(null);
  const texRef = useRef<HTMLCanvasElement | null>(null);
  const spriteRef = useRef<HTMLCanvasElement | null>(null);

  useLayoutEffect(() => {
    const back = backRef.current?.getContext("2d", { willReadFrequently: true });
    const fr = frontRef.current?.getContext("2d", { willReadFrequently: true });
    if (!back || !fr) return;
    for (const c of [back, fr]) {
      c.setTransform(1, 0, 0, 1, 0, 0);
      c.globalAlpha = 1;
      c.globalCompositeOperation = "source-over";
      c.filter = "none";
      c.clearRect(0, 0, W, H);
    }
    const u = Math.min(W, H) / 100;
    const atm = dark ? mix(S, LIGHT, 0.3) : mix(S, P, 0.25);

    // Backdrop: ambient glow behind the planet and a quiet star field.
    if (!transparent) {
      const rr = rng("stars");
      const count = Math.round((W * H) / 9000);
      for (let i = 0; i < count; i++) {
        const x = rr() * W, y = rr() * H, size = rr(), ph = rr() * TAU, sp = 0.04 + rr() * 0.08, hue = rr();
        const tw = 0.7 + 0.3 * Math.sin(frame * sp + ph);
        const a = (dark ? 0.18 + 0.6 * size * size : 0.08 + 0.22 * size * size) * tw * planetIn;
        back.fillStyle = css(hue < 0.18 ? S : T, a);
        back.beginPath();
        back.arc(x, y - rise * (0.3 + size), u * (0.07 + 0.16 * size * size), 0, TAU);
        back.fill();
      }
    }
    const glow = back.createRadialGradient(cx, cy, rs * 0.6, cx, cy, rs * 2.8);
    glow.addColorStop(0, css(P, (dark ? 0.26 : 0.14) * planetIn));
    glow.addColorStop(0.45, css(mix(P, S, 0.35), (dark ? 0.08 : 0.05) * planetIn));
    glow.addColorStop(1, css(P, 0));
    back.fillStyle = glow;
    back.fillRect(0, 0, W, H);
    // Atmosphere halo, brighter on the lit limb.
    const hx = cx + L.x * rs * 0.08, hy = cy + L.y * rs * 0.08;
    const halo = back.createRadialGradient(hx, hy, rs * 0.97, hx, hy, rs * 1.2);
    halo.addColorStop(0, css(atm, (dark ? 0.5 : 0.22) * planetIn * (0.4 + 0.6 * dawn)));
    halo.addColorStop(0.35, css(atm, (dark ? 0.16 : 0.08) * planetIn * (0.4 + 0.6 * dawn)));
    halo.addColorStop(1, css(atm, 0));
    back.fillStyle = halo;
    back.beginPath();
    back.arc(hx, hy, rs * 1.22, 0, TAU);
    back.fill();

    // Ring geometry shared by both layers: every segment goes behind or in front of the planet by its depth.
    const ringIn = smooth(4, 40, frame);
    const r0 = rp * 1.2;
    const r1 = Math.max(r0 + rp * 0.12, R * 0.84);
    const SEG = 120;
    const CHUNK = 10;
    /** One ring circle as a few batched strokes, only the segments on the requested side of the planet. */
    const arc = (ctx: CanvasRenderingContext2D, wantFront: boolean, r: number, h: number, rgb: RGB, alpha: number, lw: number) => {
      let open = false;
      let count = 0;
      let mid: V3 | null = null;
      let sAvg = 1;
      const flush = () => {
        if (open && mid) {
          ctx.strokeStyle = css(rgb, alpha * (1 - 0.8 * shadowOn(mid)) * (wantFront ? 1 : 0.75));
          ctx.lineWidth = lw * sAvg;
          ctx.stroke();
        }
        open = false;
        count = 0;
        mid = null;
      };
      let prev = ringPoint(r, 0, h);
      let qp = proj(prev);
      for (let k = 1; k <= SEG; k++) {
        const cur = ringPoint(r, (k / SEG) * TAU, h);
        const qc = proj(cur);
        const front = prev.z + cur.z > 0;
        if (front !== wantFront) {
          flush();
        } else {
          if (!open) {
            ctx.beginPath();
            ctx.moveTo(qp.x, qp.y);
            open = true;
          }
          ctx.lineTo(qc.x, qc.y);
          count++;
          if (count === Math.ceil(CHUNK / 2)) {
            mid = cur;
            sAvg = qc.s;
          }
          if (count >= CHUNK) {
            if (!mid) mid = cur;
            flush();
          }
        }
        prev = cur;
        qp = qc;
      }
      if (open && !mid) mid = prev;
      flush();
    };
    const strokeCircle = (r: number, h: number, rgb: RGB, alpha: number, lw: number) => arc(back, false, r, h, rgb, alpha, lw);
    if (ringIn > 0) {
      const LINES = 34;
      for (let j = 0; j < LINES; j++) {
        const uu = (j + 0.5) / LINES;
        const d = dust(uu);
        if (d < 0.02) continue;
        const rgb = j % 4 === 1 ? S : j % 4 === 3 ? mix(T, P, 0.4) : T;
        strokeCircle(r0 + (r1 - r0) * uu, 0, rgb, (dark ? 0.3 : 0.24) * d * ringIn, Math.max(0.6, u * 0.11) * (0.6 + 0.8 * d));
      }
      for (const h of hairH) strokeCircle(R, h * zoom * ringK, T, (dark ? 0.32 : 0.26) * ringIn, Math.max(0.6, u * 0.08));
      strokeCircle(R * 1.09, 0, T, (dark ? 0.16 : 0.12) * ringIn, Math.max(0.5, u * 0.06));
    }

    // Planet: per-pixel banded sphere at half res, lit by L, with the dust ring's shadow, clipped crisp at full res.
    const tw = Math.max(4, Math.ceil(rs * 2 * TEX) + 4);
    if (!texRef.current) texRef.current = document.createElement("canvas");
    const tex = texRef.current;
    if (tex.width !== tw || tex.height !== tw) {
      tex.width = tw;
      tex.height = tw;
    }
    const tctx = tex.getContext("2d", { willReadFrequently: true });
    if (tctx && planetIn > 0) {
      const img = tctx.createImageData(tw, tw);
      const data = img.data;
      data.fill(0);
      const rsh = rs * TEX;
      const c0 = tw / 2;
      const time = frame / 30;
      const rotA = time * 0.16 + 0.8;
      const cs = Math.cos(rotA), sn = Math.sin(rotA);
      const deep = mix(P, SHADE, dark ? 0.5 : 0.36);
      // Light bands carry the secondary color, so both brand colors stripe the planet.
      const lite = mix(mix(P, S, 0.62), LIGHT, dark ? 0.18 : 0.26);
      const mid = mix(P, S, 0.85);
      const night = dark ? mix(mix(P, SHADE, 0.85), BG, 0.5) : mix(P, SHADE, 0.58);
      const Hh = norm({ x: L.x, y: L.y, z: L.z + 1 });
      const LU = dot(L, U);
      for (let py = 0; py < tw; py++) {
        for (let px = 0; px < tw; px++) {
          let nx = (px + 0.5 - c0) / rsh;
          let ny = (py + 0.5 - c0) / rsh;
          const d2 = nx * nx + ny * ny;
          if (d2 > 1.12) continue;
          if (d2 > 0.9995) {
            const k = Math.sqrt(0.9995 / d2);
            nx *= k;
            ny *= k;
          }
          const nz = Math.sqrt(Math.max(0, 1 - nx * nx - ny * ny));
          const pa = nx * A.x + ny * A.y + nz * A.z;
          const pb = nx * B.x + ny * B.y + nz * B.z;
          const pu = nx * U.x + ny * U.y + nz * U.z;
          const qa = pa * cs - pb * sn;
          const qb = pa * sn + pb * cs;
          const lat = pu * (1 + 0.17 * pu * pu);
          const w1 = NOISE(qa * 1.6, pu * 2.2, qb * 1.6 + time * 0.05);
          const w2 = NOISE(qa * 4.2 + 3.1, pu * 7.5, qb * 4.2 - time * 0.08);
          const warp = w1 * 0.55 + w2 * 0.12;
          const b1 = smooth(0.18, 0.82, 0.5 + 0.5 * Math.sin(lat * 11 + warp * 1.1 + Math.sin(lat * 3.1) * 1.4));
          const b2 = 0.5 + 0.5 * Math.sin(lat * 34 + warp * 2.2 + w2 * 1.4 + 1.3);
          const st = smooth(0.7, 0.98, Math.sin(lat * 4.3 - 0.5 + warp * 0.8));
          let r = deep[0] + (lite[0] - deep[0]) * b1, gg = deep[1] + (lite[1] - deep[1]) * b1, bb = deep[2] + (lite[2] - deep[2]) * b1;
          const k2 = b2 * 0.22;
          r += (P[0] - r) * k2; gg += (P[1] - gg) * k2; bb += (P[2] - bb) * k2;
          const k3 = st * 0.55;
          r += (mid[0] - r) * k3; gg += (mid[1] - gg) * k3; bb += (mid[2] - bb) * k3;
          const ndl = nx * L.x + ny * L.y + nz * L.z;
          let diff = smooth(-0.16, 0.7, ndl);
          // Ring shadow: follow the ray from the surface to the light into the ring plane.
          if (pu < 0 && LU > 0.02) {
            const s = (-pu * rp) / LU;
            const hx2 = nx * rp + s * L.x, hy2 = ny * rp + s * L.y, hz2 = nz * rp + s * L.z;
            const rad = Math.sqrt(hx2 * hx2 + hy2 * hy2 + hz2 * hz2);
            const dd = dust((rad - r0) / (r1 - r0));
            diff *= 1 - 0.7 * dd * ringIn;
          }
          const limb = 0.82 + 0.18 * nz;
          // The night side keeps a ghost of the bands, so it reads as a sphere, not a hole.
          const nr = night[0] + (r - night[0]) * 0.22, ng = night[1] + (gg - night[1]) * 0.22, nb = night[2] + (bb - night[2]) * 0.22;
          r = nr + (r * limb - nr) * diff;
          gg = ng + (gg * limb - ng) * diff;
          bb = nb + (bb * limb - nb) * diff;
          const fres = Math.pow(1 - nz, 2.6) * (0.12 + 1.05 * smooth(-0.35, 0.6, ndl));
          r += (atm[0] - r) * Math.min(1, fres);
          gg += (atm[1] - gg) * Math.min(1, fres);
          bb += (atm[2] - bb) * Math.min(1, fres);
          const spec = Math.pow(Math.max(0, nx * Hh.x + ny * Hh.y + nz * Hh.z), 38) * 0.22 * diff;
          r += (255 - r) * spec; gg += (255 - gg) * spec; bb += (255 - bb) * spec;
          const o = (py * tw + px) * 4;
          data[o] = r;
          data[o + 1] = gg;
          data[o + 2] = bb;
          data[o + 3] = 255;
        }
      }
      tctx.putImageData(img, 0, 0);
      fr.save();
      fr.globalAlpha = planetIn;
      fr.beginPath();
      fr.arc(cx, cy, rs, 0, TAU);
      fr.clip();
      fr.imageSmoothingEnabled = true;
      fr.imageSmoothingQuality = "high";
      fr.drawImage(tex, cx - (tw / 2) / TEX, cy - (tw / 2) / TEX, tw / TEX, tw / TEX);
      fr.restore();
      // A hairline of light on the lit limb.
      fr.save();
      fr.globalAlpha = planetIn * dawn;
      const limbG = fr.createLinearGradient(cx + L.x * rs, cy + L.y * rs, cx - L.x * rs, cy - L.y * rs);
      limbG.addColorStop(0, css(mix(atm, LIGHT, 0.5), dark ? 0.85 : 0.7));
      limbG.addColorStop(0.5, css(atm, 0));
      fr.strokeStyle = limbG;
      fr.lineWidth = Math.max(1, u * 0.22);
      fr.beginPath();
      fr.arc(cx, cy, rs - u * 0.1, 0, TAU);
      fr.stroke();
      fr.restore();
    }
    // Front halves of the dust and hairlines go over the planet.
    if (ringIn > 0) {
      const LINES = 34;
      const frontOnly = (r: number, h: number, rgb: RGB, alpha: number, lw: number) => arc(fr, true, r, h, rgb, alpha, lw);
      for (let j = 0; j < LINES; j++) {
        const uu = (j + 0.5) / LINES;
        const d = dust(uu);
        if (d < 0.02) continue;
        const rgb = j % 4 === 1 ? S : j % 4 === 3 ? mix(T, P, 0.4) : T;
        frontOnly(r0 + (r1 - r0) * uu, 0, rgb, (dark ? 0.3 : 0.24) * d * ringIn, Math.max(0.6, u * 0.11) * (0.6 + 0.8 * d));
      }
      if (!dark && planetIn > 0) {
        // Over the planet the dark ink would vanish: the dust there catches the light instead.
        fr.save();
        fr.beginPath();
        fr.arc(cx, cy, rs, 0, TAU);
        fr.clip();
        const lit = mix(atm, LIGHT, 0.55);
        for (let j = 0; j < LINES; j++) {
          const uu = (j + 0.5) / LINES;
          const d = dust(uu);
          if (d < 0.02) continue;
          frontOnly(r0 + (r1 - r0) * uu, 0, lit, 0.55 * d * ringIn * planetIn, Math.max(0.6, u * 0.11) * (0.6 + 0.8 * d));
        }
        fr.restore();
      }
      for (const h of hairH) frontOnly(R, h * zoom * ringK, T, (dark ? 0.32 : 0.26) * ringIn, Math.max(0.6, u * 0.08));
      frontOnly(R * 1.09, 0, T, (dark ? 0.16 : 0.12) * ringIn, Math.max(0.5, u * 0.06));
    }

    // Dot leaders and star markers on the band (streaked while the ring whips round).
    for (const mk of marks) {
      if (mk.alpha <= 0.001) continue;
      const p = ringPoint(R, mk.phi, 0);
      const ctx = p.z > 0 ? fr : back;
      const facing = Math.cos(mk.phi);
      const depth = p.z > 0 ? 0.55 + 0.45 * smooth(0, 0.5, facing) : 0.35;
      const sh = 1 - 0.8 * shadowOn(p);
      const q = proj(p);
      if (mk.kind === "dot") {
        const rad = font * 0.05 * zoom * ringK * q.s;
        const p2 = ringPoint(R, mk.phi + mk.trail, 0);
        const q2 = proj(p2);
        ctx.strokeStyle = css(T, (dark ? 0.6 : 0.5) * mk.alpha * depth * sh);
        ctx.lineCap = "round";
        ctx.lineWidth = rad * 2;
        ctx.beginPath();
        ctx.moveTo(q.x, q.y);
        ctx.lineTo(q2.x + (q2.x === q.x && q2.y === q.y ? 0.01 : 0), q2.y);
        ctx.stroke();
      } else {
        const right: V3 = { x: Math.cos(mk.phi) * A.x - Math.sin(mk.phi) * B.x, y: Math.cos(mk.phi) * A.y - Math.sin(mk.phi) * B.y, z: Math.cos(mk.phi) * A.z - Math.sin(mk.phi) * B.z };
        const down: V3 = { x: -U.x, y: -U.y, z: -U.z };
        const mtx = affine(p, right, down);
        const sz = font * 0.3 * zoom * ringK;
        ctx.save();
        ctx.setTransform(mtx[0]!, mtx[1]!, mtx[2]!, mtx[3]!, mtx[4]!, mtx[5]!);
        ctx.fillStyle = css(S, mk.alpha * depth * sh);
        ctx.beginPath();
        const pin = sz * 0.22;
        ctx.moveTo(0, -sz);
        ctx.quadraticCurveTo(pin * 0.3, -pin * 0.3, sz, 0);
        ctx.quadraticCurveTo(pin * 0.3, pin * 0.3, 0, sz);
        ctx.quadraticCurveTo(-pin * 0.3, pin * 0.3, -sz, 0);
        ctx.quadraticCurveTo(-pin * 0.3, -pin * 0.3, 0, -sz);
        ctx.fill();
        ctx.restore();
      }
    }

    // Untagged glyphs, drawn exactly where their DOM span would sit (same box, centring and baseline).
    const painted = glyphs.filter((gd) => gd.onCanvas && gd.opacity > 0.001);
    if (painted.length) {
      const lh = font * 1.2;
      for (const ctx of [back, fr]) {
        ctx.font = fontStr(font);
        ctx.textAlign = "center";
        ctx.textBaseline = "alphabetic";
      }
      const fm = back.measureText("Hg");
      const baseline = (lh - (fm.fontBoundingBoxAscent + fm.fontBoundingBoxDescent)) / 2 + fm.fontBoundingBoxAscent;
      for (const gd of painted) {
        const ctx = gd.front ? fr : back;
        const [a, b, c, d, e, f] = gd.m as [number, number, number, number, number, number];
        ctx.save();
        ctx.setTransform(a, b, c, d, e, f);
        ctx.translate(-gd.w / 2, -lh / 2 - font * 0.04);
        ctx.globalAlpha = Math.min(1, gd.opacity);
        if (gd.blur > 0.3) {
          // Like the DOM filter: blur in the glyph's own space, on a small sprite (half res once soft), then transform.
          const k = gd.blur > 2 ? 0.5 : 1;
          const pad = Math.ceil(gd.blur * 3);
          const sw = Math.ceil((gd.w + pad * 2) * k);
          const sh = Math.ceil((lh + pad * 2) * k);
          if (!spriteRef.current) spriteRef.current = document.createElement("canvas");
          const sprite = spriteRef.current;
          sprite.width = sw;
          sprite.height = sh;
          const sc = sprite.getContext("2d", { willReadFrequently: true });
          if (sc) {
            sc.setTransform(k, 0, 0, k, pad * k, pad * k);
            sc.filter = `blur(${(gd.blur * k).toFixed(3)}px)`;
            sc.font = fontStr(font);
            sc.textAlign = "center";
            sc.textBaseline = "alphabetic";
            sc.fillStyle = gd.color;
            sc.fillText(gd.ch, gd.w / 2, baseline);
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";
            ctx.drawImage(sprite, -pad, -pad, sw / k, sh / k);
          }
        } else {
          ctx.fillStyle = gd.color;
          ctx.fillText(gd.ch, gd.w / 2, baseline);
        }
        ctx.restore();
      }
    }
  });

  // ---------- DOM ----------
  const lineH = font * 1.2;
  // An explicit SVG glyph surface avoids Chrome's cached oversized HTML glyph
  // layers while keeping the actual visible headline text available to the probe.
  const renderGlyph = (gd: GlyphDraw) => (
    <svg key={gd.key} width={gd.w} height={lineH} style={{
      position: "absolute", left: 0, top: 0, overflow: "visible", opacity: gd.opacity,
      transformOrigin: "0 0",
      transform: `matrix(${gd.m.map((v) => v.toFixed(4)).join(",")}) translate(${(-gd.w / 2).toFixed(2)}px, ${(-lineH / 2 - font * 0.04).toFixed(2)}px)`,
      filter: gd.blur > 0.3 ? `blur(${gd.blur.toFixed(2)}px)` : undefined,
    }}>
      <text data-21st-slot={gd.tag ? "text" : undefined}
        x={gd.w / 2} y={lineH / 2} textAnchor="middle" dominantBaseline="central"
        fontFamily={family} fontWeight={weight} fontSize={font}
        fill={gd.color} style={{ whiteSpace: "pre", textRendering: "geometricPrecision" }}>
        {gd.ch}
      </text>
    </svg>
  );

  const kick = kicker.trim();
  const kIn = easeOut((frame - 88) / 26);
  const kickerColor = css(T, 0.78);
  const ruleColor = css(S, 0.9);
  const ruleW = g.kickerSize * 1.6;

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background, overflow: "hidden" }}>
      <canvas ref={backRef} width={W} height={H} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
      <div style={{ position: "absolute", inset: 0 }}>{glyphs.filter((gd) => !gd.front && gd.tag).map(renderGlyph)}</div>
      <canvas ref={frontRef} width={W} height={H} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
      <div style={{ position: "absolute", inset: 0 }}>{glyphs.filter((gd) => gd.front && gd.tag).map(renderGlyph)}</div>
      {kick ? (
        <div
          style={{
            position: "absolute",
            left: W * 0.08,
            right: W * 0.08,
            top: g.kickerY,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: g.kickerSize * 0.7,
            opacity: kIn,
            transform: `translateY(${((1 - kIn) * g.kickerSize * 0.8).toFixed(2)}px)`,
          }}
        >
          <div style={{ width: ruleW, height: Math.max(1, g.kickerSize * 0.06), background: ruleColor, flexShrink: 0, opacity: 0.8 }} />
          <div
            data-21st-slot="kicker"
            style={{
              fontFamily: family,
              fontWeight: 500,
              fontSize: g.kickerSize,
              lineHeight: 1.25,
              letterSpacing: "0.14em",
              color: kickerColor,
              textAlign: "center",
              maxWidth: W * 0.84 - ruleW * 2 - g.kickerSize * 1.4,
              overflowWrap: "anywhere",
            }}
          >
            {kick}
          </div>
          <div style={{ width: ruleW, height: Math.max(1, g.kickerSize * 0.06), background: ruleColor, flexShrink: 0, opacity: 0.8 }} />
        </div>
      ) : null}
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.07 : 0.05, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
