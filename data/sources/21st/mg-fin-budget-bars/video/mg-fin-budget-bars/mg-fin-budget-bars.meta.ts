// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/motion-gallery",
  "job": "data",
  "language": "neo-brutal",
  "mechanic": [
    "category-bars-fill-to-limit"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "data",
    "category-bars-fill-to-limit",
    "fintech",
    "budget",
    "spending",
    "bars"
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
      "in": 102,
      "out": 0
    },
    "markers": {
      "settled": 102
    },
    "beats": [
      0,
      26,
      51,
      77,
      102
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
      "maxChars": 20,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 24,
      "role": "headline"
    },
    {
      "key": "value",
      "type": "text",
      "maxChars": 8,
      "role": "value"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 34,
      "role": "caption"
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
      "target": "category-bars-fill-to-limit",
      "prop": "transform",
      "from": "enter",
      "settledBy": 102,
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
    "ink": "#141210",
    "accent": "#FF6B57",
    "secondary": "#7DD9A8",
    "paper": "#FFE45C",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "halcy budgets",
    "headline": "Know where it goes.",
    "value": "$204",
    "caption": "left to spend · 18 days to go"
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
      "max": 20,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 24,
      "role": "headline"
    },
    {
      "key": "value",
      "label": "Value",
      "type": "text",
      "max": 8,
      "role": "value"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 34,
      "role": "caption"
    }
  ],
  "name": "Budget Category Bars",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fin-budget-bars",
    "bundleSha256": "11339d183c551eac2d224fe73aae0be9e0dcf000ee3fa17e328cd0673784231e",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:19:18.196Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/16x9-paper.png",
        "sha256": "ab32412c25ea60575955b2dca236a0ecc17cc6470a95e9570c81109d4a723d1d"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/16x9-night.png",
        "sha256": "7dda318478089afd4873829daff79cffe89d6d98e0a55460699aba569bba2d2e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/16x9-color.png",
        "sha256": "d825a56728c9be1090c2760806d3708115a67abf2e5ac38c3e8cb05c2bf7d246"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/9x16-paper.png",
        "sha256": "e48cdb8e26444cd6ce33d6004ffa0a2d63915ec53932cb0b1e5f717568496bbd"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/9x16-night.png",
        "sha256": "4928e5924a1f983892b2bf944346c6c63c6af4fee8b3d5a5d993a8512ab2f8e9"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/9x16-color.png",
        "sha256": "8ffdd359d74599f6a2acbf4f1f691d393d4cbb5ca75cbb60789a9a29f81750a6"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/1x1-paper.png",
        "sha256": "bc304f018d07ef62b51261f5c6359ba337e17da7699ab86a4a010b027dbcbd00"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/1x1-night.png",
        "sha256": "f4b12c3cf75ee07fa104e8bbc153b74619a7f6901853f81507cbcd22557224ab"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/1x1-color.png",
        "sha256": "36dec739ce0c74923f45899cdd580604eee3d390e3defb61fb3c0c8c2b54f928"
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
          "mg-fin-budget-bars--16x9",
          "mg-fin-budget-bars--9x16",
          "mg-fin-budget-bars--1x1"
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
            "paperNight": 80.34988064236111,
            "paperColor": 26.033827039930557,
            "region": {
              "left": 108,
              "top": 87,
              "width": 1762,
              "height": 929
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 89.78076171875,
            "paperColor": 33.65882703993056,
            "region": {
              "left": 40,
              "top": 144,
              "width": 1000,
              "height": 1656
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 62.82866753472222,
            "paperColor": 23.246175130208332,
            "region": {
              "left": 40,
              "top": 65,
              "width": 1015,
              "height": 1012
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
            "occupancy": 1.1187629147595255,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1187629147595255,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1143183401832957,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1318184681279921,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1318184681279921,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1318184681279921,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.248074389792497,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.248074389792497,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.248074389792497,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 10.758138020833334,
        "frames": [
          15,
          102,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 11.15896267361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/16x9-duration-90-frame-10.png",
                "sha256": "90d8c2aa65c08d98db5c5ed4bb49ca6b6d225f3532cbbb8bceaa8ef9b3601125",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/16x9-duration-90-frame-89.png",
                "sha256": "a9ac6662d2e245564b2efb74b651611c5d4b3aa281c2b64f84070b28f8d5fa18",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/16x9-duration-90-frame-79.png",
                "sha256": "a9ac6662d2e245564b2efb74b651611c5d4b3aa281c2b64f84070b28f8d5fa18",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 10.758138020833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/16x9-duration-900-frame-15.png",
                "sha256": "4f9298955caa63f650f89aa72bf060045df5a455d8cde11faa721714fe90f287",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/16x9-duration-900-frame-102.png",
                "sha256": "a9ac6662d2e245564b2efb74b651611c5d4b3aa281c2b64f84070b28f8d5fa18",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/16x9-duration-900-frame-792.png",
                "sha256": "a9ac6662d2e245564b2efb74b651611c5d4b3aa281c2b64f84070b28f8d5fa18",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/16x9-duration-900-frame-899.png",
                "sha256": "a9ac6662d2e245564b2efb74b651611c5d4b3aa281c2b64f84070b28f8d5fa18",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 11.21701388888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/9x16-duration-90-frame-10.png",
                "sha256": "b1546de27472dad560fe292a8fdb03adfd4e71aaa41138cc1716d37c33fcf10d",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/9x16-duration-90-frame-89.png",
                "sha256": "15f2fc1147718ba76893b91d1addfbeffecc7377c9969a818571a794121e0eeb",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/9x16-duration-90-frame-79.png",
                "sha256": "15f2fc1147718ba76893b91d1addfbeffecc7377c9969a818571a794121e0eeb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 10.873697916666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/9x16-duration-900-frame-15.png",
                "sha256": "374a14c954e1e0785f41bbbab15f55afc4a42b12725e52ead8b786c5a5fcab52",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/9x16-duration-900-frame-102.png",
                "sha256": "15f2fc1147718ba76893b91d1addfbeffecc7377c9969a818571a794121e0eeb",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/9x16-duration-900-frame-792.png",
                "sha256": "15f2fc1147718ba76893b91d1addfbeffecc7377c9969a818571a794121e0eeb",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/9x16-duration-900-frame-899.png",
                "sha256": "15f2fc1147718ba76893b91d1addfbeffecc7377c9969a818571a794121e0eeb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 7.477430555555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/1x1-duration-90-frame-10.png",
                "sha256": "3ee73160deff72d0d8aa73cc9b79701953690e9ab89d4d7d0a62ff93a468ec1a",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/1x1-duration-90-frame-89.png",
                "sha256": "c9db524012ad588d354602f03adae62de671a048f7dba408194cf6c582a0b056",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/1x1-duration-90-frame-79.png",
                "sha256": "c9db524012ad588d354602f03adae62de671a048f7dba408194cf6c582a0b056",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 7.147026909722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/1x1-duration-900-frame-15.png",
                "sha256": "d6c83d57306326e7da3db357773a7d37a8705e770817c2054e1e89fbca4963ed",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/1x1-duration-900-frame-102.png",
                "sha256": "c9db524012ad588d354602f03adae62de671a048f7dba408194cf6c582a0b056",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/1x1-duration-900-frame-792.png",
                "sha256": "c9db524012ad588d354602f03adae62de671a048f7dba408194cf6c582a0b056",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-budget-bars/1x1-duration-900-frame-899.png",
                "sha256": "c9db524012ad588d354602f03adae62de671a048f7dba408194cf6c582a0b056",
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
        "note": "Budget category bars fill against limits with an over-budget nudge; rebrands distinct."
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
      "bundleSha256": "11339d183c551eac2d224fe73aae0be9e0dcf000ee3fa17e328cd0673784231e",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.077Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-budget-bars/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-budget-bars/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-budget-bars/16x9/detail.mp4",
      "bg": "#ffe45c",
      "posterFrame": 102,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8ab59e538f52ed8203beb9b76f7bb7a987918e1b69cfcb638ac4712c48a477a7",
        "loop": "ebadf4cad478ad72f9569de735ae3558d0e0eba587bf1ade23c2563d79e6387b",
        "detail": "0b7daf80fd8e5b4f1face1b2833f223cf9fdade64fbb2c7770d22e9749a2186d"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-budget-bars/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-budget-bars/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-budget-bars/9x16/detail.mp4",
      "bg": "#ffe45c",
      "posterFrame": 102,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "fdc3757d87bf73d74653669a093ed37bff76fa9e40a78167eed29bde3085231c",
        "loop": "a083ac5c821135205647583238987c9f50e3db9430e4f543cce526909fa9a282",
        "detail": "29285e0c1782fa550ae92a87fb870acf88f9bd5109d5eb6672ca004aba311e9b"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-budget-bars/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-budget-bars/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-budget-bars/1x1/detail.mp4",
      "bg": "#ffe45c",
      "posterFrame": 102,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "445c144b189804ae023346c7202ec7f160b94614bf47594610ad65904a23b8e8",
        "loop": "896e4b35a48decd3b9b4fc72069621beb95a7fa67b1f61c2e1f4b1819ceec9cd",
        "detail": "140b3c17d13bdab1a86e9edd81d63686a325d59be18aceb914eee2014a7c9f5e"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/11339d183c551eac2d224fe73aae0be9e0dcf000ee3fa17e328cd0673784231e/index.mjs",
    "sha256": "11339d183c551eac2d224fe73aae0be9e0dcf000ee3fa17e328cd0673784231e",
    "bytes": 271656,
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
    "at": "2026-10-09T07:07:08.264Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
