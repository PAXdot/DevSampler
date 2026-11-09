// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "gallery/motion-gallery",
  "job": "gallery",
  "language": "editorial",
  "mechanic": [
    "camera-pullback-reveal"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "gallery",
    "camera-pullback-reveal",
    "pullback",
    "wall",
    "camera"
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
      "in": 93,
      "out": 0
    },
    "markers": {
      "settled": 93
    },
    "beats": [
      0,
      23,
      47,
      70,
      93
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
      "maxChars": 30,
      "role": "headline"
    },
    {
      "key": "accentLine",
      "type": "text",
      "maxChars": 20,
      "role": "headline"
    },
    {
      "key": "note",
      "type": "text",
      "maxChars": 20,
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
      "target": "camera-pullback-reveal",
      "prop": "transform",
      "from": "enter",
      "settledBy": 93,
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
    "ink": "#221A12",
    "accent": "#C4583A",
    "secondary": "#E3A948",
    "paper": "#EFE8DC",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Lumen Spaces",
    "title": "Everything your team makes,",
    "accentLine": "in one place.",
    "note": "yours, in context"
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
      "max": 22,
      "role": "kicker"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 30,
      "role": "headline"
    },
    {
      "key": "accentLine",
      "label": "Accent line",
      "type": "text",
      "max": 20,
      "role": "headline"
    },
    {
      "key": "note",
      "label": "Note",
      "type": "text",
      "max": 20,
      "role": "caption"
    }
  ],
  "name": "Pullback To Wall",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-wall-pullback",
    "bundleSha256": "da2a486a50e8aa2bb1658c8b7baa71856b9be7d6a6ce7efb8269e594ac8098ae",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:44:42.292Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/16x9-paper.png",
        "sha256": "9e7620f3af1aec86b21f0909305fb6b51d795274448ae381a212ff8cf48c6e3c"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/16x9-night.png",
        "sha256": "2c1bd0f1dc42d5d5e9dc2e5ae6a12768a7ec8f4ef61554dd28e17206cf4a2e24"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/16x9-color.png",
        "sha256": "f83fd3fc7741f26d9f18a2159e8f4cbefa6bfe42f2b178454b6b23fa96bf029d"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/9x16-paper.png",
        "sha256": "9b9cca90915a6fae952e10dbf43db28425cb1940b21bbed80a32618b4660aff6"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/9x16-night.png",
        "sha256": "df5d11743d1e923c889d922c1c2dfd3f42f4349faa5e3f69be7f98bf62594324"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/9x16-color.png",
        "sha256": "0ee71d2025433d6540cb2368b086a74047d244e4343fd34bd9ffb99e390f67f3"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/1x1-paper.png",
        "sha256": "5dbff85961ea225e4ff4ff2606c5721b1a7164dcc340d0eb9236311dd6d1acae"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/1x1-night.png",
        "sha256": "5d48eceaba1a5161900039ad0f596010e2724d2d23114031fd37c52725231aad"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/1x1-color.png",
        "sha256": "31b700dc91cec6a1f8f4ff8dd44729ca3b958d25204f57bed32d43412196c10a"
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
          "mg-wall-pullback--16x9",
          "mg-wall-pullback--9x16",
          "mg-wall-pullback--1x1"
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
            "paperNight": 48.44580078125,
            "paperColor": 6.070095486111111,
            "region": {
              "left": 12,
              "top": 7,
              "width": 1896,
              "height": 1073
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 43.997639973958336,
            "paperColor": 7.602674696180555,
            "region": {
              "left": 7,
              "top": 84,
              "width": 1066,
              "height": 1836
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 41.806233723958336,
            "paperColor": 5.894911024305555,
            "region": {
              "left": 7,
              "top": 29,
              "width": 1066,
              "height": 1051
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
            "occupancy": 1.3904471896783408,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3904471896783408,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3904471896783408,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.337661800831444,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.337661800831444,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.337661800831444,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3612999783818422,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3612999783818422,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3612999783818422,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 30.478407118055557,
        "frames": [
          13,
          93,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 30.4677734375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/16x9-duration-90-frame-10.png",
                "sha256": "4bd8455a4782629b0c9a87be4757ca83dbe9b60ba1aa7a0e6215afefe1743ee9",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/16x9-duration-90-frame-89.png",
                "sha256": "00605db8755ff563f29eb9c61f45f88be5b7d6f93c182cd710ac2ab52fe1e25d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/16x9-duration-90-frame-79.png",
                "sha256": "00605db8755ff563f29eb9c61f45f88be5b7d6f93c182cd710ac2ab52fe1e25d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 30.478407118055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/16x9-duration-900-frame-13.png",
                "sha256": "9d87523da4d1e04563905ac0a9f820630513fc084af6e0342508a55c4f8d1e0e",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/16x9-duration-900-frame-93.png",
                "sha256": "00605db8755ff563f29eb9c61f45f88be5b7d6f93c182cd710ac2ab52fe1e25d",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/16x9-duration-900-frame-792.png",
                "sha256": "00605db8755ff563f29eb9c61f45f88be5b7d6f93c182cd710ac2ab52fe1e25d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/16x9-duration-900-frame-899.png",
                "sha256": "00605db8755ff563f29eb9c61f45f88be5b7d6f93c182cd710ac2ab52fe1e25d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 35.855794270833336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/9x16-duration-90-frame-10.png",
                "sha256": "4b22985ae1fc435f6b0a03522b60058e6eaacb5d856847f8f5e0236876b868ee",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/9x16-duration-90-frame-89.png",
                "sha256": "5150940cc775bccc09074177a9cc4aea68a082a3ddeec1385e9c8a416e79c42d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/9x16-duration-90-frame-79.png",
                "sha256": "5150940cc775bccc09074177a9cc4aea68a082a3ddeec1385e9c8a416e79c42d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 35.896484375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/9x16-duration-900-frame-13.png",
                "sha256": "8194e44e5b2effa3ea91fb7b93936029d04411781d9751a5407d2251484eec07",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/9x16-duration-900-frame-93.png",
                "sha256": "5150940cc775bccc09074177a9cc4aea68a082a3ddeec1385e9c8a416e79c42d",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/9x16-duration-900-frame-792.png",
                "sha256": "5150940cc775bccc09074177a9cc4aea68a082a3ddeec1385e9c8a416e79c42d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/9x16-duration-900-frame-899.png",
                "sha256": "5150940cc775bccc09074177a9cc4aea68a082a3ddeec1385e9c8a416e79c42d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 33.05902777777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/1x1-duration-90-frame-10.png",
                "sha256": "54000fcc19059a636a537ace27b8d6dd25df4c81e024d2acb175674e478ec332",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/1x1-duration-90-frame-89.png",
                "sha256": "ed6d813301b11160cee033a22495cd936ed60e41b31ab6a9b1e19a85052776f5",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/1x1-duration-90-frame-79.png",
                "sha256": "ed6d813301b11160cee033a22495cd936ed60e41b31ab6a9b1e19a85052776f5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 33.086154513888886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/1x1-duration-900-frame-13.png",
                "sha256": "70cb5066897c7b12422527e6234f5bf01f7779bca8347e2abb988273f4d25f62",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/1x1-duration-900-frame-93.png",
                "sha256": "ed6d813301b11160cee033a22495cd936ed60e41b31ab6a9b1e19a85052776f5",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/1x1-duration-900-frame-792.png",
                "sha256": "ed6d813301b11160cee033a22495cd936ed60e41b31ab6a9b1e19a85052776f5",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-wall-pullback/1x1-duration-900-frame-899.png",
                "sha256": "ed6d813301b11160cee033a22495cd936ed60e41b31ab6a9b1e19a85052776f5",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "gallery",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Camera pulls back from one card to a wall; headline readable, rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 14,
        "compared": 14,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "da2a486a50e8aa2bb1658c8b7baa71856b9be7d6a6ce7efb8269e594ac8098ae",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-pullback/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-pullback/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-pullback/16x9/detail.mp4",
      "bg": "#3a4d70",
      "posterFrame": 93,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f7855a6121d73f95d61b6f314008fa53be736fb0e96719cf6fc6b4b91ce89da0",
        "loop": "7209e609622551c3402bd87f237969fb04bea9279b4953583d9c3fb9c820ace9",
        "detail": "56b660c102f9a75ec535289624669bad4001002fcc3230afe80b1c81f4e659fa"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-pullback/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-pullback/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-pullback/9x16/detail.mp4",
      "bg": "#e7e0d5",
      "posterFrame": 93,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4ae64ce432d19ecbd1498965facede28adf2b159190dd5611ea3eefa27fb38d3",
        "loop": "917b9e507a6e03e0e288bc6d83007ff4937de5e578332e564c03efd6989e3590",
        "detail": "8ad7cf0e4a54d0ed80d03a8941e3c4b09907b94c9c02f7fe890331de25c60492"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-pullback/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-pullback/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-pullback/1x1/detail.mp4",
      "bg": "#e7e0d5",
      "posterFrame": 93,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "19137c1b97fb20b5123b5cfe77857ba99cf7e0e6060d61f7c85fe3034b596879",
        "loop": "d53d1ab2bbe830932542f3d9555361057d450b579005578fd36bd2febc44a1a6",
        "detail": "4a9c383646be7ae29beadc268d125c76d2629405a67cda5c0c3f15d9bc43a4d8"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/da2a486a50e8aa2bb1658c8b7baa71856b9be7d6a6ce7efb8269e594ac8098ae/index.mjs",
    "sha256": "da2a486a50e8aa2bb1658c8b7baa71856b9be7d6a6ce7efb8269e594ac8098ae",
    "bytes": 201418,
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
    "at": "2026-10-09T04:14:35.946Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
