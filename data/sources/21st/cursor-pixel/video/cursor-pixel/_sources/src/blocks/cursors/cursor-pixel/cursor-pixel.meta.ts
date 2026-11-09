// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "cursor style", "pixel", "8-bit", "retro", "game menu", "arcade", "pixel art", "click burst"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 120, min: 72, max: 600 },
    stretch: "hold",
    phases: { in: 90, out: 0 },
    markers: { settled: 90, hover: 28, click: 58 },
    beats: [0, 28, 58],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "title", type: "text", maxChars: 16, lines: 1, role: "headline" },
    { key: "items", type: "list", maxChars: 12, lines: 1, role: "label" },
    { key: "hint", type: "text", maxChars: 16, lines: 1, role: "subline" },
    { key: "readyLabel", type: "text", maxChars: 16, lines: 1, role: "subline" },
  ],
  brand: {
    color: "colors.text",
    accent: "colors.primary",
    secondary: "colors.secondary",
    surfaceColor: "colors.background",
    background: "colors.background",
    fontFamily: "fonts.mono",
  },
  motionBeats: [
    { target: "screen", prop: "scale", from: "0.92", settledBy: 14, easing: "linear" },
    { target: "cursor", prop: "path", from: "right", settledBy: 48, easing: "linear" },
    { target: "selection bar", prop: "y", settledBy: 48, easing: "linear" },
    { target: "pixel burst", prop: "scale", settledBy: 78, easing: "ease" },
    { target: "loading bar", prop: "width", settledBy: 84, easing: "linear" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 120] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (8-bit arrow cursor picks Start in a retro game menu, 2026-10-07)" },
});
