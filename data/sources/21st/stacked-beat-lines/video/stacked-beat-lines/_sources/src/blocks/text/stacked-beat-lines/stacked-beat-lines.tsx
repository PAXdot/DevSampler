// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeOut, fitFontSize, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { textEm, wordFitSize } from "../shared";
import { meta } from "./stacked-beat-lines.meta";
import type { schema } from "./stacked-beat-lines.schema";

const START = 2;
const SIDE = 0.7;
const LH = 1.35;

export const Component: React.FC<z.infer<typeof schema>> = ({ line1, line2, line3, color, accent, accent2, fontFamily, beatFrames }) => {
  const { width, height, portrait } = useLayout();
  const { frame, outStart } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);

  const rows = [
    { key: "line1", text: line1, k: SIDE },
    { key: "line2", text: line2, k: 1 },
    { key: "line3", text: line3, k: SIDE },
  ].filter((r) => r.text.length > 0);

  // The widest row (in em at its own scale) decides the size.
  const widest = Math.max(4, ...rows.map((r) => textEm(r.text, -0.04) * r.k)) * 1.18;
  const totalH = rows.reduce((a, r) => a + r.k * LH, 0);
  // No row may break inside a word: every row's widest word fits at its own scale.
  const wordCap = Math.min(...rows.map((r) => wordFitSize(r.text, width * 0.9, { tracking: -0.04, family: fontFamily }) / r.k));
  const size = portrait ? Math.min(wordCap, Math.max(height * 0.045, Math.min(height * 0.17, Math.sqrt(width * 0.88 * height * 0.7 / (Math.max(1, rows.reduce((total, row) => total + row.text.length, 0)) * 0.6 * 1.2))))) : fitFontSize({ chars: 1, boxW: width * 0.9, boxH: height * 0.9, charEm: widest, lineHeight: totalH, max: Math.min(height * 0.3, width * (portrait ? 0.17 : 0.1)) });

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: portrait ? height * 0.78 : undefined, justifyContent: portrait ? "space-between" : undefined, maxWidth: width * 0.9, fontFamily: font, fontWeight: 600, lineHeight: LH, letterSpacing: "-0.04em" }}>
        {rows.map((r, i) => {
          const at = START + i * beatFrames;
          const hero = r.key === "line2";
          const lit = ramp(frame, [at, at + 2], [0.3, 1]);
          const slam = easeOut((frame - at) / 3);
          const leaveAt = outStart + i * 2;
          const out = easeOut((frame - leaveAt) / 5);
          return (
            <div
              key={r.key}
              data-21st-slot={r.key}
              style={{
                fontSize: size * r.k,
                whiteSpace: portrait ? "normal" : "nowrap",
                textAlign: "center",
                overflowWrap: "normal",
                maxWidth: "100%",
                visibility: frame >= at ? "visible" : "hidden",
                paddingBottom: hero ? "0.06em" : 0,
                ...(hero
                  ? {
                      backgroundImage: `linear-gradient(90deg, ${accent}, ${accent2})`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      opacity: lit * (1 - out),
                      transform: slam < 1 || out > 0 ? `scale(${(1.1 - 0.1 * slam) * (1 - 0.04 * out)})` : undefined,
                    }
                  : {
                      color: withAlpha(color, lit),
                      opacity: 1 - out,
                      transform: out > 0 ? `translateY(${-out * size * 0.15}px)` : undefined,
                    }),
              }}
            >
              {r.text}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
