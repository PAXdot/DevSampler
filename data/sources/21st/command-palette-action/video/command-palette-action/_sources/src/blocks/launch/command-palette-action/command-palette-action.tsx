// Built with Remotion - https://remotion.pro/license
import React from "react";
import type { z } from "zod";
import { easeInOut, expoOut, fitFontSize, ramp, withAlpha } from "../../../kit/index";
import { Label, Stage, opening, useLaunch } from "../shared";
import { meta } from "./command-palette-action.meta";
import type { schema } from "./command-palette-action.schema";
export const Component: React.FC<z.infer<typeof schema>> = ({ query, actions, selected, result, theme, accent, fontFamily, surfaceColor, textColor }) => {
  const { width: w, height: h, unit: u, portrait, frame, exit, p, font, nativeFont } = useLaunch(theme, fontFamily, meta.timing, { surfaceColor, textColor });
  const cw = w * 0.88, row = portrait ? h * 0.105 : Math.min(u * 12, h * 0.13), top = row * 1.3;
  const chosen = Math.min(selected, actions.length - 1);
  const done = easeInOut(ramp(frame, [82, 96], [0, 1]));
  const typed = query.slice(0, Math.floor(ramp(frame, [14, 42], [0, query.length])));
  const qfs = Math.max(nativeFont, fitFontSize({ chars: query.length + 2, boxW: cw * 0.8, boxH: row, max: u * 3.8, lines: portrait ? 2 : 1 }));
  return <Stage font={font} opacity={opening(frame, exit)}>
    <div style={{ width: cw, borderRadius: u * 2.4, background: p.surface, boxShadow: p.shadow(u), padding: u * 2, transform: `translateY(${(1 - expoOut(frame / 16)) * u * 8}px) scale(${0.92 + 0.08 * expoOut(frame / 16)})` }}>
      <div style={{ height: top, display: "flex", gap: u * 2, alignItems: "center", padding: `0 ${u * 2}px`, borderBottom: `1px solid ${p.line}`, color: p.ink }}>
        <span style={{ color: accent, fontSize: u * 4 }}>⌕</span><div data-21st-slot="query" style={{ fontSize: qfs, whiteSpace: portrait ? "normal" : "nowrap", lineHeight: 1.25, overflowWrap: "anywhere" }}>{typed}<span style={{ opacity: frame < 42 || Math.floor(frame / 10) % 2 === 0 ? 1 : 0 }}>|</span></div>
      </div>
      <div style={{ position: "relative", height: row * actions.length + u * 3 }}>
        <div style={{ opacity: 1 - done, paddingTop: u * 1.4 }}>
          {actions.map((action, i) => <div key={i} style={{ height: row, display: "flex", alignItems: "center", gap: u * 2, borderRadius: u * 1.2, padding: `0 ${u * 2}px`, background: i === chosen && frame >= 48 ? withAlpha(accent, 0.12) : "transparent", opacity: ramp(frame, [20 + i * 5, 30 + i * 5], [0, 1]) }}><div style={{ width: u * 4, height: u * 4, borderRadius: u, background: withAlpha(accent, 0.16), color: accent, display: "grid", placeItems: "center", fontSize: u * 2.5 }}>↗</div><Label min={nativeFont} lines={portrait ? 2 : 1} slot="actions" text={action} width={cw * 0.73} height={row} color={p.ink} max={u * 3.2} /></div>)}
        </div>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", gap: u * 3, padding: u * 3, opacity: done, transform: `translateY(${(1 - done) * u * 3}px)` }}><div style={{ color: accent, fontSize: u * 7 }}>✓</div><Label min={nativeFont} lines={portrait ? 2 : 1} text={result} slot="result" width={cw * 0.74} height={portrait ? nativeFont * 2.6 : u * 10} color={p.ink} max={u * 4} /></div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${p.line}`, padding: `${u * 1.5}px ${u * 2}px`, fontSize: u * 2, color: p.muted }}><span>↑ ↓ to navigate</span><span style={{ background: frame >= 70 && frame < 82 ? accent : p.raised, color: frame >= 70 && frame < 82 ? p.surface : p.muted, padding: `${u * 0.8}px ${u * 1.6}px`, borderRadius: u }}>↵ Run</span></div>
    </div>
  </Stage>;
};
