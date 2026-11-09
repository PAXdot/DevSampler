// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeOut, expoOut, fitFontSize, useEnterExit, useLayout } from "../../../kit/index";
import { textEm } from "../shared";
import { isPortraitFrame, nativeReadingSize, portraitAdvance, portraitWords } from "../portrait-type";
import { meta } from "./line-zoom-in.meta";
import type { schema } from "./line-zoom-in.schema";

const START = 2;
const LH = 1.06;

export const Component: React.FC<z.infer<typeof schema>> = ({ lines, color, accent, fontFamily, gapFrames, accentLast }) => {
  const { width, height } = useLayout();
  const portrait = isPortraitFrame(width, height), minFont = nativeReadingSize(height, portrait);
  const { frame, outStart, durationInFrames } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const list = lines.length ? lines : [" "];
  const longest = list.reduce((a, l) => (textEm(l, -0.04) > textEm(a, -0.04) ? l : a), list[0]!);
  const chars = Math.max(longest.length, 5);
  const rows = list.map(line => portrait && line.length > 10 ? portraitWords(line) : [line]);
  const rowCount = rows.reduce((sum, lines) => sum + lines.length, 0);
  const size = portrait ? Math.max(minFont, Math.min(height * .86 / (rowCount * 1.2), width * .88 / Math.max(...rows.flat().map(row => portraitAdvance(row, fontFamily, -.04)), 1))) : fitFontSize({
    chars,
    boxW: width * 0.9,
    boxH: height * 0.9,
    charEm: Math.max(0.5, textEm(longest, -0.04) / chars),
    lineHeight: LH * list.length,
    max: Math.min(height * 0.34, width * (portrait ? 0.2 : 0.12)),
  });

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontFamily: font, fontWeight: 600, fontSize: size, lineHeight: LH, letterSpacing: "-0.045em" }}>
        {list.map((l, i) => {
          const at = START + i * Math.min(gapFrames, (durationInFrames - START - 6) / Math.max(1, list.length - 1));
          const s = expoOut((frame - at) / 5);
          const leaveAt = outStart + (list.length - 1 - i) * 2;
          const out = easeOut((frame - leaveAt) / 5);
          const scale = (0.1 + 0.9 * s) * (1 - 0.08 * out);
          return (
            <div
              key={i}
              data-21st-slot="lines"
              style={{
                whiteSpace: portrait ? "pre-wrap" : "nowrap",
                textAlign: "center",
                lineHeight: portrait ? 1.2 : LH,
                overflowWrap: "anywhere",
                maxWidth: width * .9,
                color: accentLast && i === list.length - 1 && list.length > 1 ? accent : color,
                visibility: frame >= at ? "visible" : "hidden",
                opacity: 1 - out,
                transform: scale === 1 ? undefined : `scale(${scale})`,
              }}
            >
              {rows[i]!.join("\n")}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
