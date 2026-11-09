// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
import { metaBase } from "../_shared/meta-base";

export const meta = defineVideoMeta({
  ...metaBase("V04"),
  kind: "element",
  category: "data/number",
  tags: ["version", "iteration", "counter", "chip", "history", "changelog"],
  timing: {
    fps: 30,
    duration: { default: 110, min: 45, max: 600 },
    stretch: "hold",
    phases: { in: 76, out: 0 },
    markers: { settled: 76 },
    beats: [0, 14, 23, 32, 41, 50, 59],
  },
  layout: {
    aspects: ["16:9", "9:16", "1:1"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.1, y: 0.2, w: 0.8, h: 0.6 },
    safeArea: "title",
    transparent: true,
    preset: "center",
    backdrop: [],
  },
  slots: [
    { key: "statement", type: "text", maxChars: 40, lines: 2, role: "headline" },
    { key: "chipPrefix", type: "text", maxChars: 4, lines: 1, role: "label" },
    { key: "subline", type: "text", maxChars: 60, lines: 2, role: "subline" },
    { key: "steps", type: "number", role: "value" },
  ],
  brand: { accent: "colors.primary", color: "colors.text", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "chip", prop: "count", from: "1", settledBy: 59, easing: "linear" },
    { target: "chip", prop: "glow", settledBy: 67, easing: "ease" },
    { target: "subline", prop: "y", from: "below", settledBy: 76, easing: "spring" },
  ],
  preview: { poster: { marker: "settled" }, hover: [0, 110] },
});
