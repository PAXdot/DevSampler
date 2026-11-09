// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "process/motion-gallery",
  "job": "process",
  "language": "product-ui",
  "mechanic": [
    "candidate-walks-step-timeline"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "process",
    "candidate-walks-step-timeline",
    "hiring",
    "process",
    "timeline",
    "steps"
  ],
  "engines": {
    "remotion": ">=4.0.533 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 90,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 102,
      "out": 0
    },
    "markers": {
      "settled": 102
    },
    "beats": [
      0,
      26,
      51,
      77,
      102
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
      "paintBackground"
    ]
  },
  "slots": [
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 26,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 26,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 70,
      "role": "body"
    },
    {
      "key": "badge",
      "type": "text",
      "maxChars": 36,
      "role": "label"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.heading",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "candidate-walks-step-timeline",
      "prop": "transform",
      "from": "enter",
      "settledBy": 102,
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
    "sourceUrl": "docs/research/launch-videos-2026-10-06/README.md"
  },
  "defaults": {
    "ink": "#121826",
    "accent": "#FF5B2E",
    "secondary": "#667085",
    "paper": "#FFFFFF",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Hiring at Wayfold",
    "headline": "How we hire",
    "sub": "Four steps, about two weeks. No unpaid take-home marathons.",
    "badge": "Avg. 12 days from hello to offer"
  },
  "fields": [
    {
      "key": "ink",
      "label": "Ink",
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
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "paper",
      "label": "Paper",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "displayFont",
      "label": "Display font",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "bodyFont",
      "label": "Body font",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFont",
      "label": "Mono font",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "paintBackground",
      "label": "Paint background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 26,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 26,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 70,
      "role": "body"
    },
    {
      "key": "badge",
      "label": "Badge",
      "type": "text",
      "max": 36,
      "role": "label"
    }
  ],
  "name": "Hiring Process Timeline",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-hire-process",
    "bundleSha256": "58d08cdf5531915db4e51d1d07fa1703cfb47fb26acf717f484ef92ada7b0fcc",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:02:12.894Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/16x9-paper.png",
        "sha256": "32867af23c8c5d5870c7fadc576ccb878a59e5529d232fe87dd8e42318ae3e56"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/16x9-night.png",
        "sha256": "2d7d5e618538abd0111b245dedffe8feb8a8b03aedc555ff32ac7f563854539e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/16x9-color.png",
        "sha256": "3ff0b31534a1010bea4e3c73ad64c0d46b740d13f5377da5f636f2c714830d9f"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/9x16-paper.png",
        "sha256": "94b02b75d381fa3be754b59db32531cf02ea8500dbbecaad5cfd27e550649ecb"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/9x16-night.png",
        "sha256": "acf348ee7f6e9c690f25b3a0e67f065043245cd249ae4d3b263db3bc1797c098"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/9x16-color.png",
        "sha256": "b78a2d74cb0af52c46d7a5b9242249345a987bd0b518a062b8cd884a0c4f0b8f"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/1x1-paper.png",
        "sha256": "b5ac7ee5f658c2d463f16ef66ecc4c1bc099176b39c4e75f7af4145d49c6cce2"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/1x1-night.png",
        "sha256": "81381d0c2c3336e614e3e09eaa153c9c012c300a94ba0661ef60cac0831739b9"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/1x1-color.png",
        "sha256": "e0e52005585447564169e31a49dde7b1cc819ab4874796487ea289721a1224ef"
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
          "mg-hire-process--16x9",
          "mg-hire-process--9x16",
          "mg-hire-process--1x1"
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
            "paperNight": 69.03724500868056,
            "paperColor": 12.472330729166666,
            "region": {
              "left": 69,
              "top": 103,
              "width": 1810,
              "height": 977
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 112.14762369791667,
            "paperColor": 22.000135633680557,
            "region": {
              "left": 65,
              "top": 119,
              "width": 961,
              "height": 1721
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 79.04237196180556,
            "paperColor": 14.17800564236111,
            "region": {
              "left": 56,
              "top": 69,
              "width": 981,
              "height": 987
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
            "occupancy": 1.2086194592291652,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2086194592291652,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2086194592291652,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1290565850182668,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.130370205245164,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1297133951317155,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1752759231264525,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1764678865373313,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1752759231264525,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.223849826388889,
        "frames": [
          15,
          102,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 7.320746527777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/16x9-duration-90-frame-10.png",
                "sha256": "1d96c73ab251b9d1bcb0c4b785387f5eb5fa142ec81f9a44863c5f9d4cbc5026",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/16x9-duration-90-frame-89.png",
                "sha256": "a3409f92be3b8cba535b42ef5bcef84f52abff3edba00e71f210c36c9c137569",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/16x9-duration-90-frame-79.png",
                "sha256": "a3409f92be3b8cba535b42ef5bcef84f52abff3edba00e71f210c36c9c137569",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.223849826388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/16x9-duration-900-frame-15.png",
                "sha256": "507ba79adc9b435b78d744645aeac3970ad94f59979fa3b131815a6361292ebe",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/16x9-duration-900-frame-102.png",
                "sha256": "a3409f92be3b8cba535b42ef5bcef84f52abff3edba00e71f210c36c9c137569",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/16x9-duration-900-frame-792.png",
                "sha256": "a3409f92be3b8cba535b42ef5bcef84f52abff3edba00e71f210c36c9c137569",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/16x9-duration-900-frame-899.png",
                "sha256": "a3409f92be3b8cba535b42ef5bcef84f52abff3edba00e71f210c36c9c137569",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 17.58940972222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/9x16-duration-90-frame-10.png",
                "sha256": "ca6d60fb6366af84de7b16168e7b9441c84c9ce2e08de78f7beca7ac70e82404",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/9x16-duration-90-frame-89.png",
                "sha256": "232f535c264bde915034d04422962c66c81e907c61d01059916af58f24131cb2",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/9x16-duration-90-frame-79.png",
                "sha256": "232f535c264bde915034d04422962c66c81e907c61d01059916af58f24131cb2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 17.42013888888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/9x16-duration-900-frame-15.png",
                "sha256": "09b44ddb7785c52fbbd8d750b89bde2ec74097ed0bd0c6bc7529733d463a2811",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/9x16-duration-900-frame-102.png",
                "sha256": "232f535c264bde915034d04422962c66c81e907c61d01059916af58f24131cb2",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/9x16-duration-900-frame-792.png",
                "sha256": "232f535c264bde915034d04422962c66c81e907c61d01059916af58f24131cb2",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/9x16-duration-900-frame-899.png",
                "sha256": "232f535c264bde915034d04422962c66c81e907c61d01059916af58f24131cb2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 8.072699652777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/1x1-duration-90-frame-10.png",
                "sha256": "95e858bdd1b40021edada0d553ded855433e911490f189101598ce0603b04f3c",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/1x1-duration-90-frame-89.png",
                "sha256": "3013c6b9e1d929d8db7b49aaab2fcb1430b59e4423450ec77ba830f3c35e12b0",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/1x1-duration-90-frame-79.png",
                "sha256": "3013c6b9e1d929d8db7b49aaab2fcb1430b59e4423450ec77ba830f3c35e12b0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 7.94140625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/1x1-duration-900-frame-15.png",
                "sha256": "5d699722013ed0a054415723355f04fffad9cbd072d49302e0bc87f1b0bae10d",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/1x1-duration-900-frame-102.png",
                "sha256": "3013c6b9e1d929d8db7b49aaab2fcb1430b59e4423450ec77ba830f3c35e12b0",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/1x1-duration-900-frame-792.png",
                "sha256": "3013c6b9e1d929d8db7b49aaab2fcb1430b59e4423450ec77ba830f3c35e12b0",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind3-9/mg-hire-process/1x1-duration-900-frame-899.png",
                "sha256": "3013c6b9e1d929d8db7b49aaab2fcb1430b59e4423450ec77ba830f3c35e12b0",
                "alphaMass": 587520
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
        "note": "Four-step hiring timeline fills to the offer with step cards; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 21,
        "compared": 21,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "58d08cdf5531915db4e51d1d07fa1703cfb47fb26acf717f484ef92ada7b0fcc",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.091Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-process/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-process/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-process/16x9/detail.mp4",
      "bg": "#f8f8f8",
      "posterFrame": 102,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9cd0648a171446f1fa40133134d86b927678d19c96b779336364be1acc454f68",
        "loop": "948932a7abce68a8748130d62afd37b22594db92076af99e17d2b3e2da9da10b",
        "detail": "701453239e42dac6745967e35c4fcf28146ecaded9de5da483aca413c4e4cc37"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-process/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-process/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-process/9x16/detail.mp4",
      "bg": "#f8f8f8",
      "posterFrame": 102,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a930ed3bf107fbf6bd8834c51cbf45743aa521189a2b5ca91f8d7d854cb54901",
        "loop": "0cc031c6605feadd5aec8d4ed9da12e0d7ed60e05fbd98d9485026a7d822cfd5",
        "detail": "38c5e0a2615e62cd3e49b6a63ef0d49f74b98c14eff8cabed907fa9b88e94216"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-process/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-process/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-process/1x1/detail.mp4",
      "bg": "#f8f8f8",
      "posterFrame": 102,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "17678f427f6ab8f2bf60c23baa28e07ee4cfbf6524cf3d4788c3d72577f76d2b",
        "loop": "4e565b5abe4a896c30609278cab595ffdd0c0afd21565e4c9f0cb79782978c3d",
        "detail": "f76e965b488bb765e51f8ea772965d7b022a02ba124422432fed87be7cf8a5f5"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/58d08cdf5531915db4e51d1d07fa1703cfb47fb26acf717f484ef92ada7b0fcc/index.mjs",
    "sha256": "58d08cdf5531915db4e51d1d07fa1703cfb47fb26acf717f484ef92ada7b0fcc",
    "bytes": 200220,
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
    "at": "2026-10-09T07:15:31.239Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
