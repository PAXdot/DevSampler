// Built with Remotion - https://remotion.pro/license
import {defineVideoMeta} from "../../../kit/spec";
export const meta=defineVideoMeta({
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/craft",
  "job": "data",
  "language": "neo-brutal",
  "mechanic": [
    "sankey"
  ],
  "tags": [
    "sankey",
    "flow",
    "split",
    "proportion"
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
      "key": "label1",
      "type": "text",
      "role": "body"
    },
    {
      "key": "label2",
      "type": "text",
      "role": "body"
    },
    {
      "key": "label3",
      "type": "text",
      "role": "body"
    },
    {
      "key": "value1",
      "type": "text",
      "role": "metric"
    },
    {
      "key": "value2",
      "type": "text",
      "role": "metric"
    },
    {
      "key": "value3",
      "type": "text",
      "role": "metric"
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
    "sourceUrl": "21st first-party (Flow Split Numbers, 2026-10-09)"
  }
});
