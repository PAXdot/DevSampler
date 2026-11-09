// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/number",
  "tags": [
    "search",
    "coverage",
    "counter",
    "integrations",
    "lookup",
    "support"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 90,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 104,
      "out": 0
    },
    "markers": {
      "settled": 104
    },
    "beats": [
      0,
      14,
      30,
      44,
      104
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
    "safeArea": "title",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "question",
      "type": "text",
      "maxChars": 48,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "queries",
      "type": "list",
      "maxChars": 24,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "confirm",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "subline"
    },
    {
      "key": "target",
      "type": "number",
      "role": "value"
    },
    {
      "key": "label",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "kicker"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "input",
      "prop": "type",
      "settledBy": 30,
      "easing": "linear"
    },
    {
      "target": "counter",
      "prop": "count",
      "from": "0",
      "settledBy": 104,
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
    "sourceUrl": "21st first-party (motion study V02, twitter-remotion-research)"
  },
  "job": "data",
  "language": "kinetic-poster",
  "mechanic": [
    "count"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "question": "Does it work with your stack?",
    "queries": [
      "Next.js",
      "Remix",
      "Astro",
      "Vite",
      "Expo",
      "Nuxt"
    ],
    "confirm": "Supported out of the box",
    "target": 205,
    "label": "integrations and counting",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "question",
      "label": "Question",
      "type": "text",
      "max": 48,
      "role": "headline"
    },
    {
      "key": "queries",
      "label": "Queries",
      "type": "list",
      "max": 8,
      "role": "label"
    },
    {
      "key": "confirm",
      "label": "Confirm",
      "type": "text",
      "max": 40,
      "role": "subline"
    },
    {
      "key": "target",
      "label": "Target",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 1000000000,
      "role": "value"
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 32,
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
  "name": "Counter Lookup",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "counter-lookup",
    "bundleSha256": "820fb8ea98f907937c833e45fb0910998892e4f6cbaaf58e0f1bf4fceeb3374a",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:01:42.082Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/16x9-paper.png",
        "sha256": "895179140e7e0c78762e96cc8f157030764286db9815dca32fa26b45832d34a4"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/16x9-night.png",
        "sha256": "c5c48d9aeb578a00ac725e45e3b7207ffe07d9e8776eeac7c6ec45698f294ec4"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/16x9-color.png",
        "sha256": "6dcc3f602dcb4d0a7d22e1491563314f21134a3b254ca885bfd8d5278f59ff31"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/9x16-paper.png",
        "sha256": "75c888732158f9329aeab9a844b71ea728184162d409ed5418f1674977cb5992"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/9x16-night.png",
        "sha256": "b8ba686ee421699afc0f602ea34b23bc13ca982f93f79100534e30132ef968f3"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/9x16-color.png",
        "sha256": "c49aa27ea75b49123cbf2ae0c1cbcba4a647ad3447a8414f4b351896a0452821"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/1x1-paper.png",
        "sha256": "4d3a9b02cdf217ad74e0f8e45c7c2fb987763e70a9191c9bfc1b3f2134078fe4"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/1x1-night.png",
        "sha256": "4d6a613cee557b64f55f4086d7010a09e074c565dd02e91a3869a73fa3c323ce"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/1x1-color.png",
        "sha256": "c53160ecbc2b4b8145482973916735676d0756676b9b587d52a3eb18a83f78bd"
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
          "counter-lookup--16x9",
          "counter-lookup--9x16",
          "counter-lookup--1x1"
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
            "paperNight": 70.52346462673611,
            "paperColor": 44.184407552083336,
            "region": {
              "left": 87,
              "top": 270,
              "width": 1828,
              "height": 540
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 69.30726453993056,
            "paperColor": 40.737386067708336,
            "region": {
              "left": 84,
              "top": 329,
              "width": 912,
              "height": 1533
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 65.89539930555556,
            "paperColor": 39.77435980902778,
            "region": {
              "left": 88,
              "top": 125,
              "width": 904,
              "height": 922
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
            "occupancy": 0.6746622260015118,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6746622260015118,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6746622260015118,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.955550044091711,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.953680083144369,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9287472705131438,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0127290513827847,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0116306467717404,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.972088080774148,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.787543402777779,
        "frames": [
          15,
          104,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 8.745985243055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/16x9-duration-90-frame-10.png",
                "sha256": "e0e2d3e14460da4eb9245e8d53b0ff5de9aa2658cf896df3ef7396a238505751",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/16x9-duration-90-frame-89.png",
                "sha256": "64f76ca2b7042f0326af9022cd15a6171bc42d21beb8cb89e81b0f46fcf720d8",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/16x9-duration-90-frame-79.png",
                "sha256": "6c22304746da3680ad97ee4ec9ff99b9460d32d2f576c0b59ca40b9d38cdd828",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 8.787543402777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/16x9-duration-600-frame-15.png",
                "sha256": "ec94e299d1c22f47a8bf7c481e453c83cba4b3f5a5f8d2a4ee68e5c5046192d0",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/16x9-duration-600-frame-104.png",
                "sha256": "200b93d92c765951f6ee9b3f43a6f8e31d26afc7ba0bf8bc96360b94dff93e8b",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/16x9-duration-600-frame-528.png",
                "sha256": "99ceae2721fd513780237898cc26dc76007a65f52c9b354131d232619f955ad4",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/16x9-duration-600-frame-599.png",
                "sha256": "3531e02c0ea613cbcde287c47fda97057aea07b5e926cc6c655a813b3616a70a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 8.593315972222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/9x16-duration-90-frame-10.png",
                "sha256": "18fdc9132d64b230ecd22c57a6784fa5a91dcbe81cb01f33cdd0448726c79926",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/9x16-duration-90-frame-89.png",
                "sha256": "6c588d0ba9ee0f3607a93cd33dca99dfc0cc4fc40d13a42499d776428607699e",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/9x16-duration-90-frame-79.png",
                "sha256": "9526d966bdbea8cd37fe3a369b6e01aebb3c499d1b80c1f929d4f1a075188722",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 8.262586805555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/9x16-duration-600-frame-15.png",
                "sha256": "81786acafec978a0b11352818d7563d34899cfeec53ec1663bd1933f0f342567",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/9x16-duration-600-frame-104.png",
                "sha256": "490f50165af109f1af34acf683f5f88e51af2a31446a59a4102b334d987dfa8d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/9x16-duration-600-frame-528.png",
                "sha256": "306dcdc24ac9d78ef427685588c9304ffa8f4746c0d2b147a9a936ac56b2694a",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/9x16-duration-600-frame-599.png",
                "sha256": "7dcbfcbe33c2097f0c6ec52224abd14640fae8e5ab3d3507e5983da5615f12e3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 7.999457465277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/1x1-duration-90-frame-10.png",
                "sha256": "bf0eaa1680a938d3410590b524ed62c15a6c7f78c5bf52385281ec097b894acb",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/1x1-duration-90-frame-89.png",
                "sha256": "de01d1256d9cd7c384d77fe07bf452e8c996525a466311cf7107c5b4c19d4ae5",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/1x1-duration-90-frame-79.png",
                "sha256": "37d95b50ae2ebb6dd3c27e4cac16e9031749e11723ca96677a9bec6b544d0566",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 7.603081597222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/1x1-duration-600-frame-15.png",
                "sha256": "927489772d61009297f2b9b1a0f2457c5952773882e8375832d8e44cc2c064dc",
                "alphaMass": 587520
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/1x1-duration-600-frame-104.png",
                "sha256": "923caaa05c66361cc122b5d00e5d503e938f0636865dd0df13c1eda0a563976e",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/1x1-duration-600-frame-528.png",
                "sha256": "283d68620e589972c13a106564bd26fc14beadbc76ff03d715e489e894c0244f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/counter-lookup/1x1-duration-600-frame-599.png",
                "sha256": "6ad7be536f8333b1c711c43ac898ea1e5c61b46b6e89aa3ff997231e63f352f8",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "data",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A stack lookup beside a counter that climbs to an integrations total."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 11,
        "compared": 11,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "820fb8ea98f907937c833e45fb0910998892e4f6cbaaf58e0f1bf4fceeb3374a",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.967382Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/counter-lookup/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/counter-lookup/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/counter-lookup/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 104,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "cdd189020474c214268ce4db6c4ce8aadd455d4301205afaaa5f898cf9de41a6",
        "loop": "e428f0b57c562378bb680baca1d7dcf26286bbdbfca5d16237d562260f1312b1",
        "detail": "d968f7474d0a627a55e10f6d9f18b97c798f859da05c20ec2ca8910fa828f78b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/counter-lookup/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/counter-lookup/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/counter-lookup/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 104,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d10fd2b673bdae0a154ab93cc1016d1f99c8688de028230736c3ec0d12f210a4",
        "loop": "e2efb49d54c21a5f865b8338dfdf5fc85eb0a5ee93a0bf0f990f5164474a3b4f",
        "detail": "31cf43732da3c157f08420a1aa62dd67acd5355bc17c42a07a87da4218ccc86e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/counter-lookup/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/counter-lookup/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/counter-lookup/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 104,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5b1219557782dcd28b3e850d3808aacad6baf4b52430871e5613131d3050d17c",
        "loop": "a9c24d0909e597f5912a0c08c5ef51e1934585cb0d0283ec1ace45b191e2e353",
        "detail": "c1f4b3bd7f2a7fe153189af6d94281b1b49e7d6e7228ea2724b12d70ac073436"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/820fb8ea98f907937c833e45fb0910998892e4f6cbaaf58e0f1bf4fceeb3374a/index.mjs",
    "sha256": "820fb8ea98f907937c833e45fb0910998892e4f6cbaaf58e0f1bf4fceeb3374a",
    "bytes": 163263,
    "externals": [
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
    "at": "2026-10-07T02:26:37.760Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
