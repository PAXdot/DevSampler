// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, Img, OffthreadVideo, random, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, APPLE_SOFT, inkOn, band, brandFontStack, easeInOut, fitFontSize, springSnap, useEnterExit, useLayout, withAlpha } from "../../kit/index";
import { meta } from "./phone-scroll.meta";
import { defaults, type schema } from "./phone-scroll.schema";

const isVideo = (src: string) => /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(src);

/** A believable light app feed, drawn from shapes, for when no screen is supplied. */
const SampleApp: React.FC<{ w: number; h: number; scroll: number; accent: string; surface: string; ink: string; font: string }> = ({ w, h, scroll, accent, surface, ink, font }) => {
  const u = w / 100;
  const cards = Array.from({ length: 7 }, (_, i) => ({
    h: u * (46 + Math.round(random(`card-h-${i}`) * 26)),
    hue: Math.round(random(`card-hue-${i}`) * 50) - 25,
    bars: 0.45 + random(`card-w-${i}`) * 0.4,
  }));
  const contentH = cards.reduce((n, c) => n + c.h + u * 22, u * 64);
  const y = -scroll * Math.max(0, contentH - h);
  return (
    <div style={{ position: "absolute", inset: 0, background: surface, overflow: "hidden", fontFamily: font }}>
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, transform: `translateY(${y}px)` }}>
        <div style={{ height: u * 30 }} />
        <div style={{ padding: `0 ${u * 6}px`, fontSize: u * 9, fontWeight: 600, letterSpacing: "-0.03em", color: ink }}>Today</div>
        <div style={{ display: "flex", gap: u * 2.4, padding: `${u * 4}px ${u * 6}px ${u * 2}px` }}>
          {[0.2, 0.16, 0.22].map((wd, i) => (
            <div key={i} style={{ height: u * 7, width: `${wd * 100}%`, borderRadius: 999, background: i === 0 ? ink : withAlpha(ink, .12) }} />
          ))}
        </div>
        {cards.map((c, i) => (
          <div key={i} style={{ margin: `${u * 4}px ${u * 5}px 0`, padding: u * 3, borderRadius: u * 6, background: `color-mix(in srgb, ${surface} 96%, ${ink})`, boxShadow: `0 1px 2px ${withAlpha(ink, .06)}, 0 0 0 1px ${withAlpha(ink, .04)}` }}>
            <div
              style={{
                height: c.h,
                borderRadius: u * 4,
                background: `radial-gradient(120% 90% at ${20 + c.bars * 60}% 10%, ${withAlpha(inkOn(accent), .55)}, transparent 55%), radial-gradient(90% 120% at 90% 100%, ${withAlpha(ink, .35)}, transparent 60%), linear-gradient(135deg, ${accent}, color-mix(in oklch, ${accent}, ${surface} ${35 + c.hue}%))`,
              }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: u * 2.6, marginTop: u * 3.2 }}>
              <div style={{ width: u * 7, height: u * 7, borderRadius: 999, background: withAlpha(ink, .12) }} />
              <div style={{ flex: 1 }}>
                <div style={{ height: u * 2.6, width: `${c.bars * 100}%`, borderRadius: 999, background: ink }} />
                <div style={{ height: u * 2.2, width: `${c.bars * 70}%`, borderRadius: 999, background: withAlpha(ink, .18), marginTop: u * 1.6 }} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: u * 14, display: "flex", alignItems: "center", justifyContent: "space-between", padding: `${u * 3}px ${u * 8}px 0`, fontSize: u * 4.2, fontWeight: 600, color: ink, background: `linear-gradient(${surface} 60%, ${withAlpha(surface, 0)})` }}>
        <span>9:41</span>
        <span style={{ display: "flex", gap: u * 1.2, alignItems: "center" }}>
          <span style={{ width: u * 5.6, height: u * 2.8, borderRadius: u * 0.8, border: `${u * 0.4}px solid ${ink}`, display: "inline-block" }} />
        </span>
      </div>
    </div>
  );
};

