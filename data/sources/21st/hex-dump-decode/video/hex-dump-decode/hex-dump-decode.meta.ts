// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "code/craft",
  "job": "code",
  "language": "pixel-terminal",
  "mechanic": [
    "decode"
  ],
  "tags": [
    "code",
    "hex",
    "bytes",
    "decode",
    "terminal",
    "phosphor",
    "memory",
    "glitch"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 150,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 135,
      "out": 0
    },
    "markers": {
      "settled": 135,
      "decode": 65
    },
    "beats": [
      0,
      18,
      65,
      100,
      135
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
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "code",
      "type": "text",
      "maxChars": 160,
      "lines": 10,
      "role": "code"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 40,
      "lines": 2,
      "role": "subline"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.mono"
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
    "sourceUrl": "21st first-party (hexadecimal bytes decode through a phosphor scan into the user's code, 2026-10-09)"
  },
  "defaults": {
    "code": "const build = (idea) => {\n  return makeItReal(idea);\n};",
    "caption": "From bytes to ideas",
    "primary": "#FFB84D",
    "secondary": "#E4773A",
    "color": "#FFDB98",
    "background": "#15110A",
    "fontFamily": "IBM Plex Mono"
  },
  "fields": [
    {
      "key": "code",
      "label": "Code",
      "type": "text",
      "max": 160,
      "role": "code"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 40,
      "role": "subline"
    },
    {
      "key": "primary",
      "label": "Primary",
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
      "brand": "fonts.mono"
    }
  ],
  "name": "Hex Bytes Decode",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "hex-dump-decode",
    "bundleSha256": "97d739a3ceb6e3ccb710d4743c5c56cc0bcea44287c2cb9f07afb3115b778748",
    "sourceSnapshot": {
      "sha256": "22c3646f894c097d81b062c3f1a3835236d1899cdd1b233897adb47db79ad625",
      "files": 1995
    },
    "renderedAt": "2026-10-09T19:31:29.832Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/16x9-paper.png",
        "sha256": "166a4cc943a80018316528e5c98a0f17eabcc663a7ad326c34d4c4c4f7505091"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/16x9-night.png",
        "sha256": "53f92078a2eb5470bdcbaf3e4e7b069c50a9ed6a32ee227deefef99fe58bb50e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/16x9-color.png",
        "sha256": "5818cc137a445cf5c36a5d60b593560cc84bbd647def725b800525ac6e75cd7c"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/9x16-paper.png",
        "sha256": "5a536a2d9fff1c6e1d4202acd774ccb5ff847e02f1d51ad3b91577a3935b5cb6"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/9x16-night.png",
        "sha256": "729b41dfcedd572cf805f3e671801508a2d1e4d1b3aed2be73e14550880b7670"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/9x16-color.png",
        "sha256": "7a211c842d8b6835a0a02092acbc571fa8371361ecfcf22fd43557eb0f39fe4c"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/1x1-paper.png",
        "sha256": "4d4c4beef32e58957fb06d60756126b22be523fabb0e20b20d9ff35ce5ffc065"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/1x1-night.png",
        "sha256": "e27e8a1e2291bce894971be6489e4c8aac4f92e1e3de8d8abe7425e736d4c7f4"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/1x1-color.png",
        "sha256": "d2aa4c92a88afc4a4f9943f888201ca2238d9309bdaf94ab5883eae4d3b26c2b"
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
          "hex-dump-decode--16x9",
          "hex-dump-decode--9x16",
          "hex-dump-decode--1x1"
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
            "paperNight": 40.38812934027778,
            "paperColor": 44.850613064236114,
            "region": {
              "left": 143,
              "top": 129,
              "width": 1634,
              "height": 824
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 47.50396050347222,
            "paperColor": 48.216634114583336,
            "region": {
              "left": 81,
              "top": 230,
              "width": 918,
              "height": 1466
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 43.27373589409722,
            "paperColor": 45.685329861111114,
            "region": {
              "left": 81,
              "top": 130,
              "width": 918,
              "height": 823
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
            "occupancy": 0.9191117772983681,
            "bad": [],
            "measured": 46
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9202285595308084,
            "bad": [],
            "measured": 46
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9168782128334875,
            "bad": [],
            "measured": 46
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9197993433484507,
            "bad": [],
            "measured": 46
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9197993433484507,
            "bad": [],
            "measured": 46
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9166622378117916,
            "bad": [],
            "measured": 46
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9168713781809021,
            "bad": [],
            "measured": 46
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9179867934828254,
            "bad": [],
            "measured": 46
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9146405475770557,
            "bad": [],
            "measured": 46
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.8722873263888888,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 1.6968315972222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/16x9-duration-150-frame-18.png",
                "sha256": "5f2fed2ea856b2794e61623de0bd3d2388af17bcdc3a5f864a24b9023cd7eac7",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/16x9-duration-150-frame-135.png",
                "sha256": "59554096bdae5b65391074c2a1609025ca94d0294ffe4b9ce44a3f4670550b0b",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/16x9-duration-150-frame-132.png",
                "sha256": "41f84ea2c1f4f59a66535566392918c413365928a07d43c5a52c14a3b6c38ca8",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/16x9-duration-150-frame-149.png",
                "sha256": "59554096bdae5b65391074c2a1609025ca94d0294ffe4b9ce44a3f4670550b0b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 1.8722873263888888,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/16x9-duration-600-frame-20.png",
                "sha256": "6f85fa9ddd60e075ac4b34b2e2da85621f406a9f121c0f74cad2e67454e76add",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/16x9-duration-600-frame-135.png",
                "sha256": "59554096bdae5b65391074c2a1609025ca94d0294ffe4b9ce44a3f4670550b0b",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/16x9-duration-600-frame-528.png",
                "sha256": "59554096bdae5b65391074c2a1609025ca94d0294ffe4b9ce44a3f4670550b0b",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/16x9-duration-600-frame-599.png",
                "sha256": "59554096bdae5b65391074c2a1609025ca94d0294ffe4b9ce44a3f4670550b0b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 4.019422743055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/9x16-duration-150-frame-18.png",
                "sha256": "e072299ed105a9136ed212b2cda5731c961ff1add3e35560ca370ee3c3ae3096",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/9x16-duration-150-frame-135.png",
                "sha256": "35a69eb4f42a0312933043610e9ae84ef0a7c7a71292b54bf3364478c87b2118",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/9x16-duration-150-frame-132.png",
                "sha256": "98aebbb1f48ce5142e9d536798388ab9b912e687077745da9dffac0b607255f8",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/9x16-duration-150-frame-149.png",
                "sha256": "35a69eb4f42a0312933043610e9ae84ef0a7c7a71292b54bf3364478c87b2118",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 4.222005208333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/9x16-duration-600-frame-20.png",
                "sha256": "a317b1e8a7e2af6544bd301077a9f0acccc5988b057124bcce8963c9b6fa14e4",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/9x16-duration-600-frame-135.png",
                "sha256": "35a69eb4f42a0312933043610e9ae84ef0a7c7a71292b54bf3364478c87b2118",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/9x16-duration-600-frame-528.png",
                "sha256": "35a69eb4f42a0312933043610e9ae84ef0a7c7a71292b54bf3364478c87b2118",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/9x16-duration-600-frame-599.png",
                "sha256": "35a69eb4f42a0312933043610e9ae84ef0a7c7a71292b54bf3364478c87b2118",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 2.9471571180555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/1x1-duration-150-frame-18.png",
                "sha256": "147fa7f2a5c2b3c9c25a57f09afbe0cf262ca3853902eca485682df05a59a75f",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/1x1-duration-150-frame-135.png",
                "sha256": "482328576cc0ecd5fa892ccf86d740841c7dc234e5f5f5ac4aceafe8dd541163",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/1x1-duration-150-frame-132.png",
                "sha256": "656509770a6796a2d42faf27e00d57db2be26dd6435d984bbea9034e7992fa05",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/1x1-duration-150-frame-149.png",
                "sha256": "482328576cc0ecd5fa892ccf86d740841c7dc234e5f5f5ac4aceafe8dd541163",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 3.0983072916666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/1x1-duration-600-frame-20.png",
                "sha256": "3b027e9ae144196180d8df871b66e5ec643160c5e66d9b1b4cdb65e2e2364c90",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/1x1-duration-600-frame-135.png",
                "sha256": "482328576cc0ecd5fa892ccf86d740841c7dc234e5f5f5ac4aceafe8dd541163",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/1x1-duration-600-frame-528.png",
                "sha256": "482328576cc0ecd5fa892ccf86d740841c7dc234e5f5f5ac4aceafe8dd541163",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/hex-dump-decode/1x1-duration-600-frame-599.png",
                "sha256": "482328576cc0ecd5fa892ccf86d740841c7dc234e5f5f5ac4aceafe8dd541163",
                "alphaMass": 587520
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
        "note": "TitleMatches: The chronological sequence (images 1–4) directly visualizes a transformation process: hex bytes (seen as a grid in image 2 and 3) are mapped/transformed into source code, aligning with 'Hex Bytes Decode'—the title is supported by the visible subject and structure, not just by copy.\n\nNoBakedHeading: There is no decorative, unexplained heading or block title present in the composition across all images; only the code, caption, and interface visuals are present. The caption ('From bytes to ideas') is consistent with the named slot and is legitimately placed.\n\nBrandAdherence: The last three images (5–7) present the same interface/poster under three distinct palettes (light, dark, color), each using the specified accent, text, and background colors. Key interface shapes (code, border, cursor/caption) are preserved and appropriately recolored with no unexplained/fixed block colors. Text remains fully legible and color mapping matches the palettes supplied.\n\nLanguageAdherence: Visual material matches the language card: mono-spaced text, discrete cell/grid layout, orthogonal panel borders, and raster-movement in the motion samples with visible cell boundaries. The maximal scaling, flat/unlit style, and lack of glossy/lens or serif elements are as described. All palette adaptations preserve material and type roles according to the card."
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
      "bundleSha256": "97d739a3ceb6e3ccb710d4743c5c56cc0bcea44287c2cb9f07afb3115b778748",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T19:39:06.852Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "hex-dump-decode",
      "vsPositive": 0.7083333333333334,
      "vsNegative": 0.875,
      "fakeVotes": 0.22916666666666666,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.25,
          "vsNegative": 0.625
        },
        "gemini": {
          "vsPositive": 0.875,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "62efcf8dc70d51859b6bbb5e79a54a9bd052f5f2851051f5dc031d8e3573323d",
      "bundleSha256": "97d739a3ceb6e3ccb710d4743c5c56cc0bcea44287c2cb9f07afb3115b778748",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/hex-dump-decode/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/hex-dump-decode/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/hex-dump-decode/16x9/detail.mp4",
      "bg": "#15110a",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c4358e8b3397f3fe659db000144cdb3de5e0f6d25f4ee715e4527e1cdf987062",
        "loop": "2fe893cb1e2f0a6b56029ef655c9550fb8680a87477416d864e158309d4eb110",
        "detail": "6185ce6f71c1054b4a3a86f6e1fab24cd1f9aa93d54a3e46b3ef9c8837e76f9d"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/hex-dump-decode/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/hex-dump-decode/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/hex-dump-decode/9x16/detail.mp4",
      "bg": "#15110a",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "110e6935bae815290a74b4efc49e19e1c349f73b43a362af2711844772d1fa03",
        "loop": "747be0732a56d0b5807bb7e3f92aad07da8a87b18311c515d9149d4dd8fd9dfa",
        "detail": "9370de6ec0be8052268d499e395c78867b1c605a8110a724478b9f27c5f3ca69"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/hex-dump-decode/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/hex-dump-decode/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/hex-dump-decode/1x1/detail.mp4",
      "bg": "#15110a",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d841ed13299bbb34e6faaf5dc299c4fdb3a07b1b3b5186ddfddc157e9b0ec571",
        "loop": "e2a65f0b7f28dc8e5b9f7a2786ba1f6e74e3da62f2227633784ec09189b24bc4",
        "detail": "8ff9d210d1b751f0528ea5688d12579ae27ace424e4b762246bd434a090ab5db"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/97d739a3ceb6e3ccb710d4743c5c56cc0bcea44287c2cb9f07afb3115b778748/index.mjs",
    "sha256": "97d739a3ceb6e3ccb710d4743c5c56cc0bcea44287c2cb9f07afb3115b778748",
    "bytes": 161394,
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
    "at": "2026-10-09T19:56:28.479Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
