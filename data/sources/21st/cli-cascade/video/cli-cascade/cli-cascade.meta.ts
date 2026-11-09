// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "code/terminal",
  "tags": [
    "terminal",
    "cli",
    "install",
    "banner",
    "developer",
    "command"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 140,
      "min": 60,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 80,
      "out": 0
    },
    "markers": {
      "settled": 80
    },
    "beats": [
      0,
      8,
      51,
      57
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
    "fill": "region",
    "defaultRegion": {
      "x": 0.05,
      "y": 0.06,
      "w": 0.9,
      "h": 0.88
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "full",
    "backdrop": []
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "command",
      "type": "text",
      "maxChars": 80,
      "lines": 2,
      "role": "code"
    },
    {
      "key": "banner",
      "type": "text",
      "maxChars": 10,
      "lines": 1,
      "role": "name"
    },
    {
      "key": "lines",
      "type": "list",
      "maxChars": 60,
      "lines": 8,
      "role": "code"
    }
  ],
  "brand": {
    "surfaceColor": "colors.background",
    "textColor": "colors.text",
    "secondaryColor": "colors.secondary",
    "monoFontFamily": "fonts.mono",
    "bodyFontFamily": "fonts.body",
    "accent": "colors.primary"
  },
  "motionBeats": [
    {
      "target": "command",
      "prop": "type",
      "settledBy": 43,
      "easing": "linear"
    },
    {
      "target": "banner",
      "prop": "opacity",
      "settledBy": 52,
      "easing": "linear"
    },
    {
      "target": "lines",
      "prop": "opacity",
      "settledBy": 80,
      "easing": "linear"
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
      140
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study V01, twitter-remotion-research)"
  },
  "job": "code",
  "language": "pixel-terminal",
  "mechanic": [
    "type"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "surfaceColor": "#0E0E11",
    "textColor": "#E6E6E9",
    "secondaryColor": "#6FD6E6",
    "monoFontFamily": "Geist Mono",
    "bodyFontFamily": "Geist",
    "title": "~/acme",
    "command": "npx create-acme@latest my-app",
    "banner": "acme",
    "lines": [
      "Scaffolding project in ./my-app",
      "Installing 14 packages",
      "Wiring the video kit",
      "✓ Ready in 3.2s"
    ],
    "cps": 26,
    "theme": "dark",
    "accent": "#3D63FF"
  },
  "fields": [
    {
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "textColor",
      "label": "Text color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "secondaryColor",
      "label": "Secondary color",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 40,
      "role": "label"
    },
    {
      "key": "command",
      "label": "Command",
      "type": "text",
      "max": 80,
      "role": "code"
    },
    {
      "key": "banner",
      "label": "Banner",
      "type": "text",
      "max": 10,
      "role": "name"
    },
    {
      "key": "lines",
      "label": "Lines",
      "type": "list",
      "max": 8,
      "role": "code"
    },
    {
      "key": "cps",
      "label": "Cps",
      "type": "number",
      "min": 8,
      "max": 80
    },
    {
      "key": "theme",
      "label": "Theme",
      "type": "select",
      "options": [
        "dark",
        "light"
      ]
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    }
  ],
  "name": "CLI Cascade",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cli-cascade",
    "bundleSha256": "ba98f3ab548e146803615be5d56216b5e5f6250a4f38bac707a1e02a8211c98c",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:34:02.239Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/16x9-paper.png",
        "sha256": "e9eca307302faaa021d283939738dc233e8256c5012677e0c49071cb531d5ca9"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/16x9-night.png",
        "sha256": "7c77a68fa8f10dae4dc45d465e69a73ddd91e5b0c8002854f6b5fdc97a952a58"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/16x9-color.png",
        "sha256": "96865780e433d5ae2763c9ef3e73464cfccda519d58459180e768c200feb4508"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/9x16-paper.png",
        "sha256": "0133e67c12fd613a0502f9afa9e6f7fdf7e70c38590e9773e8e75537403c12bb"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/9x16-night.png",
        "sha256": "2e225345d55157fffb38d9de47c99b656bf5386527023e9a7652854246918463"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/9x16-color.png",
        "sha256": "8c1be97e0d66b18c255cc850149c35679b388827a0703b390597365ed23b4af1"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/1x1-paper.png",
        "sha256": "197af342613eb0026fe3877341c8a1310005cc674a9d2ab81315558f9bcb2505"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/1x1-night.png",
        "sha256": "790b855e42cdfac0eeec4122095547c59b531938e83136c17dd262653e88e6f8"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/1x1-color.png",
        "sha256": "5216dfd1bf859d270b2d93f35c47a750f038d0a431d8099930409fd1855f0bd9"
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
          "cli-cascade--16x9",
          "cli-cascade--9x16",
          "cli-cascade--1x1"
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
            "paperNight": 135.98697916666666,
            "paperColor": 16.192247178819443,
            "region": {
              "left": 422,
              "top": 213,
              "width": 1076,
              "height": 696
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 130.80126953125,
            "paperColor": 17.242784288194443,
            "region": {
              "left": 17,
              "top": 358,
              "width": 1046,
              "height": 1256
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 128.50021701388889,
            "paperColor": 17.77517361111111,
            "region": {
              "left": 156,
              "top": 245,
              "width": 768,
              "height": 632
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
            "occupancy": 0.5118443982531286,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5118443982531286,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5118443982531286,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8979202534923436,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8979202534923436,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8979202534923436,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5897557925776622,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5897557925776622,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5897557925776622,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.0845269097222223,
        "frames": [
          12,
          80,
          139
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 4.459526909722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/16x9-duration-60-frame-7.png",
                "sha256": "e3f1d9f90d3d04170a77af8f0587fdbd7822644e1f4fcfb9695ae6c4db6dd83c",
                "alphaMass": 159838
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/16x9-duration-60-frame-59.png",
                "sha256": "73063ef97180dea5b7affca165263c8299c12cd32b9416efe3474948698c55eb",
                "alphaMass": 183440
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/16x9-duration-60-frame-52.png",
                "sha256": "f49017b41a9034e89692a9995d811332f828d958b8d4e0a61d4030a138d53bb0",
                "alphaMass": 183440
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 2.0845269097222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/16x9-duration-900-frame-12.png",
                "sha256": "a9552b886750462681c3708d2bebe92143af41e9c05c706d49d78fc50894638d",
                "alphaMass": 183514
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/16x9-duration-900-frame-80.png",
                "sha256": "f36b6af33b90b676e0f5f486ec91e2ebec81f921bb132bd28784674785c089c0",
                "alphaMass": 183440
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/16x9-duration-900-frame-792.png",
                "sha256": "eb7ce7e053325a343778e30194ffeaad17fca8a6caad489a529a14102220a2ee",
                "alphaMass": 183440
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/16x9-duration-900-frame-899.png",
                "sha256": "f36b6af33b90b676e0f5f486ec91e2ebec81f921bb132bd28784674785c089c0",
                "alphaMass": 183440
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 10.84787326388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/9x16-duration-60-frame-7.png",
                "sha256": "6299c93cb39f3dd9b44b490873dfb5bac198f4c23ea0d676a7d26facd8c776e9",
                "alphaMass": 284995
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/9x16-duration-60-frame-59.png",
                "sha256": "485213217f5857ebd52b7f98cc017311f432f6bd44ce83e68a83cbcb9a3f99cb",
                "alphaMass": 328606
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/9x16-duration-60-frame-52.png",
                "sha256": "16f7f64e134cff926e118142c732241955d9b2016629e533b9352fb1f1bae891",
                "alphaMass": 328606
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 6.773220486111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/9x16-duration-900-frame-12.png",
                "sha256": "b00fdd5a3812c522172370f0f5cb9e56bdf4485b713bf43dfabf1ba42cce74f7",
                "alphaMass": 329298
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/9x16-duration-900-frame-80.png",
                "sha256": "fa3038e5fbf3668fde81039d4622fe627f75a3c81ff882b9721cb879bebf53f3",
                "alphaMass": 328606
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/9x16-duration-900-frame-792.png",
                "sha256": "2bc1e64034e5baa0b91db29aadc9161a431e4456c9619b99983e808eefe9f1c7",
                "alphaMass": 328606
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/9x16-duration-900-frame-899.png",
                "sha256": "fa3038e5fbf3668fde81039d4622fe627f75a3c81ff882b9721cb879bebf53f3",
                "alphaMass": 328606
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 5.681098090277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/1x1-duration-60-frame-7.png",
                "sha256": "ecebcf8ffb5883a2f76481bf644c31302ad6596ecb72d12ad9c6985cbe260d81",
                "alphaMass": 178189
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/1x1-duration-60-frame-59.png",
                "sha256": "31e6af4584cef9f9ee7ab1838f65700f2072af282826361628c08a5b97fc3a66",
                "alphaMass": 204733
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/1x1-duration-60-frame-52.png",
                "sha256": "3e0f42e6e6bc3358fb35234994cebda9e3f58c83703837692131f1eb17a49dd9",
                "alphaMass": 204733
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 3.1371527777777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/1x1-duration-900-frame-12.png",
                "sha256": "97dbecae2666c7f655c68aa90064b97d2bec19a75da12b08fbe7a1a58512cf6d",
                "alphaMass": 204620
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/1x1-duration-900-frame-80.png",
                "sha256": "5a55ab091cb9f46c88329f279a461efd0dbfc454062ca38cc15b855c126105d0",
                "alphaMass": 204733
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/1x1-duration-900-frame-792.png",
                "sha256": "58db19bfe799d65c272f3d75ed2006cf41fc7cfb0215373b630ad52655d6e8a9",
                "alphaMass": 204733
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/cli-cascade/1x1-duration-900-frame-899.png",
                "sha256": "5a55ab091cb9f46c88329f279a461efd0dbfc454062ca38cc15b855c126105d0",
                "alphaMass": 204733
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
        "note": "Terminal types an install command, ASCII wordmark and a progress tree; syntax colors carry no purple; brands recolor wordmark and text."
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
      "bundleSha256": "ba98f3ab548e146803615be5d56216b5e5f6250a4f38bac707a1e02a8211c98c",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cli-cascade/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cli-cascade/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cli-cascade/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 140,
      "sha256": {
        "poster": "85bf4b84617e8bc1f208ec2e542ef4cf603389212cf66c171e85e056e1677b7c",
        "loop": "989ea8f5d4dd24f4413f798f83bcc568205d81bca10151eca9b1051a2f8f725f",
        "detail": "76be213ae01009311dc5737030d99805fe54799aadd90c22a8b66ce2b4a5982d"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cli-cascade/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cli-cascade/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cli-cascade/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 140,
      "sha256": {
        "poster": "1be758d91146deb8a01a4880bf5905e6bb3aefa44fef2ee914d286fc01ca3152",
        "loop": "c6d979c3f6b6c59058a0418bdfdc9cb9f953e84b8f73290eb9ff6e08c4c7eac6",
        "detail": "d5fc6fa78cf3119116979e2af283aa4e01a1bf43b339969525e126f2fb0fc4f2"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cli-cascade/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cli-cascade/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cli-cascade/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 140,
      "sha256": {
        "poster": "3a847397d06e866fa615043600f9fdd07669fca9570d6f0e3e15f4091a73d880",
        "loop": "ca8726e84c9ac4fe226ed6984fed8f628f8e9751bec59b2a134b4ab2553d51db",
        "detail": "4990650e8e841aa741709360619009e94ca595232f1e97f763a3879ebb9efe73"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ba98f3ab548e146803615be5d56216b5e5f6250a4f38bac707a1e02a8211c98c/index.mjs",
    "sha256": "ba98f3ab548e146803615be5d56216b5e5f6250a4f38bac707a1e02a8211c98c",
    "bytes": 169398,
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
      "overflow": true,
      "transparent": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    }
  },
  "intake": {
    "at": "2026-10-09T03:10:08.403Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
