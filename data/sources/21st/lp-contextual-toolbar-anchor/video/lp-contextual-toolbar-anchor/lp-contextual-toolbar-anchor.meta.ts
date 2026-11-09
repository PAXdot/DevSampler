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
    "contextual-toolbar-anchor",
    "product-proof",
    "contextual-toolbar-anchor",
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
    "title": "Tools follow the context",
    "subtitle": "Select a phrase and keep the action next to it.",
    "items": [
      "Select a passage",
      "Refine",
      "Comment",
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
  "name": "Selection-anchored tools",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-contextual-toolbar-anchor",
    "bundleSha256": "62fa451c1617cb2fe924fab95ae4ac5153f09d0fe509dc980e7adbf5070fa182",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:38:07.674Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/16x9-paper.png",
        "sha256": "16e08f3dd069dfc85b03f293ef4dba6ae9c1f18ae0d9fd5526136a1501d51285"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/16x9-night.png",
        "sha256": "46493a65b4f60acc7e3b3add1b6069871431ce0b779577777fc2e0c9d0a714ae"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/16x9-color.png",
        "sha256": "74a8ca6c161eec833ca4205fe019df2e6b2d7029a4688212593e28a1f3976252"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/9x16-paper.png",
        "sha256": "6bf8f5931b251e5ee9f8014e873bd5940a937c941041a8d58510dd95700b66f0"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/9x16-night.png",
        "sha256": "e3f1afefb60dbb9788529e7b3fcae8832ceb1b48935cec3f261872ed0ac1379e"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/9x16-color.png",
        "sha256": "9217eea3b9eb32ee5029e334ef04cc8d95fb8868d5080e0d7e3751a50190dc8a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/1x1-paper.png",
        "sha256": "af6a60bd25b71aeab547738b1f10af36fd6050a32bbae7d3bcf67a49cdf8dfcb"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/1x1-night.png",
        "sha256": "1700136b6279055d26f0a9b9624d63ca6c204ac575e939a86e0a20b38721d4e2"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/1x1-color.png",
        "sha256": "25a2cfcbaa5bc1652384c37287cd828a08c5ea4223b2fe6bd87db53875715950"
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
          "lp-contextual-toolbar-anchor--16x9",
          "lp-contextual-toolbar-anchor--9x16",
          "lp-contextual-toolbar-anchor--1x1"
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
            "paperNight": 152.881591796875,
            "paperColor": 12.882758246527779,
            "region": {
              "left": 145,
              "top": 108,
              "width": 1630,
              "height": 833
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 149.80569118923611,
            "paperColor": 12.80886501736111,
            "region": {
              "left": 77,
              "top": 192,
              "width": 933,
              "height": 1465
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 151.57484266493054,
            "paperColor": 13.059922960069445,
            "region": {
              "left": 77,
              "top": 108,
              "width": 926,
              "height": 833
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
            "occupancy": 0.9280022933813445,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9280022933813445,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9280022933813445,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9341910712973464,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9341910712973464,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9341910712973464,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9372380353604635,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9372380353604635,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9372380353604635,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.167209201388889,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 2.167209201388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/16x9-duration-150-frame-18.png",
                "sha256": "3a0f3438ba5adbe7f828b0c6a7bd8dca5c799673c22d81ff09870a7c4a3f62a8",
                "alphaMass": 371226
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/16x9-duration-150-frame-132.png",
                "sha256": "d47d7353a8f77f00b82268acb88c11d391a0911e6fc71d9804a719fab55a99ea",
                "alphaMass": 371226
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/16x9-duration-150-frame-149.png",
                "sha256": "d47d7353a8f77f00b82268acb88c11d391a0911e6fc71d9804a719fab55a99ea",
                "alphaMass": 371226
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 2.167209201388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/16x9-duration-900-frame-19.png",
                "sha256": "3a0f3438ba5adbe7f828b0c6a7bd8dca5c799673c22d81ff09870a7c4a3f62a8",
                "alphaMass": 371226
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/16x9-duration-900-frame-132.png",
                "sha256": "d47d7353a8f77f00b82268acb88c11d391a0911e6fc71d9804a719fab55a99ea",
                "alphaMass": 371226
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/16x9-duration-900-frame-792.png",
                "sha256": "d47d7353a8f77f00b82268acb88c11d391a0911e6fc71d9804a719fab55a99ea",
                "alphaMass": 371226
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/16x9-duration-900-frame-899.png",
                "sha256": "d47d7353a8f77f00b82268acb88c11d391a0911e6fc71d9804a719fab55a99ea",
                "alphaMass": 371226
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 3.1324869791666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/9x16-duration-150-frame-18.png",
                "sha256": "0565de20d3749bc40657309421c91420b5746e5863617504744570ac2faeb6a0",
                "alphaMass": 372250
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/9x16-duration-150-frame-132.png",
                "sha256": "ea8b3a07600e3539b4553153532a3d214cef3a06430b847dfddd85f987e520d0",
                "alphaMass": 372273
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/9x16-duration-150-frame-149.png",
                "sha256": "ea8b3a07600e3539b4553153532a3d214cef3a06430b847dfddd85f987e520d0",
                "alphaMass": 372273
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 3.1324869791666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/9x16-duration-900-frame-19.png",
                "sha256": "0565de20d3749bc40657309421c91420b5746e5863617504744570ac2faeb6a0",
                "alphaMass": 372250
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/9x16-duration-900-frame-132.png",
                "sha256": "ea8b3a07600e3539b4553153532a3d214cef3a06430b847dfddd85f987e520d0",
                "alphaMass": 372273
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/9x16-duration-900-frame-792.png",
                "sha256": "ea8b3a07600e3539b4553153532a3d214cef3a06430b847dfddd85f987e520d0",
                "alphaMass": 372273
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/9x16-duration-900-frame-899.png",
                "sha256": "ea8b3a07600e3539b4553153532a3d214cef3a06430b847dfddd85f987e520d0",
                "alphaMass": 372273
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 2.292751736111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/1x1-duration-150-frame-18.png",
                "sha256": "48077fc5fa359850c53a5ca3b4c3130545ffe88615c1db4d5fe184724e76df46",
                "alphaMass": 371905
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/1x1-duration-150-frame-132.png",
                "sha256": "821a3ebdc77126b2e71fa0425d72996b62a29345babb8007d757dcd84969afed",
                "alphaMass": 371905
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/1x1-duration-150-frame-149.png",
                "sha256": "821a3ebdc77126b2e71fa0425d72996b62a29345babb8007d757dcd84969afed",
                "alphaMass": 371905
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 2.292751736111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/1x1-duration-900-frame-19.png",
                "sha256": "48077fc5fa359850c53a5ca3b4c3130545ffe88615c1db4d5fe184724e76df46",
                "alphaMass": 371905
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/1x1-duration-900-frame-132.png",
                "sha256": "821a3ebdc77126b2e71fa0425d72996b62a29345babb8007d757dcd84969afed",
                "alphaMass": 371905
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/1x1-duration-900-frame-792.png",
                "sha256": "821a3ebdc77126b2e71fa0425d72996b62a29345babb8007d757dcd84969afed",
                "alphaMass": 371905
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-contextual-toolbar-anchor/1x1-duration-900-frame-899.png",
                "sha256": "821a3ebdc77126b2e71fa0425d72996b62a29345babb8007d757dcd84969afed",
                "alphaMass": 371905
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
        "note": "Selecting a passage anchors a Refine and Comment toolbar and marks it Applied in brand blue."
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
      "bundleSha256": "62fa451c1617cb2fe924fab95ae4ac5153f09d0fe509dc980e7adbf5070fa182",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-contextual-toolbar-anchor/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-contextual-toolbar-anchor/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-contextual-toolbar-anchor/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f7643021f57976af83934b4c4dfdc8a94a49f36deeb08ca8e96a6f4093b05ab0",
        "loop": "3f6e537664afae7cd26aa2b0bb826e8e3be97a8a1564a381eb36fe0ed3af496b",
        "detail": "6c7ac2f6ed36fa9cd7863402bc9e096253b857bfa3c67e2f95278de66cda0d13"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-contextual-toolbar-anchor/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-contextual-toolbar-anchor/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-contextual-toolbar-anchor/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "b05874188e54a074e6a03f37b7622d59f47ab3ad4045cf2b78800fa6e185ef43",
        "loop": "e83e291b9cbdf8bdabfce22fcd1a16358bb2ef290006825f753682a55e2bb80f",
        "detail": "9574e9e7c051f68cb9fb04efbd01441535960fd18275fefa45ffc81e62d957d0"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-contextual-toolbar-anchor/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-contextual-toolbar-anchor/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-contextual-toolbar-anchor/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "79a71df40882aae07146379fba1c02daba6fd27025e91f3a4322fedc0f20293d",
        "loop": "72b2f1d89b9b3fcd658eaf8e8af9c37970bd6d4bcebbce104a801e2849453e19",
        "detail": "56d04f44dcb3cd577b192c3069f312771a04d11dcf7fb7b099749d94a75ed341"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/62fa451c1617cb2fe924fab95ae4ac5153f09d0fe509dc980e7adbf5070fa182/index.mjs",
    "sha256": "62fa451c1617cb2fe924fab95ae4ac5153f09d0fe509dc980e7adbf5070fa182",
    "bytes": 298449,
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
    "at": "2026-10-09T03:22:34.789Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
