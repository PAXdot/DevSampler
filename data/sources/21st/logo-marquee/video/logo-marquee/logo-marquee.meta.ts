// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "brand/logos",
  "tags": [
    "logos",
    "marquee",
    "social proof",
    "customers",
    "trusted by"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 60,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 20,
      "out": 0
    },
    "markers": {
      "settled": 24
    },
    "beats": [
      0,
      8
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
      "y": 0.5,
      "w": 1,
      "h": 0.5
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "lower-third",
    "backdrop": []
  },
  "slots": [
    {
      "key": "label",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "kicker"
    },
    {
      "key": "names",
      "type": "list",
      "maxChars": 16
    },
    {
      "key": "logos",
      "type": "list"
    }
  ],
  "brand": {
    "color": "colors.text",
    "fontFamily": "fonts.heading",
    "serifFontFamily": "fonts.serif",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "row",
      "prop": "x",
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "factor-marketplace/remotion/components/market-logos.tsx"
  },
  "job": "logos",
  "language": "kinetic-poster",
  "mechanic": [
    "assemble"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "label": "Trusted by teams at",
    "names": [
      "Northwind",
      "Globex",
      "Initech",
      "Hooli",
      "Umbrella",
      "Stark & Co",
      "Wayne"
    ],
    "logos": [],
    "color": "#F4F4F5",
    "fontFamily": "Geist",
    "serifFontFamily": "Instrument Serif",
    "monoFontFamily": "Geist Mono",
    "loopSeconds": 14
  },
  "fields": [
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 40,
      "role": "kicker"
    },
    {
      "key": "names",
      "label": "Names",
      "type": "list",
      "max": 12
    },
    {
      "key": "logos",
      "label": "Logos",
      "type": "list",
      "max": 12
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "serifFontFamily",
      "label": "Serif font family",
      "type": "font",
      "brand": "fonts.serif"
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "loopSeconds",
      "label": "Loop seconds",
      "type": "number",
      "min": 4,
      "max": 60
    }
  ],
  "name": "Logo Marquee",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "logo-marquee",
    "bundleSha256": "428ec655280230df9141aea430a27241b23fedc4a58684a95f769ba775247b75",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:56:23.475Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/16x9-paper.png",
        "sha256": "962703e8674b5e755e6197ed1a7e2eddcdcaf5e287f6998633c46d55b5c82fa5"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/16x9-night.png",
        "sha256": "b830ec6d46db302a1244844871abaff1e2442b61ca6f7ed4664ea46d5e47ecd1"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/16x9-color.png",
        "sha256": "75b242f5da6cde2bf1f5fa9a3ea8f41db83830ac52a30ba5e371b7659bf83806"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/9x16-paper.png",
        "sha256": "95dfb80d56bbd84db28644b10d5e297907a971c5334cf32b4ace0da9b21b0f14"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/9x16-night.png",
        "sha256": "7bdf21b4d9999e95b9b4b66b8118a2de3e0a60e322a0dad34c81741a62b5e4f0"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/9x16-color.png",
        "sha256": "cdd01366df641f26146a7f988b6ae046a46e72729e29ecc10cdf5d4fdb192b2c"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/1x1-paper.png",
        "sha256": "75e5a6363e9b12767b35aef25817a8e74cf47c42aeba3e66acb242043dff525c"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/1x1-night.png",
        "sha256": "d7d72e97d3c96025d17c6eb49311aeb06040efb901850ed7c4a318fd71738cb3"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/1x1-color.png",
        "sha256": "ed9552653796863de1b0535cf0c6dc1bb1bca52ce01a9b6f09d4754b62e93372"
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
          "logo-marquee--16x9",
          "logo-marquee--9x16",
          "logo-marquee--1x1"
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
            "paperNight": 31.72260199652778,
            "paperColor": 11.621988932291666,
            "region": {
              "left": 236,
              "top": 714,
              "width": 1535,
              "height": 166
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 33.305935329861114,
            "paperColor": 12.170166015625,
            "region": {
              "left": 86,
              "top": 1067,
              "width": 970,
              "height": 739
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 34.94330512152778,
            "paperColor": 10.96120876736111,
            "region": {
              "left": 149,
              "top": 749,
              "width": 848,
              "height": 105
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
            "occupancy": 0.2732712812491252,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2858648121028247,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3441110883653874,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9162808641975311,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9722238625388429,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8828812839436188,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.19510776418477774,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.20546970502878795,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.18828404704360027,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 10.390733506944445,
        "frames": [
          3,
          24,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 10.390733506944445,
            "retainedAlpha": 0.9950852847643827,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/16x9-duration-60-frame-3.png",
                "sha256": "82391f65018feb3660dde9c6ee8f29d7da7bdc85965ffa9b4fd88041cc2f7ccd",
                "alphaMass": 121
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/16x9-duration-60-frame-24.png",
                "sha256": "caec4e5286f6f8b5da70eeef180aa28e03a62dff1288ebc9094ac8219b26bd14",
                "alphaMass": 2693
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/16x9-duration-60-frame-52.png",
                "sha256": "0f3c5bfd9cf811b914fb45a0f9cc44d192c8ec6bbf6c50758fece332e24b018a",
                "alphaMass": 3459
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/16x9-duration-60-frame-59.png",
                "sha256": "7cc5981a342179b0bb78acabb44a4ceaa7bf6ae0c2da99f4cb9c0682a230a1f2",
                "alphaMass": 3442
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 10.390733506944445,
            "retainedAlpha": 1.184853700516351,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/16x9-duration-900-frame-3.png",
                "sha256": "82391f65018feb3660dde9c6ee8f29d7da7bdc85965ffa9b4fd88041cc2f7ccd",
                "alphaMass": 121
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/16x9-duration-900-frame-24.png",
                "sha256": "caec4e5286f6f8b5da70eeef180aa28e03a62dff1288ebc9094ac8219b26bd14",
                "alphaMass": 2693
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/16x9-duration-900-frame-792.png",
                "sha256": "00b959da079692d4c47e81587b739d53866a3c1598e1b563384a23dd60eba2ed",
                "alphaMass": 2905
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/16x9-duration-900-frame-899.png",
                "sha256": "7cc5981a342179b0bb78acabb44a4ceaa7bf6ae0c2da99f4cb9c0682a230a1f2",
                "alphaMass": 3442
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 29.990559895833332,
            "retainedAlpha": 1.0882733347704248,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/9x16-duration-60-frame-3.png",
                "sha256": "c2263ff5b34813204a1635d6a1de908fded8888dd8c71f064b357aa633b19246",
                "alphaMass": 503
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/9x16-duration-60-frame-24.png",
                "sha256": "ecb29209ec446ffc0d72b81fa8f253a4afac013bf52b01c69250428586950d88",
                "alphaMass": 9893
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/9x16-duration-60-frame-52.png",
                "sha256": "ba23c317222df8c85c917e3cac019ac966a5cbfd253d39a3d1852c113197be3f",
                "alphaMass": 9278
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/9x16-duration-60-frame-59.png",
                "sha256": "0c6a19eed2a260d5d7faa43dbeab8cbfbeb9dbddd6936b51546aa9daf9035cee",
                "alphaMass": 10097
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 29.990559895833332,
            "retainedAlpha": 1.0108118930823906,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/9x16-duration-900-frame-3.png",
                "sha256": "c2263ff5b34813204a1635d6a1de908fded8888dd8c71f064b357aa633b19246",
                "alphaMass": 503
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/9x16-duration-900-frame-24.png",
                "sha256": "ecb29209ec446ffc0d72b81fa8f253a4afac013bf52b01c69250428586950d88",
                "alphaMass": 9893
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/9x16-duration-900-frame-792.png",
                "sha256": "928dc5a7675291f0fa239f923f050006f7ea0163471acf40a38001c462e06bb9",
                "alphaMass": 9989
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/9x16-duration-900-frame-899.png",
                "sha256": "0c6a19eed2a260d5d7faa43dbeab8cbfbeb9dbddd6936b51546aa9daf9035cee",
                "alphaMass": 10097
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 11.197699652777779,
            "retainedAlpha": 0.969106463878327,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/1x1-duration-60-frame-3.png",
                "sha256": "b493e6937b752600f1b1cb5b04536056ed33dc7b95eed1962aed16b9c7e873e4",
                "alphaMass": 84
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/1x1-duration-60-frame-24.png",
                "sha256": "a6be6443ac57e7ffa050e2b9f90ce288ec8f82e909819f6f7c9f27061b3f3c70",
                "alphaMass": 2181
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/1x1-duration-60-frame-52.png",
                "sha256": "c0773075e164b4f017439d6d497f1e505b125a26b10310fe880a22811719f8ec",
                "alphaMass": 2104
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/1x1-duration-60-frame-59.png",
                "sha256": "a5cb6ead87d3abff3500b9089e0c426b665be79165dadf3dc3d01eca64c08c66",
                "alphaMass": 2039
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 11.197699652777779,
            "retainedAlpha": 0.8683986371379898,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/1x1-duration-900-frame-3.png",
                "sha256": "b493e6937b752600f1b1cb5b04536056ed33dc7b95eed1962aed16b9c7e873e4",
                "alphaMass": 84
              },
              {
                "frame": 24,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/1x1-duration-900-frame-24.png",
                "sha256": "a6be6443ac57e7ffa050e2b9f90ce288ec8f82e909819f6f7c9f27061b3f3c70",
                "alphaMass": 2181
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/1x1-duration-900-frame-792.png",
                "sha256": "88eebcb73e2d7cdfcf47f7834742e0ecd548bd38e4157f9bf07b6df63e02a4a7",
                "alphaMass": 2348
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/logo-marquee/1x1-duration-900-frame-899.png",
                "sha256": "a5cb6ead87d3abff3500b9089e0c426b665be79165dadf3dc3d01eca64c08c66",
                "alphaMass": 2039
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
        "note": "A trusted-by row of customer logos scrolls under a caption."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 10,
        "compared": 10,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "428ec655280230df9141aea430a27241b23fedc4a58684a95f769ba775247b75",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.980244Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/logo-marquee/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/logo-marquee/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/logo-marquee/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 24,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "6be6518249c107639b9ae77989af71544cfbf72f08282a8125f3cc7f650c4988",
        "loop": "7597026df394cfbed6d337c90a752dab11afb698a59a6ab1064c76f3b772d6f6",
        "detail": "a40f96910b91d17ed9a24ab1e35f5a9c6c6cbbfc4a6f1ad7822dac2e632a11bd"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/logo-marquee/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/logo-marquee/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/logo-marquee/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 24,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "ca3aadd1b1588b505295a0c2802ff1c4f7e65f464d40ef15be04a9bc508f265c",
        "loop": "c8a69f5b6503a0f677cb14871adb44eca70f111518a32077ca5f710b141d0964",
        "detail": "725cadae125d19dcafe8dbc27502a08d5a15070ddad9fb2f07f15f25801536bf"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/logo-marquee/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/logo-marquee/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/logo-marquee/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 24,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "333fbbed20ea85f5c03b80211290c2c602a72c384872e4fe6e285c333f5fc6f2",
        "loop": "353dcda0dbecd5a89ff51573271f159daf0e82f7a80e93e0ced0757f03889530",
        "detail": "b019e21b49c3fbf0432522bb679cbacd84cb14bd662bc8c1441508d8288af8df"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/428ec655280230df9141aea430a27241b23fedc4a58684a95f769ba775247b75/index.mjs",
    "sha256": "428ec655280230df9141aea430a27241b23fedc4a58684a95f769ba775247b75",
    "bytes": 161964,
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
    "at": "2026-10-07T02:28:32.959Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
