// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "gallery/motion-gallery",
  "job": "gallery",
  "language": "editorial",
  "mechanic": [
    "menu-rows-wipe-in-with-dot-leaders"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "gallery",
    "menu-rows-wipe-in-with-dot-leaders",
    "beauty",
    "salon",
    "menu",
    "prices"
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
      "in": 96,
      "out": 0
    },
    "markers": {
      "settled": 96
    },
    "beats": [
      0,
      24,
      48,
      72,
      96
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
      "key": "kicker",
      "type": "text",
      "maxChars": 18,
      "role": "kicker"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 6,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 24,
      "role": "caption"
    },
    {
      "key": "blurb",
      "type": "text",
      "maxChars": 90,
      "role": "body"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.serif",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "menu-rows-wipe-in-with-dot-leaders",
      "prop": "transform",
      "from": "enter",
      "settledBy": 96,
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
    "ink": "#151311",
    "accent": "#B4532A",
    "secondary": "#8C6A4F",
    "paper": "#F3EEE6",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "the autumn",
    "title": "Menu",
    "sub": "hair, hands & skin",
    "blurb": "Every visit begins with a ten-minute consult and a cup of something warm."
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
      "brand": "fonts.serif"
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
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 18,
      "role": "kicker"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 6,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 24,
      "role": "caption"
    },
    {
      "key": "blurb",
      "label": "Blurb",
      "type": "text",
      "max": 90,
      "role": "body"
    }
  ],
  "name": "Editorial Price Menu",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-beauty-price-menu",
    "bundleSha256": "d37c4b5529aac02944fc05fe49b158e42b2dad9e01399628c32748d255e4e996",
    "sourceSnapshot": {
      "sha256": "b342da95c90071ffb99c060c999d9fca49ed6722762d7db99795613749872dfe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T07:45:56.267Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/16x9-paper.png",
        "sha256": "b24c8f9bbd019cb006641690b9b28b23b4b6d17683bc9ad2075be25e63f66c41"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/16x9-night.png",
        "sha256": "1c05e11a71b48ae8b5227763d6dd50db7552c1c8af37555f4c5f95e77e7568a8"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/16x9-color.png",
        "sha256": "22aef4a26f3c317b0b635cd6d4cf14336e1b9b092e49371e18612efe702d3c03"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/9x16-paper.png",
        "sha256": "b357072246af1ebc50d6a0a3e12293edbfc73b672c447cf6fd55d4f00fdc2be4"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/9x16-night.png",
        "sha256": "fb08af31c536cc57abc8a012ec59777afc76603514240b8493c8cfbe6988c13b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/9x16-color.png",
        "sha256": "de5098d929233c797bbf6789f66629aac79a0a1a2d1a2227849a910e98a9b474"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/1x1-paper.png",
        "sha256": "54b7264f01acf37194c3f0a17accd1578a3cee438a414f9afff11c950268a701"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/1x1-night.png",
        "sha256": "0d5018d71f9d1bef9d3d7f302e8785e0c5c33ad81f3d3dff91b25dc92f56750a"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/1x1-color.png",
        "sha256": "0cd5778684cba07f026a72d34a4beb3f8be499e4f8180a640dd7ada36c29a443"
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
          "mg-beauty-price-menu--16x9",
          "mg-beauty-price-menu--9x16",
          "mg-beauty-price-menu--1x1"
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
            "paperNight": 69.228515625,
            "paperColor": 18.76687282986111,
            "region": {
              "left": 91,
              "top": 73,
              "width": 1762,
              "height": 950
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 83.63959418402777,
            "paperColor": 26.51247829861111,
            "region": {
              "left": 57,
              "top": 68,
              "width": 980,
              "height": 1808
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 73.00075954861111,
            "paperColor": 20.95046657986111,
            "region": {
              "left": 52,
              "top": 60,
              "width": 971,
              "height": 962
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
            "occupancy": 1.1440524962557042,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1401567442820753,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1409960396195518,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2109910836762692,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2109910836762692,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2096514917695476,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1349800265327898,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1303045166397607,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.133800213615396,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.654296875,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 4.717990451388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/16x9-duration-90-frame-10.png",
                "sha256": "06fdb69f3f55b688750ebcb6a8dda14af77438142fc8b46044019e9dbc904b33",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/16x9-duration-90-frame-89.png",
                "sha256": "5ff511f5872298c0fa59650f8cf655ed7e7754bd25fa4afadbff7dcbc66c8e1b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/16x9-duration-90-frame-79.png",
                "sha256": "f65ed6173fb8b37890c010176aba3f40fcb4ebb0be3b9ea4a692fb8618fc9d8e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 4.654296875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/16x9-duration-900-frame-14.png",
                "sha256": "a270ca3be014c1814d0a000fb485e17b4dbcaf2bc43aa697a9323dafee26c552",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/16x9-duration-900-frame-96.png",
                "sha256": "7fb9a5fe2b1813197b9a4256631b7ee7429e4b0c32b4e170d9424c01c4a405b7",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/16x9-duration-900-frame-792.png",
                "sha256": "3cee8d030cfce2f4ddcc6846304467234fa1c4b954133d7ff2cd018d61f81e2f",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/16x9-duration-900-frame-899.png",
                "sha256": "f65ed6173fb8b37890c010176aba3f40fcb4ebb0be3b9ea4a692fb8618fc9d8e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 6.2646484375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/9x16-duration-90-frame-10.png",
                "sha256": "23f692e00d8a23ae558a0db7579af8b8a62e753a70eee70293719b524730ba0e",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/9x16-duration-90-frame-89.png",
                "sha256": "322bc8798740788e9d74914e8f7d55405bd814a796284b09305487db8162c0da",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/9x16-duration-90-frame-79.png",
                "sha256": "322bc8798740788e9d74914e8f7d55405bd814a796284b09305487db8162c0da",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 6.131401909722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/9x16-duration-900-frame-14.png",
                "sha256": "732c85400e04660563781e3c458855f5de38a61999eb2ce2129fdd47796831c5",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/9x16-duration-900-frame-96.png",
                "sha256": "322bc8798740788e9d74914e8f7d55405bd814a796284b09305487db8162c0da",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/9x16-duration-900-frame-792.png",
                "sha256": "322bc8798740788e9d74914e8f7d55405bd814a796284b09305487db8162c0da",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/9x16-duration-900-frame-899.png",
                "sha256": "322bc8798740788e9d74914e8f7d55405bd814a796284b09305487db8162c0da",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 5.091688368055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/1x1-duration-90-frame-10.png",
                "sha256": "c394deffda2282c48621d882db7efe4f489400ac2e9f97e51a121519e6d40c58",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/1x1-duration-90-frame-89.png",
                "sha256": "be25b8597a9397ad93815ebc76612043a4965332039f2b145ee92a7577122f69",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/1x1-duration-90-frame-79.png",
                "sha256": "be25b8597a9397ad93815ebc76612043a4965332039f2b145ee92a7577122f69",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 5.043619791666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/1x1-duration-900-frame-14.png",
                "sha256": "d565d97053eeca3d207876b60c52a43ac78c0957396bcb3d3ead7f1758dc00e7",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/1x1-duration-900-frame-96.png",
                "sha256": "be25b8597a9397ad93815ebc76612043a4965332039f2b145ee92a7577122f69",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/1x1-duration-900-frame-792.png",
                "sha256": "be25b8597a9397ad93815ebc76612043a4965332039f2b145ee92a7577122f69",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-31/mg-beauty-price-menu/1x1-duration-900-frame-899.png",
                "sha256": "be25b8597a9397ad93815ebc76612043a4965332039f2b145ee92a7577122f69",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "gallery",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Editorial price menu with a big serif title column and a circled pick; title stays in its column in every brand."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 25,
        "compared": 25,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "d37c4b5529aac02944fc05fe49b158e42b2dad9e01399628c32748d255e4e996",
      "selectedBy": "serafim (repo owner) on 2026-10-09; visual review by claude",
      "at": "2026-10-09T07:49:52.843Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-price-menu/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-price-menu/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-price-menu/16x9/detail.mp4",
      "bg": "#e8e3db",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f904e1a78c4dea8abb0d23ea964f69347e18558ee12606f9b25bb1f3c3d909e1",
        "loop": "b8e2ebcc3d01b6592bc5d11efc267fab7ba3f7d0f953e801c4b66f0a5f153359",
        "detail": "7e8741086a8021bd795bafea0a347c6a479094144cf3b10755134512aff67cce"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-price-menu/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-price-menu/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-price-menu/9x16/detail.mp4",
      "bg": "#e8e3dc",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d1331236733adc350f2599d7066586e8add00748980b7ff342cde8dbb49f23e8",
        "loop": "7a6b6f2d39f8916e621b2f3a1bcd489efd3d526fad9fcf796d2dbea0c6fff2ff",
        "detail": "38bc910d913aa0bf28001e5bad80d6040055b503595d281e0271854bf0ec2bb4"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beauty-price-menu/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beauty-price-menu/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beauty-price-menu/1x1/detail.mp4",
      "bg": "#e8e3dc",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e4144602ae7c43b0006a5638e74b7538c26ad20c85435e52936260462362345b",
        "loop": "fac0b6de93b38ad80b95e9b9ed5176d5f219b3513ce52048480cef6f113bf935",
        "detail": "93373c21eb5874f06ea7eaaa81974fcd22b42a8c207988f4f25cfa7cae28bec5"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d37c4b5529aac02944fc05fe49b158e42b2dad9e01399628c32748d255e4e996/index.mjs",
    "sha256": "d37c4b5529aac02944fc05fe49b158e42b2dad9e01399628c32748d255e4e996",
    "bytes": 265254,
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
    "at": "2026-10-09T08:00:28.109Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
