// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "finger-taps-date-time-confirm"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "finger-taps-date-time-confirm",
    "beauty",
    "booking",
    "app",
    "calendar"
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
      "in": 96,
      "out": 0
    },
    "markers": {
      "settled": 96
    },
    "beats": [
      0,
      24,
      48,
      72,
      96
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
      "key": "headline",
      "type": "text",
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "service",
      "type": "text",
      "maxChars": 18,
      "role": "label"
    },
    {
      "key": "done",
      "type": "text",
      "maxChars": 12,
      "role": "cta"
    },
    {
      "key": "notice",
      "type": "text",
      "maxChars": 30,
      "role": "caption"
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
      "target": "finger-taps-date-time-confirm",
      "prop": "transform",
      "from": "enter",
      "settledBy": 96,
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
    "ink": "#2A1835",
    "accent": "#5B2E6E",
    "secondary": "#D46A8C",
    "paper": "#F7F3FB",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "Book in two taps.",
    "service": "Gel manicure",
    "done": "Booked",
    "notice": "Booked: Fri 16 Oct, 15:30"
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
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "service",
      "label": "Service",
      "type": "text",
      "max": 18,
      "role": "label"
    },
    {
      "key": "done",
      "label": "Done",
      "type": "text",
      "max": 12,
      "role": "cta"
    },
    {
      "key": "notice",
      "label": "Notice",
      "type": "text",
      "max": 30,
      "role": "caption"
    }
  ],
  "name": "Two Tap Booking",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-beauty-booking",
    "bundleSha256": "4050b358d4f6958b5d12e6c4847538822736cbc54f069f82ed08ca1bf65b1e23",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:27:12.605Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/16x9-paper.png",
        "sha256": "11716279f0ecc6c3679023aeb0eb55d2bbb82e79235a3d134264b07051af2602"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/16x9-night.png",
        "sha256": "4956d7b6e630d147536a1d23fcedce0daf6df05ae4cb1524a7573ef685120e09"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/16x9-color.png",
        "sha256": "44642eed529acd1977a6490dd8964384251df6c72d9ae8fbe64042a9823209cb"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/9x16-paper.png",
        "sha256": "b43e38681ebfd120deb12a95539997871b4b50c596b15216602e4865fd40ffff"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/9x16-night.png",
        "sha256": "99acd04fdbbd98f77df375bb97ea3c131eaa0e991942d264cfa6651793883252"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/9x16-color.png",
        "sha256": "9331ea828239f8f63bfa506e0ffabda4d436c7a9f0cf5237b146e62451587c20"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/1x1-paper.png",
        "sha256": "41a05373e5fd940faa8855755c0ed6890390cb14dd7fc63c1aa933ff397e0aa9"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/1x1-night.png",
        "sha256": "55a62d422eb86a2a2ec458ce591e371ee7a97ee3b2c573125ed9b35456afcf30"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/1x1-color.png",
        "sha256": "f44d89c550e9431beb3a7b1799e11112ce938daf2ad5f01f38022e53db6c5e0e"
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
          "mg-beauty-booking--16x9",
          "mg-beauty-booking--9x16",
          "mg-beauty-booking--1x1"
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
            "paperNight": 56.23206922743056,
            "paperColor": 12.068684895833334,
            "region": {
              "left": 117,
              "top": 15,
              "width": 1650,
              "height": 1037
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 98.44721137152777,
            "paperColor": 17.29248046875,
            "region": {
              "left": 9,
              "top": 32,
              "width": 1061,
              "height": 1790
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 73.21229383680556,
            "paperColor": 12.925157335069445,
            "region": {
              "left": 55,
              "top": 20,
              "width": 993,
              "height": 977
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
            "occupancy": 1.1694432306101457,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1673169701908543,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1687344771370485,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2980303843502425,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2980303843502425,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2973052277109407,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1787934909903608,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1776063877768759,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1787934909903608,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.943359375,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 3.0010850694444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/16x9-duration-90-frame-10.png",
                "sha256": "1095bfaa755d00ef88817974c0ead8029b3da5f396a88e72931772f1521b3c4e",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/16x9-duration-90-frame-89.png",
                "sha256": "2b4ac7a91e301d5ed477b8f01cea86df82160bd7ed0d2a3166c43d9d02345899",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/16x9-duration-90-frame-79.png",
                "sha256": "2b4ac7a91e301d5ed477b8f01cea86df82160bd7ed0d2a3166c43d9d02345899",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 2.943359375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/16x9-duration-900-frame-14.png",
                "sha256": "91dcb9ffad70203352fc0542dd3c2a96581a97b477b3d00b57f080e4170385de",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/16x9-duration-900-frame-96.png",
                "sha256": "2b4ac7a91e301d5ed477b8f01cea86df82160bd7ed0d2a3166c43d9d02345899",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/16x9-duration-900-frame-792.png",
                "sha256": "2b4ac7a91e301d5ed477b8f01cea86df82160bd7ed0d2a3166c43d9d02345899",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/16x9-duration-900-frame-899.png",
                "sha256": "2b4ac7a91e301d5ed477b8f01cea86df82160bd7ed0d2a3166c43d9d02345899",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 7.056966145833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/9x16-duration-90-frame-10.png",
                "sha256": "9d06f4b3928170a9039d8b9668ca7b183bb109bb44279df2de4c2201230ba34a",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/9x16-duration-90-frame-89.png",
                "sha256": "6c8fa436bc9517bf8ad7dfe56b3ad05fcd3bb8014c96154cae2180679196117e",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/9x16-duration-90-frame-79.png",
                "sha256": "6c8fa436bc9517bf8ad7dfe56b3ad05fcd3bb8014c96154cae2180679196117e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 7.049262152777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/9x16-duration-900-frame-14.png",
                "sha256": "9b7670c18f461ea8162f081851578737eaaa877567a81ac1f04c68f1ce856ca3",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/9x16-duration-900-frame-96.png",
                "sha256": "6c8fa436bc9517bf8ad7dfe56b3ad05fcd3bb8014c96154cae2180679196117e",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/9x16-duration-900-frame-792.png",
                "sha256": "6c8fa436bc9517bf8ad7dfe56b3ad05fcd3bb8014c96154cae2180679196117e",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/9x16-duration-900-frame-899.png",
                "sha256": "6c8fa436bc9517bf8ad7dfe56b3ad05fcd3bb8014c96154cae2180679196117e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 4.401475694444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/1x1-duration-90-frame-10.png",
                "sha256": "b2eec18d776bc75db9a970e6179225e05f7177c8081d257e9e02dae5165b5089",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/1x1-duration-90-frame-89.png",
                "sha256": "39c4ecbc1e9ed676138bf449347cafb7318bb93ffdc6ac4768cb1078ed689b86",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/1x1-duration-90-frame-79.png",
                "sha256": "39c4ecbc1e9ed676138bf449347cafb7318bb93ffdc6ac4768cb1078ed689b86",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 4.392686631944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/1x1-duration-900-frame-14.png",
                "sha256": "ce9bcaa971d2c3e1fdc93617553c5c1e99cf95577b3fcdd8a5b5c33c64243b66",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/1x1-duration-900-frame-96.png",
                "sha256": "39c4ecbc1e9ed676138bf449347cafb7318bb93ffdc6ac4768cb1078ed689b86",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/1x1-duration-900-frame-792.png",
                "sha256": "39c4ecbc1e9ed676138bf449347cafb7318bb93ffdc6ac4768cb1078ed689b86",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-booking/1x1-duration-900-frame-899.png",
                "sha256": "39c4ecbc1e9ed676138bf449347cafb7318bb93ffdc6ac4768cb1078ed689b86",
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
        "note": "Serif headline beside a booking flow that picks a date and time and confirms; rebrands distinct."
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
      "bundleSha256": "4050b358d4f6958b5d12e6c4847538822736cbc54f069f82ed08ca1bf65b1e23",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.083Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-booking/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-booking/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-booking/16x9/detail.mp4",
      "bg": "#ece5f1",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "000b7ba9c2dcf39782f33f7d2c551d47085c26a5b09a92859b5fa6dc15195631",
        "loop": "ac7d630ddde0560f3b3f3353f4d603e4762703b4a1b3d84696cee843e2a5f850",
        "detail": "2f370543da0626aa586fbef0129363b204cda494cb6cd2be7e7015e91c7411ad"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-booking/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-booking/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-booking/9x16/detail.mp4",
      "bg": "#ece5f1",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "771588b007a19a58a29ae033c3afdca3c02edf07a7abf43db15f18aad18d6139",
        "loop": "86523f6071246b36bd58a6f5e0e9e940679aca93797ec7dfbf5466a570643b34",
        "detail": "1651854d9ca05f451dc2e09d6e017d829e9ac3658f1185796959f386b391f306"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-booking/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-booking/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-booking/1x1/detail.mp4",
      "bg": "#ece5f1",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d9447f420be665e1495f408cd56946cfd0b062538d7b1c13a1d178d88a8dfda2",
        "loop": "59d9784d103db024915b75a628e624ef7d17152bdd738a54051ffa7cafb75302",
        "detail": "ff650ba4a6262a8b0c9eb08c1deed4543ae03827fe22a14e32a0d3f838935bae"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/4050b358d4f6958b5d12e6c4847538822736cbc54f069f82ed08ca1bf65b1e23/index.mjs",
    "sha256": "4050b358d4f6958b5d12e6c4847538822736cbc54f069f82ed08ca1bf65b1e23",
    "bytes": 253002,
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
    "at": "2026-10-09T07:10:40.086Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
