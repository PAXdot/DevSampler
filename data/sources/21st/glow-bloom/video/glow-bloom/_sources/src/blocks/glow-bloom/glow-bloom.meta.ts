// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "background",
  category: "background/glow",
  tags: ["background", "glow", "gradient", "ambient", "loop"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 240, min: 60, max: 1800 },
    stretch: "loop",
    phases: { in: 0, out: 0 },
    markers: { settled: 0 },
    // Default 240-frame breathe cycle: center, bright crest, center, dim trough.
    beats: [0, 60, 120, 180],
    loop: true,
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "none", transparent: true, backdrop: ["background"] },
  slots: [],
  brand: { color: "colors.primary", secondary: "colors.secondary", background: "colors.background" },
  render: { deterministic: true, clientRenderable: false, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 60 }, hover: [0, 240] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "factor-marketplace/remotion/components/glow-bg.tsx" },
});
