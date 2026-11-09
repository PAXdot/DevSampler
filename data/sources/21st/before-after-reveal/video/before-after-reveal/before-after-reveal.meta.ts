// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/comparison",
  "tags": [
    "launch",
    "product",
    "introducing",
    "before",
    "after",
    "comparison",
    "slider",
    "reveal"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 111,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 100
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
      "key": "beforeImage",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "afterImage",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "beforeLabel",
      "type": "text",
      "maxChars": 36,
      "role": "label"
    },
    {
      "key": "afterLabel",
      "type": "text",
      "maxChars": 36,
      "role": "label"
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
      "settledBy": 100,
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
    "interact"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": true,
  "defaults": {
    "beforeImage": "",
    "afterImage": "",
    "beforeLabel": "The starting point",
    "afterLabel": "The finished result",
    "direction": "horizontal",
    "theme": "dark",
    "accent": "#7C91FF",
    "fontFamily": "Geist",
    "surfaceColor": "#141417",
    "textColor": "#F4F4F5"
  },
  "fields": [
    {
      "key": "beforeImage",
      "label": "Before image",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "afterImage",
      "label": "After image",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "beforeLabel",
      "label": "Before label",
      "type": "text",
      "max": 36,
      "role": "label"
    },
    {
      "key": "afterLabel",
      "label": "After label",
      "type": "text",
      "max": 36,
      "role": "label"
    },
    {
      "key": "direction",
      "label": "Direction",
      "type": "select",
      "options": [
        "horizontal",
        "vertical"
      ]
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
  "name": "Before and After Reveal",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "before-after-reveal",
    "bundleSha256": "a4b886f95a99f4d57f1b0e23fbca7079a5b13c88c9727f8c4d752516698b511c",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:04:32.600Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/16x9-paper.png",
        "sha256": "e22b069d03253c4ae3ef79241b975ca33136b6ea785b337980afa5007bf1c27c"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/16x9-night.png",
        "sha256": "340542200a24934050395bf03058c32d4dfe3b4855bf58067e8820a44cc24be2"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/16x9-color.png",
        "sha256": "5eae19c28e73bf7c60821044e8b7d8611b1d8c6ca3863d1dacc5ac99c5434815"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/9x16-paper.png",
        "sha256": "6118f3c3345d690f840914bdc224bab261c7900d2f09fda4a60e95331177b706"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/9x16-night.png",
        "sha256": "405459796296246fcc3c90fd22c9e059d69f02fe01a27aa2509e6b8d06e37cff"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/9x16-color.png",
        "sha256": "c83fb33b4176d71cd791e78fac21982c274ef3692b104338caee55c537d271bb"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/1x1-paper.png",
        "sha256": "c89aec3245eda6deb405de5fba53591617ecb8cc0a97c443a51183274ae50a9f"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/1x1-night.png",
        "sha256": "0baec73013cdadffdf93c03760ed8be058ac8879a5309cd9b11e6c51cb828573"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/1x1-color.png",
        "sha256": "98ce1e6ea014599784b0b7b56184b277a230b4846c2294c8373b102f38d41352"
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
          "before-after-reveal--16x9",
          "before-after-reveal--9x16",
          "before-after-reveal--1x1"
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
            "paperNight": 126.98838975694444,
            "paperColor": 10.015950520833334,
            "region": {
              "left": 47,
              "top": 121,
              "width": 1826,
              "height": 926
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 126.55463324652777,
            "paperColor": 13.1904296875,
            "region": {
              "left": 5,
              "top": 189,
              "width": 1070,
              "height": 1633
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 122.37320963541667,
            "paperColor": 10.008924696180555,
            "region": {
              "left": 5,
              "top": 121,
              "width": 1070,
              "height": 926
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
            "occupancy": 1.0924508692365837,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1531589873603765,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0936647035357354,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1209923784328548,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1927630652312369,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.095895534139582,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1154153019232387,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.201294989875237,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1166546522587089,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 6.154513888888889,
        "frames": [
          15,
          100,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 111,
            "averageChannelDifference": 6.154513888888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/16x9-duration-111-frame-13.png",
                "sha256": "41c48d8b227718ee0041d2924b4f557d62f6d984f5c7ed427922d935200ff8a9",
                "alphaMass": 390495
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/16x9-duration-111-frame-100.png",
                "sha256": "f84bf64967629f27a2db0e19987177c715abf73c3faf693a33f2ece5b315b8db",
                "alphaMass": 390497
              },
              {
                "frame": 97,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/16x9-duration-111-frame-97.png",
                "sha256": "f84bf64967629f27a2db0e19987177c715abf73c3faf693a33f2ece5b315b8db",
                "alphaMass": 390497
              },
              {
                "frame": 110,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/16x9-duration-111-frame-110.png",
                "sha256": "f84bf64967629f27a2db0e19987177c715abf73c3faf693a33f2ece5b315b8db",
                "alphaMass": 390497
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 6.154513888888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/16x9-duration-900-frame-15.png",
                "sha256": "41c48d8b227718ee0041d2924b4f557d62f6d984f5c7ed427922d935200ff8a9",
                "alphaMass": 390495
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/16x9-duration-900-frame-100.png",
                "sha256": "f84bf64967629f27a2db0e19987177c715abf73c3faf693a33f2ece5b315b8db",
                "alphaMass": 390497
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/16x9-duration-900-frame-792.png",
                "sha256": "f84bf64967629f27a2db0e19987177c715abf73c3faf693a33f2ece5b315b8db",
                "alphaMass": 390497
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/16x9-duration-900-frame-899.png",
                "sha256": "f84bf64967629f27a2db0e19987177c715abf73c3faf693a33f2ece5b315b8db",
                "alphaMass": 390497
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 111,
            "averageChannelDifference": 5.879774305555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/9x16-duration-111-frame-13.png",
                "sha256": "0cfefff04f011623cfad109f0b6c75eccddca891bf08e6bc467dff4b4dd12903",
                "alphaMass": 392604
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/9x16-duration-111-frame-100.png",
                "sha256": "8ed6a1fab7a9928834723fe47656c82136cb8ccc2e4388e1b6c93c0b5457504f",
                "alphaMass": 392609
              },
              {
                "frame": 97,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/9x16-duration-111-frame-97.png",
                "sha256": "8ed6a1fab7a9928834723fe47656c82136cb8ccc2e4388e1b6c93c0b5457504f",
                "alphaMass": 392609
              },
              {
                "frame": 110,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/9x16-duration-111-frame-110.png",
                "sha256": "8ed6a1fab7a9928834723fe47656c82136cb8ccc2e4388e1b6c93c0b5457504f",
                "alphaMass": 392609
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 5.879774305555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/9x16-duration-900-frame-15.png",
                "sha256": "0cfefff04f011623cfad109f0b6c75eccddca891bf08e6bc467dff4b4dd12903",
                "alphaMass": 392604
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/9x16-duration-900-frame-100.png",
                "sha256": "8ed6a1fab7a9928834723fe47656c82136cb8ccc2e4388e1b6c93c0b5457504f",
                "alphaMass": 392609
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/9x16-duration-900-frame-792.png",
                "sha256": "8ed6a1fab7a9928834723fe47656c82136cb8ccc2e4388e1b6c93c0b5457504f",
                "alphaMass": 392609
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/9x16-duration-900-frame-899.png",
                "sha256": "c9b34bf8e821a578d6f34a1b7bcfb305f42a381bef06f471d2d9c48b131bf196",
                "alphaMass": 392609
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 111,
            "averageChannelDifference": 6.8369140625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/1x1-duration-111-frame-13.png",
                "sha256": "4210eea65a6b121b9294fe1e161dc3d95af52e078d67e3914745e34256520114",
                "alphaMass": 392648
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/1x1-duration-111-frame-100.png",
                "sha256": "651f47121f7290ec360aad8c45f9b9516078abb49bbdbe5748e339e0231c37ec",
                "alphaMass": 392662
              },
              {
                "frame": 97,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/1x1-duration-111-frame-97.png",
                "sha256": "651f47121f7290ec360aad8c45f9b9516078abb49bbdbe5748e339e0231c37ec",
                "alphaMass": 392662
              },
              {
                "frame": 110,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/1x1-duration-111-frame-110.png",
                "sha256": "4d96b621f0b0f4d81e4333c575eb642ca860f65efc53db80b7df246432beaf9a",
                "alphaMass": 392662
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 6.8369140625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/1x1-duration-900-frame-15.png",
                "sha256": "4210eea65a6b121b9294fe1e161dc3d95af52e078d67e3914745e34256520114",
                "alphaMass": 392648
              },
              {
                "frame": 100,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/1x1-duration-900-frame-100.png",
                "sha256": "651f47121f7290ec360aad8c45f9b9516078abb49bbdbe5748e339e0231c37ec",
                "alphaMass": 392662
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/1x1-duration-900-frame-792.png",
                "sha256": "651f47121f7290ec360aad8c45f9b9516078abb49bbdbe5748e339e0231c37ec",
                "alphaMass": 392662
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/before-after-reveal/1x1-duration-900-frame-899.png",
                "sha256": "651f47121f7290ec360aad8c45f9b9516078abb49bbdbe5748e339e0231c37ec",
                "alphaMass": 392662
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
        "note": "A divider wipes a bare starting page into the finished app; before and after."
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
      "bundleSha256": "a4b886f95a99f4d57f1b0e23fbca7079a5b13c88c9727f8c4d752516698b511c",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.971573Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/before-after-reveal/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/before-after-reveal/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/before-after-reveal/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 100,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "dbd8d20defbb316e22742648db4525e5b33b552d52a0cc4453bbbe04ba7d7eec",
        "loop": "e90ed7ee80817980914acac0c5741bd3b5b4bf17c3a9a90aa3ed1f24da51e4e9",
        "detail": "2aecf9788633fd65943365874a57148e30220fb49964735241762b06ad621244"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/before-after-reveal/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/before-after-reveal/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/before-after-reveal/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 100,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "fa2deeeda161691a6a089219b9f186ba73e094216d19805383627369e8cc3c3a",
        "loop": "30a30a038a02956b5875d11f0cd0ddf4763fc97f9cee5380b50bda0f1f3ebed5",
        "detail": "49353f11ca97828b8a4a10fdaa6b1dbc4467353952045d1ea9e3affe9aaed515"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/before-after-reveal/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/before-after-reveal/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/before-after-reveal/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 100,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "6c3fd90ab3dc19ca59100d2ec31ac6276b944b14a2a8dd9ed0ed9c9112b83ddc",
        "loop": "2bb74163c62f85296a8de5a566242df4ca76ddc117f19f52ef0e47260ac4d93c",
        "detail": "b33d81eeb9b87be8e032440a2db4720b879005f77547dc7425a1351d25317d0b"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/a4b886f95a99f4d57f1b0e23fbca7079a5b13c88c9727f8c4d752516698b511c/index.mjs",
    "sha256": "a4b886f95a99f4d57f1b0e23fbca7079a5b13c88c9727f8c4d752516698b511c",
    "bytes": 173202,
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
    "at": "2026-10-07T02:25:59.158Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
