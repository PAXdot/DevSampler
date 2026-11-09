// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useRef } from "react";
import { AbsoluteFill, random, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { loopPhase, luminance, useLayout, withAlpha } from "../../kit/index";
import type { schema } from "./aurora-silk.schema";

const TAU = Math.PI * 2;
/** Canvas resolution relative to the frame. Silk is soft, so half res is invisible and twice as fast. */
const SCALE = 0.5;
const STRANDS = 22;
const STEPS = 72;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='11' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

/**
 * Silk ribbons of light, drawn with Canvas2D (no WebGL, so it exports on CPU
 * workers). Every motion term is a whole number of cycles of the clip, so the
 * last frame flows straight into the first.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ c1, c2, c3, background, ribbons, intensity, cycles, grain }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const { width, height, portrait } = useLayout();
  const ref = useRef<HTMLCanvasElement>(null);
  const cw = Math.max(2, Math.round(width * SCALE));
  const ch = Math.max(2, Math.round(height * SCALE));

  useLayoutEffect(() => {
    // Software (CPU) canvas: Chrome may promote a busy 2D canvas to the GPU mid-render,
    // and GPU blur is not bit-identical between renders (gate: determinism).
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    const p = loopPhase(frame, durationInFrames, cycles) * TAU;
    const dark = luminance(background) < 0.4;
    const colors = [c1, c2, c3];

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.filter = "none";
    ctx.clearRect(0, 0, cw, ch);
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, cw, ch);
    ctx.globalCompositeOperation = dark ? "lighter" : "source-over";

    for (let r = 0; r < ribbons; r++) {
      const col = colors[r % colors.length]!;
      const off = random(`aurora-${r}`) * TAU;
      const k = 0.6 + random(`aurora-k-${r}`) * 0.7;
      const m1 = 1 + (r % 2);
      const m2 = r % 3 === 0 ? -1 : 1;
      const spread = ribbons > 1 ? r / (ribbons - 1) : 0.5;
      const base = portrait ? 0.24 + 0.52 * spread : 0.22 + 0.5 * spread;
      const amp = portrait ? 0.07 : 0.11;
      const center = (x: number) => {
        const u = x / cw;
        return ch * (base + amp * Math.sin(TAU * u * k + p * m1 + off) + amp * 0.4 * Math.sin(TAU * u * (k + 1.1) - p * m2 + off * 2));
      };
      const thick = (x: number) => {
        const u = x / cw;
        return ch * (0.035 + 0.045 * (0.5 + 0.5 * Math.sin(TAU * u * 0.8 + p * m2 + off * 3)));
      };
      const twist = (x: number) => Math.sin(TAU * (x / cw) * 1.6 + p * m1 - off);

      // Soft body glow.
      ctx.filter = `blur(${Math.round(ch * 0.05)}px)`;
      ctx.beginPath();
      for (let i = 0; i <= STEPS; i++) {
        const x = (i / STEPS) * cw;
        ctx.lineTo(x, center(x) - thick(x));
      }
      for (let i = STEPS; i >= 0; i--) {
        const x = (i / STEPS) * cw;
        ctx.lineTo(x, center(x) + thick(x));
      }
      ctx.closePath();
      ctx.fillStyle = withAlpha(col, 0.3 * intensity);
      ctx.fill();

      // Fibres.
      ctx.filter = "none";
      ctx.lineWidth = Math.max(1, ch * 0.0024);
      for (let j = 0; j < STRANDS; j++) {
        const t = (j / (STRANDS - 1)) * 2 - 1;
        const a = Math.min(1, intensity * (0.1 + 0.42 * (1 - Math.abs(t)) * (1 - Math.abs(t))));
        const g = ctx.createLinearGradient(0, 0, cw, 0);
        g.addColorStop(0, withAlpha(col, 0));
        g.addColorStop(0.25 + 0.1 * Math.sin(off + r), withAlpha(col, a));
        g.addColorStop(0.75 + 0.1 * Math.cos(off + r), withAlpha(col, a));
        g.addColorStop(1, withAlpha(col, 0));
        ctx.strokeStyle = g;
        ctx.beginPath();
        for (let i = 0; i <= STEPS; i++) {
          const x = (i / STEPS) * cw;
          const y = center(x) + t * thick(x) * (0.75 + 0.25 * twist(x));
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }

    // Vignette keeps titles on top legible.
    ctx.filter = "none";
    ctx.globalCompositeOperation = "source-over";
    const v = ctx.createRadialGradient(cw / 2, ch / 2, Math.min(cw, ch) * 0.2, cw / 2, ch / 2, Math.max(cw, ch) * 0.75);
    v.addColorStop(0, withAlpha(background, 0));
    v.addColorStop(1, withAlpha(background, 0.55));
    ctx.fillStyle = v;
    ctx.fillRect(0, 0, cw, ch);
  }, [frame, durationInFrames, cycles, c1, c2, c3, background, ribbons, intensity, cw, ch, portrait]);

  return (
    <AbsoluteFill style={{ background, maskImage: background === "transparent" ? "radial-gradient(ellipse 65% 65% at 50% 50%, #000 55%, transparent 100%)" : undefined, WebkitMaskImage: background === "transparent" ? "radial-gradient(ellipse 65% 65% at 50% 50%, #000 55%, transparent 100%)" : undefined }}>
      <canvas ref={ref} width={cw} height={ch} style={{ width: "100%", height: "100%", display: "block" }} />
      {grain && background !== "transparent" ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: 0.06, mixBlendMode: "overlay" }} /> : null}
    </AbsoluteFill>
  );
};
