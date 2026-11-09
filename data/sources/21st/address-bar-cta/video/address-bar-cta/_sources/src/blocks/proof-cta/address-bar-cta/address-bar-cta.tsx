// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, Img, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeOut, expoOut, fitFontSize, inkOn, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { wordFitSize } from "../../text/shared";
import { Glyph, Ground, clamp01, initials, prog, px, surfaceFor, typeFloor, useAuthoredFrame } from "../shared";
import { meta } from "./address-bar-cta.meta";
import type { schema } from "./address-bar-cta.schema";

const SETTLE = 82;
const TYPE_AT = 10;
const SHINE_EVERY = 75;

export const Component: React.FC<z.infer<typeof schema>> = ({ url, name, tagline, cta, logo, color, accent, surfaceColor, background, fontFamily, bodyFontFamily }) => {
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const head = brandFontStack(fontFamily);
  const body = brandFontStack(bodyFontFamily ?? fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);

  // Timeline: type, press return, the bar opens into the page.
  const chars = Array.from(url);
  const per = Math.min(1.6, 26 / Math.max(1, chars.length));
  const typedEnd = TYPE_AT + chars.length * per;
  const ENTER = Math.round(typedEnd + 6);
  const typed = chars.slice(0, Math.max(0, Math.min(chars.length, Math.floor((f - TYPE_AT) / per) + 1))).join("");
  const open = springSnap(f, fps, ENTER + 2, { damping: 17, stiffness: 120, mass: 0.9 });
  const press = f >= ENTER && f < ENTER + 6 ? Math.sin(((f - ENTER) / 6) * Math.PI) : 0;
  const load = easeOut(prog(f, ENTER + 2, ENTER + 18));
  const loadFade = 1 - prog(f, ENTER + 18, ENTER + 24);
  const pageAt = ENTER + 12;
  const step = (i: number) => springSnap(f, fps, pageAt + i * 4, { damping: 15, stiffness: 140, mass: 0.8 });

  // Geometry.
  const winW = aspect === "16:9" ? W * 0.6 : aspect === "1:1" ? W * 0.86 : W * 0.9;
  const winH = aspect === "16:9" ? H * 0.76 : aspect === "1:1" ? H * 0.7 : H * 0.6;
  const barH = Math.max(floor * 1.9, aspect === "9:16" ? H * 0.068 : H * 0.1);
  const field = winW - barH * 2.6;
  const urlFs = Math.max(floor, fitFontSize({ chars: chars.length + 2, boxW: field * 0.8, boxH: barH * 0.5, charEm: 0.54, max: barH * 0.4 }));
  const radiusBar = barH / 2;
  const radiusWin = u * (portrait ? 3.4 : 2.4);
  const cardH = barH + (winH - barH) * open;
  const top = H / 2 - barH / 2 + (H / 2 - winH / 2 - (H / 2 - barH / 2)) * open;
  const lights = clamp01(open * 1.4);
  const dot = barH * 0.16;
  const leftPad = barH * 0.32 + lights * (dot * 3 + dot * 1.6 * 2 + barH * 0.2);
  const fieldInset = barH * 0.16 * open;

  // Page hero.
  const pageW = winW * (portrait ? 0.84 : 0.72);
  const markSize = Math.min(winH * 0.16, u * (portrait ? 16 : 12));
  const nameFs = Math.max(floor, Math.min(fitFontSize({ chars: name.length, boxW: pageW, boxH: winH * 0.16, charEm: 0.6, max: u * (portrait ? 13 : 9) }), wordFitSize(name, pageW, { family: fontFamily })));
  const tagFs = Math.max(floor, Math.min(fitFontSize({ chars: tagline.length, boxW: pageW, boxH: winH * 0.16, lines: 2, charEm: 0.5, lineHeight: 1.3, max: u * (portrait ? 5.8 : 3.4) }), wordFitSize(tagline, pageW, { family: bodyFontFamily })));
  const ctaFs = Math.max(floor, Math.min(fitFontSize({ chars: cta.length + 3, boxW: pageW * 0.8, boxH: winH * 0.1, charEm: 0.55, max: u * (portrait ? 5.4 : 3) }), wordFitSize(cta, pageW * 0.7, { family: fontFamily })));
  const since = f - SETTLE;
  const shine = since > 0 ? (since % SHINE_EVERY) / 22 : -1;

  const mark = (size: number) =>
    logo ? (
      <Img src={logo} style={{ width: size, height: size, objectFit: "contain", display: "block" }} />
    ) : (
      <div style={{ width: size, height: size, borderRadius: size * 0.28, background: `linear-gradient(150deg, ${accent}, color-mix(in srgb, ${accent} 60%, ${inkOn(accent)}))`, display: "grid", placeItems: "center", flexShrink: 0 }}>
        <span style={{ fontFamily: head, fontWeight: 700, fontSize: size * 0.56, lineHeight: 1, color: inkOn(accent), letterSpacing: "-0.04em" }}>{initials(name).slice(0, 1)}</span>
      </div>
    );

  const iconSize = urlFs * 1.05;
  const favicon = prog(f, ENTER + 10, ENTER + 16);

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={0.42} portrait={portrait} />
      <div
        style={{
          position: "absolute",
          left: (W - winW) / 2,
          top: px(top),
          width: winW,
          height: px(cardH),
          borderRadius: px(radiusBar + (radiusWin - radiusBar) * open),
          background: s.card,
          boxShadow: `${s.shadow(u * (1 + 0.4 * open))}${f < ENTER + 4 ? `, 0 0 0 ${px(u * 0.35 * prog(f, 2, 10))}px ${withAlpha(accent, 0.22 * (1 - open))}` : ""}`,
          overflow: "hidden",
          opacity: prog(f, 0, 6),
          transform: f < 12 ? `scale(${px(0.92 + 0.08 * expoOut(prog(f, 0, 12)))})` : undefined,
        }}
      >
        {/* Chrome row: lights, then the address field. */}
        <div style={{ position: "relative", height: barH, display: "flex", alignItems: "center", paddingLeft: px(barH * 0.32), paddingRight: px(barH * 0.22), borderBottom: open > 0.02 ? `1px solid ${withAlpha(color, 0.1 * open)}` : undefined, boxSizing: "border-box" }}>
          <div style={{ position: "absolute", left: barH * 0.36, display: "flex", gap: dot * 0.6, opacity: lights }}>
            {[0, 1, 2].map((k) => (
              <div key={k} style={{ width: dot, height: dot, borderRadius: "50%", background: s.line }} />
            ))}
          </div>
          <div
            style={{
              flex: 1,
              height: px(barH - fieldInset * 2),
              marginLeft: px(leftPad - barH * 0.32),
              borderRadius: px((barH - fieldInset * 2) / 2),
              background: open > 0 ? withAlpha(color, (s.dark ? 0.08 : 0.05) * open) : undefined,
              display: "flex",
              alignItems: "center",
              gap: urlFs * 0.5,
              paddingLeft: px(barH * 0.1 + fieldInset),
              minWidth: 0,
            }}
          >
            <div style={{ position: "relative", width: iconSize, height: iconSize, flexShrink: 0 }}>
              <div style={{ position: "absolute", inset: 0, opacity: 1 - favicon }}>
                <Glyph name={f < ENTER ? "search" : "lock"} size={iconSize} color={s.faint} strokeWidth={2.2} />
              </div>
              <div style={{ position: "absolute", inset: 0, opacity: favicon, transform: `scale(${px(0.6 + 0.4 * favicon)})` }}>{mark(iconSize)}</div>
            </div>
            <span data-21st-slot="url" style={{ fontFamily: body, fontSize: urlFs, color: s.ink, letterSpacing: "-0.01em", lineHeight: 1.25, whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: "anywhere", minWidth: 0 }}>
              {f >= ENTER ? url : typed}
              {f < ENTER ? <span style={{ display: "inline-block", width: Math.max(2, urlFs * 0.07), height: urlFs * 1.1, marginLeft: urlFs * 0.06, verticalAlign: "middle", background: accent, opacity: f < typedEnd || Math.floor(f / 8) % 2 === 0 ? 1 : 0 }} /> : null}
            </span>
          </div>
          {/* Return key: appears when the address is typed, sinks on press. */}
          <div
            style={{
              marginLeft: barH * 0.2,
              width: barH * 0.72,
              height: barH * 0.62,
              borderRadius: barH * 0.16,
              display: "grid",
              placeItems: "center",
              background: f >= ENTER ? accent : s.raised,
              boxShadow: `inset 0 -${px(barH * 0.05 * (1 - press))}px 0 ${withAlpha(color, 0.16)}, 0 0 0 1px ${withAlpha(color, 0.1)}`,
              transform: `translateY(${px(press * barH * 0.04)}px) scale(${px(0.6 + 0.4 * expoOut(prog(f, typedEnd - 2, typedEnd + 4)))})`,
              opacity: prog(f, typedEnd - 2, typedEnd + 3) * (1 - open),
              flexShrink: 0,
            }}
          >
            <Glyph name="corner-down-left" size={barH * 0.34} color={f >= ENTER ? inkOn(accent) : s.muted} strokeWidth={2.4} />
          </div>
          {loadFade > 0 && f >= ENTER ? <div style={{ position: "absolute", left: 0, bottom: -1, height: Math.max(2, barH * 0.035), width: `${px(load * 100)}%`, background: accent, opacity: loadFade, borderRadius: 99 }} /> : null}
        </div>
        {/* The page that loads. */}
        {open > 0.05 ? (
          <div style={{ position: "relative", height: winH - barH, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: winH * (portrait ? 0.04 : 0.035) }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `radial-gradient(${withAlpha(color, s.dark ? 0.12 : 0.1)} 1px, transparent 1.4px)`,
                backgroundSize: `${u * 2.6}px ${u * 2.6}px`,
                WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000, transparent 75%)",
                maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000, transparent 75%)",
                opacity: prog(f, pageAt - 4, pageAt + 8),
              }}
            />
            <div style={{ position: "absolute", left: "15%", right: "15%", top: "-30%", height: "70%", background: `radial-gradient(ellipse at 50% 50%, ${withAlpha(accent, s.dark ? 0.3 : 0.16)}, transparent 65%)`, opacity: prog(f, pageAt - 2, pageAt + 12) }} />
            {[
              <div key="m" style={{ boxShadow: `0 ${px(markSize * 0.12)}px ${px(markSize * 0.4)}px ${withAlpha(accent, 0.35)}`, borderRadius: markSize * 0.28 }}>{mark(markSize)}</div>,
              <div key="n" data-21st-slot="name" style={{ fontFamily: head, fontWeight: 650, fontSize: nameFs, lineHeight: 1.05, letterSpacing: "-0.04em", color: s.ink, textAlign: "center", maxWidth: pageW }}>
                {name}
              </div>,
              <div key="t" data-21st-slot="tagline" style={{ fontFamily: body, fontSize: tagFs, lineHeight: 1.3, color: s.muted, textAlign: "center", maxWidth: pageW, textWrap: "balance", marginTop: -winH * 0.012 }}>
                {tagline}
              </div>,
              <div
                key="c"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  gap: ctaFs * 0.45,
                  marginTop: winH * 0.015,
                  padding: `${px(ctaFs * 0.62)}px ${px(ctaFs * 1.25)}px`,
                  borderRadius: ctaFs * 2,
                  background: accent,
                  boxShadow: `0 ${px(ctaFs * 0.3)}px ${px(ctaFs * 1.1)}px ${withAlpha(accent, 0.38)}, inset 0 1px 0 ${withAlpha(inkOn(accent), 0.22)}`,
                }}
              >
                <span data-21st-slot="cta" style={{ fontFamily: head, fontWeight: 600, fontSize: ctaFs, color: inkOn(accent), lineHeight: 1.2, textAlign: "center" }}>
                  {cta}
                </span>
                <Glyph name="arrow-right" size={ctaFs * 0.95} color={inkOn(accent)} strokeWidth={2.4} />
                {shine >= 0 && shine <= 1 ? <div style={{ position: "absolute", inset: 0, background: `linear-gradient(110deg, transparent ${px(shine * 160 - 40)}%, ${withAlpha(inkOn(accent), 0.35)} ${px(shine * 160 - 20)}%, transparent ${px(shine * 160)}%)` }} /> : null}
              </div>,
            ].map((node, i) => {
              const p = step(i);
              return (
                <div key={i} style={{ position: "relative", opacity: prog(f, pageAt + i * 4, pageAt + i * 4 + 5), transform: p < 1 ? `translateY(${px((1 - p) * u * 3)}px)` : undefined }}>
                  {node}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
