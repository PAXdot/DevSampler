// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "text/minimal",
  tags: ["whisper", "minimal", "interstitial", "word by word", "keynote", "text"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 90, min: 30, max: 600 },
    stretch: "hold",
    phases: { in: 40, out: 0 },
    markers: { settled: 42 },
    beats: [2, 38],
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
  slots: [{ key: "text", type: "text", maxChars: 90, lines: 2, role: "headline" }],
  brand: { color: "colors.text", accent: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [{ target: "text", prop: "words", settledBy: 40, easing: "linear" }],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 90] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "motion recipe from research V15 (small word-by-word interstitial); own copy" },
});
