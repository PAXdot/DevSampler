// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { inkOn, band, brandFontStack, expoOut, fitFontSize, ramp, springSnap, useEnterExit, useLayout } from "../../../kit/index";
import { Cursor, Ripple, pathAt, press } from "../shared/cursor";
import { Icon } from "../shared/icons";
import { palette, tint } from "../shared/theme";
import { meta } from "./popover-open.meta";
import type { schema } from "./popover-open.schema";

const OPEN = meta.timing.markers.open ?? 16;
const PICK = meta.timing.markers.pick ?? 48;
const POP = { damping: 12, stiffness: 220, mass: 0.6 } as const;

export const Component: React.FC<z.infer<typeof schema>> = ({ anchorLabel, items, activeIndex, cursor, theme, accent, fontFamily, surfaceColor, textColor }) => {
  const { fps } = useVideoConfig();
  const { width: w, height: h, unit: u } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const p = palette(theme, { surfaceColor, textColor });
  const portraitLayout = h > w;
  const nativeFont = useVideoConfig().height * (portraitLayout ? 0.032 : 0.020);
  const n = items.length;
  const pick = Math.min(activeIndex, n - 1);

  // Vertical budget: anchor + gap + popover (rows + padding) within 90% of the region.
  const popW = Math.min(w * (portraitLayout ? 0.90 : 0.82), h * 1.05);
  const unitH = (h * 0.9) / (1.35 + 0.25 + n * 1 + 0.35);
  const anchorH = portraitLayout ? nativeFont * 2.6 : Math.max(nativeFont * 1.9, Math.min(unitH * 1.35, u * 10));
  // In a narrow menu, metadata gets its own line instead of taking width from the label.
  const portraitTextW = popW - nativeFont * 4.4;
  const portraitLines = Math.max(...items.map((it) => Math.ceil(it.text.length * nativeFont * 0.56 / portraitTextW) + (it.meta ? Math.ceil(it.meta.length * nativeFont * 0.56 / portraitTextW) : 0)));
  const rowH = portraitLayout ? Math.max(nativeFont * 3, nativeFont * (portraitLines * 1.25 + 0.55)) : Math.max(nativeFont * 2.2, Math.min(unitH, u * 8.5));
  const popPad = rowH * 0.18;
  const popH = n * rowH + popPad * 2;
  const gap = anchorH * 0.22;
  const groupH = anchorH + gap + popH;
  const top = (h - groupH) / 2;
  const left = (w - popW) / 2;
  const fs = Math.max(nativeFont, fitFontSize({ chars: Math.max(...items.map((i) => i.text.length + i.meta.length)) + 6, boxW: popW - rowH * 1.8, boxH: rowH * 0.4, charEm: 0.54, max: rowH * 0.34 }));
  const aFs = Math.max(nativeFont, fitFontSize({ chars: anchorLabel.length + 6, boxW: popW * 0.9, boxH: anchorH * 0.4, charEm: 0.55, max: anchorH * 0.32 }));

  const aIn = expoOut(frame / 8);
  const open = expoOut((frame - OPEN) / 6);
  const anchorPos = { x: left + popW * 0.5, y: top + anchorH / 2 };
  const rowY = (i: number) => top + anchorH + gap + popPad + rowH * (i + 0.5);
  const keys = [
    { f: 0, x: w * 1.02, y: h * 1.05 },
    { f: OPEN - 4, x: anchorPos.x + popW * 0.14, y: anchorPos.y + anchorH * 0.12 },
    { f: OPEN + 14, x: left + popW * 0.5, y: rowY(0) + rowH * 0.1 },
    { f: PICK - 3, x: left + popW * 0.42, y: rowY(pick) + rowH * 0.12 },
    { f: PICK + 30, x: left + popW * 0.36, y: rowY(pick) + rowH * 0.3 },
  ];
  const cur = pathAt(frame, keys, 0.1);
  const opened = cursor ? frame >= OPEN : frame >= OPEN;
  const hover = cursor && frame >= OPEN + 8 ? Math.max(0, Math.min(n - 1, Math.floor((cur.y - (top + anchorH + gap + popPad)) / rowH))) : -1;
  const picked = frame >= PICK ? pick : 0;
  const leave = 1 - exit;
  const anchorDip = cursor ? press(frame, OPEN - 2) : 0;

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          left,
          top,
          width: popW,
          height: anchorH,
          borderRadius: anchorH * 0.26,
          background: p.surface,
          boxShadow: `${p.shadow(u * 0.5)}${opened ? `, 0 0 0 ${u * 0.5}px ${tint(accent, p, 0.16)}` : ""}`,
          display: "flex",
          alignItems: "center",
          gap: aFs * 0.6,
          padding: `0 ${anchorH * 0.36}px`,
          opacity: band(frame, 0, 6) * leave,
          transform: `translateY(${(1 - aIn) * u * 2}px) scale(${(1 - 0.03 * anchorDip) * (1 - 0.04 * exit)})`,
        }}
      >
        <Icon name="history" size={aFs * 1.15} color={p.muted} />
        <span data-21st-slot="anchorLabel" style={{ fontFamily: font, fontSize: aFs, fontWeight: 500, letterSpacing: "-0.01em", color: p.ink, maxWidth: popW * 0.70, lineHeight: 1.25, whiteSpace: portraitLayout ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
          {anchorLabel}
        </span>
        <div style={{ flex: 1 }} />
        <div style={{ transform: `rotate(${180 * open}deg)` }}>
          <Icon name="chevron-down" size={aFs} color={p.muted} />
        </div>
      </div>
      {frame >= OPEN ? (
        <div
          style={{
            position: "absolute",
            left,
            top: top + anchorH + gap,
            width: popW,
            height: popH,
            padding: popPad,
            borderRadius: rowH * 0.36,
            background: p.surface,
            boxShadow: p.shadow(u),
            transformOrigin: "50% 0%",
            transform: `scaleY(${0.9 + 0.1 * open}) translateY(${(1 - open) * -u}px) scale(${1 - 0.04 * exit})`,
            opacity: band(frame, OPEN, OPEN + 6) * leave,
          }}
        >
          {hover >= 0 ? (
            <div style={{ position: "absolute", left: popPad, right: popPad, top: popPad + hover * rowH, height: rowH, borderRadius: rowH * 0.24, background: p.raised }} />
          ) : null}
          {items.map((it, i) => {
            const t = OPEN + 2 + i * 2;
            const sel = i === picked;
            const pop = i === pick && frame >= PICK ? springSnap(frame, fps, PICK, POP) : 1;
            return (
              <div
                key={i}
                style={{
                  position: "relative",
                  height: rowH,
                  display: portraitLayout ? "grid" : "flex",
                  gridTemplateColumns: portraitLayout ? `${fs * 0.55}px minmax(0, 1fr) ${fs * 1.1}px` : undefined,
                  alignItems: "center",
                  gap: fs * 0.7,
                  padding: `0 ${portraitLayout ? u * 2 : rowH * 0.3}px`,
                  opacity: band(frame, t, t + 5),
                  transform: `translateY(${(1 - expoOut((frame - t) / 6)) * -rowH * 0.12}px)`,
                }}
              >
                <div style={{ flexShrink: 0, width: fs * 0.55, height: fs * 0.55, borderRadius: "50%", background: sel ? accent : p.bone, boxShadow: sel ? `0 0 0 ${fs * 0.22}px ${tint(accent, p, 0.18)}` : undefined }} />
                <div style={{ display: "flex", flexDirection: portraitLayout ? "column" : "row", gap: portraitLayout ? fs * 0.15 : 0, flex: 1, minWidth: 0 }}>
                  <span data-21st-slot="items" style={{ fontFamily: font, fontSize: fs, fontWeight: sel ? 600 : 500, letterSpacing: "-0.01em", color: sel ? p.ink : p.muted, minWidth: 0, lineHeight: 1.25, whiteSpace: portraitLayout ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
                    {it.text}
                  </span>
                  {portraitLayout && it.meta ? <span data-21st-slot="items" style={{ fontFamily: font, fontSize: nativeFont, color: p.faint, lineHeight: 1.25, overflowWrap: "anywhere", fontVariantNumeric: "tabular-nums" }}>{it.meta}</span> : null}
                </div>
                {!portraitLayout ? <div style={{ flex: 1 }} /> : null}
                {!portraitLayout ? <span data-21st-slot="items" style={{ fontFamily: font, fontSize: Math.max(nativeFont, fs * 0.86), color: p.faint, whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                  {it.meta}
                </span> : null}
                <div style={{ flexShrink: 0, width: fs * 1.1, display: "grid", placeItems: "center", opacity: sel ? 1 : 0, transform: `scale(${sel ? pop : 0.6})` }}>
                  <Icon name="check" size={fs} color={accent} strokeWidth={2.6} />
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
      {cursor ? (
        <>
          <Ripple x={anchorPos.x + popW * 0.14} y={anchorPos.y + anchorH * 0.12} t={ramp(frame, [OPEN - 2, OPEN + 8], [0, 1])} radius={anchorH * 0.6} color={accent} />
          <Ripple x={keys[3]!.x} y={keys[3]!.y} t={ramp(frame, [PICK, PICK + 10], [0, 1])} radius={rowH * 0.5} color={accent} />
          <Cursor fill={inkOn(accent)} stroke={accent} x={cur.x} y={cur.y} size={u * 5} down={Math.max(anchorDip, press(frame, PICK))} opacity={band(frame, 1, 5) * leave} />
        </>
      ) : null}
    </AbsoluteFill>
  );
};
