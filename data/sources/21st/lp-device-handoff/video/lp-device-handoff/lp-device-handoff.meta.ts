// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/product",
  "job": "devices",
  "language": "product-ui",
  "mechanic": [
    "assemble"
  ],
  "looks": [
    {
      "id": "focus",
      "name": "Mechanism in focus",
      "props": {
        "showHeading": false
      }
    },
    {
      "id": "context",
      "name": "Mechanism with context",
      "props": {
        "showHeading": true
      }
    }
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "launch",
    "canonical",
    "device-handoff",
    "product-proof",
    "device-handoff",
    "device"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 150,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 132
    },
    "beats": [
      18,
      48,
      84,
      116
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
      "showBackground"
    ]
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 72,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "type": "text",
      "maxChars": 120,
      "role": "body"
    },
    {
      "key": "items",
      "type": "list",
      "role": "items"
    },
    {
      "key": "screenshot",
      "type": "image",
      "role": "media"
    },
    {
      "key": "from",
      "type": "image",
      "role": "media"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "foreground": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "bodyFontFamily": "fonts.body",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "content",
      "prop": "transform",
      "from": "composed",
      "settledBy": 132,
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
    "sourceUrl": "docs/research/launch-videos-2026-10-06/library-expansion.md"
  },
  "defaults": {
    "title": "Pick up where you left off",
    "subtitle": "Carry the same task from a phone to a wider screen.",
    "items": [
      "Phone",
      "Tablet",
      "Continue task",
      "In sync"
    ],
    "screenshot": "",
    "from": "",
    "accent": "#3D63FF",
    "secondary": "#B2B4B8",
    "foreground": "#19191D",
    "background": "#F8F8FA",
    "fontFamily": "Inter",
    "bodyFontFamily": "Inter",
    "monoFontFamily": "Geist Mono",
    "showHeading": false,
    "showBackground": false
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 72,
      "role": "headline"
    },
    {
      "key": "subtitle",
      "label": "Subtitle",
      "type": "text",
      "max": 120,
      "role": "body"
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "items",
      "label": "Items",
      "type": "list",
      "max": 6,
      "role": "items"
    },
    {
      "key": "showHeading",
      "label": "Show heading",
      "type": "boolean"
    },
    {
      "key": "showBackground",
      "label": "Show background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "foreground",
      "label": "Foreground",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "media"
    },
    {
      "key": "from",
      "label": "From",
      "type": "asset",
      "role": "media"
    }
  ],
  "name": "Phone-to-tablet continuity",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lp-device-handoff",
    "bundleSha256": "7a42d4827a2f7c7599b24426dfca22858b314c3589517c3078e10b660092f83f",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:38:50.303Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/16x9-paper.png",
        "sha256": "d22a9c58c4252f63e14547cd3b907c9f33ffd99383b76b06ae606440a6661191"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/16x9-night.png",
        "sha256": "999f742f9caa04dee75ab873e4f2a70340b21c429efb277218235da91e5a773e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/16x9-color.png",
        "sha256": "e717f0ef129682aac616ee76a3b10e1c52098e4cdb0c776c4824fc9f1ccaa46f"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/9x16-paper.png",
        "sha256": "762253c04baee6c698156ca6ad5cdc6355e77f25deea6ee83520b53493cae979"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/9x16-night.png",
        "sha256": "1cff65e96f8e008a0404b6dd18b330cc0a5efa9397bfafb402bc188af73c8d5a"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/9x16-color.png",
        "sha256": "acde7f26d9ae2f2b196caa05c550914ab8142209f1676b845e9dbbe71eb05f25"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/1x1-paper.png",
        "sha256": "6a1058fc0cf0254e429a2958f2b9a171720dd4a6d2ad2128eef90069bc390121"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/1x1-night.png",
        "sha256": "5c32f84bd835cd6a1a5729b58dc7372a74af3c7ea60a10e6a90e9b3118401d9a"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/1x1-color.png",
        "sha256": "37c88b33080adde7ccf922c11f23632873a314fb12862b3cb3d20a5b464dbb77"
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
          "lp-device-handoff--16x9",
          "lp-device-handoff--9x16",
          "lp-device-handoff--1x1"
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
            "paperNight": 103.039794921875,
            "paperColor": 13.736490885416666,
            "region": {
              "left": 145,
              "top": 108,
              "width": 1631,
              "height": 886
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 94.26936848958333,
            "paperColor": 13.955078125,
            "region": {
              "left": 76,
              "top": 192,
              "width": 928,
              "height": 1558
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 101.17366536458333,
            "paperColor": 14.757459852430555,
            "region": {
              "left": 76,
              "top": 108,
              "width": 928,
              "height": 886
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
            "occupancy": 0.9876524072849306,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9876524072849306,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9876524072849306,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9881704739508974,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9881704739508974,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9881704739508974,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9990232947317017,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9990232947317017,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9990232947317017,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 78.71408420138889,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 78.71408420138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/16x9-duration-150-frame-18.png",
                "sha256": "3c2ccfe4bc264057cf8fb575c3504c384e56e711ad9deec2323c4fa15356dba9",
                "alphaMass": 78776
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/16x9-duration-150-frame-132.png",
                "sha256": "cc5e7ef780547913d56fcb8f8a99e73b570e4e3ab6b7d280d2e94dfe6e829a47",
                "alphaMass": 263077
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/16x9-duration-150-frame-149.png",
                "sha256": "cc5e7ef780547913d56fcb8f8a99e73b570e4e3ab6b7d280d2e94dfe6e829a47",
                "alphaMass": 263077
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 78.71408420138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/16x9-duration-900-frame-19.png",
                "sha256": "3c2ccfe4bc264057cf8fb575c3504c384e56e711ad9deec2323c4fa15356dba9",
                "alphaMass": 78776
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/16x9-duration-900-frame-132.png",
                "sha256": "cc5e7ef780547913d56fcb8f8a99e73b570e4e3ab6b7d280d2e94dfe6e829a47",
                "alphaMass": 263077
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/16x9-duration-900-frame-792.png",
                "sha256": "cc5e7ef780547913d56fcb8f8a99e73b570e4e3ab6b7d280d2e94dfe6e829a47",
                "alphaMass": 263077
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/16x9-duration-900-frame-899.png",
                "sha256": "cc5e7ef780547913d56fcb8f8a99e73b570e4e3ab6b7d280d2e94dfe6e829a47",
                "alphaMass": 263077
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 74.3134765625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/9x16-duration-150-frame-18.png",
                "sha256": "0c4c4caed8b4804e11f19b3a593274a68c09e4963dc230639f22c890d3efe72e",
                "alphaMass": 115443
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/9x16-duration-150-frame-132.png",
                "sha256": "2b9161bf0ab5ccc09ced6f440ac475b7443307df33e140e32395e117ed7a57ef",
                "alphaMass": 264021
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/9x16-duration-150-frame-149.png",
                "sha256": "2b9161bf0ab5ccc09ced6f440ac475b7443307df33e140e32395e117ed7a57ef",
                "alphaMass": 264021
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 74.3134765625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/9x16-duration-900-frame-19.png",
                "sha256": "862d4d86c2153b0de3c7b487920be901e32671fbe7ca9994dbcd27e0d2933840",
                "alphaMass": 115443
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/9x16-duration-900-frame-132.png",
                "sha256": "2b9161bf0ab5ccc09ced6f440ac475b7443307df33e140e32395e117ed7a57ef",
                "alphaMass": 264021
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/9x16-duration-900-frame-792.png",
                "sha256": "2b9161bf0ab5ccc09ced6f440ac475b7443307df33e140e32395e117ed7a57ef",
                "alphaMass": 264021
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/9x16-duration-900-frame-899.png",
                "sha256": "2b9161bf0ab5ccc09ced6f440ac475b7443307df33e140e32395e117ed7a57ef",
                "alphaMass": 264021
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 80.72569444444444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/1x1-duration-150-frame-18.png",
                "sha256": "efa6adbd4494d195ee14a73417305aeb97b5046acf9a0d795d63f64e49b0fa0e",
                "alphaMass": 79648
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/1x1-duration-150-frame-132.png",
                "sha256": "e6514c24b10f2cfc36337efd8cd910b2444dd14ab158bffcb58c839849e1f10a",
                "alphaMass": 264337
              },
              {
                "frame": 149,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/1x1-duration-150-frame-149.png",
                "sha256": "e6514c24b10f2cfc36337efd8cd910b2444dd14ab158bffcb58c839849e1f10a",
                "alphaMass": 264337
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 80.72569444444444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/1x1-duration-900-frame-19.png",
                "sha256": "efa6adbd4494d195ee14a73417305aeb97b5046acf9a0d795d63f64e49b0fa0e",
                "alphaMass": 79648
              },
              {
                "frame": 132,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/1x1-duration-900-frame-132.png",
                "sha256": "e6514c24b10f2cfc36337efd8cd910b2444dd14ab158bffcb58c839849e1f10a",
                "alphaMass": 264337
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/1x1-duration-900-frame-792.png",
                "sha256": "e6514c24b10f2cfc36337efd8cd910b2444dd14ab158bffcb58c839849e1f10a",
                "alphaMass": 264337
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/lp-device-handoff/1x1-duration-900-frame-899.png",
                "sha256": "e6514c24b10f2cfc36337efd8cd910b2444dd14ab158bffcb58c839849e1f10a",
                "alphaMass": 264337
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "devices",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A task continues from phone to tablet with a brand-blue Continue task chip."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 14,
        "compared": 14,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "7a42d4827a2f7c7599b24426dfca22858b314c3589517c3078e10b660092f83f",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lp-device-handoff/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-device-handoff/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-device-handoff/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "19f9df71418b8683a4abb977a6cb527cd348dc4a357e6906d577310b952a85c9",
        "loop": "6e64ebfab944b77d4df4d3e472c1805bd41459e030a9d29ae7223eab8515d67d",
        "detail": "78ef1ff624a465474c96ca40cd7d9fbc30566b8fd6a6a4238cdc3ce0fecc670d"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lp-device-handoff/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-device-handoff/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-device-handoff/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d5bf1d0d087d86f1d59beeb1e008ae43339639eac5243f01e2daff3ad082ec50",
        "loop": "54251d22071b1e26a81bea6c9bf3568385174b8a1ec570afbed0631dd408c011",
        "detail": "5b710683d39cda99adcbeda5e811fd158d54a9aaf094fe2f0aadf72cc62bf925"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lp-device-handoff/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lp-device-handoff/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lp-device-handoff/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3b809c7cb5d7a218f2f777d90caee92b06a8b3c1e22bfccd3762681f800a821e",
        "loop": "7b41ee1b17460e067ee8f8bcc05a5978d45a05854b8399d0fcde8d891c57962e",
        "detail": "29c6d4284f5ca550a7257ac9a9c96b8e90a13a08140d6ca64a9bee8800427841"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/7a42d4827a2f7c7599b24426dfca22858b314c3589517c3078e10b660092f83f/index.mjs",
    "sha256": "7a42d4827a2f7c7599b24426dfca22858b314c3589517c3078e10b660092f83f",
    "bytes": 298394,
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
    "at": "2026-10-09T03:24:57.574Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
