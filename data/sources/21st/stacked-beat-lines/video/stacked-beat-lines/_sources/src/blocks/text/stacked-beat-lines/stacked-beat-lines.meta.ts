// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "text/kinetic",
  tags: ["slogan", "three lines", "beat", "gradient", "headline", "text"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 75, min: 30, max: 600 },
    stretch: "hold",
    phases: { in: 18, out: 0 },
    markers: { settled: 19 },
    beats: [2, 9, 16],
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
    { key: "line1", type: "text", maxChars: 28, lines: 1, role: "kicker" },
    { key: "line2", type: "text", maxChars: 28, lines: 1, role: "headline" },
    { key: "line3", type: "text", maxChars: 28, lines: 1, role: "subline" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", accent2: "colors.secondary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "line1", prop: "color", from: "grey", settledBy: 4, easing: "linear" },
    { target: "line2", prop: "scale", from: "1.1", settledBy: 12, easing: "ease" },
    { target: "line3", prop: "color", from: "grey", settledBy: 18, easing: "linear" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 75] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "motion recipe from research V03 (stacked headline, one line per beat); own copy" },
});
