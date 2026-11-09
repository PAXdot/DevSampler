// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/craft",
  "job": "data",
  "language": "aura",
  "mechanic": [
    "ripple"
  ],
  "energy": "default",
  "tags": [
    "number",
    "stat",
    "metric",
    "kpi",
    "peak",
    "ridgeline",
    "joyplot",
    "waves",
    "pulse",
    "data",
    "counter",
    "glow",
    "landscape",
    "reveal"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 140,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 130,
      "out": 0
    },
    "markers": {
      "settled": 130,
      "wake": 6,
      "build": 40,
      "lift": 72,
      "land": 92,
      "count": 76,
      "pulse": 152
    },
    "beats": [
      0,
      6,
      40,
      72,
      92,
      130,
      152
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
      "key": "value",
      "type": "number",
      "role": "value"
    },
    {
      "key": "label",
      "type": "text",
      "maxChars": 48,
      "lines": 2,
      "role": "caption"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "accent2": "colors.secondary",
    "background": "colors.background",
    "fontFamily": "fonts.display",
    "labelFontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "ridges",
      "prop": "amplitude",
      "from": "calm",
      "settledBy": 82,
      "easing": "ease"
    },
    {
      "target": "peak",
      "prop": "y",
      "from": "baseline",
      "settledBy": 118,
      "easing": "spring"
    },
    {
      "target": "ring",
      "prop": "radius",
      "from": "peak",
      "settledBy": 140,
      "easing": "linear"
    },
    {
      "target": "value",
      "prop": "count",
      "settledBy": 120,
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
    "sourceUrl": "21st first-party (stacked ridgelines ripple like a pulse record until the front ridge spikes into the number, 2026-10-08)"
  },
  "defaults": {
    "value": 12480,
    "decimals": 0,
    "separators": true,
    "prefix": "",
    "suffix": "",
    "label": "All-time high",
    "color": "#FBEAEC",
    "accent": "#FF5A5F",
    "accent2": "#FFB4A2",
    "background": "#260F12",
    "fontFamily": "Geist",
    "labelFontFamily": "Inter",
    "rows": 34,
    "seed": 7,
    "grain": true
  },
  "fields": [
    {
      "key": "value",
      "label": "Value",
      "type": "number",
      "min": -1000000000000,
      "max": 1000000000000,
      "role": "value"
    },
    {
      "key": "decimals",
      "label": "Decimals",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 2
    },
    {
      "key": "separators",
      "label": "Separators",
      "type": "boolean"
    },
    {
      "key": "prefix",
      "label": "Prefix",
      "type": "text",
      "max": 3
    },
    {
      "key": "suffix",
      "label": "Suffix",
      "type": "text",
      "max": 3
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 48,
      "role": "caption"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "accent2",
      "label": "Accent 2",
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
      "brand": "fonts.display"
    },
    {
      "key": "labelFontFamily",
      "label": "Label font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "rows",
      "label": "Rows",
      "type": "number",
      "step": 1,
      "min": 16,
      "max": 60
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 999
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    }
  ],
  "name": "Ridgeline Waves",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "ridgeline-waves",
    "bundleSha256": "c8f8347aded2b8d27b8079c89c09793139f81c89ad4f13ec6358e45436b19f2b",
    "sourceSnapshot": {
      "sha256": "c8715db50bf5f6e7adeda1c9cc3c7aaf7ceeb34bc8961bc41f1e021a1e367666",
      "files": 1845
    },
    "renderedAt": "2026-10-09T11:09:05.234Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/16x9-paper.png",
        "sha256": "aef218cf2ad095fea2bae731462b3ba03349ed60390acf93c2a715833f47445a"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/16x9-night.png",
        "sha256": "5dccf45d40c2f8c6bf7b12e6c673d11524f1edac467bb97d074edca2d41f7937"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/16x9-color.png",
        "sha256": "9fb41962eb3aeba7c140545d55ed8c531b01086d138ce3423aeb369dd0526f5d"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/9x16-paper.png",
        "sha256": "50e2c65befc8108e4f1a62b585ce8635a42f6036833fa977c0dca92454e53a2c"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/9x16-night.png",
        "sha256": "9572ab2d067835e29569401435281813717e2b26d5ed7631be8efc36c77732f8"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/9x16-color.png",
        "sha256": "5e21e10c0c5195057fed39acc92284b632bdd0cb234d276a32b600c1ebb22746"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/1x1-paper.png",
        "sha256": "52231f9b22a480cf4547f20e01b1f61d12d0633875310d5283081d8968c31f55"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/1x1-night.png",
        "sha256": "4c8d85068a618f57b0d9ce4d27e580196a7f0afce676fe450858a7e7ef8c32b0"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/1x1-color.png",
        "sha256": "2a17e9d2441f281102f68a5b7d2361a1d6803d7ca2e5bc74d9beb1b058026e7d"
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
          "ridgeline-waves--16x9",
          "ridgeline-waves--9x16",
          "ridgeline-waves--1x1"
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
            "paperNight": 47.53729926215278,
            "paperColor": 33.594889322916664,
            "region": {
              "left": 154,
              "top": 0,
              "width": 1613,
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
            "paperNight": 49.96519639756944,
            "paperColor": 29.06426323784722,
            "region": {
              "left": 0,
              "top": 222,
              "width": 1080,
              "height": 1664
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 51.74207899305556,
            "paperColor": 33.151448567708336,
            "region": {
              "left": 69,
              "top": 105,
              "width": 942,
              "height": 975
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
            "occupancy": 1.0726638665368413,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1906238189720335,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0726638665368413,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0770729009196274,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2171969482237341,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0840442465566476,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.091531076879769,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1022271562946169,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1005613236378229,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.17361111111111,
        "frames": [
          19,
          130,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 140,
            "averageChannelDifference": 9.422417534722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/16x9-duration-140-frame-16.png",
                "sha256": "17eb668386c39af2e4308f2e0db078f73a7684c591255ae843efd15614830de7",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/16x9-duration-140-frame-130.png",
                "sha256": "d2c919d4f35fecc80844df1c1922e632531ae3070f2d146f92c5a137283e61f6",
                "alphaMass": 587520
              },
              {
                "frame": 123,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/16x9-duration-140-frame-123.png",
                "sha256": "782e3879ef3d6e46f4f2ab48a69a2d065469f60a7b8033188e9ec97fa8d01d56",
                "alphaMass": 587520
              },
              {
                "frame": 139,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/16x9-duration-140-frame-139.png",
                "sha256": "1b39d540aaff5bfbe0d300e59232f1875cce0ef709140a1819dcf1e8d472ca58",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 9.17361111111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/16x9-duration-600-frame-19.png",
                "sha256": "2c8384f16c9fa92885f28309fd39c0205ed6cdbdc6fa6ddbfeecc7528b8baaa3",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/16x9-duration-600-frame-130.png",
                "sha256": "47d86929f537639df5fa527acd2ac22d5440617a274799b198f584269c2c669b",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/16x9-duration-600-frame-528.png",
                "sha256": "6a8b5f331cf5b223168a7106226c15656b32aa7ca5e6e5e934c99b2018bfcff9",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/16x9-duration-600-frame-599.png",
                "sha256": "7edf0d607b3ffcb8872157c1046ecfa52631b484ef5993b34b89a3471a4fbf4a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 140,
            "averageChannelDifference": 10.513020833333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/9x16-duration-140-frame-16.png",
                "sha256": "18e4132eb1c8679324a545bf06d3557b8593cf62959661160e5510ef3d72ccfc",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/9x16-duration-140-frame-130.png",
                "sha256": "64931b6fc173955af3ae3aba2ce8e116adeeb9a4d131437199aca79ef8aef054",
                "alphaMass": 587520
              },
              {
                "frame": 123,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/9x16-duration-140-frame-123.png",
                "sha256": "34a4fc506714295b48bb7717dfe29926ef4e17ac927db4c560ced28c96552a70",
                "alphaMass": 587520
              },
              {
                "frame": 139,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/9x16-duration-140-frame-139.png",
                "sha256": "f86f6aeb080bd06a479f87c3d5cbbf98975a203255bd53efd2b643931aada27c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 10.23068576388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/9x16-duration-600-frame-19.png",
                "sha256": "5172c77f2f3bf20c736c743a6015b1c3ad3e9fff8263bdbe844a344ca334b6d1",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/9x16-duration-600-frame-130.png",
                "sha256": "64931b6fc173955af3ae3aba2ce8e116adeeb9a4d131437199aca79ef8aef054",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/9x16-duration-600-frame-528.png",
                "sha256": "a94061e21ebf3cb02c32d7349b85b0ac4c9b0c1e262e8fd7672dc4447f080937",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/9x16-duration-600-frame-599.png",
                "sha256": "5f669fac2ab01e1c5fa9e019786b4c5421932b6fa20ef164e9c51d3c4c6c3e1c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 140,
            "averageChannelDifference": 10.608940972222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/1x1-duration-140-frame-16.png",
                "sha256": "7c4bfd26501cba7bf0331c31692ea9ce0c391c339f7131c436d085295f48a59c",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/1x1-duration-140-frame-130.png",
                "sha256": "a5da9b0f277be093409fe908ca2361f864bebe78a55c64298fa878b35e69d059",
                "alphaMass": 587520
              },
              {
                "frame": 123,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/1x1-duration-140-frame-123.png",
                "sha256": "ed5e45f802bcd9ecb91f6b106cbda2eba94e96ea17962f43ac3a25a7a162d186",
                "alphaMass": 587520
              },
              {
                "frame": 139,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/1x1-duration-140-frame-139.png",
                "sha256": "f5c8ad32ccf46916ff078efe47cb7400c6c479be4d081ccebb35995728354036",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 10.30295138888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/1x1-duration-600-frame-19.png",
                "sha256": "a056f1f101f9569d9603c5838924d23e742c11c2264a74c427bcbf2d1438814b",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/1x1-duration-600-frame-130.png",
                "sha256": "a5da9b0f277be093409fe908ca2361f864bebe78a55c64298fa878b35e69d059",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/1x1-duration-600-frame-528.png",
                "sha256": "17f37af855c17ff3b53b03bdf825ca608788e71194e6d01a93dc18a385a65a05",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-130138/ridgeline-waves/1x1-duration-600-frame-599.png",
                "sha256": "bbf267ded4912eb44f1392b815e174ea54c487721c892dbec02e55ac89154382",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "data",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "TitleMatches: The images clearly depict a prominent ridgeline-shaped wave as a sharp, isolated peak, with fine-line 'waves' forming a terrain, matching the 'Ridgeline Waves' title. The motion samples (images 2-4) show the central peak rising and falling, supporting the dynamic implied in the title, not just statically, but through transformation consistent with 'waves.'\n\nNoBakedHeading: There is no extraneous decorative or fixed block heading present; all text (\"12,480\", \"All-time high\") corresponds directly to named-slot content, and there are no unrelated labels or category marks.\n\nBrandAdherence: The three rebrand images (5, 6, 7) each use their provided brand palettes (primary/secondary/text/background) precisely: images shift to soft olive/berry, lavender/purple, and blue/red-green themes as described, with all key structures and text fully legible against their backgrounds, and without unexplained retained color blocks. Shape and material remain preserved.\n\nLanguageAdherence: All three rebrands and motion frames maintain the same clear information hierarchy, with sans-serif display and body type, tabular numerals, and consistent subject structure. Color and light subtly drift as ambient gradients and soft fields per the language card, and the central peak (the 'sharp subject') remains in focus, fulfilling the requirements for material, type roles, and motion style. There are no forbidden motifs, and language remains consistent throughout."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 17,
        "compared": 17,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "c8f8347aded2b8d27b8079c89c09793139f81c89ad4f13ec6358e45436b19f2b",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T11:09:26.022Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/ridgeline-waves/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/ridgeline-waves/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/ridgeline-waves/16x9/detail.mp4",
      "bg": "#260f12",
      "posterFrame": 130,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "19457872d22e4e00c0d1fc1538acd2301a63cd0474dddcf7a1592d4334fb830e",
        "loop": "0c53471d100e1b48fb8b89be8fa9e915a09be634616e243dac5efc95048b037c",
        "detail": "b1bad7c25ef15af197f7c220eb32b21dec574d84acfde74f232718d61cb6a816"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/ridgeline-waves/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/ridgeline-waves/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/ridgeline-waves/9x16/detail.mp4",
      "bg": "#260f12",
      "posterFrame": 130,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "967a4fd5d8aac196ea309395f2b971f56d549e20dfdd2b54ab3c060ac799961f",
        "loop": "8d33eae071b025693dfdb6c15a4a38d34c77ca71bf6ddc23045bffc0c5d1ed92",
        "detail": "94763fb2ac93bfc6e2266a7c8e5e518c47b2d474874d932b1f92a76eee28822b"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/ridgeline-waves/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/ridgeline-waves/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/ridgeline-waves/1x1/detail.mp4",
      "bg": "#260f12",
      "posterFrame": 130,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "b9ce8baebe38f7b6c617539025077b42ba789711f682ca964911c26e71b4e44c",
        "loop": "21752b0a8ea6ffb05b9e638b6dd76392e53cc9829dbae49ca7983288023e0c25",
        "detail": "afa02a95d0f848bbd88cdefd86d8f02a0708954b28b9833c8ec770476d6b5f1c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c8f8347aded2b8d27b8079c89c09793139f81c89ad4f13ec6358e45436b19f2b/index.mjs",
    "sha256": "c8f8347aded2b8d27b8079c89c09793139f81c89ad4f13ec6358e45436b19f2b",
    "bytes": 171040,
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
    "at": "2026-10-09T11:27:09.675Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
