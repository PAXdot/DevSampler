// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "orbit"
  ],
  "energy": "default",
  "tags": [
    "title",
    "headline",
    "planet",
    "ring",
    "orbit",
    "space",
    "3d text",
    "perspective",
    "occlusion",
    "kinetic type",
    "opener",
    "launch"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 130,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 120,
      "out": 0
    },
    "markers": {
      "settled": 120,
      "dawn": 30,
      "open": 64
    },
    "beats": [
      0,
      30,
      64,
      120,
      140
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
      "maxChars": 32,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 28,
      "lines": 1,
      "role": "eyebrow"
    }
  ],
  "brand": {
    "color": "colors.text",
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "background": "colors.background",
    "fontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "planet",
      "prop": "light",
      "settledBy": 48,
      "easing": "ease"
    },
    {
      "target": "ring",
      "prop": "rotate",
      "settledBy": 120,
      "easing": "ease"
    },
    {
      "target": "ring",
      "prop": "tilt",
      "settledBy": 100,
      "easing": "spring"
    },
    {
      "target": "kicker",
      "prop": "y",
      "from": "below",
      "settledBy": 116,
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
      180
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (the headline is a planet's ring, spinning in perspective behind and in front of the planet, 2026-10-08)"
  },
  "defaults": {
    "text": "Ship faster",
    "kicker": "Introducing",
    "color": "#101828",
    "primary": "#2E5BFF",
    "secondary": "#00B37E",
    "background": "#EFF3F8",
    "fontFamily": "Geist",
    "turns": 1,
    "grain": true
  },
  "fields": [
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 32,
      "role": "headline"
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 28,
      "role": "eyebrow"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
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
      "brand": "fonts.body"
    },
    {
      "key": "turns",
      "label": "Turns",
      "type": "number",
      "min": 0.5,
      "max": 3
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    }
  ],
  "name": "Planet Ring Text",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "planet-ring-headline",
    "bundleSha256": "d5b1cbddcf3944bd877e5f5e3b00922ebd147e5c3cff5a519093e3a695f1e807",
    "sourceSnapshot": {
      "sha256": "40bd51d119bf7ee4ebdebf0c5a5cf3e861b724ade6d630e20d9914f0a4ce79bc",
      "files": 2022
    },
    "renderedAt": "2026-10-09T20:08:36.407Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/16x9-paper.png",
        "sha256": "9d7b4185a932558948c46a9b0f307d6b3b63ccbed576af315ba26ab6cf11870a"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/16x9-night.png",
        "sha256": "532cda302c2a1844614547e2c80c5967ddf7af1c7d288baaa73df379a4ef74e0"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/16x9-color.png",
        "sha256": "059818ba17b421217f4ba713acd6a985e785e6d61478c9cd94877aa17a779826"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/9x16-paper.png",
        "sha256": "d6aaed38c94c9de6a9fef01ac663b0f4883dd4f66511aaa603eec1a9dc4136b0"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/9x16-night.png",
        "sha256": "aa2bec5869001b04d62da76ad4ce2d7dde9307c52d6ce51fd7977e565e9e7fc2"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/9x16-color.png",
        "sha256": "adc1b7f6cafbeac67aae3e6112f349b4999250c2422445dfcf65140fcaeea821"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/1x1-paper.png",
        "sha256": "a81d4326a652fb09c67d1ec715f8c926f5da733a8f1945fc466c013ed41dbfff"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/1x1-night.png",
        "sha256": "8996b713d475a3be3e547bb690b0d79914d0c190029c1e7903df0c878ddc23e6"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/1x1-color.png",
        "sha256": "748e7839599b5490725e04d6b310883d894d30f957f6765d5c78cb15fb7b53b4"
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
          "planet-ring-headline--16x9",
          "planet-ring-headline--9x16",
          "planet-ring-headline--1x1"
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
            "paperNight": 56.15321180555556,
            "paperColor": 20.949571397569443,
            "region": {
              "left": 180,
              "top": 86,
              "width": 1576,
              "height": 894
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 43.85088433159722,
            "paperColor": 24.065321180555557,
            "region": {
              "left": 10,
              "top": 301,
              "width": 1070,
              "height": 1048
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 46.11089409722222,
            "paperColor": 21.132893880208332,
            "region": {
              "left": 55,
              "top": 97,
              "width": 986,
              "height": 810
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
            "occupancy": 0.9623532572751324,
            "bad": [],
            "measured": 18
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9629642752162596,
            "bad": [],
            "measured": 18
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9612767994929455,
            "bad": [],
            "measured": 19
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7664106023067665,
            "bad": [],
            "measured": 16
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7664106023067665,
            "bad": [],
            "measured": 16
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7656792944801379,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9704113126732176,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9704113126732176,
            "bad": [],
            "measured": 17
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9692132740155963,
            "bad": [],
            "measured": 17
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.425347222222221,
        "frames": [
          18,
          120,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 130,
            "averageChannelDifference": 9.457899305555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/16x9-duration-130-frame-15.png",
                "sha256": "5ff47fd057c34daf5f1871e338a29fe7a90ff6d4b1ea66371dcb852c4d25462d",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/16x9-duration-130-frame-120.png",
                "sha256": "f2d4a1bbe9647ef4565c218b02f565a1ae717e95c90d921f99c62a72aa88c4be",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/16x9-duration-130-frame-114.png",
                "sha256": "dccb17471c09a55314a67d1bacb1f0da768ddbb2f32a5e2a16cd40716312902e",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/16x9-duration-130-frame-129.png",
                "sha256": "157a8238f8e0ad9e32ab8da46ffc3dae44f2e5e54ed52bdb4a70336b96a1cefc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 9.425347222222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/16x9-duration-600-frame-18.png",
                "sha256": "429141af77a857cd51be02639d8eb4883138811c051b4765cf92d777a698771b",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/16x9-duration-600-frame-120.png",
                "sha256": "465e2fc06389d8b12654d9c33f6751998da675f47b06b43f0c1590a74305c00f",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/16x9-duration-600-frame-528.png",
                "sha256": "c1cacee5950ca111e8011951c5684321549349ea319ae3af76c3bc6e7db36694",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/16x9-duration-600-frame-599.png",
                "sha256": "bb843972e38d0eacce77c79782b5f2ec10c9fc5e11c7c8b4ca98f0f9e92283d8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 130,
            "averageChannelDifference": 6.531032986111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/9x16-duration-130-frame-15.png",
                "sha256": "165871e48af28f6b55b66f7df347cd7d67fadcbe36970199da036b188cfea842",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/9x16-duration-130-frame-120.png",
                "sha256": "144b8e14884051a0f17b5034689c20d5a28e1090d332a1694b19df590e11cd23",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/9x16-duration-130-frame-114.png",
                "sha256": "aec5e0c6f3756a35a8d2f53d7b55597cf503dee25eb59104b4b232abc39840a0",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/9x16-duration-130-frame-129.png",
                "sha256": "72ad784566bf56513e2b103aa70052b55c8d3e2621a09b3cad3a294cf7ff8469",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 6.379340277777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/9x16-duration-600-frame-18.png",
                "sha256": "a9d9955ea828d840507beed12d8b503ae13c4e2888946328a110293b3e457a8b",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/9x16-duration-600-frame-120.png",
                "sha256": "6695652cfe28210275e9875536dc3133e11ec899192be032cc031d8a057491c3",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/9x16-duration-600-frame-528.png",
                "sha256": "b28e19f1f6584b81fc90a9c97c37b426745f913a73243696adf24259205df4fd",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/9x16-duration-600-frame-599.png",
                "sha256": "d52651b0c28f33a6577e75cf7523474aa562082c221b7d7792a80f0df9a72db6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 130,
            "averageChannelDifference": 9.126953125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/1x1-duration-130-frame-15.png",
                "sha256": "a0f18271653e0a58f07fa7ba8a4a6043041ec1791667cdd6803f4c143d05b73d",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/1x1-duration-130-frame-120.png",
                "sha256": "d51bf4c548033a6f246d9b3e906dc1de08307255fc715dc593fea9600d77392e",
                "alphaMass": 587520
              },
              {
                "frame": 114,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/1x1-duration-130-frame-114.png",
                "sha256": "5af4a457da8ccec3ff9035284a7ad8bb3bfb1845bf999b01e6c3dc7c29bd8f59",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/1x1-duration-130-frame-129.png",
                "sha256": "b484d943cbe4222bf49e488321cf985d49ce2d30fdd3d758060557b31c9d5fca",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 9.098524305555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/1x1-duration-600-frame-18.png",
                "sha256": "9e0e575d8f3e47f0c0701ef3512f2ab50f9824bb725f3e8be6bb51fa2ae15e91",
                "alphaMass": 587520
              },
              {
                "frame": 120,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/1x1-duration-600-frame-120.png",
                "sha256": "0d2da10a2a0580da974e10351dadc4f80cb4711d8df48b072d081c3b8efc6ce8",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/1x1-duration-600-frame-528.png",
                "sha256": "a44a4e7a0bf4c3007060d45e4eb9da0c5b12011f72850f8afed608b2fecf9298",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/planet-ring-headline/1x1-duration-600-frame-599.png",
                "sha256": "53dd53318bfb31467d7a0158ffd1d236c4ccb858cb0e6f31a1170c627f0f953b",
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
        "note": "TitleMatches: The visible subject in the first image is a stylized planet with saturn-like rings, with large, orbiting text ('Ship faster') in oversized type, supporting the title 'Planet Ring Text.' The chronological samples (images 2-4) show the motion of the text assembling around the planet, further confirming compliance with the claimed effect. \n\nnoBakedHeading: There is no decorative or unexplained block-title or label baked into the artwork; only the editable heading ('Introducing') and primary content ('Ship faster') are present in all palettes, as expected per named slot content. \n\nBrandAdherence: The last three images apply three distinctly different background and accent colors, corresponding to the supplied palettes. All rebrands remain legible, all ink and accent roles adapt properly, and there are no unexplained fixed colors; the planet and ring design update their colors per palette, confirming adherence. \n\nLanguageAdherence: Oversized display type, flattened color fields, and consistent typographic roles are maintained throughout all states and palettes. The language card's requirements for type, mask movement, and absence of frosted glass or browser chrome are met. All images use sans-serif type, and accent marks and numerals match described usage."
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
      "bundleSha256": "d5b1cbddcf3944bd877e5f5e3b00922ebd147e5c3cff5a519093e3a695f1e807",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T20:24:37.665Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "planet-ring-headline",
      "vsPositive": 0.9166666666666666,
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
          "vsPositive": 0.75,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "0fc2ea9448fdb2d9bdaeae17ec625f395c916ffe5515b265c7f518c92ded507e",
      "bundleSha256": "d5b1cbddcf3944bd877e5f5e3b00922ebd147e5c3cff5a519093e3a695f1e807",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/planet-ring-headline/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/planet-ring-headline/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/planet-ring-headline/16x9/detail.mp4",
      "bg": "#eff3f8",
      "posterFrame": 120,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e0001280176934f89e55ead2efae39249a49c78f8f3df336be9386d09cee916c",
        "loop": "47b88dbd4438676ce39416a0fac02f1a3bc8cd9967c159e905a7cc182edba5b5",
        "detail": "061b9c01a30242859e386ec926ae8a01bd851c88af39642b69ce3b605c4dc167"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/planet-ring-headline/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/planet-ring-headline/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/planet-ring-headline/9x16/detail.mp4",
      "bg": "#eff3f8",
      "posterFrame": 120,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e5e6b2eb473aff7d75d9df53f94bdfc16ae441e76e54321515d057a597b68504",
        "loop": "ab4c86bf580d703e412f24f00a2b13e720be6f0b59869c731524562728c0638d",
        "detail": "131e7de23e1a8c354868a6d75160622c2088489f506e6b886f1244530643da2f"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/planet-ring-headline/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/planet-ring-headline/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/planet-ring-headline/1x1/detail.mp4",
      "bg": "#eff3f8",
      "posterFrame": 120,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f63ec9325ce2eb115971fff154eb448d03f460a067d23a5cb28ea1c6c177ec6d",
        "loop": "391c54c339e4317ed6d464f985b6db65d0ecca33845a9fdcb791944461620b2e",
        "detail": "d9ba1415007f15c1efe29a2aac3861427906111de1420ab01996d9d3108ab2d7"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d5b1cbddcf3944bd877e5f5e3b00922ebd147e5c3cff5a519093e3a695f1e807/index.mjs",
    "sha256": "d5b1cbddcf3944bd877e5f5e3b00922ebd147e5c3cff5a519093e3a695f1e807",
    "bytes": 174842,
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
    "at": "2026-10-09T20:34:59.671Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
