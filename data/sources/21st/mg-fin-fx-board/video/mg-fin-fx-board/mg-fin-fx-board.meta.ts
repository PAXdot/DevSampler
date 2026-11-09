// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/motion-gallery",
  "job": "data",
  "language": "editorial",
  "mechanic": [
    "split-flap-rates-settle"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "data",
    "split-flap-rates-settle",
    "fintech",
    "currency",
    "rates",
    "split-flap"
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
      "key": "kicker",
      "type": "text",
      "maxChars": 20,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 34,
      "role": "headline"
    },
    {
      "key": "offer",
      "type": "text",
      "maxChars": 8,
      "role": "value"
    },
    {
      "key": "terms",
      "type": "text",
      "maxChars": 24,
      "role": "caption"
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
      "target": "split-flap-rates-settle",
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
    "ink": "#F5E9D0",
    "accent": "#F2C14E",
    "secondary": "#6FD39A",
    "paper": "#17130F",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "halcy send",
    "headline": "Send abroad at the real rate.",
    "offer": "0% fee",
    "terms": "on your first $5,000"
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
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 20,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 34,
      "role": "headline"
    },
    {
      "key": "offer",
      "label": "Offer",
      "type": "text",
      "max": 8,
      "role": "value"
    },
    {
      "key": "terms",
      "label": "Terms",
      "type": "text",
      "max": 24,
      "role": "caption"
    }
  ],
  "name": "Split Flap Rates",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fin-fx-board",
    "bundleSha256": "f9a8eee510756ee3e999a28d595b0d88521d5b59df4cf7e64cbdaf38d4b3c974",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:17:51.891Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/16x9-paper.png",
        "sha256": "acb1b6064b2252151dc56bd1d7c636fd6c7df996796ecb552071bf4f1caaae20"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/16x9-night.png",
        "sha256": "f0d6f462ce2129515376f26bfd4b3ad493fa0b577f2fc96d7176e7e95e595bfa"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/16x9-color.png",
        "sha256": "8a8017f34db304de4abd1082e068ec0acda35fd2ed2a95a507a82d2adc31e655"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/9x16-paper.png",
        "sha256": "28a0a272be0ef27e15b27d7e360c79d7e88568453b10b58a0a6d6a4380e846d1"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/9x16-night.png",
        "sha256": "3667232a35b3853c663f419404bb3b74b87e04d0bfe30c58f70690af3e51033f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/9x16-color.png",
        "sha256": "dcd108a21eeb34fbae7aff073c1d827b1492411fa0873f83351314fc4830c687"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/1x1-paper.png",
        "sha256": "9b43dc2bd6a508eac0227260872b727bb7417365cac5fddf5f0b943ed853e773"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/1x1-night.png",
        "sha256": "c18edf62f80cb849064e315597021eb986dc71c99c6bc0a32f8ee20c6cbe240c"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/1x1-color.png",
        "sha256": "acfad60ee5450f815e6f09e2900c7d7f5feedcf1f0d09f022fd19a2fe79b7d2a"
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
          "mg-fin-fx-board--16x9",
          "mg-fin-fx-board--9x16",
          "mg-fin-fx-board--1x1"
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
            "paperNight": 50.40345594618056,
            "paperColor": 10.295518663194445,
            "region": {
              "left": 38,
              "top": 88,
              "width": 1844,
              "height": 947
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 51.86919487847222,
            "paperColor": 23.78952365451389,
            "region": {
              "left": 57,
              "top": 144,
              "width": 936,
              "height": 1660
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 43.718587239583336,
            "paperColor": 13.401936848958334,
            "region": {
              "left": 16,
              "top": 65,
              "width": 1048,
              "height": 951
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
            "occupancy": 1.1935135100851042,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1935135100851042,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1935135100851042,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0619409800957422,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0619409800957422,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0619409800957422,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.210976503084087,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.210976503084087,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.210976503084087,
            "bad": [],
            "measured": 9
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.441731770833333,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 4.424587673611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/16x9-duration-90-frame-10.png",
                "sha256": "a21c0f3d965dd4b675cc88a398d9ac29d5d1e9352ae097ed99e9f5ce23e7bd11",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/16x9-duration-90-frame-89.png",
                "sha256": "58aecfa1ce6ff9e81c0a9fc8f6f593087ec7bfd353f193f30c38abe3df353bde",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/16x9-duration-90-frame-79.png",
                "sha256": "58aecfa1ce6ff9e81c0a9fc8f6f593087ec7bfd353f193f30c38abe3df353bde",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 4.441731770833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/16x9-duration-900-frame-14.png",
                "sha256": "50938094a007d7a5a6810e0161cdee834fc9d123f3521b1a0e99df14ddbb507b",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/16x9-duration-900-frame-96.png",
                "sha256": "58aecfa1ce6ff9e81c0a9fc8f6f593087ec7bfd353f193f30c38abe3df353bde",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/16x9-duration-900-frame-792.png",
                "sha256": "58aecfa1ce6ff9e81c0a9fc8f6f593087ec7bfd353f193f30c38abe3df353bde",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/16x9-duration-900-frame-899.png",
                "sha256": "58aecfa1ce6ff9e81c0a9fc8f6f593087ec7bfd353f193f30c38abe3df353bde",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 11.687174479166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/9x16-duration-90-frame-10.png",
                "sha256": "5ba48771e8965c2fa400cc8359f1fdaf5cf757776234301fe8f311d7804c7bbe",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/9x16-duration-90-frame-89.png",
                "sha256": "534fd6d737ac95626086da80bc7ae6feadfdf3c5996cd5570d9f090ecd1c90a7",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/9x16-duration-90-frame-79.png",
                "sha256": "bf6c712a71064ef834487140bcb82fa74520da5bb608561795a1c9e6795ba670",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 11.689127604166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/9x16-duration-900-frame-14.png",
                "sha256": "df45ade7f72adac0d1dbffb415a10ed86c484a0197f45056454f45fb3b7ef7e6",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/9x16-duration-900-frame-96.png",
                "sha256": "534fd6d737ac95626086da80bc7ae6feadfdf3c5996cd5570d9f090ecd1c90a7",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/9x16-duration-900-frame-792.png",
                "sha256": "bf6c712a71064ef834487140bcb82fa74520da5bb608561795a1c9e6795ba670",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/9x16-duration-900-frame-899.png",
                "sha256": "bf6c712a71064ef834487140bcb82fa74520da5bb608561795a1c9e6795ba670",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 6.264973958333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/1x1-duration-90-frame-10.png",
                "sha256": "7568146177654fd958ce90cfdf200f456f0771889e354e72527c9bfa57a01833",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/1x1-duration-90-frame-89.png",
                "sha256": "322488409348b6c81ff2c8145434fdb216fb8bb1837301752d1f8092a0c224b7",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/1x1-duration-90-frame-79.png",
                "sha256": "322488409348b6c81ff2c8145434fdb216fb8bb1837301752d1f8092a0c224b7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 6.276258680555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/1x1-duration-900-frame-14.png",
                "sha256": "56809d93337c34f7dfede8241c4d423a6764252c3199b22d1ecf66ca4d421bae",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/1x1-duration-900-frame-96.png",
                "sha256": "322488409348b6c81ff2c8145434fdb216fb8bb1837301752d1f8092a0c224b7",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/1x1-duration-900-frame-792.png",
                "sha256": "322488409348b6c81ff2c8145434fdb216fb8bb1837301752d1f8092a0c224b7",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-fin-fx-board/1x1-duration-900-frame-899.png",
                "sha256": "322488409348b6c81ff2c8145434fdb216fb8bb1837301752d1f8092a0c224b7",
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
        "note": "Split-flap currency board flips to live rates under a fee headline; rebrands distinct."
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
      "bundleSha256": "f9a8eee510756ee3e999a28d595b0d88521d5b59df4cf7e64cbdaf38d4b3c974",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.076Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-fx-board/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-fx-board/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-fx-board/16x9/detail.mp4",
      "bg": "#1b1713",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e22f005a9d25e0e2b25032d791f16aa94575eb7550e0c04a23f6e7c3582c63c8",
        "loop": "6463653002f1e494ff8ecee5a49cbb73a473b783a3369ce9dab9d102f1cb14a5",
        "detail": "09353ba06fea3b40e9ed02b60c699b614fbbea06edc0b0030b86a95b298785f4"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-fx-board/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-fx-board/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-fx-board/9x16/detail.mp4",
      "bg": "#1b1713",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4775487ec7caa01ec030418058b05180179fa63e9a531c4428483f3abfc027d9",
        "loop": "2d115f9d4626c7a44d96fe958c8e3305b1bfd522c6b6c7b26cb16b36e1143b32",
        "detail": "d6f998cec353505544a98c688ceb7b0495a22f5bb16dd7344cc8b32d695c2831"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-fx-board/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-fx-board/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-fx-board/1x1/detail.mp4",
      "bg": "#1b1713",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3010711b7bddb124f961ee2dacbf56dc9e9d063bf0f039108b5b5d66033e1de9",
        "loop": "11ce8deea1ad8fa38f84770cc006ba92d3ae98ad6d749ec79f5659e8735efd59",
        "detail": "b3ddfc8b573a58108b989324d8b0a93daf9410f4b75fde04eb8bdc7b72ab1a18"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/f9a8eee510756ee3e999a28d595b0d88521d5b59df4cf7e64cbdaf38d4b3c974/index.mjs",
    "sha256": "f9a8eee510756ee3e999a28d595b0d88521d5b59df4cf7e64cbdaf38d4b3c974",
    "bytes": 271650,
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
    "at": "2026-10-09T07:06:49.680Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
