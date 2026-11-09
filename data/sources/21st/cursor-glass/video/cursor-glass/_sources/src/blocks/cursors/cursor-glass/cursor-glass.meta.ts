// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "cursor style", "glass", "frosted", "glassmorphism", "media player", "music", "play button", "hero shot"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 114, min: 80, max: 600 },
    stretch: "hold",
    phases: { in: 84, out: 0 },
    markers: { settled: 84, play: 54 },
    beats: [0, 54],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "label", type: "text", maxChars: 16, lines: 1, role: "kicker" },
    { key: "title", type: "text", maxChars: 24, lines: 1, role: "headline" },
    { key: "artist", type: "text", maxChars: 24, lines: 1, role: "subline" },
    { key: "elapsed", type: "text", maxChars: 6, lines: 1, role: "label" },
    { key: "duration", type: "text", maxChars: 6, lines: 1, role: "label" },
  ],
  brand: {
    color: "colors.text",
    accent: "colors.primary",
    secondary: "colors.secondary",
    surfaceColor: "colors.background",
    background: "colors.background",
    fontFamily: "fonts.heading",
  },
  motionBeats: [
    { target: "widget", prop: "y", from: "below", settledBy: 20, easing: "spring" },
    { target: "cursor", prop: "path", from: "bottom", settledBy: 48, easing: "ease" },
    { target: "playButton", prop: "icon", settledBy: 64, easing: "ease" },
    { target: "cover", prop: "scale", settledBy: 76, easing: "spring" },
    { target: "blobs", prop: "xy", settledBy: 84, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 114] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (frosted glass arrow plays a track on a glass media widget, 2026-10-07)" },
});
