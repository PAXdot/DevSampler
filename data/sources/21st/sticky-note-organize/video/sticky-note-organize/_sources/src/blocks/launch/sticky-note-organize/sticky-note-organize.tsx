// Built with Remotion - https://remotion.pro/license
import React from "react";
import type { z } from "zod";
import { easeInOut, fitFontSize, ramp, withAlpha } from "../../../kit/index";
import { Label, Stage, opening, useLaunch } from "../shared";
import { meta } from "./sticky-note-organize.meta";
import type { schema } from "./sticky-note-organize.schema";
const scattered = [[-0.08, 0.12, -12], [0.16, -0.1, 9], [-0.05, 0.2, -5], [0.12, -0.15, 13], [-0.18, 0.07, -9], [0.08, -0.06, 5]];
export const Component: React.FC<z.infer<typeof schema>> = ({ title, notes, theme, accent, fontFamily, surfaceColor, textColor }) => {
  const { width: w, height: h, unit: u, portrait, frame, exit, p, font, nativeFont } = useLaunch(theme, fontFamily, meta.timing, { surfaceColor, textColor });
  const cols = portrait ? 2 : 3, rows = Math.ceil(notes.length / cols), gap = u * 3;
  const bw = w * 0.86, bh = h * 0.63, nw = (bw - gap * (cols - 1)) / cols, nh = (bh - gap * (rows - 1)) / rows;
  const organize = easeInOut(ramp(frame, [38, 88], [0, 1]));
  return <Stage font={font} opacity={opening(frame, exit)}><div style={{ width: bw }}>
    <div style={{ paddingBottom: u * 7 }}><Label min={nativeFont} lines={portrait ? 2 : 1} text={title} slot="title" width={bw} height={portrait ? nativeFont * 2.6 : u * 8} color={p.ink} max={u * 4.4} /></div>
    <div style={{ position: "relative", width: bw, height: bh }}>
      {notes.map((note, i) => { const [dx, dy, rot] = scattered[i]!; const scatterY = i < cols ? Math.max(0, dy!) : dy!; const t = ramp(frame, [i * 4, 16 + i * 4], [0, 1]); const fs = Math.max(nativeFont, fitFontSize({ chars: note.length, boxW: nw * 0.8, boxH: nh * 0.54, lines: 3, max: u * 3.4 })); return <div key={i} style={{ position: "absolute", left: (i % cols) * (nw + gap), top: Math.floor(i / cols) * (nh + gap), width: nw, height: nh, padding: u * 2.3, boxSizing: "border-box", background: `color-mix(in srgb, ${accent} ${i % 2 ? 12 : 6}%, ${p.surface})`, color: p.ink, borderRadius: u * 0.7, boxShadow: `0 ${u}px ${u * 2.8}px ${withAlpha(p.ink, 0.12)}`, opacity: t, transform: `translate(${dx! * bw * (1 - organize)}px, ${scatterY * bh * (1 - organize) + (1 - t) * u * 5}px) rotate(${rot! * (1 - organize)}deg)` }}><div style={{ width: u * 3, height: u * 0.5, borderRadius: u, background: accent, marginBottom: u * 1.7 }} /><div data-21st-slot="notes" style={{ fontSize: fs, lineHeight: 1.2, overflowWrap: "anywhere" }}>{note}</div></div>; })}
    </div>
  </div></Stage>;
};
