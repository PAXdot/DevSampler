// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, easeOut, expoOut, fitFontSize, inkOn, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { textEm, wordFitSize } from "../shared";
import { meta } from "./word-cycler.meta";
import type { schema } from "./word-cycler.schema";

const START = 4;
const LEAD = 14;
const TRACK = -0.03;
const PAD = 0.32;
const GAP = 0.28;

export const Component: React.FC<z.infer<typeof schema>> = ({ prefix, words, suffix, color, accent, fontFamily, box, swapEvery }) => {
  const { width, height, portrait } = useLayout();
  const { frame, outStart } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const list = words.length ? words : [" "];
  const n = list.length;

  // Swap j (1..n-1) lands at START + LEAD + j * swapEvery.
  const swapAt = (j: number) => START + LEAD + j * swapEvery;
  let k = 0;
  for (let j = 1; j < n; j++) if (frame >= swapAt(j)) k = j;
  const t = k > 0 ? frame - swapAt(k) : 99;
  const cur = list[k]!;
  const prev = k > 0 ? list[k - 1]! : cur;

  const wEm = (s: string) => textEm(s, TRACK) + PAD * 2;
  const tw = expoOut(t / 6);
  const boxEm = wEm(prev) + (wEm(cur) - wEm(prev)) * tw;
  const widestWord = Math.max(...list.map(wEm));

  const column = portrait;
  const rowEm = column
    ? Math.max(textEm(prefix, TRACK), widestWord, textEm(suffix, TRACK))
    : textEm(prefix, TRACK) + widestWord + textEm(suffix, TRACK) + GAP * 2;
  // The chip word never wraps: cap so the widest one (with chip padding) fits in this font.
  const size = Math.min(wordFitSize(list.join(" "), width * 0.88, { tracking: TRACK, family: fontFamily, pad: PAD * 2 }), fitFontSize({ chars: 1, boxW: width * 0.92, boxH: height * 0.86, charEm: rowEm, lineHeight: column ? 3.9 : 1.3, max: Math.min(height * 0.22, width * (portrait ? 0.26 : 0.09)), min: portrait ? height * 0.03125 : undefined }));

  const enter = expoOut((frame - START) / 12);
  const leave = easeOut((frame - outStart) / 6);
  const fill = box === "solid" ? accent : withAlpha(accent, 0.2);
  const ink = box === "solid" ? inkOn(accent) : color;

  const word = (s: string, o: number, dy: number, key: string, slot: boolean) => (
    <span
      key={key}
      data-21st-slot={slot ? "words" : undefined}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        whiteSpace: "nowrap", textAlign: "center",
        opacity: o,
        transform: `translate(-50%, calc(-50% + ${dy}em))`,
      }}
    >
      {s}
    </span>
  );

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: column ? "column" : "row",
          alignItems: "center",
          justifyContent: column ? "space-between" : "center",
          minHeight: column ? height * 0.78 : undefined,
          maxWidth: width * 0.92,
          gap: column ? `${GAP * 0.9}em` : `${GAP}em`,
          fontFamily: font,
          fontWeight: 500,
          fontSize: size,
          lineHeight: 1.2,
          letterSpacing: `${TRACK}em`,
          color,
          opacity: band(frame, START, START + 8) * (1 - leave),
          transform: enter < 1 || leave > 0 ? `translateY(${((1 - enter) * 0.4 - leave * 0.2) * size}px)` : undefined,
        }}
      >
        {prefix ? (
          <span data-21st-slot="prefix" style={{ whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: "normal", maxWidth: width * 0.88, textAlign: "center" }}>
            {prefix}
          </span>
        ) : null}
        <span
          style={{
            position: "relative",
            display: "inline-block",
            width: portrait ? Math.min(width * 0.88, boxEm * size) : `${boxEm}em`,
            height: portrait ? "2.1em" : "1.32em",
            borderRadius: "0.22em",
            background: fill,
            color: ink,
            fontWeight: 600,
            boxShadow: box === "solid" ? `0 0.12em 0.5em ${withAlpha("#000000", 0.18)}` : undefined,
          }}
        >
          {t < 4 && k > 0 ? word(prev, ramp(t, [0, 3], [1, 0]), -0.18 * easeOut(t / 3), `p${k}`, false) : null}
          {word(cur, k > 0 ? ramp(t, [1, 4], [0, 1]) : 1, k > 0 ? 0.22 * (1 - easeOut((t - 1) / 4)) : 0, `c${k}`, true)}
        </span>
        {suffix ? (
          <span data-21st-slot="suffix" style={{ whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: "normal", maxWidth: width * 0.88, textAlign: "center" }}>
            {suffix}
          </span>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
