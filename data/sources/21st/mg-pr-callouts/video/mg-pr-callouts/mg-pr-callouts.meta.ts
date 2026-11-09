// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "hand-drawn",
  "mechanic": [
    "hand-drawn-callouts"
  ],
  "energy": "default",
  "requiresScreenshot": true,
  "tags": [
    "motion-gallery",
    "product-ui",
    "hand-drawn-callouts",
    "annotations",
    "handwriting",
    "arrows"
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
      "key": "n1",
      "type": "text",
      "maxChars": 30,
      "role": "label"
    },
    {
      "key": "n2",
      "type": "text",
      "maxChars": 34,
      "role": "label"
    },
    {
      "key": "n3",
      "type": "text",
      "maxChars": 38,
      "role": "label"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.accent",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "hand-drawn-callouts",
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
    "ink": "#18210F",
    "accent": "#EE4B1F",
    "secondary": "#FFD60A",
    "paper": "#DCE5D2",
    "displayFont": "Caveat",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "Your board update, written for you",
    "n1": "just ask, in plain English",
    "n2": "every claim links to its source",
    "n3": "one click and the whole team has it"
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
      "brand": "fonts.accent"
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
      "key": "n1",
      "label": "N 1",
      "type": "text",
      "max": 30,
      "role": "label"
    },
    {
      "key": "n2",
      "label": "N 2",
      "type": "text",
      "max": 34,
      "role": "label"
    },
    {
      "key": "n3",
      "label": "N 3",
      "type": "text",
      "max": 38,
      "role": "label"
    }
  ],
  "name": "Hand-Drawn Callouts",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-pr-callouts",
    "bundleSha256": "2ddd64159294a7f71267d22b7b952b43ddd576205944408e7065f1385e9ae90b",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:43:43.004Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/16x9-paper.png",
        "sha256": "f147083aace163e5bdc4af76579437a08d766b24367fa788697e1b34af24dea2"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/16x9-night.png",
        "sha256": "0837af548abad7781c13690bfd872c73ec1652189a38b223663860f297ca971e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/16x9-color.png",
        "sha256": "a69629503fb587dd6f9a1e142eeaa36aedf78564cc3f1d4b32849e6bd017de08"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/9x16-paper.png",
        "sha256": "bcde69a13abc71f34bd0eb44c48ba1ab9f51955120fc4f45926ec08ae491e546"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/9x16-night.png",
        "sha256": "e3e7337cd487085ae6ac7bdf595907f8d606a32c56ff8d5d49ec91ef0f8e049e"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/9x16-color.png",
        "sha256": "c46bb39369377651058fc669f850d48942a8a514197a5a500ec7a4a92b8a569e"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/1x1-paper.png",
        "sha256": "e45364b520a89f082aa42c37c4045579fd58671045672e1ec188575a4a507bf1"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/1x1-night.png",
        "sha256": "f312eece68367db8198126e5c2b2a8900afdc02eb69c656fc67fac153db2d79c"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/1x1-color.png",
        "sha256": "77f25473166b74410c6d024a4177522f4a8e9119a314c33df291e24ec96cfb0c"
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
          "mg-pr-callouts--16x9",
          "mg-pr-callouts--9x16",
          "mg-pr-callouts--1x1"
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
            "paperNight": 11.633490668402779,
            "paperColor": 5.334147135416667,
            "region": {
              "left": 115,
              "top": 66,
              "width": 1601,
              "height": 954
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 22.543565538194443,
            "paperColor": 9.11865234375,
            "region": {
              "left": 0,
              "top": 211,
              "width": 1080,
              "height": 1457
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 14.870795355902779,
            "paperColor": 6.282362196180555,
            "region": {
              "left": 40,
              "top": 78,
              "width": 996,
              "height": 768
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
            "occupancy": 1.033460982772739,
            "bad": [],
            "measured": 25
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0432413706223231,
            "bad": [],
            "measured": 25
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0330290327293472,
            "bad": [],
            "measured": 25
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.073997307256236,
            "bad": [],
            "measured": 25
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.07473544973545,
            "bad": [],
            "measured": 25
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.07473544973545,
            "bad": [],
            "measured": 25
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9191605311534766,
            "bad": [],
            "measured": 25
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9294252680496068,
            "bad": [],
            "measured": 25
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9179637075452038,
            "bad": [],
            "measured": 25
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.1612413194444446,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 3.216037326388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/16x9-duration-90-frame-10.png",
                "sha256": "33554d1ab02769087f7a52346e6cc439ec706c35e69b3db47eb49c51a55cdf94",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/16x9-duration-90-frame-89.png",
                "sha256": "ada2d647e32f8c4f7ab2272115033dfc16957072261df819c158c73e0c9c9949",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/16x9-duration-90-frame-79.png",
                "sha256": "a814f4272d83a3ab6929bd5a0325a06d33b5cbe0910a6ec9843c463aabff9b94",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 3.1612413194444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/16x9-duration-900-frame-13.png",
                "sha256": "5f59f4b77c6dcdbd5b6ad7e779886cfffaaecad1fd1b28a3f50e361995db1009",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/16x9-duration-900-frame-90.png",
                "sha256": "ada2d647e32f8c4f7ab2272115033dfc16957072261df819c158c73e0c9c9949",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/16x9-duration-900-frame-792.png",
                "sha256": "ada2d647e32f8c4f7ab2272115033dfc16957072261df819c158c73e0c9c9949",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/16x9-duration-900-frame-899.png",
                "sha256": "a814f4272d83a3ab6929bd5a0325a06d33b5cbe0910a6ec9843c463aabff9b94",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 5.021918402777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/9x16-duration-90-frame-10.png",
                "sha256": "51dae69300beed7233d6a23d8e443ff487d9272941d3c2b08f2b8bb15df92e3a",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/9x16-duration-90-frame-89.png",
                "sha256": "8d06ce703cbb74a0c15e6883c55262217f3e3f79be5e5ca4900fc64f66b35768",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/9x16-duration-90-frame-79.png",
                "sha256": "6a32f99f2fd338d39e84c9092f5423acf248c35d5b258576072d8b70e52b06d2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 4.916341145833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/9x16-duration-900-frame-13.png",
                "sha256": "825c37b49f975de21443952c40d2dc323bcb297b0fc183e5db6b3ae771e4b51e",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/9x16-duration-900-frame-90.png",
                "sha256": "6a32f99f2fd338d39e84c9092f5423acf248c35d5b258576072d8b70e52b06d2",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/9x16-duration-900-frame-792.png",
                "sha256": "6a32f99f2fd338d39e84c9092f5423acf248c35d5b258576072d8b70e52b06d2",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/9x16-duration-900-frame-899.png",
                "sha256": "6a32f99f2fd338d39e84c9092f5423acf248c35d5b258576072d8b70e52b06d2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 3.1010199652777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/1x1-duration-90-frame-10.png",
                "sha256": "b0e6300a890f535b1c21e62279ab2d5ef1472d211f1255b7bec695af03970adf",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/1x1-duration-90-frame-89.png",
                "sha256": "084da2c83d60554aba97e9dfe68781a0399ffcd16c154fdf39377b9747ecc890",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/1x1-duration-90-frame-79.png",
                "sha256": "2b50a5a1f9b1cebff6bfec3acc3448dc6eb3b783e101b779c8ea299e6805d296",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 3.0139973958333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/1x1-duration-900-frame-13.png",
                "sha256": "012f99815f7d27fdbcba400dc82bc45739803a6a7df49566b7f099662e13355d",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/1x1-duration-900-frame-90.png",
                "sha256": "084da2c83d60554aba97e9dfe68781a0399ffcd16c154fdf39377b9747ecc890",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/1x1-duration-900-frame-792.png",
                "sha256": "2b50a5a1f9b1cebff6bfec3acc3448dc6eb3b783e101b779c8ea299e6805d296",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-pr-callouts/1x1-duration-900-frame-899.png",
                "sha256": "2b50a5a1f9b1cebff6bfec3acc3448dc6eb3b783e101b779c8ea299e6805d296",
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
        "note": "Hand-drawn callouts circle UI details; headline and notes readable, rebrands distinct."
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
      "bundleSha256": "2ddd64159294a7f71267d22b7b952b43ddd576205944408e7065f1385e9ae90b",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-callouts/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-callouts/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-callouts/16x9/detail.mp4",
      "bg": "#dce5d2",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "6965e21f20b165a42b563de1c64c0081ce39ad4fc6f1074bb4ccb7d42af415ba",
        "loop": "d45c67f4e2c1d5e373f9f31ae80d260152d6d04f0ea16b41a884806fa7f0ad8c",
        "detail": "91a354a05d38b900e0e1599ac0360c11c9ee4787db6b7edc54f5ece818d45a4f"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-callouts/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-callouts/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-callouts/9x16/detail.mp4",
      "bg": "#dce5d2",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0401f03e3342e427a16977f27d85e3ecfea6eb9dfaf63ca454432e32ec069f5c",
        "loop": "bd5bcbb571cd020919072007374025b92c4d3c0b4f0050ac30078973b5672161",
        "detail": "9f693b77b9dd7912228231818850de1d19d0ae78cf850686289d704b944504ec"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-pr-callouts/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-pr-callouts/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-pr-callouts/1x1/detail.mp4",
      "bg": "#dce5d2",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "1463099d404e418978eca51ef2235e55f12958571a0013f6bdf1f82e9724f931",
        "loop": "9bba0c89cf1821eef333def144ca3f8e89992ac8b18c85bfafcdf23c58cc990a",
        "detail": "f876238689d68c8e9f0de56c0e3594fba763ce39946a12c5f614f2ddbe51b0f1"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/2ddd64159294a7f71267d22b7b952b43ddd576205944408e7065f1385e9ae90b/index.mjs",
    "sha256": "2ddd64159294a7f71267d22b7b952b43ddd576205944408e7065f1385e9ae90b",
    "bytes": 174520,
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
    "at": "2026-10-09T04:01:49.089Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
