// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "cta/url",
  "tags": [
    "cta",
    "end card",
    "url",
    "address bar",
    "browser",
    "website",
    "visit",
    "typing"
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
      "in": 82,
      "out": 0
    },
    "markers": {
      "settled": 82,
      "enter": 42
    },
    "beats": [
      0,
      10,
      42,
      56,
      64
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
      "key": "url",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "url"
    },
    {
      "key": "name",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "tagline",
      "type": "text",
      "maxChars": 60,
      "lines": 2,
      "role": "subline"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 20,
      "lines": 1,
      "role": "cta"
    },
    {
      "key": "logo",
      "type": "image",
      "role": "logo"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "surfaceColor": "colors.background",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "bodyFontFamily": "fonts.body",
    "logo": "logos.light"
  },
  "motionBeats": [
    {
      "target": "url",
      "prop": "chars",
      "from": "0",
      "settledBy": 36,
      "easing": "linear"
    },
    {
      "target": "enter",
      "prop": "press",
      "settledBy": 46,
      "easing": "ease"
    },
    {
      "target": "window",
      "prop": "height",
      "from": "bar",
      "settledBy": 64,
      "easing": "spring"
    },
    {
      "target": "page",
      "prop": "y",
      "from": "below",
      "settledBy": 82,
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
    "sourceUrl": "21st first-party (typed address that opens the product, 2026-10-06)"
  },
  "job": "cta",
  "language": "product-ui",
  "mechanic": [
    "type"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "url": "acme.dev/start",
    "name": "Acme",
    "tagline": "Launch videos that look like your product",
    "cta": "Start free",
    "logo": "",
    "color": "#0A0A0B",
    "accent": "#3D63FF",
    "surfaceColor": "#FFFFFF",
    "background": "#EEF0F5",
    "fontFamily": "Geist",
    "bodyFontFamily": "Inter"
  },
  "fields": [
    {
      "key": "url",
      "label": "Url",
      "type": "text",
      "max": 40,
      "role": "url"
    },
    {
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 24,
      "role": "headline"
    },
    {
      "key": "tagline",
      "label": "Tagline",
      "type": "text",
      "max": 60,
      "role": "subline"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 20,
      "role": "cta"
    },
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo",
      "brand": "logos.light"
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
  "name": "Typed URL Opens Site",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "address-bar-cta",
    "bundleSha256": "357a1a5bbadd3a67d54fe9d45b1e3aae1dbe7babfb7b87936e166ff40283d92b",
    "sourceSnapshot": {
      "sha256": "2379ee5a77797fb19cffb07472566e8315f232c10108be14372e850fc8acfb4e",
      "files": 1489
    },
    "renderedAt": "2026-10-07T04:51:56.492Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/16x9-paper.png",
        "sha256": "66565897f507f4a0cd280067773a63f9472fd3a25ff4344d6c0303b88c064d2f"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/16x9-night.png",
        "sha256": "8142bc8a51499cce7d4c4325eb0dcae9b688637fa8307f262653f6229daeadc2"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/16x9-color.png",
        "sha256": "ecddd6f316adbf9a185e5511d42c7d919454bfe826df07bc950ae43f46612b84"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/9x16-paper.png",
        "sha256": "ec08c2ea65af45dcdfc41a4a65fd35d71079b7142b8fc3ce19d8134b57405f7d"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/9x16-night.png",
        "sha256": "0834763b5f1632b06a00e9751d5c41db5ddac5ce9dc362cc490432520203d13d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/9x16-color.png",
        "sha256": "506c01c8f007f8dec81fa1322b93b482a632fb22395446386f24cf81c139270a"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/1x1-paper.png",
        "sha256": "ce342fb47fb029a12219122b5dc541f6076283346927e59cf6250b470da652ec"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/1x1-night.png",
        "sha256": "258a3a8687eae160a4bb6cc4c352adc8c5457ac6bb3b6857cc17c1204be67df8"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/1x1-color.png",
        "sha256": "fe78a298793a75d9ac154e021c001acfba7f8e428b28369b82ece6527281a0fd"
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
          "address-bar-cta--16x9",
          "address-bar-cta--9x16",
          "address-bar-cta--1x1"
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
            "paperNight": 115.43210177951389,
            "paperColor": 19.79473198784722,
            "region": {
              "left": 315,
              "top": 100,
              "width": 1290,
              "height": 958
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 113.95543077256944,
            "paperColor": 19.70754665798611,
            "region": {
              "left": 0,
              "top": 356,
              "width": 1080,
              "height": 1286
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 109.22667100694444,
            "paperColor": 22.38791232638889,
            "region": {
              "left": 7,
              "top": 132,
              "width": 1066,
              "height": 894
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
            "occupancy": 0.7495590828924164,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8446400357982701,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7495590828924164,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.876224332325523,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9492512282690856,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.876224332325523,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0109210579522163,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1579468893181417,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0109210579522163,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 9.671983506944445,
        "frames": [
          12,
          82,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 75,
            "averageChannelDifference": 9.671983506944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/16x9-duration-75-frame-9.png",
                "sha256": "5498719647189d331634c37b98123623c1f5a425f3a47c8424389eafddcb38bf",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/16x9-duration-75-frame-74.png",
                "sha256": "ffbb71b26ad9defb7d5dd16056c5d07f97ef66143378b978546d72b178c79160",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/16x9-duration-75-frame-66.png",
                "sha256": "bd3acd782e9407acec165a7eb3227e1b1acd9910fd2b1324f5fa1de497c0d642",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 9.671983506944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/16x9-duration-600-frame-12.png",
                "sha256": "5498719647189d331634c37b98123623c1f5a425f3a47c8424389eafddcb38bf",
                "alphaMass": 587520
              },
              {
                "frame": 82,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/16x9-duration-600-frame-82.png",
                "sha256": "fde20021ca694a172009fce9c300a9c780c2f124dc8a9ec5ecd9c1d19d59341a",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/16x9-duration-600-frame-528.png",
                "sha256": "ff34d094e911cf47ea90e8940b154a3eb5c0b8d748123758c4fc51db583cb8a1",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/16x9-duration-600-frame-599.png",
                "sha256": "ff34d094e911cf47ea90e8940b154a3eb5c0b8d748123758c4fc51db583cb8a1",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 75,
            "averageChannelDifference": 12.861979166666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/9x16-duration-75-frame-9.png",
                "sha256": "62301e314ab8a5c42b18834f8dca345982336842b6ac4878112321d9212b3bb0",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/9x16-duration-75-frame-74.png",
                "sha256": "8b0f79bf01cc8d9bf3f63232eeb629d8a3c08884d2ce91bfe3c403b6dfa61372",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/9x16-duration-75-frame-66.png",
                "sha256": "57584274eed0bdfdaad90ed3022e7a91df908983f3417f49aed2debde2fab155",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 12.8623046875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/9x16-duration-600-frame-12.png",
                "sha256": "62301e314ab8a5c42b18834f8dca345982336842b6ac4878112321d9212b3bb0",
                "alphaMass": 587520
              },
              {
                "frame": 82,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/9x16-duration-600-frame-82.png",
                "sha256": "8a8d023eca7e12967ee2a6055f5157b0971f17d7d1544089421af010e45feac5",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/9x16-duration-600-frame-528.png",
                "sha256": "8b0f79bf01cc8d9bf3f63232eeb629d8a3c08884d2ce91bfe3c403b6dfa61372",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/9x16-duration-600-frame-599.png",
                "sha256": "8b0f79bf01cc8d9bf3f63232eeb629d8a3c08884d2ce91bfe3c403b6dfa61372",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 75,
            "averageChannelDifference": 13.21755642361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/1x1-duration-75-frame-9.png",
                "sha256": "4ccdd4c8b926790b880db75c2c3f2479c12a1c460d505fdc3a15b884d793fb00",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/1x1-duration-75-frame-74.png",
                "sha256": "af42c6f4bfadf62ac13330c9b482d7c3e0a9c1860d851bfb7c25628ed709ec3a",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/1x1-duration-75-frame-66.png",
                "sha256": "01df52eb93a4a64a1af44797a256f5cb0a92e33dc1e8f22ea1f3ba11d909c586",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 13.21603732638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/1x1-duration-600-frame-12.png",
                "sha256": "4ccdd4c8b926790b880db75c2c3f2479c12a1c460d505fdc3a15b884d793fb00",
                "alphaMass": 587520
              },
              {
                "frame": 82,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/1x1-duration-600-frame-82.png",
                "sha256": "feb565a44d7ba34c5c45fa52266ea89a0c73346d238f13a3cf77aed66a375df2",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/1x1-duration-600-frame-528.png",
                "sha256": "af42c6f4bfadf62ac13330c9b482d7c3e0a9c1860d851bfb7c25628ed709ec3a",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-w2b/address-bar-cta/1x1-duration-600-frame-599.png",
                "sha256": "af42c6f4bfadf62ac13330c9b482d7c3e0a9c1860d851bfb7c25628ed709ec3a",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "cta",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A URL is typed into an address bar and opens the product page with a Start free button; ending call to action."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 6,
        "compared": 6,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "357a1a5bbadd3a67d54fe9d45b1e3aae1dbe7babfb7b87936e166ff40283d92b",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T04:53:11.022812Z",
      "basis": "Second wave: fixed held blocks and new testimonial/CTA blocks; see docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/address-bar-cta/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/address-bar-cta/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/address-bar-cta/16x9/detail.mp4",
      "bg": "#e5e7ec",
      "posterFrame": 82,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "5f9aeb6420e9ba043c8797b1417077b37d2e780cf5e6793488fe811c08b9ce60",
        "loop": "d35917a6f4c1fdae50af80693273a1d0f83874a687a5f1af449cf5ffb71e70c2",
        "detail": "5ffb7c7d445d5f8a792084c61390f54208115cedef3c31b8c4427051cfd487f0"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/address-bar-cta/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/address-bar-cta/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/address-bar-cta/9x16/detail.mp4",
      "bg": "#e5e7ec",
      "posterFrame": 82,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "59d9bac7ff8214f37782972e0b6d72777269c6abac6a3ff8218c32178e9c497c",
        "loop": "0f728b0e9153a679dfd7ae2f0fc4ee8d68db65487a4bfc58537b910dc9f6335f",
        "detail": "5d8dc53717188359d2faf7f5c37e6da4d4e31f10dc30e549406101e4ba500768"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/address-bar-cta/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/address-bar-cta/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/address-bar-cta/1x1/detail.mp4",
      "bg": "#e5e7ec",
      "posterFrame": 82,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "80a6d197fb1ba07af4e1134df4e96316dc6ba34785dca17e26b46d01beaeb722",
        "loop": "ce41eaed4cfa85f1f1c8baa354138e3f2fdfe155c4e69017ae5adda674fbff2e",
        "detail": "544ae8240c6cb2221f9bc64874821e4bd253532498eb8632b796d85169522d36"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/357a1a5bbadd3a67d54fe9d45b1e3aae1dbe7babfb7b87936e166ff40283d92b/index.mjs",
    "sha256": "357a1a5bbadd3a67d54fe9d45b1e3aae1dbe7babfb7b87936e166ff40283d92b",
    "bytes": 169116,
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
    "at": "2026-10-07T04:57:22.443Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
