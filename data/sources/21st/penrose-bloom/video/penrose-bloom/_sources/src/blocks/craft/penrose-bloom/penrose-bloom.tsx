// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef } from "react";
import { AbsoluteFill, Img, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, fitFontSize, useLayout } from "../../../kit/index";
import { rng, simplex3 } from "../_lib/noise";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./penrose-bloom.schema";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];

const PHI = (1 + Math.sqrt(5)) / 2;
const FPS = 30;

/** Timeline (frames at 30 fps). */
const T_LOGO = 0;
const T_RIM = 8; // the first ring closes around the logo: the star it sits in
const T_BLOOM = 22; // rings start travelling outward
const T_EDGE = 105; // the last visible ring starts
const T_SHINE = 124; // light band enters
const SHINE_LEN = 62;
const SETTLE = 36; // frames after a tile's start until it is exactly at rest

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='7' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

// ---------------------------------------------------------------- color

function rgbOf(color: string, fallback: RGB): RGB {
  let hex = /^#([0-9a-f]{3,8})$/i.exec(color.trim())?.[1];
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
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const css = (c: RGB, a = 1) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${Math.max(0, Math.min(1, a)).toFixed(3)})`;
const ZERO: RGB = [0, 0, 0];
const FULL: RGB = [255, 255, 255];

// ---------------------------------------------------------------- math

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (x: number) => {
  const t = clamp01(x);
  return t * t * (3 - 2 * t);
};
const outCubic = (x: number) => 1 - Math.pow(1 - clamp01(x), 3);
/** Damped spring 0 -> 1 with a soft overshoot; exactly 1 after SETTLE frames (held frames stay bit-identical). */
function springAt(local: number, zeta = 0.5, hz = 1.55): number {
  if (local <= 0) return 0;
  if (local >= SETTLE) return 1;
  const t = local / FPS;
  const w = 2 * Math.PI * hz;
  const wd = w * Math.sqrt(1 - zeta * zeta);
  const v = 1 - Math.exp(-zeta * w * t) * (Math.cos(wd * t) + ((zeta * w) / wd) * Math.sin(wd * t));
  // Fade the residual into exactly 1 over the last frames.
  const tail = smooth((local - (SETTLE - 8)) / 8);
  return v + (1 - v) * tail;
}

// ---------------------------------------------------------------- tiling

type Tile = {
  cx: number;
  cy: number;
  /** Vertices relative to the center: x0,y0,..,x3,y3. */
  pts: number[];
  thin: boolean;
  /** Center-to-side distance (rhombi have an incircle), for an exact uniform grout inset. */
  rIn: number;
  /** Long-axis angle, 0..PI. */
  theta: number;
  /** Unit vector from the bloom origin. */
  ux: number;
  uy: number;
  ring: number;
  start: number;
  rim: boolean;
  glint: boolean;
  shade: number;
};

type Tri = [number, number, number, number, number, number, number];

/** P3 rhombus tiling by Robinson triangle deflation from a sun of ten thin halves. Edge length = edge px. */
function penrose(edge: number, need: number): { tris: Tri[]; scale: number } {
  const n = Math.max(3, Math.ceil(Math.log(need / edge) / Math.log(PHI)));
  const R = edge * Math.pow(PHI, n);
  let tris: Tri[] = [];
  const rot = Math.PI / 2;
  for (let i = 0; i < 10; i++) {
    let b = (2 * i - 1) * (Math.PI / 10) + rot;
    let c = (2 * i + 1) * (Math.PI / 10) + rot;
    if (i % 2 === 0) [b, c] = [c, b];
    tris.push([0, 0, 0, Math.cos(b) * R, Math.sin(b) * R, Math.cos(c) * R, Math.sin(c) * R]);
  }
  for (let k = 0; k < n; k++) {
    const out: Tri[] = [];
    for (const [col, ax, ay, bx, by, cx, cy] of tris) {
      if (col === 0) {
        const px = ax + (bx - ax) / PHI, py = ay + (by - ay) / PHI;
        out.push([0, cx, cy, px, py, bx, by], [1, px, py, cx, cy, ax, ay]);
      } else {
        const qx = bx + (ax - bx) / PHI, qy = by + (ay - by) / PHI;
        const rx = bx + (cx - bx) / PHI, ry = by + (cy - by) / PHI;
        out.push([1, rx, ry, cx, cy, ax, ay], [1, qx, qy, rx, ry, bx, by], [0, rx, ry, qx, qy, ax, ay]);
      }
    }
    tris = out;
  }
  return { tris, scale: R };
}

type Lockup = { ox: number; oy: number; hx: number; hy: number };

function buildTiles(w: number, h: number, edge: number, lk: Lockup, seed: string): { tiles: Tile[]; maxRing: number } {
  const corners = [[0, 0], [w, 0], [0, h], [w, h]] as const;
  const far = Math.max(...corners.map(([x, y]) => Math.hypot(x - lk.ox, y - lk.oy)));
  const { tris } = penrose(edge, (far + edge * 2) / Math.cos(Math.PI / 10));
  const seen = new Set<string>();
  const tiles: Tile[] = [];
  const pad = edge * 1.2;
  for (const [col, ax, ay, bx, by, cx, cy] of tris) {
    const mx = (bx + cx) / 2, my = (by + cy) / 2;
    const key = `${Math.round(mx * 8)},${Math.round(my * 8)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const X = mx + lk.ox, Y = my + lk.oy;
    if (X < -pad || Y < -pad || X > w + pad || Y > h + pad) continue;
    // Clearing around the logo and title: an ellipse (a circle for short lockups) centered on
    // the tiling's five-fold center, so its tile-cut rim reads as a star.
    const ex = (X - lk.ox) / lk.hx, ey = (Y - lk.oy) / lk.hy;
    const norm = Math.sqrt(ex * ex + ey * ey);
    if (norm < 1) continue;
    const dx = bx + cx - ax, dy = by + cy - ay; // D = B + C - A
    const pts = [ax - mx, ay - my, bx - mx, by - my, dx - mx, dy - my, cx - mx, cy - my];
    const thin = col === 0;
    const side = Math.hypot(bx - ax, by - ay);
    const rIn = (side * Math.sin(thin ? Math.PI / 5 : (2 * Math.PI) / 5)) / 2;
    let theta = Math.atan2(dy - ay, dx - ax);
    if (theta < 0) theta += Math.PI;
    if (theta >= Math.PI) theta -= Math.PI;
    const dist = Math.hypot(mx, my);
    const boundary = dist * (1 - 1 / norm);
    tiles.push({
      cx: X, cy: Y, pts, thin, rIn, theta,
      ux: dist > 0 ? mx / dist : 0, uy: dist > 0 ? my / dist : 0,
      ring: Math.floor(boundary / (edge * 0.85)),
      start: 0, rim: false, glint: false, shade: 0,
    });
  }
  // Rings only count over what is on screen, so the bloom reaches the frame edge on time.
  let maxRing = 1;
  for (const t of tiles) if (t.cx > -edge && t.cy > -edge && t.cx < w + edge && t.cy < h + edge) maxRing = Math.max(maxRing, t.ring);
  const r = rng(seed);
  for (const t of tiles) {
    const jitter = r() * 2.4;
    t.rim = t.ring === 0;
    t.glint = r() < 0.11;
    t.shade = r();
    t.start = t.rim ? T_RIM + jitter * 0.6 : T_BLOOM + (T_EDGE - T_BLOOM) * Math.pow(Math.min(1, (t.ring - 1) / Math.max(1, maxRing - 1)), 0.92) + jitter;
  }
  return { tiles, maxRing };
}

