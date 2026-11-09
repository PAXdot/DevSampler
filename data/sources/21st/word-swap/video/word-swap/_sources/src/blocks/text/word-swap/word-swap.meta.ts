// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "text/kinetic",
  tags: ["word swap", "push", "list", "problem", "contrast", "kinetic-type", "text"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 40, max: 600 },
    stretch: "hold",
    phases: { in: 80, out: 0 },
    markers: { settled: 82 },
    beats: [2, 38, 56, 74],
  },
  layout: {
    aspects: ["9:16", "1:1", "16:9"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.04, y: 0.06, w: 0.92, h: 0.88 },
    safeArea: "title",
    transparent: true,
    preset: "full",
    backdrop: [],
  },
  slots: [
    { key: "staticLine", type: "text", maxChars: 32, lines: 1, role: "headline" },
    { key: "words", type: "list", maxChars: 20, lines: 1, role: "kicker" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "staticLine", prop: "y", from: "below", settledBy: 14, easing: "ease" },
    { target: "word", prop: "x", from: "right", settledBy: 81, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "motion recipe from research V12 (word swap push with blur); own copy" },
});
