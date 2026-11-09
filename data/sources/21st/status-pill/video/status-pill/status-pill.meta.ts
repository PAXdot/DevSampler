// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/status",
  "tags": [
    "status",
    "pill",
    "badge",
    "deployed",
    "synced",
    "done",
    "toast",
    "ui"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 90,
      "min": 30,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 40,
      "out": 0
    },
    "markers": {
      "settled": 48,
      "swap": 34
    },
    "beats": [
      0,
      34
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
    "fill": "region",
    "defaultRegion": {
      "x": 0.08,
      "y": 0.04,
      "w": 0.84,
      "h": 0.4
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "upper-third",
    "backdrop": []
  },
  "slots": [
    {
      "key": "label",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "doneLabel",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "surfaceColor": "colors.background",
    "textColor": "colors.text",
    "fontFamily": "fonts.heading",
    "pendingColor": "colors.secondary",
    "doneColor": "colors.primary"
  },
  "motionBeats": [
    {
      "target": "pill",
      "prop": "scale",
      "from": "0.95",
      "settledBy": 6,
      "easing": "ease"
    },
    {
      "target": "dot",
      "prop": "pulse",
      "settledBy": 22,
      "easing": "ease"
    },
    {
      "target": "label",
      "prop": "y",
      "from": "swap",
      "settledBy": 42,
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
      90
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/video-components-2026-10-05 (V15 synced pill toast)"
  },
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "interact"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "label": "Deploying to production",
    "doneLabel": "Live on production",
    "pendingColor": "#F59E0B",
    "doneColor": "#22C55E",
    "swapAt": 34,
    "surfaceColor": "#141417",
    "textColor": "#F4F4F5",
    "theme": "dark",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 32,
      "role": "label"
    },
    {
      "key": "doneLabel",
      "label": "Done label",
      "type": "text",
      "max": 32,
      "role": "subline"
    },
    {
      "key": "pendingColor",
      "label": "Pending color",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "doneColor",
      "label": "Done color",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "swapAt",
      "label": "Swap at",
      "type": "number",
      "step": 1,
      "min": 10,
      "max": 300
    },
    {
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "textColor",
      "label": "Text color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "theme",
      "label": "Theme",
      "type": "select",
      "options": [
        "light",
        "dark"
      ]
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Status Pill",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "status-pill",
    "bundleSha256": "95ad7a540d0ebc0f3fb3b71016f937eb162d738a61ecb0313e0da19be07a549f",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:02:52.864Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/16x9-paper.png",
        "sha256": "03a5825e581d568ace32a0205a2c5dacaf3ed95451b2ca9b591bc7dbe1754612"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/16x9-night.png",
        "sha256": "226d11ce9036412f4154e686a35abd9c1e167990170628c7caee2a316dbe128a"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/16x9-color.png",
        "sha256": "9ea2651518fc0a014a0554ecf2e5a2f42eae209c6a4a7bfbada32a088d61d554"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/9x16-paper.png",
        "sha256": "33cab69f5c395bc24f45a6cfd0c65105f9dbde4d3d86d5f8e99e31af8a69df34"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/9x16-night.png",
        "sha256": "d7090a7f95470bce8e17a6bcfb58eb61cb2a33c88b66597cbf6cfd09425c4c86"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/9x16-color.png",
        "sha256": "0e3fde6d12cf589972a5b1c60c55c9c73c5db6d47e8b8ebf56ce188404203963"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/1x1-paper.png",
        "sha256": "18c9a9b13d8ea28e8240ecd1d76d44b1695164d4225a1c3f3b2d924db61e61fa"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/1x1-night.png",
        "sha256": "6a4cfc2e96119c59b951786b8fb7f18dc4b6aa6f8eb92ec89a50c5c6d0617574"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/1x1-color.png",
        "sha256": "b5a6743b84c8cac8cd4fb30d5a8d0ff43f5805d12657a92d5ee229126216b33a"
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
          "status-pill--16x9",
          "status-pill--9x16",
          "status-pill--1x1"
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
            "paperNight": 86.519287109375,
            "paperColor": 48.130615234375,
            "region": {
              "left": 544,
              "top": 146,
              "width": 833,
              "height": 255
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 82.36151801215277,
            "paperColor": 17.816080729166668,
            "region": {
              "left": 0,
              "top": 72,
              "width": 1080,
              "height": 875
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 85.43299696180556,
            "paperColor": 17.05178493923611,
            "region": {
              "left": 31,
              "top": 40,
              "width": 1017,
              "height": 496
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
            "occupancy": 0.38321172479462273,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.43202461864633807,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.30415924320176974,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.132703993055555,
        "frames": [
          7,
          48,
          89
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 30,
            "averageChannelDifference": 3.2957899305555554,
            "retainedAlpha": 1.000033726812816,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/16x9-duration-30-frame-3.png",
                "sha256": "e1e0e1c09f3e859846ac534e20e0e59769bc06ee358c33a9663e3dfdb4613e98",
                "alphaMass": 14791
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/16x9-duration-30-frame-29.png",
                "sha256": "bf089f57131b9ed78ff3dae307a5f7eec80b7fe2fee841dca17c14ba3ea5d87a",
                "alphaMass": 29650
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/16x9-duration-30-frame-26.png",
                "sha256": "4615532037bb577929b7172582ecbe05ae34f6c1d816619c6c9fe60196aefc2e",
                "alphaMass": 29651
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 4.132703993055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/16x9-duration-600-frame-7.png",
                "sha256": "85b89feb61e5ea0cda2dbfefd496f340d69545bc2371cbac715d5b7b51800c78",
                "alphaMass": 29656
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/16x9-duration-600-frame-48.png",
                "sha256": "d4138e4c62dbc4fd77a631c0f142f6c36e22bed2eb512ede4ecf1cb6b5452d03",
                "alphaMass": 29636
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/16x9-duration-600-frame-528.png",
                "sha256": "89497c8810bf31f64fd137aacae757f5282ed9ee060cbbe18b9f929f086a9033",
                "alphaMass": 29629
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/16x9-duration-600-frame-599.png",
                "sha256": "89497c8810bf31f64fd137aacae757f5282ed9ee060cbbe18b9f929f086a9033",
                "alphaMass": 29629
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 30,
            "averageChannelDifference": 11.07638888888889,
            "retainedAlpha": 1.0000081698011472,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/9x16-duration-30-frame-3.png",
                "sha256": "e3f0af12a481bafeda24b32add72b4566b69eadd50f169a5363b1b934083003e",
                "alphaMass": 61428
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/9x16-duration-30-frame-29.png",
                "sha256": "0ca1dd22edd1c051af980f4e4fae440e3e59f24069c346f6ea68e26ee970d188",
                "alphaMass": 122402
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/9x16-duration-30-frame-26.png",
                "sha256": "49d66dd924394071edb000b357a981b0919fa2b307a70636f885302486175913",
                "alphaMass": 122403
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 13.88888888888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/9x16-duration-600-frame-7.png",
                "sha256": "3f032e81455b7632cbf9ccf29b4f6148f9e6cf558767d96dcfaeb656afb5c40e",
                "alphaMass": 122452
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/9x16-duration-600-frame-48.png",
                "sha256": "3c409e806905f680dcb130dd30b0c03e3b76cbeba85f513bb7a763c0ee4cac19",
                "alphaMass": 122450
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/9x16-duration-600-frame-528.png",
                "sha256": "c8633bb67dd865feda8064de3b70944d581a6382cad058df893b7eb97465c3e4",
                "alphaMass": 122394
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/9x16-duration-600-frame-599.png",
                "sha256": "c8633bb67dd865feda8064de3b70944d581a6382cad058df893b7eb97465c3e4",
                "alphaMass": 122394
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 30,
            "averageChannelDifference": 10.795247395833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/1x1-duration-30-frame-3.png",
                "sha256": "40272c3e77c39c33c548bb7454752ed63b067c5fb5dd8bb22162b2082d8da6f9",
                "alphaMass": 60616
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/1x1-duration-30-frame-29.png",
                "sha256": "b6f1af9ed6c6ab3234b4171a3c901d667c9eddcb65c49d3c190a83d83a9eb765",
                "alphaMass": 120964
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/1x1-duration-30-frame-26.png",
                "sha256": "63ca970071e806d251dce64ae19eec33c11cd5a17cc2b8bb883e8dd8bbd8eb08",
                "alphaMass": 120964
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 13.08083767361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/1x1-duration-600-frame-7.png",
                "sha256": "b12d91ede3e01b502481688edfd5f322fb2902133f97f3628bcc997a0cff37c5",
                "alphaMass": 121015
              },
              {
                "frame": 48,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/1x1-duration-600-frame-48.png",
                "sha256": "b5caee7b49b1a5cbb0603daa88b9376dfdd9375e1b7c6dc437e79c9951fa114b",
                "alphaMass": 121014
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/1x1-duration-600-frame-528.png",
                "sha256": "7e4067b30fa1aa3d9f4eb796b3770da7fe0cb30386b810ee32e296289a7b4226",
                "alphaMass": 120960
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/status-pill/1x1-duration-600-frame-599.png",
                "sha256": "7e4067b30fa1aa3d9f4eb796b3770da7fe0cb30386b810ee32e296289a7b4226",
                "alphaMass": 120960
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
        "note": "A status pill goes from Deploying to Live on production."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 39,
        "compared": 39,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "95ad7a540d0ebc0f3fb3b71016f937eb162d738a61ecb0313e0da19be07a549f",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.942077Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/status-pill/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/status-pill/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/status-pill/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 48,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "970f43cfd9de0b2728ac183d485f18f10fc6d6361c3efb734ab07fe61e47e18c",
        "loop": "146b770537387d8fde62d3fca057ce7c30db60d71c1ddea893c7390c1db1da66",
        "detail": "3b184aee269e82050ae1e7668a0bae9a70e116d538febe36ffbaf43c6c27630d"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/status-pill/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/status-pill/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/status-pill/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 48,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "e7d3135b39a550f622f8b2a5e9acdb2c31cfc80b8fdc3355d0f3b6709e069988",
        "loop": "58058ec8bcc5f1bc5020f94890b76b7e1ffbd7e97f3defde43286bc470b30e9c",
        "detail": "da8dde039580a329ccac591045673fc00d6202f519f0be54fb08c085a47fba3e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/status-pill/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/status-pill/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/status-pill/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 48,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "9349639e6a5ef1037bf02b0f383ab284996bdcaf2a01b41c8f024d4ca1d0a13f",
        "loop": "84955432389cbce8dbc83ba41c6cf3eec8d126627914e863e8bd9d824009332c",
        "detail": "6d4172f784107295082d8170b514a74c13338bf08a10d8195b5d8b8208e6c54a"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/95ad7a540d0ebc0f3fb3b71016f937eb162d738a61ecb0313e0da19be07a549f/index.mjs",
    "sha256": "95ad7a540d0ebc0f3fb3b71016f937eb162d738a61ecb0313e0da19be07a549f",
    "bytes": 167424,
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
      "overflow": true,
      "transparent": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    }
  },
  "intake": {
    "at": "2026-10-07T02:22:18.295Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
