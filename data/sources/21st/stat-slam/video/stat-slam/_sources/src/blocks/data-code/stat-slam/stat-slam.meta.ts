// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
import { metaBase } from "../_shared/meta-base";

export const meta = defineVideoMeta({
  ...metaBase("V03"),
  kind: "scene",
  category: "data/number",
  tags: ["stats", "numbers", "social proof", "counter", "metrics", "hype"],
  timing: {
    fps: 30,
    duration: { default: 140, min: 45, max: 450 },
    stretch: "hold",
    phases: { in: 94, out: 0 },
    markers: { settled: 94 },
    beats: [0, 38, 76],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "title", transparent: true, backdrop: ["background"] },
  slots: [{ key: "stats", type: "list", lines: 5, role: "value" }],
  brand: { accent: "colors.primary", color: "colors.text", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "stats", prop: "count", from: "0.4", settledBy: 18, easing: "ease" },
    { target: "flash", prop: "opacity", from: "0.35", settledBy: 4, easing: "linear" },
  ],
  preview: { poster: { marker: "settled" }, hover: [0, 140] },
});
