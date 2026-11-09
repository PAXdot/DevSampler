// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, expoOut, fitFontSize, inkOn, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Cursor, decel, pathAt, press } from "../shared/cursor";
import { Icon } from "../shared/icons";
import { palette } from "../shared/theme";
import { meta } from "./cursor-cta.meta";
import type { schema } from "./cursor-cta.schema";

const CLICK = meta.timing.markers.click ?? 32;

export const Component: React.FC<z.infer<typeof schema>> = ({ label, doneLabel, variant, from, accent, theme, fontFamily }) => {
  const { width: w, height: h, unit: u } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const p = palette(theme);

  const portrait = h > w;
  const nativeFont = useVideoConfig().height / (meta.layout.defaultRegion?.h ?? 0.6) * (portrait ? 0.032 : 0.020);
  const bh = portrait ? Math.max(nativeFont * 3.5, h * 0.54) : Math.max(nativeFont * 3.5, Math.min(h * 0.17, w * 0.075));
  const longest = Math.max(label.length, doneLabel.length);
  const fs = Math.max(nativeFont, fitFontSize({ chars: longest + 4, boxW: w * 0.8, boxH: bh * 0.5, charEm: 0.55, max: portrait ? nativeFont * 1.4 : bh * 0.33, lines: portrait ? 2 : 1 }));
  const bw = portrait ? w * 0.88 : Math.min(w * 0.92, longest * fs * 0.55 + fs * 1.6 + bh * 0.9);
  const cx = w / 2;
  const cy = h / 2;
  const target = { x: cx + Math.min(bw * 0.2, w * 0.12), y: cy + bh * 0.12 };
  const start =
    from === "bottom-left" ? { x: -w * 0.04, y: h * 1.06 } : from === "left" ? { x: -w * 0.04, y: h * 0.4 } : from === "right" ? { x: w * 1.04, y: h * 0.42 } : { x: w * 1.04, y: h * 1.06 };
  const away = { x: target.x + (start.x > cx ? 1 : -1) * Math.min(bh * 0.9, w * 0.10), y: target.y + Math.min(bh * 0.8, h * 0.14) };
  const cur = pathAt(frame, [
    { f: 8, ...start },
    { f: CLICK - 4, ...target },
    { f: CLICK + 34, ...away },
  ]);
  const over = frame >= CLICK - 8 && frame < CLICK + 14;
  const hover = Math.min(ramp(frame, [CLICK - 8, CLICK - 3], [0, 1]), 1 - ramp(frame, [CLICK + 10, CLICK + 18], [0, 1]));
  // 3f press to 0.96, then release.
  const dip = frame < CLICK ? 0 : frame < CLICK + 3 ? 1 : ramp(frame, [CLICK + 3, CLICK + 8], [1, 0]);
  const fill = decel((frame - CLICK) / 10);
  const ring = ramp(frame, [CLICK, CLICK + 10], [0, 1]);
  const done = ramp(frame, [CLICK + 4, CLICK + 10], [0, 1]);
  const tick = ramp(frame, [CLICK + 6, CLICK + 14], [0, 1]);
  const bIn = expoOut(frame / 10);
  const leave = 1 - exit;

  const solidBg = variant === "outline" ? "transparent" : accent;
  const ink = variant === "outline" ? (p.dark ? p.ink : accent) : inkOn(accent);
  const doneInk = inkOn(accent);
  const glow = variant === "glow" ? 0.55 + 0.35 * hover : variant === "solid" ? 0.18 * hover : 0;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "relative", opacity: band(frame, 0, 6) * leave, transform: `scale(${(0.94 + 0.06 * bIn) * (1 - 0.04 * dip) * (1 - 0.05 * exit)})` }}>
        {ring > 0 && ring < 1 ? (
          <div
            style={{
              position: "absolute",
              inset: -bh * 0.6 * expoOut(ring),
              borderRadius: bh * 0.5 + bh * 0.6 * expoOut(ring),
              border: `${Math.max(1.5, bh * 0.03)}px solid ${withAlpha(accent, 0.6 * (1 - ring))}`,
            }}
          />
        ) : null}
        <div
          style={{
            position: "relative",
            height: bh,
            width: portrait ? bw : undefined,
            display: "grid",
            alignItems: "center",
            padding: `0 ${portrait ? w * 0.055 : bh * 0.45}px`,
            borderRadius: portrait ? w * 0.09 : bh / 2,
            overflow: "hidden",
            background: solidBg,
            boxShadow: [
              variant === "outline" ? `inset 0 0 0 ${Math.max(1.5, bh * 0.025)}px ${accent}` : `inset 0 1px 0 ${withAlpha(inkOn(accent), 0.28)}, inset 0 -${bh * 0.06}px ${bh * 0.2}px ${withAlpha(accent, 0.12)}`,
              `0 ${Math.min(bh * 0.12, w * 0.035)}px ${Math.min(bh * 0.4, w * 0.10)}px -${Math.min(bh * 0.08, w * 0.025)}px ${withAlpha(p.dark ? p.surface : p.ink, 0.35)}`,
              glow > 0 ? `0 0 ${Math.min(bh * 0.6, w * 0.11)}px ${withAlpha(accent, glow)}` : "",
            ]
              .filter(Boolean)
              .join(", "),
          }}
        >
          {variant === "glow" ? (
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, ${withAlpha(inkOn(accent), 0.22)}, transparent 55%)` }} />
          ) : null}
          <div style={{ position: "absolute", inset: 0, background: inkOn(accent), opacity: 0.08 * hover }} />
          {fill > 0 ? (
            <div
              style={{
                position: "absolute",
                left: target.x - (cx - bw / 2) - bw * 1.2 * fill,
                top: bh / 2 - bw * 1.2 * fill,
                width: bw * 2.4 * fill,
                height: bw * 2.4 * fill,
                borderRadius: "50%",
                background: variant === "outline" ? accent : withAlpha(inkOn(accent), 0.16),
                opacity: variant === "outline" ? 1 : 1 - done * 0.6,
              }}
            />
          ) : null}
          {[
            { key: "label", text: label, ink, o: 1 - done, y: -done },
            { key: "doneLabel", text: doneLabel, ink: variant === "outline" ? doneInk : ink, o: done, y: 1 - done },
          ].map((s) => (
            <div key={s.key} style={{ gridArea: "1 / 1", display: "flex", alignItems: "center", justifyContent: "center", gap: fs * 0.5, opacity: s.o, transform: `translateY(${s.y * fs * 0.8}px)` }}>
              {s.key === "label" ? (
                <Icon name="arrow-right" size={fs * 1.05} color={s.ink} strokeWidth={2.2} style={{ order: 2 }} />
              ) : (
                <svg width={fs * 1.05} height={fs * 1.05} viewBox="0 0 24 24" fill="none" stroke={s.ink} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - tick} />
                </svg>
              )}
              <span data-21st-slot={s.key} style={{ fontFamily: font, fontWeight: 600, fontSize: fs, letterSpacing: "-0.015em", color: s.ink, maxWidth: w * 0.62, lineHeight: 1.25, whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: portrait ? "anywhere" : undefined }}>
                {s.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Cursor fill={inkOn(accent)} stroke={accent} x={cur.x} y={cur.y} size={Math.min(bh * 0.52, w * 0.15)} kind={over ? "hand" : "arrow"} down={press(frame, CLICK)} opacity={band(frame, 8, 12) * leave} />
    </AbsoluteFill>
  );
};
