// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "transition",
  "category": "transition/dissolve",
  "tags": [
    "transition",
    "blur",
    "dissolve",
    "soft",
    "calm",
    "explainer",
    "default"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 12,
      "min": 6,
      "max": 30
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
      4,
      8,
      11
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
    "previewAccent": "colors.primary",
    "textColor": "colors.text",
    "fontFamily": "fonts.heading",
    "bodyFontFamily": "fonts.body",
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
    "sourceUrl": "21st first-party (TransitionPresentation; motion study of V10 and V15, research 2026-10-05)"
  },
  "job": "backgrounds",
  "language": "aura",
  "mechanic": [
    "flow"
  ],
  "energy": "calm",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "previewAccent": "#3D63FF",
    "textColor": "#F4F4F5",
    "beforeTitle": "Before",
    "afterTitle": "After",
    "nextLabel": "Next scene",
    "fontFamily": "Geist",
    "bodyFontFamily": "Geist",
    "background": "#0B0B10",
    "nextBackground": "#0B0B10",
    "blur": 12,
    "scale": 0.02,
    "overlap": 0.3
  },
  "fields": [
    {
      "key": "previewAccent",
      "label": "Preview accent",
      "type": "color",
      "brand": "colors.primary"
    },
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
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
      "key": "blur",
      "label": "Blur",
      "type": "number",
      "min": 2,
      "max": 40
    },
    {
      "key": "scale",
      "label": "Scale",
      "type": "number",
      "min": 0,
      "max": 0.1
    },
    {
      "key": "overlap",
      "label": "Overlap",
      "type": "number",
      "min": 0,
      "max": 1
    }
  ],
  "name": "Blur Dissolve",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "blur-dissolve",
    "bundleSha256": "d15cbc4547d5f9e801f5233933f60a615dc398d9eab75635518a0a97b7f82189",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:59:47.242Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/16x9-paper.png",
        "sha256": "56369e145df218c6fa679a5d340542a1135969031ac35ad9f70aee09c81ef656"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/16x9-night.png",
        "sha256": "17cd8b5958f8de123e6b6a5596b40a98723db15b26ba6f799f7e6ffa04cbcec1"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/16x9-color.png",
        "sha256": "0bd2402e739b852c53e3e91cc9bcaf7a50abb98726d05b6a384030096397605f"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/9x16-paper.png",
        "sha256": "b7b66da21059f2d0c06e6c5dc8a98a6aa7fadfb5b10aab329aef2f6b818a32d2"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/9x16-night.png",
        "sha256": "1429a5d146a7cda5f6c08580c7f2befb9c2c0866ca26e5d4c4b2f72572325304"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/9x16-color.png",
        "sha256": "d9cd42f9637a4f190ab5afcabdfab62ad01012ae1868bce738a5d369a6d5fbc9"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/1x1-paper.png",
        "sha256": "3bbce7573313948ae9e12c2df2e97ac4d30bb53516d5d6c8fef1c73cc61b15df"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/1x1-night.png",
        "sha256": "1758a2ae5a05d0ec987ce92fa6a18e319b8614916c95664feb9481d4a7b4b20b"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/1x1-color.png",
        "sha256": "9e9f18025b38288ad5cff1a03b3cb866864bd2266a19527c06c924a4034f520b"
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
          "blur-dissolve--16x9",
          "blur-dissolve--9x16",
          "blur-dissolve--1x1"
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
            "paperNight": 79.70027669270833,
            "paperColor": 34.575168185763886,
            "region": {
              "left": 77,
              "top": 108,
              "width": 1767,
              "height": 863
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 83.761474609375,
            "paperColor": 35.976643880208336,
            "region": {
              "left": 43,
              "top": 189,
              "width": 994,
              "height": 1538
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 81.01410590277777,
            "paperColor": 35.018798828125,
            "region": {
              "left": 43,
              "top": 108,
              "width": 994,
              "height": 863
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
            "occupancy": 1.0416406949868426,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0404336953402762,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0410228423931303,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.042824456814619,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.042145092347639,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0441831857485795,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.04229606222919,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0410883031767808,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0410883031767808,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.2378472222222223,
        "frames": [
          7,
          30,
          59
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 6,
            "averageChannelDifference": 21.050672743055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/16x9-duration-6-frame-1.png",
                "sha256": "b157b837bbe0b8056a6b4830bf257e8c86d46a946a98e19dcb8fa3ff71000544",
                "alphaMass": 309427
              },
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/16x9-duration-6-frame-5.png",
                "sha256": "4ab039d3f538a480d6dd79454925066b0c94603dd45c3b7c584f9f376fcfe694",
                "alphaMass": 309427
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 30,
            "averageChannelDifference": 21.050672743055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/16x9-duration-30-frame-3.png",
                "sha256": "d1a3d57999b1768a77b03de9ceaef4d274e924b286f7d83282034fafd17aa2bd",
                "alphaMass": 309427
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/16x9-duration-30-frame-29.png",
                "sha256": "4ab039d3f538a480d6dd79454925066b0c94603dd45c3b7c584f9f376fcfe694",
                "alphaMass": 309427
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/16x9-duration-30-frame-26.png",
                "sha256": "4ab039d3f538a480d6dd79454925066b0c94603dd45c3b7c584f9f376fcfe694",
                "alphaMass": 309427
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 6,
            "averageChannelDifference": 20.584092881944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/9x16-duration-6-frame-1.png",
                "sha256": "ee71829371078f7d78eb8d2294ff6cbe9f18377c6b8de52c96ca19aecafde962",
                "alphaMass": 313564
              },
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/9x16-duration-6-frame-5.png",
                "sha256": "dd823f04542625f17454eb351a610530db179252017c323eb740a339cb2aacce",
                "alphaMass": 313564
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 30,
            "averageChannelDifference": 20.584092881944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/9x16-duration-30-frame-3.png",
                "sha256": "8787dc77a79e93f182c7639fbc10cb92dc79bb944e252dcf1809f983e9cc47ef",
                "alphaMass": 313564
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/9x16-duration-30-frame-29.png",
                "sha256": "dd823f04542625f17454eb351a610530db179252017c323eb740a339cb2aacce",
                "alphaMass": 313564
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/9x16-duration-30-frame-26.png",
                "sha256": "dd823f04542625f17454eb351a610530db179252017c323eb740a339cb2aacce",
                "alphaMass": 313564
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 6,
            "averageChannelDifference": 20.822374131944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/1x1-duration-6-frame-1.png",
                "sha256": "7926eb6556f81eb1cafb751ac0421ded61cfba3d9aa3fac9533215b906340864",
                "alphaMass": 310825
              },
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/1x1-duration-6-frame-5.png",
                "sha256": "b2e3f178f4d6ee986672e2f3667ddd154fa65f6e851e5a212b2bcb1bf96b17a8",
                "alphaMass": 310825
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 30,
            "averageChannelDifference": 20.822374131944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/1x1-duration-30-frame-3.png",
                "sha256": "dad62724d8b8080e6dd4c8be4ef36a1ef00d536ab8c0868d869d9b3f60c8bb45",
                "alphaMass": 310825
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/1x1-duration-30-frame-29.png",
                "sha256": "b2e3f178f4d6ee986672e2f3667ddd154fa65f6e851e5a212b2bcb1bf96b17a8",
                "alphaMass": 310825
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/blur-dissolve/1x1-duration-30-frame-26.png",
                "sha256": "b2e3f178f4d6ee986672e2f3667ddd154fa65f6e851e5a212b2bcb1bf96b17a8",
                "alphaMass": 310825
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
        "note": "One scene blurs and dissolves into the next; transition."
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
      "bundleSha256": "d15cbc4547d5f9e801f5233933f60a615dc398d9eab75635518a0a97b7f82189",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.962786Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/blur-dissolve/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/blur-dissolve/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/blur-dissolve/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 30,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "1b2a7f70055f204731b967db2d68fbe3643c858915c622f2ba01b57105cc3898",
        "loop": "c64ea567deaf8ac282dd4ba32d42f1ec1392daad220e55b4d58223f7e481ef0c",
        "detail": "c41dba136f8ca7e4fce7d51086ad579c21edba1734fb1c57c8a3032b2208b90b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/blur-dissolve/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/blur-dissolve/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/blur-dissolve/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 30,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "9e1551bede833cc5b47c9fe730ecce338f56ba8a5a9311711521a4461e84b575",
        "loop": "ef56bfb65bf8dd2e2fede2983ee92e61a407e3a700e2bcda79d37cfc58bbc5b9",
        "detail": "5ed3b07c19cfac599ab2bf47ff0fe792e98258d30d1cca5e831c5d39da42a99a"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/blur-dissolve/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/blur-dissolve/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/blur-dissolve/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 30,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "80a62a2601691508638569271063198c0e816a2e89de56a0d6d8bd9f614590ec",
        "loop": "231c917e335fc90fa723647eca201cc2df87cd5c53c9216c8c67c56fd7e43eff",
        "detail": "3a6a52f62a531920cb37698d6ebf2d274f5800c3d071272a29c6b9f01b963ead"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d15cbc4547d5f9e801f5233933f60a615dc398d9eab75635518a0a97b7f82189/index.mjs",
    "sha256": "d15cbc4547d5f9e801f5233933f60a615dc398d9eab75635518a0a97b7f82189",
    "bytes": 159391,
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
    "at": "2026-10-07T02:25:55.328Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
