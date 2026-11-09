// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "diagram/files",
  "tags": [
    "file tree",
    "folders",
    "routing",
    "developer",
    "explainer",
    "code",
    "project"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 90,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 90,
      "out": 0
    },
    "markers": {
      "settled": 92
    },
    "beats": [
      0,
      30,
      48,
      56
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "16:9",
      "1:1",
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
    "safeArea": "action",
    "transparent": true,
    "preset": "full",
    "backdrop": []
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "rows",
      "type": "list",
      "maxChars": 28,
      "role": "code"
    },
    {
      "key": "insertName",
      "type": "text",
      "maxChars": 28,
      "lines": 1,
      "role": "code"
    }
  ],
  "brand": {
    "monoFontFamily": "fonts.mono",
    "accent": "colors.primary",
    "color": "colors.text",
    "fontFamily": "fonts.heading",
    "cardColor": "colors.background"
  },
  "motionBeats": [
    {
      "target": "card",
      "prop": "x",
      "from": "right",
      "settledBy": 10,
      "easing": "ease"
    },
    {
      "target": "rows",
      "prop": "y",
      "from": "below",
      "settledBy": 36,
      "easing": "ease"
    },
    {
      "target": "insert",
      "prop": "type",
      "settledBy": 90,
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party; motion recipe from research V10"
  },
  "job": "code",
  "language": "product-ui",
  "mechanic": [
    "type"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "title": "~/acme/web",
    "rows": [
      {
        "text": "app",
        "depth": 0
      },
      {
        "text": "dashboard",
        "depth": 1
      },
      {
        "text": "layout.tsx",
        "depth": 2
      },
      {
        "text": "page.tsx",
        "depth": 2
      },
      {
        "text": "settings",
        "depth": 1
      },
      {
        "text": "globals.css",
        "depth": 1
      },
      {
        "text": "layout.tsx",
        "depth": 1
      },
      {
        "text": "package.json",
        "depth": 0
      }
    ],
    "highlight": 4,
    "insertAfter": 4,
    "insertName": "page.tsx",
    "monoFontFamily": "Geist Mono",
    "accent": "#3FB950",
    "color": "#E8E8EA",
    "cardColor": "#111114",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 32,
      "role": "label"
    },
    {
      "key": "rows",
      "label": "Rows",
      "type": "list",
      "max": 10,
      "role": "code"
    },
    {
      "key": "highlight",
      "label": "Highlight",
      "type": "number",
      "step": 1,
      "min": -1,
      "max": 9
    },
    {
      "key": "insertAfter",
      "label": "Insert after",
      "type": "number",
      "step": 1,
      "min": -1,
      "max": 9
    },
    {
      "key": "insertName",
      "label": "Insert name",
      "type": "text",
      "max": 28,
      "role": "code"
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "cardColor",
      "label": "Card color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "File Tree Reflow",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "file-tree",
    "bundleSha256": "a25b8d817a6bbe849bf967cda7be86b6f8a4ced5b7438fc726960717c83f5281",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:57:45.985Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/16x9-paper.png",
        "sha256": "24a15dfb41913a505163176a29637c9c26d5339dc48c7d17fa0b9870054dd962"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/16x9-night.png",
        "sha256": "cd087a6db15dc9f3622b661be2e952c5615d73508c144d6c8f6974bb28dc2025"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/16x9-color.png",
        "sha256": "851ea8c3fbdf7ddd87bd16ee0f304480b3c0c5788f15964af986a4b4891a5aba"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/1x1-paper.png",
        "sha256": "f7562bbb5d76407eb52ac811dd1150f37d9815e5c9f3e4e4719b220d28764332"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/1x1-night.png",
        "sha256": "2893b569f36c114776910ff71bde9906d0ca5470d231772bf8f5fcc7491ce9f5"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/1x1-color.png",
        "sha256": "1cd8fd3cf9d3af9a8b7120767e571679dc45c9f56852a6884f1d2ef993e3d8a4"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/9x16-paper.png",
        "sha256": "437c9ff7a43e7960d463939f563648f1ecc084266f18015caae770e4f40fe57f"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/9x16-night.png",
        "sha256": "755de83a20eba65ed04ec0556b821b9e232711ed44b7f1b39e70045e1371ca0e"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/9x16-color.png",
        "sha256": "0847a0e15160bc10d4599c73ea723a54f3bda6c104cbff312b64d483bad1513c"
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
          "file-tree--16x9",
          "file-tree--1x1",
          "file-tree--9x16"
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
            "paperNight": 141.65378146701389,
            "paperColor": 11.528727213541666,
            "region": {
              "left": 529,
              "top": 82,
              "width": 862,
              "height": 948
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 141.65378146701389,
            "paperColor": 11.528727213541666,
            "region": {
              "left": 109,
              "top": 82,
              "width": 862,
              "height": 948
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 135.81830512152777,
            "paperColor": 11.505479600694445,
            "region": {
              "left": 0,
              "top": 144,
              "width": 1080,
              "height": 1688
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
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5585114061056523,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5585114061056523,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5585114061056523,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9929091664100484,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9929091664100484,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9929091664100484,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2459845049130767,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2459845049130767,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2459845049130767,
            "bad": [],
            "measured": 10
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.4220920138888888,
        "frames": [
          13,
          92,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 1.568359375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/16x9-duration-90-frame-10.png",
                "sha256": "224232797624aab5ad94c2d074ac5f2c5a176197174df062f228e412db5b2a24",
                "alphaMass": 207605
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/16x9-duration-90-frame-89.png",
                "sha256": "9c9bd885909be15370f89e4b6b8199977959a4a5a7843b230ffe9fb51ee506b9",
                "alphaMass": 207656
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/16x9-duration-90-frame-79.png",
                "sha256": "d646d5a282730016929d680cab309b80167bc95e1a0ef2235304f03b5adecfa3",
                "alphaMass": 207656
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 1.4220920138888888,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/16x9-duration-900-frame-13.png",
                "sha256": "a025a9431327bc5f0950ab434864fac5d5587d443dd45b8bd1691fcdbcfba6b3",
                "alphaMass": 207656
              },
              {
                "frame": 92,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/16x9-duration-900-frame-92.png",
                "sha256": "7d697fd51c5eac7edfc0fc0999bedfe7e23bd8521e55e6430c2feb61303ab3f9",
                "alphaMass": 207656
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/16x9-duration-900-frame-792.png",
                "sha256": "7d697fd51c5eac7edfc0fc0999bedfe7e23bd8521e55e6430c2feb61303ab3f9",
                "alphaMass": 207656
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/16x9-duration-900-frame-899.png",
                "sha256": "7d697fd51c5eac7edfc0fc0999bedfe7e23bd8521e55e6430c2feb61303ab3f9",
                "alphaMass": 207656
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 2.666232638888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/1x1-duration-90-frame-10.png",
                "sha256": "8ee02dacea32fcaa9eb9046df616cde0956ee20440236b72e21cbd0ab6223e9b",
                "alphaMass": 369689
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/1x1-duration-90-frame-89.png",
                "sha256": "6813d4d6296210b3b3274446a76178d15e02ab2ca0cf10035c87da3d288e3307",
                "alphaMass": 369778
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/1x1-duration-90-frame-79.png",
                "sha256": "7a46a19944b7ff5e4da3be15a86ae71a10b38674f8379de96c7adb3cdf04e42e",
                "alphaMass": 369778
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 2.4153645833333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/1x1-duration-900-frame-13.png",
                "sha256": "ad847550e753f26e9b63495602099e888a4306bf7ab89ea6f279bf1144001a88",
                "alphaMass": 369778
              },
              {
                "frame": 92,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/1x1-duration-900-frame-92.png",
                "sha256": "5603796ec36a5fe09c789d21acc90004cb91f1cd0e0a551bf2982415489d500d",
                "alphaMass": 369778
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/1x1-duration-900-frame-792.png",
                "sha256": "5603796ec36a5fe09c789d21acc90004cb91f1cd0e0a551bf2982415489d500d",
                "alphaMass": 369778
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/1x1-duration-900-frame-899.png",
                "sha256": "5603796ec36a5fe09c789d21acc90004cb91f1cd0e0a551bf2982415489d500d",
                "alphaMass": 369778
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 4.232530381944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/9x16-duration-90-frame-10.png",
                "sha256": "d37a5f5ddc6f2fa48d1f94bfacf21845d0c6ae4002a4bbead703d714a5a17372",
                "alphaMass": 453752
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/9x16-duration-90-frame-89.png",
                "sha256": "5d4e22efcd370b9bdfae00927950eeeb2c532b731bb8a413f62d73c85c0ed6b8",
                "alphaMass": 453843
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/9x16-duration-90-frame-79.png",
                "sha256": "de7fd58f67f8261e5fd55376a164277dc08a50584f7fde2962093ca4b87a2bc6",
                "alphaMass": 453843
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 3.8096788194444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/9x16-duration-900-frame-13.png",
                "sha256": "a0b0444ef2976d19f5e05af6f5639b871b8c61d2fbf276d0169c90d39f0cfc0f",
                "alphaMass": 453843
              },
              {
                "frame": 92,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/9x16-duration-900-frame-92.png",
                "sha256": "bbd77540dafdea0a62db42aaa0016281c3f8a3c91a991b9c2f09ad3dc40b892a",
                "alphaMass": 453843
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/9x16-duration-900-frame-792.png",
                "sha256": "bbd77540dafdea0a62db42aaa0016281c3f8a3c91a991b9c2f09ad3dc40b892a",
                "alphaMass": 453843
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/file-tree/9x16-duration-900-frame-899.png",
                "sha256": "bbd77540dafdea0a62db42aaa0016281c3f8a3c91a991b9c2f09ad3dc40b892a",
                "alphaMass": 453843
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "code",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A file tree expands and highlights the changed file."
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
      "bundleSha256": "a25b8d817a6bbe849bf967cda7be86b6f8a4ced5b7438fc726960717c83f5281",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.957977Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/file-tree/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/file-tree/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/file-tree/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 92,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "8ca43d19ddc0ca7ed2fe505c34e3a218bc62ac5538f7729a000544fb13228236",
        "loop": "c2e45da13f85aaab8273e9efde2f96b7a0ff7d66ff3c17acc853c10c30ecb1ee",
        "detail": "7d2e62b92671fc0590c531ec1aa66e8ab8e14215e6c4ae8eab87b1d899f9c05c"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/file-tree/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/file-tree/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/file-tree/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 92,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "246d5015c8896433b59932a75a929ec8489394bcd7852897826f4afc8c440bd3",
        "loop": "ac9d5dac04d5db102fb10860d9f2943620e87bd5ff68496ec961ecb08a2f07e8",
        "detail": "7503fc47f20f62136f88c9222bd14fadf4920f31bc13eec408ef94bc9cd42854"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/file-tree/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/file-tree/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/file-tree/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 92,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "e87d8325823b9f70f75bb0d944ab0379a471b1d7cf14ab76add8b2bc76af7b46",
        "loop": "f534f8e062a374feb6e6aa443eeb6e2f17e023459d0ce846ba787b2dec5c6492",
        "detail": "314ea9b2fc3cf7907b29d155dcab9192a3876bccb8c03c97c7e86b2af4d6650f"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/a25b8d817a6bbe849bf967cda7be86b6f8a4ced5b7438fc726960717c83f5281/index.mjs",
    "sha256": "a25b8d817a6bbe849bf967cda7be86b6f8a4ced5b7438fc726960717c83f5281",
    "bytes": 165214,
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
    "1:1": {
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
    "at": "2026-10-07T02:24:12.774Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
