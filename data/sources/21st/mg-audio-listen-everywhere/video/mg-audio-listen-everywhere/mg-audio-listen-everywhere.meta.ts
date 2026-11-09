// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "cta/motion-gallery",
  "job": "cta",
  "language": "glass",
  "mechanic": [
    "cursor-clicks-follow-platform-grid"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "cta",
    "cursor-clicks-follow-platform-grid",
    "podcast",
    "end-card",
    "follow",
    "platforms"
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
      "in": 93,
      "out": 0
    },
    "markers": {
      "settled": 93
    },
    "beats": [
      0,
      23,
      47,
      70,
      93
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
      "key": "brand",
      "type": "text",
      "maxChars": 18,
      "role": "label"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 40,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 54,
      "role": "body"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 20,
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
      "target": "cursor-clicks-follow-platform-grid",
      "prop": "transform",
      "from": "enter",
      "settledBy": 93,
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
    "ink": "#F5F0FF",
    "accent": "#FF8A66",
    "secondary": "#7B5CFF",
    "paper": "#140D26",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "brand": "tidewell",
    "headline": "New episodes every Tuesday.",
    "sub": "Slow Signal is free, wherever you listen.",
    "cta": "Follow the show"
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
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 18,
      "role": "label"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 54,
      "role": "body"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 20,
      "role": "cta"
    }
  ],
  "name": "Listen Everywhere End Card",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-audio-listen-everywhere",
    "bundleSha256": "4d8fd3ec12b26590423d50d88e1ed43e950c70acf507ddba1906dc138c4586af",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:06:38.504Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/16x9-paper.png",
        "sha256": "159896f6a870a997aff5033920118484dd7ca3a9852554a0304de846da61634c"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/16x9-night.png",
        "sha256": "d382ab286e554aba29455a513d9ae99162eba9f40d59f6afa65c49f329e1feee"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/16x9-color.png",
        "sha256": "e17878977dc60a91585b1bef98ce4fd280cd8d4cf8a408b6bbc7bedd616d329b"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/9x16-paper.png",
        "sha256": "1a92e5436e8458c49ec4e48690d394842200b416af033fd0a9d5bfb4f84320d1"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/9x16-night.png",
        "sha256": "c7dfecb41e01f9d81ccee2c1f37ff87ff4c9869443fee00e20a73bb0b9d21945"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/9x16-color.png",
        "sha256": "3c44460bb91167d84137bdd5989e9e3a6a5967fdd9b3c15690f8e5b719e5906d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/1x1-paper.png",
        "sha256": "7a263766345fb839ecb51314d9545a91767710f43d80db75b971a08930416756"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/1x1-night.png",
        "sha256": "236989ba61428496514ffc576edf1d7992202362e3e3b3059de009469e14203c"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/1x1-color.png",
        "sha256": "6ead2dca40d6f3bf0111b5c794fd9f6bbf4e62890613c23f7dd6346028e00dce"
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
          "mg-audio-listen-everywhere--16x9",
          "mg-audio-listen-everywhere--9x16",
          "mg-audio-listen-everywhere--1x1"
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
            "paperNight": 71.98524305555556,
            "paperColor": 20.68844943576389,
            "region": {
              "left": 116,
              "top": 168,
              "width": 1710,
              "height": 788
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 83.74666341145833,
            "paperColor": 26.95968967013889,
            "region": {
              "left": 61,
              "top": 129,
              "width": 958,
              "height": 1686
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 96.67277018229167,
            "paperColor": 49.09581163194444,
            "region": {
              "left": 55,
              "top": 78,
              "width": 970,
              "height": 956
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
            "occupancy": 0.9197870409737972,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9209557665658858,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9180811116885028,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1039248839968088,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1039248839968088,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1039248839968088,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1255609639832158,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.126739561851261,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1243823661151706,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 16.172200520833332,
        "frames": [
          13,
          93,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 16.184678819444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/16x9-duration-90-frame-10.png",
                "sha256": "ba217102252e69a7792be5c9f54b7bf54f4e51bc2734f857f2e07a5d8e640900",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/16x9-duration-90-frame-89.png",
                "sha256": "3c66c694111a4f8329cb8f0ff723fb7883c224bcaa716dd002353d26b27ecd05",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/16x9-duration-90-frame-79.png",
                "sha256": "3c66c694111a4f8329cb8f0ff723fb7883c224bcaa716dd002353d26b27ecd05",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 16.172200520833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/16x9-duration-900-frame-13.png",
                "sha256": "9b775ea67f14340d0ab890e9e7004c98f5a7d9ef681dcfbd7bfddbb63d660828",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/16x9-duration-900-frame-93.png",
                "sha256": "3c66c694111a4f8329cb8f0ff723fb7883c224bcaa716dd002353d26b27ecd05",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/16x9-duration-900-frame-792.png",
                "sha256": "3c66c694111a4f8329cb8f0ff723fb7883c224bcaa716dd002353d26b27ecd05",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/16x9-duration-900-frame-899.png",
                "sha256": "3c66c694111a4f8329cb8f0ff723fb7883c224bcaa716dd002353d26b27ecd05",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 21.82986111111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/9x16-duration-90-frame-10.png",
                "sha256": "679d501dc2c1a55fc7edd72dd728b397dcddac08bb15e3219ded56e4f9413b86",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/9x16-duration-90-frame-89.png",
                "sha256": "65c24f29e040dd1723e232578dc463a8174b7dc076af7494cc0ba1f28a2cdc32",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/9x16-duration-90-frame-79.png",
                "sha256": "65c24f29e040dd1723e232578dc463a8174b7dc076af7494cc0ba1f28a2cdc32",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 21.82269965277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/9x16-duration-900-frame-13.png",
                "sha256": "b057df15a0604a9b52d3d7de1cd21e55dbb93566980e7410e731193109df02ae",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/9x16-duration-900-frame-93.png",
                "sha256": "65c24f29e040dd1723e232578dc463a8174b7dc076af7494cc0ba1f28a2cdc32",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/9x16-duration-900-frame-792.png",
                "sha256": "65c24f29e040dd1723e232578dc463a8174b7dc076af7494cc0ba1f28a2cdc32",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/9x16-duration-900-frame-899.png",
                "sha256": "65c24f29e040dd1723e232578dc463a8174b7dc076af7494cc0ba1f28a2cdc32",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 15.771484375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/1x1-duration-90-frame-10.png",
                "sha256": "7e6fef84b9c3ba5b089314a9611799099828d38635e9b8fe71fcc2db9e5820dd",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/1x1-duration-90-frame-89.png",
                "sha256": "060e9fa4cea02a93fd6179a9d238460910b9a08acd387023f80c5279a3f37389",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/1x1-duration-90-frame-79.png",
                "sha256": "060e9fa4cea02a93fd6179a9d238460910b9a08acd387023f80c5279a3f37389",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 15.745442708333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/1x1-duration-900-frame-13.png",
                "sha256": "d851ff85314d2895d34178cb3a8ce0ef66f8c68a3365728971101c85999776e1",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/1x1-duration-900-frame-93.png",
                "sha256": "060e9fa4cea02a93fd6179a9d238460910b9a08acd387023f80c5279a3f37389",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/1x1-duration-900-frame-792.png",
                "sha256": "060e9fa4cea02a93fd6179a9d238460910b9a08acd387023f80c5279a3f37389",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-listen-everywhere/1x1-duration-900-frame-899.png",
                "sha256": "060e9fa4cea02a93fd6179a9d238460910b9a08acd387023f80c5279a3f37389",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "cta",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Listen-everywhere end card: flowing serif headline, follow CTA, platform grid and player; no overlaps in any brand."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 22,
        "compared": 22,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "4d8fd3ec12b26590423d50d88e1ed43e950c70acf507ddba1906dc138c4586af",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.082Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-listen-everywhere/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-listen-everywhere/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-listen-everywhere/16x9/detail.mp4",
      "bg": "#2b1f59",
      "posterFrame": 93,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "224671c54f62c6f9061148a3589ce5980a4140f161fafdfb549f1932cb22235b",
        "loop": "0cdff1a7b31a2c67bd46a94c28ea4404ea727a7665582bd1358c31d6b8b910d0",
        "detail": "5c3faa9a9dc458ccdb62842ea4988b0f28f507492116cd51eb8946737e361ae0"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-listen-everywhere/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-listen-everywhere/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-listen-everywhere/9x16/detail.mp4",
      "bg": "#2b1f59",
      "posterFrame": 93,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e5bc77b82c1f9145eea3341edbda22a0996013b483fa74f505973908ab45d8a9",
        "loop": "66c46fb2e0b0e567addf2af0ea8778e6768ebfa2e27cfad9ea9c9fe48633ce30",
        "detail": "6f4e0919113a81bb1fa9873aed9f50fbf44011cabf62ac286b7978148e0a280d"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-listen-everywhere/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-listen-everywhere/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-listen-everywhere/1x1/detail.mp4",
      "bg": "#2b1f59",
      "posterFrame": 93,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ddf2a5ca4cb9239f25916bef948cc6e99adf516657d72672952c8a43c81f48fe",
        "loop": "e2e8886bcc266f7feed8012dbf3a5d5cb3e8a378b51cec2521444d82bd573178",
        "detail": "790d12d201c07827134e61fae34d3cb5528d7a2714ba4495a010db082f33fced"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/4d8fd3ec12b26590423d50d88e1ed43e950c70acf507ddba1906dc138c4586af/index.mjs",
    "sha256": "4d8fd3ec12b26590423d50d88e1ed43e950c70acf507ddba1906dc138c4586af",
    "bytes": 245263,
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
    "at": "2026-10-09T07:10:00.405Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
