// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "overlay-fx",
  category: "ui/notifications",
  tags: ["toast", "notifications", "social proof", "activity", "sales", "cloud", "ui"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 60, max: 600 },
    stretch: "hold",
    phases: { in: 46, out: 0 },
    markers: { settled: 52 },
    beats: [4],
  },
  layout: {
    aspects: ["9:16", "1:1", "16:9"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0, y: 0, w: 1, h: 1 },
    safeArea: "none",
    transparent: true,
    preset: "full",
    backdrop: [],
  },
  slots: [{ key: "items", type: "list", role: "body" }],
  brand: { successColor: "colors.primary", surfaceColor: "colors.background", textColor: "colors.text", accent: "colors.primary", fontFamily: "fonts.heading" },
  motionBeats: [
    { target: "toast", prop: "scale", from: "0.9", settledBy: 6, easing: "ease" },
    { target: "toast", prop: "y", from: "drift up", easing: "linear" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "docs/research/video-components-2026-10-05 (V12 toast cloud)" },
});
