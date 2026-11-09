// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "speaker-shrinks-to-pip"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "speaker-shrinks-to-pip",
    "pip",
    "presenter",
    "screen-recording"
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
      "in": 132,
      "out": 0
    },
    "markers": {
      "settled": 132
    },
    "beats": [
      0,
      33,
      66,
      99,
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
    "preset": "full",
    "backdrop": [
      "paintBackground"
    ]
  },
  "slots": [
    {
      "key": "headline",
      "type": "text",
      "maxChars": 30,
      "role": "headline"
    },
    {
      "key": "value",
      "type": "text",
      "maxChars": 8,
      "role": "value"
    },
    {
      "key": "name",
      "type": "text",
      "maxChars": 18,
      "role": "name"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.display",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "speaker-shrinks-to-pip",
      "prop": "transform",
      "from": "enter",
      "settledBy": 132,
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
    "ink": "#E8EFEC",
    "accent": "#3EE0A1",
    "secondary": "#1F8FFF",
    "paper": "#0A0E0D",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "Weekly support digest",
    "value": "6.5h",
    "name": "Maya Okafor"
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
      "brand": "fonts.display"
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
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 30,
      "role": "headline"
    },
    {
      "key": "value",
      "label": "Value",
      "type": "text",
      "max": 8,
      "role": "value"
    },
    {
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 18,
      "role": "name"
    }
  ],
  "name": "Speaker To Picture In Picture",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-ppl-pip-switch",
    "bundleSha256": "4f684351514c43fcc0604ce8cfe17ebbc20577390a0f3666e46820a189350574",
    "sourceSnapshot": {
      "sha256": "1f6ce6492f581e3c8c64310c021d09e41636a62ca2784e1de4c2e9015f49ad94",
      "files": 1757
    },
    "renderedAt": "2026-10-08T18:32:37.026Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/16x9-paper.png",
        "sha256": "f48421f31b2c687f52f2d58ee4db6ffae2adcd219f1bd12fc3cea02e04ecdb8c"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/16x9-night.png",
        "sha256": "4f627022bde368ff08905fc127731ccd81f904f03687d9920ab6d7c11c9ba489"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/16x9-color.png",
        "sha256": "dc616741111405007b5e5951ac69eabef9a98be2d338d10675ac25c9ba3c924f"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/9x16-paper.png",
        "sha256": "e3ffe1ea721acd557ce5eb613d3934ca6e5be58b059e91f6b33e876ba321beff"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/9x16-night.png",
        "sha256": "1de31b8564f3335ea75270b7530b6944df39e41108bddfa3d70eb6c28c1e9595"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/9x16-color.png",
        "sha256": "8aa60c69d383a0e6a2cd8c65490ce7dd18af04c2e0a745120f58918c0a3ad393"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/1x1-paper.png",
        "sha256": "82c289c6e1df77acdbbb206bf4d4cc8116b91d9bc08f8eafaa82df47d0bbdc59"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/1x1-night.png",
        "sha256": "8f4b810199aa5f9e2925c62ccd42b8a6e9090dfcb91d4323ff162b3183e8e009"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/1x1-color.png",
        "sha256": "b9be593dcec7bf2c65b7df7e75bf49da21c3319042dae24f08e922c4e66914af"
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
          "mg-ppl-pip-switch--16x9",
          "mg-ppl-pip-switch--9x16",
          "mg-ppl-pip-switch--1x1"
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
            "paperNight": 6.767822265625,
            "paperColor": 3.5215386284722223,
            "region": {
              "left": 26,
              "top": 0,
              "width": 1894,
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
            "paperNight": 13.611626519097221,
            "paperColor": 9.69284396701389,
            "region": {
              "left": 86,
              "top": 137,
              "width": 970,
              "height": 1729
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 8.394178602430555,
            "paperColor": 4.577772352430555,
            "region": {
              "left": 15,
              "top": 0,
              "width": 1065,
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
            "occupancy": 1.3980418556311416,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3980418556311416,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3980418556311416,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1462600890407606,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1462600890407606,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1455971277399852,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.397549760644999,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.397549760644999,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.397549760644999,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 25.1416015625,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 25.1416015625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/16x9-duration-90-frame-10.png",
                "sha256": "cf00a6a2cac4358160f1a45071deba625a692626937bb73f6a982ab2c0e4f9cc",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/16x9-duration-90-frame-89.png",
                "sha256": "fe2bd3d1f26b1d4b55423014e549f59d0b3de75092d94e061015d3a8c4d159e1",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/16x9-duration-90-frame-79.png",
                "sha256": "fe2bd3d1f26b1d4b55423014e549f59d0b3de75092d94e061015d3a8c4d159e1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 25.1416015625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/16x9-duration-900-frame-19.png",
                "sha256": "1c18c4765d833c908d397c9fd3fab860eee6778875c4530148552b2ce87e0451",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/16x9-duration-900-frame-132.png",
                "sha256": "fe2bd3d1f26b1d4b55423014e549f59d0b3de75092d94e061015d3a8c4d159e1",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/16x9-duration-900-frame-792.png",
                "sha256": "fe2bd3d1f26b1d4b55423014e549f59d0b3de75092d94e061015d3a8c4d159e1",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/16x9-duration-900-frame-899.png",
                "sha256": "fe2bd3d1f26b1d4b55423014e549f59d0b3de75092d94e061015d3a8c4d159e1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 22.1376953125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/9x16-duration-90-frame-10.png",
                "sha256": "0edeb82f5c43a97383251ad07bcd23eb540cf512a0c21243d95c6c35129d311e",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/9x16-duration-90-frame-89.png",
                "sha256": "e51f50c3b534e4a7100cfcfd42e6606fbdb7460f7c6d300f048e803ae01481dd",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/9x16-duration-90-frame-79.png",
                "sha256": "e51f50c3b534e4a7100cfcfd42e6606fbdb7460f7c6d300f048e803ae01481dd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 22.13628472222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/9x16-duration-900-frame-19.png",
                "sha256": "70cce166847e9ab50a815be7961cb7011893ca9010dababbd80bf086cedb94c5",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/9x16-duration-900-frame-132.png",
                "sha256": "e51f50c3b534e4a7100cfcfd42e6606fbdb7460f7c6d300f048e803ae01481dd",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/9x16-duration-900-frame-792.png",
                "sha256": "e51f50c3b534e4a7100cfcfd42e6606fbdb7460f7c6d300f048e803ae01481dd",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/9x16-duration-900-frame-899.png",
                "sha256": "e51f50c3b534e4a7100cfcfd42e6606fbdb7460f7c6d300f048e803ae01481dd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 23.713216145833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/1x1-duration-90-frame-10.png",
                "sha256": "4964f5338a0c6a24f151e0a8516bd503b2add0c3708c17bceff6ad1b16369902",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/1x1-duration-90-frame-89.png",
                "sha256": "66c551a8f064b74169d4d8e11992dda087a2d4d91c9a188fd83e436d44a69d4c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/1x1-duration-90-frame-79.png",
                "sha256": "66c551a8f064b74169d4d8e11992dda087a2d4d91c9a188fd83e436d44a69d4c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 23.70974392361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/1x1-duration-900-frame-19.png",
                "sha256": "ffed5765d29c6c3aac6f666bae8a5522aa058d3a9f1eed84200260db9314c480",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/1x1-duration-900-frame-132.png",
                "sha256": "66c551a8f064b74169d4d8e11992dda087a2d4d91c9a188fd83e436d44a69d4c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/1x1-duration-900-frame-792.png",
                "sha256": "66c551a8f064b74169d4d8e11992dda087a2d4d91c9a188fd83e436d44a69d4c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-pip-switch/1x1-duration-900-frame-899.png",
                "sha256": "66c551a8f064b74169d4d8e11992dda087a2d4d91c9a188fd83e436d44a69d4c",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "product-ui",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Speaker shrinks into picture-in-picture over an agent run log; panels readable in every brand."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 53,
        "compared": 53,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "4f684351514c43fcc0604ce8cfe17ebbc20577390a0f3666e46820a189350574",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-08T19:02:07.523Z",
      "basis": "All 61 launch-video gallery prototypes go into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ppl-pip-switch/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ppl-pip-switch/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ppl-pip-switch/16x9/detail.mp4",
      "bg": "#0a0e0d",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a4e1d8f9b3d0785826f938c30cbc2c740a6508e766b8a4f01baa7d44c0776ae5",
        "loop": "2d58e06440c1295cf05c96e0532ab947780a5bdd1460a1758d688ddf60e9d3f6",
        "detail": "1b58361dda5010b513b5e880e9c94bf1fe9832746b12788052599dea4dc568de"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ppl-pip-switch/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ppl-pip-switch/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ppl-pip-switch/9x16/detail.mp4",
      "bg": "#0a0e0d",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5e36d00771c5fc5fd7257b64976920f945e400fc7ded2b11c8a1018b508515e9",
        "loop": "8c501e45633657e2ff822e31436cc4eb9772b431cfbed12671f6cc2ff9844bdb",
        "detail": "70feaeda0fd6a9a2ba745edb211d0ea3e4b32837aa2a93b852e745bef1f048aa"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ppl-pip-switch/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ppl-pip-switch/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ppl-pip-switch/1x1/detail.mp4",
      "bg": "#0a0e0d",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "bdc76c4f9ebc8eb8e38d4c6725e3d70bf2908b174688c837a104b5034a8cd04f",
        "loop": "d36198e61ee85b6f774509a6f7d7ee8e1f6efdf5166b8d62cc79bed3c08dc7ce",
        "detail": "95b9fea9524844d259c5cc79a0c39bf84eacf839bb7ca8981d82f7b76f073a46"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/4f684351514c43fcc0604ce8cfe17ebbc20577390a0f3666e46820a189350574/index.mjs",
    "sha256": "4f684351514c43fcc0604ce8cfe17ebbc20577390a0f3666e46820a189350574",
    "bytes": 179204,
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
    "at": "2026-10-08T19:35:32.548Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
