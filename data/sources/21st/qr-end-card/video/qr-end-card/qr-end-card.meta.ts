// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "cta/qr",
  "tags": [
    "cta",
    "end card",
    "qr code",
    "scan",
    "short link",
    "handle",
    "mobile",
    "outro"
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
      "in": 66,
      "out": 0
    },
    "markers": {
      "settled": 66,
      "focus": 36
    },
    "beats": [
      4,
      10,
      36,
      44
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
      "key": "url",
      "type": "text",
      "maxChars": 100,
      "lines": 1,
      "role": "url"
    },
    {
      "key": "label",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "eyebrow",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "kicker"
    },
    {
      "key": "handle",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "name"
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
    "logo": "logos.light"
  },
  "motionBeats": [
    {
      "target": "finders",
      "prop": "scale",
      "from": "1.3",
      "settledBy": 18,
      "easing": "spring"
    },
    {
      "target": "modules",
      "prop": "scale",
      "from": "0",
      "settledBy": 38,
      "easing": "ease"
    },
    {
      "target": "viewfinder",
      "prop": "inset",
      "from": "wide",
      "settledBy": 46,
      "easing": "spring"
    },
    {
      "target": "scan",
      "prop": "y",
      "from": "top",
      "settledBy": 64,
      "easing": "linear"
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
    "sourceUrl": "21st first-party (scannable QR end card, 2026-10-06)"
  },
  "job": "cta",
  "language": "product-ui",
  "mechanic": [
    "assemble"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "url": "https://acme.dev/try",
    "label": "acme.dev/try",
    "eyebrow": "Scan to try it",
    "handle": "@acme",
    "logo": "",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "surfaceColor": "#111114",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "url",
      "label": "Url",
      "type": "text",
      "max": 100,
      "role": "url"
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 32,
      "role": "headline"
    },
    {
      "key": "eyebrow",
      "label": "Eyebrow",
      "type": "text",
      "max": 32,
      "role": "kicker"
    },
    {
      "key": "handle",
      "label": "Handle",
      "type": "text",
      "max": 24,
      "role": "name"
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
    }
  ],
  "name": "Scannable QR End Card",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "qr-end-card",
    "bundleSha256": "f25c1ae3062e84fcc2d2ce0d2e8b28f010626a10c9d8ddd066b61d8a79356baa",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:57:26.129Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/16x9-paper.png",
        "sha256": "199ec3446156f6125ba77e8250e9aa7238984aefa42b253e26e55206436229a0"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/16x9-night.png",
        "sha256": "2cfb6aa7093e3957520d507d8472b8e51427bb2ff5922694dd478feb1ed4dc01"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/16x9-color.png",
        "sha256": "2d670e11cf0b2d97d068090239fdc3c2c090cf47cc4c6ae24ca7b0f6bf4b8c49"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/9x16-paper.png",
        "sha256": "fbf4c636175995fb899583a060c5dddf28eb74e0320a89b7ebeef66c9be3006e"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/9x16-night.png",
        "sha256": "eb7edf7ceffdff229b1e1d67a1c74824df3816f12dc1e1a71308dc61daa3e61b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/9x16-color.png",
        "sha256": "e6c76825514ebaca1ba89e110d21dbae4dad0cca1fc8edb9da4440e029a2a9f0"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/1x1-paper.png",
        "sha256": "cc04431d955e8911454961d78d04e0253da1b56baf5f536edf0188fbf31a5a34"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/1x1-night.png",
        "sha256": "0bbd58546932e4a486838d5ff21f1fd35485b3544f32bb99a29a633f65fd1ffd"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/1x1-color.png",
        "sha256": "f50a0f603ff0822b329d6b3ce1bfeb97e525f2ffe920dbf1e709df47aad18714"
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
          "qr-end-card--16x9",
          "qr-end-card--9x16",
          "qr-end-card--1x1"
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
            "paperNight": 18.908203125,
            "paperColor": 16.26274956597222,
            "region": {
              "left": 191,
              "top": 187,
              "width": 1356,
              "height": 732
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 21.19428168402778,
            "paperColor": 21.979600694444443,
            "region": {
              "left": 81,
              "top": 292,
              "width": 918,
              "height": 1276
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 22.089002821180557,
            "paperColor": 23.06222873263889,
            "region": {
              "left": 202,
              "top": 56,
              "width": 676,
              "height": 907
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
            "occupancy": 0.6332907069720893,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6663950302343161,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5410639049858628,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7572248292321045,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8005893329554046,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7572248292321045,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6932877174646723,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7449856371446614,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6932877174646723,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 10.941948784722221,
        "frames": [
          9,
          66,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 75,
            "averageChannelDifference": 10.822699652777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/16x9-duration-75-frame-9.png",
                "sha256": "bbeb24412e1d701c3e31c7bd21c1eb34a3ea276d35cfc7c0bfe33cb35f1b13ca",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/16x9-duration-75-frame-66.png",
                "sha256": "62e297f975b4dda033788a3b6455f43c0c7e613ac429ae5be559f3592aff99a9",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/16x9-duration-75-frame-74.png",
                "sha256": "3327b25698463d17315078a3a4e04937ad9a6159b66af7ec36b3ecd648712d49",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 10.941948784722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/16x9-duration-600-frame-9.png",
                "sha256": "4bcad3bc478f438e19b84c035986713bb4692c9e88156360d021d159d8d4afb7",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/16x9-duration-600-frame-66.png",
                "sha256": "714f0f3656f5ee257e2e2449a9955853590a08d0d868387380a568e85c1ab09e",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/16x9-duration-600-frame-528.png",
                "sha256": "134ebd5f6fb3f7542c7370f2401cc47e29ce32ca2a05dfe20cf783da0f499d93",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/16x9-duration-600-frame-599.png",
                "sha256": "714f0f3656f5ee257e2e2449a9955853590a08d0d868387380a568e85c1ab09e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 75,
            "averageChannelDifference": 19.10232204861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/9x16-duration-75-frame-9.png",
                "sha256": "4e4fc049a9034ffe6464a84f016360dba2c25a97418b06d11c4e2c285e7b4b14",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/9x16-duration-75-frame-66.png",
                "sha256": "cdbae2d222a4d11a29fb187aaec1729c3b8b61bb1803fa7cbb0ae8924c3c6180",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/9x16-duration-75-frame-74.png",
                "sha256": "910836797d6f099d84d3916c150e7b4f35ad66a147224a71f71005883e8373fd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 19.190104166666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/9x16-duration-600-frame-9.png",
                "sha256": "2c6e195a75cb9c56b6e20d3604fcba5cdd41a5cdf8d407634857c8ef52015638",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/9x16-duration-600-frame-66.png",
                "sha256": "5953e997ecb1036bee544e0499279bfe6bb4fe826ff9d28da0e0231e578e6237",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/9x16-duration-600-frame-528.png",
                "sha256": "4a6d83cfd03ef1336e5b5953d36f1fa803f98c267c331b5a22b2b83bf6d2090f",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/9x16-duration-600-frame-599.png",
                "sha256": "5953e997ecb1036bee544e0499279bfe6bb4fe826ff9d28da0e0231e578e6237",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 75,
            "averageChannelDifference": 16.894205729166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/1x1-duration-75-frame-9.png",
                "sha256": "483a3773e5c17a60ec28f181ed6f201d457821a36e686783300fe08969ac45eb",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/1x1-duration-75-frame-66.png",
                "sha256": "ef478f63de78cdeda63453ea14b8b970b95ff08afb73df3bf703c9744f95abe3",
                "alphaMass": 587520
              },
              {
                "frame": 74,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/1x1-duration-75-frame-74.png",
                "sha256": "e0762de6e34f33525ec3f630f71c2d01973de82cd41bf15ddf24677a31dc5c65",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 16.959092881944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/1x1-duration-600-frame-9.png",
                "sha256": "4a58887c8a6f462a3f27b69ac6b358a3c83d183a1d2b04e725bf310172d53e08",
                "alphaMass": 587520
              },
              {
                "frame": 66,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/1x1-duration-600-frame-66.png",
                "sha256": "2eddbb373d4fd656343f4e06147a78d42b5216465d3a5c585c1f3e3abcf49b56",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/1x1-duration-600-frame-528.png",
                "sha256": "3aaca5bd6a21bf506b33abd0fc4ab0240304316b352dfa3b4ecdd960db26d103",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/qr-end-card/1x1-duration-600-frame-599.png",
                "sha256": "2eddbb373d4fd656343f4e06147a78d42b5216465d3a5c585c1f3e3abcf49b56",
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
        "note": "A scannable QR code frames in with brand-blue corner brackets beside the URL and handle."
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
      "bundleSha256": "f25c1ae3062e84fcc2d2ce0d2e8b28f010626a10c9d8ddd066b61d8a79356baa",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/qr-end-card/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/qr-end-card/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/qr-end-card/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 66,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "3a20690fed2abb218494d3b5d45b36cf23b9a3687ddc2377c1a25de3fe690a1a",
        "loop": "96acc5c620022398b5753d1f1b10eec22ca882bd100172ab50050e1e6d376954",
        "detail": "3833762c11b0060c75da7ee69d290c8b15a5aa636a4c59af61f2813067df17f4"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/qr-end-card/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/qr-end-card/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/qr-end-card/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 66,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "461ae7d7e7632f4647f7b10e17778cefd8a5113b35164fcc3e467353de73a370",
        "loop": "245faa49cc182d4e7b7e54f2c20ee35beef3e8e31876008ea790e6e1fac03af2",
        "detail": "6dbe9f051da37c46cd9eabd1acb06ac85264cdc6bda5b3246fe694e0902b546a"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/qr-end-card/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/qr-end-card/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/qr-end-card/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 66,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "3424b450328416be9a4caefd5e003422d9eaec7524502434b6104a00571ec654",
        "loop": "95de10d138dd6f38706be415d08e2de9584b03127bbb3a0bdfa0cbeaaf5a2065",
        "detail": "716791df769e7ff0246340bbe3290159ea2c398881431c65e0663d26b46505d9"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/f25c1ae3062e84fcc2d2ce0d2e8b28f010626a10c9d8ddd066b61d8a79356baa/index.mjs",
    "sha256": "f25c1ae3062e84fcc2d2ce0d2e8b28f010626a10c9d8ddd066b61d8a79356baa",
    "bytes": 171961,
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
    "at": "2026-10-09T04:18:04.145Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
