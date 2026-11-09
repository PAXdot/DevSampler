// Built with Remotion - https://remotion.pro/license
import { defineLanguage } from "./types";

export default defineLanguage({
  "id": "hand-drawn",
  "name": "Hand-drawn",
  "material": "Irregular strokes, imperfect arrows and handwritten annotations",
  "light": "Flat drawing surface",
  "camera": "Static canvas; strokes draw along their path",
  "type": {
    "display": "handwritten",
    "body": "sans",
    "numerals": "tabular"
  },
  "motion": {
    "verbs": [
      "draw",
      "trace",
      "scribble"
    ],
    "easing": "linear",
    "maxScale": 1.04
  },
  "never": [
    "perfect repeated boxes as the only drawing",
    "drop shadow",
    "glass",
    "random frame noise"
  ],
  "brandRoles": {
    "bg": "drawing surface",
    "ink": "pen strokes and words",
    "accent": "annotation pen"
  },
  "references": [
    {
      "sourceId": "2095148758304743852",
      "sourceUrl": "https://x.com/tldraw/status/2095148758304743852",
      "seconds": 0,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/hand-drawn-1.jpg",
      "sha256": "d79bd4c770120eab69e15811f1375afe6829c0d937598123e02f275102fb2498",
      "observation": "Irregular laptop outline, hand lettering and stick-figure gesture",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2095148758304743852",
      "sourceUrl": "https://x.com/tldraw/status/2095148758304743852",
      "seconds": 2,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/hand-drawn-2.jpg",
      "sha256": "ab95bc1f8d1ef65e3a204760eae5fafda551041e66a44d77458d1072b41d746b",
      "observation": "Irregular laptop outline, hand lettering and stick-figure gesture",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2095148758304743852",
      "sourceUrl": "https://x.com/tldraw/status/2095148758304743852",
      "seconds": 4,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/hand-drawn-3.jpg",
      "sha256": "9e0504e7f04c8337325ac4e22e60ff8ebaa375c216d80f62bf133f53dc0a898d",
      "observation": "Irregular laptop outline, hand lettering and stick-figure gesture",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2095148758304743852",
      "sourceUrl": "https://x.com/tldraw/status/2095148758304743852",
      "seconds": 6,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/hand-drawn-4.jpg",
      "sha256": "a6fe912ebdc49e76152f639849b96334965fba3046cdd34d3e49a027a931da88",
      "observation": "Irregular laptop outline, hand lettering and stick-figure gesture",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2095148758304743852",
      "sourceUrl": "https://x.com/tldraw/status/2095148758304743852",
      "seconds": 8,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/hand-drawn-5.jpg",
      "sha256": "7fd3e6a636079f04164831643a529c42c1dc11287324a4d429e2d78a663e97a0",
      "observation": "Irregular laptop outline, hand lettering and stick-figure gesture",
      "basis": "sampled-frame"
    },
    {
      "sourceId": "2095148758304743852",
      "sourceUrl": "https://x.com/tldraw/status/2095148758304743852",
      "seconds": 10,
      "frame": "docs/research/video-catalog-2026-10-06/language-frames/hand-drawn-6.jpg",
      "sha256": "caa375c87c603ef5fc33ef708e085205f433850c0b93fb5cafdd6c87fd32de0e",
      "observation": "Irregular laptop outline, hand lettering and stick-figure gesture",
      "basis": "sampled-frame"
    }
  ]
});
