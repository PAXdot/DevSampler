// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "editorial",
  "mechanic": [
    "leader-lines-callout-actives"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "leader-lines-callout-actives",
    "beauty",
    "skincare",
    "ingredients",
    "callouts"
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
      "in": 90,
      "out": 0
    },
    "markers": {
      "settled": 90
    },
    "beats": [
      0,
      23,
      45,
      68,
      90
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
      "key": "headline",
      "type": "text",
      "maxChars": 40,
      "role": "headline"
    },
    {
      "key": "ing1",
      "type": "text",
      "maxChars": 16,
      "role": "label"
    },
    {
      "key": "ing2",
      "type": "text",
      "maxChars": 16,
      "role": "label"
    },
    {
      "key": "ing3",
      "type": "text",
      "maxChars": 16,
      "role": "label"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.serif",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "leader-lines-callout-actives",
      "prop": "transform",
      "from": "enter",
      "settledBy": 90,
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
    "ink": "#1F2F2C",
    "accent": "#1F4A44",
    "secondary": "#8FAA9D",
    "paper": "#D4E3DF",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "Four actives. Nothing you don't need.",
    "ing1": "Ceramide NP",
    "ing2": "Squalane",
    "ing3": "Niacinamide"
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
      "brand": "fonts.serif"
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
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "ing1",
      "label": "Ing 1",
      "type": "text",
      "max": 16,
      "role": "label"
    },
    {
      "key": "ing2",
      "label": "Ing 2",
      "type": "text",
      "max": 16,
      "role": "label"
    },
    {
      "key": "ing3",
      "label": "Ing 3",
      "type": "text",
      "max": 16,
      "role": "label"
    }
  ],
  "name": "Ingredient Callouts",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-beauty-ingredients",
    "bundleSha256": "cab74e93cb943afc2414eaf1e0ed0e2b4bf3223174a47c61b57ba83d35d3b216",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:28:11.017Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/16x9-paper.png",
        "sha256": "5af0e98c46de22e3446215efd20b1fc7dee291964b0e75be73c2c169adc2db02"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/16x9-night.png",
        "sha256": "764c791ab843682419dfa92f3e02b250c4f31ede4a1ad9d4faadb35e6bf11080"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/16x9-color.png",
        "sha256": "94fc6a4c63dde288cf2e61169f913b5ab1fa1022730873a5b6e46837c2e59818"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/9x16-paper.png",
        "sha256": "ee8b91e61013bcd5658cafb44d18a0ca35591c3289f3749b86c0f0531709af44"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/9x16-night.png",
        "sha256": "32108982dd090b8111bad4e8c013b652afd08c91dd3a9112b092feb2e8cf9571"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/9x16-color.png",
        "sha256": "be34da34c2c41e16694a2babe5d44d66e5cf61f51d941cec92b5e1f461894058"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/1x1-paper.png",
        "sha256": "f21b67289ff5c0946925b514d631cfe6f045601043ec6a77616f1de30d54654d"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/1x1-night.png",
        "sha256": "d687221b50e39bafac0ac94f82a07e9605fd44b9c17f318d417827bf3ec7016c"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/1x1-color.png",
        "sha256": "359397c5cb8c86d76daeb8c62e1fcb760536900acfac01159ec510cbba61fc40"
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
          "mg-beauty-ingredients--16x9",
          "mg-beauty-ingredients--9x16",
          "mg-beauty-ingredients--1x1"
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
            "paperNight": 23.59592013888889,
            "paperColor": 9.182264539930555,
            "region": {
              "left": 116,
              "top": 87,
              "width": 1688,
              "height": 895
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 47.68310546875,
            "paperColor": 19.98486328125,
            "region": {
              "left": 71,
              "top": 81,
              "width": 933,
              "height": 1663
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 31.025065104166668,
            "paperColor": 11.80224609375,
            "region": {
              "left": 65,
              "top": 68,
              "width": 949,
              "height": 849
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
            "occupancy": 1.0296342607902216,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0307872666813642,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0325519739788922,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9797515488963077,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9717618400240757,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0529971537226004,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9040161560737694,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9779348982391313,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.978966475136008,
            "bad": [],
            "measured": 9
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.9080946180555554,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 2.9458550347222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/16x9-duration-90-frame-10.png",
                "sha256": "5a9c3fefa85b715f6ab4b92dd8d432550f15fc4ec29331919b1894aa2b82df1b",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/16x9-duration-90-frame-89.png",
                "sha256": "fc2d77528e446bf3d2da3785e13f5a57a5a71964107b10908b6f456364e32b28",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/16x9-duration-90-frame-79.png",
                "sha256": "fc2d77528e446bf3d2da3785e13f5a57a5a71964107b10908b6f456364e32b28",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 2.9080946180555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/16x9-duration-900-frame-13.png",
                "sha256": "caac1c73affc38e4e439910a0483ec9eecfded8aa81939e1edba0abc313f658b",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/16x9-duration-900-frame-90.png",
                "sha256": "fc2d77528e446bf3d2da3785e13f5a57a5a71964107b10908b6f456364e32b28",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/16x9-duration-900-frame-792.png",
                "sha256": "fc2d77528e446bf3d2da3785e13f5a57a5a71964107b10908b6f456364e32b28",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/16x9-duration-900-frame-899.png",
                "sha256": "fc2d77528e446bf3d2da3785e13f5a57a5a71964107b10908b6f456364e32b28",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 6.039388020833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/9x16-duration-90-frame-10.png",
                "sha256": "77917e00a1a50860183684122d07d68968a83e28d8cbba23547e750998ede781",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/9x16-duration-90-frame-89.png",
                "sha256": "c0e5ad9e4ab437e16b0162fbc6a1add806c667179a288533fad1e308930999b8",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/9x16-duration-90-frame-79.png",
                "sha256": "c0e5ad9e4ab437e16b0162fbc6a1add806c667179a288533fad1e308930999b8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 6.012803819444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/9x16-duration-900-frame-13.png",
                "sha256": "1bd32d42807fe15c3fbd575247569c07361290388159306850ebe84a67c68538",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/9x16-duration-900-frame-90.png",
                "sha256": "c0e5ad9e4ab437e16b0162fbc6a1add806c667179a288533fad1e308930999b8",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/9x16-duration-900-frame-792.png",
                "sha256": "c0e5ad9e4ab437e16b0162fbc6a1add806c667179a288533fad1e308930999b8",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/9x16-duration-900-frame-899.png",
                "sha256": "c0e5ad9e4ab437e16b0162fbc6a1add806c667179a288533fad1e308930999b8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 2.884548611111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/1x1-duration-90-frame-10.png",
                "sha256": "c8eb4c3bb781dbfee8a5fda03662262c6a67b4eb8b997f71d7c8a243a109bf9a",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/1x1-duration-90-frame-89.png",
                "sha256": "bb8f26aff5d301edbd22c625f4a148fb151b1983c2b5174e02a84afb9efedbd3",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/1x1-duration-90-frame-79.png",
                "sha256": "cda37c0ecdafb2212187c7fd29e6631daedf6e21808f1d7949ec8a80a3e7838b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 2.8577473958333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/1x1-duration-900-frame-13.png",
                "sha256": "2b5bcf844059724f728a8f03cae703898d1454d956edb6d3dd190bcd612eb17d",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/1x1-duration-900-frame-90.png",
                "sha256": "bb8f26aff5d301edbd22c625f4a148fb151b1983c2b5174e02a84afb9efedbd3",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/1x1-duration-900-frame-792.png",
                "sha256": "bb8f26aff5d301edbd22c625f4a148fb151b1983c2b5174e02a84afb9efedbd3",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-beauty-ingredients/1x1-duration-900-frame-899.png",
                "sha256": "bb8f26aff5d301edbd22c625f4a148fb151b1983c2b5174e02a84afb9efedbd3",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "product-ui",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Ingredient callouts with percentages around a balm tube and a serif tagline; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 76,
        "compared": 76,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "cab74e93cb943afc2414eaf1e0ed0e2b4bf3223174a47c61b57ba83d35d3b216",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.084Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-ingredients/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-ingredients/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-ingredients/16x9/detail.mp4",
      "bg": "#e5eeeb",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2f5d59a5cb6706274abc01fec76f40a39275859175f84c69f2e45c5bf9ce6b5c",
        "loop": "feb9b5439ec9f709cdaaa3d4fd6517c25b1bd9dd3c6ec19ff7e09ccdb6f3b243",
        "detail": "df645a987ff5b916456b05aa9178beadad882d8481cffbf65b493f054f156b56"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-ingredients/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-ingredients/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-ingredients/9x16/detail.mp4",
      "bg": "#e5eeeb",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "441b30290b99e25b503cfef17f0a64a0e7226cad69437ef6be2e593972a875da",
        "loop": "1e01ddfd0e374df260261c5aac1b8a8947388ed99282e49fb80a310f8082d374",
        "detail": "0328a472513d89950689b724b1a3ff9a710f9499d724f8790b7583e80c89da55"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-ingredients/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-ingredients/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-ingredients/1x1/detail.mp4",
      "bg": "#e5eeeb",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c0e12e6c08dab5cc258c2b4ae34fb04047de7e846ac555db0ae61f50810c7acd",
        "loop": "dd10c42915bdff19fd18ffc75a544ba52bb00dfe6f89d7cc2f9d4fedd8abe80c",
        "detail": "ad8047a65711ba03e82a5767bdb03a464a17e178b42646b880cc04a0eeb0c925"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/cab74e93cb943afc2414eaf1e0ed0e2b4bf3223174a47c61b57ba83d35d3b216/index.mjs",
    "sha256": "cab74e93cb943afc2414eaf1e0ed0e2b4bf3223174a47c61b57ba83d35d3b216",
    "bytes": 268093,
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
    "at": "2026-10-09T07:11:08.983Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
