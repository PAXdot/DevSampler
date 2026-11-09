// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "product-ui",
  "mechanic": [
    "caption-lift-into-safe-zone"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "caption-lift-into-safe-zone",
    "captions",
    "safe-zone",
    "vertical",
    "shorts"
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
      "key": "caption",
      "type": "text",
      "maxChars": 44,
      "role": "caption"
    },
    {
      "key": "highlight",
      "type": "text",
      "maxChars": 18,
      "role": "headline"
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
      "target": "caption-lift-into-safe-zone",
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
    "ink": "#FFFFFF",
    "accent": "#FFE14A",
    "secondary": "#7CFFB2",
    "paper": "#0C0D10",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": false,
    "caption": "Your docs, your code, your team, in",
    "highlight": "one place."
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
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 44,
      "role": "caption"
    },
    {
      "key": "highlight",
      "label": "Highlight",
      "type": "text",
      "max": 18,
      "role": "headline"
    }
  ],
  "name": "Safe Zone Captions",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-cap-safe-zone",
    "bundleSha256": "7c1c49b0b6c81272f7af9990514c4966dd6fc2759c801ddfda5a1cce27ea0bb7",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:43:43.414Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/16x9-paper.png",
        "sha256": "5488778a94a371c723f11413d9840bd75eb35f7b9305b611b8ae0f6e7be476ae"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/16x9-night.png",
        "sha256": "b11259fa78b94c241a18ff3f68d01e10befcf30323fbd8580170e454fe1d50ad"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/16x9-color.png",
        "sha256": "c054c0fa0806acc5495ce8d8b1d6f170b163568634cde68b6888387746cabe3a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/9x16-paper.png",
        "sha256": "6c0d838ff49f6954c6d7bfe23fa6e50a97f3f6915e41190dcf9f5c394f3970b9"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/9x16-night.png",
        "sha256": "126d9ef68d777f371a5d878b745b9b16e4399e595f22cc31291aac4e8ab2d68e"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/9x16-color.png",
        "sha256": "56c179b0a96e2d796920870ed9b5533bb1624ab111a79cf177b0ee5276cad709"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/1x1-paper.png",
        "sha256": "a1383aa6a2a2b21ad929b7d4d0632b8c2ec209bd93e2c77f6cc06a137e39b2f4"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/1x1-night.png",
        "sha256": "04f4fbafaecc3419d59bd930d1ff0d13722a3f5b2ca6420b4b1b381d5734c394"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/1x1-color.png",
        "sha256": "2ca68d96ba205ab3d89e68d0897a5e6e47ba811383f3ed8853e25ee6cb440916"
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
          "mg-cap-safe-zone--16x9",
          "mg-cap-safe-zone--9x16",
          "mg-cap-safe-zone--1x1"
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
            "paperNight": 16.379964192708332,
            "paperColor": 19.725748697916668,
            "region": {
              "left": 96,
              "top": 86,
              "width": 1728,
              "height": 756
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 17.00116644965278,
            "paperColor": 16.01437717013889,
            "region": {
              "left": 65,
              "top": 269,
              "width": 950,
              "height": 979
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 17.50222439236111,
            "paperColor": 22.334635416666668,
            "region": {
              "left": 65,
              "top": 108,
              "width": 950,
              "height": 691
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
            "occupancy": 0.892857142857143,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.892857142857143,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.892857142857143,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.635656863697125,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.635656863697125,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.635656863697125,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7976191448229957,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7976191448229957,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7976191448229957,
            "bad": [],
            "measured": 9
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 48.74164496527778,
        "frames": [
          13,
          93,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 48.73882378472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/16x9-duration-90-frame-10.png",
                "sha256": "ed7dc85a908b9dc87b2dc0e889e0b1d9fd5a160c85f39cf15942fe79b82a19b9",
                "alphaMass": 15390
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/16x9-duration-90-frame-89.png",
                "sha256": "79bce9cf1d87c3ef06772e2ccd4509bec67c9aa218baa773844c96d8788774a8",
                "alphaMass": 24562
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/16x9-duration-90-frame-79.png",
                "sha256": "79bce9cf1d87c3ef06772e2ccd4509bec67c9aa218baa773844c96d8788774a8",
                "alphaMass": 24562
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 48.74164496527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/16x9-duration-900-frame-13.png",
                "sha256": "2d585d80ff7d8dd88eaf8a804deac1fe83eb8916e233ee96da2d1128a21443cb",
                "alphaMass": 15435
              },
              {
                "frame": 93,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/16x9-duration-900-frame-93.png",
                "sha256": "79bce9cf1d87c3ef06772e2ccd4509bec67c9aa218baa773844c96d8788774a8",
                "alphaMass": 24562
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/16x9-duration-900-frame-792.png",
                "sha256": "79bce9cf1d87c3ef06772e2ccd4509bec67c9aa218baa773844c96d8788774a8",
                "alphaMass": 24562
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/16x9-duration-900-frame-899.png",
                "sha256": "79bce9cf1d87c3ef06772e2ccd4509bec67c9aa218baa773844c96d8788774a8",
                "alphaMass": 24562
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 49.056315104166664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/9x16-duration-90-frame-10.png",
                "sha256": "b4084ef345b7bb38101d2b4e683c7f35c93b22acd66f38b30ef5ea2f5176f644",
                "alphaMass": 15797
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/9x16-duration-90-frame-89.png",
                "sha256": "02466730a13274bb72db01304c2c734fd9a43e49989476c30cd3b108246acf18",
                "alphaMass": 26936
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/9x16-duration-90-frame-79.png",
                "sha256": "02466730a13274bb72db01304c2c734fd9a43e49989476c30cd3b108246acf18",
                "alphaMass": 26936
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 49.047634548611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/9x16-duration-900-frame-13.png",
                "sha256": "0ae3e404e680b500e1c3c70114cf1afc2587d920f2a224c0b17df915c1856c7f",
                "alphaMass": 15857
              },
              {
                "frame": 93,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/9x16-duration-900-frame-93.png",
                "sha256": "02466730a13274bb72db01304c2c734fd9a43e49989476c30cd3b108246acf18",
                "alphaMass": 26936
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/9x16-duration-900-frame-792.png",
                "sha256": "02466730a13274bb72db01304c2c734fd9a43e49989476c30cd3b108246acf18",
                "alphaMass": 26936
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/9x16-duration-900-frame-899.png",
                "sha256": "02466730a13274bb72db01304c2c734fd9a43e49989476c30cd3b108246acf18",
                "alphaMass": 26936
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 67.50477430555556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/1x1-duration-90-frame-10.png",
                "sha256": "ad691b26d9da031fba52d44cecce8cd2d620dac1d220e935a7dc6c8bf521a3a6",
                "alphaMass": 17539
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/1x1-duration-90-frame-89.png",
                "sha256": "66350adb8093d90a5ce0bf957a66978fbcae6b7bb16cf201dae56c7cf1d5774a",
                "alphaMass": 29317
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/1x1-duration-90-frame-79.png",
                "sha256": "66350adb8093d90a5ce0bf957a66978fbcae6b7bb16cf201dae56c7cf1d5774a",
                "alphaMass": 29317
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 67.51486545138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/1x1-duration-900-frame-13.png",
                "sha256": "bdcfbe5fae041daa2d839f974e79c9815413a8159c5287c70a622dfd27f7bb4a",
                "alphaMass": 17595
              },
              {
                "frame": 93,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/1x1-duration-900-frame-93.png",
                "sha256": "66350adb8093d90a5ce0bf957a66978fbcae6b7bb16cf201dae56c7cf1d5774a",
                "alphaMass": 29317
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/1x1-duration-900-frame-792.png",
                "sha256": "66350adb8093d90a5ce0bf957a66978fbcae6b7bb16cf201dae56c7cf1d5774a",
                "alphaMass": 29317
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-cap-safe-zone/1x1-duration-900-frame-899.png",
                "sha256": "66350adb8093d90a5ce0bf957a66978fbcae6b7bb16cf201dae56c7cf1d5774a",
                "alphaMass": 29317
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
        "note": "Caption snaps from a UI-covered spot into the safe zone; transparent layer, rebrands distinct."
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
      "bundleSha256": "7c1c49b0b6c81272f7af9990514c4966dd6fc2759c801ddfda5a1cce27ea0bb7",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-safe-zone/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-safe-zone/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-safe-zone/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 93,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ee4cd663dd01f106047575f145e61b69ed280ec8eb0d261bffe1674c31c434e5",
        "loop": "79939fb4e2e25e4038645d91785393d08339df58869bda955117cb5fb9478017",
        "detail": "5b665f6e87173cacee044a5246d209364292be5c2f1973b03131e4ba22f1ae3c"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-safe-zone/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-safe-zone/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-safe-zone/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 93,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "b99afebd83f45af26deb563a9316f9369c21560f95fe952cd4959ea0527a531f",
        "loop": "301a72dbb04c870b849c06a99c3b08acb54512ac8a81f1b63ddca40dd497fcf3",
        "detail": "c22863ca5a044cb10e64c1b87b80d9936bda36f41dd76d8bcf7d972c55e8e8af"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-safe-zone/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-safe-zone/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-safe-zone/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 93,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "1cf72e020bd56c7e6ac7d0111e1dc5226b569989cd7ad453ebd247330d2e5ea6",
        "loop": "efe2cfa6af9472bbbbaca849a7dff434635e36beffc0b92af232bcba406cc56b",
        "detail": "649cedd7a8b4aa80a356c91458aef3683e822eee35f05477f3757f0dd3b83f96"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/7c1c49b0b6c81272f7af9990514c4966dd6fc2759c801ddfda5a1cce27ea0bb7/index.mjs",
    "sha256": "7c1c49b0b6c81272f7af9990514c4966dd6fc2759c801ddfda5a1cce27ea0bb7",
    "bytes": 191547,
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
    "at": "2026-10-09T03:44:44.329Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
