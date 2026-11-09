// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "product-ui/craft",
  job: "product-ui",
  language: "product-ui",
  mechanic: ["twist"],
  energy: "default",
  requiresScreenshot: false,
  tags: ["screenshot", "logo", "cube", "puzzle", "3d", "twist", "scramble", "solve", "slices", "reveal", "product ui", "launch"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 180, min: 150, max: 600 },
    stretch: "hold",
    phases: { in: 146, out: 0 },
    // scramble: three quick slice twists mix the screenshot; scrambled: the cube rests mixed;
    // solve: the twists run back, snappier; hero: the last slice clicks home; settled: the
    // cube has turned to show the logo face and the title has landed.
    markers: { settled: 146, scramble: 14, scrambled: 62, solve: 82, hero: 118, logo: 132 },
    beats: [0, 14, 30, 46, 62, 82, 94, 106, 118, 146],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "screenshot", type: "image", role: "screenshot" },
    { key: "logo", type: "image", role: "logo" },
    { key: "title", type: "text", maxChars: 48, lines: 3, role: "headline" },
  ],
  brand: {
    color: "colors.text",
    primary: "colors.primary",
    secondary: "colors.secondary",
    background: "colors.background",
    fontFamily: "fonts.body",
  },
  motionBeats: [
    { target: "slices", prop: "rotate", from: "solved", settledBy: 118, easing: "spring" },
    { target: "cube", prop: "rotateY", from: "left", settledBy: 146, easing: "ease" },
    { target: "title", prop: "y", from: "below", settledBy: 146, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "settled" }, hover: [0, 180] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (a 3D puzzle cube with the screenshot on its face scrambles slice by slice and solves itself, 2026-10-08)" },
});
