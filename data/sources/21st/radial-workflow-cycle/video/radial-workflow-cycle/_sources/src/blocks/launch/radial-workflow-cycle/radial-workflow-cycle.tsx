// Built with Remotion - https://remotion.pro/license
import React from "react";
import type { z } from "zod";
import { easeInOut, expoOut, fitFontSize, ramp, withAlpha } from "../../../kit/index";
import { Label, Stage, opening, useLaunch } from "../shared";
import { meta } from "./radial-workflow-cycle.meta";
import type { schema } from "./radial-workflow-cycle.schema";
export const Component: React.FC<z.infer<typeof schema>> = ({ title, steps, tilt, theme, accent, fontFamily, surfaceColor, textColor }) => {
  const { width: w, height: h, unit: u, portrait, frame, exit, p, font, nativeFont } = useLaunch(theme, fontFamily, meta.timing, { surfaceColor, textColor });
  const size = Math.min(w * (portrait ? 1 : 0.86), h * 0.82), r = size * 0.35, mid = size / 2;
  const progress = easeInOut(ramp(frame, [18, 112], [0, 1]));
  const angle = -Math.PI / 2 + progress * Math.PI * 2;
  const circumference = 2 * Math.PI * r;
  const fs = Math.max(nativeFont * (portrait ? 1.18 : 1.08) / Math.max(0.65, Math.cos(tilt * Math.PI / 180)), fitFontSize({ chars: Math.max(...steps.map(s => s.length)), boxW: size * 0.25, boxH: size * 0.055, max: u * 3, lines: portrait ? 2 : 1 })) * 1.25;
  // Larger, bolder step labels; never so large that a word breaks inside its label column.
  const labelFs = Math.min(fs, size * (portrait ? 0.5 : 0.26) / Math.max(1, ...steps.flatMap(s => s.split(/\s+/)).map(word => word.length * 0.68 + 1)));
  return <Stage font={font} opacity={opening(frame, exit)}><div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: w * 0.92 }}>
    <div style={{ width: size, height: size, perspective: size * 2.8 }}><div style={{ position: "relative", width: size, height: size, transform: `rotateX(${tilt}deg) rotateZ(${-12 + 12 * progress}deg) scale(${0.88 + 0.12 * expoOut(frame / 24)})` }}>
      <div style={{ position: "absolute", inset: "-8%", borderRadius: "50%", background: `radial-gradient(circle, ${withAlpha(accent, 0.2)}, ${withAlpha(accent, 0.06)} 45%, transparent 70%)` }} />
      <svg width={size} height={size} style={{ position: "absolute", inset: 0, overflow: "visible" }}>
        <circle cx={mid} cy={mid} r={r} fill="none" stroke={withAlpha(accent, 0.24)} strokeWidth={u * 0.55} />
        <circle cx={mid} cy={mid} r={r * 0.8} fill="none" stroke={withAlpha(p.ink, 0.3)} strokeWidth={u * 0.14} strokeDasharray="1 9" />
        {Array.from({ length: 96 }, (_, i) => { const a = i / 96 * Math.PI * 2, inner = r * 0.9, outer = r * (i % 8 === 0 ? 0.78 : 0.84); return <line key={i} x1={mid + Math.cos(a) * inner} y1={mid + Math.sin(a) * inner} x2={mid + Math.cos(a) * outer} y2={mid + Math.sin(a) * outer} stroke={withAlpha(p.ink, i % 8 === 0 ? 0.7 : 0.3)} strokeWidth={u * (i % 8 === 0 ? 0.22 : 0.14)} />; })}
        <circle cx={mid} cy={mid} r={r} fill="none" stroke={accent} strokeWidth={u * 0.8} strokeDasharray={`${circumference * progress} ${circumference}`} transform={`rotate(-90 ${mid} ${mid})`} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 ${u * 0.9}px ${withAlpha(accent, 0.8)})` }} />
        <circle cx={mid + Math.cos(angle) * r} cy={mid + Math.sin(angle) * r} r={u * 0.95} fill={p.ink} style={{ filter: `drop-shadow(0 0 ${u * 1.6}px ${accent})` }} />
      </svg>
      {steps.map((s, i) => { const a = -Math.PI / 2 + i / steps.length * Math.PI * 2, rr = r; const active = progress >= i / steps.length; return <div data-21st-slot="steps" key={i} style={{ position: "absolute", left: (portrait ? Math.max(size * 0.25, Math.min(size * 0.75, mid + Math.cos(a) * rr)) : mid + Math.cos(a) * rr) - size * (portrait ? 0.25 : 0.13), top: mid + Math.sin(a) * rr - labelFs * 0.86, width: size * (portrait ? 0.5 : 0.26), textAlign: "center", lineHeight: 1.25, fontSize: labelFs, fontWeight: 600, color: active ? p.ink : p.muted, letterSpacing: "0.02em", opacity: ramp(frame, [8 + i * 3, 18 + i * 3], [0, 1]) }}>
        {/* Each step is a chip sitting on the ring where its node is: lit once the sweep has passed it. */}
        <span style={{ display: "inline-block", padding: "0.18em 0.5em", borderRadius: 999, background: active ? `color-mix(in srgb, ${accent} 26%, ${p.surface})` : p.surface, border: `${Math.max(1, u * 0.2)}px solid ${active ? accent : withAlpha(accent, 0.45)}`, boxShadow: active ? `0 0 ${u * 1.6}px ${withAlpha(accent, 0.45)}` : undefined }}>{s}</span>
      </div>; })}
      <div style={{ position: "absolute", inset: "38%", borderRadius: "50%", border: `${Math.max(1, u * 0.2)}px solid ${withAlpha(accent, 0.7)}`, background: `radial-gradient(circle, ${withAlpha(accent, 0.34)}, ${withAlpha(accent, 0.1)})`, display: "grid", placeItems: "center", fontSize: u * 4.6, fontWeight: 600, color: p.ink, textShadow: `0 0 ${u * 1.2}px ${withAlpha(accent, 0.9)}` }}>{Math.round(progress * 100)}%</div>
    </div></div>
    <div style={{ paddingTop: portrait ? u * 11 : 0, opacity: ramp(frame, [100, 116], [0, 1]) }}><Label min={nativeFont} lines={portrait ? 2 : 1} text={title} slot="title" width={w * 0.8} height={portrait ? nativeFont * 2.6 : u * 7} color={p.ink} max={u * 4.4} /></div>
  </div></Stage>;
};
