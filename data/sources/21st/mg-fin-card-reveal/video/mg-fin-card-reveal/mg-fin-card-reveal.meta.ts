// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "editorial",
  "mechanic": [
    "card-spin-in-with-sheen"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "card-spin-in-with-sheen",
    "fintech",
    "card",
    "launch"
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
      "in": 117,
      "out": 0
    },
    "markers": {
      "settled": 117
    },
    "beats": [
      0,
      29,
      59,
      88,
      117
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
      "maxChars": 28,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 26,
      "role": "headline"
    },
    {
      "key": "line2",
      "type": "text",
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 18,
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
      "target": "card-spin-in-with-sheen",
      "prop": "transform",
      "from": "enter",
      "settledBy": 117,
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
    "ink": "#ECE9E2",
    "accent": "#CFF26B",
    "secondary": "#BEB9AC",
    "paper": "#151619",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Halcy Metal · now shipping",
    "headline": "Heavier than it looks.",
    "line2": "Lighter on fees.",
    "cta": "Reserve yours"
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
      "max": 28,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 26,
      "role": "headline"
    },
    {
      "key": "line2",
      "label": "Line 2",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 18,
      "role": "cta"
    }
  ],
  "name": "Metal Card Reveal",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fin-card-reveal",
    "bundleSha256": "6091a07a5626714ca1315fb972f65b2bffe39992e7bf5a071693460ad5db0f7e",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:16:39.864Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/16x9-paper.png",
        "sha256": "860e7a4a54e2c8eb228e7057dae6750c53a60f3a1aff7f9ae62d1d957de4cc2f"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/16x9-night.png",
        "sha256": "092ef2ccef8b9efaab51989f48e92c1c9a6271d3299c35b1b8ccde114daa29e5"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/16x9-color.png",
        "sha256": "376c6cbea329fa87f5afdedaffc021acacac98bf3f4766503ba965bd4756e0b4"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/9x16-paper.png",
        "sha256": "98199c4011f5ae43d41a14b2451794a25b861fb533350e34ab106a1d930748b4"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/9x16-night.png",
        "sha256": "04e1509c0c7abf5649fbdee1e378266b3c9cc918f9c89c294cc275fc9009d2b6"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/9x16-color.png",
        "sha256": "16f0dbefeb067b60a8b050bd33f81b76b399de7a8dcf224feb9c1b56ac86a010"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/1x1-paper.png",
        "sha256": "23df4d3e84d28b97a5fb44cccf915d42f241826ff12d8ec3a48830ef52e1e6ea"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/1x1-night.png",
        "sha256": "fb8f47047bc856c465577783e589e8b3d13d3833f0b7bda735152abd28645a4d"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/1x1-color.png",
        "sha256": "9a9582622655b366d10f2f1af8d472eabbe83844e4ff198004551ee47be3130e"
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
          "mg-fin-card-reveal--16x9",
          "mg-fin-card-reveal--9x16",
          "mg-fin-card-reveal--1x1"
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
            "paperNight": 27.603759765625,
            "paperColor": 14.830322265625,
            "region": {
              "left": 111,
              "top": 233,
              "width": 1745,
              "height": 847
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 34.9345703125,
            "paperColor": 18.141845703125,
            "region": {
              "left": 42,
              "top": 154,
              "width": 1038,
              "height": 1637
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 24.91455078125,
            "paperColor": 11.733561197916666,
            "region": {
              "left": 62,
              "top": 76,
              "width": 1005,
              "height": 953
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
            "occupancy": 0.8598983976949836,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0101719040882817,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0095930090143055,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1613482680880998,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1613482680880998,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1613482680880998,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1637317392663515,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1637317392663515,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1637317392663515,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.92306857638889,
        "frames": [
          17,
          117,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 10.03830295138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/16x9-duration-90-frame-10.png",
                "sha256": "2c194567ade70b5675b36c70b0702a49386fbea662710fef1a441932d696c129",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/16x9-duration-90-frame-89.png",
                "sha256": "d6131642adfb8088d2149f904a1947483ec9e9aacf4450d8b96b321f4db6f116",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/16x9-duration-90-frame-79.png",
                "sha256": "858d8b5f8dcf63a7bb3d452416f60058d5639a39053202c89fe4616a326caae6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 9.92306857638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/16x9-duration-900-frame-17.png",
                "sha256": "b732b4fb2f54855cd5f21a119f4eb46216b0f93f053d168f054fdfa9c7cbe1af",
                "alphaMass": 587520
              },
              {
                "frame": 117,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/16x9-duration-900-frame-117.png",
                "sha256": "858d8b5f8dcf63a7bb3d452416f60058d5639a39053202c89fe4616a326caae6",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/16x9-duration-900-frame-792.png",
                "sha256": "858d8b5f8dcf63a7bb3d452416f60058d5639a39053202c89fe4616a326caae6",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/16x9-duration-900-frame-899.png",
                "sha256": "858d8b5f8dcf63a7bb3d452416f60058d5639a39053202c89fe4616a326caae6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 17.83376736111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/9x16-duration-90-frame-10.png",
                "sha256": "c643eaccb5a133b76966ee17d755e64eaa0e69aaa1f9562fa54f29da53389df4",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/9x16-duration-90-frame-89.png",
                "sha256": "3452bee39cb21a5ff64782d9fae2e0bb27669c809c6718b26a3b94782321ca0e",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/9x16-duration-90-frame-79.png",
                "sha256": "3452bee39cb21a5ff64782d9fae2e0bb27669c809c6718b26a3b94782321ca0e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 17.63530815972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/9x16-duration-900-frame-17.png",
                "sha256": "e70d8ba43ffd3e9aeb949f51f42d4c317bf45fbb4b9a72fc348d7a6f65a6a831",
                "alphaMass": 587520
              },
              {
                "frame": 117,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/9x16-duration-900-frame-117.png",
                "sha256": "3452bee39cb21a5ff64782d9fae2e0bb27669c809c6718b26a3b94782321ca0e",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/9x16-duration-900-frame-792.png",
                "sha256": "3452bee39cb21a5ff64782d9fae2e0bb27669c809c6718b26a3b94782321ca0e",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/9x16-duration-900-frame-899.png",
                "sha256": "3452bee39cb21a5ff64782d9fae2e0bb27669c809c6718b26a3b94782321ca0e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 13.168511284722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/1x1-duration-90-frame-10.png",
                "sha256": "b627f25fb9a895a0ac32379ec9925935aab34c074e18a0195aa8e07c3c5fdf70",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/1x1-duration-90-frame-89.png",
                "sha256": "212efd0c9ea012639a7da207a702707ff46e5ef6d0a321947e8cdf6dae9574b1",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/1x1-duration-90-frame-79.png",
                "sha256": "212efd0c9ea012639a7da207a702707ff46e5ef6d0a321947e8cdf6dae9574b1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 12.947374131944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/1x1-duration-900-frame-17.png",
                "sha256": "428b6d2ff39c8b91e0fcf502d4103d3224b744930e17711d0ccb676d2981591f",
                "alphaMass": 587520
              },
              {
                "frame": 117,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/1x1-duration-900-frame-117.png",
                "sha256": "c97ea3196ee82ed180dcf5de7dd49c6940d8a9c8f18d40d60dc1fc4736c2cdc3",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/1x1-duration-900-frame-792.png",
                "sha256": "212efd0c9ea012639a7da207a702707ff46e5ef6d0a321947e8cdf6dae9574b1",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-fin-card-reveal/1x1-duration-900-frame-899.png",
                "sha256": "212efd0c9ea012639a7da207a702707ff46e5ef6d0a321947e8cdf6dae9574b1",
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
        "note": "A metal card tilts into view beside a serif headline and CTA; rebrands tint the card and type."
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
      "bundleSha256": "6091a07a5626714ca1315fb972f65b2bffe39992e7bf5a071693460ad5db0f7e",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.073Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-card-reveal/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-card-reveal/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-card-reveal/16x9/detail.mp4",
      "bg": "#111214",
      "posterFrame": 117,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "fea4ddd2988cfd9b5cf55f3393f1b6b2a67d289ab3864101b90158ecad5baeb9",
        "loop": "a9f7f909a23235cff04ce27d89119688218c6bbbdcadb802432287679bd98f12",
        "detail": "5cae858b995465780079c160745485f1fe2daf95c1ba360d786837e83d23814e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-card-reveal/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-card-reveal/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-card-reveal/9x16/detail.mp4",
      "bg": "#111214",
      "posterFrame": 117,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e6a88dfa9f6ad198038774a804bcbc33b7e9f669082df659e7694cd78af7fa92",
        "loop": "2e9489edc7d28ea8a407e82343bf58491e86f5d65079390af6d77b3bd6a705d9",
        "detail": "4f638e968a04319704b21239a8e2acc752d5226705341e74379915a30c08b1b6"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-card-reveal/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-card-reveal/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-card-reveal/1x1/detail.mp4",
      "bg": "#111214",
      "posterFrame": 117,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "40ec098d6c1c4b38120459076039992b630cdeba9b12f281e2b0675960f67147",
        "loop": "210aef1c4816e5a33678fdce3a15c73cf0a6100e9a7d7f145055ff893c87bff9",
        "detail": "b2931612782893a3a493b86a28bd9282c7d2e7bd8b0727a5719c630c12d1b297"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/6091a07a5626714ca1315fb972f65b2bffe39992e7bf5a071693460ad5db0f7e/index.mjs",
    "sha256": "6091a07a5626714ca1315fb972f65b2bffe39992e7bf5a071693460ad5db0f7e",
    "bytes": 271656,
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
    "at": "2026-10-09T07:05:50.304Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
