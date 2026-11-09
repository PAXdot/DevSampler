// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "ui/cursor",
  tags: ["window", "close", "collapse", "cursor", "gag", "minimize", "desktop", "transition"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 75, min: 60, max: 300 },
    stretch: "hold",
    phases: { in: 26, out: 0 },
    markers: { settled: 26, click: 36 },
    beats: [0, 36, 48],
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
    { key: "image", type: "image", role: "screenshot" },
    { key: "title", type: "text", maxChars: 32, lines: 1, role: "label" },
    { key: "heading", type: "text", maxChars: 48, lines: 2, role: "headline" },
    { key: "body", type: "text", maxChars: 220, lines: 6, role: "body" },
  ],
  brand: { surfaceColor: "colors.background", textColor: "colors.text", accent: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "cursor", prop: "xy", from: "right", settledBy: 34, easing: "ease" },
    { target: "window", prop: "scale", from: "1 to dots", settledBy: 48, easing: "ease" },
    { target: "dots", prop: "opacity", settledBy: 60, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 33 }, hover: [0, 75] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "docs/research/video-components-2026-10-05 (V12 window gag: close dot collapses the window)" },
});
