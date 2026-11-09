// Built with Remotion - https://remotion.pro/license
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, continueRender, delayRender, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { useLayout } from "../../../kit/index";
import { fbm3, rng, simplex3 } from "../_lib/noise";
import { SAMPLE_SCREENSHOT } from "../_lib/samples";
import type { schema } from "./engraved-line-render.schema";

type Props = z.infer<typeof schema>;
type RGBA = [number, number, number, number];

const TAU = Math.PI * 2;
/** The shared sample page with explicit pixel size: canvas source rects need a real intrinsic size. */
const SAMPLE = SAMPLE_SCREENSHOT.replace("%3Csvg%20", "%3Csvg%20width%3D%221600%22%20height%3D%221000%22%20");
/** Beats (frames at 30 fps). */
const DRAW_END = 50;
const WAVE0 = 40;
const WAVE1 = 106;
const DIS0 = 96;
const DIS1 = 138;
const SETTLE = 140;

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (x: number) => {
  const t = clamp01(x);
  return t * t * (3 - 2 * t);
};
const inOut = (x: number) => {
  const t = clamp01(x);
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};
const outCubic = (x: number) => 1 - Math.pow(1 - clamp01(x), 3);

function parse(c: string): RGBA {
  let hex = /^#([0-9a-f]{3,8})$/i.exec(c)?.[1];
  if (hex) {
    if (hex.length === 3) hex = hex.split("").map((k) => k + k).join("");
    const n = parseInt(hex.slice(0, 6), 16);
    const a = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255, a];
  }
  const m = /^rgba?\(([^)]+)\)$/.exec(c);
  if (m) {
    const p = m[1]!.split(/[\s,/]+/).filter(Boolean).map(parseFloat);
    return [p[0] ?? 0, p[1] ?? 0, p[2] ?? 0, p[3] ?? 1];
  }
  return [0, 0, 0, 0];
}
const css = (c: RGBA, a = 1) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${(c[3] * a).toFixed(3)})`;
const mix = (a: RGBA, b: RGBA, t: number): RGBA => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t, a[3] + (b[3] - a[3]) * t];
const lum = (c: RGBA) => (0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]) / 255;

function canvas2d(w: number, h: number): [HTMLCanvasElement, CanvasRenderingContext2D] | null {
  if (typeof document === "undefined") return null;
  const cv = document.createElement("canvas");
  cv.width = Math.max(1, w);
  cv.height = Math.max(1, h);
  const ctx = cv.getContext("2d", { willReadFrequently: true });
  return ctx ? [cv, ctx] : null;
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

/** Points on a rounded rect, evenly spaced by arc length, starting at the top center, with outward normals. */
function perimeter(x: number, y: number, w: number, h: number, r: number, count: number) {
  const segs: { len: number; at: (t: number) => [number, number, number, number] }[] = [];
  const line = (x0: number, y0: number, x1: number, y1: number, nx: number, ny: number) =>
    segs.push({ len: Math.hypot(x1 - x0, y1 - y0), at: (t) => [x0 + (x1 - x0) * t, y0 + (y1 - y0) * t, nx, ny] });
  const arc = (cx: number, cy: number, a0: number) =>
    segs.push({ len: (Math.PI / 2) * r, at: (t) => { const a = a0 + (Math.PI / 2) * t; return [cx + Math.cos(a) * r, cy + Math.sin(a) * r, Math.cos(a), Math.sin(a)]; } });
  line(x + w / 2, y, x + w - r, y, 0, -1);
  arc(x + w - r, y + r, -Math.PI / 2);
  line(x + w, y + r, x + w, y + h - r, 1, 0);
  arc(x + w - r, y + h - r, 0);
  line(x + w - r, y + h, x + r, y + h, 0, 1);
  arc(x + r, y + h - r, Math.PI / 2);
  line(x, y + h - r, x, y + r, -1, 0);
  arc(x + r, y + r, Math.PI);
  line(x + r, y, x + w / 2, y, 0, -1);
  const total = segs.reduce((s, g) => s + g.len, 0);
  const pts: [number, number, number, number][] = [];
  let si = 0;
  let acc = 0;
  for (let i = 0; i <= count; i++) {
    const d = (i / count) * total;
    while (si < segs.length - 1 && d > acc + segs[si]!.len) acc += segs[si++]!.len;
    const g = segs[si]!;
    pts.push(g.at(g.len ? clamp01((d - acc) / g.len) : 0));
  }
  return { pts, total };
}

/**
 * Tone plus a heavily blurred copy of it used as a height map: lines lift over
 * bright (dark theme) or inked (light theme) masses and curve around them like
 * an engraved relief. Blur radius spans several rows, so neighbours never cross.
 */
function withHeight(v: Float32Array, cols: number, rows: number, pitch: number, sx: number) {
  const ry = 6;
  const rx = Math.max(2, Math.round((ry * pitch) / sx));
  let a = Float32Array.from(v);
  let b = new Float32Array(v.length);
  for (let pass = 0; pass < 3; pass++) {
    for (let r = 0; r < rows; r++) {
      let acc = 0;
      let n = 0;
      for (let c = -rx; c < cols + rx; c++) {
        const add = c + rx;
        if (add < cols) { acc += a[r * cols + add]!; n++; }
        const drop = c - rx - 1;
        if (drop >= 0) { acc -= a[r * cols + drop]!; n--; }
        if (c >= 0 && c < cols) b[r * cols + c] = acc / Math.max(1, n);
      }
    }
    [a, b] = [b, a];
    for (let c = 0; c < cols; c++) {
      let acc = 0;
      let n = 0;
      for (let r = -ry; r < rows + ry; r++) {
        const add = r + ry;
        if (add < rows) { acc += a[add * cols + c]!; n++; }
        const drop = r - ry - 1;
        if (drop >= 0) { acc -= a[drop * cols + c]!; n--; }
        if (r >= 0 && r < rows) b[r * cols + c] = acc / Math.max(1, n);
      }
    }
    [a, b] = [b, a];
  }
  let mean = 0;
  for (let i = 0; i < a.length; i++) mean += a[i]!;
  mean /= Math.max(1, a.length);
  for (let i = 0; i < a.length; i++) a[i] = a[i]! - mean;
  return { v, h: a };
}

/**
 * The user's image as a banknote engraving: horizontal lines swell with the
 * image's tone, cut in left to right, ripple like paper, then widen into strips
 * of the real image until it stands on its own. Canvas2D, deterministic.
 */
export const Component: React.FC<Props> = ({ screenshot, ink, accent, color, background, lines, wave, guilloche }) => {
  const frame = useCurrentFrame();
  const { width: W, height: H, unit: u, aspect } = useLayout();
  const ref = useRef<HTMLCanvasElement>(null);

  // ---- image loading (CORS so pixels can be read) ----
  // Empty slot: the shared sample page, so the plate reads as an engraved screenshot.
  const url = screenshot.trim() || SAMPLE;
  // cors=false: the host refused CORS, so the image is shown but its pixels cannot be read.
  const [loaded, setLoaded] = useState<{ url: string; img: HTMLImageElement | null; cors: boolean }>({ url: "", img: null, cors: true });
  // The first load blocks rendering from mount; later URL changes open their own handle.
  const [first] = useState(() => delayRender("engraved-line-render image", { timeoutInMilliseconds: 25000 }));
  const pending = useRef<number | null>(first);
  useEffect(() => {
    let alive = true;
    if (pending.current === null) pending.current = delayRender("engraved-line-render image", { timeoutInMilliseconds: 25000 });
    const im = new Image();
    im.crossOrigin = "anonymous";
    im.onload = () => alive && setLoaded({ url, img: im, cors: true });
    im.onerror = () => {
      // Retry without CORS: the plate then engraves a neutral tone and still opens onto the real image.
      const plain = new Image();
      plain.onload = () => alive && setLoaded({ url, img: plain, cors: false });
      plain.onerror = () => {
        // Unreachable image: engrave the sample page rather than an empty plate.
        const sample = new Image();
        sample.onload = () => alive && setLoaded({ url, img: sample, cors: true });
        sample.onerror = () => alive && setLoaded({ url, img: null, cors: true });
        sample.src = SAMPLE;
      };
      plain.src = url;
    };
    im.src = url;
    return () => {
      alive = false;
    };
  }, [url]);
  const ready = loaded.url === url;
  const img = ready ? loaded.img : null;
  const readable = !img || loaded.cors;

  // ---- theme ----
  const transparent = background === "transparent";
  const cBg = parse(background);
  const cText = parse(color);
  const cInk = parse(ink);
  const cAcc = parse(accent);
  const dark = transparent ? lum(cText) > 0.5 : lum(cBg) < 0.42;

  // ---- layout: the plate takes the image's shape, clamped per aspect ----
  const natural = img ? img.naturalWidth / Math.max(1, img.naturalHeight) : aspect === "16:9" ? 1.5 : aspect === "9:16" ? 0.8 : 1.12;
  const [amin, amax, maxW, maxH] = aspect === "16:9" ? [1.2, 2.2, 0.8, 0.74] : aspect === "9:16" ? [0.72, 1.45, 0.86, 0.6] : [0.86, 1.42, 0.8, 0.78];
  const pa = Math.min(amax, Math.max(amin, natural));
  let pw = W * maxW;
  let ph = pw / pa;
  if (ph > H * maxH) {
    ph = H * maxH;
    pw = ph * pa;
  }
  pw = Math.round(pw);
  ph = Math.round(ph);
  const px = Math.round((W - pw) / 2);
  const py = Math.round((H - ph) / 2);
  const R = u * 1.4;
  const N = lines;
  const pitch = ph / N;
  const sx = Math.max(2, pitch * 0.42);
  const cols = Math.ceil(pw / sx) + 1;

  // ---- the plate image (cover-cropped, pre-scaled once) ----
  const plate = useMemo(() => {
    const made = canvas2d(pw, ph);
    if (!made || !ready) return null;
    const [cv, ctx] = made;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    if (img) {
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const ia = iw / ih;
      const [sw, sh] = ia > pa ? [ih * pa, ih] : [iw, iw / pa];
      ctx.drawImage(img, (iw - sw) / 2, (ih - sh) / 2, sw, sh, 0, 0, pw, ph);
    }
    return cv;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [img, ready, pw, ph, pa, ink, accent, color, background, dark]);

  // ---- tone field: one value per (row, column), 0 = no ink, 1 = full ink ----
  const field = useMemo(() => {
    if (!plate) return null;
    if (!readable) {
      // Neutral engraved tone: a soft marbled field, brighter toward the center.
      const nz = simplex3("engraved-tone");
      const out = new Float32Array(cols * N);
      for (let r = 0; r < N; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c / cols;
          const y = r / N;
          const d = Math.hypot((x - 0.5) * 1.3, y - 0.5);
          out[r * cols + c] = clamp01(0.12 + 0.55 * (1 - smooth(d / 0.75)) + 0.28 * fbm3(nz, x * 2.4, y * 2.4 * (ph / pw), 0.3, 3));
        }
      }
      return withHeight(out, cols, N, pitch, sx);
    }
    const made = canvas2d(cols, N * 2);
    if (!made) return null;
    const [, ctx] = made;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.fillStyle = dark ? "#000" : "#fff";
    ctx.fillRect(0, 0, cols, N * 2);
    ctx.drawImage(plate, 0, 0, cols, N * 2);
    let data: Uint8ClampedArray;
    try {
      data = ctx.getImageData(0, 0, cols, N * 2).data;
    } catch {
      return null;
    }
    const L = new Float32Array(cols * N);
    const hist = new Uint32Array(256);
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < cols; c++) {
        let s = 0;
        for (let k = 0; k < 2; k++) {
          const i = ((r * 2 + k) * cols + c) * 4;
          s += 0.2126 * data[i]! + 0.7152 * data[i + 1]! + 0.0722 * data[i + 2]!;
        }
        const v = s / 2 / 255;
        L[r * cols + c] = v;
        hist[Math.min(255, Math.round(v * 255))]!++;
      }
    }
    // Stretch to the 2nd..98th percentile so flat screenshots still read.
    const total = cols * N;
    let acc = 0;
    let lo = 0;
    let hi = 255;
    for (let i = 0; i < 256; i++) { acc += hist[i]!; if (acc >= total * 0.02) { lo = i; break; } }
    acc = 0;
    for (let i = 255; i >= 0; i--) { acc += hist[i]!; if (acc >= total * 0.02) { hi = i; break; } }
    const span = Math.max(24, hi - lo) / 255;
    const lo01 = lo / 255;
    const out = new Float32Array(total);
    for (let i = 0; i < total; i++) {
      const n = clamp01((L[i]! - lo01) / span);
      // Gentle S-curve: engravers push tones apart so the plate never reads flat.
      const t = dark ? n : 1 - n;
      out[i] = t * t * (3 - 2 * t) * 0.7 + t * 0.3;
    }
    return withHeight(out, cols, N, pitch, sx);
  }, [plate, cols, N, dark, readable, pw, ph, pitch, sx]);

  // Per-row cut timing: a diagonal front with a little hand jitter.
  const rows = useMemo(() => {
    const r = rng("engraved-line-render");
    return Array.from({ length: N }, (_, i) => ({ delay: (i / N) * 16 + r() * 4, dur: 26 + r() * 6 }));
  }, [N]);

  const layer = useMemo(() => canvas2d(W, H), [W, H]);
  const guil = useMemo(() => {
    const gap = u * 1.5;
    const bw = u * 2.4;
    const mid = perimeter(px - gap - bw / 2, py - gap - bw / 2, pw + 2 * gap + bw, ph + 2 * gap + bw, R + gap + bw / 2, 1400);
    const inner = perimeter(px - gap, py - gap, pw + 2 * gap, ph + 2 * gap, R + gap, 700);
    const outer = perimeter(px - gap - bw, py - gap - bw, pw + 2 * gap + 2 * bw, ph + 2 * gap + 2 * bw, R + gap + bw, 700);
    return { mid, inner, outer, bw };
  }, [px, py, pw, ph, R, u]);

  useLayoutEffect(() => {
    const cv = ref.current;
    const ctx = cv?.getContext("2d", { willReadFrequently: true });
    if (!ctx || !layer) return;
    const [lcv, lc] = layer;
    const f = Math.min(frame, SETTLE);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, W, H);
    if (!transparent) {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, W, H);
    }
    // Soft pool of ink light behind the plate; ends before the corners.
    const halo = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.52);
    halo.addColorStop(0, css(cInk, dark ? 0.16 : 0.07));
    halo.addColorStop(0.6, css(cAcc, dark ? 0.05 : 0.025));
    halo.addColorStop(1, css(cInk, 0));
    ctx.fillStyle = halo;
    ctx.fillRect(0, 0, W, H);

    // Gentle push-in that lands exactly at the settle.
    const s = 1 + 0.035 * (1 - outCubic(f / SETTLE));
    const cx = W / 2;
    const cy = H / 2;
    ctx.setTransform(s, 0, 0, s, cx * (1 - s), cy * (1 - s));

    // ---- note paper: faint engraved rules around the plate, fading toward the frame edge ----
    if (!transparent) {
      const fade = smooth(f / 36);
      const wpB = (f - WAVE0) / (WAVE1 - WAVE0);
      const sigB = pw * 0.17;
      const wcB = px - sigB * 2.2 + inOut(wpB) * (pw + sigB * 4.4);
      const ampB = wpB > 0 && wpB < 1 ? wave * pitch * 2.6 * Math.sin(Math.PI * wpB) ** 0.6 : 0;
      const lamB = pw * 0.12;
      ctx.save();
      ctx.beginPath();
      ctx.rect(-W * 0.05, -H * 0.05, W * 1.1, H * 1.1);
      roundRect(ctx, px - u * 0.6, py - u * 0.6, pw + u * 1.2, ph + u * 1.2, R + u * 0.6);
      ctx.clip("evenodd");
      const rg = ctx.createRadialGradient(cx, cy, Math.min(pw, ph) * 0.45, cx, cy, Math.max(W, H) * 0.62);
      rg.addColorStop(0, css(dark ? mix(cInk, cText, 0.3) : cInk, (dark ? 0.2 : 0.22) * fade));
      rg.addColorStop(1, css(cInk, 0));
      ctx.strokeStyle = rg;
      ctx.lineWidth = Math.max(0.75, pitch * 0.09);
      ctx.beginPath();
      const gapB = pitch * 2;
      const step = Math.max(6, pitch * 1.5);
      for (let y = py + pitch * 0.5 - Math.ceil((py + H * 0.05) / gapB) * gapB; y < H * 1.05; y += gapB) {
        for (let x = -W * 0.05; x <= W * 1.05; x += step) {
          const d = (x - wcB) / sigB;
          const dy = ampB ? ampB * Math.exp(-d * d) * Math.sin((TAU * (x - wcB)) / lamB + ((y - py) / ph) * 2.2) : 0;
          if (x === -W * 0.05) ctx.moveTo(x, y + dy);
          else ctx.lineTo(x, y + dy);
        }
      }
      ctx.stroke();
      ctx.restore();
    }

    // ---- guilloche border ----
    if (guilloche) {
      const gp = inOut((f - 2) / 52);
      const visible = (t: number) => t <= gp / 2 || t >= 1 - gp / 2;
      const strokeRun = (pts: [number, number, number, number][], off: (i: number, t: number) => number) => {
        const n = pts.length - 1;
        ctx.beginPath();
        let open = false;
        for (let i = 0; i <= n; i++) {
          const t = i / n;
          if (!visible(t)) { open = false; continue; }
          const [x, y, nx, ny] = pts[i]!;
          const o = off(i, t);
          if (!open) { ctx.moveTo(x + nx * o, y + ny * o); open = true; } else ctx.lineTo(x + nx * o, y + ny * o);
        }
        ctx.stroke();
      };
      const { mid, inner, outer, bw } = guil;
      const n1 = Math.max(8, Math.round(mid.total / (bw * 2.6)));
      const K = 6;
      ctx.lineWidth = Math.max(1, u * 0.1);
      for (let j = 0; j < K; j++) {
        const ph0 = (j / K) * TAU;
        ctx.strokeStyle = j % 2 ? css(cAcc, dark ? 0.42 : 0.5) : css(cText, dark ? 0.32 : 0.42);
        strokeRun(mid.pts, (_, t) => (bw / 2) * (0.64 * Math.sin(TAU * n1 * t + ph0) + 0.32 * Math.sin(TAU * n1 * 3 * t - ph0 * 2)));
      }
      ctx.lineWidth = Math.max(1, u * 0.13);
      ctx.strokeStyle = css(cText, dark ? 0.42 : 0.55);
      strokeRun(inner.pts, () => 0);
      strokeRun(outer.pts, () => 0);
    }

    // ---- plate paper ----
    ctx.save();
    ctx.beginPath();
    roundRect(ctx, px, py, pw, ph, R);
    ctx.clip();
    ctx.fillStyle = dark ? css(cText, 0.035) : css(cInk, 0.045);
    ctx.fillRect(px, py, pw, ph);

    const dis = 0.5 - 0.5 * Math.cos(Math.PI * clamp01((f - DIS0) / (DIS1 - DIS0)));
    if (field && plate && f < DIS1) {
      const band = 0.3;
      const q = -band + dis * (1 + 2 * band);
      const wp = (f - WAVE0) / (WAVE1 - WAVE0);
      const wActive = wp > 0 && wp < 1;
      const sig = pw * 0.17;
      const lam = pw * 0.12;
      const wc = px - sig * 2.2 + inOut(wp) * (pw + sig * 4.4);
      const amp = wave * pitch * 2.6 * Math.sin(Math.PI * clamp01(wp)) ** 0.6;
      const xs = new Float32Array(cols);
      for (let c = 0; c < cols; c++) xs[c] = Math.min(px + pw, px + c * sx);
      const dyAt = (x: number, y: number) => {
        if (!wActive) return 0;
        const d = (x - wc) / sig;
        return amp * Math.exp(-d * d) * Math.sin((TAU * (x - wc)) / lam + ((y - py) / ph) * 2.2);
      };

      // Faint ruled guides: the plate before the burin reaches it.
      ctx.strokeStyle = dark ? css(cText, 0.07) : css(cInk, 0.1);
      ctx.lineWidth = Math.max(0.6, pitch * 0.06);
      const guideA = 1 - smooth((f - 30) / 20);
      if (guideA > 0) {
        ctx.globalAlpha = guideA;
        ctx.beginPath();
        for (let r = 0; r < N; r += 1) {
          const y = py + (r + 0.5) * pitch;
          ctx.moveTo(px, y);
          ctx.lineTo(px + pw, y);
        }
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      // Strips of the real image grow out of each line during the dissolve.
      if (dis > 0) {
        ctx.save();
        ctx.beginPath();
        for (let r = 0; r < N; r++) {
          const y0 = py + (r + 0.5) * pitch;
          const top: number[] = [];
          const bot: number[] = [];
          for (let c = 0; c < cols; c++) {
            const x = xs[c]!;
            const pos = ((x - px) / pw) * 0.72 + ((y0 - py) / ph) * 0.28;
            const k = smooth((q - pos) / band);
            const half = ((pitch + 1.5) * outCubic(k)) / 2;
            const y = y0 + dyAt(x, y0);
            top.push(y - half);
            bot.push(y + half);
          }
          ctx.moveTo(xs[0]!, top[0]!);
          for (let c = 1; c < cols; c++) ctx.lineTo(xs[c]!, top[c]!);
          for (let c = cols - 1; c >= 0; c--) ctx.lineTo(xs[c]!, bot[c]!);
          ctx.closePath();
        }
        ctx.clip();
        ctx.drawImage(plate, px, py);
        ctx.restore();
      }

      // ---- engraved lines on their own layer so light can play on the ink only ----
      lc.setTransform(1, 0, 0, 1, 0, 0);
      lc.globalCompositeOperation = "source-over";
      lc.clearRect(0, 0, W, H);
      lc.beginPath();
      const tips: [number, number, number][] = [];
      for (let r = 0; r < N; r++) {
        const row = rows[r]!;
        const tr = (f - row.delay) / row.dur;
        if (tr <= 0) continue;
        const xf = px - pitch * 3 + inOut(tr) * (pw + pitch * 6);
        const y0 = py + (r + 0.5) * pitch;
        const top: number[] = [];
        const bot: number[] = [];
        const xsr: number[] = [];
        let prevDy = dyAt(xs[0]!, y0);
        for (let c = 0; c < cols; c++) {
          const x = xs[c]!;
          if (x > xf) break;
          const v = field.v[r * cols + c]!;
          const hgt = field.h[r * cols + c]!;
          const pos = ((x - px) / pw) * 0.72 + ((y0 - py) / ph) * 0.28;
          const k = dis > 0 ? smooth((q - pos) / band) : 0;
          const dy = dyAt(x, y0);
          const slope = c > 0 ? (dy - prevDy) / sx : 0;
          prevDy = dy;
          const sheen = Math.min(1.7, Math.max(0.45, 1 + slope * 0.9));
          const taper = clamp01((xf - x) / (pitch * 4));
          const th = pitch * (0.06 + (dark ? 0.6 : 0.72) * v) * sheen * taper * Math.pow(1 - k, 1.6);
          const relief = -(hgt * 4.5 + (v - 0.5) * 0.3) * pitch * (1 - k);
          const y = y0 + dy + relief;
          xsr.push(x);
          top.push(y - th / 2);
          bot.push(y + th / 2);
        }
        if (xsr.length < 2) continue;
        lc.moveTo(xsr[0]!, top[0]!);
        for (let c = 1; c < xsr.length; c++) lc.lineTo(xsr[c]!, top[c]!);
        for (let c = xsr.length - 1; c >= 0; c--) lc.lineTo(xsr[c]!, bot[c]!);
        lc.closePath();
        if (tr < 1 && xf > px && xf < px + pw) tips.push([xf, y0 + dyAt(xf, y0), 1 - tr]);
      }
      const ig = lc.createLinearGradient(px, py, px + pw, py + ph);
      // Dark: ink lifted toward the text color so it glows; light: ink deepened toward it so it prints.
      const deep = dark ? 0.3 : 0.28;
      const inkHi = mix(cInk, cText, deep);
      ig.addColorStop(0, css(inkHi));
      ig.addColorStop(0.55, css(mix(mix(cInk, cAcc, 0.45), cText, dark ? 0.08 : 0.18)));
      ig.addColorStop(1, css(dark ? cAcc : mix(cAcc, cText, 0.15)));
      lc.fillStyle = ig;
      lc.fill();

      // Light rides the paper wave, on the ink only.
      if (wActive) {
        lc.globalCompositeOperation = "source-atop";
        const gl = lc.createLinearGradient(wc - sig * 1.4, 0, wc + sig * 1.4, 0);
        const ga = Math.sin(Math.PI * clamp01(wp));
        const lite = dark ? mix(cAcc, cText, 0.55) : mix(cAcc, cText, 0.25);
        gl.addColorStop(0, css(lite, 0));
        gl.addColorStop(0.5, css(lite, 0.75 * ga));
        gl.addColorStop(1, css(lite, 0));
        lc.fillStyle = gl;
        lc.fillRect(px, py, pw, ph);
      }

      // The burin: each line's freshly cut end runs hot, then cools into the ink.
      if (tips.length) {
        lc.globalCompositeOperation = "source-atop";
        const hot = dark ? mix(cAcc, cText, 0.65) : mix(cAcc, cText, 0.2);
        const len = pw * 0.16;
        for (const [x, y, a] of tips) {
          const g = lc.createLinearGradient(x - len, 0, x, 0);
          g.addColorStop(0, css(hot, 0));
          g.addColorStop(1, css(hot, Math.min(1, a * 2.2)));
          lc.fillStyle = g;
          lc.fillRect(x - len, y - pitch, len + pitch, pitch * 2);
        }
      }
      lc.globalCompositeOperation = "source-over";
      ctx.drawImage(lcv, 0, 0);
    } else if (plate && f >= DIS1) {
      ctx.drawImage(plate, px, py);
    }
    ctx.restore();

    // Plate edge.
    ctx.beginPath();
    roundRect(ctx, px, py, pw, ph, R);
    ctx.lineWidth = Math.max(1, u * 0.1);
    ctx.strokeStyle = css(cText, dark ? 0.18 : 0.22);
    ctx.stroke();

    if (pending.current !== null && ready && plate) {
      continueRender(pending.current);
      pending.current = null;
    }
  }, [frame, W, H, u, layer, plate, field, rows, guil, px, py, pw, ph, R, N, cols, sx, pitch, dark, transparent, background, ink, accent, color, wave, guilloche, ready]);

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <canvas ref={ref} width={W} height={H} style={{ width: "100%", height: "100%", display: "block" }} />
    </AbsoluteFill>
  );
};
