// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "glass",
  "mechanic": [
    "wax"
  ],
  "tags": [
    "wax",
    "seal",
    "press",
    "emboss"
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
      "key": "logo",
      "type": "image",
      "role": "logo"
    },
    {
      "key": "caption",
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
    "sourceUrl": "21st first-party (Wax Seal Logo Press, 2026-10-09)"
  },
  "defaults": {
    "primary": "#A9402F",
    "secondary": "#D5AA63",
    "color": "#29372E",
    "background": "#F2EBDD",
    "fontFamily": "DM Sans",
    "seed": 31,
    "logo": "",
    "caption": "Make your mark"
  },
  "fields": [
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 35,
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
  "name": "Wax Seal Logo Press",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "wax-seal-logo",
    "bundleSha256": "eda4c5d0a6b75cf5400ec52a8737c00aafedbc2922de2f4e4b1192f86aed872e",
    "sourceSnapshot": {
      "sha256": "3672d7f9ac3eaa3d3710ed2a8f5eebbd7346940163538cd029a0064cde980765",
      "files": 2172
    },
    "renderedAt": "2026-10-09T22:49:53.765Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/16x9-paper.png",
        "sha256": "e58e9cc798d72119237f7a2e6e446a3194e1a1dbadbf0132e111daf42ea647ac"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/16x9-night.png",
        "sha256": "4ee1398e6480c98a2d0a4c7a58d540bc7ae2824ead2c0698b6f08a13a056ed8b"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/16x9-color.png",
        "sha256": "f2c98acde55b68fa76d0cc1a46005e1904124046225db00c6036218809b3cc73"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/9x16-paper.png",
        "sha256": "5fc8ad296500ff230b5de3c00670bf7ee567483f417594b0407271bfd72640e7"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/9x16-night.png",
        "sha256": "5d79b1f13457425108b4d51d0e3745d5d025a588a9b0ead7bfb29189b0357228"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/9x16-color.png",
        "sha256": "6702bb9b88b773e9cda136d4293e8172a02cf81be8b21bd88275bc1bc0ce082c"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/1x1-paper.png",
        "sha256": "cdc9a89e17152aaf2d5fc7ff4bd3d2814b379b9f5c2e21e5e751c0d9a23e5678"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/1x1-night.png",
        "sha256": "07adb9d00ce25e0d112acad4550f2a8ea76971f478dd077c5fec1dacfdc47e6b"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/1x1-color.png",
        "sha256": "6a1c2c379a2ab7d2234f547abc86e6624c39a57432cb46288b09cd6ce0ae4215"
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
          "wax-seal-logo--16x9",
          "wax-seal-logo--9x16",
          "wax-seal-logo--1x1"
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
            "paperNight": 25.17803276909722,
            "paperColor": 19.344807942708332,
            "region": {
              "left": 582,
              "top": 98,
              "width": 751,
              "height": 876
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 22.68158637152778,
            "paperColor": 15.73434787326389,
            "region": {
              "left": 129,
              "top": 415,
              "width": 816,
              "height": 1317
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 25.176378038194443,
            "paperColor": 19.34621853298611,
            "region": {
              "left": 162,
              "top": 98,
              "width": 751,
              "height": 876
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
            "occupancy": 0.44963539042160083,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.44963539042160083,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.44398928392087295,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7345009763164526,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7333855610145295,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7227891156462587,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.799351805193957,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.799351805193957,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7893142825259963,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 20.188368055555557,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 21.302842881944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/16x9-duration-150-frame-18.png",
                "sha256": "db8aaeb3aff3b8c61c9c236ea168977cebd4be8b1ad33d558a09c3bd0c5e3958",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/16x9-duration-150-frame-135.png",
                "sha256": "22e96ab91f2285214592192e82f471a6511b438d2bcebd6b6fe9a39e4cf4d212",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/16x9-duration-150-frame-132.png",
                "sha256": "22e96ab91f2285214592192e82f471a6511b438d2bcebd6b6fe9a39e4cf4d212",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/16x9-duration-150-frame-149.png",
                "sha256": "22e96ab91f2285214592192e82f471a6511b438d2bcebd6b6fe9a39e4cf4d212",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 20.188368055555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/16x9-duration-600-frame-20.png",
                "sha256": "fd0d274f734c02d6ed052ee35d9277da82508301abece414148e50dbe4cf7bf6",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/16x9-duration-600-frame-135.png",
                "sha256": "22e96ab91f2285214592192e82f471a6511b438d2bcebd6b6fe9a39e4cf4d212",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/16x9-duration-600-frame-528.png",
                "sha256": "22e96ab91f2285214592192e82f471a6511b438d2bcebd6b6fe9a39e4cf4d212",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/16x9-duration-600-frame-599.png",
                "sha256": "22e96ab91f2285214592192e82f471a6511b438d2bcebd6b6fe9a39e4cf4d212",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 29.354166666666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/9x16-duration-150-frame-18.png",
                "sha256": "a22c2964078086e6dd9cd31049ab5436912f14aa7733fa10a417b242b52233e1",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/9x16-duration-150-frame-135.png",
                "sha256": "e50b6a901c628618c47c22f658d8b21e68e2dae054ad7095bab2d9a2a45cd190",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/9x16-duration-150-frame-132.png",
                "sha256": "e50b6a901c628618c47c22f658d8b21e68e2dae054ad7095bab2d9a2a45cd190",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/9x16-duration-150-frame-149.png",
                "sha256": "e50b6a901c628618c47c22f658d8b21e68e2dae054ad7095bab2d9a2a45cd190",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 28.03765190972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/9x16-duration-600-frame-20.png",
                "sha256": "ce1982a8635d090c8f41b53b38935e4e1b9ebf898afc6a5be1eedc3ad0514b3f",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/9x16-duration-600-frame-135.png",
                "sha256": "e50b6a901c628618c47c22f658d8b21e68e2dae054ad7095bab2d9a2a45cd190",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/9x16-duration-600-frame-528.png",
                "sha256": "e50b6a901c628618c47c22f658d8b21e68e2dae054ad7095bab2d9a2a45cd190",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/9x16-duration-600-frame-599.png",
                "sha256": "e50b6a901c628618c47c22f658d8b21e68e2dae054ad7095bab2d9a2a45cd190",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 37.712673611111114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/1x1-duration-150-frame-18.png",
                "sha256": "b447757c6e65319f1b22473f35629373dd3f64b9f02c2ab087273bbc753c58b8",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/1x1-duration-150-frame-135.png",
                "sha256": "e7ab344f96e2342664bf3e6c0e080fa47f97185c5e72b5a9dd9b85def127944c",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/1x1-duration-150-frame-132.png",
                "sha256": "e7ab344f96e2342664bf3e6c0e080fa47f97185c5e72b5a9dd9b85def127944c",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/1x1-duration-150-frame-149.png",
                "sha256": "e7ab344f96e2342664bf3e6c0e080fa47f97185c5e72b5a9dd9b85def127944c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 35.734700520833336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/1x1-duration-600-frame-20.png",
                "sha256": "55bce76b6a50390fd731d385b475dc566d49ea3f25f95a429fb743cfd92190a6",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/1x1-duration-600-frame-135.png",
                "sha256": "e7ab344f96e2342664bf3e6c0e080fa47f97185c5e72b5a9dd9b85def127944c",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/1x1-duration-600-frame-528.png",
                "sha256": "e7ab344f96e2342664bf3e6c0e080fa47f97185c5e72b5a9dd9b85def127944c",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/wax-seal-logo/1x1-duration-600-frame-599.png",
                "sha256": "e7ab344f96e2342664bf3e6c0e080fa47f97185c5e72b5a9dd9b85def127944c",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "logos",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "1. TitleMatches: The images visibly depict a process where a wax seal is stamped, matching the 'Wax Seal Logo Press' title. The sequence (images 2–4) shows an initial wax pool, a press coming down, and the finished seal with an imprinted logo, supporting an actual wax press effect. 2. noBakedHeading: There is no decorative or extraneous block title or label embedded in the composition. The only text present matches the editable caption slot ('Make your mark'), and there are no extra headings or category frames. 3. brandAdherence: Images five through seven show the same core layout with seal and logo applied in three clearly different color palettes. Each palette reflects the distinct primary/secondary/background/text values provided, and the seal and type remain legible and shape-consistent in all. There is no retaining of unexplained or fixed block colors outside the provided palette ranges. 4. languageAdherence: Across palettes and the full animation, core material language is consistent: there are visible overlapping/translucent effects in the seal/logo, some edge highlights and depth, no forbidden glow or blurry primary text, and the type and numeral style remains cohesive. The structure, type, and material language are unchanged across variants, meeting language card guidance."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 48,
        "compared": 48,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "eda4c5d0a6b75cf5400ec52a8737c00aafedbc2922de2f4e4b1192f86aed872e",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T22:58:08.303Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "wax-seal-logo",
      "vsPositive": 0.6666666666666666,
      "vsNegative": 0.8333333333333334,
      "fakeVotes": 0.14583333333333334,
      "perModel": {
        "claude": {
          "vsPositive": 0.375,
          "vsNegative": 0.625
        },
        "gpt": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gemini": {
          "vsPositive": 0.625,
          "vsNegative": 0.875
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "8baa41b42816b79764db11ee43028262b21a4f10f1b8ba7fc3acc9c485929ca3",
      "bundleSha256": "eda4c5d0a6b75cf5400ec52a8737c00aafedbc2922de2f4e4b1192f86aed872e",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/wax-seal-logo/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/wax-seal-logo/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/wax-seal-logo/16x9/detail.mp4",
      "bg": "#f2ebdd",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "70a938f1ab112a99640b21bc1737b4949866738625d1a27157e82fda9e0e0813",
        "loop": "66ee1502602005ff039b8a36f300cea1a000b04f660a52717cbf49e130c860d1",
        "detail": "23159d8906c3c7f60fd36ddb9cefda75c2534a366d4940f4d2ab028f5edcfbdf"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/wax-seal-logo/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/wax-seal-logo/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/wax-seal-logo/9x16/detail.mp4",
      "bg": "#f2ebdd",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c1e8ea6e0fa5d7286e6389073a8442d2e477909d6792b8f47bb55e561a3cc7ff",
        "loop": "7dcb479d6aab9d6e465854698940d7b71fc32db4e7152fb6d0931e97c2a1b47f",
        "detail": "b9b26150cecadec6eeb20ecd9112c1f6c0b74cbf450921e403892846e0753320"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/wax-seal-logo/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/wax-seal-logo/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/wax-seal-logo/1x1/detail.mp4",
      "bg": "#f2ebdd",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "41a3e138acd33144ed4dcafbf18d1c48cacb13bbde16fb5768d8aa8298dff58b",
        "loop": "9571b5a72cbe31e263b085f80629c29bb2ed57792d49f783cdf7c5c6edb9796b",
        "detail": "a7da2a8d1316a92799eccc60900ce13020671e412cb4490afb88cc8a3077cce8"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/eda4c5d0a6b75cf5400ec52a8737c00aafedbc2922de2f4e4b1192f86aed872e/index.mjs",
    "sha256": "eda4c5d0a6b75cf5400ec52a8737c00aafedbc2922de2f4e4b1192f86aed872e",
    "bytes": 160971,
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
    "at": "2026-10-09T23:06:54.320Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
