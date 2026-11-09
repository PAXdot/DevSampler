// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/craft",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "dither"
  ],
  "energy": "default",
  "requiresScreenshot": true,
  "tags": [
    "transition",
    "dither",
    "bayer",
    "1-bit",
    "retro",
    "pixel",
    "crossfade",
    "screenshot",
    "before after",
    "product ui",
    "launch"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 120,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 104,
      "out": 0
    },
    "markers": {
      "settled": 104,
      "appear": 0,
      "sweep": 30,
      "hero": 60,
      "clean": 90
    },
    "beats": [
      0,
      14,
      30,
      60,
      90,
      104
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
      "key": "screenshot",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "fromScreenshot",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 48,
      "lines": 3,
      "role": "headline"
    }
  ],
  "brand": {
    "color": "colors.text",
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "background": "colors.background",
    "fontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "card",
      "prop": "dither-in",
      "settledBy": 14,
      "easing": "linear"
    },
    {
      "target": "headline",
      "prop": "dither-in",
      "settledBy": 24,
      "easing": "linear"
    },
    {
      "target": "pixels",
      "prop": "dissolve",
      "settledBy": 90,
      "easing": "ease"
    },
    {
      "target": "card",
      "prop": "scale",
      "settledBy": 104,
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
    "sourceUrl": "21st first-party (8x8 Bayer ordered-dither crossfade from a 1-bit screen to full color, 2026-10-08)"
  },
  "defaults": {
    "screenshot": "",
    "fromScreenshot": "",
    "headline": "Ship faster",
    "color": "#FAFAFA",
    "primary": "#F5D547",
    "secondary": "#FAFAFA",
    "background": "#101010",
    "fontFamily": "Geist",
    "pixelSize": 1,
    "glow": 0.7
  },
  "fields": [
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "fromScreenshot",
      "label": "From screenshot",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 48,
      "role": "headline"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
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
      "key": "pixelSize",
      "label": "Pixel size",
      "type": "number",
      "min": 0.6,
      "max": 1.6
    },
    {
      "key": "glow",
      "label": "Glow",
      "type": "number",
      "min": 0,
      "max": 1
    }
  ],
  "name": "Pixelated Screenshot Reveal",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "bayer-dither-dissolve",
    "bundleSha256": "5d91f7ccd65e3378d4e74433aff72c9fbe60e6c9fda332030a9563e3b396dca9",
    "sourceSnapshot": {
      "sha256": "6efc08ffa63cd79c1ef030574e46b7d37feaf9d76cf75693411a9f12cc69f3ef",
      "files": 1851
    },
    "renderedAt": "2026-10-09T11:48:38.541Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/16x9-paper.png",
        "sha256": "ca8fdbb38e8ee3a1a96b97f880a96254a4f609e7f8b932b8c3f6eb13fc2b32bb"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/16x9-night.png",
        "sha256": "2a61cffd03c63ca243c27b94177e272699552e53599cc032691c248b9941e89b"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/16x9-color.png",
        "sha256": "7ac2c7aaa36820d1cc38ef7b81e569e9ce922c2d3d4556d22871767d6f8bfbf5"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/9x16-paper.png",
        "sha256": "a7b1bdd9118cba64e29d862b1ebe059d5779214666485996599f2d4aecfe658a"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/9x16-night.png",
        "sha256": "3289935e84f620ecf8d538657ac9ddfbfec2050c10a6b8134a0bab2b038a213c"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/9x16-color.png",
        "sha256": "cb7473a43776ea21d3eec1d5bf24739a27adcc47cbaf36d58ce96bd7af5a803d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/1x1-paper.png",
        "sha256": "86fea5721d193919526834e99d624ffede6f0e5b638c26f9c60943f533b4ab6c"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/1x1-night.png",
        "sha256": "2bcbd8753bc6aa9be74a3b18df06a77969fa4e621302f77a269381385c10ae83"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/1x1-color.png",
        "sha256": "d9b9852461ce92c1a877d6a2c52bd0e84e89632a56b400386d7d1364f8f2d264"
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
          "bayer-dither-dissolve--16x9",
          "bayer-dither-dissolve--9x16",
          "bayer-dither-dissolve--1x1"
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
            "paperNight": 17.30243598090278,
            "paperColor": 10.16604275173611,
            "region": {
              "left": 134,
              "top": 76,
              "width": 1750,
              "height": 968
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 14.392333984375,
            "paperColor": 8.52346462673611,
            "region": {
              "left": 27,
              "top": 292,
              "width": 1026,
              "height": 1472
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 18.38471137152778,
            "paperColor": 12.283501519097221,
            "region": {
              "left": 41,
              "top": 200,
              "width": 1008,
              "height": 841
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
            "occupancy": 1.1577901479521853,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1577901479521853,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1577901479521853,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.014109347442681,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0322184429327288,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0134204144620813,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0300313541054285,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0300313541054285,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0288065843621401,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 52.803385416666664,
        "frames": [
          15,
          104,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 120,
            "averageChannelDifference": 52.803385416666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/16x9-duration-120-frame-14.png",
                "sha256": "b98f79cf155f048b7fbadfe085cc032ccd9d35835b1e1552baa419ef95a8bd75",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/16x9-duration-120-frame-104.png",
                "sha256": "d9745e8d00adcb6915c5f0dc77ce9d04fdadb6ae681244ff488f8e95865fe4f0",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/16x9-duration-120-frame-105.png",
                "sha256": "ef6d87da003a1c3fb601d8474766d6390f1b56c1cb6d1fbd4db66a90eb2a0665",
                "alphaMass": 587520
              },
              {
                "frame": 119,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/16x9-duration-120-frame-119.png",
                "sha256": "aeb53049202650d712bcd0281b456220a6c26b68f09a720915016c4e03f1ee7b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 52.803385416666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/16x9-duration-600-frame-15.png",
                "sha256": "b98f79cf155f048b7fbadfe085cc032ccd9d35835b1e1552baa419ef95a8bd75",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/16x9-duration-600-frame-104.png",
                "sha256": "d9745e8d00adcb6915c5f0dc77ce9d04fdadb6ae681244ff488f8e95865fe4f0",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/16x9-duration-600-frame-528.png",
                "sha256": "4eda9c212de43f52c81f260a25b872ca1bb8a06616bd39a02affd1685b4c4064",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/16x9-duration-600-frame-599.png",
                "sha256": "4eda9c212de43f52c81f260a25b872ca1bb8a06616bd39a02affd1685b4c4064",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 120,
            "averageChannelDifference": 70.58311631944444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/9x16-duration-120-frame-14.png",
                "sha256": "09c03b30fd527214180762e82fb6405ad15eeda284fa977299b0271538f970ae",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/9x16-duration-120-frame-104.png",
                "sha256": "ed861d2267a4e467d79b4796502ffc85afd80c938dc49ce05bf62b2195f9ef00",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/9x16-duration-120-frame-105.png",
                "sha256": "829426ed041360d20ae1a34e5a9e3d7241206e336957805115c19e6bf6412d13",
                "alphaMass": 587520
              },
              {
                "frame": 119,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/9x16-duration-120-frame-119.png",
                "sha256": "3f893a94d1a1234ae7722b5b3a7006000b239b7591d1f011f6d871a3ad77fa41",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 70.58311631944444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/9x16-duration-600-frame-15.png",
                "sha256": "09c03b30fd527214180762e82fb6405ad15eeda284fa977299b0271538f970ae",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/9x16-duration-600-frame-104.png",
                "sha256": "ed861d2267a4e467d79b4796502ffc85afd80c938dc49ce05bf62b2195f9ef00",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/9x16-duration-600-frame-528.png",
                "sha256": "d2335cf85c56b50849e0d7f7e1246949f34583675369121dbf784f7f889c28c8",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/9x16-duration-600-frame-599.png",
                "sha256": "d2335cf85c56b50849e0d7f7e1246949f34583675369121dbf784f7f889c28c8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 120,
            "averageChannelDifference": 58.130642361111114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/1x1-duration-120-frame-14.png",
                "sha256": "8a3b1dc227e1159ae0ce35e9a2e804946ea86a7e4a3814df5c6f88c3636cf337",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/1x1-duration-120-frame-104.png",
                "sha256": "345f991373f211c3aca83c6cbdfbfa87b2dc5564532bb79a328fc92f32ca2421",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/1x1-duration-120-frame-105.png",
                "sha256": "0f73e24a56d5ef9dcb199116a12c81987571f0c9e815317a092eb67b563d2a72",
                "alphaMass": 587520
              },
              {
                "frame": 119,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/1x1-duration-120-frame-119.png",
                "sha256": "5d910611fbfdb695c6e57e95cd1bda04fb9a4f4eff14d8ffc8adc0b4816c7ea5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 58.130642361111114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/1x1-duration-600-frame-15.png",
                "sha256": "8a3b1dc227e1159ae0ce35e9a2e804946ea86a7e4a3814df5c6f88c3636cf337",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/1x1-duration-600-frame-104.png",
                "sha256": "345f991373f211c3aca83c6cbdfbfa87b2dc5564532bb79a328fc92f32ca2421",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/1x1-duration-600-frame-528.png",
                "sha256": "fbf4d652f9eb59d066fc7f68201ccb8d24e577b38d4bdd1b9d288f5c5656d9f6",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/bayer-dither-dissolve/1x1-duration-600-frame-599.png",
                "sha256": "fbf4d652f9eb59d066fc7f68201ccb8d24e577b38d4bdd1b9d288f5c5656d9f6",
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
        "note": "1. TitleMatches: The first image shows a UI poster with a UI surface partially revealed by a grid of colored squares (pixel motif). The next three images show this same scene in a sequence: pixelation overtakes and then recedes from the UI, matching the 'Pixelated Screenshot Reveal' concept. The progression supports the idea of a screenshot being revealed through a pixelation effect, so the title is supported by visual evidence.\n\n2. noBakedHeading: There is no decorative block-title or label unrelated to slot content, category, or language card visible. The only large heading, 'Ship faster', directly matches the named slot, and there are no unexplained category/language badges. \n\n3. BrandAdherence: Images 5-7 show three variants of the poster, each with a different color palette (background, accent, pixel color, underline), and textual/visual contrast is preserved in all versions. The palettes resemble the supplied color sets, and no unexplained block colors are present—only the rebrand colors are applied; visuals remain legible in all settings.\n\n4. LanguageAdherence: Across all variants (including the motion samples), the UI motif, flat material depiction, and sans-serif type remain consistent, in line with the language card’s directions for material, light, camera and type roles. The language card is present and all requirements (no baked decorative headline in screenshot, flat/clean interfaces) are followed."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 60,
        "compared": 60,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "5d91f7ccd65e3378d4e74433aff72c9fbe60e6c9fda332030a9563e3b396dca9",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T11:52:25.671Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/bayer-dither-dissolve/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/bayer-dither-dissolve/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/bayer-dither-dissolve/16x9/detail.mp4",
      "bg": "#101010",
      "posterFrame": 104,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "c29af1959371d3c6b13ba7ae475b6a35d22c432e8203f3e3621139fcdd93b464",
        "loop": "26aa2c716d8e2a87427c5a5b9f7b5422754d66db31853cf1632edcc58bb0c88d",
        "detail": "6977849f7a2cb7ff0c31a74066c42fa08e30c356aba0c337a69abdc38af36b4b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/bayer-dither-dissolve/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/bayer-dither-dissolve/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/bayer-dither-dissolve/9x16/detail.mp4",
      "bg": "#101010",
      "posterFrame": 104,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "361fedd208e9f59c3d868283b0a35970431a0207a0b90510db3d20513d5e1414",
        "loop": "e666d86ea90c8ffabce5170b4cc4cea79ea650446555ea0b590fe105f5551fdf",
        "detail": "9b31cfec67673204be8abafa5d611717685542f322c2cafb1c92e844d2e04606"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/bayer-dither-dissolve/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/bayer-dither-dissolve/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/bayer-dither-dissolve/1x1/detail.mp4",
      "bg": "#101010",
      "posterFrame": 104,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "0cfdb74384e3cbe65941d2cfa63e06a7450b8ae3838b01e0fb890a0b481199b5",
        "loop": "22f62a0a4421f459709eb2d6b72a2b2aa0940113720bc174e4dda7098fc5cb3b",
        "detail": "1edffb0d5b439334563b9f8182962f34b676b332eaa8b0c308f4b001dd171d4a"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/5d91f7ccd65e3378d4e74433aff72c9fbe60e6c9fda332030a9563e3b396dca9/index.mjs",
    "sha256": "5d91f7ccd65e3378d4e74433aff72c9fbe60e6c9fda332030a9563e3b396dca9",
    "bytes": 176294,
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
    "at": "2026-10-09T11:57:26.278Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
