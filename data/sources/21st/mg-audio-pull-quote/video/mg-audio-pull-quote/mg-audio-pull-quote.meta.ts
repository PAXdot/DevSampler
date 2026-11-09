// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "testimonials/motion-gallery",
  "job": "testimonials",
  "language": "editorial",
  "mechanic": [
    "quote-lines-rise-underline"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "testimonials",
    "quote-lines-rise-underline",
    "podcast",
    "quote",
    "guest",
    "editorial"
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
      "key": "quote",
      "type": "text",
      "maxChars": 70,
      "role": "headline"
    },
    {
      "key": "name",
      "type": "text",
      "maxChars": 22,
      "role": "name"
    },
    {
      "key": "role",
      "type": "text",
      "maxChars": 30,
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
      "target": "quote-lines-rise-underline",
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
    "ink": "#F3E6D3",
    "accent": "#D9A35B",
    "secondary": "#5D8F77",
    "paper": "#34121A",
    "displayFont": "Instrument Serif",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "quote": "We don't remember rooms. We remember how they sounded.",
    "name": "Ines Calder",
    "role": "sound artist · at 23:14",
    "cta": "Hear the full episode"
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
      "key": "quote",
      "label": "Quote",
      "type": "text",
      "max": 70,
      "role": "headline"
    },
    {
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 22,
      "role": "name"
    },
    {
      "key": "role",
      "label": "Role",
      "type": "text",
      "max": 30,
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
  "name": "Episode Pull Quote",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-audio-pull-quote",
    "bundleSha256": "078f8c5bf9acf1395de1fe501b4ed98a1f3edf064810d6f10b91dcb22d968a9a",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:06:05.750Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/16x9-paper.png",
        "sha256": "425ec5b54a6f98d673c0e1bc37df53506e09fd32459f4b95ed3993ff1e16763a"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/16x9-night.png",
        "sha256": "959ed3566b5a1271348947ed663a218c8ce925e4ddb54b35fb15b87beef9dcb2"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/16x9-color.png",
        "sha256": "ff5453efefb10d83af0c91fd05b3d38486e7760e06238a6bf06551bf88e29c70"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/9x16-paper.png",
        "sha256": "30ce3aed53bd2eebd712568b5027d31672ac05343f1eb9b881d514913671b069"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/9x16-night.png",
        "sha256": "fc3e546d53460a16707316a75f0bc50c9fd18c48c14c089c8fc64decc9a5aec4"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/9x16-color.png",
        "sha256": "dd3f311b82e7f33036a5d905fd23968c0fa0fbc565fc59df2ae9adf6ba1407a0"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/1x1-paper.png",
        "sha256": "98bc6a8ad6b36793179ea4f47f3be7c486dc0aca3f6e4778f4a6c206210b3aaa"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/1x1-night.png",
        "sha256": "bf228f4e5839f9c2d0e860b5ac95cc00e434a3feb2b80348e9315f29f4bed3b6"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/1x1-color.png",
        "sha256": "22e4c55cda78d41e4cb7d7fc3ccc7b46a9809e81b6700244273185d988f1c306"
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
          "mg-audio-pull-quote--16x9",
          "mg-audio-pull-quote--9x16",
          "mg-audio-pull-quote--1x1"
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
            "paperNight": 62.57367621527778,
            "paperColor": 20.33010525173611,
            "region": {
              "left": 94,
              "top": 71,
              "width": 1673,
              "height": 828
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 82.08270941840277,
            "paperColor": 29.041015625,
            "region": {
              "left": 43,
              "top": 118,
              "width": 951,
              "height": 1668
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 69.47124565972223,
            "paperColor": 21.06985134548611,
            "region": {
              "left": 35,
              "top": 66,
              "width": 970,
              "height": 938
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
            "occupancy": 0.9467661485890655,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9229979607583776,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9326184177374656,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0841590687200808,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0385582666708661,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0522385072856306,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1055248002264466,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0667744464040763,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0815907581596884,
            "bad": [],
            "measured": 12
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 6.511176215277778,
        "frames": [
          16,
          108,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 6.477647569444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/16x9-duration-90-frame-10.png",
                "sha256": "86504f301e6820baf8fe86b78a6792c784760d81a2118d2d1080eb6df61496d0",
                "alphaMass": 580117
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/16x9-duration-90-frame-89.png",
                "sha256": "0f87f48959c2c615d26363a417b4c9b9efae3ec34a8f500c7ea22d06d4233232",
                "alphaMass": 580338
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/16x9-duration-90-frame-79.png",
                "sha256": "0f87f48959c2c615d26363a417b4c9b9efae3ec34a8f500c7ea22d06d4233232",
                "alphaMass": 580338
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 6.511176215277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/16x9-duration-900-frame-16.png",
                "sha256": "6d4dcf81cf51bdf059b018810fcdfe6a349aa01856567ab926e9f39a17599468",
                "alphaMass": 580138
              },
              {
                "frame": 108,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/16x9-duration-900-frame-108.png",
                "sha256": "0f87f48959c2c615d26363a417b4c9b9efae3ec34a8f500c7ea22d06d4233232",
                "alphaMass": 580338
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/16x9-duration-900-frame-792.png",
                "sha256": "0f87f48959c2c615d26363a417b4c9b9efae3ec34a8f500c7ea22d06d4233232",
                "alphaMass": 580338
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/16x9-duration-900-frame-899.png",
                "sha256": "0f87f48959c2c615d26363a417b4c9b9efae3ec34a8f500c7ea22d06d4233232",
                "alphaMass": 580338
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 10.242838541666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/9x16-duration-90-frame-10.png",
                "sha256": "c269bdaf63f7516cb135923cd709f1fef5e5d933548c065bf272f596f9291c12",
                "alphaMass": 580288
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/9x16-duration-90-frame-89.png",
                "sha256": "86262e63d1f44c9bb08dae9218e191a4af6920b7b5cc6882a59b017685d9314e",
                "alphaMass": 580462
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/9x16-duration-90-frame-79.png",
                "sha256": "86262e63d1f44c9bb08dae9218e191a4af6920b7b5cc6882a59b017685d9314e",
                "alphaMass": 580462
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 10.26953125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/9x16-duration-900-frame-16.png",
                "sha256": "5bbb879d92e0520843274653b98f63d8271a22d059acf413dc7f3428261cb099",
                "alphaMass": 580307
              },
              {
                "frame": 108,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/9x16-duration-900-frame-108.png",
                "sha256": "86262e63d1f44c9bb08dae9218e191a4af6920b7b5cc6882a59b017685d9314e",
                "alphaMass": 580462
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/9x16-duration-900-frame-792.png",
                "sha256": "86262e63d1f44c9bb08dae9218e191a4af6920b7b5cc6882a59b017685d9314e",
                "alphaMass": 580462
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/9x16-duration-900-frame-899.png",
                "sha256": "86262e63d1f44c9bb08dae9218e191a4af6920b7b5cc6882a59b017685d9314e",
                "alphaMass": 580462
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 7.861328125,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/1x1-duration-90-frame-10.png",
                "sha256": "61353c51bafe9331acf8025f7e5590d8a2bb92d0ecedc1c44a641f11de635d10",
                "alphaMass": 579750
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/1x1-duration-90-frame-89.png",
                "sha256": "722049d0f2a6fea4f92c6a068cd917c0fc4f22728881e788d285e569949f98af",
                "alphaMass": 580208
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/1x1-duration-90-frame-79.png",
                "sha256": "722049d0f2a6fea4f92c6a068cd917c0fc4f22728881e788d285e569949f98af",
                "alphaMass": 580208
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 7.884114583333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/1x1-duration-900-frame-16.png",
                "sha256": "8d30bec3721982d1959e91ebc66b02e8fe79f79ee1868b44865b3c46e889fff3",
                "alphaMass": 579767
              },
              {
                "frame": 108,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/1x1-duration-900-frame-108.png",
                "sha256": "722049d0f2a6fea4f92c6a068cd917c0fc4f22728881e788d285e569949f98af",
                "alphaMass": 580208
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/1x1-duration-900-frame-792.png",
                "sha256": "722049d0f2a6fea4f92c6a068cd917c0fc4f22728881e788d285e569949f98af",
                "alphaMass": 580208
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-audio-pull-quote/1x1-duration-900-frame-899.png",
                "sha256": "722049d0f2a6fea4f92c6a068cd917c0fc4f22728881e788d285e569949f98af",
                "alphaMass": 580208
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "testimonials",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Serif episode pull quote with an underlined last word and a play card; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 14,
        "compared": 14,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "078f8c5bf9acf1395de1fe501b4ed98a1f3edf064810d6f10b91dcb22d968a9a",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.081Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-pull-quote/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-pull-quote/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-pull-quote/16x9/detail.mp4",
      "bg": "#3d1d23",
      "posterFrame": 108,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7741234e69780d0dba8304fbc22ac38dae4dbfb9397b5c6ba23df806474aff35",
        "loop": "81423925ba11d7a230db61c96ad510f1fbe25f7f630dcbeb7e5a5d63665b5dea",
        "detail": "6180bbed45bb8bf0e405033a5344817820695ce5c6d5ea2f656cfedf3c747c15"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-pull-quote/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-pull-quote/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-pull-quote/9x16/detail.mp4",
      "bg": "#3e1f24",
      "posterFrame": 108,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "55cec319383a971192d1fbced3aa9ec906a50b348f2b4a15db9f559302a2af2e",
        "loop": "f1fcefdd595bee4cc688b89b9db66a73c36566cdec01c74045170fed9287484c",
        "detail": "bcd60c4aea989cadcb8533c171bb56cf0d5fa584cc2c87a0fd0d877c3410364e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-pull-quote/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-pull-quote/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-pull-quote/1x1/detail.mp4",
      "bg": "#412125",
      "posterFrame": 108,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "ac64018681f87905129f8fb9fb565e35a84923524898fdb80c240910abb8c472",
        "loop": "0298b2fcf978e1586e5530bc71e3399ada454a735bd775dbc9e225eef87517ac",
        "detail": "dcde530e86753ea9bce016768d5c40051c2b46856386f13fa62e2d6d976c8a96"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/078f8c5bf9acf1395de1fe501b4ed98a1f3edf064810d6f10b91dcb22d968a9a/index.mjs",
    "sha256": "078f8c5bf9acf1395de1fe501b4ed98a1f3edf064810d6f10b91dcb22d968a9a",
    "bytes": 245249,
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
    "at": "2026-10-09T07:09:12.519Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
