// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "media/photo",
  tags: ["photo", "grid", "gallery", "explode", "3d", "assemble", "collage"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 105, min: 45, max: 900 },
    stretch: "hold",
    phases: { in: 26, out: 0 },
    markers: { settled: 28 },
    beats: [0, 26],
  },
  layout: {
    aspects: ["16:9", "1:1", "9:16"],
    mode: "responsive",
    fill: "region",
    defaultRegion: { x: 0, y: 0, w: 1, h: 1 },
    safeArea: "action",
    transparent: true,
    preset: "full",
    backdrop: ["background"],
  },
  slots: [
    { key: "photo1", type: "image", role: "media" },
    { key: "photo2", type: "image", role: "media" },
    { key: "photo3", type: "image", role: "media" },
    { key: "photo4", type: "image", role: "media" },
  ],
  brand: { accent: "colors.primary", frameColor: "colors.background", background: "colors.background" },
  motionBeats: [
    { target: "tiles", prop: "z", from: "scattered", settledBy: 26, easing: "ease" },
    { target: "tiles", prop: "z", from: "0", easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 105] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party" },
});
