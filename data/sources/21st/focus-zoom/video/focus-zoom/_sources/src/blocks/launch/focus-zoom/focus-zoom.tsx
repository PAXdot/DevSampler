// Built with Remotion - https://remotion.pro/license
import React from "react";
import type { z } from "zod";
import { easeInOut, ramp, withAlpha } from "../../../kit/index";
import { Label, Screen, Stage, opening, useLaunch } from "../shared";
import { meta } from "./focus-zoom.meta";
import type { schema } from "./focus-zoom.schema";
const mix = (a: number, b: number, t: number) => a + (b - a) * t;
// The loupe grows out of the focused region and redraws the screen at its own
// magnified size, so the detail stays crisp instead of a stretched bitmap.
export const Component: React.FC<z.infer<typeof schema>> = ({ image, label, focusX, focusY, zoom, theme, accent, fontFamily, surfaceColor, textColor }) => {
  const { width: w, height: h, unit: u, portrait, frame, exit, p, font, nativeFont } = useLaunch(theme, fontFamily, meta.timing, { surfaceColor, textColor });
  const cw = w * 0.9, ch = h * 0.68;
  const t = easeInOut(ramp(frame, [28, 64], [0, 1]));
  const lw = cw * (portrait ? 0.84 : 0.64), lh = ch * (portrait ? 0.68 : 0.64);
  const rw = lw / zoom, rh = lh / zoom;
  const rx = Math.max(0, Math.min(cw - rw, focusX * cw - rw / 2)), ry = Math.max(0, Math.min(ch - rh, focusY * ch - rh / 2));
  const bw = mix(rw, lw, t), bh = mix(rh, lh, t), bx = mix(rx, (cw - lw) / 2, t), by = mix(ry, (ch - lh) / 2, t), m = bw / rw;
  const ring = u * 0.24, radius = mix(u, u * 2.2, t);
  return <Stage font={font} opacity={opening(frame, exit)}><div style={{ width: cw }}>
    <div style={{ width: cw, height: ch, borderRadius: u * 2.5, position: "relative", boxShadow: p.shadow(u) }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: u * 2.5, overflow: "hidden" }}>
        <Screen image={image} width={cw} height={ch} theme={theme} p={p} accent={accent} frame={60} />
        <div style={{ position: "absolute", inset: 0, background: withAlpha(p.surface, 0.62 * t) }} />
      </div>
      <div style={{ position: "absolute", left: rx, top: ry, width: rw, height: rh, borderRadius: u, border: `${u * 0.16}px solid ${withAlpha(accent, 0.6 * t)}`, boxSizing: "border-box" }} />
      <div style={{ position: "absolute", left: bx - ring, top: by - ring, width: bw + ring * 2, height: bh + ring * 2, borderRadius: radius + ring, background: accent, opacity: Math.min(1, t * 4), boxShadow: p.shadow(u * mix(0.3, 1.4, t)) }}>
        <div style={{ position: "absolute", left: ring, top: ring, width: bw, height: bh, borderRadius: radius, overflow: "hidden", background: p.surface }}>
          <div style={{ position: "absolute", left: -rx * m, top: -ry * m }}><Screen image={image} width={cw * m} height={ch * m} theme={theme} p={p} accent={accent} frame={60} /></div>
        </div>
      </div>
    </div>
    <div style={{ paddingTop: u * 4, opacity: ramp(frame, [66, 78], [0, 1]) }}><Label min={nativeFont} lines={portrait ? 2 : 1} text={label} slot="label" width={cw} height={portrait ? nativeFont * 2.6 : u * 7} color={p.ink} max={u * 4.2} /></div>
  </div></Stage>;
};
