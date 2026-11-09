// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "brand/social",
  tags: ["3d", "buttons", "isometric", "social", "handle", "end card", "press"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 105, min: 60, max: 600 },
    stretch: "hold",
    phases: { in: 24, out: 0 },
    markers: { settled: 60 },
    beats: [4, 30, 34, 38, 42, 50],
  },
  layout: {
    aspects: ["1:1", "16:9", "9:16"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.1, y: 0.2, w: 0.8, h: 0.6 },
    safeArea: "action",
    transparent: true,
    preset: "center",
    backdrop: [],
  },
  slots: [
    { key: "handle", type: "text", maxChars: 24, lines: 1, role: "label" },
    { key: "icons", type: "list" },
  ],
  brand: { accent: "colors.primary", fontFamily: "fonts.heading", faceColor: "colors.background", ink: "colors.text" },
  motionBeats: [
    { target: "tiles", prop: "z", from: "0", settledBy: 24, easing: "spring" },
    { target: "tiles", prop: "press", settledBy: 56, easing: "linear" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 40 }, hover: [0, 105] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party; motion recipe from research V11" },
});
