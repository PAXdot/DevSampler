// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "spotlight",
    "torch",
    "flashlight",
    "reveal",
    "glow",
    "landing page",
    "hover",
    "dark mode"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 160,
      "min": 80,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 128,
      "out": 0
    },
    "markers": {
      "settled": 128,
      "sweep": 22,
      "cards": 58,
      "reveal": 98
    },
    "beats": [
      0,
      22,
      58,
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
      "key": "headline",
      "type": "text",
      "maxChars": 44,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "cards",
      "type": "list",
      "maxChars": 14,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "surfaceColor": "colors.background",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "cursor",
      "prop": "path",
      "from": "bottom-right",
      "settledBy": 100,
      "easing": "ease"
    },
    {
      "target": "spotlight",
      "prop": "radius",
      "settledBy": 124,
      "easing": "ease"
    },
    {
      "target": "card",
      "prop": "lift",
      "settledBy": 100,
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
      160
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (cursor torch sweeps a dark page, then the light opens, 2026-10-07)"
  },
  "job": "cursors",
  "language": "aura",
  "mechanic": [
    "torch-reveal"
  ],
  "energy": "calm",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "headline": "Every component ships with its motion",
    "cards": [
      "Hero",
      "Pricing",
      "Testimonials"
    ],
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "secondary": "#808286",
    "surfaceColor": "#09090B",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 44,
      "role": "headline"
    },
    {
      "key": "cards",
      "label": "Cards",
      "type": "list",
      "max": 3,
      "role": "label"
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
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
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
    }
  ],
  "name": "Cursor Spotlight Reveal",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cursor-spotlight",
    "bundleSha256": "d012874d42a643ce33cd2772cbb98ee8ce5fa2e4c03b5cd60aefd6e0a3aff4d2",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:36:17.218Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/16x9-paper.png",
        "sha256": "25d0052d439cd59026fccaca4d521a0cefcc94a726ff8371e2ad9ac789825b42"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/16x9-night.png",
        "sha256": "a1f1041ba55c22a8bf9cdbad164bee77ec1c7d3d630181bd0154eddf7d2f734d"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/16x9-color.png",
        "sha256": "84dc8593fd8b80d1fededce49ec700cb1576be36e6dbe73c5fc6ca6eaf1e642a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/9x16-paper.png",
        "sha256": "1980a29d7cfab7f2fee8fb4e82b6b5535d49a1dccee81610ce6962d1fe609c9a"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/9x16-night.png",
        "sha256": "945bb888fcaac25c308fd53950278ea7aec5eadcdfcf599453b72988ab138cb3"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/9x16-color.png",
        "sha256": "3ead5aa4c2e85c4f93e00dfc1919b68b1b5d60c469156c0e27a39581349323da"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/1x1-paper.png",
        "sha256": "3c968562787b29bff36bd0e3748ea813ab58b0415a28a4b7c2804004909a6667"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/1x1-night.png",
        "sha256": "b46b3124c027d6070fc8f5fe8edcd888f316563e27922fefddb1b95af500c862"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/1x1-color.png",
        "sha256": "32f32646f80cc33b359dc740c998d8d36a636bcf2722ca9dba6e0654e0f4b6fe"
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
          "cursor-spotlight--16x9",
          "cursor-spotlight--9x16",
          "cursor-spotlight--1x1"
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
            "paperNight": 51.49677191840278,
            "paperColor": 33.544650607638886,
            "region": {
              "left": 218,
              "top": 199,
              "width": 1484,
              "height": 777
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 82.47672526041667,
            "paperColor": 27.42827690972222,
            "region": {
              "left": 8,
              "top": 343,
              "width": 1064,
              "height": 1324
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 47.377197265625,
            "paperColor": 35.65831163194444,
            "region": {
              "left": 25,
              "top": 227,
              "width": 1030,
              "height": 716
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
            "occupancy": 0.7488510128845779,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.78808191872428,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7027225756557769,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9389828462249099,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.962822114442485,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9130002309565803,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8352249221590787,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8948230927030164,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7922704975908975,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 23.500651041666668,
        "frames": [
          19,
          128,
          159
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 80,
            "averageChannelDifference": 23.419921875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/16x9-duration-80-frame-9.png",
                "sha256": "ee06d9eaed5cdac1cdce1084557b201ea22e801f6ec08f429b422e6da60ddeb1",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/16x9-duration-80-frame-79.png",
                "sha256": "4165364cb1c192639609a93715f6d981e34d8fe235fd5599ea7626270e9db5d4",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/16x9-duration-80-frame-70.png",
                "sha256": "d946333bb18a8cefbf22c1c81619b9960dea0264cf3a3765fa3c1d71671b7d25",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 23.500651041666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/16x9-duration-600-frame-19.png",
                "sha256": "1fbf134184474603f5b66ff6ca2947d5bb88da5ed5670af1d47628ccca243cf6",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/16x9-duration-600-frame-128.png",
                "sha256": "d946333bb18a8cefbf22c1c81619b9960dea0264cf3a3765fa3c1d71671b7d25",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/16x9-duration-600-frame-528.png",
                "sha256": "d946333bb18a8cefbf22c1c81619b9960dea0264cf3a3765fa3c1d71671b7d25",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/16x9-duration-600-frame-599.png",
                "sha256": "d946333bb18a8cefbf22c1c81619b9960dea0264cf3a3765fa3c1d71671b7d25",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 80,
            "averageChannelDifference": 20.338541666666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/9x16-duration-80-frame-9.png",
                "sha256": "f608f607b66c0ceb62a518304679cb1ecef22c1304b157916982b88211b2285e",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/9x16-duration-80-frame-79.png",
                "sha256": "9290f3165c10e18baa2c7f35115a24011940a8eff42f949ad4672ad1c1925b86",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/9x16-duration-80-frame-70.png",
                "sha256": "ccd75baf004ae557475593a84d58c0e7eeabf774d1d79fa2ff89babbb91883d4",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 20.4833984375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/9x16-duration-600-frame-19.png",
                "sha256": "ca0752dc5beb9fa207f2a91ff035d6a0dc2d45acf3fdc59ed131ac74a59f687f",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/9x16-duration-600-frame-128.png",
                "sha256": "9290f3165c10e18baa2c7f35115a24011940a8eff42f949ad4672ad1c1925b86",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/9x16-duration-600-frame-528.png",
                "sha256": "9290f3165c10e18baa2c7f35115a24011940a8eff42f949ad4672ad1c1925b86",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/9x16-duration-600-frame-599.png",
                "sha256": "9290f3165c10e18baa2c7f35115a24011940a8eff42f949ad4672ad1c1925b86",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 80,
            "averageChannelDifference": 28.62944878472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/1x1-duration-80-frame-9.png",
                "sha256": "e2cdc301548c3def2dc3df281dc557a9c7b5125802954bafb6ea8d9ee426735a",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/1x1-duration-80-frame-79.png",
                "sha256": "e31caea78ef7d5ce456631b1be92f724e3d2f180bcbd384e38f1b6431987fdf9",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/1x1-duration-80-frame-70.png",
                "sha256": "e31caea78ef7d5ce456631b1be92f724e3d2f180bcbd384e38f1b6431987fdf9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 28.75759548611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/1x1-duration-600-frame-19.png",
                "sha256": "e50615f331633cc1e2716630f7d445d2f985ecd043a7bab037266257bbe16ca0",
                "alphaMass": 587520
              },
              {
                "frame": 128,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/1x1-duration-600-frame-128.png",
                "sha256": "e31caea78ef7d5ce456631b1be92f724e3d2f180bcbd384e38f1b6431987fdf9",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/1x1-duration-600-frame-528.png",
                "sha256": "e31caea78ef7d5ce456631b1be92f724e3d2f180bcbd384e38f1b6431987fdf9",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/cursor-spotlight/1x1-duration-600-frame-599.png",
                "sha256": "e31caea78ef7d5ce456631b1be92f724e3d2f180bcbd384e38f1b6431987fdf9",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "cursors",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A cursor sweeps a spotlight across three section cards under a headline; cards are brand blue with neutral highlights, no purple."
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
      "bundleSha256": "d012874d42a643ce33cd2772cbb98ee8ce5fa2e4c03b5cd60aefd6e0a3aff4d2",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-spotlight/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-spotlight/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-spotlight/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 128,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 160,
      "sha256": {
        "poster": "2532c51fac0673b3f714b0edcfe45f072ef8fbfe3dd7f139fc5fa34c0c304ea1",
        "loop": "50847061276825b747294034fd5457b49316b6d375c01a3c44b46fb406379c9d",
        "detail": "901512bc63533c5167ecd3f53f778e1219671a1f5d30847788c333e3c0a5b890"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-spotlight/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-spotlight/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-spotlight/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 128,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 160,
      "sha256": {
        "poster": "3983421dc3dbb869163c3142f6d55f6246f87abfc7d730e1860362841b2b177a",
        "loop": "5aaa8b6e82bbe94c7fcaa8d86f235e32fa36752c41d1d0e5404dff7c149b8bf8",
        "detail": "8c30f16839c66369ddf7e34003531d58b2b7e5dac2381f28a9dfb3e80a10a184"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-spotlight/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-spotlight/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-spotlight/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 128,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 160,
      "sha256": {
        "poster": "93754e5f21a50a196a0452f6084b4e0088fde9abe00a9bee33e5fc7eeaa8220e",
        "loop": "bcd0edc6ebc9c54ee1a149fed54e1bf58d861baa5c4784bb3097fdcdf4d16836",
        "detail": "ab490e7a1d7fa36ae015c5ec351ae8ebda5214b61335ea62041ccaa812c5d021"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d012874d42a643ce33cd2772cbb98ee8ce5fa2e4c03b5cd60aefd6e0a3aff4d2/index.mjs",
    "sha256": "d012874d42a643ce33cd2772cbb98ee8ce5fa2e4c03b5cd60aefd6e0a3aff4d2",
    "bytes": 177519,
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
    "at": "2026-10-09T03:13:42.251Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
