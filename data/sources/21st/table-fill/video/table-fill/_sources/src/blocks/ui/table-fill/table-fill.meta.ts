// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/table",
  tags: ["table", "spreadsheet", "data", "enrichment", "ai", "rows", "perspective", "ui"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 90, max: 900 },
    stretch: "hold",
    phases: { in: 76, out: 0 },
    markers: { settled: 84 },
    beats: [0, 18, 30],
  },
  layout: { aspects: ["16:9", "1:1", "9:16"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "title", type: "text", maxChars: 36, lines: 1, role: "headline" },
    { key: "columns", type: "list", role: "label" },
    { key: "rows", type: "list", role: "body" },
    { key: "workingLabel", type: "text", maxChars: 16, lines: 1, role: "label" },
    { key: "yesLabel", type: "text", maxChars: 14, lines: 1, role: "label" },
    { key: "noLabel", type: "text", maxChars: 14, lines: 1, role: "label" },
  ],
  brand: { successColor: "colors.primary", reviewColor: "colors.secondary", surfaceColor: "colors.background", textColor: "colors.text", accent: "colors.primary", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "table", prop: "blur", from: "8px", settledBy: 12, easing: "ease" },
    { target: "cells", prop: "state", from: "empty", settledBy: 76, easing: "linear" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "docs/research/video-components-2026-10-05 (V15 perspective table fill)" },
});
