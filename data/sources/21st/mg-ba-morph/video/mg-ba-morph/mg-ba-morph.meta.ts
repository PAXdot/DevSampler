// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "legacy-form-morph-to-modern"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "legacy-form-morph-to-modern",
    "before-after",
    "redesign",
    "form"
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
      "key": "headline",
      "type": "text",
      "maxChars": 24,
      "role": "headline"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 22,
      "role": "cta"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 28,
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
      "target": "legacy-form-morph-to-modern",
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
    "ink": "#141518",
    "accent": "#3D63FF",
    "secondary": "#FFB36B",
    "paper": "#F9F5F1",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "Create your workspace",
    "cta": "Create workspace →",
    "caption": "Same fields. New life."
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
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 24,
      "role": "headline"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 22,
      "role": "cta"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 28,
      "role": "caption"
    }
  ],
  "name": "Legacy Form Morph",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-ba-morph",
    "bundleSha256": "ef15a5f701eac332fc9cece76eae96521f0896ca9754798bb3c8b1fbbb7f24ba",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:40:38.063Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/16x9-paper.png",
        "sha256": "17f48b0f597197badc83be1e818a1f6e3582fda9191053a64ba867bdbd36a49d"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/16x9-night.png",
        "sha256": "4b9918a5df357409cc62d21cd87dbd23a2f06aab6934a8621cc23c59d060791f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/16x9-color.png",
        "sha256": "30cf5188a9c71c13c30e481120f0de344939c81b975f37d98999cf09ec9d69ca"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/9x16-paper.png",
        "sha256": "c4fef307ec7d9321645e63867770da73419ab21e8407563f8c08666ec235251d"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/9x16-night.png",
        "sha256": "661aff7e958c8abe385291387b31623c2014317bc8a159d8e421595dc61a24c7"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/9x16-color.png",
        "sha256": "2652db023a627b37915bf4b310ea01481e132de0695f2c872d7474e26ae2b352"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/1x1-paper.png",
        "sha256": "46b91debf434b5f7bb47ed123de5aadbaf3508312fe28882be010e77ed07e308"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/1x1-night.png",
        "sha256": "bf8c3fd72c25d51409cf614246b03eca7165d8685b52ddfd88026e8ec4d107f0"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/1x1-color.png",
        "sha256": "e5905bf8eeac5c7149fa3fdb7c477f40d31b5011da9dcc0b920713f879581dc8"
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
          "mg-ba-morph--16x9",
          "mg-ba-morph--9x16",
          "mg-ba-morph--1x1"
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
            "paperNight": 4.512912326388889,
            "paperColor": 3.9318305121527777,
            "region": {
              "left": 78,
              "top": 76,
              "width": 1319,
              "height": 1004
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 7.264784071180555,
            "paperColor": 8.29543728298611,
            "region": {
              "left": 10,
              "top": 169,
              "width": 1059,
              "height": 1676
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 6.905788845486111,
            "paperColor": 7.027398003472222,
            "region": {
              "left": 170,
              "top": 67,
              "width": 740,
              "height": 974
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
            "occupancy": 0.9030380413482267,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9037242404677922,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9050966387069233,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2072812342529606,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2080050239617455,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2130715519232387,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8721624223534866,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8757589684250474,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8748598319071572,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 91.03548177083333,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 91.03548177083333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/16x9-duration-90-frame-10.png",
                "sha256": "19ca29ea196d1c067d0f8215738e2ae11cbe4ddc47370141f63c2e219186fcd3",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/16x9-duration-90-frame-89.png",
                "sha256": "af6757120ce56931974c613769a49bbd970cf8050e37fb445faa73057960d2c3",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/16x9-duration-90-frame-79.png",
                "sha256": "af6757120ce56931974c613769a49bbd970cf8050e37fb445faa73057960d2c3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 91.03548177083333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/16x9-duration-900-frame-13.png",
                "sha256": "19ca29ea196d1c067d0f8215738e2ae11cbe4ddc47370141f63c2e219186fcd3",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/16x9-duration-900-frame-90.png",
                "sha256": "af6757120ce56931974c613769a49bbd970cf8050e37fb445faa73057960d2c3",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/16x9-duration-900-frame-792.png",
                "sha256": "af6757120ce56931974c613769a49bbd970cf8050e37fb445faa73057960d2c3",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/16x9-duration-900-frame-899.png",
                "sha256": "af6757120ce56931974c613769a49bbd970cf8050e37fb445faa73057960d2c3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 76.70496961805556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/9x16-duration-90-frame-10.png",
                "sha256": "6e65a53bd968de02a399fa8210cf6e07ee57e3c317f972396177b2172dcf0e1d",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/9x16-duration-90-frame-89.png",
                "sha256": "5606f755e1e8569c690f1a4c1e35d6d657c974a583dd8418a066dcd04ffefe16",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/9x16-duration-90-frame-79.png",
                "sha256": "5606f755e1e8569c690f1a4c1e35d6d657c974a583dd8418a066dcd04ffefe16",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 76.70496961805556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/9x16-duration-900-frame-13.png",
                "sha256": "6e65a53bd968de02a399fa8210cf6e07ee57e3c317f972396177b2172dcf0e1d",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/9x16-duration-900-frame-90.png",
                "sha256": "5606f755e1e8569c690f1a4c1e35d6d657c974a583dd8418a066dcd04ffefe16",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/9x16-duration-900-frame-792.png",
                "sha256": "5606f755e1e8569c690f1a4c1e35d6d657c974a583dd8418a066dcd04ffefe16",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/9x16-duration-900-frame-899.png",
                "sha256": "5606f755e1e8569c690f1a4c1e35d6d657c974a583dd8418a066dcd04ffefe16",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 83.24294704861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/1x1-duration-90-frame-10.png",
                "sha256": "7bc8f237dd9e54b93fc5536ebdce8f2331025fd40834bad853b88f041d8d2491",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/1x1-duration-90-frame-89.png",
                "sha256": "9b4919eedb8cdc168982f873aca0ea22961d4c00f13140af4403c452780a6ecf",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/1x1-duration-90-frame-79.png",
                "sha256": "9b4919eedb8cdc168982f873aca0ea22961d4c00f13140af4403c452780a6ecf",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 83.24294704861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/1x1-duration-900-frame-13.png",
                "sha256": "7bc8f237dd9e54b93fc5536ebdce8f2331025fd40834bad853b88f041d8d2491",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/1x1-duration-900-frame-90.png",
                "sha256": "9b4919eedb8cdc168982f873aca0ea22961d4c00f13140af4403c452780a6ecf",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/1x1-duration-900-frame-792.png",
                "sha256": "9b4919eedb8cdc168982f873aca0ea22961d4c00f13140af4403c452780a6ecf",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ba-morph/1x1-duration-900-frame-899.png",
                "sha256": "9b4919eedb8cdc168982f873aca0ea22961d4c00f13140af4403c452780a6ecf",
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
        "note": "A retro registration form morphs into a clean signup card; card readable in every brand."
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
      "bundleSha256": "ef15a5f701eac332fc9cece76eae96521f0896ca9754798bb3c8b1fbbb7f24ba",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ba-morph/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ba-morph/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ba-morph/16x9/detail.mp4",
      "bg": "#fae5d0",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3999a601ba8c989be7a05d062d1a47e7d1088e0880b2bc4fcf840de3fa694e51",
        "loop": "303f7dfe91692f6d3ee36f2c2d792ac1c3d189f53e92388f7d477102d107e4fd",
        "detail": "93fce25c9c09c2d940ad1f4845862d2964cdffcf2aea6202e2041ad9ebd79165"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ba-morph/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ba-morph/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ba-morph/9x16/detail.mp4",
      "bg": "#fae5d0",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9b629574ae12d859e4a7eb99b120e844a439760fc73110aeca66f27c93e10a6d",
        "loop": "36726b55e698b11898bcc715b5fd99b9351a933c8820c6669ce66cd655eee802",
        "detail": "6389a17bdc63af4a06176d4649fc00a2fddb7e3522571bb9149a031543c197e2"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ba-morph/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ba-morph/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ba-morph/1x1/detail.mp4",
      "bg": "#fae5d0",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "62527b347dc358556971cb6bee4a067df6ded0faaac0527bba8356f9164031c4",
        "loop": "93724afd25e01dc9201abf037f8fbd5d1f5f4e30ce7d03d1b4e991eeeb462b4f",
        "detail": "2435c8a3cc7c50ba50abaa8d67f27d663affb94a4acc77ab8e5dfdd23bbf5a5b"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ef15a5f701eac332fc9cece76eae96521f0896ca9754798bb3c8b1fbbb7f24ba/index.mjs",
    "sha256": "ef15a5f701eac332fc9cece76eae96521f0896ca9754798bb3c8b1fbbb7f24ba",
    "bytes": 173924,
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
    "at": "2026-10-09T03:38:06.352Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
