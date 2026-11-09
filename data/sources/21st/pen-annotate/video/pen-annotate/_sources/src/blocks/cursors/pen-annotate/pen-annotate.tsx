// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, expoOut, fitFontSize, inkOn, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { countText } from "../../proof-cta/shared";
import { Cursor, Ground, ShapeCursor, arc, clamp01, pathAt, prog, px, surfaceFor, typeFloor, useAuthoredFrame, type Pt } from "../shared";
import { meta } from "./pen-annotate.meta";
import type { schema } from "./pen-annotate.schema";

const SETTLE = 130;
const LOOP = meta.timing.markers.circle ?? 28;
const LOOP_END = LOOP + 32;
const ARROW = meta.timing.markers.arrow ?? 66;
const SHAFT_END = ARROW + 16;
const HEAD = SHAFT_END + 4;
const HEAD_END = HEAD + 7;
const NOTE = meta.timing.markers.note ?? 99;
const NOTE_END = NOTE + 23;
const REST = NOTE_END + 7;
const BARS = [0.3, 0.38, 0.35, 0.45, 0.52, 0.6, 0.9];
/** The note's slant, in degrees. */
const TILT = -4;
/** Average glyph width (em) of the handwriting faces brands use; the note is set to exactly this width. */
const handEm = (family: string) => (/Caveat/.test(family) ? 0.35 : /Bebas/.test(family) ? 0.4 : 0.5);

type Cubic = [Pt, Pt, Pt, Pt];
const bez = ([a, b, c, d]: Cubic, t: number): Pt => {
  const m = 1 - t;
  const k0 = m * m * m;
  const k1 = 3 * m * m * t;
  const k2 = 3 * m * t * t;
  const k3 = t * t * t;
  return { x: k0 * a.x + k1 * b.x + k2 * c.x + k3 * d.x, y: k0 * a.y + k1 * b.y + k2 * c.y + k3 * d.y };
};
const lerp = (a: Pt, b: Pt, t: number): Pt => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });

/** A stroke sampled once: the drawn polyline, its length for the dash, and the pen tip all come from these points. */
type Stroke = { pts: Pt[]; cum: number[]; len: number; d: string };
function sampleStroke(cubics: Cubic[], per: number): Stroke {
  const pts: Pt[] = [];
  cubics.forEach((c, i) => {
    for (let k = i === 0 ? 0 : 1; k <= per; k++) {
      const p = bez(c, k / per);
      pts.push({ x: px(p.x), y: px(p.y) });
    }
  });
  const cum = [0];
  for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1]! + Math.hypot(pts[i]!.x - pts[i - 1]!.x, pts[i]!.y - pts[i - 1]!.y));
  return { pts, cum, len: cum[cum.length - 1]!, d: `M${pts.map((p) => `${p.x} ${p.y}`).join(" L")}` };
}
function tipAt(s: Stroke, t: number): Pt {
  const target = clamp01(t) * s.len;
  let i = 1;
  while (i < s.cum.length - 1 && s.cum[i]! < target) i++;
  const seg = s.cum[i]! - s.cum[i - 1]!;
  return lerp(s.pts[i - 1]!, s.pts[i]!, seg > 0 ? (target - s.cum[i - 1]!) / seg : 0);
}

/**
 * A hand-drawn loop around (c): one clockwise turn plus an overshoot, starting just above
 * the right-hand side, wobbling and spiralling out a little so the end passes outside the
 * start. Built as cubic Bezier segments from the curve's points and tangents.
 */
