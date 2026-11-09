// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "gallery/motion-gallery",
  "job": "gallery",
  "language": "product-ui",
  "mechanic": [
    "bento-tile-cascade"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "gallery",
    "bento-tile-cascade",
    "bento",
    "features",
    "grid"
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
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 56,
      "role": "body"
    },
    {
      "key": "tile1",
      "type": "text",
      "maxChars": 22,
      "role": "label"
    },
    {
      "key": "tile2",
      "type": "text",
      "maxChars": 22,
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
      "target": "bento-tile-cascade",
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
    "ink": "#15161B",
    "accent": "#3D63FF",
    "secondary": "#A3A5A9",
    "paper": "#EFF0F4",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "Ask anything",
    "sub": "Answers grounded in every doc, chat and file.",
    "tile1": "Live dashboards",
    "tile2": "Automations"
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
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 56,
      "role": "body"
    },
    {
      "key": "tile1",
      "label": "Tile 1",
      "type": "text",
      "max": 22,
      "role": "label"
    },
    {
      "key": "tile2",
      "label": "Tile 2",
      "type": "text",
      "max": 22,
      "role": "label"
    }
  ],
  "name": "Feature Bento Grid",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-wall-bento",
    "bundleSha256": "713b7ef3d9cc5610650094887f4dde9d50a6b668bad0162268c1c216fe304c3e",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:53:35.986Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/16x9-paper.png",
        "sha256": "be4bb7b20e25becd9c8365b16f31fb02fe451954068af86e9c11ebf7ee95674f"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/16x9-night.png",
        "sha256": "27185835e32a43331ee0e54ac9d22e30e556bf3bf21022626be4aef3505b2930"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/16x9-color.png",
        "sha256": "97da46b93166bff217a6f5e7c4b63ae52ff4df26c912db42216e20912e726e51"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/9x16-paper.png",
        "sha256": "1ac5f17d493a5973334f2c41c9f24d5e1244913883e8c3c418ba3e531ac328a8"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/9x16-night.png",
        "sha256": "e78244f6fcc601c75dcfda4861e1a22f778f777411d51852e721ef4f8f98e097"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/9x16-color.png",
        "sha256": "cd21ff8bcff73123b4a9d70fe91d887fca27e968d0db1c2b1ae3f7cece1ab3f3"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/1x1-paper.png",
        "sha256": "e545603264ce8237f63c8ba2450c802c9fdd986d0b9fd5d41a70b3fc4df12631"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/1x1-night.png",
        "sha256": "bd78c1fa78359ffea202052fc4b35138ef1033764f9ec6efe8fbea9fd1118f61"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/1x1-color.png",
        "sha256": "28cde3c9612d35aca0856756709a01ae5dee8facd05cbe1405538792929c459b"
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
          "mg-wall-bento--16x9",
          "mg-wall-bento--9x16",
          "mg-wall-bento--1x1"
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
            "paperNight": 6.755262586805555,
            "paperColor": 8.018988715277779,
            "region": {
              "left": 75,
              "top": 64,
              "width": 1782,
              "height": 985
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 8.526448567708334,
            "paperColor": 9.719156901041666,
            "region": {
              "left": 100,
              "top": 74,
              "width": 891,
              "height": 1805
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 7.122341579861111,
            "paperColor": 8.499674479166666,
            "region": {
              "left": 57,
              "top": 61,
              "width": 975,
              "height": 979
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
            "occupancy": 1.199666064342404,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.199666064342404,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.199666064342404,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0991864193594107,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0991864193594107,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0991864193594107,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1597949793772107,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1597949793772107,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1597949793772107,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 25.891710069444443,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 25.98806423611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/16x9-duration-90-frame-10.png",
                "sha256": "f081e76aa6e09830f4167a85b450bceae672630548b1a6d01e2d56a5fd8a7bd2",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/16x9-duration-90-frame-89.png",
                "sha256": "0bc4e304dfa7f46d2f875b866aa08b553fc1cbcd0e3d5d8f228a3158fcdcc98b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/16x9-duration-90-frame-79.png",
                "sha256": "0bc4e304dfa7f46d2f875b866aa08b553fc1cbcd0e3d5d8f228a3158fcdcc98b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 25.891710069444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/16x9-duration-900-frame-13.png",
                "sha256": "0bab451bdade30aa46be86eab4351b1a9fb7cb47150fe629a983a2745bf6ce6b",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/16x9-duration-900-frame-90.png",
                "sha256": "0bc4e304dfa7f46d2f875b866aa08b553fc1cbcd0e3d5d8f228a3158fcdcc98b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/16x9-duration-900-frame-792.png",
                "sha256": "0bc4e304dfa7f46d2f875b866aa08b553fc1cbcd0e3d5d8f228a3158fcdcc98b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/16x9-duration-900-frame-899.png",
                "sha256": "0bc4e304dfa7f46d2f875b866aa08b553fc1cbcd0e3d5d8f228a3158fcdcc98b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 26.104383680555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/9x16-duration-90-frame-10.png",
                "sha256": "1a6e1bfc0ce838a2d8eaa6875247ca561816ac3b855bf373d9687de0e262d6c2",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/9x16-duration-90-frame-89.png",
                "sha256": "fc4c9fd40d34401c10256d2db9ed9e3868705b202228f4c555817aedcf204833",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/9x16-duration-90-frame-79.png",
                "sha256": "fc4c9fd40d34401c10256d2db9ed9e3868705b202228f4c555817aedcf204833",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 25.954969618055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/9x16-duration-900-frame-13.png",
                "sha256": "a02427b89403064d0a4f7240932bb3de95d0cabef9098037b14579b06b97c9eb",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/9x16-duration-900-frame-90.png",
                "sha256": "fc4c9fd40d34401c10256d2db9ed9e3868705b202228f4c555817aedcf204833",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/9x16-duration-900-frame-792.png",
                "sha256": "fc4c9fd40d34401c10256d2db9ed9e3868705b202228f4c555817aedcf204833",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/9x16-duration-900-frame-899.png",
                "sha256": "fc4c9fd40d34401c10256d2db9ed9e3868705b202228f4c555817aedcf204833",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 24.060221354166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/1x1-duration-90-frame-10.png",
                "sha256": "ab4d00ea120be5521fb252f08b5bfe714967a6ff6a5ccf20278b6c2b61493d2e",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/1x1-duration-90-frame-89.png",
                "sha256": "429d7e716282680cd620349066b78d176f5d1d004486ab71f802a0c356c2e441",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/1x1-duration-90-frame-79.png",
                "sha256": "429d7e716282680cd620349066b78d176f5d1d004486ab71f802a0c356c2e441",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 23.951822916666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/1x1-duration-900-frame-13.png",
                "sha256": "ff323bf7c39eb6bf181b73ca50c4f3d5e2ad12c2a9eb80ad56f413f28a9594b8",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/1x1-duration-900-frame-90.png",
                "sha256": "429d7e716282680cd620349066b78d176f5d1d004486ab71f802a0c356c2e441",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/1x1-duration-900-frame-792.png",
                "sha256": "429d7e716282680cd620349066b78d176f5d1d004486ab71f802a0c356c2e441",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-wall-bento/1x1-duration-900-frame-899.png",
                "sha256": "429d7e716282680cd620349066b78d176f5d1d004486ab71f802a0c356c2e441",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "gallery",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A feature bento grid assembles around a brand-blue Ask anything card; no violet gradient."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 14,
        "compared": 14,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "713b7ef3d9cc5610650094887f4dde9d50a6b668bad0162268c1c216fe304c3e",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-bento/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-bento/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-bento/16x9/detail.mp4",
      "bg": "#eeeff3",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2a0841fae8fa6f17a35832fd3bd48411e9d3efff6e474daea7223a3b23087251",
        "loop": "c2d773b9dd904f7df031c88bc7fe5f9424674af3763098b19c32e0fede1061ab",
        "detail": "f73b681230a9e729f3d661131c603aa8c3c4499a1ab2412edbb4d9281135efd9"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-bento/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-bento/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-bento/9x16/detail.mp4",
      "bg": "#eeeff3",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "cde6a08a367e2931619e850fa07b43b01b172cbe466ae7ff18dbcbc9eff30b2f",
        "loop": "f8416e8e2f4db9103bb8884520fdc03888ce41ec090d4c7c5b15986e10c23467",
        "detail": "fbc5c99104a88f64a8c25427b6b416acd7b827e413031f6d0d05383af15e5a06"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-bento/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-bento/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-bento/1x1/detail.mp4",
      "bg": "#eeeff3",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7812ad4c917c6a7b14342bf9fbea8a42889140cf87dae9e469e818c0d72329f8",
        "loop": "5e8dd83075fa826e77f436c2e67716c72c9f4a7857daecf2f26d2749fb08926e",
        "detail": "646ff7ca162569649746964476dd6ab99031b3fbc00fa2ed4c18df1817c02a13"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/713b7ef3d9cc5610650094887f4dde9d50a6b668bad0162268c1c216fe304c3e/index.mjs",
    "sha256": "713b7ef3d9cc5610650094887f4dde9d50a6b668bad0162268c1c216fe304c3e",
    "bytes": 186224,
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
    "at": "2026-10-09T04:10:53.292Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
