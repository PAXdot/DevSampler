// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, band, brandFontStack, expoOut, fitFontSize, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { fmtNum, mix, prog } from "../_shared/num";
import { meta } from "./counter-lookup.meta";
import type { schema } from "./counter-lookup.schema";

const TYPE_START = 14;
const CYCLE = 15;
const COUNT = 60;

export const Component: React.FC<z.infer<typeof schema>> = ({ question, queries, confirm, target, label, color, accent, background, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width, height, portrait } = useLayout();
  const minFont = Math.ceil(height * (portrait ? 0.03125 : 0.01875));
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const side = width / height > 1.25;

  const q0 = queries[0] ?? "";
  // A 2-frame cadence, capped so long queries still land on time.
  const perChar = Math.min(2, 24 / Math.max(1, q0.length));
  const typed = Math.min(q0.length, Math.max(0, Math.floor((frame - TYPE_START) / perChar)));
  const typeEnd = TYPE_START + Math.ceil(q0.length * perChar);
  const suggestAt = typeEnd + 4;
  const confirmAt = typeEnd + 10;
  const countAt = typeEnd + 14;
  const countEnd = countAt + COUNT;
  const cycleIdx = queries.length > 1 && frame >= countEnd ? Math.floor((frame - countEnd) / CYCLE) + 1 : 0;
  const shownQuery = cycleIdx === 0 ? q0.slice(0, typed) : queries[cycleIdx % queries.length]!;
  const swapT = cycleIdx === 0 ? 1 : expoOut(prog(frame, countEnd + (cycleIdx - 1) * CYCLE, countEnd + (cycleIdx - 1) * CYCLE + 6));

  const colW = side ? width * 0.4 : width * 0.82;
  const qSize = fitFontSize({ chars: question.length, boxW: colW, boxH: height * (side ? 0.22 : 0.14), lines: 2, charEm: 0.55, lineHeight: 1.12, max: Math.min(height, width) * 0.075 });
  const inSize = Math.max(minFont, Math.min(qSize * 0.62, fitFontSize({ chars: 26, boxW: colW * 0.8, boxH: height * 0.06, charEm: 0.56, max: qSize * 0.62 })));
  const confSize = Math.max(minFont, fitFontSize({ chars: confirm.length + 3, boxW: colW, boxH: inSize * 1.4, charEm: 0.56, max: inSize * 0.86 }));
  const counterText = fmtNum(target);
  const cW = side ? width * 0.42 : width * 0.84;
  const cSize = fitFontSize({ chars: counterText.length, boxW: cW, boxH: height * (side ? 0.4 : 0.22), charEm: 0.62, lineHeight: 1, max: Math.min(height * 0.36, width * 0.3) });
  const labSize = Math.max(minFont, fitFontSize({ chars: label.length, boxW: cW, boxH: cSize * 0.2, charEm: 0.56, max: cSize * 0.13 }));

  const qIn = springSnap(frame, fps, 0, APPLE);
  const iIn = springSnap(frame, fps, 6, APPLE);
  const sIn = springSnap(frame, fps, suggestAt, APPLE);
  const cIn = springSnap(frame, fps, countAt, APPLE);
  const count = expoOut(prog(frame, countAt, countEnd));
  const check = expoOut(prog(frame, confirmAt + 2, confirmAt + 10));
  const caretOn = frame < typeEnd || Math.floor(frame / 15) % 2 === 0;
  const focus = band(frame, TYPE_START - 2, TYPE_START + 4);

  const field = (
    <div style={{ display: "flex", flexDirection: "column", gap: inSize * 0.5, width: colW }}>
      <div
        data-21st-slot="question"
        style={{ fontSize: qSize, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.12, opacity: band(frame, 0, 8), transform: `translateY(${(1 - qIn) * qSize * 0.4}px)` }}
      >
        {question}
      </div>
      <div style={{ height: inSize * 0.6 }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: inSize * 0.6,
          height: portrait ? undefined : inSize * 2.6,
          minHeight: inSize * 2.6,
          padding: `${portrait ? inSize * 0.35 : 0}px ${inSize * 0.9}px`,
          borderRadius: inSize * 0.7,
          background: withAlpha(color, 0.05),
          border: `1px solid ${withAlpha(focus > 0 ? accent : color, 0.12 + 0.5 * focus)}`,
          boxShadow: `0 0 0 ${inSize * 0.22 * focus}px ${withAlpha(accent, 0.16)}`,
          opacity: band(frame, 6, 14),
          transform: `translateY(${(1 - iIn) * inSize}px)`,
          overflow: "hidden",
        }}
      >
        <svg width={inSize} height={inSize} viewBox="0 0 24 24" fill="none" stroke={withAlpha(color, 0.5)} strokeWidth={2.2} strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
        <span
          data-21st-slot="queries"
          style={{
            fontSize: inSize,
            fontWeight: 500,
            minWidth: 0,
            whiteSpace: portrait ? "normal" : "nowrap",
            overflowWrap: "anywhere",
            lineHeight: 1.2,
            display: "inline-block",
            opacity: swapT,
            transform: `translateY(${(1 - swapT) * inSize * 0.6}px)`,
          }}
        >
          {shownQuery}
          {cycleIdx === 0 ? (
            <span style={{ display: "inline-block", width: inSize * 0.08, height: inSize * 1.1, marginLeft: inSize * 0.08, verticalAlign: "middle", background: accent, opacity: caretOn ? 1 : 0 }} />
          ) : null}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: inSize * 0.6,
          padding: `${inSize * 0.6}px ${inSize * 0.9}px`,
          borderRadius: inSize * 0.6,
          background: withAlpha(color, 0.035),
          border: `1px solid ${withAlpha(color, 0.08)}`,
          opacity: band(frame, suggestAt, suggestAt + 6),
          transform: `translateY(${(1 - sIn) * -inSize * 0.5}px)`,
          fontSize: Math.max(minFont, inSize * 0.86),
          whiteSpace: portrait ? "normal" : "nowrap",
          overflowWrap: "anywhere",
          lineHeight: 1.2,
        }}
      >
        <span style={{ width: inSize * 0.5, height: inSize * 0.5, borderRadius: inSize * 0.12, background: withAlpha(accent, 0.8) }} />
        <span style={{ color, minWidth: 0 }}>{shownQuery || q0}</span>
        <span style={{ flex: 1 }} />
        <span style={{ color: withAlpha(color, 0.4), fontSize: Math.max(minFont, inSize * 0.7), padding: `${inSize * 0.1}px ${inSize * 0.35}px`, borderRadius: inSize * 0.2, border: `1px solid ${withAlpha(color, 0.14)}` }}>↵</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: confSize * 0.5, marginTop: inSize * 0.3, opacity: band(frame, confirmAt, confirmAt + 6) }}>
        <svg width={confSize * 1.1} height={confSize * 1.1} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill={withAlpha(accent, 0.18)} />
          <path d="M7 12.5l3.2 3.2L17 9" stroke={accent} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - check} />
        </svg>
        <span data-21st-slot="confirm" style={{ fontSize: confSize, fontWeight: 500, color: withAlpha(color, 0.75), whiteSpace: portrait ? "normal" : "nowrap", minWidth: 0, overflowWrap: "anywhere", lineHeight: 1.2 }}>
          {confirm}
        </span>
      </div>
    </div>
  );

  const counter = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: side ? "flex-start" : "center",
        width: cW,
        opacity: band(frame, countAt, countAt + 6),
        transform: `translateY(${(1 - cIn) * cSize * 0.2}px)`,
      }}
    >
      <div
        style={{
          fontSize: cSize,
          fontWeight: 600,
          lineHeight: 1,
          letterSpacing: "-0.055em",
          fontVariantNumeric: "tabular-nums",
          whiteSpace: "nowrap",
          backgroundImage: `linear-gradient(160deg, ${color} 10%, ${mix(color, accent, 0.65)} 55%, ${accent} 100%)`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          paddingBottom: cSize * 0.04,
        }}
      >
        {fmtNum(Math.round(target * count))}
      </div>
      <div data-21st-slot="label" style={{ fontSize: labSize, fontWeight: 500, letterSpacing: "0.02em", color: withAlpha(color, 0.55), whiteSpace: portrait ? "normal" : "nowrap", width: portrait ? "100%" : undefined, textAlign: side ? "left" : "center", overflowWrap: "anywhere", lineHeight: 1.2, opacity: band(frame, countAt + 10, countAt + 18) }}>
        {label}
      </div>
    </div>
  );

  return (
    <AbsoluteFill style={{ background, fontFamily: font, color }}>
      <AbsoluteFill style={{ background: `radial-gradient(ellipse 50% 45% at ${side ? "72% 50%" : "50% 72%"}, ${withAlpha(accent, 0.16 * band(frame, countAt, countAt + 20))}, transparent 70%)` }} />
      <AbsoluteFill
        style={{
          flexDirection: side ? "row" : "column",
          alignItems: "center",
          justifyContent: "center",
          gap: side ? width * 0.08 : height * (portrait ? 0.07 : 0.04),
          opacity: 1 - exit,
          transform: `scale(${1 - exit * 0.03})`,
        }}
      >
        {field}
        {counter}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
