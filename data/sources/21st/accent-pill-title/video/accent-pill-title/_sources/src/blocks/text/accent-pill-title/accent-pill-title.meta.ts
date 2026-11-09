// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "text/title",
  tags: ["chapter", "title", "pill", "highlight", "typing", "feature", "text"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 75, min: 36, max: 600 },
    stretch: "hold",
    phases: { in: 30, out: 0 },
    markers: { settled: 32 },
    beats: [3, 18, 30],
  },
  layout: {
    aspects: ["16:9", "9:16", "1:1"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.04, y: 0.06, w: 0.92, h: 0.88 },
    safeArea: "title",
    transparent: true,
    preset: "full",
    backdrop: [],
  },
  slots: [{ key: "title", type: "text", maxChars: 48, lines: 2, role: "headline" }],
  brand: { color: "colors.text", accent: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "title", prop: "chars", settledBy: 28, easing: "linear" },
    { target: "pill", prop: "scaleX", from: "0", settledBy: 30, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 75] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "motion recipe from research V04 (chapter titles with accent box); own copy" },
});
