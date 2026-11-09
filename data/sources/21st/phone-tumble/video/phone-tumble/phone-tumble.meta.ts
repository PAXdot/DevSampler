// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "device/phone",
  "tags": [
    "phone",
    "3d",
    "tumble",
    "rotate",
    "app launch",
    "device",
    "mockup"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 60,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 24,
      "out": 0
    },
    "markers": {
      "settled": 40
    },
    "beats": [
      0,
      10,
      18
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "1:1",
      "9:16",
      "16:9"
    ],
    "mode": "responsive",
    "fill": "frame",
    "safeArea": "action",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "headline",
      "type": "text",
      "maxChars": 40,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "subline",
      "type": "text",
      "maxChars": 72,
      "lines": 2,
      "role": "subline"
    },
    {
      "key": "screen1",
      "type": "image",
      "role": "screen"
    },
    {
      "key": "screen2",
      "type": "image",
      "role": "screen"
    },
    {
      "key": "screen3",
      "type": "image",
      "role": "screen"
    },
    {
      "key": "screen4",
      "type": "image",
      "role": "screen"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "bodyFontFamily": "fonts.body",
    "frameColor": "colors.text",
    "screenBackground": "colors.background",
    "screenColor": "colors.text"
  },
  "motionBeats": [
    {
      "target": "phones",
      "prop": "y",
      "from": "below",
      "settledBy": 22,
      "easing": "ease"
    },
    {
      "target": "phones",
      "prop": "rotate",
      "settledBy": 40,
      "easing": "ease"
    },
    {
      "target": "headline",
      "prop": "y",
      "from": "below",
      "settledBy": 28,
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
      "frame": 40
    },
    "hover": [
      0,
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party; motion recipe from research V07"
  },
  "job": "devices",
  "language": "aura",
  "mechanic": [
    "orbit"
  ],
  "energy": "punchy",
  "looks": [],
  "requiresScreenshot": true,
  "defaults": {
    "headline": "Four screens, one flow",
    "subline": "Every half turn reveals the next step of the app.",
    "screen1": "",
    "screen2": "",
    "screen3": "",
    "screen4": "",
    "speed": 120,
    "accent": "#3D63FF",
    "color": "#F4F4F5",
    "background": "#0A0A0C",
    "fontFamily": "Geist",
    "bodyFontFamily": "Geist",
    "frameColor": "#121214",
    "screenBackground": "#101014",
    "screenColor": "#F4F4F5"
  },
  "fields": [
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "subline",
      "label": "Subline",
      "type": "text",
      "max": 72,
      "role": "subline"
    },
    {
      "key": "screen1",
      "label": "Screen 1",
      "type": "asset",
      "role": "screen"
    },
    {
      "key": "screen2",
      "label": "Screen 2",
      "type": "asset",
      "role": "screen"
    },
    {
      "key": "screen3",
      "label": "Screen 3",
      "type": "asset",
      "role": "screen"
    },
    {
      "key": "screen4",
      "label": "Screen 4",
      "type": "asset",
      "role": "screen"
    },
    {
      "key": "speed",
      "label": "Speed",
      "type": "number",
      "min": 20,
      "max": 240
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "frameColor",
      "label": "Frame color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "screenBackground",
      "label": "Screen background",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "screenColor",
      "label": "Screen color",
      "type": "color",
      "brand": "colors.text"
    }
  ],
  "name": "Phone Tumble",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "phone-tumble",
    "bundleSha256": "f85289187c6053281cccb9f60be020e1fb6404b861f100694920430a7d6774d7",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:57:24.767Z",
    "samples": [
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/1x1-paper.png",
        "sha256": "165b345d9c161428fe5c96e9db4d9e473c48becfaef9022ee7b3d910c20a60e0"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/1x1-night.png",
        "sha256": "8afb4ccb4b49402a8de9ded9171ecaf95561666892051abd7e137f7f6ce9a31e"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/1x1-color.png",
        "sha256": "553a2f541afeef3ecb0db000eeae59cfe456b3995e02e5c179a001cae7a4ff51"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/9x16-paper.png",
        "sha256": "e9f16035dea298042e47701f8efe066e17d34394e0a24596dbdcdcec55cba2d5"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/9x16-night.png",
        "sha256": "cb3a22e0e884f2400111a5d14d49d88670430647394d980145c200ca3a9e8abd"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/9x16-color.png",
        "sha256": "2058e839a2f761559eeab0dde4c4038b2d7805b4b7e047355ce2b36b62a684cb"
      },
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/16x9-paper.png",
        "sha256": "ac7aca1c8a97dcc290360d530ed67d9d9dda609980801deaca340b15920c8727"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/16x9-night.png",
        "sha256": "f21844d97fdbed0edbc2ab2923ee74a95a16658cfaa92f43b2acb26686055515"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/16x9-color.png",
        "sha256": "15dd49cda7c34535a4f6046f811f73dc00096418b3e416cbe9a91c6be9f04cba"
      }
    ],
    "gates": {
      "contract": {
        "pass": true,
        "errors": [],
        "transparency": [
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "phone-tumble--1x1",
          "phone-tumble--9x16",
          "phone-tumble--16x9"
        ]
      },
      "brand": {
        "pass": true,
        "sourcePaintLiterals": [],
        "sourceFontLiterals": [],
        "samples": [
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 83.58479817708333,
            "paperColor": 23.57977973090278,
            "region": {
              "left": 122,
              "top": 76,
              "width": 836,
              "height": 925
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 87.86555989583333,
            "paperColor": 24.09743923611111,
            "region": {
              "left": 0,
              "top": 192,
              "width": 1080,
              "height": 1530
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 75.5146484375,
            "paperColor": 22.911702473958332,
            "region": {
              "left": 154,
              "top": 99,
              "width": 1664,
              "height": 882
            },
            "canvas": {
              "width": 1920,
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
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.939597661195251,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.939597661195251,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9324871924078275,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1293579931972793,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1286198507180651,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1175477135298566,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0030864197530867,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0030864197530867,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0030864197530867,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 6.947265625,
        "frames": [
          6,
          40,
          149
        ],
        "elastic": [
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 7.073350694444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/1x1-duration-60-frame-6.png",
                "sha256": "43c56b370c04dffe84653992637af4e81d8100782a0cbfa001906c8703b373d0",
                "alphaMass": 587520
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/1x1-duration-60-frame-40.png",
                "sha256": "5bb525bde86e3a7f730968eb2972afd2ece0655d0430a5f5a5fcf5df80f7b5ae",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/1x1-duration-60-frame-52.png",
                "sha256": "5bb525bde86e3a7f730968eb2972afd2ece0655d0430a5f5a5fcf5df80f7b5ae",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/1x1-duration-60-frame-59.png",
                "sha256": "5bb525bde86e3a7f730968eb2972afd2ece0655d0430a5f5a5fcf5df80f7b5ae",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 7.073350694444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/1x1-duration-600-frame-6.png",
                "sha256": "43c56b370c04dffe84653992637af4e81d8100782a0cbfa001906c8703b373d0",
                "alphaMass": 587520
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/1x1-duration-600-frame-40.png",
                "sha256": "5bb525bde86e3a7f730968eb2972afd2ece0655d0430a5f5a5fcf5df80f7b5ae",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/1x1-duration-600-frame-528.png",
                "sha256": "5bb525bde86e3a7f730968eb2972afd2ece0655d0430a5f5a5fcf5df80f7b5ae",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/1x1-duration-600-frame-599.png",
                "sha256": "5bb525bde86e3a7f730968eb2972afd2ece0655d0430a5f5a5fcf5df80f7b5ae",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 8.6767578125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/9x16-duration-60-frame-6.png",
                "sha256": "f0d00e64f270996b48393b6b366432d0281c45323de5f14ba73eb8cd65c04125",
                "alphaMass": 587520
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/9x16-duration-60-frame-40.png",
                "sha256": "871b594373d5a4972e5071f752ce716a02ffb7d1121789db733c4fac39ecc48d",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/9x16-duration-60-frame-52.png",
                "sha256": "871b594373d5a4972e5071f752ce716a02ffb7d1121789db733c4fac39ecc48d",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/9x16-duration-60-frame-59.png",
                "sha256": "871b594373d5a4972e5071f752ce716a02ffb7d1121789db733c4fac39ecc48d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 8.6767578125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/9x16-duration-600-frame-6.png",
                "sha256": "f0d00e64f270996b48393b6b366432d0281c45323de5f14ba73eb8cd65c04125",
                "alphaMass": 587520
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/9x16-duration-600-frame-40.png",
                "sha256": "871b594373d5a4972e5071f752ce716a02ffb7d1121789db733c4fac39ecc48d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/9x16-duration-600-frame-528.png",
                "sha256": "871b594373d5a4972e5071f752ce716a02ffb7d1121789db733c4fac39ecc48d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/9x16-duration-600-frame-599.png",
                "sha256": "871b594373d5a4972e5071f752ce716a02ffb7d1121789db733c4fac39ecc48d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 6.947265625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/16x9-duration-60-frame-6.png",
                "sha256": "75ef44f9f3f8bd2ade6511b3035eb4e81bd81bccdf300daff1c178fb6303ff5c",
                "alphaMass": 587520
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/16x9-duration-60-frame-40.png",
                "sha256": "cda474ce26278a4231f952098711571fcea20234a7b51edd9169a8a32cc98baf",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/16x9-duration-60-frame-52.png",
                "sha256": "cda474ce26278a4231f952098711571fcea20234a7b51edd9169a8a32cc98baf",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/16x9-duration-60-frame-59.png",
                "sha256": "cda474ce26278a4231f952098711571fcea20234a7b51edd9169a8a32cc98baf",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 6.947265625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/16x9-duration-600-frame-6.png",
                "sha256": "75ef44f9f3f8bd2ade6511b3035eb4e81bd81bccdf300daff1c178fb6303ff5c",
                "alphaMass": 587520
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/16x9-duration-600-frame-40.png",
                "sha256": "cda474ce26278a4231f952098711571fcea20234a7b51edd9169a8a32cc98baf",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/16x9-duration-600-frame-528.png",
                "sha256": "cda474ce26278a4231f952098711571fcea20234a7b51edd9169a8a32cc98baf",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-tumble/16x9-duration-600-frame-599.png",
                "sha256": "cda474ce26278a4231f952098711571fcea20234a7b51edd9169a8a32cc98baf",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "devices",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Two phones tumble and turn to reveal screens beside a headline; devices."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 7,
        "compared": 7,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "f85289187c6053281cccb9f60be020e1fb6404b861f100694920430a7d6774d7",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.957333Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/phone-tumble/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/phone-tumble/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/phone-tumble/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 40,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "3361a8bfd5487f1cbdb111c6659d04eb080e60c7e5939938a27a3d36a3c50a04",
        "loop": "0f95c18584a354cbee2cfe7b04ef2dec7e310b0e5bed226e5389ccbcd3230d11",
        "detail": "62e35c7168a31dc443065612c6c23d279541b608e208e70b57c89cb54084f1f7"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/phone-tumble/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/phone-tumble/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/phone-tumble/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 40,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "53abadc88d0137eb0dbdb007783db248cac44f145fbfe1f2994230941dae1c58",
        "loop": "e24ce80e18e77861a7ab987fd71562053b47ac6e6e7ab7d64342937ffa53b0e1",
        "detail": "0d2fe95b96787793cc4e695b2450fd0a68068fe73fc26a2c69e8061f7094ca2f"
      }
    },
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/phone-tumble/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/phone-tumble/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/phone-tumble/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 40,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "4752a0d770d0e1546ab85c557907555927a40a5ffd1180cbf6f27ec41ab0dac9",
        "loop": "63d8cdfe4f59a967c0c966b5e69a61d03520346d19fe97daddaec1a7da10c7dc",
        "detail": "52dba3fe2a60ba36c4956fdc12e1691480c80fc9ed663e170d5203193a7c78fc"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/f85289187c6053281cccb9f60be020e1fb6404b861f100694920430a7d6774d7/index.mjs",
    "sha256": "f85289187c6053281cccb9f60be020e1fb6404b861f100694920430a7d6774d7",
    "bytes": 808718,
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
    "1:1": {
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
    "16:9": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true
    }
  },
  "intake": {
    "at": "2026-10-07T02:25:06.254Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
