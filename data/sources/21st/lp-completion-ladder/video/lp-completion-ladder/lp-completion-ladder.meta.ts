// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "workflow",
  "job": "process",
  "language": "product-ui",
  "mechanic": [
    "route"
  ],
  "looks": [
    {
      "id": "focus",
      "name": "Mechanism in focus",
      "props": {
        "showHeading": false
      }
    },
    {
      "id": "context",
      "name": "Mechanism with context",
      "props": {
        "showHeading": true
      }
    }
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "launch",
    "canonical",
    "completion-ladder",
    "systems",
    "workflow",
    "source-linked"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 150,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 132
    },
    "beats": [
      18,
      48,
      84,
      116
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
      "showBackground"
    ]
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 72,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "type": "text",
      "maxChars": 120,
      "role": "body"
    },
    {
      "key": "items",
      "type": "list",
      "role": "items"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "foreground": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "bodyFontFamily": "fonts.body",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "content",
      "prop": "transform",
      "from": "composed",
      "settledBy": 132,
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
    "sourceUrl": "docs/research/launch-videos-2026-10-06/library-expansion.md"
  },
  "defaults": {
    "title": "Progress you can follow",
    "subtitle": "Each completed step unlocks the next",
    "items": [
      "Read the brief",
      "Build the draft",
      "Check the result",
      "Ready to share"
    ],
    "accent": "#3D63FF",
    "secondary": "#B2B4B8",
    "foreground": "#19191D",
    "background": "#F8F8FA",
    "fontFamily": "Inter",
    "bodyFontFamily": "Inter",
    "monoFontFamily": "Geist Mono",
    "showHeading": false,
    "showBackground": false
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 72,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "label": "Subtitle",
      "type": "text",
      "max": 120,
      "role": "body"
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
      "key": "items",
      "label": "Items",
      "type": "list",
      "max": 6,
      "role": "items"
    },
    {
      "key": "showHeading",
      "label": "Show heading",
      "type": "boolean"
    },
    {
      "key": "showBackground",
      "label": "Show background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "foreground",
      "label": "Foreground",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    }
  ],
  "name": "Checklist Completion Ladder",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-completion-ladder",
    "bundleSha256": "d33d5d02a724fa1f31df8c4ddbc53599f8eb2e4cafb0348073b6899c8472019e",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:36:48.743Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/16x9-paper.png",
        "sha256": "d3f8d8d4b6243bc04576513dfae77c3f26d607fc501a2563cbcafac8265ab09d"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/16x9-night.png",
        "sha256": "f5218c13d16ec37d5ae562c415fca15eaf56b7177397b53730188c7daa6aa237"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/16x9-color.png",
        "sha256": "f82c8ccd5fae78790ae1226cd1b7f8550638d41436d12d7a35fa766360a8ae7d"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/9x16-paper.png",
        "sha256": "5004f23dfb70eb22e986bd2cc8ef3b4982fcad36f34f39d8e912bee878ad9824"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/9x16-night.png",
        "sha256": "c4adbb4cd6a4fedee7a6db440137bc5e151724e9de075880960658c60913716c"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/9x16-color.png",
        "sha256": "f5a3441001e612e0762e4545302f3057c40083d436457b265a1984292286cfe1"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/1x1-paper.png",
        "sha256": "2efa1cf4b93c43598dc20d510e41292baf2667627fcfa2e991749e2084263d79"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/1x1-night.png",
        "sha256": "72d696fe950bad6f9cff9c13d0b6a0cd948c9b36fb06e665cc04955e023975a7"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/1x1-color.png",
        "sha256": "d84a0e62cacfa3f983e5c1e752826726cff91314c0988599648f66c1fe3ff044"
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
          "lp-completion-ladder--16x9",
          "lp-completion-ladder--9x16",
          "lp-completion-ladder--1x1"
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
            "paperNight": 58.85590277777778,
            "paperColor": 5.862440321180555,
            "region": {
              "left": 223,
              "top": 140,
              "width": 1411,
              "height": 784
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 64.69186740451389,
            "paperColor": 7.538736979166667,
            "region": {
              "left": 108,
              "top": 400,
              "width": 840,
              "height": 1197
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 59.184543185763886,
            "paperColor": 5.747612847222222,
            "region": {
              "left": 121,
              "top": 313,
              "width": 800,
              "height": 445
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
            "occupancy": 0.7560656721536353,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7560656721536353,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7560656721536353,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6872106481481483,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6872106481481483,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6872106481481483,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4325575680660925,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4325575680660925,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4325575680660925,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 58.850802951388886,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 58.850802951388886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/16x9-duration-150-frame-18.png",
                "sha256": "b9a8b53560ddbf628dac9e1463a3cef067f31ce62cd61d8dbf7488d96ac49e94",
                "alphaMass": 282
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/16x9-duration-150-frame-132.png",
                "sha256": "8d5c84838e0e8f72c67e850ff9a9ba55e789157fa4b47305eead7367c89cc22f",
                "alphaMass": 101960
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/16x9-duration-150-frame-149.png",
                "sha256": "8d5c84838e0e8f72c67e850ff9a9ba55e789157fa4b47305eead7367c89cc22f",
                "alphaMass": 101960
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 58.850802951388886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/16x9-duration-900-frame-19.png",
                "sha256": "b9a8b53560ddbf628dac9e1463a3cef067f31ce62cd61d8dbf7488d96ac49e94",
                "alphaMass": 282
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/16x9-duration-900-frame-132.png",
                "sha256": "8d5c84838e0e8f72c67e850ff9a9ba55e789157fa4b47305eead7367c89cc22f",
                "alphaMass": 101960
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/16x9-duration-900-frame-792.png",
                "sha256": "8d5c84838e0e8f72c67e850ff9a9ba55e789157fa4b47305eead7367c89cc22f",
                "alphaMass": 101960
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/16x9-duration-900-frame-899.png",
                "sha256": "8d5c84838e0e8f72c67e850ff9a9ba55e789157fa4b47305eead7367c89cc22f",
                "alphaMass": 101960
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 84.53407118055556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/9x16-duration-150-frame-18.png",
                "sha256": "63385ba5d061f1f185e73f3aaba1b6df2d5277683699390b333606c3a6d5302c",
                "alphaMass": 128
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/9x16-duration-150-frame-132.png",
                "sha256": "b688fc759d9b5e72f02ef0b21f4fefe453a2e60340e30656b288edcf86897ac6",
                "alphaMass": 95776
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/9x16-duration-150-frame-149.png",
                "sha256": "b688fc759d9b5e72f02ef0b21f4fefe453a2e60340e30656b288edcf86897ac6",
                "alphaMass": 95776
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 84.53407118055556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/9x16-duration-900-frame-19.png",
                "sha256": "63385ba5d061f1f185e73f3aaba1b6df2d5277683699390b333606c3a6d5302c",
                "alphaMass": 128
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/9x16-duration-900-frame-132.png",
                "sha256": "b688fc759d9b5e72f02ef0b21f4fefe453a2e60340e30656b288edcf86897ac6",
                "alphaMass": 95776
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/9x16-duration-900-frame-792.png",
                "sha256": "b688fc759d9b5e72f02ef0b21f4fefe453a2e60340e30656b288edcf86897ac6",
                "alphaMass": 95776
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/9x16-duration-900-frame-899.png",
                "sha256": "b688fc759d9b5e72f02ef0b21f4fefe453a2e60340e30656b288edcf86897ac6",
                "alphaMass": 95776
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 41.093098958333336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/1x1-duration-150-frame-18.png",
                "sha256": "3aa79003c6a7566f6d489ca2912a818b6be2a8bfa22fb51755076dcaf8bf29b4",
                "alphaMass": 143
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/1x1-duration-150-frame-132.png",
                "sha256": "0c33a13742c4a844c1af6c7d1ca60a1d0021a9d81d85a05cbf0092518215c270",
                "alphaMass": 57921
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/1x1-duration-150-frame-149.png",
                "sha256": "0c33a13742c4a844c1af6c7d1ca60a1d0021a9d81d85a05cbf0092518215c270",
                "alphaMass": 57921
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 41.093098958333336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/1x1-duration-900-frame-19.png",
                "sha256": "3aa79003c6a7566f6d489ca2912a818b6be2a8bfa22fb51755076dcaf8bf29b4",
                "alphaMass": 143
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/1x1-duration-900-frame-132.png",
                "sha256": "0c33a13742c4a844c1af6c7d1ca60a1d0021a9d81d85a05cbf0092518215c270",
                "alphaMass": 57921
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/1x1-duration-900-frame-792.png",
                "sha256": "0c33a13742c4a844c1af6c7d1ca60a1d0021a9d81d85a05cbf0092518215c270",
                "alphaMass": 57921
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/lp-completion-ladder/1x1-duration-900-frame-899.png",
                "sha256": "0c33a13742c4a844c1af6c7d1ca60a1d0021a9d81d85a05cbf0092518215c270",
                "alphaMass": 57921
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
        "note": "Checklist steps check off up a ladder to a Ready badge; accent is brand blue."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 15,
        "compared": 15,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "d33d5d02a724fa1f31df8c4ddbc53599f8eb2e4cafb0348073b6899c8472019e",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-completion-ladder/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-completion-ladder/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-completion-ladder/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7c4b5bee268f79b20df4cc35de786d3d33aa2cea5f78a33bd90da95ad805fa84",
        "loop": "83c3373b875cf23ad47df49552d2963321a80fd460f8f3db549445ce895324da",
        "detail": "3c404a929c0c2ac0b1474e5bab3819207a5bdd7f486fd1368bd6f1df7ec0912b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-completion-ladder/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-completion-ladder/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-completion-ladder/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4c227e10b6e2dc628ec6d253acf8823c43afc2ad92cd8b595bf6ecf7580be4da",
        "loop": "a46571766b67668b03ed2b9dd541942d3bc752aec5c81d3b5e5d71da5111637f",
        "detail": "d4565a72f25ebd549622f3238504e4071deeaafa64e8a7fba4e677367f2ba054"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-completion-ladder/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-completion-ladder/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-completion-ladder/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5f45c230f42274e238ca90233cc42d7ba3658d569c2ed98c2b7e80ca41127f8e",
        "loop": "be81ef959cdcdf7ad42c42666bd68093388d1b5d3b0f341cecc2e08d41081ac8",
        "detail": "d6aff9e1f4b99b0f782140d6f06dcd6bee8426e06a2dc773c0901bba42e40e18"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d33d5d02a724fa1f31df8c4ddbc53599f8eb2e4cafb0348073b6899c8472019e/index.mjs",
    "sha256": "d33d5d02a724fa1f31df8c4ddbc53599f8eb2e4cafb0348073b6899c8472019e",
    "bytes": 298409,
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
    "at": "2026-10-09T03:21:40.063Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
