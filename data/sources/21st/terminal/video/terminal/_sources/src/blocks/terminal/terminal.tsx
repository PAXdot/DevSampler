// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { band, inkOn, luminance, withAlpha, brandFontStack, springSnap, useClipPhases, useLayout } from "../../kit/index";
import { wrappedCode } from "../data-code/_shared/code";
import { meta } from "./terminal.meta";
import type { schema } from "./terminal.schema";

type Line = z.infer<typeof schema>["lines"][number];


/** Frame each line starts and finishes appearing. Commands type, outputs pop after a beat. */
function schedule(lines: Line[], cps: number, fps: number, start: number) {
  let t = start;
  return lines.map((l) => {
    if (l.kind === "cmd") {
      const begin = t + 8;
      const end = begin + Math.ceil((l.text.length / cps) * fps);
      t = end + 10; // hit enter
      return { begin, end };
    }
    const begin = t;
    t = begin + 6;
    return { begin, end: begin };
  });
}

export const Component: React.FC<z.infer<typeof schema>> = ({ title, lines, cps, accent, background, windowColor, textColor, fontFamily, monoFontFamily }) => {
  const { fps } = useVideoConfig();
  const ink = textColor ?? inkOn(windowColor);
  const font = brandFontStack(fontFamily);
  const mono = brandFontStack(monoFontFamily);
  const muted = withAlpha(ink, 0.64);
  const faint = withAlpha(ink, 0.38);
  const layout = useLayout();
  const portrait = layout.portrait;
  const width = layout.width * (portrait ? 0.9 : 0.8);
  const height = layout.height * (portrait ? 0.88 : 0.6);
  const minFont = Math.ceil(layout.height * (portrait ? 0.03125 : 0.01875));
  const { frame: rawFrame, outStart, durationInFrames } = useClipPhases(meta.timing);
  const times = schedule(lines, cps, fps, 16);
  // A short clip keeps the complete command/output sequence before its hold.
  const transcriptEnd = Math.max(1, ...times.map(t => t.end + 6));
  const timeScale = Math.min(1, durationInFrames * 0.92 / transcriptEnd);
  const frame = rawFrame / timeScale;

  const enter = springSnap(rawFrame, fps, 0);
  const opacity = band(rawFrame, 0, 10, outStart, durationInFrames);
  const scale = 0.96 + 0.04 * enter - (rawFrame > outStart ? 0.02 * ((rawFrame - outStart) / Math.max(1, durationInFrames - outStart)) : 0);
  const winW = width * (portrait ? 0.94 : 0.9);
  const headerRows = Math.max(1, Math.ceil(title.length * minFont * 0.65 / (winW * 0.82)));
  const chrome = Math.max(minFont * (headerRows * 1.3 + 0.8), Math.min(height * 0.1, width * 0.034));
  const maxWinH = height * 0.92;
  let fontSize = Math.max(minFont, Math.min(height * 0.06, winW / (portrait ? 30 : 44)));
  const columns = (size: number) => Math.max(8, Math.floor((winW - size * (portrait ? 3.4 : 5.8)) / (size * 0.6 * 1.02)));
  const rowsAt = (size: number) => lines.reduce((n, line) => n + wrappedCode(line.text, "plain", columns(size)).grid.lines, 0);
  for (let i = 0; i < 24 && fontSize > minFont; i++) {
    if (chrome + fontSize * 2.6 + rowsAt(fontSize) * fontSize * (portrait ? 1.6 : 1.75) <= maxWinH) break;
    fontSize = Math.max(minFont, fontSize * 0.92);
  }
  const rowHeight = fontSize * (portrait ? 1.6 : 1.75);
  const padY = fontSize * (portrait ? 0.6 : 1.3);
  const padX = fontSize * (portrait ? 0.6 : 1.8);
  const winH = Math.min(maxWinH, Math.max(portrait ? height * 0.82 : 0, chrome + padY * 2 + rowsAt(fontSize) * rowHeight));

  let caretLine = -1;
  times.forEach((t, i) => { if (frame >= t.begin) caretLine = i; });
  const caretOn = Math.floor(rawFrame / 16) % 2 === 0 || (caretLine >= 0 && frame < (times[caretLine]?.end ?? 0));
  const visible = lines.flatMap((line, i) => {
    const time = times[i]!;
    if (frame < time.begin) return [];
    const shown = line.kind === "cmd" ? line.text.slice(0, Math.floor(((frame - time.begin) / fps) * cps)) : line.text;
    const view = wrappedCode(shown, "plain", columns(fontSize));
    return [{ line, i, time, view }];
  });
  // The transcript retains its history and scrolls to the active command.
  const transcriptHeight = visible.reduce((n, row) => n + row.view.grid.lines * rowHeight, 0);
  const viewportHeight = winH - chrome - padY * 2;
  let scrollY = 0;
  let remainingHeight = transcriptHeight;
  // Scroll complete logical lines, keeping the first visible command uncropped.
  for (const row of visible) {
    if (remainingHeight <= viewportHeight) break;
    const lineHeight = row.view.grid.lines * rowHeight;
    scrollY += lineHeight;
    remainingHeight -= lineHeight;
  }
  const shadow = luminance(windowColor) < luminance(ink) ? windowColor : ink;
  const dot = Math.min(chrome, 64) * 0.25;

  return (
    <AbsoluteFill style={{ background, justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: winW, height: winH, opacity, transform: `scale(${scale})`, borderRadius: Math.min(chrome * 0.3, 18), background: windowColor, border: `1px solid ${withAlpha(ink, 0.09)}`, boxShadow: `0 ${Math.min(chrome, 64) * 0.5}px ${Math.min(chrome, 64) * 1.6}px ${withAlpha(shadow, 0.55)}`, overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ height: chrome, flex: `0 0 ${chrome}px`, display: "flex", alignItems: "center", padding: `0 ${Math.min(chrome, 64) * 0.38}px`, borderBottom: `1px solid ${withAlpha(ink, 0.06)}`, position: "relative" }}>
          {[0.5, 0.35, 0.2].map(alpha => <span key={alpha} style={{ width: dot, height: dot, borderRadius: 999, background: withAlpha(ink, alpha), marginRight: dot * 0.68 }} />)}
          <span data-21st-slot="title" style={{ position: "absolute", left: "10%", right: "8%", top: minFont * 0.35, textAlign: "center", whiteSpace: "normal", overflowWrap: "anywhere", lineHeight: 1.3, fontFamily: font, fontWeight: 500, fontSize: minFont, color: muted, pointerEvents: "none" }}>{title}</span>
        </div>
        <div style={{ flex: 1, minHeight: 0, overflow: "hidden", padding: `${padY}px ${padX}px`, boxSizing: "border-box" }}>
          <div style={{ height: "100%", overflow: "hidden" }}>
          <div data-21st-slot="lines" style={{ fontFamily: mono, fontSize, lineHeight: `${rowHeight}px`, transform: `translateY(${-scrollY}px)` }}>
            {visible.map(({ line, i, time, view }) => {
              const color = line.kind === "ok" ? accent : line.kind === "out" ? muted : line.kind === "dim" ? faint : ink;
              return (
                <div key={i} style={{ display: "flex", gap: fontSize * 0.6, height: view.grid.lines * rowHeight, color, opacity: line.kind === "cmd" ? 1 : band(frame, time.begin, time.begin + 5) }}>
                  <span style={{ color: accent, width: fontSize * 0.6, flex: "0 0 auto" }}>{line.kind === "cmd" ? "$" : line.kind === "ok" ? "✓" : ""}</span>
                  <span style={{ whiteSpace: "pre", minWidth: 0 }}>{view.source}{i === caretLine && caretOn ? <span style={{ color: ink }}>▋</span> : null}</span>
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
