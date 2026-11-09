// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, Img } from "remotion";
import type { z } from "zod";
import { brandFontStack, expoOut, fitFontSize, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { monogram, prog, px, typed } from "../_shared/motion";
import { meta } from "./polygon-lockup.meta";
import type { schema } from "./polygon-lockup.schema";

/** Regular polygon, pointy top, as SVG points around (cx, cy). */
function polygonPoints(sides: number, cx: number, cy: number, r: number): string {
  const pts: string[] = [];
  for (let i = 0; i < sides; i++) {
    const a = -Math.PI / 2 + (i / sides) * Math.PI * 2;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(" ");
}

/**
 * Hype brand opener: a hairline, a polygon outline drawn on, the mark's two halves
 * slamming in from the sides, a flash, a 1.15 -> 1 settle, then the title types on.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ logo, title, tagline, sides, accent, secondary, color, fontFamily, monoFontFamily }) => {
  const resolvedMono = brandFontStack(monoFontFamily ?? "Geist Mono");
  const { width: w, height: h, portrait } = useLayout();
  const minFont = Math.ceil(h * (portrait ? .03125 : .01875) / .6);
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const S = Math.min(w, h);
  const hasText = Boolean(title || tagline);
  const cx = w / 2;
  const cy = hasText ? h * 0.4 : h / 2;
  const R = S * (hasText ? 0.24 : 0.3);
  const markH = R * 0.98;

  // Beats (30 fps): hairline 0-12, outline 6-34, halves lock 34-38, flash 38, settle 38-46, type 48+.
  const hair = expoOut(prog(frame, 0, 12));
  const hairFade = 1 - 0.7 * prog(frame, 40, 56);
  const outline = prog(frame, 6, 34);
  const slide = expoOut(prog(frame, 34, 38));
  const halfIn = prog(frame, 33, 36);
  const flash = frame >= 38 ? 1 - expoOut(prog(frame, 38, 44)) : 0;
  const settle = frame < 38 ? 1.15 : 1 + 0.15 * (1 - expoOut(prog(frame, 38, 46)));
  const typeStart = 48;
  const shown = typed(title, frame, typeStart, 2);
  const typingDone = typeStart + title.length * 2;
  const caretOn = frame >= typeStart && frame < typingDone + 16 && (frame < typingDone || Math.floor((frame - typingDone) / 6) % 2 === 0);
  const tagIn = prog(frame, typingDone, typingDone + 8);

  const titleSize = Math.max(minFont, fitFontSize({ chars: title.length, boxW: w * 0.9, boxH: h * 0.15, charEm: 0.64, lineHeight: 1, max: S * 0.13 }));
  const tagSize = Math.max(minFont, fitFontSize({ chars: tagline.length, boxW: w * 0.8, boxH: h * 0.06, charEm: 0.8, lineHeight: 1, max: S * 0.04 }));
  const stroke = Math.max(1.5, S * 0.007);
  const leave = 1 - exit;
  const glyph = monogram(title) || "•";
  const gid = `pl-hair-${React.useId().replace(/:/g, "")}`;

  const half = (side: "l" | "r") => {
    const dx = (side === "l" ? -1 : 1) * w * 0.4 * (1 - slide);
    const clip = side === "l" ? "inset(-20% 50% -20% -20%)" : "inset(-20% -20% -20% 50%)";
    const fill = side === "l" ? accent : secondary;
    return (
      <div
        key={side}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: w,
          height: h,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `translate(${px(dx)}px, ${px(cy - h / 2)}px)`,
          clipPath: logo ? undefined : clip,
          opacity: halfIn,
        }}
      >
        {logo ? (
          <Img src={logo} style={{ height: markH, maxWidth: R * 1.6, objectFit: "contain", clipPath: clip }} />
        ) : (
          <span style={{ fontFamily: font, fontWeight: 700, fontSize: markH * 1.42, lineHeight: 1, letterSpacing: "-0.04em", color: fill }}>{glyph}</span>
        )}
      </div>
    );
  };

  return (
    <AbsoluteFill style={{ opacity: leave, transform: `scale(${1 - 0.04 * exit})`, filter: exit > 0.01 ? `blur(${px(exit * S * 0.01)}px)` : undefined }}>
      {/* Flash: a soft radial bloom around the mark, fading to nothing before the region edge. */}
      {flash > 0.001 ? (
        <AbsoluteFill style={{ background: `radial-gradient(ellipse ${R * 2.6}px ${R * 2.2}px at ${cx}px ${cy}px, ${withAlpha("#ffffff", 0.85 * flash)}, ${withAlpha("#ffffff", 0.25 * flash)} 45%, transparent 100%)` }} />
      ) : null}
      <svg width={w} height={h} style={{ position: "absolute", inset: 0, overflow: "visible" }}>
        <defs>
          <linearGradient id={gid} gradientUnits="userSpaceOnUse" x1={w * 0.06} y1={0} x2={w * 0.94} y2={0}>
            <stop offset="0" stopColor={accent} stopOpacity={0} />
            <stop offset="0.5" stopColor={accent} stopOpacity={0.9} />
            <stop offset="1" stopColor={secondary} stopOpacity={0} />
          </linearGradient>
        </defs>
        <line x1={w * 0.06} y1={cy} x2={w * 0.06 + w * 0.88 * hair} y2={cy} stroke={`url(#${gid})`} strokeWidth={Math.max(1, stroke * 0.5)} opacity={hairFade} />
        <polygon
          points={polygonPoints(sides, cx, cy, R)}
          fill="none"
          stroke={accent}
          strokeWidth={stroke}
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray="1 1"
          strokeDashoffset={1 - outline}
          opacity={outline > 0 ? 0.95 : 0}
        />
      </svg>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${settle})`, transformOrigin: `${cx}px ${cy}px`, filter: `drop-shadow(0 0 ${S * 0.03}px ${withAlpha(accent, 0.45)})` }}>
        {half("l")}
        {half("r")}
      </div>
      {hasText ? (
        <div style={{ position: "absolute", left: 0, right: 0, top: cy + R * 1.22, display: "flex", flexDirection: "column", alignItems: "center", gap: S * 0.025 }}>
          {title ? (
            <div data-21st-slot="title" style={{ position: "relative", fontFamily: font, fontWeight: 700, fontSize: titleSize, letterSpacing: "0.06em", color, width: w * .9, textAlign: "center", whiteSpace: "normal", overflowWrap: "anywhere", lineHeight: 1.2 }}>
              <span>{shown}</span>
              <span style={{ position: "relative", display: "inline-block", width: 0 }}>
                {caretOn ? (
                  <span style={{ position: "absolute", left: titleSize * 0.06, top: titleSize * 0.06, width: titleSize * 0.5, height: titleSize * 0.9, background: accent }} />
                ) : null}
              </span>
              <span style={{ opacity: 0 }}>{title.slice(shown.length)}</span>
            </div>
          ) : null}
          {tagline ? (
            <div
              data-21st-slot="tagline"
              style={{ fontFamily: resolvedMono, fontWeight: 500, fontSize: tagSize, lineHeight: 1.25, letterSpacing: "0.12em", color: withAlpha(color, 0.55), width: w * .84, textAlign: "center", whiteSpace: "normal", overflowWrap: "anywhere", opacity: tagIn, transform: `translateY(${px((1 - tagIn) * S * 0.015)}px)` }}
            >
              {tagline}
            </div>
          ) : null}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
