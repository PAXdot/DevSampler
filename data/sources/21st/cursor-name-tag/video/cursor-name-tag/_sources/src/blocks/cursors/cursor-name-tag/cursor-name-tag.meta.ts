// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "ui/cursor",
  tags: ["cursor", "cursor style", "name tag", "multiplayer", "collaboration", "presence", "teammate", "checklist", "realtime"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 132, min: 84, max: 600 },
    stretch: "hold",
    phases: { in: 104, out: 0 },
    markers: { settled: 104, join: 14, check1: 38, check2: 58, check3: 78 },
    beats: [0, 14, 38, 58, 78],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "title", type: "text", maxChars: 28, lines: 2, role: "title" },
    { key: "items", type: "list", maxChars: 28, lines: 2, role: "body" },
    { key: "teammate", type: "text", maxChars: 12, lines: 1, role: "label" },
  ],
  brand: { color: "colors.text", accent: "colors.primary", secondary: "colors.secondary", surfaceColor: "colors.background", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "doc", prop: "rise", from: "below", settledBy: 14, easing: "ease" },
    { target: "avatar", prop: "scale", from: "0", settledBy: 16, easing: "spring" },
    { target: "cursor", prop: "path", from: "avatar", settledBy: 100, easing: "spring" },
    { target: "nameTag", prop: "scale", settledBy: 90, easing: "ease" },
    { target: "checkbox", prop: "fill", settledBy: 92, easing: "ease" },
    { target: "progress", prop: "width", from: "0", settledBy: 92, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 132] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (a teammate's name-tag cursor checks off a shared checklist, 2026-10-07)" },
});
