// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "diagram/ecosystem",
  tags: ["orbit", "rings", "ecosystem", "community", "avatars", "integrations", "network"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 60, max: 900 },
    stretch: "hold",
    phases: { in: 54, out: 0 },
    markers: { settled: 56 },
    beats: [0, 4, 10],
  },
  layout: {
    aspects: ["9:16", "1:1", "16:9"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0.1, y: 0.2, w: 0.8, h: 0.6 },
    safeArea: "action",
    transparent: true,
    preset: "center",
    backdrop: [],
  },
  slots: [{ key: "centerLabel", type: "text", maxChars: 24, lines: 1, role: "headline" }],
  brand: { secondary: "colors.secondary", accent: "colors.primary", color: "colors.text", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "rings", prop: "draw", settledBy: 22, easing: "ease" },
    { target: "badges", prop: "scale", from: "0", settledBy: 54, easing: "spring" },
    { target: "badges", prop: "orbit", easing: "linear" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party; motion recipe from research V12" },
});
