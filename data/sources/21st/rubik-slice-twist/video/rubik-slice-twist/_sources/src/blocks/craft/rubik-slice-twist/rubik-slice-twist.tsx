// Built with Remotion - https://remotion.pro/license
import React, { useState } from "react";
import { AbsoluteFill, Img, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, easeOut, expoOut, fitFontSize, luminance, useLayout, withAlpha } from "../../../kit/index";
import { SAMPLE_LOGO, SAMPLE_SCREENSHOT } from "../_lib/samples";
import type { schema } from "./rubik-slice-twist.schema";

type Props = z.infer<typeof schema>;
type RGB = [number, number, number];
type V3 = [number, number, number];
/** Row-major 3x3 rotation. */
type M3 = number[];

const DEG = Math.PI / 180;
const SETTLED = 146;

// ---------- color helpers: every color comes from props; pure light and shade only as alpha ----------
const hex2 = (v: number) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
const toHex = (c: RGB) => "#" + hex2(c[0]) + hex2(c[1]) + hex2(c[2]);
const LIGHT = toHex([255, 255, 255]);
const SHADE = toHex([0, 0, 0]);
function parse(color: string): RGB {
  let h = /^#([0-9a-f]{3,8})$/i.exec(color)?.[1];
  if (h) {
    if (h.length === 3 || h.length === 4) h = h.slice(0, 3).split("").map((c) => c + c).join("");
    const n = parseInt(h.slice(0, 6), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  const m = /^rgba?\(([^)]+)\)$/i.exec(color);
  if (m) {
    const p = m[1]!.split(/[\s,/]+/).filter(Boolean).map((v) => parseFloat(v));
    if (p.length >= 3) return [p[0]!, p[1]!, p[2]!];
  }
  return [128, 128, 128];
}
const mix = (a: string, b: string, t: number) => {
  const A = parse(a), B = parse(b);
  return toHex([A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t, A[2] + (B[2] - A[2]) * t]);
};

// ---------- 3D math (CSS conventions: x right, y down, z toward the viewer) ----------
function rot(axis: number, deg: number): M3 {
  const c = Math.cos(deg * DEG), s = Math.sin(deg * DEG);
  if (axis === 0) return [1, 0, 0, 0, c, -s, 0, s, c];
  if (axis === 1) return [c, 0, s, 0, 1, 0, -s, 0, c];
  return [c, -s, 0, s, c, 0, 0, 0, 1];
}
const mul = (a: M3, b: M3): M3 => {
  const o: number[] = new Array(9).fill(0);
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) o[i * 3 + j] = a[i * 3]! * b[j]! + a[i * 3 + 1]! * b[3 + j]! + a[i * 3 + 2]! * b[6 + j]!;
  return o;
};
const app = (m: M3, v: V3): V3 => [m[0]! * v[0] + m[1]! * v[1] + m[2]! * v[2], m[3]! * v[0] + m[4]! * v[1] + m[5]! * v[2], m[6]! * v[0] + m[7]! * v[1] + m[8]! * v[2]];
const norm = (v: V3): V3 => { const l = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / l, v[1] / l, v[2] / l]; };
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const css3 = (m: M3) => `matrix3d(${[m[0], m[3], m[6], 0, m[1], m[4], m[7], 0, m[2], m[5], m[8], 0, 0, 0, 0, 1].map((v) => (Math.abs(v!) < 1e-9 ? 0 : v!).toFixed(6)).join(",")})`;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

// ---------- the twist script: three quick scramble twists, then the same three back, snappier ----------
type Twist = { start: number; dur: number; axis: number; layer: number; dir: number };
const SCRAMBLE: Omit<Twist, "start" | "dur">[] = [
  { axis: 1, layer: -1, dir: 1 }, // top row
  { axis: 0, layer: 1, dir: 1 }, // right column
  { axis: 1, layer: 1, dir: -1 }, // bottom row
];
const TWISTS: Twist[] = [
  ...SCRAMBLE.map((m, i) => ({ ...m, start: 14 + i * 16, dur: 16 })),
  ...[...SCRAMBLE].reverse().map((m, i) => ({ ...m, dir: -m.dir, start: 82 + i * 12, dur: 12 })),
];
/** Slice progress: a small wind-up, a whip, a few degrees of overshoot, then an exact click home. */
function twistCurve(t: number): number {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  if (t < 0.16) return -0.035 * Math.sin((Math.PI * t) / 0.16);
  const x = (t - 0.16) / 0.84;
  const c1 = 1.25, c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}

