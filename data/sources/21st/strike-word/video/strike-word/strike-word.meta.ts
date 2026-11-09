// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "text/emphasis",
  "tags": [
    "strike",
    "strikethrough",
    "contrast",
    "headline",
    "text",
    "kinetic-type"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 105,
      "min": 60,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 48,
      "out": 0
    },
    "markers": {
      "settled": 52,
      "strike": 22
    },
    "beats": [
      0,
      22,
      34
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
      "x": 0.04,
      "y": 0.06,
      "w": 0.92,
      "h": 0.88
    },
    "safeArea": "title",
    "transparent": true,
    "preset": "full",
    "backdrop": []
  },
  "slots": [
    {
      "key": "lead",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "struck",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "kicker"
    },
    {
      "key": "replacement",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "serifFontFamily": "fonts.serif",
    "accent": "colors.primary",
    "color": "colors.text",
    "fontFamily": "fonts.heading",
    "strikeColor": "colors.secondary"
  },
  "motionBeats": [
    {
      "target": "lead",
      "prop": "y",
      "from": "below",
      "settledBy": 18,
      "easing": "spring"
    },
    {
      "target": "strike",
      "prop": "scaleX",
      "from": "0",
      "settledBy": 34,
      "easing": "ease"
    },
    {
      "target": "replacement",
      "prop": "y",
      "from": "below",
      "settledBy": 52,
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
      105
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st-ads/remotion/showcase.tsx (SlopWord)"
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
    "serifFontFamily": "Instrument Serif",
    "lead": "Stop shipping",
    "struck": "AI slop.",
    "replacement": "Ship real UI.",
    "color": "#F4F4F5",
    "accent": "#7C9CFF",
    "strikeColor": "#E5484D",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "serifFontFamily",
      "label": "Serif font family",
      "type": "font",
      "brand": "fonts.serif"
    },
    {
      "key": "lead",
      "label": "Lead",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "struck",
      "label": "Struck",
      "type": "text",
      "max": 24,
      "role": "kicker"
    },
    {
      "key": "replacement",
      "label": "Replacement",
      "type": "text",
      "max": 40,
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
      "key": "strikeColor",
      "label": "Strike color",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Strike Word",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "strike-word",
    "bundleSha256": "4c790c60feff8d456f68b510c173f4f01b19446edef05a25cc8d6e8664cd4317",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:03:20.214Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/16x9-paper.png",
        "sha256": "beb500f19ed9b08137159f5d68dffb363116a2c0666ad91c74409dcc8752808e"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/16x9-night.png",
        "sha256": "9ee9928ba2e82ba80ee33096e7c24b593d3f7a090450774d897f3f0a5ce4901a"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/16x9-color.png",
        "sha256": "9a0ef989f3a826af90f333b29b35ae9a9e6ec62ea8889432e29f4cc5e8824767"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/9x16-paper.png",
        "sha256": "fd765afd0e91ca76c302a656973eef15685767cf68f0dbe7a64f59730167ea51"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/9x16-night.png",
        "sha256": "eee4f639e5eb387b4b6b2ecc0417c03ff06b098e41d617c605afba575b0e32c1"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/9x16-color.png",
        "sha256": "9085e09dadefb649448754bfbbd5b77c7476536e7e91998cbc43a6feb5a33885"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/1x1-paper.png",
        "sha256": "81c40008b626fcd5d7bcb1923f8d13700d19b1cd1f373d205b115c4d1b2ef9fc"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/1x1-night.png",
        "sha256": "c4e3d80e47a7e05fa3f9a23ec3f6b29b63108bf907ae9a9a797c435539df14b3"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/1x1-color.png",
        "sha256": "209058bf35b221e2c4abb575c73b37c420bc1aa719eb01fa673db26b9fccbf68"
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
          "strike-word--16x9",
          "strike-word--9x16",
          "strike-word--1x1"
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
            "paperNight": 55.49823676215278,
            "paperColor": 32.24476453993056,
            "region": {
              "left": 222,
              "top": 381,
              "width": 1489,
              "height": 328
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 20.79595269097222,
            "paperColor": 12.44821506076389,
            "region": {
              "left": 75,
              "top": 226,
              "width": 930,
              "height": 1486
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 56.365315755208336,
            "paperColor": 32.920491536458336,
            "region": {
              "left": 125,
              "top": 450,
              "width": 838,
              "height": 185
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
            "occupancy": 0.2723445023585567,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3327812847747124,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.20613243850781057,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9413572045330479,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9388147137713112,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9241953918913246,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.15355793666346285,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.1873508891439521,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.11653052281726593,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 15.816948784722221,
        "frames": [
          7,
          52,
          104
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 15.816948784722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/16x9-duration-60-frame-7.png",
                "sha256": "8d872856b48cdc382cf1268be398f012db0b35ec9d4bba319febeb29e50e5307",
                "alphaMass": 8895
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/16x9-duration-60-frame-52.png",
                "sha256": "ae61fb9fa4a85034054921b9abed90d378b1ccd78cf3164302099b95ac500d7b",
                "alphaMass": 24184
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/16x9-duration-60-frame-59.png",
                "sha256": "ae61fb9fa4a85034054921b9abed90d378b1ccd78cf3164302099b95ac500d7b",
                "alphaMass": 24184
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 15.816948784722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/16x9-duration-600-frame-7.png",
                "sha256": "8d872856b48cdc382cf1268be398f012db0b35ec9d4bba319febeb29e50e5307",
                "alphaMass": 8895
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/16x9-duration-600-frame-52.png",
                "sha256": "ae61fb9fa4a85034054921b9abed90d378b1ccd78cf3164302099b95ac500d7b",
                "alphaMass": 24184
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/16x9-duration-600-frame-528.png",
                "sha256": "ae61fb9fa4a85034054921b9abed90d378b1ccd78cf3164302099b95ac500d7b",
                "alphaMass": 24184
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/16x9-duration-600-frame-599.png",
                "sha256": "ae61fb9fa4a85034054921b9abed90d378b1ccd78cf3164302099b95ac500d7b",
                "alphaMass": 24184
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 25.751953125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/9x16-duration-60-frame-7.png",
                "sha256": "5cc7b13a8343dd89d810236d3b676405088004abd9e5d5354760eaab0f128b35",
                "alphaMass": 8322
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/9x16-duration-60-frame-52.png",
                "sha256": "4ae22ba24dcec0b24fe7ef9cacb094abed7b33b15cddc2733c58f9c747d06338",
                "alphaMass": 26088
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/9x16-duration-60-frame-59.png",
                "sha256": "4ae22ba24dcec0b24fe7ef9cacb094abed7b33b15cddc2733c58f9c747d06338",
                "alphaMass": 26088
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 25.751953125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/9x16-duration-600-frame-7.png",
                "sha256": "5cc7b13a8343dd89d810236d3b676405088004abd9e5d5354760eaab0f128b35",
                "alphaMass": 8322
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/9x16-duration-600-frame-52.png",
                "sha256": "4ae22ba24dcec0b24fe7ef9cacb094abed7b33b15cddc2733c58f9c747d06338",
                "alphaMass": 26088
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/9x16-duration-600-frame-528.png",
                "sha256": "4ae22ba24dcec0b24fe7ef9cacb094abed7b33b15cddc2733c58f9c747d06338",
                "alphaMass": 26088
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/9x16-duration-600-frame-599.png",
                "sha256": "4ae22ba24dcec0b24fe7ef9cacb094abed7b33b15cddc2733c58f9c747d06338",
                "alphaMass": 26088
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 11.195638020833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/1x1-duration-60-frame-7.png",
                "sha256": "935f2ee58434fe8a0ec6f33d5ed41d968bb2f6d80611fc069bd387dcfaf73a06",
                "alphaMass": 5335
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/1x1-duration-60-frame-52.png",
                "sha256": "02f4d5f47798e2ec755082754d3c44c2715953c42a77abee3028a41c88b56bad",
                "alphaMass": 14619
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/1x1-duration-60-frame-59.png",
                "sha256": "02f4d5f47798e2ec755082754d3c44c2715953c42a77abee3028a41c88b56bad",
                "alphaMass": 14619
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 11.195638020833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/1x1-duration-600-frame-7.png",
                "sha256": "935f2ee58434fe8a0ec6f33d5ed41d968bb2f6d80611fc069bd387dcfaf73a06",
                "alphaMass": 5335
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/1x1-duration-600-frame-52.png",
                "sha256": "02f4d5f47798e2ec755082754d3c44c2715953c42a77abee3028a41c88b56bad",
                "alphaMass": 14619
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/1x1-duration-600-frame-528.png",
                "sha256": "02f4d5f47798e2ec755082754d3c44c2715953c42a77abee3028a41c88b56bad",
                "alphaMass": 14619
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/strike-word/1x1-duration-600-frame-599.png",
                "sha256": "02f4d5f47798e2ec755082754d3c44c2715953c42a77abee3028a41c88b56bad",
                "alphaMass": 14619
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
        "note": "A phrase strikes through one word and replaces it with a new line; title card."
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
      "bundleSha256": "4c790c60feff8d456f68b510c173f4f01b19446edef05a25cc8d6e8664cd4317",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.970348Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/strike-word/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/strike-word/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/strike-word/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 52,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "64b2fa2d1e4b55bef05a488f005bd93f2b37292b61a5737e61f8d6e6dda71662",
        "loop": "976918cafba0559a8854676227bcb56ee26ddf69b3b2a2b0b9a8050f80955bae",
        "detail": "4220fa014bf0d7cc1ce2c63ad7d16d683ed51c4ba6a0ad72f9d498a85b0187ba"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/strike-word/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/strike-word/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/strike-word/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 52,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "7b8e09d943c7dd426131b0223d865122eb59212fb4933c3e4c347672a0e34e61",
        "loop": "adc524e2f6c4e9386291f2420931d73d9263d9421e65f1a52740ec20d3f9aaf1",
        "detail": "db78cf55bf673ff4f7d5b1a6a6e5b22f6fbfcd4894fec67235eaee6e5beea0cf"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/strike-word/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/strike-word/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/strike-word/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 52,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 105,
      "sha256": {
        "poster": "777004a0dd8decb703044b7014b48db7146893510f8f025098d3b4414c48b653",
        "loop": "06ceb7a70879bfea94d0621ab01ebaa4310492881aed199a62bce5c222816511",
        "detail": "e220b8d51b86bb82c6f8c3043b3fd143f9c2c07db34bf6cffb779c034939ee02"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/4c790c60feff8d456f68b510c173f4f01b19446edef05a25cc8d6e8664cd4317/index.mjs",
    "sha256": "4c790c60feff8d456f68b510c173f4f01b19446edef05a25cc8d6e8664cd4317",
    "bytes": 160139,
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
    "at": "2026-10-07T02:26:55.090Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
