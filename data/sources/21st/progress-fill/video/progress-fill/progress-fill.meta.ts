// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "data/progress",
  "tags": [
    "progress",
    "loader",
    "bar",
    "goal",
    "upload",
    "status"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 110,
      "min": 30,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 80,
      "out": 0
    },
    "markers": {
      "settled": 80
    },
    "beats": [
      0,
      10,
      70
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
    "safeArea": "action",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "label",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "doneLabel",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "percent",
      "type": "number",
      "role": "value"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "color": "colors.text",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "fill",
      "prop": "scaleX",
      "from": "0",
      "settledBy": 70,
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
      110
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (motion study X1, twitter-remotion-research)"
  },
  "job": "data",
  "language": "product-ui",
  "mechanic": [
    "draw"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "label": "Rendering your launch video",
    "doneLabel": "Ready",
    "percent": 100,
    "fillFrames": 60,
    "easing": "ease",
    "showPercent": true,
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "doneLabel",
      "label": "Done label",
      "type": "text",
      "max": 24,
      "role": "label"
    },
    {
      "key": "percent",
      "label": "Percent",
      "type": "number",
      "min": 0,
      "max": 100,
      "role": "value"
    },
    {
      "key": "fillFrames",
      "label": "Fill frames",
      "type": "number",
      "step": 1,
      "min": 10,
      "max": 600
    },
    {
      "key": "easing",
      "label": "Easing",
      "type": "select",
      "options": [
        "linear",
        "ease"
      ]
    },
    {
      "key": "showPercent",
      "label": "Show percent",
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
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Progress Fill",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "progress-fill",
    "bundleSha256": "35c31d5a1abbca5f377f00e761f6e266a35d2c8e84465822b7c7ecbe2ecb2041",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:49:35.504Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/16x9-paper.png",
        "sha256": "8410f877ae139093829296580ac3a916ac4b74967c122b3c8c4badb631559d3f"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/16x9-night.png",
        "sha256": "28f726a35ac5a9184fffa35e0fb46dc9af9af8db3b9393985d4fcd93e3f5abf6"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/16x9-color.png",
        "sha256": "6e9591fa1880e2a201064d7482e6aec3d6981666784490b2ad6916f9e8e8a2a4"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/9x16-paper.png",
        "sha256": "46df04535d99ac1059ad8b4b5a8a8365f32493c876d4826206dba1d4050d97c1"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/9x16-night.png",
        "sha256": "28032aba391ec4ab1bfd9e37e41eb5d8a67f44acb0e8d0cde0bfc8beba5acf1b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/9x16-color.png",
        "sha256": "05d6547441c05d11307909c438b6bc49ce4483dd827d989cb5f825d936e3b413"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/1x1-paper.png",
        "sha256": "5077a6c6ce8e4a0e2178dd5c0e23b11ef19f2b37575e6d38d30e1539661990cf"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/1x1-night.png",
        "sha256": "ad8063f4caeb8e84ddb587d25220ad8d4d733b24558c75e0a0be7573fba2ea35"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/1x1-color.png",
        "sha256": "1e861a59186b77be77e8ef3243791e531cd41faafa6bf75ffe210cfb4030576a"
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
          "progress-fill--16x9",
          "progress-fill--9x16",
          "progress-fill--1x1"
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
            "paperNight": 48.119113498263886,
            "paperColor": 25.99020724826389,
            "region": {
              "left": 223,
              "top": 481,
              "width": 1476,
              "height": 131
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 29.97897677951389,
            "paperColor": 11.784233940972221,
            "region": {
              "left": 143,
              "top": 466,
              "width": 795,
              "height": 990
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 51.207248263888886,
            "paperColor": 29.42377387152778,
            "region": {
              "left": 125,
              "top": 501,
              "width": 831,
              "height": 86
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
            "occupancy": 0.27494383464762795,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.27284502674955446,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.2669102700879735,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0482221236938707,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.916270612218653,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7496218477853248,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.18068796353322614,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.17858694070144443,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.1745949973210592,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.897352430555555,
        "frames": [
          12,
          80,
          109
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 30,
            "averageChannelDifference": 21.418619791666668,
            "retainedAlpha": 0.9811616954474097,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/16x9-duration-30-frame-3.png",
                "sha256": "4fdb8ae14254b84560a0df310e99ebd0816748d1f6ff5416951ed74bf46d3cd5",
                "alphaMass": 2179
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/16x9-duration-30-frame-29.png",
                "sha256": "3ba3f0b3ccdd56609409260a69d6db75032328d3e45a719309e0a0897949958f",
                "alphaMass": 16562
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/16x9-duration-30-frame-26.png",
                "sha256": "5232807e2992cc97b2d4caa281580608bb3297e65bf7204269575805f9d59ea1",
                "alphaMass": 16250
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 9.897352430555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/16x9-duration-900-frame-12.png",
                "sha256": "d317de45c3eae69a5b93e3e50ef7fecb73b2aa16c660445e952ab03669f4f2f4",
                "alphaMass": 5727
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/16x9-duration-900-frame-80.png",
                "sha256": "4faebd1492a2693fdc8ce5b7ea847b3b02425d590e5e4a3d82d1a346d9f6b9f5",
                "alphaMass": 16561
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/16x9-duration-900-frame-792.png",
                "sha256": "174c9a0597232e4ed7516208daacf74577940cd76b6be77ea2ca9633a7660432",
                "alphaMass": 16561
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/16x9-duration-900-frame-899.png",
                "sha256": "174c9a0597232e4ed7516208daacf74577940cd76b6be77ea2ca9633a7660432",
                "alphaMass": 16561
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 30,
            "averageChannelDifference": 19.543619791666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/9x16-duration-30-frame-3.png",
                "sha256": "8fb242e7b1f956752d65736b326b742f9de25c65573581e442d147faa9e3c986",
                "alphaMass": 3728
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/9x16-duration-30-frame-29.png",
                "sha256": "705c127f0d11ccf75dba0df73196e922dc0558c3dd064a9294a5ade3cc193662",
                "alphaMass": 44254
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/9x16-duration-30-frame-26.png",
                "sha256": "705c127f0d11ccf75dba0df73196e922dc0558c3dd064a9294a5ade3cc193662",
                "alphaMass": 44254
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 14.976671006944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/9x16-duration-900-frame-12.png",
                "sha256": "21a25ce05300db1072f83fb44de15e728d8b38b970fb20d9231bd1b203021ce5",
                "alphaMass": 9755
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/9x16-duration-900-frame-80.png",
                "sha256": "705c127f0d11ccf75dba0df73196e922dc0558c3dd064a9294a5ade3cc193662",
                "alphaMass": 44254
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/9x16-duration-900-frame-792.png",
                "sha256": "705c127f0d11ccf75dba0df73196e922dc0558c3dd064a9294a5ade3cc193662",
                "alphaMass": 44254
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/9x16-duration-900-frame-899.png",
                "sha256": "705c127f0d11ccf75dba0df73196e922dc0558c3dd064a9294a5ade3cc193662",
                "alphaMass": 44254
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 30,
            "averageChannelDifference": 19.822157118055557,
            "retainedAlpha": 0.9822378419452887,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/1x1-duration-30-frame-3.png",
                "sha256": "681318e674886a246ff69cdcebf43f43422ab27c2af23bc3c4e02215601b5d3d",
                "alphaMass": 1569
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/1x1-duration-30-frame-29.png",
                "sha256": "4827eed211387858faf2524bc533bc701ef8752e81bb912bafc70c03fcb97b94",
                "alphaMass": 10528
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/1x1-duration-30-frame-26.png",
                "sha256": "bcbfe1bbb671db1a16434709f54528e32a32a47375d214fd71ef33c91b164a55",
                "alphaMass": 10341
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 8.33420138888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/1x1-duration-900-frame-12.png",
                "sha256": "86b7a6edb6ecd42546500759bae400f86e896da7a713ffceb7379d5e4bfa06e6",
                "alphaMass": 4003
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/1x1-duration-900-frame-80.png",
                "sha256": "33f24a306290a18d15ed89a8856196d0cdb1c680d5fb2d6b7ea75548146ba86e",
                "alphaMass": 10529
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/1x1-duration-900-frame-792.png",
                "sha256": "b36fd9818c6a145a41cb193c48f0caedef76d62de08f30a5399e8b5e9f16cafd",
                "alphaMass": 10528
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-0/progress-fill/1x1-duration-900-frame-899.png",
                "sha256": "b36fd9818c6a145a41cb193c48f0caedef76d62de08f30a5399e8b5e9f16cafd",
                "alphaMass": 10528
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
        "note": "A render progress bar fills to Ready in brand blue."
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
      "bundleSha256": "35c31d5a1abbca5f377f00e761f6e266a35d2c8e84465822b7c7ecbe2ecb2041",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/progress-fill/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/progress-fill/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/progress-fill/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "43d039f763f86727d7c5d663057adb565b3b6a1bbb7c29ef0ddd2292e1c7f4fc",
        "loop": "e5a7793a33576e98549c4d1f3b0ed585c0397845b9d601f71b74f967ceccc33f",
        "detail": "4444400a7d49c3e1530530699cd8696badff5628c404b80e1a094e429e1e8596"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/progress-fill/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/progress-fill/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/progress-fill/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "7f472b6cf0e760d49bfa88f1c99c1efec72fd6601270a0dc5b01308b49e46ea8",
        "loop": "2bdcc3ab2582f30af23dad48e454d8c76b7f0f37f6beb501ff9ab4aad15216b4",
        "detail": "6e56b3bdb29d67af7a448d220b688f90ac4fba78b0cbbadaddd280afd0806be0"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/progress-fill/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/progress-fill/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/progress-fill/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 80,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "476c078376cb3a1cb15dbcea26719cbda21259bb66289a55cfe0a1ec54503105",
        "loop": "fa1e582193aee83eeb53de5d33219df34652cdaca9fae1e9542fb3aa1c440348",
        "detail": "ff38d71c0a438db8e85214572aa32cd4f8e16d31bbc37b936f03a1aa7acf1d7e"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/35c31d5a1abbca5f377f00e761f6e266a35d2c8e84465822b7c7ecbe2ecb2041/index.mjs",
    "sha256": "35c31d5a1abbca5f377f00e761f6e266a35d2c8e84465822b7c7ecbe2ecb2041",
    "bytes": 164257,
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
    "at": "2026-10-09T04:18:06.754Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
