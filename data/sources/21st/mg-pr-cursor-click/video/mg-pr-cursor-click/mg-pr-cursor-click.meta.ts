// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "cursor-glide-click-confirm"
  ],
  "energy": "default",
  "requiresScreenshot": true,
  "tags": [
    "motion-gallery",
    "product-ui",
    "cursor-glide-click-confirm",
    "cursor",
    "click",
    "publish"
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
      "key": "kicker",
      "type": "text",
      "maxChars": 30,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 40,
      "role": "headline"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 28,
      "role": "cta"
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
      "target": "cursor-glide-click-confirm",
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
    "ink": "#ECECF1",
    "accent": "#3D63FF",
    "secondary": "#3878FF",
    "paper": "#08080B",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Lumen 2.0 · publishing",
    "headline": "Publish the plan in one click",
    "cta": "Live at lumen.app"
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
      "max": 30,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 28,
      "role": "cta"
    }
  ],
  "name": "Cursor Click Publish",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-pr-cursor-click",
    "bundleSha256": "ec7cd5549a079710e4142b46dfa02dc81d5b88cb50b774356c3e44a064e0e8b4",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:48:22.103Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/16x9-paper.png",
        "sha256": "2203d58792731f5bffb70178a44cdf00ebe5ab9550877277a26deaeb5dc04b85"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/16x9-night.png",
        "sha256": "56ce9d059f85fe504749bf70b0609cd22501242a3e3ca7d468e5bd58fd80e2c6"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/16x9-color.png",
        "sha256": "3509943eab914b0eabf48db7b2310c92f390254ca61bc4a7ef4f266e094e573d"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/9x16-paper.png",
        "sha256": "9cbda207bc164946c016ba9e61029cd25d652e0ea27a205b9f54aa5fc63f5cba"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/9x16-night.png",
        "sha256": "39d4e390ccfa17ad84f47b63fb0490c3ddc8f278bd5d32d9ae270928fecd265f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/9x16-color.png",
        "sha256": "396340f59fa5e53c44556b60f2275d4061a6af01dc235e602fdc94d74d8e4462"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/1x1-paper.png",
        "sha256": "e547add8ef55b0a6a858700f4062d40042f5c62e888c050fc370d619eced59cd"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/1x1-night.png",
        "sha256": "1904d121ed2de46bc592d0628f92d7d5f36c3b31b3c3d69c3c957a5135c44478"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/1x1-color.png",
        "sha256": "915eb1b9e62afbab6c5749fe3cc9dbd568c65e7e0d0d59a22906b216fe1f7276"
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
          "mg-pr-cursor-click--16x9",
          "mg-pr-cursor-click--9x16",
          "mg-pr-cursor-click--1x1"
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
            "paperNight": 6.797444661458333,
            "paperColor": 2.6097276475694446,
            "region": {
              "left": 104,
              "top": 46,
              "width": 1701,
              "height": 1034
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 22.419759114583332,
            "paperColor": 7.597466362847222,
            "region": {
              "left": 0,
              "top": 174,
              "width": 1080,
              "height": 1570
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 11.49826388888889,
            "paperColor": 4.001654730902778,
            "region": {
              "left": 0,
              "top": 63,
              "width": 1080,
              "height": 956
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
            "occupancy": 1.2021019345238098,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2021019345238098,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2021019345238098,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1588836923658354,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1588836923658354,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1581455498866216,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.253201898043168,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.253201898043168,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2545141513395484,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.4622395833333333,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 1.4926215277777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/16x9-duration-90-frame-10.png",
                "sha256": "4cdd348a057eeb551bccae70cdf063b3d6cfca207c2ef2973fd2961ce6d3ab68",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/16x9-duration-90-frame-89.png",
                "sha256": "f923f60ca39238f75c607e50f592e1366fd398e340af9f0925a3ad93f7f5d7ed",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/16x9-duration-90-frame-79.png",
                "sha256": "f923f60ca39238f75c607e50f592e1366fd398e340af9f0925a3ad93f7f5d7ed",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 1.4622395833333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/16x9-duration-900-frame-13.png",
                "sha256": "af0b55be33c63151cd0b143b6040802be2a4510cf7cd387ac6eb858c6f32847d",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/16x9-duration-900-frame-90.png",
                "sha256": "f923f60ca39238f75c607e50f592e1366fd398e340af9f0925a3ad93f7f5d7ed",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/16x9-duration-900-frame-792.png",
                "sha256": "2fc848dc2944d63ff55e3b095fa48285ac46b37fce6abfd65d1425573b4cae8b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/16x9-duration-900-frame-899.png",
                "sha256": "f923f60ca39238f75c607e50f592e1366fd398e340af9f0925a3ad93f7f5d7ed",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 3.3148871527777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/9x16-duration-90-frame-10.png",
                "sha256": "9628fb21acac22da8dd99c815ee72166a5dbc1ba1ad0a40208281847388be3e6",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/9x16-duration-90-frame-89.png",
                "sha256": "9e86d8f5ba9e2d35313c719369cfcdb3a4f1534887547596735562fd16086cfd",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/9x16-duration-90-frame-79.png",
                "sha256": "9e86d8f5ba9e2d35313c719369cfcdb3a4f1534887547596735562fd16086cfd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 3.235568576388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/9x16-duration-900-frame-13.png",
                "sha256": "a3974f1b53c21458eb02050ec393a007792eb59ccbb1726b6c8aa63b5f208eb9",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/9x16-duration-900-frame-90.png",
                "sha256": "9e86d8f5ba9e2d35313c719369cfcdb3a4f1534887547596735562fd16086cfd",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/9x16-duration-900-frame-792.png",
                "sha256": "9e86d8f5ba9e2d35313c719369cfcdb3a4f1534887547596735562fd16086cfd",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/9x16-duration-900-frame-899.png",
                "sha256": "9e86d8f5ba9e2d35313c719369cfcdb3a4f1534887547596735562fd16086cfd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 2.1487630208333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/1x1-duration-90-frame-10.png",
                "sha256": "fa882270493b0d6e85e931c4b212397e2af9b7f55ea9d240844bbbd4547e82ec",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/1x1-duration-90-frame-89.png",
                "sha256": "111548845af5da5057ffe8e15d3c240c310f35100b823e877bd71b5737212deb",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/1x1-duration-90-frame-79.png",
                "sha256": "111548845af5da5057ffe8e15d3c240c310f35100b823e877bd71b5737212deb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 2.077365451388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/1x1-duration-900-frame-13.png",
                "sha256": "71c7268512cb0426b45912d1fa557def77328e28c4f2fe2963a65ea3938711dd",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/1x1-duration-900-frame-90.png",
                "sha256": "111548845af5da5057ffe8e15d3c240c310f35100b823e877bd71b5737212deb",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/1x1-duration-900-frame-792.png",
                "sha256": "111548845af5da5057ffe8e15d3c240c310f35100b823e877bd71b5737212deb",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-pr-cursor-click/1x1-duration-900-frame-899.png",
                "sha256": "111548845af5da5057ffe8e15d3c240c310f35100b823e877bd71b5737212deb",
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
        "note": "Cursor clicks Publish and a toast confirms; headline readable, rebrands recolor accents."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 53,
        "compared": 53,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "ec7cd5549a079710e4142b46dfa02dc81d5b88cb50b774356c3e44a064e0e8b4",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-cursor-click/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-cursor-click/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-cursor-click/16x9/detail.mp4",
      "bg": "#0c1324",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "1d2c261541b4a567b9d977ad5b03f874cbaaa0bbb7c7eb74f3656c11dd669d82",
        "loop": "acb5e5a7464706171e585dce7b91d3c4d2f35be3c56d6146b067458ab71dd5c0",
        "detail": "577a3f47440e06d05c3270d79acfb0c4b36c0357b4b4b36030752dffe019348d"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-cursor-click/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-cursor-click/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-cursor-click/9x16/detail.mp4",
      "bg": "#0b101c",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c1538a5fb76292d8bee6d0e9904936060448557ade3929ed79aa5ffa910a9c03",
        "loop": "e7e023709fd1505c8c8cb8c469b97297ca9f46184b0d7a9b24481d04cf92a1f8",
        "detail": "74d62e2d774f4d822f076f3bbdf5fe6759e4612061759755ee5e14c2823ca9b8"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-cursor-click/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-cursor-click/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-cursor-click/1x1/detail.mp4",
      "bg": "#0c1222",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "73c3db2472ed8294b3bf94b45367a44fe5da0748fec7b347fef6f0508e5ae0ba",
        "loop": "0e9585fa733fae2325bf68eb70d3ac6025574f5604e21130aa6bb5e18df07c29",
        "detail": "2ce908495842ecec87835b635c957abbf8a64f172c36ffe7a5e7fe7ab254dac3"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ec7cd5549a079710e4142b46dfa02dc81d5b88cb50b774356c3e44a064e0e8b4/index.mjs",
    "sha256": "ec7cd5549a079710e4142b46dfa02dc81d5b88cb50b774356c3e44a064e0e8b4",
    "bytes": 178534,
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
    "at": "2026-10-09T04:04:12.815Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
