// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "transition",
  category: "transition/brand",
  tags: ["transition", "app icon", "shrink", "brand color", "logo", "outro", "app launch"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 28, min: 16, max: 45 },
    stretch: "scale",
    phases: { in: 0, out: 0 },
    markers: { settled: 0 },
    // Default 28-frame transition: wash ends at .24, icon shrink at .52, release starts at .74.
    beats: [0, 7, 15, 21],
  },
  layout: { aspects: ["1:1", "9:16", "16:9"], mode: "responsive", fill: "frame", safeArea: "none", transparent: true, backdrop: ["background", "nextBackground"] },
  slots: [
    { key: "beforeTitle", type: "text", maxChars: 32, lines: 2, role: "headline" },
    { key: "afterTitle", type: "text", maxChars: 32, lines: 2, role: "headline" },
    { key: "nextLabel", type: "text", maxChars: 32, lines: 2, role: "label" },
    { key: "logo", type: "image", role: "logo" },
    { key: "name", type: "text", maxChars: 24, lines: 1, role: "name" },
  ],
  brand: { previewAccent: "colors.primary", textColor: "colors.text", fontFamily: "fonts.heading", bodyFontFamily: "fonts.body",  color: "colors.primary", logo: "logos.light", background: "colors.background", nextBackground: "colors.background" },
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 35 }, hover: [0, 60] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (TransitionPresentation; motion study of V07, research 2026-10-05)" },
});
