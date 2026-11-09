// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "cta/motion-gallery",
  "job": "cta",
  "language": "kinetic-poster",
  "mechanic": [
    "rings-close-check-burst"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "cta",
    "rings-close-check-burst",
    "fitness",
    "offer",
    "free-trial"
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
      "maxChars": 24,
      "role": "kicker"
    },
    {
      "key": "lead",
      "type": "text",
      "maxChars": 30,
      "role": "caption"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 30,
      "role": "headline"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 24,
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
      "target": "rings-close-check-burst",
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
    "ink": "#FFFFFF",
    "accent": "#C81D6B",
    "secondary": "#FFE07A",
    "paper": "#FF5A6E",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "MOVARA · NEW MEMBERS",
    "lead": "Close your rings with us.",
    "headline": "Your first class is free.",
    "cta": "Book your free class"
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
      "max": 24,
      "role": "kicker"
    },
    {
      "key": "lead",
      "label": "Lead",
      "type": "text",
      "max": 30,
      "role": "caption"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 30,
      "role": "headline"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 24,
      "role": "cta"
    }
  ],
  "name": "Activity Rings Offer",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fit-rings-offer",
    "bundleSha256": "3737c452b53ee3012f34cea3854508d79f4df4f2f35711941da8aa47cdc06499",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:32:24.062Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/16x9-paper.png",
        "sha256": "3c3f3eb7465f8e164d61de4529f74890d114c0a8560fd001efe35aac9b530f95"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/16x9-night.png",
        "sha256": "e381d92e3c7ab5e176c59e6592557b93727236f0ba584b25d939015957c80548"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/16x9-color.png",
        "sha256": "013cce329b15ce25eb05f8dad1adbe842aafc4163da9af72618395077a4291f3"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/9x16-paper.png",
        "sha256": "77c4b6fd1033094a7d289f78a0ed2d79e614500db7fad951e4a5728477c0847b"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/9x16-night.png",
        "sha256": "2a234b0d4ff24d587cb49951b41697f8dfa44f21bb67726e9864f9f79946b3d5"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/9x16-color.png",
        "sha256": "21326a2a5104eaa44f31e168e79a1785a4eb8e1ba548a5cb82d8e6da3b1f5e27"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/1x1-paper.png",
        "sha256": "9d28f447707b74b0d9e7b4f6de9f92ea8ee3fcf7c6ae6a9857aa9b34bd10a313"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/1x1-night.png",
        "sha256": "f133a9a7c3e06681d7a5634d19c8aea88a63524bd1b12c7cd0311a0c2316a5bd"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/1x1-color.png",
        "sha256": "a00824c4b035048c0cca7b25783631fd056f399d9c00d0bc54caf941015ac9b0"
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
          "mg-fit-rings-offer--16x9",
          "mg-fit-rings-offer--9x16",
          "mg-fit-rings-offer--1x1"
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
            "paperNight": 73.63614908854167,
            "paperColor": 34.421142578125,
            "region": {
              "left": 21,
              "top": 46,
              "width": 1722,
              "height": 990
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 99.076416015625,
            "paperColor": 33.61455620659722,
            "region": {
              "left": 52,
              "top": 111,
              "width": 976,
              "height": 1716
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 77.35942925347223,
            "paperColor": 29.15117730034722,
            "region": {
              "left": 6,
              "top": 157,
              "width": 1014,
              "height": 666
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
            "occupancy": 1.1563617055618547,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1651579034391537,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1225301752645505,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1433444262478656,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1433444262478656,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.142677364155539,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8156966490299825,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8197427633604883,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8205519862265895,
            "bad": [],
            "measured": 8
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 10.61349826388889,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 10.61740451388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/16x9-duration-90-frame-10.png",
                "sha256": "f31f0146202c9ac8bc5cb1613459fa09d425187ee3381ed6791fe43e3624fbf2",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/16x9-duration-90-frame-89.png",
                "sha256": "8c064404272e85ea399bf71e499c7b09e8bab174205f5714471a1f72556ae967",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/16x9-duration-90-frame-79.png",
                "sha256": "8c064404272e85ea399bf71e499c7b09e8bab174205f5714471a1f72556ae967",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 10.61349826388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/16x9-duration-900-frame-13.png",
                "sha256": "04a75aed8ff93632e54e7bfaed51e83be6def0cf81fc6240d260b3f2aa0f134f",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/16x9-duration-900-frame-90.png",
                "sha256": "8c064404272e85ea399bf71e499c7b09e8bab174205f5714471a1f72556ae967",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/16x9-duration-900-frame-792.png",
                "sha256": "8c064404272e85ea399bf71e499c7b09e8bab174205f5714471a1f72556ae967",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/16x9-duration-900-frame-899.png",
                "sha256": "8c064404272e85ea399bf71e499c7b09e8bab174205f5714471a1f72556ae967",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 15.775499131944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/9x16-duration-90-frame-10.png",
                "sha256": "714ab9da6d8cb8df14c9c3b9de81cdd02995e454592b48976b791a6bec5154c3",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/9x16-duration-90-frame-89.png",
                "sha256": "7d428d2f7dbf4b565fd0b78356d7c9579c981f77288f859df723433502f9e675",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/9x16-duration-90-frame-79.png",
                "sha256": "7d428d2f7dbf4b565fd0b78356d7c9579c981f77288f859df723433502f9e675",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 15.76388888888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/9x16-duration-900-frame-13.png",
                "sha256": "d1d2f7be1087077fba7b973b7499e585ee2c87fd04a46940b064cc8026ec1b6b",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/9x16-duration-900-frame-90.png",
                "sha256": "7d428d2f7dbf4b565fd0b78356d7c9579c981f77288f859df723433502f9e675",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/9x16-duration-900-frame-792.png",
                "sha256": "7d428d2f7dbf4b565fd0b78356d7c9579c981f77288f859df723433502f9e675",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/9x16-duration-900-frame-899.png",
                "sha256": "7d428d2f7dbf4b565fd0b78356d7c9579c981f77288f859df723433502f9e675",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 9.153428819444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/1x1-duration-90-frame-10.png",
                "sha256": "375ad0563a518898d4ea21c83eee79d37153d3eeeba49785606e2f0319965072",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/1x1-duration-90-frame-89.png",
                "sha256": "2da039c8f9a4484529c2b15d161c6785e9aba68deb38b93bb06ce820278a6054",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/1x1-duration-90-frame-79.png",
                "sha256": "2da039c8f9a4484529c2b15d161c6785e9aba68deb38b93bb06ce820278a6054",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 9.151909722222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/1x1-duration-900-frame-13.png",
                "sha256": "1b79697e620934b5e56b0c5c784a43f780c1341deadbb5d252c6cfd1b6800480",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/1x1-duration-900-frame-90.png",
                "sha256": "2da039c8f9a4484529c2b15d161c6785e9aba68deb38b93bb06ce820278a6054",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/1x1-duration-900-frame-792.png",
                "sha256": "2da039c8f9a4484529c2b15d161c6785e9aba68deb38b93bb06ce820278a6054",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fit-rings-offer/1x1-duration-900-frame-899.png",
                "sha256": "16a4b0a3e153f521f48bd3adbb04e099bb1cd522983339f807f709535caa4ff5",
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
        "note": "Activity rings close to a check beside a free-class offer and CTA; rebrands recolor rings."
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
      "bundleSha256": "3737c452b53ee3012f34cea3854508d79f4df4f2f35711941da8aa47cdc06499",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.086Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-rings-offer/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-rings-offer/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-rings-offer/16x9/detail.mp4",
      "bg": "#ff8872",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "00006c85efad6cb7e1638ca4a5b51cbd0c2e83af14f705193813d792c81a1f4b",
        "loop": "fe5f6822e8f006224c52080d0d055255f7c577e293983a9d051e38d603ed5c47",
        "detail": "f1971fd8a9368f25e2e245c24fd83cd8f432d10bd624d0b5241dadfd7e5bf243"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-rings-offer/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-rings-offer/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-rings-offer/9x16/detail.mp4",
      "bg": "#ff8872",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7aae4d11972f7f2b4674cb2e8d4b16046305c9d183416dc2437887df5cad8754",
        "loop": "f1745ab2184935ffec7a96ab1c8fed29bce0ba6997c7bb2ba5bcf55303ab6cfa",
        "detail": "424cb0881a1904be778f0bfffff6e4f716a6744d38e7ab6ea1003b8ca99a1204"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fit-rings-offer/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fit-rings-offer/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fit-rings-offer/1x1/detail.mp4",
      "bg": "#ff8872",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ca6f20ea11181a59f97de1f4a0b6012f243d3682ac522ae308a3d2fa1c0cdc9d",
        "loop": "52be345ef5ea98dfec6f70496ccd6520947cba6b43a468620d5cb4792ef24b08",
        "detail": "b7b0a6a63325e183edda334daa63908a52bdb2973eaec5a68e5949fdb5ef79b1"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/3737c452b53ee3012f34cea3854508d79f4df4f2f35711941da8aa47cdc06499/index.mjs",
    "sha256": "3737c452b53ee3012f34cea3854508d79f4df4f2f35711941da8aa47cdc06499",
    "bytes": 172019,
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
    "at": "2026-10-09T07:12:07.978Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
