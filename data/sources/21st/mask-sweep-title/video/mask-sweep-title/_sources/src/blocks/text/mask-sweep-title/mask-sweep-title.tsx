// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, easeInOut, fitFontSize, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { textEm } from "../shared";
import { isPortraitFrame, nativeReadingSize, portraitAdvance, portraitWords } from "../portrait-type";
import { meta } from "./mask-sweep-title.meta";
import type { schema } from "./mask-sweep-title.schema";

/** Hard-edged slanted mask: visible between `from`% and `to`% along the gradient line. */
function sweepMask(deg: number, from: number, to: number): string | undefined {
  if (from <= 0 && to >= 100) return undefined;
  return `linear-gradient(${deg}deg, transparent ${from}%, #000 ${from}%, #000 ${to}%, transparent ${to}%)`;
}

const Swept: React.FC<{
  frame: number;
  at: number;
  outStart: number;
  deg: number;
  hairline: string | null;
  slot: string;
  style: React.CSSProperties;
  children: React.ReactNode;
}> = ({ frame, at, outStart, deg, hairline, slot, style, children }) => {
  const reveal = easeInOut((frame - at) / 9) * 100;
  const gone = easeInOut((frame - outStart) / 8) * 100;
  const line = easeInOut((frame - at - 2) / 9) * 100;
  const lineAlpha = band(frame, at + 2, at + 4, at + 10, at + 14);
  const mask = reveal <= 0 ? "linear-gradient(transparent, transparent)" : sweepMask(deg, gone, reveal);
  return (
    <div style={{ position: "relative" }}>
      <div data-21st-slot={slot} style={{ ...style, WebkitMaskImage: mask, maskImage: mask }}>
        {children}
      </div>
      {hairline && lineAlpha > 0 ? (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: lineAlpha,
            background: `linear-gradient(${deg}deg, transparent calc(${line}% - 1px), ${hairline} calc(${line}% - 1px), ${hairline} calc(${line}% + 1px), transparent calc(${line}% + 1px))`,
          }}
        />
      ) : null}
    </div>
  );
};

export const Component: React.FC<z.infer<typeof schema>> = ({ title, subline, color, accent, fontFamily, angle, hairline, align }) => {
  const { width, height } = useLayout();
  const portrait = isPortraitFrame(width, height), minFont = nativeReadingSize(height, portrait);
  const titleRows = portrait ? portraitWords(title) : [title];
  const { frame, outStart } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const deg = 90 + angle;

  const n = Math.max(title.length, 6);
  const charEm = Math.max(0.52, textEm(title, -0.04) / n);
  const max = Math.min(height * 0.32, width * (portrait ? 0.17 : 0.11));
  const size = portrait ? Math.max(minFont, Math.min(height * .65 / (Math.max(1, titleRows.length) * 1.14), width * .84 / Math.max(...titleRows.map(row => portraitAdvance(row, fontFamily, -.02)), 1))) : Math.max(...[1, 2].map((lines) => fitFontSize({ chars: n, boxW: width * 0.9, boxH: height * 0.62, lines, charEm, lineHeight: 1.04, max })));
  const subSize = Math.max(minFont, Math.min(size * 0.36, Math.max(...[1, 2].map((lines) => fitFontSize({ chars: subline.length, boxW: width * 0.86, boxH: height * 0.2, lines, charEm: 0.5, lineHeight: 1.3, max: size * 0.36 })))));
  const center = align === "center";

  return (
    <AbsoluteFill style={{ alignItems: center ? "center" : "flex-start", justifyContent: "center", padding: `0 ${width * 0.04}px` }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: center ? "center" : "flex-start", gap: size * 0.2, maxWidth: width * 0.92 }}>
        <Swept
          frame={frame}
          at={2}
          outStart={outStart}
          deg={deg}
          hairline={hairline ? accent : null}
          slot="title"
          style={{ fontFamily: font, fontWeight: 600, fontSize: size, lineHeight: portrait ? 1.14 : 1.04, whiteSpace: portrait ? "pre-wrap" : "normal", overflowWrap: "anywhere", letterSpacing: "-0.045em", color, textAlign: center ? "center" : "left", padding: "0.04em 0.06em 0.1em" }}
        >
          {titleRows.join("\n")}
        </Swept>
        {subline ? (
          <Swept
            frame={frame}
            at={7}
            outStart={outStart + 1}
            deg={deg}
            hairline={null}
            slot="subline"
            style={{ fontFamily: font, fontWeight: 400, fontSize: subSize, lineHeight: 1.3, width: width * .86, overflowWrap: "anywhere", letterSpacing: "-0.01em", color: withAlpha(color, 0.62), textAlign: center ? "center" : "left" }}
          >
            {subline}
          </Swept>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
