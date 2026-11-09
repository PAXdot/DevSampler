// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "extrude"
  ],
  "tags": [
    "extrude",
    "sculpture",
    "layers",
    "typography"
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
      "key": "text",
      "type": "text",
      "role": "heading"
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
    "sourceUrl": "21st first-party (Layered Type Sculpture, 2026-10-09)"
  },
  "defaults": {
    "primary": "#B3442C",
    "secondary": "#C7AC6D",
    "color": "#29352F",
    "background": "#F2EEE3",
    "fontFamily": "Archivo Black",
    "seed": 31,
    "text": "MAKE IT MATTER"
  },
  "fields": [
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 24,
      "role": "heading"
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
  "name": "Layered Type Sculpture",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "shadow-type-sculpture",
    "bundleSha256": "f22c831348e235772688e7ea9cc82c2e1dc820fc7a13048ac1fd67ddfa4afe0c",
    "sourceSnapshot": {
      "sha256": "3672d7f9ac3eaa3d3710ed2a8f5eebbd7346940163538cd029a0064cde980765",
      "files": 2172
    },
    "renderedAt": "2026-10-09T22:45:56.093Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/16x9-paper.png",
        "sha256": "e891719f5efdcc09b359cb9ed95ba7d6bb80dda1050425fd64c47689dd8c25c3"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/16x9-night.png",
        "sha256": "994b404256db2af3954a4d288663067c7a6c25b4c278d2591d626a840ea16624"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/16x9-color.png",
        "sha256": "6a45e5a8bda118ad7269260b51b42cb13b46f3f9d146776faaf679c2d4df68a9"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/9x16-paper.png",
        "sha256": "4e344b88cbff604f649d390902a2fe8c8ae8f5bcf745bf15c393c85d0d00f0ef"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/9x16-night.png",
        "sha256": "e38ef8c9580d42cf3d99c70418c112be450a9712fe90c5a7e85e7eb4a93dcd14"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/9x16-color.png",
        "sha256": "22be583698e4113e80f088b126b1b2e3e002ba2a78323e23c4e40ff070188bdc"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/1x1-paper.png",
        "sha256": "775f179dff5df3976f54e0854fb1f29353e62f2a6ea238a44a629474ac357c0b"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/1x1-night.png",
        "sha256": "03e943056cd06348888a72a65051022c956edd26f0c7a0771cc9aeff8f96e72b"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/1x1-color.png",
        "sha256": "a1346a69d02bac325804812b45619d27fa75dbd9f897838ff6a60b4515cf4e8b"
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
          "shadow-type-sculpture--16x9",
          "shadow-type-sculpture--9x16",
          "shadow-type-sculpture--1x1"
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
            "paperNight": 46.363850911458336,
            "paperColor": 35.433078342013886,
            "region": {
              "left": 154,
              "top": 65,
              "width": 1612,
              "height": 939
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 25.236409505208332,
            "paperColor": 20.602864583333332,
            "region": {
              "left": 86,
              "top": 115,
              "width": 908,
              "height": 1671
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 29.874267578125,
            "paperColor": 24.80072699652778,
            "region": {
              "left": 86,
              "top": 65,
              "width": 908,
              "height": 939
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
            "occupancy": 1.0345394909507015,
            "bad": [],
            "measured": 23
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0345394909507015,
            "bad": [],
            "measured": 23
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0345394909507015,
            "bad": [],
            "measured": 23
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0369999658814144,
            "bad": [],
            "measured": 23
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0369999658814144,
            "bad": [],
            "measured": 23
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0369999658814144,
            "bad": [],
            "measured": 23
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0359656551235037,
            "bad": [],
            "measured": 23
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0359656551235037,
            "bad": [],
            "measured": 23
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0359656551235037,
            "bad": [],
            "measured": 23
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 22.915364583333332,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 24.437391493055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/16x9-duration-150-frame-18.png",
                "sha256": "66eb4da84fca9ea1175249fdf796d7ef029352f97a686f9b01bf1237041d034c",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/16x9-duration-150-frame-135.png",
                "sha256": "10bcf14e0629bc759bc11aabcf40b4df7c7540dc2095ea340922b45db6a4b6c3",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/16x9-duration-150-frame-132.png",
                "sha256": "10bcf14e0629bc759bc11aabcf40b4df7c7540dc2095ea340922b45db6a4b6c3",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/16x9-duration-150-frame-149.png",
                "sha256": "10bcf14e0629bc759bc11aabcf40b4df7c7540dc2095ea340922b45db6a4b6c3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 22.915364583333332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/16x9-duration-600-frame-20.png",
                "sha256": "769c9be603052a33bdf037df0eceb5f51b5241cb866beba2316d7d9773fe7831",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/16x9-duration-600-frame-135.png",
                "sha256": "10bcf14e0629bc759bc11aabcf40b4df7c7540dc2095ea340922b45db6a4b6c3",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/16x9-duration-600-frame-528.png",
                "sha256": "10bcf14e0629bc759bc11aabcf40b4df7c7540dc2095ea340922b45db6a4b6c3",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/16x9-duration-600-frame-599.png",
                "sha256": "10bcf14e0629bc759bc11aabcf40b4df7c7540dc2095ea340922b45db6a4b6c3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 13.07497829861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/9x16-duration-150-frame-18.png",
                "sha256": "f34309ae93e720c192d288ace1c1a67bca6442def3b489c8d7a87600d87872ed",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/9x16-duration-150-frame-135.png",
                "sha256": "b6841f798bed320a29d2e9b203bb8e1ff0d5ecb56b4e39d200dafe32334b5e0e",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/9x16-duration-150-frame-132.png",
                "sha256": "dadb7f5266f23bc61cd42a9cfd879e15a3b7fd3c9d9de8d18c983af4d214284e",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/9x16-duration-150-frame-149.png",
                "sha256": "e6adeb7f0a9469c903a12e2b612b18cc573f2efa082a54e12b409c06521d25cd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 12.38791232638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/9x16-duration-600-frame-20.png",
                "sha256": "dc8732c4307ef5197e5ea8c1fbda6a7d37d02a0e8dba63413a314495179397db",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/9x16-duration-600-frame-135.png",
                "sha256": "da5cd0b9e8579c7a71350ef89a1f4b841527b262a001bfd10c33215774316529",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/9x16-duration-600-frame-528.png",
                "sha256": "a02846fbb8d3ae205dacbc23fe94c69d0175695eb423e1946ca91b9da988c25f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/9x16-duration-600-frame-599.png",
                "sha256": "34c6a665c2697e9d696a6690c0369f50fda628a8ae857d2dfc5fb65ad1b2836c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 17.8466796875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/1x1-duration-150-frame-18.png",
                "sha256": "314df293e49dae5c54795a6c527a86197b289cd68787852469b7e5d6488d5b41",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/1x1-duration-150-frame-135.png",
                "sha256": "2d56b6c6aa278eae129f9a9619464c2ebe0de07e9f0b8f052fb2800b39b49602",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/1x1-duration-150-frame-132.png",
                "sha256": "36126f4f5503b8e8260fa254e7e507296e81a466a9745ee1fb109f0a873a30ec",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/1x1-duration-150-frame-149.png",
                "sha256": "439295bbd3a8f4c6b851ac6810bced38a57c1747c5dd0d0422fa034d91df2e7b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 16.92523871527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/1x1-duration-600-frame-20.png",
                "sha256": "0d856aeaad9d368b91afd22ee8843abf7df932e13805513ccb7b131a983e4d7c",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/1x1-duration-600-frame-135.png",
                "sha256": "f0122b500212ec2c1587ca16de0c4ff2c2130e950086161a7080c2b485ee1c48",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/1x1-duration-600-frame-528.png",
                "sha256": "dd346ade18098fd7b1ebbb1836a9b1f1c767ec33e90a6a582ead2887dc59a2ff",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/shadow-type-sculpture/1x1-duration-600-frame-599.png",
                "sha256": "5f3bc9491f4d22c86778cc395d042dd9ccd4fbb47ac4f46ed9ae0f9260ed0e1b",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "titles",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "TitleMatches: The subject is oversized, masked type with stacked, compressed shapes creating a multilayered (\"sculptural\") effect; progression in frames 2-4 depicts graphic assembly and replacement of these layers, consistent with the motion verbs and the 'Layered Type Sculpture' title. The sculptural, layered effect is substantive, not merely named or implied. \nNoBakedHeading: No decorative or unexplained title/category/language labels are present in the poster artwork; the only visible text is the legitimate heading 'MAKE IT MATTER,' matching the named-slot content. No extra block-title appears. \nBrandAdherence: All three rebrands (images 5-7) use the appropriate palette (ink, accent, text, and background roles), maintain distinct color/material per palette, and retain graphic clarity and legibility. Letterform structure, masks, and shadow layers adapt in color properly, without retaining unexplained fixed block colors. \nLanguageAdherence: All palette swaps and frames keep material, type, and color roles consistent: background remains flat, printed; type is oversized sans accent; graphic shadows (never frosted/mock browser/etc) match the description. All type remains sans-serif, all numerals (if present) are tabular, and motion is carried solely by graphic layers/type, not by ambient cards or browser UI. The visual evidence across all frames agrees with the language card."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 76,
        "compared": 76,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "f22c831348e235772688e7ea9cc82c2e1dc820fc7a13048ac1fd67ddfa4afe0c",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T22:58:08.066Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "shadow-type-sculpture",
      "vsPositive": 0.9166666666666666,
      "vsNegative": 0.9166666666666666,
      "fakeVotes": 0,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 1,
          "vsNegative": 0.875
        },
        "gemini": {
          "vsPositive": 0.75,
          "vsNegative": 0.875
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "1bc3c7434ef50bca4c98a87b6c3ffff53cc00075622ac54b849568f6d640116a",
      "bundleSha256": "f22c831348e235772688e7ea9cc82c2e1dc820fc7a13048ac1fd67ddfa4afe0c",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/shadow-type-sculpture/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/shadow-type-sculpture/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/shadow-type-sculpture/16x9/detail.mp4",
      "bg": "#f2eee3",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a32d57072a772011bf0561235ecfb67961808dffcd375489da498d6fca54bdb3",
        "loop": "8dcc2f7cb5051eec486a565bba311ad1a487885f2ae3f6be1cb45c2a7925b2db",
        "detail": "6e9e65a38f6d2ff719e8553c78c1435f3f6529701b232e1a58683614c9b107d6"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/shadow-type-sculpture/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/shadow-type-sculpture/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/shadow-type-sculpture/9x16/detail.mp4",
      "bg": "#f2eee3",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ed507c5dd5cf58cbef92400cfd0417e4638b7dffeadf6cf3efecef512f19c8fc",
        "loop": "c1b80b7a76c1b5e74e5d750123096128fda8856c730f7af9e5bf0345193adce1",
        "detail": "a0b34b4c5a4feb1ca55b46145d3bf39bbae744cfbe50c4c2a31732803c748788"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/shadow-type-sculpture/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/shadow-type-sculpture/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/shadow-type-sculpture/1x1/detail.mp4",
      "bg": "#f2eee3",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "eba08bc9e7803ee926e9112aa531bc0cca81d54c2c4cd279e0a4a1d36a97c8c7",
        "loop": "87b0b3f5935c699b635b0687ab7644b71c1732c57e4508896a3b29c605c72546",
        "detail": "d7a7eed0a9e5043de763ee4b9d73a57ebfd1591b84bd91cc969b623fd03d6cd4"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/f22c831348e235772688e7ea9cc82c2e1dc820fc7a13048ac1fd67ddfa4afe0c/index.mjs",
    "sha256": "f22c831348e235772688e7ea9cc82c2e1dc820fc7a13048ac1fd67ddfa4afe0c",
    "bytes": 159654,
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
    "at": "2026-10-09T23:07:01.933Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
