// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "pen",
    "annotation",
    "marker",
    "handwriting",
    "chart",
    "metric",
    "highlight",
    "growth"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 165,
      "min": 90,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 130,
      "out": 0
    },
    "markers": {
      "settled": 130,
      "circle": 28,
      "arrow": 66,
      "note": 99
    },
    "beats": [
      0,
      28,
      66,
      99
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
      "key": "title",
      "type": "text",
      "maxChars": 28,
      "lines": 1,
      "role": "title"
    },
    {
      "key": "subtitle",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "subline"
    },
    {
      "key": "metric",
      "type": "text",
      "maxChars": 8,
      "lines": 1,
      "role": "stat"
    },
    {
      "key": "note",
      "type": "text",
      "maxChars": 20,
      "lines": 1,
      "role": "annotation"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "ink": "colors.secondary",
    "surfaceColor": "colors.background",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "handFontFamily": "fonts.accent"
  },
  "motionBeats": [
    {
      "target": "bars",
      "prop": "height",
      "from": "0",
      "settledBy": 34,
      "easing": "ease"
    },
    {
      "target": "cursor",
      "prop": "shape",
      "from": "arrow",
      "settledBy": 24,
      "easing": "linear"
    },
    {
      "target": "circle",
      "prop": "stroke",
      "from": "0",
      "settledBy": 60,
      "easing": "ease"
    },
    {
      "target": "arrow",
      "prop": "stroke",
      "from": "0",
      "settledBy": 93,
      "easing": "ease"
    },
    {
      "target": "note",
      "prop": "reveal",
      "from": "left",
      "settledBy": 122,
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
      165
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (a pen cursor circles a chart's number, arrows the bar and writes a note, 2026-10-07)"
  },
  "job": "cursors",
  "language": "hand-drawn",
  "mechanic": [
    "pen-draw"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "title": "Weekly signups",
    "subtitle": "Last 7 weeks",
    "metric": "+128%",
    "note": "best week yet!",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "ink": "#FDE047",
    "surfaceColor": "#09090B",
    "background": "#09090B",
    "fontFamily": "Geist",
    "handFontFamily": "Caveat"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 28,
      "role": "title"
    },
    {
      "key": "subtitle",
      "label": "Subtitle",
      "type": "text",
      "max": 32,
      "role": "subline"
    },
    {
      "key": "metric",
      "label": "Metric",
      "type": "text",
      "max": 8,
      "role": "stat"
    },
    {
      "key": "note",
      "label": "Note",
      "type": "text",
      "max": 20,
      "role": "annotation"
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
      "key": "ink",
      "label": "Ink",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
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
      "key": "handFontFamily",
      "label": "Hand font family",
      "type": "font",
      "brand": "fonts.accent"
    }
  ],
  "name": "Pen Circles the Number",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "pen-annotate",
    "bundleSha256": "425ebf85364554691ef61174ea3283b31ff528b82a9416ff2300ee97810ea08c",
    "sourceSnapshot": {
      "sha256": "e88d3310904f310f1bb8a580317c917e90c868c8a36f0a88fbdd522ee35c5077",
      "files": 1558
    },
    "renderedAt": "2026-10-07T23:46:52.363Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/16x9-paper.png",
        "sha256": "a136d4bfc26b55068427be4e65fd82f98dc50b69eebba97c6b6d0b62f7b310ef"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/16x9-night.png",
        "sha256": "c5da85a093c1c9c10845efd962351b76c3f6512deaf723df8dfa0ffff3077160"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/16x9-color.png",
        "sha256": "bb4807ff18d1d86ea5d9a80e30453008dd53218b9fd09e264afec4650b686f38"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/9x16-paper.png",
        "sha256": "4b294f5b31a55a76cb1baad6e431e83c0f77f3b50bda95b801fb682d8e385fa8"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/9x16-night.png",
        "sha256": "3b42ad2c2d53b51bd20e3d0d0352c968218004ab73c67156f530cc06d457a307"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/9x16-color.png",
        "sha256": "7321af559a09df5b7859a210903025fc01b9af1b29f345a2117e7d330cf6c10e"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/1x1-paper.png",
        "sha256": "cd0228255c5d5317f7da94a434366e62f6e6be9330c9eb8cb870c9c053fa23f3"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/1x1-night.png",
        "sha256": "21e1e57663901bf8a948b60079aebde5630c6fbf59aff3bb3016c62773b362fb"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/1x1-color.png",
        "sha256": "622042cdf931c9869de0127bf93eb50df9df909d777c7c7bc73302ba62d4dab8"
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
          "pen-annotate--16x9",
          "pen-annotate--9x16",
          "pen-annotate--1x1"
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
            "paperNight": 115.75200737847223,
            "paperColor": 17.999430338541668,
            "region": {
              "left": 317,
              "top": 99,
              "width": 1286,
              "height": 938
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 120.99867078993056,
            "paperColor": 20.43996853298611,
            "region": {
              "left": 16,
              "top": 171,
              "width": 1048,
              "height": 1634
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 113.52015516493056,
            "paperColor": 19.219156901041668,
            "region": {
              "left": 28,
              "top": 77,
              "width": 1024,
              "height": 982
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
            "occupancy": 0.7593572408387225,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8244422704781503,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7593572408387225,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0895680127760983,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.170387779597436,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0895680127760983,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.117019167063259,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2218147432727093,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.117019167063259,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.8187934027777777,
        "frames": [
          19,
          130,
          164
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 3.3432074652777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/16x9-duration-90-frame-10.png",
                "sha256": "48a7a55c5df1f680a07394eb4f3c8d9f243cec5550e2918183a5d79cdfb3e366",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/16x9-duration-90-frame-89.png",
                "sha256": "b80b786de25cf3e2a546a4b9a8016dc395c027fc4403ccaf0e52fbfdd6719626",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/16x9-duration-90-frame-79.png",
                "sha256": "b80b786de25cf3e2a546a4b9a8016dc395c027fc4403ccaf0e52fbfdd6719626",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 2.8187934027777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/16x9-duration-600-frame-19.png",
                "sha256": "85e7a771eaa54cbf81ef5ececd4881cca49b205bb93b5c80f9506639474733f7",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/16x9-duration-600-frame-130.png",
                "sha256": "b80b786de25cf3e2a546a4b9a8016dc395c027fc4403ccaf0e52fbfdd6719626",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/16x9-duration-600-frame-528.png",
                "sha256": "b80b786de25cf3e2a546a4b9a8016dc395c027fc4403ccaf0e52fbfdd6719626",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/16x9-duration-600-frame-599.png",
                "sha256": "b80b786de25cf3e2a546a4b9a8016dc395c027fc4403ccaf0e52fbfdd6719626",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 4.353190104166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/9x16-duration-90-frame-10.png",
                "sha256": "f63048f125f3b1b77a060f3a40bcaf87d1a72f095f3f4b7d0fa0d1165569d1dc",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/9x16-duration-90-frame-89.png",
                "sha256": "344de1fd4223f02812bd327ca7e156e97feef29a962a08484f9d2d5e9e91911f",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/9x16-duration-90-frame-79.png",
                "sha256": "638a72ace68e78fe2540b00eeb4788c26987eb55eb40c350493c5d1cffc3dd26",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 3.6395399305555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/9x16-duration-600-frame-19.png",
                "sha256": "d74d7f62fcd55e6af5a4baee190764b5d103573f292ef6f4a237e75933d5dd31",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/9x16-duration-600-frame-130.png",
                "sha256": "344de1fd4223f02812bd327ca7e156e97feef29a962a08484f9d2d5e9e91911f",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/9x16-duration-600-frame-528.png",
                "sha256": "638a72ace68e78fe2540b00eeb4788c26987eb55eb40c350493c5d1cffc3dd26",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/9x16-duration-600-frame-599.png",
                "sha256": "d18698262d65e7ed3273b1156543db3a1fa37bb7cde78a64d38895bf46e99286",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 5.098090277777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/1x1-duration-90-frame-10.png",
                "sha256": "b8edd73de670ebd1e0961945555bf60eeb034346ea680f70d0a9ce11501f5e8f",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/1x1-duration-90-frame-89.png",
                "sha256": "ad4d35537f40dfa29f1bc9bf6e63d808552176b9ed3de8b42f78e9fd8dca0911",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/1x1-duration-90-frame-79.png",
                "sha256": "ad4d35537f40dfa29f1bc9bf6e63d808552176b9ed3de8b42f78e9fd8dca0911",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 4.338975694444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/1x1-duration-600-frame-19.png",
                "sha256": "6f5e47a8f86cba661c30c421467876afea0e8c38a9267fd949aaf3972048b314",
                "alphaMass": 587520
              },
              {
                "frame": 130,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/1x1-duration-600-frame-130.png",
                "sha256": "ad4d35537f40dfa29f1bc9bf6e63d808552176b9ed3de8b42f78e9fd8dca0911",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/1x1-duration-600-frame-528.png",
                "sha256": "ad4d35537f40dfa29f1bc9bf6e63d808552176b9ed3de8b42f78e9fd8dca0911",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/pen-annotate/1x1-duration-600-frame-599.png",
                "sha256": "ad4d35537f40dfa29f1bc9bf6e63d808552176b9ed3de8b42f78e9fd8dca0911",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "cursors",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "The cursor turns into a pen, circles the metric, draws an arrow to the bar and writes a note."
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
      "bundleSha256": "425ebf85364554691ef61174ea3283b31ff528b82a9416ff2300ee97810ea08c",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-07",
      "at": "2026-10-07T23:49:44.282Z",
      "basis": "Cursor blocks: 10 interactions and 12 cursor styles, approved by the owner from the prototypes"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/pen-annotate/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/pen-annotate/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/pen-annotate/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 130,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 165,
      "sha256": {
        "poster": "55345b8c6f7ebc1a0a0a9d7f70dfbdfa43bbdad2f06dd53199af0fd325839d94",
        "loop": "08ca46b53dda351a8e6b986c16befa945d2a40926223b9f76e87a0375d35f451",
        "detail": "bbc1e56121a9e63da117c3c5ca1fea29590962a000b89ada5193438199a115fe"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/pen-annotate/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/pen-annotate/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/pen-annotate/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 130,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 165,
      "sha256": {
        "poster": "e76373664a98005d11f5353d159909096d8fb24dc3b885eeba942d7dcc1d3157",
        "loop": "ce4146398f27768c6a83d1b2d8efbc74d64fc2dccd4e9b27d4e44a87db5a448d",
        "detail": "0698fb0580ab22f9767dc2531386fdae9fe8704f217a1990ee993b779e2dd5c8"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/pen-annotate/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/pen-annotate/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/pen-annotate/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 130,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 165,
      "sha256": {
        "poster": "cd0984df4bd697e1a2634a5bf00e8f69073375fe59d6fe04bcd208407a90d642",
        "loop": "5b3d0441cdbf8562894c3b857fac7aee901b11e2545f160b7982017eb8219754",
        "detail": "d3ed8807660921050685face114a27e9b127cc00a4848db3872df9aa8d84e328"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/425ebf85364554691ef61174ea3283b31ff528b82a9416ff2300ee97810ea08c/index.mjs",
    "sha256": "425ebf85364554691ef61174ea3283b31ff528b82a9416ff2300ee97810ea08c",
    "bytes": 179442,
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
    "at": "2026-10-08T00:04:28.341Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
