// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "product-ui/craft",
  job: "product-ui",
  language: "product-ui",
  mechanic: ["recursion"],
  tags: ["screenshot", "droste", "recursion", "infinite zoom", "escher", "spiral", "loop", "self-similar", "product ui", "screenshot loop"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 240, min: 90, max: 1800 },
    stretch: "loop",
    phases: { in: 0, out: 0 },
    markers: { settled: 0 },
    // Quarter turns of the 240-frame loop: each one carries the camera a quarter level deeper.
    beats: [0, 60, 120, 180],
    loop: true,
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [{ key: "image", type: "image", role: "screenshot" }],
  brand: {
    color: "colors.text",
    accent: "colors.primary",
    secondary: "colors.secondary",
    background: "colors.background",
  },
  motionBeats: [{ target: "camera", prop: "zoom", settledBy: 0, easing: "linear" }],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 240] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (screenshot holds itself inside itself, Escher-style Droste spiral zoom, 2026-10-08)" },
});
