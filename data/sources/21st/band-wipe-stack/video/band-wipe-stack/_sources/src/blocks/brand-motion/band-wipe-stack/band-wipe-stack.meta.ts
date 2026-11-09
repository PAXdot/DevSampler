// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "transition",
  category: "transition/wipe",
  tags: ["transition", "wipe", "bands", "slanted", "chapter", "numeral", "stack"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 22, min: 10, max: 40 },
    stretch: "scale",
    phases: { in: 0, out: 0 },
    markers: { settled: 0 },
    // Default two-band 22-frame wipe: staggered band starts at 0/.273/.545, then clears.
    beats: [0, 6, 12, 21],
  },
  layout: { aspects: ["16:9", "1:1", "9:16"], mode: "responsive", fill: "frame", safeArea: "none", transparent: true, backdrop: ["background", "nextBackground"] },
  slots: [{ key: "beforeTitle", type: "text", maxChars: 32, lines: 2, role: "label" }, { key: "afterTitle", type: "text", maxChars: 32, lines: 2, role: "label" }, { key: "nextLabel", type: "text", maxChars: 32, lines: 2, role: "label" }],
  brand: { previewAccent: "colors.primary", textColor: "colors.text", fontFamily: "fonts.heading", bodyFontFamily: "fonts.body", numeralFontFamily: "fonts.numerals",  accent: "colors.primary", secondary: "colors.background", background: "colors.background", nextBackground: "colors.background" },
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 36 }, hover: [0, 60] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (TransitionPresentation; motion study of V09, research 2026-10-05)" },
});
