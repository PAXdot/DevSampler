// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/motion-gallery",
  "job": "data",
  "language": "neo-brutal",
  "mechanic": [
    "digit-reel-roll-to-stat"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "data",
    "digit-reel-roll-to-stat",
    "hook",
    "stat",
    "counter",
    "number"
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
      "key": "value",
      "type": "text",
      "maxChars": 4,
      "role": "value"
    },
    {
      "key": "unit",
      "type": "text",
      "maxChars": 8,
      "role": "label"
    },
    {
      "key": "body",
      "type": "text",
      "maxChars": 48,
      "role": "body"
    },
    {
      "key": "sticker",
      "type": "text",
      "maxChars": 22,
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
      "target": "digit-reel-roll-to-stat",
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
    "ink": "#0A0A0A",
    "accent": "#FF3D1F",
    "secondary": "#2A2A2A",
    "paper": "#E4FF3C",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "value": "4.6",
    "unit": "hours",
    "body": "lost every week, just looking for things.",
    "sticker": "= 239 hours a year"
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
      "key": "value",
      "label": "Value",
      "type": "text",
      "max": 4,
      "role": "value"
    },
    {
      "key": "unit",
      "label": "Unit",
      "type": "text",
      "max": 8,
      "role": "label"
    },
    {
      "key": "body",
      "label": "Body",
      "type": "text",
      "max": 48,
      "role": "body"
    },
    {
      "key": "sticker",
      "label": "Sticker",
      "type": "text",
      "max": 22,
      "role": "caption"
    }
  ],
  "name": "Shock Stat Counter",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-hook-stat-shock",
    "bundleSha256": "21bc6551bb989c6412ad9f5d755f47139d384c59658c0b049ac807620895916f",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:46:44.785Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/16x9-paper.png",
        "sha256": "749515c86ece4b825325ed01f986a813a3b62a3274099351eab1ae7a18b31ef6"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/16x9-night.png",
        "sha256": "2baf450edcb256c96be085c4c8d6b3ec43481e6a1b6ebad94c7dede63d3642b6"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/16x9-color.png",
        "sha256": "9d500027cf27c67ae26fd722cdc61226b0f5d59ace3b18fe2be74cf05d4abf1a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/9x16-paper.png",
        "sha256": "d54788840c911d9f57efc3625ecf80c750e12f5dc96c4659089936b5af2bb105"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/9x16-night.png",
        "sha256": "151db6dfb413a77ad2cdf9e61ac5a8bb093e1759e5db81e5048c72a28e226711"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/9x16-color.png",
        "sha256": "62e384ed3a16f4b0ed78d870ccd21b11da43414b03dd0e8bf4b758d78355f725"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/1x1-paper.png",
        "sha256": "d5436b97dd8d4b0fe7365522acee92786fac4309b06b7da7aba34607a9d2be8e"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/1x1-night.png",
        "sha256": "89ace5ccb64f624b3cb7a15d6fc0a87d5697ec6d043f016267243c53f9a9c996"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/1x1-color.png",
        "sha256": "7a9a429ae9cc7e4e9be06b82dec2c43c7fda152edd574c3c10080e2418c55f11"
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
          "mg-hook-stat-shock--16x9",
          "mg-hook-stat-shock--9x16",
          "mg-hook-stat-shock--1x1"
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
            "paperNight": 58.161702473958336,
            "paperColor": 21.851318359375,
            "region": {
              "left": 58,
              "top": 61,
              "width": 1785,
              "height": 867
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 67.78634982638889,
            "paperColor": 26.74126519097222,
            "region": {
              "left": 54,
              "top": 94,
              "width": 950,
              "height": 1714
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 61.10541449652778,
            "paperColor": 23.98003472222222,
            "region": {
              "left": 54,
              "top": 52,
              "width": 973,
              "height": 937
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
            "occupancy": 1.0464686935731085,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0493754713176424,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0540674603174605,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0929716697635847,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1023433453885672,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.107692144501834,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.092900437495529,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0986536961606777,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1066232048374907,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 11.968315972222221,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 13.805772569444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/16x9-duration-90-frame-10.png",
                "sha256": "20046891d57e87be34dddca7e8d1323531a09e9e4b78f08e66291f491fb994be",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/16x9-duration-90-frame-89.png",
                "sha256": "938a215615deb3a2d0447a4985a2a46a887a7ae7cce2f3013c31fb7410c61070",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/16x9-duration-90-frame-79.png",
                "sha256": "938a215615deb3a2d0447a4985a2a46a887a7ae7cce2f3013c31fb7410c61070",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 11.968315972222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/16x9-duration-900-frame-13.png",
                "sha256": "77b9d8b6f84f84a953cc4fdef419193d41ed8e87f8511bb6f2a30d08f2332c52",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/16x9-duration-900-frame-90.png",
                "sha256": "938a215615deb3a2d0447a4985a2a46a887a7ae7cce2f3013c31fb7410c61070",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/16x9-duration-900-frame-792.png",
                "sha256": "938a215615deb3a2d0447a4985a2a46a887a7ae7cce2f3013c31fb7410c61070",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/16x9-duration-900-frame-899.png",
                "sha256": "938a215615deb3a2d0447a4985a2a46a887a7ae7cce2f3013c31fb7410c61070",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 15.847330729166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/9x16-duration-90-frame-10.png",
                "sha256": "0143363d58d0f02454bbc904bb2089babfbe2645a5946b75a60554870fd99972",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/9x16-duration-90-frame-89.png",
                "sha256": "124f15fc39f51c45a21a42f6ea8ea0e897318a6d260a60e413d51ea2b42a0d41",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/9x16-duration-90-frame-79.png",
                "sha256": "124f15fc39f51c45a21a42f6ea8ea0e897318a6d260a60e413d51ea2b42a0d41",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 14.125868055555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/9x16-duration-900-frame-13.png",
                "sha256": "6e621430364c2cc2f83d21cab9d7064d450211f6a2a68746fe53e0354e9e10a4",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/9x16-duration-900-frame-90.png",
                "sha256": "124f15fc39f51c45a21a42f6ea8ea0e897318a6d260a60e413d51ea2b42a0d41",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/9x16-duration-900-frame-792.png",
                "sha256": "124f15fc39f51c45a21a42f6ea8ea0e897318a6d260a60e413d51ea2b42a0d41",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/9x16-duration-900-frame-899.png",
                "sha256": "124f15fc39f51c45a21a42f6ea8ea0e897318a6d260a60e413d51ea2b42a0d41",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 14.8056640625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/1x1-duration-90-frame-10.png",
                "sha256": "5fea45bb9342c9fcf193bb16cc08db777711dfba89cc44956ad9d587a4011691",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/1x1-duration-90-frame-89.png",
                "sha256": "14bb1a39ab7262d9548e5ff1e90711aea32b5023d578321fc53a81eab6cc2050",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/1x1-duration-90-frame-79.png",
                "sha256": "14bb1a39ab7262d9548e5ff1e90711aea32b5023d578321fc53a81eab6cc2050",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 12.720269097222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/1x1-duration-900-frame-13.png",
                "sha256": "f956f39c754d498d1624fcea15cf3e23fd53a0497759432b4f66c29492a92707",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/1x1-duration-900-frame-90.png",
                "sha256": "14bb1a39ab7262d9548e5ff1e90711aea32b5023d578321fc53a81eab6cc2050",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/1x1-duration-900-frame-792.png",
                "sha256": "14bb1a39ab7262d9548e5ff1e90711aea32b5023d578321fc53a81eab6cc2050",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-hook-stat-shock/1x1-duration-900-frame-899.png",
                "sha256": "14bb1a39ab7262d9548e5ff1e90711aea32b5023d578321fc53a81eab6cc2050",
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
        "note": "Counter lands on the stat with a filled bar; readable and rebrands distinct."
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
      "bundleSha256": "21bc6551bb989c6412ad9f5d755f47139d384c59658c0b049ac807620895916f",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-stat-shock/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-stat-shock/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-stat-shock/16x9/detail.mp4",
      "bg": "#d9f339",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "6af77dfa29bb4d366ed0644e22caa7a8e07076f1f7783fd4756fa928c1f3f2eb",
        "loop": "10004067b22a0debc7cdfb7388cbaabafa96c195f1f6d051bb985b1d5dbbb468",
        "detail": "cfa4151f7db5e1b82ae352d3f3d72d8b10c08d07937ca17aaab17fd47b871c4b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-stat-shock/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-stat-shock/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-stat-shock/9x16/detail.mp4",
      "bg": "#d9f339",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "17e68863ba02d9e7c77f18441a899d7917bf159b10836d2fbe7aaa96fe015918",
        "loop": "dd1a99a6920918eeebe48dbd5778987d04983b798e84fc100c679272689d3289",
        "detail": "feaf697061f8932894c08808b7267457257959ea5b8346bd21b9cf070eb0ad93"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-stat-shock/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-stat-shock/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-stat-shock/1x1/detail.mp4",
      "bg": "#d9f339",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "12af5d330da3c8e665964826535b52edb5b8995622d0ecf3f6ec25faf8ae6879",
        "loop": "9ab321f8dde5c3ca02e0bec9c5187f60da0ab60cc2947c302c30401dd62b4ec7",
        "detail": "aed259b0aa0ab0a633eebba0433bf21b6e55eafb28fa375538c0c2eeae930cbe"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/21bc6551bb989c6412ad9f5d755f47139d384c59658c0b049ac807620895916f/index.mjs",
    "sha256": "21bc6551bb989c6412ad9f5d755f47139d384c59658c0b049ac807620895916f",
    "bytes": 207830,
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
    "at": "2026-10-09T03:57:48.235Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
