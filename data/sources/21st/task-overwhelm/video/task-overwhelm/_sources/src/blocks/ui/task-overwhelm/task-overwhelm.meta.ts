// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "ui/list",
  tags: ["checklist", "tasks", "todo", "problem", "overwhelm", "scroll", "list", "ui"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 45, max: 900 },
    stretch: "hold",
    phases: { in: 16, out: 0 },
    markers: { settled: 40 },
    beats: [0],
  },
  layout: {
    aspects: ["9:16", "1:1", "16:9"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0, y: 0, w: 1, h: 1 },
    safeArea: "action",
    transparent: true,
    preset: "full",
    backdrop: [],
  },
  slots: [
    { key: "title", type: "text", maxChars: 32, lines: 1, role: "headline" },
    { key: "items", type: "list", role: "body" },
  ],
  brand: { surfaceColor: "colors.background", textColor: "colors.text", accent: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "rows", prop: "y", from: "scroll up", easing: "linear" },
    { target: "header", prop: "opacity", settledBy: 8, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "docs/research/video-components-2026-10-05 (V12 overwhelm checklist)" },
});
