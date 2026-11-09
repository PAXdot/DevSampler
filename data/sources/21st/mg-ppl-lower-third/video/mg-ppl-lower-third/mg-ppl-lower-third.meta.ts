// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "editorial",
  "mechanic": [
    "lower-third-wipe-in"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "lower-third-wipe-in",
    "lower-third",
    "speaker",
    "name-title"
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
      "in": 126,
      "out": 0
    },
    "markers": {
      "settled": 126
    },
    "beats": [
      0,
      32,
      63,
      95,
      126
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
      "key": "name",
      "type": "text",
      "maxChars": 24,
      "role": "name"
    },
    {
      "key": "role",
      "type": "text",
      "maxChars": 34,
      "role": "label"
    },
    {
      "key": "brand",
      "type": "text",
      "maxChars": 16,
      "role": "label"
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
      "target": "lower-third-wipe-in",
      "prop": "transform",
      "from": "enter",
      "settledBy": 126,
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
    "accent": "#FF8A5C",
    "secondary": "#FFD29A",
    "paper": "#140D09",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": false,
    "name": "Maya Okafor",
    "role": "Head of Product, Lumen",
    "brand": "Lumen"
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
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 24,
      "role": "name"
    },
    {
      "key": "role",
      "label": "Role",
      "type": "text",
      "max": 34,
      "role": "label"
    },
    {
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 16,
      "role": "label"
    }
  ],
  "name": "Editorial Lower Third",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-ppl-lower-third",
    "bundleSha256": "779900aedc156d6ee34d054b3632ac14c96ff8b380db1e66ea6daee6c6a37d02",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:43:10.834Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/16x9-paper.png",
        "sha256": "9b382937015e0b62dfd6d4d9f2625d831c40c77f1af384ddd0fdb1b4c30b04a5"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/16x9-night.png",
        "sha256": "30b6cb2e0b4c426430eee6a1f9ea77ecea08369b315ebcf8948ff74e62367fb5"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/16x9-color.png",
        "sha256": "8202bf73ff01bbcb1feb69527f0245f81576109db83156f05d4d673ae61ef8df"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/9x16-paper.png",
        "sha256": "6a0ddeb7eacb68ee5787c93c10c3b5f39a44872145601ca27123499cb18799bd"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/9x16-night.png",
        "sha256": "1834139613c104721febdf8fb7319d8a0168a004d063fb9b34eac65b6ef69362"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/9x16-color.png",
        "sha256": "c7a4993774e1e346a10d8d3d4b5cc8d94cddddfd1b197b7c867798b55d68537a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/1x1-paper.png",
        "sha256": "6ae15deaa5991d22409a9c9b5230bccf096cbb41e60dbb4f88f69974308893d2"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/1x1-night.png",
        "sha256": "ee1ccca7696e11fbfde4b05fd63ef3119d49b51551c56372a9144c0278415a6c"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/1x1-color.png",
        "sha256": "519bdaa1c88e3e2eafd2a70ce07fbed3e23cd87f8b51a38348a7c0a0ca712c0b"
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
          "mg-ppl-lower-third--16x9",
          "mg-ppl-lower-third--9x16",
          "mg-ppl-lower-third--1x1"
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
            "paperNight": 8.600043402777779,
            "paperColor": 4.611138237847222,
            "region": {
              "left": 125,
              "top": 65,
              "width": 1725,
              "height": 862
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 20.68364800347222,
            "paperColor": 10.490125868055555,
            "region": {
              "left": 86,
              "top": 154,
              "width": 905,
              "height": 1555
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 11.495252821180555,
            "paperColor": 6.52734375,
            "region": {
              "left": 76,
              "top": 65,
              "width": 938,
              "height": 917
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
            "occupancy": 1.0162786661732597,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0162786661732597,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0162786661732597,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9214376095731505,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9214376095731505,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9612050356407997,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0451198369151047,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0451198369151047,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0451198369151047,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 11.34201388888889,
        "frames": [
          18,
          126,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 11.34201388888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/16x9-duration-90-frame-10.png",
                "sha256": "1a6b54593de7d6089c195d5039093fe909571ba702035f3b93a9fdf41fdd3785",
                "alphaMass": 676
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/16x9-duration-90-frame-89.png",
                "sha256": "bcae9724d23fd60cc8f419097f6aa70a7036b0d393cb9e963c7bbc27b3b00b75",
                "alphaMass": 6024
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/16x9-duration-90-frame-79.png",
                "sha256": "bcae9724d23fd60cc8f419097f6aa70a7036b0d393cb9e963c7bbc27b3b00b75",
                "alphaMass": 6024
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 11.34201388888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/16x9-duration-900-frame-18.png",
                "sha256": "1a6b54593de7d6089c195d5039093fe909571ba702035f3b93a9fdf41fdd3785",
                "alphaMass": 676
              },
              {
                "frame": 126,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/16x9-duration-900-frame-126.png",
                "sha256": "bcae9724d23fd60cc8f419097f6aa70a7036b0d393cb9e963c7bbc27b3b00b75",
                "alphaMass": 6024
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/16x9-duration-900-frame-792.png",
                "sha256": "bcae9724d23fd60cc8f419097f6aa70a7036b0d393cb9e963c7bbc27b3b00b75",
                "alphaMass": 6024
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/16x9-duration-900-frame-899.png",
                "sha256": "bcae9724d23fd60cc8f419097f6aa70a7036b0d393cb9e963c7bbc27b3b00b75",
                "alphaMass": 6024
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 24.35622829861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/9x16-duration-90-frame-10.png",
                "sha256": "dcebc80ff31fc313bc895ec090feee7896934ae535794c51ec81245951847f61",
                "alphaMass": 2567
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/9x16-duration-90-frame-89.png",
                "sha256": "18a730b27e1d4ceb5558ff6f9d1fb5b22a2d354b7ed386662ee2327f74432c8e",
                "alphaMass": 14232
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/9x16-duration-90-frame-79.png",
                "sha256": "18a730b27e1d4ceb5558ff6f9d1fb5b22a2d354b7ed386662ee2327f74432c8e",
                "alphaMass": 14232
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 24.35622829861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/9x16-duration-900-frame-18.png",
                "sha256": "dcebc80ff31fc313bc895ec090feee7896934ae535794c51ec81245951847f61",
                "alphaMass": 2567
              },
              {
                "frame": 126,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/9x16-duration-900-frame-126.png",
                "sha256": "18a730b27e1d4ceb5558ff6f9d1fb5b22a2d354b7ed386662ee2327f74432c8e",
                "alphaMass": 14232
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/9x16-duration-900-frame-792.png",
                "sha256": "18a730b27e1d4ceb5558ff6f9d1fb5b22a2d354b7ed386662ee2327f74432c8e",
                "alphaMass": 14232
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/9x16-duration-900-frame-899.png",
                "sha256": "18a730b27e1d4ceb5558ff6f9d1fb5b22a2d354b7ed386662ee2327f74432c8e",
                "alphaMass": 14232
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 16.417317708333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/1x1-duration-90-frame-10.png",
                "sha256": "42ade36dd0dc1352b01ce04e91755a2cb32d4098ce13898bdf775e1f9d8d4176",
                "alphaMass": 1198
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/1x1-duration-90-frame-89.png",
                "sha256": "2afaf240920c5727705bc2efee4a87df482a22cd9b5ea2b8fff90630c2eca68a",
                "alphaMass": 8947
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/1x1-duration-90-frame-79.png",
                "sha256": "2afaf240920c5727705bc2efee4a87df482a22cd9b5ea2b8fff90630c2eca68a",
                "alphaMass": 8947
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 16.417317708333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/1x1-duration-900-frame-18.png",
                "sha256": "42ade36dd0dc1352b01ce04e91755a2cb32d4098ce13898bdf775e1f9d8d4176",
                "alphaMass": 1198
              },
              {
                "frame": 126,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/1x1-duration-900-frame-126.png",
                "sha256": "2afaf240920c5727705bc2efee4a87df482a22cd9b5ea2b8fff90630c2eca68a",
                "alphaMass": 8947
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/1x1-duration-900-frame-792.png",
                "sha256": "2afaf240920c5727705bc2efee4a87df482a22cd9b5ea2b8fff90630c2eca68a",
                "alphaMass": 8947
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-4/mg-ppl-lower-third/1x1-duration-900-frame-899.png",
                "sha256": "2afaf240920c5727705bc2efee4a87df482a22cd9b5ea2b8fff90630c2eca68a",
                "alphaMass": 8947
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
        "note": "Editorial lower third with serif name and role; transparent layer, rebrands distinct."
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
      "bundleSha256": "779900aedc156d6ee34d054b3632ac14c96ff8b380db1e66ea6daee6c6a37d02",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ppl-lower-third/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ppl-lower-third/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ppl-lower-third/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 126,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ab390e9997dbbe23a415f04092fac85a52f52acef31df633f2fe1595ab039166",
        "loop": "d34734ac92229904db823883bb20d66916c112afb570ca1b946c048e79a343bd",
        "detail": "e5d5661ef7a6b3d71788767b464f4a6e4ee647ffba15bb85909ee25603c5b007"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ppl-lower-third/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ppl-lower-third/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ppl-lower-third/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 126,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ad3bbfb9fa02bb8fd0170df8d4219b157dc00a2fb3c5cef18781823e6fe1f442",
        "loop": "a575d1100b908a68e9b54ed4161b96831cd1e7bbb99d5ee2861a46fde6ec1ef3",
        "detail": "fbdfbe76a360b877a27fdda8f7f61702747c7e1db568f9e62207dd1c57b249fd"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ppl-lower-third/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ppl-lower-third/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ppl-lower-third/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 126,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "da8fbc5de400002f5f963f3f7acd10bcfd09d1798f7c94f728ec274ca218ef69",
        "loop": "e503f669eee3e59a6ebae12d13744cb95254e6d764fea04b76b080b708bad520",
        "detail": "f540307335f82012b4c95483a0d973f92bd39f82d2fba4b62e33f4e0d316b2a2"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/779900aedc156d6ee34d054b3632ac14c96ff8b380db1e66ea6daee6c6a37d02/index.mjs",
    "sha256": "779900aedc156d6ee34d054b3632ac14c96ff8b380db1e66ea6daee6c6a37d02",
    "bytes": 172746,
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
    "at": "2026-10-09T04:01:48.523Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
