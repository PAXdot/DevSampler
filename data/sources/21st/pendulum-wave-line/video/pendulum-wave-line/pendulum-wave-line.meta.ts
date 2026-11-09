// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "aura",
  "mechanic": [
    "pendulum"
  ],
  "energy": "calm",
  "tags": [
    "title",
    "headline",
    "pendulum",
    "pendulum wave",
    "physics",
    "metal",
    "sync",
    "rhythm",
    "underline",
    "hypnotic",
    "realistic"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 240,
      "min": 200,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 200,
      "out": 0
    },
    "markers": {
      "settled": 200,
      "twoRows": 21,
      "threeRows": 64,
      "fourRows": 85,
      "sync": 150,
      "title": 160
    },
    "beats": [
      0,
      21,
      64,
      85,
      150,
      160,
      200
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
      "maxChars": 60,
      "lines": 2,
      "role": "headline"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "pendulum row",
      "prop": "phase",
      "from": "interleaved rows",
      "settledBy": 150,
      "easing": "linear"
    },
    {
      "target": "pendulum row",
      "prop": "swing",
      "from": "released line",
      "settledBy": 200,
      "easing": "spring"
    },
    {
      "target": "headline",
      "prop": "opacity",
      "from": "blurred, below",
      "settledBy": 196,
      "easing": "ease"
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
      240
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (pendulum-wave apparatus of polished metal bobs on V threads, true harmonic periods realign into an underline, 2026-10-08)"
  },
  "defaults": {
    "text": "Find your rhythm",
    "primary": "#268BD2",
    "secondary": "#D33682",
    "color": "#073642",
    "background": "#FDF6E3",
    "count": 15,
    "grain": true,
    "fontFamily": "Inter"
  },
  "fields": [
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 60,
      "role": "headline"
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
      "key": "count",
      "label": "Count",
      "type": "number",
      "step": 1,
      "min": 9,
      "max": 19
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.body"
    }
  ],
  "name": "Pendulum Wave",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "pendulum-wave-line",
    "bundleSha256": "5c36d65fb3a09111186b7ab19112f962be6d4e60da83fed767410ac090e1b0f5",
    "sourceSnapshot": {
      "sha256": "8c8648af8fd3e1e355643a057cccbaeed8f2d74a734b1f517c02e3af0d549bea",
      "files": 2016
    },
    "renderedAt": "2026-10-09T19:57:50.830Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/16x9-paper.png",
        "sha256": "7bb7140d856e1325b86837eaa42f0b75f656f80fecb181a4a9cadbf5892806ce"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/16x9-night.png",
        "sha256": "fe68b01170aa33baa42516ddf2a3f7ed101c65673fa7a61ba67707b13c765d4b"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/16x9-color.png",
        "sha256": "dfcac19612aa6813104f6f8090c7ef0f69cdb0119fe17a6c628ab31897f284e8"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/9x16-paper.png",
        "sha256": "739898529803a0a882de760e8bf55b5ee895d21313400087f682eec27902ed5c"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/9x16-night.png",
        "sha256": "edcd6fc3b9027e1131ec641576625f7fa471e0c4c2d8517ef00c15d8e564f4a8"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/9x16-color.png",
        "sha256": "dd69002d302d890b6c5dc78e3fad0afe9a40e45459a4b5f1453fffd85c886ce3"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/1x1-paper.png",
        "sha256": "cfa24d95b873446271446d31e81fda60c0361547c65f038ca393db8756870aa3"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/1x1-night.png",
        "sha256": "ceed8abeb55e5b9b2484ce0ee25808f6ed9a44c2c33f3800ecc2eca94b4b1250"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/1x1-color.png",
        "sha256": "e278c91ed140707571bb620e604e764d7345c361e0157bffc2db65c7e523d016"
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
          "pendulum-wave-line--16x9",
          "pendulum-wave-line--9x16",
          "pendulum-wave-line--1x1"
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
            "paperNight": 61.71454535590278,
            "paperColor": 19.053331163194443,
            "region": {
              "left": 26,
              "top": 81,
              "width": 1859,
              "height": 999
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 62.899820963541664,
            "paperColor": 17.59933810763889,
            "region": {
              "left": 0,
              "top": 147,
              "width": 1080,
              "height": 1483
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 59.11412217881944,
            "paperColor": 17.70879448784722,
            "region": {
              "left": 0,
              "top": 82,
              "width": 1080,
              "height": 919
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
            "occupancy": 1.2171983151542514,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2606174960982337,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2171983151542514,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0607107426303857,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0791643046107333,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0607107426303857,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.149533887629126,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1915259931132949,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.149533887629126,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 12.871527777777779,
        "frames": [
          28,
          200,
          239
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 200,
            "averageChannelDifference": 10.68771701388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 24,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/16x9-duration-200-frame-24.png",
                "sha256": "cf49d54240fc3a8c483ff9323597d28cff08cfa71630268041db0d7f91adb3d9",
                "alphaMass": 587520
              },
              {
                "frame": 199,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/16x9-duration-200-frame-199.png",
                "sha256": "a8255671d2bf3a4d6d283e9717754f3826903ca58978b2b402004ea6b20b0b8d",
                "alphaMass": 587520
              },
              {
                "frame": 176,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/16x9-duration-200-frame-176.png",
                "sha256": "08a689bc0795ea5bf273eb253749d236043c30ac467887e5a56e902951013f99",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 12.512261284722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 30,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/16x9-duration-600-frame-30.png",
                "sha256": "bd75739fd75d3c3b5fe11fcc4504086396676fbf6adf3502caf889a648630d81",
                "alphaMass": 587520
              },
              {
                "frame": 200,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/16x9-duration-600-frame-200.png",
                "sha256": "326939a5d3e65309a11ad5ac0f11213ebf50d31c5eac5d5b6e2ff6b4489e2938",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/16x9-duration-600-frame-528.png",
                "sha256": "946f9f64230f8eef1459e59a1213ea36a1e051f95ecaed78f94800a92f2110e1",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/16x9-duration-600-frame-599.png",
                "sha256": "f931be52937d3880dd118f4371a4bc12550de1851fb46c15c12f0a6f293e306b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 200,
            "averageChannelDifference": 11.875542534722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 24,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/9x16-duration-200-frame-24.png",
                "sha256": "ef8423d6063067b4eda41634ccb58c47f7efc5cad1bc65538aacc638c36417e8",
                "alphaMass": 587520
              },
              {
                "frame": 199,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/9x16-duration-200-frame-199.png",
                "sha256": "8bfab1ac4afa71eaa4b12f06dcefb7d107bf9111daedc1766c16da888be3425c",
                "alphaMass": 587520
              },
              {
                "frame": 176,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/9x16-duration-200-frame-176.png",
                "sha256": "c111479a293024474116758c8d56552776328f335ad8e274897de59b184233d1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 11.99728732638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 30,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/9x16-duration-600-frame-30.png",
                "sha256": "f4118adacdf12854f1746b520fbcc3850cf83d8db305033d5901c63fac547bbc",
                "alphaMass": 587520
              },
              {
                "frame": 200,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/9x16-duration-600-frame-200.png",
                "sha256": "c95e115a8ce680aaf3b885f7c0258bd8a9b2f24eb5fc2d19b22c0645d65b9d2b",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/9x16-duration-600-frame-528.png",
                "sha256": "0e9c5e3b01f55207af955e1ef9f29b813f2d052d3cbc8eaab9bf0e8fe5902037",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/9x16-duration-600-frame-599.png",
                "sha256": "c0a87bd1777a85e62f56d266ecdc0ae937675a4b9bd8732990c33cc40943a852",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 200,
            "averageChannelDifference": 10.78200954861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 24,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/1x1-duration-200-frame-24.png",
                "sha256": "75882f146af3b9ac64bdd55a84a53233d9efebcd94c125c29a337827232a1d59",
                "alphaMass": 587520
              },
              {
                "frame": 199,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/1x1-duration-200-frame-199.png",
                "sha256": "be600bf776c7ec729c2a5895ba59ad46435f5f17fdefff50ec716a90869863a3",
                "alphaMass": 587520
              },
              {
                "frame": 176,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/1x1-duration-200-frame-176.png",
                "sha256": "061639212d993c37bbb2301144656d589cf1c055c0ec4d0c1f62f0dba8f9a802",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 12.16384548611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 30,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/1x1-duration-600-frame-30.png",
                "sha256": "6f99bd19ab943f8a60f783640d03b3b734e2c714d4406b11cf3eaedf94f99670",
                "alphaMass": 587520
              },
              {
                "frame": 200,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/1x1-duration-600-frame-200.png",
                "sha256": "d6a93e3bec0169f2a734fa07243a0c5def5dab186ee18445d7c2690b88cd5215",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/1x1-duration-600-frame-528.png",
                "sha256": "8f5e601d717545a46550ec664af91ffc1978969d63dbaf290db656a8005fbbb6",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/pendulum-wave-line/1x1-duration-600-frame-599.png",
                "sha256": "8f5e601d717545a46550ec664af91ffc1978969d63dbaf290db656a8005fbbb6",
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
        "note": "titleMatches: The subject is a pendulum wave with multiple colored balls suspended as in a physics demonstration; the three chronological images show a sequence of motion consistent with pendulum waves, supporting the claimed title. The named-slot content 'Find your rhythm' matches the main heading, and the effect matches both the visual and kinetics expected for the title.\nnoBakedHeading: There are no extra decorative or category labels visible; the headline present corresponds to the named slot only. No unrelated or unexplained heading is baked in.\nbrandAdherence: In the last three images, the poster appears under three different palettes, each using the listed primary and background colors. Text and subject remain clearly legible across all versions, with no unexplained persistent block colors; each applies the new palette coherently.\nlanguageAdherence: The language card prescribes continuous soft light fields, brand-derived gradients, legibility under motion, and sans-serif typography. All rebrands and samples consistently use a soft background, sans-serif 'display' typography, and careful gradient or lighting. Motion samples match the 'slow drift, legible subject' criteria; there is no unrelated rainbow palette or foreground copy blur. Therefore, language adherence is maintained as described in the card."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 66,
        "compared": 66,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "5c36d65fb3a09111186b7ab19112f962be6d4e60da83fed767410ac090e1b0f5",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T20:24:55.860Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "pendulum-wave-line",
      "vsPositive": 1,
      "vsNegative": 1,
      "fakeVotes": 0,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gemini": {
          "vsPositive": 1,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "de9abed5ccf64cd63ce92c67be4e8e1426387838f0fdd760ea6e5f2a3072d78c",
      "bundleSha256": "5c36d65fb3a09111186b7ab19112f962be6d4e60da83fed767410ac090e1b0f5",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/pendulum-wave-line/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/pendulum-wave-line/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/pendulum-wave-line/16x9/detail.mp4",
      "bg": "#f5eedd",
      "posterFrame": 200,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "e797d39a382baf6e013f23019249ab5c3a6f9fc915714fc2b4038a0762b3a51d",
        "loop": "e42bfa657756fbc7ca5dcf55a247352b28eb1615f61096fee81beba2d2d982a8",
        "detail": "ff1eb48f74c397194d7fc519ab82de8acfdd1d55f628af8077c8d2420c469fe1"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/pendulum-wave-line/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/pendulum-wave-line/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/pendulum-wave-line/9x16/detail.mp4",
      "bg": "#f4eedd",
      "posterFrame": 200,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "642e86c951b153b60e663ca18bc56aa95e078da0747d6e0e67a5b84de9a930e3",
        "loop": "a877be9550400c710b7fca938ebb09a4ad7b6b7f04b7418e1b5660dd0d4448ee",
        "detail": "2524771c7b4ddebb0f07b6a0205d8877bb51ebba1823a3e63e18e7048a26a6b3"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/pendulum-wave-line/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/pendulum-wave-line/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/pendulum-wave-line/1x1/detail.mp4",
      "bg": "#f6f1de",
      "posterFrame": 200,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "f40dd2a2c6067880e4e68170e705535a1a61e0f66b98c7f3008bb29490d85d91",
        "loop": "c1f7f576a4e2f1ff62897f33fa36bffa0ed580b6d1822a7ff1a9ea97c58b6082",
        "detail": "36ee7910c2dc7cedbd096b27e043b6f78a38c413d9adc88bca80136d5bec3384"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/5c36d65fb3a09111186b7ab19112f962be6d4e60da83fed767410ac090e1b0f5/index.mjs",
    "sha256": "5c36d65fb3a09111186b7ab19112f962be6d4e60da83fed767410ac090e1b0f5",
    "bytes": 170239,
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
    "at": "2026-10-09T20:40:32.711Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
