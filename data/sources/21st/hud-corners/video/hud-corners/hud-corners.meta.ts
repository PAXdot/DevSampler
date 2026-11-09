// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "overlay-fx",
  "category": "overlay/frame",
  "tags": [
    "hud",
    "corners",
    "labels",
    "mono",
    "frame",
    "timecode",
    "techy",
    "overlay"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 30,
      "max": 1800
    },
    "stretch": "hold",
    "phases": {
      "in": 22,
      "out": 0
    },
    "markers": {
      "settled": 22
    },
    "beats": [
      0,
      4,
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
      "key": "topLeft",
      "type": "text",
      "maxChars": 28,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "topRight",
      "type": "text",
      "maxChars": 28,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "bottomLeft",
      "type": "text",
      "maxChars": 28,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "bottomRight",
      "type": "text",
      "maxChars": 28,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "monoFontFamily": "fonts.mono",
    "accent": "colors.primary",
    "color": "colors.text"
  },
  "motionBeats": [
    {
      "target": "brackets",
      "prop": "scale",
      "settledBy": 8,
      "easing": "ease"
    },
    {
      "target": "labels",
      "prop": "type",
      "settledBy": 22,
      "easing": "linear"
    },
    {
      "target": "hairline",
      "prop": "width",
      "settledBy": 20,
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
    "sourceUrl": "21st first-party (motion study of V02, research 2026-10-05)"
  },
  "job": "backgrounds",
  "language": "pixel-terminal",
  "mechanic": [
    "draw"
  ],
  "energy": "calm",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "monoFontFamily": "Geist Mono",
    "topLeft": "now live",
    "topRight": "2026.10.05",
    "bottomLeft": "build 0142",
    "bottomRight": "rec",
    "tick": true,
    "hairline": true,
    "brackets": true,
    "reticle": true,
    "color": "#E4E4E7",
    "accent": "#F5A524"
  },
  "fields": [
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "topLeft",
      "label": "Top left",
      "type": "text",
      "max": 28,
      "role": "label"
    },
    {
      "key": "topRight",
      "label": "Top right",
      "type": "text",
      "max": 28,
      "role": "label"
    },
    {
      "key": "bottomLeft",
      "label": "Bottom left",
      "type": "text",
      "max": 28,
      "role": "label"
    },
    {
      "key": "bottomRight",
      "label": "Bottom right",
      "type": "text",
      "max": 28,
      "role": "label"
    },
    {
      "key": "tick",
      "label": "Tick",
      "type": "boolean"
    },
    {
      "key": "hairline",
      "label": "Hairline",
      "type": "boolean"
    },
    {
      "key": "brackets",
      "label": "Brackets",
      "type": "boolean"
    },
    {
      "key": "reticle",
      "label": "Reticle",
      "type": "boolean"
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
    }
  ],
  "name": "HUD Corners",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "hud-corners",
    "bundleSha256": "f1886a1e3c9b1d45e436f177452583d3d00a5f93b135bfb82175c681db2450b2",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:05:51.391Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/16x9-paper.png",
        "sha256": "38bc4e57c80fad5363cb398001e67878ecaeae3eb02c48bd8c607cd7336fcfde"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/16x9-night.png",
        "sha256": "999e2dd47f6196615c2a182807d97c47013ba820cb60e0c0908ae3bf16733a1f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/16x9-color.png",
        "sha256": "44a5d3a17a6fa94536e7e283092e6c0a85e776bef661a1dc0a56d05e21a8537e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/9x16-paper.png",
        "sha256": "645ebd00d617ad3534beee8ce8ac30de44cd13c273f593771233251f279f2098"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/9x16-night.png",
        "sha256": "11fab3028a8934955b5fe41bd6e6956b66386690602f50af5e58cb630d275280"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/9x16-color.png",
        "sha256": "99b1359d65bfb87ba024606b434e400e08edf08a56527a8997fc91fa71158999"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/1x1-paper.png",
        "sha256": "e809c7372d6bae3726345635506532f9d741092f8370f8f8722a391f98394d74"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/1x1-night.png",
        "sha256": "b56f04b6910addaf05d220de4f7b0bb78bdbb9f1d1aa365111d228fa444e5af5"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/1x1-color.png",
        "sha256": "2b05c27baa57f7b21286a6f2f25d0f91b9dfca9799c4370a7571d5827e4175ba"
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
          "hud-corners--16x9",
          "hud-corners--9x16",
          "hud-corners--1x1"
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
            "paperNight": 5.885172526041667,
            "paperColor": 1.4423556857638888,
            "region": {
              "left": 50,
              "top": 50,
              "width": 1820,
              "height": 980
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 6.222276475694445,
            "paperColor": 1.4207085503472223,
            "region": {
              "left": 50,
              "top": 50,
              "width": 980,
              "height": 1820
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 8.006917317708334,
            "paperColor": 1.9385579427083333,
            "region": {
              "left": 50,
              "top": 50,
              "width": 980,
              "height": 980
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
            "occupancy": 1.2190286351165984,
            "bad": [],
            "measured": 5,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2190286351165984,
            "bad": [],
            "measured": 5,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2190286351165984,
            "bad": [],
            "measured": 5,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2190286351165984,
            "bad": [
              {
                "key": "topLeft",
                "x": 87.640625,
                "y": 54.390625,
                "w": 136.59375,
                "h": 30,
                "overflowX": 0,
                "overflowY": 0,
                "lineBoxOverflowX": 0,
                "lineBoxOverflowY": 4,
                "fontSize": 20.04669642857143,
                "cssFontSize": 20.52,
                "scale": 0.9769345238095238,
                "text": "now live"
              },
              {
                "key": "topRight",
                "x": 846.640625,
                "y": 54.390625,
                "w": 170.734375,
                "h": 30,
                "overflowX": 0,
                "overflowY": 0,
                "lineBoxOverflowX": 0,
                "lineBoxOverflowY": 4,
                "fontSize": 20.04669642857143,
                "cssFontSize": 20.52,
                "scale": 0.9769345238095238,
                "text": "2026.10.05"
              },
              {
                "key": "bottomLeft",
                "x": 62.625,
                "y": 1835.09375,
                "w": 170.734375,
                "h": 30,
                "overflowX": 0,
                "overflowY": 0,
                "lineBoxOverflowX": 0,
                "lineBoxOverflowY": 4,
                "fontSize": 20.04669642857143,
                "cssFontSize": 20.52,
                "scale": 0.9769345238095238,
                "text": "build 0142"
              },
              {
                "key": "bottomRight",
                "x": 812.5,
                "y": 1835.09375,
                "w": 51.21875,
                "h": 30,
                "overflowX": 0,
                "overflowY": 0,
                "lineBoxOverflowX": 0,
                "lineBoxOverflowY": 4,
                "fontSize": 20.04669642857143,
                "cssFontSize": 20.52,
                "scale": 0.9769345238095238,
                "text": "rec"
              },
              {
                "key": "bottomRight",
                "x": 863.71875,
                "y": 1835.09375,
                "w": 153.65625,
                "h": 30,
                "overflowX": 0,
                "overflowY": 0,
                "lineBoxOverflowX": 0,
                "lineBoxOverflowY": 0,
                "fontSize": 20.52,
                "cssFontSize": 20.52,
                "scale": 1,
                "text": " 00:00:22"
              }
            ],
            "measured": 5,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2190286351165984,
            "bad": [
              {
                "key": "topLeft",
                "x": 87.640625,
                "y": 55.390625,
                "w": 134.625,
                "h": 27,
                "overflowX": 0,
                "overflowY": 0,
                "lineBoxOverflowX": 0,
                "lineBoxOverflowY": 2,
                "fontSize": 20.04669642857143,
                "cssFontSize": 20.52,
                "scale": 0.9769345238095238,
                "text": "now live"
              },
              {
                "key": "topRight",
                "x": 849.109375,
                "y": 55.390625,
                "w": 168.265625,
                "h": 27,
                "overflowX": 0,
                "overflowY": 0,
                "lineBoxOverflowX": 0,
                "lineBoxOverflowY": 2,
                "fontSize": 20.04669642857143,
                "cssFontSize": 20.52,
                "scale": 0.9769345238095238,
                "text": "2026.10.05"
              },
              {
                "key": "bottomLeft",
                "x": 62.625,
                "y": 1836.09375,
                "w": 168.265625,
                "h": 27,
                "overflowX": 0,
                "overflowY": 0,
                "lineBoxOverflowX": 0,
                "lineBoxOverflowY": 2,
                "fontSize": 20.04669642857143,
                "cssFontSize": 20.52,
                "scale": 0.9769345238095238,
                "text": "build 0142"
              },
              {
                "key": "bottomRight",
                "x": 815.453125,
                "y": 1836.09375,
                "w": 50.484375,
                "h": 27,
                "overflowX": 0,
                "overflowY": 0,
                "lineBoxOverflowX": 0,
                "lineBoxOverflowY": 2,
                "fontSize": 20.04669642857143,
                "cssFontSize": 20.52,
                "scale": 0.9769345238095238,
                "text": "rec"
              },
              {
                "key": "bottomRight",
                "x": 865.9375,
                "y": 1836.09375,
                "w": 151.4375,
                "h": 27,
                "overflowX": 0,
                "overflowY": 0,
                "lineBoxOverflowX": 0,
                "lineBoxOverflowY": 0,
                "fontSize": 20.52,
                "cssFontSize": 20.52,
                "scale": 1,
                "text": " 00:00:22"
              }
            ],
            "measured": 5,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2190286351165984,
            "bad": [
              {
                "key": "topLeft",
                "x": 87.640625,
                "y": 55.390625,
                "w": 134.625,
                "h": 27,
                "overflowX": 0,
                "overflowY": 0,
                "lineBoxOverflowX": 0,
                "lineBoxOverflowY": 2,
                "fontSize": 20.04669642857143,
                "cssFontSize": 20.52,
                "scale": 0.9769345238095238,
                "text": "now live"
              },
              {
                "key": "topRight",
                "x": 849.109375,
                "y": 55.390625,
                "w": 168.265625,
                "h": 27,
                "overflowX": 0,
                "overflowY": 0,
                "lineBoxOverflowX": 0,
                "lineBoxOverflowY": 2,
                "fontSize": 20.04669642857143,
                "cssFontSize": 20.52,
                "scale": 0.9769345238095238,
                "text": "2026.10.05"
              },
              {
                "key": "bottomLeft",
                "x": 62.625,
                "y": 1836.09375,
                "w": 168.265625,
                "h": 27,
                "overflowX": 0,
                "overflowY": 0,
                "lineBoxOverflowX": 0,
                "lineBoxOverflowY": 2,
                "fontSize": 20.04669642857143,
                "cssFontSize": 20.52,
                "scale": 0.9769345238095238,
                "text": "build 0142"
              },
              {
                "key": "bottomRight",
                "x": 815.453125,
                "y": 1836.09375,
                "w": 50.484375,
                "h": 27,
                "overflowX": 0,
                "overflowY": 0,
                "lineBoxOverflowX": 0,
                "lineBoxOverflowY": 2,
                "fontSize": 20.04669642857143,
                "cssFontSize": 20.52,
                "scale": 0.9769345238095238,
                "text": "rec"
              },
              {
                "key": "bottomRight",
                "x": 865.9375,
                "y": 1836.09375,
                "w": 151.4375,
                "h": 27,
                "overflowX": 0,
                "overflowY": 0,
                "lineBoxOverflowX": 0,
                "lineBoxOverflowY": 0,
                "fontSize": 20.52,
                "cssFontSize": 20.52,
                "scale": 1,
                "text": " 00:00:22"
              }
            ],
            "measured": 5,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1669333942996496,
            "bad": [],
            "measured": 5,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1669333942996496,
            "bad": [],
            "measured": 5,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1669333942996496,
            "bad": [],
            "measured": 5,
            "note": "Non-text block"
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.989366319444445,
        "frames": [
          3,
          22,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 30,
            "averageChannelDifference": 7.989366319444445,
            "retainedAlpha": 1.006323396567299,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/16x9-duration-30-frame-3.png",
                "sha256": "7256ee31cc5593c7a0830449bd65c4a3f12e2e9cf2952739bbaf035556a1c073",
                "alphaMass": 203
              },
              {
                "frame": 22,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/16x9-duration-30-frame-22.png",
                "sha256": "117fb3bbba7368aff3f79f0031416f23f79e6bf7e41209d08442a7f5bdbbb1e1",
                "alphaMass": 1091
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/16x9-duration-30-frame-26.png",
                "sha256": "3ba3daa2657052970b8f2134adfae907d4cb416c1d9afd8547e3611d2e06a4e7",
                "alphaMass": 1107
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/16x9-duration-30-frame-29.png",
                "sha256": "b0faf464780f28d8f3e4b0fdbf294ca6b5c3aed283c5f67f411c16a4cab7924c",
                "alphaMass": 1114
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 1800,
            "averageChannelDifference": 7.989366319444445,
            "retainedAlpha": 1.018348623853211,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/16x9-duration-1800-frame-3.png",
                "sha256": "7256ee31cc5593c7a0830449bd65c4a3f12e2e9cf2952739bbaf035556a1c073",
                "alphaMass": 203
              },
              {
                "frame": 22,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/16x9-duration-1800-frame-22.png",
                "sha256": "117fb3bbba7368aff3f79f0031416f23f79e6bf7e41209d08442a7f5bdbbb1e1",
                "alphaMass": 1091
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/16x9-duration-1800-frame-1584.png",
                "sha256": "57b0d9c4d3f5814d435ba6bf319a744ca4a1ac204aa27bc8ff9cb023a0e93f1f",
                "alphaMass": 1090
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/16x9-duration-1800-frame-1799.png",
                "sha256": "e4ea1d7d929d6cdfc58674b4196d24831d0fc841ff8fdec123d4ddb3ad608532",
                "alphaMass": 1110
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 30,
            "averageChannelDifference": 7.475260416666667,
            "retainedAlpha": 1.0046082949308757,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/9x16-duration-30-frame-3.png",
                "sha256": "3a6c552fec915c00052a91dc10d5fe045dd54c27fc9dd6653e4b803ac6b75f71",
                "alphaMass": 198
              },
              {
                "frame": 22,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/9x16-duration-30-frame-22.png",
                "sha256": "7f96040595b30695c89a91c3a563bcb2f433392ec59ba684b63b5ac266e09ce6",
                "alphaMass": 1069
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/9x16-duration-30-frame-26.png",
                "sha256": "40dc97dba02791a84c0f12fd0e83f107598897141bb2875f51884436e7ec0699",
                "alphaMass": 1085
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/9x16-duration-30-frame-29.png",
                "sha256": "e4dbd2a95b8a3f655448158990651e7449e1a62bf5be6b09a9c797229da837c3",
                "alphaMass": 1090
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 1800,
            "averageChannelDifference": 7.475260416666667,
            "retainedAlpha": 1.0158878504672897,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/9x16-duration-1800-frame-3.png",
                "sha256": "3a6c552fec915c00052a91dc10d5fe045dd54c27fc9dd6653e4b803ac6b75f71",
                "alphaMass": 198
              },
              {
                "frame": 22,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/9x16-duration-1800-frame-22.png",
                "sha256": "7f96040595b30695c89a91c3a563bcb2f433392ec59ba684b63b5ac266e09ce6",
                "alphaMass": 1069
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/9x16-duration-1800-frame-1584.png",
                "sha256": "5efd931f5e7174ca7d67cbfb6f736514d33c96e0e43474a43a0a798118ce2bfb",
                "alphaMass": 1070
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/9x16-duration-1800-frame-1799.png",
                "sha256": "018fbdcedb510ecb9c400b8ccfece7f58b57bce4ed25b108bcf53212fad97ad4",
                "alphaMass": 1087
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 30,
            "averageChannelDifference": 10.481011284722221,
            "retainedAlpha": 1.004317323259579,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/1x1-duration-30-frame-3.png",
                "sha256": "ac150165252c83d5d736d86be73b91e9baf7bc25ed0b7cc33c34c8f23c02c8b1",
                "alphaMass": 341
              },
              {
                "frame": 22,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/1x1-duration-30-frame-22.png",
                "sha256": "e69bbb1b1d416520230233715d943599b83e2401cd94d067a60cb5f9426c015d",
                "alphaMass": 1827
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/1x1-duration-30-frame-26.png",
                "sha256": "04371674bd7af4553e36db4e17889d7a7e69f4e54cb424577b8a2552a95f375e",
                "alphaMass": 1853
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/1x1-duration-30-frame-29.png",
                "sha256": "e542f5161872e7c964760658324f0edbdf06428f16b6a053a916542394822bdb",
                "alphaMass": 1861
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 1800,
            "averageChannelDifference": 10.481011284722221,
            "retainedAlpha": 1.015881708652793,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/1x1-duration-1800-frame-3.png",
                "sha256": "ac150165252c83d5d736d86be73b91e9baf7bc25ed0b7cc33c34c8f23c02c8b1",
                "alphaMass": 341
              },
              {
                "frame": 22,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/1x1-duration-1800-frame-22.png",
                "sha256": "e69bbb1b1d416520230233715d943599b83e2401cd94d067a60cb5f9426c015d",
                "alphaMass": 1827
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/1x1-duration-1800-frame-1584.png",
                "sha256": "3aebd87dd65ec9649a9af4dbaf9e0e6ef6364a6b67d5bb829d4612d7064274b1",
                "alphaMass": 1826
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/hud-corners/1x1-duration-1800-frame-1799.png",
                "sha256": "7dfc99467271f3c8d51295c57c8d773f551fba92256217ec297b7f12cfe9c736",
                "alphaMass": 1855
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
        "note": "A HUD frame with corner readouts and a crosshair; an overlay frame."
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
      "bundleSha256": "f1886a1e3c9b1d45e436f177452583d3d00a5f93b135bfb82175c681db2450b2",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.020824Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/hud-corners/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/hud-corners/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/hud-corners/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 22,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "4d355b45e1a3a10771e7ed54ce5b42014e92268ffe5cd49e0749fe15745aea43",
        "loop": "81ca489e4315e8357257cedc70ab0c95cd676f97a087a33af9173971901a34e5",
        "detail": "0e6a21c47be8410e3e6ff42dc0f999739c9cc9383847bf85954f1880acbf1056"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/hud-corners/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/hud-corners/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/hud-corners/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 22,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "fc8cec649c755016cc79fd5cce7e0335970f122d0058da3ab432300c31f576eb",
        "loop": "92344f8b2860665ef33173b78a271983838968a3f76940be12475280a5474d22",
        "detail": "758ff32cf9c51367c39169703922c192cd37b428e42f6ed454787fa0a1e75a6f"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/hud-corners/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/hud-corners/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/hud-corners/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 22,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "6f97632ba8b389846dc9095283635d8143e75cdd67406b393759291715c9b994",
        "loop": "862205edd48fba2ab0c09223f0e6c722f4a8e31095d59327d86c14862830b2e2",
        "detail": "f3dc5575d2e8bb5c5dce121570521c96bcd23694b3b3abdbba35d9c45a642354"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/f1886a1e3c9b1d45e436f177452583d3d00a5f93b135bfb82175c681db2450b2/index.mjs",
    "sha256": "f1886a1e3c9b1d45e436f177452583d3d00a5f93b135bfb82175c681db2450b2",
    "bytes": 160138,
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
    "at": "2026-10-07T02:35:21.510Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
