// Built with Remotion - https://remotion.pro/license
import React from "react";
import type { z } from "zod";
import { easeOut, fitFontSize, ramp, withAlpha } from "../../../kit/index";
import { Label, Screen, Stage, opening, useLaunch } from "../../launch/shared";
import { meta } from "./environment-card-stack.meta";
import type { schema } from "./environment-card-stack.schema";

export const Component: React.FC<z.infer<typeof schema>> = ({ headline, titles, runtimes, details, image1, image2, image3, image4, tilt, stagger, theme, accent, fontFamily, surfaceColor, textColor }) => {
  const { width: w, height: h, unit: u, portrait, frame, exit, durationInFrames, p, font, nativeFont } = useLaunch(theme, fontFamily, meta.timing, { surfaceColor, textColor });
  const f = frame * Math.max(1, 150 / durationInFrames);
  const areaH = h * (portrait ? 0.78 : 0.66);
  const cw = w * (portrait ? 0.86 : titles.length === 4 ? 0.32 : 0.4), ch = portrait ? (areaH - u * 2 * (titles.length - 1)) / titles.length : Math.min(h * 0.48, cw * 0.68);
  const images = [image1, image2, image3, image4];
  return <Stage font={font} opacity={opening(frame, exit)}><div style={{ width: w * 0.92 }}>
    <Label min={nativeFont} lines={portrait ? 2 : 1} text={headline} slot="headline" width={w * 0.92} height={portrait ? nativeFont * 2.6 : u * 7} color={p.ink} max={u * 4.4} weight={600} />
    <div style={{ position: "relative", height: areaH, marginTop: u * 3, perspective: w * 2 }}>
      {titles.map((title, i) => {
        const t = easeOut(ramp(f, [8 + i * stagger, 26 + i * stagger], [0, 1]));
        const offset = i - (titles.length - 1) / 2;
        const x = portrait ? offset * cw * 0.08 : offset * cw * 0.57;
        const y = portrait ? offset * (ch + u * 2) : Math.abs(offset) * ch * 0.08;
        return <div key={i} style={{ position: "absolute", width: cw, height: ch, left: w * 0.46 - cw / 2 + x, top: areaH / 2 - ch / 2 + y, borderRadius: u * 2.4, background: p.surface, border: `1px solid ${p.line}`, boxShadow: p.shadow(u), overflow: "hidden", opacity: t, transform: `translateY(${(1 - t) * ch * 0.35}px) rotateY(${portrait ? 0 : -offset * tilt}deg) rotateZ(${portrait ? offset * tilt * 0.05 : offset * tilt * 0.2}deg)` }}>
          {images[i] ? <Screen image={images[i] ?? ""} width={cw} height={ch} theme={theme} p={p} accent={accent} frame={0} /> : <div style={{ padding: u * 3 }}>
            <div data-21st-slot="titles" style={{ fontSize: Math.max(nativeFont, fitFontSize({ chars: title.length, boxW: cw - u * 6, boxH: u * 4, max: u * 3, lines: portrait ? 2 : 1 })), color: p.ink, fontWeight: 600, whiteSpace: portrait ? "normal" : "nowrap", lineHeight: 1.25, overflowWrap: "anywhere" }}>{title}</div>
            <div style={{ height: 1, background: p.line, marginTop: u * 2, marginBottom: u * 2.4 }} />
            <div style={{ fontSize: u * 1.5, color: p.muted, marginBottom: u * 1 }}>WORKSPACE</div>
            <div data-21st-slot="runtimes" style={{ display: "inline-flex", padding: `${u * 0.8}px ${u * 1.4}px`, borderRadius: u, background: withAlpha(accent, 0.1), color: accent, fontSize: Math.max(nativeFont, fitFontSize({ chars: (runtimes[i % runtimes.length] ?? "").length, boxW: cw - u * 9, boxH: u * 3, max: u * 2, lines: portrait ? 2 : 1 })), whiteSpace: portrait ? "normal" : "nowrap", lineHeight: 1.25, overflowWrap: "anywhere" }}>{runtimes[i % runtimes.length]}</div>
            <div data-21st-slot="details" style={{ marginTop: u * 2, fontSize: Math.max(nativeFont, fitFontSize({ chars: (details[i % details.length] ?? "").length, boxW: cw - u * 6, boxH: u * 4, max: u * 2, lines: portrait ? 2 : 1 })), color: p.muted, whiteSpace: portrait ? "normal" : "nowrap", lineHeight: 1.25, overflowWrap: "anywhere" }}>{details[i % details.length]}</div>
          </div>}
        </div>;
      })}
    </div>
  </div></Stage>;
};
