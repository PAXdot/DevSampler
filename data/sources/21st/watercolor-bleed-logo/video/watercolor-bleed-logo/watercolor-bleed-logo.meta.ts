// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "hand-drawn",
  "mechanic": [
    "bleed"
  ],
  "tags": [
    "logo",
    "logo reveal",
    "watercolor",
    "paint",
    "pigment",
    "bleed",
    "bloom",
    "granulation",
    "wet-in-wet",
    "paper",
    "hand-made",
    "opener",
    "brand"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 210,
      "min": 170,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 156,
      "out": 0
    },
    "markers": {
      "settled": 156,
      "water": 1,
      "drop": 10,
      "bloom": 80,
      "dry": 104
    },
    "beats": [
      1,
      10,
      80,
      104,
      128,
      156
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
      "key": "caption",
      "type": "text",
      "maxChars": 40,
      "lines": 2,
      "role": "subline"
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
      "target": "pigment",
      "prop": "fill",
      "from": "clear water",
      "settledBy": 64,
      "easing": "ease"
    },
    {
      "target": "edges",
      "prop": "rim",
      "from": "wet",
      "settledBy": 150,
      "easing": "ease"
    },
    {
      "target": "caption",
      "prop": "opacity",
      "from": "0",
      "settledBy": 156,
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
      210
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (logo painted in wet watercolor: blooms, granulation and dark drying rims on cold-press paper, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "caption": "Crafted with care",
    "primary": "#E4572E",
    "secondary": "#F3A712",
    "color": "#1E1B18",
    "background": "#F4EFE6",
    "granulation": 0.6,
    "bleed": 0.6,
    "paper": true,
    "fontFamily": "Instrument Serif"
  },
  "fields": [
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 40,
      "role": "subline"
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
      "key": "granulation",
      "label": "Granulation",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "bleed",
      "label": "Bleed",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "paper",
      "label": "Paper",
      "type": "boolean"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.body"
    }
  ],
  "name": "Watercolor Logo",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "watercolor-bleed-logo",
    "bundleSha256": "a13e3053976ce4e868ac68d698151ed1a55deaafa15fc16b17a43eaa65900a27",
    "sourceSnapshot": {
      "sha256": "e1700756587cd83df6fd32b5646cce99006e7cf10acda5740b44f04e6918be43",
      "files": 1875
    },
    "renderedAt": "2026-10-09T14:32:50.129Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/16x9-paper.png",
        "sha256": "62331461b58bb88fe3dd14a6648d1be659585f5a64adc767b9606419b0f79185"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/16x9-night.png",
        "sha256": "b5ad7a4463a01b81e4e0ab354f0b75912661c2ce3a617bc78d154d3c62b32b16"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/16x9-color.png",
        "sha256": "491e1c129e60a785de3a255d6ed0c1ac7f6a57b08e8eba606f6079812627d76f"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/9x16-paper.png",
        "sha256": "9bfbe905ba7d6e97232da74f50417e24fd13c64a703522edeeb053d878a9dde7"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/9x16-night.png",
        "sha256": "e93a99ac48ebab7d2b692624f630aa0d731bcfaa348d54decbebb9ad0c2e6033"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/9x16-color.png",
        "sha256": "3aaeb6ac15c4671c13fb5139ebddb31e72dcb7c5f77331f0cebc151c48272f22"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/1x1-paper.png",
        "sha256": "5f876075d8df5ff124011d4b927b3298c7d0ff29790405ff7af1d10d7123107c"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/1x1-night.png",
        "sha256": "b97ce472abb672fc9ade425a1decd90340e79d684d5427df54443c8706b808f2"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/1x1-color.png",
        "sha256": "406dbd23ed34f2f6d7a5e188370f95aec0c643f5b79c44a43887ae692d776efe"
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
          "watercolor-bleed-logo--16x9",
          "watercolor-bleed-logo--9x16",
          "watercolor-bleed-logo--1x1"
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
            "paperNight": 33.263644748263886,
            "paperColor": 30.88815646701389,
            "region": {
              "left": 536,
              "top": 111,
              "width": 893,
              "height": 770
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 32.547281901041664,
            "paperColor": 29.852701822916668,
            "region": {
              "left": 27,
              "top": 361,
              "width": 1050,
              "height": 927
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 34.166232638888886,
            "paperColor": 31.723253038194443,
            "region": {
              "left": 163,
              "top": 209,
              "width": 772,
              "height": 631
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
            "occupancy": 0.46995754641877335,
            "bad": [],
            "measured": 15
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.46995754641877335,
            "bad": [],
            "measured": 15
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4687368774670363,
            "bad": [],
            "measured": 15
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6652509093915345,
            "bad": [],
            "measured": 15
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6652509093915345,
            "bad": [],
            "measured": 15
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6638156323486186,
            "bad": [],
            "measured": 15
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5918894192336286,
            "bad": [],
            "measured": 15
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5918894192336286,
            "bad": [],
            "measured": 15
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5909514011365864,
            "bad": [],
            "measured": 15
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 13.795030381944445,
        "frames": [
          23,
          156,
          209
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 170,
            "averageChannelDifference": 14.407118055555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/16x9-duration-170-frame-20.png",
                "sha256": "9b90e0b8992e1d4cf08205380b1d9ec6ba15be7f836e757a445e7651deab694f",
                "alphaMass": 587520
              },
              {
                "frame": 156,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/16x9-duration-170-frame-156.png",
                "sha256": "689282d9de93cf3f6fc2dd0bae5df36fa752ddc0b0d900b0fcaa20048a2a0318",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/16x9-duration-170-frame-149.png",
                "sha256": "8eeecb21f10409aad13620bfee2ed9f9eadb30e89976586242bcaf126f7729a5",
                "alphaMass": 587520
              },
              {
                "frame": 169,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/16x9-duration-170-frame-169.png",
                "sha256": "4ee8ebef86b8adf57158342786d4f00d0d4283db60846cc577b6cb40885efb3f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 13.795030381944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 23,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/16x9-duration-600-frame-23.png",
                "sha256": "65d9add1c3a23441c51d688e91effc8d4dd2919e50c36553e4e04af0af296de9",
                "alphaMass": 587520
              },
              {
                "frame": 156,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/16x9-duration-600-frame-156.png",
                "sha256": "689282d9de93cf3f6fc2dd0bae5df36fa752ddc0b0d900b0fcaa20048a2a0318",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/16x9-duration-600-frame-528.png",
                "sha256": "4ee8ebef86b8adf57158342786d4f00d0d4283db60846cc577b6cb40885efb3f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/16x9-duration-600-frame-599.png",
                "sha256": "4ee8ebef86b8adf57158342786d4f00d0d4283db60846cc577b6cb40885efb3f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 170,
            "averageChannelDifference": 19.63226996527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/9x16-duration-170-frame-20.png",
                "sha256": "79881bbf1fb2bffca29210830f709410cf8db0efd6f49d24373fb5816a75fd9e",
                "alphaMass": 587520
              },
              {
                "frame": 156,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/9x16-duration-170-frame-156.png",
                "sha256": "10dfc4f9316d7b726616b6c0e611ab77b57836e896e68cdfde77bebcffe48852",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/9x16-duration-170-frame-149.png",
                "sha256": "58b35d8c2c05fe3674c58e786c32b4c3438383a9bbc8dd03f1a7e897c6612d3f",
                "alphaMass": 587520
              },
              {
                "frame": 169,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/9x16-duration-170-frame-169.png",
                "sha256": "9cc38ebe7c98f0c24ad363dae867ede5f7fa3ff7f9b4c6e1bf709a749ca34c9a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 17.81304253472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 23,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/9x16-duration-600-frame-23.png",
                "sha256": "9a3157be2e92da145cfe439e3e4ced11706f0645d8eb94d436dcc08d774fb34f",
                "alphaMass": 587520
              },
              {
                "frame": 156,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/9x16-duration-600-frame-156.png",
                "sha256": "10dfc4f9316d7b726616b6c0e611ab77b57836e896e68cdfde77bebcffe48852",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/9x16-duration-600-frame-528.png",
                "sha256": "9cc38ebe7c98f0c24ad363dae867ede5f7fa3ff7f9b4c6e1bf709a749ca34c9a",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/9x16-duration-600-frame-599.png",
                "sha256": "9cc38ebe7c98f0c24ad363dae867ede5f7fa3ff7f9b4c6e1bf709a749ca34c9a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 170,
            "averageChannelDifference": 19.434895833333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/1x1-duration-170-frame-20.png",
                "sha256": "5225191a89a2bc52696dc8cc20cb556483684f388fbb9504f0a1c30d2b7f1b01",
                "alphaMass": 587520
              },
              {
                "frame": 156,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/1x1-duration-170-frame-156.png",
                "sha256": "adc9448556369e7fbb9c583fd9ddd48ddbe9f87a2dbd1a4474778b30e561bf37",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/1x1-duration-170-frame-149.png",
                "sha256": "e386449876c25c68a0493bf884fee55c71e437afa303e9936827ab7b3d1f1f21",
                "alphaMass": 587520
              },
              {
                "frame": 169,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/1x1-duration-170-frame-169.png",
                "sha256": "adc9448556369e7fbb9c583fd9ddd48ddbe9f87a2dbd1a4474778b30e561bf37",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 18.76508246527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 23,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/1x1-duration-600-frame-23.png",
                "sha256": "a513b03baf4d8a4efe268c73826c7a5abe0b74ab62ddc38c4b4d6d9c6009b20e",
                "alphaMass": 587520
              },
              {
                "frame": 156,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/1x1-duration-600-frame-156.png",
                "sha256": "adc9448556369e7fbb9c583fd9ddd48ddbe9f87a2dbd1a4474778b30e561bf37",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/1x1-duration-600-frame-528.png",
                "sha256": "adc9448556369e7fbb9c583fd9ddd48ddbe9f87a2dbd1a4474778b30e561bf37",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/watercolor-bleed-logo/1x1-duration-600-frame-599.png",
                "sha256": "adc9448556369e7fbb9c583fd9ddd48ddbe9f87a2dbd1a4474778b30e561bf37",
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
        "note": "TitleMatches: The claimed title is 'Watercolor Logo.' Across the images, the subject is a logo-like form constructed out of overlapping, irregular watercolor shapes, which visibly animate (second through fourth slides). This structure and motion—tracing, scribbling, and organic fills—directly align with the watercolor process described and visually support the 'Watercolor Logo' title, not just by name but by the specific drawn/painted look.\n\nnoBakedHeading: The only visible heading (\"Crafted with care\") is shown in the named slot as the editable caption. There isn't any decorative or unexplained block/category heading; no extra language, logo, or category label is baked into the poster or rebrands.\n\nbrandAdherence: The last three images show three visually distinct palette applications for the same poster—pink/purple and tan on white, grey/rose on dark, and yellow/olive on pale green. In all rebrands, the subject and caption are clearly legible, the logo retains its material/shape, and the color applications are plausible and reflect the supplied palette evidence. No unexplained color blocks or legibility issues are present.\n\nlanguageAdherence: The visible material (irregular watercolor edges, imperfect fills, bleed spots), drawing surface, and static camera are consistent with the language card's description. The type shifts from a serif display to a sans caption in rebrands, but the sans is legitimate for body/role (the card allows sans and the primary 'crafted with care' contains no numerals). No features are used that are forbidden by the card (e.g., no drop shadows, perfect boxes, or glass effects). Motion evidence (image 2-4) fits 'draw,' 'trace,' and analogous verbs with linear energy and no overscale effects."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 27,
        "compared": 27,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "a13e3053976ce4e868ac68d698151ed1a55deaafa15fc16b17a43eaa65900a27",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T14:33:03.293Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/watercolor-bleed-logo/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/watercolor-bleed-logo/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/watercolor-bleed-logo/16x9/detail.mp4",
      "bg": "#e4e0d7",
      "posterFrame": 156,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "ece0a4691d786901fb7e9427cb30ffcd9c0617e0904a39bfa863f9479e2965eb",
        "loop": "f50d9f27fc4852f6f1b6df29c65b08d77447ea75c5234ec83de6155e6d8b54b3",
        "detail": "0138ebc088cc5b9accb9b6f17c1e5a36557ef4d9349ed3f50ee7a0f25ca538cb"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/watercolor-bleed-logo/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/watercolor-bleed-logo/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/watercolor-bleed-logo/9x16/detail.mp4",
      "bg": "#e4e0d7",
      "posterFrame": 156,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "60ecd23ed6b27b2862211aa4b4ddad41422455505c5cdd73a7bd9435351374c0",
        "loop": "c1c71cdea38b79d59f5756606634da59deafbd5992cff81a348dd539d6203520",
        "detail": "4570b88bc3f6ea8f541daccc7e3744c4433ff63d610a8f385a65d2299111eb7d"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/watercolor-bleed-logo/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/watercolor-bleed-logo/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/watercolor-bleed-logo/1x1/detail.mp4",
      "bg": "#e4e0d7",
      "posterFrame": 156,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "d94960e7007db4a14ef2458e361ff0c8c24a9413ecb6ab1216e21e6c9a8c7c07",
        "loop": "66d9d6c587d89aa51dea25151aa809697798b73a6ef00d855a4d81c9785db5f6",
        "detail": "9596e7f4cd2360ff6bed84d3eb49f7b3a3727dbe4eea65007f70449a127b7c3b"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/a13e3053976ce4e868ac68d698151ed1a55deaafa15fc16b17a43eaa65900a27/index.mjs",
    "sha256": "a13e3053976ce4e868ac68d698151ed1a55deaafa15fc16b17a43eaa65900a27",
    "bytes": 173264,
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
    "at": "2026-10-09T14:37:53.441Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
