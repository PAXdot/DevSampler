// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "product-ui/craft",
  job: "product-ui",
  language: "product-ui",
  mechanic: ["dither"],
  energy: "default",
  requiresScreenshot: true,
  tags: ["transition", "dither", "bayer", "1-bit", "retro", "pixel", "crossfade", "screenshot", "before after", "product ui", "launch"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 120, max: 600 },
    stretch: "hold",
    phases: { in: 104, out: 0 },
    // appear: card dithers in as a 1-bit screen; sweep: color pixels start flipping in a Bayer order;
    // hero: half the screen is a 50% checker of before and after; clean: the full-color screenshot is resolved.
    markers: { settled: 104, appear: 0, sweep: 30, hero: 60, clean: 90 },
    beats: [0, 14, 30, 60, 90, 104],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "screenshot", type: "image", role: "screenshot" },
    { key: "fromScreenshot", type: "image", role: "screenshot" },
    { key: "headline", type: "text", maxChars: 48, lines: 3, role: "headline" },
  ],
  brand: { color: "colors.text", primary: "colors.primary", secondary: "colors.secondary", background: "colors.background", fontFamily: "fonts.body" },
  motionBeats: [
    { target: "card", prop: "dither-in", settledBy: 14, easing: "linear" },
    { target: "headline", prop: "dither-in", settledBy: 24, easing: "linear" },
    { target: "pixels", prop: "dissolve", settledBy: 90, easing: "ease" },
    { target: "card", prop: "scale", settledBy: 104, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (8x8 Bayer ordered-dither crossfade from a 1-bit screen to full color, 2026-10-08)" },
});
