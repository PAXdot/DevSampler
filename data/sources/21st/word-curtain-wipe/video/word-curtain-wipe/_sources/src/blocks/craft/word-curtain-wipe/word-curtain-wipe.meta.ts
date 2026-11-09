// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";

export const meta = defineVideoMeta({
  spec: "21st.video/1",
  kind: "scene",
  category: "titles/craft",
  job: "titles",
  language: "kinetic-poster",
  mechanic: ["mask"],
  energy: "punchy",
  requiresScreenshot: false,
  tags: ["title", "headline", "word", "type mask", "knockout type", "letters as windows", "wipe", "transition", "zoom through", "screenshot", "kinetic type", "poster"],
  engines: { remotion: ">=4.0.479 <5" },
  timing: {
    fps: 30,
    duration: { default: 72, min: 64, max: 240 },
    stretch: "hold",
    // No outro: the dive into the last letter IS the landing. The screenshot it reveals
    // settles by frame 63 and holds to the end; extra length only lengthens that hold.
    phases: { in: 63, out: 0 },
    // scroll = the giant word races in, word = the camera has pulled back onto the whole word
    // (poster), dive = the last letter starts to grow, covered = the letter has swallowed the
    // frame, settled = the revealed screenshot has landed and holds.
    markers: { settled: 63, scroll: 3, word: 26, dive: 36, covered: 55 },
    beats: [0, 3, 9, 26, 36, 40, 55, 63],
  },
  layout: { aspects: ["16:9", "9:16", "1:1"], mode: "responsive", fill: "frame", safeArea: "action", transparent: true, backdrop: ["background"] },
  slots: [
    { key: "text", type: "text", maxChars: 24, lines: 2, role: "headline" },
    { key: "screenshot", type: "image", role: "screenshot" },
  ],
  brand: {
    color: "colors.text",
    primary: "colors.primary",
    secondary: "colors.secondary",
    background: "colors.background",
    fontFamily: "fonts.display",
  },
  motionBeats: [
    { target: "text", prop: "translateX", from: "right", settledBy: 20, easing: "ease" },
    { target: "camera", prop: "scale", from: "outside", settledBy: 26, easing: "ease" },
    { target: "text", prop: "scale", settledBy: 55, easing: "ease" },
    { target: "screenshot", prop: "scale", settledBy: 63, easing: "ease" },
  ],
  render: { deterministic: true, clientRenderable: true, webgl: false, requiresGpu: false },
  preview: { poster: { marker: "word" }, hover: [0, 72] },
  provenance: { origin: "own", license: "MIT", sourceUrl: "21st first-party (a giant word scrolls in with the next scene inside its letters, then its last letter swallows the frame, 2026-10-08)" },
});
