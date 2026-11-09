// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "transition",
  "category": "transition/flash",
  "tags": [
    "transition",
    "flash",
    "cut",
    "beat",
    "hype",
    "white",
    "music"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 8,
      "min": 4,
      "max": 24
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
      2,
      7
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
    "color": "colors.text",
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
      "frame": 28
    },
    "hover": [
      0,
      60
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (TransitionPresentation; motion study of V02 and V03, research 2026-10-05)"
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
    "previewAccent": "#3D63FF",
    "textColor": "#F4F4F5",
    "beforeTitle": "Before",
    "afterTitle": "After",
    "nextLabel": "Next scene",
    "fontFamily": "Geist",
    "bodyFontFamily": "Geist",
    "background": "#0B0B10",
    "nextBackground": "#0B0B10",
    "color": "#FFFFFF",
    "strength": 1,
    "vignette": 0.45,
    "cutAt": 0.25
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
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "strength",
      "label": "Strength",
      "type": "number",
      "min": 0.2,
      "max": 1
    },
    {
      "key": "vignette",
      "label": "Vignette",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "cutAt",
      "label": "Cut at",
      "type": "number",
      "min": 0.1,
      "max": 0.5
    }
  ],
  "name": "Flash Cut",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "flash-cut",
    "bundleSha256": "dcf488d796a489c6d15ef113751d0ad833ace392953e10aa22113f94e671f456",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:04:47.404Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/16x9-paper.png",
        "sha256": "1fe8220b1d13fdcfdbcbb68a4c5898d634aae585247db36dd150d37e6cb2d8a0"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/16x9-night.png",
        "sha256": "13f16aa157a3130e7e84c49998931a093f5a62b6515bc6abe841d203afd774ee"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/16x9-color.png",
        "sha256": "5c662a86a60f93c67a808eb37f71b9aa752981f56c434928181739d14d054feb"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/9x16-paper.png",
        "sha256": "ea33db57d4a11acd6728d80b0ccbae5e4caf5607878ba6c078989a635ec99e36"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/9x16-night.png",
        "sha256": "0f13f46ee11fa632a3d1e8a41d596c7c6d9aa7d303f3d3b45c445b6710cb355a"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/9x16-color.png",
        "sha256": "b73d81fc55668d5c154cdf39babc6ef8b3571e074a6c5a79aa24f1a5d7867a9d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/1x1-paper.png",
        "sha256": "05917813f81169c87abb2a5d8d90e5f39c29e117864fea49aaa4f23d53c72391"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/1x1-night.png",
        "sha256": "6be1f8f746952b669bf21854ea142ba0e7d6ac0f22735042cb9b5864c3cddc91"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/1x1-color.png",
        "sha256": "f80e6aaccbc432c19d3dc150d72aa1687e42fc8e897ca740506bde9ef786c3ff"
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
          "flash-cut--16x9",
          "flash-cut--9x16",
          "flash-cut--1x1"
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
            "paperNight": 103.51985677083333,
            "paperColor": 35.65912543402778,
            "region": {
              "left": 77,
              "top": 43,
              "width": 1766,
              "height": 994
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 103.51529947916667,
            "paperColor": 35.65223524305556,
            "region": {
              "left": 43,
              "top": 77,
              "width": 994,
              "height": 1766
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 103.51581488715277,
            "paperColor": 35.66205512152778,
            "region": {
              "left": 43,
              "top": 43,
              "width": 994,
              "height": 994
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
            "occupancy": 1.1997576486870472,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1997576486870472,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1997576486870472,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1997576486870472,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1997576486870472,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1997576486870472,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2005124980948028,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2005124980948028,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2005124980948028,
            "bad": [],
            "measured": 3,
            "note": "Non-text block"
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 131.18825954861111,
        "frames": [
          7,
          28,
          59
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 4,
            "averageChannelDifference": 6.283420138888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/16x9-duration-4-frame-1.png",
                "sha256": "80e85eb6a5fee7f7530093fcbfd8a273f4d7c2e2783486d7e4b170a2e75dab19",
                "alphaMass": 496612
              },
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/16x9-duration-4-frame-3.png",
                "sha256": "5471746646f8de0d926fe2ed821407ae14a71f89672fc44e50b08ae2e8397aeb",
                "alphaMass": 496612
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 24,
            "averageChannelDifference": 6.283420138888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/16x9-duration-24-frame-2.png",
                "sha256": "80e85eb6a5fee7f7530093fcbfd8a273f4d7c2e2783486d7e4b170a2e75dab19",
                "alphaMass": 496612
              },
              {
                "frame": 23,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/16x9-duration-24-frame-23.png",
                "sha256": "5471746646f8de0d926fe2ed821407ae14a71f89672fc44e50b08ae2e8397aeb",
                "alphaMass": 496612
              },
              {
                "frame": 21,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/16x9-duration-24-frame-21.png",
                "sha256": "5471746646f8de0d926fe2ed821407ae14a71f89672fc44e50b08ae2e8397aeb",
                "alphaMass": 496612
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 4,
            "averageChannelDifference": 5.611653645833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/9x16-duration-4-frame-1.png",
                "sha256": "8e39ebe13b8dad1890d3690431337246b77ca128d5412aff9b17982b183b1b54",
                "alphaMass": 496944
              },
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/9x16-duration-4-frame-3.png",
                "sha256": "efde581a32a17365b17e49921bbec77194e455370ec9415b7f9813fc2ed2c749",
                "alphaMass": 496944
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 24,
            "averageChannelDifference": 5.611653645833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/9x16-duration-24-frame-2.png",
                "sha256": "8e39ebe13b8dad1890d3690431337246b77ca128d5412aff9b17982b183b1b54",
                "alphaMass": 496944
              },
              {
                "frame": 23,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/9x16-duration-24-frame-23.png",
                "sha256": "efde581a32a17365b17e49921bbec77194e455370ec9415b7f9813fc2ed2c749",
                "alphaMass": 496944
              },
              {
                "frame": 21,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/9x16-duration-24-frame-21.png",
                "sha256": "efde581a32a17365b17e49921bbec77194e455370ec9415b7f9813fc2ed2c749",
                "alphaMass": 496944
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 4,
            "averageChannelDifference": 9.858506944444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/1x1-duration-4-frame-1.png",
                "sha256": "abbc5eb5637df5c7f1bba3334d8ccba2b141a37847ac80ecb98dd3bffb0c55d5",
                "alphaMass": 496800
              },
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/1x1-duration-4-frame-3.png",
                "sha256": "a766ffd4dcd42657c75e3ccd6edf81850c1ef32b632a36f4f21463f1de3adcc6",
                "alphaMass": 496800
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 24,
            "averageChannelDifference": 9.858506944444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/1x1-duration-24-frame-2.png",
                "sha256": "abbc5eb5637df5c7f1bba3334d8ccba2b141a37847ac80ecb98dd3bffb0c55d5",
                "alphaMass": 496800
              },
              {
                "frame": 23,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/1x1-duration-24-frame-23.png",
                "sha256": "a766ffd4dcd42657c75e3ccd6edf81850c1ef32b632a36f4f21463f1de3adcc6",
                "alphaMass": 496800
              },
              {
                "frame": 21,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/flash-cut/1x1-duration-24-frame-21.png",
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
        "note": "A white flash cuts between two scenes; transition."
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
      "bundleSha256": "dcf488d796a489c6d15ef113751d0ad833ace392953e10aa22113f94e671f456",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.994727Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/flash-cut/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/flash-cut/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/flash-cut/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 28,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "8f611096ad04290c208b824601f0b314ca48b00cbc82e8e80c4340723e906c1b",
        "loop": "6bd13b1189c9c239db37697f96045b829ddaf35b6d8042e8446442c06043de49",
        "detail": "00448861a2c11a1e19700b3a9e53664149db0f7b013477c7c3caf220c984eb64"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/flash-cut/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/flash-cut/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/flash-cut/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 28,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "3cb04b1e57113b07da64efae0a424ae3a277908693e19dee6b54e7318a76dd08",
        "loop": "0177edbb5b46727c5a32e7665f599cdd3c3c7adcd0b16fef77b758f251645624",
        "detail": "4c817a235ab352fd35436b0d01995f37c01a3266af4f8c72b1da90fd6eb439ae"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/flash-cut/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/flash-cut/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/flash-cut/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 28,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "c6ef41e6add398d6bda621f85c84e3ea30c867a74fd363f5f0b831b59abfd0c6",
        "loop": "616b7b3263d90811f8987a4507e2b4b4b6b55eca7600c1ba90a38ce7ba622d9e",
        "detail": "ebb32b9918280f577614f6cdfb31ee57fcd5f4a734f09294651f64184324045e"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/dcf488d796a489c6d15ef113751d0ad833ace392953e10aa22113f94e671f456/index.mjs",
    "sha256": "dcf488d796a489c6d15ef113751d0ad833ace392953e10aa22113f94e671f456",
    "bytes": 160275,
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
    "at": "2026-10-07T02:29:27.352Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
