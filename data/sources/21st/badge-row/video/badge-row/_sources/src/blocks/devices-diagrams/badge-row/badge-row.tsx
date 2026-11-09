// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, fitFontSize, inkOn, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { meta } from "./badge-row.meta";
import type { schema } from "./badge-row.schema";

const POP = { damping: 12, mass: 0.6, stiffness: 170 } as const;

/** Colored pills pop in left to right, one every 8 frames, with a small overshoot (research V13). */
export const Component: React.FC<z.infer<typeof schema>> = ({ label, badges, look, mono, color, fontFamily, monoFontFamily }) => {
  const resolvedMono = brandFontStack(monoFontFamily ?? "Geist Mono");
  const { fps, height: stageHeight } = useVideoConfig();
  const { width, height, portrait } = useLayout();
  const nativeFont = stageHeight / (meta.layout.defaultRegion?.h ?? 0.6) * (portrait ? 0.032 : 0.020);
  const { frame, outStart } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);

  // Every badge costs its text plus ~2.6em of padding and gap.
  const chars = badges.reduce((n, b) => n + b.text.length * (mono ? 1.1 : 1) + 2.6 / 0.56, 0) + (label ? label.length + 2 : 0);
  const lines = chars * 0.56 * Math.min(height * 0.14, width * 0.05) > width * 0.94 ? 2 : 1;
  const size = Math.max(nativeFont, fitFontSize({ chars, boxW: width * 0.94, boxH: height * 0.7, lines: lines + (lines > 1 ? 1 : 0), charEm: 0.56, lineHeight: 2.4, max: Math.min(height * 0.12, width * 0.05) }));

  const style = (c: string): React.CSSProperties =>
    look === "solid"
      ? { background: c, color: inkOn(c) }
      : look === "outline"
        ? { border: `${Math.max(1.5, size * 0.09)}px solid ${c}`, color: c }
        : { background: withAlpha(c, 0.16), border: `1px solid ${withAlpha(c, 0.32)}`, color: c };

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: portrait ? "grid" : "flex", gridTemplateColumns: portrait ? "repeat(2, minmax(0, 1fr))" : undefined, flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: size * 0.55, rowGap: size * 0.7, width: portrait ? width * 0.96 : undefined, maxWidth: width * 0.96 }}>
        {label ? (
          <span
            data-21st-slot="label"
            style={{ gridColumn: portrait ? "1 / -1" : undefined, paddingBottom: portrait ? size * 0.6 : 0, fontFamily: font, fontWeight: 500, fontSize: size, color: withAlpha(color, 0.7), maxWidth: width * 0.94, lineHeight: 1.25, textAlign: "center", whiteSpace: portrait ? "normal" : "nowrap", marginRight: size * 0.3, opacity: band(frame, 0, 8) * (1 - ramp(frame, [outStart, outStart + 6], [0, 1])) }}
          >
            {label}
          </span>
        ) : null}
        {badges.map((b, i) => {
          const at = 4 + i * 8;
          const out = ramp(frame, [outStart + i * 1.5, outStart + i * 1.5 + 5], [0, 1]);
          const pop = springSnap(frame, fps, at, POP);
          return (
            <span
              key={i}
              data-21st-slot="badges"
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: size * (portrait ? 2.05 : 1.9), justifyContent: "center", textAlign: "center",
                padding: portrait ? `${size * 0.3}px ${size * 0.35}px` : `0 ${size * 0.75}px`,
                borderRadius: 999,
                fontFamily: mono ? resolvedMono : font,
                fontWeight: mono ? 500 : 600,
                fontSize: size,
                letterSpacing: mono ? "0" : "-0.01em",
                whiteSpace: portrait ? "normal" : "nowrap", lineHeight: 1.25, overflowWrap: portrait ? "anywhere" : undefined,
                opacity: band(frame, at, at + 3) * (1 - out),
                transform: `scale(${(0.5 + 0.5 * pop) * (1 - 0.2 * out)})`,
                ...style(b.color),
              }}
            >
              {b.text}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
