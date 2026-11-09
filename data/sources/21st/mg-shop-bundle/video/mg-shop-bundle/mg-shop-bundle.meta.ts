// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "glass",
  "mechanic": [
    "items-drop-into-bundle-slots"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "items-drop-into-bundle-slots",
    "bundle",
    "pricing",
    "upsell"
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
      "key": "title",
      "type": "text",
      "maxChars": 28,
      "role": "headline"
    },
    {
      "key": "deal",
      "type": "text",
      "maxChars": 7,
      "role": "value"
    },
    {
      "key": "save",
      "type": "text",
      "maxChars": 16,
      "role": "label"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 18,
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
      "target": "items-drop-into-bundle-slots",
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
    "ink": "#221B3A",
    "accent": "#7A64D6",
    "secondary": "#FFAA82",
    "paper": "#F3E7F5",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "title": "build your weekend kit",
    "deal": "$109",
    "save": "you save $33",
    "cta": "add kit to bag"
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
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 28,
      "role": "headline"
    },
    {
      "key": "deal",
      "label": "Deal",
      "type": "text",
      "max": 7,
      "role": "value"
    },
    {
      "key": "save",
      "label": "Save",
      "type": "text",
      "max": 16,
      "role": "label"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 18,
      "role": "cta"
    }
  ],
  "name": "Bundle Builder Kit",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-shop-bundle",
    "bundleSha256": "d0f7ac5418e31d88b2aa6e12da61fa3f008095ea1ecaa174e8cbed729d523389",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:08:09.974Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/16x9-paper.png",
        "sha256": "af4160c91f2785f1df962b39013e91e425739121875ab949c560fd19788b02e5"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/16x9-night.png",
        "sha256": "e35fc92c934fa92f1b383513d0e8f51abe11bed68eaf7326c553798c20cc21e2"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/16x9-color.png",
        "sha256": "643ec67f7f6f8af17bfe01f718d41c1519b4c49afd5c331ede14e2e057974e31"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/9x16-paper.png",
        "sha256": "caf0277667782fb019eae572ef34b56d28b496d289f4426af34eced6ba46f298"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/9x16-night.png",
        "sha256": "1c34b3e3ada5d81a10bfda671dda6e279d0e746ded1d88e8da3d3b32985bb147"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/9x16-color.png",
        "sha256": "caf2219df8a9e11e838e3e4c4bf29611bfce73bd14981538ae264ccf3445f39d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/1x1-paper.png",
        "sha256": "21a994d3010202abf4e536dc728e86340df5c42c2645a66ff8bad293016df3d4"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/1x1-night.png",
        "sha256": "541ac92ea5b83e5294f909a55d95b3cd7a230a581f821519cb4c42293a6a4bf3"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/1x1-color.png",
        "sha256": "79b05aa8781f684b3790579fa0ed1ea9af23d995c9e621b81d6eb8876feba4e0"
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
          "mg-shop-bundle--16x9",
          "mg-shop-bundle--9x16",
          "mg-shop-bundle--1x1"
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
            "paperNight": 92.78512912326389,
            "paperColor": 17.446370442708332,
            "region": {
              "left": 192,
              "top": 71,
              "width": 1536,
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
            "paperNight": 71.03740776909723,
            "paperColor": 18.29584418402778,
            "region": {
              "left": 6,
              "top": 173,
              "width": 1068,
              "height": 1624
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 75.00442165798611,
            "paperColor": 15.65383572048611,
            "region": {
              "left": 27,
              "top": 75,
              "width": 1026,
              "height": 970
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
            "occupancy": 0.9920634920634923,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9941630973377007,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9941630973377007,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.181774310804569,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1839641334929036,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1854240152851268,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2042548500881836,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2079947719828674,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2092414126144286,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.508138020833334,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 8.459852430555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/16x9-duration-90-frame-10.png",
                "sha256": "59f169b2061babdd3302c3370fa90c872b0790dfecf8da92303a7ddb38f90f52",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/16x9-duration-90-frame-89.png",
                "sha256": "c49971f9fcd73302ae33c42d274726faf71958597d72245f8c53865663cd4830",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/16x9-duration-90-frame-79.png",
                "sha256": "c49971f9fcd73302ae33c42d274726faf71958597d72245f8c53865663cd4830",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 8.508138020833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/16x9-duration-900-frame-13.png",
                "sha256": "b2ccde9518472186d08b6b888be6217885d2286b3581576158a7c2ad7e439264",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/16x9-duration-900-frame-90.png",
                "sha256": "c49971f9fcd73302ae33c42d274726faf71958597d72245f8c53865663cd4830",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/16x9-duration-900-frame-792.png",
                "sha256": "c49971f9fcd73302ae33c42d274726faf71958597d72245f8c53865663cd4830",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/16x9-duration-900-frame-899.png",
                "sha256": "c49971f9fcd73302ae33c42d274726faf71958597d72245f8c53865663cd4830",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 13.806640625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/9x16-duration-90-frame-10.png",
                "sha256": "7008698b766ff940e3949142988c476ae905ee78be72b3886edb355d3af1fb84",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/9x16-duration-90-frame-89.png",
                "sha256": "25e9f2ec4cfa7a9c7a3ff9b39b34f81c743299196b57dd03c15b1ab0213695e1",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/9x16-duration-90-frame-79.png",
                "sha256": "25e9f2ec4cfa7a9c7a3ff9b39b34f81c743299196b57dd03c15b1ab0213695e1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 13.818359375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/9x16-duration-900-frame-13.png",
                "sha256": "8b0fe7ac9278ac1cacd397b771f65b468b0753ea2e6adf4b8df90977c4f5b318",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/9x16-duration-900-frame-90.png",
                "sha256": "25e9f2ec4cfa7a9c7a3ff9b39b34f81c743299196b57dd03c15b1ab0213695e1",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/9x16-duration-900-frame-792.png",
                "sha256": "25e9f2ec4cfa7a9c7a3ff9b39b34f81c743299196b57dd03c15b1ab0213695e1",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/9x16-duration-900-frame-899.png",
                "sha256": "25e9f2ec4cfa7a9c7a3ff9b39b34f81c743299196b57dd03c15b1ab0213695e1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 12.922309027777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/1x1-duration-90-frame-10.png",
                "sha256": "68488f326306866cf95cf527e9d49a252af60220c564eb593549cda8b5dd66f0",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/1x1-duration-90-frame-89.png",
                "sha256": "d7bc1f0158e210392ef720aeff88c5b7cb4729ddf3a4d4e1909168220d58e831",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/1x1-duration-90-frame-79.png",
                "sha256": "d7bc1f0158e210392ef720aeff88c5b7cb4729ddf3a4d4e1909168220d58e831",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 12.901909722222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/1x1-duration-900-frame-13.png",
                "sha256": "7cbbae7560eb4bcea9129c57026373035f93541f583a9017ca74052529341633",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/1x1-duration-900-frame-90.png",
                "sha256": "d7bc1f0158e210392ef720aeff88c5b7cb4729ddf3a4d4e1909168220d58e831",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/1x1-duration-900-frame-792.png",
                "sha256": "d7bc1f0158e210392ef720aeff88c5b7cb4729ddf3a4d4e1909168220d58e831",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-shop-bundle/1x1-duration-900-frame-899.png",
                "sha256": "d7bc1f0158e210392ef720aeff88c5b7cb4729ddf3a4d4e1909168220d58e831",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "product-ui",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Three products snap into a kit with a slashed bundle price and CTA; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 76,
        "compared": 76,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "d0f7ac5418e31d88b2aa6e12da61fa3f008095ea1ecaa174e8cbed729d523389",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.088Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-bundle/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-bundle/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-bundle/16x9/detail.mp4",
      "bg": "#d3c5ed",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0d8e4c5a86e502b0602bd495681bce5cfa8827714147211b95a6059d132b97e3",
        "loop": "0dc080ce191afcb7f31683188bef9990c5b92a274347524577eefdb288ea96b4",
        "detail": "8ea2b8c960b5601c03d3b2ad07c5ce868bf600a8b9e5f777cc24235e9b367973"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-bundle/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-bundle/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-bundle/9x16/detail.mp4",
      "bg": "#d3c5ed",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ea4e2c62ed7adb220189830d157cb20ccdf527e506f64027827933453f8b2c90",
        "loop": "c51a84e2e1b50068673d9972664c36219e9c36dd0ae2e81cedff16f86f472cc1",
        "detail": "c52d78033425f2e04e506b158075d15f545c8318cb1b6ed103cac92204f1bc6a"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-shop-bundle/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-shop-bundle/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-shop-bundle/1x1/detail.mp4",
      "bg": "#d3c5ed",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f7397102e65c234eb27bb1c7d0b56119e27104b9bf6eaaf0f26ab26303deab3f",
        "loop": "6319ee07d4c0d369972ea8e254a8e2b5446b2819c662653203e9424b46f045b3",
        "detail": "257963cc17fef6162cec0ccd53154b74defa17b192f00c1d468e70055f3f4a63"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d0f7ac5418e31d88b2aa6e12da61fa3f008095ea1ecaa174e8cbed729d523389/index.mjs",
    "sha256": "d0f7ac5418e31d88b2aa6e12da61fa3f008095ea1ecaa174e8cbed729d523389",
    "bytes": 304186,
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
    "at": "2026-10-09T07:13:15.789Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
