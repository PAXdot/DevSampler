// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "gallery/motion-gallery",
  "job": "gallery",
  "language": "editorial",
  "mechanic": [
    "swatch-circle-wipe-recolor"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "gallery",
    "swatch-circle-wipe-recolor",
    "product",
    "variants",
    "color"
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
      "in": 108,
      "out": 0
    },
    "markers": {
      "settled": 108
    },
    "beats": [
      0,
      27,
      54,
      81,
      108
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
      "maxChars": 16,
      "role": "headline"
    },
    {
      "key": "desc",
      "type": "text",
      "maxChars": 60,
      "role": "body"
    },
    {
      "key": "price",
      "type": "text",
      "maxChars": 7,
      "role": "value"
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
    "displayFont": "fonts.serif",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "swatch-circle-wipe-recolor",
      "prop": "transform",
      "from": "enter",
      "settledBy": 108,
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
    "ink": "#23301F",
    "accent": "#C9673F",
    "secondary": "#7E9A78",
    "paper": "#D6E1CD",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "name": "Field Flask",
    "desc": "Powder-coated steel that keeps it cold for 24 hours.",
    "price": "$42",
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
      "brand": "fonts.serif"
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
      "max": 16,
      "role": "headline"
    },
    {
      "key": "desc",
      "label": "Desc",
      "type": "text",
      "max": 60,
      "role": "body"
    },
    {
      "key": "price",
      "label": "Price",
      "type": "text",
      "max": 7,
      "role": "value"
    },
    {
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 12,
      "role": "label"
    }
  ],
  "name": "Colorway Circle Wipe",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-shop-colorways",
    "bundleSha256": "f2487467fd130fafc16bc2ff78f71734ea78fd33fba1d7351558165a33734a0b",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:07:53.504Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/16x9-paper.png",
        "sha256": "073d2d67186c3c59b6ad39c983963baa1ebfa88a5380e88f0bfb0feefc1ba68d"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/16x9-night.png",
        "sha256": "b29ff0b1fe83599e75b5a3e348b0b78eadf070067685efd4095b6c2b0057781d"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/16x9-color.png",
        "sha256": "97d64998e3cb981fd3b6defb2ed8d95c766ad96d3920294f8aab7662e401e2a7"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/9x16-paper.png",
        "sha256": "111ffc3c21203570c6a6f218cb9d5acecf90496da21cb9a1894196bb83bfe473"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/9x16-night.png",
        "sha256": "3e287bf1d8b83e0ed4b1ed661ebfbfd212dd3412bf822d8409891560af8e4906"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/9x16-color.png",
        "sha256": "a2341a2ea8aaaa44cf0f3064b6719e795255e28706d0916ab90b4ca24d57160d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/1x1-paper.png",
        "sha256": "f515b7a44e2f136d334927e4b8ca6cb4520ea5f69e7ee199127e91dc6d30851b"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/1x1-night.png",
        "sha256": "328d8af23f51b3c762680334fb69bd3e5112a81eb7fdeb26f27bf92d12a8fa12"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/1x1-color.png",
        "sha256": "fb7a104fe9f7c7e7448c6065ad6023d602d6abce4c67d7426590f877a9fd34a2"
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
          "mg-shop-colorways--16x9",
          "mg-shop-colorways--9x16",
          "mg-shop-colorways--1x1"
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
            "paperNight": 134.069091796875,
            "paperColor": 35.33599175347222,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1920,
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
            "paperNight": 131.845703125,
            "paperColor": 35.835720486111114,
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
            "paperNight": 133.95198567708334,
            "paperColor": 35.231282552083336,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
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
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
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
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 111.14431423611111,
        "frames": [
          16,
          108,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 111.13216145833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/16x9-duration-90-frame-10.png",
                "sha256": "30af154dbd664568d30f8f829b221bda33f0106f45fe607c53ce3bf6f911d4e5",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/16x9-duration-90-frame-89.png",
                "sha256": "2ad5855925f23b1bae06633773659ed3ae52e3360a8ff54386e64a4820a2e45f",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/16x9-duration-90-frame-79.png",
                "sha256": "2ad5855925f23b1bae06633773659ed3ae52e3360a8ff54386e64a4820a2e45f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 111.14431423611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/16x9-duration-900-frame-16.png",
                "sha256": "5e3142efc98afaaa3d8308cc9a593ab186cd5c1395cce1b5c3761b2b1a358d60",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/16x9-duration-900-frame-108.png",
                "sha256": "2ad5855925f23b1bae06633773659ed3ae52e3360a8ff54386e64a4820a2e45f",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/16x9-duration-900-frame-792.png",
                "sha256": "2ad5855925f23b1bae06633773659ed3ae52e3360a8ff54386e64a4820a2e45f",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/16x9-duration-900-frame-899.png",
                "sha256": "2ad5855925f23b1bae06633773659ed3ae52e3360a8ff54386e64a4820a2e45f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 110.12738715277777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/9x16-duration-90-frame-10.png",
                "sha256": "e1f63942c6af6388f6b50468c02da39d1250289e263d63097bb6b33a53d33253",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/9x16-duration-90-frame-89.png",
                "sha256": "d4013f9c9c9d05fe35b354a65b4686e4db3a6346815275666f6b6b0515a7d02e",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/9x16-duration-90-frame-79.png",
                "sha256": "36cf3a6d5915b8d2262759033575ba71e5457d29b9d1f6a14eaad37574a398ca",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 110.14952256944444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/9x16-duration-900-frame-16.png",
                "sha256": "9b28501a6e593dd478de1fde500c3ca58708bc95ad78d3729877c4a5187a7303",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/9x16-duration-900-frame-108.png",
                "sha256": "d4013f9c9c9d05fe35b354a65b4686e4db3a6346815275666f6b6b0515a7d02e",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/9x16-duration-900-frame-792.png",
                "sha256": "c36dd65fc8b99f404849de91d6aa42eadfcda341b094c727134b1e5c48969342",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/9x16-duration-900-frame-899.png",
                "sha256": "803fd17b3d875178b8aac319e9c7c2442d1e0d8e87b61e9cb861dd1f33b233f8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 110.49772135416667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/1x1-duration-90-frame-10.png",
                "sha256": "66c22809335ad418d1a1d951174ef01e35daab38427bd90aed2cbcff41194103",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/1x1-duration-90-frame-89.png",
                "sha256": "642abd56d2fe05d48cb8afe25d1a9ff1707097a497fe39c238697a4db4ac936a",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/1x1-duration-90-frame-79.png",
                "sha256": "642abd56d2fe05d48cb8afe25d1a9ff1707097a497fe39c238697a4db4ac936a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 110.50217013888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/1x1-duration-900-frame-16.png",
                "sha256": "44e11c65840e40e3bcbb3001c4c668b7cfc575f8245046c9407e7b05cb6c44fb",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/1x1-duration-900-frame-108.png",
                "sha256": "642abd56d2fe05d48cb8afe25d1a9ff1707097a497fe39c238697a4db4ac936a",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/1x1-duration-900-frame-792.png",
                "sha256": "642abd56d2fe05d48cb8afe25d1a9ff1707097a497fe39c238697a4db4ac936a",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-colorways/1x1-duration-900-frame-899.png",
                "sha256": "642abd56d2fe05d48cb8afe25d1a9ff1707097a497fe39c238697a4db4ac936a",
                "alphaMass": 587520
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
        "note": "Bottle colorway wipes beside a flowing product name, description, price and swatches; no overlaps."
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
      "bundleSha256": "f2487467fd130fafc16bc2ff78f71734ea78fd33fba1d7351558165a33734a0b",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.087Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-colorways/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-colorways/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-colorways/16x9/detail.mp4",
      "bg": "#1e291a",
      "posterFrame": 108,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a67c86c541c40f2a55b2e8e3399530afd6ee05a90b5d21bcdb430b39eb13f298",
        "loop": "0d542e8d2d707768cc0c6f9659d069c956fc5337bf180314532db219e2725e87",
        "detail": "d74ca8d9ae2f08d7fc8eb25da99e3f7a2fc49f8b79f3ac66727fb22eab5cfb69"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-colorways/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-colorways/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-colorways/9x16/detail.mp4",
      "bg": "#1e291a",
      "posterFrame": 108,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "697d4c228b6d4f12533eeba34df4b50a379b9ce444dc657849b455741f8dc568",
        "loop": "f73051ec1c55efa88e2253ca2a0ee18c20689735b3104ef1ce55e6b1605edd53",
        "detail": "cf849ca8ad32c53025a6f05125f447267b68635009082e044b3fadf6aa6aefd9"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-colorways/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-colorways/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-colorways/1x1/detail.mp4",
      "bg": "#1e291a",
      "posterFrame": 108,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c1aa20b13b08dfbff30ae24863c8bfb36ecea648022229fa0dc47d21540b5b02",
        "loop": "57531cae9a72bf29bc5f84805184b9592fbca2c53cfe727927bf09173bf4c063",
        "detail": "4c233e8e356e1869554e7c216f5d13908fe785b0f1ca7d73a039139d59288cb0"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/f2487467fd130fafc16bc2ff78f71734ea78fd33fba1d7351558165a33734a0b/index.mjs",
    "sha256": "f2487467fd130fafc16bc2ff78f71734ea78fd33fba1d7351558165a33734a0b",
    "bytes": 304192,
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
    "at": "2026-10-09T07:12:46.588Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
