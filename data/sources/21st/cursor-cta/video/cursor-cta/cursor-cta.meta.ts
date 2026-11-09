// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "cta",
    "button",
    "click",
    "press",
    "ripple",
    "signup",
    "hover"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 90,
      "min": 54,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 46,
      "out": 0
    },
    "markers": {
      "settled": 52,
      "click": 32
    },
    "beats": [
      0,
      32
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
      "key": "label",
      "type": "text",
      "maxChars": 26,
      "lines": 1,
      "role": "cta"
    },
    {
      "key": "doneLabel",
      "type": "text",
      "maxChars": 26,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "cursor",
      "prop": "xy",
      "from": "bottom-right",
      "settledBy": 28,
      "easing": "ease"
    },
    {
      "target": "button",
      "prop": "scale",
      "from": "0.96 press",
      "settledBy": 38,
      "easing": "ease"
    },
    {
      "target": "label",
      "prop": "swap",
      "settledBy": 44,
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
    "sourceUrl": "docs/research/video-components-2026-10-05 (V02 CTA click ripple, V12 send click)"
  },
  "job": "cta",
  "language": "product-ui",
  "mechanic": [
    "press"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "label": "Get early access",
    "doneLabel": "You're on the list",
    "variant": "glow",
    "from": "bottom-right",
    "accent": "#3D63FF",
    "theme": "dark",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 26,
      "role": "cta"
    },
    {
      "key": "doneLabel",
      "label": "Done label",
      "type": "text",
      "max": 26,
      "role": "subline"
    },
    {
      "key": "variant",
      "label": "Variant",
      "type": "select",
      "options": [
        "solid",
        "glow",
        "outline"
      ]
    },
    {
      "key": "from",
      "label": "From",
      "type": "select",
      "options": [
        "bottom-right",
        "bottom-left",
        "left",
        "right"
      ]
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Cursor CTA Press",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cursor-cta",
    "bundleSha256": "fbc5f445d036ec7d7bfc6a18883b04b06d13972ed4d393a9eaf24b779b3e08fa",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:58:05.549Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/16x9-paper.png",
        "sha256": "65cca1392fc12b20b5f50ab9e183cfcc8b5f945ff84dbbcffc828ecc384c1b66"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/16x9-night.png",
        "sha256": "10fd754aab16cd8758d7321564be5b49280c27dba526a68642ecf88c1f887a5d"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/16x9-color.png",
        "sha256": "9db1b5ec66c029cf5b89630299dfa4fe7dc4ad18bec7674c1d33796c2ac82673"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/9x16-paper.png",
        "sha256": "06760309129134e37fbf9d4fc08303a41bdcde46b25d0392ccf2c90ca3fae07c"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/9x16-night.png",
        "sha256": "f3eac3195bd5e67bc9a4bd03b36357fd3cf80c31be223a6afde9260e89e82943"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/9x16-color.png",
        "sha256": "39e93433392df52835ae3c40291f1808bcf3fbb139932ed243c64f2caccc6e34"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/1x1-paper.png",
        "sha256": "fcc7ca1e175ec2194794815c4ceeebe7232e3075a9aaa3b04dd718d3253edbaa"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/1x1-night.png",
        "sha256": "5d57cbcfe09277a8a18011d956946643156b3ab7c365e252809a895856bbad71"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/1x1-color.png",
        "sha256": "14a703e4374a79a229a4efb8540f7cf5169c61ad06b1aa8c86d30332b55b925c"
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
          "cursor-cta--16x9",
          "cursor-cta--9x16",
          "cursor-cta--1x1"
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
            "paperNight": 46.17494032118056,
            "paperColor": 67.92043728298611,
            "region": {
              "left": 694,
              "top": 433,
              "width": 532,
              "height": 236
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 45.608615451388886,
            "paperColor": 55.236572265625,
            "region": {
              "left": 82,
              "top": 574,
              "width": 916,
              "height": 782
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 46.54595269097222,
            "paperColor": 68.38791232638889,
            "region": {
              "left": 358,
              "top": 467,
              "width": 364,
              "height": 161
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
            "occupancy": 0.17809965528563965,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.17877172945652886,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.15224900576764486,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9620456979087932,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9620456979087932,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9620456979087932,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.14834740004064423,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.14834740004064423,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.1267701486935271,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.0999348958333333,
        "frames": [
          7,
          52,
          89
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 54,
            "averageChannelDifference": 1.1047092013888888,
            "retainedAlpha": 0.9760843638189693,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/16x9-duration-54-frame-6.png",
                "sha256": "055edbdbac7551d630869dd7fd33f5c95867f2f0448176a6a7ef8cc41c381a2f",
                "alphaMass": 15273
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/16x9-duration-54-frame-52.png",
                "sha256": "cfb560f019a4759f03e3c53f9fb4bb153d2c0fc5d18ae8700feb2bd0bc40d367",
                "alphaMass": 15543
              },
              {
                "frame": 47,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/16x9-duration-54-frame-47.png",
                "sha256": "2fb84aeaf247f42c0b6100a96697152155ed6fb63f8ae9764f5212f5e2124ffa",
                "alphaMass": 15931
              },
              {
                "frame": 53,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/16x9-duration-54-frame-53.png",
                "sha256": "85116952d72b2299c1a78b9ad0547df2ffc97d6196b911689d29ab28395fd241",
                "alphaMass": 15550
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 1.0999348958333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/16x9-duration-600-frame-7.png",
                "sha256": "88bb57065d66737748788a1403c9863935cd573b41f2af34433716fc2245f558",
                "alphaMass": 15287
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/16x9-duration-600-frame-52.png",
                "sha256": "cfb560f019a4759f03e3c53f9fb4bb153d2c0fc5d18ae8700feb2bd0bc40d367",
                "alphaMass": 15543
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/16x9-duration-600-frame-528.png",
                "sha256": "702b1a3858ef0da70d8983df3bdb1d5c667cb438265d446d2e0bebc4e9f02e4e",
                "alphaMass": 15562
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/16x9-duration-600-frame-599.png",
                "sha256": "702b1a3858ef0da70d8983df3bdb1d5c667cb438265d446d2e0bebc4e9f02e4e",
                "alphaMass": 15562
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 54,
            "averageChannelDifference": 2.2924262152777777,
            "retainedAlpha": 0.9870804994982718,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/9x16-duration-54-frame-6.png",
                "sha256": "0f264aaf65bce518fc0bfe6517d582e2edf42a59e772c3a2f68f4995567dfb11",
                "alphaMass": 141354
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/9x16-duration-54-frame-52.png",
                "sha256": "18112dd50352fe099ecc257ce413ac1c477321154861260d2890b9b15c676e86",
                "alphaMass": 141646
              },
              {
                "frame": 47,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/9x16-duration-54-frame-47.png",
                "sha256": "b4216c48a8dab082a94c182029fcd5c6290ff308ce1fc7314695289bca4dacd9",
                "alphaMass": 143504
              },
              {
                "frame": 53,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/9x16-duration-54-frame-53.png",
                "sha256": "e562bb7198b4b21d49f621abaf4a9c36d23c22926ab95d279ce66867a8da4fa1",
                "alphaMass": 141650
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 2.130642361111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/9x16-duration-600-frame-7.png",
                "sha256": "95af4e3a0e8d852a92456cd50182b639561045e913b936e039c16619bfc61384",
                "alphaMass": 141535
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/9x16-duration-600-frame-52.png",
                "sha256": "18112dd50352fe099ecc257ce413ac1c477321154861260d2890b9b15c676e86",
                "alphaMass": 141646
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/9x16-duration-600-frame-528.png",
                "sha256": "5e01f466afd1633e88ccb85a756b617f42be6519dbfc34a6e1fcac138b86e473",
                "alphaMass": 141735
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/9x16-duration-600-frame-599.png",
                "sha256": "5e01f466afd1633e88ccb85a756b617f42be6519dbfc34a6e1fcac138b86e473",
                "alphaMass": 141735
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 54,
            "averageChannelDifference": 1.0972222222222223,
            "retainedAlpha": 0.9785783836416748,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/1x1-duration-54-frame-6.png",
                "sha256": "c05601779a59c9864f0b73a8ec13e0dbbe87c99e509eaf787680bb7f0764e74e",
                "alphaMass": 12791
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/1x1-duration-54-frame-52.png",
                "sha256": "9f3c7036847d1795ef800fc4617b7bbe97542d05581af654d4d3d40720ca29ff",
                "alphaMass": 13065
              },
              {
                "frame": 47,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/1x1-duration-54-frame-47.png",
                "sha256": "3821d2924ee736e81fd32fe872bd0743d70d259231dace4294eaea977fa07a27",
                "alphaMass": 13351
              },
              {
                "frame": 53,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/1x1-duration-54-frame-53.png",
                "sha256": "82ad7d23c5fa5131ed96976f5d1b51f93a1b6f6e6f31aff45f31aceccbd56d31",
                "alphaMass": 13065
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 0.8916015625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/1x1-duration-600-frame-7.png",
                "sha256": "8c475e34c3cfade1597f360eb994a60dbbf2411dfb8dd344a1c32d4679ee7d88",
                "alphaMass": 12814
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/1x1-duration-600-frame-52.png",
                "sha256": "9f3c7036847d1795ef800fc4617b7bbe97542d05581af654d4d3d40720ca29ff",
                "alphaMass": 13065
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/1x1-duration-600-frame-528.png",
                "sha256": "8e08c9a30d397c898b08b8279a91ec376c25adc71a4ce4841a31d3b5dd8ccbce",
                "alphaMass": 13075
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/cursor-cta/1x1-duration-600-frame-599.png",
                "sha256": "8e08c9a30d397c898b08b8279a91ec376c25adc71a4ce4841a31d3b5dd8ccbce",
                "alphaMass": 13075
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "cta",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A cursor presses Get early access and it confirms You're on the list; small CTA."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 3,
        "compared": 3,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "fbc5f445d036ec7d7bfc6a18883b04b06d13972ed4d393a9eaf24b779b3e08fa",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.933213Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-cta/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-cta/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-cta/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 52,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "3c5fab25c5f693e91c4c0d869718b06cd0e8540021a36ee77e1512a99b35c9e1",
        "loop": "896d55d02f5712133410805d0c807a8b4e48fe888abe020df536d8130790a5da",
        "detail": "4e2b76758b3b55ef155486428a8036541584d2b46166116e703948823f8e9ace"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-cta/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-cta/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-cta/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 52,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "ce013357c6825287c230d25aad483f03323680fe7c4050cccf5739fecd6d8adf",
        "loop": "606ecdac652163680623d03dac13732fb387207f4a6edb6add44fb707ccbcd06",
        "detail": "8ddbc5aa673a0da826e1ca59b9785efad5a2797f0a6b35ef3888b5282db9c7e5"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-cta/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-cta/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-cta/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 52,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "a67c1da76f3a024a029940046cfb69bda4e3de0e6cf5b49118206201cf695ac1",
        "loop": "cd79b1649dafb183ee09e1f073939d42c0093aaca192986ff0aa2fe7bc9311af",
        "detail": "b482be3af37e18147a2fe4921127407734392c7add5e32a5ef6b251333e6591c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/fbc5f445d036ec7d7bfc6a18883b04b06d13972ed4d393a9eaf24b779b3e08fa/index.mjs",
    "sha256": "fbc5f445d036ec7d7bfc6a18883b04b06d13972ed4d393a9eaf24b779b3e08fa",
    "bytes": 170398,
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
    "at": "2026-10-07T02:20:52.295Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
