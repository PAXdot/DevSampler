// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "glass",
  "mechanic": [
    "chapter-playhead-highlight"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "chapter-playhead-highlight",
    "video",
    "chapters",
    "lesson",
    "player"
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
      "in": 90,
      "out": 0
    },
    "markers": {
      "settled": 90
    },
    "beats": [
      0,
      23,
      45,
      68,
      90
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
      "key": "title",
      "type": "text",
      "maxChars": 26,
      "role": "headline"
    },
    {
      "key": "chapter",
      "type": "text",
      "maxChars": 24,
      "role": "label"
    },
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 20,
      "role": "kicker"
    },
    {
      "key": "brand",
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
    "displayFont": "fonts.serif",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "chapter-playhead-highlight",
      "prop": "transform",
      "from": "enter",
      "settledBy": 90,
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
    "ink": "#1D1B38",
    "accent": "#7C5CFF",
    "secondary": "#FF6BB5",
    "paper": "#EEE8FA",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "title": "Color that works",
    "chapter": "Building a palette",
    "kicker": "Lesson 4 of 12",
    "brand": "Brightwell · Visual Design Track"
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
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 26,
      "role": "headline"
    },
    {
      "key": "chapter",
      "label": "Chapter",
      "type": "text",
      "max": 24,
      "role": "label"
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 20,
      "role": "kicker"
    },
    {
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 36,
      "role": "label"
    }
  ],
  "name": "Lesson Chapter Player",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-edu-chapters",
    "bundleSha256": "769ed9040723663d3f70c3621f57fcb933a4553a519accef0d0d3126357db2eb",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:10:05.852Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/16x9-paper.png",
        "sha256": "a05538f4757e9996a14b6b4cca9e5c2a425d0408a90abf421a6921aa8d86f56f"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/16x9-night.png",
        "sha256": "422c30eeec1be51b4dd2358c9bf74b7a3c35f9c670fd42048a0bd072ce8de394"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/16x9-color.png",
        "sha256": "f9609a4fc7b6af28f1b097677457356792fbf38c3edac45189a7c27a76720c16"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/9x16-paper.png",
        "sha256": "c8451d225a5f6391bd453ee3c9dcd2bc782d8084cd4665e331c188a721b831f4"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/9x16-night.png",
        "sha256": "7d062d58f9af29ea0b7a68c899fb22e47bd99dffde8a06a8e7b2b9447aa499e3"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/9x16-color.png",
        "sha256": "d8f9410f2882f00f2fa5cf8457ea9081fb75dacd610f586daf9bc17fa3cfe5f1"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/1x1-paper.png",
        "sha256": "3c250401f337eb540655560195bfb6856a723c4c73b204526c14576cbc750178"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/1x1-night.png",
        "sha256": "1371707a029ca5e8a9ed8bee7cd17f6ab183e991cf4412505d7087002f096a98"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/1x1-color.png",
        "sha256": "e092b2551711d8e68cb099c488cd523e25e09d2079e53f676162326758d2bb98"
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
          "mg-edu-chapters--16x9",
          "mg-edu-chapters--9x16",
          "mg-edu-chapters--1x1"
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
            "paperNight": 50.811930338541664,
            "paperColor": 10.314860026041666,
            "region": {
              "left": 59,
              "top": 115,
              "width": 1778,
              "height": 856
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 64.74107530381944,
            "paperColor": 14.337103949652779,
            "region": {
              "left": 44,
              "top": 96,
              "width": 992,
              "height": 1713
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 55.69731987847222,
            "paperColor": 10.953559027777779,
            "region": {
              "left": 140,
              "top": 49,
              "width": 800,
              "height": 945
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
            "occupancy": 1.0389970513668432,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0389970513668432,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.040212252596512,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1614097799613674,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1614097799613674,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1600537848884411,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9185773074661965,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9185773074661965,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9185773074661965,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.7282986111111112,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 1.8101128472222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/16x9-duration-90-frame-10.png",
                "sha256": "4c6d801f10c3fbcd28e2f53926634d3896f9695b967125a988ae4fa89723ad23",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/16x9-duration-90-frame-89.png",
                "sha256": "866720e20b25a3e7ae739a2edcd3a4f2a7217f52c1be6f4f23e39c75b1e26be4",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/16x9-duration-90-frame-79.png",
                "sha256": "866720e20b25a3e7ae739a2edcd3a4f2a7217f52c1be6f4f23e39c75b1e26be4",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 1.7282986111111112,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/16x9-duration-900-frame-13.png",
                "sha256": "3fcee19c145dc98b4315ba5eb2766b9ec4d426f2521afa90dfa07694e26fea90",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/16x9-duration-900-frame-90.png",
                "sha256": "866720e20b25a3e7ae739a2edcd3a4f2a7217f52c1be6f4f23e39c75b1e26be4",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/16x9-duration-900-frame-792.png",
                "sha256": "866720e20b25a3e7ae739a2edcd3a4f2a7217f52c1be6f4f23e39c75b1e26be4",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/16x9-duration-900-frame-899.png",
                "sha256": "866720e20b25a3e7ae739a2edcd3a4f2a7217f52c1be6f4f23e39c75b1e26be4",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 2.840603298611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/9x16-duration-90-frame-10.png",
                "sha256": "cb42942481ad137d9e05902d5b4073cd3406133e3e04dda72992794eca69a9d8",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/9x16-duration-90-frame-89.png",
                "sha256": "954aa52aa9eb44a8230b6add43b697e94ba480a96a4dc1057e94316977875e60",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/9x16-duration-90-frame-79.png",
                "sha256": "954aa52aa9eb44a8230b6add43b697e94ba480a96a4dc1057e94316977875e60",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 2.7987196180555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/9x16-duration-900-frame-13.png",
                "sha256": "9b4623f087667a2ced5defed896307447fb4f880e015cc0ac7a8d1f769cbad63",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/9x16-duration-900-frame-90.png",
                "sha256": "954aa52aa9eb44a8230b6add43b697e94ba480a96a4dc1057e94316977875e60",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/9x16-duration-900-frame-792.png",
                "sha256": "954aa52aa9eb44a8230b6add43b697e94ba480a96a4dc1057e94316977875e60",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/9x16-duration-900-frame-899.png",
                "sha256": "954aa52aa9eb44a8230b6add43b697e94ba480a96a4dc1057e94316977875e60",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 1.7682291666666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/1x1-duration-90-frame-10.png",
                "sha256": "a307e03dbed4cc369176804759984db1ebb906bdcbb58fd25b81be3fcde061a7",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/1x1-duration-90-frame-89.png",
                "sha256": "5d7d07422190de8079e95152b2ef9923778fa5ffa6b86828e6482f373ffc4584",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/1x1-duration-90-frame-79.png",
                "sha256": "5d7d07422190de8079e95152b2ef9923778fa5ffa6b86828e6482f373ffc4584",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 1.6614583333333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/1x1-duration-900-frame-13.png",
                "sha256": "f2a4c43890dcbf1c31ad75b8735878682383cf487f9789082903e165b7eb3c93",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/1x1-duration-900-frame-90.png",
                "sha256": "5d7d07422190de8079e95152b2ef9923778fa5ffa6b86828e6482f373ffc4584",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/1x1-duration-900-frame-792.png",
                "sha256": "5d7d07422190de8079e95152b2ef9923778fa5ffa6b86828e6482f373ffc4584",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-chapters/1x1-duration-900-frame-899.png",
                "sha256": "5d7d07422190de8079e95152b2ef9923778fa5ffa6b86828e6482f373ffc4584",
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
        "note": "Lesson player with chapter caption beside a flowing lesson title and chapter list; no overlaps in any brand."
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
      "bundleSha256": "769ed9040723663d3f70c3621f57fcb933a4553a519accef0d0d3126357db2eb",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.093Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-chapters/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-chapters/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-chapters/16x9/detail.mp4",
      "bg": "#e0d7fa",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "52208bcb99e0bb0bd016507532eaa9c1de2c2e03f8c42714e45d3b6aca96930e",
        "loop": "dc67862b74aacb574ca5854c3c6b16f3b63ec10e90b9e992efbbc007827df731",
        "detail": "9739a2c8d1af0110ca0eb3d063bc20d265aa8fc2a2780446705c46c98149023e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-chapters/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-chapters/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-chapters/9x16/detail.mp4",
      "bg": "#e0d7fa",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "b88aef2867f79ac2b25cf5cb211be0ff2de1195c97b2964f3871ac4a289a8e0b",
        "loop": "820f03749b22b05baa702cc119c889f3c1697ba8d8fb00ad463d6135702198f4",
        "detail": "93f4357e7ad4f3c00fa2d8235c7be449b78c068286b97ae743b6c755344b936f"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-chapters/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-chapters/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-chapters/1x1/detail.mp4",
      "bg": "#e0d7fa",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7481339f225c064d655c9e3e637f1ec6ead6cb2a6c71d1d16acd269e4983f089",
        "loop": "237ff38b0b76f8f7a05e8206fa0962fd2ce598c7aea93045241d93ae96dce92a",
        "detail": "6a6d06cbaee05ca1c7ffda7b9bd4d87007dee6ef9fbe6342e83bf12fc0044b92"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/769ed9040723663d3f70c3621f57fcb933a4553a519accef0d0d3126357db2eb/index.mjs",
    "sha256": "769ed9040723663d3f70c3621f57fcb933a4553a519accef0d0d3126357db2eb",
    "bytes": 287725,
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
    "at": "2026-10-09T07:16:56.142Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
