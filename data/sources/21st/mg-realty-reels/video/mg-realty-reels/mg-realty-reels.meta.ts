// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "cta/motion-gallery",
  "job": "cta",
  "language": "kinetic-poster",
  "mechanic": [
    "story-ad-line-stack"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "cta",
    "story-ad-line-stack",
    "real-estate",
    "story-ad",
    "listing"
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
      "in": 90,
      "out": 0
    },
    "markers": {
      "settled": 90
    },
    "beats": [
      0,
      23,
      45,
      68,
      90
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
      "key": "lines",
      "type": "text",
      "maxChars": 30,
      "role": "headline"
    },
    {
      "key": "place",
      "type": "text",
      "maxChars": 18,
      "role": "caption"
    },
    {
      "key": "price",
      "type": "text",
      "maxChars": 10,
      "role": "value"
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
    "displayFont": "fonts.display",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "story-ad-line-stack",
      "prop": "transform",
      "from": "enter",
      "settledBy": 90,
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
    "ink": "#FFFFFF",
    "accent": "#EC7766",
    "secondary": "#FFD6A2",
    "paper": "#1C1433",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "lines": "3 bed. 2 bath. 1 garden.",
    "place": "in Fernhill.",
    "price": "$1.24M",
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
      "key": "lines",
      "label": "Lines",
      "type": "text",
      "max": 30,
      "role": "headline"
    },
    {
      "key": "place",
      "label": "Place",
      "type": "text",
      "max": 18,
      "role": "caption"
    },
    {
      "key": "price",
      "label": "Price",
      "type": "text",
      "max": 10,
      "role": "value"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 20,
      "role": "cta"
    }
  ],
  "name": "Dusk Listing Reel",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-realty-reels",
    "bundleSha256": "58ae065936dac79ccf583c8aeb8c6ab68b6de894233666913765f16ffa771d04",
    "sourceSnapshot": {
      "sha256": "e7061b32b1cfe8c0c4f3758a88bf83811adaa982309b767b71e64b3e279e92fe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T03:19:19.376Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/16x9-paper.png",
        "sha256": "451c038783c4bbb64d2f54a2f2ad44ea6036a7f63fdffad77f22c2def489dba6"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/16x9-night.png",
        "sha256": "ff058ef93d7f07bb34795406bb8d7cde16d7fc6f087d39bde433fe71894f1b65"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/16x9-color.png",
        "sha256": "f6e438cb75496c5467c9e4ce243654e55329f0810547c7f8f5212c946317e9e4"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/9x16-paper.png",
        "sha256": "f261649549e5f8e1f81788fbcd05a37fe55015b101a1954b90debdc90d74d7ef"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/9x16-night.png",
        "sha256": "cf16af09352d5122a3f36bb05a235f8fecd9e98d658ceed72ea4edfbe5e2f5b8"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/9x16-color.png",
        "sha256": "6b4a1fed1a26fb4036cf21f286d2e9f68bde2ca4ed64c54c34a7ed5e3b4316f4"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/1x1-paper.png",
        "sha256": "65a7c144ea55022426b2a256e36ed8daa39c3ff4fec089240bba8ea56bbdae2a"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/1x1-night.png",
        "sha256": "508b6de675a2e3e78ee1ad214445e91013ecf59cc57c612ebb1316b12baa4e91"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/1x1-color.png",
        "sha256": "66edfa9e2e4f7039ee3ab61c545ad7be5100b7076f1d7d0c5f5db2e4694be3e2"
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
          "mg-realty-reels--16x9",
          "mg-realty-reels--9x16",
          "mg-realty-reels--1x1"
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
            "paperNight": 47.84467230902778,
            "paperColor": 24.85275607638889,
            "region": {
              "left": 128,
              "top": 40,
              "width": 1683,
              "height": 1040
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 74.88102213541667,
            "paperColor": 20.500596788194443,
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
            "paperNight": 49.12847222222222,
            "paperColor": 22.76898871527778,
            "region": {
              "left": 50,
              "top": 122,
              "width": 1003,
              "height": 879
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
            "occupancy": 1.1905964803616922,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.193439695837183,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1962829113126734,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0669603489543968,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0690964057090602,
            "bad": [],
            "measured": 9
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0712324624637237,
            "bad": [],
            "measured": 9
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 13.374565972222221,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 13.429144965277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/16x9-duration-90-frame-10.png",
                "sha256": "0e0fe734b2111bf84eef16871571a9cdc39d042cbfa143dc7e617fc5da0b5521",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/16x9-duration-90-frame-89.png",
                "sha256": "57a4c1b68571e97ff35eb107f1a4972b0f5ac39056a202de4ca61fe5dabd204d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/16x9-duration-90-frame-79.png",
                "sha256": "fe211e1292d5a5280d9ae6776106e2864ac7e71b1c5ef97d49991f9bf1822134",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 13.374565972222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/16x9-duration-900-frame-13.png",
                "sha256": "8438d1cfc9e12a5f2f5ef29e86de09de23c35c55715e2c19265a87eddf802aaf",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/16x9-duration-900-frame-90.png",
                "sha256": "57a4c1b68571e97ff35eb107f1a4972b0f5ac39056a202de4ca61fe5dabd204d",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/16x9-duration-900-frame-792.png",
                "sha256": "57a4c1b68571e97ff35eb107f1a4972b0f5ac39056a202de4ca61fe5dabd204d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/16x9-duration-900-frame-899.png",
                "sha256": "57a4c1b68571e97ff35eb107f1a4972b0f5ac39056a202de4ca61fe5dabd204d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 23.37478298611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/9x16-duration-90-frame-10.png",
                "sha256": "3907ed868bbe6061ae58c301f97d56365281d9bec3597d9a48804c8f170404fb",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/9x16-duration-90-frame-89.png",
                "sha256": "54b9b81e00ffa9a8fa65ed04af0a48a5a2f4b8eb8c61d10d948236541e7a7daf",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/9x16-duration-90-frame-79.png",
                "sha256": "54b9b81e00ffa9a8fa65ed04af0a48a5a2f4b8eb8c61d10d948236541e7a7daf",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 23.238389756944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/9x16-duration-900-frame-13.png",
                "sha256": "52aa7df15a6c99fb0ec9ca2811ce6df684c71a15f3097472d985ab0950ac92cb",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/9x16-duration-900-frame-90.png",
                "sha256": "54b9b81e00ffa9a8fa65ed04af0a48a5a2f4b8eb8c61d10d948236541e7a7daf",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/9x16-duration-900-frame-792.png",
                "sha256": "54b9b81e00ffa9a8fa65ed04af0a48a5a2f4b8eb8c61d10d948236541e7a7daf",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/9x16-duration-900-frame-899.png",
                "sha256": "54b9b81e00ffa9a8fa65ed04af0a48a5a2f4b8eb8c61d10d948236541e7a7daf",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 13.663736979166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/1x1-duration-90-frame-10.png",
                "sha256": "4a9e09cd8d9e65fb3b3d7c66decfb6c5d5b6e68fd1522d89c147e19f9f92872b",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/1x1-duration-90-frame-89.png",
                "sha256": "6ebe9c398028a1caae1e701dce0b458baf9c87646806d917e9a307cab656ce31",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/1x1-duration-90-frame-79.png",
                "sha256": "9a98c40c852b798972db081965999f39d354729262c5f9be854cd3c6913f397f",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 13.585828993055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/1x1-duration-900-frame-13.png",
                "sha256": "1cbce09a4034b11d9ee11ea8d5e7ccf280aaa2d96521e321c400db1edd9c5e6c",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/1x1-duration-900-frame-90.png",
                "sha256": "9a98c40c852b798972db081965999f39d354729262c5f9be854cd3c6913f397f",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/1x1-duration-900-frame-792.png",
                "sha256": "9a98c40c852b798972db081965999f39d354729262c5f9be854cd3c6913f397f",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind-s0/mg-realty-reels/1x1-duration-900-frame-899.png",
                "sha256": "6ebe9c398028a1caae1e701dce0b458baf9c87646806d917e9a307cab656ce31",
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
        "note": "Stacked listing facts beside a dusk-house story card with a booking button; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 22,
        "compared": 22,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "58ae065936dac79ccf583c8aeb8c6ab68b6de894233666913765f16ffa771d04",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.078Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-reels/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-reels/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-reels/16x9/detail.mp4",
      "bg": "#1c1433",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "297b778fc6b607ed2c4c6ed9bd176bc62bbe8e54ed4fbe9c9660578a89ec8cf4",
        "loop": "bfb45084b7b9f559f3dd2ad5e4e6b3c3a5b46d324d74490d8917db7c755477af",
        "detail": "d0758b605779eaa3f8da992e358cb56f278bcaf4c67b658bbf240eccf9f2508f"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-reels/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-reels/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-reels/9x16/detail.mp4",
      "bg": "#1d1333",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7fbda7d42841dc6262763189d060a52a08e902dc7abdda6124d2762920ffa7b8",
        "loop": "a0f4baeb3a54977d2ae759aed9f2244100d9e149ea7caa29c2247b287dbdd8d0",
        "detail": "ded94dbfcd47032b448c8d89012c7d3098d8185bbe601e015420e2647f002bf7"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-realty-reels/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-realty-reels/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-realty-reels/1x1/detail.mp4",
      "bg": "#1c1433",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7d079c7677de377c7f38c9c46bc5606528edddac4bb4ab346bf1e718c884bcf3",
        "loop": "d9a429bcf3d2c79d2ce0294535f008ba6b8f2fc0e68cefde72672a383ebfc601",
        "detail": "642443e344689e0a15427917a4adcb2bfe39ad6bc5d8cea43391fcc0440f5d64"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/58ae065936dac79ccf583c8aeb8c6ab68b6de894233666913765f16ffa771d04/index.mjs",
    "sha256": "58ae065936dac79ccf583c8aeb8c6ab68b6de894233666913765f16ffa771d04",
    "bytes": 177082,
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
    "at": "2026-10-09T07:07:27.801Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
