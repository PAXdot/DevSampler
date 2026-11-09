// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, APPLE_SNAPPY, band, brandFontStack, easeInOut, fitFontSize, inkOn, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { prog } from "../_shared/num";
import { dataFontFloor } from "../_shared/code-card";
import { meta } from "./progress-fill.meta";
import type { schema } from "./progress-fill.schema";

const FILL_AT = 10;

export const Component: React.FC<z.infer<typeof schema>> = ({ label, doneLabel, percent, fillFrames, easing, showPercent, color, accent, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width, height, portrait } = useLayout();
  const minFont = dataFontFloor(height, portrait);
  const { frame, exit, durationInFrames } = useEnterExit(meta.timing);
  const fillDuration = Math.min(fillFrames, Math.max(1, Math.floor(durationInFrames * 0.7) - FILL_AT));
  const font = brandFontStack(fontFamily);

  const w = width * 0.96;
  const raw = prog(frame, FILL_AT, FILL_AT + fillDuration);
  const p = (easing === "ease" ? easeInOut(raw) : raw) * (percent / 100);
  const end = FILL_AT + fillDuration;
  const done = percent >= 100 && doneLabel.length > 0;
  const swap = done ? springSnap(frame, fps, end, APPLE_SNAPPY) : 0;

  const sideChars = Math.max(4, done ? doneLabel.length + 3 : 4);
  const labSize = fitFontSize({ chars: label.length + sideChars + 4, boxW: w, boxH: height * 0.14, charEm: 0.55, max: Math.min(height * 0.09, width * 0.05) });
  const trackH = Math.max(6, Math.min(labSize * 0.46, height * 0.05));
  const enter = springSnap(frame, fps, 0, APPLE);
  const leave = 1 - exit;
  const fillW = Math.max(0, p * w);

  if (portrait) {
    const barHeight = height * 0.65;
    const barWidth = Math.min(width * 0.32, minFont * 4);
    return (
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", fontFamily: font, color, opacity: band(frame, 0, 8) * leave }}>
        <div style={{ width: width * 0.94, display: "flex", flexDirection: "column", alignItems: "center", gap: minFont * 0.35 }}>
          <div data-21st-slot="label" style={{ fontSize: minFont, fontWeight: 500, lineHeight: 1.15, textAlign: "center", overflowWrap: "anywhere" }}>{label}</div>
          <div style={{ position: "relative", width: barWidth, height: barHeight, borderRadius: barWidth * 0.5, background: withAlpha(color, 0.1), overflow: "hidden" }}>
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: Math.max(0, p * barHeight), borderRadius: barWidth * 0.5, background: `linear-gradient(0deg, ${accent}, ${withAlpha(accent, 0.55)})`, boxShadow: `0 0 ${barWidth * 0.25}px ${withAlpha(accent, 0.45)}` }} />
          </div>
          <div style={{ minHeight: minFont * 1.4, fontSize: minFont, lineHeight: 1.2, fontWeight: 600, fontVariantNumeric: "tabular-nums", display: "flex", alignItems: "center", justifyContent: "center", gap: minFont * 0.3 }}>
            {done && frame >= end ? <>
              <svg width={minFont} height={minFont} viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill={accent} /><path d="M6 12.5l4 4L18 8" stroke={inkOn(accent)} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span data-21st-slot="doneLabel" style={{ color: accent, overflowWrap: "anywhere" }}>{doneLabel}</span>
            </> : showPercent ? <span>{Math.round(p * 100)}%</span> : null}
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", fontFamily: font, color }}>
      <div
        style={{
          width: w,
          display: "flex",
          flexDirection: "column",
          gap: labSize * 0.7,
          opacity: band(frame, 0, 8) * leave,
          transform: `translateY(${(1 - enter) * labSize * 0.8 - exit * labSize * 0.4}px)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: labSize }}>
          <span data-21st-slot="label" style={{ fontSize: labSize, fontWeight: 500, letterSpacing: "-0.015em", whiteSpace: "nowrap" }}>
            {label}
          </span>
          <span style={{ position: "relative", fontSize: labSize, fontWeight: 600, whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
            {showPercent ? (
              <span style={{ color: withAlpha(color, 0.6), opacity: 1 - swap, display: "inline-block", transform: `translateY(${-swap * labSize * 0.5}px)` }}>{Math.round(p * 100)}%</span>
            ) : null}
            {done ? (
              <span
                data-21st-slot="doneLabel"
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: labSize * 0.3,
                  color: accent,
                  opacity: swap,
                  transform: `translateY(${(1 - swap) * labSize * 0.5}px)`,
                }}
              >
                <span
                  style={{
                    width: labSize * 0.82,
                    height: labSize * 0.82,
                    borderRadius: 99,
                    background: accent,
                    color: inkOn(accent),
                    fontSize: labSize * 0.56,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ✓
                </span>
                {doneLabel}
              </span>
            ) : null}
          </span>
        </div>
        <div style={{ position: "relative", width: w, height: trackH, borderRadius: 99, background: withAlpha(color, 0.1), overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: fillW,
              borderRadius: 99,
              background: `linear-gradient(90deg, ${withAlpha(accent, 0.55)}, ${accent})`,
              boxShadow: `0 0 ${trackH * 2}px ${withAlpha(accent, 0.45)}`,
            }}
          />
          {frame >= FILL_AT && frame < end ? (
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: Math.max(0, fillW - trackH * 6),
                width: Math.min(fillW, trackH * 6),
                background: `linear-gradient(90deg, transparent, ${withAlpha("#ffffff", 0.45)})`,
                borderRadius: 99,
              }}
            />
          ) : null}
        </div>
      </div>
    </AbsoluteFill>
  );
};
