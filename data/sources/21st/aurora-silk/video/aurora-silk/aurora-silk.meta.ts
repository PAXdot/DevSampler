// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "background",
  "category": "background/aurora",
  "tags": [
    "background",
    "aurora",
    "silk",
    "ribbons",
    "gradient",
    "ambient",
    "loop"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 240,
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
      60,
      120,
      180
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
    "c1": "colors.primary",
    "c2": "colors.secondary",
    "background": "colors.background",
    "c3": "colors.primary"
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
      "frame": 60
    },
    "hover": [
      0,
      240
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (Canvas2D port of the aurora hero look)"
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
    "c1": "#3D63FF",
    "c2": "#898B8F",
    "c3": "#22D3EE",
    "background": "#07070A",
    "ribbons": 4,
    "intensity": 0.75,
    "cycles": 1,
    "grain": true
  },
  "fields": [
    {
      "key": "c1",
      "label": "C 1",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "c2",
      "label": "C 2",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "c3",
      "label": "C 3",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "ribbons",
      "label": "Ribbons",
      "type": "number",
      "step": 1,
      "min": 2,
      "max": 6
    },
    {
      "key": "intensity",
      "label": "Intensity",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "cycles",
      "label": "Cycles",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 4
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    }
  ],
  "name": "Aurora Silk",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "aurora-silk",
    "bundleSha256": "26a1a7709491d2fc1c1b3c43f368751508685c340fd6c626f330b59513ad59c3",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T01:18:58.983Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/16x9-paper.png",
        "sha256": "5e58295e2b89c084536938e07030fa23f0ce122509b469c7f2ebc52de7a0c782"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/16x9-night.png",
        "sha256": "58d2414a456870869c6a94d85323e9f4b6d50221efad30cd1099adcde3fbad11"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/16x9-color.png",
        "sha256": "1f9cbfe6dca798bdaba58208d3f591cbe808227ba8361b50114171ab4c0cb570"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/9x16-paper.png",
        "sha256": "e0a568e81a8480840e45f1354f2d81c3bfe06750936a5bfc18bf314b4c3e2548"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/9x16-night.png",
        "sha256": "085532be363a0f4517f39f2d6460e2c0cccb3961c596605a32aeeaab294dbfd1"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/9x16-color.png",
        "sha256": "5b519f3c1017d3e1a767fbab3bed4950c0879c46ff7241d16c9fbc649950d2ab"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/1x1-paper.png",
        "sha256": "7d6adbcc2b3c4c8665fbad2e943c952d95d760793a670dc9f24ce0246e3cfb78"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/1x1-night.png",
        "sha256": "1af3dc5c1d531f45f25c59b7d0fbd51424519c483dedfd568bc5f7b8aa504eeb"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/1x1-color.png",
        "sha256": "281574b5cc4b4eb7279276db82ff408aeac2bcff7f56508de98b458f528f2c2a"
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
          "aurora-silk--16x9",
          "aurora-silk--9x16",
          "aurora-silk--1x1"
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
            "paperNight": 49.213541666666664,
            "paperColor": 51.1298828125,
            "region": {
              "left": 0,
              "top": 90,
              "width": 1920,
              "height": 922
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 53.086642795138886,
            "paperColor": 54.768717447916664,
            "region": {
              "left": 0,
              "top": 216,
              "width": 1080,
              "height": 1564
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 50.018229166666664,
            "paperColor": 52.444552951388886,
            "region": {
              "left": 0,
              "top": 90,
              "width": 1080,
              "height": 916
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
            "occupancy": 1.2098975392626188,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2098975392626188,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2098975392626188,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.154454837490552,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.154454837490552,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.154454837490552,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2020240194843372,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2020240194843372,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2020240194843372,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 10.837348090277779,
        "frames": [
          28,
          108,
          239
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 10.837348090277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/16x9-duration-60-frame-7.png",
                "sha256": "ff6ff8867ed0c27dcc26fc2c582377b7140e4338de3e7d9e9f160c82069eae48",
                "alphaMass": 587520
              },
              {
                "frame": 27,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/16x9-duration-60-frame-27.png",
                "sha256": "9f929456268d0eaf1bd36e535c661d99d754028ef1f2da21672c566423a73964",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/16x9-duration-60-frame-52.png",
                "sha256": "36c578ead8ca72c91bad5627ff04f10490ce2ac9a26de75eefe0b314ad6a45b7",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/16x9-duration-60-frame-59.png",
                "sha256": "3598a292106cbecd8dc430212085f2dcb3552f45e9261e71ecf5179aba28e3dc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 1800,
            "averageChannelDifference": 10.8564453125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 216,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/16x9-duration-1800-frame-216.png",
                "sha256": "cf7e94e69e878f2920faa0936c13cdbbb96b01eae7cd237d7a5860b8eb83ff0f",
                "alphaMass": 587520
              },
              {
                "frame": 810,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/16x9-duration-1800-frame-810.png",
                "sha256": "9f929456268d0eaf1bd36e535c661d99d754028ef1f2da21672c566423a73964",
                "alphaMass": 587520
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/16x9-duration-1800-frame-1584.png",
                "sha256": "b910a8438c9f8c3a2d7e392a6263ccb48c7d1d2914b340014f9b5edc7ec45094",
                "alphaMass": 587520
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/16x9-duration-1800-frame-1799.png",
                "sha256": "8357740a186f732ba4f4a13e379b966f0443320c54c1e24b4806767be3bc1920",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 8.76681857638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/9x16-duration-60-frame-7.png",
                "sha256": "f2c92e2da5088e402c98606935c6c425607a1cc92db0ffcd1a276fef5f464e37",
                "alphaMass": 587520
              },
              {
                "frame": 27,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/9x16-duration-60-frame-27.png",
                "sha256": "8da731abfc3fe616d56e12689cb1d631a640a54e54643b9a7c3454611f78309e",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/9x16-duration-60-frame-52.png",
                "sha256": "fa1e69cc498f9a81f764dffe8f54811570aba5aceedcf07d5c878962966046b4",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/9x16-duration-60-frame-59.png",
                "sha256": "7cd91a564e4a1c2c9cf4e47f86c789de4cbc20f4871fe2cbf7c34afda75668cb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 1800,
            "averageChannelDifference": 8.77365451388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 216,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/9x16-duration-1800-frame-216.png",
                "sha256": "799e531781646442cf4de41e981e606f59266b29f036cee9f32492d0956e5d90",
                "alphaMass": 587520
              },
              {
                "frame": 810,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/9x16-duration-1800-frame-810.png",
                "sha256": "8da731abfc3fe616d56e12689cb1d631a640a54e54643b9a7c3454611f78309e",
                "alphaMass": 587520
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/9x16-duration-1800-frame-1584.png",
                "sha256": "67dcee8fe693862125b29d173abf9fcd14abcccba5385e548d8d97a03b016545",
                "alphaMass": 587520
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/9x16-duration-1800-frame-1799.png",
                "sha256": "e3259e1bed37a2da9319db540ed8ec473134bccc7c8a759e5d2ebf565d979f11",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 10.707573784722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/1x1-duration-60-frame-7.png",
                "sha256": "5a6a723010ff2cc5aae7549376697b49cb5f5e20e0c7ae05c6912641e0db8d31",
                "alphaMass": 587520
              },
              {
                "frame": 27,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/1x1-duration-60-frame-27.png",
                "sha256": "be4a932c072d728c85a560bb802f212a34edf77b7bac664ba9c4ad59081c3708",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/1x1-duration-60-frame-52.png",
                "sha256": "3da10f6b314c88e5c68195e021e82683ee9288422f3de4fa6be2012bcf470e52",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/1x1-duration-60-frame-59.png",
                "sha256": "e1d2f6a51a2a6bdac74824656bbf1d071144c172ba5aa40e4ae81ccff7a8cb8d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 1800,
            "averageChannelDifference": 10.72732204861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 216,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/1x1-duration-1800-frame-216.png",
                "sha256": "af3f5e392f2b5495dd30373f8dae9d4cce76f36cf657739de9f267dd3c770939",
                "alphaMass": 587520
              },
              {
                "frame": 810,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/1x1-duration-1800-frame-810.png",
                "sha256": "be4a932c072d728c85a560bb802f212a34edf77b7bac664ba9c4ad59081c3708",
                "alphaMass": 587520
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/1x1-duration-1800-frame-1584.png",
                "sha256": "087ddbcefcbad56c80f5f96c34792bb79dad07ec75d7889f335004d66050f46b",
                "alphaMass": 587520
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-np-0/aurora-silk/1x1-duration-1800-frame-1799.png",
                "sha256": "70cc0b1fa30ee1dfa30010e55aa91396c93303e1a9173d6ac8a31a1fd8c4978f",
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
        "note": "Silk light ribbons drift across a dark field in brand blue, cyan and neutral; no purple; brand palettes recolor the ribbons."
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
      "bundleSha256": "26a1a7709491d2fc1c1b3c43f368751508685c340fd6c626f330b59513ad59c3",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/aurora-silk/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/aurora-silk/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/aurora-silk/16x9/detail.mp4",
      "bg": "#07070a",
      "posterFrame": 60,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "302480590bb0fcf8bc8c45905467865d9faca6f528e7155b23c88fdb0f321e06",
        "loop": "6a8b62773da35021cb7d2ee4f6f10f6537e13a90f2c9939bed0ffa55d86e12ff",
        "detail": "aae9043ea8158a7bd68603193a8dbba381617afbe7f524e5723bcdc5cd358f14"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/aurora-silk/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/aurora-silk/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/aurora-silk/9x16/detail.mp4",
      "bg": "#07070a",
      "posterFrame": 60,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "276c10bff6d92fb3cc8ace57f48a2d2dc96a2e0318ed7280691946901aa961fe",
        "loop": "5f1cd6838e81298d0827d8a88710981a86484370d7658b405ffe7a0a8d2fe446",
        "detail": "33675a70c04d9d8cb6ecb81f09d5465b3194b9389805663b26bc371deeb45c05"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/aurora-silk/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/aurora-silk/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/aurora-silk/1x1/detail.mp4",
      "bg": "#07070a",
      "posterFrame": 60,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "2265b68f4382792d3abb675224ca38846488f943bb1aeee94626beaa76d96b8e",
        "loop": "00c9a8b6b0efd15cfe9bd746f6c6c15101b9d5167cf34dfe63eb995593e81d5c",
        "detail": "6bd1bd432f140a735fcb61523f8d87138d23c87f53052ae62d6a0f69f7c51925"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/26a1a7709491d2fc1c1b3c43f368751508685c340fd6c626f330b59513ad59c3/index.mjs",
    "sha256": "26a1a7709491d2fc1c1b3c43f368751508685c340fd6c626f330b59513ad59c3",
    "bytes": 53302,
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
    "at": "2026-10-09T03:06:27.844Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
