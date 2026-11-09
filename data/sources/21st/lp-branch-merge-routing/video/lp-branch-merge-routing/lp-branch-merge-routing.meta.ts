// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "workflow",
  "job": "process",
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
    "branch-merge-routing",
    "systems",
    "workflow",
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
    "title": "Many paths. One release.",
    "subtitle": "Parallel work becomes a shared result",
    "items": [
      "Design",
      "Build",
      "Review",
      "Release"
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
  "name": "Branch and Merge Routing",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-branch-merge-routing",
    "bundleSha256": "91a989a09be31a5244016fd773eeaa38575b88c8e7a497b45f50b643b46ddda5",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:37:30.322Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/16x9-paper.png",
        "sha256": "b003511c9029ea04add9d104d195450495fb6aed129e0a4e431aea8c291d64de"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/16x9-night.png",
        "sha256": "d073eedbc19f744fe99d252569cb5d783c49183efa4015b5ff1b7c901bbe84fc"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/16x9-color.png",
        "sha256": "febaeed97064c613b4f4a67c2794e2cd9cb6774609da329ddfea92779945b92e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/9x16-paper.png",
        "sha256": "b31ec691b093727d8f38ab8aa0cb97ed1ec7a60835e8883031f6e8d6d6baa38b"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/9x16-night.png",
        "sha256": "69574ad49fddeedcf983e06aab294a4fdebddb1ebe623e51a3af0bfbf3e15bfc"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/9x16-color.png",
        "sha256": "653413c74c4240a6ad9c937fbd3935204f14f4f965a0ad02e95b387ff1bcb9b8"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/1x1-paper.png",
        "sha256": "afdc8bb82d5882abfda3ccc5b865aa10e6a69a302e6e0ed7e0cc1f24a32294ea"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/1x1-night.png",
        "sha256": "b075f8ce18ec803aec1c4d0e8e04ca5419966041d318ce5a812cbe96bf8363dc"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/1x1-color.png",
        "sha256": "f134ed8dcd46d822437951893504787ed5be95e0dbade64e9b66affc0a54829c"
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
          "lp-branch-merge-routing--16x9",
          "lp-branch-merge-routing--9x16",
          "lp-branch-merge-routing--1x1"
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
            "paperNight": 16.68378363715278,
            "paperColor": 8.761854383680555,
            "region": {
              "left": 207,
              "top": 159,
              "width": 1491,
              "height": 681
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 21.84380425347222,
            "paperColor": 12.826171875,
            "region": {
              "left": 119,
              "top": 192,
              "width": 839,
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
            "paperNight": 16.524169921875,
            "paperColor": 9.055853949652779,
            "region": {
              "left": 112,
              "top": 323,
              "width": 846,
              "height": 387
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
            "occupancy": 0.6939708030202824,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6939708030202824,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6939708030202824,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8807844125304445,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8807844125304445,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8807844125304445,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.39780958679768214,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.39780958679768214,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.39780958679768214,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 39.06206597222222,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 40.05479600694444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/16x9-duration-150-frame-18.png",
                "sha256": "5cf0cbf9eae8af9e25e5322dfa8841dd689f9a9e0ee8f85ca027e15da32e343b",
                "alphaMass": 2802
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/16x9-duration-150-frame-132.png",
                "sha256": "19a150774cd0d8f58269de9d6e78657681a4934d6e015794e89035ab9a125700",
                "alphaMass": 95413
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/16x9-duration-150-frame-149.png",
                "sha256": "19a150774cd0d8f58269de9d6e78657681a4934d6e015794e89035ab9a125700",
                "alphaMass": 95413
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 39.06206597222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/16x9-duration-900-frame-19.png",
                "sha256": "26f696d3dae9bbd2b3a521319a6d8840942cafca211d5f6c76b7186f99816285",
                "alphaMass": 4004
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/16x9-duration-900-frame-132.png",
                "sha256": "19a150774cd0d8f58269de9d6e78657681a4934d6e015794e89035ab9a125700",
                "alphaMass": 95413
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/16x9-duration-900-frame-792.png",
                "sha256": "19a150774cd0d8f58269de9d6e78657681a4934d6e015794e89035ab9a125700",
                "alphaMass": 95413
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/16x9-duration-900-frame-899.png",
                "sha256": "19a150774cd0d8f58269de9d6e78657681a4934d6e015794e89035ab9a125700",
                "alphaMass": 95413
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 66.12890625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/9x16-duration-150-frame-18.png",
                "sha256": "52c5a68f3f72ed8c71df65863580a1f11617fd09b62f814e522be282b45df4f4",
                "alphaMass": 4227
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/9x16-duration-150-frame-132.png",
                "sha256": "7a9cc71d0ce7e98f377f2b1b17eae3e40e621a71c220f83438a544a2e7f8857b",
                "alphaMass": 138670
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/9x16-duration-150-frame-149.png",
                "sha256": "7a9cc71d0ce7e98f377f2b1b17eae3e40e621a71c220f83438a544a2e7f8857b",
                "alphaMass": 138670
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 63.04698350694444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/9x16-duration-900-frame-19.png",
                "sha256": "d108ad309df20853c0df4a721f803b768df7090dd22a1826069e6c2c790d4cbe",
                "alphaMass": 6186
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/9x16-duration-900-frame-132.png",
                "sha256": "7a9cc71d0ce7e98f377f2b1b17eae3e40e621a71c220f83438a544a2e7f8857b",
                "alphaMass": 138670
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/9x16-duration-900-frame-792.png",
                "sha256": "7a9cc71d0ce7e98f377f2b1b17eae3e40e621a71c220f83438a544a2e7f8857b",
                "alphaMass": 138670
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/9x16-duration-900-frame-899.png",
                "sha256": "7a9cc71d0ce7e98f377f2b1b17eae3e40e621a71c220f83438a544a2e7f8857b",
                "alphaMass": 138670
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 27.32085503472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/1x1-duration-150-frame-18.png",
                "sha256": "e3b5d4f7384fe303207933a90b2b0011b8b3b0d6fd27b04826eb177ed9a8bca0",
                "alphaMass": 1583
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/1x1-duration-150-frame-132.png",
                "sha256": "23c594f0cf1dc48ff3234f86cfba18edf9d46980e4b76ccccf075a118f021937",
                "alphaMass": 53955
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/1x1-duration-150-frame-149.png",
                "sha256": "23c594f0cf1dc48ff3234f86cfba18edf9d46980e4b76ccccf075a118f021937",
                "alphaMass": 53955
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 26.229166666666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/1x1-duration-900-frame-19.png",
                "sha256": "742c674a938ff9ae48442af6a7067f1c0b68e3612c8c364d8c5beb48b67bd2a8",
                "alphaMass": 2304
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/1x1-duration-900-frame-132.png",
                "sha256": "23c594f0cf1dc48ff3234f86cfba18edf9d46980e4b76ccccf075a118f021937",
                "alphaMass": 53955
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/1x1-duration-900-frame-792.png",
                "sha256": "23c594f0cf1dc48ff3234f86cfba18edf9d46980e4b76ccccf075a118f021937",
                "alphaMass": 53955
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-branch-merge-routing/1x1-duration-900-frame-899.png",
                "sha256": "23c594f0cf1dc48ff3234f86cfba18edf9d46980e4b76ccccf075a118f021937",
                "alphaMass": 53955
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "process",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "One brief branches into four brand-blue steps that merge into a shared result."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 15,
        "compared": 15,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "91a989a09be31a5244016fd773eeaa38575b88c8e7a497b45f50b643b46ddda5",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-branch-merge-routing/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-branch-merge-routing/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-branch-merge-routing/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "94d68c600f83df793e65375a659255298de44f564fd7a5c8536518b9adfcb95b",
        "loop": "9d14bf1a5bc653a21832d58d3bd501117f86cb329ecd03bee6edbaf8466ce57d",
        "detail": "fc44259439b5662abc64da5b06969c9f1a64cacff705da4cbf2bf7375403c455"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-branch-merge-routing/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-branch-merge-routing/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-branch-merge-routing/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9c92664c9374c9f6671c9d146d170db1f31c669a08ab81f3ff069ed17a2d4d7f",
        "loop": "049399a43e29fcfcb9400612a578c184a8ebc7bb14a2733411c05b912c459342",
        "detail": "e99c2438f74870b58de4206fa5d56cab6db3f483eec1f3ae34bea177093ebd63"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-branch-merge-routing/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-branch-merge-routing/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-branch-merge-routing/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f3c5bc89908d1c8db3ffced32960dd63c21efc4d530a2bf76ec87487ca616d5a",
        "loop": "6e5ff9582047bbd762ed7dc4907ec35e8b0d22c88bc4f015ddde7faffbf3dd13",
        "detail": "a3160d1d1ac6b3914bcf322a5fc4ff292f3f8c778901bd853ababd13bbf1876b"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/91a989a09be31a5244016fd773eeaa38575b88c8e7a497b45f50b643b46ddda5/index.mjs",
    "sha256": "91a989a09be31a5244016fd773eeaa38575b88c8e7a497b45f50b643b46ddda5",
    "bytes": 298424,
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
    "at": "2026-10-09T03:20:54.220Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
