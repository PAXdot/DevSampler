// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "product-ui",
  "mechanic": [
    "chip-swirl-collapse-to-card"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "chip-swirl-collapse-to-card",
    "hook",
    "chaos",
    "notifications",
    "before-after"
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
      "in": 96,
      "out": 0
    },
    "markers": {
      "settled": 96
    },
    "beats": [
      0,
      24,
      48,
      72,
      96
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
      "key": "before",
      "type": "text",
      "maxChars": 26,
      "role": "label"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 20,
      "role": "headline"
    },
    {
      "key": "after",
      "type": "text",
      "maxChars": 26,
      "role": "label"
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
      "target": "chip-swirl-collapse-to-card",
      "prop": "transform",
      "from": "enter",
      "settledBy": 96,
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
    "ink": "#1B1C1F",
    "accent": "#3D63FF",
    "secondary": "#FFE4CC",
    "paper": "#EBEDF1",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "before": "9:04 am · 22 tabs open",
    "title": "Today in Lumen",
    "after": "9:05 am · one place"
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
      "key": "before",
      "label": "Before",
      "type": "text",
      "max": 26,
      "role": "label"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 20,
      "role": "headline"
    },
    {
      "key": "after",
      "label": "After",
      "type": "text",
      "max": 26,
      "role": "label"
    }
  ],
  "name": "Chaos Into One Card",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-hook-chaos-order",
    "bundleSha256": "be2ce6caa23767bd912247778065bd8f200ff58f5ab848c6a854498d338c0944",
    "sourceSnapshot": {
      "sha256": "daf572d0dc6bb35bb97bb5cb594162c41addc44ef918cd67fc76e1c30b0b570d",
      "files": 1757
    },
    "renderedAt": "2026-10-09T03:04:44.256Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/16x9-paper.png",
        "sha256": "6316ed0c747110da6016fa250cad8f59e624d9d2295db5b377a7da77136f2f33"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/16x9-night.png",
        "sha256": "ef287d4fdcd16ed8775aa596c379e59e88b73989632f856c56f15693cbd2d616"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/16x9-color.png",
        "sha256": "37f859dd6f8ac77de71436cef1e71cb958d0ebb00bcae2b9f4a1faa740adf582"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/9x16-paper.png",
        "sha256": "c705149b58ff4e95b1cdf51f209328e9a4694a47bbd1bdd1dc5cea367279b431"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/9x16-night.png",
        "sha256": "7b51ae8360ef0a267230b06758a09ecb584e835f0e0025164444988e130ae13c"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/9x16-color.png",
        "sha256": "e254b93eed67105b60da8a46203cdd4de3ff894e4bf7c409e2b6f1b78a47e97d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/1x1-paper.png",
        "sha256": "67b8155b4549f226b18b10ca6d84169a1d985a92d22988dc5fb17f264b402d74"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/1x1-night.png",
        "sha256": "3c853ac5fc82eb3b72692551896be3854e9e2a2946f7713c566b605d996e0eed"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/1x1-color.png",
        "sha256": "4afc97b2713da1b28d31b8cb075771eb5135eb69bd4c1dfb724c3663eb934a75"
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
          "mg-hook-chaos-order--16x9",
          "mg-hook-chaos-order--9x16",
          "mg-hook-chaos-order--1x1"
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
            "paperNight": 11.63161892361111,
            "paperColor": 17.30463324652778,
            "region": {
              "left": 96,
              "top": 82,
              "width": 1350,
              "height": 932
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 15.252278645833334,
            "paperColor": 14.993842230902779,
            "region": {
              "left": 0,
              "top": 166,
              "width": 1080,
              "height": 1599
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 14.65676540798611,
            "paperColor": 19.02837456597222,
            "region": {
              "left": 65,
              "top": 70,
              "width": 899,
              "height": 944
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
            "occupancy": 0.8590133101851853,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8590133101851853,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8590133101851853,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.179551681783825,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.179551681783825,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.179551681783825,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.030066590536535,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.030066590536535,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.030066590536535,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.233940972222222,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 7.198350694444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/16x9-duration-90-frame-10.png",
                "sha256": "2bb4ce55102c779a5a7e20e9c3680ca7ecfc1a83cb9fbd3dbcd3f26a3af8b98b",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/16x9-duration-90-frame-89.png",
                "sha256": "e7f11da45d9a561d32710704e845957a709525a1aa804045de49ff3fef0fdecb",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/16x9-duration-90-frame-79.png",
                "sha256": "e7f11da45d9a561d32710704e845957a709525a1aa804045de49ff3fef0fdecb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.233940972222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/16x9-duration-900-frame-14.png",
                "sha256": "704f7137a2298e69f9935118b42955c3fdd6f265a6d61d535a215661297ecadc",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/16x9-duration-900-frame-96.png",
                "sha256": "e7f11da45d9a561d32710704e845957a709525a1aa804045de49ff3fef0fdecb",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/16x9-duration-900-frame-792.png",
                "sha256": "e7f11da45d9a561d32710704e845957a709525a1aa804045de49ff3fef0fdecb",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/16x9-duration-900-frame-899.png",
                "sha256": "e7f11da45d9a561d32710704e845957a709525a1aa804045de49ff3fef0fdecb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 8.316297743055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/9x16-duration-90-frame-10.png",
                "sha256": "e497fea91f41b5f8fa1194e02db430e58a2ef61ec26b047c280aefcababb9a48",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/9x16-duration-90-frame-89.png",
                "sha256": "27b3b3670124750d0e0c93a6a932f0c23e47454d05c4250c385566ebc9b5babc",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/9x16-duration-90-frame-79.png",
                "sha256": "27b3b3670124750d0e0c93a6a932f0c23e47454d05c4250c385566ebc9b5babc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 8.27658420138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/9x16-duration-900-frame-14.png",
                "sha256": "b3b92bed55c2f3ef9e8c7204b0dc6c733604e154a4aa2920febfee2d1817be16",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/9x16-duration-900-frame-96.png",
                "sha256": "27b3b3670124750d0e0c93a6a932f0c23e47454d05c4250c385566ebc9b5babc",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/9x16-duration-900-frame-792.png",
                "sha256": "27b3b3670124750d0e0c93a6a932f0c23e47454d05c4250c385566ebc9b5babc",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/9x16-duration-900-frame-899.png",
                "sha256": "27b3b3670124750d0e0c93a6a932f0c23e47454d05c4250c385566ebc9b5babc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 8.786566840277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/1x1-duration-90-frame-10.png",
                "sha256": "f629b308e2fd39ff86f06020b9d6d87dbe8616b737b92f18293b07e4266d440f",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/1x1-duration-90-frame-89.png",
                "sha256": "1ede2a093092d03ce11cb739c9bf4c71e350479a76736ffb397b45473e2fecbe",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/1x1-duration-90-frame-79.png",
                "sha256": "1ede2a093092d03ce11cb739c9bf4c71e350479a76736ffb397b45473e2fecbe",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 8.832573784722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/1x1-duration-900-frame-14.png",
                "sha256": "0d718669469a3e53188b01fe9e10298f27b83930ec1cbb43af4ac9b49e9562b0",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/1x1-duration-900-frame-96.png",
                "sha256": "1ede2a093092d03ce11cb739c9bf4c71e350479a76736ffb397b45473e2fecbe",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/1x1-duration-900-frame-792.png",
                "sha256": "1ede2a093092d03ce11cb739c9bf4c71e350479a76736ffb397b45473e2fecbe",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-hook-chaos-order/1x1-duration-900-frame-899.png",
                "sha256": "1ede2a093092d03ce11cb739c9bf4c71e350479a76736ffb397b45473e2fecbe",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "titles",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Scattered tab chips collapse into one Today in Lumen card on a light blue and peach backdrop; no lilac wash."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 43,
        "compared": 43,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "be2ce6caa23767bd912247778065bd8f200ff58f5ab848c6a854498d338c0944",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-chaos-order/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-chaos-order/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-chaos-order/16x9/detail.mp4",
      "bg": "#d3daf3",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0f1687a0d7649e9ec0670b269c19ea270073fe091b69647e06b6a3f12c27635c",
        "loop": "12db00e5db7292449938ae21d3cb6bbb93267c08eb862a3fc2bba24d02b2a50a",
        "detail": "d0294b56a7b9411221479e9319ae86074c2208dc27502f116f7f1650154fede5"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-chaos-order/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-chaos-order/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-chaos-order/9x16/detail.mp4",
      "bg": "#d9dff3",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f2a8ce322bda1f4c5152e93012a5149521cc42b006bc60a03cea7520c4a5bd5e",
        "loop": "360b801d12f1ac0352e88460190fd4f0de129b0e899a5f41567a9084a977d838",
        "detail": "6112eda77d63630f067b8c939fcb1fe874d21a1876e450cca43713a91fdbe8d9"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-chaos-order/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-chaos-order/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-chaos-order/1x1/detail.mp4",
      "bg": "#d5dcf3",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5ac933c3ccd1c05ddae82fcf4f9ae826195324c2f093775082e4454e7ab1d26e",
        "loop": "9b589f12acea93aaa458d986577c9d7b49844aefbc15a1a2d566d977e33fc71f",
        "detail": "ea5fed5ea3f8dfd2ced2227e8c6cc28eec754e3563076af31cfe2d461c8ec5ed"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/be2ce6caa23767bd912247778065bd8f200ff58f5ab848c6a854498d338c0944/index.mjs",
    "sha256": "be2ce6caa23767bd912247778065bd8f200ff58f5ab848c6a854498d338c0944",
    "bytes": 224600,
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
    "at": "2026-10-09T03:57:38.173Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
