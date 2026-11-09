// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "editorial",
  "mechanic": [
    "lid-lift-product-rise"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "lid-lift-product-rise",
    "launch",
    "reveal",
    "packaging"
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
      "in": 93,
      "out": 0
    },
    "markers": {
      "settled": 93
    },
    "beats": [
      0,
      23,
      47,
      70,
      93
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
      "key": "title",
      "type": "text",
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 40,
      "role": "caption"
    },
    {
      "key": "foot",
      "type": "text",
      "maxChars": 30,
      "role": "cta"
    },
    {
      "key": "brand",
      "type": "text",
      "maxChars": 12,
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
      "target": "lid-lift-product-rise",
      "prop": "transform",
      "from": "enter",
      "settledBy": 93,
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
    "ink": "#F2E6CF",
    "accent": "#D9B26F",
    "secondary": "#255A44",
    "paper": "#0E231B",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "title": "the ember edit",
    "sub": "No. 04 · ember fig · 50 ml",
    "foot": "pre-orders open oct 14",
    "brand": "loma"
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
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 40,
      "role": "caption"
    },
    {
      "key": "foot",
      "label": "Foot",
      "type": "text",
      "max": 30,
      "role": "cta"
    },
    {
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 12,
      "role": "label"
    }
  ],
  "name": "Glowing Unboxing Reveal",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-shop-unboxing",
    "bundleSha256": "98b2bb3c5bbbd674bd619bf278fea96838b076ff1133c3d416a5c654c895cff3",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:08:22.391Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/16x9-paper.png",
        "sha256": "71fa3691cca6783cb04ef079afad851456a90888cb8c7beda6705d90dc928936"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/16x9-night.png",
        "sha256": "4401d614027aaced9f8012b491964770ceeaa913f4c392d68f6157eb7be8070f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/16x9-color.png",
        "sha256": "2590bdfc37e8c95c947f95ca9118038059f4f595a128ef850cc2c29158c80b08"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/9x16-paper.png",
        "sha256": "56e9a50f5ea08b353a08545c59df88b1e7ad670a314e7d751c8237f0e3a62a2e"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/9x16-night.png",
        "sha256": "a7d406e1ed0e0b4972fa66581b0ca7d473c040c78cadc2a2bf8905bb9ece437f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/9x16-color.png",
        "sha256": "71fcb6aff093e4ff67b6510126679f852bc06f98d5a750e0d3314a34cd7b70ef"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/1x1-paper.png",
        "sha256": "e47c3296b9e375e8035788eca02e8946d54e5daa5b5a8271ae840f2b38ad92fe"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/1x1-night.png",
        "sha256": "2e5b5f7cb84892129f33baefa789703dd90a640cac35d5b357b978bfa82daf40"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/1x1-color.png",
        "sha256": "ba5e24c2b403720f275c77f4c5a005f261f45d160f9b909beebfa46502b5eaf8"
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
          "mg-shop-unboxing--16x9",
          "mg-shop-unboxing--9x16",
          "mg-shop-unboxing--1x1"
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
            "paperNight": 26.812391493055557,
            "paperColor": 16.32318793402778,
            "region": {
              "left": 134,
              "top": 0,
              "width": 1698,
              "height": 970
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 33.497775607638886,
            "paperColor": 19.30197482638889,
            "region": {
              "left": 0,
              "top": 146,
              "width": 1080,
              "height": 1668
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 31.38226996527778,
            "paperColor": 17.45000542534722,
            "region": {
              "left": 203,
              "top": 64,
              "width": 680,
              "height": 967
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
            "occupancy": 1.1257082887167216,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1257082887167216,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1257082887167216,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2297453703703707,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2297453703703707,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2312216553287985,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7969678783721995,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7981416160428507,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7977928968798311,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.890516493055555,
        "frames": [
          13,
          93,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 8.890516493055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/16x9-duration-90-frame-10.png",
                "sha256": "6c3ff1c1caac9c83b6e9c46dc4872a068f296e72459d0d31408b97de630f520b",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/16x9-duration-90-frame-89.png",
                "sha256": "7739c80e490fa9abee2af53edae8cf9f86e65ac5a31011b7e1482548cf08e4e5",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/16x9-duration-90-frame-79.png",
                "sha256": "7739c80e490fa9abee2af53edae8cf9f86e65ac5a31011b7e1482548cf08e4e5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 8.890516493055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/16x9-duration-900-frame-13.png",
                "sha256": "6c3ff1c1caac9c83b6e9c46dc4872a068f296e72459d0d31408b97de630f520b",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/16x9-duration-900-frame-93.png",
                "sha256": "7739c80e490fa9abee2af53edae8cf9f86e65ac5a31011b7e1482548cf08e4e5",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/16x9-duration-900-frame-792.png",
                "sha256": "7739c80e490fa9abee2af53edae8cf9f86e65ac5a31011b7e1482548cf08e4e5",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/16x9-duration-900-frame-899.png",
                "sha256": "7739c80e490fa9abee2af53edae8cf9f86e65ac5a31011b7e1482548cf08e4e5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 11.98806423611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/9x16-duration-90-frame-10.png",
                "sha256": "6042a7f6e0f1950a848bd45ded401d63e74a695ec911c1cc594738513f8a5587",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/9x16-duration-90-frame-89.png",
                "sha256": "cfd311a34a9edd96d90a9691fec3b3860172b487d843f344208e855873a86065",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/9x16-duration-90-frame-79.png",
                "sha256": "cfd311a34a9edd96d90a9691fec3b3860172b487d843f344208e855873a86065",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 11.98806423611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/9x16-duration-900-frame-13.png",
                "sha256": "6042a7f6e0f1950a848bd45ded401d63e74a695ec911c1cc594738513f8a5587",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/9x16-duration-900-frame-93.png",
                "sha256": "cfd311a34a9edd96d90a9691fec3b3860172b487d843f344208e855873a86065",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/9x16-duration-900-frame-792.png",
                "sha256": "cfd311a34a9edd96d90a9691fec3b3860172b487d843f344208e855873a86065",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/9x16-duration-900-frame-899.png",
                "sha256": "cfd311a34a9edd96d90a9691fec3b3860172b487d843f344208e855873a86065",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 7.135850694444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/1x1-duration-90-frame-10.png",
                "sha256": "61626a19afaa77bc1e405626493a4356f4833afc5cf97dcaba94a85eb3d979bb",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/1x1-duration-90-frame-89.png",
                "sha256": "32f3cff7d417d4c27dde136d7c20e472b86486b629f1aece6cdf17fd521d024e",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/1x1-duration-90-frame-79.png",
                "sha256": "32f3cff7d417d4c27dde136d7c20e472b86486b629f1aece6cdf17fd521d024e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 7.135850694444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/1x1-duration-900-frame-13.png",
                "sha256": "61626a19afaa77bc1e405626493a4356f4833afc5cf97dcaba94a85eb3d979bb",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/1x1-duration-900-frame-93.png",
                "sha256": "32f3cff7d417d4c27dde136d7c20e472b86486b629f1aece6cdf17fd521d024e",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/1x1-duration-900-frame-792.png",
                "sha256": "32f3cff7d417d4c27dde136d7c20e472b86486b629f1aece6cdf17fd521d024e",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-shop-unboxing/1x1-duration-900-frame-899.png",
                "sha256": "32f3cff7d417d4c27dde136d7c20e472b86486b629f1aece6cdf17fd521d024e",
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
        "note": "A gift box opens to a glowing bottle beside a serif edit title; rebrands recolor the box."
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
      "bundleSha256": "98b2bb3c5bbbd674bd619bf278fea96838b076ff1133c3d416a5c654c895cff3",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.087Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-unboxing/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-unboxing/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-unboxing/16x9/detail.mp4",
      "bg": "#081510",
      "posterFrame": 93,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ef3d7f662a890e33c64cf1fb0f188256f45af9e83a1fe38ae047a7fc35342049",
        "loop": "2391bbcfc35d22874cd4a7028882a1e09c8f1aada03d019e7e15ea6692b81471",
        "detail": "e0c0b880b81a68940d728b65fdf34137d512785e67f11974ac041b985459b874"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-unboxing/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-unboxing/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-unboxing/9x16/detail.mp4",
      "bg": "#081510",
      "posterFrame": 93,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "bd56c166eaedc1ffe3ab00016e1bb02a80a501af3b26cbf0a442573bc6958d9e",
        "loop": "3e35c90f67a94ddd20d55d1998e58aa163a459eb3d35ab7a4900ac8012cb1aa7",
        "detail": "b4c6a9a7f72d00793aad1b02b7c8e49074829526fbd44988af1a38fc220a6609"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-unboxing/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-unboxing/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-unboxing/1x1/detail.mp4",
      "bg": "#081510",
      "posterFrame": 93,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "15f861e86576a7337a6e30be8ebe438170271f7fc55ac1ed420d5eb9863da5c0",
        "loop": "9e69de1aa218211aca052c3661666acca8fbcbca509f554e53caab5c7e93c268",
        "detail": "a28ffd3b9d10429049e95d8c24a28c614dd8f3d8ff0a18ea7e92c4bf9e3ed635"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/98b2bb3c5bbbd674bd619bf278fea96838b076ff1133c3d416a5c654c895cff3/index.mjs",
    "sha256": "98b2bb3c5bbbd674bd619bf278fea96838b076ff1133c3d416a5c654c895cff3",
    "bytes": 304190,
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
    "at": "2026-10-09T07:12:36.991Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
