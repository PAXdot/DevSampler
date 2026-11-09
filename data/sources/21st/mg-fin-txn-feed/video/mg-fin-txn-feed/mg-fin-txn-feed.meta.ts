// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "glass",
  "mechanic": [
    "notifications-drop-and-stack"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "notifications-drop-and-stack",
    "fintech",
    "notifications",
    "lock-screen"
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
      "in": 108,
      "out": 0
    },
    "markers": {
      "settled": 108
    },
    "beats": [
      0,
      27,
      54,
      81,
      108
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
      "key": "time",
      "type": "text",
      "maxChars": 5,
      "role": "value"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "highlight",
      "type": "text",
      "maxChars": 14,
      "role": "headline"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 16,
      "role": "cta"
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
      "target": "notifications-drop-and-stack",
      "prop": "transform",
      "from": "enter",
      "settledBy": 108,
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
    "ink": "#FFFFFF",
    "accent": "#CFF26B",
    "secondary": "#6B4CFF",
    "paper": "#140F28",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "time": "8:12",
    "headline": "Every cent, in",
    "highlight": "real time.",
    "cta": "Get the app"
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
      "key": "time",
      "label": "Time",
      "type": "text",
      "max": 5,
      "role": "value"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "highlight",
      "label": "Highlight",
      "type": "text",
      "max": 14,
      "role": "headline"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 16,
      "role": "cta"
    }
  ],
  "name": "Live Transaction Alerts",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fin-txn-feed",
    "bundleSha256": "0dfe81c53b5c570972eabeffb702d803338dbf95f980083e9eca7dc5a2d4dbbf",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:16:40.452Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/16x9-paper.png",
        "sha256": "7e23c162cfa21ae1101052d4d080162811cbe44fb86b3b4de6a29fbccd32dc4a"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/16x9-night.png",
        "sha256": "b311ab70df7d86b6d3f73eb4c3a8b3fb47f956700a5b24e4a0a788ed3c91d1d0"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/16x9-color.png",
        "sha256": "b6942ab528f13c3bd57ceb3012e78228a40693e0e98ded187c041a85d2a721f0"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/9x16-paper.png",
        "sha256": "8666d1fa3893767441fc4d7a7cc78cf3e62372ae84108f6edb7f49910928b47f"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/9x16-night.png",
        "sha256": "09edf8b5a7c6a544876c2898ac8a7bfcd0eba679fef2aea204547bfe683d7d39"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/9x16-color.png",
        "sha256": "403b0c172e4a104a252b2878b3ef4bbe8cc5b5559382e9678997f519db3663ae"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/1x1-paper.png",
        "sha256": "bc1e7fa96a9c9302cde3ae2ad1208511604dec1a60cb45d6edfeffae3131b8bd"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/1x1-night.png",
        "sha256": "6a6e21f793b20fcbd3522a24f05898a272f6491ddf55c7dbf170ce9fa5814072"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/1x1-color.png",
        "sha256": "351dc3f770b4b8be42b859653059119a7a593177d57c09f7ccf37448214d47f9"
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
          "mg-fin-txn-feed--16x9",
          "mg-fin-txn-feed--9x16",
          "mg-fin-txn-feed--1x1"
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
            "paperNight": 55.612575954861114,
            "paperColor": 18.272379557291668,
            "region": {
              "left": 129,
              "top": 63,
              "width": 1703,
              "height": 1016
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 82.16574435763889,
            "paperColor": 31.977186414930557,
            "region": {
              "left": 38,
              "top": 65,
              "width": 1005,
              "height": 1721
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 47.56553819444444,
            "paperColor": 18.15337456597222,
            "region": {
              "left": 72,
              "top": 86,
              "width": 957,
              "height": 897
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
            "occupancy": 1.1825643966434314,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1825643966434314,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1825643966434314,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1821249284821955,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1821249284821955,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1821249284821955,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0386740001213106,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0386740001213106,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0430335971837297,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 16.256184895833332,
        "frames": [
          16,
          108,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 16.384440104166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/16x9-duration-90-frame-10.png",
                "sha256": "a3be6b04cc9d90eda9c9d5e1d7fc67788e3e48f1eb97d85a9979b4578e7a8f40",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/16x9-duration-90-frame-89.png",
                "sha256": "5d7a8a0a9f7e95023a2629e561f5c4cd0e075984c795850fb9200465e81058b8",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/16x9-duration-90-frame-79.png",
                "sha256": "5d7a8a0a9f7e95023a2629e561f5c4cd0e075984c795850fb9200465e81058b8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 16.256184895833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/16x9-duration-900-frame-16.png",
                "sha256": "0930082edb7356a300a519248e43c247e6ebf2b6aadb4f30b2a0d0aa19b7faad",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/16x9-duration-900-frame-108.png",
                "sha256": "5d7a8a0a9f7e95023a2629e561f5c4cd0e075984c795850fb9200465e81058b8",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/16x9-duration-900-frame-792.png",
                "sha256": "5d7a8a0a9f7e95023a2629e561f5c4cd0e075984c795850fb9200465e81058b8",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/16x9-duration-900-frame-899.png",
                "sha256": "5d7a8a0a9f7e95023a2629e561f5c4cd0e075984c795850fb9200465e81058b8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 16.669053819444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/9x16-duration-90-frame-10.png",
                "sha256": "f496609e04c1f9e3e5e980b96a4402a2be13543c0e3ffecb6849631c93153ccc",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/9x16-duration-90-frame-89.png",
                "sha256": "bcf62f1b178ec7353128c15bf70596cfdeb03837dc05803d14db287a973a3ef0",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/9x16-duration-90-frame-79.png",
                "sha256": "bcf62f1b178ec7353128c15bf70596cfdeb03837dc05803d14db287a973a3ef0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 16.54546440972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/9x16-duration-900-frame-16.png",
                "sha256": "822f7a9e88b98d4a4a31becdc35d091fe579fa9ea8e23ec46d31ddbeda3f3879",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/9x16-duration-900-frame-108.png",
                "sha256": "bcf62f1b178ec7353128c15bf70596cfdeb03837dc05803d14db287a973a3ef0",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/9x16-duration-900-frame-792.png",
                "sha256": "bcf62f1b178ec7353128c15bf70596cfdeb03837dc05803d14db287a973a3ef0",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/9x16-duration-900-frame-899.png",
                "sha256": "bcf62f1b178ec7353128c15bf70596cfdeb03837dc05803d14db287a973a3ef0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 14.497612847222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/1x1-duration-90-frame-10.png",
                "sha256": "b8da4a6bb97876c9dab20137b589faca20c834dc913d64c90e8433fb1d3e5731",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/1x1-duration-90-frame-89.png",
                "sha256": "6737eae02854845cd088e16b468d7d3c6d25bc2e3d2a1ea724a6655428e8af26",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/1x1-duration-90-frame-79.png",
                "sha256": "6737eae02854845cd088e16b468d7d3c6d25bc2e3d2a1ea724a6655428e8af26",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 14.3798828125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/1x1-duration-900-frame-16.png",
                "sha256": "ae2e47a03f674e592c0ed2796e9caeb4d866e5e45555391be7527f77c4c4611c",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/1x1-duration-900-frame-108.png",
                "sha256": "6737eae02854845cd088e16b468d7d3c6d25bc2e3d2a1ea724a6655428e8af26",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/1x1-duration-900-frame-792.png",
                "sha256": "6737eae02854845cd088e16b468d7d3c6d25bc2e3d2a1ea724a6655428e8af26",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-txn-feed/1x1-duration-900-frame-899.png",
                "sha256": "6737eae02854845cd088e16b468d7d3c6d25bc2e3d2a1ea724a6655428e8af26",
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
        "note": "Lock-screen transaction alerts stack beside a highlighted headline; rebrands distinct."
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
      "bundleSha256": "0dfe81c53b5c570972eabeffb702d803338dbf95f980083e9eca7dc5a2d4dbbf",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.075Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-txn-feed/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-txn-feed/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-txn-feed/16x9/detail.mp4",
      "bg": "#140f28",
      "posterFrame": 108,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4c49e74902b5d81b020eef51590125c7f0e38fd18ee01813433a47b2aabb078c",
        "loop": "eefd689440a21bf4d1031013dadb7addc5c7a732c0bc383ea938e886f5991f17",
        "detail": "930d22f47c0df33122ea566930047122c5729f26f04c15a6e39f3f500ddd34f7"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-txn-feed/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-txn-feed/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-txn-feed/9x16/detail.mp4",
      "bg": "#1d153d",
      "posterFrame": 108,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "53934823aec70e02d1fdc13825f945498a4fbb10285430496bf67964e6430c11",
        "loop": "6ba10d16ffe67ffca7f2609e4059e1d43328428511af45001fa68ec57a6fcc49",
        "detail": "1d7e3c3d1dbc44dfb0f3de3eb8862a73869a7f5feff646b0eeeb45af390caf8c"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-txn-feed/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-txn-feed/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-txn-feed/1x1/detail.mp4",
      "bg": "#1b153a",
      "posterFrame": 108,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "131d03c391dd4a85daafe2cdaea397a97e9abe3cc43979680e85e11211e1a315",
        "loop": "d515cece669ec1ce08f3a4c621c52d09687b8158e9b5415caf30eaa229d34f2c",
        "detail": "5012eea93829db0c8b0949a9cf075c5c1e671f1541ffab7502d4c871897dc408"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/0dfe81c53b5c570972eabeffb702d803338dbf95f980083e9eca7dc5a2d4dbbf/index.mjs",
    "sha256": "0dfe81c53b5c570972eabeffb702d803338dbf95f980083e9eca7dc5a2d4dbbf",
    "bytes": 271650,
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
    "at": "2026-10-09T07:06:11.224Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
