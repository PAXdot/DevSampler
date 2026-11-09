// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, Img, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, band, brandFontStack, fitFontSize, springSnap, useEnterExit, useLayout, withAlpha } from "../../kit/index";
import { meta } from "./logo-end-card.meta";
import type { schema } from "./logo-end-card.schema";

export const Component: React.FC<z.infer<typeof schema>> = ({ logo, name, tagline, url, accent, color, background, fontFamily, serifFontFamily }) => {
  const resolvedSerif = brandFontStack(serifFontFamily ?? "Instrument Serif");
  const { fps } = useVideoConfig();
  const { unit, width, height, portrait } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);

  const markIn = springSnap(frame, fps, 6, APPLE);
  const blur = (1 - band(frame, 6, 22)) * unit * 1.2;
  const nameSize = fitFontSize({ chars: name.length, boxW: width * 0.72, boxH: height * 0.2, charEm: 0.58, lineHeight: 1, max: unit * (portrait ? 14 : 13) });
  const tagSize = fitFontSize({ chars: tagline.length, boxW: width * 0.78, boxH: height * 0.14, lines: 2, charEm: 0.42, lineHeight: 1.15, max: unit * (portrait ? 5.6 : 5) });
  const urlSize = Math.max(height * (portrait ? .03125 : .01875), fitFontSize({ chars: url.length, boxW: width * 0.6, boxH: unit * 4, charEm: 0.56, max: unit * 2.4 }));
  const leave = 1 - exit;

  return (
    <AbsoluteFill style={{ background, alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse ${portrait ? 90 : 46}% ${portrait ? 26 : 40}% at 50% 46%, ${withAlpha(accent, 0.22)}, transparent 70%)`,
          opacity: band(frame, 8, 48) * leave,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: unit * 3.4,
          opacity: leave,
          transform: `translateY(${-unit * 2 - exit * unit * 2}px)`,
        }}
      >
        <div
          style={{
            opacity: band(frame, 6, 20),
            transform: `translateY(${(1 - springSnap(frame, fps, 6)) * unit * 3}px) scale(${0.96 + 0.04 * markIn})`,
            filter: blur > 0.05 ? `blur(${blur}px)` : undefined,
          }}
        >
          {logo ? (
            <Img src={logo} style={{ height: unit * (portrait ? 12 : 14), maxWidth: width * 0.6, objectFit: "contain", display: "block" }} />
          ) : (
            <span data-21st-slot="name" style={{ display: "block", fontFamily: font, fontWeight: 600, fontSize: nameSize, lineHeight: 1, letterSpacing: "-0.05em", color, whiteSpace: "nowrap" }}>
              {name}
            </span>
          )}
        </div>
        {tagline ? (
          <div
            data-21st-slot="tagline"
            style={{
              fontFamily: resolvedSerif,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: tagSize,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              color: withAlpha(color, 0.66),
              textAlign: "center",
              maxWidth: width * 0.78,
              opacity: band(frame, 16, 30),
              transform: `translateY(${(1 - springSnap(frame, fps, 16)) * unit * 2}px)`,
            }}
          >
            {tagline}
          </div>
        ) : null}
      </div>
      {url ? (
        <div
          data-21st-slot="url"
          style={{
            position: "absolute",
            bottom: height * (portrait ? 0.12 : 0.09),
            fontFamily: font,
            fontWeight: 500,
            fontSize: urlSize,
            letterSpacing: "0.01em",
            color: withAlpha(color, 0.42),
            width: width * .84,
            textAlign: "center",
            whiteSpace: "normal",
            overflowWrap: "anywhere",
            lineHeight: 1.25,
            opacity: band(frame, 28, 44) * leave,
          }}
        >
          {url}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
