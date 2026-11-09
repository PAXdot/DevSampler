// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "background",
  category: "background/aurora",
  tags: ["background", "aurora", "silk", "ribbons", "gradient", "ambient", "loop"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 240, min: 60, max: 1800 },
    stretch: "loop",
    phases: { in: 0, out: 0 },
    markers: { settled: 0 },
    // Default 240-frame loop phase quadrants: ribbon drift and twist turn together.
    beats: [0, 60, 120, 180],
    loop: true,
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "none", transparent: true, backdrop: ["background"] },
  slots: [],
  brand: { c1: "colors.primary", c2: "colors.secondary", background: "colors.background", c3: "colors.primary" },
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 60 }, hover: [0, 240] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (Canvas2D port of the aurora hero look)" },
});
