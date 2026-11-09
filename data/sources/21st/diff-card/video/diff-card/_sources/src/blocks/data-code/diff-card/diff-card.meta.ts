// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
import { metaBase } from "../_shared/meta-base";

export const meta = defineVideoMeta({
  ...metaBase("V04"),
  kind: "element",
  category: "code/diff",
  tags: ["diff", "code", "agent", "edit", "pull request", "ai", "tool call"],
  timing: {
    fps: 30,
    duration: { default: 110, min: 45, max: 600 },
    stretch: "hold",
    phases: { in: 50, out: 0 },
    markers: { settled: 50 },
    beats: [0, 12, 18, 40],
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
    { key: "action", type: "text", maxChars: 16, lines: 1, role: "kicker" },
    { key: "removed", type: "text", maxChars: 400, lines: 10, role: "code" },
    { key: "added", type: "text", maxChars: 500, lines: 12, role: "code" },
    { key: "runningLabel", type: "text", maxChars: 16, lines: 1, role: "label" },
    { key: "doneLabel", type: "text", maxChars: 16, lines: 1, role: "label" },
  ],
  brand: { surfaceColor: "colors.background", textColor: "colors.text", secondaryColor: "colors.secondary", accent: "colors.primary", fontFamily: "fonts.body", monoFontFamily: "fonts.mono" },
  motionBeats: [
    { target: "removed", prop: "opacity", from: "0.3", settledBy: 18, easing: "ease" },
    { target: "added", prop: "opacity", from: "0.3", settledBy: 34, easing: "ease" },
    { target: "status", prop: "swap", settledBy: 46, easing: "spring" },
  ],
  preview: { poster: { marker: "settled" }, hover: [0, 110] },
});
