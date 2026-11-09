// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "text/reveal",
  tags: ["outline", "stroke", "typing", "camera", "zoom", "title", "text"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 100, min: 60, max: 600 },
    stretch: "hold",
    phases: { in: 48, out: 0 },
    markers: { settled: 50, pullback: 40 },
    beats: [4, 40, 48],
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
    { key: "line1", type: "text", maxChars: 20, lines: 1, role: "headline" },
    { key: "line2", type: "text", maxChars: 24, lines: 1, role: "subline" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "letters", prop: "fill", from: "outline", settledBy: 40, easing: "linear" },
    { target: "camera", prop: "scale", from: "3", settledBy: 48, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 100] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "motion recipe from research V16 (outline to fill type, pull-back camera); own copy" },
});
