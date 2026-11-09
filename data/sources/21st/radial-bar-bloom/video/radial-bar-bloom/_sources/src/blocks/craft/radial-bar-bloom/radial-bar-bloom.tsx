// Built with Remotion - https://remotion.pro/license
import React from "react";
import type { z } from "zod";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { brandFontStack, fitFontSize, useLayout, withAlpha } from "../../../kit/index";
import type { schema } from "./radial-bar-bloom.schema";

const clamp = (x: number) => Math.max(0, Math.min(1, x));
const smooth = (x: number) => { const t = clamp(x); return t * t * (3 - 2 * t); };
const grow = (t: number) => t < 0 ? 0 : t >= 1 ? 1 : 1 - Math.exp(-6 * t) * Math.cos(t * 9);
export const Component: React.FC<z.infer<typeof schema>> = ({ title, values, primary, secondary, color, background, fontFamily }) => {
  const f = useCurrentFrame();
  const { width: w, height: h, portrait, aspect } = useLayout();
  const square = aspect === "1:1";
  const family = brandFontStack(fontFamily), s = Math.min(w, h);
  const cx = portrait || square ? w / 2 : w * .35, cy = portrait ? h * .40 : h * .52;
  const radius = s * (portrait ? .38 : square ? .33 : .35), inner = radius * .31;
  const max = Math.max(1, ...values.map(v => v.value));
  const total = values.reduce((sum, v) => sum + v.value, 0);
  const count = Math.round(total * smooth((f - 15) / 85));
  const titleSize = fitFontSize({ chars: title.length, boxW: w * .8, boxH: h * .13, lines: portrait || square ? 2 : 1, max: h * (portrait ? .041 : .045), min: h * (portrait ? .031 : .019), lineHeight: 1.2 });
  const point = (r: number, a: number): [number, number] => [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
  const petals = values.map((v, i) => {
    const angle = -Math.PI / 2 + Math.PI * 2 * i / values.length;
    const half = Math.PI / values.length * .82;
    const extent = Math.max(.012, grow((f - 14 - i * 7) / 58));
    const r = inner + (radius - inner) * (v.value / max) * extent;
    const a = point(inner, angle - half), b = point(r, angle - half * .74);
    const c = point(r, angle + half * .74), d = point(inner, angle + half);
    const bend = point(r * 1.04, angle);
    const shape = `M${a} Q${b} ${bend} Q${c} ${d} A${inner},${inner} 0 0 0 ${a} Z`;
    return { shape, tone: i % 2 ? secondary : primary, angle, r, value: v.value };
  });
  const legendLeft = portrait || square ? w * .1 : w * .66;
  const legendTop = portrait ? h * .70 : square ? h * .78 : h * .27;
  const legendW = portrait || square ? w * .8 : w * .27;
  const cols = portrait || square ? 2 : 1;
  const rowH = portrait ? h * .064 : square ? h * .06 : h * .085;
  const legendSize = h * (portrait ? .031 : square ? .024 : .028);
  return <AbsoluteFill style={{ background: background === "transparent" ? undefined : background, color, fontFamily: family }}>
    {title && <div data-21st-slot="title" style={{ position: "absolute", left: w * .1, top: h * .085, width: w * .8, fontSize: titleSize, lineHeight: 1.2, textAlign: "center", fontWeight: 600, opacity: smooth(f / 16) }}>{title}</div>}
    <svg width={w} height={h} style={{ position: "absolute", inset: 0 }}>
      {[.25, .5, .75, 1].map((t, i) => <circle key={i} cx={cx} cy={cy} r={inner + (radius - inner) * t} fill="none" stroke={withAlpha(color, .13)} strokeWidth={s * .0011} strokeDasharray={`${s * .003} ${s * .009}`} />)}
      {petals.map((p, i) => <g key={i}>
        <path d={p.shape} fill={withAlpha(p.tone, .75)} stroke={withAlpha(p.tone, .95)} strokeWidth={s * .002} />
        <path d={`M${point(inner * 1.05, p.angle)} L${point(p.r * .96, p.angle)}`} stroke={withAlpha(color, .32)} strokeWidth={s * .0012} />
        {[.25, .5, .75].map((t, j) => {
          const pos = point(inner + (p.r - inner) * t, p.angle), delta = s * .004;
          return <path key={j} d={`M${pos[0] - Math.cos(p.angle + Math.PI / 2) * delta},${pos[1] - Math.sin(p.angle + Math.PI / 2) * delta}l${Math.cos(p.angle + Math.PI / 2) * delta * 2},${Math.sin(p.angle + Math.PI / 2) * delta * 2}`} stroke={withAlpha(color, .4)} strokeWidth={s * .001} />;
        })}
      </g>)}
      <circle cx={cx} cy={cy} r={inner * .88} fill={background === "transparent" ? withAlpha(color, .07) : background} stroke={withAlpha(color, .2)} strokeWidth={s * .0015} />
    </svg>
    <div data-21st-slot="values" style={{ position: "absolute", left: cx - inner, top: cy - s * .059, width: inner * 2, textAlign: "center", fontSize: s * (String(total).length > 3 ? .065 : .086), lineHeight: 1.25, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{count}</div>
    <div style={{ position: "absolute", left: legendLeft, top: legendTop, width: legendW, display: "grid", gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, columnGap: w * .04 }}>
      {values.map((v, i) => <div key={i} style={{ minHeight: rowH, display: "flex", alignItems: "center", gap: w * .009, opacity: smooth((f - 83 - i * 4) / 18), transform: `translateY(${(1 - smooth((f - 83 - i * 4) / 18)) * s * .014}px)` }}>
        <span style={{ width: s * .012, height: s * .012, background: i % 2 ? secondary : primary, borderRadius: "50%", flexShrink: 0 }} />
        <span data-21st-slot="values" style={{ fontSize: legendSize, lineHeight: 1.25, flex: 1, overflowWrap: "anywhere" }}>{v.label}</span>
        <span data-21st-slot="values" style={{ fontSize: legendSize, lineHeight: 1.25, fontVariantNumeric: "tabular-nums", fontWeight: 600 }}>{v.value}</span>
      </div>)}
    </div>
  </AbsoluteFill>;
};
