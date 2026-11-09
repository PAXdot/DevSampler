// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "cursor style", "classic", "arrow", "pointer", "settings", "toggle", "dialog", "save", "product demo"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 130, min: 90, max: 600 },
    stretch: "hold",
    phases: { in: 100, out: 0 },
    markers: { settled: 100, toggle: 42, save: 74 },
    beats: [0, 42, 74],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "title", type: "text", maxChars: 24, lines: 1, role: "headline" },
    { key: "subtitle", type: "text", maxChars: 40, lines: 2, role: "subline" },
    { key: "firstLabel", type: "text", maxChars: 20, lines: 2, role: "label" },
    { key: "firstHint", type: "text", maxChars: 32, lines: 1, role: "body" },
    { key: "secondLabel", type: "text", maxChars: 20, lines: 2, role: "label" },
    { key: "secondHint", type: "text", maxChars: 32, lines: 1, role: "body" },
    { key: "cancelLabel", type: "text", maxChars: 12, lines: 1, role: "label" },
    { key: "saveLabel", type: "text", maxChars: 16, lines: 1, role: "cta" },
    { key: "savedLabel", type: "text", maxChars: 16, lines: 1, role: "cta" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "dialog", prop: "scale", from: "0.96", settledBy: 16, easing: "spring" },
    { target: "cursor", prop: "path", from: "bottom-right", settledBy: 36, easing: "ease" },
    { target: "toggle", prop: "x", settledBy: 56, easing: "spring" },
    { target: "saveButton", prop: "fill", settledBy: 90, easing: "ease" },
    { target: "cursor", prop: "xy", settledBy: 96, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 130] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (classic arrow flips a setting and saves a dialog, 2026-10-07)" },
});
