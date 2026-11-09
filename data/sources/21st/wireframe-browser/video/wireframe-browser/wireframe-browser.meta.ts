// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/browser",
  "tags": [
    "browser",
    "url",
    "routing",
    "wireframe",
    "skeleton",
    "explainer",
    "typing",
    "ui"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 72,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 124,
      "out": 0
    },
    "markers": {
      "settled": 130
    },
    "beats": [
      0,
      12,
      72
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "16:9",
      "1:1",
      "9:16"
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
      "key": "urls",
      "type": "list",
      "role": "label"
    },
    {
      "key": "image",
      "type": "image",
      "role": "screenshot"
    }
  ],
  "brand": {
    "surfaceColor": "colors.background",
    "textColor": "colors.text",
    "accent": "colors.primary",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "browser",
      "prop": "blur",
      "from": "10px",
      "settledBy": 10,
      "easing": "ease"
    },
    {
      "target": "url",
      "prop": "text",
      "easing": "linear"
    },
    {
      "target": "page",
      "prop": "blur",
      "from": "cross-dissolve",
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
    "sourceUrl": "docs/research/video-components-2026-10-05 (V10 URL bar + wireframe browser, blur dissolves)"
  },
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "interact"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": true,
  "defaults": {
    "urls": [
      "northwind.app/overview",
      "northwind.app/customers"
    ],
    "pages": [
      "dashboard",
      "list"
    ],
    "image": "",
    "segment": 60,
    "surfaceColor": "#FFFFFF",
    "textColor": "#0A0A0B",
    "theme": "light",
    "accent": "#3D63FF",
    "background": "#18181B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "urls",
      "label": "Urls",
      "type": "list",
      "max": 3,
      "role": "label"
    },
    {
      "key": "pages",
      "label": "Pages",
      "type": "list",
      "max": 3
    },
    {
      "key": "image",
      "label": "Image",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "segment",
      "label": "Segment",
      "type": "number",
      "step": 1,
      "min": 36,
      "max": 150
    },
    {
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "textColor",
      "label": "Text color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "theme",
      "label": "Theme",
      "type": "select",
      "options": [
        "light",
        "dark"
      ]
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
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
  "name": "Wireframe Browser",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "wireframe-browser",
    "bundleSha256": "0ca8a3086c842d2779e8c3a68ede03e7d555cb9934ff720736966b5012a3c1e2",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:55:51.426Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/16x9-paper.png",
        "sha256": "298ece62b8d90703271f6b0c02931ba211cc75245b88f3b00d84c9b6669c4bc6"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/16x9-night.png",
        "sha256": "785683311651c4441a8f6a9a9334d659aea23a580bd95abc8797e4306567eff8"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/16x9-color.png",
        "sha256": "c132a3d1dd9d508163a19b4b4d7eda8483b5470db7841f137a5b9886b6b4c29a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/1x1-paper.png",
        "sha256": "84a9cf81adb8fd24208b9d8b3dbb5015079481c1f7d2bf1085306540e03f39ab"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/1x1-night.png",
        "sha256": "b182d2efad9e9041aa9c5f3c9c126682d4e4d341d8db377571073a13da936b28"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/1x1-color.png",
        "sha256": "9f153a332fb1193cc5bc21c4a24d3ee26de1c8d0fdd199c8a3a88479bd478419"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/9x16-paper.png",
        "sha256": "2e6dd443a25fa3ac4f35c8b640dc68f7ec960b487d149ef52e5672f4f81538c1"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/9x16-night.png",
        "sha256": "d2b8d5846abe1cd88cab25c2d5795afe0f49993a1abc04722ed00c43a4c6c7c2"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/9x16-color.png",
        "sha256": "7d9bba7991349825ce6dbfd7247268907dab59aec465960b713fbe2fb70b38b3"
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
          "wireframe-browser--16x9",
          "wireframe-browser--1x1",
          "wireframe-browser--9x16"
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
            "paperNight": 131.87415907118054,
            "paperColor": 9.401909722222221,
            "region": {
              "left": 143,
              "top": 35,
              "width": 1634,
              "height": 1045
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 127.98055013020833,
            "paperColor": 9.338026258680555,
            "region": {
              "left": 27,
              "top": 116,
              "width": 1026,
              "height": 884
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 117.36876085069444,
            "paperColor": 9.43259006076389,
            "region": {
              "left": 7,
              "top": 259,
              "width": 1066,
              "height": 1379
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
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1138187270793094,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.167037432900115,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1138187270793094,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0428525548308032,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1020303183001599,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0428525548308032,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9546205313401083,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0047034985547718,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9546205313401083,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.558485243055555,
        "frames": [
          19,
          130,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 72,
            "averageChannelDifference": 5.074435763888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/16x9-duration-72-frame-8.png",
                "sha256": "a6aa52f87b2800580bbda24c0eced5180e257ca55ea5d506dfe37674eafa5a5b",
                "alphaMass": 587520
              },
              {
                "frame": 71,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/16x9-duration-72-frame-71.png",
                "sha256": "0ec3ed8d25cc6b96411bbec4203da90403dcaec44b4313f19f3787238f7ef3b4",
                "alphaMass": 587520
              },
              {
                "frame": 63,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/16x9-duration-72-frame-63.png",
                "sha256": "14dcbb130124e96f78ec65907a2e5fd25199d8e92d68c54a3fe99024d6c2122f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.558485243055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/16x9-duration-900-frame-19.png",
                "sha256": "1cad940c7d3fea3b5137899d19ded55b8ae92147042a9d50ccc8992a4e51634c",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/16x9-duration-900-frame-130.png",
                "sha256": "a38208f43646f5299e42420db154da9ba3430d553428beadd5327ed9401b2bff",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/16x9-duration-900-frame-792.png",
                "sha256": "a38208f43646f5299e42420db154da9ba3430d553428beadd5327ed9401b2bff",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/16x9-duration-900-frame-899.png",
                "sha256": "a38208f43646f5299e42420db154da9ba3430d553428beadd5327ed9401b2bff",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 72,
            "averageChannelDifference": 4.937282986111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/1x1-duration-72-frame-8.png",
                "sha256": "c2a51b2351dfdfd56b8a1681eea42b3402baf27afead1c270e557c922d0de67a",
                "alphaMass": 587520
              },
              {
                "frame": 71,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/1x1-duration-72-frame-71.png",
                "sha256": "0ebb0ff42ba5fc208204c363956f7fb7ed2984745b2693a71d974d58a530eb15",
                "alphaMass": 587520
              },
              {
                "frame": 63,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/1x1-duration-72-frame-63.png",
                "sha256": "3bd1bde5c6d3cbaf28fab1aa906c3ef5a43187ae70563a0175c3047f4b7d3468",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 7.034613715277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/1x1-duration-900-frame-19.png",
                "sha256": "41b7e8d763e8a0d2ec26f31d252980c61911ff413b3e1d34ee956d4369d75620",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/1x1-duration-900-frame-130.png",
                "sha256": "e742d5f409dd8e71ea778e65a76b23632a370b0949802a74b91ac3bc39ef7390",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/1x1-duration-900-frame-792.png",
                "sha256": "e742d5f409dd8e71ea778e65a76b23632a370b0949802a74b91ac3bc39ef7390",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/1x1-duration-900-frame-899.png",
                "sha256": "e742d5f409dd8e71ea778e65a76b23632a370b0949802a74b91ac3bc39ef7390",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 72,
            "averageChannelDifference": 4.871527777777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/9x16-duration-72-frame-8.png",
                "sha256": "49954c4105a993acdb0e3cc7f82eef29f54a3f9977ee71e2481b30dab0631447",
                "alphaMass": 587520
              },
              {
                "frame": 71,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/9x16-duration-72-frame-71.png",
                "sha256": "4fdadf427346fd43ca19bc21f08e53e19542a9ea948655be6834a919684f074c",
                "alphaMass": 587520
              },
              {
                "frame": 63,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/9x16-duration-72-frame-63.png",
                "sha256": "8c1619b11e367678421f2ea38c1fe909edaec6837db0b2853b0f59e325207572",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 6.004231770833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/9x16-duration-900-frame-19.png",
                "sha256": "c5ead59e52d0da2019b0cb0f6a9b283dbcec7faaeaa1eea3a51566ed0b9162bc",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/9x16-duration-900-frame-130.png",
                "sha256": "7ce0d251a82c6bc2222050abdacbb822975abd6bf35ce53d2984f4e30f2e35de",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/9x16-duration-900-frame-792.png",
                "sha256": "7ce0d251a82c6bc2222050abdacbb822975abd6bf35ce53d2984f4e30f2e35de",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/wireframe-browser/9x16-duration-900-frame-899.png",
                "sha256": "7ce0d251a82c6bc2222050abdacbb822975abd6bf35ce53d2984f4e30f2e35de",
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
        "note": "A browser loads a URL and wireframe pages build up; intentionally wireframe, as named."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 39,
        "compared": 39,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "0ca8a3086c842d2779e8c3a68ede03e7d555cb9934ff720736966b5012a3c1e2",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.928805Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/wireframe-browser/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/wireframe-browser/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/wireframe-browser/16x9/detail.mp4",
      "bg": "#18181b",
      "posterFrame": 130,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c44e09f9de0c0517ed64ba48332ffb1466da3578de6b108d3dab245f60f958bd",
        "loop": "03c30ca90faf32cfa75788a0f40f0804b76b1a2049df80e36572fc949dbb79ff",
        "detail": "c232f3ddf5e484ffa006d5d51ffe204baaf8955b50f18bf3274c031b3024d7b2"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/wireframe-browser/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/wireframe-browser/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/wireframe-browser/1x1/detail.mp4",
      "bg": "#18181b",
      "posterFrame": 130,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "34969fe1bb80bdda22a779e513ecab3e63be33dcc0f08c6b2189a3e07232c9af",
        "loop": "04627f10c90edb96e0d7ad6709b9c278c30cf51a3d62d6f552fbf9a5064a687c",
        "detail": "6f20d49f0aada160cc651ebc0610c5d11901dcb2212d7e8df2db78b8051be8b6"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/wireframe-browser/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/wireframe-browser/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/wireframe-browser/9x16/detail.mp4",
      "bg": "#18181b",
      "posterFrame": 130,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e1e060f8c0bea70b5580a28fec669d3867addfd78df0b9fd1aced4546e2bc688",
        "loop": "3a433f5ebc2bd7b6718b6447c9ca50057ded3c5771e775a47977c5b15fd78370",
        "detail": "e449223dea9333b3324b6dc3bbbe436fff7c8104da08312755f99063fd6a5abc"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/0ca8a3086c842d2779e8c3a68ede03e7d555cb9934ff720736966b5012a3c1e2/index.mjs",
    "sha256": "0ca8a3086c842d2779e8c3a68ede03e7d555cb9934ff720736966b5012a3c1e2",
    "bytes": 175343,
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
    "1:1": {
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
    }
  },
  "intake": {
    "at": "2026-10-07T02:20:20.192Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
