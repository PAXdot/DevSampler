// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, expoOut, fitFontSize, inkOn, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Icon } from "../shared/icons";
import { Grow, palette, tint } from "../shared/theme";
import { meta } from "./agent-steps.meta";
import type { schema } from "./agent-steps.schema";

const START = 12;
const SPIN = 8;
const POP = { damping: 12, stiffness: 220, mass: 0.6 } as const;

export const Component: React.FC<z.infer<typeof schema>> = ({ query, steps, interval, theme, accent, fontFamily, surfaceColor, textColor }) => {
  const { fps, height: stageHeight } = useVideoConfig();
  const { width: w, height: h, unit: u } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const p = palette(theme, { surfaceColor, textColor });

  const cardW = Math.min(w * 0.9, h * 1.25);
  const pad = cardW * 0.055;
  const n = steps.length;
  // Row height ~ 2.5 x font; header ~ 3 x font; fit everything in 88% of the region.
  const nativeFont = stageHeight * (h > w ? 0.032 : 0.020);
  const base = Math.max(nativeFont, Math.min(u * 4.2, (h * 0.88 - pad * 2) / (n * 2.5 + 3.4)));
  const longest = Math.max(...steps.map((s) => s.length));
  const fs = Math.max(nativeFont, fitFontSize({ chars: longest + 2, boxW: cardW - pad * 2 - base * 2.4, boxH: base * 1.3, charEm: 0.54, max: base, lines: h > w ? 2 : 1 }));
  const qFs = Math.max(nativeFont, fitFontSize({ chars: query.length + 2, boxW: cardW - pad * 2 - base * 2.4, boxH: base * 1.5, charEm: 0.55, max: base * 1.08, lines: h > w ? 2 : 1 }));

  const cIn = expoOut(frame / 10);
  const lastDone = START + (n - 1) * interval + SPIN;
  const allDone = ramp(frame, [lastDone, lastDone + 6], [0, 1]);
  const leave = 1 - exit;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          width: cardW,
          padding: pad,
          borderRadius: u * 2.6,
          background: p.surface,
          boxShadow: p.shadow(u),
          opacity: band(frame, 0, 6) * leave,
          transform: `translateY(${(1 - cIn) * u * 2.5}px) scale(${(0.95 + 0.05 * cIn) * (1 - 0.05 * exit)})`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: base * 0.8, paddingBottom: base * 0.9 }}>
          <div style={{ width: base * 1.6, height: base * 1.6, borderRadius: base * 0.45, display: "grid", placeItems: "center", background: allDone > 0.5 ? accent : tint(accent, p, 0.14) }}>
            <Icon name={allDone > 0.5 ? "check" : "sparkles"} size={base * 0.95} color={allDone > 0.5 ? inkOn(accent) : accent} strokeWidth={2.4} />
          </div>
          <span data-21st-slot="query" style={{ fontFamily: font, fontSize: qFs, fontWeight: 600, letterSpacing: "-0.015em", color: p.ink, maxWidth: cardW - pad * 2 - base * 2.4, lineHeight: 1.25, whiteSpace: h > w ? "normal" : "nowrap", overflowWrap: h > w ? "anywhere" : undefined }}>
            {query}
          </span>
        </div>
        <div style={{ height: 1, background: p.line, marginBottom: base * 0.5 }} />
        {steps.map((s, i) => {
          const t = START + i * interval;
          const grow = expoOut((frame - t) / 8);
          const vis = band(frame, t, t + 6);
          const checked = frame >= t + SPIN;
          const pop = springSnap(frame, fps, t + SPIN, POP);
          const active = frame >= t && !checked;
          // Shimmer across the active label.
          const sh = ((frame - t) / SPIN) * 200 - 50;
          return (
            <Grow key={i} p={grow}>
              <div style={{ display: "flex", alignItems: "center", gap: base * 0.8, height: base * 2.5, opacity: vis, transform: `translateY(${(1 - expoOut((frame - t) / 6)) * base * 0.4}px)` }}>
                <div style={{ width: base * 1.6, height: base * 1.6, display: "grid", placeItems: "center", flexShrink: 0 }}>
                  {checked ? (
                    <div style={{ width: base * 1.15, height: base * 1.15, borderRadius: "50%", background: accent, display: "grid", placeItems: "center", transform: `scale(${pop})` }}>
                      <Icon name="check" size={base * 0.75} color={inkOn(accent)} strokeWidth={3} />
                    </div>
                  ) : (
                    <div style={{ transform: `rotate(${(frame - t) * 24}deg)` }}>
                      <Icon name="loader-circle" size={base * 1.15} color={accent} strokeWidth={2.4} />
                    </div>
                  )}
                </div>
                <span
                  data-21st-slot="steps"
                  style={{
                    fontFamily: font,
                    fontSize: fs,
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    maxWidth: cardW - pad * 2 - base * 2.4, lineHeight: 1.25, whiteSpace: h > w ? "normal" : "nowrap", overflowWrap: h > w ? "anywhere" : undefined,
                    color: checked ? p.muted : p.ink,
                    ...(active
                      ? {
                          backgroundImage: `linear-gradient(90deg, ${p.ink} ${sh - 30}%, ${withAlpha(accent, 0.9)} ${sh}%, ${p.ink} ${sh + 30}%)`,
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: "transparent",
                        }
                      : null),
                  }}
                >
                  {s}
                </span>
              </div>
            </Grow>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
