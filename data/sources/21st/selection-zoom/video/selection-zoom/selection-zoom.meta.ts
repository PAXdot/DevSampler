// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "text/emphasis",
  "tags": [
    "selection",
    "highlight",
    "zoom",
    "keynote",
    "emphasis",
    "text",
    "minimal"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 90,
      "min": 45,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 36,
      "out": 0
    },
    "markers": {
      "settled": 37,
      "zoom": 30
    },
    "beats": [
      4,
      20,
      30
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
      "key": "phrase",
      "type": "text",
      "maxChars": 60,
      "lines": 2,
      "role": "headline"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "phrase",
      "prop": "words",
      "settledBy": 16,
      "easing": "linear"
    },
    {
      "target": "selection",
      "prop": "scaleX",
      "from": "0",
      "settledBy": 20,
      "easing": "ease"
    },
    {
      "target": "camera",
      "prop": "scale",
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
      90
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "motion recipe from research V15 (selection highlight, snap zoom); own copy"
  },
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "reveal"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "phrase": "Design that ships itself",
    "color": "#F4F4F5",
    "accent": "#7C9CFF",
    "fontFamily": "Geist",
    "zoom": 2.8,
    "select": "phrase",
    "wordFrames": 4
  },
  "fields": [
    {
      "key": "phrase",
      "label": "Phrase",
      "type": "text",
      "max": 60,
      "role": "headline"
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
    },
    {
      "key": "zoom",
      "label": "Zoom",
      "type": "number",
      "min": 1.5,
      "max": 4
    },
    {
      "key": "select",
      "label": "Select",
      "type": "select",
      "options": [
        "phrase",
        "last-word"
      ]
    },
    {
      "key": "wordFrames",
      "label": "Word frames",
      "type": "number",
      "step": 1,
      "min": 2,
      "max": 8
    }
  ],
  "name": "Selection Highlight Zoom",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "selection-zoom",
    "bundleSha256": "1566eb941b9af238055abcf97c0dc4a6b99bbcf1267f8ebbd9be2bf6c4a84d9d",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:02:01.952Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/16x9-paper.png",
        "sha256": "eea285bd7b6690bf8a60b46c14b8605517c54b9a2e2a53b3cee27a210b58a009"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/16x9-night.png",
        "sha256": "63617106e0df26735fb253441c29bd9047b10a036fd2aff11c464fb00ebb260f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/16x9-color.png",
        "sha256": "bcb673e6513728735190c935b70067e09a072c6b5e42da1d958b566a2e33590a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/9x16-paper.png",
        "sha256": "92f6f27b3d7d3c1337a8a8854ec37d96d680a67fab72ca7b9ca7e2d0a965a1e3"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/9x16-night.png",
        "sha256": "e5b577965e3902f85e34803d311ccce34785ddda3bd72e65ee4ce8d40af6338d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/9x16-color.png",
        "sha256": "2183dff2149e062694710271c279413eb43c79d717a1d8a2a2fa30d4882b0dfe"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/1x1-paper.png",
        "sha256": "9a63d8821a7d9819e3848eddfeb4d46471cba475c56e8c66d77b13e931ee442a"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/1x1-night.png",
        "sha256": "cf9cc25ddfa12fe6aee2d51562d87b610b5b24359357fd7a66c745de1e069c18"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/1x1-color.png",
        "sha256": "117b2d8c3da544fc4ca2a1a2fb9778c55bc66f001b66751871949760904e5b4f"
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
          "selection-zoom--16x9",
          "selection-zoom--9x16",
          "selection-zoom--1x1"
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
            "paperNight": 69.90006510416667,
            "paperColor": 67.89832899305556,
            "region": {
              "left": 347,
              "top": 479,
              "width": 1226,
              "height": 127
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 49.810872395833336,
            "paperColor": 57.771077473958336,
            "region": {
              "left": 200,
              "top": 473,
              "width": 680,
              "height": 978
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 73.91021050347223,
            "paperColor": 67.38747829861111,
            "region": {
              "left": 195,
              "top": 506,
              "width": 690,
              "height": 70
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
            "occupancy": 0.21193688112676487,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.21646483846453538,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.15537443543947074,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.919089906410095,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9469411156952494,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.621081967058943,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.11694849979315,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.12226434069283865,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.08788856954151879,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 18.100260416666668,
        "frames": [
          5,
          37,
          89
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 18.100260416666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/16x9-duration-45-frame-5.png",
                "sha256": "ae119c2ea77831201e76d5d5840c1c6ebea3921841e9b0bfd33720e57fc369e3",
                "alphaMass": 296
              },
              {
                "frame": 37,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/16x9-duration-45-frame-37.png",
                "sha256": "6a93f9cd33988e4b30f1cc2ea60bc80443ddb9b349f3048161dc9154f8234ede",
                "alphaMass": 21109
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/16x9-duration-45-frame-39.png",
                "sha256": "6a93f9cd33988e4b30f1cc2ea60bc80443ddb9b349f3048161dc9154f8234ede",
                "alphaMass": 21109
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/16x9-duration-45-frame-44.png",
                "sha256": "6a93f9cd33988e4b30f1cc2ea60bc80443ddb9b349f3048161dc9154f8234ede",
                "alphaMass": 21109
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 18.100260416666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/16x9-duration-600-frame-5.png",
                "sha256": "ae119c2ea77831201e76d5d5840c1c6ebea3921841e9b0bfd33720e57fc369e3",
                "alphaMass": 296
              },
              {
                "frame": 37,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/16x9-duration-600-frame-37.png",
                "sha256": "6a93f9cd33988e4b30f1cc2ea60bc80443ddb9b349f3048161dc9154f8234ede",
                "alphaMass": 21109
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/16x9-duration-600-frame-528.png",
                "sha256": "6a93f9cd33988e4b30f1cc2ea60bc80443ddb9b349f3048161dc9154f8234ede",
                "alphaMass": 21109
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/16x9-duration-600-frame-599.png",
                "sha256": "6a93f9cd33988e4b30f1cc2ea60bc80443ddb9b349f3048161dc9154f8234ede",
                "alphaMass": 21109
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 50.91015625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/9x16-duration-45-frame-5.png",
                "sha256": "b42e059f53d2cd45e3c40d0db371034c94058ec8aa5ce7bd538d1a5a96f56a22",
                "alphaMass": 827
              },
              {
                "frame": 37,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/9x16-duration-45-frame-37.png",
                "sha256": "90524a62afd0e9082e7f64a0f73d2423acbaf0c290a6c59af71307ad4181bb5a",
                "alphaMass": 69717
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/9x16-duration-45-frame-39.png",
                "sha256": "cfec23a1d6fdf7414cc962a0fedb408caa9a3243f02b7709c5b89c755a2d83b9",
                "alphaMass": 69717
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/9x16-duration-45-frame-44.png",
                "sha256": "5da2bef1ad8ac6c40f857934c4f0ba3d815fa2bf02ee4275a703f8fd6bee59b8",
                "alphaMass": 69717
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 50.91015625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/9x16-duration-600-frame-5.png",
                "sha256": "b42e059f53d2cd45e3c40d0db371034c94058ec8aa5ce7bd538d1a5a96f56a22",
                "alphaMass": 827
              },
              {
                "frame": 37,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/9x16-duration-600-frame-37.png",
                "sha256": "9c682b935a72feaf87acd211f45868792845285e779f835fdd53e39b54a67d49",
                "alphaMass": 69717
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/9x16-duration-600-frame-528.png",
                "sha256": "f384b435fbf5b6d34bbe401899b42ffc254f546f71621ae5284d283a8adde09a",
                "alphaMass": 69717
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/9x16-duration-600-frame-599.png",
                "sha256": "4d44514d284f737d0fa4d7c4aaec78567d9d1613190c496459aa0dd1863a1dfc",
                "alphaMass": 69717
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 15.412543402777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/1x1-duration-45-frame-5.png",
                "sha256": "283b7f588909d93d161fa4e003b813a87b4c3cf5e4989233443fdc02be196250",
                "alphaMass": 173
              },
              {
                "frame": 37,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/1x1-duration-45-frame-37.png",
                "sha256": "f2f1beab7af8313f255bd7ad470f4a1b9fbf06854fd80e6e248880b892462fe8",
                "alphaMass": 12429
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/1x1-duration-45-frame-39.png",
                "sha256": "f2f1beab7af8313f255bd7ad470f4a1b9fbf06854fd80e6e248880b892462fe8",
                "alphaMass": 12429
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/1x1-duration-45-frame-44.png",
                "sha256": "f2f1beab7af8313f255bd7ad470f4a1b9fbf06854fd80e6e248880b892462fe8",
                "alphaMass": 12429
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 15.412543402777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/1x1-duration-600-frame-5.png",
                "sha256": "283b7f588909d93d161fa4e003b813a87b4c3cf5e4989233443fdc02be196250",
                "alphaMass": 173
              },
              {
                "frame": 37,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/1x1-duration-600-frame-37.png",
                "sha256": "f2f1beab7af8313f255bd7ad470f4a1b9fbf06854fd80e6e248880b892462fe8",
                "alphaMass": 12429
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/1x1-duration-600-frame-528.png",
                "sha256": "f2f1beab7af8313f255bd7ad470f4a1b9fbf06854fd80e6e248880b892462fe8",
                "alphaMass": 12429
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/selection-zoom/1x1-duration-600-frame-599.png",
                "sha256": "f2f1beab7af8313f255bd7ad470f4a1b9fbf06854fd80e6e248880b892462fe8",
                "alphaMass": 12429
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
        "note": "Phrase is selected like text and zooms up; title card."
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
      "bundleSha256": "1566eb941b9af238055abcf97c0dc4a6b99bbcf1267f8ebbd9be2bf6c4a84d9d",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.015260Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/selection-zoom/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/selection-zoom/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/selection-zoom/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 37,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "cb03e78f68b7e246a0055662e52e9c6ae821fc4bc687b5a372833822ea57bb54",
        "loop": "37ba5a22bcb799570f72ef5ec375df1439e6f59848eadc3add989ba209b89f6d",
        "detail": "3cb88f51a5f92200d4722a1ba7359efc18ee7f2e46ad975426b4640da581e001"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/selection-zoom/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/selection-zoom/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/selection-zoom/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 37,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "c33b8aa46996d88c7fc658bdf9f9e7425b6aa3eacd9cea6770746cc637db527a",
        "loop": "f9ca7286916b2641449d1ae29ffac63fbba04db5cdf2d5e8190fed7866a058d4",
        "detail": "76c0b2b8783a09863f41090f995a259dc606c995ab1e541ab06bf8242067cff3"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/selection-zoom/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/selection-zoom/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/selection-zoom/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 37,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "72dff7e7ba45f0375a4096287e7400ee412c20667e0ff91d949f985b38bace1b",
        "loop": "9dc2fce3af19188b070939db26fd9e921fa1859a526a30d0cee5e9064a143ae1",
        "detail": "ccbd3eb935aa767d81c64dbde73e3a0d70b9d61d0475e53941415d4ac214f276"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/1566eb941b9af238055abcf97c0dc4a6b99bbcf1267f8ebbd9be2bf6c4a84d9d/index.mjs",
    "sha256": "1566eb941b9af238055abcf97c0dc4a6b99bbcf1267f8ebbd9be2bf6c4a84d9d",
    "bytes": 159870,
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
    "at": "2026-10-07T02:33:21.323Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
