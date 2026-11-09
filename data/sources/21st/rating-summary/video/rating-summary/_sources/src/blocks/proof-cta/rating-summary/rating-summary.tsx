// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, expoOut, fitFontSize, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { wordFitSize } from "../../text/shared";
import { Ground, StarRow, clamp01, countText, fmtInt, prog, px, surfaceFor, typeFloor, useAuthoredFrame } from "../shared";
import { meta } from "./rating-summary.meta";
import type { schema } from "./rating-summary.schema";

const SETTLE = 78;
const FILL: [number, number] = [12, 46];
const SNIP_AT = 46;
const GLINT_EVERY = 90;

export const Component: React.FC<z.infer<typeof schema>> = ({ score, count, countLabel, source, snippets, color, accent, surfaceColor, background, fontFamily, bodyFontFamily, numeralsFontFamily }) => {
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const head = brandFontStack(fontFamily);
  const body = brandFontStack(bodyFontFamily ?? fontFamily);
  const nums = brandFontStack(numeralsFontFamily ?? fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  const wide = aspect === "16:9";
  const value = Math.max(0, Math.min(5, parseFloat(score) || 0));
  const shown = snippets.slice(0, portrait ? 2 : 3);
  const square = aspect === "1:1";

  // Geometry: score block beside the snippets (16:9) or above them.
  const leftW = wide ? W * 0.34 : W * (portrait ? 0.86 : 0.84);
  const rightW = wide ? W * 0.44 : leftW;
  const scoreFs = Math.min(fitFontSize({ chars: score.length + 0.8, boxW: wide ? leftW : leftW * (portrait ? 0.9 : 0.5), boxH: H * (wide ? 0.34 : portrait ? 0.14 : 0.22), charEm: 0.62, lineHeight: 0.9, max: H * 0.4 }), wide ? H * 0.32 : portrait ? H * 0.14 : H * 0.22);
  const starSize = wide ? leftW / 6.4 : portrait ? leftW / 7.6 : leftW * 0.42 / 6;
  const smallFs = Math.max(floor, u * (wide ? 3 : portrait ? 5.4 : 3.2));
  const snipW = rightW;
  const snipPad = u * (portrait ? 3.6 : 2.4);
  const longest = shown.reduce((a, b) => (b.quote.length > a.length ? b.quote : a), "");
  const qFs = Math.max(floor, Math.min(fitFontSize({ chars: longest.length + 2, boxW: snipW - snipPad * 2, boxH: u * 30, lines: 2, charEm: 0.5, lineHeight: 1.32, max: u * (wide ? 2.9 : portrait ? 6 : 3.4) }), wordFitSize(longest, snipW - snipPad * 2, { family: bodyFontFamily })));
  const nameFs = Math.max(floor, qFs * 0.86);

  // Motion.
  const scoreIn = springSnap(f, fps, 0, { damping: 14, stiffness: 120, mass: 0.9 });
  const scoreP = expoOut(prog(f, 4, 42));
  const fillP = expoOut(prog(f, FILL[0], FILL[1]));
  const pop = (i: number) => springSnap(f, fps, 8 + i * 3, { damping: 10, stiffness: 190, mass: 0.6 });
  const countP = expoOut(prog(f, 10, 46));
  const sourceIn = expoOut(prog(f, 30, 42));
  const since = f - SETTLE;
  const glint = since > 0 ? (since % GLINT_EVERY) / 24 : -1;

  const stars = (
    <div style={{ position: "relative" }}>
      <StarRow value={value * fillP} size={starSize} gap={starSize * 0.16} color={accent} empty={withAlpha(color, s.dark ? 0.16 : 0.12)} pop={pop} />
      {glint >= 0 && glint <= 1 ? (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(105deg, transparent ${px(glint * 140 - 30)}%, ${withAlpha(s.dark ? color : surfaceColor, 0.55)} ${px(glint * 140 - 15)}%, transparent ${px(glint * 140)}%)`,
            mixBlendMode: "overlay",
          }}
        />
      ) : null}
    </div>
  );

  const scoreBlock = (
    <div style={{ display: "flex", flexDirection: square ? "row" : "column", alignItems: portrait ? "center" : square ? "center" : "flex-start", gap: u * (portrait ? 2.6 : square ? 4 : 1.8), width: wide ? leftW : undefined }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: scoreFs * 0.06, opacity: prog(f, 0, 6), transform: scoreIn < 1 ? `translateY(${px((1 - scoreIn) * scoreFs * 0.18)}px)` : undefined }}>
        <span data-21st-slot="score" style={{ fontFamily: nums, fontWeight: 600, fontSize: scoreFs, lineHeight: 0.9, letterSpacing: "-0.05em", color: s.ink, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
          {countText(score, scoreP)}
        </span>
        <span style={{ fontFamily: nums, fontWeight: 500, fontSize: Math.max(floor, scoreFs * 0.24), color: s.faint, letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>/ 5</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: portrait ? "center" : "flex-start", gap: u * (portrait ? 2.6 : 1.8) }}>
      {stars}
      <div style={{ display: "flex", flexDirection: "column", alignItems: portrait ? "center" : "flex-start", gap: u * 0.6, textAlign: portrait ? "center" : "left" }}>
        <div style={{ fontFamily: head, fontSize: smallFs * 1.08, fontWeight: 600, color: s.ink, lineHeight: 1.2, fontVariantNumeric: "tabular-nums", opacity: prog(f, 10, 16) }}>
          <span data-21st-slot="count">{fmtInt(count * countP)}</span> <span data-21st-slot="countLabel">{countLabel}</span>
        </div>
        <div data-21st-slot="source" style={{ fontFamily: head, fontSize: smallFs, color: s.muted, lineHeight: 1.25, maxWidth: square ? leftW * 0.5 : leftW, opacity: sourceIn, transform: sourceIn < 1 ? `translateY(${px((1 - sourceIn) * smallFs * 0.4)}px)` : undefined }}>
          {source}
        </div>
      </div>
      </div>
    </div>
  );

  const snippetList = (
    <div style={{ display: "flex", flexDirection: "column", gap: u * (portrait ? 2.4 : 1.8), width: snipW }}>
      {shown.map((sn, i) => {
        const p = springSnap(f, fps, SNIP_AT + i * 8, { damping: 15, stiffness: 140, mass: 0.8 });
        return (
          <div
            key={i}
            style={{
              boxSizing: "border-box",
              padding: `${px(snipPad * 0.9)}px ${px(snipPad)}px`,
              borderRadius: snipPad * 0.8,
              background: s.card,
              boxShadow: s.shadow(u * 0.7),
              display: "flex",
              flexDirection: "column",
              gap: qFs * 0.5,
              opacity: prog(f, SNIP_AT + i * 8, SNIP_AT + i * 8 + 5),
              transform: p < 1 ? (wide ? `translateX(${px((1 - p) * u * 8)}px)` : `translateY(${px((1 - p) * u * 5)}px)`) : undefined,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: qFs * 0.6 }}>
              <span data-21st-slot="snippets" style={{ fontFamily: head, fontWeight: 600, fontSize: nameFs, lineHeight: 1.2, color: s.muted, minWidth: 0 }}>
                {sn.name}
              </span>
              <StarRow value={5} size={nameFs * 0.8} gap={nameFs * 0.1} color={accent} empty={s.line} />
            </div>
            <div data-21st-slot="snippets" style={{ fontFamily: body, fontSize: qFs, lineHeight: 1.32, color: s.ink, letterSpacing: "-0.01em", textWrap: "pretty" }}>
              {`“${sn.quote}”`}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <Ground background={background} color={color} accent={accent} x={wide ? 0.28 : 0.5} y={wide ? 0.5 : 0.28} portrait={portrait} />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: wide ? "row" : "column",
          alignItems: wide ? "center" : portrait ? "center" : "flex-start",
          gap: wide ? W * 0.06 : u * (portrait ? 7 : 5),
        }}
      >
        {scoreBlock}
        {wide ? <div style={{ width: 1, alignSelf: "stretch", background: s.line, opacity: clamp01(prog(f, 36, 48)) }} /> : null}
        {snippetList}
      </div>
    </AbsoluteFill>
  );
};
