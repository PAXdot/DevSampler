// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "process/motion-gallery",
  "job": "process",
  "language": "editorial",
  "mechanic": [
    "floor-plan-wall-draw"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "process",
    "floor-plan-wall-draw",
    "real-estate",
    "floor-plan",
    "blueprint"
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
      "key": "brand",
      "type": "text",
      "maxChars": 22,
      "role": "label"
    },
    {
      "key": "unit",
      "type": "text",
      "maxChars": 12,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 30,
      "role": "body"
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
      "target": "floor-plan-wall-draw",
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
    "ink": "#EAF2FF",
    "accent": "#8CCBFF",
    "secondary": "#A9C8F0",
    "paper": "#0F3C6E",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "brand": "Halden Estates",
    "unit": "Unit 4B",
    "sub": "Two bedrooms, west light"
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
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 22,
      "role": "label"
    },
    {
      "key": "unit",
      "label": "Unit",
      "type": "text",
      "max": 12,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 30,
      "role": "body"
    }
  ],
  "name": "Blueprint Floor Plan",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-realty-blueprint",
    "bundleSha256": "9a6cca59b1a11d8e6cac6182490ecfe36a3ab2afb7e1d0e2c136bb5c558f123d",
    "sourceSnapshot": {
      "sha256": "b342da95c90071ffb99c060c999d9fca49ed6722762d7db99795613749872dfe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T07:48:19.422Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/16x9-paper.png",
        "sha256": "908b024059b821263e27523acba848728a910b48c375f2f41b8e7be9c1d2ce57"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/16x9-night.png",
        "sha256": "df4428f75470db01b8d928fd62c1dca21e11b125e86eaf454bce91ee40621671"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/16x9-color.png",
        "sha256": "a6c1fdd25a748b32e8402cec423b0ceea2be7d738362fc05c76c5f22f65c48fe"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/9x16-paper.png",
        "sha256": "fa71592b60d75eba11296b5a4ac19093691c7e53045acc50be99c154d6461514"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/9x16-night.png",
        "sha256": "e17cc40d0dd359f9b809cae5a13ddc8b40d9d32580ff799ceb0d28e0dbbc8b38"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/9x16-color.png",
        "sha256": "daa85089aeaec514aaecd82e276bc95618b94fcba34752fc0ca2b5cec1be7a47"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/1x1-paper.png",
        "sha256": "e2420cac3e7014ca6297a1603cffa2be3a4496b67fe7c673f9c167d2a4df45a1"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/1x1-night.png",
        "sha256": "21d85c1a39dd37260c3bf41f1a4ca409b084ab959cef0235251726b330c681d4"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/1x1-color.png",
        "sha256": "1d18a242bde69bda92dfdaa8d0c9081c1c04674a38a295367514afa9dd660c5c"
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
          "mg-realty-blueprint--16x9",
          "mg-realty-blueprint--9x16",
          "mg-realty-blueprint--1x1"
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
            "paperNight": 90.40177408854167,
            "paperColor": 14.048665364583334,
            "region": {
              "left": 85,
              "top": 106,
              "width": 1701,
              "height": 865
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 91.04728190104167,
            "paperColor": 17.744710286458332,
            "region": {
              "left": 61,
              "top": 144,
              "width": 940,
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
            "paperNight": 69.16197374131944,
            "paperColor": 11.49484592013889,
            "region": {
              "left": 59,
              "top": 69,
              "width": 945,
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
            "occupancy": 1.0050356626704182,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0027118807914115,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.003301711309524,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0621357676944236,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0647028632054676,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0645518173833322,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.09424428207497,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0976853018299229,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.097699882422105,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.40310329861111,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 8.419921875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/16x9-duration-90-frame-10.png",
                "sha256": "1c7349043379b4c495b1cc510ad1289f654c6e35e5079b64af7023e8ac53132c",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/16x9-duration-90-frame-89.png",
                "sha256": "83c3540a8817a7899f923c9c254eb772178f47bf68d646fde07fe7f55e034cab",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/16x9-duration-90-frame-79.png",
                "sha256": "83c3540a8817a7899f923c9c254eb772178f47bf68d646fde07fe7f55e034cab",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 8.40310329861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/16x9-duration-900-frame-14.png",
                "sha256": "e35d455886568dc2ce6c722ec75ef9acbf69542464dc127b5746ee869ffe9a97",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/16x9-duration-900-frame-96.png",
                "sha256": "83c3540a8817a7899f923c9c254eb772178f47bf68d646fde07fe7f55e034cab",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/16x9-duration-900-frame-792.png",
                "sha256": "83c3540a8817a7899f923c9c254eb772178f47bf68d646fde07fe7f55e034cab",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/16x9-duration-900-frame-899.png",
                "sha256": "83c3540a8817a7899f923c9c254eb772178f47bf68d646fde07fe7f55e034cab",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 9.904947916666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/9x16-duration-90-frame-10.png",
                "sha256": "9caabd23adef31befec255d4ea66717442e1c0301c33c21b3530e62a62d38e68",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/9x16-duration-90-frame-89.png",
                "sha256": "3e839b8f12971ba459cb97b397e6946484ced57b3c6447deeb49fd262ed3cf03",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/9x16-duration-90-frame-79.png",
                "sha256": "a1caf9d0e3b78fdcc8dc4a30213d10c922f963867a6c114a478783becfd41b7d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 9.934895833333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/9x16-duration-900-frame-14.png",
                "sha256": "0a201cd4588560ee71feb7f89cd2bad6afd10a8178a5c4757fb6659250a85b63",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/9x16-duration-900-frame-96.png",
                "sha256": "48e6521174bcac2d8733dd652ecb80575a4ef31c2c4943ebeae72ca655af170a",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/9x16-duration-900-frame-792.png",
                "sha256": "70b612e5a20b4838975bf4a9fbe0ca51822ab6a38191918e165e9786d83d512e",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/9x16-duration-900-frame-899.png",
                "sha256": "cdf0e2b55b320a7f52895d795f94f1b43549e4b1a115ee4653da99120b05b6c0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 7.770399305555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/1x1-duration-90-frame-10.png",
                "sha256": "91d933a0e9d1e07b3ff2d559a68ce325f088396e4e2491aac5089d6a14c36c97",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/1x1-duration-90-frame-89.png",
                "sha256": "c034ab67f18ed5eaa9c43c5b3692806c66890859d677b385abbd88f2f823ae0d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/1x1-duration-90-frame-79.png",
                "sha256": "c034ab67f18ed5eaa9c43c5b3692806c66890859d677b385abbd88f2f823ae0d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 7.785807291666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/1x1-duration-900-frame-14.png",
                "sha256": "bea7dd7f5e30c62071989b0dfd3b7b3c505447d7e87d360d575d3daecb9c5176",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/1x1-duration-900-frame-96.png",
                "sha256": "c034ab67f18ed5eaa9c43c5b3692806c66890859d677b385abbd88f2f823ae0d",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/1x1-duration-900-frame-792.png",
                "sha256": "c034ab67f18ed5eaa9c43c5b3692806c66890859d677b385abbd88f2f823ae0d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-realty-blueprint/1x1-duration-900-frame-899.png",
                "sha256": "c034ab67f18ed5eaa9c43c5b3692806c66890859d677b385abbd88f2f823ae0d",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "process",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Blueprint floor plan draws in beside unit specs; rebrands recolor the plan and type."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 21,
        "compared": 21,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "9a6cca59b1a11d8e6cac6182490ecfe36a3ab2afb7e1d0e2c136bb5c558f123d",
      "selectedBy": "serafim (repo owner) on 2026-10-09; visual review by claude",
      "at": "2026-10-09T07:49:52.849Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-blueprint/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-blueprint/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-blueprint/16x9/detail.mp4",
      "bg": "#456487",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5644023011231e0b5d22c5c5c768d70ee4102da255769f501473724bd339ffbc",
        "loop": "8daa60df6f85df5b399a79e84f40f79ff2d31cc1797a896459d4b201cb746ef9",
        "detail": "9b5af269b8b7f0d7f60aecf89425537e8f1b01189f5e0e6487463ddca5b6118e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-blueprint/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-blueprint/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-blueprint/9x16/detail.mp4",
      "bg": "#456487",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5be2627294a3d9a2781ce779371008355352a4be4f933c5a4272c2afc0338d3d",
        "loop": "9e59b3dfb5f29211b8ac5c563de2d686f9423c9be6fa02d1c71ebcb123d739b6",
        "detail": "eb297876c35a6ef6e97bf11df7dc302cd761e255db8dd3da371539aa2e261d68"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-blueprint/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-blueprint/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-blueprint/1x1/detail.mp4",
      "bg": "#456487",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2ea03a9dd478303ef15cab096eabecd8858c26dab4e00c708b7b8ecd16aa82dd",
        "loop": "59e0c2d2ae877c2067ca43e615a8bacccaf2d308eda4d78c7602b004bb3068d5",
        "detail": "e09a445460057a1fe4f90f76825f7c73a3a79711d033fba5d490df86d33f0130"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/9a6cca59b1a11d8e6cac6182490ecfe36a3ab2afb7e1d0e2c136bb5c558f123d/index.mjs",
    "sha256": "9a6cca59b1a11d8e6cac6182490ecfe36a3ab2afb7e1d0e2c136bb5c558f123d",
    "bytes": 180539,
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
    "at": "2026-10-09T08:02:56.886Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
