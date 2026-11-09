// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/code",
  "job": "code",
  "language": "product-ui",
  "mechanic": [
    "type"
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
    "terminal-browser-proof",
    "product-proof",
    "terminal-browser-proof",
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
    "title": "From command to working page",
    "subtitle": "Follow the command through to its visible browser result.",
    "items": [
      "$ build --preview",
      "Preview is ready",
      "Open local preview",
      "Build complete"
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
  "name": "Command deploys browser result",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-terminal-browser-proof",
    "bundleSha256": "f8c39cd11ce24e87518f4c01abba1c14b58b94880a9a049840e9bd219225f9f3",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:41:47.489Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/16x9-paper.png",
        "sha256": "0ba43cb94ecc8d8e1d814cc93b2c4168cbede61b0bf807dd0eff1b367f4edad1"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/16x9-night.png",
        "sha256": "1a2b160332ca409df2b5aa8f6bfcbf6c3fa9e83e2dd62098c97720a942b6728d"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/16x9-color.png",
        "sha256": "d9ad57a1d30e287e7b60e9662e38408d51a5d77ac5e0411299635d398613411c"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/9x16-paper.png",
        "sha256": "6d801f7c2961b0740efaf0012121509d5d101c207a91089c17ecc6736bfe59cc"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/9x16-night.png",
        "sha256": "e6b3bb6489b4ff879d15d3cc31e3cc3ced37669239f70ca838ae17d2ed2fc670"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/9x16-color.png",
        "sha256": "254ed99f8d47e033a36a4b622d083fef1bf02458a87b784827e68829a21ec64a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/1x1-paper.png",
        "sha256": "9a188db1677a9d3c08df47fff3a1855eea52211d4d1cdbf6c1b6c30202bf37d5"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/1x1-night.png",
        "sha256": "79367cafcf2dc498abaee36363d20aeedb30302f492575000680293e9e774aa9"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/1x1-color.png",
        "sha256": "ed5f8db2c0266f333a99198544f887c55ddd6df1d08cfac45cee5f60cc009f08"
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
          "lp-terminal-browser-proof--16x9",
          "lp-terminal-browser-proof--9x16",
          "lp-terminal-browser-proof--1x1"
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
            "paperNight": 146.98442925347223,
            "paperColor": 11.389512803819445,
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
            "paperNight": 138.01600477430554,
            "paperColor": 13.10793728298611,
            "region": {
              "left": 77,
              "top": 192,
              "width": 926,
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
            "paperNight": 145.56963433159723,
            "paperColor": 11.619683159722221,
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
            "occupancy": 0.9271821350711068,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9271821350711068,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9271821350711068,
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
        "averageChannelDifference": 7.948676215277778,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 7.948676215277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/16x9-duration-150-frame-18.png",
                "sha256": "21e7e91183db9c71e4447a5a960796f9df1d4e4ce63258fa02affe409c74c317",
                "alphaMass": 371226
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/16x9-duration-150-frame-132.png",
                "sha256": "4f8e0597f9fff8aa4a908acbba96d1fdc9b37eba5e11bf22371138e10a5f7fac",
                "alphaMass": 356535
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/16x9-duration-150-frame-149.png",
                "sha256": "4f8e0597f9fff8aa4a908acbba96d1fdc9b37eba5e11bf22371138e10a5f7fac",
                "alphaMass": 356535
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.948676215277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/16x9-duration-900-frame-19.png",
                "sha256": "21e7e91183db9c71e4447a5a960796f9df1d4e4ce63258fa02affe409c74c317",
                "alphaMass": 371226
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/16x9-duration-900-frame-132.png",
                "sha256": "4f8e0597f9fff8aa4a908acbba96d1fdc9b37eba5e11bf22371138e10a5f7fac",
                "alphaMass": 356535
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/16x9-duration-900-frame-792.png",
                "sha256": "4f8e0597f9fff8aa4a908acbba96d1fdc9b37eba5e11bf22371138e10a5f7fac",
                "alphaMass": 356535
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/16x9-duration-900-frame-899.png",
                "sha256": "4f8e0597f9fff8aa4a908acbba96d1fdc9b37eba5e11bf22371138e10a5f7fac",
                "alphaMass": 356535
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 13.08713107638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/9x16-duration-150-frame-18.png",
                "sha256": "876bbba95d5213660e968f60dcb769c51b8652c394654e14a47add103e94ef6b",
                "alphaMass": 372250
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/9x16-duration-150-frame-132.png",
                "sha256": "dc7584d860aae5f7380afc74cfba3a9013c9f4b8002c85666fcb30de579570cc",
                "alphaMass": 345043
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/9x16-duration-150-frame-149.png",
                "sha256": "dc7584d860aae5f7380afc74cfba3a9013c9f4b8002c85666fcb30de579570cc",
                "alphaMass": 345043
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 13.08713107638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/9x16-duration-900-frame-19.png",
                "sha256": "876bbba95d5213660e968f60dcb769c51b8652c394654e14a47add103e94ef6b",
                "alphaMass": 372250
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/9x16-duration-900-frame-132.png",
                "sha256": "dc7584d860aae5f7380afc74cfba3a9013c9f4b8002c85666fcb30de579570cc",
                "alphaMass": 345043
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/9x16-duration-900-frame-792.png",
                "sha256": "dc7584d860aae5f7380afc74cfba3a9013c9f4b8002c85666fcb30de579570cc",
                "alphaMass": 345043
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/9x16-duration-900-frame-899.png",
                "sha256": "dc7584d860aae5f7380afc74cfba3a9013c9f4b8002c85666fcb30de579570cc",
                "alphaMass": 345043
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 8.034071180555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/1x1-duration-150-frame-18.png",
                "sha256": "d24249ee738504c7f7f98b44bd88b74df0d2891a930842ee0cff26a98ec4e788",
                "alphaMass": 371905
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/1x1-duration-150-frame-132.png",
                "sha256": "3dd9e695011e5f28eeb9dae64e3c19775d363a014a4237d80ce804aa3130a269",
                "alphaMass": 357512
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/1x1-duration-150-frame-149.png",
                "sha256": "3dd9e695011e5f28eeb9dae64e3c19775d363a014a4237d80ce804aa3130a269",
                "alphaMass": 357512
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 8.034071180555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/1x1-duration-900-frame-19.png",
                "sha256": "d24249ee738504c7f7f98b44bd88b74df0d2891a930842ee0cff26a98ec4e788",
                "alphaMass": 371905
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/1x1-duration-900-frame-132.png",
                "sha256": "3dd9e695011e5f28eeb9dae64e3c19775d363a014a4237d80ce804aa3130a269",
                "alphaMass": 357512
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/1x1-duration-900-frame-792.png",
                "sha256": "3dd9e695011e5f28eeb9dae64e3c19775d363a014a4237d80ce804aa3130a269",
                "alphaMass": 357512
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/lp-terminal-browser-proof/1x1-duration-900-frame-899.png",
                "sha256": "3dd9e695011e5f28eeb9dae64e3c19775d363a014a4237d80ce804aa3130a269",
                "alphaMass": 357512
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "code",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A terminal build command deploys a local preview shown in the browser with a brand-blue chart."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 13,
        "compared": 13,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "f8c39cd11ce24e87518f4c01abba1c14b58b94880a9a049840e9bd219225f9f3",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-terminal-browser-proof/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-terminal-browser-proof/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-terminal-browser-proof/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "6bfff18e7c6bc9ef8e59b07fe68f10d3b288b3cdfadd4ea9e815b4bc45ff9c6c",
        "loop": "8fd1988430ae42fe34d198865c8333ba51fe6e9509f5d8b8d60aba34bc583d30",
        "detail": "da77ec698d2f619b20c2172e63a6a88d6744fec1c52dbdf0f6c722d29f1a1a4e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-terminal-browser-proof/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-terminal-browser-proof/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-terminal-browser-proof/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "40804b6ea59e3dc758871d6162fbd16f3724b1d5efa6fb836a922427473adbae",
        "loop": "2e17a22ad85d7e1d8d3ff21ba4b22f905a6de5c4a05e3f8255d932be319fd270",
        "detail": "5e06424a9e47b4b1410f3f18a79d841610ce25e3b8ab360e6088e9b9a9b8d2c1"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-terminal-browser-proof/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-terminal-browser-proof/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-terminal-browser-proof/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "136331ba6d5dc9e0d5ab71e0cd40cff00d48a2f05ef209931d333813c3eec0f2",
        "loop": "02611cb1eed1fa05a0286193ef021a25b4288b370d25c2e217716178898cdbe9",
        "detail": "206702cda12c637fb8991be42845979305439f895027ac3bd5e9633a0c0e8338"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/f8c39cd11ce24e87518f4c01abba1c14b58b94880a9a049840e9bd219225f9f3/index.mjs",
    "sha256": "f8c39cd11ce24e87518f4c01abba1c14b58b94880a9a049840e9bd219225f9f3",
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
    "at": "2026-10-09T03:35:06.059Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
