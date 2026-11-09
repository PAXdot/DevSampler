// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "diagram/flow",
  "tags": [
    "diagram",
    "tree",
    "flow",
    "explainer",
    "steps",
    "loop",
    "architecture"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 200,
      "min": 150,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 136,
      "out": 0
    },
    "markers": {
      "settled": 136
    },
    "beats": [
      0,
      21,
      53,
      85,
      110
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
      "maxChars": 40,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "nodes",
      "type": "list",
      "maxChars": 80,
      "lines": 4,
      "role": "body"
    },
    {
      "key": "loopLabel",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "trunk",
      "prop": "draw",
      "settledBy": 106,
      "easing": "linear"
    },
    {
      "target": "nodes",
      "prop": "scale",
      "from": "0.6",
      "settledBy": 110,
      "easing": "spring"
    },
    {
      "target": "loop",
      "prop": "draw",
      "settledBy": 130,
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
      200
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party; motion recipe from research V05"
  },
  "job": "process",
  "language": "product-ui",
  "mechanic": [
    "progress"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "title": "How the agent works",
    "nodes": [
      {
        "text": "Gather context",
        "note": "Reads files, searches docs and asks tools for what it needs"
      },
      {
        "text": "Take action",
        "note": "Edits code and runs commands in a sandbox"
      },
      {
        "text": "Verify work",
        "note": "Runs the tests and compares output to the goal"
      }
    ],
    "loopLabel": "repeat until done",
    "accent": "#FF7A59",
    "color": "#EDEDF0",
    "background": "#1C1C1E",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "nodes",
      "label": "Nodes",
      "type": "list",
      "max": 4,
      "role": "body"
    },
    {
      "key": "loopLabel",
      "label": "Loop label",
      "type": "text",
      "max": 24,
      "role": "label"
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
    }
  ],
  "name": "Branch Tree Build",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "branch-tree",
    "bundleSha256": "c66442e1d3589aa50fd186377a2c1bcf6153709c15a2f7bacd4ed2ff84499a32",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:59:23.853Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/16x9-paper.png",
        "sha256": "f668c5832e451c1a6b09b3b270f0e49b336cbf23b15315ded859052a4635fb33"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/16x9-night.png",
        "sha256": "9a2d4c2514f156a4d8d1cc5fbfa1e83f79868e0ddea749b1d93f91cb7cdff062"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/16x9-color.png",
        "sha256": "004f7f3434f2822f4a3d3befa92c3fda7814fad41f1c4bfe7d4b9eccf83369cf"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/1x1-paper.png",
        "sha256": "a6e1244df0160b1f562995d12b6a478419fb2462307fb584af5fc2881dd69730"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/1x1-night.png",
        "sha256": "2fe885b8c2c18cb1a8d605676a279d5179dba6e89aa338444d93688a8d078172"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/1x1-color.png",
        "sha256": "21c5c05d2fcdb4c2b9c5dd96010348067e0835b264150107293f566c248b84ab"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/9x16-paper.png",
        "sha256": "e5c1ba57a8935122b52286fa2d5b2ee033d511b207235aea06f60f41f577ddf3"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/9x16-night.png",
        "sha256": "236ef0fccf34d42b7409982ba8d9026e570728d1735cd1fd73c0cf8cc7f1e5ca"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/9x16-color.png",
        "sha256": "5de5b71f3100dc719f1eb4702d3a04fa7558c9450051fcd11c2a1055ecb308f8"
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
          "branch-tree--16x9",
          "branch-tree--1x1",
          "branch-tree--9x16"
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
            "paperNight": 26.45464409722222,
            "paperColor": 12.268229166666666,
            "region": {
              "left": 211,
              "top": 102,
              "width": 1525,
              "height": 813
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 28.586263020833332,
            "paperColor": 15.419786241319445,
            "region": {
              "left": 74,
              "top": 102,
              "width": 939,
              "height": 823
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 34.57666015625,
            "paperColor": 32.72960069444444,
            "region": {
              "left": 79,
              "top": 98,
              "width": 925,
              "height": 1526
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
            "occupancy": 0.8202512615128358,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8436968537414968,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7595834678392964,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9298553955189759,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.93456735689246,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9265893428702072,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9628487695875677,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9615843588592846,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9552623052178693,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.293185763888889,
        "frames": [
          20,
          136,
          199
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 3.3646918402777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/16x9-duration-150-frame-18.png",
                "sha256": "7f79ff915fb35f97e79befe63dc8f102036a801e7c1e3e7d375d6c168006f621",
                "alphaMass": 587520
              },
              {
                "frame": 136,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/16x9-duration-150-frame-136.png",
                "sha256": "b57e09186167bc9e66edd3fc8eb5f6acd75523113137d79960e7a23446a7355a",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/16x9-duration-150-frame-132.png",
                "sha256": "71c083e99a5b0be4ede69a36e0883b9ee74344b4e828056a1afd0478622fa9f4",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/16x9-duration-150-frame-149.png",
                "sha256": "b57e09186167bc9e66edd3fc8eb5f6acd75523113137d79960e7a23446a7355a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 3.293185763888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/16x9-duration-900-frame-20.png",
                "sha256": "cc1486616e858c19ec0ab9fadfbfa2e26cdf3f9c0b6a83b18bec8070f3783352",
                "alphaMass": 587520
              },
              {
                "frame": 136,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/16x9-duration-900-frame-136.png",
                "sha256": "b57e09186167bc9e66edd3fc8eb5f6acd75523113137d79960e7a23446a7355a",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/16x9-duration-900-frame-792.png",
                "sha256": "b57e09186167bc9e66edd3fc8eb5f6acd75523113137d79960e7a23446a7355a",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/16x9-duration-900-frame-899.png",
                "sha256": "b57e09186167bc9e66edd3fc8eb5f6acd75523113137d79960e7a23446a7355a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 4.2724609375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/1x1-duration-150-frame-18.png",
                "sha256": "911c12e88fbf98454d6ee9b0218d04e0b8e01d4e796f73933836ba54685c095c",
                "alphaMass": 587520
              },
              {
                "frame": 136,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/1x1-duration-150-frame-136.png",
                "sha256": "aabcc2b6c2918769c6ea38815e501011b8b048aac7bc432245c2b315476afe80",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/1x1-duration-150-frame-132.png",
                "sha256": "24f7acff7f023686662f2210c355b49ba977f7d5a4c3c94b1c94af09158eeb4b",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/1x1-duration-150-frame-149.png",
                "sha256": "aabcc2b6c2918769c6ea38815e501011b8b048aac7bc432245c2b315476afe80",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 4.201714409722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/1x1-duration-900-frame-20.png",
                "sha256": "5320bb15ff396a34715fdc8d9d7196858e9497bea9d850b7127b631cd24cc34f",
                "alphaMass": 587520
              },
              {
                "frame": 136,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/1x1-duration-900-frame-136.png",
                "sha256": "aabcc2b6c2918769c6ea38815e501011b8b048aac7bc432245c2b315476afe80",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/1x1-duration-900-frame-792.png",
                "sha256": "aabcc2b6c2918769c6ea38815e501011b8b048aac7bc432245c2b315476afe80",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/1x1-duration-900-frame-899.png",
                "sha256": "aabcc2b6c2918769c6ea38815e501011b8b048aac7bc432245c2b315476afe80",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 9.149522569444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/9x16-duration-150-frame-18.png",
                "sha256": "6b8b2e89a453435a07896219fb6564479f7360b76924dc7c3155cd70b6649070",
                "alphaMass": 587520
              },
              {
                "frame": 136,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/9x16-duration-150-frame-136.png",
                "sha256": "21d2b2ec728f1a367b4be119d5306ca3f355ae146cd7b9124eb53dfe8eb5e4c8",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/9x16-duration-150-frame-132.png",
                "sha256": "bbc9534d97b8ceaa92219f3da9805488bc7db47f4d8aad8d89ac5749f7f27a82",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/9x16-duration-150-frame-149.png",
                "sha256": "21d2b2ec728f1a367b4be119d5306ca3f355ae146cd7b9124eb53dfe8eb5e4c8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 9.1416015625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/9x16-duration-900-frame-20.png",
                "sha256": "fcd6eba2e440e51970671dabcc4db8658c9030eb4531297b6de190da1ab2bc35",
                "alphaMass": 587520
              },
              {
                "frame": 136,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/9x16-duration-900-frame-136.png",
                "sha256": "21d2b2ec728f1a367b4be119d5306ca3f355ae146cd7b9124eb53dfe8eb5e4c8",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/9x16-duration-900-frame-792.png",
                "sha256": "21d2b2ec728f1a367b4be119d5306ca3f355ae146cd7b9124eb53dfe8eb5e4c8",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/branch-tree/9x16-duration-900-frame-899.png",
                "sha256": "21d2b2ec728f1a367b4be119d5306ca3f355ae146cd7b9124eb53dfe8eb5e4c8",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "process",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A branch diagram builds three agent steps with descriptions; how it works."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 12,
        "compared": 12,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "c66442e1d3589aa50fd186377a2c1bcf6153709c15a2f7bacd4ed2ff84499a32",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.984565Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/branch-tree/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/branch-tree/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/branch-tree/16x9/detail.mp4",
      "bg": "#201d1f",
      "posterFrame": 136,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 200,
      "sha256": {
        "poster": "173e5c866860e63d8b372460dc957f1501b85bc95cee7ff448a3c2318521af46",
        "loop": "03b9fc9e68b1c15dfe7134d3bc8e4c9b62df1c8b67f70af188701abe02864033",
        "detail": "be87c0914562ba35164f0ab5b7894156591ec2c4389fc10cf233742ffac1f849"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/branch-tree/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/branch-tree/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/branch-tree/1x1/detail.mp4",
      "bg": "#1d1c1e",
      "posterFrame": 136,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 200,
      "sha256": {
        "poster": "235c557cef7b86f26cbc1c6cf573b83b1f42cc7568e23b077cfcfe1da3098b6d",
        "loop": "02bc927c06a0082d459be32e0151b02438899b0b78609930857322409d46b95a",
        "detail": "b0f094fb241131b4b861268bb96b5e484b74d70580def904813cc7379a5da6e3"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/branch-tree/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/branch-tree/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/branch-tree/9x16/detail.mp4",
      "bg": "#1c1c1e",
      "posterFrame": 136,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 200,
      "sha256": {
        "poster": "8ce43dc78cbe1e052ac887805fe4981288bb643b96064586683b9577f5fc7f86",
        "loop": "5016be3c7195c49c0a0269130dff36024932f44c14435e5bf2930128aa784963",
        "detail": "e2f5e03eedc8990a1dacb0bfbc19a08b417a0e3cec390bad57c4e9c5efdbddc6"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c66442e1d3589aa50fd186377a2c1bcf6153709c15a2f7bacd4ed2ff84499a32/index.mjs",
    "sha256": "c66442e1d3589aa50fd186377a2c1bcf6153709c15a2f7bacd4ed2ff84499a32",
    "bytes": 163094,
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
    "1:1": {
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
    }
  },
  "intake": {
    "at": "2026-10-07T02:28:01.994Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
