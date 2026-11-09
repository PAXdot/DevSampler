// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/code",
  "job": "code",
  "language": "product-ui",
  "mechanic": [
    "type"
  ],
  "looks": [
    {
      "id": "focus",
      "name": "Mechanism in focus",
      "props": {
        "showHeading": false
      }
    },
    {
      "id": "context",
      "name": "Mechanism with context",
      "props": {
        "showHeading": true
      }
    }
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "launch",
    "canonical",
    "code-diff-review",
    "product-proof",
    "code-diff-review",
    "interface"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 150,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 132
    },
    "beats": [
      18,
      48,
      84,
      116
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
      "showBackground"
    ]
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 72,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "type": "text",
      "maxChars": 120,
      "role": "body"
    },
    {
      "key": "items",
      "type": "list",
      "role": "items"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "foreground": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "bodyFontFamily": "fonts.body",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "content",
      "prop": "transform",
      "from": "composed",
      "settledBy": 132,
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
    "sourceUrl": "docs/research/launch-videos-2026-10-06/library-expansion.md"
  },
  "defaults": {
    "title": "Review the change in context",
    "subtitle": "A focused diff makes the edit and its approval visible.",
    "items": [
      "mode: \"manual\",",
      "mode: \"assisted\",",
      "Review the change",
      "Merged"
    ],
    "accent": "#3D63FF",
    "secondary": "#B2B4B8",
    "foreground": "#19191D",
    "background": "#F8F8FA",
    "fontFamily": "Inter",
    "bodyFontFamily": "Inter",
    "monoFontFamily": "Geist Mono",
    "showHeading": false,
    "showBackground": false
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 72,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "label": "Subtitle",
      "type": "text",
      "max": 120,
      "role": "body"
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "items",
      "label": "Items",
      "type": "list",
      "max": 6,
      "role": "items"
    },
    {
      "key": "showHeading",
      "label": "Show heading",
      "type": "boolean"
    },
    {
      "key": "showBackground",
      "label": "Show background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "foreground",
      "label": "Foreground",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    }
  ],
  "name": "Review line and merge proof",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-code-diff-review",
    "bundleSha256": "36de39c56f3b174219a5e26060d754e1c0915be2dba6b69efc2c2b696234efc5",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:38:06.698Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/16x9-paper.png",
        "sha256": "9716901033a2fa44ee79b6b98ef19e981e49dbb70aca26bcbd12b19c5415e322"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/16x9-night.png",
        "sha256": "16d592c6919efd4b16c86f33a96baaa0a2384bee85ed106abd8195d07c012769"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/16x9-color.png",
        "sha256": "cad9cb75d4a1c53b83d37365837408fd360924f0a012937b9cbc2ab1a2398c86"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/9x16-paper.png",
        "sha256": "463361fab49a52bb9773389f6226ddfc4c65fbd46b7f96e7b6b51fc6ff74e5f1"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/9x16-night.png",
        "sha256": "ec0d199f8931ff8291ee4c51eafccf5a398911de79655cf3426079cea61437b9"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/9x16-color.png",
        "sha256": "d2a3f281b510995dd328e30767e00d5d4aa6dcf6e324d0ac1b41ef660af1b75f"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/1x1-paper.png",
        "sha256": "2580c36feedeeaadc2dcb7b4439671a95cda402435ddfa41eece1a1a437f6ce4"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/1x1-night.png",
        "sha256": "12a624b5039bfda28e1e5004d34c5af143fd24d4a5e9ed1e1c7aeea85cdf4149"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/1x1-color.png",
        "sha256": "056b914a74303277695fb17ade71cf56fe9d01300dfc5fe046e56cf21bea7638"
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
          "lp-code-diff-review--16x9",
          "lp-code-diff-review--9x16",
          "lp-code-diff-review--1x1"
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
            "paperNight": 146.77178276909723,
            "paperColor": 13.490966796875,
            "region": {
              "left": 145,
              "top": 108,
              "width": 1630,
              "height": 833
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 142.44642469618054,
            "paperColor": 14.83596462673611,
            "region": {
              "left": 77,
              "top": 192,
              "width": 926,
              "height": 1465
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 144.026123046875,
            "paperColor": 13.98385959201389,
            "region": {
              "left": 77,
              "top": 108,
              "width": 926,
              "height": 833
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
            "occupancy": 0.9280022933813445,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9280022933813445,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9280022933813445,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9271821350711068,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9271821350711068,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9271821350711068,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9372380353604635,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9372380353604635,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9372380353604635,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.0712890625,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 5.0712890625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/16x9-duration-150-frame-18.png",
                "sha256": "341ffb9ded023207db0ee18def7f70bf7db50562a5c51a8d4f67eb81fc745679",
                "alphaMass": 371226
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/16x9-duration-150-frame-132.png",
                "sha256": "b0ae72c7995a5bac9644c4cfadae4400d3f0f28d9d4efb79a3b5655454dc517c",
                "alphaMass": 371226
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/16x9-duration-150-frame-149.png",
                "sha256": "b0ae72c7995a5bac9644c4cfadae4400d3f0f28d9d4efb79a3b5655454dc517c",
                "alphaMass": 371226
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 5.0712890625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/16x9-duration-900-frame-19.png",
                "sha256": "341ffb9ded023207db0ee18def7f70bf7db50562a5c51a8d4f67eb81fc745679",
                "alphaMass": 371226
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/16x9-duration-900-frame-132.png",
                "sha256": "b0ae72c7995a5bac9644c4cfadae4400d3f0f28d9d4efb79a3b5655454dc517c",
                "alphaMass": 371226
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/16x9-duration-900-frame-792.png",
                "sha256": "b0ae72c7995a5bac9644c4cfadae4400d3f0f28d9d4efb79a3b5655454dc517c",
                "alphaMass": 371226
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/16x9-duration-900-frame-899.png",
                "sha256": "b0ae72c7995a5bac9644c4cfadae4400d3f0f28d9d4efb79a3b5655454dc517c",
                "alphaMass": 371226
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 5.328776041666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/9x16-duration-150-frame-18.png",
                "sha256": "9173447f0fabc267b8ad7d7ea60db05039604f586c62812f4d2d563ea5831cbd",
                "alphaMass": 372250
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/9x16-duration-150-frame-132.png",
                "sha256": "76158b2c06c0041017c83546caedc29349c5dbdb96701e09df65d8c395626b09",
                "alphaMass": 372250
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/9x16-duration-150-frame-149.png",
                "sha256": "76158b2c06c0041017c83546caedc29349c5dbdb96701e09df65d8c395626b09",
                "alphaMass": 372250
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 5.328776041666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/9x16-duration-900-frame-19.png",
                "sha256": "9173447f0fabc267b8ad7d7ea60db05039604f586c62812f4d2d563ea5831cbd",
                "alphaMass": 372250
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/9x16-duration-900-frame-132.png",
                "sha256": "76158b2c06c0041017c83546caedc29349c5dbdb96701e09df65d8c395626b09",
                "alphaMass": 372250
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/9x16-duration-900-frame-792.png",
                "sha256": "76158b2c06c0041017c83546caedc29349c5dbdb96701e09df65d8c395626b09",
                "alphaMass": 372250
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/9x16-duration-900-frame-899.png",
                "sha256": "76158b2c06c0041017c83546caedc29349c5dbdb96701e09df65d8c395626b09",
                "alphaMass": 372250
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 5.256401909722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/1x1-duration-150-frame-18.png",
                "sha256": "0fb7e6e81789483efc36d3e8435ee63de263b2499aae3c1bcf9546b80e63ffd7",
                "alphaMass": 371905
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/1x1-duration-150-frame-132.png",
                "sha256": "fd4e0dfd636d3cacf27826f2d572dc2b5727bdd2d21936bc6727fc0fccd4fed0",
                "alphaMass": 371905
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/1x1-duration-150-frame-149.png",
                "sha256": "fd4e0dfd636d3cacf27826f2d572dc2b5727bdd2d21936bc6727fc0fccd4fed0",
                "alphaMass": 371905
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 5.256401909722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/1x1-duration-900-frame-19.png",
                "sha256": "0fb7e6e81789483efc36d3e8435ee63de263b2499aae3c1bcf9546b80e63ffd7",
                "alphaMass": 371905
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/1x1-duration-900-frame-132.png",
                "sha256": "fd4e0dfd636d3cacf27826f2d572dc2b5727bdd2d21936bc6727fc0fccd4fed0",
                "alphaMass": 371905
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/1x1-duration-900-frame-792.png",
                "sha256": "fd4e0dfd636d3cacf27826f2d572dc2b5727bdd2d21936bc6727fc0fccd4fed0",
                "alphaMass": 371905
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-code-diff-review/1x1-duration-900-frame-899.png",
                "sha256": "fd4e0dfd636d3cacf27826f2d572dc2b5727bdd2d21936bc6727fc0fccd4fed0",
                "alphaMass": 371905
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
        "note": "A code review strikes the old line, adds the new one and stamps Merged in brand blue."
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
      "bundleSha256": "36de39c56f3b174219a5e26060d754e1c0915be2dba6b69efc2c2b696234efc5",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-code-diff-review/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-code-diff-review/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-code-diff-review/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ea0cc7dfa9b626ce4234ef1247b62fa0465722d1d4b46e38124ada35de490c38",
        "loop": "0365f298e26ce1f5537035342fb31ab846a42317898bd02f9ada00d6891217ce",
        "detail": "8ce77be91d72d54ce6bc0f682a3cf32d4424df64a1871108392c6ad36c738e78"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-code-diff-review/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-code-diff-review/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-code-diff-review/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0f52f7a9b299e7dce58f940a133cd84b1adfaa330216b123c31b7ec24de94314",
        "loop": "fd596e88e1e68a2e901b2c728a5ec3c22c60ecf94d16597f61bcd436fdb592a9",
        "detail": "60c1da54a5187c0451fab3acd6a468390447b47449233072a582a1ec9ab65236"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-code-diff-review/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-code-diff-review/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-code-diff-review/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f87d04890b09471521e442760459a7e7f4ae6bf0e40dd07816156700c0b3e07f",
        "loop": "3c84b0345d5d2717fcc8931f5846a83c9822a3a49cf1ed7e3d23c85aa198051e",
        "detail": "f02e6aec40560528e9c8430173f724eb24cba61e55e61ce64b73bc1f6e981552"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/36de39c56f3b174219a5e26060d754e1c0915be2dba6b69efc2c2b696234efc5/index.mjs",
    "sha256": "36de39c56f3b174219a5e26060d754e1c0915be2dba6b69efc2c2b696234efc5",
    "bytes": 298404,
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
    "at": "2026-10-09T03:22:01.404Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
