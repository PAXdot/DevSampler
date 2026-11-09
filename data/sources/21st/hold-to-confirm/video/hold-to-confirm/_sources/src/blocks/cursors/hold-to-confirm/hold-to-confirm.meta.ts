// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "hold", "long press", "deploy", "confirm", "button", "progress ring", "launch", "cta"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 140, min: 70, max: 600 },
    stretch: "hold",
    phases: { in: 112, out: 0 },
    markers: { settled: 112, hold: 30, done: 84 },
    beats: [0, 30, 84],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "context", type: "text", maxChars: 28, lines: 1, role: "kicker" },
    { key: "label", type: "text", maxChars: 20, lines: 1, role: "label" },
    { key: "doneLabel", type: "text", maxChars: 20, lines: 1, role: "label" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", secondary: "colors.secondary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "cursor", prop: "path", from: "bottom-right", settledBy: 26, easing: "ease" },
    { target: "button", prop: "fill", from: "left", settledBy: 84, easing: "ease" },
    { target: "sparks", prop: "burst", settledBy: 108, easing: "ease" },
    { target: "doneLabel", prop: "y", settledBy: 94, easing: "spring" },
    { target: "tile", prop: "icon", from: "rocket", settledBy: 106, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 140] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (cursor holds a button until it fills and bursts, 2026-10-07)" },
});
