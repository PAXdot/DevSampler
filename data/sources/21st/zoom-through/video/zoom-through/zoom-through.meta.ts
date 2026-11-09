// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "transition",
  "category": "transition/camera",
  "tags": [
    "transition",
    "zoom",
    "push in",
    "camera",
    "zoom through",
    "fast"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 10,
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
      7,
      8,
      9
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
      "frame": 33
    },
    "hover": [
      0,
      60
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (TransitionPresentation; motion study of V01, research 2026-10-05)"
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
    "scale": 2,
    "lift": -0.2,
    "tilt": 0,
    "blur": 0.6
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
      "key": "scale",
      "label": "Scale",
      "type": "number",
      "min": 1.2,
      "max": 5
    },
    {
      "key": "lift",
      "label": "Lift",
      "type": "number",
      "min": -0.4,
      "max": 0.4
    },
    {
      "key": "tilt",
      "label": "Tilt",
      "type": "number",
      "min": 0,
      "max": 40
    },
    {
      "key": "blur",
      "label": "Blur",
      "type": "number",
      "min": 0,
      "max": 1
    }
  ],
  "name": "Zoom Through",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "zoom-through",
    "bundleSha256": "ee34ddc49376545e34de158fa8caad2d0bcd87913482617138dd1f8998c1ebfd",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:57:12.870Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/16x9-paper.png",
        "sha256": "cd1cc7471b34666f6307435242506eac03a38448c45972f8bceddaebcefd0475"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/16x9-night.png",
        "sha256": "548958fb078f9b7ed294d8ff646a08078f26270d2135e50287f6815c6b688dbd"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/16x9-color.png",
        "sha256": "b931e3758b80a4051bca5e2da949877e43af64562b925558e7decb77ee00ca3a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/9x16-paper.png",
        "sha256": "0b77f5499f953ff8762816990508fd3dc031c8c4812035280b3a2b36cfcf803f"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/9x16-night.png",
        "sha256": "b9d68e53cdf3f76b0f460a49804918d42245868c6523a1eda9124b2e62a6db72"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/9x16-color.png",
        "sha256": "886a7270dbb4098163e03f8ac0dc04f69dc73b74977ed9dc27966fbb8a1162b9"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/1x1-paper.png",
        "sha256": "3da47b077ee3f848c9212df4aad1ce531e0bc6510cf439cd60b7fa71c89d4812"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/1x1-night.png",
        "sha256": "8d3c0382d1f89628e9448054131a57b55a2235d38a3be762e7eb95561c8f0450"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/1x1-color.png",
        "sha256": "7518da1c1574af258f7436be84f3cac04119e50721896da0c6f0d6d5ee80c776"
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
          "zoom-through--16x9",
          "zoom-through--9x16",
          "zoom-through--1x1"
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
            "paperNight": 48.208468967013886,
            "paperColor": 19.336534288194443,
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
            "paperNight": 54.588541666666664,
            "paperColor": 20.701171875,
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
            "paperNight": 49.23442925347222,
            "paperColor": 19.697265625,
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
        "averageChannelDifference": 33.08680555555556,
        "frames": [
          7,
          33,
          59
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 6,
            "averageChannelDifference": 33.23090277777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/16x9-duration-6-frame-1.png",
                "sha256": "b476cc0bbf393162c5fee3374d8526c327851cde56f9d9680d6589055c6bf8d7",
                "alphaMass": 309427
              },
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/16x9-duration-6-frame-5.png",
                "sha256": "632e813a7c8cae723e73f1f41af4b421cbc64039dd2c6c66f185c9dc2ffb993d",
                "alphaMass": 309427
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 30,
            "averageChannelDifference": 33.23090277777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/16x9-duration-30-frame-3.png",
                "sha256": "59068fb0d805541d5566170df23e38521bba6386b9d9e03ec2bf1c529aa56efc",
                "alphaMass": 309427
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/16x9-duration-30-frame-29.png",
                "sha256": "632e813a7c8cae723e73f1f41af4b421cbc64039dd2c6c66f185c9dc2ffb993d",
                "alphaMass": 309427
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/16x9-duration-30-frame-26.png",
                "sha256": "632e813a7c8cae723e73f1f41af4b421cbc64039dd2c6c66f185c9dc2ffb993d",
                "alphaMass": 309427
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 6,
            "averageChannelDifference": 36.88324652777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/9x16-duration-6-frame-1.png",
                "sha256": "9dacb46e89798bf33eb79041dbf04433be193dcec8503e1c2c3bc309fedacefb",
                "alphaMass": 313564
              },
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/9x16-duration-6-frame-5.png",
                "sha256": "54ef1fe1342ea4d04663f9288cbc88c70f8c99df98c2e3f8c14be10eff63419f",
                "alphaMass": 313564
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 30,
            "averageChannelDifference": 36.883463541666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/9x16-duration-30-frame-3.png",
                "sha256": "1292d95e937037a16dd6832be252a1f5e4360965e7b768e8b12009444aed0ab1",
                "alphaMass": 313564
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/9x16-duration-30-frame-29.png",
                "sha256": "54ef1fe1342ea4d04663f9288cbc88c70f8c99df98c2e3f8c14be10eff63419f",
                "alphaMass": 313564
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/9x16-duration-30-frame-26.png",
                "sha256": "54ef1fe1342ea4d04663f9288cbc88c70f8c99df98c2e3f8c14be10eff63419f",
                "alphaMass": 313564
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 6,
            "averageChannelDifference": 36.10015190972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/1x1-duration-6-frame-1.png",
                "sha256": "bdb77e4dd39e18b9a54961b0ac8ec755789a44299b9742ba9e15218032614866",
                "alphaMass": 310825
              },
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/1x1-duration-6-frame-5.png",
                "sha256": "2a8ccd534ffb8e436d03454f1b88b60b8571c877082c115de3befc0edeb2b02f",
                "alphaMass": 310825
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 30,
            "averageChannelDifference": 36.10004340277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/1x1-duration-30-frame-3.png",
                "sha256": "3fc9ca0895c85c39ac616714b23b66f9f731d66067d10b2ec46927d582a5a361",
                "alphaMass": 310825
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/1x1-duration-30-frame-29.png",
                "sha256": "2a8ccd534ffb8e436d03454f1b88b60b8571c877082c115de3befc0edeb2b02f",
                "alphaMass": 310825
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-2/zoom-through/1x1-duration-30-frame-26.png",
                "sha256": "2a8ccd534ffb8e436d03454f1b88b60b8571c877082c115de3befc0edeb2b02f",
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
        "note": "The camera zooms through the scene into the next one; transition."
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
      "bundleSha256": "ee34ddc49376545e34de158fa8caad2d0bcd87913482617138dd1f8998c1ebfd",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.981492Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/zoom-through/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/zoom-through/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/zoom-through/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 33,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "c240bead551ebbde47b3e06c7ada7ebde3da86e6ab1848dd1c5823af28cf1eb1",
        "loop": "9383cb244c61f280b4d830c4e5915af552d85f420dc6ad9709a04c2bd79ddb34",
        "detail": "35ab51c018daa3c6304adb92cce30952604318efca124d600e9bca59295fb167"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/zoom-through/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/zoom-through/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/zoom-through/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 33,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "fe965a3eb000e0a693c813146f16f5c4985ed9d25ff0b7cd473db63f3610788c",
        "loop": "229f60ba62fc791342fb8bdfe831b3775fa70108c25b0266be7468bb5855d70c",
        "detail": "8918751b3c629b054975c9674d4aa6e01e9f8bcf7d7fffca4c832f299b6c924b"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/zoom-through/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/zoom-through/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/zoom-through/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 33,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "cb15109a958735e6cd14bc811334d763999da33ba5e9c610d8b83825f2ee45a5",
        "loop": "dc1a4f9ec20ef5e51dffb1bb2e2c07146f94fdb2bb46acb6d8a097b4fd697475",
        "detail": "4a62d037a5a66234a278c3efca462af423ceaf4917e2db2611958b13dd660889"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ee34ddc49376545e34de158fa8caad2d0bcd87913482617138dd1f8998c1ebfd/index.mjs",
    "sha256": "ee34ddc49376545e34de158fa8caad2d0bcd87913482617138dd1f8998c1ebfd",
    "bytes": 160091,
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
    "at": "2026-10-07T02:27:23.272Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
