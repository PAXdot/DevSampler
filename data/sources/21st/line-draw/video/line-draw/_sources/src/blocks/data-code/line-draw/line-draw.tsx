// Built with Remotion - https://remotion.pro/license
import React, { useId, useMemo } from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, band, brandFontStack, easeInOut, fitFontSize, inkOn, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { dataFontFloor } from "../_shared/code-card";
import { prog } from "../_shared/num";
import { meta } from "./line-draw.meta";
import type { schema } from "./line-draw.schema";

const DRAW_AT = 10;

type P = { x: number; y: number };

/** Monotone cubic (Fritsch-Carlson) through the points, sampled into a dense polyline. No overshoot. */
function monotone(pts: P[], perSeg = 18): P[] {
  const n = pts.length;
  if (n < 2) return pts;
  const dx: number[] = [];
  const m: number[] = [];
  for (let i = 0; i < n - 1; i++) {
    dx.push(pts[i + 1]!.x - pts[i]!.x);
    m.push((pts[i + 1]!.y - pts[i]!.y) / (dx[i] || 1));
  }
  const t: number[] = [m[0]!];
  for (let i = 1; i < n - 1; i++) t.push(m[i - 1]! * m[i]! <= 0 ? 0 : (m[i - 1]! + m[i]!) / 2);
  t.push(m[n - 2]!);
  for (let i = 0; i < n - 1; i++) {
    if (m[i] === 0) {
      t[i] = 0;
      t[i + 1] = 0;
      continue;
    }
    const a = t[i]! / m[i]!;
    const b = t[i + 1]! / m[i]!;
    const h = a * a + b * b;
    if (h > 9) {
      const k = 3 / Math.sqrt(h);
      t[i] = k * a * m[i]!;
      t[i + 1] = k * b * m[i]!;
    }
  }
  const out: P[] = [pts[0]!];
  for (let i = 0; i < n - 1; i++) {
    const p0 = pts[i]!;
    const p1 = pts[i + 1]!;
    const h = dx[i]!;
    for (let s = 1; s <= perSeg; s++) {
      const u = s / perSeg;
      const h00 = 2 * u ** 3 - 3 * u ** 2 + 1;
      const h10 = u ** 3 - 2 * u ** 2 + u;
      const h01 = -2 * u ** 3 + 3 * u ** 2;
      const h11 = u ** 3 - u ** 2;
      out.push({ x: p0.x + h * u, y: h00 * p0.y + h10 * h * t[i]! + h01 * p1.y + h11 * h * t[i + 1]! });
    }
  }
  return out;
}

