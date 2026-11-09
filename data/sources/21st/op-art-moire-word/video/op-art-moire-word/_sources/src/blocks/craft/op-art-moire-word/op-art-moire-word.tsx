// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, cancelRender, continueRender, delayRender, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, ramp, useLayout } from "../../../kit/index";
import type { Aspect } from "../../../kit/spec";
import { waitForBrandFonts } from "../../../kit/brand-fonts";
import { simplex3 } from "../_lib/noise";
import type { schema } from "./op-art-moire-word.schema";

/** The gratings come into register here; the word then fuses solid. */
const LOCK = 100;
const FUSE = 14;
const LINE_HEIGHT = 1.16;
const TRACK = -0.02;
/** Warp / vignette / glint are smooth, so they live on a coarse grid and get bilinear-sampled. */
const CELL = 8;
const DEG = Math.PI / 180;

type RGB = [number, number, number];

function toRgb(c: string): RGB | null {
  let hex = /^#([0-9a-f]{3,8})$/i.exec(c)?.[1];
  if (hex) {
    if (hex.length === 3 || hex.length === 4) hex = hex.split("").map((x) => x + x).join("");
    const n = parseInt(hex.slice(0, 6), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  const m = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(c);
  if (m) return [Number(m[1]), Number(m[2]), Number(m[3])];
  return null;
}

const mixRgb = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

function smooth(e0: number, e1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

/** Relative angle between the gratings (degrees): drifting shimmer, a converge that overshoots through zero, then register. */
function deltaAt(f: number): number {
  if (f <= 46) return 9 - 3 * easeInOut(f / 46);
  if (f <= 84) return 6 + (-1.7 - 6) * easeInOut((f - 46) / 38);
  if (f < LOCK) return -1.7 * (1 - easeInOut((f - 84) / (LOCK - 84)));
  return 0;
}

let measureCtx: CanvasRenderingContext2D | null = null;
function measure(font: string, s: string, track: number): number {
  if (!measureCtx) measureCtx = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  if (!measureCtx) return s.length * 58;
  measureCtx.font = font;
  (measureCtx as unknown as { letterSpacing: string }).letterSpacing = `${track}px`;
  return measureCtx.measureText(s).width;
}

type Box = { w: number; h: number; cap: number; cy: number };
function boxFor(aspect: Aspect, W: number, H: number): Box {
  if (aspect === "9:16") return { w: W * 0.86, h: H * 0.34, cap: H * 0.19, cy: H * 0.5 };
  if (aspect === "1:1") return { w: W * 0.84, h: H * 0.5, cap: H * 0.25, cy: H * 0.5 };
  return { w: W * 0.84, h: H * 0.56, cap: H * 0.3, cy: H * 0.5 };
}

/**
 * Two line gratings drawn per pixel. Grating B carries half a period of phase
 * shift inside the word, so while the gratings are rotated against each other
 * the word is lost in the moire fringes; as their angles converge the fringes
 * open up and the word appears where the lines interleave (solid) against the
 * field where they coincide (half-tone). Fringes are colored by the local phase
 * difference: primary where lines coincide, secondary in between, text color
 * where they interleave. At the lock the real DOM word fuses in on top.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ text, color, primary, secondary, background, fontFamily, angle, density, shimmer, seed }) => {
  const frame = useCurrentFrame();
  const { width: W, height: H, aspect, unit } = useLayout();
  const transparent = background === "transparent";
  const family = brandFontStack(fontFamily);
  const weight = /Serif|Bebas|Caveat/.test(fontFamily) ? 400 : fontFamily === "Geist" ? 600 : 700;
  const word = text.trim() || " ";

  // Fonts must be ready before canvas text (the moire mask) and measurements.
  const [handle] = useState(() => delayRender("op-art-moire-word: font"));
  const released = useRef(false);
  const [ready, setReady] = useState<string | null>(null);
  useLayoutEffect(() => {
    let on = true;
    waitForBrandFonts()
      .then(() => document.fonts.load(`${weight} 100px ${family}`, word))
      .then(() => document.fonts.ready)
      .then(() => {
        if (on) setReady(`${weight} ${family}`);
        if (!released.current) {
          released.current = true;
          continueRender(handle);
        }
      })
      .catch(cancelRender);
    return () => {
      on = false;
    };
  }, [family, weight, word, handle]);

  // Layout: one line in 16:9 unless it is long; portrait and square take a balanced two-line stack.
  const box = boxFor(aspect, W, H);
  const font100 = `${weight} 100px ${family}`;
  const layout = useMemo(() => {
    const words = word.split(/\s+/);
    const widthOf = (rows: string[]) => Math.max(...rows.map((r) => measure(font100, r, TRACK * 100)));
    const sizeFor = (rows: string[]) => Math.min(box.cap, (box.w / Math.max(1, widthOf(rows))) * 100, box.h / (rows.length * LINE_HEIGHT));
    let rows = [words.join(" ")];
    if (words.length > 1) {
      let best: string[] = rows;
      for (let k = 1; k < words.length; k++) {
        const cand = [words.slice(0, k).join(" "), words.slice(k).join(" ")];
        if (widthOf(cand) < widthOf(best)) best = cand;
      }
      const gain = aspect === "16:9" ? 1.25 : 1.04;
      if (sizeFor(best) >= sizeFor(rows) * gain) rows = best;
    }
    const minFont = aspect === "9:16" ? H * 0.03 : H * 0.018;
    const fontSize = Math.max(minFont, sizeFor(rows));
    const lh = fontSize * LINE_HEIGHT;
    const top = box.cy - (rows.length * lh) / 2;
    const widths = rows.map((r) => (measure(font100, r, TRACK * 100) * fontSize) / 100);
    return { rows, fontSize, lh, top, widths };
    // `ready` re-measures once the real font has loaded.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word, font100, box.w, box.h, box.cap, box.cy, aspect, H, ready]);

  const { rows, fontSize, lh, top, widths } = layout;
  const P = Math.max(unit * 0.95, Math.min(unit * 2.4, fontSize * 0.068 / density));
  const textBox = { x0: W / 2 - Math.max(...widths) / 2, x1: W / 2 + Math.max(...widths) / 2, y0: top, y1: top + rows.length * lh };

  const noise = useMemo(() => simplex3(`moire-${seed}`), [seed]);
  const ref = useRef<HTMLCanvasElement>(null);
  const cache = useRef<{ key: string; mask: Uint8ClampedArray | null; img: ImageData | null; grid: Float32Array | null }>({ key: "", mask: null, img: null, grid: null });

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx || !ready) return;
    const c = cache.current;

    // Word mask, softened a little so the lines bend into the letters instead of snapping.
    const maskKey = `${W}x${H}|${ready}|${rows.join("\n")}|${fontSize}|${P}`;
    if (c.key !== maskKey || !c.mask) {
      const mc = document.createElement("canvas");
      mc.width = W;
      mc.height = H;
      const m = mc.getContext("2d", { willReadFrequently: true })!;
      m.font = `${weight} ${fontSize}px ${family}`;
      (m as unknown as { letterSpacing: string }).letterSpacing = `${TRACK * fontSize}px`;
      m.textBaseline = "alphabetic";
      m.textAlign = "left";
      m.filter = `blur(${Math.max(0.8, P * 0.42)}px)`;
      m.fillStyle = color;
      rows.forEach((r, i) => {
        const tm = m.measureText(r);
        const asc = tm.fontBoundingBoxAscent;
        const desc = tm.fontBoundingBoxDescent;
        const base = top + i * lh + (lh - (asc + desc)) / 2 + asc;
        m.fillText(r, W / 2 - tm.width / 2, base);
      });
      const data = m.getImageData(0, 0, W, H).data;
      // Normalise so a translucent text color still gives a full half-period shift.
      let peak = 1;
      for (let i = 3; i < data.length; i += 4) if (data[i]! > peak) peak = data[i]!;
      if (peak < 255) for (let i = 3; i < data.length; i += 4) data[i] = Math.min(255, (data[i]! * 255) / peak);
      c.mask = data;
      c.key = maskKey;
    }
    if (!c.img || c.img.width !== W || c.img.height !== H) c.img = ctx.createImageData(W, H);
    const gw = Math.ceil(W / CELL) + 2;
    const gh = Math.ceil(H / CELL) + 2;
    if (!c.grid || c.grid.length !== gw * gh * 3) c.grid = new Float32Array(gw * gh * 3);
    const grid = c.grid;
    const mask = c.mask!;
    const img = c.img;
    const out = new Uint32Array(img.data.buffer);

    const bg = toRgb(background) ?? [0, 0, 0];
    const cText = toRgb(color) ?? [255, 255, 255];
    const cPri = toRgb(primary) ?? cText;
    const cSec = toRgb(secondary) ?? cText;

    // Fringe palette over the phase difference: coincide -> primary, quadrature -> secondary, interleave -> text.
    const LUT = new Float32Array(256 * 3);
    for (let i = 0; i < 256; i++) {
      const k = Math.cos((i / 256) * Math.PI * 2);
      const col = k >= 0 ? mixRgb(cSec, cPri, Math.pow(k, 0.8)) : mixRgb(cSec, cText, Math.pow(-k, 0.7));
      LUT[i * 3] = col[0];
      LUT[i * 3 + 1] = col[1];
      LUT[i * 3 + 2] = col[2];
    }

    // Motion.
    const f = frame;
    const settleTurn = 1 - Math.pow(1 - Math.min(1, f / LOCK), 2.4);
    const thA = (angle - 38 * (1 - settleTurn)) * DEG;
    const thB = thA + deltaAt(f) * DEG;
    const shift = 0.5 * easeInOut(ramp(f, [12, 64], [0, 1]));
    const crawl = f * 0.011;
    const flowMain = shimmer * 2.6 * (1 - easeInOut(ramp(f, [28, 96], [0, 1])));
    const flowRes = shimmer * 1.5 * easeInOut(ramp(f, [64, 126], [0, 1]));
    const fadeIn = 0.3 + 0.7 * easeInOut(ramp(f, [0, 16], [0, 1]));
    // Lock shockwave: one fringe ring leaves the word's outline and runs out to the frame edge.
    const ringAge = f - LOCK;
    const ringAmp = ringAge < 0 ? 0 : 0.5 * ramp(ringAge, [0, 3], [0, 1]) * Math.exp(-ringAge / 20);
    const ringR = P * 2 + Math.max(0, ringAge) * Math.min(W, H) * 0.03;
    const ringW = Math.min(W, H) * 0.06;
    const S = Math.min(W, H) * 0.5;
    const tz = f * 0.011;
    const cx = W / 2, cy = H / 2;
    const reach = Math.min(W, H) * 0.36;

    for (let gy = 0; gy < gh; gy++) {
      for (let gx = 0; gx < gw; gx++) {
        const x = gx * CELL, y = gy * CELL;
        const nx = x / S, ny = y / S;
        const n1 = noise(nx * 0.9, ny * 0.9, tz) + 0.45 * noise(nx * 2.1 + 7.3, ny * 2.1 - 3.1, tz * 1.7);
        // Distance from the word block: the residual flow never touches the letters.
        const dx = Math.max(textBox.x0 - P * 2 - x, 0, x - textBox.x1 - P * 2);
        const dy = Math.max(textBox.y0 - P * 2 - y, 0, y - textBox.y1 - P * 2);
        const dist = Math.hypot(dx, dy);
        const away = smooth(0, reach, dist);
        const rd = dist - ringR;
        const ring = ringAmp > 0 ? ringAmp * Math.exp(-(rd * rd) / (ringW * ringW)) : 0;
        const warp = n1 * (flowMain + flowRes * away) + ring;
        // Elliptical edge: a vignette on solid backdrops, a full fade to nothing when transparent.
        const ex = (x - cx) / (W * 0.5), ey = (y - cy) / (H * 0.5);
        const r = Math.sqrt(ex * ex + ey * ey);
        const edge = transparent ? 1 - smooth(0.62, 1.0, r) : 1 - 0.42 * smooth(0.55, 1.35, r);
        const g = ring * 1.2;
        const o = (gy * gw + gx) * 3;
        grid[o] = warp;
        grid[o + 1] = edge * fadeIn;
        grid[o + 2] = g;
      }
    }

    const caX = Math.cos(thA) / P, saX = Math.sin(thA) / P;
    const cbX = Math.cos(thB) / P, sbX = Math.sin(thB) / P;
    const hw0 = P * 0.25;
    const [bR, bG, bB] = bg;
    const [tR, tG, tB] = cText;
    const rw = new Float32Array(gw), rk = new Float32Array(gw), rg = new Float32Array(gw);
    const INV = 1 / CELL;
    for (let y = 0; y < H; y++) {
      const gyf = y * INV;
      const gy0 = gyf | 0;
      const fy = gyf - gy0;
      // Blend the two grid rows once per scanline; pixels then only lerp along x.
      for (let gx = 0; gx < gw; gx++) {
        const o0 = (gy0 * gw + gx) * 3, o1 = o0 + gw * 3;
        rw[gx] = grid[o0]! + (grid[o1]! - grid[o0]!) * fy;
        rk[gx] = grid[o0 + 1]! + (grid[o1 + 1]! - grid[o0 + 1]!) * fy;
        rg[gx] = grid[o0 + 2]! + (grid[o1 + 2]! - grid[o0 + 2]!) * fy;
      }
      const yy = y - cy;
      const uA0 = -cx * caX + yy * saX + crawl;
      const uB0 = -cx * cbX + yy * sbX + crawl;
      let p = y * W;
      for (let x = 0; x < W; x++, p++) {
        const gx0 = (x * INV) | 0;
        const fx = x * INV - gx0;
        const warp = rw[gx0]! + (rw[gx0 + 1]! - rw[gx0]!) * fx;
        const k = rk[gx0]! + (rk[gx0 + 1]! - rk[gx0]!) * fx;
        const g = rg[gx0]! + (rg[gx0 + 1]! - rg[gx0]!) * fx;
        const m = mask[p * 4 + 3]! / 255;

        const uA = uA0 + x * caX;
        const uB = uB0 + x * cbX + shift * m + warp;
        const fA = uA - Math.floor(uA);
        const fB = uB - Math.floor(uB);
        const hw = hw0 * (1 + g * 0.55);
        const dA = (fA < 0.5 ? fA : 1 - fA) * P;
        const dB = (fB < 0.5 ? fB : 1 - fB) * P;
        let a = hw - dA + 0.5;
        a = a < 0 ? 0 : a > 1 ? 1 : a;
        let b = hw - dB + 0.5;
        b = b < 0 ? 0 : b > 1 ? 1 : b;
        let cov = a + b;
        if (cov > 1) cov = 1;
        cov *= k;

        let d = fA - fB;
        d -= Math.floor(d);
        const li = ((d * 256) | 0) & 255;
        const gl = g * 0.55;
        const lr = LUT[li * 3]! + (tR - LUT[li * 3]!) * gl;
        const lg = LUT[li * 3 + 1]! + (tG - LUT[li * 3 + 1]!) * gl;
        const lb = LUT[li * 3 + 2]! + (tB - LUT[li * 3 + 2]!) * gl;

        if (transparent) {
          out[p] = (((cov * 255) | 0) << 24) | ((lb | 0) << 16) | ((lg | 0) << 8) | (lr | 0);
        } else {
          const r = bR + (lr - bR) * cov;
          const gg = bG + (lg - bG) * cov;
          const bb = bB + (lb - bB) * cov;
          out[p] = (255 << 24) | ((bb | 0) << 16) | ((gg | 0) << 8) | (r | 0);
        }
      }
    }
    ctx.putImageData(img, 0, 0);
  }, [frame, ready, W, H, rows, fontSize, lh, top, P, weight, family, background, color, primary, secondary, angle, shimmer, noise, transparent, textBox.x0, textBox.x1, textBox.y0, textBox.y1]);

  const fuse = easeInOut(ramp(frame, [LOCK, LOCK + FUSE], [0, 1]));

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background, overflow: "hidden" }}>
      <canvas ref={ref} width={W} height={H} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      <div
        data-21st-slot="text"
        style={{
          position: "absolute",
          left: 0,
          top,
          width: W,
          fontFamily: family,
          fontWeight: weight,
          fontSize,
          lineHeight: LINE_HEIGHT,
          letterSpacing: `${TRACK}em`,
          textAlign: "center",
          whiteSpace: "nowrap",
          color,
          opacity: fuse,
        }}
      >
        {rows.map((r, i) => (
          <div key={i} style={{ height: lh }}>
            {r}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
