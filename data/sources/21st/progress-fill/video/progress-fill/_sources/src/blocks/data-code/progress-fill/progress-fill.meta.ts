// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
import { metaBase } from "../_shared/meta-base";

export const meta = defineVideoMeta({
  ...metaBase("X1"),
  kind: "element",
  category: "data/progress",
  tags: ["progress", "loader", "bar", "goal", "upload", "status"],
  timing: {
    fps: 30,
    duration: { default: 110, min: 30, max: 900 },
    stretch: "hold",
    phases: { in: 80, out: 0 },
    markers: { settled: 80 },
    beats: [0, 10, 70],
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
    { key: "label", type: "text", maxChars: 40, lines: 1, role: "headline" },
    { key: "doneLabel", type: "text", maxChars: 24, lines: 1, role: "label" },
    { key: "percent", type: "number", role: "value" },
  ],
  brand: { accent: "colors.primary", color: "colors.text", fontFamily: "fonts.heading" },
  motionBeats: [{ target: "fill", prop: "scaleX", from: "0", settledBy: 70, easing: "ease" }],
  preview: { poster: { marker: "settled" }, hover: [0, 110] },
});
