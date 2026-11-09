// Built with Remotion - https://remotion.pro/license
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, Img, continueRender, delayRender, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, easeOut, luminance, ramp, useLayout, waitForBrandFonts, withAlpha } from "../../../kit/index";
import { rng, simplex3 } from "../_lib/noise";
import { meta } from "./anamorphic-alignment.meta";
import type { schema } from "./anamorphic-alignment.schema";

type Props = z.infer<typeof schema>;
type V3 = [number, number, number];

/** Frame the camera first reaches the viewpoint and every shard lines up. */
const LOCK = meta.timing.markers.lock ?? 108;
const WEIGHT = 600;
const LH = 1.18;
const TRACK = -0.025;
const DUST = 150;
const FRAGMENTS = 16;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='7' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const mul = (a: V3, k: number): V3 => [a[0] * k, a[1] * k, a[2] * k];
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = (a: V3): V3 => mul(a, 1 / Math.max(1e-9, Math.hypot(a[0], a[1], a[2])));
const smooth = (x: number) => { const t = Math.max(0, Math.min(1, x)); return t * t * (3 - 2 * t); };

/** Underdamped step response that first crosses 1 at t = 1 (a fraction of a percent of overshoot): the camera's "click" into the viewpoint. */
const Z = 0.88;
const SQ = Math.sqrt(1 - Z * Z);
const WN = (Math.PI - Math.atan(SQ / Z)) / SQ;
function stepResponse(t: number): number {
  if (t <= 0) return 0;
  const wd = WN * SQ;
  return 1 - Math.exp(-Z * WN * t) * (Math.cos(wd * t) + ((Z * WN) / wd) * Math.sin(wd * t));
}

/** Camera progress: slow drift, a committed sweep, a hair of overshoot, then exactly 1 (held frames carry no residue). */
function cameraProgress(frame: number): number {
  const u = frame / LOCK;
  const tau = u < 1 ? Math.pow(u, 1.7) : 1 + 1.7 * (u - 1);
  const s = stepResponse(tau);
  return 1 - (1 - s) * (1 - smooth(ramp(frame, [LOCK + 2, LOCK + 13], [0, 1])));
}

let measureCtx: CanvasRenderingContext2D | null = null;
function measure(text: string, stack: string): number {
  if (!measureCtx) measureCtx = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  const ctx = measureCtx!;
  ctx.font = `${WEIGHT} 100px ${stack}`;
  (ctx as unknown as { letterSpacing: string }).letterSpacing = `${TRACK * 100}px`;
  return ctx.measureText(text).width;
}

/** Best two-line split by measured width (balanced), or the whole string. */
function splitLines(text: string, stack: string, two: boolean): string[] {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (!two || words.length < 2) return [text.trim()];
  let best: string[] = [text.trim()];
  let bestW = Infinity;
  for (let i = 1; i < words.length; i++) {
    const a = words.slice(0, i).join(" ");
    const b = words.slice(i).join(" ");
    const w = Math.max(measure(a, stack), measure(b, stack));
    if (w < bestW) { bestW = w; best = [a, b]; }
  }
  return best;
}

type Shard = {
  /** Source triangle in source-canvas px. */
  uv: [number, number, number, number, number, number];
  /** 0..1 depth draw: where along its sight line the shard floats. */
  t: number;
  cx: number;
  cy: number;
  ray: boolean;
};

type Assets = { img: HTMLImageElement | null; readable: boolean };

function loadImage(src: string, cors: boolean): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    if (cors) img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`logo failed: ${src}`));
    img.src = src;
  });
}

/**
 * Anamorphic alignment: the mark is cut into shards and each shard is pushed
 * along its own sight line from one viewpoint (moved in depth, scaled by
 * (D + z) / D), so the projection stays exact from that one camera pose only.
 * Nothing moves but the camera: it flies in off-axis, and the scattered
 * shards click into the mark at the exact frame it reaches the viewpoint.
 */
