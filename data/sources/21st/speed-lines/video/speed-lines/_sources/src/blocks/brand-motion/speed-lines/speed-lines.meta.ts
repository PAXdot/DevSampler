// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "background",
  category: "background/lines",
  tags: ["background", "speed lines", "streaks", "diagonal", "dark", "hype", "ambient", "loop"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 240, min: 60, max: 1800 },
    stretch: "loop",
    phases: { in: 0, out: 0 },
    markers: { settled: 0 },
    // Default 240-frame loop has three 80-frame streak lifetimes (rounded from LIFE=72).
    beats: [0, 80, 160],
    loop: true,
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "none", transparent: true, backdrop: ["background"] },
  slots: [],
  brand: { accent: "colors.primary", background: "colors.background", color: "colors.text" },
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 60 }, hover: [0, 240] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (motion study of V03, research 2026-10-05)" },
});