export const Component: React.FC<z.infer<typeof schema>> = ({ title, value, points, labels, area, grid, drawFrames, color, accent, fontFamily, monoFontFamily }) => {
  const resolvedMono = brandFontStack(monoFontFamily ?? "Geist Mono");
  const { fps } = useVideoConfig();
  const { width, height, portrait } = useLayout();
  const minFont = dataFontFloor(height, portrait);
  const { frame, exit, durationInFrames } = useEnterExit(meta.timing);
  const drawLength = Math.min(drawFrames, Math.max(1, Math.floor(durationInFrames * 0.7) - DRAW_AT));
  const font = brandFontStack(fontFamily);
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");

  const titleSize = Math.max(minFont, fitFontSize({ chars: title.length, boxW: width * 0.62, boxH: height * 0.1, charEm: 0.55, max: Math.min(height * 0.075, width * 0.06) }));
  const labSize = Math.max(minFont, Math.min(height * 0.042, width * 0.028));
  const valSize = Math.max(minFont, fitFontSize({ chars: value.length, boxW: width * 0.3, boxH: height * 0.1, charEm: 0.58, max: titleSize * 0.9 }));
  const top = titleSize * 2.4 + valSize * 2.2;
  const left = width * 0.01;
  const right = width * 0.01;
  const chartW = width - left - right;
  const chartH = height - top - labSize * 2.6;

  const lo = Math.min(...points);
  const hi = Math.max(...points);
  const span = hi - lo || 1;
  const pts = useMemo(
    () =>
      monotone(
        points.map((v, i) => ({ x: left + (chartW * i) / (points.length - 1), y: top + chartH * (1 - (v - lo) / span) * 0.92 + chartH * 0.04 })),
      ),
    [points, left, chartW, top, chartH, lo, span],
  );
  // Arc length so the head moves at the eased speed along the curve, not along x.
  const cum = useMemo(() => {
    const c = [0];
    for (let i = 1; i < pts.length; i++) c.push(c[i - 1]! + Math.hypot(pts[i]!.x - pts[i - 1]!.x, pts[i]!.y - pts[i - 1]!.y));
    return c;
  }, [pts]);
  const total = cum[cum.length - 1] || 1;

  const draw = easeInOut(prog(frame, DRAW_AT, DRAW_AT + drawLength));
  const L = draw * total;
  let j = 1;
  while (j < pts.length - 1 && cum[j]! < L) j++;
  const a = pts[j - 1]!;
  const b = pts[j]!;
  const segT = Math.max(0, Math.min(1, (L - cum[j - 1]!) / Math.max(1e-6, cum[j]! - cum[j - 1]!)));
  const head = { x: a.x + (b.x - a.x) * segT, y: a.y + (b.y - a.y) * segT };
  const drawn = [...pts.slice(0, j), head];
  const d = drawn.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(" ");
  const base = top + chartH;
  const areaD = `${d} L${head.x.toFixed(2)} ${base} L${pts[0]!.x.toFixed(2)} ${base} Z`;

  const landed = DRAW_AT + drawLength;
  const tIn = springSnap(frame, fps, 0, APPLE);
  const vIn = springSnap(frame, fps, landed, APPLE);
  const stroke = Math.max(2, Math.min(width, height) * 0.008);
  const leave = 1 - exit;
  const pillW = valSize * (value.length * 0.62 + 1.4);
  const pillX = Math.max(0, Math.min(width - pillW, head.x - pillW / 2));

  return (
    <AbsoluteFill style={{ fontFamily: font, color, opacity: leave, transform: `translateY(${-exit * height * 0.02}px)` }}>
      <div
        data-21st-slot="title"
        style={{
          position: "absolute",
          left,
          top: Math.ceil(titleSize * 0.12),
          fontSize: titleSize,
          fontWeight: 600,
          letterSpacing: "-0.03em",
          width: width - left - right,
          whiteSpace: "normal",
          overflowWrap: "anywhere",
          lineHeight: 1.15,
          opacity: band(frame, 0, 8),
          transform: `translateY(${(1 - tIn) * titleSize * 0.4}px)`,
        }}
      >
        {title}
      </div>
      <svg width={width} height={height} style={{ position: "absolute", inset: 0, overflow: "visible" }}>
        <defs>
          <linearGradient id={`ld-area-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity={0.28} />
            <stop offset="100%" stopColor={accent} stopOpacity={0} />
          </linearGradient>
          <linearGradient id={`ld-line-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={accent} stopOpacity={0.45} />
            <stop offset="100%" stopColor={accent} stopOpacity={1} />
          </linearGradient>
        </defs>
        {grid
          ? [0, 0.25, 0.5, 0.75, 1].map((g) => (
              <line
                key={g}
                x1={left}
                x2={left + chartW}
                y1={top + chartH * g}
                y2={top + chartH * g}
                stroke={withAlpha(color, g === 1 ? 0.2 : 0.07)}
                strokeDasharray={g === 1 ? undefined : `${stroke * 1.5} ${stroke * 2.5}`}
                strokeWidth={1}
                opacity={band(frame, 2 + g * 4, 10 + g * 4)}
              />
            ))
          : null}
        {area && frame >= DRAW_AT ? <path d={areaD} fill={`url(#ld-area-${uid})`} opacity={band(frame, DRAW_AT + 10, DRAW_AT + 20)} /> : null}
        {frame >= DRAW_AT ? <path d={d} fill="none" stroke={`url(#ld-line-${uid})`} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" /> : null}
        {frame >= DRAW_AT ? (
          <>
            <circle cx={head.x} cy={head.y} r={stroke * 4.5} fill={withAlpha(accent, 0.18)} />
            <circle cx={head.x} cy={head.y} r={stroke * 1.9} fill={accent} stroke={color} strokeWidth={stroke * 0.6} />
          </>
        ) : null}
      </svg>
      {labels.map((l, i) => {
        const w = Math.min(labSize * 6, chartW / Math.max(1, labels.length - 1));
        const xc = labels.length > 1 ? left + (chartW * i) / (labels.length - 1) : left + w / 2;
        return (
          <div
            key={i}
            data-21st-slot="labels"
            style={{
              position: "absolute",
              top: base + labSize * 0.9,
              left: Math.max(0, Math.min(width - w, xc - w / 2)),
              width: w,
              textAlign: xc - w / 2 < 0 ? "left" : xc + w / 2 > width ? "right" : "center",
              fontFamily: resolvedMono,
              fontSize: labSize,
              lineHeight: 1.2,
              overflowWrap: "anywhere",
              color: withAlpha(color, 0.42),
              opacity: band(frame, 6 + i * 2, 14 + i * 2),
            }}
          >
            {l}
          </div>
        );
      })}
      <div
        data-21st-slot="value"
        style={{
          position: "absolute",
          left: pillX,
          top: Math.max(titleSize * 1.6, head.y - valSize * 2.9),
          width: pillW,
          height: valSize * 1.7,
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 99,
          background: accent,
          color: inkOn(accent),
          fontSize: valSize,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          fontVariantNumeric: "tabular-nums",
          whiteSpace: "nowrap",
          opacity: band(frame, landed, landed + 6),
          transform: `translateY(${(1 - vIn) * valSize * 0.6}px) scale(${0.9 + 0.1 * vIn})`,
          boxShadow: `0 ${valSize * 0.3}px ${valSize}px ${withAlpha(accent, 0.35)}`,
        }}
      >
        {value}
      </div>
    </AbsoluteFill>
  );
};
