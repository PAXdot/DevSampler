// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "editorial",
  "mechanic": [
    "split-panels-speaker-highlight"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "split-panels-speaker-highlight",
    "podcast",
    "guest",
    "split-screen",
    "lower-third"
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
      "in": 129,
      "out": 0
    },
    "markers": {
      "settled": 129
    },
    "beats": [
      0,
      32,
      65,
      97,
      129
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
      "key": "host",
      "type": "text",
      "maxChars": 20,
      "role": "name"
    },
    {
      "key": "guest",
      "type": "text",
      "maxChars": 20,
      "role": "name"
    },
    {
      "key": "role",
      "type": "text",
      "maxChars": 38,
      "role": "caption"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 30,
      "role": "headline"
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
      "target": "split-panels-speaker-highlight",
      "prop": "transform",
      "from": "enter",
      "settledBy": 129,
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
    "accent": "#D0643C",
    "secondary": "#5D8F77",
    "paper": "#F2F0EB",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "host": "Mara Okafor",
    "guest": "Ines Calder",
    "role": "sound artist, author of quiet rooms",
    "title": "Rooms that remember"
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
      "key": "host",
      "label": "Host",
      "type": "text",
      "max": 20,
      "role": "name"
    },
    {
      "key": "guest",
      "label": "Guest",
      "type": "text",
      "max": 20,
      "role": "name"
    },
    {
      "key": "role",
      "label": "Role",
      "type": "text",
      "max": 38,
      "role": "caption"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 30,
      "role": "headline"
    }
  ],
  "name": "Host And Guest Split",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-audio-guest-intro",
    "bundleSha256": "0b9edf7d23f44eba099b54770bef11c68c50933b46b5f4a3b1dc87a985d11a24",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:05:45.165Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/16x9-paper.png",
        "sha256": "1684154d0f9fd102e8faed7c3b0b59d36b4ccab7cc264d4f70f5870205d63f19"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/16x9-night.png",
        "sha256": "69bbb547d7e9aba79f43b44b14b373aed5ef6dc2f6196c94392eee86905006a0"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/16x9-color.png",
        "sha256": "924375705f1d046a4f79253c16d6160256f3fda0ee6b16d50a2a9e84b99ac1ec"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/9x16-paper.png",
        "sha256": "4e9ea97ed49778fff06ce3c3850acbbb9367c66b779d2390649109a01999c1ac"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/9x16-night.png",
        "sha256": "112fa23014f0efa07fffc558a92a84cd86da6c1b2563413f7b01093ceceee581"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/9x16-color.png",
        "sha256": "a0790cd78045659c64164c815fd2083c4a05b9df9a5fb4d1fc1c505c326875e7"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/1x1-paper.png",
        "sha256": "67c73fcccd30dde56d2560da27ecd623bf5749d395f50587e1b0ac5595eb0dd0"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/1x1-night.png",
        "sha256": "a410cc91ed67f759847f0e09cab58649cb63fb7137734ba2172c829c36e9fa78"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/1x1-color.png",
        "sha256": "ff86183ad587d76bb5ca6264c511cac14895e439a0eed5666f2db8cbe1d4a2fa"
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
          "mg-audio-guest-intro--16x9",
          "mg-audio-guest-intro--9x16",
          "mg-audio-guest-intro--1x1"
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
            "paperNight": 38.67670355902778,
            "paperColor": 16.851453993055557,
            "region": {
              "left": 77,
              "top": 64,
              "width": 1771,
              "height": 917
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 63.94053819444444,
            "paperColor": 21.371202256944443,
            "region": {
              "left": 65,
              "top": 115,
              "width": 950,
              "height": 1584
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 49.38462999131944,
            "paperColor": 17.309950086805557,
            "region": {
              "left": 62,
              "top": 58,
              "width": 957,
              "height": 888
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
            "occupancy": 1.1044470514543268,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.109325626469724,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1051106962203607,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0284785210380452,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0284785210380452,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0284785210380452,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0257689609908895,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0293314856806923,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0246948573668153,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 45.926974826388886,
        "frames": [
          19,
          129,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 47.838541666666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/16x9-duration-90-frame-10.png",
                "sha256": "9ee57b7edf1fb3efba2e9e0cdd8a2e54f872c86825160bcf2cfb8d22f4251da5",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/16x9-duration-90-frame-89.png",
                "sha256": "2c89b3554c541ede08691edcfa3b0133d100ed7070db95b3cae364aa5bbe33bc",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/16x9-duration-90-frame-79.png",
                "sha256": "2c89b3554c541ede08691edcfa3b0133d100ed7070db95b3cae364aa5bbe33bc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 45.926974826388886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/16x9-duration-900-frame-19.png",
                "sha256": "11eed00e28f6f3410c00ef2b01b205b0f260c34f6595fbb6983d1538beeedb8b",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/16x9-duration-900-frame-129.png",
                "sha256": "2c89b3554c541ede08691edcfa3b0133d100ed7070db95b3cae364aa5bbe33bc",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/16x9-duration-900-frame-792.png",
                "sha256": "2c89b3554c541ede08691edcfa3b0133d100ed7070db95b3cae364aa5bbe33bc",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/16x9-duration-900-frame-899.png",
                "sha256": "2c89b3554c541ede08691edcfa3b0133d100ed7070db95b3cae364aa5bbe33bc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 37.12803819444444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/9x16-duration-90-frame-10.png",
                "sha256": "f3cce1ebe0500024c9e7dda1185c71093c4c01ba4b44f037fb8c2b7450976eb3",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/9x16-duration-90-frame-89.png",
                "sha256": "3015f3fb30b7c294c9327f15bf138b56fdf489c98e46c48b764c36edbfa3c8eb",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/9x16-duration-90-frame-79.png",
                "sha256": "3015f3fb30b7c294c9327f15bf138b56fdf489c98e46c48b764c36edbfa3c8eb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 36.357421875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/9x16-duration-900-frame-19.png",
                "sha256": "850d5968a21c60deba6b8e83db9cb5caa7dc5ccf867c2df70a3c9eb1efeae890",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/9x16-duration-900-frame-129.png",
                "sha256": "3015f3fb30b7c294c9327f15bf138b56fdf489c98e46c48b764c36edbfa3c8eb",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/9x16-duration-900-frame-792.png",
                "sha256": "3015f3fb30b7c294c9327f15bf138b56fdf489c98e46c48b764c36edbfa3c8eb",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/9x16-duration-900-frame-899.png",
                "sha256": "3015f3fb30b7c294c9327f15bf138b56fdf489c98e46c48b764c36edbfa3c8eb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 43.91362847222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/1x1-duration-90-frame-10.png",
                "sha256": "e3dd955e74faade3ed01276ed57e439c778f7c7767f7da9e01f4982defb02f96",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/1x1-duration-90-frame-89.png",
                "sha256": "0f03d36198ce8aa7674de66cc4ca0bccde490dac9491c56fc985daa3182b734c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/1x1-duration-90-frame-79.png",
                "sha256": "0f03d36198ce8aa7674de66cc4ca0bccde490dac9491c56fc985daa3182b734c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 41.509982638888886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/1x1-duration-900-frame-19.png",
                "sha256": "71742628a8a3a7bbc405b3db8bb3be5d692808f273dd4750311e4ccfbb6a5ab5",
                "alphaMass": 587520
              },
              {
                "frame": 129,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/1x1-duration-900-frame-129.png",
                "sha256": "0f03d36198ce8aa7674de66cc4ca0bccde490dac9491c56fc985daa3182b734c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/1x1-duration-900-frame-792.png",
                "sha256": "0f03d36198ce8aa7674de66cc4ca0bccde490dac9491c56fc985daa3182b734c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-audio-guest-intro/1x1-duration-900-frame-899.png",
                "sha256": "0f03d36198ce8aa7674de66cc4ca0bccde490dac9491c56fc985daa3182b734c",
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
        "note": "Host and guest portraits split with serif name cards and an episode title; rebrands distinct."
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
      "bundleSha256": "0b9edf7d23f44eba099b54770bef11c68c50933b46b5f4a3b1dc87a985d11a24",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.081Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-guest-intro/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-guest-intro/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-guest-intro/16x9/detail.mp4",
      "bg": "#f2f0eb",
      "posterFrame": 129,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a1932969cedcbcb5b1f2ca4a11b2dc9b212fe0296774ff005556b4f8b3d15c5b",
        "loop": "41c030a5e8139f2e6c7c8d8f2c21ab24839555c4b114b23d7f67490cddcb3575",
        "detail": "f0fa8db7cbc98090a2382254f476a2d10205b1d9327785df42b959b536fca3bf"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-guest-intro/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-guest-intro/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-guest-intro/9x16/detail.mp4",
      "bg": "#f2f0eb",
      "posterFrame": 129,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e7238bc72e0e4269111f16bc4814ff5eba4b9869114f0f8a321db1068afbad41",
        "loop": "b7f6b347fd5c9c21ea2a8833af5495fbbbecd99c1df29f0b1cac706254ba40f1",
        "detail": "9216425fd286710eac8805f57bb00f021a67360f5cd3b9fb835c137445ab426d"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-guest-intro/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-guest-intro/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-guest-intro/1x1/detail.mp4",
      "bg": "#f2f0eb",
      "posterFrame": 129,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4bdc13b8ac318d7143aa239c9ddd6df4357136f623bb978cca2fbd3d3c36a800",
        "loop": "84c5d0e55793c9177c01817dfe617b950820364a471d343c5800f5bd8551c328",
        "detail": "105440f099f27c83b61494378485e3fc677d23d1af36937c64ac85f6a1a673d9"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/0b9edf7d23f44eba099b54770bef11c68c50933b46b5f4a3b1dc87a985d11a24/index.mjs",
    "sha256": "0b9edf7d23f44eba099b54770bef11c68c50933b46b5f4a3b1dc87a985d11a24",
    "bytes": 245251,
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
    "at": "2026-10-09T07:09:03.176Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
