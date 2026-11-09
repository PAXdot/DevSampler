// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef } from "react";
import { AbsoluteFill, Img, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, brandFontStack, easeOut, fitFontSize, luminance, ramp, springSnap, useLayout, withAlpha } from "../../../kit/index";
import { rng, simplex3 } from "../_lib/noise";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./iron-filings-field.schema";

const TAU = Math.PI * 2;
const TEXT_CHARGES = 9;
const ALPHA_LEVELS = 10;
const TINT_LEVELS = 3;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='23' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

type RGB = [number, number, number];

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

const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const css = (c: RGB, a: number) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${a.toFixed(3)})`;
const prog = (f: number, a: number, b: number) => ramp(f, [a, b], [0, 1]);
const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);

/** Snap spring with a little overshoot, sampled once per worker (calling spring() per filing per frame would be O(frame)). */
const SNAP = { damping: 9, stiffness: 150, mass: 0.7 } as const;
let SNAP_TABLE: Float32Array | null = null;
function snapTable(fps: number): Float32Array {
  if (SNAP_TABLE) return SNAP_TABLE;
  const t = new Float32Array(121);
  for (let i = 0; i <= 120; i++) t[i] = spring({ frame: i, fps, config: SNAP });
  for (let i = 0; i <= 120; i++) if (Math.abs(1 - t[i]!) < 2e-3 && i > 10) t[i] = 1;
  SNAP_TABLE = t;
  return t;
}
function snapAt(table: Float32Array, f: number): number {
  if (f <= 0) return 0;
  if (f >= 120) return 1;
  const i = Math.floor(f), k = f - i;
  return table[i]! + (table[Math.min(120, i + 1)]! - table[i]!) * k;
}

type Field = {
  n: number;
  x0: Float32Array; y0: Float32Array; x1: Float32Array; y1: Float32Array;
  a0: Float32Array; a1: Float32Array; delay: Float32Array; len: Float32Array;
  str: Float32Array; stri: Float32Array; fade: Float32Array; g1: Float32Array; g2: Float32Array;
  d1: Float32Array; d2: Float32Array; jx: Float32Array; jy: Float32Array; spin: Float32Array; shine: Float32Array;
};

/**
 * Iron filings on a plate between two poles: the logo (+) and the headline (-, spread along
 * the text line). Each filing on a jittered grid gets the field direction of the 2D dipole,
 * and is nudged toward the nearest field line (a Newton step on the stream function), so the
 * filings chain into arcs with bare paper between them, like the real classroom demo.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ logo, headline, primary, secondary, color, background, density, fieldLines, grain, fontFamily }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: w, height: h, aspect, portrait } = useLayout();
  const S = Math.min(w, h);
  const ref = useRef<HTMLCanvasElement>(null);
  const bloomRef = useRef<HTMLCanvasElement | null>(null);
  const transparent = background === "transparent";
  const dark = transparent ? luminance(color) > 0.4 || !/^#/.test(color) : luminance(background) < 0.4;
  const text = headline.trim();
  const hasText = text.length > 0;

  // ---------- layout: the two poles ----------
  // The logo is the hero: a large pole high in the frame, the headline a smaller pole below it.
  const wide = aspect === "16:9";
  const Rl = wide ? 0.215 * h : aspect === "1:1" ? 0.2 * h : 0.27 * w;
  const P1 = { x: 0.5 * w, y: hasText ? (wide ? 0.4 * h : aspect === "1:1" ? 0.38 * h : 0.4 * h) : 0.5 * h };
  const boxW = wide ? 0.62 * w : aspect === "1:1" ? 0.8 * w : 0.84 * w;
  const T = { x: 0.5 * w, y: wide ? 0.825 * h : aspect === "1:1" ? 0.79 * h : 0.7 * h };
  const lines = wide ? (text.length > 26 ? 2 : 1) : text.length > 14 ? 2 : 1;
  const fs = hasText
    ? fitFontSize({
        chars: text.length,
        boxW,
        boxH: wide ? 0.15 * h : aspect === "1:1" ? 0.15 * h : 0.13 * h,
        lines,
        charEm: 0.55,
        lineHeight: 1.15,
        max: wide ? 0.068 * h : aspect === "1:1" ? 0.066 * h : 0.058 * h,
        min: portrait ? 0.031 * h : 0.019 * h,
      })
    : 0;
  const estW = hasText ? Math.min(boxW, (text.length * 0.5 * fs * 1.04) / lines) : 0;
  const estH = hasText ? lines * 1.15 * fs : 0;
  const clearW = estW / 2 + fs * 0.4;
  const clearH = estH / 2 + fs * 0.32;

  const table = snapTable(fps);

  const field = useMemo<Field>(() => {
    const r = rng(`filings-${w}x${h}`);
    const noise = simplex3("filings-wobble");
    const cell = S / (118 * Math.sqrt(density));
    const cols = Math.ceil(w / cell) + 2, rows = Math.ceil(h / cell) + 2;
    const cap = cols * rows;
    const f: Field = {
      n: 0,
      x0: new Float32Array(cap), y0: new Float32Array(cap), x1: new Float32Array(cap), y1: new Float32Array(cap),
      a0: new Float32Array(cap), a1: new Float32Array(cap), delay: new Float32Array(cap), len: new Float32Array(cap),
      str: new Float32Array(cap), stri: new Float32Array(cap), fade: new Float32Array(cap), g1: new Float32Array(cap), g2: new Float32Array(cap),
      d1: new Float32Array(cap), d2: new Float32Array(cap), jx: new Float32Array(cap), jy: new Float32Array(cap), spin: new Float32Array(cap), shine: new Float32Array(cap),
    };
    // Charges: +1 at the logo, -1 spread along the headline (or a point under the logo when there is none).
    const qs: { x: number; y: number; q: number }[] = [{ x: P1.x, y: P1.y, q: 1 }];
    if (hasText) {
      const hl = Math.max(fs, estW * 0.4);
      for (let k = 0; k < TEXT_CHARGES; k++) qs.push({ x: T.x - hl + (2 * hl * k) / (TEXT_CHARGES - 1), y: T.y, q: -1 / TEXT_CHARGES });
    } else qs.push({ x: P1.x, y: P1.y + S * 0.9, q: -1 });
    const eps = (S * 0.01) ** 2;
    const N = fieldLines;
    const step = TAU / N;
    const segHalf = hasText ? Math.max(fs, estW * 0.4) : 0;
    // Field strength reference: a point one logo-radius and a half off the pole.
    const eRef = 1 / (Rl * 1.5);
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const x = (i - 1 + 0.15 + 0.7 * r()) * cell;
        const y = (j - 1 + 0.15 + 0.7 * r()) * cell;
        const ra = r(), rl = r(), rd = r(), rs = r(), rj = r(), rsh = r();
        let ex = 0, ey = 0, psi = 0;
        for (const c of qs) {
          const dx = x - c.x, dy = y - c.y;
          const d2 = dx * dx + dy * dy + eps;
          ex += (c.q * dx) / d2;
          ey += (c.q * dy) / d2;
          psi += c.q * Math.atan2(dy, dx);
        }
        const emag = Math.hypot(ex, ey) + 1e-9;
        // Wobble the stream function a touch so chains are organic, not compass-drawn.
        const wob = noise(x / (S * 0.22), y / (S * 0.22), 0.5) * 0.2 * step + noise(x / (S * 0.07), y / (S * 0.07), 3.1) * 0.035 * step;
        // Weak far field turns a small stream wobble into a big spatial one: calm it there.
        const ps = psi + wob * (0.2 + 0.8 * clamp01(emag / (eRef * 0.4)));
        let dlt = ps - Math.round(ps / step) * step; // distance to the nearest line, in stream units
        if (dlt > step / 2) dlt -= step;
        // Newton step toward the line: grad(psi) is E rotated 90 degrees, |grad psi| = |E|.
        const gx = -ey, gy = ex;
        let mvx = (-dlt * gx) / (emag * emag), mvy = (-dlt * gy) / (emag * emag);
        const mv = Math.hypot(mvx, mvy), maxMv = cell * 1.6;
        if (mv > maxMv) { mvx *= maxMv / mv; mvy *= maxMv / mv; }
        const pull = 0.9;
        const x1 = x + mvx * pull, y1 = y + mvy * pull;
        const stri = Math.pow(0.5 + 0.5 * Math.cos((dlt / step) * TAU), 1.6);
        const str = clamp01(0.5 + 0.5 * Math.log(emag / eRef) / Math.log(4));

        // Clear zones: the logo disc and the headline capsule.
        const d1 = Math.hypot(x1 - P1.x, y1 - P1.y);
        let fade = clamp01((d1 - Rl * 1.08) / (Rl * 0.22));
        let d2 = 1e9;
        if (hasText) {
          // Capsule (stadium) around the headline.
          const qx = Math.max(Math.abs(x1 - T.x) - (clearW - clearH), 0), qy = Math.abs(y1 - T.y);
          const out = Math.hypot(qx, qy) - clearH;
          fade = Math.min(fade, clamp01(out / (fs * 0.5)));
          const sx = Math.max(Math.abs(x1 - T.x) - segHalf, 0);
          d2 = Math.hypot(sx, y1 - T.y);
        }
                const n = f.n++;
        f.x0[n] = x; f.y0[n] = y; f.x1[n] = x1; f.y1[n] = y1;
        f.a0[n] = ra * Math.PI;
        f.a1[n] = Math.atan2(ey, ex) + (1 - str) * (rs - 0.5) * 0.5;
        // Alignment ripples out from both poles at once.
        f.delay[n] = 30 + 34 * Math.pow(clamp01(Math.min(d1 - Rl, hasText ? d2 - clearH : 1e9) / (S * 0.8)), 0.75) + 6 * (1 - str) + rd * 5;
        f.len[n] = cell * (0.75 + 0.75 * rl) * (0.85 + 0.4 * str);
        f.str[n] = str;
        f.stri[n] = stri;
        f.fade[n] = fade;
        f.g1[n] = Math.exp(-Math.pow(d1 / (Rl * 2.4), 2));
        f.g2[n] = hasText ? Math.exp(-Math.pow(d2 / (Math.max(clearH, fs) * 2.4), 2)) : 0;
        f.d1[n] = d1;
        f.d2[n] = d2;
        const ja = rj * TAU;
        f.jx[n] = Math.cos(ja);
        f.jy[n] = Math.sin(ja);
        f.spin[n] = (rsh - 0.5) * 2.2;
        f.shine[n] = 0.75 + 0.5 * r();
      }
    }
    return f;
  }, [w, h, S, density, fieldLines, P1.x, P1.y, T.x, T.y, Rl, hasText, fs, estW, clearW, clearH]);

  const poleOn = easeOut(prog(frame, 66, 104));
  const textPoleOn = easeOut(prog(frame, 82, 118));

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    const bw = Math.max(2, Math.round(w / 2)), bh = Math.max(2, Math.round(h / 2));
    if (!bloomRef.current || bloomRef.current.width !== bw || bloomRef.current.height !== bh) {
      const c = document.createElement("canvas");
      c.width = bw;
      c.height = bh;
      bloomRef.current = c;
    }
    const base = rgbOf(color, [235, 235, 235]);
    const pc = rgbOf(primary, base), sc = rgbOf(secondary, base);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, w, h);
    if (!transparent) {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, w, h);
    }

    // The tap: a short damped knock of the whole plate.
    const tk = frame - 26;
    const knock = tk >= 0 && tk < 22 ? Math.exp(-tk / 5) : 0;
    const shakeX = knock * Math.sin(tk * 1.9) * S * 0.006;
    const shakeY = knock * Math.cos(tk * 2.3) * S * 0.004;
    const hop = tk >= 0 && tk < 10 ? Math.sin((Math.PI * tk) / 10) : 0;

    // Pole light: soft brand glow under the filings.
    const glow = (x: number, y: number, rx: number, ry: number, c: string, a: number) => {
      if (a <= 0.002) return;
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(1, ry / rx);
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, rx);
      g.addColorStop(0, withAlpha(c, a));
      g.addColorStop(0.35, withAlpha(c, a * 0.45));
      g.addColorStop(1, withAlpha(c, 0));
      ctx.fillStyle = g;
      ctx.fillRect(-rx, -rx, rx * 2, rx * 2);
      ctx.restore();
    };
    ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
    glow(P1.x, P1.y, Rl * 3.4, Rl * 3.4, primary, (dark ? 0.2 : 0.16) * poleOn);
    if (hasText) glow(T.x, T.y, clearW * 1.7, clearH * 2.6, secondary, (dark ? 0.15 : 0.12) * textPoleOn);

    // Filings, batched into (tint, alpha) buckets.
    const groups = 1 + TINT_LEVELS * 2;
    const paths: Path2D[] = [];
    for (let i = 0; i < groups * ALPHA_LEVELS; i++) paths.push(new Path2D());
    const used = new Uint8Array(groups * ALPHA_LEVELS);
    const L = 0.55 + frame * 0.006; // light direction slowly turns: glints slide along the arcs
    const p1r = Rl + (frame - 76) * S * 0.026, p1a = frame >= 76 ? Math.exp(-(frame - 76) / 16) : 0;
    const p2r = (frame - 92) * S * 0.024, p2a = frame >= 92 && hasText ? Math.exp(-(frame - 92) / 16) : 0;
    const pw = S * 0.045;
    const F = field;
    for (let i = 0; i < F.n; i++) {
      const sp = snapAt(table, frame - F.delay[i]!);
      const pos = Math.min(1, sp);
      let x = F.x0[i]! + (F.x1[i]! - F.x0[i]!) * pos + shakeX;
      let y = F.y0[i]! + (F.y1[i]! - F.y0[i]!) * pos + shakeY;
      let diff = F.a1[i]! - F.a0[i]!;
      diff -= Math.round(diff / Math.PI) * Math.PI;
      const ang = F.a0[i]! + diff * sp + F.spin[i]! * hop * (1 - pos);
      if (hop > 0) { x += F.jx[i]! * hop * S * 0.0045; y += F.jy[i]! * hop * S * 0.0045 - hop * S * 0.002; }
      const ca = Math.cos(ang), sa = Math.sin(ang);
      const spec = Math.pow(Math.abs(Math.cos(ang - L)), 7);
      const chain = 0.6 + (0.25 + 0.95 * F.stri[i]! - 0.6) * clamp01(pos);
      const metal = dark ? 0.32 + 1.05 * spec * F.shine[i]! : 0.78 + 0.22 * F.shine[i]! - 0.25 * spec;
      const pulse1 = p1a > 0 ? p1a * Math.exp(-Math.pow((F.d1[i]! - p1r) / pw, 2)) : 0;
      const pulse2 = p2a > 0 ? p2a * Math.exp(-Math.pow((F.d2[i]! - p2r) / pw, 2)) : 0;
      const fz = 1 - (1 - F.fade[i]!) * clamp01(pos);
      let a = fz * chain * metal * (0.62 + 0.38 * F.str[i]!) * (dark ? 0.82 : 0.78) + (pulse1 + pulse2) * 0.55 * fz;
      if (a < 0.035) continue;
      if (a > 1) a = 1;
      const t1 = F.g1[i]! * poleOn * 1.1 + pulse1, t2 = F.g2[i]! * textPoleOn * 1.1 + pulse2;
      let g = 0;
      if (t1 > 0.12 || t2 > 0.12) {
        const lv = Math.min(TINT_LEVELS, Math.max(1, Math.round(Math.min(1, Math.max(t1, t2)) * TINT_LEVELS)));
        g = t1 >= t2 ? lv : TINT_LEVELS + lv;
      }
      const q = Math.min(ALPHA_LEVELS - 1, Math.floor(a * ALPHA_LEVELS));
      const k = g * ALPHA_LEVELS + q;
      const hl = F.len[i]! * 0.5;
      const p = paths[k]!;
      p.moveTo(x - ca * hl, y - sa * hl);
      p.lineTo(x + ca * hl, y + sa * hl);
      used[k] = 1;
    }
    ctx.lineCap = "round";
    ctx.lineWidth = Math.max(1, (S / 1080) * (dark ? 1.7 : 1.9));
    const strokeOf: string[] = [];
    for (let g = 0; g < groups; g++) {
      const tint = g === 0 ? 0 : ((g - 1) % TINT_LEVELS + 1) / TINT_LEVELS;
      const tc = g === 0 ? base : mix(base, g <= TINT_LEVELS ? pc : sc, tint * (dark ? 0.85 : 0.6));
      for (let q = 0; q < ALPHA_LEVELS; q++) {
        const k = g * ALPHA_LEVELS + q;
        if (!used[k]) continue;
        strokeOf[k] = css(tc, (q + 0.5) / ALPHA_LEVELS);
        ctx.strokeStyle = strokeOf[k]!;
        ctx.stroke(paths[k]!);
      }
    }
    ctx.globalCompositeOperation = "source-over";

    // Bloom: the bright chains bleed a little light (half resolution, CPU blur).
    const bl = bloomRef.current;
    if (dark && bl) {
      const bctx = bl.getContext("2d", { willReadFrequently: true });
      if (bctx) {
        // Only the brightest buckets (glinting chains and pulses) feed the bloom.
        bctx.setTransform(1, 0, 0, 1, 0, 0);
        bctx.clearRect(0, 0, bl.width, bl.height);
        bctx.setTransform(bl.width / w, 0, 0, bl.height / h, 0, 0);
        bctx.globalCompositeOperation = "lighter";
        bctx.lineCap = "round";
        bctx.lineWidth = Math.max(1, (S / 1080) * 3.2);
        for (let g = 0; g < groups; g++) {
          for (let q = 6; q < ALPHA_LEVELS; q++) {
            const k = g * ALPHA_LEVELS + q;
            if (!used[k]) continue;
            bctx.strokeStyle = strokeOf[k]!;
            bctx.stroke(paths[k]!);
          }
        }
        bctx.globalCompositeOperation = "source-over";
        ctx.globalCompositeOperation = "lighter";
        ctx.filter = `blur(${Math.max(2, Math.round(S * 0.007))}px)`;
        ctx.globalAlpha = 0.9;
        ctx.drawImage(bl, 0, 0, w, h);
        ctx.filter = "none";
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = "source-over";
      }
    }

    if (!transparent) {
      const v = ctx.createRadialGradient(w / 2, h / 2, S * 0.35, w / 2, h / 2, Math.hypot(w, h) * 0.58);
      v.addColorStop(0, withAlpha(background, 0));
      v.addColorStop(1, withAlpha(background, dark ? 0.72 : 0.6));
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, w, h);
    }
  }, [frame, field, table, w, h, S, P1.x, P1.y, T.x, T.y, Rl, clearW, clearH, hasText, primary, secondary, color, background, transparent, dark, poleOn, textPoleOn]);

  // ---------- logo: resolves in the north pole ----------
  const src = logo || SAMPLE_LOGO;
  const pop = springSnap(frame, fps, 78, APPLE);
  const lIn = easeOut(prog(frame, 78, 100));
  const lBlur = (1 - easeOut(prog(frame, 78, 104))) * Rl * 0.12;
  const lSize = Rl * 1.32;
  // The pole cap: a lit disc the logo sits on, so the mark reads as the subject of the field.
  const capR = Rl * 0.98;
  const capFill = `radial-gradient(circle at 50% 38%, ${withAlpha(primary, dark ? 0.2 : 0.16)} 0%, ${withAlpha(primary, dark ? 0.07 : 0.06)} 62%, ${withAlpha(primary, dark ? 0.12 : 0.1)} 100%)`;
  const capRing = `inset 0 0 0 ${Math.max(1.5, Rl * 0.016).toFixed(2)}px ${withAlpha(primary, dark ? 0.6 : 0.7)}, 0 0 ${Math.round(Rl * 0.35)}px ${withAlpha(primary, dark ? 0.32 : 0.2)}`;
  const lGlow = dark
    ? `drop-shadow(0 0 ${Math.round(Rl * 0.22)}px ${withAlpha(primary, 0.45)})`
    : `drop-shadow(0 ${Math.round(Rl * 0.04)}px ${Math.round(Rl * 0.1)}px ${withAlpha(color, 0.18)})`;

  // ---------- headline: resolves in the south pole ----------
  const tIn = easeOut(prog(frame, 94, 122));
  const tBlur = (1 - tIn) * fs * 0.18;
  const font = brandFontStack(fontFamily);
  const shade = transparent ? (dark ? withAlpha(primary, 0) : withAlpha(color, 0)) : withAlpha(background, 0.85);
  const mask = transparent ? `radial-gradient(ellipse 70% 70% at 50% 50%, ${withAlpha(color, 1)} 50%, ${withAlpha(color, 0)} 100%)` : undefined;

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <AbsoluteFill style={{ maskImage: mask, WebkitMaskImage: mask }}>
        <canvas ref={ref} width={w} height={h} style={{ width: "100%", height: "100%", display: "block" }} />
      </AbsoluteFill>
      {frame >= 76 ? (
        <div
          style={{
            position: "absolute",
            left: P1.x - capR,
            top: P1.y - capR,
            width: capR * 2,
            height: capR * 2,
            borderRadius: "50%",
            background: capFill,
            boxShadow: capRing,
            opacity: lIn,
            transform: pop === 1 ? undefined : `scale(${(0.9 + 0.1 * pop).toFixed(4)})`,
          }}
        />
      ) : null}
      {frame >= 76 ? (
        <Img
          data-21st-slot="logo"
          src={src}
          style={{
            position: "absolute",
            left: P1.x - lSize / 2,
            top: P1.y - lSize / 2,
            width: lSize,
            height: lSize,
            objectFit: "contain",
            opacity: lIn,
            transform: pop === 1 ? undefined : `scale(${(0.82 + 0.18 * pop).toFixed(4)})`,
            filter: lBlur > 0.05 ? `blur(${lBlur.toFixed(2)}px) ${lGlow}` : lGlow,
          }}
        />
      ) : null}
      {hasText ? (
        <div
          data-21st-slot="headline"
          style={{
            position: "absolute",
            left: T.x - boxW / 2,
            width: boxW,
            top: T.y - clearH * 1.5,
            height: clearH * 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontFamily: font,
            fontWeight: 600,
            fontSize: fs,
            lineHeight: 1.15,
            letterSpacing: `${(-0.02 + 0.08 * (1 - tIn)).toFixed(4)}em`,
            color,
            opacity: tIn,
            filter: tBlur > 0.05 ? `blur(${tBlur.toFixed(2)}px)` : undefined,
            textShadow: `0 0 ${Math.round(fs * 0.4)}px ${shade}`,
            overflowWrap: "break-word",
            textWrap: "balance",
          }}
        >
          {text}
        </div>
      ) : null}
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.07 : 0.1, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
