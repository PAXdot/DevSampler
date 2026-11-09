// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "grid-tap-to-book-toast"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "grid-tap-to-book-toast",
    "fitness",
    "schedule",
    "booking"
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
      "in": 93,
      "out": 0
    },
    "markers": {
      "settled": 93
    },
    "beats": [
      0,
      23,
      47,
      70,
      93
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
      "maxChars": 28,
      "role": "kicker"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 28,
      "role": "headline"
    },
    {
      "key": "picked",
      "type": "text",
      "maxChars": 16,
      "role": "label"
    },
    {
      "key": "toast",
      "type": "text",
      "maxChars": 22,
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
      "target": "grid-tap-to-book-toast",
      "prop": "transform",
      "from": "enter",
      "settledBy": 93,
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
    "ink": "#2A2438",
    "accent": "#7B5CE0",
    "secondary": "#C8FF2E",
    "paper": "#FBF7F1",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "MOVARA STUDIO · SOHO",
    "title": "This week on the mat",
    "picked": "Power Yoga",
    "toast": "You're in, Sam."
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
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 28,
      "role": "kicker"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 28,
      "role": "headline"
    },
    {
      "key": "picked",
      "label": "Picked",
      "type": "text",
      "max": 16,
      "role": "label"
    },
    {
      "key": "toast",
      "label": "Toast",
      "type": "text",
      "max": 22,
      "role": "label"
    }
  ],
  "name": "Class Schedule Booking",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fit-class-schedule",
    "bundleSha256": "5524ce89ce8347baf5047d7da726a628e4d55bc8b3b2bf34ca39996df8b6ebcd",
    "sourceSnapshot": {
      "sha256": "b342da95c90071ffb99c060c999d9fca49ed6722762d7db99795613749872dfe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T07:46:25.265Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/16x9-paper.png",
        "sha256": "19038aaafa1af031556c9beea22b1a183874cb76fd2066ee6dc60dc128bb7ace"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/16x9-night.png",
        "sha256": "a056b76944c486b5430fa2cd093b698348c23d332eb6ec67b93c38ace1335baa"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/16x9-color.png",
        "sha256": "a3843bc791ccfd918b33a549a2651a84337c128ef87f89ebdd87bd6573f308e3"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/9x16-paper.png",
        "sha256": "abbffdc7a52a7ec846bc13c53e88fa21fc424ab24df25290ad4af6c8b28359ab"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/9x16-night.png",
        "sha256": "6e35dd94f8318e6875e4bb02918d4b045ee9c57eb78f159e0990b4cd6e2c6c58"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/9x16-color.png",
        "sha256": "14f0fae88524932b66f87b0e6170dd31b61fe23231dac8e604d5e6263e2370de"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/1x1-paper.png",
        "sha256": "76882c7d197f7d381069dc23cf1801054ef6b85acf51bae0ac5724771187ffba"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/1x1-night.png",
        "sha256": "6bdef6811c33801a4fea249b51021deb46f8718c69663e2a3608fffefabe22be"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/1x1-color.png",
        "sha256": "7e12936fef540eb9743ebc571c0eb7af9d0cc022df703aaf083e825996c6d411"
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
          "mg-fit-class-schedule--16x9",
          "mg-fit-class-schedule--9x16",
          "mg-fit-class-schedule--1x1"
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
            "paperNight": 29.94536675347222,
            "paperColor": 7.967583550347222,
            "region": {
              "left": 96,
              "top": 66,
              "width": 1751,
              "height": 973
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 45.70787217881944,
            "paperColor": 14.224500868055555,
            "region": {
              "left": 49,
              "top": 111,
              "width": 982,
              "height": 1747
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 31.436686197916668,
            "paperColor": 7.933132595486111,
            "region": {
              "left": 54,
              "top": 59,
              "width": 987,
              "height": 1010
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
            "occupancy": 1.164435480660886,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.164435480660886,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.164435480660886,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1718503952506931,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1711792323668153,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.172521558134571,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2112462440394542,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2112462440394542,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2112462440394542,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 11.065538194444445,
        "frames": [
          13,
          93,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 11.066731770833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/16x9-duration-90-frame-10.png",
                "sha256": "a2e457e5b10fcccc90118f80dcba8f7b50c819bfdfadd989d85597e244414134",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/16x9-duration-90-frame-89.png",
                "sha256": "efddb379885ef554adfa46314a4ce5daf38e58f2d4432b420f461c4ed506a0bd",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/16x9-duration-90-frame-79.png",
                "sha256": "efddb379885ef554adfa46314a4ce5daf38e58f2d4432b420f461c4ed506a0bd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 11.065538194444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/16x9-duration-900-frame-13.png",
                "sha256": "8f716cf20eda1c84fd6f9f8814392e4cc51fdfa21b2a27ef066474933a1d3614",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/16x9-duration-900-frame-93.png",
                "sha256": "efddb379885ef554adfa46314a4ce5daf38e58f2d4432b420f461c4ed506a0bd",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/16x9-duration-900-frame-792.png",
                "sha256": "efddb379885ef554adfa46314a4ce5daf38e58f2d4432b420f461c4ed506a0bd",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/16x9-duration-900-frame-899.png",
                "sha256": "efddb379885ef554adfa46314a4ce5daf38e58f2d4432b420f461c4ed506a0bd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 10.913953993055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/9x16-duration-90-frame-10.png",
                "sha256": "163a5f85ea3afab170b96f9be6650c5ac5991158c958619fa4dfd494177e27d3",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/9x16-duration-90-frame-89.png",
                "sha256": "a4a877583a5bad7c259845ac97934f200c702a2001096bdbe2f574dcc2a386b6",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/9x16-duration-90-frame-79.png",
                "sha256": "a4a877583a5bad7c259845ac97934f200c702a2001096bdbe2f574dcc2a386b6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 10.910698784722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/9x16-duration-900-frame-13.png",
                "sha256": "f85fa1b08c50c15b9dd5f89631fbb6e40f349101363e23628e89350286a24954",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/9x16-duration-900-frame-93.png",
                "sha256": "a4a877583a5bad7c259845ac97934f200c702a2001096bdbe2f574dcc2a386b6",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/9x16-duration-900-frame-792.png",
                "sha256": "a4a877583a5bad7c259845ac97934f200c702a2001096bdbe2f574dcc2a386b6",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/9x16-duration-900-frame-899.png",
                "sha256": "a4a877583a5bad7c259845ac97934f200c702a2001096bdbe2f574dcc2a386b6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 11.924696180555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/1x1-duration-90-frame-10.png",
                "sha256": "f24c8725eeefda20378adf5bb3c66502432a28ed9b300426f2076efd32d9625b",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/1x1-duration-90-frame-89.png",
                "sha256": "49cbedef72ee30f2dcd565a9f7a2cc2664ee4a6c16fd733d8c24a6ad3f9a7564",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/1x1-duration-90-frame-79.png",
                "sha256": "49cbedef72ee30f2dcd565a9f7a2cc2664ee4a6c16fd733d8c24a6ad3f9a7564",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 11.92458767361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/1x1-duration-900-frame-13.png",
                "sha256": "dd6695c9901a4ab74c04930523d4a98e500e96d434c178976bb1b8eac2ac4373",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/1x1-duration-900-frame-93.png",
                "sha256": "49cbedef72ee30f2dcd565a9f7a2cc2664ee4a6c16fd733d8c24a6ad3f9a7564",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/1x1-duration-900-frame-792.png",
                "sha256": "49cbedef72ee30f2dcd565a9f7a2cc2664ee4a6c16fd733d8c24a6ad3f9a7564",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-class-schedule/1x1-duration-900-frame-899.png",
                "sha256": "49cbedef72ee30f2dcd565a9f7a2cc2664ee4a6c16fd733d8c24a6ad3f9a7564",
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
        "note": "Weekly class grid fills in, a cursor books a class and a confirmation slides in; rebrands distinct."
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
      "bundleSha256": "5524ce89ce8347baf5047d7da726a628e4d55bc8b3b2bf34ca39996df8b6ebcd",
      "selectedBy": "serafim (repo owner) on 2026-10-09; visual review by claude",
      "at": "2026-10-09T07:49:52.845Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-class-schedule/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-class-schedule/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-class-schedule/16x9/detail.mp4",
      "bg": "#eee7ef",
      "posterFrame": 93,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "fc623caa4dfd3244b3b728d42244b78ef9d1abeb0566421db387db7aa82badc1",
        "loop": "bad4be014237762c82cbb97cab1d3d58f0a5aded84f192714ad12fa05677f4e2",
        "detail": "8e57922eea9490dcf6f95ec4616fca428078ddf47217ef6a64768d685ac2909f"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-class-schedule/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-class-schedule/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-class-schedule/9x16/detail.mp4",
      "bg": "#eee7ef",
      "posterFrame": 93,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f09a1d1faa6a7a0e3f306e99e7f5a0169d746abd470a0d0e5d4b65e7a2d442d0",
        "loop": "efaca2f0903de824de711a5ebdf9c8bf93d5d47f8f988f346e8b7ef42208f597",
        "detail": "0165b265110309dcdded47dc79c017c85e1c7895a14dd356ca4050edcd214a70"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-class-schedule/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-class-schedule/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-class-schedule/1x1/detail.mp4",
      "bg": "#eee7ef",
      "posterFrame": 93,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d24b597f2d1582a23373fa9d21c9b32221073569ac3254e24d5ac9b7b60363ff",
        "loop": "071de279ec286ea1f5d2e9b1b203553c798b4ecf9edb98bb602ac0ff2f5b9d21",
        "detail": "de6e65a4ed408608fcd672d0ee72db6b2efaf6e4262f631f9c1d55e908551ba7"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/5524ce89ce8347baf5047d7da726a628e4d55bc8b3b2bf34ca39996df8b6ebcd/index.mjs",
    "sha256": "5524ce89ce8347baf5047d7da726a628e4d55bc8b3b2bf34ca39996df8b6ebcd",
    "bytes": 176062,
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
    "at": "2026-10-09T08:01:16.218Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
