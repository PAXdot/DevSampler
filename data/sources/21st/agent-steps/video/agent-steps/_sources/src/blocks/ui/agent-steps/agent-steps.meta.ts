// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "ui/agent",
  tags: ["agent", "steps", "progress", "checklist", "ai", "spinner", "ui"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 60, max: 600 },
    stretch: "hold",
    phases: { in: 80, out: 0 },
    markers: { settled: 86 },
    beats: [12, 26, 40, 54, 68],
  },
  layout: {
    aspects: ["16:9", "9:16", "1:1"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.1, y: 0.2, w: 0.8, h: 0.6 },
    safeArea: "action",
    transparent: true,
    preset: "full",
    backdrop: [],
  },
  slots: [
    { key: "query", type: "text", maxChars: 60, lines: 1, role: "headline" },
    { key: "steps", type: "list", role: "body" },
  ],
  brand: { surfaceColor: "colors.background", textColor: "colors.text", accent: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "step", prop: "y", from: "6px below", settledBy: 6, easing: "ease" },
    { target: "check", prop: "scale", settledBy: 14, easing: "spring" },
    { target: "stack", prop: "y", from: "re-center", easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "docs/research/video-components-2026-10-05 (V15 agent steps, V13 checklist)" },
});
