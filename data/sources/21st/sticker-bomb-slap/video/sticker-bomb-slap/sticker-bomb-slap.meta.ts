// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "photo-collage",
  "mechanic": [
    "slap"
  ],
  "tags": [
    "logo",
    "stickers",
    "die-cut",
    "sticker bomb",
    "keywords",
    "screenshot",
    "collage",
    "tactile",
    "social",
    "playful",
    "brand"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 130,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 124,
      "out": 0
    },
    "markers": {
      "settled": 124,
      "board": 0,
      "stickers": 16,
      "hero": 96
    },
    "beats": [
      16,
      24,
      32,
      40,
      48,
      56,
      64,
      72,
      80,
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
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "logo",
      "type": "image",
      "role": "logo"
    },
    {
      "key": "screenshot",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "items",
      "type": "list",
      "maxChars": 18,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "screenshot",
      "prop": "scale",
      "from": "0.92, below",
      "settledBy": 24,
      "easing": "spring"
    },
    {
      "target": "keyword stickers",
      "prop": "scale",
      "from": "lifted above the board",
      "settledBy": 110,
      "easing": "spring"
    },
    {
      "target": "logo sticker",
      "prop": "position",
      "from": "above the frame, spinning",
      "settledBy": 118,
      "easing": "spring"
    },
    {
      "target": "peel curls",
      "prop": "corner",
      "from": "flat",
      "settledBy": 122,
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
    "sourceUrl": "21st first-party (die-cut keyword and logo stickers slap onto a screenshot with squash and peel, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "screenshot": "",
    "items": [
      "Ship faster",
      "Now live",
      "Beta",
      "Open source",
      "Made with care"
    ],
    "primary": "#B5446E",
    "secondary": "#F2A541",
    "color": "#2D1E2F",
    "background": "#F7F1F0",
    "fontFamily": "Bricolage Grotesque",
    "border": 1,
    "chaos": 0.7,
    "seed": 7,
    "mat": true,
    "grain": true
  },
  "fields": [
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo"
    },
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "items",
      "label": "Items",
      "type": "list",
      "max": 6,
      "role": "label"
    },
    {
      "key": "primary",
      "label": "Primary",
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
      "brand": "fonts.body"
    },
    {
      "key": "border",
      "label": "Border",
      "type": "number",
      "min": 0.5,
      "max": 1.6
    },
    {
      "key": "chaos",
      "label": "Chaos",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 999
    },
    {
      "key": "mat",
      "label": "Mat",
      "type": "boolean"
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    }
  ],
  "name": "Sticker Bomb",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "sticker-bomb-slap",
    "bundleSha256": "c4d695704d693f4e1a950b0a1f47c7688d01e8b2916b8d34a99424160699ddc0",
    "sourceSnapshot": {
      "sha256": "92b21564506c9ef1be6d441622eaf5b029d4a0ac371f586337e94ed52733ab15",
      "files": 1854
    },
    "renderedAt": "2026-10-09T12:15:58.383Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/16x9-paper.png",
        "sha256": "d8d7076907a3c5fa3e2eb1d6dec1ba13eccf018b6e23d5dbb848b31722c9cbb4"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/16x9-night.png",
        "sha256": "cd24b88d71070a5a9677cf87d8504b14e30f1f184e780141ca2ef634e428558e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/16x9-color.png",
        "sha256": "1a95807f39c06b92fd044f1c7a426343fd3beefeada42e424dc42f0fcd73a682"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/9x16-paper.png",
        "sha256": "84c1d4b6fa458eb1dcbaeded6725c17f54b44a3462cf5a1937f8923d5019abdb"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/9x16-night.png",
        "sha256": "f470523cb3a877b1c6fa9ba85332bf09ce986d5a8baab877924e51e356212198"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/9x16-color.png",
        "sha256": "66023edc3bd0d16062c8608880b8ad5d786c36e155ec185ea379ecd1630ebed2"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/1x1-paper.png",
        "sha256": "79c3f3a8db3460496298495e65a696446c990096163f1d96158dd1573af8bfa1"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/1x1-night.png",
        "sha256": "d53104b358e1f281340811cc2045295d194833eb77ff382492334cfc518f33c4"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/1x1-color.png",
        "sha256": "58ccf330059890a202009a0e30fd0c9ddbff0db10036e3e66d07de8a169a32f6"
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
          "sticker-bomb-slap--16x9",
          "sticker-bomb-slap--9x16",
          "sticker-bomb-slap--1x1"
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
            "paperNight": 21.409261067708332,
            "paperColor": 6.056342230902778,
            "region": {
              "left": 149,
              "top": 89,
              "width": 1632,
              "height": 991
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 17.03290473090278,
            "paperColor": 6.601535373263889,
            "region": {
              "left": 0,
              "top": 88,
              "width": 1080,
              "height": 1832
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 23.29682074652778,
            "paperColor": 7.682861328125,
            "region": {
              "left": 0,
              "top": 84,
              "width": 1080,
              "height": 996
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
            "occupancy": 1.0842998625633384,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1053765642059294,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0832001669623612,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3265103816732458,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3522770219198794,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3265103816732458,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2936022888808019,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3070042831947597,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2936022888808019,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 14.114149305555555,
        "frames": [
          18,
          124,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 130,
            "averageChannelDifference": 13.034722222222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/16x9-duration-130-frame-15.png",
                "sha256": "2b238e71adfd95984deb427a24539a1980f221c49eb513d479c5735dc50238d3",
                "alphaMass": 587520
              },
              {
                "frame": 124,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/16x9-duration-130-frame-124.png",
                "sha256": "7649042a434e784bf6710644dbda5f6561c365906735d3b46ad12aa9cc7d29b4",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/16x9-duration-130-frame-114.png",
                "sha256": "8237d69ff83754c1bae0cb3fb2b644b96b4723dc7e63a62ba760350109429158",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/16x9-duration-130-frame-129.png",
                "sha256": "7649042a434e784bf6710644dbda5f6561c365906735d3b46ad12aa9cc7d29b4",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 14.114149305555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/16x9-duration-600-frame-18.png",
                "sha256": "9d62b8e373a2da009f00ce0a601918000d484671e03abda369592c91aa6acf9f",
                "alphaMass": 587520
              },
              {
                "frame": 124,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/16x9-duration-600-frame-124.png",
                "sha256": "7649042a434e784bf6710644dbda5f6561c365906735d3b46ad12aa9cc7d29b4",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/16x9-duration-600-frame-528.png",
                "sha256": "7649042a434e784bf6710644dbda5f6561c365906735d3b46ad12aa9cc7d29b4",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/16x9-duration-600-frame-599.png",
                "sha256": "7649042a434e784bf6710644dbda5f6561c365906735d3b46ad12aa9cc7d29b4",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 130,
            "averageChannelDifference": 20.31000434027778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/9x16-duration-130-frame-15.png",
                "sha256": "ef5ed865c1c5e2c3415e9575f72cc0166f23a51bca76b06da5946d8c0b430ae4",
                "alphaMass": 587520
              },
              {
                "frame": 124,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/9x16-duration-130-frame-124.png",
                "sha256": "6aa80c57b3f51bcc064705ad058d9437f4be072a436ed3de4e4fe12069f59ce9",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/9x16-duration-130-frame-114.png",
                "sha256": "4193bbf469f2882989213368e29ef81a44c613b8b115a1cef6bba73389a40904",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/9x16-duration-130-frame-129.png",
                "sha256": "6aa80c57b3f51bcc064705ad058d9437f4be072a436ed3de4e4fe12069f59ce9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 21.54730902777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/9x16-duration-600-frame-18.png",
                "sha256": "24e53c118daf57db73e3ee284995607b506e32830764956ac40e2f4e0d50de1c",
                "alphaMass": 587520
              },
              {
                "frame": 124,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/9x16-duration-600-frame-124.png",
                "sha256": "6aa80c57b3f51bcc064705ad058d9437f4be072a436ed3de4e4fe12069f59ce9",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/9x16-duration-600-frame-528.png",
                "sha256": "6aa80c57b3f51bcc064705ad058d9437f4be072a436ed3de4e4fe12069f59ce9",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/9x16-duration-600-frame-599.png",
                "sha256": "6aa80c57b3f51bcc064705ad058d9437f4be072a436ed3de4e4fe12069f59ce9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 130,
            "averageChannelDifference": 21.603407118055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/1x1-duration-130-frame-15.png",
                "sha256": "4595362495d35c569d9355ca084a9f6e6b76c3426b297d8a132026532bc15c57",
                "alphaMass": 587520
              },
              {
                "frame": 124,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/1x1-duration-130-frame-124.png",
                "sha256": "35c2bc6e80d5a1ecb6baf704701ecc33483b5323eed194db496d44be1cb7a451",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/1x1-duration-130-frame-114.png",
                "sha256": "24ade0bf481d5227236631b0ff2670c9fdc38d1c9f571e80944e67cbb18a17a2",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/1x1-duration-130-frame-129.png",
                "sha256": "35c2bc6e80d5a1ecb6baf704701ecc33483b5323eed194db496d44be1cb7a451",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 22.736653645833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/1x1-duration-600-frame-18.png",
                "sha256": "fc6cc21221e1fcbcb71373d7bdd0f8bb4c3143ab3c44f4b3192a2273639b4fe6",
                "alphaMass": 587520
              },
              {
                "frame": 124,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/1x1-duration-600-frame-124.png",
                "sha256": "35c2bc6e80d5a1ecb6baf704701ecc33483b5323eed194db496d44be1cb7a451",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/1x1-duration-600-frame-528.png",
                "sha256": "35c2bc6e80d5a1ecb6baf704701ecc33483b5323eed194db496d44be1cb7a451",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-141108/sticker-bomb-slap/1x1-duration-600-frame-599.png",
                "sha256": "35c2bc6e80d5a1ecb6baf704701ecc33483b5323eed194db496d44be1cb7a451",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "logos",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "TitleMatches: The subject is a central digital sticker collage overlaid on a faux interface, with multiple sticker-style labels ('Ship faster', 'Now live', 'Beta', etc.) presented both on the static poster and appearing sequentially in motion frames. The layering, overlapping, arrangement, and cropping of these sticker elements evoke a 'Sticker Bomb' concept, clearly supported by the visible structure and sampled motion. No effect or element is present merely by the title or copy alone.\n\nNoBakedHeading: There is no non-content or unexplained decorative heading, block title, or unrelated label baked into the images. All text visible is part of the sticker/label content (matching the named slot items), appearing as if stickers, not as extraneous headings. No decorative or superfluous category label is present.\n\nBrandAdherence: Images 5, 6, and 7 display the same poster across three visibly distinct palettes (light with pink/green, dark with red/gold, light green with olive/magenta), consistently recoloring sticker, badge, and tape accents while preserving their design, clarity, and legibility. The palettes match the provided colors for primary, secondary, background, and text, supporting clear brand role variation without unexplained fixed block colors. The material and cutout/shape aspect remains consistent.\n\nLanguageAdherence: The visual language throughout the sequences and rebrands matches the language card: compositions show clipped/photoscanned sticker layering, tape, and overlapping 'contact print' effects, with light and shadow preserved inside source areas (matte effects), hand-cut-style borders, consistent type roles (sans/serif mixes), tabular numerals in the interface, and overall materiality rather than vector-flat or synthetic feel. The sampled motion can be inferred from element changes in sequence: stickers are revealed and stacked with cropping shifts, in line with 'reveal', 'stack', 'crop' language, and the stylistic direction avoids the prohibited generic faces, product mockups, or inappropriate photo stock. Each instance upholds visible clarity for all type roles and accents in accordance with the described language constraints."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 22,
        "compared": 22,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "c4d695704d693f4e1a950b0a1f47c7688d01e8b2916b8d34a99424160699ddc0",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T12:16:09.666Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/sticker-bomb-slap/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/sticker-bomb-slap/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/sticker-bomb-slap/16x9/detail.mp4",
      "bg": "#f7f1f0",
      "posterFrame": 124,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a2c046acf5a5be55aaf79416187c08f63c51058421b8c47173359d52f1da4f2d",
        "loop": "8a6486a076b1e527114e8c35fe28d5eb3a10ff5f63d30cf78d6d98b6417584eb",
        "detail": "dc0a6acc0f80bd0a03ed7a330209edbb39887738b101c7facfb3b13089de86f9"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/sticker-bomb-slap/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/sticker-bomb-slap/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/sticker-bomb-slap/9x16/detail.mp4",
      "bg": "#f7f1f0",
      "posterFrame": 124,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "864a7e5952e3260a15ff5152f387bf40b573bccae02ae77fa45de024b28efad6",
        "loop": "af9850834e8945e79b4582fb76a57497a722a71a3090ce5c291e5296ffe329d9",
        "detail": "04b595975d4c236420155bf32551f7aa7e16f7017901531c065c0b10dcbc11bb"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/sticker-bomb-slap/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/sticker-bomb-slap/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/sticker-bomb-slap/1x1/detail.mp4",
      "bg": "#f7f1f0",
      "posterFrame": 124,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0df0ea67a08029f8324e8335e6efce505d2de5bdf707dd2f49bcc63ee16329ea",
        "loop": "820ac55e492b8546faecd4becf76da644f8c76b6797acb4113b1cd6e3a951cfd",
        "detail": "fb44e6b8ecd65e37d8b3fa34e63676f767f58a0d8fb7fa11f2cb70c3ffbebce6"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c4d695704d693f4e1a950b0a1f47c7688d01e8b2916b8d34a99424160699ddc0/index.mjs",
    "sha256": "c4d695704d693f4e1a950b0a1f47c7688d01e8b2916b8d34a99424160699ddc0",
    "bytes": 181548,
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
    "at": "2026-10-09T12:17:23.369Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
