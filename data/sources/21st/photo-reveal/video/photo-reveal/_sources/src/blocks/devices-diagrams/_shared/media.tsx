// Built with Remotion - https://remotion.pro/license
// Media slots for the devices-diagrams blocks: a user image/video when given,
// otherwise existing 21st image assets and editable sample app screens.
// Everything is a pure function of its props.
import React, { useId } from "react";
import { Img, OffthreadVideo, random } from "remotion";
import { SANS, luminance, withAlpha } from "../../../kit/index";
import { Icon } from "./icons";
import { OWNED_PHOTOS } from "./owned-photos";

export const isVideo = (src: string) => /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(src);

/** A user asset (image or video) filling its box, or the fallback when empty. */
export const Media: React.FC<{ src: string; fallback: React.ReactNode; position?: string; style?: React.CSSProperties }> = ({ src, fallback, position, style }) => {
  if (!src) return <>{fallback}</>;
  const s: React.CSSProperties = { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: position, ...style };
  return isVideo(src) ? <OffthreadVideo src={src} muted style={s} /> : <Img src={src} style={s} />;
};

/** Legible monochrome ink, derived from a supplied solid or blended paint. */
export function contrastInk(paint: string): string {
  const rgb = /^rgba?\(([^)]+)\)$/i.exec(paint)?.[1]?.trim().split(/[, /]+/).slice(0, 3);
  const hex = rgb?.length === 3
    ? `#${rgb.map((channel) => Math.round(Math.max(0, Math.min(255, parseFloat(channel) * (channel.endsWith("%") ? 2.55 : 1)))).toString(16).padStart(2, "0")).join("")}`
    : paint;
  const known = /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(hex);
  // Solid public zColor inputs use measured sRGB luminance. CSS color-mix
  // paints use their resolved perceptual lightness in the renderer.
  const lightness = known
    ? luminance(hex) > 0.179 ? "0.145" : "0.985"
    : "clamp(0.145, calc((0.59 - l) * 10000), 0.985)";
  return `oklch(from ${paint} ${lightness} min(c, 0.005) h / 1)`;
}

const useSvgId = () => useId().replace(/[^a-zA-Z0-9]/g, "");

export const PHOTO_COUNT = 6;

/** Existing 21st product images, cropped to fill; `variant` wraps around. */
export const PlaceholderPhoto: React.FC<{ variant: number; accent: string; style?: React.CSSProperties }> = ({ variant, style }) => {
  const v = ((variant % PHOTO_COUNT) + PHOTO_COUNT) % PHOTO_COUNT;
  return <Img src={OWNED_PHOTOS[v]!} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", ...style }} />;
};

export const SCREEN_COUNT = 6;

const StatusBar: React.FC<{ u: number; ink: string; bg?: string }> = ({ u, ink, bg }) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: u * 13,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: `${u * 3}px ${u * 8}px 0`,
      fontFamily: "inherit",
      fontSize: u * 4.2,
      fontWeight: 600,
      color: ink,
      zIndex: 2,
      background: bg ? `linear-gradient(${bg} 70%, transparent)` : undefined,
    }}
  >
    <span>9:41</span>
    <span style={{ display: "flex", gap: u * 1.2, alignItems: "center" }}>
      {[0.5, 0.75, 1].map((s) => (
        <span key={s} style={{ width: u * 0.9, height: u * 2.6 * s, borderRadius: u * 0.3, background: ink, display: "inline-block" }} />
      ))}
      <span style={{ width: u * 5.6, height: u * 2.8, borderRadius: u * 0.8, border: `${u * 0.4}px solid ${ink}`, display: "inline-block", marginLeft: u * 0.6 }} />
    </span>
  </div>
);

const Bar: React.FC<{ w: string | number; h: number; c: string; mt?: number }> = ({ w, h, c, mt = 0 }) => (
  <div style={{ width: w, height: h, borderRadius: 999, background: c, marginTop: mt }} />
);

/**
 * Drawn app screens for device placeholders: feed, stats, player, chat, map,
 * gallery. `t` (0..1) drives the small live bits (chart draw, progress, scroll).
 */
