// Built with Remotion - https://remotion.pro/license
import {defineVideoMeta} from "../../../kit/spec";
export const meta=defineVideoMeta({
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "pixel-terminal",
  "mechanic": [
    "rewind"
  ],
  "tags": [
    "cellular-automaton",
    "game-of-life",
    "logo",
    "time-reversal",
    "pixels",
    "grid"
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
      "chaos": 63,
      "rewind": 90
    },
    "beats": [
      0,
      18,
      63,
      90,
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
      "key": "logo",
      "type": "image",
      "role": "logo"
    },
    {
      "key": "caption",
      "type": "text",
      "role": "subline",
      "maxChars": 40,
      "lines": 2
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.mono"
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
    "sourceUrl": "21st first-party (logo alpha evolves under Conway Life rules and rewinds into the original asset, 2026-10-09)"
  }
});
