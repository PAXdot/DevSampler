// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "text/quote",
  tags: ["quote", "testimonial", "press", "social proof", "stat", "count up"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 135, min: 60, max: 600 },
    stretch: "hold",
    phases: { in: 76, out: 0 },
    markers: { settled: 78, stat: 56 },
    beats: [2, 6, 26, 56],
  },
  layout: { aspects: ["1:1", "9:16", "16:9"], mode: "responsive", fill: "frame", safeArea: "title", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "eyebrow", type: "text", maxChars: 32, lines: 1, role: "kicker" },
    { key: "quote", type: "text", maxChars: 160, lines: 5, role: "headline" },
    { key: "attribution", type: "text", maxChars: 48, lines: 1, role: "name" },
    { key: "stat", type: "text", maxChars: 12, lines: 1, role: "stat" },
    { key: "statLabel", type: "text", maxChars: 32, lines: 1, role: "subline" },
  ],
  brand: { monoFontFamily: "fonts.mono", serifFontFamily: "fonts.serif",  color: "colors.text", accent: "colors.primary", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "quote", prop: "opacity", from: "0.4", settledBy: 16, easing: "ease" },
    { target: "attribution", prop: "opacity", settledBy: 34, easing: "ease" },
    { target: "stat", prop: "value", from: "0", settledBy: 76, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 135] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "motion recipe from research X1, V14 (quote card with stat pop); own copy" },
});
