// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "pen", "annotation", "marker", "handwriting", "chart", "metric", "highlight", "growth"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 165, min: 90, max: 600 },
    stretch: "hold",
    phases: { in: 130, out: 0 },
    markers: { settled: 130, circle: 28, arrow: 66, note: 99 },
    beats: [0, 28, 66, 99],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "title", type: "text", maxChars: 28, lines: 1, role: "title" },
    { key: "subtitle", type: "text", maxChars: 32, lines: 1, role: "subline" },
    { key: "metric", type: "text", maxChars: 8, lines: 1, role: "stat" },
    { key: "note", type: "text", maxChars: 20, lines: 1, role: "annotation" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", ink: "colors.secondary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading", handFontFamily: "fonts.accent" },
  motionBeats: [
    { target: "bars", prop: "height", from: "0", settledBy: 34, easing: "ease" },
    { target: "cursor", prop: "shape", from: "arrow", settledBy: 24, easing: "linear" },
    { target: "circle", prop: "stroke", from: "0", settledBy: 60, easing: "ease" },
    { target: "arrow", prop: "stroke", from: "0", settledBy: 93, easing: "ease" },
    { target: "note", prop: "reveal", from: "left", settledBy: 122, easing: "linear" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 165] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (a pen cursor circles a chart's number, arrows the bar and writes a note, 2026-10-07)" },
});
