// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, easeOut, fitFontSize, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Icon } from "../_shared/icons";
import { meta } from "./chip-grid.meta";
import type { schema } from "./chip-grid.schema";

/** A heading and a grid of icon chips that fade up row by row (research V13). */
export const Component: React.FC<z.infer<typeof schema>> = ({ title, chips, columns, accent, color, fontFamily }) => {
  const { width, height, unit, portrait } = useLayout();
  const nativeFont = useVideoConfig().height * (portrait ? 0.032 : 0.020);
  const { frame, outStart } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);

  const n = chips.length;
  const cols = Math.max(1, Math.min(n, height > width * 1.1 ? 1 : columns));
  const rows = Math.ceil(n / cols);
  const titleH = title ? Math.min(height * 0.2, unit * 9) : 0;
  const titleSize = fitFontSize({ chars: title.length, boxW: width * 0.96, boxH: titleH * 0.62, charEm: 0.55, max: unit * 6 });
  const gap = Math.min(width, height) * 0.03;
  const areaH = height - titleH - (title ? gap : 0);
  const chipW = (width - gap * (cols - 1)) / cols;
  const chipH = Math.min((areaH - gap * (rows - 1)) / rows, chipW * (portrait ? 0.18 : 0.32));
  const gridH = rows * chipH + (rows - 1) * gap;
  const longest = Math.max(...chips.map((c) => c.text.length), 6);
  const textSize = Math.max(nativeFont, fitFontSize({ chars: longest, boxW: chipW - chipH * 1.3, boxH: chipH * 0.4, charEm: 0.55, max: chipH * 0.3, lines: portrait ? 2 : 1 }));
  const top = (height - titleH - (title ? gap : 0) - gridH) / 2;
  const stagger = Math.min(12, 48 / Math.max(1, n - 1));

  return (
    <AbsoluteFill>
      {title ? (
        <div
          data-21st-slot="title"
          style={{ position: "absolute", left: 0, top: top, width, fontFamily: font, fontWeight: 600, fontSize: Math.max(nativeFont, titleSize), letterSpacing: "-0.035em", color, maxWidth: width, lineHeight: 1.25, whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: portrait ? "anywhere" : undefined, opacity: band(frame, 0, 10) * (1 - ramp(frame, [outStart, outStart + 6], [0, 1])) }}
        >
          {title}
        </div>
      ) : null}
      {chips.map((c, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const at = 8 + i * stagger;
        const o = band(frame, at, at + 10);
        const out = ramp(frame, [outStart + i, outStart + i + 6], [0, 1]);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: col * (chipW + gap),
              top: top + titleH + (title ? gap : 0) + row * (chipH + gap),
              width: chipW,
              height: chipH,
              borderRadius: chipH * 0.22,
              background: withAlpha(color, 0.045),
              border: `1px solid ${withAlpha(color, 0.12)}`,
              display: "flex",
              alignItems: "center",
              gap: chipH * 0.24,
              padding: `0 ${chipH * 0.24}px`,
              opacity: o * (1 - out),
              transform: `translateY(${(1 - easeOut(o)) * chipH * 0.25 - out * chipH * 0.1}px)`,
            }}
          >
            <div style={{ width: chipH * 0.56, height: chipH * 0.56, borderRadius: chipH * 0.16, background: withAlpha(accent, 0.16), border: `1px solid ${withAlpha(accent, 0.3)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name={c.icon} size={chipH * 0.3} color={accent} strokeWidth={2} />
            </div>
            <span data-21st-slot="chips" style={{ fontFamily: font, fontWeight: 500, fontSize: textSize, color, maxWidth: chipW - chipH * 1.3, lineHeight: 1.25, whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: portrait ? "anywhere" : undefined, letterSpacing: "-0.01em" }}>
              {c.text}
            </span>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
