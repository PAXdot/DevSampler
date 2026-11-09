// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "background",
  "category": "background/grid",
  "tags": [
    "background",
    "grid",
    "light leak",
    "explainer",
    "charcoal",
    "calm",
    "ambient",
    "loop"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 300,
      "min": 60,
      "max": 1800
    },
    "stretch": "loop",
    "phases": {
      "in": 0,
      "out": 0
    },
    "markers": {
      "settled": 0
    },
    "beats": [
      0,
      75,
      150,
      225
    ],
    "loop": true
  },
  "layout": {
    "aspects": [
      "16:9",
      "9:16",
      "1:1"
    ],
    "mode": "responsive",
    "fill": "frame",
    "safeArea": "none",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [],
  "brand": {
    "leak": "colors.primary",
    "background": "colors.background",
    "lineColor": "colors.text"
  },
  "motionBeats": [],
  "render": {
    "deterministic": true,
    "clientRenderable": true,
    "webgl": false,
    "requiresGpu": false
  },
  "preview": {
    "poster": {
      "frame": 75
    },
    "hover": [
      0,
      300
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study of V09 and V10, research 2026-10-05)"
  },
  "job": "backgrounds",
  "language": "aura",
  "mechanic": [
    "flow"
  ],
  "energy": "calm",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "gridSize": 0.05,
    "lineColor": "#FFFFFF",
    "leak": "#9FB4FF",
    "leakIntensity": 0.7,
    "background": "#141416",
    "pan": true,
    "cycles": 1
  },
  "fields": [
    {
      "key": "gridSize",
      "label": "Grid size",
      "type": "number",
      "min": 0.02,
      "max": 0.15
    },
    {
      "key": "lineColor",
      "label": "Line color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "leak",
      "label": "Leak",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "leakIntensity",
      "label": "Leak intensity",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "pan",
      "label": "Pan",
      "type": "boolean"
    },
    {
      "key": "cycles",
      "label": "Cycles",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 4
    }
  ],
  "name": "Grid Light Leak",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "grid-leak",
    "bundleSha256": "ea90fef733057986c76e7706504e6ed3f1f1568fb8652766039beed71c6a7e35",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:06:05.182Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/16x9-paper.png",
        "sha256": "67dcdd9a4d2fac77b6f9005d8a9d8b2f746d78b3b525703e8705105341ab3d96"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/16x9-night.png",
        "sha256": "72dd7ba9aaa912468634ee88952e09f6ed7a1db1b560c463546830737a87539b"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/16x9-color.png",
        "sha256": "c49704ecc3dd71ab70e36efc2710801602a9389dded11d0ecbded659329b81a1"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/9x16-paper.png",
        "sha256": "8d4c9c83bd1b1224b1b35ea84ecc3f7a66f855e329b4cad455c2cba5b3ca64ce"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/9x16-night.png",
        "sha256": "b88b57817fc4ff3614f4978eee7945ce710e4c666f9bfac8285376bcec20f3eb"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/9x16-color.png",
        "sha256": "7001b906db6637aa91b801276e66a16146f80c823f0f870ae92a144b1d397e10"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/1x1-paper.png",
        "sha256": "71ee8c45b5f19a424f46e349b3ec3e779f592f3a653aabbc96578144109e49c7"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/1x1-night.png",
        "sha256": "efeff23f9b9411dec79f2f4cb9fa031fca0f9660982d05b54fd0594e51200002"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/1x1-color.png",
        "sha256": "f0a607b64afb1a7a91ce7adeec0dcf79588d96efee935ba5227ffeca35efd82c"
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
          "grid-leak--16x9",
          "grid-leak--9x16",
          "grid-leak--1x1"
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
            "paperNight": 38.974772135416664,
            "paperColor": 16.099202473958332,
            "region": {
              "left": 1,
              "top": 0,
              "width": 1838,
              "height": 1080
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 40.586995442708336,
            "paperColor": 15.76169162326389,
            "region": {
              "left": 0,
              "top": 107,
              "width": 1070,
              "height": 1758
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 41.963216145833336,
            "paperColor": 16.156005859375,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1045,
              "height": 1074
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
            "occupancy": 1.3567058767951627,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3567058767951627,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3567058767951627,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2856391592130683,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2856391592130683,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2856391592130683,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3636863353022968,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3636863353022968,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3636863353022968,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.2914496527777777,
        "frames": [
          36,
          135,
          299
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 2.2392578125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/16x9-duration-60-frame-7.png",
                "sha256": "e83f013c5517b3e9763463a10a52548d88b84c1c2c54cf1e0ede165c1fe83c47",
                "alphaMass": 587520
              },
              {
                "frame": 27,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/16x9-duration-60-frame-27.png",
                "sha256": "c593913007160daf20591c2600a57d9b24d1d80b382fd1a9ee3d20215ceb4766",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/16x9-duration-60-frame-52.png",
                "sha256": "96d34c1265c7ee83ad19bc94038d2d87c82be0264394d9070633ca3c7addb8dd",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/16x9-duration-60-frame-59.png",
                "sha256": "a390014152c13c7ea2fc2d7cc2fdb3325449aefe03f3ad7def6e4b1c2a6f083a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 1800,
            "averageChannelDifference": 2.2914496527777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 216,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/16x9-duration-1800-frame-216.png",
                "sha256": "6577bb481cbd1d66fe404bf4558646e3e23557d915791c9dd3a67ada2073688e",
                "alphaMass": 587520
              },
              {
                "frame": 810,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/16x9-duration-1800-frame-810.png",
                "sha256": "c593913007160daf20591c2600a57d9b24d1d80b382fd1a9ee3d20215ceb4766",
                "alphaMass": 587520
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/16x9-duration-1800-frame-1584.png",
                "sha256": "1202ba2b86b3715ebdc337c46a464212b4ef0d7b4af8886a0ffc956dd0bae407",
                "alphaMass": 587520
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/16x9-duration-1800-frame-1799.png",
                "sha256": "be1336871563f297ed000b90c467666ee3688eb01e9db76d3bbf288ffcba740f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 2.2846137152777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/9x16-duration-60-frame-7.png",
                "sha256": "c02c5f3fe833429ad65e30c3f55a734e4dd4a81f1e1edae20246c094de0a64d4",
                "alphaMass": 587520
              },
              {
                "frame": 27,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/9x16-duration-60-frame-27.png",
                "sha256": "4b4b7196d7272dd5f641226c80c05c0408d385cb364cdd6a42d95d8d0b48c020",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/9x16-duration-60-frame-52.png",
                "sha256": "3b236a7baf6264fae15dabcb6b9b84fa883be6f77e1f54b7ee85aa6a86cc519b",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/9x16-duration-60-frame-59.png",
                "sha256": "7ad58bf97dde91c0c34d52c43dc8cba1d456da19d05996676c67365289dc92d5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 1800,
            "averageChannelDifference": 2.3334418402777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 216,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/9x16-duration-1800-frame-216.png",
                "sha256": "03c0a8dfb7378af96464c9b494d476b7f4634b83c6568ce672dd335b8bee6eeb",
                "alphaMass": 587520
              },
              {
                "frame": 810,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/9x16-duration-1800-frame-810.png",
                "sha256": "4b4b7196d7272dd5f641226c80c05c0408d385cb364cdd6a42d95d8d0b48c020",
                "alphaMass": 587520
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/9x16-duration-1800-frame-1584.png",
                "sha256": "aebe6e8474234abb8df312c70ecbe6cc3379ffcaa35f8ed8a3f6da486ecc21fb",
                "alphaMass": 587520
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/9x16-duration-1800-frame-1799.png",
                "sha256": "638064cf18204edb18fb71ba9ee00b61c868071b6150643360fbe17260c8868f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 2.1497395833333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/1x1-duration-60-frame-7.png",
                "sha256": "73132586c9af5f756977027a6a1508d1cc8f6ba0fc5a459b2b143e030618daa6",
                "alphaMass": 587520
              },
              {
                "frame": 27,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/1x1-duration-60-frame-27.png",
                "sha256": "96de6783a708bf8824d5161a09cedfe07f818e3bdfa5d394f4ee9ea0c8f5a4d9",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/1x1-duration-60-frame-52.png",
                "sha256": "997736a378db21b60df06e7334b3594728458dba5c335496c882a79e2b3ac9eb",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/1x1-duration-60-frame-59.png",
                "sha256": "4655e698928cf2f3f53eedbba26b365e46cc3be895162e7c2f4bf79435e7dc7f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 1800,
            "averageChannelDifference": 2.199435763888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 216,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/1x1-duration-1800-frame-216.png",
                "sha256": "6a42a6c26df691d86714275fae92b9ecaeb08468fbf9d0b12facdcb0cff672ed",
                "alphaMass": 587520
              },
              {
                "frame": 810,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/1x1-duration-1800-frame-810.png",
                "sha256": "96de6783a708bf8824d5161a09cedfe07f818e3bdfa5d394f4ee9ea0c8f5a4d9",
                "alphaMass": 587520
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/1x1-duration-1800-frame-1584.png",
                "sha256": "b0761cafabaa3022e144956d0ee7c97b2a2721167d2988fbbd25a92c18bbd34b",
                "alphaMass": 587520
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/grid-leak/1x1-duration-1800-frame-1799.png",
                "sha256": "ae3f29288f04f91519769397fd95aedcbe9f67ad4935c1f052aff1e310cc569f",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "backgrounds",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A faint grid with soft light leaks drifting; background."
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
      "bundleSha256": "ea90fef733057986c76e7706504e6ed3f1f1568fb8652766039beed71c6a7e35",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.946914Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/grid-leak/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/grid-leak/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/grid-leak/16x9/detail.mp4",
      "bg": "#0c0c0d",
      "posterFrame": 75,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 300,
      "sha256": {
        "poster": "25a2c85debba248ad54aa25b8879f58b4a6bb8a0d46ef0924910c425c8d45351",
        "loop": "79834724405610d2c2a0b91f038fca5096b069630d449090c3887797fc56f84e",
        "detail": "eab107054799cb887a2838dc10ee1cc2e3c577e311f21e66ce5e9970cf5ccd24"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/grid-leak/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/grid-leak/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/grid-leak/9x16/detail.mp4",
      "bg": "#0c0c0d",
      "posterFrame": 75,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 300,
      "sha256": {
        "poster": "1ad8dc285f8b7d99fe98c1277ba9da2ca8c7e4470a0194803f1ee7b6798120a1",
        "loop": "13808245fb6f67cb35e2a63addeb7ab3a6ed727f7746509dcbeb4405e13dbb96",
        "detail": "8200d5d8cc32a2d51745b479be0c7095ef07e6451f89b550d3323a5a94079d0c"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/grid-leak/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/grid-leak/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/grid-leak/1x1/detail.mp4",
      "bg": "#0c0c0d",
      "posterFrame": 75,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 300,
      "sha256": {
        "poster": "c94da5669a4dcf9fad1c84286d498dae5438f77404bf22d802c66383a12e9ca0",
        "loop": "167d14a6c5b4b86c3a33138ffacb171c77159fffa312cd7e265e8fdc9663c1a3",
        "detail": "2c74fd51dd1510001731b77ed1959ff674568417ce9e783c0724fc7ecbaff5b0"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ea90fef733057986c76e7706504e6ed3f1f1568fb8652766039beed71c6a7e35/index.mjs",
    "sha256": "ea90fef733057986c76e7706504e6ed3f1f1568fb8652766039beed71c6a7e35",
    "bytes": 50225,
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
      "loop": true,
      "overflow": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "loop": true,
      "overflow": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "loop": true,
      "overflow": true
    }
  },
  "intake": {
    "at": "2026-10-07T02:22:59.175Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
