// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, band, rise, useClipPhases, useLayout } from "../../kit/index";
import { meta } from "./kinetic-lines.meta";
import type { schema } from "./kinetic-lines.schema";

type Seg = { text: string; em: boolean };

/** "Ship the *component*" -> plain + emphasized segments. */
function parse(line: string): Seg[] {
  return line.split(/(\*[^*]+\*)/g).filter(Boolean).map((s) =>
    s.startsWith("*") && s.endsWith("*") ? { text: s.slice(1, -1), em: true } : { text: s, em: false },
  );
}

export const Component: React.FC<z.infer<typeof schema>> = ({ lines, color, accent, background, stagger, align, serifFontFamily, fontFamily }) => {
  const resolvedSerif = brandFontStack(serifFontFamily ?? "Instrument Serif");
  const resolvedHeading = brandFontStack(fontFamily ?? "Geist");
  const { fps } = useVideoConfig();
  const { unit, width, height, portrait } = useLayout();
  const { frame, outStart, durationInFrames } = useClipPhases(meta.timing);
  // Longest line drives the size so 2x-long text still fits the title-safe area.
  const longest = Math.max(...lines.map((l) => l.replace(/\*/g, "").length), 12);
  // Geist Light averages ~0.48em per glyph; keep the longest line inside the 9% side padding.
  const fontSize = portrait ? Math.max(height * 0.036, Math.min(height * 0.13, Math.sqrt((width - unit * 18) * height * 0.7 / (Math.max(1, lines.reduce((total, line) => total + line.replace(/\*/g, "").length, 0)) * 0.65 * 1.25)))) : Math.min(unit * 12, (width - unit * 18) / (longest * 0.48));

  return (
    <AbsoluteFill
      style={{
        background,
        justifyContent: "center",
        alignItems: align === "center" ? "center" : "flex-start",
        padding: `0 ${unit * 9}px`,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: fontSize * 0.18, minHeight: portrait ? height * 0.76 : undefined, justifyContent: portrait ? "space-between" : undefined, maxWidth: "100%", alignItems: align === "center" ? "center" : "flex-start" }}>
        {lines.map((line, i) => {
          const at = 6 + i * stagger;
          // Leave in reverse order, quicker than the entrance.
          const leave = outStart + (lines.length - 1 - i) * 3;
          const opacity = band(frame, at, at + 18, leave, Math.min(leave + 12, durationInFrames));
          const y = rise(frame, fps, at, fontSize * 0.35);
          const blur = (1 - band(frame, at, at + 14)) * fontSize * 0.08;
          return (
            <div
              key={i}
              data-21st-slot="lines"
              style={{
                opacity,
                transform: `translateY(${y}px)`,
                filter: blur > 0.05 ? `blur(${blur}px)` : undefined,
                fontFamily: resolvedHeading,
                fontWeight: 300,
                fontSize,
                letterSpacing: "-0.025em",
                lineHeight: 1.08,
                color,
                textAlign: align,
                whiteSpace: "pre-wrap",
                maxWidth: "100%",
                overflowWrap: "anywhere",
              }}
            >
              {parse(line).map((s, j) =>
                s.em ? (
                  <span key={j} style={{ fontFamily: resolvedSerif, fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.01em", color: accent }}>
                    {s.text}
                  </span>
                ) : (
                  <span key={j}>{s.text}</span>
                ),
              )}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
