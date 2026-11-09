// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "text/kinetic",
  tags: ["zoom", "pop", "lines", "end line", "app launch", "text"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 75, min: 30, max: 600 },
    stretch: "hold",
    phases: { in: 14, out: 0 },
    markers: { settled: 14 },
    beats: [2, 9],
  },
  layout: {
    aspects: ["1:1", "9:16", "16:9"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.1, y: 0.2, w: 0.8, h: 0.6 },
    safeArea: "title",
    transparent: true,
    preset: "center",
    backdrop: [],
  },
  slots: [{ key: "lines", type: "list", maxChars: 28, lines: 4, role: "headline" }],
  brand: { color: "colors.text", accent: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [{ target: "line", prop: "scale", from: "0.1", settledBy: 14, easing: "ease" }],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 75] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "motion recipe from research V07 (line by line zoom text); own copy" },
});
