// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
import { metaBase } from "../_shared/meta-base";

export const meta = defineVideoMeta({
  ...metaBase("V06"),
  kind: "scene",
  category: "code/editor",
  tags: ["code", "editor", "beat", "theme", "rhythm", "developer", "promo"],
  timing: {
    fps: 30,
    duration: { default: 176, min: 44, max: 900 },
    stretch: "hold",
    phases: { in: 150, out: 0 },
    markers: { settled: 150 },
    beats: [0, 22, 44, 66, 88, 110, 132, 154],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "title", type: "text", maxChars: 40, lines: 1, role: "label" },
    { key: "code", type: "text", maxChars: 700, lines: 24, role: "code" },
  ],
  brand: { surfaceColor: "colors.background", textColor: "colors.text", secondaryColor: "colors.secondary", monoFontFamily: "fonts.mono", bodyFontFamily: "fonts.body",  accent: "colors.primary", background: "colors.background" },
  motionBeats: [
    { target: "skin", prop: "cut", settledBy: 0, easing: "linear" },
    { target: "code", prop: "type", settledBy: 150, easing: "linear" },
  ],
  preview: { poster: { marker: "settled" }, hover: [0, 176] },
});
