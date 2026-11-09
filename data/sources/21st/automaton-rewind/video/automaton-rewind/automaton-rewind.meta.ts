// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "pixel-terminal",
  "mechanic": [
    "rewind"
  ],
  "tags": [
    "cellular-automaton",
    "game-of-life",
    "logo",
    "time-reversal",
    "pixels",
    "grid"
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
      "chaos": 63,
      "rewind": 90
    },
    "beats": [
      0,
      18,
      63,
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
    "fontFamily": "fonts.mono"
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
    "sourceUrl": "21st first-party (logo alpha evolves under Conway Life rules and rewinds into the original asset, 2026-10-09)"
  },
  "defaults": {
    "logo": "",
    "caption": "Order finds its way back",
    "primary": "#14B8A6",
    "secondary": "#F59E0B",
    "color": "#0C2420",
    "background": "#F0F7F4",
    "fontFamily": "IBM Plex Mono",
    "seed": 23
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
      "brand": "fonts.mono"
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1
    }
  ],
  "name": "Automaton Logo Rewind",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "automaton-rewind",
    "bundleSha256": "65ccbfdd9734980fa6471a20f748fdfe49d806b8deeeeea6f234cae5423d6ee0",
    "sourceSnapshot": {
      "sha256": "40bd51d119bf7ee4ebdebf0c5a5cf3e861b724ade6d630e20d9914f0a4ce79bc",
      "files": 2022
    },
    "renderedAt": "2026-10-09T20:12:51.385Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/16x9-paper.png",
        "sha256": "4224c362a8fa414ca8e0b0167469655b701b1588ed2e9774fc10eb8db75bea00"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/16x9-night.png",
        "sha256": "e8a49c25b2d15c0966e44f54b609632ebff772aba7b93818b442e2b5099803cd"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/16x9-color.png",
        "sha256": "99cc11aaa413809e9b83d7a612e2bc29680a81d0b0ce3e7b78a410e24acb28fc"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/9x16-paper.png",
        "sha256": "d1e3df077344940bbd60e4e51bce04ced2ba70f71b24a38be0f8f89f6a6c5ff7"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/9x16-night.png",
        "sha256": "254a7a28258982fa9b7dad031df99a086027b0982698f6c5cf57e33d8b6b9679"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/9x16-color.png",
        "sha256": "d1a63dbfd41dab825896b4bb849e58127c9f7c4827d89c325c05144479a56e6e"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/1x1-paper.png",
        "sha256": "b4b4de773d66c5a76ead903625520626e67ec9be2bdddc2686967af1b8c6b61c"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/1x1-night.png",
        "sha256": "c50c1b22c9bc0441c0212f5375b1e7efe3bf1cfd565b0f5618a0aaafdb66831a"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/1x1-color.png",
        "sha256": "cf384d8057aead5322d69517937c995da3a94ac220adfd70a17c6d8177445e7a"
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
          "automaton-rewind--16x9",
          "automaton-rewind--9x16",
          "automaton-rewind--1x1"
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
            "paperNight": 49.60264756944444,
            "paperColor": 29.913818359375,
            "region": {
              "left": 317,
              "top": 87,
              "width": 1286,
              "height": 893
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 56.000406901041664,
            "paperColor": 31.70114474826389,
            "region": {
              "left": 91,
              "top": 154,
              "width": 898,
              "height": 1705
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 41.11957465277778,
            "paperColor": 24.328938802083332,
            "region": {
              "left": 81,
              "top": 191,
              "width": 918,
              "height": 789
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
            "occupancy": 0.7848901359669384,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.784011199644467,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7822533269995242,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0464468226848356,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0458330708826742,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0421505600697072,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8800626732174353,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8789472579155121,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8767164273116655,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.7610677083333333,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 1.7610677083333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/16x9-duration-150-frame-18.png",
                "sha256": "b5c186be11647d8743ba6741d68559ddb1ca7c382ce385d481c075c9f53f6f2c",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/16x9-duration-150-frame-135.png",
                "sha256": "f0920a71901845ab6aa1add25e494e737885689b07b6939f0b228f56bbe6e372",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/16x9-duration-150-frame-132.png",
                "sha256": "4b7ad001e1198b69de593ad1c7054c910d8b5ea29b65a311729711f33d25f375",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/16x9-duration-150-frame-149.png",
                "sha256": "f0920a71901845ab6aa1add25e494e737885689b07b6939f0b228f56bbe6e372",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 1.7610677083333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/16x9-duration-600-frame-20.png",
                "sha256": "b5c186be11647d8743ba6741d68559ddb1ca7c382ce385d481c075c9f53f6f2c",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/16x9-duration-600-frame-135.png",
                "sha256": "f0920a71901845ab6aa1add25e494e737885689b07b6939f0b228f56bbe6e372",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/16x9-duration-600-frame-528.png",
                "sha256": "f0920a71901845ab6aa1add25e494e737885689b07b6939f0b228f56bbe6e372",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/16x9-duration-600-frame-599.png",
                "sha256": "f0920a71901845ab6aa1add25e494e737885689b07b6939f0b228f56bbe6e372",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 3.4242621527777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/9x16-duration-150-frame-18.png",
                "sha256": "ec5258005994af0f2bc38882216debb509166603d8dc79402a2218f291744473",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/9x16-duration-150-frame-135.png",
                "sha256": "b158b4f78d7f72bb21ef62d6f0e171f043fad6673dc7e8ddb31d1639a3fbeeee",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/9x16-duration-150-frame-132.png",
                "sha256": "5da654da9dcddda1355750405abc6aa4d69a8baeaac9808f2681ef140a1727db",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/9x16-duration-150-frame-149.png",
                "sha256": "b158b4f78d7f72bb21ef62d6f0e171f043fad6673dc7e8ddb31d1639a3fbeeee",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 3.4242621527777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/9x16-duration-600-frame-20.png",
                "sha256": "ec5258005994af0f2bc38882216debb509166603d8dc79402a2218f291744473",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/9x16-duration-600-frame-135.png",
                "sha256": "b158b4f78d7f72bb21ef62d6f0e171f043fad6673dc7e8ddb31d1639a3fbeeee",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/9x16-duration-600-frame-528.png",
                "sha256": "b158b4f78d7f72bb21ef62d6f0e171f043fad6673dc7e8ddb31d1639a3fbeeee",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/9x16-duration-600-frame-599.png",
                "sha256": "b158b4f78d7f72bb21ef62d6f0e171f043fad6673dc7e8ddb31d1639a3fbeeee",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 2.0200737847222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/1x1-duration-150-frame-18.png",
                "sha256": "5474e4535b676eaf95709dde1a2fce72f3f20128df8aeeb222ddfb5ed42c1314",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/1x1-duration-150-frame-135.png",
                "sha256": "901d95b59bc58f49733b7efc661489c105554c94bff4711199c5c04357f595d9",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/1x1-duration-150-frame-132.png",
                "sha256": "124e812c7d2ae7be33f468a5a6834564baea38d8b8961816283475659c34bff5",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/1x1-duration-150-frame-149.png",
                "sha256": "901d95b59bc58f49733b7efc661489c105554c94bff4711199c5c04357f595d9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 2.0200737847222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/1x1-duration-600-frame-20.png",
                "sha256": "5474e4535b676eaf95709dde1a2fce72f3f20128df8aeeb222ddfb5ed42c1314",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/1x1-duration-600-frame-135.png",
                "sha256": "901d95b59bc58f49733b7efc661489c105554c94bff4711199c5c04357f595d9",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/1x1-duration-600-frame-528.png",
                "sha256": "901d95b59bc58f49733b7efc661489c105554c94bff4711199c5c04357f595d9",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T200541Z/gates/automaton-rewind/1x1-duration-600-frame-599.png",
                "sha256": "901d95b59bc58f49733b7efc661489c105554c94bff4711199c5c04357f595d9",
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
        "note": "1. TitleMatches: The subject is a star logo that, over chronological motion samples, breaks down into animated block/cell elements and then reforms. This visualization supports the 'Automaton Logo Rewind' title, as it shows the star's disassembly and reassembly, implying a rewinding or order-restoring effect. The motion is stepped and grid-based, matching 'Automaton' and 'Rewind' without relying only on labels.\n2. noBakedHeading: No decorative or fixed-heading labels are present. The only text is the named-slot caption ('Order finds its way back'), legitimate as per rules. No unexplained text or decorative headings are visible.\n3. brandAdherence: Three rebrand posters are included (images 5-7), each using a distinct palette that matches the supplied palette evidence. All versions retain the same star shape and overall composition, with clear visual correspondence of colors to palette roles ('primary', 'background', 'text'). The star and caption remain legible and appropriate in each palette, and there is no fixed block color retained between versions.\n4. languageAdherence: The posters and motion use discrete grid cells/pixels, a fixed raster, and mono-spaced fonts for both display and body text. All visual language roles (display, body, numerals) are consistently mono. Colors, shapes, and structure remain consistent across motion and rebrands, aligning with the 'terminal field' and 'character/cell border' roles. The stepped, cell-wise animation and grid respect the 'no smooth arbitrary rotations' and 'linear/step' motion direction in the language card."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 38,
        "compared": 38,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "65ccbfdd9734980fa6471a20f748fdfe49d806b8deeeeea6f234cae5423d6ee0",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T20:24:37.933Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "automaton-rewind",
      "vsPositive": 0.875,
      "vsNegative": 1,
      "fakeVotes": 0.020833333333333332,
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
          "vsPositive": 0.75,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "e6a51999784e4c20fdae1768e8592b5ee75a1e1b5e7d61bc8f770f08b161843d",
      "bundleSha256": "65ccbfdd9734980fa6471a20f748fdfe49d806b8deeeeea6f234cae5423d6ee0",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/automaton-rewind/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/automaton-rewind/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/automaton-rewind/16x9/detail.mp4",
      "bg": "#f0f7f4",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "615a24d18f34bc1333909a054573882bb539e662cdf151aa81b746ccbeb163c1",
        "loop": "cfaf12f038b65f7133442890a3688cfb312a65245e7d8355c11a60c50dd768ee",
        "detail": "4c66a26a455353a6c757523ca058e7ff9adcaef4ec73c61ddee4038157a5acd4"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/automaton-rewind/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/automaton-rewind/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/automaton-rewind/9x16/detail.mp4",
      "bg": "#f0f7f4",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4686051f9c4588eea12fecafaa84241b44f4d6e4477684c919298fbc4d7cfce1",
        "loop": "3d522c67b964e904311ac1d2a556f853fdd3ce2648e3bc297f1a7e1faa8ee7cd",
        "detail": "ed3b79cb29df8c816851e6adf2cb150f3096d5b88177f81b264b8769333372b8"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/automaton-rewind/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/automaton-rewind/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/automaton-rewind/1x1/detail.mp4",
      "bg": "#f0f7f4",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4e6a73b6eef9e90b84041fb899e43b959e2bc646f0d32794a221f61b92da0d1e",
        "loop": "c6b9c31fdc5917eb63974c21cdea6d32a89c0ec751bad700135760ee4b2b25ef",
        "detail": "f72ec940be31ab1735df9f75ff54e9916daa05464726bc968cee5fe7fcf5ce68"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/65ccbfdd9734980fa6471a20f748fdfe49d806b8deeeeea6f234cae5423d6ee0/index.mjs",
    "sha256": "65ccbfdd9734980fa6471a20f748fdfe49d806b8deeeeea6f234cae5423d6ee0",
    "bytes": 162089,
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
    "at": "2026-10-09T20:39:15.889Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
