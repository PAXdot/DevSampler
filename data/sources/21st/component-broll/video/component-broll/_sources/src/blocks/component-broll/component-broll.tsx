// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, Img, OffthreadVideo, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, APPLE_SOFT, inkOn, band, brandFontStack, fitFontSize, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../kit/index";
import { meta } from "./component-broll.meta";
import { defaults, type schema } from "./component-broll.schema";

const TAU = Math.PI * 2;
const isVideo = (src: string) => /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(src);

/** Stand-in demo: a soft aurora hero with a CTA pair, so the scene reads as a real component before media is added. */
const SampleDemo: React.FC<{ w: number; h: number; stageHeight: number; portrait: boolean; frame: number; accent: string; fps: number; surface: string; ink: string; secondary: string; font: string; serif: string; headline: string; detail: string; primary: string; alternative: string }> = ({ w, h, stageHeight, portrait, frame, accent, fps, surface, ink, secondary, font, serif, headline, detail, primary, alternative }) => {
  const u = Math.min(w, h) / 100;
  const bodySize = Math.max(u * 3, stageHeight * (portrait ? .03125 : .02));
  const t = (frame / (fps * 6)) * TAU;
  const blob = (x: number, y: number, s: number, c: string, a: number) => (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: s * u * 2,
        height: s * u * 2,
        marginLeft: -s * u,
        marginTop: -s * u,
        borderRadius: 999,
        background: `radial-gradient(closest-side, ${withAlpha(c, a)}, transparent)`,
      }}
    />
  );
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", fontFamily: font }}>
      {blob(30 + 6 * Math.sin(t), 38 + 5 * Math.cos(t), 70, accent, 0.55)}
      {blob(70 - 6 * Math.sin(t * 0.8), 58 + 6 * Math.sin(t), 64, secondary, 0.42)}
      {blob(52 + 4 * Math.cos(t * 1.3), 20, 46, `color-mix(in oklch, ${accent}, ${secondary})`, 0.35)}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: u * 5 }}>
        <div style={{ width: portrait ? "84%" : "78%", display: "flex", flexDirection: "column", alignItems: "center", gap: u * 2.4 }}>
          <div data-21st-slot="demoHeadline" style={{ fontSize: portrait ? stageHeight * .041 : u * 9, fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1.02, color: ink, textAlign: "center" }}>
            {headline.split(" ").slice(0, -1).join(" ")} <span style={{ fontFamily: serif, fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.01em" }}>{headline.split(" ").at(-1)}</span>
          </div>
          <div data-21st-slot="demoDetail" style={{ fontSize: bodySize, color: withAlpha(ink, .55), textAlign: "center", lineHeight: 1.35, overflowWrap: "anywhere" }}>{detail}</div>
        </div>
        <div style={{ display: "flex", flexDirection: portrait ? "column" : "row", width: portrait ? "84%" : undefined, gap: u * 2 }}>
          <div data-21st-slot="primaryAction" style={{ minHeight: Math.max(u * 8, bodySize * 1.8), padding: `${bodySize * .4}px ${u * 4}px`, boxSizing: "border-box", justifyContent: "center", textAlign: "center", overflowWrap: "anywhere", lineHeight: 1.2, borderRadius: u * 2, background: ink, color: inkOn(ink), fontSize: bodySize, fontWeight: 600, display: "flex", alignItems: "center" }}>{primary}</div>
          <div data-21st-slot="secondaryAction" style={{ minHeight: Math.max(u * 8, bodySize * 1.8), padding: `${bodySize * .4}px ${u * 4}px`, boxSizing: "border-box", justifyContent: "center", textAlign: "center", overflowWrap: "anywhere", lineHeight: 1.2, borderRadius: u * 2, background: withAlpha(surface, .7), boxShadow: `inset 0 0 0 1px ${withAlpha(ink, .08)}`, color: ink, fontSize: bodySize, fontWeight: 500, display: "flex", alignItems: "center" }}>{alternative}</div>
        </div>
      </div>
    </div>
  );
};

