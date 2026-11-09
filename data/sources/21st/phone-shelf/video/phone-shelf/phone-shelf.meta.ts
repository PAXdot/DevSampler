// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "device/phone",
  "tags": [
    "phone",
    "3d",
    "carousel",
    "shelf",
    "screens",
    "showcase",
    "device"
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
      "in": 26,
      "out": 0
    },
    "markers": {
      "settled": 32
    },
    "beats": [
      0,
      12
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "16:9",
      "1:1",
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
      "prop": "y",
      "from": "below",
      "settledBy": 26,
      "easing": "ease"
    },
    {
      "target": "shelf",
      "prop": "x",
      "easing": "linear"
    },
    {
      "target": "headline",
      "prop": "y",
      "from": "below",
      "settledBy": 30,
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
    "headline": "Every screen, ready to ship",
    "screen1": "",
    "screen2": "",
    "screen3": "",
    "speed": 9,
    "angle": -30,
    "accent": "#3D63FF",
    "color": "#0A0A0A",
    "background": "#F2F2F0",
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
      "key": "speed",
      "label": "Speed",
      "type": "number",
      "min": 0,
      "max": 40
    },
    {
      "key": "angle",
      "label": "Angle",
      "type": "number",
      "min": -50,
      "max": 50
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
  "name": "Phone Shelf",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "phone-shelf",
    "bundleSha256": "ceb4291e136b58ce00179282f414e0989b8416e3fe9be640d90c650be51117e9",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:00:43.956Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/16x9-paper.png",
        "sha256": "3577bde021ac7e5ece2909bb02347acef59a3a419f49c48be95a1379db7ddd7e"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/16x9-night.png",
        "sha256": "5f015c37b32fb4b099321b3630dae19b52b38ad843becef8e7ad2565045b67a9"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/16x9-color.png",
        "sha256": "635c5351edcbb2b0012faea129ac138e44ec0b207a46f0313ebbb810ae1d7700"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/1x1-paper.png",
        "sha256": "96443890a230fc92b2fa2ad8968eeee758e54484126e67acca90b269c16cd298"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/1x1-night.png",
        "sha256": "1d1b1905c24a12a26c1978cbe7d3b241c8956094112410240c75f4960eddb7e4"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/1x1-color.png",
        "sha256": "72608a099667a3db677719d863a7595b3f599f6702f7b0b743f2f2cc6838774c"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/9x16-paper.png",
        "sha256": "4a431b985680065cd8b89439190803c9f4272c8c8a7d877d4b9584edd78e5c1e"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/9x16-night.png",
        "sha256": "f919d2c5b6a3ff6851254f7af48254aa453c8a276c32191fb4d78c13feef60b8"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/9x16-color.png",
        "sha256": "2caba08c699fc6b7e62c807f12e70bd312c84f1ef300546010eef5bd22594f8a"
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "phone-shelf--16x9",
          "phone-shelf--1x1",
          "phone-shelf--9x16"
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
            "paperNight": 78.34233940972223,
            "paperColor": 12.472601996527779,
            "region": {
              "left": 0,
              "top": 96,
              "width": 1920,
              "height": 879
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 85.62087673611111,
            "paperColor": 12.901991102430555,
            "region": {
              "left": 0,
              "top": 96,
              "width": 1080,
              "height": 845
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 84.06464301215277,
            "paperColor": 12.85842556423611,
            "region": {
              "left": 0,
              "top": 241,
              "width": 1080,
              "height": 1295
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
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.149533887629126,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1482216343327456,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1534706475182668,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.107541782144957,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.103605022255816,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1088540354413372,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9529419406651551,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9522037981859413,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9558945105820108,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 40.60536024305556,
        "frames": [
          4,
          32,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 40.93901909722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/16x9-duration-60-frame-4.png",
                "sha256": "c1be9e57f5cb82f7bad1ec04f8257973605ea48932ef43f6cb4f2a63db903b67",
                "alphaMass": 587520
              },
              {
                "frame": 32,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/16x9-duration-60-frame-32.png",
                "sha256": "b39f0a7f410898494a87b229cb726f0115125187e6864e06a1d07a9bfaecd742",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/16x9-duration-60-frame-52.png",
                "sha256": "eeb2b14d0aaaa91856d7b2e5061caba1ff5fdfbf367ec2b3d03b2cfb49a1d97f",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/16x9-duration-60-frame-59.png",
                "sha256": "e209d2cfa5e24c0a3e7dfe243b524fc46245b96d22ad3d153cab19d8e028149b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 40.444661458333336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/16x9-duration-600-frame-4.png",
                "sha256": "326a5e384245bc648946d1ef163bda8db924ef6d4efed8455ba3a081d832bd98",
                "alphaMass": 587520
              },
              {
                "frame": 32,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/16x9-duration-600-frame-32.png",
                "sha256": "1ec4950004c7dd16ee02923a8e1f7c96c8975a034bcb9d0f5300199fdc03876d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/16x9-duration-600-frame-528.png",
                "sha256": "50f0153fbef8f0dc22a8683672e5e88f679a3176e02fcea9f091a1eebead446a",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/16x9-duration-600-frame-599.png",
                "sha256": "432a0111c1bbe9ddc967b2616297fd49b53931c30e43e66ab27fe62239b9b209",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 39.750651041666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/1x1-duration-60-frame-4.png",
                "sha256": "e86c04c3d4203a5536f8c4c4ca3464d2013f3d471ec33880bf65908b48551320",
                "alphaMass": 587520
              },
              {
                "frame": 32,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/1x1-duration-60-frame-32.png",
                "sha256": "9ee999982649f426d1384bf05c1825dc16a0b79f5778b1062608b5fff50d3138",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/1x1-duration-60-frame-52.png",
                "sha256": "a0dadd1cd9ce0d0269222fc56ae12102639d59bf395c9639a2e382f8ec6080ef",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/1x1-duration-60-frame-59.png",
                "sha256": "76deccf075c8a10dcb6678eb72e7b10fae4063a77b330f839c4c44eb5d9b91ce",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 39.615559895833336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/1x1-duration-600-frame-4.png",
                "sha256": "8113db183f9044ded3c631bf3402122ba5dc02c3f86da212c305764d077a75b5",
                "alphaMass": 587520
              },
              {
                "frame": 32,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/1x1-duration-600-frame-32.png",
                "sha256": "7d95ae95cd9051a5409207dce10b1592def5dee31aa8a792d11c46a0d42558ca",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/1x1-duration-600-frame-528.png",
                "sha256": "7a4f86273d30c264dc537eac693b569b8b7f7fa29d32d2767a4f9795f2e03c9a",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/1x1-duration-600-frame-599.png",
                "sha256": "cebdfdb1478e1e0376232546fb99a9f403e4e01bacd620cce3fe95f49176d7cb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 27.173177083333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/9x16-duration-60-frame-4.png",
                "sha256": "aa7ae35c5c477d525745a0a173c9d5e9403aaa168bb6a9cd0a6f0d8240601d24",
                "alphaMass": 587520
              },
              {
                "frame": 32,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/9x16-duration-60-frame-32.png",
                "sha256": "708d30acd510a808132c3db3ee54340133b309a067787df3cc193401cb7644ec",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/9x16-duration-60-frame-52.png",
                "sha256": "86eede5be3f44b02c33eee5e330aaa3a1b97c1dd0fc3ca9010665a02f83ab891",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/9x16-duration-60-frame-59.png",
                "sha256": "7ce923761015e3a003425172ccb3b67711f4e4efaa8438c5f832310906a03b74",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 26.989908854166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/9x16-duration-600-frame-4.png",
                "sha256": "2fa4f28c2b80410f891cf59c55e1fae205c1269b6c107dcf82ab8b1242165728",
                "alphaMass": 587520
              },
              {
                "frame": 32,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/9x16-duration-600-frame-32.png",
                "sha256": "664b9e78f20cd508b6f4070351edfe59775cc2efd8106590cb66645ede8f7fd6",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/9x16-duration-600-frame-528.png",
                "sha256": "369dcf2e43443b45f70dabf995037675011305b453b64eb8ce4ef370c417674e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/phone-shelf/9x16-duration-600-frame-599.png",
                "sha256": "fd48553e1d2ae91676f8d1ee668de2e6e595afccaf8538cdd7f09f217b455220",
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
        "note": "A shelf of phones with app screens slides in under a title; devices."
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
      "bundleSha256": "ceb4291e136b58ce00179282f414e0989b8416e3fe9be640d90c650be51117e9",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.964776Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/phone-shelf/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/phone-shelf/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/phone-shelf/16x9/detail.mp4",
      "bg": "#f2f2f0",
      "posterFrame": 32,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "8be1689455202eac36aa6f9fd88e71b5a1269f055a5fd0c0ea59542fc35bee66",
        "loop": "ebbaf6c7c83b8b19579cfd0226b9cd675fc49e87f2171f8af8cbf8b8428dbb0e",
        "detail": "5131816efb8faae9b344de38f82a2a0f1416ca8f64cc4a406dc5b95a273ae170"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/phone-shelf/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/phone-shelf/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/phone-shelf/1x1/detail.mp4",
      "bg": "#f2f2f0",
      "posterFrame": 32,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "7becb60d81bbd285c5f4b2597395081d64889ac3e612e256c9022cea7aab6ee2",
        "loop": "06ad3b585b5cdb2024fd8b36fa50a241fe84e030de51061940730712bf18e54c",
        "detail": "d244703981312ea3fc945700376e02b3c64a234668b78fb3e1e8dcfb1c0d9d6d"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/phone-shelf/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/phone-shelf/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/phone-shelf/9x16/detail.mp4",
      "bg": "#f2f2f0",
      "posterFrame": 32,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "6f2ad935a9b75cefc6af70cfe822bd57824e569a6768675b2cc5bbc2a0cf7e3c",
        "loop": "858858072a5ec8826f71685fec34aea50569a14794e8d0533f0380eb72d3236a",
        "detail": "579cba6b9d024389fb4bd0d0e3b039a7ce8a0f76a16795e74793170d7e30d0e1"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ceb4291e136b58ce00179282f414e0989b8416e3fe9be640d90c650be51117e9/index.mjs",
    "sha256": "ceb4291e136b58ce00179282f414e0989b8416e3fe9be640d90c650be51117e9",
    "bytes": 807427,
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
    }
  },
  "intake": {
    "at": "2026-10-07T02:26:12.542Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
