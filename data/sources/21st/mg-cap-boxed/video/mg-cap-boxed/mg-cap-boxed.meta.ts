// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "editorial",
  "mechanic": [
    "caption-boxes-stack-up"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "caption-boxes-stack-up",
    "captions",
    "subtitles",
    "boxed",
    "talking-head"
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
      "in": 108,
      "out": 0
    },
    "markers": {
      "settled": 108
    },
    "beats": [
      0,
      27,
      54,
      81,
      108
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
      "key": "line1",
      "type": "text",
      "maxChars": 34,
      "role": "caption"
    },
    {
      "key": "line2",
      "type": "text",
      "maxChars": 34,
      "role": "caption"
    },
    {
      "key": "badge",
      "type": "text",
      "maxChars": 18,
      "role": "label"
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
      "target": "caption-boxes-stack-up",
      "prop": "transform",
      "from": "enter",
      "settledBy": 108,
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
    "ink": "#141210",
    "accent": "#FF5A3C",
    "secondary": "#D9B48A",
    "paper": "#FFFFFF",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": false,
    "line1": "Your docs, your code, your team,",
    "line2": "all in one place.",
    "badge": "rec 00:00:12"
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
      "key": "line1",
      "label": "Line 1",
      "type": "text",
      "max": 34,
      "role": "caption"
    },
    {
      "key": "line2",
      "label": "Line 2",
      "type": "text",
      "max": 34,
      "role": "caption"
    },
    {
      "key": "badge",
      "label": "Badge",
      "type": "text",
      "max": 18,
      "role": "label"
    }
  ],
  "name": "Boxed Caption Lines",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-cap-boxed",
    "bundleSha256": "d5c47f40e3d9fc0ee096c779ab331add7eafec689a2a66f97416848ef84f5353",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:40:37.360Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/16x9-paper.png",
        "sha256": "3da723d71cc97a3874974947975e61a4d9a59a56c2e6df6f3b0835f6f5e0cb35"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/16x9-night.png",
        "sha256": "7678df93abe41c7ea6326a6f7fa99f4cafce3e362539d434c9358cf10215c374"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/16x9-color.png",
        "sha256": "06b3df03644cf0f57dd7476a6a92449a2b63a48a6ec5b4894ec07d4956addae4"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/9x16-paper.png",
        "sha256": "88d41d80c5cc0497819a2d3486580353c21595b13b2f58bf165ffa8fee109a6f"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/9x16-night.png",
        "sha256": "a1f36f35909a8cda8a083ec14c586c3f8ddabbd2633b9211846052f2db289528"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/9x16-color.png",
        "sha256": "c071c6beb033fd30ff30eab8520c532235f33dbb4ffc9734ec62b61d8d23b094"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/1x1-paper.png",
        "sha256": "668366be392aae64e941cf5c5f4b6ac9d2a50eb499893849025cd9c4d2b172b9"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/1x1-night.png",
        "sha256": "1c44d1205b15a2c33ec3c43f167553b54e3caaf44024218e50863ca95852c659"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/1x1-color.png",
        "sha256": "387d12a4091ff2c354d7564adab390abec1500e7a03e4a8f36cb8b3d3eec6dff"
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
          "mg-cap-boxed--16x9",
          "mg-cap-boxed--9x16",
          "mg-cap-boxed--1x1"
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
            "paperNight": 25.04828559027778,
            "paperColor": 15.509168836805555,
            "region": {
              "left": 404,
              "top": 58,
              "width": 1455,
              "height": 954
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 34.4169921875,
            "paperColor": 26.8076171875,
            "region": {
              "left": 86,
              "top": 154,
              "width": 883,
              "height": 1625
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 24.72531467013889,
            "paperColor": 14.48434787326389,
            "region": {
              "left": 120,
              "top": 54,
              "width": 906,
              "height": 974
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
            "occupancy": 0.9486976214096752,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9447567607289832,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.845856603958456,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8740666325043394,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8685913923182443,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9782732135421043,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0722130072879634,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0642738748448628,
            "bad": [],
            "measured": 11
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9285127659888831,
            "bad": [],
            "measured": 11
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 24.365234375,
        "frames": [
          16,
          108,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 24.349717881944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/16x9-duration-90-frame-10.png",
                "sha256": "541ce6ea0a48ae96693d184233ce8d8fa2a2bb25c2ee3c37e329d2d6f516ab2d",
                "alphaMass": 41297
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/16x9-duration-90-frame-89.png",
                "sha256": "4820a2882fa93a5fd66543df1f9e352c72367ab9aaa3c7950d439a878fb0959b",
                "alphaMass": 59531
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/16x9-duration-90-frame-79.png",
                "sha256": "4820a2882fa93a5fd66543df1f9e352c72367ab9aaa3c7950d439a878fb0959b",
                "alphaMass": 59531
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 24.365234375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/16x9-duration-900-frame-16.png",
                "sha256": "fd9acc7975d7cadc4d06fca14548b8547eb036ad47acad815cff4e6bc0637453",
                "alphaMass": 41297
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/16x9-duration-900-frame-108.png",
                "sha256": "4820a2882fa93a5fd66543df1f9e352c72367ab9aaa3c7950d439a878fb0959b",
                "alphaMass": 59531
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/16x9-duration-900-frame-792.png",
                "sha256": "4820a2882fa93a5fd66543df1f9e352c72367ab9aaa3c7950d439a878fb0959b",
                "alphaMass": 59531
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/16x9-duration-900-frame-899.png",
                "sha256": "4820a2882fa93a5fd66543df1f9e352c72367ab9aaa3c7950d439a878fb0959b",
                "alphaMass": 59531
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 12.031901041666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/9x16-duration-90-frame-10.png",
                "sha256": "a586693473db73a71f99e605714a0758df8c52013198d63ff2f3092cba1059d8",
                "alphaMass": 54377
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/9x16-duration-90-frame-89.png",
                "sha256": "d7bf303ffe0f7346c72f2488fedac23be04d2a9e0c2bd58cd4c0227867191892",
                "alphaMass": 77331
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/9x16-duration-90-frame-79.png",
                "sha256": "d7bf303ffe0f7346c72f2488fedac23be04d2a9e0c2bd58cd4c0227867191892",
                "alphaMass": 77331
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 11.9599609375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/9x16-duration-900-frame-16.png",
                "sha256": "d7bd0645749081ee4bfe16a44efde49d0557191ddd6217d8abfe9093830af758",
                "alphaMass": 54377
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/9x16-duration-900-frame-108.png",
                "sha256": "d7bf303ffe0f7346c72f2488fedac23be04d2a9e0c2bd58cd4c0227867191892",
                "alphaMass": 77331
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/9x16-duration-900-frame-792.png",
                "sha256": "d7bf303ffe0f7346c72f2488fedac23be04d2a9e0c2bd58cd4c0227867191892",
                "alphaMass": 77331
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/9x16-duration-900-frame-899.png",
                "sha256": "d7bf303ffe0f7346c72f2488fedac23be04d2a9e0c2bd58cd4c0227867191892",
                "alphaMass": 77331
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 22.18337673611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/1x1-duration-90-frame-10.png",
                "sha256": "12ade41c4d23ac36f9cc88ba5eb015158cedd52a62111ca6245ddd21312010af",
                "alphaMass": 43854
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/1x1-duration-90-frame-89.png",
                "sha256": "eab9b95acd21f8de9a24ee351d01cfe8a1fb837ef0e35857439c29cb6edc413e",
                "alphaMass": 62684
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/1x1-duration-90-frame-79.png",
                "sha256": "eab9b95acd21f8de9a24ee351d01cfe8a1fb837ef0e35857439c29cb6edc413e",
                "alphaMass": 62684
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 22.169053819444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/1x1-duration-900-frame-16.png",
                "sha256": "4c45c41531d146d84c1ae88408a4dc094ca5313285ee90444d3e946180c0d641",
                "alphaMass": 43854
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/1x1-duration-900-frame-108.png",
                "sha256": "eab9b95acd21f8de9a24ee351d01cfe8a1fb837ef0e35857439c29cb6edc413e",
                "alphaMass": 62684
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/1x1-duration-900-frame-792.png",
                "sha256": "eab9b95acd21f8de9a24ee351d01cfe8a1fb837ef0e35857439c29cb6edc413e",
                "alphaMass": 62684
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-cap-boxed/1x1-duration-900-frame-899.png",
                "sha256": "eab9b95acd21f8de9a24ee351d01cfe8a1fb837ef0e35857439c29cb6edc413e",
                "alphaMass": 62684
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
        "note": "Boxed caption lines build word by word as a transparent layer; readable in every brand."
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
      "bundleSha256": "d5c47f40e3d9fc0ee096c779ab331add7eafec689a2a66f97416848ef84f5353",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-boxed/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-boxed/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-boxed/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 108,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e4289caeaf0cfa034576819f24f2ee1b0c7b5e4222f8794fb547882a56111a4b",
        "loop": "470d09e7b23b81198f125d7c2719235a7cc76fc3b3731bfefa90ad927c443c1b",
        "detail": "2fd4b33be768734138c66904212e0f7331d4e0de45700ce263e06f0170ec8eb9"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-boxed/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-boxed/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-boxed/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 108,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3755d45485ea424b61684019f5bb53b1766bd55f6d13da4b1bdd24c51d10b3d0",
        "loop": "e3afdc23e85661a6088627d2d3e7136b2edad74e4810582d04530c9281d0d571",
        "detail": "9ac46470604f31d92e9cbbf14c2cdd19e4f7c10fdda22116127a4bca4768383c"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-boxed/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-boxed/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-boxed/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 108,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8c19fecc129680bd39f540f34c91f1843ee03fc16b75a04dacefe1390bb4b7db",
        "loop": "6727d6b9ea324c6bfdea91ea636ed64cfe9fcf5110fdfa7f348461c56fd6037e",
        "detail": "8f8432099108029875c2c67c41fcedc789030976e3ffec73262b8bf9597d268d"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d5c47f40e3d9fc0ee096c779ab331add7eafec689a2a66f97416848ef84f5353/index.mjs",
    "sha256": "d5c47f40e3d9fc0ee096c779ab331add7eafec689a2a66f97416848ef84f5353",
    "bytes": 187365,
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
    "at": "2026-10-09T03:42:32.587Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
