// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "testimonial/rating",
  "tags": [
    "testimonial",
    "rating",
    "stars",
    "reviews",
    "social proof",
    "score",
    "count up"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 75,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 78,
      "out": 0
    },
    "markers": {
      "settled": 78,
      "stars": 46
    },
    "beats": [
      4,
      12,
      46,
      50,
      58,
      66
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
    "safeArea": "title",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "score",
      "type": "text",
      "maxChars": 4,
      "lines": 1,
      "role": "stat"
    },
    {
      "key": "count",
      "type": "number",
      "role": "value"
    },
    {
      "key": "countLabel",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "source",
      "type": "text",
      "maxChars": 40,
      "lines": 2,
      "role": "kicker"
    },
    {
      "key": "snippets",
      "type": "list",
      "role": "quote"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "surfaceColor": "colors.background",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "bodyFontFamily": "fonts.body",
    "numeralsFontFamily": "fonts.numerals"
  },
  "motionBeats": [
    {
      "target": "score",
      "prop": "value",
      "from": "0",
      "settledBy": 42,
      "easing": "ease"
    },
    {
      "target": "stars",
      "prop": "fill",
      "from": "0",
      "settledBy": 46,
      "easing": "ease"
    },
    {
      "target": "snippets",
      "prop": "x",
      "from": "right",
      "settledBy": 78,
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
    "sourceUrl": "21st first-party (rating summary with review snippets, 2026-10-06)"
  },
  "job": "testimonials",
  "language": "kinetic-poster",
  "mechanic": [
    "count"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "score": "4.9",
    "count": 2400,
    "countLabel": "reviews",
    "source": "Verified customer reviews",
    "snippets": [
      {
        "quote": "Setup took ten minutes. The first video shipped the same day.",
        "name": "Mara Lind, Northwind"
      },
      {
        "quote": "Our brand finally looks the same in every launch.",
        "name": "Theo Park, Acme"
      },
      {
        "quote": "The team stopped waiting on motion design.",
        "name": "Ines Duarte, Globex"
      }
    ],
    "color": "#0A0A0B",
    "accent": "#F59E0B",
    "surfaceColor": "#FFFFFF",
    "background": "#F4F2EE",
    "fontFamily": "Geist",
    "bodyFontFamily": "Inter",
    "numeralsFontFamily": "Geist"
  },
  "fields": [
    {
      "key": "score",
      "label": "Score",
      "type": "text",
      "max": 4,
      "role": "stat"
    },
    {
      "key": "count",
      "label": "Count",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 99999999,
      "role": "value"
    },
    {
      "key": "countLabel",
      "label": "Count label",
      "type": "text",
      "max": 24,
      "role": "label"
    },
    {
      "key": "source",
      "label": "Source",
      "type": "text",
      "max": 40,
      "role": "kicker"
    },
    {
      "key": "snippets",
      "label": "Snippets",
      "type": "list",
      "max": 3,
      "role": "quote"
    },
    {
      "key": "color",
      "label": "Color",
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
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
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
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "numeralsFontFamily",
      "label": "Numerals font family",
      "type": "font",
      "brand": "fonts.numerals"
    }
  ],
  "name": "Star Rating Summary",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "rating-summary",
    "bundleSha256": "f4947276dc49ece1037660bbc426d83cadf77dc8a0bd04ea15f0725ec009bf1d",
    "sourceSnapshot": {
      "sha256": "2379ee5a77797fb19cffb07472566e8315f232c10108be14372e850fc8acfb4e",
      "files": 1489
    },
    "renderedAt": "2026-10-07T04:51:26.064Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/16x9-paper.png",
        "sha256": "a6051f33b99d35d9c9addf54de1473eeb498e23b7faa05546dc54fbd9001315d"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/16x9-night.png",
        "sha256": "f243fed910b91490c1c9a90d12d3f475242cfd67f6160bf9c4ca1bb85788c75b"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/16x9-color.png",
        "sha256": "4d911ea2399aecf187fc7a1a32db3656cbd1cad62f52811c6508b28c901c949e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/9x16-paper.png",
        "sha256": "9943bc5e3b98083222a490bee9d9553691327aa876938e478b5ae03e765db731"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/9x16-night.png",
        "sha256": "6e28a8ad71c2fa77bbc54ffe016acb06a5fa9ff19a84b479b9a6cc1b68412890"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/9x16-color.png",
        "sha256": "f059c8d6807c3aee68b3e6554f73811badb8ec1c713f2e1bde627390118a1d4c"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/1x1-paper.png",
        "sha256": "2a7966802048b99cb6801b98f305ee2abbd74c83c1b0356c9bba85ce99e1c473"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/1x1-night.png",
        "sha256": "f43cb1dd9d0c0265a6fab3e3bb80c0802c9181ae6a09cb9e43e78c9d8ce83ccf"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/1x1-color.png",
        "sha256": "afbf87b8a63042629b92c6e3ae8f46693f453f0956d27a9751d29dc1dff70949"
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
          "rating-summary--16x9",
          "rating-summary--9x16",
          "rating-summary--1x1"
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
            "paperNight": 80.84499782986111,
            "paperColor": 17.56122504340278,
            "region": {
              "left": 94,
              "top": 281,
              "width": 1764,
              "height": 557
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 90.97379557291667,
            "paperColor": 41.41522894965278,
            "region": {
              "left": 41,
              "top": 228,
              "width": 998,
              "height": 1529
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 105.76025390625,
            "paperColor": 48.88636610243056,
            "region": {
              "left": 52,
              "top": 132,
              "width": 976,
              "height": 873
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
            "occupancy": 0.629245276106842,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6707760425415024,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.628885089915596,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9989241163286304,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0299684753016436,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9388434193121695,
            "bad": [],
            "measured": 8
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9809020487481689,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0352803672909494,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9236732244338066,
            "bad": [],
            "measured": 10
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.943467881944445,
        "frames": [
          11,
          78,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 75,
            "averageChannelDifference": 5.341037326388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/16x9-duration-75-frame-9.png",
                "sha256": "4c6d14fcaf159e7358ac3a7543cd0b04f6d613d515f73ab05f695f5db0cf8e70",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/16x9-duration-75-frame-74.png",
                "sha256": "e5f4d8ba640e68b1f465ca554dd98b5d95c396d6f7f3853a810aeb997d866866",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/16x9-duration-75-frame-66.png",
                "sha256": "f260f63bea3c93b60ba158a5659dd010fc1a1106b91f7d0e03e23d6b2b6b7893",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 4.943467881944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/16x9-duration-600-frame-11.png",
                "sha256": "3957d111e5bd518504dca2e3bb4dc3686fd0bd8ef33e532d4c258852f1c10e6f",
                "alphaMass": 587520
              },
              {
                "frame": 78,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/16x9-duration-600-frame-78.png",
                "sha256": "65f27d12ad13c5bf61bdfcf2238203594bfcc678b47309bd581cf29045470b9d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/16x9-duration-600-frame-528.png",
                "sha256": "384e6ca8d240abc2608daa4a1c7d85358f5880fc151793dc6252f92601b72e5e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/16x9-duration-600-frame-599.png",
                "sha256": "65f27d12ad13c5bf61bdfcf2238203594bfcc678b47309bd581cf29045470b9d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 75,
            "averageChannelDifference": 9.313042534722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/9x16-duration-75-frame-9.png",
                "sha256": "480ecd624c13c79c438e3d531899d54e0f8cd4442d8299a0189c31909338cede",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/9x16-duration-75-frame-74.png",
                "sha256": "f71d06165b0303184cbb9389cca739185bb0d06dce6281e800e44a3ad71c6793",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/9x16-duration-75-frame-66.png",
                "sha256": "2c5b192425603ae05169ccf09ab158fd8854b9dd6be658be12a25b4ac5415055",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 8.844835069444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/9x16-duration-600-frame-11.png",
                "sha256": "6dcd6ca9eecc794bd0e9276b154a515156ec0ebe651f7a36a6d459c1745abad4",
                "alphaMass": 587520
              },
              {
                "frame": 78,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/9x16-duration-600-frame-78.png",
                "sha256": "b2667dfcc2452655c04e430b3830d6011d388289d4ebc2fb0e5d8695039f1492",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/9x16-duration-600-frame-528.png",
                "sha256": "e8c0f51bc4e7798fc4873ebbdefda59ea733c51b3dd90a480d1b80480c521825",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/9x16-duration-600-frame-599.png",
                "sha256": "b2667dfcc2452655c04e430b3830d6011d388289d4ebc2fb0e5d8695039f1492",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 75,
            "averageChannelDifference": 9.527777777777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/1x1-duration-75-frame-9.png",
                "sha256": "09380e8b4de8641ad3d6330bd8dc67baa43936021eb794e2e15c0979e800df9d",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/1x1-duration-75-frame-74.png",
                "sha256": "615bfa3c6dfa3542f7242ceb272db05856e9f1595247c9e5d9dfdbc231f40e52",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/1x1-duration-75-frame-66.png",
                "sha256": "3d7b18848683ddfca9c41e7c7e773d6f0bab756d4f86fc158eb30b6c1b83c36a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 9.115885416666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/1x1-duration-600-frame-11.png",
                "sha256": "27ba0d434d1f2617fc874b9b54c4fb7e86bdbbfec4e1f59691fad4b5c651f9bb",
                "alphaMass": 587520
              },
              {
                "frame": 78,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/1x1-duration-600-frame-78.png",
                "sha256": "9c40d8fedc59ea74333970bd08d80519c70673508ebb2dc6493abb2606abdb4c",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/1x1-duration-600-frame-528.png",
                "sha256": "d44b76311041bce9424435aaea188208f869903ed3a621b70a2720d56628e38d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/rating-summary/1x1-duration-600-frame-599.png",
                "sha256": "9c40d8fedc59ea74333970bd08d80519c70673508ebb2dc6493abb2606abdb4c",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "testimonials",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A 4.9 score counts up with filling stars, a review count and three review snippets; social proof."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 5,
        "compared": 5,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "f4947276dc49ece1037660bbc426d83cadf77dc8a0bd04ea15f0725ec009bf1d",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T04:53:11.021799Z",
      "basis": "Second wave: fixed held blocks and new testimonial/CTA blocks; see docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/rating-summary/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/rating-summary/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/rating-summary/16x9/detail.mp4",
      "bg": "#ebe9e5",
      "posterFrame": 78,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "0c791df19d113b55a483abb8a14217045375968a5d01a7041f5f0dea978a41b9",
        "loop": "d77a511c0f017f2cf0b2015a11832f367600bd8f133d4b95b2a14bffdfa0ae3f",
        "detail": "61a6b10d533546551fd160005d7bb16682ced8c9e55e236e7e1283d05b5ab510"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/rating-summary/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/rating-summary/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/rating-summary/9x16/detail.mp4",
      "bg": "#ebe8e3",
      "posterFrame": 78,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "2d543dc2f399e30142d000ac4e321bfe7cbfb437d672e8bce91375b39485463e",
        "loop": "883e1b03e0c7e0ae56e0b93937107cb0bc768a0b0b67e97a649e307bed373b62",
        "detail": "9e4efea7236e89270a3c83bab2f7e68cb9f873d96e7723b3d84459195cde7da4"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/rating-summary/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/rating-summary/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/rating-summary/1x1/detail.mp4",
      "bg": "#ebe9e5",
      "posterFrame": 78,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "beb8e3da4d3d898e1b7b47cbb01f3ee570eafc559636d4101236051409904f8d",
        "loop": "c24b99d74aaa4997b52511a08b1fe00dbb5f18c948954cf0b53fff4696474ecc",
        "detail": "e61ffac8a2c7209a09043fac94fbd7ddb8bac79acd5794824e639a13431a375e"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/f4947276dc49ece1037660bbc426d83cadf77dc8a0bd04ea15f0725ec009bf1d/index.mjs",
    "sha256": "f4947276dc49ece1037660bbc426d83cadf77dc8a0bd04ea15f0725ec009bf1d",
    "bytes": 168161,
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
    "at": "2026-10-07T04:56:59.313Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
