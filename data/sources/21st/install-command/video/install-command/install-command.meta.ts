// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "cta/install",
  "tags": [
    "cta",
    "end card",
    "install",
    "command",
    "copy",
    "npm",
    "cli",
    "developer",
    "get started"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 75,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 80,
      "out": 0
    },
    "markers": {
      "settled": 80,
      "copy": 50
    },
    "beats": [
      0,
      12,
      50,
      64
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
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "eyebrow",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "kicker"
    },
    {
      "key": "tabs",
      "type": "list",
      "role": "label"
    },
    {
      "key": "command",
      "type": "text",
      "maxChars": 48,
      "lines": 2,
      "role": "code"
    },
    {
      "key": "copiedLabel",
      "type": "text",
      "maxChars": 16,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "hint",
      "type": "text",
      "maxChars": 48,
      "lines": 2,
      "role": "subline"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "surfaceColor": "colors.background",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "command",
      "prop": "chars",
      "from": "0",
      "settledBy": 36,
      "easing": "linear"
    },
    {
      "target": "cursor",
      "prop": "path",
      "settledBy": 50,
      "easing": "ease"
    },
    {
      "target": "copy",
      "prop": "icon",
      "from": "copy",
      "settledBy": 56,
      "easing": "spring"
    },
    {
      "target": "copiedLabel",
      "prop": "scale",
      "from": "0.6",
      "settledBy": 60,
      "easing": "spring"
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (install command copied by a click, 2026-10-06)"
  },
  "job": "cta",
  "language": "pixel-terminal",
  "mechanic": [
    "press"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "eyebrow": "Get started in one line",
    "tabs": [
      "npm",
      "pnpm",
      "bun"
    ],
    "command": "npm i @acme/cli",
    "copiedLabel": "Copied",
    "hint": "then run acme init",
    "color": "#EDEDEF",
    "accent": "#7C9CFF",
    "surfaceColor": "#111114",
    "background": "#09090B",
    "fontFamily": "Geist",
    "monoFontFamily": "Geist Mono"
  },
  "fields": [
    {
      "key": "eyebrow",
      "label": "Eyebrow",
      "type": "text",
      "max": 32,
      "role": "kicker"
    },
    {
      "key": "tabs",
      "label": "Tabs",
      "type": "list",
      "max": 4,
      "role": "label"
    },
    {
      "key": "command",
      "label": "Command",
      "type": "text",
      "max": 48,
      "role": "code"
    },
    {
      "key": "copiedLabel",
      "label": "Copied label",
      "type": "text",
      "max": 16,
      "role": "label"
    },
    {
      "key": "hint",
      "label": "Hint",
      "type": "text",
      "max": 48,
      "role": "subline"
    },
    {
      "key": "color",
      "label": "Color",
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
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    }
  ],
  "name": "Install Command Copy",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "install-command",
    "bundleSha256": "540ba80e66b40c8d3d521fa6dd238382ad86d991b741531f5251cae5496dec20",
    "sourceSnapshot": {
      "sha256": "2379ee5a77797fb19cffb07472566e8315f232c10108be14372e850fc8acfb4e",
      "files": 1489
    },
    "renderedAt": "2026-10-07T04:52:20.857Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/16x9-paper.png",
        "sha256": "bcc511c3b39b124900a2505419a7d60aa49321465a7a6bce9a601280488d2752"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/16x9-night.png",
        "sha256": "92337faedcc2a281b7fcde20b6de5a096f997c35f1aa1fbcfa1699121f3ecc41"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/16x9-color.png",
        "sha256": "a1f4ac15a692ff36ce32304f537d5cc5bc8dfa1d9a229eb01df31efeb856b8f3"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/9x16-paper.png",
        "sha256": "70414c23231b97d9090794225022b4ab301bebdfbb98fad7e6b639e68bdb2bcc"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/9x16-night.png",
        "sha256": "9e38a3ea3ed850c68770a3319f0444d0c18981570d19f7fa9bd42d936a89b29d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/9x16-color.png",
        "sha256": "bd4ce7a594094dc5e89568e9cfbdcb05d34a14f900df4bf8688837dc2032089c"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/1x1-paper.png",
        "sha256": "a1455d8180962edb92455b75b2f24606936b96deda4b7849058851000722c967"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/1x1-night.png",
        "sha256": "c6d3882d568e633c4d33e103ff7ae95a5a696f4e2bb684d16eafb8de1229e440"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/1x1-color.png",
        "sha256": "c8fa1b919340ed59ce353365781c5152f36d5af04b88624572431935f402be37"
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
          "install-command--16x9",
          "install-command--9x16",
          "install-command--1x1"
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
            "paperNight": 92.306640625,
            "paperColor": 24.28369140625,
            "region": {
              "left": 315,
              "top": 334,
              "width": 1290,
              "height": 423
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 64.04155815972223,
            "paperColor": 17.71332465277778,
            "region": {
              "left": 5,
              "top": 483,
              "width": 1070,
              "height": 944
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 91.31586371527777,
            "paperColor": 26.13189019097222,
            "region": {
              "left": 36,
              "top": 334,
              "width": 1008,
              "height": 423
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
            "occupancy": 0.36543110364001574,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.37118314725581597,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.35879738984071,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.667001947383892,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6881606648575069,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.667001947383892,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5045468118660359,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5156280619243583,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.49326629371455954,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.2847222222222223,
        "frames": [
          12,
          80,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 75,
            "averageChannelDifference": 2.2847222222222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/16x9-duration-75-frame-9.png",
                "sha256": "f6376c6821ee76903846ed8790d6f55dca91eff56f685fe0c80595256d338216",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/16x9-duration-75-frame-74.png",
                "sha256": "6055b70a9c8c2d6e351e2b82b020740403d3be6521556f5a76068fc30843a066",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/16x9-duration-75-frame-66.png",
                "sha256": "6055b70a9c8c2d6e351e2b82b020740403d3be6521556f5a76068fc30843a066",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 2.2847222222222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/16x9-duration-600-frame-12.png",
                "sha256": "f6376c6821ee76903846ed8790d6f55dca91eff56f685fe0c80595256d338216",
                "alphaMass": 587520
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/16x9-duration-600-frame-80.png",
                "sha256": "6055b70a9c8c2d6e351e2b82b020740403d3be6521556f5a76068fc30843a066",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/16x9-duration-600-frame-528.png",
                "sha256": "6055b70a9c8c2d6e351e2b82b020740403d3be6521556f5a76068fc30843a066",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/16x9-duration-600-frame-599.png",
                "sha256": "6055b70a9c8c2d6e351e2b82b020740403d3be6521556f5a76068fc30843a066",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 75,
            "averageChannelDifference": 4.5595703125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/9x16-duration-75-frame-9.png",
                "sha256": "d138255f5d54dbabae816a6c24dc6571bed0b286d924dd084921ac05707ba5dd",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/9x16-duration-75-frame-74.png",
                "sha256": "2e6968082e985e301faa647f171044dc64cbad8de9e5ec428b0ac0869fe143be",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/9x16-duration-75-frame-66.png",
                "sha256": "2e6968082e985e301faa647f171044dc64cbad8de9e5ec428b0ac0869fe143be",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 4.5595703125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/9x16-duration-600-frame-12.png",
                "sha256": "d138255f5d54dbabae816a6c24dc6571bed0b286d924dd084921ac05707ba5dd",
                "alphaMass": 587520
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/9x16-duration-600-frame-80.png",
                "sha256": "2e6968082e985e301faa647f171044dc64cbad8de9e5ec428b0ac0869fe143be",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/9x16-duration-600-frame-528.png",
                "sha256": "2e6968082e985e301faa647f171044dc64cbad8de9e5ec428b0ac0869fe143be",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/9x16-duration-600-frame-599.png",
                "sha256": "2e6968082e985e301faa647f171044dc64cbad8de9e5ec428b0ac0869fe143be",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 75,
            "averageChannelDifference": 4.093641493055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/1x1-duration-75-frame-9.png",
                "sha256": "a41c957ea527acab3ffafda0c7dfcba2a39698f23ce4981e5db893c2f4307eaf",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/1x1-duration-75-frame-74.png",
                "sha256": "01db12f2965d31e01dfb186083161cade0f81adcc9808451ce71723a5028da47",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/1x1-duration-75-frame-66.png",
                "sha256": "01db12f2965d31e01dfb186083161cade0f81adcc9808451ce71723a5028da47",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 4.093641493055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/1x1-duration-600-frame-12.png",
                "sha256": "a41c957ea527acab3ffafda0c7dfcba2a39698f23ce4981e5db893c2f4307eaf",
                "alphaMass": 587520
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/1x1-duration-600-frame-80.png",
                "sha256": "01db12f2965d31e01dfb186083161cade0f81adcc9808451ce71723a5028da47",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/1x1-duration-600-frame-528.png",
                "sha256": "01db12f2965d31e01dfb186083161cade0f81adcc9808451ce71723a5028da47",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/install-command/1x1-duration-600-frame-599.png",
                "sha256": "01db12f2965d31e01dfb186083161cade0f81adcc9808451ce71723a5028da47",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "cta",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "An install command types in, a cursor clicks Copy and it confirms Copied with a next-step hint; developer call to action."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 6,
        "compared": 6,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "540ba80e66b40c8d3d521fa6dd238382ad86d991b741531f5251cae5496dec20",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T04:53:11.024727Z",
      "basis": "Second wave: fixed held blocks and new testimonial/CTA blocks; see docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/install-command/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/install-command/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/install-command/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 80,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "c15cb0cdc6f973587255152b64e2650672ec27b039ff242160af19ff47c7a8a6",
        "loop": "0c0255ec7e4067383f4ec8b2b4665b1d9fa797a6cc37cb084c9d9b06a2b96d0f",
        "detail": "a98daafa82966f873013411af1b473336aabf3f583f5d3a6f4d86a0d5a3d7742"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/install-command/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/install-command/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/install-command/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 80,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "9bf9da09da625036a3f316746bf28fbc2b896938e70629cc64f1cb997d0630f3",
        "loop": "dec3bab56e6eefeea822635fa734e0702c5f41d0fbc114c79f92d1e0705291d6",
        "detail": "20f4a754f4a2c5475aa4a1a828084babd791a89fa3efae8e10d729cc10664dc5"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/install-command/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/install-command/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/install-command/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 80,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "9a5d4e4182b673f4fd3e048169695c6864dbecb35233a69c934e69c01387eede",
        "loop": "86ac72efbb612e29de9afe676507791bd3926a22961d1b03d4dcd79a9909c7b5",
        "detail": "88247423b68a4f0474765f8ca0fe791832882d60c3363317183001471b196145"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/540ba80e66b40c8d3d521fa6dd238382ad86d991b741531f5251cae5496dec20/index.mjs",
    "sha256": "540ba80e66b40c8d3d521fa6dd238382ad86d991b741531f5251cae5496dec20",
    "bytes": 174654,
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
    "at": "2026-10-07T04:57:43.653Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
