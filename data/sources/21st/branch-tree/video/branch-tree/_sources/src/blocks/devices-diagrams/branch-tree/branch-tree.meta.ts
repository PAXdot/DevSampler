// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "diagram/flow",
  tags: ["diagram", "tree", "flow", "explainer", "steps", "loop", "architecture"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 200, min: 150, max: 900 },
    stretch: "hold",
    phases: { in: 136, out: 0 },
    markers: { settled: 136 },
    beats: [0, 21, 53, 85, 110],
  },
  layout: { aspects: ["16:9", "1:1", "9:16"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "title", type: "text", maxChars: 40, lines: 2, role: "headline" },
    { key: "nodes", type: "list", maxChars: 80, lines: 4, role: "body" },
    { key: "loopLabel", type: "text", maxChars: 24, lines: 1, role: "label" },
  ],
  brand: { accent: "colors.primary", color: "colors.text", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "trunk", prop: "draw", settledBy: 106, easing: "linear" },
    { target: "nodes", prop: "scale", from: "0.6", settledBy: 110, easing: "spring" },
    { target: "loop", prop: "draw", settledBy: 130, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 200] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party; motion recipe from research V05" },
});
