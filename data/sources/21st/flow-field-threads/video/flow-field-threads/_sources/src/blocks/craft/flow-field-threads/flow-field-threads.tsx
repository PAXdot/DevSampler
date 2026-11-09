// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef } from "react";
import type { z } from "zod";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { brandFontStack, fitFontSize, useLayout, withAlpha } from "../../../kit/index";
import { rng } from "../_lib/noise";
import type { schema } from "./flow-field-threads.schema";

const smooth = (x: number) => { const t = Math.max(0, Math.min(1, x)); return t * t * (3 - 2 * t); };
export const Component: React.FC<z.infer<typeof schema>> = ({ text, primary, secondary, color, background, fontFamily, seed }) => {
  const f = Math.min(135, useCurrentFrame());
  const { width: w, height: h, portrait } = useLayout();
  const canvas = useRef<HTMLCanvasElement>(null);
  const maxLines = portrait ? 3 : 2;
  const font = fitFontSize({ chars: text.length, boxW: w * .78, boxH: h * (portrait ? .56 : .60), lines: maxLines, max: h * (portrait ? .18 : .24), min: h * (portrait ? .031 : .019), charEm: .54, lineHeight: 1.2 });
  const words = text.split(/\s+/), lines: string[] = [];
  const target = Math.ceil(text.length / maxLines);
  for (const word of words) {
    const last = lines.length - 1;
    if (last < 0 || (lines[last]!.length + word.length > target && lines.length < maxLines)) lines.push(word);
    else lines[last] += ` ${word}`;
  }
  const textHeight = lines.length * font * 1.2;
  const margin = h * (portrait ? .065 : .055), voidHalf = textHeight / 2 + margin;
  const paths = useMemo(() => {
    const random = rng(seed), count = portrait ? 220 : 320;
    return Array.from({ length: count }, (_, i) => {
      const offset = (i / (count - 1) - .5) * h * 1.45;
      const sign = offset < 0 ? -1 : 1;
      const shift = random() * 6, wobble = random() * .7 + .3;
      const points: [number, number][] = [];
      for (let j = 0; j < 100; j++) {
        const x = w * (.035 + j / 99 * .93), nx = (x - w / 2) / (w * .40);
        const influence = Math.exp(-Math.pow(nx, 6));
        const lift = Math.max(0, voidHalf - Math.abs(offset)) * influence;
        const ripple = Math.sin(j / 99 * Math.PI * 3.8 + shift) * h * .018 * wobble * (1 - influence * .85);
        const y = h / 2 + offset + sign * lift + ripple;
        points.push([x, y]);
      }
      return { points, phase: random(), tone: random(), alpha: .045 + random() * .12 };
    });
  }, [w, h, portrait, seed, voidHalf]);
  useLayoutEffect(() => {
    const ctx = canvas.current?.getContext("2d", { willReadFrequently: true }); if (!ctx) return;
    ctx.clearRect(0, 0, w, h); ctx.save();
    ctx.beginPath(); ctx.rect(w * .05, h * .08, w * .90, h * .84); ctx.clip();
    ctx.lineWidth = Math.max(.6, Math.min(w, h) * .0008);
    for (const path of paths) {
      const progress = smooth((f - path.phase * 30) / 75);
      const stop = Math.floor(progress * (path.points.length - 1));
      if (stop < 1) continue;
      ctx.strokeStyle = withAlpha(path.tone < .8 ? primary : secondary, path.alpha);
      ctx.beginPath();
      for (let i = 0; i <= stop; i++) {
        const point = path.points[i]!;
        if (i) ctx.lineTo(point[0], point[1]); else ctx.moveTo(point[0], point[1]);
      }
      ctx.stroke();
      // A small glint rides along the current and disappears into the final hold.
      if (f < 106) {
        const index = Math.floor(((f * .012 + path.phase) % 1) * Math.max(1, stop));
        const point = path.points[index]!;
        ctx.fillStyle = withAlpha(path.tone < .8 ? primary : secondary, .5 * (1 - smooth((f - 78) / 28)));
        ctx.fillRect(point[0], point[1], Math.max(1, w * .001), Math.max(1, h * .001));
      }
    }
    ctx.restore();
  }, [f, w, h, paths, primary, secondary]);
  return <AbsoluteFill style={{ background: background === "transparent" ? undefined : background }}>
    <canvas ref={canvas} width={w} height={h} style={{ position: "absolute", inset: 0, width: w, height: h }} />
    <div data-21st-slot="text" style={{ position: "absolute", left: w * .11, top: h / 2 - textHeight / 2, width: w * .78, fontFamily: brandFontStack(fontFamily), fontSize: font, fontWeight: 650, lineHeight: 1.2, color, textAlign: "center", opacity: smooth((f - 55) / 40), transform: `translateY(${(1 - smooth((f - 55) / 40)) * h * .015}px)` }}>
      {lines.map((line, i) => <React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>)}
    </div>
  </AbsoluteFill>;
};
