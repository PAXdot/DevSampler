// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "process/motion-gallery",
  "job": "process",
  "language": "editorial",
  "mechanic": [
    "accordion-module-expand"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "process",
    "accordion-module-expand",
    "course",
    "syllabus",
    "modules",
    "education"
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
      "in": 102,
      "out": 0
    },
    "markers": {
      "settled": 102
    },
    "beats": [
      0,
      26,
      51,
      77,
      102
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
      "key": "title",
      "type": "text",
      "maxChars": 52,
      "role": "headline"
    },
    {
      "key": "kicker",
      "type": "text",
      "maxChars": 28,
      "role": "kicker"
    },
    {
      "key": "module",
      "type": "text",
      "maxChars": 24,
      "role": "label"
    },
    {
      "key": "brand",
      "type": "text",
      "maxChars": 18,
      "role": "label"
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
      "target": "accordion-module-expand",
      "prop": "transform",
      "from": "enter",
      "settledBy": 102,
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
    "ink": "#15172A",
    "accent": "#2F5BFF",
    "secondary": "#E0607E",
    "paper": "#F6F2E9",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "title": "Product design, from first sketch to shipped.",
    "kicker": "Online course · 6 weeks",
    "module": "Sketching ideas fast",
    "brand": "Brightwell"
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
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 52,
      "role": "headline"
    },
    {
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 28,
      "role": "kicker"
    },
    {
      "key": "module",
      "label": "Module",
      "type": "text",
      "max": 24,
      "role": "label"
    },
    {
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 18,
      "role": "label"
    }
  ],
  "name": "Course Syllabus Accordion",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-edu-curriculum",
    "bundleSha256": "a0699608ebc67a5ca3f4b7393ac750b710098104183f85e642f510736c6d693a",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:09:58.045Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/16x9-paper.png",
        "sha256": "42c09757b2eb06aef024e8394a588b891638aae8e0d1e8929d6c780e5e3d91ae"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/16x9-night.png",
        "sha256": "6c87de0b7ddc5f3fd7cd4a939c3f3aa6ed60660e16c0be43176c2f582ab664b2"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/16x9-color.png",
        "sha256": "4b182cc0b02f4d2974ce10381dcd7c32fc082cd4be9ef5e779cf23e54f1245b9"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/9x16-paper.png",
        "sha256": "ba64d389a2ce7c2801c7c9cbc3ee9b5fdace5c07b547aad10722f501fc4c0b67"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/9x16-night.png",
        "sha256": "510e5b34a7c2c8d27af600a08a4feb9ed77e3af380df41d068d6feee46fe207f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/9x16-color.png",
        "sha256": "961e7e5c9d3ae7f4699239e4b24cf06cc812c6f0e1000050ce36e3a9bba3dd88"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/1x1-paper.png",
        "sha256": "010cc6e515c5491b12556d46e66e65dc7acd8c94dd3bf8eeeedb2b96f3a00c9b"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/1x1-night.png",
        "sha256": "1713362b47f8d843950e87b91bdddab1ed1876aa9a8c11c74c8161c193e2a40c"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/1x1-color.png",
        "sha256": "e38c43358da9af43f612647cd3cc2a52fa28fa9914694d09fa9e13e4028ddd18"
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
          "mg-edu-curriculum--16x9",
          "mg-edu-curriculum--9x16",
          "mg-edu-curriculum--1x1"
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
            "paperNight": 104.36819118923611,
            "paperColor": 25.094401041666668,
            "region": {
              "left": 115,
              "top": 96,
              "width": 1704,
              "height": 918
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 112.26727973090277,
            "paperColor": 21.474500868055557,
            "region": {
              "left": 73,
              "top": 89,
              "width": 938,
              "height": 1753
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 88.66520182291667,
            "paperColor": 22.252685546875,
            "region": {
              "left": 59,
              "top": 88,
              "width": 990,
              "height": 906
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
            "occupancy": 1.0691255668934243,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0691255668934243,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0691255668934243,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0372842874289636,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1238314931167943,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1225493122917893,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0898263626438232,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0898263626438232,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0898263626438232,
            "bad": [],
            "measured": 10
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.2974175347222223,
        "frames": [
          15,
          102,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 3.3577473958333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/16x9-duration-90-frame-10.png",
                "sha256": "66824678145014ca0954cf76905bc936379736390fcd0d724bd7c63d06bd3389",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/16x9-duration-90-frame-89.png",
                "sha256": "7d7acbc7f4fec16b75f664d9a6af7c3896c8f316c6c3601f5c074837f423521c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/16x9-duration-90-frame-79.png",
                "sha256": "7d7acbc7f4fec16b75f664d9a6af7c3896c8f316c6c3601f5c074837f423521c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 3.2974175347222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/16x9-duration-900-frame-15.png",
                "sha256": "eb460ad7df1de13171fdd698b10d27e3c2bf2fc98dc6c51746ce96084b4c8d83",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/16x9-duration-900-frame-102.png",
                "sha256": "7d7acbc7f4fec16b75f664d9a6af7c3896c8f316c6c3601f5c074837f423521c",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/16x9-duration-900-frame-792.png",
                "sha256": "7d7acbc7f4fec16b75f664d9a6af7c3896c8f316c6c3601f5c074837f423521c",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/16x9-duration-900-frame-899.png",
                "sha256": "7d7acbc7f4fec16b75f664d9a6af7c3896c8f316c6c3601f5c074837f423521c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 4.533745659722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/9x16-duration-90-frame-10.png",
                "sha256": "362988c109b63094752e15968f550f7b1736cf0498fb3de923a2fbcdeac7ef51",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/9x16-duration-90-frame-89.png",
                "sha256": "d0548b42f9edb2fd2f0733c142d20b77a2865e8b1e3ae37e2e5c6905b154275a",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/9x16-duration-90-frame-79.png",
                "sha256": "d0548b42f9edb2fd2f0733c142d20b77a2865e8b1e3ae37e2e5c6905b154275a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 4.384114583333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/9x16-duration-900-frame-15.png",
                "sha256": "5eea2f7aa94465ed09662721ec7f0d6fd5e966f438392e35681dfc45d329c519",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/9x16-duration-900-frame-102.png",
                "sha256": "d0548b42f9edb2fd2f0733c142d20b77a2865e8b1e3ae37e2e5c6905b154275a",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/9x16-duration-900-frame-792.png",
                "sha256": "d0548b42f9edb2fd2f0733c142d20b77a2865e8b1e3ae37e2e5c6905b154275a",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/9x16-duration-900-frame-899.png",
                "sha256": "d0548b42f9edb2fd2f0733c142d20b77a2865e8b1e3ae37e2e5c6905b154275a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 2.7890625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/1x1-duration-90-frame-10.png",
                "sha256": "d05ebe6d4167c62e4ee0ee8b0d6b8033dc4ff497b55ce2300e64a0ea9e22654b",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/1x1-duration-90-frame-89.png",
                "sha256": "58b11d764fa195c60236a181579fd4ca0dc408d3117c2f247a0f19869bf3b8a8",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/1x1-duration-90-frame-79.png",
                "sha256": "58b11d764fa195c60236a181579fd4ca0dc408d3117c2f247a0f19869bf3b8a8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 2.6324869791666665,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/1x1-duration-900-frame-15.png",
                "sha256": "7e1c516dc2ba9bcb390f518531c787ebd12f080768e3947240c697aed3638501",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/1x1-duration-900-frame-102.png",
                "sha256": "58b11d764fa195c60236a181579fd4ca0dc408d3117c2f247a0f19869bf3b8a8",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/1x1-duration-900-frame-792.png",
                "sha256": "58b11d764fa195c60236a181579fd4ca0dc408d3117c2f247a0f19869bf3b8a8",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-edu-curriculum/1x1-duration-900-frame-899.png",
                "sha256": "58b11d764fa195c60236a181579fd4ca0dc408d3117c2f247a0f19869bf3b8a8",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "process",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Course syllabus accordion opens a module beside a serif course headline; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 21,
        "compared": 21,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "a0699608ebc67a5ca3f4b7393ac750b710098104183f85e642f510736c6d693a",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.092Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-curriculum/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-curriculum/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-curriculum/16x9/detail.mp4",
      "bg": "#e8e5de",
      "posterFrame": 102,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e201f2b007aa7a5ba76da2a96eda2f4f9323a84e6ae6a106c390bf0e9576b5c9",
        "loop": "f4b14ab8973bc9418006bd6dbaa82c7f4a3c3db00131e04a11cce74e0b3ccbaf",
        "detail": "24bf349c30682da09bcc0e87eb6c971f46df0d475d86236f98500eede7e87ffc"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-curriculum/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-curriculum/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-curriculum/9x16/detail.mp4",
      "bg": "#e8e5de",
      "posterFrame": 102,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d6ca451a98daf7ea1513ecfb2962af0fe7ab07da225e81a8954ce4d5f2015e71",
        "loop": "cb29f45b91d7eaf88c4150523c55753f0c07849b8498f6f2b86dc6c5e177d190",
        "detail": "455e4b9f7d6ae618b1716441a0ba67c6465ed975bdbe649821ae1c8085b71260"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-curriculum/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-curriculum/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-curriculum/1x1/detail.mp4",
      "bg": "#e8e5de",
      "posterFrame": 102,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "64144f0ad7920ac439025c53b3ae2d9c5ea3894dee8383154d0babddcf6bb00e",
        "loop": "d242d67a8a55f7deba336596c2b1a87e2acc3864432c9d36417030343b1b17e0",
        "detail": "20286cbc0bbdade44d85a0ddc1348e3ecb16926254b5f72d91fa046026dad484"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/a0699608ebc67a5ca3f4b7393ac750b710098104183f85e642f510736c6d693a/index.mjs",
    "sha256": "a0699608ebc67a5ca3f4b7393ac750b710098104183f85e642f510736c6d693a",
    "bytes": 287729,
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
    "at": "2026-10-09T07:16:18.450Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
