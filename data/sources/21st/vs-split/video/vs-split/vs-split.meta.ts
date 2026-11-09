// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "data/comparison",
  "tags": [
    "comparison",
    "versus",
    "before after",
    "stats",
    "split"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 100,
      "min": 45,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 40,
      "out": 0
    },
    "markers": {
      "settled": 40
    },
    "beats": [
      0,
      4,
      8,
      12
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
      "x": 0.1,
      "y": 0.2,
      "w": 0.8,
      "h": 0.6
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "leftLabel",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "rightLabel",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "leftValue",
      "type": "number",
      "role": "value"
    },
    {
      "key": "rightValue",
      "type": "number",
      "role": "value"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "color": "colors.text",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "cards",
      "prop": "y",
      "from": "below",
      "settledBy": 18,
      "easing": "ease"
    },
    {
      "target": "divider",
      "prop": "scaleY",
      "from": "0",
      "settledBy": 18,
      "easing": "ease"
    },
    {
      "target": "values",
      "prop": "count",
      "from": "0",
      "settledBy": 36,
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
      100
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study V14, X1, twitter-remotion-research)"
  },
  "job": "data",
  "language": "product-ui",
  "mechanic": [
    "count"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "title": "Time to first render",
    "leftLabel": "Hand-built",
    "leftValue": 100,
    "rightLabel": "With 21st",
    "rightValue": 26,
    "prefix": "",
    "suffix": "min",
    "decimals": 0,
    "winner": "right",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "leftLabel",
      "label": "Left label",
      "type": "text",
      "max": 24,
      "role": "label"
    },
    {
      "key": "leftValue",
      "label": "Left value",
      "type": "number",
      "min": -1000000000000,
      "max": 1000000000000,
      "role": "value"
    },
    {
      "key": "rightLabel",
      "label": "Right label",
      "type": "text",
      "max": 24,
      "role": "label"
    },
    {
      "key": "rightValue",
      "label": "Right value",
      "type": "number",
      "min": -1000000000000,
      "max": 1000000000000,
      "role": "value"
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
      "max": 4
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
      "key": "winner",
      "label": "Winner",
      "type": "select",
      "options": [
        "left",
        "right",
        "none"
      ]
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "VS Split",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "vs-split",
    "bundleSha256": "c85204ded7bd4505146530a9c5c6a8b82aeef3ec6de7bbd8a0313dadce8924ff",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:51:42.153Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/16x9-paper.png",
        "sha256": "6b5f77370d0f2a16ec60f00653558d55bb700999a2a59d63123dc61b7500f2d7"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/16x9-night.png",
        "sha256": "d4e2d0cbd94fe777639a2cc6c63e340d24c576bad117f651a20dfd0f21a91a5e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/16x9-color.png",
        "sha256": "719de4f208c6c7ef043138e70d168338d6baa6e16e92d0cb664a783171d72bac"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/9x16-paper.png",
        "sha256": "7be341581367fb7d73193c4643822c95cc6186af14d6d1d3b41d3d75ca56260e"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/9x16-night.png",
        "sha256": "63be477ddb3e8826a31af28cf345a1aac7cbb988093d87384f1b8ccb0ff4cddb"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/9x16-color.png",
        "sha256": "0566a296a65376843babb04e28b49067ea96cb92bebb8bfa9e064ce351e70d8a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/1x1-paper.png",
        "sha256": "fe9a396afdf66009065ed9f8b55ddb4a91e57a9117e947688c9a2a3da2a335ca"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/1x1-night.png",
        "sha256": "c0539114778f7046e9c78dcb1323db10fca5382e7482437f1ef726750a2f3d7a"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/1x1-color.png",
        "sha256": "8e3ec8a92db23787d824c0b6b621cf92e1fbc1c5df7d6721677c4e827657a2ea"
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
          "vs-split--16x9",
          "vs-split--9x16",
          "vs-split--1x1"
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
            "paperNight": 106.95803493923611,
            "paperColor": 32.92157660590278,
            "region": {
              "left": 192,
              "top": 237,
              "width": 1610,
              "height": 700
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 103.77010091145833,
            "paperColor": 31.982584635416668,
            "region": {
              "left": 47,
              "top": 404,
              "width": 986,
              "height": 1194
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 103.72135416666667,
            "paperColor": 32.854736328125,
            "region": {
              "left": 108,
              "top": 232,
              "width": 908,
              "height": 448
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
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9776287058033091,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9732545281487082,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9798157946306095,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 48.305989583333336,
        "frames": [
          6,
          40,
          99
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 50.09950086805556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/16x9-duration-45-frame-5.png",
                "sha256": "0e998e9e0bc3408cf294d99faf9a04601c4c10c64c54460cbad2cc4ecc4ff51b",
                "alphaMass": 5301
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/16x9-duration-45-frame-40.png",
                "sha256": "0715d3f7d97a75ad4667d4e047010982cff090710203ae66f5df8b47c76df1cc",
                "alphaMass": 33548
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/16x9-duration-45-frame-39.png",
                "sha256": "a2ed1a774a607e4d79131b0ca35ee6302a7eaebbc4d012de312febe8f4b7261e",
                "alphaMass": 33548
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/16x9-duration-45-frame-44.png",
                "sha256": "3889c69584f74dcdd5f4a5ecec1e41eb81940028a890f766c7d6634358d81f27",
                "alphaMass": 33548
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 48.305989583333336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/16x9-duration-600-frame-6.png",
                "sha256": "9f220d1c1986527404fbb6ce2ba8c56caa1af5bf4387c59b03317c0d22e51bea",
                "alphaMass": 7575
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/16x9-duration-600-frame-40.png",
                "sha256": "a2ed1a774a607e4d79131b0ca35ee6302a7eaebbc4d012de312febe8f4b7261e",
                "alphaMass": 33548
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/16x9-duration-600-frame-528.png",
                "sha256": "0715d3f7d97a75ad4667d4e047010982cff090710203ae66f5df8b47c76df1cc",
                "alphaMass": 33548
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/16x9-duration-600-frame-599.png",
                "sha256": "a2ed1a774a607e4d79131b0ca35ee6302a7eaebbc4d012de312febe8f4b7261e",
                "alphaMass": 33548
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 41.897243923611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/9x16-duration-45-frame-5.png",
                "sha256": "2eb959f0b2e10407a1a5e2110bef7add66dc96525bf5facb26014aba2a20da4f",
                "alphaMass": 5387
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/9x16-duration-45-frame-40.png",
                "sha256": "acddcd539c5721b6dc81fe067902cd2314e4419b648964b0a3005cf81e85787d",
                "alphaMass": 34766
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/9x16-duration-45-frame-39.png",
                "sha256": "bcc7b7ab4b37a781aa3572611c4ce8d4f6cb834ee9ae51f89e1a3ae019063413",
                "alphaMass": 34766
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/9x16-duration-45-frame-44.png",
                "sha256": "1a85f64bcc661aee7dd433770104c05c1515e798a1a2e6ff4012cf4a6744fad2",
                "alphaMass": 34766
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 41.481662326388886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/9x16-duration-600-frame-6.png",
                "sha256": "21ff44c3fc7d9e2bb6910236388419624d5b2bcf278eeb4518264d21f908703b",
                "alphaMass": 7728
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/9x16-duration-600-frame-40.png",
                "sha256": "d8083fff98c800b70c00afd37fd0bdf5a2a6b10015a05368bd2a48f4a03d6740",
                "alphaMass": 34766
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/9x16-duration-600-frame-528.png",
                "sha256": "1a85f64bcc661aee7dd433770104c05c1515e798a1a2e6ff4012cf4a6744fad2",
                "alphaMass": 34766
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/9x16-duration-600-frame-599.png",
                "sha256": "da61e3ff62aeff1cdd65986d3aee8f0060f974713838e49b513364f26c5ee492",
                "alphaMass": 34766
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 27.994466145833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/1x1-duration-45-frame-5.png",
                "sha256": "89d36a55737587f22679cf425b1fcc09ae419354fd06784f0111cb62f74c356c",
                "alphaMass": 4279
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/1x1-duration-45-frame-40.png",
                "sha256": "e7e816d656843cf589767e16e0b2bf09e77b78cb0d8084c29f88812f9fd31922",
                "alphaMass": 21283
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/1x1-duration-45-frame-39.png",
                "sha256": "e7e816d656843cf589767e16e0b2bf09e77b78cb0d8084c29f88812f9fd31922",
                "alphaMass": 21283
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/1x1-duration-45-frame-44.png",
                "sha256": "e7e816d656843cf589767e16e0b2bf09e77b78cb0d8084c29f88812f9fd31922",
                "alphaMass": 21283
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 26.43381076388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/1x1-duration-600-frame-6.png",
                "sha256": "1cd22590bb14444fd6aca63ec2cb16a014fa8c31973c89c9fd4a81d50a6ea5e7",
                "alphaMass": 5808
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/1x1-duration-600-frame-40.png",
                "sha256": "e7e816d656843cf589767e16e0b2bf09e77b78cb0d8084c29f88812f9fd31922",
                "alphaMass": 21283
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/1x1-duration-600-frame-528.png",
                "sha256": "e7e816d656843cf589767e16e0b2bf09e77b78cb0d8084c29f88812f9fd31922",
                "alphaMass": 21283
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/vs-split/1x1-duration-600-frame-599.png",
                "sha256": "e7e816d656843cf589767e16e0b2bf09e77b78cb0d8084c29f88812f9fd31922",
                "alphaMass": 21283
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
        "note": "Hand-built 100 min versus 26 min with 21st in a brand-blue card."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 13,
        "compared": 13,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "c85204ded7bd4505146530a9c5c6a8b82aeef3ec6de7bbd8a0313dadce8924ff",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/vs-split/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/vs-split/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/vs-split/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 40,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 100,
      "sha256": {
        "poster": "cb39d5b3205cfbf5e71413a121387954e1880d41cc75aa53d73b476ff99a2115",
        "loop": "5f7024cce8e2882c4f10f34c4d377e9b4b173b7af591804a9f7afb8ae637cf0e",
        "detail": "99d4daf756d02d211900d0061718f613070b36898c152cc7d08af18837919c95"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/vs-split/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/vs-split/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/vs-split/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 40,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 100,
      "sha256": {
        "poster": "ec65a44203abe9569e86849a47f503554a04c4ff54b074d45e234a952dfa076d",
        "loop": "e5a4dc2819c5909ea72ccc01640ced5bb0f9b23effa675cf5168630338861ee4",
        "detail": "50270991feab2207e583cb41126d98c430b1c22d81cf0698197d3be1f7ea5669"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/vs-split/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/vs-split/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/vs-split/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 40,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 100,
      "sha256": {
        "poster": "35294e54cf38d282df75be2f7d46ec6a5f5d562db24f4afc24e0a883677c0ee9",
        "loop": "61197f455b00cc92cdb0e8f2b044545eb825ef2a7adb3b470b6ad990643c7142",
        "detail": "45d08a26a172dbe47809b7add7b213e992c22395045201581cc545732434a863"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c85204ded7bd4505146530a9c5c6a8b82aeef3ec6de7bbd8a0313dadce8924ff/index.mjs",
    "sha256": "c85204ded7bd4505146530a9c5c6a8b82aeef3ec6de7bbd8a0313dadce8924ff",
    "bytes": 163676,
    "externals": [
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
    "at": "2026-10-09T04:18:21.981Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
