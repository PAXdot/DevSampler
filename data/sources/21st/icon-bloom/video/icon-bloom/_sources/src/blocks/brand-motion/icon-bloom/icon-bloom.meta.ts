// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "brand/icon",
  tags: ["app icon", "icon", "bloom", "petals", "micro animation", "dock", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 90, min: 48, max: 600 },
    stretch: "hold",
    phases: { in: 36, out: 0 },
    markers: { settled: 36, bloom: 15 },
    beats: [0, 5, 15],
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
  slots: [{ key: "name", type: "text", maxChars: 20, lines: 1, role: "name" }],
  brand: { tile: "colors.primary", color: "colors.text", fontFamily: "fonts.heading", petal: "colors.text", tip: "colors.secondary" },
  motionBeats: [
    { target: "tile", prop: "scale", from: "0.86", settledBy: 8, easing: "ease" },
    { target: "center petal", prop: "scaleY", from: "0", settledBy: 15, easing: "ease" },
    { target: "petal pairs", prop: "rotate", settledBy: 34, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 90] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (motion study of V19, research 2026-10-05)" },
});