function loopCubics(c: Pt, rx: number, ry: number, u: number): Cubic[] {
  const start = -0.34;
  const sweep = Math.PI * 2 + 0.6;
  const tilt = -0.06;
  const at = (s: number): Pt => {
    const th = start + sweep * s;
    const grow = 1 + 0.08 * s;
    const a = rx * grow * (1 + 0.035 * Math.sin(2 * th + 0.8));
    const b = ry * grow * (1 + 0.05 * Math.cos(3 * th + 0.3));
    const x = a * Math.cos(th);
    const y = b * Math.sin(th);
    return { x: c.x + x * Math.cos(tilt) - y * Math.sin(tilt) + u * 0.6 * s, y: c.y + x * Math.sin(tilt) + y * Math.cos(tilt) + u * 0.9 * s };
  };
  const der = (s: number): Pt => {
    const h = 1e-3;
    const p = at(s + h);
    const q = at(s - h);
    return { x: (p.x - q.x) / (2 * h), y: (p.y - q.y) / (2 * h) };
  };
  const n = 10;
  const out: Cubic[] = [];
  for (let i = 0; i < n; i++) {
    const s0 = i / n;
    const s1 = (i + 1) / n;
    const k = (s1 - s0) / 3;
    const p0 = at(s0);
    const p3 = at(s1);
    const d0 = der(s0);
    const d3 = der(s1);
    out.push([p0, { x: p0.x + d0.x * k, y: p0.y + d0.y * k }, { x: p3.x - d3.x * k, y: p3.y - d3.y * k }, p3]);
  }
  return out;
}

/** Hand speed: a quick start and a soft finish, never a dead stop mid-stroke. */
const draw = (t: number) => 0.45 * clamp01(t) + 0.55 * easeInOut(t);

