// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "code/morph",
  "tags": [
    "code",
    "scatter",
    "glyphs",
    "particles",
    "morph",
    "developer"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 110,
      "min": 50,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 64,
      "out": 0
    },
    "markers": {
      "settled": 64
    },
    "beats": [
      0,
      30,
      44,
      64
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
      "x": 0.05,
      "y": 0.06,
      "w": 0.9,
      "h": 0.88
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "full",
    "backdrop": []
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "from",
      "type": "text",
      "maxChars": 240,
      "lines": 10,
      "role": "code"
    },
    {
      "key": "to",
      "type": "text",
      "maxChars": 240,
      "lines": 10,
      "role": "code"
    }
  ],
  "brand": {
    "surfaceColor": "colors.background",
    "textColor": "colors.text",
    "secondaryColor": "colors.secondary",
    "monoFontFamily": "fonts.mono",
    "bodyFontFamily": "fonts.body",
    "accent": "colors.primary"
  },
  "motionBeats": [
    {
      "target": "from",
      "prop": "position",
      "settledBy": 47,
      "easing": "ease"
    },
    {
      "target": "to",
      "prop": "position",
      "settledBy": 64,
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
      110
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study V06, twitter-remotion-research)"
  },
  "job": "code",
  "language": "pixel-terminal",
  "mechanic": [
    "type"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "surfaceColor": "#0E0E11",
    "textColor": "#E6E6E9",
    "secondaryColor": "#6FD6E6",
    "monoFontFamily": "Geist Mono",
    "bodyFontFamily": "Geist",
    "title": "theme.ts",
    "from": "const theme = {\n  radius: 8,\n  accent: \"blue\",\n};",
    "to": "export const theme = createTheme({\n  radius: \"lg\",\n  accent: brand.primary,\n  motion: \"calm\",\n});",
    "language": "ts",
    "theme": "dark",
    "card": false,
    "cluster": "top-left",
    "scatterAt": 30,
    "seed": 7,
    "accent": "#3D63FF"
  },
  "fields": [
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
    },
    {
      "key": "secondaryColor",
      "label": "Secondary color",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 40,
      "role": "label"
    },
    {
      "key": "from",
      "label": "From",
      "type": "text",
      "max": 240,
      "role": "code"
    },
    {
      "key": "to",
      "label": "To",
      "type": "text",
      "max": 240,
      "role": "code"
    },
    {
      "key": "language",
      "label": "Language",
      "type": "select",
      "options": [
        "tsx",
        "ts",
        "js",
        "css",
        "json",
        "bash",
        "python",
        "plain"
      ]
    },
    {
      "key": "theme",
      "label": "Theme",
      "type": "select",
      "options": [
        "dark",
        "light"
      ]
    },
    {
      "key": "card",
      "label": "Card",
      "type": "boolean"
    },
    {
      "key": "cluster",
      "label": "Cluster",
      "type": "select",
      "options": [
        "top-left",
        "top-right",
        "center",
        "bottom-left"
      ]
    },
    {
      "key": "scatterAt",
      "label": "Scatter at",
      "type": "number",
      "step": 1,
      "min": 10,
      "max": 300
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 9999
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    }
  ],
  "name": "Glyph Scatter",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "glyph-scatter",
    "bundleSha256": "92a04305e3e54103fd045a4827e6fc83cccadd8291c0f458957862af34653c5b",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:36:17.207Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/16x9-paper.png",
        "sha256": "855a13da4688686fb3e768d8cc431297d7d609052716a9bc99b8c60039933d7c"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/16x9-night.png",
        "sha256": "7f703b61805e297ca95a317d28661a7c7afa8c8a222da4c6f3b668bd54809b08"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/16x9-color.png",
        "sha256": "7c5b6a3dd3b09e1fe08a76024d608f9350754264464cb3c16119b4b481895c96"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/9x16-paper.png",
        "sha256": "04e6f1e76bd0c2f864b5cde6e86607fb53c6757883d2780b185f6b22eae4ef80"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/9x16-night.png",
        "sha256": "4f0e5196f2007894f4cb1adc353494da80e7d9d692f74dee852de5f34e1f4354"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/9x16-color.png",
        "sha256": "6021869ef5a8df198d58da853de847670571ec51797f328d92933fdbcc062f76"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/1x1-paper.png",
        "sha256": "5c8f3db91def2324ead20a2b9dddd3715ba8e4d1627f21c57cd0f03e981446d0"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/1x1-night.png",
        "sha256": "d25b2717f035815b479ee106136891d1b68b63ebb43683f5b24a05eabb9b7f58"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/1x1-color.png",
        "sha256": "67bffe0593eb42e39dfb0f37d787fdfd48b17a6cb52822253e866e29cb827dd9"
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
          "glyph-scatter--16x9",
          "glyph-scatter--9x16",
          "glyph-scatter--1x1"
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
            "paperNight": 25.790391710069443,
            "paperColor": 12.172987196180555,
            "region": {
              "left": 454,
              "top": 323,
              "width": 988,
              "height": 424
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 22.74807400173611,
            "paperColor": 11.36819118923611,
            "region": {
              "left": 90,
              "top": 284,
              "width": 852,
              "height": 1297
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 24.870985243055557,
            "paperColor": 10.6826171875,
            "region": {
              "left": 234,
              "top": 400,
              "width": 597,
              "height": 276
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
            "occupancy": 0.2847692172933989,
            "bad": [],
            "measured": 81
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.28563653470647526,
            "bad": [],
            "measured": 81
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.286022009112287,
            "bad": [],
            "measured": 81
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7537910997732428,
            "bad": [],
            "measured": 81
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7540945583480307,
            "bad": [],
            "measured": 81
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7523243833284344,
            "bad": [],
            "measured": 81
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.1991465882191926,
            "bad": [],
            "measured": 81
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.19948072679003018,
            "bad": [],
            "measured": 81
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.20020611125108484,
            "bad": [],
            "measured": 81
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 11.598958333333334,
        "frames": [
          9,
          64,
          109
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 50,
            "averageChannelDifference": 12.635416666666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/16x9-duration-50-frame-6.png",
                "sha256": "bed3b5726c62af02cbadfb796a69d59428d657aa37f5cf19220bef01049cdb21",
                "alphaMass": 3500
              },
              {
                "frame": 49,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/16x9-duration-50-frame-49.png",
                "sha256": "341074c2077dcc61123bc6b91e7d30e76e5a9f8a96bd45e6e0560cb2128f0553",
                "alphaMass": 7613
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/16x9-duration-50-frame-44.png",
                "sha256": "341074c2077dcc61123bc6b91e7d30e76e5a9f8a96bd45e6e0560cb2128f0553",
                "alphaMass": 7613
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 11.598958333333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/16x9-duration-600-frame-9.png",
                "sha256": "0576f142009484a3be4375ef7bd3f0abd5d5dcd73daf7e5336e9f0684ad6d297",
                "alphaMass": 3620
              },
              {
                "frame": 64,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/16x9-duration-600-frame-64.png",
                "sha256": "341074c2077dcc61123bc6b91e7d30e76e5a9f8a96bd45e6e0560cb2128f0553",
                "alphaMass": 7613
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/16x9-duration-600-frame-528.png",
                "sha256": "341074c2077dcc61123bc6b91e7d30e76e5a9f8a96bd45e6e0560cb2128f0553",
                "alphaMass": 7613
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/16x9-duration-600-frame-599.png",
                "sha256": "341074c2077dcc61123bc6b91e7d30e76e5a9f8a96bd45e6e0560cb2128f0553",
                "alphaMass": 7613
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 50,
            "averageChannelDifference": 29.84917534722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/9x16-duration-50-frame-6.png",
                "sha256": "89452a2f1fa64ada461e8ff760a9d07e937a6a445901c3b9dfff70aa2b491307",
                "alphaMass": 6326
              },
              {
                "frame": 49,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/9x16-duration-50-frame-49.png",
                "sha256": "d995c55a3b64dbaaac0edbf37982658ada3b0b394dbf45c6896afedebe6fc3e7",
                "alphaMass": 12265
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/9x16-duration-50-frame-44.png",
                "sha256": "d995c55a3b64dbaaac0edbf37982658ada3b0b394dbf45c6896afedebe6fc3e7",
                "alphaMass": 12265
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 29.00824652777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/9x16-duration-600-frame-9.png",
                "sha256": "0b9b2d0f70d11084acdfae338567d79676e519c35fa67993acd88f1d0ce8563e",
                "alphaMass": 6306
              },
              {
                "frame": 64,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/9x16-duration-600-frame-64.png",
                "sha256": "d995c55a3b64dbaaac0edbf37982658ada3b0b394dbf45c6896afedebe6fc3e7",
                "alphaMass": 12265
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/9x16-duration-600-frame-528.png",
                "sha256": "d995c55a3b64dbaaac0edbf37982658ada3b0b394dbf45c6896afedebe6fc3e7",
                "alphaMass": 12265
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/9x16-duration-600-frame-599.png",
                "sha256": "d995c55a3b64dbaaac0edbf37982658ada3b0b394dbf45c6896afedebe6fc3e7",
                "alphaMass": 12265
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 50,
            "averageChannelDifference": 9.17361111111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/1x1-duration-50-frame-6.png",
                "sha256": "2e4e9a3c392c9b9f98c1b9ced90da957d7048dd025221b2ab8a5cfecd3f1de9d",
                "alphaMass": 2580
              },
              {
                "frame": 49,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/1x1-duration-50-frame-49.png",
                "sha256": "71f09cf9eb8bac046a73d7a86d4ea10c7a524bbc89c37a3efd0472d17a244611",
                "alphaMass": 5316
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/1x1-duration-50-frame-44.png",
                "sha256": "71f09cf9eb8bac046a73d7a86d4ea10c7a524bbc89c37a3efd0472d17a244611",
                "alphaMass": 5316
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 9.200846354166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/1x1-duration-600-frame-9.png",
                "sha256": "2405ff8eb87624946810ab3e471866fc512cb55f56fb89303faa8f341dc4fbb8",
                "alphaMass": 2627
              },
              {
                "frame": 64,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/1x1-duration-600-frame-64.png",
                "sha256": "71f09cf9eb8bac046a73d7a86d4ea10c7a524bbc89c37a3efd0472d17a244611",
                "alphaMass": 5316
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/1x1-duration-600-frame-528.png",
                "sha256": "71f09cf9eb8bac046a73d7a86d4ea10c7a524bbc89c37a3efd0472d17a244611",
                "alphaMass": 5316
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/glyph-scatter/1x1-duration-600-frame-599.png",
                "sha256": "71f09cf9eb8bac046a73d7a86d4ea10c7a524bbc89c37a3efd0472d17a244611",
                "alphaMass": 5316
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "code",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Theme code glyphs scatter and resolve into a createTheme snippet; tokens in blue, teal and warm, no purple."
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
      "bundleSha256": "92a04305e3e54103fd045a4827e6fc83cccadd8291c0f458957862af34653c5b",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/glyph-scatter/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/glyph-scatter/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/glyph-scatter/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 64,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "d0c4ceac7c7a011b9f9f0889b351efcc5e92ca8ed15c20ae4e9f42ef8f9aa162",
        "loop": "6750da2a9b1342c9e8e17f47586feb4ed4653a1945a4997ee835f56d85720d88",
        "detail": "89a8a25a25f270fe49bc53c847d81d7de88fc9bf39df2f515b394264221c2cbd"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/glyph-scatter/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/glyph-scatter/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/glyph-scatter/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 64,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "6144609407ad97f0f67dc6a17d8aa49cb90ae7b75a904408eb655a03636e94fb",
        "loop": "9bc17e54c62dee09bd1fa69184f5614f9a0bb06401b7a3cb52873c51041e1b5d",
        "detail": "a05c6c6b250fdf813a42321828179fcbe87f44060a909a938ddb5d3c48c7757b"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/glyph-scatter/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/glyph-scatter/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/glyph-scatter/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 64,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "2f668485cbea716f0e6bf2886ccf64347e36b5e7782d5f65f1cd1dfc50eecfcf",
        "loop": "06b1662b802af6236eba7ebde5b61c1d9eaf129b5d7963a181ff2f241701c5f3",
        "detail": "e1fd399ef1cbfa2c4c9e33ea254975eee6feea3afa17e62e0550ff2a7ad66421"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/92a04305e3e54103fd045a4827e6fc83cccadd8291c0f458957862af34653c5b/index.mjs",
    "sha256": "92a04305e3e54103fd045a4827e6fc83cccadd8291c0f458957862af34653c5b",
    "bytes": 170858,
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
    "at": "2026-10-09T03:15:17.989Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
