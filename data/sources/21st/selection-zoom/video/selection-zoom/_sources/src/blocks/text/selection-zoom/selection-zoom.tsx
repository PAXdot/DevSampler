// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, expoOut, fitFontSize, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { textEm } from "../shared";
import { isPortraitFrame, nativeReadingSize, portraitAdvance } from "../portrait-type";
import { meta } from "./selection-zoom.meta";
import type { schema } from "./selection-zoom.schema";

const START = 4;
const GAP = 0.26;
const LH = 1.16;

export const Component: React.FC<z.infer<typeof schema>> = ({ phrase, color, accent, fontFamily, zoom, select, wordFrames }) => {
  const { width, height } = useLayout();
  const portrait = isPortraitFrame(width, height), minFont = nativeReadingSize(height, portrait);
  const { frame, outStart, durationInFrames } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const words = phrase.split(/\s+/).filter(Boolean);
  const n = Math.max(1, words.length);
  const chars = Math.max(phrase.length, 6);

  // Sized for the zoomed-in end state; the phrase starts small at 1/zoom.
  const max = Math.min(height * 0.3, width * (portrait ? 0.16 : 0.11));
  const charEm = Math.max(0.5, textEm(phrase, -0.02) / chars);
  // One line while it still reads big; wrap only when the phrase would get small.
  const sizes = [1, 2, 3].map((lines) => fitFontSize({ chars, boxW: width * 0.9, boxH: height * 0.84, lines, charEm, lineHeight: LH, max }));
  const size = portrait ? Math.max(minFont, Math.min(height * .86 / (n * 1.2), width * .83 / Math.max(...words.map(word => portraitAdvance(word, fontFamily, -.025)), 1))) : sizes[0]! >= max * 0.55 ? sizes[0]! : Math.max(...sizes);
  const cadence = Math.min(wordFrames, Math.max(1, durationInFrames - START - 20) / Math.max(1, n - 1));

  const last = START + (n - 1) * cadence;
  const zoomAt = last + 4 + 10;
  const z = expoOut((frame - zoomAt) / 5);
  const scale = 1 / zoom + (1 - 1 / zoom) * z;
  const leave = ramp(frame, [outStart, outStart + 6], [0, 1]);

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div
        data-21st-slot="phrase"
        style={{
          maxWidth: width * 0.92,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: portrait ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: font,
          fontWeight: 500,
          fontSize: size,
          lineHeight: portrait ? 1.2 : LH,
          letterSpacing: "-0.025em",
          color,
          transform: scale === 1 ? undefined : `scale(${scale})`,
          opacity: 1 - leave,
          filter: leave > 0 ? `blur(${leave * size * 0.12}px)` : undefined,
        }}
      >
        {words.map((w, i) => {
          const at = START + i * cadence;
          const selected = select === "phrase" || i === n - 1;
          const joins = !portrait && select === "phrase" && i < n - 1;
          const sel = expoOut((frame - at - 1) / 4);
          return (
            <span key={i} style={{ position: "relative", display: "inline-block", paddingRight: !portrait && i < n - 1 ? `${GAP}em` : 0 }}>
              {selected && sel > 0 ? (
                <span
                  style={{
                    position: "absolute",
                    top: "0.04em",
                    bottom: "0.02em",
                    left: portrait || i === 0 || select === "last-word" ? "-0.08em" : 0,
                    right: portrait ? "-0.08em" : joins ? 0 : i < n - 1 ? `${GAP - 0.08}em` : "-0.08em",
                    background: withAlpha(accent, 0.34),
                    borderRadius: "0.06em",
                    transform: sel === 1 ? undefined : `scaleX(${sel})`,
                    transformOrigin: "left center",
                  }}
                />
              ) : null}
              <span style={{ position: "relative", opacity: band(frame, at, at + 2) }}>{w}</span>
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
