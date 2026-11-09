// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
import { metaBase } from "../_shared/meta-base";

export const meta = defineVideoMeta({
  ...metaBase("V08"),
  kind: "scene",
  category: "data/milestone",
  tags: ["milestone", "stars", "followers", "feed", "counter", "celebration", "users"],
  timing: {
    fps: 30,
    duration: { default: 240, min: 90, max: 900 },
    // The scroll spans the clip: longer clips scroll slower.
    stretch: "scale",
    phases: { in: 186, out: 0 },
    markers: { settled: 186 },
    beats: [12, 186],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "project", type: "text", maxChars: 32, lines: 1, role: "name" },
    { key: "verb", type: "text", maxChars: 16, lines: 1, role: "label" },
    { key: "unit", type: "text", maxChars: 12, lines: 1, role: "label" },
    { key: "target", type: "number", role: "value" },
  ],
  brand: { accent: "colors.primary", color: "colors.text", background: "colors.background", fontFamily: "fonts.heading", monoFontFamily: "fonts.mono" },
  motionBeats: [{ target: "feed", prop: "scroll", settledBy: 186, easing: "ease" }],
  preview: { poster: { marker: "settled" }, hover: [0, 240] },
});
