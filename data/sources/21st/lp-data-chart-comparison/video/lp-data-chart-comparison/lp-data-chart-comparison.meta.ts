// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data-output",
  "job": "data",
  "language": "product-ui",
  "mechanic": [
    "count"
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
    "data-chart-comparison",
    "systems",
    "data",
    "source-linked"
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
    "title": "A clearer comparison",
    "subtitle": "Two illustrative series meet on one scale",
    "items": [
      "Explore",
      "Prepare",
      "Build",
      "Deliver"
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
  "name": "Data Chart Comparison",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-data-chart-comparison",
    "bundleSha256": "b804918445ed431e94701623aa8aeb4f1800696d0af1cc97e0bae2e24be457ed",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:37:31.222Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/16x9-paper.png",
        "sha256": "7c44bf36e44eb7c6b37adb9830efd948001947df15f48b628b5e14891422edfc"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/16x9-night.png",
        "sha256": "cc64d78e0218185f8ef2a206417eddc55364d88201917161807f6ba94bc6ec5c"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/16x9-color.png",
        "sha256": "713db1f01d809bc1e3aed166888244c260022a2b70d29c292833c980684db467"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/9x16-paper.png",
        "sha256": "4b936cbfa14ff3b2bd469ae855c772203be2a42ff695e37e4e0f30c983b90423"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/9x16-night.png",
        "sha256": "38aac77a9d2da9983cd53db1ed1ee8867f9efb9acd0cab237bd2c4c0e3a8f82f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/9x16-color.png",
        "sha256": "7f6c9c9eb2495258f93e973091c55c2fa5278b40c5b47e33a5ef9baf031668bb"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/1x1-paper.png",
        "sha256": "a0b236692599590ae5e534e6a5f025d848caf1d5af3be865af710a27c20e221c"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/1x1-night.png",
        "sha256": "bb4d38fcb2d2cdaa8364e296c0d46972599fe169d1d5ba79fbfe5534b1b4d4dc"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/1x1-color.png",
        "sha256": "37f76085c70678c941b69c8477867c5399c8594b054193cb1396d5ab90ed23f8"
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
          "lp-data-chart-comparison--16x9",
          "lp-data-chart-comparison--9x16",
          "lp-data-chart-comparison--1x1"
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
            "paperNight": 141.58954535590277,
            "paperColor": 13.105387369791666,
            "region": {
              "left": 207,
              "top": 108,
              "width": 1507,
              "height": 864
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 153.16392686631946,
            "paperColor": 13.13723415798611,
            "region": {
              "left": 94,
              "top": 192,
              "width": 891,
              "height": 1536
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 141.55026584201389,
            "paperColor": 13.096137152777779,
            "region": {
              "left": 112,
              "top": 295,
              "width": 855,
              "height": 490
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
            "occupancy": 0.8899045729402875,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8899045729402875,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8899045729402875,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9353741496598641,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9353741496598641,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9353741496598641,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5090449245541839,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5090449245541839,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5090449245541839,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.131184895833333,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 7.131184895833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/16x9-duration-150-frame-18.png",
                "sha256": "3d9c4ffa8e6d277abe13e57c8c741a7fb82f0b1c7bbfd73b973b268ce841584f",
                "alphaMass": 368480
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/16x9-duration-150-frame-132.png",
                "sha256": "9d1ed6c248ca31e3b2066f1ad97129d14f463ac910685350ec020c066c973d0e",
                "alphaMass": 368480
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/16x9-duration-150-frame-149.png",
                "sha256": "9d1ed6c248ca31e3b2066f1ad97129d14f463ac910685350ec020c066c973d0e",
                "alphaMass": 368480
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.131184895833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/16x9-duration-900-frame-19.png",
                "sha256": "3d9c4ffa8e6d277abe13e57c8c741a7fb82f0b1c7bbfd73b973b268ce841584f",
                "alphaMass": 368480
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/16x9-duration-900-frame-132.png",
                "sha256": "9d1ed6c248ca31e3b2066f1ad97129d14f463ac910685350ec020c066c973d0e",
                "alphaMass": 368480
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/16x9-duration-900-frame-792.png",
                "sha256": "9d1ed6c248ca31e3b2066f1ad97129d14f463ac910685350ec020c066c973d0e",
                "alphaMass": 368480
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/16x9-duration-900-frame-899.png",
                "sha256": "9d1ed6c248ca31e3b2066f1ad97129d14f463ac910685350ec020c066c973d0e",
                "alphaMass": 368480
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 3.8623046875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/9x16-duration-150-frame-18.png",
                "sha256": "9e9f70c2434a4d096a0c066d756f32160add8a108b84cedad125ba51790eac69",
                "alphaMass": 387056
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/9x16-duration-150-frame-132.png",
                "sha256": "4cccc95f47b0a2c6fdfa0d504242a714b537ee6309a43476de790b6ebfcfd882",
                "alphaMass": 387056
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/9x16-duration-150-frame-149.png",
                "sha256": "4cccc95f47b0a2c6fdfa0d504242a714b537ee6309a43476de790b6ebfcfd882",
                "alphaMass": 387056
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 3.8623046875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/9x16-duration-900-frame-19.png",
                "sha256": "9e9f70c2434a4d096a0c066d756f32160add8a108b84cedad125ba51790eac69",
                "alphaMass": 387056
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/9x16-duration-900-frame-132.png",
                "sha256": "4cccc95f47b0a2c6fdfa0d504242a714b537ee6309a43476de790b6ebfcfd882",
                "alphaMass": 387056
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/9x16-duration-900-frame-792.png",
                "sha256": "4cccc95f47b0a2c6fdfa0d504242a714b537ee6309a43476de790b6ebfcfd882",
                "alphaMass": 387056
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/9x16-duration-900-frame-899.png",
                "sha256": "4cccc95f47b0a2c6fdfa0d504242a714b537ee6309a43476de790b6ebfcfd882",
                "alphaMass": 387056
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 4.1689453125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/1x1-duration-150-frame-18.png",
                "sha256": "8a049214e51bb59b42078f9d791bda40a55b769aeeea450851f0bfe5752dc9c8",
                "alphaMass": 211208
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/1x1-duration-150-frame-132.png",
                "sha256": "1270ec7313870aee7444a0ced43c5988cb674dff6506339535acd7d4100143d3",
                "alphaMass": 211208
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/1x1-duration-150-frame-149.png",
                "sha256": "1270ec7313870aee7444a0ced43c5988cb674dff6506339535acd7d4100143d3",
                "alphaMass": 211208
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 4.1689453125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/1x1-duration-900-frame-19.png",
                "sha256": "8a049214e51bb59b42078f9d791bda40a55b769aeeea450851f0bfe5752dc9c8",
                "alphaMass": 211208
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/1x1-duration-900-frame-132.png",
                "sha256": "1270ec7313870aee7444a0ced43c5988cb674dff6506339535acd7d4100143d3",
                "alphaMass": 211208
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/1x1-duration-900-frame-792.png",
                "sha256": "1270ec7313870aee7444a0ced43c5988cb674dff6506339535acd7d4100143d3",
                "alphaMass": 211208
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-data-chart-comparison/1x1-duration-900-frame-899.png",
                "sha256": "1270ec7313870aee7444a0ced43c5988cb674dff6506339535acd7d4100143d3",
                "alphaMass": 211208
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
        "note": "Paired bars compare a gray reference to a brand-blue new direction across four stages."
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
      "bundleSha256": "b804918445ed431e94701623aa8aeb4f1800696d0af1cc97e0bae2e24be457ed",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-data-chart-comparison/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-data-chart-comparison/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-data-chart-comparison/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4941e09b1edde46f4cb24dbe9cb6d62bf4c8ebd371b5d68fb26792bf1c81b009",
        "loop": "34b917d603565c32f2c01e13db9d972c274510c8980ac333c060981fc214bf43",
        "detail": "1df154f98b232af1017400c7e16479f2d833cb0bee4bf690a8a3b15f42c6b83f"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-data-chart-comparison/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-data-chart-comparison/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-data-chart-comparison/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e5328ce196028028052894d286c1bc686c24fc811c228503a5da42a10fad834b",
        "loop": "c9a6146abe4da5419553461991d6094a0407285b8ff2800d2dc543ac482143ce",
        "detail": "94e3e1b56510a6b40a32644778c33e51d0a72ca9bdda7bdf93a5400e9d0f32bb"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-data-chart-comparison/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-data-chart-comparison/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-data-chart-comparison/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "352b07b51f216902f98e34c35c61c5a59242e197e6ed513e5e42083fbb9316a3",
        "loop": "c58986f3242aef5064aa5d69ac40dfb7e107c9e06d1008fa1d3927191f05cc65",
        "detail": "406d322f4080b8599aff3019bb364275012f7d5b0278b81a412d11736c6f462e"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/b804918445ed431e94701623aa8aeb4f1800696d0af1cc97e0bae2e24be457ed/index.mjs",
    "sha256": "b804918445ed431e94701623aa8aeb4f1800696d0af1cc97e0bae2e24be457ed",
    "bytes": 298429,
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
    "at": "2026-10-09T03:23:34.864Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
