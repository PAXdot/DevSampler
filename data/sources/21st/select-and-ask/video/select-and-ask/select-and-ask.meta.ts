// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "text selection",
    "highlight",
    "toolbar",
    "ask ai",
    "editor",
    "i-beam",
    "ai assistant",
    "writing"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 75,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 120,
      "out": 0
    },
    "markers": {
      "settled": 120,
      "select": 32,
      "toolbar": 62,
      "click": 98
    },
    "beats": [
      0,
      32,
      62,
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
      "key": "lead",
      "type": "text",
      "maxChars": 14,
      "lines": 1,
      "role": "body"
    },
    {
      "key": "phrase",
      "type": "text",
      "maxChars": 22,
      "lines": 1,
      "role": "body"
    },
    {
      "key": "rest",
      "type": "text",
      "maxChars": 90,
      "lines": 4,
      "role": "body"
    },
    {
      "key": "askLabel",
      "type": "text",
      "maxChars": 10,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "surfaceColor": "colors.background",
    "background": "colors.background",
    "fontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "cursor",
      "prop": "path",
      "from": "below",
      "settledBy": 30,
      "easing": "ease"
    },
    {
      "target": "selection",
      "prop": "width",
      "from": "0",
      "settledBy": 60,
      "easing": "ease"
    },
    {
      "target": "toolbar",
      "prop": "scale",
      "from": "0.9",
      "settledBy": 90,
      "easing": "spring"
    },
    {
      "target": "cursor",
      "prop": "path",
      "settledBy": 92,
      "easing": "ease"
    },
    {
      "target": "askLabel",
      "prop": "fill",
      "settledBy": 112,
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (I-beam selects a phrase and clicks Ask AI in the toolbar, 2026-10-07)"
  },
  "job": "cursors",
  "language": "product-ui",
  "mechanic": [
    "text-select"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "lead": "Blocks",
    "phrase": "ship with motion",
    "rest": ", so the video you make looks exactly like the product.",
    "askLabel": "Ask AI",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "surfaceColor": "#111114",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "lead",
      "label": "Lead",
      "type": "text",
      "max": 14,
      "role": "body"
    },
    {
      "key": "phrase",
      "label": "Phrase",
      "type": "text",
      "max": 22,
      "role": "body"
    },
    {
      "key": "rest",
      "label": "Rest",
      "type": "text",
      "max": 90,
      "role": "body"
    },
    {
      "key": "askLabel",
      "label": "Ask label",
      "type": "text",
      "max": 10,
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
      "brand": "fonts.body"
    }
  ],
  "name": "Select Text and Ask AI",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "select-and-ask",
    "bundleSha256": "8b131b70425375ccf81e3da786e2145400c01824a1a37c94abb33e9ab2c6dfd2",
    "sourceSnapshot": {
      "sha256": "e88d3310904f310f1bb8a580317c917e90c868c8a36f0a88fbdd522ee35c5077",
      "files": 1558
    },
    "renderedAt": "2026-10-07T23:44:09.649Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/16x9-paper.png",
        "sha256": "5b390d9a8f707a048616c7aa3d3a163933bffd649e10019dfbfc3c45f532ffe9"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/16x9-night.png",
        "sha256": "32247312c33d34df928b29c361902971016563ea58ab3147cbe33707f89360b3"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/16x9-color.png",
        "sha256": "4d6c4055b87336949c9a415846f6b0a5e49eeb5dbfe14a87e50953f823f88680"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/9x16-paper.png",
        "sha256": "87c4dde47f5ee9938dd32c50436daa3c47002b27b918693a65a31c2897d3a3da"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/9x16-night.png",
        "sha256": "8a0983988b32a15def3f02ae3b48b27cc0d600cc57d4804c278c5e9c557e2a2c"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/9x16-color.png",
        "sha256": "a52efe5f61edc4c8fe41a76d7f8842cad3a07411550f5a5a4a0d9b93a60983a9"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/1x1-paper.png",
        "sha256": "d0dd1a7ef36c2a23cf64dc96b94441868906f38314461842d965e7e2a1abfe57"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/1x1-night.png",
        "sha256": "5200d83ee1a46e766d3278176d9d428dc107bc80102a8ad370bd8315edf1e405"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/1x1-color.png",
        "sha256": "c66e631b6ecdc52f97839300960438ef1b1e520d69fb7f5fb78dd4689029b77c"
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
          "select-and-ask--16x9",
          "select-and-ask--9x16",
          "select-and-ask--1x1"
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
            "paperNight": 109.60172526041667,
            "paperColor": 20.39401584201389,
            "region": {
              "left": 239,
              "top": 269,
              "width": 1442,
              "height": 596
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 117.6171875,
            "paperColor": 17.73581271701389,
            "region": {
              "left": 4,
              "top": 405,
              "width": 1072,
              "height": 1166
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 106.55460611979167,
            "paperColor": 20.678846571180557,
            "region": {
              "left": 27,
              "top": 249,
              "width": 1026,
              "height": 636
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
            "occupancy": 0.5276269780031355,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5873919140701549,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5276269780031355,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7845525041292238,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8542987668318358,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7845525041292238,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7049230300259108,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7928634416729656,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7049230300259108,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.8160807291666667,
        "frames": [
          18,
          120,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 75,
            "averageChannelDifference": 1.8160807291666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/16x9-duration-75-frame-9.png",
                "sha256": "2a92f29b63a02f86b36c7b30163ed0336a63c9b49048f654d35d1585f7d74557",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/16x9-duration-75-frame-74.png",
                "sha256": "1b6b95914eaaf2888c71ffb3cfd9ab1587ffe46a23cf1f24f1cfc25a1beb6342",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/16x9-duration-75-frame-66.png",
                "sha256": "1b6b95914eaaf2888c71ffb3cfd9ab1587ffe46a23cf1f24f1cfc25a1beb6342",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 1.8160807291666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/16x9-duration-600-frame-18.png",
                "sha256": "b58425a7b969b179987926a5813fc2be615a5bfe6d2adf9257263351cc9069b3",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/16x9-duration-600-frame-120.png",
                "sha256": "1b6b95914eaaf2888c71ffb3cfd9ab1587ffe46a23cf1f24f1cfc25a1beb6342",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/16x9-duration-600-frame-528.png",
                "sha256": "1b6b95914eaaf2888c71ffb3cfd9ab1587ffe46a23cf1f24f1cfc25a1beb6342",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/16x9-duration-600-frame-599.png",
                "sha256": "1b6b95914eaaf2888c71ffb3cfd9ab1587ffe46a23cf1f24f1cfc25a1beb6342",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 75,
            "averageChannelDifference": 3.5560980902777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/9x16-duration-75-frame-9.png",
                "sha256": "dfa13bf2e7b89f53e5780dff04133626e92e171bfbda34d886efe527c9b11627",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/9x16-duration-75-frame-74.png",
                "sha256": "ba9604072b6d49455aaab3f2aa7da7dfb2d3345a60f211954caf3bcc34439b58",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/9x16-duration-75-frame-66.png",
                "sha256": "ba9604072b6d49455aaab3f2aa7da7dfb2d3345a60f211954caf3bcc34439b58",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 3.5560980902777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/9x16-duration-600-frame-18.png",
                "sha256": "dfa13bf2e7b89f53e5780dff04133626e92e171bfbda34d886efe527c9b11627",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/9x16-duration-600-frame-120.png",
                "sha256": "ba9604072b6d49455aaab3f2aa7da7dfb2d3345a60f211954caf3bcc34439b58",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/9x16-duration-600-frame-528.png",
                "sha256": "ba9604072b6d49455aaab3f2aa7da7dfb2d3345a60f211954caf3bcc34439b58",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/9x16-duration-600-frame-599.png",
                "sha256": "66e15be53980f36c53679f753e9fa76321a6ce300c7e7bd687d545495789053e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 75,
            "averageChannelDifference": 2.4676649305555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/1x1-duration-75-frame-9.png",
                "sha256": "ed0593fb0b214b319899a576c0fa26c25f4223b5d4704d5a2a8b725b3cbba391",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/1x1-duration-75-frame-74.png",
                "sha256": "5bac9e61451eb94b2a36452a6a732499e46c591ad2a77cdc391ce4f0d9affa86",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/1x1-duration-75-frame-66.png",
                "sha256": "5bac9e61451eb94b2a36452a6a732499e46c591ad2a77cdc391ce4f0d9affa86",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 2.4676649305555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/1x1-duration-600-frame-18.png",
                "sha256": "ed0593fb0b214b319899a576c0fa26c25f4223b5d4704d5a2a8b725b3cbba391",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/1x1-duration-600-frame-120.png",
                "sha256": "5bac9e61451eb94b2a36452a6a732499e46c591ad2a77cdc391ce4f0d9affa86",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/1x1-duration-600-frame-528.png",
                "sha256": "5bac9e61451eb94b2a36452a6a732499e46c591ad2a77cdc391ce4f0d9affa86",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/select-and-ask/1x1-duration-600-frame-599.png",
                "sha256": "5bac9e61451eb94b2a36452a6a732499e46c591ad2a77cdc391ce4f0d9affa86",
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
        "note": "An I-beam selects a phrase, a formatting toolbar pops up and the cursor clicks Ask AI."
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
      "bundleSha256": "8b131b70425375ccf81e3da786e2145400c01824a1a37c94abb33e9ab2c6dfd2",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-07",
      "at": "2026-10-07T23:49:44.284Z",
      "basis": "Cursor blocks: 10 interactions and 12 cursor styles, approved by the owner from the prototypes"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/select-and-ask/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/select-and-ask/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/select-and-ask/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 120,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "a7f01f82178c20068c9be062fad5722a97eb98350bac11f53cc377fe4281d8a9",
        "loop": "7113655aead7ff6923cfe8adaba7292acf08045fec278a44242d41f4026ff521",
        "detail": "8ac7f30173f1c04133447966701e8793887ba7d4c841209a74e7df9dee24f00a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/select-and-ask/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/select-and-ask/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/select-and-ask/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 120,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "94cfdab024d3e41beaa495ee6b95316c3e9e95b73635fb97af67fd0e7a030f06",
        "loop": "8edb20c572f57ca2df3d340e75e4c00a88625d92aa270802f9becf434e4aedfb",
        "detail": "a5b6dd8ce1f9fd785d31a8074d59bb4fdcbf2a80dd7ca82b41557e295c3e4033"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/select-and-ask/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/select-and-ask/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/select-and-ask/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 120,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "b20d57b7bc1603e6b55702cde29cee335c600874fe1eec514f4a152122a2db21",
        "loop": "6818ead0f65c08723ee10d0d2be0956651351ad2b36b4ef52018c5d8d34c631a",
        "detail": "d5d0f6620646b502fafd1673430817f3b8a49d498fbef7cd4853e97af0f52973"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/8b131b70425375ccf81e3da786e2145400c01824a1a37c94abb33e9ab2c6dfd2/index.mjs",
    "sha256": "8b131b70425375ccf81e3da786e2145400c01824a1a37c94abb33e9ab2c6dfd2",
    "bytes": 177630,
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
    "at": "2026-10-08T00:04:47.102Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
