// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "gallery/motion-gallery",
  "job": "gallery",
  "language": "editorial",
  "mechanic": [
    "trifold-panels-unfold"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "gallery",
    "trifold-panels-unfold",
    "restaurant",
    "menu",
    "unfold",
    "print"
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
      "in": 108,
      "out": 0
    },
    "markers": {
      "settled": 108
    },
    "beats": [
      0,
      27,
      54,
      81,
      108
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
      "maxChars": 26,
      "role": "headline"
    },
    {
      "key": "name",
      "type": "text",
      "maxChars": 22,
      "role": "label"
    },
    {
      "key": "note",
      "type": "text",
      "maxChars": 16,
      "role": "caption"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 26,
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
      "target": "trifold-panels-unfold",
      "prop": "transform",
      "from": "enter",
      "settledBy": 108,
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
    "ink": "#F6EAD4",
    "accent": "#B4532D",
    "secondary": "#C0392B",
    "paper": "#2A1912",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "title": "The autumn menu",
    "name": "fennel. trattoria",
    "note": "Marta's pick",
    "cta": "Book a table tonight"
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
      "max": 26,
      "role": "headline"
    },
    {
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 22,
      "role": "label"
    },
    {
      "key": "note",
      "label": "Note",
      "type": "text",
      "max": 16,
      "role": "caption"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 26,
      "role": "cta"
    }
  ],
  "name": "Trifold Menu Unfold",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-food-menu-unfold",
    "bundleSha256": "c9ec6bac10123f2f3ad1d56b7446019c555e807330eaa03aef320274fa01fadb",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:08:44.779Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/16x9-paper.png",
        "sha256": "4a4c2a89e3bc07cb93f4129f2d97eded8168735ab33df97db4c93ab786e78a11"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/16x9-night.png",
        "sha256": "a6d51ba2b7934b0a849ece2970b9ac534c314ef1750bc2c879f4b1d35e445f5d"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/16x9-color.png",
        "sha256": "ac08443a64e7f48a2bde57faf5d87de895ed2b504c2d1a0720d23ec20df65007"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/9x16-paper.png",
        "sha256": "9d5a1527d1e78b3437e94ebbddd51ccf6a5944d43f3e06074fccbb248c8fdeb2"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/9x16-night.png",
        "sha256": "bcfb757efba765566f61d4a4a75150eb8b8e414c874a911f350d2e8b954bf1b8"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/9x16-color.png",
        "sha256": "db545d06c427987a643ee3728f2e8cbc78aaa086283007dc3dee380cd85e284d"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/1x1-paper.png",
        "sha256": "b73f393c6cf8c71dbe1fd9dc6a18c34d103408d4b7ee62ec11894e497a3251b6"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/1x1-night.png",
        "sha256": "09de98d2f9f585e26e419455dbe17b2e5899d8497956ee056316a63c93f5681a"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/1x1-color.png",
        "sha256": "0fc3fdd5e3d8dfa784a9f460754f7cc123a1641ca8fd6cffc7940201c2bd0b41"
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
          "mg-food-menu-unfold--16x9",
          "mg-food-menu-unfold--9x16",
          "mg-food-menu-unfold--1x1"
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
            "paperNight": 106.13365342881944,
            "paperColor": 29.675889756944443,
            "region": {
              "left": 351,
              "top": 45,
              "width": 1219,
              "height": 943
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 79.10970052083333,
            "paperColor": 22.82449001736111,
            "region": {
              "left": 0,
              "top": 174,
              "width": 1080,
              "height": 1581
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 93.83854166666667,
            "paperColor": 26.186170789930557,
            "region": {
              "left": 21,
              "top": 57,
              "width": 1038,
              "height": 958
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
            "occupancy": 0.7856549335912351,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7856549335912351,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7848217894410853,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1670032596371884,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1670032596371884,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1662651171579745,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2082499323460525,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2082499323460525,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.205727489898566,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 48.188259548611114,
        "frames": [
          16,
          108,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 48.21104600694444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/16x9-duration-90-frame-10.png",
                "sha256": "094d8deae231f56b6608da3141236bd1b71e3e22beaa446d2d3aec14d7d47c39",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/16x9-duration-90-frame-89.png",
                "sha256": "f79443fce3f7010514b8b0747038e4a6f67fb99890a0f91ef260db99e31b9bd0",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/16x9-duration-90-frame-79.png",
                "sha256": "f79443fce3f7010514b8b0747038e4a6f67fb99890a0f91ef260db99e31b9bd0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 48.188259548611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/16x9-duration-900-frame-16.png",
                "sha256": "cce8085add0fd22409c80ed39e04c8485609ed142dd05f69dd961489b156e3b7",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/16x9-duration-900-frame-108.png",
                "sha256": "f79443fce3f7010514b8b0747038e4a6f67fb99890a0f91ef260db99e31b9bd0",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/16x9-duration-900-frame-792.png",
                "sha256": "f79443fce3f7010514b8b0747038e4a6f67fb99890a0f91ef260db99e31b9bd0",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/16x9-duration-900-frame-899.png",
                "sha256": "f79443fce3f7010514b8b0747038e4a6f67fb99890a0f91ef260db99e31b9bd0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 42.65223524305556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/9x16-duration-90-frame-10.png",
                "sha256": "973ad5e848b85bc5385b83973387a092ac0cecf6fb9bc76ae5f24fb82f09f9d9",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/9x16-duration-90-frame-89.png",
                "sha256": "200fc84dc4b19e84e8ad476baf56bf4d1203505c1b957d8d3202d43303b3d48d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/9x16-duration-90-frame-79.png",
                "sha256": "200fc84dc4b19e84e8ad476baf56bf4d1203505c1b957d8d3202d43303b3d48d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 42.472005208333336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/9x16-duration-900-frame-16.png",
                "sha256": "64763c3efd0a3d7e8773b395a42c9a0768d6bf8363a451c921278bd48b96508f",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/9x16-duration-900-frame-108.png",
                "sha256": "200fc84dc4b19e84e8ad476baf56bf4d1203505c1b957d8d3202d43303b3d48d",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/9x16-duration-900-frame-792.png",
                "sha256": "200fc84dc4b19e84e8ad476baf56bf4d1203505c1b957d8d3202d43303b3d48d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/9x16-duration-900-frame-899.png",
                "sha256": "200fc84dc4b19e84e8ad476baf56bf4d1203505c1b957d8d3202d43303b3d48d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 62.66297743055556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/1x1-duration-90-frame-10.png",
                "sha256": "d5e2a002d3d48ffbc0e6770388f060f88c8625ac5faa0dd68b8a901b9513d805",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/1x1-duration-90-frame-89.png",
                "sha256": "6f109bb54f74e71c02522df8f7b202123b47da3bcbc82057525384dedc3003c2",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/1x1-duration-90-frame-79.png",
                "sha256": "6f109bb54f74e71c02522df8f7b202123b47da3bcbc82057525384dedc3003c2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 62.566189236111114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/1x1-duration-900-frame-16.png",
                "sha256": "369974fbc0dac06c4a5834c061bdb8e8b97005fde0a8b9466320419de5b5d128",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/1x1-duration-900-frame-108.png",
                "sha256": "6f109bb54f74e71c02522df8f7b202123b47da3bcbc82057525384dedc3003c2",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/1x1-duration-900-frame-792.png",
                "sha256": "6f109bb54f74e71c02522df8f7b202123b47da3bcbc82057525384dedc3003c2",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-food-menu-unfold/1x1-duration-900-frame-899.png",
                "sha256": "6f109bb54f74e71c02522df8f7b202123b47da3bcbc82057525384dedc3003c2",
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
        "note": "A trifold restaurant menu unfolds with a circled pick and serif title; rebrands recolor the menu."
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
      "bundleSha256": "c9ec6bac10123f2f3ad1d56b7446019c555e807330eaa03aef320274fa01fadb",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.088Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-menu-unfold/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-menu-unfold/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-menu-unfold/16x9/detail.mp4",
      "bg": "#382c25",
      "posterFrame": 108,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c7950d1a8952b76f5b424f5a8e17fc751b82aaa2305293b5fd2143b0e9b72f1b",
        "loop": "efb53f4db1203625a1a1e5335c14706940f76d1e7b7c90c795cb8f9012b1fbaf",
        "detail": "7d65862a0ac46a3344f4a37ab136ddbd80a4380c9c5f2f10462053690700631b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-menu-unfold/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-menu-unfold/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-menu-unfold/9x16/detail.mp4",
      "bg": "#382c25",
      "posterFrame": 108,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0c393b9c03a9ce81a135989992e5e4271d92328b9a522ef9b7a460ea0a88ae8e",
        "loop": "8dfa2ca2f85f9a63008a08bc2891d1e31080dd7a5fd7e1a08aecf5a9a46c63e5",
        "detail": "8c6d1558c7a2679c2467e2254f46feaddcce0b247af9dbed83a6e618b72fbb70"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-menu-unfold/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-menu-unfold/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-menu-unfold/1x1/detail.mp4",
      "bg": "#382c25",
      "posterFrame": 108,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c0170f09d6a42dcbe80dc0c707ab620a69829dfbbb06276b09bbcb86fba86c15",
        "loop": "c2d3bbb0fc7206d04ccda8893ffcbbacc1663e5541ba73b1bf5a4d815906edf9",
        "detail": "3d355e6ba47de9f41b22babce746c335ce70c41ee4f4ef0357145b7984f04c1e"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c9ec6bac10123f2f3ad1d56b7446019c555e807330eaa03aef320274fa01fadb/index.mjs",
    "sha256": "c9ec6bac10123f2f3ad1d56b7446019c555e807330eaa03aef320274fa01fadb",
    "bytes": 204089,
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
    "at": "2026-10-09T07:13:50.481Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
