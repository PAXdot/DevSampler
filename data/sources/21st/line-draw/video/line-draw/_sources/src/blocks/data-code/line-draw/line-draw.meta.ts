// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
import { metaBase } from "../_shared/meta-base";

export const meta = defineVideoMeta({
  ...metaBase("V14, V12"),
  kind: "element",
  category: "data/chart",
  tags: ["chart", "line chart", "growth", "trend", "data", "metric"],
  timing: {
    fps: 30,
    duration: { default: 120, min: 45, max: 600 },
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
    { key: "title", type: "text", maxChars: 40, lines: 1, role: "headline" },
    { key: "value", type: "text", maxChars: 16, lines: 1, role: "value" },
    { key: "points", type: "list" },
    { key: "labels", type: "list", maxChars: 8 },
  ],
  brand: { monoFontFamily: "fonts.mono",  accent: "colors.primary", color: "colors.text", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "line", prop: "draw", from: "0", settledBy: 70, easing: "ease" },
    { target: "area", prop: "opacity", from: "0", settledBy: 76, easing: "ease" },
  ],
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
});
