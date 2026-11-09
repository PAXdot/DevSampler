// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, band, brandFontStack, expoOut, fitFontSize, springSnap, useEnterExit, useLayout, withAlpha } from "../../kit/index";
import { meta } from "./number-ticker.meta";
import type { schema } from "./number-ticker.schema";

const COUNT_FROM = 6;
const COUNT_TO = 52;

const fmt = (n: number, decimals: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

export const Component: React.FC<z.infer<typeof schema>> = ({ value, from, decimals, prefix, suffix, label, color, accent, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width, height, portrait } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);

  const at = (f: number) => from + (value - from) * expoOut((f - COUNT_FROM) / (COUNT_TO - COUNT_FROM));
  const v = at(frame);
  const speed = value === from ? 0 : Math.abs(at(frame) - at(frame - 1)) / Math.abs(value - from);

  const finalText = `${prefix}${fmt(value, decimals)}${suffix}`;
  const size = fitFontSize({ chars: finalText.length, boxW: width * 0.92, boxH: height * 0.56, charEm: 0.62, lineHeight: 1, max: Math.min(height * 0.48, width * 0.24) });
  const labelSize = Math.max(portrait ? height * 0.052 : 0, Math.min(size * 0.2, fitFontSize({ chars: label.length, boxW: width * 0.9, boxH: height * 0.14, charEm: 0.52, max: size * 0.2 })));

  const nIn = springSnap(frame, fps, 0, APPLE);
  const lIn = springSnap(frame, fps, 12, APPLE);
  const blur = Math.min(0.05, speed * 0.6) * size;
  const leave = 1 - exit;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: size * 0.1,
          minHeight: portrait ? height * 0.76 : undefined,
          justifyContent: portrait ? "space-between" : undefined,
          maxWidth: width * 0.9,
          paddingBottom: portrait ? height * 0.06 : undefined,
          borderBottom: portrait ? `${Math.max(2, size * 0.02)}px solid ${withAlpha(accent, 0.75)}` : undefined,
          width: portrait ? width * 0.84 : undefined,
          opacity: leave,
          transform: `translateY(${-exit * size * 0.2}px) scale(${1 - exit * 0.03})`,
        }}
      >
        <div
          data-21st-slot="value"
          style={{
            fontFamily: font,
            fontWeight: 600,
            fontSize: size,
            lineHeight: 1,
            letterSpacing: "-0.05em",
            fontVariantNumeric: "tabular-nums",
            color,
            whiteSpace: "nowrap",
            opacity: band(frame, 0, 8),
            transform: `translateY(${(1 - nIn) * size * 0.25}px) scale(${0.94 + 0.06 * nIn})`,
            filter: blur > 0.1 ? `blur(${blur}px)` : undefined,
          }}
        >
          {prefix ? <span style={{ color: withAlpha(color, 0.5), fontWeight: 500 }}>{prefix}</span> : null}
          {fmt(v, decimals)}
          {suffix ? <span style={{ color: accent }}>{suffix}</span> : null}
        </div>
        {label ? (
          <div
            data-21st-slot="label"
            style={{
              fontFamily: font,
              fontWeight: 500,
              fontSize: labelSize,
              letterSpacing: "-0.01em",
              color: withAlpha(color, 0.6),
              whiteSpace: portrait ? "normal" : "nowrap",
              textAlign: "center",
              overflowWrap: "anywhere",
              opacity: band(frame, 12, 24),
              transform: `translateY(${(1 - lIn) * labelSize * 0.6}px)`,
            }}
          >
            {label}
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
