// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "workflow",
  "job": "process",
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
    "integration-picker-grid",
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
    "title": "Bring your context together",
    "subtitle": "Choose the tools that power the workflow",
    "items": [
      "Notes",
      "Files",
      "Calendar",
      "Messages"
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
  "name": "Integration Picker Grid",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-integration-picker-grid",
    "bundleSha256": "1f3c0b3cd788ce3428b0488de902f4790b51914ad63f5d0499beabe5fb4cda36",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:39:36.998Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/16x9-paper.png",
        "sha256": "ac7c46106c79e1b27070c459260755b9fc58be94f6090d9acf9b677a68e38ac0"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/16x9-night.png",
        "sha256": "35db8a026980c72de24f5e32d4b6d2629e6077bcc1f1f8f84076af1c60150e9b"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/16x9-color.png",
        "sha256": "5c2b932ecf5b1ce31b31076daabb9cfa36989694bf7c426de622cee4c476ee4d"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/9x16-paper.png",
        "sha256": "352d8e803e289b5c5841239a4c219032abe856c3bb3c7c06e70ed32c2086d5bd"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/9x16-night.png",
        "sha256": "4da4d3e591ab879d6f09e18fd47b4beea15884e00c0e8f5658298f65de30668e"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/9x16-color.png",
        "sha256": "88572ff3dd246b03a78515260172b07b6cc8179b795808b40161dc028a9e3cf8"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/1x1-paper.png",
        "sha256": "bf30f9ef4937c7ba7b03bd7eef0139c79adc62586283620487945fb7f967dec4"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/1x1-night.png",
        "sha256": "0be8ff9058400753166ca16a7873017fa1ca0ddb4cff687ac43cc496f0f92cf0"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/1x1-color.png",
        "sha256": "5f4f61aaa79c0befe2b659f2650a68bb1b2982ee6e267e4c15f064c5e8b02063"
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
          "lp-integration-picker-grid--16x9",
          "lp-integration-picker-grid--9x16",
          "lp-integration-picker-grid--1x1"
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
            "paperNight": 98.50599500868056,
            "paperColor": 12.80837673611111,
            "region": {
              "left": 351,
              "top": 131,
              "width": 1180,
              "height": 790
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 135.4326171875,
            "paperColor": 11.612874348958334,
            "region": {
              "left": 108,
              "top": 202,
              "width": 863,
              "height": 1456
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 98.07980685763889,
            "paperColor": 11.453179253472221,
            "region": {
              "left": 194,
              "top": 308,
              "width": 669,
              "height": 449
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
            "occupancy": 0.6371263140029676,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6371263140029676,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6371263140029676,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8587932343719382,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8587932343719382,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8587932343719382,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3649777383518566,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3649777383518566,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3649777383518566,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 73.88411458333333,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 76.04112413194444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/16x9-duration-150-frame-18.png",
                "sha256": "9169924f76a78d0920f874940f3cb2ce526ec7044a15b50b5f3107dfe2152e0f",
                "alphaMass": 490
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/16x9-duration-150-frame-132.png",
                "sha256": "f577211b2903691e8078a77cf9458f7418d61b866f30113388b70d788c545205",
                "alphaMass": 163239
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/16x9-duration-150-frame-149.png",
                "sha256": "f577211b2903691e8078a77cf9458f7418d61b866f30113388b70d788c545205",
                "alphaMass": 163239
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 73.88411458333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/16x9-duration-900-frame-19.png",
                "sha256": "f37d727a3f3a23869aa856d650691230b3fb17e3995e97ec1dcdb25facfd4a0a",
                "alphaMass": 792
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/16x9-duration-900-frame-132.png",
                "sha256": "f577211b2903691e8078a77cf9458f7418d61b866f30113388b70d788c545205",
                "alphaMass": 163239
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/16x9-duration-900-frame-792.png",
                "sha256": "f577211b2903691e8078a77cf9458f7418d61b866f30113388b70d788c545205",
                "alphaMass": 163239
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/16x9-duration-900-frame-899.png",
                "sha256": "f577211b2903691e8078a77cf9458f7418d61b866f30113388b70d788c545205",
                "alphaMass": 163239
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 116.68131510416667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/9x16-duration-150-frame-18.png",
                "sha256": "13b8ecee83172eb299003943e06a37b69e8d7fa6937a9078c1b0660855088de6",
                "alphaMass": 3956
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/9x16-duration-150-frame-132.png",
                "sha256": "5292430cbe907203bde78f51ceb1bc84e978b5f3b4aa73d98636f41a641c7144",
                "alphaMass": 277049
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/9x16-duration-150-frame-149.png",
                "sha256": "5292430cbe907203bde78f51ceb1bc84e978b5f3b4aa73d98636f41a641c7144",
                "alphaMass": 277049
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 115.53743489583333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/9x16-duration-900-frame-19.png",
                "sha256": "f0509c0374f0bb6c28e03eedcd285f2312dc72f34c1bcb6248b280e78effca08",
                "alphaMass": 4495
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/9x16-duration-900-frame-132.png",
                "sha256": "5292430cbe907203bde78f51ceb1bc84e978b5f3b4aa73d98636f41a641c7144",
                "alphaMass": 277049
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/9x16-duration-900-frame-792.png",
                "sha256": "5292430cbe907203bde78f51ceb1bc84e978b5f3b4aa73d98636f41a641c7144",
                "alphaMass": 277049
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/9x16-duration-900-frame-899.png",
                "sha256": "5292430cbe907203bde78f51ceb1bc84e978b5f3b4aa73d98636f41a641c7144",
                "alphaMass": 277049
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 47.091579861111114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/1x1-duration-150-frame-18.png",
                "sha256": "472db6a84bec2dd24c1b5ef287ffad6ca1a94aa3d8aa6baee72ffb9bcce6c7ff",
                "alphaMass": 291
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/1x1-duration-150-frame-132.png",
                "sha256": "53972f975eb893dab0138fad22b922fce22828a899636d231f25e4bd5252737f",
                "alphaMass": 92218
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/1x1-duration-150-frame-149.png",
                "sha256": "53972f975eb893dab0138fad22b922fce22828a899636d231f25e4bd5252737f",
                "alphaMass": 92218
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 47.048177083333336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/1x1-duration-900-frame-19.png",
                "sha256": "5382f5cadc6e4436e926f73169301def8e3327c6458a14f81902b7a18ad74fa5",
                "alphaMass": 442
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/1x1-duration-900-frame-132.png",
                "sha256": "53972f975eb893dab0138fad22b922fce22828a899636d231f25e4bd5252737f",
                "alphaMass": 92218
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/1x1-duration-900-frame-792.png",
                "sha256": "53972f975eb893dab0138fad22b922fce22828a899636d231f25e4bd5252737f",
                "alphaMass": 92218
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-integration-picker-grid/1x1-duration-900-frame-899.png",
                "sha256": "53972f975eb893dab0138fad22b922fce22828a899636d231f25e4bd5252737f",
                "alphaMass": 92218
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
        "note": "Four integration tiles connect into a brand-blue Context connected chip."
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
      "bundleSha256": "1f3c0b3cd788ce3428b0488de902f4790b51914ad63f5d0499beabe5fb4cda36",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-integration-picker-grid/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-integration-picker-grid/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-integration-picker-grid/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "524b4d0033a43558caef0267d9908fccf0546004d9ab153529e402c93e64d05d",
        "loop": "1dae06669ec68b6ff0bc4d0e60d9b0b301cd613736f5f3b320dd6a7cfb0a6930",
        "detail": "8aeca71f28190b9449f5827efeb60f279759bab22ac4383a09ffcd27afb5b460"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-integration-picker-grid/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-integration-picker-grid/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-integration-picker-grid/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "14addc92c57921525050b0157dd09c3c17ff82dbe4701db74ddb20837153ef31",
        "loop": "540caa836a77999a11cd4fc4fae8b9a59f7ad57776e5cad2eeae98c977069f9c",
        "detail": "d90674f1859d9b2e00646e35f7125aee893c013dc302dd0d26cf2e10d4b663e0"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-integration-picker-grid/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-integration-picker-grid/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-integration-picker-grid/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "b1d9a29be8a279269b2eaae5d4d82d261acba9369a8a78c672e90fff24fa8b1b",
        "loop": "c4ec44bc51ec8e2c122fe4d61d243ed79a62ad2f5a06b5db22017224f1d6fc77",
        "detail": "0bfba0196afaa06dbf156ee138a76756d2c3fd2d4e301b9731bf5c6938e7854e"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/1f3c0b3cd788ce3428b0488de902f4790b51914ad63f5d0499beabe5fb4cda36/index.mjs",
    "sha256": "1f3c0b3cd788ce3428b0488de902f4790b51914ad63f5d0499beabe5fb4cda36",
    "bytes": 298439,
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
    "at": "2026-10-09T03:27:30.299Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
