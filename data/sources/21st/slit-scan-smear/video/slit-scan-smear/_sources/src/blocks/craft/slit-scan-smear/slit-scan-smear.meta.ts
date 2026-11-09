// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "product-ui/craft",
  job: "product-ui",
  language: "product-ui",
  mechanic: ["smear"],
  energy: "punchy",
  requiresScreenshot: true,
  tags: ["transition", "slit-scan", "light streaks", "long exposure", "smear", "before after", "screenshot", "redesign", "product ui", "launch"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 150, min: 150, max: 600 },
    stretch: "hold",
    phases: { in: 140, out: 0 },
    // launch: top rows leave first; hero: the upper screen is long streaks of light; poster (frame 105):
    // the new screen stands sharp on top while its lower rows still trail light; land: the last rows arrive sharp.
    markers: { settled: 140, launch: 26, hero: 60, land: 117 },
    beats: [0, 26, 60, 117, 140],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "screenshot", type: "image", role: "screenshot" },
    { key: "nextScreenshot", type: "image", role: "screenshot" },
    { key: "caption", type: "text", maxChars: 48, lines: 2, role: "caption" },
  ],
  brand: { color: "colors.text", primary: "colors.primary", secondary: "colors.secondary", background: "colors.background", fontFamily: "fonts.body" },
  motionBeats: [
    { target: "rows", prop: "x", settledBy: 125, easing: "ease" },
    { target: "streaks", prop: "length", settledBy: 125, easing: "ease" },
    { target: "caption", prop: "x", from: "left", settledBy: 105, easing: "spring" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { frame: 105 }, hover: [0, 150] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (slit-scan long-exposure streaks carry screenshot A out and B in, row by row, 2026-10-08)" },
});
