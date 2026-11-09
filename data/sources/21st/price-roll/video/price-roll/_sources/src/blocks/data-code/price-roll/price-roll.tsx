// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, spring, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, band, brandFontStack, expoOut, fitFontSize, inkOn, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { dataFontFloor } from "../_shared/code-card";
import { fmtNum, prog } from "../_shared/num";
import { meta } from "./price-roll.meta";
import type { schema } from "./price-roll.schema";

const STRIKE_AT = 12;
const ROLL_AT = 18;
const ROLL = 14;
const DIGIT_STAGGER = 2;

/** One digit column that spins down through a full turn and lands on `d`. */
const Digit: React.FC<{ d: number; t: number; speed: number; size: number; turns: number }> = ({ d, t, speed, size, turns }) => {
  const total = turns * 10 + d;
  const pos = total * t;
  const strip: number[] = [];
  for (let k = 0; k <= total; k++) strip.push(k % 10);
  return (
    <span style={{ display: "inline-block", position: "relative", height: size, width: "0.57em", overflow: "hidden", verticalAlign: "top" }}>
      <span
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          textAlign: "center",
          transform: `translateY(${-pos * size}px)`,
          filter: speed > 0.05 ? `blur(${Math.min(size * 0.06, speed * size * 0.05).toFixed(2)}px)` : undefined,
        }}
      >
        {strip.map((n, k) => (
          <span key={k} style={{ display: "block", height: size, lineHeight: `${size}px` }}>
            {n}
          </span>
        ))}
      </span>
    </span>
  );
};

