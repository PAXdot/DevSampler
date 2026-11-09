// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, expoOut, fitFontSize, inkOn, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Icon } from "../shared/icons";
import { Grow, palette, tint } from "../shared/theme";
import { meta } from "./chat-thread.meta";
import type { schema } from "./chat-thread.schema";

type Props = z.infer<typeof schema>;
type Item = { kind: "msg"; role: "user" | "assistant"; text: string; start: number } | { kind: "tool"; start: number };

const LH = 1.38;

export const Component: React.FC<Props> = ({ title, messages, toolLabel, runningLabel, doneLabel, placeholder, interval, theme, accent, background, fontFamily, surfaceColor, textColor, successColor, errorColor }) => {
  const { width: w, height: h, unit: u, aspect } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const portrait = aspect === "9:16";
  const nativeFont = useVideoConfig().height * (portrait ? 0.032 : 0.020);
  const p = palette(theme, { surfaceColor, textColor });

  // Timeline: one item per interval; the tool card follows the first assistant reply.
  const items: Item[] = [];
  let toolPlaced = !toolLabel;
  for (const m of messages) {
    items.push({ kind: "msg", role: m.role, text: m.text, start: 0 });
    if (!toolPlaced && m.role === "assistant") {
      items.push({ kind: "tool", start: 0 });
      toolPlaced = true;
    }
  }
  items.forEach((it, i) => (it.start = 10 + i * interval));

  // Panel geometry.
  const panelW = aspect === "16:9" ? Math.min(w * 0.5, h * 1.0) : aspect === "9:16" ? w * 0.88 : w * 0.78;
  const panelH = h * (aspect === "9:16" ? 0.88 : 0.84);
  const headH = panelH * 0.09;
  const compH = panelH * 0.12;
  const pad = panelW * 0.05;
  const colH = panelH - headH - compH - pad * 1.5;
  const base = Math.max(nativeFont, Math.min(u * 2.7, colH / (2.2 * (4 * LH + 2.4))));
  const bubbleMax = (panelW - pad * 2) * 0.8;
  const titleFs = Math.max(nativeFont, fitFontSize({ chars: title.length + 2, boxW: panelW * 0.6, boxH: headH * 0.5, max: base * 1.05 }));
  const smallFs = Math.max(nativeFont, base * 0.86);

  // Estimated item heights; an item scrolls away once newer items no longer leave room for it.
  const msgFs = (text: string) => Math.max(nativeFont, fitFontSize({ chars: text.length, boxW: bubbleMax - base * 2, boxH: base * LH * 4, lines: 4, charEm: 0.52, lineHeight: LH, max: base }));
  const heights = items.map((it) => {
    if (it.kind === "tool") return base * (portrait ? 12 : 8.4);
    const f = msgFs(it.text);
    const perLine = Math.max(1, Math.floor((bubbleMax - base * 2 - (it.role === "assistant" ? base * 2.5 : 0)) / (f * 0.45)));
    return Math.ceil(it.text.length / perLine) * f * LH + base * 1.24 + base * 0.9;
  });
  const pushedAt = items.map((_, i) => {
    let sum = 0;
    for (let j = i; j < items.length; j++) {
      sum += heights[j]!;
      if (sum > colH * 1.02) return items[j]!.start;
    }
    return Infinity;
  });

  const pIn = expoOut(frame / 14);
  const leave = 1 - exit;

  const renderItem = (it: Item, i: number) => {
    const appear = expoOut((it.start - (it.kind === "msg" && it.role === "assistant" ? 10 : 0) - frame) / -8);
    // An item collapses once `keep` newer items have arrived (the column scrolls up).
    const gone = Number.isFinite(pushedAt[i]!) ? expoOut((frame - pushedAt[i]!) / 8) : 0;
    if (frame < it.start - 12 || gone >= 1) return null;
    const grow = Math.min(appear, 1 - gone);
    const pop = expoOut((frame - it.start + (it.kind === "msg" && it.role === "assistant" ? 10 : 0)) / 6);
    if (it.kind === "tool") {
      const on = ramp(frame, [it.start, it.start + 6], [0.3, 1]);
      const doneT = ramp(frame, [it.start + 16, it.start + 20], [0, 1]);
      const fs = Math.max(nativeFont, fitFontSize({ chars: toolLabel.length + 2, boxW: bubbleMax * 0.6, boxH: base * 1.4, max: smallFs }));
      const pillFs = Math.max(nativeFont, fitFontSize({ chars: Math.max(runningLabel.length, doneLabel.length) + 1, boxW: bubbleMax * 0.24, boxH: base * 1.2, max: smallFs * 0.86 }));
      const green = successColor ?? accent;
      return (
        <Grow key={i} p={grow} style={{ paddingBottom: base * 0.9 * grow }}>
          <div style={{ width: bubbleMax, opacity: on * (1 - gone), borderRadius: u * 1.4, background: p.surface, boxShadow: `inset 0 0 0 1px ${p.line}`, overflow: "hidden" }}>
            <div style={{ display: "flex", flexDirection: portrait ? "column" : "row", alignItems: portrait ? "flex-start" : "center", gap: fs * 0.6, padding: `${base * 0.7}px ${base * 0.9}px`, borderBottom: `1px solid ${p.line}` }}>
              <Icon name="file-text" size={fs * 1.15} color={p.muted} />
              <span data-21st-slot="toolLabel" style={{ fontFamily: font, fontSize: fs, fontWeight: 500, color: p.ink, maxWidth: bubbleMax * 0.9, minWidth: 0, lineHeight: 1.25, whiteSpace: "normal", overflowWrap: "break-word" }}>
                {toolLabel}
              </span>
              <div style={{ flex: 1 }} />
              <div style={{ display: "grid", alignItems: "center", flexShrink: 0 }}>
                {[
                  { key: "runningLabel", text: runningLabel, c: accent, o: 1 - doneT, icon: "loader-circle" as const },
                  { key: "doneLabel", text: doneLabel, c: green, o: doneT, icon: "check" as const },
                ].map((s) => (
                  <div
                    key={s.key}
                    style={{
                      gridArea: "1 / 1",
                      justifySelf: "end",
                      display: "flex",
                      alignItems: "center",
                      gap: pillFs * 0.35,
                      padding: `${pillFs * 0.25}px ${pillFs * 0.7}px`,
                      borderRadius: 999,
                      background: withAlpha(s.c, p.dark ? 0.2 : 0.1),
                      opacity: s.o,
                      transform: `scale(${0.9 + 0.1 * s.o})`,
                    }}
                  >
                    <div style={{ transform: s.icon === "loader-circle" ? `rotate(${frame * 20}deg)` : undefined }}>
                      <Icon name={s.icon} size={pillFs * 0.95} color={s.c} strokeWidth={2.6} />
                    </div>
                    <span data-21st-slot={s.key} style={{ fontFamily: font, fontSize: pillFs, fontWeight: 600, color: s.c, maxWidth: bubbleMax * 0.9, lineHeight: 1.25, whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: portrait ? "anywhere" : undefined }}>
                      {s.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: `${base * 0.6}px ${base * 0.9}px`, display: "flex", flexDirection: "column", gap: base * 0.4 }}>
              {[
                { c: errorColor ?? accent, w: 0.72 },
                { c: successColor ?? accent, w: 0.86 },
                { c: successColor ?? accent, w: 0.58 },
              ].map((l, k) => (
                <div key={k} style={{ display: "flex", alignItems: "center", gap: base * 0.5, padding: `${base * 0.22}px ${base * 0.4}px`, borderRadius: base * 0.3, background: withAlpha(l.c, p.dark ? 0.14 : 0.08) }}>
                  <div style={{ width: base * 0.5, height: base * 0.12, background: l.c, borderRadius: 2 }} />
                  <div style={{ width: `${l.w * 100 * ramp(frame, [it.start + 2 + k * 3, it.start + 12 + k * 3], [0, 1])}%`, height: base * 0.42, borderRadius: 99, background: withAlpha(l.c, 0.45) }} />
                </div>
              ))}
            </div>
          </div>
        </Grow>
      );
    }
    const user = it.role === "user";
    const fs = msgFs(it.text);
    const typing = !user && frame < it.start;
    return (
      <Grow key={i} p={grow} style={{ paddingBottom: base * 0.9 * grow }}>
        <div style={{ display: "flex", justifyContent: user ? "flex-end" : "flex-start", alignItems: "flex-end", gap: base * 0.6, opacity: (1 - gone) * band(frame, it.start - 12, it.start - 8) }}>
          {!user ? (
            <div style={{ width: base * 1.9, height: base * 1.9, borderRadius: "50%", flexShrink: 0, display: "grid", placeItems: "center", background: tint(accent, p, 0.14) }}>
              <Icon name="sparkles" size={base * 1.05} color={accent} />
            </div>
          ) : null}
          <div
            style={{
              maxWidth: bubbleMax,
              padding: `${base * 0.62}px ${base * 0.95}px`,
              borderRadius: base * 1.1,
              borderBottomRightRadius: user ? base * 0.3 : base * 1.1,
              borderBottomLeftRadius: user ? base * 1.1 : base * 0.3,
              background: user ? accent : p.raised,
              color: user ? inkOn(accent) : p.ink,
              transformOrigin: user ? "100% 100%" : "0% 100%",
              transform: `scale(${0.9 + 0.1 * (typing ? 1 : pop)})`,
            }}
          >
            {typing ? (
              <div style={{ display: "flex", gap: base * 0.3, height: fs * LH, alignItems: "center" }}>
                {[0, 1, 2].map((d) => (
                  <div key={d} style={{ width: base * 0.45, height: base * 0.45, borderRadius: "50%", background: p.faint, transform: `translateY(${Math.sin((frame - d * 4) / 3) * base * 0.12}px)` }} />
                ))}
              </div>
            ) : (
              <span data-21st-slot="messages" style={{ fontFamily: font, fontSize: fs, lineHeight: LH, letterSpacing: "-0.008em", display: "block" }}>
                {it.text}
              </span>
            )}
          </div>
        </div>
      </Grow>
    );
  };

  const placeholderFs = Math.max(nativeFont, fitFontSize({ chars: placeholder.length + 2, boxW: panelW * 0.62, boxH: compH * 0.4, max: base * 0.95 }));

  return (
    <AbsoluteFill style={{ background, alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          background: background === "transparent" ? undefined : `radial-gradient(ellipse 55% 45% at 30% 20%, ${withAlpha(accent, 0.22)}, transparent 70%), radial-gradient(ellipse 50% 50% at 80% 90%, ${withAlpha(accent, 0.14)}, transparent 70%)`,
          opacity: leave,
        }}
      />
      <div
        style={{
          position: "relative",
          width: panelW,
          height: panelH,
          borderRadius: u * 2.4,
          background: p.surface,
          boxShadow: p.shadow(u),
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          opacity: band(frame, 0, 8) * leave,
          transform: `translateY(${(1 - pIn) * u * 3}px) scale(${(0.96 + 0.04 * pIn) * (1 - 0.04 * exit)})`,
        }}
      >
        <div style={{ height: headH, flexShrink: 0, display: "flex", alignItems: "center", gap: titleFs * 0.6, padding: `0 ${pad}px`, borderBottom: `1px solid ${p.line}` }}>
          <Icon name="sparkles" size={titleFs * 1.1} color={accent} />
          <span data-21st-slot="title" style={{ fontFamily: font, fontSize: titleFs, fontWeight: 600, letterSpacing: "-0.015em", color: p.ink, maxWidth: bubbleMax * 0.9, lineHeight: 1.25, whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: portrait ? "anywhere" : undefined }}>
            {title}
          </span>
        </div>
        <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: `0 ${pad}px`, overflow: "hidden" }}>{items.map(renderItem)}</div>
        <div style={{ height: compH, flexShrink: 0, padding: `${compH * 0.16}px ${pad}px ${compH * 0.22}px` }}>
          <div style={{ height: "100%", borderRadius: 999, background: p.raised, display: "flex", alignItems: "center", padding: `0 ${compH * 0.14}px 0 ${compH * 0.3}px`, gap: placeholderFs * 0.6, boxShadow: `inset 0 0 0 1px ${p.line}` }}>
            <span data-21st-slot="placeholder" style={{ fontFamily: font, fontSize: placeholderFs, color: p.faint, maxWidth: bubbleMax * 0.9, lineHeight: 1.25, whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: portrait ? "anywhere" : undefined }}>
              {placeholder}
            </span>
            <div style={{ flex: 1 }} />
            <div style={{ width: compH * 0.44, height: compH * 0.44, borderRadius: "50%", background: accent, display: "grid", placeItems: "center" }}>
              <Icon name="arrow-up" size={compH * 0.24} color={inkOn(accent)} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
