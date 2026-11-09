// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "brand-motion",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "route"
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
    "ex-voice-instrument",
    "expression",
    "material",
    "source-adaptation"
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
    "title": "A voice, made visible",
    "subtitle": "A procedural visual instrument for an audio story.",
    "items": [
      "Listening",
      "Shaping",
      "Responding"
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
  "name": "Voice particle instrument",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-ex-voice-instrument",
    "bundleSha256": "65c5f851a130aa36b0fc28df86c587b615c07871d6e3f928473742bae16c9e6f",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:38:52.569Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/16x9-paper.png",
        "sha256": "8e4f20cde0640df527d178a914f81debf8580161b9272f9746be552a2bcae7f0"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/16x9-night.png",
        "sha256": "324c973ae6e5ecd39835ef21c52af85e87470fdbea9115bcdd2653a8c0d55f51"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/16x9-color.png",
        "sha256": "4e87e4263d8019c8dc931fd4c5211ce2a8efe743d63708c47a823ce3cc8b6262"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/9x16-paper.png",
        "sha256": "623e841ae1dea188ac3d3a372790df89e925841f4dd0cc7b08acf8023c807c1d"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/9x16-night.png",
        "sha256": "88b575c6625059bebccb3eb3c3c5ff1c345ada1bf0624798025b3ed64e44084d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/9x16-color.png",
        "sha256": "30cf2283730c8686fd21f914f33ee5886ca39cedac82fed8711e19c407db0cc5"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/1x1-paper.png",
        "sha256": "8947ed6c0503e01df394cbe6685402cfba39507b6f23e952b7d9310147e4f5ac"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/1x1-night.png",
        "sha256": "125ac5145b7ad2e0ca9b446c1c5aa0454b636a66c7dc87209df5b9fd5e8c50ed"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/1x1-color.png",
        "sha256": "7f2b528f03f61d7e9b18c7fdb4ef0c2e6af93bcf8442bfbce3f3704026a6003f"
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
          "lp-ex-voice-instrument--16x9",
          "lp-ex-voice-instrument--9x16",
          "lp-ex-voice-instrument--1x1"
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
            "paperNight": 25.93362087673611,
            "paperColor": 7.797607421875,
            "region": {
              "left": 155,
              "top": 236,
              "width": 1199,
              "height": 776
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 41.326985677083336,
            "paperColor": 11.768419053819445,
            "region": {
              "left": 90,
              "top": 508,
              "width": 805,
              "height": 1287
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 37.854953342013886,
            "paperColor": 10.764702690972221,
            "region": {
              "left": 88,
              "top": 236,
              "width": 743,
              "height": 776
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
            "occupancy": 0.6359124797038158,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6359124797038158,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6335039481327511,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7072143093348452,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7072143093348452,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7080939291225751,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7005585727660979,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7005585727660979,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6996557911001622,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 6.717556423611111,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 6.717556423611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/16x9-duration-150-frame-18.png",
                "sha256": "05318059dd8ae7d45209343cc641e650ffd2bbc7ba728ef18736f56737ef5ba7",
                "alphaMass": 22464
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/16x9-duration-150-frame-132.png",
                "sha256": "d9b24f0f2fb6839894b102618026ee9681b7dcec16c649d525d208f5b4d13a4c",
                "alphaMass": 27058
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/16x9-duration-150-frame-149.png",
                "sha256": "d9b24f0f2fb6839894b102618026ee9681b7dcec16c649d525d208f5b4d13a4c",
                "alphaMass": 27058
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 6.717556423611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/16x9-duration-900-frame-19.png",
                "sha256": "05318059dd8ae7d45209343cc641e650ffd2bbc7ba728ef18736f56737ef5ba7",
                "alphaMass": 22464
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/16x9-duration-900-frame-132.png",
                "sha256": "d9b24f0f2fb6839894b102618026ee9681b7dcec16c649d525d208f5b4d13a4c",
                "alphaMass": 27058
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/16x9-duration-900-frame-792.png",
                "sha256": "d9b24f0f2fb6839894b102618026ee9681b7dcec16c649d525d208f5b4d13a4c",
                "alphaMass": 27058
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/16x9-duration-900-frame-899.png",
                "sha256": "d9b24f0f2fb6839894b102618026ee9681b7dcec16c649d525d208f5b4d13a4c",
                "alphaMass": 27058
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 11.375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/9x16-duration-150-frame-18.png",
                "sha256": "156d44b9e8cf853f716a3d3bb6ff5eb6c4fe73b532e7c90a120a4bbad7cfc243",
                "alphaMass": 35389
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/9x16-duration-150-frame-132.png",
                "sha256": "1e17feeb8ca9a4d457f5d1fea109b1cfa237b9f4be43f8f4c789f70f7032fb39",
                "alphaMass": 42047
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/9x16-duration-150-frame-149.png",
                "sha256": "f5d050abdc94823c84dbd78108cc72dda45c0c81ddcf1e0124ae4f8d4fdac5d7",
                "alphaMass": 42047
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 11.375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/9x16-duration-900-frame-19.png",
                "sha256": "156d44b9e8cf853f716a3d3bb6ff5eb6c4fe73b532e7c90a120a4bbad7cfc243",
                "alphaMass": 35389
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/9x16-duration-900-frame-132.png",
                "sha256": "f5d050abdc94823c84dbd78108cc72dda45c0c81ddcf1e0124ae4f8d4fdac5d7",
                "alphaMass": 42047
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/9x16-duration-900-frame-792.png",
                "sha256": "1e17feeb8ca9a4d457f5d1fea109b1cfa237b9f4be43f8f4c789f70f7032fb39",
                "alphaMass": 42047
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/9x16-duration-900-frame-899.png",
                "sha256": "1e17feeb8ca9a4d457f5d1fea109b1cfa237b9f4be43f8f4c789f70f7032fb39",
                "alphaMass": 42047
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 12.732964409722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/1x1-duration-150-frame-18.png",
                "sha256": "4a9e4c831e0ffcf55d3cbce25f3503e773f1d9793ee1b0172a88dfa5d17faaae",
                "alphaMass": 39932
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/1x1-duration-150-frame-132.png",
                "sha256": "d1c03839838abec07c0e087219db89b9d6ec9cf9e2c37b79c0c9364ff0302925",
                "alphaMass": 48086
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/1x1-duration-150-frame-149.png",
                "sha256": "d1c03839838abec07c0e087219db89b9d6ec9cf9e2c37b79c0c9364ff0302925",
                "alphaMass": 48086
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 12.732964409722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/1x1-duration-900-frame-19.png",
                "sha256": "4a9e4c831e0ffcf55d3cbce25f3503e773f1d9793ee1b0172a88dfa5d17faaae",
                "alphaMass": 39932
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/1x1-duration-900-frame-132.png",
                "sha256": "bcc6a611890660192e780a35ac5276601c3033b851422d39ecdf9d0c17e54d18",
                "alphaMass": 48086
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/1x1-duration-900-frame-792.png",
                "sha256": "d1c03839838abec07c0e087219db89b9d6ec9cf9e2c37b79c0c9364ff0302925",
                "alphaMass": 48086
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-ex-voice-instrument/1x1-duration-900-frame-899.png",
                "sha256": "d1c03839838abec07c0e087219db89b9d6ec9cf9e2c37b79c0c9364ff0302925",
                "alphaMass": 48086
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
        "note": "A voice orb pulses with brand-blue particle spokes through listening, shaping and responding."
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
      "bundleSha256": "65c5f851a130aa36b0fc28df86c587b615c07871d6e3f928473742bae16c9e6f",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-ex-voice-instrument/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-ex-voice-instrument/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-ex-voice-instrument/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "dc78f79f3ac2745ffa3bd8e8dee7c2fcdc0da2185e16fcc17c6d01e010ade9ef",
        "loop": "002678eb98f5181e3c362205295ced0d504d9143b37aead9ba12e75fe816fd3c",
        "detail": "52bfb0dd18f29b1aca32668af739301a5a720c79b71b39d830c5be6a55ee8600"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-ex-voice-instrument/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-ex-voice-instrument/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-ex-voice-instrument/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3f599ddf9ef509a02b21888298d98a2d36afe7f8e54e856955e27a31c59cc879",
        "loop": "f2a9d7b6fc3cd60292ddcc012048229d9cd46adc6cddd01aa8aeb7a687b1c8b5",
        "detail": "603ddeb8aee32092f1a95cfd59412dc8e937eeeeebc4b19a6ace3b6ecd0dabef"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-ex-voice-instrument/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-ex-voice-instrument/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-ex-voice-instrument/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5e8d90e0db9ff9765adc584c60c1bdc19720265dff3c2b71c727fa9737d29bf9",
        "loop": "e9b93c4123e0c1e3e18dc933489fb524f522c5f30ff9add5906f0a07f901dccb",
        "detail": "3785d0a8d10c028f808d8f8147de805689c88759942974bbf1666ebecd6dcdc1"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/65c5f851a130aa36b0fc28df86c587b615c07871d6e3f928473742bae16c9e6f/index.mjs",
    "sha256": "65c5f851a130aa36b0fc28df86c587b615c07871d6e3f928473742bae16c9e6f",
    "bytes": 298419,
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
    "at": "2026-10-09T04:25:08.935Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
