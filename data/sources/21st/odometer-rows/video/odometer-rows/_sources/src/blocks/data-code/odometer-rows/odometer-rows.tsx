// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, spring, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, band, brandFontStack, fitFontSize, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { easeOutQuint, fmtNum } from "../_shared/num";
import { dataFontFloor } from "../_shared/code-card";
import { meta } from "./odometer-rows.meta";
import type { schema } from "./odometer-rows.schema";

const COUNT = 40;
const UP = "#3DD68C";
const DOWN = "#FF6B6B";

export const Component: React.FC<z.infer<typeof schema>> = ({ title, range, rows, stagger, color, accent, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width, height, portrait } = useLayout();
  const minFont = dataFontFloor(height, portrait);
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);

  const n = rows.length;
  const cardW = Math.min(width, height * (portrait ? 1 : 2.4));
  const cardH = Math.min(height, cardW * (portrait ? 1.3 : 0.62), height);
  const pad = Math.min(cardW, cardH) * 0.07;
  const headH = Math.max(portrait ? minFont * 3.2 : 0, cardH * 0.17);
  const rowH = (cardH - pad * 2 - headH) / Math.max(n, 3);
  const titleSize = Math.max(minFont, fitFontSize({ chars: title.length, boxW: cardW * 0.55, boxH: headH * 0.5, charEm: 0.55, max: headH * 0.42 }));
  const rangeSize = Math.max(minFont, fitFontSize({ chars: range.length, boxW: cardW * 0.32, boxH: headH * 0.4, charEm: 0.6, max: titleSize * 0.78 }));
  const longestVal = Math.max(...rows.map((r) => fmtNum(r.value).length));
  const longestLab = Math.max(...rows.map((r) => r.label.length), 4);
  const innerW = cardW - pad * 2;
  const valSize = Math.max(minFont, Math.min(
    rowH * 0.46,
    fitFontSize({ chars: longestVal + longestLab * 0.65 + 9, boxW: innerW * 0.92, boxH: rowH * 0.5, charEm: 0.58, max: rowH * 0.46 }),
  ));
  const labSize = Math.max(minFont, valSize * 0.6);

  const cIn = springSnap(frame, fps, 0, APPLE);
  const leave = 1 - exit;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          position: "relative",
          width: cardW,
          height: cardH,
          padding: pad,
          boxSizing: "border-box",
          borderRadius: Math.min(cardW, cardH) * 0.05,
          background: withAlpha(color, 0.04),
          border: `1px solid ${withAlpha(color, 0.1)}`,
          fontFamily: font,
          color,
          opacity: band(frame, 0, 8) * leave,
          transform: `translateY(${(1 - cIn) * cardH * 0.04 - exit * cardH * 0.02}px) scale(${(0.97 + 0.03 * cIn) * (1 - exit * 0.03)})`,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ height: headH, display: "flex", flexDirection: portrait ? "column" : "row", alignItems: "flex-start", justifyContent: portrait ? "flex-start" : "space-between", gap: portrait ? minFont * 0.25 : pad }}>
          <div data-21st-slot="title" style={{ fontSize: titleSize, fontWeight: 600, letterSpacing: "-0.02em", whiteSpace: "normal", overflowWrap: "anywhere", lineHeight: 1.1, opacity: band(frame, 4, 12) }}>
            {title}
          </div>
          <div
            data-21st-slot="range"
            style={{
              fontSize: rangeSize,
              fontWeight: 500,
              color: withAlpha(color, 0.5),
              whiteSpace: "nowrap",
              padding: `${rangeSize * 0.3}px ${rangeSize * 0.7}px`,
              borderRadius: 99,
              border: `1px solid ${withAlpha(color, 0.12)}`,
              opacity: band(frame, 6, 14),
            }}
          >
            {range}
          </div>
        </div>
        {rows.map((r, i) => {
          const at = 12 + i * stagger;
          const t = easeOutQuint((frame - at) / COUNT);
          const v = r.value * (0.9 + 0.1 * t);
          const rowOpacity = frame < at ? 0 : 0.3 + 0.7 * ramp(frame, [at, at + 10], [0, 1]);
          const rise = springSnap(frame, fps, at, APPLE);
          const pill = Math.min(1, spring({ frame: frame - at - 6, fps, config: { damping: 12, mass: 0.6, stiffness: 180 } }));
          const pillS = Math.abs(1 - pill) < 1e-3 ? 1 : pill;
          const up = r.delta >= 0;
          const tone = up ? UP : DOWN;
          return (
            <div
              key={i}
              style={{
                height: rowH,
                display: portrait ? "grid" : "flex",
                gridTemplateColumns: portrait ? `${valSize * 0.6}px 1fr auto` : undefined,
                gridTemplateRows: portrait ? "1fr 1fr" : undefined,
                alignItems: "center",
                columnGap: valSize * 0.45,
                borderTop: i === 0 ? undefined : `1px solid ${withAlpha(color, 0.06)}`,
                opacity: rowOpacity,
                transform: `translateY(${(1 - rise) * rowH * 0.25}px)`,
              }}
            >
              <span
                style={{
                  width: valSize * 0.4,
                  height: valSize * 0.4,
                  borderRadius: valSize * 0.08,
                  background: withAlpha(accent, 1 - i * (0.6 / Math.max(1, n - 1))),
                  flex: "0 0 auto",
                }}
              />
              <span data-21st-slot="rows" style={{ fontSize: valSize, fontWeight: 600, letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                {fmtNum(v)}
              </span>
              <span data-21st-slot="rows" style={{ gridColumn: portrait ? "1 / 4" : undefined, gridRow: portrait ? 2 : undefined, fontSize: labSize, fontWeight: 500, color: withAlpha(color, 0.5), whiteSpace: "normal", lineHeight: 1.1 }}>
                {r.label}
              </span>
              <span style={{ flex: 1, display: portrait ? "none" : undefined }} />
              <span
                style={{
                  gridColumn: portrait ? 3 : undefined,
                  gridRow: portrait ? 1 : undefined,
                  fontSize: Math.max(minFont, valSize * 0.46),
                  fontWeight: 600,
                  fontVariantNumeric: "tabular-nums",
                  color: tone,
                  background: withAlpha(tone, 0.12),
                  padding: `${labSize * 0.22}px ${labSize * 0.6}px`,
                  borderRadius: 99,
                  whiteSpace: "nowrap",
                  opacity: band(frame, at + 6, at + 9),
                  transform: `scale(${0.6 + 0.4 * pillS})`,
                }}
              >
                {up ? "+" : "−"}
                {Math.abs(r.delta).toFixed(1)}%
              </span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
