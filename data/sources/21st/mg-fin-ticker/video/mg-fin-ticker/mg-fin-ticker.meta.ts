// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/motion-gallery",
  "job": "data",
  "language": "pixel-terminal",
  "mechanic": [
    "candles-draw-then-order-fills"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "data",
    "candles-draw-then-order-fills",
    "fintech",
    "stocks",
    "trading",
    "chart"
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
      "in": 99,
      "out": 0
    },
    "markers": {
      "settled": 99
    },
    "beats": [
      0,
      25,
      50,
      74,
      99
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
      "key": "symbol",
      "type": "text",
      "maxChars": 6,
      "role": "label"
    },
    {
      "key": "price",
      "type": "text",
      "maxChars": 9,
      "role": "value"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 40,
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
      "target": "candles-draw-then-order-fills",
      "prop": "transform",
      "from": "enter",
      "settledBy": 99,
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
    "ink": "#E6F4EC",
    "accent": "#3CE58A",
    "secondary": "#FF5D6C",
    "paper": "#08120D",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "symbol": "NORA",
    "price": "$182.40",
    "headline": "Invest from $1.",
    "sub": "fractional shares · zero commission"
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
      "key": "symbol",
      "label": "Symbol",
      "type": "text",
      "max": 6,
      "role": "label"
    },
    {
      "key": "price",
      "label": "Price",
      "type": "text",
      "max": 9,
      "role": "value"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 40,
      "role": "caption"
    }
  ],
  "name": "Candlestick Buy Ticket",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fin-ticker",
    "bundleSha256": "86addc1459150ae1a5b5ac4a5d20d0f36cf62f4baff4169ef4e91e026d8375b9",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:17:51.933Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/16x9-paper.png",
        "sha256": "78c4ce8f215e26b240df4565196b67ed7bb81a85e43d9f8f2a173d2d9a25942b"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/16x9-night.png",
        "sha256": "f5fefba2cd15fcd2394450a9d88050dd2b5a87ccff53d703bf3889d82d2dc9d4"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/16x9-color.png",
        "sha256": "f505a31333bf5f61230e6ed113e094f7de45a287d99f557f5b47266d8539e72e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/9x16-paper.png",
        "sha256": "afffd597580e5d69e070529a61d33be8847068810eba282e761eacd3d2913efc"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/9x16-night.png",
        "sha256": "ec009a71316c8f653e964fd68320398869781ee200c70158151fe5622d1b2545"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/9x16-color.png",
        "sha256": "03d4366a8582b88e1c4566c5c548247f635f9e1757ce052710e5d6e9887f78d0"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/1x1-paper.png",
        "sha256": "a2421899cb18da8ce2c720f33f86cc4d8ffe65c836ea8e23814a2d791773864e"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/1x1-night.png",
        "sha256": "8c6b53cf65ab8e69f12acf09898166c89205a6c0becaf7ce66f9268fb9c37554"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/1x1-color.png",
        "sha256": "4bac556006ddd53abad966519b56b3c5bff383007e739ceceb2e951069e7b188"
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
          "mg-fin-ticker--16x9",
          "mg-fin-ticker--9x16",
          "mg-fin-ticker--1x1"
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
            "paperNight": 37.032958984375,
            "paperColor": 14.628092447916666,
            "region": {
              "left": 0,
              "top": 59,
              "width": 1920,
              "height": 951
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 46.06928168402778,
            "paperColor": 16.985704210069443,
            "region": {
              "left": 0,
              "top": 87,
              "width": 1080,
              "height": 1795
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 41.037570529513886,
            "paperColor": 15.945990668402779,
            "region": {
              "left": 0,
              "top": 49,
              "width": 1080,
              "height": 999
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
            "occupancy": 1.2453283782648865,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.247952884857647,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.247952884857647,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3249657501889647,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3249657501889647,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3249657501889647,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.30831653649114,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3109410430839004,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3109410430839004,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.980251736111111,
        "frames": [
          14,
          99,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 3.9793836805555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/16x9-duration-90-frame-10.png",
                "sha256": "429cb749fd631704bbea6d9d88dae65bad5f6c04c7741e6b3dad6a944a95c6b0",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/16x9-duration-90-frame-89.png",
                "sha256": "30eafe6f6d8fd5c10cec08454226b635c2b600c7d1067dd2d67f2802a67abde3",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/16x9-duration-90-frame-79.png",
                "sha256": "2d0bad5cee67e48708a7743887f68c40343bc98a016b0baf9427c85498e88671",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 3.980251736111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/16x9-duration-900-frame-14.png",
                "sha256": "b0c1b9835c5c168c0114425f3454b4600607181d5c3b9ca0ca4d8e9a22fdb7c7",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/16x9-duration-900-frame-99.png",
                "sha256": "2d0bad5cee67e48708a7743887f68c40343bc98a016b0baf9427c85498e88671",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/16x9-duration-900-frame-792.png",
                "sha256": "2d0bad5cee67e48708a7743887f68c40343bc98a016b0baf9427c85498e88671",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/16x9-duration-900-frame-899.png",
                "sha256": "2d0bad5cee67e48708a7743887f68c40343bc98a016b0baf9427c85498e88671",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 4.022352430555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/9x16-duration-90-frame-10.png",
                "sha256": "d6fd6a0b869b2561465c14e9492b71fa96665fbdf1c0454e804ad8eb1b9a94d1",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/9x16-duration-90-frame-89.png",
                "sha256": "c2ee81401539d92c9ae9c3c50658ded6d2cc602c152ab57b0197eeff5be36b38",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/9x16-duration-90-frame-79.png",
                "sha256": "c2ee81401539d92c9ae9c3c50658ded6d2cc602c152ab57b0197eeff5be36b38",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 4.040147569444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/9x16-duration-900-frame-14.png",
                "sha256": "a92d607ff9dcd0053d4487ba8d4127e76e19e1238a396779dde7b9eeeb0f9092",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/9x16-duration-900-frame-99.png",
                "sha256": "c2ee81401539d92c9ae9c3c50658ded6d2cc602c152ab57b0197eeff5be36b38",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/9x16-duration-900-frame-792.png",
                "sha256": "c0226a871161947779fa1ea5d574a881000ae5878cc1ba3c0c8b492bad02c1c2",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/9x16-duration-900-frame-899.png",
                "sha256": "c2ee81401539d92c9ae9c3c50658ded6d2cc602c152ab57b0197eeff5be36b38",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 3.6956380208333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/1x1-duration-90-frame-10.png",
                "sha256": "4f5d078653baeb6e7ca366e7a9937fa96b5e350b13eb955d96e57146916925e4",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/1x1-duration-90-frame-89.png",
                "sha256": "512b145655320a175f0c83baf9dd5c0b065f0f5b4b0a86b564d90678240b7048",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/1x1-duration-90-frame-79.png",
                "sha256": "654214ce9d019f01a010af8db147421e627f984d7f464afc4501f65e9a8bd2f5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 3.6978081597222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/1x1-duration-900-frame-14.png",
                "sha256": "e81cd2f0bd28b76126856eeea2d055aff345bfdec857e1b44131edf5de3c9c00",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/1x1-duration-900-frame-99.png",
                "sha256": "512b145655320a175f0c83baf9dd5c0b065f0f5b4b0a86b564d90678240b7048",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/1x1-duration-900-frame-792.png",
                "sha256": "654214ce9d019f01a010af8db147421e627f984d7f464afc4501f65e9a8bd2f5",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-ticker/1x1-duration-900-frame-899.png",
                "sha256": "654214ce9d019f01a010af8db147421e627f984d7f464afc4501f65e9a8bd2f5",
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
        "note": "Candlestick chart climbs and a buy ticket fills beside the headline; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 28,
        "compared": 28,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "86addc1459150ae1a5b5ac4a5d20d0f36cf62f4baff4169ef4e91e026d8375b9",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.076Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-ticker/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-ticker/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-ticker/16x9/detail.mp4",
      "bg": "#060f0b",
      "posterFrame": 99,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "fde029cbdb3400caa231b4f3a86699bf9107ab8afa13f165687268e11100febf",
        "loop": "dafa9abe5a0fedf70f312d5bac1de1942953c71a6916c5ee51c06c3dc3027471",
        "detail": "28850f02498787c27b3143e2c2c9398cf13229a2ba7df0983fd85e741b20126b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-ticker/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-ticker/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-ticker/9x16/detail.mp4",
      "bg": "#060f0b",
      "posterFrame": 99,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "42a9cabb1b190ffec30ccf860e621a5018f6ecd9a62d23a452f2f199bf8e533b",
        "loop": "cc3c1fcb5b81579eedfe7268db0a720efbcb3cb8a8ef5faabbf4d68f8a58456e",
        "detail": "f8538694aa987da3cb7d2c98814b64a6705d434c5c7b81320a64ae60cc753dd8"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-ticker/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-ticker/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-ticker/1x1/detail.mp4",
      "bg": "#060f0b",
      "posterFrame": 99,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "afdba3e17b2846981468fca17b13f38d73f7e2d9690152b7576bf5532263e183",
        "loop": "3f99d7690df6ea08198dfb39b1cc1a8c92ba4da0e70ea0e52f58a29db5a81192",
        "detail": "d113e6a2c82217d1d2be024ac6b48cd1cc952c6d5005de2ed28a133966547bef"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/86addc1459150ae1a5b5ac4a5d20d0f36cf62f4baff4169ef4e91e026d8375b9/index.mjs",
    "sha256": "86addc1459150ae1a5b5ac4a5d20d0f36cf62f4baff4169ef4e91e026d8375b9",
    "bytes": 291111,
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
    "at": "2026-10-09T07:06:30.490Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
