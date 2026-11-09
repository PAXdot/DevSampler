// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "perspective-tilt-to-flat"
  ],
  "energy": "calm",
  "requiresScreenshot": true,
  "tags": [
    "motion-gallery",
    "product-ui",
    "perspective-tilt-to-flat",
    "3d",
    "tilt",
    "reveal"
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
      "key": "kicker",
      "type": "text",
      "maxChars": 28,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 40,
      "role": "headline"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 28,
      "role": "cta"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.serif",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "perspective-tilt-to-flat",
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
    "ink": "#E9ECFF",
    "accent": "#3A4FE0",
    "secondary": "#9DB1FF",
    "paper": "#070A16",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Lumen agents",
    "headline": "Agents that finish the job",
    "cta": "12 running right now"
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
      "brand": "fonts.serif"
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
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 28,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 28,
      "role": "cta"
    }
  ],
  "name": "Tilt To Flat Screen",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-pr-tilt-pan",
    "bundleSha256": "13de64bea58135ea2f61859155e58d740843c2e7dd6c934d9790920f371e364b",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:48:16.436Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/16x9-paper.png",
        "sha256": "5fcf4481e9ab620c15f4529fc87458cb62b03829aed5e9a7a8d85f8a9a7f06ee"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/16x9-night.png",
        "sha256": "44782e16e37408ed213d36938430d973c3ecd0d3c747544ee2de29e9ca46bb54"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/16x9-color.png",
        "sha256": "e24a3f9a7b6e9fa5a0da30e8cf44334049575f4056b9f7dfbecd2f65970fd334"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/9x16-paper.png",
        "sha256": "e09ee704157fb79f2f74c3c428e9208c7cea5c311624bd95b69e32b8cfed26f7"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/9x16-night.png",
        "sha256": "420d77438c67afe567be2f1cc5c472f80c2b38b31adaa873a294fd370f59ca39"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/9x16-color.png",
        "sha256": "cd0fe414d8fb5783cac84e7289b6f87ed7acb18ffe619cf1563fb088fa1559e4"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/1x1-paper.png",
        "sha256": "951da04a857a703d5e52cdaa3f095b5bd062149f7bc6e1e088c1e3784336e79a"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/1x1-night.png",
        "sha256": "aaaf3842b5ce8fad2e07f03eb3c3e0e8a4b77b27d131cab1f6c41046dffb9f2d"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/1x1-color.png",
        "sha256": "118d542a74494123e5dbefb71cacb07d57e1228e1ff88e6227e7d8da79fb5831"
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
          "mg-pr-tilt-pan--16x9",
          "mg-pr-tilt-pan--9x16",
          "mg-pr-tilt-pan--1x1"
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
            "paperNight": 8.8193359375,
            "paperColor": 6.843967013888889,
            "region": {
              "left": 104,
              "top": 46,
              "width": 1699,
              "height": 1023
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 23.86664496527778,
            "paperColor": 10.673990885416666,
            "region": {
              "left": 0,
              "top": 174,
              "width": 1080,
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
            "paperNight": 14.333821614583334,
            "paperColor": 8.773003472222221,
            "region": {
              "left": 11,
              "top": 63,
              "width": 1057,
              "height": 956
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
            "occupancy": 1.1879152461524736,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1879152461524736,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1879152461524736,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1596218348450493,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1596218348450493,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1588836923658354,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2277976462647247,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2277976462647247,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2277976462647247,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 32.842990451388886,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 32.900173611111114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/16x9-duration-90-frame-10.png",
                "sha256": "30c1f65de1e0519315b8e60323944d562e08611691015958e9f5a4c677a3f426",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/16x9-duration-90-frame-89.png",
                "sha256": "20b6882b5de0eaf007a3c2bff5a957001248111077518382e96ef67947cc0a65",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/16x9-duration-90-frame-79.png",
                "sha256": "20b6882b5de0eaf007a3c2bff5a957001248111077518382e96ef67947cc0a65",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 32.842990451388886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/16x9-duration-900-frame-13.png",
                "sha256": "48fcfc72c86b2c526ace33383cfdf8ab187308c0ef0c7d2b38f09bb8d04f589a",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/16x9-duration-900-frame-90.png",
                "sha256": "de1e099756507d594bac8f89eeb5fd0182992bc89ef5fc1b7b77fabe842d5aa7",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/16x9-duration-900-frame-792.png",
                "sha256": "20b6882b5de0eaf007a3c2bff5a957001248111077518382e96ef67947cc0a65",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/16x9-duration-900-frame-899.png",
                "sha256": "de1e099756507d594bac8f89eeb5fd0182992bc89ef5fc1b7b77fabe842d5aa7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 24.03244357638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/9x16-duration-90-frame-10.png",
                "sha256": "6d276ea1dc46518d077443123e5f9ee37d9dd137773246ff62ce0456165b4390",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/9x16-duration-90-frame-89.png",
                "sha256": "affbf1cfa32734f60ef3dc6288aea7d26ac75409e471dab7362a1da3bbfc776f",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/9x16-duration-90-frame-79.png",
                "sha256": "affbf1cfa32734f60ef3dc6288aea7d26ac75409e471dab7362a1da3bbfc776f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 23.92133246527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/9x16-duration-900-frame-13.png",
                "sha256": "bad90042290cfd782c0eb04faad1b657c953fe12d33bcb64126eb921406508eb",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/9x16-duration-900-frame-90.png",
                "sha256": "affbf1cfa32734f60ef3dc6288aea7d26ac75409e471dab7362a1da3bbfc776f",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/9x16-duration-900-frame-792.png",
                "sha256": "affbf1cfa32734f60ef3dc6288aea7d26ac75409e471dab7362a1da3bbfc776f",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/9x16-duration-900-frame-899.png",
                "sha256": "affbf1cfa32734f60ef3dc6288aea7d26ac75409e471dab7362a1da3bbfc776f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 37.06684027777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/1x1-duration-90-frame-10.png",
                "sha256": "6f5c5eb0506d8ff18bd128aca84c5dbc0f97caf1e097df659e68e3a6fa2f802a",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/1x1-duration-90-frame-89.png",
                "sha256": "cf0bd17142c205c14e1c6dbf1710dfe153fbfdc46f66beec750dd4cf843e97ad",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/1x1-duration-90-frame-79.png",
                "sha256": "b7399915e23329cc953fc067de7c05b06a9d6bd363c67cb190ac2cc079218feb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 36.995442708333336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/1x1-duration-900-frame-13.png",
                "sha256": "41dec2d46dd93dd3cbd3fa6dfaf1d47a262e88a71bcf64a4d0233a1739f9b2da",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/1x1-duration-900-frame-90.png",
                "sha256": "cf0bd17142c205c14e1c6dbf1710dfe153fbfdc46f66beec750dd4cf843e97ad",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/1x1-duration-900-frame-792.png",
                "sha256": "b7399915e23329cc953fc067de7c05b06a9d6bd363c67cb190ac2cc079218feb",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-pr-tilt-pan/1x1-duration-900-frame-899.png",
                "sha256": "b7399915e23329cc953fc067de7c05b06a9d6bd363c67cb190ac2cc079218feb",
                "alphaMass": 587520
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
        "note": "Tilted board settles flat; headline readable, rebrands distinct."
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
      "bundleSha256": "13de64bea58135ea2f61859155e58d740843c2e7dd6c934d9790920f371e364b",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-tilt-pan/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-tilt-pan/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-tilt-pan/16x9/detail.mp4",
      "bg": "#0b0e19",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "410ac017d922bd1049ecede5f4eef9e8d81629cc4e69afe605278531d7765b2e",
        "loop": "090e107111d0e2d2019e6a1ced69b79b82e798ecac0ce93bea00e35d41a3a165",
        "detail": "ce2cfa63772a838fea811c1db5cdf3367e57f087cb890847d6e7982d2a8ef0f2"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-tilt-pan/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-tilt-pan/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-tilt-pan/9x16/detail.mp4",
      "bg": "#0b0e19",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "19c0d37ad8e183c91e3cbe95e84678ba0d4187dc83555923710881c2dafb787a",
        "loop": "4b28c1bf2b54db62e47f10b22001ca76088db54189a72d331d427261761ae6c0",
        "detail": "b53a12076c0d0d0eac1c07ebc09f5b599c5d7b019d1797e552342869cf359319"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-tilt-pan/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-tilt-pan/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-tilt-pan/1x1/detail.mp4",
      "bg": "#0b0e19",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "16fc79b2676d15135dba8f7c647887382a8513be5c3d2b034182117fc4bb9378",
        "loop": "21297fd05b7826f0cf52c156938f3f7afe39f379983017e6bde1ffff0525ed71",
        "detail": "03510f9bea29dd6a69d9f59ae36befa1ed942bf0e3eef9447630630ff0ef8e6f"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/13de64bea58135ea2f61859155e58d740843c2e7dd6c934d9790920f371e364b/index.mjs",
    "sha256": "13de64bea58135ea2f61859155e58d740843c2e7dd6c934d9790920f371e364b",
    "bytes": 174773,
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
    "at": "2026-10-09T04:07:14.849Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
