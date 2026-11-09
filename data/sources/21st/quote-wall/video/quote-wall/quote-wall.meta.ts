// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "testimonial/wall",
  "tags": [
    "testimonial",
    "wall of love",
    "reviews",
    "social proof",
    "quotes",
    "customers",
    "scroll"
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
      "in": 80,
      "out": 0
    },
    "markers": {
      "settled": 80,
      "stop": 56
    },
    "beats": [
      0,
      56,
      62
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
      "role": "quote"
    },
    {
      "key": "highlight",
      "type": "number",
      "role": "index"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "surfaceColor": "colors.background",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "bodyFontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "columns",
      "prop": "y",
      "from": "scrolling",
      "settledBy": 56,
      "easing": "ease"
    },
    {
      "target": "highlight",
      "prop": "scale",
      "from": "1",
      "settledBy": 80,
      "easing": "spring"
    },
    {
      "target": "wall",
      "prop": "opacity",
      "from": "1",
      "settledBy": 72,
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (wall of quotes that stops on one, 2026-10-06)"
  },
  "job": "testimonials",
  "language": "product-ui",
  "mechanic": [
    "focus"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "items": [
      {
        "quote": "Our launch video took an afternoon instead of two weeks.",
        "name": "Mara Lind",
        "role": "Design lead, Northwind"
      },
      {
        "quote": "Finally, motion that looks like our product and not a template.",
        "name": "Theo Park",
        "role": "Founder, Acme"
      },
      {
        "quote": "We ship a changelog video every Friday now.",
        "name": "Ines Duarte",
        "role": "PM, Globex"
      },
      {
        "quote": "The brand kit just works. Fonts, colors, all of it.",
        "name": "Sam Okafor",
        "role": "Marketing, Initech"
      },
      {
        "quote": "Went from script to export before lunch.",
        "name": "Lena Brandt",
        "role": "Engineer, Umbrella"
      },
      {
        "quote": "Every scene stays editable. That alone sold the team.",
        "name": "Ravi Menon",
        "role": "Head of growth, Hooli"
      },
      {
        "quote": "It replaced three tools in our launch checklist.",
        "name": "Julia Ross",
        "role": "Ops, Stark"
      }
    ],
    "highlight": 1,
    "color": "#0A0A0B",
    "accent": "#3D63FF",
    "surfaceColor": "#FFFFFF",
    "background": "#F1F2F6",
    "fontFamily": "Geist",
    "bodyFontFamily": "Inter"
  },
  "fields": [
    {
      "key": "items",
      "label": "Items",
      "type": "list",
      "max": 9,
      "role": "quote"
    },
    {
      "key": "highlight",
      "label": "Highlight",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 8,
      "role": "index"
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
    }
  ],
  "name": "Quote Wall Spotlight",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "quote-wall",
    "bundleSha256": "207e83f207e7abb01e73b2f5111df788e7e0b2d55b0b37cf268a4eee2f6f6cd9",
    "sourceSnapshot": {
      "sha256": "2379ee5a77797fb19cffb07472566e8315f232c10108be14372e850fc8acfb4e",
      "files": 1489
    },
    "renderedAt": "2026-10-07T04:52:53.776Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/16x9-paper.png",
        "sha256": "903d808371a51b13ebe2e182cb7ce89b7ebf83041e9fa4ea81c8e4b971e61b33"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/16x9-night.png",
        "sha256": "6fb99efbc3f10ac23bf1d29ee8fb34bb069de435f7b4c6303c96a85aad1918de"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/16x9-color.png",
        "sha256": "981e9e02eef60e83d55ee5b23da5a4f6d1cd2dcccdbcc31f8f1d13761b1e800e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/9x16-paper.png",
        "sha256": "2c91ab7017ae9d017700ceb4f81db979957f38e550ad509b2ae7dba893fc3d60"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/9x16-night.png",
        "sha256": "ef7a872c0b48e44f091f46910e0295bbff71b039b00010c3e4c14c3e6a683af6"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/9x16-color.png",
        "sha256": "f146de7e872c7c82e7a8e5da4de019f143e2dd6c23e64764b69cb4485b292012"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/1x1-paper.png",
        "sha256": "800253a893869e00d254710a889d6f0e6cc114e0b4dbe806aaabcb821736894d"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/1x1-night.png",
        "sha256": "2073577ae06455b72e19bb155f4032b595f101bb1cfb64ead88f276947944eb2"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/1x1-color.png",
        "sha256": "7eda025bdc896abe28f1a7849dfd36cfcd9ac802c8359fd3226392816b025520"
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
          "quote-wall--16x9",
          "quote-wall--9x16",
          "quote-wall--1x1"
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
            "paperNight": 133.14499240451389,
            "paperColor": 11.731336805555555,
            "region": {
              "left": 105,
              "top": 31,
              "width": 1710,
              "height": 1023
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 121.195068359375,
            "paperColor": 15.485921223958334,
            "region": {
              "left": 0,
              "top": 49,
              "width": 1080,
              "height": 1822
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 117.07500542534723,
            "paperColor": 14.156331380208334,
            "region": {
              "left": 48,
              "top": 31,
              "width": 984,
              "height": 1025
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
            "occupancy": 1.1753688744016129,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1956062807067274,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1753688744016129,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3448955971277403,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3448955971277403,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3448955971277403,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1834993771171023,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.225498772897362,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1834993771171023,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 11.383680555555555,
        "frames": [
          12,
          80,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 75,
            "averageChannelDifference": 11.413194444444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/16x9-duration-75-frame-9.png",
                "sha256": "742bcf630bec36fb483c0fed50bfeee408ea77aa0b2235970f1345ee163843fc",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/16x9-duration-75-frame-74.png",
                "sha256": "742ad86e9316e994110190afe3ece1807a77cd787d9b3df1ce2035bc88b6a941",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/16x9-duration-75-frame-66.png",
                "sha256": "77a408fe1998359ba59ef1e0e9b88934007e6943194ed20755e632a3b9cbd7d5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 11.383680555555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/16x9-duration-600-frame-12.png",
                "sha256": "742bcf630bec36fb483c0fed50bfeee408ea77aa0b2235970f1345ee163843fc",
                "alphaMass": 587520
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/16x9-duration-600-frame-80.png",
                "sha256": "5733685296ff3f68d7b41a0eb132abf0ed239e9d6e0de3f50509f14721e55eb9",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/16x9-duration-600-frame-528.png",
                "sha256": "b9451db092378f2fce3ee9cf52c6e424c0ec225b3d956c2212c638091db79bda",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/16x9-duration-600-frame-599.png",
                "sha256": "2d934d50e2d368459b33ee5a8ca0e44e708c648a560e3500aeb69e5f32e32ee3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 75,
            "averageChannelDifference": 15.585286458333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/9x16-duration-75-frame-9.png",
                "sha256": "79e50113b8ef56db7c7697201a6225f590b92ffb1f058ca5cfb9b4c6859d9df4",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/9x16-duration-75-frame-74.png",
                "sha256": "31642290a724ef76713c4df90eca25c37312b43670b5604916fb4030ea3c2cb8",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/9x16-duration-75-frame-66.png",
                "sha256": "31642290a724ef76713c4df90eca25c37312b43670b5604916fb4030ea3c2cb8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 15.583550347222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/9x16-duration-600-frame-12.png",
                "sha256": "79e50113b8ef56db7c7697201a6225f590b92ffb1f058ca5cfb9b4c6859d9df4",
                "alphaMass": 587520
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/9x16-duration-600-frame-80.png",
                "sha256": "05ff0502fc166e5a7e91340cb9a4992d6c7271b729e98d6ab914ada5ccd22eda",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/9x16-duration-600-frame-528.png",
                "sha256": "31642290a724ef76713c4df90eca25c37312b43670b5604916fb4030ea3c2cb8",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/9x16-duration-600-frame-599.png",
                "sha256": "31642290a724ef76713c4df90eca25c37312b43670b5604916fb4030ea3c2cb8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 75,
            "averageChannelDifference": 15.037543402777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/1x1-duration-75-frame-9.png",
                "sha256": "9343fd5f8b45235872d8f5aac336f758ce25a6829371796f2bbfc3c3082761eb",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/1x1-duration-75-frame-74.png",
                "sha256": "3f0a51d71e9febbd84dcc99a16806d658fd652a79673b202ac2c5ffeeaf14168",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/1x1-duration-75-frame-66.png",
                "sha256": "02f006a66210a4329b49a1365675f85aaaeaad6247892f9d41a99d7bee08586a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 15.019856770833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/1x1-duration-600-frame-12.png",
                "sha256": "9343fd5f8b45235872d8f5aac336f758ce25a6829371796f2bbfc3c3082761eb",
                "alphaMass": 587520
              },
              {
                "frame": 80,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/1x1-duration-600-frame-80.png",
                "sha256": "bcd9311479974b5f58781ab3401861735adf8c3e01aa6bce39caf2875191ea7e",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/1x1-duration-600-frame-528.png",
                "sha256": "d095af8c182b3fecc3c18784abe7157ee1effb8af232876a02a8411c87c33038",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2a/quote-wall/1x1-duration-600-frame-599.png",
                "sha256": "5066a729d0a0fb38309a107d7f25ba91ecfe2348e99479cf3602a4a6f3b23295",
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
        "note": "A scrolling wall of customer quotes stops and lifts one highlighted quote forward; testimonials."
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
      "bundleSha256": "207e83f207e7abb01e73b2f5111df788e7e0b2d55b0b37cf268a4eee2f6f6cd9",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T04:53:11.017333Z",
      "basis": "Second wave: fixed held blocks and new testimonial/CTA blocks; see docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/quote-wall/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/quote-wall/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/quote-wall/16x9/detail.mp4",
      "bg": "#e8e9ed",
      "posterFrame": 80,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "00a8606ff36074befd149c44f38280c048b928e6b468c6b12cd3a380971e31d7",
        "loop": "6a46d2ffbbe791ac58bb0e407a1204d79f39bb626a183b05cfeb4fd050958a74",
        "detail": "e125ef18dc557a0ad07d15009c76de98f79da3f8dcfc3f91021c504bc8c7ed16"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/quote-wall/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/quote-wall/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/quote-wall/9x16/detail.mp4",
      "bg": "#e8e9ed",
      "posterFrame": 80,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "62325cab79ebea9fa31f927bf624b21d8a132dd5e895c9a855a75e01de1e49c2",
        "loop": "c0257f3ad1cb7b12eeb997771b768220e195aaccf96555edcd6a7f2db8a76e98",
        "detail": "43c944436764a03cb662cd74bd528d5f0f24a7e2dd8c6bb9b098444b7315de69"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/quote-wall/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/quote-wall/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/quote-wall/1x1/detail.mp4",
      "bg": "#e8e9ed",
      "posterFrame": 80,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "0ad045e7672ebe687b73b3d40c5980cd68e53330559617d62093ccd9117e277a",
        "loop": "1669da26785252f653a926f015fc1d31c9ddecb0812d5e45d56c75b44305b28e",
        "detail": "7a6504870dcdaf7df246408b97bdc1081d7c31492c6014beb221f229e5245a21"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/207e83f207e7abb01e73b2f5111df788e7e0b2d55b0b37cf268a4eee2f6f6cd9/index.mjs",
    "sha256": "207e83f207e7abb01e73b2f5111df788e7e0b2d55b0b37cf268a4eee2f6f6cd9",
    "bytes": 167703,
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
    "at": "2026-10-07T04:56:36.357Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
