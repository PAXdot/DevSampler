// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "ui/menu",
  tags: ["popover", "menu", "dropdown", "versions", "hover", "cursor", "ui"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 105, min: 60, max: 600 },
    stretch: "hold",
    phases: { in: 56, out: 0 },
    markers: { settled: 60, open: 16, pick: 48 },
    beats: [14, 48],
  },
  layout: {
    aspects: ["16:9", "1:1", "9:16"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0, y: 0, w: 1, h: 1 },
    safeArea: "action",
    transparent: true,
    preset: "full",
    backdrop: [],
  },
  slots: [
    { key: "anchorLabel", type: "text", maxChars: 28, lines: 1, role: "headline" },
    { key: "items", type: "list", role: "body" },
  ],
  brand: { surfaceColor: "colors.background", textColor: "colors.text", accent: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "popover", prop: "scaleY", from: "0.9", settledBy: 22, easing: "ease" },
    { target: "rows", prop: "opacity", settledBy: 34, easing: "ease" },
    { target: "cursor", prop: "xy", settledBy: 46, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 105] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "docs/research/video-components-2026-10-05 (V04 version popover, V15 sources popover)" },
});
