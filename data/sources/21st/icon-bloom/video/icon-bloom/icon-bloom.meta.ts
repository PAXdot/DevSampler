// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "brand/icon",
  "tags": [
    "app icon",
    "icon",
    "bloom",
    "petals",
    "micro animation",
    "dock",
    "brand"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 90,
      "min": 48,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 36,
      "out": 0
    },
    "markers": {
      "settled": 36,
      "bloom": 15
    },
    "beats": [
      0,
      5,
      15
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "1:1",
      "16:9",
      "9:16"
    ],
    "mode": "responsive",
    "fill": "region",
    "defaultRegion": {
      "x": 0.1,
      "y": 0.2,
      "w": 0.8,
      "h": 0.6
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "name",
      "type": "text",
      "maxChars": 20,
      "lines": 1,
      "role": "name"
    }
  ],
  "brand": {
    "tile": "colors.primary",
    "color": "colors.text",
    "fontFamily": "fonts.heading",
    "petal": "colors.text",
    "tip": "colors.secondary"
  },
  "motionBeats": [
    {
      "target": "tile",
      "prop": "scale",
      "from": "0.86",
      "settledBy": 8,
      "easing": "ease"
    },
    {
      "target": "center petal",
      "prop": "scaleY",
      "from": "0",
      "settledBy": 15,
      "easing": "ease"
    },
    {
      "target": "petal pairs",
      "prop": "rotate",
      "settledBy": 34,
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
      90
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study of V19, research 2026-10-05)"
  },
  "job": "logos",
  "language": "aura",
  "mechanic": [
    "assemble"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "name": "Lily",
    "petals": 5,
    "tile": "#2945E6",
    "petal": "#F5EEFF",
    "tip": "#C4C6CA",
    "color": "#F4F4F5",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 20,
      "role": "name"
    },
    {
      "key": "petals",
      "label": "Petals",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 9
    },
    {
      "key": "tile",
      "label": "Tile",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "petal",
      "label": "Petal",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "tip",
      "label": "Tip",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Icon Bloom",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "icon-bloom",
    "bundleSha256": "3c7fac63b536210053f4a3a6747dc80462b2f8ce3236a403817bd420a1366a1b",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:36:50.291Z",
    "samples": [
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/1x1-paper.png",
        "sha256": "7c6b502243e63131137792d0018ac3968b9f356e9257e340cc8757adecd04b14"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/1x1-night.png",
        "sha256": "7b23495921d50a54aedf463f05d2e7dfe4c3d2199f081a49c5a6bb5f540fa18d"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/1x1-color.png",
        "sha256": "7b8c8b3d03b507b2fa51038849792a126932f9b7fbef46fe3d71b9aff1e047d5"
      },
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/16x9-paper.png",
        "sha256": "eb91b4f4b5c00d436a008ca1fee7f26c17a03f5a4908f419fcaaa45734bdbeaf"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/16x9-night.png",
        "sha256": "5ff575504511aef40b40d839721f853bf7906b35c826781752486a6328dd9ce0"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/16x9-color.png",
        "sha256": "20e8e838a4f8db4848bfed7ba8826439126937142e230b53f017238731385084"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/9x16-paper.png",
        "sha256": "738882c1b0bb383a74e39121fb3d4f2916d73abb3820432fb8a632204a1e0e43"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/9x16-night.png",
        "sha256": "c3f0d9a370863742147d6c0343b0f60313c0b37c4c0348aaed0ef48e5f866bce"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/9x16-color.png",
        "sha256": "7b396b4db03ad097f2e87035d72d47cd5a4bdc7f0fd5007c3158b9f917fb6ce6"
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "icon-bloom--1x1",
          "icon-bloom--16x9",
          "icon-bloom--9x16"
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
            "paperNight": 31.292317708333332,
            "paperColor": 26.94533962673611,
            "region": {
              "left": 295,
              "top": 255,
              "width": 490,
              "height": 534
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 31.292154947916668,
            "paperColor": 26.9462890625,
            "region": {
              "left": 715,
              "top": 255,
              "width": 490,
              "height": 534
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 31.094862196180557,
            "paperColor": 26.887369791666668,
            "region": {
              "left": 172,
              "top": 530,
              "width": 736,
              "height": 804
            },
            "canvas": {
              "width": 1080,
              "height": 1920
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
            "occupancy": 0.6623537761012042,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6611134132246101,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6425079700756999,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.37257399905692734,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3718762949388432,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3614107331675812,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8425759707175052,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8415279906544237,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8174244492035498,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.5725911458333335,
        "frames": [
          5,
          36,
          89
        ],
        "elastic": [
          {
            "aspect": "1:1",
            "duration": 48,
            "averageChannelDifference": 4.347547743055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/1x1-duration-48-frame-5.png",
                "sha256": "1e95a749cb87a2ed56828a2f85f67d49041c9285f23fda0ac52d7fe3898306f5",
                "alphaMass": 79483
              },
              {
                "frame": 36,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/1x1-duration-48-frame-36.png",
                "sha256": "9e723d25dfd1526f8ab8b3f5c498c679bbf63fc3b63e2536109b55cf139ca22b",
                "alphaMass": 81375
              },
              {
                "frame": 42,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/1x1-duration-48-frame-42.png",
                "sha256": "afee1724f4d5a85b3459cde759547141fca546c144e43192ac32316ab704389b",
                "alphaMass": 81375
              },
              {
                "frame": 47,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/1x1-duration-48-frame-47.png",
                "sha256": "afee1724f4d5a85b3459cde759547141fca546c144e43192ac32316ab704389b",
                "alphaMass": 81375
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 4.347547743055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/1x1-duration-600-frame-5.png",
                "sha256": "1e95a749cb87a2ed56828a2f85f67d49041c9285f23fda0ac52d7fe3898306f5",
                "alphaMass": 79483
              },
              {
                "frame": 36,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/1x1-duration-600-frame-36.png",
                "sha256": "9e723d25dfd1526f8ab8b3f5c498c679bbf63fc3b63e2536109b55cf139ca22b",
                "alphaMass": 81375
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/1x1-duration-600-frame-528.png",
                "sha256": "afee1724f4d5a85b3459cde759547141fca546c144e43192ac32316ab704389b",
                "alphaMass": 81375
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/1x1-duration-600-frame-599.png",
                "sha256": "afee1724f4d5a85b3459cde759547141fca546c144e43192ac32316ab704389b",
                "alphaMass": 81375
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 48,
            "averageChannelDifference": 2.5725911458333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/16x9-duration-48-frame-5.png",
                "sha256": "e955de6c7ddd6bfa6e519f454b568c8f5e9ad60012a988e3e20ed791ed7729cf",
                "alphaMass": 44562
              },
              {
                "frame": 36,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/16x9-duration-48-frame-36.png",
                "sha256": "96b66e30218a339ea8c5877ee06b57785ad432f68db5aa62cf9909708ff10d91",
                "alphaMass": 45599
              },
              {
                "frame": 42,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/16x9-duration-48-frame-42.png",
                "sha256": "802d639ddbb64a38170985a36cc7ec595d138dcbd8a3c6a88d51f869cef8b0c4",
                "alphaMass": 45599
              },
              {
                "frame": 47,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/16x9-duration-48-frame-47.png",
                "sha256": "802d639ddbb64a38170985a36cc7ec595d138dcbd8a3c6a88d51f869cef8b0c4",
                "alphaMass": 45599
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 2.5725911458333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/16x9-duration-600-frame-5.png",
                "sha256": "e955de6c7ddd6bfa6e519f454b568c8f5e9ad60012a988e3e20ed791ed7729cf",
                "alphaMass": 44562
              },
              {
                "frame": 36,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/16x9-duration-600-frame-36.png",
                "sha256": "96b66e30218a339ea8c5877ee06b57785ad432f68db5aa62cf9909708ff10d91",
                "alphaMass": 45599
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/16x9-duration-600-frame-528.png",
                "sha256": "802d639ddbb64a38170985a36cc7ec595d138dcbd8a3c6a88d51f869cef8b0c4",
                "alphaMass": 45599
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/16x9-duration-600-frame-599.png",
                "sha256": "802d639ddbb64a38170985a36cc7ec595d138dcbd8a3c6a88d51f869cef8b0c4",
                "alphaMass": 45599
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 48,
            "averageChannelDifference": 5.763888888888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/9x16-duration-48-frame-5.png",
                "sha256": "733b77c7ad45e4b6c891dd2b27c88c45203d271d64c1d8c95be2110fb9621819",
                "alphaMass": 101536
              },
              {
                "frame": 36,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/9x16-duration-48-frame-36.png",
                "sha256": "24bfc4ab3459e8a2d002224322415a615fb58c45540c9a0946db11c39b6fbac5",
                "alphaMass": 103682
              },
              {
                "frame": 42,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/9x16-duration-48-frame-42.png",
                "sha256": "8befec2cea98d29d7a03cb848401e6d4f58b962ab4ebdb5ad9f1b7633b094d21",
                "alphaMass": 103682
              },
              {
                "frame": 47,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/9x16-duration-48-frame-47.png",
                "sha256": "8befec2cea98d29d7a03cb848401e6d4f58b962ab4ebdb5ad9f1b7633b094d21",
                "alphaMass": 103682
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 5.763888888888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/9x16-duration-600-frame-5.png",
                "sha256": "733b77c7ad45e4b6c891dd2b27c88c45203d271d64c1d8c95be2110fb9621819",
                "alphaMass": 101536
              },
              {
                "frame": 36,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/9x16-duration-600-frame-36.png",
                "sha256": "24bfc4ab3459e8a2d002224322415a615fb58c45540c9a0946db11c39b6fbac5",
                "alphaMass": 103682
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/9x16-duration-600-frame-528.png",
                "sha256": "8befec2cea98d29d7a03cb848401e6d4f58b962ab4ebdb5ad9f1b7633b094d21",
                "alphaMass": 103682
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/icon-bloom/9x16-duration-600-frame-599.png",
                "sha256": "8befec2cea98d29d7a03cb848401e6d4f58b962ab4ebdb5ad9f1b7633b094d21",
                "alphaMass": 103682
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "logos",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "An app icon tile blooms a lotus mark and names it; tile is brand blue, petals neutral."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 13,
        "compared": 13,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "3c7fac63b536210053f4a3a6747dc80462b2f8ce3236a403817bd420a1366a1b",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/icon-bloom/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/icon-bloom/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/icon-bloom/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 36,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "3a2ed5063a4eb3829095d0b50fa9cb1dae8862fd183bfc7c05230e6eecb9d3b3",
        "loop": "adc18664d3e48a4b94e7a172d422712201b19dc1f73fdbf8f6eac38c0f251633",
        "detail": "d2d610c5288fa9410f2cef921f9efd5fdbe8d81df4d474a1d61328cbcf6af02c"
      }
    },
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/icon-bloom/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/icon-bloom/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/icon-bloom/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 36,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "7449d90a9fde33e73350cc01fc001f2526766d2ba04f013994388ba10b1a8b7f",
        "loop": "df96c9ebcc25a31022fc00cb3b087c822654fc5b053decace31ef91f78e632f0",
        "detail": "0352488210ce3fee2cc74439893dad2af719cf6f43b301095e6046da12394e33"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/icon-bloom/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/icon-bloom/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/icon-bloom/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 36,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "50267bf68675724e24e2d1299954525b43d53ba910c966589756b3f2c6d50e79",
        "loop": "631692e7532650592966403b493375da331d01c0618d46c101dd7c6ca464ac1f",
        "detail": "09f5e3c641e23d87d00ad70491cdf61a1c2db236a64af99fdaa69454db7154ae"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/3c7fac63b536210053f4a3a6747dc80462b2f8ce3236a403817bd420a1366a1b/index.mjs",
    "sha256": "3c7fac63b536210053f4a3a6747dc80462b2f8ce3236a403817bd420a1366a1b",
    "bytes": 162028,
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
      "overflow": true,
      "transparent": true
    },
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
    }
  },
  "intake": {
    "at": "2026-10-09T03:16:15.466Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
