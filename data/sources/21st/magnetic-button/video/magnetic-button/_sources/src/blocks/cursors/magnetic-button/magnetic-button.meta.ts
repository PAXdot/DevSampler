// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "magnetic", "button", "click", "cta", "hover", "press", "interaction"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 96, min: 60, max: 600 },
    stretch: "hold",
    phases: { in: 70, out: 0 },
    markers: { settled: 70, click: 44 },
    beats: [0, 44, 52],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "kicker", type: "text", maxChars: 32, lines: 1, role: "kicker" },
    { key: "label", type: "text", maxChars: 20, lines: 1, role: "label" },
    { key: "doneLabel", type: "text", maxChars: 20, lines: 1, role: "label" },
    { key: "hint", type: "text", maxChars: 40, lines: 2, role: "subline" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "cursor", prop: "path", from: "bottom-right", settledBy: 38, easing: "ease" },
    { target: "button", prop: "xy", settledBy: 44, easing: "spring" },
    { target: "button", prop: "fill", settledBy: 58, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 96] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (magnetic button pulled toward the cursor, 2026-10-07)" },
});
