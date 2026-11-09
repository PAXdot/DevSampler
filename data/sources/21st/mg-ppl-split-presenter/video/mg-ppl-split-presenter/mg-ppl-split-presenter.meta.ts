// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "split-presenter-synced-captions"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "split-presenter-synced-captions",
    "presenter",
    "split-screen",
    "captions"
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
      "in": 132,
      "out": 0
    },
    "markers": {
      "settled": 132
    },
    "beats": [
      0,
      33,
      66,
      99,
      132
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
      "maxChars": 22,
      "role": "name"
    },
    {
      "key": "line1",
      "type": "text",
      "maxChars": 40,
      "role": "caption"
    },
    {
      "key": "line2",
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
      "target": "split-presenter-synced-captions",
      "prop": "transform",
      "from": "enter",
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
    "sourceUrl": "docs/research/launch-videos-2026-10-06/README.md"
  },
  "defaults": {
    "ink": "#1D1A16",
    "accent": "#3D63FF",
    "secondary": "#D6F36A",
    "paper": "#F2EDE4",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "name": "Maya, Lumen",
    "line1": "Ask Lumen to sum up your week,",
    "line2": "and it writes the update for you."
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
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 22,
      "role": "name"
    },
    {
      "key": "line1",
      "label": "Line 1",
      "type": "text",
      "max": 40,
      "role": "caption"
    },
    {
      "key": "line2",
      "label": "Line 2",
      "type": "text",
      "max": 40,
      "role": "caption"
    }
  ],
  "name": "Presenter And Demo Split",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-ppl-split-presenter",
    "bundleSha256": "bbda4f1ac5973ef876904b447edcfe9e364746ac3e450d2ee27b74ef7b201ef7",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:47:10.346Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/16x9-paper.png",
        "sha256": "f2c4fd6dd2b610b23b104615e095bf73a29ef3538008fa530439279f927d90f9"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/16x9-night.png",
        "sha256": "ba85ea297246b56e2e53420dbd8eed295ea4356573fff4b6324304d953120997"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/16x9-color.png",
        "sha256": "ef54e0b603774ac3abb647f7b791969a9fcb42cf814162214bdb8264c6d65d5e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/9x16-paper.png",
        "sha256": "776e5e2dd4e01988a4650cf4c04a8f5e2b980bc740d0a091f1643e479ee40b59"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/9x16-night.png",
        "sha256": "b54d3e864318eaa8cbaaf70f107f4b621ffc4160f11ce2fe1de979501a0db78c"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/9x16-color.png",
        "sha256": "2fc41079fef59999f8bb3ed1fe3bf589887d1883d9f08e1a2f38bb9ec5a80025"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/1x1-paper.png",
        "sha256": "932ab12af627d8d3ec50f5d77a3bd2446700d18d3aca6b1dab8f7391fa10f4c1"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/1x1-night.png",
        "sha256": "7b9bb10ed273a0ac162d9dc418fbeeb089a15deaf25d6df399f5f3d99137e1ff"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/1x1-color.png",
        "sha256": "150c209df78b25192c538e34414e42484c54eb775dafad1b50c33889bfa07cda"
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
          "mg-ppl-split-presenter--16x9",
          "mg-ppl-split-presenter--9x16",
          "mg-ppl-split-presenter--1x1"
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
            "paperNight": 7.155490451388889,
            "paperColor": 3.847195095486111,
            "region": {
              "left": 42,
              "top": 64,
              "width": 1835,
              "height": 966
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 14.897786458333334,
            "paperColor": 9.904242621527779,
            "region": {
              "left": 70,
              "top": 133,
              "width": 938,
              "height": 1700
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 17.813585069444443,
            "paperColor": 6.618516710069445,
            "region": {
              "left": 23,
              "top": 53,
              "width": 1034,
              "height": 873
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
            "occupancy": 1.2115173519253384,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.209009034426528,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2052465581783127,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0898537012541645,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0872893396041547,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0347199257789539,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0968031760029116,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0942904539502132,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0905213708711654,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.664822048611111,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 4.670464409722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/16x9-duration-90-frame-10.png",
                "sha256": "222146dd4a2c0307686955de99733cd91d7044ce3b4008474e8dbb786ce802ff",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/16x9-duration-90-frame-89.png",
                "sha256": "b0f9128e8b9f30627924a9d81c31c7ecdc2a8c0adf1d831f353fa4703b6a72ae",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/16x9-duration-90-frame-79.png",
                "sha256": "b0f9128e8b9f30627924a9d81c31c7ecdc2a8c0adf1d831f353fa4703b6a72ae",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 4.664822048611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/16x9-duration-900-frame-19.png",
                "sha256": "65987da385e05ad1dd8bbe5dff706a8b77b57a4f403b719139cf5f3d0273c183",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/16x9-duration-900-frame-132.png",
                "sha256": "b0f9128e8b9f30627924a9d81c31c7ecdc2a8c0adf1d831f353fa4703b6a72ae",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/16x9-duration-900-frame-792.png",
                "sha256": "b0f9128e8b9f30627924a9d81c31c7ecdc2a8c0adf1d831f353fa4703b6a72ae",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/16x9-duration-900-frame-899.png",
                "sha256": "b0f9128e8b9f30627924a9d81c31c7ecdc2a8c0adf1d831f353fa4703b6a72ae",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 5.5224609375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/9x16-duration-90-frame-10.png",
                "sha256": "8c3d3b0ba6ff57bbd6252eee66ded62bd0ce9bb91f8c06f3cf5d1d99c262efa3",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/9x16-duration-90-frame-89.png",
                "sha256": "7b1f871e455365d323e08326e11edf72eb821fb22fdaf79b702d5765c595e09f",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/9x16-duration-90-frame-79.png",
                "sha256": "7b1f871e455365d323e08326e11edf72eb821fb22fdaf79b702d5765c595e09f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 5.505316840277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/9x16-duration-900-frame-19.png",
                "sha256": "77dd7c02748ca279c276da34e3168fce0e0914d79fe93e98e200c1ad0d7a7927",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/9x16-duration-900-frame-132.png",
                "sha256": "7b1f871e455365d323e08326e11edf72eb821fb22fdaf79b702d5765c595e09f",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/9x16-duration-900-frame-792.png",
                "sha256": "7b1f871e455365d323e08326e11edf72eb821fb22fdaf79b702d5765c595e09f",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/9x16-duration-900-frame-899.png",
                "sha256": "7b1f871e455365d323e08326e11edf72eb821fb22fdaf79b702d5765c595e09f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 5.739149305555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/1x1-duration-90-frame-10.png",
                "sha256": "5bdeb6fa72ec7eb370b8d829067fe97d3e414579ba5a391322b003052e9dabb5",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/1x1-duration-90-frame-89.png",
                "sha256": "44463a5c7c337498f6f368375afab7a04975433f5ff105e0c3a882f20de9f15b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/1x1-duration-90-frame-79.png",
                "sha256": "44463a5c7c337498f6f368375afab7a04975433f5ff105e0c3a882f20de9f15b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 5.731011284722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/1x1-duration-900-frame-19.png",
                "sha256": "0b6def2661a263d8df8281468e1058b7d4e76678ce981f76eace9f9af8015ad6",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/1x1-duration-900-frame-132.png",
                "sha256": "44463a5c7c337498f6f368375afab7a04975433f5ff105e0c3a882f20de9f15b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/1x1-duration-900-frame-792.png",
                "sha256": "44463a5c7c337498f6f368375afab7a04975433f5ff105e0c3a882f20de9f15b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ppl-split-presenter/1x1-duration-900-frame-899.png",
                "sha256": "44463a5c7c337498f6f368375afab7a04975433f5ff105e0c3a882f20de9f15b",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "product-ui",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Presenter beside a chat demo with caption; readable, rebrands recolor accents and type."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 53,
        "compared": 53,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "bbda4f1ac5973ef876904b447edcfe9e364746ac3e450d2ee27b74ef7b201ef7",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ppl-split-presenter/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ppl-split-presenter/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ppl-split-presenter/16x9/detail.mp4",
      "bg": "#f2ede4",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "b632694decef2418f3faa3f4f421e3100bbda22a46032c587925263695765df1",
        "loop": "65e1780bf7918c02e072d2d5e17d791905b78827fc164582556358bb649ff3e5",
        "detail": "7e1e6a2daffd34801dc2011135430a357a638856adca13dcf3cd925bb03ca336"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ppl-split-presenter/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ppl-split-presenter/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ppl-split-presenter/9x16/detail.mp4",
      "bg": "#f2ede4",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ecced472f7b8fd15ae80e7557693fde973edef76e1a35baf1dca7ea3266ca61a",
        "loop": "18c1b0752de99bfa1bbbce7334e880612d1959fe532d7a301d237feba38edc24",
        "detail": "14d049ea995da8b13fcb9621ed883f35c7606a0d0182f77025e6982bfc040d6c"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ppl-split-presenter/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ppl-split-presenter/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ppl-split-presenter/1x1/detail.mp4",
      "bg": "#f2ede4",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "077786fb8430e620d3f3cc5f14e471a550d08e890ab0e1452ea8252085f51a95",
        "loop": "4feb1091116cf46836ba4fc8c037506df9c043dcc8043fdf4568336a268df0e4",
        "detail": "36c9a331d5102cb09c973f961d4dedcbbec64b28e04e2bf0bab5eafd47cefa2e"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/bbda4f1ac5973ef876904b447edcfe9e364746ac3e450d2ee27b74ef7b201ef7/index.mjs",
    "sha256": "bbda4f1ac5973ef876904b447edcfe9e364746ac3e450d2ee27b74ef7b201ef7",
    "bytes": 177563,
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
    "at": "2026-10-09T04:00:29.751Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
