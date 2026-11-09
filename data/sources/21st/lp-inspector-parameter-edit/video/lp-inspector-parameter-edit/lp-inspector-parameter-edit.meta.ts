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
    "inspector-parameter-edit",
    "product-proof",
    "inspector-parameter-edit",
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
    "title": "Shape it while you see it",
    "subtitle": "An editable control changes the object on the canvas.",
    "value": 48,
    "suffix": "px",
    "items": [
      "Selected card",
      "Corner radius",
      "Width",
      "Applied"
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
      "key": "value",
      "label": "Value",
      "type": "number",
      "min": 0,
      "max": 999999
    },
    {
      "key": "suffix",
      "label": "Suffix",
      "type": "text",
      "max": 12
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
  "name": "Inspector control drives geometry",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-inspector-parameter-edit",
    "bundleSha256": "9f28feb66902e8225eb39913b12187730804e13db0e59e548d9495d14aa92014",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:38:08.085Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/16x9-paper.png",
        "sha256": "66ecd74e262781a5bc14bc9d71cabe7a343ae4a0b70639a293c3bf4b61de49f4"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/16x9-night.png",
        "sha256": "854596bd48775fd62f7bc0261317ebc849afb8abe97a8d0a8ab3a0e7ee2031be"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/16x9-color.png",
        "sha256": "3d0eedf40bc5e2a25b55ccf9369963c8db49f6e5e6220e5abc7453b74f9a4c29"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/9x16-paper.png",
        "sha256": "73d8d4345f4eff663e170263d04de19dea72034ca845a390d8cbeeda393fca03"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/9x16-night.png",
        "sha256": "d66e1a817fce053108aff9dd7b58de65312536d103b5d67197968794fb7605c2"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/9x16-color.png",
        "sha256": "83a501640f19058fcd28a28e1a335d341022cdcb1a3f1e49562609f8a139a21a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/1x1-paper.png",
        "sha256": "12fdcfb2a38301864a03d3c62f633ff5b0b721f5e34f6d228227f0803725c779"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/1x1-night.png",
        "sha256": "0ec51878351d5b0bbbc7031a9b14c24f7719bd34770c765d0de3ba2ff2853a43"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/1x1-color.png",
        "sha256": "9b1a66771200f8c874bd86a153e74eb1484035e9d925c6071c559ec7887e445d"
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
          "lp-inspector-parameter-edit--16x9",
          "lp-inspector-parameter-edit--9x16",
          "lp-inspector-parameter-edit--1x1"
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
            "paperNight": 147.72498914930554,
            "paperColor": 12.828233506944445,
            "region": {
              "left": 145,
              "top": 108,
              "width": 1630,
              "height": 885
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 146.14377170138889,
            "paperColor": 12.173828125,
            "region": {
              "left": 77,
              "top": 192,
              "width": 926,
              "height": 1557
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 146.50889756944446,
            "paperColor": 13.362684461805555,
            "region": {
              "left": 77,
              "top": 108,
              "width": 926,
              "height": 885
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
            "occupancy": 0.9859328086944656,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9859328086944656,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9859328086944656,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9854079073759135,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9854079073759135,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9854079073759135,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.995745091589448,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.995745091589448,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.995745091589448,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.6598307291666667,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 1.6598307291666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/16x9-duration-150-frame-18.png",
                "sha256": "8cdc729808808dde56f5d1ec3a13056c007c23ed0ccbc033814768d804894c52",
                "alphaMass": 380028
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/16x9-duration-150-frame-132.png",
                "sha256": "56f0790183f9e7c9267d518ec9076d89cb54dbe1a36be0c744e6005a12e138e1",
                "alphaMass": 380028
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/16x9-duration-150-frame-149.png",
                "sha256": "56f0790183f9e7c9267d518ec9076d89cb54dbe1a36be0c744e6005a12e138e1",
                "alphaMass": 380028
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 1.6598307291666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/16x9-duration-900-frame-19.png",
                "sha256": "8cdc729808808dde56f5d1ec3a13056c007c23ed0ccbc033814768d804894c52",
                "alphaMass": 380028
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/16x9-duration-900-frame-132.png",
                "sha256": "56f0790183f9e7c9267d518ec9076d89cb54dbe1a36be0c744e6005a12e138e1",
                "alphaMass": 380028
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/16x9-duration-900-frame-792.png",
                "sha256": "56f0790183f9e7c9267d518ec9076d89cb54dbe1a36be0c744e6005a12e138e1",
                "alphaMass": 380028
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/16x9-duration-900-frame-899.png",
                "sha256": "56f0790183f9e7c9267d518ec9076d89cb54dbe1a36be0c744e6005a12e138e1",
                "alphaMass": 380028
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 1.5814887152777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/9x16-duration-150-frame-18.png",
                "sha256": "eb349fb5af6d3bfb915c532e1bec8d6b6b56e2d9ffc63d8f6a961e144ea67abb",
                "alphaMass": 368578
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/9x16-duration-150-frame-132.png",
                "sha256": "d43703086b9214b3f6492a78d4fa17590502635eea4a12a625e3ac422a6770d9",
                "alphaMass": 368578
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/9x16-duration-150-frame-149.png",
                "sha256": "d43703086b9214b3f6492a78d4fa17590502635eea4a12a625e3ac422a6770d9",
                "alphaMass": 368578
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 1.5814887152777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/9x16-duration-900-frame-19.png",
                "sha256": "eb349fb5af6d3bfb915c532e1bec8d6b6b56e2d9ffc63d8f6a961e144ea67abb",
                "alphaMass": 368578
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/9x16-duration-900-frame-132.png",
                "sha256": "d43703086b9214b3f6492a78d4fa17590502635eea4a12a625e3ac422a6770d9",
                "alphaMass": 368578
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/9x16-duration-900-frame-792.png",
                "sha256": "d43703086b9214b3f6492a78d4fa17590502635eea4a12a625e3ac422a6770d9",
                "alphaMass": 368578
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/9x16-duration-900-frame-899.png",
                "sha256": "d43703086b9214b3f6492a78d4fa17590502635eea4a12a625e3ac422a6770d9",
                "alphaMass": 368578
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 1.7212456597222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/1x1-duration-150-frame-18.png",
                "sha256": "d53a3b08f99de2708a44bfdc965baf0943c50f53380433d3a17623394800ad63",
                "alphaMass": 380986
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/1x1-duration-150-frame-132.png",
                "sha256": "6d82f0429f0544845b3c75e5e7d44182ab287d1711f21d226417f162af990427",
                "alphaMass": 380986
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/1x1-duration-150-frame-149.png",
                "sha256": "6d82f0429f0544845b3c75e5e7d44182ab287d1711f21d226417f162af990427",
                "alphaMass": 380986
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 1.7212456597222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/1x1-duration-900-frame-19.png",
                "sha256": "d53a3b08f99de2708a44bfdc965baf0943c50f53380433d3a17623394800ad63",
                "alphaMass": 380986
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/1x1-duration-900-frame-132.png",
                "sha256": "6d82f0429f0544845b3c75e5e7d44182ab287d1711f21d226417f162af990427",
                "alphaMass": 380986
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/1x1-duration-900-frame-792.png",
                "sha256": "6d82f0429f0544845b3c75e5e7d44182ab287d1711f21d226417f162af990427",
                "alphaMass": 380986
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-inspector-parameter-edit/1x1-duration-900-frame-899.png",
                "sha256": "6d82f0429f0544845b3c75e5e7d44182ab287d1711f21d226417f162af990427",
                "alphaMass": 380986
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
        "note": "An inspector slider changes a card's corner radius and width; values and card tint in brand blue."
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
      "bundleSha256": "9f28feb66902e8225eb39913b12187730804e13db0e59e548d9495d14aa92014",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-inspector-parameter-edit/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-inspector-parameter-edit/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-inspector-parameter-edit/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3d4392d85c16405d35e1f7bb6ecca2b6d2ce34681f0db36e9a504f81aa68407a",
        "loop": "e9b7b51177d2232b2e9d692da1fdc6bf3dfacd46b2225590bc1c841d32692c44",
        "detail": "4db3baf8f64c2ec722ab25d9c73ddf60b02db57fe4c705915d0f4ed481bcaba5"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-inspector-parameter-edit/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-inspector-parameter-edit/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-inspector-parameter-edit/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9ac1b770d944b76a2823463f161d02b747b3e161751c877759eb0b66e8089c7a",
        "loop": "8ac57afa1ec5189ff7064a5307e7c683bdaa391bb9b9c7097b9eb85d8f3b705d",
        "detail": "8c6f7f7489a5aae0116b74ea10587e0ab0603743934c80df4814b289eeac7284"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-inspector-parameter-edit/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-inspector-parameter-edit/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-inspector-parameter-edit/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "bde467b508cfbf32988f4ab23702a9a93fc17332e37897dafcfc4eb2d7d4d6f1",
        "loop": "b1110af84f64fe05da15657c4f81e3250c3c5e165f915cd6488ef381ff1621f2",
        "detail": "1d9efdedb19beb5c3d1c2f0c83e2ae11ad44aa86bc87518401b473aa0047c816"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/9f28feb66902e8225eb39913b12187730804e13db0e59e548d9495d14aa92014/index.mjs",
    "sha256": "9f28feb66902e8225eb39913b12187730804e13db0e59e548d9495d14aa92014",
    "bytes": 298444,
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
    "at": "2026-10-09T03:27:10.821Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
