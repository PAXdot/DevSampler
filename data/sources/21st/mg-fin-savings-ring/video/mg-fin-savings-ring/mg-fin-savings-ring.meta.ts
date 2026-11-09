// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/motion-gallery",
  "job": "data",
  "language": "hand-drawn",
  "mechanic": [
    "goal-ring-fill-to-confetti"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "data",
    "goal-ring-fill-to-confetti",
    "fintech",
    "savings",
    "goal",
    "progress"
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
      "in": 99,
      "out": 0
    },
    "markers": {
      "settled": 99
    },
    "beats": [
      0,
      25,
      50,
      74,
      99
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
      "key": "goal",
      "type": "text",
      "maxChars": 16,
      "role": "label"
    },
    {
      "key": "value",
      "type": "text",
      "maxChars": 7,
      "role": "value"
    },
    {
      "key": "badge",
      "type": "text",
      "maxChars": 30,
      "role": "caption"
    },
    {
      "key": "note",
      "type": "text",
      "maxChars": 28,
      "role": "caption"
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
      "target": "goal-ring-fill-to-confetti",
      "prop": "transform",
      "from": "enter",
      "settledBy": 99,
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
    "ink": "#2B1810",
    "accent": "#E8492A",
    "secondary": "#7A962A",
    "paper": "#FFE4CC",
    "displayFont": "Caveat",
    "bodyFont": "Bricolage Grotesque",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "goal": "Tokyo trip",
    "value": "$4,000",
    "badge": "Goal reached · 3 weeks early",
    "note": "37 weeks of spare change"
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
      "key": "goal",
      "label": "Goal",
      "type": "text",
      "max": 16,
      "role": "label"
    },
    {
      "key": "value",
      "label": "Value",
      "type": "text",
      "max": 7,
      "role": "value"
    },
    {
      "key": "badge",
      "label": "Badge",
      "type": "text",
      "max": 30,
      "role": "caption"
    },
    {
      "key": "note",
      "label": "Note",
      "type": "text",
      "max": 28,
      "role": "caption"
    }
  ],
  "name": "Savings Goal Ring",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fin-savings-ring",
    "bundleSha256": "373ae4685bce167495a69ce496a41508dc127f2e56fd04b3da16b49f57a11935",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:16:39.939Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/16x9-paper.png",
        "sha256": "ca37131590b47bef8ec82f802202fc17462468ff31805d8f322cb5f0b6650486"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/16x9-night.png",
        "sha256": "ca308c3183b065ffeefcc6666eb39c928b58786519fedc03386dabff0791df0e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/16x9-color.png",
        "sha256": "ed98f8e24b6768b3b524c5e988c2060ba12b761694a54f68813dbbe8b45967fb"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/9x16-paper.png",
        "sha256": "079e80db90a8f068cef00e05cfca8f49645a9f7c03d42ebd679b02068b771d38"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/9x16-night.png",
        "sha256": "d7675f8dfabcd1cca6792f984642f962c08b71ee47e32cf00396c0f01a4ed11a"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/9x16-color.png",
        "sha256": "c5c86fb3aa8a15101165617912620a85d6186ae49baa21e4e1bafe5ad3d3087b"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/1x1-paper.png",
        "sha256": "1c1d64c6431f1aa193f12ad6cd00ece8f5726c797c499845a2955d88d065f6e3"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/1x1-night.png",
        "sha256": "dc561107eecba2c77624a2467806456b13ecc83fe261272ba540360f656c9cd1"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/1x1-color.png",
        "sha256": "70906a984d94197fba32da1e2489c8ce0c3831af643005596c0e317764fdeda1"
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
          "mg-fin-savings-ring--16x9",
          "mg-fin-savings-ring--9x16",
          "mg-fin-savings-ring--1x1"
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
            "paperNight": 43.50396050347222,
            "paperColor": 10.964301215277779,
            "region": {
              "left": 77,
              "top": 69,
              "width": 1612,
              "height": 884
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 84.87261284722223,
            "paperColor": 20.660563151041668,
            "region": {
              "left": 69,
              "top": 141,
              "width": 942,
              "height": 1722
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 68.75981987847223,
            "paperColor": 17.71185980902778,
            "region": {
              "left": 65,
              "top": 65,
              "width": 932,
              "height": 888
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
            "occupancy": 0.9739434611293079,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9715267279751408,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9739434611293079,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0932136164651047,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1086653990299826,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0932136164651047,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0055942816083911,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0034363539654547,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0055942816083911,
            "bad": [],
            "measured": 9
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.704535590277778,
        "frames": [
          14,
          99,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 7.703125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/16x9-duration-90-frame-10.png",
                "sha256": "01ee722858eeda97cb7bce40a76e4228f0500c1a7581a19bcf210922031813ce",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/16x9-duration-90-frame-89.png",
                "sha256": "19fd8fab28439cf65d0f0e7fc8b2c3191c4fa093fc13f55fa3255cd9ce7836d3",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/16x9-duration-90-frame-79.png",
                "sha256": "19fd8fab28439cf65d0f0e7fc8b2c3191c4fa093fc13f55fa3255cd9ce7836d3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.704535590277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/16x9-duration-900-frame-14.png",
                "sha256": "dfa738b1ebc41a6866678a649d389298f3d985eca69a38a568b4ee31bd21267c",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/16x9-duration-900-frame-99.png",
                "sha256": "19fd8fab28439cf65d0f0e7fc8b2c3191c4fa093fc13f55fa3255cd9ce7836d3",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/16x9-duration-900-frame-792.png",
                "sha256": "19fd8fab28439cf65d0f0e7fc8b2c3191c4fa093fc13f55fa3255cd9ce7836d3",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/16x9-duration-900-frame-899.png",
                "sha256": "19fd8fab28439cf65d0f0e7fc8b2c3191c4fa093fc13f55fa3255cd9ce7836d3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 20.48806423611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/9x16-duration-90-frame-10.png",
                "sha256": "d9de4650bc3dd745452de4e8718ec9d4bcd94648eebde01a6a41f5e62b112782",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/9x16-duration-90-frame-89.png",
                "sha256": "067153222ae453be0a8b518456a3acf26f3e12f350931ca9b2a15bb4e842a8e1",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/9x16-duration-90-frame-79.png",
                "sha256": "067153222ae453be0a8b518456a3acf26f3e12f350931ca9b2a15bb4e842a8e1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 20.487955729166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/9x16-duration-900-frame-14.png",
                "sha256": "6a437d5d7ab4c3b4b7e93d56c6d29001f18414192f0d95224415122af814b8c7",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/9x16-duration-900-frame-99.png",
                "sha256": "067153222ae453be0a8b518456a3acf26f3e12f350931ca9b2a15bb4e842a8e1",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/9x16-duration-900-frame-792.png",
                "sha256": "067153222ae453be0a8b518456a3acf26f3e12f350931ca9b2a15bb4e842a8e1",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/9x16-duration-900-frame-899.png",
                "sha256": "067153222ae453be0a8b518456a3acf26f3e12f350931ca9b2a15bb4e842a8e1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 13.16189236111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/1x1-duration-90-frame-10.png",
                "sha256": "5480f318af6dc96f89cd74855ddd4fc4c151a356f51f4f57cd37f22f75833cf9",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/1x1-duration-90-frame-89.png",
                "sha256": "fb1a64a31a8587bd0fad5a70360dbf72527342ade54c276b96256cc213307f4d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/1x1-duration-90-frame-79.png",
                "sha256": "fb1a64a31a8587bd0fad5a70360dbf72527342ade54c276b96256cc213307f4d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 13.164388020833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/1x1-duration-900-frame-14.png",
                "sha256": "a23bcf8ef6dd2272938413f5dd6bf7b9d4b3573a7a73605f5beb7dc13d5aa399",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/1x1-duration-900-frame-99.png",
                "sha256": "fb1a64a31a8587bd0fad5a70360dbf72527342ade54c276b96256cc213307f4d",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/1x1-duration-900-frame-792.png",
                "sha256": "fb1a64a31a8587bd0fad5a70360dbf72527342ade54c276b96256cc213307f4d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-savings-ring/1x1-duration-900-frame-899.png",
                "sha256": "fb1a64a31a8587bd0fad5a70360dbf72527342ade54c276b96256cc213307f4d",
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
        "note": "Savings ring fills to the goal amount with confetti and a handwritten note; rebrands distinct."
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
      "bundleSha256": "373ae4685bce167495a69ce496a41508dc127f2e56fd04b3da16b49f57a11935",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.075Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-savings-ring/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-savings-ring/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-savings-ring/16x9/detail.mp4",
      "bg": "#f9bfa5",
      "posterFrame": 99,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "1146b27467084f5108ff5b5cf5a9b1f0412ee8ea9b9f3c2dbc4bd72f59c14166",
        "loop": "50a334874704f4e0bd75afbb66cd79ea499be97d1bb42a894bc753381c72075a",
        "detail": "4b480c40bed61b6fe3e59cbac757d37a471ec5de7cf8fa7bffe3fa6fb7ce5ddf"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-savings-ring/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-savings-ring/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-savings-ring/9x16/detail.mp4",
      "bg": "#fbccb2",
      "posterFrame": 99,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "caa781014b77bcf63b693940d77dd78ad77dea668ab7e0442e89edc9dd860c1f",
        "loop": "e2232c7f6cbe5a84e1a2b8759782084f115966bf639854b7f6dded8e1db78933",
        "detail": "4795512db10f449858cd6fb4be6e66a1b9d2effc0a3659056f1225f3a6bfb9eb"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-savings-ring/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-savings-ring/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-savings-ring/1x1/detail.mp4",
      "bg": "#fac6ac",
      "posterFrame": 99,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7ad5bff00d3df2acf4f953acb1871e73c95c3cebe62e5ee603caac6706f8f53c",
        "loop": "21e9e3ead00dd4c8916c76e15c98796fc61024ba045c8faf2b052502511ae529",
        "detail": "f8129f92fb781a0a2d1c357920adbe62ff36c21781a0c6c5b1f4ec68c4705904"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/373ae4685bce167495a69ce496a41508dc127f2e56fd04b3da16b49f57a11935/index.mjs",
    "sha256": "373ae4685bce167495a69ce496a41508dc127f2e56fd04b3da16b49f57a11935",
    "bytes": 271658,
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
    "at": "2026-10-09T07:06:20.889Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
