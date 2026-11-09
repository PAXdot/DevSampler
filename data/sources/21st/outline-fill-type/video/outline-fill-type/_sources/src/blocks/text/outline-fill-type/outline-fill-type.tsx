// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, expoOut, fitFontSize, ramp, useEnterExit, useLayout } from "../../../kit/index";
import { textEm } from "../shared";
import { meta } from "./outline-fill-type.meta";
import type { schema } from "./outline-fill-type.schema";

const START = 4;
const LH = 1.04;
const TRACK = -0.035;
const PULL = 7;

type Glyph = { ch: string; line: number; x: number; y: number; at: number };

export const Component: React.FC<z.infer<typeof schema>> = ({ line1, line2, color, accent, fontFamily, cameraZoom, charFrames, strokeWidth }) => {
  const { width, height, portrait } = useLayout();
  const { frame, outStart } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const sourceLines = [line1, line2].filter((l) => l.length > 0);
  const lines = portrait ? sourceLines.flatMap(line => line.split(/\s+/).filter(Boolean)) : sourceLines;
  if (lines.length === 0) lines.push(" ");
  const longest = Math.max(...lines.map((l) => l.length), 4);
  const em = Math.max(...lines.map((l) => textEm(l, TRACK) / Math.max(1, l.length)));
  const size = fitFontSize({
    chars: longest,
    boxW: width * 0.9,
    boxH: height * 0.86,
    charEm: em,
    lineHeight: LH * lines.length,
    max: Math.min(height * 0.36, width * (portrait ? 0.42 : 0.13)),
  });

  // Where each letter sits relative to the block center (estimated advances), and when it lands.
  const glyphs: Glyph[] = [];
  lines.forEach((l, li) => {
    const lineW = textEm(l, TRACK) * size;
    const y = portrait && lines.length > 1 ? (li / (lines.length - 1) - 0.5) * height * 0.65 : (li - (lines.length - 1) / 2) * size * LH;
    let x = -lineW / 2;
    for (const ch of l) {
      const w = textEm(ch, TRACK) * size;
      glyphs.push({ ch, line: li, x: x + w / 2, y, at: START + glyphs.length * charFrames });
      x += w;
    }
  });
  const n = glyphs.length;
  const end = START + n * charFrames;

  // Camera: glides along the letter centers while typing, then pulls back to 1x.
  const p = Math.max(0, Math.min(n - 1, (frame - START) / charFrames - 0.5));
  const a = glyphs[Math.floor(p)] ?? glyphs[0]!;
  const b = glyphs[Math.ceil(p)] ?? a;
  const k = p - Math.floor(p);
  const pull = expoOut((frame - end) / PULL);
  const zoom = cameraZoom + (1 - cameraZoom) * pull;
  const tx = (a.x + (b.x - a.x) * k) * (1 - pull);
  const ty = (a.y + (b.y - a.y) * k) * (1 - pull);
  const still = pull >= 1;

  const leave = ramp(frame, [outStart, outStart + 10], [0, 1]);
  const sw = Math.max(1, (size * strokeWidth) / 100);

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: portrait ? height * 0.78 : undefined,
          justifyContent: portrait ? "space-between" : undefined,
          fontFamily: font,
          fontWeight: 600,
          fontSize: size,
          lineHeight: LH,
          letterSpacing: `${TRACK}em`,
          color,
          whiteSpace: "pre",
          transform: still && leave === 0 ? undefined : `translateY(${-leave * size * 0.3}px) scale(${zoom}) translate(${-tx}px, ${-ty}px)`,
          opacity: 1 - leave,
        }}
      >
        {lines.map((l, li) => (
          <div key={li} data-21st-slot={portrait ? li < (line1.trim() ? line1.trim().split(/\s+/).length : 0) ? "line1" : "line2" : li === 0 && line1 ? "line1" : "line2"} style={{ display: "flex" }}>
            {glyphs
              .filter((g) => g.line === li)
              .map((g, gi) => {
                const shown = frame >= g.at;
                const filled = frame >= g.at + charFrames || frame >= end;
                return (
                  <span
                    key={gi}
                    style={{
                      display: "inline-block",
                      visibility: shown ? "visible" : "hidden",
                      color: filled ? color : "transparent",
                      WebkitTextStroke: filled ? undefined : `${sw}px ${accent}`,
                    }}
                  >
                    {g.ch}
                  </span>
                );
              })}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
