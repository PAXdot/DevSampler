// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "magnetic",
    "button",
    "click",
    "cta",
    "hover",
    "press",
    "interaction"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 96,
      "min": 60,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 70,
      "out": 0
    },
    "markers": {
      "settled": 70,
      "click": 44
    },
    "beats": [
      0,
      44,
      52
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
      "key": "kicker",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "kicker"
    },
    {
      "key": "label",
      "type": "text",
      "maxChars": 20,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "doneLabel",
      "type": "text",
      "maxChars": 20,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "hint",
      "type": "text",
      "maxChars": 40,
      "lines": 2,
      "role": "subline"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "surfaceColor": "colors.background",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "cursor",
      "prop": "path",
      "from": "bottom-right",
      "settledBy": 38,
      "easing": "ease"
    },
    {
      "target": "button",
      "prop": "xy",
      "settledBy": 44,
      "easing": "spring"
    },
    {
      "target": "button",
      "prop": "fill",
      "settledBy": 58,
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
      96
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (magnetic button pulled toward the cursor, 2026-10-07)"
  },
  "job": "cursors",
  "language": "product-ui",
  "mechanic": [
    "magnet-press"
  ],
  "energy": "punchy",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "kicker": "Free for 14 days",
    "label": "Get started",
    "doneLabel": "You're in",
    "hint": "No credit card required",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "surfaceColor": "#09090B",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 32,
      "role": "kicker"
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 20,
      "role": "label"
    },
    {
      "key": "doneLabel",
      "label": "Done label",
      "type": "text",
      "max": 20,
      "role": "label"
    },
    {
      "key": "hint",
      "label": "Hint",
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
  "name": "Magnetic Button Click",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "magnetic-button",
    "bundleSha256": "aae1f523842252f99322b5df01afb1518fb00156e7fa47c13fd77c6888f83fa6",
    "sourceSnapshot": {
      "sha256": "e88d3310904f310f1bb8a580317c917e90c868c8a36f0a88fbdd522ee35c5077",
      "files": 1558
    },
    "renderedAt": "2026-10-07T23:41:36.588Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/16x9-paper.png",
        "sha256": "9ccb6548e23068bc1b899b08b3d47d4f2d2a3c6303fc825ed9c6d6afc9384a58"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/16x9-night.png",
        "sha256": "45fabba2b74799c7f8e16bcc0c1d1600033c8650626e957c25f2815dc975be19"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/16x9-color.png",
        "sha256": "78acc12780764d9dd5407331b3c29ac3b13b6fd31375981d4c4837d1eb9cc227"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/9x16-paper.png",
        "sha256": "c74054f8d7a1c485d1591073aecb4e9fd296b1f6cebe0b4d890c4779ab909254"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/9x16-night.png",
        "sha256": "b25fd244fa45a0535fade0527294b0d2225366916032c2b8aba9a2174ed0f2a3"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/9x16-color.png",
        "sha256": "3911805cb33f118db9c20e65147722374a1333539b6085c8068fb42d9c1e5136"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/1x1-paper.png",
        "sha256": "20b7c3d2300d728f793350e45f61eb9c32913338c61f0af17435895c58cf3b61"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/1x1-night.png",
        "sha256": "4c19997cd60f3939eab979f30f04d12695077ab17990e0b3f5aa33a3b205a2a4"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/1x1-color.png",
        "sha256": "4bf41f104c35a24995efc675b2419e8bff0421237d7e7acd4c2dcd0f534340c8"
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
          "magnetic-button--16x9",
          "magnetic-button--9x16",
          "magnetic-button--1x1"
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
            "paperNight": 35.32012261284722,
            "paperColor": 37.242702907986114,
            "region": {
              "left": 557,
              "top": 345,
              "width": 811,
              "height": 526
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 37.43701171875,
            "paperColor": 34.345947265625,
            "region": {
              "left": 0,
              "top": 534,
              "width": 1080,
              "height": 1034
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 35.05615234375,
            "paperColor": 37.767605251736114,
            "region": {
              "left": 96,
              "top": 347,
              "width": 904,
              "height": 524
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
            "occupancy": 0.2915567107758742,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2915567107758742,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2915567107758742,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.761763038548753,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.761024896069539,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7632393235071808,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5755640161871791,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5755640161871791,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5755640161871791,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.360460069444445,
        "frames": [
          10,
          70,
          95
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 5.356987847222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/16x9-duration-60-frame-7.png",
                "sha256": "6dde58ca20c7ea1b3be3535e3a3220ff9626c7fc05cf59a99e32fd4c2b567b5e",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/16x9-duration-60-frame-59.png",
                "sha256": "d4b263510ab7bd21b6cffd99d24e2b314b4be667b636db81ef123465b24afca1",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/16x9-duration-60-frame-52.png",
                "sha256": "d4b263510ab7bd21b6cffd99d24e2b314b4be667b636db81ef123465b24afca1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 5.360460069444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/16x9-duration-600-frame-10.png",
                "sha256": "9b83fec1418cc36d960213d880a714aa446e9b4625de46dad77437c5baf53688",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/16x9-duration-600-frame-70.png",
                "sha256": "d4b263510ab7bd21b6cffd99d24e2b314b4be667b636db81ef123465b24afca1",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/16x9-duration-600-frame-528.png",
                "sha256": "7475946a63c17f4d23b56f305e24f61a1f5881aab8d431667e5417ecc30c785e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/16x9-duration-600-frame-599.png",
                "sha256": "d4b263510ab7bd21b6cffd99d24e2b314b4be667b636db81ef123465b24afca1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 11.110243055555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/9x16-duration-60-frame-7.png",
                "sha256": "528ace7e18b596c55167fc336835ceb1550bd09407074eea6cdd67d00bfab34f",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/9x16-duration-60-frame-59.png",
                "sha256": "0e5b62db9953c1ad60726e8b713f91b8cc0f63c99335e9c56d355a45a339ae7d",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/9x16-duration-60-frame-52.png",
                "sha256": "0e5b62db9953c1ad60726e8b713f91b8cc0f63c99335e9c56d355a45a339ae7d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 11.289388020833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/9x16-duration-600-frame-10.png",
                "sha256": "0ae64db75fea525a19a2f83435db4cc616200e94048a2691400b39e0dd734271",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/9x16-duration-600-frame-70.png",
                "sha256": "0e5b62db9953c1ad60726e8b713f91b8cc0f63c99335e9c56d355a45a339ae7d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/9x16-duration-600-frame-528.png",
                "sha256": "0e5b62db9953c1ad60726e8b713f91b8cc0f63c99335e9c56d355a45a339ae7d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/9x16-duration-600-frame-599.png",
                "sha256": "0e5b62db9953c1ad60726e8b713f91b8cc0f63c99335e9c56d355a45a339ae7d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 9.345703125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/1x1-duration-60-frame-7.png",
                "sha256": "28197f9448e3776be3e68075f46100f3c442efac3c5735ff8ef92ddc5a218854",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/1x1-duration-60-frame-59.png",
                "sha256": "b3b77423e85548fad988dcdccc9527331b67ebccbef584d9a1853eab2d4d62b1",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/1x1-duration-60-frame-52.png",
                "sha256": "b3b77423e85548fad988dcdccc9527331b67ebccbef584d9a1853eab2d4d62b1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 9.308919270833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/1x1-duration-600-frame-10.png",
                "sha256": "fdd0ba9f59d57946426d95895365b0ad42335f31bc7f962cdfff4e0d2d12354c",
                "alphaMass": 587520
              },
              {
                "frame": 70,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/1x1-duration-600-frame-70.png",
                "sha256": "e1133a4e5b1e3c2459ea343e60b2543087da2519b547c85000bdbea32be1870a",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/1x1-duration-600-frame-528.png",
                "sha256": "e1133a4e5b1e3c2459ea343e60b2543087da2519b547c85000bdbea32be1870a",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/magnetic-button/1x1-duration-600-frame-599.png",
                "sha256": "e1133a4e5b1e3c2459ea343e60b2543087da2519b547c85000bdbea32be1870a",
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
        "note": "Button leans toward the cursor, is clicked and fills with the brand accent."
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
      "bundleSha256": "aae1f523842252f99322b5df01afb1518fb00156e7fa47c13fd77c6888f83fa6",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-07",
      "at": "2026-10-07T23:49:44.271Z",
      "basis": "Cursor blocks: 10 interactions and 12 cursor styles, approved by the owner from the prototypes"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/magnetic-button/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/magnetic-button/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/magnetic-button/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 70,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 96,
      "sha256": {
        "poster": "3487cad7f3833bf4ddcdbd96ab8f58e8bffc8dcfac2a419a8df1c3701144b232",
        "loop": "60b9be39f9cdffd69dfe2a025d7716569d291029ece7da7aa4218c3f4288e4cb",
        "detail": "81e53bd85146b70c29ef644502a68824e6b745ecef213dc522288ea8038fb37e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/magnetic-button/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/magnetic-button/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/magnetic-button/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 70,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 96,
      "sha256": {
        "poster": "2fdc470a3a4ab1bea949f55e04541e3134f388146cd1c5c87e22f0df98446ba2",
        "loop": "27b8b9b27abd119dca6523c526b7872870757872767d2a66532ac3097d7c6bad",
        "detail": "d7f3f5bdd04ef1707364cfc8e7f76e40d320ee7f3f471f207f060cbb8a3c8a33"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/magnetic-button/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/magnetic-button/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/magnetic-button/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 70,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 96,
      "sha256": {
        "poster": "dfefef2fc9d84584cb65b70980c87e8ad11639829bd2b5a344f908a34d6f114c",
        "loop": "e86b0a85cfa0138bd2d47bd1128b8d8d07015a065012d2383f75a5eba8da5a1a",
        "detail": "7db526dea4cd21010a1fe974407cabb8c0ccc72fbbc6fe58f3d7202dcaee3674"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/aae1f523842252f99322b5df01afb1518fb00156e7fa47c13fd77c6888f83fa6/index.mjs",
    "sha256": "aae1f523842252f99322b5df01afb1518fb00156e7fa47c13fd77c6888f83fa6",
    "bytes": 174641,
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
    "at": "2026-10-08T00:03:54.894Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
