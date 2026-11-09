// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/product",
  "tags": [
    "launch",
    "product",
    "introducing",
    "voice",
    "waveform",
    "documents",
    "sources",
    "cloud"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 115,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 104
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
      "key": "headline",
      "type": "text",
      "maxChars": 64,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "voiceLabel",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "image1",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "image2",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "image3",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "image4",
      "type": "image",
      "role": "screenshot"
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
      "settledBy": 104,
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
  "requiresScreenshot": true,
  "defaults": {
    "headline": "Bring every source into the picture",
    "voiceLabel": "Voice note",
    "documentTitles": [
      "Field notes",
      "Project brief",
      "Team feedback",
      "Roadmap"
    ],
    "image1": "",
    "image2": "",
    "image3": "",
    "image4": "",
    "amplitude": 0.7,
    "captureFrames": 54,
    "theme": "dark",
    "accent": "#7C91FF",
    "fontFamily": "Geist",
    "surfaceColor": "#141417",
    "textColor": "#F4F4F5"
  },
  "fields": [
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 64,
      "role": "headline"
    },
    {
      "key": "voiceLabel",
      "label": "Voice label",
      "type": "text",
      "max": 32,
      "role": "label"
    },
    {
      "key": "documentTitles",
      "label": "Document titles",
      "type": "list",
      "max": 4
    },
    {
      "key": "image1",
      "label": "Image 1",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "image2",
      "label": "Image 2",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "image3",
      "label": "Image 3",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "image4",
      "label": "Image 4",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "amplitude",
      "label": "Amplitude",
      "type": "number",
      "min": 0.2,
      "max": 1
    },
    {
      "key": "captureFrames",
      "label": "Capture frames",
      "type": "number",
      "step": 1,
      "min": 30,
      "max": 70
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
  "name": "Voice and Document Cloud",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "voice-document-cloud",
    "bundleSha256": "98f3eaa86182c5058e250957e2882cd1df4637635b3cddab0a5d8908625af5c2",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:00:23.985Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/16x9-paper.png",
        "sha256": "e9de71c4cf0d5ad4341e5a788d33d92ab1760378de9666acabb8e3edf85b0684"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/16x9-night.png",
        "sha256": "2f7136c53239938366308584342cc8adc45098767730eb8ea463d17995e9b477"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/16x9-color.png",
        "sha256": "362d4929ca3b1a2ca69074d4f616f907a17f86fc0e407e95d37352aa3fd14b4a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/9x16-paper.png",
        "sha256": "a2ecc19b580e01cb4f8526cdfb6c9903f1181087e3e94f410e10254d538d97fd"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/9x16-night.png",
        "sha256": "516f00b4fd56dfb7ccba7eacc9abee96974cf9cebe5fac5af6293cf484dbe846"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/9x16-color.png",
        "sha256": "f49ec422f9541020aaeac152a98e6968e463461b5e01c9ad091f07b2699a7772"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/1x1-paper.png",
        "sha256": "c02daaafe879a24bc1cc98e98640096c12a306f29c70248a2f18bd60d8b4f961"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/1x1-night.png",
        "sha256": "c231cabc3bb4c3e4ef3172b81394a454f95679f42b38ae6023be5dcef9dae049"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/1x1-color.png",
        "sha256": "3614caff5eff5665000994cb9f61fdb803553ca082c18b4d531993ce42333319"
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
          "voice-document-cloud--16x9",
          "voice-document-cloud--9x16",
          "voice-document-cloud--1x1"
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
            "paperNight": 94.25520833333333,
            "paperColor": 8.242838541666666,
            "region": {
              "left": 77,
              "top": 152,
              "width": 1653,
              "height": 823
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 109.33417426215277,
            "paperColor": 12.52880859375,
            "region": {
              "left": 44,
              "top": 292,
              "width": 986,
              "height": 1364
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 88.28285047743056,
            "paperColor": 9.08544921875,
            "region": {
              "left": 44,
              "top": 152,
              "width": 941,
              "height": 801
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
            "occupancy": 0.9040167635984437,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9269784624240645,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9062414430149633,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8927505222768122,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9162432736083118,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8968431122448981,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.883401628827114,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9125749636846052,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8864380371490161,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 26.8984375,
        "frames": [
          15,
          104,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 115,
            "averageChannelDifference": 26.900390625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/16x9-duration-115-frame-13.png",
                "sha256": "d3911b228505eebe21213bee354b443372bb2a855422349056ff631b76839a0e",
                "alphaMass": 17836
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/16x9-duration-115-frame-104.png",
                "sha256": "55c1dd75ecf65978d4f30fe3af7cc3b44f134bdbef4b91bca7e737087f90d8fe",
                "alphaMass": 196511
              },
              {
                "frame": 101,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/16x9-duration-115-frame-101.png",
                "sha256": "55c1dd75ecf65978d4f30fe3af7cc3b44f134bdbef4b91bca7e737087f90d8fe",
                "alphaMass": 196511
              },
              {
                "frame": 114,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/16x9-duration-115-frame-114.png",
                "sha256": "55c1dd75ecf65978d4f30fe3af7cc3b44f134bdbef4b91bca7e737087f90d8fe",
                "alphaMass": 196511
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 26.8984375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/16x9-duration-900-frame-15.png",
                "sha256": "8316843af5b69588e7b8bc34068d76bd72048e9ff37b9740d5b92c3585554666",
                "alphaMass": 17836
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/16x9-duration-900-frame-104.png",
                "sha256": "55c1dd75ecf65978d4f30fe3af7cc3b44f134bdbef4b91bca7e737087f90d8fe",
                "alphaMass": 196511
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/16x9-duration-900-frame-792.png",
                "sha256": "55c1dd75ecf65978d4f30fe3af7cc3b44f134bdbef4b91bca7e737087f90d8fe",
                "alphaMass": 196511
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/16x9-duration-900-frame-899.png",
                "sha256": "55c1dd75ecf65978d4f30fe3af7cc3b44f134bdbef4b91bca7e737087f90d8fe",
                "alphaMass": 196511
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 115,
            "averageChannelDifference": 31.94097222222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/9x16-duration-115-frame-13.png",
                "sha256": "6736f425367c8009725dd1f87f16fd647aaaec7a39638090e109083f52ad78cb",
                "alphaMass": 47438
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/9x16-duration-115-frame-104.png",
                "sha256": "e1d47671ce94cb80cab00d9ab2195eeac0b3d219534bac8b8f4c4ba511cfa849",
                "alphaMass": 228543
              },
              {
                "frame": 101,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/9x16-duration-115-frame-101.png",
                "sha256": "e1d47671ce94cb80cab00d9ab2195eeac0b3d219534bac8b8f4c4ba511cfa849",
                "alphaMass": 228543
              },
              {
                "frame": 114,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/9x16-duration-115-frame-114.png",
                "sha256": "e1d47671ce94cb80cab00d9ab2195eeac0b3d219534bac8b8f4c4ba511cfa849",
                "alphaMass": 228543
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 31.93532986111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/9x16-duration-900-frame-15.png",
                "sha256": "1ffbbef206b10ea7e24381a3d5801724b5a3438b5543a8704470dc596240e84a",
                "alphaMass": 47438
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/9x16-duration-900-frame-104.png",
                "sha256": "e1d47671ce94cb80cab00d9ab2195eeac0b3d219534bac8b8f4c4ba511cfa849",
                "alphaMass": 228543
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/9x16-duration-900-frame-792.png",
                "sha256": "e1d47671ce94cb80cab00d9ab2195eeac0b3d219534bac8b8f4c4ba511cfa849",
                "alphaMass": 228543
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/9x16-duration-900-frame-899.png",
                "sha256": "e1d47671ce94cb80cab00d9ab2195eeac0b3d219534bac8b8f4c4ba511cfa849",
                "alphaMass": 228543
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 115,
            "averageChannelDifference": 23.92361111111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/1x1-duration-115-frame-13.png",
                "sha256": "7f7eec0482ad05900090b0eb347f01c22218b6d86f5e608a93672be5c8e58aa2",
                "alphaMass": 31737
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/1x1-duration-115-frame-104.png",
                "sha256": "c2b6ce59f7be9fc2f39d98a96d1a41abe202b51daeb32ab383c2923882fd3944",
                "alphaMass": 180442
              },
              {
                "frame": 101,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/1x1-duration-115-frame-101.png",
                "sha256": "c2b6ce59f7be9fc2f39d98a96d1a41abe202b51daeb32ab383c2923882fd3944",
                "alphaMass": 180442
              },
              {
                "frame": 114,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/1x1-duration-115-frame-114.png",
                "sha256": "c2b6ce59f7be9fc2f39d98a96d1a41abe202b51daeb32ab383c2923882fd3944",
                "alphaMass": 180442
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 23.91742621527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/1x1-duration-900-frame-15.png",
                "sha256": "73b06c75cdae9610c33a4955b0e6bfae946cb96ff6e564588248668e3ae51389",
                "alphaMass": 31737
              },
              {
                "frame": 104,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/1x1-duration-900-frame-104.png",
                "sha256": "c2b6ce59f7be9fc2f39d98a96d1a41abe202b51daeb32ab383c2923882fd3944",
                "alphaMass": 180442
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/1x1-duration-900-frame-792.png",
                "sha256": "c2b6ce59f7be9fc2f39d98a96d1a41abe202b51daeb32ab383c2923882fd3944",
                "alphaMass": 180442
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/voice-document-cloud/1x1-duration-900-frame-899.png",
                "sha256": "c2b6ce59f7be9fc2f39d98a96d1a41abe202b51daeb32ab383c2923882fd3944",
                "alphaMass": 180442
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
        "note": "A voice note pulls four source documents around it; sources gathered in a UI."
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
      "bundleSha256": "98f3eaa86182c5058e250957e2882cd1df4637635b3cddab0a5d8908625af5c2",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.937837Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/voice-document-cloud/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/voice-document-cloud/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/voice-document-cloud/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 104,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "47180ee5f3c9649f157d8be6cb45fb29163c16277b4b215b282f1156f18757ea",
        "loop": "39efb8e7fd579686143f0c452c444949e730f9c549e1de1b482c8ae4ce9127d6",
        "detail": "6f0180489dae6ad37a6f54ec6316f9e42fcac7f9e7ccd00bef22347a81133da2"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/voice-document-cloud/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/voice-document-cloud/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/voice-document-cloud/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 104,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "0e88bb033b836bc7e986ea9d02b5c6507ed040baa7bc3a0b1b930e1ea96bc0f3",
        "loop": "32683ee22ba5e488fda1312a606a3dec81b1a47cb16095e2d4e9a7b881bf662f",
        "detail": "6b49511ea55b40004c4e36fec0075a844567a7582ac400a8a0669553e8473330"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/voice-document-cloud/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/voice-document-cloud/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/voice-document-cloud/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 104,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "7dff98b2841c4e3efed8d656ffe870689695d4c84de2b3fad1c53f709ebf3afe",
        "loop": "84e92edef4867f81115303c40bd6f292861263c6a5b418404f06fa9ffb38c0e6",
        "detail": "cdefc688f02ce7fb276fdf6b9ef19d191b48afa413acab899d7cb2b08140dc41"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/98f3eaa86182c5058e250957e2882cd1df4637635b3cddab0a5d8908625af5c2/index.mjs",
    "sha256": "98f3eaa86182c5058e250957e2882cd1df4637635b3cddab0a5d8908625af5c2",
    "bytes": 174422,
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
    "at": "2026-10-07T02:21:34.384Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
