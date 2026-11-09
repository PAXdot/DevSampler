// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "gallery/motion-gallery",
  "job": "gallery",
  "language": "editorial",
  "mechanic": [
    "card-curtain-reveal-lineup"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "gallery",
    "card-curtain-reveal-lineup",
    "speakers",
    "lineup",
    "event",
    "conference"
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
      "key": "title",
      "type": "text",
      "maxChars": 26,
      "role": "headline"
    },
    {
      "key": "event",
      "type": "text",
      "maxChars": 32,
      "role": "kicker"
    },
    {
      "key": "when",
      "type": "text",
      "maxChars": 30,
      "role": "label"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 28,
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
      "target": "card-curtain-reveal-lineup",
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
    "ink": "#17140F",
    "accent": "#E8553A",
    "secondary": "#7B66DE",
    "paper": "#EFEAE0",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "title": "The first speakers",
    "event": "Meridian Summit 26 · Lineup",
    "when": "Nov 18–20, 2026 · Lisbon",
    "cta": "meridian.events/speakers"
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
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 26,
      "role": "headline"
    },
    {
      "key": "event",
      "label": "Event",
      "type": "text",
      "max": 32,
      "role": "kicker"
    },
    {
      "key": "when",
      "label": "When",
      "type": "text",
      "max": 30,
      "role": "label"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 28,
      "role": "cta"
    }
  ],
  "name": "Speaker Lineup Reveal",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-event-speakers",
    "bundleSha256": "0b8cf6f1fee156e41c54004fd0ed331fdcc5470a7c1b9a7c1e266a21d21ae9ac",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:47:26.747Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/16x9-paper.png",
        "sha256": "002c694e9cfd92a799d035062a60dce9976752b7448285b4bb3fa22dfb11554b"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/16x9-night.png",
        "sha256": "7fb9085f27bf664ffe2ac3aaccea25d506ae6caddc1a4b1c34b1d6575772d2e6"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/16x9-color.png",
        "sha256": "f0584e4ec968a140d4b2ddff4b558e58cdcf22a9f79626d0bdf2959d59a80ba8"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/9x16-paper.png",
        "sha256": "39e6e40c4fff054339656d2de5e51a0a36390ce66ce491e470d2895924e85151"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/9x16-night.png",
        "sha256": "691ec29897b9107c4ef149570442b9b45cb8a7294bc0b4f586ecc89329e7a9f1"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/9x16-color.png",
        "sha256": "cd01087416d8756db76bc1794b887a6ec82b24a82cfdc143a99eae40dd5137f4"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/1x1-paper.png",
        "sha256": "73680cc165e94166928940c8ed84be614b39827d4766f357ba9f5f30b9babbad"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/1x1-night.png",
        "sha256": "a903373a8e2dac382b4cf7839bfbeac9591c6e73782ef3e11cb91d1b1cadc5ae"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/1x1-color.png",
        "sha256": "4c57e804039a15cb673680e53a11f0620e5a1770e3c5bc1f8a70b3ff7d0ae2d9"
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
          "mg-event-speakers--16x9",
          "mg-event-speakers--9x16",
          "mg-event-speakers--1x1"
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
            "paperNight": 34.114773220486114,
            "paperColor": 14.640245225694445,
            "region": {
              "left": 82,
              "top": 78,
              "width": 1756,
              "height": 936
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 48.728732638888886,
            "paperColor": 25.17645941840278,
            "region": {
              "left": 66,
              "top": 87,
              "width": 948,
              "height": 1744
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 39.391194661458336,
            "paperColor": 16.26174587673611,
            "region": {
              "left": 57,
              "top": 66,
              "width": 966,
              "height": 949
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
            "occupancy": 1.1233544343663393,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1233544343663393,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1221542693723583,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1299813135130599,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1299813135130599,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1299813135130599,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1115295741067348,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1127033117773861,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1138770494480372,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 22.072265625,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 22.567274305555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/16x9-duration-90-frame-10.png",
                "sha256": "70906784b7035e0cc70c25b9329a95cb0fb1ed215340b040e611b0ad586de24a",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/16x9-duration-90-frame-89.png",
                "sha256": "ca28ee733563014ed6d30428525d1900879476ed87490b4e9defd8d8073afee1",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/16x9-duration-90-frame-79.png",
                "sha256": "ca28ee733563014ed6d30428525d1900879476ed87490b4e9defd8d8073afee1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 22.072265625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/16x9-duration-900-frame-13.png",
                "sha256": "feb3b2f2a35a0d29a824c5d2ff9987e832ddb38e865cc953ccc4fb67fcd8cb56",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/16x9-duration-900-frame-90.png",
                "sha256": "ca28ee733563014ed6d30428525d1900879476ed87490b4e9defd8d8073afee1",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/16x9-duration-900-frame-792.png",
                "sha256": "ca28ee733563014ed6d30428525d1900879476ed87490b4e9defd8d8073afee1",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/16x9-duration-900-frame-899.png",
                "sha256": "ca28ee733563014ed6d30428525d1900879476ed87490b4e9defd8d8073afee1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 24.932508680555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/9x16-duration-90-frame-10.png",
                "sha256": "d75cfe277d2a87cedee214b87860f92463b60dad8bbe6589150161b335c205d0",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/9x16-duration-90-frame-89.png",
                "sha256": "b35857d6c0662b19a27be5630c1f1e378488f32087507416ec33d65ccd76285b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/9x16-duration-90-frame-79.png",
                "sha256": "b35857d6c0662b19a27be5630c1f1e378488f32087507416ec33d65ccd76285b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 24.442274305555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/9x16-duration-900-frame-13.png",
                "sha256": "4158e651161795d24b7af5f1337aa488658fe26bfa7fcc58ba479f1d54bf0cf4",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/9x16-duration-900-frame-90.png",
                "sha256": "b35857d6c0662b19a27be5630c1f1e378488f32087507416ec33d65ccd76285b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/9x16-duration-900-frame-792.png",
                "sha256": "b35857d6c0662b19a27be5630c1f1e378488f32087507416ec33d65ccd76285b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/9x16-duration-900-frame-899.png",
                "sha256": "b35857d6c0662b19a27be5630c1f1e378488f32087507416ec33d65ccd76285b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 24.96408420138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/1x1-duration-90-frame-10.png",
                "sha256": "342cd6382d5935dba13dd2c7839628391fb06163af59a1d42b83b176709b7fa1",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/1x1-duration-90-frame-89.png",
                "sha256": "5720580da36ced932f11273bb3c9dd23a77327c56b9ae137c66d20995569e18d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/1x1-duration-90-frame-79.png",
                "sha256": "5720580da36ced932f11273bb3c9dd23a77327c56b9ae137c66d20995569e18d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 24.438151041666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/1x1-duration-900-frame-13.png",
                "sha256": "a981b9829e9747eea288170e59ef41c27d3e1f08959c15b102e3b6251cd050a4",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/1x1-duration-900-frame-90.png",
                "sha256": "5720580da36ced932f11273bb3c9dd23a77327c56b9ae137c66d20995569e18d",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/1x1-duration-900-frame-792.png",
                "sha256": "5720580da36ced932f11273bb3c9dd23a77327c56b9ae137c66d20995569e18d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-event-speakers/1x1-duration-900-frame-899.png",
                "sha256": "5720580da36ced932f11273bb3c9dd23a77327c56b9ae137c66d20995569e18d",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "gallery",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Speaker lineup cards reveal under a serif heading; rebrands recolor portraits and type."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 25,
        "compared": 25,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "0b8cf6f1fee156e41c54004fd0ed331fdcc5470a7c1b9a7c1e266a21d21ae9ac",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.094Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-speakers/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-speakers/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-speakers/16x9/detail.mp4",
      "bg": "#e9e4da",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "fcac1664648a65784519354ac96378eca6acc08d9a7178e0d6aa72cc68eaa227",
        "loop": "5006c8194c989e629e7963e70c94baf93846b661d7f997d9d757c21b7b99c713",
        "detail": "0b55d05cea320dd08b7d86de8f0369afbc271fdcadce41d51bc8b4dc2c950e7b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-speakers/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-speakers/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-speakers/9x16/detail.mp4",
      "bg": "#e9e4da",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7d594a8304ecd6df26cf4e5007217610dd4cacd3041f8ada05567eae013f32ed",
        "loop": "8bc0e02845ca6c83149c9f6162611231c40e11bc8482eb5c89b784cac5f687c2",
        "detail": "41cc99231cd557921d5d83398f6ab388cc24f3d0fd6c0af7ddf838d1d8788201"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-speakers/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-speakers/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-speakers/1x1/detail.mp4",
      "bg": "#e9e4da",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "424f4424435b24ab5cd34b9c7dcd0ea16463db2147918a9e876e22b1ab58dad3",
        "loop": "da00d47be0fa208021bf0f97905265154926bf6749d2087111be5baca58cd9c4",
        "detail": "4ffba5503f5104307a67081a104100dd7135bed3c41a9a9c8f85b1b2ae177f98"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/0b8cf6f1fee156e41c54004fd0ed331fdcc5470a7c1b9a7c1e266a21d21ae9ac/index.mjs",
    "sha256": "0b8cf6f1fee156e41c54004fd0ed331fdcc5470a7c1b9a7c1e266a21d21ae9ac",
    "bytes": 295993,
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
    "at": "2026-10-09T07:17:53.134Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
