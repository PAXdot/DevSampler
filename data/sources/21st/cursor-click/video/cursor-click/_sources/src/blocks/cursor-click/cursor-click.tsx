// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, APPLE_SNAPPY, band, brandFontStack, easeInOut, easeOut, fitFontSize, inkOn, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../kit/index";
import { meta } from "./cursor-click.meta";
import type { schema } from "./cursor-click.schema";

const CLICK = meta.timing.markers.click ?? 38;

const CopyIcon: React.FC<{ size: number; color: string }> = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);
const CheckIcon: React.FC<{ size: number; color: string }> = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Component: React.FC<z.infer<typeof schema>> = ({ label, doneLabel, buttonColor, color, accent, fontFamily, from }) => {
  const { fps, height: stageHeight } = useVideoConfig();
  const { width: w, height: h } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);

  const longest = Math.max(label.length, doneLabel.length) + 3;
  const portrait = w < h;
  const floor = stageHeight / (meta.layout.defaultRegion?.h ?? 0.6) * (portrait ? 0.032 : 0.020);
  const lines = portrait ? Math.ceil(longest * floor * 0.56 / (w * 0.65)) : 1;
  const bh = portrait ? Math.max(floor * (lines * 1.25 + 1), h * 0.54) : Math.max(floor * (lines * 1.25 + 1), Math.min(h * 0.14, w * 0.08));
  const fs = Math.max(floor, fitFontSize({ chars: longest, boxW: w * 0.65, boxH: bh * 0.7, lines, charEm: 0.56, max: portrait ? floor * 1.4 : bh * 0.36 }));
  const done = ramp(frame, [CLICK + 3, CLICK + 9], [0, 1]);
  const ink = inkOn(accent);

  // Button arrives, then gets pressed.
  const bIn = springSnap(frame, fps, 0, APPLE);
  const press = frame >= CLICK ? 1 - springSnap(frame, fps, CLICK + 4, APPLE_SNAPPY) : 0;
  const pressDown = frame >= CLICK && frame < CLICK + 4 ? ramp(frame, [CLICK, CLICK + 3], [0, 1]) : press;
  const btnScale = (0.92 + 0.08 * bIn) * (1 - 0.05 * pressDown);

  // Cursor glides in on a slight arc and lands right of center on the button.
  const start =
    from === "bottom-left" ? { x: w * 0.04, y: h * 1.02 } : from === "right" ? { x: w * 1.02, y: h * 0.42 } : { x: w * 0.96, y: h * 1.02 };
  const target = { x: w / 2 + Math.min(bh * 0.9, w * 0.18), y: h / 2 + bh * 0.12 };
  const g = easeInOut((frame - 6) / 28);
  const drift = easeOut((frame - (CLICK + 14)) / 30);
  const cx = start.x + (target.x - start.x) * g + drift * Math.min(bh * 0.5, w * 0.10);
  const cy = start.y + (target.y - start.y) * g - Math.sin(g * Math.PI) * h * 0.06 + drift * Math.min(bh * 0.4, h * 0.10);
  const cursorScale = 1 - 0.14 * pressDown;
  const ring = ramp(frame, [CLICK + 2, CLICK + 24], [0, 1]);
  const leave = 1 - exit;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "relative", opacity: band(frame, 0, 8) * leave, transform: `scale(${btnScale})` }}>
        {ring > 0 && ring < 1 ? (
          <div
            style={{
              position: "absolute",
              inset: -bh * 0.5 * easeOut(ring),
              borderRadius: bh * 0.28 + bh * 0.5 * easeOut(ring),
              border: `${Math.max(1.5, bh * 0.03)}px solid ${withAlpha(accent, 0.55 * (1 - ring))}`,
            }}
          />
        ) : null}
        <div
          style={{
            position: "relative",
            display: "grid",
            height: bh,
            width: portrait ? w * 0.88 : undefined,
            padding: `0 ${portrait ? w * 0.055 : bh * 0.48}px`,
            borderRadius: portrait ? w * 0.09 : bh * 0.28,
            background: buttonColor,
            boxShadow: `0 ${Math.min(bh * 0.18, w * 0.035)}px ${Math.min(bh * 0.5, w * 0.10)}px ${withAlpha(inkOn(color), 0.35)}, inset 0 0 0 1px ${withAlpha(color, 0.08)}`,
            overflow: "hidden",
            alignItems: "center",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: accent, opacity: done }} />
          {[
            { key: "label", text: label, icon: <CopyIcon size={fs * 1.05} color={color} />, ink: color, o: 1 - done },
            { key: "doneLabel", text: doneLabel, icon: <CheckIcon size={fs * 1.05} color={ink} />, ink, o: done },
          ].map((s) => (
            <div
              key={s.key}
              style={{
                gridArea: "1 / 1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: fs * 0.5,
                opacity: s.o,
                transform: `translateY(${(s.key === "label" ? -done : 1 - done) * fs * 0.6}px)`,
              }}
            >
              {s.icon}
              <span data-21st-slot={s.key} style={{ position: "relative", maxWidth: w * 0.65, fontFamily: font, fontWeight: 600, fontSize: fs, lineHeight: 1.25, letterSpacing: "-0.015em", color: s.ink, whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: portrait ? "anywhere" : undefined }}>
                {s.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: cx,
          top: cy,
          opacity: band(frame, 6, 12) * leave,
          transform: `scale(${cursorScale})`,
          transformOrigin: "0 0",
          filter: `drop-shadow(0 2px 6px ${withAlpha(inkOn(color), 0.35)})`,
        }}
      >
        <svg width={Math.min(bh * 0.56, w * 0.15)} height={Math.min(bh * 0.56, w * 0.15)} viewBox="0 0 24 24">
          <path d="M4 2l6 16 2.6-6.6L19 9z" fill={color} stroke={inkOn(color)} strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
      </div>
    </AbsoluteFill>
  );
};
