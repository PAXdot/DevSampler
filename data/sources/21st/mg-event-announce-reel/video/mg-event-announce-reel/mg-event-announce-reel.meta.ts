// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "sun-disc-type-rise-marquee"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "sun-disc-type-rise-marquee",
    "event",
    "announcement",
    "poster",
    "conference"
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
      "in": 78,
      "out": 0
    },
    "markers": {
      "settled": 78
    },
    "beats": [
      0,
      20,
      39,
      59,
      78
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
      "key": "name",
      "type": "text",
      "maxChars": 20,
      "role": "headline"
    },
    {
      "key": "year",
      "type": "text",
      "maxChars": 6,
      "role": "value"
    },
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 20,
      "role": "kicker"
    },
    {
      "key": "details",
      "type": "text",
      "maxChars": 28,
      "role": "caption"
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
      "target": "sun-disc-type-rise-marquee",
      "prop": "transform",
      "from": "enter",
      "settledBy": 78,
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
    "ink": "#15110E",
    "accent": "#DBFF45",
    "secondary": "#FFB078",
    "paper": "#FF5634",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "name": "Meridian Summit",
    "year": "2026",
    "kicker": "Just announced",
    "details": "Nov 18–20 · Lisbon, PT"
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
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 20,
      "role": "headline"
    },
    {
      "key": "year",
      "label": "Year",
      "type": "text",
      "max": 6,
      "role": "value"
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 20,
      "role": "kicker"
    },
    {
      "key": "details",
      "label": "Details",
      "type": "text",
      "max": 28,
      "role": "caption"
    }
  ],
  "name": "Event Announcement Poster",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-event-announce-reel",
    "bundleSha256": "31d76624e7b74a68b3a7b543e19aa6a7e16078c049f15dcf09267843e0b8cd85",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:46:04.821Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/16x9-paper.png",
        "sha256": "7b78671cb8de3bf70e70ccd232dbab20f5ba439727ab05039d0e370b246f6fc0"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/16x9-night.png",
        "sha256": "2c850d7df1e65fad0ede830ce18237f39da8a87a1a5d8b76ff05a83a4efe5d30"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/16x9-color.png",
        "sha256": "e24ff22300bb8e45c45f90807e92d7d7096443afdfd7c3af88e76accd50ee4da"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/9x16-paper.png",
        "sha256": "b5b548124cd1a25cc624cde35d393b6e9d6b81b4ccba2f5b05a6c847b8a78506"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/9x16-night.png",
        "sha256": "d5906b008657f5ef24a66db735e8d1c6664c140ee5ae0ae92899395fe83a6fc2"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/9x16-color.png",
        "sha256": "d96790121a72c6ee8226e5a7475fddb35ac73414c08e8c9993ba5816916d0a06"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/1x1-paper.png",
        "sha256": "14f0151aa937585395023ef2f587878fa02bd6cec71ca3c82e0032b96d7acdc2"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/1x1-night.png",
        "sha256": "00635fbca77df355dd7cefcb6db35e52e601b2a32bd3cd238c4fa48ddc0cd3df"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/1x1-color.png",
        "sha256": "c3e9699abd7fe26567873050c3e358475b267514bb1060aab03788c84aab58ab"
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
          "mg-event-announce-reel--16x9",
          "mg-event-announce-reel--9x16",
          "mg-event-announce-reel--1x1"
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
            "paperNight": 66.16653103298611,
            "paperColor": 22.44094509548611,
            "region": {
              "left": 0,
              "top": 67,
              "width": 1920,
              "height": 1013
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 72.29437934027777,
            "paperColor": 24.336588541666668,
            "region": {
              "left": 0,
              "top": 67,
              "width": 1080,
              "height": 1853
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 61.757242838541664,
            "paperColor": 19.85883246527778,
            "region": {
              "left": 0,
              "top": 55,
              "width": 1080,
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
            "occupancy": 1.3293125892332245,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3293125892332245,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3293125892332245,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3677780139833715,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3677780139833715,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.3677780139833715,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3450596287897878,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3450596287897878,
            "bad": [],
            "measured": 5
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3450596287897878,
            "bad": [],
            "measured": 5
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 12.581597222222221,
        "frames": [
          11,
          78,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 12.649305555555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/16x9-duration-90-frame-10.png",
                "sha256": "50a6cacb65e2f76d639f511013fa22bf5f4ec25b101758f48199ef3b267215e6",
                "alphaMass": 587520
              },
              {
                "frame": 78,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/16x9-duration-90-frame-78.png",
                "sha256": "ea78ea5b6a3659f265bcae90fba5ccca8009ca19086002fab7c505e4ed70846b",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/16x9-duration-90-frame-79.png",
                "sha256": "57ede7adf4d0517a870d0f5478d235058b17b1018def0caf2e50a1bda0de79a1",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/16x9-duration-90-frame-89.png",
                "sha256": "3b045a48acb103f64019fdf41019d3e7d648a91f60197db4215bfc24de66a1cf",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 12.581597222222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/16x9-duration-900-frame-11.png",
                "sha256": "f3d31981bfaa1f5af1f3268581a8d7312bc09e5249bd775213feac39d536e483",
                "alphaMass": 587520
              },
              {
                "frame": 78,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/16x9-duration-900-frame-78.png",
                "sha256": "3b045a48acb103f64019fdf41019d3e7d648a91f60197db4215bfc24de66a1cf",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/16x9-duration-900-frame-792.png",
                "sha256": "e05978c09635467a40bc43d5ad3f2646eb3cef887d69508d7b96d3e04d8bb370",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/16x9-duration-900-frame-899.png",
                "sha256": "7e5df83b3c7224ada2ec3de97ab7ea050e0dafbbf59b267b46b5426315379fa2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 14.662651909722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/9x16-duration-90-frame-10.png",
                "sha256": "252033f73b67fe7eec09e1408d151f31fbe55adf250f02436e320f7b163d0165",
                "alphaMass": 587520
              },
              {
                "frame": 78,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/9x16-duration-90-frame-78.png",
                "sha256": "22c1d1af5df338d08695d4bfdb1a64662d039b1998bf0a7d306e7c217b552ecb",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/9x16-duration-90-frame-79.png",
                "sha256": "2585cae2c9bbedf8e510170515bb0ff1933faf3782365e0fa929ad1ba36b6022",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/9x16-duration-90-frame-89.png",
                "sha256": "d414f60fa029d22e713ee098fc814c1dd69688eafb710ddc8469b1f7301f304e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 14.538736979166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/9x16-duration-900-frame-11.png",
                "sha256": "d582a7852e3d6fa5cee9bdd622e75bf68f42a6f639c228b319aa20d529b35286",
                "alphaMass": 587520
              },
              {
                "frame": 78,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/9x16-duration-900-frame-78.png",
                "sha256": "2585cae2c9bbedf8e510170515bb0ff1933faf3782365e0fa929ad1ba36b6022",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/9x16-duration-900-frame-792.png",
                "sha256": "8bec705cd1fb9273ff14929e6129cb5a22d8207d134f4c5979460516c46116e9",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/9x16-duration-900-frame-899.png",
                "sha256": "8c956c2535bcb3dbe4d018314408c6f8c561a225993af6f542c9b9bb254a3d77",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 11.095052083333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/1x1-duration-90-frame-10.png",
                "sha256": "b5210a5567348a1c08f7cee8d2b3d4f9ee1be521dc6c03bda08f250ec3df3d59",
                "alphaMass": 587520
              },
              {
                "frame": 78,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/1x1-duration-90-frame-78.png",
                "sha256": "3b67968c5c7e786339651c15c3f557ffedc342006867aa976c35228843ce2567",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/1x1-duration-90-frame-79.png",
                "sha256": "3b67968c5c7e786339651c15c3f557ffedc342006867aa976c35228843ce2567",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/1x1-duration-90-frame-89.png",
                "sha256": "3b67968c5c7e786339651c15c3f557ffedc342006867aa976c35228843ce2567",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 11.040581597222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/1x1-duration-900-frame-11.png",
                "sha256": "605ee667fb781a3464aaa09d89c4fa55a31b7930e5ede39e78c49c2d26dad8dd",
                "alphaMass": 587520
              },
              {
                "frame": 78,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/1x1-duration-900-frame-78.png",
                "sha256": "3b67968c5c7e786339651c15c3f557ffedc342006867aa976c35228843ce2567",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/1x1-duration-900-frame-792.png",
                "sha256": "3b67968c5c7e786339651c15c3f557ffedc342006867aa976c35228843ce2567",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s3/mg-event-announce-reel/1x1-duration-900-frame-899.png",
                "sha256": "3b67968c5c7e786339651c15c3f557ffedc342006867aa976c35228843ce2567",
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
        "note": "Event poster with a striped sun, ring text and bold summit title; rebrands recolor the sun and tape."
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
      "bundleSha256": "31d76624e7b74a68b3a7b543e19aa6a7e16078c049f15dcf09267843e0b8cd85",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.094Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-announce-reel/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-announce-reel/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-announce-reel/16x9/detail.mp4",
      "bg": "#f65332",
      "posterFrame": 78,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "6c3a1558ddb2ded863f409daf2107ef536f801f1a9cb421f169eb9ce7ac4fe00",
        "loop": "59e7d0f05799908fcf7bf21cf4a1ffca6d4dec3c715c24f6b6ac30df45fb467d",
        "detail": "53c37c16bfa35ff8686434fb28f24cb92c5a3d1a894a84702d7f86bf079f3c22"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-announce-reel/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-announce-reel/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-announce-reel/9x16/detail.mp4",
      "bg": "#f65332",
      "posterFrame": 78,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "fc31f986000311a3871eb7cbbbf02692422f61e52faa37d98b76b4ed27b3893a",
        "loop": "8ae5f38749b68cb87aabc98b41d0e7dd0a516ad91e89b00ad27c69ce03a4a3d8",
        "detail": "56530950ef882616e3ee8055c9a43a0ab8c5e9b80b57e948944f61b63b68e9d9"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-event-announce-reel/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-event-announce-reel/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-event-announce-reel/1x1/detail.mp4",
      "bg": "#f65332",
      "posterFrame": 78,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c9e4561feacf32bc9ef6789b4336030a4966537bc16fdd1fd2e7b99072e28617",
        "loop": "3fb2dd50138b71f2cc80f3b4a71827cbd151f8340811d987818cd0664e4136ad",
        "detail": "95a48b4f23561163813e88d8535d82efd23c1074180228a49d805d7b4651af22"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/31d76624e7b74a68b3a7b543e19aa6a7e16078c049f15dcf09267843e0b8cd85/index.mjs",
    "sha256": "31d76624e7b74a68b3a7b543e19aa6a7e16078c049f15dcf09267843e0b8cd85",
    "bytes": 296003,
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
    "at": "2026-10-09T07:17:34.293Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
