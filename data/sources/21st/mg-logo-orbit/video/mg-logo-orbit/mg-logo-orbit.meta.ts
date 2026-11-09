// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/motion-gallery",
  "job": "logos",
  "language": "aura",
  "mechanic": [
    "logos-orbit-and-wire-to-core"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "logos",
    "logos-orbit-and-wire-to-core",
    "integrations",
    "logos",
    "orbit"
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
      "in": 90,
      "out": 0
    },
    "markers": {
      "settled": 90
    },
    "beats": [
      0,
      23,
      45,
      68,
      90
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
      "key": "body",
      "type": "text",
      "maxChars": 70,
      "role": "body"
    },
    {
      "key": "brand",
      "type": "text",
      "maxChars": 8,
      "role": "name"
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
      "target": "logos-orbit-and-wire-to-core",
      "prop": "transform",
      "from": "enter",
      "settledBy": 90,
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
    "ink": "#F0F2F6",
    "accent": "#3D63FF",
    "secondary": "#C6C8CC",
    "paper": "#07070A",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "integrations",
    "headline": "Works with your stack.",
    "body": "40+ tools connect in one click. No glue code, no exports.",
    "brand": "Lumen"
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
      "key": "body",
      "label": "Body",
      "type": "text",
      "max": 70,
      "role": "body"
    },
    {
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 8,
      "role": "name"
    }
  ],
  "name": "Integrations Orbit",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-logo-orbit",
    "bundleSha256": "28b17c23ed44216ce041aa09c89c0e6daf5f1a548420b48354cf3a55a566489b",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:43:17.166Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/16x9-paper.png",
        "sha256": "c857290f6b4f55d5b8fe02efa52a7fa8c016aedb9c9d1219a5f7f9837e294cc4"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/16x9-night.png",
        "sha256": "10499f2ebbb03759c611fa97313effb5482a602b5a429bea7eb5e039a05b97af"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/16x9-color.png",
        "sha256": "ec1ff3f188491cca23dbf049a9751d1155f242c4516936c485cda9816479bd9f"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/9x16-paper.png",
        "sha256": "8ed3ab536fbbdb1e3efdb5b3c48bf8e45615e0211bff466403e176a365abc499"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/9x16-night.png",
        "sha256": "784492d07d9539d04f80ceb37679c0c1901bc0f71d0b7aaa62784e31b14fee77"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/9x16-color.png",
        "sha256": "d26ab40135b1d2cd9a012accd5244ebce385df2840c7e69439ea0f816432de2f"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/1x1-paper.png",
        "sha256": "c8c1bb3d76fb18a09cc4e3f92d3523bb19b51d79dbdf973709555409e67a8dea"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/1x1-night.png",
        "sha256": "d908392b7b8e16e1a5b4900917fc294c348b1dff8cc81114e2bfabd2ae8f7222"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/1x1-color.png",
        "sha256": "28accb65e802b85b4ac393dfd376f94976f04237d0b2d26aa52697125ea39595"
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
          "mg-logo-orbit--16x9",
          "mg-logo-orbit--9x16",
          "mg-logo-orbit--1x1"
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
            "paperNight": 21.85381401909722,
            "paperColor": 10.387451171875,
            "region": {
              "left": 113,
              "top": 41,
              "width": 1692,
              "height": 998
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 34.052951388888886,
            "paperColor": 16.66989474826389,
            "region": {
              "left": 6,
              "top": 169,
              "width": 1068,
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
            "paperNight": 24.55080837673611,
            "paperColor": 12.333251953125,
            "region": {
              "left": 62,
              "top": 71,
              "width": 930,
              "height": 946
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
            "occupancy": 1.1541103710002523,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1541103710002523,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1527461743442236,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1715551382590075,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1766647245317883,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1752048427395652,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0655861281412429,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0678266791398774,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.06093005903779,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.8918185763888888,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 1.8785807291666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/16x9-duration-90-frame-10.png",
                "sha256": "bd0d50a9994e7e6ad732f860c9f14e33899e1c544ad266f5ef252ca3fed63222",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/16x9-duration-90-frame-89.png",
                "sha256": "d909d984a0b12d4748bd42dc616a94bc7fd027f99341eb9786547a0f23df3ff2",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/16x9-duration-90-frame-79.png",
                "sha256": "d909d984a0b12d4748bd42dc616a94bc7fd027f99341eb9786547a0f23df3ff2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 1.8918185763888888,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/16x9-duration-900-frame-13.png",
                "sha256": "0184927ee6b43cb17f6f13b4a0b74c562468ccf641a129f4e97c31908126ecba",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/16x9-duration-900-frame-90.png",
                "sha256": "d909d984a0b12d4748bd42dc616a94bc7fd027f99341eb9786547a0f23df3ff2",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/16x9-duration-900-frame-792.png",
                "sha256": "d909d984a0b12d4748bd42dc616a94bc7fd027f99341eb9786547a0f23df3ff2",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/16x9-duration-900-frame-899.png",
                "sha256": "d909d984a0b12d4748bd42dc616a94bc7fd027f99341eb9786547a0f23df3ff2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 2.8526475694444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/9x16-duration-90-frame-10.png",
                "sha256": "78d09906102f8781a144bd5becaf59443c1971f1dcd3b181d39e2830901933de",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/9x16-duration-90-frame-89.png",
                "sha256": "2c3522e9a124cebeb3ad3c4eb13b00ddd2425b02df5ded1ef2559cb2925bf136",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/9x16-duration-90-frame-79.png",
                "sha256": "2c3522e9a124cebeb3ad3c4eb13b00ddd2425b02df5ded1ef2559cb2925bf136",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 2.7880859375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/9x16-duration-900-frame-13.png",
                "sha256": "72f30abf8dfc88094c1f9045db30ad5012019e51f58691ede140f85aa4595611",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/9x16-duration-900-frame-90.png",
                "sha256": "2c3522e9a124cebeb3ad3c4eb13b00ddd2425b02df5ded1ef2559cb2925bf136",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/9x16-duration-900-frame-792.png",
                "sha256": "970104c598016e1027d49bd3f381810bb26a1ca9f9c6a6129fdf7c168a49773d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/9x16-duration-900-frame-899.png",
                "sha256": "2c3522e9a124cebeb3ad3c4eb13b00ddd2425b02df5ded1ef2559cb2925bf136",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 1.8249782986111112,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/1x1-duration-90-frame-10.png",
                "sha256": "46605e4f4db5661e682c1a82ef6bf0255cece778f273ef9ea0fc475d7ca08dac",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/1x1-duration-90-frame-89.png",
                "sha256": "23f30d333df1d66c93166b21c4a26fc595a1a57d5d95d1e9ddf56b10df50d091",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/1x1-duration-90-frame-79.png",
                "sha256": "23f30d333df1d66c93166b21c4a26fc595a1a57d5d95d1e9ddf56b10df50d091",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 1.8338758680555556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/1x1-duration-900-frame-13.png",
                "sha256": "54b0d74cceea38cc39b412a7a823f4e36789484959c08f8393b7050059ef05ca",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/1x1-duration-900-frame-90.png",
                "sha256": "23f30d333df1d66c93166b21c4a26fc595a1a57d5d95d1e9ddf56b10df50d091",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/1x1-duration-900-frame-792.png",
                "sha256": "23f30d333df1d66c93166b21c4a26fc595a1a57d5d95d1e9ddf56b10df50d091",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/mg-logo-orbit/1x1-duration-900-frame-899.png",
                "sha256": "23f30d333df1d66c93166b21c4a26fc595a1a57d5d95d1e9ddf56b10df50d091",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "logos",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Integration icons orbit a Lumen hub beside a headline; glow is brand blue, the italic words go gray to blue."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 13,
        "compared": 13,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "28b17c23ed44216ce041aa09c89c0e6daf5f1a548420b48354cf3a55a566489b",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-logo-orbit/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-logo-orbit/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-logo-orbit/16x9/detail.mp4",
      "bg": "#0d1227",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "975283616506cc903d1a8100f4a7c74f479489122f5e9c8ecd8159865a7be50f",
        "loop": "126d680712827f03ce3f5bde75dafac5afd60a2069230fe7eaf0b5287db4f787",
        "detail": "4b186c497d37e4fac7437b01e20e0bc0708f2f705ab20a1a8f745e2f51129c13"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-logo-orbit/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-logo-orbit/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-logo-orbit/9x16/detail.mp4",
      "bg": "#0d1227",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e3500fcb4876c3962b8b7b2cec6af195608ba29dd24a3248b9235fa9675d81eb",
        "loop": "4df24d0c3e0c5229e49771abe594bc704f902fcfe95f00c084f6b340d676329c",
        "detail": "a58deb9175e0597516f4be22f6ff24e1a8a1feae1c6bf25002c76ad72fcb0444"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-logo-orbit/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-logo-orbit/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-logo-orbit/1x1/detail.mp4",
      "bg": "#0d1227",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c007287fad696f35585e022c4e2a269e41b1713ac1318701b99f496c9d30892f",
        "loop": "a52381a5f0bfcecb98136dea418f49384d11a968e592d2253856f86d3de6bd95",
        "detail": "bb044f963239d1d986aca02339e0c5d426780cf782a19e67f756f49b2a41385d"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/28b17c23ed44216ce041aa09c89c0e6daf5f1a548420b48354cf3a55a566489b/index.mjs",
    "sha256": "28b17c23ed44216ce041aa09c89c0e6daf5f1a548420b48354cf3a55a566489b",
    "bytes": 183526,
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
    "at": "2026-10-09T03:59:15.365Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
