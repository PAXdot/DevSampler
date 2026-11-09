// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/motion-gallery",
  "job": "logos",
  "language": "isometric",
  "mechanic": [
    "iso-wall-light-wave"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "logos",
    "iso-wall-light-wave",
    "isometric",
    "wave",
    "icon"
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
      "in": 99,
      "out": 0
    },
    "markers": {
      "settled": 99
    },
    "beats": [
      0,
      25,
      50,
      74,
      99
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
      "key": "title",
      "type": "text",
      "maxChars": 16,
      "role": "headline"
    },
    {
      "key": "titleAccent",
      "type": "text",
      "maxChars": 16,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 56,
      "role": "body"
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
      "target": "iso-wall-light-wave",
      "prop": "transform",
      "from": "enter",
      "settledBy": 99,
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
    "ink": "#EEF6F4",
    "accent": "#C6FF4D",
    "secondary": "#4DE1FF",
    "paper": "#06080B",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "lumen / blocks",
    "title": "120 blocks.",
    "titleAccent": "One canvas.",
    "sub": "Docs, charts, agents and apps, live side by side."
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
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 16,
      "role": "headline"
    },
    {
      "key": "titleAccent",
      "label": "Title accent",
      "type": "text",
      "max": 16,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 56,
      "role": "body"
    }
  ],
  "name": "Isometric Tile Wave",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-wall-iso-wave",
    "bundleSha256": "69730af0691e3484430af64c588967b73c5b5522020cbc712f86a149bcbef905",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:48:43.295Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/16x9-paper.png",
        "sha256": "752064c93b90185a489a3606f3341ccd2c5bb2c4cf9833d4317bdeaf72076573"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/16x9-night.png",
        "sha256": "8d557fff9329997e9f628961509fe1134fe7d6b6d4d5bfdf9c459f5e4c34434d"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/16x9-color.png",
        "sha256": "f36cdcd7b9535bdcaa0fded6f5517f2d5394b7ead27d8f3737843675430196e3"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/9x16-paper.png",
        "sha256": "fc7e1c5f44302ff1c812e0bb236999adedce860ce2340cfcae6491964ea5e652"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/9x16-night.png",
        "sha256": "0cecddd99e1f004f156e23b851a96747aac56de1ad35da86c5f87185ef46d69e"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/9x16-color.png",
        "sha256": "c40af9bdb52720b2cec1809a48f4d4fc842f2ed861f9733a475a25b4e61df78d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/1x1-paper.png",
        "sha256": "b189e59e3067705ac022d2135aeb69f042bf11adefc192ae94fe5f49648c0692"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/1x1-night.png",
        "sha256": "5ad677af912d73af33c634a461d41396788ff98ad1a763e22d6ea9131efe22f1"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/1x1-color.png",
        "sha256": "5c9b104ac05522121b7a75145812cedd5491e1cf1801f3daf1d60a61c4292563"
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
          "mg-wall-iso-wave--16x9",
          "mg-wall-iso-wave--9x16",
          "mg-wall-iso-wave--1x1"
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
            "paperNight": 10.629801432291666,
            "paperColor": 5.360514322916667,
            "region": {
              "left": 104,
              "top": 140,
              "width": 1816,
              "height": 940
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 27.72262912326389,
            "paperColor": 14.194254557291666,
            "region": {
              "left": 32,
              "top": 158,
              "width": 986,
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
            "paperNight": 15.7138671875,
            "paperColor": 8.100748697916666,
            "region": {
              "left": 69,
              "top": 77,
              "width": 962,
              "height": 972
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
            "occupancy": 1.1667025349234346,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1667025349234346,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1667025349234346,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0917127267573699,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0930605202471937,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0930605202471937,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1338111490595326,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.136148904006047,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.136148904006047,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.357096354166666,
        "frames": [
          14,
          99,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 9.359049479166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/16x9-duration-90-frame-10.png",
                "sha256": "cd4e6a75c495ce191432dea4cd43805c6350adbeceb1dea0950bcd9426de006e",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/16x9-duration-90-frame-89.png",
                "sha256": "094a5753e340db1c3e55d2837761c9bf4002077c3046ba96ad77c63db10eb78a",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/16x9-duration-90-frame-79.png",
                "sha256": "7127f14526617be6a4471701e82a3f610b2cf7b5ebe995804370a9b253d9681a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 9.357096354166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/16x9-duration-900-frame-14.png",
                "sha256": "5a04778f82b3c6eda8b332a4d3d141b4f94f1cdb5981d166513916891bfd4089",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/16x9-duration-900-frame-99.png",
                "sha256": "7127f14526617be6a4471701e82a3f610b2cf7b5ebe995804370a9b253d9681a",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/16x9-duration-900-frame-792.png",
                "sha256": "7127f14526617be6a4471701e82a3f610b2cf7b5ebe995804370a9b253d9681a",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/16x9-duration-900-frame-899.png",
                "sha256": "7127f14526617be6a4471701e82a3f610b2cf7b5ebe995804370a9b253d9681a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 9.95486111111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/9x16-duration-90-frame-10.png",
                "sha256": "851cbd405d6668c6b53de9058ce9c87ab266648e0c97eb0d4c2259b65ca6e276",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/9x16-duration-90-frame-89.png",
                "sha256": "333fb318a276ccbc5e5f40588e9aedab6ead2078e1eea1db2ac95a07a3890ea7",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/9x16-duration-90-frame-79.png",
                "sha256": "333fb318a276ccbc5e5f40588e9aedab6ead2078e1eea1db2ac95a07a3890ea7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 9.95681423611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/9x16-duration-900-frame-14.png",
                "sha256": "c3fd572599215cae336e6719b0dc55f83a17dd7f5bf00b87b7f57703dbcec303",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/9x16-duration-900-frame-99.png",
                "sha256": "333fb318a276ccbc5e5f40588e9aedab6ead2078e1eea1db2ac95a07a3890ea7",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/9x16-duration-900-frame-792.png",
                "sha256": "333fb318a276ccbc5e5f40588e9aedab6ead2078e1eea1db2ac95a07a3890ea7",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/9x16-duration-900-frame-899.png",
                "sha256": "333fb318a276ccbc5e5f40588e9aedab6ead2078e1eea1db2ac95a07a3890ea7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 7.3828125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/1x1-duration-90-frame-10.png",
                "sha256": "fe2b2a35306371050c0c79c3f4e820a607cc3b3afd6cc04b37a1e86dd1eb2587",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/1x1-duration-90-frame-89.png",
                "sha256": "e0dd1c254f240511d444a6a06fd27652e0a7a76d4b31059b32b4934640ad2ee0",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/1x1-duration-90-frame-79.png",
                "sha256": "dab2a17c66f295f76510e78bd9550cabf304c7b76bcaeb81f6ae47d67045ec91",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 7.383355034722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/1x1-duration-900-frame-14.png",
                "sha256": "7c97387d03d107ba2e86224b4628942792e0127f9c671d53ca51a81c5844ab97",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/1x1-duration-900-frame-99.png",
                "sha256": "e0dd1c254f240511d444a6a06fd27652e0a7a76d4b31059b32b4934640ad2ee0",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/1x1-duration-900-frame-792.png",
                "sha256": "e0dd1c254f240511d444a6a06fd27652e0a7a76d4b31059b32b4934640ad2ee0",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-wall-iso-wave/1x1-duration-900-frame-899.png",
                "sha256": "e0dd1c254f240511d444a6a06fd27652e0a7a76d4b31059b32b4934640ad2ee0",
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
        "note": "Isometric tile wave with a glowing hero tile; headline readable, rebrands distinct."
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
      "bundleSha256": "69730af0691e3484430af64c588967b73c5b5522020cbc712f86a149bcbef905",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-iso-wave/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-iso-wave/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-iso-wave/16x9/detail.mp4",
      "bg": "#06080b",
      "posterFrame": 99,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e8ed088026773ccc3013b3693c478d70ffc00767cf1db63257277d1b2292929f",
        "loop": "8580644699848e9182735df697713ac536aa7e2956210a0f1ad65d0eae0e3f7d",
        "detail": "717dc799b5cb1c321dc5658cc9ed1e5c64d6176923cc52f54775d8775ec53cf7"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-iso-wave/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-iso-wave/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-iso-wave/9x16/detail.mp4",
      "bg": "#06080b",
      "posterFrame": 99,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0c45692e15e0bf6b9d94698b0840570dfd7cdf2482d819125659028dfb60d120",
        "loop": "5cebd5c265d32070e346e2a53b2f81ea74283b0ec75733c576f482913aabf64a",
        "detail": "aaff7f25335cadf7e3548c71e10b8a9490d3d97ae4cdceb4e9f4c4fa36da4566"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-wall-iso-wave/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-wall-iso-wave/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-wall-iso-wave/1x1/detail.mp4",
      "bg": "#06080b",
      "posterFrame": 99,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "1da3c4dceee212df58f296a08dadb2dfde352138676a5bde305842033813a190",
        "loop": "723b995de8710c87094a5e656542adb8c4e14744720a89e5cae5de96b55f86c2",
        "detail": "6e42fe01a4256a7a580c0867a7ff364578866223b2296494f1324b15b120902c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/69730af0691e3484430af64c588967b73c5b5522020cbc712f86a149bcbef905/index.mjs",
    "sha256": "69730af0691e3484430af64c588967b73c5b5522020cbc712f86a149bcbef905",
    "bytes": 175125,
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
    "at": "2026-10-09T04:12:21.721Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
