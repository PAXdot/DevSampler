// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "editorial",
  "mechanic": [
    "pen-strike-then-rewrite"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "pen-strike-then-rewrite",
    "hook",
    "before-after",
    "editorial"
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
      "in": 108,
      "out": 0
    },
    "markers": {
      "settled": 108
    },
    "beats": [
      0,
      27,
      54,
      81,
      108
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
      "key": "old",
      "type": "text",
      "maxChars": 28,
      "role": "headline"
    },
    {
      "key": "new",
      "type": "text",
      "maxChars": 28,
      "role": "headline"
    },
    {
      "key": "note",
      "type": "text",
      "maxChars": 18,
      "role": "caption"
    },
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 22,
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
      "target": "pen-strike-then-rewrite",
      "prop": "transform",
      "from": "enter",
      "settledBy": 108,
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
    "ink": "#1C1A16",
    "accent": "#D2381C",
    "secondary": "#9A917E",
    "paper": "#F1ECE1",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "old": "Copying docs into chat.",
    "new": "Ask your docs instead.",
    "note": "with Lumen",
    "kicker": "Lumen Notes"
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
      "key": "old",
      "label": "Old",
      "type": "text",
      "max": 28,
      "role": "headline"
    },
    {
      "key": "new",
      "label": "New",
      "type": "text",
      "max": 28,
      "role": "headline"
    },
    {
      "key": "note",
      "label": "Note",
      "type": "text",
      "max": 18,
      "role": "caption"
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 22,
      "role": "kicker"
    }
  ],
  "name": "Strike The Old Way",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-hook-strike",
    "bundleSha256": "ff28fd8da3ae60a471552fd50b9c8f9ed706ee13bcec4e9f16830289d365de56",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:42:46.003Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/16x9-paper.png",
        "sha256": "5c212f144ea41fcc4cbe046a371505d1931e6b81bbceb9757cd644ae87b659cd"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/16x9-night.png",
        "sha256": "d38c603f8674f79c679719ab11105253d167724a2464893613407b553f05a0f4"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/16x9-color.png",
        "sha256": "ba031e99398138df977202673c30baa79bb26b7f4fbfe91e92e7923d5519922e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/9x16-paper.png",
        "sha256": "ac1a61364ec7d73c5942c43ce074ef2a44613330f32a0916b36f8a70101b8832"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/9x16-night.png",
        "sha256": "2805e12998845c600be2f847c6432e3182f478443d7164c2ddf0acf981a57e30"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/9x16-color.png",
        "sha256": "1a8099118b149a2298d761acf3db0733d6494166a8e5347a64d038d808abad1b"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/1x1-paper.png",
        "sha256": "eb2f449540b16ce604d3f76e5df23d0dc6da27095994f49001f1aead56425891"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/1x1-night.png",
        "sha256": "ad2d0f085f8311b0608c1a3d9ad3189754f0c4da90252b57814b70ff48df142c"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/1x1-color.png",
        "sha256": "5ad22901a4f90e07b3a35bcbcc2a170759643bf1fc252ba00988244b45603806"
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
          "mg-hook-strike--16x9",
          "mg-hook-strike--9x16",
          "mg-hook-strike--1x1"
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
            "paperNight": 54.676296657986114,
            "paperColor": 17.94113498263889,
            "region": {
              "left": 126,
              "top": 86,
              "width": 1660,
              "height": 923
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 58.58954535590278,
            "paperColor": 20.823106553819443,
            "region": {
              "left": 75,
              "top": 162,
              "width": 932,
              "height": 1684
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 53.58555772569444,
            "paperColor": 25.70431857638889,
            "region": {
              "left": 73,
              "top": 69,
              "width": 956,
              "height": 948
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
            "occupancy": 1.0449226951583104,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0471917998166347,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.040384485841662,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.070142563198119,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.062851355820106,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.058430702527925,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0712749891909212,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0965771768240906,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0919259679180315,
            "bad": [],
            "measured": 10
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.7611762152777777,
        "frames": [
          16,
          108,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 3.766384548611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/16x9-duration-90-frame-10.png",
                "sha256": "f83078f1d786f8659487b2264db17358991799a4cb20391be2044af3e43aa9d3",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/16x9-duration-90-frame-89.png",
                "sha256": "2b4c3ef0fbb1cbbc70b416c73d8cb0ac2eab0e0d660bb6e257e865f1a48474df",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/16x9-duration-90-frame-79.png",
                "sha256": "2b4c3ef0fbb1cbbc70b416c73d8cb0ac2eab0e0d660bb6e257e865f1a48474df",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 3.7611762152777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/16x9-duration-900-frame-16.png",
                "sha256": "b41f66fdff02ed2e95873f1ba4cdd750284c4b628126a31bbd6b3b158e980ba7",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/16x9-duration-900-frame-108.png",
                "sha256": "2b4c3ef0fbb1cbbc70b416c73d8cb0ac2eab0e0d660bb6e257e865f1a48474df",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/16x9-duration-900-frame-792.png",
                "sha256": "2b4c3ef0fbb1cbbc70b416c73d8cb0ac2eab0e0d660bb6e257e865f1a48474df",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/16x9-duration-900-frame-899.png",
                "sha256": "2b4c3ef0fbb1cbbc70b416c73d8cb0ac2eab0e0d660bb6e257e865f1a48474df",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 4.011067708333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/9x16-duration-90-frame-10.png",
                "sha256": "6b155e50e66ed7c729d989aa3c41348e598fd90d25d538d01df62453ef23eebe",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/9x16-duration-90-frame-89.png",
                "sha256": "1545165401e4fe6f8ff99afa7fbfc1a4ac7d5506d9e26d62449eee23deb6e8d3",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/9x16-duration-90-frame-79.png",
                "sha256": "1545165401e4fe6f8ff99afa7fbfc1a4ac7d5506d9e26d62449eee23deb6e8d3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 4.018880208333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/9x16-duration-900-frame-16.png",
                "sha256": "8b455c5ae50e7137ac07d2271cc6c8759133c621546800ac48d7e309374a52cd",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/9x16-duration-900-frame-108.png",
                "sha256": "1545165401e4fe6f8ff99afa7fbfc1a4ac7d5506d9e26d62449eee23deb6e8d3",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/9x16-duration-900-frame-792.png",
                "sha256": "1545165401e4fe6f8ff99afa7fbfc1a4ac7d5506d9e26d62449eee23deb6e8d3",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/9x16-duration-900-frame-899.png",
                "sha256": "1545165401e4fe6f8ff99afa7fbfc1a4ac7d5506d9e26d62449eee23deb6e8d3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 4.095920138888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/1x1-duration-90-frame-10.png",
                "sha256": "324c4190c84eaaeed593e9885fdbdea6a201492ee6434dbec9d193e3a9f4a46f",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/1x1-duration-90-frame-89.png",
                "sha256": "e803c300216e52061df4427279122da792682e07e5aabec19edd1a20b82cd8c5",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/1x1-duration-90-frame-79.png",
                "sha256": "e803c300216e52061df4427279122da792682e07e5aabec19edd1a20b82cd8c5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 4.057183159722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/1x1-duration-900-frame-16.png",
                "sha256": "41c551b119fee315543a629e0fca14f6ace836020df3daf73d83e4448d089aae",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/1x1-duration-900-frame-108.png",
                "sha256": "e803c300216e52061df4427279122da792682e07e5aabec19edd1a20b82cd8c5",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/1x1-duration-900-frame-792.png",
                "sha256": "e803c300216e52061df4427279122da792682e07e5aabec19edd1a20b82cd8c5",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-hook-strike/1x1-duration-900-frame-899.png",
                "sha256": "e803c300216e52061df4427279122da792682e07e5aabec19edd1a20b82cd8c5",
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
        "note": "Old way struck through, new line underlined with a note; readable, rebrands distinct."
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
      "bundleSha256": "ff28fd8da3ae60a471552fd50b9c8f9ed706ee13bcec4e9f16830289d365de56",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-strike/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-strike/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-strike/16x9/detail.mp4",
      "bg": "#e5e2da",
      "posterFrame": 108,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "449fe125f9b354e5c798e1b97f73d6c971631147a3c0038383983aaf34cc7ce5",
        "loop": "e17cee1f7ca0cd9772a21493ec3a0972b1a4568c7cb007c2933bffc36423d8df",
        "detail": "24d1429b912023ffe130b267705258bda73736a0b96a21c9a1ef11c398a4dc73"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-strike/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-strike/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-strike/9x16/detail.mp4",
      "bg": "#e5e2da",
      "posterFrame": 108,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8501d93058357a1c86b0e628eacaaef9289677c95faae838141a205439955e3d",
        "loop": "b56511192bcea236f62d9037e492622615e0372e5c5227f58058c2bdfea56ad1",
        "detail": "e704d792ee7801f19e9cded468c4dbd976fdbbc8d45ab93beeff04ac261b0b41"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-strike/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-strike/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-strike/1x1/detail.mp4",
      "bg": "#e5e2da",
      "posterFrame": 108,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "af19d0fb6da8d19b7dcf568e494b3fcd916c7394679ede76baacffa74e11068f",
        "loop": "f4c9d9ffda9dd5626106ce617ba18bedf5744901cde89a15d6f06907a345707e",
        "detail": "b4bd82dd224fca104f3290ffdab09ccfb98ea54491e6b8ce44aaa4eb3de51158"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ff28fd8da3ae60a471552fd50b9c8f9ed706ee13bcec4e9f16830289d365de56/index.mjs",
    "sha256": "ff28fd8da3ae60a471552fd50b9c8f9ed706ee13bcec4e9f16830289d365de56",
    "bytes": 207822,
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
    "at": "2026-10-09T03:59:32.308Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
