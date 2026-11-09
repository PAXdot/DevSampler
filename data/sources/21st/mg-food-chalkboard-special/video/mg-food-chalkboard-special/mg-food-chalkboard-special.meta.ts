// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "hand-drawn",
  "mechanic": [
    "chalk-handwriting-reveal"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "chalk-handwriting-reveal",
    "restaurant",
    "special",
    "chalk"
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
      "in": 93,
      "out": 0
    },
    "markers": {
      "settled": 93
    },
    "beats": [
      0,
      23,
      47,
      70,
      93
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
      "key": "dish",
      "type": "text",
      "maxChars": 20,
      "role": "headline"
    },
    {
      "key": "desc",
      "type": "text",
      "maxChars": 36,
      "role": "body"
    },
    {
      "key": "price",
      "type": "text",
      "maxChars": 6,
      "role": "value"
    },
    {
      "key": "note",
      "type": "text",
      "maxChars": 22,
      "role": "cta"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.accent",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "chalk-handwriting-reveal",
      "prop": "transform",
      "from": "enter",
      "settledBy": 93,
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
    "ink": "#F2F0E6",
    "accent": "#F4D97B",
    "secondary": "#F3A6A6",
    "paper": "#1C2823",
    "displayFont": "Caveat",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "dish": "Grilled sea bream",
    "desc": "lemon · capers · charred fennel",
    "price": "$24",
    "note": "until it's gone!"
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
      "brand": "fonts.accent"
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
      "key": "dish",
      "label": "Dish",
      "type": "text",
      "max": 20,
      "role": "headline"
    },
    {
      "key": "desc",
      "label": "Desc",
      "type": "text",
      "max": 36,
      "role": "body"
    },
    {
      "key": "price",
      "label": "Price",
      "type": "text",
      "max": 6,
      "role": "value"
    },
    {
      "key": "note",
      "label": "Note",
      "type": "text",
      "max": 22,
      "role": "cta"
    }
  ],
  "name": "Chalkboard Daily Special",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-food-chalkboard-special",
    "bundleSha256": "491358700e8da32ade374adfd2812a630020496a38e01623f855c78ce3870e27",
    "sourceSnapshot": {
      "sha256": "b342da95c90071ffb99c060c999d9fca49ed6722762d7db99795613749872dfe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T07:47:29.849Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/16x9-paper.png",
        "sha256": "a73d2b4048304a149070f2c2960f90f64a64ac455aed5a19fbf27f36835b0df9"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/16x9-night.png",
        "sha256": "f548ed1ce70830a41ba8911eea144361ac06f2bf09c380cc78cbc31530ea611d"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/16x9-color.png",
        "sha256": "64166eef51a70f60df80036f1d3ab40429628ddb34077dc6152d7a70db7fcb39"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/9x16-paper.png",
        "sha256": "52a8028e6dd2a93a5340a10c0732e297f9af84d07a6f7171adb7644a562871ea"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/9x16-night.png",
        "sha256": "59c13cc605e48635e82b7c4188500653fd94f41d0d3a865c9d3593344a79a3ef"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/9x16-color.png",
        "sha256": "63fdfa65ca420584c49a3af3ac99ef73da68cbc5cb9e39fd191da51abc8c03b4"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/1x1-paper.png",
        "sha256": "6f7e70030209b4c5643e035756906f1d5d7415572a581861422e23c81c8b43b7"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/1x1-night.png",
        "sha256": "8c3eddc48eb8ff83135b71d7d13d6d22fd6e3e09d8ba47b41ce405dbfa2526b9"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/1x1-color.png",
        "sha256": "be938ca2548b9f9c9fb0592ee0f3fde09be600d488f437fdbcb905850f4b1168"
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
          "mg-food-chalkboard-special--16x9",
          "mg-food-chalkboard-special--9x16",
          "mg-food-chalkboard-special--1x1"
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
            "paperNight": 134.07975260416666,
            "paperColor": 11.105305989583334,
            "region": {
              "left": 35,
              "top": 40,
              "width": 1851,
              "height": 1000
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 129.41959635416666,
            "paperColor": 11.276665581597221,
            "region": {
              "left": 19,
              "top": 15,
              "width": 1042,
              "height": 1891
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 135.492431640625,
            "paperColor": 10.924750434027779,
            "region": {
              "left": 20,
              "top": 20,
              "width": 1041,
              "height": 1041
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
            "occupancy": 1.2650941935416145,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2650941935416145,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2650941935416145,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.346714981645951,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.346714981645951,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.346714981645951,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3167258930321102,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3167258930321102,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3167258930321102,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.103190104166667,
        "frames": [
          13,
          93,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 7.116861979166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/16x9-duration-90-frame-10.png",
                "sha256": "343c81d9081c303b4e43c7c96bf33c365d3090d3c772aeab2413303c597cbe15",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/16x9-duration-90-frame-89.png",
                "sha256": "d4cf80db1f5d3bc51c0609d704ec6866d7e24425cd5ce0f50e45fad38606bdb0",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/16x9-duration-90-frame-79.png",
                "sha256": "5d311239428174515f69b0ad6d4e1548678a38c792587764906f8f9c14f3555e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.103298611111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/16x9-duration-900-frame-13.png",
                "sha256": "bde570fb974096666b730abf654401e10a3f0ba0c18ea99e20de06c5def16e7e",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/16x9-duration-900-frame-93.png",
                "sha256": "65ef118f7982dbe213dae28b8d90a9a10ba403ba293b0e3a171861bca2471846",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/16x9-duration-900-frame-792.png",
                "sha256": "aa6d039a4048d3f433400e57750910537230aee1b659bddd75c8664d6b923eb2",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/16x9-duration-900-frame-899.png",
                "sha256": "0a2c1f69e0b8c38ff2364c2496afadd683c433f741bf9fc1cbcbf4f5221e389c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 9.78830295138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/9x16-duration-90-frame-10.png",
                "sha256": "2481634907acb59995c46d055544f4f62fc5b90254b674212cb714a802629af1",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/9x16-duration-90-frame-89.png",
                "sha256": "96967f0dc1b46b458161aa9234edb251ccd899e018b0bbf115547b30fe6108fb",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/9x16-duration-90-frame-79.png",
                "sha256": "eef3aadeb185e46c839129d5ec189afd6f68be685cb8de0e0a19428618eed493",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 9.7822265625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/9x16-duration-900-frame-13.png",
                "sha256": "5a3aaf2a405bdf0b0f7687905fb22cf8fab5b69db55aa9986d16ca6ed2df5b4d",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/9x16-duration-900-frame-93.png",
                "sha256": "d588936d3d5dbc6d2dafe76f531764b3626c2f88614bcdc6291de719005c7964",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/9x16-duration-900-frame-792.png",
                "sha256": "fc5e77231763bec63befc8c0ff09b19a2cd8b350ad98e5e478d6b2cfe0f383c1",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/9x16-duration-900-frame-899.png",
                "sha256": "ef7fcebd0511e677c209dfdb9f256720a4ca794bb66a12f9f9d9fe0790f6df8e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 6.724609375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/1x1-duration-90-frame-10.png",
                "sha256": "34de4c10de5fcce3b3fc9fcac9024e0417b85f85da6e896e40670e5220e2aff7",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/1x1-duration-90-frame-89.png",
                "sha256": "1b08c783e85172bde2bb6d7767365d24cf71c3b3167b5e7f865bf69c37effa4a",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/1x1-duration-90-frame-79.png",
                "sha256": "1b08c783e85172bde2bb6d7767365d24cf71c3b3167b5e7f865bf69c37effa4a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 6.722547743055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/1x1-duration-900-frame-13.png",
                "sha256": "08200ec633d044ee1475b844dbd634ba685e2a2cdd7a8464c9f0d32d6446755b",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/1x1-duration-900-frame-93.png",
                "sha256": "1b08c783e85172bde2bb6d7767365d24cf71c3b3167b5e7f865bf69c37effa4a",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/1x1-duration-900-frame-792.png",
                "sha256": "1b08c783e85172bde2bb6d7767365d24cf71c3b3167b5e7f865bf69c37effa4a",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-food-chalkboard-special/1x1-duration-900-frame-899.png",
                "sha256": "1b08c783e85172bde2bb6d7767365d24cf71c3b3167b5e7f865bf69c37effa4a",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "titles",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Chalk lettering writes the daily special, price ring and fish doodle on a board; rebrands recolor the board."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 63,
        "compared": 63,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "491358700e8da32ade374adfd2812a630020496a38e01623f855c78ce3870e27",
      "selectedBy": "serafim (repo owner) on 2026-10-09; visual review by claude",
      "at": "2026-10-09T07:49:52.847Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-chalkboard-special/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-chalkboard-special/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-chalkboard-special/16x9/detail.mp4",
      "bg": "#7d5432",
      "posterFrame": 93,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "58f27fb24b761dccc551783eee8f4f680c71ed78774906d63665390e23c92232",
        "loop": "e0cf29d5502feb35008fe2cd08405f251aa6c180797e8ea99685d452e71609f3",
        "detail": "dac493d3c2fc6e0cffb6470af93f2a8b67939f2cdd0d43a1d056fed86ed9b421"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-chalkboard-special/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-chalkboard-special/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-chalkboard-special/9x16/detail.mp4",
      "bg": "#7d5433",
      "posterFrame": 93,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c3668b19d12e40955537ed22d419a179bd288ba09df5f32b467bfef7c5fed1a5",
        "loop": "f0be8af467936d0d45918f2c4824ed9855d6f47ed6a0ba51200c685316ae023b",
        "detail": "8104ab1404b2db3d31cd5028813e2d5fed23b2822aafeecf44bb648caa969981"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-chalkboard-special/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-chalkboard-special/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-chalkboard-special/1x1/detail.mp4",
      "bg": "#7d5432",
      "posterFrame": 93,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9afa2030b7610444e176f8e140f3e5b62ede34fa49449e65f51e5037a9e968ec",
        "loop": "db4976f21403909d393c5c1fc33aacf2b9cae3c19f87742e876d8e226fea0f14",
        "detail": "821fa6d7158d480f4ed763ad9444267aa29913fb5f1deec916991d01e384570a"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/491358700e8da32ade374adfd2812a630020496a38e01623f855c78ce3870e27/index.mjs",
    "sha256": "491358700e8da32ade374adfd2812a630020496a38e01623f855c78ce3870e27",
    "bytes": 198797,
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
    "at": "2026-10-09T08:02:01.947Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
