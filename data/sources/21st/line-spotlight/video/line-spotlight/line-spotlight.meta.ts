// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "code/walkthrough",
  "tags": [
    "code",
    "highlight",
    "walkthrough",
    "tutorial",
    "developer",
    "explainer"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 40,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 24,
      "out": 0
    },
    "markers": {
      "settled": 24
    },
    "beats": [
      0,
      14,
      50,
      86
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
      "key": "code",
      "type": "text",
      "maxChars": 700,
      "lines": 24,
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
      "target": "card",
      "prop": "scale",
      "from": "0.96",
      "settledBy": 12,
      "easing": "spring"
    },
    {
      "target": "spotlight",
      "prop": "y",
      "settledBy": 24,
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
      120
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study V13, twitter-remotion-research)"
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
    "title": "app/api/render/route.ts",
    "code": "import { renderVideo } from \"@acme/video\";\n\nexport async function POST(req: Request) {\n  const { doc } = await req.json();\n  const job = await renderVideo(doc, {\n    size: \"1080p\",\n    codec: \"h264\",\n  });\n  return Response.json({ id: job.id });\n}",
    "language": "ts",
    "lines": [
      3,
      5,
      9
    ],
    "holdFrames": 26,
    "theme": "dark",
    "lineNumbers": true,
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
      "key": "code",
      "label": "Code",
      "type": "text",
      "max": 700,
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
      "key": "lines",
      "label": "Lines",
      "type": "list",
      "max": 10
    },
    {
      "key": "holdFrames",
      "label": "Hold frames",
      "type": "number",
      "step": 1,
      "min": 6,
      "max": 120
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
      "key": "lineNumbers",
      "label": "Line numbers",
      "type": "boolean"
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    }
  ],
  "name": "Line Spotlight",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "line-spotlight",
    "bundleSha256": "23ed16cd37323a547d0402e8617e418e20fdc5342b4ca819accb72c799ec3181",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:36:51.473Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/16x9-paper.png",
        "sha256": "3907518595200adb78c1d5ebd9d05130a79e7ce1024e6c33decca6e3b138c7d7"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/16x9-night.png",
        "sha256": "1550bdb6bfb82a9012d226c8116396fbb717f3828860ae9ec95be749897caf91"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/16x9-color.png",
        "sha256": "a3dddeb8c507ded1bb20760022f0f9018dafd16a55aa7fe07691b30e488f5a34"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/9x16-paper.png",
        "sha256": "fc20753f98ce262ba167c2e435832301d92aa3458a26fc3180c2fe5be68f4dca"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/9x16-night.png",
        "sha256": "f0d816cea5c311c535c7a30b7f86cd547dd7d7e6038a9d8dba84a56521fda65d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/9x16-color.png",
        "sha256": "c6bbaa7c9a77cc5d114ad0cd148290b908b3700413e73cdfeda8ae0b588a11bd"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/1x1-paper.png",
        "sha256": "6f4b8036e9e651c9526da8bab6a615ab79364068d702051e5270fb2253460514"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/1x1-night.png",
        "sha256": "9418b9fc4986e099e6dab35d3041a81f1d2f02c91d81895ae6ca9cd92d1db47d"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/1x1-color.png",
        "sha256": "b6b41356f0e719d3b8f688fd694c8fcb87f42d5c73195025e80eee3220865f20"
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
          "line-spotlight--16x9",
          "line-spotlight--9x16",
          "line-spotlight--1x1"
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
            "paperNight": 137.47900390625,
            "paperColor": 15.664415147569445,
            "region": {
              "left": 453,
              "top": 213,
              "width": 1014,
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
            "paperNight": 140.67423502604166,
            "paperColor": 14.312201605902779,
            "region": {
              "left": 17,
              "top": 163,
              "width": 1046,
              "height": 1646
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 135.50371636284723,
            "paperColor": 16.360270182291668,
            "region": {
              "left": 77,
              "top": 239,
              "width": 926,
              "height": 644
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
            "occupancy": 0.4823515054169817,
            "bad": [],
            "measured": 75
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4823515054169817,
            "bad": [],
            "measured": 75
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4823515054169817,
            "bad": [],
            "measured": 75
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1767330710576414,
            "bad": [],
            "measured": 83
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1767330710576414,
            "bad": [],
            "measured": 83
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1767330710576414,
            "bad": [],
            "measured": 83
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.724587388682039,
            "bad": [],
            "measured": 75
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.724587388682039,
            "bad": [],
            "measured": 75
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.724587388682039,
            "bad": [],
            "measured": 75
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 14.372395833333334,
        "frames": [
          3,
          24,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 40,
            "averageChannelDifference": 14.372395833333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/16x9-duration-40-frame-3.png",
                "sha256": "08bdb26d9d7556cdf472c4cd205914844fdfbae5f872af188f8852a28c95a52b",
                "alphaMass": 61970
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/16x9-duration-40-frame-24.png",
                "sha256": "3ed9411da7f7259cde10322952daf8b43b7ed94ea09d94733f72dd4d471fc879",
                "alphaMass": 172224
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/16x9-duration-40-frame-35.png",
                "sha256": "3ed9411da7f7259cde10322952daf8b43b7ed94ea09d94733f72dd4d471fc879",
                "alphaMass": 172224
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/16x9-duration-40-frame-39.png",
                "sha256": "3ed9411da7f7259cde10322952daf8b43b7ed94ea09d94733f72dd4d471fc879",
                "alphaMass": 172224
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 14.372395833333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/16x9-duration-900-frame-3.png",
                "sha256": "08bdb26d9d7556cdf472c4cd205914844fdfbae5f872af188f8852a28c95a52b",
                "alphaMass": 61970
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/16x9-duration-900-frame-24.png",
                "sha256": "3ed9411da7f7259cde10322952daf8b43b7ed94ea09d94733f72dd4d471fc879",
                "alphaMass": 172224
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/16x9-duration-900-frame-792.png",
                "sha256": "87456d89cd5b745891a2387407cdeed846e40d099091a55051f8ce181e4b703b",
                "alphaMass": 172224
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/16x9-duration-900-frame-899.png",
                "sha256": "87456d89cd5b745891a2387407cdeed846e40d099091a55051f8ce181e4b703b",
                "alphaMass": 172224
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 40,
            "averageChannelDifference": 39.313259548611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/9x16-duration-40-frame-3.png",
                "sha256": "14040741f22422bd06be5ee3ea0119f7a6708368c46ac08bd487de497788295b",
                "alphaMass": 156622
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/9x16-duration-40-frame-24.png",
                "sha256": "5b065b0f3a5a2346893da41c8d48175081d6da49c073b242b2d8b3adddfb3b25",
                "alphaMass": 434752
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/9x16-duration-40-frame-35.png",
                "sha256": "5b065b0f3a5a2346893da41c8d48175081d6da49c073b242b2d8b3adddfb3b25",
                "alphaMass": 434752
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/9x16-duration-40-frame-39.png",
                "sha256": "5b065b0f3a5a2346893da41c8d48175081d6da49c073b242b2d8b3adddfb3b25",
                "alphaMass": 434752
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 39.313259548611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/9x16-duration-900-frame-3.png",
                "sha256": "14040741f22422bd06be5ee3ea0119f7a6708368c46ac08bd487de497788295b",
                "alphaMass": 156622
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/9x16-duration-900-frame-24.png",
                "sha256": "5b065b0f3a5a2346893da41c8d48175081d6da49c073b242b2d8b3adddfb3b25",
                "alphaMass": 434752
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/9x16-duration-900-frame-792.png",
                "sha256": "eaeb07ebe78a002a7d3b62763a3d8ed7a7d1df73ef4aadaa6960cf5bfda72bd9",
                "alphaMass": 434752
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/9x16-duration-900-frame-899.png",
                "sha256": "eaeb07ebe78a002a7d3b62763a3d8ed7a7d1df73ef4aadaa6960cf5bfda72bd9",
                "alphaMass": 434752
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 40,
            "averageChannelDifference": 21.940104166666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/1x1-duration-40-frame-3.png",
                "sha256": "ecf41eeaa1f8bf9bd87b27ef9a45796765fbcb0e54e8bb18674955dd9e98a507",
                "alphaMass": 91741
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/1x1-duration-40-frame-24.png",
                "sha256": "f6e35af9f651b6af5aa9ff2791b2d25f7d5ee501c23c73abac0333c1ca70df99",
                "alphaMass": 255108
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/1x1-duration-40-frame-35.png",
                "sha256": "f6e35af9f651b6af5aa9ff2791b2d25f7d5ee501c23c73abac0333c1ca70df99",
                "alphaMass": 255108
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/1x1-duration-40-frame-39.png",
                "sha256": "f6e35af9f651b6af5aa9ff2791b2d25f7d5ee501c23c73abac0333c1ca70df99",
                "alphaMass": 255108
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 21.940104166666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/1x1-duration-900-frame-3.png",
                "sha256": "ecf41eeaa1f8bf9bd87b27ef9a45796765fbcb0e54e8bb18674955dd9e98a507",
                "alphaMass": 91741
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/1x1-duration-900-frame-24.png",
                "sha256": "f6e35af9f651b6af5aa9ff2791b2d25f7d5ee501c23c73abac0333c1ca70df99",
                "alphaMass": 255108
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/1x1-duration-900-frame-792.png",
                "sha256": "f18de8ee5b5f6b8b5f926e26ba42eae8fd0010b65280d1cb51aa8d4242d8eea2",
                "alphaMass": 255108
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/line-spotlight/1x1-duration-900-frame-899.png",
                "sha256": "f18de8ee5b5f6b8b5f926e26ba42eae8fd0010b65280d1cb51aa8d4242d8eea2",
                "alphaMass": 255108
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
        "note": "A code panel spotlights one line after another; highlight is brand blue, syntax has no purple."
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
      "bundleSha256": "23ed16cd37323a547d0402e8617e418e20fdc5342b4ca819accb72c799ec3181",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/line-spotlight/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/line-spotlight/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/line-spotlight/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 24,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "9fcd3525811d6529fed677534f924b0954428c25061871fa0ebd6623cd1db4cd",
        "loop": "55fc4472364a52135cf717bc9c0d74aed1be6ce4e8c389f5e9aab0720a9d268b",
        "detail": "c1f19092bd1c628d03f9523f29d0619ffc0aad1b94a5b243d200dd027cbe10cc"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/line-spotlight/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/line-spotlight/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/line-spotlight/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 24,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "900d558070d5cfd83dcf509a0b251959b244eadb92f2cd666ccf388ab0bf6b89",
        "loop": "f1aefa3542a888efd45513863540f596a5d5983bc18069d2332909dfa8264144",
        "detail": "e917a8a5c3dc4ac729179e4d7f46ea74aea840de49a20795a1a1af48eab2ba46"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/line-spotlight/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/line-spotlight/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/line-spotlight/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 24,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "5e75de77d18fe92b650e1506a363dfcd9e1f570dee5f8dcd8a8959634c03443b",
        "loop": "07bc68350639b5d71eae46320547c7c7ba539c7fa1fc5d6991d8e347f574fee1",
        "detail": "d7aabb8f12f5f7461c086cef7ea078b3dde8a9d1c01ed4860d5a3ad159249608"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/23ed16cd37323a547d0402e8617e418e20fdc5342b4ca819accb72c799ec3181/index.mjs",
    "sha256": "23ed16cd37323a547d0402e8617e418e20fdc5342b4ca819accb72c799ec3181",
    "bytes": 169551,
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
    "at": "2026-10-09T03:20:24.052Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
