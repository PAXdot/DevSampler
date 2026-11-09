// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "background",
  "category": "backgrounds/language",
  "job": "backgrounds",
  "language": "kinetic-poster",
  "mechanic": [
    "band-interlock"
  ],
  "looks": [
    {
      "id": "default",
      "name": "Product research example",
      "props": {}
    },
    {
      "id": "alternate",
      "name": "Compact layout",
      "description": "Content or composition changes; palette remains owned by the brand.",
      "props": {
        "density": 4
      }
    }
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "catalog-language",
    "kinetic-poster",
    "backgrounds",
    "band-interlock"
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
      "in": 48,
      "out": 0
    },
    "markers": {
      "settled": 72
    },
    "beats": [
      0,
      18,
      36,
      54,
      72
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
      "key": "density",
      "type": "number",
      "role": "density"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.accent",
    "bodyFont": "fonts.body",
    "numeralsFont": "fonts.numerals"
  },
  "motionBeats": [
    {
      "target": "band-interlock",
      "prop": "transform",
      "from": "enter",
      "settledBy": 72,
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
    "sourceUrl": "docs/research/video-catalog-2026-10-06/plan.md"
  },
  "defaults": {
    "ink": "#FFFFFF",
    "accent": "#3D63FF",
    "secondary": "#898B8F",
    "paper": "#0B0B10",
    "displayFont": "Space Grotesk",
    "bodyFont": "Inter",
    "numeralsFont": "IBM Plex Mono",
    "paintBackground": false,
    "motion": "default",
    "density": 7
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
      "brand": "fonts.accent"
    },
    {
      "key": "bodyFont",
      "label": "Body font",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "numeralsFont",
      "label": "Numerals font",
      "type": "font",
      "brand": "fonts.numerals"
    },
    {
      "key": "paintBackground",
      "label": "Paint background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "motion",
      "label": "Motion",
      "type": "select",
      "options": [
        "calm",
        "default",
        "punchy"
      ]
    },
    {
      "key": "density",
      "label": "Density",
      "type": "number",
      "step": 1,
      "min": 3,
      "max": 12,
      "role": "density"
    }
  ],
  "name": "Graphic poster bands interlock through diagonal masks",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "language-kinetic-poster-backgrounds",
    "bundleSha256": "1008b328b1384ca499c2d64dabe833cdcd2ff2f84196c6b26504000acf4694ea",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:36:51.121Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/16x9-paper.png",
        "sha256": "2d59149859b6307d4718dad693753793bc0df82b95d5711bef6582ab79e5c66a"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/16x9-night.png",
        "sha256": "12283d828c63c37566918524cacfb39e36c816543e31a4b141c13b03fb43bbb2"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/16x9-color.png",
        "sha256": "2f5e5b4583f5606c24db2f0782ac305af846dd1743596d21aa34008748752a2e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/9x16-paper.png",
        "sha256": "307f9ad0bad80aa941bfb5711202d45b18e8f818d95b71a7c6e1dc96ee3d5ded"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/9x16-night.png",
        "sha256": "9f6193df730f0541dbb142ba4ef8a2450350e0fed0186353c07beafc1b43a1dd"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/9x16-color.png",
        "sha256": "0ffbc1b40ffbfb36c2b99a43d0a99a01ae646a09a46e8e822b1727b6de171e3e"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/1x1-paper.png",
        "sha256": "35161ba11b1c8ee06f14e83f84d8409ebca3cdb630471ebf954bd87a3ca4ca46"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/1x1-night.png",
        "sha256": "7c10a56675303fc72861c27493c0bb8bf962b5c77c3365bfde592831d614374a"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/1x1-color.png",
        "sha256": "024d021725e1d4c3cd31a0edb5900fd5947216e753578c06de2ad6a9766528bf"
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
          "language-kinetic-poster-backgrounds--16x9",
          "language-kinetic-poster-backgrounds--9x16",
          "language-kinetic-poster-backgrounds--1x1"
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
            "paperNight": 17.892957899305557,
            "paperColor": 32.243326822916664,
            "region": {
              "left": 154,
              "top": 97,
              "width": 1612,
              "height": 886
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 18.26486545138889,
            "paperColor": 33.07139756944444,
            "region": {
              "left": 86,
              "top": 173,
              "width": 908,
              "height": 1574
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 16.32476128472222,
            "paperColor": 29.379069010416668,
            "region": {
              "left": 86,
              "top": 97,
              "width": 908,
              "height": 886
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
            "errors": [
              "No measured content slots"
            ],
            "pending": true,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "errors": [
              "No measured content slots"
            ],
            "pending": true,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "errors": [
              "No measured content slots"
            ],
            "pending": true,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "errors": [
              "No measured content slots"
            ],
            "pending": true,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "errors": [
              "No measured content slots"
            ],
            "pending": true,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "errors": [
              "No measured content slots"
            ],
            "pending": true,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "errors": [
              "No measured content slots"
            ],
            "pending": true,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "errors": [
              "No measured content slots"
            ],
            "pending": true,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "errors": [
              "No measured content slots"
            ],
            "pending": true,
            "note": "Non-text block"
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 91.25564236111111,
        "frames": [
          10,
          72,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 91.92035590277777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/16x9-duration-90-frame-10.png",
                "sha256": "ce9b8a02f280141fb6e1e324c01a0afb7bf95dd0a90b0b2b5eb3dfc5f0b0580b",
                "alphaMass": 7935
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/16x9-duration-90-frame-72.png",
                "sha256": "cffb6aa2291fd55c17a8217bb9a00be0e4ebe8c7dc7c2196f87a555976fb46a7",
                "alphaMass": 259403
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/16x9-duration-90-frame-79.png",
                "sha256": "cffb6aa2291fd55c17a8217bb9a00be0e4ebe8c7dc7c2196f87a555976fb46a7",
                "alphaMass": 259403
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/16x9-duration-90-frame-89.png",
                "sha256": "cffb6aa2291fd55c17a8217bb9a00be0e4ebe8c7dc7c2196f87a555976fb46a7",
                "alphaMass": 259403
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 91.25564236111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/16x9-duration-900-frame-10.png",
                "sha256": "eae5df7ff29c3b20c1c1a490e3953deb1e0540a2da5b9fed3776abcb37e11862",
                "alphaMass": 4117
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/16x9-duration-900-frame-72.png",
                "sha256": "cffb6aa2291fd55c17a8217bb9a00be0e4ebe8c7dc7c2196f87a555976fb46a7",
                "alphaMass": 259403
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/16x9-duration-900-frame-792.png",
                "sha256": "cffb6aa2291fd55c17a8217bb9a00be0e4ebe8c7dc7c2196f87a555976fb46a7",
                "alphaMass": 259403
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/16x9-duration-900-frame-899.png",
                "sha256": "cffb6aa2291fd55c17a8217bb9a00be0e4ebe8c7dc7c2196f87a555976fb46a7",
                "alphaMass": 259403
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 95.88563368055556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/9x16-duration-90-frame-10.png",
                "sha256": "21f69e2c203e54edfef23a2b64aee46b6174affc5558c703b2bc65c1d6ecd7e3",
                "alphaMass": 8426
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/9x16-duration-90-frame-72.png",
                "sha256": "3d6aafaf44bf2325bd4ad6bb891adc5379c5eb9a671a6907ed8a34f6455cdc42",
                "alphaMass": 265970
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/9x16-duration-90-frame-79.png",
                "sha256": "3d6aafaf44bf2325bd4ad6bb891adc5379c5eb9a671a6907ed8a34f6455cdc42",
                "alphaMass": 265970
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/9x16-duration-90-frame-89.png",
                "sha256": "3d6aafaf44bf2325bd4ad6bb891adc5379c5eb9a671a6907ed8a34f6455cdc42",
                "alphaMass": 265970
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 96.50249565972223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/9x16-duration-900-frame-10.png",
                "sha256": "6d7528b2c7fa71ae7066960fe03cc04597ebeea90c575242927becb1385f938b",
                "alphaMass": 4138
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/9x16-duration-900-frame-72.png",
                "sha256": "3d6aafaf44bf2325bd4ad6bb891adc5379c5eb9a671a6907ed8a34f6455cdc42",
                "alphaMass": 265970
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/9x16-duration-900-frame-792.png",
                "sha256": "3d6aafaf44bf2325bd4ad6bb891adc5379c5eb9a671a6907ed8a34f6455cdc42",
                "alphaMass": 265970
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/9x16-duration-900-frame-899.png",
                "sha256": "3d6aafaf44bf2325bd4ad6bb891adc5379c5eb9a671a6907ed8a34f6455cdc42",
                "alphaMass": 265970
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 85.72026909722223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/1x1-duration-90-frame-10.png",
                "sha256": "1d9b5f6078a8f889ba4982f1cf585053a88a28f8c1ee6f72cc68283b0c2b261c",
                "alphaMass": 8354
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/1x1-duration-90-frame-72.png",
                "sha256": "d57369cc4a72450a3542788de232442845dd39ddec555c73940255cf3a56bba4",
                "alphaMass": 233366
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/1x1-duration-90-frame-79.png",
                "sha256": "d57369cc4a72450a3542788de232442845dd39ddec555c73940255cf3a56bba4",
                "alphaMass": 233366
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/1x1-duration-90-frame-89.png",
                "sha256": "d57369cc4a72450a3542788de232442845dd39ddec555c73940255cf3a56bba4",
                "alphaMass": 233366
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 85.67057291666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/1x1-duration-900-frame-10.png",
                "sha256": "23a8b0e727f3c4db68202957b923506363dab36636dc48f3924c9ea22442e835",
                "alphaMass": 4103
              },
              {
                "frame": 72,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/1x1-duration-900-frame-72.png",
                "sha256": "d57369cc4a72450a3542788de232442845dd39ddec555c73940255cf3a56bba4",
                "alphaMass": 233366
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/1x1-duration-900-frame-792.png",
                "sha256": "d57369cc4a72450a3542788de232442845dd39ddec555c73940255cf3a56bba4",
                "alphaMass": 233366
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/language-kinetic-poster-backgrounds/1x1-duration-900-frame-899.png",
                "sha256": "d57369cc4a72450a3542788de232442845dd39ddec555c73940255cf3a56bba4",
                "alphaMass": 233366
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "backgrounds",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Poster bands interlock through diagonal masks in brand blue and neutral gray."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 14,
        "compared": 14,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "1008b328b1384ca499c2d64dabe833cdcd2ff2f84196c6b26504000acf4694ea",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/language-kinetic-poster-backgrounds/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/language-kinetic-poster-backgrounds/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/language-kinetic-poster-backgrounds/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 72,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "63cbec26e88cd25092e4e347c1537525ccaf8d3804ca51fe4f0d711669701e2e",
        "loop": "87511f24d8ef680027137e96fccf8312d05dd1cb0d7beccff0a9bf6761993421",
        "detail": "b4af1d5bf6a0b0b22d224f573d70b77ecf386a2adcd66af5be7af4e70e35c511"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/language-kinetic-poster-backgrounds/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/language-kinetic-poster-backgrounds/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/language-kinetic-poster-backgrounds/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 72,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "b90392e6ca0b9cbc83a00f7a670ed6f7183e4cb506521682fd44accf24200186",
        "loop": "47a2916d7f047c4558eca4a6d7a56af3ed574f54b67e98c1638fbd121a733a70",
        "detail": "9b0cc2638bbe5f17b2a6928fca59e057d500f755a8f1cd91f54f6ab92dfe6257"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/language-kinetic-poster-backgrounds/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/language-kinetic-poster-backgrounds/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/language-kinetic-poster-backgrounds/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 72,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7d70570a09f164085d24546d221e05ac6ec2e1c1596abd71f03d9142552d75a6",
        "loop": "71596bcd0fcb9bfb2c7fe99a4eab6ef02a5168ecb31d4bb017c9cf391af1e075",
        "detail": "c2d95426acda0322e916c9f4f0db49066bae18677c8b01be0acc7cfbfe90ff07"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/1008b328b1384ca499c2d64dabe833cdcd2ff2f84196c6b26504000acf4694ea/index.mjs",
    "sha256": "1008b328b1384ca499c2d64dabe833cdcd2ff2f84196c6b26504000acf4694ea",
    "bytes": 908523,
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
    "at": "2026-10-09T03:17:11.735Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
