// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "editorial",
  "mechanic": [
    "stamp-slam-on-invoice"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "stamp-slam-on-invoice",
    "fintech",
    "invoice",
    "freelance",
    "payments"
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
      "maxChars": 26,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 34,
      "role": "headline"
    },
    {
      "key": "stamp",
      "type": "text",
      "maxChars": 6,
      "role": "label"
    },
    {
      "key": "toast",
      "type": "text",
      "maxChars": 32,
      "role": "caption"
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
      "target": "stamp-slam-on-invoice",
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
    "ink": "#1D1A16",
    "accent": "#D24A33",
    "secondary": "#C9B48F",
    "paper": "#FFFDF8",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Halcy for freelancers",
    "headline": "Invoices that chase themselves.",
    "stamp": "Paid",
    "toast": "Pine & Harbor paid $6,400.00"
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
      "max": 26,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 34,
      "role": "headline"
    },
    {
      "key": "stamp",
      "label": "Stamp",
      "type": "text",
      "max": 6,
      "role": "label"
    },
    {
      "key": "toast",
      "label": "Toast",
      "type": "text",
      "max": 32,
      "role": "caption"
    }
  ],
  "name": "Invoice Paid Stamp",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-fin-invoice-paid",
    "bundleSha256": "9784c83718d2c809fa516faa70c6cb737b79011ffe17ba1e51fa3266c5caa24c",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:17:51.891Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/16x9-paper.png",
        "sha256": "a959aaa6fb0ad959541260a7a3b1aac354ad563ddd7dc34ed85906fb37f7c792"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/16x9-night.png",
        "sha256": "59bd95aef652e3d0091b9c09df2fdbefd63773fab66be452920daf4bae977326"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/16x9-color.png",
        "sha256": "de8f11152fa1523a6cc05fac853c80ba19874f1846860a50e5b233dd66619667"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/9x16-paper.png",
        "sha256": "4377565f03b7cd0079453d3568bf926abcdfaab0495c517dd69a926d4ef5ea62"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/9x16-night.png",
        "sha256": "33680adeffb58182d36ba6fd19b8aab8c59d9936f5448c780848e312f788c8f3"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/9x16-color.png",
        "sha256": "1530a24ea2be4b99ef35e761a049be484ae4b830668b1b8a88774df7a854c6bd"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/1x1-paper.png",
        "sha256": "ba8be48961841a03eaa87fa9dec73ec424611e4c9bd2ed6e5b2d4206b3772ec8"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/1x1-night.png",
        "sha256": "78fd7b551773818a2b7762b2f322db566b0d1ab1f8795ec679904977d2287413"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/1x1-color.png",
        "sha256": "b3102d24ef0864bab09fe3979b4b8597f318fdc373535eb2f9d993e8d68d9c8e"
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
          "mg-fin-invoice-paid--16x9",
          "mg-fin-invoice-paid--9x16",
          "mg-fin-invoice-paid--1x1"
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
            "paperNight": 83.65115017361111,
            "paperColor": 16.925889756944443,
            "region": {
              "left": 71,
              "top": 80,
              "width": 1653,
              "height": 1000
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 88.97683376736111,
            "paperColor": 23.63642035590278,
            "region": {
              "left": 0,
              "top": 154,
              "width": 1080,
              "height": 1766
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 68.91818576388889,
            "paperColor": 15.737006293402779,
            "region": {
              "left": 23,
              "top": 65,
              "width": 1029,
              "height": 1000
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
            "occupancy": 1.1181491629573643,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.129768072352398,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0655223380504468,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3035596182917615,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3035596182917615,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3035596182917615,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2502857796067675,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2502857796067675,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2502857796067675,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 8.859700520833334,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 9.04470486111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/16x9-duration-90-frame-10.png",
                "sha256": "4289f6ce18c874abd34af58c38df79f0ee4bc9be7e96ab8c38684c637ed47889",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/16x9-duration-90-frame-89.png",
                "sha256": "a9b17ca909faec65eedeb14d5baba010cd6b0110434865e9d21aeacb64d2a637",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/16x9-duration-90-frame-79.png",
                "sha256": "3677501174254849dbd88945c1bcfb3ba680349779f476c914d8734a25fe8fc0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 8.859700520833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/16x9-duration-900-frame-14.png",
                "sha256": "ee7272ece31aa941aaaedef4fc4bee67d98404435ae884f3948d32e34c518748",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/16x9-duration-900-frame-96.png",
                "sha256": "a9b17ca909faec65eedeb14d5baba010cd6b0110434865e9d21aeacb64d2a637",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/16x9-duration-900-frame-792.png",
                "sha256": "3677501174254849dbd88945c1bcfb3ba680349779f476c914d8734a25fe8fc0",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/16x9-duration-900-frame-899.png",
                "sha256": "a9b17ca909faec65eedeb14d5baba010cd6b0110434865e9d21aeacb64d2a637",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 27.06488715277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/9x16-duration-90-frame-10.png",
                "sha256": "87b56596e409c96938b162a2e88ee0f59ba5ea960254dbc4f61944f082821703",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/9x16-duration-90-frame-89.png",
                "sha256": "022d50465a818f53d67492e48606e3c9c23bb52e4c99d133c5f871302672a474",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/9x16-duration-90-frame-79.png",
                "sha256": "e10b7f6c61c146cc479880fc76a1133fd7bef8cb543ad3976912b3cb31dfce6e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 26.91872829861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/9x16-duration-900-frame-14.png",
                "sha256": "e33a830c1d30000c8fdca891f89005606348ebe7d69e8bf09b6c574ab6af30ee",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/9x16-duration-900-frame-96.png",
                "sha256": "e10b7f6c61c146cc479880fc76a1133fd7bef8cb543ad3976912b3cb31dfce6e",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/9x16-duration-900-frame-792.png",
                "sha256": "e10b7f6c61c146cc479880fc76a1133fd7bef8cb543ad3976912b3cb31dfce6e",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/9x16-duration-900-frame-899.png",
                "sha256": "e10b7f6c61c146cc479880fc76a1133fd7bef8cb543ad3976912b3cb31dfce6e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 9.270616319444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/1x1-duration-90-frame-10.png",
                "sha256": "5acac169951b3b243a462c599209c6d41a9acf0e92ab38aa62b6de21b83ed5eb",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/1x1-duration-90-frame-89.png",
                "sha256": "eecf7a7948984c577974f14693ce07b34190272f35263259d26ad0cc49ee1a1c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/1x1-duration-90-frame-79.png",
                "sha256": "eecf7a7948984c577974f14693ce07b34190272f35263259d26ad0cc49ee1a1c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 9.128580729166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/1x1-duration-900-frame-14.png",
                "sha256": "cf881f9b0340f32732b0d6973ccf05c14a056a2e04e39e51a5dd8bb7c9da59e4",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/1x1-duration-900-frame-96.png",
                "sha256": "eecf7a7948984c577974f14693ce07b34190272f35263259d26ad0cc49ee1a1c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/1x1-duration-900-frame-792.png",
                "sha256": "01ff5c296515538b7b71019f82cc8f51fbf28d4aa78bf920a26cb6624e683eee",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s2/mg-fin-invoice-paid/1x1-duration-900-frame-899.png",
                "sha256": "01ff5c296515538b7b71019f82cc8f51fbf28d4aa78bf920a26cb6624e683eee",
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
        "note": "Invoice gets a Paid stamp beside a serif headline and payment toast; rebrands distinct."
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
      "bundleSha256": "9784c83718d2c809fa516faa70c6cb737b79011ffe17ba1e51fa3266c5caa24c",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.076Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-invoice-paid/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-invoice-paid/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-invoice-paid/16x9/detail.mp4",
      "bg": "#efe8da",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f552a3f62d3c847fcbd902171b64d1fee4d690ba76ce92c8bfcc90472342409b",
        "loop": "92ac82aa1d46ab916e36d7c185b289f61822742ccc7e2af6e61251e1f4d0d44f",
        "detail": "faa98fd8047ae059e5ddd2d9526595c5ce4d514c9f133a3d5e0357ac46fe78bd"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-invoice-paid/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-invoice-paid/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-invoice-paid/9x16/detail.mp4",
      "bg": "#efe8da",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2aa6588a36f6733293431d22d827fe4cf76290277d699b8ff9a44f8891cc0f56",
        "loop": "d2d828615b08c317c3d1d4c63b883506bbaf823526f20a93b70ff70e66f60b2f",
        "detail": "913752fe4e98f2b3e3e237abd16e062628b6f31c271a822f0f101416bfc88af1"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-fin-invoice-paid/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-fin-invoice-paid/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-fin-invoice-paid/1x1/detail.mp4",
      "bg": "#efe8da",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "04ba8bc2f80dc5b3bb4915e0dcca3d0d460f6c87a8bbf7b7581cbcb3731db4c2",
        "loop": "cf84373f674224a1d030583d86cabde3ef7ffcf37a8b2e3210dec3f8c4748e43",
        "detail": "2810c94889d88a3764f2caec4ea19583956133e4296b292ccc38538a8275083c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/9784c83718d2c809fa516faa70c6cb737b79011ffe17ba1e51fa3266c5caa24c/index.mjs",
    "sha256": "9784c83718d2c809fa516faa70c6cb737b79011ffe17ba1e51fa3266c5caa24c",
    "bytes": 271658,
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
    "at": "2026-10-09T07:06:39.563Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
