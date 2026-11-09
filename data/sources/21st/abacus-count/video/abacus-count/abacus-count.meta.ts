// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/craft",
  "job": "data",
  "language": "isometric",
  "mechanic": [
    "abacus"
  ],
  "tags": [
    "abacus",
    "beads",
    "number",
    "count",
    "wood"
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
      "settled": 135
    },
    "beats": [
      0,
      30,
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
      "key": "value",
      "type": "text",
      "role": "metric"
    },
    {
      "key": "label",
      "type": "text",
      "role": "caption"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
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
    "sourceUrl": "21st first-party (Abacus Number Settle, 2026-10-09)"
  },
  "defaults": {
    "primary": "#8B5335",
    "secondary": "#B93E2E",
    "color": "#292C25",
    "background": "#F4EFE2",
    "fontFamily": "IBM Plex Mono",
    "seed": 31,
    "value": 12480,
    "label": "Make every move count"
  },
  "fields": [
    {
      "key": "value",
      "label": "Value",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 99999,
      "role": "metric"
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 30,
      "role": "caption"
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
      "brand": "fonts.heading"
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1
    }
  ],
  "name": "Abacus Number Settle",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "abacus-count",
    "bundleSha256": "7af555ff2ff085f452ee9a4fe8ede69425470f9296f18d70e5c45eabf8b73580",
    "sourceSnapshot": {
      "sha256": "4d15cc6a8610042e258ba365d1aef0b9449d075bb3cded6312271d209ce210ec",
      "files": 2106
    },
    "renderedAt": "2026-10-09T21:44:55.613Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/16x9-paper.png",
        "sha256": "57d0ed95e26c1294d29ae397582360a69904b60ad43824ee20a5e38447434a79"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/16x9-night.png",
        "sha256": "2a41f01792a51975c6d380bddafdad9cd65e47ab52a296797f9d492fe3790a83"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/16x9-color.png",
        "sha256": "7552ccb1e86c9a5979b6883748258899ac82ffe619467fe7436f7df6d2795069"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/9x16-paper.png",
        "sha256": "886fd1b3600b032b8c3634c6cc6ac51c533f77d00339677b0850dc3d90b2652a"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/9x16-night.png",
        "sha256": "d65726d7f76f2faa28249c0c83d23634f8c4ee998ade0d0a8be1f1c8e62dd6ca"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/9x16-color.png",
        "sha256": "699bf6368254f42735161891b7b2cf46443999b8843c12ec68056f9f37086f6a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/1x1-paper.png",
        "sha256": "3921f15d6644b0cab794929770fa48b113956d1c7cca2c04385165136f8e48f6"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/1x1-night.png",
        "sha256": "55a820365d921d838a72f57e45a1227587424d28126a473456437e9236b9449e"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/1x1-color.png",
        "sha256": "0a12151a1ae5ed20b0939fe4ed830e7f618e4d23deafe3f515f169e4fa4c88f2"
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
          "abacus-count--16x9",
          "abacus-count--9x16",
          "abacus-count--1x1"
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
            "paperNight": 54.052734375,
            "paperColor": 35.312337239583336,
            "region": {
              "left": 146,
              "top": 81,
              "width": 1640,
              "height": 954
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 58.901611328125,
            "paperColor": 37.162434895833336,
            "region": {
              "left": 82,
              "top": 176,
              "width": 923,
              "height": 1690
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 60.32310655381944,
            "paperColor": 38.60167100694444,
            "region": {
              "left": 82,
              "top": 92,
              "width": 923,
              "height": 943
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
            "occupancy": 1.0693224048878813,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0693224048878813,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0581135746479664,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0143882012681618,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0661169528253691,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0011405941620477,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0575655873917928,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0575655873917928,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0463506819051354,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.374674479166666,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 8.371636284722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/16x9-duration-150-frame-18.png",
                "sha256": "e3dec1983a2c6ceebcc6c8a0ef67aea7cd19a220c5bd4195c04818e9e74c930c",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/16x9-duration-150-frame-135.png",
                "sha256": "6190e31f6ead4bf98aabbada821a45d05b3859b13809d6f833a461c47359c61a",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/16x9-duration-150-frame-132.png",
                "sha256": "c89410626a798a83681a83be7ac864b5985833a25ac41aaa6f8159cc68ce1037",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/16x9-duration-150-frame-149.png",
                "sha256": "6190e31f6ead4bf98aabbada821a45d05b3859b13809d6f833a461c47359c61a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 8.374674479166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/16x9-duration-600-frame-20.png",
                "sha256": "124ff1085374f4755e5a07c22760c555a13b9b59691bcff473bb9161f1a75908",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/16x9-duration-600-frame-135.png",
                "sha256": "6190e31f6ead4bf98aabbada821a45d05b3859b13809d6f833a461c47359c61a",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/16x9-duration-600-frame-528.png",
                "sha256": "6190e31f6ead4bf98aabbada821a45d05b3859b13809d6f833a461c47359c61a",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/16x9-duration-600-frame-599.png",
                "sha256": "6190e31f6ead4bf98aabbada821a45d05b3859b13809d6f833a461c47359c61a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 8.801215277777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/9x16-duration-150-frame-18.png",
                "sha256": "33a9de4112abc31084bfc2d408f706f084cb1bdb1656f161a58773bb5a698470",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/9x16-duration-150-frame-135.png",
                "sha256": "56f19284e96b4e2c24d07286b5cb5fb5aa99b4f5c049128640f19cbbd2e33b36",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/9x16-duration-150-frame-132.png",
                "sha256": "89caed34fae0a3d25ed1dd19c6ecd432449f2bbd37d274a0b43cadd75e94fd18",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/9x16-duration-150-frame-149.png",
                "sha256": "56f19284e96b4e2c24d07286b5cb5fb5aa99b4f5c049128640f19cbbd2e33b36",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 8.790581597222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/9x16-duration-600-frame-20.png",
                "sha256": "2bd8977dfb4c876134267c1c38ff236068648ac0e04f695ced7e1f5e59d6ae05",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/9x16-duration-600-frame-135.png",
                "sha256": "56f19284e96b4e2c24d07286b5cb5fb5aa99b4f5c049128640f19cbbd2e33b36",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/9x16-duration-600-frame-528.png",
                "sha256": "56f19284e96b4e2c24d07286b5cb5fb5aa99b4f5c049128640f19cbbd2e33b36",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/9x16-duration-600-frame-599.png",
                "sha256": "56f19284e96b4e2c24d07286b5cb5fb5aa99b4f5c049128640f19cbbd2e33b36",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 9.83962673611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/1x1-duration-150-frame-18.png",
                "sha256": "9e1a8bbdecee60a32891d39a1704a0c11850d0beb0f7d44aa1092fae3883f827",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/1x1-duration-150-frame-135.png",
                "sha256": "88e51745a27df743ee2604cae5f9a86b1fef195b15389645ed2efec8e2b1258c",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/1x1-duration-150-frame-132.png",
                "sha256": "adc4d240e12874e61ade5c71340d386a8af88d73c2b268f9ed2fdc964f24a5c8",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/1x1-duration-150-frame-149.png",
                "sha256": "88e51745a27df743ee2604cae5f9a86b1fef195b15389645ed2efec8e2b1258c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 9.842664930555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/1x1-duration-600-frame-20.png",
                "sha256": "74ff2368cd4c5162a1417b4954f35a5c379cce68b2a20de219d4d2cf7929de57",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/1x1-duration-600-frame-135.png",
                "sha256": "88e51745a27df743ee2604cae5f9a86b1fef195b15389645ed2efec8e2b1258c",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/1x1-duration-600-frame-528.png",
                "sha256": "88e51745a27df743ee2604cae5f9a86b1fef195b15389645ed2efec8e2b1258c",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/abacus-count/1x1-duration-600-frame-599.png",
                "sha256": "88e51745a27df743ee2604cae5f9a86b1fef195b15389645ed2efec8e2b1258c",
                "alphaMass": 587520
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
        "note": "TitleMatches: The subject is a physical abacus, with animated samples showing beads moving and settling to a specific number configuration—directly supporting the title 'Abacus Number Settle.' The numbers depicted below match the abacus (12480), and the structure logically supports the concept of 'settling' into a count.\nNoBakedHeading: There is no decorative title or language/category baked into the composition. The prominent text ('12,480', 'Make every move count') matches the named-slot, editable content only.\nBrandAdherence: The last three images present the same poster under three different palettes. Each version visibly uses the expected primary, secondary, and background colors with clear, legible structure. There are no unexplained fixed colors, and all elements transition appropriately to preserve material and clarity across palette changes.\nLanguageAdherence: All branding roles and material cues match the language card: the abacus is made of solid blocks and extruded shapes sitting on a flat ground, with consistent directional shading derived from the active palette. The type is always sans, numerals are tabular, and layout/lighting are unchanged. Across all rebrands and animation samples, there is no floating or mis-anchored label, UI mimic, or invalid perspective."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 27,
        "compared": 27,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "7af555ff2ff085f452ee9a4fe8ede69425470f9296f18d70e5c45eabf8b73580",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T21:52:24.844Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "abacus-count",
      "vsPositive": 0.7916666666666666,
      "vsNegative": 0.9583333333333334,
      "fakeVotes": 0.0625,
      "perModel": {
        "claude": {
          "vsPositive": 0.875,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.875,
          "vsNegative": 0.875
        },
        "gemini": {
          "vsPositive": 0.625,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "488787a95a72b0b88bfb3863683cc670101ec13b19c232e8b2d0d67414303fd3",
      "bundleSha256": "7af555ff2ff085f452ee9a4fe8ede69425470f9296f18d70e5c45eabf8b73580",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/abacus-count/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/abacus-count/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/abacus-count/16x9/detail.mp4",
      "bg": "#f4efe2",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c966df24afc895900f0ec9455511153abdddfa1f5d7cf7553e41a291c1e417f4",
        "loop": "fde74da9f8a500ff218ef0c09fc7027fcfe7b1859885d653b1ae0f32dcf18e39",
        "detail": "3a76de692808f53ddcace93fa38cd3e2d15c1ec18c18ef55454448954e551798"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/abacus-count/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/abacus-count/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/abacus-count/9x16/detail.mp4",
      "bg": "#f4efe2",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5905b72508a84df9a1673be90bcda3785d1e50aa3ba603ab05e0eb4cd01991af",
        "loop": "5f0fb9bba61c2431c11768a7b65ee99e492b965afbbbe8fc42d0c8aeca5e256b",
        "detail": "f749b687f7b3cd1074ed89f25015cb60636740f4d2ee9b8e83a8bcc177169269"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/abacus-count/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/abacus-count/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/abacus-count/1x1/detail.mp4",
      "bg": "#f4efe2",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "69360c40d90f9bf460e33d9a5291da0f9f840607afca1c1afa13c8020c476db8",
        "loop": "89219ed85e4a6b1f4d84116f431579f1d69ae5783e2cf0ffff9ce11b0562b715",
        "detail": "0112503f3d0011a5d00c15e9251bb7b7aed67af1bf7368f5d0de33213aa76de6"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/7af555ff2ff085f452ee9a4fe8ede69425470f9296f18d70e5c45eabf8b73580/index.mjs",
    "sha256": "7af555ff2ff085f452ee9a4fe8ede69425470f9296f18d70e5c45eabf8b73580",
    "bytes": 160464,
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
    "at": "2026-10-09T21:57:48.576Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
