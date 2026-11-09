// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "backgrounds/craft",
  "job": "backgrounds",
  "language": "kinetic-poster",
  "mechanic": [
    "route"
  ],
  "tags": [
    "truchet",
    "tiles",
    "maze",
    "path",
    "quarter-circles",
    "geometric",
    "pattern"
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
      "route": 90
    },
    "beats": [
      0,
      36,
      80,
      105,
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
      "key": "logo",
      "type": "image",
      "role": "logo"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background"
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
    "sourceUrl": "21st first-party (quarter-circle tiles flip to a solved continuous route carrying light into a user mark, 2026-10-09)"
  },
  "defaults": {
    "logo": "",
    "primary": "#3A5A40",
    "secondary": "#E9C46A",
    "color": "#1A1A17",
    "background": "#F3F4ED",
    "seed": 37
  },
  "fields": [
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo"
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
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1
    }
  ],
  "name": "Truchet Path Run",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "truchet-path-run",
    "bundleSha256": "80c124b4a67d83a26d6c0773fe29ec3fb7aacd7d0d516806e9c00d7c8b7b3ae8",
    "sourceSnapshot": {
      "sha256": "380231fb2fdd78399e0d2fdba550087ac492a21dcf3b4339f6900174d4b37b75",
      "files": 2025
    },
    "renderedAt": "2026-10-09T20:34:11.934Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/16x9-paper.png",
        "sha256": "e80e848d019dbb0372be06c50a398275f5c23f2edef480442242f999e58826fa"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/16x9-night.png",
        "sha256": "8050b69fac849ce7dc318162fe3a0899a99de0577ad5253ababeac3a6e0b8293"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/16x9-color.png",
        "sha256": "6d1ad0d8821774fdc1f2d22836cf776acda3542b289a249e7f77614a1737bead"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/9x16-paper.png",
        "sha256": "1c5009d0279588524af4635b606f1339f290a40f4e00cab796da3138678b9665"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/9x16-night.png",
        "sha256": "899e3e1a638eed79c6a40fe27133a64f2526876bdfd915c30b64572d10d08896"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/9x16-color.png",
        "sha256": "a3c2b5cbb68dd9664bd7bb086e8987ca29d3807a4ec5e82a9151b76ec1079317"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/1x1-paper.png",
        "sha256": "13376751c7a3ad1c3525d8010f849c35b75bcf2f68ebd101bdb52748a08292b2"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/1x1-night.png",
        "sha256": "1a42d1bf83bf771c4f4a815b010f8d10416988c129db04bf908357e598f09953"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/1x1-color.png",
        "sha256": "753d871fda626c4ffd97ee9be7ef134148a3caf9746d6ed9ea8b87efc30a0fbe"
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
          "truchet-path-run--16x9",
          "truchet-path-run--9x16",
          "truchet-path-run--1x1"
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
            "paperNight": 31.91631401909722,
            "paperColor": 26.60422092013889,
            "region": {
              "left": 154,
              "top": 95,
              "width": 1605,
              "height": 890
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 29.46633572048611,
            "paperColor": 25.68793402777778,
            "region": {
              "left": 55,
              "top": 197,
              "width": 963,
              "height": 1526
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 29.84979926215278,
            "paperColor": 24.28827582465278,
            "region": {
              "left": 59,
              "top": 274,
              "width": 958,
              "height": 532
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
            "occupancy": 0.976295948549173,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.976295948549173,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.976295948549173,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.004378169091711,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.004378169091711,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.004378169091711,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6192571907592485,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6192571907592485,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6192571907592485,
            "bad": [],
            "measured": 0
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.7648654513888888,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 1.7554253472222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/16x9-duration-150-frame-18.png",
                "sha256": "3e35bf3be6e35a591886ac566b54d849c92af3d682b8469b9ec3f8050bfcbe20",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/16x9-duration-150-frame-135.png",
                "sha256": "87ef6611f78652bcc80895a2e5440f418998b7eeac5a81a9b4fedcb1e5308933",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/16x9-duration-150-frame-132.png",
                "sha256": "c45a20a6f7b4d1f46dca43d68decf738b5b9eb2b4e6b312a7f86ec5cf5fd8743",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/16x9-duration-150-frame-149.png",
                "sha256": "87ef6611f78652bcc80895a2e5440f418998b7eeac5a81a9b4fedcb1e5308933",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 1.7648654513888888,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/16x9-duration-600-frame-20.png",
                "sha256": "358919a2c6ba846c9ddc84834b79307825d143a8e9cd3bf242dd3d7ff9f96130",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/16x9-duration-600-frame-135.png",
                "sha256": "87ef6611f78652bcc80895a2e5440f418998b7eeac5a81a9b4fedcb1e5308933",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/16x9-duration-600-frame-528.png",
                "sha256": "87ef6611f78652bcc80895a2e5440f418998b7eeac5a81a9b4fedcb1e5308933",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/16x9-duration-600-frame-599.png",
                "sha256": "87ef6611f78652bcc80895a2e5440f418998b7eeac5a81a9b4fedcb1e5308933",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 1.7370876736111112,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/9x16-duration-150-frame-18.png",
                "sha256": "62f9bb4d3c54dfb2085307717be8af7e1c43a8798aba8edc1fc5dca53b54d3b6",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/9x16-duration-150-frame-135.png",
                "sha256": "300c42017e77c6f8cffbadc61f1cd98c14e7c96e816153b68251016cebec02ff",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/9x16-duration-150-frame-132.png",
                "sha256": "a202bbd6ec3d19da29eb63e961f713effe21ba3875b9218df0588e11f9ec3cfc",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/9x16-duration-150-frame-149.png",
                "sha256": "300c42017e77c6f8cffbadc61f1cd98c14e7c96e816153b68251016cebec02ff",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 1.7635633680555556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/9x16-duration-600-frame-20.png",
                "sha256": "a7033c827a8372e07f65dda9e9a0f9db8361e4b19d9799ba1668538587cfb4b9",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/9x16-duration-600-frame-135.png",
                "sha256": "300c42017e77c6f8cffbadc61f1cd98c14e7c96e816153b68251016cebec02ff",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/9x16-duration-600-frame-528.png",
                "sha256": "300c42017e77c6f8cffbadc61f1cd98c14e7c96e816153b68251016cebec02ff",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/9x16-duration-600-frame-599.png",
                "sha256": "300c42017e77c6f8cffbadc61f1cd98c14e7c96e816153b68251016cebec02ff",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 1.6501736111111112,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/1x1-duration-150-frame-18.png",
                "sha256": "ec0292dbef775a2f218e2afe4727d6b0c9d3d1fadf7e191c868b7322934b87d2",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/1x1-duration-150-frame-135.png",
                "sha256": "5c5962ff7b32978b899cf91a19973272334bf8e1fccf42924276bba222edf48f",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/1x1-duration-150-frame-132.png",
                "sha256": "0c7f27a769a4bdec6b2714e7fb459b8777a28f3fc0036ba768c1dbe47cd673c3",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/1x1-duration-150-frame-149.png",
                "sha256": "5c5962ff7b32978b899cf91a19973272334bf8e1fccf42924276bba222edf48f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 1.6575520833333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/1x1-duration-600-frame-20.png",
                "sha256": "cfd204a169f9bd5dbadc5bb15d37f49a30d24cb30227fb87779ecbc4fba9114b",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/1x1-duration-600-frame-135.png",
                "sha256": "5c5962ff7b32978b899cf91a19973272334bf8e1fccf42924276bba222edf48f",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/1x1-duration-600-frame-528.png",
                "sha256": "5c5962ff7b32978b899cf91a19973272334bf8e1fccf42924276bba222edf48f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/truchet-path-run/1x1-duration-600-frame-599.png",
                "sha256": "5c5962ff7b32978b899cf91a19973272334bf8e1fccf42924276bba222edf48f",
                "alphaMass": 587520
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
        "note": "1. TitleMatches: The visible poster and chronologically sampled frames all feature a tiling pattern of Truchet-like curves, with a single colored path threading through and around circular/overlapping motifs. The path is highlighted and clearly \"runs\" along the pattern, matching the claimed 'Truchet Path Run'. The motion samples show parts of the pattern deconstructing and reassembling (slots opening/closing in the motif), consistent with 'path run' motion—a direct, visual and structural match to the title as image subject. \n\n2. NoBakedHeading: There is no block title, decorative label, or unexplained text present within the image content; all text is absent, and there are no visible headings that could be confused for embedded classification. \n\n3. BrandAdherence: The three rebrand images (images 5-7) each use a distinct color palette for background, path, and pattern lines: pink/teal, yellow/purple, and light green/blue. In each, all elements are clearly visible with no illegible or inappropriate color holds, and no unexplained fixed block colors—each rebrand alters colors in accordance with its palette while preserving shapes and material. \n\n4. LanguageAdherence: The visible material is consistent across all samples: oversized shapes, cut and masked patterning, and compressed geometric motifs. There are no type styles to contradict the card, but the underlying material, mask structure, and motion (assemble, replace, slide) match the described language. Each rebrand maintains these roles faithfully and there is no deviation from the structural language indicated in the card. Thus, all checks pass based on direct, concrete evidence from the images."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 18,
        "compared": 18,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "80c124b4a67d83a26d6c0773fe29ec3fb7aacd7d0d516806e9c00d7c8b7b3ae8",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T20:46:36.783Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "truchet-path-run",
      "vsPositive": 0.7083333333333334,
      "vsNegative": 0.875,
      "fakeVotes": 0.020833333333333332,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.625,
          "vsNegative": 0.625
        },
        "gemini": {
          "vsPositive": 0.5,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "2fdbcdd8c7eccb030bb135c63a07b2c3c28bbba0784eae94449ad90da21090c8",
      "bundleSha256": "80c124b4a67d83a26d6c0773fe29ec3fb7aacd7d0d516806e9c00d7c8b7b3ae8",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/truchet-path-run/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/truchet-path-run/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/truchet-path-run/16x9/detail.mp4",
      "bg": "#f3f4ed",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "1653a4ab2024754cc551e518d0bfc2b90ae0660669d1d9b37200edbf46c62e44",
        "loop": "628d5c26e2085fa418b0c92afc4bf43bb0535bb5e97d049552f025588e1581cd",
        "detail": "05b3f5ccdb80ca3324df440ae1fb070afbfe10ada4c372049842ee15e6763682"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/truchet-path-run/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/truchet-path-run/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/truchet-path-run/9x16/detail.mp4",
      "bg": "#f3f4ed",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7695a1618983bd707b8175008de5d42cf27b5433cf87ce4ff98f6afb327d1e8f",
        "loop": "67215e63aa794210b46382afa20fbd805faee299681782506faaeaae3923e111",
        "detail": "c59fd2947452ac8eaa1d46437806e25029b1599a294e1030e95d4890db4ab732"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/truchet-path-run/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/truchet-path-run/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/truchet-path-run/1x1/detail.mp4",
      "bg": "#f3f4ed",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "01ecd3b017e3016f198d3fc1513c0ee907d52170d5cc38ff46b211dee98b71a5",
        "loop": "e5f1245fa7917e918b67a7df535b6bfc726c0ff8050766270baca7d6de3a0717",
        "detail": "5ab7ede2a12b0789e3d56ce4aca59620710aed7b0882bdbd39d8168ab8a09de6"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/80c124b4a67d83a26d6c0773fe29ec3fb7aacd7d0d516806e9c00d7c8b7b3ae8/index.mjs",
    "sha256": "80c124b4a67d83a26d6c0773fe29ec3fb7aacd7d0d516806e9c00d7c8b7b3ae8",
    "bytes": 53265,
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
    "at": "2026-10-09T20:58:43.089Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
