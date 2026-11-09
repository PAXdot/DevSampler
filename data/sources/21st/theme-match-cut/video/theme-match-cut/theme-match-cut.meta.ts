// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "code/editor",
  "tags": [
    "code",
    "editor",
    "beat",
    "theme",
    "rhythm",
    "developer",
    "promo"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 176,
      "min": 44,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 150,
      "out": 0
    },
    "markers": {
      "settled": 150
    },
    "beats": [
      0,
      22,
      44,
      66,
      88,
      110,
      132,
      154
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
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "code",
      "type": "text",
      "maxChars": 700,
      "lines": 24,
      "role": "code"
    }
  ],
  "brand": {
    "surfaceColor": "colors.background",
    "textColor": "colors.text",
    "secondaryColor": "colors.secondary",
    "monoFontFamily": "fonts.mono",
    "bodyFontFamily": "fonts.body",
    "accent": "colors.primary",
    "background": "colors.background"
  },
  "motionBeats": [
    {
      "target": "skin",
      "prop": "cut",
      "settledBy": 0,
      "easing": "linear"
    },
    {
      "target": "code",
      "prop": "type",
      "settledBy": 150,
      "easing": "linear"
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
      176
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study V06, twitter-remotion-research)"
  },
  "job": "code",
  "language": "pixel-terminal",
  "mechanic": [
    "type"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "surfaceColor": "#0E0E11",
    "textColor": "#E6E6E9",
    "secondaryColor": "#6FD6E6",
    "monoFontFamily": "Geist Mono",
    "bodyFontFamily": "Geist",
    "title": "app/page.tsx",
    "code": "import { Video } from \"@acme/video\";\n\nexport default function Page() {\n  return (\n    <Video\n      template=\"launch\"\n      accent=\"#3D63FF\"\n      duration={12}\n    />\n  );\n}",
    "language": "tsx",
    "skins": [
      "night",
      "paper",
      "lagoon",
      "graphite",
      "peach",
      "brand"
    ],
    "beatFrames": 22,
    "cps": 50,
    "accent": "#3D63FF",
    "background": "transparent"
  },
  "fields": [
    {
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "textColor",
      "label": "Text color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "secondaryColor",
      "label": "Secondary color",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 40,
      "role": "label"
    },
    {
      "key": "code",
      "label": "Code",
      "type": "text",
      "max": 700,
      "role": "code"
    },
    {
      "key": "language",
      "label": "Language",
      "type": "select",
      "options": [
        "tsx",
        "ts",
        "js",
        "css",
        "json",
        "bash",
        "python",
        "plain"
      ]
    },
    {
      "key": "skins",
      "label": "Skins",
      "type": "list",
      "max": 8
    },
    {
      "key": "beatFrames",
      "label": "Beat frames",
      "type": "number",
      "step": 1,
      "min": 8,
      "max": 90
    },
    {
      "key": "cps",
      "label": "Cps",
      "type": "number",
      "min": 10,
      "max": 240
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    }
  ],
  "name": "Theme Match Cut",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "theme-match-cut",
    "bundleSha256": "4574c2799600f4e12b537a96910151896b7a20694dd65b6068f94a097da59f45",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:53:36.828Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/16x9-paper.png",
        "sha256": "f520394456b2cda49b557c6af4775efca5739d230f479dd571c9aa5b8dd6d514"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/16x9-night.png",
        "sha256": "e2e0f165f1aa652f80c6c98bbf468fd76a1520ea4c4eb93d7f3d05cfbd1891fb"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/16x9-color.png",
        "sha256": "1e0d13aac912e4d08887ed02ee179c847234bdbf1e93229815c15f0255e6e77c"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/9x16-paper.png",
        "sha256": "18553922e259b3472cd90463e869b28b6675fed98cb6d0248c17038058420512"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/9x16-night.png",
        "sha256": "db63f5153a19f31160830bfd6e65af9e37b62362a749fcd999613806eb442cf4"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/9x16-color.png",
        "sha256": "7975f885dc56d9800972214ff442b8fc291f0e787c01c6d8ecd56e1a820e305c"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/1x1-paper.png",
        "sha256": "dc9608959e4d9dd6171b909298182f857904921d3852f33c366f84a6f65b5211"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/1x1-night.png",
        "sha256": "f4d820074f7ba0a30c2e606b7bfc696fa7a34e7879236580ee7be1c97d35fa10"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/1x1-color.png",
        "sha256": "2026cce55263678e0cc275cddbfecb0b0a8abe9b52786643425741e9f35e8768"
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
          "theme-match-cut--16x9",
          "theme-match-cut--9x16",
          "theme-match-cut--1x1"
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
            "paperNight": 160.98654513888889,
            "paperColor": 12.731146918402779,
            "region": {
              "left": 305,
              "top": 273,
              "width": 1310,
              "height": 552
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 154.382568359375,
            "paperColor": 13.924235026041666,
            "region": {
              "left": 82,
              "top": 210,
              "width": 916,
              "height": 1539
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 156.20543077256946,
            "paperColor": 12.653971354166666,
            "region": {
              "left": 166,
              "top": 272,
              "width": 748,
              "height": 554
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
            "occupancy": 0.49422739774922325,
            "bad": [],
            "measured": 46
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.49422739774922325,
            "bad": [],
            "measured": 46
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.49422739774922325,
            "bad": [],
            "measured": 46
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.963497378117914,
            "bad": [],
            "measured": 52
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.963497378117914,
            "bad": [],
            "measured": 52
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.963497378117914,
            "bad": [],
            "measured": 52
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5035067296237197,
            "bad": [],
            "measured": 46
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5035067296237197,
            "bad": [],
            "measured": 46
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5035067296237197,
            "bad": [],
            "measured": 46
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 0.7698567708333334,
        "frames": [
          21,
          150,
          175
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 44,
            "averageChannelDifference": 72.84743923611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/16x9-duration-44-frame-5.png",
                "sha256": "97a50b1e1ae67de27fdb00ea0ae2ee412ca30b914890131e01d91dc0ce0040c0",
                "alphaMass": 158814
              },
              {
                "frame": 43,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/16x9-duration-44-frame-43.png",
                "sha256": "18cda8a290c954255a5de3c15d232e6cb53346028ff24b2d6c6afcbdae5207f9",
                "alphaMass": 194844
              },
              {
                "frame": 38,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/16x9-duration-44-frame-38.png",
                "sha256": "336a301d0118742b86abebdcb29067756ddb5a921c74125dee0b79644936507f",
                "alphaMass": 194844
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 65.92979600694444,
            "retainedAlpha": 0.9788597954303399,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/16x9-duration-900-frame-22.png",
                "sha256": "81122d2d97c37df0786c9c0558f153cff5f82523d45cbc6248dd543e26586162",
                "alphaMass": 199052
              },
              {
                "frame": 150,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/16x9-duration-900-frame-150.png",
                "sha256": "b06964a0e806fbfffac960e85a1c227108957d13fb599a682d127c15972d6ed3",
                "alphaMass": 194844
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/16x9-duration-900-frame-792.png",
                "sha256": "aa18c631d0936ab017c859293ca75c093e7f98bd2c43b8ebd1ff0ea0bc1a12c2",
                "alphaMass": 199052
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/16x9-duration-900-frame-899.png",
                "sha256": "baeb75c805b7cf344bc56dc1c70f83b3c7e222819f4efc5d14ab06b6bbf65318",
                "alphaMass": 194844
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 44,
            "averageChannelDifference": 127.89203559027777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/9x16-duration-44-frame-5.png",
                "sha256": "f7a3bcf8a4a767533e895b5307aaa2f1db69e3d547677c3903ae35cc3e53844b",
                "alphaMass": 303237
              },
              {
                "frame": 43,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/9x16-duration-44-frame-43.png",
                "sha256": "e2378c647dd5e6a014e122787deb99abee2363b4d0c4280dfe5f5a596f4e1941",
                "alphaMass": 372862
              },
              {
                "frame": 38,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/9x16-duration-44-frame-38.png",
                "sha256": "34fbe3492b18d8a793af336a721f9e992ca2e129d993738f4548f7b76cf39bbe",
                "alphaMass": 372862
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 121.04871961805556,
            "retainedAlpha": 0.9750167357014351,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/9x16-duration-900-frame-22.png",
                "sha256": "cd182b6e263fd750e27bd440ef46adb29fd5d084f2e8fbd074420d784731f3e7",
                "alphaMass": 382416
              },
              {
                "frame": 150,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/9x16-duration-900-frame-150.png",
                "sha256": "844600e471ee1d9c897c048482721dddef945e7a31ad647f6045fc454725cd52",
                "alphaMass": 372862
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/9x16-duration-900-frame-792.png",
                "sha256": "def3afb57ddea6df659ee6e116779c4266b0c621d9a2f8bbd977d7f9a4291ca8",
                "alphaMass": 382416
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/9x16-duration-900-frame-899.png",
                "sha256": "b02553c89d410c4b294ac88bf1d42883c879bc13e9cd5f06fe8e9eede5a1b55b",
                "alphaMass": 372862
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 44,
            "averageChannelDifference": 72.62782118055556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/1x1-duration-44-frame-5.png",
                "sha256": "10fc33f2ba5cfe9f5c11495d74b97147a3d3bb73fb97517f78ca2994589034f5",
                "alphaMass": 158923
              },
              {
                "frame": 43,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/1x1-duration-44-frame-43.png",
                "sha256": "6e363a9857e143ad2b3d86f83c5e5ebccad994426253988af66a21fbad28f39b",
                "alphaMass": 195027
              },
              {
                "frame": 38,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/1x1-duration-44-frame-38.png",
                "sha256": "96c279d3912f19d2088b8ba0ad44c9eeb29afbba6fd3d73b81a7be3cc24a8fcf",
                "alphaMass": 195027
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 68.12369791666667,
            "retainedAlpha": 0.9785796001926782,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/1x1-duration-900-frame-22.png",
                "sha256": "e4aebe7a6a7e42c950865378d84e602f38ed27b7d30526174021331bd208c406",
                "alphaMass": 199296
              },
              {
                "frame": 150,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/1x1-duration-900-frame-150.png",
                "sha256": "808ef2f54967af7c366c4f333d73800b88993386f952ba2834e0ec7e8939f206",
                "alphaMass": 195027
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/1x1-duration-900-frame-792.png",
                "sha256": "247b4c74214e3fb9ef7c06a5070e04ac9cd9342d1e62c440648192a916a7afd3",
                "alphaMass": 199296
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/theme-match-cut/1x1-duration-900-frame-899.png",
                "sha256": "01b4fe5e0bfdd0f04e4f7da17190a2ace04098e3decf1f21676c211f297922e0",
                "alphaMass": 195027
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "code",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A code editor match-cuts between themes while the Video props stay in place; neutral backgrounds, no indigo."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 13,
        "compared": 13,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "4574c2799600f4e12b537a96910151896b7a20694dd65b6068f94a097da59f45",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/theme-match-cut/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/theme-match-cut/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/theme-match-cut/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 150,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 176,
      "sha256": {
        "poster": "13383e71dd30648987b9bf4752a8f9ec65274f8380a8b3d127f43555a41be7db",
        "loop": "352ff5b16dbecee774348fd6acdeadb50a187fa563e4a6546f0d74f4ef919097",
        "detail": "8d443d7862a0034be6bd754a2a5e167563751b7e717592f1414ae9dba2f1f6db"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/theme-match-cut/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/theme-match-cut/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/theme-match-cut/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 150,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 176,
      "sha256": {
        "poster": "2f1a310ebf83ebac6acdaee0f553a7820218f875bb64ba345ce95283a73a634b",
        "loop": "28df3c885705f9a472be1e34c06fba3b1ca8b5a0ba673a3e534d23ff92e6d3ee",
        "detail": "434352043f34d0482cd32e9fc7af0627a88973f5879b3276dbad41eb763f383c"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/theme-match-cut/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/theme-match-cut/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/theme-match-cut/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 150,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 176,
      "sha256": {
        "poster": "9ac077d1678826e3f00503d64e37826b0f8fc8de645f3a25ef6d2000c294f4d0",
        "loop": "c72ada26a1d725683532c59ca19e7033fb36a6d702ff4e0bd8f5d09cdbfde288",
        "detail": "bbfd70095f4b7b413e22a61025132b0a9bd902c01400877ca16e234d67109fe4"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/4574c2799600f4e12b537a96910151896b7a20694dd65b6068f94a097da59f45/index.mjs",
    "sha256": "4574c2799600f4e12b537a96910151896b7a20694dd65b6068f94a097da59f45",
    "bytes": 171726,
    "externals": [
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
    "at": "2026-10-09T04:19:01.436Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
