// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/product",
  "tags": [
    "launch",
    "product",
    "introducing",
    "environment",
    "settings",
    "cards",
    "perspective",
    "stack"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 113,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 102
    },
    "beats": [
      16,
      40,
      72
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
    "backdrop": []
  },
  "slots": [
    {
      "key": "headline",
      "type": "text",
      "maxChars": 64,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "image1",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "image2",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "image3",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "image4",
      "type": "image",
      "role": "screenshot"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "fontFamily": "fonts.heading",
    "surfaceColor": "colors.background",
    "textColor": "colors.text"
  },
  "motionBeats": [
    {
      "target": "content",
      "prop": "transform",
      "from": "translated",
      "settledBy": 102,
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
    "sourceUrl": "docs/research/launch-videos-2026-10-06/patterns.md"
  },
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "interact"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": true,
  "defaults": {
    "headline": "A workspace for every idea",
    "titles": [
      "Design space",
      "Build space",
      "Review space"
    ],
    "runtimes": [
      "Visual canvas",
      "Local preview",
      "Shared feedback"
    ],
    "details": [
      "Your references, together",
      "Your tools, ready",
      "Your team, in context"
    ],
    "image1": "",
    "image2": "",
    "image3": "",
    "image4": "",
    "tilt": 8,
    "stagger": 14,
    "theme": "dark",
    "accent": "#7C91FF",
    "fontFamily": "Geist",
    "surfaceColor": "#141417",
    "textColor": "#F4F4F5"
  },
  "fields": [
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 64,
      "role": "headline"
    },
    {
      "key": "titles",
      "label": "Titles",
      "type": "list",
      "max": 4
    },
    {
      "key": "runtimes",
      "label": "Runtimes",
      "type": "list",
      "max": 4
    },
    {
      "key": "details",
      "label": "Details",
      "type": "list",
      "max": 4
    },
    {
      "key": "image1",
      "label": "Image 1",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "image2",
      "label": "Image 2",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "image3",
      "label": "Image 3",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "image4",
      "label": "Image 4",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "tilt",
      "label": "Tilt",
      "type": "number",
      "min": 0,
      "max": 18
    },
    {
      "key": "stagger",
      "label": "Stagger",
      "type": "number",
      "step": 1,
      "min": 8,
      "max": 18
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
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
    }
  ],
  "name": "Environment Card Stack",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "environment-card-stack",
    "bundleSha256": "24a5b28108ee2a6a6f1eea7877cb2fdfc01bbe4af195bde26556eb601b9370b0",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:58:28.643Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/16x9-paper.png",
        "sha256": "613ac985862a6468bb9ecad664df5103d0f50c7f76e665367fa83911a3ebb8a2"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/16x9-night.png",
        "sha256": "01230d5b45448a07d1dead500678ebabc0134d8b9f8918cac26668df6499c911"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/16x9-color.png",
        "sha256": "eb17098adefbddb0a240838fe224a39848386cb9dac4f2c3d0c7def224bbe892"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/9x16-paper.png",
        "sha256": "d95b046686fdf67f49b44a1b2f14c32cc1399d01eadbadf399934894bef3b3fe"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/9x16-night.png",
        "sha256": "039601cb59732a4a23f2bea26580a810ce991acfc651083a42caa0bb1c0c18da"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/9x16-color.png",
        "sha256": "381c409aa511cfd4a6fe3ac0cec3df579b242e845ae17e85bcf802108a52546a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/1x1-paper.png",
        "sha256": "43ec16718a8a8eb642cfc2f6aad092f901ef6594dbded736d6534ed293fc7199"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/1x1-night.png",
        "sha256": "78b6a664dcb6bd051eab02fc1d56ed9b45c1a3e811a7fc1cacd4a4429f609d17"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/1x1-color.png",
        "sha256": "23160a18177a0f497b9a609df4d1e4007fb24ff11883730868e1107fc686d63f"
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
          "environment-card-stack--16x9",
          "environment-card-stack--9x16",
          "environment-card-stack--1x1"
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
            "paperNight": 105.31282552083333,
            "paperColor": 9.416314019097221,
            "region": {
              "left": 75,
              "top": 147,
              "width": 1770,
              "height": 833
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 123.79044596354167,
            "paperColor": 13.518310546875,
            "region": {
              "left": 0,
              "top": 168,
              "width": 1080,
              "height": 1714
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 70.56800672743056,
            "paperColor": 8.175130208333334,
            "region": {
              "left": 22,
              "top": 147,
              "width": 1036,
              "height": 697
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
            "occupancy": 0.9620019561322474,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0052885448160749,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.963745476006761,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2459845049130767,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2622236394557826,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2474607898715044,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8079154730021868,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8748598319071572,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8107538282802834,
            "bad": [],
            "measured": 10
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 25.51909722222222,
        "frames": [
          15,
          102,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 113,
            "averageChannelDifference": 23.10405815972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/16x9-duration-113-frame-13.png",
                "sha256": "cec74b73d4bc190ab9407c71737b270b53eaed2cf2d7709117171982a6ae2de6",
                "alphaMass": 107579
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/16x9-duration-113-frame-102.png",
                "sha256": "be8b9a404028938e0b5556699bb63f38f657b8b8632635c69c6864739da6b885",
                "alphaMass": 261531
              },
              {
                "frame": 99,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/16x9-duration-113-frame-99.png",
                "sha256": "ef497fa5f578e8d28ca145d6787313739cabf5c0656a7fcf44dbc63a92f1e8b7",
                "alphaMass": 261531
              },
              {
                "frame": 112,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/16x9-duration-113-frame-112.png",
                "sha256": "be8b9a404028938e0b5556699bb63f38f657b8b8632635c69c6864739da6b885",
                "alphaMass": 261531
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 25.51909722222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/16x9-duration-900-frame-15.png",
                "sha256": "0791d0162588559362595b6452503915e540f0b2df0edb39dd9d8c12c6652799",
                "alphaMass": 94183
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/16x9-duration-900-frame-102.png",
                "sha256": "be8b9a404028938e0b5556699bb63f38f657b8b8632635c69c6864739da6b885",
                "alphaMass": 261531
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/16x9-duration-900-frame-792.png",
                "sha256": "ef497fa5f578e8d28ca145d6787313739cabf5c0656a7fcf44dbc63a92f1e8b7",
                "alphaMass": 261531
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/16x9-duration-900-frame-899.png",
                "sha256": "be8b9a404028938e0b5556699bb63f38f657b8b8632635c69c6864739da6b885",
                "alphaMass": 261531
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 113,
            "averageChannelDifference": 41.738498263888886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/9x16-duration-113-frame-13.png",
                "sha256": "443a330be72cbab3a7e2e2b806b87b5b26620b4f75c9e246330b3c8b4b53442d",
                "alphaMass": 121746
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/9x16-duration-113-frame-102.png",
                "sha256": "b32070c3827db9ba80aac6ab1bc3cb93de3470138f666f248c6b0fec96494571",
                "alphaMass": 395949
              },
              {
                "frame": 99,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/9x16-duration-113-frame-99.png",
                "sha256": "b32070c3827db9ba80aac6ab1bc3cb93de3470138f666f248c6b0fec96494571",
                "alphaMass": 395949
              },
              {
                "frame": 112,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/9x16-duration-113-frame-112.png",
                "sha256": "b32070c3827db9ba80aac6ab1bc3cb93de3470138f666f248c6b0fec96494571",
                "alphaMass": 395949
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 44.85655381944444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/9x16-duration-900-frame-15.png",
                "sha256": "36c591e85738d8a90c0f298631fd46a9171e4672a5c9eef101c75ee26990db08",
                "alphaMass": 107533
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/9x16-duration-900-frame-102.png",
                "sha256": "b32070c3827db9ba80aac6ab1bc3cb93de3470138f666f248c6b0fec96494571",
                "alphaMass": 395949
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/9x16-duration-900-frame-792.png",
                "sha256": "b32070c3827db9ba80aac6ab1bc3cb93de3470138f666f248c6b0fec96494571",
                "alphaMass": 395949
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/9x16-duration-900-frame-899.png",
                "sha256": "b32070c3827db9ba80aac6ab1bc3cb93de3470138f666f248c6b0fec96494571",
                "alphaMass": 395949
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 113,
            "averageChannelDifference": 14.48361545138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/1x1-duration-113-frame-13.png",
                "sha256": "cf2c77d1fd2f3b092b9195a0c676a23c83212abfa5b4d5cf2ad0de503f71173b",
                "alphaMass": 65946
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/1x1-duration-113-frame-102.png",
                "sha256": "389ae22ce1d7a21ae08cdcc031cc9386392b8c52157c072a1bc0bc7520693e36",
                "alphaMass": 155730
              },
              {
                "frame": 99,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/1x1-duration-113-frame-99.png",
                "sha256": "389ae22ce1d7a21ae08cdcc031cc9386392b8c52157c072a1bc0bc7520693e36",
                "alphaMass": 155730
              },
              {
                "frame": 112,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/1x1-duration-113-frame-112.png",
                "sha256": "389ae22ce1d7a21ae08cdcc031cc9386392b8c52157c072a1bc0bc7520693e36",
                "alphaMass": 155730
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 16.016927083333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/1x1-duration-900-frame-15.png",
                "sha256": "0530fb063138924ec5d21b1b46fcbdf49c03d54483f6f0f86f10158961069259",
                "alphaMass": 58290
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/1x1-duration-900-frame-102.png",
                "sha256": "389ae22ce1d7a21ae08cdcc031cc9386392b8c52157c072a1bc0bc7520693e36",
                "alphaMass": 155730
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/1x1-duration-900-frame-792.png",
                "sha256": "389ae22ce1d7a21ae08cdcc031cc9386392b8c52157c072a1bc0bc7520693e36",
                "alphaMass": 155730
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/environment-card-stack/1x1-duration-900-frame-899.png",
                "sha256": "389ae22ce1d7a21ae08cdcc031cc9386392b8c52157c072a1bc0bc7520693e36",
                "alphaMass": 155730
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
        "note": "Three workspace cards stack in under a title; product spaces."
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
      "bundleSha256": "24a5b28108ee2a6a6f1eea7877cb2fdfc01bbe4af195bde26556eb601b9370b0",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.983332Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/environment-card-stack/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/environment-card-stack/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/environment-card-stack/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 102,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "f961223d074c50eb6a2eb34a44d1d015c7aa8bc952e2ae2e5654f6210d3994da",
        "loop": "65e109e633fd9ece852d47f5aa251d9fb2e2a0fa4ec619b5574c4d37a070b652",
        "detail": "c457513f948216826719ea83755857a0e86849dd30d67a2a6e3f1653f5aa772e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/environment-card-stack/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/environment-card-stack/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/environment-card-stack/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 102,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "9fa95f19d292e08627b164873b2fa9f7f7046a3405c5cf2a09b0bab0ab327536",
        "loop": "9f040429377bb6b4d47e7556ae03a5ad98a56a4b0e765d22ad3175661d7c50e4",
        "detail": "360e0f551cc485b0bee0889b7c4a982aaea11c588467c11bc443ab3d13cdbb9b"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/environment-card-stack/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/environment-card-stack/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/environment-card-stack/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 102,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "7b430177f3f95e6956cd9c8bc560910073c5665e4435439e912eaceca22bad52",
        "loop": "b321d6d9c9fc05368fb2f2e1ccaf7269439685bbe87176112a90265b1b1a20f3",
        "detail": "291fb20478087b0edfda0ace679cc3a47a5b13139d4730e20798e8dfb13da0c4"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/24a5b28108ee2a6a6f1eea7877cb2fdfc01bbe4af195bde26556eb601b9370b0/index.mjs",
    "sha256": "24a5b28108ee2a6a6f1eea7877cb2fdfc01bbe4af195bde26556eb601b9370b0",
    "bytes": 174273,
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
    "9:16": {
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
    }
  },
  "intake": {
    "at": "2026-10-07T02:27:40.686Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
