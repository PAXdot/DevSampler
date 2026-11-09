// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, easeOut, fitFontSize, useEnterExit, useLayout } from "../../../kit/index";
import { markedWords, stripMarks, textEm } from "../shared";
import { isPortraitFrame, nativeReadingSize, portraitAdvance, portraitWords } from "../portrait-type";
import { meta } from "./phrase-type-small.meta";
import type { schema } from "./phrase-type-small.schema";

const START = 2;
const SIZES = { small: 5, medium: 7.2, large: 9.6 } as const;

export const Component: React.FC<z.infer<typeof schema>> = ({ text, color, accent, fontFamily, wordFrames, size }) => {
  const { width, height, unit } = useLayout();
  const portrait = isPortraitFrame(width, height), minFont = nativeReadingSize(height, portrait);
  const { frame, outStart, durationInFrames } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const words = markedWords(text);
  const plain = stripMarks(text);
  const chars = Math.max(plain.length, 6);
  const charEm = Math.max(0.5, textEm(plain, -0.01) / chars);
  const rows = portraitWords(plain, 2);
  const rowAdvance = (row: string) => portraitAdvance(row, fontFamily, -.01) * (/Bebas Neue/i.test(fontFamily) ? .78 / .63 : 1);
  const fs = portrait ? Math.max(minFont, Math.min(height * .88 / (Math.max(1, rows.length) * 1.35), width * .87 / Math.max(...rows.map(rowAdvance), 1))) : Math.max(...[1, 2, 3].map((lines) => fitFontSize({ chars, boxW: width * 0.9, boxH: height * 0.8, lines, charEm, lineHeight: 1.35, max: unit * SIZES[size] })));
  const leave = easeOut((frame - outStart) / 6);

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div
        data-21st-slot="text"
        style={{
          maxWidth: width * 0.9,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: portrait ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "0.27em",
          fontFamily: font,
          fontWeight: 400,
          fontSize: fs,
          lineHeight: 1.35,
          letterSpacing: "-0.01em",
          color,
          opacity: 1 - leave,
        }}
      >
        {(portrait ? Array.from({ length: Math.ceil(words.length / 2) }, (_, row) => words.slice(row * 2, row * 2 + 2)) : [words]).map((row, r) => <div key={r} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", columnGap: ".27em" }}>{row.map((w, j) => {
          const i = portrait ? r * 2 + j : j;
          const at = START + i * Math.min(wordFrames, (durationInFrames - START - 4) / Math.max(1, words.length - 1));
          const o = band(frame, at, at + 3);
          return (
            <span
              key={i}
              style={{
                display: "inline-block",
                whiteSpace: "nowrap",
                color: w.em ? accent : undefined,
                fontWeight: w.em ? 500 : undefined,
                opacity: o,
                transform: o < 1 ? `translateY(${(1 - o) * 0.2}em)` : undefined,
              }}
            >
              {w.text}
            </span>
          );
        })}</div>)}
      </div>
    </AbsoluteFill>
  );
};
