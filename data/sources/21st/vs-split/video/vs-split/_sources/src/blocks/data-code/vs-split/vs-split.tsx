// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, expoOut, fitFontSize, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { dataFontFloor } from "../_shared/code-card";
import { fmtNum, prog } from "../_shared/num";
import { meta } from "./vs-split.meta";
import type { schema } from "./vs-split.schema";

type Props = z.infer<typeof schema>;

export const Component: React.FC<Props> = (p) => {
  const { title, leftLabel, leftValue, rightLabel, rightValue, prefix, suffix, decimals, winner, color, accent, fontFamily } = p;
  const { width, height, portrait } = useLayout();
  const minFont = dataFontFloor(height, portrait);
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const stacked = width / height < 1.05;

  const titleH = Math.max(height * (stacked ? 0.1 : 0.16), portrait ? minFont * 2.7 : 0);
  const titleSize = Math.max(minFont, fitFontSize({ chars: title.length, boxW: width * 0.96, boxH: titleH * 0.75, charEm: 0.55, max: Math.min(titleH * 0.62, width * 0.06) }));
  const gap = Math.min(width, height) * 0.08;
  const cardW = stacked ? width : (width - gap) / 2;
  const cardH = stacked ? (height - titleH - gap) / 2 : Math.min(height - titleH, cardW * 0.78);
  const valText = (v: number) => `${prefix}${fmtNum(v, decimals)}${suffix}`;
  const longest = Math.max(valText(leftValue).length, valText(rightValue).length);
  const valSize = fitFontSize({ chars: longest, boxW: cardW * 0.82, boxH: cardH * 0.42, charEm: 0.6, lineHeight: 1, max: Math.min(cardH * 0.4, cardW * 0.3) });
  const labelChars = Math.max(leftLabel.length, rightLabel.length, 4);
  const labSize = Math.max(minFont, fitFontSize({ chars: labelChars, boxW: cardW * 0.82, boxH: cardH * 0.14, charEm: 0.56, max: valSize * 0.32 }));
  const leave = 1 - exit;

  const card = (side: "left" | "right", label: string, value: number, at: number) => {
    const t = expoOut(prog(frame, at, at + 10));
    const count = expoOut(prog(frame, at + 6, at + 26));
    const win = winner === side;
    const lose = winner !== "none" && !win;
    return (
      <div
        style={{
          width: cardW,
          height: cardH,
          boxSizing: "border-box",
          borderRadius: Math.min(cardW, cardH) * 0.07,
          background: win ? withAlpha(accent, 0.12) : withAlpha(color, 0.04),
          border: `1px solid ${win ? withAlpha(accent, 0.55) : withAlpha(color, 0.1)}`,
          boxShadow: win ? `0 0 ${cardH * 0.3}px ${withAlpha(accent, 0.18 * count)}` : undefined,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: valSize * 0.18,
          opacity: t,
          transform: `translateY(${(1 - t) * cardH * 0.08}px)`,
        }}
      >
        <div
          data-21st-slot={`${side}Label`}
          style={{ fontSize: labSize, fontWeight: 500, color: withAlpha(color, 0.6), whiteSpace: portrait ? "normal" : "nowrap", width: cardW * 0.82, textAlign: "center", overflowWrap: "anywhere", lineHeight: 1.2 }}
        >
          {label}
        </div>
        <div
          data-21st-slot={`${side}Value`}
          style={{
            fontSize: valSize,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.045em",
            fontVariantNumeric: "tabular-nums",
            whiteSpace: "nowrap",
            color: win ? color : lose ? withAlpha(color, 0.5) : color,
          }}
        >
          {prefix}
          {fmtNum(value * count, decimals)}
          {suffix ? <span style={{ fontSize: Math.max(minFont, valSize * 0.42), letterSpacing: "-0.01em", marginLeft: valSize * 0.06, color: win ? accent : withAlpha(color, 0.5) }}>{suffix}</span> : null}
        </div>
      </div>
    );
  };

  const div = expoOut(prog(frame, 10, 18));
  const vs = band(frame, 14, 22);
  const vsSize = Math.max(minFont, labSize * 0.9, gap * 0.34);

  return (
    <AbsoluteFill style={{ fontFamily: font, color, opacity: leave, transform: `scale(${1 - exit * 0.04})` }}>
      <div style={{ height: titleH, paddingTop: Math.max(minFont * 0.15, titleSize * 0.16), boxSizing: "border-box", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
        <div
          data-21st-slot="title"
          style={{
            fontSize: titleSize,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            whiteSpace: portrait ? "normal" : "nowrap",
            maxWidth: width * 0.96,
            textAlign: "center",
            lineHeight: 1.2,
            overflowWrap: "anywhere",
            opacity: band(frame, 0, 8),
            transform: `translateY(${(1 - expoOut(prog(frame, 0, 10))) * titleSize * 0.4}px)`,
          }}
        >
          {title}
        </div>
      </div>
      <div style={{ position: "relative", display: "flex", flexDirection: stacked ? "column" : "row", gap, alignItems: "center", justifyContent: "center" }}>
        {card("left", leftLabel, leftValue, 4)}
        {card("right", rightLabel, rightValue, 8)}
        <div
          style={{
            position: "absolute",
            left: stacked ? "10%" : "50%",
            top: stacked ? "50%" : "8%",
            width: stacked ? "80%" : 1,
            height: stacked ? 1 : "84%",
            background: `linear-gradient(${stacked ? "90deg" : "180deg"}, transparent, ${withAlpha(color, 0.28)}, transparent)`,
            transform: stacked ? `scaleX(${div})` : `scaleY(${div})`,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: vsSize * 2.2,
            height: vsSize * 2.2,
            marginLeft: -vsSize * 1.1,
            marginTop: -vsSize * 1.1,
            borderRadius: 99,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: vsSize,
            fontWeight: 600,
            color: withAlpha(color, 0.7),
            background: withAlpha(color, 0.06),
            border: `1px solid ${withAlpha(color, 0.14)}`,
            opacity: vs,
            transform: `scale(${0.85 + 0.15 * vs})`,
          }}
        >
          vs
        </div>
      </div>
    </AbsoluteFill>
  );
};
