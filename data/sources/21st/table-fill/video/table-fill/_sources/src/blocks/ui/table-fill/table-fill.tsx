// Built with Remotion - https://remotion.pro/license
import React from "react";
import { useVideoConfig, AbsoluteFill, random } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, easeOut, expoOut, fitFontSize, inkOn, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Icon } from "../shared/icons";
import { palette } from "../shared/theme";
import { meta } from "./table-fill.meta";
import type { schema } from "./table-fill.schema";

const FILL = 18;
const STAGGER = 3;
const WORK = 12;
const COL_GAP = 8;

export const Component: React.FC<z.infer<typeof schema>> = ({ title, columns, rows, workingLabel, yesLabel, noLabel, tilt, theme, accent, background, fontFamily, surfaceColor, textColor, successColor, reviewColor }) => {
  const { width: w, height: h, unit: u, aspect } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const p = palette(theme, { surfaceColor, textColor });
  const portraitLayout = h > w;
  const nativeFont = useVideoConfig().height * (portraitLayout ? 0.032 : 0.020);

  const tableW = aspect === "16:9" ? w * 0.7 : aspect === "9:16" ? w * 0.9 : w * 0.84;
  const tableH = h * (aspect === "9:16" ? 0.9 : 0.74);
  const padX = tableW * 0.035;
  const innerW = tableW - padX * 2;
  const titleLines = Math.ceil(title.length * nativeFont * 0.56 / (innerW - nativeFont * 2.2));
  const firstHeadLines = Math.max(1, Math.ceil(columns[0]!.length * nativeFont * 0.56 / innerW));
  const secondHeadLines = Math.max(1, ...columns.slice(1).map(c => Math.ceil(c.length * nativeFont * 0.56 / (innerW * 0.5))));
  const barH = portraitLayout ? Math.max(nativeFont * 2.5, nativeFont * (titleLines * 1.25 + 0.7)) : Math.max(nativeFont * 2.3, tableH * 0.13);
  const headH = portraitLayout ? nativeFont * ((firstHeadLines + secondHeadLines) * 1.25 + 0.6) : Math.max(nativeFont * 1.6, tableH * 0.09);
  const bodyH = tableH - barH - headH;
  const longestRow = Math.max(...rows.map(r => r.length));
  const nameLines = Math.max(1, Math.ceil(longestRow * nativeFont * 0.56 / (innerW - nativeFont * 1.85)));
  const statusLines = Math.max(1, Math.ceil(Math.max(workingLabel.length, yesLabel.length, noLabel.length) * nativeFont * 0.56 / (innerW * 0.5 - nativeFont * 1.7)));
  const rowH = portraitLayout ? Math.max(bodyH / rows.length, nativeFont * ((nameLines + statusLines) * 1.25 + 0.8)) : bodyH / rows.length;
  const scrollInset = portraitLayout && rowH * rows.length > bodyH + 1 ? nativeFont * 0.4 : 0;
  const scrollY = portraitLayout ? Math.max(0, rowH * rows.length + scrollInset * 2 - bodyH) * easeOut((frame - 36) / 48) : 0;
  const colW = [0.42, 0.3, 0.28].map((k) => (tableW - padX * 2) * k) as [number, number, number];
  const fs = Math.max(nativeFont * (portraitLayout ? 1 : 1.18), fitFontSize({ chars: Math.max(...rows.map((r) => r.length)) + 2, boxW: colW[0] - rowH * 0.9, boxH: rowH * 0.42, charEm: 0.54, max: u * 2.6 }));
  const smallFs = Math.max(nativeFont * (portraitLayout ? 1 : 1.18), fitFontSize({ chars: Math.max(workingLabel.length, yesLabel.length, noLabel.length) + 4, boxW: colW[2] * 0.82, boxH: rowH * 0.36, charEm: 0.56, max: fs * 0.88 }));
  const headFs = Math.max(nativeFont * (portraitLayout ? 1 : 1.18), fitFontSize({ chars: Math.max(...columns.map((c) => c.length)) + 3, boxW: colW[1] * 0.8, boxH: headH * 0.42, charEm: 0.58, max: fs * 0.8 }));
  const titleFs = Math.max(nativeFont * (portraitLayout ? 1 : 1.18), fitFontSize({ chars: title.length + 2, boxW: tableW * 0.45, boxH: barH * 0.4, charEm: 0.55, max: fs * 1.15 }));

  const e = expoOut(frame / 14);
  const blur = (1 - e) * u * 1.2 + exit * u * 1.2;
  const leave = 1 - exit;

  const shimmer = (start: number) => {
    const x = ((frame - start) / WORK) * 220 - 60;
    return `linear-gradient(90deg, ${p.faint} ${x - 30}%, ${accent} ${x}%, ${p.faint} ${x + 30}%)`;
  };

  return (
    <AbsoluteFill style={{ background, alignItems: "center", justifyContent: "center", overflow: "hidden", perspective: w * 1.4 }}>
      <AbsoluteFill style={{ background: `radial-gradient(ellipse 60% 50% at 70% 30%, ${withAlpha(accent, 0.16)}, transparent 70%)`, opacity: leave }} />
      <div
        style={{
          width: tableW,
          height: tableH,
          borderRadius: u * 1.8,
          background: p.surface,
          boxShadow: p.shadow(u),
          overflow: "hidden",
          opacity: band(frame, 0, 8) * leave,
          filter: blur > 0.05 ? `blur(${blur}px)` : undefined,
          transform: `rotateY(${(portraitLayout ? 0 : tilt) * (0.6 + 0.4 * e)}deg) rotateX(${4 * (1 - e)}deg) translateY(${(1 - e) * u * 3}px) scale(${(0.94 + 0.06 * e) * (1 - 0.03 * exit)})`,
        }}
      >
        <div style={{ height: barH, display: "flex", alignItems: "center", gap: titleFs * 0.6, padding: `0 ${padX}px`, borderBottom: `1px solid ${p.line}` }}>
          <div style={{ flexShrink: 0, width: titleFs * 1.6, height: titleFs * 1.6, borderRadius: titleFs * 0.4, background: accent, display: "grid", placeItems: "center" }}>
            <Icon name="layout-grid" size={titleFs} color={inkOn(accent)} />
          </div>
          <span data-21st-slot="title" style={{ fontFamily: font, fontSize: titleFs, fontWeight: 600, letterSpacing: "-0.015em", color: p.ink, lineHeight: 1.25, flex: portraitLayout ? 1 : undefined, minWidth: 0, maxWidth: portraitLayout ? undefined : tableW * 0.68, whiteSpace: portraitLayout ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
            {title}
          </span>
          {!portraitLayout ? <div style={{ flex: 1 }} /> : null}
          {(!portraitLayout ? (["search", "users"] as const) : []).map((n) => (
            <div key={n} style={{ width: barH * 0.5, height: barH * 0.5, borderRadius: barH * 0.14, background: p.raised, display: "grid", placeItems: "center" }}>
              <Icon name={n} size={barH * 0.24} color={p.muted} />
            </div>
          ))}
          {!portraitLayout ? <div style={{ height: barH * 0.5, padding: `0 ${barH * 0.24}px`, borderRadius: barH * 0.14, background: accent, display: "flex", alignItems: "center", gap: barH * 0.1 }}>
            <Icon name="sparkles" size={barH * 0.24} color={inkOn(accent)} />
            <Icon name="chevron-down" size={barH * 0.2} color={inkOn(accent)} />
          </div> : null}
        </div>
        <div style={{ height: headH, display: portraitLayout ? "grid" : "flex", gridTemplateColumns: portraitLayout ? "1fr 1fr" : undefined, gridTemplateRows: portraitLayout ? `${firstHeadLines * nativeFont * 1.25}px ${secondHeadLines * nativeFont * 1.25}px` : undefined, alignContent: "center", alignItems: "center", padding: `0 ${padX}px`, background: p.raised, borderBottom: `1px solid ${p.line}` }}>
          {columns.map((c, i) => (
            <div key={i} style={{ width: portraitLayout ? "100%" : colW[i as 0 | 1 | 2], gridColumn: portraitLayout && i === 0 ? "1 / -1" : undefined, display: "flex", alignItems: "center", gap: headFs * 0.4 }}>
              {i > 0 && !portraitLayout ? <Icon name="sparkles" size={headFs} color={accent} /> : null}
              <span data-21st-slot="columns" style={{ fontFamily: font, fontSize: headFs, fontWeight: 500, color: p.muted, lineHeight: 1.25, whiteSpace: portraitLayout ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
                {c}
              </span>
            </div>
          ))}
        </div>
        <div style={{ height: bodyH, overflow: "hidden" }}><div style={{ transform: `translateY(${scrollInset - scrollY}px)` }}>{rows.map((r, ri) => {
          const score = 4 + Math.floor(random(`table-${r}-${ri}`) * 7);
          const good = score >= 7;
          const t1 = FILL + ri * STAGGER;
          const t2 = t1 + COL_GAP;
          const hue = random(`hue-${r}`) * 360;
          const cell = (t: number, value: React.ReactNode) =>
            frame < t ? (
              <div style={{ width: "36%", height: rowH * 0.16, borderRadius: 99, background: p.bone }} />
            ) : frame < t + WORK ? (
              <span data-21st-slot="workingLabel" style={{ fontFamily: font, fontSize: smallFs, fontWeight: 500, maxWidth: "100%", lineHeight: 1.25, whiteSpace: portraitLayout ? "normal" : "nowrap", overflowWrap: "anywhere", backgroundImage: shimmer(t), WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                {workingLabel}
              </span>
            ) : (
              <div style={{ opacity: band(frame, t + WORK, t + WORK + 4), display: "flex", alignItems: "center", width: "100%" }}>{value}</div>
            );
          const fillW = easeOut((frame - t1 - WORK) / 10);
          return (
            <div key={ri} style={{ height: rowH, display: portraitLayout ? "grid" : "flex", gridTemplateColumns: portraitLayout ? "1fr 1fr" : undefined, gridTemplateRows: portraitLayout ? `${nameLines * nativeFont * 1.25}px ${statusLines * nativeFont * 1.25}px` : undefined, rowGap: portraitLayout ? nativeFont * 0.2 : undefined, alignContent: "center", opacity: scrollInset ? Math.min(1, Math.max(0, (ri * rowH + scrollInset - scrollY) / scrollInset), Math.max(0, (bodyH - (ri + 1) * rowH - scrollInset + scrollY) / scrollInset)) : 1, alignItems: "center", padding: `0 ${padX}px`, borderBottom: ri < rows.length - 1 ? `1px solid ${p.line}` : undefined }}>
              <div style={{ width: portraitLayout ? "100%" : colW[0], gridColumn: portraitLayout ? "1 / -1" : undefined, display: "flex", alignItems: "center", gap: fs * 0.6 }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: portraitLayout ? nativeFont * 1.25 : rowH * 0.5,
                    height: portraitLayout ? nativeFont * 1.25 : rowH * 0.5,
                    borderRadius: rowH * 0.14,
                    background: withAlpha(accent, p.dark ? 0.18 : 0.1),
                    display: "grid",
                    placeItems: "center",
                    fontFamily: font,
                    fontWeight: 600,
                    fontSize: portraitLayout ? nativeFont : Math.max(nativeFont, rowH * 0.24),
                    color: p.dark ? p.ink : accent,
                  }}
                >
                  <span data-21st-slot="rows">{r.slice(0, 1)}</span>
                </div>
                <span data-21st-slot="rows" style={{ fontFamily: font, fontSize: fs, fontWeight: 500, letterSpacing: "-0.01em", color: p.ink, lineHeight: 1.25, minWidth: 0, flex: 1, whiteSpace: aspect !== "16:9" ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
                  {r}
                </span>
              </div>
              <div style={{ width: portraitLayout ? "100%" : colW[1], display: "flex", alignItems: "center" }}>
                {cell(
                  t1,
                  <div style={{ display: "flex", alignItems: "center", gap: smallFs * 0.7, width: "86%" }}>
                    <div style={{ flex: 1, height: rowH * 0.12, borderRadius: 99, background: p.bone, overflow: "hidden" }}>
                      <div style={{ width: `${score * 10 * fillW}%`, height: "100%", borderRadius: 99, background: good ? accent : withAlpha(accent, 0.45) }} />
                    </div>
                    <span data-21st-slot="rows" style={{ fontFamily: font, fontSize: smallFs, fontWeight: 600, color: p.ink, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                      {score}/10
                    </span>
                  </div>,
                )}
              </div>
              <div style={{ width: portraitLayout ? "100%" : colW[2], display: "flex", alignItems: "center" }}>
                {cell(
                  t2,
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: smallFs * 0.35,
                      padding: `${smallFs * 0.15}px ${smallFs * (portraitLayout ? 0.35 : 0.6)}px`,
                      borderRadius: portraitLayout ? smallFs * 0.5 : 99,
                      maxWidth: "100%",
                      minWidth: 0,
                      background: withAlpha(good ? successColor : reviewColor, p.dark ? 0.2 : 0.1),
                    }}
                  >
                    <div style={{ flexShrink: 0 }}><Icon name={good ? "circle-check" : "clock"} size={smallFs} color={good ? successColor : reviewColor} /></div>
                    <span data-21st-slot={good ? "yesLabel" : "noLabel"} style={{ fontFamily: font, fontSize: smallFs, fontWeight: 600, color: good ? successColor : reviewColor, lineHeight: 1.25, minWidth: 0, whiteSpace: portraitLayout ? "normal" : "nowrap", overflowWrap: "anywhere" }}>
                      {good ? yesLabel : noLabel}
                    </span>
                  </div>,
                )}
              </div>
            </div>
          );
        })}</div></div>
      </div>
    </AbsoluteFill>
  );
};
