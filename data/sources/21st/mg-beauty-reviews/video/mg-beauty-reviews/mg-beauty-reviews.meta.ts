// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "testimonials/motion-gallery",
  "job": "testimonials",
  "language": "editorial",
  "mechanic": [
    "rating-roll-and-cards-drop"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "testimonials",
    "rating-roll-and-cards-drop",
    "beauty",
    "reviews",
    "rating",
    "social-proof"
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
      "key": "kicker",
      "type": "text",
      "maxChars": 22,
      "role": "kicker"
    },
    {
      "key": "score",
      "type": "text",
      "maxChars": 4,
      "role": "value"
    },
    {
      "key": "quote1",
      "type": "text",
      "maxChars": 36,
      "role": "body"
    },
    {
      "key": "quote2",
      "type": "text",
      "maxChars": 36,
      "role": "body"
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
      "target": "rating-roll-and-cards-drop",
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
    "ink": "#F7EEE6",
    "accent": "#E2B260",
    "secondary": "#E7B4A0",
    "paper": "#3E0F1A",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "what clients say",
    "score": "4.9",
    "quote1": "Best color I've had in years.",
    "quote2": "Skin still glowing a week later."
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
      "max": 22,
      "role": "kicker"
    },
    {
      "key": "score",
      "label": "Score",
      "type": "text",
      "max": 4,
      "role": "value"
    },
    {
      "key": "quote1",
      "label": "Quote 1",
      "type": "text",
      "max": 36,
      "role": "body"
    },
    {
      "key": "quote2",
      "label": "Quote 2",
      "type": "text",
      "max": 36,
      "role": "body"
    }
  ],
  "name": "Review Card Cascade",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-beauty-reviews",
    "bundleSha256": "ae9a4464f9f753eb4c405a1682568369d906b4663ddb36d175af631862fc548b",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:28:11.676Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/16x9-paper.png",
        "sha256": "059ddf804681b4d8abaf9c5a9c01f9b82c7fe8d0be75535ee85cc50fc72ee0e0"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/16x9-night.png",
        "sha256": "32ac55f5ee101ce8ada4008045f2edf9c8a3a5a6eaa2e7d4b01916a15e2dfa39"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/16x9-color.png",
        "sha256": "b5b93355c96db93664a9527c29cb94cecaa3c9f66d679e726d8d56a47e89c60e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/9x16-paper.png",
        "sha256": "17d502e91a0704c193afd8174f5a53c0127bbf5e0d200f1bfb0b8ba60354e32e"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/9x16-night.png",
        "sha256": "76d9a7554128176697a860e7ef38f47120a370ead637fab26838e5cc7de810b0"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/9x16-color.png",
        "sha256": "982efb722e911114a06065eaabab520d58d16ace6398e5ffe4163a44114d7576"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/1x1-paper.png",
        "sha256": "58aa18740a4747e0034ef68e230a25dd13fd650632f80392a8b8bab1f18dedad"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/1x1-night.png",
        "sha256": "42c547e0792c271cdff09a920a38d520ed9722bf2f21c2ed9ec027d7c0b7d07f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/1x1-color.png",
        "sha256": "d86a734a2e9dcc21c72f0f43133110cf30f5c1db8e256cb9676e3399057c6725"
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
          "mg-beauty-reviews--16x9",
          "mg-beauty-reviews--9x16",
          "mg-beauty-reviews--1x1"
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
            "paperNight": 21.46649848090278,
            "paperColor": 7.193820529513889,
            "region": {
              "left": 125,
              "top": 76,
              "width": 1753,
              "height": 879
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 41.65953233506944,
            "paperColor": 22.64691840277778,
            "region": {
              "left": 17,
              "top": 144,
              "width": 1042,
              "height": 1712
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 22.30986870659722,
            "paperColor": 7.570746527777778,
            "region": {
              "left": 24,
              "top": 68,
              "width": 1002,
              "height": 1012
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
            "occupancy": 1.0531427318226676,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0513404339359202,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0507396679736711,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1606388311497442,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2192364085551919,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.217354828698455,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2320892005636277,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2320892005636277,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2308717211164304,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 40.67567274305556,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 40.82866753472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/16x9-duration-90-frame-10.png",
                "sha256": "356aa48c2157d8519a211ac12fb82513b30992ebab5344565bcf390d6d29c1cb",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/16x9-duration-90-frame-89.png",
                "sha256": "47d944665e3c0001a7793b4ba38fbb2e0eed9369f1b2d1a75d54cf3ba784001b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/16x9-duration-90-frame-79.png",
                "sha256": "080c0bd7a7c3a068bc6bc560106478ff90f5363682e803a02eb5d791114b9b9b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 40.67567274305556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/16x9-duration-900-frame-13.png",
                "sha256": "95215805a7b3e8d47714fe4bd6dde62af404e015d9c732e4d872fb8aff69292d",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/16x9-duration-900-frame-90.png",
                "sha256": "080c0bd7a7c3a068bc6bc560106478ff90f5363682e803a02eb5d791114b9b9b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/16x9-duration-900-frame-792.png",
                "sha256": "080c0bd7a7c3a068bc6bc560106478ff90f5363682e803a02eb5d791114b9b9b",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/16x9-duration-900-frame-899.png",
                "sha256": "080c0bd7a7c3a068bc6bc560106478ff90f5363682e803a02eb5d791114b9b9b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 44.22254774305556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/9x16-duration-90-frame-10.png",
                "sha256": "8bf6b053d4fec78df4906ef7b57ca5236deb5bd13cd9637b78c4004ea01419f0",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/9x16-duration-90-frame-89.png",
                "sha256": "b26400ea8ac6092873d26b92b3997b0d1388eb45d3ae9af66bd5bd3f469aabf5",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/9x16-duration-90-frame-79.png",
                "sha256": "b26400ea8ac6092873d26b92b3997b0d1388eb45d3ae9af66bd5bd3f469aabf5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 44.017578125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/9x16-duration-900-frame-13.png",
                "sha256": "8856f479c3145b97a0cde80b94914e56a9b54dd4ee613dff566bd7c37d2bdd9c",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/9x16-duration-900-frame-90.png",
                "sha256": "a071f608e19992df8452a29f299f91fbdd50680d3258106a2a2a718e0ef652fd",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/9x16-duration-900-frame-792.png",
                "sha256": "a071f608e19992df8452a29f299f91fbdd50680d3258106a2a2a718e0ef652fd",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/9x16-duration-900-frame-899.png",
                "sha256": "b26400ea8ac6092873d26b92b3997b0d1388eb45d3ae9af66bd5bd3f469aabf5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 55.04546440972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/1x1-duration-90-frame-10.png",
                "sha256": "dad9466592cd21a4512e6051c9c44665de71a81ee09affd9f03cfadcf3dbfd2a",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/1x1-duration-90-frame-89.png",
                "sha256": "a8a2eac29e8d847d623d262bbada839d5dd3b4e72b309c9a4bcc2d9da9fb5e29",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/1x1-duration-90-frame-79.png",
                "sha256": "6dd6ca2cfff9f8edaad47ad5f1e7fba07ca76d24fa271b80d8c34b9a1580c469",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 54.87391493055556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/1x1-duration-900-frame-13.png",
                "sha256": "9055e08d125e11887a6ce84f949733352f3d01f886d11f8a4f49bacf80a2de6b",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/1x1-duration-900-frame-90.png",
                "sha256": "6697707200e0dd211f60d79c95b339ad076e346615f8dad88259cf358ea1652f",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/1x1-duration-900-frame-792.png",
                "sha256": "d47006a1259fdfc6dda27c2be3ccfacc8edbc2dcc264bd9b476b5061a817cb1c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s1/mg-beauty-reviews/1x1-duration-900-frame-899.png",
                "sha256": "66a3d03cb1956ed949d9174fb7c35bc2de0ac1f03effd96f33a5c8d5003f0710",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "testimonials",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Rating counter beside cascading client review cards; rebrands distinct."
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
      "bundleSha256": "ae9a4464f9f753eb4c405a1682568369d906b4663ddb36d175af631862fc548b",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.084Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-reviews/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-reviews/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-reviews/16x9/detail.mp4",
      "bg": "#461a24",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "1c2c933d136d6a77b863420f7a1e606ab38b3dbde3fe32b9b96df2cb60d814ca",
        "loop": "890c503d1c58c4f08df2ec7311d4b8caf595e02cc6f2923d1d4380d9a231ed5d",
        "detail": "5de945de151eb62fd647b70b2fb99fe2231bfddedbc48b065cb221e8608adcf0"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-reviews/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-reviews/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-reviews/9x16/detail.mp4",
      "bg": "#461a24",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "39f97bdf275ff428eb290567a1a3f5b0ecc48ab9d5cb92444bbd6a28e1065f95",
        "loop": "8fa75123fcc33739b0f9b81505986f52875d53487dcfe44a9b9b363b24ee11ba",
        "detail": "03f8b743aa70f65253b4e820b4b2a680135aa4c38b2054054f7a1d3855920c21"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-reviews/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-reviews/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-reviews/1x1/detail.mp4",
      "bg": "#461a24",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "37656e74e50ef71dc6ccde0b9fb5f17db352836abe402de7fd0ae44777b71739",
        "loop": "b3cc58fe18488c2601684c61ecc2a4e2d65fb85ff877aea10f45ace6e3edf2a6",
        "detail": "86b8853c064ada87df348fc43910f389c585c6a5b8fb18ebfd322e974160b232"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ae9a4464f9f753eb4c405a1682568369d906b4663ddb36d175af631862fc548b/index.mjs",
    "sha256": "ae9a4464f9f753eb4c405a1682568369d906b4663ddb36d175af631862fc548b",
    "bytes": 253002,
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
    "at": "2026-10-09T07:10:49.589Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
