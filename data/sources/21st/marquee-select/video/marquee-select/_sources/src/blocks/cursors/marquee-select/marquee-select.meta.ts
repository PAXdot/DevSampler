// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "marquee", "drag select", "multi-select", "files", "file grid", "selection bar", "file manager", "bulk actions"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 132, min: 78, max: 600 },
    stretch: "hold",
    phases: { in: 104, out: 0 },
    markers: { settled: 104, grab: 18, release: 62, bar: 68 },
    beats: [0, 18, 62, 68],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "fileNames", type: "list", maxChars: 14, lines: 1, role: "label" },
    { key: "selectionLabel", type: "text", maxChars: 14, lines: 1, role: "label" },
    { key: "actions", type: "list", maxChars: 10, lines: 1, role: "label" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", secondary: "colors.secondary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "cursor", prop: "path", from: "left", settledBy: 18, easing: "ease" },
    { target: "marquee", prop: "size", from: "0", settledBy: 62, easing: "ease" },
    { target: "card badges", prop: "scale", from: "0", settledBy: 74, easing: "spring" },
    { target: "selection bar", prop: "y", from: "below", settledBy: 94, easing: "spring" },
    { target: "cursor", prop: "path", settledBy: 94, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 132] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (drag box selects files in a grid, 2026-10-07)" },
});
