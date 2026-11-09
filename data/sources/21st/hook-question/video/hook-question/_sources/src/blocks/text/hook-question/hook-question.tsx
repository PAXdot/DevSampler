// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeOut, fitFontSize, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { SceneGround, markedWords, stripMarks, textEm, wordFitSize } from "../shared";
import { meta } from "./hook-question.meta";
import type { schema } from "./hook-question.schema";

const Q_AT = 7;
const Q_LEN = 13;
const A_AT = 45;
const A_LEN = 15;
const LH = 1.12;

export const Component: React.FC<z.infer<typeof schema>> = ({ question, answer, color, accent, background, fontFamily, align, glow }) => {
  const { width, height, portrait } = useLayout();
  const { frame, outStart } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const plain = stripMarks(question);
  const chars = Math.max(plain.length, 12);
  const boxW = width * (portrait ? 0.84 : 0.76);
  const charEm = Math.max(0.52, textEm(plain, -0.035) / chars);
  const max = Math.min(height * (portrait ? 0.115 : 0.1), width * (portrait ? 0.2 : 0.065));
  const size = Math.min(Math.max(...(portrait ? [4, 5, 6] : [2, 3, 4]).map((lines) => fitFontSize({ chars, boxW, boxH: height * (portrait ? 0.68 : 0.42), lines, charEm, lineHeight: LH, max }))), wordFitSize(plain, boxW, { tracking: -0.035, family: fontFamily }));
  const aSize = Math.max(portrait ? height * 0.034 : 0, Math.min(size * 0.6, Math.max(...[1, 2].map((lines) => fitFontSize({ chars: answer.length, boxW, boxH: height * 0.16, lines, charEm: 0.52, lineHeight: 1.3, max: size * 0.6 })))));

  const q = easeOut((frame - Q_AT) / Q_LEN);
  const a = easeOut((frame - A_AT) / A_LEN);
  const leave = ramp(frame, [outStart, outStart + 4], [1, 0]);
  const center = align === "center";

  return (
    <AbsoluteFill>
      {background !== "transparent" ? <SceneGround background={background} accent={accent} glow={glow ? 0.8 : 0} x={center ? 0.5 : 0.15} y={0.2} portrait={portrait} /> : null}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: center ? "center" : "flex-start", padding: `0 ${(width - boxW) / 2}px`, opacity: leave }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: center ? "center" : "flex-start", gap: size * 0.55, minHeight: portrait ? height * 0.78 : undefined, justifyContent: portrait ? "space-between" : undefined, maxWidth: boxW }}>
          <div
            data-21st-slot="question"
            style={{
              fontFamily: font,
              fontWeight: 600,
              fontSize: size,
              lineHeight: LH,
              letterSpacing: "-0.035em",
              color,
              textAlign: center ? "center" : "left",
              textWrap: "balance",
              overflowWrap: "normal",
              opacity: q,
              transform: q < 1 ? `translateY(${(1 - q) * size * 0.22}px)` : undefined,
            }}
          >
            {markedWords(question).map((w, i) => (
              <React.Fragment key={i}>
                {i > 0 ? " " : null}
                <span style={w.em ? { color: accent } : undefined}>{w.text}</span>
              </React.Fragment>
            ))}
          </div>
          {answer ? (
            <div
              data-21st-slot="answer"
              style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: aSize,
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
                color: withAlpha(color, 0.6),
                textAlign: center ? "center" : "left",
                opacity: a,
                transform: a < 1 ? `translateY(${(1 - a) * aSize * 0.3}px)` : undefined,
              }}
            >
              {answer}
            </div>
          ) : null}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
