// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "ui/status",
  tags: ["status", "pill", "badge", "deployed", "synced", "done", "toast", "ui"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 90, min: 30, max: 600 },
    stretch: "hold",
    phases: { in: 40, out: 0 },
    markers: { settled: 48, swap: 34 },
    beats: [0, 34],
  },
  layout: {
    aspects: ["16:9", "9:16", "1:1"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.08, y: 0.04, w: 0.84, h: 0.4 },
    safeArea: "action",
    transparent: true,
    preset: "upper-third",
    backdrop: [],
  },
  slots: [
    { key: "label", type: "text", maxChars: 32, lines: 1, role: "label" },
    { key: "doneLabel", type: "text", maxChars: 32, lines: 1, role: "subline" },
  ],
  brand: { surfaceColor: "colors.background", textColor: "colors.text", fontFamily: "fonts.heading", pendingColor: "colors.secondary", doneColor: "colors.primary" },
  motionBeats: [
    { target: "pill", prop: "scale", from: "0.95", settledBy: 6, easing: "ease" },
    { target: "dot", prop: "pulse", settledBy: 22, easing: "ease" },
    { target: "label", prop: "y", from: "swap", settledBy: 42, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 90] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "docs/research/video-components-2026-10-05 (V15 synced pill toast)" },
});
