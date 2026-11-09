// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "rider-traces-route-on-map"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "rider-traces-route-on-map",
    "delivery",
    "map",
    "tracking",
    "app"
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
      "in": 141,
      "out": 0
    },
    "markers": {
      "settled": 141
    },
    "beats": [
      0,
      35,
      71,
      106,
      141
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
      "key": "toast",
      "type": "text",
      "maxChars": 24,
      "role": "headline"
    },
    {
      "key": "order",
      "type": "text",
      "maxChars": 16,
      "role": "kicker"
    },
    {
      "key": "item",
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
    "displayFont": "fonts.display",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "rider-traces-route-on-map",
      "prop": "transform",
      "from": "enter",
      "settledBy": 141,
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
    "ink": "#F4F6F8",
    "accent": "#C8FF4A",
    "secondary": "#FF7A3D",
    "paper": "#11161B",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "toast": "Sami is at your door",
    "order": "Order #2041",
    "item": "2× Smash burger"
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
      "key": "toast",
      "label": "Toast",
      "type": "text",
      "max": 24,
      "role": "headline"
    },
    {
      "key": "order",
      "label": "Order",
      "type": "text",
      "max": 16,
      "role": "kicker"
    },
    {
      "key": "item",
      "label": "Item",
      "type": "text",
      "max": 18,
      "role": "label"
    }
  ],
  "name": "Delivery Route Tracker",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-food-delivery-route",
    "bundleSha256": "fb893c70281e8f6cad7b03d7ddd015395de2321589dde924a444ebdc89a8e11a",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:09:10.016Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/16x9-paper.png",
        "sha256": "49a3818ba5adf96305a942f64ecc0e41f21dca57811a872ce9e3891e9e0db82e"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/16x9-night.png",
        "sha256": "5f3f56c5d8aff82b4de054d1b0ec3f64109cd7e14d61730dd4eb75ce17afc5d4"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/16x9-color.png",
        "sha256": "7e82a62a591c7ac1474c58254983e991594faadb64bbb55a8d2c8bf5b783aa9c"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/9x16-paper.png",
        "sha256": "3ec56eb216eb57329926944ad1ed6183c9a132b3e7afaa3e20edcd136d78291d"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/9x16-night.png",
        "sha256": "18e5a8a01032c9ac54aea3a2609c240f642b714460bc23b14f89d7f2a820360d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/9x16-color.png",
        "sha256": "1fc7124a8e37e9a3c8a0bdd77be8bfc40f67c476cc11206eba900596e1d8e319"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/1x1-paper.png",
        "sha256": "5ffc47125ae87adef6bc6a9eed425fefe63cce1d9435a6abab74324315fed6f8"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/1x1-night.png",
        "sha256": "1e24b097211639ab4cbcef59a60539bc4b28c309351c5a92c006c8d6f8fa7824"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/1x1-color.png",
        "sha256": "3ce21840a7215d20c5f6ffbd4009d22378d464dc9d06542f881a753827e0c157"
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
          "mg-food-delivery-route--16x9",
          "mg-food-delivery-route--9x16",
          "mg-food-delivery-route--1x1"
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
            "paperNight": 135.92111545138889,
            "paperColor": 16.34247504340278,
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
            "paperNight": 130.65934244791666,
            "paperColor": 21.189453125,
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
            "paperNight": 139.224609375,
            "paperColor": 14.538167317708334,
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
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.392035590277779,
        "frames": [
          21,
          141,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 10.35134548611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/16x9-duration-90-frame-10.png",
                "sha256": "99e350ded41edb7ff5a3bf8f04f3803bfd5cf7c09c2ad2192e04febaaa1143e6",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/16x9-duration-90-frame-89.png",
                "sha256": "15f6ffe23b59dd2d79c142687882ec32d95402af78aaa4689279bd13d56f51ce",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/16x9-duration-90-frame-79.png",
                "sha256": "15f6ffe23b59dd2d79c142687882ec32d95402af78aaa4689279bd13d56f51ce",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 9.392035590277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/16x9-duration-900-frame-21.png",
                "sha256": "75b89ea207835888462358f92e5d9e088c2e593dce48cec71195745a092211b4",
                "alphaMass": 587520
              },
              {
                "frame": 141,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/16x9-duration-900-frame-141.png",
                "sha256": "15f6ffe23b59dd2d79c142687882ec32d95402af78aaa4689279bd13d56f51ce",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/16x9-duration-900-frame-792.png",
                "sha256": "15f6ffe23b59dd2d79c142687882ec32d95402af78aaa4689279bd13d56f51ce",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/16x9-duration-900-frame-899.png",
                "sha256": "15f6ffe23b59dd2d79c142687882ec32d95402af78aaa4689279bd13d56f51ce",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 14.307508680555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/9x16-duration-90-frame-10.png",
                "sha256": "6f4a948363668c6b7a325abd99f0b88643d1abe35fc37ddfa9a5c502dbb0f124",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/9x16-duration-90-frame-89.png",
                "sha256": "fbc3386886ce183dc73c26bdddb97e318422145c5bf9c7f5319851003795284c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/9x16-duration-90-frame-79.png",
                "sha256": "fbc3386886ce183dc73c26bdddb97e318422145c5bf9c7f5319851003795284c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 13.208550347222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/9x16-duration-900-frame-21.png",
                "sha256": "a56ac43827a4a942e5a1e89048663c9d85182bfe1319447f184ae38b15609ef2",
                "alphaMass": 587520
              },
              {
                "frame": 141,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/9x16-duration-900-frame-141.png",
                "sha256": "fbc3386886ce183dc73c26bdddb97e318422145c5bf9c7f5319851003795284c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/9x16-duration-900-frame-792.png",
                "sha256": "fbc3386886ce183dc73c26bdddb97e318422145c5bf9c7f5319851003795284c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/9x16-duration-900-frame-899.png",
                "sha256": "fbc3386886ce183dc73c26bdddb97e318422145c5bf9c7f5319851003795284c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 8.36252170138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/1x1-duration-90-frame-10.png",
                "sha256": "fe1e61ca529e12a6dc32a203345d29d5bdf72005f04b05744cf256374074e46c",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/1x1-duration-90-frame-89.png",
                "sha256": "2e7d6c14b4ddcbeab1d18907b58734c6049682916a0bfe6cf15777e8dbd69959",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/1x1-duration-90-frame-79.png",
                "sha256": "2e7d6c14b4ddcbeab1d18907b58734c6049682916a0bfe6cf15777e8dbd69959",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 7.569661458333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/1x1-duration-900-frame-21.png",
                "sha256": "bf524efa0f7c7f347807cb99c19e012034390936662bf8195c0f598fd408af68",
                "alphaMass": 587520
              },
              {
                "frame": 141,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/1x1-duration-900-frame-141.png",
                "sha256": "2e7d6c14b4ddcbeab1d18907b58734c6049682916a0bfe6cf15777e8dbd69959",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/1x1-duration-900-frame-792.png",
                "sha256": "2e7d6c14b4ddcbeab1d18907b58734c6049682916a0bfe6cf15777e8dbd69959",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-food-delivery-route/1x1-duration-900-frame-899.png",
                "sha256": "2e7d6c14b4ddcbeab1d18907b58734c6049682916a0bfe6cf15777e8dbd69959",
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
        "note": "Courier route draws across a city map to the door with an order card and arrival toast; rebrands recolor map and cards."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 76,
        "compared": 76,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "fb893c70281e8f6cad7b03d7ddd015395de2321589dde924a444ebdc89a8e11a",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.089Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-delivery-route/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-delivery-route/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-delivery-route/16x9/detail.mp4",
      "bg": "#11161b",
      "posterFrame": 141,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "1e6748522ad70d79b183640cb49811bed3d66a0f84ca4fc509346db88afdfcae",
        "loop": "21fe5b3faede5dafd253e0ef2425f4c6d91943765684f07ef126964174399e1e",
        "detail": "991b555425da28a2a31ded7e56997925cbbe1dc083e36e1ed08e8d948059d323"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-delivery-route/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-delivery-route/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-delivery-route/9x16/detail.mp4",
      "bg": "#11161b",
      "posterFrame": 141,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "95ad0e63a847b17da32e13111f280b6b46620c4a49172944c71981343fdbaa2f",
        "loop": "f8b9a66ce3bb6be62ae6ee217560b82c7533bddf7fc406c2aa79297417b1f35b",
        "detail": "0d169aa02c1ba07d98330ab4a054fe89a7ba7e32660c393f212e1613f3e20b71"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-delivery-route/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-delivery-route/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-delivery-route/1x1/detail.mp4",
      "bg": "#191e23",
      "posterFrame": 141,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4bfa5d3cdb72e57e69761985758df69b6c0940885ba43da866b2894e0ea9a721",
        "loop": "328922ba38b005c9174650a6fa09b3dfce5d5410a399204b2a2c05d89841ad5c",
        "detail": "f421d97808f0057e5e3957d139044b559e2b3dbfadbd3946bc4a919094ac5647"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/fb893c70281e8f6cad7b03d7ddd015395de2321589dde924a444ebdc89a8e11a/index.mjs",
    "sha256": "fb893c70281e8f6cad7b03d7ddd015395de2321589dde924a444ebdc89a8e11a",
    "bytes": 206452,
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
    "at": "2026-10-09T07:14:02.451Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
