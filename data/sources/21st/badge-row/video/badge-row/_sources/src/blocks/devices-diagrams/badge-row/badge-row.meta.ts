// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "diagram/tags",
  tags: ["badges", "tags", "pills", "methods", "features", "labels", "list"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 90, min: 45, max: 900 },
    stretch: "hold",
    phases: { in: 46, out: 0 },
    markers: { settled: 48 },
    beats: [4, 12, 20, 28, 36],
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
    { key: "label", type: "text", maxChars: 24, lines: 1, role: "kicker" },
    { key: "badges", type: "list", maxChars: 16, role: "label" },
  ],
  brand: { monoFontFamily: "fonts.mono",  color: "colors.text", fontFamily: "fonts.heading" },
  motionBeats: [{ target: "badges", prop: "scale", from: "0.5", settledBy: 46, easing: "spring" }],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 90] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party; motion recipe from research V13" },
});
