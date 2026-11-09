// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { MONO, band, brandFontStack, fitFontSize, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { findWord, textEm } from "../shared";
import { meta } from "./typewriter-caret.meta";
import type { schema } from "./typewriter-caret.schema";

const START = 4;
const LH = 1.18;

export const Component: React.FC<z.infer<typeof schema>> = ({ text, accentWord, color, accent, fontFamily, framesPerChar, caret, typeface, align, monoFontFamily }) => {
  const { width, height, portrait } = useLayout();
  const { frame, outStart } = useEnterExit(meta.timing);
  const mono = typeface === "mono";
  const font = mono ? brandFontStack(monoFontFamily ?? "Geist Mono") : brandFontStack(fontFamily);
  const chars = [...text];
  const n = chars.length;
  const charEm = mono ? 0.62 : Math.max(0.5, textEm(text, -0.02) / Math.max(1, n));

  const boxW = width * 0.92;
  const max = Math.min(height * 0.2, width * (portrait ? 0.12 : 0.075));
  const portraitWords = text.split(/\s+/).filter(Boolean);
  const portraitColumns = portraitWords.length > 8 ? 2 : 1;
  const size = portrait ? fitFontSize({ chars: Math.max(...portraitWords.map(word => word.length), 4), boxW: boxW / portraitColumns, boxH: height * 0.78, charEm, lineHeight: LH, max: Math.min(height * 0.18, height * 0.78 / (Math.max(1, Math.ceil(portraitWords.length / portraitColumns)) * 1.3)), min: height * 0.03125 }) : Math.max(
    ...[1, 2, 3].map((lines) => fitFontSize({ chars: Math.max(n, 8), boxW, boxH: height * 0.86, lines, charEm, lineHeight: LH, max })),
  );

  const typed = Math.max(0, Math.min(n, Math.floor((frame - START) / framesPerChar) + 1));
  const doneAt = START + (n - 1) * framesPerChar;
  const hit = findWord(text, accentWord);
  const hiAt = hit ? START + (hit[1] - 1) * framesPerChar + 4 : 0;
  const hi = hit ? band(frame, hiAt, hiAt + 4) : 0;

  // Solid while typing and just after; then a 16-frame blink.
  const blinkOn = frame < doneAt + 10 || Math.floor((frame - doneAt - 10) / 8) % 2 === 1;
  const leave = ramp(frame, [outStart, outStart + 8], [0, 1]);
  const showCaret = caret !== "none" && frame >= START - 2 && blinkOn && leave < 0.5;

  // Words as flex items so wrapping never moves while the line types out.
  const words: { start: number; text: string }[] = [];
  let i = 0;
  for (const w of text.split(" ")) {
    if (w) words.push({ start: i, text: w });
    i += w.length + 1;
  }
  const anchor = Math.min(typed, n - 1);
  const after = typed >= n;

  const caretEl = (
    <span
      style={{
        position: "absolute",
        top: "0.1em",
        bottom: "0.08em",
        left: after ? "100%" : 0,
        marginLeft: after ? "0.06em" : 0,
        width: caret === "block" ? "0.56em" : "0.07em",
        background: caret === "block" ? withAlpha(accent, 0.85) : accent,
        borderRadius: "0.04em",
      }}
    />
  );

  return (
    <AbsoluteFill style={{ alignItems: align === "center" ? "center" : "flex-start", justifyContent: "center", padding: `0 ${width * 0.04}px` }}>
      <div
        data-21st-slot="text"
        style={{
          maxWidth: boxW,
          display: portrait && portraitColumns === 2 ? "grid" : "flex",
          gridTemplateColumns: portrait && portraitColumns === 2 ? "repeat(2, minmax(0, 1fr))" : undefined,
          flexDirection: portrait ? "column" : "row",
          minHeight: portrait ? height * 0.78 : undefined,
          alignContent: portrait ? "space-between" : undefined,
          alignItems: align === "center" ? "center" : "flex-start",
          flexWrap: portrait ? "nowrap" : "wrap",
          justifyContent: portrait ? "space-between" : align === "center" ? "center" : "flex-start",
          columnGap: `${mono ? 0.6 : 0.26}em`,
          fontFamily: font,
          fontWeight: mono ? 500 : 600,
          fontSize: size,
          lineHeight: LH,
          letterSpacing: mono ? "-0.01em" : "-0.02em",
          color,
          opacity: 1 - leave,
          transform: leave > 0 ? `translateY(${-leave * size * 0.25}px)` : undefined,
        }}
      >
        {words.map((w, wi) => (
          <span key={wi} style={{ display: "inline-flex", flexWrap: portrait ? "wrap" : undefined, maxWidth: boxW / portraitColumns, whiteSpace: "pre" }}>
            {[...w.text].map((ch, ci) => {
              const idx = w.start + ci;
              const inHi = hit && idx >= hit[0] && idx < hit[1];
              return (
                <span
                  key={ci}
                  style={{
                    position: "relative",
                    display: "inline-block",
                    background: inHi && hi > 0 ? withAlpha(accent, 0.3 * hi) : undefined,
                    boxShadow: inHi && hi > 0 ? `0 0 0 0.06em ${withAlpha(accent, 0.3 * hi)}` : undefined,
                  }}
                >
                  <span style={{ visibility: idx < typed ? "visible" : "hidden" }}>{ch}</span>
                  {showCaret && idx === anchor ? caretEl : null}
                </span>
              );
            })}
            {/* The caret parks on a typed space between words. */}
            {showCaret && !after && anchor === w.start + w.text.length && text[anchor] === " " ? (
              <span style={{ position: "relative", display: "inline-block", width: 0 }}>{React.cloneElement(caretEl, { style: { ...caretEl.props.style, left: "0.1em" } })}</span>
            ) : null}
          </span>
        ))}
      </div>
    </AbsoluteFill>
  );
};
