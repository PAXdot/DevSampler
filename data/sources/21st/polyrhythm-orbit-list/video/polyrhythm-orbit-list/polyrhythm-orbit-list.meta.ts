// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "process/craft",
  "job": "process",
  "language": "aura",
  "mechanic": [
    "orbit"
  ],
  "energy": "default",
  "tags": [
    "process",
    "steps",
    "list",
    "orbit",
    "rhythm",
    "polyrhythm",
    "logo",
    "workflow",
    "sequence",
    "loop machine"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 210,
      "min": 180,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 192,
      "out": 0
    },
    "markers": {
      "firstHit": 20,
      "align": 150,
      "settled": 192
    },
    "beats": [
      20,
      28,
      41,
      52,
      68,
      84,
      95,
      108,
      116,
      150
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
      "key": "items",
      "type": "list",
      "maxChars": 28,
      "lines": 1,
      "role": "label"
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
    "fontFamily": "fonts.heading",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "orbit",
      "prop": "stroke",
      "from": "12 o'clock",
      "settledBy": 20,
      "easing": "ease"
    },
    {
      "target": "item",
      "prop": "x",
      "from": "left",
      "settledBy": 140,
      "easing": "spring"
    },
    {
      "target": "dots",
      "prop": "angle",
      "settledBy": 192,
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
      210
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (three orbits at 5:4:3 fire list items at 12 o'clock and align on the last beat, 2026-10-08)"
  },
  "defaults": {
    "items": [
      "Research",
      "Design",
      "Build",
      "Review",
      "Ship"
    ],
    "logo": "",
    "color": "#F5EEF8",
    "primary": "#FFB703",
    "secondary": "#FB5607",
    "background": "#130B1A",
    "fontFamily": "Geist",
    "monoFontFamily": "Geist Mono"
  },
  "fields": [
    {
      "key": "items",
      "label": "Items",
      "type": "list",
      "max": 6,
      "role": "label"
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
      "brand": "fonts.heading"
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    }
  ],
  "name": "Polyrhythm Orbits",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "polyrhythm-orbit-list",
    "bundleSha256": "3ab069653ddb7e1722869cc37848f353928b59bdd0948e8a1fd24922cc4ddc26",
    "sourceSnapshot": {
      "sha256": "ade5a01d4641fd068192eed79974774977f5294a073659ffd767e9f0122d76ab",
      "files": 1800
    },
    "renderedAt": "2026-10-09T08:02:39.742Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/16x9-paper.png",
        "sha256": "d448185aa730e58372f06bfbd2dd58c58dd9cc5b9222ae61a2d133e1f761d2bb"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/16x9-night.png",
        "sha256": "8e02d8e79724e0f8ff3b53bc263b0f15d5a07b815ac4e51d4a567914234b093d"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/16x9-color.png",
        "sha256": "cbbb1264c31d314e205628fd4ccfb1f238e17341ba5231fc68a8f9c209697862"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/9x16-paper.png",
        "sha256": "05a3c0abaf24ab7ee4bc5273180342d05f1f39c8d95b9396c5e8b65d5e27088d"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/9x16-night.png",
        "sha256": "33bbf5450ad0e84bf8e17ef874000a6a0f42589f818fb0332505e3cf7b037f98"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/9x16-color.png",
        "sha256": "0b63d2ea72f6b54b2434453e1b1eb4904ad02f5f9606ee8067921b79e216fc8e"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/1x1-paper.png",
        "sha256": "72b562ebcc2145431a7df6c692ca9a1451b4557b2bb7a8e0c3e652e47c5eb0cb"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/1x1-night.png",
        "sha256": "f67364b75959176b5ce8ca71f60db08fb56c8afe9a4e689b4895a141375a5000"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/1x1-color.png",
        "sha256": "fd39cc378e536106535210eb2b5364f7b061b7deab8713b0158cba7a4ff470c6"
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
          "polyrhythm-orbit-list--16x9",
          "polyrhythm-orbit-list--9x16",
          "polyrhythm-orbit-list--1x1"
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
            "paperNight": 37.89385308159722,
            "paperColor": 13.249647352430555,
            "region": {
              "left": 279,
              "top": 95,
              "width": 1355,
              "height": 862
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 39.58799913194444,
            "paperColor": 16.08425564236111,
            "region": {
              "left": 117,
              "top": 154,
              "width": 846,
              "height": 1570
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 41.434488932291664,
            "paperColor": 14.64504665798611,
            "region": {
              "left": 80,
              "top": 234,
              "width": 914,
              "height": 588
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
            "occupancy": 0.7935810801944236,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7982942566172562,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7488059041775148,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9077922256865711,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9077922256865711,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9077922256865711,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6487197073616828,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6530064014631917,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.60728166438043,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.3812934027777777,
        "frames": [
          25,
          192,
          209
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 180,
            "averageChannelDifference": 3.9111328125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/16x9-duration-180-frame-21.png",
                "sha256": "141f054f4e1b270ea3d21f40ff3c5e6e957e58b7b9203a85d48d1b1ed16e3d64",
                "alphaMass": 587520
              },
              {
                "frame": 179,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/16x9-duration-180-frame-179.png",
                "sha256": "d0ddf8d277d81fa856dc36a1bd2179c1c5f5cf78131af358fafa62b305843ca1",
                "alphaMass": 587520
              },
              {
                "frame": 158,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/16x9-duration-180-frame-158.png",
                "sha256": "de55fbf068697f19a9c98528256d415a7d3858a563a8b277101dd2059b68c117",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 3.612087673611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 28,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/16x9-duration-600-frame-28.png",
                "sha256": "7e0ccf6f1e1ad561f05c1a754cae8d96064ebd8b33a28c59baf6fb58eb75d45f",
                "alphaMass": 587520
              },
              {
                "frame": 192,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/16x9-duration-600-frame-192.png",
                "sha256": "8524bb8c7bd7ed3c92cea9dd98b47b591915e78417f9b73179eb65f6975feb28",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/16x9-duration-600-frame-528.png",
                "sha256": "8875f5261f26c72a6e5f9f57c7a8be7f63ba93a49b0588dbd8ebac2fb34aa47e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/16x9-duration-600-frame-599.png",
                "sha256": "8875f5261f26c72a6e5f9f57c7a8be7f63ba93a49b0588dbd8ebac2fb34aa47e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 180,
            "averageChannelDifference": 4.489583333333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/9x16-duration-180-frame-21.png",
                "sha256": "1b7b3a419599a6672a358a6dc67c5d596c7078fdb2244d0af2f2edcc635af8d5",
                "alphaMass": 587520
              },
              {
                "frame": 179,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/9x16-duration-180-frame-179.png",
                "sha256": "c0c9d2ca79e1ad93c0e2daf6d79a42b46dad00e12a239cf09978fab1a22dbb77",
                "alphaMass": 587520
              },
              {
                "frame": 158,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/9x16-duration-180-frame-158.png",
                "sha256": "12bf5dc7896720298a2faf47ed6d14feeed6eb9677f73e9a241cc37bed25cf23",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 4.037326388888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 28,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/9x16-duration-600-frame-28.png",
                "sha256": "bf2bfdfa2ab114956d1aadffa96e4945478032bce4f145abb20e696519b52a33",
                "alphaMass": 587520
              },
              {
                "frame": 192,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/9x16-duration-600-frame-192.png",
                "sha256": "b7d7ffd332cada67edc6f96b475dc05cd84ae25fb6f68473302858266482681d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/9x16-duration-600-frame-528.png",
                "sha256": "5d447299674d6a92d55d8ca011ba9f68caaa32c52bf74c07f51f2c4a6bb672b5",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/9x16-duration-600-frame-599.png",
                "sha256": "5d447299674d6a92d55d8ca011ba9f68caaa32c52bf74c07f51f2c4a6bb672b5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 180,
            "averageChannelDifference": 4.143120659722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/1x1-duration-180-frame-21.png",
                "sha256": "7c030b73e1b840794e49220175ca7157fc483c375b09dd7286dd01ac235fea2a",
                "alphaMass": 587520
              },
              {
                "frame": 179,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/1x1-duration-180-frame-179.png",
                "sha256": "774f0617969d70ac298453facd80797e75f4f4cd7430fdf65d5e98dbf1d1b890",
                "alphaMass": 587520
              },
              {
                "frame": 158,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/1x1-duration-180-frame-158.png",
                "sha256": "d327bbfc05c86e955cfe7ee7dab6a3a8c06426f58b61364cbd902a7fa9fcfd9e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 3.7671440972222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 28,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/1x1-duration-600-frame-28.png",
                "sha256": "e6ad9f1ca8a0604668afd21dda4c6d34eca2d375dbd7c18ffacc50bbad67436c",
                "alphaMass": 587520
              },
              {
                "frame": 192,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/1x1-duration-600-frame-192.png",
                "sha256": "c6a6be6f69d3aa349f2d4505a84e92a2e553bc9371c405e8bd2edd9857dbaa2d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/1x1-duration-600-frame-528.png",
                "sha256": "bb2352e5a75d0be002813a3ec30d4d372f2eee39d93f051a5ec269aefe803b5f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-094607/polyrhythm-orbit-list/1x1-duration-600-frame-599.png",
                "sha256": "bb2352e5a75d0be002813a3ec30d4d372f2eee39d93f051a5ec269aefe803b5f",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "process",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "1. TitleMatches: The subject is a central orbital motif with five labeled steps (Research, Design, Build, Review, Ship) shown as orbiting nodes with connecting paths and aperiodic spacing, supporting the 'Polyrhythm Orbits' title through visible structure, theme, and variable circular motion in sampled frames. The second image captures actual node motion, confirming dynamic orbit/rhythm, not merely static or radially symmetric arrangement. \n\n2. noBakedHeading: There is no decorative or unexplained heading or block title in any composition; all text is explained by the editable content or legend (steps), and no category or language label appears in the layout.\n\n3. brandAdherence: Images 5-7 show the poster under three distinct, supplied palettes. Each variant: uses the correct key and accent colors, preserves centralized orbital/step structure, and maintains appropriate contrast/legibility on light, dark, and colored backgrounds. No unexplained fixed block colors or evidence of palette misuse is present. \n\n4. languageAdherence: Across all rebrands and sampled motion, visual material remains consistent: a soft ambient background field, sharp isolated subject (central orbits), clear tabular numerals, and large sans typography; no blurred foreground text, no rainbow palettes, and no UI skeleton as subject. Each rebrand and animation moment maintains these qualities, as described and prescribed by the language card."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 17,
        "compared": 17,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "3ab069653ddb7e1722869cc37848f353928b59bdd0948e8a1fd24922cc4ddc26",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T08:05:06.549Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/polyrhythm-orbit-list/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/polyrhythm-orbit-list/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/polyrhythm-orbit-list/16x9/detail.mp4",
      "bg": "#130b1a",
      "posterFrame": 192,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "2502b42591ed6de7c5e218ce9963da98d610555f9316cc9c2cac37e6fe30bcbc",
        "loop": "d12bfbe571c20039fdecc6af6015320b5d95e2f90e9ecaf76f8c985c2b0eae2f",
        "detail": "b9d9a38ff449653dac92d87dd3840eec6a189d434980f840716e00d1c320afaa"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/polyrhythm-orbit-list/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/polyrhythm-orbit-list/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/polyrhythm-orbit-list/9x16/detail.mp4",
      "bg": "#130b1a",
      "posterFrame": 192,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "cefc65b27f9c86694c75cc81bc89ae3936df07f001e170402e39bde76cab1673",
        "loop": "33c9cadb3721ab209fd975ddc86cc73a76e8ab160e012e25f918f4cc8295f609",
        "detail": "43a76e8ac04cc262848f1cdf86f469d6d9e142cbc4487a1e6c56fbd44fa8da1e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/polyrhythm-orbit-list/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/polyrhythm-orbit-list/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/polyrhythm-orbit-list/1x1/detail.mp4",
      "bg": "#130b1a",
      "posterFrame": 192,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 210,
      "sha256": {
        "poster": "42a1f30ffe3d252eefc61ff518febed733f684a77ae470d28c7c2bde1cfa83f2",
        "loop": "9c3fe43364cdf04d1ead3d9cda4ff1927e6940d7b6e861017ea94024b7a33424",
        "detail": "475cb00c73b11e6fa98e9c871d56bd3ee741253daecc74067c1c80e78f45574c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/3ab069653ddb7e1722869cc37848f353928b59bdd0948e8a1fd24922cc4ddc26/index.mjs",
    "sha256": "3ab069653ddb7e1722869cc37848f353928b59bdd0948e8a1fd24922cc4ddc26",
    "bytes": 170816,
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
    "at": "2026-10-09T09:06:54.395Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
