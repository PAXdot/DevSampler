// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "transition",
  category: "transition/wipe",
  tags: ["transition", "wipe", "diagonal", "cut"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 18, min: 8, max: 45 },
    stretch: "scale",
    phases: { in: 0, out: 0 },
    markers: { settled: 0 },
    // Default 18-frame wipe: edge enters, crosses the frame center, then clears.
    beats: [0, 9, 17],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "none", transparent: true, backdrop: ["background", "nextBackground"] },
  slots: [{ key: "beforeTitle", type: "text", maxChars: 32, lines: 2, role: "label" }, { key: "afterTitle", type: "text", maxChars: 32, lines: 2, role: "label" }, { key: "nextLabel", type: "text", maxChars: 32, lines: 2, role: "label" }],
  brand: { textColor: "colors.text", accent: "colors.primary", background: "colors.background", nextBackground: "colors.background" },
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 30 }, hover: [0, 60] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (TransitionPresentation)" },
});
