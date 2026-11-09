// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "data/chart",
  tags: ["chart", "bar chart", "stats", "growth", "data", "metric"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 90, min: 60, max: 600 },
    stretch: "hold",
    phases: { in: 44, out: 0 },
    markers: { settled: 48 },
    beats: [0, 8, 44],
  },
  layout: {
    aspects: ["16:9", "9:16", "1:1"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.1, y: 0.2, w: 0.8, h: 0.6 },
    safeArea: "action",
    transparent: true,
    preset: "center",
    backdrop: [],
  },
  slots: [
    { key: "title", type: "text", maxChars: 40, lines: 1, role: "headline" },
    { key: "values", type: "list" },
    { key: "labels", type: "list", maxChars: 8 },
  ],
  brand: { accent: "colors.primary", color: "colors.text", fontFamily: "fonts.heading", monoFontFamily: "fonts.mono" },
  motionBeats: [{ target: "bars", prop: "scaleY", from: "0", settledBy: 44, easing: "spring" }],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 90] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party" },
});
