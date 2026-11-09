// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "text/hook",
  "tags": [
    "hook",
    "cold open",
    "question",
    "intro",
    "social",
    "text"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 105,
      "min": 45,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 60,
      "out": 0
    },
    "markers": {
      "settled": 60,
      "answer": 45
    },
    "beats": [
      7,
      20,
      45
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "1:1",
      "9:16",
      "16:9"
    ],
    "mode": "responsive",
    "fill": "frame",
    "safeArea": "title",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "question",
      "type": "text",
      "maxChars": 72,
      "lines": 3,
      "role": "headline"
    },
    {
      "key": "answer",
      "type": "text",
      "maxChars": 60,
      "lines": 2,
      "role": "subline"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "question",
      "prop": "y",
      "from": "below",
      "settledBy": 20,
      "easing": "ease"
    },
    {
      "target": "answer",
      "prop": "opacity",
      "settledBy": 60,
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
      105
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "motion recipe from research V04 (cold-open question on black); own copy"
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
    "question": "What if your docs could *animate* themselves?",
    "answer": "Here is how we did it.",
    "color": "#F4F4F5",
    "accent": "#F472B6",
    "background": "#000000",
    "fontFamily": "Geist",
    "align": "left",
    "glow": false
  },
  "fields": [
    {
      "key": "question",
      "label": "Question",
      "type": "text",
      "max": 72,
      "role": "headline"
    },
    {
      "key": "answer",
      "label": "Answer",
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
      "brand": "fonts.heading"
    },
    {
      "key": "align",
      "label": "Align",
      "type": "select",
      "options": [
        "left",
        "center"
      ]
    },
    {
      "key": "glow",
      "label": "Glow",
      "type": "boolean"
    }
  ],
  "name": "Hook Question",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "hook-question",
    "bundleSha256": "f4eb8570ccc1af4790bc1c5df135b9421395ceb024f6ab01915a16f976c93040",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:56:28.121Z",
    "samples": [
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/1x1-paper.png",
        "sha256": "5c89b03368a3b490f2414a72bd38647cee477179a1d179884d4ee6f5fb731d77"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/1x1-night.png",
        "sha256": "009e514833557d3c5315c6a55bfd21741a11f47933012b47432d0ffdec53ced3"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/1x1-color.png",
        "sha256": "55a92604822d1684dfb4a4fe5c258e2ff0a496b9381c8b6e87bb679e44bb5898"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/9x16-paper.png",
        "sha256": "ef30335a7c53a92ddd726c3167f85fda1d5941b1545f50d26373031d5ae5f22c"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/9x16-night.png",
        "sha256": "312a245b0d26de78dbe7f542941302000ae01a386ab6d2ff24917fb229f06594"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/9x16-color.png",
        "sha256": "25c70300cc8cbaee7e9477551bd2ef89c5f75f06f7253ecb310711e193215c85"
      },
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/16x9-paper.png",
        "sha256": "6bb612e299f97ab9e522c6249d894204aa4be85e537b663a0c178e55b62068b4"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/16x9-night.png",
        "sha256": "7b283660e5054985a7ba7e8aab42297f5a6a61024d0000dba827d9bb200f8cbb"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/16x9-color.png",
        "sha256": "4ee2dca69bddb7e24ebc55bdf25a6f8229bbc9784624a4ede0c8797f15e12bf4"
      }
    ],
    "gates": {
      "contract": {
        "pass": true,
        "errors": [],
        "transparency": [
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "hook-question--1x1",
          "hook-question--9x16",
          "hook-question--16x9"
        ]
      },
      "brand": {
        "pass": true,
        "sourcePaintLiterals": [],
        "sourceFontLiterals": [],
        "samples": [
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 70.47992621527777,
            "paperColor": 32.59583875868056,
            "region": {
              "left": 128,
              "top": 424,
              "width": 754,
              "height": 229
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 50.70521375868056,
            "paperColor": 35.17320421006944,
            "region": {
              "left": 85,
              "top": 235,
              "width": 902,
              "height": 1447
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 69.214599609375,
            "paperColor": 33.20722113715278,
            "region": {
              "left": 229,
              "top": 360,
              "width": 1158,
              "height": 354
            },
            "canvas": {
              "width": 1920,
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
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.20493143816740234,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.20622546572355513,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.1392871820653273,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8546760396545451,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8840445418136392,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7248190074640969,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2724005465097562,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.27368546119579523,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.1861595332577476,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.827365451388889,
        "frames": [
          9,
          60,
          104
        ],
        "elastic": [
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 5.042534722222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/1x1-duration-45-frame-5.png",
                "sha256": "2cd16dd9d4ec65c82735b66e72f2243ec7ab10526767ba69c2ff83ba41b044ff",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/1x1-duration-45-frame-44.png",
                "sha256": "bd09ff3f029766babad637e6d7f528642381190a17827595f5189b7e32941ebe",
                "alphaMass": 587520
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/1x1-duration-45-frame-39.png",
                "sha256": "bd09ff3f029766babad637e6d7f528642381190a17827595f5189b7e32941ebe",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 3.6957465277777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/1x1-duration-600-frame-9.png",
                "sha256": "ff12ba9567837a483bcbe4dece7ffcf5707b86f6e813c6111bc5170c128d3679",
                "alphaMass": 587520
              },
              {
                "frame": 60,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/1x1-duration-600-frame-60.png",
                "sha256": "b3458a5a6363612171fccce05dad605bed3c8782cb3680f04b020a9bf31973b2",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/1x1-duration-600-frame-528.png",
                "sha256": "b3458a5a6363612171fccce05dad605bed3c8782cb3680f04b020a9bf31973b2",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/1x1-duration-600-frame-599.png",
                "sha256": "b3458a5a6363612171fccce05dad605bed3c8782cb3680f04b020a9bf31973b2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 12.51974826388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/9x16-duration-45-frame-5.png",
                "sha256": "51ddfe48706f51d79094b7bc1953cca3d85e2fb6843aaa8a0dcde6343c50a68d",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/9x16-duration-45-frame-44.png",
                "sha256": "88bd0411265a1016c947e71000372441a8e64a169ca5efaa2595dc77aa30772a",
                "alphaMass": 587520
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/9x16-duration-45-frame-39.png",
                "sha256": "88bd0411265a1016c947e71000372441a8e64a169ca5efaa2595dc77aa30772a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 9.480143229166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/9x16-duration-600-frame-9.png",
                "sha256": "3dadb82b619543a8fcc62c09475017cfea60604b3b0de57d3642d1d991bc4341",
                "alphaMass": 587520
              },
              {
                "frame": 60,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/9x16-duration-600-frame-60.png",
                "sha256": "0bb5a069da3106edaba247864d883414929203a5b042490b25d7ea9a4097f910",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/9x16-duration-600-frame-528.png",
                "sha256": "0bb5a069da3106edaba247864d883414929203a5b042490b25d7ea9a4097f910",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/9x16-duration-600-frame-599.png",
                "sha256": "0bb5a069da3106edaba247864d883414929203a5b042490b25d7ea9a4097f910",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 6.303059895833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/16x9-duration-45-frame-5.png",
                "sha256": "d8a47083af576d4b882a0495196940e6d70dd81c7b285e51e76f649a70fe8703",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/16x9-duration-45-frame-44.png",
                "sha256": "73acf5984a8a440f2410b761559d811ff5615d4dbdca313dc00e1d51e0eb9307",
                "alphaMass": 587520
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/16x9-duration-45-frame-39.png",
                "sha256": "73acf5984a8a440f2410b761559d811ff5615d4dbdca313dc00e1d51e0eb9307",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 4.827365451388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/16x9-duration-600-frame-9.png",
                "sha256": "0fcc5fe9944cd193a66bcf48171b99940c11a306c0871e402e3113ee8da356a2",
                "alphaMass": 587520
              },
              {
                "frame": 60,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/16x9-duration-600-frame-60.png",
                "sha256": "32fd58839d938c6704ae4a03ad0a789a2d21ef82d8009c491cc9bb663a8d40b0",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/16x9-duration-600-frame-528.png",
                "sha256": "32fd58839d938c6704ae4a03ad0a789a2d21ef82d8009c491cc9bb663a8d40b0",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/hook-question/16x9-duration-600-frame-599.png",
                "sha256": "32fd58839d938c6704ae4a03ad0a789a2d21ef82d8009c491cc9bb663a8d40b0",
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
        "note": "A question with one accent word, then a small answer line; opening hook."
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
      "bundleSha256": "f4eb8570ccc1af4790bc1c5df135b9421395ceb024f6ab01915a16f976c93040",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.955977Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/hook-question/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/hook-question/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/hook-question/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 60,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "dec6ae5b7e112fde1bc909096a6c5ff526fb54f1d08cbaf819d520dd710a29e3",
        "loop": "1080f29e14bf88d4b4725f1130c5cf03eff6bf9856a7efc20be8e09e238ad86c",
        "detail": "1203a87e3e9c82e92ab9db68438de898ccaccf530e155666d61545e1e5d26a52"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/hook-question/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/hook-question/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/hook-question/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 60,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "f4b6ff139768a89bb19b81a09e6a7f4068cf3611b3807dad4f345916080c57c4",
        "loop": "d334bc593b53c1626e4b83c3e3907d6a1f9c5a3efa59bdf50ee729385aa7e5b4",
        "detail": "bdc0e01faa33d767493f1359bcfeb7a8f52560663201db8dd11302d66a47901c"
      }
    },
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/hook-question/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/hook-question/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/hook-question/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 60,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "680de31c7f1e3660949911c432bfe222ff7dd079afd7cfa3ccef360e6962469b",
        "loop": "43e80827639050f8ccc43ced471fc6cf539b167d2653c5624ee28f069fc5bfd3",
        "detail": "b30c9e8932a29d6026600836362f2675f752b293e5354c67f7958e9a8c6d498b"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/f4eb8570ccc1af4790bc1c5df135b9421395ceb024f6ab01915a16f976c93040/index.mjs",
    "sha256": "f4eb8570ccc1af4790bc1c5df135b9421395ceb024f6ab01915a16f976c93040",
    "bytes": 160886,
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
    "1:1": {
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
    "16:9": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true
    }
  },
  "intake": {
    "at": "2026-10-07T02:23:53.790Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
