// Built with Remotion - https://remotion.pro/license
import React, { useId, useMemo } from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, fitFontSize, useLayout, withAlpha } from "../../../kit/index";
import { rng } from "../_lib/noise";
import type { schema } from "./liquid-fill-letters.schema";

const clamp = (x: number) => Math.max(0, Math.min(1, x));
const smooth = (x: number) => { const t = clamp(x); return t * t * (3 - 2 * t); };

export const Component: React.FC<z.infer<typeof schema>> = ({ value, label, primary, secondary, color, background, fontFamily, seed }) => {
  const f = useCurrentFrame();
  const { width: w, height: h, portrait } = useLayout();
  const family = brandFontStack(fontFamily);
  const id = useId().replace(/:/g, "");
  const number = String(Math.round(value));
  const s = Math.min(w, h);
  const px = fitFontSize({ chars: number.length, boxW: w * (portrait ? .8 : .68), boxH: h * .68, max: portrait ? w * .61 : h * .58, charEm: .68 });
  const sy = portrait ? 1.65 : 1;
  const baseline = h * (portrait ? .66 : .65);
  const top = baseline - px * .75 * sy;
  const bottom = baseline + px * .025 * sy;
  const progress = smooth((f - 14) / 80);
  const depth = (bottom - top) * value / 100 * progress;
  const calm = Math.exp(-Math.max(0, f - 84) / 12);
  const amp = s * .022 * calm * smooth((f - 12) / 15);
  const level = bottom - depth;
  const wave = (phase: number, offset: number) => {
    const pts = Array.from({ length: 90 }, (_, i) => {
      const x = w * i / 89;
      const y = level + offset + amp * (Math.sin(x / w * Math.PI * 4.4 + phase) + .34 * Math.sin(x / w * Math.PI * 7.8 - phase * .7));
      return `${i ? "L" : "M"}${x.toFixed(2)},${y.toFixed(2)}`;
    }).join(" ");
    return `${pts} L${w},${h} L0,${h} Z`;
  };
  const bubbles = useMemo(() => { const r = rng(seed); return Array.from({ length: 34 }, () => ({ x: .15 + r() * .7, start: r(), r: .002 + r() * .005, speed: .6 + r() })); }, [seed]);
  const outline = withAlpha(color, .72);
  const faint = withAlpha(color, .13);
  const glass = withAlpha(primary, .045);
  const edge = withAlpha(color, .3);
  const reflected = withAlpha(secondary, .2);
  const gleam = withAlpha(color, .5);
  const a = withAlpha(primary, .88), b = withAlpha(secondary, .94);
  const labelSize = fitFontSize({ chars: label.length, boxW: w * .76, boxH: h * .12, lines: portrait ? 2 : 1, max: h * (portrait ? .038 : .045), min: h * (portrait ? .031 : .019), lineHeight: 1.25 });
  const txt = { x: w / 2, y: 0, textAnchor: "middle" as const, fontFamily: family, fontSize: px, fontWeight: 800, letterSpacing: "-.045em", transform: `translate(0 ${baseline}) scale(1 ${sy})` };
  return <AbsoluteFill style={{ background: background === "transparent" ? undefined : background }}>
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position: "absolute", inset: 0 }}>
      <defs>
        <clipPath id={`${id}vessel`}><text {...txt}>{number}</text></clipPath>
        <linearGradient id={`${id}liquid`} x1="0" x2=".8" y1="0" y2="1"><stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} /></linearGradient>
        <linearGradient id={`${id}shine`}><stop offset="0" stopColor={withAlpha(color, 0)} /><stop offset=".48" stopColor={gleam} /><stop offset=".54" stopColor={withAlpha(color, 0)} /><stop offset="1" stopColor={withAlpha(color, .08)} /></linearGradient>
      </defs>
      <ellipse cx={w / 2} cy={bottom + s * .05} rx={w * .28} ry={s * .014} fill={reflected} />
      {Array.from({ length: 11 }, (_, i) => {
        const y = bottom - (bottom - top) * i / 10;
        return <g key={i} stroke={i <= value / 10 * progress ? primary : edge} strokeWidth={s * .002}>
          <path d={`M${w * .09},${y}h${s * (i % 5 ? .012 : .032)} M${w * .91},${y}h-${s * (i % 5 ? .012 : .032)}`} />
        </g>;
      })}
      <text {...txt} fill={glass} stroke={faint} strokeWidth={s * .008}>{number}</text>
      <g clipPath={`url(#${id}vessel)`}>
        <path d={wave(f * .08 + 1.4, -s * .009)} fill={withAlpha(secondary, .38)} />
        <path d={wave(f * .12, 0)} fill={`url(#${id}liquid)`} />
        <path d={wave(f * .12, 0)} fill="none" stroke={gleam} strokeWidth={s * .0025} />
        {bubbles.map((bubble, i) => {
          const travel = (bubble.start + f * .008 * bubble.speed) % 1;
          const y = bottom - travel * depth;
          return <circle key={i} cx={bubble.x * w + Math.sin(f * .06 + i) * s * .004} cy={y} r={bubble.r * s} fill={withAlpha(color, .08 * calm)} stroke={withAlpha(color, .4 * calm)} strokeWidth={s * .001} opacity={smooth((f - 22) / 12)} />;
        })}
        <rect x={w * .16} y={top} width={w * .68} height={bottom - top} fill={`url(#${id}shine)`} opacity={.45} />
      </g>
      <text {...txt} data-21st-slot="value" fill={withAlpha(color, .06)} stroke={outline} strokeWidth={s * .0022}>{number}</text>
      <text x={w * (portrait ? .72 : .82)} y={h * (portrait ? .78 : .65)} fontFamily={family} fontSize={s * .1} fontWeight={500} fill={color}>%</text>
    </svg>
    {label && <div data-21st-slot="label" style={{ position: "absolute", top: h * (portrait ? .82 : .81), left: w * .12, width: w * .76, fontFamily: family, fontSize: labelSize, lineHeight: 1.25, color, textAlign: "center", overflowWrap: "anywhere", opacity: smooth((f - 94) / 20), transform: `translateY(${(1 - smooth((f - 94) / 20)) * s * .025}px)` }}>{label}</div>}
  </AbsoluteFill>;
};
