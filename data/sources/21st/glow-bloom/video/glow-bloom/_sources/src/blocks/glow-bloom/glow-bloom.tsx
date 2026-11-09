// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { loopPhase, useLayout } from "../../kit/index";
import type { schema } from "./glow-bloom.schema";

const TAU = Math.PI * 2;

/** #rrggbb + alpha -> rgba(). zColor() also allows rgb()/named colors; those pass through via color-mix. */
function alpha(color: string, a: number): string {
  const m = /^#([0-9a-f]{6})$/i.exec(color);
  if (!m) return `color-mix(in srgb, ${color} ${Math.round(a * 100)}%, transparent)`;
  const n = parseInt(m[1]!, 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a.toFixed(3)})`;
}

// Static grain tile: SVG turbulence with a fixed seed, so frames stay identical across renders.
const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='21' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

export const Component: React.FC<z.infer<typeof schema>> = ({ color, secondary, background, intensity, position, cycles, grain }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const { portrait } = useLayout();
  const p = loopPhase(frame, durationInFrames, cycles) * TAU;

  // Everything is a whole-cycle sine of the loop phase, so frame N == frame 0.
  const breathe = 0.82 + 0.18 * (0.5 + 0.5 * Math.sin(p));
  const drift = Math.sin(p) * 6; // % of frame
  const sway = Math.cos(p) * 4;

  const blooms: { x: number; y: number; c: string; a: number; w: number; h: number }[] = [];
  const W = portrait ? 150 : 95;
  const H = portrait ? 72 : 80;
  if (position === "top" || position === "split") blooms.push({ x: 50 + sway, y: 2 + drift * 0.4, c: color, a: intensity * breathe, w: W, h: H });
  if (position === "bottom") blooms.push({ x: 50 - sway, y: 98 - drift * 0.4, c: color, a: intensity * breathe, w: W, h: H });
  if (position === "split") blooms.push({ x: 50 - sway, y: 98 - drift * 0.4, c: secondary, a: intensity * (1.64 - breathe) * 0.8, w: W * 1.1, h: H });
  if (position === "center") {
    blooms.push({ x: 50 + sway, y: 50 + drift * 0.5, c: color, a: intensity * breathe, w: W * 0.9, h: H * 0.9 });
    blooms.push({ x: 50 - sway * 1.5, y: 50 - drift * 0.5, c: secondary, a: intensity * 0.5 * (1.64 - breathe), w: W * 0.6, h: H * 0.6 });
  }

  return (
    <AbsoluteFill style={{ background, maskImage: background === "transparent" ? "radial-gradient(ellipse 65% 65% at 50% 50%, #000 55%, transparent 100%)" : undefined, WebkitMaskImage: background === "transparent" ? "radial-gradient(ellipse 65% 65% at 50% 50%, #000 55%, transparent 100%)" : undefined }}>
      {blooms.map((b, i) => (
        <React.Fragment key={i}>
          {/* Wide halo: the bloom's center sits just inside the frame so its light reaches the middle. */}
          <AbsoluteFill style={{ background: `radial-gradient(ellipse ${b.w}% ${b.h}% at ${b.x}% ${b.y}%, ${alpha(b.c, b.a)}, ${alpha(b.c, b.a * 0.55)} 28%, ${alpha(b.c, b.a * 0.18)} 52%, transparent 76%)` }} />
          {/* Hot core, screened over the halo. */}
          <AbsoluteFill style={{ mixBlendMode: "screen", background: `radial-gradient(ellipse ${b.w * 0.42}% ${b.h * 0.34}% at ${b.x}% ${b.y}%, ${alpha(b.c, Math.min(1, b.a * 1.3))}, ${alpha(b.c, b.a * 0.3)} 45%, transparent 75%)` }} />
        </React.Fragment>
      ))}
      {grain && background !== "transparent" ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: 0.06, mixBlendMode: "overlay" }} /> : null}
    </AbsoluteFill>
  );
};
