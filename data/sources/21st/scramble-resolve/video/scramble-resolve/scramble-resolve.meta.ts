// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "text/reveal",
  "tags": [
    "scramble",
    "decode",
    "glitch",
    "wordmark",
    "reveal",
    "text",
    "hacker"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 96,
      "min": 50,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 46,
      "out": 0
    },
    "markers": {
      "settled": 48,
      "locked": 27
    },
    "beats": [
      0,
      8,
      27,
      37
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
      "key": "text",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "name"
    },
    {
      "key": "tagline",
      "type": "text",
      "maxChars": 56,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "monoFontFamily": "fonts.mono",
    "color": "colors.text",
    "accent": "colors.primary",
    "accent2": "colors.secondary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "text",
      "prop": "glyphs",
      "from": "random",
      "settledBy": 27,
      "easing": "linear"
    },
    {
      "target": "underline",
      "prop": "scaleX",
      "from": "0",
      "settledBy": 37,
      "easing": "ease"
    },
    {
      "target": "tagline",
      "prop": "opacity",
      "settledBy": 48,
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
      96
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "motion recipe from research V03 (scramble wordmark); own copy and graphics"
  },
  "job": "titles",
  "language": "pixel-terminal",
  "mechanic": [
    "type"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "monoFontFamily": "Geist Mono",
    "text": "Meridian",
    "tagline": "Ship on time, every time",
    "color": "#F4F4F5",
    "accent": "#7C9CFF",
    "accent2": "#5EEAD4",
    "fontFamily": "Geist",
    "charset": "symbols",
    "lockEvery": 2.3,
    "caps": false,
    "underline": true
  },
  "fields": [
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 24,
      "role": "name"
    },
    {
      "key": "tagline",
      "label": "Tagline",
      "type": "text",
      "max": 56,
      "role": "subline"
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
      "key": "accent2",
      "label": "Accent 2",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "charset",
      "label": "Charset",
      "type": "select",
      "options": [
        "symbols",
        "letters",
        "binary",
        "hex"
      ]
    },
    {
      "key": "lockEvery",
      "label": "Lock every",
      "type": "number",
      "min": 1,
      "max": 5
    },
    {
      "key": "caps",
      "label": "Caps",
      "type": "boolean"
    },
    {
      "key": "underline",
      "label": "Underline",
      "type": "boolean"
    }
  ],
  "name": "Scramble Resolve",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "scramble-resolve",
    "bundleSha256": "0e173fdd97015e10bcb6a3e551e5e3d8aa61888cdee580e0fe94b9a7a052764c",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:54:12.662Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/16x9-paper.png",
        "sha256": "9e5160d226b019891b6ed9a6127fef9a7394c729a32f556ad14e62e5357222e2"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/16x9-night.png",
        "sha256": "33bf863fb0e6f3399563b5b95ae2b487b24a0e30d25c3b422ce16592d3070ef0"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/16x9-color.png",
        "sha256": "02c9ef2273d5044174c0f91b55008968dc430c24bc61c96cddb005a4ef8365ec"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/9x16-paper.png",
        "sha256": "60718917111818926019ca493a20cd541a6f8dba379c374edfc489122ad2db77"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/9x16-night.png",
        "sha256": "b436aec5b6f55d484d6e0c4f6c762e882a2d499e8ead7423aa2e5085ceb16b4e"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/9x16-color.png",
        "sha256": "f7f427081f63c4ecc9ef4dc71859afd787dd377b001894be230faef72ad7711d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/1x1-paper.png",
        "sha256": "dd4ed439fa4811538527351207afdc0d7fb2cabc3a0911e9f1d2d214b6414d23"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/1x1-night.png",
        "sha256": "b4d5c3576679afbd6a21b418d9ad087825530e2a3fe34919575d91bae380efcc"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/1x1-color.png",
        "sha256": "0d1ec119ec5fe9ab877892becab9a1f7d710e1ddca5c572e5db083d2d09fb1dd"
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
          "scramble-resolve--16x9",
          "scramble-resolve--9x16",
          "scramble-resolve--1x1"
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
            "paperNight": 62.241617838541664,
            "paperColor": 35.18682183159722,
            "region": {
              "left": 454,
              "top": 391,
              "width": 1014,
              "height": 320
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 25.126356336805557,
            "paperColor": 18.22482638888889,
            "region": {
              "left": 181,
              "top": 532,
              "width": 717,
              "height": 874
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 65.77671983506944,
            "paperColor": 35.638943142361114,
            "region": {
              "left": 248,
              "top": 449,
              "width": 586,
              "height": 194
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
            "occupancy": 0.45191577225669083,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4472568174110351,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.34673616451253003,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8773558090610216,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8871848938102763,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7956532329474143,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.28332419454216684,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2764439776062841,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.21529155643738979,
            "bad": [],
            "measured": 9
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 20.147135416666668,
        "frames": [
          7,
          48,
          95
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 50,
            "averageChannelDifference": 20.33810763888889,
            "retainedAlpha": 1.0009798835667763,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/16x9-duration-50-frame-6.png",
                "sha256": "c48135ff5fdb0b60ef668f974ddd293fba3cdbf5354fddf8e668e64b34fbbe90",
                "alphaMass": 4004
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/16x9-duration-50-frame-48.png",
                "sha256": "78b5241a7a19d854eaef2945bbf6c805a2e53a80b50dc2df1f8524863603efb7",
                "alphaMass": 17366
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/16x9-duration-50-frame-44.png",
                "sha256": "5ed1b855e163a4bc17f89837affab10f33b08848d9f9e470d0257f706246676b",
                "alphaMass": 17349
              },
              {
                "frame": 49,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/16x9-duration-50-frame-49.png",
                "sha256": "cf336043ec5afa36e7d593a8c6b91870ad759fb0e6307802998c77eb638df62a",
                "alphaMass": 17366
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 20.147135416666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/16x9-duration-600-frame-7.png",
                "sha256": "4cba7d5926d66b15e63c5e461bf1b9fa3179f40f3f4b96a4a94ee617e26e631b",
                "alphaMass": 6383
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/16x9-duration-600-frame-48.png",
                "sha256": "78b5241a7a19d854eaef2945bbf6c805a2e53a80b50dc2df1f8524863603efb7",
                "alphaMass": 17366
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/16x9-duration-600-frame-528.png",
                "sha256": "bf2d2cd296d9cd017e66a6114041c2b68fd3fe76d9ecb13b3e14f85cdd859d44",
                "alphaMass": 17366
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/16x9-duration-600-frame-599.png",
                "sha256": "b92cf7404e509ca74aeea0c3bca4e21c6ee61595b3efda184f9983b6e5dea892",
                "alphaMass": 17366
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 50,
            "averageChannelDifference": 22.043619791666668,
            "retainedAlpha": 1.0018994301709487,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/9x16-duration-50-frame-6.png",
                "sha256": "43e2d42fb9c0f6d7f8173302ceec645922aacb2a43c6a645a95ed25af3f249da",
                "alphaMass": 1974
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/9x16-duration-50-frame-48.png",
                "sha256": "1623bb052ef0c1e3461f66cf91a8fdc5fc73317a01363a204af9adc4b8f2f47d",
                "alphaMass": 10022
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/9x16-duration-50-frame-44.png",
                "sha256": "2a95045e4e1f86b08ddb3ebf5f7065b4adcf743563e118e0804ef092585d46fe",
                "alphaMass": 10003
              },
              {
                "frame": 49,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/9x16-duration-50-frame-49.png",
                "sha256": "1623bb052ef0c1e3461f66cf91a8fdc5fc73317a01363a204af9adc4b8f2f47d",
                "alphaMass": 10022
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 21.68695746527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/9x16-duration-600-frame-7.png",
                "sha256": "30dd0776e27bbe01f67ed2dc23fe18496bbb14a3fdeae774b86dfa3514f9c8db",
                "alphaMass": 3192
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/9x16-duration-600-frame-48.png",
                "sha256": "1623bb052ef0c1e3461f66cf91a8fdc5fc73317a01363a204af9adc4b8f2f47d",
                "alphaMass": 10022
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/9x16-duration-600-frame-528.png",
                "sha256": "1623bb052ef0c1e3461f66cf91a8fdc5fc73317a01363a204af9adc4b8f2f47d",
                "alphaMass": 10022
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/9x16-duration-600-frame-599.png",
                "sha256": "1623bb052ef0c1e3461f66cf91a8fdc5fc73317a01363a204af9adc4b8f2f47d",
                "alphaMass": 10022
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 50,
            "averageChannelDifference": 17.24652777777778,
            "retainedAlpha": 1.0013414416025757,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/1x1-duration-50-frame-6.png",
                "sha256": "e87cc03174faf33fa2e85379eb8fe153791f0b153acd1c2d8655b996ccd331e5",
                "alphaMass": 2490
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/1x1-duration-50-frame-48.png",
                "sha256": "c84a95a4c445cbbacd9b3c8b28246e4118ba8ca2c5cb9bec3a92ba42ec5c8f62",
                "alphaMass": 11197
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/1x1-duration-50-frame-44.png",
                "sha256": "fc605913d221c6d637db6dda6f538ee186580e4f4fc9709f7f1da9eebbab4afc",
                "alphaMass": 11182
              },
              {
                "frame": 49,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/1x1-duration-50-frame-49.png",
                "sha256": "c84a95a4c445cbbacd9b3c8b28246e4118ba8ca2c5cb9bec3a92ba42ec5c8f62",
                "alphaMass": 11197
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 16.07790798611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/1x1-duration-600-frame-7.png",
                "sha256": "b2f825b77b79bf4ccb0d72137d0d123365c04aa941bca1e358832b868773cc9f",
                "alphaMass": 4015
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/1x1-duration-600-frame-48.png",
                "sha256": "c84a95a4c445cbbacd9b3c8b28246e4118ba8ca2c5cb9bec3a92ba42ec5c8f62",
                "alphaMass": 11197
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/1x1-duration-600-frame-528.png",
                "sha256": "c84a95a4c445cbbacd9b3c8b28246e4118ba8ca2c5cb9bec3a92ba42ec5c8f62",
                "alphaMass": 11197
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/scramble-resolve/1x1-duration-600-frame-599.png",
                "sha256": "c84a95a4c445cbbacd9b3c8b28246e4118ba8ca2c5cb9bec3a92ba42ec5c8f62",
                "alphaMass": 11197
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
        "note": "Scrambled glyphs resolve into a spaced wordmark with a subline."
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
      "bundleSha256": "0e173fdd97015e10bcb6a3e551e5e3d8aa61888cdee580e0fe94b9a7a052764c",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.948164Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/scramble-resolve/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/scramble-resolve/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/scramble-resolve/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 48,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 96,
      "sha256": {
        "poster": "b5b17603dd308b3f177a34953912d2452ac8a3b8668534ff78e82ae617b42feb",
        "loop": "0de5f581e865841bde699a6cb72da5eb1f3b9da1057660429a842354987367da",
        "detail": "fe468ea3b613e9ebd9c7e0a5f50d85f6cafc5e01d64f65215dd0558e7e33bd65"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/scramble-resolve/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/scramble-resolve/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/scramble-resolve/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 48,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 96,
      "sha256": {
        "poster": "688cd45f1684aeb27e99dc9690c3afed9c57c2e9d79c0bd46d04e62e5bb5da9d",
        "loop": "897f879536133a867ca5258e7a3d214125bed6dc024e5b7e935fcee6835c8141",
        "detail": "1c44e1769494c310a3e0f59b44dfe1306851865130064ef5da3919297e44847c"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/scramble-resolve/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/scramble-resolve/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/scramble-resolve/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 48,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 96,
      "sha256": {
        "poster": "a6c6dc2393f97a0480d806e80e6cf4a0bfe1b0ed5dd0b9c5a1c8fbff589496fe",
        "loop": "03bcb5b798417522f4efffd831b2550fbb996e30b472b02f05e0f0c77aae1a54",
        "detail": "7dc0f11a5b116ed0683cba8fb275211f42ed9a89ab1f65fbba70c2ec7f0ca8b3"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/0e173fdd97015e10bcb6a3e551e5e3d8aa61888cdee580e0fe94b9a7a052764c/index.mjs",
    "sha256": "0e173fdd97015e10bcb6a3e551e5e3d8aa61888cdee580e0fe94b9a7a052764c",
    "bytes": 161618,
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
    "at": "2026-10-07T02:23:00.957Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
