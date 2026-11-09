// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
import { metaBase } from "../_shared/meta-base";

export const meta = defineVideoMeta({
  ...metaBase("V20"),
  kind: "element",
  category: "data/number",
  tags: ["metrics", "dashboard", "stats", "counter", "odometer", "analytics"],
  timing: {
    fps: 30,
    duration: { default: 120, min: 60, max: 600 },
    stretch: "hold",
    phases: { in: 80, out: 0 },
    markers: { settled: 80 },
    beats: [0, 12, 21, 30, 39],
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
    { key: "title", type: "text", maxChars: 32, lines: 1, role: "headline" },
    { key: "range", type: "text", maxChars: 24, lines: 1, role: "subline" },
    { key: "rows", type: "list", lines: 5, role: "value" },
  ],
  brand: { accent: "colors.primary", color: "colors.text", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "rows", prop: "opacity", from: "0.3", settledBy: 50, easing: "ease" },
    { target: "rows", prop: "count", from: "0.9", settledBy: 80, easing: "ease" },
  ],
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
});
