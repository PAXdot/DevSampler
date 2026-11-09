// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, expoOut, fitFontSize, inkOn, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { ARROW_TAIL_PATH, ARROW_TAIL_TIP, Glyph, Ground, clamp01, pathAt, press, prog, px, surfaceFor, typeFloor, useAuthoredFrame, type Key, type Pt } from "../shared";
import { meta } from "./cursor-neon.meta";
import type { schema } from "./cursor-neon.schema";

const SETTLE = 92;
const TYPED = meta.timing.markers.typed ?? 34;
const CLICK = meta.timing.markers.click ?? 56;

type Rect = { x: number; y: number; w: number; h: number };

/** Scales snap to 1/10000 so held frames rerender bit-identically. */
const fine = (v: number) => Math.round(v * 10000) / 10000;

/** 1 with the point inside `r`, falling to 0 at `reach` px outside it. */
const near = (p: Pt, r: Rect, reach: number) => {
  const dx = Math.max(r.x - p.x, 0, p.x - (r.x + r.w));
  const dy = Math.max(r.y - p.y, 0, p.y - (r.y + r.h));
  return clamp01(1 - Math.hypot(dx, dy) / reach);
};

/** A neon sign striking on: a few stutters, then steady (frame-pure). */
const STRIKE = [0.12, 0.75, 0.2, 0.95, 0.4, 1, 0.85, 1];
const strike = (fr: number, from: number) => {
  const i = Math.floor(fr) - from;
  return i < 0 ? 0 : i >= STRIKE.length ? 1 : STRIKE[i]!;
};

/**
 * The neon cursor: the shared tailed arrow as a glass tube (accent stroke with a
 * hot core) over a smoked body, wrapped in an accent glow and a secondary haze.
 * `flash` 0..1 whitens the tube for the click; `pulse` breathes the glow.
 */
const NeonArrow: React.FC<{ x: number; y: number; size: number; down: number; flash: number; pulse: number; accent: string; secondary: string; hot: string; body: string }> = ({ x, y, size, down, flash, pulse, accent, secondary, hot, body }) => {
  const tip = ARROW_TAIL_TIP;
  const tube = `color-mix(in srgb, ${hot} ${Math.round(flash * 70)}%, ${accent})`;
  const core = `color-mix(in srgb, ${hot} ${Math.round(55 + flash * 45)}%, ${accent})`;
  const glow = [
    `drop-shadow(0 0 ${px(size * (0.025 + 0.02 * flash))}px ${accent})`,
    `drop-shadow(0 0 ${px(size * (0.09 * pulse + 0.16 * flash))}px ${withAlpha(accent, 0.85)})`,
    `drop-shadow(0 0 ${px(size * (0.24 * pulse + 0.3 * flash))}px ${withAlpha(secondary, 0.6 + 0.25 * flash)})`,
  ].join(" ");
  return (
    <div
      style={{
        position: "absolute",
        left: px(x - size * tip.x),
        top: px(y - size * tip.y),
        width: size,
        height: size,
        transform: `scale(${fine(1 - 0.12 * down)})`,
        transformOrigin: `${tip.x * 100}% ${tip.y * 100}%`,
        filter: glow,
        pointerEvents: "none",
        zIndex: 20,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: "block", overflow: "visible" }}>
        <path d={ARROW_TAIL_PATH} fill={body} />
        <path d={ARROW_TAIL_PATH} fill={withAlpha(accent, 0.14 + 0.2 * flash)} />
        <path d={ARROW_TAIL_PATH} fill="none" stroke={tube} strokeWidth={1.7} strokeLinejoin="round" />
        <path d={ARROW_TAIL_PATH} fill="none" stroke={core} strokeWidth={0.55} strokeLinejoin="round" />
      </svg>
    </div>
  );
};

