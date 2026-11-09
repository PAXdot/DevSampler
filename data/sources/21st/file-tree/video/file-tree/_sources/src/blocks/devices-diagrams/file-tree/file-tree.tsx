// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { MONO, band, brandFontStack, easeInOut, expoOut, fitFontSize, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Icon } from "../_shared/icons";
import { meta } from "./file-tree.meta";
import type { schema } from "./file-tree.schema";

/**
 * A project tree card: the active row gets an accent outline, then a new file
 * is typed in, pushing the rows below down (research V10).
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ title, rows, highlight, insertAfter, insertName, accent, color, cardColor, monoFontFamily, fontFamily }) => {
  const { width, height, portrait } = useLayout();
  const nativeFont = useVideoConfig().height * (portrait ? 0.032 : 0.020);
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const mono = brandFontStack(monoFontFamily ?? "Geist Mono");
  const shadow = `oklch(from ${cardColor} 0.045 min(c, 0.004) h)`;

  const n = rows.length;
  const ins = insertAfter >= 0 && insertAfter < n && insertName.length > 0;
  const total = n + (ins ? 1 : 0);
  const cardH = height * 0.84;
  const rowH = Math.min(cardH / (total + 2.4), width * (portrait ? 0.15 : 0.08));
  const header = rowH * 1.35;
  const cardHUsed = header + rowH * (total + 0.9);
  const maxChars = Math.max(...rows.map((r) => r.text.length + r.depth * 2.2), ins ? insertName.length + 6 : 0, 10);
  const cardW = Math.min(width * 0.92, Math.max(cardHUsed * 0.9, rowH * (maxChars * 0.36 + 5)));
  const textSize = Math.max(nativeFont, fitFontSize({ chars: maxChars + 4, boxW: cardW * 0.9, boxH: rowH * 0.5, charEm: 0.6, max: rowH * 0.42, lines: portrait ? 2 : 1 }));
  const titleSize = Math.max(nativeFont, fitFontSize({ chars: title.length + 4, boxW: cardW * 0.8, boxH: header * 0.4, charEm: 0.6, max: rowH * 0.38, lines: portrait ? 2 : 1 }));
  const indent = rowH * (portrait ? 0.24 : 0.8);
  const padX = rowH * 0.5;

  const isFolder = (i: number) => (rows[i + 1]?.depth ?? -1) > (rows[i]?.depth ?? 0) || !(rows[i]?.text ?? "").includes(".");
  const insDepth = ins ? (rows[insertAfter]?.depth ?? 0) + (isFolder(insertAfter) ? 1 : 0) : 0;

  const INS = 48;
  const typeStart = 56;
  const typed = Math.max(0, Math.min(insertName.length, Math.floor((frame - typeStart) / 3) + 1));
  const typeEnd = typeStart + insertName.length * 3;
  const commit = ramp(frame, [typeEnd + 6, typeEnd + 12], [0, 1]);
  const push = ins ? easeInOut((frame - INS) / 8) : 0;

  const yOf = (slot: number) => header + rowH * 0.45 + slot * rowH;
  const hlFrom = highlight >= 0 && highlight < n ? highlight : -1;
  const hlTarget = ins ? insertAfter + 1 : hlFrom;
  const hlSlotFrom = hlFrom < 0 ? -1 : hlFrom > insertAfter && ins ? hlFrom + push : hlFrom;
  const hlSlot = ins && commit > 0 ? hlSlotFrom + (hlTarget - hlSlotFrom) * easeInOut(commit) : hlSlotFrom;
  const hlOn = (hlFrom >= 0 ? band(frame, 30, 36) : ins ? band(frame, typeEnd + 6, typeEnd + 12) : 0) * (1 - exit);
  const enter = expoOut(frame / 12);

  const rowView = (text: React.ReactNode, depth: number, folder: boolean, slotKey: string | null, y: number, o: number, key: string) => (
    <div key={key} style={{ position: "absolute", left: 0, right: 0, top: y, height: rowH, display: "flex", alignItems: "center", paddingLeft: padX + depth * indent, gap: rowH * 0.22, opacity: o }}>
      {Array.from({ length: depth }, (_, d) => (
        <div key={d} style={{ position: "absolute", left: padX + d * indent + rowH * 0.2, top: 0, bottom: 0, width: 1, background: withAlpha(color, 0.1) }} />
      ))}
      <svg width={rowH * 0.24} height={rowH * 0.24} viewBox="0 0 24 24" style={{ flexShrink: 0, opacity: folder ? 0.55 : 0 }}>
        <path d="m6 9 6 6 6-6" fill="none" stroke={color} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <Icon name={folder ? "folder" : "file"} size={rowH * 0.42} color={folder ? withAlpha(color, 0.75) : withAlpha(color, 0.5)} strokeWidth={1.8} />
      <span data-21st-slot={slotKey ?? undefined} style={{ fontFamily: mono, fontSize: textSize, color: folder ? color : withAlpha(color, 0.78), lineHeight: 1.25, whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: portrait ? "anywhere" : undefined }}>
        {text}
      </span>
    </div>
  );

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity: 1 - exit }}>
      <div
        style={{
          position: "relative",
          width: cardW,
          height: cardHUsed,
          borderRadius: rowH * 0.4,
          background: cardColor,
          border: `1px solid ${withAlpha(color, 0.1)}`,
          boxShadow: `0 ${rowH * 0.2}px ${rowH * 0.5}px ${withAlpha(shadow, 0.35)}`,
          overflow: "hidden",
          opacity: band(frame, 0, 10),
          transform: `translateX(${(1 - enter) * cardW * 0.05}px) scale(${1 - exit * 0.03})`,
        }}
      >
        <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: header, display: "flex", alignItems: "center", gap: rowH * 0.3, padding: `0 ${padX}px`, borderBottom: `1px solid ${withAlpha(color, 0.08)}` }}>
          <Icon name="folder" size={titleSize * 1.1} color={accent} strokeWidth={2} />
          <span data-21st-slot="title" style={{ fontFamily: font, fontWeight: 500, fontSize: titleSize, color: withAlpha(color, 0.7), lineHeight: 1.25, whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: portrait ? "anywhere" : undefined }}>
            {title}
          </span>
        </div>
        {hlOn > 0 && hlSlot >= 0 ? (
          <div
            style={{
              position: "absolute",
              left: rowH * 0.22,
              right: rowH * 0.22,
              top: yOf(hlSlot) + rowH * 0.06,
              height: rowH * 0.88,
              borderRadius: rowH * 0.22,
              border: `${Math.max(1.5, rowH * 0.04)}px solid ${accent}`,
              background: withAlpha(accent, 0.1),
              boxShadow: `0 0 ${rowH * 0.5}px ${withAlpha(accent, 0.35)}`,
              opacity: hlOn,
            }}
          />
        ) : null}
        {rows.map((r, i) => {
          const at = 6 + i * 3;
          const slot = ins && i > insertAfter ? i + push : i;
          return rowView(r.text, r.depth, isFolder(i), "rows", yOf(slot), band(frame, at, at + 6), `r${i}`);
        })}
        {ins ? (
          <div style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, opacity: band(frame, INS + 4, INS + 8) }}>
            <div
              style={{
                position: "absolute",
                left: padX + insDepth * indent + rowH * 0.95,
                right: rowH * 0.5,
                top: yOf(insertAfter + 1) + rowH * 0.12,
                height: rowH * 0.76,
                borderRadius: rowH * 0.16,
                border: `${Math.max(1.5, rowH * 0.035)}px solid ${accent}`,
                background: withAlpha(cardColor, 0.6),
                opacity: 1 - commit,
              }}
            />
            {rowView(
              <>
                {insertName.slice(0, typed)}
                <span style={{ display: "inline-block", width: textSize * 0.08, height: textSize * 1.1, marginLeft: textSize * 0.08, verticalAlign: "middle", background: accent, opacity: frame < typeEnd || Math.floor(frame / 8) % 2 === 0 ? 1 - commit : 0 }} />
              </>,
              insDepth,
              false,
              "insertName",
              yOf(insertAfter + 1),
              1,
              "ins",
            )}
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
