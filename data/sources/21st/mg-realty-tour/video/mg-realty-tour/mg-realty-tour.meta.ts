// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "gallery/motion-gallery",
  "job": "gallery",
  "language": "editorial",
  "mechanic": [
    "room-crossfade-ken-burns"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "gallery",
    "room-crossfade-ken-burns",
    "real-estate",
    "home-tour",
    "rooms"
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
      "in": 141,
      "out": 0
    },
    "markers": {
      "settled": 141
    },
    "beats": [
      0,
      35,
      71,
      106,
      141
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
      "key": "brand",
      "type": "text",
      "maxChars": 18,
      "role": "label"
    },
    {
      "key": "roomA",
      "type": "text",
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "roomB",
      "type": "text",
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "roomC",
      "type": "text",
      "maxChars": 22,
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
      "target": "room-crossfade-ken-burns",
      "prop": "transform",
      "from": "enter",
      "settledBy": 141,
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
    "accent": "#E7B852",
    "secondary": "#C9A46A",
    "paper": "#1B1612",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "brand": "Halden",
    "roomA": "The living room",
    "roomB": "The kitchen",
    "roomC": "The main bedroom"
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
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 18,
      "role": "label"
    },
    {
      "key": "roomA",
      "label": "Room a",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "roomB",
      "label": "Room b",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "roomC",
      "label": "Room c",
      "type": "text",
      "max": 22,
      "role": "headline"
    }
  ],
  "name": "Room By Room Tour",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-realty-tour",
    "bundleSha256": "2ef09135dcdc1d0179c73084eddabaf839ebf27fc5a3a766076a2c3782497ec0",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:20:52.210Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/16x9-paper.png",
        "sha256": "ea53ec7adc7bafb9d510178e9ed4085ba315a0cd235c0d49408a5dab1821984d"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/16x9-night.png",
        "sha256": "1363751ea260c141df192fc22363a465aae62a6de4c6f33c37e675f804d34bbc"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/16x9-color.png",
        "sha256": "4ffd4e596c6bb9685280116df59843cda766298c68afb4ba6e48839cd99e599f"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/9x16-paper.png",
        "sha256": "dd99a6c5886d6ce08bb6e9e90ad7c1653d91868ac6f4435ffcd6e91d2da2769a"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/9x16-night.png",
        "sha256": "50e7a4ccc08e1f0b48ddfad3416014bbfc31156a45a6d163f5e135b0514729b9"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/9x16-color.png",
        "sha256": "e01f8ba17456ca85b0981b13b59d58d91bb9aae0734ea09d72d0b757da55e9dc"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/1x1-paper.png",
        "sha256": "c13ce67ecc33e6978fee302530e03a723cc9eebde7fda17afd717e381e94905c"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/1x1-night.png",
        "sha256": "f2fcd832f41a6cbd9805d4cf53bd44b745ac59c9f32d083dbb75d430e3029054"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/1x1-color.png",
        "sha256": "3d7fc84fdc7f56f45c1a02c128c087854182e179c232e51d627abfe4ea499352"
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
          "mg-realty-tour--16x9",
          "mg-realty-tour--9x16",
          "mg-realty-tour--1x1"
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
            "paperNight": 39.39545355902778,
            "paperColor": 3.6979166666666665,
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
            "paperNight": 46.30674913194444,
            "paperColor": 5.506374782986111,
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
            "paperNight": 38.313151041666664,
            "paperColor": 4.357991536458333,
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
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 20.92111545138889,
        "frames": [
          21,
          141,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 20.94748263888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/16x9-duration-90-frame-10.png",
                "sha256": "26a0a3ecbc9b1917bb0549294ec179abb88a40ba5ecafd38a7d2f27482fbd9e3",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/16x9-duration-90-frame-89.png",
                "sha256": "6cc96343ea8c18eb7b01fd240e9be8f6a70ebf1e14cb07c56c502781f3318078",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/16x9-duration-90-frame-79.png",
                "sha256": "6cc96343ea8c18eb7b01fd240e9be8f6a70ebf1e14cb07c56c502781f3318078",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 20.92111545138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/16x9-duration-900-frame-21.png",
                "sha256": "655bbdddaed4482cae4b029f94114761cb68b04d6c716907e02aad6d7ed81d17",
                "alphaMass": 587520
              },
              {
                "frame": 141,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/16x9-duration-900-frame-141.png",
                "sha256": "6cc96343ea8c18eb7b01fd240e9be8f6a70ebf1e14cb07c56c502781f3318078",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/16x9-duration-900-frame-792.png",
                "sha256": "6cc96343ea8c18eb7b01fd240e9be8f6a70ebf1e14cb07c56c502781f3318078",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/16x9-duration-900-frame-899.png",
                "sha256": "6cc96343ea8c18eb7b01fd240e9be8f6a70ebf1e14cb07c56c502781f3318078",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 27.188585069444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/9x16-duration-90-frame-10.png",
                "sha256": "c18bfe77d0204b7e14465435547359291b1e392aad16138a7917c61f94aebf54",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/9x16-duration-90-frame-89.png",
                "sha256": "e8dff0d2285bb7617b8f0673684af4c9e4ef7900af800364df13b635d61ecd60",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/9x16-duration-90-frame-79.png",
                "sha256": "e8dff0d2285bb7617b8f0673684af4c9e4ef7900af800364df13b635d61ecd60",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 27.24858940972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/9x16-duration-900-frame-21.png",
                "sha256": "8593483abca5a4e832d0136304dc204dbcdbc4d5bc70760234632f9c410a09ba",
                "alphaMass": 587520
              },
              {
                "frame": 141,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/9x16-duration-900-frame-141.png",
                "sha256": "e8dff0d2285bb7617b8f0673684af4c9e4ef7900af800364df13b635d61ecd60",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/9x16-duration-900-frame-792.png",
                "sha256": "e8dff0d2285bb7617b8f0673684af4c9e4ef7900af800364df13b635d61ecd60",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/9x16-duration-900-frame-899.png",
                "sha256": "e8dff0d2285bb7617b8f0673684af4c9e4ef7900af800364df13b635d61ecd60",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 25.89377170138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/1x1-duration-90-frame-10.png",
                "sha256": "42c8bd4bcdb4ad7dcf3160817baddf4f3385b190df6501d57753160b1eeb56fa",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/1x1-duration-90-frame-89.png",
                "sha256": "7a472a70187e9f17c1bb65750f7a695679850d34e4d1030de9c640b6bfdb551c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/1x1-duration-90-frame-79.png",
                "sha256": "7a472a70187e9f17c1bb65750f7a695679850d34e4d1030de9c640b6bfdb551c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 25.863606770833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/1x1-duration-900-frame-21.png",
                "sha256": "130c312e5616350c3448a6e2b9e2e37ff5643c321725cb8567f087960a9bebeb",
                "alphaMass": 587520
              },
              {
                "frame": 141,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/1x1-duration-900-frame-141.png",
                "sha256": "7a472a70187e9f17c1bb65750f7a695679850d34e4d1030de9c640b6bfdb551c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/1x1-duration-900-frame-792.png",
                "sha256": "7a472a70187e9f17c1bb65750f7a695679850d34e4d1030de9c640b6bfdb551c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-realty-tour/1x1-duration-900-frame-899.png",
                "sha256": "7a472a70187e9f17c1bb65750f7a695679850d34e4d1030de9c640b6bfdb551c",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "gallery",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Illustrated room-by-room tour ending on the main bedroom with a serif caption; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 25,
        "compared": 25,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "2ef09135dcdc1d0179c73084eddabaf839ebf27fc5a3a766076a2c3782497ec0",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.079Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-tour/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-tour/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-tour/16x9/detail.mp4",
      "bg": "#857870",
      "posterFrame": 141,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "139b687a4cfc793850b212d2e98d7a49c87a0336962ea154e8810d33c478d587",
        "loop": "0bf291c3fda1ae380cbb7a5544bf9c8e950c7ab307f8c2d1c90d6ebc905120de",
        "detail": "505f1b1b23e7ba3b3a5a82b8dd523f201519d3f4912a434e6be095482ae90dc0"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-tour/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-tour/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-tour/9x16/detail.mp4",
      "bg": "#6e645b",
      "posterFrame": 141,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e0d4986d630d200740f8349115a3acfa5f51b8a2cb395274ea384b58dd265631",
        "loop": "fb6450fcd482189827e989943c8bf6dbbc411467315a45deca0cb30a985cb3c0",
        "detail": "9d31e84035db4b4eb5120631d8d7c361996315106b8d13a603a44d59b16addec"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-tour/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-tour/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-tour/1x1/detail.mp4",
      "bg": "#85776d",
      "posterFrame": 141,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4002d12d12d4c29ed93fb72d4120a6961942514996d287afe78395a14ff311f0",
        "loop": "c566eb64a65d8d5863a7698f172e4a18010e79126aa242c1170a19d5e1999262",
        "detail": "8d76535e10707032c89a6260fa05e60c429104df39549a156dd517cb5233bec3"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/2ef09135dcdc1d0179c73084eddabaf839ebf27fc5a3a766076a2c3782497ec0/index.mjs",
    "sha256": "2ef09135dcdc1d0179c73084eddabaf839ebf27fc5a3a766076a2c3782497ec0",
    "bytes": 184284,
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
    "at": "2026-10-09T07:07:57.161Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
