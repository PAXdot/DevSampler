// Built with Remotion - https://remotion.pro/license
import React, { useId, useMemo } from "react";
import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, fitFontSize, springSnap, useLayout } from "../../../kit/index";
import type { Aspect } from "../../../kit/spec";
import { rng } from "../_lib/noise";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./pop-up-book-spread.schema";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];
type V3 = [number, number, number];

/*
 * A hardcover pop-up book, built from CSS 3D planes (no WebGL). The near half lies on
 * the table, the far half (the "lid") hinges up from the gutter. Every die-cut layer is
 * a parallel fold: its base is glued to the near page and it stays parallel to the far
 * page, so it lies flat when the book is closed and stands up as the book opens.
 * Shadows are cast analytically from one key light onto the parallel planes behind.
 *
 * Units: geometry is in "D" (the depth of one page); S converts D to px.
 * Table space: x right, y toward the camera, z up from the table.
 */

const DAY: RGB = [255, 255, 255];
const NIGHT: RGB = [0, 0, 0];
const DEG = Math.PI / 180;

/** Page block thickness, board thickness, board overhang. */
const TH = 0.05;
const BT = 0.016;
const OV = 0.024;
const Z0 = BT + TH;
/** Hinge pivot (table y) and camera perspective distance. */
const PIVOT = 0.4;
const PERSP = 3.6;

/** Key light (table space): from the front left, above. */
const L: V3 = (() => {
  const v: V3 = [-0.7, 0.45, 0.56];
  const n = Math.hypot(...v);
  return [v[0] / n, v[1] / n, v[2] / n];
})();

type Cfg = { ratio: number; elev: number; lean: number; yaw: number; fitW: number; fitH: number; cardW: number; cardH: number; cloud: number; sunV: number; sunR: number };
const CFG: Record<Aspect, Cfg> = {
  "16:9": { ratio: 1.9, elev: 19, lean: 13, yaw: -7, fitW: 0.8, fitH: 0.86, cardW: 1.0, cardH: 0.42, cloud: 1.15, sunV: 0.8, sunR: 0.125 },
  "1:1": { ratio: 1.42, elev: 22, lean: 15, yaw: -7, fitW: 0.86, fitH: 0.8, cardW: 0.86, cardH: 0.44, cloud: 1.0, sunV: 0.8, sunR: 0.13 },
  "9:16": { ratio: 1.02, elev: 26, lean: 18, yaw: -5, fitW: 0.9, fitH: 0.8, cardW: 0.9, cardH: 0.66, cloud: 0.85, sunV: 0.8, sunR: 0.15 },
};

// Timeline (frames at 30 fps).
const OPEN = 8;
const LAG = [2, 6, 10, 15];
const CAM_END = 80;
/** Camera start offsets: higher, turned, further away. */
const CAM_ELEV = 18;
const CAM_YAW = -14;
const CAM_DZ = -0.5;
const LID_SPRING = { damping: 8.5, stiffness: 30, mass: 1 };
const LAYER_SPRING = { damping: 10, stiffness: 70, mass: 0.8 };
const CARD_SPRING = { damping: 9, stiffness: 105, mass: 0.7 };

