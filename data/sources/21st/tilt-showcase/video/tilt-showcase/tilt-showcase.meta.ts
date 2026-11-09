// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "media/screenshot",
  "tags": [
    "screenshot",
    "3d",
    "tilt",
    "perspective",
    "hero",
    "product",
    "dashboard"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 45,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 24,
      "out": 0
    },
    "markers": {
      "settled": 28
    },
    "beats": [
      0,
      14
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
    "fill": "region",
    "defaultRegion": {
      "x": 0.1,
      "y": 0.2,
      "w": 0.8,
      "h": 0.6
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "image",
      "type": "image",
      "role": "screen"
    },
    {
      "key": "chip",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "fontFamily": "fonts.heading",
    "surface": "colors.background",
    "color": "colors.text",
    "secondary": "colors.secondary",
    "bodyFontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "card",
      "prop": "rotateY",
      "from": "-40",
      "settledBy": 20,
      "easing": "ease"
    },
    {
      "target": "chip",
      "prop": "scale",
      "from": "0.9",
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
      "marker": "settled"
    },
    "hover": [
      0,
      120
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party; motion recipe from research V15, V12"
  },
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "focus"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": true,
  "defaults": {
    "image": "",
    "chip": "Revenue up 24% this week",
    "chipIcon": "chart",
    "tilt": 14,
    "browser": true,
    "accent": "#3D63FF",
    "fontFamily": "Geist",
    "surface": "#FFFFFF",
    "color": "#0A0A0A",
    "secondary": "#898B8F",
    "bodyFontFamily": "Geist"
  },
  "fields": [
    {
      "key": "image",
      "label": "Image",
      "type": "asset",
      "role": "screen"
    },
    {
      "key": "chip",
      "label": "Chip",
      "type": "text",
      "max": 32,
      "role": "label"
    },
    {
      "key": "chipIcon",
      "label": "Chip icon",
      "type": "select",
      "options": [
        "zap",
        "shield",
        "globe",
        "layers",
        "code",
        "lock",
        "heart",
        "star",
        "database",
        "message",
        "play",
        "music",
        "image",
        "mail",
        "user",
        "chart",
        "search",
        "cloud",
        "terminal",
        "branch",
        "check",
        "folder",
        "file"
      ]
    },
    {
      "key": "tilt",
      "label": "Tilt",
      "type": "number",
      "min": 0,
      "max": 30
    },
    {
      "key": "browser",
      "label": "Browser",
      "type": "boolean"
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "surface",
      "label": "Surface",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    }
  ],
  "name": "Tilt Showcase",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "tilt-showcase",
    "bundleSha256": "c2db67cd8800611930eaf0af5de073ce90331cbe48ba3bf77282c720452eee6f",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:47:21.254Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/16x9-paper.png",
        "sha256": "1d312b74b55253f3ed4f13e69f4d4fc681baebf02399ae2c5a3c6ad52958b721"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/16x9-night.png",
        "sha256": "3477832702373829b92d1ac1734dd456a35918334fc592349c0ae51a7f5bf6f2"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/16x9-color.png",
        "sha256": "bdb4c699e91bb804c8661ff69cc1e9eb3d9a2f1fce11d79a14d3a60678c2d9a1"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/9x16-paper.png",
        "sha256": "c7dbd0c8429cd696067931c29be732e3e8064d6a91438c95242eccd25e376a2b"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/9x16-night.png",
        "sha256": "b87586fac6a3b90a621598508fa6cf859ad69011f7233d64688e29deb4bce5e7"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/9x16-color.png",
        "sha256": "04ce74547635e179dab4824e837bb834570eb1daf7211a6151bcfb5e4adb6feb"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/1x1-paper.png",
        "sha256": "b8d156e737a528a5061faed815fd034a5b5aa241cb3fb0378b9cc7144c734188"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/1x1-night.png",
        "sha256": "8d3ac8872f812d91a68e612bb58cb20a9abe7b7ff86c1d2621b701eda5d3da80"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/1x1-color.png",
        "sha256": "c166bcbe9491d7983fefc5c2ab57b9c25027fa286014f67a131f65eb95a0abed"
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
          "tilt-showcase--16x9",
          "tilt-showcase--9x16",
          "tilt-showcase--1x1"
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
            "paperNight": 154.43180338541666,
            "paperColor": 10.431776258680555,
            "region": {
              "left": 491,
              "top": 244,
              "width": 930,
              "height": 645
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 146.480224609375,
            "paperColor": 12.598280164930555,
            "region": {
              "left": 102,
              "top": 468,
              "width": 897,
              "height": 1262
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 154.29546440972223,
            "paperColor": 10.301432291666666,
            "region": {
              "left": 128,
              "top": 281,
              "width": 815,
              "height": 566
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
            "occupancy": 0.8541179902709541,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8541179902709541,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8527937763325496,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1676877374368435,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1676877374368435,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1621339493730736,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 17.852647569444443,
        "frames": [
          4,
          28,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 17.88812934027778,
            "retainedAlpha": 1.000426705438914,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/16x9-duration-45-frame-4.png",
                "sha256": "09ad22919ffac42f6ab952de824ec50ed5794d398d45f3eeca84e07c7195be03",
                "alphaMass": 59844
              },
              {
                "frame": 28,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/16x9-duration-45-frame-28.png",
                "sha256": "8ede29be7681ee4b16d4e345747cd00f02d30f3fd9405bfa71431552d59ce805",
                "alphaMass": 126400
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/16x9-duration-45-frame-39.png",
                "sha256": "1229ee47f86f564602d2114e6446557c850229b17964344667cf1313e11f2614",
                "alphaMass": 126551
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/16x9-duration-45-frame-44.png",
                "sha256": "859b83cbe1ff3f601a3a5c31f752dd062b0e2526c6ab9e0085a829393f5d5574",
                "alphaMass": 126605
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 17.852647569444443,
            "retainedAlpha": 0.9898942884190597,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/16x9-duration-900-frame-4.png",
                "sha256": "09ad22919ffac42f6ab952de824ec50ed5794d398d45f3eeca84e07c7195be03",
                "alphaMass": 59844
              },
              {
                "frame": 28,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/16x9-duration-900-frame-28.png",
                "sha256": "03be34f9faffe4f2fbf833920b95c3600aa586a43685fa9b7f4263b3c92eb4fe",
                "alphaMass": 126400
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/16x9-duration-900-frame-792.png",
                "sha256": "53b04c244c54c86bc206b234612cfa89faba89f234873f2321751e0a9b872429",
                "alphaMass": 126760
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/16x9-duration-900-frame-899.png",
                "sha256": "28d900ec2c39c7d5c7088a7e24edc017ba9b4bfd78f808a8347e9655f56a0bd5",
                "alphaMass": 125479
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 31.953450520833332,
            "retainedAlpha": 1.0004056951876823,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/9x16-duration-45-frame-4.png",
                "sha256": "ee5f271082f31378289e912ceb4cfe315d0e062900375408764af28a45bf4a05",
                "alphaMass": 87390
              },
              {
                "frame": 28,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/9x16-duration-45-frame-28.png",
                "sha256": "834e0c5f10f0e63ef9ba36dd7bff81b95cc92f2f2e9fb4c92c223da0a03abbe9",
                "alphaMass": 206728
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/9x16-duration-45-frame-39.png",
                "sha256": "3c296e42bdac83a5d38eea1646bd9278ed00693b9ea52d357d7e89d6725332a5",
                "alphaMass": 207052
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/9x16-duration-45-frame-44.png",
                "sha256": "e05d6d34e6743be4eb3b58a7d8d097fa5532f3d554a9909a0b569a15b0036e83",
                "alphaMass": 207136
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 31.87152777777778,
            "retainedAlpha": 0.992,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/9x16-duration-900-frame-4.png",
                "sha256": "ee5f271082f31378289e912ceb4cfe315d0e062900375408764af28a45bf4a05",
                "alphaMass": 87390
              },
              {
                "frame": 28,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/9x16-duration-900-frame-28.png",
                "sha256": "adf1192f9679c806da2f52a121c099fc16808e9fcbdf8a75de0b7ea34a1fdd32",
                "alphaMass": 206728
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/9x16-duration-900-frame-792.png",
                "sha256": "c0d9d33aff8c7c51f092f953fa0fb2f87013f15c38077234e2c2ab1ff7d527aa",
                "alphaMass": 207375
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/9x16-duration-900-frame-899.png",
                "sha256": "05c014664ce3ebe675fe6a64d4d9e294df2755423743af04191fe84d91ef3cb2",
                "alphaMass": 205716
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 22.11599392361111,
            "retainedAlpha": 1.0004288785983784,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/1x1-duration-45-frame-4.png",
                "sha256": "6a1e21940d3454c788df7ce81a59849beb869d48ab2cf2d546382cc09c82cb15",
                "alphaMass": 81655
              },
              {
                "frame": 28,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/1x1-duration-45-frame-28.png",
                "sha256": "e47ff457d75f5eb55386044ae6ef890112c6e612a66e9bc9518ffa887f06cadb",
                "alphaMass": 172494
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/1x1-duration-45-frame-39.png",
                "sha256": "6b37a48bc6a2eb187a9519526eb805f1237be013accea0885168cf224946185a",
                "alphaMass": 172543
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/1x1-duration-45-frame-44.png",
                "sha256": "edbc122e92c4d18a87b9fcc5496339402a2ca64d6d2fdb73dcf17ee15a197aff",
                "alphaMass": 172617
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 22.06684027777778,
            "retainedAlpha": 0.989596894111657,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/1x1-duration-900-frame-4.png",
                "sha256": "6a1e21940d3454c788df7ce81a59849beb869d48ab2cf2d546382cc09c82cb15",
                "alphaMass": 81655
              },
              {
                "frame": 28,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/1x1-duration-900-frame-28.png",
                "sha256": "31cfc3cc0a512646467dd83ddf77b2b79222bde3d595e3f69da1ba482934c32b",
                "alphaMass": 172494
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/1x1-duration-900-frame-792.png",
                "sha256": "77b23ab4aa6b9e092fcc31feffd807b995f782ecdb5cbc03d1197366916bbb2c",
                "alphaMass": 172833
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/tilt-showcase/1x1-duration-900-frame-899.png",
                "sha256": "a7bf9952e541ab5ebec8fc6b98f11843a54f037170dac0817defc89433c7d57d",
                "alphaMass": 171035
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
        "note": "A dashboard screenshot tilts into view with a revenue toast; chart in light brand blue."
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
      "bundleSha256": "c2db67cd8800611930eaf0af5de073ce90331cbe48ba3bf77282c720452eee6f",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/tilt-showcase/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/tilt-showcase/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/tilt-showcase/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 28,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "4df7af966f3c4abf893b05ecb2f00e1b135a3d1059adea39ec98a10008b4ebb9",
        "loop": "672decb09fbfa9b46f2cdbb2d93d3aabb11677b6c128664390cdbbbbbd29782f",
        "detail": "dd398561c018d19f2b0c3fb4dda71e72de1e97ae1708ebc362124922f45491f8"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/tilt-showcase/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/tilt-showcase/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/tilt-showcase/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 28,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "093aa29050e2265d911f95becad497045ace10315355a00f5013a3fdb1e75a81",
        "loop": "ed47c676992b597465d08004179babe148773e871deb910f6033fc3a24d3188b",
        "detail": "e771d58a6d432a875ead3f2dfc7f0f30ac3fa6dd25be4adfa3b56279ed9c0739"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/tilt-showcase/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/tilt-showcase/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/tilt-showcase/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 28,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "1df1856a2cd802046199aede4e78cf784e8dbe17988f4f957d5df754972782df",
        "loop": "c2b9275fba638c72c42976e560cf099c1ab649576cb0edab724d97b7219cb418",
        "detail": "96316b690757c993a0518c64bec40c388495226c88d66ec8fe1e1b93256755e3"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c2db67cd8800611930eaf0af5de073ce90331cbe48ba3bf77282c720452eee6f/index.mjs",
    "sha256": "c2db67cd8800611930eaf0af5de073ce90331cbe48ba3bf77282c720452eee6f",
    "bytes": 170873,
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
      "overflow": true,
      "transparent": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    }
  },
  "intake": {
    "at": "2026-10-09T04:18:57.843Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
