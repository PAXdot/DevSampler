// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "element",
  category: "product-ui/craft",
  job: "product-ui",
  language: "photo-collage",
  mechanic: ["develop", "brush"],
  tags: ["screenshot", "reveal", "brush stroke", "paint", "brush", "print", "paper", "texture", "develop", "product ui"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 150, max: 600 },
    stretch: "hold",
    phases: { in: 150, out: 0 },
    markers: { settled: 150, brush: 4, develop: 54, color: 90, peak: 126 },
    beats: [4, 54, 90, 126],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "image", type: "image", role: "screenshot" },
  ],
  brand: {
    color: "colors.text",
    accent: "colors.primary",
    paperColor: "colors.background",
    background: "colors.background",
  },
  motionBeats: [
    { target: "brush", prop: "stroke", from: "left", settledBy: 64, easing: "ease" },
    { target: "print", prop: "density", settledBy: 128, easing: "ease" },
    { target: "print", prop: "color", settledBy: 136, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (liquid emulsion brushed on paper, screenshot develops like a darkroom print, 2026-10-08)" },
});