// ---------- color helpers (all paint is derived from props) ----------
function parse(c: string, fallback: RGB): RGB {
  let hex = /^#([0-9a-f]{3,8})$/i.exec(c.trim())?.[1];
  if (hex) {
    if (hex.length <= 4) hex = hex.slice(0, 3).split("").map((k) => k + k).join("");
    const n = parseInt(hex.slice(0, 6), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  const m = /^rgba?\(([^)]+)\)$/.exec(c.trim());
  if (m) {
    const p = m[1]!.split(/[\s,/]+/).filter(Boolean).map(parseFloat);
    return [p[0] ?? 0, p[1] ?? 0, p[2] ?? 0];
  }
  return fallback;
}
const css = (c: RGB, a = 1) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${Math.max(0, Math.min(1, a)).toFixed(3)})`;
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const lin = (v: number) => {
  const s = v / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
};
const relLum = (c: RGB) => 0.2126 * lin(c[0]) + 0.7152 * lin(c[1]) + 0.0722 * lin(c[2]);
const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

// ---------- paper grain (generated once, deterministic) ----------
let GRAIN_CACHE = "";
function grainTexture(): string {
  if (GRAIN_CACHE || typeof document === "undefined") return GRAIN_CACHE;
  const N = 200;
  const c = document.createElement("canvas");
  c.width = N;
  c.height = N;
  const ctx = c.getContext("2d", { willReadFrequently: true });
  if (!ctx) return "";
  const img = ctx.createImageData(N, N);
  const r = rng("pop-up-book-grain");
  for (let i = 0; i < N * N; i++) {
    const v = r();
    const light = v > 0.5;
    const a = Math.pow(Math.abs(v - 0.5) * 2, 2.2) * 34;
    const g = light ? 255 : 0;
    img.data[i * 4] = g;
    img.data[i * 4 + 1] = g;
    img.data[i * 4 + 2] = g;
    img.data[i * 4 + 3] = a;
  }
  // Paper fibres: short faint streaks.
  for (let f = 0; f < 140; f++) {
    let x = r() * N;
    let y = r() * N;
    const ang = r() * Math.PI * 2;
    const len = 6 + r() * 16;
    const light = r() > 0.45;
    for (let s = 0; s < len; s++) {
      x = (x + Math.cos(ang) + N) % N;
      y = (y + Math.sin(ang) + N) % N;
      const k = ((y | 0) * N + (x | 0)) * 4;
      img.data[k] = light ? 255 : 0;
      img.data[k + 1] = light ? 255 : 0;
      img.data[k + 2] = light ? 255 : 0;
      img.data[k + 3] = 30;
    }
  }
  ctx.putImageData(img, 0, 0);
  GRAIN_CACHE = c.toDataURL("image/png");
  return GRAIN_CACHE;
}

// ---------- silhouettes ----------
type Shape = { paths: string[]; circles: [number, number, number][]; rects: [number, number, number, number, number][] };

/** Knife-cut mountain ridge: straight segments through (fx, fy) with fy = height fraction. */
function ridge(w: number, h: number, pts: [number, number][]): string {
  return `M0 ${h} ` + pts.map(([fx, fy]) => `L${(fx * w).toFixed(1)} ${(h * (1 - fy)).toFixed(1)}`).join(" ") + ` L${w} ${h} Z`;
}
/** Smooth rolling hills (Catmull-Rom through the points). */
function hills(w: number, h: number, pts: [number, number][]): string {
  const P = pts.map(([fx, fy]) => [fx * w, h * (1 - fy)] as [number, number]);
  let d = `M0 ${h} L${P[0]![0].toFixed(1)} ${P[0]![1].toFixed(1)}`;
  for (let i = 0; i < P.length - 1; i++) {
    const p0 = P[Math.max(0, i - 1)]!;
    const p1 = P[i]!;
    const p2 = P[i + 1]!;
    const p3 = P[Math.min(P.length - 1, i + 2)]!;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0]!.toFixed(1)} ${c1[1]!.toFixed(1)} ${c2[0]!.toFixed(1)} ${c2[1]!.toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d + ` L${w} ${h} Z`;
}
/** Two scalloped cloud banks standing at the sides (union of circles + a base strip). */
function clouds(w: number, h: number, S: number, scale: number): Shape {
  const circles: Shape["circles"] = [];
  const rects: Shape["rects"] = [];
  const bank: [number, number, number][] = [
    [-0.17, 0.1, 0.085],
    [-0.07, 0.17, 0.125],
    [0.06, 0.15, 0.11],
    [0.16, 0.085, 0.08],
  ];
  for (const side of [-1, 1]) {
    const cx = w / 2 + side * (w / 2 - 0.25 * S * scale);
    for (const [ox, oy, r] of bank) circles.push([cx + side * ox * S * scale, h - oy * S * scale, r * S * scale]);
    rects.push([cx - 0.24 * S * scale, h - 0.09 * S * scale, 0.48 * S * scale, 0.09 * S * scale, 0]);
  }
  return { paths: [], circles, rects };
}

/** Shape elements without a wrapping <g>, so the same call also works inside <clipPath>. */
const ShapeEls: React.FC<{ shape: Shape; fill: string; dx?: number; dy?: number }> = ({ shape, fill, dx = 0, dy = 0 }) => {
  const tr = dx || dy ? `translate(${dx} ${dy})` : undefined;
  return (
    <>
      {shape.paths.map((d, i) => (
        <path key={`p${i}`} d={d} fill={fill} transform={tr} />
      ))}
      {shape.circles.map(([x, y, r], i) => (
        <circle key={`c${i}`} cx={x + dx} cy={y + dy} r={r} fill={fill} />
      ))}
      {shape.rects.map(([x, y, w, h, rx], i) => (
        <rect key={`r${i}`} x={x + dx} y={y + dy} width={w} height={h} rx={rx} fill={fill} />
      ))}
    </>
  );
};

// ---------- 3D primitives ----------
const Group: React.FC<{ t: string; children?: React.ReactNode }> = ({ t, children }) => (
  <div style={{ position: "absolute", left: 0, top: 0, width: 0, height: 0, transformOrigin: "0 0", transform: t, transformStyle: "preserve-3d" }}>{children}</div>
);
const Face: React.FC<{ w: number; h: number; t: string; style?: React.CSSProperties; children?: React.ReactNode }> = ({ w, h, t, style, children }) => (
  <div style={{ position: "absolute", left: 0, top: 0, width: w, height: h, transformOrigin: "0 0", transform: t, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", overflow: "hidden", ...style }}>{children}</div>
);

type Layer = { d: number; h: number; w: number; beta: number; u: V3; n: V3 };
const planeOf = (beta: number): { u: V3; n: V3 } => ({ u: [0, -Math.cos(beta), Math.sin(beta)], n: [0, Math.sin(beta), Math.cos(beta)] });

/**
 * SVG matrix that maps the caster's silhouette (its own box) onto the target plane's box,
 * projected along the key light. Both planes contain the x axis.
 */
function castMatrix(k: Layer, j: Layer, S: number): { m: string; reach: number } | null {
  const ln = dot(L, j.n);
  if (ln <= 0.02) return null;
  const t0 = ((k.d - j.d) * j.n[1]) / ln;
  const t1 = dot(k.u, j.n) / ln;
  const lu = dot(L, j.u);
  const a1 = -t1 * L[0];
  const a0 = -t0 * L[0];
  const b1 = dot(k.u, j.u) - t1 * lu;
  const b0 = (k.d - j.d) * j.u[1] - t0 * lu;
  const wk = k.w * S, hk = k.h * S, wj = j.w * S, hj = j.h * S;
  const e = -wk / 2 + hk * a1 + a0 * S + wj / 2;
  const f = hj - hk * b1 - b0 * S;
  return { m: `matrix(1 0 ${(-a1).toFixed(4)} ${b1.toFixed(4)} ${e.toFixed(2)} ${f.toFixed(2)})`, reach: Math.max(0, t0 + t1 * k.h * 0.5) };
}
/** Same, onto the near page (floor) box: x from the left page edge, y from the spine. */
function floorMatrix(k: Layer, pageW: number, S: number): string {
  const fa = (-k.u[2] * L[0]) / L[2];
  const fb = k.u[1] - (k.u[2] * L[1]) / L[2];
  const wk = k.w * S, hk = k.h * S;
  return `matrix(1 0 ${(-fa).toFixed(4)} ${(-fb).toFixed(4)} ${(-wk / 2 + (pageW * S) / 2 + hk * fa).toFixed(2)} ${(k.d * S + hk * fb).toFixed(2)})`;
}

function project(p: V3, tilt: number, yaw: number, dz = 0): [number, number] {
  let x = p[0];
  let y = p[1] - PIVOT;
  const z = p[2];
  const cy = Math.cos(yaw), sy = Math.sin(yaw);
  [x, y] = [x * cy - y * sy, x * sy + y * cy];
  const ct = Math.cos(tilt), st = Math.sin(tilt);
  const y2 = y * ct - z * st;
  const z2 = y * st + z * ct;
  const k = PERSP / (PERSP - z2 - dz);
  return [x * k, y2 * k];
}

export const Component: React.FC<Props> = ({ text, kicker, logo, color, primary, secondary, background, fontFamily, grain }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: W, height: H, aspect } = useLayout();
  const cfg = CFG[aspect];
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const font = brandFontStack(fontFamily);
  const grainUrl = useMemo(() => (grain ? grainTexture() : ""), [grain]);
  const logoSrc = logo || SAMPLE_LOGO;

  // ---------- palette ----------
  const transparent = background === "transparent";
  const inkT = parse(color, [30, 16, 54]);
  const P = parse(primary, [124, 58, 237]);
  const Sc = parse(secondary, [244, 114, 182]);
  const bgRGB = parse(background, DAY);
  const dark = transparent ? relLum(inkT) > 0.45 : relLum(bgRGB) < 0.3;
  const base = transparent ? (dark ? mix(inkT, NIGHT, 0.9) : mix(inkT, DAY, 0.96)) : bgRGB;
  const page = dark ? mix(mix(base, inkT, 0.08), P, 0.06) : mix(mix(base, DAY, 0.62), P, 0.015);
  const cardPaper = dark ? mix(page, inkT, 0.05) : mix(page, DAY, 0.7);
  const coverRGB = dark ? mix(P, NIGHT, 0.3) : mix(P, NIGHT, 0.18);
  const shadowRGB = mix(P, NIGHT, 0.86);
  const edgeA = dark ? mix(page, inkT, 0.1) : mix(page, DAY, 0.4);
  const edgeB = dark ? mix(page, NIGHT, 0.35) : mix(page, shadowRGB, 0.16);
  const layerRGB: RGB[] = [Sc, P, dark ? mix(mix(P, Sc, 0.35), page, 0.2) : mix(P, DAY, 0.52)];
  const rimRGB = layerRGB.map((c) => mix(c, DAY, dark ? 0.5 : 0.45));
  const shadowA = dark ? 0.6 : 0.42;

  // ---------- geometry & fit ----------
  const Wp = cfg.ratio;
  const betaSet = (90 - cfg.lean) * DEG;
  const fit = useMemo(() => {
    const bbox = (pts: V3[], tilt: number, yaw: number, dz: number) => {
      const pr = pts.map((p) => project(p, tilt, yaw, dz));
      const xs = pr.map((p) => p[0]);
      const ys = pr.map((p) => p[1]);
      return { x0: Math.min(...xs), x1: Math.max(...xs), y0: Math.min(...ys), y1: Math.max(...ys) };
    };
    const open: V3[] = [];
    const closed: V3[] = [];
    const { u, n } = planeOf(betaSet);
    for (const x of [-(Wp / 2 + OV), Wp / 2 + OV]) {
      open.push([x, 1 + OV, 0], [x, 1 + OV, Z0], [x, 0, 0]);
      const top = 1 + OV;
      open.push([x, top * u[1], Z0 + top * u[2]]);
      open.push([x, top * u[1] - n[1] * (TH + BT), Z0 + top * u[2] - n[2] * (TH + BT)]);
      closed.push([x, 0, 0], [x, 1 + OV, 0], [x, 0, 2 * Z0], [x, 1 + OV, 2 * Z0]);
    }
    const b = bbox(open, (90 - cfg.elev) * DEG, cfg.yaw * DEG, 0);
    const s = Math.min((cfg.fitW * W) / (b.x1 - b.x0), (cfg.fitH * H) / (b.y1 - b.y0));
    const c = bbox(closed, (90 - cfg.elev - CAM_ELEV) * DEG, (cfg.yaw + CAM_YAW) * DEG, CAM_DZ);
    return { S: s, c1: [(b.x0 + b.x1) / 2, (b.y0 + b.y1) / 2], c0: [(c.x0 + c.x1) / 2, (c.y0 + c.y1) / 2 + 0.06] };
  }, [W, H, Wp, betaSet, cfg.elev, cfg.yaw, cfg.fitW, cfg.fitH]);
  const S = fit.S;

  // ---------- motion ----------
  const camT = clamp01(frame / CAM_END);
  const cam = 1 - Math.pow(1 - camT, 4);
  const elev = cfg.elev + (1 - cam) * CAM_ELEV;
  const yaw = cfg.yaw + (1 - cam) * CAM_YAW;
  const dz = (1 - cam) * CAM_DZ;
  const ox = W / 2 - S * (fit.c0[0]! + (fit.c1[0]! - fit.c0[0]!) * cam);
  const oy = H / 2 - S * (fit.c0[1]! + (fit.c1[1]! - fit.c0[1]!) * cam);
  const tilt = 90 - elev;

  const sLid = springSnap(frame, fps, OPEN, LID_SPRING);
  const lidBeta = (180 - sLid * (180 - (90 - cfg.lean))) * DEG;
  const cap = sLid + 0.14 * Math.pow(sLid, 4);
  const sLayer = LAG.map((lag, i) => Math.min(springSnap(frame, fps, OPEN + lag, i === 3 ? CARD_SPRING : LAYER_SPRING), cap));
  const betaOf = (s: number) => (180 - s * (180 - (90 - cfg.lean))) * DEG;

  const cardW = Math.min(cfg.cardW, Wp - 0.12);
  const specs = [
    { d: 0.08, h: 0.76, w: Wp - 0.06 },
    { d: 0.22, h: 0.53, w: Wp - 0.1 },
    { d: aspect === "9:16" ? 0.28 : 0.38, h: 0.4, w: Wp - 0.04 },
    { d: Math.min(0.58, 0.99 - cfg.cardH), h: cfg.cardH, w: cardW },
  ];
  const layers: Layer[] = specs.map((sp, i) => {
    const beta = betaOf(sLayer[i]!);
    return { ...sp, beta, ...planeOf(beta) };
  });
  const farPage: Layer = { d: 0, h: 1, w: Wp, beta: lidBeta, ...planeOf(lidBeta) };

  // ---------- shading ----------
  const lamFloor = L[2];
  const shade = (n: V3): string => {
    const lam = dot(n, L);
    if (lam >= lamFloor) return css(DAY, (lam - lamFloor) * (dark ? 0.12 : 0.35));
    return css(shadowRGB, Math.min(0.62, (lamFloor - lam) * (dark ? 0.75 : 0.62)));
  };
  const shadeEl = (n: V3) => <div style={{ position: "absolute", inset: 0, background: shade(n) }} />;
  const paperBg = (c: RGB): React.CSSProperties => ({
    backgroundColor: css(c),
    backgroundImage: grainUrl ? `url(${grainUrl})` : undefined,
    backgroundSize: `${Math.round(S * 0.32)}px`,
  });

  // ---------- silhouettes (px) ----------
  const shapes = useMemo(() => {
    const px = specs.map((s) => ({ w: s.w * S, h: s.h * S }));
    const back: Shape = {
      paths: [
        ridge(px[0]!.w, px[0]!.h, [
          [0, 0.5], [0.06, 0.74], [0.12, 0.6], [0.2, 0.97], [0.29, 0.64], [0.36, 0.8], [0.44, 0.5], [0.5, 0.42], [0.56, 0.5], [0.64, 0.83], [0.71, 0.63], [0.8, 1.0], [0.88, 0.6], [0.94, 0.77], [1, 0.52],
        ]),
      ],
      circles: [],
      rects: [],
    };
    const mid: Shape = {
      paths: [hills(px[1]!.w, px[1]!.h, [[0, 0.62], [0.12, 0.92], [0.27, 0.58], [0.42, 0.82], [0.58, 0.6], [0.74, 0.96], [0.89, 0.64], [1, 0.8]])],
      circles: [],
      rects: [],
    };
    const wings = clouds(px[2]!.w, px[2]!.h, S, cfg.cloud);
    const card: Shape = { paths: [], circles: [], rects: [[0, 0, px[3]!.w, px[3]!.h, S * 0.02]] };
    return [back, mid, wings, card];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [S, Wp, cfg.cardH, cardW, cfg.cloud]);

  // ---------- text sizing ----------
  const minFont = aspect === "9:16" ? H * 0.031 : H * 0.019;
  const cw = cardW * S;
  const chh = cfg.cardH * S;
  const pad = chh * 0.12;
  const innerW = cw - pad * 2.4;
  const kSize = kicker.trim() ? Math.max(minFont, chh * 0.07) : 0;
  const ornament = kicker.trim() ? kSize * 0.25 : 0;
  const kickerLines = kicker.trim() ? Math.max(1, Math.ceil(kicker.length * .62 * kSize / innerW)) : 0;
  const headBoxH = chh - pad * 2 - kSize * 1.4 * kickerLines - ornament * 1.1;
  const displayFace = /Instrument Serif|DM Serif Display|Bebas/i.test(fontFamily);
  const serif = /Serif|Baskerville/i.test(fontFamily);
  const weight = displayFace ? 400 : serif ? 700 : 600;
  const charEm = /Bebas/i.test(fontFamily) ? 0.4 : serif ? 0.55 : 0.53;
  const chars = text.length;
  const hSize = Math.max(
    minFont,
    ...[1, 2, 3].map((lines) => fitFontSize({ chars, boxW: innerW, boxH: headBoxH, lines, charEm, lineHeight: 1.18, max: chh * 0.36, min: minFont })),
  );

  // ---------- shadows ----------
  const pairs: [number, number][] = [
    [3, 2], [3, 1], [2, 1], [2, 0], [1, 0], [0, -1], [1, -1],
  ];
  const targetOf = (j: number) => (j < 0 ? farPage : layers[j]!);
  const castsOnto = (j: number) => pairs.filter(([, t]) => t === j).map(([k]) => k);
  const shadowSet = (j: number, clipId?: string) => {
    const tgt = targetOf(j);
    return (
      <g clipPath={clipId ? `url(#${clipId})` : undefined}>
        {castsOnto(j).map((k) => {
          const cm = castMatrix(layers[k]!, tgt, S);
          if (!cm) return null;
          const blur = S * (0.006 + cm.reach * 0.05);
          return (
            <g key={k} filter={`url(#${uid}b${k}_${j + 1})`} opacity={shadowA}>
              <defs>
                <filter id={`${uid}b${k}_${j + 1}`} x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation={blur.toFixed(2)} />
                </filter>
              </defs>
              <g transform={cm.m}>
                <ShapeEls shape={shapes[k]!} fill={css(shadowRGB)} />
              </g>
            </g>
          );
        })}
      </g>
    );
  };

  // ---------- table transform ----------
  const tableT = `translate3d(${ox.toFixed(2)}px, ${oy.toFixed(2)}px, ${(dz * S).toFixed(2)}px) rotateX(${tilt.toFixed(3)}deg) rotateZ(${yaw.toFixed(3)}deg) translate3d(0px, ${(-PIVOT * S).toFixed(2)}px, 0px)`;
  const px = (v: number) => v * S;

  const stripes = (horizontal: boolean) => {
    const step = Math.max(2, px(TH) / 6);
    return `repeating-linear-gradient(${horizontal ? "to bottom" : "to right"}, ${css(edgeA)} 0px, ${css(edgeA)} ${(step * 0.72).toFixed(2)}px, ${css(edgeB)} ${(step * 0.72).toFixed(2)}px, ${css(edgeB)} ${step.toFixed(2)}px)`;
  };

  const nFloor: V3 = [0, 0, 1];
  const nFront: V3 = [0, 1, 0];
  const nRight: V3 = [1, 0, 0];
  const nLeft: V3 = [-1, 0, 0];
  const lidN = farPage.n;
  const lidU = farPage.u;

  // Foil sheen on the cover moves as the lid swings.
  const sheen = 30 + (lidBeta / DEG - 90) * 0.6;
  const foil = `linear-gradient(125deg, ${css(mix(Sc, DAY, 0.15))} 0%, ${css(mix(Sc, DAY, 0.62))} ${(sheen - 8).toFixed(1)}%, ${css(Sc)} ${sheen.toFixed(1)}%, ${css(mix(Sc, NIGHT, 0.18))} ${(sheen + 24).toFixed(1)}%, ${css(mix(Sc, DAY, 0.4))} 100%)`;

  // ---------- backdrop ----------
  const backdrop = transparent
    ? undefined
    : `radial-gradient(ellipse 75% 70% at 38% 30%, ${css(mix(bgRGB, DAY, dark ? 0.07 : 0.55))} 0%, ${css(bgRGB)} 60%, ${css(mix(bgRGB, shadowRGB, dark ? 0.35 : 0.1))} 100%)`;

  const sunR = cfg.sunR * S;
  const sunCx = (Wp / 2) * S;
  const sunCy = (1 - cfg.sunV) * S;

  return (
    <AbsoluteFill style={{ background: backdrop }}>
      <AbsoluteFill style={{ perspective: `${(PERSP * S).toFixed(1)}px`, perspectiveOrigin: `${ox.toFixed(1)}px ${oy.toFixed(1)}px`, overflow: "hidden" }}>
        <Group t={tableT}>
          {/* Soft ground shadow under the book. */}
          <Face
            w={px(Wp + 1.1)}
            h={px(1.75)}
            t={`translate3d(${px(-(Wp + 1.1) / 2 + 0.12)}px, ${px(-0.55)}px, -1px)`}
            style={{ background: `radial-gradient(closest-side, ${css(shadowRGB, dark ? 0.6 : 0.3)} 0%, ${css(shadowRGB, dark ? 0.32 : 0.14)} 62%, ${css(shadowRGB, 0)} 100%)`, overflow: "visible" }}
          />

          {/* ---- near half: board ---- */}
          <Face w={px(Wp + 2 * OV)} h={px(1 + OV)} t={`translate3d(${px(-(Wp / 2 + OV))}px, 0px, ${px(BT)}px)`} style={paperBg(coverRGB)}>
            {shadeEl(nFloor)}
          </Face>
          <Face w={px(Wp + 2 * OV)} h={px(BT)} t={`translate3d(${px(-(Wp / 2 + OV))}px, ${px(1 + OV)}px, ${px(BT)}px) rotateX(-90deg)`} style={{ backgroundColor: css(mix(coverRGB, NIGHT, 0.12)) }}>
            {shadeEl(nFront)}
          </Face>
          <Face w={px(BT)} h={px(1 + OV)} t={`translate3d(${px(Wp / 2 + OV)}px, 0px, ${px(BT)}px) rotateY(90deg)`} style={{ backgroundColor: css(coverRGB) }}>
            {shadeEl(nRight)}
          </Face>
          <Face w={px(BT)} h={px(1 + OV)} t={`translate3d(${px(-(Wp / 2 + OV))}px, 0px, 0px) rotateY(-90deg)`} style={{ backgroundColor: css(coverRGB) }}>
            {shadeEl(nLeft)}
          </Face>

          {/* ---- near half: page block ---- */}
          <Face w={px(TH)} h={px(1)} t={`translate3d(${px(Wp / 2)}px, 0px, ${px(Z0)}px) rotateY(90deg)`} style={{ backgroundImage: stripes(false) }}>
            {shadeEl(nRight)}
          </Face>
          <Face w={px(TH)} h={px(1)} t={`translate3d(${px(-Wp / 2)}px, 0px, ${px(BT)}px) rotateY(-90deg)`} style={{ backgroundImage: stripes(false) }}>
            {shadeEl(nLeft)}
          </Face>
          <Face w={px(Wp)} h={px(TH)} t={`translate3d(${px(-Wp / 2)}px, ${px(1)}px, ${px(Z0)}px) rotateX(-90deg)`} style={{ backgroundImage: stripes(true) }}>
            {shadeEl(nFront)}
          </Face>
          <Face w={px(Wp)} h={px(1)} t={`translate3d(${px(-Wp / 2)}px, 0px, ${px(Z0)}px)`} style={paperBg(page)}>
            <svg width={px(Wp)} height={px(1)} style={{ position: "absolute", inset: 0 }}>
              <defs>
                <linearGradient id={`${uid}gut`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor={css(shadowRGB)} stopOpacity={dark ? 0.6 : 0.34} />
                  <stop offset="0.035" stopColor={css(shadowRGB)} stopOpacity={dark ? 0.25 : 0.12} />
                  <stop offset="0.09" stopColor={css(DAY)} stopOpacity={dark ? 0.04 : 0.22} />
                  <stop offset="0.2" stopColor={css(DAY)} stopOpacity={0} />
                </linearGradient>
                <clipPath id={`${uid}floorclip`}>
                  <rect x={0} y={px(specs[1]!.d)} width={px(Wp)} height={px(1 - specs[1]!.d)} />
                </clipPath>
                <filter id={`${uid}fblur`} x="-10%" y="-30%" width="120%" height="160%">
                  <feGaussianBlur stdDeviation={(S * 0.012).toFixed(2)} />
                </filter>
                <filter id={`${uid}ao`} x="-5%" y="-200%" width="110%" height="500%">
                  <feGaussianBlur stdDeviation={(S * 0.006).toFixed(2)} />
                </filter>
              </defs>
              <rect x={0} y={0} width={px(Wp)} height={px(1)} fill={`url(#${uid}gut)`} />
              {/* Printed rules near the fore-edge. */}
              <rect x={px(0.08)} y={px(0.935)} width={px(Wp - 0.16)} height={Math.max(1, S * 0.0028)} fill={css(P, 0.45)} />
              <rect x={px(0.08)} y={px(0.948)} width={px(Wp - 0.16)} height={Math.max(1, S * 0.0012)} fill={css(P, 0.35)} />
              {/* Cast shadows of the wings and the card on the floor. */}
              <g clipPath={`url(#${uid}floorclip)`} filter={`url(#${uid}fblur)`} opacity={shadowA * 0.9}>
                {[2, 3].map((k) => (
                  <g key={k} transform={floorMatrix(layers[k]!, Wp, S)}>
                    <ShapeEls shape={shapes[k]!} fill={css(shadowRGB)} />
                  </g>
                ))}
              </g>
              {/* Contact shadows where each fold meets the page. */}
              <g filter={`url(#${uid}ao)`}>
                {layers.map((ly, i) => {
                  const up = Math.sin(Math.min(Math.PI - 0.0001, Math.max(0.0001, Math.PI - ly.beta)));
                  const x0 = i === 2 ? 0 : (Wp - ly.w) / 2;
                  const w = i === 2 ? Wp : ly.w;
                  return <rect key={i} x={px(x0)} y={px(ly.d) - S * 0.012} width={px(w)} height={S * 0.014} fill={css(shadowRGB)} opacity={(dark ? 0.7 : 0.45) * up * (i === 2 ? 0.5 : 1)} />;
                })}
              </g>
            </svg>
            {shadeEl(nFloor)}
          </Face>

          {/* ---- far half (lid), hinged at the gutter ---- */}
          <Group t={`translate3d(0px, 0px, ${px(Z0)}px) rotateX(${(-lidBeta / DEG).toFixed(3)}deg)`}>
            {/* board inner face: the colored rim around the far page */}
            <Face w={px(Wp + 2 * OV)} h={px(1 + OV)} t={`translate3d(${px(-(Wp / 2 + OV))}px, ${px(-(1 + OV))}px, ${px(-TH)}px)`} style={paperBg(coverRGB)}>
              {shadeEl(lidN)}
            </Face>
            {/* board outer face: the cover, with the stamped logo */}
            <Face
              w={px(Wp + 2 * OV)}
              h={px(1 + OV)}
              t={`translate3d(${px(-(Wp / 2 + OV))}px, 0px, ${px(-(TH + BT))}px) rotateX(180deg)`}
              style={{ ...paperBg(coverRGB), display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: px(0.06),
                  border: `${Math.max(2, S * 0.005).toFixed(1)}px solid ${css(mix(coverRGB, NIGHT, 0.3))}`,
                  boxShadow: `0px ${Math.max(1, S * 0.003).toFixed(1)}px 0px ${css(mix(coverRGB, DAY, 0.25))}`,
                  borderRadius: S * 0.01,
                }}
              />
              <div style={{ width: px(0.34), height: px(0.34), borderRadius: "50%", background: foil, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `inset 0px ${(S * 0.004).toFixed(1)}px ${(S * 0.01).toFixed(1)}px ${css(NIGHT, 0.28)}` }}>
                <Img src={logoSrc} style={{ width: "58%", height: "58%", objectFit: "contain" }} />
              </div>
              {shadeEl([-lidN[0], -lidN[1], -lidN[2]])}
            </Face>
            {/* board edges */}
            <Face w={px(Wp + 2 * OV)} h={px(BT)} t={`translate3d(${px(-(Wp / 2 + OV))}px, ${px(-(1 + OV))}px, ${px(-(TH + BT))}px) rotateX(90deg)`} style={{ backgroundColor: css(mix(coverRGB, NIGHT, 0.12)) }}>
              {shadeEl(lidU)}
            </Face>
            <Face w={px(BT)} h={px(1 + OV)} t={`translate3d(${px(Wp / 2 + OV)}px, ${px(-(1 + OV))}px, ${px(-TH)}px) rotateY(90deg)`} style={{ backgroundColor: css(coverRGB) }}>
              {shadeEl(nRight)}
            </Face>
            <Face w={px(BT)} h={px(1 + OV)} t={`translate3d(${px(-(Wp / 2 + OV))}px, ${px(-(1 + OV))}px, ${px(-(TH + BT))}px) rotateY(-90deg)`} style={{ backgroundColor: css(coverRGB) }}>
              {shadeEl(nLeft)}
            </Face>
            {/* page block edges */}
            <Face w={px(Wp)} h={px(TH)} t={`translate3d(${px(-Wp / 2)}px, ${px(-1)}px, ${px(-TH)}px) rotateX(90deg)`} style={{ backgroundImage: stripes(true) }}>
              {shadeEl(lidU)}
            </Face>
            <Face w={px(TH)} h={px(1)} t={`translate3d(${px(Wp / 2)}px, ${px(-1)}px, 0px) rotateY(90deg)`} style={{ backgroundImage: stripes(false) }}>
              {shadeEl(nRight)}
            </Face>
            <Face w={px(TH)} h={px(1)} t={`translate3d(${px(-Wp / 2)}px, ${px(-1)}px, ${px(-TH)}px) rotateY(-90deg)`} style={{ backgroundImage: stripes(false) }}>
              {shadeEl(nLeft)}
            </Face>
            {/* far page */}
            <Face w={px(Wp)} h={px(1)} t={`translate3d(${px(-Wp / 2)}px, ${px(-1)}px, 0px)`} style={paperBg(page)}>
              <svg width={px(Wp)} height={px(1)} style={{ position: "absolute", inset: 0 }}>
                <defs>
                  <linearGradient id={`${uid}gut2`} x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0" stopColor={css(shadowRGB)} stopOpacity={dark ? 0.6 : 0.36} />
                    <stop offset="0.04" stopColor={css(shadowRGB)} stopOpacity={dark ? 0.22 : 0.1} />
                    <stop offset="0.1" stopColor={css(DAY)} stopOpacity={dark ? 0.03 : 0.18} />
                    <stop offset="0.22" stopColor={css(DAY)} stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id={`${uid}sky`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor={css(P)} stopOpacity={dark ? 0.1 : 0.05} />
                    <stop offset="0.75" stopColor={css(Sc)} stopOpacity={dark ? 0.16 : 0.16} />
                  </linearGradient>
                  <radialGradient id={`${uid}sun`} cx="0.38" cy="0.35" r="0.75">
                    <stop offset="0" stopColor={css(mix(Sc, DAY, dark ? 0.35 : 0.72))} />
                    <stop offset="1" stopColor={css(mix(Sc, DAY, dark ? 0.05 : 0.4))} />
                  </radialGradient>
                </defs>
                <rect x={0} y={0} width={px(Wp)} height={px(1)} fill={`url(#${uid}sky)`} />
                {/* printed frame rule */}
                <rect x={px(0.05)} y={px(0.05)} width={px(Wp - 0.1)} height={px(0.9)} fill="none" stroke={css(P, 0.4)} strokeWidth={Math.max(1, S * 0.0025)} />
                <rect x={px(0.063)} y={px(0.063)} width={px(Wp - 0.126)} height={px(0.874)} fill="none" stroke={css(P, 0.25)} strokeWidth={Math.max(1, S * 0.0012)} />
                {/* printed sun disc behind the logo */}
                {[1.55, 1.3].map((k, i) => (
                  <circle key={i} cx={sunCx} cy={sunCy} r={sunR * k} fill="none" stroke={css(Sc, dark ? 0.4 : 0.5)} strokeWidth={Math.max(1, S * 0.003)} strokeDasharray={i === 0 ? `${(S * 0.006).toFixed(1)} ${(S * 0.012).toFixed(1)}` : undefined} />
                ))}
                <circle cx={sunCx} cy={sunCy} r={sunR} fill={`url(#${uid}sun)`} />
                {shadowSet(-1)}
                <rect x={0} y={0} width={px(Wp)} height={px(1)} fill={`url(#${uid}gut2)`} />
              </svg>
              <div data-21st-slot="logo" style={{ position: "absolute", left: sunCx - sunR * 0.62, top: sunCy - sunR * 0.62, width: sunR * 1.24, height: sunR * 1.24 }}>
                <Img src={logoSrc} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
              {shadeEl(lidN)}
            </Face>
          </Group>

          {/* ---- die-cut layers on parallel-fold hinges ---- */}
          {layers.map((ly, i) => {
            const w = px(ly.w);
            const h = px(ly.h);
            const backN: V3 = [-ly.n[0], -ly.n[1], -ly.n[2]];
            const isCard = i === 3;
            const backFill = isCard ? mix(cardPaper, shadowRGB, 0.08) : mix(layerRGB[i]!, cardPaper, 0.55);
            return (
              <Group key={i} t={`translate3d(0px, ${px(ly.d).toFixed(2)}px, ${(px(Z0) + (i + 1) * Math.max(1.2, S * 0.0025)).toFixed(2)}px) rotateX(${(-ly.beta / DEG).toFixed(3)}deg)`}>
                {/* back of the layer (seen while it still lies face down) */}
                <Face w={w} h={h} t={`translate3d(${(w / 2).toFixed(2)}px, ${(-h).toFixed(2)}px, 0px) rotateY(180deg)`} style={{ overflow: "visible" }}>
                  <svg width={w} height={h} style={{ position: "absolute", inset: 0, overflow: "visible" }}>
                    <defs>
                      <clipPath id={`${uid}clip${i}`}>
                        <ShapeEls shape={shapes[i]!} fill={css(DAY)} />
                      </clipPath>
                    </defs>
                    <ShapeEls shape={shapes[i]!} fill={css(backFill)} />
                    <rect x={-w} y={-h} width={w * 3} height={h * 3} fill={shade(backN)} clipPath={`url(#${uid}clip${i})`} />
                  </svg>
                </Face>
                {isCard ? (
                  <Face
                    w={w}
                    h={h}
                    t={`translate3d(${(-w / 2).toFixed(2)}px, ${(-h).toFixed(2)}px, 0px)`}
                    style={{
                      ...paperBg(cardPaper),
                      borderRadius: S * 0.02,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: `${pad.toFixed(1)}px ${(pad * 1.2).toFixed(1)}px`,
                      boxSizing: "border-box",
                    }}
                  >
                    <div style={{ position: "absolute", inset: pad * 0.32, border: `${Math.max(1.5, S * 0.004).toFixed(1)}px solid ${css(P)}`, borderRadius: S * 0.012 }} />
                    <div style={{ position: "absolute", inset: pad * 0.32 + Math.max(4, S * 0.009), border: `${Math.max(1, S * 0.0015).toFixed(1)}px solid ${css(P, 0.55)}`, borderRadius: S * 0.008 }} />
                    {kicker.trim() ? (
                      <div
                        data-21st-slot="kicker"
                        style={{ position: "relative", fontFamily: font, fontSize: kSize, lineHeight: 1.4, fontWeight: serif ? 400 : 500, letterSpacing: "0.04em", color: css(inkT, 0.78), whiteSpace: "normal", maxWidth: innerW, overflowWrap: "anywhere", textAlign: "center" }}
                      >
                        {kicker}
                      </div>
                    ) : null}
                    {kicker.trim() ? (
                      <div style={{ position: "relative", display: "flex", alignItems: "center", gap: ornament * 0.45, margin: `${(ornament * 0.28).toFixed(1)}px 0px ${(ornament * 0.22).toFixed(1)}px` }}>
                        <div style={{ width: ornament * 1.8, height: Math.max(1.5, S * 0.003), background: css(P) }} />
                        <div style={{ width: ornament * 0.42, height: ornament * 0.42, background: css(Sc), transform: "rotate(45deg)" }} />
                        <div style={{ width: ornament * 1.8, height: Math.max(1.5, S * 0.003), background: css(P) }} />
                      </div>
                    ) : null}
                    <div
                      data-21st-slot="text"
                      style={{ position: "relative", fontFamily: font, fontSize: hSize, lineHeight: 1.18, fontWeight: weight, letterSpacing: serif ? "-0.01em" : "-0.025em", color: css(inkT), textAlign: "center", maxWidth: innerW, overflowWrap: "break-word", textWrap: "balance" } as React.CSSProperties}
                    >
                      {text}
                    </div>
                    {shadeEl(ly.n)}
                  </Face>
                ) : (
                  <Face w={w} h={h} t={`translate3d(${(-w / 2).toFixed(2)}px, ${(-h).toFixed(2)}px, 0px)`} style={{ overflow: "visible" }}>
                    <svg width={w} height={h} style={{ position: "absolute", inset: 0, overflow: "visible" }}>
                      <defs>
                        <linearGradient id={`${uid}lg${i}`} x1="0" y1="0" x2="0" y2={h} gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor={css(DAY)} stopOpacity={dark ? 0.1 : 0.16} />
                          <stop offset="0.55" stopColor={css(DAY)} stopOpacity={0} />
                          <stop offset="0.9" stopColor={css(shadowRGB)} stopOpacity={0.12} />
                          <stop offset="1" stopColor={css(shadowRGB)} stopOpacity={dark ? 0.45 : 0.3} />
                        </linearGradient>
                        {grainUrl ? (
                          <pattern id={`${uid}gr${i}`} patternUnits="userSpaceOnUse" width={S * 0.32} height={S * 0.32}>
                            <image href={grainUrl} width={S * 0.32} height={S * 0.32} />
                          </pattern>
                        ) : null}
                      </defs>
                      {/* lit cut edge, then the colored paper */}
                      <ShapeEls shape={shapes[i]!} fill={css(rimRGB[i]!)} dy={-Math.max(1.5, S * (dark ? 0.006 : 0.0045))} />
                      <ShapeEls shape={shapes[i]!} fill={css(layerRGB[i]!)} />
                      <g clipPath={`url(#${uid}clip${i})`}>
                        {grainUrl ? <rect x={0} y={-h} width={w} height={h * 2} fill={`url(#${uid}gr${i})`} /> : null}
                        <rect x={0} y={-h} width={w} height={h * 2} fill={`url(#${uid}lg${i})`} />
                      </g>
                      {shadowSet(i, `${uid}clip${i}`)}
                      <rect x={0} y={-h} width={w} height={h * 2} fill={shade(ly.n)} clipPath={`url(#${uid}clip${i})`} />
                    </svg>
                  </Face>
                )}
              </Group>
            );
          })}
        </Group>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
