// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "hand-drawn",
  "mechanic": [
    "hatching"
  ],
  "energy": "calm",
  "tags": [
    "title",
    "typography",
    "negative space",
    "hatching",
    "line drawing",
    "sol lewitt",
    "conceptual art",
    "minimal",
    "plotter",
    "reveal"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 165,
      "min": 130,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 128,
      "out": 0
    },
    "markers": {
      "settled": 128,
      "q1": 6,
      "q2": 22,
      "q3": 38,
      "q4": 54,
      "hero": 98,
      "caption": 104
    },
    "beats": [
      6,
      22,
      38,
      54,
      98
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
      "key": "word",
      "type": "text",
      "maxChars": 28,
      "lines": 3,
      "role": "headline"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 72,
      "lines": 3,
      "role": "caption"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "captionFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "hatch",
      "prop": "draw",
      "from": "outer-edge",
      "settledBy": 100,
      "easing": "ease"
    },
    {
      "target": "word",
      "prop": "margin",
      "settledBy": 124,
      "easing": "spring"
    },
    {
      "target": "caption",
      "prop": "y",
      "from": "below",
      "settledBy": 128,
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
      165
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (four-direction line hatching leaves the word as negative space, 2026-10-08)"
  },
  "defaults": {
    "word": "Ship faster",
    "caption": "Lines in four directions. The word is left blank.",
    "color": "#1C1C1C",
    "accent": "#D7263D",
    "background": "#F2EEE3",
    "accentQuadrant": "bottom-right",
    "density": 1,
    "fontFamily": "Inter",
    "captionFontFamily": "Geist Mono"
  },
  "fields": [
    {
      "key": "word",
      "label": "Word",
      "type": "text",
      "max": 28,
      "role": "headline"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 72,
      "role": "caption"
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
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "accentQuadrant",
      "label": "Accent quadrant",
      "type": "select",
      "options": [
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right"
      ]
    },
    {
      "key": "density",
      "label": "Density",
      "type": "number",
      "min": 0.6,
      "max": 1.6
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "captionFontFamily",
      "label": "Caption font family",
      "type": "font",
      "brand": "fonts.mono"
    }
  ],
  "name": "LeWitt Lines",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lewitt-line-instructions",
    "bundleSha256": "0bafb957de7edc7c17c216694703bbc1de874eea4b25204dd2118e3c258d7f99",
    "sourceSnapshot": {
      "sha256": "ade5a01d4641fd068192eed79974774977f5294a073659ffd767e9f0122d76ab",
      "files": 1800
    },
    "renderedAt": "2026-10-09T07:57:00.627Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/16x9-paper.png",
        "sha256": "c40a3f7aa640f538fc1db2a6113d903222a270acbad334b1bc237accaf42dad1"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/16x9-night.png",
        "sha256": "4f61101fe20876a26f5558c378533df35b2b589e21dca9e107545adb304dcab1"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/16x9-color.png",
        "sha256": "5882c8c11739a056ffd29a38354e032660cfe2a1197502d7288360bad8354ebf"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/9x16-paper.png",
        "sha256": "5591f1b5da52a8662e3184644c1d881a3836d209fe6de048dac5be6d69a87333"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/9x16-night.png",
        "sha256": "ab5e9d8c536e637c362774943690614f4c1824fad1bfb1be673c85925ce3a86c"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/9x16-color.png",
        "sha256": "e4903d19b2fd1d678c851e3f6afa999ecca5b2b6e95d49aaf89eb1ed91b92d5b"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/1x1-paper.png",
        "sha256": "e6e1bb648ff693494bff627c908e9d615f063721fad20c261fe688852f224093"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/1x1-night.png",
        "sha256": "afc3b608fd68d973d257703b4455e9aa70f50c3490f69d4cb055726520ef555e"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/1x1-color.png",
        "sha256": "7e45598897ebd6807f8617ec7bebf5369a3c5375039271800795175861014c88"
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
          "lewitt-line-instructions--16x9",
          "lewitt-line-instructions--9x16",
          "lewitt-line-instructions--1x1"
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
            "paperNight": 122.59217664930556,
            "paperColor": 38.16783311631944,
            "region": {
              "left": 58,
              "top": 53,
              "width": 1804,
              "height": 957
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 120.86371527777777,
            "paperColor": 38.184895833333336,
            "region": {
              "left": 52,
              "top": 106,
              "width": 975,
              "height": 1680
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 119.61184353298611,
            "paperColor": 41.235568576388886,
            "region": {
              "left": 42,
              "top": 42,
              "width": 996,
              "height": 974
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
            "occupancy": 1.1799535593558415,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1799535593558415,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1799535593558415,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.119516093474427,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.119516093474427,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1188497148473588,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.178724233177496,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.178724233177496,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.178724233177496,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 11.4384765625,
        "frames": [
          19,
          128,
          164
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 130,
            "averageChannelDifference": 11.735677083333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/16x9-duration-130-frame-15.png",
                "sha256": "abd4bf6e6ad5af2d119ac535bf81087fdbab4ed754bd4774ef322c2184bc9ddd",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/16x9-duration-130-frame-128.png",
                "sha256": "0d11a98af9c8230e4d34f03e8e9ef7e38704e79f024d4f074f19d8b23ebee7b9",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/16x9-duration-130-frame-114.png",
                "sha256": "e18fd587b29dbd464bce6ac2b91df09b62d264474459f6ffa1ebeec2f9b5dde7",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/16x9-duration-130-frame-129.png",
                "sha256": "0d11a98af9c8230e4d34f03e8e9ef7e38704e79f024d4f074f19d8b23ebee7b9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 11.4384765625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/16x9-duration-600-frame-19.png",
                "sha256": "f273d5cb7aac7fab8d95bec3d591ba7bf1aa0914401aaef9e32c67aa0580542a",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/16x9-duration-600-frame-128.png",
                "sha256": "0d11a98af9c8230e4d34f03e8e9ef7e38704e79f024d4f074f19d8b23ebee7b9",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/16x9-duration-600-frame-528.png",
                "sha256": "0d11a98af9c8230e4d34f03e8e9ef7e38704e79f024d4f074f19d8b23ebee7b9",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/16x9-duration-600-frame-599.png",
                "sha256": "0d11a98af9c8230e4d34f03e8e9ef7e38704e79f024d4f074f19d8b23ebee7b9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 130,
            "averageChannelDifference": 10.67849392361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/9x16-duration-130-frame-15.png",
                "sha256": "592fccc1bc3a43b809186a5c918845dd796177dd52328c2b1925c57adab35c65",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/9x16-duration-130-frame-128.png",
                "sha256": "bc8a0d4dcd1b5ee455bd4d4bf87200adb9c62d19ad99b586cc3f2b37781703dc",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/9x16-duration-130-frame-114.png",
                "sha256": "4eef3cba2a16c01595a70defdddbc379ecf09b32d24327031824a0078c230d8b",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/9x16-duration-130-frame-129.png",
                "sha256": "bc8a0d4dcd1b5ee455bd4d4bf87200adb9c62d19ad99b586cc3f2b37781703dc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 10.393012152777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/9x16-duration-600-frame-19.png",
                "sha256": "01e633721e0551fc1731bae36887965bb7ba78f5dfa295c7e96dbbc014087009",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/9x16-duration-600-frame-128.png",
                "sha256": "bc8a0d4dcd1b5ee455bd4d4bf87200adb9c62d19ad99b586cc3f2b37781703dc",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/9x16-duration-600-frame-528.png",
                "sha256": "bc8a0d4dcd1b5ee455bd4d4bf87200adb9c62d19ad99b586cc3f2b37781703dc",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/9x16-duration-600-frame-599.png",
                "sha256": "bc8a0d4dcd1b5ee455bd4d4bf87200adb9c62d19ad99b586cc3f2b37781703dc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 130,
            "averageChannelDifference": 10.025390625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/1x1-duration-130-frame-15.png",
                "sha256": "e6b8803e3b62fac4c5c377036b1c92f9f507d73e83393ce7976164d3e61f3e42",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/1x1-duration-130-frame-128.png",
                "sha256": "a72ac66d5316dcdc677e2d1440f990c88584583bbf2c5a4731b3071c276b2578",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/1x1-duration-130-frame-114.png",
                "sha256": "146e150b10c972fd5621a75bbd4500ae2258aaf894f921036abf3a278f704a71",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/1x1-duration-130-frame-129.png",
                "sha256": "a72ac66d5316dcdc677e2d1440f990c88584583bbf2c5a4731b3071c276b2578",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 9.700737847222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/1x1-duration-600-frame-19.png",
                "sha256": "32a286caa9d91f2f203adaddc2e2ff17cd2188813d3eb7a5b293c67f2f731712",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/1x1-duration-600-frame-128.png",
                "sha256": "a72ac66d5316dcdc677e2d1440f990c88584583bbf2c5a4731b3071c276b2578",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/1x1-duration-600-frame-528.png",
                "sha256": "a72ac66d5316dcdc677e2d1440f990c88584583bbf2c5a4731b3071c276b2578",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/lewitt-line-instructions/1x1-duration-600-frame-599.png",
                "sha256": "a72ac66d5316dcdc677e2d1440f990c88584583bbf2c5a4731b3071c276b2578",
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
        "note": "titleMatches: The visible subject is four tiled quadrants of hand-drawn lines in four distinct directions, with a blanked word ('Ship faster') cut out, directly matching both the provided title ('LeWitt Lines') and the named-slot caption ('Lines in four directions. The word is left blank.'). Motion samples (images 2-4) chronologically show the directional lines being drawn, supporting the claim of drawing/trace/scribble motion without any effects that break the rules. \n\nnoBakedHeading: No decorative category/title not accounted for by content or named slots is present. The only typographic heading is 'Ship faster,' supported in the named slot, while auxiliary text at the bottom (caption and icon) corresponds to editable interface fields. No decorative or unexplained heading appears.\n\nbrandAdherence: Images five through seven show the main subject rendered distinctly in three brand palettes that match the given expected palettes for background, line, and accent colors. The subject remains clear/legible, the four quadrant lines and word shapes inherit palette colors accordingly, and no quadrants keep a fixed color outside what is allowed. \n\nlanguageAdherence: With a language card present, all poster variants and the motion retain the same material system (flat surface, irregular but neat lines, sans and lightly handwritten type role), and the design strictly avoids glass, shadow, and random noise as required. Type, motion, layout, and roles remain consistent with card guidance across all images."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 45,
        "compared": 45,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "0bafb957de7edc7c17c216694703bbc1de874eea4b25204dd2118e3c258d7f99",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T08:05:06.544Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lewitt-line-instructions/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lewitt-line-instructions/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lewitt-line-instructions/16x9/detail.mp4",
      "bg": "#f2eee3",
      "posterFrame": 128,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 165,
      "sha256": {
        "poster": "00bf5001cde249b3a0404ec5b0fb0342d614031568954715474f62be78936e89",
        "loop": "fedc699f529b1e5ac2170990eef6c742f769b765bc3108d2aba2280668379b41",
        "detail": "4a3a1d230226a27834dd9b25ded7601d3f575dcab8f2c6f6b6eb14d57b652743"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lewitt-line-instructions/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lewitt-line-instructions/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lewitt-line-instructions/9x16/detail.mp4",
      "bg": "#f2eee3",
      "posterFrame": 128,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 165,
      "sha256": {
        "poster": "4900aa25f649abf368cecb22d2cbe06aa18547cb4a30518a2640761649a5804e",
        "loop": "496cd0bb624531c8fabc57ca4ca02b4eaafb5cc367004c19059dd1bf312de93b",
        "detail": "76c9353f0f2a5ebb34d6c7190f2d2ab74f996c517ff4a528e3f273af00aca82b"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lewitt-line-instructions/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lewitt-line-instructions/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lewitt-line-instructions/1x1/detail.mp4",
      "bg": "#f2eee3",
      "posterFrame": 128,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 165,
      "sha256": {
        "poster": "1796fa7fd1a4c3ddbf2e1901bea8d13279a69c778111c9659032e968ef1d978a",
        "loop": "213024067c9c9c63fe1cd4e3f49e701f676e2815b3bc05eb2093808a9075d145",
        "detail": "c458de4e8f21e68ba35f6799a50c2ab5aae6f277a94ac86c5d623a9115678893"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/0bafb957de7edc7c17c216694703bbc1de874eea4b25204dd2118e3c258d7f99/index.mjs",
    "sha256": "0bafb957de7edc7c17c216694703bbc1de874eea4b25204dd2118e3c258d7f99",
    "bytes": 169269,
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
    "at": "2026-10-09T09:01:23.377Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
