// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/commerce",
  "tags": [
    "product",
    "commerce",
    "price",
    "launch",
    "drop",
    "cart",
    "cursor",
    "ui"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 96,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 82,
      "out": 0
    },
    "markers": {
      "settled": 86,
      "click": 72
    },
    "beats": [
      0,
      18,
      34,
      72
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
      "key": "image",
      "type": "image",
      "role": "product"
    },
    {
      "key": "eyebrow",
      "type": "text",
      "maxChars": 28,
      "lines": 1,
      "role": "eyebrow"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 40,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "price",
      "type": "number",
      "role": "stat"
    },
    {
      "key": "chips",
      "type": "list",
      "role": "label"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 22,
      "lines": 1,
      "role": "cta"
    },
    {
      "key": "doneLabel",
      "type": "text",
      "maxChars": 22,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "surfaceColor": "colors.background",
    "textColor": "colors.text",
    "strikeColor": "colors.secondary",
    "discountColor": "colors.primary",
    "accent": "colors.primary",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "card",
      "prop": "y",
      "from": "below",
      "settledBy": 12,
      "easing": "ease"
    },
    {
      "target": "price",
      "prop": "digits",
      "from": "roll",
      "settledBy": 28,
      "easing": "ease"
    },
    {
      "target": "chips",
      "prop": "scale",
      "settledBy": 46,
      "easing": "spring"
    },
    {
      "target": "cursor",
      "prop": "xy",
      "from": "bottom-right",
      "settledBy": 70,
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/video-components-2026-10-05 (V02 product card, price roll, CTA click)"
  },
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "interact"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "image": "",
    "eyebrow": "Drop 02, limited run",
    "title": "Orbit desk lamp",
    "price": 129,
    "oldPrice": 169,
    "currency": "$",
    "chips": [
      "Sand",
      "Ink",
      "Moss",
      "Rust"
    ],
    "cta": "Add to cart",
    "doneLabel": "Added",
    "surfaceColor": "#FFFFFF",
    "textColor": "#0A0A0B",
    "theme": "light",
    "accent": "#3D63FF",
    "strikeColor": "#EF4444",
    "discountColor": "#16A34A",
    "background": "#ECEDF1",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "image",
      "label": "Image",
      "type": "asset",
      "role": "product"
    },
    {
      "key": "eyebrow",
      "label": "Eyebrow",
      "type": "text",
      "max": 28,
      "role": "eyebrow"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "price",
      "label": "Price",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 99999,
      "role": "stat"
    },
    {
      "key": "oldPrice",
      "label": "Old price",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 99999
    },
    {
      "key": "currency",
      "label": "Currency",
      "type": "text",
      "max": 3
    },
    {
      "key": "chips",
      "label": "Chips",
      "type": "list",
      "max": 5,
      "role": "label"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 22,
      "role": "cta"
    },
    {
      "key": "doneLabel",
      "label": "Done label",
      "type": "text",
      "max": 22,
      "role": "subline"
    },
    {
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "textColor",
      "label": "Text color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "theme",
      "label": "Theme",
      "type": "select",
      "options": [
        "light",
        "dark"
      ]
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "strikeColor",
      "label": "Strike color",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "discountColor",
      "label": "Discount color",
      "type": "color",
      "brand": "colors.primary"
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
  "name": "Product Card",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "product-card",
    "bundleSha256": "7a1e171c06c369c7503ae28bb73a801bd7627e92dcd17eba2c8fece598ddad2d",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:55:46.782Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/16x9-paper.png",
        "sha256": "f58d033d1d7bb7f8c67fcea52212e19bef9b724e9377b817870d82e422115442"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/16x9-night.png",
        "sha256": "2ec22ac9bf6b3828dc6eea7fb4c5de5653efbfe7efe4acb34f443c47c064bbff"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/16x9-color.png",
        "sha256": "48c84e9c8e45e4ebcb3a982d34ea0960555ae7e4a9bcdcdcbbece7ecdf8e70b3"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/1x1-paper.png",
        "sha256": "4940fd1c0e378d1dd5638e8a2d73cef58bb63f174d28a55fcbe97d0e44ec0d2a"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/1x1-night.png",
        "sha256": "535db96f35db0247e5ca24e66e5269ffd7bf6358246db702c16f45460ec22f08"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/1x1-color.png",
        "sha256": "072b9ebcff95fbbfff131185b32edd8ce0e61ed28201293e7da364e30fb41e31"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/9x16-paper.png",
        "sha256": "8ccadbb0195dd56cb2226ca79f77e2ef72463b2766feacd0fef63237eb600db5"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/9x16-night.png",
        "sha256": "76104334a903182c9d7c1cf3f90e91d3e42d2eb76170985420050ebf1c5a3fbf"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/9x16-color.png",
        "sha256": "0f4a467c11e4e6678d66d3f5aa2fdad3535b6622ee8b43d1af674537a9e5d5ae"
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
          "product-card--16x9",
          "product-card--1x1",
          "product-card--9x16"
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
            "paperNight": 106.35910373263889,
            "paperColor": 12.89968532986111,
            "region": {
              "left": 0,
              "top": 54,
              "width": 1717,
              "height": 943
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 96.67409939236111,
            "paperColor": 12.819281684027779,
            "region": {
              "left": 0,
              "top": 54,
              "width": 1062,
              "height": 854
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 123.85115559895833,
            "paperColor": 13.543809678819445,
            "region": {
              "left": 0,
              "top": 56,
              "width": 1073,
              "height": 1841
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
            "occupancy": 1.0651669361160103,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.106619787511198,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0651669361160103,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.049084542939261,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1019865765236139,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.049084542939261,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2967728082745447,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3501124874461103,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2967728082745447,
            "bad": [],
            "measured": 13
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 6.089735243055555,
        "frames": [
          12,
          86,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 96,
            "averageChannelDifference": 6.151692708333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/16x9-duration-96-frame-11.png",
                "sha256": "f8ddbc657b1fede375ce331b342b45d20089077e55b7c2060ba2bf23973d6c1c",
                "alphaMass": 587520
              },
              {
                "frame": 86,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/16x9-duration-96-frame-86.png",
                "sha256": "d9e392b305301f09b64acb376f9d001da163704360533b96dfaad85397f5a504",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/16x9-duration-96-frame-84.png",
                "sha256": "1a25417f778b11be29a19e532436e8ae1798a2dc1e01648ae190515ab5f1b0ba",
                "alphaMass": 587520
              },
              {
                "frame": 95,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/16x9-duration-96-frame-95.png",
                "sha256": "dc87b0029d64eae6b2edc60038f1734759327b44c122e2c37a3a3131581ba393",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 6.089735243055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/16x9-duration-900-frame-12.png",
                "sha256": "4245391a96d4409358db6c2f8526ba57a1a4cec8e8781d06aea032ce08e3f3ae",
                "alphaMass": 587520
              },
              {
                "frame": 86,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/16x9-duration-900-frame-86.png",
                "sha256": "d9e392b305301f09b64acb376f9d001da163704360533b96dfaad85397f5a504",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/16x9-duration-900-frame-792.png",
                "sha256": "de456bf0da8acdd282177288083fdf07351719f01ae58d17c109da262b1c6c25",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/16x9-duration-900-frame-899.png",
                "sha256": "de456bf0da8acdd282177288083fdf07351719f01ae58d17c109da262b1c6c25",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 96,
            "averageChannelDifference": 6.767578125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/1x1-duration-96-frame-11.png",
                "sha256": "c73624c6ea813245ed42a1b8a619c98183a23661d50adef359e224d0e5bf2238",
                "alphaMass": 587520
              },
              {
                "frame": 86,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/1x1-duration-96-frame-86.png",
                "sha256": "fb4c84371b31fe84df0752c5fe99e9562adfc825a3e981f4fe21d73b405055af",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/1x1-duration-96-frame-84.png",
                "sha256": "07b619aaf478453dfb75dd3468b6a5052ffe9c1319266421399bd80985b80944",
                "alphaMass": 587520
              },
              {
                "frame": 95,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/1x1-duration-96-frame-95.png",
                "sha256": "2f7b8b391d51ef0a07635676e8abced4bf9dfd179ae5d0025d3ce875bf5c5e12",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 6.691297743055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/1x1-duration-900-frame-12.png",
                "sha256": "344f194616538f7977c9f149b8ec8ffc41983887cfd93e9a5199615f12c1156a",
                "alphaMass": 587520
              },
              {
                "frame": 86,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/1x1-duration-900-frame-86.png",
                "sha256": "fb4c84371b31fe84df0752c5fe99e9562adfc825a3e981f4fe21d73b405055af",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/1x1-duration-900-frame-792.png",
                "sha256": "c1413135cedbf54f303e011c93d0f8cdc99df215bdddecb0fd354c250f3149e6",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/1x1-duration-900-frame-899.png",
                "sha256": "c1413135cedbf54f303e011c93d0f8cdc99df215bdddecb0fd354c250f3149e6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 96,
            "averageChannelDifference": 13.728190104166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/9x16-duration-96-frame-11.png",
                "sha256": "c9c185bf9a717ef54e9ce545de609149cde83d18ad605f10262f1cde4e6b2842",
                "alphaMass": 587520
              },
              {
                "frame": 86,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/9x16-duration-96-frame-86.png",
                "sha256": "34058e605281a6094171441017c5e7d6c3b7c1848f215a20103c68ed638ccc9d",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/9x16-duration-96-frame-84.png",
                "sha256": "168a29c07df142f537e4c3bcd6aefb3b3f1c852ff06eb9e40c612866ca078418",
                "alphaMass": 587520
              },
              {
                "frame": 95,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/9x16-duration-96-frame-95.png",
                "sha256": "6fdd8d092e2ea4529ec7834363e3860671bc63114fd3f24371434a741984a2b7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 13.645399305555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/9x16-duration-900-frame-12.png",
                "sha256": "1e2f7d4c7c2f76e74ebbaae11b1c9b40f1489ee5ac64f49daf8916928f4cc27c",
                "alphaMass": 587520
              },
              {
                "frame": 86,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/9x16-duration-900-frame-86.png",
                "sha256": "34058e605281a6094171441017c5e7d6c3b7c1848f215a20103c68ed638ccc9d",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/9x16-duration-900-frame-792.png",
                "sha256": "369b5f79f8db3557747d1262b7e47b5393bfa784278ba8da8657116159aea515",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/product-card/9x16-duration-900-frame-899.png",
                "sha256": "369b5f79f8db3557747d1262b7e47b5393bfa784278ba8da8657116159aea515",
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
        "note": "A product card fills in and Add to cart flips to Added; ecommerce UI."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 39,
        "compared": 39,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "7a1e171c06c369c7503ae28bb73a801bd7627e92dcd17eba2c8fece598ddad2d",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.002078Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/product-card/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/product-card/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/product-card/16x9/detail.mp4",
      "bg": "#ecedf1",
      "posterFrame": 86,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "21db13214985f6f305c60ad7119bdf99946ad0938f9290778eb54a52cc42c8be",
        "loop": "d9cc37b465f1218b5938bb0545a932743989c3e379236fa413ab82a0e9441da7",
        "detail": "750d55540129d2293a5616f674b19725ac6e39fb792cea309280985061e12a36"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/product-card/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/product-card/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/product-card/1x1/detail.mp4",
      "bg": "#ecedf1",
      "posterFrame": 86,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "bbab1af48607dd687a8eb6243d4a1168236d2b89054b4e9df266425a1e6f5f74",
        "loop": "b11a23b9d63f62130b763352e40b67a34835e1bd516989c0c138a7c92a6c74d0",
        "detail": "057c33f76c265a863c0f0d4fd794d63123f0be9b702ce04f3ad22c25b4935600"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/product-card/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/product-card/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/product-card/9x16/detail.mp4",
      "bg": "#ecedf1",
      "posterFrame": 86,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "292aec6999dec38599bf161b179d8c808543aca9dcb941181eb90275641d2d89",
        "loop": "80f2646643c8a56b5854b2b956fca831e0bfc38eed752a437de0bfccd63065d1",
        "detail": "ec52f33c3580575500e730b5bfe75a969f26623ae844df8fab7b84689a8eb2cf"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/7a1e171c06c369c7503ae28bb73a801bd7627e92dcd17eba2c8fece598ddad2d/index.mjs",
    "sha256": "7a1e171c06c369c7503ae28bb73a801bd7627e92dcd17eba2c8fece598ddad2d",
    "bytes": 176093,
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
    "at": "2026-10-07T02:30:27.948Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
