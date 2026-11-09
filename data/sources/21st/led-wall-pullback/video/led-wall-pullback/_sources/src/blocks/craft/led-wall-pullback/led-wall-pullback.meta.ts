// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "product-ui/craft",
  job: "product-ui",
  language: "product-ui",
  mechanic: ["pullback"],
  energy: "default",
  requiresScreenshot: false,
  tags: ["screenshot", "led wall", "big screen", "stage", "diodes", "pixels", "zoom out", "pullback", "macro", "bloom", "keynote", "launch", "product ui"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 130, max: 600 },
    stretch: "hold",
    phases: { in: 120, out: 0 },
    // macro = a close-up of the wall: diodes power on in the brand colors and a wavefront sweeps the
    // screenshot onto them (big UI shapes already legible), pullback = one continuous zoom out from
    // frame 0, readable = the screenshot reads on the wall while the camera is still moving,
    // hero = mid-pullback, the whole screen on the stage with its edges and the audience,
    // settled = the wall rests on the stage with its reflection and the caption is in.
    markers: { settled: 120, macro: 0, refresh: 1, pullback: 0, readable: 48, hero: 72 },
    beats: [0, 9, 48, 72, 90, 106, 120],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "screenshot", type: "image", role: "screenshot" },
    { key: "title", type: "text", maxChars: 48, lines: 2, role: "caption" },
  ],
  brand: {
    color: "colors.text",
    primary: "colors.primary",
    secondary: "colors.secondary",
    background: "colors.background",
    fontFamily: "fonts.body",
  },
  motionBeats: [
    { target: "diodes", prop: "power-on", settledBy: 8, easing: "linear" },
    { target: "screenshot", prop: "refresh", settledBy: 9, easing: "ease" },
    { target: "camera", prop: "scale", settledBy: 106, easing: "ease" },
    { target: "title", prop: "y", from: "bottom", settledBy: 112, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (close-up on LED diodes pulling back to a screenshot on a stage screen, 2026-10-08)" },
});
