// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "gallery/motion-gallery",
  "job": "gallery",
  "language": "product-ui",
  "mechanic": [
    "card-stack-fan-out"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "gallery",
    "card-stack-fan-out",
    "fan",
    "windows",
    "workspace"
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
      "key": "title",
      "type": "text",
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "accentLine",
      "type": "text",
      "maxChars": 24,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 64,
      "role": "body"
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
      "target": "card-stack-fan-out",
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
    "ink": "#F5EDE6",
    "accent": "#EE7434",
    "secondary": "#FFC996",
    "paper": "#16171A",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "title": "Five views.",
    "accentLine": "One workspace.",
    "sub": "Docs, boards, dashboards, chat and canvas in Lumen 2.0"
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
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "accentLine",
      "label": "Accent line",
      "type": "text",
      "max": 24,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 64,
      "role": "body"
    }
  ],
  "name": "App Window Fan",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-wall-fan",
    "bundleSha256": "87da5dd10c172ca8e9733f7af3b592d78e4a22bc89a1987d3fc9f60031adf40b",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:44:42.699Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/16x9-paper.png",
        "sha256": "fc2ea984dc6aa6beac6dc3f0ff28467b1fc66d490ab5ca442af05f3b3ef2866f"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/16x9-night.png",
        "sha256": "9bc6e4441de9b0c12b7c3d4f049bbf46ae14694ce4a6c80ad1cf897eac6c96e0"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/16x9-color.png",
        "sha256": "161f67a4891983adc7f3ed6ccd37c6b1413222ce801e638a2e1791e92b692719"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/9x16-paper.png",
        "sha256": "791eaf3e6e59a3bc9e88dd7c009062b8ebe5ebd7024e45f4fbded439a6be33f7"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/9x16-night.png",
        "sha256": "48b672b8056a4b66e1ef446ee9def4c3a671b438993d559b47d05faeb7291eb8"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/9x16-color.png",
        "sha256": "3b9edb23d2ad350db8212a7c9454b22c187f6c29ad3d54169b1288f2619a4e9b"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/1x1-paper.png",
        "sha256": "6b29dd4aac9bac69a4eccb04e1bc85edfcc53eb133992034cde94266c67abbcb"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/1x1-night.png",
        "sha256": "ad822844b54ade1a372b15229a7a2db5763cac46f68cb777a278973fe7c56757"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/1x1-color.png",
        "sha256": "84edb3b109cf0c3430ded4dbd26386b1fa2e04481af389b19e88d1adc80ef5bd"
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
          "mg-wall-fan--16x9",
          "mg-wall-fan--9x16",
          "mg-wall-fan--1x1"
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
            "paperNight": 6.923421223958333,
            "paperColor": 4.309380425347222,
            "region": {
              "left": 89,
              "top": 76,
              "width": 1741,
              "height": 903
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 19.44656032986111,
            "paperColor": 11.137559678819445,
            "region": {
              "left": 22,
              "top": 163,
              "width": 1036,
              "height": 1588
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 12.090087890625,
            "paperColor": 7.585069444444445,
            "region": {
              "left": 59,
              "top": 79,
              "width": 962,
              "height": 924
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
            "occupancy": 1.0744914526381542,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0744914526381542,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0709217135928448,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1208748224083875,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.122999032431903,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1237071024397416,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.080042785289699,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.080042785289699,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.07536727539667,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 33.238606770833336,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 33.6806640625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/16x9-duration-90-frame-10.png",
                "sha256": "cfbd6952b6babf586f23d5e287b5ff8991a9315808a7c0b0e69cae47a6c478d1",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/16x9-duration-90-frame-89.png",
                "sha256": "3cf83ed83e632712b1a2dc3cdb18728fd9c30e938f40612b7f06b64a2d1a17af",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/16x9-duration-90-frame-79.png",
                "sha256": "3cf83ed83e632712b1a2dc3cdb18728fd9c30e938f40612b7f06b64a2d1a17af",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 33.238606770833336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/16x9-duration-900-frame-13.png",
                "sha256": "edfc626067913015c7cf74c2091d814749afe170fba2f15520853d131ecb47c7",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/16x9-duration-900-frame-90.png",
                "sha256": "3cf83ed83e632712b1a2dc3cdb18728fd9c30e938f40612b7f06b64a2d1a17af",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/16x9-duration-900-frame-792.png",
                "sha256": "3cf83ed83e632712b1a2dc3cdb18728fd9c30e938f40612b7f06b64a2d1a17af",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/16x9-duration-900-frame-899.png",
                "sha256": "3cf83ed83e632712b1a2dc3cdb18728fd9c30e938f40612b7f06b64a2d1a17af",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 15.149739583333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/9x16-duration-90-frame-10.png",
                "sha256": "c8d8d9e6c77f7ae7aa24089d66310a26be61947071335a83685d421728e018b4",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/9x16-duration-90-frame-89.png",
                "sha256": "871672b9fe20212154007aa9d8035a04955d61433b5d3951b77a8b1ded8eefde",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/9x16-duration-90-frame-79.png",
                "sha256": "871672b9fe20212154007aa9d8035a04955d61433b5d3951b77a8b1ded8eefde",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 14.7939453125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/9x16-duration-900-frame-13.png",
                "sha256": "80ab86bca7cdbf43483265b23e2c3ed3e1db6face8f16d383e1a659dba624f8a",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/9x16-duration-900-frame-90.png",
                "sha256": "871672b9fe20212154007aa9d8035a04955d61433b5d3951b77a8b1ded8eefde",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/9x16-duration-900-frame-792.png",
                "sha256": "871672b9fe20212154007aa9d8035a04955d61433b5d3951b77a8b1ded8eefde",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/9x16-duration-900-frame-899.png",
                "sha256": "871672b9fe20212154007aa9d8035a04955d61433b5d3951b77a8b1ded8eefde",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 23.480143229166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/1x1-duration-90-frame-10.png",
                "sha256": "a08e95909e61ceac06279659fb3611bb589a09a7c1b00253698a0ee6cf2f0e58",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/1x1-duration-90-frame-89.png",
                "sha256": "fe28416feae7135748580884465ed4dcf19d9287684ff26d54f4d9a368c46a2a",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/1x1-duration-90-frame-79.png",
                "sha256": "fe28416feae7135748580884465ed4dcf19d9287684ff26d54f4d9a368c46a2a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 23.16362847222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/1x1-duration-900-frame-13.png",
                "sha256": "991df81f54a7ec6ce014915594219a56252f75c0a4f230b179409304e4c7f07a",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/1x1-duration-900-frame-90.png",
                "sha256": "fe28416feae7135748580884465ed4dcf19d9287684ff26d54f4d9a368c46a2a",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/1x1-duration-900-frame-792.png",
                "sha256": "fe28416feae7135748580884465ed4dcf19d9287684ff26d54f4d9a368c46a2a",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-wall-fan/1x1-duration-900-frame-899.png",
                "sha256": "fe28416feae7135748580884465ed4dcf19d9287684ff26d54f4d9a368c46a2a",
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
        "note": "Five app windows fan out over a warm neutral dark backdrop under Five views, One workspace."
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
      "bundleSha256": "87da5dd10c172ca8e9733f7af3b592d78e4a22bc89a1987d3fc9f60031adf40b",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-fan/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-fan/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-fan/16x9/detail.mp4",
      "bg": "#131416",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "287e1508d8b86c7263ecaee6581b608c3b2390d19a5f4cc800e55aa4c4002cfc",
        "loop": "35f8a5c1f17d92edee536bf2de3abb5bcaae1cb76e9729f93932c45ce1116661",
        "detail": "fcc014c89a0e322c1c3de00e1019ce656198bf48eb712f3b5ae963e4bf32eb3c"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-fan/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-fan/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-fan/9x16/detail.mp4",
      "bg": "#131416",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2d14d4fe01b50bf1effb5bb1525176d9f8546708b0247781c95584473775160b",
        "loop": "e5907ce8597222c8bbb983d29ff6e192f0919d111ca2f0d5f6333b37abec8341",
        "detail": "3e34d544f7b08881179b70710056ba2edcc56d7fa3f5df8a185c46d1911716d2"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-fan/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-fan/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-fan/1x1/detail.mp4",
      "bg": "#131416",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "01d2eff52aaa107062d3d62994362c3b348b8246536d5b68a54d7fd3f75b64a9",
        "loop": "885b09d3bc6a8983db230293ae84a1a3783f457c9267ef9623c58f03f1a13690",
        "detail": "c382f50ebff974c6c5247ec0572cc78f7dc2e6d5d8f7e3c70d4cbed6b3f82dd5"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/87da5dd10c172ca8e9733f7af3b592d78e4a22bc89a1987d3fc9f60031adf40b/index.mjs",
    "sha256": "87da5dd10c172ca8e9733f7af3b592d78e4a22bc89a1987d3fc9f60031adf40b",
    "bytes": 180844,
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
    "at": "2026-10-09T04:13:10.147Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
