// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "hold",
    "long press",
    "deploy",
    "confirm",
    "button",
    "progress ring",
    "launch",
    "cta"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 140,
      "min": 70,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 112,
      "out": 0
    },
    "markers": {
      "settled": 112,
      "hold": 30,
      "done": 84
    },
    "beats": [
      0,
      30,
      84
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
      "key": "context",
      "type": "text",
      "maxChars": 28,
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
      "settledBy": 26,
      "easing": "ease"
    },
    {
      "target": "button",
      "prop": "fill",
      "from": "left",
      "settledBy": 84,
      "easing": "ease"
    },
    {
      "target": "sparks",
      "prop": "burst",
      "settledBy": 108,
      "easing": "ease"
    },
    {
      "target": "doneLabel",
      "prop": "y",
      "settledBy": 94,
      "easing": "spring"
    },
    {
      "target": "tile",
      "prop": "icon",
      "from": "rocket",
      "settledBy": 106,
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
      140
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (cursor holds a button until it fills and bursts, 2026-10-07)"
  },
  "job": "cursors",
  "language": "product-ui",
  "mechanic": [
    "hold-charge"
  ],
  "energy": "punchy",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "context": "Production · main",
    "label": "Hold to deploy",
    "doneLabel": "Deployed",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "secondary": "#808286",
    "surfaceColor": "#09090B",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "context",
      "label": "Context",
      "type": "text",
      "max": 28,
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
  "name": "Hold to Deploy",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "hold-to-confirm",
    "bundleSha256": "327d88bbfc1d48d937ec7beda524e86963c684fb5f03e4a2e6cb2e429c412aa8",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:34:59.647Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/16x9-paper.png",
        "sha256": "8bb2edb4aa9fc383757b19ee8de3b869a745420842e9d3596edb80c00037e792"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/16x9-night.png",
        "sha256": "384d8d4a12b5d7234729026aa73020f22d5e498122dc2e1437b04406190af386"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/16x9-color.png",
        "sha256": "f1bccbcc8d6f6e25a3b10771ab4489c09ba353458c49cf90b490cae2d7988370"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/9x16-paper.png",
        "sha256": "d93004197a368182eb1ed61621c920c06100d3d638b71f52a2c2eadf3710a1f9"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/9x16-night.png",
        "sha256": "e14fbee1e7fd089ae2434fc0c693f25c9f66f545fb5eb359d020851975a42fc4"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/9x16-color.png",
        "sha256": "4d3dbeffca63c8da0adf85bb00ba376f753f1f26fb4a35c7f1964a6d266022f0"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/1x1-paper.png",
        "sha256": "89cdffa3889f9f48271787584419e0bd876055b4fdc14f1cffeb6d9be928ccbb"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/1x1-night.png",
        "sha256": "6874dece3b48f2bd89c7b17f2bc0fb1262e1e9cbd26e3fe4fe314c48082e50b8"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/1x1-color.png",
        "sha256": "bdf1281d0abc92eea43dd6cd3b6e43a78fbf646b6caf0763ca9cf40552be96ff"
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
          "hold-to-confirm--16x9",
          "hold-to-confirm--9x16",
          "hold-to-confirm--1x1"
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
            "paperNight": 47.554280598958336,
            "paperColor": 33.00678168402778,
            "region": {
              "left": 277,
              "top": 271,
              "width": 1346,
              "height": 509
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 46.14325629340278,
            "paperColor": 27.73440212673611,
            "region": {
              "left": 0,
              "top": 402,
              "width": 1080,
              "height": 1109
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 41.70201280381944,
            "paperColor": 29.74712456597222,
            "region": {
              "left": 86,
              "top": 112,
              "width": 908,
              "height": 829
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
            "occupancy": 0.4305045143700485,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.468251617133479,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4305045143700485,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8067692258230454,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8186000094482239,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8067692258230454,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8683860489783478,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9146065261952977,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8683860489783478,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.527886284722221,
        "frames": [
          16,
          112,
          139
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 70,
            "averageChannelDifference": 8.527886284722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/16x9-duration-70-frame-8.png",
                "sha256": "0443a9d6deff4f80f9663349066f45132d1199bbbca3ded3b3324ad48d510604",
                "alphaMass": 587520
              },
              {
                "frame": 69,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/16x9-duration-70-frame-69.png",
                "sha256": "70618993b361ae704ebf86164d294608f17f2bcf0ddc81265e92e64317b79734",
                "alphaMass": 587520
              },
              {
                "frame": 61,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/16x9-duration-70-frame-61.png",
                "sha256": "70618993b361ae704ebf86164d294608f17f2bcf0ddc81265e92e64317b79734",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 8.527886284722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/16x9-duration-600-frame-16.png",
                "sha256": "0443a9d6deff4f80f9663349066f45132d1199bbbca3ded3b3324ad48d510604",
                "alphaMass": 587520
              },
              {
                "frame": 112,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/16x9-duration-600-frame-112.png",
                "sha256": "70618993b361ae704ebf86164d294608f17f2bcf0ddc81265e92e64317b79734",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/16x9-duration-600-frame-528.png",
                "sha256": "70618993b361ae704ebf86164d294608f17f2bcf0ddc81265e92e64317b79734",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/16x9-duration-600-frame-599.png",
                "sha256": "70618993b361ae704ebf86164d294608f17f2bcf0ddc81265e92e64317b79734",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 70,
            "averageChannelDifference": 11.605034722222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/9x16-duration-70-frame-8.png",
                "sha256": "8e1c596e93e5284d880a88add5abe8565eaaa7a3c4c49e3bf85fa0ebf9f81678",
                "alphaMass": 587520
              },
              {
                "frame": 69,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/9x16-duration-70-frame-69.png",
                "sha256": "a5d587e3ce4a363194bef2ab1fd09192156b9b9ab7ee4602e6bff03e59fc3092",
                "alphaMass": 587520
              },
              {
                "frame": 61,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/9x16-duration-70-frame-61.png",
                "sha256": "a5d587e3ce4a363194bef2ab1fd09192156b9b9ab7ee4602e6bff03e59fc3092",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 11.605034722222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/9x16-duration-600-frame-16.png",
                "sha256": "8e1c596e93e5284d880a88add5abe8565eaaa7a3c4c49e3bf85fa0ebf9f81678",
                "alphaMass": 587520
              },
              {
                "frame": 112,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/9x16-duration-600-frame-112.png",
                "sha256": "87c453c564791eb2205002540d166e0e538d041edcc715671fecaf53d8cafcc3",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/9x16-duration-600-frame-528.png",
                "sha256": "a5d587e3ce4a363194bef2ab1fd09192156b9b9ab7ee4602e6bff03e59fc3092",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/9x16-duration-600-frame-599.png",
                "sha256": "a5d587e3ce4a363194bef2ab1fd09192156b9b9ab7ee4602e6bff03e59fc3092",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 70,
            "averageChannelDifference": 12.819661458333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/1x1-duration-70-frame-8.png",
                "sha256": "bf2408b526895f258d60a534852d5698be6a32e5f31493d4c564187103b0ddb4",
                "alphaMass": 587520
              },
              {
                "frame": 69,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/1x1-duration-70-frame-69.png",
                "sha256": "afc8191c4df904b8d9617c5a6e2a9f317b97586a548dd112a4cf4c005472e505",
                "alphaMass": 587520
              },
              {
                "frame": 61,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/1x1-duration-70-frame-61.png",
                "sha256": "afc8191c4df904b8d9617c5a6e2a9f317b97586a548dd112a4cf4c005472e505",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 12.819661458333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/1x1-duration-600-frame-16.png",
                "sha256": "a8ad79454c268c6f73bcf75ba5f89e8dfb5feec7a1279943f53f35b28b3b2db1",
                "alphaMass": 587520
              },
              {
                "frame": 112,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/1x1-duration-600-frame-112.png",
                "sha256": "afc8191c4df904b8d9617c5a6e2a9f317b97586a548dd112a4cf4c005472e505",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/1x1-duration-600-frame-528.png",
                "sha256": "afc8191c4df904b8d9617c5a6e2a9f317b97586a548dd112a4cf4c005472e505",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/hold-to-confirm/1x1-duration-600-frame-599.png",
                "sha256": "afc8191c4df904b8d9617c5a6e2a9f317b97586a548dd112a4cf4c005472e505",
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
        "note": "The cursor holds a button until it fills, then it bursts into Deployed with a check."
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
      "bundleSha256": "327d88bbfc1d48d937ec7beda524e86963c684fb5f03e4a2e6cb2e429c412aa8",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/hold-to-confirm/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/hold-to-confirm/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/hold-to-confirm/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 112,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 140,
      "sha256": {
        "poster": "7581e975631e690c7d427543ad8373adc99caa1b19b8e59d557ebccde01eb8e9",
        "loop": "e08d078047b7c556f708943f9a487976bc13e26d4343509af90c5efc2238f05c",
        "detail": "b6d18bae79a81d536173a08f65e2ab447e3b7035d97cf693d140d1825df22917"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/hold-to-confirm/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/hold-to-confirm/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/hold-to-confirm/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 112,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 140,
      "sha256": {
        "poster": "45043697f47e9921e81a1d8761e1985dd747df3540974fdf645ef80f183a5ed5",
        "loop": "d7a3c1a946e2aee3dacd442c8277469e0034d3048e9e30fe91b6fb8d77b82925",
        "detail": "62f11d4a6b37bfa1fa9ccd60dcaee686340c473a54e98f63348249ab4aee22a5"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/hold-to-confirm/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/hold-to-confirm/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/hold-to-confirm/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 112,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 140,
      "sha256": {
        "poster": "292c5b7d1f20d0ff82f486658aab52b46e651027275592295120972e1c2f8a5a",
        "loop": "5d3b5ce5c428abb5af828eb2e2f34746513625937ac88c5c0bba0c7ed0ac5472",
        "detail": "0a104f0aa7c8c98389d5153231e63568a3d0da3bb1d1e8a1765f61683bf4485a"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/327d88bbfc1d48d937ec7beda524e86963c684fb5f03e4a2e6cb2e429c412aa8/index.mjs",
    "sha256": "327d88bbfc1d48d937ec7beda524e86963c684fb5f03e4a2e6cb2e429c412aa8",
    "bytes": 178467,
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
    "at": "2026-10-09T03:15:51.170Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
