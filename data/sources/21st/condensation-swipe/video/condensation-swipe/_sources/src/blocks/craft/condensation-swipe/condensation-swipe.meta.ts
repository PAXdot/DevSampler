// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "product-ui/craft",
  job: "product-ui",
  language: "glass",
  mechanic: ["wipe"],
  energy: "default",
  requiresScreenshot: false,
  tags: ["screenshot", "reveal", "condensation", "fog", "foggy glass", "water droplets", "swipe", "wipe", "drips", "refraction", "glass", "rain", "product ui", "launch"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 172, max: 600 },
    stretch: "hold",
    phases: { in: 170, out: 0 },
    // fogged = the pane is fully misted, swipe..swiped = one swipe clears a streak to the screenshot,
    // drips = drops run down from the streak's lower edge, lift = the fog evaporates, settled = all still.
    markers: { settled: 170, fogged: 50, swipe: 56, swiped: 84, drips: 92, lift: 110 },
    beats: [0, 28, 56, 70, 84, 110, 140, 170],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "screenshot", type: "image", role: "screenshot" },
    { key: "title", type: "text", maxChars: 48, lines: 2, role: "headline" },
  ],
  brand: {
    color: "colors.text",
    primary: "colors.primary",
    secondary: "colors.secondary",
    background: "colors.background",
    fontFamily: "fonts.body",
  },
  motionBeats: [
    { target: "fog", prop: "opacity", settledBy: 50, easing: "ease" },
    { target: "droplets", prop: "scale", settledBy: 60, easing: "ease" },
    { target: "swipe", prop: "wipe", from: "left", settledBy: 84, easing: "ease" },
    { target: "drips", prop: "y", settledBy: 164, easing: "ease" },
    { target: "title", prop: "blur", settledBy: 160, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (a fogged pane beads with droplets, one swipe clears a streak to the screenshot and drops run down its edge, 2026-10-08)" },
});
