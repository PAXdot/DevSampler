// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "recursion",
    "zoom"
  ],
  "energy": "punchy",
  "tags": [
    "title",
    "headline",
    "word",
    "droste",
    "recursive",
    "infinite zoom",
    "nested",
    "tunnel",
    "spiral",
    "kinetic type",
    "poster",
    "opener"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 110,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 104,
      "out": 0
    },
    "markers": {
      "settled": 104,
      "rush": 50,
      "land": 88
    },
    "beats": [
      0,
      20,
      50,
      88,
      104
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
      "key": "text",
      "type": "text",
      "maxChars": 24,
      "lines": 2,
      "role": "headline"
    }
  ],
  "brand": {
    "color": "colors.text",
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "background": "colors.background",
    "fontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "camera",
      "prop": "scale",
      "from": "outside",
      "settledBy": 104,
      "easing": "ease"
    },
    {
      "target": "camera",
      "prop": "rotate",
      "settledBy": 104,
      "easing": "ease"
    },
    {
      "target": "text",
      "prop": "glint",
      "settledBy": 138,
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
    "sourceUrl": "21st first-party (the word nested inside itself, an infinite Droste dive that lands on one copy, 2026-10-08)"
  },
  "defaults": {
    "text": "Ship faster",
    "color": "#1E1B18",
    "primary": "#E4572E",
    "secondary": "#F3A712",
    "background": "#F4EFE6",
    "fontFamily": "Bricolage Grotesque",
    "depth": 6,
    "twist": 6,
    "grain": true
  },
  "fields": [
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 24,
      "role": "headline"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
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
      "brand": "fonts.body"
    },
    {
      "key": "depth",
      "label": "Depth",
      "type": "number",
      "step": 1,
      "min": 3,
      "max": 9
    },
    {
      "key": "twist",
      "label": "Twist",
      "type": "number",
      "min": -12,
      "max": 12
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    }
  ],
  "name": "Droste Word",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "droste-word-tunnel",
    "bundleSha256": "c64c3b974832b1d8ca38e2664c6e6a4d6eb41df6c14e2450f4d2b517205fa8d3",
    "sourceSnapshot": {
      "sha256": "6efc08ffa63cd79c1ef030574e46b7d37feaf9d76cf75693411a9f12cc69f3ef",
      "files": 1851
    },
    "renderedAt": "2026-10-09T11:50:30.026Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/16x9-paper.png",
        "sha256": "67495b5a9d493bba442c2ae96909c79fa2a332eb0de200325cc480a6e86cfab0"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/16x9-night.png",
        "sha256": "c71fd588ce0758a1c275a284d9e3cb04d51e24074fdf0e8ebafd36a9135d8079"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/16x9-color.png",
        "sha256": "cb19086338ddca4f7d3c5d847e030b1843aae0f46a35b27d6d33523a746baa15"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/9x16-paper.png",
        "sha256": "6673503c4ee71d5d02cbbae8d9bc418be3ad4cb12f9b6614cd74dca4cb80dbb8"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/9x16-night.png",
        "sha256": "069fa9bdb8a01b123b439c43104dd756b5588df5db66d108adf48926573c3a9d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/9x16-color.png",
        "sha256": "96c4c99e3c2b1d8920718fb3c268ea7aefa4578082835b79a12814f62e359651"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/1x1-paper.png",
        "sha256": "4d34b4f566c3a2e5e51191bebc65c775742594647497505c7c77f951f5c4585a"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/1x1-night.png",
        "sha256": "9a5cac4eba1ebeceaa7994c131532f6c6614231f94ee5c5b413d724e8980b5d2"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/1x1-color.png",
        "sha256": "1e21b161a45ca5d980fbf3299d824e0360ff778693fb2dca0e3bbb8a48504d65"
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
          "droste-word-tunnel--16x9",
          "droste-word-tunnel--9x16",
          "droste-word-tunnel--1x1"
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
            "paperNight": 37.29725477430556,
            "paperColor": 18.669786241319443,
            "region": {
              "left": 323,
              "top": 257,
              "width": 1293,
              "height": 811
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 41.055447048611114,
            "paperColor": 20.253743489583332,
            "region": {
              "left": 186,
              "top": 348,
              "width": 718,
              "height": 1492
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 50.715576171875,
            "paperColor": 23.349229600694443,
            "region": {
              "left": 240,
              "top": 120,
              "width": 608,
              "height": 938
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
            "occupancy": 0.7166973897969683,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7166973897969683,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7078718029135525,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7321662589933094,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7321662589933094,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7276799930363094,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6929475036470922,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6929475036470922,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6877227914485411,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 34.178927951388886,
        "frames": [
          15,
          104,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 110,
            "averageChannelDifference": 26.4072265625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/16x9-duration-110-frame-13.png",
                "sha256": "e2a4a83318979bc8683c5ec5952be59c380595467b5097cda759551e55431af9",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/16x9-duration-110-frame-104.png",
                "sha256": "73fd0825f586c45f761cdaca1eccf996697ee92fe63ab80aa6ed7052ffdc7634",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/16x9-duration-110-frame-96.png",
                "sha256": "be4c1048db39a2f7e0b8e44e9b78efc277d5aec48a3add97d8048508de3f9087",
                "alphaMass": 587520
              },
              {
                "frame": 109,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/16x9-duration-110-frame-109.png",
                "sha256": "8eb9c88460590c1859f639b73c28d0126186da0df067ff433f3d67320085f0bf",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 34.178927951388886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/16x9-duration-600-frame-15.png",
                "sha256": "9e85656b1a2ca271fc0e766df999aa039c6edc7b5443ed584d407950358a2e00",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/16x9-duration-600-frame-104.png",
                "sha256": "73fd0825f586c45f761cdaca1eccf996697ee92fe63ab80aa6ed7052ffdc7634",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/16x9-duration-600-frame-528.png",
                "sha256": "73fd0825f586c45f761cdaca1eccf996697ee92fe63ab80aa6ed7052ffdc7634",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/16x9-duration-600-frame-599.png",
                "sha256": "73fd0825f586c45f761cdaca1eccf996697ee92fe63ab80aa6ed7052ffdc7634",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 110,
            "averageChannelDifference": 27.11545138888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/9x16-duration-110-frame-13.png",
                "sha256": "8c1d883066dabd6d5b532fb998f69d25c5244c30dd286b61d05f6caae21a890b",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/9x16-duration-110-frame-104.png",
                "sha256": "5c3e6668dbedcb7fa93f34117578ace1ca6318dc77d765d8a8c3fbac11d688a6",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/9x16-duration-110-frame-96.png",
                "sha256": "64c5283691101c272369bc802a47b1c4d82c251294e9fd0081ece7c646fe04cd",
                "alphaMass": 587520
              },
              {
                "frame": 109,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/9x16-duration-110-frame-109.png",
                "sha256": "e6a7bfd00603fcb4f54ad71ea414bd7e25d458156cbb9771c9a9f43340149c36",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 27.78851996527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/9x16-duration-600-frame-15.png",
                "sha256": "4fddedc33189babc3d249a7488765cc412c71d310927ecc11a12fb5c8d3bfb7f",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/9x16-duration-600-frame-104.png",
                "sha256": "5c3e6668dbedcb7fa93f34117578ace1ca6318dc77d765d8a8c3fbac11d688a6",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/9x16-duration-600-frame-528.png",
                "sha256": "5c3e6668dbedcb7fa93f34117578ace1ca6318dc77d765d8a8c3fbac11d688a6",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/9x16-duration-600-frame-599.png",
                "sha256": "5c3e6668dbedcb7fa93f34117578ace1ca6318dc77d765d8a8c3fbac11d688a6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 110,
            "averageChannelDifference": 30.970052083333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/1x1-duration-110-frame-13.png",
                "sha256": "7f9eb85996507f972c8c70d00d9de6d37f4dc1f806d4d3680afd5e8320bfe830",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/1x1-duration-110-frame-104.png",
                "sha256": "59727f27c61547cc155fddaa484aefb39fe2d72b993816b92eb7715853d1848b",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/1x1-duration-110-frame-96.png",
                "sha256": "e9cfccbf1e24119c12171975014bc1b331273d118d7fa518c041a9077d59d4fb",
                "alphaMass": 587520
              },
              {
                "frame": 109,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/1x1-duration-110-frame-109.png",
                "sha256": "cccb2b8c0ba219b2aa1d2de73569ac14de5f7d64c8472a1cf53c2ecdf531d10e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 31.95236545138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/1x1-duration-600-frame-15.png",
                "sha256": "62969c963d6efd8ca54cf0ff9089b1e2522a35dc9a43534034ef54d20fe57107",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/1x1-duration-600-frame-104.png",
                "sha256": "8c20c9779a13774596a010417fbfe21ad8cdeebffe5763743120a41220de1bd1",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/1x1-duration-600-frame-528.png",
                "sha256": "a3fe58e288c1462b99986eb45bd555655d88b611307ecfbd7e57f7327631896e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-134534/droste-word-tunnel/1x1-duration-600-frame-599.png",
                "sha256": "61fe4540e703e741b2b082504f9bdbaeab046507ccbe77a7278869a96e56ff77",
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
        "note": "TitleMatches: The visible subject is a recursion of objects featuring the same 'Ship faster' text at three scales (poster, card, card within card), clearly matching the concept of 'Droste'. The animation frames (images 2–4) show a smooth scaling and movement that cycles these nested cards, supporting the Droste effect claimed in the title, rather than just duplicating content. \n\nNoBakedHeading: There is no decorative or unexplained block title/category within the composition; 'Ship faster' is legitimate slot content, and there are no extraneous headings or language labels.\n\nBrandAdherence: The last three images present the design under three distinct palette swaps. Each variant adjusts background, primary, and secondary colors according to the supplied palettes. Text and important shapes maintain visual clarity and legibility across all palettes, with no fixed unexplained colors remaining; embedded content (the card/recursion) also updates appropriately.\n\nLanguageAdherence: The poster uses oversized sans-serif type as the main visual, applies single flat graphic shapes (fields and cards), shows no frosted glass, browser chrome, or floating cards, and remains coherent through the rebrand palettes and motion samples. Type hierarchy, material, and motion verbs are followed as per the language card, including the animate/replace/slide pattern for the Droste sequence."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 51,
        "compared": 51,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "c64c3b974832b1d8ca38e2664c6e6a4d6eb41df6c14e2450f4d2b517205fa8d3",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T11:52:25.673Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/droste-word-tunnel/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/droste-word-tunnel/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/droste-word-tunnel/16x9/detail.mp4",
      "bg": "#cac5bf",
      "posterFrame": 104,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "6f40a80da45905d04fdb475ad1253d5b630c926d668286775575eb37af3c6da1",
        "loop": "4215dd569cd692d61e9dd85c9d57f6dcc7bf7b9468bce18033c52f1fa47a2c5e",
        "detail": "527672b1139f462b4d8ecd0460a41c10de1e732b82d3db989ae6651a96f2fc1b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/droste-word-tunnel/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/droste-word-tunnel/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/droste-word-tunnel/9x16/detail.mp4",
      "bg": "#cac5bf",
      "posterFrame": 104,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "e1075172f8bfd4815bd3ca057838b04ad6c3daaae03cb9cd65b4cd086bf1af10",
        "loop": "5f1f52b92363b076b4b11ede7f7bc83f83be159b3dc44b350ee087cccf58c676",
        "detail": "a845d14b4dbd26d02224c9e0902c3fdd8251ad9c98f8e09d7d426839ef12984a"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/droste-word-tunnel/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/droste-word-tunnel/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/droste-word-tunnel/1x1/detail.mp4",
      "bg": "#cac5bf",
      "posterFrame": 104,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "8971494c8cfbf64ff84ba6b0c5bf05f45c902a9afb67e1a1352b2489029a768a",
        "loop": "b43a99b09cfabeee6abdce63a88660fbb2cad1ae1fe0dae57537bf7e6b25d8f0",
        "detail": "34e86803d683c6c32f39a2bdcbd329967657e16f8e517e237f898d3cdcf47ff2"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c64c3b974832b1d8ca38e2664c6e6a4d6eb41df6c14e2450f4d2b517205fa8d3/index.mjs",
    "sha256": "c64c3b974832b1d8ca38e2664c6e6a4d6eb41df6c14e2450f4d2b517205fa8d3",
    "bytes": 163975,
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
    "at": "2026-10-09T11:57:56.008Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
