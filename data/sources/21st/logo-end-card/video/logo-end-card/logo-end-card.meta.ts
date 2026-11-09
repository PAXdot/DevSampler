// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "brand/end-card",
  "tags": [
    "logo",
    "end card",
    "outro",
    "brand",
    "cta"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 144,
      "min": 60,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 40,
      "out": 0
    },
    "markers": {
      "settled": 44
    },
    "beats": [
      6,
      16,
      28
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
    "safeArea": "title",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "logo",
      "type": "image"
    },
    {
      "key": "name",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "name"
    },
    {
      "key": "tagline",
      "type": "text",
      "maxChars": 64,
      "lines": 2,
      "role": "subline"
    },
    {
      "key": "url",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "label"
    }
  ],
  "brand": {
    "serifFontFamily": "fonts.serif",
    "accent": "colors.primary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "logo": "logos.light"
  },
  "motionBeats": [
    {
      "target": "logo",
      "prop": "y",
      "from": "below",
      "settledBy": 30,
      "easing": "spring"
    },
    {
      "target": "tagline",
      "prop": "y",
      "from": "below",
      "settledBy": 40,
      "easing": "spring"
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
      144
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st-ads/remotion/showcase.tsx (EndCard), factor-marketplace/remotion/components/kinetic.tsx (EndAct)"
  },
  "job": "cta",
  "language": "kinetic-poster",
  "mechanic": [
    "reveal"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "serifFontFamily": "Instrument Serif",
    "logo": "",
    "name": "Acme",
    "tagline": "Deploy at the edge",
    "url": "acme.dev",
    "accent": "#3D63FF",
    "color": "#F4F4F5",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "serifFontFamily",
      "label": "Serif font family",
      "type": "font",
      "brand": "fonts.serif"
    },
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "brand": "logos.light"
    },
    {
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 24,
      "role": "name"
    },
    {
      "key": "tagline",
      "label": "Tagline",
      "type": "text",
      "max": 64,
      "role": "subline"
    },
    {
      "key": "url",
      "label": "Url",
      "type": "text",
      "max": 40,
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
  "name": "Logo End Card",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "logo-end-card",
    "bundleSha256": "37c32c6a82202d05917a270817084192515243f78edf51819d26813a2ea0ac77",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:01:25.701Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/16x9-paper.png",
        "sha256": "be646306842ae0e14ab7f5e3933d9b7d117a12b12ef30120cdfd943c1598d942"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/16x9-night.png",
        "sha256": "9da3706e24296366cda7365d1b0ccc32577d44792afd6d900c190b1af0dbadf1"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/16x9-color.png",
        "sha256": "bd1228cbae1732644447e099bece4afeebafaa3de81980001aa470422dba3e62"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/9x16-paper.png",
        "sha256": "2b35743cf3ffe8aa9e03291989077e474e084fe9404b8c2aff98e3f6b9fbc386"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/9x16-night.png",
        "sha256": "b2ae4fb6894837c4fcad7c0897f3fef0a0981f30881f9b10353648abc3e39402"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/9x16-color.png",
        "sha256": "716bc4c678ccfdde340e593bb9e1fe4d7c0359fa5680a5a9ae71c2241f890d94"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/1x1-paper.png",
        "sha256": "6cfe8f866c3ea56b691854c07993e2c77f8137422ffc732fcde330ab443625e9"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/1x1-night.png",
        "sha256": "ad89a544c5bb3ed3e6b5fb100ec46788f820cd5b9beb87463fb1f44f42f82f6f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/1x1-color.png",
        "sha256": "9d66ffa584a4aba4e4f1a916a4903c09b1d48257ef039e6f3b98acb6fd3177b4"
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
          "logo-end-card--16x9",
          "logo-end-card--9x16",
          "logo-end-card--1x1"
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
            "paperNight": 14.49264865451389,
            "paperColor": 18.315782335069443,
            "region": {
              "left": 446,
              "top": 245,
              "width": 1028,
              "height": 731
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 13.173529730902779,
            "paperColor": 14.911431206597221,
            "region": {
              "left": 0,
              "top": 593,
              "width": 1080,
              "height": 1081
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 20.52566189236111,
            "paperColor": 21.521131727430557,
            "region": {
              "left": 251,
              "top": 245,
              "width": 578,
              "height": 731
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
            "occupancy": 0.5136022708980713,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5136022708980713,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5121970663265307,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7979320200302344,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7979320200302344,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7957175925925928,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5133802206296328,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5133802206296328,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5119756235827665,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.2815755208333335,
        "frames": [
          6,
          44,
          143
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 3.2815755208333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/16x9-duration-60-frame-6.png",
                "sha256": "c6107c75a38889421100e901bab1d8c17a244ad3398b04575da21499909e5291",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/16x9-duration-60-frame-44.png",
                "sha256": "1b2332c13674397ba8c0d54135a7af03622dd71608d6df82bde8dfe5096ca76b",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/16x9-duration-60-frame-52.png",
                "sha256": "b65e1289ecd4a2e05767dc17db9b08203df232b856e58b6bc44de927281f5920",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/16x9-duration-60-frame-59.png",
                "sha256": "b65e1289ecd4a2e05767dc17db9b08203df232b856e58b6bc44de927281f5920",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 3.2815755208333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/16x9-duration-600-frame-6.png",
                "sha256": "c6107c75a38889421100e901bab1d8c17a244ad3398b04575da21499909e5291",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/16x9-duration-600-frame-44.png",
                "sha256": "1b2332c13674397ba8c0d54135a7af03622dd71608d6df82bde8dfe5096ca76b",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/16x9-duration-600-frame-528.png",
                "sha256": "b65e1289ecd4a2e05767dc17db9b08203df232b856e58b6bc44de927281f5920",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/16x9-duration-600-frame-599.png",
                "sha256": "b65e1289ecd4a2e05767dc17db9b08203df232b856e58b6bc44de927281f5920",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 4.161783854166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/9x16-duration-60-frame-6.png",
                "sha256": "660d6ff5f1627aff11a200b15f63b8b3a2a1af2509ace268da885635b34bf645",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/9x16-duration-60-frame-44.png",
                "sha256": "cd4c44ee18827f569978c095a07ea63277c86a2bf8004c10a6fa0c13368d0363",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/9x16-duration-60-frame-52.png",
                "sha256": "a6d3d295b7cb7d5bd4287fd93ec588996a513aa8226960214fe46e361782ca9e",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/9x16-duration-60-frame-59.png",
                "sha256": "a6d3d295b7cb7d5bd4287fd93ec588996a513aa8226960214fe46e361782ca9e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 4.161783854166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/9x16-duration-600-frame-6.png",
                "sha256": "660d6ff5f1627aff11a200b15f63b8b3a2a1af2509ace268da885635b34bf645",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/9x16-duration-600-frame-44.png",
                "sha256": "cd4c44ee18827f569978c095a07ea63277c86a2bf8004c10a6fa0c13368d0363",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/9x16-duration-600-frame-528.png",
                "sha256": "a6d3d295b7cb7d5bd4287fd93ec588996a513aa8226960214fe46e361782ca9e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/9x16-duration-600-frame-599.png",
                "sha256": "a6d3d295b7cb7d5bd4287fd93ec588996a513aa8226960214fe46e361782ca9e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 4.540907118055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/1x1-duration-60-frame-6.png",
                "sha256": "c4f35a841d0dea89b028606d98cc96694359ca577337667ce39659ec855e5ae5",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/1x1-duration-60-frame-44.png",
                "sha256": "b7e7d56f76cb68fa5d9727760ecb247ca60b97f209a8487bacebb3b694e15664",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/1x1-duration-60-frame-52.png",
                "sha256": "9763d3ef901a8c6b81a67b72f6cf52ebbb9e38705d860f6e01c7ecb8dd39f337",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/1x1-duration-60-frame-59.png",
                "sha256": "9763d3ef901a8c6b81a67b72f6cf52ebbb9e38705d860f6e01c7ecb8dd39f337",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 4.540907118055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/1x1-duration-600-frame-6.png",
                "sha256": "c4f35a841d0dea89b028606d98cc96694359ca577337667ce39659ec855e5ae5",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/1x1-duration-600-frame-44.png",
                "sha256": "b7e7d56f76cb68fa5d9727760ecb247ca60b97f209a8487bacebb3b694e15664",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/1x1-duration-600-frame-528.png",
                "sha256": "9763d3ef901a8c6b81a67b72f6cf52ebbb9e38705d860f6e01c7ecb8dd39f337",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/logo-end-card/1x1-duration-600-frame-599.png",
                "sha256": "9763d3ef901a8c6b81a67b72f6cf52ebbb9e38705d860f6e01c7ecb8dd39f337",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "cta",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Name and tagline settle under a glow with a URL; ending card."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 3,
        "compared": 3,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "37c32c6a82202d05917a270817084192515243f78edf51819d26813a2ea0ac77",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.939996Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/logo-end-card/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/logo-end-card/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/logo-end-card/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 44,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 144,
      "sha256": {
        "poster": "db81855b771cf1c8131ee99497f6967b7e549f8f799ddf87116ce0e0361ab718",
        "loop": "d6ab4a9df6e0a7d7390b75eb7c6535adc26d045b4b65c581a9fbf90f11863e8b",
        "detail": "45303c132a89b84d6230db56f26ee2eb3401cabe797e078b933ac579b985300a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/logo-end-card/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/logo-end-card/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/logo-end-card/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 44,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 144,
      "sha256": {
        "poster": "bdf454095dd78ab7273f34cc60d00d4275490726c267d18683280f79cd20e607",
        "loop": "ba17fd094ed96ea20bf178a2552390a41e7a422ddecc17590d65ac5736c93006",
        "detail": "f0bf6b19a25bbd8c1269f4af89cba8ebebb192447d3af57b9d39ef311112f95f"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/logo-end-card/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/logo-end-card/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/logo-end-card/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 44,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 144,
      "sha256": {
        "poster": "1c97ad27da94135dd0be09766534b394875d5f43bdcbb8863f03af9b939d2009",
        "loop": "40cb3547b14925c0a700b40877f23b12b0591bf2dcebf92221a4f4ac04df9a21",
        "detail": "c08beafc6eb6515d50014c9f7457d6058f9dfd0f8ad27f0cbaebf75e18388384"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/37c32c6a82202d05917a270817084192515243f78edf51819d26813a2ea0ac77/index.mjs",
    "sha256": "37c32c6a82202d05917a270817084192515243f78edf51819d26813a2ea0ac77",
    "bytes": 159551,
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
    "at": "2026-10-07T02:21:59.311Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