// ---------------------------------------------------------------- component

/**
 * An aperiodic Penrose rhombus tiling of beveled glass that blooms outward ring by ring
 * from the logo, each pane springing in and flashing as it lands, colored by its angle
 * between the two brand tints. A band of light then sweeps across the finished glass.
 * Canvas2D at full resolution (edges stay crisp); everything below the glass is gradients.
 */
export const Component: React.FC<Props> = ({ logo, title, primary, secondary, color, background, tileSize, shine, grain, fontFamily }) => {
  const frame = useCurrentFrame();
  const { width: w, height: h, aspect, portrait } = useLayout();
  const S = Math.min(w, h);
  const k = S / 1080;
  const ref = useRef<HTMLCanvasElement>(null);

  const transparent = background === "transparent";
  const BG = rgbOf(background, [12, 12, 16]);
  const INK = rgbOf(color, [240, 240, 240]);
  const P = rgbOf(primary, [80, 200, 240]);
  const Q = rgbOf(secondary, [240, 40, 130]);
  const dark = transparent ? lum(INK) > 0.4 : lum(BG) < 0.4;
  const BASE: RGB = transparent ? (dark ? mix(ZERO, P, 0.06) : mix(FULL, P, 0.05)) : BG;

  // ---- lockup layout (logo above, title below), designed per aspect
  const hasTitle = title.trim().length > 0;
  const logoSize = S * (aspect === "9:16" ? 0.34 : aspect === "1:1" ? 0.26 : 0.24);
  const textW = w * (portrait ? 0.78 : aspect === "1:1" ? 0.66 : 0.5);
  const titleLinesMax = portrait ? 2 : 1;
  const titleSize = hasTitle
    ? Math.max(h * (portrait ? 0.034 : 0.04), fitFontSize({ chars: title.length, boxW: textW, boxH: h * 0.16, lines: titleLinesMax, charEm: 0.56, lineHeight: 1.2, max: portrait ? h * 0.042 : aspect === "1:1" ? h * 0.06 : h * 0.066 }))
    : 0;
  const estW = Math.min(textW, title.length * titleSize * 0.56);
  const lines = hasTitle ? Math.min(titleLinesMax, Math.max(1, Math.ceil((title.length * titleSize * 0.56) / textW))) : 0;
  const textH = lines * titleSize * 1.2;
  const gap = hasTitle ? S * 0.045 : 0;
  const groupH = logoSize + gap + textH;
  const groupTop = h * 0.5 - groupH / 2;
  const logoCy = groupTop + logoSize / 2;
  const textTop = groupTop + logoSize + gap;
  const edge = S * 0.064 * tileSize;
  const lockup: Lockup = useMemo(() => {
    const pad = edge * 0.75;
    const cy = groupTop + groupH / 2;
    // Corners of the lockup's box must fall inside the ellipse: scale the half-box by sqrt(2) at most.
    const bx = Math.max(logoSize * 0.5, estW / 2), by = groupH / 2;
    const r = Math.hypot(bx, by) + pad;
    // Short lockups get a circle; wide titles stretch it into an ellipse that keeps the corners inside.
    const hy = Math.min(r, Math.max(by * 1.25 + pad, h * (portrait ? 0.19 : 0.27)));
    const hx = Math.max(hy, bx / Math.sqrt(Math.max(0.05, 1 - Math.pow(by / hy, 2))) + pad * 0.5);
    return { ox: w / 2, oy: cy, hx, hy };
  }, [w, h, portrait, groupTop, groupH, logoSize, estW, edge]);

  const tiling = useMemo(
    () => buildTiles(w, h, edge, lockup, `penrose-${aspect}`),
    [w, h, edge, lockup, aspect],
  );

  const glowNoise = useMemo(() => simplex3("penrose-glow"), []);

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    const { tiles } = tiling;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.filter = "none";
    ctx.clearRect(0, 0, w, h);

    // ---- light field under the glass (shows through the grout and the panes)
    if (!transparent) {
      ctx.fillStyle = css(BG);
      ctx.fillRect(0, 0, w, h);
    }
    const drift = frame / 240;
    const blobs: [RGB, number, number, number, number][] = [
      [P, 0.28 + 0.06 * glowNoise(drift, 0, 0), 0.3 + 0.06 * glowNoise(0, drift, 1), 0.75, dark ? 0.34 : 0.05],
      [Q, 0.74 + 0.06 * glowNoise(drift, 3, 0), 0.72 + 0.06 * glowNoise(3, drift, 1), 0.7, dark ? 0.3 : 0.04],
      [mix(P, Q, 0.5), 0.5, 0.5, 0.45, dark ? 0.18 : 0],
    ];
    ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
    for (const [c, bx, by, br, ba] of blobs) {
      const R = Math.max(w, h) * br;
      const g = ctx.createRadialGradient(bx * w, by * h, 0, bx * w, by * h, R);
      g.addColorStop(0, css(c, ba));
      g.addColorStop(1, css(c, 0));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }
    ctx.globalCompositeOperation = "source-over";

    // soft glow of the clearing behind the logo
    const lp = springAt(frame - T_LOGO, 0.6, 1.3);
    {
      const R = Math.max(lockup.hx, lockup.hy) * 1.1;
      const g = ctx.createRadialGradient(lockup.ox, lockup.oy, 0, lockup.ox, lockup.oy, R);
      g.addColorStop(0, dark ? css(P, 0.22 * lp) : css(mix(BASE, FULL, 0.7), 0.85 * lp));
      g.addColorStop(1, css(P, 0));
      ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
      ctx.fillStyle = g;
      ctx.fillRect(lockup.ox - R, lockup.oy - R, R * 2, R * 2);
      ctx.globalCompositeOperation = "source-over";
    }

    // ---- shine band
    const sweepAng = -0.42;
    const sdx = Math.cos(sweepAng), sdy = Math.sin(sweepAng);
    const projMin = Math.min(0, w * sdx) + Math.min(0, h * sdy);
    const projMax = Math.max(0, w * sdx) + Math.max(0, h * sdy);
    const bandW = S * 0.2;
    const sp = (frame - T_SHINE) / SHINE_LEN;
    const shineOn = sp > -0.05 && sp < 1.05;
    const bandPos = projMin - bandW * 2 + (projMax - projMin + bandW * 4) * (0.5 - 0.5 * Math.cos(Math.PI * clamp01(sp)));
    const shineAt = (x: number, y: number) => {
      if (!shineOn) return 0;
      const d = (x * sdx + y * sdy - bandPos) / bandW;
      return Math.exp(-d * d) * shine;
    };

    // light direction (top-left), used for bevels and pane gradients
    const lx = -0.6, ly = -0.8;
    const grout = Math.max(1.2, 2.6 * k);
    const hl = Math.max(1, 1.7 * k);
    const maxR = Math.hypot(w, h) * 0.6;

    const seam = new Path2D();
    for (const t of tiles) {
      const local = frame - t.start;
      if (local <= 0) continue;
      const x = springAt(local);
      const s = Math.max(0, x);
      const appear = clamp01(local / 7);
      const rot = (1 - Math.min(1, x)) * (t.thin ? 0.55 : -0.4);
      const cr = Math.cos(rot), sr = Math.sin(rot);
      const push = (1 - x) * edge * 0.7;
      const cx = t.cx - t.ux * push, cy = t.cy - t.uy * push;
      const inset = Math.max(0.3, 1 - grout / t.rIn);
      const v = new Array<number>(8);
      const vo = new Array<number>(8);
      for (let i = 0; i < 4; i++) {
        const px = t.pts[i * 2]! * s, py = t.pts[i * 2 + 1]! * s;
        const rx = px * cr - py * sr, ry = px * sr + py * cr;
        vo[i * 2] = cx + rx;
        vo[i * 2 + 1] = cy + ry;
        v[i * 2] = cx + rx * inset;
        v[i * 2 + 1] = cy + ry * inset;
      }

      // wide panes are primary glass, slim panes secondary; each pane's angle sets how much light
      // it catches, so the five orientations read as facets
      const ang = 0.5 + 0.5 * Math.cos(2 * (t.theta - 0.95));
      const tint = t.thin ? mix(Q, P, 0.08 * ang) : mix(P, Q, 0.1 * (1 - ang));
      const facet = 0.35 + 0.65 * ang;
      const rad = Math.hypot(t.cx - lockup.ox, t.cy - lockup.oy) / maxR;
      const fall = 1 - 0.28 * smooth(rad);
      const flash = local < 18 ? Math.exp(-Math.pow((local - 5) / 5, 2)) : 0;
      const sh = shineAt(t.cx, t.cy);

      let top: RGB, bot: RGB, alpha: number;
      let sheen: RGB;
      if (dark) {
        top = mix(BASE, tint, (0.42 + 0.5 * facet + 0.08 * t.shade) * fall);
        bot = mix(BASE, tint, (0.14 + 0.26 * facet) * fall);
        sheen = mix(top, FULL, 0.38);
        alpha = 0.88;
      } else {
        top = mix(mix(BASE, FULL, 0.6), tint, 0.2 + 0.24 * (1 - facet) + 0.06 * t.shade);
        bot = mix(BASE, tint, 0.42 + 0.34 * (1 - facet) + 0.06 * t.shade);
        sheen = mix(top, FULL, 0.7);
        alpha = 0.94;
      }

      // drop shadow: depth, deeper while the pane is still lifted
      const lift = 1 + 3.2 * (1 - clamp01(x));
      const ox = 2.2 * k * lift, oy = 3.4 * k * lift;
      ctx.globalAlpha = appear;
      ctx.beginPath();
      ctx.moveTo(v[0]! + ox, v[1]! + oy);
      ctx.lineTo(v[2]! + ox, v[3]! + oy);
      ctx.lineTo(v[4]! + ox, v[5]! + oy);
      ctx.lineTo(v[6]! + ox, v[7]! + oy);
      ctx.closePath();
      ctx.fillStyle = dark ? css(ZERO, 0.42) : css(INK, 0.1);
      ctx.fill();

      // pane body: graded along the light
      const r = t.rIn * 2.2 * s;
      const g = ctx.createLinearGradient(cx + lx * r, cy + ly * r, cx - lx * r, cy - ly * r);
      // glass: a bright sheen in the lit corner, the body tint, then depth toward the far edge
      g.addColorStop(0.08, css(sheen, alpha));
      g.addColorStop(0.36, css(top, alpha));
      g.addColorStop(1, css(bot, alpha));
      ctx.beginPath();
      ctx.moveTo(v[0]!, v[1]!);
      ctx.lineTo(v[2]!, v[3]!);
      ctx.lineTo(v[4]!, v[5]!);
      ctx.lineTo(v[6]!, v[7]!);
      ctx.closePath();
      ctx.fillStyle = g;
      ctx.fill();

      // landing flash and the sweeping light lift the pane
      const lift2 = flash * 0.6 + sh * 0.75;
      if (lift2 > 0.01) {
        if (dark) ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = dark ? css(mix(tint, FULL, 0.45), lift2 * 0.7) : css(FULL, Math.min(0.85, lift2 * 0.75));
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
      }

      // bevel: edges facing the light catch it, the others fall into shade
      for (let i = 0; i < 4; i++) {
        const ax = v[i * 2]!, ay = v[i * 2 + 1]!;
        const bx = v[((i + 1) % 4) * 2]!, by = v[((i + 1) % 4) * 2 + 1]!;
        let nx = by - ay, ny = -(bx - ax);
        const nl = Math.hypot(nx, ny) || 1;
        nx /= nl;
        ny /= nl;
        // outward normal: away from the center
        if (nx * ((ax + bx) / 2 - cx) + ny * ((ay + by) / 2 - cy) < 0) {
          nx = -nx;
          ny = -ny;
        }
        const face = -(nx * lx + ny * ly);
        // pull the stroke half a line inside the pane
        const ix = -nx * hl * 0.6, iy = -ny * hl * 0.6;
        ctx.beginPath();
        ctx.moveTo(ax + ix, ay + iy);
        ctx.lineTo(bx + ix, by + iy);
        if (face > 0) {
          ctx.strokeStyle = css(FULL, Math.min(1, (dark ? 0.55 : 0.9) * face + sh * 0.7 + flash * 0.5 + (t.rim ? 0.25 : 0)));
          ctx.lineWidth = hl * (1 + sh * 0.8);
        } else {
          ctx.strokeStyle = dark ? css(ZERO, 0.4 * -face) : css(mix(INK, bot, 0.5), 0.22 * -face);
          ctx.lineWidth = hl;
        }
        ctx.stroke();
      }

      // reflected glints on a few panes as the light passes
      if (t.glint && sh > 0.3) {
        const gx = v[0]! * 0.55 + cx * 0.45, gy = v[1]! * 0.55 + cy * 0.45;
        const gs = edge * 0.34 * sh;
        const ga = (sh - 0.3) / 0.7;
        ctx.strokeStyle = css(FULL, 0.9 * ga);
        ctx.lineWidth = Math.max(1, 1.4 * k);
        ctx.beginPath();
        ctx.moveTo(gx - gs, gy);
        ctx.lineTo(gx + gs, gy);
        ctx.moveTo(gx, gy - gs);
        ctx.lineTo(gx, gy + gs);
        ctx.stroke();
        const gg = ctx.createRadialGradient(gx, gy, 0, gx, gy, gs * 0.8);
        gg.addColorStop(0, css(FULL, 0.7 * ga));
        gg.addColorStop(1, css(FULL, 0));
        ctx.fillStyle = gg;
        ctx.fillRect(gx - gs, gy - gs, gs * 2, gs * 2);
      }

      if (appear > 0.5) {
        seam.moveTo(vo[0]!, vo[1]!);
        seam.lineTo(vo[2]!, vo[3]!);
        seam.lineTo(vo[4]!, vo[5]!);
        seam.lineTo(vo[6]!, vo[7]!);
        seam.closePath();
      }
    }
    ctx.globalAlpha = 1;

    // grout: a fine brand-colored seam on dark glass, a fine paper-bright seam on light glass
    ctx.lineWidth = Math.max(0.8, 1 * k);
    ctx.strokeStyle = dark ? css(mix(P, FULL, 0.15), 0.42) : css(FULL, 0.95);
    ctx.stroke(seam);

    // broad light of the sweep over everything (glass reflects it)
    if (shineOn && shine > 0) {
      const a = 0.5 * Math.sin(Math.PI * clamp01(sp)) * shine;
      const x0 = sdx * (bandPos - bandW * 1.6), y0 = sdy * (bandPos - bandW * 1.6);
      const x1 = sdx * (bandPos + bandW * 1.6), y1 = sdy * (bandPos + bandW * 1.6);
      const g = ctx.createLinearGradient(x0, y0, x1, y1);
      g.addColorStop(0, css(FULL, 0));
      g.addColorStop(0.5, css(dark ? mix(P, FULL, 0.7) : FULL, (dark ? 0.16 : 0.3) * a));
      g.addColorStop(1, css(FULL, 0));
      ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
    }

    // gentle vignette keeps the eye on the logo
    if (!transparent) {
      const v = ctx.createRadialGradient(w / 2, h / 2, S * 0.3, w / 2, h / 2, Math.hypot(w, h) * 0.55);
      v.addColorStop(0, css(BG, 0));
      v.addColorStop(1, css(BG, dark ? 0.5 : 0.35));
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, w, h);
    } else {
      // transparent: fade the glass out well before the frame edges (corners stay alpha 0)
      ctx.globalCompositeOperation = "destination-in";
      ctx.setTransform(w / 2, 0, 0, h / 2, w / 2, h / 2);
      const m = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
      m.addColorStop(0, css(ZERO, 1));
      m.addColorStop(0.35, css(ZERO, 1));
      m.addColorStop(0.68, css(ZERO, 0.5));
      m.addColorStop(0.97, css(ZERO, 0));
      m.addColorStop(1, css(ZERO, 0));
      ctx.fillStyle = m;
      ctx.fillRect(-1, -1, 2, 2);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = "source-over";
    }
  }, [frame, tiling, w, h, k, S, edge, transparent, dark, shine, lockup, glowNoise, BG[0], BG[1], BG[2], P[0], P[1], P[2], Q[0], Q[1], Q[2], INK[0], INK[1], INK[2], BASE[0], BASE[1], BASE[2]]);

  // ---- DOM: logo and title
  const lp = springAt(frame - T_LOGO, 0.55, 1.35);
  const logoScale = 0.72 + 0.28 * lp;
  const logoOpacity = clamp01(frame / 8);
  const glow = css(dark ? P : mix(P, BG, 0.2), dark ? 0.55 : 0.3);
  const tp = outCubic((frame - 40) / 26);
  const titleFont = brandFontStack(fontFamily);

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : css(BG) }}>
      <canvas ref={ref} width={w} height={h} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      <div
        data-21st-slot="logo"
        style={{
          position: "absolute",
          left: w / 2 - logoSize / 2,
          top: logoCy - logoSize / 2,
          width: logoSize,
          height: logoSize,
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          filter: `drop-shadow(0 ${Math.round(6 * k)}px ${Math.round(28 * k)}px ${glow})`,
        }}
      >
        <Img src={logo.trim() || SAMPLE_LOGO} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
      </div>
      {hasTitle ? (
        <div
          data-21st-slot="title"
          style={{
            position: "absolute",
            left: (w - textW) / 2,
            width: textW,
            top: textTop,
            textAlign: "center",
            color,
            fontFamily: titleFont,
            fontWeight: 600,
            fontSize: titleSize,
            lineHeight: 1.2,
            letterSpacing: `${(-0.015 + 0.05 * (1 - tp)).toFixed(4)}em`,
            opacity: tp,
            transform: `translateY(${((1 - tp) * S * 0.02).toFixed(2)}px)`,
            overflowWrap: "break-word",
          }}
        >
          {title}
        </div>
      ) : null}
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.07 : 0.05, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
