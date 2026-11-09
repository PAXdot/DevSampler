// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "audiogram-wave-captions"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "audiogram-wave-captions",
    "podcast",
    "audiogram",
    "waveform",
    "captions"
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
      "in": 132,
      "out": 0
    },
    "markers": {
      "settled": 132
    },
    "beats": [
      0,
      33,
      66,
      99,
      132
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
      "key": "show",
      "type": "text",
      "maxChars": 22,
      "role": "label"
    },
    {
      "key": "title",
      "type": "text",
      "maxChars": 34,
      "role": "headline"
    },
    {
      "key": "guest",
      "type": "text",
      "maxChars": 40,
      "role": "caption"
    },
    {
      "key": "quote",
      "type": "text",
      "maxChars": 64,
      "role": "body"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.heading",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "audiogram-wave-captions",
      "prop": "transform",
      "from": "enter",
      "settledBy": 132,
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
    "ink": "#F5EFE6",
    "accent": "#FF7A45",
    "secondary": "#22B8A4",
    "paper": "#0C2629",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "show": "Slow Signal",
    "title": "Rooms that remember",
    "guest": "with Ines Calder, sound artist",
    "quote": "Every room keeps a little of the sound we leave in it."
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
      "brand": "fonts.heading"
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
      "key": "show",
      "label": "Show",
      "type": "text",
      "max": 22,
      "role": "label"
    },
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 34,
      "role": "headline"
    },
    {
      "key": "guest",
      "label": "Guest",
      "type": "text",
      "max": 40,
      "role": "caption"
    },
    {
      "key": "quote",
      "label": "Quote",
      "type": "text",
      "max": 64,
      "role": "body"
    }
  ],
  "name": "Podcast Audiogram",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-audio-audiogram",
    "bundleSha256": "67aeba8f924ad7540186a1bbc3a50dcbeede81c5a2531919d0534c59e4c41b05",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:05:47.689Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/16x9-paper.png",
        "sha256": "b66f0ceee78cb61fc958fc21fc81cc27e0517943fffd91aefa621331bc198dd4"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/16x9-night.png",
        "sha256": "3fde47af6b9a391081b6a84c21abc0b65f4ae6af3d208c1aa8ac0fb440dd8698"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/16x9-color.png",
        "sha256": "51cae62a9d9ead61cdbb69ebb2e1e9b070c8bb3307785594253304b72fe321e5"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/9x16-paper.png",
        "sha256": "75f55dee64d42f4798d7b32b07757e4052fc4898c7b72b4229fc82c50c9a1125"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/9x16-night.png",
        "sha256": "3590401ede83d7d7d4b66f5aa5c18e19c92eeebe424f36c97918097361b8c4ee"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/9x16-color.png",
        "sha256": "c81b92f86342044094cc5db6968716199d240e04a65802fde4232d92ae01657b"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/1x1-paper.png",
        "sha256": "a2a1eaefcfa4dbb0c4a8c2bdc9af1d3646017211761f18e6b9c53d141d8d6a1e"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/1x1-night.png",
        "sha256": "d06b155a626e947e980056a93b3f829b7927cf4e6197caf0bcd25b4038da604b"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/1x1-color.png",
        "sha256": "10be41f2b4dc4cb5876392ca4ddc791882a50b4fc70f8daf50149678048b6369"
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
          "mg-audio-audiogram--16x9",
          "mg-audio-audiogram--9x16",
          "mg-audio-audiogram--1x1"
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
            "paperNight": 36.22620985243056,
            "paperColor": 12.170084635416666,
            "region": {
              "left": 108,
              "top": 78,
              "width": 1659,
              "height": 925
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 55.923502604166664,
            "paperColor": 18.53103298611111,
            "region": {
              "left": 86,
              "top": 137,
              "width": 908,
              "height": 1645
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 42.59483506944444,
            "paperColor": 20.24810112847222,
            "region": {
              "left": 50,
              "top": 87,
              "width": 955,
              "height": 791
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
            "occupancy": 1.0488286991108173,
            "bad": [],
            "measured": 15
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0488286991108173,
            "bad": [],
            "measured": 15
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0488286991108173,
            "bad": [],
            "measured": 15
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0208647180580053,
            "bad": [],
            "measured": 15
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0208647180580053,
            "bad": [],
            "measured": 15
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0208647180580053,
            "bad": [],
            "measured": 15
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9178543531038389,
            "bad": [],
            "measured": 15
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9178543531038389,
            "bad": [],
            "measured": 15
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9178543531038389,
            "bad": [],
            "measured": 15
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.079644097222222,
        "frames": [
          19,
          132,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 4.276692708333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/16x9-duration-90-frame-10.png",
                "sha256": "3358fe588fa22e12ea691652eb137aea4b85962a5d19a0559d6d07ae7b9b2d12",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/16x9-duration-90-frame-89.png",
                "sha256": "de1250111203630f34010ba830c71f69e839e86d152166a6ee18f9e259097927",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/16x9-duration-90-frame-79.png",
                "sha256": "de1250111203630f34010ba830c71f69e839e86d152166a6ee18f9e259097927",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 4.079644097222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/16x9-duration-900-frame-19.png",
                "sha256": "75d39b2e285889ca44fecb7ea2e3662c411d47f296154026dbad4917aa61a26f",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/16x9-duration-900-frame-132.png",
                "sha256": "de1250111203630f34010ba830c71f69e839e86d152166a6ee18f9e259097927",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/16x9-duration-900-frame-792.png",
                "sha256": "de1250111203630f34010ba830c71f69e839e86d152166a6ee18f9e259097927",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/16x9-duration-900-frame-899.png",
                "sha256": "de1250111203630f34010ba830c71f69e839e86d152166a6ee18f9e259097927",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 8.085286458333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/9x16-duration-90-frame-10.png",
                "sha256": "1e7d30d1b03d9e5e234bc1d88f03784eea53fe206c81da0076198a5483e19d4f",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/9x16-duration-90-frame-89.png",
                "sha256": "eaf0568c797786c54b0904f70506dcc713c9e172312b0dc7b4e012da91a6ab44",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/9x16-duration-90-frame-79.png",
                "sha256": "eaf0568c797786c54b0904f70506dcc713c9e172312b0dc7b4e012da91a6ab44",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 7.801866319444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/9x16-duration-900-frame-19.png",
                "sha256": "2fe714b90e7bc8befff5299ace859877173f9c36a6510c8cfccde8eef767cf35",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/9x16-duration-900-frame-132.png",
                "sha256": "eaf0568c797786c54b0904f70506dcc713c9e172312b0dc7b4e012da91a6ab44",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/9x16-duration-900-frame-792.png",
                "sha256": "eaf0568c797786c54b0904f70506dcc713c9e172312b0dc7b4e012da91a6ab44",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/9x16-duration-900-frame-899.png",
                "sha256": "eaf0568c797786c54b0904f70506dcc713c9e172312b0dc7b4e012da91a6ab44",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 5.323676215277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/1x1-duration-90-frame-10.png",
                "sha256": "311e907b32a31ecfb2a4e4758ceb7adf145a137b62fe1ecaacc3e97530a6c0fd",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/1x1-duration-90-frame-89.png",
                "sha256": "ca0c1346c8d9ba6e2712d85d382cab096c338d4662941f4dfc382be27f3cf2a4",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/1x1-duration-90-frame-79.png",
                "sha256": "ca0c1346c8d9ba6e2712d85d382cab096c338d4662941f4dfc382be27f3cf2a4",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 5.178602430555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 19,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/1x1-duration-900-frame-19.png",
                "sha256": "ec0c7dca4eb27c32bc462796702947b1eb25f08a3c45bbfde6541f73aa582314",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/1x1-duration-900-frame-132.png",
                "sha256": "ca0c1346c8d9ba6e2712d85d382cab096c338d4662941f4dfc382be27f3cf2a4",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/1x1-duration-900-frame-792.png",
                "sha256": "ca0c1346c8d9ba6e2712d85d382cab096c338d4662941f4dfc382be27f3cf2a4",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-audiogram/1x1-duration-900-frame-899.png",
                "sha256": "ca0c1346c8d9ba6e2712d85d382cab096c338d4662941f4dfc382be27f3cf2a4",
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
        "note": "Podcast audiogram: cover art, waveform scrubber and a word-lit quote; rebrands recolor cover and wave."
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
      "bundleSha256": "67aeba8f924ad7540186a1bbc3a50dcbeede81c5a2531919d0534c59e4c41b05",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.081Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-audiogram/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-audiogram/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-audiogram/16x9/detail.mp4",
      "bg": "#0d2a2c",
      "posterFrame": 132,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9ccad960695dd1457b3e111c1370761b8ec4818a6a00909acaff20fc43243a65",
        "loop": "f56706db3f97c768d0b9083fc4c96cf0d31f77167ffaad0af3676fdad33273fd",
        "detail": "846c88c03fb85ae117032277990ab9b6567f6ccde923ae72a9bd2a19cef80e2a"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-audiogram/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-audiogram/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-audiogram/9x16/detail.mp4",
      "bg": "#0d2a2c",
      "posterFrame": 132,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c5e0409501c90457d888f25406f631420f3a2d3f6e781eca4b4b1bf2efdeb23b",
        "loop": "ce28d81a1c1a8ca6df0fddb577d628ca0bedc3e564b512e10b623a4f0e4f9b75",
        "detail": "18b0fc6d5c58279c56f2ab8df4688598c7c7aab7304ba936624c8a2b19229a1d"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-audiogram/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-audiogram/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-audiogram/1x1/detail.mp4",
      "bg": "#0d2a2c",
      "posterFrame": 132,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9673afed2449d1ab3365d5b74b19ba32260aa09b927f7a3633f930e922e94999",
        "loop": "88d111c7b0094975af1d5c893e0750e972fc8b1e9adf3758c2bede98a41a0a2e",
        "detail": "7a48503ef88d9832c0441c4ff9f87d0fe8e8b54c4789375a4ceea433dae7f473"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/67aeba8f924ad7540186a1bbc3a50dcbeede81c5a2531919d0534c59e4c41b05/index.mjs",
    "sha256": "67aeba8f924ad7540186a1bbc3a50dcbeede81c5a2531919d0534c59e4c41b05",
    "bytes": 245247,
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
    "at": "2026-10-09T07:08:44.147Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
