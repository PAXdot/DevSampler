// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "ui/cursor",
  tags: ["cursors", "multiplayer", "collaboration", "presence", "canvas", "design tool", "realtime"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 72, max: 900 },
    stretch: "hold",
    phases: { in: 60, out: 0 },
    markers: { settled: 64 },
    beats: [22, 32, 44],
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
    { key: "names", type: "list", role: "label" },
    { key: "headline", type: "text", maxChars: 48, lines: 2, role: "headline" },
    { key: "cta", type: "text", maxChars: 18, lines: 1, role: "cta" },
    { key: "image", type: "image", role: "media" },
  ],
  brand: { surfaceColor: "colors.background", textColor: "colors.text", accent: "colors.primary", selectColor: "colors.primary", clickColor: "colors.secondary", resizeColor: "colors.primary", wanderColor: "colors.secondary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "cursors", prop: "xy", from: "edges", settledBy: 40, easing: "ease" },
    { target: "selection", prop: "rect", settledBy: 38, easing: "ease" },
    { target: "image", prop: "size", settledBy: 52, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "own (cursor family per research G5; multiplayer presence pattern)" },
});
