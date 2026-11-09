// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "text/minimal",
  "tags": [
    "whisper",
    "minimal",
    "interstitial",
    "word by word",
    "keynote",
    "text"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 90,
      "min": 30,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 40,
      "out": 0
    },
    "markers": {
      "settled": 42
    },
    "beats": [
      2,
      38
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
      "maxChars": 90,
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
      "target": "text",
      "prop": "words",
      "settledBy": 40,
      "easing": "linear"
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
    "sourceUrl": "motion recipe from research V15 (small word-by-word interstitial); own copy"
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
    "text": "Small details make the *whole thing* feel real.",
    "color": "#F4F4F5",
    "accent": "#7C9CFF",
    "fontFamily": "Geist",
    "wordFrames": 4,
    "size": "medium"
  },
  "fields": [
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 90,
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
      "key": "wordFrames",
      "label": "Word frames",
      "type": "number",
      "step": 1,
      "min": 2,
      "max": 10
    },
    {
      "key": "size",
      "label": "Size",
      "type": "select",
      "options": [
        "small",
        "medium",
        "large"
      ]
    }
  ],
  "name": "Whisper Line",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "phrase-type-small",
    "bundleSha256": "8344ab9b34487c8f0e5116b0130f3c23a084bb05da3db4ac4f93d9ffc737568e",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:01:20.791Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/16x9-paper.png",
        "sha256": "1b8aa2968ec07f84d539be6ededc37c021f3c4117abacfb6aa748fa44882caae"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/16x9-night.png",
        "sha256": "c4c0034525c21c04cf201325b9c7541a6ec9867e24a7acb766cf3f2a2e1e7b41"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/16x9-color.png",
        "sha256": "8e0472ee528888c8798e125310f4165c3aebec56d1b083c04c9ccbe047180584"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/9x16-paper.png",
        "sha256": "63e6fbdf813123526c7bc7d234d5c0a1ae25f102d840daeb42c6f8e7253269e5"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/9x16-night.png",
        "sha256": "6b1fc042500323c13da23a5ff38d2c23f8a4288fbb27f8693a79e821d255c478"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/9x16-color.png",
        "sha256": "7224ed35868042313d1c3852c406fed9b3c9e2fe6cead472f06c7553b4c42832"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/1x1-paper.png",
        "sha256": "423127195b52a8593ad8ae58269017beb93f2e5d48cff3a7ae926d224883907d"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/1x1-night.png",
        "sha256": "062d41fd209fdc4ab65b5f2836e2dcc0bf3457844c65c5072d4fdf12617def11"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/1x1-color.png",
        "sha256": "e7aa961932cb8189ca9eb29fd91d093bfb6e7c1bae33d7a1f1cf3070605cb034"
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
          "phrase-type-small--16x9",
          "phrase-type-small--9x16",
          "phrase-type-small--1x1"
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
            "paperNight": 96.11382378472223,
            "paperColor": 45.523681640625,
            "region": {
              "left": 476,
              "top": 520,
              "width": 968,
              "height": 47
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 53.56239149305556,
            "paperColor": 46.233859592013886,
            "region": {
              "left": 163,
              "top": 551,
              "width": 755,
              "height": 797
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 56.25469292534722,
            "paperColor": 48.97642686631944,
            "region": {
              "left": 157,
              "top": 489,
              "width": 766,
              "height": 99
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
            "occupancy": 0.06038985113506995,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.06064615060701922,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.03657963019098243,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6323990126314587,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6611458461824803,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8568020152966451,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.18419388717421126,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.19002359269420313,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.06503045367285766,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.182725694444445,
        "frames": [
          6,
          42,
          89
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 30,
            "averageChannelDifference": 9.144856770833334,
            "retainedAlpha": 0.9064955474070194,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/16x9-duration-30-frame-3.png",
                "sha256": "ee93db6433d9a8acc6f8e93d935257e3e3dc6d2cbb97c8e9a3104f9d0244b758",
                "alphaMass": 164
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/16x9-duration-30-frame-29.png",
                "sha256": "43020fb2fea66d8b2c86e734cbaf12e338b6ba55a621b864545838fb112ecd7c",
                "alphaMass": 3818
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/16x9-duration-30-frame-26.png",
                "sha256": "0f0c9e880d43489f770ee0d650d9d22826f0730f76d30ae9b330c9f59f38cf75",
                "alphaMass": 3461
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 8.182725694444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/16x9-duration-600-frame-6.png",
                "sha256": "b2c168e4e03946cac74c9602532d459a8d9ea420568c81c64c185e95a1dcb762",
                "alphaMass": 532
              },
              {
                "frame": 42,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/16x9-duration-600-frame-42.png",
                "sha256": "43020fb2fea66d8b2c86e734cbaf12e338b6ba55a621b864545838fb112ecd7c",
                "alphaMass": 3818
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/16x9-duration-600-frame-528.png",
                "sha256": "43020fb2fea66d8b2c86e734cbaf12e338b6ba55a621b864545838fb112ecd7c",
                "alphaMass": 3818
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/16x9-duration-600-frame-599.png",
                "sha256": "43020fb2fea66d8b2c86e734cbaf12e338b6ba55a621b864545838fb112ecd7c",
                "alphaMass": 3818
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 30,
            "averageChannelDifference": 32.3251953125,
            "retainedAlpha": 0.9047981077884778,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/9x16-duration-30-frame-3.png",
                "sha256": "c9932c70b52cd16f0c43b704b19595488960d9ca9f6a79e7cb7b7a657a19c7cf",
                "alphaMass": 1072
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/9x16-duration-30-frame-29.png",
                "sha256": "12ab133ed6daf81721ee1ad02d3591e3d2d92b8d3df5bc90fb96e6e227e1deb5",
                "alphaMass": 23676
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/9x16-duration-30-frame-26.png",
                "sha256": "0cbda36f980244127789006269efcc2dc09ee09afec39193d5bd38920003caaf",
                "alphaMass": 21422
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 29.474500868055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/9x16-duration-600-frame-6.png",
                "sha256": "88d6c96a6b0a1bb5aaa7ab6f4f73986710d80768a8d6fd7695485dee6dd97369",
                "alphaMass": 3214
              },
              {
                "frame": 42,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/9x16-duration-600-frame-42.png",
                "sha256": "12ab133ed6daf81721ee1ad02d3591e3d2d92b8d3df5bc90fb96e6e227e1deb5",
                "alphaMass": 23676
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/9x16-duration-600-frame-528.png",
                "sha256": "12ab133ed6daf81721ee1ad02d3591e3d2d92b8d3df5bc90fb96e6e227e1deb5",
                "alphaMass": 23676
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/9x16-duration-600-frame-599.png",
                "sha256": "12ab133ed6daf81721ee1ad02d3591e3d2d92b8d3df5bc90fb96e6e227e1deb5",
                "alphaMass": 23676
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 30,
            "averageChannelDifference": 14.354166666666666,
            "retainedAlpha": 0.9164165666266506,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/1x1-duration-30-frame-3.png",
                "sha256": "a82fe576913be8cfa60b5509a4e2594d1efe7a9e102630661081f0dfdb5aab2e",
                "alphaMass": 296
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/1x1-duration-30-frame-29.png",
                "sha256": "443651d39773d78b9afcf78813621b572f655f3303d2ab2274d63e70d594bb3b",
                "alphaMass": 6664
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/1x1-duration-30-frame-26.png",
                "sha256": "858b08ca7de51195095268930c7dab8f06aecd3dc4175298e93e9e48bb3a9172",
                "alphaMass": 6107
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 12.842122395833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/1x1-duration-600-frame-6.png",
                "sha256": "9ecb6330bdf492351e4a875334ef596eec4c4d31c9c718ecbc498e9c287825de",
                "alphaMass": 926
              },
              {
                "frame": 42,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/1x1-duration-600-frame-42.png",
                "sha256": "443651d39773d78b9afcf78813621b572f655f3303d2ab2274d63e70d594bb3b",
                "alphaMass": 6664
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/1x1-duration-600-frame-528.png",
                "sha256": "443651d39773d78b9afcf78813621b572f655f3303d2ab2274d63e70d594bb3b",
                "alphaMass": 6664
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/phrase-type-small/1x1-duration-600-frame-599.png",
                "sha256": "443651d39773d78b9afcf78813621b572f655f3303d2ab2274d63e70d594bb3b",
                "alphaMass": 6664
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
        "note": "A deliberately small, precise phrase types in centered with an accent span."
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
      "bundleSha256": "8344ab9b34487c8f0e5116b0130f3c23a084bb05da3db4ac4f93d9ffc737568e",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.989301Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/phrase-type-small/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/phrase-type-small/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/phrase-type-small/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 42,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "d6cc87554feb1e016c224d4dc17fbab74c88f0806508064c7b61d993ff6994ba",
        "loop": "922a18e6e8728f0911c024edabbcac4bb4c6ba9d32dc8c48b049ce435179bd6d",
        "detail": "2f6b7bd117f779c9031872d5f7f331e451d2a54707f0bf94782d8894f2da2a68"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/phrase-type-small/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/phrase-type-small/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/phrase-type-small/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 42,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "f699d093453b0f9baf3944ce6bfa2f03e8fe68752e6d2550b91b2910618238e9",
        "loop": "8765d2eac252c8e224f272cf601c1c04cf856e4b0db4278eeede8efec209b587",
        "detail": "da8e10bb95d564c525b3c2b13bc4968fca93638cc1b25d073c4c73e834c50ca8"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/phrase-type-small/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/phrase-type-small/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/phrase-type-small/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 42,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "8f7254e81a33a953004b57ec933004aa3d9b8123e0fa2e79129037cd6d329594",
        "loop": "6c51201b919019bf35cd422543a809780495e9c6a7ee3c24314f853c633f762e",
        "detail": "0a193ec60fb3a210c19400487892c0c1793ef1090dd96d947a39a83f0d689c87"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/8344ab9b34487c8f0e5116b0130f3c23a084bb05da3db4ac4f93d9ffc737568e/index.mjs",
    "sha256": "8344ab9b34487c8f0e5116b0130f3c23a084bb05da3db4ac4f93d9ffc737568e",
    "bytes": 159583,
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
    "at": "2026-10-07T02:29:37.246Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
