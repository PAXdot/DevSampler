// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "data/number",
  "tags": [
    "version",
    "iteration",
    "counter",
    "chip",
    "history",
    "changelog"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 110,
      "min": 45,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 76,
      "out": 0
    },
    "markers": {
      "settled": 76
    },
    "beats": [
      0,
      14,
      23,
      32,
      41,
      50,
      59
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
      "key": "statement",
      "type": "text",
      "maxChars": 40,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "chipPrefix",
      "type": "text",
      "maxChars": 4,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "subline",
      "type": "text",
      "maxChars": 60,
      "lines": 2,
      "role": "subline"
    },
    {
      "key": "steps",
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
      "target": "chip",
      "prop": "count",
      "from": "1",
      "settledBy": 59,
      "easing": "linear"
    },
    {
      "target": "chip",
      "prop": "glow",
      "settledBy": 67,
      "easing": "ease"
    },
    {
      "target": "subline",
      "prop": "y",
      "from": "below",
      "settledBy": 76,
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
      110
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study V04, twitter-remotion-research)"
  },
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "count"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "statement": "Every edit becomes",
    "chipPrefix": "v",
    "steps": 6,
    "stepFrames": 9,
    "subline": "Roll back to any version in one click",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "statement",
      "label": "Statement",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "chipPrefix",
      "label": "Chip prefix",
      "type": "text",
      "max": 4,
      "role": "label"
    },
    {
      "key": "steps",
      "label": "Steps",
      "type": "number",
      "step": 1,
      "min": 2,
      "max": 24,
      "role": "value"
    },
    {
      "key": "stepFrames",
      "label": "Step frames",
      "type": "number",
      "step": 1,
      "min": 3,
      "max": 30
    },
    {
      "key": "subline",
      "label": "Subline",
      "type": "text",
      "max": 60,
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Version Stepper",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "version-stepper",
    "bundleSha256": "54141155802121f129eaf2e68c0672c69c613bc8c33c0aac7167a168b0599ca0",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:05:45.974Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/16x9-paper.png",
        "sha256": "79c62a3e07a5d1c72503752e6ae577164be5b4e0d6765ce6ff5092f3514b7f34"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/16x9-night.png",
        "sha256": "57880093b85c80c4a90f7c31766158cb94bae0db1bd567d98d26f41604616fae"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/16x9-color.png",
        "sha256": "63a4757a741c7491b46567a8740d324b5612ddf0112248e17da21370671cd2ee"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/9x16-paper.png",
        "sha256": "71c2700e2c1f9c29053765f0973f4367cfae3083ed77433a43765d65399b7860"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/9x16-night.png",
        "sha256": "056dc263991dd863ae0946e5d4aab5b373bacaa7dd44730ad52baecea7a2be35"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/9x16-color.png",
        "sha256": "7a8729dbd3f1d94ecf675994363cb9cf719f69f5597e2d5e3497fa3d92331bac"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/1x1-paper.png",
        "sha256": "1342c51b3cd98a8424ee41f0e1b407507373a47b4dd47f3cc54e295e93e43026"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/1x1-night.png",
        "sha256": "f4237a7a488ddcb61d21e719270d7f2c0114f74f5406d0ac3c10dd789f5a7a05"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/1x1-color.png",
        "sha256": "4fdd40fa9fadff994c754109cb7091f96d19fa548d9fba8d43bdc52a2dc79d63"
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
          "version-stepper--16x9",
          "version-stepper--9x16",
          "version-stepper--1x1"
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
            "paperNight": 49.961208767361114,
            "paperColor": 56.376193576388886,
            "region": {
              "left": 364,
              "top": 349,
              "width": 1257,
              "height": 321
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 33.286648220486114,
            "paperColor": 38.82750108506944,
            "region": {
              "left": 166,
              "top": 447,
              "width": 805,
              "height": 957
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 50.508816189236114,
            "paperColor": 56.09551323784722,
            "region": {
              "left": 205,
              "top": 432,
              "width": 707,
              "height": 181
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
            "occupancy": 0.5745337112950891,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5672761645810588,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.379703396034983,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8979836448950723,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9390015276086431,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.094647925265571,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.32213995852113136,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.32118057580637804,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.21362086358320193,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.0107421875,
        "frames": [
          11,
          76,
          109
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 18.707682291666668,
            "retainedAlpha": 0.9995230145480563,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/16x9-duration-45-frame-5.png",
                "sha256": "e4b1e830a3447200f71f9f98fbf74d9b6e0337b57fbfb8c4ba5b185fab0e3fa6",
                "alphaMass": 6154
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/16x9-duration-45-frame-44.png",
                "sha256": "5dbaf39c1e200e8688c6ef76600239e59182bd6cc141f2fa812bdd2dcf77028c",
                "alphaMass": 20965
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/16x9-duration-45-frame-39.png",
                "sha256": "207a500f14a35e2fe2f00be8b8b1a0c446e7c42ad35404f084bdece8cef37731",
                "alphaMass": 20955
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 9.0107421875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/16x9-duration-600-frame-11.png",
                "sha256": "e6f98f73e4a38cdc740d432c0933dba1885eec52c9d7b340e3d29568d01271dd",
                "alphaMass": 17324
              },
              {
                "frame": 76,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/16x9-duration-600-frame-76.png",
                "sha256": "d94f1d061e4687b45f97299958979da53b58c0b601067ef6b8e6bbda09286678",
                "alphaMass": 20978
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/16x9-duration-600-frame-528.png",
                "sha256": "5dbaf39c1e200e8688c6ef76600239e59182bd6cc141f2fa812bdd2dcf77028c",
                "alphaMass": 20965
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/16x9-duration-600-frame-599.png",
                "sha256": "5dbaf39c1e200e8688c6ef76600239e59182bd6cc141f2fa812bdd2dcf77028c",
                "alphaMass": 20965
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 20.64887152777778,
            "retainedAlpha": 0.9995436105476674,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/9x16-duration-45-frame-5.png",
                "sha256": "ce67527b8eed5e7129322d7812f76fb37b9e471cc17db0e601f5768253d90725",
                "alphaMass": 5524
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/9x16-duration-45-frame-44.png",
                "sha256": "d06ad5395685b67d881ed916c8dc44ac59030e03015a9020ea06b2fbd78990d9",
                "alphaMass": 19720
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/9x16-duration-45-frame-39.png",
                "sha256": "23b556e20d0943e21362f8d00190025a8e82b3515fad1ff14cf062100f04285c",
                "alphaMass": 19711
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 15.37619357638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/9x16-duration-600-frame-11.png",
                "sha256": "44957c694b77fd04ddb12a9e7330db4256808b4c119c756312c0130a6c296eb1",
                "alphaMass": 15077
              },
              {
                "frame": 76,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/9x16-duration-600-frame-76.png",
                "sha256": "8c2113a519b11a65afb5757bae6a7e43b0dfc48aaacecc6613d6bed876f119cd",
                "alphaMass": 19715
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/9x16-duration-600-frame-528.png",
                "sha256": "d06ad5395685b67d881ed916c8dc44ac59030e03015a9020ea06b2fbd78990d9",
                "alphaMass": 19720
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/9x16-duration-600-frame-599.png",
                "sha256": "d06ad5395685b67d881ed916c8dc44ac59030e03015a9020ea06b2fbd78990d9",
                "alphaMass": 19720
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 10.245551215277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/1x1-duration-45-frame-5.png",
                "sha256": "8dfc725205b51510cfaec53270f8601e058c42babb73c542d6dd336d70fd47eb",
                "alphaMass": 3742
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/1x1-duration-45-frame-44.png",
                "sha256": "c07e002b7be6463869eedb554a7a988565ab00b77a9e5d23f5a2a2e215656a16",
                "alphaMass": 12320
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/1x1-duration-45-frame-39.png",
                "sha256": "c07e002b7be6463869eedb554a7a988565ab00b77a9e5d23f5a2a2e215656a16",
                "alphaMass": 12320
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 5.922526041666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/1x1-duration-600-frame-11.png",
                "sha256": "ace34694419d7dd1a253e8f421c6179ca99772a45ef50cfaf83d3cd61fccb22a",
                "alphaMass": 10285
              },
              {
                "frame": 76,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/1x1-duration-600-frame-76.png",
                "sha256": "c07e002b7be6463869eedb554a7a988565ab00b77a9e5d23f5a2a2e215656a16",
                "alphaMass": 12320
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/1x1-duration-600-frame-528.png",
                "sha256": "c07e002b7be6463869eedb554a7a988565ab00b77a9e5d23f5a2a2e215656a16",
                "alphaMass": 12320
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/version-stepper/1x1-duration-600-frame-599.png",
                "sha256": "c07e002b7be6463869eedb554a7a988565ab00b77a9e5d23f5a2a2e215656a16",
                "alphaMass": 12320
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
        "note": "A line whose version badge steps from v1 to v6; title card."
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
      "bundleSha256": "54141155802121f129eaf2e68c0672c69c613bc8c33c0aac7167a168b0599ca0",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.974072Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/version-stepper/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/version-stepper/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/version-stepper/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 76,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "392b9b0628fb74e5e805f942668781138caa2c12f42d8976359092ddc5909307",
        "loop": "65811bb9c952cc0ae27a4718d848be382ee543e9a106832be42dd7b0d6857c91",
        "detail": "d0c0fdc2c1def25a8820da959109ca618fd6c5ee2bb85093e12d50a3059e6c73"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/version-stepper/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/version-stepper/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/version-stepper/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 76,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "22bce09fbd71835658444e0d82e404ca58251f4191c769385de6930279161fb0",
        "loop": "4f097480bdd5914f261b34ef6d03967ad02d5302e5114c1c552649626061252a",
        "detail": "e2860d2662c333247846396ef16557d0dc0292a594ca0abfe90144e26d3c3508"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/version-stepper/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/version-stepper/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/version-stepper/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 76,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "794a3e654f0125d66ff743b30b51bd5330b51443d011b9b91ad1ceba67fe3fa8",
        "loop": "94a0b60cfb9a6f51fd727f982786f442bb098b2cedf071b52d522d3215f9f6c5",
        "detail": "96103a886c30ab9164fd792c281b401e4512be1e039842126e421b648b940889"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/54141155802121f129eaf2e68c0672c69c613bc8c33c0aac7167a168b0599ca0/index.mjs",
    "sha256": "54141155802121f129eaf2e68c0672c69c613bc8c33c0aac7167a168b0599ca0",
    "bytes": 162051,
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
    "at": "2026-10-07T02:27:33.568Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
