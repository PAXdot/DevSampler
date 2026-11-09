// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, Img, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, band, brandFontStack, fitFontSize, inkOn, springSnap, useEnterExit, useLayout, withAlpha } from "../../kit/index";
import { meta } from "./logo-bug.meta";
import type { schema } from "./logo-bug.schema";

export const Component: React.FC<z.infer<typeof schema>> = ({ name, logo, color, accent, fontFamily, opacity, showName }) => {
  const { fps } = useVideoConfig();
  const { width: w, height: h } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);

  const mark = Math.min(h * 0.58, w * 0.22);
  const nameSize = fitFontSize({ chars: name.length, boxW: w - mark * 1.5, boxH: h * 0.4, charEm: 0.56, max: mark * 0.62 });
  const s = springSnap(frame, fps, 0, APPLE);
  const shown = band(frame, 0, 12) * (1 - exit);

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "flex-start" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: mark * 0.36,
          opacity: shown * opacity,
          transform: `translateX(${(1 - s) * -mark * 0.4}px)`,
          filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.3))",
        }}
      >
        {logo ? (
          <Img src={logo} style={{ height: mark, maxWidth: w * 0.5, objectFit: "contain" }} />
        ) : (
          <div
            style={{
              width: mark,
              height: mark,
              borderRadius: mark * 0.28,
              background: `linear-gradient(145deg, ${accent}, ${withAlpha(accent, 0.78)})`,
              boxShadow: `inset 0 0 0 1px ${withAlpha("#ffffff", 0.18)}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: font,
              fontWeight: 700,
              fontSize: mark * 0.56,
              letterSpacing: "-0.04em",
              color: inkOn(accent),
              transform: `scale(${0.85 + 0.15 * s})`,
            }}
          >
            {(name.trim()[0] ?? "").toLocaleUpperCase("en-US")}
          </div>
        )}
        {showName && name ? (
          <span data-21st-slot="name" style={{ fontFamily: font, fontWeight: 600, fontSize: nameSize, letterSpacing: "-0.03em", color, whiteSpace: "nowrap" }}>
            {name}
          </span>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
