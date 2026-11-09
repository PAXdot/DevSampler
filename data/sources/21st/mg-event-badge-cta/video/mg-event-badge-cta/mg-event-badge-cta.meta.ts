// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "cta/motion-gallery",
  "job": "cta",
  "language": "aura",
  "mechanic": [
    "lanyard-badge-drop-swing"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "cta",
    "lanyard-badge-drop-swing",
    "badge",
    "invite",
    "event",
    "register"
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
      "in": 99,
      "out": 0
    },
    "markers": {
      "settled": 99
    },
    "beats": [
      0,
      25,
      50,
      74,
      99
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
      "maxChars": 26,
      "role": "headline"
    },
    {
      "key": "name",
      "type": "text",
      "maxChars": 16,
      "role": "name"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 32,
      "role": "cta"
    },
    {
      "key": "note",
      "type": "text",
      "maxChars": 22,
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
      "target": "lanyard-badge-drop-swing",
      "prop": "transform",
      "from": "enter",
      "settledBy": 99,
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
    "ink": "#1B1530",
    "accent": "#E8452B",
    "secondary": "#6C4FF5",
    "paper": "#F6E3EE",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "See you in Lisbon.",
    "name": "Mira Sato",
    "cta": "Register at meridian.events",
    "note": "this could be you"
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
      "max": 26,
      "role": "headline"
    },
    {
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 16,
      "role": "name"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 32,
      "role": "cta"
    },
    {
      "key": "note",
      "label": "Note",
      "type": "text",
      "max": 22,
      "role": "caption"
    }
  ],
  "name": "Lanyard Badge Invite",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-event-badge-cta",
    "bundleSha256": "5d876e394b59b24d40678f1bb4917f0d82386c01b1144b28c8921906d72ee757",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:49:19.054Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/16x9-paper.png",
        "sha256": "94e9a547ec00af29cf3b31d9c4653503397b1e462d2932dadf56531dfa6e94b4"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/16x9-night.png",
        "sha256": "0689b84c44544e1e46543ae58fba648ee66cebc9df37643a3e68cfb26484153f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/16x9-color.png",
        "sha256": "616549f091f039b31e1abde21ceac4850ebab3648508dd41a026cbf8448580a7"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/9x16-paper.png",
        "sha256": "626a148c9d14fb61387056e39e3b83fead369fe21d98c2a30829740d3576156a"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/9x16-night.png",
        "sha256": "61454df8b92cfb3f8f5a995945c4d9aa92a74be3d1ec2f154be6920a648e7f4f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/9x16-color.png",
        "sha256": "d7db8d212cacfe52b619e42eeb21752495f006c7b9c2a1e7fc0ff35e8d087c39"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/1x1-paper.png",
        "sha256": "7bfd99232a10a41032a1808ba1f0b2cbc4fcd00c01534e1da2abd9901d907f1b"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/1x1-night.png",
        "sha256": "5de758ebb43b218a723c29851e38d78c2a0b446414f358415f9757336c8f9ed3"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/1x1-color.png",
        "sha256": "6aff0ae37a37ccfe7f570f8996195da3263aac45b79522eebca03b6468cc3d26"
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
          "mg-event-badge-cta--16x9",
          "mg-event-badge-cta--9x16",
          "mg-event-badge-cta--1x1"
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
            "paperNight": 27.76117621527778,
            "paperColor": 13.282958984375,
            "region": {
              "left": 166,
              "top": 0,
              "width": 1594,
              "height": 909
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 41.03428819444444,
            "paperColor": 19.040147569444443,
            "region": {
              "left": 63,
              "top": 0,
              "width": 955,
              "height": 1865
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 29.2509765625,
            "paperColor": 14.077202690972221,
            "region": {
              "left": 51,
              "top": 0,
              "width": 995,
              "height": 895
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
            "occupancy": 0.9884404427280173,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9903042524880324,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7616769219261781,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2173028853388066,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2173028853388066,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2173028853388066,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.082031821073194,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.082031821073194,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.082031821073194,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 14.708116319444445,
        "frames": [
          14,
          99,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 14.889105902777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/16x9-duration-90-frame-10.png",
                "sha256": "0d72aee503c61e7d0e4b3b4893cda2d6af3b0d51f6a2f71d7107a628783defce",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/16x9-duration-90-frame-89.png",
                "sha256": "42f6894867c96f592a2c29a692d8afa4456e785be3dcf543d25904973a2bf241",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/16x9-duration-90-frame-79.png",
                "sha256": "b73f8a8cece1191325560ead9a747adc67cd9af0d101137363f521ea5fe1b3f9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 14.708116319444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/16x9-duration-900-frame-14.png",
                "sha256": "64f595cf3516c44e2b7c4be36bcb71f11d15e1954d3fa9a0edd1b7089aada459",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/16x9-duration-900-frame-99.png",
                "sha256": "42f6894867c96f592a2c29a692d8afa4456e785be3dcf543d25904973a2bf241",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/16x9-duration-900-frame-792.png",
                "sha256": "42f6894867c96f592a2c29a692d8afa4456e785be3dcf543d25904973a2bf241",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/16x9-duration-900-frame-899.png",
                "sha256": "b73f8a8cece1191325560ead9a747adc67cd9af0d101137363f521ea5fe1b3f9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 25.182725694444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/9x16-duration-90-frame-10.png",
                "sha256": "a5a2889cbb60cabf701cb524de9d34efb384e30d6fd95ff9f603aa430aa87bf8",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/9x16-duration-90-frame-89.png",
                "sha256": "9e59ffc92a7549f4ca34e70a6988bf7a0925ea34bd6eb7b53e5323d993475003",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/9x16-duration-90-frame-79.png",
                "sha256": "9e59ffc92a7549f4ca34e70a6988bf7a0925ea34bd6eb7b53e5323d993475003",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 24.864908854166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/9x16-duration-900-frame-14.png",
                "sha256": "17699de88d85e3de464d7d7cbedf7f2db4f2dada18e4c00499cdfc3bc4cd3031",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/9x16-duration-900-frame-99.png",
                "sha256": "9e59ffc92a7549f4ca34e70a6988bf7a0925ea34bd6eb7b53e5323d993475003",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/9x16-duration-900-frame-792.png",
                "sha256": "9e59ffc92a7549f4ca34e70a6988bf7a0925ea34bd6eb7b53e5323d993475003",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/9x16-duration-900-frame-899.png",
                "sha256": "9e59ffc92a7549f4ca34e70a6988bf7a0925ea34bd6eb7b53e5323d993475003",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 19.01974826388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/1x1-duration-90-frame-10.png",
                "sha256": "bc1361133ae381ba9bfbaa1f34b75fe3982e6114ed532619cc602c20c6b23af0",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/1x1-duration-90-frame-89.png",
                "sha256": "74cccd05e54853fcbe911fa5574128719ceb6924f5b880eb83d48125051b7631",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/1x1-duration-90-frame-79.png",
                "sha256": "74cccd05e54853fcbe911fa5574128719ceb6924f5b880eb83d48125051b7631",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 18.697265625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/1x1-duration-900-frame-14.png",
                "sha256": "8e82ee44c299a66bd665cefa0330c99b01423672d844a2c00d3a1e10a84540e2",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/1x1-duration-900-frame-99.png",
                "sha256": "74cccd05e54853fcbe911fa5574128719ceb6924f5b880eb83d48125051b7631",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/1x1-duration-900-frame-792.png",
                "sha256": "74cccd05e54853fcbe911fa5574128719ceb6924f5b880eb83d48125051b7631",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-event-badge-cta/1x1-duration-900-frame-899.png",
                "sha256": "74cccd05e54853fcbe911fa5574128719ceb6924f5b880eb83d48125051b7631",
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
        "note": "Speaker lanyard badge swings in beside a See-you-in headline and register CTA; rebrands distinct."
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
      "bundleSha256": "5d876e394b59b24d40678f1bb4917f0d82386c01b1144b28c8921906d72ee757",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.095Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-badge-cta/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-badge-cta/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-badge-cta/16x9/detail.mp4",
      "bg": "#f3c6ca",
      "posterFrame": 99,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ff93bcd29bbb7349c015bac65aecc095052b383054a4fc9290b79c53e098f9cb",
        "loop": "d5462cbb8709aa0ffb86c0a1dd76e2c7452079d6495bbb38019dda14c087256d",
        "detail": "b05b2597e35c09e4a62167f0d6eb4b43cc7ef7a8898872ba57041afbd6535b54"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-badge-cta/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-badge-cta/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-badge-cta/9x16/detail.mp4",
      "bg": "#f3c6ca",
      "posterFrame": 99,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "57681c1a8588394e5a742c7ce7c5f3fa2924682a317fdadb3944e458ece693c7",
        "loop": "9f6d9627b52706210a38e08f93f5c2f5dc0bb9eddd1bf2fa6a57ae6a6a184e30",
        "detail": "671486a10c0417f54148d3542168653a8342f5c2e31093ba24c7e157fc723b79"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-badge-cta/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-badge-cta/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-badge-cta/1x1/detail.mp4",
      "bg": "#f3c6ca",
      "posterFrame": 99,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "675bca3eb2dee22ad7e9c1d4c427a1d8b675c162785be141c2d1fb8fa8884c4b",
        "loop": "b6c2e7ab3d12219a026b79cfeb689ddc9461c599ba482387774959f49abf5a24",
        "detail": "7ac14227f7a33473738b2ea6a16245ca07430c1f632af944a600e933cb07f16a"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/5d876e394b59b24d40678f1bb4917f0d82386c01b1144b28c8921906d72ee757/index.mjs",
    "sha256": "5d876e394b59b24d40678f1bb4917f0d82386c01b1144b28c8921906d72ee757",
    "bytes": 295995,
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
    "at": "2026-10-09T07:18:42.421Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
