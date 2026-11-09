// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/motion-gallery",
  "job": "data",
  "language": "product-ui",
  "mechanic": [
    "leaderboard-row-overtake"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "data",
    "leaderboard-row-overtake",
    "fitness",
    "leaderboard",
    "challenge"
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
      "in": 96,
      "out": 0
    },
    "markers": {
      "settled": 96
    },
    "beats": [
      0,
      24,
      48,
      72,
      96
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
      "maxChars": 22,
      "role": "kicker"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 18,
      "role": "headline"
    },
    {
      "key": "you",
      "type": "text",
      "maxChars": 20,
      "role": "name"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 22,
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
      "target": "leaderboard-row-overtake",
      "prop": "transform",
      "from": "enter",
      "settledBy": 96,
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
    "ink": "#F3EEFF",
    "accent": "#7B4DFF",
    "secondary": "#FF3DA5",
    "paper": "#0A0712",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "MOVARA ROW CLUB",
    "title": "October 100K",
    "you": "You · Sam Cole",
    "cta": "Join the challenge"
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
      "max": 22,
      "role": "kicker"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 18,
      "role": "headline"
    },
    {
      "key": "you",
      "label": "You",
      "type": "text",
      "max": 20,
      "role": "name"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 22,
      "role": "cta"
    }
  ],
  "name": "Leaderboard Rank Climb",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fit-leaderboard",
    "bundleSha256": "3b8decdb99c7a3aacba8e3960320664ce75a2eed737bce35b437de97a0d2955d",
    "sourceSnapshot": {
      "sha256": "b342da95c90071ffb99c060c999d9fca49ed6722762d7db99795613749872dfe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T07:46:49.195Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/16x9-paper.png",
        "sha256": "74644d829fff6c6b01d67d22487b423a73a43441b2074cdc6942b3570c7fe09c"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/16x9-night.png",
        "sha256": "5bb27a35460c9b743e90b95444d53d38803ed87b1e095ce4d53a1d6de890e533"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/16x9-color.png",
        "sha256": "0202cc2aa8093078b16228cdb7f08ded798d9708717bf0a501c22b3ba9e732dc"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/9x16-paper.png",
        "sha256": "65d8e193b430710f4f5443f11f4e4bc9c258ea94c21f401a1c097207eb66367a"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/9x16-night.png",
        "sha256": "858fb12fd6b2e46959e76fa63142ce002f58980603d7cc554e39242b094c077c"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/9x16-color.png",
        "sha256": "59da38ab66685c2b0eb2c0f71dbfc28d51c0ecaa969523c3b23359ce2a8f5062"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/1x1-paper.png",
        "sha256": "d48f832d552dbf52ce9e816e936be3b1b0b2cbac5d9539479550efecf19cc674"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/1x1-night.png",
        "sha256": "fc291672e4324fe1f9d5e539d8f760e709ae9ce2c9fd8fcac4df0b0fbe06e15f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/1x1-color.png",
        "sha256": "1b522acc75c00816aede11e98090b401600806f89731b0dd71680d9ba10f6956"
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
          "mg-fit-leaderboard--16x9",
          "mg-fit-leaderboard--9x16",
          "mg-fit-leaderboard--1x1"
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
            "paperNight": 75.10690646701389,
            "paperColor": 19.84103732638889,
            "region": {
              "left": 67,
              "top": 122,
              "width": 1775,
              "height": 890
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 73.07845052083333,
            "paperColor": 23.794352213541668,
            "region": {
              "left": 31,
              "top": 111,
              "width": 1031,
              "height": 1770
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 79.62198893229167,
            "paperColor": 20.93438042534722,
            "region": {
              "left": 36,
              "top": 60,
              "width": 1008,
              "height": 1011
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
            "occupancy": 1.0797042421649732,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0797042421649732,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0797042421649732,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2465305936546431,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2458259409730974,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.247235246336189,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2382422104644328,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2382422104644328,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2382422104644328,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 11.936957465277779,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 12.091688368055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/16x9-duration-90-frame-10.png",
                "sha256": "fb4cd52205a747dd5f7f5a40e9a16cf57a22e3bda2a1b68f7542d1ae4d87c62f",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/16x9-duration-90-frame-89.png",
                "sha256": "90b5ace6f4c4b878105830b6d4d150d401373b108487d2f5a7dd57ac893e38a6",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/16x9-duration-90-frame-79.png",
                "sha256": "90b5ace6f4c4b878105830b6d4d150d401373b108487d2f5a7dd57ac893e38a6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 11.936957465277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/16x9-duration-900-frame-14.png",
                "sha256": "afa48a9f53994f5623482a9b4036707212a40dd32018fd16c1bbc4f63931fb7a",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/16x9-duration-900-frame-96.png",
                "sha256": "90b5ace6f4c4b878105830b6d4d150d401373b108487d2f5a7dd57ac893e38a6",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/16x9-duration-900-frame-792.png",
                "sha256": "90b5ace6f4c4b878105830b6d4d150d401373b108487d2f5a7dd57ac893e38a6",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/16x9-duration-900-frame-899.png",
                "sha256": "90b5ace6f4c4b878105830b6d4d150d401373b108487d2f5a7dd57ac893e38a6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 17.616861979166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/9x16-duration-90-frame-10.png",
                "sha256": "0be9bdd36ba67df6daa525a584aee5625b500b883fac96508d24bca982c9216a",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/9x16-duration-90-frame-89.png",
                "sha256": "0e9d9bb07ac9ec1ff90e0cd1c6437ab8d07d2e0916d458e92be8f7785d3575b8",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/9x16-duration-90-frame-79.png",
                "sha256": "0e9d9bb07ac9ec1ff90e0cd1c6437ab8d07d2e0916d458e92be8f7785d3575b8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 17.53569878472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/9x16-duration-900-frame-14.png",
                "sha256": "6f57f4a8ac4470a6078e39f4021306779666427ea4dee132a390f3e0722a1d6f",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/9x16-duration-900-frame-96.png",
                "sha256": "0e9d9bb07ac9ec1ff90e0cd1c6437ab8d07d2e0916d458e92be8f7785d3575b8",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/9x16-duration-900-frame-792.png",
                "sha256": "0e9d9bb07ac9ec1ff90e0cd1c6437ab8d07d2e0916d458e92be8f7785d3575b8",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/9x16-duration-900-frame-899.png",
                "sha256": "0e9d9bb07ac9ec1ff90e0cd1c6437ab8d07d2e0916d458e92be8f7785d3575b8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 15.7294921875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/1x1-duration-90-frame-10.png",
                "sha256": "ff2a7a91397ed2a1129183b091beeb0da63760a6b20206d11036b148d774c490",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/1x1-duration-90-frame-89.png",
                "sha256": "1c9c9cbd07a5cb8cb31f53648205304a1647f950a61dab4d92b10ad529b83957",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/1x1-duration-90-frame-79.png",
                "sha256": "1c9c9cbd07a5cb8cb31f53648205304a1647f950a61dab4d92b10ad529b83957",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 15.6640625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/1x1-duration-900-frame-14.png",
                "sha256": "02fbed1ba60a8b2eb873a8a1fc8364590f8b69350dd61fc0194e2b00ebb39707",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/1x1-duration-900-frame-96.png",
                "sha256": "1c9c9cbd07a5cb8cb31f53648205304a1647f950a61dab4d92b10ad529b83957",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/1x1-duration-900-frame-792.png",
                "sha256": "1c9c9cbd07a5cb8cb31f53648205304a1647f950a61dab4d92b10ad529b83957",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-leaderboard/1x1-duration-900-frame-899.png",
                "sha256": "1c9c9cbd07a5cb8cb31f53648205304a1647f950a61dab4d92b10ad529b83957",
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
        "note": "Challenge leaderboard where your row overtakes two others beside the goal headline; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 28,
        "compared": 28,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "3b8decdb99c7a3aacba8e3960320664ce75a2eed737bce35b437de97a0d2955d",
      "selectedBy": "serafim (repo owner) on 2026-10-09; visual review by claude",
      "at": "2026-10-09T07:49:52.846Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-leaderboard/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-leaderboard/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-leaderboard/16x9/detail.mp4",
      "bg": "#1b1237",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5500fae788a9d8a128fc91183a04ad46b8cd3f22468ff4a6d1dc1ff200cfa944",
        "loop": "ec2ce8cfb9473c019654388b91565d58071e8e525429fd4972eb93f46be8397e",
        "detail": "428107ddc1f3a5ca6af5296f4a2b4331662dee41b7ab96adecdccc939d8f2164"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-leaderboard/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-leaderboard/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-leaderboard/9x16/detail.mp4",
      "bg": "#140d26",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "07b3b5282e42d4315a08455c5c0f147feb0115e970d24744876890ebb1e37af4",
        "loop": "58a35c668b5f94a7ff161e5476377be94f74b89eda7f01601cc2ce3627b5bdea",
        "detail": "eca23bea463280cea4ab8bcbafcd293c91949fb34e45f5568fdc417c1441cc60"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-leaderboard/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-leaderboard/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-leaderboard/1x1/detail.mp4",
      "bg": "#140d26",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2e1971ec26b5b994b07b75f0b1373b5354188199338ae8c9b3b603d946fb4929",
        "loop": "15a78dca8c98c24d1b6c36643c33f524530e3cc954c572bcb83f735bd1882130",
        "detail": "365cc488f6ff07e000c1276d9097b788f21f3e668ff154c1ca084dc744e70ec4"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/3b8decdb99c7a3aacba8e3960320664ce75a2eed737bce35b437de97a0d2955d/index.mjs",
    "sha256": "3b8decdb99c7a3aacba8e3960320664ce75a2eed737bce35b437de97a0d2955d",
    "bytes": 172096,
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
    "at": "2026-10-09T08:01:25.493Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
