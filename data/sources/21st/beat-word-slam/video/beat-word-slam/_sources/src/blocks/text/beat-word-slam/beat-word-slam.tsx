// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, random } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeOut, fitFontSize, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { SceneGround, textEm } from "../shared";
import { meta } from "./beat-word-slam.meta";
import type { schema } from "./beat-word-slam.schema";

const START = 2;

export const Component: React.FC<z.infer<typeof schema>> = ({ words, bpm, color, accent, background, fontFamily, flash, variation }) => {
  const { width, height, portrait } = useLayout();
  const { frame, outStart } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const list = words.length ? words : [" "];
  const n = list.length;
  const beat = 1800 / bpm;
  const at = (i: number) => Math.round(START + i * beat);

  let i = -1;
  for (let j = 0; j < n; j++) if (frame >= at(j)) i = j;
  const t = i >= 0 ? frame - at(i) : 0;
  const last = i === n - 1;

  const longest = list.reduce((a, w) => (textEm(w) > textEm(a) ? w : a), list[0]!);
  const chars = Math.max(longest.length, 4);
  const size = fitFontSize({
    chars,
    boxW: width * 0.86,
    boxH: height * 0.4,
    charEm: Math.max(0.54, textEm(longest, -0.05) / chars),
    lineHeight: 1.05,
    max: Math.min(height * 0.2, width * (portrait ? 0.2 : 0.16)),
  });

  const inverted = background !== "transparent" && variation === "invert" && i >= 0 && i % 2 === 1;
  const bg = inverted ? color : background;
  const ink = last ? accent : inverted ? background : color;
  const gx = variation === "glow-shift" && i >= 0 ? 0.25 + 0.5 * random(`slam-x-${i}`) : 0.5;
  const gy = variation === "glow-shift" && i >= 0 ? 0.25 + 0.5 * random(`slam-y-${i}`) : 0.45;
  const pop = easeOut(t / 4);
  const leave = easeOut((frame - outStart) / 6);
  const flashA = flash && i >= 0 && frame < outStart ? ramp(t, [0, 3], [0.85, 0]) : 0;

  if (portrait) return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", background: bg }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", minHeight: height * 0.78, maxWidth: width * 0.86 }}>
        {list.map((word, index) => <div key={index} data-21st-slot="words" style={{ fontFamily: font, fontWeight: 600, fontSize: size, lineHeight: 1.14, letterSpacing: "-0.05em", color: index === i ? accent : color, opacity: frame < at(index) ? 0 : index === i ? 1 : 0.6, transform: index === i ? `scale(${1.06 - 0.06 * pop})` : undefined, textAlign: "center", overflowWrap: "anywhere", width: width * 0.82, paddingBottom: size * 0.12, borderBottom: `${Math.max(2, size * 0.025)}px solid ${withAlpha(accent, index === i ? 0.8 : 0.24)}` }}>{word}</div>)}
      </div>
    </AbsoluteFill>
  );

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {background !== "transparent" ? <SceneGround background={bg} accent={last ? accent : withAlpha(ink, 0.5)} glow={variation === "none" ? 0.6 : 1} x={gx} y={gy} portrait={portrait} /> : null}
      {i >= 0 ? (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
          <div
            key={i}
            data-21st-slot="words"
            style={{
              fontFamily: font,
              fontWeight: 600,
              fontSize: size,
              lineHeight: 1.05,
              letterSpacing: "-0.05em",
              whiteSpace: "nowrap",
              color: ink,
              opacity: 1 - leave,
              transform: pop < 1 || leave > 0 ? `scale(${(1.06 - 0.06 * pop) * (1 - 0.03 * leave)})` : undefined,
            }}
          >
            {list[i]}
          </div>
        </AbsoluteFill>
      ) : null}
      {background !== "transparent" && flashA > 0 ? (
        <AbsoluteFill style={{ background: `radial-gradient(ellipse 90% 90% at 50% 50%, ${withAlpha(inverted ? background : color, flashA)}, ${withAlpha(inverted ? background : color, flashA * 0.7)})` }} />
      ) : null}
    </AbsoluteFill>
  );
};
