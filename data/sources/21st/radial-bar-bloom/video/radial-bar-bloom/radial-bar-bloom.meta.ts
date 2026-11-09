// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "data/craft",
  "job": "data",
  "language": "kinetic-poster",
  "mechanic": [
    "bloom"
  ],
  "tags": [
    "data",
    "polar",
    "chart",
    "flower",
    "petals",
    "values",
    "total",
    "radial"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 140,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 125,
      "out": 0
    },
    "markers": {
      "settled": 125,
      "bloom": 50
    },
    "beats": [
      0,
      15,
      50,
      95,
      125
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
      "key": "title",
      "type": "text",
      "maxChars": 40,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "values",
      "type": "list",
      "role": "chart"
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
    "sourceUrl": "21st first-party (quantitative radial bars unfurl into a flower around their total, 2026-10-09)"
  },
  "defaults": {
    "title": "Growing in every direction",
    "values": [
      {
        "label": "Design",
        "value": 42
      },
      {
        "label": "Build",
        "value": 74
      },
      {
        "label": "Ship",
        "value": 55
      },
      {
        "label": "Learn",
        "value": 90
      },
      {
        "label": "Grow",
        "value": 63
      }
    ],
    "primary": "#C77DFF",
    "secondary": "#80FFDB",
    "color": "#F2E9FF",
    "background": "#170F1E",
    "fontFamily": "DM Sans"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "values",
      "label": "Values",
      "type": "list",
      "max": 6,
      "role": "chart"
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
    }
  ],
  "name": "Radial Data Bloom",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "radial-bar-bloom",
    "bundleSha256": "0538aee1356131e839014c0126398a30d66f9b86132316d1f02797cfc281a75a",
    "sourceSnapshot": {
      "sha256": "be113857ae041533797b125ad6f1737614716f34c43f0c6f645addc012f77824",
      "files": 1926
    },
    "renderedAt": "2026-10-09T19:00:46.376Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/16x9-paper.png",
        "sha256": "9c5c3675d24c33ceb090466116fabc611814583b73f2aaa983aaddb02dd66be2"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/16x9-night.png",
        "sha256": "82d7108715e4c0f850465ada0d6e61d9d4a44c38fcfab6cfaeb4946b11658b8b"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/16x9-color.png",
        "sha256": "d425199bb6b6dec50b720514e94ce4c7dabba5e4180f4649b2f377fe546df317"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/9x16-paper.png",
        "sha256": "d9dcbfe0ba6fe7af728355695e13b0b2549bec24c7f06b8b7d3afe3fc19eea81"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/9x16-night.png",
        "sha256": "e334efdc207e4bb5281ac0d398de256fe13bfbdb9a9d7a072aa07f6659cb6926"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/9x16-color.png",
        "sha256": "49e751d6212b13430b9e1026405becbfd8f43acce233adb11b13246446fbd2fc"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/1x1-paper.png",
        "sha256": "281c816ff02cf158b3b0590f7b1277c701a34cfc27eaaf1908f36bacb1d49b79"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/1x1-night.png",
        "sha256": "535c1e4e673af21f3460383141290c54e4d1e27e1a5d2d20f6dc39964260be10"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/1x1-color.png",
        "sha256": "2b92c41c649e5b60490ddb782f88587d0596b01feffb5434cc5f057517194962"
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
          "radial-bar-bloom--16x9",
          "radial-bar-bloom--9x16",
          "radial-bar-bloom--1x1"
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
            "paperNight": 24.11867947048611,
            "paperColor": 9.472032335069445,
            "region": {
              "left": 293,
              "top": 99,
              "width": 1493,
              "height": 841
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 43.427652994791664,
            "paperColor": 15.786376953125,
            "region": {
              "left": 108,
              "top": 176,
              "width": 865,
              "height": 1496
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 37.760715060763886,
            "paperColor": 14.94802517361111,
            "region": {
              "left": 108,
              "top": 99,
              "width": 865,
              "height": 915
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
            "occupancy": 0.8555536090464995,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8565733392122283,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.858167863660382,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8806169635421043,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.880185696963971,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8838401857013384,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9584698076761571,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9584698076761571,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9595791477313378,
            "bad": [],
            "measured": 12
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.393988715277778,
        "frames": [
          18,
          125,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 140,
            "averageChannelDifference": 7.477973090277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/16x9-duration-140-frame-16.png",
                "sha256": "55e2a54648bdafe279c7242da1e22b38e53df5b33795cae0b34e557319be0015",
                "alphaMass": 587520
              },
              {
                "frame": 125,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/16x9-duration-140-frame-125.png",
                "sha256": "7f73a63d5733c1e835276afb1444cc91e28c4c9b89d14821ebbfebaa12dac6a5",
                "alphaMass": 587520
              },
              {
                "frame": 123,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/16x9-duration-140-frame-123.png",
                "sha256": "7f73a63d5733c1e835276afb1444cc91e28c4c9b89d14821ebbfebaa12dac6a5",
                "alphaMass": 587520
              },
              {
                "frame": 139,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/16x9-duration-140-frame-139.png",
                "sha256": "7f73a63d5733c1e835276afb1444cc91e28c4c9b89d14821ebbfebaa12dac6a5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 7.393988715277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/16x9-duration-600-frame-18.png",
                "sha256": "6896693d24bcaa4ea169e350759ef338cce0209359f3b8488167a5c493718257",
                "alphaMass": 587520
              },
              {
                "frame": 125,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/16x9-duration-600-frame-125.png",
                "sha256": "7f73a63d5733c1e835276afb1444cc91e28c4c9b89d14821ebbfebaa12dac6a5",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/16x9-duration-600-frame-528.png",
                "sha256": "7f73a63d5733c1e835276afb1444cc91e28c4c9b89d14821ebbfebaa12dac6a5",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/16x9-duration-600-frame-599.png",
                "sha256": "7f73a63d5733c1e835276afb1444cc91e28c4c9b89d14821ebbfebaa12dac6a5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 140,
            "averageChannelDifference": 10.061848958333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/9x16-duration-140-frame-16.png",
                "sha256": "e4e6355fe44ebb383a97e66ba76460a5c30cf33056b33fb2327acaeb7b29a797",
                "alphaMass": 587520
              },
              {
                "frame": 125,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/9x16-duration-140-frame-125.png",
                "sha256": "01d8351e65980c0fd11f6f1a6ab09173d4af8512272843a7c1bd4b8f3880ee2f",
                "alphaMass": 587520
              },
              {
                "frame": 123,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/9x16-duration-140-frame-123.png",
                "sha256": "01d8351e65980c0fd11f6f1a6ab09173d4af8512272843a7c1bd4b8f3880ee2f",
                "alphaMass": 587520
              },
              {
                "frame": 139,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/9x16-duration-140-frame-139.png",
                "sha256": "01d8351e65980c0fd11f6f1a6ab09173d4af8512272843a7c1bd4b8f3880ee2f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 9.879448784722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/9x16-duration-600-frame-18.png",
                "sha256": "51d70338b0803689dd4548d4f5d41b01d8324132229fede8a2936adcb9083e38",
                "alphaMass": 587520
              },
              {
                "frame": 125,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/9x16-duration-600-frame-125.png",
                "sha256": "01d8351e65980c0fd11f6f1a6ab09173d4af8512272843a7c1bd4b8f3880ee2f",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/9x16-duration-600-frame-528.png",
                "sha256": "01d8351e65980c0fd11f6f1a6ab09173d4af8512272843a7c1bd4b8f3880ee2f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/9x16-duration-600-frame-599.png",
                "sha256": "01d8351e65980c0fd11f6f1a6ab09173d4af8512272843a7c1bd4b8f3880ee2f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 140,
            "averageChannelDifference": 11.857096354166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/1x1-duration-140-frame-16.png",
                "sha256": "5aabe774a68a0bae97fd241b10a38daf035f2d5f4ec1fd5a102efb5e40241167",
                "alphaMass": 587520
              },
              {
                "frame": 125,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/1x1-duration-140-frame-125.png",
                "sha256": "82e08ba377e206ea827a16cfa2b22b62fd9e3c9cf6670b28922bf12b87e03988",
                "alphaMass": 587520
              },
              {
                "frame": 123,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/1x1-duration-140-frame-123.png",
                "sha256": "82e08ba377e206ea827a16cfa2b22b62fd9e3c9cf6670b28922bf12b87e03988",
                "alphaMass": 587520
              },
              {
                "frame": 139,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/1x1-duration-140-frame-139.png",
                "sha256": "82e08ba377e206ea827a16cfa2b22b62fd9e3c9cf6670b28922bf12b87e03988",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 11.58376736111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/1x1-duration-600-frame-18.png",
                "sha256": "939b71096b89e249f0203e5ca6f78701211ee4c7c0f04d37b1725c9c5b07ba73",
                "alphaMass": 587520
              },
              {
                "frame": 125,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/1x1-duration-600-frame-125.png",
                "sha256": "82e08ba377e206ea827a16cfa2b22b62fd9e3c9cf6670b28922bf12b87e03988",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/1x1-duration-600-frame-528.png",
                "sha256": "82e08ba377e206ea827a16cfa2b22b62fd9e3c9cf6670b28922bf12b87e03988",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/radial-bar-bloom/1x1-duration-600-frame-599.png",
                "sha256": "82e08ba377e206ea827a16cfa2b22b62fd9e3c9cf6670b28922bf12b87e03988",
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
        "note": "1. TitleMatches: The subject—a radial, blooming, petal-like data visualization—expands and fills out chronologically in the motion samples, literalizing 'Growing in every direction.' Structure, motion, and content all reflect this. \n2. noBakedHeading: The visible heading matches the named-slot content ('Growing in every direction'). All text elements are legitimate content; no unexplained or extraneous decorative/baked-in headings appear.\n3. BrandAdherence: The final three images are the same poster, each rendered with a different palette consistent with the supplied brand palettes. Key colors for 'primary,' 'secondary,' 'text,' and 'background' are applied consistently. All elements remain visible and legible; no unexplained fixed-color blocks persist. \n4. LanguageAdherence: Across all palettes and frames, type roles (oversized display, sans body, tabular numerals), color fields, and static-to-animated transitions are maintained. There are no floating cards, browser mockups, or glassy effects. Motion appears to align with the verbs and material principles listed. The language card is present and fully respected."
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
      "bundleSha256": "0538aee1356131e839014c0126398a30d66f9b86132316d1f02797cfc281a75a",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T19:04:23.015Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "radial-bar-bloom",
      "vsPositive": 0.875,
      "vsNegative": 0.9583333333333334,
      "fakeVotes": 0.14583333333333334,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.625,
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
      "framesSha256": "5614259ae8c1b3fd7a01fb73bd3424cae4204a5d5a79048a9b7229cdd1e94bfc",
      "bundleSha256": "0538aee1356131e839014c0126398a30d66f9b86132316d1f02797cfc281a75a",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/radial-bar-bloom/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/radial-bar-bloom/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/radial-bar-bloom/16x9/detail.mp4",
      "bg": "#170f1e",
      "posterFrame": 125,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "cccf79a178f5437f7f5ec675f18f4bd36c753249c7181b7d0a3379113b06da16",
        "loop": "794307b5f56165c2ee600862097673a2a73f1a4aff86e7717ad41ef7f43e3600",
        "detail": "9f46b0768c607ab2e18e1a14ad65c0a3f72a6850997b67cf6238383462125040"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/radial-bar-bloom/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/radial-bar-bloom/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/radial-bar-bloom/9x16/detail.mp4",
      "bg": "#170f1e",
      "posterFrame": 125,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e4e3fe86069a8fd49a98caeecf718ca5b8d80d937971bda652f10fe86373eeaf",
        "loop": "d45e700ddef34cb9b8c177b612df52f511c7766313b61b8c1213cce3d6f9c5dc",
        "detail": "48a5fef2aa67349214c17b492dcd195a32c84bff32cd3defa1d1ee1184519ee3"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/radial-bar-bloom/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/radial-bar-bloom/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/radial-bar-bloom/1x1/detail.mp4",
      "bg": "#170f1e",
      "posterFrame": 125,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0c083e370626e32f385bc7e85a8fa1b45b55e1de55d2d571104724338cdaac06",
        "loop": "f7200b429486f8e7d9789e6f93f4026800cd06f4838367805f52793b4d01c9d5",
        "detail": "c0da73f12407c0fc334a85f3b89f032909ec1cb2da9e285f425357dd9f476856"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/0538aee1356131e839014c0126398a30d66f9b86132316d1f02797cfc281a75a/index.mjs",
    "sha256": "0538aee1356131e839014c0126398a30d66f9b86132316d1f02797cfc281a75a",
    "bytes": 161493,
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
    "at": "2026-10-09T19:28:08.069Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
