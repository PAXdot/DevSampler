// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "ui/cursor",
  tags: ["cursor", "drag", "drop", "kanban", "board", "card", "move", "interaction"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 105, min: 75, max: 600 },
    stretch: "hold",
    phases: { in: 68, out: 0 },
    markers: { settled: 72, grab: 26, drop: 58 },
    beats: [26, 58],
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
    { key: "fromLabel", type: "text", maxChars: 18, lines: 1, role: "label" },
    { key: "toLabel", type: "text", maxChars: 18, lines: 1, role: "label" },
    { key: "card", type: "text", maxChars: 36, lines: 1, role: "headline" },
    { key: "others", type: "list", role: "body" },
  ],
  brand: { surfaceColor: "colors.background", textColor: "colors.text", accent: "colors.primary", pendingColor: "colors.secondary", doneColor: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "cursor", prop: "xy", from: "bottom-right", settledBy: 24, easing: "ease" },
    { target: "card", prop: "lift", from: "1", settledBy: 32, easing: "ease" },
    { target: "card", prop: "xy", from: "source", settledBy: 66, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 48 }, hover: [0, 105] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "own (cursor family per research G5; drag pattern, expo-out settles)" },
});
