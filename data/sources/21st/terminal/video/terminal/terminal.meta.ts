// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/terminal",
  "tags": [
    "terminal",
    "cli",
    "install",
    "developer",
    "code"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 60,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 20,
      "out": 0
    },
    "markers": {
      "settled": 130
    },
    "beats": [
      0,
      20,
      24,
      77,
      87,
      93,
      99,
      113,
      130
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
    "backdrop": [
      "background"
    ]
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
      "key": "lines",
      "type": "list",
      "maxChars": 80,
      "lines": 10,
      "role": "code"
    }
  ],
  "brand": {
    "fontFamily": "fonts.body",
    "monoFontFamily": "fonts.mono",
    "accent": "colors.primary",
    "background": "colors.background",
    "windowColor": "colors.background",
    "textColor": "colors.text"
  },
  "motionBeats": [
    {
      "target": "window",
      "prop": "scale",
      "from": "0.96",
      "settledBy": 20,
      "easing": "spring"
    },
    {
      "target": "lines",
      "prop": "type",
      "from": "",
      "settledBy": 130,
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
      "frame": 134
    },
    "hover": [
      0,
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st-ads/remotion/ui.tsx"
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
    "title": "~/my-app",
    "lines": [
      {
        "text": "npx shadcn@latest add https://21st.dev/r/video/21st/terminal",
        "kind": "cmd"
      },
      {
        "text": "Checking registry.",
        "kind": "dim"
      },
      {
        "text": "Installing dependencies.",
        "kind": "dim"
      },
      {
        "text": "Created 1 file: src/video/terminal/terminal.tsx",
        "kind": "ok"
      },
      {
        "text": "npx remotion studio",
        "kind": "cmd"
      }
    ],
    "cps": 34,
    "accent": "#3fb950",
    "background": "transparent",
    "windowColor": "#0d0d0f",
    "textColor": "#FFFFFF",
    "fontFamily": "Geist",
    "monoFontFamily": "Geist Mono"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 40,
      "role": "label"
    },
    {
      "key": "lines",
      "label": "Lines",
      "type": "list",
      "max": 10,
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
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "windowColor",
      "label": "Window color",
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
      "key": "fontFamily",
      "label": "Font family",
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
  "name": "Terminal",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "terminal",
    "bundleSha256": "d7b286973455b7a17a59a041c9ad0335dda95a89beb60aae647bde19ffb5aade",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:04:04.200Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/16x9-paper.png",
        "sha256": "e15704bf135c01cb15727f8eb23a83ba29e928dcb707332f96a309d449a2bdde"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/16x9-night.png",
        "sha256": "4b2e13f94989d761877c50d400194151086332e22d139019405496d31624a205"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/16x9-color.png",
        "sha256": "33ba824738acc655ed1b3afaa3edb0cd08c891f0a15f8e320feb2645b83205d4"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/9x16-paper.png",
        "sha256": "54f1cef532277afd6548f6b3f0c00503b8c9268a1a7d26112f9188805b5c5a0a"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/9x16-night.png",
        "sha256": "c4a09f1126e741577fea785072055ceba81b2e7e8dd8928147bc450e009cbe7b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/9x16-color.png",
        "sha256": "4680f0cc2442789721d3537a10c15156483d12389c5f5b6dffe5f3ce74251371"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/1x1-paper.png",
        "sha256": "035ddfbacee2f412adfbbeb418780b7c80157ca7a137236759061ac7e33a933a"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/1x1-night.png",
        "sha256": "bb476be41d8291b61eac3e60eba9f38ad014500095836b83da80e6de929a83dc"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/1x1-color.png",
        "sha256": "9e8ddbaef9bff87c3c81c61cca56fd8c010bfcb9d7949ee00740f9dd25dd87da"
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
          "terminal--16x9",
          "terminal--9x16",
          "terminal--1x1"
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
            "paperNight": 111.48586697048611,
            "paperColor": 22.20819769965278,
            "region": {
              "left": 204,
              "top": 297,
              "width": 1512,
              "height": 538
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 118.05533854166667,
            "paperColor": 20.83083767361111,
            "region": {
              "left": 2,
              "top": 218,
              "width": 1076,
              "height": 1548
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 107.60042317708333,
            "paperColor": 22.513319227430557,
            "region": {
              "left": 96,
              "top": 347,
              "width": 888,
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
            "occupancy": 0.5559689153439155,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5559689153439155,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5559689153439155,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1384125409423032,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1384125409423032,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1384125409423032,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4639544432313393,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4639544432313393,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4639544432313393,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.6110026041666667,
        "frames": [
          18,
          134,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 7.395833333333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/16x9-duration-60-frame-7.png",
                "sha256": "130bf32cd3d10e3596eb8d644c63bc80cf784d63875436ba54d7c146434063e7",
                "alphaMass": 117838
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/16x9-duration-60-frame-59.png",
                "sha256": "f6a5b1b98c4d77d59e51068e339f73396ce30b396c67bdf135908f9db15737bc",
                "alphaMass": 169368
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/16x9-duration-60-frame-52.png",
                "sha256": "cd7ae73eaf1f90051a44c259c222f3ebf91a630ecec5282841c0dd0ae954fdc6",
                "alphaMass": 169368
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 1.6128472222222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/16x9-duration-900-frame-20.png",
                "sha256": "63ba2152bf195356a5f03f0d48416b0918f52115d52da8952a45c07470780a21",
                "alphaMass": 169752
              },
              {
                "frame": 134,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/16x9-duration-900-frame-134.png",
                "sha256": "634b53128a87b563e484ff9136a2d783b4986f70af08ce009544a86d24d21526",
                "alphaMass": 169368
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/16x9-duration-900-frame-792.png",
                "sha256": "f6a5b1b98c4d77d59e51068e339f73396ce30b396c67bdf135908f9db15737bc",
                "alphaMass": 169368
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/16x9-duration-900-frame-899.png",
                "sha256": "634b53128a87b563e484ff9136a2d783b4986f70af08ce009544a86d24d21526",
                "alphaMass": 169368
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 18.604600694444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/9x16-duration-60-frame-7.png",
                "sha256": "6066b9d8a47c9a2273715d8dcc8d9ef8429b208c021fb00ec6e9055dcddaae7d",
                "alphaMass": 258263
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/9x16-duration-60-frame-59.png",
                "sha256": "8713ca6a6357c93feb16b5760f0086a1229151260717aff695864d1b4d10f942",
                "alphaMass": 373754
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/9x16-duration-60-frame-52.png",
                "sha256": "ba61e2ddeec0915e00c359584810d333b81851fb30254b5772ac962963c6ca20",
                "alphaMass": 373754
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 5.421115451388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/9x16-duration-900-frame-20.png",
                "sha256": "fe7e5cabfe4f04ca5c6da0bdf3721d37f4e40c5fb3991533b6da77d2cc7f657f",
                "alphaMass": 374189
              },
              {
                "frame": 134,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/9x16-duration-900-frame-134.png",
                "sha256": "b5f10d20ee881e2e3422ae3b1539ea919115eeed75b740671b99b1bb645302a6",
                "alphaMass": 373754
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/9x16-duration-900-frame-792.png",
                "sha256": "8713ca6a6357c93feb16b5760f0086a1229151260717aff695864d1b4d10f942",
                "alphaMass": 373754
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/9x16-duration-900-frame-899.png",
                "sha256": "b5f10d20ee881e2e3422ae3b1539ea919115eeed75b740671b99b1bb645302a6",
                "alphaMass": 373754
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 5.3466796875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/1x1-duration-60-frame-7.png",
                "sha256": "b6b9ec8d51f116fc824a3a7e96136c0568771f643f74577ae6fbd334d8ffc0be",
                "alphaMass": 93440
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/1x1-duration-60-frame-59.png",
                "sha256": "5f0b94db22c4cafc2056a1029275f7446a8a5705f47bd5be2bdddac8d3f022db",
                "alphaMass": 134254
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/1x1-duration-60-frame-52.png",
                "sha256": "093fdb147a34c6d9a27249e40e3a1dabe810b810ea7a5c93c6d0e21dc6306052",
                "alphaMass": 134254
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 0.6610243055555556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/1x1-duration-900-frame-20.png",
                "sha256": "51874d6e81769aa780d80f3ab074aa6ed2a918a2383ca76e7d536242e44982b2",
                "alphaMass": 133883
              },
              {
                "frame": 134,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/1x1-duration-900-frame-134.png",
                "sha256": "dd8bd944606ed9a655bb8c60e09afd9cb46e812c774353b3b10ee59e49bd37e4",
                "alphaMass": 134254
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/1x1-duration-900-frame-792.png",
                "sha256": "5f0b94db22c4cafc2056a1029275f7446a8a5705f47bd5be2bdddac8d3f022db",
                "alphaMass": 134254
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/terminal/1x1-duration-900-frame-899.png",
                "sha256": "dd8bd944606ed9a655bb8c60e09afd9cb46e812c774353b3b10ee59e49bd37e4",
                "alphaMass": 134254
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
        "note": "A terminal types an install command and prints its output; the window is small in 16:9."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 10,
        "compared": 10,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "d7b286973455b7a17a59a041c9ad0335dda95a89beb60aae647bde19ffb5aade",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.017147Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/terminal/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/terminal/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/terminal/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 134,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "bb83a5d0c841b8830e6336b67825af371718d08120604c243e99e01c55ec626e",
        "loop": "ff9d6c574225c3371f26032bfc940a34e3dfea71e60240cd0282f46af26f6e8c",
        "detail": "268e363b3b4100ae4c9ade34a262fb54e2273aa810784d7a3c092b929398adcc"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/terminal/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/terminal/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/terminal/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 134,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "1d4ed498910f1b941f1990d5f271ba35d45b234c3690cd4a32e9bd06236d4c6f",
        "loop": "44becd94b1b8e85b09c3ec480165cab25470577499401597f10976f553e20096",
        "detail": "daa1b0422e64eab57a181d37eaab10196c79ecf1caacae5df1e6efcd5b3d753a"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/terminal/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/terminal/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/terminal/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 134,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "b3972af9f18f23536a133b01a58eaffcfd514af0e1f08408d6de28b22fcb4b52",
        "loop": "f0a13a1b3d198435f7ac121b4ec03f7d6f0be7ec4956f820a7ed96aa1ed07e06",
        "detail": "4b2529a3a89ccd848abf6bc035b8114fca5876d9a3273b29c41f08c8bc4eb80c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d7b286973455b7a17a59a041c9ad0335dda95a89beb60aae647bde19ffb5aade/index.mjs",
    "sha256": "d7b286973455b7a17a59a041c9ad0335dda95a89beb60aae647bde19ffb5aade",
    "bytes": 164809,
    "externals": [
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
    "at": "2026-10-07T02:33:39.033Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
