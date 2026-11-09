// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "diagram/features",
  tags: ["features", "grid", "chips", "icons", "benefits", "explainer", "list"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 60, max: 900 },
    stretch: "hold",
    phases: { in: 64, out: 0 },
    markers: { settled: 66 },
    beats: [0, 8, 16, 24, 32, 40, 48],
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
    { key: "title", type: "text", maxChars: 40, lines: 1, role: "headline" },
    { key: "chips", type: "list", maxChars: 28, role: "label" },
  ],
  brand: { accent: "colors.primary", color: "colors.text", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "title", prop: "opacity", settledBy: 10, easing: "ease" },
    { target: "chips", prop: "y", from: "below", settledBy: 64, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party; motion recipe from research V13" },
});
