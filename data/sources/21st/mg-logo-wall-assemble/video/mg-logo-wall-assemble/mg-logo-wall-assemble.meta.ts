// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/motion-gallery",
  "job": "logos",
  "language": "editorial",
  "mechanic": [
    "logos-fly-into-grid-row-highlight"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "logos",
    "logos-fly-into-grid-row-highlight",
    "customers",
    "social-proof",
    "logo-wall"
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
      "in": 120,
      "out": 0
    },
    "markers": {
      "settled": 120
    },
    "beats": [
      0,
      30,
      60,
      90,
      120
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
      "maxChars": 18,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 30,
      "role": "headline"
    },
    {
      "key": "stat",
      "type": "text",
      "maxChars": 32,
      "role": "label"
    },
    {
      "key": "more",
      "type": "text",
      "maxChars": 30,
      "role": "caption"
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
      "target": "logos-fly-into-grid-row-highlight",
      "prop": "transform",
      "from": "enter",
      "settledBy": 120,
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
    "ink": "#1C1B18",
    "accent": "#1C1B18",
    "secondary": "#8B867A",
    "paper": "#F3F0E8",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "customers",
    "headline": "Trusted by teams at",
    "stat": "12,000+ teams · 84 countries",
    "more": "and 11,988 more teams"
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
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 18,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 30,
      "role": "headline"
    },
    {
      "key": "stat",
      "label": "Stat",
      "type": "text",
      "max": 32,
      "role": "label"
    },
    {
      "key": "more",
      "label": "More",
      "type": "text",
      "max": 30,
      "role": "caption"
    }
  ],
  "name": "Customer Logo Wall",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-logo-wall-assemble",
    "bundleSha256": "e8dd5f0d0f9719cc69c89b5672e79ad6982963508ff5b6758ba9031aff2d3133",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:47:56.896Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/16x9-paper.png",
        "sha256": "a7f9777b42b014ff8d8ea64fe5ba577582edb51b0ef4eea17a8b4019ef9650ab"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/16x9-night.png",
        "sha256": "bc4a3043da5664cfe1e02a29a6e3f8135edd93552181fa0a93ae923de3b4f741"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/16x9-color.png",
        "sha256": "07baf9bfc3c82288ae5687fb5399ac247f897a2be2f8ffa4b0993bc8225c4143"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/9x16-paper.png",
        "sha256": "e8d86cbea72fba9bb692dd0d455404e4540bdf8af96afa810a49e5fba7f10216"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/9x16-night.png",
        "sha256": "319086e9c09030df48ae6926fbc72c6ec388ed4e9e3012bbc8afdd16208b0982"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/9x16-color.png",
        "sha256": "543d3c4917078417297654da5a64859cc4c68a09a14397922b957cdb4651455a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/1x1-paper.png",
        "sha256": "dec06ab368a6e147a30eb9d412eb8ccaae45538a80f64c3abc2c9eca63b07106"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/1x1-night.png",
        "sha256": "86dc79705a594514ee59dbfa1bed98dc476d5a01d412aa6ee862c59d306a4810"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/1x1-color.png",
        "sha256": "b2008ae50387ef6451ee8b3bcbe9fc83cf2f0f61e0390d0805ba05465cc0a794"
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
          "mg-logo-wall-assemble--16x9",
          "mg-logo-wall-assemble--9x16",
          "mg-logo-wall-assemble--1x1"
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
            "paperNight": 45.78814019097222,
            "paperColor": 13.775770399305555,
            "region": {
              "left": 102,
              "top": 99,
              "width": 1716,
              "height": 897
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 63.619357638888886,
            "paperColor": 20.34931098090278,
            "region": {
              "left": 48,
              "top": 172,
              "width": 984,
              "height": 1623
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 49.061794704861114,
            "paperColor": 15.120361328125,
            "region": {
              "left": 48,
              "top": 83,
              "width": 984,
              "height": 908
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
            "occupancy": 1.049679613357689,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0508524397413288,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.049679613357689,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0861356502477537,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0915158887629128,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.090170829134123,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0820257458264515,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0832213543853757,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0820257458264515,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 28.5478515625,
        "frames": [
          18,
          120,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 28.55392795138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/16x9-duration-90-frame-10.png",
                "sha256": "53b724e220bf706b1a22822bc8004dab3cd2dea41c9ce44dffdd5b2a151204a8",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/16x9-duration-90-frame-89.png",
                "sha256": "7c147031c6538276c5a1cb91c769793c36424d42ebb6f5487be3085580fbb45f",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/16x9-duration-90-frame-79.png",
                "sha256": "7c147031c6538276c5a1cb91c769793c36424d42ebb6f5487be3085580fbb45f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 28.5478515625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/16x9-duration-900-frame-18.png",
                "sha256": "22e1bd99616fc21dd4e6305fb75ca981ce111f2ccd36ca51294f1060b6437041",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/16x9-duration-900-frame-120.png",
                "sha256": "7c147031c6538276c5a1cb91c769793c36424d42ebb6f5487be3085580fbb45f",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/16x9-duration-900-frame-792.png",
                "sha256": "7c147031c6538276c5a1cb91c769793c36424d42ebb6f5487be3085580fbb45f",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/16x9-duration-900-frame-899.png",
                "sha256": "7c147031c6538276c5a1cb91c769793c36424d42ebb6f5487be3085580fbb45f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 28.97894965277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/9x16-duration-90-frame-10.png",
                "sha256": "c9dde1eeba6f13fd6e5193fa2f9891ee965d06c603fc176a02e647b389de0290",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/9x16-duration-90-frame-89.png",
                "sha256": "7ee98799359df359a788ca83e6dc258e616533b912cfd3a98ff21d278868bd5b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/9x16-duration-90-frame-79.png",
                "sha256": "1e660509d34d8d76ae95f3be8cbee7dfeae7f735d155b2af038dcbe87ad94b88",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 28.95062934027778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/9x16-duration-900-frame-18.png",
                "sha256": "eb4398de4683b129c4fb3b0993c58b414e1eb935f17178b306a5c75bfb61d034",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/9x16-duration-900-frame-120.png",
                "sha256": "1e660509d34d8d76ae95f3be8cbee7dfeae7f735d155b2af038dcbe87ad94b88",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/9x16-duration-900-frame-792.png",
                "sha256": "7ee98799359df359a788ca83e6dc258e616533b912cfd3a98ff21d278868bd5b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/9x16-duration-900-frame-899.png",
                "sha256": "1e660509d34d8d76ae95f3be8cbee7dfeae7f735d155b2af038dcbe87ad94b88",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 26.30121527777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/1x1-duration-90-frame-10.png",
                "sha256": "40f912150dd34e8863a3e1cc986ee1be778d74c65c4261f7a256469139fdea03",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/1x1-duration-90-frame-89.png",
                "sha256": "05e8418932ff3681eea02b8ad58efed57224e02f65c5ae31be7e75e67d793b51",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/1x1-duration-90-frame-79.png",
                "sha256": "05e8418932ff3681eea02b8ad58efed57224e02f65c5ae31be7e75e67d793b51",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 26.200846354166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/1x1-duration-900-frame-18.png",
                "sha256": "1efc724abbcf94d354198d89d3a859560870bdf0fcd749ed1dcf516b3bf0f3b8",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/1x1-duration-900-frame-120.png",
                "sha256": "05e8418932ff3681eea02b8ad58efed57224e02f65c5ae31be7e75e67d793b51",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/1x1-duration-900-frame-792.png",
                "sha256": "05e8418932ff3681eea02b8ad58efed57224e02f65c5ae31be7e75e67d793b51",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-logo-wall-assemble/1x1-duration-900-frame-899.png",
                "sha256": "05e8418932ff3681eea02b8ad58efed57224e02f65c5ae31be7e75e67d793b51",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "logos",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Logo wall assembles with an accent band; headline readable, rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 13,
        "compared": 13,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "e8dd5f0d0f9719cc69c89b5672e79ad6982963508ff5b6758ba9031aff2d3133",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-logo-wall-assemble/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-logo-wall-assemble/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-logo-wall-assemble/16x9/detail.mp4",
      "bg": "#efece4",
      "posterFrame": 120,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "dfecd535348f8e89187a6a7cfa1d85ede97fe1f879320bbfc3086d868b0f5be1",
        "loop": "82d1961f6e1503e1c3e4a967e7653346bfde24fcc072aa2d8403f2f74160728f",
        "detail": "6e1f3d05ffd178eadcb25a3a547962f9be4ff759125e1703bde5a42792c53dc7"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-logo-wall-assemble/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-logo-wall-assemble/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-logo-wall-assemble/9x16/detail.mp4",
      "bg": "#efece4",
      "posterFrame": 120,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "076fa9cbb1ecf66ec645f39656e1d6e2f77647cf7422011a93042b4f34e2f660",
        "loop": "87c191b35588ffa1f03a9060ec9c3746777081ad2225b79e7f548c17b9f88c82",
        "detail": "511ed4d78c3bd0db90d9ea5fad20383d0785e66d0811e38187e49ca33ae361b3"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-logo-wall-assemble/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-logo-wall-assemble/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-logo-wall-assemble/1x1/detail.mp4",
      "bg": "#efece4",
      "posterFrame": 120,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "37497c3b3553bdd51d80c181f33abfd7144ad8a0707674e6841e0d8518a8c3a8",
        "loop": "3b194de29bd01c2e1314fe02af8697e46a6f6a08bd768a23a5429a05b8cf9897",
        "detail": "357da7594349ce93573c49aaf810763b5f93f9049fa2325b8eecb7a5952ec982"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/e8dd5f0d0f9719cc69c89b5672e79ad6982963508ff5b6758ba9031aff2d3133/index.mjs",
    "sha256": "e8dd5f0d0f9719cc69c89b5672e79ad6982963508ff5b6758ba9031aff2d3133",
    "bytes": 183542,
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
    "at": "2026-10-09T04:00:48.481Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
