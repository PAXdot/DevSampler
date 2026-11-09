// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "ui/panel",
  tags: ["side panel", "drawer", "extension", "plugin", "settings", "sync", "cursor", "ui"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 90, max: 600 },
    stretch: "hold",
    phases: { in: 76, out: 0 },
    markers: { settled: 80, click: 52 },
    beats: [0, 14, 52, 66],
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
    { key: "image", type: "image", role: "screenshot" },
    { key: "panelTitle", type: "text", maxChars: 28, lines: 1, role: "headline" },
    { key: "items", type: "list", role: "body" },
    { key: "cta", type: "text", maxChars: 22, lines: 1, role: "cta" },
    { key: "doneLabel", type: "text", maxChars: 22, lines: 1, role: "subline" },
    { key: "toast", type: "text", maxChars: 32, lines: 1, role: "label" },
  ],
  brand: { surfaceColor: "colors.background", textColor: "colors.text", accent: "colors.primary", doneColor: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "panel", prop: "x", from: "right", settledBy: 26, easing: "ease" },
    { target: "cursor", prop: "xy", from: "bottom-right", settledBy: 50, easing: "ease" },
    { target: "toast", prop: "scale", from: "0.95", settledBy: 72, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "docs/research/video-components-2026-10-05 (V15 browser side panel + synced toast)" },
});
