// Built with Remotion - https://remotion.pro/license
import {defineVideoMeta} from "../../../kit/spec";
export const meta=defineVideoMeta({
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "process/craft",
  "job": "process",
  "language": "kinetic-poster",
  "mechanic": [
    "mobile"
  ],
  "tags": [
    "mobile",
    "balance",
    "sculpture",
    "hanging",
    "words"
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
      "settled": 135
    },
    "beats": [
      0,
      30,
      65,
      100,
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
      "key": "step1",
      "type": "text",
      "role": "body"
    },
    {
      "key": "step2",
      "type": "text",
      "role": "body"
    },
    {
      "key": "step3",
      "type": "text",
      "role": "body"
    },
    {
      "key": "step4",
      "type": "text",
      "role": "body"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
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
    "sourceUrl": "21st first-party (Hanging Process Mobile, 2026-10-09)"
  }
});
