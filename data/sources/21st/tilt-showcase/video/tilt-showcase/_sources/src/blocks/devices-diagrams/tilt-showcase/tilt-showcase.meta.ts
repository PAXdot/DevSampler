// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "media/screenshot",
  tags: ["screenshot", "3d", "tilt", "perspective", "hero", "product", "dashboard"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 45, max: 900 },
    stretch: "hold",
    phases: { in: 24, out: 0 },
    markers: { settled: 28 },
    beats: [0, 14],
  },
  layout: {
    aspects: ["16:9", "9:16", "1:1"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.1, y: 0.2, w: 0.8, h: 0.6 },
    safeArea: "action",
    transparent: true,
    preset: "center",
    backdrop: [],
  },
  slots: [
    { key: "image", type: "image", role: "screen" },
    { key: "chip", type: "text", maxChars: 32, lines: 1, role: "label" },
  ],
  brand: { accent: "colors.primary", fontFamily: "fonts.heading", surface: "colors.background", color: "colors.text", secondary: "colors.secondary", bodyFontFamily: "fonts.body" },
  motionBeats: [
    { target: "card", prop: "rotateY", from: "-40", settledBy: 20, easing: "ease" },
    { target: "chip", prop: "scale", from: "0.9", settledBy: 28, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party; motion recipe from research V15, V12" },
});
