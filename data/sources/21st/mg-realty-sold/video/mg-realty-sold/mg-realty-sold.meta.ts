// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "cta/motion-gallery",
  "job": "cta",
  "language": "editorial",
  "mechanic": [
    "rubber-stamp-slam"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "cta",
    "rubber-stamp-slam",
    "real-estate",
    "sold",
    "announcement"
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
      "key": "title",
      "type": "text",
      "maxChars": 16,
      "role": "headline"
    },
    {
      "key": "stamp",
      "type": "text",
      "maxChars": 6,
      "role": "label"
    },
    {
      "key": "addr",
      "type": "text",
      "maxChars": 32,
      "role": "body"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 22,
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
      "target": "rubber-stamp-slam",
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
    "ink": "#1C1A17",
    "accent": "#C33A2F",
    "secondary": "#2F3B33",
    "paper": "#F4EEE3",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "title": "Just sold.",
    "stamp": "SOLD",
    "addr": "14 Larkspur Lane, Old Town",
    "cta": "Free valuation"
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
      "max": 16,
      "role": "headline"
    },
    {
      "key": "stamp",
      "label": "Stamp",
      "type": "text",
      "max": 6,
      "role": "label"
    },
    {
      "key": "addr",
      "label": "Addr",
      "type": "text",
      "max": 32,
      "role": "body"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 22,
      "role": "cta"
    }
  ],
  "name": "Just Sold Stamp",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-realty-sold",
    "bundleSha256": "852841e5bae007f2794b11dddfbbcff57093f5f9ae979c9f4d570da593d598c2",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:22:29.993Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/16x9-paper.png",
        "sha256": "d59d5334d283ff0be593947d56e629e43a8eb5a44eace99eac23db1ebb0a6bff"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/16x9-night.png",
        "sha256": "cc921cc66a05278e40ca3a81e780f6d45c26f2ea71ca402524b3b0f7a9ab4d18"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/16x9-color.png",
        "sha256": "1fdb5a2c1ffa394e7f9310411e77d788c5c2fcaf829bbeed054deb125152fbb3"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/9x16-paper.png",
        "sha256": "f12d53aaacad701f132d0bc5644781792285915c3b1436abe059e4d207bd0244"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/9x16-night.png",
        "sha256": "6faf0fa8839c596a3ace0be4fafcd660d8aba9fb408d12e8d49eb33e8d30ff2a"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/9x16-color.png",
        "sha256": "4c852f7aa61fdaaf266d25c1e7b871307710e580a6ec0a63eb5623ecc73a416a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/1x1-paper.png",
        "sha256": "af5b30b5dc4bac9e5af7f34da5beb0f8ec0db3254162f0648214dbccd25fe8d7"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/1x1-night.png",
        "sha256": "7c1f88d076ea8166c31168332edd1a0b9cb692b4a080132658495896df0f8a9a"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/1x1-color.png",
        "sha256": "df5978c3029da3d39404f9d518b6984a42d38428f7561b9531d357ab00518fa8"
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
          "mg-realty-sold--16x9",
          "mg-realty-sold--9x16",
          "mg-realty-sold--1x1"
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
            "paperNight": 31.659586588541668,
            "paperColor": 10.726264105902779,
            "region": {
              "left": 45,
              "top": 101,
              "width": 1779,
              "height": 921
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 52.358669704861114,
            "paperColor": 21.79052734375,
            "region": {
              "left": 44,
              "top": 104,
              "width": 995,
              "height": 1720
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 35.142116970486114,
            "paperColor": 13.494981553819445,
            "region": {
              "left": 36,
              "top": 58,
              "width": 1010,
              "height": 968
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
            "occupancy": 1.119829804028093,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.119829804028093,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.119829804028093,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1696824434506314,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1696824434506314,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1696824434506314,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.187929447041734,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.187929447041734,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.187929447041734,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.91384548611111,
        "frames": [
          13,
          93,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 8.938368055555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/16x9-duration-90-frame-10.png",
                "sha256": "1ff4359f9b914a89df3d952a8af64a683c218b7ad27f8627330a8c18b0e42c11",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/16x9-duration-90-frame-89.png",
                "sha256": "4f80f73f86f940d237806f47ec9d62eec94982da0f0f0807481a81aa2bbac6b6",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/16x9-duration-90-frame-79.png",
                "sha256": "2a6934041ebca882a0f4b00471ced9a9b5805723ee114bd9f6eab90e18b5d324",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 8.91384548611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/16x9-duration-900-frame-13.png",
                "sha256": "a9821f84e8c75af7a1a851fb8b76b735a2a2aea0f427e466a5a26bab5f99c082",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/16x9-duration-900-frame-93.png",
                "sha256": "4f80f73f86f940d237806f47ec9d62eec94982da0f0f0807481a81aa2bbac6b6",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/16x9-duration-900-frame-792.png",
                "sha256": "4f80f73f86f940d237806f47ec9d62eec94982da0f0f0807481a81aa2bbac6b6",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/16x9-duration-900-frame-899.png",
                "sha256": "4f80f73f86f940d237806f47ec9d62eec94982da0f0f0807481a81aa2bbac6b6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 17.51833767361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/9x16-duration-90-frame-10.png",
                "sha256": "6eb0b6298a230805953486809dbb853fbf34f6d7ade3b468cfa8ee8e1c9e82c2",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/9x16-duration-90-frame-89.png",
                "sha256": "6ceeb527872c378e94ffc958680d47d0197b3d23abf8caa6c090ebd5b57a87b4",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/9x16-duration-90-frame-79.png",
                "sha256": "f6ec8a19ab9a4db44dc1bed5f063a99d1a26fcd81fe6a99c8eaed9d8d09c4a51",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 17.499674479166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/9x16-duration-900-frame-13.png",
                "sha256": "33504b5b99694907cb989dd62a79e8522b2ae124eb1524a92163ba3a516942bf",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/9x16-duration-900-frame-93.png",
                "sha256": "6ceeb527872c378e94ffc958680d47d0197b3d23abf8caa6c090ebd5b57a87b4",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/9x16-duration-900-frame-792.png",
                "sha256": "06142b59ddf932d3d88ad2f4005ec016c2d023d503648215d7a8762c1aef64d3",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/9x16-duration-900-frame-899.png",
                "sha256": "f6ec8a19ab9a4db44dc1bed5f063a99d1a26fcd81fe6a99c8eaed9d8d09c4a51",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 13.072916666666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/1x1-duration-90-frame-10.png",
                "sha256": "c377c322816aaa37fe34cce01ae1a5d19aa554050705729ec36b1477f32fb527",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/1x1-duration-90-frame-89.png",
                "sha256": "7912cfb26ad17616f53ab07e8007001b071671e285f73b0b06dfdfd390c12439",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/1x1-duration-90-frame-79.png",
                "sha256": "7912cfb26ad17616f53ab07e8007001b071671e285f73b0b06dfdfd390c12439",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 13.05197482638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/1x1-duration-900-frame-13.png",
                "sha256": "6fb1963201e727ccb83190d4b10a35f52413b636ae9d3bc35c9186267aa06d8e",
                "alphaMass": 587520
              },
              {
                "frame": 93,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/1x1-duration-900-frame-93.png",
                "sha256": "7912cfb26ad17616f53ab07e8007001b071671e285f73b0b06dfdfd390c12439",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/1x1-duration-900-frame-792.png",
                "sha256": "7912cfb26ad17616f53ab07e8007001b071671e285f73b0b06dfdfd390c12439",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-sold/1x1-duration-900-frame-899.png",
                "sha256": "485074854c8b7015a51d92f05af61e05f68990fcb7b306954a9ac8e8b114181a",
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
        "note": "A SOLD stamp lands on a house photo beside listing stats and a valuation CTA; rebrands distinct."
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
      "bundleSha256": "852841e5bae007f2794b11dddfbbcff57093f5f9ae979c9f4d570da593d598c2",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.080Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-sold/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-sold/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-sold/16x9/detail.mp4",
      "bg": "#efe9de",
      "posterFrame": 93,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d909e1b6d482885d156e8f1a806a13e7e2bf640559671a3eb313a26340ce9020",
        "loop": "5fdb196456c9d07d184ea15ec2dbb03c2b8335aa4b6133d31f88d8a4a59bbce4",
        "detail": "df2646968214d73b3b2be8bd85d8d9e4835ba6c8c8ffb88872756b9490bc2290"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-sold/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-sold/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-sold/9x16/detail.mp4",
      "bg": "#efe9de",
      "posterFrame": 93,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a97c95fd7f5ffda197d2959f88f9d0deb18443ae497357d13722b5e459ff65e4",
        "loop": "73dc08630e4d3d6483c5fd2ab0c983bbb27378b2c28a24786b016af2633cbb09",
        "detail": "46c9507b8d55059f0900b6335eecc13607a926fa3f475011131105ca9429faf5"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-sold/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-sold/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-sold/1x1/detail.mp4",
      "bg": "#efe9de",
      "posterFrame": 93,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "37ac233e0fde48a4a696b8041d9d9e58492f42753824ea8714ddb7af59e44e73",
        "loop": "cfaae3d1db83b97cb1f4b44b885a1469702a31654dc86a0cf578ff24a5435e18",
        "detail": "92781e4faf8d9a0594475f8d4a06a32f69bfc6e25546e6d00fd7742a0f34cad5"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/852841e5bae007f2794b11dddfbbcff57093f5f9ae979c9f4d570da593d598c2/index.mjs",
    "sha256": "852841e5bae007f2794b11dddfbbcff57093f5f9ae979c9f4d570da593d598c2",
    "bytes": 174630,
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
    "at": "2026-10-09T07:08:34.640Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
