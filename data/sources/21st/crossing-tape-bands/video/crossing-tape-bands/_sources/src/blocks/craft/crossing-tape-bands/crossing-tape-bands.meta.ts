// Built with Remotion - https://remotion.pro/license
import { defineVideoMeta } from "../../../kit/spec";
export const meta = defineVideoMeta({
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "cross",
    "scroll"
  ],
  "tags": [
    "ticker",
    "tape",
    "bands",
    "type",
    "diagonal",
    "poster",
    "headline"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 150,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 135,
      "out": 0
    },
    "markers": {
      "settled": 135,
      "cross": 30,
      "scroll": 70
    },
    "beats": [
      0,
      20,
      30,
      70,
      110,
      135
    ]
  },
  "layout": {
    "aspects": [
      "16:9",
      "9:16",
      "1:1"
    ],
    "mode": "responsive",
    "fill": "frame",
    "safeArea": "action",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "text",
      "type": "text",
      "role": "headline",
      "maxChars": 28,
      "lines": 1
    },
    {
      "key": "secondaryText",
      "type": "text",
      "role": "subline",
      "maxChars": 28,
      "lines": 1
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.display"
  },
  "render": {
    "deterministic": true,
    "clientRenderable": true,
    "webgl": false,
    "requiresGpu": false
  },
  "preview": {
    "poster": {
      "marker": "settled"
    },
    "hover": [
      0,
      180
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (two diagonal typography tapes cross, scroll and brake, 2026-10-09)"
  }
});