export const Component: React.FC<z.infer<typeof schema>> = ({ video, caption, author, accent, color, background, cardColor, fontFamily, push, demoColor = defaults.demoColor, secondaryColor = defaults.secondaryColor, bodyFontFamily = defaults.bodyFontFamily, serifFontFamily = defaults.serifFontFamily, monoFontFamily = defaults.monoFontFamily, demoHeadline = defaults.demoHeadline, demoDetail = defaults.demoDetail, primaryAction = defaults.primaryAction, secondaryAction = defaults.secondaryAction }) => {
  const { fps } = useVideoConfig();
  const { unit, width, height, aspect } = useLayout();
  const { frame, exit, durationInFrames } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const bodyFont = brandFontStack(bodyFontFamily), serifFont = brandFontStack(serifFontFamily), monoFont = brandFontStack(monoFontFamily);
  const portrait = aspect === "9:16";

  const ratio = aspect === "16:9" ? 16 / 10 : aspect === "9:16" ? (video ? 4 / 5 : 2 / 3) : 4 / 3;
  const maxW = aspect === "16:9" ? width * 0.62 : aspect === "9:16" ? width * 0.86 : width * 0.78;
  const maxH = height * (aspect === "9:16" ? (video ? 0.6 : 0.72) : 0.68);
  const cardW = Math.min(maxW, maxH * ratio);
  const cardH = cardW / ratio;
  const capSize = fitFontSize({ chars: caption.length + 2, boxW: cardW * (portrait ? .96 : .6), boxH: portrait ? height * .10 : unit * 5, lines: portrait ? 2 : 1, charEm: 0.55, max: portrait ? height * .037 : unit * (aspect === "16:9" ? 3.2 : 3.8) });
  const authorSize = fitFontSize({ chars: author.length + 1, boxW: cardW * (portrait ? .96 : .3), boxH: portrait ? height * .08 : unit * 4, lines: portrait ? 2 : 1, charEm: 0.62, max: portrait ? height * .031 : capSize * 0.72 });

  const cIn = springSnap(frame, fps, 0, APPLE_SOFT);
  const lIn = springSnap(frame, fps, 12, APPLE);
  const pushScale = push ? 1 + 0.045 * ramp(frame, [0, durationInFrames], [0, 1]) : 1;
  const leave = 1 - exit;

  const media = video ? (
    isVideo(video) ? (
      <OffthreadVideo src={video} muted style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    ) : (
      <Img src={video} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    )
  ) : (
    <SampleDemo w={cardW} h={cardH} stageHeight={height} portrait={portrait} frame={frame} accent={accent} fps={fps} surface={cardColor} ink={demoColor} secondary={secondaryColor} font={bodyFont} serif={serifFont} headline={demoHeadline} detail={demoDetail} primary={primaryAction} alternative={secondaryAction} />
  );

  return (
    <AbsoluteFill style={{ background, alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 45%, ${withAlpha(accent, 0.16)}, transparent 70%)`,
          opacity: band(frame, 0, 30) * leave,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          width: cardW,
          opacity: leave,
          transform: `translateY(${-exit * unit * 2}px) scale(${1 - exit * 0.02})`,
        }}
      >
        <div
          style={{
            width: cardW,
            height: cardH,
            borderRadius: unit * 1.6,
            overflow: "hidden",
            background: cardColor,
            boxShadow: `0 ${unit * 5}px ${unit * 10}px -${unit * 4}px ${withAlpha(inkOn(cardColor), .6)}, inset 0 0 0 1px ${withAlpha(color, 0.08)}`,
            opacity: band(frame, 0, 10),
            transform: `translateY(${(1 - cIn) * unit * 6}px) scale(${0.94 + 0.06 * cIn})`,
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", inset: 0, transform: `scale(${pushScale})` }}>{media}</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: portrait ? "flex-start" : "center",
            flexDirection: portrait ? "column" : "row",
            gap: unit * 1.4,
            paddingTop: unit * 2.4,
            paddingLeft: unit * 0.4,
            paddingRight: unit * 0.4,
            opacity: band(frame, 12, 24),
            transform: `translateY(${(1 - lIn) * unit * 1.6}px)`,
          }}
        >
          <span data-21st-slot="caption" style={{ fontFamily: font, fontWeight: 600, fontSize: capSize, letterSpacing: "-0.02em", color, whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: "anywhere", maxWidth: "100%" }}>
            {caption}
          </span>
          {author ? (
            <span data-21st-slot="author" style={{ fontFamily: monoFont, fontSize: authorSize, color: withAlpha(color, 0.5), whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: "anywhere", maxWidth: "100%" }}>
              {author}
            </span>
          ) : null}
          <span style={{ marginLeft: "auto", display: "flex" }}>
            <svg width={capSize * 0.8} height={capSize * 0.8} viewBox="0 0 24 24" fill={accent} stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
