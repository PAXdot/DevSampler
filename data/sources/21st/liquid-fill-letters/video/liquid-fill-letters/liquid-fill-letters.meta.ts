// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/craft",
  "job": "data",
  "language": "glass",
  "mechanic": [
    "fill"
  ],
  "tags": [
    "number",
    "percentage",
    "liquid",
    "glass",
    "vessel",
    "progress",
    "water",
    "slosh"
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
      "in": 118,
      "out": 0
    },
    "markers": {
      "settled": 118,
      "pour": 14,
      "slosh": 76
    },
    "beats": [
      0,
      14,
      76,
      118
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
      "type": "number",
      "role": "stat"
    },
    {
      "key": "label",
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
    "fontFamily": "fonts.display"
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
    "sourceUrl": "21st first-party (numeral-shaped glass vessels fill to a percentage with a damped liquid surface, 2026-10-09)"
  },
  "defaults": {
    "value": 78,
    "label": "Capacity",
    "primary": "#D6336C",
    "secondary": "#4C6EF5",
    "color": "#2A0F1A",
    "background": "#FFF5F7",
    "fontFamily": "Bricolage Grotesque",
    "seed": 31
  },
  "fields": [
    {
      "key": "value",
      "label": "Value",
      "type": "number",
      "min": 0,
      "max": 100,
      "role": "stat"
    },
    {
      "key": "label",
      "label": "Label",
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
      "brand": "fonts.display"
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1
    }
  ],
  "name": "Liquid Fill Number",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "liquid-fill-letters",
    "bundleSha256": "04e9d0ea88f6353103dcde773186535a1eef6a4d11230c2055bf3815bd3809d6",
    "sourceSnapshot": {
      "sha256": "be113857ae041533797b125ad6f1737614716f34c43f0c6f645addc012f77824",
      "files": 1926
    },
    "renderedAt": "2026-10-09T18:59:13.754Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/16x9-paper.png",
        "sha256": "8b4092cb2697e481700b1bd7372109f3b3fd9d9f76956c5648d937a5223e86cc"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/16x9-night.png",
        "sha256": "30f0a85759de876cdc7a1ce1f2cdf026990cc80ab0561398bfdd2e2ac628f272"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/16x9-color.png",
        "sha256": "a6829893ec1fe0befaee1e2feaae37c1a3c353f7949e14208c1da3e8f00a4d8d"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/9x16-paper.png",
        "sha256": "7a37eae5a4b2adce0abe32c88d1050530c252fc93a9efe2e0c6242fd545f55df"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/9x16-night.png",
        "sha256": "35362c963125af03fef89620294848040f1d2600a5bad01fefe473bb117d096d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/9x16-color.png",
        "sha256": "6df7c50cfcf6c4a8b2f2ceac8e36cb75b964adba0d58a5f2613a40bca61f131f"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/1x1-paper.png",
        "sha256": "6e0f30975f2f6eb92e02184d1c09e1de774d1946b99886bbe44617d2efc5022f"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/1x1-night.png",
        "sha256": "c9b3362b58436caae80f499181bf0eb9eeaeb68724a0f27e4603ecc2fc02723c"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/1x1-color.png",
        "sha256": "c3d84657c987c943a4b793bb197537d544edccb1fa052037b4061e60c1962062"
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
          "liquid-fill-letters--16x9",
          "liquid-fill-letters--9x16",
          "liquid-fill-letters--1x1"
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
            "paperNight": 24.47650824652778,
            "paperColor": 19.66848415798611,
            "region": {
              "left": 172,
              "top": 231,
              "width": 1576,
              "height": 701
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 38.260959201388886,
            "paperColor": 32.12684461805556,
            "region": {
              "left": 97,
              "top": 495,
              "width": 886,
              "height": 1166
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 33.63823784722222,
            "paperColor": 27.64154730902778,
            "region": {
              "left": 97,
              "top": 303,
              "width": 888,
              "height": 629
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
            "occupancy": 0.7550760144592819,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7529217319643908,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.742150319489936,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7060715554225807,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7030438043272866,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6945661012604631,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6771397116231038,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6765103160605808,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6642213069498492,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.275824652777778,
        "frames": [
          17,
          118,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 4.275824652777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/16x9-duration-150-frame-17.png",
                "sha256": "fc2e610c4d91c77166771706b323c2107448ef4d12144e5357926b319cd0b502",
                "alphaMass": 587520
              },
              {
                "frame": 118,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/16x9-duration-150-frame-118.png",
                "sha256": "56cc2f577589ff9b47f0567ba9b13ce8bfa264611c890b9d4c7ef464341f87bd",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/16x9-duration-150-frame-132.png",
                "sha256": "59cd9e740a1561393a4ba8efe81ff785b575447a65852b3441f238bcafb9f03a",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/16x9-duration-150-frame-149.png",
                "sha256": "ee3a728f9e450a2636745711fc4c4c4d8bcbbb3a3728b40e77c3202e0080d68e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 4.275824652777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/16x9-duration-600-frame-17.png",
                "sha256": "fc2e610c4d91c77166771706b323c2107448ef4d12144e5357926b319cd0b502",
                "alphaMass": 587520
              },
              {
                "frame": 118,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/16x9-duration-600-frame-118.png",
                "sha256": "56cc2f577589ff9b47f0567ba9b13ce8bfa264611c890b9d4c7ef464341f87bd",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/16x9-duration-600-frame-528.png",
                "sha256": "1e2905a89df1291057be73493e9be1ef6c70198cc9704babf96d3f55c67846f7",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/16x9-duration-600-frame-599.png",
                "sha256": "1e2905a89df1291057be73493e9be1ef6c70198cc9704babf96d3f55c67846f7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 7.162326388888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/9x16-duration-150-frame-17.png",
                "sha256": "2a8df88a397ce4afba203d9e2d65401ee86babc2cb25b667b41f93ed1f34d3aa",
                "alphaMass": 587520
              },
              {
                "frame": 118,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/9x16-duration-150-frame-118.png",
                "sha256": "df47fe7967c679b1afbfea54de3563203c00c25d5e92497716fa8c34fea8d9a0",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/9x16-duration-150-frame-132.png",
                "sha256": "df0241658f256e1cb05b401445046eb27dabb9341857a8be1c413106f029b75d",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/9x16-duration-150-frame-149.png",
                "sha256": "98487259c9aaa5d7414c877238940bb4f1ed7a7e592a6e8a7769bd772af63d64",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 7.162326388888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/9x16-duration-600-frame-17.png",
                "sha256": "2a8df88a397ce4afba203d9e2d65401ee86babc2cb25b667b41f93ed1f34d3aa",
                "alphaMass": 587520
              },
              {
                "frame": 118,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/9x16-duration-600-frame-118.png",
                "sha256": "df47fe7967c679b1afbfea54de3563203c00c25d5e92497716fa8c34fea8d9a0",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/9x16-duration-600-frame-528.png",
                "sha256": "44991fedf83b218490b3ac6ace8c3a282f578119be50f55925b99ce7af1110a5",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/9x16-duration-600-frame-599.png",
                "sha256": "44991fedf83b218490b3ac6ace8c3a282f578119be50f55925b99ce7af1110a5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 5.591579861111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/1x1-duration-150-frame-17.png",
                "sha256": "f05e877efa8e4e792c4e1585d9fbbe1ac09a394ca3c645ecd63abddf72d5d74c",
                "alphaMass": 587520
              },
              {
                "frame": 118,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/1x1-duration-150-frame-118.png",
                "sha256": "d82029cc97c513c1f68f36b41ca275a275e761fbc35d23f12d3fbc36b43c976a",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/1x1-duration-150-frame-132.png",
                "sha256": "0dd7da9879a2f4485ec5b9c025fa7c6af16cbddf7d1a52e3d64adbd7c739da96",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/1x1-duration-150-frame-149.png",
                "sha256": "51e22919e517d50008ff507aedff7ea9f8e8d9fe9f3502c4ddad8e462039af54",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 5.591579861111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 17,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/1x1-duration-600-frame-17.png",
                "sha256": "f05e877efa8e4e792c4e1585d9fbbe1ac09a394ca3c645ecd63abddf72d5d74c",
                "alphaMass": 587520
              },
              {
                "frame": 118,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/1x1-duration-600-frame-118.png",
                "sha256": "d82029cc97c513c1f68f36b41ca275a275e761fbc35d23f12d3fbc36b43c976a",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/1x1-duration-600-frame-528.png",
                "sha256": "3bddfbd58ecf74eaada4f6fb26eebe32209e17769b8e3288496cc1f5c3b85217",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/liquid-fill-letters/1x1-duration-600-frame-599.png",
                "sha256": "3bddfbd58ecf74eaada4f6fb26eebe32209e17769b8e3288496cc1f5c3b85217",
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
        "note": "1. TitleMatches: The sequence and design support the claimed 'Liquid Fill Number' title. Across the first four images, a large '78' is partially filled with liquid, visually representing the percentage, and the liquid interacts with the forms of the numerals in a visibly dynamic, flowing way. The sampled motion images (2-4) show transition states of the liquid fill, confirming the 'liquid fill' effect is visually present and actively animated.\n\n2. noBakedHeading: The only prominent text is the editable heading 'Capacity,' which matches the named slot content. There are no decorative block titles, category markers, language labels, or unexplained textual elements inserted into the visual field.\n\n3. brandAdherence: The last three images show clear palette swaps, corresponding to the three supplied palettes. Each version preserves the legibility and material effect of the numbers and liquid, with the hues, text, and background updating to match the supplied colors (including both light and dark backgrounds). There are no unexplained fixed block colors; all content is visibly adapted appropriately.\n\n4. languageAdherence: Across the rebrands and all sampled motion, material rendering (translucency, overlapping layers, edge highlights) and type roles (sans display, tabular numerals) remain consistent with the language card. There is visible depth, refractive lens outlines, and no appearance of forbidden effects such as generic opaque cards, neon glow, or blurred text. All roles described in the language card are honored in the visible samples."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 18,
        "compared": 18,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "04e9d0ea88f6353103dcde773186535a1eef6a4d11230c2055bf3815bd3809d6",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T19:04:22.933Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "liquid-fill-letters",
      "vsPositive": 0.875,
      "vsNegative": 1,
      "fakeVotes": 0.041666666666666664,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.75,
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
      "framesSha256": "322949bde067fcba365761e6099779e63e5b1d106a9b1c2c19dc46a322140959",
      "bundleSha256": "04e9d0ea88f6353103dcde773186535a1eef6a4d11230c2055bf3815bd3809d6",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/liquid-fill-letters/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/liquid-fill-letters/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/liquid-fill-letters/16x9/detail.mp4",
      "bg": "#fff5f7",
      "posterFrame": 118,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "26e5a2a641538dd1d02846fd5bc187bf264c846d71922b4a2ce06513d4385a9f",
        "loop": "89b899f190e480d976028c3010520011c17d29da8d20976d436457feda024035",
        "detail": "64e961e7cd8c9107bbdfd0ba705798f4afa05ec8aebf23ada163c3a125b7e938"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/liquid-fill-letters/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/liquid-fill-letters/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/liquid-fill-letters/9x16/detail.mp4",
      "bg": "#fff5f7",
      "posterFrame": 118,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "cee1df547a4f1474cd431541e847d363b0c0ffc387ff3391650c47fbc3e4e5cb",
        "loop": "bb40867e765cea0c405f0b366842d61d08a97346fadef7e4d2b81f4027bb4541",
        "detail": "2e30fd3e67561fd369cd8f94d37398ea9a6406a4eeb8a32dbea220f91ae493ca"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/liquid-fill-letters/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/liquid-fill-letters/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/liquid-fill-letters/1x1/detail.mp4",
      "bg": "#fff5f7",
      "posterFrame": 118,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c963764f60e7229f30a834069d78692e6cc0cd4f9dfd0466e40f67b878ba557e",
        "loop": "7b0932a390544d3c09f261946a0334835ef34eef1b6dcbcc8c813a818ecb0a09",
        "detail": "b0d11033adb5bff4fbc1e21a94a80bd1a9f34b9a9825355abf0b3072f66f3bbb"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/04e9d0ea88f6353103dcde773186535a1eef6a4d11230c2055bf3815bd3809d6/index.mjs",
    "sha256": "04e9d0ea88f6353103dcde773186535a1eef6a4d11230c2055bf3815bd3809d6",
    "bytes": 161743,
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
    "at": "2026-10-09T19:26:43.130Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
