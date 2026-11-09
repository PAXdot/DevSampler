// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "testimonial/post",
  "tags": [
    "testimonial",
    "social proof",
    "post",
    "tweet",
    "review",
    "likes",
    "customer quote"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 75,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 108,
      "out": 0
    },
    "markers": {
      "settled": 108,
      "liked": 80
    },
    "beats": [
      0,
      14,
      64,
      80
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
      "key": "name",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "name"
    },
    {
      "key": "handle",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "time",
      "type": "text",
      "maxChars": 10,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "post",
      "type": "text",
      "maxChars": 220,
      "lines": 6,
      "role": "quote"
    },
    {
      "key": "avatar",
      "type": "image",
      "role": "avatar"
    },
    {
      "key": "replies",
      "type": "number",
      "role": "value"
    },
    {
      "key": "reposts",
      "type": "number",
      "role": "value"
    },
    {
      "key": "likes",
      "type": "number",
      "role": "value"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "surfaceColor": "colors.background",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "bodyFontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "card",
      "prop": "y",
      "from": "below",
      "settledBy": 14,
      "easing": "spring"
    },
    {
      "target": "post",
      "prop": "words",
      "settledBy": 62,
      "easing": "linear"
    },
    {
      "target": "post",
      "prop": "highlight",
      "settledBy": 76,
      "easing": "ease"
    },
    {
      "target": "likes",
      "prop": "value",
      "from": "0",
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (social post testimonial, 2026-10-06)"
  },
  "job": "testimonials",
  "language": "product-ui",
  "mechanic": [
    "type"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "name": "Mara Lind",
    "handle": "@maralind",
    "time": "2h",
    "post": "Rebuilt our launch video in one afternoon with Acme. *Every scene matches our brand*, and nobody had to open a motion tool.",
    "avatar": "",
    "verified": true,
    "replies": 48,
    "reposts": 312,
    "likes": 2481,
    "color": "#0A0A0B",
    "accent": "#3D63FF",
    "surfaceColor": "#FFFFFF",
    "background": "#F1F2F6",
    "fontFamily": "Geist",
    "bodyFontFamily": "Inter"
  },
  "fields": [
    {
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 32,
      "role": "name"
    },
    {
      "key": "handle",
      "label": "Handle",
      "type": "text",
      "max": 24,
      "role": "label"
    },
    {
      "key": "time",
      "label": "Time",
      "type": "text",
      "max": 10,
      "role": "label"
    },
    {
      "key": "post",
      "label": "Post",
      "type": "text",
      "max": 220,
      "role": "quote"
    },
    {
      "key": "avatar",
      "label": "Avatar",
      "type": "asset",
      "role": "avatar"
    },
    {
      "key": "verified",
      "label": "Verified",
      "type": "boolean"
    },
    {
      "key": "replies",
      "label": "Replies",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 99999999,
      "role": "value"
    },
    {
      "key": "reposts",
      "label": "Reposts",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 99999999,
      "role": "value"
    },
    {
      "key": "likes",
      "label": "Likes",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 99999999,
      "role": "value"
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
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
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
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    }
  ],
  "name": "Social Post Testimonial",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "post-card",
    "bundleSha256": "269ae18bb1ada6c626b959d652128b8c96b417c70bfce8d0fd47e5408982e8bd",
    "sourceSnapshot": {
      "sha256": "2379ee5a77797fb19cffb07472566e8315f232c10108be14372e850fc8acfb4e",
      "files": 1489
    },
    "renderedAt": "2026-10-07T04:52:20.955Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/16x9-paper.png",
        "sha256": "3130e2643a365874cbd495f2528a15b97d3826490a84a31d3ed0744b730cc00b"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/16x9-night.png",
        "sha256": "cc5b0572c83a32820c7762da1a3f0f0ce2ac4235f6a610c410e728e6bb774e7d"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/16x9-color.png",
        "sha256": "d20cf1480ecf732874675869437004514927e6e5a86bc3cbdc1e0aba4f01fdc0"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/9x16-paper.png",
        "sha256": "4833b9b6f413621512a6f1410e00a64f016fd60a9022e90acc1a7c42e4e1063c"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/9x16-night.png",
        "sha256": "12610ecb15568800f8434f8e8beb2fce638c682ddfbb89cbaba37eed450d32f2"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/9x16-color.png",
        "sha256": "2cb375d94d2b1d9bfd013bfb14da0b9521f5a3f360a298527edbc4ea922f21e7"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/1x1-paper.png",
        "sha256": "3c2aa8a5f29c601e83063fd364a7992808ae898caf292834a1cfda0fa3ed75b2"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/1x1-night.png",
        "sha256": "4603499ae0eaebef2423e324918d60b9bce26119932bad37ade976ce5ec2b03c"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/1x1-color.png",
        "sha256": "eabb5d5cb0375c11ef0f8cf05013e9c483a41a0d185ebbbecda161c8fac19002"
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
          "post-card--16x9",
          "post-card--9x16",
          "post-card--1x1"
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
            "paperNight": 113.663330078125,
            "paperColor": 19.34296332465278,
            "region": {
              "left": 432,
              "top": 167,
              "width": 1056,
              "height": 802
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 116.06873914930556,
            "paperColor": 19.18842230902778,
            "region": {
              "left": 17,
              "top": 269,
              "width": 1046,
              "height": 1438
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 113.66216362847223,
            "paperColor": 18.842936197916668,
            "region": {
              "left": 49,
              "top": 126,
              "width": 982,
              "height": 884
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
            "occupancy": 0.5246279324486998,
            "bad": [],
            "measured": 29
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5788349290333419,
            "bad": [],
            "measured": 29
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5246279324486998,
            "bad": [],
            "measured": 29
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9541175009098292,
            "bad": [],
            "measured": 29
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0280329016894827,
            "bad": [],
            "measured": 29
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9541175009098292,
            "bad": [],
            "measured": 29
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9575949721452369,
            "bad": [],
            "measured": 29
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0547697588408937,
            "bad": [],
            "measured": 29
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9575949721452369,
            "bad": [],
            "measured": 29
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.8081597222222223,
        "frames": [
          16,
          108,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 75,
            "averageChannelDifference": 3.7699652777777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/16x9-duration-75-frame-9.png",
                "sha256": "7706471500afede6bf9a496aa9fe1c77e44c571c28b93ec6123973fc45a2b8e6",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/16x9-duration-75-frame-74.png",
                "sha256": "29aaafab637269d3fc2ae17770836677bf296ea811b4b747220a67c562861dbd",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/16x9-duration-75-frame-66.png",
                "sha256": "b61ef590fbeebadfa8b6302c8f8bddc83fb20f6ca315ba4d79e56940d38d0dc6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 3.8081597222222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/16x9-duration-600-frame-16.png",
                "sha256": "fd12a51c826d858750e1176e13d66e3620ab3bce9329dc933a61eb6bd0062a99",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/16x9-duration-600-frame-108.png",
                "sha256": "b61ef590fbeebadfa8b6302c8f8bddc83fb20f6ca315ba4d79e56940d38d0dc6",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/16x9-duration-600-frame-528.png",
                "sha256": "b6ae7a58d08aa6653a356c955d5fc3935f4a25432e3ab6f5e5b5e0038c30eba6",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/16x9-duration-600-frame-599.png",
                "sha256": "b04fa61b6f007ac238ae03030a297053ba00482d2d966f145927d46a9ea824f2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 75,
            "averageChannelDifference": 8.745008680555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/9x16-duration-75-frame-9.png",
                "sha256": "4f19fcad4d5cc602f0da1449e393894a4f803befa7e694abf04dc9904371ecac",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/9x16-duration-75-frame-74.png",
                "sha256": "c99714227107599e1d5f08e99317c5fca87ebdacbdd7ddb9d7696cb947e5d7bb",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/9x16-duration-75-frame-66.png",
                "sha256": "1926f555701d9377507c0c8b3260d5d062b0bb1243f31b951e50b7e6d93b422a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 8.831380208333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/9x16-duration-600-frame-16.png",
                "sha256": "07f05bce3e53cfbb5722de32d563b6b87fd3b8567e6b0de9948dc0de7e8ab8c0",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/9x16-duration-600-frame-108.png",
                "sha256": "1926f555701d9377507c0c8b3260d5d062b0bb1243f31b951e50b7e6d93b422a",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/9x16-duration-600-frame-528.png",
                "sha256": "136f06134d1c577b9759eaede55e1a1c2eaf24d3526420f508cb4cca3d6e5e72",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/9x16-duration-600-frame-599.png",
                "sha256": "ff3f297acab61a460403b79ad36db7bc3b32a2b239386d332dc04c9daf0ee656",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 75,
            "averageChannelDifference": 7.228190104166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/1x1-duration-75-frame-9.png",
                "sha256": "e6e4d94c777f61ed671fcb4cd86f0708e8af64ff1a9603d775465a7b7155127d",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/1x1-duration-75-frame-74.png",
                "sha256": "8911ef3e09ed6a5a8351e3e98945b4dc2b4b71e488321d19eaa12ed0d20bc2f0",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/1x1-duration-75-frame-66.png",
                "sha256": "080bb7545b755ca94491c0acd19c35b1344cc3b9890746ab89b58400830f315a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 7.298719618055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/1x1-duration-600-frame-16.png",
                "sha256": "8876e712c1828e902b71bec83fb1e9058c5bd8951d23c5db01a2706837f73ca8",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/1x1-duration-600-frame-108.png",
                "sha256": "080bb7545b755ca94491c0acd19c35b1344cc3b9890746ab89b58400830f315a",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/1x1-duration-600-frame-528.png",
                "sha256": "abcbe8a386f4553b1bc4635e750e0c44e9f49cbb1705744374fcc46fd8d8d5f3",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/post-card/1x1-duration-600-frame-599.png",
                "sha256": "d395b08cc5c43b6afeaa8c2b1c29ca59741eab4492d41a9cddd3ed86e8a842bd",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "testimonials",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A social post from a customer types in with a highlighted phrase and counting likes; testimonial."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 5,
        "compared": 5,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "269ae18bb1ada6c626b959d652128b8c96b417c70bfce8d0fd47e5408982e8bd",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T04:53:11.020549Z",
      "basis": "Second wave: fixed held blocks and new testimonial/CTA blocks; see docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/post-card/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/post-card/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/post-card/16x9/detail.mp4",
      "bg": "#e8e9ed",
      "posterFrame": 108,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "c35da14eb12f58e06deb4c86d7e30fe85fcdf00d851009720da8bc79977677cc",
        "loop": "952943c6f5535889f0c6f3083bb45b8836efad785ae9c47c4e1a58335777dec5",
        "detail": "e84a1029220cd0155d2e3e016a69002280433cd9cbb360398a32c1d12cbfc378"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/post-card/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/post-card/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/post-card/9x16/detail.mp4",
      "bg": "#e8e9ed",
      "posterFrame": 108,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "15ec899f443dffa2b8b60ccf61930f8aa960b6c77d075f4ee6a19b8146ea2a32",
        "loop": "f875ffb436fb0f6beae0ad0bf44b12a74c5ca73a5554b9087e8786df4a8e26ba",
        "detail": "2e78d46ad6a639d75a152c10864c1b033c2c530ec31fb93a03378abbd8d214e9"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/post-card/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/post-card/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/post-card/1x1/detail.mp4",
      "bg": "#e8e9ed",
      "posterFrame": 108,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "8be1e725e09fc52aeada7f8eaca9dff69097b0193be53d6fae83b3e9a94b8cee",
        "loop": "0420421e072104a587add5607ef9c1eaab5c474021f9eca9375543922f8010a8",
        "detail": "2e4fbf97617986aa562ae42332177debdeb6beb5da45c0b3060cb69fef3d79d5"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/269ae18bb1ada6c626b959d652128b8c96b417c70bfce8d0fd47e5408982e8bd/index.mjs",
    "sha256": "269ae18bb1ada6c626b959d652128b8c96b417c70bfce8d0fd47e5408982e8bd",
    "bytes": 168662,
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
    "at": "2026-10-07T04:56:18.137Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
