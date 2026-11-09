// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "drag and drop", "file upload", "drop zone", "progress bar", "upload", "dropzone", "file"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 90, max: 600 },
    stretch: "hold",
    phases: { in: 120, out: 0 },
    markers: { settled: 120, drop: 50, upload: 60, done: 100 },
    beats: [0, 50, 60, 100],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "zoneTitle", type: "text", maxChars: 28, lines: 2, role: "headline" },
    { key: "zoneHint", type: "text", maxChars: 40, lines: 2, role: "subline" },
    { key: "fileName", type: "text", maxChars: 20, lines: 1, role: "label" },
    { key: "fileSize", type: "text", maxChars: 12, lines: 1, role: "label" },
    { key: "doneLabel", type: "text", maxChars: 14, lines: 1, role: "label" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "cursor", prop: "path", from: "bottom-left", settledBy: 46, easing: "ease" },
    { target: "drop zone", prop: "highlight", settledBy: 70, easing: "ease" },
    { target: "file chip", prop: "scale", from: "1.05", settledBy: 62, easing: "spring" },
    { target: "progress", prop: "width", from: "0", settledBy: 98, easing: "ease" },
    { target: "doneLabel", prop: "scale", from: "0.6", settledBy: 116, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (file dragged into a drop zone uploads to done, 2026-10-07)" },
});
