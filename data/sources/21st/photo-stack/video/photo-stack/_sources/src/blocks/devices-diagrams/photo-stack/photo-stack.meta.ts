// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "media/photo",
  tags: ["photo", "stack", "cards", "gallery", "polaroid", "collection"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 45, max: 900 },
    stretch: "hold",
    phases: { in: 36, out: 0 },
    markers: { settled: 44 },
    beats: [0, 8, 16, 24],
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
    { key: "photo1", type: "image", role: "media" },
    { key: "photo2", type: "image", role: "media" },
    { key: "photo3", type: "image", role: "media" },
    { key: "photo4", type: "image", role: "media" },
    { key: "caption", type: "text", maxChars: 40, lines: 1, role: "label" },
  ],
  brand: { paperColor: "colors.background", accent: "colors.primary", color: "colors.text", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "cards", prop: "y", from: "above", settledBy: 36, easing: "ease" },
    { target: "cards", prop: "x", from: "0", easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party" },
});
