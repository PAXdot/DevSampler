// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useRef } from "react";
import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, brandFontStack, easeInOut, easeOut, fitFontSize, ramp, springSnap, useLayout, withAlpha } from "../../../kit/index";
import { SAMPLE_LOGO } from "../_lib/samples";
import type { schema } from "./vasarely-bulge-grid.schema";

const TAU = Math.PI * 2;
/** Edge subdivisions per cell side: enough for cells to curve over the sphere. */
const SUB = 4;
/** Center magnification of the bulge at full swell. */
const MAG = 2.4;

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

function lum([r, g, b]: RGB): number {
  const ch = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * ch(r) + 0.7152 * ch(g) + 0.0722 * ch(b);
}

const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const scale = (a: RGB, k: number): RGB => [a[0] * k, a[1] * k, a[2] * k];
const hx = (v: number) => {
  const n = Math.max(0, Math.min(255, Math.round(v)));
  return (n < 16 ? "0" : "") + n.toString(16);
};
/** Channels back to a #rrggbb string (built at runtime from brand props). */
const css = (c: RGB) => "#" + hx(c[0]) + hx(c[1]) + hx(c[2]);
const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
const smooth = (a: number, b: number, x: number) => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};

/**
 * Op-art in the Vasarely "Vega" tradition: a flat two-tone checkerboard whose lattice
 * is pushed through a spherical bulge (r -> r + a(R(1-(1-r/R)^k) - r)), so cells swell
 * at the apex and crush into slivers at the rim. Cells inside the sphere pick up the
 * brand gradient and Lambert shading from their mapped surface normal; the logo opens
 * on a medallion at the apex. Everything is Canvas2D at full resolution (hard edges are
 * the whole look) but it is only a few hundred polygons, so it stays far under budget.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ logo, caption, primary, secondary, color, background, cells, bulge, contrast, grain, fontFamily }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width: w, height: h, aspect, portrait } = useLayout();
  const S = Math.min(w, h);
  const transparent = background === "transparent";
  const hasCaption = caption.trim().length > 0;

  const FG = rgbOf(color, [240, 240, 240]);
  const PRI = rgbOf(primary, [244, 63, 94]);
  const SEC = rgbOf(secondary, [251, 191, 36]);
  // A transparent block still needs a "paper" tone for the sphere's dark cells and the pill.
  const BG: RGB = transparent
    ? lum(FG) > 0.4
      ? scale(PRI, 0.14)
      : mix(PRI, [255, 255, 255], 0.92)
    : rgbOf(background, [12, 12, 16]);
  const dark = lum(BG) < lum(FG);
  const INK = scale(dark ? BG : FG, 0.5);
  const HI = dark ? FG : BG;
  const paper = css(BG);
  // The logo plate is always the light tone of the brand (text on dark brands, a lifted paper
  // on light ones): a clean badge that makes any mark read as a logo against the op-art.
  const PLATE: RGB = dark ? mix(FG, BG, 0.04) : mix(BG, [255, 255, 255], 0.7);

  // Layout: the sphere sits a little above center, the caption under it.
  const Rbase = bulge * (aspect === "9:16" ? 0.43 * w : aspect === "1:1" ? 0.33 * S : 0.37 * h);
  const cx = w / 2;
  const cy = hasCaption ? h * (aspect === "9:16" ? 0.45 : aspect === "1:1" ? 0.45 : 0.44) : h / 2;
  const c = S / cells;

  // Timing. The bulge pushes up from a small seed and overshoots (spring), then relaxes
  // a touch; the medallion opens at the apex, then the logo and the caption.
  const swell = springSnap(frame, fps, 10, { damping: 9, stiffness: 34, mass: 1.1 });
  const Rk = Rbase * (0.2 + 0.8 * swell);
  const amt = easeInOut(ramp(frame, [10, 60], [0, 1])) * (1 - 0.1 * easeInOut(ramp(frame, [70, 126], [0, 1])));
  const pop = springSnap(frame, fps, 62, { damping: 11, stiffness: 120, mass: 0.9 });
  // The logo medallion is the hero: over half the sphere, so the checker reads as its frame.
  const rm = Rbase * 0.58;
  const drift = frame * c * 0.011;

  const ref = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
    ctx.filter = "none";
    ctx.shadowBlur = 0;
    ctx.shadowColor = "transparent";
    ctx.clearRect(0, 0, w, h);
    if (!transparent) {
      ctx.fillStyle = paper;
      ctx.fillRect(0, 0, w, h);
    }

    // ---------- lattice, mapped through the bulge ----------
    const ox = (drift % (2 * c)) - 2 * c;
    const oy = ((drift * 0.62) % (2 * c)) - 2 * c;
    const x0 = cx + ox + c / 2 - Math.ceil((cx + ox + c / 2) / c + 1) * c;
    const y0 = cy + oy + c / 2 - Math.ceil((cy + oy + c / 2) / c + 1) * c;
    // Parity of the first cell so the cell under the apex is always a "paper" cell.
    const pi0 = Math.round((x0 - (cx + ox + c / 2)) / c);
    const pj0 = Math.round((y0 - (cy + oy + c / 2)) / c);
    const NI = Math.ceil((w - x0) / c) + 1;
    const NJ = Math.ceil((h - y0) / c) + 1;
    const VW = NI * SUB + 1, VH = NJ * SUB + 1;
    const P = new Float32Array(VW * VH * 2);
    const K = MAG;
    const map = (X: number, Y: number, out: Float32Array, k: number) => {
      const dx = X - cx, dy = Y - cy;
      const r = Math.hypot(dx, dy);
      if (r < Rk && amt > 0 && r > 1e-4) {
        const u = r / Rk;
        const g = 1 - Math.pow(1 - u, K);
        const f = (r + amt * (Rk * g - r)) / r;
        out[k] = cx + dx * f;
        out[k + 1] = cy + dy * f;
      } else {
        out[k] = X;
        out[k + 1] = Y;
      }
    };
    for (let j = 0; j < VH; j++) {
      const Y = y0 + (j / SUB) * c;
      for (let i = 0; i < VW; i++) map(x0 + (i / SUB) * c, Y, P, (j * VW + i) * 2);
    }

    // ---------- the ink cells ----------
    // Light from the upper left; Blinn half-vector for the specular glint.
    let lx = -0.48, ly = -0.56, lz = 0.68;
    const ln = Math.hypot(lx, ly, lz);
    lx /= ln; ly /= ln; lz /= ln;
    let hx2 = lx, hy2 = ly, hz2 = lz + 1;
    const hn = Math.hypot(hx2, hy2, hz2);
    hx2 /= hn; hy2 /= hn; hz2 /= hn;
    const halfDiag = Math.hypot(w / 2, h / 2);
    const tmp = new Float32Array(2);
    const trace = (ci: number, cj: number, ax: number, ay: number, k1: number) => {
      ctx.beginPath();
      const a0 = cj * SUB, b0 = ci * SUB;
      for (let k = 0; k <= SUB; k++) {
        const q = (a0 * VW + b0 + k) * 2;
        if (k === 0) ctx.moveTo(ax + P[q]! * k1, ay + P[q + 1]! * k1);
        else ctx.lineTo(ax + P[q]! * k1, ay + P[q + 1]! * k1);
      }
      for (let k = 1; k <= SUB; k++) {
        const q = ((a0 + k) * VW + b0 + SUB) * 2;
        ctx.lineTo(ax + P[q]! * k1, ay + P[q + 1]! * k1);
      }
      for (let k = SUB - 1; k >= 0; k--) {
        const q = ((a0 + SUB) * VW + b0 + k) * 2;
        ctx.lineTo(ax + P[q]! * k1, ay + P[q + 1]! * k1);
      }
      for (let k = SUB - 1; k > 0; k--) {
        const q = ((a0 + k) * VW + b0) * 2;
        ctx.lineTo(ax + P[q]! * k1, ay + P[q + 1]! * k1);
      }
      ctx.closePath();
      ctx.fill();
    };
    const sphereOn = amt > 0.001;
    const inside: number[] = [];
    // Pass 1: the flat field. Away from the sphere the squares shrink inside their slots
    // (the grid dissolves toward the frame edge); transparent frames shrink to nothing.
    for (let cj = 0; cj < NJ; cj++) {
      for (let ci = 0; ci < NI; ci++) {
        if (((ci + pi0 + cj + pj0) & 1) === 0) continue;
        map(x0 + (ci + 0.5) * c, y0 + (cj + 0.5) * c, tmp, 0);
        const mx = tmp[0]!, my = tmp[1]!;
        const ur = Math.hypot(mx - cx, my - cy) / Rk;
        // Cells touching the sphere are redrawn, shaded, in pass 2.
        if (sphereOn && ur < 1 + (1.5 * c) / Rk) inside.push(ci, cj, mx, my);
        const dN = Math.hypot(mx - w / 2, my - h / 2) / halfDiag;
        const strength = contrast * (1 - 0.5 * smooth(0.25, 0.95, dN));
        let sz = 1 - 0.7 * smooth(0.25, 0.9, dN);
        if (transparent) sz *= 1 - smooth(0.62, 0.92, dN);
        if (sphereOn && ur < 1.02) sz = 1;
        if (sz < 0.02) continue;
        if (transparent) {
          ctx.globalAlpha = strength;
          ctx.fillStyle = color;
        } else {
          ctx.globalAlpha = 1;
          ctx.fillStyle = css(mix(BG, FG, strength));
        }
        trace(ci, cj, mx * (1 - sz), my * (1 - sz), sz);
      }
    }
    ctx.globalAlpha = 1;

    // Quiet the outer field so the checker frames the sphere instead of tiling the frame.
    if (!transparent) {
      const vg = ctx.createRadialGradient(cx, cy, Rbase * 1.05, cx, cy, halfDiag * 1.05);
      vg.addColorStop(0, withAlpha(paper, 0));
      vg.addColorStop(1, withAlpha(paper, 0.6));
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, w, h);
    }

    // Pass 2: the sphere, clipped to a crisp circle: base (its dark cells), then shaded ink cells.
    if (sphereOn) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, Rk, 0, TAU);
      ctx.clip();
      const g = ctx.createRadialGradient(cx - 0.38 * Rk, cy - 0.42 * Rk, 0, cx - 0.1 * Rk, cy - 0.1 * Rk, Rk * 1.18);
      if (dark) {
        g.addColorStop(0, css(mix(BG, SEC, 0.22)));
        g.addColorStop(0.45, css(mix(BG, PRI, 0.14)));
        g.addColorStop(1, css(INK));
      } else {
        g.addColorStop(0, css(mix(BG, HI, 0.5)));
        g.addColorStop(0.5, css(mix(BG, PRI, 0.08)));
        g.addColorStop(1, css(mix(BG, INK, 0.28)));
      }
      const fade = smooth(0, 0.35, amt);
      ctx.globalAlpha = fade;
      ctx.fillStyle = g;
      ctx.fillRect(cx - Rk, cy - Rk, Rk * 2, Rk * 2);
      const flat = transparent ? FG : mix(BG, FG, contrast);
      for (let n = 0; n < inside.length; n += 4) {
        const ddx = (inside[n + 2]! - cx) / Rk, ddy = (inside[n + 3]! - cy) / Rk;
        // Rim cells are crushed to slivers: shade them with the normal just inside the rim.
        const ur = Math.hypot(ddx, ddy) || 1;
        const uo = Math.min(0.995, ur);
        const nzz = Math.sqrt(1 - uo * uo);
        const nx = (ddx / ur) * uo, ny = (ddy / ur) * uo;
        const lam = Math.max(0, nx * lx + ny * ly + nzz * lz);
        const spec = Math.pow(Math.max(0, nx * hx2 + ny * hy2 + nzz * hz2), 36);
        const t = clamp01(0.5 + 0.62 * (nx + ny) * 0.7071);
        const hue = mix(SEC, PRI, t * t * (3 - 2 * t));
        let sc = mix(INK, hue, 0.22 + 0.86 * Math.min(1, lam * 1.08));
        sc = mix(sc, HI, Math.min(1, spec * 0.85));
        ctx.globalAlpha = transparent ? contrast + (1 - contrast) * fade : 1;
        ctx.fillStyle = css(mix(flat, sc, fade));
        trace(inside[n]!, inside[n + 1]!, 0, 0, 1);
      }
      ctx.restore();
    }
    ctx.globalAlpha = 1;

    if (amt > 0.001) {
      const lift = smooth(0, 0.6, amt);
      // Cast shadow on the flat field: the sphere lifts off the page, light from the upper left.
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, w, h);
      ctx.arc(cx, cy, Rk * 0.995, 0, TAU, true);
      ctx.clip("evenodd");
      const sh = ctx.createRadialGradient(cx + Rk * 0.06, cy + Rk * 0.08, Rk * 0.9, cx + Rk * 0.06, cy + Rk * 0.08, Rk * 1.3);
      sh.addColorStop(0, withAlpha(css(INK), (dark ? 0.75 : 0.32) * lift));
      sh.addColorStop(0.45, withAlpha(css(INK), (dark ? 0.3 : 0.12) * lift));
      sh.addColorStop(1, withAlpha(css(INK), 0));
      ctx.fillStyle = sh;
      ctx.fillRect(cx - Rk * 1.5, cy - Rk * 1.5, Rk * 3.2, Rk * 3.2);
      ctx.restore();

      // Gloss and rim light, clipped to the sphere.
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, Rk, 0, TAU);
      ctx.clip();
      const gl = ctx.createRadialGradient(cx - 0.42 * Rk, cy - 0.46 * Rk, 0, cx - 0.42 * Rk, cy - 0.46 * Rk, Rk * 0.62);
      gl.addColorStop(0, withAlpha(css(HI), (dark ? 0.2 : 0.3) * lift));
      gl.addColorStop(1, withAlpha(css(HI), 0));
      ctx.fillStyle = gl;
      ctx.fillRect(cx - Rk, cy - Rk, Rk * 2, Rk * 2);
      const rim = ctx.createRadialGradient(cx, cy, Rk * 0.78, cx, cy, Rk);
      rim.addColorStop(0, withAlpha(css(INK), 0));
      rim.addColorStop(1, withAlpha(css(INK), (dark ? 0.5 : 0.22) * lift));
      ctx.fillStyle = rim;
      ctx.fillRect(cx - Rk, cy - Rk, Rk * 2, Rk * 2);
      // Thin bounce light on the lower right edge.
      ctx.lineWidth = Math.max(1, Rk * 0.012);
      const bl = ctx.createLinearGradient(cx - Rk, cy - Rk, cx + Rk, cy + Rk);
      bl.addColorStop(0, withAlpha(css(SEC), 0));
      bl.addColorStop(0.6, withAlpha(css(SEC), 0));
      bl.addColorStop(1, withAlpha(css(mix(SEC, HI, 0.3)), 0.7 * lift));
      ctx.strokeStyle = bl;
      ctx.beginPath();
      ctx.arc(cx, cy, Rk - ctx.lineWidth * 1.2, 0, TAU);
      ctx.stroke();
      ctx.restore();
    }

    // ---------- medallion at the apex ----------
    if (pop > 0.001) {
      const r = rm * pop;
      ctx.save();
      ctx.shadowColor = withAlpha(css(INK), dark ? 0.8 : 0.4);
      ctx.shadowBlur = r * 0.24;
      ctx.shadowOffsetX = r * 0.04;
      ctx.shadowOffsetY = r * 0.08;
      const md = ctx.createRadialGradient(cx - r * 0.35, cy - r * 0.4, 0, cx, cy, r);
      md.addColorStop(0, css(mix(PLATE, [255, 255, 255], 0.35)));
      md.addColorStop(1, css(mix(PLATE, INK, 0.08)));
      ctx.fillStyle = md;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, TAU);
      ctx.fill();
      ctx.restore();
      const ring = ctx.createLinearGradient(cx - r, cy - r, cx + r, cy + r);
      ring.addColorStop(0, css(SEC));
      ring.addColorStop(1, css(PRI));
      ctx.strokeStyle = ring;
      ctx.lineWidth = Math.max(2, r * 0.07);
      ctx.beginPath();
      ctx.arc(cx, cy, r - ctx.lineWidth / 2, 0, TAU);
      ctx.stroke();
      ctx.strokeStyle = withAlpha(css(INK), 0.14);
      ctx.lineWidth = Math.max(1, r * 0.01);
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.87, 0, TAU);
      ctx.stroke();
      // Specular arc on the upper left of the plate: it reads as a raised badge.
      ctx.strokeStyle = withAlpha(css(mix(PLATE, [255, 255, 255], 0.8)), 0.75);
      ctx.lineWidth = Math.max(1, r * 0.018);
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.8, Math.PI * 1.08, Math.PI * 1.42);
      ctx.stroke();
    }
  }, [w, h, cx, cy, c, Rk, Rbase, amt, pop, rm, drift, transparent, paper, dark, contrast, FG, PRI, SEC, BG, INK, HI, PLATE]);

  // ---------- logo + caption (DOM) ----------
  const logoIn = springSnap(frame, fps, 68, APPLE);
  const logoOp = easeOut(ramp(frame, [68, 84], [0, 1]));
  // The mark fills most of the plate so it, not the checker, is the subject.
  const box = rm * 1.5;
  const src = logo || SAMPLE_LOGO;
  const logoShadow = withAlpha(css(INK), 0.18);

  const capBoxW = w * (portrait ? 0.8 : 0.6);
  const capSize = hasCaption
    ? Math.max(
        h * (portrait ? 0.031 : 0.024),
        fitFontSize({ chars: caption.length, boxW: capBoxW, boxH: h * (portrait ? 0.08 : 0.07), lines: portrait ? 2 : 1, charEm: 0.58, lineHeight: 1.2, max: aspect === "9:16" ? h * 0.034 : h * 0.042 }),
      )
    : 0;
  const capIn = easeOut(ramp(frame, [88, 110], [0, 1]));
  const capTop = cy + Rbase + (portrait ? h * 0.035 : h * 0.04);

  return (
    <AbsoluteFill style={{ background: transparent ? undefined : background }}>
      <canvas ref={ref} width={w} height={h} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      {frame >= 66 ? (
        <Img
          data-21st-slot="logo"
          src={src}
          style={{
            position: "absolute",
            left: cx - box / 2,
            top: cy - box / 2,
            width: box,
            height: box,
            objectFit: "contain",
            opacity: logoOp,
            transform: logoIn === 1 ? undefined : `scale(${(0.7 + 0.3 * logoIn).toFixed(4)})`,
            filter: `drop-shadow(0 ${(rm * 0.03).toFixed(1)}px ${(rm * 0.05).toFixed(1)}px ${logoShadow})`,
          }}
        />
      ) : null}
      {hasCaption ? (
        <div style={{ position: "absolute", left: 0, width: w, top: capTop, display: "flex", justifyContent: "center", opacity: capIn, transform: capIn < 1 ? `translateY(${((1 - capIn) * S * 0.03).toFixed(2)}px)` : undefined }}>
          <div
            data-21st-slot="caption"
            style={{
              maxWidth: capBoxW,
              padding: `${(capSize * 0.32).toFixed(1)}px ${(capSize * 0.9).toFixed(1)}px`,
              borderRadius: capSize * 2,
              background: withAlpha(paper, 0.9),
              boxShadow: `0 0 0 ${Math.max(1, S * 0.0015).toFixed(1)}px ${withAlpha(color, 0.16)}`,
              fontFamily: brandFontStack(fontFamily),
              fontWeight: 500,
              fontSize: capSize,
              lineHeight: 1.2,
              letterSpacing: "0.02em",
              color,
              textAlign: "center",
              overflowWrap: "anywhere",
            }}
          >
            {caption}
          </div>
        </div>
      ) : null}
      {grain && !transparent ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: dark ? 0.07 : 0.09, mixBlendMode: "overlay", pointerEvents: "none" }} /> : null}
    </AbsoluteFill>
  );
};
