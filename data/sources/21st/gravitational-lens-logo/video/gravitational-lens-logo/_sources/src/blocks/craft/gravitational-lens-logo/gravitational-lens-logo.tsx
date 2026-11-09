// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef } from "react";
import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, brandFontStack, easeOut, fitFontSize, ramp, springSnap, useLayout, withAlpha } from "../../../kit/index";
import { fbm3, rng, simplex3 } from "../_lib/noise";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./gravitational-lens-logo.schema";

/** Gas and the lensed galaxy are soft: half resolution is invisible and four times cheaper. */
const SCALE = 0.4;
const TEX = 192;
const TAU = Math.PI * 2;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='7' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

type RGB = [number, number, number];

/** #rgb / #rrggbb(aa) / rgb(a)() to 0..255 channels. */
function rgbOf(color: string, fallback: RGB = [255, 255, 255]): RGB {
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

const prog = (f: number, a: number, b: number) => ramp(f, [a, b], [0, 1]);
const smooth = (a: number, b: number, x: number) => {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

/** Tileable gas texture (density + hue), built once per worker. */
let TEXTURE: Float32Array | null = null;
function gasTexture(): Float32Array {
  if (TEXTURE) return TEXTURE;
  const nd = simplex3("lens-gas");
  const nh = simplex3("lens-hue");
  const out = new Float32Array(TEX * TEX * 2);
  const P = 3.2;
  let lo = Infinity, hi = -Infinity;
  for (let y = 0; y < TEX; y++) {
    const v = y / TEX;
    for (let x = 0; x < TEX; x++) {
      const u = x / TEX;
      const s = (fx: number, fy: number) => fbm3(nd, fx, fy, 0.37, 4);
      const t = (fx: number, fy: number) => fbm3(nh, fx * 0.5, fy * 0.5, 2.1, 2);
      const blend = (fn: (a: number, b: number) => number) => {
        const a = fn(u * P, v * P), b = fn((u - 1) * P, v * P), c = fn(u * P, (v - 1) * P), d = fn((u - 1) * P, (v - 1) * P);
        return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
      };
      const dv = blend(s);
      out[(y * TEX + x) * 2] = dv;
      out[(y * TEX + x) * 2 + 1] = blend(t);
      lo = Math.min(lo, dv);
      hi = Math.max(hi, dv);
    }
  }
  for (let i = 0; i < TEX * TEX; i++) {
    out[i * 2] = (out[i * 2]! - lo) / (hi - lo);
    out[i * 2 + 1] = 0.5 + out[i * 2 + 1]! * 1.6;
  }
  TEXTURE = out;
  return out;
}

type Star = { t: number; o: number; r: number; a: number; tint: number; speed: number; tw: number; ph: number; m: number };

/**
 * A point mass slides in front of a drifting starfield. Every star is forward-mapped
 * through the real point-lens equation (two images, tangential arcs near the Einstein
 * radius) at full resolution; the gas band and a background galaxy are ray-traced back
 * through the lens per pixel at half resolution, so the galaxy closes into an Einstein
 * ring exactly when the lens lines up. Then the logo focuses in at the ring's center.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ logo, caption, primary, secondary, color, background, density, strength, grain, fontFamily }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: w, height: h, aspect, portrait } = useLayout();
  const S = Math.min(w, h);
  const transparent = background === "transparent";
  const cRGB = rgbOf(color);
  const dark = transparent ? lum(cRGB) > 0.4 : lum(rgbOf(background, [0, 0, 0])) < 0.4;
  const hasCaption = caption.trim().length > 0;

  // Layout: the ring frames the logo; the caption sits under it.
  const Ef = strength * (aspect === "9:16" ? 0.34 * w : aspect === "1:1" ? 0.255 * S : 0.235 * h);
  const cx = w / 2;
  const cy = hasCaption ? h * (aspect === "16:9" ? 0.46 : 0.455) : h / 2;

  // Timing: lens glides in 4 -> ~84, ring springs open (slight overshoot) and locks ~86,
  // the logo focuses in 90 -> 118, caption 108 -> 128.
  const gt = prog(frame, 2, 96);
  const glide = 1 - (1 - gt) * (1 - gt);
  const start = aspect === "9:16" ? { x: 0.28 * w, y: 0.66 * h } : { x: 0.78 * w, y: -0.2 * h };
  const bow = Math.sin(Math.PI * glide) * (aspect === "9:16" ? -0.1 * w : 0.1 * h);
  const Lx = cx + start.x * (1 - glide) + (aspect === "9:16" ? bow : 0);
  const Ly = cy + start.y * (1 - glide) + (aspect === "9:16" ? 0 : bow);
  const grow = springSnap(frame, fps, 44, { damping: 7, stiffness: 21, mass: 1 });
  const E = Ef * (0.42 + 0.58 * grow);
  const flash = Math.exp(-Math.pow((frame - 88) / 7, 2)) * 0.55;
  const logoIn = easeOut(prog(frame, 90, 112));

  const stars = useMemo(() => {
    const D = Math.hypot(w, h) + S * 0.4;
    const r = rng(`lens-stars-${w}x${h}`);
    const count = Math.round(((D * D) / (S * S)) * 820 * density);
    const out: Star[] = [];
    for (let i = 0; i < count; i++) {
      const inBand = r() < 0.42;
      let o: number;
      if (inBand) {
        // Box-Muller: the band is a gaussian ridge of stars.
        const u1 = Math.max(1e-6, r()), u2 = r();
        o = Math.sqrt(-2 * Math.log(u1)) * Math.cos(TAU * u2) * S * 0.15;
      } else o = (r() - 0.5) * D;
      const m = Math.pow(r(), inBand ? 2.6 : 3.4);
      out.push({
        t: r() * D,
        o,
        m,
        r: (S / 1080) * (0.55 + 1.75 * m),
        a: 0.22 + 0.78 * Math.sqrt(m),
        tint: r(),
        speed: 0.65 + 0.7 * m + 0.15 * r(),
        tw: 0.05 + r() * 0.12,
        ph: r() * TAU,
      });
    }
    return { list: out, D };
  }, [w, h, S, density]);

  const ref = useRef<HTMLCanvasElement>(null);
  const gasRef = useRef<HTMLCanvasElement | null>(null);
  const bloomRef = useRef<HTMLCanvasElement | null>(null);
  const haloRef = useRef<{ key: string; c: HTMLCanvasElement } | null>(null);
  const nw = Math.max(2, Math.round(w * SCALE));
  const nh = Math.max(2, Math.round(h * SCALE));

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    if (!gasRef.current) gasRef.current = document.createElement("canvas");
    if (!bloomRef.current) bloomRef.current = document.createElement("canvas");
    const gas = gasRef.current, bloom = bloomRef.current;
    if (gas.width !== nw || gas.height !== nh) { gas.width = nw; gas.height = nh; }
    const bw = Math.max(2, Math.round(nw / 2)), bh = Math.max(2, Math.round(nh / 2));
    if (bloom.width !== bw || bloom.height !== bh) { bloom.width = bw; bloom.height = bh; }
    const gctx = gas.getContext("2d", { willReadFrequently: true })!;
    const bctx = bloom.getContext("2d", { willReadFrequently: true })!;

    const P = rgbOf(primary), Q = rgbOf(secondary), H = cRGB;
    const tex = gasTexture();
    const time = frame / fps;

    // Band geometry (the milky ridge everything drifts along).
    const bandAng = aspect === "9:16" ? -1.08 : aspect === "1:1" ? -0.62 : -0.3;
    const bx = Math.cos(bandAng), by = Math.sin(bandAng);
    const nx = -by, ny = bx;
    const drift = time * S * 0.016;

    // ---------- gas + galaxy, ray-traced back through the lens ----------
    const img = gctx.createImageData(nw, nh);
    const d = img.data;
    const E2 = E * E;
    const Gx = cx + Ef * 0.1, Gy = cy - Ef * 0.055;
    const Nx = cx - Ef * 0.05, Ny = cy + Ef * 0.03;
    const rot = 0.55 + time * 0.12;
    const ca = Math.cos(rot), sa = Math.sin(rot);
    const kA = 1 / (2 * Math.pow(Ef * 0.14, 2)), kB = 1 / (2 * Math.pow(Ef * 0.055, 2));
    const kH = 1 / (2 * Math.pow(Ef * 0.42, 2)), kN = 1 / (2 * Math.pow(Ef * 0.032, 2));
    const kBand = 1 / (2 * Math.pow(S * 0.24, 2));
    const texK = TEX / (S * 1.15);
    const dux = -bx * drift, duy = -by * drift;
    const gal = 1 + flash;
    const bodyAmt = (dark ? 0.7 : 0.6) * gal, haloAmt = (dark ? 0.22 : 0.16) * gal, nucAmt = (dark ? 1.25 : 0.9) * gal;
    const nebAmt = dark ? 0.34 : 0.2;
    const inv = 1 / SCALE;
    let k = 0;
    for (let j = 0; j < nh; j++) {
      const y = (j + 0.5) * inv;
      const dy = y - Ly;
      for (let i = 0; i < nw; i++, k += 4) {
        const x = (i + 0.5) * inv;
        const dx = x - Lx;
        const r2 = dx * dx + dy * dy + 1e-3;
        // Deep inside the ring every pixel sees a far, tiny patch of sky: fade to the mean.
        const inner = smooth(0.16, 0.42, r2 / E2);
        if (inner <= 0) { d[k + 3] = 0; continue; }
        const f = 1 - E2 / r2;
        const sx = Lx + dx * f, sy = Ly + dy * f;

        // Gas texture (bilinear, wrapped) in the drifting source plane.
        let tu = ((sx + dux) * texK) % TEX; if (tu < 0) tu += TEX;
        let tv = ((sy + duy) * texK) % TEX; if (tv < 0) tv += TEX;
        const x0 = tu | 0, y0 = tv | 0, fx = tu - x0, fy = tv - y0;
        const x1 = (x0 + 1) % TEX, y1 = (y0 + 1) % TEX;
        const i00 = (y0 * TEX + x0) * 2, i10 = (y0 * TEX + x1) * 2, i01 = (y1 * TEX + x0) * 2, i11 = (y1 * TEX + x1) * 2;
        const dens = (tex[i00]! * (1 - fx) + tex[i10]! * fx) * (1 - fy) + (tex[i01]! * (1 - fx) + tex[i11]! * fx) * fy;
        const hue = (tex[i00 + 1]! * (1 - fx) + tex[i10 + 1]! * fx) * (1 - fy) + (tex[i01 + 1]! * (1 - fx) + tex[i11 + 1]! * fx) * fy;

        const bo = (sx - cx) * nx + (sy - cy) * ny;
        const band = Math.exp(-bo * bo * kBand);
        const g = smooth(0.38, 0.98, dens);
        const neb = g * g * (0.22 + 0.78 * band) * nebAmt * inner;
        const m = smooth(0.25, 0.75, hue);

        let body = 0, halo = 0, nuc = 0;
        const gx = sx - Gx, gy = sy - Gy;
        const gd2 = gx * gx + gy * gy;
        if (gd2 * kH < 14) {
          const ga = gx * ca + gy * sa, gb = -gx * sa + gy * ca;
          const knots = 0.55 + 0.9 * dens;
          body = Math.exp(-(ga * ga * kA + gb * gb * kB)) * knots * bodyAmt;
          halo = Math.exp(-gd2 * kH) * haloAmt;
          const qx = sx - Nx, qy = sy - Ny;
          nuc = Math.exp(-(qx * qx + qy * qy) * kN) * nucAmt;
        }
        const I = body + halo + nuc + neb;
        if (I < 0.004) { d[k + 3] = 0; continue; }
        const nr = P[0] + (Q[0] - P[0]) * m, ng = P[1] + (Q[1] - P[1]) * m, nb = P[2] + (Q[2] - P[2]) * m;
        let R = (body * P[0] + halo * Q[0] + nuc * H[0] + neb * nr) / I;
        let G = (body * P[1] + halo * Q[1] + nuc * H[1] + neb * ng) / I;
        let B = (body * P[2] + halo * Q[2] + nuc * H[2] + neb * nb) / I;
        if (I > 1) {
          // Overexposed core burns toward the hot (text) color.
          const t = Math.min(1, (I - 1) * 0.6);
          R += (H[0] - R) * t; G += (H[1] - G) * t; B += (H[2] - B) * t;
        }
        d[k] = R; d[k + 1] = G; d[k + 2] = B; d[k + 3] = Math.min(1, I) * 255;
      }
    }
    gctx.putImageData(img, 0, 0);

    // ---------- compose ----------
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.filter = "none";
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, w, h);
    if (!transparent) {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, w, h);
    }
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
    ctx.drawImage(gas, 0, 0, w, h);
    // Bloom: a wide soft copy of the gas so the ring glows into the dark.
    bctx.setTransform(1, 0, 0, 1, 0, 0);
    bctx.clearRect(0, 0, bw, bh);
    bctx.filter = `blur(${Math.max(2, Math.round(Ef * 0.03 * SCALE))}px)`;
    bctx.drawImage(gas, 0, 0, bw, bh);
    bctx.filter = "none";
    ctx.globalAlpha = dark ? 0.6 : 0.4;
    ctx.drawImage(bloom, 0, 0, w, h);
    ctx.globalAlpha = 1;

    // Quiet pocket inside the ring so the logo reads.
    ctx.globalCompositeOperation = "source-over";
    if (!transparent) {
      const pocket = ctx.createRadialGradient(cx, cy, 0, cx, cy, Ef * 0.86);
      const pa = 0.25 + 0.45 * logoIn;
      pocket.addColorStop(0, withAlpha(background, pa));
      pocket.addColorStop(0.7, withAlpha(background, pa * 0.6));
      pocket.addColorStop(1, withAlpha(background, 0));
      ctx.fillStyle = pocket;
      ctx.fillRect(cx - Ef, cy - Ef, Ef * 2, Ef * 2);
    }

    // ---------- stars, forward-mapped through the lens ----------
    const hkey = `${color}`;
    if (!haloRef.current || haloRef.current.key !== hkey) {
      const c = document.createElement("canvas");
      c.width = c.height = 64;
      const hc = c.getContext("2d", { willReadFrequently: true })!;
      const rg = hc.createRadialGradient(32, 32, 0, 32, 32, 32);
      rg.addColorStop(0, withAlpha(color, 0.9));
      rg.addColorStop(0.18, withAlpha(color, 0.35));
      rg.addColorStop(1, withAlpha(color, 0));
      hc.fillStyle = rg;
      hc.fillRect(0, 0, 64, 64);
      haloRef.current = { key: hkey, c };
    }
    const haloSprite = haloRef.current.c;
    ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
    ctx.lineCap = "round";
    const { list, D } = stars;
    const pad = S * 0.08;
    const tintA = withAlpha(primary, 1), tintB = withAlpha(secondary, 1);
    for (const s of list) {
      let t = (s.t + drift * s.speed) % D;
      t -= D / 2;
      const sx = cx + t * bx + s.o * nx;
      const sy = cy + t * by + s.o * ny;
      if (sx < -pad || sx > w + pad || sy < -pad || sy > h + pad) continue;
      const dx = sx - Lx, dy = sy - Ly;
      const beta = Math.max(0.05, Math.hypot(dx, dy));
      const root = Math.sqrt(beta * beta + 4 * E2);
      const ux = dx / beta, uy = dy / beta;
      const a0 = s.a * (0.82 + 0.18 * Math.sin(frame * s.tw + s.ph));
      const fill = s.tint < 0.72 ? color : s.tint < 0.86 ? tintA : tintB;
      for (let im = 0; im < 2; im++) {
        const theta = im === 0 ? (beta + root) / 2 : (beta - root) / 2;
        const tang = Math.abs(theta) / beta;
        const rad = im === 0 ? (1 + beta / root) / 2 : (1 - beta / root) / 2;
        const mu = tang * rad;
        if (im === 1 && mu < 0.02) continue;
        const px = Lx + ux * theta, py = Ly + uy * theta;
        if (px < -40 || px > w + 40 || py < -40 || py > h + 40) continue;
        const thick = 2 * s.r * rad;
        const len = 2 * s.r * tang;
        let alpha = a0 * (im === 1 ? Math.min(1, 0.4 + mu) : 1);
        if (len > 3.2 * Math.max(1, thick)) {
          // Tangential arc hugging the lens: same surface brightness, stretched.
          const half = Math.min(Math.PI, s.r / beta);
          const phi = Math.atan2(py - Ly, px - Lx);
          const lw = Math.max(1, thick);
          if (thick < 1) alpha *= Math.max(0.25, thick);
          ctx.globalAlpha = Math.min(1, alpha * 1.1);
          ctx.strokeStyle = fill;
          ctx.lineWidth = lw;
          ctx.beginPath();
          ctx.arc(Lx, Ly, Math.abs(theta), phi - half, phi + half);
          ctx.stroke();
        } else {
          let rr = s.r * Math.sqrt(mu);
          if (rr < 0.6) { alpha *= (rr / 0.6) * (rr / 0.6); rr = 0.6; }
          if (s.m > 0.86) {
            const hs = rr * (dark ? 6.5 : 5);
            ctx.globalAlpha = Math.min(1, alpha * (dark ? 0.55 : 0.3));
            ctx.drawImage(haloSprite, px - hs, py - hs, hs * 2, hs * 2);
            if (dark && s.m > 0.993 && im === 0) {
              // Diffraction spikes on the few brightest stars.
              const sl = rr * 16;
              ctx.globalAlpha = alpha * 0.35;
              ctx.strokeStyle = fill;
              ctx.lineWidth = Math.max(0.6, rr * 0.35);
              ctx.beginPath();
              ctx.moveTo(px - sl, py); ctx.lineTo(px + sl, py);
              ctx.moveTo(px, py - sl); ctx.lineTo(px, py + sl);
              ctx.stroke();
            }
          }
          ctx.globalAlpha = Math.min(1, alpha);
          ctx.fillStyle = fill;
          ctx.beginPath();
          ctx.arc(px, py, rr, 0, TAU);
          ctx.fill();
        }
      }
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";

    if (!transparent) {
      const v = ctx.createRadialGradient(cx, h / 2, S * 0.3, cx, h / 2, Math.hypot(w, h) * 0.56);
      v.addColorStop(0, withAlpha(background, 0));
      v.addColorStop(1, withAlpha(background, dark ? 0.7 : 0.55));
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, w, h);
    }
  }, [frame, fps, w, h, nw, nh, S, aspect, E, Ef, Lx, Ly, cx, cy, flash, logoIn, stars, primary, secondary, color, background, transparent, dark, cRGB]);

  // ---------- logo focus-in ----------
  const focus = easeOut(prog(frame, 90, 116));
  const pop = springSnap(frame, fps, 90, APPLE);
  const blur = (1 - easeOut(prog(frame, 90, 114))) * Ef * 0.05;
  const scale = 0.88 + 0.12 * pop;
  const ghost = frame >= 90 && focus < 1 ? Math.sin(Math.PI * focus) * 0.4 : 0;
  const boxW = Ef * 1.3, boxH = Ef * 0.96;
  // Empty slot: the shared sample mark, so the poster reads as a logo reveal.
  const src = logo || SAMPLE_LOGO;
  const glow = dark ? `drop-shadow(0 0 ${Math.round(Ef * 0.1)}px ${withAlpha(primary, 0.55)})` : `drop-shadow(0 ${Math.round(Ef * 0.02)}px ${Math.round(Ef * 0.05)}px ${withAlpha(color, 0.16)})`;

  const mark = (key: string, extra: React.CSSProperties, slot?: string) => (
    <Img key={key} data-21st-slot={slot} src={src} style={{ position: "absolute", left: cx - boxW / 2, top: cy - boxH / 2, width: boxW, height: boxH, objectFit: "contain", ...extra }} />
  );

  const capSize = hasCaption
    ? Math.max(
        h * (portrait ? 0.031 : 0.02),
        fitFontSize({ chars: caption.length, boxW: w * (portrait ? 0.84 : 0.8), boxH: h * (portrait ? 0.09 : 0.07), lines: portrait ? 2 : 1, charEm: 0.56, lineHeight: 1.25, max: aspect === "16:9" ? h * 0.042 : aspect === "1:1" ? h * 0.04 : h * 0.033 }),
      )
    : 0;
  const capIn = easeOut(prog(frame, 108, 128));
  const font = brandFontStack(fontFamily);
  const ringEdge = cy + Ef * 1.2;

  const mask = transparent ? "radial-gradient(ellipse 66% 66% at 50% 50%, #000 52%, transparent 100%)" : undefined;

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <AbsoluteFill style={{ maskImage: mask, WebkitMaskImage: mask }}>
        <canvas ref={ref} width={w} height={h} style={{ width: "100%", height: "100%", display: "block" }} />
      </AbsoluteFill>
      {frame >= 90 ? (
        <AbsoluteFill style={{ pointerEvents: "none" }}>
          {ghost > 0.002 ? mark("g1", { opacity: ghost * 0.5, transform: `scale(${1 + 0.32 * (1 - focus)})`, filter: `blur(${(blur * 1.6).toFixed(2)}px)` }) : null}
          {ghost > 0.002 ? mark("g2", { opacity: ghost * 0.4, transform: `scale(${1 - 0.2 * (1 - focus)})`, filter: `blur(${(blur * 1.3).toFixed(2)}px)` }) : null}
          {mark("main", { opacity: logoIn, transform: scale === 1 ? undefined : `scale(${scale})`, filter: blur > 0.05 ? `blur(${blur.toFixed(2)}px) ${glow}` : glow }, "logo")}
        </AbsoluteFill>
      ) : null}
      {hasCaption ? (
        <div
          data-21st-slot="caption"
          style={{
            position: "absolute",
            left: (w - w * (portrait ? 0.84 : 0.8)) / 2,
            width: w * (portrait ? 0.84 : 0.8),
            top: ringEdge + (portrait ? h * 0.02 : h * 0.025),
            textAlign: "center",
            fontFamily: font,
            fontWeight: 500,
            fontSize: capSize,
            lineHeight: 1.25,
            letterSpacing: "0.04em",
            color,
            opacity: capIn * 0.88,
            transform: capIn < 1 ? `translateY(${((1 - capIn) * S * 0.025).toFixed(2)}px)` : undefined,
            whiteSpace: "normal",
            overflowWrap: "anywhere",
            textShadow: dark ? `0 0 ${Math.round(S * 0.02)}px ${withAlpha(background === "transparent" ? primary : background, 0.9)}` : undefined,
          }}
        >
          {caption}
        </div>
      ) : null}
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.06 : 0.08, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
