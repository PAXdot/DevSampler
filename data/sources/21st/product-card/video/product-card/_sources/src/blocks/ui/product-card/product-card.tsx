// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, expoOut, fitFontSize, inkOn, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Cursor, Ripple, pathAt, press } from "../shared/cursor";
import { Icon } from "../shared/icons";
import { Media, palette, tint } from "../shared/theme";
import { meta } from "./product-card.meta";
import type { schema } from "./product-card.schema";

const CLICK = meta.timing.markers.click ?? 72;
const POP = { damping: 12, stiffness: 200, mass: 0.6 } as const;

/** Slot-machine digits: each column rolls a full turn and lands, left to right. */
const RollingNumber: React.FC<{ value: string; frame: number; start: number; fs: number; color: string; font: string }> = ({ value, frame, start, fs, color, font }) => (
  <span data-21st-slot="price" style={{ display: "inline-flex", fontFamily: font, fontSize: fs, fontWeight: 600, letterSpacing: "-0.03em", color, lineHeight: 1.25, fontVariantNumeric: "tabular-nums" }}>
    {value.split("").map((ch, i) => {
      if (!/\d/.test(ch)) return <span key={i}>{ch}</span>;
      if (frame >= start + i * 1.5 + 9) return <span key={i} style={{ display: "inline-block", minWidth: "0.62em", textAlign: "center" }}>{ch}</span>;
      const d = Number(ch);
      const t = expoOut((frame - start - i * 1.5) / 9);
      const idx = d + 10 * t; // from d (one turn away) to d + 10
      return (
        <span key={i} style={{ display: "inline-block", height: "1.25em", overflow: "hidden", position: "relative", width: "0.62em" }}>
          <span style={{ position: "absolute", left: 0, top: 0, display: "flex", flexDirection: "column", transform: `translateY(${-idx * 1.25}em)` }}>
            {Array.from({ length: 21 }, (_, k) => (
              <span key={k} style={{ height: "1.25em", flexShrink: 0, textAlign: "center" }}>
                {k % 10}
              </span>
            ))}
          </span>
        </span>
      );
    })}
  </span>
);

