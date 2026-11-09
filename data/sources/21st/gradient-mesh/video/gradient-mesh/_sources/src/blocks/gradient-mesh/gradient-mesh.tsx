// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useRef } from "react";
import { AbsoluteFill, random, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { loopPhase, useLayout, withAlpha } from "../../kit/index";
import type { schema } from "./gradient-mesh.schema";

const TAU = Math.PI * 2;
/** The mesh is pure low-frequency color: an eighth-res canvas upscales without visible loss. */
const SCALE = 1 / 8;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='5' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

/** Integer Lissajous rates per blob, so each path closes exactly at the clip end. */
const PATHS = [
  { a: 1, b: 1, rx: 0.3, ry: 0.22 },
  { a: -1, b: 2, rx: 0.26, ry: 0.28 },
  { a: 2, b: -1, rx: 0.22, ry: 0.24 },
  { a: 1, b: -2, rx: 0.34, ry: 0.18 },
  { a: -2, b: 1, rx: 0.2, ry: 0.3 },
];

export const Component: React.FC<z.infer<typeof schema>> = ({ c1, c2, c3, c4, background, intensity, cycles, grain }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const { width, height } = useLayout();
  const ref = useRef<HTMLCanvasElement>(null);
  const cw = Math.max(2, Math.round(width * SCALE));
  const ch = Math.max(2, Math.round(height * SCALE));

  useLayoutEffect(() => {
    // Software (CPU) canvas: Chrome may promote a busy 2D canvas to the GPU mid-render,
    // and GPU blur is not bit-identical between renders (gate: determinism).
    const ctx = ref.current?.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    const p = loopPhase(frame, durationInFrames, cycles) * TAU;
    const colors = [c1, c2, c3, c4, c1];
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.filter = "none";
    ctx.clearRect(0, 0, cw, ch);
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, cw, ch);
    const R = Math.max(cw, ch);
    PATHS.forEach((path, i) => {
      const o = random(`mesh-${i}`) * TAU;
      const o2 = random(`mesh-y-${i}`) * TAU;
      const cx = cw * (0.5 + path.rx * Math.sin(p * path.a + o));
      const cy = ch * (0.5 + path.ry * Math.cos(p * path.b + o2));
      const r = R * (0.42 + 0.08 * Math.sin(p + o));
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      const a = intensity * (i === 4 ? 0.55 : 0.85);
      g.addColorStop(0, withAlpha(colors[i]!, a));
      g.addColorStop(0.45, withAlpha(colors[i]!, a * 0.45));
      g.addColorStop(1, withAlpha(colors[i]!, 0));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, cw, ch);
    });
    // Melt the blobs together, then settle the edges back toward the background.
    ctx.filter = `blur(${Math.max(1, Math.round(R * 0.06))}px)`;
    ctx.drawImage(ctx.canvas, 0, 0);
    ctx.filter = "none";
    const v = ctx.createRadialGradient(cw / 2, ch / 2, Math.min(cw, ch) * 0.25, cw / 2, ch / 2, R * 0.75);
    v.addColorStop(0, withAlpha(background, 0));
    v.addColorStop(1, withAlpha(background, 0.55));
    ctx.fillStyle = v;
    ctx.fillRect(0, 0, cw, ch);
  }, [frame, durationInFrames, cycles, c1, c2, c3, c4, background, intensity, cw, ch]);

  return (
    <AbsoluteFill style={{ background, maskImage: background === "transparent" ? "radial-gradient(ellipse 65% 65% at 50% 50%, #000 55%, transparent 100%)" : undefined, WebkitMaskImage: background === "transparent" ? "radial-gradient(ellipse 65% 65% at 50% 50%, #000 55%, transparent 100%)" : undefined }}>
      <canvas ref={ref} width={cw} height={ch} style={{ width: "100%", height: "100%", display: "block" }} />
      {grain && background !== "transparent" ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: 0.07, mixBlendMode: "overlay" }} /> : null}
    </AbsoluteFill>
  );
};
