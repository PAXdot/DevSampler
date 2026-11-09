// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, inkOn, band, brandFontStack, easeInOut, expoOut, fitFontSize, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Icon, type IconName } from "../_shared/icons";
import { contrastInk, Media, PlaceholderPhoto } from "../_shared/media";
import { meta } from "./iso-stack.meta";
import type { schema } from "./iso-stack.schema";

/** What sits on each plane, by position from the bottom. */
const Plane: React.FC<{ kind: number; w: number; h: number; accent: string; color: string; secondary?: string; surfaceColor?: string; panelColor?: string; font: string; media: string; frame: number }> = ({ kind, w, h, accent, color, secondary, surfaceColor, panelColor, font, media, frame }) => {
  const u = w / 100;
  const tone = (l: number, c = 0.008) => `oklch(from ${accent} ${l} min(c, ${c}) h)`;
  const paper = surfaceColor ?? tone(0.992, 0.003);
  const lightInk = panelColor ?? tone(0.145);
  const dark = surfaceColor ?? tone(0.16, 0.012);
  const darkInk = panelColor ?? tone(0.97, 0.005);
  const shadow = tone(0.045, 0.004);
  const outline: React.CSSProperties = { position: "absolute", inset: 0, borderRadius: u * 3, border: `${Math.max(1, u * 0.35)}px dashed ${withAlpha(color, 0.28)}`, background: withAlpha(color, 0.03) };
  if (kind === 0)
    return (
      <div style={{ position: "absolute", inset: 0, borderRadius: u * 3, overflow: "hidden", background: dark }}>
        <Media src={media} fallback={<PlaceholderPhoto variant={1} accent={accent} />} />
        <div style={{ position: "absolute", left: u * 6, bottom: u * 6, width: u * 14, height: u * 14, borderRadius: 999, background: withAlpha(paper, 0.9), display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="play" size={u * 6} color={lightInk} fill={lightInk} />
        </div>
      </div>
    );
  if (kind === 1) {
    const words = ["layers", "that", "stay", "in", "sync"];
    const hot = Math.floor(frame / 8) % words.length;
    return (
      <div style={outline}>
        <div style={{ position: "absolute", left: u * 8, right: u * 8, top: h * 0.62, padding: `${u * 3}px ${u * 4}px`, borderRadius: u * 3, background: paper, display: "flex", flexWrap: "wrap", gap: u * 2, justifyContent: "center", fontFamily: font, fontWeight: 700, fontSize: u * 6.4, color: lightInk, boxShadow: `0 4px 0 ${withAlpha(shadow, 0.35)}` }}>
          {words.map((wd, i) => (
            <span key={i} style={{ padding: `0 ${u * 1.2}px`, borderRadius: u * 1.2, background: i === hot ? accent : "transparent", color: i === hot ? contrastInk(accent) : lightInk }}>
              {wd}
            </span>
          ))}
        </div>
      </div>
    );
  }
  if (kind === 2)
    return (
      <div style={outline}>
        <div style={{ position: "absolute", right: u * 7, top: u * 8, width: u * 46, padding: u * 4, borderRadius: u * 3, background: withAlpha(dark, 0.92), border: `1px solid ${withAlpha(darkInk, 0.12)}` }}>
          <div style={{ height: u * 2.4, width: "55%", borderRadius: 999, background: withAlpha(darkInk, 0.5) }} />
          <div style={{ display: "flex", alignItems: "flex-end", gap: u * 2, height: u * 20, marginTop: u * 4 }}>
            {[0.35, 0.55, 0.45, 0.8, 1].map((v, i) => (
              <div key={i} style={{ flex: 1, height: `${v * 100}%`, borderRadius: u * 0.8, background: i === 4 ? accent : withAlpha(darkInk, 0.22) }} />
            ))}
          </div>
        </div>
      </div>
    );
  if (kind === 3) {
    const icons: IconName[] = ["play", "message", "globe", "heart"];
    return (
      <div style={{ position: "absolute", inset: 0, borderRadius: u * 3, background: surfaceColor ?? tone(0.984, 0.005), padding: u * 9, display: "flex", flexDirection: "column", gap: u * 6 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: u * 6 }}>
          {icons.map((ic) => (
            <div key={ic} style={{ aspectRatio: "1", borderRadius: u * 5, background: paper, border: `${u * 0.8}px solid ${lightInk}`, boxShadow: `0 ${u * 2.4}px 0 ${lightInk}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name={ic} size={u * 13} color={lightInk} strokeWidth={2.2} />
            </div>
          ))}
        </div>
        <div style={{ height: u * 14, borderRadius: 999, background: lightInk, boxShadow: `0 ${u * 2}px 0 ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", color: paper, fontFamily: font, fontWeight: 600, fontSize: u * 6 }}>
          follow
        </div>
      </div>
    );
  }
  const lines = [0.5, 0.72, 0.4, 0.86, 0.6, 0.3, 0.78, 0.52, 0.66, 0.36];
  return (
    <div style={{ position: "absolute", inset: 0, borderRadius: u * 3, background: surfaceColor ?? tone(0.26, 0.028), padding: u * 8 }}>
      {lines.map((l, i) => (
        <div key={i} style={{ display: "flex", gap: u * 2, marginTop: i ? u * 3.6 : 0, marginLeft: (i % 3) * u * 5 }}>
          <div style={{ height: u * 2.6, width: `${l * 30}%`, borderRadius: 999, background: i % 2 ? secondary ?? accent : accent, opacity: 0.85 }} />
          <div style={{ height: u * 2.6, width: `${l * 40}%`, borderRadius: 999, background: withAlpha(darkInk, 0.35) }} />
        </div>
      ))}
    </div>
  );
};

/**
 * Isometric planes (no perspective) slide in along the plane one by one and
 * float apart as an exploded stack, each with a mono label (research V11).
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ headline, layers, media, spread, secondary, surfaceColor, panelColor, monoFontFamily, accent, color, background, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { unit, width, height, aspect } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const mono = brandFontStack(monoFontFamily ?? "Geist Mono");
  const shadow = `oklch(from ${accent} 0.045 min(c, 0.004) h)`;
  const land = aspect === "16:9";
  const tall = aspect === "9:16";
  const n = layers.length;

  const pw = unit * (land ? 34 : tall ? 50 : 34);
  const phh = pw * 1.25;
  const cx = land ? width * 0.64 : width / 2;
  const cy = land ? height * 0.5 : height * (tall ? 0.6 : 0.6);
  const gap = unit * spread * (1 - easeInOut(exit * 1.4));

  const textW = land ? width * 0.34 : width * 0.84;
  const hSize = fitFontSize({ chars: headline.length, boxW: textW, boxH: height * (land ? 0.34 : 0.16), lines: 2, charEm: 0.55, lineHeight: 1.04, max: unit * (land ? 7.6 : 7) });
  const hIn = springSnap(frame, fps, 6, APPLE);
  const labelSize = Math.min(unit * 3, pw * 0.075);
  const leave = 1 - exit;

  return (
    <AbsoluteFill style={{ background, overflow: "hidden" }}>
      <AbsoluteFill style={{ background: `radial-gradient(ellipse 40% 40% at ${(cx / width) * 100}% ${(cy / height) * 100}%, ${withAlpha(accent, 0.14)}, transparent 70%)`, opacity: band(frame, 0, 30) * leave }} />
      <div
        style={{
          position: "absolute",
          left: cx - pw / 2,
          top: cy - phh / 2,
          width: pw,
          height: phh,
          transformStyle: "preserve-3d",
          transform: `rotateX(55deg) rotateZ(-38deg)`,
        }}
      >
        <div style={{ position: "absolute", inset: -pw * 0.2, background: `radial-gradient(closest-side, ${withAlpha(shadow, 0.5)}, transparent)`, transform: `translateZ(${-((n - 1) / 2) * gap - unit * 2}px)`, opacity: band(frame, 4, 20) * leave }} />
        {layers.map((l, i) => {
          const at = 4 + i * 9;
          const p = expoOut((frame - at) / 10);
          const bob = Math.sin((frame / 60) * Math.PI * 2 + i * 1.3) * unit * 0.25 * p;
          const z = (i - (n - 1) / 2) * gap + bob;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                transformStyle: "preserve-3d",
                transform: `translateZ(${z}px) translate(${(1 - p) * pw * 1.3}px, ${(1 - p) * phh * 0.5}px)`,
                opacity: band(frame, at, at + 4) * Math.min(1, (1 - exit) * 2.5),
              }}
            >
              <Plane kind={i % 5} w={pw} h={phh} accent={accent} color={color} secondary={secondary} surfaceColor={surfaceColor} panelColor={panelColor} font={font} media={media} frame={frame} />
              <div
                data-21st-slot="layers"
                style={{ position: "absolute", left: 0, top: phh + labelSize * 0.8, fontFamily: mono, fontSize: labelSize, color: withAlpha(color, 0.62), whiteSpace: "nowrap", opacity: band(frame, at + 6, at + 12) }}
              >
                {`<${l.text} />`}
              </div>
            </div>
          );
        })}
      </div>
      {headline ? (
        <div
          data-21st-slot="headline"
          style={{
            position: "absolute",
            left: land ? width * 0.08 : (width - textW) / 2,
            width: textW,
            top: land ? (height - hSize * 2.1) / 2 : height * (tall ? 0.09 : 0.07),
            fontFamily: font,
            fontWeight: 600,
            fontSize: hSize,
            lineHeight: 1.04,
            letterSpacing: "-0.045em",
            color,
            textAlign: land ? "left" : "center",
            textWrap: "balance",
            opacity: band(frame, 6, 16) * leave,
            transform: `translateY(${(1 - hIn) * unit * 3 - exit * unit * 2}px)`,
          }}
        >
          {headline}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
