// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/craft",
  "job": "data",
  "language": "isometric",
  "mechanic": [
    "rise"
  ],
  "tags": [
    "rise",
    "skyline",
    "data",
    "buildings",
    "isometric"
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
      "key": "label1",
      "type": "text",
      "role": "body"
    },
    {
      "key": "label2",
      "type": "text",
      "role": "body"
    },
    {
      "key": "label3",
      "type": "text",
      "role": "body"
    },
    {
      "key": "value1",
      "type": "text",
      "role": "metric"
    },
    {
      "key": "value2",
      "type": "text",
      "role": "metric"
    },
    {
      "key": "value3",
      "type": "text",
      "role": "metric"
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
    "sourceUrl": "21st first-party (Metric Skyline Rise, 2026-10-09)"
  },
  "defaults": {
    "primary": "#347D68",
    "secondary": "#C9A45B",
    "color": "#24352F",
    "background": "#F2F0E6",
    "fontFamily": "IBM Plex Mono",
    "seed": 31,
    "label1": "Explore",
    "label2": "Make",
    "label3": "Share",
    "value1": 38,
    "value2": 82,
    "value3": 61
  },
  "fields": [
    {
      "key": "label1",
      "label": "Label 1",
      "type": "text",
      "max": 16,
      "role": "body"
    },
    {
      "key": "label2",
      "label": "Label 2",
      "type": "text",
      "max": 16,
      "role": "body"
    },
    {
      "key": "label3",
      "label": "Label 3",
      "type": "text",
      "max": 16,
      "role": "body"
    },
    {
      "key": "value1",
      "label": "Value 1",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 100,
      "role": "metric"
    },
    {
      "key": "value2",
      "label": "Value 2",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 100,
      "role": "metric"
    },
    {
      "key": "value3",
      "label": "Value 3",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 100,
      "role": "metric"
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
  "name": "Metric Skyline Rise",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "isometric-skyline",
    "bundleSha256": "d4ab9185a57b0c7fbb0d69071fd62ab1912d6f237e292072b47cd8c6ab34f91a",
    "sourceSnapshot": {
      "sha256": "c47c5ab6a2d4c2ace1617a542efbf08f9b9f6ed2dd9c899fd982fbfc0b4c400e",
      "files": 2133
    },
    "renderedAt": "2026-10-09T21:55:20.500Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/16x9-paper.png",
        "sha256": "4127a4431d83a31e16e22fcda0adcce784171a331d3bcea41eadc06f38ee9f55"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/16x9-night.png",
        "sha256": "935d0477857e7df259e62394e28988cdb6ea112cfc0443b37bbaa0f4cc7b01fb"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/16x9-color.png",
        "sha256": "74d6d4d460dea0af575de58033e3b51534bd09998cb156424b1a9cb81b6b8281"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/9x16-paper.png",
        "sha256": "988a34c7be59830f5cbd2d81ccb18fb8f654e5f5e65f142ca8465b13207d4979"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/9x16-night.png",
        "sha256": "962b1ed803fbb6e902a4005244ba31532df5b51f7bb9622a19776eb6c51fb56d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/9x16-color.png",
        "sha256": "8cd067a9deb9389610177be17f6e33ebd15c38cb357a7585da31bb7ab2ff23d9"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/1x1-paper.png",
        "sha256": "8506af3913dfbbb7d0a592da6bebc772820baf73dfb6290284dd93f2d723a737"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/1x1-night.png",
        "sha256": "ace0b9f948255e39d7cd36d68f43cdc35616452ef9a7513ca8aa784c5e2bfd24"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/1x1-color.png",
        "sha256": "1c4b2d04d1432433b82518bdea5de2b179099e86cc34c31b6ccd4b02e5e3c0b8"
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
          "isometric-skyline--16x9",
          "isometric-skyline--9x16",
          "isometric-skyline--1x1"
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
            "paperNight": 26.611490885416668,
            "paperColor": 14.297254774305555,
            "region": {
              "left": 154,
              "top": 267,
              "width": 1718,
              "height": 632
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 49.893636067708336,
            "paperColor": 22.418050130208332,
            "region": {
              "left": 134,
              "top": 378,
              "width": 801,
              "height": 1382
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 26.70651584201389,
            "paperColor": 15.098470052083334,
            "region": {
              "left": 87,
              "top": 285,
              "width": 965,
              "height": 614
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
            "occupancy": 0.7385675946047144,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7373934012905575,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7303482414056159,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7409344347950086,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7560362831475185,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6810198198363709,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7164113216159808,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.715238798994678,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7082036632668615,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 13.63107638888889,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 13.675347222222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/16x9-duration-150-frame-18.png",
                "sha256": "636858e3ce522418183ca8bdaec9c5a9eead0f5d58f66a9b216a3963392a66a2",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/16x9-duration-150-frame-135.png",
                "sha256": "cb8407c8db62b989aded717bc0fd3ce043db6acde46b9d724ecbc08bb739872c",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/16x9-duration-150-frame-132.png",
                "sha256": "e54a583d6008609f97a7104bb6f0d330cfa738f59a338963328f034f684d8e5a",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/16x9-duration-150-frame-149.png",
                "sha256": "cb8407c8db62b989aded717bc0fd3ce043db6acde46b9d724ecbc08bb739872c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 13.63107638888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/16x9-duration-600-frame-20.png",
                "sha256": "4acc1420498e08760f21f334952ab34dd9539fbee6236db2e4c6b18125586a27",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/16x9-duration-600-frame-135.png",
                "sha256": "cb8407c8db62b989aded717bc0fd3ce043db6acde46b9d724ecbc08bb739872c",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/16x9-duration-600-frame-528.png",
                "sha256": "cb8407c8db62b989aded717bc0fd3ce043db6acde46b9d724ecbc08bb739872c",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/16x9-duration-600-frame-599.png",
                "sha256": "cb8407c8db62b989aded717bc0fd3ce043db6acde46b9d724ecbc08bb739872c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 17.143229166666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/9x16-duration-150-frame-18.png",
                "sha256": "df3ad6e17465bb5aa65f650ff4d9a419beddcf5659a219d95823c89f87364dc4",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/9x16-duration-150-frame-135.png",
                "sha256": "d3b81eb8861dd52ebbbd303ed84e7bfd2ae4e5db06758d94068bfe05a35639bc",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/9x16-duration-150-frame-132.png",
                "sha256": "4163acf55961e05e5b1cbd588233f4eee2d147b9e9df92757993e3d3395be2bf",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/9x16-duration-150-frame-149.png",
                "sha256": "d3b81eb8861dd52ebbbd303ed84e7bfd2ae4e5db06758d94068bfe05a35639bc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 17.0986328125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/9x16-duration-600-frame-20.png",
                "sha256": "84c0d6e6d0c2e893a74bc7e4dd1277778163ddc874027180cee2167481da7657",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/9x16-duration-600-frame-135.png",
                "sha256": "d3b81eb8861dd52ebbbd303ed84e7bfd2ae4e5db06758d94068bfe05a35639bc",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/9x16-duration-600-frame-528.png",
                "sha256": "d3b81eb8861dd52ebbbd303ed84e7bfd2ae4e5db06758d94068bfe05a35639bc",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/9x16-duration-600-frame-599.png",
                "sha256": "d3b81eb8861dd52ebbbd303ed84e7bfd2ae4e5db06758d94068bfe05a35639bc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 14.138237847222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/1x1-duration-150-frame-18.png",
                "sha256": "7ade2e7346ef6bbe3e431003e8f6e0626fdd8dfa3fd3854271913226e2931ba9",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/1x1-duration-150-frame-135.png",
                "sha256": "600f57baacfd33f3b086b6490dfce6363e867e561dea5034e349f6332bbab5dc",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/1x1-duration-150-frame-132.png",
                "sha256": "d7a297d5358022017f89b31578490f36eaf446ccbdbb7eb8dacb36f4f89a9a67",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/1x1-duration-150-frame-149.png",
                "sha256": "600f57baacfd33f3b086b6490dfce6363e867e561dea5034e349f6332bbab5dc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 14.104926215277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/1x1-duration-600-frame-20.png",
                "sha256": "e69f7d21ff9d31e7b79ca05d836f5e2ff6cbe4adaa72d5aaf0f64f5d1ef2e59a",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/1x1-duration-600-frame-135.png",
                "sha256": "600f57baacfd33f3b086b6490dfce6363e867e561dea5034e349f6332bbab5dc",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/1x1-duration-600-frame-528.png",
                "sha256": "600f57baacfd33f3b086b6490dfce6363e867e561dea5034e349f6332bbab5dc",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/isometric-skyline/1x1-duration-600-frame-599.png",
                "sha256": "600f57baacfd33f3b086b6490dfce6363e867e561dea5034e349f6332bbab5dc",
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
        "note": "titleMatches: The images begin with extruded bar shapes on a ground plane, labeled as 'Explore', 'Make', and 'Share', matching the expected content. The motion samples (images 2-4) visually narrate the 'rise' and 'assemble' verbs: the bars are seen as separate planes at rest, then they grow/rise up, supporting the title 'Metric Skyline Rise'.\n\nnoBakedHeading: There is no decorative or extraneous block title/language/branding label present in any frame. All visible headings (numbers, labels) directly reflect named-slot content ('Explore', 'Make', 'Share' and their values), and there are no unexplained headings.\n\nbrandAdherence: The last three images show the same poster design under three color palettes. All swatches are visibly applied: first palette with tan and green, second with blue/green on dark, third with green/blue on light green. Legibility is maintained and all major surfaces change color without unexplained block colors or palette mismatches. Brand material (cube shapes, shading, type) is preserved.\n\nlanguageAdherence: All views follow the language card: extruded solid blocks, a common ground, face shading with the brand palette, parallel projection, sans-serif typography (matching display/body roles), tabular numerals, and no floating or unanchored labels. Motion verbs (rise, assemble) and fixed camera rules are respected through the sequence."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 29,
        "compared": 29,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "d4ab9185a57b0c7fbb0d69071fd62ab1912d6f237e292072b47cd8c6ab34f91a",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T22:37:02.610Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "isometric-skyline",
      "vsPositive": 0.7083333333333334,
      "vsNegative": 0.9583333333333334,
      "fakeVotes": 0.0625,
      "perModel": {
        "claude": {
          "vsPositive": 0.75,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.875,
          "vsNegative": 0.875
        },
        "gemini": {
          "vsPositive": 0.5,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "603fb5a643e1c05c8cb8cd5bc98fe763806aa1a5e428f055ed3358a095f9c869",
      "bundleSha256": "d4ab9185a57b0c7fbb0d69071fd62ab1912d6f237e292072b47cd8c6ab34f91a",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/isometric-skyline/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/isometric-skyline/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/isometric-skyline/16x9/detail.mp4",
      "bg": "#f2f0e6",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "98cfde0a0b2c5a05cece4751e4fd5594255eef1d315a51c764feff865240f438",
        "loop": "80576a85f0f294f4020353aa9c7cd160b26c27bbaccefb0a81b9adf943f75c43",
        "detail": "b17a1fa200d97c197c9dfbf332e45b28c2a602e89a410c058a4aa20e1644cb71"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/isometric-skyline/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/isometric-skyline/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/isometric-skyline/9x16/detail.mp4",
      "bg": "#f2f0e6",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e21e54412f32bd11a0e1553858fdd12d860adc569baf59f46d0094a8c8733624",
        "loop": "af113f16e492f9c4dca8f10a4dca3d1d87b7fb3d04b7b12c84c87ff6ea88a082",
        "detail": "b8f1af07bacda0aa656798e989e63fd300cc37433166594126df6a41349438d2"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/isometric-skyline/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/isometric-skyline/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/isometric-skyline/1x1/detail.mp4",
      "bg": "#f2f0e6",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "deb8ca976700a1860140a22d178bcc495ca44a5b7c894c1bfa44024f913201b3",
        "loop": "26d5d0b5f7cdb6f87415ab4859619f831398f07a0c740b984ac823a738fc467a",
        "detail": "0bde18242ba9674eb25d10d76f725d748a8c4c71fa6ef0ad9fb0bf22d4ff6051"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d4ab9185a57b0c7fbb0d69071fd62ab1912d6f237e292072b47cd8c6ab34f91a/index.mjs",
    "sha256": "d4ab9185a57b0c7fbb0d69071fd62ab1912d6f237e292072b47cd8c6ab34f91a",
    "bytes": 160505,
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
    "at": "2026-10-09T22:41:35.399Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
