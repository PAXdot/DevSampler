// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/motion-gallery",
  "job": "data",
  "language": "product-ui",
  "mechanic": [
    "balance-roll-and-line-draw"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "data",
    "balance-roll-and-line-draw",
    "fintech",
    "balance",
    "chart",
    "counter"
  ],
  "engines": {
    "remotion": ">=4.0.533 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 90,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 102,
      "out": 0
    },
    "markers": {
      "settled": 102
    },
    "beats": [
      0,
      26,
      51,
      77,
      102
    ],
    "loop": false
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
    "preset": "full",
    "backdrop": [
      "paintBackground"
    ]
  },
  "slots": [
    {
      "key": "label",
      "type": "text",
      "maxChars": 22,
      "role": "label"
    },
    {
      "key": "value",
      "type": "text",
      "maxChars": 11,
      "role": "value"
    },
    {
      "key": "delta",
      "type": "text",
      "maxChars": 26,
      "role": "caption"
    },
    {
      "key": "brand",
      "type": "text",
      "maxChars": 14,
      "role": "name"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.heading",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "balance-roll-and-line-draw",
      "prop": "transform",
      "from": "enter",
      "settledBy": 102,
      "easing": "ease"
    }
  ],
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
    "sourceUrl": "docs/research/launch-videos-2026-10-06/README.md"
  },
  "defaults": {
    "ink": "#101215",
    "accent": "#CFF26B",
    "secondary": "#4A7A0C",
    "paper": "#F6F2EA",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "label": "Total balance",
    "value": "$48,260.14",
    "delta": "+$2,418.60 this month",
    "brand": "halcy"
  },
  "fields": [
    {
      "key": "ink",
      "label": "Ink",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "paper",
      "label": "Paper",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "displayFont",
      "label": "Display font",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "bodyFont",
      "label": "Body font",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFont",
      "label": "Mono font",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "paintBackground",
      "label": "Paint background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 22,
      "role": "label"
    },
    {
      "key": "value",
      "label": "Value",
      "type": "text",
      "max": 11,
      "role": "value"
    },
    {
      "key": "delta",
      "label": "Delta",
      "type": "text",
      "max": 26,
      "role": "caption"
    },
    {
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 14,
      "role": "name"
    }
  ],
  "name": "Balance Growth Chart",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fin-balance-chart",
    "bundleSha256": "ae2843ef6c0b6f56e51d44110e347e9d2252c871350fba891874f1952e238dd2",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:16:39.807Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/16x9-paper.png",
        "sha256": "a3c20b06123c2519fcaac92f626d8ff9a460957120a9c7f075de424b27a45d38"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/16x9-night.png",
        "sha256": "ee68bf9e4965ecf6935865524fe3a466c3058a30500f04bc91f5cab2676f1df3"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/16x9-color.png",
        "sha256": "e081ccaf04e0796929c51d540f4f61bd60470e548e2a40c16360a77034d58b64"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/9x16-paper.png",
        "sha256": "338d10287f502a4ce268321a2feda0a61f9711a79c83d49d42a26f373b0d3742"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/9x16-night.png",
        "sha256": "29cb8e3c761ff46665f09f438f4e18281852a9ffb3343a4cd68f49d8110e6277"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/9x16-color.png",
        "sha256": "6297c4d3c09d39b1ff104db1a02e4dfaf8b8fa720900ee6ee7c09f2081a8d8bf"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/1x1-paper.png",
        "sha256": "38ad49da05786a74cee31528547275cb5857b00653596354925f3381eda49faa"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/1x1-night.png",
        "sha256": "5c15dc545ac1f3f4a4aaa14cf7d5c6b6e6f1862c98dfba2b40232901145b86fd"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/1x1-color.png",
        "sha256": "b74c8a10fceaa4ec443510fdb953a140991ce4defe3bacf06797c70e1ebcb79f"
      }
    ],
    "gates": {
      "contract": {
        "pass": true,
        "errors": [],
        "transparency": [
          {
            "aspect": "16:9",
            "brand": "paper",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "mg-fin-balance-chart--16x9",
          "mg-fin-balance-chart--9x16",
          "mg-fin-balance-chart--1x1"
        ]
      },
      "brand": {
        "pass": true,
        "sourcePaintLiterals": [],
        "sourceFontLiterals": [],
        "samples": [
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 51.966579861111114,
            "paperColor": 17.780843098958332,
            "region": {
              "left": 0,
              "top": 96,
              "width": 1920,
              "height": 968
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 71.18820529513889,
            "paperColor": 21.15155707465278,
            "region": {
              "left": 0,
              "top": 184,
              "width": 1080,
              "height": 1650
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 55.011257595486114,
            "paperColor": 16.740315755208332,
            "region": {
              "left": 0,
              "top": 76,
              "width": 1080,
              "height": 991
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          }
        ],
        "note": "Measured three rebrands over their actual subject union; contract checks color bindings. Visual brand adherence needs semantic review."
      },
      "readability": {
        "pass": true,
        "probes": [
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.270261190896112,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.270261190896112,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.270261190896112,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2164588057445203,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2164588057445203,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.217935090702948,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3004430167128582,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3004430167128582,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3004430167128582,
            "bad": [],
            "measured": 13
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.847005208333333,
        "frames": [
          15,
          102,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 7.506184895833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/16x9-duration-90-frame-10.png",
                "sha256": "a1cb2d414e2d1055a5437f4c1876f69cf8b95c4d6aae0c2d70c0305b32edad46",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/16x9-duration-90-frame-89.png",
                "sha256": "a33df9bcacce680ec11e8f4d091c5174f6396e3efc1978dffde748a245bb386a",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/16x9-duration-90-frame-79.png",
                "sha256": "a33df9bcacce680ec11e8f4d091c5174f6396e3efc1978dffde748a245bb386a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.847005208333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/16x9-duration-900-frame-15.png",
                "sha256": "ce7e59f4190026c9bb794a67ad42bd8e3f702ad06f620f49e1473eb5851e6a4b",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/16x9-duration-900-frame-102.png",
                "sha256": "a33df9bcacce680ec11e8f4d091c5174f6396e3efc1978dffde748a245bb386a",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/16x9-duration-900-frame-792.png",
                "sha256": "a33df9bcacce680ec11e8f4d091c5174f6396e3efc1978dffde748a245bb386a",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/16x9-duration-900-frame-899.png",
                "sha256": "a33df9bcacce680ec11e8f4d091c5174f6396e3efc1978dffde748a245bb386a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 11.462348090277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/9x16-duration-90-frame-10.png",
                "sha256": "5f758ef5507891098de4c42c650246dabc06c42e5eb9734ceb45b888a34b5d40",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/9x16-duration-90-frame-89.png",
                "sha256": "f94dd65dd18972824dd6e6db3084b8f56b5dd4190e9cd90725af19ef039422e8",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/9x16-duration-90-frame-79.png",
                "sha256": "f94dd65dd18972824dd6e6db3084b8f56b5dd4190e9cd90725af19ef039422e8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 11.656901041666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/9x16-duration-900-frame-15.png",
                "sha256": "38a809d0ba453eec0149f621faf538094d517559de6a025dfb3377998f132998",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/9x16-duration-900-frame-102.png",
                "sha256": "f94dd65dd18972824dd6e6db3084b8f56b5dd4190e9cd90725af19ef039422e8",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/9x16-duration-900-frame-792.png",
                "sha256": "f94dd65dd18972824dd6e6db3084b8f56b5dd4190e9cd90725af19ef039422e8",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/9x16-duration-900-frame-899.png",
                "sha256": "f94dd65dd18972824dd6e6db3084b8f56b5dd4190e9cd90725af19ef039422e8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 8.376410590277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/1x1-duration-90-frame-10.png",
                "sha256": "2ac1206ee486a259dd05096a7c14068e08d08c1097d477790cc92b285f8b8497",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/1x1-duration-90-frame-89.png",
                "sha256": "291f165ff33eafe01b21d27e6435c9b057dfb658c4484aae674d1430965160e7",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/1x1-duration-90-frame-79.png",
                "sha256": "291f165ff33eafe01b21d27e6435c9b057dfb658c4484aae674d1430965160e7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 8.71560329861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/1x1-duration-900-frame-15.png",
                "sha256": "28ff6e0016bd0d3772e2059279dda7395d9eba8cf8d8769da6e8f9dbed3fbe37",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/1x1-duration-900-frame-102.png",
                "sha256": "291f165ff33eafe01b21d27e6435c9b057dfb658c4484aae674d1430965160e7",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/1x1-duration-900-frame-792.png",
                "sha256": "291f165ff33eafe01b21d27e6435c9b057dfb658c4484aae674d1430965160e7",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-balance-chart/1x1-duration-900-frame-899.png",
                "sha256": "291f165ff33eafe01b21d27e6435c9b057dfb658c4484aae674d1430965160e7",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "data",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Balance rolls in above a growing area chart with an interest card; readable, rebrands recolor chart."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 28,
        "compared": 28,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "ae2843ef6c0b6f56e51d44110e347e9d2252c871350fba891874f1952e238dd2",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.075Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-balance-chart/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-balance-chart/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-balance-chart/16x9/detail.mp4",
      "bg": "#f6f2e9",
      "posterFrame": 102,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8500b37f2a20e70053a77470e859ce50c504cc25ea24acdf7fe11a006f78c289",
        "loop": "f3f6d97b2304f973b8f65acdf646ef436c7208dfffe790b139fbba547d4e0ec7",
        "detail": "fe1a01364e431b6233433d08b78000355807259068a97c2913cc99380284442f"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-balance-chart/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-balance-chart/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-balance-chart/9x16/detail.mp4",
      "bg": "#f6f2ea",
      "posterFrame": 102,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0406696c8e68cc9d52e28e0dec473d401aab37e4d0e3850be2ea7b6476aa206f",
        "loop": "2973533554d62311d8824dc8c07dfd8113315066224f7ff94ed6b3e09be302c3",
        "detail": "a2741bce62b19ec5f630b6a4334090ed9168c886860ee0a863e425e3401c4a50"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-balance-chart/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-balance-chart/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-balance-chart/1x1/detail.mp4",
      "bg": "#f6f2e9",
      "posterFrame": 102,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "53c86d6f6177c7ba399127060a4847055411cf6d7f7cd3c6f38b4874e0c006f8",
        "loop": "431810d7e3510e2aa40946a02c0a82cf7f597db8412a2d257eed93f5ae76d3a1",
        "detail": "e73e6bc43eac5b0443e5be8e181122b6bd7153a9177e79360b130e43d69eca9a"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ae2843ef6c0b6f56e51d44110e347e9d2252c871350fba891874f1952e238dd2/index.mjs",
    "sha256": "ae2843ef6c0b6f56e51d44110e347e9d2252c871350fba891874f1952e238dd2",
    "bytes": 271660,
    "externals": [
      "react",
      "react/jsx-runtime",
      "remotion",
      "remotion/no-react",
      "zod"
    ],
    "versions": {
      "kit": "0.1.0",
      "remotion": "4.0.533",
      "react": "19.2.1"
    }
  },
  "gates": {
    "16:9": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true
    }
  },
  "intake": {
    "at": "2026-10-09T07:06:01.158Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
