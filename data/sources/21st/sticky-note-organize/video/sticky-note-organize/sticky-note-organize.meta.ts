// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/board",
  "tags": [
    "launch",
    "product",
    "introducing",
    "notes",
    "organize",
    "board",
    "scatter",
    "grid",
    "planning"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 111,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 100
    },
    "beats": [
      16,
      40,
      72
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
    "fill": "region",
    "defaultRegion": {
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "full",
    "backdrop": []
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 54,
      "role": "headline"
    },
    {
      "key": "notes",
      "type": "list",
      "role": "items"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "fontFamily": "fonts.heading",
    "surfaceColor": "colors.background",
    "textColor": "colors.text"
  },
  "motionBeats": [
    {
      "target": "content",
      "prop": "transform",
      "from": "translated",
      "settledBy": 100,
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/launch-videos-2026-10-06/patterns.md"
  },
  "job": "process",
  "language": "product-ui",
  "mechanic": [
    "progress"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "title": "Turn scattered ideas into a clear plan",
    "notes": [
      "Find the opportunity",
      "Sketch the first idea",
      "Explore the details",
      "Make a prototype",
      "Collect feedback",
      "Share the result"
    ],
    "theme": "dark",
    "accent": "#7C91FF",
    "fontFamily": "Geist",
    "surfaceColor": "#141417",
    "textColor": "#F4F4F5"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 54,
      "role": "headline"
    },
    {
      "key": "notes",
      "label": "Notes",
      "type": "list",
      "max": 6,
      "role": "items"
    },
    {
      "key": "theme",
      "label": "Theme",
      "type": "select",
      "options": [
        "light",
        "dark"
      ]
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "textColor",
      "label": "Text color",
      "type": "color",
      "brand": "colors.text"
    }
  ],
  "name": "Sticky Note Organize",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "sticky-note-organize",
    "bundleSha256": "5b4836f831bb534e9d6a621592e9a1ae9b978ba7f1a4e076b170b000813f20ab",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:08:30.024Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/16x9-paper.png",
        "sha256": "bed2f45d82d4e47aa1ebe7a3c3ba6e0f090216e70bfffaef6e74412c807fd1f4"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/16x9-night.png",
        "sha256": "73635dde2f98e8f02cc4bb1fc150e09e455065f878c14de94158481e281aa2ae"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/16x9-color.png",
        "sha256": "888d84324054d2fe501bd3e31f120637ceb8cb34c13e101b4db455b4d09d1c99"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/9x16-paper.png",
        "sha256": "965553a9268cbd7388f30305a7e747d9f8b340472a6df9f7c8f7cb67d0244a2d"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/9x16-night.png",
        "sha256": "03857e8546abbaaa3064ab82736fa32051f1ce0b5c981f83ccdcc3efe87d2190"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/9x16-color.png",
        "sha256": "76d5b861d54ecfcb3955a24f143d068d023369f024d0dfa60a6bbf7d6ce2895d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/1x1-paper.png",
        "sha256": "2559c01ffe23c0981a2e758e8d970620b7f870972119c30bcd28032184ecb04d"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/1x1-night.png",
        "sha256": "19c9f88f06bc32c004c11de42a271ee7c3cf704480dab2801c7f36af15177b2f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/1x1-color.png",
        "sha256": "10972b8a502c7c4e98a3c1753973d3354c1ea31b08474c18868f13a00f886c83"
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
          "sticky-note-organize--16x9",
          "sticky-note-organize--9x16",
          "sticky-note-organize--1x1"
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
            "paperNight": 124.29494900173611,
            "paperColor": 13.244222005208334,
            "region": {
              "left": 125,
              "top": 141,
              "width": 1670,
              "height": 840
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 120.818359375,
            "paperColor": 17.87529839409722,
            "region": {
              "left": 67,
              "top": 254,
              "width": 946,
              "height": 1448
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 121.08810763888889,
            "paperColor": 14.399983723958334,
            "region": {
              "left": 67,
              "top": 143,
              "width": 946,
              "height": 838
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
            "occupancy": 0.9576236776860952,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9553409037226004,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9587650646678426,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9362161788583748,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9349230625892334,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9129400860138296,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9632279409248841,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9597796308738403,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9632279409248841,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 39.078450520833336,
        "frames": [
          15,
          100,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 111,
            "averageChannelDifference": 40.70713975694444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/16x9-duration-111-frame-13.png",
                "sha256": "43d765125dfa2df35d05c4b7e6881fdcf72fcf2cb35a5be195dea69f03ddcb8d",
                "alphaMass": 85758
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/16x9-duration-111-frame-100.png",
                "sha256": "cd42a60c66c49eb3a5e596bfd62229a97d4add1ef88fb253656ce597c7d636c4",
                "alphaMass": 294961
              },
              {
                "frame": 97,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/16x9-duration-111-frame-97.png",
                "sha256": "cd42a60c66c49eb3a5e596bfd62229a97d4add1ef88fb253656ce597c7d636c4",
                "alphaMass": 294961
              },
              {
                "frame": 110,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/16x9-duration-111-frame-110.png",
                "sha256": "cd42a60c66c49eb3a5e596bfd62229a97d4add1ef88fb253656ce597c7d636c4",
                "alphaMass": 294961
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 39.078450520833336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/16x9-duration-900-frame-15.png",
                "sha256": "13e8fbdad03324827912b1675f82de13f761781dcdfb19e7fab1c4dd4b9063a7",
                "alphaMass": 107586
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/16x9-duration-900-frame-100.png",
                "sha256": "cd42a60c66c49eb3a5e596bfd62229a97d4add1ef88fb253656ce597c7d636c4",
                "alphaMass": 294961
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/16x9-duration-900-frame-792.png",
                "sha256": "cd42a60c66c49eb3a5e596bfd62229a97d4add1ef88fb253656ce597c7d636c4",
                "alphaMass": 294961
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/16x9-duration-900-frame-899.png",
                "sha256": "cd42a60c66c49eb3a5e596bfd62229a97d4add1ef88fb253656ce597c7d636c4",
                "alphaMass": 294961
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 111,
            "averageChannelDifference": 44.818033854166664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/9x16-duration-111-frame-13.png",
                "sha256": "758936c28c487065c96f0b6f1db5a93388029d6d6c51ca30cf4fe21739635a46",
                "alphaMass": 85928
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/9x16-duration-111-frame-100.png",
                "sha256": "da3a6011926636d2d73169fabd4c74fc497f4a52e374988560ee3b2b57ad9e8c",
                "alphaMass": 295206
              },
              {
                "frame": 97,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/9x16-duration-111-frame-97.png",
                "sha256": "da3a6011926636d2d73169fabd4c74fc497f4a52e374988560ee3b2b57ad9e8c",
                "alphaMass": 295206
              },
              {
                "frame": 110,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/9x16-duration-111-frame-110.png",
                "sha256": "da3a6011926636d2d73169fabd4c74fc497f4a52e374988560ee3b2b57ad9e8c",
                "alphaMass": 295206
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 43.83734809027778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/9x16-duration-900-frame-15.png",
                "sha256": "6b440465067bd07855a3b2a305f316e2634faf443821f11ceb7890c2d116c17c",
                "alphaMass": 107854
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/9x16-duration-900-frame-100.png",
                "sha256": "da3a6011926636d2d73169fabd4c74fc497f4a52e374988560ee3b2b57ad9e8c",
                "alphaMass": 295206
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/9x16-duration-900-frame-792.png",
                "sha256": "da3a6011926636d2d73169fabd4c74fc497f4a52e374988560ee3b2b57ad9e8c",
                "alphaMass": 295206
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/9x16-duration-900-frame-899.png",
                "sha256": "da3a6011926636d2d73169fabd4c74fc497f4a52e374988560ee3b2b57ad9e8c",
                "alphaMass": 295206
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 111,
            "averageChannelDifference": 43.35297309027778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/1x1-duration-111-frame-13.png",
                "sha256": "3ccc89fafac2b3f4c517dd4b4c8f41f48cbc19f07f9af31e46ab6e8f03271699",
                "alphaMass": 84569
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/1x1-duration-111-frame-100.png",
                "sha256": "a0fe0f654a62902c53e842eec5871e1a387fd2ac8b4419b23b73fe5b40844c09",
                "alphaMass": 287966
              },
              {
                "frame": 97,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/1x1-duration-111-frame-97.png",
                "sha256": "a0fe0f654a62902c53e842eec5871e1a387fd2ac8b4419b23b73fe5b40844c09",
                "alphaMass": 287966
              },
              {
                "frame": 110,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/1x1-duration-111-frame-110.png",
                "sha256": "a0fe0f654a62902c53e842eec5871e1a387fd2ac8b4419b23b73fe5b40844c09",
                "alphaMass": 287966
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 41.79047309027778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/1x1-duration-900-frame-15.png",
                "sha256": "99e6c1baaaa6bf662f54749a0465341c5cfa9e44bc405f497d436046885472ca",
                "alphaMass": 105902
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/1x1-duration-900-frame-100.png",
                "sha256": "a0fe0f654a62902c53e842eec5871e1a387fd2ac8b4419b23b73fe5b40844c09",
                "alphaMass": 287966
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/1x1-duration-900-frame-792.png",
                "sha256": "a0fe0f654a62902c53e842eec5871e1a387fd2ac8b4419b23b73fe5b40844c09",
                "alphaMass": 287966
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/sticky-note-organize/1x1-duration-900-frame-899.png",
                "sha256": "a0fe0f654a62902c53e842eec5871e1a387fd2ac8b4419b23b73fe5b40844c09",
                "alphaMass": 287966
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
        "note": "Scattered notes organize into a six-step plan; process, not gallery: job tag should be process."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 12,
        "compared": 12,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "5b4836f831bb534e9d6a621592e9a1ae9b978ba7f1a4e076b170b000813f20ab",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.024252Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/sticky-note-organize/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/sticky-note-organize/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/sticky-note-organize/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 100,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "768820bac4a44c9a0d12666a428a3f7158c6e1c7a3f4347d46e0f9adf1053997",
        "loop": "9fbfc08280b42442beb35b6592eca44edb957ca215e9723ee269373638e64a7d",
        "detail": "20d76abd870ef2f1a1498ddacbec41bf343fbba3fe09f9dc337db4c39f234f27"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/sticky-note-organize/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/sticky-note-organize/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/sticky-note-organize/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 100,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "e9b1ca30c5f2e47112fd58891bfcd04ea8c3ce318e96a016ca4ea87a0d483b6d",
        "loop": "7bcd45bd72daaebcd9cbb4facf4b9f218b8fe7931a101e62ad487a98406cbc57",
        "detail": "94f06708c3d61f6ff99c3ff97150ff5b6da6e3731e473d3210058fcb461d5b9c"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/sticky-note-organize/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/sticky-note-organize/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/sticky-note-organize/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 100,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "c4c789845944f9f22946acd8782b74897910361b477202e30b3088b71275e062",
        "loop": "ffafb77b807ecfeaf3e3583093f1ba9bcea991cb8f875f2879fa1c5158b666b7",
        "detail": "f1e91f7321231fa2af07643a08832fffe201f3c29f23dd28981af3cece4eaa78"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/5b4836f831bb534e9d6a621592e9a1ae9b978ba7f1a4e076b170b000813f20ab/index.mjs",
    "sha256": "5b4836f831bb534e9d6a621592e9a1ae9b978ba7f1a4e076b170b000813f20ab",
    "bytes": 161449,
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
    "at": "2026-10-07T02:34:06.959Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
