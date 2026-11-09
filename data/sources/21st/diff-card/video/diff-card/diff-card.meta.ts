// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "code/diff",
  "tags": [
    "diff",
    "code",
    "agent",
    "edit",
    "pull request",
    "ai",
    "tool call"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 110,
      "min": 45,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 50,
      "out": 0
    },
    "markers": {
      "settled": 50
    },
    "beats": [
      0,
      12,
      18,
      40
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
      "key": "action",
      "type": "text",
      "maxChars": 16,
      "lines": 1,
      "role": "kicker"
    },
    {
      "key": "removed",
      "type": "text",
      "maxChars": 400,
      "lines": 10,
      "role": "code"
    },
    {
      "key": "added",
      "type": "text",
      "maxChars": 500,
      "lines": 12,
      "role": "code"
    },
    {
      "key": "runningLabel",
      "type": "text",
      "maxChars": 16,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "doneLabel",
      "type": "text",
      "maxChars": 16,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "surfaceColor": "colors.background",
    "textColor": "colors.text",
    "secondaryColor": "colors.secondary",
    "accent": "colors.primary",
    "fontFamily": "fonts.body",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "removed",
      "prop": "opacity",
      "from": "0.3",
      "settledBy": 18,
      "easing": "ease"
    },
    {
      "target": "added",
      "prop": "opacity",
      "from": "0.3",
      "settledBy": 34,
      "easing": "ease"
    },
    {
      "target": "status",
      "prop": "swap",
      "settledBy": 46,
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
      110
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study V04, twitter-remotion-research)"
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
    "title": "components/hero.tsx",
    "action": "Edit",
    "removed": "<h1 className=\"text-4xl\">\n  Welcome to our website\n</h1>",
    "added": "<h1 className=\"text-6xl tracking-tight\">\n  Ship the component,\n  <em className=\"font-serif\"> not the screenshot.</em>\n</h1>",
    "language": "tsx",
    "runningLabel": "Running",
    "doneLabel": "Completed",
    "theme": "dark",
    "accent": "#3D63FF",
    "fontFamily": "Geist",
    "monoFontFamily": "Geist Mono"
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
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 40,
      "role": "label"
    },
    {
      "key": "action",
      "label": "Action",
      "type": "text",
      "max": 16,
      "role": "kicker"
    },
    {
      "key": "removed",
      "label": "Removed",
      "type": "text",
      "max": 400,
      "role": "code"
    },
    {
      "key": "added",
      "label": "Added",
      "type": "text",
      "max": 500,
      "role": "code"
    },
    {
      "key": "language",
      "label": "Language",
      "type": "select",
      "options": [
        "tsx",
        "ts",
        "js",
        "css",
        "json",
        "bash",
        "python",
        "plain"
      ]
    },
    {
      "key": "runningLabel",
      "label": "Running label",
      "type": "text",
      "max": 16,
      "role": "label"
    },
    {
      "key": "doneLabel",
      "label": "Done label",
      "type": "text",
      "max": 16,
      "role": "label"
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
  "name": "Diff Card",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "diff-card",
    "bundleSha256": "4a4cf0f0fe662ea82becffaca2e470a9c6f4b9cffe97f5d699f263f9395940e6",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:36:19.123Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/16x9-paper.png",
        "sha256": "265ec09f5125eb8af2ec3ee2a28d5a3090c0b1a54de056f49d1b9da4cb07e453"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/16x9-night.png",
        "sha256": "6ad73efbfb9705d9f192b8595cc3df6fc5db18a535ee9571a97c6eed23e70a55"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/16x9-color.png",
        "sha256": "7b4ac392db1bcb651036c1b4d718e7485257bfad68ffdfa9c6657f7f7d52802e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/9x16-paper.png",
        "sha256": "c09db153d5604e2cb1c90ade12745205714f7e587d623319ef5e5e873f6850af"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/9x16-night.png",
        "sha256": "7829d150e916c2e326033636aaf37d41847dd31100822acef26208fa79a914fa"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/9x16-color.png",
        "sha256": "4cbe24d639823de2f0a9fab885d10ba7bb292c7fd4b79140344fb4c38ddb52b7"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/1x1-paper.png",
        "sha256": "78b453b70d7188216ec710b273734f5307bbc5967c5f36f2281a2eb42efa5588"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/1x1-night.png",
        "sha256": "804b33d8879434e3a97f560a16120f81f74ee55779edba7c0838c449974a87fe"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/1x1-color.png",
        "sha256": "2cbf7310b7898bf59cdd83e69136b59a8753659d20cf267f7bdf573b7b65b4d5"
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
          "diff-card--16x9",
          "diff-card--9x16",
          "diff-card--1x1"
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
            "paperNight": 128.05905490451389,
            "paperColor": 16.886854383680557,
            "region": {
              "left": 345,
              "top": 226,
              "width": 1230,
              "height": 680
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 126.06708441840277,
            "paperColor": 17.847819010416668,
            "region": {
              "left": 17,
              "top": 259,
              "width": 1046,
              "height": 1454
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 120.77487521701389,
            "paperColor": 18.19216579861111,
            "region": {
              "left": 71,
              "top": 292,
              "width": 938,
              "height": 548
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
            "occupancy": 0.5716503422356598,
            "bad": [],
            "measured": 52
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5716503422356598,
            "bad": [],
            "measured": 52
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5716503422356598,
            "bad": [],
            "measured": 52
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.039471376256264,
            "bad": [],
            "measured": 58
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.039471376256264,
            "bad": [],
            "measured": 58
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.039471376256264,
            "bad": [],
            "measured": 58
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6245645263134976,
            "bad": [],
            "measured": 52
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6245645263134976,
            "bad": [],
            "measured": 52
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6245645263134976,
            "bad": [],
            "measured": 52
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 6.643880208333333,
        "frames": [
          7,
          50,
          109
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 12.6767578125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/16x9-duration-45-frame-5.png",
                "sha256": "7a1d5c7471bcd0da4601ed245098263947cf13b1b84ccb7f0a7b4c649df5c6d2",
                "alphaMass": 122292
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/16x9-duration-45-frame-44.png",
                "sha256": "b8a02e5ff9be74518acf23ee269988c1f777cc9a74f0f31d77aebfba79601b17",
                "alphaMass": 201440
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/16x9-duration-45-frame-39.png",
                "sha256": "f0ffadc882b4adad890957f8f0b16093b03f08407753fa4fb57c9b4e12e71df6",
                "alphaMass": 201440
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 6.643880208333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/16x9-duration-600-frame-7.png",
                "sha256": "5e34c36e0763e2af20c025a2c73e11edf2859bb4966c52061459358a005c54a0",
                "alphaMass": 174360
              },
              {
                "frame": 50,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/16x9-duration-600-frame-50.png",
                "sha256": "eff5e345bc6fd1ba15f1df16c4b6cb78e6d6ad32a40c905237b0a1bfbcdfe5eb",
                "alphaMass": 201440
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/16x9-duration-600-frame-528.png",
                "sha256": "a0b789e365e84062bd17031ee9dee7831f5695eedf7cbd620fe9066337dd62fc",
                "alphaMass": 201440
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/16x9-duration-600-frame-599.png",
                "sha256": "a0b789e365e84062bd17031ee9dee7831f5695eedf7cbd620fe9066337dd62fc",
                "alphaMass": 201440
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 27.876627604166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/9x16-duration-45-frame-5.png",
                "sha256": "a4eacec5ef486db3a6d57217df71ec3b6511029f02f0bd39e3d222bed0fed251",
                "alphaMass": 233539
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/9x16-duration-45-frame-44.png",
                "sha256": "4e6ff7434ca218347179de8b8c291af7c4cc0baa7d09eb2f005b98215d690056",
                "alphaMass": 382542
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/9x16-duration-45-frame-39.png",
                "sha256": "426545fe1340696859e9abccca7d04fd0a4b29902ed320ccac2ffb35bd7de1d9",
                "alphaMass": 382542
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 16.485243055555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/9x16-duration-600-frame-7.png",
                "sha256": "dbf9dbfbd4ac2b0a4545de47d1ca7cf3420fc257268965f1df096033e8c3f4be",
                "alphaMass": 332155
              },
              {
                "frame": 50,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/9x16-duration-600-frame-50.png",
                "sha256": "2d6ff140b1a0afde1b1e8996caf14c7314424fd7647179257cb8ebdf3f40bb67",
                "alphaMass": 382542
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/9x16-duration-600-frame-528.png",
                "sha256": "174a882fa32d04c5bbcb486421930ee33ce4148965b96e2b50a6ef0bf215b335",
                "alphaMass": 382542
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/9x16-duration-600-frame-599.png",
                "sha256": "174a882fa32d04c5bbcb486421930ee33ce4148965b96e2b50a6ef0bf215b335",
                "alphaMass": 382542
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 13.1357421875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/1x1-duration-45-frame-5.png",
                "sha256": "f3661c8ae4156fd6c510334becc6bb753a8597c6e94b37b1ee4c8c9390e97070",
                "alphaMass": 127831
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/1x1-duration-45-frame-44.png",
                "sha256": "450da4b2e757b023258807cb77e812abf96b07d8e0571acff9c84ff9245b3bd5",
                "alphaMass": 209209
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/1x1-duration-45-frame-39.png",
                "sha256": "6cfbe28df212d2139ba2d96e52fcc963a82be3b519dc827e5cdebd30a40a4cba",
                "alphaMass": 209209
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 7.702256944444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/1x1-duration-600-frame-7.png",
                "sha256": "0ce10aca6ec6d54a2d99195355aa2a597e050620a2f92490ebcbed7ea71a0e2d",
                "alphaMass": 181922
              },
              {
                "frame": 50,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/1x1-duration-600-frame-50.png",
                "sha256": "ddc1a07c05c39623e56b4a363810152c722f260cebba6eb59b3719387d5d221a",
                "alphaMass": 209209
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/1x1-duration-600-frame-528.png",
                "sha256": "569eebc462dd0a825f23464d024c168fe2e4185e4166fa580e93d01322e7b44e",
                "alphaMass": 209209
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/diff-card/1x1-duration-600-frame-599.png",
                "sha256": "569eebc462dd0a825f23464d024c168fe2e4185e4166fa580e93d01322e7b44e",
                "alphaMass": 209209
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
        "note": "A diff card shows removed and added JSX lines and flips to Completed; syntax colors carry no purple."
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
      "bundleSha256": "4a4cf0f0fe662ea82becffaca2e470a9c6f4b9cffe97f5d699f263f9395940e6",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/diff-card/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/diff-card/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/diff-card/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 50,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "b3e30e48ca100a64d2de623c227b1df8af089e26fa045921db5aacbce320e915",
        "loop": "bd2ace5e425c0125d221ed520c1f5e96d96dff0eade77fa5e6bf7aae9a46ae4f",
        "detail": "796be845df94fb440d7e45ff1f4ba9e46e68eb30d953b7ea21e7bddecceb3a38"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/diff-card/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/diff-card/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/diff-card/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 50,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "6285cc7dbbd1944d5bec02d12bcf6d6de0b2ab5bedb0c484afef3db86b98072f",
        "loop": "581a2d6ea09d75efffdeb3389fa1f6a6b90e60be46dd6041b8b15c010b8e26e5",
        "detail": "ff9051b6fbb29b1472cc876cb80697381b744f29443376dcc9b8c259d73a0fa2"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/diff-card/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/diff-card/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/diff-card/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 50,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "cbdf7e516bf53b818b4c08fd5bd9498c09f406e9f9d6232460ec4a274100b60a",
        "loop": "94154f7f072e42a04f6c62a2c1dfb75f66e8eb3333d247cf0400a5dede41e848",
        "detail": "caf22ebf64402219f1e33895aceb0283d03f1ef9282a75a4d3b62630504064d7"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/4a4cf0f0fe662ea82becffaca2e470a9c6f4b9cffe97f5d699f263f9395940e6/index.mjs",
    "sha256": "4a4cf0f0fe662ea82becffaca2e470a9c6f4b9cffe97f5d699f263f9395940e6",
    "bytes": 171505,
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
    "at": "2026-10-09T03:14:14.867Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
