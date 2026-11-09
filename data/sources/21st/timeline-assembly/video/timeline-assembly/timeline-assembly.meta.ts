// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/timeline",
  "tags": [
    "launch",
    "product",
    "introducing",
    "timeline",
    "editing",
    "layers",
    "clips",
    "assembly"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 127,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 116
    },
    "beats": [
      16,
      40,
      72
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
      "y": 0,
      "w": 1,
      "h": 1
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "full",
    "backdrop": []
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 50,
      "role": "headline"
    },
    {
      "key": "clips",
      "type": "list",
      "role": "items"
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
      "target": "content",
      "prop": "transform",
      "from": "translated",
      "settledBy": 116,
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/launch-videos-2026-10-06/patterns.md"
  },
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "progress"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "title": "One story. Every layer in place.",
    "clips": [
      "Opening",
      "Product",
      "Details",
      "Result"
    ],
    "theme": "dark",
    "accent": "#7C91FF",
    "fontFamily": "Geist",
    "surfaceColor": "#141417",
    "textColor": "#F4F4F5"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 50,
      "role": "headline"
    },
    {
      "key": "clips",
      "label": "Clips",
      "type": "list",
      "max": 6,
      "role": "items"
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
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
    }
  ],
  "name": "Timeline Assembly",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "timeline-assembly",
    "bundleSha256": "7606573fc86a9b56d78b1c7dc1e0ffb4b3de80020545d1e18f9f35dd43acf979",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:56:54.159Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/16x9-paper.png",
        "sha256": "856e60992a38f46a6556a52e3d130ebdb058f8a96bb32fa77f7e92627db6f38a"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/16x9-night.png",
        "sha256": "6446b23f993fdc0817dc9d76b2453eb1635a27f4f66ce0ff9553e658d213d573"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/16x9-color.png",
        "sha256": "241625292dfe69e1d851543992413c822f52395dd6f7862a7227501f70d68f1d"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/9x16-paper.png",
        "sha256": "c5402a6a58349cc988636c5c9c83c4fb241d4191415ab5dad1aad14700f1761e"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/9x16-night.png",
        "sha256": "c480b3b91f410a41358244ee78b10a354e171c2236af62864bc77814d231546e"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/9x16-color.png",
        "sha256": "1e743275ab126e960d0c096a0ea9c87e2ce6431445ac0c47c399e6d00ccc1afd"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/1x1-paper.png",
        "sha256": "2d155ef7905831b715ea5738e51a4c0fbb0b424ac02b4c57b86e275d1772fd31"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/1x1-night.png",
        "sha256": "eba88fbf6250f78b06affb42f3d870d13358c5f032645a89200e00c86df99b9b"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/1x1-color.png",
        "sha256": "7186c5d9967e68deac97f250ec4739159adf24331666d2cfc267b6f5d7b0ed8e"
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
          "timeline-assembly--16x9",
          "timeline-assembly--9x16",
          "timeline-assembly--1x1"
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
            "paperNight": 116.04801432291667,
            "paperColor": 8.405029296875,
            "region": {
              "left": 28,
              "top": 141,
              "width": 1864,
              "height": 895
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 121.437744140625,
            "paperColor": 10.903889973958334,
            "region": {
              "left": 0,
              "top": 174,
              "width": 1080,
              "height": 1608
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 114.95328776041667,
            "paperColor": 9.052652994791666,
            "region": {
              "left": 0,
              "top": 141,
              "width": 1080,
              "height": 895
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
            "occupancy": 1.077391395730103,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1376634630189526,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.078631201709079,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.143746303819882,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1847186791383222,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1430341330204925,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1002247549682884,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1718421936675907,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1014908363894256,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.750108506944445,
        "frames": [
          17,
          116,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 127,
            "averageChannelDifference": 5.895290798611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/16x9-duration-127-frame-15.png",
                "sha256": "9f4d4dd2aae795bac45cc447666288181d24b7676c371459e5c8653ef379b5ca",
                "alphaMass": 367681
              },
              {
                "frame": 116,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/16x9-duration-127-frame-116.png",
                "sha256": "3893f8d4c2888c1e2e75a397bdcd80a18d3a70b1a8a4b10abe5e9236509e7d73",
                "alphaMass": 367681
              },
              {
                "frame": 111,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/16x9-duration-127-frame-111.png",
                "sha256": "c1484de9f51093ece5e79d864d44a584185d59ca2d1dd0d88546068d094bd4a2",
                "alphaMass": 367681
              },
              {
                "frame": 126,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/16x9-duration-127-frame-126.png",
                "sha256": "3893f8d4c2888c1e2e75a397bdcd80a18d3a70b1a8a4b10abe5e9236509e7d73",
                "alphaMass": 367681
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 5.750108506944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/16x9-duration-900-frame-17.png",
                "sha256": "575fc2dadd3227c8c74e229873e49be05af670411e20a89c5c975019ee0711f2",
                "alphaMass": 367681
              },
              {
                "frame": 116,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/16x9-duration-900-frame-116.png",
                "sha256": "3893f8d4c2888c1e2e75a397bdcd80a18d3a70b1a8a4b10abe5e9236509e7d73",
                "alphaMass": 367681
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/16x9-duration-900-frame-792.png",
                "sha256": "3893f8d4c2888c1e2e75a397bdcd80a18d3a70b1a8a4b10abe5e9236509e7d73",
                "alphaMass": 367681
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/16x9-duration-900-frame-899.png",
                "sha256": "3893f8d4c2888c1e2e75a397bdcd80a18d3a70b1a8a4b10abe5e9236509e7d73",
                "alphaMass": 367681
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 127,
            "averageChannelDifference": 5.637152777777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/9x16-duration-127-frame-15.png",
                "sha256": "da96629fe398147cbaa64bb019c3cad0a88b29046d570cf79cd15b7c34a8d488",
                "alphaMass": 372432
              },
              {
                "frame": 116,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/9x16-duration-127-frame-116.png",
                "sha256": "aa06be643efac8fc1f1b93b9da999a24f283eb678f0797266ac13face54c0d1e",
                "alphaMass": 372432
              },
              {
                "frame": 111,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/9x16-duration-127-frame-111.png",
                "sha256": "3d7b58120c50659f2879356c27fce100b836f6904cc500b6a92c1f863630139a",
                "alphaMass": 372432
              },
              {
                "frame": 126,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/9x16-duration-127-frame-126.png",
                "sha256": "aa06be643efac8fc1f1b93b9da999a24f283eb678f0797266ac13face54c0d1e",
                "alphaMass": 372432
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 5.516493055555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/9x16-duration-900-frame-17.png",
                "sha256": "7b656cc8db34e572c4918acb5cb404a432a57b913d012441f41a15d85aa3d0b8",
                "alphaMass": 372432
              },
              {
                "frame": 116,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/9x16-duration-900-frame-116.png",
                "sha256": "aa06be643efac8fc1f1b93b9da999a24f283eb678f0797266ac13face54c0d1e",
                "alphaMass": 372432
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/9x16-duration-900-frame-792.png",
                "sha256": "aa06be643efac8fc1f1b93b9da999a24f283eb678f0797266ac13face54c0d1e",
                "alphaMass": 372432
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/9x16-duration-900-frame-899.png",
                "sha256": "aa06be643efac8fc1f1b93b9da999a24f283eb678f0797266ac13face54c0d1e",
                "alphaMass": 372432
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 127,
            "averageChannelDifference": 5.777560763888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/1x1-duration-127-frame-15.png",
                "sha256": "aea12a10329810be76823985e67f0d5aff7abb5c8344a6b57c08b3debe5dd108",
                "alphaMass": 371087
              },
              {
                "frame": 116,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/1x1-duration-127-frame-116.png",
                "sha256": "d14c6f44706aa7bf8a8f26278042836169cccaf23d7fb1c61d5227b4df3fdb23",
                "alphaMass": 371087
              },
              {
                "frame": 111,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/1x1-duration-127-frame-111.png",
                "sha256": "4dc17090f6f6bbdea78814a4aacccfea891200b075cdb9c4618f5ea8d43b31d2",
                "alphaMass": 371087
              },
              {
                "frame": 126,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/1x1-duration-127-frame-126.png",
                "sha256": "d14c6f44706aa7bf8a8f26278042836169cccaf23d7fb1c61d5227b4df3fdb23",
                "alphaMass": 371087
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 5.642361111111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/1x1-duration-900-frame-17.png",
                "sha256": "81a7698499c4e392a9a0e72b4fae4ff728acf57900b2740a24fd42a080af5c36",
                "alphaMass": 371087
              },
              {
                "frame": 116,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/1x1-duration-900-frame-116.png",
                "sha256": "d14c6f44706aa7bf8a8f26278042836169cccaf23d7fb1c61d5227b4df3fdb23",
                "alphaMass": 371087
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/1x1-duration-900-frame-792.png",
                "sha256": "d14c6f44706aa7bf8a8f26278042836169cccaf23d7fb1c61d5227b4df3fdb23",
                "alphaMass": 371087
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/timeline-assembly/1x1-duration-900-frame-899.png",
                "sha256": "d14c6f44706aa7bf8a8f26278042836169cccaf23d7fb1c61d5227b4df3fdb23",
                "alphaMass": 371087
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
        "note": "A video timeline fills with picture, title and audio tracks."
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
      "bundleSha256": "7606573fc86a9b56d78b1c7dc1e0ffb4b3de80020545d1e18f9f35dd43acf979",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.004775Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/timeline-assembly/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/timeline-assembly/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/timeline-assembly/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 116,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "2c5ce8a87d97af37c6c701d600d4bb8ab3c7a5eef790047080505130c0e4deb0",
        "loop": "2a484f8e7321b4341fc0b3f8efdea8cb51baad9de24b95ddc43cd2fddb2805ac",
        "detail": "c519d57148d814d9ab6e8337c1a9cdbd8770cad721336c05cf9f05aded359939"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/timeline-assembly/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/timeline-assembly/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/timeline-assembly/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 116,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "6f3b08ccd74cc299019570ce3d68d8c8daea087b83944caa50032283eadee018",
        "loop": "aa3628b086737a41b7ac5838b7b5879968ddef0b2474ad8fc5f52063735d5508",
        "detail": "80007839cd644399efef5fcd85fb8e2e1ff41235e3dc0cb755f11a665af55a08"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/timeline-assembly/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/timeline-assembly/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/timeline-assembly/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 116,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "c74f3f890848c85bd6717226ee0ac7ecbb3513705e8264b3edc415bf37ddc008",
        "loop": "376749ea3d78c808d6f8b2055de331f9ab5021f9fc6574c201ec355ad8d9833b",
        "detail": "5d15283a58b04e2e251945c058acf7c6facb27046be6e66d90e07911bec23a7d"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/7606573fc86a9b56d78b1c7dc1e0ffb4b3de80020545d1e18f9f35dd43acf979/index.mjs",
    "sha256": "7606573fc86a9b56d78b1c7dc1e0ffb4b3de80020545d1e18f9f35dd43acf979",
    "bytes": 162688,
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
    "at": "2026-10-07T02:30:51.583Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
