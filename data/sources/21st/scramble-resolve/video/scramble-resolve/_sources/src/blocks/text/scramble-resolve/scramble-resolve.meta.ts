// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "text/reveal",
  tags: ["scramble", "decode", "glitch", "wordmark", "reveal", "text", "hacker"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 96, min: 50, max: 600 },
    stretch: "hold",
    phases: { in: 46, out: 0 },
    markers: { settled: 48, locked: 27 },
    beats: [0, 8, 27, 37],
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
    { key: "text", type: "text", maxChars: 24, lines: 1, role: "name" },
    { key: "tagline", type: "text", maxChars: 56, lines: 1, role: "subline" },
  ],
  brand: { monoFontFamily: "fonts.mono",  color: "colors.text", accent: "colors.primary", accent2: "colors.secondary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "text", prop: "glyphs", from: "random", settledBy: 27, easing: "linear" },
    { target: "underline", prop: "scaleX", from: "0", settledBy: 37, easing: "ease" },
    { target: "tagline", prop: "opacity", settledBy: 48, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 96] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "motion recipe from research V03 (scramble wordmark); own copy and graphics" },
});
