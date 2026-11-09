// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "text/reveal",
  tags: ["typewriter", "typing", "caret", "cursor", "command", "text", "terminal"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 90, min: 40, max: 600 },
    stretch: "hold",
    phases: { in: 44, out: 0 },
    markers: { settled: 48, typed: 42 },
    beats: [4, 42, 46],
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
  slots: [{ key: "text", type: "text", maxChars: 80, lines: 3, role: "headline" }],
  brand: { monoFontFamily: "fonts.mono", color: "colors.text", accent: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "text", prop: "chars", settledBy: 42, easing: "linear" },
    { target: "accentWord", prop: "highlight", settledBy: 48, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 90] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "motion recipe from research V01, V04, V15 (typed lines with caret); own copy" },
});
