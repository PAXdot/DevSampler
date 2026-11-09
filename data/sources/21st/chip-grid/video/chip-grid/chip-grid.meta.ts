// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "diagram/features",
  "tags": [
    "features",
    "grid",
    "chips",
    "icons",
    "benefits",
    "explainer",
    "list"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 60,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 64,
      "out": 0
    },
    "markers": {
      "settled": 66
    },
    "beats": [
      0,
      8,
      16,
      24,
      32,
      40,
      48
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
    "fill": "region",
    "defaultRegion": {
      "x": 0.1,
      "y": 0.2,
      "w": 0.8,
      "h": 0.6
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "full",
    "backdrop": []
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "chips",
      "type": "list",
      "maxChars": 28,
      "role": "label"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "color": "colors.text",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "title",
      "prop": "opacity",
      "settledBy": 10,
      "easing": "ease"
    },
    {
      "target": "chips",
      "prop": "y",
      "from": "below",
      "settledBy": 64,
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
      120
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party; motion recipe from research V13"
  },
  "job": "gallery",
  "language": "product-ui",
  "mechanic": [
    "assemble"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "title": "What you get",
    "chips": [
      {
        "text": "Server rendering",
        "icon": "zap"
      },
      {
        "text": "Edge caching",
        "icon": "globe"
      },
      {
        "text": "Typed routes",
        "icon": "code"
      },
      {
        "text": "Auth built in",
        "icon": "lock"
      },
      {
        "text": "Realtime data",
        "icon": "database"
      },
      {
        "text": "Usage analytics",
        "icon": "chart"
      }
    ],
    "columns": 3,
    "accent": "#3D63FF",
    "color": "#F4F4F5",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "chips",
      "label": "Chips",
      "type": "list",
      "max": 9,
      "role": "label"
    },
    {
      "key": "columns",
      "label": "Columns",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 4
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Chip Grid",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "chip-grid",
    "bundleSha256": "1635868db55ea6f68d06e194a818aa279d74363bb41eaaa3fabaabdc3265b73e",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:00:21.744Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/16x9-paper.png",
        "sha256": "f9f8e6e6dbeca4dc171d80a4885cb2f369637adea0042c5e071bf829ecaa6045"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/16x9-night.png",
        "sha256": "976c771e876d4a2b99e1551eb862522c77ced3672c47c20fc3d2e834060cace0"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/16x9-color.png",
        "sha256": "af671b5ed564d9ae6506076952e9c7087f5bc876454f84e6bdec9c0824c0d99e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/9x16-paper.png",
        "sha256": "827822d82ebc05756148b7a96c54d8e319602f396b8eed389361820cf2c11321"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/9x16-night.png",
        "sha256": "b2203759536be175089a102456fb0d9a80247418055bb5c041c66b25e713a628"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/9x16-color.png",
        "sha256": "31926c906bb3e59ffce6a17564ff346d5f9f54c6ef5e61f23a58c10103c11494"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/1x1-paper.png",
        "sha256": "bde7f0738a2f81c3502292b3d59608ab767604b86e6804667c8a45441c3f1fa9"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/1x1-night.png",
        "sha256": "bc19baf027c15512950f8381898283fcc507f48a28b80dab49d930948aec780d"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/1x1-color.png",
        "sha256": "cf582cd3f689952cba9ae741faee4957473b006a8b9c17d2c73cbaeebccebeaa"
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
          "chip-grid--16x9",
          "chip-grid--9x16",
          "chip-grid--1x1"
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
            "paperNight": 127.79570855034723,
            "paperColor": 33.06830512152778,
            "region": {
              "left": 0,
              "top": 271,
              "width": 1920,
              "height": 548
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 163.44251844618054,
            "paperColor": 41.59356011284722,
            "region": {
              "left": 0,
              "top": 242,
              "width": 1080,
              "height": 1447
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 109.771240234375,
            "paperColor": 28.417561848958332,
            "region": {
              "left": 0,
              "top": 361,
              "width": 1080,
              "height": 368
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
            "occupancy": 0.7178025531200136,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7138657932308727,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7191148064163939,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.065877739984883,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0651395975056692,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0680921674225248,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.481596959771563,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4776601998824222,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4829092130679433,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 69.65256076388889,
        "frames": [
          9,
          66,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 78.62955729166667,
            "retainedAlpha": 0.8696749932849852,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/16x9-duration-60-frame-7.png",
                "sha256": "1c9382403e97ee82dbda3151258bacc27f44466b33956fc332dcbc78a93fab10",
                "alphaMass": 1374
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/16x9-duration-60-frame-59.png",
                "sha256": "cf86a59921ae90707d25e19ef7db4f21722f98dba090f906fe00e127430cb793",
                "alphaMass": 18615
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/16x9-duration-60-frame-52.png",
                "sha256": "acbaf092daad745b0cf1524659bb99263ba7d659fab9a0d09b27caa764c57ad0",
                "alphaMass": 16189
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 69.65256076388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/16x9-duration-900-frame-9.png",
                "sha256": "d9f877512207a1c84ee2b2793bb48e9bd3fd5972fe51187c0024fb0839cb1901",
                "alphaMass": 2083
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/16x9-duration-900-frame-66.png",
                "sha256": "ed9e00975ff4475d5be2e5f8f2ec1f5f9a3e293060d500044e48f58a45de9eb9",
                "alphaMass": 20945
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/16x9-duration-900-frame-792.png",
                "sha256": "ed9e00975ff4475d5be2e5f8f2ec1f5f9a3e293060d500044e48f58a45de9eb9",
                "alphaMass": 20945
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/16x9-duration-900-frame-899.png",
                "sha256": "ed9e00975ff4475d5be2e5f8f2ec1f5f9a3e293060d500044e48f58a45de9eb9",
                "alphaMass": 20945
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 134.38292100694446,
            "retainedAlpha": 0.8665467037461149,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/9x16-duration-60-frame-7.png",
                "sha256": "d9be11c2d64aa14994020388e2234a87a18659109e886b87ecae519acba5154b",
                "alphaMass": 1766
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/9x16-duration-60-frame-59.png",
                "sha256": "e4064a7e3650be0f907bb006ce31ab6d53c79bb291c15a0c72cdc7e661213081",
                "alphaMass": 30565
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/9x16-duration-60-frame-52.png",
                "sha256": "abbeebadb5db4268de27e1cc0a609bec4213cfde3e9bbdb002a1310fe2537f81",
                "alphaMass": 26486
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 119.49207899305556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/9x16-duration-900-frame-9.png",
                "sha256": "9b5f41c6ffdf68cd61cb291a7961f3141b9e97731b542d6944a10791f095b8f6",
                "alphaMass": 2818
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/9x16-duration-900-frame-66.png",
                "sha256": "06ac617fd24c3d8de6d23f22de7507327797827c8c81fa598f1f4e06b2e9c8da",
                "alphaMass": 34575
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/9x16-duration-900-frame-792.png",
                "sha256": "06ac617fd24c3d8de6d23f22de7507327797827c8c81fa598f1f4e06b2e9c8da",
                "alphaMass": 34575
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/9x16-duration-900-frame-899.png",
                "sha256": "06ac617fd24c3d8de6d23f22de7507327797827c8c81fa598f1f4e06b2e9c8da",
                "alphaMass": 34575
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 46.323025173611114,
            "retainedAlpha": 0.8965353957856522,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/1x1-duration-60-frame-7.png",
                "sha256": "fd92b560eed6ef2d1b029be5b3eaba1b9686af21bd7086113c7f71821097f241",
                "alphaMass": 2460
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/1x1-duration-60-frame-59.png",
                "sha256": "2ddcd670813c77a7ddfbfedb44f5e44cc4f686ba6208c3da13879b5fc87ca64c",
                "alphaMass": 12671
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/1x1-duration-60-frame-52.png",
                "sha256": "f668aacf07af881c31899b22b007f479213d271ebb761e09553384a794336f00",
                "alphaMass": 11360
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 41.212673611111114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/1x1-duration-900-frame-9.png",
                "sha256": "71e48fd3f9368e5a78f801827917178a90c7a636dfc345dfe22fd90844c67639",
                "alphaMass": 3346
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/1x1-duration-900-frame-66.png",
                "sha256": "7848ebe1dfdae8bf1a90a92b352e165630dad4303522c7661ad6a0c448fd348e",
                "alphaMass": 13946
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/1x1-duration-900-frame-792.png",
                "sha256": "7848ebe1dfdae8bf1a90a92b352e165630dad4303522c7661ad6a0c448fd348e",
                "alphaMass": 13946
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chip-grid/1x1-duration-900-frame-899.png",
                "sha256": "7848ebe1dfdae8bf1a90a92b352e165630dad4303522c7661ad6a0c448fd348e",
                "alphaMass": 13946
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
        "note": "A grid of feature chips assembles under What you get; a collection."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 7,
        "compared": 7,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "1635868db55ea6f68d06e194a818aa279d74363bb41eaaa3fabaabdc3265b73e",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.012033Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/chip-grid/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/chip-grid/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/chip-grid/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 66,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "856c4c103234b597dca429cefa91d41e4604b20bf8197d06dd292ebae2e172fd",
        "loop": "c6e22846124691572c0505c66a2b2a16fa2d6bbcd5fd8ee2cf2a9c16dc63dc5e",
        "detail": "d875ea95b0dc7c35e741fcaffc55d1ad6b431d0fb9cd859679f988d606973f38"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/chip-grid/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/chip-grid/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/chip-grid/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 66,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "8e29aa59c4fe943e60d48eae850bb29badef8da78cfc42f5b70c85afcfd11705",
        "loop": "946f8abb62587e6ac4ae515b0774a51f89e92536442a847d7873a2ef654303de",
        "detail": "c73713f2e5dd542427684e4200cd4ec47a6f10b40da40d7880862633bee2e0a7"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/chip-grid/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/chip-grid/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/chip-grid/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 66,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "f609447413ac43c1a7fb9365a8c7c61878f48203983d8a7f3fdbc536f74d5da4",
        "loop": "c2dec6116fc65d278614a0829bb459009cf989afcac4d74dfc3cac020edc8f3c",
        "detail": "7ca77ec68ae8a44116e8351d3513028c307e6a7186455a7a26db156a6c5d0dea"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/1635868db55ea6f68d06e194a818aa279d74363bb41eaaa3fabaabdc3265b73e/index.mjs",
    "sha256": "1635868db55ea6f68d06e194a818aa279d74363bb41eaaa3fabaabdc3265b73e",
    "bytes": 163142,
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
      "overflow": true,
      "transparent": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    }
  },
  "intake": {
    "at": "2026-10-07T02:31:57.430Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
