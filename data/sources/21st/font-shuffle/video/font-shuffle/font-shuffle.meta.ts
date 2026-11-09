// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "text/kinetic",
  "tags": [
    "font",
    "typeface",
    "shuffle",
    "flicker",
    "hook",
    "social",
    "text"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 75,
      "min": 36,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 28,
      "out": 0
    },
    "markers": {
      "settled": 28
    },
    "beats": [
      0,
      10,
      14,
      18,
      22,
      26
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "9:16",
      "1:1",
      "16:9"
    ],
    "mode": "responsive",
    "fill": "region",
    "defaultRegion": {
      "x": 0.1,
      "y": 0.2,
      "w": 0.8,
      "h": 0.6
    },
    "safeArea": "title",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "text",
      "type": "text",
      "maxChars": 20,
      "lines": 1,
      "role": "headline"
    }
  ],
  "brand": {
    "serifFontFamily": "fonts.serif",
    "accentFontFamily": "fonts.accent",
    "displayFontFamily": "fonts.display",
    "monoFontFamily": "fonts.mono",
    "color": "colors.text",
    "accent": "colors.primary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "text",
      "prop": "scale",
      "from": "1.6",
      "settledBy": 9,
      "easing": "ease"
    },
    {
      "target": "text",
      "prop": "fontFamily",
      "settledBy": 26,
      "easing": "linear"
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
      75
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "motion recipe from research V12 (font shuffle); OFL fonts"
  },
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "reveal"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "serifFontFamily": "Instrument Serif",
    "accentFontFamily": "Caveat",
    "displayFontFamily": "Bebas Neue",
    "monoFontFamily": "Geist Mono",
    "text": "Your style",
    "color": "#F4F4F5",
    "accent": "#7C9CFF",
    "fontFamily": "Geist",
    "swapEvery": 4,
    "entry": "zoom"
  },
  "fields": [
    {
      "key": "serifFontFamily",
      "label": "Serif font family",
      "type": "font",
      "brand": "fonts.serif"
    },
    {
      "key": "accentFontFamily",
      "label": "Accent font family",
      "type": "font",
      "brand": "fonts.accent"
    },
    {
      "key": "displayFontFamily",
      "label": "Display font family",
      "type": "font",
      "brand": "fonts.display"
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 20,
      "role": "headline"
    },
    {
      "key": "color",
      "label": "Color",
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "swapEvery",
      "label": "Swap every",
      "type": "number",
      "step": 1,
      "min": 2,
      "max": 8
    },
    {
      "key": "entry",
      "label": "Entry",
      "type": "select",
      "options": [
        "zoom",
        "fade"
      ]
    }
  ],
  "name": "Font Shuffle",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "font-shuffle",
    "bundleSha256": "7ba14f971904ebe00db8a916f632e87f89220d4c9939366d1a19ffa293010647",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:54:44.476Z",
    "samples": [
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/9x16-paper.png",
        "sha256": "3e590bd1a75eb99518d962a6bbb0a1407efd0b5417737e69158f14bc8fffed10"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/9x16-night.png",
        "sha256": "93c3fc83704f4278a82a3b25d269a3327f59e17c66f8a68854ca00ec06e8cf67"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/9x16-color.png",
        "sha256": "2c2cdcc7258ab4e408c29e1c2352a3665c03182e58e0523b586af23dc16287a7"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/1x1-paper.png",
        "sha256": "5b4c7bd4f3e46add5971c56ab77319e185c07a1dd22c7ebcb8be9c1f3c4e13fe"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/1x1-night.png",
        "sha256": "1006715cc41d5e1f551106751c17939210014ecef56a2c4bb0166e9b74eec10e"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/1x1-color.png",
        "sha256": "6af53a72485391da31299f4ee37616acfa5316d8543bdaffb759f57fa7b32a2c"
      },
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/16x9-paper.png",
        "sha256": "d6f09f33340e1ccc96089572bc7183c9ee373dbea50795cd7894c09f8c632871"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/16x9-night.png",
        "sha256": "667bb0b4bb26fec7e1e1448af590144392ece6c2a4464aa0e45f6d4829676a65"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/16x9-color.png",
        "sha256": "eca3449b12037595b695f5b506a4c5740922196c2038e35dfefce7f4b996948c"
      }
    ],
    "gates": {
      "contract": {
        "pass": true,
        "errors": [],
        "transparency": [
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
          },
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "font-shuffle--9x16",
          "font-shuffle--1x1",
          "font-shuffle--16x9"
        ]
      },
      "brand": {
        "pass": true,
        "sourcePaintLiterals": [],
        "sourceFontLiterals": [],
        "samples": [
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 49.82196723090278,
            "paperColor": 33.56068250868056,
            "region": {
              "left": 175,
              "top": 519,
              "width": 705,
              "height": 892
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 91.807861328125,
            "paperColor": 52.11192491319444,
            "region": {
              "left": 268,
              "top": 487,
              "width": 545,
              "height": 123
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 88.78995768229167,
            "paperColor": 51.931911892361114,
            "region": {
              "left": 478,
              "top": 445,
              "width": 967,
              "height": 220
            },
            "canvas": {
              "width": 1920,
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
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8492582675056048,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8934172426365095,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7303324647492314,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.158908203961359,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.1558933627653927,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.09422707697619515,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2828691838746816,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.27675644146869144,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.16792741402116404,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 13.231119791666666,
        "frames": [
          4,
          28,
          74
        ],
        "elastic": [
          {
            "aspect": "9:16",
            "duration": 36,
            "averageChannelDifference": 26.710069444444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/9x16-duration-36-frame-4.png",
                "sha256": "636d67ae2f7e29f0488f677684ec041ce7b562d20f42f263e0d6459fca6d76d5",
                "alphaMass": 4336
              },
              {
                "frame": 28,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/9x16-duration-36-frame-28.png",
                "sha256": "bc414da7f9e237deb9d01efba276b3ff3899e544d45c92ab06c820b92b7fff03",
                "alphaMass": 20019
              },
              {
                "frame": 31,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/9x16-duration-36-frame-31.png",
                "sha256": "bc414da7f9e237deb9d01efba276b3ff3899e544d45c92ab06c820b92b7fff03",
                "alphaMass": 20019
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/9x16-duration-36-frame-35.png",
                "sha256": "bc414da7f9e237deb9d01efba276b3ff3899e544d45c92ab06c820b92b7fff03",
                "alphaMass": 20019
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 26.710069444444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/9x16-duration-600-frame-4.png",
                "sha256": "636d67ae2f7e29f0488f677684ec041ce7b562d20f42f263e0d6459fca6d76d5",
                "alphaMass": 4336
              },
              {
                "frame": 28,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/9x16-duration-600-frame-28.png",
                "sha256": "bc414da7f9e237deb9d01efba276b3ff3899e544d45c92ab06c820b92b7fff03",
                "alphaMass": 20019
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/9x16-duration-600-frame-528.png",
                "sha256": "bc414da7f9e237deb9d01efba276b3ff3899e544d45c92ab06c820b92b7fff03",
                "alphaMass": 20019
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/9x16-duration-600-frame-599.png",
                "sha256": "bc414da7f9e237deb9d01efba276b3ff3899e544d45c92ab06c820b92b7fff03",
                "alphaMass": 20019
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 36,
            "averageChannelDifference": 9.749565972222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/1x1-duration-36-frame-4.png",
                "sha256": "d62b8160d7752e7ba60ea6bf5d5edeadd4302e28a41c30242b4fcbfdc52b6afc",
                "alphaMass": 7292
              },
              {
                "frame": 28,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/1x1-duration-36-frame-28.png",
                "sha256": "7dc8e6c3a5e579b9c703d3d54e82282d33c9b420bdda6bc7860a7af13ef2e4d5",
                "alphaMass": 10833
              },
              {
                "frame": 31,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/1x1-duration-36-frame-31.png",
                "sha256": "7dc8e6c3a5e579b9c703d3d54e82282d33c9b420bdda6bc7860a7af13ef2e4d5",
                "alphaMass": 10833
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/1x1-duration-36-frame-35.png",
                "sha256": "7dc8e6c3a5e579b9c703d3d54e82282d33c9b420bdda6bc7860a7af13ef2e4d5",
                "alphaMass": 10833
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 9.749565972222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/1x1-duration-600-frame-4.png",
                "sha256": "d62b8160d7752e7ba60ea6bf5d5edeadd4302e28a41c30242b4fcbfdc52b6afc",
                "alphaMass": 7292
              },
              {
                "frame": 28,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/1x1-duration-600-frame-28.png",
                "sha256": "7dc8e6c3a5e579b9c703d3d54e82282d33c9b420bdda6bc7860a7af13ef2e4d5",
                "alphaMass": 10833
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/1x1-duration-600-frame-528.png",
                "sha256": "7dc8e6c3a5e579b9c703d3d54e82282d33c9b420bdda6bc7860a7af13ef2e4d5",
                "alphaMass": 10833
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/1x1-duration-600-frame-599.png",
                "sha256": "7dc8e6c3a5e579b9c703d3d54e82282d33c9b420bdda6bc7860a7af13ef2e4d5",
                "alphaMass": 10833
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 36,
            "averageChannelDifference": 13.231119791666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/16x9-duration-36-frame-4.png",
                "sha256": "a7b8040553d3062914a66f0e9fa7f0c15330f11056a1ab4919a4503c597769f3",
                "alphaMass": 12403
              },
              {
                "frame": 28,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/16x9-duration-36-frame-28.png",
                "sha256": "f92d3160fdc3cb0dc3f1b46c3101aa901c421b25e33f7bf886f80c0c01212d10",
                "alphaMass": 18475
              },
              {
                "frame": 31,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/16x9-duration-36-frame-31.png",
                "sha256": "ae13b55d90a5ba27eb265c67dcf615e9ddc2a4f5922276038a6d46c6535dc758",
                "alphaMass": 18475
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/16x9-duration-36-frame-35.png",
                "sha256": "ef8ba961e94cd120e7177b0af3b9a4dbb317409bffb799f2eb51575e8509e79d",
                "alphaMass": 18475
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 13.231119791666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/16x9-duration-600-frame-4.png",
                "sha256": "e45ba5a67abb2817058569728d27f2a5069304dcab0df6201bb7b8e7a331bbdc",
                "alphaMass": 12403
              },
              {
                "frame": 28,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/16x9-duration-600-frame-28.png",
                "sha256": "af3dbde3c67aadf2ec828c82531c1445b8d57405a8699d261e5b3736fb74a62b",
                "alphaMass": 18475
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/16x9-duration-600-frame-528.png",
                "sha256": "99bd95ecb88a78e779c7620590ad92263b1cae371c6063222577b8a4bbdeeb71",
                "alphaMass": 18475
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/font-shuffle/16x9-duration-600-frame-599.png",
                "sha256": "602bae90afbae4f74ed1215ae634dad7eeea536b6c536eafc7ca28d3ab919cc8",
                "alphaMass": 18475
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
        "note": "A two-word title cycles through typefaces and lands on the brand font."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 24,
        "compared": 24,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "7ba14f971904ebe00db8a916f632e87f89220d4c9939366d1a19ffa293010647",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.976324Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/font-shuffle/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/font-shuffle/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/font-shuffle/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 28,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "c3f196b5900b4226638f1c01b21571cd0ac909dbd4412a249545f2120a086a22",
        "loop": "07d76ab833e4f9753ab850135aff41e3969814477db97fc12f73dbfea624a55b",
        "detail": "a9e3e538fe9491b8f2382ca04c1903da9208469cb93dea8f82b7ca4c15e64818"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/font-shuffle/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/font-shuffle/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/font-shuffle/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 28,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "969f4a8b61dbb345e9ccb41a1a9246d9740a7d3f2b3d97c419da9b8d72f4749e",
        "loop": "2456ce5e3ff7623d5966c471b70e08d9d4c0195cc3e4e120009c3daa09b11101",
        "detail": "8d25715e32a8182a3a3a2e490b79389cad2eb0b97eac2c96a1ae03bdd4117cd6"
      }
    },
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/font-shuffle/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/font-shuffle/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/font-shuffle/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 28,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "e17f8284834bd31f420461b1e8a076a27e80b82343fe03bca0443a25cda7b6fb",
        "loop": "6e9653db11f626bdd1e762e2ce7aa266cc4b2ee9897fc7424c9cdb24aa9bd2af",
        "detail": "6d1ca49b793a48d398fdfb132fb72496768cc60e1610896b917896062f5c692a"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/7ba14f971904ebe00db8a916f632e87f89220d4c9939366d1a19ffa293010647/index.mjs",
    "sha256": "7ba14f971904ebe00db8a916f632e87f89220d4c9939366d1a19ffa293010647",
    "bytes": 160071,
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
    },
    "16:9": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    }
  },
  "intake": {
    "at": "2026-10-07T02:27:51.522Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
