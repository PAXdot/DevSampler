// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE_SNAPPY, band, ramp, brandFontStack, expoOut, fitFontSize, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { fmtNum } from "../_shared/num";
import { meta } from "./stat-slam.meta";
import type { schema } from "./stat-slam.schema";

const COUNT = 17;
const SIDES = ["left", "right", "center"] as const;

export const Component: React.FC<z.infer<typeof schema>> = ({ stats, beat, align, glow, color, accent, background, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width, height, portrait } = useLayout();
  const minFont = Math.ceil(height * (portrait ? 0.03125 : 0.01875));
  const { frame, durationInFrames, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);

  const n = stats.length;
  // Every stat gets its cut even when the clip is shorter than n beats.
  const step = n > 1 ? Math.max(8, Math.min(beat, Math.floor((durationInFrames - meta.timing.phases.out - COUNT - 2) / (n - 1)))) : beat;
  const k = Math.min(n - 1, Math.max(0, Math.floor(frame / step)));
  const s = stats[k]!;
  const local = frame - k * step;
  // The last stat always lands on its final value by the last frame, even in a short clip.
  const count = k === n - 1 ? Math.max(1, Math.min(COUNT, durationInFrames - 2 - k * step)) : COUNT;

  const texts = stats.map((x) => `${x.prefix}${fmtNum(x.value, x.decimals)}${x.suffix}`);
  const longest = Math.max(...texts.map((t) => t.length));
  const padX = width * (portrait ? 0.08 : 0.1);
  const size = fitFontSize({ chars: longest, boxW: width - padX * 2, boxH: height * 0.34, charEm: 0.6, lineHeight: 1, max: Math.min(height * 0.22, width * (portrait ? 0.34 : 0.22)) });
  const longestLabel = Math.max(...stats.map((x) => x.label.length), 4);
  const labelSize = Math.max(portrait ? height * 0.05 : minFont, fitFontSize({ chars: longestLabel, boxW: (width - padX * 2) / 1.2, boxH: size * 0.3, charEm: 0.62, max: size * 0.2 }));

  const side = align === "cycle" ? SIDES[k % 3]! : align;
  const t = expoOut((local - 1) / count);
  const v = s.value * (0.4 + 0.6 * t);
  const pop = springSnap(local, fps, 0, APPLE_SNAPPY);
  const flash = ramp(local, [0, 5], [k === 0 ? 0.2 : 0.35, 0]);
  const underline = springSnap(local, fps, 9, APPLE_SNAPPY);
  const leave = 1 - exit;
  const justify = side === "left" ? "flex-start" : side === "right" ? "flex-end" : "center";
  const glowX = side === "left" ? 28 : side === "right" ? 72 : 50;

  return (
    <AbsoluteFill style={{ background }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse 55% 45% at ${glowX}% 50%, ${withAlpha(accent, 0.12)}, transparent 70%)`,
          opacity: leave,
        }}
      />
      <AbsoluteFill style={{ padding: `0 ${padX}px`, alignItems: justify, justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: justify,
            gap: size * 0.14,
            minHeight: portrait ? height * 0.74 : undefined,
            justifyContent: portrait ? "space-between" : undefined,
            maxWidth: width - padX * 2,
            opacity: leave * band(local, 0, 3),
            transform: `scale(${(1.05 - 0.05 * pop) * (1 - exit * 0.04)})`,
            transformOrigin: `${glowX}% 50%`,
          }}
        >
          <div
            data-21st-slot="stats"
            style={{
              fontFamily: font,
              fontWeight: 600,
              fontSize: size,
              lineHeight: 1,
              letterSpacing: "-0.045em",
              fontVariantNumeric: "tabular-nums",
              whiteSpace: "nowrap",
              color,
              textShadow: glow ? `0 0 ${size * 0.28}px ${withAlpha(color, 0.32)}, 0 0 ${size * 0.08}px ${withAlpha(color, 0.25)}` : undefined,
            }}
          >
            {s.prefix ? <span style={{ color: withAlpha(color, 0.55) }}>{s.prefix}</span> : null}
            {fmtNum(v, s.decimals)}
            {s.suffix ? <span style={{ color: accent }}>{s.suffix}</span> : null}
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: justify, gap: labelSize * 0.6 }}>
            <div
              data-21st-slot="stats"
              style={{
                fontFamily: font,
                fontWeight: 500,
                fontSize: labelSize,
                letterSpacing: "0.08em",
                color: withAlpha(color, 0.6),
                whiteSpace: portrait ? "normal" : "nowrap",
                maxWidth: width - padX * 2,
                overflowWrap: "anywhere",
                lineHeight: 1.2,
                textAlign: side,
                opacity: band(local, 6, 12),
              }}
            >
              {s.label}
            </div>
            <div
              style={{
                width: Math.max(labelSize * 6, size * 1.1),
                height: Math.max(2, labelSize * 0.16),
                borderRadius: 99,
                background: `linear-gradient(90deg, ${accent}, ${withAlpha(accent, 0)})`,
                transform: `scaleX(${underline})`,
                transformOrigin: side === "right" ? "100% 50%" : side === "center" ? "50% 50%" : "0% 50%",
              }}
            />
          </div>
        </div>
      </AbsoluteFill>
      {background !== "transparent" && flash > 0.002 ? <AbsoluteFill style={{ background: `radial-gradient(ellipse at center, ${withAlpha(color, 0.6)}, ${withAlpha(accent, 0.25)})`, opacity: flash }} /> : null}
    </AbsoluteFill>
  );
};
