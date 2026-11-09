// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "editorial",
  "mechanic": [
    "portrait-push-name-reveal"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "portrait-push-name-reveal",
    "instructor",
    "speaker",
    "portrait",
    "course"
  ],
  "engines": {
    "remotion": ">=4.0.533 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 90,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 81,
      "out": 0
    },
    "markers": {
      "settled": 81
    },
    "beats": [
      0,
      20,
      41,
      61,
      81
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
    "preset": "full",
    "backdrop": [
      "paintBackground"
    ]
  },
  "slots": [
    {
      "key": "name",
      "type": "text",
      "maxChars": 22,
      "role": "name"
    },
    {
      "key": "role",
      "type": "text",
      "maxChars": 80,
      "role": "body"
    },
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 24,
      "role": "kicker"
    },
    {
      "key": "brand",
      "type": "text",
      "maxChars": 18,
      "role": "label"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.serif",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "portrait-push-name-reveal",
      "prop": "transform",
      "from": "enter",
      "settledBy": 81,
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
      180
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/launch-videos-2026-10-06/README.md"
  },
  "defaults": {
    "ink": "#F7EAD9",
    "accent": "#FFB36B",
    "secondary": "#7A3D8F",
    "paper": "#1C1024",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "name": "Lena Moravec",
    "role": "Teaches Data Storytelling. Ex-lead analyst, 12 years at Halden Labs.",
    "kicker": "meet your instructor",
    "brand": "Brightwell"
  },
  "fields": [
    {
      "key": "ink",
      "label": "Ink",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "accent",
      "label": "Accent",
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
      "key": "paper",
      "label": "Paper",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "displayFont",
      "label": "Display font",
      "type": "font",
      "brand": "fonts.serif"
    },
    {
      "key": "bodyFont",
      "label": "Body font",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFont",
      "label": "Mono font",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "paintBackground",
      "label": "Paint background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 22,
      "role": "name"
    },
    {
      "key": "role",
      "label": "Role",
      "type": "text",
      "max": 80,
      "role": "body"
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 24,
      "role": "kicker"
    },
    {
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 18,
      "role": "label"
    }
  ],
  "name": "Meet The Instructor",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-edu-instructor",
    "bundleSha256": "6b09639161fdab856ef00b98ce471748c1a7d18c39793fee371d84b64ad46dff",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:09:49.782Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/16x9-paper.png",
        "sha256": "8fbf8cdf708a9bf80c9502e54b60b9c3dffa910058f8dc47041ec85ae426dad1"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/16x9-night.png",
        "sha256": "49772bd203610e1c4c58037961fa11cb4e4dac84a02adc37d5f648fbd24067f3"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/16x9-color.png",
        "sha256": "59d86c91624f484f52e2f5e0470ffe6a412ad1f4a76b26c3bf104c1371f493f7"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/9x16-paper.png",
        "sha256": "ea49c23335a6a9093e5e937528e66370d3bf8726881283ea2d4eaff6febecceb"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/9x16-night.png",
        "sha256": "f6ee06f80d7fca96aaab580bb4b1bcdd013abf4c70e4a1dec6bfd65526410de7"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/9x16-color.png",
        "sha256": "9e8a2dfecf6cb44b9cd3d2de7ba22cd96249b789a8bfdc71f49bf271450334c5"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/1x1-paper.png",
        "sha256": "7003a4e7ce835239b6f517dceaad854cd691ae42a648629d24c073ff21dafa40"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/1x1-night.png",
        "sha256": "3dbf2b0aa08ca7f9067b5b02d3b01d69e5591a1a996b7b5470877cbdf539ae4f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/1x1-color.png",
        "sha256": "72fd57b23a085c64909395ebae561cddd6faf0f2e5e4ecb760bb02ebb17e00b7"
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
          "mg-edu-instructor--16x9",
          "mg-edu-instructor--9x16",
          "mg-edu-instructor--1x1"
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
            "paperNight": 46.37226019965278,
            "paperColor": 21.37934027777778,
            "region": {
              "left": 57,
              "top": 80,
              "width": 1773,
              "height": 966
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 50.588134765625,
            "paperColor": 27.822645399305557,
            "region": {
              "left": 48,
              "top": 61,
              "width": 984,
              "height": 1689
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 39.18926323784722,
            "paperColor": 23.673231336805557,
            "region": {
              "left": 39,
              "top": 52,
              "width": 987,
              "height": 1002
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
            "occupancy": 1.166621886022928,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.166621886022928,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1705832506613758,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1359028565129758,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1359028565129758,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0847905906189639,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.201652214383696,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.201652214383696,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.201652214383696,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.635199652777778,
        "frames": [
          12,
          81,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 5.830837673611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/16x9-duration-90-frame-10.png",
                "sha256": "d64a4eb6c754fe500e64243bdcf3e7d90291d4f89ef6e4b8867280f0114e444e",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/16x9-duration-90-frame-81.png",
                "sha256": "a9bfe18f794330206009e1afe8fa070d67598ea89e666e7dffdaa7c85e61f981",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/16x9-duration-90-frame-79.png",
                "sha256": "a9bfe18f794330206009e1afe8fa070d67598ea89e666e7dffdaa7c85e61f981",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/16x9-duration-90-frame-89.png",
                "sha256": "a9bfe18f794330206009e1afe8fa070d67598ea89e666e7dffdaa7c85e61f981",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 5.635199652777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/16x9-duration-900-frame-12.png",
                "sha256": "73ee730a2dfa192a216341aa01978cb43d1044ef8da4f2233fa8f65a97a61524",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/16x9-duration-900-frame-81.png",
                "sha256": "a9bfe18f794330206009e1afe8fa070d67598ea89e666e7dffdaa7c85e61f981",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/16x9-duration-900-frame-792.png",
                "sha256": "a9bfe18f794330206009e1afe8fa070d67598ea89e666e7dffdaa7c85e61f981",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/16x9-duration-900-frame-899.png",
                "sha256": "a9bfe18f794330206009e1afe8fa070d67598ea89e666e7dffdaa7c85e61f981",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 6.559678819444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/9x16-duration-90-frame-10.png",
                "sha256": "4097f7c40a913caa3d85e11a9292d92244b58a5ebd3bf56391ed8857831edf8a",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/9x16-duration-90-frame-81.png",
                "sha256": "753521aefe21420144d6f7923355990cb0f3bed36aa5b9eb163eeef2d7fea88f",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/9x16-duration-90-frame-79.png",
                "sha256": "753521aefe21420144d6f7923355990cb0f3bed36aa5b9eb163eeef2d7fea88f",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/9x16-duration-90-frame-89.png",
                "sha256": "753521aefe21420144d6f7923355990cb0f3bed36aa5b9eb163eeef2d7fea88f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 6.351128472222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/9x16-duration-900-frame-12.png",
                "sha256": "7d880e61f9acc6243fdd7e1197e56620cbbb8174e22a446b04845165baf445a5",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/9x16-duration-900-frame-81.png",
                "sha256": "753521aefe21420144d6f7923355990cb0f3bed36aa5b9eb163eeef2d7fea88f",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/9x16-duration-900-frame-792.png",
                "sha256": "753521aefe21420144d6f7923355990cb0f3bed36aa5b9eb163eeef2d7fea88f",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/9x16-duration-900-frame-899.png",
                "sha256": "753521aefe21420144d6f7923355990cb0f3bed36aa5b9eb163eeef2d7fea88f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 5.922743055555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/1x1-duration-90-frame-10.png",
                "sha256": "4e23e0ab505423ac2f3d6031051ea511aff570c79ec56eb4697bf2cb2a480e7d",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/1x1-duration-90-frame-81.png",
                "sha256": "7441769a32527b9a52db09dbefddec9071530aab6505504d76eb427db265a14b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/1x1-duration-90-frame-79.png",
                "sha256": "7441769a32527b9a52db09dbefddec9071530aab6505504d76eb427db265a14b",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/1x1-duration-90-frame-89.png",
                "sha256": "7441769a32527b9a52db09dbefddec9071530aab6505504d76eb427db265a14b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 5.707899305555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/1x1-duration-900-frame-12.png",
                "sha256": "ccc9c28e40a5562d0d737eeb106dbcf51e6b4b70c22df08d1bd398d490bf8d3f",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/1x1-duration-900-frame-81.png",
                "sha256": "7441769a32527b9a52db09dbefddec9071530aab6505504d76eb427db265a14b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/1x1-duration-900-frame-792.png",
                "sha256": "7441769a32527b9a52db09dbefddec9071530aab6505504d76eb427db265a14b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-instructor/1x1-duration-900-frame-899.png",
                "sha256": "7441769a32527b9a52db09dbefddec9071530aab6505504d76eb427db265a14b",
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
        "note": "Instructor portrait beside a serif name, bio and stats; everything fits in every brand."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 63,
        "compared": 63,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "6b09639161fdab856ef00b98ce471748c1a7d18c39793fee371d84b64ad46dff",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.092Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-instructor/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-instructor/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-instructor/16x9/detail.mp4",
      "bg": "#291632",
      "posterFrame": 81,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "68f05b85371b0f185e12f5f7773dc7b2cbaaee3b92b63695bde95f68266477ea",
        "loop": "ab6bad53d72da46d5327c8c494884f1ce14fab9849801f131935f386bf513377",
        "detail": "c023e7bdcef4bc36a65b2c87d2eb4ba2e469672926161036d81672aaa3c90145"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-instructor/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-instructor/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-instructor/9x16/detail.mp4",
      "bg": "#291632",
      "posterFrame": 81,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7c0c4c1b7c93a46de9f2542b5b9e54a0e81fce15f4e0a59f6740e72c91537c00",
        "loop": "520c8bf367289d926ad9a6b4f4899e8f42ed4f70f770db9712a6a7b59b84fbab",
        "detail": "7c778c79530f567f825449d983765d7e6b9b37a66c60aa5d01741110a9048806"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-instructor/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-instructor/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-instructor/1x1/detail.mp4",
      "bg": "#291632",
      "posterFrame": 81,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e2e84c6d58095ac85c208a23ee430065f2bab3839b99bdf365a97a8968e5af62",
        "loop": "69962c3c6b8784a28b61631bc875a949ea15c007b4bed960d3db0ca8709842fa",
        "detail": "83c7e1887ec7dadc2741ea5ad5cd60df491b01f1c40cede4afd7789e8bdda943"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/6b09639161fdab856ef00b98ce471748c1a7d18c39793fee371d84b64ad46dff/index.mjs",
    "sha256": "6b09639161fdab856ef00b98ce471748c1a7d18c39793fee371d84b64ad46dff",
    "bytes": 287729,
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
    "at": "2026-10-09T07:16:37.746Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
