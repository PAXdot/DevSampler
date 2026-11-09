// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "editorial",
  "mechanic": [
    "progress-fill-to-certificate"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "progress-fill-to-certificate",
    "certificate",
    "progress",
    "course",
    "graduation"
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
      "in": 95,
      "out": 0
    },
    "markers": {
      "settled": 95
    },
    "beats": [
      0,
      24,
      48,
      71,
      95
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
      "key": "name",
      "type": "text",
      "maxChars": 22,
      "role": "name"
    },
    {
      "key": "course",
      "type": "text",
      "maxChars": 32,
      "role": "label"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 30,
      "role": "kicker"
    },
    {
      "key": "school",
      "type": "text",
      "maxChars": 24,
      "role": "label"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.serif",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "progress-fill-to-certificate",
      "prop": "transform",
      "from": "enter",
      "settledBy": 95,
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
    "ink": "#1E3A2C",
    "accent": "#B8893A",
    "secondary": "#1E7A4F",
    "paper": "#EDE5D2",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "name": "Maya Okafor",
    "course": "Data Analytics Essentials",
    "title": "Certificate of Completion",
    "school": "Brightwell School"
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
      "brand": "fonts.serif"
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
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 22,
      "role": "name"
    },
    {
      "key": "course",
      "label": "Course",
      "type": "text",
      "max": 32,
      "role": "label"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 30,
      "role": "kicker"
    },
    {
      "key": "school",
      "label": "School",
      "type": "text",
      "max": 24,
      "role": "label"
    }
  ],
  "name": "Progress To Certificate",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-edu-certificate",
    "bundleSha256": "2d93c3ff1f3ad231e6862323d94312349b4179447af99c8ed721c7228ee869bb",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:09:34.912Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/16x9-paper.png",
        "sha256": "a1c1926eda76f936ca0665d175744f2838df8a3b40657ebb8c41e25efeb37bd7"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/16x9-night.png",
        "sha256": "12f02b2e64c4b0e96c1647ba42d998b25ccfae31cfc05f32fa6d03f502ec1249"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/16x9-color.png",
        "sha256": "7d6eff65fc0155dd0f10e4b7384b8feeddb5aeeeb72196a08fd15c4340fc1ae2"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/9x16-paper.png",
        "sha256": "6b4c82dfd2cc5b03f134f5a7e9ad78c572ac3999428f249978469325aca9643a"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/9x16-night.png",
        "sha256": "bf3746827c603a99d5d29d8f789878b6a66274a1c0f7f472c27fb0f17f1476cc"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/9x16-color.png",
        "sha256": "5eb7e0295599e42eb74699593defff0345457c41118c7cd6b22838d7e728bb8b"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/1x1-paper.png",
        "sha256": "f1d4ff0eca4d4bfde0ac190bcfdc72f6ac60ddf36e09bfd519fdc2de8b554f77"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/1x1-night.png",
        "sha256": "689395217ad80f8770e51c496c9f0e1e512594cad3a378358ad0768294194c9a"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/1x1-color.png",
        "sha256": "59f8d068b2d82555132a53fed3a9b570928c2443a52b6b0a4369a78ae6af2f6a"
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
          "mg-edu-certificate--16x9",
          "mg-edu-certificate--9x16",
          "mg-edu-certificate--1x1"
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
            "paperNight": 108.39336480034723,
            "paperColor": 10.653211805555555,
            "region": {
              "left": 237,
              "top": 93,
              "width": 1449,
              "height": 985
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 119.47675238715277,
            "paperColor": 14.91427951388889,
            "region": {
              "left": 31,
              "top": 53,
              "width": 1007,
              "height": 1827
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 115.69428168402777,
            "paperColor": 10.916368272569445,
            "region": {
              "left": 28,
              "top": 102,
              "width": 1010,
              "height": 888
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
            "occupancy": 0.9754860422178132,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9754860422178132,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9754860422178132,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.257431864528219,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.257431864528219,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.257431864528219,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.089753459682913,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.089753459682913,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.089753459682913,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 6.122504340277778,
        "frames": [
          14,
          95,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 6.109157986111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/16x9-duration-90-frame-10.png",
                "sha256": "e03e241b8c87fda879cb7eaed8a0d151e3c76f1c49ff27bbc9af02af69777e76",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/16x9-duration-90-frame-89.png",
                "sha256": "af4d9bd0b7b1d8036fbe81364d6fd3e3a679e2215754baa50b471aa94174ed7b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/16x9-duration-90-frame-79.png",
                "sha256": "af4d9bd0b7b1d8036fbe81364d6fd3e3a679e2215754baa50b471aa94174ed7b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 6.122504340277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/16x9-duration-900-frame-14.png",
                "sha256": "28fe71ea5744b763e102012413b5b227e4570dfa39c1a423d95410eb075d4506",
                "alphaMass": 587520
              },
              {
                "frame": 95,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/16x9-duration-900-frame-95.png",
                "sha256": "af4d9bd0b7b1d8036fbe81364d6fd3e3a679e2215754baa50b471aa94174ed7b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/16x9-duration-900-frame-792.png",
                "sha256": "af4d9bd0b7b1d8036fbe81364d6fd3e3a679e2215754baa50b471aa94174ed7b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/16x9-duration-900-frame-899.png",
                "sha256": "af4d9bd0b7b1d8036fbe81364d6fd3e3a679e2215754baa50b471aa94174ed7b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 9.513237847222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/9x16-duration-90-frame-10.png",
                "sha256": "c40d9c0d2cf02851cfa4abbdb909d1c04fa9d4bdc8834d08fc94aeaaa5792316",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/9x16-duration-90-frame-89.png",
                "sha256": "fb73699075be40c35bac366237897e05addfa48e0e64689722c3c60b61ab9715",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/9x16-duration-90-frame-79.png",
                "sha256": "fb73699075be40c35bac366237897e05addfa48e0e64689722c3c60b61ab9715",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 9.54763454861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/9x16-duration-900-frame-14.png",
                "sha256": "3fa99f984bd715fe3f7330c4759ef5c600d0c6499c99f38d85bf8e03f82e255c",
                "alphaMass": 587520
              },
              {
                "frame": 95,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/9x16-duration-900-frame-95.png",
                "sha256": "fb73699075be40c35bac366237897e05addfa48e0e64689722c3c60b61ab9715",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/9x16-duration-900-frame-792.png",
                "sha256": "fb73699075be40c35bac366237897e05addfa48e0e64689722c3c60b61ab9715",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/9x16-duration-900-frame-899.png",
                "sha256": "fb73699075be40c35bac366237897e05addfa48e0e64689722c3c60b61ab9715",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 6.667100694444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/1x1-duration-90-frame-10.png",
                "sha256": "7e2cd8bad17249844db51cd07084041037a93ec27fe2d62aa22827eb18a92466",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/1x1-duration-90-frame-89.png",
                "sha256": "1c34036cca49c78208189098ed358fe1a4d38b2b9817cbf4ff82b95d011e954e",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/1x1-duration-90-frame-79.png",
                "sha256": "1c34036cca49c78208189098ed358fe1a4d38b2b9817cbf4ff82b95d011e954e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 6.677625868055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/1x1-duration-900-frame-14.png",
                "sha256": "5fbb3723d59877f418c25169f2404fa406b9340cd48b2c8d01bba11e81f2d5cc",
                "alphaMass": 587520
              },
              {
                "frame": 95,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/1x1-duration-900-frame-95.png",
                "sha256": "1c34036cca49c78208189098ed358fe1a4d38b2b9817cbf4ff82b95d011e954e",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/1x1-duration-900-frame-792.png",
                "sha256": "1c34036cca49c78208189098ed358fe1a4d38b2b9817cbf4ff82b95d011e954e",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-certificate/1x1-duration-900-frame-899.png",
                "sha256": "1c34036cca49c78208189098ed358fe1a4d38b2b9817cbf4ff82b95d011e954e",
                "alphaMass": 587520
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
        "note": "Course progress fills to 100% and flips into a completion certificate; rebrands recolor the certificate."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 76,
        "compared": 76,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "2d93c3ff1f3ad231e6862323d94312349b4179447af99c8ed721c7228ee869bb",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.092Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-certificate/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-certificate/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-certificate/16x9/detail.mp4",
      "bg": "#ded8c5",
      "posterFrame": 95,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8f693a0876144a9fd52b46ebbd8b05ed984d3c5797aee1399a21b1bfb2f32f0b",
        "loop": "07e599418512e5228d65d33e334d0a47c1d9840bcee4affeed394f53ce548046",
        "detail": "a76d935b8eb3d800dd93c9cab8815b870aace15ee5251ca186c07370ddde9e54"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-certificate/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-certificate/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-certificate/9x16/detail.mp4",
      "bg": "#ded8c5",
      "posterFrame": 95,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "eec6c1ef4c221346d65c251515f5750d5775255d35d55eefc172bdb3c3dfdc5d",
        "loop": "f61beb104275cb9d86396acba862b72c74430f8c06eadbdcef1e370188aeed64",
        "detail": "37558480e4ebbf02cacf682dfbbf035be9deae6ceb4de5f2cb9d7accfe66c587"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-certificate/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-certificate/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-certificate/1x1/detail.mp4",
      "bg": "#ded8c6",
      "posterFrame": 95,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "df507dd6bf5cadf71b08f81077aeed775574003b7187045556da6ec5b4d9c391",
        "loop": "e15255e70563eb26bd9fba32b468bbe094839c82a6c5b76db6e9af891dd52e67",
        "detail": "f3c3d757dc3d351998405f87c0e3aff231fa58f46f9bbf5302660d9129fdc14c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/2d93c3ff1f3ad231e6862323d94312349b4179447af99c8ed721c7228ee869bb/index.mjs",
    "sha256": "2d93c3ff1f3ad231e6862323d94312349b4179447af99c8ed721c7228ee869bb",
    "bytes": 287731,
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
    "at": "2026-10-09T07:16:27.733Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
