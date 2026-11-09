// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "transition",
  category: "transition/camera",
  tags: ["transition", "zoom", "push in", "camera", "zoom through", "fast"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 10, min: 6, max: 30 },
    stretch: "scale",
    phases: { in: 0, out: 0 },
    markers: { settled: 0 },
    // Default 10-frame push: incoming fade starts at .74, PUSH_END=.8, then lands.
    beats: [0, 7, 8, 9],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "none", transparent: true, backdrop: ["background", "nextBackground"] },
  slots: [{ key: "beforeTitle", type: "text", maxChars: 32, lines: 2, role: "label" }, { key: "afterTitle", type: "text", maxChars: 32, lines: 2, role: "label" }, { key: "nextLabel", type: "text", maxChars: 32, lines: 2, role: "label" }],
  brand: { previewAccent: "colors.primary", textColor: "colors.text", fontFamily: "fonts.heading", bodyFontFamily: "fonts.body",  background: "colors.background", nextBackground: "colors.background" },
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 33 }, hover: [0, 60] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (TransitionPresentation; motion study of V01, research 2026-10-05)" },
});
