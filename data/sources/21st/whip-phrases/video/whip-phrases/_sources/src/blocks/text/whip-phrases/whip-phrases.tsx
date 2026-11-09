// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, expoOut, fitFontSize, useEnterExit, useLayout } from "../../../kit/index";
import { DirBlur, SceneGround, textEm, useSafeId } from "../shared";
import { nativeReadingSize, portraitAdvance, portraitWords } from "../portrait-type";
import { meta } from "./whip-phrases.meta";
import type { schema } from "./whip-phrases.schema";

const ENTER = 6;
const EXIT = 4;
const easeIn = (x: number) => Math.pow(Math.max(0, Math.min(1, x)), 3);

export const Component: React.FC<z.infer<typeof schema>> = ({ phrases, color, accent, background, fontFamily, holdFrames, direction, accentLast, glow }) => {
  const { width, height, portrait } = useLayout();
  const { frame, outStart, durationInFrames } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const baseId = useSafeId("whip");
  const list = phrases.length ? phrases : [" "];
  const n = list.length;
  const cycle = Math.min(holdFrames + ENTER, (durationInFrames - 1) / n);
  const enter = Math.min(ENTER, cycle * .5), exit = Math.min(EXIT, cycle * .35);
  const d = direction === "left" ? -1 : 1;

  const longest = list.reduce((a, p) => (textEm(p) > textEm(a) ? p : a), list[0]!);
  const chars = Math.max(longest.length, 6);
  const rows = list.map(phrase => portrait ? portraitWords(phrase) : [phrase]);
  const minFont = nativeReadingSize(height, portrait, 1);
  const size = fitFontSize({
    chars,
    boxW: width * 0.86,
    boxH: height * 0.5,
    lines: chars > 12 ? 2 : 1,
    charEm: Math.max(0.52, textEm(longest, -0.04) / chars),
    lineHeight: 1.04,
    max: Math.min(height * 0.16, width * (portrait ? 0.13 : 0.1)),
  });

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {background !== "transparent" ? <SceneGround background={background} accent={accent} glow={glow ? 1 : 0} y={0.42} portrait={portrait} /> : null}
      {list.map((p, i) => {
        const s = i * cycle;
        const e = i < n - 1 ? (i + 1) * cycle - 2 : outStart;
        if (frame < s || frame >= e + exit) return null;
        const pin = expoOut((frame - s) / enter);
        const pout = easeIn((frame - e) / exit);
        const x = (-d * (1 - pin) + d * pout) * width * 0.6;
        const phraseSize = portrait ? Math.max(minFont, Math.min(height * .83 / (rows[i]!.length * 1.18), width * .84 / Math.max(...rows[i]!.map(row => portraitAdvance(row, fontFamily, -.045)), 1))) : size;
        const smear = ((1 - pin) + pout) * phraseSize * 0.32;
        const id = `${baseId}-${i}`;
        return (
          <AbsoluteFill key={i} style={{ alignItems: "center", justifyContent: "center", padding: `0 ${width * 0.07}px` }}>
            {smear > 0.3 ? <DirBlur id={id} x={smear} /> : null}
            <div
              data-21st-slot="phrases"
              style={{
                maxWidth: width * 0.86,
                textAlign: "center",
                fontFamily: font,
                fontWeight: 600,
                fontSize: phraseSize,
                lineHeight: portrait ? 1.18 : 1.04,
                whiteSpace: portrait ? "pre-wrap" : "normal",
                overflowWrap: "anywhere",
                letterSpacing: "-0.045em",
                color: accentLast && n > 1 && i === n - 1 ? accent : color,
                transform: x === 0 ? undefined : `translateX(${x}px)`,
                filter: smear > 0.3 ? `url(#${id})` : undefined,
              }}
            >
              {rows[i]!.join("\n")}
            </div>
          </AbsoluteFill>
        );
      })}
    </AbsoluteFill>
  );
};
