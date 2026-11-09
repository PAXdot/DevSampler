// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "editorial",
  "mechanic": [
    "keyword-serif-morph"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "keyword-serif-morph",
    "captions",
    "subtitles",
    "keyword",
    "serif-accent"
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
      "in": 105,
      "out": 0
    },
    "markers": {
      "settled": 105
    },
    "beats": [
      0,
      26,
      53,
      79,
      105
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
      "key": "line",
      "type": "text",
      "maxChars": 48,
      "role": "caption"
    },
    {
      "key": "keyword",
      "type": "text",
      "maxChars": 18,
      "role": "headline"
    },
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 20,
      "role": "kicker"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.serif",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "keyword-serif-morph",
      "prop": "transform",
      "from": "enter",
      "settledBy": 105,
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
    "ink": "#FFFFFF",
    "accent": "#FFC98F",
    "secondary": "#C25E73",
    "paper": "#16171A",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": false,
    "line": "Your docs, your code, your team, in",
    "keyword": "one place.",
    "kicker": "chapter 02"
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
      "brand": "fonts.serif"
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
      "key": "line",
      "label": "Line",
      "type": "text",
      "max": 48,
      "role": "caption"
    },
    {
      "key": "keyword",
      "label": "Keyword",
      "type": "text",
      "max": 18,
      "role": "headline"
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 20,
      "role": "kicker"
    }
  ],
  "name": "Serif Keyword Caption",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-cap-emphasis",
    "bundleSha256": "8fc08f3d4fedd234e1f04cbdfceecf6ebf26c7c1e4bbde4ebb2edcb1e16d96d6",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:44:42.347Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/16x9-paper.png",
        "sha256": "c26e15569b0d18d12bc9076094097654166e855e06e51bc693c3c97bc66b0f37"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/16x9-night.png",
        "sha256": "94c97b0d217112cc47387c14f4406956beeabc333137161cde3ed00467867673"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/16x9-color.png",
        "sha256": "5d91a4caf14c680785d25cc9512bac2458cb3d91eb0ccacf2810f7fc4fde5d64"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/9x16-paper.png",
        "sha256": "c966ef425dde3ab50db7eb0d6bb93ae2d76b7b0c013b61393f8ef474d9901181"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/9x16-night.png",
        "sha256": "d5ddf7b42e186fcbfaaa3418291644fe4ef267c125a51e8bf7c75cca3ea3efd9"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/9x16-color.png",
        "sha256": "68885933c71762fc969273d493d820a238af3d8cac538be4f3b3f1733ab85243"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/1x1-paper.png",
        "sha256": "b4242c65dbfe1032c52864258119e9b59eb02561b72beca025d391f1893b524c"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/1x1-night.png",
        "sha256": "4e9caf8bd29c1abc7f0c65554077bd863bc8a90b1fbc460e38ce80f70b6dd952"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/1x1-color.png",
        "sha256": "2a02fdf67276da3844a7837eb898b3c744f165189e61ba238b83214a40101538"
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
          "mg-cap-emphasis--16x9",
          "mg-cap-emphasis--9x16",
          "mg-cap-emphasis--1x1"
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
            "paperNight": 15.751654730902779,
            "paperColor": 6.914442274305555,
            "region": {
              "left": 77,
              "top": 69,
              "width": 1428,
              "height": 933
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 20.538465711805557,
            "paperColor": 7.820231119791667,
            "region": {
              "left": 86,
              "top": 154,
              "width": 901,
              "height": 1578
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 16.338758680555557,
            "paperColor": 8.035074869791666,
            "region": {
              "left": 65,
              "top": 65,
              "width": 884,
              "height": 957
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
            "occupancy": 0.8892088053071024,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.910597167107584,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8793983449861428,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.846094449868425,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9717358683442515,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9159774056227431,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0027777972185676,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.027917168239038,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9887609879342686,
            "bad": [],
            "measured": 9
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 13.5146484375,
        "frames": [
          15,
          105,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 13.672743055555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/16x9-duration-90-frame-10.png",
                "sha256": "0f680edc02c4ea9d03ff58b753cdf3ccb4682aa7b6d415c2eb4f1700c22eecbd",
                "alphaMass": 5038
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/16x9-duration-90-frame-89.png",
                "sha256": "fa7142107ad9bcd6b573ad4215f9333b11b5feb1afc3ec56a7dbe3b53f34e37e",
                "alphaMass": 18841
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/16x9-duration-90-frame-79.png",
                "sha256": "fa7142107ad9bcd6b573ad4215f9333b11b5feb1afc3ec56a7dbe3b53f34e37e",
                "alphaMass": 18841
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 13.5146484375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/16x9-duration-900-frame-15.png",
                "sha256": "a18f3c34f2bbf0a90bffce440ba75ad10e7f0847bed902f1934a9fb98048bf57",
                "alphaMass": 5165
              },
              {
                "frame": 105,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/16x9-duration-900-frame-105.png",
                "sha256": "fa7142107ad9bcd6b573ad4215f9333b11b5feb1afc3ec56a7dbe3b53f34e37e",
                "alphaMass": 18841
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/16x9-duration-900-frame-792.png",
                "sha256": "fa7142107ad9bcd6b573ad4215f9333b11b5feb1afc3ec56a7dbe3b53f34e37e",
                "alphaMass": 18841
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/16x9-duration-900-frame-899.png",
                "sha256": "fa7142107ad9bcd6b573ad4215f9333b11b5feb1afc3ec56a7dbe3b53f34e37e",
                "alphaMass": 18841
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 14.789496527777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/9x16-duration-90-frame-10.png",
                "sha256": "bc8065aeeb82d4b3a2e725db9dac7724667e3ed7361b5a61e4bd6c9f18e903d8",
                "alphaMass": 11132
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/9x16-duration-90-frame-89.png",
                "sha256": "00bbfa9bec001a30e77197b2a81b7e9c51b865f93c4cc6b9b9069e4337b6e33b",
                "alphaMass": 25092
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/9x16-duration-90-frame-79.png",
                "sha256": "00bbfa9bec001a30e77197b2a81b7e9c51b865f93c4cc6b9b9069e4337b6e33b",
                "alphaMass": 25092
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 14.71657986111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/9x16-duration-900-frame-15.png",
                "sha256": "49423f31b6fa8cacca4d5e76dc3a0b00a5835062109f3348caab2e2bb29a0ebc",
                "alphaMass": 11274
              },
              {
                "frame": 105,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/9x16-duration-900-frame-105.png",
                "sha256": "00bbfa9bec001a30e77197b2a81b7e9c51b865f93c4cc6b9b9069e4337b6e33b",
                "alphaMass": 25092
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/9x16-duration-900-frame-792.png",
                "sha256": "00bbfa9bec001a30e77197b2a81b7e9c51b865f93c4cc6b9b9069e4337b6e33b",
                "alphaMass": 25092
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/9x16-duration-900-frame-899.png",
                "sha256": "00bbfa9bec001a30e77197b2a81b7e9c51b865f93c4cc6b9b9069e4337b6e33b",
                "alphaMass": 25092
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 16.7021484375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/1x1-duration-90-frame-10.png",
                "sha256": "942ea083ed5ae4089f6145cddd35808d024a00b4ea08254b8c60b974091e3338",
                "alphaMass": 6119
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/1x1-duration-90-frame-89.png",
                "sha256": "de24e054e38bbcce58912d838de6a61963034a8285f04aafacaf51a2504fa2ca",
                "alphaMass": 20260
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/1x1-duration-90-frame-79.png",
                "sha256": "de24e054e38bbcce58912d838de6a61963034a8285f04aafacaf51a2504fa2ca",
                "alphaMass": 20260
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 16.771158854166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/1x1-duration-900-frame-15.png",
                "sha256": "ec7e3de5858a302eea3f112e8e6b2c9c42495a597a9baae3002c63b0cc573df1",
                "alphaMass": 6258
              },
              {
                "frame": 105,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/1x1-duration-900-frame-105.png",
                "sha256": "de24e054e38bbcce58912d838de6a61963034a8285f04aafacaf51a2504fa2ca",
                "alphaMass": 20260
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/1x1-duration-900-frame-792.png",
                "sha256": "de24e054e38bbcce58912d838de6a61963034a8285f04aafacaf51a2504fa2ca",
                "alphaMass": 20260
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-cap-emphasis/1x1-duration-900-frame-899.png",
                "sha256": "de24e054e38bbcce58912d838de6a61963034a8285f04aafacaf51a2504fa2ca",
                "alphaMass": 20260
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
        "note": "A caption sets a serif keyword in warm peach on a neutral night backdrop; no purple sky."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 43,
        "compared": 43,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "8fc08f3d4fedd234e1f04cbdfceecf6ebf26c7c1e4bbde4ebb2edcb1e16d96d6",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-emphasis/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-emphasis/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-emphasis/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 105,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "dbdc53d1d194eca73047edd7b299992904e2d7a8ecb3cf1035362cac038336c2",
        "loop": "d9257507bb3e7f882d2ba564a3ba63ebb757bd6dd5dc3913aa3e142d934fefd8",
        "detail": "cd5b700a086242e1ca82a84e691f676d966ad95438393cf35a4a6ec8815213d8"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-emphasis/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-emphasis/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-emphasis/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 105,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7be66eae09840321389d62260676ca4e31673b20af2dea820c1a276e2d1a5639",
        "loop": "f8d1b733c6fae456ec2c21a0aca45d1a91060c887bec4b3d5724f185dd82752a",
        "detail": "433d1ce87504d7b5089937c48ca7826057be02d7d090d5bee8bf3559c2f8114e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-emphasis/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-emphasis/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-emphasis/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 105,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2effe819d82c74241a0706675b1a3dfa536ec2fc98e841e5fa015ab8c3c4bd2e",
        "loop": "02111ac75d60f832ea70bb8c1d350ed8dfdc6219c0d22040ab5b050399b86c48",
        "detail": "d6c43609ed70bb10e8b8c4f116eb448a03a3797fe60ba51573fe059ae003cd17"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/8fc08f3d4fedd234e1f04cbdfceecf6ebf26c7c1e4bbde4ebb2edcb1e16d96d6/index.mjs",
    "sha256": "8fc08f3d4fedd234e1f04cbdfceecf6ebf26c7c1e4bbde4ebb2edcb1e16d96d6",
    "bytes": 179687,
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
      "overflow": true,
      "transparent": true
    },
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
    }
  },
  "intake": {
    "at": "2026-10-09T03:42:36.774Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
