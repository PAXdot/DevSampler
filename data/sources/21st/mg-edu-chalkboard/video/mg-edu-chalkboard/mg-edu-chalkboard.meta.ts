// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "hand-drawn",
  "mechanic": [
    "chalk-stroke-draw"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "chalk-stroke-draw",
    "chalkboard",
    "math",
    "lesson",
    "hand-drawn"
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
      "in": 105,
      "out": 0
    },
    "markers": {
      "settled": 105
    },
    "beats": [
      0,
      26,
      53,
      79,
      105
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
      "key": "formula",
      "type": "text",
      "maxChars": 18,
      "role": "headline"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 32,
      "role": "headline"
    },
    {
      "key": "tag",
      "type": "text",
      "maxChars": 40,
      "role": "label"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.accent",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "chalk-stroke-draw",
      "prop": "transform",
      "from": "enter",
      "settledBy": 105,
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
    "ink": "#F2F0E6",
    "accent": "#F6D77A",
    "secondary": "#F29FB0",
    "paper": "#22362D",
    "displayFont": "Caveat",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "formula": "a² + b² = c²",
    "title": "Math that finally clicks.",
    "tag": "Algebra to Calculus · 24 lessons"
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
      "brand": "fonts.accent"
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
      "key": "formula",
      "label": "Formula",
      "type": "text",
      "max": 18,
      "role": "headline"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 32,
      "role": "headline"
    },
    {
      "key": "tag",
      "label": "Tag",
      "type": "text",
      "max": 40,
      "role": "label"
    }
  ],
  "name": "Chalkboard Formula",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-edu-chalkboard",
    "bundleSha256": "e8cbd508d9e34ec7740947b7e11a4ba0c0553136890fc25aba6325fcc4ec2705",
    "sourceSnapshot": {
      "sha256": "b342da95c90071ffb99c060c999d9fca49ed6722762d7db99795613749872dfe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T07:46:13.134Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/16x9-paper.png",
        "sha256": "e0e4ed6f40ad7fef1100d66ac434b8a8c49b7ffdd2ad3f59bfebe1e0d59c73ee"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/16x9-night.png",
        "sha256": "3533b2c3abcb3273c4a16c42e6d32e31e2e9e57c5c915eb229fbb6ea1bc599b0"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/16x9-color.png",
        "sha256": "bcf0f77c5d97aef3ee737eadcfae3453b3e2232bb45049c8576ac35d587457d5"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/9x16-paper.png",
        "sha256": "57f7d5f3e87f1869c980e57e40ae904302e18765497be351b197db4b38080652"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/9x16-night.png",
        "sha256": "289c0b4c99e2cd9d8397fe69f51497513b9ca0b54c8393a89d79dc56e622e176"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/9x16-color.png",
        "sha256": "b33d8a7963485f47400b2a46b46e92690f2a80e0a66ceee6e314657c1f53b0c3"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/1x1-paper.png",
        "sha256": "5f6a2f1cc252a36bf3105f2b6e2987acfe60540212fd7587f6cdb48089493467"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/1x1-night.png",
        "sha256": "19efe15d7c73686739b3bc5feee8d06215f4ab1518dd1c6aced303aeafbd5dc6"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/1x1-color.png",
        "sha256": "1a91fef14c6e39525bb157a61f4454ffc81d9fdd170583db410c6ecdad473b14"
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
          "mg-edu-chalkboard--16x9",
          "mg-edu-chalkboard--9x16",
          "mg-edu-chalkboard--1x1"
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
            "paperNight": 41.77210828993056,
            "paperColor": 10.470323350694445,
            "region": {
              "left": 91,
              "top": 170,
              "width": 1628,
              "height": 757
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 48.131510416666664,
            "paperColor": 12.380859375,
            "region": {
              "left": 96,
              "top": 171,
              "width": 887,
              "height": 1652
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 31.79299587673611,
            "paperColor": 8.339057074652779,
            "region": {
              "left": 38,
              "top": 135,
              "width": 959,
              "height": 848
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
            "occupancy": 0.8397129347495172,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8422998507530586,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8397129347495172,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0014980464922596,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0014980464922596,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0014980464922596,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9839955643894506,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9778133933042812,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9839955643894506,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.942491319444445,
        "frames": [
          15,
          105,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 4.986328125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/16x9-duration-90-frame-10.png",
                "sha256": "f012e56a7ffb287bda42dcdf6fe7c64a72b09355ea4e403b88e2ce96faac5174",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/16x9-duration-90-frame-89.png",
                "sha256": "6fd739baa0212b28bfd46173f76a4d2f74aca4e388517f29be12b92198df4032",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/16x9-duration-90-frame-79.png",
                "sha256": "6853580ee9057a3b85b309a47d43c7841c55c7a9c1f244d2fb85b710d73f35d5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 4.942491319444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/16x9-duration-900-frame-15.png",
                "sha256": "e21fc0cc0fa986553c2b977f4cda8406a303220eb1a93dac1ca9e49fd91abe87",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/16x9-duration-900-frame-105.png",
                "sha256": "6fd739baa0212b28bfd46173f76a4d2f74aca4e388517f29be12b92198df4032",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/16x9-duration-900-frame-792.png",
                "sha256": "0cdecdc94159182c5b7f383d5e1e445f15737f358da844d2febbe1ae2dafd0b1",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/16x9-duration-900-frame-899.png",
                "sha256": "a5a293d1b87c8e419935c52933679453bd7fe31ed6af0510c31e2be5feaf96f3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 5.690104166666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/9x16-duration-90-frame-10.png",
                "sha256": "130f1adb02168ac254d4ab0fcf1e1517d42ba433501552fa83d7395b8459ecb3",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/9x16-duration-90-frame-89.png",
                "sha256": "f00279d042b8d3e8f6739d7c061734b12934169e7a91b0d537e3af430639e6e6",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/9x16-duration-90-frame-79.png",
                "sha256": "6f54c8743f3a6fa09fe21c05bb93965e3df153f0593ae5138301fb7e322a5a92",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 5.657009548611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/9x16-duration-900-frame-15.png",
                "sha256": "7f935e163f673fed471744aba5071f519831b173e5a54bcddec6264e46b7c2dc",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/9x16-duration-900-frame-105.png",
                "sha256": "2a30b4300a91365db6fb968bec4ad46342a962327cd23c6467c7150e51ceacfc",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/9x16-duration-900-frame-792.png",
                "sha256": "f00279d042b8d3e8f6739d7c061734b12934169e7a91b0d537e3af430639e6e6",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/9x16-duration-900-frame-899.png",
                "sha256": "8b95300d0f512893b232015f7dfee4bc9d86ed2119899764ec4d03caca5984ef",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 4.266818576388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/1x1-duration-90-frame-10.png",
                "sha256": "c6597b5c632cb9072d2a175cd922a39010c6ae439d70fdd89278b2710f003bb7",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/1x1-duration-90-frame-89.png",
                "sha256": "fd8fb7ba90d5aef15049ff4aa6bc2289805ac26745a68b225a34f5ac4d660773",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/1x1-duration-90-frame-79.png",
                "sha256": "fd8fb7ba90d5aef15049ff4aa6bc2289805ac26745a68b225a34f5ac4d660773",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 4.234592013888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/1x1-duration-900-frame-15.png",
                "sha256": "31e608744a4ce147ae0dbaf1e4411348412a16cbfa3ff01ed4b9c3a57fd153d5",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/1x1-duration-900-frame-105.png",
                "sha256": "fd8fb7ba90d5aef15049ff4aa6bc2289805ac26745a68b225a34f5ac4d660773",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/1x1-duration-900-frame-792.png",
                "sha256": "fd8fb7ba90d5aef15049ff4aa6bc2289805ac26745a68b225a34f5ac4d660773",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-edu-chalkboard/1x1-duration-900-frame-899.png",
                "sha256": "fd8fb7ba90d5aef15049ff4aa6bc2289805ac26745a68b225a34f5ac4d660773",
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
        "note": "A chalk triangle and formula draw on a board with a handwritten tagline; rebrands distinct."
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
      "bundleSha256": "e8cbd508d9e34ec7740947b7e11a4ba0c0553136890fc25aba6325fcc4ec2705",
      "selectedBy": "serafim (repo owner) on 2026-10-09; visual review by claude",
      "at": "2026-10-09T07:49:52.844Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-chalkboard/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-chalkboard/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-chalkboard/16x9/detail.mp4",
      "bg": "#8a5a35",
      "posterFrame": 105,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d801e1faf344de367811941cc2d2bc85abf9e12a67b2ea413fd09174250dfcc6",
        "loop": "707641921866c5d07aa144fe39ec86f85ec76d0351c1bd7bfff18698ee98a92c",
        "detail": "5947ba66e3a11a7d81f78bf931cfa184c3b32969bff27f5299e1a87fb1402627"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-chalkboard/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-chalkboard/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-chalkboard/9x16/detail.mp4",
      "bg": "#8a5a35",
      "posterFrame": 105,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e0aff7a849523b25ce1ecfda86f918470baebbf52d869f8ec8d33bc37bb19a7c",
        "loop": "678f5c859b55cdb67a3e985cb31036e70648255bcce313200157e6c7977d47a9",
        "detail": "245028a2a2bf490911f31728db32364b2d73c646d33f5fae67b15bef23fe129a"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-chalkboard/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-chalkboard/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-chalkboard/1x1/detail.mp4",
      "bg": "#8a5a35",
      "posterFrame": 105,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "6c96e8c68ab4c80424b63611f56e3bc0248acbeb21b605226db82ce0e3ae8f33",
        "loop": "2596473ea21b56cca5b82da0ab82d2badf6b24b7379252aa7c9fbafef6c46222",
        "detail": "a8ef2592040b23a78ab09f60f4993546ad058991cf5274180fff1e920fe61fde"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/e8cbd508d9e34ec7740947b7e11a4ba0c0553136890fc25aba6325fcc4ec2705/index.mjs",
    "sha256": "e8cbd508d9e34ec7740947b7e11a4ba0c0553136890fc25aba6325fcc4ec2705",
    "bytes": 287799,
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
    "at": "2026-10-09T08:00:47.490Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
