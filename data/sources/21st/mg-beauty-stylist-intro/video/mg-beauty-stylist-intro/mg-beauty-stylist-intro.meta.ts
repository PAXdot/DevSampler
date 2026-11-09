// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "testimonials/motion-gallery",
  "job": "testimonials",
  "language": "editorial",
  "mechanic": [
    "arch-portrait-reveal-with-stats"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "testimonials",
    "arch-portrait-reveal-with-stats",
    "beauty",
    "salon",
    "team",
    "portrait"
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
      "maxChars": 24,
      "role": "kicker"
    },
    {
      "key": "name",
      "type": "text",
      "maxChars": 18,
      "role": "name"
    },
    {
      "key": "role",
      "type": "text",
      "maxChars": 52,
      "role": "caption"
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
      "target": "arch-portrait-reveal-with-stats",
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
    "ink": "#F3E6D3",
    "accent": "#CDA86B",
    "secondary": "#D68C46",
    "paper": "#17110D",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "meet your colorist",
    "name": "Inès Marlowe",
    "role": "Senior colorist · balayage and copper specialist"
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
      "max": 24,
      "role": "kicker"
    },
    {
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 18,
      "role": "name"
    },
    {
      "key": "role",
      "label": "Role",
      "type": "text",
      "max": 52,
      "role": "caption"
    }
  ],
  "name": "Stylist Arch Intro",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-beauty-stylist-intro",
    "bundleSha256": "ee5e387c4bc6ac469f7b306b99c2edeeffa607bc3cfedd40624c1b67207fccf6",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:27:12.452Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/16x9-paper.png",
        "sha256": "bfac2f888c8aa8f47fb7288b4ed9ee34311a83b1c579ebbdd1831033f23edea2"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/16x9-night.png",
        "sha256": "8b203d71ba9d846edfd492c9e5683aa810a3a879bfaef21c1dbf5497f954d75f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/16x9-color.png",
        "sha256": "1ec06025ff59482e1d24120bfba0ee9541acc684f99cfac564a64d7f5117ff26"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/9x16-paper.png",
        "sha256": "a4156c7a5c647d03edd6fd4dd3284728a207f9f2857a72a70a162e4bba4defcd"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/9x16-night.png",
        "sha256": "a5f0e60c38bd4caf6d15ba61e066c5bfb9d41cf9f3618d964adb1717ec7dba3b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/9x16-color.png",
        "sha256": "564ec9e443ea74479de336dd81e01b911239d95af4307262da40672799accfc9"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/1x1-paper.png",
        "sha256": "3e16978eebce81af7c929a62dfc365199d4372d26bf7885c2bcf291091785c10"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/1x1-night.png",
        "sha256": "f408fae9852ca664d795eb2d62e14456d032fcf33c7903a9b5c433f4a880704a"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/1x1-color.png",
        "sha256": "784193ea18a177ce07ba51831053d89d6b599c0e8ae3126ff1672e5cb7b79996"
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
          "mg-beauty-stylist-intro--16x9",
          "mg-beauty-stylist-intro--9x16",
          "mg-beauty-stylist-intro--1x1"
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
            "paperNight": 28.99384223090278,
            "paperColor": 10.952582465277779,
            "region": {
              "left": 154,
              "top": 111,
              "width": 1644,
              "height": 876
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 35.791178385416664,
            "paperColor": 14.242567274305555,
            "region": {
              "left": 86,
              "top": 144,
              "width": 829,
              "height": 1636
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 28.475938585069443,
            "paperColor": 10.564643012152779,
            "region": {
              "left": 65,
              "top": 130,
              "width": 947,
              "height": 823
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
            "occupancy": 0.8819080294154701,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9842883912824392,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8998694964096752,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9090552694843371,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.926945656091655,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8973249552521628,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9459863906696654,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9469863762834811,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8869082612468857,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.205729166666666,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 9.28439670138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/16x9-duration-90-frame-10.png",
                "sha256": "4ac6538dd768f1d940cafc5e587a91b41bd4ddaff14084b12a83c99ab71853be",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/16x9-duration-90-frame-89.png",
                "sha256": "d0a49944981c13065ee1bda6325b9340171eb54014a3056603d333984827bee4",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/16x9-duration-90-frame-79.png",
                "sha256": "d0a49944981c13065ee1bda6325b9340171eb54014a3056603d333984827bee4",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 9.20583767361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/16x9-duration-900-frame-14.png",
                "sha256": "68dfc57deded49018fc848e243df79631a3feb2cb38180169ea92706d1bcb648",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/16x9-duration-900-frame-96.png",
                "sha256": "cb5df1ce8af032fc4f9d7c49d379c9ac0c5fd501aa2d82fb4ce8384f068bc655",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/16x9-duration-900-frame-792.png",
                "sha256": "d0a49944981c13065ee1bda6325b9340171eb54014a3056603d333984827bee4",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/16x9-duration-900-frame-899.png",
                "sha256": "d0a49944981c13065ee1bda6325b9340171eb54014a3056603d333984827bee4",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 10.4033203125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/9x16-duration-90-frame-10.png",
                "sha256": "379686a31e90c4c8f3a2d4d2f40a90444be7482cb23b2fa5cfd9ae446f359830",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/9x16-duration-90-frame-89.png",
                "sha256": "62d7660c1fda4f0598711d0020e161fa57db5dbb2fdc0404e8b604a155231763",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/9x16-duration-90-frame-79.png",
                "sha256": "e023057abead77e530cc23ab8d9f805ab6f185433095c216c2ba71bd5c502c25",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 10.324761284722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/9x16-duration-900-frame-14.png",
                "sha256": "bd81f72be20769e226d3f8e620f7c215b3039278ea1b0737a222dda6a638377c",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/9x16-duration-900-frame-96.png",
                "sha256": "62d7660c1fda4f0598711d0020e161fa57db5dbb2fdc0404e8b604a155231763",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/9x16-duration-900-frame-792.png",
                "sha256": "62d7660c1fda4f0598711d0020e161fa57db5dbb2fdc0404e8b604a155231763",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/9x16-duration-900-frame-899.png",
                "sha256": "62d7660c1fda4f0598711d0020e161fa57db5dbb2fdc0404e8b604a155231763",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 10.79611545138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/1x1-duration-90-frame-10.png",
                "sha256": "6af0f9c7fb5264c5a390492653e8b12c2fda25dce2ae9f2c9ad10ca6f437d603",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/1x1-duration-90-frame-89.png",
                "sha256": "f501261bc3be16274dc63a28e1379fda4415298cfeb7b6a98e0a39c02956836c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/1x1-duration-90-frame-79.png",
                "sha256": "f501261bc3be16274dc63a28e1379fda4415298cfeb7b6a98e0a39c02956836c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 10.699327256944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/1x1-duration-900-frame-14.png",
                "sha256": "571e12ebc6bfc4367e261a8aeabe7c337b3d06c63e24d0190359d897a0b782d1",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/1x1-duration-900-frame-96.png",
                "sha256": "f501261bc3be16274dc63a28e1379fda4415298cfeb7b6a98e0a39c02956836c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/1x1-duration-900-frame-792.png",
                "sha256": "f501261bc3be16274dc63a28e1379fda4415298cfeb7b6a98e0a39c02956836c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-beauty-stylist-intro/1x1-duration-900-frame-899.png",
                "sha256": "f501261bc3be16274dc63a28e1379fda4415298cfeb7b6a98e0a39c02956836c",
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
        "note": "Stylist portrait in an arch beside a serif name, stats and specialty pills; rebrands distinct."
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
      "bundleSha256": "ee5e387c4bc6ac469f7b306b99c2edeeffa607bc3cfedd40624c1b67207fccf6",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.083Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-stylist-intro/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-stylist-intro/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-stylist-intro/16x9/detail.mp4",
      "bg": "#1b130e",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0d17227426a668ffa920fa9b61efdb8b59ba046c8f67738b7c4135993ae1181a",
        "loop": "6cca277ff7eb235075dc6fe8c30177e1e0c8019dfbf83bd0f6f221c4dd6e45d0",
        "detail": "dcd7100b129faaa116cc0c057a544a973fb2668eec02cbae83a8f06219b8c05e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-stylist-intro/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-stylist-intro/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-stylist-intro/9x16/detail.mp4",
      "bg": "#1b130e",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "b4f36df00cb624b6cbd1de9997ec3e4fd0fce52d112709ce63359976272488a7",
        "loop": "16ff1e75889fd6bfad955f6cb9f492802c3ca82f26235531d521721a491e64d2",
        "detail": "62cbdb03266fc687afea48482cd60b167f1ce7cd103ff67f5cc4ad564fab6283"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-stylist-intro/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-stylist-intro/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-stylist-intro/1x1/detail.mp4",
      "bg": "#1b130e",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "23345484c053b4f3dabda884bd338ede585b0273931716ee47b0406bedb2bf30",
        "loop": "05c774446e2b9da785b9ecef8b7381e009238f1adcd6dbfbae7f4cbf3df180c9",
        "detail": "3d89ad94430a70f9089b730c380af5aa528f11954196653a49236f5c6d1d821c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ee5e387c4bc6ac469f7b306b99c2edeeffa607bc3cfedd40624c1b67207fccf6/index.mjs",
    "sha256": "ee5e387c4bc6ac469f7b306b99c2edeeffa607bc3cfedd40624c1b67207fccf6",
    "bytes": 253014,
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
    "at": "2026-10-09T07:10:30.159Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
