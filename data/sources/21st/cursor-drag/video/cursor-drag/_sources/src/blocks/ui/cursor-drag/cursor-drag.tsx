// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { inkOn, band, brandFontStack, easeInOut, expoOut, fitFontSize, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Cursor, arc, pathAt, press } from "../shared/cursor";
import { palette, tint } from "../shared/theme";
import { meta } from "./cursor-drag.meta";
import type { schema } from "./cursor-drag.schema";

const GRAB = meta.timing.markers.grab ?? 26;
const DROP = meta.timing.markers.drop ?? 58;

export const Component: React.FC<z.infer<typeof schema>> = ({ fromLabel, toLabel, card, others, theme, accent, fontFamily, surfaceColor, textColor, pendingColor, doneColor }) => {
  const { width: w, height: h, unit: u, aspect } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const p = palette(theme, { surfaceColor, textColor });
  const stacked = aspect === "9:16";
  const nativeFont = useVideoConfig().height * (stacked ? 0.032 : 0.020);

  // Board geometry: two columns side by side (stacked in portrait).
  const boardW = Math.min(w * 0.94, h * (stacked ? 0.8 : 1.7));
  const gapC = boardW * 0.04;
  const colW = stacked ? boardW : (boardW - gapC) / 2;
  const cardH = Math.min(u * 14, (stacked ? (h * 0.9) / 2 : h * 0.9) / 4.6);
  const gap = cardH * 0.18;
  const headH = cardH * 0.62;
  const colH = headH + gap + 3 * (cardH + gap) + gap;
  const colHn = (n: number) => headH + gap + n * (cardH + gap) + gap;
  const boardH = stacked ? colH * 2 + gapC : colH;
  const bx = (w - boardW) / 2;
  const by = (h - boardH) / 2;
  const col = (i: 0 | 1) => (stacked ? { x: bx, y: by + i * (colH + gapC) } : { x: bx + i * (colW + gapC), y: by });
  const slot = (c: 0 | 1, i: number) => ({ x: col(c).x + gap, y: col(c).y + headH + gap + i * (cardH + gap) });
  const cw = colW - gap * 2;

  const fs = Math.max(nativeFont, fitFontSize({ chars: Math.max(card.length, ...others.map((o) => o.length)) + 2, boxW: cw - cardH * 0.5, boxH: cardH * 0.3, charEm: 0.54, max: cardH * 0.24, lines: stacked ? 2 : 1 }));
  const hFs = Math.max(nativeFont, fitFontSize({ chars: Math.max(fromLabel.length, toLabel.length) + 5, boxW: colW * 0.7, boxH: headH * 0.45, charEm: 0.55, max: cardH * 0.22, lines: stacked ? 2 : 1 }));

  const bIn = expoOut(frame / 10);
  const lift = ramp(frame, [GRAB, GRAB + 6], [0, 1]) * (1 - ramp(frame, [DROP, DROP + 8], [0, 1]));
  const travel = easeInOut((frame - GRAB - 6) / (DROP - GRAB - 6));
  const settle = expoOut((frame - DROP) / 8);
  const src = slot(0, 0);
  const dst = slot(1, 1);
  const pos = arc(src, dst, travel, stacked ? 0.12 : -0.1);
  const close = ramp(frame, [GRAB + 4, GRAB + 14], [0, 1]);
  const open = expoOut((frame - GRAB - 10) / 12);
  const hoverTarget = Math.min(ramp(frame, [DROP - 14, DROP - 8], [0, 1]), 1 - ramp(frame, [DROP + 4, DROP + 12], [0, 1]));
  const leave = 1 - exit;

  // The cursor holds the card near its right third.
  const grip = { x: cw * 0.72, y: cardH * 0.55 };
  const cur =
    frame < GRAB
      ? pathAt(frame, [
          { f: 6, x: w * 1.04, y: h * 1.06 },
          { f: GRAB - 2, x: src.x + grip.x, y: src.y + grip.y },
        ])
      : frame < DROP + 4
        ? { x: pos.x + grip.x, y: pos.y + grip.y }
        : pathAt(frame, [
            { f: DROP + 4, x: dst.x + grip.x, y: dst.y + grip.y },
            { f: DROP + 34, x: dst.x + grip.x + u * 5, y: dst.y + grip.y + u * 4 },
          ]);

  const Card: React.FC<{ text: string; slotKey: string; done?: number; style?: React.CSSProperties }> = ({ text, slotKey, done = 0, style }) => (
    <div
      style={{
        position: "absolute",
        width: cw,
        height: cardH,
        borderRadius: cardH * 0.16,
        background: p.surface,
        boxShadow: `0 1px 2px ${withAlpha(p.dark ? p.surface : p.ink, p.dark ? 0.4 : 0.06)}, 0 0 0 1px ${p.line}`,
        padding: `${cardH * 0.16}px ${cardH * 0.2}px`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...style,
      }}
    >
      <span data-21st-slot={slotKey} style={{ fontFamily: font, fontSize: fs, fontWeight: 500, letterSpacing: "-0.01em", color: p.ink, lineHeight: 1.25, whiteSpace: stacked ? "normal" : "nowrap", overflowWrap: stacked ? "anywhere" : undefined }}>
        {text}
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: cardH * 0.08 }}>
        <div style={{ width: cardH * 0.12, height: cardH * 0.12, borderRadius: "50%", background: done > 0.5 ? doneColor : pendingColor }} />
        <div style={{ width: cw * 0.22, height: cardH * 0.08, borderRadius: 99, background: p.bone }} />
        <div style={{ flex: 1 }} />
        <div style={{ width: cardH * 0.26, height: cardH * 0.26, borderRadius: "50%", background: `linear-gradient(135deg, ${withAlpha(accent, 0.8)}, ${withAlpha(accent, 0.35)})` }} />
      </div>
    </div>
  );

  const Column: React.FC<{ c: 0 | 1; label: string; slotKey: string; tintAmt: number; n: number }> = ({ c, label, slotKey, tintAmt, n }) => (
    <div
      style={{
        position: "absolute",
        left: col(c).x,
        top: col(c).y,
        width: colW,
        height: colHn(n),
        borderRadius: cardH * 0.22,
        background: p.raised,
        boxShadow: `0 0 0 1px ${p.line}, 0 0 0 ${u * 0.4 * tintAmt}px ${withAlpha(accent, 0.25 * tintAmt)}`,
      }}
    >
      <div style={{ position: "absolute", inset: 0, borderRadius: cardH * 0.22, background: tint(accent, p, 0.08 * tintAmt) }} />
      <div style={{ height: headH + gap, display: "flex", alignItems: "center", gap: hFs * 0.5, padding: `${gap}px ${gap * 1.4}px 0` }}>
        <div style={{ width: hFs * 0.55, height: hFs * 0.55, borderRadius: "50%", background: c === 0 ? pendingColor : doneColor }} />
        <span data-21st-slot={slotKey} style={{ fontFamily: font, fontSize: hFs, fontWeight: 600, letterSpacing: "-0.01em", color: p.ink, lineHeight: 1.25, whiteSpace: stacked ? "normal" : "nowrap", overflowWrap: stacked ? "anywhere" : undefined }}>
          {label}
        </span>
      </div>
    </div>
  );

  // Drop placeholder in the target column grows while the card travels.
  const ph = slot(1, 1);

  return (
    <AbsoluteFill style={{ opacity: band(frame, 0, 6) * leave, transform: `translateY(${(1 - bIn) * u * 2}px) scale(${(0.96 + 0.04 * bIn) * (1 - 0.04 * exit)})` }}>
      <Column c={0} label={fromLabel} slotKey="fromLabel" tintAmt={0} n={3 - close} />
      <Column c={1} label={toLabel} slotKey="toLabel" tintAmt={hoverTarget} n={1 + Math.max(open, frame >= DROP ? 1 : 0)} />
      {open > 0 && frame < DROP + 6 ? (
        <div
          style={{
            position: "absolute",
            left: ph.x,
            top: ph.y,
            width: cw,
            height: cardH * open,
            borderRadius: cardH * 0.16,
            border: `${Math.max(1.5, u * 0.2)}px dashed ${withAlpha(accent, 0.55)}`,
            background: tint(accent, p, 0.06),
            opacity: 1 - ramp(frame, [DROP, DROP + 6], [0, 1]),
          }}
        />
      ) : null}
      {[0, 1].map((i) => {
        const s = slot(0, i + 1 - close);
        return <Card key={i} text={others[i]!} slotKey="others" style={{ left: s.x, top: s.y }} />;
      })}
      <Card text={others[2]!} slotKey="others" done={1} style={{ left: slot(1, 0).x, top: slot(1, 0).y }} />
      <Card
        text={card}
        slotKey="card"
        done={frame >= DROP ? 1 : 0}
        style={{
          left: frame < DROP ? pos.x : dst.x,
          top: frame < DROP ? pos.y : dst.y,
          zIndex: 5,
          transformOrigin: `${(grip.x / cw) * 100}% ${(grip.y / cardH) * 100}%`,
          transform: `scale(${1 + 0.045 * lift - (frame >= DROP ? 0.02 * (1 - settle) : 0)}) rotate(${2.2 * lift}deg)`,
          boxShadow: `0 ${u * (0.2 + 2.2 * lift)}px ${u * (0.6 + 5 * lift)}px -${u * 0.6 * lift}px ${withAlpha(p.dark ? p.surface : p.ink, 0.12 + 0.3 * lift)}, 0 0 0 1px ${lift > 0.05 ? withAlpha(accent, 0.6 * lift) : p.line}`,
        }}
      />
      <Cursor fill={inkOn(accent)} stroke={accent} x={cur.x} y={cur.y} size={Math.max(u * 4.2, cardH * 0.4)} kind={frame >= GRAB - 4 && frame < DROP + 6 ? "hand" : "arrow"} down={Math.max(press(frame, GRAB), lift * 0.6)} opacity={band(frame, 6, 10)} />
    </AbsoluteFill>
  );
};
