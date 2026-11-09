// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data-output",
  "job": "gallery",
  "language": "product-ui",
  "mechanic": [
    "assemble"
  ],
  "looks": [
    {
      "id": "focus",
      "name": "Mechanism in focus",
      "props": {
        "showHeading": false
      }
    },
    {
      "id": "context",
      "name": "Mechanism with context",
      "props": {
        "showHeading": true
      }
    }
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "launch",
    "canonical",
    "document-page-fan",
    "systems",
    "data",
    "source-linked"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 150,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 132
    },
    "beats": [
      18,
      48,
      84,
      116
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
      "showBackground"
    ]
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 72,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "type": "text",
      "maxChars": 120,
      "role": "body"
    },
    {
      "key": "items",
      "type": "list",
      "role": "items"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "foreground": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "bodyFontFamily": "fonts.body",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "content",
      "prop": "transform",
      "from": "composed",
      "settledBy": 132,
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
    "sourceUrl": "docs/research/launch-videos-2026-10-06/library-expansion.md"
  },
  "defaults": {
    "title": "Give your ideas room",
    "subtitle": "A single page opens into a useful collection",
    "items": [
      "Overview",
      "Research",
      "Plan",
      "Appendix"
    ],
    "accent": "#3D63FF",
    "secondary": "#B2B4B8",
    "foreground": "#19191D",
    "background": "#F8F8FA",
    "fontFamily": "Inter",
    "bodyFontFamily": "Inter",
    "monoFontFamily": "Geist Mono",
    "showHeading": false,
    "showBackground": false
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 72,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "label": "Subtitle",
      "type": "text",
      "max": 120,
      "role": "body"
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "items",
      "label": "Items",
      "type": "list",
      "max": 6,
      "role": "items"
    },
    {
      "key": "showHeading",
      "label": "Show heading",
      "type": "boolean"
    },
    {
      "key": "showBackground",
      "label": "Show background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "foreground",
      "label": "Foreground",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    }
  ],
  "name": "Document Page Fan",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-document-page-fan",
    "bundleSha256": "056f3c3d1f55f9afe3e328c1e462d6a87a06ecb94bf55fd608ad9e1078ec5a0b",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:37:29.293Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/16x9-paper.png",
        "sha256": "6fb7734d0aed27cd1092dce43f8e44a31822191d269ba42658c7068c26332444"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/16x9-night.png",
        "sha256": "127496fc83a059c32db36ac58e96fa13b22f6c88f4e1e9e604ac9ad8b15258eb"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/16x9-color.png",
        "sha256": "7c560c514fdbc34b3c5d10418aa6c2139bf3440d4a9318519b620a19ec39495b"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/9x16-paper.png",
        "sha256": "b2c20efa76fc44175b355addca3ebcce366532355e4f41e473a0dd9e493bf435"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/9x16-night.png",
        "sha256": "264c8dbbe81254336a8fe930b55cbebb53965037a42a5c03b95e7e20d545c5b3"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/9x16-color.png",
        "sha256": "f4c0d066267f6e24ed6182ebd99ca8d1eb1f5c1c67bdb647dca6af63659a49db"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/1x1-paper.png",
        "sha256": "d9519dac2aa7762fec6cdaf0c48195428e7eb87469eaf86f6249a84d0c21135c"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/1x1-night.png",
        "sha256": "ccfdddba57432344392971e6a041a89da609bcba366699227a61ab3ea8d73df3"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/1x1-color.png",
        "sha256": "9dfc4568c1da18aeee89d54c1cd68c47ae3875f507d3fe48b277c2fc6174918a"
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
          "lp-document-page-fan--16x9",
          "lp-document-page-fan--9x16",
          "lp-document-page-fan--1x1"
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
            "paperNight": 114.88804796006944,
            "paperColor": 10.208902994791666,
            "region": {
              "left": 441,
              "top": 211,
              "width": 1038,
              "height": 741
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 117.04896375868056,
            "paperColor": 10.646620008680555,
            "region": {
              "left": 108,
              "top": 337,
              "width": 863,
              "height": 1367
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 116.74937608506944,
            "paperColor": 10.88330078125,
            "region": {
              "left": 245,
              "top": 353,
              "width": 589,
              "height": 420
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
            "occupancy": 0.5256927713214917,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5256927713214917,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.524983334383136,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8062983182599173,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8062983182599173,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8062983182599173,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3005789078319943,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3005789078319943,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.29986324376572765,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 49.776150173611114,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 50.181640625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/16x9-duration-150-frame-18.png",
                "sha256": "00a1b7fae71e1a14b9d8193445d18abfd30d1aaeb4f6368af98ccbba747ebdc3",
                "alphaMass": 2813
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/16x9-duration-150-frame-132.png",
                "sha256": "89f970101803fbd79b8b7ef43c08e4210b023b358a52c3d185f4590e747f9008",
                "alphaMass": 149642
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/16x9-duration-150-frame-149.png",
                "sha256": "89f970101803fbd79b8b7ef43c08e4210b023b358a52c3d185f4590e747f9008",
                "alphaMass": 149642
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 49.776150173611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/16x9-duration-900-frame-19.png",
                "sha256": "3e07ee632d2afd8f9593a3eee3f504a2b3a6046a97c368ca490b4d289fa639c0",
                "alphaMass": 3977
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/16x9-duration-900-frame-132.png",
                "sha256": "89f970101803fbd79b8b7ef43c08e4210b023b358a52c3d185f4590e747f9008",
                "alphaMass": 149642
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/16x9-duration-900-frame-792.png",
                "sha256": "89f970101803fbd79b8b7ef43c08e4210b023b358a52c3d185f4590e747f9008",
                "alphaMass": 149642
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/16x9-duration-900-frame-899.png",
                "sha256": "89f970101803fbd79b8b7ef43c08e4210b023b358a52c3d185f4590e747f9008",
                "alphaMass": 149642
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 83.16189236111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/9x16-duration-150-frame-18.png",
                "sha256": "1ea923e8292afe4cd82b35039ee81986b6542b56166540831fcf3eb68c88bbce",
                "alphaMass": 2994
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/9x16-duration-150-frame-132.png",
                "sha256": "be84753598af1a7b88849e357934829e0dc5431f2112438aa8af6c69466147cc",
                "alphaMass": 230893
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/9x16-duration-150-frame-149.png",
                "sha256": "be84753598af1a7b88849e357934829e0dc5431f2112438aa8af6c69466147cc",
                "alphaMass": 230893
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 81.11859809027777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/9x16-duration-900-frame-19.png",
                "sha256": "72faf2278ec5d9119cc252ba58913b48650b9c60416c7034fd506174c52886d0",
                "alphaMass": 4745
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/9x16-duration-900-frame-132.png",
                "sha256": "be84753598af1a7b88849e357934829e0dc5431f2112438aa8af6c69466147cc",
                "alphaMass": 230893
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/9x16-duration-900-frame-792.png",
                "sha256": "be84753598af1a7b88849e357934829e0dc5431f2112438aa8af6c69466147cc",
                "alphaMass": 230893
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/9x16-duration-900-frame-899.png",
                "sha256": "be84753598af1a7b88849e357934829e0dc5431f2112438aa8af6c69466147cc",
                "alphaMass": 230893
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 31.691080729166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/1x1-duration-150-frame-18.png",
                "sha256": "f9cf3aa78bf6c80b78cab8ae91b49684a56b9f6c5abb18aca98d554ab908ce75",
                "alphaMass": 2169
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/1x1-duration-150-frame-132.png",
                "sha256": "7dcdd6ab76acf94e162c389dd3df87dece7ff057b5da4c071cb7971e0ec961a1",
                "alphaMass": 86013
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/1x1-duration-150-frame-149.png",
                "sha256": "7dcdd6ab76acf94e162c389dd3df87dece7ff057b5da4c071cb7971e0ec961a1",
                "alphaMass": 86013
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 31.1357421875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/1x1-duration-900-frame-19.png",
                "sha256": "ad40c84a13809c86265b5881480753a6a2ed2e1324eac6dd9a73d17439f6e8ed",
                "alphaMass": 2854
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/1x1-duration-900-frame-132.png",
                "sha256": "7dcdd6ab76acf94e162c389dd3df87dece7ff057b5da4c071cb7971e0ec961a1",
                "alphaMass": 86013
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/1x1-duration-900-frame-792.png",
                "sha256": "7dcdd6ab76acf94e162c389dd3df87dece7ff057b5da4c071cb7971e0ec961a1",
                "alphaMass": 86013
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-document-page-fan/1x1-duration-900-frame-899.png",
                "sha256": "7dcdd6ab76acf94e162c389dd3df87dece7ff057b5da4c071cb7971e0ec961a1",
                "alphaMass": 86013
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
        "note": "Document pages fan out with a highlighted passage in light brand blue."
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
      "bundleSha256": "056f3c3d1f55f9afe3e328c1e462d6a87a06ecb94bf55fd608ad9e1078ec5a0b",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-document-page-fan/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-document-page-fan/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-document-page-fan/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d013000a9159a9a4671bdafaae306f80ff410f42a31c790b01e8672181b6bab1",
        "loop": "33872f7da77d560a7a28ae7e8b7088c21318f4eae0846f87249da932bf283754",
        "detail": "63da9b8f0af6cd8b55fcdfef66461b954f904d8ae5de8e5dd67c2d7707c928ce"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-document-page-fan/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-document-page-fan/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-document-page-fan/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "dcc6268a91ac64feccf4b15a210948a6e61f4c35b2555f927c36b13a8a22590c",
        "loop": "524320e4e914c4c520a5251c8c6d92605a2f2c2dccc9525cda3cc78f163c58fc",
        "detail": "19e308c00e6bbc6a5691134596625083b8e9bdb3f657b5eb70946d5314ed7e3e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-document-page-fan/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-document-page-fan/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-document-page-fan/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f79e2cff28036e360b55a454a0a800f27a275038dfa07bf265a976621f613542",
        "loop": "bb74bea4a7d7d7174df940d68c1e0b80b86ed9a7525266ea689d1d8252fb131a",
        "detail": "b19284f8370dff3da22d4bdf4cde7f64f3574e9f1731c0a7ab61d647a4611df7"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/056f3c3d1f55f9afe3e328c1e462d6a87a06ecb94bf55fd608ad9e1078ec5a0b/index.mjs",
    "sha256": "056f3c3d1f55f9afe3e328c1e462d6a87a06ecb94bf55fd608ad9e1078ec5a0b",
    "bytes": 298409,
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
    "at": "2026-10-09T03:24:48.235Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
