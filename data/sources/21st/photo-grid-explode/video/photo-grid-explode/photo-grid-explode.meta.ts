// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "media/photo",
  "tags": [
    "photo",
    "grid",
    "gallery",
    "explode",
    "3d",
    "assemble",
    "collage"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 105,
      "min": 45,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 26,
      "out": 0
    },
    "markers": {
      "settled": 28
    },
    "beats": [
      0,
      26
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
    "fill": "region",
    "defaultRegion": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "full",
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "photo1",
      "type": "image",
      "role": "media"
    },
    {
      "key": "photo2",
      "type": "image",
      "role": "media"
    },
    {
      "key": "photo3",
      "type": "image",
      "role": "media"
    },
    {
      "key": "photo4",
      "type": "image",
      "role": "media"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "frameColor": "colors.background",
    "background": "colors.background"
  },
  "motionBeats": [
    {
      "target": "tiles",
      "prop": "z",
      "from": "scattered",
      "settledBy": 26,
      "easing": "ease"
    },
    {
      "target": "tiles",
      "prop": "z",
      "from": "0",
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
      105
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party"
  },
  "job": "gallery",
  "language": "photo-collage",
  "mechanic": [
    "assemble"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": true,
  "defaults": {
    "photo1": "",
    "photo2": "",
    "photo3": "",
    "photo4": "",
    "chaos": 0.7,
    "gap": 1.2,
    "radius": 1.2,
    "accent": "#3D63FF",
    "frameColor": "#3D63FF",
    "background": "transparent"
  },
  "fields": [
    {
      "key": "photo1",
      "label": "Photo 1",
      "type": "asset",
      "role": "media"
    },
    {
      "key": "photo2",
      "label": "Photo 2",
      "type": "asset",
      "role": "media"
    },
    {
      "key": "photo3",
      "label": "Photo 3",
      "type": "asset",
      "role": "media"
    },
    {
      "key": "photo4",
      "label": "Photo 4",
      "type": "asset",
      "role": "media"
    },
    {
      "key": "chaos",
      "label": "Chaos",
      "type": "number",
      "min": 0.2,
      "max": 1
    },
    {
      "key": "gap",
      "label": "Gap",
      "type": "number",
      "min": 0,
      "max": 4
    },
    {
      "key": "radius",
      "label": "Radius",
      "type": "number",
      "min": 0,
      "max": 4
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "frameColor",
      "label": "Frame color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    }
  ],
  "name": "Photo Grid Explode",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "photo-grid-explode",
    "bundleSha256": "ba3dfe23d267f7ad129bd531934e6e5efb02226dee26f3320f8ee35209ff1f81",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:05:33.074Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/16x9-paper.png",
        "sha256": "a5f558aa63d2b8717eac9e5c3e72605a2fb92231e1337af533f36e3a404b5f09"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/16x9-night.png",
        "sha256": "4659be4fb7f3b19899d799f50e015e9b17db64949f9fca74fcfdced08a5feed8"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/16x9-color.png",
        "sha256": "7caf214fa5a8170f3638b6a98a81b9469eaeffe0fc5537edc6c2b39625a7a140"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/1x1-paper.png",
        "sha256": "2e97f68344b70a3fee5729881f2a0897d4a16620ae529f4a11c394edb6c3e848"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/1x1-night.png",
        "sha256": "150970dc082381719f7b67778500796cf4041a876da01dade0cacfa7659090be"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/1x1-color.png",
        "sha256": "b11b87100c4f82e3048999b4896ebdd45a9b87a98be0632f364bcd91f9ea5245"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/9x16-paper.png",
        "sha256": "6a90a4900748aac36804f31a5e719f8b007fe88e647cef2f801c8e5a40dd659f"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/9x16-night.png",
        "sha256": "d003005b30ad012b2be2a6d4aee226bc6cd290e77f69c7b0bf894c1c660f5f8c"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/9x16-color.png",
        "sha256": "69e561fd7c65f7dc4bfaf6174cbf50a73798e7355c1e29150186dc811ab71be9"
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
          "photo-grid-explode--16x9",
          "photo-grid-explode--1x1",
          "photo-grid-explode--9x16"
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
            "paperNight": 23.73044162326389,
            "paperColor": 1.82763671875,
            "region": {
              "left": 82,
              "top": 46,
              "width": 1755,
              "height": 1006
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 26.354329427083332,
            "paperColor": 2.0706651475694446,
            "region": {
              "left": 37,
              "top": 165,
              "width": 1006,
              "height": 768
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 29.44989691840278,
            "paperColor": 2.3250868055555554,
            "region": {
              "left": 37,
              "top": 335,
              "width": 1006,
              "height": 1267
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
            "occupancy": 1.206678417894936,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.206678417894936,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.206678417894936,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9387568470460889,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9387568470460889,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9387568470460889,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8711461854546347,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8711461854546347,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8711461854546347,
            "bad": [],
            "measured": 0
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 89.12825520833333,
        "frames": [
          4,
          28,
          104
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 89.46831597222223,
            "retainedAlpha": 1.009919524805122,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/16x9-duration-45-frame-4.png",
                "sha256": "0d206f0ac66f9662a1f6b1995f4ea570a54022ad01c4392c7fde486670d7501a",
                "alphaMass": 68451
              },
              {
                "frame": 28,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/16x9-duration-45-frame-28.png",
                "sha256": "1f108a82ba4f78067f80a22043ef458dcc933af153cf5d52a1ee8c2bf5f449d0",
                "alphaMass": 465325
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/16x9-duration-45-frame-39.png",
                "sha256": "430755ddb0947e6dc422d308e48d3f0d17613ecd5e14b81ddb132eddbff19b71",
                "alphaMass": 475426
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/16x9-duration-45-frame-44.png",
                "sha256": "8048ee4d1ddcf1c7df57a824d451272556dc3ed601bcd91be2983900121cec3e",
                "alphaMass": 480142
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 87.00119357638889,
            "retainedAlpha": 1.007032837344973,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/16x9-duration-900-frame-4.png",
                "sha256": "0d206f0ac66f9662a1f6b1995f4ea570a54022ad01c4392c7fde486670d7501a",
                "alphaMass": 68451
              },
              {
                "frame": 28,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/16x9-duration-900-frame-28.png",
                "sha256": "c76994ec4fa62aae71b08179dd46a58123d68c790680d3123b91956bd16aafde",
                "alphaMass": 456303
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/16x9-duration-900-frame-792.png",
                "sha256": "5a36d7e8ff334fab3a020e3fe594e38e934642e27771a3d66c6c4ada5913e3b0",
                "alphaMass": 477901
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/16x9-duration-900-frame-899.png",
                "sha256": "a218536611979c39efc9ae6c9fb520c362087ec5417d2a3966a8e5054d1e77cf",
                "alphaMass": 481262
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 71.04828559027777,
            "retainedAlpha": 1.0108668495119604,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/1x1-duration-45-frame-4.png",
                "sha256": "569840fcde630c7086cc104291cc2cb963b367916bbb1b576ff94cc3cae883be",
                "alphaMass": 69627
              },
              {
                "frame": 28,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/1x1-duration-45-frame-28.png",
                "sha256": "0cf097e1abeeffd079b5b89ade33fc8cbe23ff091d50d0d7e1c084c856275f59",
                "alphaMass": 348950
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/1x1-duration-45-frame-39.png",
                "sha256": "7323ca2cc0cc2a3a3ef9837f5f66fdb847d5960ca5aa64191db38ca2faa8ab39",
                "alphaMass": 356221
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/1x1-duration-45-frame-44.png",
                "sha256": "317b8f1659c01ac778959f28741cec10863b55cd54c37d56fe04a185dd335692",
                "alphaMass": 360092
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 69.74989149305556,
            "retainedAlpha": 1.006117530225007,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/1x1-duration-900-frame-4.png",
                "sha256": "569840fcde630c7086cc104291cc2cb963b367916bbb1b576ff94cc3cae883be",
                "alphaMass": 69627
              },
              {
                "frame": 28,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/1x1-duration-900-frame-28.png",
                "sha256": "9c4b1bda47315ec0dea14ee8a21c4161e597d8a1538282963391f19a2b614d46",
                "alphaMass": 341841
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/1x1-duration-900-frame-792.png",
                "sha256": "6ab5da844a6d458a335e03993a0a0241ab143f5adb0dd2221aadadb71430a3ff",
                "alphaMass": 358478
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/1x1-duration-900-frame-899.png",
                "sha256": "cbc7a702cd944b6a13f33127f832012f4b9babf1018a0f62425000adb59da1fa",
                "alphaMass": 360671
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 68.13053385416667,
            "retainedAlpha": 1.0142661352478806,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/9x16-duration-45-frame-4.png",
                "sha256": "ededcfabef105720b17cbd3ad81bcb7151405a1e7130c6b725789b91a4a1e562",
                "alphaMass": 56064
              },
              {
                "frame": 28,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/9x16-duration-45-frame-28.png",
                "sha256": "b7d56406a628bfc40fce1ebb5fe3b5572130c10be33029205a41d4ec20be5990",
                "alphaMass": 325871
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/9x16-duration-45-frame-39.png",
                "sha256": "0534568c2d1dcd7aa0eb5bb25cae8ed14ae5664d190196f2708af0f9d2cdbbd6",
                "alphaMass": 333447
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/9x16-duration-45-frame-44.png",
                "sha256": "9d77c916ef18c4e2e198c89eda16022f5cc7969db30f276630ed58a4c05e1c41",
                "alphaMass": 338204
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 65.37185329861111,
            "retainedAlpha": 1.0077905009411043,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/9x16-duration-900-frame-4.png",
                "sha256": "ededcfabef105720b17cbd3ad81bcb7151405a1e7130c6b725789b91a4a1e562",
                "alphaMass": 56064
              },
              {
                "frame": 28,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/9x16-duration-900-frame-28.png",
                "sha256": "b4439b65dfaf92ed7c0aa721830cbd47f4d0f9480d33dd20a365e416cfb81b48",
                "alphaMass": 319018
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/9x16-duration-900-frame-792.png",
                "sha256": "469c54af17768df68f413c676f2cccb5f7306d2624a109123be496130c5316c3",
                "alphaMass": 336307
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/photo-grid-explode/9x16-duration-900-frame-899.png",
                "sha256": "9b0f9fc2eeba2f1312d379cb58697f0d1787b00b5fee4d28097452ee748e5a99",
                "alphaMass": 338927
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "gallery",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Scattered photos snap into a framed grid; photo gallery."
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
      "bundleSha256": "ba3dfe23d267f7ad129bd531934e6e5efb02226dee26f3320f8ee35209ff1f81",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.020180Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/photo-grid-explode/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/photo-grid-explode/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/photo-grid-explode/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 28,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "0fb95c95a16fe6b367bbdc20fcf6fc4eb96b5a9af5ceb51781b4346743598a68",
        "loop": "bd2be93048b27a3ab23ad8eb364ff3e11b70b5b20d36a3a338050ab705a9031f",
        "detail": "8b36f39f3f05e9b834e9a52b7bd0d384abf1a0397940091c9bac0c79b6d46e7a"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/photo-grid-explode/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/photo-grid-explode/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/photo-grid-explode/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 28,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "157f26f308c4375ce5f4030f19f73fef315e3f8b85ae28519e9eb4c5852a27ae",
        "loop": "7dfe23a12249a569f50d44112268069d0a7563a54c27578d4714d3e551f9ba01",
        "detail": "87f620cdea693b2e7fcc5c14effef94adbbf13f9a52a81e12292926aa771c9c2"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/photo-grid-explode/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/photo-grid-explode/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/photo-grid-explode/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 28,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "b342a141f6b16758da99871cf242a2b82e8b1f2220c2616d9685a3b6838539d2",
        "loop": "6eeabf0f91d498b1f22171935fee92bca10e1d805ccf4f888eb5890180534a4c",
        "detail": "38eb38a86afb3ef21b94ea493742c12b70a35bc87587bdc79d77393a475cac31"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ba3dfe23d267f7ad129bd531934e6e5efb02226dee26f3320f8ee35209ff1f81/index.mjs",
    "sha256": "ba3dfe23d267f7ad129bd531934e6e5efb02226dee26f3320f8ee35209ff1f81",
    "bytes": 683134,
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
    "1:1": {
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
    }
  },
  "intake": {
    "at": "2026-10-07T02:33:13.090Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
