// Built with Remotion - https://remotion.pro/license
// Text-free stand-in screens (skeleton UI) shown until the user drops a screenshot into a media slot.
import React, { useId } from "react";
import { random } from "remotion";
import { ramp, withAlpha } from "../../../kit/index";
import { Icon } from "./icons";
import type { Palette } from "./theme";

export type SampleKind = "dashboard" | "list" | "article" | "chart" | "empty";

const Bar: React.FC<{ w: number | string; h: number; c: string; r?: number; style?: React.CSSProperties }> = ({ w, h, c, r, style }) => (
  <div style={{ width: w, height: h, borderRadius: r ?? h / 2, background: c, flexShrink: 0, ...style }} />
);

/** Area chart path over a w x h box from seeded points; `draw` 0..1 reveals it left to right. */
const Area: React.FC<{ w: number; h: number; accent: string; seed: string; draw: number; p: Palette }> = ({ w, h, accent, seed, draw, p }) => {
  // Seeds describe content and may contain spaces. SVG resource identifiers
  // need their own safe, deterministic namespace, unique to each chart.
  const resourceId = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const n = 12;
  const pts = Array.from({ length: n }, (_, i) => {
    const trend = i / (n - 1);
    const y = h * (0.82 - trend * 0.55 - (random(`${seed}-${i}`) - 0.5) * 0.28);
    return [(i / (n - 1)) * w, Math.max(h * 0.08, Math.min(h * 0.92, y))] as const;
  });
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const id = `area-${resourceId}`;
  return (
    <svg width={w} height={h} style={{ display: "block", overflow: "visible" }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={accent} stopOpacity={p.dark ? 0.35 : 0.22} />
          <stop offset="1" stopColor={accent} stopOpacity={0} />
        </linearGradient>
        <clipPath id={`${id}-c`}>
          <rect x={0} y={-h} width={w * draw} height={h * 3} />
        </clipPath>
      </defs>
      {[0.25, 0.5, 0.75].map((g) => (
        <line key={g} x1={0} x2={w} y1={h * g} y2={h * g} stroke={p.line} strokeWidth={1} />
      ))}
      <g clipPath={`url(#${id}-c)`}>
        <path d={`${line} L${w},${h} L0,${h} Z`} fill={`url(#${id})`} />
        <path d={line} fill="none" stroke={accent} strokeWidth={Math.max(1.5, h * 0.025)} strokeLinejoin="round" strokeLinecap="round" />
      </g>
    </svg>
  );
};

/**
 * A believable app screen made of skeleton parts. Sized by its own box (`w` x `h`).
 * `frame` drives a gentle chart draw-on so the stand-in is alive.
 */
export const SampleScreen: React.FC<{ kind: SampleKind; w: number; h: number; p: Palette; accent: string; frame: number; seed?: string }> = ({
  kind,
  w,
  h,
  p,
  accent,
  frame,
  seed = "s",
}) => {
  const u = Math.min(w, h) / 100;
  const draw = ramp(frame, [6, 40], [0, 1]);
  const wide = w / h > 1.15;
  const pad = u * 5;
  if (kind === "empty") {
    return (
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: u * 4 }}>
        <Icon name="search" size={u * 16} color={p.faint} strokeWidth={1.4} />
        <Bar w={w * 0.3} h={u * 3} c={p.bone} />
        <Bar w={w * 0.18} h={u * 7} c={withAlpha(accent, 0.85)} r={u * 1.6} />
      </div>
    );
  }
  if (kind === "article") {
    return (
      <div style={{ position: "absolute", inset: 0, padding: `${pad * 1.4}px ${wide ? w * 0.18 : pad}px`, display: "flex", flexDirection: "column", gap: u * 3 }}>
        <Bar w="38%" h={u * 2.4} c={withAlpha(accent, 0.6)} />
        <Bar w="86%" h={u * 6} c={p.bone} r={u * 1.2} style={{ background: withAlpha(p.ink, p.dark ? 0.2 : 0.14) }} />
        <Bar w="64%" h={u * 6} c={withAlpha(p.ink, p.dark ? 0.2 : 0.14)} r={u * 1.2} />
        <div style={{ height: u * 2 }} />
        {[96, 90, 94, 72, 0, 92, 88, 60].map((v, i) => (v ? <Bar key={i} w={`${v}%`} h={u * 2.2} c={p.bone} /> : <div key={i} style={{ height: u * 1.5 }} />))}
      </div>
    );
  }
  if (kind === "list") {
    const rows = Math.max(3, Math.floor((h - pad * 3) / (u * 13)));
    return (
      <div style={{ position: "absolute", inset: 0, padding: pad, display: "flex", flexDirection: "column", gap: u * 2.4 }}>
        <div style={{ display: "flex", alignItems: "center", gap: u * 2, marginBottom: u * 1.5 }}>
          <Bar w="30%" h={u * 4} c={withAlpha(p.ink, p.dark ? 0.22 : 0.16)} r={u} />
          <div style={{ flex: 1 }} />
          <Bar w={u * 16} h={u * 6} c={withAlpha(accent, 0.9)} r={u * 1.4} />
        </div>
        {Array.from({ length: rows }, (_, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: u * 2.6, padding: `${u * 1.8}px ${u * 2}px`, borderRadius: u * 1.6, background: p.raised }}>
            <div style={{ width: u * 7, height: u * 7, borderRadius: "50%", background: withAlpha(accent, 0.25 + 0.5 * random(`${seed}-l${i}`)) }} />
            <div style={{ display: "flex", flexDirection: "column", gap: u * 1.2, flex: 1 }}>
              <Bar w={`${40 + 30 * random(`${seed}-a${i}`)}%`} h={u * 2.2} c={withAlpha(p.ink, p.dark ? 0.24 : 0.18)} />
              <Bar w={`${55 + 30 * random(`${seed}-b${i}`)}%`} h={u * 1.8} c={p.bone} />
            </div>
            <Bar w={u * 9} h={u * 3.6} c={p.bone} />
          </div>
        ))}
      </div>
    );
  }
  // dashboard / chart
  const side = wide && kind === "dashboard" ? w * 0.2 : 0;
  const kpis = wide ? 3 : 2;
  const chartW = w - side - pad * 2;
  const chartH = kind === "chart" ? h * 0.52 : h * (wide ? 0.36 : 0.3);
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex" }}>
      {side ? (
        <div style={{ width: side, borderRight: `1px solid ${p.line}`, padding: pad * 0.8, display: "flex", flexDirection: "column", gap: u * 2.6 }}>
          <div style={{ display: "flex", gap: u * 1.6, alignItems: "center", marginBottom: u * 2 }}>
            <div style={{ width: u * 5, height: u * 5, borderRadius: u * 1.4, background: accent }} />
            <Bar w="55%" h={u * 2.4} c={withAlpha(p.ink, p.dark ? 0.24 : 0.18)} />
          </div>
          {[70, 56, 64, 48, 60].map((v, i) => (
            <div key={i} style={{ display: "flex", gap: u * 1.6, alignItems: "center", padding: `${u}px ${u * 1.2}px`, borderRadius: u, background: i === 0 ? withAlpha(accent, p.dark ? 0.18 : 0.1) : "transparent" }}>
              <div style={{ width: u * 2.6, height: u * 2.6, borderRadius: u * 0.7, background: i === 0 ? accent : p.bone }} />
              <Bar w={`${v}%`} h={u * 1.9} c={i === 0 ? withAlpha(accent, 0.55) : p.bone} />
            </div>
          ))}
        </div>
      ) : null}
      <div style={{ flex: 1, padding: pad, display: "flex", flexDirection: "column", gap: u * 3, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: u * 2 }}>
          <Bar w="26%" h={u * 3.4} c={withAlpha(p.ink, p.dark ? 0.24 : 0.18)} r={u} />
          <div style={{ flex: 1 }} />
          <Bar w={u * 12} h={u * 5} c={p.raised} r={u * 1.2} />
          <Bar w={u * 12} h={u * 5} c={withAlpha(accent, 0.9)} r={u * 1.2} />
        </div>
        <div style={{ display: "flex", gap: u * 2.4 }}>
          {Array.from({ length: kpis }, (_, i) => (
            <div key={i} style={{ flex: 1, padding: u * 2.4, borderRadius: u * 1.8, background: p.raised, display: "flex", flexDirection: "column", gap: u * 1.6 }}>
              <Bar w="50%" h={u * 1.8} c={p.bone} />
              <Bar w={`${55 + 30 * random(`${seed}-k${i}`)}%`} h={u * 4.4} c={withAlpha(p.ink, p.dark ? 0.3 : 0.22)} r={u} />
              <Bar w="34%" h={u * 2.2} c={withAlpha(i === 0 ? "#22C55E" : accent, 0.35)} />
            </div>
          ))}
        </div>
        <div style={{ padding: u * 2.4, borderRadius: u * 1.8, background: p.raised }}>
          <Area w={chartW - u * 4.8} h={chartH} accent={accent} seed={seed} draw={draw} p={p} />
        </div>
        {kind === "dashboard"
          ? [0, 1].map((i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: u * 2.4 }}>
                <div style={{ width: u * 4.4, height: u * 4.4, borderRadius: "50%", background: p.bone }} />
                <Bar w="32%" h={u * 2} c={p.bone} />
                <div style={{ flex: 1 }} />
                <Bar w="14%" h={u * 2} c={p.bone} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
