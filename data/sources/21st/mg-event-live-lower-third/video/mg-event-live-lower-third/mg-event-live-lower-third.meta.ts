// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "editorial",
  "mechanic": [
    "lower-third-wipe-on-stage"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "lower-third-wipe-on-stage",
    "livestream",
    "lower-third",
    "keynote",
    "event"
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
      "in": 75,
      "out": 0
    },
    "markers": {
      "settled": 75
    },
    "beats": [
      0,
      19,
      38,
      56,
      75
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
      "key": "role",
      "type": "text",
      "maxChars": 32,
      "role": "label"
    },
    {
      "key": "talk",
      "type": "text",
      "maxChars": 24,
      "role": "caption"
    },
    {
      "key": "slide",
      "type": "text",
      "maxChars": 36,
      "role": "headline"
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
      "target": "lower-third-wipe-on-stage",
      "prop": "transform",
      "from": "enter",
      "settledBy": 75,
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
    "ink": "#FFFFFF",
    "accent": "#FF2D3D",
    "secondary": "#6C4FF5",
    "paper": "#0C0A18",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "name": "Ava Lindqvist",
    "role": "Head of Design, Northbeam",
    "talk": "Opening keynote",
    "slide": "Designing for the next billion"
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
      "key": "role",
      "label": "Role",
      "type": "text",
      "max": 32,
      "role": "label"
    },
    {
      "key": "talk",
      "label": "Talk",
      "type": "text",
      "max": 24,
      "role": "caption"
    },
    {
      "key": "slide",
      "label": "Slide",
      "type": "text",
      "max": 36,
      "role": "headline"
    }
  ],
  "name": "Live Stage Broadcast",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-event-live-lower-third",
    "bundleSha256": "720dafeb7d8ad3ff090be78041b77fe7bb61cf646f8c0972d0d5d366d9e992b8",
    "sourceSnapshot": {
      "sha256": "b342da95c90071ffb99c060c999d9fca49ed6722762d7db99795613749872dfe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T07:46:33.168Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/16x9-paper.png",
        "sha256": "af9e943185bbfb10e02efcdecfb1ba0400f76d2ab9f7aa1fa34247284e255a25"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/16x9-night.png",
        "sha256": "6d1bcf620518efa1254d44caed715b8da65db358ebea13054c379b65e9e0616b"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/16x9-color.png",
        "sha256": "d4efa8e2e28db0f0961c60be15b33445cdd41d28c2d995daf591ff5abc946d39"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/9x16-paper.png",
        "sha256": "81daeb7d5e74ecce024a5084d54820c9d4942e035cc8044c9c4e0b994500c0cb"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/9x16-night.png",
        "sha256": "4d29097fdc27d2c6e381711397de4155e8894b45dccf1bd5627235773e34e38f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/9x16-color.png",
        "sha256": "93b9c33075f27794894a372c470a8043d801d0502bee8ebf64a09420a7dbd4ee"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/1x1-paper.png",
        "sha256": "d248b5cec0bd784b1464481f07ec58d742088fcdbe19af8491ff3ea5fa9b1da6"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/1x1-night.png",
        "sha256": "883a73303e2be85aef1392e0c33a6599393583a4f85e34a59ad5b9b4081b4b40"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/1x1-color.png",
        "sha256": "061d1d949e68722ad4803e6af5eea040eb1aef4507152f9343ccad4d813012a8"
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
          "mg-event-live-lower-third--16x9",
          "mg-event-live-lower-third--9x16",
          "mg-event-live-lower-third--1x1"
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
            "paperNight": 30.125244140625,
            "paperColor": 8.095052083333334,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1920,
              "height": 1080
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 34.51527235243056,
            "paperColor": 10.711669921875,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1920
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 28.181043836805557,
            "paperColor": 7.576877170138889,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1080
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
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 11.7841796875,
        "frames": [
          11,
          75,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 11.809027777777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/16x9-duration-90-frame-10.png",
                "sha256": "bbc2c816ff552010ce9ea58a854a05d312fe017686920cc9e60673c70eb7053a",
                "alphaMass": 587520
              },
              {
                "frame": 75,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/16x9-duration-90-frame-75.png",
                "sha256": "55c463ad0e6dd2c63ab2deef9d8a82ebfc0cbf0743b869c52c8f3df01d765094",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/16x9-duration-90-frame-79.png",
                "sha256": "55c463ad0e6dd2c63ab2deef9d8a82ebfc0cbf0743b869c52c8f3df01d765094",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/16x9-duration-90-frame-89.png",
                "sha256": "55c463ad0e6dd2c63ab2deef9d8a82ebfc0cbf0743b869c52c8f3df01d765094",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 11.7841796875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/16x9-duration-900-frame-11.png",
                "sha256": "d0bd6f9bc280633b3a93dbe3a5ff6218e56026a1a4168e07bd24ae4bd4bfcd89",
                "alphaMass": 587520
              },
              {
                "frame": 75,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/16x9-duration-900-frame-75.png",
                "sha256": "55c463ad0e6dd2c63ab2deef9d8a82ebfc0cbf0743b869c52c8f3df01d765094",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/16x9-duration-900-frame-792.png",
                "sha256": "55c463ad0e6dd2c63ab2deef9d8a82ebfc0cbf0743b869c52c8f3df01d765094",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/16x9-duration-900-frame-899.png",
                "sha256": "55c463ad0e6dd2c63ab2deef9d8a82ebfc0cbf0743b869c52c8f3df01d765094",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 17.32964409722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/9x16-duration-90-frame-10.png",
                "sha256": "11232989b976ffab9c1424a3369285a10f67b4cad7cd0f602dfef9068ec78321",
                "alphaMass": 587520
              },
              {
                "frame": 75,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/9x16-duration-90-frame-75.png",
                "sha256": "b91a8f725f74751efeb767a85d8321cc5e957aaf8e68c66d97397b9bdefc39a1",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/9x16-duration-90-frame-79.png",
                "sha256": "b91a8f725f74751efeb767a85d8321cc5e957aaf8e68c66d97397b9bdefc39a1",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/9x16-duration-90-frame-89.png",
                "sha256": "b91a8f725f74751efeb767a85d8321cc5e957aaf8e68c66d97397b9bdefc39a1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 17.253255208333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/9x16-duration-900-frame-11.png",
                "sha256": "1b87b92176e8b7e7a48caa427a1e2c4344178480fe16a6ebab724c693c59ce24",
                "alphaMass": 587520
              },
              {
                "frame": 75,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/9x16-duration-900-frame-75.png",
                "sha256": "b91a8f725f74751efeb767a85d8321cc5e957aaf8e68c66d97397b9bdefc39a1",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/9x16-duration-900-frame-792.png",
                "sha256": "b91a8f725f74751efeb767a85d8321cc5e957aaf8e68c66d97397b9bdefc39a1",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/9x16-duration-900-frame-899.png",
                "sha256": "b91a8f725f74751efeb767a85d8321cc5e957aaf8e68c66d97397b9bdefc39a1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 13.034830729166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/1x1-duration-90-frame-10.png",
                "sha256": "b0cd809dc7300fcadfee3f2232a8a71746458af9f33c621b29e3d8502b0d604d",
                "alphaMass": 587520
              },
              {
                "frame": 75,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/1x1-duration-90-frame-75.png",
                "sha256": "0d7a09e608f8b1b784e71e3b308d210456084179022a739cd595ebc4d44904ad",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/1x1-duration-90-frame-79.png",
                "sha256": "0d7a09e608f8b1b784e71e3b308d210456084179022a739cd595ebc4d44904ad",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/1x1-duration-90-frame-89.png",
                "sha256": "0d7a09e608f8b1b784e71e3b308d210456084179022a739cd595ebc4d44904ad",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 12.993706597222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/1x1-duration-900-frame-11.png",
                "sha256": "629611eca8056091cac7388878eb6a4cacf3326165b6b264af47bf5e8148590c",
                "alphaMass": 587520
              },
              {
                "frame": 75,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/1x1-duration-900-frame-75.png",
                "sha256": "0d7a09e608f8b1b784e71e3b308d210456084179022a739cd595ebc4d44904ad",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/1x1-duration-900-frame-792.png",
                "sha256": "0d7a09e608f8b1b784e71e3b308d210456084179022a739cd595ebc4d44904ad",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-event-live-lower-third/1x1-duration-900-frame-899.png",
                "sha256": "0d7a09e608f8b1b784e71e3b308d210456084179022a739cd595ebc4d44904ad",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "titles",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Live stage broadcast with a slide, speaker lower third and up-next ticker; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 63,
        "compared": 63,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "720dafeb7d8ad3ff090be78041b77fe7bb61cf646f8c0972d0d5d366d9e992b8",
      "selectedBy": "serafim (repo owner) on 2026-10-09; visual review by claude",
      "at": "2026-10-09T07:49:52.845Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-live-lower-third/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-live-lower-third/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-live-lower-third/16x9/detail.mp4",
      "bg": "#1d1820",
      "posterFrame": 75,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "16b459845b1f7324b60ae611e8633b6ce31a9cfc881712119f935d6f7062b8e0",
        "loop": "3ce7ce2b2083d7e4f231cf2a0dd3ee1a9fc440f5a9b099877f7bb3e601152d53",
        "detail": "f3f147a63645945287eca1afe504960d193533dcdf63ec0703c3d6b308e11661"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-live-lower-third/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-live-lower-third/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-live-lower-third/9x16/detail.mp4",
      "bg": "#17121d",
      "posterFrame": 75,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9e7403c766e44ef3258fe770e5fac849f9a3d90509940a928c5f10a22ade7714",
        "loop": "e21522e48fc268d5ea837f8dfc271909802d74e250c253487e70c0566851b54f",
        "detail": "b9b85d07eb2218013b52ad24fd6a52a9096512435b9a444442d237e30f778254"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-live-lower-third/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-live-lower-third/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-live-lower-third/1x1/detail.mp4",
      "bg": "#120e1a",
      "posterFrame": 75,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "82d47c8495c0b9da0b080d4414dade7c3fcbf3408eb70e007d6cdf5492696c8e",
        "loop": "4be7e5687ac3fa8a2e9552c533f993e3081f97cd7842587e592b4d1b0f7e4769",
        "detail": "8a679264d7962de633d461551b840bde79d7b7866f06e8ff3ce8bc77a1eb04ef"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/720dafeb7d8ad3ff090be78041b77fe7bb61cf646f8c0972d0d5d366d9e992b8/index.mjs",
    "sha256": "720dafeb7d8ad3ff090be78041b77fe7bb61cf646f8c0972d0d5d366d9e992b8",
    "bytes": 296646,
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
    "at": "2026-10-09T08:01:06.812Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
