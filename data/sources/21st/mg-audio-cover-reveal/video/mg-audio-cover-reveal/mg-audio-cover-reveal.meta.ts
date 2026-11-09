// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "editorial",
  "mechanic": [
    "riso-layers-snap-to-register"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "riso-layers-snap-to-register",
    "podcast",
    "episode",
    "riso",
    "cover"
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
      "in": 102,
      "out": 0
    },
    "markers": {
      "settled": 102
    },
    "beats": [
      0,
      26,
      51,
      77,
      102
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
      "key": "show",
      "type": "text",
      "maxChars": 18,
      "role": "label"
    },
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 30,
      "role": "kicker"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 30,
      "role": "headline"
    },
    {
      "key": "meta",
      "type": "text",
      "maxChars": 90,
      "role": "body"
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
      "target": "riso-layers-snap-to-register",
      "prop": "transform",
      "from": "enter",
      "settledBy": 102,
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
    "ink": "#1F1D1A",
    "accent": "#0078BF",
    "secondary": "#FF48B0",
    "paper": "#F3EAD7",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "show": "slow signal",
    "kicker": "Slow Signal · episode 48",
    "title": "Rooms that remember.",
    "meta": "Sound artist Ines Calder on why we remember places by how they sounded."
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
      "key": "show",
      "label": "Show",
      "type": "text",
      "max": 18,
      "role": "label"
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 30,
      "role": "kicker"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 30,
      "role": "headline"
    },
    {
      "key": "meta",
      "label": "Meta",
      "type": "text",
      "max": 90,
      "role": "body"
    }
  ],
  "name": "Riso Cover Reveal",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-audio-cover-reveal",
    "bundleSha256": "eeef0197791b6ce6aa96aa156378f0a0fe16c39e083bfc11f046c5de3bd9169a",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:06:12.061Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/16x9-paper.png",
        "sha256": "581e22a231ee06698bc90797376bfe9df5e93f674aa9024bf6438f89cd5e3e67"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/16x9-night.png",
        "sha256": "86b6326608b721bd40bad65f740a105d164e33ec723ee6f61bf7ae795af27dc9"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/16x9-color.png",
        "sha256": "f03593f19aa67fd1a3c98ca0f245b5eae318b63011bcb810db8fd378d1e0beb9"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/9x16-paper.png",
        "sha256": "d1a0c7f202b2cf50190294e31b2e619175ef8969b38efc625f7b929bb30a23c9"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/9x16-night.png",
        "sha256": "92f52c4fbe838d65a58a3b5ad1f3af7f3cbc6e5c1b8b8ac71e15b6fa61a2fa01"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/9x16-color.png",
        "sha256": "fe6803f016996ab16f83b304a6733918997a9c231229b9d323a23ec54a717116"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/1x1-paper.png",
        "sha256": "a87b8b46fd2412c7a4dda9740c78937ed9658d5709c9176d43b5d7f72a539b10"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/1x1-night.png",
        "sha256": "b932e0c9bb93a15d6487252a6f490ac650a3a07fe382c3af813659de0afa8083"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/1x1-color.png",
        "sha256": "e1cf462cef6a7ffd02611a9d8deb65d28b5ac40cc0cb4272c347f188eedadc2a"
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
          "mg-audio-cover-reveal--16x9",
          "mg-audio-cover-reveal--9x16",
          "mg-audio-cover-reveal--1x1"
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
            "paperNight": 35.123996310763886,
            "paperColor": 18.67214626736111,
            "region": {
              "left": 112,
              "top": 61,
              "width": 1665,
              "height": 913
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 46.367513020833336,
            "paperColor": 26.036946614583332,
            "region": {
              "left": 86,
              "top": 166,
              "width": 910,
              "height": 1596
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 38.76551649305556,
            "paperColor": 20.365858289930557,
            "region": {
              "left": 64,
              "top": 151,
              "width": 931,
              "height": 685
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
            "occupancy": 0.9834299589177237,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9834299589177237,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0389662954302092,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9926376028806586,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9926376028806586,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9913936961101315,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7748794962658133,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7723825698546453,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7546331289717535,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 17.58572048611111,
        "frames": [
          15,
          102,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 17.499131944444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/16x9-duration-90-frame-10.png",
                "sha256": "92c288e175b44dc2072c6097bb23470b9ac43ae0672c48f8fe75b0738c3bb04c",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/16x9-duration-90-frame-89.png",
                "sha256": "bba69893d09d63d780ef278edc08f91fbc7788f1131a4e4456773d490490c48f",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/16x9-duration-90-frame-79.png",
                "sha256": "968f9a9be358d19ff4636135a767fb5f969c0073a348cec4de50318504c34fff",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 17.58572048611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/16x9-duration-900-frame-15.png",
                "sha256": "86cda19a86493402151ea088d70147605221c76d68ccfd105e49c30ced1171e6",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/16x9-duration-900-frame-102.png",
                "sha256": "bba69893d09d63d780ef278edc08f91fbc7788f1131a4e4456773d490490c48f",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/16x9-duration-900-frame-792.png",
                "sha256": "bba69893d09d63d780ef278edc08f91fbc7788f1131a4e4456773d490490c48f",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/16x9-duration-900-frame-899.png",
                "sha256": "968f9a9be358d19ff4636135a767fb5f969c0073a348cec4de50318504c34fff",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 21.127061631944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/9x16-duration-90-frame-10.png",
                "sha256": "30b0dea13c5c36d6c1ed3d7c530923a00a6a10f14d64cc1f06e2eead3d12c9c5",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/9x16-duration-90-frame-89.png",
                "sha256": "b9676354c4809e34c3d7a0ddb98a3cd885f6e69f6d161f7c209c098c02e93626",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/9x16-duration-90-frame-79.png",
                "sha256": "b9676354c4809e34c3d7a0ddb98a3cd885f6e69f6d161f7c209c098c02e93626",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 21.163953993055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/9x16-duration-900-frame-15.png",
                "sha256": "329b9a248605eb43fd8b1b7938e4c063303dd6f17de3802dedb63189497e5fe5",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/9x16-duration-900-frame-102.png",
                "sha256": "9a27ef0df9c045b84f6012e1ab0dd972b6b8969a53e3f0f165b0444b764dc6c2",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/9x16-duration-900-frame-792.png",
                "sha256": "9a27ef0df9c045b84f6012e1ab0dd972b6b8969a53e3f0f165b0444b764dc6c2",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/9x16-duration-900-frame-899.png",
                "sha256": "b9676354c4809e34c3d7a0ddb98a3cd885f6e69f6d161f7c209c098c02e93626",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 12.57248263888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/1x1-duration-90-frame-10.png",
                "sha256": "6e47b2b90fbf2f876d3537122d5429f2b22f87c79b3985022c0d91e4597c5da5",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/1x1-duration-90-frame-89.png",
                "sha256": "913e052f5887498a0c9b00ba4e04c419ae2541dfd3bc0b1a930360bb9b88935b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/1x1-duration-90-frame-79.png",
                "sha256": "c931c762668fc047a15e7560a99efecb27d6bd90a828414cd921da43bd14aac0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 12.62109375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/1x1-duration-900-frame-15.png",
                "sha256": "0073bffcaca4e350195d1d9895c041ee71ecd7cbf09e1f21ebebc2b408bebfc7",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/1x1-duration-900-frame-102.png",
                "sha256": "2a88dfac5a150d715db377b5f949e58e294071833e4b3f071840d422cc0077b1",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/1x1-duration-900-frame-792.png",
                "sha256": "a142999f7b73706f1035f59e0959e5a50d2bde5afb71792b566a6cebaad6cfb7",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-cover-reveal/1x1-duration-900-frame-899.png",
                "sha256": "a142999f7b73706f1035f59e0959e5a50d2bde5afb71792b566a6cebaad6cfb7",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "titles",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Riso-printed episode cover slides in beside a bold episode title and pills; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 63,
        "compared": 63,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "eeef0197791b6ce6aa96aa156378f0a0fe16c39e083bfc11f046c5de3bd9169a",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.081Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-cover-reveal/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-cover-reveal/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-cover-reveal/16x9/detail.mp4",
      "bg": "#e7e0cf",
      "posterFrame": 102,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "60140377ea2e0bedb6477acf4c6a5c946e09a2eee7c532281f81b2a6a473de17",
        "loop": "a7e30dd2a4e53f143373ecb82a1d4082f8e6449f73a66305022e11839ab29692",
        "detail": "6f0b16f12bcfb6882072e8b8e88086314e6ae3da58e6025bdfabecb62514721c"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-cover-reveal/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-cover-reveal/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-cover-reveal/9x16/detail.mp4",
      "bg": "#e7e0cf",
      "posterFrame": 102,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "58c5afe1a3aa18cf1925a921b53b94ba44b541f578d9993f7e97f83f7db74aae",
        "loop": "d2ea4f3585d90d316fc794c9ecf899ca36961b581cfdb97d65ae08ea15b3a789",
        "detail": "36d501e72893d65d97f663317cef33d0b9fdbbd7f19beaa4d64cde314d7a86ea"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-cover-reveal/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-cover-reveal/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-cover-reveal/1x1/detail.mp4",
      "bg": "#e7e0cf",
      "posterFrame": 102,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "87ef388150017f3855355663e84e4392a4d4f091db96305ff298516afeccaeed",
        "loop": "ca30d54efea3ac30ec415b4e4cf42b4866588445bf37b3b5854d96185c8fb526",
        "detail": "81b0e75dbf86125701b33d54ff62300a830021de294893900d00e3d8360b8e36"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/eeef0197791b6ce6aa96aa156378f0a0fe16c39e083bfc11f046c5de3bd9169a/index.mjs",
    "sha256": "eeef0197791b6ce6aa96aa156378f0a0fe16c39e083bfc11f046c5de3bd9169a",
    "bytes": 245253,
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
    "at": "2026-10-09T07:08:53.761Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
