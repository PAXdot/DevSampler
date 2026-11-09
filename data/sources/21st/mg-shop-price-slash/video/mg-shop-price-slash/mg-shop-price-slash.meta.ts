// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "cta/motion-gallery",
  "job": "cta",
  "language": "editorial",
  "mechanic": [
    "tag-swing-price-strike"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "cta",
    "tag-swing-price-strike",
    "sale",
    "price",
    "discount"
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
      "key": "newPrice",
      "type": "text",
      "maxChars": 6,
      "role": "value"
    },
    {
      "key": "oldPrice",
      "type": "text",
      "maxChars": 6,
      "role": "value"
    },
    {
      "key": "badge",
      "type": "text",
      "maxChars": 5,
      "role": "label"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 32,
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
      "target": "tag-swing-price-strike",
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
    "ink": "#1C1814",
    "accent": "#E0391C",
    "secondary": "#D2AE7C",
    "paper": "#EFE6D7",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "newPrice": "$179",
    "oldPrice": "$249",
    "badge": "-28%",
    "caption": "only 120 pairs at this price"
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
      "key": "newPrice",
      "label": "New price",
      "type": "text",
      "max": 6,
      "role": "value"
    },
    {
      "key": "oldPrice",
      "label": "Old price",
      "type": "text",
      "max": 6,
      "role": "value"
    },
    {
      "key": "badge",
      "label": "Badge",
      "type": "text",
      "max": 5,
      "role": "label"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 32,
      "role": "caption"
    }
  ],
  "name": "Price Tag Slash",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-shop-price-slash",
    "bundleSha256": "b02ee4ffc47c0b09780072c98104f0236cec7e2746431588120ac8b3ad26882e",
    "sourceSnapshot": {
      "sha256": "b342da95c90071ffb99c060c999d9fca49ed6722762d7db99795613749872dfe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T07:48:58.295Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/16x9-paper.png",
        "sha256": "39bab8f9c3d50efa2224f76255564b12c22481584a898a3f81903b2b7b735770"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/16x9-night.png",
        "sha256": "09db2e39d256ea36e881cd6c37672dcd4db54ce0e928bbc9b2e055539fb29e7e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/16x9-color.png",
        "sha256": "33c8b8977c34247738bc5f061cae64079384446b4c682187c2c715688209a79b"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/9x16-paper.png",
        "sha256": "cefd0037068cd771e48ab364b4c79586810e5993f1c2ab9e93337d9ecc3c3703"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/9x16-night.png",
        "sha256": "ae19db1902396582623c4d610655996e22caf7b73a98ab8e3238f68ef796ab95"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/9x16-color.png",
        "sha256": "a1d7b1aa9b816ca084f431130ce6e65efaf7b18f0ae84a93323787b7c5cf57ad"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/1x1-paper.png",
        "sha256": "725246c0e1da00d84f9f1091443b9f116e9d139b855aff41bc094db013f9cea3"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/1x1-night.png",
        "sha256": "6b40fbeb30d74fdcd714cce17bae209ff9eaee298e6d14d5e6835f10d4cfcbf4"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/1x1-color.png",
        "sha256": "88520af93fdfa6aca6ffb56620cef0465e7ec198110a25e1b40a2ab55b1f94e5"
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
          "mg-shop-price-slash--16x9",
          "mg-shop-price-slash--9x16",
          "mg-shop-price-slash--1x1"
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
            "paperNight": 23.973225911458332,
            "paperColor": 9.973388671875,
            "region": {
              "left": 80,
              "top": 70,
              "width": 1768,
              "height": 892
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 28.684950086805557,
            "paperColor": 12.961018880208334,
            "region": {
              "left": 86,
              "top": 88,
              "width": 945,
              "height": 1677
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 21.87421332465278,
            "paperColor": 8.936686197916666,
            "region": {
              "left": 76,
              "top": 79,
              "width": 959,
              "height": 903
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
            "occupancy": 1.074237887027239,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0778629867584897,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0766546201814062,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0805483217592595,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0831318204365081,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.082485945767196,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0487090926905744,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0522047896662097,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0510395573409979,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.384006076388889,
        "frames": [
          14,
          99,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 5.339626736111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/16x9-duration-90-frame-10.png",
                "sha256": "5e782e93450507a4973245461c78c15a6073e2316a40b97aab7866d43ed266f1",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/16x9-duration-90-frame-89.png",
                "sha256": "8617a58d4d9884e378320f25e7d49201d123db77062d15b278a33411b964f577",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/16x9-duration-90-frame-79.png",
                "sha256": "4bd3a7c245d1c030fb14116f88ea5ed8abeff0c97aa3e8cbc6bfb43ee1dd1e44",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 5.384006076388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/16x9-duration-900-frame-14.png",
                "sha256": "e1360baec71180ca45287e86fee19826211a09b1be9c6303585d82a3d618e258",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/16x9-duration-900-frame-99.png",
                "sha256": "d2e0155fe266a4dc8229c0630e39b8bf4305f30a483f361939af308fc96387cd",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/16x9-duration-900-frame-792.png",
                "sha256": "d2e0155fe266a4dc8229c0630e39b8bf4305f30a483f361939af308fc96387cd",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/16x9-duration-900-frame-899.png",
                "sha256": "8617a58d4d9884e378320f25e7d49201d123db77062d15b278a33411b964f577",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 6.103515625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/9x16-duration-90-frame-10.png",
                "sha256": "67daa384cca178ced08d066901c11aa8f974b0a5fa87ccd2b353309c80c05b50",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/9x16-duration-90-frame-89.png",
                "sha256": "ce28faf41a30cd23908c1d1abaffcff1ec2f057984249bb58fc4e3254f699799",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/9x16-duration-90-frame-79.png",
                "sha256": "7586a2487ac9f57f3fb91e1afe308aba5d34be7adb53e2b577ba2fc319f3b4b4",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 6.156684027777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/9x16-duration-900-frame-14.png",
                "sha256": "b60763f5778829fd9955b09a481a3254f13915e1e512be9a0e696489e86b0885",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/9x16-duration-900-frame-99.png",
                "sha256": "ce28faf41a30cd23908c1d1abaffcff1ec2f057984249bb58fc4e3254f699799",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/9x16-duration-900-frame-792.png",
                "sha256": "7586a2487ac9f57f3fb91e1afe308aba5d34be7adb53e2b577ba2fc319f3b4b4",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/9x16-duration-900-frame-899.png",
                "sha256": "7586a2487ac9f57f3fb91e1afe308aba5d34be7adb53e2b577ba2fc319f3b4b4",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 5.017035590277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/1x1-duration-90-frame-10.png",
                "sha256": "b580621fd688f690d59664acb3e7a9f32f1a4ec555951d4af527de7fc2df6d19",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/1x1-duration-90-frame-89.png",
                "sha256": "b0efc7240c5b5fb7729300bb73aeb4bf1d238cf00cb45b6b5e29080466243c2b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/1x1-duration-90-frame-79.png",
                "sha256": "dd67e10aa21a9e8919d9487ac02f25047a1764af9a4bd8cc90905f8cced140f8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 5.056966145833333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/1x1-duration-900-frame-14.png",
                "sha256": "8e4c6350ab993e32771b5dc89859728a69eb701c766fcec75ba3eabea9591d93",
                "alphaMass": 587520
              },
              {
                "frame": 99,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/1x1-duration-900-frame-99.png",
                "sha256": "b0efc7240c5b5fb7729300bb73aeb4bf1d238cf00cb45b6b5e29080466243c2b",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/1x1-duration-900-frame-792.png",
                "sha256": "4f76a29c0d4d6c222781df8b6bd243e9d4fb14c13a1379738262ff61b3e05122",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-shop-price-slash/1x1-duration-900-frame-899.png",
                "sha256": "b0efc7240c5b5fb7729300bb73aeb4bf1d238cf00cb45b6b5e29080466243c2b",
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
        "note": "Old price is slashed to a new one on a hanging tag with a discount burst; rebrands recolor the tag."
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
      "bundleSha256": "b02ee4ffc47c0b09780072c98104f0236cec7e2746431588120ac8b3ad26882e",
      "selectedBy": "serafim (repo owner) on 2026-10-09; visual review by claude",
      "at": "2026-10-09T07:49:52.850Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-price-slash/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-price-slash/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-price-slash/16x9/detail.mp4",
      "bg": "#e3dbcd",
      "posterFrame": 99,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e8611566cb823846af46330b1572653b2db5ec45c17e37956bdd5f327fb3bbdd",
        "loop": "c4350f378eb7bad94c60225855a64df5e10444d653d0390060c950ff3fc83239",
        "detail": "bf3ce4a13bbdede4b7a0ee5aa0655b4bef507a9f6e2a27c6bebf4f2a58c482a4"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-price-slash/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-price-slash/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-price-slash/9x16/detail.mp4",
      "bg": "#e3dbcd",
      "posterFrame": 99,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "339803a2de2842627451a95554d830c789675b7b9cd8fbf70baeac580d991723",
        "loop": "e2d19274e52942d2a8d5c617132fb4f35679c53597038e8dabc95ff06062a38b",
        "detail": "24e429714d8938ec1dc127108e24f588b6266ed85eab8095f9466c6b7f6faba5"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-price-slash/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-price-slash/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-price-slash/1x1/detail.mp4",
      "bg": "#e3dbcd",
      "posterFrame": 99,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2102563b9a5bbb47d2f4bcdc7370ae57890d61274546e74c0203a20585147c51",
        "loop": "f84502efd732613669fdc9432877541816130f54ecf8ba2527f59d7855eb6e26",
        "detail": "97ef4ab734879a701b870ffc01bed5a7cef9d48c92eb176023407e6584b178c2"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/b02ee4ffc47c0b09780072c98104f0236cec7e2746431588120ac8b3ad26882e/index.mjs",
    "sha256": "b02ee4ffc47c0b09780072c98104f0236cec7e2746431588120ac8b3ad26882e",
    "bytes": 304516,
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
    "at": "2026-10-09T08:03:14.753Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
