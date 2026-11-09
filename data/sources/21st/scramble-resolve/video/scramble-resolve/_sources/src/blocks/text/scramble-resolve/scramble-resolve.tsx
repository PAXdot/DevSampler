// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, random } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, expoOut, fitFontSize, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { familyWidth, textEm } from "../shared";
import { isPortraitFrame, nativeReadingSize, portraitAdvance } from "../portrait-type";
import { meta } from "./scramble-resolve.meta";
import type { schema } from "./scramble-resolve.schema";

const CHARSETS = {
  symbols: "!<>-_\\/[]{}=+*^?#%&$@:;",
  letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  binary: "01",
  hex: "0123456789ABCDEF",
} as const;

const TRACK = 0.16;
const FIRST_LOCK = 8;

export const Component: React.FC<z.infer<typeof schema>> = ({ text, tagline, color, accent, accent2, fontFamily, charset, lockEvery, caps, underline, monoFontFamily }) => {
  const resolvedMono = brandFontStack(monoFontFamily ?? "Geist Mono");
  const { width, height, unit } = useLayout();
  const portrait = isPortraitFrame(width, height), minFont = nativeReadingSize(height, portrait);
  const { frame, outStart } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const word = caps ? text.toUpperCase() : text;
  const chars = [...word];
  const n = Math.max(1, chars.length);
  const pool = CHARSETS[charset];

  const em = textEm(word, TRACK) / n;
  // Portrait stacks two rows only at the space nearest the middle; a single word
  // stays whole on one row (letters never split across rows).
  const spaces = chars.flatMap((ch, i) => (ch === " " ? [i] : []));
  const breakAt = portrait && spaces.length ? spaces.reduce((a, b) => (Math.abs(b - n / 2) < Math.abs(a - n / 2) ? b : a)) : n;
  const rows = breakAt < n ? [{ from: 0, glyphs: chars.slice(0, breakAt) }, { from: breakAt + 1, glyphs: chars.slice(breakAt + 1) }] : [{ from: 0, glyphs: chars }];
  const rowFit = width * 0.9 / Math.max(1, ...rows.map((r) => textEm(r.glyphs.join("")) * familyWidth(fontFamily) * 1.08 + r.glyphs.length * TRACK));
  const size = portrait ? Math.min(rowFit, Math.max(minFont, Math.min(height * .6 / (rows.length > 1 ? 2.2 : 1.6), width * .84 / Math.max(...rows.map((r) => portraitAdvance(r.glyphs.join(""), fontFamily, TRACK)), 1)))) : fitFontSize({ chars: n, boxW: width * 0.92, boxH: height * 0.42, charEm: em, lineHeight: 1.1, max: Math.min(height * 0.3, width * (portrait ? 0.2 : 0.13)) });
  const tagSize = Math.max(minFont, Math.min(
    size * 0.3,
    fitFontSize({ chars: tagline.length, boxW: width * 0.9, boxH: height * 0.12, charEm: 0.52, max: unit * 7 }),
  ));

  const lockEnd = FIRST_LOCK + n * lockEvery;
  const lineIn = expoOut((frame - lockEnd - 2) / 9);
  const tagIn = expoOut((frame - lockEnd - 10) / 12);

  // Exit: letters unlock right to left back into noise, then fade.
  const unlockAt = (i: number) => outStart + (n - 1 - i) * 0.6;
  const fadeOut = ramp(frame, [outStart + 3, outStart + 12], [1, 0]);
  const tagOut = ramp(frame, [outStart, outStart + 6], [1, 0]);

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: portrait && tagline ? "space-between" : "center", gap: size * 0.22, width: width * .94, height: portrait && tagline ? height * .78 : undefined, opacity: fadeOut }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: size * .22 }}>
        <div
          data-21st-slot="text"
          style={{
            display: "flex",
            flexDirection: portrait ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            width: portrait ? width * .92 : undefined,
            fontFamily: font,
            fontWeight: 600,
            fontSize: size,
            lineHeight: 1.1,
            letterSpacing: `${TRACK}em`,
            // The tracking after the last glyph would push the word off center.
            marginRight: `-${TRACK}em`,
            color,
            whiteSpace: "nowrap",
          }}
        >
          {rows.map((row, r) => <div key={r} style={{ display: "flex", flexWrap: "nowrap", flexShrink: 0, justifyContent: "center" }}>{row.glyphs.map((ch, j) => {
            const i = row.from + j;
            const appear = 1 + i * 0.8;
            const lockAt = FIRST_LOCK + (i + 1) * lockEvery;
            const locked = frame >= lockAt && frame < unlockAt(i);
            const visible = frame >= appear;
            const glyph = pool[Math.floor(random(`scramble-${i}-${frame}`) * pool.length)] ?? "#";
            const isSpace = ch === " ";
            return (
              <span key={i} style={{ display: "inline-grid", placeItems: "center", flexShrink: 0 }}>
                <span style={{ gridArea: "1 / 1", visibility: locked ? "visible" : "hidden" }}>{isSpace ? " " : ch}</span>
                {!locked && visible && !isSpace ? (
                  <span
                    style={{
                      gridArea: "1 / 1",
                      fontFamily: resolvedMono,
                      fontWeight: 500,
                      fontSize: "0.82em",
                      letterSpacing: 0,
                      color: withAlpha(accent, 0.55 + 0.35 * band(frame, appear, appear + 3)),
                      opacity: band(frame, appear, appear + 2),
                    }}
                  >
                    {glyph}
                  </span>
                ) : null}
              </span>
            );
          })}</div>)}
        </div>

        {underline ? (
          <div
            style={{
              width: Math.min(size * n * em * 0.7, width * 0.7),
              height: Math.max(2, size * 0.035),
              marginTop: -size * 0.08,
              borderRadius: 999,
              background: `linear-gradient(90deg, transparent, ${accent} 22%, ${accent2} 78%, transparent)`,
              transform: `scaleX(${lineIn * (1 - ramp(frame, [outStart, outStart + 8], [0, 1]))})`,
            }}
          />
        ) : null}

        </div>

        {tagline ? (
          <div
            data-21st-slot="tagline"
            style={{
              fontFamily: font,
              fontWeight: 400,
              fontSize: tagSize,
              letterSpacing: "0.02em",
              color: withAlpha(color, 0.62),
              width: width * .88,
              textAlign: "center",
              whiteSpace: "normal",
              overflowWrap: "anywhere",
              lineHeight: 1.25,
              opacity: tagIn * tagOut,
              transform: tagIn < 1 ? `translateY(${(1 - tagIn) * tagSize * 0.5}px)` : undefined,
            }}
          >
            {tagline}
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
