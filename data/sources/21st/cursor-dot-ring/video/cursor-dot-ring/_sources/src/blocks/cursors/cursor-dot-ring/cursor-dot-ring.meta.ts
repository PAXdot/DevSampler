// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "cursor style", "dot ring", "dot and ring", "custom cursor", "portfolio", "hover", "project grid", "minimal"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 72, max: 600 },
    stretch: "hold",
    phases: { in: 90, out: 0 },
    markers: { settled: 90, hover: 34, click: 62 },
    beats: [0, 34, 62],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "heading", type: "text", maxChars: 24, lines: 1, role: "headline" },
    { key: "note", type: "text", maxChars: 24, lines: 1, role: "kicker" },
    { key: "titles", type: "list", maxChars: 14, lines: 1, role: "label" },
    { key: "tags", type: "list", maxChars: 12, lines: 1, role: "label" },
    { key: "viewLabel", type: "text", maxChars: 8, lines: 1, role: "label" },
  ],
  brand: {
    color: "colors.text",
    accent: "colors.primary",
    secondary: "colors.secondary",
    surfaceColor: "colors.background",
    background: "colors.background",
    fontFamily: "fonts.heading",
    serifFontFamily: "fonts.serif",
  },
  motionBeats: [
    { target: "project tiles", prop: "y", from: "below", settledBy: 24, easing: "ease" },
    { target: "cursor", prop: "path", from: "right", settledBy: 56, easing: "ease" },
    { target: "ring", prop: "size", settledBy: 44, easing: "ease" },
    { target: "ring", prop: "scale", settledBy: 70, easing: "ease" },
    { target: "other tiles", prop: "opacity", settledBy: 84, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (dot and lagging ring cursor opens a portfolio project, 2026-10-07)" },
});
