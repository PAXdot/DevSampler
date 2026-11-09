// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "pixel-terminal",
  "mechanic": [
    "ring-timer-countdown-to-done"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "ring-timer-countdown-to-done",
    "hook",
    "countdown",
    "timer",
    "speed"
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
      "in": 129,
      "out": 0
    },
    "markers": {
      "settled": 129
    },
    "beats": [
      0,
      32,
      65,
      97,
      129
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
      "key": "kicker",
      "type": "text",
      "maxChars": 22,
      "role": "kicker"
    },
    {
      "key": "line1",
      "type": "text",
      "maxChars": 14,
      "role": "headline"
    },
    {
      "key": "line2",
      "type": "text",
      "maxChars": 14,
      "role": "headline"
    },
    {
      "key": "status",
      "type": "text",
      "maxChars": 10,
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
      "target": "ring-timer-countdown-to-done",
      "prop": "transform",
      "from": "enter",
      "settledBy": 129,
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
    "ink": "#EFFFF6",
    "accent": "#3DFF9A",
    "secondary": "#2EE6FF",
    "paper": "#04060A",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "deploy · production",
    "line1": "Ship in",
    "line2": "60 seconds.",
    "status": "live"
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
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 22,
      "role": "kicker"
    },
    {
      "key": "line1",
      "label": "Line 1",
      "type": "text",
      "max": 14,
      "role": "headline"
    },
    {
      "key": "line2",
      "label": "Line 2",
      "type": "text",
      "max": 14,
      "role": "headline"
    },
    {
      "key": "status",
      "label": "Status",
      "type": "text",
      "max": 10,
      "role": "label"
    }
  ],
  "name": "Neon Countdown Ring",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-hook-countdown",
    "bundleSha256": "f0461c7eeede332074302aaab5372d64bfc9557cf5f4f9804645005c54b5f75a",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:41:27.152Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/16x9-paper.png",
        "sha256": "de772f993f1f5277a373c7a05084c74a384efbee56133055366b0482b5224203"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/16x9-night.png",
        "sha256": "e4a9c911baeead635ee12333d7ab24488fe13b9ce5cde3012948e9babf5ddcf2"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/16x9-color.png",
        "sha256": "2633e6f4c977a37328c2b37a39854e6d708002f544905d15b91444f7079db308"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/9x16-paper.png",
        "sha256": "34fd89c5a2d381ce092257cb77a45b62d22e031272b4fe7fdf301b041a36ded2"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/9x16-night.png",
        "sha256": "deb0ad88b2f344fd43262f3e9292c3393b3e6f3fd063d2cbf5cb7d65941415bf"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/9x16-color.png",
        "sha256": "71c08992a2a37fd3b48afd219f1829c0eb6d5bf42500bc09d4f70b792db19c8d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/1x1-paper.png",
        "sha256": "ed3a6d2f00d67a68e661cbe47dd242b4fc2c7e3a7ceca1c7427734b6c3956b1a"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/1x1-night.png",
        "sha256": "540a7b9a5a1022b60726e410c84e8abb0c6f036c624e9dc273c78c591e0e81f8"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/1x1-color.png",
        "sha256": "9fd7b38d032ad701c46f5cbe35377531433c434797276316483c6c31d2e847cf"
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
          "mg-hook-countdown--16x9",
          "mg-hook-countdown--9x16",
          "mg-hook-countdown--1x1"
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
            "paperNight": 27.05547417534722,
            "paperColor": 11.896321614583334,
            "region": {
              "left": 95,
              "top": 192,
              "width": 1652,
              "height": 691
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 37.492702907986114,
            "paperColor": 17.72968207465278,
            "region": {
              "left": 131,
              "top": 146,
              "width": 808,
              "height": 1536
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 26.95708550347222,
            "paperColor": 14.00509982638889,
            "region": {
              "left": 119,
              "top": 57,
              "width": 860,
              "height": 811
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
            "occupancy": 0.7778360910336358,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7773638165399906,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7801974635018618,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8466391716794744,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8408919123204839,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8376550208560792,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8444349962207106,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8432685488461504,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5905358542593994,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.309461805555555,
        "frames": [
          19,
          129,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 7.36328125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/16x9-duration-90-frame-10.png",
                "sha256": "445c308d0692bb9fbfd6e690e4a5314946b68bbaed83ef3dbb86c8d280b75c97",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/16x9-duration-90-frame-89.png",
                "sha256": "3520dbd3491fe04dcb367ecc026d68c670b84c7dd301d76feb69207b7c4a01b1",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/16x9-duration-90-frame-79.png",
                "sha256": "3520dbd3491fe04dcb367ecc026d68c670b84c7dd301d76feb69207b7c4a01b1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.309461805555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/16x9-duration-900-frame-19.png",
                "sha256": "b6e4da79122459c50a2c0e3980d71e6bad67e9e6d350043cdf0e5f4a74bef675",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/16x9-duration-900-frame-129.png",
                "sha256": "3520dbd3491fe04dcb367ecc026d68c670b84c7dd301d76feb69207b7c4a01b1",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/16x9-duration-900-frame-792.png",
                "sha256": "3520dbd3491fe04dcb367ecc026d68c670b84c7dd301d76feb69207b7c4a01b1",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/16x9-duration-900-frame-899.png",
                "sha256": "3520dbd3491fe04dcb367ecc026d68c670b84c7dd301d76feb69207b7c4a01b1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 9.22048611111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/9x16-duration-90-frame-10.png",
                "sha256": "f0cbb7b726e07cd58a8df2a0889a2e4c486736a0489a18822c253929a86a0fcc",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/9x16-duration-90-frame-89.png",
                "sha256": "a5b36a25239e4972cea9dcc15f48ad515c6f483519a08944c3164617260d2e44",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/9x16-duration-90-frame-79.png",
                "sha256": "a5b36a25239e4972cea9dcc15f48ad515c6f483519a08944c3164617260d2e44",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 9.13498263888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/9x16-duration-900-frame-19.png",
                "sha256": "7130f99a5a5fc45b397847b0ccec67286274fcf68b658464a94ca1da8bb50527",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/9x16-duration-900-frame-129.png",
                "sha256": "a5b36a25239e4972cea9dcc15f48ad515c6f483519a08944c3164617260d2e44",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/9x16-duration-900-frame-792.png",
                "sha256": "a5b36a25239e4972cea9dcc15f48ad515c6f483519a08944c3164617260d2e44",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/9x16-duration-900-frame-899.png",
                "sha256": "a5b36a25239e4972cea9dcc15f48ad515c6f483519a08944c3164617260d2e44",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 9.587239583333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/1x1-duration-90-frame-10.png",
                "sha256": "f4fb9c2d7bfb7e342d1fd1039356bfb7a8668f0f9f7bf31df814562065092b6a",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/1x1-duration-90-frame-89.png",
                "sha256": "2702c69489c7f2320f226929a02f93f71c7ea5861c1fb45fbfee4da0e8520fca",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/1x1-duration-90-frame-79.png",
                "sha256": "2702c69489c7f2320f226929a02f93f71c7ea5861c1fb45fbfee4da0e8520fca",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 9.50271267361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/1x1-duration-900-frame-19.png",
                "sha256": "0aa8d79d226279cf68e08368f392e2b7be77d12944f0fb49e5ec501b04ca72cc",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/1x1-duration-900-frame-129.png",
                "sha256": "2702c69489c7f2320f226929a02f93f71c7ea5861c1fb45fbfee4da0e8520fca",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/1x1-duration-900-frame-792.png",
                "sha256": "2702c69489c7f2320f226929a02f93f71c7ea5861c1fb45fbfee4da0e8520fca",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-hook-countdown/1x1-duration-900-frame-899.png",
                "sha256": "2702c69489c7f2320f226929a02f93f71c7ea5861c1fb45fbfee4da0e8520fca",
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
        "note": "Neon countdown ring resolves to a live check; settled frame readable, rebrands distinct."
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
      "bundleSha256": "f0461c7eeede332074302aaab5372d64bfc9557cf5f4f9804645005c54b5f75a",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-countdown/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-countdown/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-countdown/16x9/detail.mp4",
      "bg": "#04060a",
      "posterFrame": 129,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d0d083ee0fb22a8fb8290e73f74697624fcfa039917f0d4cfd620d0da2c26206",
        "loop": "37281737502f4721da7dd5d710f3aeb252e6b0127d2bb15e8b2b94baad7c3e0d",
        "detail": "e8c5cbec8517413244908409328350a94f7c23e4226771b150e709215169b42c"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-countdown/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-countdown/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-countdown/9x16/detail.mp4",
      "bg": "#0d0f13",
      "posterFrame": 129,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3f56de7fb24c0b4d3227d0512cd06d62ff3d657618e55ace6d2a467c7bbaebbc",
        "loop": "35d7fd9ff46a4a5b59c8f1f6aaced9df16d1671edcf6761822ee1e332b44d969",
        "detail": "c45ba47b5b26223ee41f754986f981af2ca15fc240c79f6fe0867d99eba6f65f"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-countdown/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-countdown/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-countdown/1x1/detail.mp4",
      "bg": "#04060a",
      "posterFrame": 129,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ce88f5c34dee0e5fd684f2ef957ed6bd0ad2c0290bd9ce8e5c6068a306952cb3",
        "loop": "9f336918984f0c9fd0ed42bc4392034b5dcd0ea98133a437d607a1da826e6a70",
        "detail": "2b0dc9735adb9c4a8e8e66b1ecbb71d8a96d93b20fae5c2614306f4d6c75b328"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/f0461c7eeede332074302aaab5372d64bfc9557cf5f4f9804645005c54b5f75a/index.mjs",
    "sha256": "f0461c7eeede332074302aaab5372d64bfc9557cf5f4f9804645005c54b5f75a",
    "bytes": 227637,
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
    "at": "2026-10-09T03:55:54.836Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
