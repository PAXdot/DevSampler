// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "devices/motion-gallery",
  "job": "devices",
  "language": "product-ui",
  "mechanic": [
    "card-flies-between-devices"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "devices",
    "card-flies-between-devices",
    "handoff",
    "multi-device",
    "continuity"
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
      "in": 126,
      "out": 0
    },
    "markers": {
      "settled": 126
    },
    "beats": [
      0,
      32,
      63,
      95,
      126
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
      "maxChars": 26,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 48,
      "role": "headline"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 60,
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
      "target": "card-flies-between-devices",
      "prop": "transform",
      "from": "enter",
      "settledBy": 126,
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
    "ink": "#EEF0FF",
    "accent": "#6F8BFF",
    "secondary": "#94969A",
    "paper": "#05060C",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Works everywhere",
    "headline": "Start on your phone, finish on your laptop",
    "caption": "Drafts follow you across every device"
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
      "max": 26,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 48,
      "role": "headline"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 60,
      "role": "caption"
    }
  ],
  "name": "Phone To Laptop Handoff",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-dev-handoff",
    "bundleSha256": "976481157c401040a041e068fa449368392f99bb83f7044190a398160faaa0a1",
    "sourceSnapshot": {
      "sha256": "daf572d0dc6bb35bb97bb5cb594162c41addc44ef918cd67fc76e1c30b0b570d",
      "files": 1757
    },
    "renderedAt": "2026-10-09T03:04:03.091Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/16x9-paper.png",
        "sha256": "6d15799732646ab5112d59759c05304e4dd6ccbeefff51cc30ce137448585d78"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/16x9-night.png",
        "sha256": "95c62a396558233a20084a15e23734bab9ad774f153a85453583f55029f571f5"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/16x9-color.png",
        "sha256": "f10bd0655f36ddf5f8a1f72ea1b47b03b2b73c2182be14b2f6a45b345a21f515"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/9x16-paper.png",
        "sha256": "cf7c5a2bb2fbca1eb037c416a42c5b1d65821ece533311bf3ca2607e343e95d6"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/9x16-night.png",
        "sha256": "c05490fe84d5a739d65b8c91ebfdf1d55279c3edb9f0425b74736921a4e2326f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/9x16-color.png",
        "sha256": "1380f1bd0e963c14ad0c3f43e5f649beb258fa50346feb1ad7a2a52157188182"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/1x1-paper.png",
        "sha256": "77d8ce4e3615bea790bfe2cfaf4dea343e4f522c434f7167ecc7681b5e2ce4dc"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/1x1-night.png",
        "sha256": "eca45a7173973465faea4ebbb882e7abd9b3c12db242dfb85589817c3229babc"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/1x1-color.png",
        "sha256": "fde80358f3a6a9ab644305119c2dd8a4e5040848c3d9ab4f1f0656dfd4bfeee9"
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
          "mg-dev-handoff--16x9",
          "mg-dev-handoff--9x16",
          "mg-dev-handoff--1x1"
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
            "paperNight": 33.54852973090278,
            "paperColor": 12.36428493923611,
            "region": {
              "left": 103,
              "top": 192,
              "width": 1792,
              "height": 681
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 46.171468098958336,
            "paperColor": 17.732340494791668,
            "region": {
              "left": 29,
              "top": 168,
              "width": 995,
              "height": 1591
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 29.478135850694443,
            "paperColor": 12.434678819444445,
            "region": {
              "left": 8,
              "top": 71,
              "width": 1016,
              "height": 940
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
            "occupancy": 0.8340681951793065,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8340681951793065,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8340681951793065,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0805961643273567,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0819562601918342,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0799161163951179,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1604207297916882,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1604207297916882,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1604207297916882,
            "bad": [],
            "measured": 10
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.70529513888889,
        "frames": [
          18,
          126,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 8.75271267361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/16x9-duration-90-frame-10.png",
                "sha256": "4a6346dd5db0d06eb51f8cf0b488eee99029b78ae2990ce5abd6542cceeb1147",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/16x9-duration-90-frame-89.png",
                "sha256": "f894da1656b6c3773f11b821bf341aa6578cb8fb46322aabfc8b9e7e490e829d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/16x9-duration-90-frame-79.png",
                "sha256": "c648457c49544cdf957a0d77fb046a4381e8820626b488e9857cc6f1a7854339",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 8.70529513888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/16x9-duration-900-frame-18.png",
                "sha256": "4464f4ce1cd7998a5dbda903393d13a306907b6ff0f82eccd62a4760a664bc84",
                "alphaMass": 587520
              },
              {
                "frame": 126,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/16x9-duration-900-frame-126.png",
                "sha256": "c648457c49544cdf957a0d77fb046a4381e8820626b488e9857cc6f1a7854339",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/16x9-duration-900-frame-792.png",
                "sha256": "f894da1656b6c3773f11b821bf341aa6578cb8fb46322aabfc8b9e7e490e829d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/16x9-duration-900-frame-899.png",
                "sha256": "f894da1656b6c3773f11b821bf341aa6578cb8fb46322aabfc8b9e7e490e829d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 8.29513888888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/9x16-duration-90-frame-10.png",
                "sha256": "0a398b828f276c2d35766bd852ec8a2a992d6c396df6e57b80941ae6ebe0e499",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/9x16-duration-90-frame-89.png",
                "sha256": "98756d579d62018f751a5fc160ae28f97bbe3298a296650d516c3b19867afda9",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/9x16-duration-90-frame-79.png",
                "sha256": "98756d579d62018f751a5fc160ae28f97bbe3298a296650d516c3b19867afda9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 8.187391493055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/9x16-duration-900-frame-18.png",
                "sha256": "ac3f7b4346b5f1eb083bea5d8359cada2e631532ccf38c0294e9357fd72e2f4e",
                "alphaMass": 587520
              },
              {
                "frame": 126,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/9x16-duration-900-frame-126.png",
                "sha256": "98756d579d62018f751a5fc160ae28f97bbe3298a296650d516c3b19867afda9",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/9x16-duration-900-frame-792.png",
                "sha256": "98756d579d62018f751a5fc160ae28f97bbe3298a296650d516c3b19867afda9",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/9x16-duration-900-frame-899.png",
                "sha256": "2bec1901e8dc05bbf0dbd48dc296e2a0f22d63f690ede82d3fbaefb68f5f7485",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 11.029622395833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/1x1-duration-90-frame-10.png",
                "sha256": "dc9d96fab2ee11d303b53a37e069f755c18d51b6d6f1a222e8cc4ff235be1489",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/1x1-duration-90-frame-89.png",
                "sha256": "8767522ecc22cb9a7d1baee4f2752143dbd49b22bea46f769eec62ef2b99f80e",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/1x1-duration-90-frame-79.png",
                "sha256": "8767522ecc22cb9a7d1baee4f2752143dbd49b22bea46f769eec62ef2b99f80e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 10.951822916666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/1x1-duration-900-frame-18.png",
                "sha256": "dbc7a24a2194990934cc23d0608ebf75b92f91336630ff1b6a7d94a1ee63d39b",
                "alphaMass": 587520
              },
              {
                "frame": 126,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/1x1-duration-900-frame-126.png",
                "sha256": "4e402a7fe875cc7f5a6620db29874187ce17ab244022dc59f3b4f02b50e8c42e",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/1x1-duration-900-frame-792.png",
                "sha256": "4e402a7fe875cc7f5a6620db29874187ce17ab244022dc59f3b4f02b50e8c42e",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-fix/mg-dev-handoff/1x1-duration-900-frame-899.png",
                "sha256": "4e402a7fe875cc7f5a6620db29874187ce17ab244022dc59f3b4f02b50e8c42e",
                "alphaMass": 587520
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
        "note": "A draft started on a phone continues on a laptop; navy and brand-blue scene, draft art goes peach to light neutral to blue with no lavender band."
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
      "bundleSha256": "976481157c401040a041e068fa449368392f99bb83f7044190a398160faaa0a1",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-dev-handoff/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-dev-handoff/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-dev-handoff/16x9/detail.mp4",
      "bg": "#05060c",
      "posterFrame": 126,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "28f38abb0f0cdac96f5e6525aa9086478381788993b9345ed4e2d11d81178a50",
        "loop": "36861f2da9c092937a1c36281ed950c3d2f7dd6dbfe5a6d58aef597e692ba16e",
        "detail": "601d260e42f5e788e5d5a6a8a76bb64d3b3e082201ae011b95568d7674e0d112"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-dev-handoff/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-dev-handoff/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-dev-handoff/9x16/detail.mp4",
      "bg": "#05060c",
      "posterFrame": 126,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "32e08aa32d51dd6d16aa507d458add265c123b03df5bdd379802d0f88bd1dd04",
        "loop": "0b62e338285a431c481f46d4c339e965b18bcf8b7f68a88105587331dc3cdcdb",
        "detail": "ff126e1587a45bed6575c1ebe472e2d8119fb0b573e6e2a85e388fc045a59124"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-dev-handoff/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-dev-handoff/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-dev-handoff/1x1/detail.mp4",
      "bg": "#05060c",
      "posterFrame": 126,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7ac7bd068ae4fd1bda0668250fdf24614254fd48c39d1b972e32f6dbe5373a83",
        "loop": "d60931014e3b195beb58c18238b1a3431d7c35be31faba6df07c21107f85ec94",
        "detail": "a1711b0709b22f5c82706d3e88612c0b185bd75ec0a4d8ae689e05a3e5e010f4"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/976481157c401040a041e068fa449368392f99bb83f7044190a398160faaa0a1/index.mjs",
    "sha256": "976481157c401040a041e068fa449368392f99bb83f7044190a398160faaa0a1",
    "bytes": 178367,
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
    "at": "2026-10-09T03:51:12.260Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