// ---------- camera ----------
function camYaw(f: number): number {
  if (f < 34) return lerp(44, 20, expoOut(f / 34));
  if (f < 100) return lerp(20, 13, easeInOut((f - 34) / 66));
  if (f < SETTLED) return lerp(13, -37, easeInOut((f - 100) / (SETTLED - 100)));
  return -37;
}
function camPitch(f: number): number {
  if (f < 34) return lerp(-6, -15, easeOut(f / 34));
  if (f < 100) return -15;
  if (f < SETTLED) return lerp(-15, -21, easeInOut((f - 100) / (SETTLED - 100)));
  return -21;
}

// Face: local normal, CSS placement, and how the face-wide print maps onto the cubie at home (x,y,z).
type FaceId = "front" | "back" | "right" | "left" | "top" | "bottom";
const FACES: { id: FaceId; n: V3; t: string; cr: (p: V3) => [number, number] }[] = [
  { id: "front", n: [0, 0, 1], t: "", cr: ([x, y]) => [x + 1, y + 1] },
  { id: "back", n: [0, 0, -1], t: "rotateY(180deg) ", cr: ([x, y]) => [1 - x, y + 1] },
  { id: "right", n: [1, 0, 0], t: "rotateY(90deg) ", cr: ([, y, z]) => [1 - z, y + 1] },
  { id: "left", n: [-1, 0, 0], t: "rotateY(-90deg) ", cr: ([, y, z]) => [z + 1, y + 1] },
  { id: "top", n: [0, -1, 0], t: "rotateX(90deg) ", cr: ([x, , z]) => [x + 1, z + 1] },
  { id: "bottom", n: [0, 1, 0], t: "rotateX(-90deg) ", cr: ([x, , z]) => [x + 1, 1 - z] },
];
const CUBIES: V3[] = [];
for (let x = -1; x <= 1; x++) for (let y = -1; y <= 1; y++) for (let z = -1; z <= 1; z++) if (x || y || z) CUBIES.push([x, y, z]);

/**
 * A real 3x3 puzzle cube built from 26 CSS 3D cubies. The screenshot is printed across the nine
 * front tiles and the logo across the right face. Three slice twists scramble the screenshot with
 * true perspective and per-face lighting, the cube pauses mixed, then the twists run back snappier,
 * the solved face catches a glint, and the cube turns to show the logo face as the title lands.
 */
