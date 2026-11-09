// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { inkOn, APPLE, APPLE_SOFT, band, brandFontStack, easeInOut, fitFontSize, luminance, springSnap, useEnterExit, useLayout, withAlpha } from "../../kit/index";
import { meta } from "./lower-third.meta";
import type { schema } from "./lower-third.schema";

export const Component: React.FC<z.infer<typeof schema>> = ({ name, role, color, accent, fontFamily, plate, align }) => {
  const { fps } = useVideoConfig();
  const { width: w, height: h } = useLayout();
  const portrait = w / h < 1.5;
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);

  const cap = portrait ? Math.min(h * 0.22, w * 0.15) : Math.min(h * 0.1, w * 0.055);
  const nameSize = fitFontSize({ chars: name.length, boxW: w * 0.72, boxH: h * 0.16, charEm: 0.56, max: cap });
  const roleSize = Math.max(portrait ? h * 0.063 : 0, Math.min(nameSize * 0.56, fitFontSize({ chars: role.length, boxW: w * 0.72, boxH: h * 0.1, charEm: 0.52, max: cap * 0.56 })));
  const darkText = luminance(color) < 0.5;

  const barIn = springSnap(frame, fps, 0, APPLE);
  const plateIn = easeInOut((frame - 2) / 16);
  const nameIn = springSnap(frame, fps, 6, APPLE_SOFT);
  const roleIn = springSnap(frame, fps, 14, APPLE);
  const leave = 1 - exit;
  const centered = align === "center";

  return (
    <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: centered ? "center" : "flex-start", padding: `0 ${w * 0.06}px ${h * 0.18}px` }}>
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "stretch",
          gap: nameSize * 0.42,
          minHeight: portrait ? h * 0.73 : undefined,
          maxWidth: w * 0.88,
          padding: plate ? `${nameSize * 0.42}px ${nameSize * 0.62}px ${nameSize * 0.44}px ${nameSize * 0.42}px` : 0,
          opacity: leave,
          transform: `translateX(${-exit * nameSize * 0.8}px)`,
        }}
      >
        {plate ? (
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: nameSize * 0.34,
              background: withAlpha(inkOn(color), darkText ? 0.72 : 0.56),
              border: `1px solid ${withAlpha(color, 0.1)}`,
              backdropFilter: `blur(${nameSize * 0.4}px)`,
              boxShadow: `0 ${nameSize * 0.3}px ${nameSize * 0.9}px ${withAlpha(darkText ? color : inkOn(color), 0.28)}`,
              clipPath: `inset(0 ${(1 - plateIn) * 100}% 0 0 round ${nameSize * 0.34}px)`,
            }}
          />
        ) : null}
        <div
          style={{
            position: "relative",
            width: Math.max(2, nameSize * 0.08),
            borderRadius: 999,
            background: accent,
            boxShadow: `0 0 ${nameSize * 0.3}px ${withAlpha(accent, 0.6)}`,
            transform: `scaleY(${barIn})`,
            transformOrigin: "50% 100%",
          }}
        />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: nameSize * 0.12, justifyContent: portrait ? "space-between" : undefined, minHeight: portrait ? h * 0.73 : undefined, alignItems: "flex-start" }}>
          <div style={{ overflow: "hidden", padding: `${nameSize * 0.15}px ${nameSize * 0.12}px ${nameSize * 0.3}px`, margin: `${-nameSize * 0.15}px ${-nameSize * 0.12}px ${-nameSize * 0.12}px` }}>
            <div
              data-21st-slot="name"
              style={{
                fontFamily: font,
                fontWeight: 600,
                fontSize: nameSize,
                lineHeight: 1.2,
                letterSpacing: "-0.03em",
                color,
                whiteSpace: portrait ? "normal" : "nowrap",
                overflowWrap: "anywhere",
                transform: `translateX(${(1 - nameIn) * -104}%)`,
              }}
            >
              {name}
            </div>
          </div>
          {role ? (
            <div
              data-21st-slot="role"
              style={{
                fontFamily: font,
                fontWeight: 450,
                fontSize: roleSize,
                lineHeight: 1.2,
                letterSpacing: "-0.005em",
                color: withAlpha(color, 0.64),
                whiteSpace: portrait ? "normal" : "nowrap",
                overflowWrap: "anywhere",
                opacity: band(frame, 14, 26),
                transform: `translateX(${(1 - roleIn) * -roleSize * 0.6}px)`,
              }}
            >
              {role}
            </div>
          ) : null}
        </div>
      </div>
    </AbsoluteFill>
  );
};
