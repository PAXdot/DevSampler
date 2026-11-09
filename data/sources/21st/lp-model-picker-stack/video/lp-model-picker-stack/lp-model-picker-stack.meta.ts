// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/code",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "focus"
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
    "model-picker-stack",
    "product-proof",
    "model-picker-stack",
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
    "title": "Choose the mode for the task",
    "subtitle": "An anchored model menu opens, selects, and closes.",
    "items": [
      "Balanced",
      "Precise",
      "Fast",
      "Selected mode"
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
  "name": "Model menu selects working mode",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-model-picker-stack",
    "bundleSha256": "4ba288afcfc9a510b72619471acffc73184c25ec1d6e957e10c25e86d02c6ea7",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:40:22.481Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/16x9-paper.png",
        "sha256": "81dc10b14a909feba2bd317a6f78d5f7aca73da51827a84ade95938b1194fef1"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/16x9-night.png",
        "sha256": "7e5349b3f1e50ea6e84d57ab3cb13ac716fff07acc6b4b5eefd4c9db5774e38e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/16x9-color.png",
        "sha256": "6394576746dbc0fd799751c0f0f000e7ad4bc37fb3556b4591bb4701be20b91b"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/9x16-paper.png",
        "sha256": "2f00f2a387cb32d9c2d02a8156324bb4191192103b9f6ae83a115c88dac5e9c7"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/9x16-night.png",
        "sha256": "dfdcfd85ef3fe478d5c01f2e30a1d94872cf2dbea81ef140dcd853822d64391b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/9x16-color.png",
        "sha256": "9211901e0d41c0423aa906e8c868b131ba67a9ecfbbab67185c36549c359f066"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/1x1-paper.png",
        "sha256": "6a64443bd482e43422e71293cab52d62440bcf8ca5d21b1fb6176edb0630df18"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/1x1-night.png",
        "sha256": "5f9612b77c3038eaa14cba8a8a576e595cc2a7257e2addf5c9a8a1ea6e69a99d"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/1x1-color.png",
        "sha256": "1fd18c2f05500625c00913e64de52e000b8ac28be0d99b19f05e4254a183f5ee"
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
          "lp-model-picker-stack--16x9",
          "lp-model-picker-stack--9x16",
          "lp-model-picker-stack--1x1"
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
            "paperNight": 156.15245225694446,
            "paperColor": 13.762830946180555,
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
            "paperNight": 154.72878689236111,
            "paperColor": 14.085205078125,
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
            "paperNight": 154.53415256076389,
            "paperColor": 13.837483723958334,
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
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9280022933813445,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9280022933813445,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9271821350711068,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9271821350711068,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9271821350711068,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9372380353604635,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9372380353604635,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9372380353604635,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.7233072916666667,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 1.7233072916666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/16x9-duration-150-frame-18.png",
                "sha256": "9f70ea9e0d2220e5f632fc2a81152e96ee22cab7d5a1392bd530e8a51feabbb2",
                "alphaMass": 371226
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/16x9-duration-150-frame-132.png",
                "sha256": "ff395559cfed18412d767c447ec4abc1784a8c4c9109e68337cfb9ef36a5e670",
                "alphaMass": 371226
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/16x9-duration-150-frame-149.png",
                "sha256": "ff395559cfed18412d767c447ec4abc1784a8c4c9109e68337cfb9ef36a5e670",
                "alphaMass": 371226
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 1.7233072916666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/16x9-duration-900-frame-19.png",
                "sha256": "9f70ea9e0d2220e5f632fc2a81152e96ee22cab7d5a1392bd530e8a51feabbb2",
                "alphaMass": 371226
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/16x9-duration-900-frame-132.png",
                "sha256": "ff395559cfed18412d767c447ec4abc1784a8c4c9109e68337cfb9ef36a5e670",
                "alphaMass": 371226
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/16x9-duration-900-frame-792.png",
                "sha256": "ff395559cfed18412d767c447ec4abc1784a8c4c9109e68337cfb9ef36a5e670",
                "alphaMass": 371226
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/16x9-duration-900-frame-899.png",
                "sha256": "ff395559cfed18412d767c447ec4abc1784a8c4c9109e68337cfb9ef36a5e670",
                "alphaMass": 371226
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 2.1643880208333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/9x16-duration-150-frame-18.png",
                "sha256": "9000afd94deb0506424c7a066db5a78073a8b5c17bf624c8077084dd7cf7ec4c",
                "alphaMass": 372250
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/9x16-duration-150-frame-132.png",
                "sha256": "d9e4d841b5a4402a9078cfe4a340159ada9a3d7c58290a47202b97091a4a6f15",
                "alphaMass": 372250
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/9x16-duration-150-frame-149.png",
                "sha256": "d9e4d841b5a4402a9078cfe4a340159ada9a3d7c58290a47202b97091a4a6f15",
                "alphaMass": 372250
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 2.1643880208333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/9x16-duration-900-frame-19.png",
                "sha256": "9000afd94deb0506424c7a066db5a78073a8b5c17bf624c8077084dd7cf7ec4c",
                "alphaMass": 372250
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/9x16-duration-900-frame-132.png",
                "sha256": "d9e4d841b5a4402a9078cfe4a340159ada9a3d7c58290a47202b97091a4a6f15",
                "alphaMass": 372250
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/9x16-duration-900-frame-792.png",
                "sha256": "d9e4d841b5a4402a9078cfe4a340159ada9a3d7c58290a47202b97091a4a6f15",
                "alphaMass": 372250
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/9x16-duration-900-frame-899.png",
                "sha256": "d9e4d841b5a4402a9078cfe4a340159ada9a3d7c58290a47202b97091a4a6f15",
                "alphaMass": 372250
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 1.6677517361111112,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/1x1-duration-150-frame-18.png",
                "sha256": "c87fd242fcb934bbd112f52feb317e97d3219f96c1bb11902acffe94d5d76b4f",
                "alphaMass": 371905
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/1x1-duration-150-frame-132.png",
                "sha256": "8645a497851326f39a9e837c577b761a10fb89929cc292fcc5bbddad05a3e30b",
                "alphaMass": 371905
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/1x1-duration-150-frame-149.png",
                "sha256": "8645a497851326f39a9e837c577b761a10fb89929cc292fcc5bbddad05a3e30b",
                "alphaMass": 371905
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 1.6677517361111112,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/1x1-duration-900-frame-19.png",
                "sha256": "c87fd242fcb934bbd112f52feb317e97d3219f96c1bb11902acffe94d5d76b4f",
                "alphaMass": 371905
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/1x1-duration-900-frame-132.png",
                "sha256": "8645a497851326f39a9e837c577b761a10fb89929cc292fcc5bbddad05a3e30b",
                "alphaMass": 371905
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/1x1-duration-900-frame-792.png",
                "sha256": "8645a497851326f39a9e837c577b761a10fb89929cc292fcc5bbddad05a3e30b",
                "alphaMass": 371905
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/lp-model-picker-stack/1x1-duration-900-frame-899.png",
                "sha256": "8645a497851326f39a9e837c577b761a10fb89929cc292fcc5bbddad05a3e30b",
                "alphaMass": 371905
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "product-ui",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A model menu stacks options and selects a working mode with a brand-blue highlight."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 53,
        "compared": 53,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "4ba288afcfc9a510b72619471acffc73184c25ec1d6e957e10c25e86d02c6ea7",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-model-picker-stack/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-model-picker-stack/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-model-picker-stack/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "30dbe8e59ddc818efc7f66eb8c55d80662b626fecefad422cf8441317887cde7",
        "loop": "879b688484d356e5cf5059b5200c8d88ab00acd96a86a727a4cfe00dc35e7151",
        "detail": "602c3c02cb20df20e26ae740325adba79d6a98fb1df721e27f605b6c2dd63a4c"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-model-picker-stack/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-model-picker-stack/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-model-picker-stack/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d6a43a80f5d5dd53c6ba8d5abb3576931099d998d1eedbad59ed3974821973a1",
        "loop": "9266217e3e8320e185aab812fa920a7b5aca11a4e66b259d3ec7b07a059b4f82",
        "detail": "c62130e88c20a50262bf49f5b55c431dfc13cda416a12347e7b7357c2fb4c1b7"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-model-picker-stack/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-model-picker-stack/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-model-picker-stack/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "94fce5137927ae01bdc29369e24a3aa0845933c1d8af8b9825360d8e0d1d49c5",
        "loop": "422e927eebbc9d2cd9a3904314bbccd3241049d898cc008e92c5cca7c1cbdfbe",
        "detail": "893cbb71afcc83a93ee316d259a528acd82331d34581b9dbceb5dd84c6f4a924"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/4ba288afcfc9a510b72619471acffc73184c25ec1d6e957e10c25e86d02c6ea7/index.mjs",
    "sha256": "4ba288afcfc9a510b72619471acffc73184c25ec1d6e957e10c25e86d02c6ea7",
    "bytes": 298414,
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
    "at": "2026-10-09T03:28:16.952Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
