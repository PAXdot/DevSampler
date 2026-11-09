// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "editorial",
  "mechanic": [
    "words-land-on-waveform-peaks"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "words-land-on-waveform-peaks",
    "beat-sync",
    "kinetic-type",
    "audio"
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
      "key": "headline",
      "type": "text",
      "maxChars": 30,
      "role": "headline"
    },
    {
      "key": "file",
      "type": "text",
      "maxChars": 30,
      "role": "kicker"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 34,
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
      "target": "words-land-on-waveform-peaks",
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
    "ink": "#121110",
    "accent": "#FF4F12",
    "secondary": "#CDC7BA",
    "paper": "#F4F2ED",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "Think faster. Ship sooner.",
    "file": "launch_cut_v3.wav · 100 bpm",
    "caption": "Every word lands on a peak."
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
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 30,
      "role": "headline"
    },
    {
      "key": "file",
      "label": "File",
      "type": "text",
      "max": 30,
      "role": "kicker"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 34,
      "role": "caption"
    }
  ],
  "name": "Waveform Word Hits",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-beat-waveform",
    "bundleSha256": "991876245c319e50504c6c555b0bb8e04e334b4b897b5f4e304109d61af3644e",
    "sourceSnapshot": {
      "sha256": "1f6ce6492f581e3c8c64310c021d09e41636a62ca2784e1de4c2e9015f49ad94",
      "files": 1757
    },
    "renderedAt": "2026-10-08T18:34:34.532Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/16x9-paper.png",
        "sha256": "4828de11877074cd042d080b2859a02106c9313b7dd793973c010c6500937e10"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/16x9-night.png",
        "sha256": "0e3e657c824e26f3c0b3fa54fc4e4104d3ee36172e5b16287e118392ba99f292"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/16x9-color.png",
        "sha256": "640514bfe04fd5d35b25ad6442f178ae976facd6f1ed80a9b3025014f531c630"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/9x16-paper.png",
        "sha256": "dee34883c742abd47532d7db29a222d5e0f0bd75199a4207e343c2f61366fcc5"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/9x16-night.png",
        "sha256": "6299565b81c32ff8ee77981fdc97e091005256e087a56a829beaf709ca744bbe"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/9x16-color.png",
        "sha256": "2ea3f5792f3da06d0c7798ca4d329e061409d955b61f898060f9caa18e1f9593"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/1x1-paper.png",
        "sha256": "fc5f3ceedd836c9428bcb7ff94fb88e4645f23475590a768114caab25268bbb4"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/1x1-night.png",
        "sha256": "1b9b61d8e95fd97c3a68d67d8e69430307ecf0548471de8959141cb179dbee0f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/1x1-color.png",
        "sha256": "1a6922155440bfa653a8aa6ddd94e69476276c074dd49faeab155cd30c0c8bd0"
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
          "mg-beat-waveform--16x9",
          "mg-beat-waveform--9x16",
          "mg-beat-waveform--1x1"
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
            "paperNight": 41.198893229166664,
            "paperColor": 23.286973741319443,
            "region": {
              "left": 3,
              "top": 75,
              "width": 1914,
              "height": 913
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 45.44330512152778,
            "paperColor": 23.83645290798611,
            "region": {
              "left": 2,
              "top": 170,
              "width": 1076,
              "height": 1611
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 39.525960286458336,
            "paperColor": 22.435709635416668,
            "region": {
              "left": 2,
              "top": 71,
              "width": 1076,
              "height": 944
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
            "occupancy": 1.189110626889645,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.189110626889645,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1943432369089613,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.178860014942191,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1847432838876293,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1840078752694496,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2315642992450755,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2315642992450755,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2315642992450755,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.523546006944445,
        "frames": [
          16,
          108,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 8.570963541666666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/16x9-duration-90-frame-10.png",
                "sha256": "b4c108c427d23dde49dc79a8941b5c99e0f8770380dde7183235adbbea535b9e",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/16x9-duration-90-frame-89.png",
                "sha256": "fdd4e537afc47605e815bfa3aab590955a05ddf792faecba3e8a3d2e17d2f8ca",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/16x9-duration-90-frame-79.png",
                "sha256": "82edf1d1eae7651855dcf94c754bea79c491cefb68b0bc3852a5c8ebe19c4103",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.5234375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/16x9-duration-900-frame-16.png",
                "sha256": "5d16f46b3e93b05e6c412b6492d66bce7273ff028f9a5d3d919e67e8a673c1e5",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/16x9-duration-900-frame-108.png",
                "sha256": "1f37f6d8ea0e70ca386f09ed4964de2e0303b5a549d7588ab95cdd08d281cc0e",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/16x9-duration-900-frame-792.png",
                "sha256": "7821d9466258a1a3b5d2111c1cbc128bc6c7fd1e3d8726639b2063e32af47036",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/16x9-duration-900-frame-899.png",
                "sha256": "9d03ff7b53fad443a1c29a789847d441e494ab4b0fdb650a0387e26ca3991251",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 7.147894965277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/9x16-duration-90-frame-10.png",
                "sha256": "9db3e877897cbfc78782f59e132afd6637f4a910adae46396ddea3710fb9d73c",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/9x16-duration-90-frame-89.png",
                "sha256": "76abfbf642807061441d9263880078a22b6a63929b7727097485333f0396abed",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/9x16-duration-90-frame-79.png",
                "sha256": "efc686288969937359910691f966f41fd1fd46ec5b4777663a13c061670fd01e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 6.437608506944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/9x16-duration-900-frame-16.png",
                "sha256": "9640d39c9c56f5839d38c01dd632c32d7dd2e1fe779ce647dfe959a602505df6",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/9x16-duration-900-frame-108.png",
                "sha256": "1b84118fc418b67dc3f18d0ebfab06b382a3e84eb87edfbb2eb386a60b0bcf18",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/9x16-duration-900-frame-792.png",
                "sha256": "c1e08414819c5c28d755d2dcf0acc3227de88dbf3d17f7859516312866082162",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/9x16-duration-900-frame-899.png",
                "sha256": "ef3928421819dc897f2b7441d27516ec4c99a31763234e72c58b3b5e5342400b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 8.196397569444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/1x1-duration-90-frame-10.png",
                "sha256": "542e58b65656126d7e89051649cf390cefb1c01d3eaeeaf69ec0940c78fcf236",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/1x1-duration-90-frame-89.png",
                "sha256": "1722a3e55202f95f2b0e12bb265ae0163ae08e6d38457b37027c23714553d406",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/1x1-duration-90-frame-79.png",
                "sha256": "1722a3e55202f95f2b0e12bb265ae0163ae08e6d38457b37027c23714553d406",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 7.294813368055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/1x1-duration-900-frame-16.png",
                "sha256": "52f5db622ccd186d5c2487cac3e1bd098f5223d19017ea725bd8136ca0005b99",
                "alphaMass": 587520
              },
              {
                "frame": 108,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/1x1-duration-900-frame-108.png",
                "sha256": "1722a3e55202f95f2b0e12bb265ae0163ae08e6d38457b37027c23714553d406",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/1x1-duration-900-frame-792.png",
                "sha256": "1722a3e55202f95f2b0e12bb265ae0163ae08e6d38457b37027c23714553d406",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-mg4/mg-beat-waveform/1x1-duration-900-frame-899.png",
                "sha256": "1722a3e55202f95f2b0e12bb265ae0163ae08e6d38457b37027c23714553d406",
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
        "note": "Words punch in on waveform peaks as a playhead crosses the track; kinetic title."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 43,
        "compared": 43,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "991876245c319e50504c6c555b0bb8e04e334b4b897b5f4e304109d61af3644e",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-08T19:02:07.506Z",
      "basis": "All 61 launch-video gallery prototypes go into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beat-waveform/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beat-waveform/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beat-waveform/16x9/detail.mp4",
      "bg": "#f4f2ed",
      "posterFrame": 108,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4378e36c21d4b27ff39a4156f743a0465934f8aea6c299a4ee4b0571e857ffaf",
        "loop": "775545d3bd0a8a285aa72639048ecfb5015db63af504df285dafd6157329d77a",
        "detail": "e80166d8bf96867e0c25c8d31b6cd105fe472558720735172ea469c99476f4bf"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beat-waveform/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beat-waveform/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beat-waveform/9x16/detail.mp4",
      "bg": "#f4f2ed",
      "posterFrame": 108,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8c9b0d752dbb98190a085778ad27c3490fdcaa92bf334c540fb27d7cdbc90192",
        "loop": "1329627bb0fc8b338105d21c5f4fd9a568f8b966b109c3d95e4fadfb777394c5",
        "detail": "07ac3eed888ea322968ca6a37f9c401ad3462879349a90e65a0369c3a2bb15a5"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-beat-waveform/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-beat-waveform/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-beat-waveform/1x1/detail.mp4",
      "bg": "#f4f2ed",
      "posterFrame": 108,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3899b2f9350bb378dff8a6fbe83f355ec452120122b6084959a96cacb6ecc65c",
        "loop": "5c691fb3c0836d08224c2ad6af76b41516b90e1365aa5ccdcc070ccde3cabb60",
        "detail": "956c897fa8d9c7da8ebd80a1644352729f93b7ba98fe5a91c9a1e330e82ffefc"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/991876245c319e50504c6c555b0bb8e04e334b4b897b5f4e304109d61af3644e/index.mjs",
    "sha256": "991876245c319e50504c6c555b0bb8e04e334b4b897b5f4e304109d61af3644e",
    "bytes": 186912,
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
    "at": "2026-10-08T19:30:50.921Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
