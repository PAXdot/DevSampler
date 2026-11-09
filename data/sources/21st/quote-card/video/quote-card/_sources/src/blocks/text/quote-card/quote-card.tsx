// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, easeOut, expoOut, fitFontSize, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { SceneGround } from "../shared";
import { meta } from "./quote-card.meta";
import type { schema } from "./quote-card.schema";

const Q_AT = 6;
const A_AT = 26;
const S_AT = 56;

/** "3.2x" at progress p -> "1.6x": counts the first number, keeps prefix, suffix, decimals and commas. */
function countUp(stat: string, p: number): string {
  const m = /^([^\d]*)([\d][\d,]*(?:\.\d+)?)(.*)$/.exec(stat);
  if (!m) return stat;
  const [, pre, num, post] = m as unknown as [string, string, string, string];
  const decimals = num.includes(".") ? num.split(".")[1]!.length : 0;
  const target = parseFloat(num.replace(/,/g, ""));
  const v = (target * p).toFixed(decimals);
  const out = num.includes(",") ? Number(v).toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) : v;
  return `${pre}${out}${post}`;
}

export const Component: React.FC<z.infer<typeof schema>> = ({ eyebrow, quote, attribution, stat, statLabel, color, accent, background, fontFamily, monoFontFamily, serifFontFamily }) => {
  const resolvedMono = brandFontStack(monoFontFamily ?? "Geist Mono");
  const resolvedSerif = brandFontStack(serifFontFamily ?? "Instrument Serif");
  const { width, height, portrait, unit, aspect } = useLayout();
  const { frame, outStart } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const wide = aspect === "16:9";
  const hasStat = stat.length > 0;

  const quoteW = width * (wide && hasStat ? 0.56 : 0.82);
  const quoteH = height * (wide ? 0.5 : hasStat ? 0.38 : 0.5);
  const qSize = Math.max(
    ...[2, 3, 4, 5, 6].map((lines) => fitFontSize({ chars: Math.max(quote.length, 20), boxW: quoteW, boxH: quoteH, lines, charEm: 0.5, lineHeight: 1.22, max: unit * (portrait ? 7 : 6.6) })),
  );
  const small = Math.max(portrait ? height * 0.03125 : 0, Math.min(unit * 2.8, qSize * 0.5));
  const statSize = Math.min(unit * (wide ? 16 : 12), fitFontSize({ chars: Math.max(stat.length, 2), boxW: width * (wide ? 0.26 : 0.7), boxH: height * 0.16, charEm: 0.6, max: unit * 16 }));

  const q = easeOut((frame - Q_AT) / 10);
  const statIn = expoOut((frame - S_AT) / 8);
  const count = expoOut((frame - S_AT) / 20);
  const leave = easeOut((frame - outStart) / 9);

  const fit = (s: string, box: number, max: number) => Math.max(portrait ? height * 0.03125 : 0, Math.min(max, fitFontSize({ chars: s.length, boxW: box, boxH: max * 1.4, charEm: 0.6, max })));

  return (
    <AbsoluteFill>
      {background !== "transparent" ? <SceneGround background={background} accent={accent} glow={0.7} x={wide ? 0.8 : 0.5} y={wide ? 0.5 : 0.85} portrait={portrait} /> : null}
      <AbsoluteFill
        style={{
          flexDirection: wide ? "row" : "column",
          alignItems: wide ? "center" : "flex-start",
          justifyContent: portrait ? "space-between" : "center",
          top: portrait ? height * 0.08 : undefined,
          bottom: portrait ? height * 0.08 : undefined,
          height: portrait ? height * 0.84 : undefined,
          gap: wide ? width * 0.06 : height * 0.05,
          padding: `0 ${width * (wide ? 0.08 : 0.09)}px`,
          opacity: 1 - leave,
          transform: leave > 0 ? `translateY(${-leave * unit * 2}px)` : undefined,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: qSize * 0.7, minHeight: portrait ? height * 0.55 : undefined, justifyContent: portrait ? "space-between" : undefined, width: quoteW }}>
          {eyebrow ? (
            <div
              data-21st-slot="eyebrow"
              style={{ fontFamily: font, fontWeight: 500, fontSize: fit(eyebrow, quoteW, small), letterSpacing: "0.12em", color: withAlpha(color, 0.5), opacity: band(frame, 2, 10), whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: "anywhere" }}
            >
              {eyebrow}
            </div>
          ) : null}
          <div style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: -qSize * 0.78,
                top: -qSize * 0.62,
                fontFamily: resolvedSerif,
                fontStyle: "italic",
                fontSize: qSize * 2.4,
                lineHeight: 1,
                color: accent,
                opacity: band(frame, Q_AT, Q_AT + 10) * 0.9,
              }}
            >
              {"“"}
            </span>
            <div
              data-21st-slot="quote"
              style={{
                fontFamily: font,
                fontWeight: 500,
                fontSize: qSize,
                lineHeight: 1.22,
                letterSpacing: "-0.025em",
                color,
                textWrap: "pretty",
                opacity: frame < Q_AT ? 0 : 0.4 + 0.6 * q,
                transform: q < 1 ? `translateY(${(1 - q) * qSize * 0.25}px)` : undefined,
              }}
            >
              {quote}
            </div>
          </div>
          {attribution ? (
            <div
              data-21st-slot="attribution"
              style={{ fontFamily: resolvedMono, fontWeight: 400, fontSize: fit(attribution, quoteW, small), color: withAlpha(color, 0.62), opacity: band(frame, A_AT, A_AT + 8), whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: "anywhere" }}
            >
              {attribution}
            </div>
          ) : null}
        </div>
        {hasStat ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: unit * 1,
              paddingLeft: wide ? width * 0.05 : 0,
              paddingTop: wide ? 0 : height * 0.03,
              borderLeft: wide ? `1px solid ${withAlpha(color, 0.14 * statIn)}` : undefined,
              borderTop: wide ? undefined : `1px solid ${withAlpha(color, 0.14 * statIn)}`,
              width: wide ? undefined : quoteW,
              opacity: ramp(frame, [S_AT, S_AT + 4], [0, 1]),
              transform: statIn < 1 ? `translateY(${(1 - statIn) * unit * 3}px) scale(${0.94 + 0.06 * statIn})` : undefined,
              transformOrigin: "left center",
            }}
          >
            <div
              data-21st-slot="stat"
              style={{
                fontFamily: font,
                fontWeight: 600,
                fontSize: statSize,
                lineHeight: 1,
                letterSpacing: "-0.05em",
                color: accent,
                fontVariantNumeric: "tabular-nums",
                whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: "anywhere",
              }}
            >
              {countUp(stat, count)}
            </div>
            {statLabel ? (
              <div data-21st-slot="statLabel" style={{ fontFamily: font, fontWeight: 400, fontSize: fit(statLabel, wide ? width * 0.26 : quoteW, small * 1.1), color: withAlpha(color, 0.62), whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
                {statLabel}
              </div>
            ) : null}
          </div>
        ) : null}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
