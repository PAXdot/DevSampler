// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "word-pop-replace"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "word-pop-replace",
    "captions",
    "shorts",
    "word-by-word",
    "vertical"
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
      "in": 114,
      "out": 0
    },
    "markers": {
      "settled": 114
    },
    "beats": [
      0,
      29,
      57,
      86,
      114
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
      "key": "lead",
      "type": "text",
      "maxChars": 44,
      "role": "caption"
    },
    {
      "key": "punch",
      "type": "text",
      "maxChars": 16,
      "role": "headline"
    },
    {
      "key": "handle",
      "type": "text",
      "maxChars": 20,
      "role": "label"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 24,
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
      "target": "word-pop-replace",
      "prop": "transform",
      "from": "enter",
      "settledBy": 114,
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
    "accent": "#FFE14A",
    "secondary": "#FF4FA3",
    "paper": "#050608",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": false,
    "lead": "Meet Lumen. Your docs, your code, your team,",
    "punch": "one place.",
    "handle": "@lumen.app",
    "cta": "follow for part 2"
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
      "key": "lead",
      "label": "Lead",
      "type": "text",
      "max": 44,
      "role": "caption"
    },
    {
      "key": "punch",
      "label": "Punch",
      "type": "text",
      "max": 16,
      "role": "headline"
    },
    {
      "key": "handle",
      "label": "Handle",
      "type": "text",
      "max": 20,
      "role": "label"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 24,
      "role": "cta"
    }
  ],
  "name": "Word Pop Captions",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-cap-word-pop",
    "bundleSha256": "879ca25a2a9f753bb37f4d9ab3196cb3606a184cbbc3c5de3198aeb4f288dae3",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:40:51.784Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/16x9-paper.png",
        "sha256": "4ec5f815b60ffe6f7cc730050d43c7dd3736669b1e88363bc51c6380372ec85c"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/16x9-night.png",
        "sha256": "4bfa2a02e9b7a5303a51bc58d1a7292c8db39a5b5effcb48a932f5eba8229245"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/16x9-color.png",
        "sha256": "1d5d305f1ddf0187eced311a943039c2b0eb0a5cfdb41c6498582ec0ab905df6"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/9x16-paper.png",
        "sha256": "2cb8f99350980e7bdbd00f75f434041138bc688eec8bcf7a68700b1c8411bfab"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/9x16-night.png",
        "sha256": "b29e89343819ff9379a812a77076e6882cff791a289b8966eeb19ea3d7eda214"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/9x16-color.png",
        "sha256": "8a428f37221695f775364ed268fb9b2150b09bc05d306598a5ac7d6b0881ce1d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/1x1-paper.png",
        "sha256": "87e03c080c39d67423e17bb3e9346f417f76c62d13e80567bee94a32515de023"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/1x1-night.png",
        "sha256": "5cd93b51ed089ffda3accf8fd512a795dc7443fa891a3211f234f99053a9a3f7"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/1x1-color.png",
        "sha256": "e03664a5e3cb97dad6fcbf231f7149b3e15eac7352bafff4f5c775290a7fd383"
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
          "mg-cap-word-pop--16x9",
          "mg-cap-word-pop--9x16",
          "mg-cap-word-pop--1x1"
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
            "paperNight": 16.272135416666668,
            "paperColor": 19.777723524305557,
            "region": {
              "left": 512,
              "top": 81,
              "width": 884,
              "height": 918
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 25.01022677951389,
            "paperColor": 21.31049262152778,
            "region": {
              "left": 229,
              "top": 154,
              "width": 597,
              "height": 1612
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 23.18386501736111,
            "paperColor": 23.989583333333332,
            "region": {
              "left": 322,
              "top": 65,
              "width": 422,
              "height": 950
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
            "occupancy": 0.5546402588813304,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5515031533446714,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.40531403533635685,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6577423600613086,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6478266460905351,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6213847421684725,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.48711328381375424,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.476724611884077,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.36706640818192854,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 6.452473958333333,
        "frames": [
          17,
          114,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 6.068250868055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/16x9-duration-90-frame-10.png",
                "sha256": "2f7f848729c7dcf167980d9983ca6c3f60ed7628da1d3610b2dfef053d00ecc7",
                "alphaMass": 21639
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/16x9-duration-90-frame-89.png",
                "sha256": "e4d6733559638d3212a621e57681336bca492d7cc38cfd49c7452bb15d422141",
                "alphaMass": 32451
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/16x9-duration-90-frame-79.png",
                "sha256": "df70d19fd14476f1fcb5e7cb022f645b588c8a678777fd0a8ea3660afc24e2e2",
                "alphaMass": 32451
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 6.452473958333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/16x9-duration-900-frame-17.png",
                "sha256": "a88362da899bb52e662837e71482d8b73238794f818fd7d7a9a98112fd86bc51",
                "alphaMass": 8894
              },
              {
                "frame": 114,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/16x9-duration-900-frame-114.png",
                "sha256": "c753956cde29751d6cc0efd9cb1d051aa8fde4d800b1c9adf0b7538c6aaa4c65",
                "alphaMass": 32451
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/16x9-duration-900-frame-792.png",
                "sha256": "6672b9fa8f22afe61a08897eb21be11a2256cc8f8c2ffb2f090ec423f9d9bff7",
                "alphaMass": 32451
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/16x9-duration-900-frame-899.png",
                "sha256": "01f36f198f53b6a36d8daa75b43e0d495b65cc72eacd7b779a8cc874bdcbe997",
                "alphaMass": 32451
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 12.4326171875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/9x16-duration-90-frame-10.png",
                "sha256": "ec9fa2886b7f5de8e86540e8011e5a4a89b31c27d4b8ce095c1f8632d2268ce3",
                "alphaMass": 42326
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/9x16-duration-90-frame-89.png",
                "sha256": "f11c4c923ed7582cf19a0dd1351fe8815027a2cec10db9f5d3e9b314b936b07a",
                "alphaMass": 58019
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/9x16-duration-90-frame-79.png",
                "sha256": "e71a9c21573b0b5a266463b496240992dcc73f999d0cb99cc5873ee2507e12a4",
                "alphaMass": 58019
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 10.72536892361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/9x16-duration-900-frame-17.png",
                "sha256": "52eabc2ac63c3354adf945a93a8669344cea097ff39a29f090070158bf425442",
                "alphaMass": 29534
              },
              {
                "frame": 114,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/9x16-duration-900-frame-114.png",
                "sha256": "42c82d452a0c2fcf49a48b6118dcb71c28a097a0b68f787b10f24f52f937da78",
                "alphaMass": 58019
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/9x16-duration-900-frame-792.png",
                "sha256": "90f08712645be1e749f95a5d18d9589a8d93c10ed10f2e9a2e2cd0f02861a80c",
                "alphaMass": 58019
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/9x16-duration-900-frame-899.png",
                "sha256": "3efc8aa1feca55eeb3abf2bc971ff18c26a116329ba1abe912780b20e9b1a9ad",
                "alphaMass": 58019
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 9.833658854166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/1x1-duration-90-frame-10.png",
                "sha256": "dfbe10a39fd51a336fd27111d135590b817bcd22b92390907cb360ae8834ecf2",
                "alphaMass": 28248
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/1x1-duration-90-frame-89.png",
                "sha256": "eaf27f833a70ae2f48a4d9c6ee371de44ab4314ab3d8f22955c9bb1ef97323fa",
                "alphaMass": 39866
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/1x1-duration-90-frame-79.png",
                "sha256": "eaf27f833a70ae2f48a4d9c6ee371de44ab4314ab3d8f22955c9bb1ef97323fa",
                "alphaMass": 39866
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 8.650933159722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/1x1-duration-900-frame-17.png",
                "sha256": "bb4272d82a28c2c35b889d12bacf93553bd6023c70851abccbec8454b1d899d3",
                "alphaMass": 14479
              },
              {
                "frame": 114,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/1x1-duration-900-frame-114.png",
                "sha256": "eaf27f833a70ae2f48a4d9c6ee371de44ab4314ab3d8f22955c9bb1ef97323fa",
                "alphaMass": 39866
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/1x1-duration-900-frame-792.png",
                "sha256": "eaf27f833a70ae2f48a4d9c6ee371de44ab4314ab3d8f22955c9bb1ef97323fa",
                "alphaMass": 39866
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-word-pop/1x1-duration-900-frame-899.png",
                "sha256": "eaf27f833a70ae2f48a4d9c6ee371de44ab4314ab3d8f22955c9bb1ef97323fa",
                "alphaMass": 39866
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
        "note": "Word-pop captions with an outlined keyword and a follow pill; transparent layer, rebrands distinct."
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
      "bundleSha256": "879ca25a2a9f753bb37f4d9ab3196cb3606a184cbbc3c5de3198aeb4f288dae3",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-word-pop/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-word-pop/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-word-pop/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 114,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "59319c4a3f24a3aa862def9081d8ec1d3b5b757097e76f8bfcc6ed07bd43bda6",
        "loop": "9ae15ec2b3024f422599b14c6b0885c355e01a309f29c52a316fcdb9497a8093",
        "detail": "3d65433e5653e80efcb1843fcfcb25a595f3c45e3eb516bb0ecf4b90c1c7e212"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-word-pop/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-word-pop/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-word-pop/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 114,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e67f7d5ff61b98e8c96fb225fa12e74186f378996ce9cd3753299994ad156726",
        "loop": "ad61ab1ad728fd02159b0038f00489ab399f518c096df608574c161c305f9db7",
        "detail": "bb13d701a3ef260fc57f9657a215dadedf6a10af3e62c3e6101df93267954b26"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-word-pop/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-word-pop/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-word-pop/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 114,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "54e9e90207ebc361b181d75074ab3e6196766c2c76c40723e0bdb6cd56427b52",
        "loop": "7b70471ca77ec9b3f504d83cda3a8e27648fae921e16dee0716bcb739b5bf5c5",
        "detail": "3bde6956de735c4292f6c73a285d060a143b06d4a44e704ab3526d9c05d54215"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/879ca25a2a9f753bb37f4d9ab3196cb3606a184cbbc3c5de3198aeb4f288dae3/index.mjs",
    "sha256": "879ca25a2a9f753bb37f4d9ab3196cb3606a184cbbc3c5de3198aeb4f288dae3",
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
    "at": "2026-10-09T04:22:13.134Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
