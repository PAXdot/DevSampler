// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "slider-drag-payment-roll"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "slider-drag-payment-roll",
    "real-estate",
    "mortgage",
    "calculator"
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
      "in": 108,
      "out": 0
    },
    "markers": {
      "settled": 108
    },
    "beats": [
      0,
      27,
      54,
      81,
      108
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
      "key": "label",
      "type": "text",
      "maxChars": 26,
      "role": "label"
    },
    {
      "key": "payment",
      "type": "text",
      "maxChars": 8,
      "role": "value"
    },
    {
      "key": "save",
      "type": "text",
      "maxChars": 26,
      "role": "caption"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 20,
      "role": "cta"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.display",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "slider-drag-payment-roll",
      "prop": "transform",
      "from": "enter",
      "settledBy": 108,
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
    "ink": "#1C2622",
    "accent": "#24533F",
    "secondary": "#7FA58F",
    "paper": "#F8F6F1",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "label": "Your monthly payment",
    "payment": "$3,103",
    "save": "$387 less every month",
    "cta": "Get pre-approved"
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
      "brand": "fonts.display"
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
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 26,
      "role": "label"
    },
    {
      "key": "payment",
      "label": "Payment",
      "type": "text",
      "max": 8,
      "role": "value"
    },
    {
      "key": "save",
      "label": "Save",
      "type": "text",
      "max": 26,
      "role": "caption"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 20,
      "role": "cta"
    }
  ],
  "name": "Mortgage Payment Calculator",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-realty-mortgage",
    "bundleSha256": "b869340d4f581ee5e29dbbeafb218c96f036556929bde7e4a08e528e9daafea7",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:05:53.853Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/16x9-paper.png",
        "sha256": "d3d5854f63943fc511186330cabb0731afcb28b12cb28696b842cb397e863415"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/16x9-night.png",
        "sha256": "928b42635764e8f216c8f5d4ffb990abc348494eb4698329855beac5d171623c"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/16x9-color.png",
        "sha256": "0f1da78fe7b7acde4d2dc7b6caaf11eac1bf3e568b160e41eb09da8f0f5c47fa"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/9x16-paper.png",
        "sha256": "37f94d6e953fff18350c2a94fe73d23765e26874b397b8f7f8e8e07a7053d15a"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/9x16-night.png",
        "sha256": "f4f8f9d2706c6c714161dac71103d00c22866ed0e6af9e870ef56fd52ce1fcda"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/9x16-color.png",
        "sha256": "8a4a0dc7e932afce108dd0d7294d82b735db01a682d43405a4bd01bd86344e69"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/1x1-paper.png",
        "sha256": "772923037a88fd0176de0c0b5aadd8d146ba8779a54584b42178c4927f285670"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/1x1-night.png",
        "sha256": "275b16635b8786d4802608df0b91e0e73877f41e7c54290c34a493250e604515"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/1x1-color.png",
        "sha256": "c29dc2d64f129a3e12093e4e0d7bd1b90e0868de9b3587e937abbbf443b969c6"
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
          "mg-realty-mortgage--16x9",
          "mg-realty-mortgage--9x16",
          "mg-realty-mortgage--1x1"
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
            "paperNight": 100.40144856770833,
            "paperColor": 15.530680338541666,
            "region": {
              "left": 55,
              "top": 106,
              "width": 1750,
              "height": 939
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 107.298583984375,
            "paperColor": 23.584825303819443,
            "region": {
              "left": 56,
              "top": 129,
              "width": 967,
              "height": 1676
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 109.33449978298611,
            "paperColor": 17.387098524305557,
            "region": {
              "left": 24,
              "top": 258,
              "width": 1022,
              "height": 591
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
            "occupancy": 1.1231042860817169,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1231042860817169,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1231042860817169,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1076866767797657,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1076866767797657,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1076866767797657,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7303017657680357,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7303017657680357,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.733892236592854,
            "bad": [],
            "measured": 9
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.916558159722222,
        "frames": [
          16,
          108,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 6.170464409722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/16x9-duration-90-frame-10.png",
                "sha256": "0318067e06e34d687e46e4f5976c4313ebf120f6779dfd6e454ca81ce098c174",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/16x9-duration-90-frame-89.png",
                "sha256": "5b15a2020cd46f21fe67ec4328b4d230a88530fe61b608b3f8a7aeeff40498aa",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/16x9-duration-90-frame-79.png",
                "sha256": "4d03e89d02fa2f9368bb6eca4bca44fe7b45d6f6fa539c5390fb0bb1a02fa444",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 5.916558159722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/16x9-duration-900-frame-16.png",
                "sha256": "c8dda3f499ddff5d2c886046bfea88338cd159ae6daf48374e317ed2bd4bc3ec",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/16x9-duration-900-frame-108.png",
                "sha256": "6f21376fcccdb85cef44966f218154d0d26c7d3424971ac60d05632e32875d15",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/16x9-duration-900-frame-792.png",
                "sha256": "6f21376fcccdb85cef44966f218154d0d26c7d3424971ac60d05632e32875d15",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/16x9-duration-900-frame-899.png",
                "sha256": "03499117aa39da246b7b68bb333159a256768ff8dd307a23b542931d849e24aa",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 15.84494357638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/9x16-duration-90-frame-10.png",
                "sha256": "64074ef2a05482b073abc78c5885aa8272eb3d22708b7f0e95add481cc9d29f1",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/9x16-duration-90-frame-89.png",
                "sha256": "bb59649cd53c87699316882471e45ea510183273c45c9f5f5154c976b361c4f5",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/9x16-duration-90-frame-79.png",
                "sha256": "bb59649cd53c87699316882471e45ea510183273c45c9f5f5154c976b361c4f5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 15.263780381944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/9x16-duration-900-frame-16.png",
                "sha256": "840de652e0cc6726f1696208aff611d5ab770dc65efa4240614a6ebb29ea756e",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/9x16-duration-900-frame-108.png",
                "sha256": "bb59649cd53c87699316882471e45ea510183273c45c9f5f5154c976b361c4f5",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/9x16-duration-900-frame-792.png",
                "sha256": "bb59649cd53c87699316882471e45ea510183273c45c9f5f5154c976b361c4f5",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/9x16-duration-900-frame-899.png",
                "sha256": "bb59649cd53c87699316882471e45ea510183273c45c9f5f5154c976b361c4f5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 5.274522569444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/1x1-duration-90-frame-10.png",
                "sha256": "cdbb811937d744f5665a3a192131eaff37043fd4971fc011dbc75f43d3a028c4",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/1x1-duration-90-frame-89.png",
                "sha256": "3b932567da3670b4491a80d0c7ed066103a0931184712d49dc21a86b3a47bd17",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/1x1-duration-90-frame-79.png",
                "sha256": "3b932567da3670b4491a80d0c7ed066103a0931184712d49dc21a86b3a47bd17",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 4.9658203125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/1x1-duration-900-frame-16.png",
                "sha256": "0fb6c8cf7f65b428fbb5aabcfcd9efd5a8c0c8c930f3674c1c23ec0e14a9a1ab",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/1x1-duration-900-frame-108.png",
                "sha256": "3b932567da3670b4491a80d0c7ed066103a0931184712d49dc21a86b3a47bd17",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/1x1-duration-900-frame-792.png",
                "sha256": "3b932567da3670b4491a80d0c7ed066103a0931184712d49dc21a86b3a47bd17",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-realty-mortgage/1x1-duration-900-frame-899.png",
                "sha256": "3b932567da3670b4491a80d0c7ed066103a0931184712d49dc21a86b3a47bd17",
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
        "note": "Mortgage sliders settle and the monthly payment rolls in with a CTA; rebrands distinct."
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
      "bundleSha256": "b869340d4f581ee5e29dbbeafb218c96f036556929bde7e4a08e528e9daafea7",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.080Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-mortgage/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-mortgage/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-mortgage/16x9/detail.mp4",
      "bg": "#efede8",
      "posterFrame": 108,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "238a5f5a06ea9871dd27700bbe2ece28f835a28bfd2192c51047f4cb3af8ab8a",
        "loop": "a627ea4d6ea76657550bd355dd190bfcd40d34eabf300f58f7005ace44605455",
        "detail": "17b16ec5aef149982f986e7bbe6f5b4dbb6885aea7cdbbf660b852f8d5a356bc"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-mortgage/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-mortgage/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-mortgage/9x16/detail.mp4",
      "bg": "#efede8",
      "posterFrame": 108,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ce0c3bf1d6e9950182103fa1daff1d7fb83a2b9441b1bb42b885531cbb440c77",
        "loop": "8693300487309c7b14298c435b204eabe0395e78e7666118e982e9d35a3c64be",
        "detail": "a3947076c04cf56e3008c3284760d3da117af2f17e120d01c3c7c5fa16cef55e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-mortgage/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-mortgage/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-mortgage/1x1/detail.mp4",
      "bg": "#efede8",
      "posterFrame": 108,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "14739e1939e1b84b6b291e04b1f65a3e5f1c52c7155c07ced654286b233cd872",
        "loop": "7243e51fcf01a7f3c1837f5d87c03668db6900ce80909c65209051c86c608b2a",
        "detail": "c81a63df2ce5f867e91fb64232ca5ed1ee0602fbd73d6ba8910d3e188b480dbe"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/b869340d4f581ee5e29dbbeafb218c96f036556929bde7e4a08e528e9daafea7/index.mjs",
    "sha256": "b869340d4f581ee5e29dbbeafb218c96f036556929bde7e4a08e528e9daafea7",
    "bytes": 173368,
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
    "at": "2026-10-09T07:08:06.544Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
