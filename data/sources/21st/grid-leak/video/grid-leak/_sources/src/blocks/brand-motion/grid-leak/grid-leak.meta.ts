// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "background",
  category: "background/grid",
  tags: ["background", "grid", "light leak", "explainer", "charcoal", "calm", "ambient", "loop"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 300, min: 60, max: 1800 },
    stretch: "loop",
    phases: { in: 0, out: 0 },
    markers: { settled: 0 },
    // Default 300-frame drift cycle: start, positive diagonal extreme, breath minimum, negative extreme.
    beats: [0, 75, 150, 225],
    loop: true,
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "none", transparent: true, backdrop: ["background"] },
  slots: [],
  brand: { leak: "colors.primary", background: "colors.background", lineColor: "colors.text" },
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 75 }, hover: [0, 300] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (motion study of V09 and V10, research 2026-10-05)" },
});
