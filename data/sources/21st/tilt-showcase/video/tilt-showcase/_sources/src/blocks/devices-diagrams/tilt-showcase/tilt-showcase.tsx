// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, inkOn, band, brandFontStack, expoOut, fitFontSize, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Icon } from "../_shared/icons";
import { Media } from "../_shared/media";
import { meta } from "./tilt-showcase.meta";
import { defaults, type schema } from "./tilt-showcase.schema";

const Bar: React.FC<{ w: string | number; h: number; c: string; style?: React.CSSProperties }> = ({ w, h, c, style }) => <div style={{ width: w, height: h, borderRadius: 999, background: c, ...style }} />;

/** A light analytics dashboard drawn from shapes, the stand-in screenshot. */
const SampleDashboard: React.FC<{ w: number; h: number; accent: string; t: number; surface: string; ink: string; secondary: string; font: string }> = ({ w, h, accent, t, surface, ink, secondary, font }) => {
  const u = w / 100;
  const stacked = h > w;
  const lineColor = withAlpha(ink, .10), muted = withAlpha(ink, .55);
  const id = React.useId().replace(/[^a-zA-Z0-9]/g, "");
  const pts = [0.7, 0.62, 0.66, 0.5, 0.56, 0.4, 0.46, 0.3, 0.34, 0.18, 0.22, 0.1];
  const line = pts.map((p, i) => `${i ? "L" : "M"}${(i / (pts.length - 1)) * 100} ${p * 40}`).join(" ");
  const kpis = [
    ["Visitors", "84.2k"],
    ["Revenue", "$48.2k"],
    ["Conversion", "3.9%"],
  ];
  return (
    <div style={{ position: "absolute", inset: 0, background: `color-mix(in srgb, ${surface} 97%, ${ink})`, display: "flex", fontFamily: font, overflow: "hidden" }}>
      <div style={{ width: stacked ? u * 13 : u * 17, background: surface, borderRight: `1px solid ${lineColor}`, padding: `${u * 2.4}px ${u * 1.8}px`, display: "flex", flexDirection: "column", gap: u * 1.6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: u * 1, marginBottom: u * 1.6 }}>
          <div style={{ width: u * 2.6, height: u * 2.6, borderRadius: u * 0.8, background: accent }} />
          <Bar w="50%" h={u * 1.1} c={ink} />
        </div>
        {[0.7, 0.55, 0.62, 0.48, 0.58].map((v, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: u * 1, padding: `${u * 0.9}px ${u * 1}px`, borderRadius: u * 0.8, background: i === 1 ? withAlpha(accent, 0.1) : "transparent" }}>
            <div style={{ width: u * 1.4, height: u * 1.4, borderRadius: u * 0.4, background: i === 1 ? accent : withAlpha(ink, .18) }} />
            <Bar w={`${v * 100}%`} h={u * 0.9} c={i === 1 ? accent : withAlpha(ink, .35)} />
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: `${u * 2.4}px ${u * 3}px`, display: "flex", flexDirection: "column", gap: u * 2 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: u * 2.2, fontWeight: 600, color: ink, letterSpacing: "-0.02em" }}>Overview</div>
          <div style={{ display: "flex", gap: u * 1, alignItems: "center" }}>
            <div style={{ width: u * 16, height: u * 3, borderRadius: u * 0.9, background: surface, border: `1px solid ${lineColor}` }} />
            <div style={{ width: u * 3, height: u * 3, borderRadius: 999, background: `linear-gradient(135deg, ${accent}, ${secondary})` }} />
          </div>
        </div>
        <div style={{ display: "flex", gap: u * 1.6 }}>
          {kpis.map(([k, v], i) => (
            <div key={k} style={{ flex: 1, background: surface, border: `1px solid ${lineColor}`, borderRadius: u * 1.2, padding: u * 1.6 }}>
              <div style={{ fontSize: u * 1.1, color: muted }}>{k}</div>
              <div style={{ fontSize: u * 2.6, fontWeight: 600, color: ink, letterSpacing: "-0.03em", marginTop: u * 0.4 }}>{v}</div>
              <div style={{ display: "inline-block", marginTop: u * 0.6, fontSize: u * 0.95, fontWeight: 600, color: i === 2 ? secondary : accent }}>{i === 2 ? "-0.4%" : `+${12 + i * 6}%`}</div>
            </div>
          ))}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: stacked ? "column" : "row", gap: u * 1.6 }}>
          <div style={{ flex: 2, background: surface, border: `1px solid ${lineColor}`, borderRadius: u * 1.2, padding: u * 1.6, display: "flex", flexDirection: "column" }}>
            <Bar w="22%" h={u * 1} c={ink} />
            <svg viewBox="0 -2 100 44" preserveAspectRatio="none" style={{ flex: 1, width: "100%", marginTop: u * 1.2 }}>
              <defs>
                <linearGradient id={`${id}a`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor={accent} stopOpacity="0.3" />
                  <stop offset="1" stopColor={accent} stopOpacity="0" />
                </linearGradient>
                <clipPath id={`${id}c`}>
                  <rect x="0" y="-5" width={100 * t} height="60" />
                </clipPath>
              </defs>
              {[10, 20, 30].map((y) => (
                <line key={y} x1="0" x2="100" y1={y} y2={y} stroke={lineColor} strokeWidth="0.4" />
              ))}
              <g clipPath={`url(#${id}c)`}>
                <path d={`${line} L100 42 L0 42Z`} fill={`url(#${id}a)`} />
                <path d={line} fill="none" stroke={accent} strokeWidth="1.8" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
          <div style={{ flex: 1, background: surface, border: `1px solid ${lineColor}`, borderRadius: u * 1.2, padding: u * 1.6, display: "flex", flexDirection: "column", gap: u * 1.3 }}>
            <Bar w="40%" h={u * 1} c={ink} />
            {[0.8, 0.62, 0.5, 0.36, 0.24].map((v, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: u * 0.8 }}>
                <div style={{ width: u * 1.8, height: u * 1.8, borderRadius: 999, background: i === 0 ? accent : withAlpha(ink, .18) }} />
                <div style={{ flex: 1, height: u * 0.9, borderRadius: 999, background: withAlpha(ink, .06) }}>
                  <div style={{ width: `${v * 100}%`, height: "100%", borderRadius: 999, background: i === 0 ? accent : withAlpha(ink, .35) }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * A screenshot swings in from a steep angle and rests in a gentle 3D tilt that
 * keeps drifting; a chip floats in front with parallax (research V15, V12).
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ image, chip, chipIcon, tilt, browser, accent, fontFamily, surface = defaults.surface, color = defaults.color, secondary = defaults.secondary, bodyFontFamily = defaults.bodyFontFamily }) => {
  const { fps } = useVideoConfig();
  const { width, height, aspect } = useLayout();
  const { frame, exit, durationInFrames } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily), bodyFont = brandFontStack(bodyFontFamily);
  const portrait = aspect === "9:16";
  const lineColor = withAlpha(color, .10), muted = withAlpha(color, .22);
  const shadowInk = inkOn(surface);

  const bar = browser ? 1 : 0;
  const ratio = portrait ? 9 / 12 : 16 / 10;
  const cardW = Math.min(width * 0.82, height * 0.78 * ratio);
  const barH = cardW * (portrait ? .065 : .035) * bar;
  const shotH = cardW / ratio;
  const cardH = shotH + barH;
  const r = cardW * 0.014;

  const p = expoOut(frame / 18);
  const t = frame / fps;
  const drift = 1.6 * Math.sin(t * 0.55);
  const ry = -tilt + drift - (1 - p) * 26;
  const rx = tilt * 0.45 - drift * 0.35 + (1 - p) * 14;
  const sheen = ramp(frame, [12, 36], [-0.4, 1.4]);
  const chipIn = springSnap(frame, fps, 12, APPLE);
  const chipSize = fitFontSize({ chars: chip.length + 3, boxW: cardW * (portrait ? .86 : .6), boxH: portrait ? height * .22 : cardW * .045, lines: portrait ? 3 : 1, charEm: .55, max: portrait ? height * .065 : cardW * .029 });
  const leave = 1 - exit;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", perspective: cardW * 2.4, opacity: leave }}>
      <div
        style={{
          position: "relative",
          width: cardW,
          height: cardH,
          transformStyle: "preserve-3d",
          transform: `translateY(${(1 - p) * height * 0.08}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${1 - exit * 0.05})`,
          opacity: band(frame, 0, 8),
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: r,
            overflow: "hidden",
            background: surface,
            boxShadow: `0 ${cardW * 0.03}px ${cardW * 0.07}px ${withAlpha(shadowInk, .38)}, 0 0 0 1px ${withAlpha(shadowInk, .08)}`,
          }}
        >
          {browser ? (
            <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: barH, background: `color-mix(in srgb, ${surface} 94%, ${color})`, borderBottom: `1px solid ${lineColor}`, display: "flex", alignItems: "center", gap: barH * 0.22, padding: `0 ${barH * 0.45}px` }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ width: barH * 0.26, height: barH * 0.26, borderRadius: 999, background: muted }} />
              ))}
              <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <div style={{ width: "36%", height: barH * 0.5, borderRadius: barH * 0.16, background: surface, border: `1px solid ${lineColor}` }} />
              </div>
              <div style={{ width: barH * 0.78 }} />
            </div>
          ) : null}
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: shotH, overflow: "hidden" }}>
            <Media src={image} style={portrait ? { objectFit: "contain", background: surface } : undefined} fallback={<SampleDashboard w={cardW} h={shotH} accent={accent} surface={surface} ink={color} secondary={secondary} font={bodyFont} t={ramp(frame, [8, Math.min(60, durationInFrames)], [0.2, 1])} />} />
          </div>
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(105deg, transparent ${sheen * 100 - 18}%, ${withAlpha(inkOn(color), .32)} ${sheen * 100}%, transparent ${sheen * 100 + 18}%)` }} />
        </div>
        {chip ? (
          <div
            style={{
              position: "absolute",
              left: portrait ? 0 : -cardW * .035,
              bottom: -chipSize * 1.2,
              transform: `translateZ(${cardW * 0.12}px) translate(${drift * cardW * 0.004}px, ${(1 - chipIn) * chipSize * 1.4}px) scale(${0.9 + 0.1 * chipIn})`,
              opacity: band(frame, 12, 20),
              display: "flex",
              alignItems: "center",
              gap: chipSize * 0.6,
              padding: `${chipSize * 0.55}px ${chipSize * 0.9}px ${chipSize * 0.55}px ${chipSize * 0.55}px`,
              borderRadius: chipSize * 0.9,
              background: withAlpha(surface, .96),
              boxShadow: `0 ${chipSize * 0.6}px ${chipSize * 2}px ${withAlpha(shadowInk, .28)}, 0 0 0 1px ${withAlpha(shadowInk, .06)}`,
            }}
          >
            <div style={{ width: chipSize * 1.9, height: chipSize * 1.9, borderRadius: chipSize * 0.55, background: accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name={chipIcon} size={chipSize * 1.1} color={inkOn(accent)} strokeWidth={2.2} />
            </div>
            <span data-21st-slot="chip" style={{ fontFamily: font, fontWeight: 600, fontSize: chipSize, letterSpacing: "-0.015em", color, whiteSpace: portrait ? "normal" : "nowrap", maxWidth: portrait ? cardW * .70 : undefined, overflowWrap: "anywhere" }}>
              {chip}
            </span>
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
