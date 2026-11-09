// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "grid-zoom-to-listing"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "grid-zoom-to-listing",
    "marketplace",
    "listing",
    "bestseller"
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
      "key": "title",
      "type": "text",
      "maxChars": 48,
      "role": "name"
    },
    {
      "key": "price",
      "type": "text",
      "maxChars": 7,
      "role": "value"
    },
    {
      "key": "badge",
      "type": "text",
      "maxChars": 14,
      "role": "label"
    },
    {
      "key": "delivery",
      "type": "text",
      "maxChars": 24,
      "role": "caption"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.heading",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "grid-zoom-to-listing",
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
    "ink": "#14171A",
    "accent": "#FF5B2E",
    "secondary": "#FFA41C",
    "paper": "#E7ECE8",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "title": "Halo Wireless Over-Ear Headphones, Sand",
    "price": "$179",
    "badge": "best seller",
    "delivery": "Free delivery Thursday"
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
      "brand": "fonts.heading"
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
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 48,
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
      "key": "badge",
      "label": "Badge",
      "type": "text",
      "max": 14,
      "role": "label"
    },
    {
      "key": "delivery",
      "label": "Delivery",
      "type": "text",
      "max": 24,
      "role": "caption"
    }
  ],
  "name": "Marketplace Listing Zoom",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-shop-listing",
    "bundleSha256": "2565dd3589d3094ddce3c0cc56d3a7f9730303921cf1dee52feecdb8c4ead342",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:08:28.367Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/16x9-paper.png",
        "sha256": "ae3b90db801bf2f3889cc2ea346b4683f022582a89279f177242dcc3b31df868"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/16x9-night.png",
        "sha256": "0e7afb04a0c3f33c15b6071ce63fe6826fdd14a3f5ece241c96970951edf6715"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/16x9-color.png",
        "sha256": "f4f0a852979aecf8c9bd8105acf60988987ab1946ce821b093c0adfa2e31aeea"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/9x16-paper.png",
        "sha256": "aaa75488d96ab6507269f3f71c5e7323d3fb7dd54923594c44e79eae058c8213"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/9x16-night.png",
        "sha256": "7cf566c4238c49fb2efe138fa53cf27581eeff4e4329abc0cd256c8aae8c33e8"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/9x16-color.png",
        "sha256": "bc7384384272ca2ce9a8d84636ef7fa7ee36483e94739abc76d8acbcc70c77e9"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/1x1-paper.png",
        "sha256": "3223fbc22bc2a430e9e2dda50403accdcd25258d87e26ecfd0b7d22fc70e8d82"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/1x1-night.png",
        "sha256": "ab5bded8de0621f68e09d846076713cdfe213961c384a1a051b9ad1e314bea72"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/1x1-color.png",
        "sha256": "dd93ded380446dcdad9088fcd80d53f9ec6b3f7fedbdd065f6f7c26dab799fb6"
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
          "mg-shop-listing--16x9",
          "mg-shop-listing--9x16",
          "mg-shop-listing--1x1"
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
            "paperNight": 29.366536458333332,
            "paperColor": 5.276258680555555,
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
            "paperNight": 39.31157769097222,
            "paperColor": 7.870225694444445,
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
            "paperNight": 39.83827039930556,
            "paperColor": 7.902560763888889,
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
        "averageChannelDifference": 15.968315972222221,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 15.965277777777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/16x9-duration-90-frame-10.png",
                "sha256": "63feba30dc06489695f9ee10c2e98bc7b33ec7b1649835228925bd9f9fd65702",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/16x9-duration-90-frame-89.png",
                "sha256": "4928a1cae425ff9c27a71b73193ba4eee40be7e579a28723e70564bea4a9c4e6",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/16x9-duration-90-frame-79.png",
                "sha256": "4928a1cae425ff9c27a71b73193ba4eee40be7e579a28723e70564bea4a9c4e6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 15.968315972222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/16x9-duration-900-frame-13.png",
                "sha256": "8e0a6940bd26fb93fc4e7013bd7f5aaf2ad3e91ac476d010af956feba81a713b",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/16x9-duration-900-frame-90.png",
                "sha256": "4928a1cae425ff9c27a71b73193ba4eee40be7e579a28723e70564bea4a9c4e6",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/16x9-duration-900-frame-792.png",
                "sha256": "4928a1cae425ff9c27a71b73193ba4eee40be7e579a28723e70564bea4a9c4e6",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/16x9-duration-900-frame-899.png",
                "sha256": "4928a1cae425ff9c27a71b73193ba4eee40be7e579a28723e70564bea4a9c4e6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 25.747721354166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/9x16-duration-90-frame-10.png",
                "sha256": "5760a23bca1748000246b243ea5128ab40996968f58916bcef6e457a60652ffc",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/9x16-duration-90-frame-89.png",
                "sha256": "afef48868f8266f350e70720225a4c0b95724d9ccc43ae0bac7640fadf0c2252",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/9x16-duration-90-frame-79.png",
                "sha256": "afef48868f8266f350e70720225a4c0b95724d9ccc43ae0bac7640fadf0c2252",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 25.740885416666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/9x16-duration-900-frame-13.png",
                "sha256": "9b0dec166df50b27310f9bb89e0b6ba97aac341ede17c1711d6f0fcfe7a454bb",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/9x16-duration-900-frame-90.png",
                "sha256": "afef48868f8266f350e70720225a4c0b95724d9ccc43ae0bac7640fadf0c2252",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/9x16-duration-900-frame-792.png",
                "sha256": "afef48868f8266f350e70720225a4c0b95724d9ccc43ae0bac7640fadf0c2252",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/9x16-duration-900-frame-899.png",
                "sha256": "afef48868f8266f350e70720225a4c0b95724d9ccc43ae0bac7640fadf0c2252",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 21.40451388888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/1x1-duration-90-frame-10.png",
                "sha256": "76fc73adeb2dbb3a3e044956f2bf92f3a4a7f4801d36d50d81f23e8a116e9059",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/1x1-duration-90-frame-89.png",
                "sha256": "d9f17e3a7f777761178ed2e65bdd1464962cc6b76c0eb78fda5c6f3dc6599c8e",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/1x1-duration-90-frame-79.png",
                "sha256": "d9f17e3a7f777761178ed2e65bdd1464962cc6b76c0eb78fda5c6f3dc6599c8e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 21.410264756944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/1x1-duration-900-frame-13.png",
                "sha256": "502cdac228fec3f70c372702ae780603c33d1f6c87eb75a6fae4ba777f5b5a1b",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/1x1-duration-900-frame-90.png",
                "sha256": "d9f17e3a7f777761178ed2e65bdd1464962cc6b76c0eb78fda5c6f3dc6599c8e",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/1x1-duration-900-frame-792.png",
                "sha256": "d9f17e3a7f777761178ed2e65bdd1464962cc6b76c0eb78fda5c6f3dc6599c8e",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-shop-listing/1x1-duration-900-frame-899.png",
                "sha256": "d9f17e3a7f777761178ed2e65bdd1464962cc6b76c0eb78fda5c6f3dc6599c8e",
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
        "note": "Marketplace grid zooms into one listing card with rating, price and badges; rebrands recolor accents."
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
      "bundleSha256": "2565dd3589d3094ddce3c0cc56d3a7f9730303921cf1dee52feecdb8c4ead342",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.088Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-listing/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-listing/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-listing/16x9/detail.mp4",
      "bg": "#eef1ee",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "814a76f77c3d1cb036cbc9e1688673dab5919a8ea61b0ba606e0c531722436f7",
        "loop": "c52f0362b14ff0f5ea572d412a231cfcbff610c8ec041b53b2e3181c405f1940",
        "detail": "55f170c1bc955a17b0b160bc78d5b802fcc4d62df7a4894759b0bca39e84cd30"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-listing/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-listing/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-listing/9x16/detail.mp4",
      "bg": "#eef1ee",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "56b23178bfbd4172aa4fe7e67c108dcde88a5f11b4d013489e1e36c9077a7a4d",
        "loop": "af6124d7468ae8378a00e82cf8306ccf981c8adc677701709261b581bef9a400",
        "detail": "5a7dc44c876554fd751028ea5a6f46f0874d960148a460969804870dfd043ef2"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-listing/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-listing/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-listing/1x1/detail.mp4",
      "bg": "#eef1ee",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7f74f3b2c4ca2c7c6889be9262bffe9bbcfb40f564b9449fb91b05f267a2d375",
        "loop": "6d20ccebdf92ed40cf91d8238f2ff3984442847cb2db4c39cc1327eb7932c581",
        "detail": "c3a96afe4f51a95702ede655d8da0114942483d5da70429b623f0c03a66906eb"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/2565dd3589d3094ddce3c0cc56d3a7f9730303921cf1dee52feecdb8c4ead342/index.mjs",
    "sha256": "2565dd3589d3094ddce3c0cc56d3a7f9730303921cf1dee52feecdb8c4ead342",
    "bytes": 304188,
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
    "at": "2026-10-09T07:13:26.253Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
