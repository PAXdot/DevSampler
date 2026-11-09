// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, easeOut, expoOut, fitFontSize, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { DirBlur, textEm, useSafeId, wordFitSize } from "../shared";
import { meta } from "./chroma-slam.meta";
import type { schema } from "./chroma-slam.schema";

const AT = 2;
const SLAM = 7;

export const Component: React.FC<z.infer<typeof schema>> = ({ title, eyebrow, color, accent, splitA, splitB, fontFamily, shockwave }) => {
  const { width, height, portrait } = useLayout();
  const { frame, outStart } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const blurId = useSafeId("chroma-blur");

  const n = Math.max(title.length, 5);
  const size = Math.min(wordFitSize(title, width * 0.88, { tracking: -0.045, family: fontFamily }), fitFontSize({
    chars: portrait ? Math.max(...title.split(/\s+/).map(word => word.length), 4) : n,
    boxW: width * 0.88,
    boxH: height * 0.5,
    charEm: Math.max(0.52, textEm(title, -0.045) / n),
    lineHeight: 1.05,
    max: Math.min(height * (portrait ? 0.26 : 0.32), width * (portrait ? 0.32 : 0.12)),
    }));
  const eyeSize = Math.max(portrait ? height * 0.052 : 0, Math.min(size * 0.26, fitFontSize({ chars: eyebrow.length, boxW: width * 0.8, boxH: height * 0.1, charEm: 0.62, max: size * 0.26 })));

  const s = expoOut((frame - AT) / SLAM);
  const leave = easeOut((frame - outStart) / 7);
  const x = (1 - s) * width * 0.08;
  const scale = 1.15 - 0.15 * s;
  const split = (1 - easeOut((frame - AT) / (SLAM + 3))) * size * 0.12 + leave * size * 0.05;
  const smear = (1 - s) * size * 0.14 + leave * size * 0.08;
  const visible = frame >= AT;
  const moving = s < 1 || split > 0 || leave > 0;

  const ghost = (c: string, dx: number): React.CSSProperties => ({
    gridArea: "1 / 1",
    color: withAlpha(c, 0.85),
    transform: `translateX(${dx}px)`,
  });

  const eyeIn = band(frame, AT + 11, AT + 19);
  const lineIn = expoOut((frame - AT - 14) / 8);

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      {moving ? <DirBlur id={blurId} x={smear} /> : null}
      {shockwave
        ? [0, 4].map((d) => {
            const t = ramp(frame, [AT + d, AT + d + 18], [0, 1]);
            if (t <= 0 || t >= 1) return null;
            const r = height * (0.16 + 0.56 * easeOut(t));
            return (
              <div
                key={d}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: r * 2,
                  height: r * 2,
                  marginLeft: -r,
                  marginTop: -r,
                  borderRadius: "50%",
                  border: `${Math.max(1, size * 0.012)}px solid ${withAlpha(accent, (1 - t) * (d ? 0.4 : 0.7))}`,
                }}
              />
            );
          })
        : null}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: size * 0.16, minHeight: portrait ? height * 0.76 : undefined, justifyContent: portrait ? "space-between" : undefined, opacity: 1 - leave }}>
        {eyebrow ? (
          <div
            data-21st-slot="eyebrow"
            style={{
              fontFamily: font,
              fontWeight: 500,
              fontSize: eyeSize,
              letterSpacing: "0.16em",
              color: withAlpha(color, 0.66),
              whiteSpace: "nowrap",
              opacity: eyeIn,
              transform: eyeIn < 1 ? `translateY(${(1 - eyeIn) * eyeSize * 0.6}px)` : undefined,
            }}
          >
            {eyebrow}
          </div>
        ) : null}
        <div
          data-21st-slot="title"
          style={{
            display: "grid",
            fontFamily: font,
            fontWeight: 600,
            fontSize: size,
            lineHeight: 1.05,
            letterSpacing: "-0.045em",
            whiteSpace: portrait ? "pre-wrap" : "nowrap",
            width: portrait ? width * 0.88 : undefined,
            textAlign: "center",
            overflowWrap: "normal",
            visibility: visible ? "visible" : "hidden",
            transform: moving ? `translateX(${x}px) scale(${scale})` : undefined,
            filter: moving && smear > 0.3 ? `url(#${blurId})` : undefined,
          }}
        >
          {split > 0.4 ? (
            <>
              <span style={ghost(splitA, -split)}>{portrait ? title.split(/\s+/).join("\n") : title}</span>
              <span style={ghost(splitB, split)}>{portrait ? title.split(/\s+/).join("\n") : title}</span>
            </>
          ) : null}
          <span style={{ gridArea: "1 / 1", position: "relative", color }}>{portrait ? title.split(/\s+/).join("\n") : title}</span>
        </div>
        <div
          style={{
            width: Math.min(size * 2.4, width * 0.5),
            height: Math.max(2, size * 0.04),
            marginTop: -size * 0.04,
            borderRadius: 999,
            background: `linear-gradient(90deg, ${withAlpha(accent, 0)}, ${accent}, ${withAlpha(accent, 0)})`,
            transform: `scaleX(${lineIn})`,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
