// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "diagram/flow",
  tags: ["diagram", "flow", "arrow", "a to b", "explainer", "checklist", "nodes"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 60, max: 900 },
    stretch: "hold",
    phases: { in: 56, out: 0 },
    markers: { settled: 58 },
    beats: [0, 10, 22, 32, 40, 48],
  },
  layout: {
    aspects: ["16:9", "1:1", "9:16"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.1, y: 0.2, w: 0.8, h: 0.6 },
    safeArea: "action",
    transparent: true,
    preset: "center",
    backdrop: [],
  },
  slots: [
    { key: "from", type: "text", maxChars: 24, lines: 1, role: "name" },
    { key: "to", type: "text", maxChars: 24, lines: 1, role: "headline" },
    { key: "arrowLabel", type: "text", maxChars: 24, lines: 1, role: "label" },
    { key: "benefits", type: "list", maxChars: 36, role: "body" },
  ],
  brand: { monoFontFamily: "fonts.mono",  accent: "colors.primary", color: "colors.text", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "from", prop: "scale", from: "0.7", settledBy: 10, easing: "spring" },
    { target: "arrow", prop: "draw", settledBy: 22, easing: "ease" },
    { target: "to", prop: "scale", from: "0.7", settledBy: 32, easing: "spring" },
    { target: "benefits", prop: "y", from: "below", settledBy: 56, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party; motion recipe from research V13" },
});
