// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, random, useVideoConfig } from "remotion";
import type { z } from "zod";
import { inkOn, APPLE, band, brandFontStack, easeInOut, fitFontSize, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { fmtNum, prog } from "../_shared/num";
import { meta } from "./milestone-feed.meta";
import type { schema } from "./milestone-feed.schema";

const FIRST = ["Ava", "Kai", "Mira", "Leo", "Noor", "Ivan", "Sana", "Theo", "Yuki", "Omar", "Lena", "Ravi", "Zoe", "Hugo", "Iris", "Mateo", "Nia", "Felix", "Aria", "Jonas"];
const LAST = ["Park", "Okafor", "Silva", "Novak", "Haddad", "Lind", "Mori", "Costa", "Reyes", "Vogel", "Byrne", "Shah", "Kowal", "Dumas", "Ito", "Berg"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const START = 12;
const HOLD = 42;

function person(seed: number, k: number) {
  const a = random(`mf-${seed}-${k}-a`);
  const b = random(`mf-${seed}-${k}-b`);
  const c = random(`mf-${seed}-${k}-c`);
  const first = FIRST[Math.floor(a * FIRST.length)]!;
  const last = LAST[Math.floor(b * LAST.length)]!;
  return { name: `${first} ${last}`, initials: `${first[0]}${last[0]}`, hue: Math.floor(c * 360) };
}

export const Component: React.FC<z.infer<typeof schema>> = ({ project, verb, unit, target, seed, color, accent, background, fontFamily, monoFontFamily }) => {
  const { fps } = useVideoConfig();
  const { width, height, portrait } = useLayout();
  const minFont = Math.ceil(height * (portrait ? 0.03125 : 0.01875));
  const { frame, durationInFrames, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const mono = brandFontStack(monoFontFamily);

  const end = Math.max(START + 30, durationInFrames - HOLD - meta.timing.phases.out);
  const idxAt = (f: number) => 1 + (target - 1) * easeInOut(prog(f, START, end));
  const idx = idxAt(frame);
  const speed = Math.abs(idxAt(frame) - idxAt(frame - 1));
  const done = frame >= end;

  const padX = width * (portrait ? 0.07 : 0.14);
  const innerW = width - padX * 2;
  const headH = height * (portrait ? 0.1 : 0.16);
  const rowH = height * (portrait ? 0.12 : 0.2);
  const listTop = height * (portrait ? 0.2 : 0.26);
  const nameSize = Math.min(rowH * 0.24, innerW * 0.05);
  const metaSize = Math.max(minFont, nameSize * 0.72);
  const projSize = fitFontSize({ chars: project.length + 2, boxW: innerW * 0.5, boxH: headH * 0.5, charEm: 0.56, max: headH * 0.36 });
  const counterText = `${fmtNum(target)} ${unit}`;
  const countSize = Math.max(minFont, fitFontSize({ chars: counterText.length, boxW: innerW * 0.38, boxH: headH * 0.4, charEm: 0.6, max: projSize * 0.82 }));
  const enter = springSnap(frame, fps, 0, APPLE);
  const leave = 1 - exit;
  const lock = springSnap(frame, fps, end, APPLE);
  const blur = Math.min(rowH * 0.06, speed * rowH * 0.012);

  // Newest on top: each new row drops in from above and pushes the feed down.
  const newest = Math.min(target, Math.ceil(idx));
  const visible = Math.ceil((height - listTop) / rowH) + 1;
  const rows: number[] = [];
  for (let k = newest; k > newest - visible && k >= 1; k--) rows.push(k);

  return (
    <AbsoluteFill style={{ background, fontFamily: font, color, overflow: "hidden" }}>
      <AbsoluteFill style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${withAlpha(accent, 0.14 + 0.1 * lock)}, transparent 70%)` }} />
      <div style={{ position: "absolute", left: padX, right: padX, top: 0, bottom: 0, opacity: leave }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: listTop,
            bottom: 0,
            filter: blur > 0.3 ? `blur(${blur.toFixed(2)}px)` : undefined,
            overflow: "hidden",
            WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 50%, transparent 96%)",
            opacity: band(frame, 4, 14),
          }}
        >
          {rows.map((k) => {
            const p = person(seed, k);
            const y = (idx - k) * rowH;
            const isLast = k === target && done;
            // Fade the complete activity row before its copy crosses the lower clip.
            const edgeOpacity = Math.max(0, Math.min(1, (height - listTop - y - rowH * 0.86) / (rowH * 0.3)));
            const day = 1 + Math.floor(((k - 1) / Math.max(1, target - 1)) * 27);
            const month = MONTHS[(9 + Math.floor((k - 1) / Math.max(1, target / 3))) % 12];
            return (
              <div
                key={k}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: y,
                  height: rowH * 0.86,
                  display: "flex",
                  alignItems: "center",
                  gap: nameSize * 0.8,
                  padding: `0 ${nameSize * 0.9}px`,
                  borderRadius: rowH * 0.14,
                  background: isLast ? withAlpha(accent, 0.12 * lock) : withAlpha(color, 0.035),
                  border: `1px solid ${isLast ? withAlpha(accent, 0.1 + 0.45 * lock) : withAlpha(color, 0.07)}`,
                  boxSizing: "border-box",
                  opacity: edgeOpacity,
                  transform: isLast ? `scale(${1 + 0.015 * Math.sin(lock * Math.PI)})` : undefined,
                }}
              >
                <div
                  style={{
                    width: rowH * 0.48,
                    height: rowH * 0.48,
                    flex: "0 0 auto",
                    borderRadius: 99,
                    background: `linear-gradient(135deg, ${accent}, ${withAlpha(accent, 0.8)})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: Math.max(minFont, nameSize * 0.72),
                    fontWeight: 600,
                    color: inkOn(accent),
                  }}
                >
                  {p.initials}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: metaSize * 0.3, minWidth: 0 }}>
                  <div style={{ fontSize: nameSize, fontWeight: 600, whiteSpace: "nowrap" }}>{p.name}</div>
                  <div style={{ fontSize: metaSize, color: withAlpha(color, 0.5), whiteSpace: "nowrap" }}>
                    <span data-21st-slot="verb">{verb}</span> {month} {day}
                  </div>
                </div>
                <div style={{ flex: 1 }} />
                <div style={{ fontFamily: mono, fontSize: nameSize * 0.9, color: isLast ? accent : withAlpha(color, 0.4), fontVariantNumeric: "tabular-nums" }}>#{fmtNum(k)}</div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: height * 0.06,
            height: headH,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            opacity: band(frame, 0, 10),
            transform: `translateY(${(1 - enter) * headH * 0.3}px)`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: projSize * 0.5 }}>
            <span style={{ width: projSize * 0.9, height: projSize * 0.9, borderRadius: projSize * 0.24, background: `linear-gradient(135deg, ${accent}, ${withAlpha(accent, 0.5)})` }} />
            <span data-21st-slot="project" style={{ fontSize: projSize, fontWeight: 600, letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
              {project}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: countSize * 0.35,
              padding: `${countSize * 0.45}px ${countSize * 0.85}px`,
              borderRadius: 99,
              border: `1px solid ${done ? withAlpha(accent, 0.6) : withAlpha(color, 0.14)}`,
              background: done ? withAlpha(accent, 0.14 * lock) : withAlpha(color, 0.04),
              fontSize: countSize,
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            <span data-21st-slot="target" style={{ fontVariantNumeric: "tabular-nums", color }}>{fmtNum(Math.floor(idx))}</span>
            <span data-21st-slot="unit" style={{ color: withAlpha(color, 0.55), fontWeight: 500 }}>
              {unit}
            </span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
