// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "data/number",
  tags: ["number", "counter", "stat", "ticker", "metric", "growth"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 90, min: 45, max: 600 },
    stretch: "hold",
    phases: { in: 52, out: 0 },
    markers: { settled: 56 },
    beats: [0, 6, 52],
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
    { key: "value", type: "number", role: "value" },
    { key: "label", type: "text", maxChars: 48, lines: 1, role: "headline" },
  ],
  brand: { accent: "colors.primary", color: "colors.text", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "value", prop: "count", settledBy: 52, easing: "ease" },
    { target: "label", prop: "y", from: "below", settledBy: 30, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 90] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party" },
});
