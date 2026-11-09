// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "kinetic-poster",
  "mechanic": [
    "bulge"
  ],
  "tags": [
    "logo",
    "logo reveal",
    "op art",
    "checkerboard",
    "checker",
    "sphere",
    "bulge",
    "optical illusion",
    "vasarely",
    "grid",
    "geometric",
    "opener",
    "brand"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 132,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 130,
      "out": 0
    },
    "markers": {
      "settled": 130,
      "swell": 10,
      "apex": 62,
      "logo": 64
    },
    "beats": [
      0,
      10,
      62,
      72,
      92,
      130
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
      "lines": 1,
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
      "target": "checker sphere",
      "prop": "radius",
      "from": "flat grid",
      "settledBy": 120,
      "easing": "spring"
    },
    {
      "target": "medallion",
      "prop": "scale",
      "from": "0",
      "settledBy": 96,
      "easing": "spring"
    },
    {
      "target": "logo",
      "prop": "scale",
      "from": "0.7",
      "settledBy": 100,
      "easing": "spring"
    },
    {
      "target": "caption",
      "prop": "y",
      "from": "below",
      "settledBy": 112,
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
    "sourceUrl": "21st first-party (a flat checkerboard swells into a shaded op-art sphere around the logo, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "caption": "Introducing",
    "primary": "#F43F5E",
    "secondary": "#FBBF24",
    "color": "#F8FAFC",
    "background": "#0F172A",
    "cells": 16,
    "bulge": 1,
    "contrast": 0.9,
    "grain": true,
    "fontFamily": "Space Grotesk"
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
      "key": "cells",
      "label": "Cells",
      "type": "number",
      "step": 1,
      "min": 8,
      "max": 18
    },
    {
      "key": "bulge",
      "label": "Bulge",
      "type": "number",
      "min": 0.8,
      "max": 1.15
    },
    {
      "key": "contrast",
      "label": "Contrast",
      "type": "number",
      "min": 0.2,
      "max": 1
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.body"
    }
  ],
  "name": "Checkerboard Bulge Logo",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "vasarely-bulge-grid",
    "bundleSha256": "b4f070fe3a8909edff2bf14d27bf81e7c8b8e53911ffc8c3edb0d7ee3fca5480",
    "sourceSnapshot": {
      "sha256": "3912a1c1847b30436039691f198cd5d8e660dd1089f4139805bc21ce78e20cf0",
      "files": 1860
    },
    "renderedAt": "2026-10-09T13:21:36.341Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/16x9-paper.png",
        "sha256": "4a6a9fd34fa0109cc4d113fcc4dac031f53c1532ed7ea659ae6036facb947715"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/16x9-night.png",
        "sha256": "c4656cc85b3f910ecf53bc0570935253107d3991ea8bc09e774e9e76fd513caf"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/16x9-color.png",
        "sha256": "8eed81af95655a3eda25c84e119958449368cf3e4ab64035768a859bd4a87dd8"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/9x16-paper.png",
        "sha256": "c1575b884b8a4d8de1e6550839dca3427a293427c5139f62cb798d9f69ca2c9a"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/9x16-night.png",
        "sha256": "8817a750837abbfa48dd0c994e945b19c110e32d9b8832b3bbe382157be12180"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/9x16-color.png",
        "sha256": "7ea5f76e272facf28df776e670dbb66417683bb876bb3f785636decf6a5146e7"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/1x1-paper.png",
        "sha256": "b7bb6e974602c11aa5d64fd180da7588570c7b111f1236e7674b3f1aa4fb8712"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/1x1-night.png",
        "sha256": "9b03dd9792fcbe5a671275f74256177a7293a02dd5862ca74fee1eb15dd198c0"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/1x1-color.png",
        "sha256": "a17dc4386d38711da5b1c0e9c782c372357ee208eb17ef719e61785865a19a8e"
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
          "vasarely-bulge-grid--16x9",
          "vasarely-bulge-grid--9x16",
          "vasarely-bulge-grid--1x1"
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
            "paperNight": 67.56456163194444,
            "paperColor": 17.81491427951389,
            "region": {
              "left": 41,
              "top": 0,
              "width": 1829,
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
            "paperNight": 59.36444769965278,
            "paperColor": 15.506727430555555,
            "region": {
              "left": 0,
              "top": 44,
              "width": 1080,
              "height": 1828
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 51.889567057291664,
            "paperColor": 14.275689019097221,
            "region": {
              "left": 13,
              "top": 0,
              "width": 1045,
              "height": 1080
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
            "occupancy": 1.3500625944822375,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3500625944822375,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3500625944822375,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3493244520030236,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3493244520030236,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3493244520030236,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3713046947173935,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3713046947173935,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3713046947173935,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 32.574544270833336,
        "frames": [
          19,
          130,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 132,
            "averageChannelDifference": 33.032877604166664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/16x9-duration-132-frame-15.png",
                "sha256": "b4449309dde4b7222a13819640a6b981110ef676ccf94f9ef2091130337f89fb",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/16x9-duration-132-frame-130.png",
                "sha256": "82224ca3c62528c380533329db681369e0a46a9e8c6664693562803ec4b64335",
                "alphaMass": 587520
              },
              {
                "frame": 116,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/16x9-duration-132-frame-116.png",
                "sha256": "6011bbb316be5c3530a8168acf755fbe5dde395663918696d30edaaf2dd3b049",
                "alphaMass": 587520
              },
              {
                "frame": 131,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/16x9-duration-132-frame-131.png",
                "sha256": "628e1776614706ec0eff11ab118702f1cdbcef4cb982b2fa213899c3e36bc479",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 32.574544270833336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/16x9-duration-600-frame-19.png",
                "sha256": "ea38133d3f0cf21b5592b3cd94eb7fb22653218ff5231129a3053cd90b9358d6",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/16x9-duration-600-frame-130.png",
                "sha256": "82224ca3c62528c380533329db681369e0a46a9e8c6664693562803ec4b64335",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/16x9-duration-600-frame-528.png",
                "sha256": "04f4ef0809c7fbf7f69364e97e681bc9f1df47d23312c913cdc19f97cd4ed2c7",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/16x9-duration-600-frame-599.png",
                "sha256": "338f88d6e5d488f92c361cd462d193e4b82df39e8de5735676f1490a26ad5b42",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 132,
            "averageChannelDifference": 32.51161024305556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/9x16-duration-132-frame-15.png",
                "sha256": "08be17f6e07ad9829cb966aefa88f722be61e27e63bf3f02001a68388f2a7083",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/9x16-duration-132-frame-130.png",
                "sha256": "2d265fcf1d3d9026aa28455a42fb32601693b1651cbdfa448af36ecbbc5a04c2",
                "alphaMass": 587520
              },
              {
                "frame": 116,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/9x16-duration-132-frame-116.png",
                "sha256": "f9742642057eea40b441a60eb4391526a9be41bd1d207d44cb961e84006fb488",
                "alphaMass": 587520
              },
              {
                "frame": 131,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/9x16-duration-132-frame-131.png",
                "sha256": "8d6fa49ae60f7d2304d5ddc9b5d46c1d0330ad2b7715f15bca41d056f98909d1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 31.972330729166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/9x16-duration-600-frame-19.png",
                "sha256": "82afba009a6f6a951de97273eb4fae50eef619b2e584acf215756a10006063d9",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/9x16-duration-600-frame-130.png",
                "sha256": "2d265fcf1d3d9026aa28455a42fb32601693b1651cbdfa448af36ecbbc5a04c2",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/9x16-duration-600-frame-528.png",
                "sha256": "1b57cac97c99e4c46155f60957368c77c315faddeecbda6c285018740410a9ba",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/9x16-duration-600-frame-599.png",
                "sha256": "368e4cd132204f24630f6bfb97cd0ac688077195afe880f9cc884522e2a64130",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 132,
            "averageChannelDifference": 35.19053819444444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/1x1-duration-132-frame-15.png",
                "sha256": "88760c0f2ee7a19a9273cd7436e25e502a6c78d13a48f8a0e5129e22c16e755c",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/1x1-duration-132-frame-130.png",
                "sha256": "bd2a392fab69f3f2284f10452b63fc52eabc844bdaaae19ddcf5d99ff4e7c410",
                "alphaMass": 587520
              },
              {
                "frame": 116,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/1x1-duration-132-frame-116.png",
                "sha256": "5cf0d93882ac8e7fb79a0cbe30ef342ac3eba5eac9d87d6b5f10fd33aeb3b165",
                "alphaMass": 587520
              },
              {
                "frame": 131,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/1x1-duration-132-frame-131.png",
                "sha256": "259102b64ea301bd2b37eb83c92068da8908dc079af9f0e6bade8b2f07cff867",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 34.75542534722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/1x1-duration-600-frame-19.png",
                "sha256": "4c797a02a15caf974a989b2ea4399173eabe64ffde5d410106bec1fa5166c440",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/1x1-duration-600-frame-130.png",
                "sha256": "6a8bb78a73f2b930b53369f8a19f90a90258ae9051f16618ffbb340436eeb0a3",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/1x1-duration-600-frame-528.png",
                "sha256": "e44914266871d24de23857687c35f2599351dc24cda8ee2eaf17c504639fa869",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-151704/vasarely-bulge-grid/1x1-duration-600-frame-599.png",
                "sha256": "a41ffbf0bf5bbcfff883baa525f87ea8e90f6e848fbde993e89b6285a481d139",
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
        "note": "titleMatches: The visible subject in all stages is a checkerboard pattern bulging into a sphere with a central logo. The motion samples (images 2–4) chronologically show the checkerboard grid warping and the sphere assembling, specifically supporting the 'Checkerboard Bulge Logo' title by depicting the described graphic transformation. \nnoBakedHeading: There are no decorative, unexplained or extraneous block labels, only the legitimate 'Introducing' heading matching named-slot content, formatted in a way consistent with UI or standard captions rather than a baked-in decorative banner. \nbrandAdherence: The last three images show the same poster successfully re-skinned for all three supplied palettes. In each case, the primary/secondary colors swap out on the checkerboard and background; the text and logo remain visible and legible, and color roles align with the palettes, with no unexplained fixed block colors retained. \nlanguageAdherence: Across all variants, the material (oversized type, cut masks, compressed graphic shapes) and the consistent display of type in captions fit the language card's requirements. The type and visual roles stay consistent, and the poster avoids any forbidden effects (e.g., no browser chrome, no frosted glass). The logo, background, and accent roles shift appropriately within the palette context, adhering to the descriptive language card, and the included motion samples match the required verbs and motion restrictions."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 25,
        "compared": 25,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "b4f070fe3a8909edff2bf14d27bf81e7c8b8e53911ffc8c3edb0d7ee3fca5480",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T13:22:28.498Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/vasarely-bulge-grid/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/vasarely-bulge-grid/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/vasarely-bulge-grid/16x9/detail.mp4",
      "bg": "#0f172a",
      "posterFrame": 130,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9f99b4e8b77db510042dbd38d82869bc8b02a11fc8237cb388f84422dc91c7c5",
        "loop": "4801df5ffa0df1756231f3e58aa2f876b5f444818a4e11e8ab640944e78067e1",
        "detail": "00d2856fc5bf4c54616d979132447d764407d31b4bde0da588e033cb91d422a4"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/vasarely-bulge-grid/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/vasarely-bulge-grid/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/vasarely-bulge-grid/9x16/detail.mp4",
      "bg": "#0f172a",
      "posterFrame": 130,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8f5c06e29fdbdb88588002e124d3f948f89ba328a0e96c40cf1e4594c68a23de",
        "loop": "3833839e1d08fb98ebec3f0ac481641c8d9ce7a9977eaee4ea1043d91ba98af2",
        "detail": "38abc6bdc7e7f9e91528cbc654f5ae394d0efe63a672eb9041ba09608cc4d98d"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/vasarely-bulge-grid/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/vasarely-bulge-grid/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/vasarely-bulge-grid/1x1/detail.mp4",
      "bg": "#0f172a",
      "posterFrame": 130,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9a5dbe6d459ccc5ae7f91cd6cca17acc74ed5df5c8228ec66c0f0a2b6a1595d6",
        "loop": "6a4872e8a418c10ca330cfc7909067f611139fe7662f165d73aa12ef8ce3bac8",
        "detail": "aaabb3dec702c4e5917dd32c21400d3fa55d7d86f17d04864240e8e80a56076e"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/b4f070fe3a8909edff2bf14d27bf81e7c8b8e53911ffc8c3edb0d7ee3fca5480/index.mjs",
    "sha256": "b4f070fe3a8909edff2bf14d27bf81e7c8b8e53911ffc8c3edb0d7ee3fca5480",
    "bytes": 167704,
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
    "at": "2026-10-09T13:36:02.853Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
