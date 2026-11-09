// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "device/phone",
  "tags": [
    "phone",
    "mobile",
    "app",
    "device",
    "mockup",
    "scroll"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 165,
      "min": 75,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 36,
      "out": 0
    },
    "markers": {
      "settled": 40
    },
    "beats": [
      0,
      10,
      40
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
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "headline",
      "type": "text",
      "maxChars": 48,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "subline",
      "type": "text",
      "maxChars": 80,
      "lines": 2,
      "role": "subline"
    },
    {
      "key": "screen",
      "type": "video"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "screenBackground": "colors.background",
    "screenColor": "colors.text",
    "frameColor": "colors.text",
    "bodyFontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "phone",
      "prop": "y",
      "from": "below",
      "settledBy": 36,
      "easing": "spring"
    },
    {
      "target": "headline",
      "prop": "y",
      "from": "below",
      "settledBy": 30,
      "easing": "spring"
    },
    {
      "target": "screen",
      "prop": "scroll",
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
      "frame": 80
    },
    "hover": [
      0,
      165
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st-ads/remotion/ui.tsx (Window, CardGrid)"
  },
  "job": "devices",
  "language": "product-ui",
  "mechanic": [
    "scroll"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "headline": "Your app, in motion",
    "subline": "Drop in a screen recording and it plays inside the phone.",
    "screen": "",
    "accent": "#3D63FF",
    "color": "#F4F4F5",
    "background": "#09090B",
    "fontFamily": "Geist",
    "screenBackground": "#F6F6F7",
    "screenColor": "#0A0A0A",
    "frameColor": "#151517",
    "bodyFontFamily": "Geist",
    "side": "left"
  },
  "fields": [
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 48,
      "role": "headline"
    },
    {
      "key": "subline",
      "label": "Subline",
      "type": "text",
      "max": 80,
      "role": "subline"
    },
    {
      "key": "screen",
      "label": "Screen",
      "type": "asset"
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "screenBackground",
      "label": "Screen background",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "screenColor",
      "label": "Screen color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "frameColor",
      "label": "Frame color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "side",
      "label": "Side",
      "type": "select",
      "options": [
        "left",
        "right"
      ]
    }
  ],
  "name": "Phone App Scroll",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "phone-scroll",
    "bundleSha256": "2ad5e350a486eab733efe004646fbeee9a6fb91a86c9c64aee49234845019d15",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:03:43.659Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/16x9-paper.png",
        "sha256": "28b4cfa9454adeb28ae0a8d1343e6fd49c86c7322bb9c81f2acfbb863313ca82"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/16x9-night.png",
        "sha256": "5e200b4c8a7836eb6ecd48b511c61f0459dc813557196093605e4fc9f9203937"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/16x9-color.png",
        "sha256": "f2acfb25c92d0150ad2513a67fd53e607a5a7626ee1d9866ddfdf2dbd6dcc25a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/9x16-paper.png",
        "sha256": "9f7d665ac808e8fc7bf0bfcced75e7cad8a17bcfb70a2c52edae15b07df6c310"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/9x16-night.png",
        "sha256": "fa7d8c12d4bad29842df35d8b2996f0f2eb795bc8ca3eaa358eb0aa805205350"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/9x16-color.png",
        "sha256": "851ab3a9e5fa45aa5694d521604ceab76332cf2ab2f15b0e80745d659a464b46"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/1x1-paper.png",
        "sha256": "ab34cc5bdaa3cc17aa7be53aad0ca84f3a4fa6f8d8e4598036bae9b951476e52"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/1x1-night.png",
        "sha256": "0e0539ce001e3a50c68bad34b29f1276c61cb4dfcdec963c0189d67316359aa3"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/1x1-color.png",
        "sha256": "708a48b2dc302ba504e55a405d346d02cb0da178ac484cfcdc8815322717f786"
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
          "phone-scroll--16x9",
          "phone-scroll--9x16",
          "phone-scroll--1x1"
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
            "paperNight": 48.86455620659722,
            "paperColor": 14.254937065972221,
            "region": {
              "left": 330,
              "top": 80,
              "width": 1324,
              "height": 942
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 73.441650390625,
            "paperColor": 18.40448676215278,
            "region": {
              "left": 98,
              "top": 187,
              "width": 882,
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
            "paperNight": 64.94268120659723,
            "paperColor": 16.138563368055557,
            "region": {
              "left": 171,
              "top": 87,
              "width": 738,
              "height": 993
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
            "occupancy": 0.8356839070504747,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8524233381624257,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7964106263647436,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.972824628501092,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9765625000000002,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8617984311137008,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8501044164808129,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8868426485820667,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6153374415609867,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.280707465277779,
        "frames": [
          12,
          80,
          164
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 75,
            "averageChannelDifference": 12.754991319444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/16x9-duration-75-frame-9.png",
                "sha256": "90160e0bc86558811dda404b8e3ee6fc968ea622fcbeadbef0bcb57ccf55dcdd",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/16x9-duration-75-frame-74.png",
                "sha256": "92b70e4a616dfa864a84a8973b79ebddcd50047f3b90cd8f3415a6c443b84ceb",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/16x9-duration-75-frame-66.png",
                "sha256": "d4c1b0b313fd953af74d3cb32d4cbc5411f6f78e0ff38bcb895cd6db36786b3a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.269639756944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/16x9-duration-900-frame-12.png",
                "sha256": "1b5a21164835141661245ea26d9734c4031a564c5ddc3f89df278e9f68e75407",
                "alphaMass": 587520
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/16x9-duration-900-frame-80.png",
                "sha256": "19fe6d3fa52f90e462c4ba837a1ce35554ca3e88c8c5be475df29f64f4b99856",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/16x9-duration-900-frame-792.png",
                "sha256": "ed7f269edd0c15af370bc02d54314dbfcd080e768f4c257215c9db3e1ea113dd",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/16x9-duration-900-frame-899.png",
                "sha256": "29ee432bb062b69c1b91195c08917372a42d297a3fc77d377feae5b35ba1c06b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 75,
            "averageChannelDifference": 19.498372395833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/9x16-duration-75-frame-9.png",
                "sha256": "356a1309a6f14fd021d8b070ca1c01bc4c7c75eab4462a60b9056b38d66da60c",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/9x16-duration-75-frame-74.png",
                "sha256": "83a2208623303d03920f4827bb38423ae08fdf5ebf750e9c22003c1b2009d6c6",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/9x16-duration-75-frame-66.png",
                "sha256": "f1d1a668bed2c5636c1ec435bd72331c9bfe2215561921af8ad99c746d7b5e18",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 9.707899305555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/9x16-duration-900-frame-12.png",
                "sha256": "a5a83225bad2bde4eb7b69756a8d9ec8581c61d9e25cd6a0af7257ddf03bf2ae",
                "alphaMass": 587520
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/9x16-duration-900-frame-80.png",
                "sha256": "661de332e6a20ad5af060cb27bcde35a4c78b81eb89a2a98e33992fca87822bf",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/9x16-duration-900-frame-792.png",
                "sha256": "8570086a5ab97e89c0c7524ffd986374665db658b19754021ad05c93cbc31c16",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/9x16-duration-900-frame-899.png",
                "sha256": "ae35808bab3c039f5bb952adc501671eb6fe80ea352276ed4eb7298d8a1ad10a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 75,
            "averageChannelDifference": 16.588758680555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/1x1-duration-75-frame-9.png",
                "sha256": "7ac2e60efaa43627740ae2bed89b72c8d76eb82897151dc04b1794ad577d793c",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/1x1-duration-75-frame-74.png",
                "sha256": "6e1a7db642b2926e5ba6be397cbeb9ae2aff0e0e29c4c0b55b3b4bef27350be5",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/1x1-duration-75-frame-66.png",
                "sha256": "779a89030958416e2353788269df1d09885802f6f47d6da85755f34b4b7ac2ca",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 10.055555555555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/1x1-duration-900-frame-12.png",
                "sha256": "71198a59cdc17ed626b0c0594376971dc748f7d6680ab578957d55db94c15a86",
                "alphaMass": 587520
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/1x1-duration-900-frame-80.png",
                "sha256": "7333cd5881f94cc79bfdfc9760d0a6919f40ead3b189da8d1b2e93015dad807c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/1x1-duration-900-frame-792.png",
                "sha256": "87b7ea61121b2d51115cf2a443fd7fff5d34dcd7fd51984e47ba84d93055b2ca",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/phone-scroll/1x1-duration-900-frame-899.png",
                "sha256": "9adbb51b3d7254c6335dd92b4d3ced3f81d509cbf7f749a3725cc9b9a14ad631",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "devices",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A phone scrolls a feed beside a headline; devices."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 7,
        "compared": 7,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "2ad5e350a486eab733efe004646fbeee9a6fb91a86c9c64aee49234845019d15",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.943018Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/phone-scroll/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/phone-scroll/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/phone-scroll/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 80,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 165,
      "sha256": {
        "poster": "953dfc64a34ab63e0eb0a2263fb980986db42fe9977d5f90b842d9a7eed8c60f",
        "loop": "e7af170b52275e6b9f17b299b629b331a88a7b56031c5f0d4e4a0e04d234572c",
        "detail": "f72e3cf0211885145146ea93c3e410e66861dd3f65fdacfc2bdaf813fcd1a126"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/phone-scroll/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/phone-scroll/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/phone-scroll/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 80,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 165,
      "sha256": {
        "poster": "ce9e0fc3a046c3303ac75b53ee78a79add0662f2e109cc6d745e48fc4b18e024",
        "loop": "28efc634db136ea9cdefdf22b8b5ef0f4f6d6338db31cfd2da9702881f0168c1",
        "detail": "a16395fdf79b607b8967486eeb5e872d9477d5f9a99b2139c596a490f71bdf7a"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/phone-scroll/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/phone-scroll/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/phone-scroll/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 80,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 165,
      "sha256": {
        "poster": "54fd2ec4798ba81f3c27988f2f8cc5d4f0b99866b73f4b907c27d56adc39f43b",
        "loop": "bfc9c7c08f711bad2ff471fc1ef30f9a9b1d9694968b6243d4852e69596c8ba2",
        "detail": "4061d6cc23c0ea824e66985765b8338b326182fc2c39a59b91d746cc1a3717fe"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/2ad5e350a486eab733efe004646fbeee9a6fb91a86c9c64aee49234845019d15/index.mjs",
    "sha256": "2ad5e350a486eab733efe004646fbeee9a6fb91a86c9c64aee49234845019d15",
    "bytes": 163437,
    "externals": [
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
    "at": "2026-10-07T02:22:28.129Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
