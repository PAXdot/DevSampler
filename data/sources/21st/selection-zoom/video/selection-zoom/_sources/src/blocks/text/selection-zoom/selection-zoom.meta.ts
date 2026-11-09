// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "text/emphasis",
  tags: ["selection", "highlight", "zoom", "keynote", "emphasis", "text", "minimal"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 90, min: 45, max: 600 },
    stretch: "hold",
    phases: { in: 36, out: 0 },
    markers: { settled: 37, zoom: 30 },
    beats: [4, 20, 30],
  },
  layout: {
    aspects: ["16:9", "9:16", "1:1"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.1, y: 0.2, w: 0.8, h: 0.6 },
    safeArea: "title",
    transparent: true,
    preset: "center",
    backdrop: [],
  },
  slots: [{ key: "phrase", type: "text", maxChars: 60, lines: 2, role: "headline" }],
  brand: { color: "colors.text", accent: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "phrase", prop: "words", settledBy: 16, easing: "linear" },
    { target: "selection", prop: "scaleX", from: "0", settledBy: 20, easing: "ease" },
    { target: "camera", prop: "scale", settledBy: 36, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 90] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "motion recipe from research V15 (selection highlight, snap zoom); own copy" },
});
