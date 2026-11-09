// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "glass",
  "mechanic": [
    "splash"
  ],
  "tags": [
    "crown",
    "splash",
    "liquid",
    "drop",
    "logo",
    "surface",
    "slow-motion"
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
      "settled": 135,
      "impact": 34,
      "crown": 65
    },
    "beats": [
      0,
      34,
      65,
      90,
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
      "key": "logo",
      "type": "image",
      "role": "logo"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 40,
      "lines": 2,
      "role": "subline"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.body"
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
    "sourceUrl": "21st first-party (a droplet makes a liquid crown and ballistic beads around the user logo, 2026-10-09)"
  },
  "defaults": {
    "logo": "",
    "caption": "Make a splash",
    "primary": "#F97316",
    "secondary": "#A8A29E",
    "color": "#F5F5F4",
    "background": "#1C1917",
    "fontFamily": "DM Sans",
    "seed": 29
  },
  "fields": [
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 40,
      "role": "subline"
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
      "brand": "fonts.body"
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1
    }
  ],
  "name": "Crown Splash Logo",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "crown-splash-logo",
    "bundleSha256": "6603c6e1a5a2f2f4d595b97383b27b83b4bc980a76f80936b57317d90a211184",
    "sourceSnapshot": {
      "sha256": "22c3646f894c097d81b062c3f1a3835236d1899cdd1b233897adb47db79ad625",
      "files": 1995
    },
    "renderedAt": "2026-10-09T19:36:09.129Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/16x9-paper.png",
        "sha256": "b5be41b277f078702f2c2c13d399227e804859e3312b49cb4f74a62fd5f4f40b"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/16x9-night.png",
        "sha256": "4151868602e0fa945ca83176c953d1df8b45adcb45da1da48ed5ac4d1a550e78"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/16x9-color.png",
        "sha256": "2967f1439c89e589dcedbdfccff6dbf58d97f9c26315ccd44973c65d14b418a8"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/9x16-paper.png",
        "sha256": "17e2b0f2b98661e3ae2283a61eb4f6a074a138f613d0ede12eac1f75a315abe3"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/9x16-night.png",
        "sha256": "b57ac2bed004d17788e4d6b5888291d67691676f691155c5d3ca69093a3a591a"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/9x16-color.png",
        "sha256": "cf6bcd7b0973f74dad78e23ff85e463160b25f1ac657454db6e4a977fef6cd57"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/1x1-paper.png",
        "sha256": "a94af7d58d2f0e5b1d0725871e6ab4568478a07add439323c7335960b13016d4"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/1x1-night.png",
        "sha256": "fe1fde96b72f68b92e4c96e05410d5399c25ff241c38854f2c1aac1c9250cc9f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/1x1-color.png",
        "sha256": "277728edf4a8d6afeaf644db3738f5ced8ca1afb4dcc6864dce70d4a07eafed4"
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
          "crown-splash-logo--16x9",
          "crown-splash-logo--9x16",
          "crown-splash-logo--1x1"
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
            "paperNight": 14.629096137152779,
            "paperColor": 14.862386067708334,
            "region": {
              "left": 489,
              "top": 421,
              "width": 942,
              "height": 551
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 16.427164713541668,
            "paperColor": 17.498643663194443,
            "region": {
              "left": 20,
              "top": 699,
              "width": 1040,
              "height": 1048
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 14.625379774305555,
            "paperColor": 14.864149305555555,
            "region": {
              "left": 69,
              "top": 421,
              "width": 942,
              "height": 551
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
            "occupancy": 0.35474717471865297,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.35474717471865297,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.35474717471865297,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7449224545785395,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7449224545785395,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7449224545785395,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6306616439442719,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6306616439442719,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6306616439442719,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.1890190972222223,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 3.196072048611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/16x9-duration-150-frame-18.png",
                "sha256": "ca27ea17be6ba48aea6c46bbeaf33f4550a565d7c4081047d90b9a6f66e17f56",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/16x9-duration-150-frame-135.png",
                "sha256": "901631f9dd1699a4922adc01122918cd8b6c6bb1096854402ba2532d435731ad",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/16x9-duration-150-frame-132.png",
                "sha256": "901631f9dd1699a4922adc01122918cd8b6c6bb1096854402ba2532d435731ad",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/16x9-duration-150-frame-149.png",
                "sha256": "901631f9dd1699a4922adc01122918cd8b6c6bb1096854402ba2532d435731ad",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 3.1890190972222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/16x9-duration-600-frame-20.png",
                "sha256": "6038068e2d50a4278cb1373af0384447e155fd76b9b940e105e41cc7d8591155",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/16x9-duration-600-frame-135.png",
                "sha256": "901631f9dd1699a4922adc01122918cd8b6c6bb1096854402ba2532d435731ad",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/16x9-duration-600-frame-528.png",
                "sha256": "901631f9dd1699a4922adc01122918cd8b6c6bb1096854402ba2532d435731ad",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/16x9-duration-600-frame-599.png",
                "sha256": "901631f9dd1699a4922adc01122918cd8b6c6bb1096854402ba2532d435731ad",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 6.091471354166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/9x16-duration-150-frame-18.png",
                "sha256": "98a93b176c105ee002a1e5a64cb96cfd262f70e9665d24447573807356239327",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/9x16-duration-150-frame-135.png",
                "sha256": "3078adea0bdbe27808358c19526128026d72b723afa1a5a70efcf11e655f5d80",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/9x16-duration-150-frame-132.png",
                "sha256": "3078adea0bdbe27808358c19526128026d72b723afa1a5a70efcf11e655f5d80",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/9x16-duration-150-frame-149.png",
                "sha256": "3078adea0bdbe27808358c19526128026d72b723afa1a5a70efcf11e655f5d80",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 6.091905381944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/9x16-duration-600-frame-20.png",
                "sha256": "3b4f32943cc305fa30ed7a74632eda3869ce9437b3849db650245c2910e0e6f7",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/9x16-duration-600-frame-135.png",
                "sha256": "3078adea0bdbe27808358c19526128026d72b723afa1a5a70efcf11e655f5d80",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/9x16-duration-600-frame-528.png",
                "sha256": "3078adea0bdbe27808358c19526128026d72b723afa1a5a70efcf11e655f5d80",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/9x16-duration-600-frame-599.png",
                "sha256": "3078adea0bdbe27808358c19526128026d72b723afa1a5a70efcf11e655f5d80",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 5.664930555555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/1x1-duration-150-frame-18.png",
                "sha256": "8101e5e8c992ea27c5ea604ef44ebee970cc26189b6617899543faded6ef03b8",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/1x1-duration-150-frame-135.png",
                "sha256": "e2db52bd6a8786306377364acee63fe0bb960f24eff901d36318883c03a3ab62",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/1x1-duration-150-frame-132.png",
                "sha256": "e2db52bd6a8786306377364acee63fe0bb960f24eff901d36318883c03a3ab62",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/1x1-duration-150-frame-149.png",
                "sha256": "e2db52bd6a8786306377364acee63fe0bb960f24eff901d36318883c03a3ab62",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 5.658203125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/1x1-duration-600-frame-20.png",
                "sha256": "91bdfa6ae459216f3622de50e7f786cdbe9e1ec888958b8e79c10f661c499eb9",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/1x1-duration-600-frame-135.png",
                "sha256": "e2db52bd6a8786306377364acee63fe0bb960f24eff901d36318883c03a3ab62",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/1x1-duration-600-frame-528.png",
                "sha256": "e2db52bd6a8786306377364acee63fe0bb960f24eff901d36318883c03a3ab62",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/crown-splash-logo/1x1-duration-600-frame-599.png",
                "sha256": "e2db52bd6a8786306377364acee63fe0bb960f24eff901d36318883c03a3ab62",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "logos",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "1. TitleMatches: The images show a clear visual narrative of a sphere falling and making a crown-shaped liquid splash, consistent with the title 'Crown Splash Logo.' The structure and the motion samples (first: static with logo and tag, second: a falling sphere, third: crown-splash formation) directly support the splash and crown motifs, rather than merely naming them.\n2. noBakedHeading: There are no visible decorative headers or unexplained block titles embedded in the main compostion. The only text, 'Make a splash,' matches the named-slot caption and is placed as a legitimate, editable heading. No category or language labels are baked into the artwork.\n3. BrandAdherence: The last three images display the same poster under the listed color palettes—earthy light, dark, and a light-green variant. All three have text, edges, and foreground elements adjusted for legibility and color appropriateness. The underlying shape, translucent lens effect, and layered material are preserved in each, without unexplained color artifacts.\n4. LanguageAdherence: The visual style consistently demonstrates overlapping translucent shapes, edge highlights, clear depth, a persistent central logo, and refractive parallax across palettes and motion. Typography is sans-serif, and numerals (if present) are tabular. No prohibited neon glow, generic cards, or blurred text are evident. The design matches the described language card roles and materials throughout."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 36,
        "compared": 36,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "6603c6e1a5a2f2f4d595b97383b27b83b4bc980a76f80936b57317d90a211184",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T19:39:06.708Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "crown-splash-logo",
      "vsPositive": 0.75,
      "vsNegative": 0.9583333333333334,
      "fakeVotes": 0.041666666666666664,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.5,
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
      "framesSha256": "c3ed99970e678e140be7ba22703f392ba1c4217db3767b6469f5c62e359deeb4",
      "bundleSha256": "6603c6e1a5a2f2f4d595b97383b27b83b4bc980a76f80936b57317d90a211184",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/crown-splash-logo/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/crown-splash-logo/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/crown-splash-logo/16x9/detail.mp4",
      "bg": "#1c1917",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5318d6aa524e3bf9122f41411a2721ffd12d5ac11749405bff862c2b225b9b92",
        "loop": "dc1e88233c98c280e64b08f96258388ace7e4c15408b3f0b0b802769704eb4a8",
        "detail": "80f19a9df5676d0ca2cace206331488ec6dd7b91d81f7db7d63f71ab6515cdb1"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/crown-splash-logo/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/crown-splash-logo/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/crown-splash-logo/9x16/detail.mp4",
      "bg": "#1c1917",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "362722c10a7fde3080fcb4222fbb6b6894737061fa94a43d62e2fbaf14a81653",
        "loop": "cbe5024a4bb65ac1a95b2750e19bfd7fb30fa885ea0a2c12388bbadf236bf8f4",
        "detail": "9fa4d1fa9c1deffdca3e8ef96a583ca1f0634de5cbfde8e778fd07af75b1da4f"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/crown-splash-logo/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/crown-splash-logo/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/crown-splash-logo/1x1/detail.mp4",
      "bg": "#1c1917",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a9b06e03a38e4bc8caa966fad7fe6019f5adaa9a350bd605be34c95d500e10dc",
        "loop": "9b611115dd2fb63186c0d7b1da1fc553712b08ae029049f3d52be82bff8898c0",
        "detail": "c457c15ca93e3309a9b6a7146f37d746d3d6f5a2276c90056dc2b56f85213725"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/6603c6e1a5a2f2f4d595b97383b27b83b4bc980a76f80936b57317d90a211184/index.mjs",
    "sha256": "6603c6e1a5a2f2f4d595b97383b27b83b4bc980a76f80936b57317d90a211184",
    "bytes": 162408,
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
    "at": "2026-10-09T19:53:32.099Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
