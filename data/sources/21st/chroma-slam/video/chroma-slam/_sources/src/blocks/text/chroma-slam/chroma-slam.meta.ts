// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "text/kinetic",
  tags: ["slam", "chromatic", "rgb split", "glitch", "hype", "title", "shockwave", "text"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 75, min: 30, max: 600 },
    stretch: "hold",
    phases: { in: 24, out: 0 },
    markers: { settled: 26, impact: 9 },
    beats: [2, 9, 13, 16],
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
    { key: "title", type: "text", maxChars: 32, lines: 1, role: "headline" },
    { key: "eyebrow", type: "text", maxChars: 40, lines: 1, role: "kicker" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", splitA: "colors.secondary", fontFamily: "fonts.heading", splitB: "colors.primary" },
  motionBeats: [
    { target: "title", prop: "x", from: "right", settledBy: 9, easing: "ease" },
    { target: "eyebrow", prop: "opacity", settledBy: 21, easing: "ease" },
    { target: "underline", prop: "scaleX", from: "0", settledBy: 24, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 75] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "motion recipe from research V03 (chromatic title slam with shockwave); own copy" },
});
