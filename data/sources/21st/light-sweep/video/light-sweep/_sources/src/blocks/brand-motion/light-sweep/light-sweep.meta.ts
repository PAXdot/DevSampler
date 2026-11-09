// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "overlay-fx",
  category: "overlay/light",
  tags: ["light sweep", "sheen", "shine", "glint", "beat", "overlay", "hype"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 60, min: 16, max: 1800 },
    stretch: "hold",
    phases: { in: 6, out: 0 },
    markers: { settled: 16, sweep: 6 },
    beats: [6, 42],
  },
  layout: {
    aspects: ["16:9", "9:16", "1:1"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0, y: 0, w: 1, h: 1 },
    safeArea: "none",
    transparent: true,
    preset: "full",
    backdrop: [],
  },
  slots: [],
  brand: { color: "colors.text" },
  motionBeats: [{ target: "band", prop: "x", from: "left", settledBy: 16, easing: "ease" }],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 11 }, hover: [0, 60] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (motion study of V03, research 2026-10-05)" },
});
