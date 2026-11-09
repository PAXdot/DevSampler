// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "process/motion-gallery",
  "job": "process",
  "language": "editorial",
  "mechanic": [
    "checklist-tick-then-click"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "process",
    "checklist-tick-then-click",
    "checklist",
    "syllabus",
    "enroll",
    "outcomes"
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
      "in": 135,
      "out": 0
    },
    "markers": {
      "settled": 135
    },
    "beats": [
      0,
      34,
      68,
      101,
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
    "preset": "full",
    "backdrop": [
      "paintBackground"
    ]
  },
  "slots": [
    {
      "key": "headline",
      "type": "text",
      "maxChars": 24,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 48,
      "role": "body"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 32,
      "role": "cta"
    },
    {
      "key": "note",
      "type": "text",
      "maxChars": 34,
      "role": "caption"
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
      "target": "checklist-tick-then-click",
      "prop": "transform",
      "from": "enter",
      "settledBy": 135,
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
    "ink": "#FFF6EC",
    "accent": "#C2361B",
    "secondary": "#FFD696",
    "paper": "#FF6A4A",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "What you'll learn",
    "sub": "UX Writing Bootcamp · 5 weeks, live cohort",
    "cta": "Enroll now · first lesson free",
    "note": "you're in! see you on the 20th"
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
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 24,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 48,
      "role": "body"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 32,
      "role": "cta"
    },
    {
      "key": "note",
      "label": "Note",
      "type": "text",
      "max": 34,
      "role": "caption"
    }
  ],
  "name": "Syllabus Checklist Enroll",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-edu-checklist",
    "bundleSha256": "fa7c770195291560bbcffee5d472838b0070d65fc58f23717799edd4fa6a5cc1",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:10:21.712Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/16x9-paper.png",
        "sha256": "dc2045a2d0f9422485848bb82916f82e6bc4a4d94976cc7f3fa3cce53c994b4b"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/16x9-night.png",
        "sha256": "827f257b0a4c44f680cb572c409b891d6c2e4bdd9716a2dfc6692cc7eb88368f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/16x9-color.png",
        "sha256": "c0e8bd4df59777b0d85f610f1e3d786a1614b6f517903bce35da690c6dda61c4"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/9x16-paper.png",
        "sha256": "c699d3b750ab9d28fb0eae358821730ab65082bdcba75b363cccfc885871785e"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/9x16-night.png",
        "sha256": "691bc28ef8f0ba5ea6446521c2960c62a86bb15c495f33d25be6f28e9fb7a6c6"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/9x16-color.png",
        "sha256": "f2ce87a8d353f3eee88effa85b57f13863ba06e0a07ea4b432e96b7060ae5804"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/1x1-paper.png",
        "sha256": "1286842e10610044a5215b350b422bc3b8f57f2fefa6f974406c6e9b173c5f52"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/1x1-night.png",
        "sha256": "8377a716a0d07ad87288027efc6557c3fa850fc1ae0b05437c81660879937b9a"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/1x1-color.png",
        "sha256": "6f1c70066ab95fbb6b53945e7e7f6708136219264ac55ae5deda9106873d1dfe"
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
          "mg-edu-checklist--16x9",
          "mg-edu-checklist--9x16",
          "mg-edu-checklist--1x1"
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
            "paperNight": 35.463948567708336,
            "paperColor": 11.40576171875,
            "region": {
              "left": 99,
              "top": 108,
              "width": 1772,
              "height": 949
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 48.214029947916664,
            "paperColor": 20.53032769097222,
            "region": {
              "left": 29,
              "top": 78,
              "width": 1024,
              "height": 1791
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 38.720241970486114,
            "paperColor": 14.527262369791666,
            "region": {
              "left": 54,
              "top": 67,
              "width": 1014,
              "height": 968
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
            "occupancy": 1.138434411830576,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1493343157736349,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.143844039351852,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2534643487024442,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2534643487024442,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2534643487024442,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1840096978434722,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1926341181191271,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.18770587796161,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.8907335069444446,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 3.0171440972222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/16x9-duration-90-frame-10.png",
                "sha256": "5c1bdfc14878aa54198e9bb53f7a8bae2eb83bbce0b6687e365b6b8d790a3ebe",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/16x9-duration-90-frame-89.png",
                "sha256": "dfe830d774dadbd9cfbd59ca4d57bac79e2cd6e9fb9f96f4a71aa412cb63af6a",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/16x9-duration-90-frame-79.png",
                "sha256": "dfe830d774dadbd9cfbd59ca4d57bac79e2cd6e9fb9f96f4a71aa412cb63af6a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 2.8907335069444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/16x9-duration-900-frame-20.png",
                "sha256": "c9619b848336040a297cca577527e9557b476b336080d70de5790d9aa1411056",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/16x9-duration-900-frame-135.png",
                "sha256": "dfe830d774dadbd9cfbd59ca4d57bac79e2cd6e9fb9f96f4a71aa412cb63af6a",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/16x9-duration-900-frame-792.png",
                "sha256": "dfe830d774dadbd9cfbd59ca4d57bac79e2cd6e9fb9f96f4a71aa412cb63af6a",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/16x9-duration-900-frame-899.png",
                "sha256": "dfe830d774dadbd9cfbd59ca4d57bac79e2cd6e9fb9f96f4a71aa412cb63af6a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 8.103081597222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/9x16-duration-90-frame-10.png",
                "sha256": "ac2d2d534f99d2ccbe52e08b163568b81164b08956a482fc179d2e5f52ae6dab",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/9x16-duration-90-frame-89.png",
                "sha256": "f19101da221068c543ab7b34481def184b02cde0a8e9c5519afbd6fb9637a372",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/9x16-duration-90-frame-79.png",
                "sha256": "f19101da221068c543ab7b34481def184b02cde0a8e9c5519afbd6fb9637a372",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 8.009765625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/9x16-duration-900-frame-20.png",
                "sha256": "7134538509f7c16f814fb8f057e6700aba14a8ecc9b58dc2e7d76e3771bd11fc",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/9x16-duration-900-frame-135.png",
                "sha256": "f19101da221068c543ab7b34481def184b02cde0a8e9c5519afbd6fb9637a372",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/9x16-duration-900-frame-792.png",
                "sha256": "f19101da221068c543ab7b34481def184b02cde0a8e9c5519afbd6fb9637a372",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/9x16-duration-900-frame-899.png",
                "sha256": "f19101da221068c543ab7b34481def184b02cde0a8e9c5519afbd6fb9637a372",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 3.8844401041666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/1x1-duration-90-frame-10.png",
                "sha256": "aecb33f6c83bf1aaaf0eb4a2221f670db0a894a87aef3bda323cf5d96272af1e",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/1x1-duration-90-frame-89.png",
                "sha256": "09d2fb8f767ceeae4792779df1b7135d3993ac65a3dfcd3d73ef80d1c0919527",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/1x1-duration-90-frame-79.png",
                "sha256": "09d2fb8f767ceeae4792779df1b7135d3993ac65a3dfcd3d73ef80d1c0919527",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 3.7686631944444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/1x1-duration-900-frame-20.png",
                "sha256": "fecbe88d2cdd5002bcaa5e1569e1b55150fd36db6a0d6b9cf4f0a9397a0c8fa0",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/1x1-duration-900-frame-135.png",
                "sha256": "09d2fb8f767ceeae4792779df1b7135d3993ac65a3dfcd3d73ef80d1c0919527",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/1x1-duration-900-frame-792.png",
                "sha256": "09d2fb8f767ceeae4792779df1b7135d3993ac65a3dfcd3d73ef80d1c0919527",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-checklist/1x1-duration-900-frame-899.png",
                "sha256": "09d2fb8f767ceeae4792779df1b7135d3993ac65a3dfcd3d73ef80d1c0919527",
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
        "note": "Syllabus outcomes check off one by one beside a serif headline and enroll CTA; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 21,
        "compared": 21,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "fa7c770195291560bbcffee5d472838b0070d65fc58f23717799edd4fa6a5cc1",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.093Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-checklist/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-checklist/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-checklist/16x9/detail.mp4",
      "bg": "#ff7658",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "26325810987aeb2e8f2eed2556d614b1890f1a24b43eed86f1dfb192f96b09d7",
        "loop": "0c2e7ed5b060646fb76b7441917abf99f3667e3eca94b8fcc54e107aa4776232",
        "detail": "d610e654960c377eb45a958161013c163438ead001c9c2b29ab51935925babdd"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-checklist/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-checklist/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-checklist/9x16/detail.mp4",
      "bg": "#ff7658",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "70aec5f2b26baa67d577e00467f60c38350dd7cf78d833aa3b2481ecc6870997",
        "loop": "72b9d2d5813d08e267ab524fd1023fae6709e66c143b28e63afb3aad01eac98a",
        "detail": "696c922ee1aa63ba4e11bc449eb8074cdd5f9da22288f5b42c0bfc10b67f8f8c"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-checklist/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-checklist/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-checklist/1x1/detail.mp4",
      "bg": "#ff7658",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9d57fd6caf2d5b4150e146b0b196efade67fcd4552b828d20de398df220c1427",
        "loop": "56b7a5c2b5d224fdb22cb2797bef17fb7e391a876a0ead344630fa5e9abb9e4c",
        "detail": "d3866f8e60aa02fe4c62fec3fb991ee7f0dc3f43069b71bbc55d02429880aed9"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/fa7c770195291560bbcffee5d472838b0070d65fc58f23717799edd4fa6a5cc1/index.mjs",
    "sha256": "fa7c770195291560bbcffee5d472838b0070d65fc58f23717799edd4fa6a5cc1",
    "bytes": 287727,
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
    "at": "2026-10-09T07:17:24.843Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
