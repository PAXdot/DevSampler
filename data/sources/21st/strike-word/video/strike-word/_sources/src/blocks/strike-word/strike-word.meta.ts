// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "text/emphasis",
  tags: ["strike", "strikethrough", "contrast", "headline", "text", "kinetic-type"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 105, min: 60, max: 600 },
    stretch: "hold",
    phases: { in: 48, out: 0 },
    markers: { settled: 52, strike: 22 },
    beats: [0, 22, 34],
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
    { key: "lead", type: "text", maxChars: 40, lines: 1, role: "headline" },
    { key: "struck", type: "text", maxChars: 24, lines: 1, role: "kicker" },
    { key: "replacement", type: "text", maxChars: 40, lines: 1, role: "subline" },
  ],
  brand: { serifFontFamily: "fonts.serif",  accent: "colors.primary", color: "colors.text", fontFamily: "fonts.heading", strikeColor: "colors.secondary" },
  motionBeats: [
    { target: "lead", prop: "y", from: "below", settledBy: 18, easing: "spring" },
    { target: "strike", prop: "scaleX", from: "0", settledBy: 34, easing: "ease" },
    { target: "replacement", prop: "y", from: "below", settledBy: 52, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 105] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st-ads/remotion/showcase.tsx (SlopWord)" },
});
