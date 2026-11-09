// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "process/craft",
  "job": "process",
  "language": "isometric",
  "mechanic": [
    "cradle"
  ],
  "tags": [
    "cradle",
    "chain",
    "pendulum",
    "steps"
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
      "key": "step1",
      "type": "text",
      "role": "body"
    },
    {
      "key": "step2",
      "type": "text",
      "role": "body"
    },
    {
      "key": "step3",
      "type": "text",
      "role": "body"
    },
    {
      "key": "step4",
      "type": "text",
      "role": "body"
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
    "sourceUrl": "21st first-party (Cradle Chain Steps, 2026-10-09)"
  },
  "defaults": {
    "primary": "#A64D35",
    "secondary": "#C8A866",
    "color": "#2A382F",
    "background": "#F2EEE4",
    "fontFamily": "DM Sans",
    "seed": 31,
    "step1": "Discover",
    "step2": "Design",
    "step3": "Build",
    "step4": "Launch"
  },
  "fields": [
    {
      "key": "step1",
      "label": "Step 1",
      "type": "text",
      "max": 15,
      "role": "body"
    },
    {
      "key": "step2",
      "label": "Step 2",
      "type": "text",
      "max": 15,
      "role": "body"
    },
    {
      "key": "step3",
      "label": "Step 3",
      "type": "text",
      "max": 15,
      "role": "body"
    },
    {
      "key": "step4",
      "label": "Step 4",
      "type": "text",
      "max": 15,
      "role": "body"
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
  "name": "Cradle Chain Steps",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "newton-cradle-steps",
    "bundleSha256": "0a4fc42addfc426043588cb0a62e1516755b60cbbca79c2fee4d3390ae5e744f",
    "sourceSnapshot": {
      "sha256": "3672d7f9ac3eaa3d3710ed2a8f5eebbd7346940163538cd029a0064cde980765",
      "files": 2172
    },
    "renderedAt": "2026-10-09T22:44:52.463Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/16x9-paper.png",
        "sha256": "c63a4560f75a5e796bd36d7b222aac54fcd13fea63f0c0a7e3f4b16ef58d0703"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/16x9-night.png",
        "sha256": "af31670725ca976ac01b6dec6697fb8bf7d4dfc89277fdfe439fa9f828003169"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/16x9-color.png",
        "sha256": "ceff516fce6165debf5a2c886d8c7eac0b08a075e094df15081ecc1f2affa7a4"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/9x16-paper.png",
        "sha256": "268bff4fb98810243bedf346409cca777c5717c70fa331cf49457a8ed5b31cf5"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/9x16-night.png",
        "sha256": "adb7db07686ec449bbe6e4c089d3416854dc5f7f963646396d60f50a72200509"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/9x16-color.png",
        "sha256": "2df684f9b4fa6a45f568a8e64415b7020d8760366135325b657c190b426549b2"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/1x1-paper.png",
        "sha256": "48c2e61e74588363661d9f9eec92bac40978ed79d1e5a0054b9a09bc87fcc5cd"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/1x1-night.png",
        "sha256": "e8278c69efee2c1f09b67d29704e9426d1f935d4c2b3a3cc506b0310e715494c"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/1x1-color.png",
        "sha256": "b78d5772f73c5becab9dd8c620e7aac385d14e79cccc405b6e7b748db198a5f2"
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
          "newton-cradle-steps--16x9",
          "newton-cradle-steps--9x16",
          "newton-cradle-steps--1x1"
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
            "paperNight": 41.54896375868056,
            "paperColor": 15.87326388888889,
            "region": {
              "left": 147,
              "top": 144,
              "width": 1626,
              "height": 740
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 45.19420030381944,
            "paperColor": 15.72629123263889,
            "region": {
              "left": 80,
              "top": 512,
              "width": 920,
              "height": 1229
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 47.88739691840278,
            "paperColor": 21.492431640625,
            "region": {
              "left": 7,
              "top": 144,
              "width": 1067,
              "height": 740
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
            "occupancy": 0.8223727376753173,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8212614231649452,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8101482780612247,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7715229224405813,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7727804985162791,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7702653463648835,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9593786645888353,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9580822069339855,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9451176303854877,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.896809895833333,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 3.5928819444444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/16x9-duration-150-frame-18.png",
                "sha256": "f12586a09adcd611bab0e17c3b2b121d36d75182dbf2ce65d1b8eb832a6ae9cc",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/16x9-duration-150-frame-135.png",
                "sha256": "fdee67701369d4906101691f2200db938cbb9cc3a03f1fe12f9b19b70d178b5e",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/16x9-duration-150-frame-132.png",
                "sha256": "ff52bc11943998c2316aaccf888072514521d8e36eda2b8067285bfb8eac36d5",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/16x9-duration-150-frame-149.png",
                "sha256": "fdee67701369d4906101691f2200db938cbb9cc3a03f1fe12f9b19b70d178b5e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 4.896809895833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/16x9-duration-600-frame-20.png",
                "sha256": "c1c5d31659d57548384bfbf384436c5316742b338e7c2c0d3af4d90e1c5b8f17",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/16x9-duration-600-frame-135.png",
                "sha256": "fdee67701369d4906101691f2200db938cbb9cc3a03f1fe12f9b19b70d178b5e",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/16x9-duration-600-frame-528.png",
                "sha256": "fdee67701369d4906101691f2200db938cbb9cc3a03f1fe12f9b19b70d178b5e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/16x9-duration-600-frame-599.png",
                "sha256": "fdee67701369d4906101691f2200db938cbb9cc3a03f1fe12f9b19b70d178b5e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 3.3702256944444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/9x16-duration-150-frame-18.png",
                "sha256": "ca5870a084cf089ebb7891f47e9f035701eb7304a5f88d0de250da2908d9e1a4",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/9x16-duration-150-frame-135.png",
                "sha256": "9b25364644162c6fa3caf8a5aed92f3e697040bbe75218352efcfea6e5464508",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/9x16-duration-150-frame-132.png",
                "sha256": "a5637f42c26a27571b47eba42c71101059e41d7128947445270f7fb06b098583",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/9x16-duration-150-frame-149.png",
                "sha256": "9b25364644162c6fa3caf8a5aed92f3e697040bbe75218352efcfea6e5464508",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 3.8550347222222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/9x16-duration-600-frame-20.png",
                "sha256": "92df10dcc787b0467c9bee8615b0f6ba6a1b26213865761a810610c75f23d4aa",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/9x16-duration-600-frame-135.png",
                "sha256": "9b25364644162c6fa3caf8a5aed92f3e697040bbe75218352efcfea6e5464508",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/9x16-duration-600-frame-528.png",
                "sha256": "9b25364644162c6fa3caf8a5aed92f3e697040bbe75218352efcfea6e5464508",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/9x16-duration-600-frame-599.png",
                "sha256": "9b25364644162c6fa3caf8a5aed92f3e697040bbe75218352efcfea6e5464508",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 4.963650173611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/1x1-duration-150-frame-18.png",
                "sha256": "ef19b373fa93d21acce3e175a6353349db1f898bf8c4bdaadd93cf55c8ea187b",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/1x1-duration-150-frame-135.png",
                "sha256": "aeb564d397b2e0779f2c0153bf8319edc7b94bab15e74f9bf5e77f85fab591ee",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/1x1-duration-150-frame-132.png",
                "sha256": "cf2d9945f50e793305b1b0f0c9fbafba99a868965ce62c926ebc753484223302",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/1x1-duration-150-frame-149.png",
                "sha256": "aeb564d397b2e0779f2c0153bf8319edc7b94bab15e74f9bf5e77f85fab591ee",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 5.927951388888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/1x1-duration-600-frame-20.png",
                "sha256": "a82e51f5afb638b6ad30e8b8721e4407674f2f8cd087f2f3abd42a64d773d1e2",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/1x1-duration-600-frame-135.png",
                "sha256": "aeb564d397b2e0779f2c0153bf8319edc7b94bab15e74f9bf5e77f85fab591ee",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/1x1-duration-600-frame-528.png",
                "sha256": "aeb564d397b2e0779f2c0153bf8319edc7b94bab15e74f9bf5e77f85fab591ee",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/newton-cradle-steps/1x1-duration-600-frame-599.png",
                "sha256": "aeb564d397b2e0779f2c0153bf8319edc7b94bab15e74f9bf5e77f85fab591ee",
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
        "note": "TitleMatches: The visible subject, a Newton's cradle with each sphere labeled as a step (Discover, Design, Build, Launch), follows a stepwise progression, and the sampled motion shows balls moving/being highlighted in sequence, supporting the 'Cradle Chain Steps' title and its implication of stepwise, linked actions. noBakedHeading: There is no decorative, unexplained block title or language/category label baked into the poster or samples; only the named steps appear as legitimate headings matching slot content. brandAdherence: The last three images show the exact same poster design under three palettes: (1) muted rosy with dark red line, (2) dark background with magenta/green spheres, (3) pale green background with deep blue markings. All text remains legible, colored lines and spheres adapt palette appropriately, and no unexplained fixed block colors remain, thereby adhering to brand palette requirements. languageAdherence: Across all images, material remains as rendered spheres (not flat UI), visible directional face shading expresses depth using supplied palette colors, ground plane and frame are preserved, type stays sans-serif, parallel projection is consistent (no random tilting), and type roles and visibility persist. No deviations from the language card are visible, so adherence is confirmed."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 26,
        "compared": 26,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "0a4fc42addfc426043588cb0a62e1516755b60cbbca79c2fee4d3390ae5e744f",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T22:58:08.269Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "newton-cradle-steps",
      "vsPositive": 0.6666666666666666,
      "vsNegative": 0.875,
      "fakeVotes": 0.125,
      "perModel": {
        "claude": {
          "vsPositive": 0.875,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.375,
          "vsNegative": 0.625
        },
        "gemini": {
          "vsPositive": 0.75,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "3eaa78ce705f551fc57d57b9911e19d79290fd91edcd071d153924aff5b86779",
      "bundleSha256": "0a4fc42addfc426043588cb0a62e1516755b60cbbca79c2fee4d3390ae5e744f",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/newton-cradle-steps/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/newton-cradle-steps/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/newton-cradle-steps/16x9/detail.mp4",
      "bg": "#f2eee4",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "be6cf7dffeee5656c4dcce1f3de5211807caad814d425b803e3c89509e1dc9af",
        "loop": "e533583db66ab20b444d34c62d9659fb08768e3265e622ec57f86afb2dceeedc",
        "detail": "141e7915e6027b5555ee7c2d9435c35e21333909644ded7f046a2b8b2bce9d5e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/newton-cradle-steps/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/newton-cradle-steps/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/newton-cradle-steps/9x16/detail.mp4",
      "bg": "#f2eee4",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f196a99b342f253ff39136441b4baef5b9d909c0e1ba3ebfaf88a38ec1504b6f",
        "loop": "beff710e3c0f0fe5210e6c1d5b798fe39e646b7e4b8648acc1cd2e7b357fb729",
        "detail": "aaf37076782136bd951c4de2a3c4ae4dbf6e56105717400bc4636056efb97dc1"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/newton-cradle-steps/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/newton-cradle-steps/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/newton-cradle-steps/1x1/detail.mp4",
      "bg": "#f2eee4",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "bd3cf729011d0ec0299e71c12521d3cdc95d651aa7d1b690cb92426b281a46fe",
        "loop": "41c6d8c0a8ff5e23cac72cbb2ffc8304ad39ec7a9197d368af52d2b9cd3bb74d",
        "detail": "cec9c6e4f19eed80a2c911bb8061f129b40f0851bd1c3e1ad70b2ead232700fd"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/0a4fc42addfc426043588cb0a62e1516755b60cbbca79c2fee4d3390ae5e744f/index.mjs",
    "sha256": "0a4fc42addfc426043588cb0a62e1516755b60cbbca79c2fee4d3390ae5e744f",
    "bytes": 160213,
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
    "at": "2026-10-09T23:06:29.385Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
