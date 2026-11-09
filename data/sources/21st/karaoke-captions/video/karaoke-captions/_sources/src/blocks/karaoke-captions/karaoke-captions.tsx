// Built with Remotion - https://remotion.pro/license
import type { TikTokPage } from "@remotion/captions";
import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE_SNAPPY, band, brandFontStack, fitFontSize, inkOn, springSnap, useLayout, withAlpha } from "../../kit/index";
import type { schema } from "./karaoke-captions.schema";

type Props = z.infer<typeof schema> & {
  /** One caption page, passed by compileDoc. Its Sequence starts at page.startMs. */
  page?: TikTokPage;
  position?: "bottom" | "middle" | "top";
  lines?: 1 | 2;
};

const WORD_MS = 300;

/** Preview page from the sample text: one word every 300 ms. */
function samplePage(text: string): TikTokPage {
  const words = text.split(/\s+/).filter(Boolean);
  return {
    text,
    startMs: 0,
    durationMs: words.length * WORD_MS + 200,
    tokens: words.map((w, i) => ({ text: (i ? " " : "") + w, fromMs: 100 + i * WORD_MS, toMs: 100 + (i + 1) * WORD_MS })),
  };
}

export const Component: React.FC<Props> = ({ color, highlight, fontFamily, style, sample, portraitLayout, page, position = "bottom", lines = 2 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { width, height, portrait } = useLayout();
  const font = brandFontStack(fontFamily);
  const p = page ?? samplePage(sample);
  const nowMs = p.startMs + (frame / fps) * 1000;

  const chars = p.text.trim().length;
  const stack = portrait && portraitLayout === "stack";
  const columns = p.tokens.length > 8 ? 2 : 1;
  const longestWord = Math.max(1, ...p.tokens.map(token => token.text.trim().length));
  const size = fitFontSize({
    chars: stack ? longestWord : chars,
    boxW: width * (stack ? 0.82 / columns : 0.82),
    boxH: height * (stack ? 0.78 / Math.max(1, Math.ceil(p.tokens.length / columns)) : lines === 2 ? 0.2 : 0.11),
    lines: stack ? 1 : lines,
    charEm: 0.56,
    lineHeight: 1.25,
    max: stack ? height * 0.12 : Math.min(width, height) * (portrait ? 0.068 : 0.056),
    min: stack ? height * 0.03125 : undefined,
  });
  const pos: React.CSSProperties = stack ? { justifyContent: "center" } :
    position === "top"
      ? { justifyContent: "flex-start", paddingTop: height * (portrait ? 0.12 : 0.08) }
      : position === "middle"
        ? { justifyContent: "center" }
        : { justifyContent: "flex-end", paddingBottom: height * (portrait ? 0.2 : 0.1) };
  const pop = springSnap(frame, fps, 0, APPLE_SNAPPY);
  const activeInk = inkOn(highlight);

  return (
    <AbsoluteFill style={{ alignItems: "center", ...pos }}>
      <div
        data-21st-slot="sample"
        style={{
          maxWidth: width * 0.84,
          display: stack ? "grid" : "flex",
          gridTemplateColumns: stack ? `repeat(${columns}, minmax(0, 1fr))` : undefined,
          minHeight: stack ? height * 0.76 : undefined,
          width: stack ? width * 0.84 : undefined,
          alignContent: stack ? "space-between" : undefined,
          textAlign: "center",
          flexWrap: lines === 2 ? "wrap" : "nowrap",
          justifyContent: "center",
          rowGap: size * 0.08,
          fontFamily: font,
          fontWeight: 600,
          fontSize: size,
          lineHeight: 1.25,
          letterSpacing: "-0.02em",
          opacity: band(frame, 0, 3),
          transform: `scale(${0.96 + 0.04 * pop})`,
          textShadow: style === "plain" ? "0 2px 14px rgba(0,0,0,0.55)" : "0 1px 10px rgba(0,0,0,0.35)",
        }}
      >
        {p.tokens.map((t, i) => {
          const active = nowMs >= t.fromMs && nowMs < t.toMs;
          const spoken = nowMs >= t.fromMs;
          const at = Math.round(((t.fromMs - p.startMs) / 1000) * fps);
          const s = active ? springSnap(frame, fps, at, APPLE_SNAPPY) : 0;
          const word = t.text.trim();
          return (
            <span key={i} style={{ position: "relative", display: "inline-block", padding: `0 ${size * 0.16}px`, whiteSpace: stack ? "normal" : "nowrap", overflowWrap: "anywhere", maxWidth: "100%" }}>
              {style === "pill" && active ? (
                <span
                  style={{
                    position: "absolute",
                    inset: `${size * 0.02}px 0`,
                    borderRadius: size * 0.2,
                    background: highlight,
                    boxShadow: `0 ${size * 0.08}px ${size * 0.3}px ${withAlpha(highlight, 0.45)}`,
                    transform: `scale(${0.82 + 0.18 * s})`,
                  }}
                />
              ) : null}
              <span
                style={{
                  position: "relative",
                  color: active ? (style === "pill" ? activeInk : highlight) : spoken ? color : withAlpha(color, 0.5),
                  textShadow: style === "pill" && active ? "none" : undefined,
                }}
              >
                {word}
              </span>
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
