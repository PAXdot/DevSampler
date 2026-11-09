// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "device/phone",
  "tags": [
    "phone",
    "3d",
    "ring",
    "app launch",
    "opener",
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
      "in": 30,
      "out": 0
    },
    "markers": {
      "settled": 34
    },
    "beats": [
      0,
      12,
      18
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "1:1",
      "16:9",
      "9:16"
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
      "prop": "scale",
      "from": "1.06",
      "settledBy": 22,
      "easing": "ease"
    },
    {
      "target": "ring",
      "prop": "rotate",
      "settledBy": 34,
      "easing": "ease"
    },
    {
      "target": "headline",
      "prop": "scale",
      "from": "0.94",
      "settledBy": 32,
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
      "marker": "settled"
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
  "language": "product-ui",
  "mechanic": [
    "orbit"
  ],
  "energy": "punchy",
  "looks": [],
  "requiresScreenshot": true,
  "defaults": {
    "headline": "One app, every screen",
    "screen1": "",
    "screen2": "",
    "screen3": "",
    "count": 8,
    "spin": 14,
    "accent": "#3D63FF",
    "color": "#0A0A0A",
    "background": "#F4F4F2",
    "fontFamily": "Geist",
    "bodyFontFamily": "Geist",
    "frameColor": "#121214",
    "screenBackground": "#FFFFFF",
    "screenColor": "#0A0A0A"
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
      "key": "count",
      "label": "Count",
      "type": "number",
      "step": 1,
      "min": 5,
      "max": 10
    },
    {
      "key": "spin",
      "label": "Spin",
      "type": "number",
      "min": 0,
      "max": 60
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
  "name": "Phone Ring Explode",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "phone-ring",
    "bundleSha256": "b8faf58fa7adc7f7420153e8b7abf4a35ad7599893cc8cb38178d17575a2c3df",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:53:56.728Z",
    "samples": [
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/1x1-paper.png",
        "sha256": "4260258f2a717e887aa271827466251d412659d489109f921310d6273b8e53e7"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/1x1-night.png",
        "sha256": "ad941b7c4f089cbe77f64db5309b7df59f9d5e474b686b2edd369436d8093bff"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/1x1-color.png",
        "sha256": "190026fdb8e0c8c862a1cd8484edbc51863ada21afbf3b7bc625c5ead317b15b"
      },
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/16x9-paper.png",
        "sha256": "8134479d06015dea13b127ae7ff0658e88608f1bb620ebd4eaa9cbd74846774d"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/16x9-night.png",
        "sha256": "99fc174c4019b5dd2b97b30c34e9436d66c6ba83acaf5e7e1487bc0577c31fa7"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/16x9-color.png",
        "sha256": "41d19ec9b6324e2f3b7f520262c2b4d3854190b1fa1b6569c1d78eb75cc31b31"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/9x16-paper.png",
        "sha256": "ffc79e0837f892eb6051c85ffaa824219c4e51085b2c2bfce02af38ecf77e48a"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/9x16-night.png",
        "sha256": "9f47889e23a35b187cdc58ad637394831bceb8e70a964ccdbd4ee637195f57c0"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/9x16-color.png",
        "sha256": "6ea81d425b465a4f7c617b685daddc2797e492edb7bc694494fab5b0a156f4ad"
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "phone-ring--1x1",
          "phone-ring--16x9",
          "phone-ring--9x16"
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
            "paperNight": 56.20567491319444,
            "paperColor": 13.515977647569445,
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
          },
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 45.56488715277778,
            "paperColor": 12.92361111111111,
            "region": {
              "left": 258,
              "top": 0,
              "width": 1407,
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
            "paperNight": 46.939615885416664,
            "paperColor": 13.418131510416666,
            "region": {
              "left": 0,
              "top": 274,
              "width": 1080,
              "height": 1372
            },
            "canvas": {
              "width": 1080,
              "height": 1920
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
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0385664682539686,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0385664682539686,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0385664682539686,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0127314814814816,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0127314814814816,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0127314814814816,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 19.31369357638889,
        "frames": [
          5,
          34,
          149
        ],
        "elastic": [
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 29.422743055555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/1x1-duration-60-frame-5.png",
                "sha256": "9cede6c069120b8d346efc19b4165eec2484f2e4e79167d0e916e1fb2aeac32e",
                "alphaMass": 587520
              },
              {
                "frame": 34,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/1x1-duration-60-frame-34.png",
                "sha256": "da6957aec3ed2ce6b6e48ba1b42441f016a056986a1897f670153f72e0b1f86b",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/1x1-duration-60-frame-52.png",
                "sha256": "e7bc6f77957b351413b201585cef9321af8eeb17d251c6cf33ae7d1decdf5816",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/1x1-duration-60-frame-59.png",
                "sha256": "e7bc6f77957b351413b201585cef9321af8eeb17d251c6cf33ae7d1decdf5816",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 29.422743055555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/1x1-duration-600-frame-5.png",
                "sha256": "9cede6c069120b8d346efc19b4165eec2484f2e4e79167d0e916e1fb2aeac32e",
                "alphaMass": 587520
              },
              {
                "frame": 34,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/1x1-duration-600-frame-34.png",
                "sha256": "da6957aec3ed2ce6b6e48ba1b42441f016a056986a1897f670153f72e0b1f86b",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/1x1-duration-600-frame-528.png",
                "sha256": "e7bc6f77957b351413b201585cef9321af8eeb17d251c6cf33ae7d1decdf5816",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/1x1-duration-600-frame-599.png",
                "sha256": "e7bc6f77957b351413b201585cef9321af8eeb17d251c6cf33ae7d1decdf5816",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 19.31369357638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/16x9-duration-60-frame-5.png",
                "sha256": "ea791e59aa3472eda094c4913523c7e8d1906a4b4d3a0fc46d0d0175ff6c9bf9",
                "alphaMass": 587520
              },
              {
                "frame": 34,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/16x9-duration-60-frame-34.png",
                "sha256": "5c8a96fe4a6df11cc899fec9191d40b5a47491047f93f3d8ead2eda21ca7ef8b",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/16x9-duration-60-frame-52.png",
                "sha256": "82c221878b52e1f7bc9666fc2861525fba23230a1c49d4342d86206c8a43823d",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/16x9-duration-60-frame-59.png",
                "sha256": "82c221878b52e1f7bc9666fc2861525fba23230a1c49d4342d86206c8a43823d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 19.31369357638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/16x9-duration-600-frame-5.png",
                "sha256": "ea791e59aa3472eda094c4913523c7e8d1906a4b4d3a0fc46d0d0175ff6c9bf9",
                "alphaMass": 587520
              },
              {
                "frame": 34,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/16x9-duration-600-frame-34.png",
                "sha256": "5c8a96fe4a6df11cc899fec9191d40b5a47491047f93f3d8ead2eda21ca7ef8b",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/16x9-duration-600-frame-528.png",
                "sha256": "82c221878b52e1f7bc9666fc2861525fba23230a1c49d4342d86206c8a43823d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/16x9-duration-600-frame-599.png",
                "sha256": "82c221878b52e1f7bc9666fc2861525fba23230a1c49d4342d86206c8a43823d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 17.787977430555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/9x16-duration-60-frame-5.png",
                "sha256": "f4f1ac3548bef2fcd365a5620a3a6de94ac0355034d8c51ccdb499e96b8791f7",
                "alphaMass": 587520
              },
              {
                "frame": 34,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/9x16-duration-60-frame-34.png",
                "sha256": "e5be6d202a3181dcd4051bb4efd258de8ee0869272686914a1d1d4dd8b15bf29",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/9x16-duration-60-frame-52.png",
                "sha256": "e175112c1eeaa6a0686d51407cbedb94708de837e2aa2994a6b9478c5d54fa99",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/9x16-duration-60-frame-59.png",
                "sha256": "e175112c1eeaa6a0686d51407cbedb94708de837e2aa2994a6b9478c5d54fa99",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 17.787977430555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/9x16-duration-600-frame-5.png",
                "sha256": "f4f1ac3548bef2fcd365a5620a3a6de94ac0355034d8c51ccdb499e96b8791f7",
                "alphaMass": 587520
              },
              {
                "frame": 34,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/9x16-duration-600-frame-34.png",
                "sha256": "e5be6d202a3181dcd4051bb4efd258de8ee0869272686914a1d1d4dd8b15bf29",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/9x16-duration-600-frame-528.png",
                "sha256": "e175112c1eeaa6a0686d51407cbedb94708de837e2aa2994a6b9478c5d54fa99",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-ring/9x16-duration-600-frame-599.png",
                "sha256": "e175112c1eeaa6a0686d51407cbedb94708de837e2aa2994a6b9478c5d54fa99",
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
        "note": "Phones explode into a ring around a tagline; devices."
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
      "bundleSha256": "b8faf58fa7adc7f7420153e8b7abf4a35ad7599893cc8cb38178d17575a2c3df",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.922232Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/phone-ring/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/phone-ring/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/phone-ring/1x1/detail.mp4",
      "bg": "#f4f4f2",
      "posterFrame": 34,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "2bb2a6203e255ed47174d96b5dc94824c0fbaa9a43f25105259120013cb5b231",
        "loop": "d7e4c7c8d22038d4f2a1f3239a87ca39f4db8a11b3f1853f06d3fe52647a96ee",
        "detail": "feda0a39e3e6181167223fbec8f9ee05513d231d386916b3b31d221960e0b719"
      }
    },
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/phone-ring/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/phone-ring/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/phone-ring/16x9/detail.mp4",
      "bg": "#f4f4f2",
      "posterFrame": 34,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "65f0676cb83f5cdaf808478e643e3dc2961c431d1d8fc284eb0e0d575b7fbebc",
        "loop": "2674ccac83fd0b3f2811c4d73c8375d9f2e280ee4b427b957cd561d77cf72bb2",
        "detail": "682ed307954a6a9dd1f451d06083bd38855b34bf91e77ab173989c5677d442ef"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/phone-ring/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/phone-ring/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/phone-ring/9x16/detail.mp4",
      "bg": "#f4f4f2",
      "posterFrame": 34,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "e2d18ec18d63f9e1e119b50441ce02de9bfcf965d21288ad7435553da9eafa0f",
        "loop": "1ccca28c242ac1adcb6163ccd08003a93aba72c40b93d8c8126016316a8ff8f5",
        "detail": "9b46f84cb48145d13d108c012f4023b5149c36c1045636bd23fd9356a65dd814"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/b8faf58fa7adc7f7420153e8b7abf4a35ad7599893cc8cb38178d17575a2c3df/index.mjs",
    "sha256": "b8faf58fa7adc7f7420153e8b7abf4a35ad7599893cc8cb38178d17575a2c3df",
    "bytes": 807479,
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
    }
  },
  "intake": {
    "at": "2026-10-07T02:19:26.492Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
