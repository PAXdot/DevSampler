// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, APPLE_SOFT, band, brandFontStack, fitFontSize, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../kit/index";
import { meta } from "./launch-intro.meta";
import type { schema } from "./launch-intro.schema";

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='7' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")";

export const Component: React.FC<z.infer<typeof schema>> = ({ kicker, product, date, accent, color, background, fontFamily, glow, monoFontFamily }) => {
  const resolvedMono = brandFontStack(monoFontFamily ?? "Geist Mono");
  const { fps } = useVideoConfig();
  const { unit, width, height, portrait } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);

  const words = product.trim().split(/\s+/).filter(Boolean);
  const chars = product.length || 1;
  const size = fitFontSize({
    chars,
    boxW: width * (portrait ? 0.84 : 0.8),
    boxH: height * (portrait ? 0.3 : 0.34),
    lines: chars > 14 || portrait ? 2 : 1,
    charEm: 0.56,
    lineHeight: 1.35,
    max: unit * (portrait ? 17 : 16),
  });
  const labelSize = portrait ? height * 0.035 : unit * 2.3;
  const dateSize = portrait ? height * 0.035 : unit * 2.1;

  // Leave together: drift up, soften, fade.
  const leave = 1 - exit;
  const leaveY = -exit * unit * 4;
  const leaveBlur = exit * unit * 0.8;

  const kIn = springSnap(frame, fps, 4, APPLE);
  const dIn = springSnap(frame, fps, 30, APPLE);
  const lineIn = springSnap(frame, fps, 22, APPLE_SOFT);
  const glowIn = ramp(frame, [0, 46], [0, 1]);

  let li = 0;
  return (
    <AbsoluteFill style={{ background, overflow: "hidden" }}>
      {glow && background !== "transparent" ? (
        <AbsoluteFill
          style={{
            opacity: glowIn * (0.85 + 0.15 * leave),
            background: `radial-gradient(ellipse ${portrait ? 120 : 70}% ${portrait ? 40 : 60}% at 50% ${portrait ? 34 : 18}%, ${withAlpha(accent, 0.34)}, ${withAlpha(accent, 0.1)} 38%, transparent 72%)`,
          }}
        />
      ) : null}
      {background !== "transparent" ? <AbsoluteFill style={{ backgroundImage: GRAIN, opacity: 0.05, mixBlendMode: "overlay" }} /> : null}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          opacity: leave,
          transform: `translateY(${leaveY}px)`,
          filter: leaveBlur > 0.05 ? `blur(${leaveBlur}px)` : undefined,
          padding: `0 ${unit * 8}px`,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: portrait ? "space-between" : undefined, width: width * 0.84, height: portrait ? height * 0.9 : undefined, gap: unit * 3.4 }}>
          {kicker ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: unit * 1.2,
                minHeight: portrait ? labelSize * 1.6 : unit * 5,
                padding: `0 ${unit * 2.2}px 0 ${unit * 1.7}px`,
                borderRadius: 999,
                border: `1px solid ${withAlpha(color, 0.14)}`,
                background: withAlpha(color, 0.04),
                opacity: band(frame, 4, 16),
                transform: `translateY(${(1 - kIn) * unit * 2}px)`,
              }}
            >
              <span
                style={{ width: unit * 1, height: unit * 1, borderRadius: 999, background: accent, boxShadow: `0 0 ${unit * 1.6}px ${withAlpha(accent, 0.9)}` }}
              />
              <span
                data-21st-slot="kicker"
                style={{ fontFamily: font, fontWeight: 500, fontSize: labelSize, lineHeight: 1.35, letterSpacing: "-0.005em", color: withAlpha(color, 0.78), whiteSpace: "nowrap" }}
              >
                {kicker}
              </span>
            </div>
          ) : null}

          <div
            data-21st-slot="product"
            style={{
              fontFamily: font,
              fontWeight: 600,
              fontSize: size,
              lineHeight: 1.35,
              letterSpacing: "-0.045em",
              color,
              textAlign: "center",
              display: "flex",
              flexDirection: portrait ? "column" : "row",
              flexWrap: "wrap",
              justifyContent: "center",
              columnGap: size * 0.24,
              maxWidth: width * (portrait ? 0.84 : 0.8),
            }}
          >
            {words.map((w, wi) => (
              <span key={wi} style={{ display: "inline-flex", justifyContent: "center", overflow: "hidden", paddingTop: size * 0.12, paddingBottom: size * 0.16 }}>
                {[...w].map((ch, ci) => {
                  const at = 10 + (li++) * 1.4;
                  const s = springSnap(frame, fps, at, APPLE);
                  return (
                    <span
                      key={ci}
                      style={{
                        display: "inline-block",
                        transform: `translateY(${(1 - s) * 105}%)`,
                        opacity: band(frame, at, at + 8),
                      }}
                    >
                      {ch}
                    </span>
                  );
                })}
              </span>
            ))}
          </div>

          <div
            style={{
              width: Math.min(size * 3.2, width * 0.5),
              height: Math.max(1, unit * 0.18),
              marginTop: -unit * 1.2,
              background: `linear-gradient(90deg, transparent, ${withAlpha(accent, 0.9)}, transparent)`,
              transform: `scaleX(${lineIn})`,
              opacity: lineIn * 0.9,
            }}
          />

          {date ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: unit * 1.1,
                minHeight: portrait ? dateSize * 1.6 : unit * 4.6,
                padding: `0 ${unit * 1.8}px`,
                borderRadius: unit * 1.1,
                background: withAlpha(color, 0.06),
                border: `1px solid ${withAlpha(color, 0.1)}`,
                opacity: band(frame, 30, 42),
                transform: `translateY(${(1 - dIn) * unit * 1.6}px) scale(${0.96 + 0.04 * dIn})`,
              }}
            >
              <svg width={unit * 2} height={unit * 2} viewBox="0 0 24 24" fill="none" stroke={withAlpha(color, 0.6)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              <span data-21st-slot="date" style={{ fontFamily: resolvedMono, fontWeight: 500, fontSize: dateSize, lineHeight: 1.35, color: withAlpha(color, 0.82), whiteSpace: "nowrap" }}>
                {date}
              </span>
            </div>
          ) : null}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
