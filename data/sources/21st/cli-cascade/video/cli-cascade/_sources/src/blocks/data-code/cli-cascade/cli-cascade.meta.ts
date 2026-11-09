// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
import { metaBase } from "../_shared/meta-base";

export const meta = defineVideoMeta({
  ...metaBase("V01"),
  kind: "element",
  category: "code/terminal",
  tags: ["terminal", "cli", "install", "banner", "developer", "command"],
  timing: {
    fps: 30,
    duration: { default: 140, min: 60, max: 900 },
    stretch: "hold",
    phases: { in: 80, out: 0 },
    markers: { settled: 80 },
    beats: [0, 8, 51, 57],
  },
  layout: {
    aspects: ["16:9", "9:16", "1:1"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.05, y: 0.06, w: 0.9, h: 0.88 },
    safeArea: "action",
    transparent: true,
    preset: "full",
    backdrop: [],
  },
  slots: [
    { key: "title", type: "text", maxChars: 40, lines: 1, role: "label" },
    { key: "command", type: "text", maxChars: 80, lines: 2, role: "code" },
    { key: "banner", type: "text", maxChars: 10, lines: 1, role: "name" },
    { key: "lines", type: "list", maxChars: 60, lines: 8, role: "code" },
  ],
  brand: { surfaceColor: "colors.background", textColor: "colors.text", secondaryColor: "colors.secondary", monoFontFamily: "fonts.mono", bodyFontFamily: "fonts.body",  accent: "colors.primary" },
  motionBeats: [
    { target: "command", prop: "type", settledBy: 43, easing: "linear" },
    { target: "banner", prop: "opacity", settledBy: 52, easing: "linear" },
    { target: "lines", prop: "opacity", settledBy: 80, easing: "linear" },
  ],
  preview: { poster: { marker: "settled" }, hover: [0, 140] },
});
