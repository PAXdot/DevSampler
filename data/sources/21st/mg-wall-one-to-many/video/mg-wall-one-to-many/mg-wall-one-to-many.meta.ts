// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "gallery/motion-gallery",
  "job": "gallery",
  "language": "product-ui",
  "mechanic": [
    "prompt-burst-to-grid"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "gallery",
    "prompt-burst-to-grid",
    "prompt",
    "variants",
    "ai"
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
      "in": 90,
      "out": 0
    },
    "markers": {
      "settled": 90
    },
    "beats": [
      0,
      23,
      45,
      68,
      90
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
      "key": "prompt",
      "type": "text",
      "maxChars": 30,
      "role": "headline"
    },
    {
      "key": "promptStyle",
      "type": "text",
      "maxChars": 32,
      "role": "body"
    },
    {
      "key": "brand",
      "type": "text",
      "maxChars": 26,
      "role": "label"
    },
    {
      "key": "count",
      "type": "text",
      "maxChars": 26,
      "role": "caption"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.display",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "prompt-burst-to-grid",
      "prop": "transform",
      "from": "enter",
      "settledBy": 90,
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
    "ink": "#F4F2EE",
    "accent": "#FF8F5A",
    "secondary": "#FFB27A",
    "paper": "#0E0E11",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "prompt": "A lighthouse at dusk,",
    "promptStyle": "risograph poster, warm grain",
    "brand": "lumen / image studio",
    "count": "16 variations in 3.8s"
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
      "brand": "fonts.display"
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
      "key": "prompt",
      "label": "Prompt",
      "type": "text",
      "max": 30,
      "role": "headline"
    },
    {
      "key": "promptStyle",
      "label": "Prompt style",
      "type": "text",
      "max": 32,
      "role": "body"
    },
    {
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 26,
      "role": "label"
    },
    {
      "key": "count",
      "label": "Count",
      "type": "text",
      "max": 26,
      "role": "caption"
    }
  ],
  "name": "One Prompt Many Results",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-wall-one-to-many",
    "bundleSha256": "7b4dffa92d18f11ce38cf1c2282d507a129f90f2ba253fdc2a0610ede1fa1039",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:55:37.048Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/16x9-paper.png",
        "sha256": "7001f811ea5f6156c8557b0571e8c1957e2a4965d68122ffff4f733bf78ad5fd"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/16x9-night.png",
        "sha256": "b8102ac40affaf230e38e8fb0cc0b7b6555b5dd89ba00b1c9184af9045da7239"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/16x9-color.png",
        "sha256": "e820158e74b77e159b92f7e95c9f258b455111ab0dfdf7ca36db869e6d5ea4d4"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/9x16-paper.png",
        "sha256": "edb27fd6e5d85324ea4b9df55add9a85dac5147f7888c2323c4f18f682cd179c"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/9x16-night.png",
        "sha256": "45d5cc1a22438f5b012c38859fd49a04c43758a2306d16a4baef7ee993481ddf"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/9x16-color.png",
        "sha256": "f359f8d1f01031f0769aac12d3a8660f77f35b94257269dfd125aa280bd75f33"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/1x1-paper.png",
        "sha256": "d1ad65f5ea4ea91f5ff3d108dba863d66b7428a4085f6ec56a5e46e7f0ab6f17"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/1x1-night.png",
        "sha256": "834c9e20905b9b3d994e76446a78247b4b52fd26fa4871c57a68c51005a7ea69"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/1x1-color.png",
        "sha256": "e17b17650f7c7732f31342872e4f13e893b925513b9e9f9f2eb9d97ac32a71d4"
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
          "mg-wall-one-to-many--16x9",
          "mg-wall-one-to-many--9x16",
          "mg-wall-one-to-many--1x1"
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
            "paperNight": 2.019775390625,
            "paperColor": 1.0804578993055556,
            "region": {
              "left": 60,
              "top": 35,
              "width": 1800,
              "height": 990
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 13.372368706597221,
            "paperColor": 7.417046440972222,
            "region": {
              "left": 11,
              "top": 146,
              "width": 1059,
              "height": 1571
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 3.2669813368055554,
            "paperColor": 1.7264811197916667,
            "region": {
              "left": 41,
              "top": 46,
              "width": 997,
              "height": 1006
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
            "occupancy": 1.2142443783068786,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.217935090702948,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2167048532375917,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1334546839569164,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1334546839569164,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1327308942481316,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.216249817256578,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2186726256574878,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2186726256574878,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 36.193033854166664,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 36.186848958333336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/16x9-duration-90-frame-10.png",
                "sha256": "95c7181f137842c64afe88d1305bdfd4e8523414a9c020747562c5634d624e33",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/16x9-duration-90-frame-89.png",
                "sha256": "70267be7567ad2523a9f036287ce6c81861e38975c20642ed119261c7daf882f",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/16x9-duration-90-frame-79.png",
                "sha256": "e204730ea49b5485626ebedc4802de338545ea0bb65817afa34a1f9ccd0db461",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 36.193033854166664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/16x9-duration-900-frame-13.png",
                "sha256": "2d4b150818db8f334b3e70a8ee36e375b26239035eaa2e9e0c1c30c4b2a76c18",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/16x9-duration-900-frame-90.png",
                "sha256": "70267be7567ad2523a9f036287ce6c81861e38975c20642ed119261c7daf882f",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/16x9-duration-900-frame-792.png",
                "sha256": "e204730ea49b5485626ebedc4802de338545ea0bb65817afa34a1f9ccd0db461",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/16x9-duration-900-frame-899.png",
                "sha256": "e204730ea49b5485626ebedc4802de338545ea0bb65817afa34a1f9ccd0db461",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 24.473524305555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/9x16-duration-90-frame-10.png",
                "sha256": "1ac78ebd6f69074d990661d55a7b5b7012b65a1d7caa8bc17041e8723c22c547",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/9x16-duration-90-frame-89.png",
                "sha256": "d65b0fa82f66fe38afeb9339d3f037cb041e7b86252972083b0c4c62069c70d3",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/9x16-duration-90-frame-79.png",
                "sha256": "4036f2d5376958faef9b062b858696c21b8d9cae5b9f802ab0836978e5bddfb8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 24.417100694444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/9x16-duration-900-frame-13.png",
                "sha256": "db9f1e29b78d7296d6eae8bef68e6c076ed2b9a149293936d554a882180aa6cb",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/9x16-duration-900-frame-90.png",
                "sha256": "4036f2d5376958faef9b062b858696c21b8d9cae5b9f802ab0836978e5bddfb8",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/9x16-duration-900-frame-792.png",
                "sha256": "d65b0fa82f66fe38afeb9339d3f037cb041e7b86252972083b0c4c62069c70d3",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/9x16-duration-900-frame-899.png",
                "sha256": "4036f2d5376958faef9b062b858696c21b8d9cae5b9f802ab0836978e5bddfb8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 29.596354166666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/1x1-duration-90-frame-10.png",
                "sha256": "fc60f3ceb0b5fd87f0c3cf863f7f1b9e73c72a37dc551b8e740f64d858588594",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/1x1-duration-90-frame-89.png",
                "sha256": "6ccf8d7437378435e070d82a14befd4f26e29c40208fc6c759b6da68de6d274e",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/1x1-duration-90-frame-79.png",
                "sha256": "6ccf8d7437378435e070d82a14befd4f26e29c40208fc6c759b6da68de6d274e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 29.681966145833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/1x1-duration-900-frame-13.png",
                "sha256": "c27ec9b5cd59345de49971bf0ab714efc4850288b910b8a04f65a97da96d7940",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/1x1-duration-900-frame-90.png",
                "sha256": "6ccf8d7437378435e070d82a14befd4f26e29c40208fc6c759b6da68de6d274e",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/1x1-duration-900-frame-792.png",
                "sha256": "6ccf8d7437378435e070d82a14befd4f26e29c40208fc6c759b6da68de6d274e",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-one-to-many/1x1-duration-900-frame-899.png",
                "sha256": "6ccf8d7437378435e070d82a14befd4f26e29c40208fc6c759b6da68de6d274e",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "gallery",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "One prompt generates a wall of sixteen risograph lighthouse variations; skies are warm, teal and blue, no violet sky."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 14,
        "compared": 14,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "7b4dffa92d18f11ce38cf1c2282d507a129f90f2ba253fdc2a0610ede1fa1039",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-one-to-many/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-one-to-many/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-one-to-many/16x9/detail.mp4",
      "bg": "#0b0b0d",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2b2b92017c538ba79a1368f0268dc187b6b0f2b1a664b52cbf5bd6f91827fe04",
        "loop": "8b5b7db0071a77279b06adb97c353f2134d989f5218df67982f17b6cc9a5a6df",
        "detail": "d02d40b128a5278a75ab68a8fa9a09a02b2c1a9baf802fcf4ea3b1bf6a7da8a1"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-one-to-many/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-one-to-many/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-one-to-many/9x16/detail.mp4",
      "bg": "#0b0b0d",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2b3c7ee0662b873e225327ca4160fcf779fd0b1c629073342870bc6c253e8b40",
        "loop": "bd2dcecda68689d2d597ca366460771ebe393f3c17965b478628ac306500482e",
        "detail": "1b057d69e3abf8511ab84e35bee7f71e15bf2979528d5399d575b2ac35446f8a"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-one-to-many/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-one-to-many/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-one-to-many/1x1/detail.mp4",
      "bg": "#0b0b0d",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "fa81d736a245172f9ee892a68119798cb5ad0c8415a234c3ef8f52bf879f2040",
        "loop": "54dd57d15d4a60ec8bb3549b5730e255ecd7f26c53da8cb2894c051a9dc2b928",
        "detail": "f64154e5d11f6c27bcc6841fa65cffeb67de008f167256721c839abc8dd48d1c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/7b4dffa92d18f11ce38cf1c2282d507a129f90f2ba253fdc2a0610ede1fa1039/index.mjs",
    "sha256": "7b4dffa92d18f11ce38cf1c2282d507a129f90f2ba253fdc2a0610ede1fa1039",
    "bytes": 179016,
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
    "at": "2026-10-09T04:15:16.551Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