export const Component: React.FC<Props> = ({ screenshot, logo, title, color, primary, secondary, background, fontFamily, gloss }) => {
  const f = useCurrentFrame();
  const { width: W, height: H, aspect } = useLayout();
  const [failed, setFailed] = useState<string[]>([]);
  const shotSrc = screenshot && !failed.includes(screenshot) ? screenshot : SAMPLE_SCREENSHOT;
  const logoSrc = logo && !failed.includes(logo) ? logo : SAMPLE_LOGO;
  const onError = (src: string) => () => { if (src) setFailed((v) => (v.includes(src) ? v : [...v, src])); };

  const transparent = background === "transparent";
  const dark = transparent ? luminance(color) > 0.45 : luminance(background) < 0.4;
  const ground = transparent ? (dark ? mix(color, SHADE, 0.9) : mix(color, LIGHT, 0.94)) : background;
  const hasTitle = title.trim().length > 0;

  // ---------- layout per aspect ----------
  const L =
    aspect === "16:9"
      ? { S: 0.138 * H, c0: [0.5 * W, 0.46 * H], c1: [0.655 * W, 0.46 * H], tx: 0.075 * W, ty: 0.5 * H, tw: 0.32 * W, th: 0.44 * H, lines: 3, align: "left" as const, max: 0.075 * H, min: 0.03 * H }
      : aspect === "9:16"
        ? { S: 0.168 * W, c0: [0.5 * W, 0.48 * H], c1: [0.5 * W, 0.56 * H], tx: 0.08 * W, ty: 0.215 * H, tw: 0.84 * W, th: 0.2 * H, lines: 3, align: "center" as const, max: 0.05 * H, min: 0.031 * H }
        : { S: 0.112 * H, c0: [0.5 * W, 0.46 * H], c1: [0.5 * W, 0.39 * H], tx: 0.1 * W, ty: 0.865 * H, tw: 0.8 * W, th: 0.14 * H, lines: 2, align: "center" as const, max: 0.06 * H, min: 0.025 * H };
  const S = L.S;
  const move = hasTitle ? easeInOut((f - 100) / (SETTLED - 100)) : 0;
  const cx = lerp(L.c0[0]!, L.c1[0]!, move), cy = lerp(L.c0[1]!, L.c1[1]!, move);

  // ---------- timing ----------
  const enter = expoOut(f / 30);
  let pulse = 0;
  for (const t of TWISTS) { const e = t.start + t.dur * 0.55; if (f >= e) pulse += Math.exp(-(f - e) / 5) * (f - e < 30 ? 1 : 0); }
  pulse = Math.min(1, pulse);
  const scale = lerp(0.74, 1, enter) * (1 + 0.012 * pulse);
  const yaw = camYaw(f), pitch = camPitch(f);
  const cam = mul(rot(0, pitch), rot(1, yaw));

  // ---------- lighting (camera space) ----------
  const Lk = norm([0.1, -0.65, 0.75]);
  const Hk = norm([Lk[0], Lk[1], Lk[2] + 1]);
  const gl = 0.35 + 0.65 * gloss;

  // ---------- palette ----------
  // The body is the brand ink: near-black plastic on light brands, deeper than the ground on dark ones.
  const body = dark ? mix(ground, SHADE, 0.7) : mix(color, ground, 0.06);
  const bodyInner = dark ? mix(ground, SHADE, 0.85) : mix(color, SHADE, 0.3);
  const edge = withAlpha(LIGHT, dark ? 0.32 : 0.55);
  const plate = dark ? mix(ground, LIGHT, 0.1) : mix(ground, LIGHT, 0.7);
  const faceFill: Record<FaceId, string> = {
    front: plate,
    right: `linear-gradient(135deg, ${mix(primary, LIGHT, 0.14)}, ${primary} 50%, ${mix(primary, SHADE, 0.22)})`,
    top: `linear-gradient(135deg, ${mix(secondary, LIGHT, 0.2)}, ${secondary} 55%, ${mix(secondary, SHADE, 0.1)})`,
    left: `linear-gradient(135deg, ${mix(primary, LIGHT, 0.55)}, ${mix(primary, LIGHT, 0.32)})`,
    bottom: `linear-gradient(135deg, ${mix(primary, secondary, 0.5)}, ${mix(primary, SHADE, 0.3)})`,
    back: `linear-gradient(135deg, ${mix(secondary, primary, 0.35)}, ${mix(secondary, SHADE, 0.3)})`,
  };
  // The logo sits on the center cap of the side face, like the badge on a real puzzle cube.
  const cap = dark ? mix(color, ground, 0.06) : mix(ground, LIGHT, 0.7);
  const capFill = `radial-gradient(circle at 35% 30%, ${mix(cap, LIGHT, 0.5)}, ${cap} 60%, ${mix(cap, secondary, 0.25)})`;

  // Solved glint sweeps over the screenshot after the last click.
  const sweep = lerp(-0.35, 1.35, easeInOut((f - 116) / 26));
  const sweepOn = f > 114 && f < 146 ? 1 : 0;
  const glint = `linear-gradient(115deg, ${withAlpha(LIGHT, 0)} ${((sweep - 0.14) * 100).toFixed(2)}%, ${withAlpha(LIGHT, 0.5 * gl)} ${(sweep * 100).toFixed(2)}%, ${withAlpha(LIGHT, 0)} ${((sweep + 0.14) * 100).toFixed(2)}%)`;

  const pad = S * 0.042, radius = S * 0.085;
  const P = S * 3; // face size

  const cubies = CUBIES.map((home, ci) => {
    let R: M3 = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    // Inner (plastic) faces show only on the cut plane of the slice that is turning right now.
    let cut: { axis: number; pos: number } | null = null;
    for (const t of TWISTS) {
      const p = twistCurve((f - t.start) / t.dur);
      if (p === 0 && f < t.start) break;
      const pos = app(R, home);
      if (p > 0 && p < 1) cut = { axis: t.axis, pos: Math.round(pos[t.axis]!) - t.layer };
      if (Math.round(pos[t.axis]!) === t.layer) R = mul(rot(t.axis, t.dir * 90 * p), R);
    }
    const world = mul(cam, R);
    const faces = FACES.map((fc) => {
      const outer = dot(fc.n, home) === 1;
      if (!outer) {
        // Visible only when it faces across the cut between the turning slice and its neighbour.
        if (!cut || Math.abs(cut.pos) > 1) return null;
        const nc = app(R, fc.n)[cut.axis]!;
        const towardCut = cut.pos === 0 ? true : Math.sign(nc) === -Math.sign(cut.pos);
        if (Math.abs(nc) < 0.5 || !towardCut) return null;
      }
      const n = app(world, fc.n);
      const img = fc.id === "front" || fc.id === "right";
      // Plain faces turned well away from the eye are skipped (image faces stay mounted so their <Img> never reloads).
      if (!img && n[2] < -0.3) return null;
      const lam = Math.max(0, dot(n, Lk));
      const spec = Math.pow(Math.max(0, dot(n, Hk)), 28);
      const darken = Math.min(img ? 0.2 : 0.5, (img ? 0.24 : 0.58) * Math.pow(1 - lam, 1.35)) * (outer ? 1 : 1.2);
      const [col, row] = fc.cr(home);
      const isCenter = col === 1 && row === 1;
      const sheen = `linear-gradient(150deg, ${withAlpha(LIGHT, Math.min(0.55, (img ? 0.05 : 0.14) * gl + spec * 0.5 * gl))}, ${withAlpha(LIGHT, 0)} 48%)`;
      const shadeLayer = `linear-gradient(${withAlpha(SHADE, darken)}, ${withAlpha(SHADE, darken)})`;
      return (
        <div key={fc.id} style={{ position: "absolute", left: -S / 2, top: -S / 2, width: S, height: S, transform: `${fc.t}translateZ(${(S / 2).toFixed(3)}px)`, backfaceVisibility: "hidden", background: mix(outer ? body : bodyInner, SHADE, darken), boxShadow: outer && dark ? `inset 0 0 0 ${Math.max(1, S * 0.008).toFixed(2)}px ${withAlpha(primary, 0.35)}` : undefined }}>
          {outer ? (
            <div
              style={{
                position: "absolute",
                inset: pad,
                borderRadius: radius,
                overflow: fc.id === "front" || (fc.id === "right" && isCenter) ? "hidden" : undefined,
                boxShadow: `inset 0 ${(S * 0.014).toFixed(2)}px 0 ${edge}`,
                // One element per plain tile: gloss and shading layered over a slice of the face-wide fill.
                background: fc.id === "front" ? plate : `${sheen}, ${shadeLayer}, ${faceFill[fc.id]}`,
                backgroundSize: fc.id === "front" ? undefined : `100% 100%, 100% 100%, ${P.toFixed(2)}px ${P.toFixed(2)}px`,
                backgroundPosition: fc.id === "front" ? undefined : `0 0, 0 0, ${(-(col * S) + pad).toFixed(2)}px ${(-(row * S) + pad).toFixed(2)}px`,
                backgroundRepeat: "no-repeat",
              }}
            >
              {fc.id === "front" ? (
                <>
                  <Img data-21st-slot={isCenter ? "screenshot" : undefined} src={shotSrc} onError={onError(screenshot)} style={{ position: "absolute", left: -(col * S) + pad, top: -(row * S) + pad, width: P, height: P, objectFit: "cover", objectPosition: "50% 0%", display: "block" }} />
                  <div style={{ position: "absolute", inset: 0, background: `${sheen}, ${shadeLayer}` }} />
                  {sweepOn ? <div style={{ position: "absolute", left: -(col * S) + pad, top: -(row * S) + pad, width: P, height: P, background: glint }} /> : null}
                </>
              ) : null}
              {fc.id === "right" && isCenter ? (
                <>
                  <div style={{ position: "absolute", inset: 0, background: capFill }} />
                  <Img data-21st-slot="logo" src={logoSrc} onError={onError(logo)} style={{ position: "absolute", left: "22%", top: "22%", width: "56%", height: "56%", objectFit: "contain", display: "block" }} />
                  <div style={{ position: "absolute", inset: 0, background: `${sheen}, ${shadeLayer}` }} />
                </>
              ) : null}
            </div>
          ) : null}
        </div>
      );
    });
    const tr = `${css3(R)} translate3d(${(home[0] * S).toFixed(3)}px, ${(home[1] * S).toFixed(3)}px, ${(home[2] * S).toFixed(3)}px)`;
    return (
      <div key={ci} style={{ position: "absolute", left: 0, top: 0, transformStyle: "preserve-3d", transform: tr }}>
        {faces}
      </div>
    );
  });

  // ---------- backdrop ----------
  const big = Math.max(W, H);
  const pa = (dark ? 0.34 : 0.2) * (1 + 0.35 * pulse);
  const pools = transparent
    ? null
    : [
        `radial-gradient(circle at ${(cx / W) * 100}% ${(cy / H) * 100}%, ${withAlpha(primary, pa)} 0px, ${withAlpha(primary, pa * 0.35)} ${(S * 2.6).toFixed(0)}px, ${withAlpha(primary, 0)} ${(S * 5).toFixed(0)}px)`,
        `radial-gradient(circle at 88% 8%, ${withAlpha(secondary, dark ? 0.2 : 0.22)} 0px, ${withAlpha(secondary, 0)} ${(big * 0.5).toFixed(0)}px)`,
        `radial-gradient(circle at 8% 96%, ${withAlpha(primary, dark ? 0.16 : 0.1)} 0px, ${withAlpha(primary, 0)} ${(big * 0.45).toFixed(0)}px)`,
      ].join(", ");
  const ink = dark ? SHADE : color;
  const shY = cy + S * 2.55 * scale;
  const shW = S * 4.4 * scale, shH = S * 0.9 * scale;

  // ---------- title ----------
  const words = title.trim().split(/\s+/).filter(Boolean);
  const fs = fitFontSize({ chars: title.trim().length, boxW: L.tw, boxH: L.th, lines: L.lines, charEm: 0.55, lineHeight: 1.15, max: L.max, min: L.min });
  const stagger = words.length > 1 ? Math.min(3, 12 / (words.length - 1)) : 0;

  return (
    <AbsoluteFill style={{ background: transparent ? "transparent" : background, overflow: "hidden" }}>
      {pools ? <AbsoluteFill style={{ background: pools }} /> : null}
      {transparent ? null : <div style={{ position: "absolute", left: cx - shW * 0.95, top: shY - shH * 1.4, width: shW * 1.9, height: shH * 2.8, borderRadius: "50%", background: `radial-gradient(closest-side, ${withAlpha(primary, dark ? 0.42 : 0.24)}, ${withAlpha(secondary, dark ? 0.12 : 0.1)} 60%, ${withAlpha(secondary, 0)})`, opacity: enter }} />}
      <div style={{ position: "absolute", left: cx - shW / 2, top: shY - shH / 2, width: shW, height: shH, borderRadius: "50%", background: `radial-gradient(closest-side, ${withAlpha(ink, dark ? 0.7 : 0.42)}, ${withAlpha(ink, dark ? 0.3 : 0.14)} 55%, ${withAlpha(ink, 0)})`, opacity: enter }} />
      <div style={{ position: "absolute", left: cx, top: cy, width: 0, height: 0, perspective: `${(S * 8).toFixed(1)}px`, perspectiveOrigin: `0px ${(-1.5 * S).toFixed(1)}px` }}>
        <div style={{ position: "absolute", left: 0, top: 0, transformStyle: "preserve-3d", transform: `scale(${scale.toFixed(5)}) rotateX(${pitch.toFixed(4)}deg) rotateY(${yaw.toFixed(4)}deg)` }}>
          {cubies}
        </div>
      </div>
      {hasTitle ? (
        <div
          data-21st-slot="title"
          style={{
            position: "absolute",
            left: L.tx,
            top: L.ty,
            width: L.tw,
            transform: "translateY(-50%)",
            fontFamily: brandFontStack(fontFamily),
            fontWeight: 600,
            fontSize: fs,
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            color,
            textAlign: L.align,
            textWrap: "balance",
          }}
        >
          {aspect === "16:9" ? (
            <div style={{ width: fs * 1.6, height: Math.max(3, fs * 0.09), borderRadius: fs, background: primary, marginBottom: fs * 0.5, transform: `scaleX(${easeOut((f - 110) / 20).toFixed(4)})`, transformOrigin: "0 50%" }} />
          ) : null}
          {words.map((w, i) => {
            const k = expoOut((f - 114 - i * stagger) / 18);
            return (
              <React.Fragment key={i}>
                <span style={{ display: "inline-block", opacity: clamp01(k * 1.4), transform: `translateY(${((1 - k) * fs * 0.45).toFixed(3)}px)` }}>{w}</span>
                {i < words.length - 1 ? " " : null}
              </React.Fragment>
            );
          })}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
