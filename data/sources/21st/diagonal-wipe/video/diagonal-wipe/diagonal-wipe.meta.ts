// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "transition",
  "category": "transition/wipe",
  "tags": [
    "transition",
    "wipe",
    "diagonal",
    "cut"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 18,
      "min": 8,
      "max": 45
    },
    "stretch": "scale",
    "phases": {
      "in": 0,
      "out": 0
    },
    "markers": {
      "settled": 0
    },
    "beats": [
      0,
      9,
      17
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
    "safeArea": "none",
    "transparent": true,
    "backdrop": [
      "background",
      "nextBackground"
    ]
  },
  "slots": [
    {
      "key": "beforeTitle",
      "type": "text",
      "maxChars": 32,
      "lines": 2,
      "role": "label"
    },
    {
      "key": "afterTitle",
      "type": "text",
      "maxChars": 32,
      "lines": 2,
      "role": "label"
    },
    {
      "key": "nextLabel",
      "type": "text",
      "maxChars": 32,
      "lines": 2,
      "role": "label"
    }
  ],
  "brand": {
    "textColor": "colors.text",
    "accent": "colors.primary",
    "background": "colors.background",
    "nextBackground": "colors.background"
  },
  "motionBeats": [],
  "render": {
    "deterministic": true,
    "clientRenderable": true,
    "webgl": false,
    "requiresGpu": false
  },
  "preview": {
    "poster": {
      "frame": 30
    },
    "hover": [
      0,
      60
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (TransitionPresentation)"
  },
  "job": "backgrounds",
  "language": "kinetic-poster",
  "mechanic": [
    "wipe"
  ],
  "energy": "punchy",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "textColor": "#F4F4F5",
    "beforeTitle": "Before",
    "afterTitle": "After",
    "nextLabel": "Next scene",
    "background": "#0B0B10",
    "nextBackground": "#0B0B10",
    "accent": "#3D63FF",
    "edge": 0.06,
    "direction": "down-right"
  },
  "fields": [
    {
      "key": "textColor",
      "label": "Text color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "beforeTitle",
      "label": "Before title",
      "type": "text",
      "max": 32,
      "role": "label"
    },
    {
      "key": "afterTitle",
      "label": "After title",
      "type": "text",
      "max": 32,
      "role": "label"
    },
    {
      "key": "nextLabel",
      "label": "Next label",
      "type": "text",
      "max": 32,
      "role": "label"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "nextBackground",
      "label": "Next background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "edge",
      "label": "Edge",
      "type": "number",
      "min": 0,
      "max": 0.2
    },
    {
      "key": "direction",
      "label": "Direction",
      "type": "select",
      "options": [
        "down-right",
        "down-left",
        "up-right",
        "up-left"
      ]
    }
  ],
  "name": "Diagonal Wipe",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "diagonal-wipe",
    "bundleSha256": "f4d4a6dc3ebb4948612ea0839723790a88aa8254e6e4a7698c1b099a630c95b4",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:55:50.842Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/16x9-paper.png",
        "sha256": "40d8a44123b838479da5d33213cab43ba9eb91dd35e3796e5efcc84338ad7ef8"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/16x9-night.png",
        "sha256": "a6830751c353f2c9754eae27ccdfe3f5617a21d871cef5a6d2878d4a07a2e2db"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/16x9-color.png",
        "sha256": "747e8f62db38babf6eb5fbb37e6a0eb8fc8957a54a0022d48e25ae1aa85fdc1e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/9x16-paper.png",
        "sha256": "21365ee4ec9cab00eef41374d20066f7166e8fe6ab099a5056068800fff8d309"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/9x16-night.png",
        "sha256": "2536e10fca264487519ab76ea2df18bb87756a36840ec3a14355b7b83011086d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/9x16-color.png",
        "sha256": "e8b5ea587a2eacb3b1746e03a98d186de8135d046613ad4bd32dc828892be82b"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/1x1-paper.png",
        "sha256": "18357db482baf5af09b118b15a773a66a100c741812f8ba386e7a31c5ed43b52"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/1x1-night.png",
        "sha256": "c4908de7575f5efacf3d61362c99eae0a4034cce8d94018f76abdc50032e635a"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/1x1-color.png",
        "sha256": "b73d32a45b9c22dc0ab879a7f3a7601300d0b28c0a536d814259484b5fcf453b"
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
          "diagonal-wipe--16x9",
          "diagonal-wipe--9x16",
          "diagonal-wipe--1x1"
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
            "paperNight": 11.065022786458334,
            "paperColor": 3.6624620225694446,
            "region": {
              "left": 77,
              "top": 43,
              "width": 1754,
              "height": 987
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 9.026936848958334,
            "paperColor": 2.893039279513889,
            "region": {
              "left": 43,
              "top": 77,
              "width": 987,
              "height": 1754
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 13.29421657986111,
            "paperColor": 4.059244791666667,
            "region": {
              "left": 43,
              "top": 43,
              "width": 985,
              "height": 985
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
            "occupancy": 1.183213688639036,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.183213688639036,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.183213688639036,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.183213688639036,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.183213688639036,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.183213688639036,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1788712541486648,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1788712541486648,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1788712541486648,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 13.73611111111111,
        "frames": [
          7,
          30,
          59
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 8,
            "averageChannelDifference": 6.283420138888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/16x9-duration-8-frame-1.png",
                "sha256": "68472c6f0ec34d3a4b119983e1882e8d6880bb987b5ada02bded474577df5079",
                "alphaMass": 496612
              },
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/16x9-duration-8-frame-7.png",
                "sha256": "5471746646f8de0d926fe2ed821407ae14a71f89672fc44e50b08ae2e8397aeb",
                "alphaMass": 496612
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 6.283420138888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/16x9-duration-45-frame-5.png",
                "sha256": "80e85eb6a5fee7f7530093fcbfd8a273f4d7c2e2783486d7e4b170a2e75dab19",
                "alphaMass": 496612
              },
              {
                "frame": 30,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/16x9-duration-45-frame-30.png",
                "sha256": "591b7dbc6898c858ac040593b6e64cc1d176b3aa1da5994133cca2dc9dde9553",
                "alphaMass": 496612
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/16x9-duration-45-frame-39.png",
                "sha256": "5471746646f8de0d926fe2ed821407ae14a71f89672fc44e50b08ae2e8397aeb",
                "alphaMass": 496612
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/16x9-duration-45-frame-44.png",
                "sha256": "5471746646f8de0d926fe2ed821407ae14a71f89672fc44e50b08ae2e8397aeb",
                "alphaMass": 496612
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 8,
            "averageChannelDifference": 5.611653645833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/9x16-duration-8-frame-1.png",
                "sha256": "34244201a7cfc9ddd35c7c8e05e43bcd266f9cd70988b98b7881de57896d5664",
                "alphaMass": 496944
              },
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/9x16-duration-8-frame-7.png",
                "sha256": "efde581a32a17365b17e49921bbec77194e455370ec9415b7f9813fc2ed2c749",
                "alphaMass": 496944
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 5.611762152777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/9x16-duration-45-frame-5.png",
                "sha256": "8e39ebe13b8dad1890d3690431337246b77ca128d5412aff9b17982b183b1b54",
                "alphaMass": 496944
              },
              {
                "frame": 30,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/9x16-duration-45-frame-30.png",
                "sha256": "e03537d9f5ef3ebf965221ee421764d707709c5f9b37cf3798f68e247e903948",
                "alphaMass": 496944
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/9x16-duration-45-frame-39.png",
                "sha256": "efde581a32a17365b17e49921bbec77194e455370ec9415b7f9813fc2ed2c749",
                "alphaMass": 496944
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/9x16-duration-45-frame-44.png",
                "sha256": "efde581a32a17365b17e49921bbec77194e455370ec9415b7f9813fc2ed2c749",
                "alphaMass": 496944
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 8,
            "averageChannelDifference": 9.858506944444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/1x1-duration-8-frame-1.png",
                "sha256": "9c19777d9ee2b6cd8fb1289b7d54e7962963945162d89ea3ff0dfc52573eea40",
                "alphaMass": 496800
              },
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/1x1-duration-8-frame-7.png",
                "sha256": "a766ffd4dcd42657c75e3ccd6edf81850c1ef32b632a36f4f21463f1de3adcc6",
                "alphaMass": 496800
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 9.8583984375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/1x1-duration-45-frame-5.png",
                "sha256": "abbc5eb5637df5c7f1bba3334d8ccba2b141a37847ac80ecb98dd3bffb0c55d5",
                "alphaMass": 496800
              },
              {
                "frame": 30,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/1x1-duration-45-frame-30.png",
                "sha256": "94b8b925700277e1c4d64e1c7bf342553319fe9b1e80fb1cd3bf00313eb63d94",
                "alphaMass": 496800
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/1x1-duration-45-frame-39.png",
                "sha256": "a766ffd4dcd42657c75e3ccd6edf81850c1ef32b632a36f4f21463f1de3adcc6",
                "alphaMass": 496800
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/diagonal-wipe/1x1-duration-45-frame-44.png",
                "sha256": "a766ffd4dcd42657c75e3ccd6edf81850c1ef32b632a36f4f21463f1de3adcc6",
                "alphaMass": 496800
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
        "note": "A diagonal band wipes from one scene to the next; transition."
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
      "bundleSha256": "f4d4a6dc3ebb4948612ea0839723790a88aa8254e6e4a7698c1b099a630c95b4",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.954593Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/diagonal-wipe/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/diagonal-wipe/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/diagonal-wipe/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 30,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "6961bce4acf1b172cbdf37837ec8388ce7e87b553c0a0a47ff5120eb2ffd414f",
        "loop": "cbcb7a3d184b1d965ec5d93dc3c3e1ac73574c95032049dbf2c30869d5a078d0",
        "detail": "e70d1a653b444788036f83eca6bfbd699e10eb2f0cc8e4b5856a1b61f3d3bd4f"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/diagonal-wipe/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/diagonal-wipe/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/diagonal-wipe/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 30,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "e556f8d4413194e6acdc01ad7285eb59f30619fcae509ee3d3826ae174f5f2dc",
        "loop": "077e7fd971637367d6be0bc7262c319095d58ef8db4d2e388894b221f96fb887",
        "detail": "e3eacb6288d39783e4997bb7e342f5c63be1bb25ecffbdcb6d0f3634950035f7"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/diagonal-wipe/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/diagonal-wipe/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/diagonal-wipe/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 30,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "4c4f70147950aae3ccb16a818ad4cf199adaa4f6b29165ea03eb0d0b6e430ad1",
        "loop": "bb30569f4641670cd49281fefaf7a5294d1eab5518b4760280f2bf75a335ddb2",
        "detail": "2f9e52b60d3b4ca453f16c6d83c9f9413133387ae60056f79dbd4099435d2a46"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/f4d4a6dc3ebb4948612ea0839723790a88aa8254e6e4a7698c1b099a630c95b4/index.mjs",
    "sha256": "f4d4a6dc3ebb4948612ea0839723790a88aa8254e6e4a7698c1b099a630c95b4",
    "bytes": 159316,
    "externals": [
      "@remotion/transitions",
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
      "flat": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true
    }
  },
  "intake": {
    "at": "2026-10-07T02:23:49.517Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
