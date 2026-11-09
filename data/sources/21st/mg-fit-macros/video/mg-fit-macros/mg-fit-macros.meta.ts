// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/motion-gallery",
  "job": "data",
  "language": "product-ui",
  "mechanic": [
    "donut-segments-fill-count"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "data",
    "donut-segments-fill-count",
    "fitness",
    "nutrition",
    "macros"
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
      "in": 84,
      "out": 0
    },
    "markers": {
      "settled": 84
    },
    "beats": [
      0,
      21,
      42,
      63,
      84
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
      "key": "brand",
      "type": "text",
      "maxChars": 14,
      "role": "label"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "kcal",
      "type": "text",
      "maxChars": 6,
      "role": "value"
    },
    {
      "key": "left",
      "type": "text",
      "maxChars": 14,
      "role": "label"
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
      "target": "donut-segments-fill-count",
      "prop": "transform",
      "from": "enter",
      "settledBy": 84,
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
    "ink": "#1F2B22",
    "accent": "#3E7A52",
    "secondary": "#EC7B5D",
    "paper": "#F4F7F1",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "brand": "movara",
    "title": "Today's fuel",
    "kcal": "1,840",
    "left": "360 left"
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
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 14,
      "role": "label"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "kcal",
      "label": "Kcal",
      "type": "text",
      "max": 6,
      "role": "value"
    },
    {
      "key": "left",
      "label": "Left",
      "type": "text",
      "max": 14,
      "role": "label"
    }
  ],
  "name": "Daily Macros Donut",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fit-macros",
    "bundleSha256": "84a7ec3b336509aa3e91969ac4f8c99ac728a63479ee54ceaf3501630d81b3ed",
    "sourceSnapshot": {
      "sha256": "b342da95c90071ffb99c060c999d9fca49ed6722762d7db99795613749872dfe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T07:46:43.148Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/16x9-paper.png",
        "sha256": "68c20bbf17c34c3719f4fae23405d049950fc6937aedec89cc43035933f9020b"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/16x9-night.png",
        "sha256": "09996631a6574adba55af28fcf6ed2d227b40b764d87dd87edb8bb47d4c79e77"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/16x9-color.png",
        "sha256": "60dbf077305721debeb18c6b3a26a77c48eaa1845ffa19f2a0e278c6330c9cf2"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/9x16-paper.png",
        "sha256": "b2e584073e67a9cc8e1651f346e1419aec3289111279e8c907433713500e8a66"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/9x16-night.png",
        "sha256": "6c3e695afcadc36517cd119a5f1760b8c115bf9dea6298df8fc4dd76a500128d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/9x16-color.png",
        "sha256": "ebcaba8456566685a7837a3f8217bffb6ec3995af7744a0ad9e5b5b0c50e5a92"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/1x1-paper.png",
        "sha256": "c677041b213a5c204b1d242daf90c24172a64bd2794b2b4bfc1fa82af5134faf"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/1x1-night.png",
        "sha256": "bd8c8aacd3945e45f82279ab010d7355f538a955b8ebd6f6f2303ba2baa9b187"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/1x1-color.png",
        "sha256": "277040c3d7d1b10cfdb9298bd9703445551d01a202f445dcc3d15e0f0fcb1c71"
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
          "mg-fit-macros--16x9",
          "mg-fit-macros--9x16",
          "mg-fit-macros--1x1"
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
            "paperNight": 84.33938259548611,
            "paperColor": 16.52959526909722,
            "region": {
              "left": 96,
              "top": 69,
              "width": 1728,
              "height": 932
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 65.81380208333333,
            "paperColor": 16.138536241319443,
            "region": {
              "left": 36,
              "top": 96,
              "width": 1040,
              "height": 1719
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 78.55772569444444,
            "paperColor": 15.359076605902779,
            "region": {
              "left": 24,
              "top": 54,
              "width": 992,
              "height": 808
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
            "occupancy": 1.099444085761877,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1000810753828283,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1007180650037796,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.221871850592089,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2147638119033624,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1927288919683101,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9739057945995043,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9739057945995043,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9739057945995043,
            "bad": [],
            "measured": 9
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 6.54296875,
        "frames": [
          12,
          84,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 6.582682291666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/16x9-duration-90-frame-10.png",
                "sha256": "42bf6a20e9d77ff131bcb0bb0cc1fddb2c9e29bd61c455000cc42ed5dd501905",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/16x9-duration-90-frame-84.png",
                "sha256": "538f8f8e2c8bde2b1c80e8e139d9c0001e6281a9165196516a77b561c8a471d9",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/16x9-duration-90-frame-79.png",
                "sha256": "538f8f8e2c8bde2b1c80e8e139d9c0001e6281a9165196516a77b561c8a471d9",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/16x9-duration-90-frame-89.png",
                "sha256": "0b3d3dd74166f0edb2cfabebe9a15064650a4d3487f80c2ad82fa8ba54c88014",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 6.54296875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/16x9-duration-900-frame-12.png",
                "sha256": "1d9edae56d362b9ee745e540616861073b29c9b25ebddc5ad8659837e68d168c",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/16x9-duration-900-frame-84.png",
                "sha256": "0b3d3dd74166f0edb2cfabebe9a15064650a4d3487f80c2ad82fa8ba54c88014",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/16x9-duration-900-frame-792.png",
                "sha256": "538f8f8e2c8bde2b1c80e8e139d9c0001e6281a9165196516a77b561c8a471d9",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/16x9-duration-900-frame-899.png",
                "sha256": "0b3d3dd74166f0edb2cfabebe9a15064650a4d3487f80c2ad82fa8ba54c88014",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 7.981879340277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/9x16-duration-90-frame-10.png",
                "sha256": "cce65518f596ac136100549360e614e2d21f6e1563a9e2deaf660f5d01c087ef",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/9x16-duration-90-frame-84.png",
                "sha256": "c90df07f402cac043089c194b59bb8879509247232e93dbb0e380eff5d9b1147",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/9x16-duration-90-frame-79.png",
                "sha256": "387636800e4b83687922d3a22b5e650da911628086c0f3ae1edd8d334e44611e",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/9x16-duration-90-frame-89.png",
                "sha256": "c90df07f402cac043089c194b59bb8879509247232e93dbb0e380eff5d9b1147",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 7.963541666666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/9x16-duration-900-frame-12.png",
                "sha256": "d55b0bf8305c136e5e4c8899fa81f9ce755adeaa6a0e4da6d1b46b9b8697e159",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/9x16-duration-900-frame-84.png",
                "sha256": "387636800e4b83687922d3a22b5e650da911628086c0f3ae1edd8d334e44611e",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/9x16-duration-900-frame-792.png",
                "sha256": "c90df07f402cac043089c194b59bb8879509247232e93dbb0e380eff5d9b1147",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/9x16-duration-900-frame-899.png",
                "sha256": "c90df07f402cac043089c194b59bb8879509247232e93dbb0e380eff5d9b1147",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 6.272243923611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/1x1-duration-90-frame-10.png",
                "sha256": "588f3b912db2f48adf846c183209138bc9ae77b8a36cb6c0de0c47c0cd97aaf0",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/1x1-duration-90-frame-84.png",
                "sha256": "364b59ff92b758a3c8f4c66d8a478d3dd072eb0469175aedf37ff033b74786d9",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/1x1-duration-90-frame-79.png",
                "sha256": "0f2ca3ca65d9eeaf7310acdad42af87f1afdde5efb8dbffebbe69d1578d3b20b",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/1x1-duration-90-frame-89.png",
                "sha256": "0f2ca3ca65d9eeaf7310acdad42af87f1afdde5efb8dbffebbe69d1578d3b20b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 6.269205729166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/1x1-duration-900-frame-12.png",
                "sha256": "4ce7da44035905aff7bba9cdc22152980ea5674b2f10d7897ace7b44c2339f90",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/1x1-duration-900-frame-84.png",
                "sha256": "364b59ff92b758a3c8f4c66d8a478d3dd072eb0469175aedf37ff033b74786d9",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/1x1-duration-900-frame-792.png",
                "sha256": "0f2ca3ca65d9eeaf7310acdad42af87f1afdde5efb8dbffebbe69d1578d3b20b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-fit-macros/1x1-duration-900-frame-899.png",
                "sha256": "0f2ca3ca65d9eeaf7310acdad42af87f1afdde5efb8dbffebbe69d1578d3b20b",
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
        "note": "Calorie donut fills by macro beside protein/carbs/fat cards; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 28,
        "compared": 28,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "84a7ec3b336509aa3e91969ac4f8c99ac728a63479ee54ceaf3501630d81b3ed",
      "selectedBy": "serafim (repo owner) on 2026-10-09; visual review by claude",
      "at": "2026-10-09T07:49:52.846Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-macros/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-macros/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-macros/16x9/detail.mp4",
      "bg": "#ecf2ea",
      "posterFrame": 84,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "bd8f42cafe9330628054376c7e791aa3826cb6a2a67ed916848eb826ed619d7d",
        "loop": "3615d3495fd18532af8b65f26ec4628b89f05903b9e87e35b9eefc0c27896c84",
        "detail": "011f0655bbc8bddcbfeea8fe774e305c270f71a3bdc5f63ef119c303c4b25298"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-macros/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-macros/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-macros/9x16/detail.mp4",
      "bg": "#ecf2ea",
      "posterFrame": 84,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4e37ef12ed67086a22c87c656f8d3c41b0c525e34baccd7b33b2dfe95417c582",
        "loop": "cef00b54958dece9d846c6c4b981452ddcec1533a9e0cb922dd65b5e6602daca",
        "detail": "234bf0db643762069a24eb9f68620925b789b64e81a9e287fb570e80155bb1a2"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-macros/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-macros/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-macros/1x1/detail.mp4",
      "bg": "#ecf2ea",
      "posterFrame": 84,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a2ad509b0216d3aec1bb695959e3185e84d8da702e4a11686662a7f63cf465fd",
        "loop": "6cc11acff1ec59cbe60f9870e10f2e2a41c81c65e72081ed3a09fffdd4ee173c",
        "detail": "c8307f9d77aaeb64bc1a6c8a6af4d806231f8a1da7ac7fe73002fd154a253d20"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/84a7ec3b336509aa3e91969ac4f8c99ac728a63479ee54ceaf3501630d81b3ed/index.mjs",
    "sha256": "84a7ec3b336509aa3e91969ac4f8c99ac728a63479ee54ceaf3501630d81b3ed",
    "bytes": 172848,
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
    "at": "2026-10-09T08:01:34.561Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
