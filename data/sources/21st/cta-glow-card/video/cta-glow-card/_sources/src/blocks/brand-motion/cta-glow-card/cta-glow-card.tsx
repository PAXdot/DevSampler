// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, expoOut, fitFontSize, inkOn, luminance, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { mix, prog, px } from "../_shared/motion";
import { meta } from "./cta-glow-card.meta";
import type { schema } from "./cta-glow-card.schema";

/**
 * End card: a blooming title, a button with an inner glow and the address under it.
 * Each piece fades and rises 8 frames, 6 frames apart, then the card simply holds.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ eyebrow, title, cta, url, accent, color, background, glow, fontFamily, monoFontFamily }) => {
  const resolvedMono = brandFontStack(monoFontFamily ?? "Geist Mono");
  const { width: w, height: h, unit, portrait } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const nativeFont = useVideoConfig().height * (portrait ? 0.032 : 0.020);
  const dark = luminance(background) < 0.4;
  const leave = 1 - exit;

  const step = (i: number) => expoOut(prog(frame, 4 + i * 6, 12 + i * 6));
  const rise = (p: number) => `translateY(${px((1 - p) * unit * 2.4)}px)`;
  const [pE, pT, pC, pU] = [step(0), step(1), step(2), step(3)];

  const titleSize = fitFontSize({ chars: title.length, boxW: w * (portrait ? 0.86 : 0.76), boxH: h * (portrait ? 0.24 : 0.3), lines: 2, charEm: 0.52, lineHeight: 1.04, max: unit * (portrait ? 10.5 : 10) });
  const eyebrowSize = Math.max(nativeFont, fitFontSize({ chars: eyebrow.length, boxW: w * 0.7, boxH: unit * 3, charEm: 0.78, max: unit * 2 }));
  const ctaSize = Math.max(nativeFont, fitFontSize({ chars: cta.length, boxW: w * 0.5, boxH: unit * 5, charEm: 0.55, max: unit * 3 }));
  const urlSize = Math.max(nativeFont, fitFontSize({ chars: url.length, boxW: w * 0.7, boxH: unit * 3, charEm: 0.6, max: unit * 2.2 }));
  const bloom = glow * (dark ? 1 : 0.4);

  return (
    <AbsoluteFill style={{ background, alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse ${portrait ? 95 : 55}% ${portrait ? 32 : 46}% at 50% 46%, ${withAlpha(accent, 0.26 * glow)}, transparent 72%)`,
          opacity: prog(frame, 0, 24) * leave,
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage: background === "transparent" ? undefined : `radial-gradient(${withAlpha(color, dark ? 0.08 : 0.1)} 1px, transparent 1px)`,
          backgroundSize: `${unit * 3}px ${unit * 3}px`,
          WebkitMaskImage: "radial-gradient(ellipse 60% 55% at 50% 50%, transparent 30%, #000 100%)",
          maskImage: "radial-gradient(ellipse 60% 55% at 50% 50%, transparent 30%, #000 100%)",
          opacity: 0.8 * leave,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: unit * (portrait ? 12 : 3), opacity: leave, transform: `scale(${1 - 0.03 * exit})` }}>
        {eyebrow ? (
          <div data-21st-slot="eyebrow" style={{ fontFamily: resolvedMono, fontWeight: 500, fontSize: eyebrowSize, letterSpacing: portrait ? "0.08em" : "0.22em", marginRight: portrait ? "-0.08em" : "-0.22em", color: mix(accent, color, dark ? 0.35 : 0.1), maxWidth: w * 0.86, lineHeight: 1.25, textAlign: "center", whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: portrait ? "anywhere" : undefined, opacity: pE, transform: rise(pE) }}>
            {eyebrow}
          </div>
        ) : null}
        <div
          data-21st-slot="title"
          style={{
            maxWidth: w * (portrait ? 0.86 : 0.76),
            textAlign: "center",
            fontFamily: font,
            fontWeight: 600,
            fontSize: titleSize,
            lineHeight: 1.04,
            letterSpacing: "-0.045em",
            color,
            textWrap: "balance",
            opacity: pT,
            transform: rise(pT),
            textShadow: bloom > 0 ? `0 0 ${px(unit * 3)}px ${withAlpha(color, 0.3 * bloom)}, 0 0 ${px(unit * 8)}px ${withAlpha(accent, 0.45 * bloom)}` : undefined,
          }}
        >
          {title}
        </div>
        {cta ? (
          <div
            style={{
              marginTop: unit * 1.2,
              padding: `${px(ctaSize * 0.72)}px ${px(ctaSize * 1.5)}px`,
              borderRadius: ctaSize * 2,
              background: `linear-gradient(180deg, ${mix(accent, color, 0.14)}, ${accent})`,
              boxShadow: [
                `inset 0 0 ${px(ctaSize * 0.9)}px ${withAlpha(color, 0.35 * glow)}`,
                `inset 0 1px 0 ${withAlpha(color, 0.4)}`,
                `0 0 ${px(ctaSize * 2.4)}px ${withAlpha(accent, 0.55 * glow)}`,
                `0 ${px(ctaSize * 0.3)}px ${px(ctaSize * 0.8)}px ${withAlpha(inkOn(color), 0.25)}`,
              ].join(", "),
              opacity: pC,
              transform: `${rise(pC)} scale(${0.96 + 0.04 * pC})`,
            }}
          >
            <span data-21st-slot="cta" style={{ display: "block", fontFamily: font, fontWeight: 600, fontSize: ctaSize, letterSpacing: "-0.01em", color: inkOn(accent), maxWidth: w * 0.86, lineHeight: 1.25, textAlign: "center", whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: portrait ? "anywhere" : undefined }}>
              {cta}
            </span>
          </div>
        ) : null}
        {url ? (
          <div data-21st-slot="url" style={{ fontFamily: font, fontWeight: 500, fontSize: urlSize, letterSpacing: "0.01em", color: withAlpha(color, 0.5), maxWidth: w * 0.86, lineHeight: 1.25, textAlign: "center", whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: portrait ? "anywhere" : undefined, opacity: pU, transform: rise(pU) }}>
            {url}
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
