// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
export const meta = defineVideoMeta({
  spec: "21st.video/1", kind: "scene", category: "data/craft", job: "data", language: "glass",
  mechanic: ["fill"], tags: ["number", "percentage", "liquid", "glass", "vessel", "progress", "water", "slosh"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: { fps: 30, duration: { default: 180, min: 150, max: 600 }, stretch: "hold", phases: { in: 118, out: 0 },
    markers: { settled: 118, pour: 14, slosh: 76 }, beats: [0, 14, 76, 118] },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [{ key: "value", type: "number", role: "stat" }, { key: "label", type: "text", role: "subline", maxChars: 40, lines: 2 }],
  brand: { primary: "colors.primary", secondary: "colors.secondary", color: "colors.text", background: "colors.background", fontFamily: "fonts.display" },
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (numeral-shaped glass vessels fill to a percentage with a damped liquid surface, 2026-10-09)" },
});
