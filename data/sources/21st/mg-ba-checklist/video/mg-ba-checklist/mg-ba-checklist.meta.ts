// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "process/motion-gallery",
  "job": "process",
  "language": "editorial",
  "mechanic": [
    "checklist-strike-collapse-to-done"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "process",
    "checklist-strike-collapse-to-done",
    "before-after",
    "checklist",
    "automation"
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
      "key": "list",
      "type": "text",
      "maxChars": 18,
      "role": "kicker"
    },
    {
      "key": "done",
      "type": "text",
      "maxChars": 22,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 40,
      "role": "body"
    },
    {
      "key": "saved",
      "type": "text",
      "maxChars": 14,
      "role": "value"
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
      "target": "checklist-strike-collapse-to-done",
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
    "ink": "#1D1A12",
    "accent": "#16A34A",
    "secondary": "#F6B400",
    "paper": "#FFD84A",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "list": "This week",
    "done": "All 6 done.",
    "sub": "Lumen handled them while you slept.",
    "saved": "−3 h 40 min"
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
      "key": "list",
      "label": "List",
      "type": "text",
      "max": 18,
      "role": "kicker"
    },
    {
      "key": "done",
      "label": "Done",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 40,
      "role": "body"
    },
    {
      "key": "saved",
      "label": "Saved",
      "type": "text",
      "max": 14,
      "role": "value"
    }
  ],
  "name": "Checklist Done In One",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-ba-checklist",
    "bundleSha256": "70e9dac67b316ca00d0c913ecdd3b6f1f69f913796f12cd1a1c1ab4675849017",
    "sourceSnapshot": {
      "sha256": "1d166e47db414cd89067fecf773b7174d2603285baa8ad9fbc91d210e107086e",
      "files": 1757
    },
    "renderedAt": "2026-10-08T18:15:52.652Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/16x9-paper.png",
        "sha256": "2c891c9bd732ef624a44198dc42d46df762e1cfe319778dbfd3ec877c0120b00"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/16x9-night.png",
        "sha256": "ab53a5661b68607e8773e975fd5655a8ac7b54cca8822773c6d2aa09c33d5c9c"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/16x9-color.png",
        "sha256": "f4059aafd8b11eb6bb5f07cf693c6bb0a860791ec0cee66ed90e64a4e9830f9f"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/9x16-paper.png",
        "sha256": "8ac49c72d9df763d94a3152592b2dc6bd766742b2eb16768ed98249b5ee6eb83"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/9x16-night.png",
        "sha256": "2142454e39c2068c9e9866c771db4348a78bfed2698c614a9c32b1befe361c1c"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/9x16-color.png",
        "sha256": "ab200cfa9af1e5912e0a550708cd0db50050fe6bbc9064c0a5643b35d45e3c11"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/1x1-paper.png",
        "sha256": "d95abd3b07512cfc06cde04e5d8176ac2c8a025d082a44ae8a637c4ce017b898"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/1x1-night.png",
        "sha256": "920217a0ae6fac00c668dfb2b23ecfcbcd01a71b33d43dcab0c17f3fc0cd0b08"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/1x1-color.png",
        "sha256": "497efcd8a8d85e040dd99a4256331388fe1ea943b3b291e1f09bf4892e8e0f83"
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
          "mg-ba-checklist--16x9",
          "mg-ba-checklist--9x16",
          "mg-ba-checklist--1x1"
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
            "paperNight": 17.370279947916668,
            "paperColor": 15.359130859375,
            "region": {
              "left": 405,
              "top": 182,
              "width": 1110,
              "height": 539
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 17.274305555555557,
            "paperColor": 17.04242621527778,
            "region": {
              "left": 34,
              "top": 165,
              "width": 1012,
              "height": 1601
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 11.984483506944445,
            "paperColor": 9.921875,
            "region": {
              "left": 76,
              "top": 82,
              "width": 928,
              "height": 901
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
            "occupancy": 0.40587584377886965,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.40663449021583953,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.40891042952674905,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1052836129307693,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1066669466140369,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1073586134556705,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.013681650072009,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0159367816628253,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0159367816628253,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 15.455946180555555,
        "frames": [
          15,
          102,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 15.4228515625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/16x9-duration-90-frame-10.png",
                "sha256": "a79d343fa00de9c7dbdeadd88d433234a30ee69c39fbfbd1ae09b70a4f76f63b",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/16x9-duration-90-frame-89.png",
                "sha256": "4a1279c8e15b1c46996cc6cbade6cf94b0829e46ec5e7122ef021b3a17966e70",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/16x9-duration-90-frame-79.png",
                "sha256": "4a1279c8e15b1c46996cc6cbade6cf94b0829e46ec5e7122ef021b3a17966e70",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 15.455946180555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/16x9-duration-900-frame-15.png",
                "sha256": "7153240ed3dd9913ffe3bb91617eaa3a65ee6beb77983e1a0e12a0febfa3d272",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/16x9-duration-900-frame-102.png",
                "sha256": "0d74b9fad0e386d9995ee993c355cf03d9e4e42283892493d8fa20cf93fa2670",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/16x9-duration-900-frame-792.png",
                "sha256": "4a1279c8e15b1c46996cc6cbade6cf94b0829e46ec5e7122ef021b3a17966e70",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/16x9-duration-900-frame-899.png",
                "sha256": "4a1279c8e15b1c46996cc6cbade6cf94b0829e46ec5e7122ef021b3a17966e70",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 17.51833767361111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/9x16-duration-90-frame-10.png",
                "sha256": "5e3787f6e7be282412c5d2229c448a943530f55c36d0c167d0d89fd781bfcb31",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/9x16-duration-90-frame-89.png",
                "sha256": "d1bf3720e1e4f684b8d2cbcf1618e8e9180d2b5f8a8599b24850f9f5dc4a5dd7",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/9x16-duration-90-frame-79.png",
                "sha256": "d1bf3720e1e4f684b8d2cbcf1618e8e9180d2b5f8a8599b24850f9f5dc4a5dd7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 17.544813368055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/9x16-duration-900-frame-15.png",
                "sha256": "b0cbcdd83109473288e86e56327b3f0198bb047cf15d2c5ff2700f0f4945bbd3",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/9x16-duration-900-frame-102.png",
                "sha256": "d1bf3720e1e4f684b8d2cbcf1618e8e9180d2b5f8a8599b24850f9f5dc4a5dd7",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/9x16-duration-900-frame-792.png",
                "sha256": "d1bf3720e1e4f684b8d2cbcf1618e8e9180d2b5f8a8599b24850f9f5dc4a5dd7",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/9x16-duration-900-frame-899.png",
                "sha256": "333047e89db9d18292f74162103746d1ce8ce50acf777586c2061cb98c51fafc",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 20.12673611111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/1x1-duration-90-frame-10.png",
                "sha256": "d44ae14f5a200db7cffb1701a30c6e8111f7e454f9c69f9de21b48f8ca092e53",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/1x1-duration-90-frame-89.png",
                "sha256": "8751358b80374d72196b325c4776d58a05361175c6ae3af8202e52c683d08107",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/1x1-duration-90-frame-79.png",
                "sha256": "8751358b80374d72196b325c4776d58a05361175c6ae3af8202e52c683d08107",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 20.173502604166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/1x1-duration-900-frame-15.png",
                "sha256": "4ded86980bd41f7d2e1466e4206455e9d73ebfb475e5ab8affb983a599c80b71",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/1x1-duration-900-frame-102.png",
                "sha256": "8751358b80374d72196b325c4776d58a05361175c6ae3af8202e52c683d08107",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/1x1-duration-900-frame-792.png",
                "sha256": "8751358b80374d72196b325c4776d58a05361175c6ae3af8202e52c683d08107",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg2-s1/mg-ba-checklist/1x1-duration-900-frame-899.png",
                "sha256": "8751358b80374d72196b325c4776d58a05361175c6ae3af8202e52c683d08107",
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
        "note": "A week's checklist collapses into one done card with time saved; card text readable in every brand."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 15,
        "compared": 15,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "70e9dac67b316ca00d0c913ecdd3b6f1f69f913796f12cd1a1c1ab4675849017",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-08T19:02:07.500Z",
      "basis": "All 61 launch-video gallery prototypes go into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ba-checklist/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ba-checklist/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ba-checklist/16x9/detail.mp4",
      "bg": "#ffde6c",
      "posterFrame": 102,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f4a9d978ff14f34e27acec7535907c035c0fd5ac5b369c680142baf127a2b59b",
        "loop": "f756cf8cc8ab0731d9dfd6cdc229905301948368f1117af0258d3b48c829ee9a",
        "detail": "5f5d8ff8ee930949935e06ae13a2a9b029756e0885de1af6adcb04dce1f04ad1"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ba-checklist/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ba-checklist/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ba-checklist/9x16/detail.mp4",
      "bg": "#ffde6c",
      "posterFrame": 102,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "fbbf1ca29a75501bf5007f64984376300bfbfc3a1a19adec63b1aaf9636df201",
        "loop": "b395cf0bd83e80d789540a96ffef317f07fd8fbc96f00f952f220d0e50a9aa74",
        "detail": "ed98f6e86a380ae9b89999266c9d136ad2396e257bccaa96641dd60f1d0f1dcc"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-ba-checklist/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-ba-checklist/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-ba-checklist/1x1/detail.mp4",
      "bg": "#ffde6c",
      "posterFrame": 102,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "bc0e4d4b1e26b3c73677163c69561a053ab77f589c497308cb1d8db3b8b0e5a5",
        "loop": "030353aa3d1a8a20f2845f9b1197da4eb120af1d4c042e0ef4320204e8f21c0d",
        "detail": "04bb006e6bd77bcad7b66164b0d39171263608f7398cb9fd1856ee008a22b468"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/70e9dac67b316ca00d0c913ecdd3b6f1f69f913796f12cd1a1c1ab4675849017/index.mjs",
    "sha256": "70e9dac67b316ca00d0c913ecdd3b6f1f69f913796f12cd1a1c1ab4675849017",
    "bytes": 172574,
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
    "at": "2026-10-08T19:29:10.213Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
