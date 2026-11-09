// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/craft",
  "job": "data",
  "language": "glass",
  "mechanic": [
    "pour"
  ],
  "tags": [
    "pour",
    "beads",
    "funnel",
    "count",
    "glass"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 150,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 135,
      "out": 0
    },
    "markers": {
      "settled": 135
    },
    "beats": [
      0,
      30,
      65,
      100,
      135
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
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "value",
      "type": "text",
      "role": "metric"
    },
    {
      "key": "label",
      "type": "text",
      "role": "caption"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [],
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
    "sourceUrl": "21st first-party (Beads Fill the Count, 2026-10-09)"
  },
  "defaults": {
    "primary": "#C5A24C",
    "secondary": "#1A8C79",
    "color": "#EBF3E8",
    "background": "#122823",
    "fontFamily": "IBM Plex Mono",
    "seed": 31,
    "value": 120,
    "label": "Every one counts"
  },
  "fields": [
    {
      "key": "value",
      "label": "Value",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 180,
      "role": "metric"
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 30,
      "role": "caption"
    },
    {
      "key": "primary",
      "label": "Primary",
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
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1
    }
  ],
  "name": "Beads Fill the Count",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "funnel-pour",
    "bundleSha256": "5c22c96ee34a93c772bd647f27872af19ac7fff13cc4543b212fbc0c740be5f8",
    "sourceSnapshot": {
      "sha256": "c47c5ab6a2d4c2ace1617a542efbf08f9b9f6ed2dd9c899fd982fbfc0b4c400e",
      "files": 2133
    },
    "renderedAt": "2026-10-09T21:54:43.195Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/16x9-paper.png",
        "sha256": "8b65d4f335ddfac3a078d929db496329d58c39b08da3f2f981a63f2b573bca90"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/16x9-night.png",
        "sha256": "5c0a4d563b6b0618ca0d6e3d65f57612e08a2d3823a58216091fc843680dde12"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/16x9-color.png",
        "sha256": "b068e59d5c1f44383c291cd61bfbfc025dae1f68c321c3e6bfee60309cd3008c"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/9x16-paper.png",
        "sha256": "ac49aa910bf7b59fb0b138d30864b204b84688be7660d3687a752fe9a00e3eb5"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/9x16-night.png",
        "sha256": "d87613e008864a88a6a094932cf0a286cf8fe6d3c306237fe994a754c546e565"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/9x16-color.png",
        "sha256": "c47772c2116cd2cbc1ea1e47cbfa975fe31e8d2385ffc8a65ce7191c1996e4f1"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/1x1-paper.png",
        "sha256": "24b1c8914aac2a0a617d29514bf9fd97bbb6af6254d2bb06db8ef5cd48f8bd8e"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/1x1-night.png",
        "sha256": "aa63cf9ce9fcc00ad0d744f49fc4b8e38ac715810e0342afc8a89bca3e9a7478"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/1x1-color.png",
        "sha256": "3809da4c5de4f1f10d950608d0c8e76a07de51149213cf4dff05902085c031d5"
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
          "funnel-pour--16x9",
          "funnel-pour--9x16",
          "funnel-pour--1x1"
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
            "paperNight": 46.517822265625,
            "paperColor": 28.90134006076389,
            "region": {
              "left": 362,
              "top": 126,
              "width": 1122,
              "height": 693
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 57.821804470486114,
            "paperColor": 42.84605577256944,
            "region": {
              "left": 195,
              "top": 224,
              "width": 690,
              "height": 1555
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 41.042209201388886,
            "paperColor": 26.625108506944443,
            "region": {
              "left": 202,
              "top": 126,
              "width": 785,
              "height": 692
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
            "occupancy": 0.5229001322751324,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.531425677910053,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.47316778273809534,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7333240491412616,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7328524581128749,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7253070016586883,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6600391070923112,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.556618966745363,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5717536214302823,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.857313368055555,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 5.833550347222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/16x9-duration-150-frame-18.png",
                "sha256": "84658ee5b0f7c7f30177f718a1ea9ae049bf1b3d60561c1923d7be3b73e89231",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/16x9-duration-150-frame-135.png",
                "sha256": "9d6f7a4893580ce272049d39096119d1ed8fd48f8a91c70539ebfe952f592b98",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/16x9-duration-150-frame-132.png",
                "sha256": "6b7fcb47243f69f4726ff0466e8b72cb4b8ec9f55cba0e7a2c73a003fbce3a8a",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/16x9-duration-150-frame-149.png",
                "sha256": "7afbede65b5c911398783c45dfb517da49fdb28a118ab8a20332d3ffc5a7a55c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 5.857313368055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/16x9-duration-600-frame-20.png",
                "sha256": "92e235301d2e4931fd4194e3eeb7b42bb5c4f0b9b9bf34fac27bc704244fa194",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/16x9-duration-600-frame-135.png",
                "sha256": "3f37426ca3397ed6f445ddf4460b887404a9d1d9d10e56665c3e28097eea31e1",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/16x9-duration-600-frame-528.png",
                "sha256": "0c12d9702b8d094f653a391f022568839068e5c900ce97b8d1f6f66f6949bcb5",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/16x9-duration-600-frame-599.png",
                "sha256": "c35b6f9f32206239c9ee78010cf0bd243144f2234cddaaa6957d51e6778954ea",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 14.73904079861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/9x16-duration-150-frame-18.png",
                "sha256": "a05a203369ac14f1342df67d870d0f09397d3856703735417404fd83e34a189c",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/9x16-duration-150-frame-135.png",
                "sha256": "2feff2147a4400af17583874ff7ebbaff1a8c2c454acefe4a6b0466362dc484e",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/9x16-duration-150-frame-132.png",
                "sha256": "a9fd795366626a4d16355fb24dff80cb6afdc428884a5fc393b1e24153b6c24b",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/9x16-duration-150-frame-149.png",
                "sha256": "8b26619c5e408c49834f0708c9dbce73865712077eb8dc79d9fddb849d5ce55c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 14.825086805555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/9x16-duration-600-frame-20.png",
                "sha256": "03d0ad8c6e5859e4eba71edca2f04b372b01df49c9269ac4d20765165d57c822",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/9x16-duration-600-frame-135.png",
                "sha256": "8a2473433ed5cf20f8aef2348fdb3081a44960e3b82d64a3d04bb9b793197b37",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/9x16-duration-600-frame-528.png",
                "sha256": "8c4ba4756af68b5adc2b6706872cf06252bf9045bb0f26de5cca480929005536",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/9x16-duration-600-frame-599.png",
                "sha256": "1e4b6fcfdecf21261b4c205ef228112508061b38ccae7e73ff489a83e679ee03",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 8.596571180555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/1x1-duration-150-frame-18.png",
                "sha256": "d4703506d616a55b932b57741ac2f80e358a12a8062e08d262df428bbddd0e2b",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/1x1-duration-150-frame-135.png",
                "sha256": "9907cf09fc2d8184ffc74a3e3b0ddf6bb2d0125957c841e60a48e54ff13fc0e0",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/1x1-duration-150-frame-132.png",
                "sha256": "153e8a8aaa7cc61bb91e29c6e62c843f03ef3acfb3f2a3839b17d29effda2b27",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/1x1-duration-150-frame-149.png",
                "sha256": "9907cf09fc2d8184ffc74a3e3b0ddf6bb2d0125957c841e60a48e54ff13fc0e0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 8.651801215277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/1x1-duration-600-frame-20.png",
                "sha256": "4821d81355ecb1fdfa7b1722e9a1f80c7588b7e6d3e6feec7e3b7f1045a27384",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/1x1-duration-600-frame-135.png",
                "sha256": "9907cf09fc2d8184ffc74a3e3b0ddf6bb2d0125957c841e60a48e54ff13fc0e0",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/1x1-duration-600-frame-528.png",
                "sha256": "9907cf09fc2d8184ffc74a3e3b0ddf6bb2d0125957c841e60a48e54ff13fc0e0",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/funnel-pour/1x1-duration-600-frame-599.png",
                "sha256": "9907cf09fc2d8184ffc74a3e3b0ddf6bb2d0125957c841e60a48e54ff13fc0e0",
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
        "note": "TitleMatches: The claimed title is 'Beads Fill the Count' and the first four images (poster then three motion chronologically) clearly show beads entering a vessel, incrementing the count beside it from 0 to 44 mid-way and then to 120 full, which matches the title's described process and numeration. Motion is implicit in the sequencing of beads \"filling\" and the count changing, supporting the title's claim directly through visible evidence rather than textual assertion.\n\nnoBakedHeading: The only prominent text is the editable slot ('120', 'Every one counts') and count values. There are no decorative or static block titles, categories, or language labels baked into the composition.\n\nBrandAdherence: Images five through seven are clearly the same poster under three different, legible brand palettes: one on a light background with terracotta reds, one on a dark background with muted violets, and one on a pale green with blues and purples. Each rebrand is visually distinct, matches supplied brand color tokens, content remains visible and text is legible across all variants. No unexplained fixed block colors remain; shapes and vessel accents adapt appropriately to each palette.\n\nLanguageAdherence: The visual approach is consistent with the provided language card: overlapping translucent panels make up the vessel, with visible edge highlights adapting to luminance per palette, and visual depth is maintained. Type roles (large sans numerals, sans serif body) and count transitions remain sensible and consistent across all palettes and motion samples. No evidence of forbidden elements (e.g., generic opaque cards, neon glow, blurred text) appears. All images keep material, parallax (by visual construction), and motion verbs consistent with the evidence. The language card is present and fulfilled."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 29,
        "compared": 29,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "5c22c96ee34a93c772bd647f27872af19ac7fff13cc4543b212fbc0c740be5f8",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T22:37:02.571Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "funnel-pour",
      "vsPositive": 0.9166666666666666,
      "vsNegative": 1,
      "fakeVotes": 0.041666666666666664,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.875,
          "vsNegative": 1
        },
        "gemini": {
          "vsPositive": 0.875,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "759934f179ed9022cc18fddfa37235b92e5d0554e1a048fe7a3ae2cb5552d879",
      "bundleSha256": "5c22c96ee34a93c772bd647f27872af19ac7fff13cc4543b212fbc0c740be5f8",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/funnel-pour/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/funnel-pour/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/funnel-pour/16x9/detail.mp4",
      "bg": "#122823",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e72a5274e1e932335eb8339ab21d0b377d0f30b7322bf5ceaa72b5e8a7937a0d",
        "loop": "87f492f4c5a13d141ce23f38098b9106b24fc6e74bf1dd1c9c0afc762cc0b22a",
        "detail": "0393ccd47b681e70c43c3a045f1b30e53b1a6c23755802791d41884b69a21547"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/funnel-pour/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/funnel-pour/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/funnel-pour/9x16/detail.mp4",
      "bg": "#122823",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0a93a1c36d209c1af691e57f6272c4a4317b4bdb16fac1066c7de6c11f31e579",
        "loop": "fff4827e94c9150c21b489bac873c62ecbaea54f5a061bb1a5d2b07af79b971b",
        "detail": "ff8bb413c374a113f48feaa066b7e4311aa8f87649201f9ab63025fe505fe5d6"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/funnel-pour/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/funnel-pour/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/funnel-pour/1x1/detail.mp4",
      "bg": "#122823",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f728fd8b729fff602fd82988c678ad91c1bf877c65c103cadcc39010be487fa9",
        "loop": "5d27f397e078b9a7b309b7b8db6b40d63c70e8044826f63b12f90a321be39255",
        "detail": "59815dde1cb568c56ca5906294f7164d04744a46bd982f1380e6a8f5020210c9"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/5c22c96ee34a93c772bd647f27872af19ac7fff13cc4543b212fbc0c740be5f8/index.mjs",
    "sha256": "5c22c96ee34a93c772bd647f27872af19ac7fff13cc4543b212fbc0c740be5f8",
    "bytes": 160458,
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
    "at": "2026-10-09T22:41:08.127Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
