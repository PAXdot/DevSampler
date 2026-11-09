// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "cursor style", "sketch", "hand-drawn", "pencil", "doodle", "wireframe", "whiteboard", "click", "explainer"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 80, max: 600 },
    stretch: "hold",
    phases: { in: 96, out: 0 },
    markers: { settled: 96, doodle: 30, click: 66 },
    beats: [0, 30, 66],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "title", type: "text", maxChars: 24, lines: 1, role: "title" },
    { key: "steps", type: "list", maxChars: 12, lines: 1, role: "label" },
    { key: "label", type: "text", maxChars: 14, lines: 1, role: "label" },
    { key: "doneLabel", type: "text", maxChars: 14, lines: 1, role: "label" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", secondary: "colors.secondary", surfaceColor: "colors.background", background: "colors.background", handFontFamily: "fonts.accent" },
  motionBeats: [
    { target: "flow", prop: "stroke", from: "0", settledBy: 41, easing: "linear" },
    { target: "cursor", prop: "path", from: "bottom-left", settledBy: 60, easing: "ease" },
    { target: "button", prop: "fill", from: "left", settledBy: 78, easing: "ease" },
    { target: "tick", prop: "stroke", from: "0", settledBy: 86, easing: "ease" },
    { target: "cursor", prop: "outline", settledBy: 96, easing: "linear" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (pencil-drawn cursor clicks a button on a sketchbook wireframe, 2026-10-07)" },
});
