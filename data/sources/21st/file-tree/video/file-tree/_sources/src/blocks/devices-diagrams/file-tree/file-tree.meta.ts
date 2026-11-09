// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "diagram/files",
  tags: ["file tree", "folders", "routing", "developer", "explainer", "code", "project"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 90, max: 900 },
    stretch: "hold",
    phases: { in: 90, out: 0 },
    markers: { settled: 92 },
    beats: [0, 30, 48, 56],
  },
  layout: {
    aspects: ["16:9", "1:1", "9:16"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.1, y: 0.2, w: 0.8, h: 0.6 },
    safeArea: "action",
    transparent: true,
    preset: "full",
    backdrop: [],
  },
  slots: [
    { key: "title", type: "text", maxChars: 32, lines: 1, role: "label" },
    { key: "rows", type: "list", maxChars: 28, role: "code" },
    { key: "insertName", type: "text", maxChars: 28, lines: 1, role: "code" },
  ],
  brand: { monoFontFamily: "fonts.mono", accent: "colors.primary", color: "colors.text", fontFamily: "fonts.heading", cardColor: "colors.background" },
  motionBeats: [
    { target: "card", prop: "x", from: "right", settledBy: 10, easing: "ease" },
    { target: "rows", prop: "y", from: "below", settledBy: 36, easing: "ease" },
    { target: "insert", prop: "type", settledBy: 90, easing: "linear" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party; motion recipe from research V10" },
});