/** Stand-in product: a soft-lit sphere lamp on a plinth. */
const SampleProduct: React.FC<{ w: number; h: number; accent: string; frame: number; surface: string; ink: string }> = ({ w, h, accent, frame, surface, ink }) => {
  const s = Math.min(w, h);
  const glow = 0.5 + 0.5 * ramp(frame, [10, 40], [0, 1]);
  return (
    <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 70% 60% at 50% 40%, ${withAlpha(accent, 0.28)}, transparent 70%), ${surface}` }}>
      <div style={{ position: "absolute", left: "50%", top: "74%", width: s * 0.62, height: s * 0.09, marginLeft: -s * 0.31, borderRadius: "50%", background: `radial-gradient(closest-side, ${withAlpha(ink, 0.32)}, transparent)` }} />
      <div style={{ position: "absolute", left: "50%", top: "62%", width: s * 0.06, height: s * 0.13, marginLeft: -s * 0.03, background: `linear-gradient(90deg, ${withAlpha(ink, 0.4)}, ${surface}, ${withAlpha(ink, 0.4)})`, borderRadius: s * 0.01 }} />
      <div style={{ position: "absolute", left: "50%", top: "73%", width: s * 0.3, height: s * 0.045, marginLeft: -s * 0.15, borderRadius: "50%", background: `linear-gradient(180deg, ${surface}, ${withAlpha(ink, 0.3)})` }} />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "38%",
          width: s * 0.44,
          height: s * 0.44,
          marginLeft: -s * 0.22,
          marginTop: -s * 0.22,
          borderRadius: "50%",
          background: `radial-gradient(circle at 36% 30%, ${surface} 0%, ${withAlpha(surface, 0.95)} 22%, ${withAlpha(accent, 0.55)} 70%, ${withAlpha(accent, 0.85)} 100%)`,
          boxShadow: `0 0 ${s * 0.18 * glow}px ${withAlpha(accent, 0.45 * glow)}, inset -${s * 0.03}px -${s * 0.04}px ${s * 0.08}px ${withAlpha(ink, 0.18)}`,
        }}
      />
    </div>
  );
};

export const Component: React.FC<z.infer<typeof schema>> = ({ image, eyebrow, title, price, oldPrice, currency, chips, cta, doneLabel, theme, accent, background, fontFamily, strikeColor, discountColor, surfaceColor, textColor }) => {
  const { fps } = useVideoConfig();
  const { width: w, height: h, unit: u, aspect } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const p = palette(theme, { surfaceColor, textColor });
  const portraitLayout = h > w;
  const nativeFont = useVideoConfig().height * (portraitLayout ? 0.032 : 0.020);
  const stacked = aspect === "9:16";

  const cardW = stacked ? w * 0.90 : Math.min(w * (aspect === "16:9" ? 0.74 : 0.88), h * 1.6);
  const cardH = stacked ? h * 0.90 : Math.min(h * 0.76, cardW * (aspect === "16:9" ? 0.54 : 0.62));
  const cardX = (w - cardW) / 2;
  const cardY = (h - cardH) / 2;
  const pad = Math.min(cardW, cardH) * 0.07;
  const img = stacked ? { w: cardW, h: cardH * 0.34 } : { w: cardW * 0.48, h: cardH };
  const det = stacked ? { x: pad, y: img.h + pad, w: cardW - pad * 2, h: cardH - img.h - pad * 2 } : { x: img.w + pad, y: pad, w: cardW - img.w - pad * 2, h: cardH - pad * 2 };
  const ctaH = Math.max(nativeFont * (stacked ? 2.95 : 2.5), Math.min(det.h * 0.17, u * 9));
  const base = Math.min(u * 3.2, det.h * 0.07);
  const eyeFs = Math.max(nativeFont, fitFontSize({ chars: eyebrow.length + 2, boxW: det.w, boxH: base, charEm: 0.55, max: base * 0.82 }));
  const titleFs = Math.max(nativeFont, fitFontSize({ chars: title.length, boxW: det.w, boxH: det.h * 0.26, lines: 2, charEm: 0.55, lineHeight: 1.05, max: base * 2.1 }));
  const priceStr = `${currency}${price.toLocaleString("en-US")}`;
  const oldStr = oldPrice > 0 ? `${currency}${oldPrice.toLocaleString("en-US")}` : "";
  const priceFs = Math.max(nativeFont * 1.6, fitFontSize({ chars: priceStr.length + oldStr.length * 0.6 + 6, boxW: det.w, boxH: base * 2.2, charEm: 0.62, max: base * 1.9 }));
  const chipFs = Math.max(nativeFont, fitFontSize({ chars: Math.max(1, ...chips.map((c) => c.length)) * Math.max(1, chips.length) + chips.length * 4, boxW: det.w, boxH: base * 1.2, charEm: 0.56, max: base * 0.85 }));
  const ctaFs = Math.max(nativeFont, fitFontSize({ chars: Math.max(cta.length, doneLabel.length) + 4, boxW: det.w * 0.8, boxH: ctaH * 0.42, charEm: 0.55, max: ctaH * 0.34 }));

  const cIn = expoOut(frame / 12);
  const leave = 1 - exit;
  const rise = (t: number) => ({ opacity: band(frame, t, t + 6), transform: `translateY(${(1 - expoOut((frame - t) / 6)) * base * 0.5}px)` });
  const strike = ramp(frame, [28, 34], [0, 1]);
  const save = oldPrice > price && price > 0 ? Math.round((1 - price / oldPrice) * 100) : 0;

  const cta0 = { x: cardX + det.x, y: cardY + det.y + det.h - ctaH };
  const target = { x: cta0.x + det.w * 0.62, y: cta0.y + ctaH * 0.58 };
  const keys = [
    { f: CLICK - 22, x: w * 1.03, y: h * 1.06 },
    { f: CLICK - 3, x: target.x, y: target.y },
    { f: CLICK + 30, x: target.x + u * 4, y: target.y + u * 5 },
  ];
  const cur = pathAt(frame, keys, 0.16);
  const dip = press(frame, CLICK);
  const done = ramp(frame, [CLICK + 3, CLICK + 9], [0, 1]);
  const hoverCta = ramp(frame, [CLICK - 6, CLICK - 2], [0, 1]);

  return (
    <AbsoluteFill style={{ background, overflow: "hidden" }}>
      <AbsoluteFill style={{ background: `radial-gradient(ellipse 50% 45% at 25% 30%, ${withAlpha(accent, 0.16)}, transparent 70%)`, opacity: leave }} />
      <div
        style={{
          position: "absolute",
          left: cardX,
          top: cardY,
          width: cardW,
          height: cardH,
          borderRadius: u * 2.8,
          background: p.surface,
          boxShadow: p.shadow(u),
          overflow: "hidden",
          opacity: band(frame, 0, 8) * leave,
          transform: `translateY(${(1 - cIn) * u * 4}px) scale(${(0.95 + 0.05 * cIn) * (1 - 0.04 * exit)})`,
        }}
      >
        <div style={{ position: "absolute", left: 0, top: 0, width: img.w, height: img.h, overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, transform: `scale(${1.06 - 0.06 * expoOut(frame / 30)})` }}>
            {image ? <Media src={image} position="50% 50%" /> : <SampleProduct w={img.w} h={img.h} accent={accent} frame={frame} surface={p.surface} ink={p.ink} />}
          </div>
        </div>
        <div style={{ position: "absolute", left: det.x, top: det.y, width: det.w, display: "flex", flexDirection: "column", gap: base * 0.7 }}>
          <span data-21st-slot="eyebrow" style={{ fontFamily: font, fontSize: eyeFs, fontWeight: 500, color: accent, lineHeight: 1.25, whiteSpace: stacked ? "normal" : "nowrap", overflowWrap: "anywhere", letterSpacing: "0.01em", ...rise(8) }}>
            {eyebrow}
          </span>
          <span data-21st-slot="title" style={{ fontFamily: font, fontSize: titleFs, fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.035em", color: p.ink, ...rise(12) }}>
            {title}
          </span>
          <div style={{ display: "flex", alignItems: "baseline", gap: priceFs * 0.35, flexWrap: "wrap", ...rise(16) }}>
            <RollingNumber value={priceStr} frame={frame} start={18} fs={priceFs} color={p.ink} font={font} />
            {oldStr ? (
              <span style={{ position: "relative", fontFamily: font, fontSize: Math.max(nativeFont, priceFs * 0.5), color: p.faint, whiteSpace: "nowrap" }}>
                <span data-21st-slot="oldPrice">{oldStr}</span>
                <span style={{ position: "absolute", left: 0, top: "52%", height: Math.max(1.5, priceFs * 0.04), width: `${strike * 100}%`, background: strikeColor }} />
              </span>
            ) : null}
            {save > 0 ? (
              <span
                data-21st-slot="price"
                style={{
                  fontFamily: font,
                  fontSize: Math.max(nativeFont, priceFs * 0.36),
                  fontWeight: 600,
                  color: discountColor,
                  padding: `${priceFs * 0.06}px ${priceFs * 0.22}px`,
                  borderRadius: 99,
                  background: withAlpha(discountColor, p.dark ? 0.2 : 0.1),
                  whiteSpace: "nowrap",
                  transform: `scale(${springSnap(frame, fps, 32, POP)})`,
                  alignSelf: "center",
                }}
              >
                -{save}%
              </span>
            ) : null}
          </div>
          <div style={{ display: stacked ? "grid" : "flex", gridTemplateColumns: stacked ? "repeat(2, minmax(0, 1fr))" : undefined, gap: chipFs * 0.5, flexWrap: "wrap" }}>
            {chips.map((c, i) => {
              const t = 36 + i * 3;
              const sel = i === 0;
              return (
                <span
                  key={i}
                  data-21st-slot="chips"
                  style={{
                    fontFamily: font,
                    fontSize: chipFs,
                    fontWeight: 500,
                    color: sel ? p.ink : p.muted,
                    padding: `${chipFs * 0.3}px ${chipFs * (stacked ? 0.35 : 0.85)}px`, textAlign: "center",
                    borderRadius: chipFs * 0.6,
                    background: sel ? tint(accent, p, 0.1) : p.raised,
                    boxShadow: sel ? `inset 0 0 0 1.5px ${accent}` : undefined,
                    whiteSpace: "nowrap",
                    opacity: band(frame, t, t + 3),
                    transform: `scale(${springSnap(frame, fps, t, POP)})`,
                  }}
                >
                  {c}
                </span>
              );
            })}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: det.x,
            top: det.y + det.h - ctaH,
            width: det.w,
            height: ctaH,
            borderRadius: ctaH * 0.3,
            background: done > 0 ? `linear-gradient(0deg, ${withAlpha(discountColor, done)}, ${withAlpha(discountColor, done)}), ${accent}` : accent,
            display: "grid",
            alignItems: "center",
            overflow: "hidden",
            boxShadow: `0 ${u * 0.8}px ${u * 2.4}px -${u * 0.6}px ${withAlpha(accent, 0.5)}, inset 0 1px 0 ${withAlpha(inkOn(accent), 0.25)}`,
            opacity: band(frame, 44, 50),
            transform: `translateY(${(1 - expoOut((frame - 44) / 8)) * base}px) scale(${(1 + 0.015 * hoverCta) * (1 - 0.04 * dip)})`,
          }}
        >
          {[
            { key: "cta", text: cta, icon: "shopping-bag" as const, o: 1 - done },
            { key: "doneLabel", text: doneLabel, icon: "check" as const, o: done },
          ].map((s) => (
            <div key={s.key} style={{ gridArea: "1 / 1", display: "flex", alignItems: "center", justifyContent: "center", gap: ctaFs * 0.5, opacity: s.o, transform: `translateY(${(s.key === "cta" ? -done : 1 - done) * ctaFs * 0.7}px)` }}>
              <Icon name={s.icon} size={ctaFs * 1.1} color={inkOn(accent)} strokeWidth={2.2} />
              <span data-21st-slot={s.key} style={{ fontFamily: font, fontSize: ctaFs, fontWeight: 600, color: inkOn(accent), lineHeight: 1.25, textAlign: "center", maxWidth: det.w * 0.78, whiteSpace: stacked ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
                {s.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Ripple x={target.x} y={target.y} t={ramp(frame, [CLICK, CLICK + 10], [0, 1])} radius={ctaH * 1.1} color={accent} />
      <Cursor fill={inkOn(accent)} stroke={accent} x={cur.x} y={cur.y} size={u * 4.6} kind={frame > CLICK - 6 ? "hand" : "arrow"} down={dip} opacity={band(frame, keys[0]!.f + 2, keys[0]!.f + 6) * leave} />
    </AbsoluteFill>
  );
};
