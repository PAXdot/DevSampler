// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "editorial",
  "mechanic": [
    "flow"
  ],
  "tags": [
    "headline",
    "flow field",
    "threads",
    "streamlines",
    "generative",
    "contours",
    "negative space"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 145,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 135,
      "out": 0
    },
    "markers": {
      "settled": 135,
      "current": 55
    },
    "beats": [
      0,
      20,
      55,
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
      "key": "text",
      "type": "text",
      "maxChars": 72,
      "lines": 3,
      "role": "headline"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.serif"
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
    "sourceUrl": "21st first-party (hairline streamlines part into calm negative space around an editable headline, 2026-10-09)"
  },
  "defaults": {
    "text": "Find your flow",
    "primary": "#246C4C",
    "secondary": "#B64430",
    "color": "#163B2B",
    "background": "#F2EFE5",
    "fontFamily": "Instrument Serif",
    "seed": 17
  },
  "fields": [
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 72,
      "role": "headline"
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
      "brand": "fonts.serif"
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1
    }
  ],
  "name": "Flow Field Headline",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "flow-field-threads",
    "bundleSha256": "d5be2b7ef63463db426486b8cd84d0e6a2a51d6613afa0d9186c018b920361d3",
    "sourceSnapshot": {
      "sha256": "380231fb2fdd78399e0d2fdba550087ac492a21dcf3b4339f6900174d4b37b75",
      "files": 2025
    },
    "renderedAt": "2026-10-09T20:32:36.477Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/16x9-paper.png",
        "sha256": "e0a2009347fcbc6234bf22e5c0e4f2e7bf6f3f068877be7ae6cc45b9fb2ca879"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/16x9-night.png",
        "sha256": "40252db8481199d6618dc26de4651efc7cc377094f385eb7453de59df7d77196"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/16x9-color.png",
        "sha256": "41dc70b4dc4ee3834a3f7c80356c44b7e6fc765661cc3f25fda8d27cc792809f"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/9x16-paper.png",
        "sha256": "4615ceae5b878aeb13a341ecb56475e8719bb969a103406cdd0b4736e916177a"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/9x16-night.png",
        "sha256": "24875925263eb0b539e2d9f5ad218bbec6921e6656991bff8e0ecf23ce459753"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/9x16-color.png",
        "sha256": "9eba9527f9b3bcc521a99e99c38918f502126c6438b6f7222eaa1029ccd6a124"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/1x1-paper.png",
        "sha256": "7bee3e9a3a1949cb0e31d33b3e2c3d11d90becaa130fab4321a2a026b41015d2"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/1x1-night.png",
        "sha256": "ffab686b8e1036fd0dba67f36289bd6f2b8a95622b3553fd106bacd8eb375a43"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/1x1-color.png",
        "sha256": "af7588f748b01e62d450b233f207c4004e0713ebf5901c0a1539b0cacc564a43"
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
          "flow-field-threads--16x9",
          "flow-field-threads--9x16",
          "flow-field-threads--1x1"
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
            "paperNight": 45.437581380208336,
            "paperColor": 22.646864149305557,
            "region": {
              "left": 96,
              "top": 86,
              "width": 1728,
              "height": 908
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 51.356201171875,
            "paperColor": 25.594156901041668,
            "region": {
              "left": 54,
              "top": 153,
              "width": 972,
              "height": 1614
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 43.908203125,
            "paperColor": 26.14114040798611,
            "region": {
              "left": 54,
              "top": 86,
              "width": 972,
              "height": 908
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
            "occupancy": 1.0723733938019655,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0723733938019655,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0723733938019655,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0722257653061227,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0722257653061227,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0722257653061227,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0723733938019655,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0723733938019655,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0723733938019655,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.47384982638889,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 145,
            "averageChannelDifference": 8.50802951388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/16x9-duration-145-frame-17.png",
                "sha256": "68738857716608647d9f6410499d035156bf774a20790dfb73866d19b915cba3",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/16x9-duration-145-frame-135.png",
                "sha256": "ce4dd7191326a1bc82a68b41ea60ddff31a386cf08d37717836ed4bce444b57e",
                "alphaMass": 587520
              },
              {
                "frame": 127,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/16x9-duration-145-frame-127.png",
                "sha256": "ce4dd7191326a1bc82a68b41ea60ddff31a386cf08d37717836ed4bce444b57e",
                "alphaMass": 587520
              },
              {
                "frame": 144,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/16x9-duration-145-frame-144.png",
                "sha256": "ce4dd7191326a1bc82a68b41ea60ddff31a386cf08d37717836ed4bce444b57e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 8.47384982638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/16x9-duration-600-frame-20.png",
                "sha256": "8b236073006fd8387afdb34c0aa480f8b622caac9f6d40989d310d1bcf7da61f",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/16x9-duration-600-frame-135.png",
                "sha256": "ce4dd7191326a1bc82a68b41ea60ddff31a386cf08d37717836ed4bce444b57e",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/16x9-duration-600-frame-528.png",
                "sha256": "ce4dd7191326a1bc82a68b41ea60ddff31a386cf08d37717836ed4bce444b57e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/16x9-duration-600-frame-599.png",
                "sha256": "ce4dd7191326a1bc82a68b41ea60ddff31a386cf08d37717836ed4bce444b57e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 145,
            "averageChannelDifference": 8.07736545138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/9x16-duration-145-frame-17.png",
                "sha256": "9b56acb23602479a85ebe9479ced98dc6f24632c0454f66c46fd48da1a78e914",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/9x16-duration-145-frame-135.png",
                "sha256": "1af2be5ba09212669a007572010af60d42b2adfa3ce4a2491183977c62d1cdeb",
                "alphaMass": 587520
              },
              {
                "frame": 127,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/9x16-duration-145-frame-127.png",
                "sha256": "1af2be5ba09212669a007572010af60d42b2adfa3ce4a2491183977c62d1cdeb",
                "alphaMass": 587520
              },
              {
                "frame": 144,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/9x16-duration-145-frame-144.png",
                "sha256": "1af2be5ba09212669a007572010af60d42b2adfa3ce4a2491183977c62d1cdeb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 8.059678819444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/9x16-duration-600-frame-20.png",
                "sha256": "93f181c4d3b380662617ec9fb4ea781f2e435e1a4bfb7d451994642b1197e838",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/9x16-duration-600-frame-135.png",
                "sha256": "1af2be5ba09212669a007572010af60d42b2adfa3ce4a2491183977c62d1cdeb",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/9x16-duration-600-frame-528.png",
                "sha256": "1af2be5ba09212669a007572010af60d42b2adfa3ce4a2491183977c62d1cdeb",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/9x16-duration-600-frame-599.png",
                "sha256": "1af2be5ba09212669a007572010af60d42b2adfa3ce4a2491183977c62d1cdeb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 145,
            "averageChannelDifference": 8.32790798611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/1x1-duration-145-frame-17.png",
                "sha256": "d688c1b0291ab4cbc73e727706416155f972317109ed727cad3a5c7c46f42f81",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/1x1-duration-145-frame-135.png",
                "sha256": "a8fd5ddde93bb305c0e492edaa94721cf8c980ba74abf638dffb4469733298bb",
                "alphaMass": 587520
              },
              {
                "frame": 127,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/1x1-duration-145-frame-127.png",
                "sha256": "fa60244fcff483895f38dc317c90f6c85ea46c2d7d74511051827511387f4e99",
                "alphaMass": 587520
              },
              {
                "frame": 144,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/1x1-duration-145-frame-144.png",
                "sha256": "a8fd5ddde93bb305c0e492edaa94721cf8c980ba74abf638dffb4469733298bb",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 8.293836805555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/1x1-duration-600-frame-20.png",
                "sha256": "0379e0c8deeb3d48e4d4562539faa44fc12580f9057914018d2a5e7fba166f0b",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/1x1-duration-600-frame-135.png",
                "sha256": "9f93978cdb71101971ec4348071a9bccbc6ae4ad41cb61754e8b5f0208ed7950",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/1x1-duration-600-frame-528.png",
                "sha256": "fa60244fcff483895f38dc317c90f6c85ea46c2d7d74511051827511387f4e99",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T202833Z/gates/flow-field-threads/1x1-duration-600-frame-599.png",
                "sha256": "0b1e5e6f6b52bdadbcbe78d2a3d0122d61dd888f74a75077851fb991951e91f0",
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
        "note": "TitleMatches: The first image features the phrase 'Find your flow' centered among delicate, papery flow field lines, matching the 'Flow Field Headline' title. The motion samples (images 2-4) show sequential drawing and fading/appearance of the lines and headline, indicating movement consistent with 'draw' and 'rise.' These structural changes reinforce the 'flow field' concept and support the title directly, not just by label. \nNoBakedHeading: There are no extraneous or decorative block-titles or category markers visible; all prominent text is legitimate editable content ('Find your flow'). No unexplained labels or headings are present. \nBrandAdherence: The final three images display the same design under three distinct color palettes that align with the palette evidence. Each version maintains the integrity of the lines and headline, ensuring visibility and color adherence. No fixed or unexplained block colors are seen. The lines and headline adapt visibly and appropriately to each palette, with legible type and accent rules/marks colored as appropriate. \nLanguageAdherence: The design throughout all images—typography, layout, margin space, rules, lack of shadow/glow, and static camera—matches the provided language card. Serif type is used for both headline and body; background is flat, resembling paper; material and accent roles (rules/marks only) are consistent. No excluded effects (like glow, glass, or gradient) appear, and motion is subtle and easing-compliant. Thus, adherence to language is maintained."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 66,
        "compared": 66,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "d5be2b7ef63463db426486b8cd84d0e6a2a51d6613afa0d9186c018b920361d3",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T20:46:26.602Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "flow-field-threads",
      "vsPositive": 0.9583333333333334,
      "vsNegative": 0.875,
      "fakeVotes": 0,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 0.875
        },
        "gpt": {
          "vsPositive": 1,
          "vsNegative": 0.875
        },
        "gemini": {
          "vsPositive": 0.875,
          "vsNegative": 0.875
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "27f4e57ed5d0a4b220ada97ec644799510af82a2c13de3f078aaf6d41dc5764f",
      "bundleSha256": "d5be2b7ef63463db426486b8cd84d0e6a2a51d6613afa0d9186c018b920361d3",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/flow-field-threads/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/flow-field-threads/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/flow-field-threads/16x9/detail.mp4",
      "bg": "#f2efe5",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5ce820db722e3153426983d561c14ebc6ef12275ec69f4a6fc92c12a7c5b1cf8",
        "loop": "43eae8a3c8868e1f7095110e2c1ae50fa3943b8cce31fe9655b1839b1691d7f2",
        "detail": "da50a3fbb6d3372b3ffab79030e99b5b6b2961fcc07b45fcc8211e728dd48dad"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/flow-field-threads/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/flow-field-threads/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/flow-field-threads/9x16/detail.mp4",
      "bg": "#f2efe5",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f5c51272351a8fe5856f871539612c6fa8045471a50737b6f334b11c7f6f6648",
        "loop": "b381941d173ba690ec9c7b81dcebef1155f6af95909677f09ed294db79d8a531",
        "detail": "8cfefd5723de37c6de72aee0431f51d2e10f266006e6a0b4f0308b4e6702c1e0"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/flow-field-threads/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/flow-field-threads/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/flow-field-threads/1x1/detail.mp4",
      "bg": "#f2efe5",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c0007939c92e432bbeaa56adb4148930116c950bfd96ee343bed9ec371714f63",
        "loop": "fc2b4f42f6d6ce8e16a0d720d2a57a45b796399c23aec4acc3e7a752cca56054",
        "detail": "0fb1a2f5818fce2a634eb77db09c12541141ec98b0b6d3c67e11af110ba7088b"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d5be2b7ef63463db426486b8cd84d0e6a2a51d6613afa0d9186c018b920361d3/index.mjs",
    "sha256": "d5be2b7ef63463db426486b8cd84d0e6a2a51d6613afa0d9186c018b920361d3",
    "bytes": 160652,
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
    "at": "2026-10-09T20:56:09.313Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
