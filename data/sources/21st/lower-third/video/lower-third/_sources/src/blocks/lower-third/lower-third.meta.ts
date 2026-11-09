// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "text/lower-third",
  tags: ["lower third", "name", "title", "speaker", "interview", "testimonial"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 45, max: 900 },
    stretch: "hold",
    phases: { in: 40, out: 0 },
    markers: { settled: 40 },
    beats: [0, 6, 14],
  },
  layout: {
    aspects: ["16:9", "9:16", "1:1"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0, y: 0.5, w: 1, h: 0.5 },
    safeArea: "action",
    transparent: true,
    preset: "lower-third",
    backdrop: [],
  },
  slots: [
    { key: "name", type: "text", maxChars: 32, lines: 1, role: "name" },
    { key: "role", type: "text", maxChars: 48, lines: 1, role: "subline" },
  ],
  brand: { accent: "colors.primary", color: "colors.text", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "bar", prop: "scaleY", from: "0", settledBy: 12, easing: "spring" },
    { target: "name", prop: "x", from: "left", settledBy: 40, easing: "spring" },
    { target: "role", prop: "opacity", settledBy: 28, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st-ads/remotion/ui.tsx (Caption), factor-marketplace/remotion/components/mixed-text.tsx (Subtitles)" },
});
