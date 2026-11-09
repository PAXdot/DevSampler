// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "process/motion-gallery",
  "job": "process",
  "language": "editorial",
  "mechanic": [
    "split-steps-pile-vs-one-click"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "process",
    "split-steps-pile-vs-one-click",
    "before-after",
    "workflow",
    "split-screen"
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
      "key": "oldWay",
      "type": "text",
      "maxChars": 18,
      "role": "headline"
    },
    {
      "key": "newWay",
      "type": "text",
      "maxChars": 18,
      "role": "headline"
    },
    {
      "key": "stat",
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
      "target": "split-steps-pile-vs-one-click",
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
    "ink": "#2C2925",
    "accent": "#3D63FF",
    "secondary": "#C2410C",
    "paper": "#EBE7DF",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "oldWay": "Old way",
    "newWay": "With Lumen",
    "stat": "1 prompt · 38 seconds"
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
      "key": "oldWay",
      "label": "Old way",
      "type": "text",
      "max": 18,
      "role": "headline"
    },
    {
      "key": "newWay",
      "label": "New way",
      "type": "text",
      "max": 18,
      "role": "headline"
    },
    {
      "key": "stat",
      "label": "Stat",
      "type": "text",
      "max": 28,
      "role": "caption"
    }
  ],
  "name": "Old Way Versus New",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-ba-split",
    "bundleSha256": "5b40e8d0b271a5d3bfd67af169dea854d58918a49a54a79b3af93d2fb5fdcebc",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:43:17.391Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/16x9-paper.png",
        "sha256": "4551b511688026040cec77ec501ef3e3aa0e510b6918df286a68bd6db169fe36"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/16x9-night.png",
        "sha256": "c4347e8902eb4b1cd4f2e17fc0adc03173f226d1a524cc9bdb856795a121781c"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/16x9-color.png",
        "sha256": "203ff87c8a2e73bc62d21b0c2a0d50a7a1d7e3b67e95b408b256132f9c9a532b"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/9x16-paper.png",
        "sha256": "a100ccb957819a81d39287bd696d922fe54e912044fade2104d26ec2dbd48f3f"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/9x16-night.png",
        "sha256": "11c9f2aa940f905bf692659598118a096f7f24266ea8d3f4554954a1350fc26b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/9x16-color.png",
        "sha256": "66381fdefebefe6790af5a92bab5742bb4489dd7d690e2c7c7ea9a7eb8f4d213"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/1x1-paper.png",
        "sha256": "bb230dcc94b0c0b592619fc6a3f434b28b1cf08584d1c8a33569489d4020df59"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/1x1-night.png",
        "sha256": "846207d2caef421b74b0d47c4eb9e14ef50c8a2a0373339911ddb8e642aedb34"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/1x1-color.png",
        "sha256": "e12aa8c64758d5b84b4b79558849fda09e5b74e5bf7c63bf59c96c8167d86112"
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
          "mg-ba-split--16x9",
          "mg-ba-split--9x16",
          "mg-ba-split--1x1"
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
            "paperNight": 21.74264865451389,
            "paperColor": 17.35639105902778,
            "region": {
              "left": 87,
              "top": 29,
              "width": 1804,
              "height": 1022
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 25.04022894965278,
            "paperColor": 18.360731336805557,
            "region": {
              "left": 32,
              "top": 134,
              "width": 1016,
              "height": 1748
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 19.461290147569443,
            "paperColor": 19.044514973958332,
            "region": {
              "left": 22,
              "top": 54,
              "width": 1036,
              "height": 1004
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
            "occupancy": 1.260096695571233,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.260096695571233,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.260096695571233,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2138124282634868,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2138124282634868,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2138124282634868,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2638262895464545,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2638262895464545,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2638262895464545,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.9610460069444446,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 3.0088975694444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/16x9-duration-90-frame-10.png",
                "sha256": "0a3aedc335399eca264c4bbb6d0b725e263c7b325a1fdd64a8dd9fb2c6ecfe00",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/16x9-duration-90-frame-89.png",
                "sha256": "f095bb734ca99f3d153fbf38b2f8e610474d2404079765f940af761b8b17bd21",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/16x9-duration-90-frame-79.png",
                "sha256": "f095bb734ca99f3d153fbf38b2f8e610474d2404079765f940af761b8b17bd21",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 2.9610460069444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/16x9-duration-900-frame-13.png",
                "sha256": "20b79826a255ff99dc7c78442423f22275985d20e00cbe46577285d4f3faec07",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/16x9-duration-900-frame-90.png",
                "sha256": "f095bb734ca99f3d153fbf38b2f8e610474d2404079765f940af761b8b17bd21",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/16x9-duration-900-frame-792.png",
                "sha256": "f095bb734ca99f3d153fbf38b2f8e610474d2404079765f940af761b8b17bd21",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/16x9-duration-900-frame-899.png",
                "sha256": "f095bb734ca99f3d153fbf38b2f8e610474d2404079765f940af761b8b17bd21",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 3.4317491319444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/9x16-duration-90-frame-10.png",
                "sha256": "ec883dc8816eff7c68a757988787263fc646697a3ad66361b097c22bb7bdaac3",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/9x16-duration-90-frame-89.png",
                "sha256": "7da2987c245a8af4997c3c8dfe8c024c6e2027c7bba1ad8d2cbe16ca46ce7ed7",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/9x16-duration-90-frame-79.png",
                "sha256": "7da2987c245a8af4997c3c8dfe8c024c6e2027c7bba1ad8d2cbe16ca46ce7ed7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 3.3940972222222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/9x16-duration-900-frame-13.png",
                "sha256": "b466126dd42bf6fff314916497bd29fec1e52418c73443e2cc4f07ecb8bc8b31",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/9x16-duration-900-frame-90.png",
                "sha256": "7da2987c245a8af4997c3c8dfe8c024c6e2027c7bba1ad8d2cbe16ca46ce7ed7",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/9x16-duration-900-frame-792.png",
                "sha256": "7da2987c245a8af4997c3c8dfe8c024c6e2027c7bba1ad8d2cbe16ca46ce7ed7",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/9x16-duration-900-frame-899.png",
                "sha256": "7da2987c245a8af4997c3c8dfe8c024c6e2027c7bba1ad8d2cbe16ca46ce7ed7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 2.0796440972222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/1x1-duration-90-frame-10.png",
                "sha256": "b431487a748f308d84209ab8d7e531d6d6407e20377ec3729fa77ff161a60670",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/1x1-duration-90-frame-89.png",
                "sha256": "0d0cfc0a2ba2d911a278665580617b262005783dafd8cf9331eaa650e2460747",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/1x1-duration-90-frame-79.png",
                "sha256": "0d0cfc0a2ba2d911a278665580617b262005783dafd8cf9331eaa650e2460747",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 2.0569661458333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/1x1-duration-900-frame-13.png",
                "sha256": "1fface2436798a11e907e74595223c6273e551770ebc0b8bac1dc23b9b06da55",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/1x1-duration-900-frame-90.png",
                "sha256": "0d0cfc0a2ba2d911a278665580617b262005783dafd8cf9331eaa650e2460747",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/1x1-duration-900-frame-792.png",
                "sha256": "0d0cfc0a2ba2d911a278665580617b262005783dafd8cf9331eaa650e2460747",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-5/mg-ba-split/1x1-duration-900-frame-899.png",
                "sha256": "0d0cfc0a2ba2d911a278665580617b262005783dafd8cf9331eaa650e2460747",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "process",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Old way checklist versus one Lumen prompt on a brand-blue panel; no purple."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 15,
        "compared": 15,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "5b40e8d0b271a5d3bfd67af169dea854d58918a49a54a79b3af93d2fb5fdcebc",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ba-split/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ba-split/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ba-split/16x9/detail.mp4",
      "bg": "#efece5",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "cba463f0092ebd22cbb1d84d1894a2445d8f86e0e7e489ad14f0285a942cd9d6",
        "loop": "99f837c678ae146ab3a6ba296a329c81256695732c7c377edab0a2ff97eefbf1",
        "detail": "d751f3e040ec6cf6467014d24e2bc3e9d8bf393165082e41b4d58f2b3b7bdeaf"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ba-split/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ba-split/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ba-split/9x16/detail.mp4",
      "bg": "#efece5",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "acc68ece8e4143378ba5f21a99555b1ff304d20e2281439b5e66bb0a2d203ddb",
        "loop": "23cad7ef55f3987b306893e02c566db146ae4fc053fdefa929463c60ffc193ed",
        "detail": "80560c0f9d910fc88cb167d7874ebc85a04806a924129bdaefdd152e9ae8d616"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ba-split/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ba-split/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ba-split/1x1/detail.mp4",
      "bg": "#efece5",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ba743c0d713414649bd34f3559d6ea00c977185626524880353cd0e1ae8f288c",
        "loop": "28ccfb2bbd803755630878fea7360555579d0a04a0bf1d5433fcea01d1b276c6",
        "detail": "2dc3efa09867d3334be409b7eb989feb95b3f966186a2be2363f23dfa3281467"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/5b40e8d0b271a5d3bfd67af169dea854d58918a49a54a79b3af93d2fb5fdcebc/index.mjs",
    "sha256": "5b40e8d0b271a5d3bfd67af169dea854d58918a49a54a79b3af93d2fb5fdcebc",
    "bytes": 176765,
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
    "at": "2026-10-09T03:39:12.633Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
