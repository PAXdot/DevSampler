// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "question-word-rise"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "question-word-rise",
    "hook",
    "question",
    "cold-open"
  ],
  "engines": {
    "remotion": ">=4.0.533 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 90,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 132,
      "out": 0
    },
    "markers": {
      "settled": 132
    },
    "beats": [
      0,
      33,
      66,
      99,
      132
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
    "preset": "full",
    "backdrop": [
      "paintBackground"
    ]
  },
  "slots": [
    {
      "key": "question",
      "type": "text",
      "maxChars": 48,
      "role": "headline"
    },
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 24,
      "role": "kicker"
    },
    {
      "key": "brand",
      "type": "text",
      "maxChars": 18,
      "role": "label"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.display",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "question-word-rise",
      "prop": "transform",
      "from": "enter",
      "settledBy": 132,
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
      180
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/launch-videos-2026-10-06/README.md"
  },
  "defaults": {
    "ink": "#F3EFE6",
    "accent": "#FF542E",
    "secondary": "#FFD2B8",
    "paper": "#0B0B0D",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "question": "Why does shipping still take a week?",
    "kicker": "01 / the problem",
    "brand": "Lumen"
  },
  "fields": [
    {
      "key": "ink",
      "label": "Ink",
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
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "paper",
      "label": "Paper",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "displayFont",
      "label": "Display font",
      "type": "font",
      "brand": "fonts.display"
    },
    {
      "key": "bodyFont",
      "label": "Body font",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFont",
      "label": "Mono font",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "paintBackground",
      "label": "Paint background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "question",
      "label": "Question",
      "type": "text",
      "max": 48,
      "role": "headline"
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 24,
      "role": "kicker"
    },
    {
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 18,
      "role": "label"
    }
  ],
  "name": "Question Hook",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-hook-question",
    "bundleSha256": "d35251142a501f535e26c03592209b88772e9d11ef208d1f0b843c84cab8d146",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:42:47.235Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/16x9-paper.png",
        "sha256": "d58516aeec423537a9076a2247a989bb8a4c052598892eac83d71f14f799c3a0"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/16x9-night.png",
        "sha256": "5d06e03fa5d17e0a69aa480ca7d4e266a5d655d075f74a9ae608554db5bd85f0"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/16x9-color.png",
        "sha256": "0dad1b019b1ddb717c06f437648951a4e0dcc43e34512d169d6862cf242c8bf6"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/9x16-paper.png",
        "sha256": "09c1d95a8d88346eb0aba8030a88afafd53e01e4743cc5e34e131744b673cf11"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/9x16-night.png",
        "sha256": "141861c4e5d4a5a7898ad099fa2a7ea120873fff8082a32a08a08152c36e5f0b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/9x16-color.png",
        "sha256": "bd72dd0ff810c06f0cc404629855d7334f0b4f0120d70fa52fc510b7698c6a6a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/1x1-paper.png",
        "sha256": "ce8d0e9e18a402165d45515d02a63c01d4e48203b43306b1ed4b9de9398717f1"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/1x1-night.png",
        "sha256": "dd79ef5ce1049027f12c4211b6b06eb7ac78d68819c569dfc30aa6546c3d1604"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/1x1-color.png",
        "sha256": "1e3ba41f76fcfd0e31615555f42923951c44bef686612e3e8c5570ba31322b1c"
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
          "mg-hook-question--16x9",
          "mg-hook-question--9x16",
          "mg-hook-question--1x1"
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
            "paperNight": 43.073757595486114,
            "paperColor": 38.15673828125,
            "region": {
              "left": 108,
              "top": 80,
              "width": 1686,
              "height": 1000
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 31.971761067708332,
            "paperColor": 28.075439453125,
            "region": {
              "left": 0,
              "top": 179,
              "width": 1080,
              "height": 1564
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 32.58824327256944,
            "paperColor": 30.399522569444443,
            "region": {
              "left": 61,
              "top": 75,
              "width": 958,
              "height": 927
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
            "occupancy": 1.1454877732986202,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1454877732986202,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.152322425883934,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.154454837490552,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1529785525321241,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1529785525321241,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9213549102768681,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9055859998320317,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0790440147252318,
            "bad": [],
            "measured": 9
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 11.651692708333334,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 11.471137152777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/16x9-duration-90-frame-10.png",
                "sha256": "b0a8a07545ff8777a398314da8cdf5ce63cbddedda8d6190bb1ecfb031769686",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/16x9-duration-90-frame-89.png",
                "sha256": "5e36426ca3fd0a1d9da16ad48b69cc1beeb12faa4832375ce27ae3591d71e06b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/16x9-duration-90-frame-79.png",
                "sha256": "a88d15d422b9f2ba5fa65919601b8e373be672d3d52ab02e9a4ea4ae24dd5b34",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 11.651692708333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/16x9-duration-900-frame-19.png",
                "sha256": "255eb138046d894d24616af882a9019a5c435c40720c7a24e212c6e238e4658e",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/16x9-duration-900-frame-132.png",
                "sha256": "4ce673d9d192b0483dc23fb3fb04e704c1d7e2adf6344786222e530351023eec",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/16x9-duration-900-frame-792.png",
                "sha256": "1eb1459abc65e02303642d8d83d1819d226b6f4fff9d9e36c361a0c9a141c00b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/16x9-duration-900-frame-899.png",
                "sha256": "646f95fb249c1b8b8b6b40aa7be55a041aa0fc20fee3a3f8706075fff62ff2df",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 9.09646267361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/9x16-duration-90-frame-10.png",
                "sha256": "3addc1c1650f8e54ce45b2a7f57da59d4a7a50ca58d4d9bb46fe5925e57bd5aa",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/9x16-duration-90-frame-89.png",
                "sha256": "365fa4e9019a73d521b011c535b3156e35d4a61a1c534e49ad815c801ae70a76",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/9x16-duration-90-frame-79.png",
                "sha256": "a8b43169f02b6e45cacdb3871b2ed922ed3ceb338b1a6eef944852b9fde9801a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 9.114691840277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/9x16-duration-900-frame-19.png",
                "sha256": "4daf41efc2946511f7f685a9f40259cf840a555347d55dfe2bb842651127e473",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/9x16-duration-900-frame-132.png",
                "sha256": "773c0d60fdbdc7015550de11d96a3de4708bc889fd8c8bd3c138ec7d10c2f802",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/9x16-duration-900-frame-792.png",
                "sha256": "8b25b0bb41428465a216cf9bf5aabd5a09bdfd1e4af0def3c5629f2a3a78ecf6",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/9x16-duration-900-frame-899.png",
                "sha256": "0fd5c6988ca05bc6927240491912ebf0dd183292af2a746ca31c9605ab44937a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 8.294487847222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/1x1-duration-90-frame-10.png",
                "sha256": "5940766d4b6b9f71a7e3501142edf38c9ac69e061f5c18152a12f183066d2105",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/1x1-duration-90-frame-89.png",
                "sha256": "ded2a35c00897cee6abf701eeab5c464ea8662c3862624074fda71507f006e17",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/1x1-duration-90-frame-79.png",
                "sha256": "ded2a35c00897cee6abf701eeab5c464ea8662c3862624074fda71507f006e17",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 8.21950954861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/1x1-duration-900-frame-19.png",
                "sha256": "93c65e7dfb71f9e2365f90f74e57833d8c77ea5604b48cbc33d3bfb5de462aa4",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/1x1-duration-900-frame-132.png",
                "sha256": "ded2a35c00897cee6abf701eeab5c464ea8662c3862624074fda71507f006e17",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/1x1-duration-900-frame-792.png",
                "sha256": "ded2a35c00897cee6abf701eeab5c464ea8662c3862624074fda71507f006e17",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-hook-question/1x1-duration-900-frame-899.png",
                "sha256": "ded2a35c00897cee6abf701eeab5c464ea8662c3862624074fda71507f006e17",
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
        "note": "A question builds word by word and its last word wipes into the accent with an underline; title hook."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 43,
        "compared": 43,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "d35251142a501f535e26c03592209b88772e9d11ef208d1f0b843c84cab8d146",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-question/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-question/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-question/16x9/detail.mp4",
      "bg": "#0b0b0c",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4810a47a28aa9d91d57c426e43e8c3093f76025c41264173f5f54b851311aba9",
        "loop": "78b29ff3a9b441cf720c746740f4c563f65d31f66bd9fab70c11741e1924dea1",
        "detail": "7275cc88098ad450030bd9498fbdb1fc28605cde35ab5c2073afa9fccd28dab5"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-question/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-question/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-question/9x16/detail.mp4",
      "bg": "#0b0b0c",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3209d8b3121c4ee75968eae27e6d3a120dc9f5ecec5459dcfed0543081fc93f3",
        "loop": "8905bc690784ddcd4b4861eed48cece94c9c1a16ae7c5d2f39b69b2b403be86b",
        "detail": "60de3b79df98813c8c320e4f50a467fc198b6d0a5051f718e1cc29c979f4ab79"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-question/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-question/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-question/1x1/detail.mp4",
      "bg": "#0b0b0c",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "04ee998183abd7c87099b07b6d4db7a6bc3a963166fa6dc702c6f059398e2e3b",
        "loop": "163d3fab03ce25e4f90a8d2fc564eed3311927b9dfc43c7da815ec09882060b1",
        "detail": "f8dad7fecffd04edd0a6a083cb5e3521e6492a187105bbab3fac3b8e8f9d64dc"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d35251142a501f535e26c03592209b88772e9d11ef208d1f0b843c84cab8d146/index.mjs",
    "sha256": "d35251142a501f535e26c03592209b88772e9d11ef208d1f0b843c84cab8d146",
    "bytes": 207826,
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
    "at": "2026-10-09T03:59:11.964Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