export const Component: React.FC<Props> = ({ logo, title, caption, color, primary, secondary, background, fontFamily, bodyFontFamily, shards, depth, grain }) => {
  const frame = useCurrentFrame();
  const { width: W, height: H, aspect, unit } = useLayout();
  const transparent = background === "transparent";
  const dark = transparent ? luminance(color) > 0.5 : luminance(background) < 0.4;
  const headStack = brandFontStack(fontFamily);
  const bodyStack = brandFontStack(bodyFontFamily);

  const [assets, setAssets] = useState<Assets | null>(null);
  const [handle] = useState(() => delayRender("anamorphic-alignment fonts and logo", { timeoutInMilliseconds: 60000 }));
  useEffect(() => {
    let alive = true;
    (async () => {
      await waitForBrandFonts();
      await Promise.all([document.fonts.load(`${WEIGHT} 100px ${headStack}`), document.fonts.load(`500 40px ${bodyStack}`)]);
      let img: HTMLImageElement | null = null;
      let readable = false;
      if (logo) {
        try { img = await loadImage(logo, true); readable = true; } catch {
          try { img = await loadImage(logo, false); } catch { img = null; }
        }
      }
      if (alive) setAssets({ img, readable });
    })()
      .catch(() => { if (alive) setAssets({ img: null, readable: false }); })
      .finally(() => continueRender(handle));
    return () => { alive = false; };
  }, [logo, headStack, bodyStack, handle]);

  const mode: "logo" | "text" | "glyph" = assets?.img ? "logo" : title.trim() ? "text" : "glyph";

  // ---------- Layout (one per aspect, not a scaled copy) ----------
  const L = useMemo(() => {
    if (!assets) return null;
    const portrait = aspect === "9:16";
    const square = aspect === "1:1";
    const minFs = H * (portrait ? 0.031 : 0.0186);
    const capFs = caption ? Math.max(minFs, Math.min(H * (portrait ? 0.034 : square ? 0.034 : 0.03), W * 0.05)) : 0;
    const capW = W * (portrait ? 0.84 : square ? 0.8 : 0.6);
    const capLines = caption ? Math.max(1, Math.ceil((caption.length * 0.52 * capFs) / capW)) : 0;
    const capH = capLines * capFs * 1.35;
    let lines: string[] = [];
    let fs = 0;
    let markW = 0;
    let markH = 0;
    let titleFs = 0;
    let titleH = 0;
    let gap = 0;
    if (mode === "text") {
      const two = (portrait && title.length > 8) || (square && title.length > 13);
      lines = splitLines(title, headStack, two);
      const w100 = Math.max(...lines.map((l) => measure(l, headStack)), 1);
      const maxW = W * (portrait ? 0.84 : square ? 0.82 : 0.74);
      const maxH = H * (portrait ? 0.34 : square ? 0.3 : 0.27);
      fs = Math.max(minFs, Math.min((maxW / w100) * 100, maxH / (lines.length * LH)));
      markW = (w100 * fs) / 100;
      markH = lines.length * fs * LH;
      gap = 0;
    } else if (mode === "logo") {
      const img = assets.img!;
      const nw = Math.max(1, img.naturalWidth || 512);
      const nh = Math.max(1, img.naturalHeight || 512);
      const bw = W * (portrait ? 0.6 : square ? 0.5 : 0.32);
      const bh = H * (portrait ? 0.2 : square ? 0.3 : 0.38);
      const k = Math.min(bw / nw, bh / nh);
      markW = nw * k;
      markH = nh * k;
      if (title.trim()) {
        const w100 = measure(title.trim(), headStack);
        titleFs = Math.max(minFs, Math.min(((W * 0.84) / w100) * 100, H * (portrait ? 0.05 : 0.075)));
        titleH = titleFs * LH * Math.max(1, Math.ceil(((w100 * titleFs) / 100) / (W * 0.84)));
      }
      gap = Math.max(markH * 0.14, H * 0.03);
    } else {
      markW = markH = Math.min(W, H) * 0.3;
      gap = H * 0.04;
    }
    // The punch bar under the title: a brand-colored rule that the assembled title lands on.
    const refFs = mode === "text" ? fs : titleFs || H * 0.06;
    const barH = Math.round(Math.max(unit * 0.6, refFs * 0.07));
    const barW = Math.round(Math.min(W * (portrait ? 0.4 : 0.22), Math.max(markW * 0.28, unit * 16)));
    const ruleGap = mode === "text" ? fs * 0.12 : Math.max(H * 0.024, gap * 0.6);
    const capGap = caption ? Math.max(refFs * 0.2, H * 0.032) : 0;
    const below = (titleH ? gap + titleH : 0) + ruleGap + barH + (caption ? capGap + capH : 0);
    const total = markH + below;
    const center = H * (portrait ? 0.48 : 0.5);
    const oy = Math.round(center - total / 2);
    const ox = Math.round((W - markW) / 2);
    const titleTop = oy + markH + gap;
    const barTop = Math.round(oy + markH + (titleH ? gap + titleH : 0) + ruleGap);
    const capTop = barTop + barH + capGap;
    return { lines, fs, markW, markH, ox, oy, titleFs, titleTop, capFs, capTop, capW, minFs, barH, barW, barTop };
  }, [assets, aspect, W, H, mode, title, caption, headStack, unit]);

  // ---------- Source textures + shard cut (once per content) ----------
  const src = useMemo(() => {
    if (!assets || !L) return null;
    const pad = mode === "text" ? Math.ceil(L.fs * 0.22) : Math.ceil(unit * 0.6);
    const sw = Math.ceil(L.markW + pad * 2);
    const sh = Math.ceil(L.markH + pad * 2);
    const mk = () => { const c = document.createElement("canvas"); c.width = sw; c.height = sh; return c; };
    const ink = mk();
    const glow = mk();
    const ictx = ink.getContext("2d", { willReadFrequently: true })!;
    const gctx = glow.getContext("2d", { willReadFrequently: true })!;
    const grad = (ctx: CanvasRenderingContext2D) => {
      const g = ctx.createLinearGradient(0, sh, sw, 0);
      g.addColorStop(0, primary);
      g.addColorStop(1, secondary);
      return g;
    };
    const paint = (ctx: CanvasRenderingContext2D, fill: string | CanvasGradient) => {
      if (mode === "text") {
        ctx.font = `${WEIGHT} ${L.fs}px ${headStack}`;
        (ctx as unknown as { letterSpacing: string }).letterSpacing = `${TRACK * L.fs}px`;
        ctx.textAlign = "center";
        ctx.textBaseline = "alphabetic";
        ctx.fillStyle = fill;
        L.lines.forEach((line, i) => {
          const m = ctx.measureText(line);
          const a = m.fontBoundingBoxAscent;
          const d = m.fontBoundingBoxDescent;
          const y = pad + i * L.fs * LH + (L.fs * LH - (a + d)) / 2 + a;
          ctx.fillText(line, sw / 2, y);
        });
      } else if (mode === "logo") {
        ctx.drawImage(assets.img!, pad, pad, L.markW, L.markH);
        ctx.globalCompositeOperation = "source-in";
        if (fill !== "keep") { ctx.fillStyle = fill; ctx.fillRect(0, 0, sw, sh); }
        ctx.globalCompositeOperation = "source-over";
      } else {
        const r = L.markW / 2;
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(sw / 2, sh / 2, r * 0.98, 0, Math.PI * 2);
        ctx.arc(sw / 2, sh / 2, r * 0.8, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(sw / 2, sh / 2, r * 0.42, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    paint(ictx, mode === "logo" ? "keep" : color);
    paint(gctx, grad(gctx));

    let data: Uint8ClampedArray | null = null;
    if (mode !== "logo" || assets.readable) {
      try { data = ictx.getImageData(0, 0, sw, sh).data; } catch { data = null; }
    }
    // Jittered grid -> triangles. Neighbours share vertices, so the shards tile the mark exactly.
    const area = L.markW * L.markH;
    const c = Math.max(unit * 1.2, Math.sqrt((area * (mode === "text" ? 1.1 : 1.4)) / shards));
    const nx = Math.max(2, Math.round(sw / c));
    const ny = Math.max(1, Math.round(sh / c));
    const cw = sw / nx;
    const chh = sh / ny;
    const r = rng(`anamorphic-${shards}-${sw}x${sh}`);
    const vx: number[][] = [];
    const vy: number[][] = [];
    for (let j = 0; j <= ny; j++) {
      vx.push([]); vy.push([]);
      for (let i = 0; i <= nx; i++) {
        const jx = i > 0 && i < nx ? (r() - 0.5) * 0.72 * cw : 0;
        const jy = j > 0 && j < ny ? (r() - 0.5) * 0.72 * chh : 0;
        vx[j]!.push(i * cw + jx);
        vy[j]!.push(j * chh + jy);
      }
    }
    const noise = simplex3(`anamorphic-depth-${shards}`);
    const out: Shard[] = [];
    const covered = (u0: number, v0: number, u1: number, v1: number, u2: number, v2: number) => {
      if (!data) return true;
      const minX = Math.max(0, Math.floor(Math.min(u0, u1, u2)));
      const maxX = Math.min(sw - 1, Math.ceil(Math.max(u0, u1, u2)));
      const minY = Math.max(0, Math.floor(Math.min(v0, v1, v2)));
      const maxY = Math.min(sh - 1, Math.ceil(Math.max(v0, v1, v2)));
      const step = Math.max(1, Math.floor(c / 9));
      const s = (ax: number, ay: number, bx: number, by: number, px: number, py: number) => (bx - ax) * (py - ay) - (by - ay) * (px - ax);
      for (let y = minY; y <= maxY; y += step) {
        for (let x = minX; x <= maxX; x += step) {
          const a = s(u0, v0, u1, v1, x, y), b = s(u1, v1, u2, v2, x, y), d = s(u2, v2, u0, v0, x, y);
          if ((a >= 0 && b >= 0 && d >= 0) || (a <= 0 && b <= 0 && d <= 0)) {
            if (data[(y * sw + x) * 4 + 3]! > 24) return true;
          }
        }
      }
      return false;
    };
    for (let j = 0; j < ny; j++) {
      for (let i = 0; i < nx; i++) {
        const p00: [number, number] = [vx[j]![i]!, vy[j]![i]!];
        const p10: [number, number] = [vx[j]![i + 1]!, vy[j]![i + 1]!];
        const p01: [number, number] = [vx[j + 1]![i]!, vy[j + 1]![i]!];
        const p11: [number, number] = [vx[j + 1]![i + 1]!, vy[j + 1]![i + 1]!];
        const tris = r() < 0.5 ? [[p00, p10, p11], [p00, p11, p01]] : [[p00, p10, p01], [p10, p11, p01]];
        for (const t of tris) {
          const [a, b, d] = t as [[number, number], [number, number], [number, number]];
          if (!covered(a[0], a[1], b[0], b[1], d[0], d[1])) continue;
          const cx = (a[0] + b[0] + d[0]) / 3;
          const cy = (a[1] + b[1] + d[1]) / 3;
          const n = noise((cx / sw) * 2.2, (cy / sh) * 1.3, 0.37) * 0.5 + 0.5;
          out.push({ uv: [a[0], a[1], b[0], b[1], d[0], d[1]], t: Math.max(0, Math.min(1, 0.55 * n + 0.45 * r())), cx, cy, ray: r() < 0.55 });
        }
      }
    }
    return { ink, glow, pad, sw, sh, shards: out, band: mk() };
  }, [assets, L, mode, unit, primary, secondary, color, headStack, shards]);

  // Ambient dust: fixed points in space, so only the camera's parallax moves them.
  const dust = useMemo(() => {
    const r = rng("anamorphic-dust");
    return Array.from({ length: DUST }, (_, i) => ({ x: r() - 0.5, y: r() - 0.5, z: r(), s: Math.pow(r(), 3), c: i % 3 }));
  }, []);

  // Fragments the impact throws off the assembled title: they land around it as flat brand-colored punch marks.
  const debris = useMemo(() => {
    if (!L) return [];
    const r = rng("shatter-debris");
    const x0 = L.ox, x1 = L.ox + L.markW, y0 = L.oy, y1 = L.oy + L.markH;
    const cy = (y0 + y1) / 2;
    const out: { ax: number; ay: number; fx: number; fy: number; verts: [number, number][]; rot: number; spin: number; delay: number; second: boolean }[] = [];
    for (let i = 0; i < FRAGMENTS; i++) {
      // Left and right ends of the title, and a few off the top; the bottom belongs to the bar and caption.
      const side = i % 5 < 2 ? 0 : i % 5 < 4 ? 1 : 2;
      let ax: number, ay: number, dx: number, dy: number;
      if (side === 2) {
        ax = x0 + (0.08 + 0.84 * r()) * (x1 - x0);
        ay = y0 + L.markH * 0.12;
        dx = ((ax - (x0 + x1) / 2) / Math.max(1, x1 - x0)) * 0.9;
        dy = -1;
      } else {
        ax = side === 0 ? x0 + unit * 0.5 : x1 - unit * 0.5;
        ay = y0 + (0.12 + 0.76 * r()) * (y1 - y0);
        dx = side === 0 ? -1 : 1;
        dy = ((ay - cy) / Math.max(1, y1 - y0)) * 1.4 + (r() - 0.5) * 0.5;
      }
      const l = Math.hypot(dx, dy) || 1;
      const dist = unit * (1.8 + 6 * Math.pow(r(), 1.2));
      const size = unit * (0.75 + 2.2 * Math.pow(r(), 1.5));
      const fx = Math.max(unit * 5, Math.min(W - unit * 5, ax + (dx / l) * dist));
      const fy = Math.max(unit * 5, Math.min(H - unit * 5, ay + (dy / l) * dist));
      const a0 = r() * Math.PI * 2;
      const verts = [0, 1, 2].map((k) => {
        const ang = a0 + k * 2.09 + (r() - 0.5) * 1.1;
        const rad = size * (0.5 + 0.5 * r());
        return [Math.cos(ang) * rad, Math.sin(ang) * rad] as [number, number];
      });
      out.push({ ax, ay, fx, fy, verts, rot: (r() - 0.5) * 0.8, spin: (r() - 0.5) * 5, delay: r() * 5, second: i % 3 === 2 });
    }
    return out;
  }, [L, W, H, unit]);

  const sprites = useMemo(() => {
    const mkSprite = (col: string) => {
      const c = document.createElement("canvas");
      c.width = c.height = 64;
      const x = c.getContext("2d", { willReadFrequently: true })!;
      const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
      g.addColorStop(0, withAlpha(col, 1));
      g.addColorStop(0.35, withAlpha(col, 0.45));
      g.addColorStop(1, withAlpha(col, 0));
      x.fillStyle = g;
      x.fillRect(0, 0, 64, 64);
      return c;
    };
    return [mkSprite(primary), mkSprite(secondary), mkSprite(color)];
  }, [primary, secondary, color]);

  const mainRef = useRef<HTMLCanvasElement>(null);
  const topRef = useRef<HTMLCanvasElement>(null);
  const layersRef = useRef<HTMLCanvasElement[] | null>(null);
  const smallRef = useRef<HTMLCanvasElement | null>(null);
  const small2Ref = useRef<HTMLCanvasElement | null>(null);

  // Timeline.
  const s = cameraProgress(frame);
  const lockProg = easeInOut(ramp(frame, [LOCK - 30, LOCK - 2], [0, 1]));
  const tintProg = easeInOut(ramp(frame, [LOCK - 18, LOCK + 1], [0, 1]));
  // The DOM mark fades in UNDER the (identical, exactly aligned) shard layer, then the shards drop out.
  const reveal = ramp(frame, [LOCK + 8, LOCK + 14], [0, 1]);
  const capIn = easeOut(ramp(frame, [LOCK + 24, LOCK + 44], [0, 1]));
  const titleIn = mode === "logo" ? easeOut(ramp(frame, [LOCK + 18, LOCK + 36], [0, 1])) : reveal;

  useLayoutEffect(() => {
    const main = mainRef.current;
    const top = topRef.current;
    if (!main || !top || !src || !L) return;
    const ctx = main.getContext("2d", { willReadFrequently: true })!;
    const tctx = top.getContext("2d", { willReadFrequently: true })!;
    if (!layersRef.current) layersRef.current = [0, 1, 2].map(() => document.createElement("canvas"));
    if (!smallRef.current) smallRef.current = document.createElement("canvas");
    if (!small2Ref.current) small2Ref.current = document.createElement("canvas");
    const layers = layersRef.current;
    const small = smallRef.current;
    const small2 = small2Ref.current;
    for (const l of layers) if (l.width !== W || l.height !== H) { l.width = W; l.height = H; }
    const SW = Math.max(2, Math.round(W / 4));
    const SH = Math.max(2, Math.round(H / 4));
    if (small.width !== SW || small.height !== SH) { small.width = SW; small.height = SH; small2.width = SW; small2.height = SH; }
    // Depth of field: far, in-focus and near shards go to their own layers.
    const lctxs = layers.map((l) => l.getContext("2d", { willReadFrequently: true })!);
    const sctx = small.getContext("2d", { willReadFrequently: true })!;
    const s2ctx = small2.getContext("2d", { willReadFrequently: true })!;

    for (const c of [ctx, tctx, ...lctxs]) {
      c.setTransform(1, 0, 0, 1, 0, 0);
      c.globalAlpha = 1;
      c.globalCompositeOperation = "source-over";
      c.filter = "none";
      c.clearRect(0, 0, W, H);
    }

    // ---- Camera ----
    const portrait = aspect === "9:16";
    const square = aspect === "1:1";
    const D = 1.12 * Math.max(W, H);
    const F = D;
    const cxs = W / 2;
    const cys = H / 2;
    const zSpread = D * depth;
    const zOf = (t: number) => zSpread * (-0.4 + 1.45 * t);
    const eye: V3 = [0, 0, -D];
    const mcx = L.ox + L.markW / 2 - cxs;
    const mcy = L.oy + L.markH / 2 - cys;
    const Pz = zSpread * 0.3;
    const kP = (D + Pz) / D;
    const P: V3 = [mcx * kP, mcy * kP, Pz];
    const yaw0 = portrait ? -0.34 : square ? -0.7 : -0.86;
    const pitch0 = portrait ? 0.92 : square ? 0.56 : 0.42;
    const roll0 = portrait ? 0.3 : 0.13;
    const dolly0 = portrait ? 1.5 : 1.4;
    const q = 1 - s;
    const yaw = yaw0 * q;
    const pitch = pitch0 * q;
    const roll = roll0 * q;
    let v = sub(eye, P);
    v = [v[0] * Math.cos(yaw) + v[2] * Math.sin(yaw), v[1], -v[0] * Math.sin(yaw) + v[2] * Math.cos(yaw)];
    v = [v[0], v[1] * Math.cos(pitch) - v[2] * Math.sin(pitch), v[1] * Math.sin(pitch) + v[2] * Math.cos(pitch)];
    v = mul(v, 1 + (dolly0 - 1) * q);
    const C = add(P, v);
    const axisT: V3 = [0, 0, Pz];
    const T: V3 = add(P, mul(sub(axisT, P), s));
    const fwd = norm(sub(T, C));
    let right = norm(cross([0, 1, 0], fwd));
    let down = cross(fwd, right);
    const cr = Math.cos(roll), sr = Math.sin(roll);
    [right, down] = [add(mul(right, cr), mul(down, sr)), sub(mul(down, cr), mul(right, sr))];
    const near = D * 0.06;
    const project = (p: V3): [number, number, number] => {
      const d = sub(p, C);
      const z = dot(d, fwd);
      return [cxs + (F * dot(d, right)) / z, cys + (F * dot(d, down)) / z, z];
    };
    const distCP = Math.hypot(...sub(P, C));
    // Source px -> world point on the sight line at depth z.
    const ox = L.ox - src.pad;
    const oy = L.oy - src.pad;
    const world = (u: number, vv: number, z: number): V3 => {
      const k = (D + z) / D;
      return [(ox + u - cxs) * k, (oy + vv - cys) * k, z];
    };

    // ---- Backdrop ----
    const mx = L.ox + L.markW / 2;
    const my = L.oy + L.markH / 2;
    const flash = frame >= LOCK - 2 ? Math.exp(-Math.max(0, frame - LOCK) / 7) * ramp(frame, [LOCK - 2, LOCK], [0, 1]) : 0;
    if (!transparent) {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, W, H);
      const R = Math.max(W, H) * 0.62;
      const g = ctx.createRadialGradient(mx, my, 0, mx, my, R);
      const a = (dark ? 0.16 : 0.09) * (1 + 0.15 * flash);
      g.addColorStop(0, withAlpha(primary, a));
      g.addColorStop(0.45, withAlpha(secondary, a * 0.35));
      g.addColorStop(1, withAlpha(primary, 0));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    }
    const additive: GlobalCompositeOperation = dark ? "lighter" : "source-over";

    // ---- Dust (far half first, near half after the shards) ----
    const settleDim = 1 - 0.45 * ramp(frame, [LOCK, LOCK + 30], [0, 1]);
    const dustPts = dust.map((p) => {
      const z = -0.55 * D + p.z * 2.6 * D;
      const k = (D + z) / D;
      const w: V3 = [p.x * W * 1.7 * k, p.y * H * 1.7 * k, z];
      const [x, y, zc] = project(w);
      return { x, y, zc, p };
    });
    const drawDust = (farSide: boolean) => {
      ctx.globalCompositeOperation = additive;
      for (const d of dustPts) {
        if (d.zc < near || (d.zc > distCP) !== farSide) continue;
        const base = unit * (0.18 + 0.55 * d.p.s);
        let r = (base * D) / d.zc;
        let a = (dark ? 0.55 : 0.4) * (0.35 + 0.65 * d.p.s);
        if (d.zc < D * 0.55) { const b = 1 - d.zc / (D * 0.55); r *= 1 + 7 * b; a *= 1 - 0.75 * b; }
        a *= 1 - 0.7 * smooth((d.zc / distCP - 0.9) / 1.4);
        a *= settleDim;
        if (r < 0.4 || a < 0.01 || d.x < -r || d.y < -r || d.x > W + r || d.y > H + r) continue;
        ctx.globalAlpha = Math.min(1, a);
        ctx.drawImage(sprites[d.p.c]!, d.x - r, d.y - r, r * 2, r * 2);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };
    drawDust(true);

    // ---- Sight lines: every shard sits on a ray to the one viewpoint ----
    const rayA = 0.3 * (1 - easeInOut(ramp(frame, [LOCK - 52, LOCK - 16], [0, 1])));
    if (rayA > 0.005) {
      ctx.globalCompositeOperation = additive;
      ctx.lineWidth = Math.max(1, unit * 0.07);
      for (const sh of src.shards) {
        if (!sh.ray) continue;
        const z = zOf(sh.t);
        let za = z + D * 0.18;
        let zb = z - D * 0.55;
        const pa = world(sh.cx, sh.cy, za);
        const pb = world(sh.cx, sh.cy, zb);
        let A = project(pa);
        let B = project(pb);
        if (A[2] < near && B[2] < near) continue;
        if (B[2] < near || A[2] < near) {
          // Clip at the near plane: depth is linear in z along the ray.
          const tcut = (near * 1.05 - A[2]) / (B[2] - A[2]);
          const zc = za + (zb - za) * tcut;
          if (B[2] < near) { zb = zc; B = project(world(sh.cx, sh.cy, zb)); } else { za = zc; A = project(world(sh.cx, sh.cy, za)); }
        }
        const fogA = 1 - 0.7 * smooth(((A[2] + B[2]) / 2 / distCP - 0.7) / 1.2);
        const g = ctx.createLinearGradient(A[0], A[1], B[0], B[1]);
        g.addColorStop(0, withAlpha(primary, 0));
        g.addColorStop(0.25, withAlpha(primary, rayA * fogA));
        g.addColorStop(1, withAlpha(secondary, 0));
        ctx.strokeStyle = g;
        ctx.beginPath();
        ctx.moveTo(A[0], A[1]);
        ctx.lineTo(B[0], B[1]);
        ctx.stroke();
      }
      ctx.globalCompositeOperation = "source-over";
    }

    // ---- The viewpoint itself: a small reticle where all sight lines meet ----
    const E = project(eye);
    const reticleA = (1 - lockProg) * smooth((E[2] - D * 0.35) / (D * 0.5));
    if (reticleA > 0.01 && E[2] > near) {
      const rr = Math.max(unit * 0.5, (unit * 1.1 * D) / E[2]);
      ctx.globalAlpha = reticleA;
      ctx.strokeStyle = primary;
      ctx.lineWidth = Math.max(1, unit * 0.1);
      ctx.beginPath();
      ctx.arc(E[0], E[1], rr, 0, Math.PI * 2);
      ctx.moveTo(E[0] - rr * 2.2, E[1]); ctx.lineTo(E[0] - rr * 1.35, E[1]);
      ctx.moveTo(E[0] + rr * 1.35, E[1]); ctx.lineTo(E[0] + rr * 2.2, E[1]);
      ctx.moveTo(E[0], E[1] - rr * 2.2); ctx.lineTo(E[0], E[1] - rr * 1.35);
      ctx.moveTo(E[0], E[1] + rr * 1.35); ctx.lineTo(E[0], E[1] + rr * 2.2);
      ctx.stroke();
      ctx.fillStyle = primary;
      ctx.beginPath();
      ctx.arc(E[0], E[1], rr * 0.28, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    // ---- Shards (painter's order, far first) ----
    const shardA = frame >= LOCK + 15 ? 0 : 1;
    if (shardA > 0.001) {
      const tint = 1 - tintProg;
      const fogK = 1 - lockProg;
      const Ld = norm([-0.55, -0.85, -1]);
      const n: V3 = [0, 0, -1];
      const Rf = sub(mul(n, 2 * dot(n, Ld)), Ld);
      const items = src.shards.map((sh) => {
        const z = zOf(sh.t);
        const [u0, v0, u1, v1, u2, v2] = sh.uv;
        const a = project(world(u0, v0, z));
        const b = project(world(u1, v1, z));
        const c = project(world(u2, v2, z));
        const centerW = world(sh.cx, sh.cy, z);
        return { sh, a, b, c, zc: (a[2] + b[2] + c[2]) / 3, centerW };
      });
      items.sort((p, q2) => q2.zc - p.zc);
      const edgeW = Math.max(1, unit * 0.06);
      const exp = Math.max(0.35, unit * 0.04);
      for (const it of items) {
        const { a, b, c, sh } = it;
        if (a[2] < near || b[2] < near || c[2] < near) continue;
        let alpha = 1 - fogK * 0.8 * smooth((it.zc / distCP - 0.62) / 1.15);
        alpha *= ramp(it.zc, [D * 0.08, D * 0.3], [0, 1]);
        if (alpha < 0.01) continue;
        const lctx = lctxs[it.zc > distCP * 1.12 ? 0 : it.zc < distCP * 0.62 ? 2 : 1]!;
        const [u0, v0, u1, v1, u2, v2] = sh.uv;
        const du1 = u1 - u0, dv1 = v1 - v0, du2 = u2 - u0, dv2 = v2 - v0;
        const det = du1 * dv2 - du2 * dv1;
        if (Math.abs(det) < 1e-6) continue;
        const dx1 = b[0] - a[0], dy1 = b[1] - a[1], dx2 = c[0] - a[0], dy2 = c[1] - a[1];
        const m11 = (dx1 * dv2 - dx2 * dv1) / det;
        const m21 = (dx2 * du1 - dx1 * du2) / det;
        const m12 = (dy1 * dv2 - dy2 * dv1) / det;
        const m22 = (dy2 * du1 - dy1 * du2) / det;
        const e = a[0] - m11 * u0 - m21 * v0;
        const f = a[1] - m12 * u0 - m22 * v0;
        // Clip to the triangle grown by a fraction of a pixel so seams never show.
        const gx = (a[0] + b[0] + c[0]) / 3;
        const gy = (a[1] + b[1] + c[1]) / 3;
        const grow = (p: [number, number, number]) => {
          const dx = p[0] - gx, dy = p[1] - gy;
          const l = Math.hypot(dx, dy) || 1;
          return [p[0] + (dx / l) * exp, p[1] + (dy / l) * exp] as const;
        };
        const A2 = grow(a), B2 = grow(b), C2 = grow(c);
        lctx.save();
        lctx.beginPath();
        lctx.moveTo(A2[0], A2[1]);
        lctx.lineTo(B2[0], B2[1]);
        lctx.lineTo(C2[0], C2[1]);
        lctx.closePath();
        lctx.clip();
        lctx.setTransform(m11, m12, m21, m22, e, f);
        lctx.globalAlpha = alpha;
        lctx.drawImage(src.ink, 0, 0);
        const gi = tint * (0.5 + 0.5 * sh.t);
        if (gi > 0.01) {
          lctx.globalAlpha = alpha * gi;
          lctx.drawImage(src.glow, 0, 0);
        }
        lctx.restore();
        // Glass: a hairline edge and a specular glint as the camera passes the reflection angle.
        const glassA = (1 - lockProg) * alpha;
        if (glassA > 0.01) {
          const V = norm(sub(C, it.centerW));
          const spec = Math.pow(Math.max(0, dot(Rf, V)), 42);
          lctx.beginPath();
          lctx.moveTo(a[0], a[1]);
          lctx.lineTo(b[0], b[1]);
          lctx.lineTo(c[0], c[1]);
          lctx.closePath();
          if (spec > 0.02) {
            lctx.fillStyle = withAlpha(dark ? color : primary, Math.min(0.5, spec * 0.5) * glassA);
            lctx.fill();
          }
          lctx.strokeStyle = withAlpha(primary, (0.22 + 0.6 * spec) * glassA);
          lctx.lineWidth = edgeW;
          lctx.stroke();
        }
      }

      // Bloom (dark) or a soft contact shadow (light), from a quarter-res copy of the shard layer.
      sctx.setTransform(1, 0, 0, 1, 0, 0);
      sctx.clearRect(0, 0, SW, SH);
      for (const l of layers) sctx.drawImage(l, 0, 0, SW, SH);
      s2ctx.setTransform(1, 0, 0, 1, 0, 0);
      s2ctx.filter = "none";
      s2ctx.clearRect(0, 0, SW, SH);
      s2ctx.filter = `blur(${Math.max(1, Math.round(unit * 0.9))}px)`;
      s2ctx.drawImage(small, 0, 0);
      s2ctx.filter = "none";
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      if (dark) {
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = (0.5 * (1 - 0.55 * tintProg) + 0.15 * flash) * shardA;
        ctx.drawImage(small2, 0, 0, W, H);
      } else {
        ctx.globalAlpha = 0.16 * shardA * (1 - lockProg * 0.6);
        ctx.filter = "brightness(0)";
        ctx.drawImage(small2, 0, unit * 1.2, W, H);
        ctx.filter = "none";
      }
      ctx.globalCompositeOperation = "source-over";
      const dof = 1 - lockProg;
      ctx.globalAlpha = shardA;
      layers.forEach((l, i) => {
        const b = i === 1 ? 0 : unit * (i === 0 ? 0.32 : 0.55) * dof;
        ctx.filter = b > 0.15 ? `blur(${Math.round(b * 10) / 10}px)` : "none";
        ctx.drawImage(l, 0, 0);
      });
      ctx.filter = "none";
      ctx.globalAlpha = 1;
    }

    drawDust(false);

    // ---- Lock flash ----
    if (flash > 0.01) {
      const R = Math.max(L.markW, L.markH) * 0.9;
      const g = ctx.createRadialGradient(mx, my, 0, mx, my, R);
      g.addColorStop(0, withAlpha(primary, (dark ? 0.2 : 0.12) * flash));
      g.addColorStop(1, withAlpha(primary, 0));
      ctx.globalCompositeOperation = additive;
      ctx.fillStyle = g;
      ctx.fillRect(mx - R, my - R, R * 2, R * 2);
      ctx.globalCompositeOperation = "source-over";
    }

    // ---- Over the DOM mark: registration brackets and one light pass ----
    const brIn = easeOut(ramp(frame, [LOCK - 5, LOCK + 1], [0, 1]));
    const brOut = 1 - ramp(frame, [LOCK + 18, LOCK + 34], [0, 1]);
    const brA = brIn * brOut;
    if (brA > 0.01) {
      const grow = 1 + 0.12 * (1 - brIn);
      const padB = Math.max(unit * 2.2, L.markH * 0.16) * grow;
      const x0 = mx - (L.markW / 2) * grow - padB, x1 = mx + (L.markW / 2) * grow + padB;
      const y0 = my - (L.markH / 2) * grow - padB, y1 = my + (L.markH / 2) * grow + padB;
      const len = Math.min(L.markW, L.markH) * 0.16 + unit;
      tctx.globalAlpha = brA * 0.9;
      tctx.strokeStyle = primary;
      tctx.lineWidth = Math.max(1.5, unit * 0.16);
      tctx.lineCap = "square";
      tctx.beginPath();
      for (const [x, y, sx, sy] of [[x0, y0, 1, 1], [x1, y0, -1, 1], [x0, y1, 1, -1], [x1, y1, -1, -1]] as const) {
        tctx.moveTo(x, y + sy * len); tctx.lineTo(x, y); tctx.lineTo(x + sx * len, y);
      }
      tctx.stroke();
      tctx.globalAlpha = 1;
    }
    const sweepP = ramp(frame, [LOCK + 10, LOCK + 42], [0, 1]);
    if (sweepP > 0 && sweepP < 1) {
      const band = src.band;
      const bctx = band.getContext("2d", { willReadFrequently: true })!;
      bctx.setTransform(1, 0, 0, 1, 0, 0);
      bctx.globalCompositeOperation = "source-over";
      bctx.clearRect(0, 0, src.sw, src.sh);
      bctx.drawImage(src.ink, 0, 0);
      bctx.globalCompositeOperation = "source-in";
      const bx = (-0.3 + 1.6 * easeInOut(sweepP)) * src.sw;
      const wB = Math.max(src.sh * 0.5, src.sw * 0.09);
      const g = bctx.createLinearGradient(bx - wB, src.sh, bx + wB, 0);
      g.addColorStop(0, withAlpha(primary, 0));
      g.addColorStop(0.5, withAlpha(primary, 0.95));
      g.addColorStop(1, withAlpha(secondary, 0));
      bctx.fillStyle = g;
      bctx.fillRect(0, 0, src.sw, src.sh);
      // The light catches the seams it was assembled from, only inside the band.
      bctx.globalCompositeOperation = "source-atop";
      bctx.strokeStyle = withAlpha(color, 0.4);
      bctx.lineWidth = Math.max(1, unit * 0.09);
      bctx.beginPath();
      for (const sh of src.shards) {
        const [u0, v0, u1, v1, u2, v2] = sh.uv;
        bctx.moveTo(u0, v0); bctx.lineTo(u1, v1); bctx.lineTo(u2, v2); bctx.closePath();
      }
      bctx.stroke();
      bctx.globalCompositeOperation = "source-over";
      tctx.globalAlpha = Math.sin(Math.PI * sweepP);
      tctx.drawImage(band, ox, oy);
      if (dark) {
        tctx.globalCompositeOperation = "lighter";
        tctx.filter = `blur(${Math.round(unit * 0.8)}px)`;
        tctx.globalAlpha = 0.7 * Math.sin(Math.PI * sweepP);
        tctx.drawImage(band, ox, oy);
        tctx.filter = "none";
        tctx.globalCompositeOperation = "source-over";
      }
      tctx.globalAlpha = 1;
    }

    // ---- Impact: fragments fly off the locked title and land as punch marks; the bar wipes in under it ----
    for (const d of debris) {
      const f0 = LOCK + 1 + d.delay;
      if (frame < f0) continue;
      const k = easeOut(ramp(frame, [f0, f0 + 22], [0, 1]));
      const x = d.ax + (d.fx - d.ax) * k;
      const y = d.ay + (d.fy - d.ay) * k;
      const sc = 0.35 + 0.65 * k;
      const rot = d.rot + d.spin * (1 - k);
      tctx.setTransform(sc * Math.cos(rot), sc * Math.sin(rot), -sc * Math.sin(rot), sc * Math.cos(rot), x, y);
      tctx.globalAlpha = ramp(frame, [f0, f0 + 3], [0, 1]);
      tctx.fillStyle = d.second ? secondary : primary;
      tctx.beginPath();
      tctx.moveTo(d.verts[0]![0], d.verts[0]![1]);
      tctx.lineTo(d.verts[1]![0], d.verts[1]![1]);
      tctx.lineTo(d.verts[2]![0], d.verts[2]![1]);
      tctx.closePath();
      tctx.fill();
    }
    tctx.setTransform(1, 0, 0, 1, 0, 0);
    tctx.globalAlpha = 1;
    const barP = easeOut(ramp(frame, [LOCK + 10, LOCK + 30], [0, 1]));
    if (barP > 0) {
      const bx = W / 2 - L.barW / 2;
      const main = L.barW * 0.74;
      const tipGap = Math.max(2, L.barH * 0.7);
      tctx.fillStyle = primary;
      tctx.fillRect(bx, L.barTop, main * barP, L.barH);
      const tipP = ramp(barP, [0.55, 1], [0, 1]);
      if (tipP > 0) {
        tctx.fillStyle = secondary;
        tctx.fillRect(bx + main + tipGap, L.barTop, (L.barW - main - tipGap) * tipP, L.barH);
      }
    }
  }, [frame, src, L, W, H, aspect, unit, depth, dust, debris, sprites, transparent, background, primary, secondary, color, dark, s, lockProg, tintProg, reveal]);

  if (!assets || !L) return <AbsoluteFill style={{ background: transparent ? undefined : background }} />;

  const mask = transparent ? "radial-gradient(ellipse 70% 70% at 50% 50%, #000 62%, transparent 100%)" : undefined;
  const glowShadow = dark ? `0 0 ${Math.round(L.fs * 0.3 + unit)}px ${withAlpha(primary, 0.16 + 0.16 * (1 - ramp(frame, [LOCK + 16, LOCK + 50], [0, 1])))}` : undefined;

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background, overflow: "hidden" }}>
      <canvas ref={mainRef} width={W} height={H} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", maskImage: mask, WebkitMaskImage: mask }} />
      {mode === "text" ? (
        <div
          data-21st-slot="title"
          style={{
            position: "absolute",
            left: 0,
            top: L.oy,
            width: W,
            opacity: titleIn,
            fontFamily: headStack,
            fontWeight: WEIGHT,
            fontSize: L.fs,
            lineHeight: LH,
            letterSpacing: `${TRACK}em`,
            color,
            textAlign: "center",
            textShadow: glowShadow,
          }}
        >
          {L.lines.map((line, i) => (
            <div key={i} style={{ height: L.fs * LH, whiteSpace: "pre" }}>{line}</div>
          ))}
        </div>
      ) : null}
      {mode === "logo" && assets.img ? (
        <Img
          data-21st-slot="logo"
          src={logo}
          style={{ position: "absolute", left: L.ox, top: L.oy, width: L.markW, height: L.markH, opacity: reveal, display: "block" }}
        />
      ) : null}
      {mode === "logo" && title.trim() ? (
        <div
          data-21st-slot="title"
          style={{
            position: "absolute",
            left: W * 0.08,
            width: W * 0.84,
            top: L.titleTop,
            opacity: titleIn,
            transform: `translateY(${Math.round((1 - titleIn) * unit * 2 * 100) / 100}px)`,
            fontFamily: headStack,
            fontWeight: WEIGHT,
            fontSize: L.titleFs,
            lineHeight: LH,
            letterSpacing: `${TRACK}em`,
            color,
            textAlign: "center",
            overflowWrap: "anywhere",
          }}
        >
          {title}
        </div>
      ) : null}
      {caption ? (
        <div
          data-21st-slot="caption"
          style={{
            position: "absolute",
            left: (W - L.capW) / 2,
            width: L.capW,
            top: L.capTop,
            opacity: capIn,
            transform: `translateY(${Math.round((1 - capIn) * unit * 2.4 * 100) / 100}px)`,
            fontFamily: bodyStack,
            fontWeight: 500,
            fontSize: L.capFs,
            lineHeight: 1.35,
            letterSpacing: "0.01em",
            color: withAlpha(color, 0.62),
            textAlign: "center",
            overflowWrap: "anywhere",
          }}
        >
          {caption}
        </div>
      ) : null}
      <canvas ref={topRef} width={W} height={H} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.06 : 0.05, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
