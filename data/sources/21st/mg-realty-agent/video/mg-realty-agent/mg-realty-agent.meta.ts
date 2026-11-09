// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "editorial",
  "mechanic": [
    "portrait-push-name-card-wipe"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "portrait-push-name-card-wipe",
    "real-estate",
    "agent",
    "lower-third"
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
      "in": 84,
      "out": 0
    },
    "markers": {
      "settled": 84
    },
    "beats": [
      0,
      21,
      42,
      63,
      84
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
      "key": "first",
      "type": "text",
      "maxChars": 14,
      "role": "name"
    },
    {
      "key": "last",
      "type": "text",
      "maxChars": 16,
      "role": "name"
    },
    {
      "key": "role",
      "type": "text",
      "maxChars": 40,
      "role": "body"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 20,
      "role": "cta"
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
      "target": "portrait-push-name-card-wipe",
      "prop": "transform",
      "from": "enter",
      "settledBy": 84,
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
    "ink": "#1D1714",
    "accent": "#C3552F",
    "secondary": "#E6B07C",
    "paper": "#FBF7F1",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "first": "Mara",
    "last": "Lindqvist",
    "role": "Senior partner, Riverside & Old Town",
    "cta": "Book a viewing"
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
      "key": "first",
      "label": "First",
      "type": "text",
      "max": 14,
      "role": "name"
    },
    {
      "key": "last",
      "label": "Last",
      "type": "text",
      "max": 16,
      "role": "name"
    },
    {
      "key": "role",
      "label": "Role",
      "type": "text",
      "max": 40,
      "role": "body"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 20,
      "role": "cta"
    }
  ],
  "name": "Meet Your Agent",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-realty-agent",
    "bundleSha256": "274cc2ce9eb72c400fdd8b4c67e52ef4f8efb6a1d73bb3dd87055f6fb930818c",
    "sourceSnapshot": {
      "sha256": "b342da95c90071ffb99c060c999d9fca49ed6722762d7db99795613749872dfe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T07:48:03.087Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/16x9-paper.png",
        "sha256": "532cbd3a49a87abe91c995a12326bcb96496e32d80e387a3a6e90b1be04c331c"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/16x9-night.png",
        "sha256": "7531f0bf93b294b20cb3cef6f3023f8a0ec339ec0c29f82a09ec2cddae188afb"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/16x9-color.png",
        "sha256": "5902bf2e237dd4e2c1e6655466f2104d4ae71b6abb21ee5eb12e736ec0764959"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/9x16-paper.png",
        "sha256": "8f1bb9119d2dbdffb24c56457e13fe9cd272ebbeba2e68f80f009f7e670b0aee"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/9x16-night.png",
        "sha256": "8cbabaa428fb635b1fa4eb45f6c0f829e9fcc739c7fcdf1368af4927eafcfe67"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/9x16-color.png",
        "sha256": "0149c197d0228aa39ee535d6d318e29dae86951d77d01f1193c4b61ba879f315"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/1x1-paper.png",
        "sha256": "6b29abc8d6cd87b328d1bb05dbe0932fb28e06793d4b1efe452c3bafcb5d935f"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/1x1-night.png",
        "sha256": "fdf8818d360e8bceff011668d72b8dc63c83ed69c40734de0527636c56e007da"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/1x1-color.png",
        "sha256": "183f6da91bf8fb8bed23c1322cd51f7645dc8ca7837cba951d9486afd78068f9"
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
          "mg-realty-agent--16x9",
          "mg-realty-agent--9x16",
          "mg-realty-agent--1x1"
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
            "paperNight": 21.799479166666668,
            "paperColor": 7.959445529513889,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1920,
              "height": 1080
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 49.93858506944444,
            "paperColor": 18.108154296875,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1920
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 31.49221462673611,
            "paperColor": 14.58639865451389,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1080
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
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 10.942708333333334,
        "frames": [
          12,
          84,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 12.42068142361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/16x9-duration-90-frame-10.png",
                "sha256": "2e5403830a1dea2d6fcc178fa5bba45458fd466be698ffbadac0380b6d279fd0",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/16x9-duration-90-frame-84.png",
                "sha256": "917b667fe738f84d819d9ba40fd0e2216b16d990c8c2a725168eaff8dc94add0",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/16x9-duration-90-frame-79.png",
                "sha256": "917b667fe738f84d819d9ba40fd0e2216b16d990c8c2a725168eaff8dc94add0",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/16x9-duration-90-frame-89.png",
                "sha256": "917b667fe738f84d819d9ba40fd0e2216b16d990c8c2a725168eaff8dc94add0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 10.942708333333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/16x9-duration-900-frame-12.png",
                "sha256": "55ccabf5fafc0f338844255fedc6d461b8264f442b08c40fe324b015b7c51966",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/16x9-duration-900-frame-84.png",
                "sha256": "917b667fe738f84d819d9ba40fd0e2216b16d990c8c2a725168eaff8dc94add0",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/16x9-duration-900-frame-792.png",
                "sha256": "917b667fe738f84d819d9ba40fd0e2216b16d990c8c2a725168eaff8dc94add0",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/16x9-duration-900-frame-899.png",
                "sha256": "917b667fe738f84d819d9ba40fd0e2216b16d990c8c2a725168eaff8dc94add0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 31.68901909722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/9x16-duration-90-frame-10.png",
                "sha256": "414dca0cdde4d02a89a9c0ec107292adb4e4c7b2c9737bb23ea08b377cc47fd3",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/9x16-duration-90-frame-84.png",
                "sha256": "858f80eb463e67a44ce562b6fa28603bf5dd4c861291354ef125d3a8cc0d77f5",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/9x16-duration-90-frame-79.png",
                "sha256": "858f80eb463e67a44ce562b6fa28603bf5dd4c861291354ef125d3a8cc0d77f5",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/9x16-duration-90-frame-89.png",
                "sha256": "858f80eb463e67a44ce562b6fa28603bf5dd4c861291354ef125d3a8cc0d77f5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 30.437825520833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/9x16-duration-900-frame-12.png",
                "sha256": "0eacd8d8d4efaade51f65495eeb2886152b0b5b0f18605c86f32f65b78960525",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/9x16-duration-900-frame-84.png",
                "sha256": "858f80eb463e67a44ce562b6fa28603bf5dd4c861291354ef125d3a8cc0d77f5",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/9x16-duration-900-frame-792.png",
                "sha256": "858f80eb463e67a44ce562b6fa28603bf5dd4c861291354ef125d3a8cc0d77f5",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/9x16-duration-900-frame-899.png",
                "sha256": "858f80eb463e67a44ce562b6fa28603bf5dd4c861291354ef125d3a8cc0d77f5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 17.855143229166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/1x1-duration-90-frame-10.png",
                "sha256": "4ead5cb580ccfc1283c7f663ac8ca58a0345230b98029efda57a9935ed427fbe",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/1x1-duration-90-frame-84.png",
                "sha256": "2c63db2191709d1ff19d3feaf793a42d68d15d6c70101afaec6dff6ed7271945",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/1x1-duration-90-frame-79.png",
                "sha256": "2c63db2191709d1ff19d3feaf793a42d68d15d6c70101afaec6dff6ed7271945",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/1x1-duration-90-frame-89.png",
                "sha256": "2c63db2191709d1ff19d3feaf793a42d68d15d6c70101afaec6dff6ed7271945",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 16.41189236111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/1x1-duration-900-frame-12.png",
                "sha256": "db7e0b4f5872ffee08c61d5fd9859604857baed6e5c766c8722301141dbc7b61",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/1x1-duration-900-frame-84.png",
                "sha256": "2c63db2191709d1ff19d3feaf793a42d68d15d6c70101afaec6dff6ed7271945",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/1x1-duration-900-frame-792.png",
                "sha256": "2c63db2191709d1ff19d3feaf793a42d68d15d6c70101afaec6dff6ed7271945",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-realty-agent/1x1-duration-900-frame-899.png",
                "sha256": "2c63db2191709d1ff19d3feaf793a42d68d15d6c70101afaec6dff6ed7271945",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "titles",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Agent portrait with a serif name card, stats and booking pill; rebrands recolor card and light."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 63,
        "compared": 63,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "274cc2ce9eb72c400fdd8b4c67e52ef4f8efb6a1d73bb3dd87055f6fb930818c",
      "selectedBy": "serafim (repo owner) on 2026-10-09; visual review by claude",
      "at": "2026-10-09T07:49:52.849Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-agent/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-agent/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-agent/16x9/detail.mp4",
      "bg": "#cfa57b",
      "posterFrame": 84,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d51474800b9a60454a77344c5abfe8075ac6b0493a79a30aec620540a5352d9f",
        "loop": "7f7b5be783d37ea839130bea216c78f1cf6490f62445ad30a0a0db345b5cc669",
        "detail": "efcd3ba7ceb0a195f14ceba8a25a60ec80c13f63228de82a8ca76c502d9c215b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-agent/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-agent/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-agent/9x16/detail.mp4",
      "bg": "#cfa277",
      "posterFrame": 84,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e11edb5a7aad003bd733126d316b572bfa63fb7ccda096c934025bda685b9be0",
        "loop": "d430b6d794a806c5d37eb85b0a8619b6b6fcdb04d3121de8dbdd172822ebdb49",
        "detail": "c8996718088369a506c9028a6c5f6cd3617ddf2dfde5018bf4303086276bc5f9"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-agent/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-agent/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-agent/1x1/detail.mp4",
      "bg": "#cfa477",
      "posterFrame": 84,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f17c7c43213361e7dd27d70fe0230ef84d81c73d8cbeccb9cfdc1d8773ef1bd4",
        "loop": "9325f9de352f7584895dd1a1d710e4dee72be5b4d0753144b87f3f91af4d582f",
        "detail": "31f35242daa1eb5879db93dec7bf624e085b2e03be9d8f5a76429057d4662593"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/274cc2ce9eb72c400fdd8b4c67e52ef4f8efb6a1d73bb3dd87055f6fb930818c/index.mjs",
    "sha256": "274cc2ce9eb72c400fdd8b4c67e52ef4f8efb6a1d73bb3dd87055f6fb930818c",
    "bytes": 172562,
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
    "at": "2026-10-09T08:02:47.581Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
