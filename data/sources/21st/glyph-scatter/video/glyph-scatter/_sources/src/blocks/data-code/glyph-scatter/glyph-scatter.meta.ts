// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
import { metaBase } from "../_shared/meta-base";

export const meta = defineVideoMeta({
  ...metaBase("V06"),
  kind: "element",
  category: "code/morph",
  tags: ["code", "scatter", "glyphs", "particles", "morph", "developer"],
  timing: {
    fps: 30,
    duration: { default: 110, min: 50, max: 600 },
    stretch: "hold",
    phases: { in: 64, out: 0 },
    markers: { settled: 64 },
    beats: [0, 30, 44, 64],
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
    { key: "from", type: "text", maxChars: 240, lines: 10, role: "code" },
    { key: "to", type: "text", maxChars: 240, lines: 10, role: "code" },
  ],
  brand: { surfaceColor: "colors.background", textColor: "colors.text", secondaryColor: "colors.secondary", monoFontFamily: "fonts.mono", bodyFontFamily: "fonts.body",  accent: "colors.primary" },
  motionBeats: [
    { target: "from", prop: "position", settledBy: 47, easing: "ease" },
    { target: "to", prop: "position", settledBy: 64, easing: "ease" },
  ],
  preview: { poster: { marker: "settled" }, hover: [0, 110] },
});
