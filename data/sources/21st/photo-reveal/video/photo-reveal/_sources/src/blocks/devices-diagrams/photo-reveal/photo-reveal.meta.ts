// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "media/photo",
  tags: ["photo", "image", "screenshot", "reveal", "mask", "ken burns", "3d", "tilt"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 105, min: 30, max: 900 },
    stretch: "hold",
    phases: { in: 20, out: 0 },
    markers: { settled: 24 },
    beats: [0, 14],
  },
  layout: {
    aspects: ["16:9", "1:1", "9:16"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.1, y: 0.2, w: 0.8, h: 0.6 },
    safeArea: "action",
    transparent: true,
    preset: "center",
    backdrop: [],
  },
  slots: [
    { key: "image", type: "image", role: "media" },
    { key: "caption", type: "text", maxChars: 40, lines: 3, role: "label" },
  ],
  brand: { captionColor: "colors.text", captionBackground: "colors.background", accent: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "photo", prop: "reveal", settledBy: 20, easing: "ease" },
    { target: "caption", prop: "y", from: "below", settledBy: 24, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 105] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party; recipes from research V02 (Ken Burns), V09 (mask), V04 (scale-in), V15 (tilt)" },
});
