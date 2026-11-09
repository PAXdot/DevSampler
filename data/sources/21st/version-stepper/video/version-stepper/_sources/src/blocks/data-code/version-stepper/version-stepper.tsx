// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, band, brandFontStack, expoOut, fitFontSize, inkOn, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { dataFontFloor } from "../_shared/code-card";
import { mix, prog } from "../_shared/num";
import { meta } from "./version-stepper.meta";
import type { schema } from "./version-stepper.schema";

const STEP_AT = 14;

export const Component: React.FC<z.infer<typeof schema>> = ({ statement, chipPrefix, steps, stepFrames, subline, color, accent, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width, height, portrait } = useLayout();
  const { frame, durationInFrames, exit } = useEnterExit(meta.timing);
  const minFont = dataFontFloor(height, portrait);
  const cadence = steps > 1 ? Math.min(stepFrames, Math.max(0.125, (durationInFrames * 0.7 - STEP_AT - 14) / (steps - 1))) : stepFrames;
  const font = brandFontStack(fontFamily);

  const chipChars = chipPrefix.length + String(steps).length + 2;
  const lines = portrait || statement.length > 24 ? 2 : 1;
  const size = fitFontSize({ chars: statement.length + chipChars + 1, boxW: width * 0.94, boxH: height * 0.5, lines, charEm: 0.56, lineHeight: 1.15, max: Math.min(height * 0.2, width * (portrait ? 0.12 : 0.085)) });
  const subSize = Math.max(minFont, fitFontSize({ chars: subline.length, boxW: width * 0.9, boxH: height * 0.18, lines: 2, charEm: 0.52, lineHeight: 1.3, max: size * 0.36 }));

  const i = Math.min(steps - 1, Math.max(0, Math.floor((frame - STEP_AT) / cadence)));
  const local = frame - STEP_AT - i * cadence;
  const t = steps > 1 ? i / (steps - 1) : 1;
  const last = STEP_AT + (steps - 1) * cadence;
  const glow = expoOut(prog(frame, last, last + 8));
  const roll = i === 0 ? 1 : expoOut(prog(local, 0, 5));
  const bg = mix(mix(color, accent, 0.75), accent, t);
  const ink = mix(color, inkOn(accent), t);
  const sIn = springSnap(frame, fps, 0, APPLE);
  const cIn = springSnap(frame, fps, 6, APPLE);
  const subIn = springSnap(frame, fps, last + 8, APPLE);
  const leave = 1 - exit;

  const label = (n: number) => `${chipPrefix}${n}`;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", fontFamily: font, color }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: size * 0.45, height: portrait ? height * 0.8 : undefined, justifyContent: portrait ? "space-between" : undefined, opacity: leave, transform: `scale(${1 - exit * 0.04})` }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            columnGap: size * 0.3,
            rowGap: size * 0.12,
            maxWidth: width * 0.96,
            fontSize: size,
            fontWeight: 600,
            letterSpacing: "-0.035em",
            lineHeight: 1.15,
          }}
        >
          <span data-21st-slot="statement" style={{ textAlign: "center", opacity: band(frame, 0, 8), transform: `translateY(${(1 - sIn) * size * 0.3}px)` }}>
            {statement}
          </span>
          <span
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              height: size * 1.5,
              lineHeight: 1.4,
              padding: `0 ${size * 0.3}px`,
              borderRadius: size * 0.28,
              background: bg,
              color: ink,
              boxShadow: `0 0 ${size * 0.7 * glow}px ${withAlpha(accent, 0.55 * glow)}, inset 0 0 0 1px ${withAlpha(inkOn(bg), 0.08 + 0.12 * t)}`,
              opacity: band(frame, 6, 12),
              transform: `translateY(${(1 - cIn) * size * 0.3}px) scale(${1 + 0.06 * (1 - roll) * (i > 0 ? 1 : 0)})`,
              overflow: "hidden",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            <span style={{ visibility: "hidden" }}>
              {label(steps)}
            </span>
            <span data-21st-slot="chipPrefix" style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", transform: `translateY(${(1 - roll) * size}px)` }}>{label(i + 1)}</span>
            {i > 0 && roll < 1 ? (
              <span style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", transform: `translateY(${-roll * size}px)`, opacity: 1 - roll }}>{label(i)}</span>
            ) : null}
          </span>
        </div>
        <div
          data-21st-slot="subline"
          style={{
            maxWidth: width * 0.9,
            textAlign: "center",
            fontSize: subSize,
            fontWeight: 400,
            lineHeight: 1.3,
            color: withAlpha(color, 0.6),
            opacity: band(frame, last + 8, last + 14),
            transform: `translateY(${(1 - subIn) * subSize * 0.6}px)`,
          }}
        >
          {subline}
        </div>
      </div>
    </AbsoluteFill>
  );
};
