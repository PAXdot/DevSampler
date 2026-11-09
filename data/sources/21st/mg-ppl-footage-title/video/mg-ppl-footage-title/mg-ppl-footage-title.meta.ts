// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "editorial",
  "mechanic": [
    "letterbox-title-reveal"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "letterbox-title-reveal",
    "cinematic",
    "letterbox",
    "title-card"
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
      "in": 126,
      "out": 0
    },
    "markers": {
      "settled": 126
    },
    "beats": [
      0,
      32,
      63,
      95,
      126
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
      "key": "kicker",
      "type": "text",
      "maxChars": 22,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "accentLine",
      "type": "text",
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 48,
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
      "target": "letterbox-title-reveal",
      "prop": "transform",
      "from": "enter",
      "settledBy": 126,
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
    "ink": "#FFF6EA",
    "accent": "#FFD6A3",
    "secondary": "#FFCF8C",
    "paper": "#000000",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Lumen 2.0",
    "headline": "Made for",
    "accentLine": "deep work.",
    "caption": "Out now on desktop and web"
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
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 22,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "accentLine",
      "label": "Accent line",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 48,
      "role": "caption"
    }
  ],
  "name": "Cinematic Footage Title",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-ppl-footage-title",
    "bundleSha256": "b9f50a13169c3d800fac73998707ba5943918cbca9f12cb8a672e51562bc13a7",
    "sourceSnapshot": {
      "sha256": "1f6ce6492f581e3c8c64310c021d09e41636a62ca2784e1de4c2e9015f49ad94",
      "files": 1757
    },
    "renderedAt": "2026-10-08T18:31:52.664Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/16x9-paper.png",
        "sha256": "23b6dfbf66baa5b48f8d8b13960f68c001434fd89c84a789855d3df499286683"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/16x9-night.png",
        "sha256": "cad23e43a6792f2e1878cc1e04baf6bc6921ae3c40f12105d242a8f04b62fddd"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/16x9-color.png",
        "sha256": "ca21b903495c23517feac2cd5f3861f234fcd5baba38b04b2a74ae328a41d507"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/9x16-paper.png",
        "sha256": "75d981b5ed92111d327b110a2d5cdd315a5ca22e3654f2c14e097b07b5cdeef3"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/9x16-night.png",
        "sha256": "9b419984462aa1aa9c8c397e3942cc5a0821e444b07e60811652578c02346393"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/9x16-color.png",
        "sha256": "ae8ca0efdfdada55b009c8fa39ab653d6d540172656e430b07170d14917e1a29"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/1x1-paper.png",
        "sha256": "48a2608a100bc7e1407142b4363e1775a754f07e5f9dc5e5f8efc29c3d79ad0c"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/1x1-night.png",
        "sha256": "b7c2ad840e8a967d490a6932bcdf462cd102fac14a8e1ae08d0abedd102df950"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/1x1-color.png",
        "sha256": "94aa9fb7e8711967e98eaf680bd7ec9b9202ee34e00785b1cc524011d8eea1e2"
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
          "mg-ppl-footage-title--16x9",
          "mg-ppl-footage-title--9x16",
          "mg-ppl-footage-title--1x1"
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
            "paperNight": 4.997884114583333,
            "paperColor": 2.483127170138889,
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
            "paperNight": 13.860270182291666,
            "paperColor": 6.884195963541667,
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
            "paperNight": 7.496283637152778,
            "paperColor": 3.8600260416666665,
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
        "averageChannelDifference": 9.21950954861111,
        "frames": [
          18,
          126,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 9.5556640625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/16x9-duration-90-frame-10.png",
                "sha256": "c25f0db240f59f8d037695073e70943870852586cf586441e521346fcd979db6",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/16x9-duration-90-frame-89.png",
                "sha256": "13473ae91a324ddc0de8fd40dd15862fc778acbe15846df2a7676d256e43ec7c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/16x9-duration-90-frame-79.png",
                "sha256": "13473ae91a324ddc0de8fd40dd15862fc778acbe15846df2a7676d256e43ec7c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 9.21950954861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/16x9-duration-900-frame-18.png",
                "sha256": "f71e98f94c5c502746091e1b41a6b64a3d737385f810ae9ff593a4163eeaab64",
                "alphaMass": 587520
              },
              {
                "frame": 126,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/16x9-duration-900-frame-126.png",
                "sha256": "13473ae91a324ddc0de8fd40dd15862fc778acbe15846df2a7676d256e43ec7c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/16x9-duration-900-frame-792.png",
                "sha256": "13473ae91a324ddc0de8fd40dd15862fc778acbe15846df2a7676d256e43ec7c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/16x9-duration-900-frame-899.png",
                "sha256": "13473ae91a324ddc0de8fd40dd15862fc778acbe15846df2a7676d256e43ec7c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 14.491319444444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/9x16-duration-90-frame-10.png",
                "sha256": "bf888c2e011f735bb469e1b698abf5d231d8b347b80cd2420644c000eda941d8",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/9x16-duration-90-frame-89.png",
                "sha256": "2b12ab2972fa6ec3bad879a96fae5210dcf214ca43d7e15a8c9b20634cd8611c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/9x16-duration-90-frame-79.png",
                "sha256": "2b12ab2972fa6ec3bad879a96fae5210dcf214ca43d7e15a8c9b20634cd8611c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 14.27951388888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/9x16-duration-900-frame-18.png",
                "sha256": "8e9b6b0ba2e40b4d3e367ea063f760973399cb2b21652cc71802985d9219a006",
                "alphaMass": 587520
              },
              {
                "frame": 126,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/9x16-duration-900-frame-126.png",
                "sha256": "2b12ab2972fa6ec3bad879a96fae5210dcf214ca43d7e15a8c9b20634cd8611c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/9x16-duration-900-frame-792.png",
                "sha256": "2b12ab2972fa6ec3bad879a96fae5210dcf214ca43d7e15a8c9b20634cd8611c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/9x16-duration-900-frame-899.png",
                "sha256": "2b12ab2972fa6ec3bad879a96fae5210dcf214ca43d7e15a8c9b20634cd8611c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 12.25075954861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/1x1-duration-90-frame-10.png",
                "sha256": "bee54c6a727d82e811605ad2602f73ef1d22c6ac96acacbeb40334ddea2f6990",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/1x1-duration-90-frame-89.png",
                "sha256": "bd4eb3150f830ba4d9095a9e6d13960738bfbaf14f03c0322c0add49b2177886",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/1x1-duration-90-frame-79.png",
                "sha256": "bd4eb3150f830ba4d9095a9e6d13960738bfbaf14f03c0322c0add49b2177886",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 11.917534722222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/1x1-duration-900-frame-18.png",
                "sha256": "3fcf696b68c6ff64d2a00c3f6f2a5bc20bdba3d1107486dcc06e654b8a9d3306",
                "alphaMass": 587520
              },
              {
                "frame": 126,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/1x1-duration-900-frame-126.png",
                "sha256": "bd4eb3150f830ba4d9095a9e6d13960738bfbaf14f03c0322c0add49b2177886",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/1x1-duration-900-frame-792.png",
                "sha256": "bd4eb3150f830ba4d9095a9e6d13960738bfbaf14f03c0322c0add49b2177886",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg3-b/mg-ppl-footage-title/1x1-duration-900-frame-899.png",
                "sha256": "bd4eb3150f830ba4d9095a9e6d13960738bfbaf14f03c0322c0add49b2177886",
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
        "note": "Cinematic footage with serif title; title readable, rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 43,
        "compared": 43,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "b9f50a13169c3d800fac73998707ba5943918cbca9f12cb8a672e51562bc13a7",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-08T19:02:07.522Z",
      "basis": "All 61 launch-video gallery prototypes go into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ppl-footage-title/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ppl-footage-title/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ppl-footage-title/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 126,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "16e87548b4a021269c96a1541be3b8a6d2d876ed77534f1a7c2bf66da4a95b0c",
        "loop": "a776fd1639428b31ba746b75086f55a74195fcd23a5bcd9d04d839f53adce4ec",
        "detail": "b953a6a70e32fcc3bfd7addb4a98fc04c45969c6d41f668354bcab6a084d88fd"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ppl-footage-title/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ppl-footage-title/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ppl-footage-title/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 126,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "47291e714b2872a9caae5f15633ea9b16e175b1704ac93524bd16c77d8f9e495",
        "loop": "a6d7856ac50f4573d1b055709a03cf2a0a1a797a8dd7a635576fe74bb5b75c10",
        "detail": "d50a11e73b494e23c49c5ab165bae8da5882935c46714fbef56edb03f5d396d6"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ppl-footage-title/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ppl-footage-title/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ppl-footage-title/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 126,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0fd48843809a77ec204f1acab0d1b1f9829b6bb4c713d1f8c620bb79e495ff97",
        "loop": "d439a841cd4ca12281da65e66bd21d28709b0c8b865f2ffdfa6247cf824a622a",
        "detail": "7e1baa992256e997e60e16942d2be3a48f1b68e8b567cf0762fa0c156451764e"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/b9f50a13169c3d800fac73998707ba5943918cbca9f12cb8a672e51562bc13a7/index.mjs",
    "sha256": "b9f50a13169c3d800fac73998707ba5943918cbca9f12cb8a672e51562bc13a7",
    "bytes": 173476,
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
    "at": "2026-10-08T19:35:19.193Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
