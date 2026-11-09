// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "text/kinetic",
  tags: ["word cycler", "rotating word", "use cases", "highlight", "sentence", "text"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 45, max: 600 },
    stretch: "hold",
    phases: { in: 80, out: 0 },
    markers: { settled: 82 },
    beats: [4, 32, 46, 60, 74],
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
  slots: [
    { key: "prefix", type: "text", maxChars: 32, lines: 1, role: "headline" },
    { key: "words", type: "list", maxChars: 20, lines: 1, role: "kicker" },
    { key: "suffix", type: "text", maxChars: 32, lines: 1, role: "subline" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "sentence", prop: "y", from: "below", settledBy: 14, easing: "ease" },
    { target: "box", prop: "width", settledBy: 80, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "motion recipe from research V15 (word cycler in a highlight box); own copy" },
});
