// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "text/kinetic",
  "tags": [
    "word swap",
    "push",
    "list",
    "problem",
    "contrast",
    "kinetic-type",
    "text"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 40,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 80,
      "out": 0
    },
    "markers": {
      "settled": 82
    },
    "beats": [
      2,
      38,
      56,
      74
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "9:16",
      "1:1",
      "16:9"
    ],
    "mode": "responsive",
    "fill": "region",
    "defaultRegion": {
      "x": 0.04,
      "y": 0.06,
      "w": 0.92,
      "h": 0.88
    },
    "safeArea": "title",
    "transparent": true,
    "preset": "full",
    "backdrop": []
  },
  "slots": [
    {
      "key": "staticLine",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "words",
      "type": "list",
      "maxChars": 20,
      "lines": 1,
      "role": "kicker"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "staticLine",
      "prop": "y",
      "from": "below",
      "settledBy": 14,
      "easing": "ease"
    },
    {
      "target": "word",
      "prop": "x",
      "from": "right",
      "settledBy": 81,
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
      120
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "motion recipe from research V12 (word swap push with blur); own copy"
  },
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "reveal"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "staticLine": "Your launch video,",
    "words": [
      "too slow.",
      "too costly.",
      "too stiff.",
      "done."
    ],
    "color": "#F4F4F5",
    "accent": "#7C9CFF",
    "fontFamily": "Geist",
    "every": 18,
    "direction": "left"
  },
  "fields": [
    {
      "key": "staticLine",
      "label": "Static line",
      "type": "text",
      "max": 32,
      "role": "headline"
    },
    {
      "key": "words",
      "label": "Words",
      "type": "list",
      "max": 6,
      "role": "kicker"
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "every",
      "label": "Every",
      "type": "number",
      "step": 1,
      "min": 10,
      "max": 40
    },
    {
      "key": "direction",
      "label": "Direction",
      "type": "select",
      "options": [
        "left",
        "up"
      ]
    }
  ],
  "name": "Word Swap Line",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "word-swap",
    "bundleSha256": "523d2e88eaf5546636603bf02374595b74bfc41068302ee1c16386f0189dd05e",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:02:14.413Z",
    "samples": [
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/9x16-paper.png",
        "sha256": "bbf90ec16789a62d07bbce4c0cba93133d2447b87d9849f8c4b2439b2a6c38cf"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/9x16-night.png",
        "sha256": "af7d31573c846ee177bd48805adfb43749c6c5d517fbd07af29a771fc7ee6f33"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/9x16-color.png",
        "sha256": "0942f44038a264ae71a23d874c5b1b5b13981ae33cf7fd87645e42c2744e7bd8"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/1x1-paper.png",
        "sha256": "f12b4c4c8e6a04c0339877d362a3d984031206e2dba433b5f773f550760eb47b"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/1x1-night.png",
        "sha256": "942688e49643fae9ecbde2df11b16966cf6275bb7460f1e4b0a10d393ad1b9f4"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/1x1-color.png",
        "sha256": "16f94b1436065609c1f509c884b60f20d6fc6b6a62f86c334cf847a0c5bd0bf4"
      },
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/16x9-paper.png",
        "sha256": "e83b19378e7f54417645d74651c6af510fc02d00d3b87fac730ecbc270f00de8"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/16x9-night.png",
        "sha256": "bd0d977170208893183b5cf8d8542a38e5b3ad628db9e7e12af5371fe4ec89bf"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/16x9-color.png",
        "sha256": "1462d66d1b801bca3c3e88c1f7af003a43cbc965af49c1e2f1028cb7aab3cd2d"
      }
    ],
    "gates": {
      "contract": {
        "pass": true,
        "errors": [],
        "transparency": [
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "word-swap--9x16",
          "word-swap--1x1",
          "word-swap--16x9"
        ]
      },
      "brand": {
        "pass": true,
        "sourcePaintLiterals": [],
        "sourceFontLiterals": [],
        "samples": [
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 12.884657118055555,
            "paperColor": 6.998046875,
            "region": {
              "left": 32,
              "top": 226,
              "width": 1016,
              "height": 1483
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 47.879855685763886,
            "paperColor": 33.74102105034722,
            "region": {
              "left": 146,
              "top": 416,
              "width": 788,
              "height": 214
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 46.637668185763886,
            "paperColor": 33.95008680555556,
            "region": {
              "left": 259,
              "top": 320,
              "width": 1401,
              "height": 379
            },
            "canvas": {
              "width": 1920,
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
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.027018639245822,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0249354371378183,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0297962420564937,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.19928024364752764,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.1991514484165866,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.1370211150303743,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3516955023393103,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3523728164105149,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2429507119848969,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.244140625,
        "frames": [
          12,
          82,
          119
        ],
        "elastic": [
          {
            "aspect": "9:16",
            "duration": 40,
            "averageChannelDifference": 22.38498263888889,
            "retainedAlpha": 1.0050217404617552,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/9x16-duration-40-frame-4.png",
                "sha256": "5a294b5b818f1095d3bf3cf336b4164efca70b36e0839f254bfffc107dfca007",
                "alphaMass": 2662
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/9x16-duration-40-frame-39.png",
                "sha256": "c606b0146a1bbe80e2a0cc6bc1c058a206bf7dfc720bbe0e41dd4212870eac88",
                "alphaMass": 16329
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/9x16-duration-40-frame-35.png",
                "sha256": "1198b40e7be7ea4ece7ce80254d610554b058b30dd7ead431cf49fcff4ec4ac1",
                "alphaMass": 16411
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 4.274305555555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/9x16-duration-600-frame-12.png",
                "sha256": "048ec041a5eb37a6bb5727f68d0dc7bfb8156ed4eb21b4333dad1dc0574bba90",
                "alphaMass": 14163
              },
              {
                "frame": 82,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/9x16-duration-600-frame-82.png",
                "sha256": "bfa4efe30ef6977eff326ed2aac652a953763b5632fbe053627d186763014c34",
                "alphaMass": 14552
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/9x16-duration-600-frame-528.png",
                "sha256": "bfa4efe30ef6977eff326ed2aac652a953763b5632fbe053627d186763014c34",
                "alphaMass": 14552
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/9x16-duration-600-frame-599.png",
                "sha256": "bfa4efe30ef6977eff326ed2aac652a953763b5632fbe053627d186763014c34",
                "alphaMass": 14552
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 40,
            "averageChannelDifference": 17.82367621527778,
            "retainedAlpha": 1.008177699193281,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/1x1-duration-40-frame-4.png",
                "sha256": "09c9f0fbbdb2cdf3f49c8653c5b8f288e7580d444cae226d7c315ce7675a770f",
                "alphaMass": 3059
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/1x1-duration-40-frame-39.png",
                "sha256": "2603e1a449919159343849275956d31aec925376211d059f9e0dedf848ec55ef",
                "alphaMass": 18098
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/1x1-duration-40-frame-35.png",
                "sha256": "76f3abd70763d96bc7b7401c1df43f64417ebcfe9c0aae18c7576f340d60ac6e",
                "alphaMass": 18246
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 3.9313151041666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/1x1-duration-600-frame-12.png",
                "sha256": "c1ec2dd61e4c37642b89f09c2673ffdcede6b8a3e87ee643f014024f09df74cb",
                "alphaMass": 16007
              },
              {
                "frame": 82,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/1x1-duration-600-frame-82.png",
                "sha256": "3a31f73f121fdbbd312afe64275ff2e97efec886eefbf3531010df64210b14d1",
                "alphaMass": 16114
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/1x1-duration-600-frame-528.png",
                "sha256": "3a31f73f121fdbbd312afe64275ff2e97efec886eefbf3531010df64210b14d1",
                "alphaMass": 16114
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/1x1-duration-600-frame-599.png",
                "sha256": "3a31f73f121fdbbd312afe64275ff2e97efec886eefbf3531010df64210b14d1",
                "alphaMass": 16114
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 40,
            "averageChannelDifference": 22.69965277777778,
            "retainedAlpha": 1.006644851075197,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/16x9-duration-40-frame-4.png",
                "sha256": "aa1d9c1ce4956cc4a8f7367a55a7a73d9e7e27dc7e61660e7771df0b47cfbd95",
                "alphaMass": 5121
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/16x9-duration-40-frame-39.png",
                "sha256": "d2e30aa8ca78701797656b97c2d791bbc1dfbb3f10d9b79720c5872b230d80a8",
                "alphaMass": 29948
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/16x9-duration-40-frame-35.png",
                "sha256": "61e8c4848820974ab57cd5a99d3f973aa33a6f983bdc1086635b7a1c4cae4b1c",
                "alphaMass": 30147
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 5.244140625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/16x9-duration-600-frame-12.png",
                "sha256": "48245b4a6262091589a86fa90277d5e7fc8b7e43222e325ebafa8c39d4f98f26",
                "alphaMass": 26472
              },
              {
                "frame": 82,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/16x9-duration-600-frame-82.png",
                "sha256": "fe24ab421935f678ee1c41144f398165b9cef4481114d0f249d1745ff5f1909d",
                "alphaMass": 26557
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/16x9-duration-600-frame-528.png",
                "sha256": "6f37f77750c75627a62b63a18a4a13e2dc7e09c9da3b1d580f0cc347b54701cb",
                "alphaMass": 26557
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/word-swap/16x9-duration-600-frame-599.png",
                "sha256": "67c90de81b6cc3048a70ea7d8b90fc3d8dca80925bb9dff4770463fd74d7efc5",
                "alphaMass": 26557
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "titles",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Second line swaps words until the payoff; title card."
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
      "bundleSha256": "523d2e88eaf5546636603bf02374595b74bfc41068302ee1c16386f0189dd05e",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.941380Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/word-swap/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/word-swap/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/word-swap/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 82,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "1ec563b5b1e5bb8730011c85208c1bb34590661fa17f147ede76c0fa00e6915a",
        "loop": "44c5db8bd3f9ff7cfe47ef9a932a863846b7154e07857fe984c1c82aa3bcc54d",
        "detail": "cb359e8a491ec80db8823b3f01d17f38a03c5912b26321cf8f85b8568f1c1ac0"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/word-swap/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/word-swap/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/word-swap/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 82,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "42e2b7ee848af479846206970a6362f8263b43b5c6813ce4790b262660b52c65",
        "loop": "a3762232f05cb8c016296c00c5036061c1985763fe6af39ab3460b5898048da0",
        "detail": "f3fb0d4543dd1d24334e68ea11ff2d8be7c286d1b057e168510749d9a38cc3bd"
      }
    },
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/word-swap/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/word-swap/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/word-swap/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 82,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "a080bf50bf33755cbb1924346c4dbfceb3d7be441e3d5a291de517d89f2127b4",
        "loop": "04e7019aa84945cb9363ad0d63f7ea7d3ee01fe5071638c19c8a962d0668d1f0",
        "detail": "6054e75bf783fc0af912db3b4ba79f40ec2b465ef1d238598f248f3313b6f173"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/523d2e88eaf5546636603bf02374595b74bfc41068302ee1c16386f0189dd05e/index.mjs",
    "sha256": "523d2e88eaf5546636603bf02374595b74bfc41068302ee1c16386f0189dd05e",
    "bytes": 160211,
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
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    },
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
    }
  },
  "intake": {
    "at": "2026-10-07T02:22:55.932Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
