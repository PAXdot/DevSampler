// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/motion-gallery",
  "job": "data",
  "language": "product-ui",
  "mechanic": [
    "ecg-sweep-zone-marker"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "data",
    "ecg-sweep-zone-marker",
    "fitness",
    "heart-rate",
    "dashboard"
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
      "in": 78,
      "out": 0
    },
    "markers": {
      "settled": 78
    },
    "beats": [
      0,
      20,
      39,
      59,
      78
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
      "maxChars": 14,
      "role": "label"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 18,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 30,
      "role": "body"
    },
    {
      "key": "zone",
      "type": "text",
      "maxChars": 20,
      "role": "label"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.heading",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "ecg-sweep-zone-marker",
      "prop": "transform",
      "from": "enter",
      "settledBy": 78,
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
    "ink": "#0E1A24",
    "accent": "#F0435A",
    "secondary": "#0E9F9A",
    "paper": "#F8FAFB",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "brand": "Movara",
    "title": "Heart rate",
    "sub": "Tempo run · Coach Ana Reyes",
    "zone": "Zone 4 · Threshold"
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
      "brand": "fonts.heading"
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
      "max": 14,
      "role": "label"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 18,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 30,
      "role": "body"
    },
    {
      "key": "zone",
      "label": "Zone",
      "type": "text",
      "max": 20,
      "role": "label"
    }
  ],
  "name": "Heart Rate Zones",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fit-heart-zone",
    "bundleSha256": "a888d42468d3e38d4f24cdcf725a50f80796352227180ddc50e6700af5bd6697",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:06:54.158Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/16x9-paper.png",
        "sha256": "073b5c10082fa0e26e35a8c7465bf29ae839384ecc33bf068acaf4a5c1488bf0"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/16x9-night.png",
        "sha256": "055e5aab2b862dbf013aaf145334d1faaa7494c8102bfe5dfa2fac05a41bb7cc"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/16x9-color.png",
        "sha256": "3b26171729a6af9e0a408d4db552667d79d247074c970e99e6a84a414e5c053d"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/9x16-paper.png",
        "sha256": "bd6a29966dd3c87864472a634a212e7b5ae1959218d56f6105e32585ef2760a8"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/9x16-night.png",
        "sha256": "8427616b708d3333848bd18463fc15d819bbbed2f22e7e2313f12260042500f2"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/9x16-color.png",
        "sha256": "5d1e3961e256fc74dc20d12a1bac38bd0d2e0e661492732f25fc5306a6bd7c1d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/1x1-paper.png",
        "sha256": "a4ae73734d66a7bebe8bb524cb6cf57592b4b4b13dda75ce54e61b8f9758295f"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/1x1-night.png",
        "sha256": "886bd3b4f1a7ab872b4dd3c7ea50ecaf4d77e345d9c21f7f62101766e34a7839"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/1x1-color.png",
        "sha256": "3cd5389475805df0b213a21ea829d7c625172dd3bfdb809ac5213366e602a665"
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
          "mg-fit-heart-zone--16x9",
          "mg-fit-heart-zone--9x16",
          "mg-fit-heart-zone--1x1"
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
            "paperNight": 143.12141927083334,
            "paperColor": 16.951768663194443,
            "region": {
              "left": 62,
              "top": 61,
              "width": 1796,
              "height": 991
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 142.26535373263889,
            "paperColor": 20.07158745659722,
            "region": {
              "left": 42,
              "top": 77,
              "width": 995,
              "height": 1651
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 143.44547526041666,
            "paperColor": 15.457411024305555,
            "region": {
              "left": 114,
              "top": 50,
              "width": 852,
              "height": 1014
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
            "occupancy": 1.2164560718834863,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2164560718834863,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2164560718834863,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1227591361261586,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1227591361261586,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1227591361261586,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0497151535511327,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0497151535511327,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0497151535511327,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.931640625,
        "frames": [
          11,
          78,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 7.9990234375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/16x9-duration-90-frame-10.png",
                "sha256": "d5aff5113d8de32b5122c658437a28d863ee2f12831db8f37e340aa9fcd3bea4",
                "alphaMass": 587520
              },
              {
                "frame": 78,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/16x9-duration-90-frame-78.png",
                "sha256": "c76b1b0ffffa1d288c4949da438194f22609cb3a7badd10401bd4dd6a5eea931",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/16x9-duration-90-frame-79.png",
                "sha256": "c76b1b0ffffa1d288c4949da438194f22609cb3a7badd10401bd4dd6a5eea931",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/16x9-duration-90-frame-89.png",
                "sha256": "c76b1b0ffffa1d288c4949da438194f22609cb3a7badd10401bd4dd6a5eea931",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.931640625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/16x9-duration-900-frame-11.png",
                "sha256": "888c934221ee095df26bd4fdb9b227a795e62899361558d61ce2a9d20047f25c",
                "alphaMass": 587520
              },
              {
                "frame": 78,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/16x9-duration-900-frame-78.png",
                "sha256": "c76b1b0ffffa1d288c4949da438194f22609cb3a7badd10401bd4dd6a5eea931",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/16x9-duration-900-frame-792.png",
                "sha256": "c76b1b0ffffa1d288c4949da438194f22609cb3a7badd10401bd4dd6a5eea931",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/16x9-duration-900-frame-899.png",
                "sha256": "c76b1b0ffffa1d288c4949da438194f22609cb3a7badd10401bd4dd6a5eea931",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 9.45529513888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/9x16-duration-90-frame-10.png",
                "sha256": "a7bf7c77f1d6e6082de8c8af23a0b761ffdc7bbb8d86d4378707f5929c7fc0ce",
                "alphaMass": 587520
              },
              {
                "frame": 78,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/9x16-duration-90-frame-78.png",
                "sha256": "d683b81d039adacc85a018fe0ca6cf550fffaf41e83ef3ca7e5471ff7cadce43",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/9x16-duration-90-frame-79.png",
                "sha256": "d683b81d039adacc85a018fe0ca6cf550fffaf41e83ef3ca7e5471ff7cadce43",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/9x16-duration-90-frame-89.png",
                "sha256": "d683b81d039adacc85a018fe0ca6cf550fffaf41e83ef3ca7e5471ff7cadce43",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 9.324869791666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/9x16-duration-900-frame-11.png",
                "sha256": "2b0e1682ae38277d8223fa06c0f3dde74ccbe82c791421634ac3ed5a271fdef6",
                "alphaMass": 587520
              },
              {
                "frame": 78,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/9x16-duration-900-frame-78.png",
                "sha256": "d683b81d039adacc85a018fe0ca6cf550fffaf41e83ef3ca7e5471ff7cadce43",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/9x16-duration-900-frame-792.png",
                "sha256": "d683b81d039adacc85a018fe0ca6cf550fffaf41e83ef3ca7e5471ff7cadce43",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/9x16-duration-900-frame-899.png",
                "sha256": "d683b81d039adacc85a018fe0ca6cf550fffaf41e83ef3ca7e5471ff7cadce43",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 6.824761284722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/1x1-duration-90-frame-10.png",
                "sha256": "d13e36b4df1231094cb47ede13834e5cab7bdc88ae731471eec70d073e5afb1d",
                "alphaMass": 587520
              },
              {
                "frame": 78,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/1x1-duration-90-frame-78.png",
                "sha256": "0a811f3fccd4f0fc2889eec35f2be28388477c1bce98c0c3e0fe4abbca5e2591",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/1x1-duration-90-frame-79.png",
                "sha256": "0a811f3fccd4f0fc2889eec35f2be28388477c1bce98c0c3e0fe4abbca5e2591",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/1x1-duration-90-frame-89.png",
                "sha256": "0a811f3fccd4f0fc2889eec35f2be28388477c1bce98c0c3e0fe4abbca5e2591",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 6.800347222222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/1x1-duration-900-frame-11.png",
                "sha256": "7b5374f8d4d08073f49fed4a22774b0ec52c50775c183531aa685badc342cbe5",
                "alphaMass": 587520
              },
              {
                "frame": 78,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/1x1-duration-900-frame-78.png",
                "sha256": "0a811f3fccd4f0fc2889eec35f2be28388477c1bce98c0c3e0fe4abbca5e2591",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/1x1-duration-900-frame-792.png",
                "sha256": "0a811f3fccd4f0fc2889eec35f2be28388477c1bce98c0c3e0fe4abbca5e2591",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-fit-heart-zone/1x1-duration-900-frame-899.png",
                "sha256": "0a811f3fccd4f0fc2889eec35f2be28388477c1bce98c0c3e0fe4abbca5e2591",
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
        "note": "Live ECG and zone bar climb to threshold beside a BPM card and trend; rebrands recolor charts."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 28,
        "compared": 28,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "a888d42468d3e38d4f24cdcf725a50f80796352227180ddc50e6700af5bd6697",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.085Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-heart-zone/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-heart-zone/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-heart-zone/16x9/detail.mp4",
      "bg": "#eef1f2",
      "posterFrame": 78,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9633ed6c3932283f9080b479d8f3e5f5029d039fd0c0af411ba2f919faa6b5ad",
        "loop": "1038fd301d2c944730409159a76e2b67f473db045ee2f1053b5353b5dca23508",
        "detail": "64c87d5b3846746f4d68251844539340fa6ed2367cd707f1de619776565d9684"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-heart-zone/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-heart-zone/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-heart-zone/9x16/detail.mp4",
      "bg": "#eef1f2",
      "posterFrame": 78,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8054ed0b03546f2fd7ae475ac54e4a05eefa957e4e487a4526b1211adb818812",
        "loop": "899be72f72ae57c321bbae9fb93ac51f5f9837109eb3a783e385ddc11cc83a23",
        "detail": "c2888c5e018e8ecd8fa718de410dfba7cd337180d3bd90d911ad71836be64e71"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-heart-zone/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-heart-zone/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-heart-zone/1x1/detail.mp4",
      "bg": "#eef1f2",
      "posterFrame": 78,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7d19869d87c7ee5688d3a1acefb7b79f1e6b4aeb279a29b17dc8a5133c7371e2",
        "loop": "69b75fcd7401b040d934c0b744f56b4f03897c46b5f2c544a304cbccf1d1b940",
        "detail": "7878303cb2b895bc5bb5bc32c922c3a228f5997d3ad2d9eb81377fe3ca4e1af3"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/a888d42468d3e38d4f24cdcf725a50f80796352227180ddc50e6700af5bd6697/index.mjs",
    "sha256": "a888d42468d3e38d4f24cdcf725a50f80796352227180ddc50e6700af5bd6697",
    "bytes": 175436,
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
    "at": "2026-10-09T07:11:48.339Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
