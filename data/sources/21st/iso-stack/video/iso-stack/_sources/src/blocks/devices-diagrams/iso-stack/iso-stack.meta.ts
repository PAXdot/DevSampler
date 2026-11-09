// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "diagram/layers",
  tags: ["isometric", "3d", "layers", "stack", "explainer", "how it works", "architecture"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 60, max: 600 },
    stretch: "hold",
    phases: { in: 44, out: 0 },
    markers: { settled: 46 },
    beats: [4, 13, 22, 31],
  },
  layout: { aspects: ["1:1", "16:9", "9:16"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "headline", type: "text", maxChars: 48, lines: 2, role: "headline" },
    { key: "layers", type: "list", maxChars: 20, role: "label" },
    { key: "media", type: "image", role: "media" },
  ],
  brand: { secondary: "colors.secondary", surfaceColor: "colors.background", panelColor: "colors.text", monoFontFamily: "fonts.mono", accent: "colors.primary", color: "colors.text", background: "colors.background", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "layers", prop: "x", from: "bottom-right", settledBy: 41, easing: "ease" },
    { target: "headline", prop: "y", from: "below", settledBy: 24, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party; motion recipe from research V11" },
});
