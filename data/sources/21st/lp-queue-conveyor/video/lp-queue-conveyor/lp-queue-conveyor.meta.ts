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
    "queue-conveyor",
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
    "title": "A place for every task",
    "subtitle": "A moving intake becomes a settled queue",
    "items": [
      "Research",
      "Outline",
      "Compose",
      "Review"
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
  "name": "Task Queue Conveyor",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-queue-conveyor",
    "bundleSha256": "a27a76c0340aaf0d5f2dbb359794cf35679bb4880a78985e353a36a1ae17fbc0",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:39:33.254Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/16x9-paper.png",
        "sha256": "2823d1b3e25da263792f4177a0c7c442dc0e0e70050b20ebaebd1986ed2f053e"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/16x9-night.png",
        "sha256": "2e553305f82604fe46761ba9b488f07ed4167424bad9d4c3f5ae274f4d47decb"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/16x9-color.png",
        "sha256": "a11a27b7b5ba612e8ae430cb030ea0e3217722795f694f89119c0c09f4e0e6a8"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/9x16-paper.png",
        "sha256": "941084e729ff296c18acb1f1df3f639743380c42bfcc75a249617ba52fbb0373"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/9x16-night.png",
        "sha256": "62551496884883d63c4ad60f48609abf5658a3c8aa0f277416cd6ea245f389c2"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/9x16-color.png",
        "sha256": "ef2f1a8acbedd7c30ec5188f1b8d045812bd1caf9593a49523dc8f4efebb8a4d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/1x1-paper.png",
        "sha256": "78b38ae5732c57c5570f14d1243a56c956002178afa3a5060ca58af9634d692c"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/1x1-night.png",
        "sha256": "00e78b3a8c1c770b3585b9a42deabcd086808c2b3652f1a8aaf28f09a2229724"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/1x1-color.png",
        "sha256": "558c122d6dbfe46dd9faa022e53ca3295a3e65577e4784eb412761c4b8646b73"
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
          "lp-queue-conveyor--16x9",
          "lp-queue-conveyor--9x16",
          "lp-queue-conveyor--1x1"
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
            "paperNight": 26.020345052083332,
            "paperColor": 9.503336588541666,
            "region": {
              "left": 230,
              "top": 138,
              "width": 1452,
              "height": 809
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 20.578504774305557,
            "paperColor": 10.379096137152779,
            "region": {
              "left": 103,
              "top": 198,
              "width": 873,
              "height": 1524
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 23.67217339409722,
            "paperColor": 8.806342230902779,
            "region": {
              "left": 126,
              "top": 312,
              "width": 823,
              "height": 459
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
            "occupancy": 0.8018523767531706,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8018523767531706,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8028447683085581,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9093177201436132,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9093177201436132,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9093177201436132,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4589933967414127,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4589933967414127,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4589933967414127,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 21.18337673611111,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 21.18337673611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/16x9-duration-150-frame-18.png",
                "sha256": "99d98214818f53302085b6c657f1b7adfa4f764404a0eaac324971e0f5b2e7c6",
                "alphaMass": 3010
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/16x9-duration-150-frame-132.png",
                "sha256": "88c9fe5be72057dde3cf0e21b6f48ca4d7e4644deb24790563b3ff236c8deec0",
                "alphaMass": 50964
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/16x9-duration-150-frame-149.png",
                "sha256": "88c9fe5be72057dde3cf0e21b6f48ca4d7e4644deb24790563b3ff236c8deec0",
                "alphaMass": 50964
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 21.18337673611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/16x9-duration-900-frame-19.png",
                "sha256": "99d98214818f53302085b6c657f1b7adfa4f764404a0eaac324971e0f5b2e7c6",
                "alphaMass": 3010
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/16x9-duration-900-frame-132.png",
                "sha256": "88c9fe5be72057dde3cf0e21b6f48ca4d7e4644deb24790563b3ff236c8deec0",
                "alphaMass": 50964
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/16x9-duration-900-frame-792.png",
                "sha256": "88c9fe5be72057dde3cf0e21b6f48ca4d7e4644deb24790563b3ff236c8deec0",
                "alphaMass": 50964
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/16x9-duration-900-frame-899.png",
                "sha256": "88c9fe5be72057dde3cf0e21b6f48ca4d7e4644deb24790563b3ff236c8deec0",
                "alphaMass": 50964
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 50.6376953125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/9x16-duration-150-frame-18.png",
                "sha256": "227c65006b487bfd0eaedf2b57e0bfbf489458568e66b68c8d85b865012a4c2b",
                "alphaMass": 1062
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/9x16-duration-150-frame-132.png",
                "sha256": "ff0dbfe387995cfa83354b063094146b84ae9c73fc36dc69a38615d45d888671",
                "alphaMass": 91543
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/9x16-duration-150-frame-149.png",
                "sha256": "ff0dbfe387995cfa83354b063094146b84ae9c73fc36dc69a38615d45d888671",
                "alphaMass": 91543
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 50.6376953125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/9x16-duration-900-frame-19.png",
                "sha256": "227c65006b487bfd0eaedf2b57e0bfbf489458568e66b68c8d85b865012a4c2b",
                "alphaMass": 1062
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/9x16-duration-900-frame-132.png",
                "sha256": "ff0dbfe387995cfa83354b063094146b84ae9c73fc36dc69a38615d45d888671",
                "alphaMass": 91543
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/9x16-duration-900-frame-792.png",
                "sha256": "ff0dbfe387995cfa83354b063094146b84ae9c73fc36dc69a38615d45d888671",
                "alphaMass": 91543
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/9x16-duration-900-frame-899.png",
                "sha256": "ff0dbfe387995cfa83354b063094146b84ae9c73fc36dc69a38615d45d888671",
                "alphaMass": 91543
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 14.23361545138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/1x1-duration-150-frame-18.png",
                "sha256": "405877ca64c9da5486793611d04e35736385ae7531e3764311bab9eb2b2089d8",
                "alphaMass": 1752
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/1x1-duration-150-frame-132.png",
                "sha256": "6ac286fa0e7a365c3d9b1b5fa1fee9287bb9d44668ce0c81117a4b0d61f3188f",
                "alphaMass": 28623
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/1x1-duration-150-frame-149.png",
                "sha256": "6ac286fa0e7a365c3d9b1b5fa1fee9287bb9d44668ce0c81117a4b0d61f3188f",
                "alphaMass": 28623
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 14.23361545138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/1x1-duration-900-frame-19.png",
                "sha256": "405877ca64c9da5486793611d04e35736385ae7531e3764311bab9eb2b2089d8",
                "alphaMass": 1752
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/1x1-duration-900-frame-132.png",
                "sha256": "6ac286fa0e7a365c3d9b1b5fa1fee9287bb9d44668ce0c81117a4b0d61f3188f",
                "alphaMass": 28623
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/1x1-duration-900-frame-792.png",
                "sha256": "6ac286fa0e7a365c3d9b1b5fa1fee9287bb9d44668ce0c81117a4b0d61f3188f",
                "alphaMass": 28623
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/lp-queue-conveyor/1x1-duration-900-frame-899.png",
                "sha256": "6ac286fa0e7a365c3d9b1b5fa1fee9287bb9d44668ce0c81117a4b0d61f3188f",
                "alphaMass": 28623
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
        "note": "Tasks ride a conveyor into a settled queue as brand-blue chips."
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
      "bundleSha256": "a27a76c0340aaf0d5f2dbb359794cf35679bb4880a78985e353a36a1ae17fbc0",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-queue-conveyor/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-queue-conveyor/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-queue-conveyor/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "75d684c42372a33510b97a93db914953bd3fe8cc9087728ccd9125cbf3819b6d",
        "loop": "757e87511e1a37be5c21dd6ca00a97ac1b6f61801fcb0661414d5e7ade892cc1",
        "detail": "2583f06a9da6c6b720e2a549f00f20fdc3a61385d3c69242cc6b2c5aef9d2920"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-queue-conveyor/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-queue-conveyor/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-queue-conveyor/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d75b2e754a6c592a389b1ec8b4e58e8012df648c2e5fc2f5049167d843ad3f0c",
        "loop": "d384aa345979fc99e410394caeee4813e5cb3be759805c8c8889af78ac3ab710",
        "detail": "ea905aa46bcdba97cda8f62b62395b135c04174d0e98bdda5334d8f8e026954b"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-queue-conveyor/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-queue-conveyor/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-queue-conveyor/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "bc642a0e17ae2bacfb06ecde4855ab784fe9f35f14bbf562536461435c47e8ce",
        "loop": "5831f4f3c5c5f336bdf7b008f07666648888721381e50920e656c92fb624eb14",
        "detail": "ee4712a1d14824be1e75b25717ad83e6fd91eeabefd8c44a2d539370c9da86c8"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/a27a76c0340aaf0d5f2dbb359794cf35679bb4880a78985e353a36a1ae17fbc0/index.mjs",
    "sha256": "a27a76c0340aaf0d5f2dbb359794cf35679bb4880a78985e353a36a1ae17fbc0",
    "bytes": 298394,
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
    "at": "2026-10-09T04:21:11.976Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
