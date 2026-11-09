// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "ui/input",
  tags: ["prompt", "input", "ai", "typing", "chat", "card", "caret", "ui"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 90, max: 600 },
    stretch: "hold",
    phases: { in: 76, out: 0 },
    markers: { settled: 80, typing: 16, send: 70 },
    beats: [0, 16, 70],
  },
  layout: {
    aspects: ["16:9", "9:16", "1:1"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0, y: 0, w: 1, h: 1 },
    safeArea: "action",
    transparent: true,
    preset: "full",
    backdrop: [],
  },
  slots: [
    { key: "title", type: "text", maxChars: 40, lines: 1, role: "headline" },
    { key: "placeholder", type: "text", maxChars: 48, lines: 1, role: "label" },
    { key: "prompt", type: "text", maxChars: 140, lines: 3, role: "body" },
  ],
  brand: { surfaceColor: "colors.background", textColor: "colors.text", accent: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "card", prop: "height", from: "hairline", settledBy: 14, easing: "ease" },
    { target: "prompt", prop: "text", settledBy: 56, easing: "linear" },
    { target: "cursor", prop: "xy", from: "bottom-right", settledBy: 68, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "docs/research/video-components-2026-10-05 (V15 line-to-card, V04 prompt typing)" },
});
