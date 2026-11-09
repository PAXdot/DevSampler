// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "text/kinetic",
  tags: ["font", "typeface", "shuffle", "flicker", "hook", "social", "text"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 75, min: 36, max: 600 },
    stretch: "hold",
    phases: { in: 28, out: 0 },
    markers: { settled: 28 },
    beats: [0, 10, 14, 18, 22, 26],
  },
  layout: {
    aspects: ["9:16", "1:1", "16:9"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.1, y: 0.2, w: 0.8, h: 0.6 },
    safeArea: "title",
    transparent: true,
    preset: "center",
    backdrop: [],
  },
  slots: [{ key: "text", type: "text", maxChars: 20, lines: 1, role: "headline" }],
  brand: { serifFontFamily: "fonts.serif", accentFontFamily: "fonts.accent", displayFontFamily: "fonts.display", monoFontFamily: "fonts.mono", color: "colors.text", accent: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "text", prop: "scale", from: "1.6", settledBy: 9, easing: "ease" },
    { target: "text", prop: "fontFamily", settledBy: 26, easing: "linear" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 75] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "motion recipe from research V12 (font shuffle); OFL fonts" },
});
