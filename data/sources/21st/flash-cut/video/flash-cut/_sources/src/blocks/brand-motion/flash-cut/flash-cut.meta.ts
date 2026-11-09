// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "transition",
  category: "transition/flash",
  tags: ["transition", "flash", "cut", "beat", "hype", "white", "music"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 8, min: 4, max: 24 },
    stretch: "scale",
    phases: { in: 0, out: 0 },
    markers: { settled: 0 },
    // Default 8-frame transition: swell starts, cutAt=.25 flashes on frame 2, decay clears.
    beats: [0, 2, 7],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "none", transparent: true, backdrop: ["background", "nextBackground"] },
  slots: [{ key: "beforeTitle", type: "text", maxChars: 32, lines: 2, role: "label" }, { key: "afterTitle", type: "text", maxChars: 32, lines: 2, role: "label" }, { key: "nextLabel", type: "text", maxChars: 32, lines: 2, role: "label" }],
  brand: { previewAccent: "colors.primary", textColor: "colors.text", fontFamily: "fonts.heading", bodyFontFamily: "fonts.body",  color: "colors.text", background: "colors.background", nextBackground: "colors.background" },
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 28 }, hover: [0, 60] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (TransitionPresentation; motion study of V02 and V03, research 2026-10-05)" },
});
