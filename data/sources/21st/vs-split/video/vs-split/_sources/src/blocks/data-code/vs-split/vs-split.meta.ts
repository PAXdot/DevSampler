// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
import { metaBase } from "../_shared/meta-base";

export const meta = defineVideoMeta({
  ...metaBase("V14, X1"),
  kind: "element",
  category: "data/comparison",
  tags: ["comparison", "versus", "before after", "stats", "split"],
  timing: {
    fps: 30,
    duration: { default: 100, min: 45, max: 600 },
    stretch: "hold",
    phases: { in: 40, out: 0 },
    markers: { settled: 40 },
    beats: [0, 4, 8, 12],
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
    { key: "title", type: "text", maxChars: 40, lines: 1, role: "headline" },
    { key: "leftLabel", type: "text", maxChars: 24, lines: 1, role: "label" },
    { key: "rightLabel", type: "text", maxChars: 24, lines: 1, role: "label" },
    { key: "leftValue", type: "number", role: "value" },
    { key: "rightValue", type: "number", role: "value" },
  ],
  brand: { accent: "colors.primary", color: "colors.text", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "cards", prop: "y", from: "below", settledBy: 18, easing: "ease" },
    { target: "divider", prop: "scaleY", from: "0", settledBy: 18, easing: "ease" },
    { target: "values", prop: "count", from: "0", settledBy: 36, easing: "ease" },
  ],
  preview: { poster: { marker: "settled" }, hover: [0, 100] },
});
