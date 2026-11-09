// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "process/motion-gallery",
  "job": "process",
  "language": "neo-brutal",
  "mechanic": [
    "date-rows-wipe-in-sold-out-stamp"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "process",
    "date-rows-wipe-in-sold-out-stamp",
    "music",
    "tour",
    "dates",
    "poster"
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
      "key": "artist",
      "type": "text",
      "maxChars": 18,
      "role": "headline"
    },
    {
      "key": "tour",
      "type": "text",
      "maxChars": 26,
      "role": "label"
    },
    {
      "key": "season",
      "type": "text",
      "maxChars": 16,
      "role": "kicker"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 30,
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
      "target": "date-rows-wipe-in-sold-out-stamp",
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
    "ink": "#141414",
    "accent": "#D8341C",
    "secondary": "#FFFFFF",
    "paper": "#F3C331",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "artist": "Juno Vale",
    "tour": "Glass Weather tour",
    "season": "autumn 2026",
    "cta": "Tickets at tidewell.fm"
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
      "key": "artist",
      "label": "Artist",
      "type": "text",
      "max": 18,
      "role": "headline"
    },
    {
      "key": "tour",
      "label": "Tour",
      "type": "text",
      "max": 26,
      "role": "label"
    },
    {
      "key": "season",
      "label": "Season",
      "type": "text",
      "max": 16,
      "role": "kicker"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 30,
      "role": "cta"
    }
  ],
  "name": "Tour Dates Poster",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-audio-tour-dates",
    "bundleSha256": "4bc09df6f17b2943ed32b191bfab98a1d67c5bb7ade47007f34f9a6b4bf1644e",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:06:19.971Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/16x9-paper.png",
        "sha256": "f357a92c948e83e7d13eb2e6928618f98d3367dbbb99d6ce1b25991eace32bac"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/16x9-night.png",
        "sha256": "f12ac4b29003aadc4b3729f2da402cd5b1a9a48aec898302dd0a04b4361ff9d1"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/16x9-color.png",
        "sha256": "cc5285d699ac961b8f1eb5821ef690bc287e7ad67cfd9605fd00ae57201c876c"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/9x16-paper.png",
        "sha256": "5b5af96e98ce1d4ebd4190eddab77cd34a3525181a2aaeb3da7e3886f947730a"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/9x16-night.png",
        "sha256": "d36cff120134bb536471eafeed364d59d1bd4ecb9ed34915817501d4e6a2b1c7"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/9x16-color.png",
        "sha256": "cafa09d0ce8bc264273575bd3f6ad94b6d2c7d7ba4872718aec8c73956771c51"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/1x1-paper.png",
        "sha256": "40dd02fde8c96d84a4acd2a55ea941c40c4f6f1f401f77493541e3555fd3c8a9"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/1x1-night.png",
        "sha256": "3057939f6c0bad146d4eaa532860b9597319de7d3cd910afbc06efde95659c67"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/1x1-color.png",
        "sha256": "9f44cb539b0e4b161a2806740806b52a8512ec2ecfdd8e2ee597dea2fa43c281"
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
          "mg-audio-tour-dates--16x9",
          "mg-audio-tour-dates--9x16",
          "mg-audio-tour-dates--1x1"
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
            "paperNight": 70.32069227430556,
            "paperColor": 20.30083550347222,
            "region": {
              "left": 94,
              "top": 108,
              "width": 1714,
              "height": 895
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 96.11412217881944,
            "paperColor": 27.92041015625,
            "region": {
              "left": 63,
              "top": 115,
              "width": 944,
              "height": 1690
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 93.55802408854167,
            "paperColor": 25.788682725694443,
            "region": {
              "left": 64,
              "top": 76,
              "width": 944,
              "height": 944
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
            "occupancy": 1.0460094049193753,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0460094049193753,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0472847510917949,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.084597853416058,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.085752909702976,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0903731348506482,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0758982519619646,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.079333196470175,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0804802030551592,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.83713107638889,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 10.124891493055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/16x9-duration-90-frame-10.png",
                "sha256": "11c67f481d0f27028f8c6fe7a7942018465455fe25783c491e06ddea0da1d3dd",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/16x9-duration-90-frame-89.png",
                "sha256": "0dd68d0f08949c3158a8694e71478997f549f5404d4c7f123423e0cddeea700b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/16x9-duration-90-frame-79.png",
                "sha256": "9c4d490e3cd0ff9a2b31ff07e2bf35a0086664df583893f43d87f5ba6c5e2748",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 9.83713107638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/16x9-duration-900-frame-14.png",
                "sha256": "89996efffa354d851447f84026464407504326b49c34b5d45abadeb04f9dd2aa",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/16x9-duration-900-frame-96.png",
                "sha256": "c846dd57197a1a0914487e74fadafc493249c6bbc046be9828417ce215902e43",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/16x9-duration-900-frame-792.png",
                "sha256": "9c4d490e3cd0ff9a2b31ff07e2bf35a0086664df583893f43d87f5ba6c5e2748",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/16x9-duration-900-frame-899.png",
                "sha256": "7a963c4a2b02c766703844fa98b8f3599342a106c7657a2c4d6538c4ce2e3415",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 13.636393229166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/9x16-duration-90-frame-10.png",
                "sha256": "583ec886ea4031bc6a8465556863e916487cb52e278d141cc42ae821fb5cb372",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/9x16-duration-90-frame-89.png",
                "sha256": "eaf175a3cece68633e383a173294451fd9139cffe8594fc59593b3059fe59351",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/9x16-duration-90-frame-79.png",
                "sha256": "c61f5f96b94b12646590c12292f2bb28671be38c938c61029a9ca0f71290c454",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 13.38259548611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/9x16-duration-900-frame-14.png",
                "sha256": "cd1bf6743dc919d1c3a66a108be611c5e53a37e77f0ed3123ae5b8bd036e8bb5",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/9x16-duration-900-frame-96.png",
                "sha256": "871a8817f9cdb728a4c8ab2b92c91f2c4f2765f5c2620f978c211fd8eae08bf8",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/9x16-duration-900-frame-792.png",
                "sha256": "eaf175a3cece68633e383a173294451fd9139cffe8594fc59593b3059fe59351",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/9x16-duration-900-frame-899.png",
                "sha256": "0931f53a02fb61af47359a0e6a132c6aa66c85e8cd31e4c37f6386eb37e5e795",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 13.405381944444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/1x1-duration-90-frame-10.png",
                "sha256": "c608d1d4296e3e3717438d0f2f275ea33c3bae1be65c634e55278a0de2607eb8",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/1x1-duration-90-frame-89.png",
                "sha256": "dab9165b08f38e54e1593485ee03cc0df85e863b286176318a30634f97281e74",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/1x1-duration-90-frame-79.png",
                "sha256": "dab9165b08f38e54e1593485ee03cc0df85e863b286176318a30634f97281e74",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 13.152994791666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/1x1-duration-900-frame-14.png",
                "sha256": "99420732312ecdfdf37ff1a655a5e9c5dfbfaf619af878f682c34b8ea06716e3",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/1x1-duration-900-frame-96.png",
                "sha256": "dab9165b08f38e54e1593485ee03cc0df85e863b286176318a30634f97281e74",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/1x1-duration-900-frame-792.png",
                "sha256": "dab9165b08f38e54e1593485ee03cc0df85e863b286176318a30634f97281e74",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-tour-dates/1x1-duration-900-frame-899.png",
                "sha256": "dab9165b08f38e54e1593485ee03cc0df85e863b286176318a30634f97281e74",
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
        "note": "Big artist name beside a tour-dates list with ticket pills; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 21,
        "compared": 21,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "4bc09df6f17b2943ed32b191bfab98a1d67c5bb7ade47007f34f9a6b4bf1644e",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.082Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-tour-dates/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-tour-dates/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-tour-dates/16x9/detail.mp4",
      "bg": "#e5b82e",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "91d0475270264ac9f349c1a4b26c355783d235475e69f9ccfc96b95aae42d1dc",
        "loop": "9abe7d6228e2c2d31be46ba611518a5acf13bced60fa9d70c9b687309403d4a4",
        "detail": "e1001e4eea17479e52a41d63d4c47923857d786b7460837ae0d3940ce611ad52"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-tour-dates/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-tour-dates/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-tour-dates/9x16/detail.mp4",
      "bg": "#e5b82e",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9712f015b46e8cdd2b4ca474cbcfc16bbe88d058a845c955b40b587870ca1824",
        "loop": "f44bbbbbef5cff4585e143ebfe25f6e1e902706f3c65cc9fc94f6911e4b33827",
        "detail": "270470e0915bf8915fbffb8d5bc68c6b264e03e472c841b22162cf3316651a4f"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-tour-dates/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-tour-dates/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-tour-dates/1x1/detail.mp4",
      "bg": "#e5b82e",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9c143034919b5fea45bf040219089cf895a3590293e907e10c48b4b42904c17d",
        "loop": "04f6d764ed477433e5974889b050086db1d75462477ad5ac7a2ccc151993f8e0",
        "detail": "2b7c6696a2d56cfacef1b1d3cda1e49f53f1f3d37460606a3ebb58bc31f8b8e5"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/4bc09df6f17b2943ed32b191bfab98a1d67c5bb7ade47007f34f9a6b4bf1644e/index.mjs",
    "sha256": "4bc09df6f17b2943ed32b191bfab98a1d67c5bb7ade47007f34f9a6b4bf1644e",
    "bytes": 245249,
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
    "at": "2026-10-09T07:09:50.280Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
