// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "logos/craft",
  job: "logos",
  language: "glass",
  mechanic: ["foil"],
  tags: ["logo", "logo reveal", "holographic", "foil", "hologram", "emboss", "rainbow", "iridescent", "diffraction", "light", "shine", "stamp", "brand"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 140, max: 600 },
    stretch: "hold",
    phases: { in: 126, out: 0 },
    // press: the foil card drops onto the table and the logo is stamped into it (relief overshoots);
    // sweep: the light travels across, the card tilts with it and the rainbow rolls through the foil;
    // glint: the light passes over the mark and flashes; settled: the light rests, the card lies
    // almost flat and only a faint shimmer keeps moving.
    markers: { settled: 126, press: 12, sweep: 24, glint: 66 },
    beats: [0, 12, 24, 66, 100, 126],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "logo", type: "image", role: "logo" },
    { key: "caption", type: "text", maxChars: 48, lines: 2, role: "subline" },
  ],
  brand: { primary: "colors.primary", secondary: "colors.secondary", color: "colors.text", background: "colors.background", fontFamily: "fonts.body" },
  motionBeats: [
    { target: "card", prop: "scale", from: "lifted", settledBy: 24, easing: "spring" },
    { target: "mark", prop: "emboss depth", from: "flat", settledBy: 34, easing: "spring" },
    { target: "light", prop: "position", from: "upper left", settledBy: 126, easing: "ease" },
    { target: "rainbow", prop: "angle", from: "dark foil", settledBy: 126, easing: "ease" },
    { target: "caption", prop: "y", from: "below", settledBy: 112, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (logo embossed into a holographic foil card, a moving light rolls a brand-tinted diffraction rainbow across it, 2026-10-08)" },
});
