// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, Img } from "remotion";
import type { z } from "zod";
import { inkOn, band, brandFontStack, easeOut, expoOut, fitFontSize, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { SceneGround, textEm } from "../shared";
import { meta } from "./text-behind-subject.meta";
import type { schema } from "./text-behind-subject.schema";

const START = 2;
const PER = 5;
const FILL = 4;
const SUBJECT_AT = 10;

/** Sample subject: a glossy accent orb with a contact shadow. Own drawing, no asset. */
const Orb: React.FC<{ d: number; accent: string; highlight: string; shade: string }> = ({ d, accent, highlight, shade }) => (
  <div style={{ position: "relative", width: d, height: d }}>
    <div
      style={{
        position: "absolute",
        left: "8%",
        right: "8%",
        bottom: -d * 0.1,
        height: d * 0.14,
        borderRadius: "50%",
        background: `radial-gradient(closest-side, ${withAlpha(shade, 0.55)}, transparent)`,
        filter: `blur(${d * 0.03}px)`,
      }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "50%",
        background: `radial-gradient(circle at 34% 28%, color-mix(in srgb, ${accent} 8%, ${highlight}) 0%, color-mix(in srgb, ${accent} 55%, ${highlight}) 10%, ${accent} 32%, color-mix(in srgb, ${accent} 55%, ${shade}) 72%, ${shade} 100%)`,
        boxShadow: `inset ${-d * 0.05}px ${-d * 0.07}px ${d * 0.14}px ${withAlpha(shade, 0.5)}, 0 ${d * 0.06}px ${d * 0.2}px ${withAlpha(accent, 0.35)}`,
      }}
    />
    <div
      style={{
        position: "absolute",
        inset: "6%",
        borderRadius: "50%",
        background: `radial-gradient(circle at 70% 82%, ${withAlpha(highlight, 0.28)}, transparent 32%)`,
      }}
    />
  </div>
);

export const Component: React.FC<z.infer<typeof schema>> = ({ word, image, caption, color, accent, background, fontFamily, outlineOnly }) => {
  const { width, height, portrait, unit } = useLayout();
  const { frame, outStart, durationInFrames } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const letters = [...word];
  const n = Math.max(letters.length, 3);
  const size = fitFontSize({
    chars: n,
    boxW: width * 0.94,
    boxH: height * 0.5,
    charEm: Math.max(0.55, textEm(word, -0.05) / n),
    lineHeight: 1,
    max: height * (portrait ? 0.24 : 0.4),
  });
  const capSize = portrait ? height * 0.03125 : Math.min(unit * 3.2, fitFontSize({ chars: caption.length, boxW: width * 0.8, boxH: height * 0.06, charEm: 0.52, max: unit * 3.2 }));

  const rise = expoOut((frame - SUBJECT_AT) / 14);
  const push = 1 + 0.06 * ramp(frame, [0, durationInFrames], [0, 1]);
  const leave = easeOut((frame - outStart) / 9);
  const d = Math.min(height * 0.46, width * (portrait ? 0.7 : 0.42));
  const sw = Math.max(1.5, size * 0.012);

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {background !== "transparent" ? <SceneGround background={background} accent={accent} glow={0.9} y={0.5} portrait={portrait} /> : null}
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity: 1 - leave }}>
        <div
          data-21st-slot="word"
          style={{
            display: "flex",
            marginTop: -height * (portrait ? 0.3 : 0.06),
            fontFamily: font,
            fontWeight: 600,
            fontSize: size,
            lineHeight: 1,
            letterSpacing: "-0.05em",
            whiteSpace: "pre",
          }}
        >
          {letters.map((ch, i) => {
            const at = START + Math.floor(i * Math.min(PER, 20 / Math.max(1, letters.length - 1)));
            const filled = !outlineOnly && frame >= at + FILL;
            return (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  opacity: band(frame, at, at + 2),
                  color: filled ? color : "transparent",
                  WebkitTextStroke: filled ? undefined : `${sw}px ${withAlpha(color, 0.85)}`,
                }}
              >
                {ch}
              </span>
            );
          })}
        </div>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          opacity: band(frame, SUBJECT_AT, SUBJECT_AT + 6) * (1 - leave),
          transform: `translateY(${((1 - rise) * 0.3 - leave * 0.05) * height}px) scale(${push})`,
        }}
      >
        {image ? (
          <Img src={image} style={{ height: portrait ? "52%" : "74%", maxWidth: portrait ? "84%" : "70%", objectFit: "contain", marginTop: height * (portrait ? 0.03 : 0.08) }} />
        ) : (
          <div style={{ marginTop: height * (portrait ? 0.1 : 0.24) }}>
            <Orb d={d} accent={accent} highlight={color} shade={background === "transparent" ? inkOn(color) : background} />
          </div>
        )}
      </AbsoluteFill>
      {caption ? (
        <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "center", paddingBottom: height * (portrait ? 0.1 : 0.07) }}>
          <div
            data-21st-slot="caption"
            style={{
              fontFamily: font,
              fontWeight: 400,
              fontSize: capSize,
              width: portrait ? width * 0.84 : undefined,
              lineHeight: portrait ? 1.25 : undefined,
              letterSpacing: "-0.005em",
              color: withAlpha(color, 0.7),
              whiteSpace: portrait ? "normal" : "nowrap",
              overflowWrap: portrait ? "anywhere" : undefined,
              opacity: band(frame, 30, 40) * (1 - leave),
            }}
          >
            {caption}
          </div>
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
};
