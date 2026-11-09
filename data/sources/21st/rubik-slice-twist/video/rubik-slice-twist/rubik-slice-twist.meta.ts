// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/craft",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "twist"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "screenshot",
    "logo",
    "cube",
    "puzzle",
    "3d",
    "twist",
    "scramble",
    "solve",
    "slices",
    "reveal",
    "product ui",
    "launch"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 150,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 146,
      "out": 0
    },
    "markers": {
      "settled": 146,
      "scramble": 14,
      "scrambled": 62,
      "solve": 82,
      "hero": 118,
      "logo": 132
    },
    "beats": [
      0,
      14,
      30,
      46,
      62,
      82,
      94,
      106,
      118,
      146
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
      "key": "logo",
      "type": "image",
      "role": "logo"
    },
    {
      "key": "title",
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
      "target": "slices",
      "prop": "rotate",
      "from": "solved",
      "settledBy": 118,
      "easing": "spring"
    },
    {
      "target": "cube",
      "prop": "rotateY",
      "from": "left",
      "settledBy": 146,
      "easing": "ease"
    },
    {
      "target": "title",
      "prop": "y",
      "from": "below",
      "settledBy": 146,
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
    "sourceUrl": "21st first-party (a 3D puzzle cube with the screenshot on its face scrambles slice by slice and solves itself, 2026-10-08)"
  },
  "defaults": {
    "screenshot": "",
    "logo": "",
    "title": "Everything clicks into place",
    "color": "#1A1A17",
    "primary": "#3A5A40",
    "secondary": "#E9C46A",
    "background": "#F3F4ED",
    "fontFamily": "DM Sans",
    "gloss": 0.7
  },
  "fields": [
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo"
    },
    {
      "key": "title",
      "label": "Title",
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
      "key": "gloss",
      "label": "Gloss",
      "type": "number",
      "min": 0,
      "max": 1
    }
  ],
  "name": "Screenshot Puzzle Cube",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "rubik-slice-twist",
    "bundleSha256": "4b7c082763ae16f2f301d879ef53129126743f5f1e37ca5255cb601967687a1c",
    "sourceSnapshot": {
      "sha256": "e1700756587cd83df6fd32b5646cce99006e7cf10acda5740b44f04e6918be43",
      "files": 1875
    },
    "renderedAt": "2026-10-09T14:30:41.913Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/16x9-paper.png",
        "sha256": "bac9040f4d59e5e1cdddbb54f7506156fc3527084bab5451c53fc740821da34c"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/16x9-night.png",
        "sha256": "4283f9b10aabe6766672fca1b154f1e2404708a139ee0db94f366d65ea470f2f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/16x9-color.png",
        "sha256": "0088b773edc3da521ab3f982ae078361530428f265b65b41f053482761c95055"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/9x16-paper.png",
        "sha256": "4eb9b1ab599721001ddc5f2c84739a9580f80346b0f1c1e9b78b3cd317581869"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/9x16-night.png",
        "sha256": "779474be295e4e5a6a214e5c3392f9b3891be3f888018c63e08faf6cf288b0e3"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/9x16-color.png",
        "sha256": "9634c1e2120db8d3e10bc11baff4aa0f95f70f3cd306b4774c288bd3d19bd369"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/1x1-paper.png",
        "sha256": "cbdf3acfa9b6e4a249795576027011281ffe700135898db139ab4849df06716b"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/1x1-night.png",
        "sha256": "093462c3bb2a10905cfd8456483d2cd5be615d5e66f2d3891f4fc9ff33664fb2"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/1x1-color.png",
        "sha256": "c521603d13180e591d71856f5aad9ebbc33fe88d63c187f70f1b55fbef1a6eef"
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
          "rubik-slice-twist--16x9",
          "rubik-slice-twist--9x16",
          "rubik-slice-twist--1x1"
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
            "paperNight": 17.341715494791668,
            "paperColor": 13.556016710069445,
            "region": {
              "left": 144,
              "top": 190,
              "width": 1438,
              "height": 751
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 23.582763671875,
            "paperColor": 19.896864149305557,
            "region": {
              "left": 115,
              "top": 319,
              "width": 819,
              "height": 1297
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 18.084716796875,
            "paperColor": 14.812906901041666,
            "region": {
              "left": 137,
              "top": 173,
              "width": 810,
              "height": 798
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
            "occupancy": 0.7341688122008064,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7375868219587219,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7341688122008064,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7232073963844798,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.726006186618166,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7232073963844798,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.785383597883598,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.785383597883598,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7815051603631852,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 20.35373263888889,
        "frames": [
          21,
          146,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 21.51421440972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/16x9-duration-150-frame-18.png",
                "sha256": "0afdcd5bb3397de4cd5ceaa79bf550b9e3c90295c371a1c211976231ec1770f3",
                "alphaMass": 587520
              },
              {
                "frame": 146,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/16x9-duration-150-frame-146.png",
                "sha256": "163f0027a9b8aaa656268151c86e0376e92d71aca2be36d8c791e982b17d967f",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/16x9-duration-150-frame-132.png",
                "sha256": "221684800bff9462baa1074b925290a291dc1ab81e024cace617e8f8d42dd424",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/16x9-duration-150-frame-149.png",
                "sha256": "163f0027a9b8aaa656268151c86e0376e92d71aca2be36d8c791e982b17d967f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 20.35373263888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/16x9-duration-600-frame-21.png",
                "sha256": "62c05ba5e9c301c1836bb00a6baf3f81fa1173384556d2a83e9e821bca837c07",
                "alphaMass": 587520
              },
              {
                "frame": 146,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/16x9-duration-600-frame-146.png",
                "sha256": "163f0027a9b8aaa656268151c86e0376e92d71aca2be36d8c791e982b17d967f",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/16x9-duration-600-frame-528.png",
                "sha256": "163f0027a9b8aaa656268151c86e0376e92d71aca2be36d8c791e982b17d967f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/16x9-duration-600-frame-599.png",
                "sha256": "163f0027a9b8aaa656268151c86e0376e92d71aca2be36d8c791e982b17d967f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 22.35698784722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/9x16-duration-150-frame-18.png",
                "sha256": "7895ac4b36fa31c9c0d9ca524c27473645136cb47cf1eaf4c83402868b9939e4",
                "alphaMass": 587520
              },
              {
                "frame": 146,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/9x16-duration-150-frame-146.png",
                "sha256": "0aca7d1f59b1f38669f5d139d4b9b03e29f681b845580278e5b20ba85623d8a6",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/9x16-duration-150-frame-132.png",
                "sha256": "79706f12ff2367088089db4fb53a6ad2e53bfae6587d0d1ff83dc10416eb1263",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/9x16-duration-150-frame-149.png",
                "sha256": "0aca7d1f59b1f38669f5d139d4b9b03e29f681b845580278e5b20ba85623d8a6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 21.649088541666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/9x16-duration-600-frame-21.png",
                "sha256": "b5f23419cfa6a5d416eaa5e73d44841af39c43c50dcc46684589bb1d75d9d799",
                "alphaMass": 587520
              },
              {
                "frame": 146,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/9x16-duration-600-frame-146.png",
                "sha256": "0aca7d1f59b1f38669f5d139d4b9b03e29f681b845580278e5b20ba85623d8a6",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/9x16-duration-600-frame-528.png",
                "sha256": "0aca7d1f59b1f38669f5d139d4b9b03e29f681b845580278e5b20ba85623d8a6",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/9x16-duration-600-frame-599.png",
                "sha256": "0aca7d1f59b1f38669f5d139d4b9b03e29f681b845580278e5b20ba85623d8a6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 16.632703993055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/1x1-duration-150-frame-18.png",
                "sha256": "5a5728e64ccff43da8225c696cc9fc0214ee0266f85a140653da9b5f317a37a1",
                "alphaMass": 587520
              },
              {
                "frame": 146,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/1x1-duration-150-frame-146.png",
                "sha256": "5a842f6d6972faf48f5c55ba764e5464255b2e94f962ebeae480dfccb21b11f6",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/1x1-duration-150-frame-132.png",
                "sha256": "1ebffce96420df9988eb3285a8a01fe28c77a748a5e9e5622b2440f3bca01ee8",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/1x1-duration-150-frame-149.png",
                "sha256": "5a842f6d6972faf48f5c55ba764e5464255b2e94f962ebeae480dfccb21b11f6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 15.836371527777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/1x1-duration-600-frame-21.png",
                "sha256": "f33498c5b303862525749ac9f1bb9bfebda6ffc5965da6ed8a9ae6cc8b130020",
                "alphaMass": 587520
              },
              {
                "frame": 146,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/1x1-duration-600-frame-146.png",
                "sha256": "5a842f6d6972faf48f5c55ba764e5464255b2e94f962ebeae480dfccb21b11f6",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/1x1-duration-600-frame-528.png",
                "sha256": "5a842f6d6972faf48f5c55ba764e5464255b2e94f962ebeae480dfccb21b11f6",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-162830/rubik-slice-twist/1x1-duration-600-frame-599.png",
                "sha256": "5a842f6d6972faf48f5c55ba764e5464255b2e94f962ebeae480dfccb21b11f6",
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
        "note": "1. TitleMatches: The first image depicts a Rubik's cube made from interface elements, visually supporting the 'Screenshot Puzzle Cube' title. The motion sequence (images 2-4) shows a cube turn and return to its original state, visually implying 'clicks into place' as cube faces realign. The motion is concrete and directly represented by the visual subject—in line with the title.\n\n2. noBakedHeading: No decorative, block-style, or language/category headings are baked into the images. The only headline present matches the named slot content ('Everything clicks into place'), and is not a generic block label. There are no unexplained titles or baked labels.\n\n3. brandAdherence: The last three images present clear rebrands of the same layout using three distinct palettes. Text and graphic elements remain consistently legible on all backgrounds, with contrast preserved. Colors applied to the cube and text match the palette proposals. There are no unexplained or fixed block colors outside the palettes.\n\n4. languageAdherence: The images show a flat interface-within-cube structure. Text roles and layout stay consistent across all rebrands and the motion samples. Surfaces, accent lines, and text adhere to the consistent sans type and color roles as laid out in the language card. No forbidden headline placement or invented metrics appear, fulfilling the language card requirements."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 61,
        "compared": 61,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "4b7c082763ae16f2f301d879ef53129126743f5f1e37ca5255cb601967687a1c",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T14:33:03.289Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/rubik-slice-twist/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/rubik-slice-twist/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/rubik-slice-twist/16x9/detail.mp4",
      "bg": "#f3f4ed",
      "posterFrame": 146,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d2bc711aa10131b3d56660c8a40a3bbb7c0fc2d561d212ded3a7a50a41100427",
        "loop": "4e78dd529dbdc1d984d6172ea5bbec4387bbe3f4460bdaa3a732fae2e225d214",
        "detail": "6e7368d1b7e2b143c6d0706dd9a0ea33beac6b5158acc72a9192051f5410808a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/rubik-slice-twist/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/rubik-slice-twist/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/rubik-slice-twist/9x16/detail.mp4",
      "bg": "#f3f4ed",
      "posterFrame": 146,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5b3054e4b50f22a75e2f7166025218f0fe6e9285d4609ae83f69ebb27abc4986",
        "loop": "e67a3c7081d264cfdce257b04518b9c148efb910344e2322d8f4c8754f6d922c",
        "detail": "ba0a1e4475ef400c920fd88846d747eef1f08e8e631d2edb2940c75ebd8d0ce4"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/rubik-slice-twist/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/rubik-slice-twist/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/rubik-slice-twist/1x1/detail.mp4",
      "bg": "#f3f4ed",
      "posterFrame": 146,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "19f03d131bbd90eba30bff9e0399e94f5b2f595f844ce34bf8767514231151b8",
        "loop": "268c21635a56e2d343d5b71eafd908881b2f9d0aa225b9f67e4bb989a619e007",
        "detail": "9f0391a8d9e44f11ba2e43ad1617c7598c420d83b97f43259e4fc180704dc7c4"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/4b7c082763ae16f2f301d879ef53129126743f5f1e37ca5255cb601967687a1c/index.mjs",
    "sha256": "4b7c082763ae16f2f301d879ef53129126743f5f1e37ca5255cb601967687a1c",
    "bytes": 173217,
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
    "at": "2026-10-09T14:36:54.019Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
