// Built with Remotion - https://remotion.pro/license
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AbsoluteFill, continueRender, delayRender, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeOut, fitFontSize, ramp, useLayout, waitForBrandFonts } from "../../../kit/index";
import type { Aspect } from "../../../kit/spec";
import { hashString, rng } from "../_lib/noise";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./frost-crystal-growth.schema";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='23' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

const TAU = Math.PI * 2;
const SIXTH = Math.PI / 3;

/** Timeline (frames at 30 fps). */
const F_GROW0 = 12;
const F_GROW1 = 148;
const F_SWEEP0 = 112;
const F_SWEEP1 = 158;
const F_CAP0 = 112;
const F_CAP1 = 140;

// ---------------------------------------------------------------- color

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
const mixRGB = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const css = (c: RGB, a = 1) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${Math.max(0, Math.min(1, a)).toFixed(3)})`;
const HOT: RGB = [255, 255, 255];
const SHADE: RGB = [0, 0, 0];

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);

// ---------------------------------------------------------------- layout

type Plan = { cx: number; cy: number; r0: number; capY: number; capW: number; capH: number; capLines: number; capMax: number; capMin: number };

/**
 * The crystal's arms sit at 0, 60, 120 ... degrees. The two lower arms leave a clear wedge straight
 * below the plate, and the caption sits in that wedge where it is widest.
 */
export function plan(aspect: Aspect, w: number, h: number, hasCap: boolean): Plan {
  const S = Math.min(w, h);
  if (aspect === "9:16") {
    const r0 = S * 0.25;
    const cy = h * (hasCap ? 0.39 : 0.45);
    return { cx: w / 2, cy, r0, capY: cy + S * 0.64, capW: S * 0.66, capH: S * 0.16, capLines: 2, capMax: h * 0.037, capMin: h * 0.031 };
  }
  const r0 = S * 0.2;
  const cy = h * (hasCap ? 0.42 : 0.5);
  return { cx: w / 2, cy, r0, capY: cy + S * 0.37, capW: S * 0.42, capH: S * 0.1, capLines: 1, capMax: h * 0.052, capMin: h * 0.02 };
}

// ---------------------------------------------------------------- crystal growth

/** One straight branch in local units (S = 1), grown from (x0, y0) at `t0` with tip arriving at `t1`. */
type Local = { x0: number; y0: number; x1: number; y1: number; g: number; t0: number; t1: number; len: number; parent: number; sOn: number };

type Cfg = {
  maxGen: number;
  /** Side-branch spacing per generation of the parent. */
  sp: number[];
  /** Longest side branch per generation. */
  maxLen: number[];
  /** Side branches near the tip are shorter: length <= env * distance to the tip (dendrite envelope). */
  env: number;
  minLen: number;
  /** Which sides grow branches at this generation: 0 = one side (mirrored later), 1 = alternate, 2 = both. */
  sides: number[];
  jit: number;
  v0: number;
  spd: number;
  lag: number;
};

const CENTRAL: Cfg = { maxGen: 3, sp: [0.048, 0.022, 0.016], maxLen: [0, 0.2, 0.06, 0.02], env: 0.5, minLen: 0.006, sides: [0, 2, 1], jit: 0, v0: 1, spd: 0.52, lag: 0.012 };
const FERN: Cfg = { maxGen: 3, sp: [0.026, 0.014, 0.01], maxLen: [0, 0.11, 0.04, 0.016], env: 0.55, minLen: 0.005, sides: [1, 1, 1], jit: 0.07, v0: 0.62, spd: 0.55, lag: 0.01 };
const FLAKE: Cfg = { maxGen: 2, sp: [0.011, 0.007], maxLen: [0, 0.028, 0.009], env: 0.65, minLen: 0.004, sides: [2, 1], jit: 0, v0: 0.45, spd: 0.6, lag: 0.006 };

function growTree(R: () => number, cfg: Cfg, rootLen: number, rootAng: number): Local[] {
  const out: Local[] = [];
  const rec = (x: number, y: number, ang: number, len: number, g: number, t0: number, speed: number, parent: number, sOn: number) => {
    const i = out.length;
    const ca = Math.cos(ang), sa = Math.sin(ang);
    out.push({ x0: x, y0: y, x1: x + ca * len, y1: y + sa * len, g, t0, t1: t0 + len / speed, len, parent, sOn });
    if (g >= cfg.maxGen) return;
    const sp = cfg.sp[g]!;
    let s = sp * (0.45 + 0.4 * R());
    let side = R() < 0.5 ? 1 : -1;
    const mode = cfg.sides[g]!;
    while (s < len * 0.94) {
      const rem = len - s;
      const near = Math.min(1, 0.4 + s / (sp * 3));
      const base = Math.min(cfg.maxLen[g + 1]!, cfg.env * rem) * near;
      const list = mode === 0 ? [1] : mode === 2 ? [1, -1] : [side];
      // Fern stems now and then fork both ways at once.
      if (mode === 1 && g === 0 && R() < 0.3) list.push(-side);
      const k = 0.55 + 0.6 * R();
      for (const sd of list) {
        const cl = base * (list.length > 1 && mode !== 2 ? 0.8 + 0.3 * R() : k);
        if (cl > cfg.minLen) rec(x + ca * s, y + sa * s, ang + sd * SIXTH + (R() - 0.5) * cfg.jit, cl, g + 1, t0 + s / speed + cfg.lag, speed * cfg.spd, i, s);
      }
      side = -side;
      s += sp * (0.72 + 0.56 * R());
    }
  };
  rec(0, 0, rootAng, rootLen, 0, 0, cfg.v0, -1, 0);
  return out;
}

/** Width class: 0 main arm, 1 stem (tapered faceted needles), 2 branch, 3 fine needle (lines). */
type Geo = {
  key: string;
  n: number;
  x0: Float32Array; y0: Float32Array; x1: Float32Array; y1: Float32Array;
  t0: Float32Array; t1: Float32Array;
  cls: Uint8Array;
  /** Brightness level 0 (bright) .. 2 (faint): frost thins out away from the backlight. */
  lvl: Uint8Array;
  tmax: number;
  glints: { x: number; y: number; t: number; size: number; period: number; phase: number }[];
  plate: { cx: number; cy: number; r0: number };
  sweep: { nx: number; ny: number; p0: number; p1: number };
};

export function buildGeo(P: Plan, w: number, h: number, capZone: { cx: number; cy: number; rx: number; ry: number } | null, density: number, aspect: Aspect, key: string): Geo {
  const S = Math.min(w, h);
  const { cx, cy, r0 } = P;
  const R = rng(`frost-${aspect}`);
  const X0: number[] = [], Y0: number[] = [], X1: number[] = [], Y1: number[] = [], T0: number[] = [], T1: number[] = [], C: number[] = [], LV: number[] = [];
  const tips: { x: number; y: number; t: number; c: number }[] = [];
  const m = S * 0.03;

  // Clear glass: the hexagonal plate that holds the mark, and an oval around the caption.
  const hexR = r0 * 0.96;
  const inHex = (x: number, y: number) => {
    const dx = Math.abs(x - cx), dy = Math.abs(y - cy);
    return dy <= hexR * 0.866 && 1.732 * dx + dy <= 1.732 * hexR;
  };
  const inCap = (x: number, y: number) => {
    if (!capZone) return false;
    const u = (x - capZone.cx) / capZone.rx, v = (y - capZone.cy) / capZone.ry;
    return u * u + v * v < 1;
  };
  const outside = (x: number, y: number) => x < -m || y < -m || x > w + m || y > h + m;

  /** Places a local tree; children survive only if their parent was not cut before them. */
  const place = (local: Local[], ox: number, oy: number, rot: number, mirror: boolean, scale: number, tOff: number, clsOf: (g: number) => number, capExempt: (g: number) => boolean, skipRoot = false) => {
    const kept = new Float32Array(local.length);
    const cr = Math.cos(rot), sr = Math.sin(rot);
    for (let i = 0; i < local.length; i++) {
      const L = local[i]!;
      kept[i] = -1;
      if (L.parent >= 0 && kept[L.parent]! < L.sOn - 1e-6) continue;
      const ly0 = mirror ? -L.y0 : L.y0, ly1 = mirror ? -L.y1 : L.y1;
      const ax = ox + (L.x0 * cr - ly0 * sr) * scale, ay = oy + (L.x0 * sr + ly0 * cr) * scale;
      const bx = ox + (L.x1 * cr - ly1 * sr) * scale, by = oy + (L.x1 * sr + ly1 * cr) * scale;
      const exempt = capExempt(L.g);
      const blocked = (x: number, y: number) => inHex(x, y) || outside(x, y) || (!exempt && inCap(x, y));
      if (blocked(ax, ay)) continue;
      const lenPx = L.len * scale;
      const steps = Math.max(2, Math.ceil(lenPx / (S * 0.006)));
      let u = 1;
      for (let k = 1; k <= steps; k++) {
        const f = k / steps;
        if (blocked(ax + (bx - ax) * f, ay + (by - ay) * f)) { u = (k - 1) / steps; break; }
      }
      if (u * lenPx < S * 0.003) continue;
      kept[i] = L.len * u;
      if (skipRoot && i === 0) continue;
      const ex = ax + (bx - ax) * u, ey = ay + (by - ay) * u;
      const t0 = tOff + L.t0, t1 = tOff + L.t0 + (L.t1 - L.t0) * u;
      X0.push(ax); Y0.push(ay); X1.push(ex); Y1.push(ey); T0.push(t0); T1.push(t1);
      const c = clsOf(L.g);
      C.push(c);
      LV.push(Math.min(2, Math.floor((Math.hypot(ex - cx, ey - cy) / S) * 1.6 + R() * 1.3)));
      if (u === 1 && (c === 1 || c === 2) && ex > S * 0.02 && ex < w - S * 0.02 && ey > S * 0.02 && ey < h - S * 0.02) tips.push({ x: ex, y: ey, t: t1, c });
    }
  };

  // Central stellar dendrite: one half-arm grown once, mirrored and turned six times (exact six-fold symmetry).
  const hx = w / 2 / S, hy = Math.max(cy, h - cy) / S;
  const reach = Math.max(hx, Math.min(hx / 0.5, hy / 0.866));
  const armLen = Math.max(0.3, reach * 0.97 - r0 / S);
  const half = growTree(R, CENTRAL, armLen, 0);
  const tArm = 0.06;
  for (let k = 0; k < 6; k++) {
    const a = k * SIXTH;
    const ox = cx + Math.cos(a) * r0, oy = cy + Math.sin(a) * r0;
    // The arm itself is on the mirror axis: draw it once.
    for (const mir of [false, true]) place(half, ox, oy, a, mir, S, tArm, (g) => g, (g) => g === 0, mir);
  }

  // Smaller crystals: fern sprays toward the edges of the pane and little stellar flakes, nucleated as the front passes.
  const area = (w * h) / (S * S);
  const seeds: { x: number; y: number; fern: boolean }[] = [];
  const nFern = Math.round((7 + 6 * area) * density);
  const nFlake = Math.round((9 + 8 * area) * density);
  const minD = S * 0.09;
  let guard = 0;
  while (seeds.length < nFern + nFlake && guard++ < 4000) {
    const fern = seeds.length < nFern;
    const x = R() * w, y = R() * h;
    const d = Math.hypot(x - cx, y - cy) / S;
    // Ferns prefer the outer pane, flakes scatter between the arms.
    if (fern && d < 0.45 + 0.1 * R()) continue;
    if (!fern && d < r0 / S + 0.12) continue;
    if (inHex(x, y) || inCap(x, y)) continue;
    if (capZone && Math.hypot((x - capZone.cx) / (capZone.rx + S * 0.05), (y - capZone.cy) / (capZone.ry + S * 0.05)) < 1) continue;
    if (seeds.some((s) => Math.hypot(s.x - x, s.y - y) < minD * (s.fern && fern ? 1.6 : 1))) continue;
    seeds.push({ x, y, fern });
  }
  for (const s of seeds) {
    const d = Math.hypot(s.x - cx, s.y - cy) / S;
    const lattice = Math.floor(R() * 6) * SIXTH + (R() - 0.5) * 0.5;
    const tOff = tArm + d * 0.78 + R() * 0.12;
    if (s.fern) {
      // Stems lean outward, away from the mark, along the crystal lattice.
      const out = Math.atan2(s.y - cy, s.x - cx);
      const stems = 1 + (R() < 0.6 ? 1 : 0) + (R() < 0.3 ? 1 : 0);
      for (let k = 0; k < stems; k++) {
        const ang = out + (k === 0 ? 0 : (k === 1 ? 1 : -1) * SIXTH) + (R() - 0.5) * 0.5;
        const len = (0.16 + 0.22 * R()) * (k === 0 ? 1 : 0.7);
        const tree = growTree(R, FERN, len, ang);
        place(tree, s.x, s.y, 0, false, S, tOff + k * 0.03, (g) => (g === 0 ? 1 : g === 1 ? 2 : 3), () => false);
      }
    } else {
      const size = 0.028 + 0.05 * R() * R();
      const arm = growTree(R, FLAKE, size, 0);
      for (let k = 0; k < 6; k++) place(arm, s.x, s.y, lattice + k * SIXTH, false, S, tOff, (g) => (g === 0 ? 1 : 3), () => false);
    }
  }

  const n = X0.length;
  let tmax = 0;
  for (let i = 0; i < n; i++) if (T1[i]! > tmax) tmax = T1[i]!;

  // Glints live on finished branch tips, spread out.
  const glints: Geo["glints"] = [];
  const order = tips.map((t, i) => ({ t, k: R() + (t.c === 1 ? 0.3 : 0), i })).sort((a, b) => b.k - a.k);
  for (const o of order) {
    if (glints.length >= Math.round(46 + 18 * area)) break;
    if (glints.some((g) => Math.hypot(g.x - o.t.x, g.y - o.t.y) < S * 0.07)) continue;
    glints.push({ x: o.t.x, y: o.t.y, t: o.t.t, size: 0.6 + 0.8 * R() * R(), period: 46 + Math.floor(R() * 70), phase: R() * TAU });
  }

  // Glint sweep: a diagonal band crossing the whole pane.
  const nx = Math.cos(0.42), ny = Math.sin(0.42);
  const projs = [0, w].flatMap((x) => [0, h].map((y) => x * nx + y * ny));

  return {
    key, n,
    x0: Float32Array.from(X0), y0: Float32Array.from(Y0), x1: Float32Array.from(X1), y1: Float32Array.from(Y1),
    t0: Float32Array.from(T0), t1: Float32Array.from(T1), cls: Uint8Array.from(C), lvl: Uint8Array.from(LV),
    tmax, glints,
    plate: { cx, cy, r0 },
    sweep: { nx, ny, p0: Math.min(...projs), p1: Math.max(...projs) },
  };
}

// ---------------------------------------------------------------- assets

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("logo failed"));
    img.src = src;
  });
}

/** Rasterize once at high resolution and trim the transparent artboard so the mark itself fills its box. */
function trimLogo(img: HTMLImageElement): HTMLCanvasElement {
  const nw0 = img.naturalWidth || 512, nh0 = img.naturalHeight || 512;
  const k0 = 1200 / Math.max(nw0, nh0);
  const tc = document.createElement("canvas");
  tc.width = Math.max(1, Math.round(nw0 * k0));
  tc.height = Math.max(1, Math.round(nh0 * k0));
  const tctx = tc.getContext("2d", { willReadFrequently: true })!;
  tctx.drawImage(img, 0, 0, tc.width, tc.height);
  let x0 = tc.width, y0 = tc.height, x1 = -1, y1 = -1;
  try {
    const d = tctx.getImageData(0, 0, tc.width, tc.height).data;
    for (let y = 0; y < tc.height; y += 2)
      for (let x = 0; x < tc.width; x += 2)
        if (d[(y * tc.width + x) * 4 + 3]! > 12) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  } catch {
    x1 = -1;
  }
  if (x1 < 0) return tc;
  x0 = Math.max(0, x0 - 2); y0 = Math.max(0, y0 - 2); x1 = Math.min(tc.width - 1, x1 + 2); y1 = Math.min(tc.height - 1, y1 + 2);
  const out = document.createElement("canvas");
  out.width = x1 - x0 + 1;
  out.height = y1 - y0 + 1;
  out.getContext("2d", { willReadFrequently: true })!.drawImage(tc, x0, y0, out.width, out.height, 0, 0, out.width, out.height);
  return out;
}

/** A six-pointed glint (hexagonal, like the ice) drawn once per color. */
function glintSprite(core: RGB, halo: RGB, size: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = size;
  c.height = size;
  const g = c.getContext("2d", { willReadFrequently: true })!;
  const r = size / 2;
  const rg = g.createRadialGradient(r, r, 0, r, r, r * 0.42);
  rg.addColorStop(0, css(core, 1));
  rg.addColorStop(0.18, css(mixRGB(halo, core, 0.6), 0.55));
  rg.addColorStop(1, css(halo, 0));
  g.fillStyle = rg;
  g.fillRect(0, 0, size, size);
  g.translate(r, r);
  for (let k = 0; k < 6; k++) {
    const long = k % 3 === 0 ? 1 : 0.62;
    g.save();
    g.rotate(k * SIXTH + Math.PI / 2);
    const lg = g.createLinearGradient(0, 0, r * long, 0);
    lg.addColorStop(0, css(core, 0.95));
    lg.addColorStop(0.35, css(mixRGB(halo, core, 0.5), 0.45));
    lg.addColorStop(1, css(halo, 0));
    g.fillStyle = lg;
    g.beginPath();
    g.moveTo(0, -size * 0.022);
    g.lineTo(r * long, 0);
    g.lineTo(0, size * 0.022);
    g.closePath();
    g.fill();
    g.restore();
  }
  return c;
}

// ---------------------------------------------------------------- component

type Bufs = {
  frost?: HTMLCanvasElement;
  h1?: HTMLCanvasElement;
  h2?: HTMLCanvasElement;
  sw?: HTMLCanvasElement;
  done?: string;
  sprite?: { key: string; c: HTMLCanvasElement };
};

/**
 * A hexagonal ice plate forms around the mark, six fern-like dendrite arms race out of its corners,
 * side branches and smaller crystals frost the rest of the pane, a sheen sweeps across every edge,
 * and the frost settles with glints twinkling in a cold brand-colored backlight.
 */
export const Component: React.FC<Props> = ({ logo, caption, primary, secondary, color, background, density, grain, fontFamily }) => {
  const frame = useCurrentFrame();
  const { width: w, height: h, aspect, portrait } = useLayout();
  const S = Math.min(w, h);
  const transparent = background === "transparent";
  const ink = rgbOf(color);
  const BG = rgbOf(background, [0, 0, 0]);
  const dark = transparent ? lum(ink) > 0.4 : lum(BG) < 0.4;
  const hasCaption = caption.trim().length > 0;
  const font = brandFontStack(fontFamily);
  const P = useMemo(() => plan(aspect, w, h, hasCaption), [aspect, w, h, hasCaption]);

  const capSize = hasCaption
    ? Math.max(P.capMin, fitFontSize({ chars: caption.length, boxW: P.capW, boxH: P.capH, lines: P.capLines, charEm: 0.56, lineHeight: 1.22, max: P.capMax }))
    : 0;
  const capTextW = Math.min(P.capW, caption.length * 0.56 * capSize * 1.04);
  const capLinesUsed = hasCaption ? Math.min(P.capLines, Math.max(1, Math.ceil((caption.length * 0.56 * capSize * 1.08) / P.capW))) : 0;
  const capZone = hasCaption ? { cx: P.cx, cy: P.capY, rx: capTextW / 2 + S * 0.06, ry: (capLinesUsed * capSize * 1.22) / 2 + S * 0.05 } : null;

  const [asset, setAsset] = useState<{ logo: HTMLCanvasElement | null } | null>(null);
  const [handle] = useState(() => delayRender("frost-crystal-growth logo and fonts", { timeoutInMilliseconds: 60000 }));
  useEffect(() => {
    let alive = true;
    (async () => {
      await waitForBrandFonts();
      let c: HTMLCanvasElement | null = null;
      try { c = trimLogo(await loadImage(logo.trim() || SAMPLE_LOGO)); } catch { c = null; }
      if (alive) setAsset({ logo: c });
    })()
      .catch(() => { if (alive) setAsset({ logo: null }); })
      .finally(() => continueRender(handle));
    return () => { alive = false; };
  }, [logo, handle]);

  const zoneKey = capZone ? `${Math.round(capZone.rx)}x${Math.round(capZone.ry)}@${Math.round(capZone.cy)}` : "none";
  const geo = useMemo(
    () => buildGeo(P, w, h, capZone, density, aspect, `${aspect}-${w}x${h}-${zoneKey}-${density}-${hashString(zoneKey)}`),
    // capZone is derived from zoneKey.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [P, w, h, zoneKey, density, aspect],
  );

  const ref = useRef<HTMLCanvasElement>(null);
  const bufs = useRef<Bufs>({});

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx || !asset) return;
    const B = bufs.current;
    const mk = (c: HTMLCanvasElement | undefined, cw: number, ch: number) => {
      const cv = c ?? document.createElement("canvas");
      if (cv.width !== cw || cv.height !== ch) { cv.width = cw; cv.height = ch; }
      return cv;
    };
    B.frost = mk(B.frost, w, h);
    B.h1 = mk(B.h1, Math.max(2, Math.round(w / 4)), Math.max(2, Math.round(h / 4)));
    B.h2 = mk(B.h2, Math.max(2, Math.round(w / 10)), Math.max(2, Math.round(h / 10)));
    B.sw = mk(B.sw, Math.max(2, Math.round(w / 2)), Math.max(2, Math.round(h / 2)));
    const fctx = B.frost.getContext("2d", { willReadFrequently: true })!;
    const h1 = B.h1.getContext("2d", { willReadFrequently: true })!;
    const h2 = B.h2.getContext("2d", { willReadFrequently: true })!;

    const PC = rgbOf(primary, [88, 166, 255]);
    const QC = rgbOf(secondary, PC);
    const paper: RGB = transparent ? (dark ? mixRGB(ink, SHADE, 0.92) : mixRGB(ink, HOT, 0.94)) : BG;
    const add: GlobalCompositeOperation = dark ? "lighter" : "source-over";

    // Ice palette. Dark glass: icy bright crystals with a brand-blue rim. Light glass: pale tinted ice with grey edges.
    const edgeC: RGB = dark ? mixRGB(PC, paper, 0.15) : mixRGB(mixRGB(ink, PC, 0.3), paper, 0.42);
    const edgeA = dark ? 0.5 : 0.62;
    const coreC: RGB = dark ? mixRGB(PC, HOT, 0.74) : mixRGB(PC, paper, 0.55);
    const facetHi: RGB = dark ? mixRGB(PC, HOT, 0.86) : mixRGB(PC, HOT, 0.62);
    const facetLo: RGB = dark ? mixRGB(PC, paper, 0.38) : mixRGB(mixRGB(PC, ink, 0.28), paper, 0.25);
    const spineC: RGB = dark ? HOT : mixRGB(PC, HOT, 0.85);

    // Growth clock: tips race first, then slow as the pane fills.
    const u = clamp01((frame - F_GROW0) / (F_GROW1 - F_GROW0));
    const T = (1 - Math.pow(1 - u, 1.9)) * geo.tmax * 1.0005 + (frame >= F_GROW1 ? 1 : 0);
    const settledFrost = frame >= F_GROW1;
    const plateP = easeOut(ramp(frame, [2, 18], [0, 1]));

    // ---------- frost layer (cached once grown) ----------
    const doneKey = `${geo.key}|${primary}|${secondary}|${color}|${background}`;
    const tipsLive: { x: number; y: number; c: number }[] = [];
    if (!(settledFrost && B.done === doneKey)) {
      fctx.setTransform(1, 0, 0, 1, 0, 0);
      fctx.globalCompositeOperation = "source-over";
      fctx.globalAlpha = 1;
      fctx.filter = "none";
      fctx.clearRect(0, 0, w, h);
      fctx.lineCap = "round";
      fctx.lineJoin = "round";

      const lines2 = [new Path2D(), new Path2D(), new Path2D()], lines3 = [new Path2D(), new Path2D(), new Path2D()];
      const facA = new Path2D(), facB = new Path2D(), outline = new Path2D(), spine = new Path2D();
      const hw0 = [S * 0.0046, S * 0.0022];
      const hwT = [S * 0.0007, S * 0.00045];
      const { x0, y0, x1, y1, t0, t1, cls, lvl } = geo;
      for (let i = 0; i < geo.n; i++) {
        const a = t0[i]!;
        if (T <= a) continue;
        const b = t1[i]!;
        const f = T >= b ? 1 : (T - a) / (b - a);
        const ax = x0[i]!, ay = y0[i]!;
        const ex = ax + (x1[i]! - ax) * f, ey = ay + (y1[i]! - ay) * f;
        const c = cls[i]!;
        if (c >= 2) {
          const p = (c === 2 ? lines2 : lines3)[lvl[i]!]!;
          p.moveTo(ax, ay);
          p.lineTo(ex, ey);
          continue;
        }
        if (f < 1) tipsLive.push({ x: ex, y: ey, c });
        const dx = ex - ax, dy = ey - ay;
        const L = Math.hypot(dx, dy);
        if (L < 0.5) continue;
        const nx = -dy / L, ny = dx / L;
        const hb = Math.min(hw0[c]!, L * 0.22), ht = hwT[c]!;
        // Two facets of a ridge: one catches the light, the other falls into the ice.
        facA.moveTo(ax + nx * hb, ay + ny * hb);
        facA.lineTo(ex + nx * ht, ey + ny * ht);
        facA.lineTo(ex, ey);
        facA.lineTo(ax, ay);
        facA.closePath();
        facB.moveTo(ax, ay);
        facB.lineTo(ex, ey);
        facB.lineTo(ex - nx * ht, ey - ny * ht);
        facB.lineTo(ax - nx * hb, ay - ny * hb);
        facB.closePath();
        outline.moveTo(ax + nx * hb, ay + ny * hb);
        outline.lineTo(ex + nx * ht, ey + ny * ht);
        outline.lineTo(ex - nx * ht, ey - ny * ht);
        outline.lineTo(ax - nx * hb, ay - ny * hb);
        if (c === 0) {
          spine.moveTo(ax, ay);
          spine.lineTo(ex, ey);
        }
      }
      const lw2 = Math.max(0.9, S * 0.0017), lw3 = Math.max(0.7, S * 0.00105);
      // Lines: a soft rim then a crisp core.
      const LA = [1, 0.66, 0.4];
      for (let l = 0; l < 3; l++) {
        fctx.strokeStyle = css(edgeC, edgeA * LA[l]!);
        fctx.lineWidth = lw2 * 2.3;
        fctx.stroke(lines2[l]!);
        fctx.strokeStyle = css(edgeC, edgeA * 0.8 * LA[l]!);
        fctx.lineWidth = lw3 * 2.2;
        fctx.stroke(lines3[l]!);
        fctx.strokeStyle = css(coreC, (dark ? 0.95 : 1) * LA[l]!);
        fctx.lineWidth = lw2;
        fctx.stroke(lines2[l]!);
        fctx.strokeStyle = css(coreC, (dark ? 0.78 : 0.9) * LA[l]!);
        fctx.lineWidth = lw3;
        fctx.stroke(lines3[l]!);
      }
      // Needles.
      fctx.strokeStyle = css(edgeC, dark ? 0.55 : 0.75);
      fctx.lineWidth = Math.max(0.8, S * 0.0012);
      fctx.stroke(outline);
      fctx.fillStyle = css(facetLo, dark ? 0.92 : 0.95);
      fctx.fill(facB);
      fctx.fillStyle = css(facetHi, 1);
      fctx.fill(facA);
      fctx.strokeStyle = css(spineC, dark ? 0.85 : 0.9);
      fctx.lineWidth = Math.max(0.7, S * 0.0009);
      fctx.stroke(spine);

      // The hexagonal plate the arms grow from: rim from the corners in, inner rim, and ridges toward the mark.
      if (plateP > 0) {
        const { cx, cy, r0 } = geo.plate;
        const rim = new Path2D(), inner = new Path2D(), ribs = new Path2D();
        const ip = clamp01((plateP - 0.25) / 0.75);
        for (let k = 0; k < 6; k++) {
          const a = k * SIXTH, b = (k + 1) * SIXTH;
          const ax = cx + Math.cos(a) * r0, ay = cy + Math.sin(a) * r0;
          const bx = cx + Math.cos(b) * r0, by = cy + Math.sin(b) * r0;
          const mx = (ax + bx) / 2, my = (ay + by) / 2;
          rim.moveTo(ax, ay);
          rim.lineTo(ax + (mx - ax) * plateP, ay + (my - ay) * plateP);
          rim.moveTo(bx, by);
          rim.lineTo(bx + (mx - bx) * plateP, by + (my - by) * plateP);
          const ri = r0 * 0.88;
          const iax = cx + Math.cos(a) * ri, iay = cy + Math.sin(a) * ri;
          const ibx = cx + Math.cos(b) * ri, iby = cy + Math.sin(b) * ri;
          inner.moveTo(iax, iay);
          inner.lineTo(iax + (ibx - iax) * ip, iay + (iby - iay) * ip);
          ribs.moveTo(ax, ay);
          ribs.lineTo(ax + (cx - ax) * 0.2 * ip, ay + (cy - ay) * 0.2 * ip);
        }
        fctx.strokeStyle = css(edgeC, edgeA);
        fctx.lineWidth = S * 0.0085;
        fctx.stroke(rim);
        fctx.strokeStyle = css(facetHi, 1);
        fctx.lineWidth = S * 0.0034;
        fctx.stroke(rim);
        fctx.strokeStyle = css(edgeC, edgeA * 0.8);
        fctx.lineWidth = S * 0.0032;
        fctx.stroke(inner);
        fctx.strokeStyle = css(coreC, 0.7);
        fctx.lineWidth = S * 0.0013;
        fctx.stroke(inner);
        fctx.strokeStyle = css(coreC, 0.85);
        fctx.lineWidth = S * 0.0022;
        fctx.stroke(ribs);
      }

      // Frosted haze: the frost scatters light into a soft matte around itself.
      h1.setTransform(1, 0, 0, 1, 0, 0);
      h1.globalCompositeOperation = "source-over";
      h1.filter = "none";
      h1.clearRect(0, 0, B.h1.width, B.h1.height);
      h1.filter = `blur(${Math.max(1, Math.round(S * 0.0028))}px)`;
      h1.drawImage(B.frost, 0, 0, B.h1.width, B.h1.height);
      h1.filter = "none";
      h2.setTransform(1, 0, 0, 1, 0, 0);
      h2.globalCompositeOperation = "source-over";
      h2.filter = "none";
      h2.clearRect(0, 0, B.h2.width, B.h2.height);
      h2.filter = `blur(${Math.max(1, Math.round(S * 0.0032))}px)`;
      h2.drawImage(B.h1, 0, 0, B.h2.width, B.h2.height);
      h2.filter = "none";
      B.done = settledFrost && plateP >= 1 ? doneKey : undefined;
    }

    // ---------- glass ----------
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.filter = "none";
    ctx.clearRect(0, 0, w, h);
    if (!transparent) {
      ctx.fillStyle = css(BG, 1);
      ctx.fillRect(0, 0, w, h);
    }
    const { cx, cy, r0 } = geo.plate;
    const light = ramp(frame, [0, 30], [0.35, 1]) * (1 + 0.035 * Math.sin((frame / 90) * TAU));
    // Cold backlight behind the pane.
    const bl = ctx.createRadialGradient(cx, cy, r0 * 0.2, cx, cy, Math.hypot(w, h) * 0.6);
    bl.addColorStop(0, css(PC, (dark ? 0.42 : 0.22) * light));
    bl.addColorStop(0.3, css(PC, (dark ? 0.16 : 0.1) * light));
    bl.addColorStop(1, css(PC, 0));
    ctx.fillStyle = bl;
    ctx.fillRect(0, 0, w, h);
    const sx = w * 0.82, sy = h * 0.86;
    const bl2 = ctx.createRadialGradient(sx, sy, 0, sx, sy, S * 0.9);
    bl2.addColorStop(0, css(QC, (dark ? 0.16 : 0.1) * light));
    bl2.addColorStop(1, css(QC, 0));
    ctx.fillStyle = bl2;
    ctx.fillRect(0, 0, w, h);
    // Reflections on the glass: two soft diagonal sheens.
    const rf = ctx.createLinearGradient(w * 0.1, 0, w * 0.55, h);
    const ra = dark ? 0.045 : 0.3;
    rf.addColorStop(0, css(HOT, 0));
    rf.addColorStop(0.34, css(HOT, 0));
    rf.addColorStop(0.42, css(HOT, ra));
    rf.addColorStop(0.47, css(HOT, ra * 0.3));
    rf.addColorStop(0.52, css(HOT, ra * 0.7));
    rf.addColorStop(0.6, css(HOT, 0));
    rf.addColorStop(1, css(HOT, 0));
    ctx.fillStyle = rf;
    ctx.fillRect(0, 0, w, h);

    // ---------- frost ----------
    ctx.globalCompositeOperation = add;
    ctx.globalAlpha = dark ? 0.5 : 0.3;
    ctx.drawImage(B.h2, 0, 0, w, h);
    ctx.globalAlpha = dark ? 0.32 : 0.2;
    ctx.drawImage(B.h1, 0, 0, w, h);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(B.frost, 0, 0);

    // ---------- glint sweep ----------
    const sw = ramp(frame, [F_SWEEP0, F_SWEEP1], [0, 1]);
    const { nx, ny, p0, p1 } = geo.sweep;
    const bw = S * 0.16;
    const pos = p0 - bw * 2 + (p1 - p0 + bw * 4) * sw;
    const sweepOn = sw > 0 && sw < 1;
    if (sweepOn) {
      const sc = B.sw.getContext("2d", { willReadFrequently: true })!;
      const k = B.sw.width / w;
      sc.setTransform(1, 0, 0, 1, 0, 0);
      sc.globalCompositeOperation = "source-over";
      sc.clearRect(0, 0, B.sw.width, B.sw.height);
      sc.drawImage(B.frost, 0, 0, B.sw.width, B.sw.height);
      sc.globalCompositeOperation = "destination-in";
      const gx0 = (nx * (pos - bw)) * k, gy0 = (ny * (pos - bw)) * k, gx1 = (nx * (pos + bw)) * k, gy1 = (ny * (pos + bw)) * k;
      const band = sc.createLinearGradient(gx0, gy0, gx1, gy1);
      band.addColorStop(0, css(SHADE, 0));
      band.addColorStop(0.5, css(SHADE, 1));
      band.addColorStop(1, css(SHADE, 0));
      sc.fillStyle = band;
      sc.fillRect(0, 0, B.sw.width, B.sw.height);
      sc.globalCompositeOperation = "source-in";
      sc.fillStyle = css(dark ? mixRGB(PC, HOT, 0.8) : mixRGB(PC, HOT, 0.35), 1);
      sc.fillRect(0, 0, B.sw.width, B.sw.height);
      ctx.globalCompositeOperation = add;
      ctx.globalAlpha = dark ? 1 : 0.7;
      ctx.drawImage(B.sw, 0, 0, w, h);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    }

    // ---------- the mark ----------
    const lp = easeOut(ramp(frame, [3, 26], [0, 1]));
    const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, r0 * 1.05);
    halo.addColorStop(0, css(dark ? mixRGB(PC, HOT, 0.25) : PC, (dark ? 0.32 : 0.12) * lp));
    halo.addColorStop(0.7, css(PC, (dark ? 0.12 : 0.05) * lp));
    halo.addColorStop(1, css(PC, 0));
    ctx.globalCompositeOperation = add;
    ctx.fillStyle = halo;
    ctx.fillRect(cx - r0 * 1.1, cy - r0 * 1.1, r0 * 2.2, r0 * 2.2);
    ctx.globalCompositeOperation = "source-over";
    if (asset.logo && lp > 0) {
      const L = asset.logo;
      const bwid = r0 * (portrait ? 1.25 : 1.3), bhei = r0 * 1.02;
      const k = Math.min(bwid / L.width, bhei / L.height);
      const sc = 0.9 + 0.1 * lp;
      const dw = L.width * k * sc, dh = L.height * k * sc;
      ctx.globalAlpha = lp;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(L, cx - dw / 2, cy - dh / 2, dw, dh);
      ctx.globalAlpha = 1;
    }

    // ---------- glints ----------
    const glintCore: RGB = dark ? HOT : mixRGB(PC, HOT, 0.2);
    const glintHalo: RGB = dark ? mixRGB(PC, QC, 0.3) : mixRGB(PC, QC, 0.25);
    const sKey = `${glintCore.join()}|${glintHalo.join()}`;
    if (!B.sprite || B.sprite.key !== sKey) B.sprite = { key: sKey, c: glintSprite(glintCore, glintHalo, 128) };
    const spr = B.sprite.c;
    ctx.globalCompositeOperation = add;
    const gs = S * 0.05;
    for (const g of geo.glints) {
      if (T < g.t) continue;
      const age = (T - g.t) / Math.max(1e-3, geo.tmax);
      const birth = Math.exp(-age * 18);
      const tw = Math.pow(Math.max(0, Math.sin((frame / g.period) * TAU + g.phase)), 14);
      let swp = 0;
      if (sweepOn) {
        const d = (g.x * nx + g.y * ny - pos) / (bw * 0.6);
        swp = Math.exp(-d * d);
      }
      const it = Math.min(1, 0.7 * birth + tw + swp);
      if (it < 0.03) continue;
      const s = gs * g.size * (0.45 + 0.75 * it);
      ctx.globalAlpha = Math.min(1, it * (dark ? 1 : 0.85));
      ctx.drawImage(spr, g.x - s / 2, g.y - s / 2, s, s);
    }
    // Plate corners flash as the seed completes.
    const seedFlash = Math.exp(-Math.pow((frame - 16) / 6, 2));
    if (seedFlash > 0.03) {
      for (let k = 0; k < 6; k++) {
        const a = k * SIXTH;
        const s = gs * 1.1 * seedFlash;
        ctx.globalAlpha = seedFlash;
        ctx.drawImage(spr, cx + Math.cos(a) * r0 - s / 2, cy + Math.sin(a) * r0 - s / 2, s, s);
      }
    }
    // The crystallization front: growing tips glow.
    for (const t of tipsLive) {
      const s = gs * (t.c === 0 ? 0.75 : 0.36);
      ctx.globalAlpha = t.c === 0 ? 0.95 : 0.6;
      ctx.drawImage(spr, t.x - s / 2, t.y - s / 2, s, s);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";

    // ---------- vignette / transparent edge ----------
    if (!transparent) {
      const v = ctx.createRadialGradient(cx, cy, S * 0.35, w / 2, h / 2, Math.hypot(w, h) * 0.62);
      v.addColorStop(0, css(BG, 0));
      v.addColorStop(1, css(dark ? mixRGB(BG, SHADE, 0.4) : mixRGB(BG, ink, 0.05), dark ? 0.7 : 0.45));
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, w, h);
    } else {
      ctx.globalCompositeOperation = "destination-in";
      ctx.setTransform(w / 2, 0, 0, h / 2, w / 2, h / 2);
      const mm = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
      mm.addColorStop(0, css(SHADE, 1));
      mm.addColorStop(0.78, css(SHADE, 1));
      mm.addColorStop(1, css(SHADE, 0));
      ctx.fillStyle = mm;
      ctx.fillRect(-1.5, -1.5, 3, 3);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = "source-over";
    }
  }, [frame, geo, asset, w, h, S, primary, secondary, color, background, transparent, dark, ink, BG, portrait]);

  // ---------- caption ----------
  const capIn = easeOut(ramp(frame, [F_CAP0, F_CAP1], [0, 1]));
  const capGlow = !transparent ? `0 0 ${Math.round(S * 0.02)}px ${css(BG, 0.9)}, 0 0 ${Math.round(S * 0.05)}px ${css(rgbOf(primary), dark ? 0.35 * capIn : 0.12 * capIn)}` : undefined;

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <AbsoluteFill data-21st-slot="logo">
        <canvas ref={ref} width={w} height={h} style={{ width: "100%", height: "100%", display: "block" }} />
      </AbsoluteFill>
      {hasCaption ? (
        <div
          data-21st-slot="caption"
          style={{
            position: "absolute",
            left: P.cx - P.capW / 2,
            width: P.capW,
            top: P.capY - P.capH / 2,
            height: P.capH,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontFamily: font,
            fontWeight: 500,
            fontSize: capSize,
            lineHeight: 1.22,
            letterSpacing: "0.01em",
            color,
            opacity: capIn,
            textShadow: capGlow,
            transform: capIn < 1 ? `translateY(${((1 - capIn) * S * 0.018).toFixed(2)}px)` : undefined,
            whiteSpace: "normal",
            overflowWrap: "anywhere",
          }}
        >
          {caption}
        </div>
      ) : null}
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.06 : 0.08, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
