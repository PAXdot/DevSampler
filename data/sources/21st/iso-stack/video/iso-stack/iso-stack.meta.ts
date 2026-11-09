// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "diagram/layers",
  "tags": [
    "isometric",
    "3d",
    "layers",
    "stack",
    "explainer",
    "how it works",
    "architecture"
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
      "in": 44,
      "out": 0
    },
    "markers": {
      "settled": 46
    },
    "beats": [
      4,
      13,
      22,
      31
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
      "maxChars": 48,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "layers",
      "type": "list",
      "maxChars": 20,
      "role": "label"
    },
    {
      "key": "media",
      "type": "image",
      "role": "media"
    }
  ],
  "brand": {
    "secondary": "colors.secondary",
    "surfaceColor": "colors.background",
    "panelColor": "colors.text",
    "monoFontFamily": "fonts.mono",
    "accent": "colors.primary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "layers",
      "prop": "x",
      "from": "bottom-right",
      "settledBy": 41,
      "easing": "ease"
    },
    {
      "target": "headline",
      "prop": "y",
      "from": "below",
      "settledBy": 24,
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
    "sourceUrl": "21st first-party; motion recipe from research V11"
  },
  "job": "product-ui",
  "language": "isometric",
  "mechanic": [
    "assemble"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": true,
  "defaults": {
    "headline": "Every video is a stack of layers",
    "layers": [
      {
        "text": "footage"
      },
      {
        "text": "captions"
      },
      {
        "text": "overlay"
      },
      {
        "text": "end card"
      }
    ],
    "media": "",
    "spread": 15,
    "secondary": "#AAACB0",
    "surfaceColor": "#060607",
    "panelColor": "#F4F4F5",
    "monoFontFamily": "Geist Mono",
    "accent": "#3D63FF",
    "color": "#F4F4F5",
    "background": "#060607",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 48,
      "role": "headline"
    },
    {
      "key": "layers",
      "label": "Layers",
      "type": "list",
      "max": 5,
      "role": "label"
    },
    {
      "key": "media",
      "label": "Media",
      "type": "asset",
      "role": "media"
    },
    {
      "key": "spread",
      "label": "Spread",
      "type": "number",
      "min": 2,
      "max": 24
    },
    {
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "panelColor",
      "label": "Panel color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
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
    }
  ],
  "name": "Iso Layer Stack",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "iso-stack",
    "bundleSha256": "a976d40fc37a5cbe794a6cc2835120d1f94150848404cef9a4de8a6e5e722880",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:36:17.234Z",
    "samples": [
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/1x1-paper.png",
        "sha256": "212a5c7507a1ab7c547eee60456de675a2fd4a47054deadff440dcd3314e4e9a"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/1x1-night.png",
        "sha256": "40bb7d8105b75b987ab18584ec4bbcef623e777c733ac3f7ac1f7d8386903b31"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/1x1-color.png",
        "sha256": "6e868b786b3719c35ac69aaab51938cdf919e65a16ea0cb852a3100d74747bc9"
      },
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/16x9-paper.png",
        "sha256": "8a000bd8024a7e710402bb713d66541c77cb672613cf50754ac7b6059f2b442a"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/16x9-night.png",
        "sha256": "f03aa44bf8c0e6a57cb9ec8e97de7e3cda64073cb04c74d2b66c6f10a3764f6d"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/16x9-color.png",
        "sha256": "690cf0e8e33506578076419cf4d2d26d4c714987fe78e770f50214f5f7ff243a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/9x16-paper.png",
        "sha256": "8c818d0cd5ea63c64731ae7dd2615f2266373d792cb4bb3cafa24e05e0238aca"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/9x16-night.png",
        "sha256": "9e28a82a3b264e23e4fb7e70f25b60092c2ae77443507fc0c0fac157ec1e8e8a"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/9x16-color.png",
        "sha256": "1e7d98e79090b768d7863b17bc63b1de169c8d4c3cadc0c73cb2fd9c3de648ee"
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
          "iso-stack--1x1",
          "iso-stack--16x9",
          "iso-stack--9x16"
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
            "paperNight": 55.52305772569444,
            "paperColor": 16.598958333333332,
            "region": {
              "left": 202,
              "top": 82,
              "width": 681,
              "height": 956
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 32.766927083333336,
            "paperColor": 15.82275390625,
            "region": {
              "left": 154,
              "top": 173,
              "width": 1485,
              "height": 757
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 53.028293185763886,
            "paperColor": 13.603678385416666,
            "region": {
              "left": 125,
              "top": 179,
              "width": 830,
              "height": 1446
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
            "occupancy": 0.6542372464532225,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6528642406894172,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7910408676502152,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7677966698510682,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7662657076719578,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7683140530517765,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.818579505490468,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8174449531613058,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8202813339842111,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.360785590277778,
        "frames": [
          6,
          46,
          149
        ],
        "elastic": [
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 10.252821180555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/1x1-duration-60-frame-6.png",
                "sha256": "172afead6fc719eca5f4f3a1b96947781a97b6250e43cbab87477b331a85e25a",
                "alphaMass": 587520
              },
              {
                "frame": 46,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/1x1-duration-60-frame-46.png",
                "sha256": "42a121f2a661b65c4e6e0ab1aa1694fa32b7af9e38627c8396660497b6f59b20",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/1x1-duration-60-frame-52.png",
                "sha256": "45d550ce347adbc536b898869720086298b6ae89c63c65c154160785c2943b20",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/1x1-duration-60-frame-59.png",
                "sha256": "9b51343556fc25392ee03c4282e5d01f0fa04d57ac191c4ec4eee9bb2e4ba0e2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 10.252821180555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/1x1-duration-600-frame-6.png",
                "sha256": "172afead6fc719eca5f4f3a1b96947781a97b6250e43cbab87477b331a85e25a",
                "alphaMass": 587520
              },
              {
                "frame": 46,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/1x1-duration-600-frame-46.png",
                "sha256": "42a121f2a661b65c4e6e0ab1aa1694fa32b7af9e38627c8396660497b6f59b20",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/1x1-duration-600-frame-528.png",
                "sha256": "9608dbd71c4ca634b8107308069cbd0d76a9d7747c315d78c0a9d3ea52fac7cc",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/1x1-duration-600-frame-599.png",
                "sha256": "c5eebd9adab639be2e4ecb4d68c09951e5b0b9046344caea834bdbcaaab7690b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 5.360785590277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/16x9-duration-60-frame-6.png",
                "sha256": "83a630d51d2bce89d70ff71ba3a66c43006e2d879ac295b62363b76a78238ebb",
                "alphaMass": 587520
              },
              {
                "frame": 46,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/16x9-duration-60-frame-46.png",
                "sha256": "57e75f287098224fac4129e9f21e01b4dc9b09f10a58ef9217058eb14ae687ad",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/16x9-duration-60-frame-52.png",
                "sha256": "1c12c1ae0d475fad4bc98cb39e64a33b7286cbbe18ee82168df02494dba62b84",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/16x9-duration-60-frame-59.png",
                "sha256": "fef79454aee122b917772a12b51e023dd2705e486bda7f78fe989f153e881063",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 5.360785590277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/16x9-duration-600-frame-6.png",
                "sha256": "83a630d51d2bce89d70ff71ba3a66c43006e2d879ac295b62363b76a78238ebb",
                "alphaMass": 587520
              },
              {
                "frame": 46,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/16x9-duration-600-frame-46.png",
                "sha256": "57e75f287098224fac4129e9f21e01b4dc9b09f10a58ef9217058eb14ae687ad",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/16x9-duration-600-frame-528.png",
                "sha256": "cc541a95a96f2cb042b790997c5a2611df602a4e92e360a44ceb41560f447062",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/16x9-duration-600-frame-599.png",
                "sha256": "8188a0d10bb30fb907c9a6b8b055d7c7fa181d1c20128882809995b92baba99b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 9.010308159722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/9x16-duration-60-frame-6.png",
                "sha256": "498e019b58deb31d135ff2c9d491bc2760928256f025aa82f1b8541961a08da3",
                "alphaMass": 587520
              },
              {
                "frame": 46,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/9x16-duration-60-frame-46.png",
                "sha256": "e9f80170559516366d341180f4c913eeb0489475c6d42ea48e8bd9a7473ffa63",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/9x16-duration-60-frame-52.png",
                "sha256": "dbcbb1bbe29b2050a672f6d49689f2feb18cb588cfd2706597f4924fab615dd4",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/9x16-duration-60-frame-59.png",
                "sha256": "8b216710e6c115a359885f4065b769b2f50ea34b8109b64a2c47c6c5517cb3dd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 9.010308159722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/9x16-duration-600-frame-6.png",
                "sha256": "498e019b58deb31d135ff2c9d491bc2760928256f025aa82f1b8541961a08da3",
                "alphaMass": 587520
              },
              {
                "frame": 46,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/9x16-duration-600-frame-46.png",
                "sha256": "e9f80170559516366d341180f4c913eeb0489475c6d42ea48e8bd9a7473ffa63",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/9x16-duration-600-frame-528.png",
                "sha256": "3f20f6f820c9ca7f5f3e3baab9eadf8e5fe18f6919bbbe00ddf18ab75beb1418",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/iso-stack/9x16-duration-600-frame-599.png",
                "sha256": "fadfff7115924111877367815115c3335267943ad0d9dcc4aa21fc05aabac86b",
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
        "note": "Product layers lift into an isometric stack beside a headline; neutral and brand blue, no purple."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 53,
        "compared": 53,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "a976d40fc37a5cbe794a6cc2835120d1f94150848404cef9a4de8a6e5e722880",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/iso-stack/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/iso-stack/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/iso-stack/1x1/detail.mp4",
      "bg": "#060607",
      "posterFrame": 46,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "b306079924a97c742c6b271e643469497a7fb8738f10c67ec215c8d89b665b0a",
        "loop": "06b07b4e88d465fee8b88fc0b0f480e1f81b928077cd8f1478b0243673ce12ae",
        "detail": "1a8b9aee444d4fa7adde324e3f1be37b108e9e76d0e91f2ba208bd626cbafd77"
      }
    },
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/iso-stack/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/iso-stack/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/iso-stack/16x9/detail.mp4",
      "bg": "#060607",
      "posterFrame": 46,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "ddd3185082b275af15549db6f876ed1d63971c57e0ab54c4eccf3b9b14ff8cd3",
        "loop": "5b3823e72073b8975ef25bd84057fdeb4140950a8098b5a35984cd89c9b56fb8",
        "detail": "04b4c741205d89bd0c8cf0c30c6851b78fe99ddef7255ca078e808cd13690452"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/iso-stack/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/iso-stack/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/iso-stack/9x16/detail.mp4",
      "bg": "#060607",
      "posterFrame": 46,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "6fc4f59fb08392a8a6effe148a6c4e99afac2f0669ae111f0f8e5f9ae6e31a89",
        "loop": "ceaf80e329f9a683709740241a9cc2c49588ffcaae90e2e13543ac90eb11190b",
        "detail": "901aa4c036f11586435d97e661f27a3e98d94caa59575211a5b911fa64a2862d"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/a976d40fc37a5cbe794a6cc2835120d1f94150848404cef9a4de8a6e5e722880/index.mjs",
    "sha256": "a976d40fc37a5cbe794a6cc2835120d1f94150848404cef9a4de8a6e5e722880",
    "bytes": 801135,
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
    "at": "2026-10-09T04:32:00.198Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
