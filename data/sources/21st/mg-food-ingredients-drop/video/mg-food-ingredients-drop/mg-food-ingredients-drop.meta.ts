// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "gallery/motion-gallery",
  "job": "gallery",
  "language": "kinetic-poster",
  "mechanic": [
    "ingredients-fall-into-bowl"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "gallery",
    "ingredients-fall-into-bowl",
    "restaurant",
    "bowl",
    "ingredients",
    "price"
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
      "in": 96,
      "out": 0
    },
    "markers": {
      "settled": 96
    },
    "beats": [
      0,
      24,
      48,
      72,
      96
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
      "maxChars": 34,
      "role": "headline"
    },
    {
      "key": "brand",
      "type": "text",
      "maxChars": 20,
      "role": "label"
    },
    {
      "key": "price",
      "type": "text",
      "maxChars": 6,
      "role": "value"
    },
    {
      "key": "facts",
      "type": "text",
      "maxChars": 30,
      "role": "caption"
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
      "target": "ingredients-fall-into-bowl",
      "prop": "transform",
      "from": "enter",
      "settledBy": 96,
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
    "ink": "#173A24",
    "accent": "#E2543A",
    "secondary": "#5EA13A",
    "paper": "#DEEDCD",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "Five things. One great bowl.",
    "brand": "fennel. bowls",
    "price": "$14",
    "facts": "32g protein · 540 kcal"
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
      "max": 34,
      "role": "headline"
    },
    {
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 20,
      "role": "label"
    },
    {
      "key": "price",
      "label": "Price",
      "type": "text",
      "max": 6,
      "role": "value"
    },
    {
      "key": "facts",
      "label": "Facts",
      "type": "text",
      "max": 30,
      "role": "caption"
    }
  ],
  "name": "Ingredients Drop In",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-food-ingredients-drop",
    "bundleSha256": "0a901221fe6c220d03aa2ee204413adc8554fbeda1f30c76b9060de3cf0af28c",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:09:00.978Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/16x9-paper.png",
        "sha256": "b616ba135c31df7ca8b627fd4dcf1086f6c7d9d8d00bc2b72695f2b114811e5d"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/16x9-night.png",
        "sha256": "9b15bd397cb72987dd62dfab3100e671874d4748c731f48ee29337e868b01ed0"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/16x9-color.png",
        "sha256": "6955e675395d4552ac446829e3136d200e0e4e39cb11f0cf86bdc21bf2a344e6"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/9x16-paper.png",
        "sha256": "8b791c667152a0dbf7e4afffe02b45d97f57ba209cd3018bca94e97c7785e510"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/9x16-night.png",
        "sha256": "52ce030b6fee3069119be39922bec230af7bad0702f0303c42ff10a158858d00"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/9x16-color.png",
        "sha256": "43c25096d40f0abc7a4c69bde99a647850b32be0d853f78f1d3f15f89d2d1081"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/1x1-paper.png",
        "sha256": "807873f0fc49b9d67fa1a9a75924d22a1a35d7f185b38bdc1c4a6d46b2957009"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/1x1-night.png",
        "sha256": "e5cfaee448de0644c1427f90446f9d1c91f4b650169abd1564c1f711ee4c698f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/1x1-color.png",
        "sha256": "3d06264b6ef4f0ec55c9ac1b3c971aa118b6336546ba2341c13bec82a897ba86"
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
          "mg-food-ingredients-drop--16x9",
          "mg-food-ingredients-drop--9x16",
          "mg-food-ingredients-drop--1x1"
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
            "paperNight": 29.771484375,
            "paperColor": 15.157470703125,
            "region": {
              "left": 128,
              "top": 29,
              "width": 1749,
              "height": 833
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 44.29383680555556,
            "paperColor": 16.829345703125,
            "region": {
              "left": 82,
              "top": 154,
              "width": 975,
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
            "paperNight": 30.64800347222222,
            "paperColor": 13.82595486111111,
            "region": {
              "left": 76,
              "top": 65,
              "width": 932,
              "height": 977
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
            "occupancy": 0.9957521540637863,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9957521540637863,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9957521540637863,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0815325117315446,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0815325117315446,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0815325117315446,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1063801949677907,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1063801949677907,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1063801949677907,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.733181423611111,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 7.8505859375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/16x9-duration-90-frame-10.png",
                "sha256": "2a515be0a3b7f17f234ffdce77fabb9e637cf69c8e357e8a2f50314df1cb4056",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/16x9-duration-90-frame-89.png",
                "sha256": "fdcc948803b5cd88aff9554299f4fdc5745f5158c67136c7792b02551c8141ee",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/16x9-duration-90-frame-79.png",
                "sha256": "fdcc948803b5cd88aff9554299f4fdc5745f5158c67136c7792b02551c8141ee",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.733181423611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/16x9-duration-900-frame-14.png",
                "sha256": "09174b3859909512ab2a8255906ba97e50cc3d99889fc5d698ba603a054c4952",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/16x9-duration-900-frame-96.png",
                "sha256": "fdcc948803b5cd88aff9554299f4fdc5745f5158c67136c7792b02551c8141ee",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/16x9-duration-900-frame-792.png",
                "sha256": "fdcc948803b5cd88aff9554299f4fdc5745f5158c67136c7792b02551c8141ee",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/16x9-duration-900-frame-899.png",
                "sha256": "fdcc948803b5cd88aff9554299f4fdc5745f5158c67136c7792b02551c8141ee",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 11.102213541666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/9x16-duration-90-frame-10.png",
                "sha256": "cdd761b622d89772e9adbb40b185bef89731c6b5b00d9c2ce06aa8065ce02612",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/9x16-duration-90-frame-89.png",
                "sha256": "274aed55b4110885c4a16330c947119fa6eb82d0bef9a61cb61597e546cfa4a2",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/9x16-duration-90-frame-79.png",
                "sha256": "274aed55b4110885c4a16330c947119fa6eb82d0bef9a61cb61597e546cfa4a2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 10.920247395833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/9x16-duration-900-frame-14.png",
                "sha256": "3f66a9a0dd482448e2e875e09cb6f10a474e6fcc7208f00256bc8b1935977d35",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/9x16-duration-900-frame-96.png",
                "sha256": "274aed55b4110885c4a16330c947119fa6eb82d0bef9a61cb61597e546cfa4a2",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/9x16-duration-900-frame-792.png",
                "sha256": "274aed55b4110885c4a16330c947119fa6eb82d0bef9a61cb61597e546cfa4a2",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/9x16-duration-900-frame-899.png",
                "sha256": "274aed55b4110885c4a16330c947119fa6eb82d0bef9a61cb61597e546cfa4a2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 9.541124131944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/1x1-duration-90-frame-10.png",
                "sha256": "844483d33c1b6354d97e4aaa1e18148dad2e156522da08d3275d6456edc79a88",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/1x1-duration-90-frame-89.png",
                "sha256": "cf7886804a202e2646b1e19e2f18069bf87bd7b66d3eaaef092ff0677cdbed36",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/1x1-duration-90-frame-79.png",
                "sha256": "cf7886804a202e2646b1e19e2f18069bf87bd7b66d3eaaef092ff0677cdbed36",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 9.449327256944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/1x1-duration-900-frame-14.png",
                "sha256": "da451c333769a6a40eb7e4dda01fd635461910e2c4acee24d2d7ac2b54502278",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/1x1-duration-900-frame-96.png",
                "sha256": "cf7886804a202e2646b1e19e2f18069bf87bd7b66d3eaaef092ff0677cdbed36",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/1x1-duration-900-frame-792.png",
                "sha256": "cf7886804a202e2646b1e19e2f18069bf87bd7b66d3eaaef092ff0677cdbed36",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-ingredients-drop/1x1-duration-900-frame-899.png",
                "sha256": "cf7886804a202e2646b1e19e2f18069bf87bd7b66d3eaaef092ff0677cdbed36",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "gallery",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Ingredients drop into a bowl beside a stacked headline and price sticker; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 25,
        "compared": 25,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "0a901221fe6c220d03aa2ee204413adc8554fbeda1f30c76b9060de3cf0af28c",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.089Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-ingredients-drop/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-ingredients-drop/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-ingredients-drop/16x9/detail.mp4",
      "bg": "#ddeccd",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0897ec2ea94601b956d74556b2d69cb568124c1ba70d5d6adda13bb1539228fa",
        "loop": "2399e792e578d9380a6f70562db140e49c22a7e22c3b4cbcfa253ce69f91001a",
        "detail": "7968555681f5a9d3d5911989167097b5e6b66c39e3dd9a30772fd1151cc17a5f"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-ingredients-drop/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-ingredients-drop/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-ingredients-drop/9x16/detail.mp4",
      "bg": "#deeccd",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "55b12c75b58e0e9665cdd776c423edf4475568b105a76bf59975a6d6afc355f0",
        "loop": "543b9b1cf95a3134a5fa39404ef842ea480fa2b57b887357bb52bb3236f2d534",
        "detail": "c36c0362ca629b0062d0c76778e592537c80f1bc5301ba772c4d3c978a5e53a6"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-ingredients-drop/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-ingredients-drop/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-ingredients-drop/1x1/detail.mp4",
      "bg": "#ddeccd",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "29458ea97c1b33ea392b90b9a1d542502b9ec35bf94639ba9248d5c07ba4233c",
        "loop": "043d46f798b133247c79d49b1e7ea7edcffabbef309777c9197d15234f62a1e1",
        "detail": "80e397bb37b8986285d99ecc3747c4012925e37302ef5e9c40f706a4fe014f24"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/0a901221fe6c220d03aa2ee204413adc8554fbeda1f30c76b9060de3cf0af28c/index.mjs",
    "sha256": "0a901221fe6c220d03aa2ee204413adc8554fbeda1f30c76b9060de3cf0af28c",
    "bytes": 205392,
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
    "at": "2026-10-09T07:14:21.040Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
