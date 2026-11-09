// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "editorial",
  "mechanic": [
    "fold"
  ],
  "energy": "default",
  "tags": [
    "title",
    "headline",
    "pop-up",
    "book",
    "storybook",
    "paper",
    "cut paper",
    "die-cut",
    "layers",
    "3d",
    "fold",
    "hardcover",
    "opener",
    "launch"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 96,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 84,
      "out": 0
    },
    "markers": {
      "settled": 84,
      "open": 8,
      "back": 13,
      "middle": 18,
      "wings": 23,
      "card": 29
    },
    "beats": [
      0,
      8,
      13,
      18,
      23,
      29,
      84
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
      "maxChars": 48,
      "lines": 3,
      "role": "headline"
    },
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "eyebrow"
    },
    {
      "key": "logo",
      "type": "image",
      "role": "logo"
    }
  ],
  "brand": {
    "color": "colors.text",
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "background": "colors.background",
    "fontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "cover",
      "prop": "rotateX",
      "from": "closed",
      "settledBy": 58,
      "easing": "spring"
    },
    {
      "target": "layers",
      "prop": "rotateX",
      "from": "flat",
      "settledBy": 64,
      "easing": "spring"
    },
    {
      "target": "card",
      "prop": "rotateX",
      "from": "flat",
      "settledBy": 84,
      "easing": "spring"
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (hardcover pop-up book opens, die-cut paper layers stand up on parallel-fold hinges, headline card pops last, 2026-10-08)"
  },
  "defaults": {
    "text": "Ship faster",
    "kicker": "Introducing",
    "logo": "",
    "color": "#1E1036",
    "primary": "#7C3AED",
    "secondary": "#F472B6",
    "background": "#F5F0FF",
    "fontFamily": "Libre Baskerville",
    "grain": true
  },
  "fields": [
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 48,
      "role": "headline"
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 32,
      "role": "eyebrow"
    },
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
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
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    }
  ],
  "name": "Pop-up Book",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "pop-up-book-spread",
    "bundleSha256": "11c9c60167c0d976181260df8a2d0d9911ec54546c7ad6511e7a0ce6eea585db",
    "sourceSnapshot": {
      "sha256": "4d15cc6a8610042e258ba365d1aef0b9449d075bb3cded6312271d209ce210ec",
      "files": 2106
    },
    "renderedAt": "2026-10-09T21:44:24.152Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/16x9-paper.png",
        "sha256": "d71cce41bbcbf84c7cc02dbb51f95e9913518c92d9e35211cfa94f2ab40ad4dc"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/16x9-night.png",
        "sha256": "f9fb33ea1c0114ebe72667bdc51571a9c306e90c21a9794991b6e0f8648ff4f6"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/16x9-color.png",
        "sha256": "8312d268e79c5762c23676e05d5164cff57ee228e1e99e61f9f2618772580e7e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/9x16-paper.png",
        "sha256": "bfe2270cabfae91eeed22a791ef930dea1f4c7b2a54adc8c88f0bea142b6bd99"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/9x16-night.png",
        "sha256": "c0bc50aaeb6ed034bcd939f866eb5c3e3f8f5870fcc5488940dfcbe481e9a88f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/9x16-color.png",
        "sha256": "a40a6add2854eda94b5ea197cdb9a8cca9a7736fef1380326406366beb37cc36"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/1x1-paper.png",
        "sha256": "bfc315f76646c477daf166d061ac2c4d464e8ea7594b9aa5576cbf034b28b967"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/1x1-night.png",
        "sha256": "afb58594918abdf29dc6d23a5c6594bc13e54be83e14994238cb44c0c19df9e2"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/1x1-color.png",
        "sha256": "781fed767f474f5242ed6a9c57a654e0e80518004e16f0143c3cab5915f1828d"
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
          "pop-up-book-spread--16x9",
          "pop-up-book-spread--9x16",
          "pop-up-book-spread--1x1"
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
            "paperNight": 64.74235026041667,
            "paperColor": 12.10915798611111,
            "region": {
              "left": 45,
              "top": 81,
              "width": 1858,
              "height": 933
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 84.37239583333333,
            "paperColor": 8.67575412326389,
            "region": {
              "left": 0,
              "top": 375,
              "width": 1080,
              "height": 1221
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 69.52067057291667,
            "paperColor": 13.08596462673611,
            "region": {
              "left": 0,
              "top": 148,
              "width": 1080,
              "height": 804
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
            "occupancy": 1.1077522894445846,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.184796594177795,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1077522894445846,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8850328325774757,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9012719671201816,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8850328325774757,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.037992357436802,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0550516502897458,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.037992357436802,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 15.94997829861111,
        "frames": [
          12,
          84,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 96,
            "averageChannelDifference": 18.4365234375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/16x9-duration-96-frame-11.png",
                "sha256": "1939de7695907778c392f5d77b864ab4a8ab5d4c1e673730e0b42ad6560d53d7",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/16x9-duration-96-frame-84.png",
                "sha256": "48430dcc4a80897a8698829feae601d1f75da3f0b101a894d421ae2e014667b5",
                "alphaMass": 587520
              },
              {
                "frame": 95,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/16x9-duration-96-frame-95.png",
                "sha256": "d94247d4e57a96ca6d6e58d910b6e82f2283f322d6c846a7fe22b63ce81734a5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 15.94997829861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/16x9-duration-600-frame-12.png",
                "sha256": "4ba46690704aa2d704f2e8d3a3416e34f2230948256f2eb0bebfa7902bc72330",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/16x9-duration-600-frame-84.png",
                "sha256": "48430dcc4a80897a8698829feae601d1f75da3f0b101a894d421ae2e014667b5",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/16x9-duration-600-frame-528.png",
                "sha256": "48430dcc4a80897a8698829feae601d1f75da3f0b101a894d421ae2e014667b5",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/16x9-duration-600-frame-599.png",
                "sha256": "48430dcc4a80897a8698829feae601d1f75da3f0b101a894d421ae2e014667b5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 96,
            "averageChannelDifference": 18.411241319444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/9x16-duration-96-frame-11.png",
                "sha256": "58afbbc58af8b4559145aa2c738248de16d7d4243ac7ea11b45b3a7bff4f2d36",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/9x16-duration-96-frame-84.png",
                "sha256": "51fb7914093cc26ca68947a79681c8bd173e7630fd5b886b6e3ecb419f43866b",
                "alphaMass": 587520
              },
              {
                "frame": 95,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/9x16-duration-96-frame-95.png",
                "sha256": "51fb7914093cc26ca68947a79681c8bd173e7630fd5b886b6e3ecb419f43866b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 15.826497395833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/9x16-duration-600-frame-12.png",
                "sha256": "40dd788d528e3ff625d8610d937969ada3a141d8d305f0d9fb0c87dc9d2f2193",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/9x16-duration-600-frame-84.png",
                "sha256": "9693ea53517f083e5f50535b9e2d638d472efc5ecb4373bc06ef88ea3b942571",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/9x16-duration-600-frame-528.png",
                "sha256": "51fb7914093cc26ca68947a79681c8bd173e7630fd5b886b6e3ecb419f43866b",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/9x16-duration-600-frame-599.png",
                "sha256": "9693ea53517f083e5f50535b9e2d638d472efc5ecb4373bc06ef88ea3b942571",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 96,
            "averageChannelDifference": 18.905924479166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/1x1-duration-96-frame-11.png",
                "sha256": "494f1d329b6388bc9b132ca0e9c044f01a5ed2476df794741bb8a5b2e857a3f7",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/1x1-duration-96-frame-84.png",
                "sha256": "602a2298b424d2936711a9ae9561a4b2b335115c5741fc7372f42dc4decd377d",
                "alphaMass": 587520
              },
              {
                "frame": 95,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/1x1-duration-96-frame-95.png",
                "sha256": "602a2298b424d2936711a9ae9561a4b2b335115c5741fc7372f42dc4decd377d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 16.66362847222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/1x1-duration-600-frame-12.png",
                "sha256": "43ec2de423622f511d5495737bce1096dd9287e89fbec0bd017281d5d6561b1d",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/1x1-duration-600-frame-84.png",
                "sha256": "602a2298b424d2936711a9ae9561a4b2b335115c5741fc7372f42dc4decd377d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/1x1-duration-600-frame-528.png",
                "sha256": "602a2298b424d2936711a9ae9561a4b2b335115c5741fc7372f42dc4decd377d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T213719Z/gates/pop-up-book-spread/1x1-duration-600-frame-599.png",
                "sha256": "602a2298b424d2936711a9ae9561a4b2b335115c5741fc7372f42dc4decd377d",
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
        "note": "1. TitleMatches: The subject is a 3D paper pop-up book, visually supporting the claimed 'Pop-up Book' title. The motion samples (images 2-4) show the book closed, opening, and the interior popping up, which satisfyingly displays the pop-up effect described by the title. \n2. noBakedHeading: All visible text matches named slot content ('Introducing Ship faster'), formatted as paper labels or cards within the scene; there are no decorative or unexplained block titles/labels embedded in the artwork, and no extraneous headings outside of UI/slot context.\n3. BrandAdherence: The last three posters (images 5-7) each use a different color palette as supplied, ranging through warm (brown/pink), dark (green/black), and cool (blue/aqua) schemes. Within each, text, lines, outlines, and elements remain clear and legible. No fixed or unexplained colors are retained. The pop-up shapes and layout remain consistent, only the colors change according to the brand palette, fulfilling multi-palette legibility and adherence to the brand's supplied schemes.\n4. LanguageAdherence: The visuals (and all sampled posters) use a paper-grain texture, visible fine rules, and margins; all type is serif or a similar readable typeface with oldstyle numerals, matching the described language card. There are no glowing, glass, shadow, or gradient effects, and the design fits both dark/light backgrounds. The motion (opening/drawing/rising of paper elements) fits the described verbs exactly. Type roles, color application, and material details remain consistent across palettes. All requirements are concretely evidenced in the poster set."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 71,
        "compared": 71,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "11c9c60167c0d976181260df8a2d0d9911ec54546c7ad6511e7a0ce6eea585db",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T21:53:01.150Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "pop-up-book-spread",
      "vsPositive": 0.9166666666666666,
      "vsNegative": 1,
      "fakeVotes": 0.10416666666666667,
      "perModel": {
        "claude": {
          "vsPositive": 0.875,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.875,
          "vsNegative": 1
        },
        "gemini": {
          "vsPositive": 1,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "f5d9a97ec259d831e04d052f0145fab6651456e32bb7965d7d07d10003129b9d",
      "bundleSha256": "11c9c60167c0d976181260df8a2d0d9911ec54546c7ad6511e7a0ce6eea585db",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/pop-up-book-spread/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/pop-up-book-spread/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/pop-up-book-spread/16x9/detail.mp4",
      "bg": "#f1ecfb",
      "posterFrame": 84,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "b7c6815e7543dbb40152d6548524c81cd0d2c3ddde74ec904ccd438174087c2c",
        "loop": "4af23da5ef6b5c5c9363e85d568a0039ebe03339526206714e75eac231a531e2",
        "detail": "af0ed08ede8dc725c12d506bd7c9531c0aa145fe64da7a6ea8cd7079ea90630a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/pop-up-book-spread/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/pop-up-book-spread/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/pop-up-book-spread/9x16/detail.mp4",
      "bg": "#f1ecfb",
      "posterFrame": 84,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "9fb44c2fc14c8fe355db3ac05e8734f5cc2b3ba85bb932d89e76fb3f820154d1",
        "loop": "5c66866791bc9ec22f4c182150ad92fbb2c5994e7aa0508d582f9e0bb1313ae1",
        "detail": "aa197799a1330b986b2cfb4c21dbc772333e851dd5c5b3d6150f83fb1dcdd265"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/pop-up-book-spread/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/pop-up-book-spread/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/pop-up-book-spread/1x1/detail.mp4",
      "bg": "#f1ecfb",
      "posterFrame": 84,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "fe92a401f748c7faff6c84daa0600ddaebd678733464ab7cf19a1c0b3379001d",
        "loop": "9975f0774e098b4dca3bc217b2c21ae28ca474c585060252e3a4cd73002ba00f",
        "detail": "2221e143ce417fe82a99a772928fc3dc538c34d87372c46dd463288e4643bf14"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/11c9c60167c0d976181260df8a2d0d9911ec54546c7ad6511e7a0ce6eea585db/index.mjs",
    "sha256": "11c9c60167c0d976181260df8a2d0d9911ec54546c7ad6511e7a0ce6eea585db",
    "bytes": 178087,
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
    "at": "2026-10-09T22:03:13.751Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