export const Component: React.FC<z.infer<typeof schema>> = ({ title, subtitle, metric, note, color, accent, ink, surfaceColor, background, fontFamily, handFontFamily }) => {
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const hand = brandFontStack(handFontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  // Condensed display faces set about 0.72x as wide as a grotesk; text estimates scale by this.
  const n = /Bebas/.test(fontFamily) ? 0.72 : 1;

  // Card: wide in 16:9, near-square in 1:1, the full height in 9:16.
  const cardW = aspect === "16:9" ? W * 0.62 : aspect === "1:1" ? W * 0.86 : W * 0.88;
  const cardH = aspect === "16:9" ? H * 0.78 : aspect === "1:1" ? H * 0.82 : H * 0.8;
  const cardX = (W - cardW) / 2;
  const cardY = (H - cardH) / 2;
  const P = u * (portrait ? 6.5 : 5.2);
  const innerW = cardW - P * 2;

  // Header: title, subtitle, then the big metric.
  const titleFs = Math.max(floor, fitFontSize({ chars: Array.from(title).length + 1, boxW: innerW * (portrait ? 1 : 0.62), boxH: u * 12, charEm: 0.56 * n, max: u * (portrait ? 7 : 3.6) }));
  const subFs = Math.max(floor, fitFontSize({ chars: Array.from(subtitle).length + 1, boxW: innerW * (portrait ? 1 : 0.62), boxH: u * 10, charEm: 0.52 * n, max: u * (portrait ? 5.6 : 2.5) }));
  const metricChars = Math.max(2, Array.from(metric).length);
  const metricFs = Math.max(floor, fitFontSize({ chars: metricChars, boxW: innerW * (portrait ? 0.66 : 0.42), boxH: u * 30, charEm: 0.62 * n, lineHeight: 1, max: u * (portrait ? 21 : 11.5) }));
  const mW = metricChars * 0.62 * n * metricFs;
  const metricX = cardX + P + (portrait ? u * 1.5 : u * 0.6);
  const metricTop = cardY + P + titleFs * 1.25 + (subtitle ? subFs * 1.35 : 0) + u * (portrait ? 3.5 : 2.6);
  const loopC = { x: metricX + mW / 2, y: metricTop + metricFs * 0.54 };
  const rx = mW / 2 + u * (portrait ? 4 : 3.6);
  const ry = metricFs * 0.36 + u * (portrait ? 4.2 : 3);

  // Chart: seven bars, the last one accented and tallest.
  const chartL = cardX + P;
  const chartR = cardX + cardW - P;
  const chartB = cardY + cardH - P;
  const chartT = portrait ? cardY + cardH * 0.4 : cardY + P + u;
  const chartH = chartB - chartT;
  const slot = (chartR - chartL) / BARS.length;
  const barW = slot * 0.56;
  const bars = BARS.map((v, i) => ({ x: chartL + i * slot + (slot - barW) / 2, h: v * chartH * expoOut(prog(f, 4 + i * 2, 22 + i * 2)), full: v * chartH }));
  const last = bars[bars.length - 1]!;

  // Ink strokes, all sampled from cubic Beziers.
  const loop = sampleStroke(loopCubics(loopC, rx, ry, u), 16);
  const loopEnd = loop.pts[loop.pts.length - 1]!;
  const E = { x: loopEnd.x + u * 1.6, y: loopEnd.y + u * (portrait ? 1.6 : 0.4) };
  const T = { x: portrait ? last.x + barW / 2 : last.x - u * 1.8, y: chartB - last.full - u * (portrait ? 2.6 : -1.4) };
  const dx = T.x - E.x;
  const shaftCubic: Cubic = portrait
    ? [E, { x: E.x + u * 13, y: E.y + u * 5 }, { x: T.x + u * 1.5, y: T.y - u * 15 }, T]
    : [E, { x: E.x + dx * 0.3, y: E.y - u * 10 }, { x: T.x - dx * 0.32, y: T.y - u * 8 }, T];
  const shaft = sampleStroke([shaftCubic], 30);
  const dir = (() => {
    const c2 = shaftCubic[2];
    const l = Math.hypot(T.x - c2.x, T.y - c2.y) || 1;
    return { x: (T.x - c2.x) / l, y: (T.y - c2.y) / l };
  })();
  const barb = u * (portrait ? 3.8 : 2.8);
  const rot = (v: Pt, a: number): Pt => ({ x: v.x * Math.cos(a) - v.y * Math.sin(a), y: v.x * Math.sin(a) + v.y * Math.cos(a) });
  const b1 = { x: T.x - rot(dir, 0.55).x * barb, y: T.y - rot(dir, 0.55).y * barb };
  const b2 = { x: T.x - rot(dir, -0.5).x * barb * 0.92, y: T.y - rot(dir, -0.5).y * barb * 0.92 };
  const head = sampleStroke(
    [
      [b1, lerp(b1, T, 0.33), lerp(b1, T, 0.66), T],
      [T, lerp(T, b2, 0.33), lerp(T, b2, 0.66), b2],
    ],
    8,
  );

  // Note: handwritten under the circle, revealed left to right behind the pen.
  const noteChars = Math.max(1, Array.from(note).length);
  const noteX = metricX + u * (portrait ? 0 : 1);
  const noteBoxW = portrait ? Math.max(u * 30, E.x - u * 3 - noteX) : innerW * 0.6;
  const em = handEm(handFontFamily);
  const noteFs = Math.max(floor, fitFontSize({ chars: noteChars, boxW: noteBoxW, boxH: u * 16, charEm: em, lineHeight: 1.45, max: u * (portrait ? 11 : 8.6) }));
  // The note is SVG text pinned to an exact length, so the reveal and the pen tip share one coordinate.
  const noteW = noteChars * em * noteFs;
  const notePad = { x: noteFs * 0.14, y: 0 };
  const noteBoxH = noteFs * 1.45;
  const baseline = noteFs * 1.02;
  const noteY = loopC.y + ry + u * (portrait ? 3.4 : 1.8);
  const tilt = (TILT * Math.PI) / 180;
  const noteAt = (lx: number, ly: number): Pt => {
    const v = rot({ x: lx, y: ly - noteBoxH / 2 }, tilt);
    return { x: noteX + v.x, y: noteY + noteBoxH / 2 + v.y };
  };
  const write = clamp01(prog(f, NOTE, NOTE_END));
  const midY = baseline - noteFs * 0.28;
  const writeTip = noteAt(notePad.x + write * noteW, midY + Math.sin(f * 1.9) * noteFs * 0.14 * (write > 0 && write < 1 ? 1 : 0));
  const noteStart = noteAt(notePad.x, midY);
  const noteEnd = noteAt(notePad.x + noteW, midY);
  const reveal = write >= 1 ? 1 : clamp01((notePad.x + write * noteW + noteFs * 0.06) / (noteW + notePad.x * 2));

  // Pen tip over the timeline: approach, loop, hop, shaft, hop, head, hop, write, rest.
  const penSize = Math.max(u * (portrait ? 9 : 5.8), 26);
  const restAt = { x: noteEnd.x + u * (portrait ? 4 : 3), y: noteEnd.y + u * (portrait ? 3 : 2.2) };
  const hop = (a: Pt, b: Pt, t: number) => arc(a, b, easeInOut(t), 0.12);
  const loopT = draw(prog(f, LOOP, LOOP_END));
  const shaftT = draw(prog(f, ARROW, SHAFT_END));
  const headT = draw(prog(f, HEAD, HEAD_END));
  const tip: Pt =
    f < LOOP
      ? pathAt(f, [
          { f: 4, x: W * 0.84, y: H + penSize * 1.6 },
          { f: LOOP, x: loop.pts[0]!.x, y: loop.pts[0]!.y },
        ])
      : f <= LOOP_END
        ? tipAt(loop, loopT)
        : f < ARROW
          ? hop(loopEnd, E, prog(f, LOOP_END, ARROW))
          : f <= SHAFT_END
            ? tipAt(shaft, shaftT)
            : f < HEAD
              ? hop(T, b1, prog(f, SHAFT_END, HEAD))
              : f <= HEAD_END
                ? tipAt(head, headT)
                : f < NOTE
                  ? hop(b2, noteStart, prog(f, HEAD_END, NOTE))
                  : f <= NOTE_END
                    ? writeTip
                    : hop(noteEnd, restAt, prog(f, NOTE_END, REST));
  const penOn = prog(f, 14, 22);
  const sw = px(u * (portrait ? 1.15 : 0.95));
  const inkPath = (st: Stroke, t: number) =>
    t > 0 ? <path d={st.d} strokeDasharray={`${px(st.len)} ${px(st.len + 2)}`} strokeDashoffset={px(st.len * (1 - t))} /> : null;

  // Grid lines stop short of the header and the note instead of running through them.
  const headerBottom = noteY + noteBoxH + u;
  const headerRight =
    Math.max(
      loopC.x + rx * 1.12,
      noteX + noteW + notePad.x * 2,
      cardX + P + Array.from(title).length * 0.56 * n * titleFs,
      cardX + P + Array.from(subtitle).length * 0.52 * n * subFs,
    ) + u * 3;
  const grid = [0, 1, 2, 3, 4]
    .map((k) => {
      const y = chartT + (chartH * k) / 4;
      return { k, y, x0: y < headerBottom ? headerRight : chartL };
    })
    .filter((g) => chartR - g.x0 > innerW * 0.3);

  const enter = expoOut(prog(f, 0, 16));
  const metricText = countText(metric, expoOut(prog(f, 4, 22)));

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={0.5} portrait={portrait} glow={0.6} />
      <div
        style={{
          position: "absolute",
          left: px(cardX),
          top: px(cardY),
          width: px(cardW),
          height: px(cardH),
          borderRadius: u * (portrait ? 3.4 : 2.8),
          background: s.card,
          boxShadow: s.shadow(u),
          opacity: prog(f, 0, 8),
          transform: enter < 1 ? `translateY(${px((1 - enter) * u * 4)}px)` : undefined,
        }}
      />
      <div style={{ position: "absolute", inset: 0, opacity: prog(f, 0, 8), transform: enter < 1 ? `translateY(${px((1 - enter) * u * 4)}px)` : undefined }}>
        {/* Grid */}
        {grid.map((g) => (
          <div key={g.k} style={{ position: "absolute", left: px(g.x0), width: px(chartR - g.x0), top: px(g.y), height: Math.max(1, u * 0.12), background: g.k === 4 ? withAlpha(color, s.dark ? 0.22 : 0.18) : s.line }} />
        ))}
        {/* Bars */}
        {bars.map((b, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: px(b.x),
              width: px(barW),
              top: px(chartB - b.h),
              height: px(b.h),
              borderRadius: `${px(barW * 0.18)}px ${px(barW * 0.18)}px ${px(barW * 0.06)}px ${px(barW * 0.06)}px`,
              background: i === bars.length - 1 ? accent : withAlpha(color, s.dark ? 0.16 : 0.12),
              boxShadow: i === bars.length - 1 ? `0 ${px(u * 0.6)}px ${px(u * 3)}px ${withAlpha(accent, 0.35)}` : undefined,
            }}
          />
        ))}
        {/* Header */}
        <div style={{ position: "absolute", left: px(cardX + P), top: px(cardY + P), display: "flex", flexDirection: "column", gap: titleFs * 0.08 }}>
          <span data-21st-slot="title" style={{ fontFamily: font, fontSize: titleFs, fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.02em", whiteSpace: "nowrap", color: s.ink }}>
            {title}
          </span>
          {subtitle ? (
            <span data-21st-slot="subtitle" style={{ fontFamily: font, fontSize: subFs, fontWeight: 500, lineHeight: 1.2, whiteSpace: "nowrap", color: s.muted }}>
              {subtitle}
            </span>
          ) : null}
        </div>
        <div style={{ position: "absolute", left: px(metricX), top: px(metricTop), width: px(mW), display: "flex", justifyContent: "center" }}>
          <span data-21st-slot="metric" style={{ fontFamily: font, fontSize: metricFs, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.04em", whiteSpace: "nowrap", color: s.ink, fontVariantNumeric: "tabular-nums" }}>
            {metricText}
          </span>
        </div>
      </div>

      {/* Marker ink */}
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none" stroke={ink} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", left: 0, top: 0, overflow: "visible", pointerEvents: "none" }}>
        {inkPath(loop, loopT * (f >= LOOP ? 1 : 0))}
        {inkPath(shaft, f >= ARROW ? shaftT : 0)}
        {inkPath(head, f >= HEAD ? headT : 0)}
      </svg>
      <div
        style={{
          position: "absolute",
          left: px(noteX),
          top: px(noteY),
          width: px(noteW + notePad.x * 2),
          height: px(noteBoxH),
          transform: `rotate(${TILT}deg)`,
          transformOrigin: "0 50%",
          clipPath: `inset(0 ${px((1 - reveal) * 100)}% 0 0)`,
          opacity: write > 0 ? 1 : 0,
        }}
      >
        <svg width={px(noteW + notePad.x * 2)} height={px(noteBoxH)} style={{ display: "block", overflow: "visible" }}>
          <text data-21st-slot="note" x={px(notePad.x)} y={px(baseline)} textLength={px(noteW)} lengthAdjust="spacing" fill={ink} style={{ fontFamily: hand, fontSize: noteFs, fontWeight: 600 }}>
            {note}
          </text>
        </svg>
      </div>

      {/* Cursor: the arrow arrives and becomes the pen. */}
      {f >= 4 && penOn < 1 ? (
        <AbsoluteFill style={{ transform: `scale(${px(1 - 0.2 * penOn)})`, transformOrigin: `${px(tip.x)}px ${px(tip.y)}px`, zIndex: 20 }}>
          <Cursor x={px(tip.x)} y={px(tip.y)} size={penSize * 0.9} fill={s.ink} stroke={s.dark ? s.deep : inkOn(color)} opacity={1 - penOn} />
        </AbsoluteFill>
      ) : null}
      {penOn > 0 ? (
        <AbsoluteFill style={{ transform: `scale(${px(0.8 + 0.2 * penOn)})`, transformOrigin: `${px(tip.x)}px ${px(tip.y)}px`, zIndex: 20 }}>
          <ShapeCursor x={px(tip.x)} y={px(tip.y)} size={penSize} kind="pencil" ink={s.deep} fill={ink} opacity={penOn} />
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
};
