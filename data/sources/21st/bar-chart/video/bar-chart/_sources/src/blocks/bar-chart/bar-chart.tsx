// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, APPLE_SOFT, band, brandFontStack, fitFontSize, springSnap, useEnterExit, useLayout, withAlpha } from "../../kit/index";
import { meta } from "./bar-chart.meta";
import type { schema } from "./bar-chart.schema";

const short = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : Number.isInteger(n) ? String(n) : n.toFixed(1));

export const Component: React.FC<z.infer<typeof schema>> = ({ title, values, labels, highlight, suffix, color, accent, fontFamily, monoFontFamily }) => {
  const { fps } = useVideoConfig();
  const { width: w, height: h, portrait } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const mono = brandFontStack(monoFontFamily ?? "Geist Mono");

  const n = values.length;
  const hi = highlight < 0 || highlight >= n ? n - 1 : highlight;
  const maxV = Math.max(...values, 1);
  const padX = w * 0.04;
  const titleSize = fitFontSize({ chars: title.length, boxW: w - padX * 2, boxH: h * 0.1, charEm: 0.55, max: Math.min(h * 0.075, w * 0.045) });
  const chartTop = h * 0.2;
  const chartH = h * 0.62;
  const slot = (w - padX * 2) / n;
  const barW = slot * 0.58;
  const valSize = Math.min(slot * 0.26, h * 0.05);
  const labSize = Math.min(slot * 0.2, h * 0.04);
  const leave = 1 - exit;
  const tIn = springSnap(frame, fps, 0, APPLE);

  if (portrait) {
    // Horizontal bars reserve a full-width label row even with eight values.
    const inset = w * 0.08, innerW = w - inset * 2;
    const readSize = Math.max(h * 0.03125, w * 0.07);
    const titleFont = Math.max(readSize, fitFontSize({ chars: title.length, boxW: innerW, boxH: h * 0.12, lines: 2, charEm: 0.68, max: h * 0.044 }));
    const row = h * 0.78 / n;
    const barMax = innerW, chartY = h * 0.2;
    return <AbsoluteFill style={{ opacity: leave, transform: `translateY(${-exit * h * 0.03}px)` }}>
      <div data-21st-slot="title" style={{ position: "absolute", left: inset, top: h * 0.055, width: innerW, fontFamily: font, fontWeight: 600, fontSize: titleFont, lineHeight: 1.25, overflowWrap: "anywhere", color, opacity: band(frame, 0, 10), transform: `translateY(${(1 - tIn) * titleFont * 0.4}px)` }}>{title}</div>
      {values.map((v, i) => {
        const at = 8 + i * Math.min(4, 16 / Math.max(1, n - 1)), s = springSnap(frame, fps, at, APPLE), isHi = i === hi;
        const y = chartY + row * i, barHeight = Math.min(row * 0.2, h * 0.024);
        return <React.Fragment key={i}>
          <div data-21st-slot="labels" style={{ position: "absolute", left: inset, top: y, width: innerW * 0.42, height: readSize * 1.4, fontFamily: mono, fontSize: readSize, lineHeight: 1.4, color: withAlpha(color, isHi ? 0.9 : 0.65), opacity: band(frame, at, at + 10) }}>{labels[i] ?? `${i + 1}`}</div>
          <div style={{ position: "absolute", left: inset, top: y + readSize * 1.45, width: barMax, height: barHeight, background: withAlpha(color, 0.08), borderRadius: barHeight * 0.25 }} />
          <div style={{ position: "absolute", left: inset, top: y + readSize * 1.45, width: Math.max(2, v / maxV * barMax), height: barHeight, background: isHi ? accent : withAlpha(color, 0.28), borderRadius: barHeight * 0.25, transform: `scaleX(${s})`, transformOrigin: "left" }} />
          <div data-21st-slot="values" style={{ position: "absolute", right: inset, top: y, width: innerW * 0.57, fontFamily: font, fontSize: readSize, fontWeight: isHi ? 600 : 500, lineHeight: 1.25, textAlign: "right", color, fontVariantNumeric: "tabular-nums", opacity: band(frame, at + 6, at + 14) }}>{short(v * Math.min(1, s))}{suffix}</div>
        </React.Fragment>;
      })}
    </AbsoluteFill>;
  }

  return (
    <AbsoluteFill style={{ opacity: leave, transform: `translateY(${-exit * h * 0.03}px)` }}>
      <div
        data-21st-slot="title"
        style={{
          position: "absolute",
          left: padX,
          top: h * 0.04,
          fontFamily: font,
          fontWeight: 600,
          fontSize: titleSize,
          letterSpacing: "-0.03em",
          color,
          whiteSpace: "nowrap",
          opacity: band(frame, 0, 10),
          transform: `translateY(${(1 - tIn) * titleSize * 0.4}px)`,
        }}
      >
        {title}
      </div>
      {[0.33, 0.66, 1].map((g) => (
        <div
          key={g}
          style={{
            position: "absolute",
            left: padX,
            right: padX,
            top: chartTop + chartH * (1 - g),
            height: 0,
            borderTop: `1px dashed ${withAlpha(color, 0.08)}`,
            opacity: band(frame, 4, 16),
          }}
        />
      ))}
      <div style={{ position: "absolute", left: padX, right: padX, top: chartTop + chartH, height: 1, background: withAlpha(color, 0.22), transform: `scaleX(${springSnap(frame, fps, 2, APPLE_SOFT)})`, transformOrigin: "left" }} />
      {values.map((v, i) => {
        const at = 8 + i * 4;
        const s = springSnap(frame, fps, at, APPLE);
        const bh = Math.max(2, (v / maxV) * chartH);
        const x = padX + slot * i + (slot - barW) / 2;
        const isHi = i === hi;
        return (
          <React.Fragment key={i}>
            <div
              style={{
                position: "absolute",
                left: x,
                top: chartTop + chartH - bh,
                width: barW,
                height: bh,
                borderRadius: `${Math.min(barW * 0.16, 14)}px ${Math.min(barW * 0.16, 14)}px 2px 2px`,
                background: isHi ? `linear-gradient(180deg, ${accent}, ${withAlpha(accent, 0.7)})` : withAlpha(color, 0.14),
                boxShadow: isHi ? `0 0 ${barW * 0.4}px ${withAlpha(accent, 0.35)}` : undefined,
                transform: `scaleY(${s})`,
                transformOrigin: "50% 100%",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: x - slot * 0.2,
                width: barW + slot * 0.4,
                top: chartTop + chartH - bh * s - valSize * 1.5,
                textAlign: "center",
                fontFamily: font,
                fontWeight: isHi ? 600 : 500,
                fontSize: valSize,
                fontVariantNumeric: "tabular-nums",
                color: isHi ? color : withAlpha(color, 0.55),
                opacity: band(frame, at + 6, at + 14),
              }}
            >
              {short(v * Math.min(1, s))}
              {suffix}
            </div>
            {labels[i] ? (
              <div
                style={{
                  position: "absolute",
                  left: padX + slot * i,
                  width: slot,
                  top: chartTop + chartH + labSize * 0.8,
                  textAlign: "center",
                  fontFamily: mono,
                  fontSize: labSize,
                  color: withAlpha(color, isHi ? 0.8 : 0.45),
                  opacity: band(frame, at, at + 10),
                }}
              >
                {labels[i]}
              </div>
            ) : null}
          </React.Fragment>
        );
      })}
    </AbsoluteFill>
  );
};
