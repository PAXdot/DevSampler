// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
import { metaBase } from "../_shared/meta-base";

export const meta = defineVideoMeta({
  ...metaBase("V13"),
  kind: "element",
  category: "code/walkthrough",
  tags: ["code", "highlight", "walkthrough", "tutorial", "developer", "explainer"],
  timing: {
    fps: 30,
    duration: { default: 120, min: 40, max: 900 },
    stretch: "hold",
    phases: { in: 24, out: 0 },
    markers: { settled: 24 },
    beats: [0, 14, 50, 86],
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
    { key: "code", type: "text", maxChars: 700, lines: 24, role: "code" },
  ],
  brand: { surfaceColor: "colors.background", textColor: "colors.text", secondaryColor: "colors.secondary", monoFontFamily: "fonts.mono", bodyFontFamily: "fonts.body",  accent: "colors.primary" },
  motionBeats: [
    { target: "card", prop: "scale", from: "0.96", settledBy: 12, easing: "spring" },
    { target: "spotlight", prop: "y", settledBy: 24, easing: "ease" },
  ],
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
});
