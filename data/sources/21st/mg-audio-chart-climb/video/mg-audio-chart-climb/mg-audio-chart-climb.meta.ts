// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/motion-gallery",
  "job": "data",
  "language": "product-ui",
  "mechanic": [
    "row-overtakes-to-rank-one"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "data",
    "row-overtakes-to-rank-one",
    "podcast",
    "chart",
    "ranking",
    "growth"
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
      "in": 102,
      "out": 0
    },
    "markers": {
      "settled": 102
    },
    "beats": [
      0,
      26,
      51,
      77,
      102
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
      "maxChars": 30,
      "role": "kicker"
    },
    {
      "key": "plays",
      "type": "text",
      "maxChars": 6,
      "role": "value"
    },
    {
      "key": "label",
      "type": "text",
      "maxChars": 34,
      "role": "label"
    },
    {
      "key": "show",
      "type": "text",
      "maxChars": 20,
      "role": "name"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.heading",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "row-overtakes-to-rank-one",
      "prop": "transform",
      "from": "enter",
      "settledBy": 102,
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
    "ink": "#0D1020",
    "accent": "#3047FF",
    "secondary": "#FF5B35",
    "paper": "#EEF0F6",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "season 3 · plays to date",
    "plays": "2.4M",
    "label": "plays across every platform",
    "show": "Slow Signal"
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
      "brand": "fonts.heading"
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
      "max": 30,
      "role": "kicker"
    },
    {
      "key": "plays",
      "label": "Plays",
      "type": "text",
      "max": 6,
      "role": "value"
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 34,
      "role": "label"
    },
    {
      "key": "show",
      "label": "Show",
      "type": "text",
      "max": 20,
      "role": "name"
    }
  ],
  "name": "Chart Climb To One",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-audio-chart-climb",
    "bundleSha256": "3de8853c01963dd44ed82cd18d476f082e29f3f60e0359923a011fc4b3a17696",
    "sourceSnapshot": {
      "sha256": "b342da95c90071ffb99c060c999d9fca49ed6722762d7db99795613749872dfe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T07:45:27.451Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/16x9-paper.png",
        "sha256": "7fc4a57b9c12b994da850f39a14fb13e0d95eaf4eb2b410d32ade7b1f4b5442a"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/16x9-night.png",
        "sha256": "bb878a347bc5ed7a56c9993fef59c0599365e189d47a26721b0f130037b7efdb"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/16x9-color.png",
        "sha256": "4f30fbd66c45ae4b990b39b60ca5f4889291a20a784fa8b561aa75178ae34fa4"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/9x16-paper.png",
        "sha256": "335b9a5aa7a7f71e330c317ae23baddf627679e7b9205a9630069bc1e127ea67"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/9x16-night.png",
        "sha256": "b22201ac5c15e51f84c671b21cc055ec6573c7998fc83e60f579c08c3ea8c49d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/9x16-color.png",
        "sha256": "ea7602f96ebf8b42e387a686630628b24e8280d66320c75476bc2c3268ce9434"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/1x1-paper.png",
        "sha256": "244dc6937f3511b7173dc4cf6fd3cf6e3cfc08988c77402c5b31825289ba9fb9"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/1x1-night.png",
        "sha256": "c2fadad63967941675441becb1df05b9e9c5821ac3f030dc2a5d868e5c20e601"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/1x1-color.png",
        "sha256": "49071a05a580330c5bf86116773313c96f91171f4603b474b3bd9ac4d712ddae"
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
          "mg-audio-chart-climb--16x9",
          "mg-audio-chart-climb--9x16",
          "mg-audio-chart-climb--1x1"
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
            "paperNight": 86.47403971354167,
            "paperColor": 17.86493598090278,
            "region": {
              "left": 113,
              "top": 125,
              "width": 1710,
              "height": 899
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 96.18085394965277,
            "paperColor": 18.91059027777778,
            "region": {
              "left": 68,
              "top": 127,
              "width": 948,
              "height": 1665
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 76.00249565972223,
            "paperColor": 14.738471137152779,
            "region": {
              "left": 63,
              "top": 80,
              "width": 963,
              "height": 1000
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
            "occupancy": 1.05068430728773,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.05068430728773,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.05068430728773,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.077499383240951,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0787952333711264,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0787952333711264,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1677523375605388,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1700925226057504,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1700925226057504,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 11.797200520833334,
        "frames": [
          15,
          102,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 12.012152777777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/16x9-duration-90-frame-10.png",
                "sha256": "fdb74e4810df0432d1a98b91f6ee1ce9127c47c11a3f7208d8e99dfbfc396f75",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/16x9-duration-90-frame-89.png",
                "sha256": "2a209df3c8a4f2f9cc3f89e80f691bae3ab809e210f7ec142bcfb8f904c981b3",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/16x9-duration-90-frame-79.png",
                "sha256": "f1051888414a9ef54a132b301b54370f9a92dcbfafb8fdebb046800f2e45bc90",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 11.797200520833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/16x9-duration-900-frame-15.png",
                "sha256": "a8414180c15fb91d90302973bcef847cd83ff068605ccd563caca23ab1a4ba62",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/16x9-duration-900-frame-102.png",
                "sha256": "2a209df3c8a4f2f9cc3f89e80f691bae3ab809e210f7ec142bcfb8f904c981b3",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/16x9-duration-900-frame-792.png",
                "sha256": "f80fe9d4ea00fbd309666cb58f13d1fa58d18e209b16e4b93d9e3710d46f200a",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/16x9-duration-900-frame-899.png",
                "sha256": "68d67c94519ff53b33ef6afc8e956612d8aaf828ed6c446f56069844aa0ea197",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 12.655598958333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/9x16-duration-90-frame-10.png",
                "sha256": "311538a866de9e9312352d750851bb0d0ba23fae5fe050d6858154af99af68fc",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/9x16-duration-90-frame-89.png",
                "sha256": "7135946b83dc92b2738d4b1d84539b9a64e510e0344455b3175396db1cd31931",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/9x16-duration-90-frame-79.png",
                "sha256": "7135946b83dc92b2738d4b1d84539b9a64e510e0344455b3175396db1cd31931",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 12.36838107638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/9x16-duration-900-frame-15.png",
                "sha256": "0ac9949b3ea2ec87d967548b5a3dcb4015e614981b2b93c182448df418e18caf",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/9x16-duration-900-frame-102.png",
                "sha256": "7135946b83dc92b2738d4b1d84539b9a64e510e0344455b3175396db1cd31931",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/9x16-duration-900-frame-792.png",
                "sha256": "7135946b83dc92b2738d4b1d84539b9a64e510e0344455b3175396db1cd31931",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/9x16-duration-900-frame-899.png",
                "sha256": "7135946b83dc92b2738d4b1d84539b9a64e510e0344455b3175396db1cd31931",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 11.463216145833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/1x1-duration-90-frame-10.png",
                "sha256": "f4f93be4c687ea83e3e480f1e176f52f39e16252da079bb559381c6c8c6d2a26",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/1x1-duration-90-frame-89.png",
                "sha256": "ed517567bae4b83092bf9a48bdc48e93d2155deaca2dcafbc86705fefc6ecc57",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/1x1-duration-90-frame-79.png",
                "sha256": "ed517567bae4b83092bf9a48bdc48e93d2155deaca2dcafbc86705fefc6ecc57",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 11.318901909722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/1x1-duration-900-frame-15.png",
                "sha256": "508353e329800979c06a0b43f20c63988b6365927c34dbbf440f1077652f66fa",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/1x1-duration-900-frame-102.png",
                "sha256": "ed517567bae4b83092bf9a48bdc48e93d2155deaca2dcafbc86705fefc6ecc57",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/1x1-duration-900-frame-792.png",
                "sha256": "ed517567bae4b83092bf9a48bdc48e93d2155deaca2dcafbc86705fefc6ecc57",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-audio-chart-climb/1x1-duration-900-frame-899.png",
                "sha256": "fe504c866c1a2a76a745415846236f7efd93f4a7c24636e70031d8d34ce0430e",
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
        "note": "Plays counter and growth line beside a podcast chart where the show climbs to #1; rebrands distinct."
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
      "bundleSha256": "3de8853c01963dd44ed82cd18d476f082e29f3f60e0359923a011fc4b3a17696",
      "selectedBy": "serafim (repo owner) on 2026-10-09; visual review by claude",
      "at": "2026-10-09T07:49:52.842Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-chart-climb/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-chart-climb/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-chart-climb/16x9/detail.mp4",
      "bg": "#d9dbe3",
      "posterFrame": 102,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3d28eab7b92a3444b372fd1cfcca3cb084fb19e2de8e7c4c38196313e5943062",
        "loop": "5539d507002a8406311c0c819d935c0b8cd0ba5a81ea3e7bbb44aa3134d8bf8b",
        "detail": "75c49a6cfc2682871ec90533e405eb19603cb023d0f93c419ff2635da5367586"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-chart-climb/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-chart-climb/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-chart-climb/9x16/detail.mp4",
      "bg": "#d9dbe3",
      "posterFrame": 102,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ec1299ea7503204a5d88dbd6fdb5a1993999a095bb2716e3bc8b4cbc84e0222e",
        "loop": "fea7fc573e58e3cbf1f07572cd482aa0326c4672a84a88d2a900fdc85d72fd1e",
        "detail": "225df23bf4071e113e4881e32ec9aa67f8e65978542c391a79b7a90b7d7a0511"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-chart-climb/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-chart-climb/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-chart-climb/1x1/detail.mp4",
      "bg": "#d9dbe3",
      "posterFrame": 102,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7f24e72dd311a9932e1716d96d3e7f70f0d75ef93758b30a3f75efe2f6b1eae4",
        "loop": "167245b9e83c1af8f65e3342209734b4997aeb348b402f815e706d4141893b41",
        "detail": "ca92955cf80311d5674f3a2f17b20d7fe32d29c4c383a76e94fbe5bae6158e48"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/3de8853c01963dd44ed82cd18d476f082e29f3f60e0359923a011fc4b3a17696/index.mjs",
    "sha256": "3de8853c01963dd44ed82cd18d476f082e29f3f60e0359923a011fc4b3a17696",
    "bytes": 261481,
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
    "at": "2026-10-09T08:00:16.407Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
