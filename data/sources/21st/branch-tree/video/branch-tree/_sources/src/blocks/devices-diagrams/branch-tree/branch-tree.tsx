// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, easeInOut, fitFontSize, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { meta } from "./branch-tree.meta";
import type { schema } from "./branch-tree.schema";

const POP = { damping: 12, mass: 0.6, stiffness: 170 } as const;

/**
 * A diagram that builds itself: trunk draws down, a step pill pops, its
 * branch draws out to a note, the trunk continues, and a bracket loops back
 * to the start (research V05). Linear draws, a reading pace.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ title, nodes, loopLabel, accent, color, background, fontFamily }) => {
  const { fps, height: stageHeight } = useVideoConfig();
  const { unit, width, height, aspect } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const land = aspect === "16:9";
  const tall = aspect === "9:16";
  const n = nodes.length;

  const trunkX = width * (land ? 0.26 : 0.3);
  const pillW = width * (land ? 0.22 : tall ? 0.38 : 0.32);
  const pillL = trunkX - pillW / 2;
  const titleTop = height * (tall ? 0.1 : 0.09);
  const titleW = width - pillL - width * 0.06;
  const titleSize = fitFontSize({ chars: title.length, boxW: titleW, boxH: height * 0.11, lines: 2, charEm: 0.55, lineHeight: 1.05, max: unit * (land ? 5.4 : 6) });
  const titleBottom = titleTop + titleSize * (title.length * 0.55 * titleSize > titleW ? 2.2 : 1.15);
  const y0 = titleBottom + height * 0.04;
  const y1 = height * (tall ? 0.86 : 0.9);
  const slot = (y1 - y0) / n;
  const ys = nodes.map((_, k) => y0 + (k + 0.62) * slot);
  const pillH = Math.min(unit * 7.4, slot * 0.4);
  const longest = Math.max(...nodes.map((d) => d.text.length), 4);
  const pillSize = fitFontSize({ chars: longest, boxW: pillW * 0.84, boxH: pillH * 0.48, charEm: 0.55, max: unit * 3.2 });
  const noteX = trunkX + pillW / 2 + width * (land ? 0.07 : 0.06);
  const noteW = width - noteX - width * 0.05;
  const longestNote = Math.max(...nodes.map((d) => d.note.length), 8);
  const noteSize = fitFontSize({ chars: longestNote, boxW: noteW, boxH: slot * 0.5, lines: 2, charEm: 0.5, lineHeight: 1.35, max: unit * (land ? 3.4 : 3.2) });
  const headSize = Math.min(noteSize * 1.15, pillSize * 1.1);

  const T = Math.round(96 / n);
  const S = (k: number) => 12 + k * T;
  const stroke = withAlpha(color, 0.42);
  const sw = Math.max(1.5, unit * 0.22);
  const draw = (a: number, b: number) => ramp(frame, [a, b], [0, 1]);
  const loopOn = Boolean(loopLabel);
  const loopX = pillL - unit * 4;
  const loopStart = S(n) + 2;
  const loopP = easeInOut((frame - loopStart) / 20);

  const segs: { d: string; p: number; c: string }[] = [];
  nodes.forEach((_, k) => {
    const yTop = k === 0 ? titleBottom + unit * 1.2 : (ys[k - 1] ?? 0) + pillH / 2;
    const y = ys[k] ?? 0;
    segs.push({ d: `M${trunkX} ${yTop} L${trunkX} ${y - pillH / 2}`, p: draw(S(k), S(k) + 9), c: stroke });
    const bx = trunkX + pillW / 2;
    segs.push({ d: `M${bx} ${y} L${noteX - unit * 1.6} ${y - slot * 0.18}`, p: draw(S(k) + 13, S(k) + 19), c: stroke });
  });
  const yF = ys[0] ?? 0;
  const yL = ys[n - 1] ?? 0;
  const ah = unit * 1.1;

  if (tall) {
    const readable = stageHeight * 0.032;
    const left = width * 0.13, cardWidth = width * 0.8;
    const top = height * 0.17, rowHeight = height * 0.21;
    return <AbsoluteFill style={{ background, opacity: 1 - exit }}>
      <div data-21st-slot="title" style={{ position: "absolute", left: width * 0.08, top: height * 0.045, width: width * 0.84, color: accent, fontFamily: font, fontWeight: 600, fontSize: readable * 1.2, lineHeight: 1.2 }}>{title}</div>
      <svg width={width} height={height} style={{ position: "absolute", inset: 0 }}>
        {nodes.map((_, i) => <path key={i} d={`M${width * 0.075} ${top + i * rowHeight} V${top + (i + 1) * rowHeight} M${width * 0.075} ${top + i * rowHeight + rowHeight * 0.18} H${left}`} pathLength={1} stroke={accent} strokeWidth={sw} fill="none" strokeDasharray="1 1" strokeDashoffset={1 - draw(S(i), S(i) + 19)} />)}
      </svg>
      {nodes.map((node, i) => <div key={i} style={{ position: "absolute", left, top: top + i * rowHeight, width: cardWidth, height: rowHeight * 0.93, boxSizing: "border-box", padding: `${readable * 0.35}px ${readable * 0.5}px`, border: `1px solid ${withAlpha(accent, 0.5)}`, borderRadius: readable * 0.3, background: withAlpha(accent, 0.08), opacity: band(frame, S(i) + 9, S(i) + 14), transform: `translateY(${(1 - easeInOut(draw(S(i) + 9, S(i) + 20))) * readable * 0.4}px)`, fontFamily: font }}>
        <div data-21st-slot="nodes" style={{ color, fontSize: readable, fontWeight: 600, lineHeight: 1.25 }}>{node.text}</div>
        <div data-21st-slot="nodes" style={{ color: withAlpha(color, 0.7), fontSize: readable, lineHeight: 1.25, marginTop: readable * 0.35 }}>{node.note}</div>
      </div>)}
      {loopOn ? <div data-21st-slot="loopLabel" style={{ position: "absolute", left, top: top + n * rowHeight + readable * 0.25, width: cardWidth, color: accent, fontFamily: font, fontSize: readable, lineHeight: 1.25, opacity: band(frame, loopStart + 14, loopStart + 24) }}>↻ {loopLabel}</div> : null}
    </AbsoluteFill>;
  }

  return (
    <AbsoluteFill style={{ background, overflow: "hidden" }}>
      <AbsoluteFill style={{ background: background === "transparent" ? undefined : `radial-gradient(ellipse 50% 40% at ${(trunkX / width) * 100}% 10%, ${withAlpha(accent, 0.1)}, transparent 70%)`, opacity: band(frame, 0, 20) * (1 - exit) }} />
      <AbsoluteFill style={{ opacity: 1 - exit, transform: `translateY(${-exit * unit * 2}px)` }}>
        <div
          data-21st-slot="title"
          style={{ position: "absolute", left: pillL, top: titleTop, width: titleW, fontFamily: font, fontWeight: 600, fontSize: titleSize, lineHeight: 1.05, letterSpacing: "-0.035em", color: accent, opacity: band(frame, 0, 8) }}
        >
          {title}
        </div>
        <svg width={width} height={height} style={{ position: "absolute", inset: 0 }}>
          {segs.map((s, i) => (
            <path key={i} d={s.d} pathLength={1} stroke={s.c} strokeWidth={sw} fill="none" strokeLinecap="round" strokeDasharray="1 1" strokeDashoffset={1 - s.p} />
          ))}
          {loopOn ? (
            <>
              <path
                d={`M${pillL} ${yL} L${loopX} ${yL} L${loopX} ${yF} L${pillL - unit * 0.6} ${yF}`}
                pathLength={1}
                stroke={accent}
                strokeWidth={sw}
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeDasharray="1 1"
                strokeDashoffset={1 - loopP}
              />
              <path d={`M${pillL - unit * 0.6 - ah} ${yF - ah * 0.8} L${pillL - unit * 0.6} ${yF} L${pillL - unit * 0.6 - ah} ${yF + ah * 0.8}`} stroke={accent} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round" opacity={loopP >= 0.98 ? 1 : 0} />
            </>
          ) : null}
        </svg>
        {nodes.map((d, k) => {
          const y = ys[k] ?? 0;
          const pop = springSnap(frame, fps, S(k) + 9, POP);
          const noteO = band(frame, S(k) + 18, S(k) + 26);
          return (
            <React.Fragment key={k}>
              <div
                style={{
                  position: "absolute",
                  left: pillL,
                  top: y - pillH / 2,
                  width: pillW,
                  height: pillH,
                  borderRadius: pillH * 0.3,
                  background: `color-mix(in srgb, ${accent} 16%, ${background})`,
                  border: `${Math.max(1.5, unit * 0.2)}px solid ${withAlpha(accent, 0.8)}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: band(frame, S(k) + 9, S(k) + 12),
                  transform: `scale(${0.6 + 0.4 * pop})`,
                }}
              >
                <span data-21st-slot="nodes" style={{ fontFamily: font, fontWeight: 600, fontSize: pillSize, color, whiteSpace: "nowrap", letterSpacing: "-0.01em" }}>
                  {d.text}
                </span>
              </div>
              <div style={{ position: "absolute", left: noteX, width: noteW, top: y - slot * 0.18 - headSize * 0.7, opacity: noteO, transform: `translateY(${(1 - noteO) * unit}px)` }}>
                <div style={{ display: "flex", alignItems: "center", gap: headSize * 0.5, fontFamily: font, fontWeight: 600, fontSize: headSize, color, letterSpacing: "-0.01em" }}>
                  <span style={{ width: headSize * 0.4, height: headSize * 0.4, borderRadius: 999, background: accent, flexShrink: 0 }} />
                  {`Step ${k + 1}`}
                </div>
                <div data-21st-slot="nodes" style={{ fontFamily: font, fontWeight: 400, fontSize: noteSize, lineHeight: 1.35, color: withAlpha(color, 0.6), marginTop: noteSize * 0.4, textWrap: "pretty" }}>
                  {d.note}
                </div>
              </div>
            </React.Fragment>
          );
        })}
        {loopOn ? (
          <div
            data-21st-slot="loopLabel"
            style={{
              position: "absolute",
              left: loopX - unit * 2.2,
              top: (yF + yL) / 2,
              transform: "translate(-50%, -50%) rotate(-90deg)",
              fontFamily: font,
              fontWeight: 500,
              fontSize: Math.min(unit * 2.2, ((yL - yF) * 0.8) / Math.max(8, loopLabel.length * 0.55)),
              color: accent,
              whiteSpace: "nowrap",
              opacity: band(frame, loopStart + 14, loopStart + 24),
            }}
          >
            {loopLabel}
          </div>
        ) : null}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
