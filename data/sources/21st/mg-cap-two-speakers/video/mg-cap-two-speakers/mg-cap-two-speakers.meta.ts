// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "product-ui",
  "mechanic": [
    "speaker-turn-captions"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "speaker-turn-captions",
    "captions",
    "dialogue",
    "podcast",
    "interview"
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
      "key": "nameA",
      "type": "text",
      "maxChars": 14,
      "role": "name"
    },
    {
      "key": "lineA",
      "type": "text",
      "maxChars": 40,
      "role": "caption"
    },
    {
      "key": "nameB",
      "type": "text",
      "maxChars": 14,
      "role": "name"
    },
    {
      "key": "lineB",
      "type": "text",
      "maxChars": 40,
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
      "target": "speaker-turn-captions",
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
    "ink": "#FFFFFF",
    "accent": "#3D63FF",
    "secondary": "#4BE3A3",
    "paper": "#08090C",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": false,
    "nameA": "Maya",
    "lineA": "Where's the launch spec?",
    "nameB": "Theo",
    "lineB": "Already in Lumen, next to the code."
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
      "key": "nameA",
      "label": "Name a",
      "type": "text",
      "max": 14,
      "role": "name"
    },
    {
      "key": "lineA",
      "label": "Line a",
      "type": "text",
      "max": 40,
      "role": "caption"
    },
    {
      "key": "nameB",
      "label": "Name b",
      "type": "text",
      "max": 14,
      "role": "name"
    },
    {
      "key": "lineB",
      "label": "Line b",
      "type": "text",
      "max": 40,
      "role": "caption"
    }
  ],
  "name": "Two Speaker Captions",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-cap-two-speakers",
    "bundleSha256": "aaa37da09df2da3d798bf1c931d8a16c66a0913c0729f4ca1d007c7af12c3da0",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:40:12.325Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/16x9-paper.png",
        "sha256": "9bbe4ee970a72d752d601e31918c0d29695f5ec9b69361346b54ca0b3998f2c9"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/16x9-night.png",
        "sha256": "44c44419d8d3f7974603eaf2670e647366ca6a5f36a5cbf77cf58d682c051703"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/16x9-color.png",
        "sha256": "2411e1a385462e2dcdc9066dfda4d79b67a188d69bdc26d4800639252d2d6ac2"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/9x16-paper.png",
        "sha256": "022c334714bbbfd3389bc76045a258838d52abf041671442a8036507eeeaab5b"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/9x16-night.png",
        "sha256": "75d348303b3c54ee169e7621a2c7935082e96fdde319d231f974e931628c2041"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/9x16-color.png",
        "sha256": "3f4de476049e4c6e4898fbb7d6840b243cbb0f4796442a2fbfa7795c0a9eedaa"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/1x1-paper.png",
        "sha256": "c4b5ca6fecfea1e339bc37300c03a115895beb1c76dc3b4b66d365b6fa050729"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/1x1-night.png",
        "sha256": "31069ebddc4c5c09e9af4a2adf60eaa15abfe423fa9d14b2b665964aa498de35"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/1x1-color.png",
        "sha256": "cb61e7bab77d4fd7063da7323e8d45155512f17092a1b2ec5e1821cba3da3546"
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
          "mg-cap-two-speakers--16x9",
          "mg-cap-two-speakers--9x16",
          "mg-cap-two-speakers--1x1"
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
            "paperNight": 37.640407986111114,
            "paperColor": 16.240587022569443,
            "region": {
              "left": 86,
              "top": 840,
              "width": 1748,
              "height": 165
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 18.658311631944443,
            "paperColor": 13.39816623263889,
            "region": {
              "left": 60,
              "top": 134,
              "width": 961,
              "height": 1627
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 58.643093532986114,
            "paperColor": 25.953233506944443,
            "region": {
              "left": 54,
              "top": 905,
              "width": 972,
              "height": 126
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
            "occupancy": 0.19593035259371241,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.19473565532179954,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.18756747169032226,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.060911681416394,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0624733995321383,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0675180566053584,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.14880952380952384,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.14644746787603932,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.14054232804232808,
            "bad": [],
            "measured": 13
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 17.08648003472222,
        "frames": [
          16,
          108,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 16.65158420138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/16x9-duration-90-frame-10.png",
                "sha256": "e4fb07003a75e3910ff9b623f3dc10b6dc25057123a38fcef5990bfafa84e1d2",
                "alphaMass": 3850
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/16x9-duration-90-frame-89.png",
                "sha256": "cdede0272fab2d4795dc3a20ce096976265ba354858da93a38750f17aa0d6258",
                "alphaMass": 12402
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/16x9-duration-90-frame-79.png",
                "sha256": "cdede0272fab2d4795dc3a20ce096976265ba354858da93a38750f17aa0d6258",
                "alphaMass": 12402
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 17.08648003472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/16x9-duration-900-frame-16.png",
                "sha256": "f692616b3cfcd7f82c815e53fa6b79a9d0564ec63b2f90718151e6e49c992713",
                "alphaMass": 3867
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/16x9-duration-900-frame-108.png",
                "sha256": "cdede0272fab2d4795dc3a20ce096976265ba354858da93a38750f17aa0d6258",
                "alphaMass": 12402
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/16x9-duration-900-frame-792.png",
                "sha256": "cdede0272fab2d4795dc3a20ce096976265ba354858da93a38750f17aa0d6258",
                "alphaMass": 12402
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/16x9-duration-900-frame-899.png",
                "sha256": "cdede0272fab2d4795dc3a20ce096976265ba354858da93a38750f17aa0d6258",
                "alphaMass": 12402
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 25.87109375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/9x16-duration-90-frame-10.png",
                "sha256": "32b773dd75d71ee53c76eebbc236ba10bd3f8b21d10400a67f6100f73a56c776",
                "alphaMass": 10094
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/9x16-duration-90-frame-89.png",
                "sha256": "f99169f2cfd5399bb90429a2da5c4613573d8979fc47460f9f2ba5ad0858755c",
                "alphaMass": 24595
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/9x16-duration-90-frame-79.png",
                "sha256": "f99169f2cfd5399bb90429a2da5c4613573d8979fc47460f9f2ba5ad0858755c",
                "alphaMass": 24595
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 25.33474392361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/9x16-duration-900-frame-16.png",
                "sha256": "a97c8da3293bd2ef6aef93689d0bd868c3e3e19d9492086e5cadfad3c1253001",
                "alphaMass": 10117
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/9x16-duration-900-frame-108.png",
                "sha256": "f99169f2cfd5399bb90429a2da5c4613573d8979fc47460f9f2ba5ad0858755c",
                "alphaMass": 24595
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/9x16-duration-900-frame-792.png",
                "sha256": "f99169f2cfd5399bb90429a2da5c4613573d8979fc47460f9f2ba5ad0858755c",
                "alphaMass": 24595
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/9x16-duration-900-frame-899.png",
                "sha256": "f99169f2cfd5399bb90429a2da5c4613573d8979fc47460f9f2ba5ad0858755c",
                "alphaMass": 24595
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 16.980577256944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/1x1-duration-90-frame-10.png",
                "sha256": "01127c5f810d9b9f46f07b4fcc3cdd670137e0a9b191614d342feb391ba04ef3",
                "alphaMass": 5257
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/1x1-duration-90-frame-89.png",
                "sha256": "d9663b34b1bc5def39a64f18e40547ee111bac606c059a4853889ec51ae0bfc4",
                "alphaMass": 14920
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/1x1-duration-90-frame-79.png",
                "sha256": "d9663b34b1bc5def39a64f18e40547ee111bac606c059a4853889ec51ae0bfc4",
                "alphaMass": 14920
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 16.685438368055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/1x1-duration-900-frame-16.png",
                "sha256": "c0adaa568784c7bf19a04d32a50334ccd70876d0775029c892fd96b41e0ba9e0",
                "alphaMass": 5275
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/1x1-duration-900-frame-108.png",
                "sha256": "d9663b34b1bc5def39a64f18e40547ee111bac606c059a4853889ec51ae0bfc4",
                "alphaMass": 14920
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/1x1-duration-900-frame-792.png",
                "sha256": "d9663b34b1bc5def39a64f18e40547ee111bac606c059a4853889ec51ae0bfc4",
                "alphaMass": 14920
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/mg-cap-two-speakers/1x1-duration-900-frame-899.png",
                "sha256": "d9663b34b1bc5def39a64f18e40547ee111bac606c059a4853889ec51ae0bfc4",
                "alphaMass": 14920
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
        "note": "Two speakers' captions alternate with name pills; transparent layer in brand ink."
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
      "bundleSha256": "aaa37da09df2da3d798bf1c931d8a16c66a0913c0729f4ca1d007c7af12c3da0",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-two-speakers/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-two-speakers/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-two-speakers/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 108,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c32f03d95b25d3aff5d2123d43fce7a48b2e5251ae4bd4046a517424ac488066",
        "loop": "e3bf4a379e1cf57ecdec67fde19008f52dc376e3d90a78e12f9f95dfe26eb2af",
        "detail": "3384e7c6a3da6555797acd2f5a8fda59f99b3f4a78947ee4d02589e209961421"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-two-speakers/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-two-speakers/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-two-speakers/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 108,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "bd9ae5e713594e3edcf132e8edf8134b6358a695048ac75aca1c9fee6dfa3e63",
        "loop": "bb61a4db9aa0a3f86da49fc9c3775b39020b4b557eeacb5d9e55fd972b63d3f8",
        "detail": "aaa4bdd98a99298e8af98967521aba726ef86f45be6fb1aa98fa691930906c39"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-two-speakers/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-two-speakers/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-two-speakers/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 108,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7eb1873d803fbada50bda839d32c5b78692b0b6c63ca8b3a3433d13944e0f870",
        "loop": "b69978eefdf28b759fe37845038612e7ea86ea5df454b8b5bc0eae9dfe3692c4",
        "detail": "24d433da9c96dc572341ae7920074876228647fedfdd05d85ec5058ccbd79663"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/aaa37da09df2da3d798bf1c931d8a16c66a0913c0729f4ca1d007c7af12c3da0/index.mjs",
    "sha256": "aaa37da09df2da3d798bf1c931d8a16c66a0913c0729f4ca1d007c7af12c3da0",
    "bytes": 190365,
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
    "at": "2026-10-09T03:44:44.460Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
