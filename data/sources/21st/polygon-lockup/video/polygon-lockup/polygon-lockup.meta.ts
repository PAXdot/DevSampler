// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "brand/logo-reveal",
  "tags": [
    "logo",
    "lockup",
    "hexagon",
    "polygon",
    "reveal",
    "opener",
    "hype",
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
      "in": 76,
      "out": 0
    },
    "markers": {
      "settled": 76,
      "lock": 38
    },
    "beats": [
      0,
      6,
      34,
      38,
      48
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
    "safeArea": "title",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "logo",
      "type": "image",
      "role": "logo"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "name"
    },
    {
      "key": "tagline",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "monoFontFamily": "fonts.mono",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "fontFamily": "fonts.heading",
    "logo": "logos.light"
  },
  "motionBeats": [
    {
      "target": "outline",
      "prop": "draw",
      "settledBy": 34,
      "easing": "linear"
    },
    {
      "target": "mark",
      "prop": "x",
      "from": "sides",
      "settledBy": 38,
      "easing": "ease"
    },
    {
      "target": "mark",
      "prop": "scale",
      "from": "1.15",
      "settledBy": 46,
      "easing": "ease"
    },
    {
      "target": "title",
      "prop": "type",
      "settledBy": 68,
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
      120
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study of V02, research 2026-10-05)"
  },
  "job": "logos",
  "language": "aura",
  "mechanic": [
    "assemble"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "monoFontFamily": "Geist Mono",
    "logo": "",
    "title": "Northwind",
    "tagline": "drop 001",
    "sides": 6,
    "accent": "#F5A524",
    "secondary": "#3D8BFF",
    "color": "#F4F4F5",
    "fontFamily": "Space Grotesk"
  },
  "fields": [
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo",
      "brand": "logos.light"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 24,
      "role": "name"
    },
    {
      "key": "tagline",
      "label": "Tagline",
      "type": "text",
      "max": 40,
      "role": "subline"
    },
    {
      "key": "sides",
      "label": "Sides",
      "type": "number",
      "step": 1,
      "min": 3,
      "max": 8
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
  "name": "Polygon Lockup",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "polygon-lockup",
    "bundleSha256": "b90ca3604c67e3ebec40bb46df7f264b94811c07b76096fed41179f3194d768b",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:05:11.430Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/16x9-paper.png",
        "sha256": "d3e1af63bd0eecf2f8cfa071b454ea421bb8c627ee4749d87efc39186b024067"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/16x9-night.png",
        "sha256": "01b97ba429d4966b6a639f0fdf6ec09cae932bc83ea5a4c0c6b88578b2b7aa4f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/16x9-color.png",
        "sha256": "87bcde141c3e949ce9980af3130c95f66a51b3cde6d3f48ee551e71e322923f2"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/9x16-paper.png",
        "sha256": "b3eb185629234c9ad49fb41365b7112c40786ec4d5ced65cc8eb093f699bdbb8"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/9x16-night.png",
        "sha256": "9b1baa881c52ccde88eb2204feb5c0f617bd89869c2e8479dd0e5cb8871e4476"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/9x16-color.png",
        "sha256": "8e5b5518ef34cd2863b23634e04d366e4da4b2bd200412edefe1b897f194b8fb"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/1x1-paper.png",
        "sha256": "d83bc4d6ca5051cf77a623b4a8e206f795d2e82a94b3ec0dea9638c17f8f777a"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/1x1-night.png",
        "sha256": "ffd251cf53e9a3d9852be166feb9570c7da37f0b2df52e50779bd2ce1692047b"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/1x1-color.png",
        "sha256": "f300458741d32db896031b08c3f716ae6b3b9774ce960e1b398c94c6f46b0f99"
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
          "polygon-lockup--16x9",
          "polygon-lockup--9x16",
          "polygon-lockup--1x1"
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
            "paperNight": 14.33544921875,
            "paperColor": 12.202718098958334,
            "region": {
              "left": 368,
              "top": 317,
              "width": 1184,
              "height": 497
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 31.19097222222222,
            "paperColor": 26.948404947916668,
            "region": {
              "left": 207,
              "top": 635,
              "width": 666,
              "height": 691
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 23.13720703125,
            "paperColor": 21.01738823784722,
            "region": {
              "left": 207,
              "top": 317,
              "width": 666,
              "height": 497
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
            "occupancy": 0.837882842608923,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.837882842608923,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8328251996957906,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6552808599327077,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6552808599327077,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6505393197016461,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8378828426089229,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8378828426089229,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8328251996957906,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 13.14767795138889,
        "frames": [
          11,
          76,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 84,
            "averageChannelDifference": 13.223741319444445,
            "retainedAlpha": 1.0016210958608018,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/16x9-duration-84-frame-10.png",
                "sha256": "ff9928bb0f59c352c5ab02213f9173121d010853bb02d8581e0ad7a0f89c410e",
                "alphaMass": 647
              },
              {
                "frame": 76,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/16x9-duration-84-frame-76.png",
                "sha256": "f266a8222be1a36f44aefc1ffe8d0b986487314da61a53dd413b3e68377bf409",
                "alphaMass": 9268
              },
              {
                "frame": 73,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/16x9-duration-84-frame-73.png",
                "sha256": "4a7eaa99ccfb11146b7aa56c6e83a034fd60b3d3573c96e4ac2109c450c41f59",
                "alphaMass": 9253
              },
              {
                "frame": 83,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/16x9-duration-84-frame-83.png",
                "sha256": "f34f1731ef6e5e13b3a97a8685b80ae18645753184559be4b7da9690e4d95486",
                "alphaMass": 9268
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 13.14767795138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/16x9-duration-600-frame-11.png",
                "sha256": "805eadbc90b8382c9b52627ec80605e59afc8546bfee733cc11a06c063b3fb37",
                "alphaMass": 696
              },
              {
                "frame": 76,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/16x9-duration-600-frame-76.png",
                "sha256": "f34f1731ef6e5e13b3a97a8685b80ae18645753184559be4b7da9690e4d95486",
                "alphaMass": 9268
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/16x9-duration-600-frame-528.png",
                "sha256": "f266a8222be1a36f44aefc1ffe8d0b986487314da61a53dd413b3e68377bf409",
                "alphaMass": 9268
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/16x9-duration-600-frame-599.png",
                "sha256": "f266a8222be1a36f44aefc1ffe8d0b986487314da61a53dd413b3e68377bf409",
                "alphaMass": 9268
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 84,
            "averageChannelDifference": 22.64496527777778,
            "retainedAlpha": 1.0057495612176965,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/9x16-duration-84-frame-10.png",
                "sha256": "6c6b30861765169e63435f82d1027d694791d82fed83d166dfe28bd0d2757f2e",
                "alphaMass": 685
              },
              {
                "frame": 76,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/9x16-duration-84-frame-76.png",
                "sha256": "d5fcf1e885c44ba1979ef7cb927a270f2f6a9bcc684fbf4ffd77887240ac68b9",
                "alphaMass": 16618
              },
              {
                "frame": 73,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/9x16-duration-84-frame-73.png",
                "sha256": "9b8e14c080358f394216921628eda399d1cd8c16b8e32949a54af3c65a4885ec",
                "alphaMass": 16523
              },
              {
                "frame": 83,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/9x16-duration-84-frame-83.png",
                "sha256": "d5fcf1e885c44ba1979ef7cb927a270f2f6a9bcc684fbf4ffd77887240ac68b9",
                "alphaMass": 16618
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 22.398111979166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/9x16-duration-600-frame-11.png",
                "sha256": "436b04de13d17c28bbd3af017a830d51aa1d661fa10cc7ea2d5977be0c9c991f",
                "alphaMass": 767
              },
              {
                "frame": 76,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/9x16-duration-600-frame-76.png",
                "sha256": "d5fcf1e885c44ba1979ef7cb927a270f2f6a9bcc684fbf4ffd77887240ac68b9",
                "alphaMass": 16618
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/9x16-duration-600-frame-528.png",
                "sha256": "d5fcf1e885c44ba1979ef7cb927a270f2f6a9bcc684fbf4ffd77887240ac68b9",
                "alphaMass": 16618
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/9x16-duration-600-frame-599.png",
                "sha256": "d5fcf1e885c44ba1979ef7cb927a270f2f6a9bcc684fbf4ffd77887240ac68b9",
                "alphaMass": 16618
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 84,
            "averageChannelDifference": 20.94292534722222,
            "retainedAlpha": 1.0018924363591966,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/1x1-duration-84-frame-10.png",
                "sha256": "1a822d190d8e67d7f678e431af5d624b6872342a687511353d0a8f191e36741b",
                "alphaMass": 801
              },
              {
                "frame": 76,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/1x1-duration-84-frame-76.png",
                "sha256": "2301856a146bda4e356461ae9be2767925a56a650ab7bf3eb2151460b6f1b4cf",
                "alphaMass": 16412
              },
              {
                "frame": 73,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/1x1-duration-84-frame-73.png",
                "sha256": "33e00c4486df0ec86d6be16850febfbef21b871504fa57c2653e280de0ef712d",
                "alphaMass": 16381
              },
              {
                "frame": 83,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/1x1-duration-84-frame-83.png",
                "sha256": "b6fed543bff8b006d12d9506a5b72dcfac4a9ea274a30c7249417a1bb005894c",
                "alphaMass": 16412
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 20.805338541666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/1x1-duration-600-frame-11.png",
                "sha256": "dc42b9e1b36edf720d0beee0103acb47ba8d6fd521e32c496eb279231c69fd61",
                "alphaMass": 884
              },
              {
                "frame": 76,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/1x1-duration-600-frame-76.png",
                "sha256": "b6fed543bff8b006d12d9506a5b72dcfac4a9ea274a30c7249417a1bb005894c",
                "alphaMass": 16412
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/1x1-duration-600-frame-528.png",
                "sha256": "b6fed543bff8b006d12d9506a5b72dcfac4a9ea274a30c7249417a1bb005894c",
                "alphaMass": 16412
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/polygon-lockup/1x1-duration-600-frame-599.png",
                "sha256": "2301856a146bda4e356461ae9be2767925a56a650ab7bf3eb2151460b6f1b4cf",
                "alphaMass": 16412
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
        "note": "A hexagon mark draws and locks up with a wordmark."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 10,
        "compared": 10,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "b90ca3604c67e3ebec40bb46df7f264b94811c07b76096fed41179f3194d768b",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.019521Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/polygon-lockup/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/polygon-lockup/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/polygon-lockup/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 76,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "3beedeb680d98b2047a3ceb1a47ab32e7a213075ce82a75f092042df366782be",
        "loop": "3ae640f747166f33874d69d126b9da33168dac2eab858425da126f951ac72c84",
        "detail": "8e7afa1a6a652118ac9c131ca26cae633ff9a3980ce649a67ee35fe2a110fe3a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/polygon-lockup/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/polygon-lockup/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/polygon-lockup/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 76,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "81d0f815cd9f4f70e5454dd6c486edf978aaeced9467ec6d89e7b50fdd21690a",
        "loop": "7f84760a5b693a4825f4b1cbce5a26032e3acf85b141561fa9afdc8c29bad886",
        "detail": "54d1d2cc03ff4328946595ea14c20cde26a5c7970d09ae9a640ab1090379d924"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/polygon-lockup/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/polygon-lockup/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/polygon-lockup/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 76,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "bc0900157508383dc17293c7fcd76001d4a6cec5261aaf1fbddd4aec555abcb8",
        "loop": "7dff7e4affd4fcedf95d6e2d187eb644ca5a2e292750de015537a9770325e8ae",
        "detail": "806377f94e67096ebf3e835e2604d7b5de9462353b2a67eac416a2bb08a1756b"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/b90ca3604c67e3ebec40bb46df7f264b94811c07b76096fed41179f3194d768b/index.mjs",
    "sha256": "b90ca3604c67e3ebec40bb46df7f264b94811c07b76096fed41179f3194d768b",
    "bytes": 161388,
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
    "at": "2026-10-07T02:33:58.940Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
