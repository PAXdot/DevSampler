// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "cta/motion-gallery",
  "job": "cta",
  "language": "neo-brutal",
  "mechanic": [
    "sticker-slap-over-headline"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "cta",
    "sticker-slap-over-headline",
    "beauty",
    "promo",
    "discount",
    "reels"
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
      "maxChars": 20,
      "role": "headline"
    },
    {
      "key": "offer",
      "type": "text",
      "maxChars": 5,
      "role": "value"
    },
    {
      "key": "when",
      "type": "text",
      "maxChars": 30,
      "role": "caption"
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
    "displayFont": "fonts.display",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "sticker-slap-over-headline",
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
    "ink": "#FFF6EC",
    "accent": "#FFE45C",
    "secondary": "#B8124F",
    "paper": "#FF5C85",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "gel mani week.",
    "offer": "−20%",
    "when": "Oct 6–12 · every gel shade",
    "cta": "Book via link in bio"
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
      "max": 20,
      "role": "headline"
    },
    {
      "key": "offer",
      "label": "Offer",
      "type": "text",
      "max": 5,
      "role": "value"
    },
    {
      "key": "when",
      "label": "When",
      "type": "text",
      "max": 30,
      "role": "caption"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 22,
      "role": "cta"
    }
  ],
  "name": "Discount Sticker Slap",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-beauty-promo-sticker",
    "bundleSha256": "3cd4a1b2e6f0e077078698218ea592616f04b03cd8eaf3612880eacd79643856",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:26:04.436Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/16x9-paper.png",
        "sha256": "1a4125709d0aba7fe84b78bf52f4cc0789fa2ebd4446d3e6af01164f4e2cf3eb"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/16x9-night.png",
        "sha256": "102cb5c8ab9b5d0e31a052bcdca8bbe733425e51f19a02e4184f307b0d0d6b20"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/16x9-color.png",
        "sha256": "a697cfe0768abcbb72746d039a18c4d2dc197187aae4d10e0264b01b7b5525da"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/9x16-paper.png",
        "sha256": "d7aea9c19a9746e0f3218b29c5c99d2b30638ab0b0c0e3e52eea19a8fd7b52e6"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/9x16-night.png",
        "sha256": "bee62d9acaafdbb8e376aa8015e10c93d406d8f62ad954a8605a7f2a48ae5f01"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/9x16-color.png",
        "sha256": "71989a9c9e546f3f75546e03f8aa6ee57ab390cae960955dfee7925af425a352"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/1x1-paper.png",
        "sha256": "b23242622817338ea83c851830b675a9c330bef9b4c131fd46f0dd686fc50a4a"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/1x1-night.png",
        "sha256": "f4f036490a10537315f7365df3acc4e6ec56180a0ba6b1144d65e5ea1f6bc26a"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/1x1-color.png",
        "sha256": "357888141f8837ee2275624c743a2ee2c00699501ced522a49182b4f4412406e"
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
          "mg-beauty-promo-sticker--16x9",
          "mg-beauty-promo-sticker--9x16",
          "mg-beauty-promo-sticker--1x1"
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
            "paperNight": 21.605821397569443,
            "paperColor": 19.124104817708332,
            "region": {
              "left": 0,
              "top": 67,
              "width": 1920,
              "height": 1013
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 34.535888671875,
            "paperColor": 24.62798394097222,
            "region": {
              "left": 0,
              "top": 86,
              "width": 1080,
              "height": 1834
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 27.957411024305557,
            "paperColor": 24.837293836805557,
            "region": {
              "left": 0,
              "top": 65,
              "width": 1080,
              "height": 994
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
            "occupancy": 1.3293125892332245,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3293125892332245,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3293125892332245,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3537533068783072,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3537533068783072,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3537533068783072,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.304379776601999,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.304379776601999,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.304379776601999,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.72146267361111,
        "frames": [
          14,
          99,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 9.725151909722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/16x9-duration-90-frame-10.png",
                "sha256": "4dbb831facebf906ab2dde258b72cf110221b7dbfc9aa953d3f7f98b54ba1443",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/16x9-duration-90-frame-89.png",
                "sha256": "12cd2f73773f1dc1021f7e4425fc5e42ecbc2dc379fa5bbeb3ab549d63b67334",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/16x9-duration-90-frame-79.png",
                "sha256": "e74f5894d8e992c62c3cab66af8f9de34138315f8966a696badc9096092a4e67",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 9.72146267361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/16x9-duration-900-frame-14.png",
                "sha256": "b7695abdb5fa7da91b9226e8ac7f44852322794444dbb2d8b79308684d09df4d",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/16x9-duration-900-frame-99.png",
                "sha256": "1b48f3f53dc623c73fc3a5c52054f3cde6fd3ca7d8b920a4998c5d3e66a8a05c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/16x9-duration-900-frame-792.png",
                "sha256": "4aa08c9f1c707cd9e6cd08cc08c0b10333a6bac168d958c9be3dcb25f7adb024",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/16x9-duration-900-frame-899.png",
                "sha256": "e86ef0ef4e2488b6e51f2494c5d4333e0a21856537431e5a54c70d2695c3dad9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 12.92306857638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/9x16-duration-90-frame-10.png",
                "sha256": "0c8c26ea2c0543c9e578f81f349037dd40574090884dcee81cbd029054103279",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/9x16-duration-90-frame-89.png",
                "sha256": "a4f4637c06ba4123e53c9d6e679d64a5a794249b2d90ab0b237e91b9dea14c2e",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/9x16-duration-90-frame-79.png",
                "sha256": "2f18a4db4d7ed2a86c759e63de481ca354273f691f135f9c2f8489a0ea42d15e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 12.889322916666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/9x16-duration-900-frame-14.png",
                "sha256": "27ce63ef96fb6b332dfe386b296a348ffea8fe1f8d53186c2b4effc0cb0ab12d",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/9x16-duration-900-frame-99.png",
                "sha256": "7b8d647536e657b1867bfb226e3ef0882439a025f1f7f0a8d367534cdb2da131",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/9x16-duration-900-frame-792.png",
                "sha256": "27e3d204b6b77b86f68c58b72fd23e1afc7eb4db20e631f24d99736e9b723cfa",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/9x16-duration-900-frame-899.png",
                "sha256": "1bd1da11bd7bff7b35823b1cf067275422c352b3dd79b60c56e75a3720a518a7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 12.365342881944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/1x1-duration-90-frame-10.png",
                "sha256": "4eae3e68b0db6186bebaec9bdcaaccab7cd9b8e3a69c90b5c0ee9ba6b0e304f9",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/1x1-duration-90-frame-89.png",
                "sha256": "c73d8464c47ceb53418326a107fd0509750d02a3ed1b8796aa0cbcd220e4c844",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/1x1-duration-90-frame-79.png",
                "sha256": "c73d8464c47ceb53418326a107fd0509750d02a3ed1b8796aa0cbcd220e4c844",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 12.360894097222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/1x1-duration-900-frame-14.png",
                "sha256": "80410812a6a1265c8af30da646e5019813bf4f6681c6ce61aacb5b20e0bac23f",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/1x1-duration-900-frame-99.png",
                "sha256": "c73d8464c47ceb53418326a107fd0509750d02a3ed1b8796aa0cbcd220e4c844",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/1x1-duration-900-frame-792.png",
                "sha256": "c73d8464c47ceb53418326a107fd0509750d02a3ed1b8796aa0cbcd220e4c844",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-beauty-promo-sticker/1x1-duration-900-frame-899.png",
                "sha256": "c73d8464c47ceb53418326a107fd0509750d02a3ed1b8796aa0cbcd220e4c844",
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
        "note": "Stacked promo words and a discount starburst slap onto a polish bottle; rebrands distinct."
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
      "bundleSha256": "3cd4a1b2e6f0e077078698218ea592616f04b03cd8eaf3612880eacd79643856",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.083Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-promo-sticker/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-promo-sticker/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-promo-sticker/16x9/detail.mp4",
      "bg": "#f76088",
      "posterFrame": 99,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "dcb5b5bbb45c5bd2403464751719657fb87c6151c1f66e71f9d5c85742597656",
        "loop": "ef7e72942ae4d7097ee59995abd8df54d08f6c2398aafe8512162fd6ef3f9b69",
        "detail": "38e34d694f4c96b3369219e695ae871caac08f65a3ba262df18cea1bb160b73a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-promo-sticker/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-promo-sticker/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-promo-sticker/9x16/detail.mp4",
      "bg": "#f6537e",
      "posterFrame": 99,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "1659e6406df7fd3bf987c93c530a2971dd1a83303dee2921ef5d45aa6262b955",
        "loop": "5d7a571db4cccea6670e14f9a7f8a883f55a349a2f6e2af6eb1270dc10d7458d",
        "detail": "ee0ce37006720b31d9d93f70b16cfa0dfd6eb035d36cfd9c716d146ede56553f"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-promo-sticker/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-promo-sticker/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-promo-sticker/1x1/detail.mp4",
      "bg": "#f76088",
      "posterFrame": 99,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "380d157b7f22cd1b17caa868484b17e9c2a06437542d4a21613a4e19607de15d",
        "loop": "69f84f46c947c3bdb9e9d1def1e03e12c995b8e25df0617866d98af2c7d3130c",
        "detail": "ebdbe0ba42538c392ae270dbd710bfdf94ae8cd6c6bef282d61e8e4d90ef772e"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/3cd4a1b2e6f0e077078698218ea592616f04b03cd8eaf3612880eacd79643856/index.mjs",
    "sha256": "3cd4a1b2e6f0e077078698218ea592616f04b03cd8eaf3612880eacd79643856",
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
    "at": "2026-10-09T07:10:20.250Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
