// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeOut, expoOut, fitFontSize, inkOn, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { findWord, textEm } from "../shared";
import { meta } from "./accent-pill-title.meta";
import type { schema } from "./accent-pill-title.schema";

const START = 3;
const LH = 1.2;

type Item = { start: number; text: string; pill: boolean };

export const Component: React.FC<z.infer<typeof schema>> = ({ title, accentWord, color, accent, fontFamily, box, lowercase, framesPerChar }) => {
  const { width, height, portrait } = useLayout();
  const { frame, outStart } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const text = lowercase ? title.toLowerCase() : title;
  const n = text.length;
  const hit = findWord(text, accentWord);

  // Words become flex items; the pill run stays one item so its box is continuous.
  const items: Item[] = [];
  const pushWords = (from: number, to: number) => {
    let i = from;
    for (const w of text.slice(from, to).split(" ")) {
      if (w) items.push({ start: i, text: w, pill: false });
      i += w.length + 1;
    }
  };
  if (hit) {
    pushWords(0, hit[0]);
    items.push({ start: hit[0], text: text.slice(hit[0], hit[1]), pill: true });
    pushWords(hit[1], n);
  } else pushWords(0, n);

  const charEm = Math.max(0.5, textEm(text, -0.03) / Math.max(1, n)) + 0.02;
  const max = Math.min(height * 0.26, width * (portrait ? 0.12 : 0.085));
  const size = portrait ? fitFontSize({ chars: Math.max(...items.map(item => item.text.length), 4), boxW: width * 0.82, boxH: height * 0.7, charEm, lineHeight: LH, max: height * 0.22, min: height * 0.083 }) : Math.max(...[1, 2].map((lines) => fitFontSize({ chars: Math.max(n + 2, 8), boxW: width * 0.9, boxH: height * 0.8, lines, charEm, lineHeight: LH, max })));
  const typed = Math.floor((frame - START) / framesPerChar) + 1;

  const leave = easeOut((frame - outStart) / 5);
  const pillBg = box === "solid" ? accent : box === "tint" ? withAlpha(accent, 0.24) : "transparent";
  const pillInk = box === "solid" ? inkOn(accent) : color;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div
        data-21st-slot="title"
        style={{
          maxWidth: width * 0.92,
          display: "flex",
          flexWrap: portrait ? "nowrap" : "wrap",
          flexDirection: portrait ? "column" : "row",
          minHeight: portrait ? height * 0.76 : undefined,
          justifyContent: portrait ? "space-between" : "center",
          alignItems: portrait ? "center" : "baseline",
          columnGap: "0.26em",
          rowGap: "0.08em",
          fontFamily: font,
          fontWeight: 500,
          fontSize: size,
          lineHeight: LH,
          letterSpacing: "-0.03em",
          color,
          opacity: 1 - leave,
          transform: leave > 0 ? `scale(${1 - 0.05 * leave})` : undefined,
        }}
      >
        {items.map((it, ii) => {
          const glyphs = [...it.text].map((ch, ci) => (
            <span key={ci} style={{ visibility: it.start + ci < typed ? "visible" : "hidden" }}>
              {ch}
            </span>
          ));
          if (!it.pill) return <span key={ii} style={{ whiteSpace: portrait ? "normal" : "pre", overflowWrap: "anywhere", maxWidth: width * 0.84 }}>{glyphs}</span>;
          const from = START + it.start * framesPerChar - 1;
          const grow = expoOut((frame - from) / (it.text.length * framesPerChar + 3));
          return (
            <span key={ii} style={{ position: "relative", whiteSpace: portrait ? "normal" : "pre", overflowWrap: "anywhere", maxWidth: width * 0.84, color: pillInk, padding: portrait ? "0 0.16em" : "0 0.1em", margin: "0 -0.04em" }}>
              <span
                style={{
                  position: "absolute",
                  inset: "0.06em -0.04em 0.02em",
                  borderRadius: "0.2em",
                  background: pillBg,
                  border: box === "outline" ? `0.045em solid ${withAlpha(accent, 0.9)}` : undefined,
                  boxShadow: box === "solid" ? `0 0.1em 0.4em ${withAlpha(accent, 0.3)}` : undefined,
                  transform: grow >= 1 ? undefined : `scaleX(${grow})`,
                  transformOrigin: "left center",
                  opacity: ramp(frame, [from, from + 2], [0, 1]),
                }}
              />
              <span style={{ position: "relative" }}>{glyphs}</span>
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
