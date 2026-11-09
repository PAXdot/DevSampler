// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "editorial",
  "mechanic": [
    "connect"
  ],
  "tags": [
    "logo",
    "logo reveal",
    "constellation",
    "night sky",
    "astronomy",
    "stars",
    "connect the dots",
    "line drawing",
    "editorial",
    "opener",
    "brand"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 210,
      "min": 170,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 165,
      "out": 0
    },
    "markers": {
      "settled": 165,
      "stars": 12,
      "connect": 52,
      "close": 118
    },
    "beats": [
      0,
      12,
      52,
      118,
      165
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
      "key": "eyebrow",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "eyebrow"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 40,
      "lines": 2,
      "role": "headline"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.serif",
    "monoFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "sky",
      "prop": "rotation",
      "from": "turned",
      "settledBy": 160,
      "easing": "ease"
    },
    {
      "target": "stars",
      "prop": "opacity",
      "from": "dark",
      "settledBy": 70,
      "easing": "spring"
    },
    {
      "target": "lines",
      "prop": "draw",
      "from": "first star",
      "settledBy": 118,
      "easing": "ease"
    },
    {
      "target": "figure",
      "prop": "opacity",
      "from": "hidden",
      "settledBy": 150,
      "easing": "ease"
    },
    {
      "target": "logo",
      "prop": "opacity",
      "from": "engraved",
      "settledBy": 152,
      "easing": "ease"
    },
    {
      "target": "title",
      "prop": "reveal",
      "from": "center",
      "settledBy": 165,
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
      210
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (stars brighten and lines draw the logo as a constellation, then the brand-colored logo inks in as the hero, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "eyebrow": "",
    "title": "A new north star",
    "primary": "#7C3AED",
    "secondary": "#F472B6",
    "color": "#1E1036",
    "background": "#F5F0FF",
    "density": 1,
    "grid": true,
    "grain": true,
    "fontFamily": "Instrument Serif",
    "monoFamily": "Geist Mono"
  },
  "fields": [
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo"
    },
    {
      "key": "eyebrow",
      "label": "Eyebrow",
      "type": "text",
      "max": 32,
      "role": "eyebrow"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 40,
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
      "key": "density",
      "label": "Density",
      "type": "number",
      "min": 0.5,
      "max": 1.5
    },
    {
      "key": "grid",
      "label": "Grid",
      "type": "boolean"
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
      "brand": "fonts.serif"
    },
    {
      "key": "monoFamily",
      "label": "Mono family",
      "type": "font",
      "brand": "fonts.mono"
    }
  ],
  "name": "Constellation Logo",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "constellation-logo",
    "bundleSha256": "e002acea609509c69cd3c50e68a8308bd52a4d87e2cb250ef07de948a6bdb306",
    "sourceSnapshot": {
      "sha256": "22c3646f894c097d81b062c3f1a3835236d1899cdd1b233897adb47db79ad625",
      "files": 1995
    },
    "renderedAt": "2026-10-09T19:27:51.619Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/16x9-paper.png",
        "sha256": "eb36e4c5fb1c7b7f70f9a568ad2846b4e30e883efbf037b7320fdef29f7ac69d"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/16x9-night.png",
        "sha256": "62a0eb368819ae0e48ff8a6c79d54c58d2a5b08cec1f5f84c446e8ca6d51a5c7"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/16x9-color.png",
        "sha256": "66d016902678070d061f68a493c28380a592ba92b94ae96925bf2780a0318502"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/9x16-paper.png",
        "sha256": "6c910711e6109a1ce45f1703343deab22535d891c2fa09c4806adfd2e2ef3ffb"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/9x16-night.png",
        "sha256": "c33022a99ee538cad132d0e7bd5f8e0d73373f0c07ad9c93a02836ac4e03f96c"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/9x16-color.png",
        "sha256": "68bbc2d74afeaf306eb8fc24f21972e2d94d138f652cb32efbb88593639a6a05"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/1x1-paper.png",
        "sha256": "e6293f356bf4d98eff879ae3fced80ccf05ba8434e817f2e0bcf41b9413ffc88"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/1x1-night.png",
        "sha256": "973d0d24991a92b47dd0cbdc0b9a80e719309773b5726af5eb10f61c08a62b22"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/1x1-color.png",
        "sha256": "9a80832ff068e567caa9ce17c22c9001bae250b1bf369c0d88b891a9d2e3a1b9"
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
          "constellation-logo--16x9",
          "constellation-logo--9x16",
          "constellation-logo--1x1"
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
            "paperNight": 17.9501953125,
            "paperColor": 11.779703776041666,
            "region": {
              "left": 16,
              "top": 11,
              "width": 1904,
              "height": 1069
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 19.491536458333332,
            "paperColor": 14.03708224826389,
            "region": {
              "left": 13,
              "top": 24,
              "width": 1065,
              "height": 1896
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 18.119493272569443,
            "paperColor": 14.38381618923611,
            "region": {
              "left": 5,
              "top": 20,
              "width": 1075,
              "height": 1051
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
            "occupancy": 1.3618838095937966,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3911087840485992,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3618838095937966,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3800803886369366,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3800803886369366,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3800803886369366,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3727931301693062,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3727931301693062,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3727931301693062,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 14.047743055555555,
        "frames": [
          24,
          165,
          209
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 170,
            "averageChannelDifference": 14.300130208333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/16x9-duration-170-frame-20.png",
                "sha256": "78757546ef9c01f82058cd548dad690ca6ef8258352c393888b3a335effbff3f",
                "alphaMass": 587520
              },
              {
                "frame": 165,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/16x9-duration-170-frame-165.png",
                "sha256": "1e797e648fdb13ccf9b92e756cad5a073c514087def287e6cfc0254a713e0869",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/16x9-duration-170-frame-149.png",
                "sha256": "078721a0b08e21bf57549b8815865abe03c93cc54214d3a01b526cb3a5a45e09",
                "alphaMass": 587520
              },
              {
                "frame": 169,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/16x9-duration-170-frame-169.png",
                "sha256": "1e797e648fdb13ccf9b92e756cad5a073c514087def287e6cfc0254a713e0869",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 14.047743055555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 24,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/16x9-duration-600-frame-24.png",
                "sha256": "5ff91bd8e7ec3a7579ab40a7ee316cf46821eb6c582c8a2f2c190bd114dba8ed",
                "alphaMass": 587520
              },
              {
                "frame": 165,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/16x9-duration-600-frame-165.png",
                "sha256": "1e797e648fdb13ccf9b92e756cad5a073c514087def287e6cfc0254a713e0869",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/16x9-duration-600-frame-528.png",
                "sha256": "1e797e648fdb13ccf9b92e756cad5a073c514087def287e6cfc0254a713e0869",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/16x9-duration-600-frame-599.png",
                "sha256": "1e797e648fdb13ccf9b92e756cad5a073c514087def287e6cfc0254a713e0869",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 170,
            "averageChannelDifference": 16.776041666666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/9x16-duration-170-frame-20.png",
                "sha256": "7a93f6ff6e5b8b3466d7caf74ca83b98c02b187836b50d8701e21820f0614a07",
                "alphaMass": 587520
              },
              {
                "frame": 165,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/9x16-duration-170-frame-165.png",
                "sha256": "0ef5974c460aa493a0b394a42640039038aeee0e861a69b8e432be8cc399dc40",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/9x16-duration-170-frame-149.png",
                "sha256": "a568faf34168bf8584b91785883eafa23664511b92926e522e1e739ca2d94497",
                "alphaMass": 587520
              },
              {
                "frame": 169,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/9x16-duration-170-frame-169.png",
                "sha256": "0ef5974c460aa493a0b394a42640039038aeee0e861a69b8e432be8cc399dc40",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 16.55251736111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 24,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/9x16-duration-600-frame-24.png",
                "sha256": "825850909604caac5b6034c680233700e2c43842376fd8eb7d9050edfd86d949",
                "alphaMass": 587520
              },
              {
                "frame": 165,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/9x16-duration-600-frame-165.png",
                "sha256": "0ef5974c460aa493a0b394a42640039038aeee0e861a69b8e432be8cc399dc40",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/9x16-duration-600-frame-528.png",
                "sha256": "0ef5974c460aa493a0b394a42640039038aeee0e861a69b8e432be8cc399dc40",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/9x16-duration-600-frame-599.png",
                "sha256": "0ef5974c460aa493a0b394a42640039038aeee0e861a69b8e432be8cc399dc40",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 170,
            "averageChannelDifference": 18.54275173611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/1x1-duration-170-frame-20.png",
                "sha256": "d447ce50f670badba2016b293f46d3621ec2fe3551c191ea8a355e209576a01d",
                "alphaMass": 587520
              },
              {
                "frame": 165,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/1x1-duration-170-frame-165.png",
                "sha256": "540316ddabfb00a683de4784c9fccba53b929d8861a9dbea31021bede2cc07d8",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/1x1-duration-170-frame-149.png",
                "sha256": "f539e58bfc75f6a77fb67879ed8558137a6a1ca734ee5aceb9f6b5b13f11dd9a",
                "alphaMass": 587520
              },
              {
                "frame": 169,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/1x1-duration-170-frame-169.png",
                "sha256": "540316ddabfb00a683de4784c9fccba53b929d8861a9dbea31021bede2cc07d8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 18.215928819444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 24,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/1x1-duration-600-frame-24.png",
                "sha256": "c85fe0ed64a96b8a61e9c6671d44fbad1a1f8df4000aef6b1dc1744b434e3e7f",
                "alphaMass": 587520
              },
              {
                "frame": 165,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/1x1-duration-600-frame-165.png",
                "sha256": "540316ddabfb00a683de4784c9fccba53b929d8861a9dbea31021bede2cc07d8",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/1x1-duration-600-frame-528.png",
                "sha256": "540316ddabfb00a683de4784c9fccba53b929d8861a9dbea31021bede2cc07d8",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/constellation-logo/1x1-duration-600-frame-599.png",
                "sha256": "540316ddabfb00a683de4784c9fccba53b929d8861a9dbea31021bede2cc07d8",
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
        "note": "1. TitleMatches: The sequence of images supports the title 'Constellation Logo'—the motion images show stars forming into a constellation, then a geometric logo shape surrounded by star-like nodes, consistent with the development of a logo inspired by constellation structure. The final three palettes always display the same geometric logo with star points, consistent with the visual and structural claims and providing full cycle formation as per the title.\n2. NoBakedHeading: There are no decorative or unexplained block titles or labels baked into the composition. The only visible text is 'A new north star', matching the named-slot content and correctly placed as an editable heading. There are no extraneous labels, logos, or fixed language marks.\n3. BrandAdherence: All three rebrands (images 5-7) show the poster/logo under distinct palette treatments. The logo colors adjust according to the supplied palettes, including shape, fill, and accent (star points), while remaining legible and distinguishable on their backgrounds. There is no unexplained retention of previous block colors; each palette is applied appropriately.\n4. LanguageAdherence: Across all images, fine paper grain, rules, numbered details, and typefaces (serif for heading and numerals) match the described language card. There is no glow, glass, drop shadow, or gradient background. Layout, margin, and type roles are consistent in all exhibited palettes and motion stills."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 36,
        "compared": 36,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "e002acea609509c69cd3c50e68a8308bd52a4d87e2cb250ef07de948a6bdb306",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T19:39:06.553Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "constellation-logo",
      "vsPositive": 0.7916666666666666,
      "vsNegative": 0.875,
      "fakeVotes": 0.020833333333333332,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.625,
          "vsNegative": 0.875
        },
        "gemini": {
          "vsPositive": 0.75,
          "vsNegative": 0.75
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "27003383500553c84fb9359ba8efd1287fe3cd838804202bf32c85e24e9dd8b8",
      "bundleSha256": "e002acea609509c69cd3c50e68a8308bd52a4d87e2cb250ef07de948a6bdb306",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/constellation-logo/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/constellation-logo/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/constellation-logo/16x9/detail.mp4",
      "bg": "#f5f0ff",
      "posterFrame": 165,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "80f11620113768cc840e17aabd63aab21b860747108adba17b514556b8521a62",
        "loop": "283eccea7460b1854a2a3b8d847f9ba7b0ce72dae61d41f936b263a69422d1b2",
        "detail": "ec2b52f9e52e645343e80bd44eb1f3b39af07f832d0d8d75a064b4377598fcff"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/constellation-logo/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/constellation-logo/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/constellation-logo/9x16/detail.mp4",
      "bg": "#f5f0ff",
      "posterFrame": 165,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "e18e883b0201c110fca80e9758b14a6c6865ddb5e39ab9e66b392e8c2d002870",
        "loop": "2c8631eb7989fe5ac95391ef7078ba5f11665f60739607373e4fd587ece2a911",
        "detail": "cd4bc3e1aebfba38b7d50be01b0b1c87deab8b7cb2099d204dfbef255bcc30c7"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/constellation-logo/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/constellation-logo/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/constellation-logo/1x1/detail.mp4",
      "bg": "#f5f0ff",
      "posterFrame": 165,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "f61e4f5b580f687ac01f28b66cbf7dd0b9a4e42acd4cb1a87f51017f26a53e97",
        "loop": "d0e0d9618ff00a5de7e720e135caabb7c3c4d6de9636daa731aff292ac79afd7",
        "detail": "25187f73510920245b0e7794869a73df8d18736cd1f9bd6767cd702611b7754c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/e002acea609509c69cd3c50e68a8308bd52a4d87e2cb250ef07de948a6bdb306/index.mjs",
    "sha256": "e002acea609509c69cd3c50e68a8308bd52a4d87e2cb250ef07de948a6bdb306",
    "bytes": 180672,
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
    "at": "2026-10-09T19:52:18.877Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
