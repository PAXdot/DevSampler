// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
import { metaBase } from "../_shared/meta-base";

export const meta = defineVideoMeta({
  ...metaBase("V06"),
  kind: "element",
  category: "code/morph",
  tags: ["code", "morph", "magic move", "refactor", "developer", "diff"],
  timing: {
    fps: 30,
    duration: { default: 110, min: 50, max: 600 },
    stretch: "hold",
    phases: { in: 62, out: 0 },
    markers: { settled: 62 },
    beats: [0, 36, 58],
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
    { key: "before", type: "text", maxChars: 600, lines: 20, role: "code" },
    { key: "after", type: "text", maxChars: 600, lines: 20, role: "code" },
  ],
  brand: { surfaceColor: "colors.background", textColor: "colors.text", secondaryColor: "colors.secondary", monoFontFamily: "fonts.mono", bodyFontFamily: "fonts.body",  accent: "colors.primary" },
  motionBeats: [
    { target: "tokens", prop: "position", settledBy: 62, easing: "ease" },
    { target: "removed", prop: "opacity", from: "1", settledBy: 44, easing: "linear" },
    { target: "added", prop: "scale", from: "0.9", settledBy: 62, easing: "ease" },
  ],
  preview: { poster: { frame: 80 }, hover: [0, 110] },
});
