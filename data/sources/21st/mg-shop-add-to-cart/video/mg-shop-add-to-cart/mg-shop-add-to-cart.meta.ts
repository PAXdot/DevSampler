// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "tap-swatch-fly-to-cart"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "tap-swatch-fly-to-cart",
    "checkout",
    "mobile",
    "cart"
  ],
  "engines": {
    "remotion": ">=4.0.533 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 90,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 90,
      "out": 0
    },
    "markers": {
      "settled": 90
    },
    "beats": [
      0,
      23,
      45,
      68,
      90
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
    "preset": "full",
    "backdrop": [
      "paintBackground"
    ]
  },
  "slots": [
    {
      "key": "name",
      "type": "text",
      "maxChars": 18,
      "role": "name"
    },
    {
      "key": "price",
      "type": "text",
      "maxChars": 7,
      "role": "value"
    },
    {
      "key": "added",
      "type": "text",
      "maxChars": 18,
      "role": "cta"
    },
    {
      "key": "brand",
      "type": "text",
      "maxChars": 12,
      "role": "label"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.display",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "tap-swatch-fly-to-cart",
      "prop": "transform",
      "from": "enter",
      "settledBy": 90,
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
    "sourceUrl": "docs/research/launch-videos-2026-10-06/README.md"
  },
  "defaults": {
    "ink": "#17130F",
    "accent": "#FF5B2E",
    "secondary": "#A7BFA1",
    "paper": "#FBF7F3",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "name": "Day Tote",
    "price": "$68",
    "added": "added to cart",
    "brand": "loma"
  },
  "fields": [
    {
      "key": "ink",
      "label": "Ink",
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
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "paper",
      "label": "Paper",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "displayFont",
      "label": "Display font",
      "type": "font",
      "brand": "fonts.display"
    },
    {
      "key": "bodyFont",
      "label": "Body font",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFont",
      "label": "Mono font",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "paintBackground",
      "label": "Paint background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 18,
      "role": "name"
    },
    {
      "key": "price",
      "label": "Price",
      "type": "text",
      "max": 7,
      "role": "value"
    },
    {
      "key": "added",
      "label": "Added",
      "type": "text",
      "max": 18,
      "role": "cta"
    },
    {
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 12,
      "role": "label"
    }
  ],
  "name": "Add To Cart Flow",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-shop-add-to-cart",
    "bundleSha256": "53820ac92ef594c8a94f04f17c8e6390e5aec01e369ce4914b828b3b2365574e",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:07:54.537Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/16x9-paper.png",
        "sha256": "cdd43bfe9facafa8babe3c3eda5f7b9139874ae457fa8e35f2c4d36eac3a0610"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/16x9-night.png",
        "sha256": "9ebde7a8d1bc7fee3dad1c9ee51e8ef9293c0618107e3bd2b15bf61cbef3d1f5"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/16x9-color.png",
        "sha256": "5f656424bc2d0603682747123ea3094ef831dc4b0da27694974724dfb83fe54e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/9x16-paper.png",
        "sha256": "8ed00b146c30d0f0749a09587de0c3dd3b4e48532328fc56ecb9730ad7d89a05"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/9x16-night.png",
        "sha256": "d19a877b12ad82f6c12fd631b457d54cde6d2d8d72ea6180fc966608d3f45fea"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/9x16-color.png",
        "sha256": "e0fe9d46a50e05e0875196a7d2b438e0e083a048b988f1615478888ea91fc537"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/1x1-paper.png",
        "sha256": "1ff2046bc5ce249c0e623aea09f06da52abb23bbd5c0f6f57c2fa4edac097d8c"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/1x1-night.png",
        "sha256": "73effb7de0d5aadeba5f12dd933b43e982043d328c3975d5138603249e88fd91"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/1x1-color.png",
        "sha256": "d29373b59381667d13e74d74bcc085ba4ae259a0cc81645d3dd36e6141fd3ba8"
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
          "mg-shop-add-to-cart--16x9",
          "mg-shop-add-to-cart--9x16",
          "mg-shop-add-to-cart--1x1"
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
            "paperNight": 40.73076714409722,
            "paperColor": 9.596598307291666,
            "region": {
              "left": 212,
              "top": 51,
              "width": 1491,
              "height": 1029
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 78.48697916666667,
            "paperColor": 13.567464192708334,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1920
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 51.977810329861114,
            "paperColor": 10.780707465277779,
            "region": {
              "left": 71,
              "top": 56,
              "width": 983,
              "height": 1024
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
            "occupancy": 1.047895769032922,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.047895769032922,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0485990547839508,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2230589538055736,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2230589538055736,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2230589538055736,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.774305555555555,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 4.775824652777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/16x9-duration-90-frame-10.png",
                "sha256": "6b78d0f30434cbe424b450ced76d54ccf9d286360f702e4bc0b97866b3540fd5",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/16x9-duration-90-frame-89.png",
                "sha256": "c7d808726e0883b2991af6fbea140f1254882baf56366cd76308f5b9e660b0cd",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/16x9-duration-90-frame-79.png",
                "sha256": "c7d808726e0883b2991af6fbea140f1254882baf56366cd76308f5b9e660b0cd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 4.774305555555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/16x9-duration-900-frame-13.png",
                "sha256": "8994c8c5d8bf15c08f6c80fa542e44305c0b1942dc8a9ee86a8c7f1976f407bd",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/16x9-duration-900-frame-90.png",
                "sha256": "c7d808726e0883b2991af6fbea140f1254882baf56366cd76308f5b9e660b0cd",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/16x9-duration-900-frame-792.png",
                "sha256": "c7d808726e0883b2991af6fbea140f1254882baf56366cd76308f5b9e660b0cd",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/16x9-duration-900-frame-899.png",
                "sha256": "c7d808726e0883b2991af6fbea140f1254882baf56366cd76308f5b9e660b0cd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 18.939453125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/9x16-duration-90-frame-10.png",
                "sha256": "99ff9dcce10f9d5a59100882a9ed1d7aa71000cf71c63ae64a1cfae1494e364b",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/9x16-duration-90-frame-89.png",
                "sha256": "7060a19597ea7b22ea971150ec9acf6dbf4f0afeb0df0590394f6c1dbbd396c8",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/9x16-duration-90-frame-79.png",
                "sha256": "7060a19597ea7b22ea971150ec9acf6dbf4f0afeb0df0590394f6c1dbbd396c8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 18.93630642361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/9x16-duration-900-frame-13.png",
                "sha256": "d0a75bd73bca0be675fef1527f66056a9e9334e53a9131801641652d20078282",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/9x16-duration-900-frame-90.png",
                "sha256": "7060a19597ea7b22ea971150ec9acf6dbf4f0afeb0df0590394f6c1dbbd396c8",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/9x16-duration-900-frame-792.png",
                "sha256": "7060a19597ea7b22ea971150ec9acf6dbf4f0afeb0df0590394f6c1dbbd396c8",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/9x16-duration-900-frame-899.png",
                "sha256": "7060a19597ea7b22ea971150ec9acf6dbf4f0afeb0df0590394f6c1dbbd396c8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 8.275390625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/1x1-duration-90-frame-10.png",
                "sha256": "30b083be8e90b214d1ba93342c807addc6cf7365a66d6e3e2f326522fc715228",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/1x1-duration-90-frame-89.png",
                "sha256": "ea441b7c6ed71b5731f3c18badd38450f23776cbbcbe08305d878a3c8134069e",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/1x1-duration-90-frame-79.png",
                "sha256": "ea441b7c6ed71b5731f3c18badd38450f23776cbbcbe08305d878a3c8134069e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 8.274305555555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/1x1-duration-900-frame-13.png",
                "sha256": "1cb7fc5ec21b99e6a9d78444da642597b8c5411c6495ad6d357d5d0692cf58c7",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/1x1-duration-900-frame-90.png",
                "sha256": "ea441b7c6ed71b5731f3c18badd38450f23776cbbcbe08305d878a3c8134069e",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/1x1-duration-900-frame-792.png",
                "sha256": "ea441b7c6ed71b5731f3c18badd38450f23776cbbcbe08305d878a3c8134069e",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-add-to-cart/1x1-duration-900-frame-899.png",
                "sha256": "ea441b7c6ed71b5731f3c18badd38450f23776cbbcbe08305d878a3c8134069e",
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
        "note": "Product page on a phone picks a colour and adds to cart beside name and price; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 76,
        "compared": 76,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "53820ac92ef594c8a94f04f17c8e6390e5aec01e369ce4914b828b3b2365574e",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.087Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-add-to-cart/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-add-to-cart/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-add-to-cart/16x9/detail.mp4",
      "bg": "#ede9e5",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c3566513d2d77171817ae60ad171d76fb1da202644fa806aa635c36542a0f516",
        "loop": "bedb8a5edf22fade940e3ef118dce278a1788ab4b7f5ff85da28e0c748cf5af8",
        "detail": "13e7e1283ae6dfc2f14c126b6120feb67479070b051ba942880ddb6aaaec473c"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-add-to-cart/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-add-to-cart/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-add-to-cart/9x16/detail.mp4",
      "bg": "#fbf7f3",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "fc5bc73edf69b23b9369c97caa4104ca5217ecc473c6a7d2fcc63fde35088757",
        "loop": "ae9124421cf65580090782c9f6b3f0b17bb2b3253faab7afdbd8aaf97a4a4f5d",
        "detail": "5f88e1135f2435e7a1828b32a25ece46c6a61bb6e5ce2b7b8e7fecf98777c739"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-add-to-cart/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-add-to-cart/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-add-to-cart/1x1/detail.mp4",
      "bg": "#ede9e5",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3301ba2bdfff75e69b4d1243cde2aef482306321d3702f3c1b36ca3ce1af675c",
        "loop": "e9928bb2ada78e50836d5e6bc0682ef44486c610c66ec935b14e67d1f9850d81",
        "detail": "ac78a49f9cfe087e614fad11306f5a95db4707603b750093f348650329718798"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/53820ac92ef594c8a94f04f17c8e6390e5aec01e369ce4914b828b3b2365574e/index.mjs",
    "sha256": "53820ac92ef594c8a94f04f17c8e6390e5aec01e369ce4914b828b3b2365574e",
    "bytes": 304196,
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
    "at": "2026-10-09T07:12:27.191Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
