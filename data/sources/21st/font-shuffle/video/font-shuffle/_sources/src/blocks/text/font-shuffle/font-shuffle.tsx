// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import { loadFont as loadBebas } from "@remotion/google-fonts/BebasNeue";
import { loadFont as loadCaveat } from "@remotion/google-fonts/Caveat";
import type { z } from "zod";
import { MONO, SERIF, brandFontStack, easeOut, expoOut, fitFontSize, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { textEm } from "../shared";
import { meta } from "./font-shuffle.meta";
import type { schema } from "./font-shuffle.schema";

// OFL display faces for the in-between frames, loaded once on first use.
let extra: { script: string; condensed: string } | null = null;
function extraFonts() {
  extra ??= {
    script: loadCaveat("normal", { weights: ["600"], subsets: ["latin"] }).fontFamily,
    condensed: loadBebas("normal", { weights: ["400"], subsets: ["latin"] }).fontFamily,
  };
  return extra;
}

const FIRST_SWAP = 10;

export const Component: React.FC<z.infer<typeof schema>> = ({ text, color, accent, fontFamily, serifFontFamily, accentFontFamily, displayFontFamily, monoFontFamily, swapEvery, entry }) => {
  const { width, height, portrait } = useLayout();
  const { frame, outStart } = useEnterExit(meta.timing);
  const script = brandFontStack(accentFontFamily ?? "Caveat");
  const condensed = brandFontStack(displayFontFamily ?? "Bebas Neue");

  // Each face gets a size trim so the word keeps roughly the same footprint.
  const faces = [
    { family: brandFontStack(serifFontFamily ?? "Instrument Serif"), weight: 400, style: "italic" as const, scale: 1.12, track: "-0.01em" },
    { family: script, weight: 600, style: "normal" as const, scale: 1.18, track: "0em" },
    { family: condensed, weight: 400, style: "normal" as const, scale: 1.2, track: "0.01em" },
    { family: brandFontStack(monoFontFamily ?? "Geist Mono"), weight: 500, style: "normal" as const, scale: 0.88, track: "-0.04em" },
    { family: brandFontStack(fontFamily), weight: 600, style: "normal" as const, scale: 1, track: "-0.045em" },
  ];
  const k = frame < FIRST_SWAP ? 0 : Math.min(faces.length - 1, Math.floor((frame - FIRST_SWAP) / swapEvery) + 1);
  const face = faces[k]!;
  const final = k === faces.length - 1;

  const n = Math.max(text.length, 4);
  const charEm = Math.max(0.56, textEm(text, -0.03) / n);
  const size = fitFontSize({ chars: n, boxW: width * 0.82, boxH: height * 0.7, charEm, lineHeight: 1.1, max: Math.min(height * 0.42, width * (portrait ? 0.3 : 0.16)) });

  const enter = expoOut(frame / 9);
  const scale = entry === "zoom" ? 1.6 - 0.6 * enter : 1;
  const leave = easeOut((frame - outStart) / 6);

  if (portrait) return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", minHeight: height * 0.78, maxWidth: width * 0.9 }}>
        {faces.map((item, index) => <div key={index} data-21st-slot="text" style={{ fontFamily: item.family, fontWeight: item.weight, fontStyle: item.style, fontSize: size * item.scale, lineHeight: 1.1, letterSpacing: item.track, textAlign: "center", color: index === k ? color : withAlpha(accent, 0.65), opacity: ramp(frame, [index * 2, index * 2 + 5], [0, 1]), transform: `translateX(${index === k ? 0 : (index % 2 ? 1 : -1) * size * 0.1}px)`, overflowWrap: "anywhere" }}>{text}</div>)}
      </div>
    </AbsoluteFill>
  );

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div
        data-21st-slot="text"
        style={{
          fontFamily: face.family,
          fontWeight: face.weight,
          fontStyle: face.style,
          fontSize: size * face.scale,
          lineHeight: 1.1,
          letterSpacing: face.track,
          color: final ? color : accent,
          whiteSpace: "nowrap",
          opacity: ramp(frame, [0, entry === "zoom" ? 3 : 8], [0, 1]) * (1 - leave),
          transform: scale === 1 && leave === 0 ? undefined : `scale(${scale * (1 - 0.04 * leave)})`,
          filter: leave > 0 ? `blur(${leave * size * 0.08}px)` : undefined,
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};
