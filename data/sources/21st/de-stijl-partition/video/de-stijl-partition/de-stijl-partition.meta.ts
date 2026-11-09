// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/craft",
  "job": "product-ui",
  "language": "neo-brutal",
  "mechanic": [
    "partition"
  ],
  "tags": [
    "partition",
    "de-stijl",
    "planes",
    "screenshot",
    "geometry"
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
      "key": "screenshot",
      "type": "image",
      "role": "screenshot"
    },
    {
      "key": "caption",
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
    "sourceUrl": "21st first-party (Sliding Screenshot Color Planes, 2026-10-09)"
  },
  "defaults": {
    "primary": "#BD392D",
    "secondary": "#D9B635",
    "color": "#202827",
    "background": "#F6F2E8",
    "fontFamily": "DM Sans",
    "seed": 31,
    "screenshot": "",
    "caption": "Everything in its place"
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
      "max": 38,
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
  "name": "Sliding Screenshot Color Planes",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "de-stijl-partition",
    "bundleSha256": "c07305da941bf87edc3df201dbc89033d23a372fcee82e09a222e5354c68aefe",
    "sourceSnapshot": {
      "sha256": "86e16398ba23389e2567ea0c6d2d2c7d9ef47a18365417f190bac9aff219abb2",
      "files": 2070
    },
    "renderedAt": "2026-10-09T21:09:38.179Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/16x9-paper.png",
        "sha256": "9266f010777098d13a7776f23db623af37405374159caa0a26c32dc9977b7ab4"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/16x9-night.png",
        "sha256": "b1438524342de4919c4eb4f5b300a0863c72a054f749d4cef790369d34421411"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/16x9-color.png",
        "sha256": "394e0f09a54f6b87d220c46bc497ff9d504a2fdf61ea0f4886d70e6a68639820"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/9x16-paper.png",
        "sha256": "abdbb80f14cc9741dded03693a0b6aca256130fbf7a1fa3c84aecd7e20d56ff6"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/9x16-night.png",
        "sha256": "722dda2bc005ae106434fd3d0b28e306fb3392a2e69ca6436b3f7a9656f229dc"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/9x16-color.png",
        "sha256": "215e0b6de7126445abc3528b5652a815d99df9778a9dcbbf271ae035c99bf061"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/1x1-paper.png",
        "sha256": "cdd6ac5f5d8a5c015f1e37d8ce0a9feb3563a7be5a65dacd5d80c784fa6b2cf9"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/1x1-night.png",
        "sha256": "7b111de35b833628fb8ff33ede547784df421b5b3e1eb98e3f23864a048ecb46"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/1x1-color.png",
        "sha256": "1aa6b82f2fdb023443887bd7c043bce21d003b049062b306f688f1e38999cd3a"
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
          "de-stijl-partition--16x9",
          "de-stijl-partition--9x16",
          "de-stijl-partition--1x1"
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
            "paperNight": 23.97235785590278,
            "paperColor": 11.413248697916666,
            "region": {
              "left": 134,
              "top": 76,
              "width": 1652,
              "height": 896
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 28.913682725694443,
            "paperColor": 16.564860026041668,
            "region": {
              "left": 76,
              "top": 134,
              "width": 928,
              "height": 1713
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 28.48659939236111,
            "paperColor": 12.79079861111111,
            "region": {
              "left": 76,
              "top": 76,
              "width": 928,
              "height": 896
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
            "occupancy": 1.0116598079561046,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0094016387419167,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9969817080638842,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0864801167380536,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0858458609781363,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9957815430699031,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0102989526857842,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0080438210949676,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.995640597345477,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 29.51247829861111,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 29.654188368055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/16x9-duration-150-frame-18.png",
                "sha256": "521204ff7872dd14e28091659da89db170527bd52d58df61b321308a24192b08",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/16x9-duration-150-frame-135.png",
                "sha256": "84476b543253074d20ed8d924bc9ef43a67be9b17eceea0a8b16bf0cab8cd183",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/16x9-duration-150-frame-132.png",
                "sha256": "9fe11c101f0c4f897d6103f43fa178ff95732595d7969dfb95abd1493a3827df",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/16x9-duration-150-frame-149.png",
                "sha256": "84476b543253074d20ed8d924bc9ef43a67be9b17eceea0a8b16bf0cab8cd183",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 29.51247829861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/16x9-duration-600-frame-20.png",
                "sha256": "cf7a5c1812496b20319c60434454cacf540371b9a8c6b787cc440899cc5580f7",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/16x9-duration-600-frame-135.png",
                "sha256": "84476b543253074d20ed8d924bc9ef43a67be9b17eceea0a8b16bf0cab8cd183",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/16x9-duration-600-frame-528.png",
                "sha256": "84476b543253074d20ed8d924bc9ef43a67be9b17eceea0a8b16bf0cab8cd183",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/16x9-duration-600-frame-599.png",
                "sha256": "84476b543253074d20ed8d924bc9ef43a67be9b17eceea0a8b16bf0cab8cd183",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 32.951388888888886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/9x16-duration-150-frame-18.png",
                "sha256": "23d72bcce4ba19ec1b890466f2a0972b2ea7a1b3654bf6072b459cdafaa807a4",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/9x16-duration-150-frame-135.png",
                "sha256": "10e3fbd55b779085ef264561fae01e8ff977f775b7ff672c492054df8ec14692",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/9x16-duration-150-frame-132.png",
                "sha256": "da1d852d96190086b4e61701da7b9ef107a371d5eef825f9b5bc1f82d1ac9d92",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/9x16-duration-150-frame-149.png",
                "sha256": "10e3fbd55b779085ef264561fae01e8ff977f775b7ff672c492054df8ec14692",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 32.951388888888886,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/9x16-duration-600-frame-20.png",
                "sha256": "23d72bcce4ba19ec1b890466f2a0972b2ea7a1b3654bf6072b459cdafaa807a4",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/9x16-duration-600-frame-135.png",
                "sha256": "10e3fbd55b779085ef264561fae01e8ff977f775b7ff672c492054df8ec14692",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/9x16-duration-600-frame-528.png",
                "sha256": "10e3fbd55b779085ef264561fae01e8ff977f775b7ff672c492054df8ec14692",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/9x16-duration-600-frame-599.png",
                "sha256": "10e3fbd55b779085ef264561fae01e8ff977f775b7ff672c492054df8ec14692",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 29.76128472222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/1x1-duration-150-frame-18.png",
                "sha256": "b58164497f92c0e0bf84bb4026c980689b5b9a931887e3afacaa69ace5b264ac",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/1x1-duration-150-frame-135.png",
                "sha256": "d24ddc30519476c706b8a312d5841825bcfb5149ae3943901f1df0fceb382235",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/1x1-duration-150-frame-132.png",
                "sha256": "c40a2877b0b9ebcf8c30105bcc46666013d5160c53287ac7b554736e398ecb5a",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/1x1-duration-150-frame-149.png",
                "sha256": "d24ddc30519476c706b8a312d5841825bcfb5149ae3943901f1df0fceb382235",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 29.76128472222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/1x1-duration-600-frame-20.png",
                "sha256": "b58164497f92c0e0bf84bb4026c980689b5b9a931887e3afacaa69ace5b264ac",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/1x1-duration-600-frame-135.png",
                "sha256": "d24ddc30519476c706b8a312d5841825bcfb5149ae3943901f1df0fceb382235",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/1x1-duration-600-frame-528.png",
                "sha256": "d24ddc30519476c706b8a312d5841825bcfb5149ae3943901f1df0fceb382235",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/de-stijl-partition/1x1-duration-600-frame-599.png",
                "sha256": "d24ddc30519476c706b8a312d5841825bcfb5149ae3943901f1df0fceb382235",
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
        "note": "1. Title Matches: The first image is a poster showing a screenshot surrounded by outlined, color planes, matching the 'sliding screenshot color planes' idea. The next two images depict frames of motion: empty frame with only outlines, then color blocks appearing/sliding in and stacking, matching the title's description of motion (slam, replace, stack). Final motion frame restores the settled state, so the structure and subject are aligned with the title claim.\n2. No Baked Heading: The only visible text is the editable caption 'Everything in its place,' which matches the named-slot. There is no additional decorative or unexplained heading present.\n3. Brand Adherence: The last three images are the same poster design under three visually distinct palettes, each clearly derived from the listed brand palettes. All three have clearly legible outlines and text in the corresponding palette, and color roles are visibly correct. Shape and material are preserved. No unexplained block colors remain.\n4. Language Adherence: Across all palettes and motion samples, type hierarchy, geometry, outlines, and material stay consistent with the provided language card (hard outlines, solid color blocks, minimal flat ink, static layout, accent slabs defined). No visible contradiction to type or camera constraints. Language is consistent; changing palettes doesn't disrupt structure or style."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 77,
        "compared": 77,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "c07305da941bf87edc3df201dbc89033d23a372fcee82e09a222e5354c68aefe",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T21:26:49.301Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "de-stijl-partition",
      "vsPositive": 0.6666666666666666,
      "vsNegative": 0.9166666666666666,
      "fakeVotes": 0.125,
      "perModel": {
        "claude": {
          "vsPositive": 0.25,
          "vsNegative": 0.875
        },
        "gpt": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gemini": {
          "vsPositive": 0.75,
          "vsNegative": 0.875
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "4a3fac6c5210e33618dd3a11a2d78da04412c3f5a2c9068f370f617e4fc1464c",
      "bundleSha256": "c07305da941bf87edc3df201dbc89033d23a372fcee82e09a222e5354c68aefe",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/de-stijl-partition/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/de-stijl-partition/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/de-stijl-partition/16x9/detail.mp4",
      "bg": "#f6f2e8",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "dde78a8bc227d5377b68ff1fbbc9fef4d2b342164c4ea0d8b228693cb592d168",
        "loop": "aadb38659b3d98ddef1623bb9f1ea7d6a4ad759fbe633d5a2b459583cfd1696b",
        "detail": "a398ba4d31b921528f1c842ba874c0e5a0585e213ac703020efe3844662694e1"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/de-stijl-partition/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/de-stijl-partition/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/de-stijl-partition/9x16/detail.mp4",
      "bg": "#f6f2e8",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "31bc2225256ca35017a4f503963467fa804f5b742c881419d6e509ebc51b6d88",
        "loop": "99e7ba4653092ae2c8863a3be52a73498c4a23a73ac1886eff8e385c17723a42",
        "detail": "91a2dce17b8b0b4de6f10ead1a2bf0b9268d437658a8ecb9990b70ff7f9ee287"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/de-stijl-partition/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/de-stijl-partition/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/de-stijl-partition/1x1/detail.mp4",
      "bg": "#f6f2e8",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "cc9b11017a66fcb273edc6bb3fab1623cfb2eb9a37e158408671c300526546b4",
        "loop": "e664d19e2fe87ff09cb523ff51c1bbe4e5e9e98d5c332cf39580161600b12532",
        "detail": "2d8b7ce6fd70f22ec62aa8c9efc6655a33251caedb65e294d6c93e60f675c2ce"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c07305da941bf87edc3df201dbc89033d23a372fcee82e09a222e5354c68aefe/index.mjs",
    "sha256": "c07305da941bf87edc3df201dbc89033d23a372fcee82e09a222e5354c68aefe",
    "bytes": 164261,
    "externals": [
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
    "at": "2026-10-09T21:43:13.432Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