export const SampleScreen: React.FC<{ variant: number; w: number; h: number; accent: string; surfaceColor?: string; textColor?: string; fontFamily?: string; t?: number }> = ({ variant, w, h, accent, surfaceColor, textColor, fontFamily, t = 1 }) => {
  const id = useSvgId();
  const u = w / 100;
  const v = ((variant % SCREEN_COUNT) + SCREEN_COUNT) % SCREEN_COUNT;
  // App materials use the supplied brand roles; existing image pixels remain
  // unchanged. Accent-derived materials keep compatibility with older callers.
  // Positive status is still conveyed by the explicit +24.6% / online copy.
  const tone = (lightness: number, chroma = 0.01) => `oklch(from ${accent} ${lightness} min(c, ${chroma}) h)`;
  const paper = surfaceColor ?? tone(0.992, 0.002);
  const lightGround = surfaceColor ?? tone(0.976, 0.006);
  const soft = surfaceColor ? `color-mix(in oklch, ${surfaceColor} 94%, ${textColor ?? tone(0.145, 0.005)})` : tone(0.955, 0.008);
  const field = surfaceColor ? `color-mix(in oklch, ${surfaceColor} 96%, ${textColor ?? tone(0.145, 0.005)})` : tone(0.968, 0.006);
  const line = surfaceColor ? `color-mix(in oklch, ${surfaceColor} 90%, ${textColor ?? tone(0.145, 0.005)})` : tone(0.948, 0.008);
  const bone = surfaceColor ? `color-mix(in oklch, ${surfaceColor} 88%, ${textColor ?? tone(0.145, 0.005)})` : tone(0.918, 0.01);
  const lightInk = textColor ?? tone(0.145, 0.005);
  const label = textColor ?? tone(0.208, 0.008);
  const mutedBar = textColor ? withAlpha(textColor, 0.22) : tone(0.867, 0.012);
  const bubbleBar = textColor ? withAlpha(textColor, 0.35) : tone(0.789, 0.015);
  const mutedInk = textColor ? withAlpha(textColor, 0.55) : tone(0.554, 0.015);
  const darkGround = surfaceColor ?? tone(0.16, 0.012);
  const darkInk = textColor ?? tone(0.97, 0.006);
  const shadow = tone(0.045, 0.004);
  const onAccent = contrastInk(accent);
  const base: React.CSSProperties = { position: "absolute", inset: 0, overflow: "hidden", fontFamily: fontFamily ?? SANS };

  if (v === 0) {
    const y = -t * u * 30;
    return (
      <div style={{ ...base, background: lightGround }}>
        <StatusBar u={u} ink={lightInk} bg={lightGround} />
        <div style={{ position: "absolute", left: 0, right: 0, top: 0, transform: `translateY(${y}px)` }}>
          <div style={{ height: u * 17 }} />
          <div style={{ padding: `0 ${u * 6}px`, fontSize: u * 9, fontWeight: 600, letterSpacing: "-0.03em", color: lightInk }}>Today</div>
          <div style={{ display: "flex", gap: u * 2.4, padding: `${u * 4}px ${u * 6}px ${u * 1}px` }}>
            {[0.22, 0.17, 0.2].map((wd, i) => (
              <div key={i} style={{ height: u * 7, width: `${wd * 100}%`, borderRadius: 999, background: i === 0 ? lightInk : bone }} />
            ))}
          </div>
          {[0, 4, 1].map((pv, i) => (
            <div key={i} style={{ margin: `${u * 4}px ${u * 5}px 0`, padding: u * 3, borderRadius: u * 6, background: paper, boxShadow: `0 1px 2px ${withAlpha(shadow, 0.06)}, 0 0 0 1px ${withAlpha(shadow, 0.04)}` }}>
              <div style={{ position: "relative", height: u * (i === 0 ? 62 : 48), borderRadius: u * 4, overflow: "hidden" }}>
                <PlaceholderPhoto variant={pv} accent={accent} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: u * 2.6, marginTop: u * 3.2 }}>
                <div style={{ width: u * 7, height: u * 7, borderRadius: 999, background: i === 1 ? accent : bone }} />
                <div style={{ flex: 1 }}>
                  <Bar w={`${70 - i * 12}%`} h={u * 2.6} c={label} />
                  <Bar w={`${46 - i * 6}%`} h={u * 2.2} c={mutedBar} mt={u * 1.6} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (v === 1) {
    const pts = [0.62, 0.55, 0.6, 0.42, 0.47, 0.3, 0.36, 0.18, 0.22, 0.08];
    const cw = 100;
    const ch = 50;
    const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${(i / (pts.length - 1)) * cw} ${p * ch}`).join(" ");
    const draw = Math.max(0, Math.min(1, t));
    return (
      <div style={{ ...base, background: darkGround, color: darkInk }}>
        <StatusBar u={u} ink={darkInk} />
        <div style={{ position: "absolute", left: u * 7, right: u * 7, top: u * 20 }}>
          <div style={{ fontSize: u * 3.8, color: withAlpha(darkInk, 0.5), fontWeight: 500 }}>Revenue</div>
          <div style={{ fontSize: u * 13, fontWeight: 600, letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums", marginTop: u * 1 }}>$48,210</div>
          <div style={{ display: "inline-flex", marginTop: u * 2, padding: `${u * 1}px ${u * 2.6}px`, borderRadius: 999, background: withAlpha(accent, 0.16), color: accent, fontSize: u * 3.6, fontWeight: 600 }}>+24.6%</div>
          <svg viewBox={`0 -4 ${cw} ${ch + 8}`} preserveAspectRatio="none" style={{ display: "block", width: "100%", height: u * 52, marginTop: u * 6, overflow: "visible" }}>
            <defs>
              <linearGradient id={`${id}a`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor={accent} stopOpacity="0.45" />
                <stop offset="1" stopColor={accent} stopOpacity="0" />
              </linearGradient>
              <clipPath id={`${id}c`}>
                <rect x="0" y="-10" width={cw * draw} height={ch + 20} />
              </clipPath>
            </defs>
            <g clipPath={`url(#${id}c)`}>
              <path d={`${line} L${cw} ${ch} L0 ${ch}Z`} fill={`url(#${id}a)`} />
              <path d={line} fill="none" stroke={accent} strokeWidth="1.6" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
            </g>
          </svg>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: u * 3, marginTop: u * 5 }}>
              <div style={{ width: u * 9, height: u * 9, borderRadius: u * 2.6, background: i === 0 ? accent : withAlpha(darkInk, 0.08) }} />
              <div style={{ flex: 1 }}>
                <Bar w={`${62 - i * 10}%`} h={u * 2.6} c={withAlpha(darkInk, 0.85)} />
                <Bar w={`${36 - i * 4}%`} h={u * 2.2} c={withAlpha(darkInk, 0.25)} mt={u * 1.6} />
              </div>
              <Bar w={u * 10} h={u * 2.6} c={withAlpha(darkInk, 0.5)} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (v === 2) {
    const p = 0.18 + 0.5 * Math.max(0, Math.min(1, t));
    return (
      <div style={{ ...base, background: `linear-gradient(180deg, color-mix(in srgb, ${accent} 42%, ${tone(0.174, 0.014)}), ${darkGround} 70%)`, color: darkInk }}>
        <StatusBar u={u} ink={darkInk} />
        <div style={{ position: "absolute", left: u * 9, right: u * 9, top: u * 22, aspectRatio: "1", borderRadius: u * 5, overflow: "hidden", boxShadow: `0 20px 50px ${withAlpha(shadow, 0.45)}` }}>
          <PlaceholderPhoto variant={3} accent={accent} />
        </div>
        <div style={{ position: "absolute", left: u * 9, right: u * 9, top: u * 112 }}>
          <div style={{ fontSize: u * 6, fontWeight: 600, letterSpacing: "-0.02em" }}>Night drive</div>
          <div style={{ fontSize: u * 4, color: withAlpha(darkInk, 0.55), marginTop: u * 1 }}>Studio session</div>
          <div style={{ position: "relative", height: u * 1.2, borderRadius: 999, background: withAlpha(darkInk, 0.18), marginTop: u * 7 }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${p * 100}%`, borderRadius: 999, background: darkInk }} />
            <div style={{ position: "absolute", left: `${p * 100}%`, top: "50%", width: u * 3.6, height: u * 3.6, marginLeft: -u * 1.8, marginTop: -u * 1.8, borderRadius: 999, background: darkInk }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: u * 8, padding: `0 ${u * 6}px` }}>
            <div style={{ width: u * 8, height: u * 8, borderRadius: 999, background: withAlpha(darkInk, 0.14) }} />
            <div style={{ width: u * 17, height: u * 17, borderRadius: 999, background: darkInk, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="play" size={u * 7} color={darkGround} fill={darkGround} />
            </div>
            <div style={{ width: u * 8, height: u * 8, borderRadius: 999, background: withAlpha(darkInk, 0.14) }} />
          </div>
        </div>
      </div>
    );
  }

  if (v === 3) {
    const msgs = [
      { me: false, w: 0.62, l: 2 },
      { me: true, w: 0.5, l: 1 },
      { me: false, w: 0.7, l: 3 },
      { me: true, w: 0.56, l: 2 },
      { me: false, w: 0.4, l: 1 },
    ];
    return (
      <div style={{ ...base, background: paper }}>
        <StatusBar u={u} ink={lightInk} />
        <div style={{ position: "absolute", top: u * 15, left: 0, right: 0, display: "flex", alignItems: "center", gap: u * 3, padding: `${u * 2}px ${u * 6}px ${u * 4}px`, borderBottom: `1px solid ${line}` }}>
          <div style={{ width: u * 10, height: u * 10, borderRadius: 999, background: `linear-gradient(135deg, ${accent}, oklch(from ${accent} calc(l + 0.11) calc(c * 0.6) h))` }} />
          <div>
            <div style={{ fontSize: u * 4.6, fontWeight: 600, color: lightInk }}>Maya</div>
            <div style={{ fontSize: u * 3.2, color: accent, marginTop: u * 0.4 }}>online</div>
          </div>
        </div>
        <div style={{ position: "absolute", left: u * 5, right: u * 5, top: u * 36, display: "flex", flexDirection: "column", gap: u * 3.6 }}>
          {msgs.map((m, i) => (
            <div
              key={i}
              style={{
                alignSelf: m.me ? "flex-end" : "flex-start",
                width: `${m.w * 100}%`,
                padding: `${u * 3}px ${u * 3.6}px`,
                borderRadius: u * 5,
                borderBottomRightRadius: m.me ? u * 1.4 : u * 5,
                borderBottomLeftRadius: m.me ? u * 5 : u * 1.4,
                background: m.me ? accent : soft,
                display: "flex",
                flexDirection: "column",
                gap: u * 1.6,
                opacity: Math.max(0, Math.min(1, t * 6 - i)),
              }}
            >
              {Array.from({ length: m.l }, (_, k) => (
                <Bar key={k} w={k === m.l - 1 && m.l > 1 ? "60%" : "100%"} h={u * 2.2} c={m.me ? withAlpha(onAccent, 0.85) : bubbleBar} />
              ))}
            </div>
          ))}
        </div>
        <div style={{ position: "absolute", left: u * 5, right: u * 5, bottom: u * 8, height: u * 11, borderRadius: 999, background: field, display: "flex", alignItems: "center", justifyContent: "flex-end", padding: `0 ${u * 1.6}px` }}>
          <div style={{ width: u * 8, height: u * 8, borderRadius: 999, background: accent }} />
        </div>
      </div>
    );
  }

  if (v === 4) {
    const route = "M18 150 L18 118 L46 104 L46 70 L74 56 L74 30";
    return (
      <div style={{ ...base, background: lightGround }}>
        <svg viewBox="0 0 100 200" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <path d="M-10 60 C20 50 30 80 60 70 S100 40 120 50 V0 H-10Z" fill={withAlpha(accent, 0.15)} />
          <ellipse cx="80" cy="150" rx="34" ry="22" fill={withAlpha(accent, 0.3)} />
          {["M-5 40 L105 92", "M30 -5 L42 205", "M-5 130 L105 108", "M70 -5 L60 205", "M-5 175 L105 160"].map((d, i) => (
            <path key={i} d={d} stroke={withAlpha(lightInk, 0.2)} strokeWidth={i % 2 ? 5 : 3.4} fill="none" />
          ))}
          <path d={route} fill="none" stroke={accent} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="200" strokeDashoffset={200 * (1 - Math.max(0, Math.min(1, t)))} />
          <circle cx="18" cy="150" r="3.4" fill={paper} stroke={accent} strokeWidth="1.6" />
          <circle cx="74" cy="30" r="5" fill={accent} />
          <circle cx="74" cy="30" r="2" fill={onAccent} />
        </svg>
        <StatusBar u={u} ink={lightInk} />
        <div style={{ position: "absolute", left: u * 4, right: u * 4, bottom: u * 5, padding: u * 5, borderRadius: u * 7, background: paper, boxShadow: `0 10px 30px ${withAlpha(shadow, 0.12)}` }}>
          <div style={{ fontSize: u * 5.4, fontWeight: 600, color: lightInk, letterSpacing: "-0.02em" }}>12 min</div>
          <div style={{ fontSize: u * 3.6, color: mutedInk, marginTop: u * 1 }}>Fastest route, light traffic</div>
          <div style={{ height: u * 11, borderRadius: u * 3.4, background: accent, marginTop: u * 4.4, display: "flex", alignItems: "center", justifyContent: "center", color: onAccent, fontSize: u * 4, fontWeight: 600 }}>Start</div>
        </div>
      </div>
    );
  }

  const cells = Array.from({ length: 15 }, (_, i) => i);
  return (
    <div style={{ ...base, background: paper }}>
      <StatusBar u={u} ink={lightInk} bg={paper} />
      <div style={{ position: "absolute", top: u * 16, left: u * 5, fontSize: u * 8, fontWeight: 600, letterSpacing: "-0.03em", color: lightInk }}>Photos</div>
      <div style={{ position: "absolute", top: u * 30, left: u * 1, right: u * 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: u * 1, transform: `translateY(${-t * u * 16}px)` }}>
        {cells.map((i) => (
          <div key={i} style={{ position: "relative", aspectRatio: "1", overflow: "hidden" }}>
            <PlaceholderPhoto variant={(i * 7 + 1) % PHOTO_COUNT} accent={accent} />
          </div>
        ))}
      </div>
    </div>
  );
};