export const Component: React.FC<z.infer<typeof schema>> = ({ plan, oldPrice, newPrice, currency, period, saveLabel, decimals, color, accent, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width, height, portrait } = useLayout();
  const { frame: rawFrame, durationInFrames, exit } = useEnterExit(meta.timing);
  const minFont = dataFontFloor(height, portrait);
  // Short clips retain the strike, digit roll, and savings reveal before their hold.
  const authoredSettle = ROLL_AT + (fmtNum(newPrice, decimals).replace(/\D/g, "").length - 1) * DIGIT_STAGGER + ROLL + 18;
  const timeScale = Math.min(1, durationInFrames * 0.7 / authoredSettle);
  const frame = rawFrame / timeScale;
  const font = brandFontStack(fontFamily);

  const newText = fmtNum(newPrice, decimals);
  const oldText = `${currency}${fmtNum(oldPrice, decimals)}`;
  const rowChars = currency.length + newText.length + period.length * 0.45 + (portrait ? 0 : oldText.length * 0.5 + 1);
  const size = fitFontSize({ chars: rowChars, boxW: width * 0.92, boxH: height * 0.42, charEm: 0.6, lineHeight: 1, max: Math.min(height * 0.36, width * 0.22) });
  const oldSize = Math.max(minFont, size * 0.42);
  const planSize = Math.max(portrait ? minFont * 1.4 : minFont, fitFontSize({ chars: plan.length, boxW: width * 0.9, boxH: height * 0.1, charEm: 0.55, max: size * 0.2 }));
  const saveSize = Math.max(minFont, fitFontSize({ chars: saveLabel.length + 2, boxW: width * 0.8, boxH: height * 0.1, charEm: 0.56, max: size * 0.17 }));

  const chars = newText.split("");
  let digitIdx = 0;
  const lastDigitAt = ROLL_AT + (chars.filter((c) => /\d/.test(c)).length - 1) * DIGIT_STAGGER;
  const popAt = lastDigitAt + ROLL + 4;
  const popRaw = spring({ frame: frame - popAt, fps, config: { damping: 12, mass: 0.6, stiffness: 170 } });
  const pop = Math.abs(1 - popRaw) < 1e-3 ? 1 : popRaw;
  const strike = expoOut(prog(frame, STRIKE_AT, STRIKE_AT + 8));
  const pIn = springSnap(frame, fps, 0, APPLE);
  const oIn = springSnap(frame, fps, 4, APPLE);
  const nIn = springSnap(frame, fps, ROLL_AT - 2, APPLE);
  const leave = 1 - exit;

  const old = (
    <span
      style={{
        position: "relative",
        fontSize: oldSize,
        fontWeight: 500,
        color: withAlpha(color, 0.45),
        whiteSpace: "nowrap",
        opacity: band(frame, 4, 10),
        transform: `translateY(${(1 - oIn) * oldSize * 0.5}px)`,
        fontVariantNumeric: "tabular-nums",
        alignSelf: portrait ? "center" : "flex-start",
        marginTop: portrait ? 0 : size * 0.12,
      }}
    >
      {oldText}
      <span
        style={{
          position: "absolute",
          left: "-6%",
          width: "112%",
          top: "52%",
          height: Math.max(2, oldSize * 0.08),
          borderRadius: 99,
          background: withAlpha(color, 0.75),
          transform: `scaleX(${strike}) rotate(-8deg)`,
          transformOrigin: "0% 50%",
        }}
      />
    </span>
  );

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", fontFamily: font, color }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: size * 0.16, height: portrait ? height * 0.82 : undefined, justifyContent: portrait ? "space-between" : undefined, opacity: leave, transform: `translateY(${-exit * size * 0.1}px)` }}>
        <div
          data-21st-slot="plan"
          style={{
            fontSize: planSize,
            fontWeight: 500,
            color: withAlpha(color, 0.6),
            whiteSpace: portrait ? "normal" : "nowrap",
            maxWidth: width * 0.9,
            textAlign: "center",
            lineHeight: 1.2,
            overflowWrap: "anywhere",
            opacity: band(frame, 0, 8),
            transform: `translateY(${(1 - pIn) * planSize * 0.5}px)`,
          }}
        >
          {plan}
        </div>
        <div style={{ display: "flex", flexDirection: portrait ? "column" : "row", alignItems: portrait ? "center" : "flex-start", gap: size * 0.22 }}>
          {old}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              fontSize: size,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              whiteSpace: "nowrap",
              fontVariantNumeric: "tabular-nums",
              opacity: band(frame, ROLL_AT - 2, ROLL_AT + 3),
              transform: `translateY(${(1 - nIn) * size * 0.1}px)`,
            }}
          >
            <span data-21st-slot="currency" style={{ fontSize: Math.max(minFont, size * 0.5), lineHeight: 1.25, marginTop: size * 0.08, marginRight: size * 0.04, color: withAlpha(color, 0.7) }}>
              {currency}
            </span>
            {chars.map((c, k) => {
              if (!/\d/.test(c)) return <span key={k}>{c}</span>;
              const at = ROLL_AT + digitIdx * DIGIT_STAGGER;
              digitIdx++;
              const t = expoOut(prog(frame, at, at + ROLL));
              const t1 = expoOut(prog(frame - 1, at, at + ROLL));
              return <Digit key={k} d={Number(c)} t={t} speed={(t - t1) * 20} size={size} turns={1} />;
            })}
            <span data-21st-slot="period" style={{ fontSize: Math.max(minFont, size * 0.24), lineHeight: 1.25, fontWeight: 500, letterSpacing: "-0.01em", alignSelf: "flex-end", marginBottom: size * 0.1, marginLeft: size * 0.06, color: withAlpha(color, 0.5) }}>
              {period}
            </span>
          </div>
        </div>
        <div
          data-21st-slot="saveLabel"
          style={{
            fontSize: saveSize,
            fontWeight: 600,
            whiteSpace: portrait ? "normal" : "nowrap",
            maxWidth: width * 0.9,
            boxSizing: "border-box",
            textAlign: "center",
            overflowWrap: "anywhere",
            lineHeight: 1.2,
            padding: `${saveSize * 0.38}px ${saveSize * 0.9}px`,
            borderRadius: 99,
            background: accent,
            color: inkOn(accent),
            boxShadow: `0 ${saveSize * 0.3}px ${saveSize * 1.4}px ${withAlpha(accent, 0.4)}`,
            opacity: band(frame, popAt, popAt + 3),
            transform: `scale(${Math.max(0, 0.6 + 0.4 * pop)})`,
          }}
        >
          {saveLabel}
        </div>
      </div>
    </AbsoluteFill>
  );
};
