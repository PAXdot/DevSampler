// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "logos/craft",
  job: "logos",
  language: "glass",
  mechanic: ["bloom"],
  tags: ["logo", "logo reveal", "penrose", "tiling", "mosaic", "glass", "stained glass", "geometric", "pattern", "light sweep", "opener", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 210, min: 180, max: 600 },
    stretch: "hold",
    phases: { in: 140, out: 0 },
    // logo: the mark lands in the empty star; rim: the first ring of glass closes around it;
    // bloom: rings of tiles spring in outward to the frame edge; settled: every tile has landed;
    // shine: a band of light sweeps across the finished glass.
    markers: { settled: 140, logo: 0, rim: 8, bloom: 22, shine: 124 },
    beats: [0, 8, 22, 105, 140, 160],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "logo", type: "image", role: "logo" },
    { key: "title", type: "text", maxChars: 48, lines: 2, role: "headline" },
  ],
  brand: {
    primary: "colors.primary",
    secondary: "colors.secondary",
    color: "colors.text",
    background: "colors.background",
    fontFamily: "fonts.body",
  },
  motionBeats: [
    { target: "logo", prop: "scale", from: "small", settledBy: 30, easing: "spring" },
    { target: "tiles", prop: "scale", from: "center outward", settledBy: 140, easing: "spring" },
    { target: "title", prop: "opacity", from: "below", settledBy: 80, easing: "ease" },
    { target: "shine", prop: "position", from: "left", settledBy: 185, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 152 }, hover: [0, 210] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (aperiodic Penrose rhombus tiling of beveled glass blooms ring by ring around the logo, then a light sweep, 2026-10-08)" },
});
