// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "neo-brutal",
  "mechanic": [
    "flashcard-drop-flip"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "flashcard-drop-flip",
    "flashcards",
    "language",
    "learning",
    "flip"
  ],
  "engines": {
    "remotion": ">=4.0.533 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 90,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 90,
      "out": 0
    },
    "markers": {
      "settled": 90
    },
    "beats": [
      0,
      23,
      45,
      68,
      90
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
    "preset": "full",
    "backdrop": [
      "paintBackground"
    ]
  },
  "slots": [
    {
      "key": "word",
      "type": "text",
      "maxChars": 18,
      "role": "headline"
    },
    {
      "key": "answer",
      "type": "text",
      "maxChars": 14,
      "role": "headline"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 12,
      "role": "cta"
    },
    {
      "key": "brand",
      "type": "text",
      "maxChars": 18,
      "role": "label"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.display",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "flashcard-drop-flip",
      "prop": "transform",
      "from": "enter",
      "settledBy": 90,
      "easing": "ease"
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
      180
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/launch-videos-2026-10-06/README.md"
  },
  "defaults": {
    "ink": "#23305A",
    "accent": "#FF6B5B",
    "secondary": "#2BB3A3",
    "paper": "#FFD84D",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "word": "la manzana",
    "answer": "apple",
    "cta": "Got it!",
    "brand": "Brightwell Kids"
  },
  "fields": [
    {
      "key": "ink",
      "label": "Ink",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "accent",
      "label": "Accent",
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
      "key": "paper",
      "label": "Paper",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "displayFont",
      "label": "Display font",
      "type": "font",
      "brand": "fonts.display"
    },
    {
      "key": "bodyFont",
      "label": "Body font",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFont",
      "label": "Mono font",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "paintBackground",
      "label": "Paint background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "word",
      "label": "Word",
      "type": "text",
      "max": 18,
      "role": "headline"
    },
    {
      "key": "answer",
      "label": "Answer",
      "type": "text",
      "max": 14,
      "role": "headline"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 12,
      "role": "cta"
    },
    {
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 18,
      "role": "label"
    }
  ],
  "name": "Flashcard Flip",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-edu-flashcards",
    "bundleSha256": "c5d81d1a97aca640876044127645156282467ca77cfd8310613000db1055fce8",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:09:50.263Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/16x9-paper.png",
        "sha256": "7d2ca0debf90a6379f60894a315ab9c05aeaea4c529a54aa13cdbaeb2a9f8d20"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/16x9-night.png",
        "sha256": "5720d3785dcff5f611e56e3619eab50f461f702999c5114f1650f6df7fff0a03"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/16x9-color.png",
        "sha256": "c925ec7a447f083b0abb90469113a24720ab0c3a9c197f5d901f5ca837dd148c"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/9x16-paper.png",
        "sha256": "ca6c6a898ca36acd61dea9570e18e2f6295ec9ab945e48a5d9d43c190fbc5c41"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/9x16-night.png",
        "sha256": "5ed7cefa7a94558b6cb5b007be1a91d6090419f7edf7bce5b898021a29b81a0b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/9x16-color.png",
        "sha256": "8f237d7e4479a23e6905c5681bbec0aa0b9e56db95b0b3e12a4a3a0e91619ee5"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/1x1-paper.png",
        "sha256": "ffd7175c59ff8379ffdb3e12aaaba67a4c599975f79e47755270452d9af67d7d"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/1x1-night.png",
        "sha256": "c5e5b74b1c295c9cdee51312ce7fbea85e77c3771382d70d35520eaa348ddf93"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/1x1-color.png",
        "sha256": "04f562e58ee9a2d704d3a215d72ccaa8a3a049fb1459516cc2d79eb6ab711a7d"
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
          "mg-edu-flashcards--16x9",
          "mg-edu-flashcards--9x16",
          "mg-edu-flashcards--1x1"
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
            "paperNight": 13.6435546875,
            "paperColor": 4.954644097222222,
            "region": {
              "left": 96,
              "top": 65,
              "width": 1728,
              "height": 913
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 30.418321397569443,
            "paperColor": 16.161295572916668,
            "region": {
              "left": 53,
              "top": 76,
              "width": 969,
              "height": 1611
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 26.260660807291668,
            "paperColor": 9.67190212673611,
            "region": {
              "left": 65,
              "top": 58,
              "width": 950,
              "height": 956
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
            "occupancy": 1.0782785336356768,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0782785336356768,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0782785336356768,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.066929593017763,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.066929593017763,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.066929593017763,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.103507818307936,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.103507818307936,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.103507818307936,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.4625651041666665,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 3.4013671875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/16x9-duration-90-frame-10.png",
                "sha256": "6d0be4037e144a7f7c67b0c8a7b2e09141f9bfa7af6f2efc15095b542dfcb6a1",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/16x9-duration-90-frame-89.png",
                "sha256": "c7bc2010d82b1557fbc719cb635b3f7211e3daf8148959fbc90c327e7b09f5f8",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/16x9-duration-90-frame-79.png",
                "sha256": "c7bc2010d82b1557fbc719cb635b3f7211e3daf8148959fbc90c327e7b09f5f8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 3.4625651041666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/16x9-duration-900-frame-13.png",
                "sha256": "828d6c4cc9520dfa0d760f01825e4766a1727875fa6770febe56a10c44422bcf",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/16x9-duration-900-frame-90.png",
                "sha256": "c7bc2010d82b1557fbc719cb635b3f7211e3daf8148959fbc90c327e7b09f5f8",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/16x9-duration-900-frame-792.png",
                "sha256": "c7bc2010d82b1557fbc719cb635b3f7211e3daf8148959fbc90c327e7b09f5f8",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/16x9-duration-900-frame-899.png",
                "sha256": "c7bc2010d82b1557fbc719cb635b3f7211e3daf8148959fbc90c327e7b09f5f8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 6.654839409722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/9x16-duration-90-frame-10.png",
                "sha256": "eab37be9066099582967d45c597911e2597b53e1154be4a7593716ade94838b2",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/9x16-duration-90-frame-89.png",
                "sha256": "75df2c1cbb226576ec5b3ed5edd7f866539c66ff15c979b7832557eb52554e10",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/9x16-duration-90-frame-79.png",
                "sha256": "75df2c1cbb226576ec5b3ed5edd7f866539c66ff15c979b7832557eb52554e10",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 6.746636284722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/9x16-duration-900-frame-13.png",
                "sha256": "a506745b86016f11467b42bb4dfc8846113658ff7d9916949739f82b5f2f3f5a",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/9x16-duration-900-frame-90.png",
                "sha256": "75df2c1cbb226576ec5b3ed5edd7f866539c66ff15c979b7832557eb52554e10",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/9x16-duration-900-frame-792.png",
                "sha256": "75df2c1cbb226576ec5b3ed5edd7f866539c66ff15c979b7832557eb52554e10",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/9x16-duration-900-frame-899.png",
                "sha256": "75df2c1cbb226576ec5b3ed5edd7f866539c66ff15c979b7832557eb52554e10",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 6.1640625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/1x1-duration-90-frame-10.png",
                "sha256": "13c578112a2505a4ff6509348840e24da4b88e17fde752c4373c879361599f15",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/1x1-duration-90-frame-89.png",
                "sha256": "9004dc426d7b0124fd78fd71349b23eacd5002adabe36845e8b6a5175c1fabe6",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/1x1-duration-90-frame-79.png",
                "sha256": "9004dc426d7b0124fd78fd71349b23eacd5002adabe36845e8b6a5175c1fabe6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 6.272569444444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/1x1-duration-900-frame-13.png",
                "sha256": "0417da713bf6c8c3b2201bc08d7a3cac15d3c1977fa90b22212229a0eee0f941",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/1x1-duration-900-frame-90.png",
                "sha256": "9004dc426d7b0124fd78fd71349b23eacd5002adabe36845e8b6a5175c1fabe6",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/1x1-duration-900-frame-792.png",
                "sha256": "9004dc426d7b0124fd78fd71349b23eacd5002adabe36845e8b6a5175c1fabe6",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-20/mg-edu-flashcards/1x1-duration-900-frame-899.png",
                "sha256": "9004dc426d7b0124fd78fd71349b23eacd5002adabe36845e8b6a5175c1fabe6",
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
        "note": "A flashcard flips from the foreign word to the answer with again/got-it buttons; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 76,
        "compared": 76,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "c5d81d1a97aca640876044127645156282467ca77cfd8310613000db1055fce8",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.093Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-flashcards/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-flashcards/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-flashcards/16x9/detail.mp4",
      "bg": "#ffd84d",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e7bf558f5829f852cd151960f64f4d369327d3a4f4d40effc0e54d01df58247c",
        "loop": "5bcd9dcdfc0a17f7e2a6f0458aee5a2e22083737c21b064372f9c46ba9742912",
        "detail": "5add51a484fb33f608b06c5a6d5939b45dfef20efc10d600e3f5d2d9d742728b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-flashcards/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-flashcards/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-flashcards/9x16/detail.mp4",
      "bg": "#ffd84d",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3d6b593fe7fe308dd797b53caed66996f6e6ab32d4e955cf5836d61515134a61",
        "loop": "48139eef219b5afb82f5c57edb319aaf771f34af8329d7eee4430ded151235e7",
        "detail": "10b69f6cc31c08b727e32bf976c8d54ebd166ff8786b77d9d93f8d8108189b6e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-flashcards/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-flashcards/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-flashcards/1x1/detail.mp4",
      "bg": "#ffd84d",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ba503695c4c15a29f05812f58ed4614cde79bfc7c708d690d089379b1814c0db",
        "loop": "e2fb3c6613ba9b024ecea187b951254ee2126a6ebd9da54dd0336aa63b592a95",
        "detail": "6a6dff1c718e8798dafcf6add0a4df0f66ba87e08be8a90e04198f9b88e8d9fa"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c5d81d1a97aca640876044127645156282467ca77cfd8310613000db1055fce8/index.mjs",
    "sha256": "c5d81d1a97aca640876044127645156282467ca77cfd8310613000db1055fce8",
    "bytes": 287729,
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
    "at": "2026-10-09T07:16:47.181Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