export const Component: React.FC<z.infer<typeof schema>> = ({ headline, prompt, options, label, doneLabel, color, accent, secondary, surfaceColor, background, fontFamily, monoFontFamily }) => {
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const font = brandFontStack(fontFamily);
  const mono = brandFontStack(monoFontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);
  const wide = aspect === "16:9";

  // The bar is always dark: cut from the surface on a dark brand, from the text color on a light one.
  const panel = s.dark ? `color-mix(in srgb, ${color} 5%, ${surfaceColor})` : `color-mix(in srgb, ${surfaceColor} 7%, ${color})`;
  const pInk = s.dark ? color : surfaceColor;
  const shade = s.dark ? surfaceColor : color;
  const btnInk = inkOn(accent);

  // Geometry: headline, then the composer (prompt over a toolbar of chips + Generate).
  // 16:9 and 1:1 put chips and button on one toolbar row; 9:16 stacks chips over a full-width button.
  const compW = portrait ? W * 0.88 : wide ? Math.min(W * 0.6, u * 112) : W * 0.84;
  const pad = u * (portrait ? 5.4 : wide ? 3.2 : 3.4);
  const radius = u * (portrait ? 4.4 : 3);
  const iconS = u * (portrait ? 6.4 : 3.6);
  const promptLines = portrait ? 3 : 2;
  const promptBoxW = portrait ? compW - pad * 2 : compW - pad * 2 - iconS - u * 1.6;
  const promptFs = Math.max(floor, fitFontSize({ chars: Array.from(prompt).length, boxW: promptBoxW, boxH: u * (portrait ? 30 : 11), lines: promptLines, charEm: 0.52, lineHeight: 1.3, max: u * (portrait ? 7.4 : wide ? 4 : 3.9) }));
  const promptH = promptFs * 1.3 * promptLines;
  const chipFs = Math.max(floor, portrait ? floor : u * (wide ? 2 : 1.9));
  const chipH = chipFs * 1.8;
  const btnH = u * (portrait ? 15 : wide ? 7.8 : 7.8);
  const longest = Math.max(Array.from(label).length, Array.from(doneLabel).length);
  const btnLabelMax = portrait ? floor * 1.12 : u * (wide ? 2.7 : 2.7);
  const btnW = portrait ? compW - pad * 2 : Math.min(compW * 0.46, Math.max(u * 18, longest * 0.56 * btnLabelMax + btnLabelMax * 1.5 + u * 5.6));
  const btnFs = Math.max(floor, fitFontSize({ chars: longest + 2.6, boxW: btnW - u * (portrait ? 8 : 5), boxH: btnH * 0.5, charEm: 0.56, max: btnLabelMax }));
  const gapA = u * (portrait ? 4.4 : 2.4);
  const toolbarH = portrait ? chipH + u * 4 + btnH : Math.max(btnH, chipH);
  const headerH = portrait ? iconS + u * 3.4 : 0;
  const compH = pad + headerH + promptH + gapA + toolbarH + pad * (portrait ? 1 : 0.62);

  const headFs = headline ? Math.max(floor, fitFontSize({ chars: Array.from(headline).length, boxW: compW, boxH: u * 12, charEm: 0.56, max: u * (portrait ? 7.6 : wide ? 4.8 : 5.4) })) : 0;
  const headGap = headline ? u * (portrait ? 6 : 4.4) : 0;
  const headH = headline ? headFs * 1.2 : 0;
  const top = (H - (headH + headGap + compH)) / 2 + (portrait ? u * 1 : u * 0.5);
  const comp: Rect = { x: (W - compW) / 2, y: top + headH + headGap, w: compW, h: compH };
  const promptTop = comp.y + pad + headerH;
  const toolTop = promptTop + promptH + gapA;
  const btn: Rect = portrait ? { x: comp.x + pad, y: toolTop + chipH + u * 4, w: btnW, h: btnH } : { x: comp.x + comp.w - pad * 0.62 - btnW, y: toolTop + (toolbarH - btnH) / 2, w: btnW, h: btnH };
  const chipsY = portrait ? toolTop : toolTop + (toolbarH - chipH) / 2;
  const chipW = (t: string) => Array.from(t).length * 0.62 * chipFs + chipFs * 1.5;
  const chipGap = u * (portrait ? 2 : 1);
  const chipRects: Rect[] = [];
  options.reduce((x, t) => {
    chipRects.push({ x, y: chipsY, w: chipW(t), h: chipH });
    return x + chipW(t) + chipGap;
  }, comp.x + pad);
  const lastChip = chipRects[chipRects.length - 1];

  // Timeline.
  const panelIn = expoOut(prog(f, 0, 16));
  const edgeOn = strike(f, 2);
  const chars = Array.from(prompt);
  const typed = Math.round(chars.length * clamp01((f - 6) / (TYPED - 6)));
  const caretOn = f < CLICK + 2 ? (f < TYPED + 1 ? 1 : Math.floor((f - TYPED) / 8) % 2 === 0 ? 1 : 0) : 0;
  // The breathing stops at SETTLE: its amplitude fades out over the last frames.
  const breath = 1 - prog(f, SETTLE - 16, SETTLE);
  const pulse = f >= SETTLE ? 1 : 1 + 0.14 * Math.sin(f / 2.6) * breath;
  const down = press(f, CLICK);
  const flashT = prog(f, CLICK, CLICK + 16);
  // Two quick strikes, then a fade: a tube flaring, not a strobe.
  const flash = f < CLICK ? 0 : Math.max(0, 1 - flashT) * (f < CLICK + 2 ? 1 : f < CLICK + 3 ? 0.45 : 1);
  const lit = expoOut(prog(f, CLICK + 1, CLICK + 10));
  // The old label leaves before the new one arrives, so the two never overlap.
  const swapOut = expoOut(prog(f, CLICK, CLICK + 4));
  const swapIn = expoOut(prog(f, CLICK + 4, CLICK + 13));
  const sweepT = prog(f, CLICK + 2, CLICK + 30);
  const boost = expoOut(prog(f, CLICK + 18, CLICK + 34));

  // The route: in from the lower right, over the option chips, onto Generate, then aside.
  const target: Pt = { x: btn.x + btn.w * (portrait ? 0.62 : 0.56), y: btn.y + btn.h * 0.56 };
  const chipPt: Pt = lastChip ? { x: lastChip.x + lastChip.w * 0.6, y: lastChip.y + lastChip.h * 0.6 } : { x: comp.x + comp.w * 0.4, y: toolTop + chipH * 0.6 };
  const cursorSize = u * (portrait ? 17 : 11.5);
  const rest: Pt = portrait
    ? { x: comp.x + comp.w - pad - cursorSize * 0.62, y: chipsY + chipH * 0.15 }
    : { x: btn.x - cursorSize * 0.8, y: btn.y - u * 0.4 };
  const keys: Key[] = [
    { f: 6, x: W * 1.04, y: portrait ? H * 0.98 : H * 1.02 },
    { f: 30, x: chipPt.x, y: chipPt.y },
    { f: 37, x: chipPt.x + u * 1.4, y: chipPt.y - u * 0.8 },
    { f: 51, x: target.x, y: target.y },
    { f: 61, x: target.x, y: target.y },
    { f: 78, x: rest.x, y: rest.y },
  ];
  const cur = pathAt(f, keys);
  const hB = near(cur, btn, u * 2.6);
  const chipHover = (r: Rect) => near(cur, r, u * 1.6);

  // Neon edge of the bar: a hot hairline core, the accent tube and a secondary haze.
  const edgeK = edgeOn * (0.62 + 0.38 * pulse * (1 - boost) + 0.38 * boost + 0.5 * flash);
  const tubeW = Math.max(2, u * 0.26);
  const edgeShadow = [
    `0 0 0 ${px(tubeW)}px ${withAlpha(accent, 0.95 * edgeOn)}`,
    `0 0 ${px(u * 1.2 * edgeK)}px ${px(u * 0.15)}px ${withAlpha(accent, 0.8 * edgeOn)}`,
    `0 0 ${px(u * 4.2 * edgeK)}px ${withAlpha(accent, 0.45 * edgeOn)}`,
    `0 0 ${px(u * 9 * edgeK)}px ${withAlpha(secondary, 0.35 * edgeOn)}`,
    `inset 0 0 ${px(u * 2.4 * edgeK)}px ${withAlpha(accent, 0.22 * edgeOn)}`,
  ].join(", ");
  const neonText = (k: number) => `0 0 ${px(u * 0.5 * k)}px ${withAlpha(accent, 0.9)}, 0 0 ${px(u * 1.6 * k)}px ${withAlpha(accent, 0.55)}`;

  // Generate: an outlined neon pill that brightens under the cursor and floods on the click.
  const btnGlow = 0.55 + 0.45 * hB + 0.6 * flash;
  const btnEl = (
    <div
      style={{
        position: "absolute",
        left: btn.x - comp.x,
        top: btn.y - comp.y,
        width: btn.w,
        height: btn.h,
        borderRadius: btn.h / 2,
        background: `color-mix(in srgb, ${accent} ${Math.round(100 * lit)}%, ${withAlpha(accent, 0.08 + 0.14 * hB)})`,
        boxShadow: `0 0 0 ${px(tubeW)}px ${withAlpha(accent, edgeOn)}, 0 0 ${px(u * 1.4 * btnGlow)}px ${withAlpha(accent, 0.75 * edgeOn)}, 0 0 ${px(u * 4 * btnGlow)}px ${withAlpha(secondary, 0.45 * edgeOn)}, inset 0 0 ${px(u * 1.6 * btnGlow)}px ${withAlpha(accent, 0.35 * (1 - lit))}`,
        transform: `scale(${fine((1 + 0.03 * hB * (1 - lit)) * (1 - 0.05 * down))})`,
        overflow: "hidden",
      }}
    >
      {swapOut < 1 ? (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: btnFs * 0.45, opacity: 1 - swapOut, transform: `translateY(${px(-swapOut * btn.h * 0.3)}px)` }}>
          <Glyph name="sparkles" size={btnFs * 1.05} color={`color-mix(in srgb, ${pInk} ${Math.round(30 + 40 * hB)}%, ${accent})`} strokeWidth={2.1} style={{ filter: `drop-shadow(0 0 ${px(u * 0.5)}px ${withAlpha(accent, 0.9)})` }} />
          <span data-21st-slot="label" style={{ fontFamily: font, fontSize: btnFs, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.2, whiteSpace: "nowrap", color: `color-mix(in srgb, ${pInk} ${Math.round(30 + 40 * hB)}%, ${accent})`, textShadow: neonText(0.6 + 0.6 * hB) }}>
            {label}
          </span>
        </div>
      ) : null}
      {swapIn > 0 ? (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: btnFs * 0.45, opacity: swapIn, transform: `translateY(${px((1 - swapIn) * btn.h * 0.3)}px)` }}>
          <Glyph name="sparkles" size={btnFs * 1.05} color={btnInk} strokeWidth={2.3} />
          <span data-21st-slot="doneLabel" style={{ fontFamily: font, fontSize: btnFs, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.2, whiteSpace: "nowrap", color: btnInk }}>
            {doneLabel}
          </span>
        </div>
      ) : null}
    </div>
  );

  const typedText = chars.slice(0, typed).join("");
  const restText = chars.slice(typed).join("");
  const caret = (
    <span style={{ position: "relative", display: "inline-block", width: 0, height: 0 }}>
      <span
        style={{
          position: "absolute",
          left: px(u * 0.15),
          top: px(-promptFs * 0.84),
          width: Math.max(2, px(u * 0.3)),
          height: px(promptFs * 1.04),
          borderRadius: u * 0.2,
          background: accent,
          boxShadow: `0 0 ${px(u * 0.8)}px ${withAlpha(accent, 0.9)}`,
          opacity: caretOn * edgeOn,
        }}
      />
    </span>
  );

  return (
    <AbsoluteFill>
      <Ground background={background} color={color} accent={accent} x={0.5} y={(comp.y + comp.h / 2) / H} portrait={portrait} glow={0.5 + 0.3 * edgeOn + 0.2 * boost} />
      {headline ? (
        <div style={{ position: "absolute", left: (W - compW) / 2, width: compW, top, height: headH, display: "flex", alignItems: "center", justifyContent: "center", opacity: prog(f, 0, 10), transform: `translateY(${px((1 - expoOut(prog(f, 0, 16))) * u * 2.4)}px)` }}>
          <span data-21st-slot="headline" style={{ fontFamily: font, fontSize: headFs, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.2, whiteSpace: "nowrap", color }}>
            {headline}
          </span>
        </div>
      ) : null}
      <div
        style={{
          position: "absolute",
          left: comp.x,
          top: comp.y,
          width: comp.w,
          height: comp.h,
          borderRadius: radius,
          background: panel,
          boxShadow: `${edgeShadow}, 0 ${px(u * 2.4)}px ${px(u * 6)}px -${px(u * 1.5)}px ${withAlpha(shade, s.dark ? 0.7 : 0.28)}`,
          opacity: prog(f, 0, 8),
          transform: `translateY(${px((1 - panelIn) * u * 3)}px) scale(${fine(0.97 + 0.03 * panelIn)})`,
        }}
      >
        {/* Prompt: a sparkle, then the typed text with a neon caret. */}
        {portrait ? (
          <div style={{ position: "absolute", left: pad, top: pad, width: iconS, height: iconS }}>
            <Glyph name="sparkles" size={iconS} color={accent} strokeWidth={1.8} style={{ filter: `drop-shadow(0 0 ${px(u * 0.8)}px ${withAlpha(accent, 0.9)})`, opacity: edgeOn }} />
          </div>
        ) : (
          <div style={{ position: "absolute", left: pad, top: pad + (promptFs * 1.3 - iconS) / 2, width: iconS, height: iconS }}>
            <Glyph name="sparkles" size={iconS} color={accent} strokeWidth={1.9} style={{ filter: `drop-shadow(0 0 ${px(u * 0.6)}px ${withAlpha(accent, 0.9)})`, opacity: edgeOn }} />
          </div>
        )}
        <div style={{ position: "absolute", left: portrait ? pad : pad + iconS + u * 1.6, top: promptTop - comp.y, width: promptBoxW, height: promptH }}>
          <span data-21st-slot="prompt" style={{ fontFamily: font, fontSize: promptFs, fontWeight: 500, letterSpacing: "-0.015em", lineHeight: 1.3, color: pInk, whiteSpace: "normal", overflowWrap: "break-word" }}>
            {typedText}
            {caret}
            <span style={{ color: "transparent" }}>{restText}</span>
          </span>
        </div>
        {/* Toolbar: option chips (they catch the cursor's glow as it passes) and Generate. */}
        {options.map((t, i) => {
          const r = chipRects[i]!;
          const h = chipHover(r);
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: r.x - comp.x,
                top: r.y - comp.y,
                width: r.w,
                height: r.h,
                borderRadius: r.h / 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: withAlpha(pInk, 0.06),
                boxShadow: `inset 0 0 0 ${px(Math.max(1, u * 0.14))}px ${h > 0.01 ? `color-mix(in srgb, ${accent} ${Math.round(100 * h)}%, ${withAlpha(pInk, 0.16)})` : withAlpha(pInk, 0.16)}, 0 0 ${px(u * 1.6 * h)}px ${withAlpha(accent, 0.6 * h)}`,
                opacity: prog(f, 8 + i * 2, 16 + i * 2),
              }}
            >
              <span data-21st-slot="options" style={{ fontFamily: mono, fontSize: chipFs, fontWeight: 500, lineHeight: 1.2, whiteSpace: "nowrap", color: `color-mix(in srgb, ${accent} ${Math.round(70 * h)}%, ${withAlpha(pInk, 0.72)})` }}>
                {t}
              </span>
            </div>
          );
        })}
        {btnEl}
        {/* After the click a bright pulse runs once around the edge. */}
        {sweepT > 0 && sweepT < 1 ? (
          <svg width={comp.w} height={comp.h} viewBox={`0 0 ${px(comp.w)} ${px(comp.h)}`} style={{ position: "absolute", left: 0, top: 0, overflow: "visible", filter: `drop-shadow(0 0 ${px(u * 0.8)}px ${accent}) drop-shadow(0 0 ${px(u * 2.4)}px ${withAlpha(secondary, 0.8)})` }}>
            <rect
              x={0}
              y={0}
              width={px(comp.w)}
              height={px(comp.h)}
              rx={px(radius)}
              pathLength={100}
              fill="none"
              stroke={`color-mix(in srgb, ${pInk} 70%, ${accent})`}
              strokeWidth={px(tubeW * 1.3)}
              strokeLinecap="round"
              strokeDasharray="14 86"
              strokeDashoffset={px(-100 * easeInOut(sweepT) - 42)}
              opacity={px(Math.sin(Math.PI * sweepT))}
            />
          </svg>
        ) : null}
      </div>
      {f >= 6 ? <NeonArrow x={cur.x} y={cur.y} size={cursorSize} down={down} flash={flash} pulse={pulse} accent={accent} secondary={secondary} hot={pInk} body={withAlpha(shade, 0.62)} /> : null}
    </AbsoluteFill>
  );
};
