// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "aura",
  "mechanic": [
    "growth"
  ],
  "energy": "calm",
  "tags": [
    "differential growth",
    "generative",
    "organic",
    "coral",
    "line art",
    "title",
    "headline",
    "reveal",
    "canvas"
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
      "in": 132,
      "out": 0
    },
    "markers": {
      "settled": 132,
      "grow": 14,
      "reveal": 96
    },
    "beats": [
      0,
      14,
      60,
      96,
      132
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
      "key": "headline",
      "type": "text",
      "maxChars": 60,
      "lines": 3,
      "role": "headline"
    }
  ],
  "brand": {
    "color": "colors.text",
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "line",
      "prop": "growth",
      "from": "center",
      "settledBy": 124,
      "easing": "ease"
    },
    {
      "target": "headline",
      "prop": "opacity",
      "settledBy": 132,
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
    "sourceUrl": "21st first-party (one closed line grows into brain-coral folds around a headline window, 2026-10-08)"
  },
  "defaults": {
    "headline": "Every idea starts small",
    "color": "#F6EFE6",
    "primary": "#FF6F59",
    "secondary": "#FFC2A8",
    "background": "#0D1A14",
    "fontFamily": "Instrument Serif",
    "seed": 7
  },
  "fields": [
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 60,
      "role": "headline"
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
      "brand": "fonts.heading"
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 99
    }
  ],
  "name": "Differential Growth",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "differential-growth-frame",
    "bundleSha256": "fd0900a97d129589f5bafb5fdf7030cdc94d1d1e6c8bff7cb88c30b0000a67f6",
    "sourceSnapshot": {
      "sha256": "ccd08006707f6d7c92845ecde6107de05f61af512563f95fe5563462a1c4bf2b",
      "files": 1769
    },
    "renderedAt": "2026-10-09T06:54:12.207Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/16x9-paper.png",
        "sha256": "f80a9895c3b0532195ddde7de8ccb5dc97781ff39d5fc29aa9bd70088d0b6de0"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/16x9-night.png",
        "sha256": "c19baba921d2030b63fe4c44078025c960deb725639af394b59babcf7bea04db"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/16x9-color.png",
        "sha256": "73b7f06bc7926ced0d7e2533fee229b23413254661e10a394e7d34c752bf61a3"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/9x16-paper.png",
        "sha256": "28764de0e28801feddb97e2e828831b847021735170dfe298ded5999f83b7aea"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/9x16-night.png",
        "sha256": "5166113334478b555bf76dde2f825abbaaa0aee7c95184d3f896e220cadf0986"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/9x16-color.png",
        "sha256": "fa822d80a86744a8afe3984aa8988f95aad524135e33351d352b29bc40d8b7ff"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/1x1-paper.png",
        "sha256": "8f19997c7f23cd2b0319cbce9d5d33b55386b4d1a18023a0ef1767e014cb53ae"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/1x1-night.png",
        "sha256": "fc0d90bb1ea8886162ce5bf47908cf54b764827a62f3a4bef0b83a34bdc11c11"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/1x1-color.png",
        "sha256": "b4224cd4c5e92a7d848e29bc50b925e45ff471002c89ebba680a3b19ff29f991"
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
          "differential-growth-frame--16x9",
          "differential-growth-frame--9x16",
          "differential-growth-frame--1x1"
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
            "paperNight": 34.690945095486114,
            "paperColor": 20.31708441840278,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1920,
              "height": 1080
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 34.74498155381944,
            "paperColor": 21.41921657986111,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1920
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 38.434407552083336,
            "paperColor": 22.66655815972222,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1080
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
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 36.680338541666664,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 36.87391493055556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/16x9-duration-150-frame-18.png",
                "sha256": "afc922e8e87dd75a875cca79754ce4159774d13376a18aa4ad2e3a4ae741c6d2",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/16x9-duration-150-frame-132.png",
                "sha256": "45dc00054b002735d96d504003fa68d9429ab3bf97b5e3a68d3cc856c9a4345d",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/16x9-duration-150-frame-149.png",
                "sha256": "04154a10d105e80be8749327908f344be7263d9a9fdce237220c6ee0936e61e1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 36.680338541666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/16x9-duration-600-frame-19.png",
                "sha256": "757049ca36e99076b5670f0876f42150cf6ec336d1b6bb4d00afc042124e9cb5",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/16x9-duration-600-frame-132.png",
                "sha256": "45dc00054b002735d96d504003fa68d9429ab3bf97b5e3a68d3cc856c9a4345d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/16x9-duration-600-frame-528.png",
                "sha256": "0c13ad0da1ad6e8889beadfc8e0cf12fd5ed0829b6daa528cfe58e6a153853c8",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/16x9-duration-600-frame-599.png",
                "sha256": "d73c42a5f3fcca4e06cd1b3df363ff62f41bd85a0672d00cb755264db24ea0e6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 38.080729166666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/9x16-duration-150-frame-18.png",
                "sha256": "c8b93eb986fd333a2afea9922eb28e9383adcbd0f98b96c3a458d071e911a421",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/9x16-duration-150-frame-132.png",
                "sha256": "e93e5680e6eb62d51806b7a498bc6b4a2c68b8cf8d02c786f46526028936ffba",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/9x16-duration-150-frame-149.png",
                "sha256": "e10f032717f9bd8ca252c5ca0b52925923642c8857d2cba3f37164226bdce52c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 37.763997395833336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/9x16-duration-600-frame-19.png",
                "sha256": "40fc3e6090661a026b14fe749d422e9b5e4b11b514e34537b927f50841505bcf",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/9x16-duration-600-frame-132.png",
                "sha256": "e93e5680e6eb62d51806b7a498bc6b4a2c68b8cf8d02c786f46526028936ffba",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/9x16-duration-600-frame-528.png",
                "sha256": "b18ab509fe7d67f7938efcf4ccb9ec64f65746fcc2e56e5fcdeffe4bf7111ede",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/9x16-duration-600-frame-599.png",
                "sha256": "9592d3d62d82dde4dece3042ce7ba5d1236123253207daf35bbe4a611ec40179",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 35.202907986111114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/1x1-duration-150-frame-18.png",
                "sha256": "355955db9f9846838e3504b6f6f7411e712bcde4f2ded2b594a64caf8aaf6cd5",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/1x1-duration-150-frame-132.png",
                "sha256": "8881d50f7769514f090d16df4f03fcd4117b25590dbe5893207e3cc01aa46278",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/1x1-duration-150-frame-149.png",
                "sha256": "3e5f38001895a28f365c4f540e227da9b3c55b139809a5e15c07edde2c86ec30",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 34.96104600694444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/1x1-duration-600-frame-19.png",
                "sha256": "97e00edac82978b5816865b189da22717334a7c42b70eda741853dd6e2fa9aa4",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/1x1-duration-600-frame-132.png",
                "sha256": "8881d50f7769514f090d16df4f03fcd4117b25590dbe5893207e3cc01aa46278",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/1x1-duration-600-frame-528.png",
                "sha256": "8d39d5c102379ddf6fe6cc0813be85d8f5be9fde665202d7a69145d5303a8011",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/0081fbaf-12ff-4568-b68e-668265e72f5f/scratchpad/pubwt/packages/video-kit/out/catalog-gates-craft-20261008-235311/differential-growth-frame/1x1-duration-600-frame-599.png",
                "sha256": "2dfb0ce01473f65dbeec29b27890f98cbe4a5cedcb8c1ece32bc34f81014d3e6",
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
        "note": "The title 'Differential Growth' is supported by the visual subject, which is an organic, intricate growth pattern expanding outward in the motion samples. This visually corresponds to the idea of growth and the subtitle 'Every idea starts small' aligns with the subject matter. There is a clear distinction between the editable headline text and the background pattern, with no decorative block title or language heading baked into the design, only the editable headline slot used appropriately. The three rebranded images (images 5-7) show consistent legibility, appropriate color usage with supplied brand palettes, and no unexplained static block colors. The foreground patterns and text colors change as per the palettes while retaining their form and material. The visible typefaces appear consistent with the language card specification for sans display and body fonts, tabular numerals, and the material and lighting fit the description of continuous soft light fields and diffused atmospheric gradients. The slow field drift motion and subject legibility are maintained without blurred foreground copy or unrelated rainbow palettes. Therefore, all four checks (titleMatches, noBakedHeading, brandAdherence, languageAdherence) are true."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 45,
        "compared": 45,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "fd0900a97d129589f5bafb5fdf7030cdc94d1d1e6c8bff7cb88c30b0000a67f6",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T06:55:28.487Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/differential-growth-frame/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/differential-growth-frame/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/differential-growth-frame/16x9/detail.mp4",
      "bg": "#111d17",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "42cc78bef4acd85224abc1c2866c5c4f9452b37f7b8bb58f273113342c68058f",
        "loop": "219d8c33082c27f60b958465b22f7cab51150d68432fede7f4ab5c7b17aa4d11",
        "detail": "c308ce6cc4395f4443ce84a92a066f9aeb7bfd40005a4ab7e0372b63e3a4f29c"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/differential-growth-frame/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/differential-growth-frame/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/differential-growth-frame/9x16/detail.mp4",
      "bg": "#1c211a",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "72b30d7a5a40b216bc3f2cc47c40c8f2e6ab58b04e8420fb111a632e5ebf76ab",
        "loop": "5c0795d46d20ed4897245d9ec413d226e85c675069859ee5bc6b829f00d14f3f",
        "detail": "fc6625b3a4b54dbc186e83d903252371d3fc49a9e7cd2268d1bb64262097bd6b"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/differential-growth-frame/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/differential-growth-frame/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/differential-growth-frame/1x1/detail.mp4",
      "bg": "#41342b",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0afc9a76bbfc93c224f7a533955c1b377708e893d207c557af21af621d15a292",
        "loop": "adbb58f339efd4ab5c0b98758da5e16a5c0470c0c1c7547e47e36e30c06d52e1",
        "detail": "d1b02505eedb01d93fbb518c1fa31a33e98c3773c7e9bdefe17d63070731a481"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/fd0900a97d129589f5bafb5fdf7030cdc94d1d1e6c8bff7cb88c30b0000a67f6/index.mjs",
    "sha256": "fd0900a97d129589f5bafb5fdf7030cdc94d1d1e6c8bff7cb88c30b0000a67f6",
    "bytes": 169611,
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
    "at": "2026-10-09T06:58:12.582Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
