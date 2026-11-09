// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "testimonial/rating",
  tags: ["testimonial", "rating", "stars", "reviews", "social proof", "score", "count up"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 75, max: 600 },
    stretch: "hold",
    phases: { in: 78, out: 0 },
    markers: { settled: 78, stars: 46 },
    beats: [4, 12, 46, 50, 58, 66],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "title", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "score", type: "text", maxChars: 4, lines: 1, role: "stat" },
    { key: "count", type: "number", role: "value" },
    { key: "countLabel", type: "text", maxChars: 24, lines: 1, role: "label" },
    { key: "source", type: "text", maxChars: 40, lines: 2, role: "kicker" },
    { key: "snippets", type: "list", role: "quote" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading", bodyFontFamily: "fonts.body", numeralsFontFamily: "fonts.numerals" },
  motionBeats: [
    { target: "score", prop: "value", from: "0", settledBy: 42, easing: "ease" },
    { target: "stars", prop: "fill", from: "0", settledBy: 46, easing: "ease" },
    { target: "snippets", prop: "x", from: "right", settledBy: 78, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (rating summary with review snippets, 2026-10-06)" },
});