export const Component: React.FC<z.infer<typeof schema>> = ({ headline, subline, screen, accent, color, background, fontFamily, side, screenBackground = defaults.screenBackground, screenColor = defaults.screenColor, frameColor = defaults.frameColor, bodyFontFamily = defaults.bodyFontFamily }) => {
  const { fps } = useVideoConfig();
  const { unit, width, height, aspect } = useLayout();
  const { frame, exit, outStart } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const bodyFont = brandFontStack(bodyFontFamily);
  const frameInk = inkOn(frameColor);

  const landscape = aspect === "16:9";
  const square = aspect === "1:1";
  const phoneH = landscape ? height * 0.84 : square ? height * 0.88 : height * 0.6;
  const phoneW = phoneH * (9 / 19.5);
  const phoneX = landscape ? (side === "left" ? width * 0.29 : width * 0.71) - phoneW / 2 : (width - phoneW) / 2;
  const phoneY = landscape ? (height - phoneH) / 2 : square ? height * 0.36 : height * 0.33;

  const textW = landscape ? width * 0.38 : width * 0.84;
  const hSize = fitFontSize({ chars: headline.length, boxW: textW, boxH: landscape ? height * 0.36 : height * (square ? 0.17 : 0.14), lines: 2, charEm: 0.55, lineHeight: 1.14, max: unit * (landscape ? 8.6 : square ? 7.4 : 9.6) });
  const sSize = Math.max(aspect === "9:16" ? height * .031 : unit * 2.1, Math.min(hSize * 0.34, unit * 2.8));

  const pIn = springSnap(frame, fps, 0, APPLE_SOFT);
  const hIn = springSnap(frame, fps, 10, APPLE);
  const sIn = springSnap(frame, fps, 18, APPLE);
  const leave = 1 - exit;

  // Scroll the screen through the hold, eased at both ends.
  const scroll = easeInOut((frame - 30) / Math.max(1, outStart - 30));
  const pad = phoneW * 0.034;
  const r = phoneW * 0.165;

  const media = screen ? (
    isVideo(screen) ? (
      <OffthreadVideo src={screen} muted style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    ) : (
      <Img src={screen} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: `50% ${scroll * 100}%` }} />
    )
  ) : (
    <SampleApp w={phoneW - pad * 2} h={phoneH - pad * 2} scroll={scroll} accent={accent} surface={screenBackground} ink={screenColor} font={bodyFont} />
  );

  const textAlign = landscape ? "left" : "center";
  const textLeft = landscape ? (side === "left" ? width * 0.52 : width * 0.1) : (width - textW) / 2;
  const textTop = landscape ? 0 : height * (square ? 0.07 : 0.09);

  return (
    <AbsoluteFill style={{ background, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          left: phoneX + phoneW / 2 - phoneH * 0.6,
          top: phoneY + phoneH * 0.1,
          width: phoneH * 1.2,
          height: phoneH * 0.9,
          background: background === "transparent" ? undefined : `radial-gradient(closest-side, ${withAlpha(accent, 0.55)}, ${withAlpha(accent, 0.14)} 55%, transparent)`,
          opacity: band(frame, 4, 40) * leave,
          filter: `blur(${unit * 2}px)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: phoneX,
          top: phoneY,
          width: phoneW,
          height: phoneH,
          borderRadius: r,
          padding: pad,
          background: `linear-gradient(160deg, color-mix(in srgb, ${frameColor} 82%, ${frameInk}) 0%, ${frameColor} 38%, color-mix(in srgb, ${frameColor} 92%, ${screenColor}) 100%)`,
          boxShadow: `0 ${unit * (background === "transparent" ? 1 : 4)}px ${unit * (background === "transparent" ? 2 : 10)}px ${withAlpha(frameColor, .55)}, inset 0 0 0 ${Math.max(1, phoneW * 0.004)}px ${withAlpha(frameInk, .14)}`,
          opacity: band(frame, 0, 12) * leave,
          transform: `translateY(${(1 - pIn) * unit * 26 + exit * unit * 10}px) scale(${0.97 + 0.03 * pIn})`,
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: r - pad, overflow: "hidden", background: frameColor }}>
          {media}
          <div style={{ position: "absolute", top: phoneW * 0.028, left: "50%", width: phoneW * 0.3, height: phoneW * 0.085, marginLeft: -phoneW * 0.15, borderRadius: 999, background: frameColor }} />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: textLeft,
          top: textTop,
          width: textW,
          height: landscape ? height : undefined,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: landscape ? "flex-start" : "center",
          gap: unit * 2.2,
          opacity: leave,
          transform: `translateY(${-exit * unit * 3}px)`,
        }}
      >
        <div
          data-21st-slot="headline"
          style={{
            fontFamily: font,
            fontWeight: 600,
            fontSize: hSize,
            lineHeight: 1.14,
            letterSpacing: "-0.04em",
            color,
            textAlign,
            textWrap: "balance",
            opacity: band(frame, 10, 22),
            transform: `translateY(${(1 - hIn) * unit * 3}px)`,
          }}
        >
          {headline}
        </div>
        {subline ? (
          <div
            data-21st-slot="subline"
            style={{
              fontFamily: font,
              fontWeight: 400,
              fontSize: sSize,
              lineHeight: 1.4,
              color: withAlpha(color, 0.58),
              textAlign,
              textWrap: "pretty",
              maxWidth: textW * 0.92,
              opacity: band(frame, 18, 30),
              transform: `translateY(${(1 - sIn) * unit * 2}px)`,
            }}
          >
            {subline}
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
