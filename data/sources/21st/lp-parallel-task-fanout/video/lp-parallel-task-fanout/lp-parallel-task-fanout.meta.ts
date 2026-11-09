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
    "parallel-task-fanout",
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
    "title": "One brief. Four specialists.",
    "subtitle": "Independent work joins a common outcome",
    "items": [
      "Research",
      "Design",
      "Code",
      "Quality"
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
  "name": "Parallel Task Fanout",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-parallel-task-fanout",
    "bundleSha256": "df187717ae86d13ad81709d72ffac72d59f686d9c4bf34510bdc2be2c339617b",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:38:52.348Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/16x9-paper.png",
        "sha256": "f6ed946aa047f2532edfc142629d2f9aed77898295c112c3fa81b32571b1bb68"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/16x9-night.png",
        "sha256": "77a42f77085c4a6816ba6e48fcca5834898379a8edc8587139187e1af0ab0408"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/16x9-color.png",
        "sha256": "864933cb92662cdc3e7d86353da857af49435dc218f97db32432cba25555ec94"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/9x16-paper.png",
        "sha256": "0f10ddf54123b07873bd153b8decd3048bca6adcafc0332e32295533478efd18"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/9x16-night.png",
        "sha256": "b2dcf08baeb24b32da5fbf09b6e53d01f2b4f4c89716eae9041ccddf49e86072"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/9x16-color.png",
        "sha256": "11d112c70d9c94ecf223ad919a5167722e60ecb2d0894a03b657d1ec710a213a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/1x1-paper.png",
        "sha256": "ab269c0deb3c9b80f8f291c1bdf8c197624df22136605fd6ed49d09d503d7531"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/1x1-night.png",
        "sha256": "1bde4082a423df5b3c3a930b1818736e2df4ba382acf69f67114b40a5d3e6345"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/1x1-color.png",
        "sha256": "52ee34ca62edc4297f9552c1cc65fc86eeb2474a5658e94064c3b0ff09ffb2c7"
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
          "lp-parallel-task-fanout--16x9",
          "lp-parallel-task-fanout--9x16",
          "lp-parallel-task-fanout--1x1"
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
            "paperNight": 41.38487413194444,
            "paperColor": 5.578993055555555,
            "region": {
              "left": 239,
              "top": 153,
              "width": 1443,
              "height": 757
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 135.80143229166666,
            "paperColor": 12.033284505208334,
            "region": {
              "left": 112,
              "top": 229,
              "width": 855,
              "height": 1398
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 41.257568359375,
            "paperColor": 5.518012152777778,
            "region": {
              "left": 131,
              "top": 320,
              "width": 818,
              "height": 430
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
            "occupancy": 0.7465839586220292,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7465839586220292,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7465839586220292,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8169391888699926,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8169391888699926,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8169391888699926,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.42738145784148146,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.42738145784148146,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.42738145784148146,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 43.164713541666664,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 43.164713541666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/16x9-duration-150-frame-18.png",
                "sha256": "5443038129caf7dd9cf6709a8f8f34f35b4a973462aa39848381241292d310e0",
                "alphaMass": 8963
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/16x9-duration-150-frame-132.png",
                "sha256": "f26462ec5caaf99eccf9b6ce4052fc0019291977ca2ac692435cd9b6be4da5de",
                "alphaMass": 69281
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/16x9-duration-150-frame-149.png",
                "sha256": "f26462ec5caaf99eccf9b6ce4052fc0019291977ca2ac692435cd9b6be4da5de",
                "alphaMass": 69281
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 43.164713541666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/16x9-duration-900-frame-19.png",
                "sha256": "5443038129caf7dd9cf6709a8f8f34f35b4a973462aa39848381241292d310e0",
                "alphaMass": 8963
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/16x9-duration-900-frame-132.png",
                "sha256": "f26462ec5caaf99eccf9b6ce4052fc0019291977ca2ac692435cd9b6be4da5de",
                "alphaMass": 69281
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/16x9-duration-900-frame-792.png",
                "sha256": "f26462ec5caaf99eccf9b6ce4052fc0019291977ca2ac692435cd9b6be4da5de",
                "alphaMass": 69281
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/16x9-duration-900-frame-899.png",
                "sha256": "f26462ec5caaf99eccf9b6ce4052fc0019291977ca2ac692435cd9b6be4da5de",
                "alphaMass": 69281
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 131.44509548611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/9x16-duration-150-frame-18.png",
                "sha256": "6b74e4b7cc814ed8ecf90f46a483e9be7e9cfe8102ef369b89c0ce89cdd18489",
                "alphaMass": 2855
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/9x16-duration-150-frame-132.png",
                "sha256": "30d97422a7f7be7ded7cf3015d8a402c96842def359b1d4c97f0d0d37f3ab76f",
                "alphaMass": 264862
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/9x16-duration-150-frame-149.png",
                "sha256": "30d97422a7f7be7ded7cf3015d8a402c96842def359b1d4c97f0d0d37f3ab76f",
                "alphaMass": 264862
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 131.44509548611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/9x16-duration-900-frame-19.png",
                "sha256": "6b74e4b7cc814ed8ecf90f46a483e9be7e9cfe8102ef369b89c0ce89cdd18489",
                "alphaMass": 2855
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/9x16-duration-900-frame-132.png",
                "sha256": "30d97422a7f7be7ded7cf3015d8a402c96842def359b1d4c97f0d0d37f3ab76f",
                "alphaMass": 264862
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/9x16-duration-900-frame-792.png",
                "sha256": "30d97422a7f7be7ded7cf3015d8a402c96842def359b1d4c97f0d0d37f3ab76f",
                "alphaMass": 264862
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/9x16-duration-900-frame-899.png",
                "sha256": "30d97422a7f7be7ded7cf3015d8a402c96842def359b1d4c97f0d0d37f3ab76f",
                "alphaMass": 264862
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 30.05859375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/1x1-duration-150-frame-18.png",
                "sha256": "e5639003de762c2cca0ce9fe334036b6b781e8d2e443b155fbbf2a9b047052ae",
                "alphaMass": 5056
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/1x1-duration-150-frame-132.png",
                "sha256": "df423ce1b33bded7718da9a6b42cfc94e8fccc0d1e675baf2fef44a4ed0dfeb0",
                "alphaMass": 39833
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/1x1-duration-150-frame-149.png",
                "sha256": "df423ce1b33bded7718da9a6b42cfc94e8fccc0d1e675baf2fef44a4ed0dfeb0",
                "alphaMass": 39833
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 30.05859375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/1x1-duration-900-frame-19.png",
                "sha256": "e5639003de762c2cca0ce9fe334036b6b781e8d2e443b155fbbf2a9b047052ae",
                "alphaMass": 5056
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/1x1-duration-900-frame-132.png",
                "sha256": "df423ce1b33bded7718da9a6b42cfc94e8fccc0d1e675baf2fef44a4ed0dfeb0",
                "alphaMass": 39833
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/1x1-duration-900-frame-792.png",
                "sha256": "36ac0eef2dae05fbdbc7020e7199e814c15cc58501269c4853ba9722e214fbc8",
                "alphaMass": 39833
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-parallel-task-fanout/1x1-duration-900-frame-899.png",
                "sha256": "36ac0eef2dae05fbdbc7020e7199e814c15cc58501269c4853ba9722e214fbc8",
                "alphaMass": 39833
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
        "note": "A hub fans four parallel tasks out and joins them; links in brand blue."
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
      "bundleSha256": "df187717ae86d13ad81709d72ffac72d59f686d9c4bf34510bdc2be2c339617b",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-parallel-task-fanout/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-parallel-task-fanout/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-parallel-task-fanout/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d4dc0f9dfd9016c3e4a721a66afc00134a1b7d3db31646d7bb47557ae1c38945",
        "loop": "1d5cd653014cba63e6a8d06812a380cceacfd89432fd8908aaad93a95e15da45",
        "detail": "19ede29db8a37306a7627a9ef262e0c63451385b095c05dd60884e298930e4ff"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-parallel-task-fanout/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-parallel-task-fanout/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-parallel-task-fanout/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ab15b58ecd5a369e88fa6797600c992f475257108a060bc6d101c1dfe523c394",
        "loop": "1133bcf1270f7efa73330da1cc76603a85b905bb66549ac922bd336db736cb31",
        "detail": "42fc298a2abe7af2fdd48da22db6651d79879c723a3123a8562fbd0971d52ec4"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-parallel-task-fanout/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-parallel-task-fanout/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-parallel-task-fanout/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a9e51fbb1c5c2c176d8de3497a38d89b06cc996b75ce44cf05909ddc7ec4a097",
        "loop": "145f687575a0e325835d46818b5f7f3e7e3c16ac3d45f8395480cfcaad4536db",
        "detail": "8dc0f8d5384db2556c4ec4a29d936f1b658afef22d424b05f5eb954c3adb5161"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/df187717ae86d13ad81709d72ffac72d59f686d9c4bf34510bdc2be2c339617b/index.mjs",
    "sha256": "df187717ae86d13ad81709d72ffac72d59f686d9c4bf34510bdc2be2c339617b",
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
    "at": "2026-10-09T03:29:37.809Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
