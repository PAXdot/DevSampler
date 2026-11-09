// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "rep-number-slam-shake"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "rep-number-slam-shake",
    "fitness",
    "reps",
    "story-ad"
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
      "in": 96,
      "out": 0
    },
    "markers": {
      "settled": 96
    },
    "beats": [
      0,
      24,
      48,
      72,
      96
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
      "key": "count",
      "type": "text",
      "maxChars": 3,
      "role": "value"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 24,
      "role": "headline"
    },
    {
      "key": "tape",
      "type": "text",
      "maxChars": 26,
      "role": "kicker"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 26,
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
      "target": "rep-number-slam-shake",
      "prop": "transform",
      "from": "enter",
      "settledBy": 96,
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
    "ink": "#0B0B0B",
    "accent": "#F6F1E7",
    "secondary": "#7A1A08",
    "paper": "#FF4D2E",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "count": "10",
    "headline": "LAST REP. BEST REP.",
    "tape": "30-DAY STRENGTH BLOCK",
    "cta": "Start the 30-day block"
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
      "key": "count",
      "label": "Count",
      "type": "text",
      "max": 3,
      "role": "value"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 24,
      "role": "headline"
    },
    {
      "key": "tape",
      "label": "Tape",
      "type": "text",
      "max": 26,
      "role": "kicker"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 26,
      "role": "cta"
    }
  ],
  "name": "Rep Count Slam",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fit-rep-slam",
    "bundleSha256": "c9244d36455dbbf28791ee8eda6934e1607ae24970ba5af0c9c6c3caea00d4f1",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:07:33.205Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/16x9-paper.png",
        "sha256": "cc37005ab0b362e1e5d4110690a74a81631253fb08e4bed444af61a767975ea6"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/16x9-night.png",
        "sha256": "dab4691b32e78df592b74b1a44728218c2c5ea333ae12ce131229ddfb7aacc5a"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/16x9-color.png",
        "sha256": "1e34dae142d2f57cf8a65f3d7e71f4cb2cd4e229c89181ae5bc54dc1df48a4f2"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/9x16-paper.png",
        "sha256": "52aacfa46cba74d81ff6d2614f56a329e8039be6578e894c1770da6d9387c8b0"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/9x16-night.png",
        "sha256": "f86477986f97bfb4c0da3cfe2c67da8e04090bc236056d7144b499be48b1f35b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/9x16-color.png",
        "sha256": "ee0282b72e16601098c05e9ad22f63ceb8b5c3ce4ea81999dd3530feace61e3e"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/1x1-paper.png",
        "sha256": "5c7dd5980af53ce6a35900573b5de8d23d52e77230538c124672f3699cb4e336"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/1x1-night.png",
        "sha256": "cb21d1079f474f4328435f53ce9fbd0f1b29851eb526afe1e822bf1c06de4db8"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/1x1-color.png",
        "sha256": "71e1a66cb6fcbc83fa951636901b7d09017b74c4b221e0b5804366edf697cbfe"
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
          "mg-fit-rep-slam--16x9",
          "mg-fit-rep-slam--9x16",
          "mg-fit-rep-slam--1x1"
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
            "paperNight": 57.35503472222222,
            "paperColor": 32.432454427083336,
            "region": {
              "left": 77,
              "top": 50,
              "width": 1766,
              "height": 962
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 66.81301540798611,
            "paperColor": 33.351047092013886,
            "region": {
              "left": 50,
              "top": 43,
              "width": 1004,
              "height": 1764
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 64.69382052951389,
            "paperColor": 28.855360243055557,
            "region": {
              "left": 41,
              "top": 39,
              "width": 998,
              "height": 974
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
            "occupancy": 1.1611336599969209,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1611336599969209,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1611336599969209,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2104552469135805,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2104552469135805,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2104552469135805,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1810911493083747,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1798785300585715,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1798785300585715,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 15.849283854166666,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 14.859049479166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/16x9-duration-90-frame-10.png",
                "sha256": "e5419657ee2364dec8554aefecf6afb27a1cf5ef70520180b525bc8c3ce485c0",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/16x9-duration-90-frame-89.png",
                "sha256": "0898142394294187e33598fae66991da4224927c0fe4ddf06a77655198f5f454",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/16x9-duration-90-frame-79.png",
                "sha256": "0898142394294187e33598fae66991da4224927c0fe4ddf06a77655198f5f454",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 15.849283854166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/16x9-duration-900-frame-14.png",
                "sha256": "630ebae9e619414a75096bb8b9ab8d647f712b546025ed38146db73fa6402dcc",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/16x9-duration-900-frame-96.png",
                "sha256": "0898142394294187e33598fae66991da4224927c0fe4ddf06a77655198f5f454",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/16x9-duration-900-frame-792.png",
                "sha256": "0898142394294187e33598fae66991da4224927c0fe4ddf06a77655198f5f454",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/16x9-duration-900-frame-899.png",
                "sha256": "0898142394294187e33598fae66991da4224927c0fe4ddf06a77655198f5f454",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 15.103190104166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/9x16-duration-90-frame-10.png",
                "sha256": "b350404c61e882a26a61bb04d27a837fe7dc7661b38fad5953a28162f5f1aeaa",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/9x16-duration-90-frame-89.png",
                "sha256": "f919640cc0d4200f7d60a54f7c3646c821839a96f0015a814bbf3e89f7670834",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/9x16-duration-90-frame-79.png",
                "sha256": "f919640cc0d4200f7d60a54f7c3646c821839a96f0015a814bbf3e89f7670834",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 16.13129340277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/9x16-duration-900-frame-14.png",
                "sha256": "8d94039360639cbded81f0b162f77fa4b365d5e544fcfadfd7d04a9c1a952514",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/9x16-duration-900-frame-96.png",
                "sha256": "f919640cc0d4200f7d60a54f7c3646c821839a96f0015a814bbf3e89f7670834",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/9x16-duration-900-frame-792.png",
                "sha256": "f919640cc0d4200f7d60a54f7c3646c821839a96f0015a814bbf3e89f7670834",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/9x16-duration-900-frame-899.png",
                "sha256": "f919640cc0d4200f7d60a54f7c3646c821839a96f0015a814bbf3e89f7670834",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 13.968424479166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/1x1-duration-90-frame-10.png",
                "sha256": "0aa822f23e5f32e11cc866dc31c5de8f7b7719977a6bd812a923c8310fcd82da",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/1x1-duration-90-frame-89.png",
                "sha256": "9d035076bc44cd544748b27964cb787ab17f9c2eff368e67f24fb58bb6d1d7af",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/1x1-duration-90-frame-79.png",
                "sha256": "9d035076bc44cd544748b27964cb787ab17f9c2eff368e67f24fb58bb6d1d7af",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 14.453016493055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/1x1-duration-900-frame-14.png",
                "sha256": "722b2304b939539e8069d3582a9d7638c6b3c6ae6cef3175dfd5e23eff62a834",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/1x1-duration-900-frame-96.png",
                "sha256": "9d035076bc44cd544748b27964cb787ab17f9c2eff368e67f24fb58bb6d1d7af",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/1x1-duration-900-frame-792.png",
                "sha256": "9d035076bc44cd544748b27964cb787ab17f9c2eff368e67f24fb58bb6d1d7af",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-fit-rep-slam/1x1-duration-900-frame-899.png",
                "sha256": "9d035076bc44cd544748b27964cb787ab17f9c2eff368e67f24fb58bb6d1d7af",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "titles",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Rep counter slams to the final number beside a bold two-line headline and CTA; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 63,
        "compared": 63,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "c9244d36455dbbf28791ee8eda6934e1607ae24970ba5af0c9c6c3caea00d4f1",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.084Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-rep-slam/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-rep-slam/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-rep-slam/16x9/detail.mp4",
      "bg": "#ff5234",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ad515382b48bcefdd544e28169519009030a607117ee6edc10bda60f7474fefe",
        "loop": "5e3be67bbc46ef85bf0004c01223d56817540bc4d80085c57e3476e789a3843d",
        "detail": "1cb6e258e8a777339ec96b6b90d42eac6aa79d1b82ad2550fdc1462146266969"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-rep-slam/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-rep-slam/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-rep-slam/9x16/detail.mp4",
      "bg": "#ff4d2e",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e13b86c266169f0ec3b986fa5d2a507110f352a0f807c66a986d77e108de4c7e",
        "loop": "f7b322d1cc910b7963e2ff3a19600f77e8e6599345497440877233db3c5210bd",
        "detail": "a276eb7f82b5264740e0df4123121002f9ec41546e5e8198cbc393ce65e16499"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-rep-slam/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-rep-slam/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-rep-slam/1x1/detail.mp4",
      "bg": "#ff4d2e",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4579ada458f3063fcc033ea5c014d2366875b4ba1a01072a41ddf8f3678b0b9b",
        "loop": "db8370065ec68eeba7aba47a1f5324f7b94b8c08035acc850159b720125558fd",
        "detail": "e45e6733a37f06ba388e888fcc9dd026b4d17c865e1c0372dcaa8463cb41d338"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c9244d36455dbbf28791ee8eda6934e1607ae24970ba5af0c9c6c3caea00d4f1/index.mjs",
    "sha256": "c9244d36455dbbf28791ee8eda6934e1607ae24970ba5af0c9c6c3caea00d4f1",
    "bytes": 174479,
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
    "at": "2026-10-09T07:11:38.278Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
