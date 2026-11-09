// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/product",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "focus"
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
    "panel-document-export",
    "product-proof",
    "panel-document-export",
    "interface"
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
    },
    {
      "key": "screenshot",
      "type": "image",
      "role": "media"
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
    "title": "Turn the work into a portable page",
    "subtitle": "A panel becomes a document and lands in the export tray.",
    "items": [
      "Working panel",
      "Portable document",
      "Export tray",
      "Saved"
    ],
    "screenshot": "",
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
    },
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "media"
    }
  ],
  "name": "Panel becomes portable document",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-panel-document-export",
    "bundleSha256": "f3f69fb877c4b3edfa3a4b61f09905f43f9b95074c1f38282bd46c3140c27b90",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:40:22.480Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/16x9-paper.png",
        "sha256": "bfd8cfd46786f06548b4093010e928417146f20b3c7d589cb8d4999181bf6dbb"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/16x9-night.png",
        "sha256": "8e64cab31224ffd69ef2f4d445e3fd3fa79362505ff38de0e2b07c4c9c98f2c6"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/16x9-color.png",
        "sha256": "0f4f160db1a721492cccf016f30df9215c546cbf122814b5718eef0c7bd990bb"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/9x16-paper.png",
        "sha256": "66448bae6540a8b62d6425c1ffe3cd244497b5389eae2995e49575db5e46b2cf"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/9x16-night.png",
        "sha256": "37b834a0fc2863cb50ecd08c13e5336b26489b1b9f8c833b36491a1d583ae8e8"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/9x16-color.png",
        "sha256": "c4f2b73effe4611d132f177334552840fae25cb062f00acf6b141a228f635df7"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/1x1-paper.png",
        "sha256": "27eaf325aca9a1894b31fff75dd8ad0f90384c72bd2b64dcf1ce6288c7f86a89"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/1x1-night.png",
        "sha256": "a4edbf163c6c80f2725bc8b5806501e215b5a75a70e7c90c43c00c23ce0d0a58"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/1x1-color.png",
        "sha256": "a6b57b34617d336263e9838fa9037cd70d22376ff9b69ddcaee67a09ba8c15dd"
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
          "lp-panel-document-export--16x9",
          "lp-panel-document-export--9x16",
          "lp-panel-document-export--1x1"
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
            "paperNight": 89.62144639756944,
            "paperColor": 10.080620659722221,
            "region": {
              "left": 154,
              "top": 108,
              "width": 1612,
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
            "paperNight": 117.51199001736111,
            "paperColor": 13.386176215277779,
            "region": {
              "left": 86,
              "top": 192,
              "width": 889,
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
            "paperNight": 88.22273763020833,
            "paperColor": 10.464952256944445,
            "region": {
              "left": 86,
              "top": 108,
              "width": 908,
              "height": 864
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
            "occupancy": 0.9519085411942557,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9519085411942557,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9519085411942557,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9332745443856557,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9332745443856557,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9332745443856557,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9532207944906359,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9532207944906359,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9532207944906359,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 45.8779296875,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 45.8779296875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/16x9-duration-150-frame-18.png",
                "sha256": "07fffe2f971c3ddfec48da6459ba4803e7a8fa71a5ff58189c58a8b9799f6bbd",
                "alphaMass": 203760
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/16x9-duration-150-frame-132.png",
                "sha256": "40da6e817cf27c0df5030988f8ed3a1a53642101efd6cf2d839883a04cb67327",
                "alphaMass": 103398
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/16x9-duration-150-frame-149.png",
                "sha256": "40da6e817cf27c0df5030988f8ed3a1a53642101efd6cf2d839883a04cb67327",
                "alphaMass": 103398
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 45.8779296875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/16x9-duration-900-frame-19.png",
                "sha256": "07fffe2f971c3ddfec48da6459ba4803e7a8fa71a5ff58189c58a8b9799f6bbd",
                "alphaMass": 203760
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/16x9-duration-900-frame-132.png",
                "sha256": "40da6e817cf27c0df5030988f8ed3a1a53642101efd6cf2d839883a04cb67327",
                "alphaMass": 103398
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/16x9-duration-900-frame-792.png",
                "sha256": "40da6e817cf27c0df5030988f8ed3a1a53642101efd6cf2d839883a04cb67327",
                "alphaMass": 103398
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/16x9-duration-900-frame-899.png",
                "sha256": "40da6e817cf27c0df5030988f8ed3a1a53642101efd6cf2d839883a04cb67327",
                "alphaMass": 103398
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 45.83257378472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/9x16-duration-150-frame-18.png",
                "sha256": "96afba1ab4cd12bdd6673ad053e73b00874000a401e719a0a9da3858efd883a6",
                "alphaMass": 299241
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/9x16-duration-150-frame-132.png",
                "sha256": "40fde8133e58189c56df93cc68b90a370aa9002aab851d0586b8aa4b26236c79",
                "alphaMass": 145675
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/9x16-duration-150-frame-149.png",
                "sha256": "40fde8133e58189c56df93cc68b90a370aa9002aab851d0586b8aa4b26236c79",
                "alphaMass": 145675
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 45.83257378472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/9x16-duration-900-frame-19.png",
                "sha256": "96afba1ab4cd12bdd6673ad053e73b00874000a401e719a0a9da3858efd883a6",
                "alphaMass": 299241
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/9x16-duration-900-frame-132.png",
                "sha256": "40fde8133e58189c56df93cc68b90a370aa9002aab851d0586b8aa4b26236c79",
                "alphaMass": 145675
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/9x16-duration-900-frame-792.png",
                "sha256": "40fde8133e58189c56df93cc68b90a370aa9002aab851d0586b8aa4b26236c79",
                "alphaMass": 145675
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/9x16-duration-900-frame-899.png",
                "sha256": "40fde8133e58189c56df93cc68b90a370aa9002aab851d0586b8aa4b26236c79",
                "alphaMass": 145675
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 45.78602430555556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/1x1-duration-150-frame-18.png",
                "sha256": "dee7cac806847f5721530645334a3136cd85424cf485177c8bda4698ac41b078",
                "alphaMass": 203957
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/1x1-duration-150-frame-132.png",
                "sha256": "76baf2f2f9808add63f47be1676b0cf6aad4c922cc369e9ac0aff91355f63039",
                "alphaMass": 103503
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/1x1-duration-150-frame-149.png",
                "sha256": "76baf2f2f9808add63f47be1676b0cf6aad4c922cc369e9ac0aff91355f63039",
                "alphaMass": 103503
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 45.78602430555556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/1x1-duration-900-frame-19.png",
                "sha256": "dee7cac806847f5721530645334a3136cd85424cf485177c8bda4698ac41b078",
                "alphaMass": 203957
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/1x1-duration-900-frame-132.png",
                "sha256": "76baf2f2f9808add63f47be1676b0cf6aad4c922cc369e9ac0aff91355f63039",
                "alphaMass": 103503
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/1x1-duration-900-frame-792.png",
                "sha256": "76baf2f2f9808add63f47be1676b0cf6aad4c922cc369e9ac0aff91355f63039",
                "alphaMass": 103503
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-panel-document-export/1x1-duration-900-frame-899.png",
                "sha256": "76baf2f2f9808add63f47be1676b0cf6aad4c922cc369e9ac0aff91355f63039",
                "alphaMass": 103503
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
        "note": "A working panel folds into a portable document dropped into an export tray marked Saved in brand blue."
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
      "bundleSha256": "f3f69fb877c4b3edfa3a4b61f09905f43f9b95074c1f38282bd46c3140c27b90",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-panel-document-export/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-panel-document-export/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-panel-document-export/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a9898694f982860e91a0dbe945c5758d8da0d47c01912a6b39ca6740a8f166db",
        "loop": "e987d9e193b25db234d8559be9819ec2c7b0dea4998dd82ede3f37d78e65545e",
        "detail": "2d1fb71e5f96fa2ec5e0e7ee5018fc09c5036dcafbd3b490343924ecdfe00f34"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-panel-document-export/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-panel-document-export/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-panel-document-export/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3faa673f13ebd887a730fbb8c28cbe2c7c680ea9c2e260c35af9d69d0239d7b1",
        "loop": "59a9d9af6fe8ad63c4bab685ee199bc877137e61c7943f29dc9a39a6fe12de87",
        "detail": "4f38b9d85a71f15df5fbfca3b536686b29037f4ebb1ed84c1446723f8a7f06c6"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-panel-document-export/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-panel-document-export/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-panel-document-export/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "6ba525caa39b54b9fd4c217222a2e2f5ead4c0e1d7a5dcf4f3d065674f1e2cb4",
        "loop": "f65028974475d03740cc73ded7447c263821011fea2b539c4c1c628ab380086e",
        "detail": "763fb0fecb1825555ffbe23a11304e0ea0940ef5ba6ba193e1b9c9cdd5cf89dc"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/f3f69fb877c4b3edfa3a4b61f09905f43f9b95074c1f38282bd46c3140c27b90/index.mjs",
    "sha256": "f3f69fb877c4b3edfa3a4b61f09905f43f9b95074c1f38282bd46c3140c27b90",
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
    "at": "2026-10-09T03:29:57.910Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
