// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "kinetic-poster",
  "mechanic": [
    "drift"
  ],
  "tags": [
    "drift",
    "suprematist",
    "geometry",
    "logo",
    "planes"
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
      "key": "logo",
      "type": "image",
      "role": "logo"
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
    "sourceUrl": "21st first-party (Floating Geometry Logo, 2026-10-09)"
  },
  "defaults": {
    "primary": "#C14330",
    "secondary": "#D3AE66",
    "color": "#212A28",
    "background": "#F3EFE4",
    "fontFamily": "DM Sans",
    "seed": 31,
    "logo": "",
    "caption": "A mark with its own gravity"
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
  "name": "Floating Geometry Logo",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "suprematist-drift",
    "bundleSha256": "08e5733f8adc75ab652b4036ba4ff0dc68e6d2b3cf74dfcecdb2cc8ad8fd6a5a",
    "sourceSnapshot": {
      "sha256": "86e16398ba23389e2567ea0c6d2d2c7d9ef47a18365417f190bac9aff219abb2",
      "files": 2070
    },
    "renderedAt": "2026-10-09T21:10:08.231Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/16x9-paper.png",
        "sha256": "a0b76a005a26dbde64c18e25d7c6bb74a6af8876a258dc3ba5b654860f3d0e87"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/16x9-night.png",
        "sha256": "fdd0eb4f0a66afd5a950f0e0406b701abeaf7d90e47faa1007181e3ce5c209a6"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/16x9-color.png",
        "sha256": "6814150ae1e74f9c9341cbb94d1b5c49a2d1c1f87db5d81f555dc60c5ba8a541"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/9x16-paper.png",
        "sha256": "5093604f9513d05e3293fd8813227b7d6b5ae801cb7b8e4a6dbe5e1d9171fee2"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/9x16-night.png",
        "sha256": "567fa6f7a70325352372ef91eeae75968b9b927b01277166ab57e189185f685b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/9x16-color.png",
        "sha256": "3227f1c2d3ae059a621b2f076a8dd65bdadf90610955542423372100e5d1188e"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/1x1-paper.png",
        "sha256": "49dfbd3f46b0f6584456ec2a72c6064f8988073e856b2149f1120ecfdeb699fd"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/1x1-night.png",
        "sha256": "1d853c9a5f94685efcd6a9746f9dbdc628fadd7ad68830b8605f44cb473c0693"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/1x1-color.png",
        "sha256": "f9a0dcb22f018c20b94d74c546ba381ed1dc1f1db0736a32c84ccdcdc5f0aee3"
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
          "suprematist-drift--16x9",
          "suprematist-drift--9x16",
          "suprematist-drift--1x1"
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
            "paperNight": 48.57660590277778,
            "paperColor": 17.625840928819443,
            "region": {
              "left": 430,
              "top": 49,
              "width": 1004,
              "height": 914
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 39.54261610243056,
            "paperColor": 15.040608723958334,
            "region": {
              "left": 43,
              "top": 333,
              "width": 972,
              "height": 1486
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 49.60411241319444,
            "paperColor": 18.22319878472222,
            "region": {
              "left": 43,
              "top": 49,
              "width": 971,
              "height": 914
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
            "occupancy": 0.627185995282887,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.627185995282887,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6196378049676662,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9871917517006805,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.985198767006803,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9028220663265308,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0783490064978898,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0783490064978898,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0653710644065584,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 19.57476128472222,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 19.254774305555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/16x9-duration-150-frame-18.png",
                "sha256": "7f2ffb03965d8c7a37e579551ff804e6eb2f4682034ddca32a1ff245fabb05e1",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/16x9-duration-150-frame-135.png",
                "sha256": "9a4c71a683207b48dce0d02fd6e8b2b115b54bb4770e53c7d97212a015e1be16",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/16x9-duration-150-frame-132.png",
                "sha256": "8516a7373c4aaf65030c472e1cadd71d592915141ce9f571a8a7d9ca7855056a",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/16x9-duration-150-frame-149.png",
                "sha256": "9a4c71a683207b48dce0d02fd6e8b2b115b54bb4770e53c7d97212a015e1be16",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 19.57476128472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/16x9-duration-600-frame-20.png",
                "sha256": "671cc65e045d2cd79f4df1cd5a4cb8a64aeba5ea699b015132d2644eeb360cd8",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/16x9-duration-600-frame-135.png",
                "sha256": "9a4c71a683207b48dce0d02fd6e8b2b115b54bb4770e53c7d97212a015e1be16",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/16x9-duration-600-frame-528.png",
                "sha256": "9a4c71a683207b48dce0d02fd6e8b2b115b54bb4770e53c7d97212a015e1be16",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/16x9-duration-600-frame-599.png",
                "sha256": "9a4c71a683207b48dce0d02fd6e8b2b115b54bb4770e53c7d97212a015e1be16",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 18.5263671875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/9x16-duration-150-frame-18.png",
                "sha256": "950477f6d0ecbb9ec914fe8d48c7cc622c5b70cf1fbed67fea67c2b2c5cfa552",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/9x16-duration-150-frame-135.png",
                "sha256": "3478e6ff6030e17434acb5feb3c2f4e6d1df1d77ac9abc219aab0971e814c874",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/9x16-duration-150-frame-132.png",
                "sha256": "4798cb96b4b475b17f0e2aeff9f2f9755c6c5421d6ce88353756f041dede891e",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/9x16-duration-150-frame-149.png",
                "sha256": "3478e6ff6030e17434acb5feb3c2f4e6d1df1d77ac9abc219aab0971e814c874",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 18.904947916666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/9x16-duration-600-frame-20.png",
                "sha256": "7a3ca5b1632f8e3bd6ed1bb05fb8e8830f28f93f1271d223320c98c8719af3ab",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/9x16-duration-600-frame-135.png",
                "sha256": "3478e6ff6030e17434acb5feb3c2f4e6d1df1d77ac9abc219aab0971e814c874",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/9x16-duration-600-frame-528.png",
                "sha256": "3478e6ff6030e17434acb5feb3c2f4e6d1df1d77ac9abc219aab0971e814c874",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/9x16-duration-600-frame-599.png",
                "sha256": "3478e6ff6030e17434acb5feb3c2f4e6d1df1d77ac9abc219aab0971e814c874",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 29.495225694444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/1x1-duration-150-frame-18.png",
                "sha256": "f463eed11dee3dce784eeb3b7734b905e7bbab0b84411fc0326b466935eb5b8a",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/1x1-duration-150-frame-135.png",
                "sha256": "9acc79c16bf2af1f452c4be27ebf05ce583691d6687ae1d04b4016c08603d666",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/1x1-duration-150-frame-132.png",
                "sha256": "cb267257f83bcf6139a199549a3421d6fdac2348d7dab0d07e56cd9b0ac1c181",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/1x1-duration-150-frame-149.png",
                "sha256": "9acc79c16bf2af1f452c4be27ebf05ce583691d6687ae1d04b4016c08603d666",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 29.884440104166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/1x1-duration-600-frame-20.png",
                "sha256": "62ae89656a8e5e204a0bbed3a6a4be08764bfaf0219e3c5d3f4a9cea4893f9dc",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/1x1-duration-600-frame-135.png",
                "sha256": "9acc79c16bf2af1f452c4be27ebf05ce583691d6687ae1d04b4016c08603d666",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/1x1-duration-600-frame-528.png",
                "sha256": "9acc79c16bf2af1f452c4be27ebf05ce583691d6687ae1d04b4016c08603d666",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/suprematist-drift/1x1-duration-600-frame-599.png",
                "sha256": "9acc79c16bf2af1f452c4be27ebf05ce583691d6687ae1d04b4016c08603d666",
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
        "note": "TitleMatches: The images collectively support the title 'Floating Geometry Logo.' The central poster features a collection of geometric shapes (hexagon, circle, rectangles, rhombus) which, according to the motion samples, animate into formation. The motion appears to follow a pattern where the pieces 'assemble' (matching the verbs in the language card), suggesting an attractor or gravity-like behavior centering on the logo, as the title describes.\n\nNoBakedHeading: The only visible text is the caption 'A mark with its own gravity,' which directly matches the named-slot content and is a legitimate part of the composition. There are no additional decorative or unexplained headings or category labels baked into the design.\n\nBrandAdherence: Three poster rebrands are shown (images 5-7), each using the supplied brand palettes in order. Shape, composition and material remain unchanged; only the palette varies. The hexagon and other shapes are clear and legible on all backgrounds, and colors reflect the provided schematics. No unexplained fixed block colors appear and UI/assets retain their own form.\n\nLanguageAdherence: The central poster and all rebrands use Oversized type, flat color, and the same clear sans type in the body. The chronology of motion samples confirms that graphic components animate without any prohibited flourishes (no frosted glass, browser chrome, floating cards), and type/mask movement is the core motion. Each version maintains consistent type roles and language presentation as described on the card."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 41,
        "compared": 41,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "08e5733f8adc75ab652b4036ba4ff0dc68e6d2b3cf74dfcecdb2cc8ad8fd6a5a",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T21:30:17.868Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "suprematist-drift",
      "vsPositive": 0.9166666666666666,
      "vsNegative": 0.9166666666666666,
      "fakeVotes": 0,
      "perModel": {
        "claude": {
          "vsPositive": 0.75,
          "vsNegative": 0.875
        },
        "gpt": {
          "vsPositive": 1,
          "vsNegative": 0.875
        },
        "gemini": {
          "vsPositive": 1,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "6fc7113f2b8c45835104f3b64b331c51176caba5e71d210e414d0a840a9ab302",
      "bundleSha256": "08e5733f8adc75ab652b4036ba4ff0dc68e6d2b3cf74dfcecdb2cc8ad8fd6a5a",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/suprematist-drift/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/suprematist-drift/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/suprematist-drift/16x9/detail.mp4",
      "bg": "#f3efe4",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "73d278e245ea057d764c94551f59e1c2deab9228ee26c81b496f920cba907036",
        "loop": "25cfe6af9adefc50e85aa637c6d749959938d9d74002eb4e5408da61fcbce6a3",
        "detail": "95f3b1cded9b519be1bef94f5e5907af01e3b5a73d6a5b733cc101d00a2dd912"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/suprematist-drift/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/suprematist-drift/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/suprematist-drift/9x16/detail.mp4",
      "bg": "#f3efe4",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7409f98eea937fe0e3eb43e41428122870a91f32ee12e43bbdfe1fa7645233bb",
        "loop": "8c37df1b9d352318969c88c084dc0a04341ed2225694853648c4596c4428e25b",
        "detail": "f60b96253f3d13818829729801eebc7b9a32fd95f5781239cfb287065e610187"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/suprematist-drift/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/suprematist-drift/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/suprematist-drift/1x1/detail.mp4",
      "bg": "#f3efe4",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "b1d05f5a0facc5bb0388974b3bca758d957aedb605a1341614238bf084b75bc4",
        "loop": "7d6243b6564fa3c49d39cac7069a3e3c7167dfbd65dcaf2462166fbba55c3ddc",
        "detail": "93635d1ea7dec2892f326d9959408cdb6d37c890c9f15ae32e7d5d5aa3790cfc"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/08e5733f8adc75ab652b4036ba4ff0dc68e6d2b3cf74dfcecdb2cc8ad8fd6a5a/index.mjs",
    "sha256": "08e5733f8adc75ab652b4036ba4ff0dc68e6d2b3cf74dfcecdb2cc8ad8fd6a5a",
    "bytes": 159980,
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
    "at": "2026-10-09T21:43:40.099Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
