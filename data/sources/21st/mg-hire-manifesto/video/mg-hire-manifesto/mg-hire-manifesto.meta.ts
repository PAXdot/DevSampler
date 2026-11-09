// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "values-strike-and-rewrite-scroll"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "values-strike-and-rewrite-scroll",
    "hiring",
    "values",
    "manifesto",
    "culture"
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
      "in": 129,
      "out": 0
    },
    "markers": {
      "settled": 129
    },
    "beats": [
      0,
      32,
      65,
      97,
      129
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
      "maxChars": 24,
      "role": "kicker"
    },
    {
      "key": "old",
      "type": "text",
      "maxChars": 10,
      "role": "headline"
    },
    {
      "key": "new",
      "type": "text",
      "maxChars": 9,
      "role": "headline"
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
      "target": "values-strike-and-rewrite-scroll",
      "prop": "transform",
      "from": "enter",
      "settledBy": 129,
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
    "ink": "#1E0E08",
    "accent": "#FFF4E8",
    "secondary": "#FF8A63",
    "paper": "#FF5B2E",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "What we believe",
    "old": "Busy.",
    "new": "Focused.",
    "cta": "Read the full memo"
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
      "max": 24,
      "role": "kicker"
    },
    {
      "key": "old",
      "label": "Old",
      "type": "text",
      "max": 10,
      "role": "headline"
    },
    {
      "key": "new",
      "label": "New",
      "type": "text",
      "max": 9,
      "role": "headline"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 22,
      "role": "cta"
    }
  ],
  "name": "Values Manifesto Strike",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-hire-manifesto",
    "bundleSha256": "9148ebbd36dae2753c8c43638ec4d86d254a8995c648497ecdf7582a05e423fd",
    "sourceSnapshot": {
      "sha256": "b342da95c90071ffb99c060c999d9fca49ed6722762d7db99795613749872dfe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T07:48:03.444Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/16x9-paper.png",
        "sha256": "58d4edbcd7a16617c6dffa938b2aae06f613d44e2ba9d615dc188dd7b5bc11da"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/16x9-night.png",
        "sha256": "4261bf1c61279872291d75e627262f8249387d407e13f07f17e06ac9a507c39f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/16x9-color.png",
        "sha256": "8ab8f4937d6a793844679ff684422281d487327dd5223a863197defeb8e8b3e6"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/9x16-paper.png",
        "sha256": "ab215e973baef3e528042863ea1f70c9fefda61af5cc3a017ce8f72007f09325"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/9x16-night.png",
        "sha256": "db0ceaab87ace2dc38bedcd83f589762ed12fb6775f6488300def07308a8322c"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/9x16-color.png",
        "sha256": "9fd8a742de10846aef715be14b28cd7bc32a8d0428ee7c077e5c483c17066ff9"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/1x1-paper.png",
        "sha256": "4ec4b3a71491632ad21be189eb446876c88ce608bf07cf572f1d24f80824f466"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/1x1-night.png",
        "sha256": "1e2e505726ae7713c09aeb6a2dfbf488c862c8e754c44e991e0c69a3eb8e3f7e"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/1x1-color.png",
        "sha256": "27a5cfd5f9a1318c42c4976df704bd8bbe782eb2a1fb61ff59e53be3726cc546"
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
          "mg-hire-manifesto--16x9",
          "mg-hire-manifesto--9x16",
          "mg-hire-manifesto--1x1"
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
            "paperNight": 18.85687934027778,
            "paperColor": 9.130316840277779,
            "region": {
              "left": 115,
              "top": 109,
              "width": 1690,
              "height": 883
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 36.351589626736114,
            "paperColor": 11.003607855902779,
            "region": {
              "left": 86,
              "top": 146,
              "width": 908,
              "height": 1659
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 18.365397135416668,
            "paperColor": 5.937934027777778,
            "region": {
              "left": 76,
              "top": 81,
              "width": 928,
              "height": 923
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
            "occupancy": 1.0199147013486467,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0199147013486467,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0187596450617287,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0295529284244564,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0295529284244564,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0289323419697098,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0407432291618066,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0407432291618066,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0396156633663984,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.4091796875,
        "frames": [
          19,
          129,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 3.291775173611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/16x9-duration-90-frame-10.png",
                "sha256": "6424a64a3f545993d302f353865591bac5a2a05141381440d0cca783c79dc5c7",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/16x9-duration-90-frame-89.png",
                "sha256": "a9e08702c29ff6da19842b2834c0fbc7f128ede57b5b6ac30d64d673605d834e",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/16x9-duration-90-frame-79.png",
                "sha256": "17fd272ff6708a14a1a76e92ec5a3304c54ba4031a3db75327216ab3c9144c27",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 3.4091796875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/16x9-duration-900-frame-19.png",
                "sha256": "d7564429210db57b167d4bce578b2f687e47788a7bff5f89ec6f38a9771e088e",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/16x9-duration-900-frame-129.png",
                "sha256": "8a34b114a9deabe89b94c23d412a67a9a56210b731a79b862a14b7be75292f87",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/16x9-duration-900-frame-792.png",
                "sha256": "41e03a352027ede8d628f993c272e87476878e6bf43929b2bbda05108c2c579d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/16x9-duration-900-frame-899.png",
                "sha256": "a2fd247b7204946f1203a5ccb452db46d2117e5a1def653334b353bfd302a7ad",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 2.9781901041666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/9x16-duration-90-frame-10.png",
                "sha256": "dc6792e41a8aeb2d69960e051018ad1afd964cf4fa02f405b59b990eb2521e2d",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/9x16-duration-90-frame-89.png",
                "sha256": "586a8cbf559390d13b0a34dc34b1e02048ab4d714bcc959cecd2c6f4daa7c3bc",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/9x16-duration-90-frame-79.png",
                "sha256": "2f9c141093342771246efbbb651f5780f143d871f893df95c48ffca0a205f11e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 2.923611111111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/9x16-duration-900-frame-19.png",
                "sha256": "95c4d6294cc38beb983c96554abc2497da4cdbf3a7a8e58101078f429c391d13",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/9x16-duration-900-frame-129.png",
                "sha256": "fe735296038bee4be72ca312b773456470f98c9f8f4407f737cd0038d15e0962",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/9x16-duration-900-frame-792.png",
                "sha256": "12befb0338194a470e38c92bc5589c95039326e2a78e91da6fd70a727480f484",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/9x16-duration-900-frame-899.png",
                "sha256": "21385b86d4421cf1a60ad9d651310259fa085f502a0ccce17d4caf33f198bd4a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 1.9629991319444444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/1x1-duration-90-frame-10.png",
                "sha256": "969ac7a10e6141646f657fb8784aa4752c78640460600dcc136e94e6a37b698d",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/1x1-duration-90-frame-89.png",
                "sha256": "8dfd85b6acd8d6fa0337caf6a845379a189851ea535fa187b462e02395562854",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/1x1-duration-90-frame-79.png",
                "sha256": "8dfd85b6acd8d6fa0337caf6a845379a189851ea535fa187b462e02395562854",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 1.8336588541666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/1x1-duration-900-frame-19.png",
                "sha256": "67d51ec18a5416b2d02edafc6b388d2e9e6e25f6fd71b242a0a91ee478d42aee",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/1x1-duration-900-frame-129.png",
                "sha256": "8dfd85b6acd8d6fa0337caf6a845379a189851ea535fa187b462e02395562854",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/1x1-duration-900-frame-792.png",
                "sha256": "8dfd85b6acd8d6fa0337caf6a845379a189851ea535fa187b462e02395562854",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-hire-manifesto/1x1-duration-900-frame-899.png",
                "sha256": "8dfd85b6acd8d6fa0337caf6a845379a189851ea535fa187b462e02395562854",
                "alphaMass": 587520
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
        "note": "Values manifesto strikes old words and lands on a serif new one; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 63,
        "compared": 63,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "9148ebbd36dae2753c8c43638ec4d86d254a8995c648497ecdf7582a05e423fd",
      "selectedBy": "serafim (repo owner) on 2026-10-09; visual review by claude",
      "at": "2026-10-09T07:49:52.848Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-manifesto/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-manifesto/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-manifesto/16x9/detail.mp4",
      "bg": "#e55129",
      "posterFrame": 129,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9f5aaf1174e2b26f84bf9fa0bdf47e209955956ef2723090fcb1ae31c872437b",
        "loop": "4d9c505295f71a9a34967c332005af07c547d987e2d36138622d8df8a587ce3d",
        "detail": "72c1a3232a170e01dc7ccb06e87c75ebdeb2e8689f7ea782099f1432e4a5900e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-manifesto/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-manifesto/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-manifesto/9x16/detail.mp4",
      "bg": "#e55129",
      "posterFrame": 129,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "84694eb8e8cde8086b35a322d2a97a593ba5aa4f34edb9af14c8171e4bff071d",
        "loop": "ba6ec5a68959a14173a4928cbee75c9935bb3334ea14f2aef414061b59626166",
        "detail": "d10b2c426e41ea527f9617ae2d61ac55a6e537d28f4bc86cfa77e3a2d98372e3"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hire-manifesto/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hire-manifesto/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hire-manifesto/1x1/detail.mp4",
      "bg": "#e55129",
      "posterFrame": 129,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "38a9fdc71a7bf582a27334bedb7e78e110ab3e99944acb98d4e01fc493469ccf",
        "loop": "f231cb7602470f90139f282b9e497981100cda06275d26230001a836df82b7a4",
        "detail": "e0d16003e03e96c3569c986400878b34e0655b06f504923ed5633acf66a458d2"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/9148ebbd36dae2753c8c43638ec4d86d254a8995c648497ecdf7582a05e423fd/index.mjs",
    "sha256": "9148ebbd36dae2753c8c43638ec4d86d254a8995c648497ecdf7582a05e423fd",
    "bytes": 195564,
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
    "at": "2026-10-09T08:02:38.750Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
