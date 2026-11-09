// Built with Remotion - https://remotion.pro/license
import React, { useLayoutEffect, useMemo, useRef } from "react";
import type { z } from "zod";
import { AbsoluteFill, Img, useCurrentFrame } from "remotion";
import { brandFontStack, fitFontSize, useLayout, withAlpha } from "../../../kit/index";
import { SAMPLE_SCREENSHOT } from "../_lib/samples";
import type { schema } from "./bead-curtain-reveal.schema";

const smooth = (x: number) => { const t = Math.max(0, Math.min(1, x)); return t * t * (3 - 2 * t); };
const STRANDS = 26, BEADS = 28, FRAMES = 145;
function simulate(w: number, h: number): Float32Array[] {
  const step = h * .65 / (BEADS - 1), size = STRANDS * BEADS * 2;
  const p = new Float32Array(size), old = new Float32Array(size);
  const pin = (j: number) => w * (.09 + .82 * j / (STRANDS - 1));
  for (let j = 0; j < STRANDS; j++) for (let i = 0; i < BEADS; i++) {
    const k = (j * BEADS + i) * 2;
    p[k] = pin(j) + Math.sin(j * 1.7) * i / BEADS * w * .003;
    p[k + 1] = h * .12 + i * step;
  }
  old.set(p); const out: Float32Array[] = [];
  for (let f = 0; f < FRAMES; f++) {
    const open = smooth((f - 30) / 68), rx = w * .365 * open, ry = h * .285;
    for (let j = 0; j < STRANDS; j++) for (let i = 1; i < BEADS; i++) {
      const k = (j * BEADS + i) * 2, px = p[k]!, py = p[k + 1]!;
      p[k] = p[k]! + (px - old[k]!) * .88 + Math.sin(f * .05 + j) * w * .000012 * (1 - open);
      p[k + 1] = p[k + 1]! + (py - old[k + 1]!) * .88 + h * .00014;
      old[k] = px; old[k + 1] = py;
    }
    for (let iteration = 0; iteration < 7; iteration++) {
      for (let j = 0; j < STRANDS; j++) {
        const first = j * BEADS * 2;
        p[first] = pin(j); p[first + 1] = h * .12;
        for (let i = 1; i < BEADS; i++) {
          const a = first + (i - 1) * 2, b = a + 2;
          const dx = p[b]! - p[a]!, dy = p[b + 1]! - p[a + 1]!;
          const length = Math.max(.01, Math.hypot(dx, dy)), error = (length - step) / length;
          const amount = i === 1 ? 1 : .5;
          p[b] = p[b]! - dx * error * amount; p[b + 1] = p[b + 1]! - dy * error * amount;
          if (i > 1) { p[a] = p[a]! + dx * error * .5; p[a + 1] = p[a + 1]! + dy * error * .5; }
          if (rx > 1) {
            const ux = (p[b]! - w / 2) / rx, uy = (p[b + 1]! - h * .46) / ry;
            const distance = Math.hypot(ux, uy);
            if (distance < 1) {
              const direction = Math.abs(ux) < .001 ? (j < STRANDS / 2 ? -1 : 1) * .001 : ux;
              const norm = Math.max(.001, Math.hypot(direction, uy));
              p[b] = w / 2 + direction / norm * rx;
              p[b + 1] = h * .46 + uy / norm * ry;
            }
          }
          p[b] = Math.max(w * .025, Math.min(w * .975, p[b]!));
          p[b + 1] = Math.max(h * .12, Math.min(h * .79, p[b + 1]!));
        }
      }
    }
    out.push(p.slice());
  }
  return out;
}

export const Component: React.FC<z.infer<typeof schema>> = ({ screenshot, caption, primary, secondary, color, background, fontFamily }) => {
  const f = useCurrentFrame();
  const { width: w, height: h, portrait } = useLayout();
  const s = Math.min(w, h), canvas = useRef<HTMLCanvasElement>(null);
  const simulation = useMemo(() => simulate(w, h), [w, h]);
  const positions = simulation[Math.min(FRAMES - 1, Math.max(0, f))]!;
  const open = smooth((f - 30) / 68);
  useLayoutEffect(() => {
    const ctx = canvas.current?.getContext("2d", { willReadFrequently: true }); if (!ctx) return;
    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = s * .004; ctx.strokeStyle = withAlpha(color, .4);
    ctx.beginPath(); ctx.moveTo(w * .08, h * .118); ctx.lineTo(w * .92, h * .118); ctx.stroke();
    const radius = s * .007;
    for (let j = 0; j < STRANDS; j++) {
      ctx.strokeStyle = withAlpha(color, .26); ctx.lineWidth = Math.max(1, s * .0011); ctx.beginPath();
      for (let i = 0; i < BEADS; i++) {
        const k = (j * BEADS + i) * 2;
        if (i) ctx.lineTo(positions[k]!, positions[k + 1]!); else ctx.moveTo(positions[k]!, positions[k + 1]!);
      }
      ctx.stroke();
      for (let i = 1; i < BEADS; i++) {
        const k = (j * BEADS + i) * 2, x = positions[k]!, y = positions[k + 1]!;
        const tone = (i + j) % 3 ? primary : secondary;
        ctx.fillStyle = withAlpha(tone, .72); ctx.beginPath(); ctx.ellipse(x, y, radius, radius * 1.2, 0, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = withAlpha(tone, .95); ctx.lineWidth = Math.max(1, s * .001); ctx.stroke();
        ctx.fillStyle = withAlpha(color, .7); ctx.beginPath(); ctx.ellipse(x - radius * .32, y - radius * .45, radius * .22, radius * .38, -.3, 0, Math.PI * 2); ctx.fill();
      }
    }
  }, [positions, w, h, s, color, primary, secondary]);
  const font = fitFontSize({ chars: caption.length, boxW: w * .78, boxH: h * .12, lines: portrait ? 2 : 1, max: h * (portrait ? .039 : .045), min: h * (portrait ? .031 : .019), lineHeight: 1.25 });
  return <AbsoluteFill style={{ background: background === "transparent" ? undefined : background }}>
    <div style={{ position: "absolute", left: w * .15, top: h * (portrait ? .25 : .21), width: w * .7, height: h * (portrait ? .39 : .48), overflow: "hidden", borderRadius: s * .009, border: `${s * .002}px solid ${withAlpha(color, .24)}`, background: withAlpha(primary, .08), transform: `scale(${.96 + .04 * open})` }}>
      <Img src={screenshot || SAMPLE_SCREENSHOT} style={{ width: "100%", height: "100%", objectFit: "contain", filter: `blur(${(1 - open) * s * .004}px)` }} />
    </div>
    <canvas ref={canvas} width={w} height={h} style={{ position: "absolute", inset: 0, width: w, height: h }} />
    {caption && <div data-21st-slot="caption" style={{ position: "absolute", left: w * .11, top: h * .84, width: w * .78, textAlign: "center", fontFamily: brandFontStack(fontFamily), fontSize: font, lineHeight: 1.25, color, opacity: smooth((f - 112) / 25) }}>{caption}</div>}
  </AbsoluteFill>;
};
