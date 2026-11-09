// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/motion-gallery",
  "job": "data",
  "language": "glass",
  "mechanic": [
    "donut-rotate-to-target-mix"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "data",
    "donut-rotate-to-target-mix",
    "fintech",
    "investing",
    "portfolio",
    "donut"
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
      "key": "kicker",
      "type": "text",
      "maxChars": 20,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 30,
      "role": "headline"
    },
    {
      "key": "status",
      "type": "text",
      "maxChars": 12,
      "role": "label"
    },
    {
      "key": "chip",
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
    "displayFont": "fonts.serif",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "donut-rotate-to-target-mix",
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
    "ink": "#14162B",
    "accent": "#6E5BFF",
    "secondary": "#2FBF95",
    "paper": "#F1F3FA",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "halcy invest",
    "headline": "Your mix, kept in balance.",
    "status": "On target",
    "chip": "Rebalanced automatically"
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
      "max": 20,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 30,
      "role": "headline"
    },
    {
      "key": "status",
      "label": "Status",
      "type": "text",
      "max": 12,
      "role": "label"
    },
    {
      "key": "chip",
      "label": "Chip",
      "type": "text",
      "max": 28,
      "role": "caption"
    }
  ],
  "name": "Portfolio Rebalance Donut",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fin-portfolio-donut",
    "bundleSha256": "a2a003e93451b3a60aaa894bfd8e2c676fdda0fab5efea200f099f06be81fef0",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:17:51.890Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/16x9-paper.png",
        "sha256": "cc726f8efe6e6a58e84b604fba1175c3a48199f2a42e11a4d1b7c309e44a4d56"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/16x9-night.png",
        "sha256": "4de8060124676b14701f95cd19403981ea107c7aadf791a3e6b46e15e8284f13"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/16x9-color.png",
        "sha256": "bb14d8797832e58a40285d5dcf17bd85d62414ed1feeef0e074dd42350acf2e1"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/9x16-paper.png",
        "sha256": "4cf43949c82487fc80ef75a1a4bd7d353ae07415859e91e0713fdbc57ce80855"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/9x16-night.png",
        "sha256": "3c87ac2317c42261256d725b294770d4799a566e37323208d3af0a3f05901da9"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/9x16-color.png",
        "sha256": "50b3f2c901733ea1a4913f995023f025bfbb9d427e32e9cf3aea18925fc054ac"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/1x1-paper.png",
        "sha256": "9ab49149d0f742b7779e80d7fbee5ce2ecf4b0cc3fa2e9cf22ffec954121b81a"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/1x1-night.png",
        "sha256": "aff0a81c315c73036f7280d0bffdd7355cf35e6a551478c347af6cd5346cb7b2"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/1x1-color.png",
        "sha256": "92f714fa724253d452362e28851a41f4b0872e047c3f79627e4f7c773971c361"
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
          "mg-fin-portfolio-donut--16x9",
          "mg-fin-portfolio-donut--9x16",
          "mg-fin-portfolio-donut--1x1"
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
            "paperNight": 89.13465711805556,
            "paperColor": 13.487413194444445,
            "region": {
              "left": 134,
              "top": 138,
              "width": 1690,
              "height": 889
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 97.45022243923611,
            "paperColor": 17.34136284722222,
            "region": {
              "left": 44,
              "top": 154,
              "width": 993,
              "height": 1612
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 90.9482421875,
            "paperColor": 13.494954427083334,
            "region": {
              "left": 76,
              "top": 65,
              "width": 821,
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
            "occupancy": 1.0268450390701551,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0268450390701551,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0268450390701551,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0940337747753426,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0940337747753426,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0940337747753426,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9646361831197958,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9646361831197958,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9646361831197958,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.136610243055555,
        "frames": [
          14,
          99,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 8.164496527777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/16x9-duration-90-frame-10.png",
                "sha256": "1c17c12b99b15e55b56e64881e9886e5ac0724729c2d939d2bb56501fd04fddb",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/16x9-duration-90-frame-89.png",
                "sha256": "37c4ccc82ff6be5df7167a4e63f0788ac42471036555946c668643acfae72b1c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/16x9-duration-90-frame-79.png",
                "sha256": "e82d552a9c53f4fe2feae27d0222ad5402b82feba44ebb73932460a2571eac5c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 8.136610243055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/16x9-duration-900-frame-14.png",
                "sha256": "bfcfcbc56b8d2801306e27fa4e9e9965fa09d1b47656215df1cf8445d84524b6",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/16x9-duration-900-frame-99.png",
                "sha256": "37c4ccc82ff6be5df7167a4e63f0788ac42471036555946c668643acfae72b1c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/16x9-duration-900-frame-792.png",
                "sha256": "e82d552a9c53f4fe2feae27d0222ad5402b82feba44ebb73932460a2571eac5c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/16x9-duration-900-frame-899.png",
                "sha256": "e82d552a9c53f4fe2feae27d0222ad5402b82feba44ebb73932460a2571eac5c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 13.180013020833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/9x16-duration-90-frame-10.png",
                "sha256": "35a91de0cd8efe3d3cda36cdd69c8a3f18ab153fb136bc7d6acd9fba1b9678f0",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/9x16-duration-90-frame-89.png",
                "sha256": "d52de05d3183a4183b8b6606aa77cef2c9e6b5aacb886134bed3c4f000810af3",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/9x16-duration-90-frame-79.png",
                "sha256": "d52de05d3183a4183b8b6606aa77cef2c9e6b5aacb886134bed3c4f000810af3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 13.145073784722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/9x16-duration-900-frame-14.png",
                "sha256": "0f9fbff677f151991d9a702fa316f5b026c7d75299bcf9579a87623d71d81115",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/9x16-duration-900-frame-99.png",
                "sha256": "1081f542a621a9e3813e5ec92a207d4355c0e13f6ea22d944458f2d992a4c205",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/9x16-duration-900-frame-792.png",
                "sha256": "1081f542a621a9e3813e5ec92a207d4355c0e13f6ea22d944458f2d992a4c205",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/9x16-duration-900-frame-899.png",
                "sha256": "d52de05d3183a4183b8b6606aa77cef2c9e6b5aacb886134bed3c4f000810af3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 7.925672743055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/1x1-duration-90-frame-10.png",
                "sha256": "30e10d81f29ead351bd2a0d4596ef08289aa02f5cda29c19cfe8842f158292c7",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/1x1-duration-90-frame-89.png",
                "sha256": "7de38075134fb7e4913a5fb8b01546a1326453b8feb85fe797a17324bb53f636",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/1x1-duration-90-frame-79.png",
                "sha256": "7de38075134fb7e4913a5fb8b01546a1326453b8feb85fe797a17324bb53f636",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 7.895616319444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/1x1-duration-900-frame-14.png",
                "sha256": "8bceb2251dbf568d4e8d00c752b222ea0914f507730004363a6f6f7cd9180cab",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/1x1-duration-900-frame-99.png",
                "sha256": "7de38075134fb7e4913a5fb8b01546a1326453b8feb85fe797a17324bb53f636",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/1x1-duration-900-frame-792.png",
                "sha256": "7de38075134fb7e4913a5fb8b01546a1326453b8feb85fe797a17324bb53f636",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-fin-portfolio-donut/1x1-duration-900-frame-899.png",
                "sha256": "1f56d136af90c7d84c9b2b84e1738543ce104b6607289deeb9de142e3a252beb",
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
        "note": "Portfolio donut rebalances to target with allocation bars; rebrands recolor chart."
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
      "bundleSha256": "a2a003e93451b3a60aaa894bfd8e2c676fdda0fab5efea200f099f06be81fef0",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.077Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-portfolio-donut/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-portfolio-donut/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-portfolio-donut/16x9/detail.mp4",
      "bg": "#e6e6fa",
      "posterFrame": 99,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "98cdc77eedc6d73e1511540981ca51960d8881ce9ba3d253bcc8d3fa3dc3b245",
        "loop": "51ff284386a11ed3e920b3c545b6161d20e5b5a0e234bb53b5a557645f2e74ef",
        "detail": "4c88d04eb32f4eef1be77a53a31a677e116f455fce0948e48a2cb1958f7e0af9"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-portfolio-donut/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-portfolio-donut/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-portfolio-donut/9x16/detail.mp4",
      "bg": "#e6e6fa",
      "posterFrame": 99,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "028cf52acca230caa6bbf210c9d07a1f859a81f271948b15c960cd82f1783ff2",
        "loop": "3bf902d84bf2c3c1e9562f6cd15a9e0a5912af39a48d5e305e40255570a5bcf1",
        "detail": "427a447ce24298a92448a8c16eb9f6eb2eec8d156e904c5809e08504fc775218"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-portfolio-donut/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-portfolio-donut/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-portfolio-donut/1x1/detail.mp4",
      "bg": "#e6e6fa",
      "posterFrame": 99,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f125accbc984ba50664c8eedeab2962e77d2d38d3f0d8eced211edafca1a6d4f",
        "loop": "cbf7d0470dd7364410949a90b49cd71d7f103da4e195c6de83b0ac699889ec69",
        "detail": "5a58a2e5a8b43513e0291ce0bb6b0dbc50498347522e15638f549e7dbc5ae55c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/a2a003e93451b3a60aaa894bfd8e2c676fdda0fab5efea200f099f06be81fef0/index.mjs",
    "sha256": "a2a003e93451b3a60aaa894bfd8e2c676fdda0fab5efea200f099f06be81fef0",
    "bytes": 271664,
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
    "at": "2026-10-09T07:06:58.896Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
