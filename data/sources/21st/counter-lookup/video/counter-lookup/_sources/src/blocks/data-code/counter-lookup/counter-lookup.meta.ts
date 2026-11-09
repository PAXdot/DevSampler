// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
import { metaBase } from "../_shared/meta-base";

export const meta = defineVideoMeta({
  ...metaBase("V02"),
  kind: "scene",
  category: "data/number",
  tags: ["search", "coverage", "counter", "integrations", "lookup", "support"],
  timing: {
    fps: 30,
    duration: { default: 180, min: 90, max: 600 },
    stretch: "hold",
    phases: { in: 104, out: 0 },
    markers: { settled: 104 },
    beats: [0, 14, 30, 44, 104],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "title", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "question", type: "text", maxChars: 48, lines: 2, role: "headline" },
    { key: "queries", type: "list", maxChars: 24, lines: 1, role: "label" },
    { key: "confirm", type: "text", maxChars: 40, lines: 1, role: "subline" },
    { key: "target", type: "number", role: "value" },
    { key: "label", type: "text", maxChars: 32, lines: 1, role: "kicker" },
  ],
  brand: { accent: "colors.primary", color: "colors.text", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "input", prop: "type", settledBy: 30, easing: "linear" },
    { target: "counter", prop: "count", from: "0", settledBy: 104, easing: "ease" },
  ],
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
});
