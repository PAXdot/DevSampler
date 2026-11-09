// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "glass",
  "mechanic": [
    "bloom"
  ],
  "tags": [
    "logo",
    "logo reveal",
    "penrose",
    "tiling",
    "mosaic",
    "glass",
    "stained glass",
    "geometric",
    "pattern",
    "light sweep",
    "opener",
    "brand"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 210,
      "min": 180,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 140,
      "out": 0
    },
    "markers": {
      "settled": 140,
      "logo": 0,
      "rim": 8,
      "bloom": 22,
      "shine": 124
    },
    "beats": [
      0,
      8,
      22,
      105,
      140,
      160
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
      "key": "logo",
      "type": "image",
      "role": "logo"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 48,
      "lines": 2,
      "role": "headline"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "logo",
      "prop": "scale",
      "from": "small",
      "settledBy": 30,
      "easing": "spring"
    },
    {
      "target": "tiles",
      "prop": "scale",
      "from": "center outward",
      "settledBy": 140,
      "easing": "spring"
    },
    {
      "target": "title",
      "prop": "opacity",
      "from": "below",
      "settledBy": 80,
      "easing": "ease"
    },
    {
      "target": "shine",
      "prop": "position",
      "from": "left",
      "settledBy": 185,
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
      "frame": 152
    },
    "hover": [
      0,
      210
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (aperiodic Penrose rhombus tiling of beveled glass blooms ring by ring around the logo, then a light sweep, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "title": "Ship faster",
    "primary": "#4CC9F0",
    "secondary": "#F72585",
    "color": "#EAF0FF",
    "background": "#141B2D",
    "tileSize": 1,
    "shine": 0.8,
    "grain": true,
    "fontFamily": "Inter"
  },
  "fields": [
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 48,
      "role": "headline"
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
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "tileSize",
      "label": "Tile size",
      "type": "number",
      "min": 0.7,
      "max": 1.4
    },
    {
      "key": "shine",
      "label": "Shine",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.body"
    }
  ],
  "name": "Penrose Glass Tile Logo",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "penrose-bloom",
    "bundleSha256": "da737b83d8d45ce09d5322cd4de512cb9d0f57ffbce688d636d641ba17abb911",
    "sourceSnapshot": {
      "sha256": "37414f1fe048067e528e22c1371dfd810b9ebff588d4887235f80212a917a514",
      "files": 1854
    },
    "renderedAt": "2026-10-09T12:37:50.259Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/16x9-paper.png",
        "sha256": "1abbabb3f775658f219de94654e03bd6dd2f990e5022fe26c518a73f6f48e9f5"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/16x9-night.png",
        "sha256": "c382c3d81467831d3f451f6e822d179218d56ade1a8ede1f3b0759ef95a2df0f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/16x9-color.png",
        "sha256": "76552e959c0bfba0fb697200bfa839f5b7f8bef147460de92c53d90676424375"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/9x16-paper.png",
        "sha256": "c57664eb675bcb6e7dfcb2fbf037fb5adbbb6ee1194ae2a761d784c2bc88080b"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/9x16-night.png",
        "sha256": "d722068f00bd1cbae15d003fc5f45511f5ba5c1660c8d2cd301d2af363c271c7"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/9x16-color.png",
        "sha256": "ebc8a1a528818a77b2fcd3622fb3cfbac2ccdc01d9fb87afce713c996a6bc73b"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/1x1-paper.png",
        "sha256": "292792eec203da69e475ad4b146f9ef32adbc00545594a608b42aab8c46b78ec"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/1x1-night.png",
        "sha256": "80e18bc7c38a071325ff7f3585669c43501b2692aee005da77476798f26536e3"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/1x1-color.png",
        "sha256": "87d8083757a7eac20dbe20765ab5c523b6162faf908460945c57546dda980c3b"
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
          "penrose-bloom--16x9",
          "penrose-bloom--9x16",
          "penrose-bloom--1x1"
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
            "paperNight": 62.649495442708336,
            "paperColor": 9.502360026041666,
            "region": {
              "left": 47,
              "top": 27,
              "width": 1826,
              "height": 1026
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 57.27577039930556,
            "paperColor": 9.805419921875,
            "region": {
              "left": 27,
              "top": 47,
              "width": 1026,
              "height": 1826
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 54.30414496527778,
            "paperColor": 10.413736979166666,
            "region": {
              "left": 27,
              "top": 27,
              "width": 1026,
              "height": 1026
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
            "occupancy": 1.2804557586923662,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2804557586923662,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2804557586923662,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2804557586923662,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2804557586923662,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2804557586923662,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2790532879818597,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2790532879818597,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2790532879818597,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 20.72970920138889,
        "frames": [
          22,
          152,
          209
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 180,
            "averageChannelDifference": 20.65483940972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/16x9-duration-180-frame-21.png",
                "sha256": "8009172e86a21b47fb34beac257096ce38329dc6478eee58d6e617b1eb3a292b",
                "alphaMass": 587520
              },
              {
                "frame": 152,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/16x9-duration-180-frame-152.png",
                "sha256": "8ffa9ac55209684c73bc3b816861ef74e327656d0b0377dbdc9c6dd56c881f62",
                "alphaMass": 587520
              },
              {
                "frame": 158,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/16x9-duration-180-frame-158.png",
                "sha256": "4aa8655c0c8c24900af99d927f0fe05d206f1774a61202cabf3699f5a3cc3505",
                "alphaMass": 587520
              },
              {
                "frame": 179,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/16x9-duration-180-frame-179.png",
                "sha256": "dc3d29a29b8a60c9e916bfff82b3b16679017492a4817e2e7902246b112c86c5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 20.72970920138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/16x9-duration-600-frame-22.png",
                "sha256": "559c8809a3206cec60a6d3aabc6d13275acc9f17bf0dfd6b47194ec388339c0d",
                "alphaMass": 587520
              },
              {
                "frame": 152,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/16x9-duration-600-frame-152.png",
                "sha256": "8ffa9ac55209684c73bc3b816861ef74e327656d0b0377dbdc9c6dd56c881f62",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/16x9-duration-600-frame-528.png",
                "sha256": "1d59df6d911f9a6348b912b8d7bc5898b4f46282192683afdb5742042f471b0a",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/16x9-duration-600-frame-599.png",
                "sha256": "b56f7c79c687f80cf40c1efa741fca136513a07b14f8d539135458477d74d297",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 180,
            "averageChannelDifference": 21.88498263888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/9x16-duration-180-frame-21.png",
                "sha256": "ccf5f981865a383e8162012e2af3a9c724d5c7ec1901d689d00c3a2c2443dc87",
                "alphaMass": 587520
              },
              {
                "frame": 152,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/9x16-duration-180-frame-152.png",
                "sha256": "15dd81ff163efee01b0d9d26ea3d938f7997cd34729e16a21c192c29440e38b8",
                "alphaMass": 587520
              },
              {
                "frame": 158,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/9x16-duration-180-frame-158.png",
                "sha256": "09f93cde019d9266e4fb94f5a55a96ea68ffd695eca7fa77eb6ed9229b63d6ea",
                "alphaMass": 587520
              },
              {
                "frame": 179,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/9x16-duration-180-frame-179.png",
                "sha256": "c66789f621a4c75f2e83089808c42d83680cdd8a9052feaed5bdfc0af057bfb2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 21.97319878472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/9x16-duration-600-frame-22.png",
                "sha256": "d6882c1bc292b9b355fdc22e3544977ea042fa82ccf9dfb589d032c5f4a30409",
                "alphaMass": 587520
              },
              {
                "frame": 152,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/9x16-duration-600-frame-152.png",
                "sha256": "15dd81ff163efee01b0d9d26ea3d938f7997cd34729e16a21c192c29440e38b8",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/9x16-duration-600-frame-528.png",
                "sha256": "29c5cc625ae0165c2daf87e7045725cbc5a7fbf23d2c9a101ac96cd4e58bcf3f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/9x16-duration-600-frame-599.png",
                "sha256": "32e7018887ed4ab479120bc128b178975bc720070ac425294a5e52c6883bafe0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 180,
            "averageChannelDifference": 27.298177083333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/1x1-duration-180-frame-21.png",
                "sha256": "73ae213327c9914a658a3d37926d0dbf775ff496153adc9642bd8b99d86db4e0",
                "alphaMass": 587520
              },
              {
                "frame": 152,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/1x1-duration-180-frame-152.png",
                "sha256": "a3aec4af95000cdfc138fe2e9dd68e7d099c8af4756d77e46c88f4db3f395f5e",
                "alphaMass": 587520
              },
              {
                "frame": 158,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/1x1-duration-180-frame-158.png",
                "sha256": "60df23b213b49252d9f7089c5f727695b6097e0cf2fb107f98c113194201f8dd",
                "alphaMass": 587520
              },
              {
                "frame": 179,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/1x1-duration-180-frame-179.png",
                "sha256": "df85218ce65ad838c7fbefc365377499ac731cf34e2e52754502c90a8e86a213",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 27.451063368055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 22,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/1x1-duration-600-frame-22.png",
                "sha256": "27ddcd834bda2b55c681ddc84592c3d1070f40cef32dfbe1e0dbe4570e5912c8",
                "alphaMass": 587520
              },
              {
                "frame": 152,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/1x1-duration-600-frame-152.png",
                "sha256": "a3aec4af95000cdfc138fe2e9dd68e7d099c8af4756d77e46c88f4db3f395f5e",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/1x1-duration-600-frame-528.png",
                "sha256": "82db43b809eeb739cd6fa917c359e7d3511f789a054c588e6129c920bce81c44",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-143400/penrose-bloom/1x1-duration-600-frame-599.png",
                "sha256": "c6e607c7a638767f80d074cb30543aac18d79dc3153245779b5f1858eaa4cea7",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "logos",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "1. TitleMatches: The images clearly depict a logo composed of glassy, translucent Penrose tiling, with lens-like depth and refractive qualities consistent with the title 'Penrose Glass Tile Logo'. The sampled motion across images 2-4 shows the tiles floating, shifting, and refracting in a parallax-like fashion that fits motion verbs (focus, float, refract) from the language card, supporting the claimed subject and structure. \n2. noBakedHeading: There are no decorative or fixed block-title/language/category labels embedded in the imagery; all large text ('Ship faster') is editable heading content as per the named slot. No unexplained prominent baked headings are observed. \n3. brandAdherence: Images 5-7 show the same logo scene re-imagined under the three supplied palettes (beige/green, green/blue, soft light with blue text), demonstrating good legibility of content (title, logo, and tiles) with palette-appropriate background, tile, and text colors, and consistent visual treatment. No unexplained persistent block coloring or illegibility is seen. \n4. languageAdherence: All images and motion samples preserve the language card's requirements: lens-like translucent/glistening tiles with visible depth, parallax/float effects, sharp editable text, appropriate brand role separations, and avoidance of banned effects (e.g., no neon glows, no blurred text, no generic opaque panels). Type functions (body, display, numeral) are sans-serif, as required, and role placement remains consistent across rebrands and in motion. No language card is missing."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 24,
        "compared": 24,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "da737b83d8d45ce09d5322cd4de512cb9d0f57ffbce688d636d641ba17abb911",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T12:38:02.167Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/penrose-bloom/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/penrose-bloom/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/penrose-bloom/16x9/detail.mp4",
      "bg": "#245067",
      "posterFrame": 152,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "09df991901b35a2c0caa3d033ba00bdd772dfe73519d9607799f74d4fa8f9b57",
        "loop": "c18e57377e4cf004405055a56bcf5c06d6f1518785a476347be294a6e79723ee",
        "detail": "8ee22c22b3c25b5dab476472d1c7bd38ebd86cc406b20c061d5765d8d2510cf4"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/penrose-bloom/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/penrose-bloom/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/penrose-bloom/9x16/detail.mp4",
      "bg": "#793e6b",
      "posterFrame": 152,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "7761d0f5715917a08ce7812af778d6a68057766082fe56e718930d2b2e2f340c",
        "loop": "c6915598b3c8b1fa726ed9c7cc3307db6c920d6825e9a77e7ec936adfd51feb4",
        "detail": "43e23527e307676d099e1cada38d0d61ad2a44e3bd93f58b7adaad51b0290b29"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/penrose-bloom/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/penrose-bloom/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/penrose-bloom/1x1/detail.mp4",
      "bg": "#507e99",
      "posterFrame": 152,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "4e05ae026b41c1a94c00703a37128d0bbb61719a862350f77b524c9ff87cc68b",
        "loop": "e5d49b8bb519ebf8d6aa46d87536fd65a7c7140a3c0ca4b9210394533d0470a7",
        "detail": "7d51d2423b553ca67a944650f5b11f8697c1e8dde5755c3b58089e0f6dc2587a"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/da737b83d8d45ce09d5322cd4de512cb9d0f57ffbce688d636d641ba17abb911/index.mjs",
    "sha256": "da737b83d8d45ce09d5322cd4de512cb9d0f57ffbce688d636d641ba17abb911",
    "bytes": 170124,
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
    "at": "2026-10-09T12:39:50.305Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
