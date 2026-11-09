// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/craft",
  "job": "product-ui",
  "language": "glass",
  "mechanic": [
    "refract"
  ],
  "tags": [
    "fresnel",
    "lens",
    "refraction",
    "screenshot"
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
      20,
      45,
      75,
      110,
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
      "key": "screenshot",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 40,
      "lines": 2,
      "role": "body"
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
    "sourceUrl": "21st first-party (Fresnel Lens Pass, 2026-10-09)"
  },
  "defaults": {
    "screenshot": "",
    "caption": "See the bigger picture",
    "primary": "#4F948D",
    "secondary": "#C3E3C9",
    "color": "#F0EEE1",
    "background": "#142523",
    "fontFamily": "DM Sans"
  },
  "fields": [
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 40,
      "role": "body"
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
    }
  ],
  "name": "Fresnel Lens Pass",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "fresnel-lens-pass",
    "bundleSha256": "74b2df2b363121f4950e116079dc0e4ae7710c6130df098e0b3c40cb8fe741e7",
    "sourceSnapshot": {
      "sha256": "8c8648af8fd3e1e355643a057cccbaeed8f2d74a734b1f517c02e3af0d549bea",
      "files": 2016
    },
    "renderedAt": "2026-10-09T19:54:46.909Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/16x9-paper.png",
        "sha256": "0dd0468a54bb5bbe2d69ff056700dcdc85f98c8814f7a2f161c3c8fa7b42c8ef"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/16x9-night.png",
        "sha256": "309c9d9a1405641a8bd6519435c38c79560b5e03c443b32946ce84b600a51615"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/16x9-color.png",
        "sha256": "2198206110dc3b2463b778734d0f6522ed176b971b7686884308a28e3471f196"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/9x16-paper.png",
        "sha256": "ad53e2ee1904e0086e8571a1690214956c7a218a54b8f74d44403a8e1657955c"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/9x16-night.png",
        "sha256": "a72708f8884b0946aee273372b83320fd1f891694d095782b261787ca57e007c"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/9x16-color.png",
        "sha256": "b92e7b1ea6bc1865c760be3a963157061566ddd82d271575f779e4d8744cfa56"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/1x1-paper.png",
        "sha256": "4cb587baa523a90e6c8e98c2ef0b6b6e5b7248d92283cc6df12a6c3c00364284"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/1x1-night.png",
        "sha256": "80d359f651f63f3248c9445973becfa94bf1aa707758088b377496fabb8c2846"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/1x1-color.png",
        "sha256": "ac79c945db7b62b10ba5c76a54d2b3adbb88ac74c0e82d0dc6d38fc9fd4e6b51"
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
          "fresnel-lens-pass--16x9",
          "fresnel-lens-pass--9x16",
          "fresnel-lens-pass--1x1"
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
            "paperNight": 6.296685112847222,
            "paperColor": 3.3099772135416665,
            "region": {
              "left": 407,
              "top": 119,
              "width": 1106,
              "height": 821
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 12.694254557291666,
            "paperColor": 4.790120442708333,
            "region": {
              "left": 86,
              "top": 542,
              "width": 908,
              "height": 1227
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 7.750732421875,
            "paperColor": 3.4589029947916665,
            "region": {
              "left": 86,
              "top": 181,
              "width": 908,
              "height": 759
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
            "occupancy": 0.6206042248432296,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6206042248432296,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.611533273932001,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7000215209540608,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7614595799739651,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6869892054043841,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8373779896046212,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8373779896046212,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8241388119033624,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 0.4214409722222222,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 0.4214409722222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/16x9-duration-150-frame-18.png",
                "sha256": "f545bd2b02178ba4ab3987f14bc114e2a49212b483ef40d18f92fa6ab2f41dbb",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/16x9-duration-150-frame-135.png",
                "sha256": "4168c1587a33fd952e1326bf85542369597db9038abbaa8c2a828c839e0a4eaf",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/16x9-duration-150-frame-132.png",
                "sha256": "4168c1587a33fd952e1326bf85542369597db9038abbaa8c2a828c839e0a4eaf",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/16x9-duration-150-frame-149.png",
                "sha256": "4168c1587a33fd952e1326bf85542369597db9038abbaa8c2a828c839e0a4eaf",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 0.4214409722222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/16x9-duration-600-frame-20.png",
                "sha256": "f545bd2b02178ba4ab3987f14bc114e2a49212b483ef40d18f92fa6ab2f41dbb",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/16x9-duration-600-frame-135.png",
                "sha256": "4168c1587a33fd952e1326bf85542369597db9038abbaa8c2a828c839e0a4eaf",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/16x9-duration-600-frame-528.png",
                "sha256": "4168c1587a33fd952e1326bf85542369597db9038abbaa8c2a828c839e0a4eaf",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/16x9-duration-600-frame-599.png",
                "sha256": "4168c1587a33fd952e1326bf85542369597db9038abbaa8c2a828c839e0a4eaf",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 1.2850477430555556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/9x16-duration-150-frame-18.png",
                "sha256": "d83f566a6567304233e62f47e86c62fcc957a29884a276555b0cc5a0ba604cd2",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/9x16-duration-150-frame-135.png",
                "sha256": "1c9c300dec23f3766a2c9d5e7a21cb90a8895273a1cb0bee4107604cba86163f",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/9x16-duration-150-frame-132.png",
                "sha256": "1c9c300dec23f3766a2c9d5e7a21cb90a8895273a1cb0bee4107604cba86163f",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/9x16-duration-150-frame-149.png",
                "sha256": "1c9c300dec23f3766a2c9d5e7a21cb90a8895273a1cb0bee4107604cba86163f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 1.2904730902777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/9x16-duration-600-frame-20.png",
                "sha256": "9a9c4fdeb9b29c2d8e01930f58df3e0488f8ed17d57b9a6b20f556caab306e9f",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/9x16-duration-600-frame-135.png",
                "sha256": "1c9c300dec23f3766a2c9d5e7a21cb90a8895273a1cb0bee4107604cba86163f",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/9x16-duration-600-frame-528.png",
                "sha256": "1c9c300dec23f3766a2c9d5e7a21cb90a8895273a1cb0bee4107604cba86163f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/9x16-duration-600-frame-599.png",
                "sha256": "1c9c300dec23f3766a2c9d5e7a21cb90a8895273a1cb0bee4107604cba86163f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 0.8741319444444444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/1x1-duration-150-frame-18.png",
                "sha256": "f7d19837a59b4538608aff3f37dcacaffb965d419afd902d7a6ebea7091e0669",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/1x1-duration-150-frame-135.png",
                "sha256": "dc2e46e2cda0e4c93d26acb0b3f780076da58df5c490883cb123b36a01b9b726",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/1x1-duration-150-frame-132.png",
                "sha256": "dc2e46e2cda0e4c93d26acb0b3f780076da58df5c490883cb123b36a01b9b726",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/1x1-duration-150-frame-149.png",
                "sha256": "dc2e46e2cda0e4c93d26acb0b3f780076da58df5c490883cb123b36a01b9b726",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 0.9382595486111112,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/1x1-duration-600-frame-20.png",
                "sha256": "9b3e78230a5916141423147969660e9eef94af59332cd7ec7868b054a37cf472",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/1x1-duration-600-frame-135.png",
                "sha256": "dc2e46e2cda0e4c93d26acb0b3f780076da58df5c490883cb123b36a01b9b726",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/1x1-duration-600-frame-528.png",
                "sha256": "dc2e46e2cda0e4c93d26acb0b3f780076da58df5c490883cb123b36a01b9b726",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/fresnel-lens-pass/1x1-duration-600-frame-599.png",
                "sha256": "dc2e46e2cda0e4c93d26acb0b3f780076da58df5c490883cb123b36a01b9b726",
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
        "note": "1. TitleMatches: The claimed title is 'Fresnel Lens Pass.' The visible subject is a UI wireframe/poster. In the motion sequence, a semitransparent, refractive lens with visible concentric rings (identifying it as Fresnel-inspired) floats over the content (image 3), refracting/altering the view underneath. This matches the title, as a Fresnel lens effect is clearly depicted and animated, supporting both structure and motion expectations in the context of 'pass.'\n\n2. noBakedHeading: There is no decorative block title or unrelated category heading visible. The only prominent heading is 'See the bigger picture,' which exactly matches the editable named-slot caption. There are no extraneous or unexplained headings in any view.\n\n3. brandAdherence: Three palette variants are supplied (images 5-7), each aligned with the corresponding primary/secondary/background/text colors described. The layouts, iconography, and material shapes persist with appropriate palette changes. All required text is legible, color swaps are present for all main roles, and no unexplained fixed block colors remain.\n\n4. languageAdherence: The language card sets out a requirement for visible Fresnel lens-like depth, sharp type with tabular numerals (consistent with sans), edge highlights in line with brand luminance (which is maintained across palettes), and steady refractive/parallax motion with a persistent subject. All these criteria are met across the original and variant posters, as well as the motion samples. There is consistent use of sharp, sans-serif type, no generic card, no unmotivated neon or blurred type, and the lens edges vary as palette changes (indicating correct accent role assignment). Motion remains coherent with the card's support for parallax, float, and refract verbs."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 74,
        "compared": 74,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "74b2df2b363121f4950e116079dc0e4ae7710c6130df098e0b3c40cb8fe741e7",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T20:06:11.770Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "fresnel-lens-pass",
      "vsPositive": 0.6666666666666666,
      "vsNegative": 0.9166666666666666,
      "fakeVotes": 0.20833333333333334,
      "perModel": {
        "claude": {
          "vsPositive": 0.5,
          "vsNegative": 0.875
        },
        "gpt": {
          "vsPositive": 0.75,
          "vsNegative": 0.875
        },
        "gemini": {
          "vsPositive": 0.75,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "f617ae5aa8ff3328b2151e27282f6cda7db70a13d867d3550dc3dd9cd471447a",
      "bundleSha256": "74b2df2b363121f4950e116079dc0e4ae7710c6130df098e0b3c40cb8fe741e7",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/fresnel-lens-pass/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/fresnel-lens-pass/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/fresnel-lens-pass/16x9/detail.mp4",
      "bg": "#142523",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a1b3d213adfa458bd0b030a82bbfa8687416a0555037358584a1d1f089e56796",
        "loop": "8904bb50423b18de84530b58ae13e7fc0939982aa435c11b48c0812072256184",
        "detail": "891a8c62e8ce5cb39e7dbb36627c1df673bb2a566e7eafd3f5bc1b7eb17600aa"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/fresnel-lens-pass/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/fresnel-lens-pass/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/fresnel-lens-pass/9x16/detail.mp4",
      "bg": "#142523",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "73afd3836f31ca3757b728a8acc37fb9545cd82f5f68ab1a3cc433bb32766c47",
        "loop": "af195d3c695b6254866b942df896d8b3955d88f6db3ce387fc14d1dc9c078bec",
        "detail": "2a3ef3723531f03318a5dcd25ee298e6a7fd70bf16bed3597fd0f677d58bcaaf"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/fresnel-lens-pass/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/fresnel-lens-pass/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/fresnel-lens-pass/1x1/detail.mp4",
      "bg": "#142523",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "fcf7e49e538041488a679a5cee121d2daa773196c371a2fd74af89a4944152ee",
        "loop": "74020f0617fc5299eed8f37cb5183e2e441a335eb58e4b57340e818fbc34298e",
        "detail": "c07be806ef2dafcd3d7ea187f709e7e824de489967fc3bb7744f7291fadb8386"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/74b2df2b363121f4950e116079dc0e4ae7710c6130df098e0b3c40cb8fe741e7/index.mjs",
    "sha256": "74b2df2b363121f4950e116079dc0e4ae7710c6130df098e0b3c40cb8fe741e7",
    "bytes": 165099,
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
    "at": "2026-10-09T20:08:23.545Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
