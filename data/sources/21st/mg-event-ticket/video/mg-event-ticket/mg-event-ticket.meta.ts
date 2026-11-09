// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "cta/motion-gallery",
  "job": "cta",
  "language": "glass",
  "mechanic": [
    "holo-ticket-float-scan"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "cta",
    "holo-ticket-float-scan",
    "ticket",
    "event",
    "early-bird",
    "pass"
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
      "in": 81,
      "out": 0
    },
    "markers": {
      "settled": 81
    },
    "beats": [
      0,
      20,
      41,
      61,
      81
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
      "key": "headline",
      "type": "text",
      "maxChars": 34,
      "role": "headline"
    },
    {
      "key": "pass",
      "type": "text",
      "maxChars": 12,
      "role": "label"
    },
    {
      "key": "price",
      "type": "text",
      "maxChars": 6,
      "role": "value"
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
    "displayFont": "fonts.display",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "holo-ticket-float-scan",
      "prop": "transform",
      "from": "enter",
      "settledBy": 81,
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
    "accent": "#D7FF3A",
    "secondary": "#7C5CFF",
    "paper": "#0B0920",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "Early-bird passes are live.",
    "pass": "Full Pass",
    "price": "€249",
    "cta": "Get your pass"
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
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 34,
      "role": "headline"
    },
    {
      "key": "pass",
      "label": "Pass",
      "type": "text",
      "max": 12,
      "role": "label"
    },
    {
      "key": "price",
      "label": "Price",
      "type": "text",
      "max": 6,
      "role": "value"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 20,
      "role": "cta"
    }
  ],
  "name": "Holo Ticket Drop",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-event-ticket",
    "bundleSha256": "3eeabf9cf868311f4510e3e91232f559dfb629c480af36dd46983f3636350195",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:47:25.940Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/16x9-paper.png",
        "sha256": "9a1581e1a82fa0d245779492be382f0d5528a2519cee9e49436fccdab985eb1c"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/16x9-night.png",
        "sha256": "f077686fe968e887a3cb158dfa67d6f2eb479e7a2be36d3f62cf41076f079be2"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/16x9-color.png",
        "sha256": "b71f1296374c5855f9d11616d0592d76f813798d293d8a103dec868ae87b030a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/9x16-paper.png",
        "sha256": "eb1580ec95e78549947a541b71c49690d42b94074c41fd530c42a5e96121cb36"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/9x16-night.png",
        "sha256": "cf883452ab46237f0467e1d14a0a24640aa9ed584a6dd4b75f22acf9c7e64531"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/9x16-color.png",
        "sha256": "541bba0d3cd5b99c75df2e5d103e78ff094f4cb4519f6c8b598600fb5f502590"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/1x1-paper.png",
        "sha256": "d05c811384bbb51358bb18a9a50d23c1bfe51761840cb27c2abc5edc0c774475"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/1x1-night.png",
        "sha256": "56ae5b9f13f8eeb5d437befe91c7e6b0cad6e49bc6218bfee514f13bc855121f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/1x1-color.png",
        "sha256": "f00744aed4d2aac5aeaa50857c56693c43350150588d98f0eba4c579423c1456"
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
          "mg-event-ticket--16x9",
          "mg-event-ticket--9x16",
          "mg-event-ticket--1x1"
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
            "paperNight": 24.23174370659722,
            "paperColor": 15.008490668402779,
            "region": {
              "left": 115,
              "top": 0,
              "width": 1805,
              "height": 1080
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 36.69219292534722,
            "paperColor": 20.047526041666668,
            "region": {
              "left": 79,
              "top": 124,
              "width": 925,
              "height": 1688
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 26.044080946180557,
            "paperColor": 16.01264105902778,
            "region": {
              "left": 64,
              "top": 76,
              "width": 1016,
              "height": 927
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
            "occupancy": 1.3323471749811038,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3323471749811038,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3323471749811038,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0450675897931192,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0537496489722435,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.064633833214356,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1432460072506372,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1432460072506372,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.144372357996697,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 27.317274305555557,
        "frames": [
          12,
          81,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 28.59917534722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/16x9-duration-90-frame-10.png",
                "sha256": "2113cc44e96f6cb35b0857157cce54f40daa4aa5d9649d84a5c8c95c02fc1a56",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/16x9-duration-90-frame-81.png",
                "sha256": "462b4df931f7b91e39a97eb48c44765605fbd43044fceed696439c00ab65680c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/16x9-duration-90-frame-79.png",
                "sha256": "fa261cee92f7f3f01b7b21d9722fdbf31451fb81c463fe2a38cb1b88ef6bb972",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/16x9-duration-90-frame-89.png",
                "sha256": "fa261cee92f7f3f01b7b21d9722fdbf31451fb81c463fe2a38cb1b88ef6bb972",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 27.317274305555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/16x9-duration-900-frame-12.png",
                "sha256": "45d96febea69159c480767922c2283030faebfb661adceb916570924de3e4b82",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/16x9-duration-900-frame-81.png",
                "sha256": "fa261cee92f7f3f01b7b21d9722fdbf31451fb81c463fe2a38cb1b88ef6bb972",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/16x9-duration-900-frame-792.png",
                "sha256": "462b4df931f7b91e39a97eb48c44765605fbd43044fceed696439c00ab65680c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/16x9-duration-900-frame-899.png",
                "sha256": "fa261cee92f7f3f01b7b21d9722fdbf31451fb81c463fe2a38cb1b88ef6bb972",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 35.770290798611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/9x16-duration-90-frame-10.png",
                "sha256": "8af7781b7a2dc91a74ec51b4e4b882b22117cd37fb88ac16c3fe0461dcc7dff0",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/9x16-duration-90-frame-81.png",
                "sha256": "d62899cf3ba0f21dce7e9487b476aa89858e0b0e22c7f90dfb9b42a14be47ff4",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/9x16-duration-90-frame-79.png",
                "sha256": "d62899cf3ba0f21dce7e9487b476aa89858e0b0e22c7f90dfb9b42a14be47ff4",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/9x16-duration-90-frame-89.png",
                "sha256": "bf1ae68706cb03134800799275b80575c91b23a5c455e71ab7ccf8367f3ca240",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 34.49164496527778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/9x16-duration-900-frame-12.png",
                "sha256": "e6b8a15e077aa37c66aad6af15e976c0dc1503644f2e511b0e08f48f9c75bc47",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/9x16-duration-900-frame-81.png",
                "sha256": "d62899cf3ba0f21dce7e9487b476aa89858e0b0e22c7f90dfb9b42a14be47ff4",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/9x16-duration-900-frame-792.png",
                "sha256": "bf1ae68706cb03134800799275b80575c91b23a5c455e71ab7ccf8367f3ca240",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/9x16-duration-900-frame-899.png",
                "sha256": "d62899cf3ba0f21dce7e9487b476aa89858e0b0e22c7f90dfb9b42a14be47ff4",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 32.623046875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/1x1-duration-90-frame-10.png",
                "sha256": "b453c06ddc31b6b951d2394db5d5154c320fa33949eb3ad629595c19646c31a0",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/1x1-duration-90-frame-81.png",
                "sha256": "ced2b4072f478b814b237fb89eee8600133e76e74fb4d7abe3109371ce1ef086",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/1x1-duration-90-frame-79.png",
                "sha256": "ced2b4072f478b814b237fb89eee8600133e76e74fb4d7abe3109371ce1ef086",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/1x1-duration-90-frame-89.png",
                "sha256": "9c54b2145eb7b8a4bc3ffd828f52b7bf893679c7580088eb4ae5b112ae874f0f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 31.10427517361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/1x1-duration-900-frame-12.png",
                "sha256": "1bed47ba58d1805c89bcc9fc8ce342dd992ba0692c637313c77a0f1d94739a70",
                "alphaMass": 587520
              },
              {
                "frame": 81,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/1x1-duration-900-frame-81.png",
                "sha256": "ced2b4072f478b814b237fb89eee8600133e76e74fb4d7abe3109371ce1ef086",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/1x1-duration-900-frame-792.png",
                "sha256": "ced2b4072f478b814b237fb89eee8600133e76e74fb4d7abe3109371ce1ef086",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-ticket/1x1-duration-900-frame-899.png",
                "sha256": "ced2b4072f478b814b237fb89eee8600133e76e74fb4d7abe3109371ce1ef086",
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
        "note": "A holo event ticket drops beside an early-bird headline and pass CTA; rebrands distinct."
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
      "bundleSha256": "3eeabf9cf868311f4510e3e91232f559dfb629c480af36dd46983f3636350195",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.095Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-ticket/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-ticket/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-ticket/16x9/detail.mp4",
      "bg": "#0b0920",
      "posterFrame": 81,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "6d0456d9afa58a3dfddd1078cb39b7a7e09468e395ee3b68045d84b31360f6ac",
        "loop": "5a173dfb94915d9e6dc206334ec85476cb82232e97ceb851c92e2f25d91b3977",
        "detail": "4cfc0cfac0e0a1efa5491ba85c0b02d13a676552b4dfff942cebe189b8dac56d"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-ticket/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-ticket/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-ticket/9x16/detail.mp4",
      "bg": "#302468",
      "posterFrame": 81,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "56f849972d1049625f36503c9a0a1343959b683d876d15ff229cdaba6d96f2ae",
        "loop": "7028585a1276d07f1e267a98352df7fa54a46ff8263a8d4f0d18074e30e38fbe",
        "detail": "fe43529afdcf5b648cfd4ef47d79adbf5dc7cb22671fa64863be871363b86f58"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-ticket/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-ticket/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-ticket/1x1/detail.mp4",
      "bg": "#0b0920",
      "posterFrame": 81,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "370f967919bf7041cd5e333e1e41a23721121e43fc1d0d0a383c007f674e0257",
        "loop": "001fd6e481579b4f99b58dd768af677d1128cea38d02bdb21832097ecf99df17",
        "detail": "f71e383e79b0af0c63a2449e098b3f242fa29cd3bead58b264a39b90a6592dc1"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/3eeabf9cf868311f4510e3e91232f559dfb629c480af36dd46983f3636350195/index.mjs",
    "sha256": "3eeabf9cf868311f4510e3e91232f559dfb629c480af36dd46983f3636350195",
    "bytes": 295989,
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
    "at": "2026-10-09T07:18:12.626Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
