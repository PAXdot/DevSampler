// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/motion-gallery",
  "job": "data",
  "language": "product-ui",
  "mechanic": [
    "heatmap-wipe-streak-count"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "data",
    "heatmap-wipe-streak-count",
    "fitness",
    "streak",
    "heatmap"
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
      "in": 90,
      "out": 0
    },
    "markers": {
      "settled": 90
    },
    "beats": [
      0,
      23,
      45,
      68,
      90
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
      "key": "kicker",
      "type": "text",
      "maxChars": 20,
      "role": "kicker"
    },
    {
      "key": "big",
      "type": "text",
      "maxChars": 3,
      "role": "value"
    },
    {
      "key": "label",
      "type": "text",
      "maxChars": 16,
      "role": "label"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 64,
      "role": "body"
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
      "target": "heatmap-wipe-streak-count",
      "prop": "transform",
      "from": "enter",
      "settledBy": 90,
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
    "ink": "#E8F5EC",
    "accent": "#9BFFB8",
    "secondary": "#2A8A52",
    "paper": "#0B1A12",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "MOVARA STEPS",
    "big": "42",
    "label": "day streak",
    "sub": "Your longest yet, Sam. One walk tomorrow keeps it alive."
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
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 20,
      "role": "kicker"
    },
    {
      "key": "big",
      "label": "Big",
      "type": "text",
      "max": 3,
      "role": "value"
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 16,
      "role": "label"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 64,
      "role": "body"
    }
  ],
  "name": "Step Streak Heatmap",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fit-step-streak",
    "bundleSha256": "2146133df70b1d0cd87f5a0d737dc99b54e98a35de08af7470b8ba3f0c2eef96",
    "sourceSnapshot": {
      "sha256": "b342da95c90071ffb99c060c999d9fca49ed6722762d7db99795613749872dfe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T07:47:05.213Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/16x9-paper.png",
        "sha256": "4a822f9bcf22753940dafeb2404d48451623f7212e5d61236ec3d0dd04f8e607"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/16x9-night.png",
        "sha256": "63b5e43f622678ab5c474c4d2ea50c4b58cb88f6ee94f81f123ca11a97fccc4e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/16x9-color.png",
        "sha256": "6c9dba1088c734de77f137d009e89494fe8f0d92838c32fdadf1e95571ff3e39"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/9x16-paper.png",
        "sha256": "7b8322915bc50b710269811503ecf9bafcf2c37e546b6e5710fd7e739640d7b9"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/9x16-night.png",
        "sha256": "748f16a0054be511bc53f2300451c1e863c942cc01f777fb62a7b1870988a162"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/9x16-color.png",
        "sha256": "91df50fd2f8207c96633f93fd26c8eeedb7f1febeb105de612e347cda7be7edc"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/1x1-paper.png",
        "sha256": "80c939914d333813166b7fca472fc375ac77ed094cc00c9b20d209e9f97b7a88"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/1x1-night.png",
        "sha256": "11df4ac618b24c428dbeb3c6c0e901c0abee5ca531461ac9a8de37bc3e66d9e9"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/1x1-color.png",
        "sha256": "b400f2615ffe6170772d2a85788a69c4d9684308e1d54fec9efb09a490ffe92f"
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
          "mg-fit-step-streak--16x9",
          "mg-fit-step-streak--9x16",
          "mg-fit-step-streak--1x1"
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
            "paperNight": 43.801188151041664,
            "paperColor": 18.995252821180557,
            "region": {
              "left": 73,
              "top": 131,
              "width": 1752,
              "height": 856
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 53.94683159722222,
            "paperColor": 22.838785807291668,
            "region": {
              "left": 34,
              "top": 103,
              "width": 993,
              "height": 1714
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 44.72474500868056,
            "paperColor": 20.065999348958332,
            "region": {
              "left": 38,
              "top": 70,
              "width": 989,
              "height": 714
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
            "occupancy": 1.0138694511369364,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0185655409283056,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0238036186696904,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1403358121798104,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1502009497214527,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1632592369509536,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8467241491932852,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8527969658370894,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8568005534403978,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 13.646592881944445,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 13.673719618055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/16x9-duration-90-frame-10.png",
                "sha256": "6edf17f73355dd61a2f96f141458dd0830ef7cef228a6e131fd08fc8dbc1b7d0",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/16x9-duration-90-frame-89.png",
                "sha256": "9e94da6d8bf51361b5421e584a35e1fa1e8c5d26a895331261e4f490c4569452",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/16x9-duration-90-frame-79.png",
                "sha256": "9e94da6d8bf51361b5421e584a35e1fa1e8c5d26a895331261e4f490c4569452",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 13.646592881944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/16x9-duration-900-frame-13.png",
                "sha256": "ad8041298b430169c24d8ef506ea8bc72e4e12e4059e8f268fe04f353fe905c0",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/16x9-duration-900-frame-90.png",
                "sha256": "9e94da6d8bf51361b5421e584a35e1fa1e8c5d26a895331261e4f490c4569452",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/16x9-duration-900-frame-792.png",
                "sha256": "9e94da6d8bf51361b5421e584a35e1fa1e8c5d26a895331261e4f490c4569452",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/16x9-duration-900-frame-899.png",
                "sha256": "9e94da6d8bf51361b5421e584a35e1fa1e8c5d26a895331261e4f490c4569452",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 17.17437065972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/9x16-duration-90-frame-10.png",
                "sha256": "a82ef13b52a423ee42acf0fb95161c48846785388c9f6417c9a1529fd94f7139",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/9x16-duration-90-frame-89.png",
                "sha256": "89cd369f825010c978d22e82007f2e9f3b47b9cb0237112322ab6dc1cbdf9285",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/9x16-duration-90-frame-79.png",
                "sha256": "89cd369f825010c978d22e82007f2e9f3b47b9cb0237112322ab6dc1cbdf9285",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 17.139539930555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/9x16-duration-900-frame-13.png",
                "sha256": "542a6f78a23166ee845185bc2f334799fa2ba1e0ece9881bff7c9de1e5272e50",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/9x16-duration-900-frame-90.png",
                "sha256": "89cd369f825010c978d22e82007f2e9f3b47b9cb0237112322ab6dc1cbdf9285",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/9x16-duration-900-frame-792.png",
                "sha256": "89cd369f825010c978d22e82007f2e9f3b47b9cb0237112322ab6dc1cbdf9285",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/9x16-duration-900-frame-899.png",
                "sha256": "89cd369f825010c978d22e82007f2e9f3b47b9cb0237112322ab6dc1cbdf9285",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 10.656141493055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/1x1-duration-90-frame-10.png",
                "sha256": "da43e56a81618077c63e2b29d8f38289a00dd95ff9b84b59e0264ceaa6498053",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/1x1-duration-90-frame-89.png",
                "sha256": "1619e738197277dbb0b109bf067a374f5f4f4e7a3b4b6e0632d206a36fd54ebc",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/1x1-duration-90-frame-79.png",
                "sha256": "1619e738197277dbb0b109bf067a374f5f4f4e7a3b4b6e0632d206a36fd54ebc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 10.6396484375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/1x1-duration-900-frame-13.png",
                "sha256": "1c1218a9b0ae4fa6c4fcdf83609ba60295012234cbe4fb4ad9d28a89cfbd75d6",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/1x1-duration-900-frame-90.png",
                "sha256": "1619e738197277dbb0b109bf067a374f5f4f4e7a3b4b6e0632d206a36fd54ebc",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/1x1-duration-900-frame-792.png",
                "sha256": "1619e738197277dbb0b109bf067a374f5f4f4e7a3b4b6e0632d206a36fd54ebc",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-fit-step-streak/1x1-duration-900-frame-899.png",
                "sha256": "3b5e74104363b49ea0e561a00b06b148ac46ac3c9bed2f70e93777f1d0cd6cc0",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "data",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Step-streak heatmap fills beside a big streak count and weekly bars; rebrands recolor the heatmap."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 28,
        "compared": 28,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "2146133df70b1d0cd87f5a0d737dc99b54e98a35de08af7470b8ba3f0c2eef96",
      "selectedBy": "serafim (repo owner) on 2026-10-09; visual review by claude",
      "at": "2026-10-09T07:49:52.846Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-step-streak/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-step-streak/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-step-streak/16x9/detail.mp4",
      "bg": "#0b1b13",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4528c462c630fc58dc0a674677874b6e265fbbbc8e351b3d0fc5fc8f4328b616",
        "loop": "fdf48b85479ce66960cee02b8726292db1fddb92d1fd4ec1e09dfb15704c6df6",
        "detail": "f6f8c054668cd531151599aa47755e07d348b7a87e6e8ed942d2e8fbee2c4d85"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-step-streak/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-step-streak/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-step-streak/9x16/detail.mp4",
      "bg": "#0b1a12",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0df0b2f06a6e998c808004d518b56653110f6fa412e30d9432b794fe6054ea26",
        "loop": "16cc07b5c937e2f2e7a3ef023d4c21d2002c9a4cc7ee17d35881f5f6e6b86269",
        "detail": "08639f9b39b20584d5cab471b15719b629b0f65c2f9c84db88697d94621cff92"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-step-streak/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-step-streak/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-step-streak/1x1/detail.mp4",
      "bg": "#0b1a12",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "191046b56bb098ea5e732119876f118c692a41c0072ec6e8a85aa3c0ea55e239",
        "loop": "75b776057b4f091cc8ed850069328b72b40ddd1408766a8bc6e87e7f71912633",
        "detail": "46fb410515c69441a3b6c1638ca7cea697dd9196d34c88a3e9c2e92820ec28d3"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/2146133df70b1d0cd87f5a0d737dc99b54e98a35de08af7470b8ba3f0c2eef96/index.mjs",
    "sha256": "2146133df70b1d0cd87f5a0d737dc99b54e98a35de08af7470b8ba3f0c2eef96",
    "bytes": 175835,
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
    "at": "2026-10-09T08:01:43.508Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
