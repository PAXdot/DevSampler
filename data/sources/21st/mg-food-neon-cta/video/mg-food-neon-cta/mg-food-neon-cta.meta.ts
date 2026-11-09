// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "cta/motion-gallery",
  "job": "cta",
  "language": "aura",
  "mechanic": [
    "neon-flicker-on-card-slide"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "cta",
    "neon-flicker-on-card-slide",
    "restaurant",
    "neon",
    "hours"
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
      "maxChars": 9,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 12,
      "role": "label"
    },
    {
      "key": "note",
      "type": "text",
      "maxChars": 34,
      "role": "caption"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 22,
      "role": "cta"
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
      "target": "neon-flicker-on-card-slide",
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
    "ink": "#F6EEF2",
    "accent": "#FF2D8F",
    "secondary": "#2BE0FF",
    "paper": "#170E11",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "name": "fennel.",
    "sub": "open late",
    "note": "walk in, or order ahead.",
    "cta": "Order on fennel.app"
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
      "max": 9,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 12,
      "role": "label"
    },
    {
      "key": "note",
      "label": "Note",
      "type": "text",
      "max": 34,
      "role": "caption"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 22,
      "role": "cta"
    }
  ],
  "name": "Neon Sign Open Late",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-food-neon-cta",
    "bundleSha256": "c2f6e71aa76710d68dfc875c6501431b836d4463827b6d293444cb043cb759ab",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:09:18.975Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/16x9-paper.png",
        "sha256": "b68b132ff7c4f4a349a9bb65a08c45732a084d72eec2176d4bf0f99074e6dd82"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/16x9-night.png",
        "sha256": "c80c68718679c4038e5d6d16e1ad85326133e53e09e9ac5ff06f80db812d89da"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/16x9-color.png",
        "sha256": "034d5d80ad8b67c9b808bbb5bb5af8f36676bf900e6c202c75665b6de75b7269"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/9x16-paper.png",
        "sha256": "7e2c74f6119200b415f2e300263f2d05e3fff4e7e5bade03a3905865858dd136"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/9x16-night.png",
        "sha256": "01bf35043408c0ad07139da952b3ea956cd83b080a0d1716501b98d124b015db"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/9x16-color.png",
        "sha256": "9fe6436f736e6328f6957e40d8d133b4614f712fb93a58af771e8efed3958e62"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/1x1-paper.png",
        "sha256": "fcbf46325128faece1b454515b9b2fe2d5ea22189178b0dc2f539eb6403172bd"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/1x1-night.png",
        "sha256": "8a96fdec3e983287b9e7b9b49d370ac781625a338b2650e0618dce0d2ef43190"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/1x1-color.png",
        "sha256": "c09ee31c087d5f4cc81b557235df3f694ae96da463c2cdbfa20ddf633b726d04"
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
          "mg-food-neon-cta--16x9",
          "mg-food-neon-cta--9x16",
          "mg-food-neon-cta--1x1"
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
            "paperNight": 59.950466579861114,
            "paperColor": 20.11273871527778,
            "region": {
              "left": 104,
              "top": 135,
              "width": 1773,
              "height": 891
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 77.47043185763889,
            "paperColor": 23.122205946180557,
            "region": {
              "left": 45,
              "top": 116,
              "width": 999,
              "height": 1623
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 48.002522786458336,
            "paperColor": 18.772840711805557,
            "region": {
              "left": 42,
              "top": 67,
              "width": 1014,
              "height": 857
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
            "occupancy": 1.0796994579081636,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0687380420918369,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0742187500000002,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1081548504818597,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1081548504818597,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1081548504818597,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0546433937086497,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.044421183539717,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0494429824970686,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 13.29470486111111,
        "frames": [
          12,
          81,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 14.44259982638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/16x9-duration-90-frame-10.png",
                "sha256": "f1ad664b469ebb4bf8b13f45779a44a9111d3e99e8c16ed9ab2e991eeeb8d263",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/16x9-duration-90-frame-81.png",
                "sha256": "1cb47ed756465ba00d38704ea42d6c515ad89e8b6686cf30341ddc82baec28b2",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/16x9-duration-90-frame-79.png",
                "sha256": "65b57058f44e95a7646446f81f6aa8143508ada704965e33b0cb9d8f3df2b057",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/16x9-duration-90-frame-89.png",
                "sha256": "ceaa8d9b6fd61ef185686ca9f0b8356fe016668a0f5587c04e8cbabe0ee6d66c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 13.29470486111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/16x9-duration-900-frame-12.png",
                "sha256": "f3479de547aa029354d7dc49b663a2a9cea9ac5593b51afc349c7a56e2ee599c",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/16x9-duration-900-frame-81.png",
                "sha256": "cff436dffd0b4760053b82f455450c464a12b9f1cc8c8a1446f4e45a8abd306c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/16x9-duration-900-frame-792.png",
                "sha256": "1cb47ed756465ba00d38704ea42d6c515ad89e8b6686cf30341ddc82baec28b2",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/16x9-duration-900-frame-899.png",
                "sha256": "38c4c93aef89426c01d50c898404e2e4b030e02f4f12c36a90d7ef2c73ffe6ba",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 16.430772569444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/9x16-duration-90-frame-10.png",
                "sha256": "947f5b58e426c1e66aa2ee13f0d307bd0a341163f91aa9fdcd2683b664a0f9d4",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/9x16-duration-90-frame-81.png",
                "sha256": "7525da57c365725f1c121ca8f61790b3b50d388957475776ee1c32d5298f0954",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/9x16-duration-90-frame-79.png",
                "sha256": "04c90aa23fbb699367e4ebbf0700ea49ef9914b3eb7295780f3008569de244d6",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/9x16-duration-90-frame-89.png",
                "sha256": "ff376a8b65574c2c9e947bbbbaf7291ffe112488d4ee41eeaf4defd8a1945b71",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 15.402886284722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/9x16-duration-900-frame-12.png",
                "sha256": "a76b5f11938746f1a2436ed15be12ca1c61ddc70437a00967165cfd6a351efaf",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/9x16-duration-900-frame-81.png",
                "sha256": "90c621892f5bd30f252b959e6c1a042cf6ae6ed25b2ff4ac857792f83041cdc6",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/9x16-duration-900-frame-792.png",
                "sha256": "63092668b756ed0d0b3ece0b32ddd57721f5a94475d4538e1c13e078ff927d4b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/9x16-duration-900-frame-899.png",
                "sha256": "a919a568fe30efa0f295659fbb683e83310b7ead426a28981401a92f06a7b764",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 11.59939236111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/1x1-duration-90-frame-10.png",
                "sha256": "8aa541da965a964a07bf4a5305d0a3db79c845c65d26c875b62da0a73e0d3399",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/1x1-duration-90-frame-81.png",
                "sha256": "ad8277e495d4f795f942d93bb0e398344bb30a317f7f1846f82a82f6bc7c419d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/1x1-duration-90-frame-79.png",
                "sha256": "50d8ca074180a561671404704127b1e8afa35ce149738c8c8b9c0141e910f0d6",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/1x1-duration-90-frame-89.png",
                "sha256": "8522e9c3b97c5357e946de7c9d851312d960f8d8d53d3b2ef25924157ce8334c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 10.50954861111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/1x1-duration-900-frame-12.png",
                "sha256": "6cee774f2e8121817068ac48b3dd0e8656faa674eda661495e4783e740f21e5b",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/1x1-duration-900-frame-81.png",
                "sha256": "ae1663f2d634195a6d786dc2ad5343b5d80585382b9cfd396fcab25684cd68c2",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/1x1-duration-900-frame-792.png",
                "sha256": "8522e9c3b97c5357e946de7c9d851312d960f8d8d53d3b2ef25924157ce8334c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-food-neon-cta/1x1-duration-900-frame-899.png",
                "sha256": "ae1663f2d634195a6d786dc2ad5343b5d80585382b9cfd396fcab25684cd68c2",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "cta",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Neon wordmark and open-late sign beside an info card with hours, map and CTA; wordmark stays in its column."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 22,
        "compared": 22,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "c2f6e71aa76710d68dfc875c6501431b836d4463827b6d293444cb043cb759ab",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.090Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-neon-cta/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-neon-cta/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-neon-cta/16x9/detail.mp4",
      "bg": "#110a0c",
      "posterFrame": 81,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "dca2539571232b29e79bf37883fce85f282bff512116f55efdd7b369e1524875",
        "loop": "08e2d81ac29138fdd6401a2b6cf3f088aeb803e93a691469da16bd3ea1609a10",
        "detail": "7f6b8e6aa6f876352d57c31aa9af5990bfa47ba2eb3b06b59f2de8dacab3b5d0"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-neon-cta/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-neon-cta/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-neon-cta/9x16/detail.mp4",
      "bg": "#110a0c",
      "posterFrame": 81,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "05107f184793f9bfe64356b5724b064162b5af0b0a43346aafa7f18c65a12e88",
        "loop": "68e0f535b3c087eaa08861c3cea8ee13eda2406b8fd18845cd0fcdd385b41d98",
        "detail": "fcef087b0c7e611d6d8ab2172202aa689b13a10f20242a188893d375b11ffcae"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-neon-cta/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-neon-cta/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-neon-cta/1x1/detail.mp4",
      "bg": "#110a0c",
      "posterFrame": 81,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "b1a58b5ce357bcdc67a2245bc2dc5905db2d312a76b262bd81685f41cf7aa0ef",
        "loop": "d4cfa30a24a9bcb5b7201efe3efa84322653a76ab2ebcfafe94aedaabb160169",
        "detail": "cf4bd6c537c8e24dc72700af7d0535bcba75208aaa73b1a8fc10e19134ede2ed"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c2f6e71aa76710d68dfc875c6501431b836d4463827b6d293444cb043cb759ab/index.mjs",
    "sha256": "c2f6e71aa76710d68dfc875c6501431b836d4463827b6d293444cb043cb759ab",
    "bytes": 200654,
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
    "at": "2026-10-09T07:14:51.280Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
