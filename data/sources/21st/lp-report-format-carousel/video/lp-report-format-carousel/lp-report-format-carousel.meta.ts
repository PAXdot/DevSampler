// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data-output",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "assemble"
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
    "report-format-carousel",
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
    "title": "The same idea, every format",
    "subtitle": "A report moves through useful deliverables",
    "items": [
      "Report",
      "Slides",
      "Table",
      "Memo"
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
  "name": "Report Format Carousel",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-report-format-carousel",
    "bundleSha256": "074934e58cf4a79a58036cd32c17fbdeab302f124e61973c6bb614dfd69b7465",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:40:21.721Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/16x9-paper.png",
        "sha256": "4493238f46135f056279da9f1218c06c7a536de2d8c9c3618b27f2cd218eac32"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/16x9-night.png",
        "sha256": "1b1fd2015a37769458004a79d43e85b0c258675d44fbe7e4463601261df93083"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/16x9-color.png",
        "sha256": "9f933109a685a8a357f2989d4c907283c6a68237d8305cffedbf4ee1e27aab6d"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/9x16-paper.png",
        "sha256": "e942943e9a1ac7dace0ad080dc8b8b162b752547766c869eab2fa4693296237d"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/9x16-night.png",
        "sha256": "065ff48beff9945b6b16387f89151aa7811cb36bab272bdc5add66266a74d836"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/9x16-color.png",
        "sha256": "cb1e8648bfc035876c925f5079543d437f91f361fa0053490afa96760e2a07f9"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/1x1-paper.png",
        "sha256": "8b79cc82af02d210871c1d1e064efb8f86f3e3059aad288b40683f718b2ed1a6"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/1x1-night.png",
        "sha256": "ed65b9e08ae5ae068c0b0bbfb2d48abf79c91dc1c31cccea6b4648151ee3bce8"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/1x1-color.png",
        "sha256": "5fc861446ef8a47f5d946c035a3db7bcd2707688f42b1513093035959d1e9d64"
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
          "lp-report-format-carousel--16x9",
          "lp-report-format-carousel--9x16",
          "lp-report-format-carousel--1x1"
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
            "paperNight": 102.57267252604167,
            "paperColor": 9.283338758680555,
            "region": {
              "left": 160,
              "top": 154,
              "width": 1413,
              "height": 802
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 137.94571940104166,
            "paperColor": 13.817301432291666,
            "region": {
              "left": 108,
              "top": 192,
              "width": 863,
              "height": 1517
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 138.58192274305554,
            "paperColor": 13.46603732638889,
            "region": {
              "left": 108,
              "top": 108,
              "width": 863,
              "height": 845
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
            "occupancy": 0.7745206010645,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7745206010645,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7745206010645,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8947728959768065,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8947728959768065,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8947728959768065,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.886056511653587,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.886056511653587,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.886056511653587,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 55.220052083333336,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 54.18543836805556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/16x9-duration-150-frame-18.png",
                "sha256": "eb7217554cdaa73997edd61c42f61dbd9a7b4b9901f72e58d0eacae25ae08168",
                "alphaMass": 25995
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/16x9-duration-150-frame-132.png",
                "sha256": "3d0e754781b1d34dce8469783764a4fb8136866d0ecb2c71ba60b979419fe8d0",
                "alphaMass": 175454
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/16x9-duration-150-frame-149.png",
                "sha256": "3d0e754781b1d34dce8469783764a4fb8136866d0ecb2c71ba60b979419fe8d0",
                "alphaMass": 175454
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 55.220052083333336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/16x9-duration-900-frame-19.png",
                "sha256": "34a3d97b5daa2c220adfe31ddf3adffb19019ed1e3ae0f0bf5c529e0197b6e26",
                "alphaMass": 26771
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/16x9-duration-900-frame-132.png",
                "sha256": "3d0e754781b1d34dce8469783764a4fb8136866d0ecb2c71ba60b979419fe8d0",
                "alphaMass": 175454
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/16x9-duration-900-frame-792.png",
                "sha256": "3d0e754781b1d34dce8469783764a4fb8136866d0ecb2c71ba60b979419fe8d0",
                "alphaMass": 175454
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/16x9-duration-900-frame-899.png",
                "sha256": "3d0e754781b1d34dce8469783764a4fb8136866d0ecb2c71ba60b979419fe8d0",
                "alphaMass": 175454
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 58.09266493055556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/9x16-duration-150-frame-18.png",
                "sha256": "c1e09feca4217b0a33e8dbb03f1ad659395a4cca8a6906b63d3df66761d90f65",
                "alphaMass": 42005
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/9x16-duration-150-frame-132.png",
                "sha256": "8904b20f035e35936952badda1d1694f46c000d5c8cd6aa23479007dd64d9b86",
                "alphaMass": 326316
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/9x16-duration-150-frame-149.png",
                "sha256": "8904b20f035e35936952badda1d1694f46c000d5c8cd6aa23479007dd64d9b86",
                "alphaMass": 326316
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 53.85796440972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/9x16-duration-900-frame-19.png",
                "sha256": "2935c032e84cbe1cee59b145610d75db046fb8f20559a2d213a29d5df6f1eda8",
                "alphaMass": 44129
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/9x16-duration-900-frame-132.png",
                "sha256": "8904b20f035e35936952badda1d1694f46c000d5c8cd6aa23479007dd64d9b86",
                "alphaMass": 326316
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/9x16-duration-900-frame-792.png",
                "sha256": "8904b20f035e35936952badda1d1694f46c000d5c8cd6aa23479007dd64d9b86",
                "alphaMass": 326316
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/9x16-duration-900-frame-899.png",
                "sha256": "8904b20f035e35936952badda1d1694f46c000d5c8cd6aa23479007dd64d9b86",
                "alphaMass": 326316
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 58.03125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/1x1-duration-150-frame-18.png",
                "sha256": "4a669bb09a3284df9c76f0ad68832acfd3254ebc92f8247afdc854c154ac0ded",
                "alphaMass": 37575
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/1x1-duration-150-frame-132.png",
                "sha256": "ca22691df0b891e6f4339971f3e75bc0620195d0bf949df6aa06aef5c199848c",
                "alphaMass": 316577
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/1x1-duration-150-frame-149.png",
                "sha256": "ca22691df0b891e6f4339971f3e75bc0620195d0bf949df6aa06aef5c199848c",
                "alphaMass": 316577
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 53.95073784722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/1x1-duration-900-frame-19.png",
                "sha256": "158ec27f2d7e6b5481f413cd756606c01641accc0d66258311d0e11523cd796e",
                "alphaMass": 39699
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/1x1-duration-900-frame-132.png",
                "sha256": "ca22691df0b891e6f4339971f3e75bc0620195d0bf949df6aa06aef5c199848c",
                "alphaMass": 316577
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/1x1-duration-900-frame-792.png",
                "sha256": "ca22691df0b891e6f4339971f3e75bc0620195d0bf949df6aa06aef5c199848c",
                "alphaMass": 316577
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/lp-report-format-carousel/1x1-duration-900-frame-899.png",
                "sha256": "ca22691df0b891e6f4339971f3e75bc0620195d0bf949df6aa06aef5c199848c",
                "alphaMass": 316577
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
        "note": "A report cycles through table, memo, slides and report formats with a brand-blue tab."
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
      "bundleSha256": "074934e58cf4a79a58036cd32c17fbdeab302f124e61973c6bb614dfd69b7465",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-report-format-carousel/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-report-format-carousel/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-report-format-carousel/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "79db323bb9d86678fb324043e8ce58d2568422a5752177aaa4ad163cd89004ad",
        "loop": "b295341f5aeabbc15e217165c436a7c359429a8a79d58b29fcce276bfba8fd0c",
        "detail": "e1b66be2ce03443c0a8cbb116542852281db5c727f52e6ede218719d1428e713"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-report-format-carousel/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-report-format-carousel/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-report-format-carousel/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "1d972e286b8b130db8cf6e56a35d303c0e442021683a5ed79e66d84dc418791b",
        "loop": "47dfab0b9e8cedec2aa8d9c5410bfe9968ef26ea6ba0dcc429ca9e4f93fdf895",
        "detail": "19957a2f5dd29b910568753483da0b142ecc31a9b835b0ecdb0ee4de534d1ee3"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-report-format-carousel/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-report-format-carousel/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-report-format-carousel/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8cadf487c0b8fc57d0e602a2ac483ff5a3a3229babf859a86b990cb82dcbbf7f",
        "loop": "1e8d1987242c278fb51422068eec869f3294607a3be70a020ca157a1a424c550",
        "detail": "9cbab72c9d6f416568543f464f3497c842858752bfe627a1af36936d0ff4d101"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/074934e58cf4a79a58036cd32c17fbdeab302f124e61973c6bb614dfd69b7465/index.mjs",
    "sha256": "074934e58cf4a79a58036cd32c17fbdeab302f124e61973c6bb614dfd69b7465",
    "bytes": 298434,
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
    "at": "2026-10-09T03:33:11.475Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
