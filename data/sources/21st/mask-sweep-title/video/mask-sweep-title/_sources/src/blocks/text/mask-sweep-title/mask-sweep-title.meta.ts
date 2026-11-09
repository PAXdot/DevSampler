// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "text/reveal",
  tags: ["mask", "wipe", "slant", "sweep", "title", "reveal", "text"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 75, min: 30, max: 600 },
    stretch: "hold",
    phases: { in: 20, out: 0 },
    markers: { settled: 22 },
    beats: [2, 11, 17],
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
  slots: [
    { key: "title", type: "text", maxChars: 40, lines: 2, role: "headline" },
    { key: "subline", type: "text", maxChars: 64, lines: 2, role: "subline" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "title", prop: "mask", from: "left", settledBy: 11, easing: "ease" },
    { target: "subline", prop: "mask", from: "left", settledBy: 17, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 75] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "motion recipe from research V09 (slanted mask title reveal); own copy" },
});
