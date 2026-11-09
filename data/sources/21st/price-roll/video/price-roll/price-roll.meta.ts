// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "data/price",
  "tags": [
    "price",
    "pricing",
    "discount",
    "offer",
    "launch",
    "sale"
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
      "in": 54,
      "out": 0
    },
    "markers": {
      "settled": 54
    },
    "beats": [
      0,
      12,
      20,
      42
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
    "safeArea": "title",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "plan",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "kicker"
    },
    {
      "key": "currency",
      "type": "text",
      "maxChars": 3,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "period",
      "type": "text",
      "maxChars": 8,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "saveLabel",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "accent"
    },
    {
      "key": "newPrice",
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
      "target": "oldPrice",
      "prop": "strike",
      "from": "0",
      "settledBy": 20,
      "easing": "ease"
    },
    {
      "target": "newPrice",
      "prop": "roll",
      "settledBy": 42,
      "easing": "ease"
    },
    {
      "target": "saveLabel",
      "prop": "scale",
      "from": "0.6",
      "settledBy": 54,
      "easing": "spring"
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
    "sourceUrl": "21st first-party (motion study V02, twitter-remotion-research)"
  },
  "job": "data",
  "language": "kinetic-poster",
  "mechanic": [
    "count"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "plan": "Pro, billed yearly",
    "oldPrice": 32,
    "newPrice": 19,
    "currency": "$",
    "period": "/mo",
    "saveLabel": "Save 40%",
    "decimals": 0,
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "plan",
      "label": "Plan",
      "type": "text",
      "max": 32,
      "role": "kicker"
    },
    {
      "key": "oldPrice",
      "label": "Old price",
      "type": "number",
      "min": 0,
      "max": 1000000000
    },
    {
      "key": "newPrice",
      "label": "New price",
      "type": "number",
      "min": 0,
      "max": 1000000000,
      "role": "value"
    },
    {
      "key": "currency",
      "label": "Currency",
      "type": "text",
      "max": 3,
      "role": "label"
    },
    {
      "key": "period",
      "label": "Period",
      "type": "text",
      "max": 8,
      "role": "label"
    },
    {
      "key": "saveLabel",
      "label": "Save label",
      "type": "text",
      "max": 24,
      "role": "accent"
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
  "name": "Price Roll",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "price-roll",
    "bundleSha256": "39e64b6f082abeca3826f8221a6046a898151261e3ed557635979a22dfe80325",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:55:24.136Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/16x9-paper.png",
        "sha256": "7d5c25cb0f99961d3d451d04c387ad239218b61c0da1b18af2b11287394ca98b"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/16x9-night.png",
        "sha256": "ae54862a0ee9080e82ae7794f3761fc67b5f91af84d96493fff4d7854409311a"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/16x9-color.png",
        "sha256": "63f2abc0d2ea507385c84aa74a10283e721684f3517d1718b206f691623a7c59"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/9x16-paper.png",
        "sha256": "e0523a4c49adfac6064d41228a57bcb256f015967948356f888b8bb039ae06d6"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/9x16-night.png",
        "sha256": "03a7c78d253ff0ceb34694e8474f97a081f8a0d4f82664fa69972599558cb4cb"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/9x16-color.png",
        "sha256": "f10d142224dd07f0e1e51f2896e34c7141a9eda508cec4a04525f82067641c3a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/1x1-paper.png",
        "sha256": "3c10ffadd178c08f5910e57c9fccd5bc8c4d5900d111a0ffb2737e9e107f955d"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/1x1-night.png",
        "sha256": "b5cabd126e13e4440b08082e9cde201dad0a65b0b5e04ef494bee3eb77fd4849"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/1x1-color.png",
        "sha256": "58cedeba80eae1c9cdd51ded77d76b4ebf685ada700775d304dd3a98e030262e"
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
          "price-roll--16x9",
          "price-roll--9x16",
          "price-roll--1x1"
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
            "paperNight": 48.725748697916664,
            "paperColor": 22.84670681423611,
            "region": {
              "left": 607,
              "top": 327,
              "width": 694,
              "height": 485
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 34.57630750868056,
            "paperColor": 17.59076605902778,
            "region": {
              "left": 210,
              "top": 502,
              "width": 660,
              "height": 1006
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 50.21278211805556,
            "paperColor": 23.125813802083332,
            "region": {
              "left": 259,
              "top": 370,
              "width": 552,
              "height": 386
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
            "occupancy": 0.47276431041380895,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4772894199796689,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3970861957769648,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9149321594206957,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9407044952111504,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7119173476896761,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5334977926927515,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5365657922977147,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4475128004638832,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 13.325086805555555,
        "frames": [
          8,
          54,
          99
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 13.137152777777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/16x9-duration-45-frame-5.png",
                "sha256": "5500f349d1ae9a1b568c8a44833419f1f0a5aa231d3a71cfd979368b288e23e2",
                "alphaMass": 1466
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/16x9-duration-45-frame-44.png",
                "sha256": "a560735107def3ca9f770fc555c835ee8ba6ea1c4a80249da15d86e0665eda2d",
                "alphaMass": 15487
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/16x9-duration-45-frame-39.png",
                "sha256": "a560735107def3ca9f770fc555c835ee8ba6ea1c4a80249da15d86e0665eda2d",
                "alphaMass": 15487
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 13.325086805555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/16x9-duration-600-frame-8.png",
                "sha256": "78b3064e138ba408a10ec9d4f655b3c71936da00c6c3ec826d559ab4ba8ff99f",
                "alphaMass": 1445
              },
              {
                "frame": 54,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/16x9-duration-600-frame-54.png",
                "sha256": "c5311dbd33b55c0a0c2b684993f87b5a293b31773ea3a64f887fb802d959b222",
                "alphaMass": 15430
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/16x9-duration-600-frame-528.png",
                "sha256": "a560735107def3ca9f770fc555c835ee8ba6ea1c4a80249da15d86e0665eda2d",
                "alphaMass": 15487
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/16x9-duration-600-frame-599.png",
                "sha256": "a560735107def3ca9f770fc555c835ee8ba6ea1c4a80249da15d86e0665eda2d",
                "alphaMass": 15487
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 17.99468315972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/9x16-duration-45-frame-5.png",
                "sha256": "52e2a6fcb3012174a998e0a242c3bb865535168b2288b7722d20cec46cebf4dd",
                "alphaMass": 3286
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/9x16-duration-45-frame-44.png",
                "sha256": "b2bc84d6c7dbe0f1ffbc4a24fc601e4252e4009147a13702c2f0c685366879b4",
                "alphaMass": 22201
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/9x16-duration-45-frame-39.png",
                "sha256": "39da4080d61aa469c71980a5ef1f474eea6cb3d43e14228a59adc38b2aa71dfa",
                "alphaMass": 22201
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 18.27907986111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/9x16-duration-600-frame-8.png",
                "sha256": "005a1222a9064beaa9a4c2dff24943a95ee43cb657ffd4b02172592c7e970030",
                "alphaMass": 3252
              },
              {
                "frame": 54,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/9x16-duration-600-frame-54.png",
                "sha256": "d56324cabf76ef8c7b000fab3cae30acfeadcb8c9912421513681973f9da980a",
                "alphaMass": 22247
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/9x16-duration-600-frame-528.png",
                "sha256": "e7113650effc41595d654de7bb34f581f722387c5b18756ed42838659040444b",
                "alphaMass": 22201
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/9x16-duration-600-frame-599.png",
                "sha256": "39da4080d61aa469c71980a5ef1f474eea6cb3d43e14228a59adc38b2aa71dfa",
                "alphaMass": 22201
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 15.5546875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/1x1-duration-45-frame-5.png",
                "sha256": "ff8f96a177ad7f5926bcbe4837ba7e3a9b6c23fd7185d472cd9be9b12f6c95e6",
                "alphaMass": 1816
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/1x1-duration-45-frame-44.png",
                "sha256": "55cd4fda07af7ff5f850650334af1fc0a0122e07097e4afc0ec0cb1235048b7a",
                "alphaMass": 17066
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/1x1-duration-45-frame-39.png",
                "sha256": "86c98e64fa7a5e1feaa505c07d844f05ae315358232c1735aaba0400fd613927",
                "alphaMass": 17066
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 15.554361979166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/1x1-duration-600-frame-8.png",
                "sha256": "b5f8e5971e52813c916dd842eceb1aff361d9741e2de2af3c0cce666c29d8cb6",
                "alphaMass": 1763
              },
              {
                "frame": 54,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/1x1-duration-600-frame-54.png",
                "sha256": "a130ff8a10813674e1ecc4ddffcf0fe72001b3fb4b093ed736283f69ed3b989e",
                "alphaMass": 17032
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/1x1-duration-600-frame-528.png",
                "sha256": "55cd4fda07af7ff5f850650334af1fc0a0122e07097e4afc0ec0cb1235048b7a",
                "alphaMass": 17066
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/price-roll/1x1-duration-600-frame-599.png",
                "sha256": "fb60aca619bca68705328987f928d2a267176f64a0e100ca0404b4c37b110fc0",
                "alphaMass": 17066
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
        "note": "An old price strikes through and rolls to the new one with a savings badge."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 11,
        "compared": 11,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "39e64b6f082abeca3826f8221a6046a898151261e3ed557635979a22dfe80325",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.952869Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/price-roll/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/price-roll/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/price-roll/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 54,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 100,
      "sha256": {
        "poster": "5c06a60fb4762904a8edcb24a5859fefdd9f6bb0331c132cfa28e557e665a8b6",
        "loop": "91c730096ddf78641099d74b2e1cadc27f7140dc9af9ade22d6b80375fc4269d",
        "detail": "6f66db5994689bb6f6f12c56c35c7ba066d77b0346e3d2453f710f552c82a70b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/price-roll/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/price-roll/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/price-roll/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 54,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 100,
      "sha256": {
        "poster": "f1754631343de02b101c67cc8796e8ef3857b12980384d5c0ea7b38e6311bb95",
        "loop": "01c48fea8ead8528e6007bf94ddd9c23ae10b4acaf7edffd350e0cffd703ff14",
        "detail": "99eba8feb3458855d4406878f79e3134ddf91f048b80d254a2841e5fe846219e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/price-roll/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/price-roll/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/price-roll/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 54,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 100,
      "sha256": {
        "poster": "2846790a9119fe84b552fad9c0d61a93c622bfa99ef606629b619ca56b983425",
        "loop": "dbf9d70a4397b7052c8733ae17a92b16ddcd32811af33d89d782a9989d5d7656",
        "detail": "26f49cea7670b1ac7c5528e062b3bf92ade98fd4e0f685599bc8be6af0b6326e"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/39e64b6f082abeca3826f8221a6046a898151261e3ed557635979a22dfe80325/index.mjs",
    "sha256": "39e64b6f082abeca3826f8221a6046a898151261e3ed557635979a22dfe80325",
    "bytes": 163046,
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
    "at": "2026-10-07T02:24:26.735Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
