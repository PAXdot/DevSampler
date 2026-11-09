// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/card",
  "tags": [
    "screenshot",
    "app",
    "card",
    "window",
    "browser",
    "pop",
    "ui",
    "mockup"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 90,
      "min": 30,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 14,
      "out": 0
    },
    "markers": {
      "settled": 30
    },
    "beats": [
      0
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
      "x": 0.1,
      "y": 0.2,
      "w": 0.8,
      "h": 0.6
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "image",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "label"
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
      "target": "card",
      "prop": "scale",
      "from": "0.92",
      "settledBy": 12,
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
      90
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/video-components-2026-10-05 (V04 UI card enter)"
  },
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "interact"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": true,
  "defaults": {
    "image": "",
    "title": "app.northwind.io/overview",
    "chrome": "browser",
    "ratio": "auto",
    "sample": "dashboard",
    "radius": 2,
    "sheen": true,
    "theme": "light",
    "accent": "#3D63FF",
    "surfaceColor": "#FFFFFF",
    "textColor": "#0A0A0B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "image",
      "label": "Image",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 40,
      "role": "label"
    },
    {
      "key": "chrome",
      "label": "Chrome",
      "type": "select",
      "options": [
        "window",
        "browser",
        "none"
      ]
    },
    {
      "key": "ratio",
      "label": "Ratio",
      "type": "select",
      "options": [
        "auto",
        "16:10",
        "4:3",
        "1:1",
        "4:5"
      ]
    },
    {
      "key": "sample",
      "label": "Sample",
      "type": "select",
      "options": [
        "dashboard",
        "list",
        "article",
        "chart"
      ]
    },
    {
      "key": "radius",
      "label": "Radius",
      "type": "number",
      "min": 0,
      "max": 6
    },
    {
      "key": "sheen",
      "label": "Sheen",
      "type": "boolean"
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
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "App Card Pop",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "app-card-pop",
    "bundleSha256": "ba9a6ede86dd341035daeedfd416d1762fb0216aac0df2b083236256683d6bc8",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:54:58.235Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/16x9-paper.png",
        "sha256": "bef93fb974a2718204668d2479455b1bfdb202bedd997e3ec47abfa5bd6312e3"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/16x9-night.png",
        "sha256": "7e365123f8403665d31f0f4287a753b571e314561091bdd0c7ab9f226b58b45e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/16x9-color.png",
        "sha256": "0b180b344a5abd39444050d860d9db83ee5de94c1887d6b2ade65f68a069619b"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/9x16-paper.png",
        "sha256": "f33dc83938d714d5e3f7d447f7cf2177f054a4d2d43db9a367a41c3de8143b7f"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/9x16-night.png",
        "sha256": "bba18d102571f61e55f52a8ec648dcd71a1b394ba114dafc1f94f874e7f5802a"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/9x16-color.png",
        "sha256": "b43cce81f1ea5ba4eb743c76008227c3e4d03262bbe48464ef619a73b2282a7e"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/1x1-paper.png",
        "sha256": "c2ffb411c85a4dfaad25819faf0a541742598ec1e4bfa7183a6b9fa82c54f4b1"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/1x1-night.png",
        "sha256": "1c47621ce80aabf5fa1201aa83bc126c04c66cec9d711836ae36c2abaf8ddd7d"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/1x1-color.png",
        "sha256": "50e59c379fdadcf66d571a1ef971e955958020acfc2752eb0831157dc72ddce2"
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
          "app-card-pop--16x9",
          "app-card-pop--9x16",
          "app-card-pop--1x1"
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
            "paperNight": 134.61420355902777,
            "paperColor": 9.909586588541666,
            "region": {
              "left": 501,
              "top": 235,
              "width": 918,
              "height": 637
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 132.29473198784723,
            "paperColor": 11.153998480902779,
            "region": {
              "left": 109,
              "top": 428,
              "width": 863,
              "height": 1101
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 134.88080512152777,
            "paperColor": 10.022786458333334,
            "region": {
              "left": 118,
              "top": 261,
              "width": 845,
              "height": 585
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
            "occupancy": 0.778575144799861,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.832640094521605,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.778575144799861,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2653903618203113,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3529237509207646,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2653903618203113,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1721277302644881,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2513109774945645,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1721277302644881,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.650282118055555,
        "frames": [
          4,
          30,
          89
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 30,
            "averageChannelDifference": 21.73003472222222,
            "retainedAlpha": 0.9960190104202231,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/16x9-duration-30-frame-3.png",
                "sha256": "be7353de3fbe3e286f7acfbff263f2bd45cf6f822c5d87c634fb2a1679bf14e0",
                "alphaMass": 70618
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/16x9-duration-30-frame-29.png",
                "sha256": "1bf88c89b55581c65ff8617577624154adfc34cfd4bc9d54b33267d904a058e2",
                "alphaMass": 146446
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/16x9-duration-30-frame-26.png",
                "sha256": "59a8b910f04182bcc0363eda35d1e35bdb7acfa1b767d72d706c47e4973760bd",
                "alphaMass": 145863
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 8.545247395833334,
            "retainedAlpha": 1.0030919090486223,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/16x9-duration-900-frame-4.png",
                "sha256": "b295ec94faca9caab0f5825cb65a521f4ca1248a1f7589845bf0c0611f521dfc",
                "alphaMass": 94834
              },
              {
                "frame": 30,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/16x9-duration-900-frame-30.png",
                "sha256": "c3741b0e76bba55d3f4946c5a2cba2cfd79c923efa322cab8b4dd1013524f017",
                "alphaMass": 143240
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/16x9-duration-900-frame-792.png",
                "sha256": "a9e6ce8b17597c463f1c8ce047aad8d45f7b59543351ad3b862899c82fd6d955",
                "alphaMass": 146188
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/16x9-duration-900-frame-899.png",
                "sha256": "266982d2af1c12b962bcdeb486f3f59de1e6d95a98d9fc2e54a841f6d55dce49",
                "alphaMass": 146640
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 30,
            "averageChannelDifference": 19.33224826388889,
            "retainedAlpha": 0.9957875480928585,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/9x16-duration-30-frame-3.png",
                "sha256": "f32f0784d063b7108ec76a9944be9107140d3a526aab6dd6388ca477b26808c2",
                "alphaMass": 114874
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/9x16-duration-30-frame-29.png",
                "sha256": "b1c73db956ed3171943e24c979618988b21085ea2bfcd291ee44b472334c5df2",
                "alphaMass": 238341
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/9x16-duration-30-frame-26.png",
                "sha256": "e9c6e45acfc79e20520a3e262b3f711cbfb889f13fe10f238216eeaed58e9e44",
                "alphaMass": 237337
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 10.344075520833334,
            "retainedAlpha": 1.0022687359779512,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/9x16-duration-900-frame-4.png",
                "sha256": "257eae0aa6488d40721c2f2ea9a9188c00f2f0bce3413c5b4e45f2f3f136399c",
                "alphaMass": 154537
              },
              {
                "frame": 30,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/9x16-duration-900-frame-30.png",
                "sha256": "189cfc3bc8adbb2d688e5059df910e7b6a088513380113c40fcd2ceaf9c4a847",
                "alphaMass": 233587
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/9x16-duration-900-frame-792.png",
                "sha256": "ada208b3c4c182d33efcc8e62b101ecfef1ffb53d3fc848647af0662226c6abd",
                "alphaMass": 238018
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/9x16-duration-900-frame-899.png",
                "sha256": "71e66dcbd680f175deee637bea161060b61b4ce1320bbb2fa763ca1538800db9",
                "alphaMass": 238558
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 30,
            "averageChannelDifference": 32.04481336805556,
            "retainedAlpha": 0.9959108797708285,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/1x1-duration-30-frame-3.png",
                "sha256": "557c7332199c3380f4b8dbee65faf8e9cbbcdd3b26d1c1506b1d5eae23b50893",
                "alphaMass": 105981
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/1x1-duration-30-frame-29.png",
                "sha256": "da28b5fbd02ba48642b2352f11bfcffe13d9e8daa01af534347c6292cf8eed7d",
                "alphaMass": 221319
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/1x1-duration-30-frame-26.png",
                "sha256": "2d4a2cb2a29de7b87d698908fef43e75dfa74ba528282836b4bbebbf020e4c8f",
                "alphaMass": 220414
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 15.465386284722221,
            "retainedAlpha": 1.0032762256432535,
            "pass": true,
            "samples": [
              {
                "frame": 4,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/1x1-duration-900-frame-4.png",
                "sha256": "73266bdd6a7348ce01d2a232c38f72a1d157230747e80f8eb1193dc20a5ad999",
                "alphaMass": 142451
              },
              {
                "frame": 30,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/1x1-duration-900-frame-30.png",
                "sha256": "80a98587279a89de9e4e19db57fa87f445f5f5ab5d4b84219eb967f5d87148d7",
                "alphaMass": 216210
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/1x1-duration-900-frame-792.png",
                "sha256": "c6578ef2403fa7928503710932bfdf8513422e3242cc2b20df991e4da5420934",
                "alphaMass": 220986
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/app-card-pop/1x1-duration-900-frame-899.png",
                "sha256": "c6e8e6ca51b1968d5cde4a89556205914637af14d089127a43450f7a25425eb9",
                "alphaMass": 221710
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
        "note": "An app window pops in and its chart draws; product UI."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 39,
        "compared": 39,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "ba9a6ede86dd341035daeedfd416d1762fb0216aac0df2b083236256683d6bc8",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.977090Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/app-card-pop/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/app-card-pop/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/app-card-pop/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 30,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "8279637dd6e7b52695122b22c258006e10e201ef0e537becd73b2449cac67c86",
        "loop": "fb0646d54d70b783f7ffebd19a4fa6ee485dbcf67adf76d683133ef73588bc7e",
        "detail": "87cc001ca911ae06bf7dd1bfcde061e115e3d4752c0f1b07db38ae495a922692"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/app-card-pop/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/app-card-pop/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/app-card-pop/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 30,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "3f6265f14637ffc594b2a3fb3c7097f6cd74bc2520811d0f7f831db08e751d16",
        "loop": "01e2c1c477f0e4e3215d0226b61889f3616e0d2111b1e177a5fc1df9452ce606",
        "detail": "04bc767adfa73c25a0300e8e83a83bcef570476df6dbec8f7ed15a469bda0202"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/app-card-pop/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/app-card-pop/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/app-card-pop/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 30,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "d9271ecf5aa69aebdf1b72198a2485c41ecded51d082b976fe97c46be0150024",
        "loop": "956fd40307c007ddb3a7278dbd91d6de6d556bc67199937ac6d9387c2f0a7a3d",
        "detail": "df8aaec02e51b350edb4a22340f43977e1c285b3a13210f9cd7f54353b44df8c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ba9a6ede86dd341035daeedfd416d1762fb0216aac0df2b083236256683d6bc8/index.mjs",
    "sha256": "ba9a6ede86dd341035daeedfd416d1762fb0216aac0df2b083236256683d6bc8",
    "bytes": 173796,
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
    "at": "2026-10-07T02:26:53.310Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
