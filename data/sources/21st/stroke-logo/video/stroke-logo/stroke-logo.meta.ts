// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "brand/logo-reveal",
  "tags": [
    "logo",
    "stroke",
    "line art",
    "draw on",
    "gradient",
    "reveal",
    "calm",
    "brand"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 84,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 74,
      "out": 0
    },
    "markers": {
      "settled": 74,
      "drawn": 66
    },
    "beats": [
      4,
      14,
      66
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "1:1",
      "16:9",
      "9:16"
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
      "key": "name",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "name"
    }
  ],
  "brand": {
    "c1": "colors.primary",
    "c3": "colors.secondary",
    "color": "colors.text",
    "fontFamily": "fonts.heading",
    "c2": "colors.secondary"
  },
  "motionBeats": [
    {
      "target": "accentPath",
      "prop": "draw",
      "settledBy": 13,
      "easing": "ease"
    },
    {
      "target": "path",
      "prop": "draw",
      "settledBy": 66,
      "easing": "ease"
    },
    {
      "target": "name",
      "prop": "color",
      "from": "grey",
      "settledBy": 74,
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
      120
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study of V17 and V13, research 2026-10-05)"
  },
  "job": "logos",
  "language": "aura",
  "mechanic": [
    "draw"
  ],
  "energy": "calm",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "path": "M 22 72 C 10 52 18 22 48 18 C 78 14 92 42 84 62 C 76 82 46 88 35 71 C 25 55 39 38 56 42 C 69 45 71 61 58 65",
    "accentPath": "M 74 9 C 80 4 88 5 92 10",
    "c1": "#FF6A3D",
    "c2": "#8E9094",
    "c3": "#3D8BFF",
    "strokeWidth": 7,
    "name": "Halo",
    "color": "#F4F4F5",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "path",
      "label": "Path",
      "type": "text",
      "max": 2000
    },
    {
      "key": "accentPath",
      "label": "Accent path",
      "type": "text",
      "max": 2000
    },
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
      "brand": "colors.secondary"
    },
    {
      "key": "strokeWidth",
      "label": "Stroke width",
      "type": "number",
      "min": 2,
      "max": 14
    },
    {
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 24,
      "role": "name"
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
    }
  ],
  "name": "Stroke Logo Draw",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "stroke-logo",
    "bundleSha256": "8f58286bc9104fc4d7f393d8d678498ec80b5743ff3da02adab92dba33de409c",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:46:16.073Z",
    "samples": [
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/1x1-paper.png",
        "sha256": "94fbf8bfb5486b94cf312249873b1bcfdc01316d4f0b28d01c82cb90257d04dd"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/1x1-night.png",
        "sha256": "db530ed20797cda89b4bfdbc18ac294e802f048f9b3c19f9e94d69c1757b03fb"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/1x1-color.png",
        "sha256": "1a77bbc0ce6f654345fd57ec8622d1b23f37d331491754f4554d0c2a1bbf32af"
      },
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/16x9-paper.png",
        "sha256": "95ada712c0e0ae9cf1a8351901410b7659c54780d1368877cb148c6da1229607"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/16x9-night.png",
        "sha256": "32e660c08a428940e565cea86457e4bd0f8eadbe270d58f1baad0dc439fc6bdd"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/16x9-color.png",
        "sha256": "6239db625cdeac8ab357d91ae4407c4e64bbc7afcc13fbc4ab85cac3f059605f"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/9x16-paper.png",
        "sha256": "d834301ec53e8912bf5cc30c1d4798333204d393c0bb561e79ac723640589e39"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/9x16-night.png",
        "sha256": "1dad51b1213aa8a73f39bbcf6a227e6d83a8e93c7e2e6c66e8f6f42b9fc75b38"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/9x16-color.png",
        "sha256": "399c27abbfbb5836bd7e9ce23191dd83fc7877411765dffad16862991f7aee0a"
      }
    ],
    "gates": {
      "contract": {
        "pass": true,
        "errors": [],
        "transparency": [
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "stroke-logo--1x1",
          "stroke-logo--16x9",
          "stroke-logo--9x16"
        ]
      },
      "brand": {
        "pass": true,
        "sourcePaintLiterals": [],
        "sourceFontLiterals": [],
        "samples": [
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 21.898681640625,
            "paperColor": 12.861138237847221,
            "region": {
              "left": 369,
              "top": 251,
              "width": 376,
              "height": 538
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 21.898681640625,
            "paperColor": 12.861138237847221,
            "region": {
              "left": 789,
              "top": 251,
              "width": 376,
              "height": 538
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 21.62006293402778,
            "paperColor": 12.819986979166666,
            "region": {
              "left": 264,
              "top": 482,
              "width": 607,
              "height": 873
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          }
        ],
        "note": "Measured three rebrands over their actual subject union; contract checks color bindings. Visual brand adherence needs semantic review."
      },
      "readability": {
        "pass": true,
        "probes": [
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5101587197903091,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5120622971029595,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5092069311339839,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.28696427988204887,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.28803504212041475,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2864288987628659,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7536685316702127,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7545328304450639,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7502113365708081,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 10.34689670138889,
        "frames": [
          11,
          74,
          119
        ],
        "elastic": [
          {
            "aspect": "1:1",
            "duration": 84,
            "averageChannelDifference": 16.828450520833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/1x1-duration-84-frame-10.png",
                "sha256": "5cca9c075f2e211ed501ec3631c17f5b46715d3e16360d3d77a340cb1823dbbf",
                "alphaMass": 1887
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/1x1-duration-84-frame-74.png",
                "sha256": "f7ad5bcc407382ad3621ffb2ccd76951c1f76605f93fd2d048af421943992ce7",
                "alphaMass": 25363
              },
              {
                "frame": 73,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/1x1-duration-84-frame-73.png",
                "sha256": "f7ad5bcc407382ad3621ffb2ccd76951c1f76605f93fd2d048af421943992ce7",
                "alphaMass": 25363
              },
              {
                "frame": 83,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/1x1-duration-84-frame-83.png",
                "sha256": "f7ad5bcc407382ad3621ffb2ccd76951c1f76605f93fd2d048af421943992ce7",
                "alphaMass": 25363
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 16.78005642361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/1x1-duration-600-frame-11.png",
                "sha256": "29b67901548fda1ca897bdef8480a37ba7fc9681faf643d62951c08a9f1f33cb",
                "alphaMass": 1927
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/1x1-duration-600-frame-74.png",
                "sha256": "f7ad5bcc407382ad3621ffb2ccd76951c1f76605f93fd2d048af421943992ce7",
                "alphaMass": 25363
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/1x1-duration-600-frame-528.png",
                "sha256": "f7ad5bcc407382ad3621ffb2ccd76951c1f76605f93fd2d048af421943992ce7",
                "alphaMass": 25363
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/1x1-duration-600-frame-599.png",
                "sha256": "f7ad5bcc407382ad3621ffb2ccd76951c1f76605f93fd2d048af421943992ce7",
                "alphaMass": 25363
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 84,
            "averageChannelDifference": 10.356119791666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/16x9-duration-84-frame-10.png",
                "sha256": "7cabe64363385d8c05d80113292389da91da5915f56391966e742a57dba35c7a",
                "alphaMass": 1080
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/16x9-duration-84-frame-74.png",
                "sha256": "a2251e92d023872cc6b2546bdf7b63f7c8564ff5f43bf52b0e87d655c4066657",
                "alphaMass": 14531
              },
              {
                "frame": 73,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/16x9-duration-84-frame-73.png",
                "sha256": "a2251e92d023872cc6b2546bdf7b63f7c8564ff5f43bf52b0e87d655c4066657",
                "alphaMass": 14531
              },
              {
                "frame": 83,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/16x9-duration-84-frame-83.png",
                "sha256": "a2251e92d023872cc6b2546bdf7b63f7c8564ff5f43bf52b0e87d655c4066657",
                "alphaMass": 14531
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 10.34689670138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/16x9-duration-600-frame-11.png",
                "sha256": "09c7b17471e86260a164fafd708a6780f8aff9f55f513cfffd617a5a01644c00",
                "alphaMass": 1104
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/16x9-duration-600-frame-74.png",
                "sha256": "a2251e92d023872cc6b2546bdf7b63f7c8564ff5f43bf52b0e87d655c4066657",
                "alphaMass": 14531
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/16x9-duration-600-frame-528.png",
                "sha256": "a2251e92d023872cc6b2546bdf7b63f7c8564ff5f43bf52b0e87d655c4066657",
                "alphaMass": 14531
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/16x9-duration-600-frame-599.png",
                "sha256": "a2251e92d023872cc6b2546bdf7b63f7c8564ff5f43bf52b0e87d655c4066657",
                "alphaMass": 14531
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 84,
            "averageChannelDifference": 24.500108506944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/9x16-duration-84-frame-10.png",
                "sha256": "41031b4f87016b0a70d5081b1e3ce398e92a4d07fd2675f0c02d27e5a59f50d4",
                "alphaMass": 2857
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/9x16-duration-84-frame-74.png",
                "sha256": "77790ab151067d763d1c5940855ba053f380ab28fcf324b610500e0440403179",
                "alphaMass": 36944
              },
              {
                "frame": 73,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/9x16-duration-84-frame-73.png",
                "sha256": "77790ab151067d763d1c5940855ba053f380ab28fcf324b610500e0440403179",
                "alphaMass": 36944
              },
              {
                "frame": 83,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/9x16-duration-84-frame-83.png",
                "sha256": "77790ab151067d763d1c5940855ba053f380ab28fcf324b610500e0440403179",
                "alphaMass": 36944
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 24.32009548611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/9x16-duration-600-frame-11.png",
                "sha256": "295ec0f93a13ae46b5644890662ea2efb2cede715cefc2edbd03e4ba31e2ec4d",
                "alphaMass": 2907
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/9x16-duration-600-frame-74.png",
                "sha256": "77790ab151067d763d1c5940855ba053f380ab28fcf324b610500e0440403179",
                "alphaMass": 36944
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/9x16-duration-600-frame-528.png",
                "sha256": "77790ab151067d763d1c5940855ba053f380ab28fcf324b610500e0440403179",
                "alphaMass": 36944
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/stroke-logo/9x16-duration-600-frame-599.png",
                "sha256": "77790ab151067d763d1c5940855ba053f380ab28fcf324b610500e0440403179",
                "alphaMass": 36944
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
        "note": "A spiral logo stroke draws itself in orange, graphite and blue above the name; 0 purple pixels."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 13,
        "compared": 13,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "8f58286bc9104fc4d7f393d8d678498ec80b5743ff3da02adab92dba33de409c",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/stroke-logo/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/stroke-logo/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/stroke-logo/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 74,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "335ce05ec5ff4047995bbd8fb3805661e06110ed84682add9f9ef18032ca39dd",
        "loop": "3863970eb7b9e8ba7d28fd8b78f02d7894666d3f186186cb2e9c807c42d97187",
        "detail": "e2de1495b47bc22cad8126d51a1458c408558f561b1bd62c8237c1ade0e29e7a"
      }
    },
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/stroke-logo/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/stroke-logo/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/stroke-logo/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 74,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "aeaf72453e14e7dea8bb55b5dedba8ae3497658dc085283ce9316ddfdfa229f7",
        "loop": "15f070d8f13879d23e75498259f52f7233a46fbfaf4311c265f393c684207e56",
        "detail": "f2f1f3b935a76c86ecc012bcd4d09338e44b998870999003f42a7850f04f956e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/stroke-logo/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/stroke-logo/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/stroke-logo/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 74,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "61ab325a157ace50486d0a66c85a387cabe445933609f3eab942e46a352f5afe",
        "loop": "adafe7fd2a362129a2f855eaf3041e60ab16772cebb16b85935d67c9bd05dd2c",
        "detail": "0bb4eb26a1515fd5c8f40f679926a6459766d9cb24e16c17f35e27d9dcd93e9a"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/8f58286bc9104fc4d7f393d8d678498ec80b5743ff3da02adab92dba33de409c/index.mjs",
    "sha256": "8f58286bc9104fc4d7f393d8d678498ec80b5743ff3da02adab92dba33de409c",
    "bytes": 161524,
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
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    }
  },
  "intake": {
    "at": "2026-10-09T04:17:31.261Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
