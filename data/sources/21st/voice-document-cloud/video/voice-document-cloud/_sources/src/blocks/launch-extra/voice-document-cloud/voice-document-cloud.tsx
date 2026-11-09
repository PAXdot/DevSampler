// Built with Remotion - https://remotion.pro/license
import React from "react";
import type { z } from "zod";
import { easeOut, fitFontSize, ramp, withAlpha } from "../../../kit/index";
import { Label, Screen, Stage, opening, useLaunch } from "../../launch/shared";
import { meta } from "./voice-document-cloud.meta";
import type { schema } from "./voice-document-cloud.schema";

export const Component: React.FC<z.infer<typeof schema>> = ({ headline, voiceLabel, documentTitles, image1, image2, image3, image4, amplitude, captureFrames, theme, accent, fontFamily, surfaceColor, textColor }) => {
  const { width: w, height: h, unit: u, portrait, frame, exit, durationInFrames, p, font, nativeFont } = useLaunch(theme, fontFamily, meta.timing, { surfaceColor, textColor });
  const f = frame * Math.max(1, 150 / durationInFrames), areaW = w * 0.92, areaH = h * 0.65;
  const cw = areaW * (portrait ? 0.43 : 0.34), ch = Math.min(areaH * 0.36, cw * (portrait ? 0.85 : 0.62)), images = [image1, image2, image3, image4];
  const voiceW = portrait ? areaW * 0.92 : Math.min(areaW * 0.64, u * 50), voiceH = portrait ? nativeFont * 2.5 : u * 8;
  const energy = amplitude * (1 - ramp(f, [captureFrames - 10, captureFrames], [0, 1]));
  return <Stage font={font} opacity={opening(frame, exit)}><div style={{ width: areaW }}>
    <Label min={nativeFont} lines={portrait ? 2 : 1} text={headline} slot="headline" width={areaW} height={portrait ? nativeFont * 2.6 : u * 7} color={p.ink} max={u * 4.4} weight={600} />
    <div style={{ position: "relative", width: areaW, height: areaH, marginTop: u * 3 }}>
      {documentTitles.map((title, i) => {
        const t = easeOut(ramp(f, [18 + i * 12, 34 + i * 12], [0, 1]));
        const x = (i % 2 === 0 ? 0.25 : 0.75) * areaW - cw / 2;
        const y = (i < 2 ? 0.22 : 0.8) * areaH - ch / 2;
        return <div key={i} style={{ position: "absolute", left: x, top: y, width: cw, height: ch, borderRadius: u * 1.6, background: p.surface, boxShadow: p.shadow(u * 0.6), opacity: t, transform: `translateY(${(1 - t) * u * 4}px) scale(${0.9 + t * 0.1})`, overflow: "hidden" }}>
          {images[i] ? <Screen image={images[i] ?? ""} width={cw} height={ch} theme={theme} p={p} accent={accent} frame={0} variant="article" /> : <div style={{ padding: u * 2 }}>
            <div data-21st-slot="documentTitles" style={{ color: p.ink, fontSize: Math.max(nativeFont, fitFontSize({ chars: title.length, boxW: cw - u * 4, boxH: u * 4, max: u * 2.1, lines: portrait ? 2 : 1 })), fontWeight: 600, whiteSpace: portrait ? "normal" : "nowrap", lineHeight: 1.25, overflowWrap: "anywhere" }}>{title}</div>
            {[0.87, 0.7, 0.79].map((n, j) => <div key={j} style={{ width: `${n * 100}%`, height: u * 0.55, marginTop: u * 1.3, borderRadius: u, background: p.bone }} />)}
          </div>}
        </div>;
      })}
      <div style={{ position: "absolute", left: (areaW - voiceW) / 2, top: (areaH - voiceH) / 2, width: voiceW, height: voiceH, background: p.surface, boxShadow: p.shadow(u * 0.65), borderRadius: voiceH / 2, display: "flex", alignItems: "center", padding: `0 ${u * 2}px`, gap: u * 1.6, boxSizing: "border-box" }}>
        <Label min={nativeFont} lines={portrait ? 2 : 1} text={voiceLabel} slot="voiceLabel" width={voiceW * (portrait ? 0.45 : 0.29)} height={voiceH * 0.65} color={p.muted} max={u * 2} />
        <svg width={voiceW * 0.42} height={voiceH * 0.6} viewBox="0 0 144 40" style={{ flexShrink: 0 }} aria-hidden="true">
          {Array.from({ length: 36 }, (_, i) => {
            const center = Math.sin((i / 35) * Math.PI);
            const pulse = 0.25 + Math.abs(Math.sin(i * 1.9 + Math.min(f, captureFrames) * 0.19)) * 0.75;
            const barH = 3 + center * pulse * energy * 34;
            return <rect key={i} x={i * 4} y={(40 - barH) / 2} width="2" height={barH} rx="1" fill={accent} />;
          })}
        </svg>
        <div style={{ width: u * 3.2, height: u * 3.2, borderRadius: "50%", background: withAlpha(accent, 0.12), display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><div style={{ width: u * 1.1, height: u * 1.1, background: accent, borderRadius: u * 0.2 }} /></div>
      </div>
    </div>
  </div></Stage>;
};
