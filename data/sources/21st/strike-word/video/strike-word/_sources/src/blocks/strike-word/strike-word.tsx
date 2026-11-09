// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, band, brandFontStack, easeInOut, fitFontSize, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../kit/index";
import { meta } from "./strike-word.meta";
import type { schema } from "./strike-word.schema";

const STRIKE = meta.timing.markers.strike ?? 22;

export const Component: React.FC<z.infer<typeof schema>> = ({ lead, struck, replacement, color, accent, strikeColor, fontFamily, serifFontFamily }) => {
  const resolvedSerif = brandFontStack(serifFontFamily ?? "Instrument Serif");
  const { fps } = useVideoConfig();
  const { width, height, portrait } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);

  const line1 = lead.length + struck.length + 1;
  const twoRows = portrait;
  const chars = Math.max(twoRows ? Math.max(lead.length, struck.length) : line1, replacement.length, 6);
  const rows = (twoRows ? 3 : 2) * 1.12;
  const size = fitFontSize({ chars, boxW: width * 0.92, boxH: height * 0.9, lines: 1, charEm: 0.56, lineHeight: rows, max: Math.min(height * 0.3, width * (portrait ? 0.24 : 0.1)), min: portrait ? height * 0.03125 : undefined });

  const leadIn = springSnap(frame, fps, 0, APPLE);
  const wordIn = springSnap(frame, fps, 6, APPLE);
  const strike = easeInOut((frame - STRIKE) / 14);
  const repIn = springSnap(frame, fps, STRIKE + 12, APPLE);
  const leave = 1 - exit;
  const dim = 1 - 0.45 * ramp(frame, [STRIKE + 6, STRIKE + 18], [0, 1]);

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: size * 0.12,
          minHeight: portrait ? height * 0.78 : undefined,
          maxWidth: width * 0.9,
          width: portrait ? width * 0.9 : undefined,
          justifyContent: portrait ? "space-between" : undefined,
          fontFamily: font,
          fontWeight: 600,
          fontSize: size,
          lineHeight: 1.08,
          letterSpacing: "-0.04em",
          color,
          opacity: leave,
          transform: `translateY(${-exit * size * 0.3}px)`,
          filter: exit > 0.01 ? `blur(${exit * size * 0.06}px)` : undefined,
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", flexDirection: portrait ? "column" : "row", minHeight: portrait ? height * 0.42 : undefined, maxWidth: "100%", width: portrait ? "100%" : undefined, justifyContent: portrait ? "space-between" : "center", columnGap: size * 0.26, alignItems: portrait ? "center" : "baseline" }}>
          <span data-21st-slot="lead" style={{ display: "inline-block", opacity: band(frame, 0, 10), transform: `translateY(${(1 - leadIn) * size * 0.4}px)`, whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: "anywhere", maxWidth: "100%", textAlign: "center" }}>
            {lead}
          </span>
          <span
            data-21st-slot="struck"
            style={{
              position: "relative",
              display: "inline-block",
              width: portrait ? "94%" : undefined,
              whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: "anywhere", maxWidth: "100%", textAlign: "center",
              fontFamily: resolvedSerif,
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              fontSize: size * 1.08,
              color: withAlpha(color, dim),
              opacity: band(frame, 6, 16),
              transform: `translateY(${(1 - wordIn) * size * 0.4}px)`,
            }}
          >
            {struck}
            <span
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: "54%",
                height: "0.085em",
                borderRadius: 999,
                background: strikeColor,
                boxShadow: `0 0 ${size * 0.12}px ${withAlpha(strikeColor, 0.5)}`,
                transform: `scaleX(${strike})`,
                transformOrigin: "left center",
              }}
            />
          </span>
        </div>
        <span
          data-21st-slot="replacement"
          style={{
            display: "inline-block",
            whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: "anywhere", maxWidth: "100%", textAlign: "center",
            color: accent,
            opacity: band(frame, STRIKE + 12, STRIKE + 22),
            transform: `translateY(${(1 - repIn) * size * 0.45}px)`,
            filter: frame < STRIKE + 24 ? `blur(${(1 - band(frame, STRIKE + 12, STRIKE + 24)) * size * 0.08}px)` : undefined,
          }}
        >
          {replacement}
        </span>
      </div>
    </AbsoluteFill>
  );
};
